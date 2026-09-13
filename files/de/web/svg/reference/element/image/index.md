---
title: <image>
slug: Web/SVG/Reference/Element/image
l10n:
  sourceCommit: 27bb49e1849433e05c964c8a645c448f184380ce
---

Das **`<image>`** [SVG](/de/docs/Web/SVG)-Element schließt Bilder in SVG-Dokumenten ein. Es kann {{Glossary("raster_image", "Rasterbild")}}-Dateien oder andere SVG-Dateien anzeigen.

Die einzigen Bildformate, die SVG-Software unterstützen muss, sind {{Glossary("JPEG", "JPEG")}}, {{Glossary("PNG", "PNG")}} und andere SVG-Dateien. Das Verhalten von animierten {{Glossary("GIF", "GIFs")}} ist nicht definiert.

SVG-Dateien, die mit `<image>` angezeigt werden, werden [wie ein Bild behandelt](/de/docs/Web/SVG/Guides/SVG_as_an_image): Externe Ressourcen werden nicht geladen, {{cssxref(":visited")}}-Stile [werden nicht angewendet](/de/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited), und sie können nicht interaktiv sein. Um dynamische SVG-Elemente einzuschließen, versuchen Sie {{SVGElement("use")}} mit einer externen URL. Um SVG-Dateien einzuschließen und Skripte darin auszuführen, versuchen Sie {{HTMLElement("object")}} innerhalb von {{SVGElement("foreignObject")}}.

> [!NOTE]
> Die HTML-Spezifikation definiert `<image>` als Synonym für {{HTMLElement("img")}}, während HTML geparst wird. Dieses spezifische Element und sein Verhalten gelten nur innerhalb von SVG-Dokumenten oder Inline-SVGs.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("x")}}
  - : Positioniert das Bild horizontal vom Ursprung.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Positioniert das Bild vertikal vom Ursprung.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Die Breite, bei der das Bild gerendert wird. Anders als beim HTML-`<img>` ist dieses Attribut erforderlich.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("height")}}
  - : Die Höhe, bei der das Bild gerendert wird. Anders als beim HTML-`<img>` ist dieses Attribut erforderlich.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("href")}}
  - : Zeigt auf eine URL für die Bilddatei.
    _Wertetyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)**; _Standardwert_: _keiner_; _Animierbar_: **nein**
- {{SVGAttr("preserveAspectRatio")}}
  - : Steuert, wie das Bild skaliert wird.
    _Wertetyp_: (`none` | `xMinYMin` | `xMidYMin` | `xMaxYMin` | `xMinYMid` | `xMidYMid` | `xMaxYMid` | `xMinYMax` | `xMidYMax` | `xMaxYMax`) (`meet` | `slice`)?; _Standardwert_: `xMidYMid meet`; _Animierbar_: **ja**
- {{SVGAttr("crossorigin")}}
  - : Definiert den Wert des Berechtigungsflags für CORS-Anfragen.
    _Wertetyp_: [ `anonymous` | `use-credentials` ]?; _Standardwert_: Keine; _Animierbar_: **ja**
- {{SVGAttr("decoding")}}
  - : Gibt dem Browser einen Hinweis darauf, ob die Bilddekodierung synchron oder asynchron durchgeführt werden soll.
    _Wertetyp_: `async | sync | auto`; _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("fetchpriority")}} {{experimental_inline}} {{non-standard_inline}}
  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen eines externen Bildes verwendet werden soll.
    Erlaubte Werte:
    - `high`
      - : Ruft das externe Bild mit hoher Priorität im Vergleich zu anderen externen Ressourcen ab.
    - `low`
      - : Ruft das externe Bild mit niedriger Priorität im Vergleich zu anderen externen Ressourcen ab.
    - `auto`
      - : Legt keine Präferenz für die Abrufpriorität fest.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.
        Dies ist der Standard.
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Zeigt auf eine URL für die Bilddatei.
    _Wertetyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)**; _Standardwert_: _keiner_; _Animierbar_: **nein**

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)-Schnittstelle.

## Beispiel

Grundlegende Anzeige eines PNG-Bildes in SVG:

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

- Attribut {{SVGAttr("fetchpriority")}}
