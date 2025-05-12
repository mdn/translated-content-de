---
title: 2D-Kollisionserkennung
slug: Games/Techniques/2D_collision_detection
l10n:
  sourceCommit: 33e22d8d3b374f47040fff448d91478d67e35c05
---

{{GamesSidebar}}

Algorithmen zur Erkennung von Kollisionen in 2D-Spielen hängen von den Arten von Formen ab, die kollidieren können (z.B. Rechteck zu Rechteck, Rechteck zu Kreis, Kreis zu Kreis). Normalerweise haben Sie eine einfache generische Form, die die Entität abdeckt und als "Hitbox" bekannt ist. Auch wenn die Kollision nicht pixelgenau ist, sieht sie gut genug aus und ist bei mehreren Entitäten leistungsfähig. Dieser Artikel bietet einen Überblick über die gebräuchlichsten Techniken zur Bereitstellung der Kollisionserkennung in 2D-Spielen.

## Achsen-ausgerichtete Begrenzungsbox

Eine der einfacheren Formen der Kollisionserkennung besteht zwischen zwei rechteckigen, achsen-ausgerichteten Formen – also ohne Rotation. Der Algorithmus funktioniert, indem sichergestellt wird, dass es keine Lücke zwischen den 4 Seiten der Rechtecke gibt. Jede Lücke bedeutet, dass keine Kollision vorliegt.

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

> **Hinweis:** [Ein weiteres Beispiel ohne Canvas oder externe Bibliotheken](https://jsfiddle.net/jlr7245/217jrozd/3/).

## Kreiskollision

Eine weitere einfache Form zur Kollisionserkennung besteht zwischen zwei Kreisen. Dieser Algorithmus funktioniert, indem die Mittelpunkte der beiden Kreise genommen werden und sichergestellt wird, dass der Abstand zwischen den Mittelpunkten kleiner ist als die Summe der beiden Radien.

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
  const dx = circle1.x + circle1.radius - (circle2.x + circle2.radius);
  const dy = circle1.y + circle1.radius - (circle2.y + circle2.radius);
  const distance = Math.sqrt(dx * dx + dy * dy);

  const colliding = distance < circle1.radius + circle2.radius;
  this.color = colliding ? "green" : "blue";
});
```

{{ EmbedLiveSample('Circle_Collision', '700', '300') }}

> [!NOTE]
> Die `x`- und `y`-Koordinaten der Kreise beziehen sich auf die oberen linken Ecken, daher müssen wir den Radius addieren, um ihre Mittelpunkte zu vergleichen.

> **Hinweis:** [Hier ist ein weiteres Beispiel ohne Canvas oder externe Bibliotheken.](https://jsfiddle.net/jlr7245/teb4znk0/20/)

## Trennachsentheorem

Dies ist ein Kollisionsalgorithmus, der eine Kollision zwischen zwei _konvexen_ Polygonen erkennen kann. Er ist komplizierter zu implementieren als die oben genannten Methoden, aber leistungsfähiger. Die Komplexität eines solchen Algorithmus bedeutet, dass wir Performance-Optimierungen in Erwägung ziehen müssen, was im nächsten Abschnitt behandelt wird.

Das Implementieren von SAT liegt außerhalb des Rahmens dieser Seite, daher siehe die empfohlenen Tutorials unten:

1. [Erklärung des Trennachsentheorems (SAT)](https://www.sevenson.com.au/programming/sat/)
2. [Kollisionserkennung und Reaktion](https://www.metanetsoftware.com/technique/tutorialA.html)
3. [Kollisionserkennung unter Verwendung des Trennachsentheorems](https://code.tutsplus.com/collision-detection-using-the-separating-axis-theorem--gamedev-169t)
4. [SAT (Trennachsentheorem)](https://dyn4j.org/2010/01/sat/)
5. [Trennachsentheorem](https://programmerart.weebly.com/separating-axis-theorem.html)

## Kollisionsleistung

Während einige dieser Algorithmen zur Kollisionserkennung einfach genug zu berechnen sind, können sie eine Verschwendung von Rechenzyklen sein, wenn _jede_ Entität mit jeder anderen Entität getestet wird. Normalerweise wird die Kollision in Spielen in zwei Phasen aufgeteilt, grob und eng.

### Grobe Phase

Die grobe Phase sollte Ihnen eine Liste von Entitäten geben, die _kollidieren könnten_. Dies kann mit einer räumlichen Datenstruktur implementiert werden, die Ihnen eine ungefähre Vorstellung davon gibt, wo die Entität existiert und was sich um sie herum befindet. Einige Beispiele für räumliche Datenstrukturen sind Quad Trees, R-Trees oder ein räumliches Hashmap.

### Enge Phase

Wenn Sie eine kleine Liste von Entitäten zu überprüfen haben, möchten Sie einen engen Phasen-Algorithmus (wie die oben genannten) verwenden, um eine sichere Antwort darauf zu geben, ob eine Kollision vorliegt oder nicht.
