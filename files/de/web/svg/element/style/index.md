---
title: <style>
slug: Web/SVG/Element/style
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}

Das SVG-Element **`<style>`** ermöglicht es, Stylesheets direkt im SVG-Inhalt einzubetten.

> [!NOTE]
> Das `style`-Element in SVG hat dieselben Attribute wie das entsprechende Element in HTML (siehe HTML-Element {{HTMLElement("style")}}).

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
  - : Dieses Attribut definiert den Typ der zu verwendenden Stylesheet-Sprache als Medientyp-String.
    _Werttyp_: [**\<string>**](/de/docs/Web/CSS/string); _Standardwert_: `text/css`; _Animierbar_: **nein**
- {{SVGAttr("media")}}
  - : Dieses Attribut definiert, auf welches {{cssxref('@media', 'Media')}} sich das Style bezieht.
    _Werttyp_: [**`<string>`**](/de/docs/Web/CSS/string); _Standardwert_: `all`; _Animierbar_: **nein**
- {{SVGAttr("title")}}
  - : Dieses Attribut ist der Titel des Stylesheets, welcher verwendet werden kann, um zwischen [alternativen Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets) zu wechseln.
    _Werttyp_: [**`<string>`**](/de/docs/Web/CSS/string); _Standardwert_: _none_; _Animierbar_: **nein**

## Nutzungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("style", "&lt;style&gt;-Element in HTML")}}
