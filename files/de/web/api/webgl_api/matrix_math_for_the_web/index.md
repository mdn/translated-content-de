---
title: Matrix-Mathematik für das Web
slug: Web/API/WebGL_API/Matrix_math_for_the_web
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{DefaultAPISidebar("WebGL")}}

Matrizen können verwendet werden, um Transformationen von Objekten im Raum darzustellen und sind ein wesentliches Hilfsmittel für viele Arten von Berechnungen bei der Erstellung von Bildern und der Visualisierung von Daten im Web. Dieser Artikel untersucht, wie Matrizen erstellt und in Verbindung mit [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) und dem `matrix3d`-Transformationstyp verwendet werden können.

Obwohl dieser Artikel [CSS](/de/docs/Web/CSS) verwendet, um Erklärungen zu vereinfachen, sind Matrizen ein Kernkonzept, das von vielen verschiedenen Technologien genutzt wird, einschließlich [WebGL](/de/docs/Web/API/WebGL_API), der [WebXR](/de/docs/Web/API/WebXR_Device_API) (VR und AR) API und [GLSL-Shadern](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders). Dieser Artikel ist auch als [MDN Content Kit](https://github.com/gregtatum/mdn-matrix-math) verfügbar. Die Live-Beispiele verwenden eine Sammlung von [Hilfsfunktionen](https://github.com/gregtatum/mdn-webgl), die unter einem globalen Objekt namens `MDN` verfügbar sind.

## Transformationsmatrizen

Es gibt viele Arten von Matrizen, aber die, die uns interessieren, sind die 3D-Transformationsmatrizen. Diese Matrizen bestehen aus einem Satz von 16 Werten, die in einem 4×4-Raster angeordnet sind. In [JavaScript](/de/docs/Web/JavaScript) lässt sich eine Matrix leicht als Array darstellen.

Beginnen wir mit der **Einheitsmatrix**. Dies ist eine spezielle Transformationsmatrix, die ähnlich wie die Zahl 1 in der Skalarmultiplikation funktioniert; so wie n \* 1 = n, ergibt das Multiplizieren einer beliebigen Matrix mit der Einheitsmatrix eine resultierende Matrix, deren Werte mit der ursprünglichen Matrix übereinstimmen.

Die Einheitsmatrix sieht in JavaScript so aus:

```js-nolint
const identityMatrix = [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1,
];
```

Wie sieht das Multiplizieren mit der Einheitsmatrix aus? Das einfachste Beispiel ist das Multiplizieren eines einzelnen Punkts mit der Einheitsmatrix. Da ein 3D-Punkt nur drei Werte benötigt (`x`, `y` und `z`), und die Transformationsmatrix eine 4×4-Wertematrix ist, müssen wir dem Punkt eine vierte Dimension hinzufügen. Diese Dimension wird üblicherweise als **Perspektive** bezeichnet und mit dem Buchstaben `w` dargestellt. Für eine typische Position wird `w` auf 1 gesetzt, um die Mathematik aufgehen zu lassen.

Nachdem Sie die `w`-Komponente zum Punkt hinzugefügt haben, sehen Sie, wie ordentlich sich die Matrix und der Punkt anordnen:

```js-nolint
[1, 0, 0, 0,
 0, 1, 0, 0,
 0, 0, 1, 0,
 0, 0, 0, 1]

[4, 3, 2, 1] // Point at [x, y, z, w]
```

Die `w`-Komponente hat einige zusätzliche Anwendungen, die nicht in den Umfang dieses Artikels fallen. Lesen Sie den Artikel über die [WebGL Modell-View-Projektion](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection), um zu sehen, wie diese nützlich sein kann.

### Multiplizieren einer Matrix und eines Punktes

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
> Unsere Beispiele auf dieser Seite verwenden Zeilenvektoren, um Punkte darzustellen, und führen die rechte Multiplikation durch, um Transformationsmatrizen anzuwenden. Das heißt, das obige Beispiel macht `point * matrix`, wobei `point` ein 4x1-Zeilenvektor ist. Wenn Sie Spaltenvektoren und linke Multiplikation verwenden möchten, müssen Sie die Multiplikationsfunktion entsprechend anpassen und jede der unten eingeführten Matrizen transponieren.
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

Nun können wir mit der oben genannten Funktion einen Punkt mit der Matrix multiplizieren. Beim Verwenden der Einheitsmatrix sollte ein Punkt ausgegeben werden, der mit dem Original identisch ist, da ein Punkt (oder eine beliebige andere Matrix), multipliziert mit der Einheitsmatrix, immer gleich sich selbst ist:

```js
// sets identityResult to [4,3,2,1]
const identityResult = multiplyMatrixAndPoint(identityMatrix, [4, 3, 2, 1]);
```

Den gleichen Punkt zurückzugeben, ist nicht sehr nützlich, aber es gibt andere Arten von Matrizen, die hilfreiche Operationen auf Punkten durchführen können. In den nächsten Abschnitten werden einige dieser Matrizen demonstriert.

### Zwei Matrizen multiplizieren

Neben der Multiplikation einer Matrix mit einem Punkt können Sie auch zwei Matrizen miteinander multiplizieren. Die oben genannte Funktion kann dabei helfen, diesen Prozess durchzuführen:

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

Sehen wir uns diese Funktion in Aktion an:

```js
const someMatrix = [4, 0, 0, 0, 0, 3, 0, 0, 0, 0, 5, 0, 4, 8, 4, 1];

const identityMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Returns a new array equivalent to someMatrix
const someMatrixResult = multiplyMatrices(identityMatrix, someMatrix);
```

> [!WARNING]
> Diese Matrixfunktionen sind für die Verständlichkeit der Erklärung geschrieben, nicht für Geschwindigkeit oder Speichermanagement. Diese Funktionen erzeugen viele neue Arrays, was besonders für Echtzeitoperationen aufgrund der Speicherbereinigung kostspielig sein kann. In echtem Produktivcode wäre es am besten, optimierte Funktionen zu verwenden. [glMatrix](https://glmatrix.net/) ist ein Beispiel für eine Bibliothek, die auf Geschwindigkeit und Leistung abzielt. Der Fokus in der glMatrix-Bibliothek liegt darauf, Zielarrays vor der Aktualisierungsschleife zuzuweisen.

## Translationsmatrix

Eine **Translationsmatrix** basiert auf der Einheitsmatrix und wird in 3D-Grafiken verwendet, um einen Punkt oder ein Objekt in eine oder mehrere der drei Richtungen (`x`, `y` und/oder `z`) zu bewegen. Die einfachste Art, über eine Translation nachzudenken, ist wie beim Hochheben einer Kaffeetasse. Die Kaffeetasse muss aufrecht gehalten und in der gleichen Ausrichtung gehalten werden, damit kein Kaffee verschüttet wird. Sie kann in die Luft über den Tisch gehoben und im Raum bewegt werden.

Man kann den Kaffee tatsächlich nicht nur mit einer Translationsmatrix trinken, weil man die Tasse kippen oder drehen muss, um den Kaffee in den Mund zu gießen. Wir werden später die Art von Matrix betrachten (clevererweise **[Rotationsmatrix](#rotationsmatrix)** genannt), die Sie dafür verwenden.

```js
const x = 50;
const y = 100;
const z = 0;

const translationMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
```

Setzen Sie die Abstände entlang der drei Achsen in die entsprechenden Positionen in der Translationsmatrix und multiplizieren Sie sie dann mit dem Punkt oder der Matrix, die Sie im 3D-Raum bewegen müssen.

## Manipulation des DOM mit einer Matrix

Eine sehr einfache Möglichkeit, eine Matrix zu verwenden, besteht darin, die CSS {{cssxref("transform-function/matrix3d","matrix3d()")}} {{cssxref("transform")}} zu verwenden. Zuerst richten wir ein einfaches {{htmlelement("div")}} mit etwas Inhalt ein. Der Stil wird nicht angezeigt, aber es ist auf eine feste Breite und Höhe eingestellt und auf der Seite zentriert. Das `<div>` hat eine Übergangseinstellung für die Transformation, sodass die Matrix animiert wird, um leicht zu sehen, was getan wird.

```html
<div id="move-me" class="transformable">
  <h2>Move me with a matrix</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</p>
</div>
```

Schließlich generieren wir für jedes Beispiel eine 4×4-Matrix und aktualisieren den Stil des `<div>`, um eine darauf angewendete Transformation zu haben, die auf eine `matrix3d` gesetzt ist. Beachten Sie, dass auch wenn die Matrix aus 4 Zeilen und 4 Spalten besteht, sie zu einer einzigen Zeile mit 16 Werten zusammenklappt. Matrizen werden in JavaScript immer in eindimensionalen Listen gespeichert.

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

![Ein Beispiel für eine Matrix-Translation](matrix-translation.jpg)

## Skalierungsmatrix

Eine **Skalierungsmatrix** vergrößert oder verkleinert etwas in einer oder mehreren der drei Dimensionen: Breite, Höhe und Tiefe. In typischen (kartesischen) Koordinaten bewirkt dies eine Streckung oder Schrumpfung des Objekts in den entsprechenden Richtungen.

Die Menge der Veränderung, die auf jede der Breiten-, Höhen- und Tiefenrichtungen angewendet wird, wird diagonal beginnend in der oberen linken Ecke eingetragen und auf dem Weg zur unteren rechten Ecke fortgesetzt.

```js
const w = 1.5; // width  (x)
const h = 0.7; // height (y)
const d = 1; // depth  (z)

const scaleMatrix = [w, 0, 0, 0, 0, h, 0, 0, 0, 0, d, 0, 0, 0, 0, 1];
```

[Ansehen auf JSFiddle](https://jsfiddle.net/tatumcreative/fndd6e1b/)

![Ein Beispiel für eine Matrix-Skalierung](matrix-scale.jpg)

## Rotationsmatrix

Eine **Rotationsmatrix** wird verwendet, um einen Punkt oder ein Objekt zu drehen. Rotationsmatrizen sehen etwas komplizierter aus als Skalierungs- und Transformationsmatrizen. Sie verwenden trigonometrische Funktionen, um die Drehung auszuführen. Während dieser Abschnitt die Schritte nicht im Detail aufschlüsselt (sehen Sie sich [diesen Artikel auf Wolfram MathWorld](https://mathworld.wolfram.com/RotationMatrix.html) für genauere Details an), nehmen Sie dieses Beispiel zur Veranschaulichung.

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

Es ist möglich, diese Art von Schritten in einer Matrix zu kodieren und dies für jede der `x`, `y` und `z` Dimensionen zu tun. Unten ist die Darstellung einer Drehung gegen den Uhrzeigersinn um die Z-Achse in einem linkshändigen Koordinatensystem:

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

Hier ist eine Reihe von Funktionen, die Rotationsmatrizen für die Drehung um jede der drei Achsen zurückgeben. Ein wesentlicher Hinweis ist, dass keine Perspektive angewendet wird, sodass es sich noch nicht sehr 3D anfühlen könnte. Die Flachheit ist vergleichbar damit, dass eine Kamera sehr nah an ein Objekt in der Ferne heranzoomt — das Gefühl der Perspektive verschwindet.

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

Die wahre Stärke der Matrizen liegt in der **Matrixkomposition**. Wenn Matrizen einer bestimmten Klasse miteinander multipliziert werden, bewahren sie die Historie der Transformationen und sind umkehrbar. Das bedeutet, dass, wenn eine Translations-, Rotations- und Skalierungsmatrix miteinander kombiniert werden, beim Rückwärts-Anwenden und erneuten Anwenden der umgekehrten Reihenfolge die ursprünglichen Punkte zurückgegeben werden.

Die Reihenfolge, in der Matrizen multipliziert werden, ist wichtig. Wenn Zahlen multipliziert werden, ist a \* b = c, und b \* a = c in beiden Fällen wahr. Zum Beispiel 3 \* 4 = 12, und 4 \* 3 = 12. In der Mathematik würden diese Zahlen als **kommutativ** beschrieben. Matrizen sind _nicht_ garantiert gleich, wenn die Reihenfolge geändert wird, daher sind Matrizen **nicht-kommutativ**.

Eine weitere Herausforderung dabei ist, dass die Matrixmultiplikation in WebGL und CSS in der umgekehrten Reihenfolge erfolgen muss, als die Operationen intuitiv erfolgen. Zum Beispiel würde das Skalieren um 80 %, das Verschieben um 200 Pixel nach unten und dann das Drehen um den Ursprung um 90 Grad ungefähr so im Pseudocode aussehen:

```plain
transformation = rotate * translate * scale
```

### Mehrere Transformationen zusammensetzen

Die Funktion, die wir zum Zusammensetzen unserer Matrizen verwenden werden, ist `multiplyArrayOfMatrices()`, die Teil der oben in diesem Artikel eingeführten [Hilfsfunktionen](https://github.com/gregtatum/mdn-webgl) ist. Sie nimmt ein Array von Matrizen und multipliziert sie miteinander, um das Ergebnis zurückzugeben. In WebGL-Shader-Code ist dies in die Sprache integriert und der `*`-Operator kann verwendet werden. Zusätzlich verwendet dieses Beispiel `scale()` und `translate()` Funktionen, die Matrizen wie oben definiert zurückgeben.

```js
const transformMatrix = MDN.multiplyArrayOfMatrices([
  rotateAroundZAxis(Math.PI * 0.5), // Step 3: rotate around 90 degrees
  translate(0, 200, 0), // Step 2: move down 200 pixels
  scale(0.8, 0.8, 0.8), // Step 1: scale down
]);
```

[Ansehen auf JSFiddle](https://jsfiddle.net/tatumcreative/qxxg3yvc/)

![Ein Beispiel für Matrixkomposition](matrix-composition.jpg)

Zum Schluss ist ein unterhaltsamer Schritt, um zu zeigen, wie Matrizen funktionieren, die Schritte umzukehren, um die Matrix auf die ursprüngliche Einheitsmatrix zurückzusetzen.

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

Matrizen sind wichtig, weil sie eine kleine Menge von Zahlen bilden, die eine Vielzahl von Transformationen im Raum beschreiben können. Sie können leicht in Programmen weitergegeben werden. Verschiedene Koordinatenräume können mit Matrizen beschrieben werden, und eine entsprechende Matrixmultiplikation verschiebt einen Datensatz von einem Koordinatenraum in einen anderen. Matrizen merken sich effektiv jeden Teil der vorherigen Transformationen, die zu ihrer Erstellung verwendet wurden.

Für Anwendungen in WebGL ist die Grafikkarte besonders gut darin, eine große Anzahl von Punkten im Raum mithilfe von Matrizen zu multiplizieren. Verschiedene Operationen wie das Positionieren von Punkten, das Berechnen von Beleuchtungen und das Posen von animierten Charakteren basieren alle auf diesem grundlegenden Werkzeug.
