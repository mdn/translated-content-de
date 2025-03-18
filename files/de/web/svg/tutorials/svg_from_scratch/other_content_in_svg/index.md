---
title: Andere Inhalte in SVG
slug: Web/SVG/Tutorials/SVG_from_scratch/Other_content_in_SVG
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking", "Web/SVG/Tutorials/SVG_from_scratch/Filter_effects") }}

Neben grafischen Grundelementen wie Rechtecken und Kreisen bietet SVG auch eine Reihe von Elementen an, um andere Arten von Inhalten in Bildern einzubetten.

### Einbettung von Rasterbildern

Ähnlich wie das `img`-Element in HTML hat SVG ein `image`-Element, das denselben Zweck erfüllt. Sie können es verwenden, um beliebige Raster- (und Vektor-)Bilder einzubinden. Die Spezifikation verlangt von Anwendungen, dass mindestens PNG-, JPEG- und SVG-Dateiformate unterstützt werden.

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
    href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/image/mdn_logo_only_color.png" />
</svg>
```

{{ EmbedLiveSample('Embedding_raster_images','220','240') }}

### Einbettung beliebiger XML-Daten

Da SVG eine XML-Anwendung ist, können Sie natürlich _immer_ beliebige XML-Daten irgendwo in ein SVG-Dokument einbetten. Dann haben Sie jedoch keine Möglichkeit, zu definieren, wie das umgebende SVG auf den Inhalt reagieren soll. Tatsächlich wird es in einem konformen Betrachter überhaupt nicht reagieren, die Daten werden ignoriert. Daher fügt die Spezifikation das `{{ SVGElement("foreignObject") }}`-Element zu SVG hinzu. Seine einzige Funktion ist es, als Container für andere Markup-Daten und als Träger für SVG-Stilattributen zu fungieren (vor allem `width` und `height`, um den Raum zu definieren, den das Objekt einnimmt).

Das `foreignObject`-Element ist eine gute Möglichkeit, XHTML in SVG einzubetten. Wenn Sie längere Texte haben, ist das HTML-Layout geeigneter und komfortabler als das SVG-`text`-Element. Ein weiterer häufig zitierter Anwendungsfall ist die Einbettung von Formeln mit MathML. Für wissenschaftliche Anwendungen von SVG ist dies eine sehr gute Möglichkeit, beide Welten zu verbinden.

> [!NOTE]
> Bitte beachten Sie, dass der Inhalt des `foreignObject` vom Betrachter verarbeitbar sein muss. Ein eigenständiger SVG-Viewer wird wahrscheinlich nicht in der Lage sein, HTML oder MathML zu rendern.

Da das `foreignObject` ein SVG-Element ist, können Sie, wie im Fall von `image`, alle SVG-Vorteile damit verwenden, die dann auf seinen Inhalt angewendet werden.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking", "Web/SVG/Tutorials/SVG_from_scratch/Filter_effects") }}
