---
title: Matrix-Mathematik für das Web
slug: Web/API/WebGL_API/Matrix_math_for_the_web
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("WebGL")}}

Matrizen können verwendet werden, um Transformationen von Objekten im Raum darzustellen. Sie werden für viele wichtige Berechnungen eingesetzt, wenn Bilder erstellt und Daten im Web visualisiert werden. Dieser Artikel untersucht, wie Matrizen erstellt werden und wie man sie mit [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using) und dem `matrix3d`-Transformationstyp verwendet.

Auch wenn dieser Artikel [CSS](/de/docs/Web/CSS) verwendet, um Erklärungen zu vereinfachen, sind Matrizen ein grundlegendes Konzept, das in vielen verschiedenen Technologien genutzt wird, darunter [WebGL](/de/docs/Web/API/WebGL_API), die [WebXR](/de/docs/Web/API/WebXR_Device_API) (VR und AR) API und [GLSL-Shader](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders).

## Transformationsmatrizen

Es gibt viele Arten von Matrizen, aber wir interessieren uns für die 3D-Transformationsmatrizen. Diese Matrizen bestehen aus einem Satz von 16 Werten, die in einem 4×4-Raster angeordnet sind. In [JavaScript](/de/docs/Web/JavaScript) lässt sich eine Matrix leicht als Array darstellen.

Beginnen wir mit der **Identitätsmatrix**. Dies ist eine spezielle Transformationsmatrix, die ähnlich wie die Zahl 1 bei der Skalarkoordination funktioniert; wie n \* 1 = n, ergibt das Multiplizieren einer beliebigen Matrix mit der Identitätsmatrix eine resultierende Matrix, deren Werte der ursprünglichen Matrix entsprechen.

Die Identitätsmatrix sieht in JavaScript so aus:

```js
// prettier-ignore
const identityMatrix = [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1,
];
```

Wie sieht das Multiplizieren mit der Identitätsmatrix aus? Das einfachste Beispiel ist das Multiplizieren eines einzelnen Punktes mit der Identitätsmatrix. Da ein 3D-Punkt nur drei Werte benötigt (`x`, `y` und `z`), und die Transformationsmatrix eine 4×4-Wertematrix ist, müssen wir dem Punkt eine vierte Dimension hinzufügen. Diese Dimension wird konventionell als **Perspektive** bezeichnet und durch den Buchstaben `w` dargestellt. Für eine typische Position wird `w` auf 1 gesetzt, damit die Mathematik funktioniert.

Nachdem Sie die `w`-Komponente zum Punkt hinzugefügt haben, bemerken Sie, wie ordentlich die Matrix und der Punkt übereinstimmen:

```js-nolint
[1, 0, 0, 0,
 0, 1, 0, 0,
 0, 0, 1, 0,
 0, 0, 0, 1];

[4, 3, 2, 1]; // Point at [x, y, z, w]
```

Die `w`-Komponente hat einige zusätzliche Verwendungen, die außerhalb des Umfangs dieses Artikels liegen. Schauen Sie sich den Artikel über [WebGL Model View Projection](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection) an, um zu sehen, wie sie nützlich ist.

### Multiplikation einer Matrix mit einem Punkt

In unserem Beispielcode haben wir eine Funktion definiert, um eine Matrix mit einem Punkt zu multiplizieren — `multiplyMatrixAndPoint()`:

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
> Unsere Beispiele auf dieser Seite verwenden Zeilenvektoren, um Punkte darzustellen, und Recht-Multiplikation, um Transformationsmatrizen anzuwenden. Das bedeutet, dass oben `point * matrix` ausgeführt wird, wobei `point` ein 4x1-Zeilenvektor ist. Wenn Sie Spaltenvektoren und Linksmultiplikation verwenden möchten, müssen Sie die Multiplikationsfunktion entsprechend anpassen und jede unten eingeführte Matrix transponieren.
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

Mit der oben genannten Funktion können wir jetzt einen Punkt mit der Matrix multiplizieren. Bei Verwendung der Identitätsmatrix sollte ein Punkt identisch zum Original zurückgegeben werden, da ein Punkt (oder eine andere Matrix), multipliziert mit der Identitätsmatrix, immer gleich sich selbst ist:

```js
// sets identityResult to [4,3,2,1]
const identityResult = multiplyMatrixAndPoint(identityMatrix, [4, 3, 2, 1]);
```

Das Zurückgeben desselben Punktes ist nicht sehr nützlich, aber es gibt andere Arten von Matrizen, die nützliche Operationen auf Punkten durchführen können. Die nächsten Abschnitte demonstrieren einige dieser Matrizen.

### Multiplikation von zwei Matrizen

Zusätzlich zur Multiplikation einer Matrix mit einem Punkt können Sie auch zwei Matrizen miteinander multiplizieren. Die oben genannte Funktion kann bei diesem Vorgang helfen:

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

Lassen Sie uns diese Funktion in Aktion betrachten:

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
> Diese Matrixfunktionen sind für die Klarheit der Erklärung geschrieben, nicht für Geschwindigkeit oder Speicherverwaltung. Diese Funktionen erstellen viele neue Arrays, was für Echtzeitoperationen aufgrund der Garbage Collection besonders teuer sein kann. In echter Produktionscode wäre es am besten, optimierte Funktionen zu verwenden. [glMatrix](https://glmatrix.net/) ist ein Beispiel für eine Bibliothek, die sich auf Geschwindigkeit und Leistung konzentriert. Der Fokus in der glMatrix-Bibliothek liegt darauf, Ziel-Arrays zu haben, die vor der Aktualisierungsschleife zugewiesen werden.

## Translationsmatrix

Eine **Translationsmatrix** basiert auf der Identitätsmatrix und wird in 3D-Grafiken verwendet, um einen Punkt oder ein Objekt in eine oder mehrere der drei Richtungen (`x`, `y` und/oder `z`) zu verschieben. Der einfachste Weg, sich eine Translation vorzustellen, ist, eine Kaffeetasse aufzunehmen. Die Kaffeetasse muss aufrecht gehalten und gleich ausgerichtet bleiben, damit kein Kaffee verschüttet wird. Sie kann in die Luft gehoben und im Raum bewegt werden.

Tatsächlich können Sie den Kaffee nicht nur mit einer Translationsmatrix trinken, da Sie die Tasse kippen oder drehen müssen, um den Kaffee in den Mund zu gießen. Wir werden später auf den Matrizen-Typ eingehen, der dies ermöglicht (clevererweise eine **[Rotationsmatrix](#rotationsmatrix)** genannt).

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

Platzieren Sie die Entfernungen entlang der drei Achsen in den entsprechenden Positionen der Translationsmatrix, dann multiplizieren Sie sie mit dem Punkt oder der Matrix, die Sie durch den 3D-Raum bewegen müssen.

## Manipulation des DOM mit einer Matrix

Ein wirklich einfacher Weg, eine Matrix zu verwenden, besteht darin, die CSS-Funktion {{cssxref("transform-function/matrix3d","matrix3d()")}} {{cssxref("transform")}} zu verwenden. Zuerst richten wir ein einfaches {{htmlelement("div")}} mit etwas Inhalt ein. Der Stil wird nicht angezeigt, aber es ist auf eine feste Breite und Höhe eingerichtet und in der Mitte der Seite zentriert. Das `<div>` hat einen Übergang für die Transformation gesetzt, sodass die Matrix animiert wird und leicht zu sehen ist, was getan wird.

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

Schließlich werden wir für jedes Beispiel eine 4×4-Matrix erzeugen und dann den Stil des `<div>` aktualisieren, damit eine Transformation darauf angewendet wird, die auf `matrix3d` gesetzt ist. Bedenken Sie, dass obwohl die Matrix aus 4 Zeilen und 4 Spalten besteht, sie in eine einzelne Zeile von 16 Werten zusammenbricht. Matrizen werden in JavaScript immer als eindimensionale Listen gespeichert.

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

Bei einem Beispiel verwenden wir die `translate()`-Funktion aus dem Abschnitt [Translationsmatrix](#translationsmatrix), um das `<div>` um 100 Pixel nach unten und 50 Pixel nach rechts zu bewegen. Der `z`-Wert ist auf 0 gesetzt, sodass es sich nicht in der dritten Dimension bewegt.

```js live-sample___translation_matrix_ex
const translationMatrix = translate(50, 100, 0);
setTransform(translationMatrix);
```

{{EmbedLiveSample("translation_matrix_ex", "", 350)}}

## Skalierungsmatrix

Eine **Skalierungsmatrix** vergrößert oder verkleinert etwas in einer oder mehreren der drei Dimensionen: Breite, Höhe und Tiefe. In typischen (kartesischen) Koordinaten führt dies zum Strecken oder Zusammenziehen des Objekts in den entsprechenden Richtungen.

Das Ausmaß der Änderung, die auf jede der Breite, Höhe und Tiefe angewendet werden soll, wird diagonal, beginnend bei der oberen linken Ecke, und geht Richtung rechter unterer Ecke eingetragen.

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

Eine **Rotationsmatrix** wird verwendet, um einen Punkt oder ein Objekt zu drehen. Rotationsmatrizen sehen etwas komplizierter aus als Skalierungs- und Translationsmatrizen. Sie verwenden trigonometrische Funktionen, um die Drehung durchzuführen. Während dieser Abschnitt die Schritte nicht bis ins letzte Detail aufschlüsseln wird (sehen Sie sich [diesen Artikel auf Wolfram MathWorld](https://mathworld.wolfram.com/RotationMatrix.html) dafür an), nehmen Sie dieses Beispiel zur Veranschaulichung.

Erstens, hier ist der Code, der einen Punkt um den Ursprung dreht, ohne Matrizen zu verwenden.

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

Es ist möglich, diese Art von Schritten in eine Matrix zu kodieren und sie für jede der `x`, `y` und `z` Dimensionen durchzuführen. Hier ist eine Reihe von Funktionen, die Rotationsmatrizen zurückgeben, um um jede der drei Achsen zu rotieren. Ein wichtiger Hinweis: Es wird keine Perspektive angewandt, sodass es sich möglicherweise noch nicht sehr 3D anfühlt. Die Flachheit entspricht, wenn eine Kamera wirklich nah an ein entferntes Objekt heranzoomt — der Sinn für Perspektive verschwindet.

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

## Matrixkomposition

Die wahre Stärke von Matrizen liegt in der **Matrixkomposition**. Wenn Matrizen einer bestimmten Klasse zusammen multipliziert werden, bewahren sie die Historie der Transformationen und sind umkehrbar. Das bedeutet, dass, wenn eine Translation, Rotation und Skalierungsmatrix alle zusammengefügt werden, wenn die Reihenfolge der Matrizen umgekehrt und erneut angewandt wird, dann die ursprünglichen Punkte zurückgegeben werden.

Die Reihenfolge, in der Matrizen multipliziert werden, ist wichtig. Beim Multiplizieren von Zahlen gilt a \* b = c und b \* a = c gleichermaßen. Zum Beispiel 3 \* 4 = 12 und 4 \* 3 = 12. In der Mathematik würden diese Zahlen als **kommutativ** beschrieben. Matrizen sind _nicht_ garantiert gleich, wenn die Reihenfolge vertauscht wird, sodass Matrizen **nicht kommutativ** sind.

Ein weiteres Gedankenspiel ist, dass Matrixmultiplikation in WebGL und CSS in der umgekehrten Reihenfolge stattfinden muss, in der die Operationen intuitiv erfolgen. Zum Beispiel würde das Skalieren eines Objekts um 80%, es um 200 Pixel nach unten verschieben und dann um 90 Grad um den Ursprung drehen etwa wie folgt in Pseudocode aussehen.

```plain
transformation = rotate * translate * scale
```

### Mehrere Transformationen zusammensetzen

Die Funktion, die wir zur Komposition unserer Matrizen verwenden werden, ist `multiplyArrayOfMatrices()`, die Teil der am Anfang dieses Artikels eingeführten Dienstprogrammfunktionen ist. Sie nimmt ein Array von Matrizen und multipliziert sie miteinander, wobei das Ergebnis zurückgegeben wird. In WebGL-Shader-Code ist dies in die Sprache eingebaut und der `*`-Operator kann verwendet werden.

```js live-sample___matrix_composition_ex
const transformMatrix = multiplyArrayOfMatrices([
  rotateZ(Math.PI * 0.5), // Step 3: rotate around 90 degrees
  translate(0, 200, 0), // Step 2: move down 200 pixels
  scale(0.8, 0.8, 0.8), // Step 1: scale down
]);

setTransform(transformMatrix);
```

{{EmbedLiveSample("matrix_composition_ex", "", 350)}}

Schließlich ist ein unterhaltsamer Schritt, um zu zeigen, wie Matrizen funktionieren, die Schritte umzukehren, um die Matrix wieder zur ursprünglichen Identitätsmatrix zurückzubringen.

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

Matrizen sind wichtig, weil sie eine kleine Menge an Zahlen umfassen, die eine breite Palette von Transformationen im Raum beschreiben können. Sie können leicht in Programmen ausgetauscht werden. Verschiedene Koordinatenräume können mit Matrizen beschrieben werden, und einige Matrixmultiplikationen verschieben einen Datensatz von einem Koordinatenraum in einen anderen Koordinatenraum. Matrizen erinnern sich effektiv an jeden Teil der vorherigen Transformationen, die verwendet wurden, um sie zu erzeugen.

Für den Einsatz in WebGL ist die Grafikkarte besonders gut darin, eine große Anzahl von Punkten im Raum mit Matrizen zu multiplizieren. Verschiedene Operationen wie das Positionieren von Punkten, das Berechnen von Lichtverhältnissen und das Bewegen animierter Charaktere basieren auf diesem grundlegenden Werkzeug.
