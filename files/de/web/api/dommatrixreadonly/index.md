---
title: DOMMatrixReadOnly
slug: Web/API/DOMMatrixReadOnly
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Das **`DOMMatrixReadOnly`**-Interface stellt eine schreibgeschützte 4×4-Matrix dar, die für 2D- und 3D-Operationen geeignet ist. Das [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Interface — das auf `DOMMatrixReadOnly` basiert — fügt [Mutabilität](https://en.wikipedia.org/wiki/Immutable_object) hinzu, wodurch Sie die Matrix nach ihrer Erstellung ändern können.

Dieses Interface sollte innerhalb von [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar sein, obwohl einige Implementierungen dies noch nicht erlauben.

## Konstruktor

- [`DOMMatrixReadOnly()`](/de/docs/Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly)
  - : Erstellt ein neues `DOMMatrixReadOnly`-Objekt.

## Instanz-Eigenschaften

_Dieses Interface erbt keine Eigenschaften._

- [`DOMMatrixReadOnly.is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D) {{ReadOnlyInline}}
  - : Ein Boolean-Flag, dessen Wert `true` ist, wenn die Matrix als 2D-Matrix initialisiert wurde. Wenn `false`, ist die Matrix 3D.
- [`DOMMatrixReadOnly.isIdentity`](/de/docs/Web/API/DOMMatrixReadOnly/isIdentity) {{ReadOnlyInline}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die Matrix eine [Einheitsmatrix](https://en.wikipedia.org/wiki/Identity_matrix) ist.
- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Doppelt-präzise Fließkommazahlen, die jede Komponente einer 4×4-Matrix darstellen, wobei `m11` bis `m14` die erste Spalte sind, `m21` bis `m24` die zweite Spalte und so weiter.
- `a`, `b`, `c`, `d`, `e`, `f`

  - : Doppelt-präzise Fließkommazahlen, die die Komponenten einer 4×4-Matrix darstellen, die erforderlich sind, um 2D-Rotation und Translation durchzuführen. Diese sind Aliasse für spezifische Komponenten einer 4×4-Matrix, wie unten gezeigt.

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
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die erstellt wurde, indem die Quellmatrix entlang ihrer X-Achse gespiegelt wird. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(-1, 0, 0, 1, 0, 0)`. Die ursprüngliche Matrix wird nicht geändert.
- [`DOMMatrixReadOnly.flipY()`](/de/docs/Web/API/DOMMatrixReadOnly/flipY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die erstellt wurde, indem die Quellmatrix entlang ihrer Y-Achse gespiegelt wird. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(1, 0, 0, -1, 0, 0)`. Die ursprüngliche Matrix wird nicht geändert.
- [`DOMMatrixReadOnly.inverse()`](/de/docs/Web/API/DOMMatrixReadOnly/inverse)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die erstellt wurde, indem die Quellmatrix invertiert wird. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.multiply()`](/de/docs/Web/API/DOMMatrixReadOnly/multiply)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die erstellt wurde, indem das Skalarprodukt der Quellmatrix und der angegebenen Matrix berechnet wird. Die ursprüngliche Matrix ist nicht
- [`DOMMatrixReadOnly.rotateAxisAngle()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateAxisAngle)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die erstellt wurde, indem die Quellmatrix um den gegebenen Winkel um den angegebenen Vektor rotiert wird. Die ursprüngliche Matrix wird nicht geändert.
- [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die erstellt wurde, indem die Quellmatrix um jeden ihrer Achsen um die angegebenen Grad gedreht wird. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotateFromVector()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateFromVector)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die erstellt wurde, indem die Quellmatrix um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` rotiert wird. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die erstellt wurde, indem die Quellmatrix um den für jede Achse angegebenen Betrag skaliert wird, zentriert auf dem angegebenen Ursprung. Standardmäßig werden die X- und Z-Achsen um `1` skaliert und die Y-Achse hat keinen standardmäßigen Skalierungswert. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.scale3d()`](/de/docs/Web/API/DOMMatrixReadOnly/scale3d)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die erstellt wurde, indem die Quellmatrix in 3D um den gegebenen Faktor entlang aller Achsen skaliert wird, zentriert auf dem angegebenen Ursprungspunkt. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.scaleNonUniform()`](/de/docs/Web/API/DOMMatrixReadOnly/scaleNonUniform) {{deprecated_inline}}
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die erstellt wurde, indem die angegebene Skalierungen auf den X-, Y- und Z-Achsen angewendet werden, zentriert auf dem angegebenen Ursprung. Standardmäßig sind die Skalierungsfaktoren für die Y- und Z-Achse beide `1`, aber der Skalierungsfaktor für X muss angegeben werden. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die erstellt wurde, indem die angegebene Schertransformation auf die Quellmatrix entlang ihrer X-Achse angewendet wird. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die erstellt wurde, indem die angegebene Schertransformation auf die Quellmatrix entlang ihrer Y-Achse angewendet wird. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.toFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat32Array)
  - : Gibt ein neues {{jsxref("Float32Array")}} von einfach-präzisen Fließkommazahlen zurück, das alle 16 Elemente enthält, die die Matrix bilden.
- [`DOMMatrixReadOnly.toFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat64Array)
  - : Gibt ein neues {{jsxref("Float64Array")}} von doppelt-präzisen Fließkommazahlen zurück, das alle 16 Elemente enthält, die die Matrix bilden.
- [`DOMMatrixReadOnly.toJSON()`](/de/docs/Web/API/DOMMatrixReadOnly/toJSON)
  - : Gibt eine JSON-Darstellung des `DOMMatrixReadOnly`-Objekts zurück.
- [`DOMMatrixReadOnly.toString()`](/de/docs/Web/API/DOMMatrixReadOnly/toString)
  - : Erstellt und gibt eine Zeichenkettendarstellung der Matrix in CSS-Matrix-Notation zurück, indem die entsprechende CSS-Matrix-Notation verwendet wird.
- [`DOMMatrixReadOnly.transformPoint()`](/de/docs/Web/API/DOMMatrixReadOnly/transformPoint)
  - : Transformiert den angegebenen Punkt unter Verwendung der Matrix und gibt ein neues [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt zurück, das den transformierten Punkt enthält. Weder die Matrix noch der ursprüngliche Punkt werden verändert.
- [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die eine durch Translation der Quellmatrix unter Verwendung des angegebenen Vektors berechnete Matrix enthält. Standardmäßig ist der Vektor `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.

## Statische Methoden

- [`fromFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat32Array_static)
  - : Erstellt ein neues, veränderliches `DOMMatrix`-Objekt aus einem Array von einfach-präzisen (32-Bit) Fließkommazahlen. Hat das Array sechs Werte, ist das Ergebnis eine 2D-Matrix; hat das Array 16 Werte, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat64Array_static)
  - : Erstellt ein neues, veränderliches `DOMMatrix`-Objekt aus einem Array von doppelt-präzisen (64-Bit) Fließkommazahlen. Hat das Array sechs Werte, ist das Ergebnis eine 2D-Matrix; hat das Array 16 Werte, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromMatrix()`](/de/docs/Web/API/DOMMatrixReadOnly/fromMatrix_static)
  - : Erstellt ein neues, veränderliches `DOMMatrix`-Objekt basierend auf einer vorhandenen Matrix oder einem Objekt, das die Werte für seine Eigenschaften bereitstellt. Wenn keine Matrix angegeben ist, wird die Matrix mit jedem Element auf `0` initialisiert, _außer_ die Ecke unten rechts und das Element unmittelbar darüber und links davon: `m33` und `m34`. Diese haben den Standardwert `1`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der veränderbare Matrixtyp, [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), der auf diesem basiert.
- Die CSS {{cssxref("transform-function/matrix", "matrix()")}} und {{cssxref("transform-function/matrix3d", "matrix3d()")}} Funktionsnotation, die aus diesem Interface generiert werden kann, um in einem CSS {{cssxref("transform")}} verwendet zu werden.
