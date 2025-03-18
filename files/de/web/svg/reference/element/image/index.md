---
title: <image>
slug: Web/SVG/Reference/Element/image
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`<image>`**-[SVG](/de/docs/Web/SVG)-Element inkludiert Bilder innerhalb von SVG-Dokumenten. Es kann {{Glossary("raster_image", "Rasterbild")}}-Dateien oder andere SVG-Dateien anzeigen.

Die einzigen Bildformate, die SVG-Software unterstützen muss, sind {{Glossary("JPEG", "JPEG")}}, {{Glossary("PNG", "PNG")}} und andere SVG-Dateien. Das Verhalten von animierten {{Glossary("GIF", "GIFs")}} ist undefiniert.

SVG-Dateien, die mit `<image>` angezeigt werden, werden [wie ein Bild behandelt](/de/docs/Web/SVG/Guides/SVG_as_an_image): Externe Ressourcen werden nicht geladen, {{cssxref(":visited")}}-Stile [werden nicht angewendet](/de/docs/Web/CSS/Privacy_and_the_:visited_selector), und sie können nicht interaktiv sein. Um dynamische SVG-Elemente einzuschließen, versuchen Sie {{SVGElement("use")}} mit einer externen URL. Um SVG-Dateien einzubinden und Skripte darin auszuführen, versuchen Sie {{HTMLElement("object")}} innerhalb von {{SVGElement("foreignObject")}}.

> [!NOTE]
> Die HTML-Spezifikation definiert `<image>` als Synonym für {{HTMLElement("img")}}, wenn HTML geparst wird. Dieses spezielle Element und sein Verhalten gelten nur innerhalb von SVG-Dokumenten oder Inline-SVGs.

## Nutzungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("x")}}
  - : Positioniert das Bild horizontal vom Ursprung.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Positioniert das Bild vertikal vom Ursprung.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Die Breite, in der das Bild gerendert wird. Im Gegensatz zu HTML's `<img>` ist dieses Attribut erforderlich.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage) ; _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("height")}}
  - : Die Höhe, in der das Bild gerendert wird. Im Gegensatz zu HTML's `<img>` ist dieses Attribut erforderlich.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage) ; _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("href")}}
  - : Zeigt auf eine URL für die Bilddatei.
    _Werttyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)** ; _Standardwert_: _none_; _Animierbar_: **nein**
- {{SVGAttr("preserveAspectRatio")}}
  - : Bestimmt, wie das Bild skaliert wird.
    _Werttyp_: (`none`| `xMinYMin`| `xMidYMin`| `xMaxYMin`| `xMinYMid`| `xMidYMid`| `xMaxYMid`| `xMinYMax`| `xMidYMax`| `xMaxYMax`) (`meet`|`slice`)? ; _Standardwert_: `xMidYMid meet`; _Animierbar_: **ja**
- {{SVGAttr("crossorigin")}}
  - : Definiert den Wert des Berechtigungs-Flags für CORS-Anfragen.
    _Werttyp_: [ anonym | use-credentials ]? ; _Standardwert_: None; _Animierbar_: **ja**
- {{SVGAttr("decoding")}}
  - : Gibt dem Browser einen Hinweis darauf, ob die Bilddekodierung synchron oder asynchron durchgeführt werden soll.
    _Werttyp_: `async | sync | auto` ; _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}}{{deprecated_inline}}
  - : Zeigt auf eine URL für die Bilddatei.
    _Werttyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)** ; _Standardwert_: _none_; _Animierbar_: **nein**

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)-Schnittstelle.

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
