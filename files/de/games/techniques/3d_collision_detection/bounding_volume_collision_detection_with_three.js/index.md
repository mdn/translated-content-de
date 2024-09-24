---
title: Begrenzungsvolumen-Kollisionsdetektion mit THREE.js
slug: Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Dieser Artikel zeigt, wie man **Kollisionsdetektion zwischen Begrenzungsboxen und Kugeln mit der Three.js**-Bibliothek implementiert. Es wird davon ausgegangen, dass Sie vor dem Lesen dieses Artikels bereits unseren einführenden Artikel zur [3D-Kollisionsdetektion](/de/docs/Games/Techniques/3D_collision_detection) gelesen haben und Grundkenntnisse über Three.js besitzen.

## Verwendung von `Box3` und `Sphere`

Three.js bietet Objekte, die **mathematische Volumen** und Formen darstellen – für 3D-AABB und Begrenzungskugeln können wir die **[`Box3`](https://threejs.org/docs/#api/math/Box3)**- und **[`Sphere`](https://threejs.org/docs/#api/math/Sphere)**-Objekte verwenden. Nach der Instanziierung stehen sie für Schnittstellentests mit anderen Volumen zur Verfügung.

### Instanziieren von Boxen

Um eine **`Box3`-Instanz** zu erstellen, müssen wir die **unteren und oberen Grenzen** der Box angeben. Normalerweise möchten wir, dass diese AABB mit einem Objekt in unserer 3D-Welt "verbunden" ist (wie einem Charakter). In Three.js haben `Geometry`-Instanzen eine `boundingBox`-Eigenschaft mit den `min` und `max` Grenzen des Objekts. Beachten Sie, dass Sie diese Eigenschaft manuell mit `Geometry.computeBoundingBox` definieren müssen.

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
> Die `boundingBox`-Eigenschaft bezieht sich auf die `Geometry` selbst und nicht auf das `Mesh`. Daher werden bei der Berechnung der Box Transformationen wie Skalierung, Positionierung usw., die auf das `Mesh` angewendet werden, ignoriert.

Eine einfachere Alternative, die das vorherige Problem behebt, besteht darin, diese Grenzen später mit `Box3.setFromObject` festzulegen, wodurch die Dimensionen unter Berücksichtigung der **Transformationen _und_ aller Kind-Meshes** einer 3D-Einheit berechnet werden.

```js
const knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.5, 0.1),
  new MeshNormalMaterial({}),
);

const knotBBox = new Box3(new THREE.Vector3(), new THREE.Vector3());
knotBBox.setFromObject(knot);
```

### Instanziieren von Kugeln

Das Erstellen von **`Sphere`-Objekten** ist ähnlich. Wir müssen das Zentrum der Kugel und den Radius angeben, die zur `boundingSphere`-Eigenschaft der `Geometry` hinzugefügt werden können.

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

Leider gibt es kein Äquivalent zu `Box3.setFromObject` für Kugel-Instanzen. Wenn wir also Transformationen anwenden oder die Position des `Mesh` ändern, müssen wir die Begrenzungskugel manuell aktualisieren. Beispielsweise:

```js
knot.scale.set(2, 2, 2);
knotBSphere.radius = knot.geometry.radius * 2;
```

### Schnittstellentests

#### Punkt vs. `Box3` / `Sphere`

Sowohl `Box3` als auch `Sphere` haben eine **`containsPoint`**-Methode für diesen Test.

```js
const point = new THREE.Vector3(2, 4, 7);
knotBBox.containsPoint(point);
```

#### `Box3` vs. `Box3`

Die **`Box3.intersectsBox`**-Methode ist für diesen Test verfügbar.

```js
knotBbox.intersectsBox(otherBox);
```

> [!NOTE]
> Dies unterscheidet sich von der `Box3.containsBox`-Methode, die überprüft, ob die Box3 eine andere vollständig umschließt.

#### `Sphere` vs. `Sphere`

Ähnlich wie zuvor gibt es eine **`Sphere.intersectsSphere`**-Methode, um diesen Test durchzuführen.

```js
knotBSphere.intersectsSphere(otherSphere);
```

#### `Sphere` vs. `Box3`

Leider ist dieser Test in Three.js nicht implementiert, aber wir können `Sphere` erweitern, um einen [Sphere vs. AABB Schnittstellenalgorithmus](/de/docs/Games/Techniques/3D_collision_detection) zu implementieren.

```js
// erweitern Sie THREE.js Sphere für Kollisionsprüfungen vs. Box3
// wir erstellen einen Vektor außerhalb des Methodenbereichs, um
// die Erstellung einer neuen Instanz von Vector3 bei jeder Überprüfung zu vermeiden

THREE.Sphere.__closest = new THREE.Vector3();
THREE.Sphere.prototype.intersectsBox = function (box) {
  // ermittle den Boxnächsten Punkt zum Kugelzentrum durch Klammern
  THREE.Sphere.__closest.set(this.center.x, this.center.y, this.center.z);
  THREE.Sphere.__closest.clamp(box.min, box.max);

  const distance = this.center.distanceToSquared(THREE.Sphere.__closest);
  return distance < this.radius * this.radius;
};
```

### Demos

Wir haben einige [Live-Demos](https://mozdevs.github.io/gamedev-js-3d-aabb/) vorbereitet, um diese Techniken zu demonstrieren. Der [Quellcode](https://github.com/mozdevs/gamedev-js-3d-aabb) kann untersucht werden.

- [Punkt vs. Box und Kugel](https://mozdevs.github.io/gamedev-js-3d-aabb/raw_point.html)
- [Box vs. Box und Kugel](https://mozdevs.github.io/gamedev-js-3d-aabb/raw_box.html)
- [Kugel vs. Box und Kugel](https://mozdevs.github.io/gamedev-js-3d-aabb/raw_sphere.html)

![Ein Knotenobjekt, ein großes Kugelobjekt und ein kleines Kugelobjekt im 3D-Raum. Drei Vektoren sind auf der kleinen Kugel gezeichnet. Die Vektoren zeigen in die Richtungen der drei Achsen, die den Raum definieren. Am unteren Rand steht: Bewege die Kugel herum.](screen_shot_2015-10-20_at_15.19.16.png)

## Verwendung von `BoxHelper`

Als Alternative zur Verwendung roher `Box3`- und `Sphere`-Objekte bietet Three.js ein nützliches Objekt, um die Handhabung von **Begrenzungsboxen zu erleichtern: [`BoxHelper`](https://threejs.org/docs/#api/helpers/BoxHelper)** (zuvor `BoundingBoxHelper`, das veraltet ist). Dieser Helfer nimmt ein `Mesh` und berechnet ein Begrenzungsbox-Volumen dafür (einschließlich seiner Kindermeshes). Dies führt zu einem neuen Box-`Mesh`, das die Form der Begrenzungsbox zeigt und an die zuvor gesehene `setFromObject`-Methode übergeben werden kann, um eine Begrenzungsbox zu erhalten, die dem `Mesh` entspricht.

`BoxHelper` ist die **empfohlene** Methode zur Handhabung von 3D-Kollisionen mit Begrenzungsvolumen in Three.js. Sie werden auf Kugeltests verzichten, aber der Kompromiss lohnt sich.

Die Vorteile der Verwendung dieses Helfers sind:

- Er hat eine `update()`-Methode, die sein Begrenzungsbox-Mesh **vergrößert**, wenn das verknüpfte Mesh rotiert oder seine Dimensionen ändert, und seine **Position** aktualisiert.
- Er berücksichtigt die Kindermeshes bei der Berechnung der Größe der Begrenzungsbox, sodass das ursprüngliche Mesh und all seine Kinder umschlossen sind.
- Wir können Kollisionen leicht debuggen, indem wir die vom `BoxHelper` erstellten `Mesh`es **rendern**. Standardmäßig werden sie mit einem `LineBasicMaterial`-Material (ein Three.js-Material zum Zeichnen von Drahtgitter-Geomatrie) erstellt.

Der Hauptnachteil ist, dass er **nur Box-Begrenzungsvolumen erstellt**, sodass Sie, wenn Sie Kugel-gegen-AABB-Tests benötigen, Ihre eigenen `Sphere`-Objekte erstellen müssen.

Um ihn zu verwenden, müssen wir eine neue `BoxHelper`-Instanz erstellen und die Geometrie und — optional — eine Farbe angeben, die für das Drahtgittermaterial verwendet wird. Wir müssen das neu erstellte Objekt auch zur `three.js`-Szene hinzufügen, um es darzustellen. Wir nehmen an, dass unsere Szenenvariable `scene` genannt wird.

```js
const knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.5, 0.1),
  new THREE.MeshNormalMaterial({}),
);
const knotBoxHelper = new THREE.BoxHelper(knot, 0x00ff00);
scene.add(knotBoxHelper);
```

Um auch unsere tatsächliche `Box3`-Begrenzungsbox zu haben, erstellen wir ein neues `Box3`-Objekt und lassen es die Form und Position des `BoxHelper` übernehmen.

```js
const box3 = new THREE.Box3();
box3.setFromObject(knotBoxHelper);
```

Wenn wir die Position, Drehung, Skalierung usw. des `Mesh` ändern, müssen wir die `update()`-Methode aufrufen, damit die `BoxHelper`-Instanz mit ihrem verknüpften `Mesh` übereinstimmt. Wir müssen auch erneut `setFromObject` aufrufen, damit die `Box3` dem `Mesh` folgt.

```js
knot.position.set(-3, 2, 1);
knot.rotation.x = -Math.PI / 4;
// aktualisieren Sie die Begrenzungsbox, damit sie den Knoten weiterhin umschließt
knotBoxHelper.update();
box3.setFromObject(knotBoxHelper);
```

Das Durchführen von **Kollisionsprüfungen** erfolgt auf die gleiche Weise wie im obigen Abschnitt erklärt — wir verwenden unser Box3-Objekt auf die gleiche Weise wie oben beschrieben.

```js
// Box vs. Box
box3.intersectsBox(otherBox3);
// Box vs. Punkt
box3.containsPoint(point.position);
```

### Demos

Es gibt **zwei Demos**, die Sie auf unserer [Live-Demos-Seite](https://mozdevs.github.io/gamedev-js-3d-aabb/) anschauen können. Die [erste](https://mozdevs.github.io/gamedev-js-3d-aabb/api_point.html) zeigt Punkt-gegen-Box-Kollisionen mit `BoxHelper`. Die [zweite](https://mozdevs.github.io/gamedev-js-3d-aabb/api_box.html) führt Box-gegen-Box-Tests durch.

![Ein Knotenobjekt, ein Kugelobjekt und ein Würfelobjekt im 3D-Raum. Der Knoten und die Kugel sind von einer virtuellen Begrenzungsbox umgeben. Der Würfel schneidet die Begrenzungsbox der Kugel. Am unteren Rand steht: Bewege den Würfel herum. Drücke Esc, um B-Boxen umzuschalten.](screen_shot_2015-10-19_at_12.10.06.png)
