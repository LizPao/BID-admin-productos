/*const index = (request, response) => {
    response.json({
        message: "Hello Word"
    });
}
module.exports = index;*/

module.exports.index = (request, response) => {
    response.json({
    message: 'Hello World',
    })
}