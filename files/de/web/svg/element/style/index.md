---
title: <style>
slug: Web/SVG/Element/style
l10n:
  sourceCommit: bc780f1de369fc7f14c73bbdccdeeb8e375cc93e
---

{{SVGRef}}

Das **`<style>`**-[SVG](/de/docs/Web/SVG)-Element ermöglicht es, Stylesheets direkt in SVG-Inhalte einzubetten.

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
  - : Dieses Attribut definiert den Typ der Stylesheet-Sprache als Media-Type-String.
    _Werttyp_: {{Glossary("MIME_type", "**`<media-type>`**")}}; _Standardwert_: `text/css`; _Animierbar_: **nein**
- {{SVGAttr("media")}}
  - : Dieses Attribut definiert, auf welches {{cssxref('@media', 'media')}} das Stylesheet angewendet wird.
    _Werttyp_: [**`<media-query-list>`**](/de/docs/Web/CSS/@media#syntax); _Standardwert_: `all`; _Animierbar_: **nein**
- {{SVGAttr("title")}}
  - : Dieses Attribut ist der Titel des Stylesheets, der verwendet werden kann, um zwischen [alternativen Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets) zu wechseln.
    _Werttyp_: [**`<string>`**](/de/docs/Web/CSS/string); _Standardwert_: _none_; _Animierbar_: **nein**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("style", "&lt;style&gt;-Element in HTML")}}
