---
title: word-spacing
slug: Web/CSS/word-spacing
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`word-spacing`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die Länge des Abstands zwischen Wörtern und zwischen Tags fest.

{{EmbedInteractiveExample("pages/css/word-spacing.html")}}

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
  - : Der normale Wortzwischenraum, wie er durch die aktuelle Schriftart und/oder den Browser definiert ist.
- {{cssxref("length")}}
  - : Gibt zusätzlichen Abstand an, zusätzlich zu dem intrinsischen Wortzwischenraum, der durch die Schriftart definiert ist.

## Barrierefreiheit

Ein großer positiver oder negativer `word-spacing`-Wert macht die Sätze, auf die das Styling angewendet wird, unlesbar. Bei Texten, die mit einem sehr großen positiven Wert gestylt sind, werden die Wörter so weit auseinander sein, dass es nicht mehr als Satz erscheint. Bei Texten mit einem großen negativen Wert überlappen sich die Wörter so stark, dass der Anfang und das Ende jedes Wortes unkenntlich werden.

Lesbarer `word-spacing` muss von Fall zu Fall bestimmt werden, da unterschiedliche Schriftarten unterschiedliche Zeichenbreiten haben. Es gibt keinen Wert, der automatisch sicherstellt, dass alle Schriftarten ihre Lesbarkeit behalten.

- [MDN-Verstehen der WCAG, Erklärung zu Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | W3C-Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

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
