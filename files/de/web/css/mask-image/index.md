---
title: mask-image
slug: Web/CSS/mask-image
l10n:
  sourceCommit: 71870f6a10fa7cc9a308f58ab2c71ceb75566054
---

{{CSSRef}}

Die **`mask-image`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Bild fest, das als Maskenebene für ein Element verwendet wird. Sie verbirgt Bereiche des Elements, auf das das Maskierungsbild angewendet wird, basierend auf dem Alpha-Kanal des Maskierungsbildes und, abhängig vom Wert der {{cssxref("mask-mode")}}-Eigenschaft, der Luminanz der Farben des Maskierungsbildes.

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

  - : Ein {{cssxref("url_value", "&lt;url&gt;")}} Verweis auf ein {{SVGElement("mask")}} oder ein CSS-Bild.

- {{cssxref("&lt;image&gt;")}}
  - : Ein Bildwert, der als Maskenbildebene verwendet wird.

## Beschreibung

Die `mask-image` Eigenschaft bietet eine Maske, die Teile des Elements, auf das sie angewendet wird, verbirgt. Der Wert ist eine durch Kommas getrennte Liste von Maskenquellen. Jede Maskenquelle ist ein `<image>`, ein `<mask-source>`, oder das Schlüsselwort `none`.

Ein `<image>` kann jede Art von Bild sein, einschließlich generierter Bilder wie [CSS-Gradienten](/de/docs/Web/CSS/gradient).

Wenn in dem `mask-image` Eigenschaftswert nur ein Wert angegeben ist und dieser Wert `none` ist, wird kein Maskierungseffekt sichtbar sein. Wenn mehrere Werte angegeben sind, kann ein `none`-Wert in der Liste keinen direkten Effekt haben, jedoch werden andere `mask-*` Werte in derselben Listenposition auf eine transparente schwarze Maskenschicht angewendet und haben keinen sichtbaren Effekt.

Nur Bildquellen, die über die Protokolle HTTP und HTTPS bereitgestellt werden, werden als `<image>` Werte akzeptiert, aufgrund der {{Glossary("CORS", "CORS")}} Richtlinie. Lokal bereitgestellte Bilder, einschließlich relativer oder absoluter `file://` Protokolle, werden nicht akzeptiert und erscheinen als transparentes Schwarz. Um URL-Bildquellen lokal zu testen, [richten Sie einen lokalen Server ein](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection#localhost).

Eine Maske wird in den folgenden Fällen als transparente schwarze Bildebene betrachtet, die nichts zeigt:

- Das Maskenbild ist leer (null Breite oder Höhe).
- Das Maskenbild kann nicht heruntergeladen werden.
- Der Browser unterstützt das Maskenbildformat nicht.
- Das Maskenbild existiert nicht.
- Der Maskenwert zeigt nicht auf ein Maskenbild.

Der Standardwert der {{cssxref("mask-mode")}} Eigenschaft ist `match-source`, was bedeutet, dass der Modus durch den Modus des Maskierungsbildes selbst definiert wird. Der Modus des Maskierungsbildes ist im Allgemeinen `alpha`, außer wenn die Maskenquelle ein SVG {{svgelement("mask")}} Element ist, in welchem Fall der Modus `luminance` ist, es sei denn, der Modus wird durch die CSS {{cssxref("mask-type")}} Eigenschaft oder das SVG {{svgattr("mask-type")}} Attribut auf `alpha` geändert.

Der `mask-mode` Wert ist wichtig, weil er bestimmt, ob der Maskierungseffekt nur von den Alpha-Kanal-Werten der Bildquelle abhängt oder von einer Kombination aus diesen und der Luminanz der Maske (der Helligkeit/Dunkelheit der Farben, die das `mask-image` ausmachen):

- In allen Fällen zählt die Alpha-Transparenz der Maske; Bereiche des Elements, die von undurchsichtigen Abschnitten des `mask-image` maskiert werden, werden gerendert, während Bereiche, die von transparenten Bildabschnitten maskiert werden, verborgen sind.
- Wenn der `mask-mode` Wert auf `alpha` gesetzt ist oder darauf auflöst, zählen nur die Alpha-Kanäle der Farben; der Farbton, die Helligkeit, usw., sind unwichtig.
- Wenn die `mask-mode` Eigenschaft auf `luminance` gesetzt ist oder darauf auflöst, ist der Maskierungswert der Luminanzwert jeder Farbe multipliziert mit ihrem Alpha-Wert. Der `mask-mode` löst sich zu `luminance` auf, wenn er explizit auf diesen Wert gesetzt ist, oder wenn die Eigenschaft auf `match-source` gesetzt ist und die `mask-image` Quelle ein SVG {{svgelement("mask")}} ist, das seine {{cssxref("mask-type")}} Eigenschaft oder {{svgattr("mask-type")}} Attribut nicht explizit auf `alpha` gesetzt hat.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verlauf als Maskenbild

In diesem Beispiel verwenden wir einen `<image>` Wert als Maske und definieren einen CSS [radialen Verlauf](/de/docs/Web/CSS/gradient/radial-gradient) als unser Maskenbild, um ein rundes Bild mit einem weichen Rand zu erstellen.

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

Der Teil des ursprünglichen Elements, der vom schwarzen Kreis maskiert wird, ist vollständig undurchsichtig und verblasst zu transparent, während die Maske zu transparent verblasst.

### Bildressource als Maskenbild

In diesem Beispiel ist das `<mask-source>`, das als unser Maskenbild verwendet wird, ein externes SVG.

#### HTML

Wir verwenden dasselbe Bild wie im vorherigen Beispiel. Wir haben auch das Bild, das wir als Maske verwenden werden, eingefügt; einen Stern, dessen {{cssxref("fill-opacity")}} `0,5` ist, oder zu 50% undurchsichtig.

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

Die Maske ist halbtransparent, weshalb die Farben nicht so lebendig sind wie im vorherigen Beispiel. Der sichtbare Teil des Bildes ist zu 50% undurchsichtig; die Opazität der angelegten Maske.
Die Maske ist kleiner als das Bild und wird daher standardmäßig wiederholt. Wir hätten {{cssxref("mask-repeat")}} verwenden können, um das Wiederholen zu steuern, oder {{cssxref("mask-size")}}, um die Größe der Maske zu ändern, was wir im nächsten Beispiel tun.

### Mehrere Masken

Dieses Beispiel demonstriert die Anwendung mehrerer Masken.

```html hidden
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

#### CSS

Wir wenden zwei Masken an — dieselbe halbtransparente SVG wie im vorherigen Beispiel und eine {{CSSxRef("gradient/repeating-radial-gradient")}}. Wir steuern die Größe der Masken mit der {{cssxref("mask-size")}} Eigenschaft. Da unsere erste Maske nicht auf 100% skaliert ist, stellen wir sicher, dass unsere Masken zentriert sind und sich mit den Eigenschaften {{cssxref("mask-position")}} und {{cssxref("mask-repeat")}} nicht wiederholen.

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

Dieses Beispiel zeigt die Verwendung von SVG {{svgelement("mask")}} Elementen als Masken. In diesem Fall ist die Farbe der Maske von Bedeutung, da der {{cssxref("mask-type")}} Wert für SVG-Masken standardmäßig `luminance` ist, was bedeutet, dass weiße undurchsichtige Bereiche (100% Luminanz) maskiert und sichtbar sind, transparente und schwarze Bereiche (0% Luminanz) abgeschnitten werden und alles dazwischen teilweise maskiert wird.

#### HTML

Wir haben eine `id` für jedes unserer vier Bilder hinzugefügt und ein SVG, das eine entsprechende Anzahl von `<mask>` Elementen enthält.

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

Wir wenden eine andere `<mask>` auf jedes `<img>` an. Kein Teil des letzten Bildes mit dem `schwarzen` Füllung wird standardmäßig sichtbar sein. In diesem Fall sind, obwohl alle Farben in diesem Beispiel vollständig undurchsichtig sind, die `mask-mode` Voreinstellungen `match-type`, was in diesem Fall zu `luminance` führt.

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

Die Luminanzwerte von `black`, `white` und `green` sind `0`, `100` und [`46.228`](https://www.colorhexa.com/008000) bzw. Dies bedeutet, dass die Bereiche, in denen die Maske weiß ist, sichtbar sind, während Bereiche, in denen die Maske schwarz oder vollständig transparent ist, abgeschnitten werden (nicht sichtbar). Bereiche, in denen die Maske grün ist, sind sichtbar, aber heller, was einer weißen Maske entspricht, die zu 46,228% undurchsichtig ist.

#### Ergebnisse

{{EmbedLiveSample("SVG elements as masks", "100%", 540)}}

Aktivieren Sie das Kontrollkästchen, um den Wert des `mask-mode` zwischen `alpha` (aktiviert) und dem anfänglichen Wert, der auf `luminance` auflöst (deaktiviert), umzuschalten. Wenn `alpha` verwendet wird, spielt die Farbe der Maske keine Rolle; entscheidend ist nur die alpha-Transparenz. Wenn der Wert auf `luminance` auflöst, sind `weiße` Bereiche sichtbar, `schwarze` Bereiche nicht und `grüne` Bereiche sind sichtbar, aber mit einer Opazität, die der Luminanz der Farbe `grün` entspricht. Wenn `mask-mode` auf `alpha` gesetzt ist, sind die Farben gleichwertig, da sie alle vollständig undurchsichtig sind.

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
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
