---
title: mask-type
slug: Web/CSS/Reference/Properties/mask-type
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`mask-type`** [CSS](/de/docs/Web/CSS) Eigenschaft wird auf das SVG-{{svgElement("mask")}}-Element angewendet. Sie definiert, ob der _Luminanz_ (Helligkeit) oder der _Alpha_ (Transparenz) Inhalt der Maske verwendet wird. Diese Eigenschaft kann durch die {{cssxref("mask-mode")}} Eigenschaft überschrieben werden. Die `mask-type` Eigenschaft hat keinen Effekt auf Bild- oder Verlaufs-Masken.

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
  - : Gibt an, dass die Alpha (Transparenz) Werte des `<mask>` verwendet werden sollen.
- `luminance`
  - : Gibt an, dass die [Luminanz (Helligkeits-) Werte](#verständnis_der_luminanz) des `<mask>` verwendet werden sollen.

## Beschreibung

Die `mask-type` Eigenschaft ist nur für das SVG-`<mask>`-Element relevant. Wenn Sie `mask-type: luminance` festlegen, verwendet die Maske, wie hell jeder Teil der Maske ist; wenn Sie `mask-type: alpha` festlegen, wird verwendet, wie transparent oder opak jeder Teil der Maske ist.

### Standardverhalten

Standardmäßig verwendet das SVG `<mask>`-Element `mask-type: luminance`. Das bedeutet, dass sowohl die Farbe als auch die Transparenz des Maskeninhalts das Maskieren beeinflussen. Ob die Maske opak ist, hängt teilweise von der Helligkeit der Farbe der opaken Bereiche ab:

- Vollständig opake weiße Bereiche (100% Luminanz) werden maskiert und sichtbar sein.
- Schwarze (0% Luminanz) oder vollständig transparente Bereiche werden abgeschnitten und unsichtbar sein.
- Bereiche mit mittleren Luminanzwerten werden teilweise maskiert sein, was sowohl die Luminanz oder Helligkeit der Maskenfarbe als auch die Alpha-Transparenz jedes Bereichs der Maske widerspiegelt.

### Verständnis der Luminanz

Die Opazität einer `luminance` Maske wird durch die `R`, `G`, `B` und `A` Werte einer `rgb()` Farbe unter Verwendung der folgenden Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel hat die Farbe `green` (`#008000` oder `rgb(0% 50% 0% / 1)`) einen Luminanzwert von `35,77%`. Jeder Bereich, der durch eine feste `green` Luminanzmaske maskiert wird, wird zu `35,77%` sichtbar sein. Wenn `mask-type` auf `alpha` gesetzt wird, macht die gleiche vollständig opake `green` Farbe den maskierten Bereich `100%` sichtbar.

Wenn das SVG-`<mask>`-Element `fill="rgb(0 0 0 / 0.5)"` hat, was ein 50% transparentes Schwarz ist, wird die entsprechende Form auf dem maskierten Element bei `mask-type` auf `alpha` mit 50% Opazität angezeigt, da die Alpha-Werte `0,5` (50% Opazität) betragen. Aber wenn der `mask-type` auf `luminance` gesetzt ist oder standardmäßig so eingestellt ist, wird der maskierte Bereich vollständig abgeschnitten und unsichtbar, da seine Luminanz `0` ist.

### Effekt von `mask-mode` auf `mask-type`

Während die `mask-type` Eigenschaft auf dem SVG-`<mask>`-Element gesetzt ist, wird die {{cssxref("mask-mode")}} Eigenschaft auf dem Element gesetzt, das maskiert wird (das Element, auf das Sie die Maske anwenden).
Wenn die Maskenbildquelle kein SVG-`<mask>` ist, hat diese Eigenschaft keinen Effekt.

Der Standardwert von `mask-mode` ist `match-source`, was bedeutet, dass der Browser den `mask-type` Wert vom `<mask>` Element verwendet, um zu bestimmen, wie es interpretiert werden soll. Wenn `mask-mode` auf einen anderen Wert als `match-source` gesetzt ist, hat dieser Wert Vorrang und überschreibt den `mask-type` Wert der angewandten Maske.

Wenn das `<mask>` als Quelle des Maskenbilds definiert ist und der `mask-mode` als oder standardmäßig auf `match-source` gesetzt ist, wird der `mask-mode` auf den `mask-type` Wert des `<mask>`-Elements aufgelöst: `luminance` oder `alpha`. Wenn nicht explizit festgelegt, lautet der Standardwert `luminance`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung der `mask-type` Eigenschaft

Dieses Beispiel zeigt, wie die `mask-type` Eigenschaft verwendet wird und welcher Effekt durch ihre unterschiedlichen Werte erzielt wird.

#### HTML

Wir haben zwei Bilder eingefügt, die maskiert werden. Abgesehen von ihren Klassennamen sind die beiden Bilder identisch.
Wir haben auch ein SVG mit zwei `<mask>` Elementen eingefügt. Abgesehen von ihren `id`-Werten sind die beiden Masken ebenfalls identisch: Jedes hat eine grün-weiße Herzform und einen halbtransparenten, weiß-schwarz gefüllten Kreis.

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

Da der Standardwert für die `mask-mode` Eigenschaft `match-source` ist, verwendet die erste Maske nur die Alpha-Kanäle zur Definition der Maske: Die weißen und grünen Bereiche sind vollständig opak, und die 50% weißen und schwarzen Farben sind 50% opak, da nur der Alphawert der Farben zählt. Das zweite Beispiel verwendet die Luminanz der Farben, um die Transparenz der Maske zu bestimmen, wobei Weiß heller ist als Grün und halbtransparentes Weiß heller ist als halbtransparentes Schwarz.

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
