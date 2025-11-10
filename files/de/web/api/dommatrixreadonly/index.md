---
title: DOMMatrixReadOnly
slug: Web/API/DOMMatrixReadOnly
l10n:
  sourceCommit: e8ccddf06c8a9d700661ce2239ecaa4bf88a9529
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`DOMMatrixReadOnly`**-Schnittstelle repräsentiert eine schreibgeschützte 4×4-Matrix, die für 2D- und 3D-Operationen geeignet ist. Die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Schnittstelle — die auf `DOMMatrixReadOnly` basiert — fügt [Veränderbarkeit](https://en.wikipedia.org/wiki/Immutable_object) hinzu, sodass Sie die Matrix nach ihrer Erstellung ändern können.

Diese Schnittstelle sollte innerhalb von [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar sein, obwohl einige Implementierungen dies noch nicht erlauben.

## Konstruktor

- [`DOMMatrixReadOnly()`](/de/docs/Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly)
  - : Erstellt ein neues `DOMMatrixReadOnly`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- [`DOMMatrixReadOnly.is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D) {{ReadOnlyInline}}
  - : Ein Boolean-Flag, dessen Wert `true` ist, wenn die Matrix als 2D-Matrix initialisiert wurde. Ist der Wert `false`, ist die Matrix 3D.
- [`DOMMatrixReadOnly.isIdentity`](/de/docs/Web/API/DOMMatrixReadOnly/isIdentity) {{ReadOnlyInline}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die Matrix eine [Einheitsmatrix](https://en.wikipedia.org/wiki/Identity_matrix) ist.
- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Doppelpräzisions-Gleitkommawerte, die jede Komponente einer 4×4-Matrix repräsentieren, wobei `m11` bis `m14` die erste Spalte bilden, `m21` bis `m24` die zweite Spalte und so weiter.
- `a`, `b`, `c`, `d`, `e`, `f`
  - : Doppelpräzisions-Gleitkommawerte, die die Komponenten einer 4×4-Matrix repräsentieren, die erforderlich sind, um 2D-Rotationen und -Translationsoperationen durchzuführen. Diese sind Aliase für bestimmte Komponenten einer 4×4-Matrix, wie unten gezeigt.

    | 2D  | 3D-Äquivalent |
    | --- | ------------- |
    | `a` | `m11`         |
    | `b` | `m12`         |
    | `c` | `m21`         |
    | `d` | `m22`         |
    | `e` | `m41`         |
    | `f` | `m42`         |

## Instanz-Methoden

_Diese Schnittstelle erbt keine Methoden. Keine der folgenden Methoden ändern die ursprüngliche Matrix._

- [`DOMMatrixReadOnly.flipX()`](/de/docs/Web/API/DOMMatrixReadOnly/flipX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Spiegelung der Quellmatrix um ihre X-Achse erstellt wird. Dies entspricht dem Multiplizieren der Matrix mit `DOMMatrix(-1, 0, 0, 1, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.flipY()`](/de/docs/Web/API/DOMMatrixReadOnly/flipY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Spiegelung der Quellmatrix um ihre Y-Achse erstellt wird. Dies entspricht dem Multiplizieren der Matrix mit `DOMMatrix(1, 0, 0, -1, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.inverse()`](/de/docs/Web/API/DOMMatrixReadOnly/inverse)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Invertierung der Quellmatrix erstellt wurde. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.multiply()`](/de/docs/Web/API/DOMMatrixReadOnly/multiply)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Berechnung des Skalarprodukts der Quellmatrix und der angegebenen Matrix erstellt wird. Die ursprüngliche Matrix wird nicht geändert.
- [`DOMMatrixReadOnly.rotateAxisAngle()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateAxisAngle)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Quellmatrix um den angegebenen Winkel und um den spezifizierten Vektor erstellt wird. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Quellmatrix um jeden ihrer Achsen um die angegebene Anzahl von Grad erstellt wird. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotateFromVector()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateFromVector)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Rotation der Quellmatrix um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` erstellt wird. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalieren der Quellmatrix um den für jede Achse angegebenen Betrag und zentriert auf den angegebenen Ursprung erstellt wird. Standardmäßig werden die X- und Z-Achse um `1` skaliert und die Y-Achse hat keinen Standard-Skalierungswert. Der Standard-Ursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.scale3d()`](/de/docs/Web/API/DOMMatrixReadOnly/scale3d)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalierung der Quell-3D-Matrix um den angegebenen Faktor entlang aller Achsen und zentriert auf den spezifizierten Ursprungspunkt erstellt wird. Der Standard-Ursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.scaleNonUniform()`](/de/docs/Web/API/DOMMatrixReadOnly/scaleNonUniform) {{deprecated_inline}}
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Skalierung auf die X-, Y- und Z-Achsen und zentriert auf den angegebenen Ursprung erstellt wird. Standardmäßig sind die Skalierungsfaktoren für die Y- und Z-Achse beide `1`, aber der Skalierungsfaktor für die X-Achse muss angegeben werden. Der Standard-Ursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Schrägtransformation auf die Quellmatrix entlang ihrer X-Achse erstellt wird. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Schrägtransformation auf die Quellmatrix entlang ihrer Y-Achse erstellt wird. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.toFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat32Array)
  - : Gibt eine neue {{jsxref("Float32Array")}} von Einzelpräzisions-Gleitkommazahlen zurück, die alle 16 Elemente enthält, die die Matrix bilden.
- [`DOMMatrixReadOnly.toFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat64Array)
  - : Gibt eine neue {{jsxref("Float64Array")}} von Doppelpräzisions-Gleitkommazahlen zurück, die alle 16 Elemente enthält, die die Matrix bilden.
- [`DOMMatrixReadOnly.toJSON()`](/de/docs/Web/API/DOMMatrixReadOnly/toJSON)
  - : Gibt eine JSON-Darstellung des `DOMMatrixReadOnly`-Objekts zurück.
- [`DOMMatrixReadOnly.toString()`](/de/docs/Web/API/DOMMatrixReadOnly/toString)
  - : Erstellt und gibt eine Zeichenfolgen-Darstellung der Matrix in CSS-Matrix-Syntax zurück, wobei die geeignete CSS-Matrix-Notation verwendet wird.
- [`DOMMatrixReadOnly.transformPoint()`](/de/docs/Web/API/DOMMatrixReadOnly/transformPoint)
  - : Transformiert den angegebenen Punkt unter Verwendung der Matrix und gibt ein neues [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt zurück, das den transformierten Punkt enthält. Weder die Matrix noch der ursprüngliche Punkt werden verändert.
- [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die eine Matrix enthält, die durch Übersetzen der Quellmatrix mit dem angegebenen Vektor berechnet wird. Standardmäßig ist der Vektor `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.

## Statische Methoden

- [`fromFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat32Array_static)
  - : Erstellt ein neues `DOMMatrixReadOnly`-Objekt aus einer {{jsxref("Float32Array")}} von 6 oder 16 Einzelpräzisions- (32-Bit) Gleitkommazahlen.
- [`fromFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat64Array_static)
  - : Erstellt ein neues `DOMMatrixReadOnly`-Objekt aus einer {{jsxref("Float64Array")}} von 6 oder 16 Doppelpräzisions- (64-Bit) Gleitkommazahlen.
- [`fromMatrix()`](/de/docs/Web/API/DOMMatrixReadOnly/fromMatrix_static)
  - : Erstellt ein neues `DOMMatrixReadOnly`-Objekt, das eine bestehende Matrix oder ein Objekt, das die Werte für seine Eigenschaften bereitstellt, verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der veränderbare Matrixtyp, [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), der auf diesem basiert.
- Die CSS-{{cssxref("transform-function/matrix", "matrix()")}}- und {{cssxref("transform-function/matrix3d", "matrix3d()")}}-Funktionalnotationen, die aus dieser Schnittstelle generiert werden können, um in einem CSS-{{cssxref("transform")}} verwendet zu werden.
