---
title: mask-mode
slug: Web/CSS/mask-mode
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Die **`mask-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft wird auf das Element gesetzt, das maskiert wird. Sie legt fest, ob die durch {{cssxref("mask-image")}} definierte Maske als Luminanz- oder Alphamaske behandelt wird.

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

Die Eigenschaft `mask-mode` kann mehrere durch Komma getrennte `<masking-mode>` Schlüsselwort-Werte annehmen, darunter:

- `alpha`
  - : Gibt an, dass die Alpha-Werte (Transparenz) des Maskenbildes verwendet werden sollen.

- `luminance`
  - : Gibt an, dass die [Luminanz (Helligkeit)](#luminanz_verstehen) Werte des Maskenbildes verwendet werden sollen.

- `match-source`
  - : Gibt an, dass der Maskentyp durch die Quelle bestimmt wird. Dies ist der Standardwert der Eigenschaft.
    - Wenn die {{cssxref("mask-image")}} auf ein SVG-{{svgelement("mask")}} verweist, wird dessen {{cssxref("mask-type")}} Eigenschaftswert verwendet oder das {{SVGAttr("mask-type")}} Attribut, falls vorhanden. Wenn keines explizit gesetzt ist, lautet dieser Wert standardmäßig `luminance`.
    - Wenn die Maskenbildquelle ein {{cssxref("image")}} oder ein {{cssxref("gradient")}} ist, werden die `alpha`-Werte des Maskenbildes verwendet.

## Beschreibung

Eine Maske überträgt ihre Transparenz und abhängig vom Maskentyp auch ihre Luminanz auf das Element, das sie maskiert.
Wenn die Maske vom Typ {{cssxref("&lt;image&gt;")}} ist, bestimmen standardmäßig die Alpha-Werte des Maskenbildes die Sichtbarkeit jedes Teils des maskierten Elements: Wo die Maske undurchsichtig ist, ist der entsprechende Teil des maskierten Elements sichtbar; wo die Maske halbtransparent ist, ist das Element es ebenfalls, wobei diese Bereiche des Elements verborgen werden. Dies ist das Standardverhalten für `<image>` Masken, wenn die `mask-mode` Eigenschaft auf `match-source` gesetzt oder standardmäßig auf diesen Wert eingestellt ist, und es ist immer der Fall, wenn `mask-mode` explizit auf `alpha` eingestellt ist.

### Luminanz verstehen

Im Falle von `luminance` Masken hängt die Sichtbarkeit des maskierten Elements sowohl von der Deckkraft der Maske als auch von der Helligkeit der Farbe der undurchsichtigen Bereiche ab. Weiße (100% Luminanz) undurchsichtige Bereiche (Alpha = 1) werden maskiert und sichtbar sein, und schwarze Bereiche (0% Luminanz) transparent (Alpha = 0) werden abgeschnitten. Bereiche mit Farben zwischen Weiß und Schwarz und mit teilweiser Deckkraft werden teilweise maskiert sein, was die Luminanz und Alpha-Transparenz jeder Farbe, die die Maske bildet, widerspiegelt.

Die Deckkraft einer `luminance` Maske wird durch die `R`, `G`, `B` und `A` Werte einer `rgb()` Farbe unter Verwendung der Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel ist die Farbe `green` `#008000` oder `rgb(0% 50% 0% / 1)`. In einer `luminance` Maske wird jeder Bereich, der durch eine solide `green` Maske maskiert wird, `35.77%` undurchsichtig sein. Wenn der `mask-mode` für diese Maske auf `alpha` eingestellt ist, da `green` eine vollständig undurchsichtige Farbe ist, wird der maskierte Bereich `100%` undurchsichtig sein.

### Mehrere Werte

Jeder `mask-mode` Wert ist eine durch Komma getrennte Liste von Werten. Wenn mehrere Werte vorhanden sind, entspricht jeder Wert einer Maskenschicht an derselben Position in der {{cssxref("mask-image")}} Eigenschaft. Die Werte definieren, ob die zugehörigen Maskenbilder als `luminance` oder `alpha` Maske behandelt werden.

### `match-source` verstehen

Im Fall von `match-source` hängt es davon ab, ob `luminance` oder `alpha` verwendet wird, vom Maskenmodus der Maskenquelle ab. Wenn der `mask-image` Eigenschaftswerte ein Verweis auf ein SVG {{svgelement("mask")}} Element ist, wird der `<mask>` Element's {{cssxref("mask-type")}} Eigenschaftswert verwendet. Wenn keine CSS `mask-type` Eigenschaft auf dem `<mask>` Element gesetzt ist, wird der Wert des `<mask>` Element's {{svgattr("mask-type")}} Attributs verwendet, falls vorhanden und unterstützt. Wenn keines explizit gesetzt ist, lautet dieser Wert standardmäßig `luminance`; jedoch nur im Falle des `<mask>` Elements als Maskenquelle. Andernfalls, wie bereits erwähnt, wenn die Maskenbildquelle ein {{cssxref("image")}} ist, anstatt eines SVG `<mask>`, werden die `alpha` Werte der Maskenschicht verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung und Werte

Dieses Beispiel demonstriert die grundlegende Verwendung und unterschiedliche Werte der `mask-mode` Eigenschaft.

#### HTML

Wir fügen drei `<div>` Elemente hinzu, um die drei aufgezählten `mask-mode` Schlüsselwort-Werte zu demonstrieren.

```html
<div class="alpha">ALPHA</div>
<div class="luminance">LUMINANCE</div>
<div class="matchSource">MATCH-SOURCE</div>
```

#### CSS

Jedes `<div>` erhält denselben Hintergrund und dasselbe Maskierungsbild. Der einzige Unterschied zwischen jedem `<div>` ist der Wert der `mask-mode` Eigenschaft:

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

Da die Maskenquelle ein `<image>` und nicht ein SVG `<mask>` ist, löst sich der `match-source` Wert zu `alpha` auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-type")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask")}} Kurzschrift
- [Einführung in CSS Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
