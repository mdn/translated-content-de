---
title: mask-image
slug: Web/CSS/mask-image
l10n:
  sourceCommit: be28a11d9b2f6ab4ad0e5947e72a13ce16d4a6f2
---

{{CSSRef}}

Die **`mask-image`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Bild fest, das als Maskenschicht für ein Element verwendet wird. Es verbirgt Abschnitte des Elements, auf dem das Maskenbild basierend auf dem Alphakanal des Maskenbildes und, je nach dem Wert der {{cssxref("mask-mode")}}-Eigenschaft, der Luminanz der Farben des Maskenbildes eingestellt ist.

## Syntax

```css
/* Keyword value */
mask-image: none;

/* <mask-source> value */
mask-image: url(masks.svg#mask1);

/* <image> values */
mask-image: linear-gradient(rgb(0 0 0 / 100%), transparent);
mask-image: image(url(mask.png), skyblue);

/* Multiple values */
mask-image: url(mask.png), linear-gradient(black 25%, transparent 35%);

/* Global values */
mask-image: inherit;
mask-image: initial;
mask-image: revert;
mask-image: revert-layer;
mask-image: unset;
```

### Werte

- `none`
  - : Dieses Schlüsselwort wird als transparente schwarze Bildebene interpretiert.

- `<mask-source>`
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}} Verweis auf ein {{SVGElement("mask")}} oder auf ein CSS-Bild.

- {{cssxref("&lt;image&gt;")}}
  - : Ein Bildwert, der als Maskenbildebene verwendet wird.

## Beschreibung

Die Eigenschaft `mask-image` stellt eine Maske bereit, die einen Teil des Elements verbirgt, auf das sie angewendet wird. Der Wert besteht aus einer kommagetrennten Liste von Maskenreferenzen. Jede Maskenreferenz ist ein `<image>`, ein `<mask-source>` oder das Schlüsselwort `none`.

Ein `<image>` kann jeder Typ von Bild sein, einschließlich generierter Bilder wie [CSS Gradients](/de/docs/Web/CSS/gradient).

Wenn nur ein Wert in der `mask-image` Eigenschaft angegeben wird und dieser Wert `none` ist, wird kein Maskierungseffekt erkennbar sein. Wenn mehrere Werte angegeben sind, kann ein `none`-Wert in der Liste keinen direkten Effekt haben, jedoch werden andere `mask-*` Werte in derselben Listenposition auf eine transparente schwarze Maskenschicht angewendet und haben keinen visuellen Effekt.

Nur Bildquellen, die über HTTP- und HTTPS-Protokolle bereitgestellt werden, werden als `<image>` Werte aufgrund der {{Glossary("CORS", "CORS")}} Policy akzeptiert. Lokal bereitgestellte Bilder, einschließlich relativer oder absoluter `file://` Protokolle, werden nicht akzeptiert und als transparent schwarz gerendert. Um URL-Bildquellen lokal zu testen, [richten Sie einen lokalen Server ein](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection#localhost).

Eine Maske wird in den folgenden Fällen als transparente schwarze Bildebene gezählt, die nichts offenbart:

- Das Maskenbild ist leer (null Breite oder null Höhe).
- Das Maskenbild kann nicht heruntergeladen werden.
- Der Browser unterstützt das Maskenbildformat nicht.
- Das Maskenbild existiert nicht.
- Der Maskenwert zeigt nicht auf ein Maskenbild.

Der Standardwert der {{cssxref("mask-mode")}} Eigenschaft ist `match-source`, was bedeutet, dass der Modus durch den Modus des Maskenbildes selbst definiert wird. Der Modus des Maskenbildes ist im Allgemeinen `alpha`, außer wenn die Maskenquelle ein SVG {{svgelement("mask")}}-Element ist, in welchem Fall der Modus `luminance` ist, es sei denn, der Modus wird über die CSS {{cssxref("mask-type")}} Eigenschaft oder das SVG {{svgattr("mask-type")}} Attribut in `alpha` geändert.

Der `mask-mode` Wert ist bedeutend, weil er bestimmt, ob der Maskierungseffekt nur von den Alphakanalwerten der Bildquelle abhängt oder von einer Kombination aus diesen und der Luminanz der Maske (die Helligkeit/Dunkelheit der Farben, aus denen das `mask-image` besteht):

- In allen Fällen ist die Alphatransparenz der Maske wichtig; Bereiche des Elements, die durch undurchsichtige Abschnitte des `mask-image` maskiert sind, werden gerendert, während Bereiche, die durch transparente Bildabschnitte maskiert sind, verborgen werden.
- Wenn der `mask-mode` Wert auf `alpha` gesetzt oder darauf aufgelöst wird, sind nur die Alphakanäle der Farben von Bedeutung; Farbton, Helligkeit usw. spielen keine Rolle.
- Wenn die `mask-mode` Eigenschaft auf `luminance` gesetzt ist oder darauf standardmäßig aufgelöst wird, ist der Maskierungswert der Luminanzwert jeder Farbe multipliziert mit ihrem Alphawert. Der `mask-mode` wird auf `luminance` aufgelöst, wenn er explizit auf diesen Wert gesetzt ist oder wenn die Eigenschaft auf `match-source` gesetzt ist und die `mask-image` Quelle ein SVG {{svgelement("mask")}} ist, das seine {{cssxref("mask-type")}} Eigenschaft oder {{svgattr("mask-type")}} Attribut nicht auf `alpha` gesetzt hat.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gradient als Maskenbild

In diesem Beispiel verwenden wir einen `<image>` Wert als Maske und definieren einen CSS [radialen Gradient](/de/docs/Web/CSS/gradient/radial-gradient) als unser Maskenbild, um ein rundes Bild mit einem weichen Rand zu erstellen.

#### HTML

Wir fügen ein HTML {{htmlelement("img")}}-Element ein, das auch in allen anderen Beispielen verwendet wird.

```html live-sample___example-image live-sample___first-example
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

{{EmbedLiveSample("example-image", "100%", 250)}}

#### CSS

Wir verwenden die CSS {{CSSxRef("gradient/radial-gradient")}} Funktion, um eine Maske zu erstellen, die einen schwarzen Kreis mit einem Radius hat, der die Hälfte der Breite der Maske beträgt, bevor er über 10% transparent wird.

```css live-sample___first-example
img {
  mask-image: radial-gradient(black 50%, transparent 60%);
}
```

#### Ergebnisse

{{EmbedLiveSample("first-example", "100%", 250)}}

Der Teil des ursprünglichen Elements, der durch den schwarzen Kreis maskiert ist, ist vollständig undurchsichtig und wird allmählich transparent, wenn die Maske transparent wird.

### Bildressource als Maskenbild

In diesem Beispiel ist die verwendete `<mask-source>` als unser Maskenbild ein externes SVG.

#### HTML

Wir verwenden dasselbe Bild wie im vorherigen Beispiel. Zusätzlich haben wir das Bild eingefügt, das wir als Maske verwenden werden; ein Stern, dessen {{cssxref("fill-opacity")}} `0.5` ist, oder 50% Deckkraft.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />

<img
  src="https://mdn.github.io/shared-assets/images/examples/mask-star.svg"
  alt="A star" />
```

#### CSS

Wir verwenden `mask-star.svg` als Maskenbild auf unserem ersten Bild:

```css
img:first-of-type {
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
}
```

#### Ergebnisse

{{EmbedLiveSample("Image resource as a mask image", "100%", 250)}}

Die Maske ist halbtransparent, weshalb die Farben nicht so lebendig sind wie im vorherigen Beispiel. Der sichtbare Teil des Bildes ist zu 50% undurchsichtig; die Deckraft der angewendeten Maske.
Die Maske ist kleiner als das Bild, daher wird sie standardmäßig wiederholt. Wir hätten {{cssxref("mask-repeat")}} verwenden können, um das Wiederholen zu steuern, oder {{cssxref("mask-size")}}, um die Größe der Maske zu ändern, was wir im nächsten Beispiel tun.

### Mehrere Masken

Dieses Beispiel demonstriert das Anwenden mehrerer Masken.

```html hidden
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

#### CSS

Wir wenden zwei Masken an - die gleiche halbtransparente SVG wie im vorherigen Beispiel und einen {{CSSxRef("gradient/repeating-radial-gradient")}}. Wir steuern die Größe der Masken mithilfe der {{cssxref("mask-size")}} Eigenschaft. Da unsere erste Maske nicht auf 100% Größe eingestellt ist, sorgen wir dafür, dass unsere Masken zentriert und nicht wiederholt sind, mit den Eigenschaften {{cssxref("mask-position")}} und {{cssxref("mask-repeat")}}.

```css
img {
  mask-size: 95%, 100%;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-image:
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg),
    repeating-radial-gradient(transparent 0 5px, black 5px 10px);
}
```

#### Ergebnisse

{{EmbedLiveSample("multiple masks", "100%", 250)}}

### Maskierung mit SVG `<mask>`

Dieses Beispiel zeigt die Verwendung von SVG {{svgelement("mask")}} Elementen als Masken. In diesem Fall spielt die Farbe der Maske eine Rolle, da der {{cssxref("mask-type")}} Wert für SVG-Masken standardmäßig auf `luminance` steht, was bedeutet, dass weiße undurchsichtige Bereiche (100% Luminanz) maskiert und sichtbar sind, transparente und schwarze Bereiche (0% Luminanz) abgeschnitten werden und alles dazwischen teilweise maskiert wird.

#### HTML

Wir haben für jedes unserer vier Bilder eine `id` hinzugefügt und ein SVG, das eine entsprechende Anzahl von `<mask>` Elementen enthält.

```html
<img
  id="green"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  id="stroke"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  id="both"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  id="alphaMode"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />

<svg height="0" width="0">
  <mask id="greenMask">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green" />
  </mask>
  <mask id="strokeMask">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="none"
      stroke="white"
      stroke-width="20" />
  </mask>
  <mask id="bothMask">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
  </mask>
  <mask id="black">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="black" />
  </mask>
</svg>
```

```html hidden
<p>
  <label>
    <input type="checkbox" />
    Set the <code>mask-mode</code> to <code>alpha</code>.
  </label>
</p>
```

#### CSS

Wir wenden auf jedes `<img>` eine andere `<mask>` an. Kein Teil des letzten Bildes mit der `black`-Füllung wird standardmäßig sichtbar sein. In diesem Fall, während alle in diesem Beispiel verwendeten Farben vollständig undurchsichtig sind, standardisiert der `mask-mode` auf `match-type`, was in diesem Fall zu `luminance` aufgelöst wird.

```css
#green {
  mask-image: url(#greenMask);
}
#stroke {
  mask-image: url(#strokeMask);
}
#both {
  mask-image: url(#bothMask);
}
#alphaMode {
  mask-image: url(#black);
}

body:has(:checked) img {
  mask-mode: alpha;
}
```

Die Luminanzwerte von `black`, `white` und `green` sind `0`, `100` und [`46.228`](https://www.colorhexa.com/008000), jeweils. Dies bedeutet, dass Bereiche, in denen die Maske weiß ist, sichtbar sind, wohingegen Bereiche, in denen die Maske schwarz oder vollständig transparent ist, abgeschnitten werden (nicht sichtbar). Bereiche, in denen die Maske grün ist, werden sichtbar, aber heller sein, entsprechend einer weißen Maske, die zu 46.228% undurchsichtig ist.

#### Ergebnisse

{{EmbedLiveSample("SVG elements as masks", "100%", 540)}}

Aktivieren Sie das Kontrollkästchen, um den Wert des `mask-mode` zwischen `alpha` (aktiviert) und dem Anfangswert, der zu `luminance` aufgelöst wird (deaktiviert), zu wechseln. Wenn `alpha` verwendet wird, spielt die Farbe der Maske keine Rolle; alles, was zählt, ist die Alpha-Transparenz. Wenn der Wert zu `luminance` aufgelöst wird, sind `weiße` Bereiche sichtbar, `schwarze` Bereiche nicht, und `grüne` Bereiche sind sichtbar, aber mit einer Deckkraft, die der Luminanz der Farbe `grün` entspricht. Wenn `mask-mode` auf `alpha` gesetzt ist, sind die Farben gleichwertig, da sie alle vollständig undurchsichtig sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask")}} Kurzform
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask-border")}}
- {{cssxref("clip-path")}}
- {{cssxref("background-image")}}
- [Einführung in CSS Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklaration mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
