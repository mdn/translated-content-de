---
title: Wortabstand
slug: Web/CSS/word-spacing
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`word-spacing`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Länge des Abstands zwischen Wörtern und zwischen Tags fest.

{{EmbedInteractiveExample("pages/css/word-spacing.html")}}

## Syntax

```css
/* Schlüsselwortwert */
word-spacing: normal;

/* <length> Werte */
word-spacing: 3px;
word-spacing: 0.3em;

/* Globale Werte */
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
  - : Gibt zusätzlichen Abstand an, zusätzlich zu dem durch die Schrift definierten intrinsischen Wortzwischenraum.

## Barrierefreiheit

Ein großer positiver oder negativer `word-spacing`-Wert macht die Sätze, auf die das Styling angewendet wird, unlesbar. Bei Texten, die mit einem sehr großen positiven Wert gestylt sind, sind die Wörter so weit voneinander entfernt, dass es nicht mehr als Satz erscheint. Bei Texten, die mit einem großen negativen Wert gestylt sind, überlappen sich die Wörter so stark, dass Anfang und Ende jedes Wortes nicht mehr erkennbar sind.

Ein lesbarer `word-spacing`-Wert muss von Fall zu Fall bestimmt werden, da verschiedene Schriftfamilien unterschiedliche Zeichenbreiten haben. Es gibt keinen Wert, der sicherstellen kann, dass alle Schriftfamilien automatisch ihre Lesbarkeit behalten.

- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
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
