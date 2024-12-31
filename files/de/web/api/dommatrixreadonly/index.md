---
title: DOMMatrixReadOnly
slug: Web/API/DOMMatrixReadOnly
l10n:
  sourceCommit: 6ccc59de7fafb81a9cd90078c3380f931ae0af9a
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`DOMMatrixReadOnly`** Schnittstelle stellt eine schreibgeschützte 4×4-Matrix dar, die für 2D- und 3D-Operationen geeignet ist. Die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) Schnittstelle — welche auf `DOMMatrixReadOnly` basiert — fügt [Veränderbarkeit](https://en.wikipedia.org/wiki/Immutable_object) hinzu, wodurch Sie die Matrix nach ihrer Erstellung verändern können.

Diese Schnittstelle sollte innerhalb von [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar sein, obwohl einige Implementierungen dies noch nicht erlauben.

## Konstruktor

- [`DOMMatrixReadOnly()`](/de/docs/Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly)
  - : Erstellt ein neues `DOMMatrixReadOnly` Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- `is2D` {{ReadOnlyInline}}
  - : Ein Boolean-Flag, dessen Wert `true` ist, wenn die Matrix als 2D-Matrix initialisiert wurde. Wenn `false`, ist die Matrix 3D.
- `isIdentity` {{ReadOnlyInline}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die Matrix die [Einheitsmatrix](https://en.wikipedia.org/wiki/Identity_matrix) ist. Die Einheitsmatrix ist eine Matrix, in der jeder Wert `0` ist, _außer_ jene auf der Hauptdiagonalen von der oberen linken zur unteren rechten Ecke (mit anderen Worten, wo die Offsets in jeder Richtung gleich sind).
- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Doppelpräzisions-Gleitkommazahlen, die jede Komponente einer 4×4-Matrix darstellen, wobei `m11` bis `m14` die erste Spalte sind, `m21` bis `m24` die zweite Spalte und so weiter.
- `a`, `b`, `c`, `d`, `e`, `f`

  - : Doppelpräzisions-Gleitkommazahlen, die die Komponenten einer 4×4-Matrix darstellen, die erforderlich sind, um 2D-Rotationen und -Translationen durchzuführen. Dies sind Aliase für spezifische Komponenten einer 4×4-Matrix, wie unten gezeigt.

    | 2D  | 3D-Äquivalent |
    | --- | ------------- |
    | `a` | `m11`         |
    | `b` | `m12`         |
    | `c` | `m21`         |
    | `d` | `m22`         |
    | `e` | `m41`         |
    | `f` | `m42`         |

## Instanz-Methoden

_Diese Schnittstelle erbt keine Methoden. Keine der folgenden Methoden verändert die Originalmatrix._

- [`DOMMatrixReadOnly.flipX()`](/de/docs/Web/API/DOMMatrixReadOnly/flipX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Spiegeln der Ursprungsmatrix um ihre X-Achse erstellt wurde. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(-1, 0, 0, 1, 0, 0)`. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.flipY()`](/de/docs/Web/API/DOMMatrixReadOnly/flipY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Spiegeln der Ursprungsmatrix um ihre Y-Achse erstellt wurde. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(1, 0, 0, -1, 0, 0)`. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.inverse()`](/de/docs/Web/API/DOMMatrixReadOnly/inverse)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Invertieren der Ursprungsmatrix erstellt wurde. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.multiply()`](/de/docs/Web/API/DOMMatrixReadOnly/multiply)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Berechnung des Skalarprodukts der Ursprungsmatrix und der angegebenen Matrix erstellt wurde: `A⋅B`. Wenn keine Matrix als Multiplikator angegeben ist, wird die Matrix mit einer Matrix multipliziert, in der jedes Element `0` ist _außer_ der unteren rechten Ecke und dem Element direkt darüber und links davon: `m33` und `m34`. Diese haben den Standardwert `1`. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotateAxisAngle()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateAxisAngle)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Ursprungsmatrix um den gegebenen Winkel um den angegebenen Vektor erstellt wurde. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Ursprungsmatrix um jeden ihrer Achsen um die angegebene Gradzahl erstellt wurde. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.rotateFromVector()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateFromVector)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehen der Ursprungsmatrix um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` erstellt wurde. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalieren der Ursprungsmatrix um den für jede Achse angegebenen Betrag, zentriert auf den angegebenen Ursprung, erstellt wurde. Standardmäßig werden die X- und Z-Achsen um `1` skaliert und die Y-Achse hat keinen Standard-Skalierungswert. Der Standardursprung ist `(0, 0, 0)`. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.scale3d()`](/de/docs/Web/API/DOMMatrixReadOnly/scale3d)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalieren der Ursprungs-3D-Matrix um den angegebenen Faktor entlang aller Achsen, zentriert auf den angegebenen Ursprungspunkt, erstellt wurde. Der Standardursprung ist `(0, 0, 0)`. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.scaleNonUniform()`](/de/docs/Web/API/DOMMatrixReadOnly/scaleNonUniform) {{deprecated_inline}}
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwendung der angegebenen Skalierung auf die X-, Y- und Z-Achsen, zentriert auf den angegebenen Ursprung, erstellt wurde. Standardmäßig sind die Skalierungsfaktoren der Y- und Z-Achsen beide `1`, aber der Skalierungsfaktor für X muss angegeben werden. Der Standardursprung ist `(0, 0, 0)`. Die Originalmatrix wird nicht geändert.
- [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwendung der angegebenen Schertransformation auf die Ursprungsmatrix entlang ihrer X-Achse erstellt wurde. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwendung der angegebenen Schertransformation auf die Ursprungsmatrix entlang ihrer Y-Achse erstellt wurde. Die Originalmatrix wird nicht verändert.
- [`DOMMatrixReadOnly.toFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat32Array)
  - : Gibt ein neues {{jsxref("Float32Array")}} von einfachpräzisen Gleitkommazahlen zurück, das alle 16 Elemente der Matrix enthält.
- [`DOMMatrixReadOnly.toFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat64Array)
  - : Gibt ein neues {{jsxref("Float64Array")}} von doppelpräzisen Gleitkommazahlen zurück, das alle 16 Elemente der Matrix enthält.
- [`DOMMatrixReadOnly.toJSON()`](/de/docs/Web/API/DOMMatrixReadOnly/toJSON)
  - : Gibt eine JSON-Darstellung des `DOMMatrixReadOnly` Objekts zurück.
- [`DOMMatrixReadOnly.toString()`](/de/docs/Web/API/DOMMatrixReadOnly/toString)
  - : Erstellt und gibt eine Zeichenfolgenrepräsentation der Matrix in CSS-Matrix-Syntax unter Verwendung der entsprechenden CSS-Matrix-Notation zurück.
- [`DOMMatrixReadOnly.transformPoint()`](/de/docs/Web/API/DOMMatrixReadOnly/transformPoint)
  - : Transformiert den angegebenen Punkt mithilfe der Matrix und gibt ein neues [`DOMPoint`](/de/docs/Web/API/DOMPoint) Objekt zurück, das den transformierten Punkt enthält. Weder die Matrix noch der ursprüngliche Punkt werden verändert.
- [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate)
  - : Gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die eine Matrix enthält, die durch Übersetzen der Ursprungsmatrix mit dem angegebenen Vektor berechnet wurde. Standardmäßig ist der Vektor `(0, 0, 0)`. Die Originalmatrix wird nicht geändert.

## Statische Methoden

- [`fromFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat32Array)
  - : Erstellt ein neues veränderbares `DOMMatrix` Objekt aus einem Array von einfachpräzisen (32-Bit) Gleitkommazahlen. Wenn das Array sechs Werte enthält, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte enthält, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}} Ausnahme ausgelöst.
- [`fromFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat64Array)
  - : Erstellt ein neues veränderbares `DOMMatrix` Objekt aus einem Array von doppelpräzisen (64-Bit) Gleitkommazahlen. Wenn das Array sechs Werte enthält, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte enthält, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}} Ausnahme ausgelöst.
- [`fromMatrix()`](/de/docs/Web/API/DOMMatrixReadOnly/fromMatrix)
  - : Erstellt ein neues veränderbares `DOMMatrix` Objekt aus einer vorhandenen Matrix oder einem Objekt, das die Werte für seine Eigenschaften bereitstellt. Wenn keine Matrix angegeben ist, wird die Matrix mit jedem Element auf `0` initialisiert, _außer_ der unteren rechten Ecke und dem Element direkt darüber und links davon: `m33` und `m34`. Diese haben den Standardwert `1`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der veränderbare Matrizen-Typ, [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), welcher auf diesem basiert.
- Die CSS {{cssxref("transform-function/matrix", "matrix()")}} und {{cssxref("transform-function/matrix3d", "matrix3d()")}} funktionale Notation, die aus dieser Schnittstelle generiert und in einem CSS {{cssxref("transform")}} verwendet werden kann.
