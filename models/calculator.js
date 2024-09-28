function add(numbers) {
    if (!numbers || typeof (numbers) != 'string') {
        return 0;
    }

    const numsArray = numbers.split(/[,\n]/).map(Number);
    return numsArray.reduce((sum, num) => sum + num, 0);
}

module.exports = {
    add
}
