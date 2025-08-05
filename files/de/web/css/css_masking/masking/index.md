---
title: Einführung in das CSS-Masking
slug: Web/CSS/CSS_masking/Masking
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

CSS-Masking ermöglicht es Ihnen, Teile eines Elements selektiv sichtbar oder unsichtbar zu machen, indem Sie ein oder mehrere Maskenbilder darauf anwenden. Diese Maskenbilder können Verlaufsbilder, Grafiken oder SVG-Quellen sein. Im Gegensatz zum [CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping), das Bereiche eines Elements vollständig zeigen oder verstecken kann basierend auf der Form eines einzelnen Pfades, erlaubt das Masking nuancierte Transparenz- und Blendeffekte, basierend auf der Alphatransparenz und optional auf der Luminanz der Maskenbilder.

Dieser Leitfaden führt in das Konzept des Maskierens ein, beschreibt die verschiedenen Maskenbildtypen und erläutert, wie die Luminanz und Alphatransparenz der Maske die Bereiche des Elements beeinflussen, die sichtbar (maskiert) sind, im Gegensatz zu den Bereichen, die beschnitten (versteckt) sind.

## Was ist Masking in CSS?

Im CSS können Masken verwendet werden, um die Bereiche eines Elements zu definieren, die sichtbar sind, und andere Bereiche, die versteckt sind. Maskenschichten, definiert durch eine oder mehrere {{cssxref("mask-image")}}-Quellen, bestimmen die Bereiche eines Elements, die sichtbar sein sollen und welche Opazität sie haben.

> [!NOTE]
> Mehrere CSS-Masking-Eigenschaftenwerte können mit der Abkürzungseigenschaft {{cssxref("mask")}} festgelegt werden.

Mit `alpha`-Masken entspricht die Opazität des maskierten Elements der Opazität der angewendeten Maske. Im CSS ist Masking das Gegenteil einer Maskerade-Maske, bei der das Gesicht verborgen ist, wo immer die Maske deckend ist. Im CSS werden die Bereiche des Elements, in denen seine Maske vollständig undurchsichtig ist, vollständig sichtbar sein. Wo auch immer die Maske vollständig transparent ist, wird das Element vollständig versteckt sein. Bereiche des Elements, die durch teilweise deckende Maskenbereiche maskiert werden, werden teilweise deckend sein, entsprechend der Opazität der Maske.

Bei Alpha-Masken ist die Farbe der Maske irrelevant. Nur die Opazität der Maske zählt. Bei [Luminanzmasken](#alphatransparenz_versus_luminanz) wird die Helligkeit der Maskenfarben berücksichtigt, wenn die Opazität des maskierten Elements festgelegt wird. Je heller und undurchsichtiger die Farbe, desto undurchsichtiger wird das Element. Je dunkler und transparenter die Farbe, desto weniger deckend wird die Maske sein.

Masken können definiert werden durch CSS-Verläufe, Rasterbilder (wie PNGs) und SVG-{{svgelement("mask")}}-Elemente. In diesem Leitfaden stellen wir die verschiedenen Maskenbildtypen vor, während wir über [Undurchsichtigkeit und Transparenz](#undurchsichtigkeit_versus_transparenz), [Luminanz](#alphatransparenz_versus_luminanz) und [Masking versus CSS-Clipping](#svg_mask_as_mask_source) sprechen.

Jede Maskenschicht besteht aus einem {{cssxref("mask-image")}}, das relativ zu einer Ursprungsbox [positioniert](/de/docs/Web/CSS/mask-position) ist. Die Maskenbilder können [größer gemacht](/de/docs/Web/CSS/mask-size), [wiederholt](/de/docs/Web/CSS/mask-repeat) und [beschnitten](/de/docs/Web/CSS/mask-clip) werden. In Fällen, in denen mehrere Maskenbilder deklariert sind, kann festgelegt werden, wie die [Maskenschichten kombiniert werden](/de/docs/Web/CSS/mask-composite). Diese werden im [Maskeigenschaften-Leitfaden](/de/docs/Web/CSS/CSS_masking/Mask_properties) behandelt.

> [!NOTE]
> Alle Beispiele verwenden das folgende Bild als das zugrunde liegende Element, auf das Masken angewendet werden:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride Flagge" />

## Undurchsichtigkeit versus Transparenz

```html hidden live-sample___gradient1 live-sample___gradient2 live-sample___image1   live-sample___luminance1 live-sample___luminance2 live-sample___luminance3
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag"
  class="applied-mask" />
<div class="mask-source"></div>
```

```css hidden live-sample___gradient1 live-sample___gradient2 live-sample___image1   live-sample___luminance1 live-sample___luminance2 live-sample___luminance3 live-sample___svg1
body {
  display: flex;
  gap: 20px;
  padding: 15px;
  background-image:
    linear-gradient(to right, rgb(0 0 0 / 0) 50%, rgb(0 0 0 / 0.05) 50%),
    linear-gradient(to bottom, rgb(0 0 0 / 0) 50%, rgb(0 0 0 / 0.05) 50%);
  background-size: 20px 20px;
}
div,
svg,
img {
  width: 220px;
  aspect-ratio: 1;
}
```

Bei Alpha-Masken werden die sichtbaren Bereiche eines Elements durch die Alphatransparenz der darauf angewendeten Maske definiert. Wo auch immer die Maske vollständig undurchsichtig ist, wird das Element sichtbar sein. An jedem Pixel, an dem die Maske vollständig transparent ist, wird das Element ebenfalls vollständig versteckt sein. Bereiche des Elements, die durch einen teilweise undurchsichtigen Abschnitt einer Maske maskiert werden, werden teilweise deckend sein, entsprechend der auf das Element angewendeten Maskenopazität.

### Mit Verläufen

Um dies zu demonstrieren, schauen wir uns ein Beispiel an, bei dem ein {{cssxref("conic-gradient")}} als `mask-image` verwendet wird. CSS-Verläufe, einschließlich konischer Verläufe, können verwendet werden, um sanfte Übergänge zwischen sichtbaren und versteckten Bereichen zu erstellen.

In diesem Fall ist die obere rechte Ecke der Maske vollständig undurchsichtig, das obere linke Viertel vollständig transparent und die untere Hälfte hat einen sanften Übergang von undurchsichtig zu transparent.

```css live-sample___gradient1
.applied-mask {
  mask-image: conic-gradient(rgb(0 0 0 / 1) 90deg, rgb(0 0 0 / 0) 270deg);
}
.mask-source {
  background: conic-gradient(rgb(0 0 0 / 1) 90deg, rgb(0 0 0 / 0) 270deg);
}
```

Beachten Sie, wie das Element, auf das die Maske angewendet wird, eine vollständig sichtbare obere rechte Ecke hat, das obere linke Viertel versteckt ist und die untere Hälfte sanft von sichtbar zu transparent übergeht, was die Sichtbarkeit des angewendeten Maskenbildes widerspiegelt.

{{EmbedLiveSample("gradient1", "", "250px")}}

Bei Alpha-Masken ist die Farbe der Maske nicht wichtig, sondern nur die Transparenz. In diesem Beispiel haben wir einen gestreiften Verlauf mit vollständig undurchsichtigen roten, halbtransparenten roten und vollständig transparenten Streifen.

```css live-sample___gradient2
.applied-mask {
  mask-image: repeating-linear-gradient(
    to bottom right,
    #f00 0 20px,
    #f005 20px 40px,
    transparent 40px 60px
  );
}
.mask-source {
  background: repeating-linear-gradient(
    to bottom right,
    #f00 0 20px,
    #f005 20px 40px,
    transparent 40px 60px
  );
}
```

Beachten Sie, wie die vollständig undurchsichtigen Maskenbereiche vollständig undurchsichtige Elementpixel freilegen, halbtransparente Maskenbereiche halbtransparente Bereiche schaffen und vollständig transparente Maskenbereiche die entsprechenden Bereiche vollständig verstecken.

{{EmbedLiveSample("gradient2", "", "250px")}}

### Mit importierten Bildern

Die beiden vorherigen Beispiele verwendeten Verläufe als Masken und Hintergrundbilder. Das Maskenbild muss kein CSS-Bild sein. Es kann ein externes Bild oder ein SVG sein.

In diesem Fall verwenden wir ein externes PNG. Das Bild enthält ein buntes Herz mit transparentem Hintergrund.

```css live-sample___image1 live-sample___luminance1
.applied-mask {
  mask-image: url("https://mdn.github.io/shared-assets/images/examples/colorful-heart.png");
  mask-size: 220px 220px;
}
.mask-source {
  background: url("https://mdn.github.io/shared-assets/images/examples/colorful-heart.png");
  background-size: 220px 220px;
}
```

Beachten Sie, wie die transparenten Maskenbereiche das Element zuschneiden; die einzigen sichtbaren Teile des Elements sind die Bereiche, in denen die Maske undurchsichtig ist. Die Farbe der Maske selbst spielt keine Rolle.

{{EmbedLiveSample("image1", "", "250px")}}

## Alphatransparenz versus Luminanz

Der Standardwert der `mask-mode`-Eigenschaft — `match-source` — setzt den Modus auf entweder `alpha` oder `luminance`, abhängig vom Wert. Der Wert `match-source` wird für alle Maskenquellen außer SVG-{{svgelement("mask")}}-Elementen auf `alpha` aufgelöst. Wenn die Maskenquelle ein `<mask>`-Element ist, wird `match-source` auf den Wert der {{cssxref("mask-type")}}-Eigenschaft des `<mask>`-Elements aufgelöst, falls gesetzt. Andernfalls wird es auf den Wert des `{{svgattr("mask-type")}}`-Attributs des `<mask>`-Elements aufgelöst. Wenn dies ebenfalls nicht explizit gesetzt ist, wird `match-source` auf `luminance` aufgelöst.

Wenn `mask-mode` zu `luminance` aufgelöst wird oder wir es explizit auf `luminance` setzen, wirken sich die Farben der Maske auf die Maskenopazität aus. Im vorherigen Demo war `mask-mode` nicht gesetzt, sodass der Wert standardmäßig `match-source` war. Da das bunte Herzbild ein transparentes PNG ist, wird `match-source` auf `alpha` aufgelöst. Durch das explizite Setzen dieser Eigenschaft können wir den Modus steuern. In diesem Demo ändern wir den `mask-mode` auf `luminance`.

```css live-sample___luminance1
.applied-mask {
  mask-mode: luminance;
}
```

Wenn `mask-mode: luminance` auf dieselbe Maske angewendet wird wie im vorherigen Beispiel, sind die Bereiche des Elements, in denen die Maske am **hellsten** ist, undurchsichtig, während **dunklere** Bereiche weniger deckend sind.

{{EmbedLiveSample("luminance1", "", "250px")}}

Die Opazität einer Luminanzmaske wird durch die `R`, `G`, `B` und `A`-Werte einer {{Glossary("RGB", "RGB")}}-Farbe unter Verwendung der Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel ist die neueste {{cssxref("named-color")}} `rebeccapurple`, was `#663399` entspricht. Während man annehmen könnte, dass die Helligkeit dem L des `hsl()`-Farbfunktions entspricht, ist es nicht so einfach. Der Wert `#663399` entspricht `rgb(40% 20% 60% / 1)` und `hsl(270 50% 40% / 1)`, aber der Helligkeitswert ist `27.134%`, nicht `40%`.

`((0.2125 * 0.4) + (0.7154 * 0.2) + (0.0721 * 0.6)) * 1 = 0.27134`

Weiß hat einen Helligkeitswert von `100%`.

`((0.2125 * 1) + (0.7154 * 1) + (0.0721 * 1)) * 1 = 1`

Der Helligkeitswert von Schwarz ist `0%`.

`((0.2125 * 0) + (0.7154 * 0) + (0.0721 * 0)) * 1 = 0`

Wir demonstrieren dies, indem wir weiß (`rgb(100% 100% 100%)`) mit einer Helligkeit von `100%` bei `27.234%` Opazität zu einem `rebeccapurple`, `white` und `black` linearen Verlauf hinzufügen, den wir dann verwenden, um unser Bild zu maskieren. Dieses Weiß löst sich auf denselben Opazitätswert auf:

`((0.2125 * 1) + (0.7154 * 1) + (0.0721 * 1)) * 0.27134 = 0.27134`

```css live-sample___luminance2
.applied-mask {
  mask-image: repeating-linear-gradient(
    to bottom left,
    rebeccapurple 0 20px,
    rgb(100% 100% 100% / 0.27134) 20px 40px,
    black 40px 45px,
    white 45px 50px
  );
  mask-mode: luminance;
}
.mask-source {
  background: repeating-linear-gradient(
    to bottom left,
    rebeccapurple 0 20px,
    rgb(100% 100% 100% / 0.27134) 20px 40px,
    black 40px 45px,
    white 45px 50px
  );
}
```

```css hidden live-sample___luminance2 live-sample___luminance3
:has(:checked) .applied-mask {
  mask-mode: alpha;
}
```

```html hidden live-sample___luminance2   live-sample___luminance3
<label><input type="checkbox" /><code>mask-mode: alpha;</code></label>
```

Die Bereiche mit einer `white`-Maske sind vollständig undurchsichtig. Die Bereiche mit einer `black`-Maske sind vollständig transparent. Die Bereiche mit einer `rebeccapurple`-Maske und die Bereiche mit einer `27.1234%`-deckenden weißen Maske sind beide `27.1234%` deckend.

{{EmbedLiveSample("luminance2", "", "250px")}}

Wenn Sie den `mask-mode` auf `alpha` umschalten, spielt die Farbe des Verlaufs keine Rolle mehr. Das gesamte Element wird undurchsichtig, außer den Bereichen, die durch das halbdeckende Weiß bedeckt sind.

Die `mask-mode`-Eigenschaft ermöglicht die Verwendung von Rasterbildern ohne Alpha-Transparenz, wie JPEGs, als Maskenbilder. Ein JPEG besteht aus undurchsichtigen Pixeln. Die Verwendung eines JPEGs als Maske mit dem standardmäßigen `alpha`-Maskmodus würde das gesamte Element verstecken. Der `luminance`-Wert von `mask-mode` hingegen schneidet das Element aus, wo die Maske schwarz ist (keine Helligkeit hat), ist vollständig deckend, wo die Maske deckendes Weiß ist (100% Helligkeit), wobei andere Bereiche halbtransparent sind, basierend auf der Helligkeit der maskierenden Maske.

In diesem Beispiel haben wir einen weißen Mond gegen einen schwarzen Nachthimmel.

```css live-sample___luminance3
.applied-mask {
  mask-image: url("https://mdn.github.io/shared-assets/images/examples/moon.jpg");
  mask-mode: luminance;
  mask-size: 220px;
}
.mask-source {
  background: url("https://mdn.github.io/shared-assets/images/examples/moon.jpg");
  background-size: 220px;
}
```

Das Element wird ausgeschnitten und ist nicht sichtbar, wo der Himmel schwarz ist. Das Bild ist dort am sichtbarsten, wo der Mond am hellsten ist.

{{EmbedLiveSample("luminance3", "", "250px")}}

In diesem Fall wird, wenn Sie den `mask-mode` auf `alpha` umschalten, das gesamte Element sichtbar sein, da die gesamte Maske undurchsichtig ist.

## SVG `<mask>` als Maskenquelle

Eine Maske kann jede Art von CSS-{{cssxref("image")}} oder ein `<mask-source>` sein. Ein `<mask-source>` ist ein {{cssxref("url_value", "&lt;url&gt;")}}-Verweis auf ein SVG-{{SVGElement("mask")}}-Element. Dies ist ähnlich wie beim Clipping mit der CSS-{{cssxref("clip-path")}}-Eigenschaft, in welchem Fall die "Maske" ein SVG-{{SVGElement("clipPath")}}-Element ist (mit `clip-path` spielt die Luminanz des Pfades keine Rolle).

In diesem Beispiel definieren wir ein SVG mit einem `<mask>`-Element, einem identischen {{SVGElement("clipPath")}}-Element und einem identischen {{SVGElement("path")}}-Element, damit Sie die Quelle der Maske und der Clip-Pfade sehen können.

```html live-sample___svg1
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag"
  class="applied-mask" />
<svg class="mask-source">
  <mask id="mask-heart">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="rgb(255 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 1)"
      stroke-width="20" />
  </mask>
  <clippath id="clip-heart">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="rgb(255 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 1)"
      stroke-width="20" />
  </clippath>
  <path
    d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
    fill="rgb(255 0 0 / 0.5)"
    stroke="rgb(255 255 255 / 1)"
    stroke-width="20" />
</svg>
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag"
  class="applied-clip" />
```

```css live-sample___svg1
.applied-mask {
  mask-image: url("#mask-heart");
}
.applied-clip {
  clip-path: url("#clip-heart");
}
```

```css hidden live-sample___svg1
:has(:checked) .applied-mask {
  mask-mode: alpha;
}
body {
  flex-flow: row wrap;
}
```

```html hidden live-sample___svg1
<label><input type="checkbox" /><code>mask-mode: alpha;</code></label>
```

Da die Bildquelle ein `<mask>` ist und die Maske weder die CSS-Eigenschaft `mask-type` noch das SVG-Attribut `mask-type` gesetzt hat, standardmäßig `mask-type` zu `alpha`, löst sich der Standard von `mask-mode: match-source` auf `luminance` auf. Dies liegt daran, dass für Maskenquellen, die SVG-{{svgelement("mask")}}-Elemente sind, `mask-type` standardmäßig auf `luminance` gesetzt wird, es sei denn, das {{svgattr("mask-type")}}-Attribut wird explizit auf `alpha` gesetzt.

{{EmbedLiveSample("svg1", "", "300px")}}

Da wir das Attribut `mask-type` oder die CSS-Eigenschaft auf unsere Maske nicht gesetzt haben, löst sich der Standardeigenschaftswert `mask-mode` von `match-source` auf `luminance` auf. Aktivieren Sie das Kontrollkästchen, um den `mask-mode`-Wert auf `alpha` zu setzen oder lassen Sie es auf `match-source` eingestellt.

Dieses Beispiel zeigt auch den Unterschied zwischen Masking und Clipping in CSS. Sie werden feststellen, dass Luminanz und Alphatransparenz für das Masking relevant sind, nicht jedoch für das Clipping. Masking kann verwendet werden, um die Opazität eines Elements zu steuern, während Clipping alles innerhalb des Clip-Pfads zeigt und die Teile des Elements außerhalb des Clip-Pfads vollständig versteckt. Beschnittene Bereiche sind vollständig unsichtbar, während maskierte Bereiche teilweise oder vollständig sichtbar sein können.

Wenn Sie nur Formen benötigen, genügt möglicherweise das Clipping. Aber wenn Sie Verblassen, variable Opazität oder sogar die Kontrolle über Position und Größe benötigen (was wir in einem separaten Leitfaden besprechen werden), ist Masking geeigneter.

## Siehe auch

- [Einführung in das CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS-`mask`-Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklaration mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
