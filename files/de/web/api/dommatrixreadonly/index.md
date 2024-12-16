---
title: DOMMatrixReadOnly
slug: Web/API/DOMMatrixReadOnly
l10n:
  sourceCommit: aef2b0dde53e2b5afa6dedd3e3693a85d2782b3e
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`DOMMatrixReadOnly`**-Schnittstelle repräsentiert eine schreibgeschützte 4×4-Matrix, die sich für 2D- und 3D-Operationen eignet. Die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Schnittstelle — die auf `DOMMatrixReadOnly` basiert — fügt [Veränderlichkeit](https://en.wikipedia.org/wiki/Immutable_object) hinzu, wodurch Sie die Matrix nach ihrer Erstellung ändern können.

Diese Schnittstelle sollte innerhalb von [Web-Arbeitern](/de/docs/Web/API/Web_Workers_API) verfügbar sein, wobei einige Implementierungen dies noch nicht erlauben.

## Konstruktor

- [`DOMMatrixReadOnly()`](/de/docs/Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly)
  - : Erstellt ein neues `DOMMatrixReadOnly`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- `is2D` {{ReadOnlyInline}}
  - : Ein Boolescher Wert, der `true` ist, wenn die Matrix als 2D-Matrix initialisiert wurde. Wenn `false`, ist die Matrix 3D.
- `isIdentity` {{ReadOnlyInline}}
  - : Ein Boolescher Wert, der `true` ist, wenn die Matrix die [Einheitsmatrix](https://en.wikipedia.org/wiki/Identity_matrix) ist. Die Einheitsmatrix ist eine Matrix, in der jeder Wert `0` ist, _außer_ denen auf der Hauptdiagonale von der oberen linken bis zur unteren rechten Ecke (mit anderen Worten, wo die Offsets in jede Richtung gleich sind).
- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Gleitkommawerte mit doppelter Genauigkeit, die jede Komponente einer 4×4-Matrix darstellen, wobei `m11` bis `m14` die erste Spalte sind, `m21` bis `m24` die zweite Spalte usw.
- `a`, `b`, `c`, `d`, `e`, `f`

  - : Gleitkommawerte mit doppelter Genauigkeit, die die Komponenten einer 4×4-Matrix darstellen, die erforderlich sind, um 2D-Rotationen und -Übersetzungen durchzuführen. Dies sind Aliase für spezifische Komponenten einer 4×4-Matrix, wie unten gezeigt.

    | 2D  | 3D-Äquivalent |
    | --- | ------------- |
    | `a` | `m11`         |
    | `b` | `m12`         |
    | `c` | `m21`         |
    | `d` | `m22`         |
    | `e` | `m41`         |
    | `f` | `m42`         |

## Instanz-Methoden

_Diese Schnittstelle erbt keine Methoden. Keine der folgenden Methoden ändert die Originalmatrix._

- [`DOMMatrixReadOnly.flipX()`](/de/docs/Web/API/DOMMatrixReadOnly/flipX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Spiegeln der Quellmatrix um ihre X-Achse erstellt wurde. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(-1, 0, 0, 1, 0, 0)`. Die Originalmatrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.flipY()`](/de/docs/Web/API/DOMMatrixReadOnly/flipY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Spiegeln der Quellmatrix um ihre Y-Achse erstellt wurde. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(1, 0, 0, -1, 0, 0)`. Die Originalmatrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.inverse()`](/de/docs/Web/API/DOMMatrixReadOnly/inverse)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Invertieren der Quellmatrix erstellt wurde. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.multiply()`](/de/docs/Web/API/DOMMatrixReadOnly/multiply)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Berechnung des Skalarprodukts der Quellmatrix und der angegebenen Matrix erstellt wurde: `A⋅B`. Wenn keine Matrix als Multiplikator angegeben wird, wird die Matrix mit einer Matrix multipliziert, in der jedes Element `0` ist, _außer_ der unteren rechten Ecke und dem Element direkt darüber und links davon: `m33` und `m34`. Diese haben den Standardwert `1`. Die Originalmatrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.rotateAxisAngle()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateAxisAngle)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Quellmatrix um den angegebenen Vektor um den angegebenen Winkel erstellt wurde. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Quellmatrix um jeden ihrer Achsen um die angegebene Anzahl von Grad erstellt wurde. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotateFromVector()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateFromVector)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Quellmatrix um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` erstellt wurde. Die Originalmatrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalieren der Quellmatrix um die für jede Achse angegebene Menge erstellt wurde, zentriert auf den angegebenen Ursprung. Standardmäßig werden die X- und Z-Achsen mit `1` skaliert, und die Y-Achse hat keinen Standardskalierungswert. Der Standardursprung ist `(0, 0, 0)`. Die Originalmatrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.scale3d()`](/de/docs/Web/API/DOMMatrixReadOnly/scale3d)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalieren der Quell-3D-Matrix um den gegebenen Faktor entlang all ihrer Achsen, zentriert auf den angegebenen Ursprungsort, erstellt wurde. Der Standardursprung ist `(0, 0, 0)`. Die Originalmatrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.scaleNonUniform()`](/de/docs/Web/API/DOMMatrixReadOnly/scaleNonUniform) {{deprecated_inline}}
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Skalierung auf die X-, Y- und Z-Achsen, zentriert am angegebenen Ursprung, erstellt wurde. Standardmäßig beträgt der Skalenfaktor der Y- und Z-Achsen jeweils `1`, aber der Skalierungsfaktor für X muss angegeben werden. Der Standardursprung ist `(0, 0, 0)`. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Schertransformation auf die Quellmatrix entlang ihrer X-Achse erstellt wurde. Die Originalmatrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Schertransformation auf die Quellmatrix entlang ihrer Y-Achse erstellt wurde. Die Originalmatrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.toFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat32Array)
  - : Gibt ein neues {{jsxref("Float32Array")}} zurück, das alle 16 Elemente (`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`), die die Matrix bilden, enthält. Die Elemente werden in der Matrix als Fließkommazahlen einfacher Präzision in Spalten-Major-Ordnung (colexographischer Zugriff oder "colex") gespeichert. (Mit anderen Worten, die erste Spalte von oben nach unten, dann die zweite Spalte usw.)
- [`DOMMatrixReadOnly.toFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat64Array)
  - : Gibt ein neues {{jsxref("Float64Array")}} zurück, das alle 16 Elemente (`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`), die die Matrix bilden, enthält. Die Elemente werden in der Matrix als Fließkommazahlen doppelte Präzision in Spalten-Major-Ordnung (colexographischer Zugriff oder "colex") gespeichert. (Mit anderen Worten, die erste Spalte von oben nach unten, dann die zweite Spalte usw.)
- [`DOMMatrixReadOnly.toJSON()`](/de/docs/Web/API/DOMMatrixReadOnly/toJSON)
  - : Gibt eine JSON-Darstellung des `DOMMatrixReadOnly`-Objekts zurück.
- [`DOMMatrixReadOnly.toString()`](/de/docs/Web/API/DOMMatrixReadOnly/toString)
  - : Erstellt und gibt eine String-Darstellung der Matrix in der CSS-Matrix-Syntax zurück, unter Verwendung der geeigneten CSS-Matrix-Notation.
- [`DOMMatrixReadOnly.transformPoint()`](/de/docs/Web/API/DOMMatrixReadOnly/transformPoint)
  - : Transformiert den angegebenen Punkt unter Verwendung der Matrix und gibt ein neues [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt zurück, das den transformierten Punkt enthält. Weder die Matrix noch der Originalpunkt werden verändert.
- [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die eine durch die Übersetzung der Quellmatrix mit dem angegebenen Vektor berechnete Matrix enthält. Standardmäßig ist der Vektor `(0, 0, 0)`. Die Originalmatrix wird nicht geändert.

## Statische Methoden

- [`fromFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat32Array)
  - : Erstellt ein neues veränderliches `DOMMatrix`-Objekt aus einem Array einzelpräziser (32-Bit) Gleitkommazahlen. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat64Array)
  - : Erstellt ein neues veränderliches `DOMMatrix`-Objekt aus einem Array doppelter Präzision (64-Bit) Gleitkommazahlen. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromMatrix()`](/de/docs/Web/API/DOMMatrixReadOnly/fromMatrix)
  - : Erstellt ein neues veränderliches `DOMMatrix`-Objekt aus einer vorhandenen Matrix oder einem Objekt, das die Werte für seine Eigenschaften bereitstellt. Wenn keine Matrix angegeben wird, wird die Matrix mit jedem Element auf `0` initialisiert, _außer_ der unteren rechten Ecke und dem Element direkt darüber und links davon: `m33` und `m34`. Diese haben den Standardwert `1`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der veränderliche Matrixtyp, [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), der auf dieser Schnittstelle basiert.
- Die CSS-{{cssxref("transform-function/matrix", "matrix()")}} und {{cssxref("transform-function/matrix3d", "matrix3d()")}} funktionale Notation, die von dieser Schnittstelle generiert werden kann, um in einem CSS-{{cssxref("transform")}} verwendet zu werden.
