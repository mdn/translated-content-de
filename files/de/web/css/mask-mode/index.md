---
title: mask-mode
slug: Web/CSS/mask-mode
l10n:
  sourceCommit: be28a11d9b2f6ab4ad0e5947e72a13ce16d4a6f2
---

{{CSSRef}}

Die **`mask-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft wird auf das Element angewendet, das maskiert wird. Sie legt fest, ob die durch die {{cssxref("mask-image")}} definierte Maskenreferenz als Luminanz- oder Alphamaske behandelt wird.

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

Die `mask-mode` Eigenschaft kann mehrere durch Komma getrennte `<masking-mode>` Schlüsselwortwerte annehmen, darunter:

- `alpha`
  - : Gibt an, dass die Alpha- (Transparenz-) Werte des Maskenbildes verwendet werden sollen.

- `luminance`
  - : Gibt an, dass die [Luminanz- (Helligkeits-)](#verständnis_von_luminanz) Werte des Maskenbildes verwendet werden sollen.

- `match-source`
  - : Gibt an, dass der Typ der Maske durch die Quelle bestimmt wird. Dies ist der Standardwert der Eigenschaft.
    - Wenn die {{cssxref("mask-image")}} ein SVG {{svgelement("mask")}} referenziert, wird der Wert der {{cssxref("mask-type")}} Eigenschaft oder das {{SVGAttr("mask-type")}} Attribut verwendet, falls vorhanden. Wenn keines explizit gesetzt ist, ist dieser Wert standardmäßig `luminance`.
    - Wenn die Maskenbildquelle ein {{cssxref("image")}} oder ein {{cssxref("gradient")}} ist, werden die `alpha`-Werte des Maskenbildes verwendet.

## Beschreibung

Eine Maske überträgt ihre Transparenz und je nach Maskentyp deren Luminanz auf das maskierte Element.
Wenn die Maske vom Typ {{cssxref("&lt;image&gt;")}} ist, bestimmen standardmäßig die Alpha-Werte des Maskenbildes die Sichtbarkeit jedes Teils des maskierten Elements: Wo die Maske undurchsichtig ist, ist der entsprechende Teil des maskierten Elements sichtbar; wo die Maske durchscheinend ist, ist es das Element auch, wobei diese Bereiche des Elements verborgen sind. Dies ist das Standardverhalten für `<image>`-Masken, wenn die `mask-mode` Eigenschaft auf `match-source` gesetzt ist oder dazu standardmäßig gesetzt wird, und es ist immer der Fall, wenn der `mask-mode` explizit auf `alpha` gesetzt wird.

### Verständnis von Luminanz

Bei `luminance`-Masken hängt die Sichtbarkeit des maskierten Elements sowohl von der Deckkraft der Maske als auch von der Helligkeit der Farbe der undurchsichtigen Bereiche ab. Weiße (100% Luminanz) undurchsichtige Bereiche (Alpha = 1) werden maskiert und sichtbar, und schwarze Bereiche (0% Luminanz) transparent (Alpha = 0) werden ausgeblendet. Bereiche mit Farben zwischen Weiß und Schwarz und mit teilweiser Deckkraft werden teilweise maskiert, wobei die Luminanz und die Alpha-Transparenz jeder Farbe, die die Maske ausmacht, reflektiert wird.

Die Deckkraft einer `luminance`-Maske wird durch die `R`, `G`, `B`, und `A` Werte einer `rgb()`-Farbe bestimmt, wobei die Formel verwendet wird:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel ist die Farbe `green` `#008000` oder `rgb(0% 50% 0% / 1)`. In einer `luminance`-Maske wird jeder Bereich, der von einer soliden `green`-Maske maskiert wird, `35,77%` undurchsichtig sein. Wenn der `mask-mode` für diese Maske auf `alpha` gesetzt ist, da `green` eine vollständig undurchsichtige Farbe ist, wird der maskierte Bereich `100%` undurchsichtig sein.

### Mehrere Werte

Jeder `mask-mode` Wert ist eine durch Komma getrennte Liste von Werten. Wenn mehrere Werte vorhanden sind, entspricht jeder Wert einer Maskenschicht an derselben Position in der {{cssxref("mask-image")}} Eigenschaft. Die Werte definieren, ob die zugeordneten Maskenbilder als `luminance`- oder `alpha`-Maske behandelt werden.

### Verständnis von `match-source`

Im Fall von `match-source` hängt die Verwendung von `luminance` oder `alpha` vom Maskenmodus der Maskenquelle ab. Wenn die `mask-image` Eigenschaftswert eine Referenz zu einem SVG-{{svgelement("mask")}}-Element ist, wird der `<mask>`-Elementwert der {{cssxref("mask-type")}}-Eigenschaft verwendet. Wenn auf dem `<mask>`-Element keine CSS-`mask-type`-Eigenschaft gesetzt ist, wird der Wert des `<mask>`-Element-{{svgattr("mask-type")}}-Attributs verwendet, falls vorhanden und unterstützt. Wenn keines explizit gesetzt ist, ist dieser Wert standardmäßig `luminance`; aber nur im Fall des `<mask>`-Elements als Maskenquelle. Andernfalls, wie zuvor erwähnt, wenn die Maskenbildquelle ein {{cssxref("image")}}, anstatt eines SVG-`<mask>` ist, werden die `alpha`-Werte der Maskenschichtbilder verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Nutzung und Werte

Dieses Beispiel zeigt die grundlegende Nutzung und verschiedene Werte der `mask-mode` Eigenschaft.

#### HTML

Wir enthalten drei `<div>`-Elemente, um die drei aufgezählten `mask-mode` Schlüsselwortwerte zu demonstrieren.

```html
<div class="alpha">ALPHA</div>
<div class="luminance">LUMINANCE</div>
<div class="matchSource">MATCH-SOURCE</div>
```

#### CSS

Jedes `<div>` wird mit demselben Hintergrund- und Maskierungsbild versehen. Der einzige Unterschied zwischen den `<div>` ist der Wert der `mask-mode` Eigenschaft:

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

Da die Maskenquelle ein `<image>` und kein SVG-`<mask>` ist, löst sich der `match-source`-Wert zu `alpha` auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-type")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask")}} Kurzschreibweise
- [Einführung in CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS Masking](/de/docs/Web/CSS/CSS_masking) Modul
