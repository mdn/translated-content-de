---
title: <style>
slug: Web/SVG/Reference/Element/style
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`<style>`**-Element in [SVG](/de/docs/Web/SVG) erlaubt es, Stylesheets direkt innerhalb von SVG-Inhalten einzubetten.

> [!NOTE]
> Das `style`-Element in SVG hat dieselben Attribute wie das entsprechende Element in HTML (siehe das {{HTMLElement("style")}}-Element in HTML).

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
  - : Dieses Attribut definiert, auf welches {{cssxref('@media', 'Medium')}} das Stylesheet angewendet wird.
    _Wertetyp_: [**`<media-query-list>`**](/de/docs/Web/CSS/@media#syntax); _Standardwert_: `all`; _Animierbar_: **nein**
- {{SVGAttr("title")}}
  - : Dieses Attribut ist der Titel des Stylesheets, der verwendet werden kann, um zwischen [alternativen Stylesheets](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet) zu wechseln.
    _Wertetyp_: [**`<string>`**](/de/docs/Web/CSS/string); _Standardwert_: _none_; _Animierbar_: **nein**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("style", "&lt;style&gt;-Element in HTML")}}
