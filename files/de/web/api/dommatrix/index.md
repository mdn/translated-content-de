---
title: DOMMatrix (WebKitCSSMatrix)
slug: Web/API/DOMMatrix
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Das **`DOMMatrix`**-Interface repräsentiert 4×4 Matrizen, geeignet für 2D- und 3D-Operationen einschließlich Rotation und Translation. Es ist eine veränderbare Version des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Interfaces.

**`WebKitCSSMatrix`** und **`SVGMatrix`** sind Aliase für **`DOMMatrix`**.

Dieses Interface sollte innerhalb von [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar sein, obwohl einige Implementierungen dies noch nicht erlauben.

{{InheritanceDiagram}}

## Konstruktor

- [`DOMMatrix()`](/de/docs/Web/API/DOMMatrix/DOMMatrix)
  - : Erstellt und gibt ein neues `DOMMatrix`-Objekt zurück.

## Instanzeigenschaften

_Dieses Interface erbt Eigenschaften von [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly), obwohl einige dieser Eigenschaften geändert werden, um veränderlich zu sein._

- `is2D` {{ReadOnlyInline}}
  - : Ein Boolean-Flag, dessen Wert `true` ist, wenn die Matrix als 2D-Matrix initialisiert wurde. Wenn `false`, ist die Matrix 3D.
- `isIdentity` {{ReadOnlyInline}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die Matrix die [Einheitsmatrix](https://en.wikipedia.org/wiki/Identity_matrix) ist. Die Einheitsmatrix ist eine Matrix, in der jeder Wert `0` ist, _außer_ denen auf der Hauptdiagonale von oben links nach unten rechts (mit anderen Worten, wo die Offsets in jede Richtung gleich sind).
- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Gleitkommazahlen mit doppelter Genauigkeit, die jede Komponente einer 4×4-Matrix darstellen, wobei `m11` bis `m14` die erste Spalte sind, `m21` bis `m24` die zweite Spalte und so weiter.
- `a`, `b`, `c`, `d`, `e`, `f`

  - : Gleitkommazahlen mit doppelter Genauigkeit, die die Komponenten einer 4×4-Matrix darstellen, die benötigt werden, um 2D-Rotationen und Translationen durchzuführen. Diese sind Aliase für spezifische Komponenten einer 4×4-Matrix, wie unten gezeigt.

    | `2D` | `3D-Äquivalent` |
    | ---- | --------------- |
    | `a`  | `m11`           |
    | `b`  | `m12`           |
    | `c`  | `m21`           |
    | `d`  | `m22`           |
    | `e`  | `m41`           |
    | `f`  | `m42`           |

## Instanzmethoden

_Dieses Interface enthält die folgenden Methoden sowie die Methoden, die es von [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) erbt._

- [`DOMMatrix.invertSelf()`](/de/docs/Web/API/DOMMatrix/invertSelf)
  - : Modifiziert die Matrix durch deren Invertierung. Wenn die Matrix nicht invertiert werden kann, werden alle ihre Komponenten auf `NaN` gesetzt, und [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly#is2d) gibt `false` zurück.
- [`DOMMatrix.multiplySelf()`](/de/docs/Web/API/DOMMatrix/multiplySelf)
  - : Modifiziert die Matrix durch Post-Multiplikation mit der angegebenen `DOMMatrix`. Dies entspricht dem Skalarprodukt `A⋅B`, wobei Matrix `A` die Ausgangsmatrix ist und `B` die Eingabematrix der Methode. Gibt sich selbst zurück.
- [`DOMMatrix.preMultiplySelf()`](/de/docs/Web/API/DOMMatrix/preMultiplySelf)
  - : Modifiziert die Matrix durch Vor-Multiplikation mit der angegebenen `DOMMatrix`. Dies entspricht dem Skalarprodukt `B⋅A`, wobei Matrix `A` die Ausgangsmatrix ist und `B` die Eingabematrix der Methode. Gibt sich selbst zurück.
- [`DOMMatrix.translateSelf()`](/de/docs/Web/API/DOMMatrix/translateSelf)
  - : Modifiziert die Matrix durch Anwendung des angegebenen Vektors. Der Standardvektor ist `[0, 0, 0]`. Gibt sich selbst zurück.
- [`DOMMatrix.scaleNonUniformSelf()`](/de/docs/Web/API/DOMMatrix/scaleNonUniformSelf) {{deprecated_inline}}
  - : Modifiziert die Matrix durch Anwendung der angegebenen Skalierung auf den X-, Y- und Z-Achsen, zentriert auf dem angegebenen Ursprung. Standardmäßig betragen die Skalierungsfaktoren für die Y- und Z-Achsen jeweils `1`, aber der Skalierungsfaktor für X muss angegeben werden. Der Standardursprung ist `(0, 0, 0)`. Gibt sich selbst zurück.
- [`DOMMatrix.scaleSelf()`](/de/docs/Web/API/DOMMatrix/scaleSelf)
  - : Modifiziert die Matrix durch Anwendung der angegebenen Skalierungsfaktoren, wobei das Zentrum am angegebenen Ursprung liegt. Gibt sich ebenfalls selbst zurück. Standardmäßig beträgt der Skalierungsfaktor für alle drei Achsen `1`, und der Ursprung ist `(0, 0, 0)`. Gibt sich selbst zurück.
- [`DOMMatrix.scale3dSelf()`](/de/docs/Web/API/DOMMatrix/scale3dSelf)
  - : Modifiziert die Matrix durch Anwendung des angegebenen Skalierungsfaktors auf alle drei Achsen, zentriert auf dem gegebenen Ursprung. Gibt sich selbst zurück.
- [`DOMMatrix.rotateSelf()`](/de/docs/Web/API/DOMMatrix/rotateSelf)
  - : Modifiziert die Matrix durch Rotation um jede Achse um die angegebene Anzahl von Grad. Gibt sich selbst zurück.
- [`DOMMatrix.rotateAxisAngleSelf()`](/de/docs/Web/API/DOMMatrix/rotateAxisAngleSelf)
  - : Modifiziert die Matrix durch Rotation um den angegebenen Winkel um den gegebenen Vektor. Gibt sich selbst zurück.
- [`DOMMatrix.rotateFromVectorSelf()`](/de/docs/Web/API/DOMMatrix/rotateFromVectorSelf)
  - : Modifiziert die Matrix durch Rotation um den Winkel zwischen dem angegebenen Vektor und `(1, 0)`. Gibt sich selbst zurück.
- [`DOMMatrix.setMatrixValue()`](/de/docs/Web/API/DOMMatrix/setMatrixValue)
  - : Ersetzt den Inhalt der Matrix durch die Matrix, die durch die angegebene Transformation oder die Transformationen beschrieben wird. Gibt sich selbst zurück.
- [`DOMMatrix.skewXSelf()`](/de/docs/Web/API/DOMMatrix/skewXSelf)
  - : Modifiziert die Matrix durch Anwendung der angegebenen Schrägtransformation entlang der X-Achse. Gibt sich selbst zurück.
- [`DOMMatrix.skewYSelf()`](/de/docs/Web/API/DOMMatrix/skewYSelf)
  - : Modifiziert die Matrix durch Anwendung der angegebenen Schrägtransformation entlang der Y-Achse. Gibt sich selbst zurück.

## Statische Methoden

_Dieses Interface erbt Methoden von [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)._

- [`fromFloat32Array()`](/de/docs/Web/API/DOMMatrix/fromFloat32Array)
  - : Erstellt ein neues veränderbares `DOMMatrix`-Objekt anhand eines Arrays mit Einzelpräzisions-Gleitkommazahlen (32-Bit). Wenn das Array sechs Werte hat, ergibt sich eine 2D-Matrix; wenn das Array 16 Werte hat, ergibt sich eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromFloat64Array()`](/de/docs/Web/API/DOMMatrix/fromFloat64Array)
  - : Erstellt ein neues veränderbares `DOMMatrix`-Objekt anhand eines Arrays mit Doppelpräzisions-Gleitkommazahlen (64-Bit). Wenn das Array sechs Werte hat, ergibt sich eine 2D-Matrix; wenn das Array 16 Werte hat, ergibt sich eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromMatrix()`](/de/docs/Web/API/DOMMatrix/fromMatrix)
  - : Erstellt ein neues veränderbares `DOMMatrix`-Objekt anhand einer vorhandenen Matrix oder eines Objekts, das die Werte für seine Eigenschaften bereitstellt.

## Verwendungshinweise

Die Matrix, die durch das `DOMMatrix`-Interface definiert wird, besteht aus vier Zeilen mit jeweils vier Spalten. Auch wenn es über den Rahmen dieses Artikels hinausgeht, die dabei involvierte Mathematik zu erklären, ist diese 4×4-Größe ausreichend, um jede Transformation zu beschreiben, die Sie auf 2D- oder 3D-Geometrien anwenden könnten.

Hier sind die Positionen der 16 Elemente (m_11 bis m_44), die die 4×4-Abstraktmatrix bilden:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>m</mi><mn>11</mn></msub></mtd><mtd><msub><mi>m</mi><mn>21</mn></msub></mtd><mtd><msub><mi>m</mi><mn>31</mn></msub></mtd><mtd><msub><mi>m</mi><mn>41</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>12</mn></msub></mtd><mtd><msub><mi>m</mi><mn>22</mn></msub></mtd><mtd><msub><mi>m</mi><mn>32</mn></msub></mtd><mtd><msub><mi>m</mi><mn>42</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>13</mn></msub></mtd><mtd><msub><mi>m</mi><mn>23</mn></msub></mtd><mtd><msub><mi>m</mi><mn>33</mn></msub></mtd><mtd><msub><mi>m</mi><mn>43</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>14</mn></msub></mtd><mtd><msub><mi>m</mi><mn>24</mn></msub></mtd><mtd><msub><mi>m</mi><mn>34</mn></msub></mtd><mtd><msub><mi>m</mi><mn>44</mn></msub></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left [ \begin{matrix} m_{11} & m_{21} & m_{31} & m_{41} \\ m_{12} & m_{22} & m_{32} & m_{42} \\ m_{13} & m_{23} & m_{33} & m_{43} \\ m_{14} & m_{24} & m_{34} & m_{44} \end{matrix} \right ]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Das `DOMMatrix`-Interface ist dafür ausgelegt, dass es für alle Matrizen innerhalb von Markup verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das nicht veränderbare Gegenstück, [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)
