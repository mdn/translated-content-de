---
title: accent-color
slug: Web/CSS/Reference/Properties/accent-color
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`accent-color`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die {{Glossary("accent", "Akzentfarbe")}} für Benutzeroberflächen-Steuerelemente fest, die durch einige Elemente generiert werden.

{{InteractiveExample("CSS Demo: accent-color")}}

```css interactive-example-choice
accent-color: red;
```

```css interactive-example-choice
accent-color: #74992e;
```

```css interactive-example-choice
accent-color: rgb(255 255 128);
```

```css interactive-example-choice
accent-color: hsl(250 100% 34%);
```

```html interactive-example
<section class="default-example container" id="default-example">
  <div>
    <input checked="" id="example-element" type="checkbox" />
    <label for="example-element" id="example-label">Example Label</label>
  </div>
</section>
```

```css interactive-example
.container > div {
  display: flex;
  align-items: center;
}

#example-element {
  width: 40px;
  height: 40px;
}

#example-label {
  margin-left: 10px;
  font-size: x-large;
}
```

Browser, die `accent-color` unterstützen, wenden sie derzeit auf die folgenden HTML-Elemente an:

- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
- [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<progress>`](/de/docs/Web/HTML/Reference/Elements/progress)

Jeder User Agent hat eine Akzentfarbe mit Variationen, um Lesbarkeit und Kontrast sicherzustellen. Diese Akzentfarbe wird nicht von jedem Benutzeroberflächen-Steuerelement oder in jedem Zustand des Steuerelements verwendet. Die `accent-color` wird nur auf Steuerelemente der Benutzeroberfläche angewendet, die eine Akzentfarbe in den Zuständen verwenden, in denen sie anwendbar ist.

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
  - : Repräsentiert eine vom User Agent gewählte Farbe, die der Akzentfarbe der Plattform entsprechen sollte, falls vorhanden.
- {{cssxref("&lt;color&gt;")}}
  - : Spezifiziert die Farbe, die als Akzentfarbe verwendet werden soll.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen einer benutzerdefinierten Akzentfarbe

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
