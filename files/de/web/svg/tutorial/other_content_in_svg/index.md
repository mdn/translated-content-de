---
title: Andere Inhalte in SVG
slug: Web/SVG/Tutorial/Other_content_in_SVG
l10n:
  sourceCommit: 1952d89acf75a2a9448cab9d323aa320281cd746
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Clipping_and_masking", "Web/SVG/Tutorial/Filter_effects") }}

Neben grafischen Grundformen wie Rechtecken und Kreisen bietet SVG auch eine Reihe von Elementen zum Einbetten anderer Arten von Inhalten in Bilder.

### Einbetten von Rasterbildern

Ähnlich wie das HTML-Element img verfügt SVG über ein `image`-Element, das denselben Zweck erfüllt. Sie können es verwenden, um beliebige Raster- (und Vektor-) Bilder einzubetten. Die Spezifikation verlangt, dass Anwendungen mindestens PNG-, JPEG- und SVG-Formatdateien unterstützen.

Das eingebettete Bild wird zu einem normalen SVG-Element. Das bedeutet, dass Sie Clips, Masken, Filter, Drehungen und alle anderen SVG-Tools auf den Inhalt anwenden können:

```html
<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="200"
  height="200">
  <image
    x="90"
    y="-65"
    width="128"
    height="146"
    transform="rotate(45)"
    href="https://developer.mozilla.org/de/docs/Web/SVG/Element/image/mdn_logo_only_color.png" />
</svg>
```

{{ EmbedLiveSample('Embedding_raster_images','220','240') }}

### Einbetten beliebiger XML-Daten

Da SVG eine XML-Anwendung ist, können Sie natürlich _immer_ beliebige XML-Daten irgendwo in einem SVG-Dokument einbetten. Allerdings haben Sie dann keine Möglichkeit zu definieren, wie das umgebende SVG auf den Inhalt reagieren soll. Tatsächlich wird ein konformer Viewer in keiner Weise reagieren; die Daten werden weggelassen. Daher fügt die Spezifikation das `{{ SVGElement("foreignObject") }}`-Element zu SVG hinzu. Sein einziger Zweck ist es, als Container für andere Markups zu dienen und als Träger für SVG-Stilattributen (insbesondere `width` und `height`, um den Platz zu definieren, den das Objekt einnimmt).

Das `foreignObject`-Element ist eine gute Möglichkeit, XHTML in SVG einzubetten. Bei längeren Texten ist das HTML-Layout besser geeignet und komfortabler als das SVG-`text`-Element. Ein weiterer häufig zitierter Anwendungsfall ist das Einbetten von Formeln mit MathML. Für wissenschaftliche Anwendungen von SVG ist dies eine sehr gute Möglichkeit, beide Welten miteinander zu verbinden.

> [!NOTE]
> Bitte beachten Sie, dass der Inhalt des `foreignObject` vom Viewer verarbeitet werden muss. Ein eigenständiger SVG-Viewer wird wahrscheinlich nicht in der Lage sein, HTML oder MathML zu rendern.

Da `foreignObject` ein SVG-Element ist, können Sie, wie im Fall von `image`, jegliche SVG-Funktionen damit nutzen, die dann auf dessen Inhalt angewendet werden.

{{ PreviousNext("Web/SVG/Tutorial/Clipping_and_masking", "Web/SVG/Tutorial/Filter_effects") }}
