---
title: word-spacing
slug: Web/CSS/word-spacing
l10n:
  sourceCommit: b1392b60ee71b9f09c0123694a494a71d0dbbb8a
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
  - : Gibt zusätzlichen Abstand an, der zum intrinsischen Wortzwischenraum der Schriftart hinzugefügt wird.

## Barrierefreiheit

Ein großer positiver oder negativer `word-spacing`-Wert macht die mit diesem Stil versehenen Sätze unleserlich. Bei Text, der mit einem sehr großen positiven Wert gestylt ist, sind die Wörter so weit voneinander entfernt, dass sie nicht mehr als Satz erkennbar sind. Bei Text mit einem großen negativen Wert überlappen sich die Wörter so stark, dass der Anfang und das Ende jedes Wortes nicht mehr erkennbar sind.

Lesbare `word-spacing`-Werte müssen von Fall zu Fall bestimmt werden, da verschiedene Schriftfamilien unterschiedliche Zeichenbreiten haben. Es gibt keinen einzigen Wert, der für alle Schriftfamilien automatisch die Lesbarkeit sicherstellt.

- [MDN Leitfaden zu WCAG, Erklärung zu Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erklärung Erfolgskriterium 1.4.8 | W3C Explanation WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

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
