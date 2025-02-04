---
title: word-spacing
slug: Web/CSS/word-spacing
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
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
  - : Gibt zusätzlichen Abstand an, der über den von der Schriftart definierten intrinsischen Wortzwischenraum hinausgeht.

## Barrierefreiheit

Ein großer positiver oder negativer Wert für `word-spacing` macht die Sätze, auf die die Gestaltung angewendet wird, unlesbar. Bei mit einem sehr großen positiven Wert gestalltetem Text sind die Wörter so weit auseinander, dass es nicht mehr wie ein Satz wirkt. Bei mit einem großen negativen Wert gestyltem Text überlappen sich die Wörter so stark, dass Anfang und Ende jedes Wortes nicht mehr erkennbar sind.

Lesbare `word-spacing`-Werte müssen fallweise ermittelt werden, da unterschiedliche Schriftfamilien unterschiedliche Zeichenbreiten haben. Es gibt keinen einzigen Wert, der sicherstellt, dass alle Schriftfamilien automatisch ihre Lesbarkeit behalten.

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
- SVG-Attribut {{SVGAttr("word-spacin")}}
