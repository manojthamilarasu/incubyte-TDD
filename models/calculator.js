function add(numbers) {
    if (!numbers || typeof (numbers) != 'string') {
        return 0;
    }

    let delimiterExpression = /[,\n]/;

    // supporting // 
    if (numbers.startsWith("//")) {
        const numberSegment = numbers.split('\n');
        delimiterExpression = new RegExp(`[${numberSegment[0].slice(2)}]`);
        numbers = numberSegment[1];
    }

    const numsArray = numbers.split(delimiterExpression).map(Number);

    const negatives = numsArray.filter(num => num < 0);
    if (negatives.length) {
        throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }

    return numsArray.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
}

module.exports = {
    add
}
