---
title: <style>
slug: Web/SVG/Reference/Element/style
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das **`<style>`** [SVG](/de/docs/Web/SVG)-Element ermöglicht das direkte Einbetten von Stylesheets in SVG-Inhalte.

> [!NOTE]
> Das `style`-Element von SVG hat dieselben Attribute wie das entsprechende Element in HTML (siehe HTML's {{HTMLElement("style")}} Element).

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
    _Wertetyp_: {{Glossary("MIME_type", "**`<media-type>`**")}}; _Standardwert_: `text/css`; _Animierbar_: **nein**
- {{SVGAttr("media")}}
  - : Dieses Attribut definiert, auf welche {{cssxref('@media', 'Medien')}} der Stil angewendet wird.
    _Wertetyp_: [**`<media-query-list>`**](/de/docs/Web/CSS/@media#syntax); _Standardwert_: `all`; _Animierbar_: **nein**
- {{SVGAttr("title")}}
  - : Dieses Attribut ist der Titel des Stylesheets, der verwendet werden kann, um zwischen [alternativen Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) zu wechseln.
    _Wertetyp_: [**`<string>`**](/de/docs/Web/CSS/string); _Standardwert_: _none_; _Animierbar_: **nein**

## Nutzungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("style", "&lt;style&gt;-Element in HTML")}}
