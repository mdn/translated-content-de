---
title: mask-type
slug: Web/CSS/mask-type
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Die **`mask-type`** [CSS](/de/docs/Web/CSS) Eigenschaft wird auf das SVG {{svgElement("mask")}} Element angewendet. Sie definiert, ob der _Luminanz_ (Helligkeit) oder _Alpha_ (Transparenz) Inhalt der Maske verwendet werden soll. Diese Eigenschaft kann durch die {{cssxref("mask-mode")}} Eigenschaft überschrieben werden. Die `mask-type` Eigenschaft hat keine Auswirkungen auf Bild- oder Verlaufs-Masken.

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

Die `mask-type` Eigenschaft ist nur für das SVG `<mask>` Element relevant. Wenn Sie `mask-type: luminance` setzen, wird die Maske verwenden, wie hell jeder Teil der Maske ist; wenn Sie `mask-type: alpha` setzen, wird verwendet, wie transparent oder opak jeder Teil der Maske ist.

### Standardverhalten

Standardmäßig verwendet das SVG `<mask>` Element `mask-type: luminance`. Das bedeutet, dass sowohl die Farbe als auch die Transparenz des Maskeninhalts das Maskieren beeinflussen. Ob die Maske opak ist, hängt teilweise von der Helligkeit der Farbe der opaken Bereiche ab:

- Völlig opake weiße Bereiche (100% Luminanz) werden maskiert und sichtbar sein.
- Schwarze (0% Luminanz) oder völlig transparente Bereiche werden abgeschnitten und unsichtbar sein.
- Bereiche mit mittleren Luminanzwerten werden teilweise maskiert, wobei sowohl die Luminanz, oder Helligkeit der Maskenfarbe, als auch die Alpha-Transparenz jedes Bereichs der Maske reflektiert werden.

### Luminanz verstehen

Die Opazität einer `luminance` Maske wird durch die `R`, `G`, `B` und `A` Werte einer `rgb()` Farbe anhand der folgenden Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel hat die Farbe `green` (`#008000` oder `rgb(0% 50% 0% / 1)`) einen Luminanzwert von `35.77%`. Jeder Bereich, der durch eine solide `green` Luminanzmaske maskiert wird, wird `35.77%` sichtbar sein. Wenn `mask-type` auf `alpha` gesetzt ist, wird die gleiche völlig opake `green` Farbe den maskierten Bereich `100%` sichtbar machen.

Wenn das SVG `<mask>` Element `fill="rgb(0 0 0 / 0.5)"` hat, was ein 50% transparenter Schwarz ist, wird die entsprechende Form auf dem maskierten Element bei 50% Opazität angezeigt, wenn `mask-type` auf `alpha` gesetzt ist, da der Alphawert `0.5` (50% Opazität) ist. Aber wenn `mask-type` standardmäßig ist oder auf `luminance` gesetzt ist, wird der maskierte Bereich vollständig abgeschnitten und unsichtbar sein, da seine Luminanz `0` ist.

### Wirkung von `mask-mode` auf `mask-type`

Während die `mask-type` Eigenschaft auf das SVG `<mask>` Element gesetzt wird, wird die {{cssxref("mask-mode")}} Eigenschaft auf das Element gesetzt, das maskiert wird (das Element, auf das Sie die Maske anwenden).
Wenn die Maskenbildquelle kein SVG `<mask>` ist, hat diese Eigenschaft keine Wirkung.

Der Standardwert von `mask-mode` ist `match-source`, was bedeutet, dass der Browser den `mask-type` Wert vom `<mask>` Element verwendet, um zu bestimmen, wie es interpretiert werden soll. Wenn `mask-mode` auf einen anderen Wert als `match-source` gesetzt ist, hat dieser Wert Vorrang und überschreibt den `mask-type` Wert der angewendeten Maske.

Wenn das `<mask>` als die Maskenbildquelle definiert ist und `mask-mode` als oder standardmäßig auf `match-source` gesetzt ist, wird sich die `mask-mode` Eigenschaft auf den `mask-type` Wert des `<mask>` Elements auflösen: `luminance` oder `alpha`. Wenn nicht explizit gesetzt, ist der Wert standardmäßig auf `luminance`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden der `mask-type` Eigenschaft

Dieses Beispiel zeigt, wie die `mask-type` Eigenschaft verwendet wird und die Wirkung ihrer unterschiedlichen Werte.

#### HTML

Wir haben zwei Bilder eingefügt, die maskiert werden sollen. Abgesehen von ihren Klassennamen sind die beiden Bilder identisch.
Wir haben auch ein SVG mit zwei `<mask>` Elementen eingefügt. Abgesehen von ihren `id` Werten sind die beiden Masken ebenfalls identisch: jede hat eine grüne und weiße Herzform und einen halbtransparenten, weiß-schwarz gefüllten Kreis.

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

Wir wenden die `mask-type` Eigenschaft auf die `<mask>` Elemente an und dann die `<mask>` Elemente und die Maskenquelle auf die Bilder.

```css
mask#alphaMask {
  mask-type: alpha;
}

mask#luminanceMask {
  mask-type: luminance;
}

img.alphaMaskType {
  mask-image: url("#alphaMask");
}

img.luminanceMaskType {
  mask-image: url("#luminanceMask");
}
```

#### Ergebnis

{{EmbedLiveSample("Examples", "", "250")}}

Da der Standardwert für die `mask-mode` Eigenschaft `match-source` ist, verwendet die erste Maske nur die Alpha-Kanäle, um die Maske zu definieren: das Weiß und Grüne sind völlig opak, und die 50% weißen und schwarzen Farben sind 50% opak, weil nur der Alpha-Wert der Farben zählt. Das zweite Beispiel verwendet die Luminanz der Farben, um die Opazität der Maske zu bestimmen, wobei Weiß heller als Grün und halbtransparentes Weiß heller als halbtransparentes Schwarz ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask")}}
- {{cssxref("mask-mode")}}
- [Einführung in das CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
- SVG {{svgattr("mask-type")}} Attribut
