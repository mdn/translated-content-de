---
title: Grundlegende Transformationen
slug: Web/SVG/Tutorials/SVG_from_scratch/Basic_transformations
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Texts", "Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking") }}

Jetzt sind wir bereit, unsere schönen Bilder zu verzerren. Aber zuerst stellen wir Ihnen formal das {{SVGElement("g")}} Element vor. Mit diesem Helfer können Sie Eigenschaften auf einen kompletten Satz von Elementen zuweisen. Tatsächlich ist es genau das, wofür es gedacht ist.

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

Alle folgenden Transformationen sind im `transform` Attribut eines Elements zusammengefasst. Transformationen können durch Aneinanderreihung verkettet werden, getrennt durch Leerzeichen.

## Übersetzung

Es kann notwendig sein, ein Element zu verschieben, obwohl Sie es mit den entsprechenden Attributen positionieren können. Für diesen Zweck steht die `translate()` Transformation bereit.

```html
<svg width="40" height="50" style="background-color:#bff;">
  <rect x="0" y="0" width="10" height="10" transform="translate(30,40)" />
</svg>
```

Im Beispiel wird ein Rechteck dargestellt, das an den Punkt (30,40) statt an (0,0) verschoben wurde.

{{ EmbedLiveSample('Translation', '', '100') }}

Wenn der zweite Wert nicht angegeben wird, wird _0_ angenommen.

## Drehung

Das Drehen eines Elements ist eine ziemlich alltägliche Aufgabe. Verwenden Sie die `rotate()` Transformation dafür:

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
<svg width="40" height="50" style="background-color:#bff;">
  <rect
    x="0"
    y="0"
    width="10"
    height="10"
    transform="translate(30,40) rotate(45)" />
</svg>
```

Dieses Beispiel zeigt erneut das kleine Quadrat von oben, das diesmal ebenfalls um 45 Grad gedreht wird.

## Scherung

Um aus unserem Rechteck eine Raute zu machen, stehen die Transformationen `skewX()` und `skewY()` zur Verfügung. Jede nimmt einen Winkel, der bestimmt, wie weit das Element geschert wird.

## Skalierung

`scale()` ändert die Größe eines Elements. Es nimmt zwei Zahlen, wobei die erste der Skalierungsfaktor für _x_ und die zweite der Skalierungsfaktor für _y_ ist. Die Faktoren werden als Verhältnis der transformierten Dimension zur ursprünglichen betrachtet. Zum Beispiel schrumpft _0.5 um 50%. Wenn die zweite Nummer weggelassen wird, wird angenommen, dass sie gleich der ersten ist._

## Komplexe Transformationen mit `matrix()`

Alle oben genannten Transformationen können durch eine 2x3 Transformationsmatrix ausgedrückt werden. Um mehrere Transformationen zu kombinieren, kann man die resultierende Matrix direkt mit der `matrix(a, b, c, d, e, f)` Transformation setzen, die Koordinaten von einem vorherigen Koordinatensystem in ein neues Koordinatensystem zuordnet durch

<!-- Hinweis: Die {} müssen doppelt maskiert werden, einmal für Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>{</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>newCoordSys</mi></mrow></mstyle></msub><mo>=</mo><mi>a</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>e</mi></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>newCoordSys</mi></mrow></mstyle></msub><mo>=</mo><mi>b</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>f</mi></mtd></mtr></mtable></mrow><annotation encoding="TeX">\left\\{ \begin{matrix} x_{\mathrm{prevCoordSys}} = a x_{\mathrm{newCoordSys}} + c y_{\mathrm{newCoordSys}} + e \\ y_{\mathrm{prevCoordSys}} = b x_{\mathrm{newCoordSys}} + d y_{\mathrm{newCoordSys}} + f \end{matrix} \right.</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Sehen Sie ein [konkretes Beispiel in der SVG-Transformationsdokumentation](/de/docs/Web/SVG/Reference/Attribute/transform#matrix). Um mehr über Transformationen zu erfahren, lesen Sie die [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) Anleitung.

## Auswirkungen auf Koordinatensysteme

Bei der Verwendung von Transformationen erstellen Sie ein neues Koordinatensystem innerhalb des Elements, auf das die Transformationen angewendet werden. Das bedeutet, dass die Einheiten, die Sie für das Element und seine Kinder angeben, möglicherweise nicht der 1:1-Pixelabbildung folgen, sondern ebenfalls verzerrt, geschert, verschoben und entsprechend der Transformation skaliert werden.

```html
<svg width="100" height="100">
  <g transform="scale(2)">
    <rect width="50" height="50" />
  </g>
</svg>
```

Das resultierende Rechteck im obigen Beispiel wird 100x100px groß sein. Die interessanteren Effekte treten auf, wenn Sie sich auf Attribute wie `userSpaceOnUse` und ähnliche verlassen.

{{ EmbedLiveSample('Effects_on_Coordinate_Systems', '', '150') }}

## Einbetten von SVG in SVG

Im Gegensatz zu HTML ermöglicht SVG das nahtlose Einbetten anderer `svg` Elemente. Auf diese Weise können Sie auch neue Koordinatensysteme erstellen, indem Sie den `viewBox`, `width` und `height` des inneren `svg` Elements verwenden.

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
  <svg width="100" height="100" viewBox="0 0 50 50">
    <rect width="50" height="50" />
  </svg>
</svg>
```

Das obige Beispiel hat im Wesentlichen den gleichen Effekt wie das vorige, nämlich dass das Rechteck doppelt so groß wie angegeben sein wird.

{{ EmbedLiveSample('Embedding_SVG_in_SVG', '100', '150') }}

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Texts", "Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking") }}
