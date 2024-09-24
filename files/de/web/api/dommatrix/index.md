---
title: DOMMatrix (WebKitCSSMatrix)
slug: Web/API/DOMMatrix
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{APIRef("Geometry Interfaces")}}

Die **`DOMMatrix`**-Schnittstelle repräsentiert 4×4-Matrizen, geeignet für 2D- und 3D-Operationen einschließlich Rotation und Translation. Es ist eine veränderbare Version der {{domxref("DOMMatrixReadOnly")}}-Schnittstelle.

**`WebKitCSSMatrix`** und **`SVGMatrix`** sind Aliase für **`DOMMatrix`**.

Diese Schnittstelle sollte innerhalb von [Webarbeitern](/de/docs/Web/API/Web_Workers_API) verfügbar sein, obwohl einige Implementierungen dies noch nicht erlauben.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("DOMMatrix.DOMMatrix","DOMMatrix()")}}
  - : Erstellt und gibt ein neues `DOMMatrix`-Objekt zurück.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von {{domxref("DOMMatrixReadOnly")}}, obwohl einige dieser Eigenschaften so verändert wurden, dass sie veränderbar sind._

- `is2D` {{ReadOnlyInline}}
  - : Ein booleanes Flag, dessen Wert `true` ist, wenn die Matrix als 2D-Matrix initialisiert wurde. Ist der Wert `false`, handelt es sich um eine 3D-Matrix.
- `isIdentity` {{ReadOnlyInline}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die Matrix die [Einheitsmatrix](https://en.wikipedia.org/wiki/Identity_matrix) ist. Die Einheitsmatrix ist eine Matrix, in der jeder Wert `0` ist _außer_ denen auf der Hauptdiagonale von der oberen linken zur unteren rechten Ecke (mit anderen Worten, wo die Versätze in jeder Richtung gleich sind).
- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Doppelpräzisions-Gleitkommazahlen, die jede Komponente einer 4×4-Matrix repräsentieren, wobei `m11` bis `m14` die erste Spalte darstellen, `m21` bis `m24` die zweite Spalte und so weiter.
- `a`, `b`, `c`, `d`, `e`, `f`

  - : Doppelpräzisions-Gleitkommazahlen, die die Komponenten einer 4×4-Matrix repräsentieren, die benötigt werden, um 2D-Drehungen und Translationen durchzuführen. Diese sind Aliase für spezifische Komponenten einer 4×4-Matrix, wie unten gezeigt.

    | `2D` | `3D-Äquivalent` |
    | ---- | --------------- |
    | `a`  | `m11`           |
    | `b`  | `m12`           |
    | `c`  | `m21`           |
    | `d`  | `m22`           |
    | `e`  | `m41`           |
    | `f`  | `m42`           |

## Instanz-Methoden

_Diese Schnittstelle beinhaltet die folgenden Methoden sowie die Methoden, die sie von {{domxref("DOMMatrixReadOnly")}} erbt._

- {{domxref("DOMMatrix.invertSelf()")}}
  - : Modifiziert die Matrix, indem sie invertiert wird. Wenn die Matrix nicht invertiert werden kann, werden alle Komponenten auf `NaN` gesetzt und [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly#is2d) gibt `false` zurück.
- {{domxref("DOMMatrix.multiplySelf()")}}
  - : Modifiziert die Matrix durch Post-Multiplikation mit der angegebenen `DOMMatrix`. Dies entspricht dem Skalarprodukt `A⋅B`, wobei Matrix `A` die Quellmatrix und `B` die der Methode als Eingabe gegebene Matrix ist. Gibt sich selbst zurück.
- {{domxref("DOMMatrix.preMultiplySelf()")}}
  - : Modifiziert die Matrix durch Pre-Multiplikation mit der angegebenen `DOMMatrix`. Dies entspricht dem Skalarprodukt `B⋅A`, wobei Matrix `A` die Quellmatrix und `B` die der Methode als Eingabe gegebene Matrix ist. Gibt sich selbst zurück.
- {{domxref("DOMMatrix.translateSelf()")}}
  - : Modifiziert die Matrix durch Anwendung des angegebenen Vektors. Der Standardvektor ist `[0, 0, 0]`. Gibt sich selbst zurück.
- {{domxref("DOMMatrix.scaleNonUniformSelf()")}} {{deprecated_inline}}
  - : Modifiziert die Matrix durch Anwendung der angegebenen Skalierung auf den X-, Y- und Z-Achsen, zentriert am gegebenen Ursprung. Standardmäßig sind die Skalierungsfaktoren der Y- und Z-Achsen beide `1`, aber der Skalierungsfaktor für X muss angegeben werden. Der Standardursprung ist `(0, 0, 0)`. Gibt sich selbst zurück.
- {{domxref("DOMMatrix.scaleSelf()")}}
  - : Modifiziert die Matrix durch Anwendung der angegebenen Skalierungsfaktoren, mit dem Zentrum am angegebenen Ursprung. Gibt sich ebenfalls selbst zurück. Standardmäßig ist der Skalierungsfaktor für alle drei Achsen `1` und der Ursprung ist `(0, 0, 0)`. Gibt sich selbst zurück.
- {{domxref("DOMMatrix.scale3dSelf()")}}
  - : Modifiziert die Matrix durch Anwendung des angegebenen Skalierungsfaktors auf alle drei Achsen, zentriert am gegebenen Ursprung. Gibt sich selbst zurück.
- {{domxref("DOMMatrix.rotateSelf()")}}
  - : Modifiziert die Matrix, indem sie sich um die angegebene Gradzahl um jede Achse dreht. Gibt sich selbst zurück.
- {{domxref("DOMMatrix.rotateAxisAngleSelf()")}}
  - : Modifiziert die Matrix, indem sie um den angegebenen Winkel um den gegebenen Vektor dreht. Gibt sich selbst zurück.
- {{domxref("DOMMatrix.rotateFromVectorSelf()")}}
  - : Modifiziert die Matrix, indem sie um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` dreht. Gibt sich selbst zurück.
- {{domxref("DOMMatrix.setMatrixValue()")}}
  - : Ersetzt den Inhalt der Matrix mit der durch die angegebenen Transformationen beschriebenen Matrix. Gibt sich selbst zurück.
- {{domxref("DOMMatrix.skewXSelf()")}}
  - : Modifiziert die Matrix durch Anwendung der angegebenen Schrägtransformation entlang der X-Achse. Gibt sich selbst zurück.
- {{domxref("DOMMatrix.skewYSelf()")}}
  - : Modifiziert die Matrix durch Anwendung der angegebenen Schrägtransformation entlang der Y-Achse. Gibt sich selbst zurück.

## Statische Methoden

_Diese Schnittstelle erbt Methoden von {{domxref("DOMMatrixReadOnly")}}._

- {{domxref("DOMMatrix.fromFloat32Array", "fromFloat32Array()")}}
  - : Erstellt ein neues veränderbares `DOMMatrix`-Objekt, das durch ein Array von Einzelpräzisions- (32-Bit) Gleitkommawerten gegeben ist. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- {{domxref("DOMMatrix.fromFloat64Array", "fromFloat64Array()")}}
  - : Erstellt ein neues veränderbares `DOMMatrix`-Objekt, das durch ein Array von Doppelpräzisions- (64-Bit) Gleitkommawerten gegeben ist. Wenn das Array sechs Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- {{domxref("DOMMatrix.fromMatrix", "fromMatrix()")}}
  - : Erstellt ein neues veränderbares `DOMMatrix`-Objekt, das durch eine vorhandene Matrix oder ein Objekt gegeben ist, das die Werte für seine Eigenschaften bereitstellt.

## Anwendungshinweise

Die durch die `DOMMatrix`-Schnittstelle definierte Matrix besteht aus vier Zeilen mit jeweils vier Spalten. Auch wenn es über den Rahmen dieses Artikels hinausgeht, die beteiligte Mathematik zu erklären, reicht diese Größe von 4×4 aus, um jede Transformation zu beschreiben, die Sie auf 2D- oder 3D-Geometrien anwenden könnten.

Hier sind die Positionen der 16 Elemente (m_11 bis m_44), die die 4×4 abstrakte Matrix bilden:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>m</mi><mn>11</mn></msub></mtd><mtd><msub><mi>m</mi><mn>21</mn></msub></mtd><mtd><msub><mi>m</mi><mn>31</mn></msub></mtd><mtd><msub><mi>m</mi><mn>41</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>12</mn></msub></mtd><mtd><msub><mi>m</mi><mn>22</mn></msub></mtd><mtd><msub><mi>m</mi><mn>32</mn></msub></mtd><mtd><msub><mi>m</mi><mn>42</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>13</mn></msub></mtd><mtd><msub><mi>m</mi><mn>23</mn></msub></mtd><mtd><msub><mi>m</mi><mn>33</mn></msub></mtd><mtd><msub><mi>m</mi><mn>43</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>14</mn></msub></mtd><mtd><msub><mi>m</mi><mn>24</mn></msub></mtd><mtd><msub><mi>m</mi><mn>34</mn></msub></mtd><mtd><msub><mi>m</mi><mn>44</mn></msub></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left [ \begin{matrix} m_{11} & m_{21} & m_{31} & m_{41} \\ m_{12} & m_{22} & m_{32} & m_{42} \\ m_{13} & m_{23} & m_{33} & m_{43} \\ m_{14} & m_{24} & m_{34} & m_{44} \end{matrix} \right ]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Die `DOMMatrix`-Schnittstelle ist mit der Absicht gestaltet, dass sie für alle Matrizen in Markup verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ihr nicht veränderbares Gegenstück, {{domxref("DOMMatrixReadOnly")}}
