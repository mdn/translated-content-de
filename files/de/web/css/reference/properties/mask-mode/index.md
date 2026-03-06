---
title: mask-mode
slug: Web/CSS/Reference/Properties/mask-mode
l10n:
  sourceCommit: b65091ba804acb13233eef3c545502f9038b6a80
---

Die **`mask-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft wird auf dem Element gesetzt, das maskiert wird. Sie legt fest, ob die durch {{cssxref("mask-image")}} definierte Maskenreferenz als Luminanz- oder Alphamaske behandelt wird.

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

Die Eigenschaft `mask-mode` kann mehrere kommagetrennte `<masking-mode>` Schlüsselwort-Werte annehmen, darunter:

- `alpha`
  - : Gibt an, dass die Alpha-(Transparenz-)Werte des Maskenbildes verwendet werden sollten.

- `luminance`
  - : Gibt an, dass die [Luminanz (Helligkeit)](#luminanz_verstehen) Werte des Maskenbildes verwendet werden sollten.

- `match-source`
  - : Gibt an, dass der Maskentyp durch die Quelle bestimmt wird. Dies ist der Standardwert der Eigenschaft.
    - Wenn die {{cssxref("mask-image")}} auf ein SVG {{svgelement("mask")}} verweist, wird dessen {{cssxref("mask-type")}} Eigenschaftswert verwendet oder dessen {{SVGAttr("mask-type")}} Attribut, falls vorhanden. Ist keines von beiden explizit gesetzt, ist dieser Wert standardmäßig `luminance`.
    - Wenn die Maskenbildquelle ein {{cssxref("image")}} oder ein {{cssxref("gradient")}} ist, werden die `alpha` Werte des Maskenbildes verwendet.

## Beschreibung

Eine Maske überträgt ihre Transparenz und je nach Maskentyp ihre Luminanz auf das Element, das sie maskiert.
Wenn die Maske vom Typ {{cssxref("image")}} ist, bestimmen standardmäßig die Alpha-Werte des Maskenbildes die Sichtbarkeit jedes Teils des maskierten Elements: Wo die Maske undurchsichtig ist, ist der entsprechende Teil des maskierten Elements sichtbar; wo die Maske durchsichtig ist, ist das Element ebenfalls, wobei diese Bereiche des Elements verborgen werden. Dies ist das Standardverhalten für `<image>`-Masken, wenn die `mask-mode` Eigenschaft auf `match-source` gesetzt ist oder standardmäßig auf `match-source` gesetzt ist, und es ist immer der Fall, wenn der `mask-mode` explizit auf `alpha` gesetzt ist.

### Luminanz verstehen

Im Fall von `luminance`-Masken hängt die Sichtbarkeit des maskierten Elements sowohl von der Deckkraft der Maske als auch von der Helligkeit der Farbe der undurchsichtigen Bereiche ab. Weiße (100 % Luminanz) undurchsichtige Bereiche (alpha = 1) werden maskiert und sichtbar sein, und schwarze Bereiche (0 % Luminanz) transparent (alpha = 0) werden abgeschnitten. Bereiche mit Farben zwischen Weiß und Schwarz und mit teilweiser Deckkraft werden teilweise maskiert, was die Luminanz und Alphatransparenz jeder Farbe widerspiegelt, die die Maske bildet.

Die Deckkraft einer `luminance`-Maske wird durch die `R`, `G`, `B` und `A` Werte einer `rgb()`-Farbe mit der Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel ist die Farbe `green` `#008000` oder `rgb(0% 50% 0% / 1)`. In einer `luminance`-Maske wird jeder Bereich, der von einer festen `green` Maske maskiert wird, `35.77%` undurchsichtig sein. Wenn der `mask-mode` für diese Maske auf `alpha` gesetzt ist, da `green` eine vollständig undurchsichtige Farbe ist, wird der maskierte Bereich `100%` undurchsichtig sein.

### Mehrere Werte

Jeder `mask-mode` Wert ist eine durch Kommas getrennte Liste von Werten. Wenn mehrere Werte vorhanden sind, entspricht jeder Wert einer Maskenschicht an derselben Position in der {{cssxref("mask-image")}} Eigenschaft. Die Werte definieren, ob die zugeordneten Maskenbilder als `luminance` oder `alpha` Maske behandelt werden.

### `match-source` verstehen

Im Fall von `match-source` hängt es davon ab, ob `luminance` oder `alpha` verwendet wird, wie der Maskenmodus der Maskenquelle eingestellt ist. Wenn die `mask-image` Eigenschaftswerte auf ein SVG {{svgelement("mask")}} Element verweisen, wird der {{cssxref("mask-type")}} Eigenschaftswert des `<mask>` Elements verwendet. Wenn keine CSS `mask-type` Eigenschaft auf dem `<mask>` Element gesetzt ist, wird der Wert des {{svgattr("mask-type")}} Attributs des `<mask>` Elements verwendet, falls vorhanden und unterstützt. Wenn keiner explizit gesetzt ist, ist dieser Wert standardmäßig `luminance`; aber nur im Fall des `<mask>` Elements als Maskenquelle. Andernfalls, wie bereits erwähnt, wenn die Maskenbildquelle ein {{cssxref("image")}} ist, und nicht ein SVG `<mask>`, werden die `alpha` Werte des Maskenschichtbildes verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung und Werte

Dieses Beispiel demonstriert die grundlegende Verwendung und die verschiedenen Werte der `mask-mode` Eigenschaft.

#### HTML

Wir fügen drei `<div>` Elemente hinzu, um die drei aufgezählten `mask-mode` Schlüsselwort-Werte zu demonstrieren.

```html
<div class="alpha">ALPHA</div>
<div class="luminance">LUMINANCE</div>
<div class="matchSource">MATCH-SOURCE</div>
```

#### CSS

Jedem `<div>` wird derselbe Hintergrund und dasselbe Maskenbild zugewiesen. Der einzige Unterschied zwischen jedem `<div>` ist der Wert der `mask-mode` Eigenschaft:

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

Da die Maskenquelle ein `<image>` und kein SVG `<mask>` ist, wird der `match-source` Wert auf `alpha` aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-type")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask")}} Kurzschreibweise
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS-Maskierungsmodul](/de/docs/Web/CSS/Guides/Masking)
