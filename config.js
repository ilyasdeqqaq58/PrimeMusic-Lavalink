

module.exports = {
  TOKEN: "MTUwNTI0MTg2MTM2NTgyNTY3Ng.GtAUqG.G40DR4zOh6e37sCOZ815zKBTRtifESHinWtUI0",
  language: "en",
  ownerID: ["770759154104664064"], 
  mongodbUri : "mongodb+srv://ilyasde:<db_password>@discordbot.eeletqq.mongodb.net/?appName=Discordbot",
  spotifyClientId : "3e74048b2af649caa828f46d2d52877e",
  spotifyClientSecret : "95d76b7885bb469388db3a67641b4994",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#e11d2e",
  customEmoji: true,  // true = use custom emoji IDs from emoji.js, false = use default unicode
  emojiTheme: "redwhite", // active custom emoji theme key in emoji.js
  helpBannerUrl: "https://i.ibb.co/GfTxbJfC/7-edited.png", // Optional: set a direct image URL to show an inline banner in /help
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5,
  showProgressBar: false,  // Show progress bar in track embed
  showVisualizer: false,  // Show visualizer on music card (disabled for low-memory optimization)
  generateSongCard: true,  // custom song card image, if false uses thumbnail
  metadataTag: true,  // If true, always show Song Details even when the card image is present
  lowMemoryMode: true,   // Performance optimizations for low-memory environments (512MB RAM)
  errorLog: "", 
  nodes: [
      {
      name: "ilyasde",
      password: "ilyasde",
      host: "8080",
      port: 8080,
      secure: false
    }
  ]
}
