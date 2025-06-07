---
title: 2D-Kollisionsdetektion
slug: Games/Techniques/2D_collision_detection
l10n:
  sourceCommit: b8000eedf02c0fbcc2979d53e7843bcba5668930
---

{{GamesSidebar}}

Algorithmen zur Kollisionsdetektion in 2D-Spielen hängen von den Arten der Formen ab, die kollidieren können (z.B. Rechteck zu Rechteck, Rechteck zu Kreis, Kreis zu Kreis). Im Allgemeinen haben Sie eine einfache generische Form, die die Entität als "Hitbox" abdeckt, sodass die Kollision, auch wenn sie nicht pixelgenau ist, gut genug aussieht und leistungsfähig bei mehreren Entitäten ist. Dieser Artikel bietet einen Überblick über die gebräuchlichsten Techniken zur Bereitstellung von Kollisionsdetektion in 2D-Spielen.

## Engine-Code

Die Demos auf dieser Seite basieren nicht auf externen Bibliotheken, daher implementieren wir die gesamte Orchestrierung selbst, einschließlich Rendering, Benutzersteuerung und Aufruf von Verhaltensweisen jeder Entität. Der Code wird unten gezeigt (er wird nicht für jedes Beispiel wiederholt):

```html live-sample___box_collision_ex live-sample___circle_collision_ex
<div id="container"></div>
```

```css live-sample___box_collision_ex live-sample___circle_collision_ex
.entity {
  display: inline-block;
  position: absolute;
  height: 20px;
  width: 20px;
  background-color: blue;
}

.movable {
  left: 50px;
  top: 50px;
  background-color: red;
}

.collision-state {
  background-color: green !important;
}
```

```js live-sample___box_collision_ex live-sample___circle_collision_ex
const collider = {
  moveableEntity: null,
  staticEntities: [],
  checkCollision() {
    // Important: the isCollidingWith method is what we are implementing
    const isColliding = this.staticEntities.some((staticEntity) =>
      this.moveableEntity.isCollidingWith(staticEntity),
    );
    this.moveableEntity.setCollisionState(isColliding);
  },
};

const container = document.getElementById("container");

class BaseEntity {
  ref;
  position;
  constructor(position) {
    this.position = position;
    this.ref = document.createElement("div");
    this.ref.classList.add("entity");
    this.ref.style.left = `${this.position.x}px`;
    this.ref.style.top = `${this.position.y}px`;
    container.appendChild(this.ref);
  }
  shiftPosition(dx, dy) {
    this.position.x += dx;
    this.position.y += dy;
    this.redraw();
  }
  redraw() {
    this.ref.style.left = `${this.position.x}px`;
    this.ref.style.top = `${this.position.y}px`;
  }
  setCollisionState(isColliding) {
    if (isColliding && !this.ref.classList.contains("collision-state")) {
      this.ref.classList.add("collision-state");
    } else if (!isColliding) {
      this.ref.classList.remove("collision-state");
    }
  }
  isCollidingWith(other) {
    throw new Error("isCollidingWith must be implemented in subclasses");
  }
}

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  switch (e.key) {
    case "ArrowLeft":
      collider.moveableEntity.shiftPosition(-5, 0);
      break;
    case "ArrowUp":
      collider.moveableEntity.shiftPosition(0, -5);
      break;
    case "ArrowRight":
      collider.moveableEntity.shiftPosition(5, 0);
      break;
    case "ArrowDown":
      collider.moveableEntity.shiftPosition(0, 5);
      break;
  }
  collider.checkCollision();
});
```

## Achsen-aligned Bounding Box

Eine der einfacheren Formen der Kollisionsdetektion erfolgt zwischen zwei rechwinkligen Rechtecken, die achsen-aligned sind - das bedeutet keine Rotation. Der Algorithmus arbeitet, indem er sicherstellt, dass keine Lücke zwischen einer der vier Seiten der Rechtecke besteht. Jede Lücke bedeutet, dass keine Kollision vorliegt.

```js live-sample___box_collision_ex
class BoxEntity extends BaseEntity {
  width = 20;
  height = 20;

  isCollidingWith(other) {
    return (
      this.position.x < other.position.x + other.width &&
      this.position.x + this.width > other.position.x &&
      this.position.y < other.position.y + other.height &&
      this.position.y + this.height > other.position.y
    );
  }
}
```

```js hidden live-sample___box_collision_ex
for (let i = 0; i < 100; i++) {
  collider.staticEntities.push(
    new BoxEntity({
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * 500),
    }),
  );
}

const moveableEntity = new BoxEntity({ x: 500, y: 500 });
moveableEntity.ref.classList.add("movable");
collider.moveableEntity = moveableEntity;
```

{{EmbedLiveSample("box_collision_ex", "", 550)}}

## Kreis-Kollision

Eine weitere einfache Form für die Kollisionsdetektion erfolgt zwischen zwei Kreisen. Dieser Algorithmus arbeitet, indem er die Mittel- punkte der beiden Kreise nimmt und sicherstellt, dass der Abstand zwischen den Mittelpunkten kleiner ist als die Summe der beiden Radien.

```css live-sample___circle_collision_ex
.entity {
  border-radius: 50%;
}
```

```js live-sample___circle_collision_ex
class CircleEntity extends BaseEntity {
  radius = 10;

  isCollidingWith(other) {
    const dx =
      this.position.x + this.radius - (other.position.x + other.radius);
    const dy =
      this.position.y + this.radius - (other.position.y + other.radius);
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < this.radius + other.radius;
  }
}
```

```js hidden live-sample___circle_collision_ex
for (let i = 0; i < 100; i++) {
  collider.staticEntities.push(
    new CircleEntity({
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * 500),
    }),
  );
}

const moveableEntity = new CircleEntity({ x: 500, y: 500 });
moveableEntity.ref.classList.add("movable");
collider.moveableEntity = moveableEntity;
```

> [!NOTE]
> Die `x`- und `y`-Koordinaten der Kreise beziehen sich auf ihre oberen linken Ecken, daher müssen wir den Radius addieren, um ihre Mittelpunkte zu vergleichen.

{{EmbedLiveSample("circle_collision_ex", "", 550)}}

## Satz der Trennenden Achse (Separating Axis Theorem)

Dies ist ein Kollisionsalgorithmus, der eine Kollision zwischen zwei _konvexen_ Polygonen erkennen kann. Er ist komplizierter zu implementieren als die oben genannten Methoden, ist jedoch leistungsstärker. Die Komplexität eines solchen Algorithmus bedeutet, dass wir eine Leistungsoptimierung in Betracht ziehen müssen, die im nächsten Abschnitt behandelt wird.

Die Implementierung des SAT ist außerhalb des Umfangs dieser Seite, sehen Sie sich daher die unten empfohlenen Tutorials an:

1. [Separating Axis Theorem (SAT) Erklärung](https://www.sevenson.com.au/programming/sat/)
2. [Kollisionsdetektion und -reaktion](https://www.metanetsoftware.com/technique/tutorialA.html)
3. [Kollisionsdetektion mit dem Satz der Trennenden Achse](https://code.tutsplus.com/collision-detection-using-the-separating-axis-theorem--gamedev-169t)
4. [SAT (Separating Axis Theorem)](https://dyn4j.org/2010/01/sat/)
5. [Satz der Trennenden Achse](https://programmerart.weebly.com/separating-axis-theorem.html)

## Kollisionsleistung

Während einige dieser Algorithmen zur Kollisionsdetektion einfach genug zu berechnen sind, kann es eine Verschwendung von Zyklen sein, _jede_ Entität mit jeder anderen zu testen. Spiele unterteilen die Kollision in der Regel in zwei Phasen: eine grobe und eine genaue.

### Grobe Phase

In der groben Phase sollten Sie eine Liste von Entitäten erhalten, die _möglicherweise_ kollidieren. Dies kann mit einer räumlichen Datenstruktur implementiert werden, die Ihnen eine grobe Vorstellung davon gibt, wo sich die Entität befindet und was sich um sie herum befindet. Einige Beispiele für räumliche Datenstrukturen sind Quad Trees, R-Trees oder ein räumliches Hashmap.

### Genaue Phase

Wenn Sie eine kleine Liste von zu überprüfenden Entitäten haben, möchten Sie einen Algorithmus der genauen Phase verwenden (wie die oben genannten), um eine sichere Antwort darauf zu geben, ob eine Kollision vorliegt oder nicht.
