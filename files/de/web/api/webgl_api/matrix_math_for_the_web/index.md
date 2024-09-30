---
title: Matrizenmathematik für das Web
slug: Web/API/WebGL_API/Matrix_math_for_the_web
l10n:
  sourceCommit: 5b21648ec15ec74e617626355a5a60dd9e930500
---

{{DefaultAPISidebar("WebGL")}}

Matrizen können verwendet werden, um Transformationen von Objekten im Raum darzustellen und werden für viele wesentliche Arten von Berechnungen eingesetzt, wenn Bilder erstellt und Daten im Web visualisiert werden. Dieser Artikel untersucht, wie Matrizen erstellt und wie sie mit [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) und dem `matrix3d`-Transformationstyp verwendet werden können.

Obwohl dieser Artikel [CSS](/de/docs/Web/CSS) verwendet, um Erklärungen zu vereinfachen, sind Matrizen ein Kernkonzept, das von vielen verschiedenen Technologien genutzt wird, einschließlich [WebGL](/de/docs/Web/API/WebGL_API), der [WebXR](/de/docs/Web/API/WebXR_Device_API) (VR und AR) API und [GLSL-Shadern](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders). Dieser Artikel ist auch als [MDN Content Kit](https://github.com/gregtatum/mdn-matrix-math) verfügbar. Die Live-Beispiele verwenden eine Sammlung von [Utility-Funktionen](https://github.com/gregtatum/mdn-webgl), die unter einem globalen Objekt namens `MDN` verfügbar sind.

## Transformationsmatrizen

Es gibt viele Arten von Matrizen, aber die, die uns interessieren, sind die 3D-Transformationsmatrizen. Diese Matrizen bestehen aus 16 Werten, die in einem 4×4 Raster angeordnet sind. In [JavaScript](/de/docs/Web/JavaScript) kann eine Matrix leicht als Array dargestellt werden.

Beginnen wir mit der Betrachtung der **Einheitsmatrix**. Dies ist eine spezielle Transformationsmatrix, die ähnlich wie die Zahl 1 bei der Skalarmultiplikation funktioniert; so wie n \* 1 = n, ergibt das Multiplizieren einer beliebigen Matrix mit der Einheitsmatrix eine resultierende Matrix, deren Werte mit der ursprünglichen Matrix übereinstimmen.

Die Einheitsmatrix sieht in JavaScript so aus:

```js
let identityMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
```

Wie sieht das Multiplizieren mit der Einheitsmatrix aus? Das einfachste Beispiel ist, einen einzelnen Punkt mit der Einheitsmatrix zu multiplizieren. Da ein 3D-Punkt nur drei Werte benötigt (`x`, `y` und `z`), und die Transformationsmatrix eine 4×4 Wertematrix ist, müssen wir dem Punkt eine vierte Dimension hinzufügen. Diese Dimension wird konventionell als **Perspektive** bezeichnet und mit dem Buchstaben `w` dargestellt. Für eine typische Position wird durch das Setzen von `w` auf 1 die Mathematik korrekt ausgeführt.

Nachdem Sie die `w`-Komponente zum Punkt hinzugefügt haben, beachten Sie, wie sauber die Matrix und der Punkt ausgerichtet sind:

```js-nolint
[1, 0, 0, 0,
 0, 1, 0, 0,
 0, 0, 1, 0,
 0, 0, 0, 1]

[4, 3, 2, 1] // Point at [x, y, z, w]
```

Die `w`-Komponente hat einige zusätzliche Verwendungen, die nicht im Rahmen dieses Artikels liegen. Schauen Sie sich den [WebGL Modellansichtprojektion](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection) Artikel an, um zu sehen, wie nützlich er sein kann.

### Multiplizieren einer Matrix und eines Punktes

In unserem Beispielcode haben wir eine Funktion definiert, um eine Matrix und einen Punkt zu multiplizieren — `multiplyMatrixAndPoint()`:

```js
// point • matrix
function multiplyMatrixAndPoint(matrix, point) {
  // Give a simple variable name to each part of the matrix, a column and row number
  let c0r0 = matrix[0],
    c1r0 = matrix[1],
    c2r0 = matrix[2],
    c3r0 = matrix[3];
  let c0r1 = matrix[4],
    c1r1 = matrix[5],
    c2r1 = matrix[6],
    c3r1 = matrix[7];
  let c0r2 = matrix[8],
    c1r2 = matrix[9],
    c2r2 = matrix[10],
    c3r2 = matrix[11];
  let c0r3 = matrix[12],
    c1r3 = matrix[13],
    c2r3 = matrix[14],
    c3r3 = matrix[15];

  // Now set some simple names for the point
  let x = point[0];
  let y = point[1];
  let z = point[2];
  let w = point[3];

  // Multiply the point against each part of the 1st column, then add together
  let resultX = x * c0r0 + y * c0r1 + z * c0r2 + w * c0r3;

  // Multiply the point against each part of the 2nd column, then add together
  let resultY = x * c1r0 + y * c1r1 + z * c1r2 + w * c1r3;

  // Multiply the point against each part of the 3rd column, then add together
  let resultZ = x * c2r0 + y * c2r1 + z * c2r2 + w * c2r3;

  // Multiply the point against each part of the 4th column, then add together
  let resultW = x * c3r0 + y * c3r1 + z * c3r2 + w * c3r3;

  return [resultX, resultY, resultZ, resultW];
}
```

> [!NOTE]
> Unsere Beispiele auf dieser Seite verwenden Zeilenvektoren, um Punkte darzustellen, und Rechtsmultiplikation, um Transformationsmatrizen anzuwenden. Das heißt, das Obige führt `point * matrix` aus, wobei `point` ein 4x1 Zeilenvektor ist. Wenn Sie Spaltenvektoren und Linksmultiplikation verwenden möchten, müssen Sie die Multiplikationsfunktion entsprechend anpassen und jede unten eingeführte Matrix transponieren.
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

Nun können wir mit der obigen Funktion einen Punkt mit der Matrix multiplizieren. Bei Verwendung der Einheitsmatrix sollte dabei ein Punkt zurückgegeben werden, der mit dem Original übereinstimmt, da ein Punkt (oder jede andere Matrix), multipliziert mit der Einheitsmatrix, immer gleich sich selbst ist:

```js
// sets identityResult to [4,3,2,1]
let identityResult = multiplyMatrixAndPoint(identityMatrix, [4, 3, 2, 1]);
```

Das Zurückgeben des gleichen Punktes ist nicht sehr nützlich, aber es gibt andere Arten von Matrizen, die nützliche Operationen auf Punkten ausführen können. Die nächsten Abschnitte werden einige dieser Matrizen demonstrieren.

### Multiplizieren zweier Matrizen

Zusätzlich zum Multiplizieren einer Matrix und eines Punktes können Sie auch zwei Matrizen miteinander multiplizieren. Die obige Funktion kann erneut verwendet werden, um in diesem Prozess zu helfen:

```js
//matrixB • matrixA
function multiplyMatrices(matrixA, matrixB) {
  // Slice the second matrix up into rows
  let row0 = [matrixB[0], matrixB[1], matrixB[2], matrixB[3]];
  let row1 = [matrixB[4], matrixB[5], matrixB[6], matrixB[7]];
  let row2 = [matrixB[8], matrixB[9], matrixB[10], matrixB[11]];
  let row3 = [matrixB[12], matrixB[13], matrixB[14], matrixB[15]];

  // Multiply each row by matrixA
  let result0 = multiplyMatrixAndPoint(matrixA, row0);
  let result1 = multiplyMatrixAndPoint(matrixA, row1);
  let result2 = multiplyMatrixAndPoint(matrixA, row2);
  let result3 = multiplyMatrixAndPoint(matrixA, row3);

  // Turn the result rows back into a single matrix
  return [
    result0[0],
    result0[1],
    result0[2],
    result0[3],
    result1[0],
    result1[1],
    result1[2],
    result1[3],
    result2[0],
    result2[1],
    result2[2],
    result2[3],
    result3[0],
    result3[1],
    result3[2],
    result3[3],
  ];
}
```

Schauen wir uns diese Funktion in Aktion an:

```js
let someMatrix = [4, 0, 0, 0, 0, 3, 0, 0, 0, 0, 5, 0, 4, 8, 4, 1];

let identityMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Returns a new array equivalent to someMatrix
let someMatrixResult = multiplyMatrices(identityMatrix, someMatrix);
```

> [!WARNING]
> Diese Matrixfunktionen wurden zur Klarstellung der Erklärung geschrieben, nicht für Geschwindigkeit oder Speichermanagement. Diese Funktionen erstellen viele neue Arrays, was für Echtzeitoperationen aufgrund der Speicherbereinigung besonders teuer sein kann. In echtem Produktionscode wäre es am besten, optimierte Funktionen zu verwenden. [glMatrix](https://glmatrix.net/) ist ein Beispiel für eine Bibliothek, die auf Geschwindigkeit und Leistung ausgelegt ist. Der Fokus in der glMatrix-Bibliothek liegt darauf, Zielarrays zu haben, die vor der Aktualisierungsschleife zugewiesen werden.

## Translationsmatrix

Eine **Translationsmatrix** basiert auf der Einheitsmatrix und wird in 3D-Grafiken verwendet, um einen Punkt oder ein Objekt in eine oder mehrere der drei Richtungen (`x`, `y` und/oder `z`) zu verschieben. Der einfachste Weg, eine Translation zu verstehen, ist wie das Aufheben einer Kaffeetasse. Die Kaffeetasse muss aufrecht gehalten und gleich ausgerichtet werden, damit kein Kaffee verschüttet wird. Sie kann in der Luft vom Tisch hochgehoben und im Raum bewegt werden.

Sie können den Kaffee tatsächlich nicht nur mit einer Translationsmatrix trinken, denn um ihn zu trinken, müssen Sie in der Lage sein, die Tasse zu kippen oder zu drehen, um den Kaffee in Ihren Mund zu gießen. Wir werden uns später den Typ der Matrix ansehen (treffend als **[Rotationsmatrix](#rotationsmatrix)** bezeichnet), den Sie dazu verwenden.

```js
let x = 50;
let y = 100;
let z = 0;

let translationMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
```

Setzen Sie die Entfernungen entlang der drei Achsen in die entsprechenden Positionen in der Translationsmatrix ein, und multiplizieren Sie sie dann mit dem Punkt oder der Matrix, die Sie durch den 3D-Raum bewegen müssen.

## Manipulieren des DOM mit einer Matrix

Ein wirklich einfacher Weg, eine Matrix zu verwenden, ist die CSS {{cssxref("transform-function/matrix3d","matrix3d()")}} {{cssxref("transform")}}. Zuerst richten wir ein einfaches {{htmlelement("div")}} mit etwas Inhalt ein. Der Stil wird nicht gezeigt, aber er ist auf eine feste Breite und Höhe gesetzt und auf der Seite zentriert. Das `<div>` hat einen Übergang für die Transformation gesetzt, sodass die Matrix animiert ist, wodurch deutlich wird, was getan wird.

```html
<div id="move-me" class="transformable">
  <h2>Move me with a matrix</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</p>
</div>
```

Schließlich werden wir für jedes Beispiel eine 4×4 Matrix generieren und dann den Stil des `<div>` aktualisieren, um eine Transformation darauf anzuwenden, die auf `matrix3d` gesetzt ist. Beachten Sie, dass die Matrix, obwohl sie aus 4 Zeilen und 4 Spalten besteht, in eine einzelne Zeile von 16 Werten zusammengeschrumpft wird. Matrizen werden in JavaScript immer in eindimensionalen Listen gespeichert.

```js
// Create the matrix3d style property from a matrix array
function matrixArrayToCssMatrix(array) {
  return `matrix3d(${array.join(",")})`;
}

// Grab the DOM element
let moveMe = document.getElementById("move-me");

// Returns a result like: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 50, 100, 0, 1);"
let matrix3dRule = matrixArrayToCssMatrix(translationMatrix);

// Set the transform
moveMe.style.transform = matrix3dRule;
```

[View on JSFiddle](https://jsfiddle.net/tatumcreative/g24mgw6y/)

![Ein Beispiel für Matrixtranslation](matrix-translation.jpg)

## Skalierungs-Matrix

Eine **Skalierungs-Matrix** vergrößert oder verkleinert etwas in eine oder mehrere der drei Dimensionen: Breite, Höhe und Tiefe. In typischen (kartesischen) Koordinaten führt dies zu einem Strecken oder Zusammenziehen des Objekts in den entsprechenden Richtungen.

Die Menge der Änderung, die auf jede der Breiten-, Höhen- und Tiefenachse angewendet wird, wird diagonal von der oberen linken Ecke ausgehend nach unten rechts platziert.

```js
let w = 1.5; // width  (x)
let h = 0.7; // height (y)
let d = 1; // depth  (z)

let scaleMatrix = [w, 0, 0, 0, 0, h, 0, 0, 0, 0, d, 0, 0, 0, 0, 1];
```

[View on JSFiddle](https://jsfiddle.net/tatumcreative/fndd6e1b/)

![Ein Beispiel für Matrixskalierung](matrix-scale.jpg)

## Rotationsmatrix

Eine **Rotationsmatrix** wird verwendet, um einen Punkt oder ein Objekt zu drehen. Rotationsmatrizen sehen etwas komplizierter aus als Skalierungs- und Transformationsmatrizen. Sie verwenden trigonometrische Funktionen, um die Rotation durchzuführen. Obwohl dieser Abschnitt die Schritte nicht in allen Details aufschlüsseln wird (sehen Sie sich [diesen Artikel auf Wolfram MathWorld](https://mathworld.wolfram.com/RotationMatrix.html) für Details an), dient dieses Beispiel zur Veranschaulichung.

Zuerst ist hier Code, der einen Punkt um den Ursprung rotiert, ohne Matrizen zu verwenden.

```js
// Manually rotating a point about the origin without matrices
let point = [10, 2];

// Calculate the distance from the origin
let distance = Math.sqrt(point[0] * point[0] + point[1] * point[1]);

// The equivalent of 60 degrees, in radians
let rotationInRadians = Math.PI / 3;

let transformedPoint = [
  Math.cos(rotationInRadians) * distance,
  Math.sin(rotationInRadians) * distance,
];
```

Es ist möglich, diese Art von Schritten in eine Matrix zu kodieren und dies für jede der `x`, `y` und `z` Dimensionen zu tun. Unten ist die Darstellung einer Drehung gegen den Uhrzeigersinn um die Z-Achse in einem linken Koordinatensystem:

```js
let sin = Math.sin;
let cos = Math.cos;

// NOTE: There is no perspective in these transformations, so a rotation
//       at this point will only appear to only shrink the div

let a = Math.PI * 0.3; //Rotation amount in radians

// Rotate around Z axis
let rotateZMatrix = [
  cos(a),
  -sin(a),
  0,
  0,
  sin(a),
  cos(a),
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  1,
];
```

[View on JSFiddle](https://jsfiddle.net/tatumcreative/9vr2dorz/)

![Ein Beispiel für Matrizenrotation.](matrix-rotation.jpg)

Hier sind ein Satz von Funktionen, die Rotationsmatrizen für Drehungen um jede der drei Achsen zurückgeben. Ein wichtiger Hinweis ist, dass keine Perspektive angewendet wird, sodass es sich möglicherweise noch nicht sehr 3D anfühlt. Die Flachheit entspricht dem, wenn eine Kamera sehr nahe an ein Objekt in der Ferne heranzoomt - das Gefühl der Perspektive verschwindet.

```js
function rotateAroundXAxis(a) {
  return [1, 0, 0, 0, 0, cos(a), -sin(a), 0, 0, sin(a), cos(a), 0, 0, 0, 0, 1];
}

function rotateAroundYAxis(a) {
  return [cos(a), 0, sin(a), 0, 0, 1, 0, 0, -sin(a), 0, cos(a), 0, 0, 0, 0, 1];
}

function rotateAroundZAxis(a) {
  return [cos(a), -sin(a), 0, 0, sin(a), cos(a), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
```

[View on JSFiddle](https://jsfiddle.net/tatumcreative/tk072doc/)

## Matrizenzusammensetzung

Die wirkliche Kraft von Matrizen kommt von der **Matrizenzusammensetzung**. Wenn Matrizen einer bestimmten Klasse miteinander multipliziert werden, bewahren sie die Geschichte der Transformationen und sind reversibel. Das bedeutet, wenn eine Translations-, Rotations- und Skalierungs-Matrix alle zusammen kombiniert werden und die Reihenfolge der Matrizen umgekehrt und erneut angewendet wird, dann werden die ursprünglichen Punkte zurückgegeben.

Die Reihenfolge, in der Matrizen multipliziert werden, ist wichtig. Beim Multiplizieren von Zahlen ist a \* b = c und b \* a = c beide wahr. Zum Beispiel 3 \* 4 = 12 und 4 \* 3 = 12. In der Mathematik würden diese Zahlen als **kommutativ** beschrieben. Matrizen sind _nicht_ garantiert gleich, wenn die Reihenfolge gewechselt wird, daher sind Matrizen **nicht-kommutativ**.

Ein weiterer Kopfdreher ist, dass Matrixmultiplikation in WebGL und CSS in der umgekehrten Reihenfolge stattfinden muss, als die Operationen intuitiv stattfinden. Um beispielsweise etwas um 80 % zu verkleinern, es um 200 Pixel nach unten zu verschieben und dann um den Ursprung 90 Grad zu drehen, würde dies in etwa so aussehen wie das folgende Pseudocode.

```plain
transformation = rotate * translate * scale
```

### Zusammensetzen mehrerer Transformationen

Die Funktion, die wir verwenden werden, um unsere Matrizen zu komponieren, ist `multiplyArrayOfMatrices()`, die Teil des Satzes von [Utility-Funktionen](https://github.com/gregtatum/mdn-webgl) ist, der weiter oben in diesem Artikel vorgestellt wurde. Sie nimmt ein Array von Matrizen und multipliziert sie zusammen, wobei das Ergebnis zurückgegeben wird. In WebGL-Shader-Code ist dies in die Sprache eingebaut, und der `*` Operator kann verwendet werden. Zusätzlich verwendet dieses Beispiel `scale()` und `translate()` Funktionen, die Matrizen wie oben definiert zurückgeben.

```js
let transformMatrix = MDN.multiplyArrayOfMatrices([
  rotateAroundZAxis(Math.PI * 0.5), // Step 3: rotate around 90 degrees
  translate(0, 200, 0), // Step 2: move down 200 pixels
  scale(0.8, 0.8, 0.8), // Step 1: scale down
]);
```

[View on JSFiddle](https://jsfiddle.net/tatumcreative/qxxg3yvc/)

![Ein Beispiel für Matrizenzusammensetzung](matrix-composition.jpg)

Schließlich, ein spaßiger Schritt, um zu zeigen, wie Matrizen arbeiten, ist, die Schritte umzukehren, um die Matrix wieder zur ursprünglichen Einheitsmatrix zurückzubringen.

```js
let transformMatrix = MDN.multiplyArrayOfMatrices([
  scale(1.25, 1.25, 1.25), // Step 6: scale back up
  translate(0, -200, 0), // Step 5: move back up
  rotateAroundZAxis(-Math.PI * 0.5), // Step 4: rotate back
  rotateAroundZAxis(Math.PI * 0.5), // Step 3: rotate around 90 degrees
  translate(0, 200, 0), // Step 2: move down 200 pixels
  scale(0.8, 0.8, 0.8), // Step 1: scale down
]);
```

## Warum Matrizen wichtig sind

Matrizen sind wichtig, weil sie eine kleine Menge von Zahlen umfassen, die eine breite Palette von Transformationen im Raum beschreiben können. Sie können leicht in Programmen geteilt werden. Verschiedene Koordinatenräume können mit Matrizen beschrieben werden, und durch etwas Matrixmultiplikation wird ein Datensatz von einem Koordinatenraum in einen anderen verschoben. Matrizen erinnern sich effektiv an jeden Teil der vorherigen Transformationen, die verwendet wurden, um sie zu erzeugen.

Für Anwendungen in WebGL ist die Grafikkarte besonders gut darin, eine große Anzahl von Punkten im Raum durch Matrizen zu multiplizieren. Verschiedene Operationen wie das Positionieren von Punkten, das Berechnen von Beleuchtung und das Posieren von animierten Charakteren verlassen sich alle auf dieses grundlegende Werkzeug.
