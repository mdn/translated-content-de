---
title: <image>
slug: Web/SVG/Element/image
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}

Das SVG-Element **`<image>`** bindet Bilder in SVG-Dokumente ein. Es kann [Rasterbild](/de/docs/Glossary/raster_image)-Dateien oder andere SVG-Dateien anzeigen.

Die einzigen Bildformate, die SVG-Software unterstützen muss, sind [JPEG](/de/docs/Glossary/JPEG), [PNG](/de/docs/Glossary/PNG) und andere SVG-Dateien. Das Verhalten von animierten [GIF](/de/docs/Glossary/GIF) ist nicht definiert.

SVG-Dateien, die mit `<image>` angezeigt werden, werden [als Bild behandelt](/de/docs/Web/SVG/SVG_as_an_Image): Externe Ressourcen werden nicht geladen, {{cssxref(":visited")}}-Stile [werden nicht angewendet](/de/docs/Web/CSS/Privacy_and_the_:visited_selector), und sie können nicht interaktiv sein. Um dynamische SVG-Elemente einzufügen, versuchen Sie es mit {{SVGElement("use")}} mit einer externen URL. Um SVG-Dateien einzubinden und Skripte darin auszuführen, verwenden Sie {{HTMLElement("object")}} innerhalb von {{SVGElement("foreignObject")}}.

> [!NOTE]
> Die HTML-Spezifikation definiert `<image>` als Synonym für {{HTMLElement("img")}}, während HTML geparst wird. Dieses spezielle Element und sein Verhalten gelten nur innerhalb von SVG-Dokumenten oder eingebetteten SVGs.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("x")}}: Positioniert das Bild horizontal vom Ursprung.
- {{SVGAttr("y")}}: Positioniert das Bild vertikal vom Ursprung.
- {{SVGAttr("width")}}: Die Breite, in der das Bild gerendert wird. Im Gegensatz zu HTMLs `<img>` ist dieses Attribut erforderlich.
- {{SVGAttr("height")}}: Die Höhe, in der das Bild gerendert wird. Im Gegensatz zu HTMLs `<img>` ist dieses Attribut erforderlich.
- {{SVGAttr("href")}} und {{SVGAttr("xlink:href")}}{{deprecated_inline}}: Weist auf eine URL der Bilddatei hin.
- {{SVGAttr("preserveAspectRatio")}}: Bestimmt, wie das Bild skaliert wird.
- {{SVGAttr("crossorigin")}}: Definiert den Wert des Credentials-Flags für CORS-Anfragen.
- {{SVGAttr("decoding")}}: Gibt dem Browser einen Hinweis, ob die Bilddecodierung synchron oder asynchron durchgeführt werden soll.

## DOM-Schnittstelle

`<image>` implementiert die Schnittstelle [`SVGImageElement`](/de/docs/Web/API/SVGImageElement).

## Beispiel

Grundlegendes Rendering eines PNG-Bildes in SVG:

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
