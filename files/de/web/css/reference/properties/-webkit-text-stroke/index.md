---
title: "`-webkit-text-stroke` CSS-Eigenschaft"
short-title: -webkit-text-stroke
slug: Web/CSS/Reference/Properties/-webkit-text-stroke
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`-webkit-text-stroke`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die [Breite](/de/docs/Web/CSS/Reference/Values/length) und [Farbe](/de/docs/Web/CSS/Reference/Values/color_value) von Umrissen für Textzeichen fest. Dies ist eine Kurzschreibweise für die Langschreibereigenschaften {{cssxref("-webkit-text-stroke-width")}} und {{cssxref("-webkit-text-stroke-color")}}.

## Zughörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-stroke-width")}}

## Syntax

```css
/* Width and color values */
-webkit-text-stroke: 4px navy;

/* Global values */
-webkit-text-stroke: inherit;
-webkit-text-stroke: initial;
-webkit-text-stroke: revert;
-webkit-text-stroke: revert-layer;
-webkit-text-stroke: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Breite des Umrisses.
- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Umrisses.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hinzufügen eines roten Textumrisses

#### HTML

```html
<p id="example">The stroke of this text is red.</p>
```

#### CSS

```css
#example {
  font-size: 3em;
  margin: 0;
  -webkit-text-stroke: 2px red;
}
```

#### Ergebnis

{{EmbedLiveSample("Adding_a_red_text_stroke", 600, 60)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Introducing Text-Stroke](https://webkit.org/blog/85/introducing-text-stroke/) auf webkit.org (2006)
- [CSS-Tricks Artikel, der diese Funktion erklärt](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-fill-color")}}
