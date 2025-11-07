---
title: Einführung in CSS-Masking
short-title: Introduction
slug: Web/CSS/Guides/Masking/Introduction
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

CSS-Masking ermöglicht es Ihnen, Teile eines Elements selektiv zu zeigen oder zu verstecken, indem Sie ein oder mehrere Maskenbilder darauf anwenden. Diese Maskenbilder können Verläufe, Bilder oder SVG-Quellen sein. Im Gegensatz zum [CSS-Clipping](/de/docs/Web/CSS/Guides/Masking/Clipping), das basierend auf der Form eines einzigen Pfades entweder vollständig Bereiche eines Elements zeigt oder versteckt, ermöglicht Masking nuancierte Transparenz- und Überblendeffekte basierend auf der Alphatransparenz und optional der Luminanz der Maskenbilder.

Dieser Leitfaden führt in das Konzept des Maskings ein, die verschiedenen Typen von Maskenbildern und wie die Luminanz und Alphatransparenz der Maske die Bereiche des Elements beeinflussen, die maskiert (sichtbar gemacht) werden, im Gegensatz zu den Bereichen, die abgeschnitten (oder versteckt) werden.

## Was ist Masking in CSS?

In CSS können Masken verwendet werden, um sichtbare Bereiche eines Elements festzulegen und andere Bereiche zu verbergen. Maskenschichten, definiert durch eine oder mehrere {{cssxref("mask-image")}}-Quellen, bestimmen die Bereiche eines Elements, die sichtbar sein sollen und mit welcher Deckkraft.

> [!NOTE]
> Mehrere CSS-Masking-Wert können mit der Kurzschrift-Eigenschaft {{cssxref("mask")}} gesetzt werden.

Mit `alpha`-Masken entspricht die Deckkraft des maskierten Elements der Deckkraft der angewendeten Maske. In CSS ist Masking das Gegenteil einer Verkleidung: Ein Bereich ist dort des Elements sichtbar, wo die Maske vollständig deckend ist, und versteckt, wo sie vollständig transparent ist. Bereiche des Elements, die durch teilweise deckende Maskenbereiche maskiert werden, sind teilweise deckend und entsprechen der Masken-Deckkraft.

Bei Alphamasken ist die Farbe der Maske irrelevant; nur die Deckkraft der Maske ist entscheidend. Bei [Luminanz-Masken](#alphatransparenz_versus_luminanz) wird die Helligkeit der Maskenfarben berücksichtigt, um die Deckkraft des maskierten Elements zu bestimmen. Je heller und undurchsichtiger die Farbe, desto undurchsichtiger ist das Element; je dunkler und transparenter die Farbe, desto weniger undurchsichtig wird die Maske sein.

Masken können mit CSS-Verläufen, Rasterbildern (wie PNGs) und SVG {{svgelement("mask")}}-Elementen definiert werden. In diesem Leitfaden führen wir die verschiedenen Maskenbildtypen ein, während wir [Undurchsichtigkeit und Transparenz](#undurchsichtigkeit_versus_transparenz), [Luminanz](#alphatransparenz_versus_luminanz) und [Masking im Vergleich zu CSS-Clipping](#svg_mask_as_mask_source) diskutieren.

Jede Maskenschicht besteht aus einem {{cssxref("mask-image")}}, das relativ zu einer Ursprungsbox [positioniert](/de/docs/Web/CSS/Reference/Properties/mask-position) wird. Die Maskenbilder können [skaliert](/de/docs/Web/CSS/Reference/Properties/mask-size), [wiederholt](/de/docs/Web/CSS/Reference/Properties/mask-repeat) und [beschnitten](/de/docs/Web/CSS/Reference/Properties/mask-clip) werden. Wenn mehrere Maskenbilder deklariert werden, kann festgelegt werden, wie die [Maskenschichten zusammengesetzt](/de/docs/Web/CSS/Reference/Properties/mask-composite) oder kombiniert werden. Dies wird im [Leitfaden zu Masking-Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties) diskutiert.

> [!NOTE]
> Alle Beispiele verwenden das folgende Bild als zugrunde liegendes Element, auf dem die Masken angewendet werden:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride-Flagge" />

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
    linear-gradient(to right, transparent 50%, rgb(0 0 0 / 0.05) 50%),
    linear-gradient(to bottom, transparent 50%, rgb(0 0 0 / 0.05) 50%);
  background-size: 20px 20px;
}
div,
svg,
img {
  width: 220px;
  aspect-ratio: 1;
}
```

Mit Alphamasken werden die sichtbaren Bereiche eines Elements durch die Alphatransparenz der darauf angewendeten Maske definiert. Wo immer die Maske vollständig deckend ist, ist das Element sichtbar. An jedem Pixel, an dem die Maske vollständig transparent ist, wird das Element ebenfalls vollständig verborgen. Bereiche des Elements, die durch einen teilweise deckenden Abschnitt einer Maske maskiert sind, sind teilweise deckend, entsprechend der Deckkraft der darauf angewendeten Maske.

### Mit Verläufen

Um dies zu demonstrieren, betrachten wir ein Beispiel mit einem {{cssxref("conic-gradient")}} als `mask-image`. CSS-Verläufe, einschließlich konischer Verläufe, können verwendet werden, um sanfte Übergänge zwischen sichtbaren und verborgenen Bereichen zu erstellen.

In diesem Fall ist die obere rechte Ecke der Maske vollständig deckend, das obere linke Viertel vollständig transparent und die untere Hälfte hat einen sanften Übergang zwischen deckend und transparent.

```css live-sample___gradient1
.applied-mask {
  mask-image: conic-gradient(black 90deg, transparent 270deg);
}
.mask-source {
  background: conic-gradient(black 90deg, transparent 270deg);
}
```

Beachten Sie, wie das Element, auf das die Maske angewendet wird, eine vollständig sichtbare obere rechte Ecke hat, das obere linke Viertel ist verborgen, und die untere Hälfte verläuft sanft von sichtbar zu transparent und spiegelt die Sichtbarkeit des angewendeten Maskenbildes wider.

{{EmbedLiveSample("gradient1", "", "250px")}}

Mit Alphamasken ist die Farbe der Maske nicht relevant, nur die Transparenz. In diesem Beispiel haben wir einen gestreiften Verlauf mit vollständig deckenden, halbdeckenden und vollständig transparenten roten Streifen.

```css live-sample___gradient2
.applied-mask {
  mask-image: repeating-linear-gradient(
    to bottom right,
    red 0 20px,
    #ff000055 20px 40px,
    transparent 40px 60px
  );
}
.mask-source {
  background: repeating-linear-gradient(
    to bottom right,
    red 0 20px,
    #ff000055 20px 40px,
    transparent 40px 60px
  );
}
```

Beachten Sie, wie die vollständig deckenden Maskenbereiche vollständig deckende Element-Pixel offenbaren, halbtransparente Maskenbereiche halbtransparente Bereiche erstellen, und vollständig transparente Maskenbereiche die zugehörigen Bereiche vollständig verbergen.

{{EmbedLiveSample("gradient2", "", "250px")}}

### Mit importierten Bildern

In den vorhergehenden beiden Beispielen wurden Verläufe als Masken und Hintergrundbilder verwendet. Das Maskenbild muss kein CSS-Bild sein. Es kann ein externes Bild oder ein SVG sein.

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

Beachten Sie, wie die transparenten Maskenbereiche das Element zuschneiden; die einzigen sichtbaren Teile des Elements sind die Bereiche, in denen die Maske undurchsichtig ist. Die Farbe der Maske selbst ist nicht relevant.

{{EmbedLiveSample("image1", "", "250px")}}

## Alphatransparenz versus Luminanz

Der Standardwert der `mask-mode`-Eigenschaft — `match-source` — setzt den Modus auf entweder `alpha` oder `luminance`, abhängig vom Wert. Der Wert `match-source` wird für alle Maskenquellen außer SVG {{svgelement("mask")}}-Elementen auf `alpha` aufgelöst. Ist die Maskenquelle ein `<mask>`-Element, wird `match-source` auf den Wert der {{cssxref("mask-type")}}-Eigenschaft des `<mask>`-Elements aufgelöst, falls festgelegt. Andernfalls wird er auf den Wert des SVG-Attributs {{svgattr("mask-type")}} gesetzt, das auf dem `<mask>`-Element gesetzt ist. Wenn auch das nicht explizit gesetzt ist, wird `match-source` zu `luminance`.

Wenn `mask-mode` zu `luminance` aufgelöst wird oder wir es explizit auf `luminance` setzen, beeinflussen die Farben der Maske die Masken-Deckkraft. In der vorherigen Demo wurde der `mask-mode` nicht gesetzt, sodass der Wert standardmäßig auf `match-source` gesetzt wurde. Da das bunte Herzbild ein transparentes PNG ist, wird `match-source` auf `alpha` aufgelöst. Indem wir diese Eigenschaft explizit setzen, können wir den Modus steuern. In diesem Demo ändern wir den `mask-mode` zu `luminance`.

```css live-sample___luminance1
.applied-mask {
  mask-mode: luminance;
}
```

Wenn `mask-mode: luminance` auf die gleiche Maske wie im vorherigen Beispiel angewendet wird, sind die Bereiche des Elements, in denen die Maske **am hellsten** ist, undurchsichtiger, während **dunklere** Bereiche weniger undurchsichtig sind.

{{EmbedLiveSample("luminance1", "", "250px")}}

Die Deckkraft einer Luminanzmaske wird durch die `R`, `G`, `B` und `A`-Werte einer {{Glossary("RGB", "RGB")}}-Farbe mithilfe der Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel ist die neueste {{cssxref("named-color")}} `rebeccapurple`, was `#663399` entspricht. Während man annehmen könnte, dass die Helligkeit dem L der `hsl()`-Funktion entspricht, ist es nicht so einfach. Der Wert `#663399` entspricht `rgb(40% 20% 60% / 1)` und `hsl(270 50% 40% / 1)`, aber der Helligkeitswert ist `27.134%`, nicht `40%`.

`((0.2125 * 0.4) + (0.7154 * 0.2) + (0.0721 * 0.6)) * 1 = 0.27134`

Weiß hat einen Helligkeitswert von `100%`.

`((0.2125 * 1) + (0.7154 * 1) + (0.0721 * 1)) * 1 = 1`

Die Helligkeit von Schwarz ist `0%`.

`((0.2125 * 0) + (0.7154 * 0) + (0.0721 * 0)) * 1 = 0`

Wir demonstrieren dies, indem wir Weiß (`rgb(100% 100% 100%)`) mit einer Helligkeit von `100%` bei `27.234%` Deckkraft zu einem linearen Verlauf aus `rebeccapurple`, `weiß` und `schwarz` hinzufügen, den wir dann verwenden, um unser Bild zu maskieren. Dieses Weiß wird auf denselben Deckkraftwert aufgelöst:

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

Die Bereiche mit einer `weißen` Maske sind vollständig undurchsichtlich. Die Bereiche mit einer `schwarzen` Maske sind vollständig transparent. Die Bereiche mit einer `rebeccapurple`-Maske und die Bereiche mit einer `27.1234%` undurchsichtigen weißen Maske sind beide `27.1234%` undurchsichtig.

{{EmbedLiveSample("luminance2", "", "250px")}}

Wenn Sie den `mask-mode` auf `alpha` umschalten, spielt die Farbe des Verlaufs keine Rolle mehr. Das gesamte Element wird undurchsichtig sein, außer in den Bereichen, die von dem halbdeckenden Weiß abgedeckt werden.

Die `mask-mode`-Eigenschaft ermöglicht es, Rasterbilder ohne Alphatransparenz, wie JPEGs, als Maskenbilder zu verwenden. Ein JPEG besteht aus undurchsichtigen Pixeln. Die Verwendung eines JPEGs als Maske mit seinem Standard-`alpha`-Maskenmodus würde das gesamte Element ausblenden. Der `luminance`-Wert von `mask-mode` hingegen schneidet das Element dort ab, wo die Maske schwarz ist (keine Helligkeit hat), ist vollständig deckend, wo die Maske weiß (100% Helligkeit) ist, mit anderen Bereichen, die basierend auf der Helligkeit des maskierenden Bereichs halbtransparent sind.

In diesem Beispiel haben wir einen weißen Mond vor einem schwarzen Nachthimmel.

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

Das Element wird abgeschnitten und ist nicht sichtbar, wo der Himmel schwarz ist. Das Bild ist am sichtbarsten, wo der Mond am hellsten ist.

{{EmbedLiveSample("luminance3", "", "250px")}}

In diesem Fall wird, wenn Sie den `mask-mode` auf `alpha` umschalten, das gesamte Element sichtbar sein, da die gesamte Maske deckend ist.

## SVG `<mask>` als Maskenquelle

Eine Maske kann ein beliebiger Typ von CSS {{cssxref("image")}} oder eine `<mask-source>` sein. Eine `<mask-source>` ist ein {{cssxref("url_value", "&lt;url&gt;")}}-Verweis auf ein SVG {{SVGElement("mask")}}-Element. Dies ist vergleichbar mit dem Clipping mit der CSS {{cssxref("clip-path")}}-Eigenschaft, wobei der "Maske" ein SVG {{SVGElement("clipPath")}}-Element ist (bei `clip-path` spielt die Luminanz des Pfades keine Rolle).

In diesem Beispiel definieren wir ein SVG mit einem `<mask>`-Element, einem identischen {{SVGElement("clipPath")}}-Element und einem identischen {{SVGElement("path")}}-Element, damit Sie die Masken- und Clip-Pfadquelle sehen können.

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

Da die Bildquelle eine `<mask>` ist und sowohl die `mask-type`-CSS-Eigenschaft als auch das `mask-type`-SVG-Attribut nicht gesetzt sind, wird für `mask-type` standardmäßig `alpha` angenommen, sodass `mask-mode: match-source` zu `luminance` aufgelöst wird. Dies liegt daran, dass für Maskenquellen, die SVG {{svgelement("mask")}}-Elemente sind, standardmäßig `luminance` angenommen wird, es sei denn, das {{svgattr("mask-type")}}-Attribut ist explizit auf `alpha` gesetzt.

{{EmbedLiveSample("svg1", "", "300px")}}

Da weder das `mask-type`-Attribut noch die CSS-Eigenschaft unseres Maskens gesetzt wurden, wird der Standardwert der `mask-mode`-Eigenschaft von `match-source` zu `luminance` aufgelöst. Aktivieren Sie das Kontrollkästchen, um den `mask-mode`-Wert auf `alpha` einzustellen oder ihn standardmäßig auf `match-source` zu belassen.

Dieses Beispiel zeigt auch den Unterschied zwischen Masking und Clipping in CSS. Sie werden bemerken, dass Luminanz und Alphatransparenz für das Masking relevant sind, nicht jedoch für das Clipping. Masking kann verwendet werden, um die Deckkraft eines Elements zu steuern, während Clipping alles innerhalb des Clipping-Pfads zeigt und die Teile des Elements außerhalb des Clip-Pfads vollständig verbirgt. Beschnittene Bereiche sind völlig unsichtbar, während maskierte Bereiche teilweise oder vollständig sichtbar sein können.

Wenn Sie nur Formen benötigen, mag Clipping ausreichen. Wenn Sie jedoch Übergänge, variable Deckkraft oder sogar die Kontrolle über Position und Größe benötigen (was wir in einem separaten Leitfaden diskutieren werden), ist Masking geeigneter.

## Siehe auch

- [Einführung in CSS-Clipping](/de/docs/Web/CSS/Guides/Masking/Clipping)
- [CSS- `mask`-Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/Guides/Masking) Modul
