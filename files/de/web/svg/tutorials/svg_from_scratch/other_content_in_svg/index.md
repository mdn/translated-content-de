---
title: Andere Inhalte in SVG
slug: Web/SVG/Tutorials/SVG_from_scratch/Other_content_in_SVG
l10n:
  sourceCommit: a988fe7e721539634bad936da7259ffbad37d0e5
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking", "Web/SVG/Tutorials/SVG_from_scratch/Filter_effects") }}

Neben grafischen Grundelementen wie Rechtecken und Kreisen bietet SVG auch eine Reihe von Elementen, um andere Arten von Inhalten in Bildern einzubetten.

## Einbetten von Rastergrafiken

Ähnlich wie das `img`-Element in HTML hat SVG ein `image`-Element, das denselben Zweck erfüllt. Sie können es verwenden, um beliebige Raster- (und Vektor-) Bilder einzubetten. Die Spezifikation fordert Anwendungen auf, mindestens die Formate PNG, JPEG und SVG zu unterstützen.

Das eingebettete Bild wird zu einem normalen SVG-Element. Das bedeutet, dass Sie Clips, Masken, Filter, Rotationen und alle anderen SVG-Werkzeuge auf den Inhalt anwenden können:

```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
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

## Einbetten von beliebigem XML

Da SVG eine XML-Anwendung ist, können Sie natürlich _immer_ beliebiges XML überall in ein SVG-Dokument einbetten. Allerdings haben Sie dann keine Möglichkeit zu definieren, wie das umgebende SVG auf den Inhalt reagieren soll. Tatsächlich wird es in einem konformen Viewer überhaupt nicht reagieren, die Daten werden ausgelassen. Daher fügt die Spezifikation das {{ SVGElement("foreignObject") }}-Element zu SVG hinzu. Sein einziger Zweck besteht darin, ein Container für anderes Markup und ein Träger für SVG-Stilattribute zu sein (vor allem `width` und `height`, um den Raum zu definieren, den das Objekt einnehmen wird).

Das `foreignObject`-Element ist eine gute Möglichkeit, XHTML in SVG einzubetten. Wenn Sie längere Texte haben, ist das HTML-Layout geeigneter und komfortabler als das SVG `text`-Element. Ein weiterer oft zitierter Anwendungsfall ist das Einbetten von Formeln mit MathML. Für wissenschaftliche Anwendungen von SVG ist dies eine sehr gute Möglichkeit, beide Welten zu verbinden.

> [!NOTE]
> Bitte bedenken Sie, dass der Inhalt des `foreignObject` vom Viewer verarbeitbar sein muss. Ein eigenständiger SVG-Viewer wird wahrscheinlich nicht in der Lage sein, HTML oder MathML zu rendern.

Da das `foreignObject` ein SVG-Element ist, können Sie, wie im Fall von `image`, alle SVG-Vorteile damit verwenden, die dann auf den Inhalt angewendet werden.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking", "Web/SVG/Tutorials/SVG_from_scratch/Filter_effects") }}
