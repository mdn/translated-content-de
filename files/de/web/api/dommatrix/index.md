---
title: DOMMatrix
slug: Web/API/DOMMatrix
l10n:
  sourceCommit: 359abb1dcdc87d46d7271fc28c53a998a5523bf1
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Das **`DOMMatrix`**-Interface repräsentiert 4×4-Matrizen, die für 2D- und 3D-Operationen wie Rotation und Translation geeignet sind. Es ist eine veränderbare Version des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Interfaces. Das Interface steht auch in [Web-Workern](/de/docs/Web/API/Web_Workers_API) zur Verfügung.

**`WebKitCSSMatrix`** und **`SVGMatrix`** sind Aliase für **`DOMMatrix`**.

{{InheritanceDiagram}}

## Konstruktor

- [`DOMMatrix()`](/de/docs/Web/API/DOMMatrix/DOMMatrix)
  - : Erstellt und gibt ein neues `DOMMatrix`-Objekt zurück.

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften von [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly), obwohl einige dieser Eigenschaften veränderbar gemacht wurden._

- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Fließkommawerte mit doppelter Genauigkeit, die jede Komponente einer 4×4-Matrix darstellen, wobei `m11` bis `m14` die erste Spalte sind, `m21` bis `m24` die zweite Spalte und so weiter.
- `a`, `b`, `c`, `d`, `e`, `f`
  - : Fließkommawerte mit doppelter Genauigkeit, die die Komponenten einer 4×4-Matrix darstellen, die benötigt werden, um 2D-Rotationen und -Translationen durchzuführen. Diese sind Aliase für spezifische Komponenten einer 4×4-Matrix, wie unten dargestellt.

    | `2D` | `3D-Äquivalent` |
    | ---- | --------------- |
    | `a`  | `m11`           |
    | `b`  | `m12`           |
    | `c`  | `m21`           |
    | `d`  | `m22`           |
    | `e`  | `m41`           |
    | `f`  | `m42`           |

## Instanz-Methoden

_Dieses Interface umfasst die folgenden Methoden sowie die Methoden, die es von [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) erbt._

- [`DOMMatrix.invertSelf()`](/de/docs/Web/API/DOMMatrix/invertSelf)
  - : Modifiziert die Matrix, indem sie invertiert wird. Wenn die Matrix nicht invertiert werden kann, werden alle ihre Komponenten auf `NaN` gesetzt, und [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D) gibt `false` zurück.
- [`DOMMatrix.multiplySelf()`](/de/docs/Web/API/DOMMatrix/multiplySelf)
  - : Modifiziert die Matrix, indem sie mit der angegebenen `DOMMatrix` multipliziert wird. Dies entspricht dem Skalarprodukt `A⋅B`, wobei Matrix `A` die Quellmatrix und `B` die Matrix ist, die als Eingabe an die Methode übergeben wird. Gibt sich selbst zurück.
- [`DOMMatrix.preMultiplySelf()`](/de/docs/Web/API/DOMMatrix/preMultiplySelf)
  - : Modifiziert die Matrix, indem sie mit der angegebenen `DOMMatrix` vorvervielfacht wird. Gibt sich selbst zurück.
- [`DOMMatrix.translateSelf()`](/de/docs/Web/API/DOMMatrix/translateSelf)
  - : Modifiziert die Matrix, indem sie den angegebenen Vektor anwendet. Der Standardvektor ist `[0, 0, 0]`. Gibt sich selbst zurück.
- [`DOMMatrix.scaleSelf()`](/de/docs/Web/API/DOMMatrix/scaleSelf)
  - : Modifiziert die Matrix, indem sie die angegebenen Skalierungsfaktoren anwendet, mit dem Ursprung an der angegebenen Stelle. Gibt sich selbst zurück. Standardmäßig ist der Skalierungsfaktor für alle drei Achsen `1`, und der Ursprung ist `(0, 0, 0)`. Gibt sich selbst zurück.
- [`DOMMatrix.scale3dSelf()`](/de/docs/Web/API/DOMMatrix/scale3dSelf)
  - : Modifiziert die Matrix, indem sie den angegebenen Skalierungsfaktor auf alle drei Achsen anwendet, zentriert auf dem gegebenen Ursprung. Gibt sich selbst zurück.
- [`DOMMatrix.rotateSelf()`](/de/docs/Web/API/DOMMatrix/rotateSelf)
  - : Modifiziert die Matrix, indem sie um jeden Achse durch die angegebene Anzahl von Grad gedreht wird. Gibt sich selbst zurück.
- [`DOMMatrix.rotateAxisAngleSelf()`](/de/docs/Web/API/DOMMatrix/rotateAxisAngleSelf)
  - : Modifiziert die Matrix, indem sie um den angegebenen Winkel um den gegebenen Vektor rotiert. Gibt sich selbst zurück.
- [`DOMMatrix.rotateFromVectorSelf()`](/de/docs/Web/API/DOMMatrix/rotateFromVectorSelf)
  - : Modifiziert die Matrix, indem sie um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` gedreht wird. Gibt sich selbst zurück.
- [`DOMMatrix.setMatrixValue()`](/de/docs/Web/API/DOMMatrix/setMatrixValue)
  - : Ersetzt den Inhalt der Matrix durch die durch die angegebene Transformation oder Transformationen beschriebene Matrix. Gibt sich selbst zurück.
- [`DOMMatrix.skewXSelf()`](/de/docs/Web/API/DOMMatrix/skewXSelf)
  - : Modifiziert die Matrix, indem sie die angegebene Schertransformation entlang der X-Achse anwendet. Gibt sich selbst zurück.
- [`DOMMatrix.skewYSelf()`](/de/docs/Web/API/DOMMatrix/skewYSelf)
  - : Modifiziert die Matrix, indem sie die angegebene Schertransformation entlang der Y-Achse anwendet. Gibt sich selbst zurück.

## Statische Methoden

- [`fromFloat32Array()`](/de/docs/Web/API/DOMMatrix/fromFloat32Array_static)
  - : Erstellt ein neues `DOMMatrix`-Objekt, gegeben ein {{jsxref("Float32Array")}} von 6 oder 16 Einzelpräzisions- (32-Bit) Fließkommawerten.
- [`fromFloat64Array()`](/de/docs/Web/API/DOMMatrix/fromFloat64Array_static)
  - : Erstellt ein neues `DOMMatrix`-Objekt, gegeben ein {{jsxref("Float64Array")}} von 6 oder 16 Doppelpräzisions- (64-Bit) Fließkommawerten.
- [`fromMatrix()`](/de/docs/Web/API/DOMMatrix/fromMatrix_static)
  - : Erstellt ein neues `DOMMatrix`-Objekt, gegeben eine bestehende Matrix oder ein Objekt, das die Werte für seine Eigenschaften bereitstellt.

## Verwendungshinweise

Die durch das `DOMMatrix`-Interface definierte Matrix besteht aus vier Reihen mit je vier Spalten. Auch wenn es über den Rahmen dieses Artikels hinausgeht, die zugrunde liegende Mathematik zu erläutern, ist diese 4×4-Größe ausreichend, um jede Transformation zu beschreiben, die Sie auf 2D- oder 3D-Geometrien anwenden könnten.

Hier sind die Positionen der 16 Elemente (m_11 bis m_44), die die 4×4-Abstract-Matrix bilden:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>m</mi><mn>11</mn></msub></mtd><mtd><msub><mi>m</mi><mn>21</mn></msub></mtd><mtd><msub><mi>m</mi><mn>31</mn></msub></mtd><mtd><msub><mi>m</mi><mn>41</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>12</mn></msub></mtd><mtd><msub><mi>m</mi><mn>22</mn></msub></mtd><mtd><msub><mi>m</mi><mn>32</mn></msub></mtd><mtd><msub><mi>m</mi><mn>42</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>13</mn></msub></mtd><mtd><msub><mi>m</mi><mn>23</mn></msub></mtd><mtd><msub><mi>m</mi><mn>33</mn></msub></mtd><mtd><msub><mi>m</mi><mn>43</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>14</mn></msub></mtd><mtd><msub><mi>m</mi><mn>24</mn></msub></mtd><mtd><msub><mi>m</mi><mn>34</mn></msub></mtd><mtd><msub><mi>m</mi><mn>44</mn></msub></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left [ \begin{matrix} m_{11} & m_{21} & m_{31} & m_{41} \\ m_{12} & m_{22} & m_{32} & m_{42} \\ m_{13} & m_{23} & m_{33} & m_{43} \\ m_{14} & m_{24} & m_{34} & m_{44} \end{matrix} \right ]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Das `DOMMatrix`-Interface ist so konzipiert, dass es für alle Matrizen innerhalb von Markup verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D)
- [`DOMMatrixReadOnly.isIdentity`](/de/docs/Web/API/DOMMatrixReadOnly/isIdentity)
