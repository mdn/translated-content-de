---
title: Grundlegende Transformationen
slug: Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Texts", "Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking") }}

Jetzt sind wir bereit, unsere schönen Bilder zu verzerren. Aber zuerst lassen Sie uns das {{SVGElement("g")}}-Element formell einführen. Mit diesem Hilfselement können Sie Eigenschaften auf eine vollständige Gruppe von Elementen anwenden. Tatsächlich ist das sein einziger Zweck.

## Beispiel

```html
<svg width="30" height="10">
  <g fill="red">
    <rect x="0" y="0" width="10" height="10" />
    <rect x="20" y="0" width="10" height="10" />
  </g>
</svg>
```

{{ EmbedLiveSample('Example', '', '100') }}

Alle folgenden Transformationen sind in einem `transform`-Attribut eines Elements zusammengefasst. Transformationen können verkettet werden, indem sie durch Leerzeichen getrennt werden.

## Verschiebung

Es kann notwendig sein, ein Element zu verschieben, obwohl Sie es mit den entsprechenden Attributen positionieren können. Für diesen Zweck steht die `translate()`-Transformation bereit.

```html
<svg width="40" height="50">
  <rect x="0" y="0" width="10" height="10" transform="translate(30,40)" />
</svg>
```

```css hidden
svg {
  background-color: #bbffff;
}
```

Das Beispiel wird ein Rechteck darstellen, das zum Punkt (30,40) anstelle von (0,0) verschoben wird.

{{ EmbedLiveSample('Translation', '', '100') }}

Wenn der zweite Wert nicht angegeben wird, wird er als _0_ angenommen.

## Drehung

Ein Element zu drehen, ist eine ziemlich häufige Aufgabe. Verwenden Sie dafür die `rotate()`-Transformation:

```html
<svg width="31" height="31">
  <rect x="12" y="-10" width="20" height="20" transform="rotate(45)" />
</svg>
```

Dieses Beispiel zeigt ein Quadrat, das um 45 Grad gedreht wird. Der Wert für `rotate()` wird in Grad angegeben.

{{ EmbedLiveSample('Rotation', '', '100') }}

## Mehrfache Transformationen

Transformationen können einfach durch Trennung mit Leerzeichen verkettet werden. Zum Beispiel sind `translate()` und `rotate()` häufig verwendete Transformationen.

```html
<svg width="40" height="50">
  <rect
    x="0"
    y="0"
    width="10"
    height="10"
    transform="translate(30,40) rotate(45)" />
</svg>
```

```css hidden
svg {
  background-color: #bbffff;
}
```

Dieses Beispiel zeigt erneut das oben gezeigte kleine Quadrat, das diesmal auch um 45 Grad gedreht wird.

## Verzerrung

Um ein Parallelogramm aus unserem Rechteck zu machen, stehen die Transformationen `skewX()` und `skewY()` zur Verfügung. Jede von ihnen nimmt einen Winkel, der bestimmt, wie weit das Element verzerrt wird.

## Skalierung

`scale()` ändert die Größe eines Elements. Es nimmt zwei Zahlen, wobei die erste der _x_-Skalenfaktor ist und die zweite der _y_-Skalenfaktor. Die Faktoren werden als Verhältnis der transformierten Dimension zur ursprünglichen genommen. Zum Beispiel verkleinert _0.5 um 50%. Wenn die zweite Zahl weggelassen wird, wird angenommen, dass sie gleich der ersten ist._

## Komplexe Transformationen mit `matrix()`

Alle oben genannten Transformationen können durch eine 2x3-Transformationsmatrix ausgedrückt werden. Um mehrere Transformationen zu kombinieren, kann man die resultierende Matrix direkt mit der `matrix(a, b, c, d, e, f)`-Transformation setzen, die Koordinaten von einem vorherigen Koordinatensystem in ein neues Koordinatensystem abbildet, indem

<!-- Hinweis: die {} müssen doppelt maskiert werden, einmal für Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>{</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>newCoordSys</mi></mrow></mstyle></msub><mo>=</mo><mi>a</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>e</mi></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>newCoordSys</mi></mrow></mstyle></msub><mo>=</mo><mi>b</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>f</mi></mtd></mtr></mtable></mrow><annotation encoding="TeX">\left\\{ \begin{matrix} x_{\mathrm{prevCoordSys}} = a x_{\mathrm{newCoordSys}} + c y_{\mathrm{newCoordSys}} + e \\ y_{\mathrm{prevCoordSys}} = b x_{\mathrm{newCoordSys}} + d y_{\mathrm{newCoordSys}} + f \end{matrix} \right.</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Sehen Sie ein [konkretes Beispiel in der SVG-Transformationsdokumentation](/de/docs/Web/SVG/Reference/Attribute/transform#matrix). Um mehr über Transformationen zu erfahren, sehen Sie sich den [Leitfaden zu CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) an.

## Effekte auf Koordinatensysteme

Bei Verwendung von Transformationen etablieren Sie ein neues Koordinatensystem innerhalb des Elements, auf das die Transformationen angewendet werden. Das bedeutet, die Einheiten, die Sie für das Element und seine Kinder angeben, müssen nicht der 1:1-Pixel-Zuordnung folgen, sondern werden ebenfalls entsprechend der Transformation verzerrt, gedreht, verschoben und skaliert.

```html
<svg width="100" height="100">
  <g transform="scale(2)">
    <rect width="50" height="50" />
  </g>
</svg>
```

Das resultierende Rechteck im obenstehenden Beispiel wird 100x100px groß sein. Die interessanteren Effekte treten auf, wenn Sie sich auf Attribute wie `userSpaceOnUse` und dergleichen verlassen.

{{ EmbedLiveSample('Effects_on_Coordinate_Systems', '', '150') }}

## SVG in SVG einbetten

Im Gegensatz zu HTML erlaubt SVG das nahtlose Einbetten anderer `svg`-Elemente. Auf diese Weise können Sie auch neue Koordinatensysteme schaffen, indem Sie den `viewBox`, `width` und `height` des inneren `svg`-Elements verwenden.

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
  <svg width="100" height="100" viewBox="0 0 50 50">
    <rect width="50" height="50" />
  </svg>
</svg>
```

Das obige Beispiel hat im Wesentlichen den gleichen Effekt wie das vorherige, nämlich dass das Rechteck doppelt so groß wie angegeben wird.

{{ EmbedLiveSample('Embedding_SVG_in_SVG', '100', '150') }}

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Texts", "Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking") }}
