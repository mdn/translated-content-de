---
title: DOMMatrix
slug: Web/API/DOMMatrix
l10n:
  sourceCommit: 5e7036455cd79e30e9953fb29f22c691cb8326e4
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`DOMMatrix`**-Schnittstelle repräsentiert 4×4-Matrizen, die für 2D- und 3D-Operationen, einschließlich Drehung und Translation, geeignet sind. Es handelt sich um eine veränderbare Version der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Schnittstelle. Die Schnittstelle ist innerhalb von [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar.

**`WebKitCSSMatrix`** und **`SVGMatrix`** sind Aliase für **`DOMMatrix`**.

{{InheritanceDiagram}}

## Konstruktor

- [`DOMMatrix()`](/de/docs/Web/API/DOMMatrix/DOMMatrix)
  - : Erstellt und gibt ein neues `DOMMatrix`-Objekt zurück.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly), obwohl einige dieser Eigenschaften verändert werden, um veränderbar zu sein._

- `is2D` {{ReadOnlyInline}}
  - : Ein boolesches Flag, dessen Wert `true` ist, wenn die Matrix als 2D-Matrix initialisiert wurde. Wenn `false`, ist die Matrix 3D.
- `isIdentity` {{ReadOnlyInline}}
  - : Ein Boolescher Wert, dessen Wert `true` ist, wenn die Matrix die [Einheitsmatrix](https://en.wikipedia.org/wiki/Identity_matrix) ist. Die Einheitsmatrix ist eine, in der jeder Wert `0` ist, _außer_ denen auf der Hauptdiagonale von der oberen linken bis zur unteren rechten Ecke (mit anderen Worten, wo die Versätze in jeder Richtung gleich sind).
- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Doppelpräzisions-Gleitkommawerte, die jede Komponente einer 4×4-Matrix darstellen, wobei `m11` bis `m14` die erste Spalte sind, `m21` bis `m24` die zweite Spalte, und so weiter.
- `a`, `b`, `c`, `d`, `e`, `f`

  - : Doppelpräzisions-Gleitkommawerte, die die Komponenten einer 4×4-Matrix darstellen, die benötigt werden, um 2D-Drehungen und Translationen auszuführen. Diese sind Aliase für spezifische Komponenten einer 4×4-Matrix, wie unten gezeigt.

    | `2D` | `3D equivalent` |
    | ---- | --------------- |
    | `a`  | `m11`           |
    | `b`  | `m12`           |
    | `c`  | `m21`           |
    | `d`  | `m22`           |
    | `e`  | `m41`           |
    | `f`  | `m42`           |

## Instanz-Methoden

_Diese Schnittstelle umfasst die folgenden Methoden sowie die Methoden, die von [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) geerbt werden._

- [`DOMMatrix.invertSelf()`](/de/docs/Web/API/DOMMatrix/invertSelf)
  - : Modifiziert die Matrix, indem sie invertiert wird. Wenn die Matrix nicht invertiert werden kann, werden ihre Komponenten alle auf `NaN` gesetzt, und [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly#is2d) gibt `false` zurück.
- [`DOMMatrix.multiplySelf()`](/de/docs/Web/API/DOMMatrix/multiplySelf)
  - : Modifiziert die Matrix, indem sie nach der Multiplikation mit der angegebenen `DOMMatrix` vervielfacht wird. Dies entspricht dem Punktprodukt `A⋅B`, wobei Matrix `A` die Quellmatrix ist und `B` die Matrix ist, die als Eingabe in die Methode gegeben wird. Gibt sich selbst zurück.
- [`DOMMatrix.preMultiplySelf()`](/de/docs/Web/API/DOMMatrix/preMultiplySelf)
  - : Modifiziert die Matrix, indem sie vor der Multiplikation mit der angegebenen `DOMMatrix` vervielfacht wird. Gibt sich selbst zurück.
- [`DOMMatrix.translateSelf()`](/de/docs/Web/API/DOMMatrix/translateSelf)
  - : Modifiziert die Matrix, indem der angegebene Vektor angewendet wird. Der Standardvektor ist `[0, 0, 0]`. Gibt sich selbst zurück.
- [`DOMMatrix.scaleSelf()`](/de/docs/Web/API/DOMMatrix/scaleSelf)
  - : Modifiziert die Matrix, indem die angegebenen Skalierungsfaktoren mit dem Zentrum am angegebenen Ursprung angewendet werden. Gibt sich selbst zurück. Standardmäßig ist der Skalierungsfaktor für alle drei Achsen `1`, und der Ursprung ist `(0, 0, 0)`. Gibt sich selbst zurück.
- [`DOMMatrix.scale3dSelf()`](/de/docs/Web/API/DOMMatrix/scale3dSelf)
  - : Modifiziert die Matrix, indem der angegebene Skalierungsfaktor auf alle drei Achsen angewendet wird, zentriert auf den gegebenen Ursprung. Gibt sich selbst zurück.
- [`DOMMatrix.rotateSelf()`](/de/docs/Web/API/DOMMatrix/rotateSelf)
  - : Modifiziert die Matrix, indem sie um jede Achse um die angegebene Gradzahl rotiert wird. Gibt sich selbst zurück.
- [`DOMMatrix.rotateAxisAngleSelf()`](/de/docs/Web/API/DOMMatrix/rotateAxisAngleSelf)
  - : Modifiziert die Matrix, indem sie um den angegebenen Winkel um den gegebenen Vektor rotiert wird. Gibt sich selbst zurück.
- [`DOMMatrix.rotateFromVectorSelf()`](/de/docs/Web/API/DOMMatrix/rotateFromVectorSelf)
  - : Modifiziert die Matrix, indem sie um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` rotiert wird. Gibt sich selbst zurück.
- [`DOMMatrix.setMatrixValue()`](/de/docs/Web/API/DOMMatrix/setMatrixValue)
  - : Ersetzt den Inhalt der Matrix durch die Matrix, die durch die angegebenen Transformationen beschrieben wird. Gibt sich selbst zurück.
- [`DOMMatrix.skewXSelf()`](/de/docs/Web/API/DOMMatrix/skewXSelf)
  - : Modifiziert die Matrix, indem die angegebene Schrägtransformation entlang der X-Achse angewendet wird. Gibt sich selbst zurück.
- [`DOMMatrix.skewYSelf()`](/de/docs/Web/API/DOMMatrix/skewYSelf)
  - : Modifiziert die Matrix, indem die angegebene Schrägtransformation entlang der Y-Achse angewendet wird. Gibt sich selbst zurück.

## Statische Methoden

_Diese Schnittstelle erbt Methoden von [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)._

- [`fromFloat32Array()`](/de/docs/Web/API/DOMMatrix/fromFloat32Array)
  - : Erstellt ein neues veränderbares `DOMMatrix`-Objekt, das aus einem Array von Einzelpräzisions-(32-Bit)-Gleitkommawerten gegeben wird. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromFloat64Array()`](/de/docs/Web/API/DOMMatrix/fromFloat64Array)
  - : Erstellt ein neues veränderbares `DOMMatrix`-Objekt, das aus einem Array von Doppelpräzisions-(64-Bit)-Gleitkommawerten gegeben wird. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- [`fromMatrix()`](/de/docs/Web/API/DOMMatrix/fromMatrix)
  - : Erstellt ein neues veränderbares `DOMMatrix`-Objekt, das aus einer bestehenden Matrix oder einem Objekt gegeben wird, das die Werte für seine Eigenschaften bereitstellt.

## Gebrauchshinweise

Die Matrix, die durch die `DOMMatrix`-Schnittstelle definiert wird, besteht aus vier Reihen von jeweils vier Spalten. Während es den Rahmen dieses Artikels sprengt, die beteiligte Mathematik zu erklären, reicht diese 4×4-Größe aus, um jegliche Transformation zu beschreiben, die Sie auf entweder 2D- oder 3D-Geometrien anwenden könnten.

Hier sind die Positionen der 16 Elemente (m_11 bis m_44), die die 4×4 abstrakte Matrix ausmachen:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>m</mi><mn>11</mn></msub></mtd><mtd><msub><mi>m</mi><mn>21</mn></msub></mtd><mtd><msub><mi>m</mi><mn>31</mn></msub></mtd><mtd><msub><mi>m</mi><mn>41</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>12</mn></msub></mtd><mtd><msub><mi>m</mi><mn>22</mn></msub></mtd><mtd><msub><mi>m</mi><mn>32</mn></msub></mtd><mtd><msub><mi>m</mi><mn>42</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>13</mn></msub></mtd><mtd><msub><mi>m</mi><mn>23</mn></msub></mtd><mtd><msub><mi>m</mi><mn>33</mn></msub></mtd><mtd><msub><mi>m</mi><mn>43</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>14</mn></msub></mtd><mtd><msub><mi>m</mi><mn>24</mn></msub></mtd><mtd><msub><mi>m</mi><mn>34</mn></msub></mtd><mtd><msub><mi>m</mi><mn>44</mn></msub></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left [ \begin{matrix} m_{11} & m_{21} & m_{31} & m_{41} \\ m_{12} & m_{22} & m_{32} & m_{42} \\ m_{13} & m_{23} & m_{33} & m_{43} \\ m_{14} & m_{24} & m_{34} & m_{44} \end{matrix} \right ]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Die `DOMMatrix`-Schnittstelle ist mit der Absicht gestaltet, dass sie für alle Matrizen innerhalb der Markup verwendet werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das nicht modifizierbare Gegenstück, [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)
