const { createCanvas } = require('canvas');
const fs = require('fs');

// Create canvas
const width = 200;
const height = 200;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Background
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, width, height);

// Outer circle
ctx.strokeStyle = '#ff0000';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.arc(100, 100, 95, 0, Math.PI * 2);
ctx.stroke();

// Inner circle
ctx.strokeStyle = '#ff0000';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.arc(100, 100, 85, 0, Math.PI * 2);
ctx.stroke();

// Dashed circle
ctx.setLineDash([4, 4]);
ctx.strokeStyle = '#ff0000';
ctx.lineWidth = 0.5;
ctx.beginPath();
ctx.arc(100, 100, 80, 0, Math.PI * 2);
ctx.stroke();
ctx.setLineDash([]);

// Corner elements
function drawCorner(x1, y1, x2, y2, x3, y3) {
    ctx.strokeStyle = '#ff0000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.stroke();
}

// Draw corners
drawCorner(30, 30, 40, 30, 40, 40);
drawCorner(170, 30, 160, 30, 160, 40);
drawCorner(30, 170, 40, 170, 40, 160);
drawCorner(170, 170, 160, 170, 160, 160);

// SCP Text
ctx.fillStyle = 'white';
ctx.font = 'bold 45px Arial Black';
ctx.textAlign = 'center';
ctx.fillText('SCP', 100, 85);

// Foundation Text
ctx.font = 'bold 24px Arial';
ctx.fillText('FOUNDATION', 100, 125);

// Motto
ctx.fillStyle = '#ff0000';
ctx.font = '10px Arial';
ctx.fillText('SECURE • CONTAIN • PROTECT', 100, 155);

// Save to file
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('scp-logo.png', buffer);
