---
title: word-spacing
slug: Web/CSS/word-spacing
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`word-spacing`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Länge des Abstands zwischen Wörtern und zwischen Tags fest.

{{InteractiveExample("CSS Demo: word-spacing")}}

```css interactive-example-choice
word-spacing: normal;
```

```css interactive-example-choice
word-spacing: 1rem;
```

```css interactive-example-choice
word-spacing: 4px;
```

```css interactive-example-choice
word-spacing: -0.4ch;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    As much mud in the streets as if the waters had but newly retired from the
    face of the earth, and it would not be wonderful to meet a Megalosaurus,
    forty feet long or so, waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
@font-face {
  src: url("/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.ttf");
  font-family: Amstelvar;
  font-style: normal;
}

section {
  font-size: 1.2em;
  font-family: Amstelvar, serif;
}
```

## Syntax

```css
/* Keyword value */
word-spacing: normal;

/* <length> values */
word-spacing: 3px;
word-spacing: 0.3em;

/* Global values */
word-spacing: inherit;
word-spacing: initial;
word-spacing: revert;
word-spacing: revert-layer;
word-spacing: unset;
```

### Werte

- `normal`
  - : Der normale Wortabstand, wie er durch die aktuelle Schriftart und/oder den Browser definiert ist.
- {{cssxref("length")}}
  - : Gibt zusätzlichen Abstand zum eigentlichen Wortabstand an, der durch die Schriftart definiert ist.

## Barrierefreiheit

Ein großer positiver oder negativer `word-spacing`-Wert kann die Lesbarkeit der Sätze, auf die das Styling angewendet wird, beeinträchtigen. Bei einem sehr großen positiven Wert werden die Wörter so weit auseinander liegen, dass es nicht mehr wie ein Satz wirkt. Bei einem großen negativen Wert überlappen sich die Wörter so stark, dass Anfang und Ende jedes Wortes nicht erkennbar sind.

Lesbare `word-spacing`-Werte müssen fallweise bestimmt werden, da verschiedene Schriftfamilien unterschiedliche Zeichenbreiten haben. Es gibt keinen festen Wert, der sicherstellt, dass alle Schriftfamilien automatisch ihre Lesbarkeit behalten.

- [MDN Verständnis der WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Beispiele

### HTML

```html
<div id="mozdiv1">Lorem ipsum dolor sit amet.</div>
<div id="mozdiv2">Lorem ipsum dolor sit amet.</div>
```

### CSS

```css
#mozdiv1 {
  word-spacing: 15px;
}

#mozdiv2 {
  word-spacing: 5em;
}
```

{{ EmbedLiveSample('Examples') }}

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("letter-spacing")}}
- SVG {{SVGAttr("word-spacing")}} Attribut
