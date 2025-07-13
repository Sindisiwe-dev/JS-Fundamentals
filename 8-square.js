const size = process.argv[2];
const sizeNum = parseInt(size);

if (isNaN(sizeNum) || sizeNum === undefined) {
    console.log('Missing size');
} else {
    for (let i = 0; i < sizeNum; i++) {
        let row = '';
        for (let j = 0; j < sizeNum; j++) {
            row += 'X';
        }
        console.log(row);
    }
}