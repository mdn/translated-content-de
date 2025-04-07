---
title: Andere Inhalte in SVG
slug: Web/SVG/Tutorials/SVG_from_scratch/Other_content_in_SVG
l10n:
  sourceCommit: fac054dcb3d82ac534f8bae21755f15ef2e644f7
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking", "Web/SVG/Tutorials/SVG_from_scratch/Filter_effects") }}

Neben grafischen Grundelementen wie Rechtecken und Kreisen bietet SVG auch eine Reihe von Elementen, um andere Arten von Inhalten in Bildern einzubetten.

### Einbetten von Rasterbildern

Ähnlich wie das `img`-Element in HTML verfügt SVG über ein `image`-Element, das denselben Zweck erfüllt. Sie können es verwenden, um beliebige Raster- (und Vektor-) Bilder einzubetten. Die Spezifikation verlangt von Anwendungen, dass sie mindestens PNG-, JPEG- und SVG-Formatdateien unterstützen.

Das eingebettete Bild wird zu einem normalen SVG-Element. Das bedeutet, dass Sie Clips, Masken, Filter, Rotationen und alle anderen Werkzeuge von SVG auf den Inhalt anwenden können:

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
    href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/image/mdn_logo_only_color.png" />
</svg>
```

{{ EmbedLiveSample('Embedding_raster_images','220','240') }}

### Einbetten beliebiger XML-Daten

Da SVG eine XML-Anwendung ist, können Sie natürlich _immer_ beliebiges XML an jeder Stelle in einem SVG-Dokument einbetten. Allerdings gibt es dann keine Möglichkeit, zu definieren, wie das umgebende SVG auf den Inhalt reagieren soll. In einem konformen Viewer wird es in der Tat in keiner Weise reagieren, die Daten werden ignoriert. Daher fügt die Spezifikation das {{ SVGElement("foreignObject") }}-Element in SVG hinzu. Sein einziger Zweck ist es, als Container für andere Markups zu dienen und SVG-Stilattributträger zu sein (vor allem `width` und `height`, um den Platz zu definieren, den das Objekt einnehmen wird).

Das `foreignObject`-Element ist eine gute Möglichkeit, XHTML in SVG einzubetten. Wenn Sie längere Texte haben, ist das HTML-Layout geeigneter und komfortabler als das SVG-`text`-Element. Ein häufig zitierter Anwendungsfall ist das Einbetten von Formeln mit MathML. Für wissenschaftliche Anwendungen von SVG ist dies eine sehr gute Möglichkeit, beide Welten zu verbinden.

> [!NOTE]
> Bitte bedenken Sie, dass der Inhalt des `foreignObject` vom Viewer verarbeitet werden muss. Ein eigenständiger SVG-Viewer wird wahrscheinlich nicht in der Lage sein, HTML oder MathML darzustellen.

Da das `foreignObject` ein SVG-Element ist, können Sie, wie im Fall von `image`, alle SVG-Möglichkeiten damit nutzen, die dann auf den Inhalt angewendet werden.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking", "Web/SVG/Tutorials/SVG_from_scratch/Filter_effects") }}
