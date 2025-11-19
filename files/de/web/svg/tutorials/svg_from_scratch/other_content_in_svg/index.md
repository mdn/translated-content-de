---
title: Andere Inhalte in SVG
slug: Web/SVG/Tutorials/SVG_from_scratch/Other_content_in_SVG
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking", "Web/SVG/Tutorials/SVG_from_scratch/Filter_effects") }}

Neben grafischen Elementen wie Rechtecken und Kreisen bietet SVG auch eine Reihe von Elementen, um andere Arten von Inhalten in Bilder einzubetten.

## Einbetten von Rasterbildern

Ähnlich wie das `img`-Element in HTML hat SVG ein `image`-Element, das denselben Zweck erfüllt. Sie können es verwenden, um beliebige Raster- (und Vektor-)Bilder einzubetten. Die Spezifikation fordert, dass Anwendungen mindestens die Formate PNG, JPEG und SVG unterstützen.

Das eingebettete Bild wird zu einem normalen SVG-Element. Das bedeutet, dass Sie Clips, Masken, Filter, Rotationen und alle anderen SVG-Werkzeuge auf den Inhalt anwenden können:

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

## Einbetten von beliebigem XML

Da SVG eine XML-Anwendung ist, können Sie natürlich _immer_ beliebiges XML irgendwo in einem SVG-Dokument einbetten. Aber dann gibt es keine Möglichkeit zu definieren, wie das umgebende SVG auf den Inhalt reagieren soll. Tatsächlich wird in einem konformen Betrachter keine Reaktion erfolgen, die Daten werden weggelassen. Daher ergänzt die Spezifikation das Element {{ SVGElement("foreignObject") }} in SVG. Sein einziger Zweck ist es, als Container für anderes Markup und als Träger für SVG-Stilattributen zu dienen (am prominentesten `width` und `height`, um den Raum zu definieren, den das Objekt einnehmen wird).

Das `foreignObject`-Element ist eine gute Möglichkeit, XHTML in SVG einzubetten. Wenn Sie längere Texte haben, ist das HTML-Layout geeigneter und komfortabler als das SVG `text`-Element. Ein weiteres häufig genanntes Anwendungsbeispiel ist das Einbetten von Formeln mit MathML. Für wissenschaftliche Anwendungen von SVG ist dies eine sehr gute Möglichkeit, beide Welten zu vereinen.

> [!NOTE]
> Bitte bedenken Sie, dass der Inhalt des `foreignObject` vom Betrachter verarbeitet werden muss. Ein eigenständiger SVG-Viewer wird wahrscheinlich nicht in der Lage sein, HTML oder MathML darzustellen.

Da das `foreignObject` ein SVG-Element ist, können Sie, wie im Fall von `image`, alle SVG-Funktionalitäten damit verwenden, die dann auf den Inhalt angewendet werden.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking", "Web/SVG/Tutorials/SVG_from_scratch/Filter_effects") }}
