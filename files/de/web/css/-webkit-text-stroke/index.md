---
title: "-webkit-text-stroke"
slug: Web/CSS/-webkit-text-stroke
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`-webkit-text-stroke`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt die [Breite](/de/docs/Web/CSS/length) und die [Farbe](/de/docs/Web/CSS/color_value) der Umrandung von Textzeichen fest. Dies ist eine Kurzschreibweise für die Langschreib-Eigenschaften {{cssxref("-webkit-text-stroke-width")}} und {{cssxref("-webkit-text-stroke-color")}}.

```css
/* Width and color values */
-webkit-text-stroke: 4px navy;
text-stroke: 4px navy;

/* Global values */
-webkit-text-stroke: inherit;
-webkit-text-stroke: initial;
-webkit-text-stroke: revert;
-webkit-text-stroke: revert-layer;
-webkit-text-stroke: unset;
```

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`-webkit-text-stroke-color`](/de/docs/Web/CSS/-webkit-text-stroke-color)
- [`-webkit-text-stroke-width`](/de/docs/Web/CSS/-webkit-text-stroke-width)

## Syntax

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Breite der Umrandung.
- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe der Umrandung.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hinzufügen einer roten Textumrandung

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
- [CSS-Tricks-Artikel, der dieses Feature erklärt](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-fill-color")}}
