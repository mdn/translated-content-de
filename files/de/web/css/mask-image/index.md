---
title: mask-image
slug: Web/CSS/mask-image
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`mask-image`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Bild fest, das als Maskenschicht für ein Element verwendet wird. Sie verbirgt Bereiche des Elements, auf das das Maskierungsbild angewendet wird, basierend auf dem Alphakanal des Maskenbildes und, abhängig vom Wert der {{cssxref("mask-mode")}} Eigenschaft, der Luminanz der Farben des Maskenbildes.

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
  - : Dieses Schlüsselwort wird als transparente schwarze Bildschicht interpretiert.

- `<mask-source>`
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}} Verweis auf ein {{SVGElement("mask")}} oder ein CSS-Bild.

- {{cssxref("&lt;image&gt;")}}
  - : Ein Bildwert, der als Maskenbildschicht verwendet wird.

## Beschreibung

Die `mask-image` Eigenschaft stellt eine Maske zur Verfügung, die einen Teil des Elements, auf das sie angewendet wird, verbirgt. Der Wert ist eine durch Kommas getrennte Liste von Maskenreferenzen. Jede Maskenreferenz ist ein `<image>`, ein `<mask-source>` oder das Schlüsselwort `none`.

Ein `<image>` kann jede Art von Bild sein, einschließlich generierter Bilder wie [CSS-Gradianten](/de/docs/Web/CSS/gradient).

Wenn im `mask-image` Eigenschaftswert nur ein Wert angegeben ist und dieser Wert `none` ist, wird kein Maskierungseffekt erkennbar sein. Wenn mehrere Werte angegeben sind, kann ein `none` Wert in der Liste keinen direkten Effekt haben. Andere `mask-*` Werte in derselben Listenposition werden jedoch auf eine transparente schwarze Maskenschicht angewendet und haben keinen visuellen Effekt.

Nur Bildquellen, die über HTTP- und HTTPS-Protokolle bereitgestellt werden, werden als `<image>` Werte akzeptiert, aufgrund der {{Glossary("CORS", "CORS")}} Richtlinie. Lokal bereitgestellte Bilder, einschließlich relativer oder absoluter `file://` Protokolle, werden nicht akzeptiert und werden als transparentes Schwarz gerendert. Um URL-Bildquellen lokal zu testen, [richten Sie einen lokalen Server ein](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection#localhost).

Eine Maske wird in den folgenden Fällen als transparente schwarze Bildschicht gezählt, die nichts offenbart:

- Das Maskenbild ist leer (null Breite oder null Höhe).
- Das Maskenbild kann nicht heruntergeladen werden.
- Der Browser unterstützt das Format des Maskenbildes nicht.
- Das Maskenbild existiert nicht.
- Der Maskenwert verweist nicht auf ein Maskenbild.

Der Standardwert der {{cssxref("mask-mode")}} Eigenschaft ist `match-source`, was bedeutet, dass der Modus durch den Modus des Maskenbildes selbst definiert ist. Der Modus des Maskenbildes ist in der Regel `alpha`, außer wenn die Maskenquelle ein SVG {{svgelement("mask")}} Element ist. In diesem Fall ist der Modus `luminance`, es sei denn, der Modus wird durch die CSS {{cssxref("mask-type")}} Eigenschaft oder das SVG {{svgattr("mask-type")}} Attribut in `alpha` geändert.

Der `mask-mode` Wert ist bedeutend, weil er bestimmt, ob der Maskierungseffekt nur auf den Alphakanalwerten der Bildquelle basiert oder auf einer Kombination dieser Werte und der Luminanz der Maske (die Helligkeit/Dunkelheit der Farben, die die `mask-image` ausmachen):

- In allen Fällen spielt die Alphatransparenz der Maske eine Rolle; Elementbereiche, die durch undurchsichtige Teile der `mask-image` maskiert sind, werden gerendert, während Bereiche, die durch transparente Bildbereiche maskiert sind, verborgen sind.
- Wenn der `mask-mode` Wert auf `alpha` gesetzt oder auf diesen Wert aufgelöst wird, zählen nur die Alphakanal der Farben; Farbton, Helligkeit usw. sind irrelevant.
- Ist die `mask-mode` Eigenschaft auf `luminance` gesetzt oder wird darauf aufgelöst, ist der Maskierungswert der Luminanzwert jeder Farbe, multipliziert mit ihrem Alphawert. Der `mask-mode` wird auf `luminance` aufgelöst, wenn er explizit auf diesen Wert gesetzt wird oder wenn die Eigenschaft auf `match-source` gesetzt ist und die `mask-image` Quelle ein SVG {{svgelement("mask")}} ist, das nicht explizit sein {{cssxref("mask-type")}} Eigenschaft oder {{svgattr("mask-type")}} Attribut auf `alpha` gesetzt hat.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gradient als Maskenbild

In diesem Beispiel verwenden wir einen `<image>` Wert als Maske und definieren einen CSS [radialen Gradient](/de/docs/Web/CSS/gradient/radial-gradient) als unser Maskenbild, um ein rundes Bild mit weicher Kante zu erstellen.

#### HTML

Wir fügen ein HTML {{htmlelement("img")}} Element ein, das auch in allen anderen Beispielen verwendet wird.

```html live-sample___example-image live-sample___first-example
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

{{EmbedLiveSample("example-image", "100%", 250)}}

#### CSS

Wir verwenden die CSS {{CSSxRef("gradient/radial-gradient")}} Funktion, um eine Maske zu erstellen, die einen schwarzen Kreis mit einem Radius, der die Hälfte der Breite der Maske ist, hat, bevor sie über 10% transparent wird.

```css live-sample___first-example
img {
  mask-image: radial-gradient(black 50%, transparent 60%);
}
```

#### Ergebnisse

{{EmbedLiveSample("first-example", "100%", 250)}}

Der Teil des ursprünglichen Elements, der durch den schwarzen Kreis maskiert wird, ist vollständig undurchsichtig und verblasst zu transparent, während die Maske zu transparent verblasst.

### Bildressource als Maskenbild

In diesem Beispiel wird das `<mask-source>`, das als unser Maskenbild verwendet wird, ein externes SVG.

#### HTML

Wir fügen dasselbe Bild wie im vorherigen Beispiel ein. Wir haben auch das Bild hinzugefügt, das wir als Maske verwenden werden; ein Stern, dessen {{cssxref("fill-opacity")}} `0.5` ist, also 50% undurchsichtig.

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

Die Maske ist halbtransparent, was erklärt, warum die Farben nicht so lebhaft sind wie im vorherigen Beispiel. Der sichtbare Teil des Bildes ist 50% undurchsichtig; die Opazität der angewendeten Maske. Die Maske ist kleiner als das Bild, daher wird sie standardmäßig wiederholt. Wir könnten {{cssxref("mask-repeat")}} verwendet haben, um die Wiederholung zu steuern, oder {{cssxref("mask-size")}}, um die Größe der Maske zu ändern, was wir im nächsten Beispiel tun.

### Mehrfache Masken

Dieses Beispiel zeigt die Anwendung mehrerer Masken.

```html hidden
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

#### CSS

Wir wenden zwei Masken an — das gleiche halbtransparente SVG wie im vorherigen Beispiel und ein {{CSSxRef("gradient/repeating-radial-gradient")}}. Wir steuern die Größe der Masken mit der {{cssxref("mask-size")}} Eigenschaft. Da unsere erste Maske nicht auf 100% skaliert ist, stellen wir sicher, dass unsere Masken zentriert sind und nicht mit den {{cssxref("mask-position")}} und {{cssxref("mask-repeat")}} Eigenschaften wiederholt werden.

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

Dieses Beispiel zeigt die Verwendung von SVG {{svgelement("mask")}} Elementen als Masken. In diesem Fall ist die Farbe der Maske wichtig, da der {{cssxref("mask-type")}} Wert für SVG-Masken standardmäßig auf `luminance` eingestellt ist, was bedeutet, dass weiße undurchsichtige Bereiche (100% Luminanz) maskiert und sichtbar sind, transparente und schwarze Bereiche (0% Luminanz) abgeschnitten werden und alles dazwischen teilweise maskiert wird.

#### HTML

Wir haben eine `id` für jedes unserer vier Bilder und ein SVG, das eine gleiche Anzahl von `<mask>` Elementen enthält, hinzugefügt.

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

Wir wenden eine andere `<mask>` auf jedes `<img>` an. Kein Teil des letzten Bildes, mit dem `black` Füllwert, wird standardmäßig sichtbar sein. In diesem Fall, obwohl alle in diesem Beispiel verwendeten Farben vollständig undurchsichtig sind, ist der `mask-mode` Standardwert `match-type`, der in diesem Fall auf `luminance` aufgelöst wird.

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

Die Luminanzwerte von `black`, `white` und `green` sind `0`, `100` und [`46.228`](https://www.colorhexa.com/008000), jeweils. Das bedeutet, dass die Bereiche, in denen die Maske weiß ist, sichtbar sind, während in Bereichen, in denen die Maske schwarz oder vollständig transparent ist, abgeschnitten werden (nicht sichtbar). In Bereichen, in denen die Maske grün ist, werden die Bereiche sichtbar, aber heller, was einem weißen Maske entspricht, die zu 46.228% undurchsichtig ist.

#### Ergebnisse

{{EmbedLiveSample("SVG elements as masks", "100%", 540)}}

Schalten Sie das Kontrollkästchen um, um den Wert des `mask-mode` zwischen `alpha` (aktiviert) und dem Anfangswert, der auf `luminance` (deaktiviert) aufgelöst wird, umzuschalten. Wenn `alpha` verwendet wird, spielt die Farbe der Maske keine Rolle; alles, was zählt, ist die Alphatransparenz. Wenn der Wert auf `luminance` aufgelöst wird, sind `white` Bereiche sichtbar, `black` Bereiche nicht, und `green` Bereiche sind sichtbar, aber mit einer Opazität, die der Luminanz der Farbe `green` entspricht. Wenn `mask-mode` auf `alpha` gesetzt ist, sind die Farben gleichwertig, da sie alle vollständig undurchsichtig sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask")}} Shorthand
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask-border")}}
- {{cssxref("clip-path")}}
- {{cssxref("background-image")}}
- [Einführung in CSS Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
