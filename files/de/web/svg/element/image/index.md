---
title: <image>
slug: Web/SVG/Element/image
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}

Das **`<image>`** SVG-Element fügt Bilder in SVG-Dokumente ein. Es kann {{glossary("Rasterbild")}}-Dateien oder andere SVG-Dateien anzeigen.

Die einzigen Bildformate, die SVG-Software unterstützen muss, sind {{glossary("JPEG")}}, {{glossary("PNG")}} und andere SVG-Dateien. Die Verhaltensweise von animierten {{glossary("GIF")}} ist undefiniert.

SVG-Dateien, die mit `<image>` angezeigt werden, werden [wie ein Bild behandelt](/de/docs/Web/SVG/SVG_as_an_Image): Externe Ressourcen werden nicht geladen, {{cssxref(":visited")}}-Stile [werden nicht angewendet](/de/docs/Web/CSS/Privacy_and_the_:visited_selector), und sie können nicht interaktiv sein. Um dynamische SVG-Elemente zu integrieren, verwenden Sie {{SVGElement("use")}} mit einer externen URL. Um SVG-Dateien einzuschließen und Skripte darin auszuführen, versuchen Sie {{HTMLElement("object")}} innerhalb von {{SVGElement("foreignObject")}}.

> [!NOTE]
> Die HTML-Spezifikation definiert `<image>` als Synonym für {{HTMLElement("img")}} beim Parsen von HTML. Dieses spezifische Element und sein Verhalten gelten nur innerhalb von SVG-Dokumenten oder inline SVGs.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("x")}}: Positioniert das Bild horizontal vom Ursprung.
- {{SVGAttr("y")}}: Positioniert das Bild vertikal vom Ursprung.
- {{SVGAttr("width")}}: Die Breite, in der das Bild gerendert wird. Anders als bei HTMLs `<img>` ist dieses Attribut erforderlich.
- {{SVGAttr("height")}}: Die Höhe, in der das Bild gerendert wird. Anders als bei HTMLs `<img>` ist dieses Attribut erforderlich.
- {{SVGAttr("href")}} und {{SVGAttr("xlink:href")}}{{deprecated_inline}}: Zeigt auf eine URL für die Bilddatei.
- {{SVGAttr("preserveAspectRatio")}}: Steuert, wie das Bild skaliert wird.
- {{SVGAttr("crossorigin")}}: Definiert den Wert des Berechtigungs-Flags für CORS-Anfragen.
- {{SVGAttr("decoding")}}: Gibt dem Browser einen Hinweis darauf, ob das Bild synchron oder asynchron dekodiert werden soll.

## DOM-Schnittstelle

`<image>` implementiert die {{domxref("SVGImageElement")}}-Schnittstelle.

## Beispiel

Grundlegendes Rendern eines PNG-Bildes in SVG:

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
