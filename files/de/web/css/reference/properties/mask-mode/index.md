---
title: "`mask-mode` CSS property"
short-title: mask-mode
slug: Web/CSS/Reference/Properties/mask-mode
l10n:
  sourceCommit: 4ad860d817cf6d8ca24f41b3846b29e158934d27
---

Die **`mask-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft wird auf das zu maskierende Element gesetzt. Sie legt fest, ob die von der {{cssxref("mask-image")}} definierte Maskenreferenz als Luminanz- oder Alphamaske behandelt wird.

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

Die `mask-mode` Eigenschaft kann mehrere kommagetrennte `<masking-mode>` Schlüsselwortwerte annehmen, darunter:

- `alpha`
  - : Gibt an, dass die Alpha-(Transparenz-)Werte des Maskenbildes verwendet werden sollen.

- `luminance`
  - : Gibt an, dass die [Luminanz (Helligkeit)](#verständnis_der_luminanz) Werte des Maskenbildes verwendet werden sollen.

- `match-source`
  - : Gibt an, dass der Maskentyp durch die Quelle bestimmt wird. Dies ist der Standardwert der Eigenschaft.
    - Wenn die {{cssxref("mask-image")}} ein SVG {{svgelement("mask")}} referenziert, wird der Wert der {{cssxref("mask-type")}} Eigenschaft oder das {{SVGAttr("mask-type")}} Attribut (falls vorhanden) verwendet. Ist keines der beiden ausdrücklich festgelegt, wird dieser Wert standardmäßig auf `luminance` gesetzt.
    - Wenn die Maskenbildquelle ein {{cssxref("image")}} oder ein {{cssxref("gradient")}} ist, werden die `alpha`-Werte des Maskenbildes verwendet.

## Beschreibung

Eine Maske überträgt ihre Transparenz und, abhängig von ihrem Typ, ihre Luminanz auf das Element, das sie maskiert. Wenn die Maske vom Typ {{cssxref("image")}} ist, bestimmen standardmäßig die Alphawerte des Maskenbildes die Sichtbarkeit jedes Teils des maskierten Elements: Wo die Maske undurchsichtig ist, ist der entsprechende Teil des maskierten Elements sichtbar; wo die Maske durchscheinend ist, wird das Element ebenfalls teilweise verdeckt. Dies ist das Standardverhalten für `<image>` Masken, wenn die `mask-mode` Eigenschaft auf `match-source` gesetzt ist oder auf diesen Wert zurückfällt. Dies ist immer der Fall, wenn die `mask-mode` ausdrücklich auf `alpha` gesetzt ist.

### Verständnis der Luminanz

Im Falle von `luminance` Masken hängt die Sichtbarkeit des maskierten Elements sowohl von der Opazität der Maske als auch von der Helligkeit der Farbe der undurchsichtigen Bereiche ab. Weiße (100% Luminanz) undurchsichtige Bereiche (alpha = 1) werden maskiert und sichtbar, schwarze Bereiche (0% Luminanz) transparent (alpha = 0) werden ausgeschnitten. Bereiche mit Farben zwischen Weiß und Schwarz und mit teilweiser Opazität werden teilweise maskiert, wobei die Luminanz und Transparenz jeder Farbe der Maske reflektiert wird.

Die Opazität einer `luminance` Maske wird durch die `R`, `G`, `B`, und `A` Werte einer `rgb()`-Farbe unter Verwendung der Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel ist die Farbe `green` `#008000` oder `rgb(0% 50% 0% / 1)`. In einer `luminance` Maske wird jeder Bereich, der durch eine solide `green` Maske maskiert ist, `35.77%` undurchsichtig sein. Wenn der `mask-mode` für diese Maske auf `alpha` gesetzt ist, da `green` eine voll undurchsichtige Farbe ist, wird der maskierte Bereich `100%` undurchsichtig sein.

### Mehrere Werte

Jeder `mask-mode` Wert ist eine kommagetrennte Liste von Werten. Wenn mehrere Werte vorhanden sind, entspricht jeder Wert einer Maskenschicht in der gleichen Position in der {{cssxref("mask-image")}} Eigenschaft. Die Werte definieren, ob die zugehörigen Maskenbilder als `luminance` oder `alpha` Maske behandelt werden.

### Verständnis von `match-source`

Im Falle von `match-source` hängt es von der Maskenart der Maskenquelle ab, ob `luminance` oder `alpha` verwendet wird. Wenn die `mask-image` Eigenschaftswerte eine Referenz auf ein SVG {{svgelement("mask")}} Element sind, wird der Wert der {{cssxref("mask-type")}} Eigenschaft des `<mask>` Elements verwendet. Wenn keine CSS `mask-type` Eigenschaft auf dem `<mask>` Element gesetzt ist, wird der Wert des {{svgattr("mask-type")}} Attributs des `<mask>` Elements verwendet, falls vorhanden und unterstützt. Wenn keines ausdrücklich gesetzt ist, wird dieser Wert standardmäßig auf `luminance` gesetzt; jedoch nur im Fall des `<mask>` Elements als Maskenquelle. Andernfalls, wie zuvor erwähnt, wenn die Maskenbildquelle ein {{cssxref("image")}} und nicht ein SVG `<mask>` ist, werden die `alpha` Werte der Maskenschichtbilder verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Nutzung und Werte

Dieses Beispiel demonstriert die grundlegende Verwendung und verschiedene Werte der `mask-mode` Eigenschaft.

#### HTML

Wir fügen drei `<div>` Elemente ein, um die drei aufgezählten `mask-mode` Schlüsselwortwerte zu demonstrieren.

```html
<div class="alpha">ALPHA</div>
<div class="luminance">LUMINANCE</div>
<div class="matchSource">MATCH-SOURCE</div>
```

#### CSS

Jedem `<div>` wird das gleiche Hintergrund- und Maskenbild gegeben. Der einzige Unterschied zwischen jedem `<div>` ist der Wert der `mask-mode` Eigenschaft:

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

Da die Maskenquelle ein `<image>` und keine SVG `<mask>` ist, löst sich der `match-source` Wert in `alpha` auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-type")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask")}} Kurzschreibweise
- [Einführung in das CSS-Masking](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklarieren von mehreren Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/Guides/Masking) Modul
