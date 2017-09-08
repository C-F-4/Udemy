var canvas = document.getElementById('canvasGame');
var drawContext = canvas.getContext('2d');

drawContext.beginPath();
drawContext.rect(20, 20, 440, 280);
drawContext.fillStyle = '#ff0000';
drawContext.fill();
drawContext.closePath();

drawContext.beginPath();
drawContext.arc(240, 160, 100, 0, (Math.PI), false);
drawContext.strokeStyle = 'rgba(0, 0, 0, 1)';
drawContext.stroke();
drawContext.fillStyle = 'aliceblue';
drawContext.fill();
drawContext.closePath();

drawContext.beginPath();
drawContext.rect(0, 0, 480, 320);
drawContext.strokeStyle = 'rgba(0, 0, 255, 0.5)';
drawContext.stroke();
drawContext.closePath();

drawContext.font = '80pt Calibri';
drawContext.fillStyle = 'blue';
drawContext.fillText('>', 80, 120);

drawContext.font = '80pt Calibri';
drawContext.fillStyle = 'blue';
drawContext.fillText('<', 350, 120);

drawContext.font = '80pt Calibri';
drawContext.fillStyle = 'black';
drawContext.fillText('.', 229, 131);
drawContext.fillStyle = 'blue';
drawContext.fillText('.', 230, 130);
