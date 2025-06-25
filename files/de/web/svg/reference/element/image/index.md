---
title: <image>
slug: Web/SVG/Reference/Element/image
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

Das **`<image>`** [SVG](/de/docs/Web/SVG)-Element enthält Bilder innerhalb von SVG-Dokumenten. Es kann {{Glossary("raster_image", "Rasterbild")}}-Dateien oder andere SVG-Dateien anzeigen.

Die einzigen Bildformate, die SVG-Software unterstützen muss, sind {{Glossary("JPEG", "JPEG")}}, {{Glossary("PNG", "PNG")}} und andere SVG-Dateien. Das Verhalten von animierten {{Glossary("GIF", "GIF")}} ist undefiniert.

SVG-Dateien, die mit `<image>` angezeigt werden, werden [als Bild behandelt](/de/docs/Web/SVG/Guides/SVG_as_an_image): Externe Ressourcen werden nicht geladen, {{cssxref(":visited")}}-Stile [werden nicht angewendet](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector), und sie können nicht interaktiv sein. Um dynamische SVG-Elemente einzuschließen, versuchen Sie {{SVGElement("use")}} mit einer externen URL. Um SVG-Dateien einzubinden und Skripte darin auszuführen, versuchen Sie {{HTMLElement("object")}} innerhalb von {{SVGElement("foreignObject")}}.

> [!NOTE]
> Die HTML-Spezifikation definiert `<image>` als Synonym für {{HTMLElement("img")}} beim Parsieren von HTML. Dieses spezifische Element und sein Verhalten gelten nur innerhalb von SVG-Dokumenten oder Inline-SVGs.

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
  - : Definiert den Wert des Credentials-Flags für CORS-Anfragen.
    _Wertetyp_: [ `anonymous` | `use-credentials` ]?; _Standardwert_: Keine; _Animierbar_: **ja**
- {{SVGAttr("decoding")}}
  - : Gibt dem Browser einen Hinweis darauf, ob die Bilddecodierung synchron oder asynchron durchgeführt werden soll.
    _Wertetyp_: `async | sync | auto`; _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("fetchpriority")}} {{experimental_inline}} {{non-standard_inline}}
  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen eines externen Bildes.
    Erlaubte Werte:
    - `high`
      - : Ruft das externe Bild mit hoher Priorität im Vergleich zu anderen externen Ressourcen ab.
    - `low`
      - : Ruft das externe Bild mit niedriger Priorität im Vergleich zu anderen externen Ressourcen ab.
    - `auto`
      - : Legt keine Präferenz für die Abrufpriorität fest.
        Wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.
        Dies ist der Standardwert.
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

- {{SVGAttr("fetchpriority")}} Attribut
