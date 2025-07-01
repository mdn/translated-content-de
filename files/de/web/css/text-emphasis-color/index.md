---
title: text-emphasis-color
slug: Web/CSS/text-emphasis-color
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`text-emphasis-color`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Farbe der Hervorhebungszeichen. Dieser Wert kann auch mit der {{cssxref("text-emphasis")}} Kurzform gesetzt werden.

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
text-emphasis-color: currentcolor;

/* <color> */
text-emphasis-color: #555;
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

- `<color>`
  - : Definiert die Farbe der Hervorhebungszeichen. Wenn keine Farbe angegeben ist, wird `currentcolor` als Standard verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hervorhebung mit einer Farbe und einem benutzerdefinierten Zeichen

#### CSS

```css
em {
  text-emphasis-color: green;
  text-emphasis-style: "*";
}
```

#### HTML

```html
<p>Here's an example:</p>

<em>This has emphasis marks!</em>
```

#### Ergebnis

{{EmbedLiveSample("Emphasis_with_a_color_and_custom_character", 450, 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Die anderen mit Hervorhebungszeichen verbundenen Eigenschaften: {{cssxref('text-emphasis-style')}}, {{cssxref('text-emphasis')}}, und {{cssxref("text-emphasis-position")}}.
- Weitere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
