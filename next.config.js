/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  output: "export",
  basePath: "/static",

  swcMinify: true,
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/s/:snapshotId",
        destination: "/api/sameorigin/:snapshotId",
      },
      { source: "/r/:snapshotId", destination: "/api/share/:snapshotId" },
    ];
  },
};
