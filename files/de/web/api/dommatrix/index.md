---
title: DOMMatrix
slug: Web/API/DOMMatrix
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die Schnittstelle **`DOMMatrix`** stellt 4×4-Matrizen dar, die sich für 2D- und 3D-Operationen einschließlich Rotation und Translation eignen. Sie ist eine veränderbare Version der Schnittstelle [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly).
Die Schnittstelle ist in [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar.

**`WebKitCSSMatrix`** und **`SVGMatrix`** sind Aliase für **`DOMMatrix`**.

{{InheritanceDiagram}}

## Konstruktor

- [`DOMMatrix()`](/de/docs/Web/API/DOMMatrix/DOMMatrix)
  - : Erstellt ein neues `DOMMatrix`-Objekt und gibt es zurück.

## Instanzeigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly), wobei einige dieser Eigenschaften veränderbar sind._

- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Gleitkommawerte mit doppelter Genauigkeit, die jeweils eine Komponente einer 4×4-Matrix darstellen. Dabei bilden `m11` bis `m14` die erste Spalte, `m21` bis `m24` die zweite Spalte und so weiter.
- `a`, `b`, `c`, `d`, `e`, `f`
  - : Gleitkommawerte mit doppelter Genauigkeit, die die für 2D-Rotationen und -Translationen erforderlichen Komponenten einer 4×4-Matrix darstellen. Sie sind Aliase für bestimmte Komponenten einer 4×4-Matrix, wie unten dargestellt.

    | `2D` | `3D equivalent` |
    | ---- | --------------- |
    | `a`  | `m11`           |
    | `b`  | `m12`           |
    | `c`  | `m21`           |
    | `d`  | `m22`           |
    | `e`  | `m41`           |
    | `f`  | `m42`           |

## Statische Methoden

- [`fromFloat32Array()`](/de/docs/Web/API/DOMMatrix/fromFloat32Array_static)
  - : Erstellt ein neues `DOMMatrix`-Objekt aus einem {{jsxref("Float32Array")}} mit 6 oder 16 Gleitkommawerten einfacher Genauigkeit (32 Bit).
- [`fromFloat64Array()`](/de/docs/Web/API/DOMMatrix/fromFloat64Array_static)
  - : Erstellt ein neues `DOMMatrix`-Objekt aus einem {{jsxref("Float64Array")}} mit 6 oder 16 Gleitkommawerten doppelter Genauigkeit (64 Bit).
- [`fromMatrix()`](/de/docs/Web/API/DOMMatrix/fromMatrix_static)
  - : Erstellt ein neues `DOMMatrix`-Objekt aus einer vorhandenen Matrix oder einem Objekt, das die Werte für ihre Eigenschaften bereitstellt.

## Instanzmethoden

_Diese Schnittstelle umfasst die folgenden Methoden sowie die von [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) geerbten Methoden._

- [`DOMMatrix.invertSelf()`](/de/docs/Web/API/DOMMatrix/invertSelf)
  - : Verändert die Matrix, indem sie invertiert wird. Wenn sich die Matrix nicht invertieren lässt, werden alle ihre Komponenten auf `NaN` gesetzt und [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D) gibt `false` zurück.
- [`DOMMatrix.multiplySelf()`](/de/docs/Web/API/DOMMatrix/multiplySelf)
  - : Verändert die Matrix, indem sie von rechts mit der angegebenen `DOMMatrix` multipliziert wird. Dies entspricht dem Matrixprodukt `A⋅B`, wobei Matrix `A` die Ausgangsmatrix und `B` die als Eingabe an die Methode übergebene Matrix ist. Gibt sich selbst zurück.
- [`DOMMatrix.preMultiplySelf()`](/de/docs/Web/API/DOMMatrix/preMultiplySelf)
  - : Verändert die Matrix, indem sie von links mit der angegebenen `DOMMatrix` multipliziert wird. Gibt sich selbst zurück.
- [`DOMMatrix.translateSelf()`](/de/docs/Web/API/DOMMatrix/translateSelf)
  - : Verändert die Matrix, indem der angegebene Vektor angewendet wird. Der Standardvektor ist `[0, 0, 0]`. Gibt sich selbst zurück.
- [`DOMMatrix.scaleSelf()`](/de/docs/Web/API/DOMMatrix/scaleSelf)
  - : Verändert die Matrix durch Anwendung der angegebenen Skalierungsfaktoren, wobei das Zentrum am angegebenen Ursprung liegt. Standardmäßig beträgt der Skalierungsfaktor für alle drei Achsen `1` und der Ursprung ist `(0, 0, 0)`. Gibt sich selbst zurück.
- [`DOMMatrix.scale3dSelf()`](/de/docs/Web/API/DOMMatrix/scale3dSelf)
  - : Verändert die Matrix durch Anwendung des angegebenen Skalierungsfaktors auf alle drei Achsen, zentriert um den angegebenen Ursprung. Gibt sich selbst zurück.
- [`DOMMatrix.rotateSelf()`](/de/docs/Web/API/DOMMatrix/rotateSelf)
  - : Verändert die Matrix, indem sie um jede Achse um die angegebene Gradzahl gedreht wird. Gibt sich selbst zurück.
- [`DOMMatrix.rotateAxisAngleSelf()`](/de/docs/Web/API/DOMMatrix/rotateAxisAngleSelf)
  - : Verändert die Matrix, indem sie um den angegebenen Winkel um den angegebenen Vektor gedreht wird. Gibt sich selbst zurück.
- [`DOMMatrix.rotateFromVectorSelf()`](/de/docs/Web/API/DOMMatrix/rotateFromVectorSelf)
  - : Verändert die Matrix, indem sie um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` gedreht wird. Gibt sich selbst zurück.
- [`DOMMatrix.setMatrixValue()`](/de/docs/Web/API/DOMMatrix/setMatrixValue)
  - : Ersetzt den Inhalt der Matrix durch die Matrix, die durch die angegebene Transformation oder die angegebenen Transformationen beschrieben wird. Gibt sich selbst zurück.
- [`DOMMatrix.skewXSelf()`](/de/docs/Web/API/DOMMatrix/skewXSelf)
  - : Verändert die Matrix durch Anwendung der angegebenen Schertransformation entlang der X-Achse. Gibt sich selbst zurück.
- [`DOMMatrix.skewYSelf()`](/de/docs/Web/API/DOMMatrix/skewYSelf)
  - : Verändert die Matrix durch Anwendung der angegebenen Schertransformation entlang der Y-Achse. Gibt sich selbst zurück.

## Hinweise zur Verwendung

Die durch die Schnittstelle `DOMMatrix` definierte Matrix besteht aus vier Zeilen mit jeweils vier Spalten. Die zugrunde liegende Mathematik zu erläutern, würde den Rahmen dieses Artikels sprengen. Eine 4×4-Matrix reicht jedoch aus, um jede Transformation zu beschreiben, die auf 2D- oder 3D-Geometrien angewendet werden kann.

Hier sind die Positionen der 16 Elemente (m_11 bis m_44) dargestellt, aus denen die abstrakte 4×4-Matrix besteht:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>m</mi><mn>11</mn></msub></mtd><mtd><msub><mi>m</mi><mn>21</mn></msub></mtd><mtd><msub><mi>m</mi><mn>31</mn></msub></mtd><mtd><msub><mi>m</mi><mn>41</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>12</mn></msub></mtd><mtd><msub><mi>m</mi><mn>22</mn></msub></mtd><mtd><msub><mi>m</mi><mn>32</mn></msub></mtd><mtd><msub><mi>m</mi><mn>42</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>13</mn></msub></mtd><mtd><msub><mi>m</mi><mn>23</mn></msub></mtd><mtd><msub><mi>m</mi><mn>33</mn></msub></mtd><mtd><msub><mi>m</mi><mn>43</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>14</mn></msub></mtd><mtd><msub><mi>m</mi><mn>24</mn></msub></mtd><mtd><msub><mi>m</mi><mn>34</mn></msub></mtd><mtd><msub><mi>m</mi><mn>44</mn></msub></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left [ \begin{matrix} m_{11} & m_{21} & m_{31} & m_{41} \\ m_{12} & m_{22} & m_{32} & m_{42} \\ m_{13} & m_{23} & m_{33} & m_{43} \\ m_{14} & m_{24} & m_{34} & m_{44} \end{matrix} \right ]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Die Schnittstelle `DOMMatrix` ist für die Verwendung mit sämtlichen Matrizen innerhalb von Markup konzipiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D)
- [`DOMMatrixReadOnly.isIdentity`](/de/docs/Web/API/DOMMatrixReadOnly/isIdentity)
