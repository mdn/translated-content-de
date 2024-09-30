---
title: Kollisionserkennung mit Begrenzungsvolumen in THREE.js
slug: Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Dieser Artikel zeigt, wie man **Kollisionserkennung zwischen Begrenzungsboxen und Kugeln mit der Three.js**-Bibliothek implementiert. Es wird angenommen, dass Sie vor dem Lesen dieses Artikels unseren einführenden Artikel über [3D-Kollisionserkennung](/de/docs/Games/Techniques/3D_collision_detection) gelesen haben und grundlegende Kenntnisse über Three.js besitzen.

## Verwendung von `Box3` und `Sphere`

Three.js verfügt über Objekte, die **mathematische Volumen** und Formen repräsentieren — für 3D-AABB und Begrenzungskugeln können wir die **[`Box3`](https://threejs.org/docs/#api/math/Box3)** und **[`Sphere`](https://threejs.org/docs/#api/math/Sphere)** Objekte verwenden. Sobald sie instanziiert sind, stehen ihnen Methoden zur Verfügung, um Schnittstellentests gegen andere Volumen durchzuführen.

### Boxen instanziieren

Um eine **`Box3`-Instanz** zu erstellen, müssen wir die **unteren und oberen Grenzen** der Box angeben. Normalerweise möchten wir diese AABB mit einem Objekt in unserer 3D-Welt "verknüpfen" (wie einem Charakter). In Three.js verfügen `Geometry`-Instanzen über eine `boundingBox`-Eigenschaft mit `min`- und `max`-Grenzen für das Objekt. Beachten Sie, dass, um diese Eigenschaft zu definieren, Sie vorher manuell `Geometry.computeBoundingBox` aufrufen müssen.

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
> Die `boundingBox`-Eigenschaft nimmt die `Geometry` selbst als Bezugspunkt und nicht das `Mesh`. Daher werden alle Transformationen wie Skalierung, Position usw., die auf das `Mesh` angewendet werden, bei der Berechnung der Box ignoriert.

Eine einfachere Alternative, die das vorherige Problem behebt, ist, diese Grenzen später mit `Box3.setFromObject` festzulegen, was die Dimensionen unter Berücksichtigung der **Transformationen _und_ aller Kind-Meshes** einer 3D-Entität berechnet.

```js
const knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.5, 0.1),
  new MeshNormalMaterial({}),
);

const knotBBox = new Box3(new THREE.Vector3(), new THREE.Vector3());
knotBBox.setFromObject(knot);
```

### Kugeln instanziieren

Das Instanziieren von **`Sphere`-Objekten** ist ähnlich. Wir müssen den Mittelpunkt und den Radius der Kugel angeben, die der `boundingSphere`-Eigenschaft in `Geometry` hinzugefügt werden können.

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

Leider gibt es kein Äquivalent zu `Box3.setFromObject` für Sphere-Instanzen. Daher müssen wir die Begrenzungskugel manuell aktualisieren, wenn wir Transformationen anwenden oder die Position des `Mesh` ändern. Beispielsweise:

```js
knot.scale.set(2, 2, 2);
knotBSphere.radius = knot.geometry.radius * 2;
```

### Schnittstellentests

#### Punkt vs. `Box3` / `Sphere`

Sowohl `Box3` als auch `Sphere` verfügen über eine **`containsPoint`**-Methode, um diesen Test durchzuführen.

```js
const point = new THREE.Vector3(2, 4, 7);
knotBBox.containsPoint(point);
```

#### `Box3` vs. `Box3`

Die **`Box3.intersectsBox`**-Methode steht zur Verfügung, um diesen Test durchzuführen.

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

Leider ist dieser Test in Three.js nicht implementiert, aber wir können die Sphere patchen, um einen Algorithmus für die [Schnittstelle zwischen Kugel und AABB](/de/docs/Games/Techniques/3D_collision_detection) zu implementieren.

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

Wir haben einige [Live-Demos](https://mozdevs.github.io/gamedev-js-3d-aabb/) vorbereitet, um diese Techniken zu demonstrieren, mit [Quellcode](https://github.com/mozdevs/gamedev-js-3d-aabb) zum Untersuchen.

- [Punkt vs. Box und Kugel](https://mozdevs.github.io/gamedev-js-3d-aabb/raw_point.html)
- [Box vs. Box und Kugel](https://mozdevs.github.io/gamedev-js-3d-aabb/raw_box.html)
- [Kugel vs. Box und Kugel](https://mozdevs.github.io/gamedev-js-3d-aabb/raw_sphere.html)

![Ein Knoter-Objekt, ein großes Kugelobjekt und ein kleines Kugelobjekt im 3D-Raum. Drei Vektoren sind auf der kleinen Kugel eingezeichnet. Die Vektoren zeigen in die Richtungen der drei Achsen, die den Raum definieren. Text am unteren Rand lautet: Ziehen Sie die Kugel herum.](screen_shot_2015-10-20_at_15.19.16.png)

## Verwendung von `BoxHelper`

Als Alternative zur Verwendung von rohen `Box3`- und `Sphere`-Objekten bietet Three.js ein nützliches Objekt, um die Handhabung von **Begrenzungsboxen zu erleichtern: [`BoxHelper`](https://threejs.org/docs/#api/helpers/BoxHelper)** (früher `BoundingBoxHelper`, das inzwischen veraltet ist). Dieser Helfer nimmt ein `Mesh` und berechnet ein Begrenzungsboxvolumen dafür (einschließlich der Kind-Meshes). Dies führt zu einem neuen Box-`Mesh`, das die Form der Begrenzungsbox zeigt und zur zuvor gesehenen Methode `setFromObject` übergeben werden kann, um eine Begrenzungsbox zu erstellen, die mit dem `Mesh` übereinstimmt.

`BoxHelper` ist die **empfohlene** Methode, um 3D-Kollisionen mit Begrenzungsvolumen in Three.js zu handhaben. Kugeltests fehlen zwar, aber die Kompromisse sind den Aufwand wert.

Die Vorteile der Verwendung dieses Helfers sind:

- Er verfügt über eine `update()`-Methode, die sein Begrenzungsbox-`Mesh` **vergrößert**, wenn das verknüpfte `Mesh` gedreht wird oder sich seine Dimensionen ändern, und seine **Position** aktualisiert.
- Er **berücksichtigt die Kind-Meshes** bei der Berechnung der Größe der Begrenzungsbox, sodass das ursprüngliche Mesh und alle seine Kinder umschlossen werden.
- Wir können Kollisionen leicht debuggen, indem wir die von `BoxHelper` erstellten `Mesh`-Objekte **rendern**. Standardmäßig werden sie mit einem Material vom Typ `LineBasicMaterial` erstellt (ein Three.js-Material zum Zeichnen von Drahtgitter-Geometrien).

Der Hauptnachteil ist, dass er **nur Box-Begrenzungsvolumina** erstellt, sodass Sie für Kugel-gegen-AABB-Tests Ihre eigenen `Sphere`-Objekte erstellen müssen.

Um ihn zu verwenden, müssen wir eine neue `BoxHelper`-Instanz erstellen und die Geometrie und — optional — eine Farbe angeben, die für das Drahtgittermaterial verwendet wird. Wir müssen das neu erstellte Objekt auch der `three.js`-Szene hinzufügen, um es zu rendern. Wir gehen davon aus, dass unsere Szenenvariable den Namen `scene` hat.

```js
const knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.5, 0.1),
  new THREE.MeshNormalMaterial({}),
);
const knotBoxHelper = new THREE.BoxHelper(knot, 0x00ff00);
scene.add(knotBoxHelper);
```

Um auch unsere tatsächliche `Box3`-Begrenzungsbox zu erhalten, erstellen wir ein neues `Box3`-Objekt und lassen es die Form und Position des `BoxHelper` annehmen.

```js
const box3 = new THREE.Box3();
box3.setFromObject(knotBoxHelper);
```

Wenn wir die Position, Rotation, Skalierung usw. des `Mesh` ändern, müssen wir die `update()`-Methode aufrufen, damit die `BoxHelper`-Instanz mit ihrem verknüpften `Mesh` übereinstimmt. Wir müssen auch `setFromObject` erneut aufrufen, um `Box3` dem `Mesh` anzupassen.

```js
knot.position.set(-3, 2, 1);
knot.rotation.x = -Math.PI / 4;
// update the bounding box so it stills wraps the knot
knotBoxHelper.update();
box3.setFromObject(knotBoxHelper);
```

Das Durchführen von **Kollisionstests** erfolgt auf die gleiche Weise wie im obigen Abschnitt erläutert — wir verwenden unser Box3-Objekt wie oben beschrieben.

```js
// box vs. box
box3.intersectsBox(otherBox3);
// box vs. point
box3.containsPoint(point.position);
```

### Demos

Es gibt **zwei Demos**, die Sie sich auf unserer [Live-Demo-Seite](https://mozdevs.github.io/gamedev-js-3d-aabb/) ansehen können. Die [erste](https://mozdevs.github.io/gamedev-js-3d-aabb/api_point.html) zeigt Punkt-gegen-Box-Kollisionen mit `BoxHelper`. Die [zweite](https://mozdevs.github.io/gamedev-js-3d-aabb/api_box.html) führt Box-gegen-Box-Tests durch.

![Ein Knoter-Objekt, ein Kugelobjekt und ein Würfelobjekt im 3D-Raum. Der Knoten und die Kugel sind von einer virtuellen Begrenzungsbox eingeschlossen. Der Würfel schneidet die Begrenzungsbox der Kugel. Text am unteren Rand lautet: Ziehen Sie den Würfel herum. Drücken Sie die Esc-Taste, um B-Boxen umzuschalten.](screen_shot_2015-10-19_at_12.10.06.png)
