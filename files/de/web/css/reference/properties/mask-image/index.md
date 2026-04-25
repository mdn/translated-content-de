---
title: "`mask-image` CSS property"
short-title: mask-image
slug: Web/CSS/Reference/Properties/mask-image
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`mask-image`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt das Bild fest, das als Maskenschicht für ein Element verwendet wird. Abschnitte des Elements, auf dem das Maskierungsbild festgelegt ist, werden basierend auf dem Alphakanal des Maskenbildes und, abhängig vom Wert der {{cssxref("mask-mode")}}-Eigenschaft, der Leuchtdichte der Farben des Maskenbildes ausgeblendet.

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
  - : Ein {{cssxref("url_value", "&lt;url&gt;")}}-Verweis auf ein {{SVGElement("mask")}} oder auf ein CSS-Bild.

- {{cssxref("image")}}
  - : Ein Bildwert, der als Maskenbildschicht verwendet wird.

## Beschreibung

Die Eigenschaft `mask-image` bietet eine Maske, die Teile des Elements ausblendet, auf das sie angewendet wird. Der Wert ist eine kommagetrennte Liste von Maskenreferenzen. Jede Maskenreferenz ist ein `<image>`, ein `<mask-source>` oder das Schlüsselwort `none`.

Ein `<image>` kann jeder Bildtyp sein, einschließlich generierter Bilder wie [CSS-Verläufe](/de/docs/Web/CSS/Reference/Values/gradient).

Wenn nur ein Wert in der Eigenschaft `mask-image` angegeben ist und dieser Wert `none` ist, wird kein Maskierungseffekt sichtbar. Wenn mehrere Werte angegeben sind, kann ein `none`-Wert in der Liste keinen direkten Effekt haben, jedoch werden andere `mask-*`-Werte in derselben Listenposition auf eine transparente schwarze Maskenschicht angewendet und haben keinen visuellen Effekt.

Nur Bildquellen, die über die HTTP- und HTTPS-Protokolle bereitgestellt werden, werden als `<image>`-Werte aufgrund der {{Glossary("CORS", "CORS")}}-Richtlinie akzeptiert. Lokal bereitgestellte Bilder, einschließlich relativer oder absoluter `file://`-Protokolle, werden nicht akzeptiert und als transparentes Schwarz gerendert. Um URL-Bildquellen lokal zu testen, [richten Sie einen lokalen Server ein](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection#localhost).

Eine Maske wird in den folgenden Fällen als transparente schwarze Bildschicht gezählt, die nichts sichtbar macht:

- Das Maskenbild ist leer (null Breite oder null Höhe).
- Das Maskenbild kann nicht heruntergeladen werden.
- Der Browser unterstützt das Format des Maskenbildes nicht.
- Das Maskenbild existiert nicht.
- Der Maskenwert zeigt nicht auf ein Maskenbild.

Der Standardwert der {{cssxref("mask-mode")}}-Eigenschaft ist `match-source`, was bedeutet, dass der Modus durch den Modus des Maskenbildes selbst definiert ist. Der Modus des Maskenbildes ist normalerweise `alpha`, es sei denn, die Maskenquelle ist ein SVG {{svgelement("mask")}}-Element, in diesem Fall ist der Modus `luminance`, es sei denn, der Modus wird über die CSS {{cssxref("mask-type")}}-Eigenschaft oder das SVG {{svgattr("mask-type")}}-Attribut auf `alpha` geändert.

Der `mask-mode`-Wert ist signifikant, da er bestimmt, ob der Maskierungseffekt allein auf den Alphakanalwerten der Bildquelle oder einer Kombination dieser und der Leuchtdichte der Maske (die Helligkeit/Dunkelheit der Farben, die das `mask-image` ausmachen) beruht:

- In allen Fällen ist die Alphatransparenz der Maske wichtig; Bereiche des Elements, die von undurchsichtigen Abschnitten des `mask-image` maskiert werden, werden gerendert, während Bereiche, die von transparenten Bildabschnitten maskiert werden, ausgeblendet werden.
- Wenn der `mask-mode`-Wert auf `alpha` gesetzt oder dorthin aufgelöst wird, zählt nur der Alphakanal der Farben; Farbton, Helligkeit usw. sind nicht von Bedeutung.
- Wenn die `mask-mode`-Eigenschaft auf `luminance` gesetzt oder standardmäßig festgelegt ist, ist der Maskierungswert der Leuchtdichtewert jeder Farbe multipliziert mit ihrem Alphawert. Der `mask-mode` wird auf `luminance` aufgelöst, wenn er explizit auf diesen Wert gesetzt ist, oder wenn die Eigenschaft auf `match-source` gesetzt ist und die `mask-image`-Quelle ein SVG {{svgelement("mask")}} ist, das seine {{cssxref("mask-type")}}-Eigenschaft oder das {{svgattr("mask-type")}}-Attribut nicht explizit auf `alpha` gesetzt hat.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verlauf als Maskenbild

In diesem Beispiel verwenden wir einen `<image>`-Wert als Maske und definieren einen CSS-[radialen Verlauf](/de/docs/Web/CSS/Reference/Values/gradient/radial-gradient) als unser Maskenbild, um ein rundes Bild mit weichem Rand zu erstellen.

#### HTML

Wir fügen ein HTML-{{htmlelement("img")}}-Element ein, das auch in allen anderen Beispielen verwendet wird.

```html live-sample___example-image live-sample___first-example
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

{{EmbedLiveSample("example-image", "100%", 250)}}

#### CSS

Wir verwenden die CSS-{{CSSxRef("gradient/radial-gradient")}}-Funktion, um eine Maske zu erstellen, die einen schwarzen Kreis mit einem Radius hat, der die Hälfte der Breite der Maske beträgt, bevor sie über 10 % in Transparenz übergeht.

```css live-sample___first-example
img {
  mask-image: radial-gradient(black 50%, transparent 60%);
}
```

#### Ergebnisse

{{EmbedLiveSample("first-example", "100%", 250)}}

Der Teil des ursprünglichen Elements, der vom schwarzen Kreis maskiert wird, ist völlig undurchsichtig, der Übergang zur Transparenz erfolgt, während die Maske zur Transparenz übergeht.

### Bildressource als Maskenbild

In diesem Beispiel wird `<mask-source>` als externes SVG verwendet.

#### HTML

Wir fügen dasselbe Bild wie im vorherigen Beispiel ein. Wir haben auch das Bild hinzugefügt, das wir als Maske verwenden werden; ein Stern, dessen {{cssxref("fill-opacity")}} `0.5`, also 50% undurchsichtig ist.

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

Die Maske ist halbtransparent, weshalb die Farben nicht so lebendig sind wie im vorherigen Beispiel. Der sichtbare Teil des Bildes ist 50% undurchsichtig; die Deckkraft der angewendeten Maske.
Die Maske ist kleiner als das Bild und wird daher standardmäßig wiederholt. Wir könnten {{cssxref("mask-repeat")}} verwenden, um die Wiederholung zu steuern, oder {{cssxref("mask-size")}}, um die Größe der Maske zu ändern, was wir im nächsten Beispiel tun.

### Mehrere Masken

Dieses Beispiel zeigt die Anwendung mehrerer Masken.

```html hidden
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

#### CSS

Wir wenden zwei Masken an — dasselbe halbtransparente SVG wie im vorherigen Beispiel und einen {{CSSxRef("gradient/repeating-radial-gradient")}}. Wir kontrollieren die Größe der Masken mit der {{cssxref("mask-size")}}-Eigenschaft. Da unsere erste Maske nicht auf 100% skaliert ist, stellen wir sicher, dass unsere Masken zentriert sind und sich mit den Eigenschaften {{cssxref("mask-position")}} und {{cssxref("mask-repeat")}} nicht wiederholen.

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

Dieses Beispiel zeigt die Verwendung von SVG {{svgelement("mask")}}-Elementen als Masken. In diesem Fall ist die Farbe der Maske wichtig, da der {{cssxref("mask-type")}}-Wert für SVG-Masken standardmäßig `luminance` ist, was bedeutet, dass weiße undurchsichtige Bereiche (100% Leuchtdichte) maskiert und sichtbar sind, transparente und schwarze Bereiche (0% Leuchtdichte) ausgeschnitten werden und alles dazwischen teilweise maskiert wird.

#### HTML

Wir haben eine `id` für jedes unserer vier Bilder eingefügt und ein SVG, das eine entsprechend gleiche Anzahl von `<mask>`-Elementen enthält.

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

Wir wenden eine andere `<mask>` auf jedes `<img>` an. Kein Teil des letzten Bildes mit der `black`-Füllung wird standardmäßig sichtbar sein. In diesem Fall sind zwar alle in diesem Beispiel verwendeten Farben vollständig undurchsichtig, aber der `mask-mode`-Standard `match-type`, der in diesem Fall in `luminance` aufgelöst wird.

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

Die Leuchtdichtewerte von `black`, `white` und `green` sind `0`, `100` und [`46.228`](https://www.colorhexa.com/008000) beziehungsweise. Das bedeutet: Bereiche, in denen die Maske weiß ist, werden sichtbar sein, während Bereiche, in denen die Maske schwarz oder vollständig transparent ist, ausgeschnitten werden (nicht sichtbar). Bereiche, in denen die Maske grün ist, werden sichtbar sein, aber heller, was einem weißen Maske entspricht, die 46.228% undurchsichtig ist.

#### Ergebnisse

{{EmbedLiveSample("SVG elements as masks", "100%", 540)}}

Schalten Sie die Checkbox um, um den Wert des `mask-mode` zwischen `alpha` (aktiviert) und dem Anfangswert, der sich in `luminance` auflöst (deaktiviert), umzuschalten. Wenn `alpha` verwendet wird, spielt die Farbe der Maske keine Rolle; alles, was zählt, ist die Alphatransparenz. Wenn der Wert sich in `luminance` auflöst, sind `white`-Bereiche sichtbar, `black`-Bereiche nicht und `green`-Bereiche sind sichtbar, aber mit einer Deckkraft, die der Leuchtdichte der Farbe `green` entspricht. Wenn `mask-mode` auf `alpha` gesetzt ist, sind die Farben gleichwertig, da sie alle vollständig undurchsichtig sind.

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
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS-`mask`-Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklaration mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking)-Modul
