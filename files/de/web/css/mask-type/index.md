---
title: mask-type
slug: Web/CSS/mask-type
l10n:
  sourceCommit: ce1dfc470d18fa6ba694a5b8bd5c657914e57cc3
---

{{CSSRef}}

Die **`mask-type`** [CSS](/de/docs/Web/CSS) Eigenschaft wird auf das SVG {{svgElement("mask")}} Element angewendet. Sie definiert, ob der _Luminanz_-(Helligkeit-) oder _Alpha_-(Transparenz-) Inhalt der Maske verwendet werden soll. Diese Eigenschaft kann durch die {{cssxref("mask-mode")}} Eigenschaft überschrieben werden. Die `mask-type` Eigenschaft hat keinen Einfluss auf Bild- oder Verlaufsmasken.

## Syntax

```css
/* Keyword values */
mask-type: luminance;
mask-type: alpha;

/* Global values */
mask-type: inherit;
mask-type: initial;
mask-type: revert;
mask-type: revert-layer;
mask-type: unset;
```

### Werte

- `alpha`
  - : Gibt an, dass die Alpha- (Transparenz-) Werte der `<mask>` verwendet werden sollen.
- `luminance`
  - : Gibt an, dass die [Luminanz- (Helligkeits-) Werte](#luminanz_verstehen) der `<mask>` verwendet werden sollen.

## Beschreibung

Die `mask-type` Eigenschaft ist nur relevant für das SVG `<mask>` Element. Wenn Sie `mask-type: luminance` setzen, verwendet die Maske die Helligkeit jedes Teils der Maske. Wenn Sie `mask-type: alpha` setzen, wird die Transparenz oder Opazität jedes Teils der Maske verwendet.

### Standardverhalten

Standardmäßig verwendet das SVG `<mask>` Element `mask-type: luminance`. Das bedeutet, dass sowohl die Farbe als auch die Transparenz des Maskeninhalts das Maskieren beeinflussen. Ob die Maske opak ist, hängt teilweise von der Helligkeit der Farbe der opaken Bereiche ab:

- Vollständig deckende weiße Bereiche (100% Luminanz) werden maskiert und sichtbar.
- Schwarze (0% Luminanz) oder völlig transparente Bereiche werden ausgeschnitten und unsichtbar.
- Bereiche mit mittleren Luminanzwerten werden teilweise maskiert, wobei sowohl die Luminanz oder Helligkeit der Maskenfarbe als auch die Alpha-Transparenz jedes Bereichs der Maske berücksichtigt werden.

### Luminanz verstehen

Die Opazität einer `luminance` Maske wird durch die `R`, `G`, `B` und `A` Werte einer `rgb()` Farbe mit der folgenden Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel hat die Farbe `green` (`#008000` oder `rgb(0% 50% 0% / 1)`) einen Luminanzwert von `35.77%`. Jeder Bereich, der durch eine feste `green` Luminanzmaske maskiert wird, ist zu `35.77%` sichtbar. Wenn der `mask-type` auf `alpha` gesetzt ist, macht die gleiche vollständig opake `green` Farbe den maskierten Bereich `100%` sichtbar.

Wenn das SVG `<mask>` Element `fill="rgb(0 0 0 / 0.5)"` hat, also ein zu 50% transparentes Schwarz ist, wird die entsprechende Form auf dem maskierten Element bei 50% Deckkraft angezeigt, wenn `mask-type` auf `alpha` gesetzt ist, weil der Alphawert `0.5` (50% Deckkraft) ist. Aber wenn der `mask-type` standardmäßig oder auf `luminance` gesetzt ist, wird der maskierte Bereich vollständig ausgeschnitten und unsichtbar, weil seine Luminanz `0` ist.

### Auswirkung von `mask-mode` auf `mask-type`

Während die `mask-type` Eigenschaft auf das SVG `<mask>` Element gesetzt wird, wird die {{cssxref("mask-mode")}} Eigenschaft auf das Element gesetzt, das maskiert wird (das Element, auf das Sie die Maske anwenden).
Wenn die Maskenbildquelle kein SVG `<mask>` ist, hat diese Eigenschaft keine Wirkung.

Der Standardwert von `mask-mode` ist `match-source`, was bedeutet, dass der Browser den `mask-type` Wert vom `<mask>` Element verwendet, um zu bestimmen, wie er interpretiert werden soll. Wenn `mask-mode` auf einen anderen Wert als `match-source` gesetzt ist, hat dieser Wert Vorrang und überschreibt den `mask-type` Wert der angewendeten Maske.

Wenn das `<mask>` als Maskenbildquelle definiert ist und der `mask-mode` als `match-source` gesetzt ist oder standardmäßig darauf, wird der `mask-mode` auf den `mask-type` Wert des `<mask>` Elements aufgelöst: `luminance` oder `alpha`. Wenn nicht explizit gesetzt, ist der Wert standardmäßig auf `luminance`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung der `mask-type` Eigenschaft

Dieses Beispiel demonstriert, wie die `mask-type` Eigenschaft verwendet wird und die Auswirkung ihrer verschiedenen Werte.

#### HTML

Wir haben zwei Bilder eingefügt, die maskiert werden sollen. Abgesehen von ihren Klassennamen sind die beiden Bilder identisch.
Wir haben auch ein SVG mit zwei `<mask>` Elementen eingefügt. Abgesehen von ihren `id` Werten sind die beiden Masken ebenfalls identisch: Jede hat eine grüne und weiße Herzform und einen halbtransparenten, weiß-schwarz gefüllten Kreis.

```html
<img
  class="alphaMaskType"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  class="luminanceMaskType"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />

<svg height="0" width="0">
  <mask id="alphaMask">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
    <circle
      cx="170"
      cy="170"
      r="40"
      fill="rgb(0 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 0.5)"
      stroke-width="20" />
  </mask>
  <mask id="luminanceMask">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
    <circle
      cx="170"
      cy="170"
      r="40"
      fill="rgb(0 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 0.5)"
      stroke-width="20" />
  </mask>
</svg>
```

#### CSS

Wir wenden die `mask-type` Eigenschaft auf die `<mask>` Elemente an und dann wenden wir die `<mask>` Elemente und die Maskenquelle auf die Bilder an.

```css
mask#alphaMask {
  mask-type: alpha;
}

mask#luminanceMask {
  mask-type: luminance;
}

img.alphaMaskType {
  mask-image: url(#alphaMask);
}

img.luminanceMaskType {
  mask-image: url(#luminanceMask);
}
```

#### Ergebnis

{{EmbedLiveSample("Examples", "", "250")}}

Da der Standardwert für die `mask-mode` Eigenschaft `match-source` ist, verwendet die erste Maske nur die Alphakanäle, um die Maske zu definieren: Das Weiße und Grüne sind vollständig opak, und die 50% weißen und schwarzen Farben sind 50% opak, weil nur der Alphawert der Farben zählt. Das zweite Beispiel verwendet die Luminanz der Farben, um die Opazität der Maske zu bestimmen, wobei Weiß heller als Grün ist und halbtransparentes Weiß heller als halbtransparentes Schwarz.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask")}}
- {{cssxref("mask-mode")}}
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
- SVG {{svgattr("mask-type")}} Attribut
