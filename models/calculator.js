function add(numbers) {
    if (!numbers || typeof (numbers) != 'string') {
        return 0;
    }

    let delimiterExpression = /[,\n]/;
    if (numbers.startsWith("//")) {
        const numberSegment = numbers.split('\n');
        delimiterExpression = new RegExp(`[${numberSegment[0].slice(2)}]`);
        numbers = numberSegment[1];
    }

    const numsArray = numbers.split(delimiterExpression).map(Number);
    return numsArray.reduce((sum, num) => sum + num, 0);
}

module.exports = {
    add
}
