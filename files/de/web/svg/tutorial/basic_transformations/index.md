---
title: Grundlegende Transformationen
slug: Web/SVG/Tutorial/Basic_Transformations
l10n:
  sourceCommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{SVGRef}}

{{PreviousNext("Web/SVG/Tutorial/Texts", "Web/SVG/Tutorial/Clipping_and_masking")}}

Nun sind wir bereit, unsere schönen Bilder zu verzerren. Aber zuerst wollen wir das {{SVGElement("g")}}-Element formell vorstellen. Mit diesem Helfer können Sie Eigenschaften für eine komplette Gruppe von Elementen zuweisen. Tatsächlich ist das sein einziger Zweck.

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

Alle folgenden Transformationen werden im `transform`-Attribut eines Elements zusammengefasst. Transformationen können durch Verkettung nacheinander mithilfe von Leerzeichen verbunden werden.

## Translation

Es kann notwendig sein, ein Element zu verschieben, obwohl Sie es mit den entsprechenden Attributen positionieren können. Für diesen Zweck steht die `translate()`-Transformation bereit.

```html
<svg width="40" height="50" style="background-color:#bff;">
  <rect x="0" y="0" width="10" height="10" transform="translate(30,40)" />
</svg>
```

Das Beispiel wird ein Rechteck an der Position (30,40) statt (0,0) rendern.

{{ EmbedLiveSample('Translation', '', '100') }}

Wenn der zweite Wert nicht angegeben wird, wird _0_ angenommen.

## Rotation

Das Drehen eines Elements ist eine ziemlich häufige Aufgabe. Verwenden Sie hierfür die `rotate()`-Transformation:

```html
<svg width="31" height="31">
  <rect x="12" y="-10" width="20" height="20" transform="rotate(45)" />
</svg>
```

Dieses Beispiel zeigt ein Quadrat, das um 45 Grad gedreht ist. Der Wert für `rotate()` wird in Grad angegeben.

{{ EmbedLiveSample('Rotation', '', '100') }}

## Mehrere Transformationen

Transformationen können einfach durch Trennen mit Leerzeichen verkettet werden. Zum Beispiel sind `translate()` und `rotate()` häufig verwendete Transformationen.

```html
<svg width="40" height="50" style="background-color:#bff;">
  <rect
    x="0"
    y="0"
    width="10"
    height="10"
    transform="translate(30,40) rotate(45)" />
</svg>
```

Dieses Beispiel zeigt wieder das kleine Quadrat, das diesmal auch um 45 Grad gedreht ist.

## Scherung

Um aus unserem Rechteck eine Raute zu machen, stehen die Transformationen `skewX()` und `skewY()` zur Verfügung. Jede nimmt einen Winkel, der bestimmt, wie weit das Element geschert wird.

## Skalierung

`scale()` ändert die Größe eines Elements. Es nimmt zwei Zahlen, wobei die erste der _x_-Skalierungsfaktor und die zweite der _y_-Skalierungsfaktor ist. Die Faktoren werden als Verhältnis der transformierten Dimension zur ursprünglichen genommen. Zum Beispiel schrumpft _0.5 um 50%. Wenn die zweite Zahl weggelassen wird, wird angenommen, dass sie gleich der ersten ist._

## Komplexe Transformationen mit `matrix()`

Alle oben genannten Transformationen können durch eine 2x3-Transformationsmatrix ausgedrückt werden. Um mehrere Transformationen zu kombinieren, kann man die resultierende Matrix direkt mit der `matrix(a, b, c, d, e, f)`-Transformation setzen, die Koordinaten von einem vorherigen Koordinatensystem in ein neues Koordinatensystem abbildet durch

<!-- Bitte beachten Sie: die {} müssen doppelt escaped werden, einmal für Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>{</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>newCoordSys</mi></mrow></mstyle></msub><mo>=</mo><mi>a</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>e</mi></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>newCoordSys</mi></mrow></mstyle></msub><mo>=</mo><mi>b</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>f</mi></mtd></mtr></mtable></mrow><annotation encoding="TeX">\left\\{ \begin{matrix} x_{\mathrm{prevCoordSys}} = a x_{\mathrm{newCoordSys}} + c y_{\mathrm{newCoordSys}} + e \\ y_{\mathrm{prevCoordSys}} = b x_{\mathrm{newCoordSys}} + d y_{\mathrm{newCoordSys}} + f \end{matrix} \right.</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Siehe ein [konkretes Beispiel in der SVG-Transformationsdokumentation](/de/docs/Web/SVG/Attribute/transform#matrix). Detaillierte Informationen zu dieser Eigenschaft finden Sie in der [SVG Recommendation](https://www.w3.org/TR/SVG/coords.html#TransformMatrixDefined).

## Auswirkungen auf Koordinatensysteme

Bei der Verwendung von Transformationen etablieren Sie ein neues Koordinatensystem innerhalb des Elements, auf das die Transformationen angewendet werden. Das bedeutet, die Einheiten, die Sie für das Element und dessen Kinder angeben, folgen möglicherweise nicht der 1:1-Pixelzuordnung, sondern werden entsprechend der Transformation verzerrt, geschert, verschoben und skaliert.

```html
<svg width="100" height="100">
  <g transform="scale(2)">
    <rect width="50" height="50" />
  </g>
</svg>
```

Das resultierende Rechteck im obigen Beispiel wird 100x100px groß sein. Die interessanteren Effekte ergeben sich, wenn Sie sich auf Attribute wie `userSpaceOnUse` und ähnliches verlassen.

{{ EmbedLiveSample('Effects_on_Coordinate_Systems', '', '150') }}

## Einbettung von SVG in SVG

Im Gegensatz zu HTML erlaubt SVG das nahtlose Einbetten anderer `svg`-Elemente. Auf diese Weise können Sie auch neue Koordinatensysteme erstellen, indem Sie den `viewBox`, `width` und `height` des inneren `svg`-Elements nutzen.

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
  <svg width="100" height="100" viewBox="0 0 50 50">
    <rect width="50" height="50" />
  </svg>
</svg>
```

Das obige Beispiel hat im Wesentlichen denselben Effekt wie das zuvor genannte, nämlich dass das Rechteck doppelt so groß ist wie angegeben.

{{ EmbedLiveSample('Embedding_SVG_in_SVG', '100', '150') }}

{{PreviousNext("Web/SVG/Tutorial/Texts", "Web/SVG/Tutorial/Clipping_and_masking")}}
