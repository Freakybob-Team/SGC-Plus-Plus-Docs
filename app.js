/*
MIT License

Copyright (c) 2025 Freakybob-Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

async function loadMarkdown(file) {
    const response = await fetch(file);
    const text = await response.text();
    const content = document.getElementById('content');
    content.innerHTML = marked.parse(text);
}

loadMarkdown('documentation/index.md');

/**
 * To define a Markdown loader, use this code:
 * document.getElementById('<markdown doc name>').addEventListener('click', () => {
 *     loadMarkdown('documentation/functions/<markdown doc name>.md');
 * });
 * - mpax235
 */

document.getElementById('const').addEventListener('click', () => {
    loadMarkdown('documentation/functions/const.md');
});

document.getElementById('gPrintln').addEventListener('click', () => {
    loadMarkdown('documentation/functions/gPrintln.md');
});

document.getElementById('ifelse').addEventListener('click', () => {
    loadMarkdown('documentation/functions/ifelse.md');
});

document.getElementById('import').addEventListener('click', () => {
    loadMarkdown('documentation/functions/import.md');
});

document.getElementById('letvar').addEventListener('click', () => {
    loadMarkdown('documentation/functions/letvar.md');
});

// let var hahahahahahahashahahahaha

// holy shit my la;top just exlode
// wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow ow wow ow wiow wow wow now wio wow o

document.getElementById('ball8').addEventListener('click', () => {
    loadMarkdown('documentation/programs/8ball.md');
});

document.getElementById('calculatorexample').addEventListener('click', () => {
    loadMarkdown('documentation/programs/calculator.md');
});

document.getElementById('lastfmrecentexample').addEventListener('click', () => {
    loadMarkdown('documentation/programs/lastfmrecentscrobble.md');
});