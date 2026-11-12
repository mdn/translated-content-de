---
title: "`text-emphasis-color` CSS property"
short-title: text-emphasis-color
slug: Web/CSS/Reference/Properties/text-emphasis-color
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-emphasis-color`** legt die Farbe von Hervorhebungszeichen fest. Dieser Wert kann auch mit der Kurzschreibweise {{cssxref("text-emphasis")}} festgelegt werden.

{{InteractiveExample("CSS Demo: text-emphasis-color")}}

```css interactive-example-choice
text-emphasis-color: currentColor;
```

```css interactive-example-choice
text-emphasis-color: red;
```

```css interactive-example-choice
text-emphasis-color: rgb(90 200 160 / 0.8);
```

```html interactive-example
<section id="default-example">
  <p>
    I'd far rather be
    <span class="transition-all" id="example-element">happy than right</span>
    any day.
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
}

#example-element {
  text-emphasis: filled;
}
```

## Syntax

```css
/* Initial value */
text-emphasis-color: currentColor;

/* <color> */
text-emphasis-color: #555555;
text-emphasis-color: blue;
text-emphasis-color: rgb(90 200 160 / 80%);
text-emphasis-color: transparent;

/* Global values */
text-emphasis-color: inherit;
text-emphasis-color: initial;
text-emphasis-color: revert;
text-emphasis-color: revert-layer;
text-emphasis-color: unset;
```

### Werte

Diese Eigenschaft wird als ein einzelner `<color>`-Wert angegeben:

- `<color>`
  - : Legt die Farbe der Hervorhebungszeichen fest. Wenn keine Farbe angegeben ist, wird standardmäßig `currentColor` verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hervorhebung mit einer Farbe und einem benutzerdefinierten Zeichen

#### HTML

```html
<p>Here's an example:</p>

<em>This has emphasis marks!</em>
```

#### CSS

```css
em {
  text-emphasis-color: green;
  text-emphasis-style: "*";
}
```

#### Ergebnis

{{EmbedLiveSample("Emphasis_with_a_color_and_custom_character", 450, 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der Datentyp {{cssxref("&lt;color&gt;")}}
- Die anderen Eigenschaften für Hervorhebungszeichen: {{cssxref('text-emphasis-style')}}, {{cssxref('text-emphasis')}} und {{cssxref("text-emphasis-position")}}.
- Weitere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} und {{cssxref("column-rule-color")}}
