---
title: mask-mode
slug: Web/CSS/mask-mode
l10n:
  sourceCommit: ff31fa134873d7fc271ea37a020a5cf12f6f1dd8
---

{{CSSRef}}

Die **`mask-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft wird auf das zu maskierende Element angewendet. Sie legt fest, ob die durch die {{cssxref("mask-image")}} definierte Maske als Luminanz- oder Alphamaske behandelt wird.

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

  - : Gibt an, dass die Alpha (Transparenz) Werte des Maskenbildes verwendet werden sollen.

- `luminance`

  - : Gibt an, dass die [Luminanz (Helligkeit)](#luminanz_verstehen) Werte des Maskenbildes verwendet werden sollen.

- `match-source`
  - : Gibt an, dass der Maskentyp durch die Quelle bestimmt wird. Dies ist der Standardwert der Eigenschaft.
    - Wenn die {{cssxref("mask-image")}} ein SVG {{svgelement("mask")}} referenziert, wird dessen {{cssxref("mask-type")}} Eigenschaftswert verwendet, oder sein {{SVGAttr("mask-type")}} Attribut, falls vorhanden. Wenn keiner ausdrücklich gesetzt ist, wird dieser Wert standardmäßig auf `luminance` gesetzt.
    - Wenn die Quelle des Maskenbildes ein {{cssxref("image")}} oder ein {{cssxref("gradient")}} ist, werden die `alpha` Werte des Maskenbildes verwendet.

## Beschreibung

Eine Maske überträgt ihre Transparenz und abhängig vom Maskentyp ihre Luminanz auf das von ihr maskierte Element.
Wenn die Maske vom Typ {{cssxref("&lt;image&gt;")}} ist, bestimmen standardmäßig die Alphawerte des Maskenbildes die Sichtbarkeit jedes Teils des maskierten Elements: Wo die Maske undurchsichtig ist, ist der entsprechende Teil des maskierten Elements sichtbar; wo die Maske durchsichtig ist, ist auch das Element teilweise sichtbar, wobei diese Bereiche des Elements versteckt sind. Dies ist das Standardverhalten für `<image>` Masken, wenn die `mask-mode` Eigenschaft auf `match-source` gesetzt ist oder auf diesen Wert zurückfällt, und es ist immer der Fall, wenn die `mask-mode` Eigenschaft ausdrücklich auf `alpha` gesetzt wird.

### Luminanz verstehen

Im Fall von `luminance` Masken hängt die Sichtbarkeit des maskierten Elements sowohl von der Opazität der Maske als auch von der Helligkeit der Farbe der undurchsichtigen Bereiche ab. Weiße (100% Luminanz) undurchsichtige Bereiche (alpha = 1) werden maskiert und sichtbar sein, und schwarze Bereiche (0% Luminanz) transparent (alpha = 0) werden abgeschnitten. Bereiche mit Farben zwischen Weiß und Schwarz und mit teilweiser Opazität werden teilweise maskiert, um die Luminanz und Alpha-Transparenz jeder Farbe, die die Maske bildet, widerzuspiegeln.

Die Opazität einer `luminance` Maske wird durch die `R`, `G`, `B` und `A` Werte einer `rgb()` Farbe mittels der Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel ist die Farbe `green` `#008000` oder `rgb(0% 50% 0% / 1)`. In einer `luminance` Maske wird jeder Bereich, der durch eine feste `green` Maske maskiert wird, `35.77%` undurchsichtig sein. Wenn der `mask-mode` für diese Maske auf `alpha` gesetzt ist, da `green` eine vollständig undurchsichtige Farbe ist, wird der maskierte Bereich `100%` undurchsichtig sein.

### Mehrere Werte

Jeder `mask-mode` Wert ist eine kommagetrennte Liste von Werten. Wenn mehrere Werte vorhanden sind, entspricht jeder Wert einer Maskenebene in der gleichen Position in der {{cssxref("mask-image")}} Eigenschaft. Die Werte definieren, ob die zugehörigen Maskenbilder als `luminance` oder als `alpha` Maske behandelt werden.

### `match-source` verstehen

Im Falle von `match-source` hängt es davon ab, ob `luminance` oder `alpha` verwendet wird, vom Maskenmodus der Maskenquelle ab. Wenn die `mask-image` Eigenschaftswerte ein Verweis auf ein SVG {{svgelement("mask")}} Element sind, wird der `<mask>` Element's {{cssxref("mask-type")}} Eigenschaftswert verwendet. Wenn keine CSS `mask-type` Eigenschaft auf das `<mask>` Element gesetzt ist, wird der Wert des `<mask>` Element's {{svgattr("mask-type")}} Attributs verwendet, falls vorhanden und unterstützt. Wenn keiner ausdrücklich gesetzt ist, wird dieser Wert standardmäßig auf `luminance` gesetzt, aber nur im Fall des `<mask>` Elements als Maskenquelle. Andernfalls, wie bereits erwähnt, wenn die Quelle des Maskenbildes ein {{cssxref("image")}} und kein SVG `<mask>` ist, werden die `alpha` Werte des Maskenebenenbildes verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung und Werte

Dieses Beispiel demonstriert die grundlegende Verwendung und die verschiedenen Werte der `mask-mode` Eigenschaft.

#### HTML

Wir fügen drei `<div>` Elemente ein, um die drei aufgelisteten `mask-mode` Schlüsselwortwerte zu demonstrieren.

```html
<div class="alpha">ALPHA</div>
<div class="luminance">LUMINANCE</div>
<div class="matchSource">MATCH-SOURCE</div>
```

#### CSS

Jedes `<div>` erhält denselben Hintergrund und dasselbe Maskenbild. Der einzige Unterschied zwischen jedem `<div>` ist der Wert der `mask-mode` Eigenschaft:

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

Da die Maskenquelle ein `<image>` und kein SVG `<mask>` ist, löst sich der Wert `match-source` zu `alpha` auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-type")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask")}} Kurzform
- [CSS Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
