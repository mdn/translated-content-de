---
title: 3D-Kollisionsdetektion
slug: Games/Techniques/3D_collision_detection
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

Dieser Artikel bietet eine Einführung in die verschiedenen Begrenzungsvolumen-Techniken, die zur Implementierung der Kollisionsdetektion in 3D-Umgebungen verwendet werden. Nachfolgende Artikel werden Implementierungen in spezifischen 3D-Bibliotheken behandeln.

## Achsen-ausgerichtete Begrenzungsboxen

Wie bei der 2D-Kollisionsdetektion sind **achsen-ausgerichtete Begrenzungsboxen** (AABB) der schnellste Algorithmus, um zu bestimmen, ob sich zwei Spielelemente überschneiden oder nicht. Dies besteht darin, Spielelemente in einer nicht-gedrehten (also achsen-ausgerichteten) Box zu verpacken und die Positionen dieser Boxen im 3D-Koordinatenraum zu überprüfen, um festzustellen, ob sie sich überschneiden.

![Zwei dreidimensionale, nicht-quadratische Objekte, die im Raum schweben und von virtuellen rechteckigen Boxen umgeben sind.](screen_shot_2015-10-16_at_15.11.21.png)

Die **achsen-ausgerichtete Einschränkung** besteht aus Leistungsgründen. Der Überlappungsbereich zwischen zwei nicht-gedrehten Boxen kann allein durch logische Vergleiche überprüft werden, während gedrehte Boxen zusätzliche trigonometrische Operationen erfordern, die langsamer zu berechnen sind. Wenn Sie Entitäten haben, die sich drehen, können Sie entweder die Abmessungen der Begrenzungsbox anpassen, damit sie das Objekt immer noch umschließt, oder Sie entscheiden sich für einen anderen Begrenzungsgeometrietyp, wie zum Beispiel Kugeln (die gegenüber Drehungen unveränderlich sind). Das animierte GIF unten zeigt ein grafisches Beispiel einer AABB, die ihre Größe anpasst, um die drehende Entität zu umschließen. Die Box ändert ständig ihre Dimensionen, um die in ihr enthaltene Entität passgenau zu umschließen.

![Animierter drehender Knoten, der zeigt, wie sich die virtuelle rechteckige Box verkleinert und vergrößert, während der Knoten sich innerhalb dreht. Die Box dreht sich nicht.](rotating_knot.gif)

> [!NOTE]
> Sehen Sie sich den Artikel [Bounding Volumes with Three.js](/de/docs/Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js) an, um eine praktische Implementierung dieser Technik zu sehen.

### Punkt vs. AABB

Zu überprüfen, ob ein Punkt in einer AABB ist, ist ziemlich einfach — wir müssen nur überprüfen, ob die Koordinaten des Punktes innerhalb der AABB liegen, indem wir jede Achse separat betrachten. Wenn wir annehmen, dass _P<sub>x</sub>_, _P<sub>y</sub>_ und _P<sub>z</sub>_ die Koordinaten des Punktes sind und _B<sub>minX</sub>_–_B<sub>maxX</sub>_, _B<sub>minY</sub>_–_B<sub>maxY</sub>_ und _B<sub>minZ</sub>_–_B<sub>maxZ</sub>_ die Bereiche jeder Achse der AABB sind, können wir berechnen, ob eine Kollision zwischen den beiden aufgetreten ist, indem wir die folgende Formel verwenden:

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

Zu überprüfen, ob eine AABB eine andere AABB schneidet, ist ähnlich wie der Punkt-Test. Wir müssen nur einen Test pro Achse durchführen, indem wir die Grenzen der Boxen verwenden. Das Diagramm unten zeigt den Test, den wir über die X-Achse durchführen würden — im Grunde, überlappen sich die Bereiche _A<sub>minX</sub>_–_A<sub>maxX</sub>_ und _B<sub>minX</sub>_–_B<sub>maxX</sub>_?

![Handzeichnung von zwei Rechtecken, die die obere rechte Ecke von A zeigen, die sich über die untere linke Ecke von B überlappt, da die größte x-Koordinate von A größer ist als die kleinste x-Koordinate von B.](aabb_test.png)

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

## Begrenzungssphären

Kollisionsdetektion mit Begrenzungssphären zu verwenden ist etwas komplexer als AABB, liefert jedoch immer noch schnelle Ergebnisse. Der Hauptvorteil von Sphären ist, dass sie invariant gegenüber Drehungen sind. Wenn die umfasste Entität rotiert, bleibt die Begrenzungssphäre gleich. Ihr Hauptnachteil ist, dass sie, sofern die umfasste Entität nicht tatsächlich kugelförmig ist, in der Regel schlecht passt (d.h. eine Person mit einer Begrenzungssphäre zu umschließen, wird viele Fehlalarme auslösen, während eine AABB eine bessere Übereinstimmung wäre).

### Punkt vs. Sphäre

Um zu überprüfen, ob eine Sphäre einen Punkt enthält, müssen wir den Abstand zwischen dem Punkt und dem Zentrum der Sphäre berechnen. Wenn dieser Abstand kleiner oder gleich dem Radius der Sphäre ist, liegt der Punkt innerhalb der Sphäre.

![Handzeichnung einer 2D-Projektion einer Sphäre und eines Punktes in einem kartesischen Koordinatensystem. Der Punkt befindet sich außerhalb des Kreises unten rechts. Der Abstand ist durch eine gestrichelte Linie, die mit D beschriftet ist, vom Mittelpunkt des Kreises zum Punkt gekennzeichnet. Eine hellere Linie zeigt den Radius, bezeichnet mit R, vom Mittelpunkt des Kreises zur Grenze des Kreises.](point_vs_sphere.png)

Unter Berücksichtigung, dass der euklidische Abstand zwischen zwei Punkten _A_ und _B_ <math><semantics><msqrt><mrow><mo stretchy="false">(</mo><msub><mi>A</mi><mi>x</mi></msub><mo>−</mo><msub><mi>B</mi><mi>x</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>y</mi></msub><mo>−</mo><msub><mi>B</mi><mi>y</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>z</mi></msub><mo>−</mo><msub><mi>B</mi><mi>z</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></msqrt><annotation encoding="TeX">\sqrt{(A_x - B_x)^2 + (A_y - B_y)^2 + (A_z - B_z)^2}</annotation></semantics></math> ist, würde unsere Formel für die Kollisionsdetektion von Punkt vs. Sphäre wie folgt aussehen:

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
> Der obige Code enthält eine Quadratwurzel, die kostspielig zu berechnen sein kann. Eine effektive Optimierung, um sie zu vermeiden, besteht darin, den quadrierten Abstand mit dem quadrierten Radius zu vergleichen, sodass die optimierte Gleichung stattdessen `distanceSqr < sphere.radius * sphere.radius` beinhalten würde.

### Sphäre vs. Sphäre

Der Test Sphäre vs. Sphäre ähnelt dem Punkt vs. Sphäre-Test. Hier müssen wir überprüfen, ob der Abstand zwischen den Zentren der Sphären kleiner oder gleich der Summe ihrer Radien ist.

![Handzeichnung von zwei sich teilweise überlappenden Kreisen. Jeder Kreis (in unterschiedlicher Größe) hat eine helle Radiuslinie, die von seinem Mittelpunkt bis zu seinem Rand verläuft, mit R gekennzeichnet. Der Abstand wird durch eine gepunktete Linie, mit D beschriftet, verbunden zwischen den Mittelpunkten beider Kreise dargestellt.](sphere_vs_sphere.png)

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

### Sphäre vs. AABB

Zu testen, ob eine Sphäre und eine AABB kollidieren, ist etwas komplizierter, aber immer noch einfach und schnell. Ein logischer Ansatz wäre, jeden Scheitelpunkt der AABB zu überprüfen, indem für jeden ein Punkt-gegen-Sphäre-Test durchgeführt wird. Dies ist jedoch überflüssig — das Testen aller Scheitelpunkte ist unnötig, da wir lediglich den Abstand zwischen dem _nächsten Punkt_ der AABB (nicht unbedingt ein Scheitelpunkt) und dem Zentrum der Sphäre berechnen müssen, um festzustellen, ob er kleiner oder gleich dem Radius der Sphäre ist. Diesen Wert können wir erhalten, indem wir das Zentrum der Sphäre auf die Grenzen der AABB beschränken.

![Handzeichnung eines Quadrats, das teilweise den oberen Teil eines Kreises überlappt. Der Radius wird durch eine helle Linie bezeichnet, die mit R beschriftet ist. Die Distanzlinie verläuft vom Zentrum des Kreises zum nächsten Punkt des Quadrats.](sphere_vs_aabb.png)

In JavaScript würden wir diesen Test wie folgt durchführen:

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

**3D-Physik-Engines** bieten Algorithmen zur Kollisionsdetektion, die meist ebenfalls auf Begrenzungsvolumen basieren. Eine Physik-Engine funktioniert, indem sie einen **physischen Körper** erstellt, der normalerweise an eine visuelle Darstellung gebunden ist. Dieser Körper besitzt Eigenschaften wie Geschwindigkeit, Position, Rotation, Drehmoment usw., und auch eine **physische Form**. Diese Form wird in den Berechnungen zur Kollisionsdetektion berücksichtigt.

Wir haben eine [Live-Demonstration zur Kollisionsdetektion](https://mozdevs.github.io/gamedev-js-3d-aabb/physics.html) (mit [Quellcode](https://github.com/mozdevs/gamedev-js-3d-aabb)) vorbereitet, die Sie sich ansehen können, um solche Techniken in Aktion zu sehen — diese verwendet die Open-Source-3D-Physik-Engine [cannon.js](https://github.com/schteppe/cannon.js).

## Siehe auch

Verwandte Artikel auf MDN:

- [Bounding volumes collision detection with Three.js](/de/docs/Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js)
- [2D collision detection](/de/docs/Games/Techniques/2D_collision_detection)

Externe Ressourcen:

- [Simple intersection tests for games](https://www.gamedeveloper.com/game-platforms/simple-intersection-tests-for-games) auf Game Developer
- [Bounding volume](https://en.wikipedia.org/wiki/Bounding_volume) auf Wikipedia
