---
title: accent-color
slug: Web/CSS/accent-color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`accent-color`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die {{Glossary("accent", "Akzentfarbe")}} für Benutzeroberflächensteuerelemente fest, die von einigen Elementen generiert werden.

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

Browser, die `accent-color` unterstützen, wenden es momentan auf die folgenden HTML-Elemente an:

- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
- [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)
- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- [`<progress>`](/de/docs/Web/HTML/Reference/Elements/progress)

Jeder Benutzeragent hat eine Akzentfarbe mit Variationen, um Lesbarkeit und Kontrast sicherzustellen. Diese Akzentfarbe wird jedoch nicht von jedem Benutzeroberflächensteuerungselement oder in jedem Zustand des Steuerelements verwendet. Die `accent-color`-Eigenschaft wird nur auf Benutzeroberflächensteuerelemente angewendet, die eine Akzentfarbe verwenden, und zwar in den Zuständen, in denen sie anwendbar ist.

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
  - : Stellt eine vom UA gewählte Farbe dar, die der Akzentfarbe der Plattform entsprechen sollte, sofern vorhanden.
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
