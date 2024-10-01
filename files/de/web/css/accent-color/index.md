---
title: accent-color
slug: Web/CSS/accent-color
l10n:
  sourceCommit: 5f13cbe7517ce96deeb521d4c8e6923266a22913
---

{{CSSRef}}

Die **`accent-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die {{Glossary("accent", "Akzentfarbe")}} für Benutzeroberflächen-Steuerelemente fest, die von einigen Elementen generiert werden.

{{EmbedInteractiveExample("pages/css/accent-color.html")}}

Browser, die `accent-color` unterstützen, wenden diese derzeit auf die folgenden HTML-Elemente an:

- [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)
- [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)
- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)
- [`<progress>`](/de/docs/Web/HTML/Element/progress)

Jeder User Agent hat eine Akzentfarbe mit Variationen, um Lesbarkeit und Kontrast zu gewährleisten. Diese Akzentfarbe wird nicht von jedem Benutzeroberflächen-Steuerelement oder in jedem Zustand des Steuerelements verwendet. Die `accent-color` wird nur auf Benutzeroberflächen-Steuerelemente angewendet, die eine Akzentfarbe in den Zuständen verwenden, in denen sie anwendbar ist.

## Syntax

```css
/* Keyword values */
accent-color: auto;

/* <color> values */
accent-color: darkred;
accent-color: #5729e9;
accent-color: rgb(0 200 0);
accent-color: hsl(228 4% 24%);

/* Global values */
accent-color: inherit;
accent-color: initial;
accent-color: revert;
accent-color: revert-layer;
accent-color: unset;
```

### Werte

- `auto`
  - : Repräsentiert eine von der Benutzeragentur gewählte Farbe, die, wenn möglich, der Akzentfarbe der Plattform entsprechen sollte.
- {{cssxref("&lt;color&gt;")}}
  - : Gibt die Farbe an, die als Akzentfarbe verwendet werden soll.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine benutzerdefinierte Akzentfarbe festlegen

#### HTML

```html
<input type="checkbox" checked />
<input type="checkbox" class="custom" checked />
```

#### CSS

```css
input {
  accent-color: auto;
  display: block;
  width: 30px;
  height: 30px;
}

input.custom {
  accent-color: rebeccapurple;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_a_custom_accent_color', 500, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("caret-color")}}, {{cssxref("color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Andere farbbezogene Eigenschaften
- {{cssxref("&lt;color&gt;")}}: Verwandter Datentyp
- {{HTMLElement("input")}}: Verwandtes HTML-Element
