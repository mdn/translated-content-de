---
title: "`mask-image` CSS property"
short-title: mask-image
slug: Web/CSS/Reference/Properties/mask-image
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`mask-image`** legt das Bild fest, das als Maskenebene für ein Element verwendet wird. Sie blendet Bereiche des Elements anhand des Alphakanals des Maskenbildes und – abhängig vom Wert der Eigenschaft {{cssxref("mask-mode")}} – anhand der Luminanz seiner Farben aus.

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
  - : Eine {{cssxref("url_value", "&lt;url&gt;")}}-Referenz auf ein {{SVGElement("mask")}}-Element oder ein CSS-Bild.

- {{cssxref("image")}}
  - : Ein Bildwert, der als Maskenbildebene verwendet wird.

## Beschreibung

Die Eigenschaft `mask-image` stellt eine Maske bereit, die einen Teil des Elements ausblendet, auf das sie angewendet wird. Ihr Wert ist eine durch Kommas getrennte Liste von Maskenreferenzen. Jede Maskenreferenz ist ein `<image>`, eine `<mask-source>` oder das Schlüsselwort `none`.

Ein `<image>` kann jede Art von Bild sein, einschließlich generierter Bilder wie [CSS-Verläufe](/de/docs/Web/CSS/Reference/Values/gradient).

Wenn für `mask-image` nur ein Wert angegeben wird und dieser `none` ist, ist kein Maskierungseffekt sichtbar. Werden mehrere Werte angegeben, hat ein `none`-Wert in der Liste möglicherweise keine unmittelbare Wirkung. Andere `mask-*`-Werte an derselben Listenposition werden jedoch auf eine transparente schwarze Maskenebene angewendet und haben keine sichtbare Wirkung.

Aufgrund der {{Glossary("CORS", "CORS")}}-Richtlinie werden als `<image>`-Werte nur Bildquellen akzeptiert, die über HTTP oder HTTPS bereitgestellt werden. Lokal bereitgestellte Bilder, auch über relative oder absolute `file://`-URLs, werden nicht akzeptiert und als transparentes Schwarz dargestellt. Um URL-Bildquellen lokal zu testen, [richten Sie einen lokalen Server ein](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection#localhost).

In den folgenden Fällen wird eine Maske als transparente schwarze Bildebene behandelt und macht somit nichts sichtbar:

- Das Maskenbild ist leer (Breite oder Höhe ist null).
- Das Maskenbild kann nicht heruntergeladen werden.
- Der Browser unterstützt das Format des Maskenbildes nicht.
- Das Maskenbild existiert nicht.
- Der Maskenwert verweist nicht auf ein Maskenbild.

Der Standardwert der Eigenschaft {{cssxref("mask-mode")}} ist `match-source`. Das bedeutet, dass der Modus durch den Modus des Maskenbildes selbst bestimmt wird. Der Modus des Maskenbildes ist normalerweise `alpha`. Ist die Maskenquelle jedoch ein SVG-{{svgelement("mask")}}-Element, lautet der Modus `luminance`, sofern er nicht über die CSS-Eigenschaft {{cssxref("mask-type")}} oder das SVG-Attribut {{svgattr("mask-type")}} auf `alpha` geändert wird.

Der Wert von `mask-mode` ist wichtig, da er bestimmt, ob der Maskierungseffekt allein von den Alphakanalwerten der Bildquelle oder zusätzlich von der Luminanz der Maske abhängt – also davon, wie hell oder dunkel die Farben sind, aus denen `mask-image` besteht:

- Die Alphatransparenz der Maske ist immer relevant: Elementbereiche, die von deckenden Bereichen des `mask-image` maskiert werden, werden dargestellt; Bereiche, die von transparenten Bildbereichen maskiert werden, werden ausgeblendet.
- Wenn der Wert von `mask-mode` auf `alpha` gesetzt ist oder zu `alpha` aufgelöst wird, zählt nur der Alphakanal der Farben. Farbton, Helligkeit und andere Farbeigenschaften spielen keine Rolle.
- Wenn die Eigenschaft `mask-mode` auf `luminance` gesetzt ist oder standardmäßig diesen Wert annimmt, ergibt sich der Maskierungswert aus dem Luminanzwert jeder Farbe multipliziert mit ihrem Alphawert. `mask-mode` wird zu `luminance` aufgelöst, wenn es ausdrücklich auf diesen Wert gesetzt ist oder wenn die Eigenschaft auf `match-source` gesetzt ist und die Quelle von `mask-image` ein SVG-{{svgelement("mask")}}-Element ist, dessen Eigenschaft {{cssxref("mask-type")}} oder Attribut {{svgattr("mask-type")}} nicht ausdrücklich auf `alpha` gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verlauf als Maskenbild

In diesem Beispiel verwenden wir einen `<image>`-Wert als Maske. Dazu definieren wir einen CSS-[Radialverlauf](/de/docs/Web/CSS/Reference/Values/gradient/radial-gradient) als Maskenbild, um ein rundes Bild mit weichem Rand zu erzeugen.

#### HTML

Wir fügen ein HTML-{{htmlelement("img")}}-Element ein, das auch in allen weiteren Beispielen verwendet wird.

```html live-sample___example-image live-sample___first-example
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

{{EmbedLiveSample("example-image", "100%", 250)}}

#### CSS

Wir verwenden die CSS-Funktion {{CSSxRef("gradient/radial-gradient")}}, um eine Maske mit einem schwarzen Kreis zu erstellen, dessen Radius der halben Breite der Maske entspricht. Anschließend geht der Kreis über einen Bereich von 10 % in Transparenz über.

```css live-sample___first-example
img {
  mask-image: radial-gradient(black 50%, transparent 60%);
}
```

#### Ergebnis

{{EmbedLiveSample("first-example", "100%", 250)}}

Der Teil des ursprünglichen Elements, der vom schwarzen Kreis maskiert wird, ist vollständig deckend und verblasst, während die Maske transparent wird.

### Bildressource als Maskenbild

In diesem Beispiel ist die als Maskenbild verwendete `<mask-source>` eine externe SVG-Datei.

#### HTML

Wir fügen dasselbe Bild wie im vorherigen Beispiel ein. Außerdem fügen wir das Bild hinzu, das wir als Maske verwenden: einen Stern, dessen {{cssxref("fill-opacity")}} den Wert `0.5` hat und der damit zu 50 % deckend ist.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />

<img
  src="https://mdn.github.io/shared-assets/images/examples/mask-star.svg"
  alt="A star" />
```

#### CSS

Wir verwenden `mask-star.svg` als Maskenbild für unser erstes Bild:

```css
img:first-of-type {
  mask-image: url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
}
```

#### Ergebnis

{{EmbedLiveSample("Image resource as a mask image", "100%", 250)}}

Die Maske ist halbtransparent. Deshalb sind die Farben nicht so kräftig wie im vorherigen Beispiel. Der sichtbare Teil des Bildes ist entsprechend der Deckkraft der angewendeten Maske zu 50 % deckend.
Da die Maske kleiner als das Bild ist, wird sie standardmäßig wiederholt. Mit {{cssxref("mask-repeat")}} könnten wir die Wiederholung steuern oder mit {{cssxref("mask-size")}} die Größe der Maske ändern. Letzteres tun wir im nächsten Beispiel.

### Mehrere Masken

Dieses Beispiel zeigt, wie mehrere Masken angewendet werden.

```html hidden
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

#### CSS

Wir wenden zwei Masken an: dieselbe halbtransparente SVG-Datei wie im vorherigen Beispiel und einen {{CSSxRef("gradient/repeating-radial-gradient")}}. Die Größe der Masken steuern wir mit der Eigenschaft {{cssxref("mask-size")}}. Da unsere erste Maske nicht auf 100 % skaliert ist, verwenden wir die Eigenschaften {{cssxref("mask-position")}} und {{cssxref("mask-repeat")}}, um die Masken zu zentrieren beziehungsweise ihre Wiederholung zu verhindern.

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

#### Ergebnis

{{EmbedLiveSample("multiple masks", "100%", 250)}}

### Maskierung mit SVG-`<mask>`

Dieses Beispiel zeigt, wie SVG-{{svgelement("mask")}}-Elemente als Masken verwendet werden. Hier spielt die Farbe der Maske eine Rolle, da der Wert von {{cssxref("mask-type")}} für SVG-Masken standardmäßig `luminance` ist. Das bedeutet: Weiße, deckende Bereiche (100 % Luminanz) werden maskiert und sind sichtbar; transparente und schwarze Bereiche (0 % Luminanz) werden abgeschnitten. Bereiche dazwischen werden teilweise maskiert.

#### HTML

Wir haben für jedes unserer vier Bilder eine `id` vergeben und ein SVG mit ebenso vielen `<mask>`-Elementen eingefügt.

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

Wir wenden auf jedes `<img>`-Element eine andere `<mask>` an. Vom letzten Bild, dessen Füllung `black` ist, wird standardmäßig nichts sichtbar sein. Obwohl alle in diesem Beispiel verwendeten Farben vollständig deckend sind, hat `mask-mode` standardmäßig den Wert `match-type`, der hier zu `luminance` aufgelöst wird.

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

Die Luminanzwerte von `black`, `white` und `green` betragen `0`, `100` beziehungsweise [`46.228`](https://www.colorhexa.com/008000). Bereiche, in denen die Maske weiß ist, sind daher sichtbar. Bereiche, in denen sie schwarz oder vollständig transparent ist, werden abgeschnitten und sind nicht sichtbar. Bereiche, in denen die Maske grün ist, sind sichtbar, aber weniger kräftig – entsprechend einer weißen Maske mit einer Deckkraft von 46,228 %.

#### Ergebnis

{{EmbedLiveSample("masking_with_svg_mask", "100%", 540)}}

Aktivieren oder deaktivieren Sie das Kontrollkästchen, um den Wert von `mask-mode` zwischen `alpha` (aktiviert) und dem Anfangswert, der zu `luminance` aufgelöst wird (deaktiviert), umzuschalten. Bei `alpha` spielt die Farbe der Maske keine Rolle; entscheidend ist allein die Alphatransparenz. Wird der Wert zu `luminance` aufgelöst, sind `white`-Bereiche sichtbar, `black`-Bereiche nicht und `green`-Bereiche mit einer Deckkraft, die der Luminanz von `green` entspricht. Ist `mask-mode` auf `alpha` gesetzt, haben alle Farben die gleiche Wirkung, da sie vollständig deckend sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask")}}-Kurzschreibweise
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask-border")}}
- {{cssxref("clip-path")}}
- {{cssxref("background-image")}}
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS-`mask`-Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Mehrere Masken deklarieren](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- Modul [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking)
