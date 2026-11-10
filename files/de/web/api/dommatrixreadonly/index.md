---
title: DOMMatrixReadOnly
slug: Web/API/DOMMatrixReadOnly
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Das Interface **`DOMMatrixReadOnly`** repräsentiert eine schreibgeschützte 4×4-Matrix, die sich für 2D- und 3D-Operationen eignet. Das Interface [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), das auf `DOMMatrixReadOnly` basiert, ist dagegen [veränderbar](https://en.wikipedia.org/wiki/Immutable_object). Dadurch können Sie die Matrix nach ihrer Erstellung ändern.

Dieses Interface sollte in [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar sein, allerdings ermöglichen einige Implementierungen dies noch nicht.

## Konstruktor

- [`DOMMatrixReadOnly()`](/de/docs/Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly)
  - : Erstellt ein neues `DOMMatrixReadOnly`-Objekt.

## Instanzeigenschaften

_Dieses Interface erbt keine Eigenschaften._

- [`DOMMatrixReadOnly.is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn die Matrix als 2D-Matrix initialisiert wurde. Bei `false` ist die Matrix eine 3D-Matrix.
- [`DOMMatrixReadOnly.isIdentity`](/de/docs/Web/API/DOMMatrixReadOnly/isIdentity) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn die Matrix eine [Einheitsmatrix](https://en.wikipedia.org/wiki/Identity_matrix) ist.
- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44` {{ReadOnlyInline}}
  - : Gleitkommawerte mit doppelter Genauigkeit, die jeweils eine Komponente einer 4×4-Matrix darstellen. Dabei bilden `m11` bis `m14` die erste Spalte, `m21` bis `m24` die zweite Spalte und so weiter.
- `a`, `b`, `c`, `d`, `e`, `f` {{ReadOnlyInline}}
  - : Gleitkommawerte mit doppelter Genauigkeit, die die für 2D-Rotationen und -Translationen benötigten Komponenten einer 4×4-Matrix darstellen. Sie sind Aliase für bestimmte Komponenten einer 4×4-Matrix, wie unten dargestellt.

    | 2D  | 3D-Entsprechung |
    | --- | --------------- |
    | `a` | `m11`           |
    | `b` | `m12`           |
    | `c` | `m21`           |
    | `d` | `m22`           |
    | `e` | `m41`           |
    | `f` | `m42`           |

## Statische Methoden

- [`fromFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat32Array_static)
  - : Erstellt ein neues `DOMMatrixReadOnly`-Objekt aus einem {{jsxref("Float32Array")}} mit 6 oder 16 Gleitkommawerten einfacher Genauigkeit (32 Bit).
- [`fromFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat64Array_static)
  - : Erstellt ein neues `DOMMatrixReadOnly`-Objekt aus einem {{jsxref("Float64Array")}} mit 6 oder 16 Gleitkommawerten doppelter Genauigkeit (64 Bit).
- [`fromMatrix()`](/de/docs/Web/API/DOMMatrixReadOnly/fromMatrix_static)
  - : Erstellt ein neues `DOMMatrixReadOnly`-Objekt aus einer vorhandenen Matrix oder einem Objekt, das die Werte für dessen Eigenschaften bereitstellt.

## Instanzmethoden

_Dieses Interface erbt keine Methoden. Keine der folgenden Methoden verändert die ursprüngliche Matrix._

- [`DOMMatrixReadOnly.flipX()`](/de/docs/Web/API/DOMMatrixReadOnly/flipX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Spiegeln der Ausgangsmatrix an ihrer X-Achse entsteht. Dies entspricht einer Multiplikation der Matrix mit `DOMMatrix(-1, 0, 0, 1, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.flipY()`](/de/docs/Web/API/DOMMatrixReadOnly/flipY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Spiegeln der Ausgangsmatrix an ihrer Y-Achse entsteht. Dies entspricht einer Multiplikation der Matrix mit `DOMMatrix(1, 0, 0, -1, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.inverse()`](/de/docs/Web/API/DOMMatrixReadOnly/inverse)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Invertieren der Ausgangsmatrix entsteht. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.multiply()`](/de/docs/Web/API/DOMMatrixReadOnly/multiply)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Berechnung des Skalarprodukts der Ausgangsmatrix und der angegebenen Matrix entsteht. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotateAxisAngle()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateAxisAngle)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Ausgangsmatrix um den angegebenen Winkel um den angegebenen Vektor entsteht. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Ausgangsmatrix um jede ihrer Achsen um die jeweils angegebene Gradzahl entsteht. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotateFromVector()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateFromVector)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Ausgangsmatrix um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` entsteht. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalieren der Ausgangsmatrix um den für jede Achse angegebenen Betrag entsteht, wobei der angegebene Ursprung als Mittelpunkt dient. Standardmäßig werden die X- und Z-Achse mit dem Faktor `1` skaliert; für die Y-Achse ist kein Skalierungswert voreingestellt. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.scale3d()`](/de/docs/Web/API/DOMMatrixReadOnly/scale3d)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalieren der 3D-Ausgangsmatrix mit dem angegebenen Faktor entlang aller ihrer Achsen entsteht, wobei der angegebene Ursprungspunkt als Mittelpunkt dient. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.scaleNonUniform()`](/de/docs/Web/API/DOMMatrixReadOnly/scaleNonUniform) {{deprecated_inline}}
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Skalierung entlang der X-, Y- und Z-Achse entsteht, wobei der angegebene Ursprung als Mittelpunkt dient. Standardmäßig betragen die Skalierungsfaktoren für die Y- und Z-Achse jeweils `1`; der Skalierungsfaktor für die X-Achse muss angegeben werden. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Schertransformation entlang der X-Achse auf die Ausgangsmatrix entsteht. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Schertransformation entlang der Y-Achse auf die Ausgangsmatrix entsteht. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.toFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat32Array)
  - : Gibt ein neues {{jsxref("Float32Array")}} mit Gleitkommazahlen einfacher Genauigkeit zurück, das alle 16 Elemente der Matrix enthält.
- [`DOMMatrixReadOnly.toFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat64Array)
  - : Gibt ein neues {{jsxref("Float64Array")}} mit Gleitkommazahlen doppelter Genauigkeit zurück, das alle 16 Elemente der Matrix enthält.
- [`DOMMatrixReadOnly.toJSON()`](/de/docs/Web/API/DOMMatrixReadOnly/toJSON)
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `DOMMatrixReadOnly`-Objekt repräsentiert. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.
- [`DOMMatrixReadOnly.toString()`](/de/docs/Web/API/DOMMatrixReadOnly/toString)
  - : Erstellt eine Zeichenfolgendarstellung der Matrix in CSS-Matrixsyntax mit der passenden CSS-Matrixnotation und gibt sie zurück.
- [`DOMMatrixReadOnly.transformPoint()`](/de/docs/Web/API/DOMMatrixReadOnly/transformPoint)
  - : Transformiert den angegebenen Punkt mithilfe der Matrix und gibt ein neues [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt zurück, das den transformierten Punkt enthält. Weder die Matrix noch der ursprüngliche Punkt werden verändert.
- [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, deren Matrix durch Translation der Ausgangsmatrix mithilfe des angegebenen Vektors berechnet wurde. Standardmäßig ist der Vektor `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der veränderbare Matrixtyp [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), der auf diesem Interface basiert.
- Die CSS-Funktionsnotationen {{cssxref("transform-function/matrix", "matrix()")}} und {{cssxref("transform-function/matrix3d", "matrix3d()")}}, die aus diesem Interface erzeugt und in einer CSS-{{cssxref("transform")}} verwendet werden können.
