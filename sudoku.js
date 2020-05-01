class Sudoku {
    constructor(size) {
        // Save the size for use in other functions
        this.size = size;
        // Create the 2D Array representing the Sudoku
        this.fields = Array(size).fill([]).map((x) => Array(size).fill(0));
    }

    generate() {
        console.log(this.fields);
    }
}
