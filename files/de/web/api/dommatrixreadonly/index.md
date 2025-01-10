---
title: DOMMatrixReadOnly
slug: Web/API/DOMMatrixReadOnly
l10n:
  sourceCommit: 5e7036455cd79e30e9953fb29f22c691cb8326e4
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`DOMMatrixReadOnly`**-Schnittstelle repräsentiert eine schreibgeschützte 4×4-Matrix, die für 2D- und 3D-Operationen geeignet ist. Die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Schnittstelle — die auf `DOMMatrixReadOnly` basiert — fügt [Veränderlichkeit](<https://de.wikipedia.org/wiki/Unveränderlichkeit_(Softwareentwicklung)>) hinzu, sodass Sie die Matrix nach ihrer Erstellung ändern können.

Diese Schnittstelle sollte in [Webarbeitern](/de/docs/Web/API/Web_Workers_API) verfügbar sein, obwohl einige Implementierungen dies noch nicht zulassen.

## Konstruktor

- [`DOMMatrixReadOnly()`](/de/docs/Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly)
  - : Erstellt ein neues `DOMMatrixReadOnly`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- `is2D` {{ReadOnlyInline}}
  - : Ein boolesches Flag, dessen Wert `true` ist, wenn die Matrix als 2D-Matrix initialisiert wurde. Wenn `false`, ist die Matrix 3D.
- `isIdentity` {{ReadOnlyInline}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die Matrix die [Identitätsmatrix](https://de.wikipedia.org/wiki/Einheitsmatrix) ist. Die Identitätsmatrix ist eine Matrix, in der jeder Wert `0` ist, _außer_ denen auf der Hauptdiagonale von der oberen linken zur unteren rechten Ecke (mit anderen Worten, wo die Offsets in jeder Richtung gleich sind).
- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Doppelgenauigkeit-Gleitkommawerte, die jede Komponente einer 4×4-Matrix darstellen, wobei `m11` bis `m14` die erste Spalte sind, `m21` bis `m24` die zweite Spalte sind, und so weiter.
- `a`, `b`, `c`, `d`, `e`, `f`

  - : Doppelgenauigkeit-Gleitkommawerte, die die Komponenten einer 4×4-Matrix darstellen, die notwendig sind, um 2D-Drehungen und Übersetzungen durchzuführen. Diese sind Aliase für spezifische Komponenten einer 4×4-Matrix, wie im Folgenden gezeigt.

    | 2D  | 3D-Äquivalent |
    | --- | ------------- |
    | `a` | `m11`         |
    | `b` | `m12`         |
    | `c` | `m21`         |
    | `d` | `m22`         |
    | `e` | `m41`         |
    | `f` | `m42`         |

## Instanz-Methoden

_Diese Schnittstelle erbt keine Methoden. Keine der folgenden Methoden ändert die ursprüngliche Matrix._

- [`DOMMatrixReadOnly.flipX()`](/de/docs/Web/API/DOMMatrixReadOnly/flipX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Spiegeln der Ausgangsmatrix um ihre X-Achse entsteht. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(-1, 0, 0, 1, 0, 0)`. Die ursprüngliche Matrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.flipY()`](/de/docs/Web/API/DOMMatrixReadOnly/flipY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Spiegeln der Ausgangsmatrix um ihre Y-Achse entsteht. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(1, 0, 0, -1, 0, 0)`. Die ursprüngliche Matrix wird nicht modifiziert.
- [`DOMMatrixReadOnly.inverse()`](/de/docs/Web/API/DOMMatrixReadOnly/inverse)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Invertieren der Ausgangsmatrix entsteht. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.multiply()`](/de/docs/Web/API/DOMMatrixReadOnly/multiply)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Berechnung des Skalarprodukts der Ausgangsmatrix und der angegebenen Matrix entsteht. Die ursprüngliche Matrix bleibt unverändert.
- [`DOMMatrixReadOnly.rotateAxisAngle()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateAxisAngle)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Ausgangsmatrix um den angegebenen Vektorwinkel entsteht. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Ausgangsmatrix um jede ihrer Achsen um die angegebene Anzahl von Grad entsteht. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotateFromVector()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateFromVector)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Ausgangsmatrix um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` entsteht. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalieren der Ausgangsmatrix um den angegebenen Betrag für jede Achse entsteht, zentriert auf dem angegebenen Ursprung. Standardmäßig werden die X- und Z-Achsen um `1` skaliert und die Y-Achse hat keinen Standard-Skalierungswert. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.scale3d()`](/de/docs/Web/API/DOMMatrixReadOnly/scale3d)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die entsteht, indem die 3D-Ausgangsmatrix entlang aller ihrer Achsen mit dem angegebenen Faktor skaliert wird, zentriert auf dem angegebenen Ursprungspunkt. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.scaleNonUniform()`](/de/docs/Web/API/DOMMatrixReadOnly/scaleNonUniform) {{deprecated_inline}}
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die entsteht, indem die angegebene Skalierung auf die X-, Y- und Z-Achse angewendet wird, zentriert am angegebenen Ursprung. Standardmäßig sind die Skalierungsfaktoren der Y- und Z-Achsen jeweils `1`, aber der Skalierungsfaktor für X muss angegeben werden. Der Standardursprung ist `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die entsteht, indem die angegebene Schrägtransformation auf die Ausgangsmatrix entlang ihrer X-Achse angewendet wird. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die entsteht, indem die angegebene Schrägtransformation auf die Ausgangsmatrix entlang ihrer Y-Achse angewendet wird. Die ursprüngliche Matrix wird nicht verändert.
- [`DOMMatrixReadOnly.toFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat32Array)
  - : Gibt ein neues {{jsxref("Float32Array")}} von einfachgenauen Gleitkommazahlen zurück, das alle 16 Elemente enthält, die die Matrix bilden.
- [`DOMMatrixReadOnly.toFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat64Array)
  - : Gibt ein neues {{jsxref("Float64Array")}} von doppelgenauen Gleitkommazahlen zurück, das alle 16 Elemente enthält, die die Matrix bilden.
- [`DOMMatrixReadOnly.toJSON()`](/de/docs/Web/API/DOMMatrixReadOnly/toJSON)
  - : Gibt eine JSON-Darstellung des `DOMMatrixReadOnly`-Objekts zurück.
- [`DOMMatrixReadOnly.toString()`](/de/docs/Web/API/DOMMatrixReadOnly/toString)
  - : Erstellt und gibt eine String-Darstellung der Matrix in CSS-Matrix-Syntax zurück, wobei die geeignete CSS-Matrixnotation verwendet wird.
- [`DOMMatrixReadOnly.transformPoint()`](/de/docs/Web/API/DOMMatrixReadOnly/transformPoint)
  - : Transformiert den angegebenen Punkt mittels der Matrix und gibt ein neues [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt zurück, das den transformierten Punkt enthält. Weder die Matrix noch der ursprüngliche Punkt werden verändert.
- [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die eine Matrix enthält, die durch Übersetzen der Ausgangsmatrix mittels des angegebenen Vektors berechnet wird. Standardmäßig ist der Vektor `(0, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.

## Statische Methoden

- [`fromFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat32Array)
  - : Erstellt ein neues veränderliches `DOMMatrix`-Objekt, das ein Array mit einfachgenauen (32-Bit) Gleitkommawerten enthält. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Ansonsten wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat64Array)
  - : Erstellt ein neues veränderliches `DOMMatrix`-Objekt, das ein Array mit doppelgenauen (64-Bit) Gleitkommawerten enthält. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Ansonsten wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromMatrix()`](/de/docs/Web/API/DOMMatrixReadOnly/fromMatrix)
  - : Erstellt ein neues veränderliches `DOMMatrix`-Objekt, indem eine bestehende Matrix oder ein Objekt angegeben wird, das die Werte für seine Eigenschaften bereitstellt. Wenn keine Matrix angegeben ist, wird die Matrix mit jedem Element auf `0` initialisiert, _außer_ der unteren rechten Ecke und dem Element unmittelbar darüber und links davon: `m33` und `m34`. Diese haben den Standardwert von `1`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der veränderliche Matrixtyp, [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), der auf diesem basiert.
- Die CSS {{cssxref("transform-function/matrix", "matrix()")}}- und {{cssxref("transform-function/matrix3d", "matrix3d()")}}-Funktionen, die von dieser Schnittstelle generiert werden können, um in einem CSS-{{cssxref("transform")}} verwendet zu werden.
