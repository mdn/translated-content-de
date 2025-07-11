---
title: 3D-Kollisionsdetektion
slug: Games/Techniques/3D_collision_detection
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Dieser Artikel bietet eine Einführung in die verschiedenen Begrenzungsvolumentechniken, die zur Implementierung der Kollisionsdetektion in 3D-Umgebungen genutzt werden. Folgeartikel werden Implementierungen in spezifischen 3D-Bibliotheken behandeln.

## Achsen-ausgerichtete Begrenzungsboxen

Wie bei der 2D-Kollisionsdetektion sind **achsen-ausgerichtete Begrenzungsboxen** (AABB) der schnellste Algorithmus, um zu bestimmen, ob die beiden Spielelemente sich überschneiden oder nicht. Diese Methode besteht darin, Spielelemente in eine nicht gedrehte (daher achsen-ausgerichtete) Box einzuschließen und die Positionen dieser Boxen im 3D-Koordinatenraum zu überprüfen, um zu sehen, ob sie sich überschneiden.

![Zwei dreidimensionale, nicht quadratische Objekte, die im Raum schweben und von virtuellen rechteckigen Boxen umgeben sind.](screen_shot_2015-10-16_at_15.11.21.png)

Die **achsen-ausgerichtete Einschränkung** existiert aus Leistungsgründen. Der Überlappungsbereich zwischen zwei nicht gedrehten Boxen kann allein mit logischen Vergleichen überprüft werden, während gedrehte Boxen zusätzliche trigonometrische Operationen erfordern, die langsamer zu berechnen sind. Wenn Sie Elemente haben, die rotieren werden, können Sie entweder die Dimensionen der Begrenzungsbox anpassen, sodass sie das Objekt weiterhin einhüllt, oder eine andere Begrenzungsgeometrie wie Kugeln verwenden (die rotationsinvariant sind). Das untenstehende animierte GIF zeigt ein grafisches Beispiel einer AABB, die ihre Größe an das rotierende Element anpasst. Die Box ändert ständig ihre Dimensionen, um das darin enthaltene Element passgenau zu umschließen.

![Animiertes rotierendes Knotenmuster, das zeigt, wie die virtuelle rechteckige Box beim Rotieren der Knoten schrumpft und wächst. Die Box dreht sich nicht.](rotating_knot.gif)

> [!NOTE]
> Schauen Sie sich den Artikel [Begrenzungsvolumen mit Three.js](/de/docs/Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js) an, um eine praktische Implementierung dieser Technik zu sehen.

### Punkt vs. AABB

Zu überprüfen, ob ein Punkt innerhalb einer AABB liegt, ist ziemlich einfach — wir müssen nur überprüfen, ob die Koordinaten des Punktes innerhalb der AABB liegen, wobei jede Achse separat betrachtet wird. Wenn wir annehmen, dass _P<sub>x</sub>_, _P<sub>y</sub>_ und _P<sub>z</sub>_ die Koordinaten des Punktes sind und _B<sub>minX</sub>_–_B<sub>maxX</sub>_, _B<sub>minY</sub>_–_B<sub>maxY</sub>_, und _B<sub>minZ</sub>_–_B<sub>maxZ</sub>_ die Bereiche jeder Achse der AABB sind, können wir mit der folgenden Formel berechnen, ob eine Kollision zwischen den beiden stattgefunden hat:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>P</mi><mo>,</mo><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>x</mi></msub><mo>≥</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>X</mi></mrow></msub><mo>∧</mo><msub><mi>P</mi><mi>x</mi></msub><mo>≤</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>X</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>y</mi></msub><mo>≥</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Y</mi></mrow></msub><mo>∧</mo><msub><mi>P</mi><mi>y</mi></msub><mo>≤</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Y</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>z</mi></msub><mo>≥</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Z</mi></mrow></msub><mo>∧</mo><msub><mi>P</mi><mi>z</mi></msub><mo>≤</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Z</mi></mrow></msub><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">f(P, B)= (P_x \ge B_{minX} \wedge P_x \le B_{maxX}) \wedge (P_y \ge B_{minY} \wedge P_y \le B_{maxY}) \wedge (P_z \ge B_{minZ} \wedge P_z \le B_{maxZ})</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Oder in JavaScript:

```js
function isPointInsideAABB(point, box) {
  return (
    point.x >= box.minX &&
    point.x <= box.maxX &&
    point.y >= box.minY &&
    point.y <= box.maxY &&
    point.z >= box.minZ &&
    point.z <= box.maxZ
  );
}
```

### AABB vs. AABB

Ob eine AABB eine andere AABB schneidet, lässt sich ähnlich wie beim Punkt-Test überprüfen. Wir müssen nur einen Test pro Achse durchführen, wobei wir die Begrenzungen der Boxen verwenden. Das untenstehende Diagramm zeigt den Test, den wir über die X-Achse durchführen würden — im Grunde überlappen sich die Bereiche _A<sub>minX</sub>_–_A<sub>maxX</sub>_ und _B<sub>minX</sub>_–_B<sub>maxX</sub>_?

![Handgezeichnetes Bild von zwei Rechtecken, das die Überlappung der oberen rechten Ecke von A mit der unteren linken Ecke von B zeigt, da A's größte x-Koordinate größer ist als B's kleinste x-Koordinate.](aabb_test.png)

Mathematisch würde das so aussehen:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>X</mi></mrow></msub><mo>≤</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>X</mi></mrow></msub><mo>∧</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>X</mi></mrow></msub><mo>≥</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>X</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Y</mi></mrow></msub><mo>≤</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Y</mi></mrow></msub><mo>∧</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Y</mi></mrow></msub><mo>≥</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Y</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Z</mi></mrow></msub><mo>≤</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Z</mi></mrow></msub><mo>∧</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Z</mi></mrow></msub><mo>≥</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Z</mi></mrow></msub><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">f(A, B) = (A_{minX} \le B_{maxX} \wedge A_{maxX} \ge B_{minX}) \wedge ( A_{minY} \le B_{maxY} \wedge A_{maxY} \ge B_{minY}) \wedge (A_{minZ} \le B_{maxZ} \wedge A_{maxZ} \ge B_{minZ})</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und in JavaScript würden wir dies verwenden:

```js
function intersect(a, b) {
  return (
    a.minX <= b.maxX &&
    a.maxX >= b.minX &&
    a.minY <= b.maxY &&
    a.maxY >= b.minY &&
    a.minZ <= b.maxZ &&
    a.maxZ >= b.minZ
  );
}
```

## Begrenzungskugeln

Das Verwenden von Begrenzungskugeln zur Kollisionsdetektion ist etwas komplexer als AABB, aber immer noch ziemlich schnell zu testen. Der Hauptvorteil von Kugeln ist, dass sie invariant gegenüber Rotation sind, sodass, wenn das umhüllte Element rotiert, die Begrenzungskugel immer noch dieselbe bleibt. Ihr Hauptnachteil ist, dass, es sei denn, das umhüllte Objekt ist tatsächlich kugelförmig, die Umhüllung normalerweise nicht sehr gut passt (zum Beispiel würde das Umhüllen einer Person mit einer Begrenzungskugel viele Fehlalarme verursachen, während eine AABB eine bessere Passform wäre).

### Punkt vs. Kugel

Um zu überprüfen, ob eine Kugel einen Punkt enthält, müssen wir den Abstand zwischen dem Punkt und dem Mittelpunkt der Kugel berechnen. Wenn dieser Abstand kleiner oder gleich dem Radius der Kugel ist, befindet sich der Punkt innerhalb der Kugel.

![Handgezeichnete Projektion einer 2D-Kugel und eines Punktes in einem kartesischen Koordinatensystem. Der Punkt befindet sich außerhalb des Kreises, rechts unten von ihm. Die Entfernung wird durch eine gestrichelte Linie, die von der Mitte des Kreises zum Punkt reicht, dargestellt und mit D bezeichnet. Eine leichtere Linie zeigt den Radius, mit R bezeichnet, vom Mittelpunkt des Kreises bis zum Rand des Kreises.](point_vs_sphere.png)

Berücksichtigt man, dass der euklidische Abstand zwischen zwei Punkten _A_ und _B_ <math><semantics><msqrt><mrow><mo stretchy="false">(</mo><msub><mi>A</mi><mi>x</mi></msub><mo>−</mo><msub><mi>B</mi><mi>x</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>y</mi></msub><mo>−</mo><msub><mi>B</mi><mi>y</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>z</mi></msub><mo>−</mo><msub><mi>B</mi><mi>z</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></msqrt><annotation encoding="TeX">\sqrt{(A_x - B_x)^2 + (A_y - B_y)^2 + (A_z - B_z)^2}</annotation></semantics></math> ist, würde sich unsere Formel zur Kollisionsdetektion von Punkt vs. Kugel folgendermaßen darstellen:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>P</mi><mo>,</mo><mi>S</mi><mo stretchy="false">)</mo><mo>=</mo><msub><mi>S</mi><mrow><mi>r</mi><mi>a</mi><mi>d</mi><mi>i</mi><mi>u</mi><mi>s</mi></mrow></msub><mo>≥</mo><msqrt><mo stretchy="false">(</mo><msub><mi>P</mi><mi>x</mi></msub><mo>−</mo><msub><mi>S</mi><mi>x</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>y</mi></msub><mo>−</mo><msub><mi>S</mi><mi>y</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>P</mi><mi>z</mi></msub><mo>−</mo><msub><mi>S</mi><mi>z</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></msqrt></mrow><annotation encoding="TeX">f(P,S) = S_{radius} \ge \sqrt{(P_x - S_x)^2 + (P_y - S_y)^2 + (P_z - S_z)^2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Oder in JavaScript:

```js
function isPointInsideSphere(point, sphere) {
  // we are using multiplications because is faster than calling Math.pow
  const distance = Math.sqrt(
    (point.x - sphere.x) * (point.x - sphere.x) +
      (point.y - sphere.y) * (point.y - sphere.y) +
      (point.z - sphere.z) * (point.z - sphere.z),
  );
  return distance < sphere.radius;
}
```

> [!NOTE]
> Der obige Code enthält eine Quadratwurzel, deren Berechnung teuer sein kann. Eine einfache Optimierung, um dies zu vermeiden, besteht darin, den quadratischen Abstand mit dem quadratischen Radius zu vergleichen, sodass die optimierte Gleichung stattdessen `distanceSqr < sphere.radius * sphere.radius` verwenden würde.

### Kugel vs. Kugel

Der Test Kugel vs. Kugel ist dem Test Punkt vs. Kugel ähnlich. Was wir hier testen müssen, ist, dass der Abstand zwischen den Mittelpunkten der Kugeln kleiner oder gleich der Summe ihrer Radien ist.

![Handgezeichnete Darstellung von zwei sich teilweise überlappenden Kreisen. Jeder Kreis (unterschiedlicher Größen) hat eine leichte Radiuslinie, die von seinem Mittelpunkt zu seinem Rand verläuft, mit R bezeichnet. Die Entfernung wird durch eine gepunktete Linie, die D bezeichnet wird, dargestellt und verbindet die Mittelpunkte beider Kreise.](sphere_vs_sphere.png)

Mathematisch sieht das so aus:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><msqrt><mo stretchy="false">(</mo><msub><mi>A</mi><mi>x</mi></msub><mo>−</mo><msub><mi>B</mi><mi>x</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>y</mi></msub><mo>−</mo><msub><mi>B</mi><mi>y</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>z</mi></msub><mo>−</mo><msub><mi>B</mi><mi>z</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></msqrt><mo>≤</mo><msub><mi>A</mi><mrow><mi>r</mi><mi>a</mi><mi>d</mi><mi>i</mi><mi>u</mi><mi>s</mi></mrow></msub><mo>+</mo><msub><mi>B</mi><mrow><mi>r</mi><mi>a</mi><mi>d</mi><mi>i</mi><mi>u</mi><mi>s</mi></mrow></msub></mrow><annotation encoding="TeX">f(A,B) = \sqrt{(A_x - B_x)^2 + (A_y - B_y)^2 + (A_z - B_z)^2} \le A_{radius} + B_{radius}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Oder in JavaScript:

```js
function intersect(sphere, other) {
  // we are using multiplications because it's faster than calling Math.pow
  const distance = Math.sqrt(
    (sphere.x - other.x) * (sphere.x - other.x) +
      (sphere.y - other.y) * (sphere.y - other.y) +
      (sphere.z - other.z) * (sphere.z - other.z),
  );
  return distance < sphere.radius + other.radius;
}
```

### Kugel vs. AABB

Zu testen, ob eine Kugel und eine AABB kollidieren, ist etwas komplizierter, aber immer noch einfach und schnell. Ein logischer Ansatz wäre, jeden Scheitelpunkt der AABB zu überprüfen, indem man für jeden einen Punkt-gegen-Kugel-Test durchführt. Dies ist jedoch übertrieben — das Testen aller Scheitelpunkte ist unnötig, da wir uns damit begnügen können, die Entfernung zwischen dem **nächsten Punkt** der AABB (nicht unbedingt ein Scheitelpunkt) und dem Mittelpunkt der Kugel zu berechnen und zu prüfen, ob sie kleiner oder gleich dem Radius der Kugel ist. Wir können diesen Wert erhalten, indem wir den Mittelpunkt der Kugel an die Grenzen der AABB klemmen.

![Handgezeichnete Darstellung eines Quadrats, das teilweise den oberen Teil eines Kreises überlappt. Der Radius wird durch eine leichte Linie, die mit R bezeichnet ist, dargestellt. Die Entfernungsline geht von der Mitte des Kreises bis zum nächsten Punkt des Quadrats.](sphere_vs_aabb.png)

In JavaScript würden wir diesen Test folgendermaßen durchführen:

```js
function intersect(sphere, box) {
  // get box closest point to sphere center by clamping
  const x = Math.max(box.minX, Math.min(sphere.x, box.maxX));
  const y = Math.max(box.minY, Math.min(sphere.y, box.maxY));
  const z = Math.max(box.minZ, Math.min(sphere.z, box.maxZ));

  // this is the same as isPointInsideSphere
  const distance = Math.sqrt(
    (x - sphere.x) * (x - sphere.x) +
      (y - sphere.y) * (y - sphere.y) +
      (z - sphere.z) * (z - sphere.z),
  );

  return distance < sphere.radius;
}
```

## Verwendung einer Physik-Engine

**3D-Physik-Engines** bieten Algorithmen zur Kollisionsdetektion, die meist ebenfalls auf Begrenzungsvolumen basieren. Eine Physik-Engine funktioniert, indem sie einen **physischen Körper** erstellt, der normalerweise an eine visuelle Darstellung angeheftet ist. Dieser Körper hat Eigenschaften wie Geschwindigkeit, Position, Rotation, Drehmoment usw. und auch eine **physische Form**. Diese Form wird in den Kollisionsdetektions-Berechnungen berücksichtigt.

Wir haben eine [Live-Demo zur Kollisionsdetektion](https://mozdevs.github.io/gamedev-js-3d-aabb/physics.html) (mit [Quellcode](https://github.com/mozdevs/gamedev-js-3d-aabb)) vorbereitet, die Sie betrachten können, um solche Techniken in Aktion zu sehen — diese verwendet die Open-Source-3D-Physik-Engine [cannon.js](https://github.com/schteppe/cannon.js).

## Siehe auch

Verwandte Artikel bei MDN:

- [Begrenzungsvolumen-Kollisionsdetektion mit Three.js](/de/docs/Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js)
- [2D-Kollisionsdetektion](/de/docs/Games/Techniques/2D_collision_detection)

Externe Ressourcen:

- [Einfache Schnittstellentests für Spiele](https://www.gamedeveloper.com/game-platforms/simple-intersection-tests-for-games) auf Game Developer
- [Begrenzungsvolumen](https://en.wikipedia.org/wiki/Bounding_volume) auf Wikipedia
