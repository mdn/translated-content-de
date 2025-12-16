---
title: mask-image
slug: Web/CSS/Reference/Properties/mask-image
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`mask-image`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Bild fest, das als Maskenebene für ein Element verwendet wird. Dabei werden Abschnitte des Elements ausgeblendet, auf dem das Maskenbild basierend auf dem Alphakanal des Maskenbildes und, abhängig vom Wert der {{cssxref("mask-mode")}} Eigenschaft, der Luminanz der Farben des Maskenbildes gesetzt ist.

## Syntax

```css
/* Keyword value */
mask-image: none;

/* <mask-source> value */
mask-image: url("masks.svg#mask1");

/* <image> values */
mask-image: linear-gradient(black, transparent);
mask-image: image(url("mask.png"), skyblue);

/* Multiple values */
mask-image: url("mask.png"), linear-gradient(black 25%, transparent 35%);

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
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}} Verweis auf eine {{SVGElement("mask")}} oder auf ein CSS-Bild.

- {{cssxref("image")}}
  - : Ein Bildwert, der als Maskenbildschicht verwendet wird.

## Beschreibung

Die `mask-image` Eigenschaft bietet eine Maske, die einen Teil des Elements verbirgt, auf das sie angewendet wird. Der Wert ist eine kommagetrennte Liste von Maskenverweisen. Jeder Maskenverweis ist ein `<image>`, ein `<mask-source>` oder das Schlüsselwort `none`.

Ein `<image>` kann jeder Bildtyp sein, einschließlich generierter Bilder wie [CSS-Verläufe](/de/docs/Web/CSS/Reference/Values/gradient).

Wenn nur ein Wert in der `mask-image` Eigenschaft angegeben ist und dieser Wert `none` ist, wird kein Maskeneffekt sichtbar sein. Wenn mehrere Werte angegeben sind, kann ein `none` Wert in der Liste keinen direkten Effekt haben, jedoch werden andere `mask-*` Werte in derselben Listenposition auf eine transparente schwarze Maskenebene angewendet und haben keinen visuellen Effekt.

Nur Bildquellen, die über HTTP- und HTTPS-Protokolle bereitgestellt werden, werden aufgrund der {{Glossary("CORS", "CORS")}} Richtlinie als `<image>` Werte akzeptiert. Lokal bereitgestellte, einschließlich relativer oder absoluter `file://` Protokolle, werden nicht akzeptiert und als transparentes Schwarz gerendert. Um URL-Bildquellen lokal zu testen, [richten Sie einen lokalen Server ein](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection#localhost).

Eine Maske wird in den folgenden Fällen als transparente schwarze Bildebene betrachtet, die nichts enthüllt:

- Das Maskenbild ist leer (null Breite oder null Höhe).
- Das Maskenbild kann nicht heruntergeladen werden.
- Der Browser unterstützt das Maskenbildformat nicht.
- Das Maskenbild existiert nicht.
- Der Maskenwert zeigt nicht auf ein Maskenbild.

Der Standardwert der {{cssxref("mask-mode")}} Eigenschaft ist `match-source`, was bedeutet, dass der Modus durch den Modus des Maskenbildes selbst definiert wird. Der Modus des Maskenbildes ist im Allgemeinen `alpha`, außer wenn die Maskenquelle ein SVG {{svgelement("mask")}} Element ist, in welchem Fall der Modus `luminance` ist, es sei denn, der Modus wird durch die CSS {{cssxref("mask-type")}} Eigenschaft oder das SVG {{svgattr("mask-type")}} Attribut auf `alpha` geändert.

Der Wert `mask-mode` ist signifikant, da er bestimmt, ob der Maskeneffekt allein von den Alphakanalwerten der Bildquelle abhängt oder von einer Kombination dieser und der Luminanz der Maske (die Helligkeit/Dunkelheit der Farben, die das `mask-image` bilden):

- In allen Fällen zählt die Alphatransparenz der Maske; Bereiche des Elements, die von undurchsichtigen Abschnitten des `mask-image` maskiert werden, werden gerendert, während Bereiche, die von transparenten Bildabschnitten maskiert werden, verborgen bleiben.
- Wenn der Wert `mask-mode` eingestellt oder auf `alpha` aufgelöst wird, zählen nur der Alphakanal der Farben; der Farbton, die Lichtstärke usw. spielen keine Rolle.
- Wenn die `mask-mode` Eigenschaft auf `luminance` gesetzt oder standardmäßig `luminance` ist, ist der Maskierungswert der Luminanzwert jeder Farbe multipliziert mit ihrem Alphawert. Die `mask-mode` wird auf `luminance` aufgelöst, wenn sie explizit auf diesen Wert gesetzt ist oder wenn die Eigenschaft auf `match-source` gesetzt ist und die `mask-image` Quelle ein SVG {{svgelement("mask")}} ist, das nicht explizit seine {{cssxref("mask-type")}} Eigenschaft oder das {{svgattr("mask-type")}} Attribut auf `alpha` gesetzt hat.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verlauf als Maskenbild

In diesem Beispiel verwenden wir einen `<image>` Wert als Maske, indem wir einen CSS [radialen Verlauf](/de/docs/Web/CSS/Reference/Values/gradient/radial-gradient) als unser Maskenbild definieren, um ein rundes Bild mit einem weichen Rand zu erstellen.

#### HTML

Wir fügen ein HTML {{htmlelement("img")}} Element ein, das auch in allen anderen Beispielen verwendet wird.

```html live-sample___example-image live-sample___first-example
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

{{EmbedLiveSample("example-image", "100%", 250)}}

#### CSS

Wir verwenden die CSS {{CSSxRef("gradient/radial-gradient")}} Funktion, um eine Maske zu erstellen, die einen schwarzen Kreis mit einem Radius hat, der halb so breit ist wie die Maske, bevor sie über 10% transparent wird.

```css live-sample___first-example
img {
  mask-image: radial-gradient(black 50%, transparent 60%);
}
```

#### Ergebnisse

{{EmbedLiveSample("first-example", "100%", 250)}}

Der Teil des ursprünglichen Elements, der durch den schwarzen Kreis maskiert wird, ist vollständig undurchsichtig und wird transparent, während die Maske transparent wird.

### Bildressource als Maskenbild

In diesem Beispiel ist die `<mask-source>`, die wir als unser Maskenbild verwenden, eine externe SVG.

#### HTML

Wir fügen dasselbe Bild wie im vorherigen Beispiel ein. Wir haben auch das Bild eingefügt, das wir als Maske verwenden werden; ein Stern, dessen {{cssxref("fill-opacity")}} `0.5` beträgt, also 50% undurchsichtig ist.

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
  mask-image: url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
}
```

#### Ergebnisse

{{EmbedLiveSample("Image resource as a mask image", "100%", 250)}}

Die Maske ist halb undurchsichtig, weshalb die Farben nicht so lebendig sind wie im vorherigen Beispiel. Der sichtbare Teil des Bildes ist 50% undurchsichtig; die Opazität der angewendeten Maske. Die Maske ist kleiner als das Bild, daher wird sie standardmäßig wiederholt. Wir hätten {{cssxref("mask-repeat")}} verwenden können, um das Wiederholen zu steuern, oder {{cssxref("mask-size")}}, um die Größe der Maske zu ändern, was wir im nächsten Beispiel tun.

### Mehrere Masken

Dieses Beispiel demonstriert die Anwendung mehrerer Masken.

```html hidden
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

#### CSS

Wir wenden zwei Masken an — dieselbe halbtransparente SVG wie im vorherigen Beispiel und einen {{CSSxRef("gradient/repeating-radial-gradient")}}. Wir steuern die Größe der Masken mit der {{cssxref("mask-size")}} Eigenschaft. Da unsere erste Maske nicht in 100% Größe ist, stellen wir mit den Eigenschaften {{cssxref("mask-position")}} und {{cssxref("mask-repeat")}} sicher, dass unsere Masken zentriert sind und sich nicht wiederholen.

```css
img {
  mask-size: 95%, 100%;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-image:
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg"),
    repeating-radial-gradient(transparent 0 5px, black 5px 10px);
}
```

#### Ergebnisse

{{EmbedLiveSample("multiple masks", "100%", 250)}}

### Maskierung mit SVG `<mask>`

Dieses Beispiel demonstriert die Verwendung von SVG {{svgelement("mask")}} Elementen als Masken. In diesem Fall zählt die Farbe der Maske, da der {{cssxref("mask-type")}} Wert für SVG-Masken standardmäßig auf `luminance` gesetzt ist, was bedeutet, dass weiße undurchsichtige Bereiche (100% Luminanz) maskiert und sichtbar sind, transparente und schwarze Bereiche (0% Luminanz) abgeschnitten werden und alles dazwischen teilweise maskiert wird.

#### HTML

Wir haben für jedes unserer vier Bilder eine `id` hinzugefügt und eine SVG, die eine gleich Anzahl von `<mask>` Elementen enthält.

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

Wir wenden eine andere `<mask>` auf jede `<img>` an. Keiner der Teile des letzten Bildes mit der `black` Füllung wird standardmäßig sichtbar sein. In diesem Fall sind alle in diesem Beispiel verwendeten Farben vollständig undurchsichtig, der `mask-mode` standardmäßig `match-type`, der in diesem Fall auf `luminance` aufgelöst wird.

```css
#green {
  mask-image: url("#greenMask");
}
#stroke {
  mask-image: url("#strokeMask");
}
#both {
  mask-image: url("#bothMask");
}
#alphaMode {
  mask-image: url("#black");
}

body:has(:checked) img {
  mask-mode: alpha;
}
```

Die Luminanzwerte von `black`, `white` und `green` sind `0`, `100` und [`46.228`](https://www.colorhexa.com/008000), jeweils. Das bedeutet, dass die Bereiche, in denen die Maske weiß ist, sichtbar sein werden, während Bereiche, in denen die Maske schwarz oder vollständig transparent ist, abgeschnitten werden (nicht sichtbar). Bereiche, in denen die Maske grün ist, sind sichtbar, aber heller, gleichbedeutend mit einer weißen Maske, die 46.228% undurchsichtig ist.

#### Ergebnisse

{{EmbedLiveSample("SVG elements as masks", "100%", 540)}}

Aktivieren Sie das Kontrollkästchen, um den Wert des `mask-mode` zwischen `alpha` (aktiviert) und dem Anfangswert umzuschalten, der sich auf `luminance` (deaktiviert) auflöst. Wenn `alpha` verwendet wird, spielt die Farbe der Maske keine Rolle; alles, was zählt, ist die Alphatransparenz. Wenn der Wert auf `luminance` aufgelöst wird, sind `white` Bereiche sichtbar, `black` Bereiche nicht, und `green` Bereiche sind sichtbar, aber mit einer Opazität, die der Luminanz der Farbe `green` entspricht. Wenn `mask-mode` auf `alpha` gesetzt ist, sind die Farben gleichwertig, da sie alle vollständig undurchsichtig sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask")}} Kurzschreibweise
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask-border")}}
- {{cssxref("clip-path")}}
- {{cssxref("background-image")}}
- [Einführung in CSS Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS Maskierung](/de/docs/Web/CSS/Guides/Masking) Modul
