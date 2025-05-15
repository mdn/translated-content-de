---
title: Einführung in CSS Maskierung
slug: Web/CSS/CSS_masking/Masking
l10n:
  sourceCommit: c99b4f2d0ea81c0e8822a749d218015c75995b5b
---

{{CSSRef}}

CSS-Maskierung ermöglicht es, Teile eines Elements selektiv durch Anwenden eines oder mehrerer Maskenbilder zu enthüllen oder zu verbergen. Diese Maskenbilder können Verläufe, Bilder oder SVG-Quellen sein. Anders als beim [CSS Clipping](/de/docs/Web/CSS/CSS_masking/Clipping), das entweder vollständig Bereiche eines Elements basierend auf der Form eines einzigen Pfads zeigt oder verbirgt, ermöglicht das Maskieren nuancierte Transparenz- und Blending-Effekte basierend auf der Alphatransparenz und optional der Leuchtkraft der Maskenbilder.

Dieser Leitfaden führt in das Konzept der Maskierung ein, zeigt die verschiedenen Maskenbildtypen und erklärt, wie die Leuchtkraft und Alphatransparenz der Maske die Teile des Elements beeinflussen, die maskiert (sichtbar gemacht) werden, im Vergleich zu den Teilen, die beschnitten (oder verborgen) werden.

## Was ist Maskieren in CSS?

In CSS können Masken verwendet werden, um sichtbare Bereiche eines Elements und andere Bereiche zu definieren, die verborgen sind. Maskenebenen, definiert durch eine oder mehrere {{cssxref("mask-image")}}-Quellen, bestimmen die Bereiche eines Elements, die sichtbar sein sollen und mit welcher Deckkraft.

> [!NOTE]
> Mehrere CSS-Masking-Eigenschaftswerte können über die {{cssxref("mask")}}-Kurzschreibweise festgelegt werden.

Bei `alpha`-Masken entspricht die Deckkraft des maskierten Elements der Deckkraft der angewendeten Maske. In CSS ist das Maskieren das Gegenteil einer Maskeradenmaske, bei der das Gesicht verborgen ist, wo immer die Maske undurchsichtig ist. In CSS sind die Bereiche des Elements, in denen seine Maske vollständig undurchsichtig ist, vollständig sichtbar. Wo immer die Maske vollständig transparent ist, wird das Element vollständig verborgen. Bereiche des Elements, die von teilweise undurchsichtigen Maskenbereichen maskiert werden, werden teilweise undurchsichtig sein, entsprechend der Deckkraft der Maske.

Bei Alphamasken ist die Farbe der Maske irrelevant. Nur die Deckkraft der Maske ist von Bedeutung. Bei [Leuchtkraftmasken](#alphatransparenz_versus_leuchtkraft) wird die Helligkeit der Maskenfarben berücksichtigt, wenn die Deckkraft des maskierten Elements bestimmt wird. Je heller und undurchsichtiger die Farbe, desto undurchsichtiger das Element. Je dunkler und transparenter die Farbe, desto weniger undurchsichtig wird die Maske sein.

Masken können unter Verwendung von CSS-Verläufen, Rasterbildern (wie PNGs) und SVG-{{svgelem("mask")}}-Elementen definiert werden. In diesem Leitfaden stellen wir die verschiedenen Maskenbildtypen vor, während wir [Deckkraft und Transparenz](#deckkraft_versus_transparenz), [Leuchtkraft](#alphatransparenz_versus_leuchtkraft) und [Maskieren versus CSS Clipping](#svg_mask_as_mask_source) diskutieren.

Jede Maskenschicht besteht aus einem {{cssxref("mask-image")}}, das relativ zu einem Ursprungsrahmen [positioniert](/de/docs/Web/CSS/mask-position) ist. Die Maskenbilder können [skaliert](/de/docs/Web/CSS/mask-size), [wiederholt](/de/docs/Web/CSS/mask-repeat) und [beschnitten](/de/docs/Web/CSS/mask-clip) werden. In Fällen, in denen mehrere Maskenbilder deklariert werden, kann festgelegt werden, wie die [Maskenschichten zusammengesetzt](/de/docs/Web/CSS/mask-composite) oder kombiniert werden. Diese werden im [Maskierungen-Eigenschaften-Leitfaden](/de/docs/Web/CSS/CSS_masking/CSS_mask_properties) diskutiert.

> [!NOTE]
> Alle Beispiele verwenden das folgende Bild als zugrunde liegendes Element, auf das Masken angewendet werden:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride-Flagge" />

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

Mit Alphamasken werden die sichtbaren Bereiche eines Elements durch die Alphatransparenz der darauf angewendeten Maske definiert. Wo immer die Maske vollständig undurchsichtig ist, wird das Element sichtbar sein. An jedem Pixel, an dem die Maske vollständig transparent ist, wird auch das Element vollständig verborgen sein. Bereiche des Elements, die durch einen teilweise undurchsichtigen Abschnitt einer Maske maskiert werden, werden teilweise undurchsichtig sein, entsprechend der Deckkraft der darauf angewendeten Maske.

Um dies zu demonstrieren, sehen wir uns ein Beispiel mit einem {{cssxref("conic-gradient")}} als `mask-image` an. CSS-Verläufe, einschließlich konischer Verläufe, können verwendet werden, um sanfte Übergänge zwischen sichtbaren und verborgenen Bereichen zu erstellen.

In diesem Fall ist die obere rechte Ecke der Maske vollständig undurchsichtig, das obere linke Viertel vollständig transparent und die untere Hälfte hat einen sanften Übergang zwischen undurchsichtig und transparent.

```css live-sample___gradient1
.applied-mask {
  mask-image: conic-gradient(rgb(0 0 0 / 1) 90deg, rgba(0 0 0 / 0) 270deg);
}
.mask-source {
  background: conic-gradient(rgb(0 0 0 / 1) 90deg, rgba(0 0 0 / 0) 270deg);
}
```

Beachten Sie, wie das Element, auf das die Maske angewendet wird, eine vollständig sichtbare obere rechte Ecke hat, das obere linke Viertel verborgen ist und die untere Hälfte einen sanften Übergang von sichtbar zu transparent hat, der die Sichtbarkeit des angewendeten Maskenbilds widerspiegelt.

{{EmbedLiveSample("gradient1", "", "250px")}}

Bei Alphamasken spielt die Farbe der Maske keine Rolle, nur die Transparenz. In diesem Beispiel haben wir einen gestreiften Verlauf mit vollständig undurchsichtigen roten, halbundurchsichtigen roten und vollständig transparenten Streifen.

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

Beachten Sie, wie die vollständig undurchsichtigen Maskenbereiche vollständig undurchsichtige Elementpixel enthüllen, halbundurchsichtige Maskenbereiche halbundurchsichtige Bereiche erzeugen und vollständig transparente Maskenbereiche die zugehörigen Bereiche vollständig verbergen.

{{EmbedLiveSample("gradient2", "", "250px")}}

Die vorherigen zwei Beispiele verwendeten Verläufe als Masken- und Hintergrundbilder. Das Maskenbild muss kein CSS-Bild sein. Es kann ein externes Bild oder ein SVG sein.

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

Beachten Sie, wie die transparenten Maskenbereiche das Element zuschneiden; die einzigen Teile des Elements, die sichtbar sind, sind die Bereiche, in denen die Maske undurchsichtig ist. Die Farbe der Maske selbst spielt keine Rolle.

{{EmbedLiveSample("image1", "", "250px")}}

## Alphatransparenz versus Leuchtkraft

Der Standardwert der `mask-mode`-Eigenschaft — `match-source` — setzt den Modus je nach Wert auf entweder `alpha` oder `luminance`. Der Wert `match-source` wird für alle Maskenquellen außer SVG-{{svgelement("mask")}}-Elementen in `alpha` aufgelöst. Wenn die Maskenquelle ein `<mask>`-Element ist, wird `match-source` in den Wert der {{cssxref("mask-type")}}-Eigenschaft des `<mask>` aufgelöst, falls festgelegt. Andernfalls wird es in den Wert des SVG-{{svgattr("mask-type")}}-Attributs auf dem `<mask>`-Element aufgelöst. Wenn dies auch nicht explizit festgelegt ist, wird `match-source` in `luminance` aufgelöst.

Wenn `mask-mode` in `luminance` aufgelöst wird oder wir es explizit auf `luminance` setzen, beeinflussen die Farben der Maske die Maskendeckkraft. Im vorherigen Demo war `mask-mode` nicht festgelegt, daher wurde der Wert standardmäßig auf `match-source` gesetzt. Da das bunte Herzbild ein transparentes PNG ist, wird `match-source` in `alpha` aufgelöst. Durch das explizite Setzen dieser Eigenschaft können wir den Modus steuern. In diesem Demo ändern wir den `mask-mode` auf `luminance`.

```css live-sample___luminance1
.applied-mask {
  mask-mode: luminance;
}
```

Wenn `mask-mode: luminance` auf die gleiche Maske wie im vorherigen Beispiel angewendet wird, sind die Bereiche des Elements, in denen die Maske am **hellsten** ist, undurchsichtiger, während **dunklere** Bereiche weniger undurchsichtig sind.

{{EmbedLiveSample("luminance1", "", "250px")}}

Die Deckkraft einer Leuchtkraftmaske wird durch die `R`, `G`, `B` und `A` Werte einer {{Glossary("RGB", "RGB")}}-Farbe mit der Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel ist die neueste {{cssxref("named-color")}} `rebeccapurple`, was `#663399` entspricht. Während man annehmen könnte, dass die Helligkeit dem L der `hsl()`-Farbton-Funktion entsprechen könnte, ist es nicht so einfach. Der Wert `#663399` entspricht `rgb(40% 20% 60% / 1)` und `hsl(270 50% 40% / 1)`, jedoch beträgt der Helligkeitswert `27.134%`, nicht `40%`.

`((0.2125 * 0.4) + (0.7154 * 0.2) + (0.0721 * 0.6)) * 1 = 0.27134`

Weiß hat einen Helligkeitswert von `100%`.

`((0.2125 * 1) + (0.7154 * 1) + (0.0721 * 1)) * 1 = 1`

Schwarz hat eine Helligkeit von `0%`.

`((0.2125 * 0) + (0.7154 * 0) + (0.0721 * 0)) * 1 = 0`

Wir demonstrieren dies, indem wir Weiß (`rgb(100% 100% 100%)`) mit einer Helligkeit von `100%` bei `27,234%` Deckkraft zu einem `rebeccapurple`, `weiß` und `schwarz` linearen Verlauf hinzufügen, den wir dann verwenden, um unser Bild zu maskieren. Dieses Weiß löst sich in denselben Deckkraftwert auf:

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

Die Bereiche mit einer `weißen` Maske sind vollständig undurchsichtig. Die Bereiche mit einer `schwarzen` Maske sind vollständig transparent. Die Bereiche mit einer `rebeccapurple` Maske und die Bereiche mit einer `27.1234%` durchsichtigen weißen Maske sind beide `27.1234%` undurchsichtig.

{{EmbedLiveSample("luminance2", "", "250px")}}

Wenn Sie `mask-mode` auf `alpha` umschalten, spielt die Farbe des Verlaufs keine Rolle mehr. Das gesamte Element wird undurchsichtig sein, außer den Bereichen, die durch das halbtransparente Weiß bedeckt sind.

Die `mask-mode`-Eigenschaft ermöglicht es, Rasterbilder ohne Alphatransparenz, wie JPEGs, als Maskenbilder zu verwenden. Ein JPEG besteht aus undurchsichtigen Pixeln. Das Verwenden eines JPEGs als Maske mit seinem Standard-Alphamaskenmodus würde das gesamte Element verbergen. Der `luminance` Wert von `mask-mode`, hingegen, schneidet das Element dort ab, wo die Maske schwarz ist (keine Helligkeit hat), ist vollständig undurchsichtig, wo die Maske undurchsichtig weiß ist (100% Helligkeit), wobei andere Bereiche halbtransparent basierend auf der Helligkeit des maskierenden Bereichs sind.

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

Das Element wird dort ausgeschnitten und ist nicht sichtbar, wo der Himmel schwarz ist. Das Bild ist am sichtbarsten, wo der Mond am hellsten ist.

{{EmbedLiveSample("luminance3", "", "250px")}}

In diesem Fall, wenn Sie `mask-mode` auf `alpha` umschalten, wird das gesamte Element sichtbar, da die gesamte Maske undurchsichtig ist.

## SVG `<mask>` als Maskenquelle

Eine Maske kann jeder Typ von CSS-{{cssxref("image")}} oder ein `<mask-source>` sein. Ein `<mask-source>` ist ein {{cssxref("url_value", "&lt;url&gt;")}}-Verweis auf ein SVG-{{SVGElement("mask")}}-Element. Dies ist ähnlich wie das Ausschneiden mit der CSS-{{cssxref("clip-path")}}-Eigenschaft, in welchem Fall die "Maske" ein SVG-{{SVGElement("clipPath")}}-Element ist (bei `clip-path` ist die Leuchtkraft des Pfads jedoch irrelevant).

In diesem Beispiel definieren wir ein SVG mit einem `<mask>`-Element, einem identischen {{SVGElement("clipPath")}}-Element und einem identischen {{SVGElement("path")}}-Element, damit Sie die Masken- und Clip-Pfad-Quelle sehen können.

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

Da die Bildquelle ein `<mask>`-Element ist und die Maske weder die `mask-type`-CSS-Eigenschaft noch das `mask-type`-SVG-Attribut gesetzt hat, wird der `mask-type` standardmäßig auf `alpha` gesetzt, sodass der Standard von `mask-mode: match-source` auf `luminance` aufgelöst wird. Dies liegt daran, dass bei Maskierungsquellen, die SVG-{{svgelement("mask")}}-Elemente sind, der `mask-type` standardmäßig auf `luminance` gesetzt ist, es sei denn das {{svgattr("mask-type")}}-Attribut ist explizit auf `alpha` festgelegt.

{{EmbedLiveSample("svg1", "", "300px")}}

Da wir weder das `mask-type`-Attribut noch die CSS-Eigenschaft an unserer Maske gesetzt haben, löst sich die Standardeinstellung der `mask-mode`-Eigenschaft `match-source` auf `luminance` aus. Aktivieren Sie das Kontrollkästchen, um den `mask-mode`-Wert auf `alpha` zu setzen oder lassen Sie ihn auf `match-source` standardmäßig.

Dieses Beispiel demonstriert auch den Unterschied zwischen Maskieren und Clipping in CSS. Sie werden feststellen, dass Leuchtkraft und Alphatransparenz beim Maskieren wichtig sind, nicht jedoch beim Clipping. Maskieren kann verwendet werden, um die Deckkraft eines Elements zu steuern, während Clipping alles innerhalb des Clipping-Pfads zeigt und die Teile des Elements außerhalb des Clip-Pfads vollständig verbirgt. Ausgeschnittene Bereiche sind komplett unsichtbar, während maskierte Bereiche teilweise oder vollständig sichtbar sein können.

Wenn Sie nur Formen benötigen, reicht das Clipping möglicherweise aus. Aber wenn Sie Verblassen, variable Deckkraft oder sogar Kontrolle über Position und Größe (was wir in einem separaten Leitfaden besprechen werden) benötigen, ist Maskieren besser geeignet.

## Siehe auch

- [Einführung in CSS Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS Maskierung](/de/docs/Web/CSS/CSS_masking)-Modul
