---
title: Matrixmathematik für das Web
slug: Web/API/WebGL_API/Matrix_math_for_the_web
l10n:
  sourceCommit: 5b21648ec15ec74e617626355a5a60dd9e930500
---

{{DefaultAPISidebar("WebGL")}}

Matrizen können verwendet werden, um Transformationen von Objekten im Raum darzustellen, und werden für viele wesentliche Arten von Berechnungen beim Erstellen von Bildern und Visualisieren von Daten im Web verwendet. Dieser Artikel untersucht, wie Matrizen erstellt werden und wie sie mit [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) und dem `matrix3d`-Transformationstyp verwendet werden können.

Obwohl dieser Artikel [CSS](/de/docs/Web/CSS) verwendet, um Erklärungen zu vereinfachen, sind Matrizen ein Kernkonzept, das von vielen verschiedenen Technologien genutzt wird, einschließlich [WebGL](/de/docs/Web/API/WebGL_API), der [WebXR](/de/docs/Web/API/WebXR_Device_API) (VR und AR)-API und [GLSL-Shadern](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders). Dieser Artikel ist auch als ein [MDN-Inhaltskit](https://github.com/gregtatum/mdn-matrix-math) verfügbar. Die Live-Beispiele verwenden eine Sammlung von [Hilfsfunktionen](https://github.com/gregtatum/mdn-webgl), die unter einem globalen Objekt namens `MDN` verfügbar sind.

## Transformationsmatrizen

Es gibt viele Arten von Matrizen, aber die, die uns interessieren, sind die 3D-Transformationsmatrizen. Diese Matrizen bestehen aus einer Anordnung von 16 Werten in einem 4x4 Raster. In [JavaScript](/de/docs/Web/JavaScript) ist es einfach, eine Matrix als Array darzustellen.

Beginnen wir mit der Betrachtung der **Einheitsmatrix**. Dies ist eine spezielle Transformationsmatrix, die ähnlich wie die Zahl 1 bei der Skalarmultiplikation funktioniert; genauso wie n \* 1 = n, ergibt das Multiplizieren einer beliebigen Matrix mit der Einheitsmatrix eine Matrix, deren Werte mit der ursprünglichen Matrix übereinstimmen.

Die Einheitsmatrix sieht in JavaScript so aus:

```js
let identityMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
```

Wie sieht das Multiplizieren mit der Einheitsmatrix aus? Das einfachste Beispiel ist das Multiplizieren eines einzelnen Punktes mit der Einheitsmatrix. Da ein 3D-Punkt nur drei Werte benötigt (`x`, `y` und `z`), und die Transformationsmatrix eine 4×4-Werte-Matrix ist, müssen wir dem Punkt eine vierte Dimension hinzufügen. Diese Dimension wird konventionell als **Perspektive** bezeichnet und durch den Buchstaben `w` dargestellt. Für eine typische Position sorgt das Setzen von `w` auf 1 dafür, dass die Mathematik aufgeht.

Nach dem Hinzufügen der `w`-Komponente zu dem Punkt fällt auf, wie sauber die Matrix und der Punkt ausgerichtet sind:

```js-nolint
[1, 0, 0, 0,
 0, 1, 0, 0,
 0, 0, 1, 0,
 0, 0, 0, 1]

[4, 3, 2, 1] // Punkt bei [x, y, z, w]
```

Die `w`-Komponente hat einige zusätzliche Verwendungen, die außerhalb des Umfangs dieses Artikels liegen. Schauen Sie sich den Artikel über [WebGL-Modellansicht-Projektionen](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection) an, um zu erfahren, wie er nützlich sein kann.

### Multiplizieren einer Matrix und eines Punktes

In unserem Beispielcode haben wir eine Funktion definiert, um eine Matrix mit einem Punkt zu multiplizieren — `multiplyMatrixAndPoint()`:

```js
// point • matrix
function multiplyMatrixAndPoint(matrix, point) {
  // Geben Sie jedem Teil der Matrix einen einfachen Variablennamen, eine Spalten- und Zeilennummer
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

  // Jetzt einfache Namen für den Punkt festlegen
  let x = point[0];
  let y = point[1];
  let z = point[2];
  let w = point[3];

  // Multiplizieren Sie den Punkt mit jedem Teil der 1. Spalte und addieren Sie dann alles zusammen
  let resultX = x * c0r0 + y * c0r1 + z * c0r2 + w * c0r3;

  // Multiplizieren Sie den Punkt mit jedem Teil der 2. Spalte und addieren Sie dann alles zusammen
  let resultY = x * c1r0 + y * c1r1 + z * c1r2 + w * c1r3;

  // Multiplizieren Sie den Punkt mit jedem Teil der 3. Spalte und addieren Sie dann alles zusammen
  let resultZ = x * c2r0 + y * c2r1 + z * c2r2 + w * c2r3;

  // Multiplizieren Sie den Punkt mit jedem Teil der 4. Spalte und addieren Sie dann alles zusammen
  let resultW = x * c3r0 + y * c3r1 + z * c3r2 + w * c3r3;

  return [resultX, resultY, resultZ, resultW];
}
```

> [!NOTE]
> Unsere Beispiele auf dieser Seite verwenden Zeilenvektoren, um Punkte darzustellen, und Rechtsmultiplikation, um Transformationsmatrizen anzuwenden. Das bedeutet, das oben gezeigte Beispiel führt `point * matrix` aus, wobei `point` ein 4x1-Zeilenvektor ist. Wenn Sie Spaltenvektoren und Linksmultiplikation verwenden möchten, müssen Sie die Multiplikationsfunktion entsprechend anpassen und jede unten eingeführte Matrix transponieren.
>
> Beispiel: Die unten eingeführte [`translationMatrix`](#translationsmatrix) sieht ursprünglich so aus:
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

Nun können wir mit der Funktion oben einen Punkt mit der Matrix multiplizieren. Wenn wir die Einheitsmatrix verwenden, sollte ein Punkt zurückgegeben werden, der mit dem Original identisch ist, da ein Punkt (oder eine andere Matrix), der mit der Einheitsmatrix multipliziert wird, immer gleich sich selbst ist:

```js
// setzt identityResult auf [4,3,2,1]
let identityResult = multiplyMatrixAndPoint(identityMatrix, [4, 3, 2, 1]);
```

Das Zurückgeben des gleichen Punktes ist nicht sehr nützlich, aber es gibt andere Arten von Matrizen, die hilfreiche Operationen auf Punkten ausführen können. Die nächsten Abschnitte werden einige dieser Matrizen demonstrieren.

### Multiplizieren zweier Matrizen

Zusätzlich zur Multiplikation einer Matrix mit einem Punkt können Sie auch zwei Matrizen miteinander multiplizieren. Die Funktion von oben kann dabei helfen:

```js
//matrixB • matrixA
function multiplyMatrices(matrixA, matrixB) {
  // Zerschneiden Sie die zweite Matrix in Zeilen
  let row0 = [matrixB[0], matrixB[1], matrixB[2], matrixB[3]];
  let row1 = [matrixB[4], matrixB[5], matrixB[6], matrixB[7]];
  let row2 = [matrixB[8], matrixB[9], matrixB[10], matrixB[11]];
  let row3 = [matrixB[12], matrixB[13], matrixB[14], matrixB[15]];

  // Multiplizieren Sie jede Zeile mit matrixA
  let result0 = multiplyMatrixAndPoint(matrixA, row0);
  let result1 = multiplyMatrixAndPoint(matrixA, row1);
  let result2 = multiplyMatrixAndPoint(matrixA, row2);
  let result3 = multiplyMatrixAndPoint(matrixA, row3);

  // Wandeln Sie die Ergebniszeilen zurück in eine einzelne Matrix
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

// Gibt ein neues Array zurück, das someMatrix entspricht
let someMatrixResult = multiplyMatrices(identityMatrix, someMatrix);
```

> [!WARNING]
> Diese Matrixfunktionen sind zur Erklärungsläufigkeit und nicht zur Geschwindigkeit oder Speicherverwaltung geschrieben. Diese Funktionen erzeugen viele neue Arrays, was bei Echtzeitoperationen aufgrund der Speicherbereinigung besonders teuer sein kann. In realem Produktionscode wäre es am besten, optimierte Funktionen zu verwenden. [glMatrix](https://glmatrix.net/) ist ein Beispiel für eine Bibliothek, die auf Geschwindigkeit und Leistung ausgerichtet ist. Der Fokus in der glMatrix-Bibliothek liegt darauf, Ziel-Arrays vor dem Aktualisierungsschleife zuzuweisen.

## Translationsmatrix

Eine **Translationsmatrix** basiert auf der Einheitsmatrix und wird in der 3D-Grafik verwendet, um einen Punkt oder ein Objekt in einer oder mehreren der drei Richtungen (`x`, `y` und/oder `z`) zu bewegen. Der einfachste Weg, eine Translation zu verstehen, ist wie das Aufheben einer Kaffeetasse. Die Kaffeetasse muss aufrecht gehalten und gleich ausgerichtet sein, damit kein Kaffee verschüttet wird. Sie kann vom Tisch in die Luft und durch den Raum bewegt werden.

Sie können den Kaffee nicht nur mit einer Translationsmatrix trinken, denn um ihn zu trinken, müssen Sie die Tasse kippen oder drehen können, um den Kaffee in Ihren Mund zu gießen. Wir werden die Art der Matrix (geschickt als **[Rotationsmatrix](#rotationsmatrix)** bezeichnet), die Sie dazu verwenden, später betrachten.

```js
let x = 50;
let y = 100;
let z = 0;

let translationMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
```

Platzieren Sie die Entfernungen entlang der drei Achsen an den entsprechenden Positionen in der Translationsmatrix, dann multiplizieren Sie sie mit dem Punkt oder der Matrix, die Sie durch den 3D-Raum bewegen müssen.

## Manipulieren des DOM mit einer Matrix

Ein wirklich einfacher Weg, eine Matrix zu verwenden, ist die Verwendung der CSS {{cssxref("transform-function/matrix3d","matrix3d()")}} {{cssxref("transform")}}. Zuerst richten wir ein einfaches {{htmlelement("div")}} mit etwas Inhalt ein. Der Stil wird nicht angezeigt, aber er ist auf eine feste Breite und Höhe eingestellt und auf der Seite zentriert. Das `<div>` hat einen Übergang für die Transformation, sodass die Matrix animiert ist und leicht zu erkennen ist, was gemacht wird.

```html
<div id="move-me" class="transformable">
  <h2>Bewegen Sie mich mit einer Matrix</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</p>
</div>
```

Schließlich generieren wir für jedes Beispiel eine 4x4-Matrix und aktualisieren dann den Stil des `<div>`, um eine Transformation darauf anzuwenden, die auf `matrix3d` gesetzt ist. Beachten Sie, dass die Matrix, obwohl sie aus 4 Zeilen und 4 Spalten besteht, zu einer einzigen Zeile mit 16 Werten zusammengeklappt wird. Matrizen werden in JavaScript immer in eindimensionalen Listen gespeichert.

```js
// Erstellen Sie die matrix3d-Stilregel aus einem Matrix-Array
function matrixArrayToCssMatrix(array) {
  return `matrix3d(${array.join(",")})`;
}

// Fassen Sie das DOM-Element
let moveMe = document.getElementById("move-me");

// Gibt ein Ergebnis wie aus: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 50, 100, 0, 1);"
let matrix3dRule = matrixArrayToCssMatrix(translationMatrix);

// Setzen Sie die Transformation
moveMe.style.transform = matrix3dRule;
```

[Auf JSFiddle ansehen](https://jsfiddle.net/tatumcreative/g24mgw6y/)

![Ein Beispiel für Matrixtranslation](matrix-translation.jpg)

## Skalierungsmatrix

Eine **Skalierungsmatrix** vergrößert oder verkleinert etwas in einer oder mehreren der drei Dimensionen: Breite, Höhe und Tiefe. In typischen (kartesischen) Koordinaten verursacht dies das Strecken oder Zusammenziehen des Objekts in den entsprechenden Richtungen.

Die Menge der Änderung, die auf jede der Breite, Höhe und Tiefe angewendet werden soll, wird diagonal beginnend an der oberen linken Ecke platziert und bewegt sich nach unten bis zur unteren rechten Ecke.

```js
let w = 1.5; // Breite (x)
let h = 0.7; // Höhe (y)
let d = 1; // Tiefe (z)

let scaleMatrix = [w, 0, 0, 0, 0, h, 0, 0, 0, 0, d, 0, 0, 0, 0, 1];
```

[Auf JSFiddle ansehen](https://jsfiddle.net/tatumcreative/fndd6e1b/)

![Ein Beispiel für Matrixskalierung](matrix-scale.jpg)

## Rotationsmatrix

Eine **Rotationsmatrix** wird verwendet, um einen Punkt oder ein Objekt zu drehen. Rotationsmatrizen sehen ein wenig komplizierter aus als Skalierungs- und Transformationsmatrizen. Sie verwenden trigonometrische Funktionen, um die Drehung durchzuführen. Obwohl dieser Abschnitt die Schritte nicht bis ins kleinste Detail aufschlüsselt (lesen Sie [diesen Artikel auf Wolfram MathWorld](https://mathworld.wolfram.com/RotationMatrix.html) für eine detaillierte Erklärung), nehmen Sie dieses Beispiel zur Veranschaulichung.

Hier ist zunächst Code, der einen Punkt um den Ursprung ohne Matrizen dreht.

```js
// Manuelles Drehen eines Punktes um den Ursprung ohne Matrizen
let point = [10, 2];

// Berechnen Sie die Entfernung vom Ursprung
let distance = Math.sqrt(point[0] * point[0] + point[1] * point[1]);

// Das Äquivalent von 60 Grad in Radiant
let rotationInRadians = Math.PI / 3;

let transformedPoint = [
  Math.cos(rotationInRadians) * distance,
  Math.sin(rotationInRadians) * distance,
];
```

Es ist möglich, diese Schritte in einer Matrix zu kodieren und sie für jede der `x`-, `y`- und `z`-Dimensionen durchzuführen. Unten ist die Darstellung einer Drehung gegen den Uhrzeigersinn um die Z-Achse in einem linkshändigen Koordinatensystem dargestellt:

```js
let sin = Math.sin;
let cos = Math.cos;

// HINWEIS: Bei diesen Transformationen gibt es keine Perspektive, sodass eine Drehung
//          zu diesem Zeitpunkt nur das Verkleinern des Divs zu sein scheint

let a = Math.PI * 0.3; // Drehungsbetrag in Radiant

// Drehen um die Z-Achse
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

Hier sind eine Reihe von Funktionen, die Rotationsmatrizen für die Drehung um jede der drei Achsen zurückgeben. Ein wichtiger Hinweis ist, dass keine Perspektive angewendet wird, sodass es noch nicht sehr 3D anfühlt. Die Flachheit ist gleichbedeutend damit, wenn eine Kamera sehr nah auf ein entferntes Objekt zoomt — der Sinn für Perspektive verschwindet.

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

## Matrixkomposition

Die wahre Kraft der Matrizen liegt in der **Matrixkomposition**. Wenn Matrizen einer bestimmten Klasse miteinander multipliziert werden, behalten sie die Geschichte der Transformationen bei und sind umkehrbar. Das bedeutet, wenn eine Translations-, Rotations- und Skalierungsmatrix zusammengefügt werden, und die Reihenfolge der Matrizen umgekehrt und erneut angewendet wird, dann werden die ursprünglichen Punkte zurückgegeben.

Die Reihenfolge, in der Matrizen multipliziert werden, spielt eine Rolle. Beim Multiplizieren von Zahlen gilt, dass a \* b = c, und b \* a = c wahr sind. Zum Beispiel ist 3 \* 4 = 12, und 4 \* 3 = 12. In der Mathematik würden diese Zahlen als **kommutativ** bezeichnet. Matrizen sind _nicht_ garantiert gleich, wenn die Reihenfolge umgekehrt wird, daher sind Matrizen **nicht kommutativ**.

Ein weiterer Denksport ist, dass die Matrixmultiplikation in WebGL und CSS in umgekehrter Reihenfolge erfolgen muss, als die Operationen intuitiv stattfinden. Zum Beispiel, um etwas um 80% zu verkleinern, um 200 Pixel nach unten zu verschieben und dann um den Ursprung um 90 Grad zu drehen, sähe das im Pseudocode wie folgt aus.

```plain
transformation = rotate * translate * scale
```

### Zusammensetzen mehrerer Transformationen

Die Funktion, die wir zum Zusammensetzen unserer Matrizen verwenden werden, ist `multiplyArrayOfMatrices()`, die Teil der [Hilfsfunktionen](https://github.com/gregtatum/mdn-webgl) ist, die oben in diesem Artikel eingeführt wurden. Sie nimmt ein Array von Matrizen und multipliziert sie miteinander, wobei das Ergebnis zurückgegeben wird. In WebGL-Shader-Code ist dies in die Sprache integriert und der `*`-Operator kann verwendet werden. Zusätzlich verwendet dieses Beispiel `scale()` und `translate()` Funktionen, die Matrizen zurückgeben, wie oben definiert.

```js
let transformMatrix = MDN.multiplyArrayOfMatrices([
  rotateAroundZAxis(Math.PI * 0.5), // Schritt 3: um 90 Grad drehen
  translate(0, 200, 0), // Schritt 2: 200 Pixel nach unten verschieben
  scale(0.8, 0.8, 0.8), // Schritt 1: verkleinern
]);
```

[Auf JSFiddle ansehen](https://jsfiddle.net/tatumcreative/qxxg3yvc/)

![Ein Beispiel für Matrixkomposition](matrix-composition.jpg)

Schließlich, ein lustiger Schritt, um zu zeigen, wie Matrizen funktionieren, ist das Zurücksetzen der Schritte, um die Matrix zur ursprünglichen Einheitsmatrix zurückzubringen.

```js
let transformMatrix = MDN.multiplyArrayOfMatrices([
  scale(1.25, 1.25, 1.25), // Schritt 6: wieder vergrößern
  translate(0, -200, 0), // Schritt 5: wieder nach oben verschieben
  rotateAroundZAxis(-Math.PI * 0.5), // Schritt 4: zurückdrehen
  rotateAroundZAxis(Math.PI * 0.5), // Schritt 3: um 90 Grad drehen
  translate(0, 200, 0), // Schritt 2: 200 Pixel nach unten verschieben
  scale(0.8, 0.8, 0.8), // Schritt 1: verkleinern
]);
```

## Warum Matrizen wichtig sind

Matrizen sind wichtig, weil sie eine kleine Menge von Zahlen umfassen, die eine Vielzahl von Transformationen im Raum beschreiben können. Sie können leicht in Programmen ausgetauscht werden. Unterschiedliche Koordinatenräume können mit Matrizen beschrieben werden, und einige Matrixmultiplikationen bewegen einen Satz von Daten von einem Koordinatenraum in einen anderen. Matrizen erinnern effektiv an jeden Teil der vorherigen Transformationen, die verwendet wurden, um sie zu erzeugen.

Für den Einsatz in WebGL ist die Grafikkarte besonders gut darin, eine große Anzahl von Punkten im Raum mit Matrizen zu multiplizieren. Verschiedene Operationen wie die Positionierung von Punkten, die Berechnung von Beleuchtung und das Posieren von animierten Charakteren basieren alle auf diesem grundlegenden Werkzeug.
