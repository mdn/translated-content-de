---
title: Erkennung von Kollisionen durch Begrenzungsvolumen mit THREE.js
slug: Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Dieser Artikel zeigt, wie **Kollisionserkennung zwischen Begrenzungsboxen und Kugeln mit der Three.js-Bibliothek** implementiert wird. Es wird vorausgesetzt, dass Sie zuvor unseren einführenden Artikel zur [3D-Kollisionserkennung](/de/docs/Games/Techniques/3D_collision_detection) gelesen haben und über grundlegende Kenntnisse zu Three.js verfügen.

## Verwendung von `Box3` und `Sphere`

Three.js bietet Objekte, die **mathematische Volumen** und Formen darstellen. Für 3D-AABB und Begrenzungskugeln können wir die Objekte **[`Box3`](https://threejs.org/docs/#api/math/Box3)** und **[`Sphere`](https://threejs.org/docs/#api/math/Sphere)** verwenden. Nach der Instanziierung stehen Methoden zur Verfügung, um Schnittpunkttests mit anderen Volumen durchzuführen.

### Instanziierung von Boxen

Um eine **`Box3`-Instanz** zu erstellen, müssen die **unteren und oberen Grenzen** der Box angegeben werden. Normalerweise möchten wir, dass diese AABB mit einem Objekt in unserer 3D-Welt "verbunden" ist (wie einem Charakter). In Three.js haben `Geometry`-Instanzen eine `boundingBox`-Eigenschaft mit `min`- und `max`-Grenzen für das Objekt. Beachten Sie, dass Sie diese Eigenschaft manuell definieren müssen, indem Sie zuvor `Geometry.computeBoundingBox` aufrufen.

```js
const knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.5, 0.1),
  new MeshNormalMaterial({}),
);

knot.geometry.computeBoundingBox();
const knotBBox = new Box3(
  knot.geometry.boundingBox.min,
  knot.geometry.boundingBox.max,
);
```

> [!NOTE]
> Die `boundingBox`-Eigenschaft nimmt die `Geometry` selbst als Referenz und nicht das `Mesh`. Daher werden Transformationen wie Skalierung, Position usw., die auf das `Mesh` angewendet werden, ignoriert, während die Box berechnet wird.

Eine einfachere Alternative, die das vorherige Problem behebt, besteht darin, diese Grenzen später mit `Box3.setFromObject` festzulegen. Dadurch werden die Dimensionen unter Berücksichtigung der **Transformationen _und_ aller Kind-Meshes** eines 3D-Objekts berechnet.

```js
const knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.5, 0.1),
  new MeshNormalMaterial({}),
);

const knotBBox = new Box3(new THREE.Vector3(), new THREE.Vector3());
knotBBox.setFromObject(knot);
```

### Instanziierung von Kugeln

Die Instanziierung von **`Sphere`-Objekten** ist ähnlich. Wir müssen das Zentrum und den Radius der Kugel angeben, die der `boundingSphere`-Eigenschaft in `Geometry` hinzugefügt werden können.

```js
const knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.5, 0.1),
  new MeshNormalMaterial({}),
);

const knotBSphere = new Sphere(
  knot.position,
  knot.geometry.boundingSphere.radius,
);
```

Leider gibt es kein Äquivalent zu `Box3.setFromObject` für Sphere-Instanzen. Wenn wir Transformationen anwenden oder die Position des `Mesh` ändern, müssen wir die Begrenzungskugel manuell aktualisieren. Zum Beispiel:

```js
knot.scale.set(2, 2, 2);
knotBSphere.radius = knot.geometry.radius * 2;
```

### Schnittpunkttests

#### Punkt vs. `Box3` / `Sphere`

Sowohl `Box3` als auch `Sphere` haben eine **`containsPoint`**-Methode, um diesen Test durchzuführen.

```js
const point = new THREE.Vector3(2, 4, 7);
knotBBox.containsPoint(point);
```

#### `Box3` vs. `Box3`

Die **`Box3.intersectsBox`**-Methode ist verfügbar, um diesen Test durchzuführen.

```js
knotBbox.intersectsBox(otherBox);
```

> [!NOTE]
> Dies unterscheidet sich von der `Box3.containsBox`-Methode, die prüft, ob die Box3 eine andere vollständig umschließt.

#### `Sphere` vs. `Sphere`

Ähnlich wie zuvor gibt es eine **`Sphere.intersectsSphere`**-Methode, um diesen Test durchzuführen.

```js
knotBSphere.intersectsSphere(otherSphere);
```

#### `Sphere` vs. `Box3`

Leider ist dieser Test in Three.js nicht implementiert, aber wir können Sphere anpassen, um einen Algorithmus zur [Sphere vs. AABB-Kollision](/de/docs/Games/Techniques/3D_collision_detection) zu implementieren.

```js
// expand THREE.js Sphere to support collision tests vs. Box3
// we are creating a vector outside the method scope to
// avoid spawning a new instance of Vector3 on every check

THREE.Sphere.__closest = new THREE.Vector3();
THREE.Sphere.prototype.intersectsBox = function (box) {
  // get box closest point to sphere center by clamping
  THREE.Sphere.__closest.set(this.center.x, this.center.y, this.center.z);
  THREE.Sphere.__closest.clamp(box.min, box.max);

  const distance = this.center.distanceToSquared(THREE.Sphere.__closest);
  return distance < this.radius * this.radius;
};
```

### Demos

Wir haben einige [Live-Demos](https://mozdevs.github.io/gamedev-js-3d-aabb/) vorbereitet, um diese Techniken zu demonstrieren, mit einem [Quellcode](https://github.com/mozdevs/gamedev-js-3d-aabb) zur Untersuchung.

- [Punkt vs. Box und Kugel](https://mozdevs.github.io/gamedev-js-3d-aabb/raw_point.html)
- [Box vs. Box und Kugel](https://mozdevs.github.io/gamedev-js-3d-aabb/raw_box.html)
- [Kugel vs. Box und Kugel](https://mozdevs.github.io/gamedev-js-3d-aabb/raw_sphere.html)

![Ein Knotenobjekt, ein großes Kugelobjekt und ein kleines Kugelobjekt im 3D-Raum. Drei Vektoren sind auf der kleinen Kugel gezeichnet. Die Vektoren zeigen in die Richtungen der drei Achsen, die den Raum definieren. Text unten lautet: Ziehen Sie den Ball herum.](screen_shot_2015-10-20_at_15.19.16.png)

## Verwendung von `BoxHelper`

Als Alternative zur Verwendung von rohen `Box3`- und `Sphere`-Objekten hat Three.js ein nützliches Objekt, um die Handhabung von **Begrenzungsboxen zu erleichtern: [`BoxHelper`](https://threejs.org/docs/#api/helpers/BoxHelper)** (früher `BoundingBoxHelper`, das veraltet ist). Dieser Helfer nimmt ein `Mesh` und berechnet ein Volumen einer Begrenzungsbox dafür (einschließlich seiner Kind-Meshes). Dies führt zu einem neuen Box-`Mesh`, das die Form der Begrenzungsbox darstellt und an die zuvor gesehene `setFromObject`-Methode übergeben werden kann, um eine Begrenzungsbox zu erhalten, die dem `Mesh` entspricht.

`BoxHelper` ist die **empfohlene** Methode, um 3D-Kollisionen mit Begrenzungsvolumen in Three.js zu handhaben. Sie werden Tests mit Kugeln vermissen, aber die Kompromisse sind es wert.

Die Vorteile der Verwendung dieses Helfers sind:

- Er hat eine `update()`-Methode, die das `Mesh` der Begrenzungsbox bei Rotation oder Dimensionsänderung des verlinkten Meshs **anpasst** und seine **Position aktualisiert**.
- Er **berücksichtigt die Kind-Meshes** bei der Berechnung der Größe der Begrenzungsbox, sodass das ursprüngliche Mesh und alle seine Kinder umschlossen werden.
- Wir können Kollisionen leicht debuggen, indem wir die von `BoxHelper` erstellten `Mesh`es **rendern**. Standardmäßig werden sie mit einem `LineBasicMaterial`-Material erstellt (ein Three.js-Material zum Zeichnen von Drahtgitter-Geometrien).

Der Hauptnachteil ist, dass es **nur boxförmige Begrenzungsvolumen** erstellt. Wenn Sie Kugel-gegen-AABB-Tests benötigen, müssen Sie Ihre eigenen `Sphere`-Objekte erstellen.

Um es zu verwenden, müssen wir eine neue `BoxHelper`-Instanz erstellen und die Geometrie sowie optional eine Farbe angeben, die für das Drahtgittermaterial verwendet wird. Wir müssen das neu erstellte Objekt auch zur `three.js`-Szene hinzufügen, damit es gerendert wird. Wir nehmen an, dass unsere Szenenvariable `scene` genannt wird.

```js
const knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.5, 0.1),
  new THREE.MeshNormalMaterial({}),
);
const knotBoxHelper = new THREE.BoxHelper(knot, 0x00ff00);
scene.add(knotBoxHelper);
```

Um auch unsere tatsächliche `Box3` Begrenzungsbox zu haben, erstellen wir ein neues `Box3` Objekt und lassen es die Form und Position des `BoxHelper` übernehmen.

```js
const box3 = new THREE.Box3();
box3.setFromObject(knotBoxHelper);
```

Wenn wir die Position, Rotation, Skalierung usw. des `Mesh` ändern, müssen wir die `update()`-Methode aufrufen, damit die `BoxHelper`-Instanz mit ihrem verlinkten `Mesh` übereinstimmt. Wir müssen auch `setFromObject` erneut aufrufen, damit sich die `Box3` dem `Mesh` anschließt.

```js
knot.position.set(-3, 2, 1);
knot.rotation.x = -Math.PI / 4;
// update the bounding box so it stills wraps the knot
knotBoxHelper.update();
box3.setFromObject(knotBoxHelper);
```

Das Durchführen von **Kollisionstests** erfolgt in der gleichen Weise wie im obigen Abschnitt erklärt — wir verwenden unser Box3-Objekt so, wie oben beschrieben.

```js
// box vs. box
box3.intersectsBox(otherBox3);
// box vs. point
box3.containsPoint(point.position);
```

### Demos

Es gibt **zwei Demos**, die Sie sich auf unserer [Seite mit den Live-Demos](https://mozdevs.github.io/gamedev-js-3d-aabb/) ansehen können. Die [erste](https://mozdevs.github.io/gamedev-js-3d-aabb/api_point.html) zeigt Kollisionen zwischen Punkt und Box unter Verwendung von `BoxHelper`. Die [zweite](https://mozdevs.github.io/gamedev-js-3d-aabb/api_box.html) führt Box-vs.-Box-Tests durch.

![Ein Knotenobjekt, ein Kugelobjekt und ein Würfelobjekt im 3D-Raum. Der Knoten und die Kugel sind von einer virtuellen Begrenzungsbox umgeben. Der Würfel schneidet die Begrenzungsbox der Kugel. Text unten lautet: Ziehen Sie den Würfel herum. Drücken Sie Esc, um B-Boxen umzuschalten.](screen_shot_2015-10-19_at_12.10.06.png)
