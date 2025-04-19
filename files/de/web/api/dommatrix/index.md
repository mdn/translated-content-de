---
title: DOMMatrix
slug: Web/API/DOMMatrix
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`DOMMatrix`**-Schnittstelle repräsentiert 4×4 Matrizen, die für 2D- und 3D-Operationen wie Rotation und Translation geeignet sind. Es handelt sich um eine veränderbare Version der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Schnittstelle. Die Schnittstelle ist innerhalb von [Web Workern](/de/docs/Web/API/Web_Workers_API) verfügbar.

**`WebKitCSSMatrix`** und **`SVGMatrix`** sind Aliase für **`DOMMatrix`**.

{{InheritanceDiagram}}

## Konstruktor

- [`DOMMatrix()`](/de/docs/Web/API/DOMMatrix/DOMMatrix)
  - : Erstellt und gibt ein neues `DOMMatrix`-Objekt zurück.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly), obwohl einige dieser Eigenschaften als veränderlich geändert werden._

- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Gleitkommawerte mit doppelter Genauigkeit, die jede Komponente einer 4×4-Matrix repräsentieren, wobei `m11` bis `m14` die erste Spalte sind, `m21` bis `m24` die zweite Spalte und so weiter.
- `a`, `b`, `c`, `d`, `e`, `f`

  - : Gleitkommawerte mit doppelter Genauigkeit, die die Komponenten einer 4×4-Matrix darstellen, die für die Durchführung von 2D-Rotationen und -Translationen benötigt werden. Diese sind Aliase für bestimmte Komponenten einer 4×4-Matrix, wie unten gezeigt.

    | `2D` | `3D Äquivalent` |
    | ---- | --------------- |
    | `a`  | `m11`           |
    | `b`  | `m12`           |
    | `c`  | `m21`           |
    | `d`  | `m22`           |
    | `e`  | `m41`           |
    | `f`  | `m42`           |

## Instanz-Methoden

_Diese Schnittstelle beinhaltet die folgenden Methoden sowie die Methoden, die von [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) geerbt werden._

- [`DOMMatrix.invertSelf()`](/de/docs/Web/API/DOMMatrix/invertSelf)
  - : Modifiziert die Matrix, indem sie invertiert wird. Wenn die Matrix nicht invertiert werden kann, werden alle ihre Komponenten auf `NaN` gesetzt, und [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D) gibt `false` zurück.
- [`DOMMatrix.multiplySelf()`](/de/docs/Web/API/DOMMatrix/multiplySelf)
  - : Modifiziert die Matrix, indem sie mit der angegebenen `DOMMatrix` nachmultipliziert wird. Dies entspricht dem Punktprodukt `A⋅B`, wobei Matrix `A` die Quellmatrix ist und `B` die Matrix ist, die als Eingabe für die Methode angegeben wird. Gibt sich selbst zurück.
- [`DOMMatrix.preMultiplySelf()`](/de/docs/Web/API/DOMMatrix/preMultiplySelf)
  - : Modifiziert die Matrix, indem sie mit der angegebenen `DOMMatrix` vormultipliziert wird. Gibt sich selbst zurück.
- [`DOMMatrix.translateSelf()`](/de/docs/Web/API/DOMMatrix/translateSelf)
  - : Modifiziert die Matrix, indem der angegebene Vektor angewendet wird. Der Standardvektor ist `[0, 0, 0]`. Gibt sich selbst zurück.
- [`DOMMatrix.scaleSelf()`](/de/docs/Web/API/DOMMatrix/scaleSelf)
  - : Modifiziert die Matrix, indem die angegebenen Skalierungsfaktoren angewendet werden, wobei das Zentrum am angegebenen Ursprung liegt. Gibt sich ebenfalls selbst zurück. Standardmäßig beträgt der Skalierungsfaktor `1` für alle drei Achsen, und der Ursprung ist `(0, 0, 0)`. Gibt sich selbst zurück.
- [`DOMMatrix.scale3dSelf()`](/de/docs/Web/API/DOMMatrix/scale3dSelf)
  - : Modifiziert die Matrix, indem der angegebene Skalierungsfaktor auf alle drei Achsen angewendet wird, zentriert auf den gegebenen Ursprung. Gibt sich selbst zurück.
- [`DOMMatrix.rotateSelf()`](/de/docs/Web/API/DOMMatrix/rotateSelf)
  - : Modifiziert die Matrix, indem sie um jede Achse um die angegebene Anzahl von Grad rotiert wird. Gibt sich selbst zurück.
- [`DOMMatrix.rotateAxisAngleSelf()`](/de/docs/Web/API/DOMMatrix/rotateAxisAngleSelf)
  - : Modifiziert die Matrix, indem sie um den angegebenen Winkel um den gegebenen Vektor rotiert wird. Gibt sich selbst zurück.
- [`DOMMatrix.rotateFromVectorSelf()`](/de/docs/Web/API/DOMMatrix/rotateFromVectorSelf)
  - : Modifiziert die Matrix, indem sie um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` rotiert wird. Gibt sich selbst zurück.
- [`DOMMatrix.setMatrixValue()`](/de/docs/Web/API/DOMMatrix/setMatrixValue)
  - : Ersetzt den Inhalt der Matrix durch die Matrix, die durch die angegebene Transformation oder Transformationen beschrieben wird. Gibt sich selbst zurück.
- [`DOMMatrix.skewXSelf()`](/de/docs/Web/API/DOMMatrix/skewXSelf)
  - : Modifiziert die Matrix durch Anwendung der angegebenen Schertransformation entlang der X-Achse. Gibt sich selbst zurück.
- [`DOMMatrix.skewYSelf()`](/de/docs/Web/API/DOMMatrix/skewYSelf)
  - : Modifiziert die Matrix durch Anwendung der angegebenen Schertransformation entlang der Y-Achse. Gibt sich selbst zurück.

## Statische Methoden

_Diese Schnittstelle erbt Methoden von [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)._

- [`fromFloat32Array()`](/de/docs/Web/API/DOMMatrix/fromFloat32Array_static)
  - : Erstellt ein neues veränderbares `DOMMatrix`-Objekt, das ein Array von Gleitkommazahlen mit einfacher Genauigkeit (32-Bit) erhält. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromFloat64Array()`](/de/docs/Web/API/DOMMatrix/fromFloat64Array_static)
  - : Erstellt ein neues veränderbares `DOMMatrix`-Objekt, das ein Array von Gleitkommazahlen mit doppelter Genauigkeit (64-Bit) erhält. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromMatrix()`](/de/docs/Web/API/DOMMatrix/fromMatrix_static)
  - : Erstellt ein neues veränderbares `DOMMatrix`-Objekt, das eine vorhandene Matrix oder ein Objekt erhält, das die Werte für seine Eigenschaften bereitstellt.

## Nutzungshinweise

Die Matrix, die durch die `DOMMatrix`-Schnittstelle definiert wird, besteht aus vier Zeilen zu je vier Spalten. Es liegt außerhalb des Umfangs dieses Artikels, die zugrunde liegende Mathematik zu erklären, aber diese 4×4-Größe reicht aus, um jede Transformation zu beschreiben, die Sie entweder auf 2D- oder 3D-Geometrien anwenden könnten.

Hier sind die Positionen der 16 Elemente (m_11 bis m_44), die die 4×4 abstrakte Matrix ausmachen:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>m</mi><mn>11</mn></msub></mtd><mtd><msub><mi>m</mi><mn>21</mn></msub></mtd><mtd><msub><mi>m</mi><mn>31</mn></msub></mtd><mtd><msub><mi>m</mi><mn>41</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>12</mn></msub></mtd><mtd><msub><mi>m</mi><mn>22</mn></msub></mtd><mtd><msub><mi>m</mi><mn>32</mn></msub></mtd><mtd><msub><mi>m</mi><mn>42</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>13</mn></msub></mtd><mtd><msub><mi>m</mi><mn>23</mn></msub></mtd><mtd><msub><mi>m</mi><mn>33</mn></msub></mtd><mtd><msub><mi>m</mi><mn>43</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>14</mn></msub></mtd><mtd><msub><mi>m</mi><mn>24</mn></msub></mtd><mtd><msub><mi>m</mi><mn>34</mn></msub></mtd><mtd><msub><mi>m</mi><mn>44</mn></msub></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left [ \begin{matrix} m_{11} & m_{21} & m_{31} & m_{41} \\ m_{12} & m_{22} & m_{32} & m_{42} \\ m_{13} & m_{23} & m_{33} & m_{43} \\ m_{14} & m_{24} & m_{34} & m_{44} \end{matrix} \right ]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Die `DOMMatrix`-Schnittstelle ist darauf ausgelegt, dass sie für alle Matrizen innerhalb des Markups verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D)
- [`DOMMatrixReadOnly.isIdentity`](/de/docs/Web/API/DOMMatrixReadOnly/isIdentity)
