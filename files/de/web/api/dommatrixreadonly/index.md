---
title: DOMMatrixReadOnly
slug: Web/API/DOMMatrixReadOnly
l10n:
  sourceCommit: 473a33d6b219ee671239a5e4a322047bee3c5512
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Das **`DOMMatrixReadOnly`**-Interface repräsentiert eine schreibgeschützte 4×4-Matrix, die für 2D- und 3D-Operationen geeignet ist. Das [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Interface, das auf `DOMMatrixReadOnly` basiert, fügt [Veränderbarkeit](https://en.wikipedia.org/wiki/Immutable_object) hinzu, sodass Sie die Matrix nach ihrer Erstellung ändern können.

Dieses Interface sollte innerhalb von [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar sein, doch einige Implementierungen erlauben es noch nicht.

## Konstruktor

- [`DOMMatrixReadOnly()`](/de/docs/Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly)
  - : Erstellt ein neues `DOMMatrixReadOnly`-Objekt.

## Instanz-Eigenschaften

_Dieses Interface erbt keine Eigenschaften._

- `is2D` {{ReadOnlyInline}}
  - : Ein boolesches Flag, dessen Wert `true` ist, wenn die Matrix als 2D-Matrix initialisiert wurde. Ist der Wert `false`, handelt es sich um eine 3D-Matrix.
- `isIdentity` {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn die Matrix die [Einheitsmatrix](https://en.wikipedia.org/wiki/Identity_matrix) ist. Die Einheitsmatrix ist eine Matrix, bei der alle Werte `0` sind, _außer_ denen auf der Hauptdiagonalen vom oberen linken bis zum unteren rechten Eckpunkt (mit anderen Worten, dort, wo die Versätze in jeder Richtung gleich sind).
- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Doppelte Gleitkommawerte, die jede Komponente einer 4×4-Matrix repräsentieren, wobei `m11` bis `m14` die erste Spalte, `m21` bis `m24` die zweite Spalte und so weiter sind.
- `a`, `b`, `c`, `d`, `e`, `f`

  - : Doppelte Gleitkommawerte, die die Komponenten einer 4×4-Matrix darstellen, die erforderlich sind, um 2D-Rotationen und Translationen durchzuführen. Diese sind Aliase für spezifische Komponenten einer 4×4-Matrix, wie unten gezeigt.

    | 2D  | 3D-Äquivalent |
    | --- | ------------- |
    | `a` | `m11`         |
    | `b` | `m12`         |
    | `c` | `m21`         |
    | `d` | `m22`         |
    | `e` | `m41`         |
    | `f` | `m42`         |

## Instanz-Methoden

_Dieses Interface erbt keine Methoden. Keine der folgenden Methoden verändert die ursprüngliche Matrix._

- [`DOMMatrixReadOnly.flipX()`](/de/docs/Web/API/DOMMatrixReadOnly/flipX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Spiegeln der Quellmatrix um ihre X-Achse erstellt wird. Dies entspricht dem Multiplizieren der Matrix mit `DOMMatrix(-1, 0, 0, 1, 0, 0)`. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.flipY()`](/de/docs/Web/API/DOMMatrixReadOnly/flipY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Spiegeln der Quellmatrix um ihre Y-Achse erstellt wird. Dies entspricht dem Multiplizieren der Matrix mit `DOMMatrix(1, 0, 0, -1, 0, 0)`. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.inverse()`](/de/docs/Web/API/DOMMatrixReadOnly/inverse)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Invertieren der Quellmatrix erstellt wird. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.multiply()`](/de/docs/Web/API/DOMMatrixReadOnly/multiply)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Berechnung des Skalarprodukts der Quellmatrix und der angegebenen Matrix erstellt wird: `A⋅B`. Wenn keine Matrix als Multiplikator angegeben ist, wird die Matrix mit einer Matrix multipliziert, in der jedes Element `0` ist, _außer_ der Ecke unten rechts und dem Element direkt darüber und links davon: `m33` und `m34`. Diese haben den Standardwert `1`. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotateAxisAngle()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateAxisAngle)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Rotation der Quellmatrix um den angegebenen Winkel um den spezifizierten Vektor erstellt wird. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehung der Quellmatrix um jede ihrer Achsen um die angegebenen Grade erstellt wird. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotateFromVector()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateFromVector)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehung der Quellmatrix um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` erstellt wird. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalierung der Quellmatrix um die für jede Achse angegebenen Beträge erstellt wird, zentriert auf dem angegebenen Ursprung. Standardmäßig werden die X- und Z-Achse um `1` skaliert, und die Y-Achse hat keinen standardmäßigen Skalierungswert. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.scale3d()`](/de/docs/Web/API/DOMMatrixReadOnly/scale3d)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalierung der Quell-3D-Matrix um den gegebenen Faktor entlang aller Achsen, zentriert auf dem angegebenen Ursprungspunkt, erstellt wird. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.scaleNonUniform()`](/de/docs/Web/API/DOMMatrixReadOnly/scaleNonUniform) {{deprecated_inline}}
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwendung der angegebenen Skalierung auf die X-, Y- und Z-Achsen erstellt wird, zentriert an dem angegebenen Ursprung. Standardmäßig sind die Skalierungsfaktoren für die Y- und Z-Achse beide `1`, aber der Skalierungsfaktor für X muss angegeben werden. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwendung der angegebenen Verzerrungstransformation auf die Quellmatrix entlang ihrer X-Achse erstellt wird. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwendung der angegebenen Verzerrungstransformation auf die Quellmatrix entlang ihrer Y-Achse erstellt wird. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.toFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat32Array)
  - : Gibt ein neues {{jsxref("Float32Array")}} zurück, das alle 16 Elemente (`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`) enthält, die die Matrix bilden. Die Elemente werden als einfache Gleitkommawerte im Spalten-major-Format (colexographischer Zugriff, oder "colex") in das Array gespeichert. (Mit anderen Worten, die erste Spalte von oben nach unten, dann die zweite Spalte und so weiter.)
- [`DOMMatrixReadOnly.toFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat64Array)
  - : Gibt ein neues {{jsxref("Float64Array")}} zurück, das alle 16 Elemente (`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`) enthält, die die Matrix bilden. Die Elemente werden als doppelte Gleitkommawerte im Spalten-major-Format (colexographischer Zugriff, oder "colex") in das Array gespeichert. (Mit anderen Worten, die erste Spalte von oben nach unten, dann die zweite Spalte und so weiter.)
- [`DOMMatrixReadOnly.toJSON()`](/de/docs/Web/API/DOMMatrixReadOnly/toJSON)
  - : Gibt eine JSON-Darstellung des `DOMMatrixReadOnly`-Objekts zurück.
- [`DOMMatrixReadOnly.toString()`](/de/docs/Web/API/DOMMatrixReadOnly/toString)

  - : Erstellt und gibt einen String zurück, der eine Zeichenfolgenrepräsentation der Matrix in CSS-Matrix-Syntax enthält, wobei die geeignete CSS-Matrix-Notation verwendet wird. Details zu dieser Syntax finden Sie in der {{cssxref("transform-function/matrix", "matrix()")}} CSS-Funktion.

    Für eine 2D-Matrix werden die Elemente `a` bis `f` aufgelistet, insgesamt sechs Werte in der Form `matrix(a, b, c, d, e, f)`.

    Für eine 3D-Matrix enthält der zurückgegebene String alle 16 Elemente und hat die Form `matrix3d(m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44)`. Siehe die CSS {{cssxref("transform-function/matrix3d", "matrix3d()")}}-Funktion für Details zu der Syntax der 3D-Notation.

    Löst eine `InvalidStateError`-Ausnahme aus, wenn eines der Elemente in der Matrix nicht endlich ist (auch wenn im Falle einer 2D-Matrix die nicht endlichen Werte in Elementen sind, die von der 2D-Matrix-Darstellung nicht verwendet werden).

- [`DOMMatrixReadOnly.transformPoint()`](/de/docs/Web/API/DOMMatrixReadOnly/transformPoint)
  - : Transformiert den angegebenen Punkt unter Verwendung der Matrix und gibt ein neues [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt zurück, das den transformierten Punkt enthält. Weder die Matrix noch der ursprüngliche Punkt werden verändert.
- [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die eine Matrix enthält, berechnet durch Übersetzen der Quellmatrix unter Verwendung des angegebenen Vektors. Standardmäßig ist der Vektor `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.

## Statische Methoden

- [`fromFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat32Array)
  - : Erstellt ein neues änderbares `DOMMatrix`-Objekt unter Angabe eines Arrays von einfachen (32-Bit) Gleitkommawerten. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat64Array)
  - : Erstellt ein neues änderbares `DOMMatrix`-Objekt unter Angabe eines Arrays von doppelten (64-Bit) Gleitkommawerten. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromMatrix()`](/de/docs/Web/API/DOMMatrixReadOnly/fromMatrix)
  - : Erstellt ein neues änderbares `DOMMatrix`-Objekt unter Angabe einer vorhandenen Matrix oder eines Objekts, das die Werte für ihre Eigenschaften liefert. Wenn keine Matrix angegeben ist, wird die Matrix initialisiert, wobei jedes Element auf `0` gesetzt wird, _außer_ der Ecke unten rechts und dem Element direkt darüber und links davon: `m33` und `m34`. Diese haben den Standardwert `1`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der veränderbare Matrizen-Typ, [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), welcher auf diesem basiert.
- Die CSS-{{cssxref("transform-function/matrix", "matrix()")}} und {{cssxref("transform-function/matrix3d", "matrix3d()")}} funktionale Notation, die von diesem Interface generiert werden kann, um in einem CSS-{{cssxref("transform")}} verwendet zu werden.
