import { defineConfig } from "vite";
import { resolve } from "path";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ command, mode }) => {
  const isProd = mode === "production";

  return {
    server: {
      port: 3000,
      open: true,
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    build: {
      target: "es2015", // Modern browsers support
      minify: "terser", // Use Terser for better minification
      cssCodeSplit: true, // Split CSS by chunk
      reportCompressedSize: true, // Report gzip size
      chunkSizeWarningLimit: 500, // Set lower limit for warnings (in KB)
      sourcemap: false, // Disable sourcemaps in production
      assetsInlineLimit: 4096, // Inline small assets (4KB)
      outDir: "dist",
      assetsDir: "assets",
      terserOptions: {
        compress: {
          drop_console: isProd, // Remove console in production
          drop_debugger: isProd, // Remove debugger statements
          pure_funcs: isProd ? ["console.log", "console.info"] : [],
        },
        output: {
          comments: false, // Remove comments
        },
        ecma: 2015,
      },
      rollupOptions: {
        output: {
          manualChunks: {
            "eleva-core": ["eleva"], // Separate Eleva for better caching
          },
          // Optimize chunk names
          chunkFileNames: isProd
            ? "assets/[name].[hash].js"
            : "assets/[name].js",
          entryFileNames: isProd
            ? "assets/[name].[hash].js"
            : "assets/[name].js",
          assetFileNames: isProd
            ? "assets/[name].[hash].[ext]"
            : "assets/[name].[ext]",
        },
      },
    },
    // Enable brotli and gzip compression
    plugins: [
      compression({
        // Generate .gz files
        algorithm: "gzip",
        ext: ".gz",
      }),
      compression({
        // Generate .br files (higher compression)
        algorithm: "brotliCompress",
        ext: ".br",
      }),
      isProd &&
        visualizer({
          filename: "stats.html",
          gzipSize: true,
          brotliSize: true,
          open: false,
        }),
    ].filter(Boolean),
  };
});
