---
title: text-orientation
slug: Web/CSS/Reference/Properties/text-orientation
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`text-orientation`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Ausrichtung der Textzeichen in einer Zeile fest. Sie betrifft nur den Text im vertikalen Modus (wenn {{cssxref("writing-mode")}} nicht `horizontal-tb` ist). Sie ist nützlich zur Steuerung der Darstellung von Sprachen, die eine vertikale Schrift verwenden, und auch zur Erstellung von vertikalen Tabellenüberschriften.

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

Die `text-orientation`-Eigenschaft wird als ein einzelnes Schlüsselwort aus der folgenden Liste angegeben.

### Werte

- `mixed`
  - : Dreht die Zeichen horizontaler Schriftzüge um 90° im Uhrzeigersinn. Platziert die Zeichen vertikaler Schriften natürlich. Standardwert.
- `upright`
  - : Platziert die Zeichen horizontaler Schriftzüge aufrecht (natürlich) sowie die Glyphen für vertikale Schriften. Beachten Sie, dass dieses Schlüsselwort dazu führt, dass alle Zeichen als links-nach-rechts betrachtet werden: Der verwendete Wert von {{cssxref("direction")}} wird auf `ltr` erzwungen.
- `sideways`
  - : Führt dazu, dass Zeichen so angeordnet werden, wie sie horizontal wären, jedoch mit der gesamten Zeile um 90° im Uhrzeigersinn gedreht.
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

- Die anderen vertikalen Schrift-bezogenen CSS-Eigenschaften: {{cssxref("writing-mode")}}, {{cssxref("text-combine-upright")}}, und {{cssxref("unicode-bidi")}}.
- [CSS Logische Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- [Stilisierung vertikalen Textes (Chinesisch, Japanisch, Koreanisch und Mongolisch)](https://www.w3.org/International/articles/vertical-text/)
- Umfassende Browser-Unterstützungstestergebnisse: <https://w3c.github.io/i18n-tests/results/horizontal-in-vertical.html#text_orientation>
