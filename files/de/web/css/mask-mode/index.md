---
title: mask-mode
slug: Web/CSS/mask-mode
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`mask-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft wird auf das zu maskierende Element gesetzt. Sie legt fest, ob die durch {{cssxref("mask-image")}} definierte Maske als Luminanz- oder Alphamaske behandelt wird.

## Syntax

```css
/* Keyword values */
mask-mode: alpha;
mask-mode: luminance;
mask-mode: match-source;

/* Multiple values */
mask-mode: alpha, match-source;

/* Global values */
mask-mode: inherit;
mask-mode: initial;
mask-mode: revert;
mask-mode: revert-layer;
mask-mode: unset;
```

### Werte

Die `mask-mode` Eigenschaft kann mehrere durch Kommas getrennte `<masking-mode>` Schlüsselwortwerte annehmen, darunter:

- `alpha`
  - : Gibt an, dass die Alphawerte (Transparenz) des Maskenbildes verwendet werden sollen.

- `luminance`
  - : Gibt an, dass die [Luminanz (Helligkeit)](#luminanz_verstehen) Werte des Maskenbildes verwendet werden sollen.

- `match-source`
  - : Gibt an, dass die Art der Maske durch die Quelle bestimmt wird. Dies ist der Standardwert der Eigenschaft.
    - Wenn die {{cssxref("mask-image")}} eine SVG {{svgelement("mask")}} referenziert, wird der Wert der {{cssxref("mask-type")}} Eigenschaft oder das {{SVGAttr("mask-type")}} Attribut, falls vorhanden, verwendet. Wenn keines explizit gesetzt ist, ist der Standardwert `luminance`.
    - Wenn die Maskenbildquelle ein {{cssxref("image")}} oder ein {{cssxref("gradient")}} ist, werden die `alpha` Werte des Maskenbildes verwendet.

## Beschreibung

Eine Maske überträgt ihre Transparenz und je nach Maskentyp auch ihre Luminanz auf das zu maskierende Element.
Wenn die Maske vom Typ {{cssxref("&lt;image&gt;")}} ist, bestimmen standardmäßig die Alphawerte des Maskenbildes die Sichtbarkeit jedes Teils des maskierten Elements: Wo die Maske undurchsichtig ist, ist auch der entsprechende Teil des maskierten Elements sichtbar; wo die Maske durchscheinend ist, ist das Element ebenfalls durchscheinend und diese Bereiche des Elements sind verborgen. Dies ist das Standardverhalten für `<image>` Masken, wenn die `mask-mode` Eigenschaft auf oder standardmäßig auf `match-source` gesetzt ist, und es ist immer der Fall, wenn die `mask-mode` explizit auf `alpha` gesetzt ist.

### Luminanz verstehen

Im Fall von `luminance` Masken hängt die Sichtbarkeit des maskierten Elements sowohl von der Deckkraft der Maske als auch von der Helligkeit der Farbe der undurchsichtigen Bereiche ab. Weiße (100% Luminanz) undurchsichtige Bereiche (alpha = 1) werden maskiert und sind sichtbar, und schwarze Bereiche (0% Luminanz) transparent (alpha = 0) werden abgeschnitten. Bereiche mit Farben zwischen Weiß und Schwarz und mit teilweiser Deckkraft werden teilweise maskiert, wobei die Luminanz und die Alphatransparenz jeder die Maske bildenden Farbe widergespiegelt werden.

Die Deckkraft einer `luminance` Maske wird durch die `R`, `G`, `B` und `A` Werte einer `rgb()` Farbe mit der Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Beispielsweise entspricht die Farbe `grün` `#008000` oder `rgb(0% 50% 0% / 1)`. In einer `luminance` Maske wird ein Bereich, der von einer festen `grünen` Maske abgedeckt wird, `35.77%` undurchsichtig sein. Wenn die `mask-mode` für diese Maske auf `alpha` gesetzt ist, da `grün` eine vollständig undurchsichtige Farbe ist, wird das maskierte Gebiet `100%` undurchsichtig sein.

### Mehrere Werte

Jeder `mask-mode` Wert ist eine durch Kommas getrennte Liste von Werten. Wenn mehrere Werte vorhanden sind, entspricht jeder Wert einer Maskenschicht in derselben Position in der {{cssxref("mask-image")}} Eigenschaft. Die Werte definieren, ob die zugehörigen Maskenbilder als `luminance` oder `alpha` Maske behandelt werden.

### `match-source` verstehen

Im Fall von `match-source` hängt es davon ab, ob `luminance` oder `alpha` verwendet wird, je nachdem, welcher Maskenmodus der Maskenquelle vorliegt. Wenn die Werteigenschaft `mask-image` ein Referenz auf ein SVG {{svgelement("mask")}} Element ist, wird der {{cssxref("mask-type")}} Eigenschaftswert des `<mask>` Elements verwendet. Wenn keine CSS `mask-type` Eigenschaft auf dem `<mask>` Element gesetzt ist, wird der Wert des {{svgattr("mask-type")}} Attributs des `<mask>` Elements verwendet, falls vorhanden und unterstützt. Wenn keiner explizit gesetzt ist, ist dieser Wert standardmäßig `luminance`, aber nur im Fall des `<mask>` Elements als Maskenquelle. Andernfalls, wie zuvor erwähnt, wenn die Maskenbildquelle ein {{cssxref("image")}} und nicht ein SVG `<mask>` ist, wird der `alpha` Wert des Maskenbildes verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung und Werte

Dieses Beispiel zeigt die grundlegende Verwendung und die verschiedenen Werte der `mask-mode` Eigenschaft.

#### HTML

Wir fügen drei `<div>` Elemente ein, damit wir die drei aufgezählten `mask-mode` Schlüsselwortwerte demonstrieren können.

```html
<div class="alpha">ALPHA</div>
<div class="luminance">LUMINANCE</div>
<div class="matchSource">MATCH-SOURCE</div>
```

#### CSS

Jedem `<div>` wird das gleiche Hintergrund- und Maskenbild zugewiesen. Der einzige Unterschied zwischen jedem `<div>` besteht im Wert der `mask-mode` Eigenschaft:

```css
div {
  background: blue linear-gradient(red, blue);
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mdn.svg);
}

.alpha {
  mask-mode: alpha;
}

.luminance {
  mask-mode: luminance;
}

.matchSource {
  mask-mode: match-source;
}
```

```css hidden
div {
  width: 227px;
  height: 200px;
  float: left;
  text-align: center;
  line-height: 65px;
  color: white;
  text-shadow: 1px 1px 2px black;
  font-family: sans-serif;
}
```

#### Ergebnisse

{{EmbedLiveSample("Usage and values", "", "250px")}}

Da die Maskenquelle ein `<image>` und kein SVG `<mask>` ist, wird der `match-source` Wert zu `alpha`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-type")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask")}} Kurzform
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklaration mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
