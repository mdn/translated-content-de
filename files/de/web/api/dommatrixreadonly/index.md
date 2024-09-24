---
title: DOMMatrixReadOnly
slug: Web/API/DOMMatrixReadOnly
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("Geometry Interfaces")}}

Die **`DOMMatrixReadOnly`**-Schnittstelle repräsentiert eine schreibgeschützte 4×4-Matrix, die für 2D- und 3D-Operationen geeignet ist. Die {{domxref("DOMMatrix")}}-Schnittstelle — die auf `DOMMatrixReadOnly` basiert — fügt [Mutabilität](https://en.wikipedia.org/wiki/Immutable_object) hinzu, sodass es Ihnen möglich ist, die Matrix nach ihrer Erstellung zu ändern.

Diese Schnittstelle sollte in [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar sein, auch wenn einige Implementierungen dies noch nicht zulassen.

## Konstruktor

- {{domxref("DOMMatrixReadOnly.DOMMatrixReadOnly", "DOMMatrixReadOnly()")}}
  - : Erstellt ein neues `DOMMatrixReadOnly`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- `is2D` {{ReadOnlyInline}}
  - : Ein Boolean-Flag, dessen Wert `true` ist, wenn die Matrix als 2D-Matrix initialisiert wurde. Ist der Wert `false`, ist die Matrix 3D.
- `isIdentity` {{ReadOnlyInline}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die Matrix die [Einheitsmatrix](https://en.wikipedia.org/wiki/Identity_matrix) ist. Die Einheitsmatrix ist eine, in der jeder Wert `0` ist, _außer_ denen auf der Hauptdiagonale von oben links nach unten rechts (mit anderen Worten, wo die Offsets in jede Richtung gleich sind).
- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Gleitkommawerte mit doppelter Genauigkeit, die jede Komponente einer 4×4-Matrix darstellen, wobei `m11` bis `m14` die erste Spalte sind, `m21` bis `m24` die zweite Spalte, und so weiter.
- `a`, `b`, `c`, `d`, `e`, `f`

  - : Gleitkommawerte mit doppelter Genauigkeit, die die Komponenten einer 4×4-Matrix darstellen, die erforderlich sind, um 2D-Rotationen und -Übersetzungen durchzuführen. Diese sind Aliase für spezifische Komponenten einer 4×4-Matrix, wie unten gezeigt.

    | 2D  | 3D-Äquivalent |
    | --- | ------------- |
    | `a` | `m11`         |
    | `b` | `m12`         |
    | `c` | `m21`         |
    | `d` | `m22`         |
    | `e` | `m41`         |
    | `f` | `m42`         |

## Instanz-Methoden

_Diese Schnittstelle erbt keine Methoden. Keine der folgenden Methoden verändert die ursprüngliche Matrix._

- {{domxref("DOMMatrixReadOnly.flipX()")}}
  - : Gibt eine neue {{domxref("DOMMatrix")}} zurück, die durch Spiegeln der Quellmatrix entlang ihrer X-Achse erstellt wird. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(-1, 0, 0, 1, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- {{domxref("DOMMatrixReadOnly.flipY()")}}
  - : Gibt eine neue {{domxref("DOMMatrix")}} zurück, die durch Spiegeln der Quellmatrix entlang ihrer Y-Achse erstellt wird. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(1, 0, 0, -1, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- {{domxref("DOMMatrixReadOnly.inverse()")}}
  - : Gibt eine neue {{domxref("DOMMatrix")}} zurück, die durch Invertieren der Quellmatrix erstellt wird. Wenn die Matrix nicht invertiert werden kann, werden alle Komponenten der neuen Matrix auf `NaN` gesetzt und die `is2D`-Eigenschaft wird auf `false` gesetzt. Die ursprüngliche Matrix wird nicht verändert.
- {{domxref("DOMMatrixReadOnly.multiply()")}}
  - : Gibt eine neue {{domxref("DOMMatrix")}} zurück, die durch Berechnen des Skalarprodukts der Quellmatrix und der angegebenen Matrix: `A⋅B`, erstellt wird. Wird keine Matrix als Multiplikator angegeben, wird die Matrix mit einer Matrix multipliziert, in der jedes Element `0` ist, _ausgenommen_ die rechte untere Ecke und das direkt darüber und links daneben liegende Element: `m33` und `m34`. Diese haben den Standardwert `1`. Die ursprüngliche Matrix wird nicht verändert.
- {{domxref("DOMMatrixReadOnly.rotateAxisAngle()")}}
  - : Gibt eine neue {{domxref("DOMMatrix")}} zurück, die durch Drehen der Quellmatrix um den angegebenen Winkel um den angegebenen Vektor erstellt wird. Die ursprüngliche Matrix wird nicht verändert.
- {{domxref("DOMMatrixReadOnly.rotate()")}}
  - : Gibt eine neue {{domxref("DOMMatrix")}} zurück, die durch Drehen der Quellmatrix um jeweils die angegebene Anzahl von Graden um jede ihrer Achsen erstellt wird. Die ursprüngliche Matrix wird nicht verändert.
- {{domxref("DOMMatrixReadOnly.rotateFromVector()")}}
  - : Gibt eine neue {{domxref("DOMMatrix")}} zurück, die durch Drehen der Quellmatrix um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` erstellt wird. Die ursprüngliche Matrix wird nicht verändert.
- {{domxref("DOMMatrixReadOnly.scale()")}}
  - : Gibt eine neue {{domxref("DOMMatrix")}} zurück, die durch Skalierung der Quellmatrix um den für jede Achse angegebenen Betrag in Bezug auf den angegebenen Ursprung erstellt wird. Standardmäßig werden die X- und Z-Achsen um `1` skaliert und die Y-Achse hat keinen Standardskalierungswert. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- {{domxref("DOMMatrixReadOnly.scale3d()")}}
  - : Gibt eine neue {{domxref("DOMMatrix")}} zurück, die durch Skalierung der Quell-3D-Matrix um den angegebenen Faktor entlang aller Achsen in Bezug auf den angegebenen Ursprungspunkt erstellt wird. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- {{domxref("DOMMatrixReadOnly.scaleNonUniform()")}} {{deprecated_inline}}
  - : Gibt eine neue {{domxref("DOMMatrix")}} zurück, die durch Anwendung der angegebenen Skalierung auf die X-, Y- und Z-Achsen in Bezug auf den angegebenen Ursprung erstellt wird. Standardmäßig sind die Skalierungsfaktoren für die Y- und Z-Achsen jeweils `1`, aber der Skalierungsfaktor für X muss angegeben werden. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- {{domxref("DOMMatrixReadOnly.skewX()")}}
  - : Gibt eine neue {{domxref("DOMMatrix")}} zurück, die durch Anwendung der angegebenen Scherungstransformation auf die Quellmatrix entlang ihrer X-Achse erstellt wird. Die ursprüngliche Matrix wird nicht verändert.
- {{domxref("DOMMatrixReadOnly.skewY()")}}
  - : Gibt eine neue {{domxref("DOMMatrix")}} zurück, die durch Anwendung der angegebenen Scherungstransformation auf die Quellmatrix entlang ihrer Y-Achse erstellt wird. Die ursprüngliche Matrix wird nicht verändert.
- {{domxref("DOMMatrixReadOnly.toFloat32Array()")}}
  - : Gibt ein neues {{jsxref("Float32Array")}} zurück, das alle 16 Elemente (`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`) enthält, die die Matrix bilden. Die Elemente werden als Einzelpräzisions-Gleitkommazahlen im spaltenmajor (colexographischen Zugriff, oder "colex") Format in das Array gespeichert. (Mit anderen Worten, von der ersten Spalte von oben nach unten, dann die zweite Spalte und so weiter.)
- {{domxref("DOMMatrixReadOnly.toFloat64Array()")}}
  - : Gibt ein neues {{jsxref("Float64Array")}} zurück, das alle 16 Elemente (`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`) enthält, die die Matrix bilden. Die Elemente werden als Doppelpräzisions-Gleitkommazahlen im spaltenmajor (colexographischen Zugriff, oder "colex") Format in das Array gespeichert. (Mit anderen Worten, von der ersten Spalte von oben nach unten, dann die zweite Spalte und so weiter.)
- {{domxref("DOMMatrixReadOnly.toJSON()")}}
  - : Gibt eine JSON-Darstellung des `DOMMatrixReadOnly`-Objekts zurück.
- {{domxref("DOMMatrixReadOnly.toString()")}}

  - : Erstellt und gibt einen String zurück, der eine String-Darstellung der Matrix in der CSS-Matrix-Syntax enthält, unter Verwendung der entsprechenden CSS-Matrix-Notation. Siehe die {{cssxref("transform-function/matrix", "matrix()")}} CSS-Funktion für Details zu dieser Syntax.

    Für eine 2D-Matrix werden die Elemente `a` bis `f` aufgelistet, für insgesamt sechs Werte und die Form `matrix(a, b, c, d, e, f)`.

    Für eine 3D-Matrix enthält der zurückgegebene String alle 16 Elemente und nimmt die Form `matrix3d(m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44)` an. Siehe die CSS {{cssxref("transform-function/matrix3d", "matrix3d()")}} Funktion für Details zur Syntax der 3D-Notation.

    Löst eine `InvalidStateError`-Ausnahme aus, wenn eines der Elemente in der Matrix nicht endlich ist (auch wenn im Fall einer 2D-Matrix die nicht endlichen Werte in Elementen liegen, die in der 2D-Matrix-Darstellung nicht verwendet werden).

- {{domxref("DOMMatrixReadOnly.transformPoint()")}}
  - : Transformiert den angegebenen Punkt mit der Matrix und gibt ein neues {{domxref("DOMPoint")}}-Objekt zurück, das den transformierten Punkt enthält. Weder die Matrix noch der ursprüngliche Punkt werden verändert.
- {{domxref("DOMMatrixReadOnly.translate()")}}
  - : Gibt eine neue {{domxref("DOMMatrix")}} zurück, die eine Matrix enthält, die durch Übersetzen der Quellmatrix mit dem angegebenen Vektor berechnet wird. Standardmäßig ist der Vektor `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.

## Statische Methoden

- {{domxref("DOMMatrixReadOnly.fromFloat32Array", "fromFloat32Array()")}}
  - : Erstellt ein neues mutierbares `DOMMatrix`-Objekt, das ein Array von Einzelpräzisions- (32-Bit) Gleitkommazahlen aufnimmt. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- {{domxref("DOMMatrixReadOnly.fromFloat64Array", "fromFloat64Array()")}}
  - : Erstellt ein neues mutierbares `DOMMatrix`-Objekt, das ein Array von Doppelpräzisions- (64-Bit) Gleitkommazahlen aufnimmt. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- {{domxref("DOMMatrixReadOnly.fromMatrix", "fromMatrix()")}}
  - : Erstellt ein neues mutierbares `DOMMatrix`-Objekt aus einer vorhandenen Matrix oder einem Objekt, das die Werte für seine Eigenschaften bereitstellt. Wenn keine Matrix angegeben wird, wird die Matrix initialisiert, indem jedes Element auf `0` gesetzt wird, _außer_ die rechte untere Ecke und das direkt darüber und links daneben liegende Element: `m33` und `m34`. Diese haben den Standardwert `1`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der mutierbare Matrixtyp, {{domxref("DOMMatrix")}}, der auf diesem basiert.
- Die CSS {{cssxref("transform-function/matrix", "matrix()")}} und {{cssxref("transform-function/matrix3d", "matrix3d()")}} funktionale Notation, die von dieser Schnittstelle erzeugt werden kann, um in einem CSS {{cssxref("transform")}} verwendet zu werden.
