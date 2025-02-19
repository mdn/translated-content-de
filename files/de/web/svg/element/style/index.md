---
title: <style>
slug: Web/SVG/Element/style
l10n:
  sourceCommit: 176953b8260e0dd4328a7e788e8179accbafb8e1
---

{{SVGRef}}

Das **`<style>`** [SVG](/de/docs/Web/SVG)-Element ermöglicht es, Stylesheets direkt innerhalb von SVG-Inhalten einzubetten.

> [!NOTE]
> Das `style`-Element von SVG hat dieselben Attribute wie das entsprechende Element in HTML (siehe HTML-{{HTMLElement("style")}}-Element).

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

{{EmbedLiveSample('Beispiel', 150, '100%')}}

## Attribute

- {{SVGAttr("type")}}
  - : Dieses Attribut definiert den Typ der Stylesheetsprache, die als Medientyp-String verwendet werden soll.
    _Werttyp_: {{Glossary("MIME_type", "**`<media-type>`**")}}; _Standardwert_: `text/css`; _Animierbar_: **nein**
- {{SVGAttr("media")}}
  - : Dieses Attribut definiert, auf welche {{cssxref('@media', 'Medien')}} der Stil angewendet wird.
    _Werttyp_: [**`<media-query-list>`**](/de/docs/Web/CSS/@media#syntax); _Standardwert_: `all`; _Animierbar_: **nein**
- {{SVGAttr("title")}}
  - : Dieses Attribut ist der Titel des Stylesheets, welcher zum Wechseln zwischen [alternativen Stylesheets](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet) verwendet werden kann.
    _Werttyp_: [**`<string>`**](/de/docs/Web/CSS/string); _Standardwert_: _keiner_; _Animierbar_: **nein**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("style", "&lt;style&gt;-Element in HTML")}}
