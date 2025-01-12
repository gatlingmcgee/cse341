const helloRoute = ('/', (req,res) => {
    res.send("Hello");
});

const worldRoute = ('/', (req,res) => {
    res.send("World");
});

module.exports = {
    helloRoute,
    worldRoute,
};