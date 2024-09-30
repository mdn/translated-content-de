---
title: <style>
slug: Web/SVG/Element/style
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}

Das SVG-Element **`<style>`** ermöglicht das Einbetten von Stylesheets direkt innerhalb von SVG-Inhalten.

> [!NOTE]
> Das `style`-Element von SVG hat dieselben Attribute wie das entsprechende Element in HTML (siehe HTMLs {{HTMLElement("style")}}-Element).

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <style>
    circle {
      fill: gold;
      stroke: maroon;
      stroke-width: 2px;
    }
  </style>

  <circle cx="5" cy="5" r="4" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attribute

- {{SVGAttr("type")}}
  - : Dieses Attribut definiert den Typ der Stylesheet-Sprache, die als Medientyp-String verwendet werden soll.
    _Werttyp_: [**\<string>**](/de/docs/Web/CSS/string); _Standardwert_: `text/css`; _Animierbar_: **nein**
- {{SVGAttr("media")}}
  - : Dieses Attribut definiert, auf welche {{cssxref('@media', 'Medien')}} das Style angewendet wird.
    _Werttyp_: [**`<string>`**](/de/docs/Web/CSS/string); _Standardwert_: `all`; _Animierbar_: **nein**
- {{SVGAttr("title")}}
  - : Dieses Attribut ist der Titel des Stylesheets, der zur Auswahl zwischen [alternativen Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets) verwendet werden kann.
    _Werttyp_: [**`<string>`**](/de/docs/Web/CSS/string); _Standardwert_: _none_; _Animierbar_: **nein**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("style", "&lt;style&gt;-Element in HTML")}}
