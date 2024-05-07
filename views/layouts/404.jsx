const React = require('react')
const Default = require('./default')

function NotFound () {
    return (
        <Default>
            <h3>Bread not found!</h3>
            <p>
                <a href="http://localhost:3003/breads/1">Return to home page</a>
            </p>
        </Default>
    )
}

module.exports = NotFound