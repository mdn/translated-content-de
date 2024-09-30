---
title: text-orientation
slug: Web/CSS/text-orientation
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

Die **`text-orientation`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Ausrichtung der Textzeichen in einer Zeile fest. Sie beeinflusst nur Text im vertikalen Modus (wenn {{cssxref("writing-mode")}} nicht `horizontal-tb` ist). Sie ist nützlich zur Steuerung der Anzeige von Sprachen, die vertikale Schriftarten verwenden, und auch für vertikale Tabellenüberschriften.

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

Die Eigenschaft `text-orientation` wird als einzelnes Schlüsselwort aus der unten stehenden Liste spezifiziert.

### Werte

- `mixed`
  - : Dreht die Zeichen horizontaler Skripte um 90° im Uhrzeigersinn. Stellt die Zeichen vertikaler Skripte natürlich dar. Standardwert.
- `upright`
  - : Stellt die Zeichen horizontaler Skripte natürlich (aufrecht) dar, ebenso wie die Glyphen für vertikale Skripte. Beachten Sie, dass dieses Schlüsselwort alle Zeichen als von links nach rechts betrachtet: der verwendete Wert von {{cssxref("direction")}} wird auf `ltr` erzwungen.
- `sideways`
  - : Führt dazu, dass Zeichen so angeordnet werden, wie sie es horizontal wären, jedoch mit der gesamten Zeile um 90° im Uhrzeigersinn gedreht.
- `sideways-right`
  - : Ein Alias für `sideways`, der aus Kompatibilitätsgründen beibehalten wird.
- `use-glyph-orientation`
  - : Bei SVG-Elementen führt dieses Schlüsselwort dazu, den Wert der veralteten SVG-Eigenschaften `glyph-orientation-vertical` und `glyph-orientation-horizontal` zu verwenden.

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

- Die anderen vertikalskriptbezogenen CSS-Eigenschaften: {{cssxref("writing-mode")}}, {{cssxref("text-combine-upright")}}, und {{cssxref("unicode-bidi")}}.
- [CSS Logische Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- [Gestaltung von vertikalem Text (Chinesisch, Japanisch, Koreanisch und Mongolisch)](https://www.w3.org/International/articles/vertical-text/)
- Umfangreiche Browser-Unterstützungstestergebnisse: <https://w3c.github.io/i18n-tests/results/horizontal-in-vertical.html#text_orientation>
