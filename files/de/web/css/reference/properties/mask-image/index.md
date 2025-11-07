---
title: mask-image
slug: Web/CSS/Reference/Properties/mask-image
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`mask-image`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Bild fest, das als Maskenschicht für ein Element verwendet wird. Es verbirgt Abschnitte des Elements, auf dem das Maskierungsbild basierend auf dem Alphakanal des Maskenbildes und, abhängig vom Wert der {{cssxref("mask-mode")}} Eigenschaft, der Helligkeit der Maskenbildfarben festgelegt ist.

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
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}} Verweis auf eine {{SVGElement("mask")}} oder ein CSS-Bild.

- {{cssxref("&lt;image&gt;")}}
  - : Ein Bildwert, der als Maskenbildschicht verwendet wird.

## Beschreibung

Die `mask-image` Eigenschaft stellt eine Maske bereit, die Teile des Elements verbirgt, auf das sie angewendet wird. Der Wert ist eine kommagetrennte Liste von Maskenreferenzen. Jede Maskenreferenz ist ein `<image>`, ein `<mask-source>` oder das Schlüsselwort `none`.

Ein `<image>` kann jede Art von Bild sein, einschließlich generierter Bilder wie [CSS-Verläufe](/de/docs/Web/CSS/Reference/Values/gradient).

Wenn nur ein Wert in der `mask-image` Eigenschaft angegeben ist und dieser Wert `none` ist, wird kein Maskierungseffekt sichtbar sein. Wenn mehrere Werte angegeben sind, kann ein `none` Wert in der Liste keinen direkten Effekt haben, jedoch werden andere `mask-*` Werte in derselben Listenposition auf eine transparente schwarze Maskenschicht angewendet und haben keinen visuellen Effekt.

Nur Bildquellen, die über HTTP- und HTTPS-Protokolle bereitgestellt werden, werden als `<image>` Werte akzeptiert aufgrund der {{Glossary("CORS", "CORS")}} Richtlinie. Lokal bereitgestellte Bilder, einschließlich relativer oder absoluter `file://` Protokolle, werden nicht akzeptiert und werden als transparentes Schwarz gerendert. Um URL-Bildquellen lokal zu testen, [richten Sie einen lokalen Server ein](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection#localhost).

Eine Maske wird in folgenden Fällen als transparente schwarze Bildschicht gezählt, die nichts offenbart:

- Das Maskenbild ist leer (null Breite oder null Höhe).
- Das Maskenbild wird nicht heruntergeladen.
- Der Browser unterstützt das Maskenbildformat nicht.
- Das Maskenbild existiert nicht.
- Der Maskenwert verweist nicht auf ein Maskenbild.

Der Standardwert der {{cssxref("mask-mode")}} Eigenschaft ist `match-source`, was bedeutet, dass der Modus durch den Modus des Maskenbildes selbst definiert ist. Der Modus des Maskenbildes ist im Allgemeinen `alpha`, außer wenn die Maskenquelle ein SVG {{svgelement("mask")}} Element ist, in welchem Fall der Modus `luminance` ist, es sei denn, der Modus wird über die CSS {{cssxref("mask-type")}} Eigenschaft oder das SVG {{svgattr("mask-type")}} Attribut auf `alpha` geändert.

Der Wert `mask-mode` ist wichtig, weil er bestimmt, ob der Maskierungseffekt lediglich von den Alphakanalwerten der Bildquelle oder einer Kombination dieser und der Helligkeit der Maske (der Helligkeit/Dunkelheit der Farben, die die `mask-image` bilden) abhängt:

- In allen Fällen zählt die Alpha-Transparenz der Maske; Bereiche des Elements, die von undurchsichtigen Abschnitten des `mask-image` maskiert werden, werden gerendert, während Bereiche, die von transparenten Bildabschnitten maskiert werden, verborgen sind.
- Wenn der `mask-mode` Wert gesetzt oder auf `alpha` aufgelöst wird, zählen nur die Alphakanäle der Farben; Farbton, Helligkeit etc. spielen keine Rolle.
- Wenn die `mask-mode` Eigenschaft auf `luminance` gesetzt ist oder dazu neigt, ist der Maskierungswert der Helligkeitswert jeder Farbe multipliziert mit seinem Alphawert. Der `mask-mode` wird auf `luminance` gelöst, wenn er explizit auf diesen Wert gesetzt wird oder wenn die Eigenschaft auf `match-source` eingestellt ist und die `mask-image` Quelle ein SVG {{svgelement("mask")}} ist, das seine {{cssxref("mask-type")}} Eigenschaft oder {{svgattr("mask-type")}} Attribut nicht explizit auf `alpha` eingestellt hat.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verlauf als Maskenbild

In diesem Beispiel verwenden wir einen `<image>` Wert als Maske, indem wir einen CSS [radialen Verlauf](/de/docs/Web/CSS/Reference/Values/gradient/radial-gradient) als unser Maskenbild definieren, um ein rundes Bild mit weichem Rand zu erstellen.

#### HTML

Wir fügen ein HTML {{htmlelement("img")}} Element ein, das auch in allen anderen Beispielen verwendet wird.

```html live-sample___example-image live-sample___first-example
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

{{EmbedLiveSample("example-image", "100%", 250)}}

#### CSS

Wir verwenden die CSS {{CSSxRef("gradient/radial-gradient")}} Funktion, um eine Maske zu erstellen, die einen schwarzen Kreis mit einem Radius hat, der die Hälfte der Breite der Maske beträgt, bevor sie über 10% transparent wird.

```css live-sample___first-example
img {
  mask-image: radial-gradient(black 50%, transparent 60%);
}
```

#### Ergebnisse

{{EmbedLiveSample("first-example", "100%", 250)}}

Der Teil des ursprünglichen Elements, der durch den schwarzen Kreis maskiert wird, ist vollständig undurchsichtig, verblasst zu transparent, während die Maske zu transparent verblasst.

### Bildressource als Maskenbild

In diesem Beispiel ist das `<mask-source>` als unser Maskenbild ein externes SVG.

#### HTML

Wir verwenden dasselbe Bild wie im vorherigen Beispiel. Wir haben auch das Bild hinzugefügt, das wir als Maske verwenden werden; ein Stern, dessen {{cssxref("fill-opacity")}} `0.5` oder 50% undurchsichtig ist.

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

Die Maske ist halb undurchsichtig, weshalb die Farben nicht so lebendig sind wie im vorherigen Beispiel. Der sichtbare Teil des Bildes ist 50% undurchsichtig; die Deckkraft der angewendeten Maske.
Die Maske ist kleiner als das Bild, daher wird sie standardmäßig wiederholt. Wir hätten {{cssxref("mask-repeat")}} verwenden können, um die Wiederholung zu steuern oder {{cssxref("mask-size")}} um die Größe der Maske zu ändern, was wir im nächsten Beispiel tun.

### Mehrere Masken

Dieses Beispiel demonstriert die Anwendung mehrerer Masken.

```html hidden
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

#### CSS

Wir wenden zwei Masken an — die gleiche halbtransparente SVG wie im vorherigen Beispiel und einen {{CSSxRef("gradient/repeating-radial-gradient")}}. Wir steuern die Größe der Masken mit der {{cssxref("mask-size")}} Eigenschaft. Da unsere erste Maske nicht auf 100% dimensioniert ist, stellen wir sicher, dass unsere Masken zentriert sind und nicht mit den {{cssxref("mask-position")}} und {{cssxref("mask-repeat")}} Eigenschaften wiederholen, jeweils.

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

Dieses Beispiel demonstriert die Verwendung von SVG {{svgelement("mask")}} Elementen als Masken. In diesem Fall spielen die Farben der Maske eine Rolle, da der {{cssxref("mask-type")}} Wert für SVG-Masken standardmäßig `luminance` ist, was bedeutet, dass weiße undurchsichtige Bereiche (100% Luminanz) maskiert und sichtbar sind, transparente und schwarze Bereiche (0% Luminanz) abgeschnitten werden, und alles dazwischen wird teilweise maskiert.

#### HTML

Wir haben eine `id` für jedes unserer vier Bilder hinzugefügt und ein SVG, das ebenso viele `<mask>` Elemente enthält.

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

Wir wenden eine andere `<mask>` auf jedes `<img>` an. Kein Teil des letzten Bildes, mit dem `black` Füllung, wird standardmäßig sichtbar sein. In diesem Fall sind, während alle in diesem Beispiel verwendeten Farben vollständig undurchsichtig sind, der `mask-mode` standardmäßig auf `match-type`, was in diesem Fall auf `luminance` aufgelöst wird.

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

Die Luminanzwerte von `black`, `white` und `green` sind `0`, `100` und [`46.228`](https://www.colorhexa.com/008000), beziehungsweise. Dies bedeutet, dass die Bereiche, in denen die Maske weiß ist, sichtbar sind, während Bereiche, in denen die Maske schwarz oder vollständig transparent ist, abgeschnitten werden (nicht sichtbar). Bereiche, in denen die Maske grün ist, sind sichtbar, aber heller, was einer weißen Maske entspricht, die zu 46.228% undurchsichtig ist.

#### Ergebnisse

{{EmbedLiveSample("SVG elements as masks", "100%", 540)}}

Aktivieren Sie das Kontrollkästchen, um den Wert des `mask-mode` zwischen `alpha` (aktiviert) und dem Anfangswert umzuschalten, der auf `luminance` (deaktiviert) eingestellt wird. Wenn `alpha` verwendet wird, spielt die Farbe der Maske keine Rolle; alles was zählt, ist die Alpha-Transparenz. Wenn der Wert auf `luminance` aufgelöst wird, sind `white` Bereiche sichtbar, `black` Bereiche nicht, und `green` Bereiche sind sichtbar, aber mit einer Deckkraft, die der Luminanz der Farbe `green` entspricht. Wenn `mask-mode` auf `alpha` eingestellt ist, sind die Farben gleichwertig, da sie alle vollständig undurchsichtig sind.

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
- [CSS-Maskierungsmodul](/de/docs/Web/CSS/CSS_masking)
