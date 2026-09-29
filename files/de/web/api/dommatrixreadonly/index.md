---
title: DOMMatrixReadOnly
slug: Web/API/DOMMatrixReadOnly
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die Schnittstelle **`DOMMatrixReadOnly`** stellt eine schreibgeschützte 4×4-Matrix dar, die sich für 2D- und 3D-Operationen eignet. Die auf `DOMMatrixReadOnly` basierende Schnittstelle [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) ergänzt [Veränderbarkeit](https://en.wikipedia.org/wiki/Immutable_object), sodass Sie die Matrix nach ihrer Erstellung ändern können.

Diese Schnittstelle sollte in [Web Workern](/de/docs/Web/API/Web_Workers_API) verfügbar sein, allerdings lassen einige Implementierungen dies noch nicht zu.

## Konstruktor

- [`DOMMatrixReadOnly()`](/de/docs/Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly)
  - : Erstellt ein neues `DOMMatrixReadOnly`-Objekt.

## Instanzeigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- [`DOMMatrixReadOnly.is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn die Matrix als 2D-Matrix initialisiert wurde. Ist er `false`, handelt es sich um eine 3D-Matrix.
- [`DOMMatrixReadOnly.isIdentity`](/de/docs/Web/API/DOMMatrixReadOnly/isIdentity) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn die Matrix eine [Einheitsmatrix](https://en.wikipedia.org/wiki/Identity_matrix) ist.
- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Gleitkommawerte mit doppelter Genauigkeit, die jeweils eine Komponente einer 4×4-Matrix darstellen. Dabei bilden `m11` bis `m14` die erste Spalte, `m21` bis `m24` die zweite Spalte und so weiter.
- `a`, `b`, `c`, `d`, `e`, `f`
  - : Gleitkommawerte mit doppelter Genauigkeit, die die für 2D-Rotationen und -Translationen benötigten Komponenten einer 4×4-Matrix darstellen. Sie sind Aliasse für bestimmte Komponenten einer 4×4-Matrix, wie unten gezeigt.

    | 2D  | 3D-Entsprechung |
    | --- | --------------- |
    | `a` | `m11`           |
    | `b` | `m12`           |
    | `c` | `m21`           |
    | `d` | `m22`           |
    | `e` | `m41`           |
    | `f` | `m42`           |

## Instanzmethoden

_Diese Schnittstelle erbt keine Methoden. Keine der folgenden Methoden verändert die ursprüngliche Matrix._

- [`DOMMatrixReadOnly.flipX()`](/de/docs/Web/API/DOMMatrixReadOnly/flipX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Spiegelung der Ausgangsmatrix an ihrer X-Achse entsteht. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(-1, 0, 0, 1, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.flipY()`](/de/docs/Web/API/DOMMatrixReadOnly/flipY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Spiegelung der Ausgangsmatrix an ihrer Y-Achse entsteht. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(1, 0, 0, -1, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.inverse()`](/de/docs/Web/API/DOMMatrixReadOnly/inverse)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Invertieren der Ausgangsmatrix entsteht. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.multiply()`](/de/docs/Web/API/DOMMatrixReadOnly/multiply)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Berechnung des Produkts der Ausgangsmatrix mit der angegebenen Matrix entsteht. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotateAxisAngle()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateAxisAngle)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Rotation der Ausgangsmatrix um den angegebenen Vektor mit dem angegebenen Winkel entsteht. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Rotation der Ausgangsmatrix um jede ihrer Achsen um die jeweils angegebene Gradzahl entsteht. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotateFromVector()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateFromVector)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Rotation der Ausgangsmatrix um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` entsteht. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalierung der Ausgangsmatrix um den für jede Achse angegebenen Wert mit dem angegebenen Ursprung als Zentrum entsteht. Standardmäßig werden die X- und Z-Achse mit `1` skaliert; für die Y-Achse gibt es keinen Standardwert. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.scale3d()`](/de/docs/Web/API/DOMMatrixReadOnly/scale3d)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalierung der 3D-Ausgangsmatrix um den angegebenen Faktor entlang aller ihrer Achsen mit dem angegebenen Ursprungspunkt als Zentrum entsteht. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.scaleNonUniform()`](/de/docs/Web/API/DOMMatrixReadOnly/scaleNonUniform) {{deprecated_inline}}
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwendung der angegebenen Skalierung auf die X-, Y- und Z-Achse mit dem angegebenen Ursprung als Zentrum entsteht. Standardmäßig betragen die Skalierungsfaktoren für die Y- und Z-Achse jeweils `1`; der Skalierungsfaktor für die X-Achse muss angegeben werden. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwendung der angegebenen Schertransformation entlang der X-Achse auf die Ausgangsmatrix entsteht. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwendung der angegebenen Schertransformation entlang der Y-Achse auf die Ausgangsmatrix entsteht. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.toFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat32Array)
  - : Gibt ein neues {{jsxref("Float32Array")}} mit Gleitkommazahlen einfacher Genauigkeit zurück, das alle 16 Elemente der Matrix enthält.
- [`DOMMatrixReadOnly.toFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat64Array)
  - : Gibt ein neues {{jsxref("Float64Array")}} mit Gleitkommazahlen doppelter Genauigkeit zurück, das alle 16 Elemente der Matrix enthält.
- [`DOMMatrixReadOnly.toJSON()`](/de/docs/Web/API/DOMMatrixReadOnly/toJSON)
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `DOMMatrixReadOnly`-Objekt darstellt. Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.
- [`DOMMatrixReadOnly.toString()`](/de/docs/Web/API/DOMMatrixReadOnly/toString)
  - : Erstellt eine Zeichenkettendarstellung der Matrix in CSS-Matrixsyntax mit der passenden CSS-Matrixnotation und gibt sie zurück.
- [`DOMMatrixReadOnly.transformPoint()`](/de/docs/Web/API/DOMMatrixReadOnly/transformPoint)
  - : Transformiert den angegebenen Punkt mithilfe der Matrix und gibt ein neues [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt zurück, das den transformierten Punkt enthält. Weder die Matrix noch der ursprüngliche Punkt werden verändert.
- [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die eine durch Translation der Ausgangsmatrix mit dem angegebenen Vektor berechnete Matrix enthält. Standardmäßig ist der Vektor `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.

## Statische Methoden

- [`fromFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat32Array_static)
  - : Erstellt ein neues `DOMMatrixReadOnly`-Objekt aus einem {{jsxref("Float32Array")}} mit 6 oder 16 Gleitkommawerten einfacher Genauigkeit (32 Bit).
- [`fromFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat64Array_static)
  - : Erstellt ein neues `DOMMatrixReadOnly`-Objekt aus einem {{jsxref("Float64Array")}} mit 6 oder 16 Gleitkommawerten doppelter Genauigkeit (64 Bit).
- [`fromMatrix()`](/de/docs/Web/API/DOMMatrixReadOnly/fromMatrix_static)
  - : Erstellt ein neues `DOMMatrixReadOnly`-Objekt aus einer vorhandenen Matrix oder einem Objekt, das die Werte für deren Eigenschaften bereitstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der veränderbare Matrixtyp [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), der auf dieser Schnittstelle basiert.
- Die funktionalen CSS-Notationen {{cssxref("transform-function/matrix", "matrix()")}} und {{cssxref("transform-function/matrix3d", "matrix3d()")}}, die aus dieser Schnittstelle für die Verwendung in einer CSS-{{cssxref("transform")}}-Eigenschaft erzeugt werden können.
