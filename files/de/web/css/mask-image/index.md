---
title: mask-image
slug: Web/CSS/mask-image
l10n:
  sourceCommit: ce1dfc470d18fa6ba694a5b8bd5c657914e57cc3
---

{{CSSRef}}

Die **`mask-image`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Bild fest, das als Maskenebene für ein Element verwendet wird. Dabei werden Bereiche des Elements ausgeblendet, auf dem das Maskenbild basierend auf dem Alphakanal des Maskenbildes versteckt wird und, abhängig vom Wert der {{cssxref("mask-mode")}} Eigenschaft, der Leuchtdichte der Farben des Maskenbildes.

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

Die `mask-image` Eigenschaft bietet eine Maske, die Teile des Elements ausblendet, auf das sie angewendet wird. Der Wert ist eine kommagetrennte Liste von Maskenreferenzen. Jede Maskenreferenz ist ein `<image>`, ein `<mask-source>` oder das Schlüsselwort `none`.

Ein `<image>` kann jede Art von Bild sein, einschließlich generierter Bilder wie [CSS-Gradients](/de/docs/Web/CSS/gradient).

Wenn nur ein Wert in der `mask-image` Eigenschaft angegeben ist und dieser Wert `none` ist, wird kein Maskeneffekt sichtbar sein. Wenn mehrere Werte angegeben sind, kann ein in der Liste enthaltener `none`-Wert keinen direkten Effekt haben, wobei jedoch andere `mask-*` Werte in derselben Listenposition auf eine transparente schwarze Maskenebene angewendet werden und somit keinen visuellen Effekt haben.

Nur Bildquellen, die über HTTP- und HTTPS-Protokolle bereitgestellt werden, werden aufgrund der {{Glossary("CORS", "CORS")}} Richtlinie als `<image>` Werte akzeptiert. Lokal bereitgestellte Bilder, einschließlich relativer oder absoluter `file://` Protokolle, werden nicht akzeptiert und als transparentes Schwarz gerendert. Um URL-Bildquellen lokal zu testen, [richten Sie einen lokalen Server ein](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection#localhost).

Eine Maske wird in den folgenden Fällen als transparente schwarze Bildebene gewertet, die nichts zeigt:

- Das Maskenbild ist leer (Breite oder Höhe gleich null).
- Das Maskenbild kann nicht heruntergeladen werden.
- Der Browser unterstützt das Format des Maskenbildes nicht.
- Das Maskenbild existiert nicht.
- Der Maskenwert verweist nicht auf ein Maskenbild.

Der Standardwert der {{cssxref("mask-mode")}} Eigenschaft ist `match-source`, was bedeutet, dass der Modus durch den Modus des Maskenbildes selbst definiert wird. Der Modus des Maskenbildes ist im Allgemeinen `alpha`, es sei denn, die Maskenquelle ist ein SVG {{svgelement("mask")}}-Element, in diesem Fall ist der Modus `luminance`, es sei denn, der Modus wird über die CSS {{cssxref("mask-type")}} Eigenschaft oder das SVG {{svgattr("mask-type")}} Attribut auf `alpha` geändert.

Der `mask-mode` Wert ist von Bedeutung, da er bestimmt, ob der Maskierungseffekt nur von den Alphakanalwerten der Bildquelle oder einer Kombination dieser und der Leuchtdichte der Maske abhängt (die Helligkeit/Dunkelheit der Farben, die das `mask-image` ausmachen):

- In allen Fällen zählt die Alpha-Transparenz der Maske; Bereiche des Elements, die von undurchsichtigen Abschnitten des `mask-image` maskiert werden, werden gerendert, während durch transparente Bildabschnitte maskierte Bereiche verborgen werden.
- Wenn der `mask-mode` Wert auf `alpha` gesetzt wird oder sich darauf auflöst, zählen nur die Alphakanäle der Farben; Farbton, Helligkeit usw. zählen nicht.
- Wenn die `mask-mode` Eigenschaft auf `luminance` gesetzt wird oder standardmäßig ist, ist der Maskierungswert der Leuchtdichtewert jeder Farbe multipliziert mit ihrem Alphawert. Der `mask-mode` wird zu `luminance`, wenn er explizit auf diesen Wert gesetzt wird oder wenn die Eigenschaft auf `match-source` gesetzt ist und die `mask-image` Quelle ein SVG {{svgelement("mask")}} ist, das seine {{cssxref("mask-type")}} Eigenschaft oder das {{svgattr("mask-type")}} Attribut nicht explizit auf `alpha` gesetzt hat.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gradient als Maskenbild

In diesem Beispiel verwenden wir einen `<image>` Wert als Maske, indem wir einen CSS [radialen Gradient](/de/docs/Web/CSS/gradient/radial-gradient) als unser Maskenbild definieren, um ein rundes Bild mit einem weichen Rand zu erstellen.

#### HTML

Wir fügen ein HTML {{htmlelement("img")}} Element ein, das auch in allen anderen Beispielen verwendet wird.

```html live-sample___example-image live-sample___first-example
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

{{EmbedLiveSample("example-image", "100%", 250)}}

#### CSS

Wir verwenden die CSS {{CSSxRef("gradient/radial-gradient")}} Funktion, um eine Maske zu erstellen, die einen schwarzen Kreis mit einem Radius, der die Hälfte der Breite der Maske beträgt, bevor sie über 10% transparent wird.

```css live-sample___first-example
img {
  mask-image: radial-gradient(black 50%, transparent 60%);
}
```

#### Ergebnisse

{{EmbedLiveSample("first-example", "100%", 250)}}

Der Teil des ursprünglichen Elements, der durch den schwarzen Kreis maskiert ist, ist vollständig undurchsichtig und wird transparent, da die Maske transparent wird.

### Bildressource als Maskenbild

In diesem Beispiel wird die `<mask-source>`, die als unser Maskenbild verwendet wird, ein externes SVG.

#### HTML

Wir fügen dasselbe Bild wie im vorherigen Beispiel ein. Wir haben auch das Bild eingefügt, das wir als Maske verwenden werden; ein Stern, dessen {{cssxref("fill-opacity")}} `0.5` beträgt, oder 50% undurchsichtig ist.

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

Die Maske ist halbtransparent, weshalb die Farben nicht so kräftig sind wie im vorherigen Beispiel. Der sichtbare Teil des Bildes ist 50% transparent; die angewandte Maske kann gedeckt.

Die Maske ist kleiner als das Bild, daher wiederholt sie sich standardmäßig. Wir könnten {{cssxref("mask-repeat")}} verwenden, um die Wiederholung zu steuern oder {{cssxref("mask-size")}}, um die Größe der Maske zu ändern, was wir im nächsten Beispiel tun werden.

### Mehrere Masken

Dieses Beispiel zeigt die Anwendung mehrerer Masken.

```html hidden
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

#### CSS

Wir wenden zwei Masken an – die gleiche halbtransparente SVG wie im vorherigen Beispiel und einen {{CSSxRef("gradient/repeating-radial-gradient")}}. Wir steuern die Größe der Masken mithilfe der {{cssxref("mask-size")}} Eigenschaft. Da unsere erste Maske nicht auf 100% Größe eingestellt ist, stellen wir sicher, dass unsere Masken zentriert sind und sich nicht mit den {{cssxref("mask-position")}} und {{cssxref("mask-repeat")}} Eigenschaften wiederholen.

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

Dieses Beispiel verwendet SVG {{svgelement("mask")}}-Elemente als Masken. In diesem Fall spielt die Farbe der Maske eine Rolle, da der {{cssxref("mask-type")}} Wert für SVG-Masken standardmäßig `luminance` ist, was bedeutet, dass weiße undurchsichtige Bereiche (100% Leuchtdichte) maskiert und sichtbar sind, transparente und schwarze Bereiche (0% Leuchtdichte) abgeschnitten sind und alles dazwischen teilweise maskiert wird.

#### HTML

Wir haben eine `id` für jedes unserer vier Bilder und ein SVG eingefügt, das eine gleiche Anzahl von `<mask>`-Elementen enthält.

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

Wir wenden eine andere `<mask>` auf jedes `<img>` an. Kein Teil des letzten Bildes mit der `black` Füllung wird standardmäßig sichtbar sein. In diesem Fall, obwohl alle in diesem Beispiel verwendeten Farben vollständig undurchsichtig sind, ist der `mask-mode` standardmäßig `match-type`, der sich in diesem Fall zu `luminance` auflöst.

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

Die Leuchtdichtewerte von `black`, `white` und `green` sind `0`, `100` und [`46.228`](https://www.colorhexa.com/008000), jeweils. Dies bedeutet, dass die Bereiche, in denen die Maske weiß ist, sichtbar sind, während die Bereiche, in denen die Maske schwarz oder vollständig transparent ist, abgeschnitten werden (nicht sichtbar). Die Bereiche, in denen die Maske grün ist, sind sichtbar, aber heller, was einer weißen Maske entspricht, die zu 46.228% transparent ist.

#### Ergebnisse

{{EmbedLiveSample("SVG elements as masks", "100%", 540)}}

Aktivieren Sie das Kontrollkästchen, um den Wert des `mask-mode` zwischen `alpha` (aktiviert) und dem ursprünglichen Wert zu toggeln, der zu `luminance` (deaktiviert) auflöst. Wenn `alpha` verwendet wird, spielt die Farbe der Maske keine Rolle; das einzige, was zählt, ist die Alphatransparenz. Wenn der Wert zu `luminance` auflöst, sind `weiße` Bereiche sichtbar, `schwarze` Bereiche nicht, und `grüne` Bereiche sind sichtbar, jedoch mit einer Deckkraft, die der Leuchtdichte der Farbe `grün` entspricht. Wenn `mask-mode` auf `alpha` gesetzt ist, sind die Farben äquivalent, da sie alle vollständig undurchsichtig sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask")}} shorthand
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask-border")}}
- {{cssxref("clip-path")}}
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
