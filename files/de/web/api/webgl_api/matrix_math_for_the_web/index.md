---
title: Matrixrechnung für das Web
slug: Web/API/WebGL_API/Matrix_math_for_the_web
l10n:
  sourceCommit: 99462a3bd6493a9ca53947b2ae2761003fd5d49f
---

{{DefaultAPISidebar("WebGL")}}

Matrizen können verwendet werden, um Transformationen von Objekten im Raum darzustellen und werden für viele wichtige Berechnungen beim Erstellen von Bildern und Visualisieren von Daten im Web genutzt. Dieser Artikel untersucht, wie Matrizen erstellt werden und wie sie mit [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using) und dem `matrix3d`-Transformationstyp verwendet werden.

Auch wenn dieser Artikel [CSS](/de/docs/Web/CSS) verwendet, um Erklärungen zu vereinfachen, sind Matrizen ein zentrales Konzept, das von vielen verschiedenen Technologien genutzt wird, einschließlich [WebGL](/de/docs/Web/API/WebGL_API), der [WebXR](/de/docs/Web/API/WebXR_Device_API) (VR und AR) API und [GLSL-Shader](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders).

## Transformationsmatrizen

Es gibt viele Arten von Matrizen, aber die, die uns interessieren, sind die 3D-Transformationsmatrizen. Diese Matrizen bestehen aus einer Gruppe von 16 Werten, angeordnet in einem 4×4-Raster. In [JavaScript](/de/docs/Web/JavaScript) ist es einfach, eine Matrix als Array darzustellen.

Beginnen wir mit der Betrachtung der **Identitätsmatrix**. Dies ist eine spezielle Transformationsmatrix, die ähnlich wie die Zahl 1 bei der Skalarmultiplikation funktioniert; genauso wie n \* 1 = n, liefert das Multiplizieren jeder Matrix mit der Identitätsmatrix eine Ergebnis-Matrix, deren Werte mit der ursprünglichen Matrix übereinstimmen.

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

Wie sieht das Multiplizieren mit der Identitätsmatrix aus? Das einfachste Beispiel ist, einen einzelnen Punkt mit der Identitätsmatrix zu multiplizieren. Da ein 3D-Punkt nur drei Werte benötigt (`x`, `y` und `z`), und die Transformationsmatrix ein 4×4-Wert-Matrix ist, müssen wir dem Punkt eine vierte Dimension hinzufügen. Diese Dimension wird konventionell als **Perspektive** bezeichnet und durch den Buchstaben `w` dargestellt. Bei einer typischen Position wird das Setzen von `w` auf 1 die Mathematik zum Funktionieren bringen.

Nachdem die `w`-Komponente zum Punkt hinzugefügt wurde, sehen Sie, wie ordentlich die Matrix und der Punkt ausgerichtet sind:

```js-nolint
[1, 0, 0, 0,
 0, 1, 0, 0,
 0, 0, 1, 0,
 0, 0, 0, 1];

[4, 3, 2, 1]; // Point at [x, y, z, w]
```

Die `w`-Komponente hat einige zusätzliche Anwendungen, die außerhalb des Rahmens dieses Artikels liegen. Schauen Sie sich den Artikel über [WebGL Modellansicht Projektion](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection) an, um zu sehen, wie nützlich sie sein kann.

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
> Unsere Beispiele auf dieser Seite verwenden Zeilenvektoren, um Punkte darzustellen, und Rechtsmultiplikation, um Transformationsmatrizen anzuwenden. Das heißt, der obige Code führt `point * matrix` aus, wobei `point` ein 4x1-Zeilenvektor ist. Wenn Sie Spaltenvektoren und Linksmultiplikation verwenden möchten, müssen Sie die Multiplikationsfunktion entsprechend anpassen und jede unten eingeführte Matrix transponieren.
>
> Beispielsweise sieht die unten eingeführte [`translationMatrix`](#translationsmatrix) ursprünglich wie folgt aus:
>
> ```js-nolint
> [1, 0, 0, 0,
>  0, 1, 0, 0,
>  0, 0, 1, 0,
>  x, y, z, 1]
> ```
>
> Nach der Transposition sieht sie folgendermaßen aus:
>
> ```js-nolint
> [1, 0, 0, x,
>  0, 1, 0, y,
>  0, 0, 1, z,
>  0, 0, 0, 1]
> ```

Jetzt können wir mit der obigen Funktion einen Punkt mit der Matrix multiplizieren. Bei Verwendung der Identitätsmatrix sollte ein Punkt zurückgegeben werden, der mit dem Original identisch ist, da ein Punkt (oder eine andere Matrix), multipliziert mit der Identitätsmatrix, immer gleich sich selbst ist:

```js
// sets identityResult to [4,3,2,1]
const identityResult = multiplyMatrixAndPoint(identityMatrix, [4, 3, 2, 1]);
```

Dasselbe Ergebnis zurückzugeben ist nicht sehr nützlich, aber es gibt andere Arten von Matrizen, die hilfreiche Operationen auf Punkte ausführen können. Die nächsten Abschnitte werden einige dieser Matrizen demonstrieren.

### Multiplikation von zwei Matrizen

Neben der Multiplikation einer Matrix und eines Punktes zusammen können Sie auch zwei Matrizen miteinander multiplizieren. Die Funktion von oben kann genutzt werden, um diesen Prozess zu unterstützen:

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
> Diese Matrixfunktionen sind aus Gründen der Erklärbarkeit geschrieben, nicht für Geschwindigkeit oder Speicherverwaltung. Diese Funktionen erstellen viele neue Arrays, was in Echtzeitoperationen aufgrund der Speicherbereinigung besonders teuer sein kann. In echtem Produktionscode wäre es am besten, optimierte Funktionen zu verwenden. [glMatrix](https://glmatrix.net/) ist ein Beispiel für eine Bibliothek, die den Fokus auf Geschwindigkeit und Leistung legt. Der Schwerpunkt in der glMatrix-Bibliothek liegt darauf, Zielarrays zu haben, die vor der Update-Schleife allokiert werden.

## Translationsmatrix

Eine **Translationsmatrix** basiert auf der Identitätsmatrix und wird in 3D-Grafiken verwendet, um einen Punkt oder ein Objekt in eine oder mehrere der drei Richtungen (`x`, `y` und/oder `z`) zu bewegen. Die einfachste Art, eine Translation zu denken, ist wie das Aufnehmen einer Kaffeetasse. Die Kaffeetasse muss aufrecht gehalten und gleich orientiert werden, damit kein Kaffee verschüttet wird. Sie kann in die Luft gehoben und im Raum bewegt werden.

Man kann den Kaffee mit nur einer Translationsmatrix nicht wirklich trinken, denn um ihn zu trinken, muss man die Tasse kippen oder drehen können, um den Kaffee in den Mund zu gießen. Wir werden später den Typ Matrix betrachten (schlau genannt **[Rotationsmatrix](#rotationsmatrix)**), den Sie dafür verwenden.

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

Setzen Sie die Distanzen entlang der drei Achsen in die entsprechenden Positionen der Translationsmatrix und multiplizieren Sie sie dann mit dem Punkt oder der Matrix, die Sie durch den 3D-Raum bewegen müssen.

## Manipulation des DOM mit einer Matrix

Ein wirklich einfacher Weg, um eine Matrix zu verwenden, ist die Verwendung von CSS {{cssxref("transform-function/matrix3d","matrix3d()")}} {{cssxref("transform")}}. Zuerst richten wir ein einfaches {{htmlelement("div")}} mit etwas Inhalt ein. Der Stil wird nicht gezeigt, aber es ist auf eine feste Breite und Höhe eingestellt und ist zentriert auf der Seite. Das `<div>` hat eine Transition für die Transformation gesetzt, sodass die Matrix animiert wird, was es einfach macht, zu sehen, was getan wird.

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

Schließlich werden wir für jedes Beispiel eine 4×4-Matrix erzeugen und dann den Stil des `<div>` aktualisieren, um eine Transformation darauf anzuwenden, die auf eine `matrix3d` gesetzt ist. Beachten Sie, dass die Matrix zwar aus 4 Reihen und 4 Spalten besteht, aber zu einer einzeiligen Folge von 16 Werten zusammengeklappt wird. Matrizen werden in JavaScript immer in eindimensionalen Listen gespeichert.

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

In einem Beispiel verwenden wir die `translate()`-Funktion aus dem [Translationsmatrix](#translationsmatrix)-Abschnitt oben, um das `<div>` um 100 Pixel nach unten und um 50 Pixel nach rechts zu bewegen. Der `z`-Wert ist auf 0 gesetzt, sodass es sich nicht in der dritten Dimension bewegt.

```js live-sample___translation_matrix_ex
const translationMatrix = translate(50, 100, 0);
setTransform(translationMatrix);
```

{{EmbedLiveSample("translation_matrix_ex", "", 350)}}

## Skalierungsmatrix

Eine **Skalierungsmatrix** macht etwas größer oder kleiner in einer oder mehreren der drei Dimensionen: Breite, Höhe und Tiefe. In typischen (kartesischen) Koordinaten führt dies zu einer Streckung oder Kontraktion des Objekts in den entsprechenden Richtungen.

Die Menge der Änderung, die auf jede der Breite, Höhe und Tiefe angewendet wird, wird diagonal angeordnet, beginnend in der oberen linken Ecke und in Richtung der unteren rechten.

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

Eine **Rotationsmatrix** wird verwendet, um einen Punkt oder ein Objekt zu drehen. Rotationsmatrizen sehen ein wenig komplizierter aus als Skalierungs- und Transformationsmatrizen. Sie verwenden trigonometrische Funktionen, um die Drehung auszuführen. Auch wenn dieser Abschnitt die Schritte nicht bis ins kleinste Detail aufschlüsseln wird (sehen Sie sich [diesen Artikel auf Wolfram MathWorld](https://mathworld.wolfram.com/RotationMatrix.html) dafür an), betrachten Sie dieses Beispiel zur Illustration.

Zuerst hier ein Code, der einen Punkt um den Ursprung dreht, ohne Matrizen zu verwenden.

```js
// Manually rotating a point about the origin without matrices
const point = [10, 2];

// Calculate the angle from the positive x-axis, counterclockwise, in radians
const angleInRadians = Math.atan2(point[1], point[0]);

// Calculate the distance from the origin
const distance = Math.sqrt(point[0] * point[0] + point[1] * point[1]);

// The equivalent of 60 degrees, in radians
const rotationInRadians = Math.PI / 3;

const transformedPoint = [
  Math.cos(angleInRadians + rotationInRadians) * distance,
  Math.sin(angleInRadians + rotationInRadians) * distance,
];
```

Es ist möglich, diese Art von Schritten in eine Matrix zu kodieren und sie für jede der `x`, `y` und `z` Dimensionen zu tun. Hier sind eine Reihe von Funktionen, die Rotationsmatrizen zurückgeben, um um jede der drei Achsen zu drehen. Ein großer Hinweis ist, dass keine Perspektive angewendet wird, sodass es sich möglicherweise noch nicht sehr 3D anfühlt. Die Flachheit ist gleichbedeutend mit dem, wenn eine Kamera wirklich nah an ein Objekt in der Ferne heranzoomt — der Sinn für Perspektive verschwindet.

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

## Matrixzusammensetzung

Die eigentliche Stärke von Matrizen ergibt sich aus der **Matrixzusammensetzung**. Wenn Matrizen einer bestimmten Klasse miteinander multipliziert werden, bewahren sie die Geschichte der Transformationen und sind umkehrbar. Das bedeutet, wenn eine Translations-, Rotations- und Skalierungsmatrix alle zusammen kombiniert werden, wenn die Reihenfolge der Matrizen umgekehrt und erneut angewendet wird, dann werden die Originalpunkte zurückgegeben.

Die Reihenfolge, in der Matrizen multipliziert werden, ist bedeutend. Beim Multiplizieren von Zahlen ist a \* b = c, und b \* a = c, beide wahr. Beispiel: 3 \* 4 = 12 und 4 \* 3 = 12. In der Mathematik würden diese Zahlen als **kommutativ** beschrieben. Matrizen _sind nicht_ garantiert gleich, wenn die Reihenfolge gewechselt wird, daher sind Matrizen **nicht-kommutativ**.

Ein weiteres Rätsel ist, dass die Matrixmultiplikation in WebGL und CSS in der umgekehrten Reihenfolge durchgeführt werden muss, in der die Operationen intuitiv geschehen. Beispielsweise, um etwas um 80% zu verkleinern, 200 Pixel nach unten zu bewegen und dann um den Ursprung um 90 Grad zu drehen, würde ungefähr so in Pseudocode aussehen:

```plain
transformation = rotate * translate * scale
```

### Zusammensetzen mehrerer Transformationen

Die Funktion, die wir zur Zusammensetzung unserer Matrizen verwenden werden, ist `multiplyArrayOfMatrices()`, die Teil der Sammlung von Hilfsfunktionen ist, die am Anfang dieses Artikels eingeführt wurde. Sie nimmt ein Array von Matrizen und multipliziert sie miteinander, wobei das Ergebnis zurückgegeben wird. In WebGL-Shader-Code wird dies in die Sprache integriert, und der `*`-Operator kann verwendet werden.

```js live-sample___matrix_composition_ex
const transformMatrix = multiplyArrayOfMatrices([
  rotateZ(Math.PI * 0.5), // Step 3: rotate around 90 degrees
  translate(0, 200, 0), // Step 2: move down 200 pixels
  scale(0.8, 0.8, 0.8), // Step 1: scale down
]);

setTransform(transformMatrix);
```

{{EmbedLiveSample("matrix_composition_ex", "", 350)}}

Schließlich ein weiterer Schritt, um zu zeigen, wie Matrizen funktionieren, besteht darin, die Schritte umzukehren, um die Matrix zurück zur ursprünglichen Identitätsmatrix zu bringen.

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

Matrizen sind wichtig, weil sie eine kleine Menge von Zahlen umfassen, die eine Vielzahl von Transformationen im Raum beschreiben können. Sie können in Programmen leicht gemeinsam genutzt werden. Unterschiedliche Koordinatenräume können mit Matrizen beschrieben werden, und eine gewisse Matrixmultiplikation wird einen Datensatz von einem Koordinatenraum zu einem anderen bewegen. Matrizen erinnern effektiv an jeden Teil der vorherigen Transformationen, die zur Erzeugung verwendet wurden.

Für den Einsatz in WebGL ist die Grafikkarte besonders gut darin, eine große Anzahl von Punkten im Raum mit Matrizen zu multiplizieren. Verschiedene Operationen wie das Positionieren von Punkten, das Berechnen von Beleuchtung und das Posieren animierter Charaktere basieren alle auf diesem grundlegenden Werkzeug.
