---
title: mask-image
slug: Web/CSS/mask-image
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Die **`mask-image`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt das Bild, das als Maskierungsschicht für ein Element verwendet wird. Es verbirgt Bereiche des Elements, auf dem das Maskierungsbild basierend auf dem Alphakanal des Maskierungsbildes und, abhängig vom Wert der {{cssxref("mask-mode")}} Eigenschaft, der Helligkeit der Farben des Maskierungsbildes angewendet wird.

## Syntax

```css
/* Keyword value */
mask-image: none;

/* <mask-source> value */
mask-image: url("masks.svg#mask1");

/* <image> values */
mask-image: linear-gradient(rgb(0 0 0 / 100%), transparent);
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
  - : Dieses Schlüsselwort wird als eine transparente schwarze Bildebene interpretiert.

- `<mask-source>`
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}} Verweis auf ein {{SVGElement("mask")}} oder ein CSS-Bild.

- {{cssxref("&lt;image&gt;")}}
  - : Ein Bildwert, der als Maskenbildebene verwendet wird.

## Beschreibung

Die `mask-image` Eigenschaft liefert eine Maske, die Teile des Elements verbirgt, auf das sie angewendet wird. Der Wert ist eine kommaseparierte Liste von Maskenreferenzen. Jede Maskenreferenz ist ein `<image>`, ein `<mask-source>` oder das Schlüsselwort `none`.

Ein `<image>` kann jeder Bildtyp sein, einschließlich generierter Bilder wie [CSS-Verläufe](/de/docs/Web/CSS/gradient).

Wenn nur ein Wert in der `mask-image` Eigenschaft angegeben ist und dieser Wert `none` ist, wird kein Maskeneffekt sichtbar. Wenn mehrere Werte angegeben sind, kann ein in der Liste enthaltenes `none` keinen direkten Effekt haben, jedoch werden andere `mask-*` Werte an derselben Listenposition auf eine transparente schwarze Maskenebene angewendet und haben keinen visuellen Effekt.

Nur Bildquellen, die über HTTP- und HTTPS-Protokolle bereitgestellt werden, werden als `<image>` Werte akzeptiert, aufgrund der {{Glossary("CORS", "CORS")}} Richtlinie. Lokal bereitgestellte Bilder, einschließlich relativer oder absoluter `file://` Protokolle, werden nicht akzeptiert und als transparentes Schwarz dargestellt. Um Bildquellen-URLs lokal zu testen, [richten Sie einen lokalen Server ein](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection#localhost).

Eine Maske wird als transparente schwarze Bildebene gezählt, die nichts zeigt, in folgenden Fällen:

- Das Maskierungsbild ist leer (null Breite oder null Höhe).
- Das Maskierungsbild kann nicht heruntergeladen werden.
- Der Browser unterstützt das Maskenbildformat nicht.
- Das Maskierungsbild existiert nicht.
- Der Maskenwert verweist nicht auf ein Maskierungsbild.

Der Standardwert der {{cssxref("mask-mode")}} Eigenschaft ist `match-source`, was bedeutet, dass der Modus durch den Modus des Maskierungsbildes selbst definiert ist. Der Modus des Maskierungsbildes ist im Allgemeinen `alpha`, es sei denn, die Maskenquelle ist ein SVG {{svgelement("mask")}} Element, in diesem Fall ist der Modus `luminance`, es sei denn, der Modus wird durch die CSS {{cssxref("mask-type")}} Eigenschaft oder das SVG {{svgattr("mask-type")}} Attribut auf `alpha` geändert.

Der `mask-mode` Wert ist von Bedeutung, da er bestimmt, ob der Maskierungseffekt nur von den Alphakanalwerten der Bildquelle oder von einer Kombination dieser und der Helligkeit der Maske (die Helligkeit/Dunkelheit der Farben, die die `mask-image` ausmachen) abhängt:

- In allen Fällen ist die Alphatransparenz der Maske von Bedeutung; Bereiche des Elements, die durch undurchsichtige Abschnitte des `mask-image` maskiert werden, werden gerendert, während durch transparente Bildabschnitte maskierte Bereiche verborgen sind.
- Wenn der `mask-mode` Wert auf oder zu `alpha` auflöst, zählen nur die Alphakanäle der Farben; der Farbton, die Helligkeit usw. spielen keine Rolle.
- Wenn die `mask-mode` Eigenschaft auf oder standardmäßig auf `luminance` gesetzt ist, ist der Maskierungswert der Helligkeitswert jeder Farbe multipliziert mit ihrem Alpha-Wert. Die `mask-mode` wird auf `luminance` auflösen, wenn explizit auf diesen Wert gesetzt, oder wenn die Eigenschaft auf `match-source` gesetzt ist und die `mask-image` Quelle ein SVG {{svgelement("mask")}} ist, das nicht seine {{cssxref("mask-type")}} Eigenschaft oder das {{svgattr("mask-type")}} Attribut explizit auf `alpha` gesetzt hat.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verlauf als Maskenbild

In diesem Beispiel verwenden wir einen `<image>` Wert als Maske und definieren einen CSS [Radialverlauf](/de/docs/Web/CSS/gradient/radial-gradient) als unser Maskenbild, um ein rundes Bild mit weichem Rand zu erstellen.

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

Der Teil des ursprünglichen Elements, der von dem schwarzen Kreis maskiert wird, ist vollständig undurchsichtig und wird transparent, wenn die Maske transparent wird.

### Bildquelle als Maskenbild

In diesem Beispiel ist das `<mask-source>`, das als unser Maskenbild verwendet wird, ein externes SVG.

#### HTML

Wir fügen dasselbe Bild wie im vorherigen Beispiel ein. Wir haben auch das Bild hinzugefügt, das wir als Maske verwenden werden; ein Stern, dessen {{cssxref("fill-opacity")}} `0.5` oder 50% undurchsichtig ist.

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

Die Maske ist halbtransparent, daher sind die Farben nicht so lebendig wie im vorherigen Beispiel. Der sichtbare Teil des Bildes ist 50% undurchsichtig; die Opazität der aufgetragenen Maske.
Die Maske ist kleiner als das Bild und wiederholt sich daher standardmäßig. Wir könnten {{cssxref("mask-repeat")}} verwenden, um die Wiederholung zu steuern, oder {{cssxref("mask-size")}}, um die Größe der Maske zu ändern, was wir im nächsten Beispiel tun.

### Mehrere Masken

Dieses Beispiel demonstriert die Anwendung mehrerer Masken.

```html hidden
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

#### CSS

Wir wenden zwei Masken an – die gleiche halbtransparente SVG wie im vorherigen Beispiel und ein {{CSSxRef("gradient/repeating-radial-gradient")}}. Wir steuern die Größe der Masken mit der {{cssxref("mask-size")}} Eigenschaft. Da unsere erste Maske nicht auf 100% Größe ist, stellen wir sicher, dass unsere Masken zentriert sind und sich nicht mit den {{cssxref("mask-position")}} und {{cssxref("mask-repeat")}} Eigenschaften wiederholen.

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

Dieses Beispiel zeigt die Verwendung von SVG {{svgelement("mask")}} Elementen als Masken. In diesem Fall ist die Farbe der Maske von Bedeutung, da der {{cssxref("mask-type")}} Wert für SVG-Masken standardmäßig `luminance` ist. Das bedeutet, dass weiße, undurchsichtige Bereiche (100% Helligkeit) maskiert und sichtbar sein werden, transparente und schwarze Bereiche (0% Helligkeit) werden abgeschnitten, und alles dazwischen wird teilweise maskiert.

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

Wir wenden eine andere `<mask>` auf jedes `<img>` an. Kein Teil des letzten Bildes, mit der `black` Füllung, wird standardmäßig sichtbar sein. In diesem Fall sind alle in diesem Beispiel verwendeten Farben vollständig undurchsichtig, der `mask-mode` standardmäßig auf `match-type`, der in diesem Fall zu `luminance` wird.

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

Die Helligkeitswerte von `black`, `white` und `green` sind `0`, `100` und [`46.228`](https://www.colorhexa.com/008000), jeweils. Das bedeutet, dass die Bereiche, in denen die Maske weiß ist, sichtbar sind, während die Bereiche, in denen die Maske schwarz oder vollständig transparent ist, abgeschnitten werden (nicht sichtbar). Bereiche, in denen die Maske grün ist, sind sichtbar, aber heller, was einer weißen Maske entspricht, die 46.228% undurchsichtig ist.

#### Ergebnisse

{{EmbedLiveSample("SVG elements as masks", "100%", 540)}}

Aktivieren Sie das Kontrollkästchen, um den Wert des `mask-mode` zwischen `alpha` (aktiviert) und dem Anfangswert umzuschalten, der zu `luminance` (deaktiviert) wird. Wenn `alpha` verwendet wird, spielt die Farbe der Maske keine Rolle; alles, was zählt, ist die Alphatransparenz. Wenn der Wert zu `luminance` auflöst, sind `white` Bereiche sichtbar, `black` Bereiche sind nicht und `green` Bereiche sind sichtbar, jedoch mit einer Opazität, die der Helligkeit der Farbe `green` entspricht. Wenn `mask-mode` auf `alpha` gesetzt ist, sind die Farben gleichwertig, da sie alle vollständig undurchsichtig sind.

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
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
