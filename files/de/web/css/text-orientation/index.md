---
title: text-orientation
slug: Web/CSS/text-orientation
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

Die **`text-orientation`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Ausrichtung der Textzeichen in einer Zeile fest. Sie wirkt sich nur auf Text im vertikalen Modus aus (wenn {{cssxref("writing-mode")}} nicht `horizontal-tb` ist). Sie ist nützlich zur Steuerung der Darstellung von Sprachen, die vertikale Schriften verwenden, und auch für die Erstellung vertikaler Tabellenüberschriften.

{{EmbedInteractiveExample("pages/css/text-orientation.html")}}

## Syntax

```css
/* Keyword values */
text-orientation: mixed;
text-orientation: upright;
text-orientation: sideways-right;
text-orientation: sideways;
text-orientation: use-glyph-orientation;

/* Global values */
text-orientation: inherit;
text-orientation: initial;
text-orientation: revert;
text-orientation: revert-layer;
text-orientation: unset;
```

Die Eigenschaft `text-orientation` wird als einzelnes Schlüsselwort aus der folgenden Liste angegeben.

### Werte

- `mixed`
  - : Dreht die Zeichen von horizontalen Schriften um 90° im Uhrzeigersinn. Legt die Zeichen von vertikalen Schriften natürlich aus. Standardwert.
- `upright`
  - : Legt die Zeichen von horizontalen Schriften natürlich (aufrecht) sowie die Glyphen für vertikale Schriften aus. Beachten Sie, dass dieses Schlüsselwort dazu führt, dass alle Zeichen als links-nach-rechts betrachtet werden: Der verwendete Wert von {{cssxref("direction")}} wird erzwungen auf `ltr`.
- `sideways`
  - : Bewirkt, dass die Zeichen so ausgerichtet werden, als wären sie horizontal, jedoch mit der gesamten Zeile um 90° im Uhrzeigersinn gedreht.
- `sideways-right`
  - : Ein Alias für `sideways`, der aus Kompatibilitätsgründen beibehalten wird.
- `use-glyph-orientation`
  - : Auf SVG-Elementen führt dieses Schlüsselwort dazu, dass der Wert der veralteten SVG-Eigenschaften `glyph-orientation-vertical` und `glyph-orientation-horizontal` verwendet wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<p>Lorem ipsum dolet semper quisquam.</p>
```

### CSS

```css
p {
  writing-mode: vertical-rl;
  text-orientation: upright;
}
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen vertikal-schriftbezogenen CSS-Eigenschaften: {{cssxref("writing-mode")}}, {{cssxref("text-combine-upright")}}, und {{cssxref("unicode-bidi")}}.
- [CSS Logical properties](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- [Stil von vertikalem Text (Chinesisch, Japanisch, Koreanisch und Mongolisch)](https://www.w3.org/International/articles/vertical-text/)
- Umfangreiche Browser-Testergebnisse: <https://w3c.github.io/i18n-tests/results/horizontal-in-vertical.html#text_orientation>
