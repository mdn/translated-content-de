---
title: 2D Kollisionserkennung
slug: Games/Techniques/2D_collision_detection
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{GamesSidebar}}

Algorithmen zur Kollisionserkennung in 2D-Spielen hängen von der Art der sich kollidierenden Formen ab (z.B. Rechteck zu Rechteck, Rechteck zu Kreis, Kreis zu Kreis). Normalerweise haben Sie eine einfache generische Form, die die Einheit als "Hitbox" abdeckt, sodass die Kollision zwar nicht pixelgenau ist, aber gut genug aussieht und über mehrere Einheiten hinweg leistungsfähig bleibt. Dieser Artikel bietet einen Überblick über die gebräuchlichsten Techniken zur Kollisionserkennung in 2D-Spielen.

## Achsen-aligned Bounding Box (AABB)

Eine der einfacheren Formen der Kollisionserkennung ist zwischen zwei Rechtecken, die achsen-aligned sind – das bedeutet, keine Rotation. Der Algorithmus funktioniert, indem sichergestellt wird, dass keine Lücke zwischen den 4 Seiten der Rechtecke besteht. Jede Lücke bedeutet, dass keine Kollision vorliegt.

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

## Kreis Kollision

Eine weitere einfache Form für die Kollisionserkennung ist zwischen zwei Kreisen. Dieser Algorithmus funktioniert, indem die Mittelpunkte der beiden Kreise genommen werden und sichergestellt wird, dass der Abstand zwischen den Mittelpunkten kleiner ist als die Summe der beiden Radien.

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

## Separating Axis Theorem

Dies ist ein Kollisionsalgorithmus, der eine Kollision zwischen zwei _konvexen_ Polygonen erkennen kann. Er ist komplexer zu implementieren als die obigen Methoden, aber leistungsfähiger. Die Komplexität eines solchen Algorithmus bedeutet, dass wir Leistungsoptimierung in Betracht ziehen müssen, die im nächsten Abschnitt behandelt wird.

Die Implementierung von SAT liegt außerhalb des Umfangs dieser Seite, siehe daher die empfohlenen Tutorials unten:

1. [Erklärung des Separating Axis Theorem (SAT)](https://www.sevenson.com.au/programming/sat/)
2. [Kollisionserkennung und -behebung](https://www.metanetsoftware.com/technique/tutorialA.html)
3. [Kollisionserkennung mit dem Separating Axis Theorem](https://code.tutsplus.com/collision-detection-using-the-separating-axis-theorem--gamedev-169t)
4. [SAT (Separating Axis Theorem)](https://dyn4j.org/2010/01/sat/)
5. [Separating Axis Theorem](https://programmerart.weebly.com/separating-axis-theorem.html)

## Kollisionsleistung

Obwohl einige dieser Algorithmen zur Kollisionserkennung einfach genug zu berechnen sind, kann es Verschwendung von Zyklen sein, _jede_ Entität mit jeder anderen Entität zu testen. In der Regel teilen Spiele die Kollisionserkennung in zwei Phasen, breit und eng.

### Breite Phase

Die breite Phase sollte Ihnen eine Liste von Entitäten geben, die möglicherweise kollidieren könnten. Dies kann mit einer räumlichen Datenstruktur implementiert werden, die Ihnen eine grobe Vorstellung davon gibt, wo sich die Entität befindet und was sich in ihrer Nähe befindet. Einige Beispiele für räumliche Datenstrukturen sind Quad Trees, R-Trees oder ein räumliches Hashmap.

### Enge Phase

Wenn Sie eine kleine Liste von Entitäten zur Überprüfung haben, sollten Sie einen Algorithmus für die enge Phase verwenden (wie die oben genannten), um eine sichere Antwort darauf zu geben, ob es eine Kollision gibt oder nicht.
