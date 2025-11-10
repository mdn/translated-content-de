---
title: mask-image
slug: Web/CSS/Reference/Properties/mask-image
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`mask-image`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Bild fest, das als Maskenebene für ein Element verwendet wird. Diese Eigenschaft verbirgt Abschnitte des Elements, auf dem das Maskenbild basierend auf dem Alphakanal des Maskenbildes eingestellt ist und je nach Wert der {{cssxref("mask-mode")}} Eigenschaft auch die Luminanz der Farben des Maskenbildes berücksichtigt.

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

  - : Dieses Schlüsselwort wird als ein transparentes schwarzes Bildebene interpretiert.

- `<mask-source>`

  - : Ein {{cssxref("url_value", "&lt;url&gt;")}} Verweis auf eine {{SVGElement("mask")}} oder auf ein CSS-Bild.

- {{cssxref("&lt;image&gt;")}}
  - : Ein Bildwert, der als Maskenbildebene verwendet wird.

## Beschreibung

Die `mask-image` Eigenschaft liefert eine Maske, die Teile des Elements, auf das sie angewendet wird, verbirgt. Der Wert ist eine durch Kommas getrennte Liste von Maskenreferenzen. Jede Maskenreferenz ist ein `<image>`, ein `<mask-source>` oder das Schlüsselwort `none`.

Ein `<image>` kann jede Art von Bild sein, einschließlich generierter Bilder wie [CSS-Gradienten](/de/docs/Web/CSS/Reference/Values/gradient).

Wenn nur ein Wert für die `mask-image` Eigenschaft angegeben ist und dieser Wert `none` ist, wird kein Maskeneffekt sichtbar. Wenn mehrere Werte angegeben sind, kann ein `none`-Wert in der Liste keinen direkten Effekt haben, jedoch werden andere `mask-*` Werte in derselben Listenposition auf eine transparente schwarze Maskenschicht angewendet und haben keinen visuellen Effekt.

Nur Bildquellen, die über die Protokolle HTTP und HTTPS bereitgestellt werden, werden als `<image>` Werte akzeptiert aufgrund der {{Glossary("CORS", "CORS")}} Richtlinie. Lokal bereitgestellte Bilder, einschließlich relativer oder absoluter `file://` Protokolle, werden nicht akzeptiert und als transparent schwarz gerendert. Um URL-Bildquellen lokal zu testen, [richten Sie einen lokalen Server ein](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection#localhost).

Eine Maske wird in folgenden Fällen als eine transparente schwarze Bildebene betrachtet, die nichts offenbart:

- Das Maskenbild ist leer (Breite oder Höhe gleich null).
- Das Maskenbild kann nicht heruntergeladen werden.
- Der Browser unterstützt das Maskenbildformat nicht.
- Das Maskenbild existiert nicht.
- Der Maskenwert verweist nicht auf ein Maskenbild.

Der Standardwert der {{cssxref("mask-mode")}} Eigenschaft ist `match-source`, was bedeutet, dass der Modus durch den Modus des Maskenbildes selbst definiert ist. Der Modus des Maskenbildes ist generell `alpha`, außer wenn die Maskenquelle ein SVG {{svgelement("mask")}} Element ist. In diesem Fall ist der Modus `luminance`, es sei denn, der Modus wird über die CSS {{cssxref("mask-type")}} Eigenschaft oder das SVG {{svgattr("mask-type")}} Attribut auf `alpha` geändert.

Der `mask-mode` Wert ist entscheidend, da er bestimmt, ob der Maskeneffekt nur von den Alphakanalwerten der Bildquelle oder von einer Kombination dieser und der Luminanz der Maske (die Helligkeit/Dunkelheit der Farben, die das `mask-image` bilden) abhängt:

- In allen Fällen zählt die Alphatransparenz der Maske; die Bereiche des Elements, die von undurchsichtigen Abschnitten des `mask-image` maskiert werden, werden gerendert, während Bereiche, die von transparenten Bildabschnitten maskiert werden, verborgen sind.
- Wenn der `mask-mode` Wert auf `alpha` gesetzt oder auf `alpha` aufgelöst wird, zählen nur die Alphakanäle der Farben; der Farbton, die Helligkeit usw. sind irrelevant.
- Wenn die `mask-mode` Eigenschaft auf `luminance` gesetzt oder standardmäßig `luminance` ist, ist der Maskenwert der Luminanzwert jeder Farbe, multipliziert mit ihrem Alphawert. Der `mask-mode` wird auf `luminance` aufgelöst, wenn er explizit auf diesen Wert gesetzt ist, oder wenn die Eigenschaft auf `match-source` gesetzt ist und die `mask-image` Quelle ein SVG {{svgelement("mask")}} ist, das seine {{cssxref("mask-type")}} Eigenschaft oder das {{svgattr("mask-type")}} Attribut nicht explizit auf `alpha` gesetzt hat.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verlauf als Maskenbild

In diesem Beispiel verwenden wir einen `<image>` Wert als Maske und definieren einen CSS [radialen Verlauf](/de/docs/Web/CSS/Reference/Values/gradient/radial-gradient) als unser Maskenbild, um ein rundes Bild mit weichen Kanten zu erzeugen.

#### HTML

Wir integrieren ein HTML {{htmlelement("img")}} Element, das auch in allen anderen Beispielen verwendet wird.

```html live-sample___example-image live-sample___first-example
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

{{EmbedLiveSample("example-image", "100%", 250)}}

#### CSS

Wir verwenden die CSS {{CSSxRef("gradient/radial-gradient")}} Funktion, um eine Maske zu erstellen, die einen schwarzen Kreis mit einem Radius, der die Hälfte der Breite der Maske beträgt, bevor sie in 10% Transparenz übergeht, generiert.

```css live-sample___first-example
img {
  mask-image: radial-gradient(black 50%, transparent 60%);
}
```

#### Ergebnisse

{{EmbedLiveSample("first-example", "100%", 250)}}

Der Teil des originalen Elements, der von dem schwarzen Kreis maskiert wird, ist vollständig undurchsichtig und verblasst zu transparent, wenn die Maske transparent wird.

### Bildressource als Maskenbild

In diesem Beispiel wird der `<mask-source>`, den wir als Maskenbild verwenden, eine externe SVG.

#### HTML

Wir verwenden das gleiche Bild wie im vorherigen Beispiel. Wir haben auch das Bild hinzugefügt, das wir als Maske verwenden werden; ein Stern, dessen {{cssxref("fill-opacity")}} `0.5` beträgt, also 50 % undurchsichtig ist.

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

Die Maske ist halbtransparent, weshalb die Farben nicht so lebendig sind wie im vorherigen Beispiel. Der sichtbare Teil des Bildes ist 50 % undurchsichtig; die aufgebrachte Maskenopazität. Die Maske ist kleiner als das Bild, daher wird sie standardmäßig wiederholt. Wir könnten {{cssxref("mask-repeat")}} verwenden, um die Wiederholung zu steuern, oder {{cssxref("mask-size")}}, um die Größe der Maske zu ändern, was wir im nächsten Beispiel tun.

### Mehrere Masken

Dieses Beispiel zeigt die Anwendung mehrerer Masken.

```html hidden
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

#### CSS

Wir wenden zwei Masken an — die gleiche halbtransparente SVG wie im vorherigen Beispiel und einen {{CSSxRef("gradient/repeating-radial-gradient")}}. Wir steuern die Größe der Masken mithilfe der {{cssxref("mask-size")}} Eigenschaft. Da unsere erste Maske nicht auf 100% dimensioniert ist, stellen wir sicher, dass unsere Masken zentriert sind und sich nicht mit den {{cssxref("mask-position")}} und {{cssxref("mask-repeat")}} Eigenschaften wiederholen.

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

### Maskieren mit SVG `<mask>`

Dieses Beispiel demonstriert die Verwendung von SVG {{svgelement("mask")}} Elementen als Masken. In diesem Fall ist die Farbe der Maske wichtig, da der {{cssxref("mask-type")}} Wert für SVG-Masken standardmäßig auf `luminance` gestellt ist, was bedeutet, dass weiße undurchsichtige Bereiche (100% Luminanz) maskiert und sichtbar sind, transparente und schwarze Bereiche (0% Luminanz) abgeschnitten werden und alles dazwischen teilweise maskiert wird.

#### HTML

Wir haben jedem unserer vier Bilder eine `id` hinzugefügt und ein SVG, das eine gleiche Anzahl von `<mask>` Elementen enthält.

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

Wir wenden eine andere `<mask>` auf jedes `<img>` an. Kein Teil des letzten Bildes mit der `black` Füllung wird standardmäßig sichtbar sein. In diesem Fall sind, obwohl alle Farben, die in diesem Beispiel verwendet werden, vollständig undurchsichtig sind, die `mask-mode` Standardwerte auf `match-type` eingestellt, die sich in diesem Fall zu `luminance` auflösen.

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

Die Luminanzwerte von `black`, `white` und `green` sind `0`, `100` und [`46.228`](https://www.colorhexa.com/008000). Dies bedeutet, dass die Bereiche, in denen die Maske weiß ist, sichtbar sein werden, während die Bereiche, in denen die Maske schwarz oder vollständig transparent ist, abgeschnitten werden (nicht sichtbar). Bereiche, wo die Maske grün ist, werden sichtbar, aber heller sein, was einer weißen Maske entspricht, die 46.228% undurchsichtig ist.

#### Ergebnisse

{{EmbedLiveSample("SVG elements as masks", "100%", 540)}}

Aktivieren Sie das Kontrollkästchen, um den Wert der `mask-mode` zwischen `alpha` (aktiviert) und dem Anfangswert, der sich zu `luminance` auflöst (deaktiviert), umzuschalten. Wenn `alpha` verwendet wird, spielt die Farbe der Maske keine Rolle; es zählt nur die Alphatransparenz. Wenn der Wert sich zu `luminance` auflöst, sind `weiße` Bereiche sichtbar, `schwarze` Bereiche nicht und `grüne` Bereiche sind sichtbar, jedoch mit einer Opazität, die der Luminanz der Farbe `green` entspricht. Wenn `mask-mode` auf `alpha` eingestellt ist, sind die Farben gleichwertig, da sie alle vollständig undurchsichtig sind.

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
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Verwendung mehrerer Masken deklarieren](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS Maskierung](/de/docs/Web/CSS/Guides/Masking) Modul
