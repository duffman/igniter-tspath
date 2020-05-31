

async function tebb(): Promise<number> {
	return new Promise((resolve, reject) => {
		resolve(1);
	});
}


function* balle() {
	let test = yield tebb();
}
