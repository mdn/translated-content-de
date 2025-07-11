---
title: 2D-Kollisionsdetektion
slug: Games/Techniques/2D_collision_detection
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Algorithmen zur Erkennung von Kollisionen in 2D-Spielen hängen von der Art der Formen ab, die kollidieren können (z.B. Rechteck zu Rechteck, Rechteck zu Kreis, Kreis zu Kreis). In der Regel verwenden Sie eine einfache generische Form, die das Objekt umgibt, bekannt als "Hitbox". Auch wenn die Kollision nicht pixelgenau sein mag, sieht es gut genug aus und ist performant über mehrere Objekte hinweg. Dieser Artikel gibt einen Überblick über die gängigsten Techniken zur Bereitstellung der Kollisionsdetektion in 2D-Spielen.

## Engine-Code

Die Demos auf dieser Seite basieren nicht auf einer externen Bibliothek, sodass wir die gesamte Orchestrierung selbst implementieren, einschließlich Rendering, Umgang mit Benutzereingaben und Aufruf der Verhaltensweisen jedes Objekts. Der Code wird unten gezeigt (er wird nicht für jedes Beispiel wiederholt):

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

## Achsen-ausrichtende Begrenzungsbox

Eine der einfacheren Formen der Kollisionsdetektion ist zwischen zwei Rechtecken, die achsen-ausgerichtet sind – das heißt ohne Rotation. Der Algorithmus funktioniert, indem sichergestellt wird, dass es keine Lücke zwischen den 4 Seiten der Rechtecke gibt. Jede Lücke bedeutet, dass keine Kollision existiert.

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

Eine weitere einfache Form für die Kollisionsdetektion ist zwischen zwei Kreisen. Dieser Algorithmus funktioniert, indem die Mittelpunkte der beiden Kreise genommen werden und sichergestellt wird, dass der Abstand zwischen den Mittelpunkten kleiner ist als die Summe der beiden Radien.

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
> Die `x`- und `y`-Koordinaten der Kreise beziehen sich auf ihre oberen linken Ecken, daher müssen wir den Radius hinzufügen, um ihre Mittelpunkte zu vergleichen.

{{EmbedLiveSample("circle_collision_ex", "", 550)}}

## Separating Axis Theorem

Dies ist ein Kollisionsalgorithmus, der eine Kollision zwischen zwei _konvexen_ Polygonen erkennen kann. Er ist komplizierter zu implementieren als die oben genannten Methoden, aber leistungsfähiger. Die Komplexität eines solchen Algorithmus bedeutet, dass wir Leistungsoptimierung in Betracht ziehen müssen, was im nächsten Abschnitt behandelt wird.

Die Implementierung von SAT liegt außerhalb des Rahmens dieser Seite, daher sehen Sie die unten empfohlenen Tutorials:

1. [Separating Axis Theorem (SAT) Erklärung](https://www.sevenson.com.au/programming/sat/)
2. [Kollisionsdetektion und Reaktion](https://www.metanetsoftware.com/technique/tutorialA.html)
3. [Kollisionsdetektion unter Verwendung des Separating Axis Theorem](https://code.tutsplus.com/collision-detection-using-the-separating-axis-theorem--gamedev-169t)
4. [SAT (Separating Axis Theorem)](https://dyn4j.org/2010/01/sat/)
5. [Separating Axis Theorem](https://programmerart.weebly.com/separating-axis-theorem.html)

## Kollisionsleistung

Während einige dieser Algorithmen zur Kollisionsdetektion einfach genug zu berechnen sind, kann es vergeudete Rechenzyklen bedeuten, _jedes_ Objekt mit jedem anderen Objekt zu testen. Normalerweise teilen Spiele die Kollisionserkennung in zwei Phasen auf: grob und fein.

### Grobe Phase

Die grobe Phase sollte Ihnen eine Liste von Objekten geben, die _kollidieren könnten_. Dies kann mit einer räumlichen Datenstruktur implementiert werden, die Ihnen eine ungefähre Vorstellung davon gibt, wo sich das Objekt befindet und was sich darum befindet. Einige Beispiele für räumliche Datenstrukturen sind Quad Trees, R-Trees oder eine räumliche Hashmap.

### Feine Phase

Wenn Sie eine kleine Liste von Objekten haben, die Sie überprüfen müssen, möchten Sie einen Algorithmus für die feine Phase verwenden (wie die oben aufgeführten), um eine eindeutige Antwort darauf zu geben, ob eine Kollision vorliegt oder nicht.
