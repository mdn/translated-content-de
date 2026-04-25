---
title: "`mask-type` CSS property"
short-title: mask-type
slug: Web/CSS/Reference/Properties/mask-type
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`mask-type`** [CSS](/de/docs/Web/CSS)-Eigenschaft wird auf das SVG-{{svgElement("mask")}}-Element angewendet. Sie definiert, ob der _Luminanz_- (Helligkeit) oder _Alpha_- (Transparenz) Inhalt der Maske verwendet werden soll. Diese Eigenschaft kann durch die {{cssxref("mask-mode")}}-Eigenschaft überschrieben werden. Die `mask-type`-Eigenschaft hat keinen Einfluss auf Bild- oder Verlaufs-Masken.

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
  - : Gibt an, dass die [Luminanz- (Helligkeit-) Werte](#luminanz_verstehen) des `<mask>` verwendet werden sollen.

## Beschreibung

Die `mask-type`-Eigenschaft ist nur relevant für das SVG-`<mask>`-Element. Wenn Sie `mask-type: luminance` festlegen, verwendet die Maske, wie hell jeder Teil der Maske ist; wenn Sie `mask-type: alpha` festlegen, wird verwendet, wie transparent oder undurchsichtig jeder Teil der Maske ist.

### Standardverhalten

Standardmäßig verwendet das SVG-`<mask>`-Element `mask-type: luminance`. Dies bedeutet, dass sowohl die Farbe als auch die Transparenz des Maskeninhalts das Maskieren beeinflussen. Ob die Maske undurchsichtig ist, hängt teilweise von der Helligkeit der Farbe der undurchsichtigen Bereiche ab:

- Vollständig undurchsichtige weiße Bereiche (100 % Luminanz) werden maskiert und sind sichtbar.
- Schwarze (0 % Luminanz) oder vollständig transparente Bereiche werden abgeschnitten und sind unsichtbar.
- Bereiche mit mittleren Luminanzwerten werden teilweise maskiert, was sowohl die Luminanz oder Helligkeit der Maskenfarbe als auch die Alpha-Transparenz jedes Bereichs der Maske widerspiegelt.

### Luminanz verstehen

Die Deckkraft einer `luminance`-Maske wird durch die `R`, `G`, `B` und `A` Werte einer `rgb()`-Farbe mit der folgenden Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel hat die Farbe `green` (`#008000` oder `rgb(0% 50% 0% / 1)`) einen Luminanzwert von `35.77%`. Jeder Bereich, der von einer soliden grünen Luminanzmaske maskiert wird, ist `35.77%` sichtbar. Wenn der `mask-type` auf `alpha` eingestellt ist, macht die gleiche vollständig undurchsichtige grüne Farbe den maskierten Bereich `100%` sichtbar.

Wenn das SVG-`<mask>`-Element `fill="rgb(0 0 0 / 0.5)"` hat, was ein 50 % transparentes Schwarz ist, wird die entsprechende Form auf dem maskierten Element bei 50 % Opazität angezeigt, wenn `mask-type` auf `alpha` eingestellt ist, da die Alpha-Werte `0.5` (50 % Opazität) sind. Aber wenn der `mask-type` standardmäßig auf `luminance` steht oder auf `luminance` eingestellt ist, wird der maskierte Bereich vollständig abgeschnitten und unsichtbar, da seine Luminanz `0` ist.

### Einfluss von `mask-mode` auf `mask-type`

Während die `mask-type`-Eigenschaft auf dem SVG-`<mask>`-Element festgelegt ist, wird die {{cssxref("mask-mode")}}-Eigenschaft auf dem Element festgelegt, das maskiert wird (das Element, auf das Sie die Maske anwenden).
Wenn die Bildquellmaske keine SVG-`<mask>` ist, hat diese Eigenschaft keine Wirkung.

Der Standardwert von `mask-mode` ist `match-source`, was bedeutet, dass der Browser den `mask-type`-Wert vom `<mask>`-Element verwendet, um zu bestimmen, wie er es interpretiert. Wenn `mask-mode` auf einen anderen Wert als `match-source` gesetzt wird, hat dieser Wert Vorrang und überschreibt den `mask-type`-Wert der angewendeten Maske.

Wenn das `<mask>` als die Maskenbildquelle definiert ist und der `mask-mode` als oder auf `match-source` standardmäßig eingestellt ist, wird der `mask-mode` auf den `mask-type` Wert des `<mask>`-Elements aufgelöst: `luminance` oder `alpha`. Wenn nicht explizit festgelegt, wird der Wert standardmäßig auf `luminance` gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden der `mask-type`-Eigenschaft

Dieses Beispiel zeigt, wie man die `mask-type`-Eigenschaft verwendet und die Wirkung ihrer verschiedenen Werte.

#### HTML

Wir haben zwei Bilder eingefügt, die maskiert werden. Abgesehen von ihren Klassennamen sind die beiden Bilder identisch.
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
  mask-image: url("#alphaMask");
}

img.luminanceMaskType {
  mask-image: url("#luminanceMask");
}
```

#### Ergebnis

{{EmbedLiveSample("Examples", "", "250")}}

Da der Standardwert für die `mask-mode`-Eigenschaft `match-source` ist, verwendet die erste Maske nur die Alphakanäle, um die Maske zu definieren: Das Weiß und Grün sind vollständig undurchsichtig, und die 50 % weißen und schwarzen Farben sind 50 % undurchsichtig, da nur der Alphawert der Farben von Bedeutung ist. Das zweite Beispiel verwendet die Luminanz der Farben, um die Deckkraft der Maske zu bestimmen, wobei Weiß heller als Grün ist und halbtransparentes Weiß heller als halbtransparentes Schwarz.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask")}}
- {{cssxref("mask-mode")}}
- [Einführung in das CSS-Maskieren](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS-Maskierungsmodul](/de/docs/Web/CSS/Guides/Masking)
- SVG-{{svgattr("mask-type")}}-Attribut
