---
title: DOMMatrixReadOnly
slug: Web/API/DOMMatrixReadOnly
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("Geometry Interfaces")}}

Die **`DOMMatrixReadOnly`**-Schnittstelle repräsentiert eine schreibgeschützte 4×4-Matrix, geeignet für 2D- und 3D-Operationen. Die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Schnittstelle — die auf `DOMMatrixReadOnly` basiert — fügt [Veränderbarkeit](https://en.wikipedia.org/wiki/Immutable_object) hinzu, sodass Sie die Matrix nach ihrer Erstellung ändern können.

Diese Schnittstelle sollte innerhalb von [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar sein, obwohl einige Implementierungen dies noch nicht erlauben.

## Konstruktor

- [`DOMMatrixReadOnly()`](/de/docs/Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly)
  - : Erstellt ein neues `DOMMatrixReadOnly`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- `is2D` {{ReadOnlyInline}}
  - : Ein boolesches Kennzeichen, dessen Wert `true` ist, wenn die Matrix als 2D-Matrix initialisiert wurde. Ist der Wert `false`, ist die Matrix 3D.
- `isIdentity` {{ReadOnlyInline}}
  - : Ein boolescher Wert, dessen Wert `true` ist, wenn die Matrix die [Einheitsmatrix](https://en.wikipedia.org/wiki/Identity_matrix) ist. Die Einheitsmatrix ist eine, in der jeder Wert `0` ist, _außer_ denen auf der Hauptdiagonale von oben links nach unten rechts (mit anderen Worten, wo die Versätze in jeder Richtung gleich sind).
- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Doppelte Genauigkeit, Gleitkommawerte, die jede Komponente einer 4×4-Matrix repräsentieren, wobei `m11` bis `m14` die erste Spalte sind, `m21` bis `m24` die zweite Spalte und so weiter.
- `a`, `b`, `c`, `d`, `e`, `f`

  - : Doppelte Genauigkeit, Gleitkommawerte, die die Komponenten einer 4×4-Matrix darstellen, die für die Durchführung von 2D-Rotationen und -Translationen erforderlich sind. Diese sind Aliase für spezifische Komponenten einer 4×4-Matrix, wie unten gezeigt.

    | 2D  | 3D Äquivalent |
    | --- | ------------- |
    | `a` | `m11`         |
    | `b` | `m12`         |
    | `c` | `m21`         |
    | `d` | `m22`         |
    | `e` | `m41`         |
    | `f` | `m42`         |

## Instanz-Methoden

_Diese Schnittstelle erbt keine Methoden. Keine der folgenden Methoden verändern die ursprüngliche Matrix._

- [`DOMMatrixReadOnly.flipX()`](/de/docs/Web/API/DOMMatrixReadOnly/flipX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch das Spiegeln der Quellmatrix um ihre X-Achse entsteht. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(-1, 0, 0, 1, 0, 0)`. Die Originalmatrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.flipY()`](/de/docs/Web/API/DOMMatrixReadOnly/flipY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch das Spiegeln der Quellmatrix um ihre Y-Achse entsteht. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(1, 0, 0, -1, 0, 0)`. Die Originalmatrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.inverse()`](/de/docs/Web/API/DOMMatrixReadOnly/inverse)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch das Invertieren der Quellmatrix entsteht. Wenn die Matrix nicht invertiert werden kann, sind die Komponenten der neuen Matrix alle auf `NaN` gesetzt und ihre `is2D`-Eigenschaft auf `false`. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.multiply()`](/de/docs/Web/API/DOMMatrixReadOnly/multiply)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Berechnung des Skalarprodukts der Quellmatrix und der angegebenen Matrix entsteht: `A⋅B`. Wird keine Matrix als Multiplikator angegeben, wird die Matrix mit einer Matrix multipliziert, in der jedes Element `0` ist, _außer_ die untere rechte Ecke und das direkt darüber und links davon befindliche Element: `m33` und `m34`. Diese haben den Standardwert `1`. Die Originalmatrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.rotateAxisAngle()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateAxisAngle)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch das Rotieren der Quellmatrix um den angegebenen Vektor mit dem gegebenen Winkel entsteht. Die Originalmatrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch das Rotieren der Quellmatrix um jede ihrer Achsen um die angegebene Gradzahl entsteht. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotateFromVector()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateFromVector)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch das Rotieren der Quellmatrix um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` entsteht. Die Originalmatrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch das Skalieren der Quellmatrix um den jeweils angegebenen Betrag für jede Achse entsteht, zentriert auf den angegebenen Ursprung. Standardmäßig werden die X- und Z-Achsen um `1` skaliert und die Y-Achse hat keinen Standard-Skalierungswert. Der Standardursprung ist `(0, 0, 0)`. Die Originalmatrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.scale3d()`](/de/docs/Web/API/DOMMatrixReadOnly/scale3d)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch das Skalieren der Quell-3D-Matrix um den angegebenen Faktor entlang aller Achsen, zentriert auf dem angegebenen Ursprungspunkt, entsteht. Der Standardursprung ist `(0, 0, 0)`. Die Originalmatrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.scaleNonUniform()`](/de/docs/Web/API/DOMMatrixReadOnly/scaleNonUniform) {{deprecated_inline}}
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch das Anwenden der angegebenen Skalierung auf die X-, Y- und Z-Achsen, zentriert auf den angegebenen Ursprungspunkt, entsteht. Standardmäßig sind die Skalierungsfaktoren für die Y- und Z-Achsen beide `1`, aber der Skalierungsfaktor für X muss angegeben werden. Der Standardursprung ist `(0, 0, 0)`. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch das Anwenden der angegebenen Schertransformation auf die Quellmatrix entlang ihrer X-Achse entsteht. Die Originalmatrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch das Anwenden der angegebenen Schertransformation auf die Quellmatrix entlang ihrer Y-Achse entsteht. Die Originalmatrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.toFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat32Array)
  - : Gibt ein neues {{jsxref("Float32Array")}} zurück, das alle 16 Elemente (`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`) enthält, aus denen die Matrix besteht. Die Elemente werden als Einzel-Präzisions-Gleitkommazahlen in spaltenorientierter ("colex") Reihenfolge in das Array gespeichert. (Mit anderen Worten, von oben nach unten in der ersten Spalte, dann die zweite Spalte und so weiter.)
- [`DOMMatrixReadOnly.toFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat64Array)
  - : Gibt ein neues {{jsxref("Float64Array")}} zurück, das alle 16 Elemente (`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`) enthält, aus denen die Matrix besteht. Die Elemente werden als Doppel-Präzisions-Gleitkommazahlen in spaltenorientierter ("colex") Reihenfolge in das Array gespeichert. (Mit anderen Worten, von oben nach unten in der ersten Spalte, dann die zweite Spalte und so weiter.)
- [`DOMMatrixReadOnly.toJSON()`](/de/docs/Web/API/DOMMatrixReadOnly/toJSON)
  - : Gibt eine JSON-Darstellung des `DOMMatrixReadOnly`-Objekts zurück.
- [`DOMMatrixReadOnly.toString()`](/de/docs/Web/API/DOMMatrixReadOnly/toString)

  - : Erstellt und gibt einen String zurück, der eine Zeichenfolgendarstellung der Matrix in CSS-Matrix-Syntax enthält, unter Verwendung der entsprechenden CSS-Matrixnotation. Siehe die {{cssxref("transform-function/matrix", "matrix()")}}-CSS-Funktion für Details zu dieser Syntax.

    Für eine 2D-Matrix werden die Elemente `a` bis `f` aufgeführt, für insgesamt sechs Werte und die Form `matrix(a, b, c, d, e, f)`.

    Für eine 3D-Matrix enthält der zurückgegebene String alle 16 Elemente und hat die Form `matrix3d(m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44)`. Siehe die CSS {{cssxref("transform-function/matrix3d", "matrix3d()")}}-Funktion für Details zur Syntax der 3D-Notation.

    Wirft eine `InvalidStateError`-Ausnahme, wenn eines der Elemente in der Matrix nicht endlich ist (auch wenn im Falle einer 2D-Matrix die in der 2D-Matrix-Darstellung nicht verwendeten Elemente nicht endlich sind).

- [`DOMMatrixReadOnly.transformPoint()`](/de/docs/Web/API/DOMMatrixReadOnly/transformPoint)
  - : Transformiert den angegebenen Punkt mit der Matrix und gibt ein neues [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt zurück, das den transformierten Punkt enthält. Weder die Matrix noch der ursprüngliche Punkt werden verändert.
- [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die eine Matrix enthält, die durch das Übersetzen der Quellmatrix mit dem angegebenen Vektor berechnet wurde. Standardmäßig ist der Vektor `(0, 0, 0)`. Die Originalmatrix wird nicht verändert.

## Statische Methoden

- [`fromFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat32Array)
  - : Erstellt ein neues veränderbares `DOMMatrix`-Objekt aus einem Array von Einzel-Präzisions-Gleitkommawerten (32-Bit). Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat64Array)
  - : Erstellt ein neues veränderbares `DOMMatrix`-Objekt aus einem Array von Doppel-Präzisions-Gleitkommawerten (64-Bit). Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromMatrix()`](/de/docs/Web/API/DOMMatrixReadOnly/fromMatrix)
  - : Erstellt ein neues veränderbares `DOMMatrix`-Objekt aus einer vorhandenen Matrix oder einem Objekt, das die Werte für seine Eigenschaften bereitstellt. Wenn keine Matrix angegeben wird, wird die Matrix mit jedem Element auf `0` initialisiert, _außer_ die untere rechte Ecke und das direkt darüber und links davon befindliche Element: `m33` und `m34`. Diese haben den Standardwert `1`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der veränderbare Matrixtyp, [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), der auf diesem basiert.
- Die CSS-Notation {{cssxref("transform-function/matrix", "matrix()")}} und {{cssxref("transform-function/matrix3d", "matrix3d()")}}-Funktionsnotation, die aus dieser Schnittstelle generiert werden kann, um sie in einem CSS-{{cssxref("transform")}} zu verwenden.
