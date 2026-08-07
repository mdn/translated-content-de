---
title: Andere Inhalte in SVG
slug: Web/SVG/Tutorials/SVG_from_scratch/Other_content_in_SVG
l10n:
  sourceCommit: 8d0c8728f49f2a0577ca17910f2149d6dd36b37e
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking", "Web/SVG/Tutorials/SVG_from_scratch/Filter_effects") }}

Neben grafischen Primitiven wie Rechtecken und Kreisen bietet SVG auch eine Reihe von Elementen, um andere Arten von Inhalten in Bildern einzubetten.

## Einbetten von Rasterbildern

Ähnlich wie das `img`-Element in HTML hat SVG ein `image`-Element, das denselben Zweck erfüllt. Sie können es verwenden, um beliebige Raster- (und Vektor-) Bilder einzubetten. Die Spezifikation fordert, dass Anwendungen mindestens die Dateiformate PNG, JPEG und SVG unterstützen.

Das eingebettete Bild wird zu einem normalen SVG-Element. Das bedeutet, dass Sie Clips, Masken, Filter, Rotationen und alle anderen SVG-Werkzeuge auf den Inhalt anwenden können:

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
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

Da SVG eine XML-Anwendung ist, können Sie natürlich _immer_ beliebiges XML überall in ein SVG-Dokument einbetten. Aber dann haben Sie keine Möglichkeit, zu definieren, wie das umgebende SVG auf den Inhalt reagieren soll. Tatsächlich wird es in einem konformen Viewer überhaupt nicht reagieren, die Daten werden ignoriert. Daher fügt die Spezifikation das {{ SVGElement("foreignObject") }} Element zu SVG hinzu. Sein einziger Zweck ist es, ein Container für anderes Markup und ein Träger für SVG-Stilattributen (vor allem `width` und `height`, um den Platz, den das Objekt einnimmt, zu definieren) zu sein.

Das `foreignObject`-Element ist eine gute Möglichkeit, XHTML in SVG einzubetten. Wenn Sie längere Texte haben, ist das HTML-Layout geeigneter und komfortabler als das SVG `text`-Element. Ein weiteres oft zitiertes Anwendungsbeispiel ist das Einbetten von Formeln mit MathML. Für wissenschaftliche Anwendungen von SVG ist dies eine sehr gute Möglichkeit, beide Welten zu verbinden.

> [!NOTE]
> Bitte beachten Sie, dass der Inhalt des `foreignObject` vom Viewer verarbeitet werden muss. Ein eigenständiger SVG-Viewer wird wahrscheinlich nicht in der Lage sein, HTML oder MathML darzustellen.

Da das `foreignObject` ein SVG-Element ist, können Sie, wie im Fall von `image`, alle SVG-Möglichkeiten damit nutzen, die dann auf dessen Inhalt angewendet werden.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking", "Web/SVG/Tutorials/SVG_from_scratch/Filter_effects") }}
