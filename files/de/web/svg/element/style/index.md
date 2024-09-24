---
title: <style>
slug: Web/SVG/Element/style
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}

Das SVG **`<style>`**-Element ermöglicht das Einbetten von Stylesheets direkt innerhalb von SVG-Inhalten.

> [!NOTE]
> Das `style`-Element von SVG hat die gleichen Attribute wie das entsprechende Element in HTML (siehe das {{HTMLElement("style")}}-Element von HTML).

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
  - : Dieses Attribut definiert den Typ der zu verwendenden Stylesheet-Sprache als Media-Type-String.
    _Wertetyp_: [**\<string>**](/de/docs/Web/CSS/string); _Standardwert_: `text/css`; _Animierbar_: **nein**
- {{SVGAttr("media")}}
  - : Dieses Attribut definiert, auf welches {{cssxref('@media', 'Medium')}} der Stil angewendet wird.
    _Wertetyp_: [**`<string>`**](/de/docs/Web/CSS/string); _Standardwert_: `all`; _Animierbar_: **nein**
- {{SVGAttr("title")}}
  - : Dieses Attribut ist der Titel des Stylesheets, der verwendet werden kann, um zwischen [alternativen Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets) zu wechseln.
    _Wertetyp_: [**`<string>`**](/de/docs/Web/CSS/string); _Standardwert_: _keiner_; _Animierbar_: **nein**

## Nutzungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTMLElement("style", "&lt;style&gt;-Element in HTML")}}
