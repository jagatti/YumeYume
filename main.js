// Get the note timing offset from localStorage or default to 0
let noteTimingOffset = parseInt(localStorage.getItem('noteTimingOffset')) || 0;

// Function to apply the note timing offset
function applyNoteTimingOffset(baseTiming) {
    return baseTiming + noteTimingOffset;
}

// Function to create a button for setting the offset
function createOffsetButton() {
    let offsetButton = document.getElementById('offsetButton');
    if (!offsetButton) {
        offsetButton = document.createElement('button');
        offsetButton.id = 'offsetButton';
        offsetButton.innerText = 'Set Note Timing Offset';
        document.body.appendChild(offsetButton);
        offsetButton.onclick = function() {
            const newOffset = prompt('Enter new note timing offset (ms):', noteTimingOffset);
            if (newOffset !== null) {
                noteTimingOffset = parseInt(newOffset);
                localStorage.setItem('noteTimingOffset', noteTimingOffset);
                displayCurrentOffset();
            }
        };
    }
}

// Function to display the current offset
function displayCurrentOffset() {
    let offsetDisplay = document.getElementById('offsetDisplay');
    if (!offsetDisplay) {
        offsetDisplay = document.createElement('div');
        offsetDisplay.id = 'offsetDisplay';
        document.body.appendChild(offsetDisplay);
    }
    offsetDisplay.innerText = 'Current Note Timing Offset: ' + noteTimingOffset + ' ms';
}

// Call functions to create button and display offset
createOffsetButton();
displayCurrentOffset();