---
title: 2D-Kollisionsdetektion
slug: Games/Techniques/2D_collision_detection
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

Algorithmen zur Kollisionsdetektion in 2D-Spielen hängen von der Art der Formen ab, die kollidieren können (z. B. Rechteck zu Rechteck, Rechteck zu Kreis, Kreis zu Kreis). Im Allgemeinen haben Sie eine einfache generische Form, die die Entität als "Hitbox" abdeckt. Auch wenn die Kollisionsabfrage dadurch nicht pixelgenau ist, sieht sie gut genug aus und ist leistungsfähig über mehrere Entitäten hinweg. Dieser Artikel bietet einen Überblick über die am häufigsten verwendeten Techniken zur Kollisionsdetektion in 2D-Spielen.

## Engine-Code

Die Demos auf dieser Seite basieren nicht auf einer externen Bibliothek, daher implementieren wir die gesamte Orchestrierung selbst, einschließlich Rendering, Handhabung der Benutzereingaben und Aufruf von Verhaltensweisen jeder Entität. Der Code wird unten gezeigt (er wird nicht für jedes Beispiel wiederholt):

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

## Achsenparalleles Begrenzungsrechteck

Eine der einfacheren Formen der Kollisionsdetektion findet zwischen zwei rechteckigen, achsenparallelen Begrenzungen ohne Rotation statt. Der Algorithmus funktioniert, indem sichergestellt wird, dass keine Lücke zwischen den 4 Seiten der Rechtecke besteht. Jede Lücke bedeutet, dass keine Kollision existiert.

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

Eine andere einfache Form für die Kollisionsdetektion ist zwischen zwei Kreisen. Dieser Algorithmus funktioniert, indem die Mittelpunkte der beiden Kreise genommen werden und sichergestellt wird, dass der Abstand zwischen den Mittelpunkten kleiner ist als die Summe der beiden Radien.

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
> Die `x`- und `y`-Koordinaten der Kreise beziehen sich auf ihre oberen linken Ecken, deshalb müssen wir den Radius hinzufügen, um ihre Mittelpunkte zu vergleichen.

{{EmbedLiveSample("circle_collision_ex", "", 550)}}

## Trennung der Achsensätze

Dies ist ein Kollisionsalgorithmus, der eine Kollision zwischen zwei _konvexen_ Polygonen erkennen kann. Er ist komplizierter zu implementieren als die oben genannten Methoden, bietet aber mehr Möglichkeiten. Die Komplexität eines solchen Algorithmus erfordert, dass wir Leistungsoptimierungen in Betracht ziehen, die im nächsten Abschnitt behandelt werden.

Die Implementierung von SAT liegt außerhalb des Umfangs dieser Seite, sehen Sie sich daher die empfohlenen Tutorials unten an:

1. [Erläuterung des Trennenden Achsensatzes (SAT)](https://www.sevenson.com.au/blog/sat/)
2. [Kollisionsdetektion und -antwort](https://www.metanetsoftware.com/technique/tutorialA.html)
3. [Kollisionsdetektion mit dem Trennenden Achsensatz](https://code.tutsplus.com/collision-detection-using-the-separating-axis-theorem--gamedev-169t)
4. [SAT (Separating Axis Theorem)](https://dyn4j.org/2010/01/sat/)
5. [Separating Axis Theorem](https://programmerart.weebly.com/separating-axis-theorem.html)

## Kollisionsleistung

Während einige dieser Algorithmen zur Kollisionsdetektion einfach genug zu berechnen sind, kann es eine Verschwendung von Zyklen sein, _jede_ Entität mit jeder anderen Entität zu testen. Normalerweise teilen Spiele die Kollision in zwei Phasen auf: grob und eng.

### Grobphase

Die Grobphase sollte Ihnen eine Liste von Entitäten geben, die _möglicherweise_ kollidieren. Dies kann mit einer räumlichen Datenstruktur implementiert werden, die Ihnen eine grobe Vorstellung davon gibt, wo sich die Entität befindet und was sich um sie herum befindet. Einige Beispiele für räumliche Datenstrukturen sind Quad Bäume, R-Bäume oder eine räumliche Hashmap.

### Engphase

Wenn Sie eine kleine Liste von zu überprüfenden Entitäten haben, möchten Sie einen Engphasen-Algorithmus verwenden (wie die oben genannten), um eine sichere Antwort darauf zu geben, ob eine Kollision besteht oder nicht.
