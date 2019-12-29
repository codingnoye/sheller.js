const exec = require('child_process').exec

const sheller = (cmd) => {
    return new Promise((res, rej) => {
	exec(cmd, (err, stdout, stderr) => {
	    if (err || stderr) rej([err, stderr])
	    else res(stdout)
	})
    })
}

module.exports = sheller
