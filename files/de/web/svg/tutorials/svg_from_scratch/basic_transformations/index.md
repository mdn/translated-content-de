---
title: Grundlegende Transformationen
slug: Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Texts", "Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking") }}

Jetzt sind wir bereit, unsere schönen Bilder zu verzerren. Aber zuerst führen wir formell das {{SVGElement("g")}}-Element ein. Mit diesem Helfer können Sie Eigenschaften auf eine komplette Gruppe von Elementen anwenden. Eigentlich ist das sein einziger Zweck.

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

Alle folgenden Transformationen sind im `transform`-Attribut eines Elements zusammengefasst. Transformationen können durch Leerzeichen getrennt verkettet werden.

## Translation

Es kann notwendig sein, ein Element zu verschieben, selbst wenn man es mit den entsprechenden Attributen positionieren kann. Zu diesem Zweck steht die `translate()`-Transformation bereit.

```html
<svg width="40" height="50">
  <rect x="0" y="0" width="10" height="10" transform="translate(30,40)" />
</svg>
```

```css hidden
svg {
  background-color: #bff;
}
```

Das Beispiel wird ein Rechteck erzeugen, das zum Punkt (30,40) anstelle von (0,0) verschoben ist.

{{ EmbedLiveSample('Translation', '', '100') }}

Wenn der zweite Wert nicht angegeben ist, wird angenommen, dass dieser _0_ ist.

## Rotation

Das Drehen eines Elements ist eine ziemlich häufige Aufgabe. Verwenden Sie dafür die `rotate()`-Transformation:

```html
<svg width="31" height="31">
  <rect x="12" y="-10" width="20" height="20" transform="rotate(45)" />
</svg>
```

Dieses Beispiel zeigt ein Quadrat, das um 45 Grad gedreht ist. Der Wert für `rotate()` wird in Grad angegeben.

{{ EmbedLiveSample('Rotation', '', '100') }}

## Mehrfache Transformationen

Transformationen können einfach verkettet werden, indem man sie durch Leerzeichen trennt. Zum Beispiel sind `translate()` und `rotate()` häufig genutzte Transformationen.

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
  background-color: #bff;
}
```

Dieses Beispiel zeigt erneut das kleine Quadrat, das diesmal auch um 45 Grad gedreht ist.

## Schrägstellung

Um aus unserem Rechteck eine Raute zu machen, stehen die Transformationen `skewX()` und `skewY()` zur Verfügung. Jede nimmt einen Winkel, der bestimmt, wie weit das Element geneigt wird.

## Skalierung

`scale()` ändert die Größe eines Elements. Es nimmt zwei Zahlen: die erste ist der _x_-Skalierungsfaktor und die zweite der _y_-Skalierungsfaktor. Die Faktoren werden als Verhältnis der transformierten Dimension zur Originaldimension betrachtet. Zum Beispiel verkleinert _0.5 um 50%. Wenn die zweite Zahl weggelassen wird, wird angenommen, dass sie gleich der ersten ist._

## Komplexe Transformationen mit `matrix()`

Alle oben genannten Transformationen können durch eine 2x3-Transformationsmatrix ausgedrückt werden. Um mehrere Transformationen zu kombinieren, kann man die resultierende Matrix direkt mit der `matrix(a, b, c, d, e, f)`-Transformation setzen, die Koordinaten von einem vorherigen Koordinatensystem in ein neues Koordinatensystem abbildet durch

<!-- Note: the {} need to be double-escaped, once for Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>{</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>newCoordSys</mi></mrow></mstyle></msub><mo>=</mo><mi>a</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>e</mi></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>newCoordSys</mi></mrow></mstyle></msub><mo>=</mo><mi>b</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>f</mi></mtd></mtr></mtable></mrow><annotation encoding="TeX">\left\\{ \begin{matrix} x_{\mathrm{prevCoordSys}} = a x_{\mathrm{newCoordSys}} + c y_{\mathrm{newCoordSys}} + e \\ y_{\mathrm{prevCoordSys}} = b x_{\mathrm{newCoordSys}} + d y_{\mathrm{newCoordSys}} + f \end{matrix} \right.</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Sehen Sie sich ein [konkretes Beispiel in der SVG-Transformationsdokumentation](/de/docs/Web/SVG/Reference/Attribute/transform#matrix) an. Um mehr über Transformationen zu erfahren, schauen Sie sich den [CSS-Transformaten](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) Leitfaden an.

## Auswirkungen auf Koordinatensysteme

Beim Verwenden von Transformationen etablieren Sie ein neues Koordinatensystem innerhalb des Elements, auf das die Transformationen angewendet werden. Das bedeutet, dass die Einheiten, die Sie für das Element und seine Kinder angeben, möglicherweise nicht der 1:1-Pixel-Zuordnung folgen, sondern ebenfalls verzerrt, geneigt, verschoben und skaliert werden, entsprechend der Transformation.

```html
<svg width="100" height="100">
  <g transform="scale(2)">
    <rect width="50" height="50" />
  </g>
</svg>
```

Das resultierende Rechteck im obigen Beispiel wird 100x100px groß sein. Die interessanteren Effekte ergeben sich, wenn man sich auf Attribute wie `userSpaceOnUse` und dergleichen verlässt.

{{ EmbedLiveSample('Effects_on_Coordinate_Systems', '', '150') }}

## Einbetten von SVG in SVG

Im Gegensatz zu HTML erlaubt SVG das nahtlose Einbetten anderer `svg`-Elemente. Auf diese Weise können Sie auch neue Koordinatensysteme erstellen, indem Sie das `viewBox`-, `width`- und `height`-Attribut des inneren `svg`-Elements nutzen.

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
  <svg width="100" height="100" viewBox="0 0 50 50">
    <rect width="50" height="50" />
  </svg>
</svg>
```

Das obige Beispiel hat im Wesentlichen denselben Effekt wie das vorherige, nämlich dass das Rechteck doppelt so groß ist wie angegeben.

{{ EmbedLiveSample('Embedding_SVG_in_SVG', '100', '150') }}

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Texts", "Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking") }}
