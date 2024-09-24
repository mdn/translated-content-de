---
title: 2D-Kollisionserkennung
slug: Games/Techniques/2D_collision_detection
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{GamesSidebar}}

Algorithmen zur Erkennung von Kollisionen in 2D-Spielen hängen von den Arten der Formen ab, die kollidieren können (z.B. Rechteck zu Rechteck, Rechteck zu Kreis, Kreis zu Kreis). Im Allgemeinen wird eine einfache generische Form verwendet, die das Objekt abdeckt, bekannt als "Hitbox", sodass auch wenn die Kollision nicht pixelgenau ist, sie dennoch gut genug aussieht und über mehrere Objekte hinweg leistungsfähig bleibt. Dieser Artikel bietet einen Überblick über die gängigsten Techniken zur Kollisionserkennung in 2D-Spielen.

## Achsen-ausgerichtete Begrenzungsrahmen (Axis-Aligned Bounding Box)

Eine der einfacheren Formen der Kollisionserkennung ist die zwischen zwei ausgerichteten Rechtecken, also ohne Drehung. Der Algorithmus funktioniert, indem sichergestellt wird, dass sich keine Lücke zwischen den 4 Seiten der Rechtecke befindet. Jede Lücke bedeutet, dass keine Kollision existiert.

```html hidden
<div id="cr-stage"></div>
<p>
  Bewegen Sie das Rechteck mit den Pfeiltasten. Grün bedeutet Kollision, Blau bedeutet keine Kollision.
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

Eine weitere einfache Form der Kollisionserkennung ist die zwischen zwei Kreisen. Dieser Algorithmus funktioniert, indem die Mittelpunkte der beiden Kreise genommen werden und sichergestellt wird, dass der Abstand zwischen den Mittelpunkten weniger als die Summe der beiden Radien beträgt.

```html hidden
<div id="cr-stage"></div>
<p>
  Bewegen Sie den Kreis mit den Pfeiltasten. Grün bedeutet Kollision, Blau bedeutet keine Kollision.
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

## Trennachsen-Theorem (Separating Axis Theorem)

Dies ist ein Kollisionsalgorithmus, der eine Kollision zwischen zwei _konvexen_ Polygonen erkennen kann. Es ist komplizierter zu implementieren als die oben genannten Methoden, aber leistungsfähiger. Die Komplexität eines solchen Algorithmus bedeutet, dass wir Leistungsoptimierungen in Betracht ziehen müssen, die im nächsten Abschnitt behandelt werden.

Die Implementierung des SAT liegt außerhalb des Umfangs dieser Seite, daher sehen Sie sich die unten empfohlenen Tutorials an:

1. [Erklärung des Trennachsen-Theorems (SAT)](https://www.sevenson.com.au/programming/sat/)
2. [Kollisionserkennung und -reaktion](https://www.metanetsoftware.com/technique/tutorialA.html)
3. [Kollisionserkennung mithilfe des Trennachsen-Theorems](https://code.tutsplus.com/collision-detection-using-the-separating-axis-theorem--gamedev-169t)
4. [SAT (Trennachsen-Theorem)](https://dyn4j.org/2010/01/sat/)
5. [Trennachsen-Theorem](https://programmerart.weebly.com/separating-axis-theorem.html)

## Kollisionsleistung

Während einige dieser Algorithmen zur Kollisionserkennung einfach genug zu berechnen sind, kann es eine Verschwendung von Rechenleistung sein, _jedes_ Objekt mit jedem anderen Objekt zu testen. Normalerweise teilen Spiele die Kollisionserkennung in zwei Phasen, grobe und genaue Phase.

### Grobe Phase

Die grobe Phase sollte Ihnen eine Liste der Objekte geben, die _möglicherweise_ kollidieren. Dies kann mit einer räumlichen Datenstruktur implementiert werden, die Ihnen eine grobe Vorstellung davon gibt, wo sich das Objekt befindet und was sich in seiner Umgebung befindet. Einige Beispiele für räumliche Datenstrukturen sind Quad-Trees, R-Trees oder ein räumliches Hashmap.

### Genaue Phase

Wenn Sie eine kleine Liste von Objekten haben, die zu prüfen sind, möchten Sie einen Algorithmus der genauen Phase verwenden (wie die oben genannten), um eine definitive Antwort darauf zu geben, ob eine Kollision vorliegt oder nicht.
