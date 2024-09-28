function add(numbers) {
    if (!numbers || typeof (numbers) != 'string') {
        return 0;
    }
    let delimiterExpression = /[,\n]/;

    if (numbers.startsWith("//")) {
        const numberSegment = numbers.split('\n');
        const delimiterSection = numberSegment[0].slice(2);

        // Handle custom delimiters wrapped in square brackets
        if (delimiterSection.includes('[')) {
            delimiterExpression = delimiterSection.match(/\[(.*?)\]/g)  // Match all custom delimiters inside []
                .map(d => d.slice(1, -1))                               // Remove the square brackets
                .map(del => del.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) // Escape special regex characters in delimiters
                .join('|');                                             // Combine into a single regex pattern (with OR)
            delimiterExpression = new RegExp(delimiterExpression);
        } else {
            delimiterExpression = new RegExp(`[${delimiterSection}]`);  // For single character custom delimiters
        }

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
