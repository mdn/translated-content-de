---
title: text-emphasis-color
slug: Web/CSS/text-emphasis-color
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Die **`text-emphasis-color`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Farbe von Hervorhebungszeichen fest. Dieser Wert kann auch mit der {{cssxref("text-emphasis")}} Kurzform festgelegt werden.

{{EmbedInteractiveExample("pages/css/text-emphasis-color.html")}}

## Syntax

```css
/* Ursprungswert */
text-emphasis-color: currentcolor;

/* <color> */
text-emphasis-color: #555;
text-emphasis-color: blue;
text-emphasis-color: rgb(90 200 160 / 80%);
text-emphasis-color: transparent;

/* Globale Werte */
text-emphasis-color: inherit;
text-emphasis-color: initial;
text-emphasis-color: revert;
text-emphasis-color: revert-layer;
text-emphasis-color: unset;
```

### Werte

- `<color>`
  - : Definiert die Farbe der Hervorhebungszeichen. Wenn keine Farbe angegeben ist, wird standardmäßig `currentcolor` verwendet.

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
<p>Hier ist ein Beispiel:</p>

<em>Dies hat Hervorhebungszeichen!</em>
```

#### Ergebnis

{{EmbedLiveSample("Emphasis_with_a_color_and_custom_character", 450, 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Die anderen mit Hervorhebungszeichen verbundenen Eigenschaften: {{cssxref('text-emphasis-style')}}, {{cssxref('text-emphasis')}} und {{cssxref("text-emphasis-position")}}.
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}.
