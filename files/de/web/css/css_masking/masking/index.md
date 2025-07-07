---
title: Einführung in CSS-Maskierung
slug: Web/CSS/CSS_masking/Masking
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

{{CSSRef}}

CSS-Maskierung ermöglicht es Ihnen, Teile eines Elements selektiv anzuzeigen oder zu verbergen, indem Sie ein oder mehrere Maskenbilder darauf anwenden. Diese Maskenbilder können Verläufe, Bilder oder SVG-Quellen sein. Im Gegensatz zum [CSS Clipping](/de/docs/Web/CSS/CSS_masking/Clipping), das Bereiche eines Elements vollständig anzeigt oder verbirgt, basierend auf der Form eines einzelnen Pfades, ermöglicht die Maskierung nuancierte Transparenz- und Überblendeffekte basierend auf der Alpha-Transparenz und optional der Luminanz der Maskenbilder.

Dieser Leitfaden führt in das Konzept der Maskierung ein, die verschiedenen Maskenbildtypen und wie die Luminanz und Alpha-Transparenz der Maske die Bereiche des Elements beeinflusst, die maskiert (sichtbar gemacht) werden, im Vergleich zu den Bereichen, die abgeschnitten (oder verborgen) sind.

## Was ist Maskierung in CSS?

In CSS können Masken verwendet werden, um Bereiche eines Elements zu definieren, die sichtbar und andere, die verborgen sind. Maskenschichten, definiert durch eine oder mehrere {{cssxref("mask-image")}}-Quellen, bestimmen die Bereiche eines Elements, die sichtbar sein sollten und mit welcher Deckkraft.

> [!NOTE]
> Mehrere Werte der CSS-Maskierungseigenschaft können mit der {{cssxref("mask")}}-Kurzschreibweise festgelegt werden.

Bei `alpha`-Masken entspricht die Deckkraft des maskierten Elements der aufgebrachten Deckkraft der Maske. In CSS ist die Maskierung das Gegenteil einer Maskerade-Maske, bei der das Gesicht verborgen ist, wo immer die Maske undurchsichtig ist. In CSS sind die Bereiche des Elements, bei denen seine Maske vollständig undurchsichtig ist, vollständig undurchsichtig und sichtbar. Wo immer die Maske vollständig transparent ist, wird das Element vollständig verborgen sein. Bereiche des Elements, die durch teilweise undurchsichtige Maskenbereiche maskiert sind, werden teilweise undurchsichtig sein, entsprechend der Deckkraft der Maske.

Bei Alpha-Masken ist die Farbe der Maske irrelevant. Nur die Deckkraft der Maske zählt. Bei [Luminanzmasken](#alpha-transparenz_versus_luminanz) wird die Helligkeit der Maskenfarben berücksichtigt, um die Deckkraft des maskierten Elements zu bestimmen. Je heller und undurchsichtiger die Farbe, desto undurchsichtiger das Element. Je dunkler und transparenter die Farbe, desto weniger undurchsichtig wird die Maske.

Masken können mit CSS-Verläufen, Rasterbildern (wie PNGs) und SVG {{svgelement("mask")}}-Elementen definiert werden. In diesem Leitfaden stellen wir die verschiedenen Maskenbildtypen vor, während wir [Undurchsichtigkeit und Transparenz](#undurchsichtigkeit_versus_transparenz), [Luminanz](#alpha-transparenz_versus_luminanz) und [Maskierung versus CSS-Clipping](#svg_mask_as_mask_source) diskutieren.

Jede Maskenschicht besteht aus einem {{cssxref("mask-image")}}, das relativ zu einer Ursprungsbox [positioniert](/de/docs/Web/CSS/mask-position) ist. Die Maskenbilder können [skaliert](/de/docs/Web/CSS/mask-size), [wiederholt](/de/docs/Web/CSS/mask-repeat) und [abgeschnitten](/de/docs/Web/CSS/mask-clip) werden. In Fällen, in denen mehrere Maskenbilder deklariert sind, kann festgelegt werden, wie die [Maskenschichten zusammengefügt](/de/docs/Web/CSS/mask-composite) oder kombiniert werden. Diese werden im [Leitfaden zu den Maskierungseigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties) besprochen.

> [!NOTE]
> Alle Beispiele verwenden das folgende Bild als Basisbild, auf das die Masken angewendet werden:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Regenbogenflagge" />

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

Mit Alpha-Masken werden die sichtbaren Bereiche eines Elements durch die Alpha-Transparenz der darauf angewendeten Maske definiert. Wo immer die Maske vollständig undurchsichtig ist, wird das Element sichtbar sein. An jedem Pixel, an dem die Maske vollständig transparent ist, wird das Element ebenfalls vollständig verborgen sein. Bereiche des Elements, die durch einen teilweise undurchsichtigen Abschnitt einer Maske maskiert sind, werden teilweise undurchsichtig sein und die aufgebrachte Deckkraft der Maske übernehmen.

### Mit Verläufen

Um dies zu demonstrieren, betrachten wir ein Beispiel mit einem {{cssxref("conic-gradient")}} als `mask-image`. CSS-Verläufe, einschließlich konischer Verläufe, können verwendet werden, um sanfte Übergänge zwischen sichtbaren und verborgenen Bereichen zu erzeugen.

In diesem Fall ist die obere rechte Ecke der Maske vollständig undurchsichtig, das obere linke Viertel ist vollständig transparent, und die untere Hälfte zeigt einen sanften Übergang zwischen undurchsichtig und transparent.

```css live-sample___gradient1
.applied-mask {
  mask-image: conic-gradient(rgb(0 0 0 / 1) 90deg, rgb(0 0 0 / 0) 270deg);
}
.mask-source {
  background: conic-gradient(rgb(0 0 0 / 1) 90deg, rgb(0 0 0 / 0) 270deg);
}
```

Beachten Sie, wie das Element, auf dem die Maske angewendet wird, eine vollständig sichtbare obere rechte Ecke hat, das obere linke Viertel verborgen ist und die untere Hälfte sanft von sichtbar zu transparent übergeht, was die Sichtbarkeit der angewendeten Maskenbild widerspiegelt.

{{EmbedLiveSample("gradient1", "", "250px")}}

Mit Alpha-Masken spielt die Farbe der Maske keine Rolle, nur die Transparenz. In diesem Beispiel haben wir einen gestreiften Verlauf mit vollständig undurchsichtigen roten, halbtransparenten roten und vollständig transparenten Streifen.

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

Beachten Sie, wie die vollständig undurchsichtigen Maskenbereiche vollständig undurchsichtige Elementpixel enthüllen, halbtransparente Maskenbereiche halbtransparente Bereiche erzeugen und vollständig transparente Maskenbereiche die zugehörigen Bereiche vollständig verbergen.

{{EmbedLiveSample("gradient2", "", "250px")}}

### Mit importierten Bildern

Die vorherigen zwei Beispiele verwendeten Verläufe als Masken- und Hintergrundbilder. Das Maskenbild muss kein CSS-Bild sein. Es kann ein externes Bild oder ein SVG sein.

In diesem Fall verwenden wir ein externes PNG. Das Bild enthält ein farbenfrohes Herz mit einem transparenten Hintergrund.

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

Beachten Sie, wie die transparenten Maskenbereiche das Element zuschneiden; die einzigen Teile des Elements, die sichtbar sind, sind die Bereiche, in denen die Maske undurchsichtig ist. Die Farbe der Maske selbst spielt keine Rolle.

{{EmbedLiveSample("image1", "", "250px")}}

## Alpha-Transparenz versus Luminanz

Der Standardwert der `mask-mode`-Eigenschaft — `match-source` — setzt den Modus entweder auf `alpha` oder `luminance`, abhängig vom Wert. Der Wert `match-source` wird für alle Maskenquellen außer SVG-{{svgelement("mask")}}-Elementen auf `alpha` gesetzt. Wenn die Maskenquelle ein `<mask>`-Element ist, wird `match-source` auf den Wert der {{cssxref("mask-type")}}-Eigenschaft des `<mask>`-Elements gesetzt, falls vorhanden. Andernfalls löst er sich zum Wert des SVG-{{svgattr("mask-type")}}-Attributs, das auf dem `<mask>`-Element gesetzt ist. Wenn auch dies nicht explizit gesetzt ist, wird `match-source` auf `luminance` gelöst.

Wenn `mask-mode` auf `luminance` aufgelöst wird oder wir es ausdrücklich auf `luminance` setzen, beeinflussen die Farben der Maske die Masken-Opazität. Im vorherigen Demo war der `mask-mode` nicht gesetzt, sodass der Wert standardmäßig auf `match-source` gesetzt wurde. Da das farbliche Herzbild ein transparentes PNG ist, löst sich `match-source` auf `alpha`. Durch explizites Setzen dieser Eigenschaft können wir den Modus kontrollieren. In diesem Beispiel ändern wir den `mask-mode` zu `luminance`.

```css live-sample___luminance1
.applied-mask {
  mask-mode: luminance;
}
```

Wenn `mask-mode: luminance` auf dieselbe Maske angewendet wird wie im vorherigen Beispiel, sind die Bereiche des Elements, wo die Maske **am hellsten** ist, mehr undurchsichtig, während **dunklere** Bereiche weniger undurchsichtig sind.

{{EmbedLiveSample("luminance1", "", "250px")}}

Die Opazität einer Luminanzmaske wird durch die `R`, `G`, `B` und `A`-Werte einer {{Glossary("RGB", "RGB")}}-Farbe unter Verwendung der Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel ist die neueste {{cssxref("named-color")}} `rebeccapurple`, was `#663399` entspricht. Während man annehmen könnte, die Helligkeit sei gleich dem L der `hsl()`-Funktion, ist es nicht so einfach. Der Wert `#663399` entspricht `rgb(40% 20% 60% / 1)` und `hsl(270 50% 40% / 1)`, aber der Helligkeitswert beträgt `27.134%`, nicht `40%`.

`((0.2125 * 0.4) + (0.7154 * 0.2) + (0.0721 * 0.6)) * 1 = 0.27134`

Weiß hat einen Helligkeitswert von `100%`.

`((0.2125 * 1) + (0.7154 * 1) + (0.0721 * 1)) * 1 = 1`

Schwarz hat eine Helligkeit von `0%`.

`((0.2125 * 0) + (0.7154 * 0) + (0.0721 * 0)) * 1 = 0`

Wir werden dies demonstrieren, indem wir Weiß (`rgb(100% 100% 100%)`) mit einer Helligkeit von `100%` bei `27.234%` Deckkraft zu einem `rebeccapurple`, `weißen` und `schwarzen` linearem Verlauf hinzufügen, den wir dann zum Maskieren unseres Bildes verwenden. Dieses Weiß löst sich auf denselben Deckkraftwert:

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

Die Bereiche mit einer `weißen` Maske sind vollständig undurchsichtig. Die Bereiche mit einer `schwarzen` Maske sind vollständig transparent. Die Bereiche mit einer `rebeccapurple`-Maske und die Bereiche mit einer `27.1234%`-durchsichtigen weißen Maske sind beide `27.1234%` undurchsichtig.

{{EmbedLiveSample("luminance2", "", "250px")}}

Wenn Sie den `mask-mode` auf `alpha` umschalten, spielt die Farbe des Verlaufs keine Rolle mehr. Das gesamte Element wird sichtbar sein, außer den Bereichen, die durch das halbtransparente Weiß bedeckt sind.

Die `mask-mode`-Eigenschaft ermöglicht die Verwendung von Rasterbildern ohne Alphatransparenz, wie z.B. JPEGs, als Maskenbilder. Ein JPEG besteht aus undurchsichtigen Pixeln. Die Verwendung eines JPEGs als Maske mit seinem Standard-`alpha`-Maskenmodus würde das gesamte Element verbergen. Der `luminance`-Wert von `mask-mode` hingegen schneidet das Element, wo die Maske schwarz ist (keine Helligkeit hat), ist vollständig undurchsichtig, wo die Maske undurchsichtig weiß ist (100% Helligkeit), mit anderen Bereichen, die halbtransparent sind, basierend auf der Helligkeit des Maskenbereichs, der es maskiert.

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

Das Element ist abgeschnitten und nicht sichtbar, wo der Himmel schwarz ist. Das Bild ist am sichtbarsten, wo der Mond am hellsten ist.

{{EmbedLiveSample("luminance3", "", "250px")}}

In diesem Fall, wenn Sie den `mask-mode` auf `alpha` umschalten, wird das gesamte Element sichtbar sein, da die gesamte Maske undurchsichtig ist.

## SVG `<mask>` als Maskenquelle

Eine Maske kann jede Art von CSS {{cssxref("image")}} oder ein `<mask-source>` sein. Ein `<mask-source>` ist ein {{cssxref("url_value", "&lt;url&gt;")}}-Verweis auf ein SVG-{{SVGElement("mask")}}-Element. Dies ähnelt dem Clipping mit der CSS-{{cssxref("clip-path")}}-Eigenschaft, in welchem Fall die "Maske" ein SVG-{{SVGElement("clipPath")}}-Element ist (bei `clip-path` ist die Luminanz des Pfades nicht relevant).

In diesem Beispiel definieren wir ein SVG mit einem `<mask>`-Element, einem identischen {{SVGElement("clipPath")}}-Element und einem identischen {{SVGElement("path")}}-Element, sodass Sie die Masken- und Clip-Pfad-Quelle sehen können.

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

Da die Bildquelle ein `<mask>` ist und die Maske weder die `mask-type`-CSS-Eigenschaft noch das `mask-type`-SVG-Attribut gesetzt hat, wird der `mask-type`-Wert auf `alpha` gesetzt, sodass der Standard von `mask-mode: match-source` auf `luminance` aufgelöst wird. Dies liegt daran, dass für Maskenquellen, die SVG {{svgelement("mask")}}-Elemente sind, der `mask-type`-Standard auf `luminance` gesetzt wird, es sei denn, das {{svgattr("mask-type")}}-Attribut wird explizit auf `alpha` gesetzt.

{{EmbedLiveSample("svg1", "", "300px")}}

Da wir weder das `mask-type`-Attribut noch die CSS-Eigenschaft auf unserer Maske gesetzt haben, löst sich der Standardwert der `mask-mode`-Eigenschaft `match-source` auf `luminance` auf. Aktivieren Sie das Kontrollkästchen, um den `mask-mode`-Wert auf `alpha` zu setzen oder ihn auf `match-source` standardmäßig zu belassen.

Dieses Beispiel zeigt auch den Unterschied zwischen Maskierung und Clipping in CSS. Sie werden feststellen, dass Luminanz und Alpha-Transparenz für die Maskierung relevant sind, nicht aber für das Clipping. Maskierung kann verwendet werden, um die Deckkraft eines Elements zu steuern, während Clipping alles innerhalb des Clipping-Pfads anzeigt und die Teile des Elements außerhalb des Clip-Pfads vollständig verbirgt. Abgeschnittene Bereiche sind vollständig unsichtbar, während maskierte Bereiche teilweise oder vollständig sichtbar sein können.

Wenn Sie nur Formen benötigen, kann Clipping ausreichen. Wenn Sie jedoch Verblassen, variable Deckkraft oder sogar Kontrolle über Position und Größe benötigen (die wir in einem separaten Leitfaden diskutieren werden), ist Maskierung geeigneter.

## Siehe auch

- [Einführung in CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS-`mask`-Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
