let pawX, pawY;

function setup() {
  const hero = document.getElementById("catCanvasContainer");
  let canvas = createCanvas(hero.offsetWidth, hero.offsetHeight);
  canvas.parent("catCanvasContainer");

  pawX = width / 2;
  pawY = height / 2;
}

function windowResized() {
  const hero = document.getElementById("catCanvasContainer");
  resizeCanvas(hero.offsetWidth, hero.offsetHeight);
}

function draw() {
  clear();

  // 柔和跟随鼠标
  pawX = lerp(pawX, mouseX, 0.02);
  pawY = lerp(pawY, mouseY, 0.02);

  drawCatPaw(pawX, pawY);
}

/* ===== 可爱猫爪 ===== */
function drawCatPaw(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill(255, 205, 210); // 粉色

  // 缩放比例
  let s = 0.7;

  // 主肉垫（两个叠加椭圆）
  ellipse(0, 30 * s, 70 * s, 45 * s);
  ellipse(0, 20 * s, 50 * s, 50 * s);

  // 四个小肉球
  ellipse(-40 * s, 0 * s, 30 * s, 30 * s);
  ellipse(-15 * s, -25 * s, 30 * s, 30 * s);
  ellipse(15 * s, -25 * s, 30 * s, 30 * s);
  ellipse(40 * s, 0 * s, 30 * s, 30 * s);

  pop();
}


