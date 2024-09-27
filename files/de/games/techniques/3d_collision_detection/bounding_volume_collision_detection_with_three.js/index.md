---
title: Kollisionsdetektion mit Begrenzungsvolumen in THREE.js
slug: Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Dieser Artikel zeigt, wie Sie **Kollisionsdetektion zwischen Begrenzungsboxen und -kugeln mit der Bibliothek Three.js** implementieren können. Es wird vorausgesetzt, dass Sie vorher unseren einführenden Artikel zur [3D-Kollisionsdetektion](/de/docs/Games/Techniques/3D_collision_detection) gelesen haben und über grundlegende Kenntnisse von Three.js verfügen.

## Verwenden von `Box3` und `Sphere`

Three.js bietet Objekte, die **mathematische Volumen** und Formen darstellen — für 3D-AABB und Begrenzungskugeln können wir die **[`Box3`](https://threejs.org/docs/#api/math/Box3)** und **[`Sphere`](https://threejs.org/docs/#api/math/Sphere)** Objekte verwenden. Nach der Instanziierung können diese Methoden verwenden, um Schnittmengentests mit anderen Volumina durchzuführen.

### Instanziierung von Boxen

Um eine **`Box3` Instanz** zu erstellen, müssen wir die **unteren und oberen Grenzen** der Box angeben. Normalerweise möchten wir dieses AABB mit einem Objekt in unserer 3D-Welt (wie einem Charakter) "verknüpfen". In Three.js haben `Geometry`-Instanzen eine `boundingBox` Eigenschaft mit `min` und `max` Grenzen für das Objekt. Beachten Sie, dass Sie diese Eigenschaft manuell mit `Geometry.computeBoundingBox` definieren müssen.

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
> Die `boundingBox`-Eigenschaft bezieht sich auf die `Geometry` selbst und nicht auf das `Mesh`. Daher werden bei der Berechnung der Box Transformationen wie Skalierung, Positionierung usw., die auf das `Mesh` angewendet wurden, ignoriert.

Eine einfachere Alternative, die das vorherige Problem behebt, besteht darin, diese Grenzen später mit `Box3.setFromObject` festzulegen, wodurch die Abmessungen unter Berücksichtigung der **Transformationen _und_ aller Kind-Meshes** einer 3D-Entität berechnet werden.

```js
const knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.5, 0.1),
  new MeshNormalMaterial({}),
);

const knotBBox = new Box3(new THREE.Vector3(), new THREE.Vector3());
knotBBox.setFromObject(knot);
```

### Instanziierung von Kugeln

Die Instanziierung von **`Sphere`-Objekten** ist ähnlich. Wir müssen das Zentrum und den Radius der Kugel angeben, die zur `boundingSphere`-Eigenschaft in `Geometry` hinzugefügt werden können.

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

Leider gibt es kein Äquivalent zu `Box3.setFromObject` für Sphere-Instanzen. Wenn wir also Transformationen anwenden oder die Position des `Mesh` ändern, müssen wir die Begrenzungskugel manuell aktualisieren. Zum Beispiel:

```js
knot.scale.set(2, 2, 2);
knotBSphere.radius = knot.geometry.radius * 2;
```

### Schnittmengentests

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
> Dies unterscheidet sich von der `Box3.containsBox`-Methode, die überprüft, ob die Box3 eine andere vollständig umschließt.

#### `Sphere` vs. `Sphere`

In ähnlicher Weise wie zuvor gibt es eine **`Sphere.intersectsSphere`**-Methode, um diesen Test durchzuführen.

```js
knotBSphere.intersectsSphere(otherSphere);
```

#### `Sphere` vs. `Box3`

Leider ist dieser Test in Three.js nicht implementiert, aber wir können Sphere erweitern, um einen [Sphere vs. AABB Schnittmengen-Algorithmus](/de/docs/Games/Techniques/3D_collision_detection) zu implementieren.

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

Wir haben einige [Live-Demos](https://mozdevs.github.io/gamedev-js-3d-aabb/) vorbereitet, um diese Techniken zu demonstrieren, mit [Quellcode](https://github.com/mozdevs/gamedev-js-3d-aabb) zur Einsichtnahme.

- [Punkt vs. Box und Kugel](https://mozdevs.github.io/gamedev-js-3d-aabb/raw_point.html)
- [Box vs. Box und Kugel](https://mozdevs.github.io/gamedev-js-3d-aabb/raw_box.html)
- [Kugel vs. Box und Kugel](https://mozdevs.github.io/gamedev-js-3d-aabb/raw_sphere.html)

![Ein Knot-Objekt, ein großes Kugelobjekt und ein kleines Kugelobjekt im 3D-Raum. Drei Vektoren sind auf der kleinen Kugel dargestellt. Die Vektoren zeigen in die Richtungen der drei Achsen, die den Raum definieren. Text unten zeigt: Ziehen Sie den Ball herum.](screen_shot_2015-10-20_at_15.19.16.png)

## Verwenden von `BoxHelper`

Alternativ zur Verwendung von rohen `Box3`- und `Sphere`-Objekten bietet Three.js ein nützliches Objekt, um die Handhabung von **Begrenzungsboxen einfacher zu gestalten: [`BoxHelper`](https://threejs.org/docs/#api/helpers/BoxHelper)** (früher `BoundingBoxHelper`, welches veraltet ist). Dieser Helfer nimmt ein `Mesh` und berechnet ein Begrenzungsbox-Volumen dafür (einschließlich seiner Kind-Meshes). Dies resultiert in einem neuen Box-`Mesh`, das die Form der Begrenzungsbox zeigt und an die zuvor gesehene `setFromObject`-Methode übergeben werden kann, um eine zugehörige Begrenzungsbox für das `Mesh` zu erhalten.

`BoxHelper` ist der **empfohlene** Weg, um 3D-Kollisionen mit Begrenzungsvolumina in Three.js zu handhaben. Sie werden Kugeltests verpassen, aber die Kompromisse lohnen sich.

Die Vorteile der Verwendung dieses Helfers sind:

- Er hat eine `update()`-Methode, die seine Begrenzungsbox-Mesh **neu dimensioniert**, wenn das verknüpfte Mesh rotiert oder seine Abmessungen ändert, und seine **Position** aktualisiert.
- Er **berücksichtigt die Kind-Meshes**, wenn er die Größe der Begrenzungsbox berechnet, sodass das ursprüngliche Mesh und all seine Kinder eingeschlossen sind.
- Wir können Kollisionen einfach debuggen, indem wir die von `BoxHelper` erstellten `Mesh`-Objekte **anzeigen**. Standardmäßig werden sie mit einem `LineBasicMaterial` Material (einem Three.js-Material für das Zeichnen von Drahtgitter-Geometrien) erstellt.

Der Hauptnachteil besteht darin, dass es **nur Box-Begrenzungsvolumen erstellt**, sodass Sie, wenn Sie Kugel-gegen-AABB-Tests benötigen, Ihre eigenen `Sphere`-Objekte erstellen müssen.

Um es zu verwenden, müssen wir eine neue `BoxHelper`-Instanz erstellen und die Geometrie und — optional — eine Farbe angeben, die für das Drahtgitter-Material verwendet wird. Wir müssen das neu erstellte Objekt auch zur `three.js`-Szene hinzufügen, damit es gerendert wird. Wir nehmen an, dass unsere Szenenvariable `scene` genannt wird.

```js
const knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.5, 0.1),
  new THREE.MeshNormalMaterial({}),
);
const knotBoxHelper = new THREE.BoxHelper(knot, 0x00ff00);
scene.add(knotBoxHelper);
```

Um auch unsere tatsächliche `Box3`-Begrenzungsbox zu erstellen, erstellen wir ein neues `Box3`-Objekt und lassen es die Form und Position des `BoxHelper` übernehmen.

```js
const box3 = new THREE.Box3();
box3.setFromObject(knotBoxHelper);
```

Wenn wir die `Mesh`-Position, -Rotation, -Skalierung usw. ändern, müssen wir die `update()`-Methode aufrufen, damit die `BoxHelper`-Instanz mit ihrem verknüpften `Mesh` übereinstimmt. Wir müssen auch `setFromObject` erneut aufrufen, um die `Box3` dem `Mesh` folgen zu lassen.

```js
knot.position.set(-3, 2, 1);
knot.rotation.x = -Math.PI / 4;
// update the bounding box so it stills wraps the knot
knotBoxHelper.update();
box3.setFromObject(knotBoxHelper);
```

Das Durchführen von **Kollisionstests** erfolgt auf die gleiche Weise wie im obigen Abschnitt erläutert — wir verwenden unser Box3-Objekt auf die gleiche Weise wie oben beschrieben.

```js
// box vs. box
box3.intersectsBox(otherBox3);
// box vs. point
box3.containsPoint(point.position);
```

### Demos

Es gibt **zwei Demos**, die Sie auf unserer [Live-Demos-Seite](https://mozdevs.github.io/gamedev-js-3d-aabb/) ansehen können. Die [erste](https://mozdevs.github.io/gamedev-js-3d-aabb/api_point.html) zeigt Punkt-gegen-Box-Kollisionen mit `BoxHelper`. Die [zweite](https://mozdevs.github.io/gamedev-js-3d-aabb/api_box.html) führt Box-gegen-Box-Tests durch.

![Ein Knot-Objekt, ein Kugelobjekt und ein Würfelobjekt im 3D-Raum. Der Knoten und die Kugel sind von einer virtuellen Begrenzungsbox umschlossen. Der Würfel schneidet die Begrenzungsbox der Kugel. Text unten zeigt: Ziehen Sie den Würfel herum. Drücken Sie Esc, um B-Boxen umzuschalten.](screen_shot_2015-10-19_at_12.10.06.png)
