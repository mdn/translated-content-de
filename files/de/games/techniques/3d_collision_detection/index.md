---
title: 3D-Kollisionserkennung
slug: Games/Techniques/3D_collision_detection
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{GamesSidebar}}

Dieser Artikel bietet eine Einführung in die verschiedenen Begrenzungsvolumen-Techniken, die zur Implementierung der Kollisionserkennung in 3D-Umgebungen verwendet werden. Folgeartikel werden Implementierungen in spezifischen 3D-Bibliotheken behandeln.

## Achsen-ausgerichtete Begrenzungsboxen

Wie bei der 2D-Kollisionserkennung sind **achsen-ausgerichtete Begrenzungsboxen** (AABB) der schnellste Algorithmus, um festzustellen, ob sich die beiden Spielelemente überlappen oder nicht. Dies besteht darin, die Spielelemente in eine nicht gedrehte (somit achsen-ausgerichtete) Box einzuschließen und die Positionen dieser Boxen im 3D-Koordinatenraum zu überprüfen, um festzustellen, ob sie sich überlappen.

![Zwei 3D-Nicht-Quadrat Objekte, die im Raum schweben, umschlossen von virtuellen rechteckigen Boxen.](screen_shot_2015-10-16_at_15.11.21.png)

Die **achsen-ausgerichtete Einschränkung** besteht aus Leistungsgründen. Der Überlappungsbereich zwischen zwei nicht gedrehten Boxen kann nur mit logischen Vergleichen überprüft werden, während gedrehte Boxen zusätzliche trigonometrische Operationen erfordern, die langsamer zu berechnen sind. Wenn Sie Elemente haben, die sich drehen werden, können Sie entweder die Abmessungen der Begrenzungsbox ändern, damit sie das Objekt weiterhin umschließt, oder sich dafür entscheiden, einen anderen Begrenzungsgeometrietyp zu verwenden, wie Kugeln (die gegenüber Rotation invariant sind). Das animierte GIF unten zeigt ein grafisches Beispiel einer AABB, die ihre Größe anpasst, um das rotierende Objekt zu umschließen. Die Box ändert ständig ihre Abmessungen, um das darin enthaltene Objekt passgenau zu umschließen.

![Animierte rotierende Knoten, die zeigen, dass sich die virtuelle rechteckige Box verkleinert und vergrößert, während die Knoten darin rotieren. Die Box dreht sich nicht.](rotating_knot.gif)

> [!NOTE]
> Werfen Sie einen Blick auf den Artikel [Begrenzungsvolumen mit Three.js](/de/docs/Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js), um eine praktische Implementierung dieser Technik zu sehen.

### Punkt vs. AABB

Es ist ziemlich einfach zu überprüfen, ob ein Punkt innerhalb einer AABB liegt — wir müssen nur überprüfen, ob die Koordinaten des Punktes innerhalb der AABB liegen und dabei jede Achse separat betrachten. Wenn wir annehmen, dass _P<sub>x</sub>_, _P<sub>y</sub>_ und _P<sub>z</sub>_ die Koordinaten des Punktes sind, und _B<sub>minX</sub>_–_B<sub>maxX</sub>_, _B<sub>minY</sub>_–_B<sub>maxY</sub>_, und _B<sub>minZ</sub>_–_B<sub>maxZ</sub>_ die Bereiche jeder Achse der AABB sind, können wir berechnen, ob eine Kollision zwischen den beiden nach der folgenden Formel aufgetreten ist:

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

Zu überprüfen, ob eine AABB eine andere AABB schneidet, ist dem Punkttest ähnlich. Wir müssen nur einen Test pro Achse durchführen und dabei die Begrenzungen der Boxen verwenden. Das Diagramm unten zeigt den Test, den wir entlang der X-Achse durchführen würden — im Grunde genommen, überlappen sich die Bereiche _A<sub>minX</sub>_–_A<sub>maxX</sub>_ und _B<sub>minX</sub>_–_B<sub>maxX</sub>_?

![Handzeichnung von zwei Rechtecken, die zeigen, dass die obere rechte Ecke von A die untere linke Ecke von B überlappt, da die größte X-Koordinate von A größer ist als die kleinste X-Koordinate von B.](aabb_test.png)

Mathematisch sieht das so aus:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>X</mi></mrow></msub><mo>≤</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>X</mi></mrow></msub><mo>∧</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>X</mi></mrow></msub><mo>≥</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>X</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Y</mi></mrow></msub><mo>≤</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Y</mi></mrow></msub><mo>∧</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Y</mi></mrow></msub><mo>≥</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Y</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Z</mi></mrow></msub><mo>≤</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Z</mi></mrow></msub><mo>∧</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Z</mi></mrow></msub><mo>≥</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Z</mi></mrow></msub><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">f(A, B) = (A_{minX} \le B_{maxX} \wedge A_{maxX} \ge B_{minX}) \wedge ( A_{minY} \le B_{maxY} \wedge A_{maxY} \ge B_{minY}) \wedge (A_{minZ} \le B_{maxZ} \wedge A_{maxZ} \ge B_{minZ})</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und in JavaScript würden wir diesen Code verwenden:

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

Die Verwendung von Begrenzungskugeln zur Kollisionserkennung ist etwas komplexer als AABB, aber dennoch relativ schnell zu testen. Der Hauptvorteil von Kugeln besteht darin, dass sie gegenüber Rotation invariant sind. Wenn sich also das umschlossene Element dreht, bleibt die Begrenzungskugel unverändert. Ihr Hauptnachteil ist, dass, es sei denn, das umschlossene Element ist tatsächlich kugelförmig, die Umhüllung normalerweise nicht gut passt (z. B. führt das Umhüllen einer Person mit einer Begrenzungskugel zu vielen Fehlalarmen, während eine AABB besser geeignet wäre).

### Punkt vs. Kugel

Um zu überprüfen, ob eine Kugel einen Punkt enthält, müssen wir den Abstand zwischen Punkt und Kugelmittelpunkt berechnen. Wenn dieser Abstand kleiner oder gleich dem Radius der Kugel ist, befindet sich der Punkt innerhalb der Kugel.

![Handzeichnung einer 2D-Projektion einer Kugel und eines Punktes in einem kartesischen Koordinatensystem. Der Punkt liegt außerhalb des Kreises, rechts unten davon. Der Abstand ist durch eine gestrichelte Linie, markiert mit D, vom Kreismittelpunkt zum Punkt gekennzeichnet. Eine leichtere Linie zeigt den Radius, markiert mit R, vom Zentrum des Kreises bis zum Rand des Kreises.](point_vs_sphere.png)

Angesichts der Tatsache, dass der euklidische Abstand zwischen zwei Punkten _A_ und _B_ <math><semantics><msqrt><mrow><mo stretchy="false">(</mo><msub><mi>A</mi><mi>x</mi></msub><mo>−</mo><msub><mi>B</mi><mi>x</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>y</mi></msub><mo>−</mo><msub><mi>B</mi><mi>y</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>z</mi></msub><mo>−</mo><msub><mi>B</mi><mi>z</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></msqrt><annotation encoding="TeX">\sqrt{(A_x - B_x)^2 + (A_y - B_y)^2 + (A_z - B_z)^2}</annotation></semantics></math> ist, funktioniert unsere Formel für die Kollisionserkennung Punkt vs. Kugel so:

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
> Der obige Code enthält eine Quadratwurzel, die teuer zu berechnen sein kann. Eine einfache Optimierung, um sie zu vermeiden, besteht darin, den quadrierten Abstand mit dem quadrierten Radius zu vergleichen, sodass die optimierte Gleichung stattdessen `distanceSqr < sphere.radius * sphere.radius` beinhaltet.

### Kugel vs. Kugel

Der Test Kugel vs. Kugel ist dem Test Punkt vs. Kugel ähnlich. Was wir hier testen müssen, ist, ob der Abstand zwischen den Mittelpunkten der Kugeln kleiner oder gleich der Summe ihrer Radien ist.

![Handzeichnung von zwei teilweise überlappenden Kreisen. Jeder Kreis (von verschiedener Größe) hat eine leichtere Radiuslinie, die von seinem Zentrum zu seinem Rand verläuft, markiert mit R. Der Abstand ist durch eine gepunktete Linie, markiert mit D, verbunden, die die Mittelpunkte beider Kreise verbindet.](sphere_vs_sphere.png)

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

Zu testen, ob eine Kugel und eine AABB kollidieren, ist etwas komplizierter, aber immer noch einfach und schnell. Ein logischer Ansatz wäre, jeden Eckpunkt der AABB zu überprüfen und für jeden einen Punkt-vs.-Kugel-Test durchzuführen. Dies ist jedoch übertrieben — das Testen aller Eckpunkte ist unnötig, da wir mit der Berechnung des Abstands zwischen dem **nächsten Punkt** der AABB (nicht unbedingt ein Eckpunkt) und dem Mittelpunkt der Kugel, der kleiner oder gleich dem Radius der Kugel sein muss, davonkommen. Wir können diesen Wert erhalten, indem wir den Mittelpunkt der Kugel auf die Begrenzungen der AABB einschränken.

![Handzeichnung eines Quadrats, das teilweise die Oberseite eines Kreises überlappt. Der Radius wird durch eine leichte Linie markiert mit R angezeigt. Die Distanzlinie verläuft vom Mittelpunkt des Kreises zum nächsten Punkt des Quadrats.](sphere_vs_aabb.png)

In JavaScript würden wir diesen Test auf folgende Weise durchführen:

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

**3D-Physik-Engines** bieten Kollisionserkennungsalgorithmen, die ebenfalls meist auf Begrenzungsvolumen basieren. Eine Physik-Engine funktioniert, indem sie einen **physischen Körper** erstellt, der normalerweise mit einer visuellen Darstellung davon verbunden ist. Dieser Körper hat Eigenschaften wie Geschwindigkeit, Position, Rotation, Drehmoment usw. sowie eine **physikalische Form**. Diese Form wird in den Berechnungen zur Kollisionserkennung berücksichtigt.

Wir haben eine [aktive Kollisionserkennungs-Demo](https://mozdevs.github.io/gamedev-js-3d-aabb/physics.html) (mit [Quellcode](https://github.com/mozdevs/gamedev-js-3d-aabb)) vorbereitet, die Sie sich ansehen können, um diese Techniken in Aktion zu sehen — dies verwendet die Open-Source-3D-Physik-Engine [cannon.js](https://github.com/schteppe/cannon.js).

## Siehe auch

Verwandte Artikel auf MDN:

- [Begrenzungsvolumen-Kollisionserkennung mit Three.js](/de/docs/Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js)
- [2D-Kollisionserkennung](/de/docs/Games/Techniques/2D_collision_detection)

Externe Ressourcen:

- [Einfache Schnittpunkttests für Spiele](https://www.gamedeveloper.com/game-platforms/simple-intersection-tests-for-games) auf Game Developer
- [Begrenzungsvolumen](https://de.wikipedia.org/wiki/Begrenzungsvolumen) auf Wikipedia
