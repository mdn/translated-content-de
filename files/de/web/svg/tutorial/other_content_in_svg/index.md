---
title: Andere Inhalte in SVG
slug: Web/SVG/Tutorial/Other_content_in_SVG
l10n:
  sourceCommit: 1952d89acf75a2a9448cab9d323aa320281cd746
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Clipping_and_masking", "Web/SVG/Tutorial/Filter_effects") }}

Neben grafischen Grundformen wie Rechtecken und Kreisen bietet SVG auch eine Reihe von Elementen, um andere Arten von Inhalten in Bildern einzubetten.

### Einbetten von Rasterbildern

Ähnlich wie das `img`-Element in HTML hat SVG ein `image`-Element, das denselben Zweck erfüllt. Sie können es verwenden, um beliebige Raster- (und Vektor-)Bilder einzubetten. Die Spezifikation fordert Anwendungen auf, mindestens PNG-, JPEG- und SVG-Dateiformate zu unterstützen.

Das eingebettete Bild wird zu einem normalen SVG-Element. Das bedeutet, dass Sie Clips, Masken, Filter, Drehungen und alle anderen Werkzeuge von SVG auf den Inhalt anwenden können:

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
    href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/image/mdn_logo_only_color.png" />
</svg>
```

{{ EmbedLiveSample('Embedding_raster_images','220','240') }}

### Einbetten beliebigen XML

Da SVG eine XML-Anwendung ist, können Sie natürlich _immer_ beliebiges XML überall in ein SVG-Dokument einbetten. Dann haben Sie jedoch keine Möglichkeit zu definieren, wie das umgebende SVG auf den Inhalt reagieren soll. Tatsächlich wird es in einem konformen Viewer überhaupt nicht darauf reagieren, die Daten werden weggelassen. Daher fügt die Spezifikation das `{{ SVGElement("foreignObject") }}`-Element zu SVG hinzu. Sein einziger Zweck ist es, ein Container für anderes Markup zu sein und ein Träger für SVG-Stilattributen (insbesondere `width` und `height`, um den Platz zu definieren, den das Objekt einnehmen wird).

Das `foreignObject`-Element ist eine gute Möglichkeit, XHTML in SVG einzubetten. Wenn Sie längere Texte haben, ist das HTML-Layout geeigneter und komfortabler als das SVG `text`-Element. Ein weiteres häufig zitiertes Anwendungsbeispiel ist das Einbetten von Formeln mit MathML. Für wissenschaftliche Anwendungen von SVG ist dies eine sehr gute Möglichkeit, beide Welten zu verbinden.

> [!NOTE]
> Bitte beachten Sie, dass der Inhalt des `foreignObject` von dem Viewer verarbeitbar sein muss. Ein eigenständiger SVG-Viewer wird wahrscheinlich nicht in der Lage sein, HTML oder MathML zu rendern.

Da das `foreignObject` ein SVG-Element ist, können Sie, wie im Fall von `image`, jegliche SVG-Vorteile damit verwenden, die dann auf seinen Inhalt angewendet werden.

{{ PreviousNext("Web/SVG/Tutorial/Clipping_and_masking", "Web/SVG/Tutorial/Filter_effects") }}
