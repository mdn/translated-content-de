---
title: 2D-Kollisionsdetektion
slug: Games/Techniques/2D_collision_detection
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{GamesSidebar}}

Algorithmen zur Erkennung von Kollisionen in 2D-Spielen hängen von der Art der Formen ab, die kollidieren können (z. B. Rechteck zu Rechteck, Rechteck zu Kreis, Kreis zu Kreis). Im Allgemeinen verwendet man eine einfache generische Form, die die Entität als "Hitbox" umschließt, so dass, auch wenn die Kollision nicht pixelgenau ist, sie ausreichend gut aussieht und leistungsstark über mehrere Entitäten hinweg ist. Dieser Artikel gibt einen Überblick über die gängigsten Techniken zur Kollisionsdetektion in 2D-Spielen.

## Achsen ausgerichtete Begrenzungsrahmen

Eine der einfacheren Formen der Kollisionsdetektion besteht zwischen zwei Rechtecken, die achsen ausgerichtet sind – das bedeutet ohne Rotation. Der Algorithmus funktioniert, indem sichergestellt wird, dass es keine Lücke zwischen den 4 Seiten der Rechtecke gibt. Jegliche Lücke bedeutet, dass keine Kollision existiert.

```html hidden
<div id="cr-stage"></div>
<p>
  Move the rectangle with arrow keys. Green means collision, blue means no
  collision.
</p>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crafty/0.5.4/crafty-min.js"></script>
```

```js
Crafty.init(200, 200);

const dim1 = { x: 5, y: 5, w: 50, h: 50 };
const dim2 = { x: 20, y: 10, w: 60, h: 40 };

const rect1 = Crafty.e("2D, Canvas, Color").attr(dim1).color("red");

const rect2 = Crafty.e("2D, Canvas, Color, Keyboard, Fourway")
  .fourway(2)
  .attr(dim2)
  .color("blue");

rect2.bind("EnterFrame", function () {
  if (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.y + rect1.h > rect2.y
  ) {
    // Collision detected!
    this.color("green");
  } else {
    // No collision
    this.color("blue");
  }
});
```

{{ EmbedLiveSample('Axis-Aligned_Bounding_Box', '700', '300') }}

> **Note:** [Ein weiteres Beispiel ohne Canvas oder externe Bibliotheken](https://jsfiddle.net/jlr7245/217jrozd/3/).

## Kreis-Kollision

Eine weitere einfache Form für die Kollisionsdetektion besteht zwischen zwei Kreisen. Dieser Algorithmus funktioniert, indem die Mittelpunkte der beiden Kreise genommen werden und sichergestellt wird, dass der Abstand zwischen den Mittelpunkten kleiner ist als die Summe der beiden Radien.

```html hidden
<div id="cr-stage"></div>
<p>
  Move the circle with arrow keys. Green means collision, blue means no
  collision.
</p>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crafty/0.5.4/crafty-min.js"></script>
```

```css hidden
#cr-stage {
  position: static !important;
  height: 200px !important;
}
```

```js
Crafty.init(200, 200);

const dim1 = { x: 5, y: 5 };
const dim2 = { x: 20, y: 20 };

Crafty.c("Circle", {
  circle(radius, color) {
    this.radius = radius;
    this.w = this.h = radius * 2;
    this.color = color || "#000000";

    this.bind("Move", Crafty.DrawManager.drawAll);
    return this;
  },

  draw() {
    const ctx = Crafty.canvas.context;
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.x + this.radius,
      this.y + this.radius,
      this.radius,
      0,
      Math.PI * 2,
    );
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  },
});

const circle1 = Crafty.e("2D, Canvas, Circle").attr(dim1).circle(15, "red");

const circle2 = Crafty.e("2D, Canvas, Circle, Fourway")
  .fourway(2)
  .attr(dim2)
  .circle(20, "blue");

circle2.bind("EnterFrame", function () {
  const dx = circle1.x - circle2.x;
  const dy = circle1.y - circle2.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  const colliding = distance < circle1.radius + circle2.radius;
  this.color = colliding ? "green" : "blue";
});
```

{{ EmbedLiveSample('Circle_Collision', '700', '300') }}

> **Note:** [Hier ist ein weiteres Beispiel ohne Canvas oder externe Bibliotheken.](https://jsfiddle.net/jlr7245/teb4znk0/20/)

## Trennung der Achsentheorie

Dies ist ein Kollisionsalgorithmus, der eine Kollision zwischen zwei konvexen Polygonen erkennen kann. Es ist komplizierter zu implementieren als die obigen Methoden, aber dafür leistungsstärker. Die Komplexität eines solchen Algorithmus bedeutet, dass wir Performance-Optimierungen in Betracht ziehen müssen, die im nächsten Abschnitt behandelt werden.

Die Implementierung der SAT liegt außerhalb des Umfangs dieser Seite, daher siehe die empfohlenen Anleitungen unten:

1. [Erklärung zur Trennung der Achsentheorie (SAT)](https://www.sevenson.com.au/programming/sat/)
2. [Kollisionsdetektion und -antwort](https://www.metanetsoftware.com/technique/tutorialA.html)
3. [Kollisionsdetektion mit der Trennung der Achsentheorie](https://code.tutsplus.com/collision-detection-using-the-separating-axis-theorem--gamedev-169t)
4. [SAT (Trennung der Achsentheorie)](https://dyn4j.org/2010/01/sat/)
5. [Trennung der Achsentheorie](https://programmerart.weebly.com/separating-axis-theorem.html)

## Kollisionsleistung

Obwohl einige dieser Algorithmen zur Kollisionsdetektion einfach genug zu berechnen sind, kann es Verschwendung von Rechenzyklen sein, jede Entität mit jeder anderen Entität zu testen. Üblicherweise wird die Kollision in Spiele in zwei Phasen aufgeteilt: die breite und die enge Phase.

### Breite Phase

Die breite Phase sollte Ihnen eine Liste von Entitäten geben, die möglicherweise kollidieren könnten. Dies kann mit einer räumlichen Datenstruktur implementiert werden, die Ihnen eine grobe Vorstellung gibt, wo sich die Entität befindet und was sich in ihrer Umgebung befindet. Einige Beispiele für räumliche Datenstrukturen sind Quad-Trees, R-Trees oder ein räumlicher Hashmap.

### Enge Phase

Wenn Sie eine kleine Liste von Entitäten haben, die überprüft werden sollen, sollten Sie einen Algorithmus für die enge Phase verwenden (wie die oben aufgeführten), um eine sichere Antwort darauf zu geben, ob eine Kollision vorliegt oder nicht.
