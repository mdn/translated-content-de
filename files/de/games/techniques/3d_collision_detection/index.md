---
title: 3D-Kollisionserkennung
slug: Games/Techniques/3D_collision_detection
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{GamesSidebar}}

Dieser Artikel bietet eine Einführung in die verschiedenen Techniken für Begrenzungsvolumina, die zur Implementierung der Kollisionserkennung in 3D-Umgebungen verwendet werden. Nachfolgende Artikel werden Implementierungen in spezifischen 3D-Bibliotheken abdecken.

## Achsen-aligned Begrenzungsboxen

Wie bei der 2D-Kollisionserkennung sind **achsen-aligned Begrenzungsboxen** (AABB) der schnellste Algorithmus, um festzustellen, ob sich zwei Spielelemente überlappen oder nicht. Dazu werden Spielelemente in einer nicht-rotierenden (daher achsen-aligned) Box eingeschlossen und die Positionen dieser Boxen im 3D-Koordinatenraum überprüft, um zu sehen, ob sie sich überlappen.

![Zwei 3D-nicht-quadratische Objekte schweben im Raum, umgeben von virtuellen rechteckigen Boxen.](screen_shot_2015-10-16_at_15.11.21.png)

Die **achsen-aligned Beschränkung** existiert aus Leistungsgründen. Der Überlappungsbereich zwischen zwei nicht-rotierenden Boxen kann allein durch logische Vergleiche überprüft werden, während rotierende Boxen zusätzliche trigonometrische Operationen erfordern, die langsamer zu berechnen sind. Wenn Sie Elemente haben, die rotieren werden, können Sie entweder die Dimensionen der Begrenzungsbox modifizieren, sodass sie das Objekt weiterhin umschließt, oder sich für eine andere Art von Begrenzungsgeometrie entscheiden, wie z. B. Kugeln (die rotationsinvariant sind). Das animierte GIF unten zeigt ein grafisches Beispiel für eine AABB, die ihre Größe anpasst, um das rotierende Element aufzunehmen. Die Box ändert ständig ihre Abmessungen, um das darin enthaltene Element passend zu umschließen.

![Animierter, rotierender Knoten zeigt die virtuelle rechteckige Box, die sich verkleinert und vergrößert, während der Knoten darin rotiert. Die Box dreht sich nicht.](rotating_knot.gif)

> [!NOTE]
> Sehen Sie sich den Artikel [Bounding Volumes mit Three.js](/de/docs/Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js) an, um eine praktische Umsetzung dieser Technik zu sehen.

### Punkt vs. AABB

Zu überprüfen, ob ein Punkt in einer AABB liegt, ist ziemlich einfach – wir müssen nur überprüfen, ob die Koordinaten des Punktes innerhalb der AABB liegen; wobei jede Achse separat betrachtet wird. Wenn wir annehmen, dass _P<sub>x</sub>_, _P<sub>y</sub>_ und _P<sub>z</sub>_ die Koordinaten des Punktes sind und _B<sub>minX</sub>_–_B<sub>maxX</sub>_, _B<sub>minY</sub>_–_B<sub>maxY</sub>_ und _B<sub>minZ</sub>_–_B<sub>maxZ</sub>_ die Bereiche jeder Achse der AABB sind, können wir mit der folgenden Formel berechnen, ob eine Kollision zwischen den beiden aufgetreten ist:

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

Zu überprüfen, ob eine AABB eine andere AABB schneidet, ähnelt dem Punkttest. Wir müssen nur einen Test pro Achse durchführen, indem wir die Grenzen der Boxen verwenden. Das Diagramm unten zeigt den Test, den wir über die X-Achse durchführen würden – im Grunde, ob die Bereiche _A<sub>minX</sub>_–_A<sub>maxX</sub>_ und _B<sub>minX</sub>_–_B<sub>maxX</sub>_ überlappen?

![Handzeichnung von zwei Rechtecken, die zeigen, dass die obere rechte Ecke von A die untere linke Ecke von B überlappt, da A's größte x-Koordinate größer ist als B's kleinste x-Koordinate.](aabb_test.png)

Mathematisch sieht das folgendermaßen aus:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>X</mi></mrow></msub><mo>≤</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>X</mi></mrow></msub><mo>∧</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>X</mi></mrow></msub><mo>≥</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>X</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Y</mi></mrow></msub><mo>≤</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Y</mi></mrow></msub><mo>∧</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Y</mi></mrow></msub><mo>≥</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Y</mi></mrow></msub><mo stretchy="false">)</mo><mo>∧</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Z</mi></mrow></msub><mo>≤</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Z</mi></mrow></msub><mo>∧</mo><msub><mi>A</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mi>Z</mi></mrow></msub><mo>≥</mo><msub><mi>B</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi><mi>Z</mi></mrow></msub><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">f(A, B) = (A_{minX} \le B_{maxX} \wedge A_{maxX} \ge B_{minX}) \wedge ( A_{minY} \le B_{maxY} \wedge A_{maxY} \ge B_{minY}) \wedge (A_{minZ} \le B_{maxZ} \wedge A_{maxZ} \ge B_{minZ})</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Und in JavaScript würden wir das so machen:

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

Der Einsatz von Begrenzungskugeln zur Kollisionsdetektion ist etwas komplexer als AABB, aber immer noch relativ schnell zu testen. Der Hauptvorteil von Kugeln ist, dass sie rotationsinvariant sind, sodass, wenn das umschlossene Element rotiert, die Begrenzungskugel dennoch dieselbe bleibt. Ihr Hauptnachteil ist, dass sie, es sei denn, das umhüllte Element ist tatsächlich kugelförmig, normalerweise nicht gut passen (d.h. das Umhüllen einer Person mit einer Begrenzungskugel wird viele falsche Treffer verursachen, während eine AABB besser passen würde).

### Punkt vs. Kugel

Um zu überprüfen, ob eine Kugel einen Punkt enthält, müssen wir den Abstand zwischen dem Punkt und dem Zentrum der Kugel berechnen. Wenn dieser Abstand kleiner oder gleich dem Radius der Kugel ist, befindet sich der Punkt innerhalb der Kugel.

![Handzeichnung einer 2D-Projektion einer Kugel und eines Punktes in einem kartesischen Koordinatensystem. Der Punkt liegt außerhalb des Kreises, unten rechts davon. Der Abstand ist durch eine gestrichelte Linie, mit D bezeichnet, vom Zentrum des Kreises zum Punkt gekennzeichnet. Eine hellere Linie zeigt den Radius, mit R bezeichnet, der vom Zentrum des Kreises zum Rand des Kreises geht.](point_vs_sphere.png)

Wenn man bedenkt, dass der euklidische Abstand zwischen zwei Punkten _A_ und _B_ <math><semantics><msqrt><mrow><mo stretchy="false">(</mo><msub><mi>A</mi><mi>x</mi></msub><mo>−</mo><msub><mi>B</mi><mi>x</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>y</mi></msub><mo>−</mo><msub><mi>B</mi><mi>y</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>z</mi></msub><mo>−</mo><msub><mi>B</mi><mi>z</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></msqrt><annotation encoding="TeX">\sqrt{(A_x - B_x)^2 + (A_y - B_y)^2 + (A_z - B_z)^2}</annotation></semantics></math> ist, ergibt sich unsere Formel für die Punkt-gegen-Kugel-Kollisionserkennung wie folgt:

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
> Der obige Code enthält eine Quadratwurzel, deren Berechnung teuer sein kann. Eine einfache Optimierung, um dies zu vermeiden, besteht darin, den quadratischen Abstand mit dem quadratischen Radius zu vergleichen, sodass die optimierte Gleichung stattdessen `distanceSqr < sphere.radius * sphere.radius` beinhaltet.

### Kugel vs. Kugel

Der Test Kugel gegen Kugel ähnelt dem Punkt-gegen-Kugel-Test. Was wir hier testen müssen, ist, dass der Abstand zwischen den Zentren der Kugeln kleiner oder gleich der Summe ihrer Radien ist.

![Handzeichnung von zwei sich teilweise überlappenden Kreisen. Jeder Kreis (unterschiedlicher Größe) hat eine helle Linie, die vom Zentrum zu seinem Rand verläuft, gekennzeichnet mit R. Der Abstand ist durch eine punktierte Linie, mit D bezeichnet, die die Mittelpunkte beider Kreise verbindet, gekennzeichnet.](sphere_vs_sphere.png)

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

Das Testen, ob eine Kugel und eine AABB kollidieren, ist etwas komplizierter, aber immer noch einfach und schnell. Ein logischer Ansatz wäre, jeden Scheitelpunkt der AABB zu prüfen und für jeden einen Punkt-gegen-Kugel-Test durchzuführen. Dies ist jedoch übertrieben – das Testen aller Scheitelpunkte ist unnötig, da wir uns damit begnügen können, nur den Abstand zwischen dem _nächstgelegenen Punkt_ der AABB (nicht unbedingt ein Scheitelpunkt) und dem Zentrum der Kugel zu berechnen und zu prüfen, ob dieser kleiner oder gleich dem Radius der Kugel ist. Diesen Wert können wir erhalten, indem wir das Zentrum der Kugel an die Grenzen der AABB klammern.

![Handzeichnung eines Quadrats, das teilweise den oberen Bereich eines Kreises überlappt. Der Radius wird durch eine helle Linie, mit R bezeichnet, dargestellt. Die Entfernungslinie geht vom Zentrum des Kreises zum nächstgelegenen Punkt des Quadrats.](sphere_vs_aabb.png)

In JavaScript würden wir diesen Test so durchführen:

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

## Verwendung eines Physik-Engines

**3D Physik-Engines** bieten Algorithmen zur Kollisionserkennung, von denen die meisten ebenfalls auf Begrenzungsvolumina basieren. Die Funktionsweise einer Physik-Engine besteht darin, einen **physischen Körper** zu erstellen, der normalerweise an eine visuelle Darstellung davon angehängt ist. Dieser Körper hat Eigenschaften wie Geschwindigkeit, Position, Rotation, Drehmoment usw. und auch eine **physikalische Form**. Diese Form wird in den Berechnungen zur Kollisionserkennung berücksichtigt.

Wir haben eine [live Kollisionserkennungsdemonstration](https://mozdevs.github.io/gamedev-js-3d-aabb/physics.html) (mit [Quellcode](https://github.com/mozdevs/gamedev-js-3d-aabb)) vorbereitet, die Sie sich ansehen können, um solche Techniken in Aktion zu sehen – hierbei wird die Open-Source-3D-Physik-Engine [cannon.js](https://github.com/schteppe/cannon.js) verwendet.

## Siehe auch

Verwandte Artikel auf MDN:

- [Kollisionserkennung von Begrenzungsvolumina mit Three.js](/de/docs/Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js)
- [2D-Kollisionserkennung](/de/docs/Games/Techniques/2D_collision_detection)

Externe Ressourcen:

- [Einfache Schnittstellentests für Spiele](https://www.gamedeveloper.com/game-platforms/simple-intersection-tests-for-games) auf Game Developer
- [Begrenzungsvolumen](https://de.wikipedia.org/wiki/Begrenzungsvolumen) auf Wikipedia
