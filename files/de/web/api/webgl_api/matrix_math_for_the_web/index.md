---
title: Matrizenberechnung für das Web
slug: Web/API/WebGL_API/Matrix_math_for_the_web
l10n:
  sourceCommit: 14bbb5e28cc560752ed4c8e88479c4bb5d661953
---

{{DefaultAPISidebar("WebGL")}}

Matrizen können verwendet werden, um Transformationen von Objekten im Raum darzustellen und sind entscheidend für viele Arten von Berechnungen bei der Erstellung von Bildern und der Visualisierung von Daten im Web. Dieser Artikel untersucht, wie Matrizen erstellt werden und wie sie mit [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) und dem `matrix3d`-Transformationstyp verwendet werden.

Während dieser Artikel [CSS](/de/docs/Web/CSS) zur Vereinfachung der Erklärungen verwendet, sind Matrizen ein Kernelement, das von vielen verschiedenen Technologien genutzt wird, einschließlich [WebGL](/de/docs/Web/API/WebGL_API), der [WebXR](/de/docs/Web/API/WebXR_Device_API) (VR und AR) API und [GLSL-Shadern](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders).

## Transformationsmatrizen

Es gibt viele Typen von Matrizen, aber die, die für uns von Interesse sind, sind die 3D-Transformationsmatrizen. Diese Matrizen bestehen aus einem Satz von 16 Werten, die in einem Raster von 4×4 angeordnet sind. In [JavaScript](/de/docs/Web/JavaScript) lässt sich eine Matrix leicht als Array darstellen.

Beginnen wir mit der Betrachtung der **Einheitsmatrix**. Diese ist eine spezielle Transformationsmatrix, die ähnlich wie die Zahl 1 bei der Skalarmultiplikation funktioniert; genauso wie n \* 1 = n ergibt, führt die Multiplikation einer beliebigen Matrix mit der Einheitsmatrix zu einer resultierenden Matrix, deren Werte mit der Originalmatrix übereinstimmen.

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

Wie sieht die Multiplikation mit der Einheitsmatrix aus? Das einfachste Beispiel ist die Multiplikation eines einzelnen Punktes mit der Einheitsmatrix. Da ein 3D-Punkt nur drei Werte (`x`, `y` und `z`) benötigt und die Transformationsmatrix eine 4×4-Werte-Matrix ist, müssen wir dem Punkt eine vierte Dimension hinzufügen. Diese Dimension wird konventionell als **Perspektive** bezeichnet und durch den Buchstaben `w` dargestellt. Für eine typische Position führt das Festlegen von `w` auf 1 dazu, dass die Mathematik richtig funktioniert.

Nach dem Hinzufügen der `w`-Komponente zum Punkt ist zu bemerken, wie sauber die Matrix und der Punkt übereinstimmen:

```js-nolint
[1, 0, 0, 0,
 0, 1, 0, 0,
 0, 0, 1, 0,
 0, 0, 0, 1];

[4, 3, 2, 1]; // Point at [x, y, z, w]
```

Die `w`-Komponente hat einige zusätzliche Verwendungszwecke, die außerhalb des Geltungsbereichs dieses Artikels liegen. Sehen Sie sich den Artikel über [WebGL-Modell-View-Projektion](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection) an, um zu erfahren, wie sie nützlich sein kann.

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
> Unsere Beispiele auf dieser Seite verwenden Zeilenvektoren, um Punkte darzustellen, und die Rechtsmultiplikation, um Transformationsmatrizen anzuwenden. Das bedeutet, dass `point * matrix` durchgeführt wird, wobei `point` ein 4x1-Zeilenvektor ist. Wenn Sie Spaltenvektoren und Linksmultiplikation verwenden möchten, müssen Sie die Multiplikationsfunktion entsprechend anpassen und jede unten eingeführte Matrix transponieren.
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

Nun können wir mit der oben genannten Funktion einen Punkt mit der Matrix multiplizieren. Bei der Verwendung der Einheitsmatrix sollte ein Punkt zurückgegeben werden, der identisch mit dem Original ist, da ein Punkt (oder eine andere Matrix), der mit der Einheitsmatrix multipliziert wird, immer gleich sich selbst ist:

```js
// sets identityResult to [4,3,2,1]
const identityResult = multiplyMatrixAndPoint(identityMatrix, [4, 3, 2, 1]);
```

Dass der gleiche Punkt zurückgegeben wird, ist nicht sehr nützlich, aber es gibt andere Arten von Matrizen, die nützliche Operationen auf Punkte anwenden können. Die nächsten Abschnitte werden einige dieser Matrizen demonstrieren.

### Multiplikation von zwei Matrizen

Zusätzlich zur Multiplikation einer Matrix mit einem Punkt können Sie auch zwei Matrizen miteinander multiplizieren. Die Funktion von oben kann in diesem Prozess helfen:

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
> Diese Matrixfunktionen sind für die Klarheit der Erklärung geschrieben, nicht für Geschwindigkeit oder Speichermanagement. Diese Funktionen erzeugen viele neue Arrays, was bei Echtzeitoperationen aufgrund der Garbage Collection besonders teuer sein kann. In echtem Produktionscode wäre es am besten, optimierte Funktionen zu verwenden. [glMatrix](https://glmatrix.net/) ist ein Beispiel für eine Bibliothek, die sich auf Geschwindigkeit und Leistung konzentriert. Der Schwerpunkt in der glMatrix-Bibliothek liegt darauf, Zielarrays vor der Aktualisierungsschleife zuzuweisen.

## Translationsmatrix

Eine **Translationsmatrix** basiert auf der Einheitsmatrix und wird in 3D-Grafiken verwendet, um einen Punkt oder ein Objekt in eine oder mehrere der drei Richtungen (`x`, `y` und/oder `z`) zu bewegen. Die einfachste Vorstellung von einer Translation ist das Anheben einer Kaffeetasse. Die Kaffeetasse muss aufrecht gehalten und in der gleichen Position ausgerichtet sein, damit kein Kaffee verschüttet wird. Sie kann vom Tisch in die Luft und im Raum hin- und herbewegt werden.

Um tatsächlich den Kaffee zu trinken, können Sie nur mit einer Translationsmatrix nichts anfangen, da Sie die Tasse kippen oder drehen müssen, um den Kaffee in den Mund zu gießen. Wir betrachten später die Art von Matrix (klug als **[Rotationsmatrix](#rotationsmatrix)** bezeichnet), die Sie dafür verwenden.

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

Setzen Sie die Entfernungen entlang der drei Achsen an die entsprechenden Positionen in der Translationsmatrix und multiplizieren Sie diese dann mit dem Punkt oder der Matrix, die Sie durch den 3D-Raum bewegen müssen.

## Manipulieren des DOM mit einer Matrix

Eine wirklich einfache Möglichkeit, eine Matrix zu verwenden, ist die Verwendung der CSS {{cssxref("transform-function/matrix3d","matrix3d()")}} {{cssxref("transform")}}. Zuerst richten wir ein einfaches {{htmlelement("div")}} mit etwas Inhalt ein. Der Stil wird nicht angezeigt, er ist aber auf eine feste Breite und Höhe eingestellt und auf der Seite zentriert. Das `<div>` hat einen Übergang für die Transformation gesetzt, so dass die Matrix animiert wird, was es leicht macht zu sehen, was getan wird.

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
  background: #4cc;
  padding: 10px;
  border: 2px solid #333;
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

Schließlich erzeugen wir für jedes Beispiel eine 4×4-Matrix und aktualisieren den Stil des `<div>`, um eine Transformation darauf anzuwenden, die auf eine `matrix3d` gesetzt ist. Beachten Sie, dass die Matrix, obwohl sie aus 4 Zeilen und 4 Spalten besteht, sich zu einer einzigen Zeile mit 16 Werten zusammenzieht. Matrizen werden in JavaScript immer in eindimensionalen Listen gespeichert.

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

Für ein Beispiel verwenden wir die `translate()`-Funktion aus dem [Translationsmatrix](#translationsmatrix)-Abschnitt oben, um das `<div>` um 100 Pixel nach unten und 50 Pixel nach rechts zu bewegen. Der `z`-Wert wird auf 0 gesetzt, sodass es sich nicht in die dritte Dimension bewegt.

```js live-sample___translation_matrix_ex
const translationMatrix = translate(50, 100, 0);
setTransform(translationMatrix);
```

{{EmbedLiveSample("translation_matrix_ex", "", 350)}}

## Skalierungsmatrix

Eine **Skalierungsmatrix** vergrößert oder verkleinert ein Objekt in einer oder mehreren Dimensionen: Breite, Höhe und Tiefe. In typischen (kartesischen) Koordinaten führt dies zu einer Streckung oder Kontraktion des Objekts in den entsprechenden Richtungen.

Der Betrag der Änderung, der auf jede der Breite, Höhe und Tiefe angewendet werden soll, wird diagonal beginnend in der oberen linken Ecke platziert und arbeitet sich in Richtung der unteren rechten Ecke vor.

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

Eine **Rotationsmatrix** wird verwendet, um einen Punkt oder ein Objekt zu drehen. Rotationsmatrizen sehen etwas komplizierter aus als Skalierungs- und Transformationsmatrizen. Sie verwenden trigonometrische Funktionen, um die Rotation durchzuführen. Obwohl dieser Abschnitt die Schritte nicht im Detail aufschlüsseln wird (sehen Sie sich [diesen Artikel auf Wolfram MathWorld](https://mathworld.wolfram.com/RotationMatrix.html) für eine detaillierte Erklärung an), nehmen Sie dieses Beispiel zur Veranschaulichung.

Hier ist zunächst ein Code, der einen Punkt um den Ursprung ohne Matrizen dreht.

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

Es ist möglich, diese Schritte in eine Matrix zu kodieren und sowohl für die `x-`, `y-` als auch `z`-Dimensionen zu verwenden. Hier ist eine Reihe von Funktionen, die Rotationsmatrizen für die Rotation um jede der drei Achsen zurückgeben. Eine große Anmerkung ist, dass keine Perspektive angewendet wird, sodass es vielleicht noch nicht sehr 3D erscheint. Die Flachheit ist vergleichbar damit, wenn eine Kamera wirklich nah an ein Objekt in der Ferne heranzoomt – der Sinn für Perspektive verschwindet.

```js live-sample___rotation_matrix_ex live-sample___matrix_composition_ex
const sin = Math.sin;
const cos = Math.cos;

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

```js live-sample___rotation_matrix_ex
const rotateZMatrix = rotateAroundZAxis(Math.PI * 0.3);
setTransform(rotateZMatrix);
```

{{EmbedLiveSample("rotation_matrix_ex", "", 350)}}

## Matrizenkomposition

Die wahre Stärke von Matrizen zeigt sich in der **Matrizenkomposition**. Wenn Matrizen einer bestimmten Klasse miteinander multipliziert werden, bewahren sie die Historie der Transformationen und sind umkehrbar. Das bedeutet, dass wenn eine Translations-, Rotations- und Skalierungsmatrix zusammen kombiniert werden und die Reihenfolge der Matrizen umgekehrt und erneut angewendet wird, die ursprünglichen Punkte zurückgegeben werden.

Die Reihenfolge, in der Matrizen multipliziert werden, ist wichtig. Bei der Multiplikation von Zahlen ist sowohl a \* b = c als auch b \* a = c wahr. Zum Beispiel 3 \* 4 = 12 und 4 \* 3 = 12. In der Mathematik würden diese Zahlen als **kommutativ** beschrieben werden. Matrizen sind _nicht_ garantiert gleich, wenn die Reihenfolge geändert wird, daher sind Matrizen **nicht-kommutativ**.

Ein weiteres Gedankenexperiment ist, dass die Matrixmultiplikation in WebGL und CSS in umgekehrter Reihenfolge erfolgen muss, wie es intuitiv passiert. Zum Beispiel würde das Verkleinern um 80%, das Bewegen um 200 Pixel nach unten und dann das Drehen um den Ursprung um 90 Grad in etwa wie folgt im Pseudocode aussehen.

```plain
transformation = rotate * translate * scale
```

### Komponieren mehrerer Transformationen

Die Funktion, die wir verwenden werden, um unsere Matrizen zu komponieren, ist `multiplyArrayOfMatrices()`, die Teil des am Anfang dieses Artikels eingeführten Satzes von Hilfsfunktionen ist. Sie nimmt ein Array von Matrizen und multipliziert sie miteinander, wobei das Ergebnis zurückgegeben wird. In WebGL-Shader-Code ist dies in die Sprache eingebaut und der `*`-Operator kann verwendet werden.

```js live-sample___matrix_composition_ex
const transformMatrix = multiplyArrayOfMatrices([
  rotateAroundZAxis(Math.PI * 0.5), // Step 3: rotate around 90 degrees
  translate(0, 200, 0), // Step 2: move down 200 pixels
  scale(0.8, 0.8, 0.8), // Step 1: scale down
]);

setTransform(transformMatrix);
```

{{EmbedLiveSample("matrix_composition_ex", "", 350)}}

Schließlich ein unterhaltsamer Schritt, um zu zeigen, wie Matrizen arbeiten, besteht darin, die Schritte umzukehren, um die Matrix wieder zur ursprünglichen Einheitsmatrix zu bringen.

```js
const transformMatrix = multiplyArrayOfMatrices([
  scale(1.25, 1.25, 1.25), // Step 6: scale back up
  translate(0, -200, 0), // Step 5: move back up
  rotateAroundZAxis(-Math.PI * 0.5), // Step 4: rotate back
  rotateAroundZAxis(Math.PI * 0.5), // Step 3: rotate around 90 degrees
  translate(0, 200, 0), // Step 2: move down 200 pixels
  scale(0.8, 0.8, 0.8), // Step 1: scale down
]);
```

## Warum Matrizen wichtig sind

Matrizen sind wichtig, weil sie eine kleine Menge von Zahlen darstellen, die ein breites Spektrum von Transformationen im Raum beschreiben können. Sie können leicht in Programmen geteilt werden. Unterschiedliche Koordinatenräume können mit Matrizen beschrieben werden, und eine gewisse Matrixmultiplikation wird einen Satz von Daten von einem Koordinatenraum in einen anderen verschieben. Matrizen behalten effektiv jeden Teil der vorherigen Transformationen, die zur Generierung verwendet wurden, in sich.

Für Verwendungen in WebGL ist die Grafikkarte besonders gut darin, eine große Anzahl von Punkten im Raum mit Matrizen zu multiplizieren. Verschiedene Operationen wie das Positionieren von Punkten, das Berechnen von Beleuchtungseffekten und das Posieren von animierten Charakteren bauen alle auf diesem grundlegenden Werkzeug auf.
