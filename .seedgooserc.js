module.exports = {
    modelBaseDirectory: 'app.api/database/models', 
    models: ["*.js", "!db.js"],
    data: "data", 
    db: "mongodb://127.0.0.1:27017/travlr"
};