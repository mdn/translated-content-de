---
title: Andere Inhalte in SVG
slug: Web/SVG/Tutorial/Other_content_in_SVG
l10n:
  sourceCommit: 1952d89acf75a2a9448cab9d323aa320281cd746
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Clipping_and_masking", "Web/SVG/Tutorial/Filter_effects") }}

Neben Grafikprimitiven wie Rechtecken und Kreisen bietet SVG auch eine Reihe von Elementen, um andere Arten von Inhalten in Bilder einzubetten.

### Einbetten von Rasterbildern

Ähnlich dem `img`-Element in HTML hat SVG ein `image`-Element, das denselben Zweck erfüllt. Sie können es verwenden, um beliebige Raster- (und Vektor-) Bilder einzubetten. Die Spezifikation verlangt von Anwendungen, dass sie mindestens die Formate PNG, JPEG und SVG unterstützen.

Das eingebettete Bild wird zu einem normalen SVG-Element. Dies bedeutet, dass Sie Clips, Masken, Filter, Drehungen und alle anderen SVG-Werkzeuge auf den Inhalt anwenden können:

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

### Einbetten beliebiger XML-Daten

Da SVG eine XML-Anwendung ist, können Sie _immer_ beliebige XML-Daten an jeder Stelle in ein SVG-Dokument einbetten. Aber dann haben Sie keine Möglichkeit zu definieren, wie das umgebende SVG auf den Inhalt reagieren soll. Tatsächlich wird es in einem konformen Betrachter überhaupt nicht reagieren, da die Daten ignoriert werden. Deshalb fügt die Spezifikation das `{{ SVGElement("foreignObject") }}`-Element zu SVG hinzu. Seine einzige Aufgabe besteht darin, als Container für andere Markup-Daten zu dienen und als Träger für SVG-Stilattributen (vor allem `width` und `height`, um den Platz zu definieren, den das Objekt einnehmen wird).

Das `foreignObject`-Element ist eine gute Möglichkeit, XHTML in SVG einzubetten. Wenn Sie längere Texte haben, ist das HTML-Layout geeigneter und komfortabler als das SVG-`text`-Element. Ein weiteres oft zitiertes Anwendungsbeispiel ist das Einbetten von Formeln mit MathML. Für wissenschaftliche Anwendungen von SVG ist dies eine sehr gute Möglichkeit, beide Welten zu verbinden.

> [!NOTE]
> Bitte beachten Sie, dass der Inhalt des `foreignObject` vom Betrachter verarbeitet werden muss. Ein eigenständiger SVG-Betrachter wird wahrscheinlich nicht in der Lage sein, HTML oder MathML zu rendern.

Da das `foreignObject` ein SVG-Element ist, können Sie, wie im Fall von `image`, alle SVG-Eigenschaften damit verwenden, die dann auf seinen Inhalt angewendet werden.

{{ PreviousNext("Web/SVG/Tutorial/Clipping_and_masking", "Web/SVG/Tutorial/Filter_effects") }}
