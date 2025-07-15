---
title: mask-type
slug: Web/CSS/mask-type
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`mask-type`** [CSS](/de/docs/Web/CSS) Eigenschaft wird auf das SVG {{svgElement("mask")}} Element angewendet. Sie legt fest, ob der _Luminanz_ (Helligkeit) oder _Alpha_ (Transparenz) Inhalt der Maske verwendet werden soll. Diese Eigenschaft kann durch die {{cssxref("mask-mode")}} Eigenschaft überschrieben werden. Die `mask-type` Eigenschaft hat keine Auswirkung auf Bild- oder Verlaufs-Masken.

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
  - : Gibt an, dass die Alpha- (Transparenz-) Werte der `<mask>` verwendet werden sollten.
- `luminance`
  - : Gibt an, dass die [Luminanz- (Helligkeits-) Werte](#luminanz_verstehen) der `<mask>` verwendet werden sollten.

## Beschreibung

Die `mask-type` Eigenschaft ist nur für das SVG `<mask>` Element relevant. Wenn Sie `mask-type: luminance` einstellen, wird die Maske auf Basis der Helligkeit jedes Teils der Maske verwendet; wenn Sie `mask-type: alpha` einstellen, wird die Transparenz oder Opazität jedes Teils der Maske verwendet.

### Standardverhalten

Standardmäßig verwendet das SVG `<mask>` Element `mask-type: luminance`. Das bedeutet, dass sowohl die Farbe als auch die Transparenz des Maskeninhalts das Maskieren beeinflussen. Ob die Maske blickdicht ist, hängt teilweise von der Helligkeit der Farbe der undurchsichtigen Bereiche ab:

- Vollständig undurchsichtige weiße Bereiche (100% Luminanz) werden maskiert und sichtbar.
- Schwarze (0% Luminanz) oder vollständig transparente Bereiche werden abgeschnitten und unsichtbar.
- Bereiche mit mittleren Luminanzwerten werden teilweise maskiert, was sowohl die Luminanz oder Helligkeit der Maskenfarbe als auch die Alpha-Transparenz jedes Bereichs der Maske widerspiegelt.

### Luminanz verstehen

Die Opazität einer `luminance` Maske wird durch die `R`, `G`, `B` und `A` Werte einer `rgb()` Farbe mit folgender Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel hat die Farbe `green` (`#008000` oder `rgb(0% 50% 0% / 1)`) einen Luminanzwert von `35.77%`. Jeder Bereich, der von einer soliden `green` Luminanzmaske maskiert wird, wird `35.77%` sichtbar sein. Wenn der `mask-type` auf `alpha` gesetzt ist, wird die gleiche vollständig undurchsichtige `green` Farbe den maskierten Bereich `100%` sichtbar machen.

Wenn das SVG `<mask>` Element `fill="rgb(0 0 0 / 0.5)"` hat, was einem 50% transparenten Schwarz entspricht, wird die entsprechende Form auf dem maskierten Element bei 50% Opazität angezeigt, wenn `mask-type` auf `alpha` gesetzt ist, da der Alpha-Wert `0.5` (50% Opazität) ist. Aber wenn der `mask-type` standardmäßig oder als `luminance` gesetzt ist, wird der maskierte Bereich vollständig abgeschnitten und unsichtbar, da seine Luminanz `0` ist.

### Effekt von `mask-mode` auf `mask-type`

Während die `mask-type` Eigenschaft auf das SVG `<mask>` Element gesetzt wird, wird die {{cssxref("mask-mode")}} Eigenschaft auf das zu maskierende Element gesetzt (das Element, auf das Sie die Maske anwenden).
Wenn die Maskenbildquelle nicht eine SVG `<mask>` ist, hat diese Eigenschaft keine Wirkung.

Der Standardwert von `mask-mode` ist `match-source`, was bedeutet, dass der Browser den `mask-type` Wert vom `<mask>` Element verwendet, um zu bestimmen, wie es interpretiert werden soll. Wenn `mask-mode` auf einen anderen Wert als `match-source` gesetzt ist, hat dieser Wert Vorrang und überschreibt den `mask-type` Wert der angewendeten Maske.

Wenn das `<mask>` als Quellbild der Maske definiert ist und der `mask-mode` als oder standardmäßig `match-source` gesetzt ist, wird der `mask-mode` auf den `mask-type` Wert des `<mask>` Elements aufgelöst: `luminance` oder `alpha`. Wenn nicht explizit gesetzt, lautet der Standardwert `luminance`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung der `mask-type` Eigenschaft

Dieses Beispiel zeigt, wie die `mask-type` Eigenschaft verwendet wird und den Effekt ihrer verschiedenen Werte.

#### HTML

Wir haben zwei Bilder eingefügt, die maskiert werden. Abgesehen von ihren Klassennamen sind die beiden Bilder identisch.
Wir haben auch ein SVG mit zwei `<mask>` Elementen eingefügt. Abgesehen von ihren `id` Werten sind die beiden Masken ebenfalls identisch: jede hat eine grüne und weiße Herzform und einen halbtransparenten weiß-schwarz gefüllten Kreis.

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
  mask-image: url(#alphaMask);
}

img.luminanceMaskType {
  mask-image: url(#luminanceMask);
}
```

#### Ergebnis

{{EmbedLiveSample("Examples", "", "250")}}

Da der Standardwert für die `mask-mode` Eigenschaft `match-source` ist, verwendet die erste Maske nur die Alphakanäle, um die Maske zu definieren: das Weiß und Grün sind vollständig undurchsichtig, und die 50% weißen und schwarzen Farben sind zu 50% undurchsichtig, da nur die Alpha-Werte der Farben zählen. Im zweiten Beispiel wird die Luminanz der Farben verwendet, um die Opazität der Maske zu bestimmen, wobei Weiß heller ist als Grün und halbtransparentes Weiß heller ist als halbtransparentes Schwarz.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask")}}
- {{cssxref("mask-mode")}}
- [Einführung in das CSS-Maskieren](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
- SVG {{svgattr("mask-type")}} Attribut
