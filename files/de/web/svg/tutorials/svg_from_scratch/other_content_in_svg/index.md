---
title: Andere Inhalte in SVG
slug: Web/SVG/Tutorials/SVG_from_scratch/Other_content_in_SVG
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking", "Web/SVG/Tutorials/SVG_from_scratch/Filter_effects") }}

Neben grafischen Grundelementen wie Rechtecken und Kreisen bietet SVG auch eine Reihe von Elementen, um andere Arten von Inhalten in Bildern einzubetten.

### Einbetten von Rasterbildern

Ähnlich wie das `img`-Element in HTML hat SVG ein `image`-Element, um denselben Zweck zu erfüllen. Sie können es verwenden, um beliebige Raster- (und Vektor-) Bilder einzubetten. Die Spezifikation fordert, dass Anwendungen mindestens die Dateiformate PNG, JPEG und SVG unterstützen.

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
    href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/image/mdn_logo_only_color.png" />
</svg>
```

{{ EmbedLiveSample('Embedding_raster_images','220','240') }}

### Einbetten beliebiger XML-Daten

Da SVG eine XML-Anwendung ist, können Sie natürlich _immer_ beliebige XML-Daten überall in einem SVG-Dokument einbetten. Allerdings haben Sie dann keine Möglichkeit, zu definieren, wie das umgebende SVG auf den Inhalt reagieren soll. Tatsächlich wird es in einem konformen Viewer überhaupt nicht reagieren, die Daten werden ausgelassen. Daher fügt die Spezifikation das Element {{ SVGElement("foreignObject") }} zu SVG hinzu. Sein einziger Zweck ist es, als Container für anderes Markup zu dienen und SVG-Stilattributen (besonders `width` und `height` zur Definition des Raums, den das Objekt einnehmen wird) zu tragen.

Das `foreignObject`-Element ist eine gute Möglichkeit, XHTML in SVG einzubetten. Wenn Sie längere Texte haben, ist das HTML-Layout geeigneter und komfortabler als das SVG-`text`-Element. Ein weiteres oft zitiertes Anwendungsbeispiel ist das Einbetten von Formeln mit MathML. Für wissenschaftliche Anwendungen von SVG ist dies eine sehr gute Möglichkeit, beide Welten zu vereinen.

> [!NOTE]
> Bitte beachten Sie, dass der Inhalt des `foreignObject` vom Viewer verarbeitbar sein muss. Ein eigenständiger SVG-Viewer wird wahrscheinlich nicht in der Lage sein, HTML oder MathML darzustellen.

Da das `foreignObject` ein SVG-Element ist, können Sie, wie im Fall von `image`, jegliche SVG-Besonderheiten darauf anwenden, die dann auf seinen Inhalt übertragen werden.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking", "Web/SVG/Tutorials/SVG_from_scratch/Filter_effects") }}
