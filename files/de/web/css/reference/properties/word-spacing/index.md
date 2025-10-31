---
title: word-spacing
slug: Web/CSS/Reference/Properties/word-spacing
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
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
  font-family: "Amstelvar";
  font-style: normal;
}

section {
  font-size: 1.2em;
  font-family: "Amstelvar", serif;
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
  - : Der normale Wortzwischenraum, wie er durch die aktuelle Schriftart und/oder den Browser definiert wird.
- {{cssxref("length")}}
  - : Gibt zusätzlichen Abstand an, der zum intrinsischen Wortzwischenraum der Schriftart hinzukommt.

## Barrierefreiheit

Ein großer positiver oder negativer Wert für `word-spacing` macht die Sätze, auf die das Styling angewendet wird, unleserlich. Bei Text, der mit einem sehr großen positiven Wert gestaltet wurde, sind die Wörter so weit voneinander entfernt, dass es nicht mehr als Satz erscheint. Bei Texten, die mit einem großen negativen Wert gestaltet wurden, überlappen sich die Wörter so stark, dass Anfang und Ende jedes Wortes nicht mehr erkennbar sind.

Lesbare `word-spacing`-Werte müssen fallweise bestimmt werden, da verschiedene Schriftfamilien unterschiedliche Zeichenbreiten haben. Es gibt keinen einzigen Wert, der automatisch sicherstellt, dass alle Schriftfamilien ihre Lesbarkeit beibehalten.

- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

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
