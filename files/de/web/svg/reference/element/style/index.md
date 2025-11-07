---
title: <style>
slug: Web/SVG/Reference/Element/style
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **`<style>`** [SVG](/de/docs/Web/SVG)-Element ermöglicht das Einbetten von Stylesheets direkt in SVG-Inhalte.

> [!NOTE]
> Das `style`-Element von SVG hat dieselben Attribute wie das entsprechende Element in HTML (siehe HTML's {{HTMLElement("style")}}-Element).

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("type")}}
  - : Dieses Attribut definiert den Typ der zu verwendenden Stylesheet-Sprache als einen Medientyp-String.
    _Wertetyp_: {{Glossary("MIME_type", "**`<media-type>`**")}}; _Standardwert_: `text/css`; _Animiert_: **nein**
- {{SVGAttr("media")}}
  - : Dieses Attribut definiert, auf welches {{cssxref('@media', 'Medium')}} der Stil angewendet wird.
    _Wertetyp_: [**`<media-query-list>`**](/de/docs/Web/CSS/Reference/At-rules/@media#syntax); _Standardwert_: `all`; _Animiert_: **nein**
- {{SVGAttr("title")}}
  - : Dieses Attribut ist der Titel des Stylesheets, der verwendet werden kann, um zwischen [alternativen Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) zu wechseln.
    _Wertetyp_: [**`<string>`**](/de/docs/Web/CSS/Reference/Values/string); _Standardwert_: _kein_; _Animiert_: **nein**

## DOM-Interface

Dieses Element implementiert das [`SVGStyleElement`](/de/docs/Web/API/SVGStyleElement)-Interface.

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

- {{HTMLElement("style", "&lt;style&gt; Element in HTML")}}
