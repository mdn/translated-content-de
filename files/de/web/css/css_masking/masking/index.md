---
title: Einführung in CSS-Masking
slug: Web/CSS/CSS_masking/Masking
l10n:
  sourceCommit: 3df2b4649b0f297b02244f9570298c40b62a0ee0
---

{{CSSRef}}

CSS-Masking ermöglicht es Ihnen, Teile eines Elements selektiv sichtbar oder unsichtbar zu machen, indem Sie ein oder mehrere Maskenbilder darauf anwenden. Diese Maskenbilder können aus Verläufen, Bildern oder SVG-Quellen bestehen. Anders als beim [Ausschneiden mit CSS](/de/docs/Web/CSS/CSS_masking/Clipping), bei dem Bereiche eines Elements vollständig angezeigt oder ausgeblendet werden, je nach Form eines einzelnen Pfads, ermöglicht Masking nuancierte Transparenz- und Mischungseffekte basierend auf der Alpha-Transparenz und optional der Luminanz der Maskenbilder.

Dieser Leitfaden führt in das Konzept des Maskings ein, beschreibt die verschiedenen Arten von Maskenbildern und wie die Luminanz und Alpha-Transparenz der Maske die Bereiche des Elements beeinflussen, die maskiert (sichtbar gemacht) werden, im Gegensatz zu den Bereichen, die ausgeschnitten (oder verborgen) werden.

## Was ist Masking in CSS?

In CSS können Masken verwendet werden, um Bereiche eines Elements zu definieren, die sichtbar sind, und andere Bereiche, die verborgen sind. Maskenschichten, definiert durch eine oder mehrere {{cssxref("mask-image")}}-Quellen, bestimmen die Bereiche eines Elements, die sichtbar sein sollten und mit welcher Deckkraft.

> [!NOTE]
> Mehrere CSS-Masking-Eigenschaften können mit der {{cssxref("mask")}}-Kurzform gesetzt werden.

Bei `alpha`-Masken entspricht die Deckkraft des maskierten Elements der Deckkraft der angewendeten Maske. In CSS ist das Masking das Gegenteil einer venezianischen Maske, bei der das Gesicht überall dort verborgen ist, wo die Maske undurchsichtig ist. In CSS werden die Bereiche des Elements, in denen die Maske vollständig undurchsichtig ist, vollständig undurchsichtig und sichtbar sein. Wo die Maske vollständig transparent ist, wird das Element vollständig verborgen sein. Bereiche des Elements, die von teilweise undurchsichtigen Maskenbereichen bedeckt sind, werden teilweise undurchsichtig sein, entsprechend der Opazität der Maske.

Bei Alpha-Masken ist die Farbe der Maske irrelevant. Nur die Deckkraft der Maske zählt. Bei [Luminanzmasken](#alpha-transparenz_versus_luminanz) wird die Helligkeit der Maskenfarben berücksichtigt, wenn die Deckkraft des maskierten Elements bestimmt wird. Je heller und undurchsichtiger die Farbe, desto undurchsichtiger ist das Element. Je dunkler und transparenter die Farbe, desto weniger undurchsichtig wird die Maske sein.

Masken können mit CSS-Verläufen, Rasterbildern (wie PNGs) und SVG-{{svgelement("mask")}}-Elementen definiert werden. In diesem Leitfaden stellen wir die verschiedenen Maskenbildtypen vor und diskutieren [Undurchsichtigkeit und Transparenz](#undurchsichtigkeit_versus_transparenz), [Luminanz](#alpha-transparenz_versus_luminanz) und [Masking im Vergleich zum Ausschneiden mit CSS](#svg_mask_as_mask_source).

Jede Maskenschicht besteht aus einem {{cssxref("mask-image")}}, das relativ zu einer Ursprungsbox [positioniert](/de/docs/Web/CSS/mask-position) wird. Die Maskenbilder können [skaliert](/de/docs/Web/CSS/mask-size), [wiederholt](/de/docs/Web/CSS/mask-repeat) und [zugeschnitten](/de/docs/Web/CSS/mask-clip) werden. In Fällen, in denen mehrere Maskenbilder deklariert werden, kann festgelegt werden, wie die [Maskenschichten zusammengesetzt](/de/docs/Web/CSS/mask-composite) oder kombiniert werden. Diese werden im [Leitfaden zu Masking-Eigenschaften](/de/docs/Web/CSS/CSS_masking/CSS_mask_properties) behandelt.

> [!NOTE]
> Alle Beispiele verwenden das folgende Bild als zugrunde liegendes Element, auf das Masken angewendet werden:
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

Bei Alpha-Masken werden die sichtbaren Bereiche eines Elements durch die Alpha-Transparenz der darauf angewendeten Maske definiert. Wo immer die Maske vollständig undurchsichtig ist, wird das Element sichtbar sein. An jedem Pixel, an dem die Maske vollständig transparent ist, wird das Element ebenfalls vollständig verborgen sein. Bereiche des Elements, die von einem teilweise undurchsichtigen Abschnitt einer Maske bedeckt sind, werden teilweise undurchsichtig sein, entsprechend der Opazität der darauf angewendeten Maske.

Um dies zu veranschaulichen, sehen wir uns ein Beispiel mit einem {{cssxref("conic-gradient")}} als `mask-image` an. CSS-Verläufe, einschließlich konischer Verläufe, können verwendet werden, um sanfte Übergänge zwischen sichtbaren und verborgenen Bereichen zu erstellen.

In diesem Fall ist die obere rechte Ecke der Maske vollständig undurchsichtig, das obere linke Quadrant vollständig transparent, und die untere Hälfte hat einen sanften Übergang zwischen undurchsichtig und transparent.

```css live-sample___gradient1
.applied-mask {
  mask-image: conic-gradient(rgb(0 0 0 / 1) 90deg, rgba(0 0 0 / 0) 270deg);
}
.mask-source {
  background: conic-gradient(rgb(0 0 0 / 1) 90deg, rgba(0 0 0 / 0) 270deg);
}
```

Beachten Sie, wie das Element, auf das die Maske angewendet wird, eine vollständig sichtbare obere rechte Ecke hat, das obere linke Viertel ist verborgen, und die untere Hälfte geht sanft von sichtbar zu transparent über, was die Sichtbarkeit des angewendeten Maskenbilds widerspiegelt.

{{EmbedLiveSample("gradient1", "", "250px")}}

Bei Alpha-Masken spielt die Farbe der Maske keine Rolle, nur die Transparenz. In diesem Beispiel haben wir einen gestreiften Verlauf mit vollständig undurchsichtigen roten, halbtedurchsichtigen roten und vollständig transparenten Streifen.

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

Beachten Sie, wie die vollständig undurchsichtigen Maskenbereiche vollständig undurchsichtige Bereiche des Elements enthüllen, halbtransparente Maskenbereiche halbtransparente Bereiche schaffen, und vollständig transparente Maskenbereiche die zugehörigen Bereiche vollständig verbergen.

{{EmbedLiveSample("gradient2", "", "250px")}}

Die beiden vorherigen Beispiele verwendeten Verläufe als Masken und Hintergrundbilder. Das Maskenbild muss kein CSS-Bild sein. Es kann ein externes Bild oder ein SVG sein.

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

Beachten Sie, wie die transparenten Maskenbereiche das Element ausschneiden; die einzigen sichtbaren Teile des Elements sind die Bereiche, in denen die Maske undurchsichtig ist. Die Farbe der Maske selbst ist unerheblich.

{{EmbedLiveSample("image1", "", "250px")}}

## Alpha-Transparenz versus Luminanz

Der Standardwert der `mask-mode`-Eigenschaft — `match-source` — legt den Modus entweder auf `alpha` oder `luminance` fest, je nach Wert. Der Wert `match-source` löst sich zu `alpha` für alle Maskenquellen außer SVG-{{svgelement("mask")}}-Elemente auf. Wenn die Maskenquelle ein `<mask>`-Element ist, löst sich `match-source` zum Wert der {{cssxref("mask-type")}}-Eigenschaft des `<mask>` auf, falls gesetzt. Andernfalls löst sie sich zum Wert des SVG-{{svgattr("mask-type")}}-Attributs, das auf dem `<mask>`-Element gesetzt ist. Wenn das ebenfalls nicht explizit gesetzt ist, wird `match-source` zu `luminance` aufgelöst.

Wenn `mask-mode` zu `luminance` aufgelöst wird, oder wir es explizit auf `luminance` setzen, beeinflussen die Farben der Maske die Maskenopazität. Im vorherigen Demo wurde der `mask-mode` nicht gesetzt, sodass der Wert standardmäßig auf `match-source` gesetzt wurde. Da das bunte Herzbild ein transparentes PNG ist, wird `match-source` zu `alpha` aufgelöst. Durch das explizite Setzen dieser Eigenschaft können wir den Modus steuern. In diesem Demo ändern wir den `mask-mode` zu `luminance`.

```css live-sample___luminance1
.applied-mask {
  mask-mode: luminance;
}
```

Wenn `mask-mode: luminance` auf dieselbe Maske wie im vorherigen Beispiel angewendet wird, sind die Bereiche des Elements, in denen die Maske **am hellsten** ist, mehr undurchsichtig, während **dunklere** Bereiche weniger undurchsichtig sind.

{{EmbedLiveSample("luminance1", "", "250px")}}

Die Opazität einer Luminanzmaske wird durch die `R`, `G`, `B` und `A`-Werte einer {{Glossary("RGB", "RGB")}}-Farbe unter Verwendung der folgenden Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel ist die neueste {{cssxref("named-color")}} `rebeccapurple`, was `#663399` entspricht. Während man annehmen könnte, dass die Helligkeit dem L-Wert der `hsl()`-Funktion entspricht, ist es nicht so einfach. Der Wert `#663399` entspricht `rgb(40% 20% 60% / 1)` und `hsl(270 50% 40% / 1)`, aber der Helligkeitswert ist `27.134%`, nicht `40%`.

`((0.2125 * 0.4) + (0.7154 * 0.2) + (0.0721 * 0.6)) * 1 = 0.27134`

Weiß hat einen Helligkeitswert von `100%`.

`((0.2125 * 1) + (0.7154 * 1) + (0.0721 * 1)) * 1 = 1`

Schwarz hat eine Helligkeit von `0%`.

`((0.2125 * 0) + (0.7154 * 0) + (0.0721 * 0)) * 1 = 0`

Wir werden dies demonstrieren, indem wir Weiß (`rgb(100% 100% 100%)`) mit einer Helligkeit von `100%` bei `27.234%` Opazität zu einem Verlauf mit `rebeccapurple`, Weiß und Schwarz hinzufügen, den wir dann verwenden werden, um unser Bild zu maskieren. Dieses Weiß löst sich zu demselben Opazitätswert auf:

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

Die Bereiche mit einer `weißen` Maske sind vollständig undurchsichtig. Die Bereiche mit einer `schwarzen` Maske sind vollständig transparent. Die Bereiche mit einer `rebeccapurple` Maske und die Bereiche mit einer `27.1234%` undurchsichtigen weißen Maske sind beide `27.1234%` undurchsichtig.

{{EmbedLiveSample("luminance2", "", "250px")}}

Wenn Sie den `mask-mode` zu `alpha` umschalten, spielt die Farbe des Verlaufs keine Rolle mehr. Das gesamte Element wird undurchsichtig sein, außer in den Bereichen, die von dem halbtransparenten Weiß bedeckt sind.

Die `mask-mode`-Eigenschaft ermöglicht es, Rasterbilder ohne Alpha-Transparenz, wie JPEGs, als Maskenbilder zu verwenden. Ein JPEG besteht aus undurchsichtigen Pixeln. Ein JPEG als Maske mit seinem standardmäßigen `alpha`-Maskenmodus würde das gesamte Element verbergen. Der `luminance`-Wert von `mask-mode` schneidet andererseits das Element dort, wo die Maske schwarz ist (keine Helligkeit hat), ist vollständig undurchsichtig dort, wo die Maske ein undurchsichtiges Weiß (100% Helligkeit) ist, wobei andere Bereiche halbtransparent sind, basierend auf der Helligkeit des Bereichs der Maske, der es maskiert.

In diesem Beispiel haben wir einen weißen Mond vor einem schwarzen Nachthimmel.

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

In diesem Fall wird das gesamte Element sichtbar, wenn Sie den `mask-mode` auf `alpha` umschalten, da die gesamte Maske undurchsichtig ist.

## SVG `<mask>` als Maskenquelle

Eine Maske kann jeder Typ eines CSS-{{cssxref("image")}} oder ein `<mask-source>` sein. Ein `<mask-source>` ist ein {{cssxref("url_value", "&lt;url&gt;")}}-Verweis auf ein SVG-{{SVGElement("mask")}}-Element. Dies ist ähnlich wie das Ausschneiden mit der CSS-{{cssxref("clip-path")}}-Eigenschaft, in diesem Fall ist die „Maske“ stattdessen ein SVG-{{SVGElement("clipPath")}}-Element (bei `clip-path` spielt die Luminanz des Pfads keine Rolle).

In diesem Beispiel definieren wir ein SVG mit einem `<mask>`-Element, einem identischen {{SVGElement("clipPath")}}-Element und einem identischen {{SVGElement("path")}}-Element, damit Sie die Maske und den Clip-Pfad sehen können.

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

Weil die Bildquelle ein `<mask>` ist und die Maske weder die CSS-Eigenschaft `mask-type` noch das SVG-Attribut `mask-type` gesetzt hat, ist der Standardwert von `mask-type` `alpha`, sodass der Standard von `mask-mode: match-source` sich zu `luminance` auflöst. Dies liegt daran, dass für Maskenquellen, die SVG-{{svgelement("mask")}}-Elemente sind, der Standardwert von `mask-type` `luminance` ist, sofern das {{svgattr("mask-type")}}-Attribut nicht explizit auf `alpha` gesetzt ist.

{{EmbedLiveSample("svg1", "", "300px")}}

Da wir das `mask-type`-Attribut oder die CSS-Eigenschaft auf unserer Maske nicht gesetzt haben, löst sich der Standardwert der `mask-mode`-Eigenschaft `match-source` zu `luminance` auf. Schalten Sie das Kontrollkästchen um, um den `mask-mode`-Wert auf `alpha` zu setzen oder es auf `match-source` standardisieren zu lassen.

Dieses Beispiel zeigte auch den Unterschied zwischen Masking und Clipping in CSS. Sie werden feststellen, dass Luminanz und Alpha-Transparenz für das Masking, nicht aber für das Clipping relevant sind. Masking kann verwendet werden, um die Deckkraft eines Elements zu steuern, während Clipping alles innerhalb des Clipping-Pfads zeigt und die Teile des Elements außerhalb des Clip-Pfads vollständig verbirgt. Abgeschnittene Bereiche sind vollständig unsichtbar, während maskierte Bereiche teilweise oder vollständig sichtbar sein können.

Wenn Sie nur Formen benötigen, könnte Clipping ausreichen. Aber wenn Sie Überblendungen, variable Opazität oder sogar Kontrolle über Position und Größe benötigen (was wir in einem separaten Leitfaden besprechen werden), ist Masking besser geeignet.

## Siehe auch

- [Einführung in das Ausschneiden mit CSS](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
