---
title: DOMMatrixReadOnly
slug: Web/API/DOMMatrixReadOnly
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Das **`DOMMatrixReadOnly`** Interface repräsentiert eine schreibgeschützte 4×4-Matrix, geeignet für 2D- und 3D-Operationen. Das [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) Interface — basierend auf `DOMMatrixReadOnly` — fügt [Mutabilität](https://en.wikipedia.org/wiki/Immutable_object) hinzu, die es Ihnen ermöglicht, die Matrix nach ihrer Erstellung zu ändern.

Dieses Interface sollte innerhalb von [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar sein, obwohl einige Implementierungen dies noch nicht erlauben.

## Konstruktor

- [`DOMMatrixReadOnly()`](/de/docs/Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly)
  - : Erstellt ein neues `DOMMatrixReadOnly` Objekt.

## Instanz-Eigenschaften

_Dieses Interface erbt keine Eigenschaften._

- `is2D` {{ReadOnlyInline}}
  - : Ein Boolescher Wert, dessen Wert `true` ist, wenn die Matrix als 2D-Matrix initialisiert wurde. Ist der Wert `false`, ist die Matrix 3D.
- `isIdentity` {{ReadOnlyInline}}
  - : Ein Boolescher Wert, dessen Wert `true` ist, wenn die Matrix die [Einheitsmatrix](https://en.wikipedia.org/wiki/Identity_matrix) ist. Die Einheitsmatrix ist eine, bei der jeder Wert `0` ist, _außer_ denen auf der Hauptdiagonalen von der oberen linken zur unteren rechten Ecke (mit anderen Worten, wo die Versätze in jeder Richtung gleich sind).
- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Doppelpräzise Gleitkommawerte, die jede Komponente einer 4×4-Matrix darstellen, wobei `m11` bis `m14` die erste Spalte sind, `m21` bis `m24` die zweite Spalte, und so weiter.
- `a`, `b`, `c`, `d`, `e`, `f`

  - : Doppelpräzise Gleitkommawerte, die die Komponenten einer 4×4-Matrix darstellen, die erforderlich sind, um 2D-Drehungen und -Übersetzungen durchzuführen. Diese sind Aliase für spezifische Komponenten einer 4×4-Matrix, wie unten gezeigt.

    | 2D  | 3D Äquivalent |
    | --- | ------------- |
    | `a` | `m11`         |
    | `b` | `m12`         |
    | `c` | `m21`         |
    | `d` | `m22`         |
    | `e` | `m41`         |
    | `f` | `m42`         |

## Instanz-Methoden

_Dieses Interface erbt keine Methoden. Keine der folgenden Methoden ändert die ursprüngliche Matrix._

- [`DOMMatrixReadOnly.flipX()`](/de/docs/Web/API/DOMMatrixReadOnly/flipX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Spiegeln der Ursprungsmatrix um ihre X-Achse erstellt wurde. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(-1, 0, 0, 1, 0, 0)`. Die ursprüngliche Matrix wird nicht geändert.
- [`DOMMatrixReadOnly.flipY()`](/de/docs/Web/API/DOMMatrixReadOnly/flipY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Spiegeln der Ursprungsmatrix um ihre Y-Achse erstellt wurde. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(1, 0, 0, -1, 0, 0)`. Die ursprüngliche Matrix wird nicht geändert.
- [`DOMMatrixReadOnly.inverse()`](/de/docs/Web/API/DOMMatrixReadOnly/inverse)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Invertieren der Ursprungsmatrix erstellt wurde. Wenn die Matrix nicht invertiert werden kann, werden die Komponenten der neuen Matrix alle auf `NaN` gesetzt und ihre `is2D`-Eigenschaft wird auf `false` gesetzt. Die ursprüngliche Matrix wird nicht geändert.
- [`DOMMatrixReadOnly.multiply()`](/de/docs/Web/API/DOMMatrixReadOnly/multiply)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch die Berechnung des Skalarprodukts der Ursprungsmatrix und der angegebenen Matrix erstellt wurde: `A⋅B`. Wenn keine Matrix als Multiplikator angegeben wird, wird die Matrix mit einer Matrix multipliziert, in der jedes Element `0` ist, _außer_ der rechten unteren Ecke und dem unmittelbar darüber und links davon befindlichen Element: `m33` und `m34`. Diese haben den Standardwert `1`. Die ursprüngliche Matrix wird nicht geändert.
- [`DOMMatrixReadOnly.rotateAxisAngle()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateAxisAngle)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Ursprungsmatrix um den angegebenen Winkel um den spezifizierten Vektor erstellt wurde. Die ursprüngliche Matrix wird nicht geändert.
- [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Ursprungsmatrix um jede ihrer Achsen um die angegebene Anzahl von Grad erstellt wurde. Die ursprüngliche Matrix wird nicht geändert.
- [`DOMMatrixReadOnly.rotateFromVector()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateFromVector)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Ursprungsmatrix um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` erstellt wurde. Die ursprüngliche Matrix wird nicht geändert.
- [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalieren der Ursprungsmatrix um den für jede Achse angegebenen Betrag erstellt wurde, zentriert auf dem angegebenen Ursprung. Standardmäßig werden die X- und Z-Achsen mit `1` skaliert und die Y-Achse hat keinen Standard-Skalierungswert. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht geändert.
- [`DOMMatrixReadOnly.scale3d()`](/de/docs/Web/API/DOMMatrixReadOnly/scale3d)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalieren der Ursprungs-3D-Matrix um den angegebenen Faktor entlang aller ihrer Achsen erstellt wurde, zentriert auf dem angegebenen Ursprungspunkt. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht geändert.
- [`DOMMatrixReadOnly.scaleNonUniform()`](/de/docs/Web/API/DOMMatrixReadOnly/scaleNonUniform) {{deprecated_inline}}
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Skalierung auf die X-, Y- und Z-Achsen erstellt wurde, zentriert auf dem angegebenen Ursprung. Standardmäßig sind die Skalierungsfaktoren der Y- und Z-Achsen jeweils `1`, aber der Skalierungsfaktor für X muss angegeben werden. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht geändert.
- [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Schertransformation auf die Ursprungsmatrix entlang ihrer X-Achse erstellt wurde. Die ursprüngliche Matrix wird nicht geändert.
- [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Schertransformation auf die Ursprungsmatrix entlang ihrer Y-Achse erstellt wurde. Die ursprüngliche Matrix wird nicht geändert.
- [`DOMMatrixReadOnly.toFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat32Array)
  - : Gibt eine neue {{jsxref("Float32Array")}} zurück, die alle 16 Elemente (`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`) enthält, die die Matrix bilden. Die Elemente werden in der Reihenfolge der Einzelpräzisions-Gleitkommazahlen in spaltenbasierter Reihenfolge ("colex" - colexographical access) in das Array gespeichert. (Mit anderen Worten, die erste Spalte von oben nach unten, dann die zweite Spalte und so weiter.)
- [`DOMMatrixReadOnly.toFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat64Array)
  - : Gibt eine neue {{jsxref("Float64Array")}} zurück, die alle 16 Elemente (`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`) enthält, die die Matrix bilden. Die Elemente werden in der Reihenfolge der Doppelpräzisions-Gleitkommazahlen in spaltenbasierter Reihenfolge ("colex" - colexographical access) in das Array gespeichert. (Mit anderen Worten, die erste Spalte von oben nach unten, dann die zweite Spalte und so weiter.)
- [`DOMMatrixReadOnly.toJSON()`](/de/docs/Web/API/DOMMatrixReadOnly/toJSON)
  - : Gibt eine JSON-Darstellung des `DOMMatrixReadOnly` Objekts zurück.
- [`DOMMatrixReadOnly.toString()`](/de/docs/Web/API/DOMMatrixReadOnly/toString)

  - : Erstellt und gibt eine Zeichenkette zurück, die eine Zeichenfolgenrepräsentation der Matrix in CSS-Matrix-Syntax enthält, unter Verwendung der entsprechenden CSS-Matrix-Notation. Siehe die {{cssxref("transform-function/matrix", "matrix()")}} CSS-Funktion für Details zu dieser Syntax.

    Für eine 2D-Matrix werden die Elemente `a` bis `f` aufgelistet, insgesamt sechs Werte in der Form `matrix(a, b, c, d, e, f)`.

    Für eine 3D-Matrix enthält die zurückgegebene Zeichenkette alle 16 Elemente und hat die Form `matrix3d(m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44)`. Siehe die CSS {{cssxref("transform-function/matrix3d", "matrix3d()")}} Funktion für Details zur Syntax der 3D-Notation.

    Wirft eine `InvalidStateError` Ausnahme, wenn eines der Elemente in der Matrix nicht endlich ist (auch wenn im Falle einer 2D-Matrix die nicht endlichen Werte in nicht von der 2D-Matrix-Repräsentation verwendeten Elementen vorliegen).

- [`DOMMatrixReadOnly.transformPoint()`](/de/docs/Web/API/DOMMatrixReadOnly/transformPoint)
  - : Transformiert den angegebenen Punkt unter Verwendung der Matrix und gibt ein neues [`DOMPoint`](/de/docs/Web/API/DOMPoint) Objekt zurück, das den transformierten Punkt enthält. Weder die Matrix noch der ursprüngliche Punkt werden geändert.
- [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die eine Matrix enthält, die durch Übersetzen der Ursprungsmatrix mit dem angegebenen Vektor berechnet wurde. Standardmäßig ist der Vektor `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.

## Statische Methoden

- [`fromFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat32Array)
  - : Erstellt ein neues veränderliches `DOMMatrix` Objekt aus einem Array von Einzelpräzisions- (32 Bit) Gleitkommawerten. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}} Ausnahme ausgelöst.
- [`fromFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat64Array)
  - : Erstellt ein neues veränderliches `DOMMatrix` Objekt aus einem Array von Doppelpräzisions- (64 Bit) Gleitkommawerten. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}} Ausnahme ausgelöst.
- [`fromMatrix()`](/de/docs/Web/API/DOMMatrixReadOnly/fromMatrix)
  - : Erstellt ein neues veränderliches `DOMMatrix` Objekt aus einer bestehenden Matrix oder einem Objekt, das die Werte für seine Eigenschaften bereitstellt. Wenn keine Matrix angegeben wird, wird die Matrix mit jedem Element auf `0` initialisiert, _außer_ der rechten unteren Ecke und dem unmittelbar darüber und links davon befindlichen Element: `m33` und `m34`. Diese haben den Standardwert `1`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der veränderliche Matrixtyp [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), der auf diesem basiert.
- Die CSS {{cssxref("transform-function/matrix", "matrix()")}} und {{cssxref("transform-function/matrix3d", "matrix3d()")}} Funktionalnotationen, die von diesem Interface generiert werden können, um in einem CSS {{cssxref("transform")}} verwendet zu werden.
