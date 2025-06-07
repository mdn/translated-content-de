---
title: <style>
slug: Web/SVG/Reference/Element/style
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<style>`** [SVG](/de/docs/Web/SVG)-Element ermöglicht es, Stylesheets direkt im SVG-Inhalt einzubetten.

> [!NOTE]
> Das `style`-Element in SVG hat dieselben Attribute wie das entsprechende Element in HTML (siehe das HTML-{{HTMLElement("style")}}-Element).

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("type")}}
  - : Dieses Attribut definiert den Typ der Stylesheet-Sprache als Medien-Typ-String.
    _Werttyp_: {{Glossary("MIME_type", "**`<media-type>`**")}}; _Standardwert_: `text/css`; _Animierbar_: **nein**
- {{SVGAttr("media")}}
  - : Dieses Attribut definiert, für welches {{cssxref('@media', 'Medium')}} die Styles gelten.
    _Werttyp_: [**`<media-query-list>`**](/de/docs/Web/CSS/@media#syntax); _Standardwert_: `all`; _Animierbar_: **nein**
- {{SVGAttr("title")}}
  - : Dieses Attribut ist der Titel des Stylesheets, der verwendet werden kann, um zwischen [alternativen Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) zu wechseln.
    _Werttyp_: [**`<string>`**](/de/docs/Web/CSS/string); _Standardwert_: _none_; _Animierbar_: **nein**

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGStyleElement`](/de/docs/Web/API/SVGStyleElement)-Schnittstelle.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("style", "&lt;style&gt;-Element in HTML")}}
