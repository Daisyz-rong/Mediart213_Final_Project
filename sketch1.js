// --- 用 p5 实例模式包装 ---
new p5((p) => {

  p.setup = function () {
    let container = document.getElementById("cat-section");
    let w = container.clientWidth;
    let h = container.clientHeight;

    let canvas = p.createCanvas(w, h);
    canvas.parent("cat-section");

    p.stroke(0);
    p.strokeWeight(6);
    p.noFill();

    drawMinimalCat(w * 0.8, h * 0.55, h * 0.0016);
  };


  function drawMinimalCat(cx, cy, s) {
    p.push();
    p.translate(cx, cy);
    p.scale(s);

    // 尾巴
    p.beginShape();
    p.curveVertex(-10, -260);
    p.curveVertex(-10, -260);
    p.curveVertex(-30, -200);
    p.curveVertex(10, -140);
    p.curveVertex(40, -80);
    p.curveVertex(60, -30);
    p.endShape();

    // 头外侧两边
    p.beginShape();
    p.curveVertex(-80, -40);
    p.curveVertex(-80, -40);
    p.curveVertex(-60, -20);
    p.curveVertex(-40, 10);
    p.curveVertex(-20, 40);
    p.endShape();

    p.beginShape();
    p.curveVertex(80, -40);
    p.curveVertex(80, -40);
    p.curveVertex(60, -20);
    p.curveVertex(40, 10);
    p.curveVertex(20, 40);
    p.endShape();

    // 耳朵
    p.beginShape();
    p.vertex(-40, -40);
    p.vertex(-20, -80);
    p.vertex(0, -40);
    p.endShape();

    p.beginShape();
    p.vertex(40, -40);
    p.vertex(20, -80);
    p.vertex(0, -40);
    p.endShape();

    // 鼻子
    p.push();
    p.fill(0);
    p.noStroke();
    drawHeart(0, 5, 10);
    p.pop();

    // 胡须
    p.stroke(0);
    p.strokeWeight(4);

    p.line(-10, 10, -70, 0);
    p.line(-10, 20, -70, 20);
    p.line(-10, 30, -60, 40);

    p.line(10, 10, 70, 0);
    p.line(10, 20, 70, 20);
    p.line(10, 30, 60, 40);

    // 身体
    p.strokeWeight(6);
    p.beginShape();
    p.curveVertex(-50, 40);
    p.curveVertex(-50, 40);
    p.curveVertex(-60, 120);
    p.curveVertex(-70, 200);
    p.curveVertex(-40, 300);
    p.endShape();

    p.beginShape();
    p.curveVertex(50, 40);
    p.curveVertex(50, 40);
    p.curveVertex(60, 120);
    p.curveVertex(70, 200);
    p.curveVertex(40, 300);
    p.endShape();

    // 腿
    p.beginShape();
    p.curveVertex(-25, 300);
    p.curveVertex(-25, 300);
    p.curveVertex(-20, 350);
    p.curveVertex(-30, 400);
    p.endShape();

    p.beginShape();
    p.curveVertex(25, 300);
    p.curveVertex(25, 300);
    p.curveVertex(20, 350);
    p.curveVertex(30, 400);
    p.endShape();

    // 脚掌
    p.noFill();
    p.arc(-30, 400, 40, 30, 0, Math.PI);
    p.arc(30, 400, 40, 30, 0, Math.PI);

    p.pop();
  }

  // 画心形（鼻子）
  function drawHeart(x, y, size) {
    p.beginShape();
    p.vertex(x, y);
    p.bezierVertex(x - size, y - size, x - size * 1.5, y + size / 3, x, y + size);
    p.bezierVertex(x + size * 1.5, y + size / 3, x + size, y - size, x, y);
    p.endShape(p.CLOSE);
  }

});