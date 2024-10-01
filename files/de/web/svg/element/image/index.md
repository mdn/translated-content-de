---
title: <image>
slug: Web/SVG/Element/image
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}

Das **`<image>`** SVG-Element bindet Bilder in SVG-Dokumente ein. Es kann {{Glossary("raster_image", "Rasterbild")}}-Dateien oder andere SVG-Dateien anzeigen.

Die einzigen Bildformate, die SVG-Software unterstützen muss, sind {{Glossary("JPEG", "JPEG")}}, {{Glossary("PNG", "PNG")}} und andere SVG-Dateien. Das Verhalten von animierten {{Glossary("GIF", "GIF")}}-Dateien ist nicht definiert.

SVG-Dateien, die mit `<image>` angezeigt werden, werden [wie ein Bild behandelt](/de/docs/Web/SVG/SVG_as_an_Image): Externe Ressourcen werden nicht geladen, {{cssxref(":visited")}}-Stile [werden nicht angewendet](/de/docs/Web/CSS/Privacy_and_the_:visited_selector) und sie können nicht interaktiv sein. Um dynamische SVG-Elemente einzubinden, versuchen Sie es mit {{SVGElement("use")}} unter Verwendung einer externen URL. Um SVG-Dateien einzubinden und Skripte darin auszuführen, versuchen Sie {{HTMLElement("object")}} innerhalb von {{SVGElement("foreignObject")}}.

> [!NOTE]
> Die HTML-Spezifikation definiert `<image>` als Synonym für {{HTMLElement("img")}} beim Parsen von HTML. Dieses spezifische Element und sein Verhalten gelten nur innerhalb von SVG-Dokumenten oder eingebetteten SVGs.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("x")}}: Positioniert das Bild horizontal vom Ursprung aus.
- {{SVGAttr("y")}}: Positioniert das Bild vertikal vom Ursprung aus.
- {{SVGAttr("width")}}: Die Breite, in der das Bild gerendert wird. Im Gegensatz zu HTMLs `<img>` ist dieses Attribut erforderlich.
- {{SVGAttr("height")}}: Die Höhe, in der das Bild gerendert wird. Im Gegensatz zu HTMLs `<img>` ist dieses Attribut erforderlich.
- {{SVGAttr("href")}} und {{SVGAttr("xlink:href")}}{{deprecated_inline}}: Verweist auf eine URL für die Bilddatei.
- {{SVGAttr("preserveAspectRatio")}}: Bestimmt, wie das Bild skaliert wird.
- {{SVGAttr("crossorigin")}}: Definiert den Wert des Credentials-Flags für CORS-Anfragen.
- {{SVGAttr("decoding")}}: Gibt einen Hinweis an den Browser, ob die Bilddecodierung synchron oder asynchron erfolgen soll.

## DOM-Interface

`<image>` implementiert das [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)-Interface.

## Beispiel

Grundlegende Darstellung eines PNG-Bildes in SVG:

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <image href="mdn_logo_only_color.png" height="200" width="200" />
</svg>
```

### Ergebnis

{{EmbedLiveSample("Example", 250, 260)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
