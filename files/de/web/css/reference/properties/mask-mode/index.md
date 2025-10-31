---
title: mask-mode
slug: Web/CSS/Reference/Properties/mask-mode
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`mask-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft wird auf das Element gesetzt, das maskiert wird. Sie legt fest, ob die durch das {{cssxref("mask-image")}} definierte Maskenreferenz als Luminanz- oder Alphamaske behandelt wird.

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
  - : Gibt an, dass die [Luminanz (Helligkeit)](#luminanz_verstehen) des Maskenbildes verwendet werden soll.

- `match-source`
  - : Gibt an, dass der Typ der Maske durch die Quelle bestimmt wird. Dies ist der Standardwert der Eigenschaft.
    - Wenn das {{cssxref("mask-image")}} auf ein SVG {{svgelement("mask")}} verweist, wird dessen Wert der Eigenschaft {{cssxref("mask-type")}} oder das Attribut {{SVGAttr("mask-type")}}, falls vorhanden, verwendet. Wenn keines explizit gesetzt ist, wird dieser Wert standardmäßig als `luminance` angenommen.
    - Wenn die Quelle des Maskenbildes ein {{cssxref("image")}} oder ein {{cssxref("gradient")}} ist, werden die `alpha` Werte des Maskenbildes verwendet.

## Beschreibung

Eine Maske überträgt ihre Transparenz und, abhängig vom Maskentyp, ihre Luminanz auf das Element, das sie maskiert.
Wenn die Maske vom Typ {{cssxref("&lt;image&gt;")}} ist, bestimmen standardmäßig die Alphawerte des Maskenbildes die Sichtbarkeit jedes Teils des maskierten Elements: Wo die Maske undurchsichtig ist, ist der entsprechende Teil des maskierten Elements sichtbar; wo die Maske durchscheinend ist, ist das Element ebenfalls durchscheinend, wobei diese Bereiche des Elements verborgen sind. Dies ist das Standardverhalten für `<image>` Masken, wenn die `mask-mode` Eigenschaft auf oder auf `match-source` zurückgesetzt ist, und es ist immer der Fall, wenn die `mask-mode` Eigenschaft explizit auf `alpha` gesetzt ist.

### Luminanz verstehen

Im Fall von `luminance` Masken hängt die Sichtbarkeit des maskierten Elements sowohl von der Opazität der Maske als auch von der Helligkeit der Farbe der undurchsichtigen Bereiche ab. Weiße (100 % Luminanz) undurchsichtige Bereiche (alpha = 1) werden maskiert und sichtbar sein, und schwarze Bereiche (0 % Luminanz) transparent (alpha = 0) werden ausgeschnitten. Bereiche mit Farben zwischen Weiß und Schwarz und mit partieller Opazität werden teilweise maskiert und spiegeln die Luminanz und Alpha-Transparenz jeder Farbe wider, die die Maske bildet.

Die Opazität einer `luminance` Maske wird durch die `R`, `G`, `B` und `A` Werte einer `rgb()` Farbe unter Verwendung der Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel ist die Farbe `grün` `#008000` oder `rgb(0% 50% 0% / 1)`. In einer `luminance` Maske wird jeder Bereich, der von einer festen `grün` Maske maskiert ist, `35,77%` undurchsichtig sein. Wenn der `mask-mode` für diese Maske auf `alpha` gesetzt ist, da `grün` eine völlig undurchsichtige Farbe ist, wird der maskierte Bereich `100%` undurchsichtig sein.

### Mehrere Werte

Jeder `mask-mode` Wert ist eine durch Kommas getrennte Liste von Werten. Wenn mehrere Werte vorhanden sind, entspricht jeder Wert einer Maskenebene in der gleichen Position in der {{cssxref("mask-image")}} Eigenschaft. Die Werte definieren, ob die zugehörigen Maskenbilder als `luminance` oder als `alpha` Maske behandelt werden.

### `match-source` verstehen

Im Fall von `match-source` hängt es davon ab, ob `luminance` oder `alpha` verwendet wird, welcher Maskenmodus der Maskenquelle zugrunde liegt. Wenn die `mask-image` Eigenschaft auf ein SVG {{svgelement("mask")}} Element verweist, wird der Wert der {{cssxref("mask-type")}} Eigenschaft des `<mask>` Elements verwendet. Wenn auf dem `<mask>` Element keine CSS `mask-type` Eigenschaft gesetzt ist, wird der Wert des {{svgattr("mask-type")}} Attributs des `<mask>` Elements verwendet, falls vorhanden und unterstützt. Wenn keines explizit gesetzt ist, wird dieser Wert standardmäßig als `luminance` angenommen, jedoch nur im Fall des `<mask>` Elements als Maskenquelle. Andernfalls, wie zuvor erwähnt, wenn die Maskenbildquelle ein {{cssxref("image")}}, anstatt eines SVG `<mask>`, ist, werden die `alpha` Werte des Maskenbildelementes verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung und Werte

Dieses Beispiel zeigt die grundlegende Verwendung und die verschiedenen Werte der `mask-mode` Eigenschaft.

#### HTML

Wir fügen drei `<div>` Elemente ein, um die drei aufgezählten `mask-mode` Schlüsselwortwerte zu demonstrieren.

```html
<div class="alpha">ALPHA</div>
<div class="luminance">LUMINANCE</div>
<div class="matchSource">MATCH-SOURCE</div>
```

#### CSS

Jedes `<div>` wird mit demselben Hintergrund und demselben Maskierungsbild versehen. Der einzige Unterschied zwischen jedem `<div>` ist der Wert der `mask-mode` Eigenschaft:

```css
div {
  background: blue linear-gradient(red, blue);
  mask-image: url("https://mdn.github.io/shared-assets/images/examples/mdn.svg");
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

Da die Maskenquelle ein `<image>` und kein SVG `<mask>` ist, löst der `match-source` Wert in `alpha` auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-type")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask")}} Shorthand
- [Einführung in CSS Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklaration mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
