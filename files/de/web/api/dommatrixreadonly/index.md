---
title: DOMMatrixReadOnly
slug: Web/API/DOMMatrixReadOnly
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Das **`DOMMatrixReadOnly`** Interface repräsentiert eine unveränderbare 4×4-Matrix, geeignet für 2D- und 3D-Operationen. Das [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Interface — welches auf `DOMMatrixReadOnly` basiert — fügt [Mutierbarkeit](https://en.wikipedia.org/wiki/Immutable_object) hinzu, wodurch Sie die Matrix nach ihrer Erstellung ändern können.

Dieses Interface sollte innerhalb von [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar sein, obwohl einige Implementierungen dies noch nicht erlauben.

## Konstruktor

- [`DOMMatrixReadOnly()`](/de/docs/Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly)
  - : Erstellt ein neues `DOMMatrixReadOnly` Objekt.

## Instanz-Eigenschaften

_Dieses Interface erbt keine Eigenschaften._

- [`DOMMatrixReadOnly.is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D) {{ReadOnlyInline}}
  - : Ein Boolean-Flag, dessen Wert `true` ist, wenn die Matrix als 2D-Matrix initialisiert wurde. Wenn `false`, ist die Matrix 3D.
- [`DOMMatrixReadOnly.isIdentity`](/de/docs/Web/API/DOMMatrixReadOnly/isIdentity) {{ReadOnlyInline}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die Matrix eine [Einheitsmatrix](https://en.wikipedia.org/wiki/Identity_matrix) ist.
- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Gleitkommazahlen mit doppelter Genauigkeit, die jede Komponente einer 4×4-Matrix darstellen, wobei `m11` bis `m14` die erste Spalte sind, `m21` bis `m24` die zweite Spalte und so weiter.
- `a`, `b`, `c`, `d`, `e`, `f`

  - : Gleitkommazahlen mit doppelter Genauigkeit, die die Komponenten einer 4×4-Matrix darstellen, die für 2D-Rotationen und Übersetzungen erforderlich sind. Diese sind Aliase für spezifische Komponenten einer 4×4-Matrix, wie unten gezeigt.

    | 2D  | 3D Äquivalent |
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
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Spiegeln der Quellmatrix um ihre X-Achse erstellt wurde. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(-1, 0, 0, 1, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.flipY()`](/de/docs/Web/API/DOMMatrixReadOnly/flipY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Spiegeln der Quellmatrix um ihre Y-Achse erstellt wurde. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(1, 0, 0, -1, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.inverse()`](/de/docs/Web/API/DOMMatrixReadOnly/inverse)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Invertierung der Quellmatrix erstellt wurde. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.multiply()`](/de/docs/Web/API/DOMMatrixReadOnly/multiply)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Berechnung des Punktprodukts der Quellmatrix und der angegebenen Matrix erstellt wurde. Die ursprüngliche Matrix wird nicht
- [`DOMMatrixReadOnly.rotateAxisAngle()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateAxisAngle)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Quellmatrix um den angegebenen Winkel um den spezifizierten Vektor erstellt wurde. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Quellmatrix um jeden ihrer Achsen um die angegebene Anzahl von Grad erstellt wurde. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotateFromVector()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateFromVector)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Quellmatrix um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` erstellt wurde. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalieren der Quellmatrix um den für jede Achse angegebenen Betrag erstellt wurde, zentriert am angegebenen Ursprung. Standardmäßig werden die X- und Z-Achsen mit `1` skaliert und die Y-Achse hat keinen Standardskalierungswert. Der Standard-Ursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.scale3d()`](/de/docs/Web/API/DOMMatrixReadOnly/scale3d)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalieren der Quell-3D-Matrix mit dem angegebenen Faktor entlang aller ihrer Achsen erstellt wurde, zentriert am angegebenen Ursprungspunkt. Der Standard-Ursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.scaleNonUniform()`](/de/docs/Web/API/DOMMatrixReadOnly/scaleNonUniform) {{deprecated_inline}}
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Skalierung auf die X-, Y- und Z-Achsen, zentriert am angegebenen Ursprung, erstellt wurde. Standardmäßig sind die Skalierungsfaktoren der Y- und Z-Achsen beide `1`, aber der Skalierungsfaktor für X muss angegeben werden. Der Standard-Ursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Schertransformation auf die Quellmatrix entlang ihrer X-Achse erstellt wurde. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Schertransformation auf die Quellmatrix entlang ihrer Y-Achse erstellt wurde. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.toFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat32Array)
  - : Gibt eine neue {{jsxref("Float32Array")}} von Gleitkommazahlen mit einfacher Genauigkeit zurück, die alle 16 Elemente enthält, aus denen die Matrix besteht.
- [`DOMMatrixReadOnly.toFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat64Array)
  - : Gibt eine neue {{jsxref("Float64Array")}} von Gleitkommazahlen mit doppelter Genauigkeit zurück, die alle 16 Elemente enthält, aus denen die Matrix besteht.
- [`DOMMatrixReadOnly.toJSON()`](/de/docs/Web/API/DOMMatrixReadOnly/toJSON)
  - : Gibt eine JSON-Darstellung des `DOMMatrixReadOnly` Objekts zurück.
- [`DOMMatrixReadOnly.toString()`](/de/docs/Web/API/DOMMatrixReadOnly/toString)
  - : Erstellt und gibt eine Zeichenfolgendarstellung der Matrix im CSS-Matrix-Syntax zurück, unter Verwendung der entsprechenden CSS-Matrix-Notation.
- [`DOMMatrixReadOnly.transformPoint()`](/de/docs/Web/API/DOMMatrixReadOnly/transformPoint)
  - : Transformiert den angegebenen Punkt unter Verwendung der Matrix und gibt ein neues [`DOMPoint`](/de/docs/Web/API/DOMPoint) Objekt zurück, das den transformierten Punkt enthält. Weder die Matrix noch der ursprüngliche Punkt werden verändert.
- [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die eine Matrix enthält, die durch Übersetzen der Quellmatrix mit dem angegebenen Vektor berechnet wurde. Standardmäßig ist der Vektor `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.

## Statische Methoden

- [`fromFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat32Array_static)
  - : Erstellt ein neues veränderbares `DOMMatrix` Objekt aus einem Array von Gleitkommazahlen mit einfacher Genauigkeit (32-Bit). Hat das Array sechs Werte, ist das Ergebnis eine 2D-Matrix; hat es 16 Werte, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}} Ausnahme ausgelöst.
- [`fromFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat64Array_static)
  - : Erstellt ein neues veränderbares `DOMMatrix` Objekt aus einem Array von Gleitkommazahlen mit doppelter Genauigkeit (64-Bit). Hat das Array sechs Werte, ist das Ergebnis eine 2D-Matrix; hat es 16 Werte, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}} Ausnahme ausgelöst.
- [`fromMatrix()`](/de/docs/Web/API/DOMMatrixReadOnly/fromMatrix_static)
  - : Erstellt ein neues veränderbares `DOMMatrix` Objekt aus einer vorhandenen Matrix oder einem Objekt, das die Werte für seine Eigenschaften bereitstellt. Wenn keine Matrix angegeben ist, wird die Matrix initialisiert, indem jedes Element auf `0` gesetzt wird, _mit Ausnahme von_ der rechten unteren Ecke und dem Element direkt darüber und links daneben: `m33` und `m34`. Diese haben den Standardwert `1`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der veränderbare Matrixtyp, [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), welcher auf diesem basiert.
- Die CSS {{cssxref("transform-function/matrix", "matrix()")}} und {{cssxref("transform-function/matrix3d", "matrix3d()")}} Funktionsnotation, die aus diesem Interface generiert werden kann, um sie in einem CSS {{cssxref("transform")}} zu verwenden.
