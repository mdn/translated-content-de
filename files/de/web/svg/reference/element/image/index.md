---
title: <image>
slug: Web/SVG/Reference/Element/image
l10n:
  sourceCommit: e14e73ce1a40a41ff096ead9c364e057f815adff
---

Das **`<image>`**-Element [SVG](/de/docs/Web/SVG) integriert Bilder in SVG-Dokumente. Es kann {{Glossary("raster_image", "Rasterbild")}}-Dateien oder andere SVG-Dateien anzeigen.

Die einzigen Bildformate, die SVG-Software unterstützen muss, sind {{Glossary("JPEG", "JPEG")}}, {{Glossary("PNG", "PNG")}} und andere SVG-Dateien. Das Verhalten von animierten {{Glossary("GIF", "GIF")}}-Dateien ist nicht definiert.

SVG-Dateien, die mit `<image>` angezeigt werden, werden [wie ein Bild behandelt](/de/docs/Web/SVG/Guides/SVG_as_an_image): Externe Ressourcen werden nicht geladen, {{cssxref(":visited")}}-Stile [werden nicht angewendet](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector), und sie können nicht interaktiv sein. Um dynamische SVG-Elemente einzubinden, versuchen Sie es mit {{SVGElement("use")}} mit einer externen URL. Um SVG-Dateien einzubinden und Skripte darin auszuführen, versuchen Sie es mit {{HTMLElement("object")}} innerhalb von {{SVGElement("foreignObject")}}.

> [!NOTE]
> Die HTML-Spezifikation definiert `<image>` als ein Synonym für {{HTMLElement("img")}}, wenn HTML geparst wird. Dieses spezielle Element und sein Verhalten gelten nur innerhalb von SVG-Dokumenten oder inline SVGs.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("x")}}
  - : Positioniert das Bild horizontal vom Ursprung aus.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Positioniert das Bild vertikal vom Ursprung aus.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Die Breite, mit der das Bild gerendert wird. Im Gegensatz zu HTML's `<img>` ist dieses Attribut erforderlich.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("height")}}
  - : Die Höhe, mit der das Bild gerendert wird. Im Gegensatz zu HTML's `<img>` ist dieses Attribut erforderlich.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("href")}}
  - : Zeigt auf eine URL für die Bilddatei.
    _Wertetyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)**; _Standardwert_: _none_; _Animierbar_: **nein**
- {{SVGAttr("preserveAspectRatio")}}
  - : Steuert, wie das Bild skaliert wird.
    _Wertetyp_: (`none` | `xMinYMin` | `xMidYMin` | `xMaxYMin` | `xMinYMid` | `xMidYMid` | `xMaxYMid` | `xMinYMax` | `xMidYMax` | `xMaxYMax`) (`meet` | `slice`)?; _Standardwert_: `xMidYMid meet`; _Animierbar_: **ja**
- {{SVGAttr("crossorigin")}}
  - : Definiert den Wert des Credential-Flags für CORS-Anfragen.
    _Wertetyp_: [ `anonymous` | `use-credentials` ]?; _Standardwert_: None; _Animierbar_: **ja**
- {{SVGAttr("decoding")}}
  - : Gibt dem Browser einen Hinweis, ob die Bilddekodierung synchron oder asynchron durchgeführt werden soll.
    _Wertetyp_: `async | sync | auto`; _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("fetchpriority")}}
  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen eines externen Bildes.
    Zulässige Werte:
    - `high`
      - : Ruft das externe Bild mit hoher Priorität im Vergleich zu anderen externen Ressourcen ab.
    - `low`
      - : Ruft das externe Bild mit niedriger Priorität im Vergleich zu anderen externen Ressourcen ab.
    - `auto`
      - : Legt keine Präferenz für die Abrufpriorität fest.
        Wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.
        Dies ist der Standard.
- {{SVGAttr("xlink:href")}}{{deprecated_inline}}
  - : Zeigt auf eine URL für die Bilddatei.
    _Wertetyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)**; _Standardwert_: _none_; _Animierbar_: **nein**

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)-Schnittstelle.

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

## Siehe auch

- {{SVGAttr("fetchpriority")}}-Attribut
