---
title: Matrix-Mathematik für das Web
slug: Web/API/WebGL_API/Matrix_math_for_the_web
l10n:
  sourceCommit: 5b21648ec15ec74e617626355a5a60dd9e930500
---

{{DefaultAPISidebar("WebGL")}}

Matrizen können verwendet werden, um die Transformation von Objekten im Raum darzustellen, und werden für viele wichtige Berechnungsarten beim Erstellen von Bildern und Visualisieren von Daten im Web verwendet. In diesem Artikel wird untersucht, wie Matrizen erstellt und mit [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) und dem `matrix3d`-Transformationstyp verwendet werden.

Obwohl in diesem Artikel [CSS](/de/docs/Web/CSS) verwendet wird, um Erklärungen zu vereinfachen, sind Matrizen ein Kernkonzept, das von vielen verschiedenen Technologien verwendet wird, einschließlich [WebGL](/de/docs/Web/API/WebGL_API), der [WebXR](/de/docs/Web/API/WebXR_Device_API) (VR und AR) API und [GLSL-Shaders](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders). Dieser Artikel ist auch als [MDN-Inhaltskit](https://github.com/gregtatum/mdn-matrix-math) verfügbar. Die Live-Beispiele nutzen eine Sammlung von [Hilfsfunktionen](https://github.com/gregtatum/mdn-webgl), die unter einem globalen Objekt namens `MDN` verfügbar sind.

## Transformationsmatrizen

Es gibt viele Arten von Matrizen, aber die, die uns interessieren, sind die 3D-Transformationsmatrizen. Diese Matrizen bestehen aus einem Satz von 16 Werten, die in einem 4×4-Raster angeordnet sind. In [JavaScript](/de/docs/Web/JavaScript) lässt sich eine Matrix leicht als Array darstellen.

Beginnen wir mit der Betrachtung der **Einheitsmatrix**. Dies ist eine spezielle Transformationsmatrix, die ähnlich wie die Zahl 1 bei der Skalarmultiplikation funktioniert; ebenso wie n \* 1 = n, ergibt die Multiplikation einer beliebigen Matrix mit der Einheitsmatrix eine resultierende Matrix, deren Werte mit der Originalmatrix übereinstimmen.

Die Einheitsmatrix sieht in JavaScript so aus:

```js
let identityMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
```

Wie sieht das Multiplizieren mit der Einheitsmatrix aus? Das einfachste Beispiel ist die Multiplikation eines einzelnen Punktes mit der Einheitsmatrix. Da ein 3D-Punkt nur drei Werte benötigt (`x`, `y`, und `z`), und die Transformationsmatrix eine 4×4-Wert-Matrix ist, müssen wir dem Punkt eine vierte Dimension hinzufügen. Üblicherweise wird diese Dimension als **Perspektive** bezeichnet und durch den Buchstaben `w` dargestellt. Bei einer typischen Position führt das Setzen von `w` auf 1 dazu, dass die Mathematik korrekt funktioniert.

Nachdem die `w`-Komponente dem Punkt hinzugefügt wurde, fällt auf, wie ordentlich sich die Matrix und der Punkt aufreihen:

```js-nolint
[1, 0, 0, 0,
 0, 1, 0, 0,
 0, 0, 1, 0,
 0, 0, 0, 1]

[4, 3, 2, 1] // Point at [x, y, z, w]
```

Die `w`-Komponente hat einige zusätzliche Verwendungen, die außerhalb des Rahmens dieses Artikels liegen. Schauen Sie sich den Artikel zum [WebGL Model View Projection](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection) an, um Einblicke zu gewinnen, wie dies nützlich sein kann.

### Multiplikation einer Matrix und eines Punktes

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
> Unsere Beispiele auf dieser Seite verwenden Zeilenvektoren, um Punkte darzustellen, und Rechtsmultiplikation, um Transformationsmatrizen anzuwenden. Das bedeutet, dass oben `point * matrix` steht, wobei `point` ein 4x1-Zeilenvektor ist. Wenn Sie Spaltenvektoren und Linksmultiplikation verwenden möchten, müssen Sie die Multiplikationsfunktion entsprechend anpassen und jede unten eingeführte Matrix transponieren.
>
> Zum Beispiel sieht die im Folgenden eingeführte [`translationMatrix`](#translationsmatrix) ursprünglich so aus:
>
> ```js-nolint
> [1, 0, 0, 0,
>  0, 1, 0, 0,
>  0, 0, 1, 0,
>  x, y, z, 1]
> ```
>
> Nach der Transponierung würde sie so aussehen:
>
> ```js-nolint
> [1, 0, 0, x,
>  0, 1, 0, y,
>  0, 0, 1, z,
>  0, 0, 0, 1]
> ```

Nun können wir die obige Funktion verwenden, um einen Punkt mit der Matrix zu multiplizieren. Bei der Verwendung der Einheitsmatrix sollte sie einen Punkt zurückgeben, der mit dem Original identisch ist, da ein Punkt (oder eine andere Matrix), multipliziert mit der Einheitsmatrix, immer gleich sich selbst ist:

```js
// sets identityResult to [4,3,2,1]
let identityResult = multiplyMatrixAndPoint(identityMatrix, [4, 3, 2, 1]);
```

Es ist nicht sehr nützlich, denselben Punkt zurückzugeben, aber es gibt andere Arten von Matrizen, die nützliche Operationen an Punkten durchführen können. Die nächsten Abschnitte werden einige dieser Matrizen demonstrieren.

### Multiplikation zweier Matrizen

Zusätzlich zur Multiplikation einer Matrix mit einem Punkt können auch zwei Matrizen miteinander multipliziert werden. Die obige Funktion kann dabei helfen, diesen Prozess zu unterstützen:

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
> Diese Matrixfunktionen sind zur Verdeutlichung der Erklärung geschrieben, nicht für Geschwindigkeit oder Speichermanagement. Diese Funktionen erzeugen viele neue Arrays, die aufgrund der Müllabfuhr besonders kostspielig für Echtzeitoperationen sein können. In realem Produktivcode wäre es am besten, optimierte Funktionen zu verwenden. [glMatrix](https://glmatrix.net/) ist ein Beispiel für eine Bibliothek, die auf Geschwindigkeit und Leistung fokussiert ist. Der Fokus in der glMatrix-Bibliothek liegt darauf, Zielarrays zu haben, die vor der Aktualisierungsschleife zugewiesen werden.

## Translationsmatrix

Eine **Translationsmatrix** basiert auf der Einheitsmatrix und wird in der 3D-Grafik verwendet, um einen Punkt oder ein Objekt in einer oder mehreren der drei Richtungen (`x`, `y` und/oder `z`) zu verschieben. Der einfachste Weg, sich eine Translation vorzustellen, ist wie das Aufheben einer Kaffeetasse. Die Kaffeetasse muss aufrecht gehalten und gleich ausgerichtet bleiben, damit kein Kaffee verschüttet wird. Sie kann vom Tisch in die Luft gehoben und um den Raum bewegt werden.

Sie können den Kaffee nicht tatsächlich nur mit einer Translationsmatrix trinken, da Sie die Tasse kippen oder drehen müssen, um den Kaffee in Ihren Mund zu gießen. Wir werden später auf die Art von Matrix eingehen (clever als **[Rotationsmatrix](#rotationsmatrix)** bezeichnet), die Sie hierfür verwenden.

```js
let x = 50;
let y = 100;
let z = 0;

let translationMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
```

Platzieren Sie die Distanzen entlang der drei Achsen in den entsprechenden Positionen der Translationsmatrix und multiplizieren Sie sie dann mit dem Punkt oder der Matrix, die Sie durch den 3D-Raum bewegen müssen.

## Den DOM mit einer Matrix manipulieren

Eine sehr einfache Möglichkeit, eine Matrix zu verwenden, besteht darin, die CSS {{cssxref("transform-function/matrix3d","matrix3d()")}} {{cssxref("transform")}}-Funktion zu verwenden. Zuerst richten wir ein einfaches {{htmlelement("div")}} mit etwas Inhalt ein. Der Stil wird nicht gezeigt, aber es ist auf eine feste Breite und Höhe eingestellt und auf der Seite zentriert. Das `<div>` hat einen Übergang für die Transformation gesetzt, damit die Matrix animiert ist und es einfach zu sehen ist, was gemacht wird.

```html
<div id="move-me" class="transformable">
  <h2>Move me with a matrix</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</p>
</div>
```

Schließlich werden wir für jedes Beispiel eine 4×4-Matrix erstellen und dann den Stil des `<div>` so aktualisieren, dass eine Transformation angewendet wird, die auf eine `matrix3d` gesetzt ist. Beachten Sie, dass die Matrix, obwohl sie aus 4 Zeilen und 4 Spalten besteht, zu einer einzigen Zeile mit 16 Werten zusammengefasst wird. Matrizen werden in JavaScript immer in eindimensionalen Listen gespeichert.

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

[Auf JSFiddle ansehen](https://jsfiddle.net/tatumcreative/g24mgw6y/)

![Ein Beispiel für eine Matrixtranslation](matrix-translation.jpg)

## Skalierungsmatrix

Eine **Skalierungsmatrix** vergrößert oder verkleinert etwas in einer oder mehreren der drei Dimensionen: Breite, Höhe und Tiefe. In typischen (kartesischen) Koordinaten führt dies zu einer Dehnung oder Kontraktion des Objekts in die entsprechenden Richtungen.

Die Menge der Änderung, die auf jede der Breiten-, Höhen- und Tiefenrichtungen angewendet werden soll, wird diagonal beginnend in der oberen linken Ecke platziert und bis zur unteren rechten Ecke fortgesetzt.

```js
let w = 1.5; // width  (x)
let h = 0.7; // height (y)
let d = 1; // depth  (z)

let scaleMatrix = [w, 0, 0, 0, 0, h, 0, 0, 0, 0, d, 0, 0, 0, 0, 1];
```

[Auf JSFiddle ansehen](https://jsfiddle.net/tatumcreative/fndd6e1b/)

![Ein Beispiel für eine Matrixskalierung](matrix-scale.jpg)

## Rotationsmatrix

Eine **Rotationsmatrix** wird verwendet, um einen Punkt oder ein Objekt zu drehen. Rotationsmatrizen sehen etwas komplizierter aus als Skalierungs- und Translationsmatrizen. Sie verwenden trigonometrische Funktionen, um die Rotation auszuführen. Obwohl dieser Abschnitt die Schritte nicht bis ins Detail aufschlüsseln wird (sehen Sie sich [diesen Artikel auf Wolfram MathWorld](https://mathworld.wolfram.com/RotationMatrix.html) für eine solche Erklärung an), dient dieses Beispiel zur Veranschaulichung.

Hier ist zunächst ein Code, der einen Punkt um den Ursprung dreht, ohne Matrizen zu verwenden.

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

[Auf JSFiddle ansehen](https://jsfiddle.net/tatumcreative/9vr2dorz/)

![Ein Beispiel für Matrixrotation.](matrix-rotation.jpg)

Hier sind eine Reihe von Funktionen, die Rotationsmatrizen für die Drehung um jede der drei Achsen zurückgeben. Ein wichtiger Hinweis ist, dass keine Perspektive angewendet wird, sodass es sich möglicherweise noch nicht sehr 3D anfühlt. Die Flachheit entspricht dem, wenn eine Kamera wirklich nahe an ein entferntes Objekt heranzoomt — das Gefühl der Perspektive verschwindet.

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

[Auf JSFiddle ansehen](https://jsfiddle.net/tatumcreative/tk072doc/)

## Matrixzusammensetzung

Die wahre Stärke von Matrizen liegt in der **Matrixzusammensetzung**. Wenn Matrizen einer bestimmten Klasse miteinander multipliziert werden, bewahren sie die Geschichte der Transformationen und sind umkehrbar. Das bedeutet, dass wenn eine Übersetzungs-, Rotations- und Skalierungsmatrix alle zusammen kombiniert werden, die Reihenfolge der Matrizen umgekehrt und erneut angewendet wird, dann werden die ursprünglichen Punkte zurückgegeben.

Die Reihenfolge, in der Matrizen multipliziert werden, ist von Bedeutung. Beim Multiplizieren von Zahlen sind a \* b = c und b \* a = c beide wahr. Zum Beispiel 3 \* 4 = 12, und 4 \* 3 = 12. In der Mathematik würden diese Zahlen als **kommutativ** beschrieben werden. Matrizen sind _nicht_ garantiert gleich, wenn die Reihenfolge gewechselt wird, daher sind Matrizen **nicht kommutativ**.

Ein weiterer Brain-Teaser ist, dass die Matrixmultiplikation in WebGL und CSS in der umgekehrten Reihenfolge geschehen muss, in der die Operationen intuitiv ablaufen. Um beispielsweise etwas um 80% zu skalieren, es um 200 Pixel nach unten zu verschieben und dann um den Ursprung um 90 Grad zu drehen, sähe das in Pseudocode etwa wie folgt aus.

```plain
transformation = rotate * translate * scale
```

### Zusammensetzen mehrerer Transformationen

Die Funktion, die wir zur Zusammensetzung unserer Matrizen verwenden werden, ist `multiplyArrayOfMatrices()`, die Teil des Satzes von [Hilfsfunktionen](https://github.com/gregtatum/mdn-webgl) ist, die oben in diesem Artikel vorgestellt wurden. Sie nimmt ein Array von Matrizen und multipliziert sie miteinander und gibt das Ergebnis zurück. In WebGL-Shader-Code ist dies in die Sprache eingebaut und der `*` Operator kann verwendet werden. Zusätzlich verwendet dieses Beispiel `scale()` und `translate()` Funktionen, die Matrizen wie oben definiert zurückgeben.

```js
let transformMatrix = MDN.multiplyArrayOfMatrices([
  rotateAroundZAxis(Math.PI * 0.5), // Step 3: rotate around 90 degrees
  translate(0, 200, 0), // Step 2: move down 200 pixels
  scale(0.8, 0.8, 0.8), // Step 1: scale down
]);
```

[Auf JSFiddle ansehen](https://jsfiddle.net/tatumcreative/qxxg3yvc/)

![Ein Beispiel für Matrixzusammensetzung](matrix-composition.jpg)

Zum Schluss ein unterhaltsamer Schritt, um zu zeigen, wie Matrizen funktionieren: die Schritte umkehren, um die Matrix zurück zur ursprünglichen Einheitsmatrix zu bringen.

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

Matrizen sind wichtig, weil sie eine kleine Menge an Zahlen umfassen, die eine Vielzahl von Transformationen im Raum beschreiben können. Sie können leicht in Programmen ausgetauscht werden. Verschiedene Koordinatenräume können mit Matrizen beschrieben werden, und einige Matrixmultiplikationen verschieben eine Menge von Daten von einem Koordinatenraum in einen anderen. Matrizen merken sich effektiv jeden Teil der vorherigen Transformationen, die verwendet wurden, um sie zu erzeugen.

Für Anwendungen in WebGL ist die Grafikkarte besonders gut darin, eine große Anzahl von Punkten im Raum mithilfe von Matrizen zu multiplizieren. Verschiedene Operationen wie das Platzieren von Punkten, das Berechnen von Licht und das Posieren animierter Charaktere basieren alle auf diesem grundlegenden Werkzeug.
