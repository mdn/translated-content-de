---
title: text-orientation
slug: Web/CSS/text-orientation
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`text-orientation`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Ausrichtung der Textzeichen in einer Zeile fest. Sie wirkt sich nur auf Text im Vertikalmodus aus (wenn {{cssxref("writing-mode")}} nicht `horizontal-tb` ist). Sie ist nützlich, um die Anzeige von Sprachen, die eine vertikale Schrift verwenden, zu steuern und um vertikale Tabellenüberschriften zu erstellen.

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

Die `text-orientation`-Eigenschaft wird als einzelnes Schlüsselwort aus der folgenden Liste angegeben.

### Werte

- `mixed`
  - : Dreht die Zeichen horizontaler Schriften um 90° im Uhrzeigersinn. Stellt die Zeichen vertikaler Schriften natürlich dar. Standardwert.
- `upright`
  - : Stellt die Zeichen horizontaler Schriften natürlich (aufrecht) sowie die Glyphen für vertikale Schriften dar. Beachten Sie, dass dieses Schlüsselwort dazu führt, dass alle Zeichen als linksläufig betrachtet werden: der verwendete Wert von {{cssxref("direction")}} wird erzwungen auf `ltr`.
- `sideways`
  - : Bewirkt, dass Zeichen so angeordnet werden, wie sie horizontal wären, aber die ganze Zeile wird um 90° im Uhrzeigersinn gedreht.
- `sideways-right`
  - : Ein Alias für `sideways`, der aus Kompatibilitätsgründen beibehalten wird.
- `use-glyph-orientation`
  - : Bei SVG-Elementen führt dieses Schlüsselwort zur Verwendung der Werte der veralteten SVG-Eigenschaften `glyph-orientation-vertical` und `glyph-orientation-horizontal`.

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

- Die anderen CSS-Eigenschaften, die mit vertikalen Schriften zusammenhängen: {{cssxref("writing-mode")}}, {{cssxref("text-combine-upright")}}, und {{cssxref("unicode-bidi")}}.
- [CSS Logische Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- [Stil von vertikalem Text (Chinesisch, Japanisch, Koreanisch und Mongolisch)](https://www.w3.org/International/articles/vertical-text/)
- Umfassende Testergebnisse zur Browserunterstützung: <https://w3c.github.io/i18n-tests/results/horizontal-in-vertical.html#text_orientation>
