---
title: mask-image
slug: Web/CSS/Reference/Properties/mask-image
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`mask-image`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Bild fest, das als Maskenschicht für ein Element verwendet wird. Dabei werden Bereiche des Elements, auf das das Maskierungsbild angewendet wird, basierend auf dem Alphakanal des Maskenbilds und, abhängig vom Wert der {{cssxref("mask-mode")}} Eigenschaft, der Leuchtkraft der Farben des Maskenbilds verborgen.

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
  - : Dieses Schlüsselwort wird als transparente schwarze Bildschicht interpretiert.

- `<mask-source>`
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}} Verweis auf eine {{SVGElement("mask")}} oder auf ein CSS-Bild.

- {{cssxref("&lt;image&gt;")}}
  - : Ein Bildwert, der als Maskenbildschicht verwendet wird.

## Beschreibung

Die `mask-image` Eigenschaft bietet eine Maske, die Teile des Elements, auf das sie angewendet wird, verbirgt. Der Wert ist eine kommagetrennte Liste von Maskenverweisen. Jeder Maskenverweis ist ein `<image>`, ein `<mask-source>` oder das Schlüsselwort `none`.

Ein `<image>` kann jeder Bildtyp sein, einschließlich generierter Bilder wie [CSS-Gradienten](/de/docs/Web/CSS/gradient).

Wenn nur ein Wert in der `mask-image` Eigenschaft angegeben ist und dieser Wert `none` ist, wird kein Maskierungseffekt sichtbar. Wenn mehrere Werte angegeben sind, hat ein `none` Wert in der Liste möglicherweise keine direkte Wirkung, jedoch werden andere `mask-*` Werte in derselben Listenposition auf eine transparente schwarze Maskenschicht angewendet und haben keinen visuellen Effekt.

Nur Bildquellen, die über die HTTP- und HTTPS-Protokolle bereitgestellt werden, werden aufgrund der {{Glossary("CORS", "CORS")}} Richtlinie als `<image>` Werte akzeptiert. Lokal bereitgestellte Bilder, einschließlich relativer oder absoluter `file://` Protokolle, werden nicht akzeptiert und als transparentes Schwarz gerendert. Um URL-Bildquellen lokal zu testen, [richten Sie einen lokalen Server ein](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection#localhost).

Eine Maske wird als transparente schwarze Bildschicht gezählt, die nichts offenlegt, in folgenden Fällen:

- Das Maskenbild ist leer (Null Breite oder Null Höhe).
- Das Maskenbild kann nicht heruntergeladen werden.
- Der Browser unterstützt das Format des Maskenbilds nicht.
- Das Maskenbild existiert nicht.
- Der Maskenwert verweist nicht auf ein Maskenbild.

Der Standardwert der {{cssxref("mask-mode")}} Eigenschaft ist `match-source`, was bedeutet, dass der Modus durch den Modus des Maskenbilds selbst definiert wird. Der Modus des Maskenbilds ist in der Regel `alpha`, es sei denn, die Maskenquelle ist ein SVG {{svgelement("mask")}} Element. In diesem Fall ist der Modus `luminance`, es sei denn, der Modus wird durch die CSS {{cssxref("mask-type")}} Eigenschaft oder das SVG {{svgattr("mask-type")}} Attribut auf `alpha` geändert.

Der `mask-mode` Wert ist wichtig, weil er bestimmt, ob der Maskierungseffekt nur von den Alphakanalwerten der Bildquelle oder von einer Kombination dieser und der Leuchtkraft der Maske (der Helligkeit/Dunkelheit der Farben, die das `mask-image` bilden) abhängt:

- In allen Fällen ist die Alphatransparenz der Maske von Bedeutung; Bereiche des Elements, die von opaken Abschnitten der `mask-image` maskiert werden, werden gerendert, während Bereiche, die von transparenten Bildabschnitten maskiert werden, verborgen sind.
- Wenn der `mask-mode` Wert auf `alpha` gesetzt oder dahin aufgelöst wird, zählen nur die Alphakanäle der Farben; die Farbe, Helligkeit usw., sind nicht wichtig.
- Wenn die `mask-mode` Eigenschaft auf `luminance` gesetzt ist oder darauf zurückfällt, ist der Maskierungswert der Leuchtkraftwert jeder Farbe multipliziert mit ihrem Alphawert. Die `mask-mode` Eigenschaft wird auf `luminance` aufgelöst, wenn sie explizit auf diesen Wert gesetzt ist, oder wenn die Eigenschaft auf `match-source` gesetzt ist und die `mask-image` Quelle ein SVG {{svgelement("mask")}} ist, das nicht explizit auf `alpha` für die {{cssxref("mask-type")}} Eigenschaft oder das {{svgattr("mask-type")}} Attribut gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gradient als Maskenbild

In diesem Beispiel verwenden wir einen `<image>` Wert als Maske, indem wir einen CSS [Radial-Gradienten](/de/docs/Web/CSS/gradient/radial-gradient) als unser Maskenbild definieren, um ein rundes Bild mit einem weichen Rand zu erstellen.

#### HTML

Wir fügen ein HTML {{htmlelement("img")}} Element ein, das auch in allen anderen Beispielen verwendet wird.

```html live-sample___example-image live-sample___first-example
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

{{EmbedLiveSample("example-image", "100%", 250)}}

#### CSS

Wir verwenden die CSS {{CSSxRef("gradient/radial-gradient")}} Funktion, um eine Maske zu erstellen, die einen schwarzen Kreis mit einem Radius, der die Hälfte der Breite der Maske beträgt, hat, bevor sie zu transparent über 10% übergeht.

```css live-sample___first-example
img {
  mask-image: radial-gradient(black 50%, transparent 60%);
}
```

#### Ergebnisse

{{EmbedLiveSample("first-example", "100%", 250)}}

Der Teil des ursprünglichen Elements, der vom schwarzen Kreis maskiert wird, ist vollständig undurchsichtig und verblasst zu transparent, wenn die Maske zu transparent verblasst.

### Bildressource als Maskenbild

In diesem Beispiel wird das `<mask-source>`, das als unser Maskenbild verwendet wird, ein externes SVG sein.

#### HTML

Wir fügen das gleiche Bild wie im vorherigen Beispiel ein. Wir haben auch das Bild eingefügt, das wir als Maske verwenden werden; einen Stern, dessen {{cssxref("fill-opacity")}} `0.5` oder 50% undurchsichtig ist.

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

Die Maske ist halbtransparent, weshalb die Farben nicht so lebendig sind wie im vorherigen Beispiel. Der sichtbare Teil des Bildes ist 50% undurchsichtig; die Deckkraft der angewendeten Maske. Die Maske ist kleiner als das Bild und wiederholt sich daher standardmäßig. Wir hätten {{cssxref("mask-repeat")}} verwenden können, um die Wiederholung zu steuern, oder {{cssxref("mask-size")}}, um die Größe der Maske zu ändern, was wir im nächsten Beispiel tun.

### Mehrere Masken

Dieses Beispiel demonstriert die Anwendung mehrerer Masken.

```html hidden
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

#### CSS

Wir wenden zwei Masken an — die gleiche halbtransparente SVG wie im vorherigen Beispiel und einen {{CSSxRef("gradient/repeating-radial-gradient")}}. Wir steuern die Größe der Masken mithilfe der {{cssxref("mask-size")}} Eigenschaft. Da unsere erste Maske nicht auf 100% gesetzt ist, stellen wir sicher, dass unsere Masken zentriert sind und sich nicht mit den Eigenschaften {{cssxref("mask-position")}} und {{cssxref("mask-repeat")}} wiederholen.

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

Dieses Beispiel zeigt die Verwendung von SVG {{svgelement("mask")}} Elementen als Masken. In diesem Fall ist die Farbe der Maske wichtig, da der {{cssxref("mask-type")}} Wert für SVG-Masken standardmäßig `luminance` ist, was bedeutet, dass weiße undurchsichtige Bereiche (100% Leuchtkraft) maskiert und sichtbar sind, transparente und schwarze Bereiche (0% Leuchtkraft) abgeschnitten werden, und alles dazwischen teilweise maskiert wird.

#### HTML

Wir haben eine `id` für jedes unserer vier Bilder hinzugefügt und ein SVG, das eine gleiche Anzahl von `<mask>` Elementen enthält.

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

Wir wenden eine andere `<mask>` auf jedes `<img>` an. Kein Teil des letzten Bildes mit dem `black` füllen wird standardmäßig sichtbar sein. In diesem Fall, auch wenn alle im Beispiel verwendeten Farben vollständig undurchsichtig sind, ist das `mask-mode` Standardverhalten `match-type`, was sich in diesem Fall zu `luminance` auflöst.

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

Die Leuchtkraftwerte von `black`, `white` und `green` sind `0`, `100` und [`46.228`](https://www.colorhexa.com/008000). Das bedeutet, dass die Bereiche, in denen die Maske weiß ist, sichtbar sind, während Bereiche, in denen die Maske schwarz oder vollständig transparent ist, abgeschnitten werden (nicht sichtbar). Bereiche, in denen die Maske grün ist, werden sichtbar sein, aber heller, was einer weißen Maske entspricht, die zu 46.228% undurchsichtig ist.

#### Ergebnisse

{{EmbedLiveSample("SVG elements as masks", "100%", 540)}}

Aktivieren Sie das Kontrollkästchen, um den Wert des `mask-mode` zwischen `alpha` (aktiviert) und dem Anfangswert umzuschalten, der auf `luminance` (deaktiviert) aufgelöst wird. Wenn `alpha` verwendet wird, spielt die Farbe der Maske keine Rolle; wichtig ist nur die Alpha-Transparenz. Wenn der Wert zu `luminance` aufgelöst wird, sind `weiß` Bereiche sichtbar, `schwarz` Bereiche sind es nicht, und `grün` Bereiche sind sichtbar, aber mit einer Deckkraft, die der Leuchtkraft der Farbe `grün` entspricht. Wenn `mask-mode` auf `alpha` gesetzt ist, sind die Farben gleichwertig, da sie alle vollständig undurchsichtig sind.

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
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
