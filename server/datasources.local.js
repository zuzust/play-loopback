const dbUrl = process.env.DB_URL;

if (dbUrl) {
  console.log('Using DB url:', dbUrl)

  const dataSources = {
    db: {
      name: 'db',
      connector: process.env.DB_CONNECTOR,
      url: dbUrl,
    }
  }

  module.exports = dataSources
}
