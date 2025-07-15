---
title: Einführung in das CSS-Maskieren
slug: Web/CSS/CSS_masking/Masking
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

CSS-Maskieren ermöglicht es Ihnen, Teile eines Elements selektiv zu zeigen oder zu verbergen, indem Sie ein oder mehrere Maskenbilder darauf anwenden. Diese Maskenbilder können Gradienten, Bilder oder SVG-Quellen sein. Anders als beim [CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping), das Bereiche eines Elements basierend auf der Form eines einzelnen Pfads vollständig zeigt oder verbirgt, ermöglicht Maskieren nuancierte Transparenz- und Blending-Effekte basierend auf der Alphatransparenz und optional der Luminanz der Maskenbilder.

Dieser Leitfaden führt in das Konzept des Maskierens ein, die verschiedenen Typen von Maskenbildern und wie die Luminanz und Alphatransparenz der Maske die Teile des Elements beeinflussen, die maskiert (sichtbar gemacht) oder abgeschnitten (oder verborgen) sind.

## Was ist Maskieren in CSS?

In CSS können Masken verwendet werden, um Bereiche eines Elements zu definieren, die sichtbar sind, und andere Bereiche, die verborgen sind. Maskenschichten, die durch eine oder mehrere {{cssxref("mask-image")}} Quellen definiert sind, bestimmen die Bereiche eines Elements, die sichtbar sein sollen und mit welcher Deckkraft.

> [!NOTE]
> Mehrere CSS-Maskierungseigenschaften können mit der {{cssxref("mask")}} Abkürzungseigenschaft gesetzt werden.

Bei `alpha`-Masken entspricht die Deckkraft des maskierten Elements der Deckkraft der angewandten Maske. In CSS ist Maskieren das Gegenteil einer Maskenball-Maske, bei der das Gesicht verborgen ist, wo die Maske undurchsichtig ist. In CSS sind die Bereiche des Elements, in denen die Maske vollständig undurchsichtig ist, vollständig undurchsichtig und sichtbar. Wo die Maske vollständig transparent ist, wird das Element vollständig verborgen. Bereiche des Elements, die von teilweise undurchsichtigen Maskenbereichen maskiert werden, werden teilweise undurchsichtig sein, entsprechend der Deckkraft der Maske.

Bei Alphamasken ist die Farbe der Maske irrelevant. Nur die Deckkraft der Maske ist von Bedeutung. Bei [Luminanzmasken](#alphatransparenz_versus_luminanz) wird die Helligkeit der Maskenfarben berücksichtigt, um die Deckkraft des maskierten Elements zu bestimmen. Je heller und undurchsichtiger die Farbe, desto undurchsichtiger das Element. Je dunkler und transparenter die Farbe, desto weniger undurchsichtig wird die Maske sein.

Masken können mit CSS-Gradienten, Rasterbildern (wie PNGs) und SVG-{{svgelement("mask")}}-Elementen definiert werden. In diesem Leitfaden führen wir die verschiedenen Typen von Maskenbildern ein und diskutieren [Opazität und Transparenz](#opazität_versus_transparenz), [Luminanz](#alphatransparenz_versus_luminanz) und [Maskieren versus CSS-Clipping](#svg_mask_as_mask_source).

Jede Maskenschicht besteht aus einem {{cssxref("mask-image")}}, das relativ zu einer Ursprungsbox [positioniert](/de/docs/Web/CSS/mask-position) wird. Die Maskenbilder können [größenangepasst](/de/docs/Web/CSS/mask-size), [wiederholt](/de/docs/Web/CSS/mask-repeat) und [abgeschnitten](/de/docs/Web/CSS/mask-clip) werden. In Fällen, in denen mehrere Maskenbilder deklariert werden, kann festgelegt werden, wie die [Maskenschichten zusammengesetzt](/de/docs/Web/CSS/mask-composite) werden sollen. Diese werden im [Leitfaden zu Maskierungseigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties) behandelt.

> [!NOTE]
> Alle Beispiele verwenden das folgende Bild als Basiselement, auf das Masken angewendet werden:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride-Flagge" />

## Opazität versus Transparenz

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

Mit Alphamasken werden die sichtbaren Bereiche eines Elements durch die Alphatransparenz der darauf angewandten Maske definiert. Wo immer die Maske vollständig undurchsichtig ist, wird das Element sichtbar sein. An jedem Pixel, an dem die Maske vollständig transparent ist, wird das Element ebenfalls vollständig verborgen. Bereiche des Elements, die von einem teilweise undurchsichtigen Maskenabschnitt maskiert werden, werden teilweise undurchsichtig sein, entsprechend der Deckkraft der darauf angewandten Maske.

### Mit Gradienten

Um dies zu demonstrieren, betrachten wir ein Beispiel mit einem {{cssxref("conic-gradient")}} als `mask-image`. CSS-Gradienten, einschließlich Kegel-Gradienten, können verwendet werden, um sanfte Übergänge zwischen sichtbaren und verborgenen Bereichen zu schaffen.

In diesem Fall ist die obere rechte Ecke der Maske vollständig undurchsichtig, das obere linke Viertel vollständig transparent und die untere Hälfte hat einen sanften Übergang zwischen undurchsichtig und transparent.

```css live-sample___gradient1
.applied-mask {
  mask-image: conic-gradient(rgb(0 0 0 / 1) 90deg, rgb(0 0 0 / 0) 270deg);
}
.mask-source {
  background: conic-gradient(rgb(0 0 0 / 1) 90deg, rgb(0 0 0 / 0) 270deg);
}
```

Beachten Sie, wie das Element, auf das die Maske angewendet wird, eine vollständig sichtbare obere rechte Ecke hat, das obere linke Viertel ist verborgen, und die untere Hälfte geht sanft von sichtbar zu transparent über, was die Sichtbarkeit des angewandten Maskenbildes widerspiegelt.

{{EmbedLiveSample("gradient1", "", "250px")}}

Bei Alphamasken spielt die Farbe der Maske keine Rolle, nur die Transparenz. In diesem Beispiel haben wir einen gestreiften Verlauf mit vollständig undurchsichtigen roten, halb-transparenten roten und vollständig transparenten Streifen.

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

Beachten Sie, wie die vollständig undurchsichtigen Maskenbereiche vollständig undurchsichtige Elementpixel enthüllen, halb-transparente Maskenbereiche schaffen halb-transparente Bereiche, und vollständig transparente Maskenbereiche verbergen die zugehörigen Bereiche vollständig.

{{EmbedLiveSample("gradient2", "", "250px")}}

### Mit importierten Bildern

Die vorherigen beiden Beispiele verwendeten Gradienten als Masken und Hintergrundbilder. Das Maskenbild muss kein CSS-Bild sein. Es kann ein externes Bild oder ein SVG sein.

In diesem Fall verwenden wir ein externes PNG. Das Bild enthält ein buntes Herz mit einem transparenten Hintergrund.

```css live-sample___image1 live-sample___luminance1
.applied-mask {
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/colorful-heart.png);
  mask-size: 220px 220px;
}
.mask-source {
  background: url(https://mdn.github.io/shared-assets/images/examples/colorful-heart.png);
  background-size: 220px 220px;
}
```

Beachten Sie, wie die transparenten Maskenbereiche das Element beschneiden; die einzigen Teile des Elements, die sichtbar sind, sind die Bereiche, in denen die Maske undurchsichtig ist. Die Farbe der Maske selbst ist ohne Bedeutung.

{{EmbedLiveSample("image1", "", "250px")}}

## Alphatransparenz versus Luminanz

Der Standardwert der `mask-mode`-Eigenschaft — `match-source` — setzt den Modus entweder auf `alpha` oder `luminance`, abhängig vom Wert. Der `match-source`-Wert löst sich zu `alpha` auf für alle Maskenquellen außer SVG-{{svgelement("mask")}}-Elementen. Wenn die Maskenquelle ein `<mask>`-Element ist, löst sich `match-source` zu dem Wert der {{cssxref("mask-type")}}-Eigenschaft, falls gesetzt. Andernfalls löst es sich zum Wert des SVG-{{svgattr("mask-type")}}-Attributs, das auf dem `<mask>`-Element gesetzt ist. Wenn das auch nicht explizit gesetzt ist, wird `match-source` zu `luminance`.

Wenn `mask-mode` zu `luminance` aufgelöst wird oder wir es explizit auf `luminance` setzen, beeinflussen die Farben der Maske die Maskenopazität. Im vorherigen Beispiel wurde der `mask-mode` nicht gesetzt, daher stand der Standardwert `match-source`. Da das bunte Herzbild ein transparentes PNG ist, löste sich `match-source` zu `alpha` auf. Durch explizites Setzen dieser Eigenschaft können wir den Modus steuern. In diesem Beispiel ändern wir den `mask-mode` zu `luminance`.

```css live-sample___luminance1
.applied-mask {
  mask-mode: luminance;
}
```

Bei Anwendung von `mask-mode: luminance` auf dieselbe Maske wie im vorherigen Beispiel sind die Bereiche des Elements, in denen die Maske **am hellsten** ist, mehr undurchsichtig, während **dunklere** Bereiche weniger undurchsichtig sind.

{{EmbedLiveSample("luminance1", "", "250px")}}

Die Opazität einer Luminanzmaske wird bestimmt durch die `R`, `G`, `B` und `A` Werte einer {{Glossary("RGB", "RGB")}}-Farbe, wobei die Formel verwendet wird:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel ist die neueste {{cssxref("named-color")}} `rebeccapurple`, die `#663399` ist. Während man annehmen könnte, die Helligkeit könnte der L des `hsl()`-Farbfunktionsäquivalent sein, ist es nicht so einfach. Der Wert `#663399` ist äquivalent zu `rgb(40% 20% 60% / 1)` und `hsl(270 50% 40% / 1)`, aber der Helligkeitswert ist `27.134%`, nicht `40%`.

`((0.2125 * 0.4) + (0.7154 * 0.2) + (0.0721 * 0.6)) * 1 = 0.27134`

Weiß hat einen Helligkeitswert von `100%`.

`((0.2125 * 1) + (0.7154 * 1) + (0.0721 * 1)) * 1 = 1`

Schwarz hat eine Helligkeit von `0%`.

`((0.2125 * 0) + (0.7154 * 0) + (0.0721 * 0)) * 1 = 0`

Wir demonstrieren dies, indem wir Weiß (`rgb(100% 100% 100%)`) mit einer Helligkeit von `100%` bei `27.234%` Opazität zu einem `rebeccapurple`, `weiß`, und `schwarz` linearen Gradient hinzufügen, den wir dann verwenden, um unser Bild zu maskieren. Dieses Weiß ergibt denselben Opazitätswert:

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

Die Bereiche mit einer `weißen` Maske sind vollständig undurchsichtig. Die Bereiche mit einer `schwarzen` Maske sind vollständig transparent. Die Bereiche mit einer `rebeccapurple` Maske und die Bereiche mit einer `27.1234%` opaken weißen Maske sind beide `27.1234%` opak.

{{EmbedLiveSample("luminance2", "", "250px")}}

Wenn Sie den `mask-mode` auf `alpha` umschalten, spielt die Farbe des Gradienten keine Rolle mehr. Das gesamte Element wird undurchsichtig sein, außer den vom halb-transparenten Weiß bedeckten Bereichen.

Die `mask-mode`-Eigenschaft ermöglicht die Verwendung von Rasterbildern ohne Alphatransparenz, wie JPEGs, als Maskenbilder. Ein JPEG besteht aus undurchsichtigen Pixeln. Die Verwendung eines JPEGs als Maske mit dem Standard `alpha`-Maskenmodus würde das gesamte Element verbergen. Der `luminance`-Wert des `mask-mode` hingegen schneidet das Element dort ab, wo die Maske schwarz ist (keine Helligkeit hat), ist vollständig undurchsichtig, wo die Maske undurchsichtig weiß ist (100 % Helligkeit), mit anderen Bereichen, die halb-transparent sind, basierend auf der Helligkeit des maskierten Bereichs.

In diesem Beispiel haben wir einen weißen Mond gegen einen schwarzen Nachthimmel.

```css live-sample___luminance3
.applied-mask {
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/moon.jpg);
  mask-mode: luminance;
  mask-size: 220px;
}
.mask-source {
  background: url(https://mdn.github.io/shared-assets/images/examples/moon.jpg);
  background-size: 220px;
}
```

Das Element wird dort abgeschnitten und ist nicht sichtbar, wo der Himmel schwarz ist. Das Bild ist am sichtbarsten, wo der Mond am hellsten ist.

{{EmbedLiveSample("luminance3", "", "250px")}}

In diesem Fall, wenn Sie den `mask-mode` auf `alpha` umschalten, wird das gesamte Element sichtbar sein, da die gesamte Maske undurchsichtig ist.

## SVG `<mask>` als Maskenquelle

Eine Maske kann jede Art von CSS-{{cssxref("image")}} oder ein `<mask-source>` sein. Ein `<mask-source>` ist ein {{cssxref("url_value", "&lt;url&gt;")}} Verweis auf ein SVG-{{SVGElement("mask")}} Element. Dies ist ähnlich wie das Clipping mit der CSS-{{cssxref("clip-path")}} Eigenschaft, in welchem Fall die "Maske" ein SVG-{{SVGElement("clipPath")}} Element statt ist (bei `clip-path` spielt die Luminanz des Pfades keine Rolle).

In diesem Beispiel definieren wir ein SVG mit einem `<mask>` Element, einem identischen {{SVGElement("clipPath")}} Element und einem identischen {{SVGElement("path")}} Element, sodass Sie die Maske und Clip-Pfad-Quelle sehen können.

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
  mask-image: url(#mask-heart);
}
.applied-clip {
  clip-path: url(#clip-heart);
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

Da die Bildquelle eine `<mask>` ist und die Maske weder die `mask-type` CSS-Eigenschaft noch das `mask-type` SVG-Attribut gesetzt hat, ist der Standardwert `mask-type` `alpha`, sodass der Standardwert von `mask-mode: match-source` zu `luminance` aufgelöst wird. Dies liegt daran, dass für Maskenquellen, die SVG-{{svgelement("mask")}}-Elemente sind, der `mask-type` standardmäßig `luminance` ist, es sei denn, das {{svgattr("mask-type")}} Attribut ist explizit auf `alpha` gesetzt.

{{EmbedLiveSample("svg1", "", "300px")}}

Da wir das `mask-type`-Attribut oder die CSS-Eigenschaft nicht auf unserer Maske gesetzt haben, löst sich der Standardwert der `mask-mode`-Eigenschaft, `match-source`, zu `luminance` auf. Aktivieren Sie das Kontrollkästchen, um den `mask-mode`-Wert auf `alpha` zu setzen oder es auf `match-source` zu belassen.

Dieses Beispiel zeigt auch den Unterschied zwischen Maskieren und Clipping in CSS. Sie werden feststellen, dass Luminanz und Alphatransparenz für das Maskieren relevant sind, nicht aber für das Clipping. Maskieren kann verwendet werden, um die Opazität eines Elements zu steuern, während beim Clipping alles innerhalb des Clip-Pfades angezeigt wird und die Teile des Elements außerhalb des Clip-Pfades vollständig verborgen sind. Abgeschnittene Bereiche sind vollständig unsichtbar, während maskierte Bereiche teilweise oder vollständig sichtbar sein können.

Wenn Sie nur Formen benötigen, könnte Clipping ausreichen. Wenn Sie jedoch Verblassen, variable Deckkraft oder sogar Kontrolle über Position und Größe (was wir in einem separaten Leitfaden besprechen werden) benötigen, ist Maskieren besser geeignet.

## Siehe auch

- [Einführung in das CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS-`mask`-Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklaration mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Maskierungsmodul](/de/docs/Web/CSS/CSS_masking)
