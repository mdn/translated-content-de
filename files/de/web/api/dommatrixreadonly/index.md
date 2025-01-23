---
title: DOMMatrixReadOnly
slug: Web/API/DOMMatrixReadOnly
l10n:
  sourceCommit: c783eb168e90b80e22f223d5126178ecf95b6135
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Das **`DOMMatrixReadOnly`** Interface repräsentiert eine schreibgeschützte 4×4-Matrix, geeignet für 2D- und 3D-Operationen. Das [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) Interface — das auf `DOMMatrixReadOnly` basiert — fügt [Mutabilität](https://en.wikipedia.org/wiki/Immutable_object) hinzu, wodurch Sie die Matrix nach ihrer Erstellung ändern können.

Dieses Interface sollte innerhalb von [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar sein, obwohl einige Implementierungen dies noch nicht erlauben.

## Konstruktor

- [`DOMMatrixReadOnly()`](/de/docs/Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly)
  - : Erstellt ein neues `DOMMatrixReadOnly`-Objekt.

## Instanzeigenschaften

_Dieses Interface erbt keine Eigenschaften._

- [`DOMMatrixReadOnly.is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D) {{ReadOnlyInline}}
  - : Ein boolesches Flag, dessen Wert `true` ist, wenn die Matrix als 2D-Matrix initialisiert wurde. Wenn `false`, ist die Matrix 3D.
- [`DOMMatrixReadOnly.isIdentity`](/de/docs/Web/API/DOMMatrixReadOnly/isIdentity) {{ReadOnlyInline}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die Matrix eine [Identitätsmatrix](https://en.wikipedia.org/wiki/Identity_matrix) ist.
- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Gleitkommazahlen mit doppelter Genauigkeit, die jede Komponente einer 4×4-Matrix darstellen, wobei `m11` bis `m14` die erste Spalte sind, `m21` bis `m24` die zweite Spalte, und so weiter.
- `a`, `b`, `c`, `d`, `e`, `f`

  - : Gleitkommazahlen mit doppelter Genauigkeit, die die Komponenten einer 4×4-Matrix darstellen, die erforderlich sind, um 2D-Rotationen und -Übersetzungen durchzuführen. Diese sind Aliase für bestimmte Komponenten einer 4×4-Matrix, wie unten gezeigt.

    | 2D  | 3D-Äquivalent |
    | --- | ------------- |
    | `a` | `m11`         |
    | `b` | `m12`         |
    | `c` | `m21`         |
    | `d` | `m22`         |
    | `e` | `m41`         |
    | `f` | `m42`         |

## Instanzmethoden

_Dieses Interface erbt keine Methoden. Keine der folgenden Methoden ändern die ursprüngliche Matrix._

- [`DOMMatrixReadOnly.flipX()`](/de/docs/Web/API/DOMMatrixReadOnly/flipX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch das Spiegeln der Quellmatrix um ihre X-Achse erstellt wurde. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(-1, 0, 0, 1, 0, 0)`. Die ursprüngliche Matrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.flipY()`](/de/docs/Web/API/DOMMatrixReadOnly/flipY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch das Spiegeln der Quellmatrix um ihre Y-Achse erstellt wurde. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(1, 0, 0, -1, 0, 0)`. Die ursprüngliche Matrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.inverse()`](/de/docs/Web/API/DOMMatrixReadOnly/inverse)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Invertieren der Quellmatrix erstellt wurde. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.multiply()`](/de/docs/Web/API/DOMMatrixReadOnly/multiply)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Berechnen des Skalarprodukts der Quellmatrix und der angegebenen Matrix erstellt wurde. Die ursprüngliche Matrix wird nicht geändert.
- [`DOMMatrixReadOnly.rotateAxisAngle()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateAxisAngle)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Quellmatrix um den gegebenen Winkel um den spezifizierten Vektor erstellt wurde. Die ursprüngliche Matrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Quellmatrix um jede ihrer Achsen um die angegebene Anzahl von Grad erstellt wurde. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotateFromVector()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateFromVector)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Quellmatrix um den Winkel zwischen dem spezifizierten Vektor und `(1, 0)` erstellt wurde. Die ursprüngliche Matrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalieren der Quellmatrix um den für jede Achse angegebenen Betrag erstellt wurde, zentriert auf den gegebenen Ursprung. Standardmäßig werden die X- und Z-Achse mit `1` skaliert, und die Y-Achse hat keinen Standard-Skalierungswert. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.scale3d()`](/de/docs/Web/API/DOMMatrixReadOnly/scale3d)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalieren der Quell-3D-Matrix um den angegebenen Faktor entlang aller Achsen erstellt wurde, zentriert auf den spezifizierten Ursprungspunkt. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.scaleNonUniform()`](/de/docs/Web/API/DOMMatrixReadOnly/scaleNonUniform) {{deprecated_inline}}
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Skalierung auf die X-, Y- und Z-Achsen erstellt wurde, zentriert auf den gegebenen Ursprung. Standardmäßig sind die Skalierungsfaktoren für die Y- und Z-Achse jeweils `1`, der Skalierungsfaktor für X muss jedoch angegeben werden. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht geändert.
- [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Schertransformation auf die Quellmatrix entlang ihrer X-Achse erstellt wurde. Die ursprüngliche Matrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Schertransformation auf die Quellmatrix entlang ihrer Y-Achse erstellt wurde. Die ursprüngliche Matrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.toFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat32Array)
  - : Gibt ein neues {{jsxref("Float32Array")}} von Gleitkommazahlen (32-Bit) mit einfacher Genauigkeit zurück, das alle 16 Elemente enthält, aus denen sich die Matrix zusammensetzt.
- [`DOMMatrixReadOnly.toFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat64Array)
  - : Gibt ein neues {{jsxref("Float64Array")}} von Gleitkommazahlen (64-Bit) mit doppelter Genauigkeit zurück, das alle 16 Elemente enthält, aus denen sich die Matrix zusammensetzt.
- [`DOMMatrixReadOnly.toJSON()`](/de/docs/Web/API/DOMMatrixReadOnly/toJSON)
  - : Gibt eine JSON-Repräsentation des `DOMMatrixReadOnly`-Objekts zurück.
- [`DOMMatrixReadOnly.toString()`](/de/docs/Web/API/DOMMatrixReadOnly/toString)
  - : Erstellt und gibt eine Zeichenkettenrepräsentation der Matrix im CSS-Matrix-Syntax zurück, die die entsprechende CSS-Matrix-Notation verwendet.
- [`DOMMatrixReadOnly.transformPoint()`](/de/docs/Web/API/DOMMatrixReadOnly/transformPoint)
  - : Transformiert den angegebenen Punkt mit der Matrix und gibt ein neues [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt zurück, das den transformierten Punkt enthält. Weder die Matrix noch der ursprüngliche Punkt werden verändert.
- [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die eine Matrix enthält, die durch Übersetzen der Quellmatrix mit dem angegebenen Vektor berechnet wurde. Standardmäßig ist der Vektor `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht geändert.

## Statische Methoden

- [`fromFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat32Array)
  - : Erstellt ein neues veränderbares `DOMMatrix`-Objekt aus einem Array von Gleitkommazahlen (32-Bit) mit einfacher Genauigkeit. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat64Array)
  - : Erstellt ein neues veränderbares `DOMMatrix`-Objekt aus einem Array von Gleitkommazahlen (64-Bit) mit doppelter Genauigkeit. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromMatrix()`](/de/docs/Web/API/DOMMatrixReadOnly/fromMatrix)
  - : Erstellt ein neues veränderbares `DOMMatrix`-Objekt aus einer bestehenden Matrix oder einem Objekt, das die Werte für seine Eigenschaften bereitstellt. Wenn keine Matrix angegeben ist, wird die Matrix mit jedem Element auf `0` initialisiert, _außer_ der unteren rechten Ecke und dem Element unmittelbar darüber und links daneben: `m33` und `m34`. Diese haben den Standardwert `1`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der veränderbare Matrixtyp, [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), der auf diesem basiert.
- Die CSS {{cssxref("transform-function/matrix", "matrix()")}} und {{cssxref("transform-function/matrix3d", "matrix3d()")}} Funktionsnotation, die aus diesem Interface generiert werden kann, um in einem CSS {{cssxref("transform")}} verwendet zu werden.
