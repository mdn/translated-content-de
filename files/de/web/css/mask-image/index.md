---
title: mask-image
slug: Web/CSS/mask-image
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die **`mask-image`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Bild fest, das als Maske für ein Element verwendet wird. Diese Maske verbirgt Teile des Elements, auf dem das Maskenbild basierend auf dem Alphakanal des Maskenbildes und, abhängig vom Wert der {{cssxref("mask-mode")}} Eigenschaft, der Helligkeit der Farben des Maskenbildes gesetzt ist.

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
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}} Verweis auf ein {{SVGElement("mask")}} oder ein CSS-Bild.

- {{cssxref("&lt;image&gt;")}}
  - : Ein Bildwert, der als Maskenbildschicht verwendet wird.

## Beschreibung

Die `mask-image` Eigenschaft stellt eine Maske bereit, die Teile des Elements, auf das sie angewendet wird, verbirgt. Der Wert ist eine durch Kommas getrennte Liste von Maskenreferenzen. Jede Maskenreferenz ist ein `<image>`, ein `<mask-source>` oder das Schlüsselwort `none`.

Ein `<image>` kann jede Art von Bild sein, einschließlich generierter Bilder wie [CSS-Gradients](/de/docs/Web/CSS/gradient).

Wenn nur ein Wert in der `mask-image` Eigenschaft angegeben ist und dieser Wert `none` ist, wird kein Maskeneffekt erkennbar sein. Wenn mehrere Werte angegeben sind und ein `none` Wert in der Liste enthalten ist, hat dieser möglicherweise keinen direkten Effekt, jedoch werden andere `mask-*` Werte an derselben Listenposition auf eine transparente schwarze Maskenschicht angewendet und haben keinen visuellen Effekt.

Nur Bildquellen, die über HTTP- und HTTPS-Protokolle bereitgestellt werden, werden aufgrund der {{Glossary("CORS", "CORS")}} Richtlinie als `<image>` Werte akzeptiert. Lokale Bilder, einschließlich relativer oder absoluter `file://` Protokolle, werden nicht akzeptiert und als transparentes Schwarz gerendert. Um URL-Bildquellen lokal zu testen, [richten Sie einen lokalen Server ein](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection#localhost).

Eine Maske wird in den folgenden Fällen als transparente schwarze Bildschicht betrachtet, die nichts offenbart:

- Das Maskenbild ist leer (null Breite oder null Höhe).
- Das Maskenbild kann nicht heruntergeladen werden.
- Der Browser unterstützt das Maskenbildformat nicht.
- Das Maskenbild existiert nicht.
- Der Maskenwert verweist nicht auf ein Maskenbild.

Der Standardwert der {{cssxref("mask-mode")}} Eigenschaft ist `match-source`, was bedeutet, dass der Modus durch den Modus des Maskenbildes selbst definiert wird. Der Modus des Maskenbildes ist im Allgemeinen `alpha`, es sei denn, die Maskenquelle ist ein SVG {{svgelement("mask")}} Element, in welchem Fall der Modus `luminance` ist, es sei denn, der Modus wird durch die CSS {{cssxref("mask-type")}} Eigenschaft oder das SVG {{svgattr("mask-type")}} Attribut auf `alpha` geändert.

Der `mask-mode` Wert ist wichtig, da er bestimmt, ob der Maskierungseffekt nur von den Alphakanalwerten der Bildquelle oder einer Kombination dieser und der Helligkeit der Maske (der Helligkeit/Dunkelheit der Farben, aus denen das `mask-image` besteht) abhängt:

- In allen Fällen ist die Alpha-Transparenz der Maske von Bedeutung; Bereiche des Elements, die durch undurchsichtige Abschnitte des `mask-image` maskiert werden, werden gerendert, während Bereiche, die durch transparente Bildabschnitte maskiert werden, verborgen sind.
- Wenn der `mask-mode` Wert auf `alpha` gesetzt oder darauf zurückgeführt wird, zählen nur die Alphakanalwerte der Farben; Farbton, Helligkeit usw. sind irrelevant.
- Wenn die `mask-mode` Eigenschaft auf `luminance` gesetzt ist oder darauf zurückfällt, ist der Maskierungswert der Helligkeitswert jeder Farbe multipliziert mit ihrem Alphawert. Der `mask-mode` wird auf `luminance` zurückgeführt, wenn er ausdrücklich auf diesen Wert gesetzt wird oder wenn die Eigenschaft auf `match-source` gesetzt ist und die `mask-image` Quelle ein SVG {{svgelement("mask")}} ist, das seine {{cssxref("mask-type")}} Eigenschaft oder {{svgattr("mask-type")}} Attribut nicht ausdrücklich auf `alpha` gesetzt hat.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gradient als Maskenbild

In diesem Beispiel verwenden wir einen `<image>` Wert als Maske, indem wir einen CSS [Radialverlauf](/de/docs/Web/CSS/gradient/radial-gradient) als unser Maskenbild definieren, um ein rundes Bild mit einem weichen Rand zu erstellen.

#### HTML

Wir fügen ein HTML {{htmlelement("img")}} Element ein, das auch in allen anderen Beispielen verwendet wird.

```html live-sample___example-image live-sample___first-example
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

{{EmbedLiveSample("example-image", "100%", 250)}}

#### CSS

Wir verwenden die CSS {{CSSxRef("gradient/radial-gradient")}} Funktion, um eine Maske zu erstellen, die einen schwarzen Kreis mit einem Radius hat, der die Hälfte der Breite der Maske beträgt, und über 10% in Transparenz übergeht.

```css live-sample___first-example
img {
  mask-image: radial-gradient(black 50%, transparent 60%);
}
```

#### Ergebnisse

{{EmbedLiveSample("first-example", "100%", 250)}}

Der Teil des ursprünglichen Elements, der durch den schwarzen Kreis maskiert ist, ist vollständig undurchsichtig und wird transparent, wenn die Maske transparent wird.

### Bildressource als Maskenbild

In diesem Beispiel wird das `<mask-source>`, das als unser Maskenbild verwendet wird, durch ein externes SVG dargestellt.

#### HTML

Wir fügen dasselbe Bild wie im vorherigen Beispiel ein. Wir haben auch das Bild eingefügt, das wir als Maske verwenden werden; ein Stern, dessen {{cssxref("fill-opacity")}} auf `0.5` oder 50% undurchsichtig ist.

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

Die Maske ist halbtransparent, weshalb die Farben nicht so lebhaft sind wie im vorherigen Beispiel. Der sichtbare Teil des Bildes ist 50% undurchsichtig; die Deckkraft der angewendeten Maske. Die Maske ist kleiner als das Bild, daher wiederholt sie sich standardmäßig. Wir könnten {{cssxref("mask-repeat")}} verwenden, um die Wiederholung zu steuern, oder {{cssxref("mask-size")}}, um die Größe der Maske zu ändern, was wir im nächsten Beispiel tun.

### Mehrere Masken

Dieses Beispiel demonstriert die Anwendung mehrerer Masken.

```html hidden
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

#### CSS

Wir wenden zwei Masken an - dasselbe halbtransparente SVG wie im vorherigen Beispiel und einen {{CSSxRef("gradient/repeating-radial-gradient")}}. Wir kontrollieren die Größe der Masken mit der {{cssxref("mask-size")}} Eigenschaft. Da unsere erste Maske nicht auf 100% Größe eingestellt ist, stellen wir sicher, dass unsere Masken zentriert sind und sich nicht mit den {{cssxref("mask-position")}} und {{cssxref("mask-repeat")}} Eigenschaften wiederholen.

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

Dieses Beispiel demonstriert die Verwendung von SVG {{svgelement("mask")}} Elementen als Masken. In diesem Fall zählt die Farbe der Maske, da der {{cssxref("mask-type")}} Wert für SVG-Masken standardmäßig auf `luminance` steht, was bedeutet, dass weiße undurchsichtige Bereiche (100% Helligkeit) maskiert und sichtbar sind, transparente und schwarze Bereiche (0% Helligkeit) abgeschnitten werden und alles dazwischen teilweise maskiert wird.

#### HTML

Wir haben für jedes unserer vier Bilder eine `id` angefügt und ein SVG, das eine gleiche Anzahl an `<mask>` Elementen enthält.

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

Wir wenden auf jedes `<img>` eine andere `<mask>` an. Kein Teil des letzten Bildes mit der `black` Füllung wird standardmäßig sichtbar sein. In diesem Fall sind, obwohl alle Farben in diesem Beispiel voll undurchsichtig sind, der `mask-mode` Standardwert `match-type`, der in diesem Fall zu `luminance` führt.

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

Die Helligkeitswerte von `black`, `white` und `green` betragen `0`, `100` und [`46.228`](https://www.colorhexa.com/008000), jeweils. Das bedeutet, dass Bereiche, in denen die Maske weiß ist, sichtbar sind, während Bereiche, in denen die Maske schwarz oder vollständig transparent ist, abgeschnitten (nicht sichtbar) werden. Bereiche, in denen die Maske grün ist, werden sichtbar, aber heller sein, was einer weißen Maske entspricht, die zu 46.228% undurchsichtig ist.

#### Ergebnisse

{{EmbedLiveSample("SVG elements as masks", "100%", 540)}}

Aktivieren Sie das Kontrollkästchen, um den Wert des `mask-mode` zwischen `alpha` (aktiviert) und dem Anfangswert, der zu `luminance` führt (deaktiviert), umzuschalten. Wenn `alpha` verwendet wird, spielt die Farbe der Maske keine Rolle; es zählen nur die Alpha-Transparenzen. Wenn der Wert auf `luminance` zurückgeführt wird, sind `weiße` Bereiche sichtbar, `schwarze` Bereiche sind es nicht, und `grüne` Bereiche sind sichtbar, aber mit einer Deckkraft, die der Helligkeit der Farbe `grün` entspricht. Wenn `mask-mode` auf `alpha` gesetzt ist, sind die Farben gleichwertig, da sie alle vollständig undurchsichtig sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask")}} Kürzel
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
