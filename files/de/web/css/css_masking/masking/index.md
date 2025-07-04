---
title: Einführung in CSS-Masking
slug: Web/CSS/CSS_masking/Masking
l10n:
  sourceCommit: 288f873b40bdf6cdcd366dd09e1824da2bc83ebf
---

{{CSSRef}}

CSS-Masking ermöglicht es Ihnen, Teile eines Elements selektiv sichtbar oder unsichtbar zu machen, indem Sie ein oder mehrere Maskenbilder darauf anwenden. Diese Maskenbilder können Verläufe, Bilder oder SVG-Quellen sein. Im Gegensatz zum [CSS Clipping](/de/docs/Web/CSS/CSS_masking/Clipping), welches entweder Bereiche eines Elements vollständig anzeigt oder verbirgt, basierend auf der Form eines einzelnen Pfads, erlaubt Masking nuancierte Transparenz- und Misch-Effekte basierend auf der Alphatransparenz und optional der Luminanz der Maskenbilder.

Dieser Leitfaden führt in das Konzept des Maskings ein, erklärt die verschiedenen Typen von Maskenbildern und wie die Luminanz und Alphatransparenz der Maske die Teile des Elements beeinflusst, die maskiert (sichtbar gemacht) werden, im Vergleich zu den Teilen, die ausgeschnitten (oder verborgen) werden.

## Was ist Masking in CSS?

In CSS können Masken verwendet werden, um die sichtbaren und verborgenen Bereiche eines Elements zu definieren. Maskenebenen, die durch eine oder mehrere {{cssxref("mask-image")}}-Quellen definiert sind, bestimmen die sichtbaren Bereiche eines Elements und deren Deckkraft.

> [!NOTE]
> Mehrere CSS-Masking-Eigenschaften können über die Abkürzungseigenschaft {{cssxref("mask")}} festgelegt werden.

Mit `alpha`-Masken entspricht die Deckkraft des maskierten Elements der aufgetragenen Masken-Deckkraft. In CSS ist Masking das Gegenteil einer Maskerade-Maske, bei der das Gesicht versteckt wird, wo immer die Maske undurchsichtig ist. In CSS sind die Bereiche des Elements, in denen die Maske vollständig undurchsichtig ist, vollständig undurchsichtig und sichtbar. Wo immer die Maske vollständig transparent ist, wird das Element vollständig verborgen. Bereiche des Elements, die von teilweise undurchsichtigen Maskenbereichen maskiert werden, sind teilweise undurchsichtig, entsprechend der Deckkraft der Maske.

Bei Alpha-Masken ist die Farbe der Maske irrelevant. Nur die Deckkraft der Maske zählt. Bei [Luminanz-Masken](#alphatransparenz_versus_luminanz) wird die Helligkeit der Maskenfarben berücksichtigt, um die Deckkraft des maskierten Elements zu bestimmen. Je heller und undurchsichtiger die Farbe, desto undurchsichtiger ist das Element. Je dunkler und transparenter die Farbe, desto weniger undurchsichtig ist die Maske.

Masken können mit CSS-Verläufen, Rasterbildern (wie PNGs) und SVG {{svgelement("mask")}}-Elementen definiert werden. In diesem Leitfaden stellen wir die verschiedenen Maskenbildtypen vor, während wir [Deckkraft und Transparenz](#deckkraft_versus_transparenz), [Luminanz](#alphatransparenz_versus_luminanz) und [Masking im Vergleich zu CSS Clipping](#svg_mask_as_mask_source) diskutieren.

Jede Maskenebene besteht aus einem {{cssxref("mask-image")}}, das relativ zu einem Ursprungsfeld [positioniert](/de/docs/Web/CSS/mask-position) ist. Die Maskenbilder können [skaliert](/de/docs/Web/CSS/mask-size), [wiederholt](/de/docs/Web/CSS/mask-repeat) und [geschnitten](/de/docs/Web/CSS/mask-clip) werden. In Fällen, in denen mehrere Maskenbilder deklariert sind, kann die Art und Weise, wie die [Maskenebenen zusammengesetzt](/de/docs/Web/CSS/mask-composite) oder kombiniert werden, festgelegt werden. Diese werden im [Leitfaden zu Masking-Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties) besprochen.

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

Bei Alpha-Masken werden die sichtbaren Bereiche eines Elements durch die Alphatransparenz der darauf angewendeten Maske definiert. Wo immer die Maske vollständig undurchsichtig ist, ist das Element sichtbar. An jedem Pixel, an dem die Maske vollständig transparent ist, wird das Element ebenfalls vollständig verborgen. Bereiche des Elements, die von einem teilweise undurchsichtigen Abschnitt einer Maske maskiert werden, sind teilweise undurchsichtig, entsprechend der aufgetragenen Masken-Deckkraft.

### Mit Verläufen

Um dies zu demonstrieren, betrachten wir ein Beispiel mit einem {{cssxref("conic-gradient")}} als `mask-image`. CSS-Verläufe, einschließlich Kegelverläufe, können verwendet werden, um sanfte Übergänge zwischen sichtbaren und verborgenen Bereichen zu erstellen.

In diesem Fall ist die obere rechte Ecke der Maske vollständig undurchsichtig, das obere linke Viertel ist vollständig transparent, und die untere Hälfte hat einen sanften Übergang zwischen undurchsichtig und transparent.

```css live-sample___gradient1
.applied-mask {
  mask-image: conic-gradient(rgb(0 0 0 / 1) 90deg, rgb(0 0 0 / 0) 270deg);
}
.mask-source {
  background: conic-gradient(rgb(0 0 0 / 1) 90deg, rgb(0 0 0 / 0) 270deg);
}
```

Beachten Sie, wie das Element, auf das die Maske angewendet wird, eine vollständig sichtbare obere rechte Ecke hat, das obere linke Viertel ist verborgen, und die untere Hälfte geht sanft von sichtbar zu transparent über, was die Sichtbarkeit des angewendeten Maskenbildes widerspiegelt.

{{EmbedLiveSample("gradient1", "", "250px")}}

Bei Alpha-Masken spielt die Farbe der Maske keine Rolle, sondern nur die Transparenz. In diesem Beispiel haben wir einen gestreiften Verlauf mit vollständig undurchsichtigem Rot, halb undurchsichtigem Rot und vollständig transparenten Streifen.

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

Beachten Sie, wie die vollständig undurchsichtigen Maskenbereiche vollständig undurchsichtige Elementpixel anzeigen, teilweise transparente Maskenbereiche teilweise transparente Bereiche erzeugen und vollständig transparente Maskenbereiche die zugehörigen Bereiche vollständig ausblenden.

{{EmbedLiveSample("gradient2", "", "250px")}}

### Mit importierten Bildern

In den vorherigen beiden Beispielen wurden Verläufe als Masken und Hintergrundbilder verwendet. Das Maskenbild muss kein CSS-Bild sein. Es kann sich um ein externes Bild oder ein SVG handeln.

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

Beachten Sie, wie die transparenten Maskenbereiche das Element zuschneiden; die einzigen sichtbaren Teile des Elements sind die Bereiche, in denen die Maske undurchsichtig ist. Die Farbe der Maske selbst spielt keine Rolle.

{{EmbedLiveSample("image1", "", "250px")}}

## Alphatransparenz versus Luminanz

Der Standardwert der `mask-mode`-Eigenschaft – `match-source` – setzt den Modus entweder auf `alpha` oder `luminance`, abhängig vom Wert. Der `match-source`-Wert löst `alpha` für alle Maskenquellen außer SVG {{svgelement("mask")}}-Elementen auf. Wenn die Maskenquelle ein `<mask>`-Element ist, wird `match-source` auf den Wert der {{cssxref("mask-type")}}-Eigenschaft des `<mask>`-Elements aufgelöst, falls gesetzt. Andernfalls löst es sich auf den Wert des SVG-{{svgattr("mask-type")}}-Attributs des `<mask>`-Elements auf. Wenn auch dies nicht explizit gesetzt ist, wird `match-source` auf `luminance` aufgelöst.

Wenn `mask-mode` auf `luminance` aufgelöst wird oder wir es explizit auf `luminance` setzen, beeinflussen die Farben der Maske die Masken-Deckkraft. Im vorherigen Beispiel war `mask-mode` nicht gesetzt, daher wurde der Wert standardmäßig auf `match-source` gesetzt. Da das farbenfrohe Herzbild ein transparentes PNG ist, löst `match-source` auf `alpha` auf. Durch das explizite Setzen dieser Eigenschaft können wir den Modus steuern. In diesem Beispiel ändern wir den `mask-mode` zu `luminance`.

```css live-sample___luminance1
.applied-mask {
  mask-mode: luminance;
}
```

Wenn `mask-mode: luminance` auf dieselbe Maske wie im vorherigen Beispiel angewendet wird, sind die Bereiche des Elements, in denen die Maske am **hellsten** ist, undurchsichtiger, während **dunklere** Bereiche weniger undurchsichtig sind.

{{EmbedLiveSample("luminance1", "", "250px")}}

Die Deckkraft einer Luminanzmaske wird durch die `R`, `G`, `B` und `A` Werte einer {{Glossary("RGB", "RGB")}}-Farbe unter Verwendung der Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel ist die neueste {{cssxref("named-color")}} `rebeccapurple`, die `#663399` entspricht. Während man annehmen könnte, die Helligkeit könnte dem L der `hsl()`-Farbfunktion entsprechen, ist es nicht so einfach. Der Wert `#663399` entspricht `rgb(40% 20% 60% / 1)` und `hsl(270 50% 40% / 1)`, aber der Helligkeitswert ist `27.134%`, nicht `40%`.

`((0.2125 * 0.4) + (0.7154 * 0.2) + (0.0721 * 0.6)) * 1 = 0.27134`

Weiß hat einen Helligkeitswert von `100%`.

`((0.2125 * 1) + (0.7154 * 1) + (0.0721 * 1)) * 1 = 1`

Schwarz hat eine Helligkeit von `0%`.

`((0.2125 * 0) + (0.7154 * 0) + (0.0721 * 0)) * 1 = 0`

Wir demonstrieren dies, indem wir Weiß (`rgb(100% 100% 100%)`) mit einer Helligkeit von `100%` bei `27.234%` Deckkraft zu einem "rebeccapurple-, Weiß- und Schwarz-Verlauf", den wir dann verwenden werden, um unser Bild zu maskieren. Dieses Weiß löst sich auf denselben Deckkraftwert auf:

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

Die Bereiche mit einer `weißen` Maske sind vollständig undurchsichtig. Die Bereiche mit einer `schwarzen` Maske sind vollständig transparent. Die Bereiche mit einer `rebeccapurple`-Maske und die Bereiche mit einer `27.1234%`-deckenden weißen Maske sind beide `27.1234%` undurchsichtig.

{{EmbedLiveSample("luminance2", "", "250px")}}

Wenn Sie den `mask-mode` auf `alpha` umschalten, spielt die Farbe des Verlaufs keine Rolle mehr. Das gesamte Element wird undurchsichtig sein außer den durch das halb-opaque Weiß bedeckten Bereichen.

Die `mask-mode`-Eigenschaft ermöglicht die Verwendung von Rasterbildern ohne Alpha-Transparenz, wie JPEGs, als Maskenbilder. Ein JPEG besteht aus undurchsichtigen Pixeln. Ein JPEG als Maske mit seinem Standard-`alpha`-Maskenmodus würde das gesamte Element verbergen. Der `luminance`-Wert des `mask-mode`-Modus hingegen schneidet das Element dort aus, wo die Maske schwarz ist (keine Helligkeit hat), ist vollständig undurchsichtig, wo die Maske undurchsichtiges Weiß (100% Helligkeit) aufweist, während andere Bereiche halbtransparent sind, basierend auf der Helligkeit des Bereichs der Maske, der sie maskiert.

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

Das Element wird abgeschnitten und ist nicht sichtbar, wo der Himmel schwarz ist. Das Bild ist am deutlichsten sichtbar, wo der Mond am hellsten ist.

{{EmbedLiveSample("luminance3", "", "250px")}}

In diesem Fall, wenn Sie den `mask-mode` auf `alpha` umschalten, wird das gesamte Element sichtbar, da die gesamte Maske undurchsichtig ist.

## SVG `<mask>` als Maskenquelle

Eine Maske kann jede Art von CSS {{cssxref("image")}} oder eine `<mask-source>` sein. Ein `<mask-source>` ist ein {{cssxref("url_value", "&lt;url&gt;")}}-Verweis auf ein SVG-{{SVGElement("mask")}}-Element. Dies ist ähnlich wie das Clipping mit der CSS {{cssxref("clip-path")}}-Eigenschaft, bei der die "Maske" stattdessen ein SVG-{{SVGElement("clipPath")}}-Element ist (bei `clip-path` ist die Luminanz des Pfads nicht von Bedeutung).

In diesem Beispiel definieren wir ein SVG mit einem `<mask>`-Element, einem identischen {{SVGElement("clipPath")}}-Element und einem identischen {{SVGElement("path")}}-Element, damit Sie die Masken- und Clip-Path-Quelle sehen können.

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

Da die Bildquelle eine `<mask>` ist, und die Maske weder die `mask-type`-CSS-Eigenschaft noch das `mask-type`-SVG-Attribut gesetzt hat, setzt `mask-type` standardmäßig auf `alpha`, sodass der Standard von `mask-mode: match-source` auf `luminance` aufgelöst wird. Dies liegt daran, dass für Maskenquellen, die SVG {{svgelement("mask")}}-Elemente sind, `mask-type` standardmäßig auf `luminance` gesetzt ist, es sei denn, das {{svgattr("mask-type")}}-Attribut ist explizit auf `alpha` gesetzt.

{{EmbedLiveSample("svg1", "", "300px")}}

Da wir weder das `mask-type`-Attribut noch die CSS-Eigenschaft auf unserer Maske gesetzt haben, löst der Standardwert der `mask-mode`-Eigenschaft `match-source` auf `luminance` auf. Aktivieren Sie das Kontrollkästchen, um den `mask-mode`-Wert auf `alpha` zu setzen oder es auf `match-source` zu belassen.

Dieses Beispiel zeigte auch den Unterschied zwischen Masking und Clipping in CSS. Sie werden bemerken, dass Luminanz und Alphatransparenz für Masking relevant, aber nicht für Clipping sind. Masking kann verwendet werden, um die Deckkraft eines Elements zu steuern, während Clipping alles innerhalb des Clip-Pfads anzeigt und die Teile des Elements außerhalb des Clip-Pfads vollständig verbirgt. Abgeschnittene Bereiche sind völlig unsichtbar, während maskierte Bereiche teilweise oder vollständig sichtbar sein können.

Wenn Sie nur Formen benötigen, kann Clipping ausreichen. Aber wenn Sie Überblendungen, variable Deckkraft oder sogar Kontrolle über Position und Größe benötigen (was wir in einem separaten Leitfaden besprechen werden), ist Masking besser geeignet.

## Siehe auch

- [Einführung in CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [Einführung in CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
