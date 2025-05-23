---
title: Matrix-Mathematik für das Web
slug: Web/API/WebGL_API/Matrix_math_for_the_web
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{DefaultAPISidebar("WebGL")}}

Matrizen können verwendet werden, um Transformationen von Objekten im Raum darzustellen, und werden verwendet, um viele wichtige Arten von Berechnungen beim Erstellen von Bildern und der Visualisierung von Daten im Web durchzuführen. Dieser Artikel untersucht, wie Matrizen erstellt werden und wie man sie mit [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) und dem `matrix3d`-Transformationstyp verwendet.

Obwohl dieser Artikel [CSS](/de/docs/Web/CSS) zur Vereinfachung von Erklärungen verwendet, sind Matrizen ein zentrales Konzept, das von vielen verschiedenen Technologien verwendet wird, einschließlich [WebGL](/de/docs/Web/API/WebGL_API), der [WebXR](/de/docs/Web/API/WebXR_Device_API) (VR und AR) API und [GLSL Shadern](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders). Dieser Artikel ist auch als [MDN Content Kit](https://github.com/gregtatum/mdn-matrix-math) verfügbar. Die Live-Beispiele verwenden eine Sammlung von [Utility-Funktionen](https://github.com/gregtatum/mdn-webgl), die unter einem globalen Objekt namens `MDN` verfügbar sind.

## Transformationsmatrizen

Es gibt viele Arten von Matrizen, aber die, die uns interessieren, sind die 3D-Transformationsmatrizen. Diese Matrizen bestehen aus einem Satz von 16 Werten, die in einem 4×4-Raster angeordnet sind. In [JavaScript](/de/docs/Web/JavaScript) ist es einfach, eine Matrix als Array darzustellen.

Lassen Sie uns mit der **Identitätsmatrix** beginnen. Dies ist eine spezielle Transformationsmatrix, die ähnlich wie die Zahl 1 bei der Skalarmultiplikation fungiert; genau wie n \* 1 = n ergibt die Multiplikation einer Matrix mit der Identitätsmatrix eine resultierende Matrix, deren Werte mit der ursprünglichen Matrix übereinstimmen.

Die Identitätsmatrix sieht in JavaScript so aus:

```js-nolint
const identityMatrix = [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1,
];
```

Wie sieht das Multiplizieren mit der Identitätsmatrix aus? Das einfachste Beispiel ist das Multiplizieren eines einzelnen Punktes mit der Identitätsmatrix. Da ein 3D-Punkt nur drei Werte (`x`, `y` und `z`) benötigt und die Transformationsmatrix eine 4×4-Wertematrix ist, müssen wir dem Punkt eine vierte Dimension hinzufügen. Nach Konvention wird diese Dimension als **Perspective** bezeichnet und durch den Buchstaben `w` dargestellt. Für eine typische Position wird durch das Setzen von `w` auf 1 die Mathematik korrekt berechnet.

Nachdem Sie die `w`-Komponente dem Punkt hinzugefügt haben, bemerken Sie, wie ordentlich die Matrix und der Punkt aufeinander abgestimmt sind:

```js-nolint
[1, 0, 0, 0,
 0, 1, 0, 0,
 0, 0, 1, 0,
 0, 0, 0, 1];

[4, 3, 2, 1]; // Point at [x, y, z, w]
```

Die `w`-Komponente hat einige zusätzliche Verwendungen, die außerhalb des Geltungsbereichs dieses Artikels liegen. Sehen Sie sich den Artikel [WebGL model view projection](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection) an, um zu sehen, wie er sich als nützlich erweist.

### Multiplikation einer Matrix und eines Punktes

In unserem Beispielcode haben wir eine Funktion definiert, um eine Matrix und einen Punkt zu multiplizieren — `multiplyMatrixAndPoint()`:

```js
// point • matrix
function multiplyMatrixAndPoint(matrix, point) {
  // Give a simple variable name to each part of the matrix, a column and row number
  const c0r0 = matrix[0],
    c1r0 = matrix[1],
    c2r0 = matrix[2],
    c3r0 = matrix[3];
  const c0r1 = matrix[4],
    c1r1 = matrix[5],
    c2r1 = matrix[6],
    c3r1 = matrix[7];
  const c0r2 = matrix[8],
    c1r2 = matrix[9],
    c2r2 = matrix[10],
    c3r2 = matrix[11];
  const c0r3 = matrix[12],
    c1r3 = matrix[13],
    c2r3 = matrix[14],
    c3r3 = matrix[15];

  // Now set some simple names for the point
  const x = point[0];
  const y = point[1];
  const z = point[2];
  const w = point[3];

  // Multiply the point against each part of the 1st column, then add together
  const resultX = x * c0r0 + y * c0r1 + z * c0r2 + w * c0r3;

  // Multiply the point against each part of the 2nd column, then add together
  const resultY = x * c1r0 + y * c1r1 + z * c1r2 + w * c1r3;

  // Multiply the point against each part of the 3rd column, then add together
  const resultZ = x * c2r0 + y * c2r1 + z * c2r2 + w * c2r3;

  // Multiply the point against each part of the 4th column, then add together
  const resultW = x * c3r0 + y * c3r1 + z * c3r2 + w * c3r3;

  return [resultX, resultY, resultZ, resultW];
}
```

> [!NOTE]
> Unsere Beispiele auf dieser Seite verwenden Zeilenvektoren, um Punkte darzustellen und Rechtsmultiplikation, um Transformationsmatrizen anzuwenden. Das bedeutet, dass das Obige `point * matrix` ausführt, wobei `point` ein 4x1-Zeilenvektor ist. Wenn Sie Spaltenvektoren und Linksmultiplikation verwenden möchten, müssen Sie die Multiplikationsfunktion entsprechend anpassen und jede unten eingeführte Matrix transponieren.
>
> Zum Beispiel sieht die unten eingeführte [`translationMatrix`](#translationsmatrix) ursprünglich so aus:
>
> ```js-nolint
> [1, 0, 0, 0,
>  0, 1, 0, 0,
>  0, 0, 1, 0,
>  x, y, z, 1]
> ```
>
> Nach der Transposition würde sie so aussehen:
>
> ```js-nolint
> [1, 0, 0, x,
>  0, 1, 0, y,
>  0, 0, 1, z,
>  0, 0, 0, 1]
> ```

Mit der obigen Funktion können wir nun einen Punkt mit der Matrix multiplizieren. Bei Verwendung der Identitätsmatrix sollte ein Punkt zurückgegeben werden, der mit dem Original identisch ist, da ein Punkt (oder eine andere Matrix), multipliziert mit der Identitätsmatrix, immer gleich sich selbst ist:

```js
// sets identityResult to [4,3,2,1]
const identityResult = multiplyMatrixAndPoint(identityMatrix, [4, 3, 2, 1]);
```

Das Zurückgeben desselben Punktes ist nicht sehr nützlich, aber es gibt andere Arten von Matrizen, die nützliche Operationen auf Punkten ausführen können. Die nächsten Abschnitte werden einige dieser Matrizen demonstrieren.

### Multiplikation zweier Matrizen

Zusätzlich zur Multiplikation einer Matrix mit einem Punkt können Sie auch zwei Matrizen miteinander multiplizieren. Die obenstehende Funktion kann dazu wiederverwendet werden:

```js
// matrixB • matrixA
function multiplyMatrices(matrixA, matrixB) {
  // Slice the second matrix up into rows
  const row0 = [matrixB[0], matrixB[1], matrixB[2], matrixB[3]];
  const row1 = [matrixB[4], matrixB[5], matrixB[6], matrixB[7]];
  const row2 = [matrixB[8], matrixB[9], matrixB[10], matrixB[11]];
  const row3 = [matrixB[12], matrixB[13], matrixB[14], matrixB[15]];

  // Multiply each row by matrixA
  const result0 = multiplyMatrixAndPoint(matrixA, row0);
  const result1 = multiplyMatrixAndPoint(matrixA, row1);
  const result2 = multiplyMatrixAndPoint(matrixA, row2);
  const result3 = multiplyMatrixAndPoint(matrixA, row3);

  // Turn the result rows back into a single matrix
  // prettier-ignore
  return [
    result0[0], result0[1], result0[2], result0[3],
    result1[0], result1[1], result1[2], result1[3],
    result2[0], result2[1], result2[2], result2[3],
    result3[0], result3[1], result3[2], result3[3],
  ];
}
```

Schauen wir uns diese Funktion in Aktion an:

```js
const someMatrix = [4, 0, 0, 0, 0, 3, 0, 0, 0, 0, 5, 0, 4, 8, 4, 1];

const identityMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Returns a new array equivalent to someMatrix
const someMatrixResult = multiplyMatrices(identityMatrix, someMatrix);
```

> [!WARNING]
> Diese Matrixfunktionen sind zur Verdeutlichung der Erklärung geschrieben, nicht für Geschwindigkeit oder Speicherverwaltung. Diese Funktionen erstellen viele neue Arrays, was für Echtzeitoperationen aufgrund der Speicherbereinigung besonders kostspielig sein kann. In echtem Produktionscode wäre es am besten, optimierte Funktionen zu verwenden. [glMatrix](https://glmatrix.net/) ist ein Beispiel für eine Bibliothek, die auf Geschwindigkeit und Leistung ausgerichtet ist. Der Fokus in der glMatrix-Bibliothek liegt darin, Zielarrays zu haben, die vor der Aktualisierungsschleife zugeteilt werden.

## Translationsmatrix

Eine **Translationsmatrix** basiert auf der Identitätsmatrix und wird in der 3D-Grafik verwendet, um einen Punkt oder ein Objekt in eine oder mehrere der drei Richtungen (`x`, `y` und/oder `z`) zu verschieben. Der einfachste Weg, über eine Translation nachzudenken, ist wie das Anheben einer Kaffeetasse. Die Kaffeetasse muss aufrecht gehalten und gleich ausgerichtet werden, damit kein Kaffee verschüttet wird. Sie kann in die Luft vom Tisch gehoben und durch die Luft bewegt werden.

Mit einer Translationsmatrix können Sie den Kaffee eigentlich nicht trinken, denn um ihn zu trinken, müssten Sie die Tasse kippen oder drehen können, um den Kaffee in Ihren Mund zu gießen. Wir werden uns später die Art von Matrix ansehen (passend als **[Rotationsmatrix](#rotationsmatrix)** bezeichnet), die Sie dafür verwenden.

```js
const x = 50;
const y = 100;
const z = 0;

const translationMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
```

Platzieren Sie die Abstände entlang der drei Achsen an den entsprechenden Positionen in der Translationsmatrix und multiplizieren Sie sie dann mit dem Punkt oder der Matrix, die Sie durch den 3D-Raum bewegen müssen.

## Manipulation des DOM mit einer Matrix

Eine sehr einfache Möglichkeit, eine Matrix zu verwenden, ist die Verwendung der CSS {{cssxref("transform-function/matrix3d", "matrix3d()")}} {{cssxref("transform")}}. Zuerst richten wir ein einfaches {{htmlelement("div")}} mit etwas Inhalt ein. Der Stil wird nicht gezeigt, aber es ist eine feste Breite und Höhe eingestellt, und es ist auf der Seite zentriert. Das `<div>` hat eine Transition für die Transformation gesetzt, sodass die Matrix animiert wird und leicht zu sehen ist, was getan wird.

```html
<div id="move-me" class="transformable">
  <h2>Move me with a matrix</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</p>
</div>
```

Schließlich werden wir für jedes Beispiel eine 4×4-Matrix erzeugen und dann den Stil des `<div>` aktualisieren, um eine Transformation darauf anzuwenden, die auf `matrix3d` gesetzt ist. Bedenken Sie, dass die Matrix, obwohl sie aus 4 Zeilen und 4 Spalten besteht, in eine einzige Zeile mit 16 Werten zusammengefasst wird. Matrizen werden in JavaScript immer in eindimensionalen Listen gespeichert.

```js
// Create the matrix3d style property from a matrix array
function matrixArrayToCssMatrix(array) {
  return `matrix3d(${array.join(",")})`;
}

// Grab the DOM element
const moveMe = document.getElementById("move-me");

// Returns a result like: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 50, 100, 0, 1);"
const matrix3dRule = matrixArrayToCssMatrix(translationMatrix);

// Set the transform
moveMe.style.transform = matrix3dRule;
```

[Ansehen auf JSFiddle](https://jsfiddle.net/tatumcreative/g24mgw6y/)

![Ein Beispiel für Matrix-Translation](matrix-translation.jpg)

## Skalierungsmatrix

Eine **Skalierungsmatrix** macht etwas größer oder kleiner in einer oder mehreren der drei Dimensionen: Breite, Höhe und Tiefe. In typischen (kartesischen) Koordinaten führt dies zur Streckung oder Kontraktion des Objekts in den entsprechenden Richtungen.

Die Menge der Veränderung, die auf jede der Breiten, Höhen und Tiefen angewendet wird, wird diagonal beginnend in der oberen linken Ecke platziert und arbeitet sich in Richtung der unteren rechten Ecke vor.

```js
const w = 1.5; // width  (x)
const h = 0.7; // height (y)
const d = 1; // depth  (z)

const scaleMatrix = [w, 0, 0, 0, 0, h, 0, 0, 0, 0, d, 0, 0, 0, 0, 1];
```

[Ansehen auf JSFiddle](https://jsfiddle.net/tatumcreative/fndd6e1b/)

![Ein Beispiel für Matrix-Skalierung](matrix-scale.jpg)

## Rotationsmatrix

Eine **Rotationsmatrix** wird verwendet, um einen Punkt oder ein Objekt zu drehen. Rotationsmatrizen sehen etwas komplizierter aus als Skalierungs- und Transformationsmatrizen. Sie verwenden trigonometrische Funktionen, um die Drehung durchzuführen. Während dieser Abschnitt die Schritte nicht bis ins letzte Detail aufschlüsseln wird (lesen Sie [diesen Artikel auf Wolfram MathWorld](https://mathworld.wolfram.com/RotationMatrix.html) für eine detaillierte Erläuterung), nehmen Sie dieses Beispiel zur Veranschaulichung.

Zuerst hier ein Code, der einen Punkt um den Ursprung dreht, ohne Matrizen zu verwenden.

```js
// Manually rotating a point about the origin without matrices
const point = [10, 2];

// Calculate the distance from the origin
const distance = Math.sqrt(point[0] * point[0] + point[1] * point[1]);

// The equivalent of 60 degrees, in radians
const rotationInRadians = Math.PI / 3;

const transformedPoint = [
  Math.cos(rotationInRadians) * distance,
  Math.sin(rotationInRadians) * distance,
];
```

Es ist möglich, diese Art von Schritten in eine Matrix zu codieren und es für jede der `x`, `y` und `z` Dimensionen zu tun. Unten ist die Darstellung einer Drehung gegen den Uhrzeigersinn um die Z-Achse in einem linkshändigen Koordinatensystem:

```js
const sin = Math.sin;
const cos = Math.cos;

// NOTE: There is no perspective in these transformations, so a rotation
//       at this point will only appear to only shrink the div

const a = Math.PI * 0.3; // Rotation amount in radians

// Rotate around Z axis
// prettier-ignore
const rotateZMatrix = [
  cos(a), -sin(a), 0, 0,
  sin(a), cos(a), 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1,
];
```

[Ansehen auf JSFiddle](https://jsfiddle.net/tatumcreative/9vr2dorz/)

![Ein Beispiel für Matrix-Rotation.](matrix-rotation.jpg)

Hier sind eine Reihe von Funktionen, die Rotationsmatrizen für die Drehung um jede der drei Achsen zurückgeben. Ein wichtiger Hinweis ist, dass keine Perspektive angewendet wird, sodass es sich vielleicht noch nicht sehr 3D anfühlt. Die Flachheit entspricht dem, wenn eine Kamera wirklich nah an ein Objekt in der Ferne heranzoomt — das Gefühl der Perspektive verschwindet.

```js
function rotateAroundXAxis(a) {
  // prettier-ignore
  return [
    1, 0, 0, 0,
    0, cos(a), -sin(a), 0,
    0, sin(a), cos(a), 0,
    0, 0, 0, 1,
  ];
}

function rotateAroundYAxis(a) {
  // prettier-ignore
  return [
    cos(a), 0, sin(a), 0,
    0, 1, 0, 0,
    -sin(a), 0, cos(a), 0,
    0, 0, 0, 1,
  ];
}

function rotateAroundZAxis(a) {
  // prettier-ignore
  return [
    cos(a), -sin(a), 0, 0,
    sin(a), cos(a), 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1,
  ];
}
```

[Ansehen auf JSFiddle](https://jsfiddle.net/tatumcreative/tk072doc/)

## Matrixkomposition

Die wahre Stärke von Matrizen liegt in der **Matrixkomposition**. Wenn Matrizen einer bestimmten Klasse miteinander multipliziert werden, behalten sie die Geschichte der Transformationen bei und sind umkehrbar. Das bedeutet, dass, wenn eine Übersetzungs-, Rotations- und Skalierungsmatrix alle zusammen kombiniert werden, wenn die Reihenfolge der Matrizen umgekehrt und erneut angewendet wird, dann werden die ursprünglichen Punkte zurückgegeben.

Die Reihenfolge, in der Matrizen multipliziert werden, ist wichtig. Beim Multiplizieren von Zahlen sind a \* b = c und b \* a = c beide wahr. Zum Beispiel 3 \* 4 = 12 und 4 \* 3 = 12. In der Mathematik würden diese Zahlen als **kommutativ** bezeichnet. Matrizen sind _nicht_ garantiert gleich, wenn die Reihenfolge umgestellt wird, daher sind Matrizen **nicht-kommutativ**.

Eine weitere Kopfnuss ist, dass die Matrixmultiplikation in WebGL und CSS in der umgekehrten Reihenfolge erfolgen muss, in der die Operationen intuitiv geschehen. Beispielsweise würde das Skalieren von etwas um 80%, Verschieben um 200 Pixel nach unten und dann Drehen um den Ursprung 90 Grad in etwa so aussehen wie im folgenden Pseudocode.

```plain
transformation = rotate * translate * scale
```

### Zusammensetzen mehrerer Transformationen

Die Funktion, die wir verwenden werden, um unsere Matrizen zusammenzusetzen, ist `multiplyArrayOfMatrices()`, die Teil der [Utility-Funktionen](https://github.com/gregtatum/mdn-webgl) ist, die oben in diesem Artikel vorgestellt wurden. Sie nimmt ein Array von Matrizen und multipliziert sie miteinander, wobei das Ergebnis zurückgegeben wird. In WebGL-Shader-Code ist dies in die Sprache eingebaut und der `*`-Operator kann verwendet werden. Zusätzlich wird in diesem Beispiel `scale()` und `translate()` verwendet, die Matrizen zurückgeben, wie oben definiert.

```js
const transformMatrix = MDN.multiplyArrayOfMatrices([
  rotateAroundZAxis(Math.PI * 0.5), // Step 3: rotate around 90 degrees
  translate(0, 200, 0), // Step 2: move down 200 pixels
  scale(0.8, 0.8, 0.8), // Step 1: scale down
]);
```

[Ansehen auf JSFiddle](https://jsfiddle.net/tatumcreative/qxxg3yvc/)

![Ein Beispiel für Matrixkomposition](matrix-composition.jpg)

Schließlich ein Spaßschritt, um zu zeigen, wie Matrizen arbeiten, ist die Schritte umzukehren, um die Matrix wieder zur ursprünglichen Identitätsmatrix zu bringen.

```js
const transformMatrix = MDN.multiplyArrayOfMatrices([
  scale(1.25, 1.25, 1.25), // Step 6: scale back up
  translate(0, -200, 0), // Step 5: move back up
  rotateAroundZAxis(-Math.PI * 0.5), // Step 4: rotate back
  rotateAroundZAxis(Math.PI * 0.5), // Step 3: rotate around 90 degrees
  translate(0, 200, 0), // Step 2: move down 200 pixels
  scale(0.8, 0.8, 0.8), // Step 1: scale down
]);
```

## Warum Matrizen wichtig sind

Matrizen sind wichtig, weil sie einen kleinen Satz von Zahlen umfassen, die eine breite Palette von Transformationen im Raum beschreiben können. Sie können leicht in Programmen weitergegeben werden. Verschiedene Koordinatenräume können mit Matrizen beschrieben werden, und eine bestimmte Matrixmultiplikation wird einen Datensatz von einem Koordinatenraum in einen anderen verschieben. Matrizen erinnern effektiv an jeden Teil der vorherigen Transformationen, die verwendet wurden, um sie zu erzeugen.

Für Anwendungen in WebGL ist die Grafikkarte besonders gut darin, eine große Anzahl von Punkten im Raum mit Matrizen zu multiplizieren. Verschiedene Operationen wie das Positionieren von Punkten, das Berechnen von Beleuchtung und das Posieren animierter Charaktere basieren alle auf diesem grundlegenden Werkzeug.
