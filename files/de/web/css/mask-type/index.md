---
title: mask-type
slug: Web/CSS/mask-type
l10n:
  sourceCommit: ff31fa134873d7fc271ea37a020a5cf12f6f1dd8
---

{{CSSRef}}

Die **`mask-type`** [CSS](/de/docs/Web/CSS) Eigenschaft wird auf das SVG-{{svgElement("mask")}}-Element angewendet. Sie definiert, ob der _Luminanz-_ (Helligkeit) oder _Alpha-_ (Transparenz) Inhalt der Maske verwendet werden soll. Diese Eigenschaft kann durch die Eigenschaft {{cssxref("mask-mode")}} überschrieben werden. Die `mask-type` Eigenschaft hat keine Wirkung auf Bild- oder Verlaufs-Masken.

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
  - : Gibt an, dass die Alpha- (Transparenz) Werte der `<mask>` verwendet werden sollen.
- `luminance`
  - : Gibt an, dass die [Luminanz (Helligkeits-) Werte](#luminanz_verstehen) der `<mask>` verwendet werden sollen.

## Beschreibung

Die `mask-type` Eigenschaft ist nur für das SVG-`<mask>`-Element relevant. Wenn Sie `mask-type: luminance` festlegen, wird die Maske basierend auf der Helligkeit der einzelnen Teile der Maske erstellt; wenn Sie `mask-type: alpha` festlegen, wird die Transparenz oder Opazität der einzelnen Teile der Maske verwendet.

### Standardverhalten

Standardmäßig verwendet das SVG-`<mask>`-Element `mask-type: luminance`. Das bedeutet, dass sowohl die Farbe als auch die Transparenz des Maskeninhalts das Maskieren beeinflussen. Ob die Maske undurchsichtig ist, hängt teilweise von der Helligkeit der Farbe der undurchsichtigen Bereiche ab:

- Vollständig undurchsichtige weiße Bereiche (100% Luminanz) werden maskiert und sichtbar.
- Schwarze (0% Luminanz) oder vollständig transparente Bereiche werden abgeschnitten und unsichtbar.
- Bereiche mit mittleren Luminanzwerten werden teilweise maskiert, was sowohl die Luminanz oder Helligkeit der Maskenfarbe als auch die Alpha-Transparenz jedes Bereichs der Maske widerspiegelt.

### Luminanz verstehen

Die Opazität einer `luminance`-Maske wird durch die `R`-, `G`-, `B`- und `A`-Werte einer `rgb()`-Farbe mit folgender Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel hat die Farbe `green` (`#008000` oder `rgb(0% 50% 0% / 1)`) einen Luminanzwert von `35.77%`. Jeder Bereich, der von einer soliden `green` Luminanzmaske maskiert wird, wird `35.77%` sichtbar. Wenn der `mask-type` auf `alpha` gesetzt wird, wird der gleiche voll undurchsichtige `green`-Farbton den maskierten Bereich `100%` sichtbar machen.

Wenn das SVG-`<mask>`-Element `fill="rgb(0 0 0 / 0.5)"`, das zu 50% transparentes Schwarz ist, gesetzt hat, wird die entsprechende Form auf dem maskierten Element bei 50% Opazität dargestellt, wenn der `mask-type` auf `alpha` gesetzt ist, da der Alpha-Wert `0.5` (50% Opazität) ist. Aber wenn der `mask-type` standardmäßig auf `luminance` gesetzt ist oder gesetzt wird, wird der maskierte Bereich vollständig abgeschnitten und unsichtbar, weil seine Luminanz `0` ist.

### Effekt von `mask-mode` auf `mask-type`

Während die `mask-type` Eigenschaft auf dem SVG-`<mask>`-Element gesetzt ist, wird die Eigenschaft {{cssxref("mask-mode")}} auf dem zu maskierenden Element (dem Element, auf das die Maske angewendet wird) gesetzt.
Wenn die Maskenbildquelle keine SVG-`<mask>` ist, hat diese Eigenschaft keine Wirkung.

Der Standardwert von `mask-mode` ist `match-source`, was bedeutet, dass der Browser den `mask-type`-Wert aus dem `<mask>`-Element verwendet, um zu bestimmen, wie es interpretiert werden soll. Wenn `mask-mode` auf einen anderen Wert als `match-source` gesetzt wird, hat dieser Wert Vorrang und überschreibt den `mask-type`-Wert der angewendeten Maske.

Wenn die `<mask>` als Quellenbild der Maske definiert ist und der `mask-mode` als `match-source` gesetzt wird oder standardmäßig so gesetzt ist, wird der `mask-mode` zum `mask-type`-Wert des `<mask>`-Elements aufgelöst: `luminance` oder `alpha`. Wenn nicht explizit festgelegt, ist der Standardwert `luminance`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung der `mask-type` Eigenschaft

Dieses Beispiel zeigt, wie die `mask-type` Eigenschaft verwendet wird und welche Auswirkungen die verschiedenen Werte haben.

#### HTML

Wir haben zwei Bilder eingefügt, die maskiert werden. Abgesehen von ihren Klassennamen sind die beiden Bilder identisch.
Wir haben auch ein SVG mit zwei `<mask>`-Elementen eingefügt. Abgesehen von ihren `id`-Werten sind die beiden Masken ebenfalls identisch: Jede hat ein grünes und weißes Herz sowie einen halbtransparenten weiß-schwarz gefüllten Kreis.

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

Wir wenden die `mask-type` Eigenschaft auf die `<mask>`-Elemente an und dann die `<mask>`-Elemente und die Maskenquelle auf die Bilder.

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

Da der Standardwert für die `mask-mode` Eigenschaft `match-source` ist, verwendet die erste Maske nur die Alpha-Kanäle, um die Maske zu definieren: Die Farben Weiß und Grün sind vollständig undurchsichtig, und die 50% weißen und schwarzen Farben sind 50% undurchsichtig, da nur der Alpha-Wert der Farben wichtig ist. Das zweite Beispiel verwendet die Luminanz der Farben, um die Opazität der Maske zu bestimmen, wobei Weiß heller als Grün ist und halbtransparentes Weiß heller ist als halbtransparentes Schwarz.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask")}}
- {{cssxref("mask-mode")}}
- [CSS Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
- SVG {{svgattr("mask-type")}} Attribut
