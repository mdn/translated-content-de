---
title: mask-mode
slug: Web/CSS/mask-mode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`mask-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft wird auf das Element gesetzt, das maskiert wird. Sie legt fest, ob die durch die {{cssxref("mask-image")}} definierte Maskenreferenz als Luminanz- oder Alphamaske behandelt wird.

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

Die `mask-mode` Eigenschaft kann mehrere, durch Kommas getrennte `<masking-mode>` Schlüsselwortwerte annehmen, darunter:

- `alpha`

  - : Gibt an, dass die Alpha- (Transparenz-) Werte des Maskenbildes verwendet werden sollen.

- `luminance`

  - : Gibt an, dass die [Luminanz (Helligkeit)](#luminance_verstehen) Werte des Maskenbildes verwendet werden sollen.

- `match-source`
  - : Gibt an, dass der Maskentyp durch die Quelle bestimmt wird. Dies ist der Standardwert der Eigenschaft.
    - Wenn die {{cssxref("mask-image")}} auf eine SVG {{svgelement("mask")}} verweist, wird deren {{cssxref("mask-type")}} Eigenschaftswert oder, falls vorhanden, das {{SVGAttr("mask-type")}} Attribut verwendet. Wenn keines explizit gesetzt ist, standardisiert dieser Wert auf `luminance`.
    - Wenn die Maskenbildquelle ein {{cssxref("image")}} oder ein {{cssxref("gradient")}} ist, werden die `alpha` Werte des Maskenbildes verwendet.

## Beschreibung

Eine Maske überträgt ihre Transparenz und je nach Maskentyp ihre Luminanz auf das Element, das sie maskiert.
Ist die Maske vom Typ {{cssxref("&lt;image&gt;")}}, bestimmen standardmäßig die Alpha-Werte des Maskenbildes die Sichtbarkeit jeder Teil des maskierten Elements: wo die Maske undurchsichtig ist, ist der entsprechende Teil des maskierten Elements sichtbar; wo die Maske durchscheinend ist, ist es das Element auch, wobei diese Bereiche des Elements verborgen sind. Dies ist das Standardverhalten für `<image>` Masken, wenn die `mask-mode` Eigenschaft auf `match-source` gesetzt oder standardisiert ist, und es ist immer der Fall, wenn das `mask-mode` explizit auf `alpha` gesetzt ist.

### Luminance verstehen

Bei `luminance` Masken hängt die Sichtbarkeit des maskierten Elements sowohl von der Opazität der Maske als auch von der Helligkeit der Farbe der undurchsichtigen Bereiche ab. Weiße (100% Luminanz) undurchsichtige Bereiche (alpha = 1) werden maskiert und sichtbar, und schwarze Bereiche (0% Luminanz) transparent (alpha = 0) werden abgeschnitten. Bereiche mit Farben zwischen Weiß und Schwarz und mit teilweiser Opazität werden teilweise maskiert, reflektieren die Luminanz und Alpha-Transparenz jeder Farbe, die die Maske bildet.

Die Opazität einer `luminance` Maske wird mit den `R`, `G`, `B` und `A` Werten einer `rgb()` Farbe mit der Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel ist die Farbe `green` `#008000` oder `rgb(0% 50% 0% / 1)`. In einer `luminance` Maske wird jeder Bereich, der von einer festen `green` Maske maskiert wird, `35,77%` undurchsichtig sein. Wenn der `mask-mode` für diese Maske auf `alpha` gesetzt ist, da `green` eine vollständig undurchsichtige Farbe ist, wird der maskierte Bereich `100%` undurchsichtig sein.

### Mehrere Werte

Jeder `mask-mode` Wert ist eine durch Kommas getrennte Liste von Werten. Wenn mehrere Werte vorhanden sind, entspricht jeder Wert einer Maskenschicht in derselben Position in der {{cssxref("mask-image")}} Eigenschaft. Die Werte definieren, ob die assoziierten Maskenbilder als `luminance` oder `alpha` Maske behandelt werden.

### `match-source` verstehen

Im Fall von `match-source` hängt es davon ab, ob `luminance` oder `alpha` verwendet wird, von der Maskierungsart der Maskenquelle ab. Wenn die `mask-image` Eigenschaftswerte eine Referenz auf ein SVG {{svgelement("mask")}} Element ist, wird der `<mask>` Element {{cssxref("mask-type")}} Eigenschaftswert verwendet. Wenn keine CSS `mask-type` Eigenschaft auf dem `<mask>` Element gesetzt ist, wird der Wert des `<mask>` Element {{svgattr("mask-type")}} Attributs verwendet, falls vorhanden und unterstützt. Wenn keines explizit gesetzt ist, standardisiert dieser Wert auf `luminance`; aber nur im Fall des `<mask>` Elements als Maskenquelle. Andernfalls, wie zuvor erwähnt, wenn die Maskenbildquelle ein {{cssxref("image")}}, anstatt eines SVG `<mask>` ist, werden die `alpha` Werte des Maskenschichtbildes verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung und Werte

Dieses Beispiel zeigt die grundlegende Verwendung und verschiedene Werte der `mask-mode` Eigenschaft.

#### HTML

Wir fügen drei `<div>` Elemente ein, um die drei aufgelisteten `mask-mode` Schlüsselwortwerte zu demonstrieren.

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

Da die Maskenquelle ein `<image>` und kein SVG `<mask>` ist, löst sich der `match-source` Wert zu `alpha` auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-type")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask")}} Kürzung
- [Einführung in CSS Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
