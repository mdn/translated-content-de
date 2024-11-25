---
title: <image>
slug: Web/SVG/Element/image
l10n:
  sourceCommit: da99ca19ae62059f81dbee3f7b4919de784f3510
---

{{SVGRef}}

Das **`<image>`** [SVG](/de/docs/Web/SVG)-Element fügt Bilder in SVG-Dokumente ein. Es kann {{Glossary("raster_image", "Rasterbild")}}-Dateien oder andere SVG-Dateien anzeigen.

Die einzigen Bildformate, die SVG-Software unterstützen muss, sind {{Glossary("JPEG", "JPEG")}}, {{Glossary("PNG", "PNG")}} und andere SVG-Dateien. Das Verhalten von animierten {{Glossary("GIF", "GIF")}} ist nicht definiert.

SVG-Dateien, die mit `<image>` angezeigt werden, werden [als Bild behandelt](/de/docs/Web/SVG/SVG_as_an_Image): Externe Ressourcen werden nicht geladen, {{cssxref(":visited")}}-Stile [werden nicht angewendet](/de/docs/Web/CSS/Privacy_and_the_:visited_selector), und sie können nicht interaktiv sein. Um dynamische SVG-Elemente einzubinden, versuchen Sie {{SVGElement("use")}} mit einer externen URL. Um SVG-Dateien einzubinden und Skripte in ihnen auszuführen, versuchen Sie {{HTMLElement("object")}} innerhalb von {{SVGElement("foreignObject")}}.

> [!NOTE]
> Die HTML-Spezifikation definiert `<image>` als Synonym für {{HTMLElement("img")}}, wenn HTML geparst wird. Dieses spezifische Element und sein Verhalten gelten nur innerhalb von SVG-Dokumenten oder eingebetteten SVGs.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("x")}}: Positioniert das Bild horizontal vom Ursprung aus.
- {{SVGAttr("y")}}: Positioniert das Bild vertikal vom Ursprung aus.
- {{SVGAttr("width")}}: Die Breite, in der das Bild gerendert wird. Im Gegensatz zu HTMLs `<img>` ist dieses Attribut erforderlich.
- {{SVGAttr("height")}}: Die Höhe, in der das Bild gerendert wird. Im Gegensatz zu HTMLs `<img>` ist dieses Attribut erforderlich.
- {{SVGAttr("href")}} und {{SVGAttr("xlink:href")}}{{deprecated_inline}}: Zeigt auf eine URL für die Bilddatei.
- {{SVGAttr("preserveAspectRatio")}}: Kontrolliert, wie das Bild skaliert wird.
- {{SVGAttr("crossorigin")}}: Definiert den Wert des Credentials-Flags für CORS-Anfragen.
- {{SVGAttr("decoding")}}: Gibt dem Browser einen Hinweis darauf, ob die Bilddekodierung synchron oder asynchron erfolgen soll.

## DOM-Schnittstelle

`<image>` implementiert die [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)-Schnittstelle.

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
