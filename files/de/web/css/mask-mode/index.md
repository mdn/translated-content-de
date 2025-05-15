---
title: mask-mode
slug: Web/CSS/mask-mode
l10n:
  sourceCommit: ce1dfc470d18fa6ba694a5b8bd5c657914e57cc3
---

{{CSSRef}}

Die **`mask-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft wird auf dem zu maskierenden Element gesetzt. Sie legt fest, ob die durch {{cssxref("mask-image")}} definierte Maskenreferenz als Luminanz- oder Alphamaske behandelt wird.

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

Die `mask-mode` Eigenschaft kann mehrere durch Kommata getrennte `<masking-mode>` Schlüsselwortwerte annehmen, einschließlich:

- `alpha`

  - : Gibt an, dass die Alphawerte (Transparenz) des Maskenbildes verwendet werden sollen.

- `luminance`

  - : Gibt an, dass die [Luminanz (Helligkeit)](#luminanz_verstehen) Werte des Maskenbildes verwendet werden sollen.

- `match-source`
  - : Gibt an, dass der Maskentyp von der Quelle bestimmt wird. Dies ist der Standardwert der Eigenschaft.
    - Wenn die {{cssxref("mask-image")}} ein SVG {{svgelement("mask")}} referenziert, wird ihr {{cssxref("mask-type")}} Eigenschaftswert verwendet, oder ihr {{SVGAttr("mask-type")}} Attribut, falls vorhanden. Wenn keines explizit gesetzt ist, wird dieser Wert standardmäßig zu `luminance`.
    - Wenn die Maskenbildquelle ein {{cssxref("image")}} oder ein {{cssxref("gradient")}} ist, werden die `alpha` Werte des Maskenbildes verwendet.

## Beschreibung

Eine Maske überträgt ihre Transparenz und, je nach Maskentyp, auch ihre Luminanz auf das maskierte Element. Wenn die Maske vom Typ {{cssxref("&lt;image&gt;")}} ist, bestimmen standardmäßig die Alphawerte des Maskenbildes die Sichtbarkeit jedes Teils des maskierten Elements: Wo die Maske undurchsichtig ist, ist der entsprechende Teil des maskierten Elements sichtbar; wo die Maske durchscheinend ist, ist es auch das Element, wobei diese Bereiche des Elements ausgeblendet werden. Dies ist das Standardverhalten für `<image>` Masken, wenn die `mask-mode` Eigenschaft auf `match-source` gesetzt ist oder standardmäßig darauf zurückfällt, und es ist immer der Fall, wenn `mask-mode` explizit auf `alpha` gesetzt ist.

### Luminanz verstehen

Im Fall von `luminance` Masken hängt die Sichtbarkeit des maskierten Elements sowohl von der Opazität der Maske als auch von der Helligkeit der Farbe der undurchsichtigen Bereiche ab. Weiße (100% Luminanz) undurchsichtige Bereiche (alpha = 1) werden maskiert und sichtbar sein, während schwarze Bereiche (0% Luminanz) transparent (alpha = 0) abgeschnitten werden. Bereiche mit Farben zwischen Weiß und Schwarz und mit teilweiser Opazität werden teilweise maskiert, was die Luminanz und Alphatransparenz jeder Farbe widerspiegelt, die die Maske ausmacht.

Die Opazität einer `luminance` Maske wird durch die `R`, `G`, `B` und `A` Werte einer `rgb()` Farbe mit der Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel ist die Farbe `green` `#008000` oder `rgb(0% 50% 0% / 1)`. In einer `luminance` Maske wird jeder Bereich, der durch eine solide `green` Maske maskiert wird, zu `35.77%` undurchsichtig sein. Wenn der `mask-mode` für diese Maske auf `alpha` gesetzt ist, da `green` eine vollständig undurchsichtige Farbe ist, wird der maskierte Bereich `100%` undurchsichtig sein.

### Mehrere Werte

Jeder `mask-mode` Wert ist eine durch Kommas getrennte Liste von Werten. Wenn mehrere Werte vorhanden sind, entspricht jeder Wert einer Maskenebene an derselben Position in der {{cssxref("mask-image")}} Eigenschaft. Die Werte definieren, ob die zugehörigen Maskenbilder als `luminance` oder `alpha` Masken behandelt werden.

### `match-source` verstehen

Im Fall von `match-source` hängt die Verwendung von `luminance` oder `alpha` vom Maskenmodus der Maskenquelle ab. Wenn der Wert der `mask-image` Eigenschaft ein Verweis auf ein SVG {{svgelement("mask")}} Element ist, wird der {{cssxref("mask-type")}} Eigenschaftswert des `<mask>` Elements verwendet. Wenn keine CSS `mask-type` Eigenschaft auf dem `<mask>` Element gesetzt ist, wird der Wert des {{svgattr("mask-type")}} Attributs des `<mask>` Elements verwendet, falls vorhanden und unterstützt. Wenn keines explizit gesetzt ist, wird dieser Wert standardmäßig auf `luminance` gesetzt; aber nur im Fall des `<mask>` Elements als Maskenquelle. Andernfalls, wie bereits erwähnt, wenn die Maskenbildquelle ein {{cssxref("image")}} und kein SVG `<mask>` ist, werden die `alpha` Werte des Maskenschichtebildes verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung und Werte

Dieses Beispiel zeigt die grundlegende Verwendung und die verschiedenen Werte der `mask-mode` Eigenschaft.

#### HTML

Wir fügen drei `<div>` Elemente hinzu, um die drei aufgezählten `mask-mode` Schlüsselwortwerte zu demonstrieren.

```html
<div class="alpha">ALPHA</div>
<div class="luminance">LUMINANCE</div>
<div class="matchSource">MATCH-SOURCE</div>
```

#### CSS

Jedem `<div>` wird derselbe Hintergrund und dasselbe Maskenbild bereitgestellt. Der einzige Unterschied zwischen jedem `<div>` ist der Wert der `mask-mode` Eigenschaft:

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

Da die Maskenquelle ein `<image>` und kein SVG `<mask>` ist, wird der `match-source` Wert zu `alpha` aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-type")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask")}} Kurzform
- [Einführung in CSS Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
