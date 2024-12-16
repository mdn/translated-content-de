---
title: DOMMatrix
slug: Web/API/DOMMatrix
l10n:
  sourceCommit: 5a4bb8ee0052bc6b0bc768e9d8b33ad9d4d9b359
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Das **`DOMMatrix`**-Interface repräsentiert 4×4 Matrizen, geeignet für 2D- und 3D-Operationen einschließlich Rotation und Translation. Es ist eine veränderbare Version des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) Interfaces. Dieses Interface ist innerhalb von [Web Workern](/de/docs/Web/API/Web_Workers_API) verfügbar.

**`WebKitCSSMatrix`** und **`SVGMatrix`** sind Aliase für **`DOMMatrix`**.

{{InheritanceDiagram}}

## Konstruktor

- [`DOMMatrix()`](/de/docs/Web/API/DOMMatrix/DOMMatrix)
  - : Erstellt und gibt ein neues `DOMMatrix`-Objekt zurück.

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften von [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly), obwohl einige dieser Eigenschaften so verändert werden, dass sie veränderbar sind._

- `is2D` {{ReadOnlyInline}}
  - : Eine boolesche Markierung, deren Wert `true` ist, wenn die Matrix als 2D-Matrix initialisiert wurde. Wenn `false`, ist die Matrix 3D.
- `isIdentity` {{ReadOnlyInline}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die Matrix die [Einheitsmatrix](https://en.wikipedia.org/wiki/Identity_matrix) ist. Die Einheitsmatrix ist eine, in der jeder Wert `0` ist, _außer_ denen auf der Hauptdiagonale von der oberen linken zur unteren rechten Ecke (mit anderen Worten, wo die Versätze in jeder Richtung gleich sind).
- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Gleitkommawerte mit doppelter Genauigkeit, die jede Komponente einer 4×4-Matrix darstellen, wobei `m11` bis `m14` die erste Spalte, `m21` bis `m24` die zweite Spalte usw. sind.
- `a`, `b`, `c`, `d`, `e`, `f`

  - : Gleitkommawerte mit doppelter Genauigkeit, die die Komponenten einer 4×4-Matrix darstellen, die erforderlich sind, um 2D-Rotationen und -Translationsdurchzuführen. Diese sind Aliase für spezifische Komponenten einer 4×4-Matrix, wie unten gezeigt.

    | `2D` | `3D equivalent` |
    | ---- | --------------- |
    | `a`  | `m11`           |
    | `b`  | `m12`           |
    | `c`  | `m21`           |
    | `d`  | `m22`           |
    | `e`  | `m41`           |
    | `f`  | `m42`           |

## Instanz-Methoden

_Dieses Interface beinhaltet die folgenden Methoden sowie die Methoden, die es von [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) erbt._

- [`DOMMatrix.invertSelf()`](/de/docs/Web/API/DOMMatrix/invertSelf)
  - : Modifiziert die Matrix, indem sie invertiert wird. Falls die Matrix nicht invertiert werden kann, werden all ihre Komponenten auf `NaN` gesetzt und [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly#is2d) gibt `false` zurück.
- [`DOMMatrix.multiplySelf()`](/de/docs/Web/API/DOMMatrix/multiplySelf)
  - : Modifiziert die Matrix, indem sie mit der angegebenen `DOMMatrix` nachmultipliziert wird. Dies entspricht dem Skalarprodukt `A⋅B`, wobei Matrix `A` die Quellmatrix und `B` die Matrix ist, die als Eingabe für die Methode gegeben wird. Gibt sich selbst zurück.
- [`DOMMatrix.preMultiplySelf()`](/de/docs/Web/API/DOMMatrix/preMultiplySelf)
  - : Modifiziert die Matrix, indem sie mit der angegebenen `DOMMatrix` vorvermindert wird. Dies entspricht dem Skalarprodukt `B⋅A`, wobei Matrix `A` die Quellmatrix und `B` die Matrix ist, die als Eingabe für die Methode gegeben wird. Gibt sich selbst zurück.
- [`DOMMatrix.translateSelf()`](/de/docs/Web/API/DOMMatrix/translateSelf)
  - : Modifiziert die Matrix, indem der angegebene Vektor angewendet wird. Der Standardvektor ist `[0, 0, 0]`. Gibt sich selbst zurück.
- [`DOMMatrix.scaleSelf()`](/de/docs/Web/API/DOMMatrix/scaleSelf)
  - : Modifiziert die Matrix, indem die angegebenen Skalierungsfaktoren angewendet werden, mit dem Zentrum an einem angegebenen Ursprung. Gibt auch sich selbst zurück. Standardmäßig beträgt der Skalierungsfaktor für alle drei Achsen `1` und der Ursprung ist `(0, 0, 0)`. Gibt sich selbst zurück.
- [`DOMMatrix.scale3dSelf()`](/de/docs/Web/API/DOMMatrix/scale3dSelf)
  - : Modifiziert die Matrix, indem der angegebene Skalierungsfaktor auf alle drei Achsen angewendet wird, zentriert auf dem angegebenen Ursprung. Gibt sich selbst zurück.
- [`DOMMatrix.rotateSelf()`](/de/docs/Web/API/DOMMatrix/rotateSelf)
  - : Modifiziert die Matrix, indem sie sich selbst um jede Achse um die angegebene Anzahl Grad dreht. Gibt sich selbst zurück.
- [`DOMMatrix.rotateAxisAngleSelf()`](/de/docs/Web/API/DOMMatrix/rotateAxisAngleSelf)
  - : Modifiziert die Matrix, indem sie um den angegebenen Winkel um den angegebenen Vektor gedreht wird. Gibt sich selbst zurück.
- [`DOMMatrix.rotateFromVectorSelf()`](/de/docs/Web/API/DOMMatrix/rotateFromVectorSelf)
  - : Modifiziert die Matrix, indem sie um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` gedreht wird. Gibt sich selbst zurück.
- [`DOMMatrix.setMatrixValue()`](/de/docs/Web/API/DOMMatrix/setMatrixValue)
  - : Ersetzt den Inhalt der Matrix mit der durch die angegebene Transformation oder die angegebenen Transformationen beschriebenen Matrix. Gibt sich selbst zurück.
- [`DOMMatrix.skewXSelf()`](/de/docs/Web/API/DOMMatrix/skewXSelf)
  - : Modifiziert die Matrix, indem die angegebene Verzerrungstransformation entlang der X-Achse angewendet wird. Gibt sich selbst zurück.
- [`DOMMatrix.skewYSelf()`](/de/docs/Web/API/DOMMatrix/skewYSelf)
  - : Modifiziert die Matrix, indem die angegebene Verzerrungstransformation entlang der Y-Achse angewendet wird. Gibt sich selbst zurück.

## Statische Methoden

_Dieses Interface erbt Methoden von [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)._

- [`fromFloat32Array()`](/de/docs/Web/API/DOMMatrix/fromFloat32Array)
  - : Erstellt ein neues, veränderbares `DOMMatrix`-Objekt, gegeben ein Array von Einzelpräzisions- (32-bit) Gleitkommawerten. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromFloat64Array()`](/de/docs/Web/API/DOMMatrix/fromFloat64Array)
  - : Erstellt ein neues, veränderbares `DOMMatrix`-Objekt, gegeben ein Array von Doppelpräzisions- (64-bit) Gleitkommawerten. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromMatrix()`](/de/docs/Web/API/DOMMatrix/fromMatrix)
  - : Erstellt ein neues, veränderbares `DOMMatrix`-Objekt, gegeben eine bestehende Matrix oder ein Objekt, das die Werte für seine Eigenschaften bereitstellt.

## Gebrauchshinweise

Die durch das `DOMMatrix`-Interface definierte Matrix besteht aus vier Zeilen mit jeweils vier Spalten. Während es über den Rahmen dieses Artikels hinausgeht, die Mathematik dahinter zu erklären, reicht diese 4×4-Größe aus, um jede Transformation zu beschreiben, die Sie auf 2D- oder 3D-Geometrien anwenden möchten.

Hier sind die Positionen der 16 Elemente (m_11 bis m_44), die die 4×4 abstrakte Matrix bilden:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>m</mi><mn>11</mn></msub></mtd><mtd><msub><mi>m</mi><mn>21</mn></msub></mtd><mtd><msub><mi>m</mi><mn>31</mn></msub></mtd><mtd><msub><mi>m</mi><mn>41</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>12</mn></msub></mtd><mtd><msub><mi>m</mi><mn>22</mn></msub></mtd><mtd><msub><mi>m</mi><mn>32</mn></msub></mtd><mtd><msub><mi>m</mi><mn>42</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>13</mn></msub></mtd><mtd><msub><mi>m</mi><mn>23</mn></msub></mtd><mtd><msub><mi>m</mi><mn>33</mn></msub></mtd><mtd><msub><mi>m</mi><mn>43</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>14</mn></msub></mtd><mtd><msub><mi>m</mi><mn>24</mn></msub></mtd><mtd><msub><mi>m</mi><mn>34</mn></msub></mtd><mtd><msub><mi>m</mi><mn>44</mn></msub></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left [ \begin{matrix} m_{11} & m_{21} & m_{31} & m_{41} \\ m_{12} & m_{22} & m_{32} & m_{42} \\ m_{13} & m_{23} & m_{33} & m_{43} \\ m_{14} & m_{24} & m_{34} & m_{44} \end{matrix} \right ]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Das `DOMMatrix`-Interface ist mit der Absicht gestaltet, dass es für alle Matrizen innerhalb von Markups verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das nicht modifizierbare Gegenstück, [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)
