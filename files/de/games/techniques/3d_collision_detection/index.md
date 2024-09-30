---
title: 3D-Kollisionsdetektion
slug: Games/Techniques/3D_collision_detection
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{GamesSidebar}}

Dieser Artikel bietet eine Einführung in die verschiedenen Begrenzungsvolumen-Techniken, die zur Implementierung der Kollisionsdetektion in 3D-Umgebungen verwendet werden. Nachfolgende Artikel werden Implementierungen in spezifischen 3D-Bibliotheken behandeln.

## Achsen-ausgerichtete Begrenzungsboxen

Wie bei der 2D-Kollisionsdetektion sind **achsen-ausgerichtete Begrenzungsboxen** (AABB) der schnellste Algorithmus, um festzustellen, ob zwei Spielelemente sich überlappen oder nicht. Dies besteht darin, Spielelemente in einer nicht gedrehten (also achsen-ausgerichteten) Box einzuschließen und die Positionen dieser Boxen im 3D-Koordinatenraum zu überprüfen, um festzustellen, ob sie sich überlappen.

![Zwei nicht quadratische 3D-Objekte schweben im Raum, umgeben von virtuellen rechteckigen Boxen.](screen_shot_2015-10-16_at_15.11.21.png)

Die **achsen-ausgerichtete Einschränkung** besteht aus Leistungsgründen. Der Überlappungsbereich zwischen zwei nicht gedrehten Boxen kann mit logischen Vergleichen allein überprüft werden, während gedrehte Boxen zusätzliche trigonometrische Operationen erfordern, die langsamer zu berechnen sind. Wenn Sie Entitäten haben, die sich drehen werden, können Sie entweder die Dimensionen der Begrenzungsbox ändern, sodass sie immer noch das Objekt umschließt, oder einen anderen Begrenzungsgeometrietyp verwenden, wie Kugeln (die unveränderlich gegenüber der Drehung sind). Das unten stehende animierte GIF zeigt ein grafisches Beispiel einer AABB, die ihre Größe anpasst, um die sich drehende Entität aufzunehmen. Die Box ändert ständig ihre Dimensionen, um die innerhalb enthaltene Entität passgenau einzuschließen.

![Animierter rotierender Knoten, der zeigt, wie die virtuelle rechteckige Box schrumpft und wächst, während sich die Knoten darin drehen. Die Box rotiert nicht.](rotating_knot.gif)

> [!NOTE]
> Sehen Sie sich den Artikel [Begrenzungsvolumen mit Three.js](/de/docs/Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js) an, um eine praktische Implementierung dieser Technik zu sehen.

### Punkt vs. AABB

Zu überprüfen, ob ein Punkt innerhalb einer AABB liegt, ist ziemlich einfach — wir müssen nur prüfen, ob die Koordinaten des Punktes innerhalb der AABB fallen; indem wir jede Achse separat betrachten. Wenn wir annehmen, dass _P<sub>x</sub>_, _P<sub>y</sub>_ und _P<sub>z</sub>_ die Koordinaten des Punktes sind und _B<sub>minX</sub>_–_B<sub>maxX</sub>_, _B<sub>minY</sub>_–_B<sub>maxY</sub>_, und _B<sub>minZ</sub>_–_B<sub>maxZ</sub>_ die Bereiche jeder Achse der AABB sind, können wir anhand der folgenden Formel berechnen, ob eine Kollision zwischen den beiden aufgetreten ist:

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

Zu überprüfen, ob eine AABB mit einer anderen AABB schneidet, ähnelt dem Punkt-Test. Wir müssen nur einen Test pro Achse durchführen, unter Verwendung der Grenzen der Boxen. Das unten abgebildete Diagramm zeigt den Test, den wir über die X-Achse durchführen würden — im Wesentlichen: Überlappen die Bereiche _A<sub>minX</sub>_–_A<sub>maxX</sub>_ und _B<sub>minX</sub>_–_B<sub>maxX</sub>_?

![Handzeichnung von zwei Rechtecken, die die obere rechte Ecke von A zeigen, die die untere linke Ecke von B überlappt, da A's größter x-Koordinate größer ist als B's kleinster x-Koordinate.](aabb_test.png)

Mathematisch würde dies so aussehen:

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

Die Verwendung von Begrenzungskugeln zur Erkennung von Kollisionen ist etwas komplexer als AABB, aber immer noch relativ schnell zu testen. Der Hauptvorteil von Kugeln ist, dass sie unveränderlich gegenüber der Drehung sind, sodass die Begrenzungskugel bei einer Drehung der eingeschlossenen Entität gleich bleibt. Ihr Hauptnachteil ist, dass, es sei denn, die eingeschlossene Entität ist tatsächlich kugelförmig, die Begrenzung normalerweise nicht gut passt (d.h. das Umhüllen einer Person mit einer Begrenzungskugel wird viele Fehlalarme verursachen, während eine AABB eine bessere Übereinstimmung sein würde).

### Punkt vs. Kugel

Um zu überprüfen, ob eine Kugel einen Punkt enthält, müssen wir den Abstand zwischen dem Punkt und dem Zentrum der Kugel berechnen. Wenn dieser Abstand kleiner oder gleich dem Radius der Kugel ist, liegt der Punkt innerhalb der Kugel.

![Handzeichnung einer 2D-Projektion einer Kugel und eines Punktes in einem kartesischen Koordinatensystem. Der Punkt befindet sich außerhalb des Kreises, rechts unten von ihm. Der Abstand wird durch eine gestrichelte Linie, die von der Mitte des Kreises zum Punkt verläuft, mit D gekennzeichnet. Eine hellere Linie zeigt den Radius, mit R gekennzeichnet, der vom Mittelpunkt des Kreises zur Grenze des Kreises geht.](point_vs_sphere.png)

Unter Berücksichtigung, dass der euklidische Abstand zwischen zwei Punkten _A_ und _B_ <math><semantics><msqrt><mrow><mo stretchy="false">(</mo><msub><mi>A</mi><mi>x</mi></msub><mo>−</mo><msub><mi>B</mi><mi>x</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>y</mi></msub><mo>−</mo><msub><mi>B</mi><mi>y</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>A</mi><mi>z</mi></msub><mo>−</mo><msub><mi>B</mi><mi>z</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></msqrt><annotation encoding="TeX">\sqrt{(A_x - B_x)^2 + (A_y - B_y)^2 + (A_z - B_z)^2}</annotation></semantics></math> ist, sieht unsere Formel für die Kollisionsdetektion von Punkt gegen Kugel so aus:

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
> Der obige Code verwendet eine Quadratwurzel, die teuer zu berechnen sein kann. Eine einfache Optimierung, um dies zu vermeiden, besteht darin, den quadratischen Abstand mit dem quadratischen Radius zu vergleichen, sodass die optimierte Gleichung stattdessen `distanceSqr < sphere.radius * sphere.radius` beinhalten würde.

### Kugel vs. Kugel

Der Test Kugel gegen Kugel ähnelt dem Punkt gegen Kugel-Test. Was wir hier testen müssen, ist, dass der Abstand zwischen den Mittelpunkten der Kugeln kleiner oder gleich der Summe ihrer Radien ist.

![Handzeichnung von zwei teilweise überlappenden Kreisen. Jeder Kreis (unterschiedlicher Größe) hat eine helle Radiuslinie, die von der Mitte zum Rand verläuft, mit R gekennzeichnet. Der Abstand wird durch eine gepunktete Linie, mit D gekennzeichnet, die die Mittelpunkte der beiden Kreise verbindet.](sphere_vs_sphere.png)

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

Zu testen, ob eine Kugel und eine AABB kollidieren, ist etwas komplizierter, aber immer noch einfach und schnell. Ein logischer Ansatz wäre, jeden Eckpunkt der AABB zu überprüfen und einen Punkt-gegen-Kugel-Test für jeden einzelnen durchzuführen. Dies ist jedoch übertrieben — das Testen aller Eckpunkte ist unnötig, da es ausreicht, nur den Abstand zwischen dem nächstgelegenen Punkt der AABB (nicht unbedingt ein Eckpunkt) und dem Mittelpunkt der Kugel zu berechnen und zu sehen, ob er kleiner oder gleich dem Radius der Kugel ist. Wir können diesen Wert erhalten, indem wir den Mittelpunkt der Kugel an die Grenzen der AABB klemmen.

![Handzeichnung eines Quadrats, das teilweise den oberen Teil eines Kreises überlappt. Der Radius ist durch eine helle Linie, mit R gekennzeichnet. Die Distanzlinie geht vom Mittelpunkt des Kreises zum nächstgelegenen Punkt des Quadrats.](sphere_vs_aabb.png)

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

## Verwendung einer Physik-Engine

**3D-Physik-Engines** bieten Algorithmen zur Kollisionsdetektion, von denen die meisten ebenfalls auf Begrenzungsvolumen basieren. Die Funktionsweise einer Physik-Engine besteht darin, einen **physischen Körper** zu erstellen, der normalerweise mit einer visuellen Darstellung davon verbunden ist. Dieser Körper hat Eigenschaften wie Geschwindigkeit, Position, Drehung, Drehmoment usw. und auch eine **physikalische Form**. Diese Form wird in den Berechnungen zur Kollisionsdetektion berücksichtigt.

Wir haben eine [Live-Kollisionsdetektionsdemo](https://mozdevs.github.io/gamedev-js-3d-aabb/physics.html) (mit [Quellcode](https://github.com/mozdevs/gamedev-js-3d-aabb)) vorbereitet, die Sie sich anschauen können, um solche Techniken in Aktion zu sehen — dies nutzt die Open-Source-3D-Physik-Engine [cannon.js](https://github.com/schteppe/cannon.js).

## Siehe auch

Verwandte Artikel auf MDN:

- [Begrenzungsvolumen-Kollisionsdetektion mit Three.js](/de/docs/Games/Techniques/3D_collision_detection/Bounding_volume_collision_detection_with_THREE.js)
- [2D-Kollisionsdetektion](/de/docs/Games/Techniques/2D_collision_detection)

Externe Ressourcen:

- [Einfache Schnittstellentests für Spiele](https://www.gamedeveloper.com/game-platforms/simple-intersection-tests-for-games) auf Game Developer
- [Begrenzungsvolumen](https://en.wikipedia.org/wiki/Bounding_volume) auf Wikipedia
