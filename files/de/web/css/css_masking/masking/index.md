---
title: Einführung in CSS-Maskierung
slug: Web/CSS/CSS_masking/Masking
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{CSSRef}}

CSS-Maskierung ermöglicht es Ihnen, Teile eines Elements selektiv zu zeigen oder zu verbergen, indem eine oder mehrere Maskenbilder darauf angewendet werden. Diese Maskenbilder können Verläufe, Bilder oder SVG-Quellen sein. Im Gegensatz zu [CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping), das entweder Bereiche eines Elements vollständig anzeigt oder verbirgt basierend auf der Form eines einzigen Pfads, ermöglicht die Maskierung nuancierte Transparenz- und Überblendeffekte basierend auf der Alpha-Transparenz und optional der Luminanz der Maskenbilder.

Dieser Leitfaden führt in das Konzept der Maskierung ein, erläutert die verschiedenen Typen von Maskenbildern und wie die Luminanz und Alpha-Transparenz der Maske die Teile des Elements beeinflusst, die maskiert (sichtbar gemacht) oder ausgeschnitten (oder verborgen) werden.

## Was ist Maskierung in CSS?

In CSS können Masken verwendet werden, um Bereiche eines Elements zu definieren, die sichtbar sind, und andere Bereiche, die verborgen sind. Maskenschichten, definiert durch eine oder mehrere {{cssxref("mask-image")}}-Quellen, bestimmen die Bereiche eines Elements, die sichtbar sein sollen und mit welcher Deckkraft.

> [!NOTE]
> Mehrere CSS-Maskierungseigenschaftswerte können mit der Abkürzungseigenschaft {{cssxref("mask")}} festgelegt werden.

Mit `Alpha`-Masken entspricht die Deckkraft des maskierten Elements der Deckkraft der angewendeten Maske. In CSS ist Maskierung das Gegenteil einer Maskerade-Maske, bei der das Gesicht verborgen wird, wo immer die Maske deckend ist. In CSS: Die Bereiche des Elements, in denen seine Maske vollständig deckend ist, werden vollständig deckend und sichtbar sein. Wo immer die Maske vollständig transparent ist, wird das Element vollständig verborgen sein. Bereiche des Elements, die durch teilweise deckende Maskenbereiche maskiert sind, werden teilweise deckend sein, entsprechend der Deckkraft der Maske.

Bei Alpha-Masken ist die Farbe der Maske unwichtig. Nur die Deckkraft der Maske ist von Bedeutung. Bei [Luminanzmasken](#alpha-transparenz_versus_luminanz) wird die Helligkeit der Maskenfarben berücksichtigt, um die Deckkraft des maskierten Elements zu bestimmen. Je heller und deckender die Farbe, desto deckender das Element. Je dunkler und transparenter die Farbe, desto weniger deckend wird die Maske sein.

Masken können mit CSS-Verläufen, Rasterbildern (wie PNGs) und SVG {{svgelement("mask")}}-Elementen definiert werden. In diesem Leitfaden führen wir die verschiedenen Maskenbildtypen ein, während wir [Deckkraft und Transparenz](#deckkraft_versus_transparenz), [Luminanz](#alpha-transparenz_versus_luminanz) und [Maskierung versus CSS-Clipping](#svg_mask_as_mask_source) diskutieren.

Jede Maskenschicht besteht aus einem {{cssxref("mask-image")}}, das relativ zu einer Ursprungsbox [positioniert](/de/docs/Web/CSS/mask-position) ist. Die Maskenbilder können [skaliert](/de/docs/Web/CSS/mask-size), [wiederholt](/de/docs/Web/CSS/mask-repeat) und [beschnitten](/de/docs/Web/CSS/mask-clip) werden. In Fällen, in denen mehrere Maskenbilder deklariert sind, kann festgelegt werden, wie die [Maskenschichten kombiniert](/de/docs/Web/CSS/mask-composite) oder kombiniert werden sollen. Diese werden im [Leitfaden für Maskierungseigenschaften](/de/docs/Web/CSS/CSS_masking/CSS_mask_properties) besprochen.

> [!NOTE]
> Alle Beispiele verwenden das folgende Bild als zugrundeliegendes Element, auf das Masken angewendet werden:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Regenbogenflagge" />

## Deckkraft versus Transparenz

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

Mit Alpha-Masken werden die sichtbaren Bereiche eines Elements durch die Alpha-Transparenz der darauf angewendeten Maske definiert. Wo immer die Maske vollständig deckend ist, wird das Element sichtbar sein. An jedem Pixel, wo die Maske vollständig transparent ist, wird das Element ebenfalls vollständig verborgen sein. Bereiche des Elements, die durch einen teilweise deckenden Abschnitt einer Maske maskiert sind, werden teilweise deckend sein, entsprechend der Deckkraft der darauf angewendeten Maske.

Um dies zu demonstrieren, betrachten wir ein Beispiel, das einen {{cssxref("conic-gradient")}} als `mask-image` verwendet. CSS-Verläufe, einschließlich Kegelverläufen, können verwendet werden, um weiche Übergänge zwischen sichtbaren und unsichtbaren Bereichen zu schaffen.

In diesem Fall ist die obere rechte Ecke der Maske vollständig deckend, das obere linke Viertel ist vollständig transparent, und die untere Hälfte hat einen weichen Übergang zwischen deckend und transparent.

```css live-sample___gradient1
.applied-mask {
  mask-image: conic-gradient(rgb(0 0 0 / 1) 90deg, rgba(0 0 0 / 0) 270deg);
}
.mask-source {
  background: conic-gradient(rgb(0 0 0 / 1) 90deg, rgba(0 0 0 / 0) 270deg);
}
```

Beachten Sie, wie das Element, auf dem die Maske angewendet wird, eine vollständig sichtbare obere rechte Ecke hat, das obere linke Viertel verborgen ist und die untere Hälfte sanft von Sichtbarkeit zu Transparenz übergeht, was die Sichtbarkeit des angewendeten Maskenbilds widerspiegelt.

{{EmbedLiveSample("gradient1", "", "250px")}}

Bei Alpha-Masken ist die Farbe der Maske egal, nur die Transparenz zählt. In diesem Beispiel haben wir einen gestreiften Verlauf mit vollständig deckendem Rot, halb deckendem Rot und vollständig transparenten Streifen.

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

Beachten Sie, wie die vollständig deckenden Maskenbereiche vollständig deckende Pixel des Elements aufdecken, halbtransparente Maskenbereiche halbtransparente Bereiche schaffen und vollständig transparente Maskenbereiche die zugehörigen Bereiche vollständig verbergen.

{{EmbedLiveSample("gradient2", "", "250px")}}

Die vorherigen beiden Beispiele verwendeten Verläufe als Masken- und Hintergrundbilder. Das Maskenbild muss kein CSS-Bild sein. Es kann ein externes Bild oder ein SVG sein.

In diesem Fall verwenden wir ein externes PNG. Das Bild enthält ein buntes Herz mit transparentem Hintergrund.

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

Beachten Sie, wie die transparenten Maskenbereiche das Element zuschneiden; die einzigen Teile des Elements, die sichtbar sind, sind die Bereiche, in denen die Maske deckend ist. Die Farbe der Maske selbst spielt keine Rolle.

{{EmbedLiveSample("image1", "", "250px")}}

## Alpha-Transparenz versus Luminanz

Der Standardwert der `mask-mode`-Eigenschaft — `match-source` — setzt den Modus entweder auf `alpha` oder `luminance`, abhängig vom Wert. Der Wert `match-source` löst sich zu `alpha` für alle Maskenquellen außer SVG {{svgelement("mask")}}-Elementen auf. Wenn die Maskenquelle ein `<mask>`-Element ist, löst sich `match-source` zum Wert der {{cssxref("mask-type")}}-Eigenschaft des `<mask>` auf, wenn gesetzt. Andernfalls löst es sich zum Wert des SVG {{svgattr("mask-type")}}-Attributs, das am `<mask>`-Element gesetzt ist. Wenn dies auch nicht explizit gesetzt ist, löst sich `match-source` zu `luminance` auf.

Wenn `mask-mode` sich zu `luminance` auflöst oder wir es explizit auf `luminance` setzen, beeinflussen die Farben der Maske die Masken-Deckkraft. Im vorherigen Demo war der `mask-mode` nicht gesetzt, daher standardisierte der Wert `match-source`. Da das bunte Herzbild ein transparentes PNG ist, löst `match-source` zu `alpha` auf. Indem wir diese Eigenschaft explizit setzen, können wir den Modus steuern. In diesem Demo ändern wir den `mask-mode` zu `luminance`.

```css live-sample___luminance1
.applied-mask {
  mask-mode: luminance;
}
```

Wenn `mask-mode: luminance` auf die gleiche Maske wie im vorherigen Beispiel angewendet wird, sind die Bereiche des Elements, in denen die Maske **am hellsten** ist, deckender, während **dunklere** Bereiche weniger deckend sind.

{{EmbedLiveSample("luminance1", "", "250px")}}

Die Deckkraft einer Luminanzmaske wird durch die `R`, `G`, `B` und `A`-Werte einer {{Glossary("RGB", "RGB")}}-Farbe unter Verwendung der Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel ist die neueste {{cssxref("named-color")}} `rebeccapurple`, die `#663399` ist. Während man annehmen könnte, dass die Helligkeit dem L der `hsl()`-Farbfunktion entspricht, ist es nicht so einfach. Der Wert `#663399` entspricht `rgb(40% 20% 60% / 1)` und `hsl(270 50% 40% / 1)`, aber der Helligkeitswert ist `27.134%`, nicht `40%`.

`((0.2125 * 0.4) + (0.7154 * 0.2) + (0.0721 * 0.6)) * 1 = 0.27134`

Weiß hat einen Helligkeitswert von `100%`.

`((0.2125 * 1) + (0.7154 * 1) + (0.0721 * 1)) * 1 = 1`

Die Helligkeit von Schwarz beträgt `0%`.

`((0.2125 * 0) + (0.7154 * 0) + (0.0721 * 0)) * 1 = 0`

Wir werden dies demonstrieren, indem wir Weiß (`rgb(100% 100% 100%)`) mit einer Helligkeit von `100%` bei `27.234%` Deckkraft zu einem `rebeccapurple`, `white` und `black` linearen Verlauf hinzufügen, den wir dann verwenden, um unser Bild zu maskieren. Dieses Weiß löst den gleichen Transparenzwert aus:

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

Die Bereiche mit einer `weißen` Maske sind vollständig deckend. Die Bereiche mit einer `schwarzen` Maske sind vollständig transparent. Die Bereiche mit einer `rebeccapurple`-Maske und die Bereiche mit einer `27.1234%` deckenden weißen Maske sind beide `27.1234%` deckend.

{{EmbedLiveSample("luminance2", "", "250px")}}

Wenn Sie den `mask-mode` auf `alpha` umstellen, spielt die Farbe des Verlaufs keine Rolle mehr. Das gesamte Element wird deckend sein, außer den Bereichen, die durch das halb deckende Weiß bedeckt sind.

Die `mask-mode`-Eigenschaft ermöglicht es, Rasterbilder ohne Alpha-Transparenz, wie JPEGs, als Maskenbilder zu verwenden. Ein JPEG besteht aus undurchsichtigen Pixeln. Die Verwendung eines JPEGs als Maske mit seinem Standard-`alpha`-Maskenmodus würde das gesamte Element verbergen. Der `luminance`-Wert von `mask-mode` hingegen schneidet das Element dort aus, wo die Maske schwarz ist (hat keine Helligkeit), ist vollständig deckend, wo die Maske deckend weiß ist (100% Helligkeit), wobei andere Bereiche basierend auf der Helligkeit der maskierenden Maskenfläche halbtransparent sind.

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

Das Element wird ausgeschnitten und ist nicht sichtbar, wo der Himmel schwarz ist. Das Bild ist am sichtbarsten, wo der Mond am hellsten ist.

{{EmbedLiveSample("luminance3", "", "250px")}}

In diesem Fall wird, wenn Sie den `mask-mode` auf `alpha` umstellen, das gesamte Element sichtbar, da die gesamte Maske undurchsichtig ist.

## SVG `<mask>` als Maskenquelle

Eine Maske kann jeder Typ von CSS {{cssxref("image")}} oder ein `<mask-source>` sein. Ein `<mask-source>` ist ein {{cssxref("url_value", "&lt;url&gt;")}}-Verweis auf ein SVG {{SVGElement("mask")}}-Element. Dies ist ähnlich wie das Clipping mit der CSS-{{cssxref("clip-path")}}-Eigenschaft, wobei in diesem Fall die "Maske" ein SVG {{SVGElement("clipPath")}}-Element ist (bei `clip-path` ist die Luminanz des Pfads nicht von Bedeutung).

In diesem Beispiel definieren wir ein SVG mit einem `<mask>`-Element, einem identischen {{SVGElement("clipPath")}}-Element und einem identischen {{SVGElement("path")}}-Element, sodass Sie die Masken- und Clip-Pfadquelle sehen können.

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

Da die Bildquelle ein `<mask>` ist und die Maske weder die CSS-Eigenschaft `mask-type` noch das SVG-Attribut `mask-type` gesetzt hat, standardisiert `mask-type` auf `alpha`, sodass die Standard-Einstellung von `mask-mode: match-source` auf `luminance` auflöst. Dies liegt daran, dass bei Maskenquellen, die SVG-{{svgelement("mask")}}-Elemente sind, `mask-type` standardmäßig auf `luminance` gestellt ist, es sei denn, das {{svgattr("mask-type")}}-Attribut ist explizit auf `alpha` gesetzt.

{{EmbedLiveSample("svg1", "", "300px")}}

Da wir das `mask-type`-Attribut oder die CSS-Eigenschaft nicht auf unserer Maske gesetzt haben, löst sich die Standard-Einstellung der `mask-mode`-Eigenschaft `match-source` auf `luminance`. Aktivieren Sie das Kontrollkästchen, um den `mask-mode`-Wert auf `alpha` zu setzen oder es zuzulassen, auf `match-source` zu standardisieren.

Dieses Beispiel zeigte auch den Unterschied zwischen Maskierung und Clipping in CSS. Sie werden bemerken, dass Luminanz und Alpha-Transparenz für die Maskierung relevant sind, nicht jedoch für das Clipping. Maskierung kann verwendet werden, um die Deckkraft eines Elements zu steuern, während Clipping alles innerhalb des Clip-Pfads zeigt und die Teile des Elements außerhalb des Clip-Pfads vollständig verbirgt. Ausgeschnittene Bereiche sind komplett unsichtbar, während maskierte Bereiche teilweise oder vollständig sichtbar sein können.

Wenn Sie nur Formen benötigen, kann Clipping ausreichen. Wenn Sie jedoch Fading, variable Deckkraft oder sogar die Kontrolle über Position und Größe benötigen (die wir in einem separaten Leitfaden besprechen), ist die Maskierung besser geeignet.

## Siehe auch

- [Einführung in CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
