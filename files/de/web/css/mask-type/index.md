---
title: mask-type
slug: Web/CSS/mask-type
l10n:
  sourceCommit: d4af249d9ac24fa65a419b2fb94b6358ac763511
---

{{CSSRef}}

Die **`mask-type`** [CSS](/de/docs/Web/CSS) Eigenschaft bezieht sich auf das SVG-{{svgElement("mask")}}-Element. Sie definiert, ob die _Leuchtdichte_ (Helligkeit) oder der _Alphakanal_ (Transparenz) des Maskeninhalts verwendet werden soll. Diese Eigenschaft kann durch die {{cssxref("mask-mode")}}-Eigenschaft überschrieben werden. Die `mask-type`-Eigenschaft hat keine Auswirkung auf Bild- oder Verlaufsmasken.

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
  - : Gibt an, dass die Alpha- (Transparenz-) Werte des `<mask>` verwendet werden sollen.
- `luminance`
  - : Gibt an, dass die [Leuchtdichte- (Helligkeits-) Werte](#understanding-luminance) des `<mask>` verwendet werden sollen.

## Beschreibung

Die `mask-type`-Eigenschaft ist nur für das SVG-`<mask>`-Element relevant. Wenn Sie `mask-type: luminance` festlegen, verwendet die Maske die Helligkeit jedes Teils der Maske; bei `mask-type: alpha` wird die Transparenz oder Opazität jedes Teils der Maske verwendet.

### Standardverhalten

Standardmäßig verwendet das SVG-`<mask>`-Element `mask-type: luminance`. Dies bedeutet, dass sowohl die Farbe als auch die Transparenz des Maskeninhalts die Maskierung beeinflussen. Ob die Maske undurchsichtig ist, hängt teilweise von der Helligkeit der Farbe der undurchsichtigen Bereiche ab:

- Vollständig undurchsichtige weiße Bereiche (100 % Leuchtdichte) werden maskiert und sichtbar.
- Schwarze (0 % Leuchtdichte) oder vollständig transparente Bereiche werden ausgeschnitten und unsichtbar.
- Bereiche mit mittlerer Leuchtdichte werden teilweise maskiert, wobei sowohl die Leuchtdichte als auch die Helligkeit der Maskenfarbe sowie die Alpha-Transparenz jedes Bereichs der Maske reflektiert werden.

### Leuchtdichte verstehen

Die Opazität einer `luminance`-Maske wird durch die `R`, `G`, `B` und `A`-Werte einer `rgb()`-Farbe mit der folgenden Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel hat die Farbe `green` (`#008000` oder `rgb(0% 50% 0% / 1)`) einen Leuchtdichtewert von `35,77%`. Jeder Bereich, der von einer soliden grünen Leuchtdichte-Maske maskiert wird, wird `35,77%` sichtbar. Wenn der `mask-type` auf `alpha` gesetzt ist, macht die gleiche vollständig undurchsichtige grüne Farbe den maskierten Bereich `100%` sichtbar.

Wenn das SVG-`<mask>`-Element `fill="rgb(0 0 0 / 0.5)"` hat, was ein 50% transparentes Schwarz ist, wird die entsprechende Form auf dem maskierten Element bei 50% Deckkraft angezeigt, wenn `mask-type` auf `alpha` gesetzt ist, da der Alphawert `0.5` (50% Deckkraft) beträgt. Ist jedoch der `mask-type` standardmäßig oder wird als `luminance` festgelegt, wird der maskierte Bereich vollständig ausgeschnitten und unsichtbar, da seine Leuchtdichte `0` ist.

### Auswirkung von `mask-mode` auf `mask-type`

Während die `mask-type`-Eigenschaft auf dem SVG-`<mask>`-Element festgelegt wird, wird die {{cssxref("mask-mode")}}-Eigenschaft auf das zu maskierende Element angewendet (das Element, auf das die Maske angewendet wird).
Wenn die Maskenbildquelle kein SVG-`<mask>` ist, hat diese Eigenschaft keine Auswirkungen.

Der Standardwert von `mask-mode` ist `match-source`, was bedeutet, dass der Browser den `mask-type`-Wert aus dem `<mask>`-Element verwendet, um zu bestimmen, wie er interpretiert werden soll. Wenn `mask-mode` auf einen anderen Wert als `match-source` gesetzt ist, hat dieser Wert Vorrang und überschreibt den `mask-type`-Wert der angewendeten Maske.

Ist das `<mask>` als Maskenbildquelle definiert und `mask-mode` ist als oder standardmäßig auf `match-source` festgelegt, wird `mask-mode` auf den `mask-type`-Wert des `<mask>`-Elements aufgelöst: `luminance` oder `alpha`. Wenn nicht explizit festgelegt, wird der Wert standardmäßig auf `luminance` gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung der `mask-type`-Eigenschaft

Dieses Beispiel zeigt, wie Sie die `mask-type`-Eigenschaft verwenden und die Auswirkungen ihrer unterschiedlichen Werte.

#### HTML

Wir haben zwei Bilder eingefügt, die maskiert werden sollen. Abgesehen von ihren Klassennamen sind die beiden Bilder identisch.
Wir haben auch ein SVG mit zwei `<mask>`-Elementen eingefügt. Abgesehen von ihren `id`-Werten sind die beiden Masken ebenfalls identisch: Jede hat eine grüne und weiße Herzform und einen halbtransparenten weiß-schwarz gefüllten Kreis.

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

Wir wenden die `mask-type`-Eigenschaft auf die `<mask>`-Elemente an und wenden dann die `<mask>`-Elemente und die Maskenquelle auf die Bilder an.

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

Da der Standardwert für die `mask-mode`-Eigenschaft `match-source` ist, verwendet die erste Maske nur die Alphakanäle, um die Maske zu definieren: Das Weiße und Grüne sind vollständig undurchsichtig, und die 50% weißen und schwarzen Farben sind 50% undurchsichtig, da nur der Alphawert der Farben von Bedeutung ist. Das zweite Beispiel verwendet die Leuchtdichte der Farben, um die Opazität der Maske zu bestimmen, wobei Weiß heller als Grün ist und halbtransparentes Weiß heller als halbtransparentes Schwarz ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask")}}
- {{cssxref("mask-mode")}}
- [CSS Masking](/de/docs/Web/CSS/CSS_masking) Modul
- SVG {{svgattr("mask-type")}} Attribut
