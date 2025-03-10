---
title: text-orientation
slug: Web/CSS/text-orientation
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`text-orientation`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Ausrichtung der Textzeichen in einer Zeile fest. Sie betrifft nur Text im vertikalen Modus (wenn {{cssxref("writing-mode")}} nicht `horizontal-tb` ist). Sie ist nützlich zur Steuerung der Anzeige von Sprachen, die vertikale Schrift verwenden, und auch für die Erstellung vertikaler Tabellenüberschriften.

{{InteractiveExample("CSS Demo: text-orientation")}}

```css interactive-example-choice
writing-mode: vertical-rl;
text-orientation: mixed;
```

```css interactive-example-choice
writing-mode: vertical-rl;
text-orientation: upright;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <p>
      In another moment down went Alice after it, never once considering how in
      the world she was to get out again.
    </p>
  </div>
</section>
```

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

Die `text-orientation` Eigenschaft wird als ein einzelnes Schlüsselwort aus der folgenden Liste angegeben.

### Werte

- `mixed`
  - : Dreht die Zeichen horizontaler Scripts um 90° im Uhrzeigersinn. Legt die Zeichen von vertikalen Scripts natürlich aus. Standardwert.
- `upright`
  - : Legt die Zeichen von horizontalen Scripts natürlich (aufrecht) sowie die Glyphen für vertikale Scripts aus. Beachten Sie, dass dieses Schlüsselwort dazu führt, dass alle Zeichen als links-nach-rechts betrachtet werden: Der verwendete Wert von {{cssxref("direction")}} wird auf `ltr` festgelegt.
- `sideways`
  - : Verursacht, dass Zeichen so ausgelegt werden, als wären sie horizontal, aber mit der ganzen Zeile um 90° im Uhrzeigersinn gedreht.
- `sideways-right`
  - : Ein Alias für `sideways`, der aus Kompatibilitätsgründen beibehalten wird.
- `use-glyph-orientation`
  - : Bei SVG-Elementen führt dieses Schlüsselwort dazu, dass der Wert der veralteten SVG-Eigenschaften `glyph-orientation-vertical` und `glyph-orientation-horizontal` verwendet wird.

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

- Die anderen CSS-Eigenschaften im Zusammenhang mit vertikalen Schriften: {{cssxref("writing-mode")}}, {{cssxref("text-combine-upright")}}, und {{cssxref("unicode-bidi")}}.
- [CSS Logical properties](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- [Gestaltung von vertikalem Text (Chinesisch, Japanisch, Koreanisch und Mongolisch)](https://www.w3.org/International/articles/vertical-text/)
- Umfangreiche Testergebnisse der Browserunterstützung: <https://w3c.github.io/i18n-tests/results/horizontal-in-vertical.html#text_orientation>
