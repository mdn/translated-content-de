---
title: Matrizenmathematik für das Web
slug: Web/API/WebGL_API/Matrix_math_for_the_web
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{DefaultAPISidebar("WebGL")}}

Matrizen können verwendet werden, um Transformationen von Objekten im Raum darzustellen, und werden für viele wichtige Arten von Berechnungen verwendet, wenn Bilder erstellt und Daten visualisiert werden sollen. Dieser Artikel untersucht, wie Matrizen erstellt werden und wie man sie mit [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) und dem `matrix3d`-Transformationstyp verwendet.

Während dieser Artikel [CSS](/de/docs/Web/CSS) verwendet, um die Erklärungen zu vereinfachen, sind Matrizen ein Kernkonzept, das von vielen verschiedenen Technologien genutzt wird, einschließlich [WebGL](/de/docs/Web/API/WebGL_API), dem [WebXR](/de/docs/Web/API/WebXR_Device_API) (VR und AR) API und [GLSL-Shadern](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders).

## Transformationsmatrizen

Es gibt viele Arten von Matrizen, aber die, die uns interessieren, sind die 3D-Transformationsmatrizen. Diese Matrizen bestehen aus einem Satz von 16 Werten, die in einem 4×4-Raster angeordnet sind. In [JavaScript](/de/docs/Web/JavaScript) ist es einfach, eine Matrix als Array darzustellen.

Beginnen wir mit der Betrachtung der **Einheitsmatrix**. Dies ist eine spezielle Transformationsmatrix, die ähnlich wie die Zahl 1 bei der Skalarmultiplikation funktioniert; genau wie n \* 1 = n ergibt das Multiplizieren jeder Matrix mit der Einheitsmatrix eine resultierende Matrix, deren Werte der ursprünglichen Matrix entsprechen.

Die Einheitsmatrix sieht in JavaScript so aus:

```js
// prettier-ignore
const identityMatrix = [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1,
];
```

Wie sieht das Multiplizieren mit der Einheitsmatrix aus? Das einfachste Beispiel ist, einen einzelnen Punkt mit der Einheitsmatrix zu multiplizieren. Da ein 3D-Punkt nur drei Werte benötigt (`x`, `y` und `z`), und die Transformationsmatrix eine 4×4-Wertmatrix ist, müssen wir dem Punkt eine vierte Dimension hinzufügen. Üblicherweise wird diese Dimension als **Perspektive** bezeichnet und durch den Buchstaben `w` dargestellt. Für eine typische Position wird durch das Setzen von `w` auf 1 die Berechnung ermöglicht.

Nach dem Hinzufügen der `w`-Komponente zu dem Punkt fällt auf, wie ordentlich die Matrix und der Punkt übereinstimmen:

```js-nolint
[1, 0, 0, 0,
 0, 1, 0, 0,
 0, 0, 1, 0,
 0, 0, 0, 1];

[4, 3, 2, 1]; // Point at [x, y, z, w]
```

Die `w`-Komponente hat einige zusätzliche Verwendungen, die außerhalb des Umfangs dieses Artikels liegen. Sehen Sie sich den Artikel [WebGL Model View Projection](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection) an, um zu erfahren, wie dieser nützlich sein kann.

### Multiplikation einer Matrix und eines Punktes

In unserem Beispielcode haben wir eine Funktion definiert, um eine Matrix und einen Punkt zu multiplizieren — `multiplyMatrixAndPoint()`:

```js live-sample___translation_matrix_ex live-sample___scale_matrix_ex live-sample___rotation_matrix_ex live-sample___matrix_composition_ex
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
> Unsere Beispiele auf dieser Seite verwenden Zeilenvektoren zur Darstellung von Punkten und rechtshändige Multiplikation, um Transformationsmatrizen anzuwenden. Das heißt, das obige Beispiel macht `point * matrix`, wobei `point` ein 4x1-Zeilenvektor ist. Wenn Sie Spaltenvektoren und linkshändige Multiplikation verwenden möchten, müssen Sie die Multiplikationsfunktion entsprechend anpassen und jede unten eingeführte Matrix transponieren.
>
> Zum Beispiel sieht die weiter unten eingeführte [`translationMatrix`](#translationsmatrix) ursprünglich so aus:
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

Mit der oben genannten Funktion können wir nun einen Punkt mit der Matrix multiplizieren. Die Verwendung der Einheitsmatrix sollte einen Punkt zurückgeben, der identisch mit dem ursprünglichen ist, da ein Punkt (oder eine andere Matrix), der mit der Einheitsmatrix multipliziert wird, immer gleich sich selbst ist:

```js
// sets identityResult to [4,3,2,1]
const identityResult = multiplyMatrixAndPoint(identityMatrix, [4, 3, 2, 1]);
```

Das Zurückgeben desselben Punktes ist nicht sehr nützlich, aber es gibt andere Arten von Matrizen, die hilfreiche Operationen auf Punkten ausführen können. Die nächsten Abschnitte werden einige dieser Matrizen demonstrieren.

### Multiplikation von zwei Matrizen

Zusätzlich zur Multiplikation einer Matrix und eines Punktes können Sie auch zwei Matrizen zusammen multiplizieren. Die obige Funktion kann in diesem Prozess helfen:

```js live-sample___translation_matrix_ex live-sample___scale_matrix_ex live-sample___rotation_matrix_ex live-sample___matrix_composition_ex
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

function multiplyArrayOfMatrices(matrices) {
  if (matrices.length === 1) {
    return matrices[0];
  }
  return matrices.reduce((result, matrix) => multiplyMatrices(result, matrix));
}
```

Schauen wir uns diese Funktion in Aktion an:

```js
// prettier-ignore
const someMatrix = [
  4, 0, 0, 0,
  0, 3, 0, 0,
  0, 0, 5, 0,
  4, 8, 4, 1,
];

// prettier-ignore
const identityMatrix = [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1,
];

// Returns a new array equivalent to someMatrix
const someMatrixResult = multiplyMatrices(identityMatrix, someMatrix);
```

> [!WARNING]
> Diese Matrixfunktionen sind für die Klarheit der Erklärung und nicht für Geschwindigkeit oder Speichermanagement geschrieben. Diese Funktionen erzeugen viele neue Arrays, was insbesondere bei Echtzeitoperationen aufgrund der Speicherbereinigung teuer sein kann. In echtem Produktionscode wäre es am besten, optimierte Funktionen zu verwenden. [glMatrix](https://glmatrix.net/) ist ein Beispiel für eine Bibliothek, die den Fokus auf Geschwindigkeit und Leistung hat. Der Fokus der glMatrix-Bibliothek liegt darauf, Zielarrays zu haben, die vor der Aktualisierungsschleife zugewiesen werden.

## Translationsmatrix

Eine **Translationsmatrix** basiert auf der Einheitsmatrix und wird in der 3D-Grafik verwendet, um einen Punkt oder ein Objekt in eine oder mehrere der drei Richtungen (`x`, `y` und/oder `z`) zu verschieben. Die einfachste Art, über eine Translation nachzudenken, ist, als ob man eine Kaffeetasse aufhebt. Die Kaffeetasse muss aufrecht und gleich orientiert bleiben, damit kein Kaffee verschüttet wird. Sie kann in die Luft vom Tisch und um die Luft im Raum herum bewegt werden.

Sie können den Kaffee nicht wirklich nur mit einer Translationsmatrix trinken, weil Sie ihn kippen oder die Tasse drehen müssen, um den Kaffee in Ihren Mund zu gießen. Wir werden uns später die Art von Matrix ansehen, die Sie dafür verwenden (schlau als **[Rotationsmatrix](#rotationsmatrix)** bezeichnet).

```js live-sample___translation_matrix_ex live-sample___matrix_composition_ex
function translate(x, y, z) {
  // prettier-ignore
  return [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    x, y, z, 1,
  ];
}
```

Setzen Sie die Abstände entlang der drei Achsen in die entsprechenden Positionen in der Translationsmatrix und multiplizieren Sie sie dann mit dem Punkt oder der Matrix, die Sie durch den 3D-Raum bewegen müssen.

## Manipulation des DOMs mit einer Matrix

Eine wirklich einfache Möglichkeit, eine Matrix zu verwenden, besteht darin, die CSS-Funktion {{cssxref("transform-function/matrix3d","matrix3d()")}} {{cssxref("transform")}} zu verwenden. Zunächst richten wir ein einfaches {{htmlelement("div")}} mit etwas Inhalt ein. Der Stil wird nicht angezeigt, aber es ist auf eine feste Breite und Höhe eingestellt und auf der Seite zentriert. Das `<div>` hat eine Transition für den Transformationsstil, sodass die Matrix animiert wird, was es einfach macht zu sehen, was gemacht wird.

```html live-sample___translation_matrix_ex live-sample___scale_matrix_ex live-sample___rotation_matrix_ex live-sample___matrix_composition_ex
<div class="transformable ghost">
  <h2>Move me with a matrix</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>

<div id="move-me" class="transformable">
  <h2>Move me with a matrix</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>
```

```css hidden live-sample___translation_matrix_ex live-sample___scale_matrix_ex live-sample___rotation_matrix_ex live-sample___matrix_composition_ex
.transformable {
  width: 200px;
  height: 200px;
  overflow-y: scroll;
  background: #44cccc;
  padding: 10px;
  border: 2px solid #333333;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  margin-top: -100px;
  transition: transform 500ms;
}
.transformable h2 {
  margin-top: 0;
}
.ghost {
  opacity: 0.1;
  pointer-events: none;
}
```

Schließlich erzeugen wir für jedes Beispiel eine 4×4-Matrix und aktualisieren den Stil des `<div>`, um eine darauf angewendete Transformation mit `matrix3d` festzulegen. Beachten Sie, dass obwohl die Matrix aus 4 Zeilen und 4 Spalten besteht, sie in eine einzige Zeile mit 16 Werten zusammengefasst wird. Matrizen werden in JavaScript immer in eindimensionalen Listen gespeichert.

```js live-sample___translation_matrix_ex live-sample___scale_matrix_ex live-sample___rotation_matrix_ex live-sample___matrix_composition_ex
// Create the matrix3d style property from a matrix array
function matrixArrayToCssMatrix(array) {
  return `matrix3d(${array.join(",")})`;
}

const moveMe = document.getElementById("move-me");

function setTransform(matrix) {
  moveMe.style.transform = matrixArrayToCssMatrix(matrix);
}
```

Für ein Beispiel verwenden wir die `translate()` Funktion aus dem Abschnitt über die [Translationsmatrix](#translationsmatrix), um das `<div>` um 100 Pixel nach unten und um 50 Pixel nach rechts zu verschieben. Der `z`-Wert wird auf 0 gesetzt, sodass es sich nicht in der dritten Dimension bewegt.

```js live-sample___translation_matrix_ex
const translationMatrix = translate(50, 100, 0);
setTransform(translationMatrix);
```

{{EmbedLiveSample("translation_matrix_ex", "", 350)}}

## Skalierungs-Matrix

Eine **Skalierungs-Matrix** vergrößert oder verkleinert etwas in einer oder mehreren der drei Dimensionen: Breite, Höhe und Tiefe. In typischen (kartesischen) Koordinaten führt dies zum Strecken oder Zusammenziehen des Objekts in den entsprechenden Richtungen.

Der Änderungsbetrag, der auf jede der Breiten-, Höhen- und Tiefenrichtungen angewendet werden soll, wird diagonal beginnend in der oberen linken Ecke platziert und in Richtung der unteren rechten Ecke fortgesetzt.

```js live-sample___scale_matrix_ex live-sample___matrix_composition_ex
function scale(x, y, z) {
  // prettier-ignore
  return [
    x, 0, 0, 0,
    0, y, 0, 0,
    0, 0, z, 0,
    0, 0, 0, 1,
  ];
}
```

```js live-sample___scale_matrix_ex
const scaleMatrix = scale(1.5, 0.7, 1);
setTransform(scaleMatrix);
```

{{EmbedLiveSample("scale_matrix_ex", "", 350)}}

## Rotationsmatrix

Eine **Rotationsmatrix** wird verwendet, um einen Punkt oder ein Objekt zu drehen. Rotationsmatrizen sehen ein wenig komplizierter aus als Skalierungs- und Transformationsmatrizen. Sie verwenden trigonometrische Funktionen, um die Drehung auszuführen. Während dieser Abschnitt die Schritte nicht bis ins letzte Detail aufteilt (sehen Sie sich [diesen Artikel bei Wolfram MathWorld](https://mathworld.wolfram.com/RotationMatrix.html) für eine umfassende Erklärung an), nehmen wir dieses Beispiel zur Veranschaulichung.

Hier ist zunächst ein Code, der einen Punkt um den Ursprung dreht, ohne Matrizen zu verwenden.

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

Es ist möglich, diese Art von Schritten in eine Matrix zu codieren und es für jede der `x`-, `y`- und `z`-Dimensionen zu tun. Hier ist eine Reihe von Funktionen, die Rotationsmatrizen für das Drehen um jede der drei Achsen zurückgeben. Ein großer Hinweis: Es gibt keine angewandte Perspektive, sodass es sich möglicherweise nicht sehr 3D anfühlt. Die Flachheit entspricht dem, wenn eine Kamera wirklich nah an ein Objekt in der Entfernung zoomt — das Gefühl der Perspektive verschwindet.

```js live-sample___rotation_matrix_ex live-sample___matrix_composition_ex
const sin = Math.sin;
const cos = Math.cos;

function rotateX(a) {
  // prettier-ignore
  return [
    1, 0, 0, 0,
    0, cos(a), -sin(a), 0,
    0, sin(a), cos(a), 0,
    0, 0, 0, 1,
  ];
}

function rotateY(a) {
  // prettier-ignore
  return [
    cos(a), 0, sin(a), 0,
    0, 1, 0, 0,
    -sin(a), 0, cos(a), 0,
    0, 0, 0, 1,
  ];
}

function rotateZ(a) {
  // prettier-ignore
  return [
    cos(a), -sin(a), 0, 0,
    sin(a), cos(a), 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1,
  ];
}
```

```js live-sample___rotation_matrix_ex
const rotateZMatrix = rotateZ(Math.PI * 0.3);
setTransform(rotateZMatrix);
```

{{EmbedLiveSample("rotation_matrix_ex", "", 350)}}

## Zusammensetzung von Matrizen

Die wahre Kraft der Matrizen liegt in der **Matrixzusammensetzung**. Wenn Matrizen einer bestimmten Klasse zusammen multipliziert werden, bewahren sie die Historie der Transformationen auf und sind umkehrbar. Das bedeutet, dass wenn eine Übersetzungs-, Rotations- und Skalierungsmatrix alle zusammen kombiniert werden, die ursprünglichen Punkte zurückgegeben werden, wenn die Ordnung der Matrizen umgekehrt und erneut angewendet wird.

Die Reihenfolge, in der Matrizen multipliziert werden, ist von Bedeutung. Beim Multiplizieren von Zahlen ist a \* b = c, und b \* a = c immer wahr. Zum Beispiel 3 \* 4 = 12, und 4 \* 3 = 12. In der Mathematik würden diese Zahlen als **kommutativ** beschrieben. Matrizen sind _nicht_ garantiert gleich, wenn die Reihenfolge geändert wird, also sind Matrizen **nicht-kommutativ**.

Ein weiterer Denkanstoß ist, dass Matrixmultiplikation in WebGL und CSS in der umgekehrten Reihenfolge erfolgen muss, in der die Operationen intuitiv stattfinden. Zum Beispiel, um etwas auf 80% zu verkleinern, es um 200 Pixel nach unten zu verschieben und dann um den Ursprung um 90 Grad zu drehen, könnte es im Quellcode so aussehen:

```plain
transformation = rotate * translate * scale
```

### Zusammensetzen mehrerer Transformationen

Die Funktion, die wir zum Zusammensetzen unserer Matrizen verwenden werden, ist `multiplyArrayOfMatrices()`, die Teil des Satzes von Dienstprogrammfunktionen ist, die im oberen Teil dieses Artikels eingeführt wurden. Sie nimmt ein Array von Matrizen und multipliziert sie zusammen und gibt das Ergebnis zurück. In WebGL-Shader-Code ist dies in die Sprache eingebaut und der `*` Operator kann verwendet werden.

```js live-sample___matrix_composition_ex
const transformMatrix = multiplyArrayOfMatrices([
  rotateZ(Math.PI * 0.5), // Step 3: rotate around 90 degrees
  translate(0, 200, 0), // Step 2: move down 200 pixels
  scale(0.8, 0.8, 0.8), // Step 1: scale down
]);

setTransform(transformMatrix);
```

{{EmbedLiveSample("matrix_composition_ex", "", 350)}}

Schließlich ein spaßiger Schritt, um zu zeigen, wie Matrizen funktionieren, besteht darin, die Schritte umzukehren, um die Matrix zurück zur ursprünglichen Einheitsmatrix zu bringen.

```js
const transformMatrix = multiplyArrayOfMatrices([
  scale(1.25, 1.25, 1.25), // Step 6: scale back up
  translate(0, -200, 0), // Step 5: move back up
  rotateZ(-Math.PI * 0.5), // Step 4: rotate back
  rotateZ(Math.PI * 0.5), // Step 3: rotate around 90 degrees
  translate(0, 200, 0), // Step 2: move down 200 pixels
  scale(0.8, 0.8, 0.8), // Step 1: scale down
]);
```

## Warum Matrizen wichtig sind

Matrizen sind wichtig, weil sie aus einer kleinen Anzahl von Zahlen bestehen, die eine breite Palette von Transformationen im Raum beschreiben können. Sie können leicht in Programmen geteilt werden. Verschiedene Koordinatenräume können mit Matrizen beschrieben werden, und durch einige Matrixmultiplikationen kann ein Satz von Daten von einem Koordinatenraum in einen anderen bewegt werden. Matrizen behalten effektiv jeden Teil der vorherigen Transformationen, die verwendet wurden, um sie zu erzeugen.

Bei der Verwendung in WebGL ist die Grafikkarte besonders gut darin, eine große Anzahl von Punkten im Raum mit Matrizen zu multiplizieren. Verschiedene Operationen wie das Positionieren von Punkten, Berechnen von Beleuchtung und das Posen animierter Charaktere beruhen alle auf diesem grundlegenden Werkzeug.
