---
title: DOMMatrixReadOnly
slug: Web/API/DOMMatrixReadOnly
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("Geometry Interfaces")}}

Die **`DOMMatrixReadOnly`**-Schnittstelle repräsentiert eine unveränderbare 4×4-Matrix, die für 2D- und 3D-Operationen geeignet ist. Die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Schnittstelle, die auf `DOMMatrixReadOnly` basiert, fügt [Mutabilität](https://en.wikipedia.org/wiki/Immutable_object) hinzu, wodurch Sie die Matrix nach ihrer Erstellung verändern können.

Diese Schnittstelle sollte innerhalb von [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar sein, obwohl einige Implementierungen dies noch nicht zulassen.

## Konstruktor

- [`DOMMatrixReadOnly()`](/de/docs/Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly)
  - : Erstellt ein neues `DOMMatrixReadOnly`-Objekt.

## Instanzeigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- `is2D` {{ReadOnlyInline}}
  - : Ein boolesches Flag, dessen Wert `true` ist, wenn die Matrix als 2D-Matrix initialisiert wurde. Wenn `false`, ist die Matrix 3D.
- `isIdentity` {{ReadOnlyInline}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die Matrix die [Einheitsmatrix](https://en.wikipedia.org/wiki/Identity_matrix) ist. Die Einheitsmatrix ist eine, in der jeder Wert `0` ist, _außer_ denen auf der Hauptdiagonale von der oberen linken zur unteren rechten Ecke (mit anderen Worten, wo die Offsets in jeder Richtung gleich sind).
- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Doppelpräzisions-Gleitkommawerte, die jede Komponente einer 4×4-Matrix darstellen, wobei `m11` bis `m14` die erste Spalte und `m21` bis `m24` die zweite Spalte usw. sind.
- `a`, `b`, `c`, `d`, `e`, `f`

  - : Doppelpräzisions-Gleitkommawerte, die die Komponenten einer 4×4-Matrix darstellen, die erforderlich sind, um 2D-Rotationen und -Translationen durchzuführen. Diese sind Aliase für bestimmte Komponenten einer 4×4-Matrix, wie unten gezeigt.

    | 2D  | 3D-Äquivalent |
    | --- | ------------- |
    | `a` | `m11`         |
    | `b` | `m12`         |
    | `c` | `m21`         |
    | `d` | `m22`         |
    | `e` | `m41`         |
    | `f` | `m42`         |

## Instanzmethoden

_Diese Schnittstelle erbt keine Methoden. Keine der folgenden Methoden ändert die ursprüngliche Matrix._

- [`DOMMatrixReadOnly.flipX()`](/de/docs/Web/API/DOMMatrixReadOnly/flipX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch das Spiegeln der Quellmatrix um ihre X-Achse erstellt wird. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(-1, 0, 0, 1, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.flipY()`](/de/docs/Web/API/DOMMatrixReadOnly/flipY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch das Spiegeln der Quellmatrix um ihre Y-Achse erstellt wird. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(1, 0, 0, -1, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.inverse()`](/de/docs/Web/API/DOMMatrixReadOnly/inverse)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch das Invertieren der Quellmatrix erstellt wird. Wenn die Matrix nicht invertiert werden kann, sind die Komponenten der neuen Matrix alle auf `NaN` gesetzt und ihre `is2D`-Eigenschaft ist auf `false` gesetzt. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.multiply()`](/de/docs/Web/API/DOMMatrixReadOnly/multiply)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Berechnen des Skalarprodukts der Quellmatrix und der angegebenen Matrix: `A⋅B` erstellt wird. Wenn keine Matrix als Multiplikator angegeben wird, wird die Matrix mit einer Matrix multipliziert, in der jedes Element `0` ist, _außer_ der unteren rechten Ecke und dem Element direkt darüber und links davon: `m33` und `m34`. Diese haben den Standardwert `1`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotateAxisAngle()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateAxisAngle)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Quellmatrix um den angegebenen Winkel um den angegebenen Vektor erstellt wird. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch das Drehen der Quellmatrix um jede ihrer Achsen um die angegebene Anzahl von Grad erstellt wird. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotateFromVector()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateFromVector)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Quellmatrix um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` erstellt wird. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalieren der Quellmatrix um den für jede Achse angegebenen Betrag erstellt wird, zentriert auf den angegebenen Ursprung. Standardmäßig werden die X- und Z-Achsen um `1` skaliert und die Y-Achse hat keinen standardmäßigen Skalierungswert. Der Standardursprung ist `(0, 0, 0)`. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.scale3d()`](/de/docs/Web/API/DOMMatrixReadOnly/scale3d)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalieren der Quell-3D-Matrix um den angegebenen Faktor entlang aller ihrer Achsen erstellt wird, zentriert auf den angegebenen Ursprungspunkt. Der Standardursprung ist `(0, 0, 0)`. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.scaleNonUniform()`](/de/docs/Web/API/DOMMatrixReadOnly/scaleNonUniform) {{deprecated_inline}}
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Skalierung auf die X-, Y- und Z-Achsen erstellt wird, zentriert am angegebenen Ursprung. Standardmäßig sind die Skalierungsfaktoren der Y- und Z-Achse jeweils `1`, aber der Skalierungsfaktor für X muss angegeben werden. Der Standardursprung ist `(0, 0, 0)`. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Schrägtransformation auf die Quellmatrix entlang ihrer X-Achse erstellt wird. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Schrägtransformation auf die Quellmatrix entlang ihrer Y-Achse erstellt wird. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.toFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat32Array)
  - : Gibt ein neues {{jsxref("Float32Array")}} zurück, das alle 16 Elemente (`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`) enthält, aus denen die Matrix besteht. Die Elemente werden in der Reihenfolge des column-major-Formats (colexographischer Zugriff oder "colex") in das Array gespeichert. (Mit anderen Worten, von oben nach unten durch die erste Spalte, dann die zweite Spalte und so weiter.)
- [`DOMMatrixReadOnly.toFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat64Array)
  - : Gibt ein neues {{jsxref("Float64Array")}} zurück, das alle 16 Elemente (`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`) enthält, aus denen die Matrix besteht. Die Elemente werden in der Reihenfolge des column-major-Formats (colexographischer Zugriff oder "colex") in das Array gespeichert. (Mit anderen Worten, von oben nach unten durch die erste Spalte, dann die zweite Spalte und so weiter.)
- [`DOMMatrixReadOnly.toJSON()`](/de/docs/Web/API/DOMMatrixReadOnly/toJSON)
  - : Gibt eine JSON-Darstellung des `DOMMatrixReadOnly`-Objekts zurück.
- [`DOMMatrixReadOnly.toString()`](/de/docs/Web/API/DOMMatrixReadOnly/toString)

  - : Erstellt und gibt einen String zurück, der eine Zeichenfolgendarstellung der Matrix in der CSS-Matrix-Syntax enthält, wobei die geeignete CSS-Matrix-Notation verwendet wird. Siehe die {{cssxref("transform-function/matrix", "matrix()")}} CSS-Funktion für Details zu dieser Syntax.

    Für eine 2D-Matrix werden die Elemente `a` bis `f` aufgelistet, insgesamt sechs Werte und die Form `matrix(a, b, c, d, e, f)`.

    Für eine 3D-Matrix enthält der zurückgegebene String alle 16 Elemente und nimmt die Form `matrix3d(m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44)` an. Siehe die CSS-Funktion {{cssxref("transform-function/matrix3d", "matrix3d()")}} für Details zur Syntax der 3D-Notation.

    Wirft eine `InvalidStateError`-Ausnahme, wenn eines der Elemente in der Matrix nicht endlich ist (selbst wenn bei einer 2D-Matrix die nicht-finite Werte in Elementen liegen, die von der 2D-Matrixdarstellung nicht verwendet werden).

- [`DOMMatrixReadOnly.transformPoint()`](/de/docs/Web/API/DOMMatrixReadOnly/transformPoint)
  - : Transformiert den angegebenen Punkt mithilfe der Matrix und gibt ein neues [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt zurück, das den transformierten Punkt enthält. Weder die Matrix noch der ursprüngliche Punkt werden verändert.
- [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die eine Matrix enthält, die durch die Translation der Quellmatrix anhand des angegebenen Vektors berechnet wurde. Standardmäßig ist der Vektor `(0, 0, 0)`. Die Originalmatrix wird nicht verändert.

## Statische Methoden

- [`fromFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat32Array)
  - : Erstellt ein neues veränderbares `DOMMatrix`-Objekt, das ein Array von Einzelpräzisions- (32-Bit) Gleitkommawerten erhält. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat64Array)
  - : Erstellt ein neues veränderbares `DOMMatrix`-Objekt, das ein Array von Doppelpräzisions- (64-Bit) Gleitkommawerten erhält. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromMatrix()`](/de/docs/Web/API/DOMMatrixReadOnly/fromMatrix)
  - : Erstellt ein neues veränderbares `DOMMatrix`-Objekt, das eine vorhandene Matrix oder ein Objekt erhält, welches die Werte für seine Eigenschaften bereitstellt. Wenn keine Matrix angegeben wird, wird die Matrix initialisiert, indem jedes Element auf `0` gesetzt wird, _außer_ der unteren rechten Ecke und dem Element direkt darüber und links davon: `m33` und `m34`. Diese haben den Standardwert `1`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der veränderbare Matrixtyp, [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), der auf diesem basiert.
- Die CSS-Notation {{cssxref("transform-function/matrix", "matrix()")}} und {{cssxref("transform-function/matrix3d", "matrix3d()")}}, die aus dieser Schnittstelle generiert werden kann, um in einem CSS {{cssxref("transform")}} verwendet zu werden.
