---
title: DOMMatrix
slug: Web/API/DOMMatrix
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Das **`DOMMatrix`** Interface repräsentiert 4×4 Matrizen, geeignet für 2D- und 3D-Operationen einschließlich Rotation und Translation. Es ist eine veränderbare Version des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) Interfaces. Dieses Interface ist innerhalb von [Web Workern](/de/docs/Web/API/Web_Workers_API) verfügbar.

**`WebKitCSSMatrix`** und **`SVGMatrix`** sind Aliase für **`DOMMatrix`**.

{{InheritanceDiagram}}

## Konstruktor

- [`DOMMatrix()`](/de/docs/Web/API/DOMMatrix/DOMMatrix)
  - : Erstellt und gibt ein neues `DOMMatrix` Objekt zurück.

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften von [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly), wobei einige dieser Eigenschaften veränderbar gemacht wurden._

- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Gleitkommazahlen mit doppelter Genauigkeit, die jeweils eine Komponente einer 4×4-Matrix darstellen, wobei `m11` bis `m14` die erste Spalte bilden, `m21` bis `m24` die zweite Spalte und so weiter.
- `a`, `b`, `c`, `d`, `e`, `f`

  - : Gleitkommazahlen mit doppelter Genauigkeit, die die Komponenten einer 4×4-Matrix darstellen, die für die Durchführung von 2D-Rotationen und Translationen erforderlich sind. Diese sind Aliase für bestimmte Komponenten einer 4×4-Matrix, wie unten gezeigt.

    | `2D` | `3D Äquivalent` |
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
  - : Modifiziert die Matrix, indem sie invertiert wird. Wenn die Matrix nicht invertiert werden kann, werden alle ihre Komponenten auf `NaN` gesetzt und [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D) gibt `false` zurück.
- [`DOMMatrix.multiplySelf()`](/de/docs/Web/API/DOMMatrix/multiplySelf)
  - : Modifiziert die Matrix, indem sie mit der angegebenen `DOMMatrix` multipliziert wird. Dies entspricht dem Punktprodukt `A⋅B`, wobei Matrix `A` die Quellmatrix ist und `B` die als Eingabe an die Methode gegebene Matrix ist. Gibt sich selbst zurück.
- [`DOMMatrix.preMultiplySelf()`](/de/docs/Web/API/DOMMatrix/preMultiplySelf)
  - : Modifiziert die Matrix, indem sie mit der angegebenen `DOMMatrix` prä-multipliziert wird. Gibt sich selbst zurück.
- [`DOMMatrix.translateSelf()`](/de/docs/Web/API/DOMMatrix/translateSelf)
  - : Modifiziert die Matrix, indem der angegebenen Vektor angewandt wird. Der Standardvektor ist `[0, 0, 0]`. Gibt sich selbst zurück.
- [`DOMMatrix.scaleSelf()`](/de/docs/Web/API/DOMMatrix/scaleSelf)
  - : Modifiziert die Matrix, indem die angegebenen Skalierungsfaktoren angewandt werden, wobei das Zentrum an der angegebenen Ursprungsposition liegt. Gibt sich ebenfalls zurück. Standardmäßig beträgt der Skalierungsfaktor `1` für alle drei Achsen, und der Ursprung ist `(0, 0, 0)`. Gibt sich selbst zurück.
- [`DOMMatrix.scale3dSelf()`](/de/docs/Web/API/DOMMatrix/scale3dSelf)
  - : Modifiziert die Matrix, indem der angegebene Skalierungsfaktor auf alle drei Achsen, zentriert am gegebenen Ursprung, angewandt wird. Gibt sich selbst zurück.
- [`DOMMatrix.rotateSelf()`](/de/docs/Web/API/DOMMatrix/rotateSelf)
  - : Modifiziert die Matrix, indem sie um jede Achse um die angegebene Gradzahl gedreht wird. Gibt sich selbst zurück.
- [`DOMMatrix.rotateAxisAngleSelf()`](/de/docs/Web/API/DOMMatrix/rotateAxisAngleSelf)
  - : Modifiziert die Matrix, indem sie um den angegebenen Winkel um den gegebenen Vektor gedreht wird. Gibt sich selbst zurück.
- [`DOMMatrix.rotateFromVectorSelf()`](/de/docs/Web/API/DOMMatrix/rotateFromVectorSelf)
  - : Modifiziert die Matrix, indem sie um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` gedreht wird. Gibt sich selbst zurück.
- [`DOMMatrix.setMatrixValue()`](/de/docs/Web/API/DOMMatrix/setMatrixValue)
  - : Ersetzt den Inhalt der Matrix durch die von der angegebenen Transformation oder den Transformationen beschriebene Matrix. Gibt sich selbst zurück.
- [`DOMMatrix.skewXSelf()`](/de/docs/Web/API/DOMMatrix/skewXSelf)
  - : Modifiziert die Matrix, indem die angegebene Schertransformation entlang der X-Achse angewandt wird. Gibt sich selbst zurück.
- [`DOMMatrix.skewYSelf()`](/de/docs/Web/API/DOMMatrix/skewYSelf)
  - : Modifiziert die Matrix, indem die angegebene Schertransformation entlang der Y-Achse angewandt wird. Gibt sich selbst zurück.

## Statische Methoden

_Dieses Interface erbt Methoden von [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)._

- [`fromFloat32Array()`](/de/docs/Web/API/DOMMatrix/fromFloat32Array_static)
  - : Erstellt ein neues veränderbares `DOMMatrix` Objekt, das ein Array von Einzelpräzision (32-Bit) Gleitkommazahlen erhält. Wenn das Array sechs Werte enthält, ist das Ergebnis eine 2D-Matrix; enthält es 16 Werte, ist das Ergebnis eine 3D-Matrix. Ansonsten wird eine {{jsxref("TypeError")}} Ausnahme ausgelöst.
- [`fromFloat64Array()`](/de/docs/Web/API/DOMMatrix/fromFloat64Array_static)
  - : Erstellt ein neues veränderbares `DOMMatrix` Objekt, das ein Array von Doppelpräzision (64-Bit) Gleitkommazahlen erhält. Wenn das Array sechs Werte enthält, ist das Ergebnis eine 2D-Matrix; enthält es 16 Werte, ist das Ergebnis eine 3D-Matrix. Ansonsten wird eine {{jsxref("TypeError")}} Ausnahme ausgelöst.
- [`fromMatrix()`](/de/docs/Web/API/DOMMatrix/fromMatrix_static)
  - : Erstellt ein neues veränderbares `DOMMatrix` Objekt mit einer bestehenden Matrix oder einem Objekt, das die Werte für seine Eigenschaften bereitstellt.

## Nutzungshinweise

Die Matrix, die durch das `DOMMatrix` Interface definiert ist, besteht aus vier Reihen mit jeweils vier Spalten. Obwohl es über den Umfang dieses Artikels hinausgeht, die zugrunde liegende Mathematik zu erklären, ist dieses 4×4 Format ausreichend, um jede Transformation zu beschreiben, die auf entweder 2D- oder 3D-Geometrien angewandt werden könnte.

Hier sind die Positionen der 16 Elemente (m_11 bis m_44), die die 4×4 abstrakte Matrix bilden:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>m</mi><mn>11</mn></msub></mtd><mtd><msub><mi>m</mi><mn>21</mn></msub></mtd><mtd><msub><mi>m</mi><mn>31</mn></msub></mtd><mtd><msub><mi>m</mi><mn>41</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>12</mn></msub></mtd><mtd><msub><mi>m</mi><mn>22</mn></msub></mtd><mtd><msub><mi>m</mi><mn>32</mn></msub></mtd><mtd><msub><mi>m</mi><mn>42</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>13</mn></msub></mtd><mtd><msub><mi>m</mi><mn>23</mn></msub></mtd><mtd><msub><mi>m</mi><mn>33</mn></msub></mtd><mtd><msub><mi>m</mi><mn>43</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>14</mn></msub></mtd><mtd><msub><mi>m</mi><mn>24</mn></msub></mtd><mtd><msub><mi>m</mi><mn>34</mn></msub></mtd><mtd><msub><mi>m</mi><mn>44</mn></msub></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left [ \begin{matrix} m_{11} & m_{21} & m_{31} & m_{41} \\ m_{12} & m_{22} & m_{32} & m_{42} \\ m_{13} & m_{23} & m_{33} & m_{43} \\ m_{14} & m_{24} & m_{34} & m_{44} \end{matrix} \right ]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Das `DOMMatrix` Interface ist dafür konzipiert, dass es für alle Matrizen innerhalb von Markup benutzt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D)
- [`DOMMatrixReadOnly.isIdentity`](/de/docs/Web/API/DOMMatrixReadOnly/isIdentity)
