---
title: Einführung in CSS-Maskierung
slug: Web/CSS/CSS_masking/Masking
l10n:
  sourceCommit: f50b3b0a53fe62b6a04234583c7630c89f7e85b6
---

{{CSSRef}}

Mit CSS-Maskierung können Sie Teile eines Elements selektiv sichtbar machen oder verbergen, indem Sie ein oder mehrere Maskenbilder auf das Element anwenden. Diese Maskenbilder können Verläufe, Bilder oder SVG-Quellen sein. Anders als beim [CSS-Zuschnitt](/de/docs/Web/CSS/CSS_masking/Clipping), der Bereiche eines Elements vollständig zeigt oder verbirgt, basierend auf der Form eines einzelnen Pfades, erlaubt die Maskierung nuancierte Transparenz- und Mischungseffekte basierend auf der Alphatransparenz und optional der Leuchtdichte der Maskenbilder.

Dieser Leitfaden führt in das Konzept der Maskierung ein, die verschiedenen Typen von Maskenbildern und wie die Leuchtdichte und Alphatransparenz der Maske die Teile des Elements beeinflussen, die maskiert (sichtbar gemacht) werden, im Gegensatz zu den Bereichen, die beschnitten (oder verborgen) werden.

## Was ist Maskierung in CSS?

In CSS können Masken verwendet werden, um Bereiche eines Elements zu definieren, die sichtbar sind, und andere Bereiche, die verborgen sind. Maskenschichten, definiert durch eine oder mehrere {{cssxref("mask-image")}}-Quellen, bestimmen die Bereiche eines Elements, die sichtbar sein sollen und mit welcher Deckkraft.

> [!NOTE]
> Mehrere Werte für CSS-Maskierungseigenschaften können mithilfe der Abkürzungseigenschaft {{cssxref("mask")}} festgelegt werden.

Bei `Alpha`-Masken entspricht die Deckkraft des maskierten Elements der Deckkraft der angewendeten Maske. In CSS ist die Maskierung das Gegenteil einer Maskerade-Maske, bei der das Gesicht verborgen ist, wo immer die Maske undurchsichtig ist. In CSS sind die Bereiche des Elements, wo seine Maske vollständig undurchsichtig ist, vollständig undurchsichtig und sichtbar. Wo immer die Maske vollständig transparent ist, wird das Element vollständig verborgen. Bereiche des Elements, die von teilweise undurchsichtigen Maskenbereichen maskiert werden, sind teilweise undurchsichtig, entsprechend der Deckkraft der Maske.

Bei Alpha-Masken ist die Farbe der Maske irrelevant. Nur die Deckkraft der Maske zählt. Bei [Leuchtdichte-Masken](#alphatransparenz_versus_leuchtdichte) wird die Helligkeit der Maskenfarben berücksichtigt, um die Deckkraft des maskierten Elements zu bestimmen. Je heller und undurchsichtiger die Farbe, desto undurchsichtiger ist das Element. Je dunkler und transparenter die Farbe, desto weniger undurchsichtig wird die Maske sein.

Masken können mit CSS-Verläufen, Rasterbildern (wie PNGs) und SVG-{{svgelement("mask")}}-Elementen definiert werden. In diesem Leitfaden führen wir die verschiedenen Typen von Maskenbildern ein, während wir [Deckkraft und Transparenz](#deckkraft_versus_transparenz), [Leuchtdichte](#alphatransparenz_versus_leuchtdichte) und [Maskierung versus CSS-Zuschnitt](#svg_mask_as_mask_source) diskutieren.

Jede Maskenschicht besteht aus einem {{cssxref("mask-image")}}, das relativ zu einer Ursprungsbox [positioniert](/de/docs/Web/CSS/mask-position) wird. Die Maskenbilder können [skaliert](/de/docs/Web/CSS/mask-size), [wiederholt](/de/docs/Web/CSS/mask-repeat) und [beschnitten](/de/docs/Web/CSS/mask-clip) werden. In Fällen, in denen mehrere Maskenbilder deklariert werden, kann festgelegt werden, wie die [Maskenschichten kombiniert](/de/docs/Web/CSS/mask-composite) werden. Diese werden im [Maskeneigenschaften-Leitfaden](/de/docs/Web/CSS/CSS_masking/CSS_mask_properties) behandelt.

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

Mit Alpha-Masken werden die sichtbaren Bereiche eines Elements durch die Alphatransparenz der darauf angewendeten Maske definiert. Wo immer die Maske vollständig undurchsichtig ist, ist das Element sichtbar. Bei jedem Pixel, an dem die Maske vollständig transparent ist, wird das Element ebenfalls vollständig verborgen. Bereiche des Elements, die von einem teilweise undurchsichtigen Abschnitt einer Maske maskiert werden, sind teilweise undurchsichtig, entsprechend der Deckkraft der darauf angewendeten Maske.

Um dies zu demonstrieren, betrachten wir ein Beispiel, in dem ein {{cssxref("conic-gradient")}} als `mask-image` verwendet wird. CSS-Verläufe, einschließlich konischer Verläufe, können verwendet werden, um sanfte Übergänge zwischen sichtbaren und verborgenen Bereichen zu erstellen.

In diesem Fall ist die obere rechte Ecke der Maske vollständig undurchsichtig, das obere linke Viertel ist vollständig transparent und die untere Hälfte hat einen sanften Übergang zwischen undurchsichtig und transparent.

```css live-sample___gradient1
.applied-mask {
  mask-image: conic-gradient(rgb(0 0 0 / 1) 90deg, rgb(0 0 0 / 0) 270deg);
}
.mask-source {
  background: conic-gradient(rgb(0 0 0 / 1) 90deg, rgb(0 0 0 / 0) 270deg);
}
```

Beachten Sie, wie das Element, auf das die Maske angewendet wird, eine vollständig sichtbare obere rechte Ecke hat, das obere linke Viertel verborgen ist, und die untere Hälfte sanft von sichtbar zu transparent übergeht, was die Sichtbarkeit des angewendeten Maskenbildes widerspiegelt.

{{EmbedLiveSample("gradient1", "", "250px")}}

Bei Alpha-Masken ist die Farbe der Maske unerheblich, nur die Transparenz zählt. In diesem Beispiel haben wir einen gestreiften Verlauf mit vollständig undurchsichtigen roten, halbtransparenten roten und vollständig transparenten Streifen.

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

Beachten Sie, wie die vollständig undurchsichtigen Maskenbereiche vollständig undurchsichtige Bildelement-Pixel freilegen, halbtransparente Maskenbereiche halbtransparente Bereiche erzeugen und vollständig transparente Maskenbereiche die zugehörigen Bereiche vollständig verbergen.

{{EmbedLiveSample("gradient2", "", "250px")}}

Die vorherigen beiden Beispiele verwendeten Verläufe als Masken und Hintergrundbilder. Das Maskenbild muss kein CSS-Bild sein. Es kann ein externes Bild oder ein SVG sein.

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

Beachten Sie, wie die transparenten Maskenbereiche das Element zuschneiden; die einzigen sichtbaren Teile des Elements sind die Bereiche, in denen die Maske undurchsichtig ist. Die Farbe der Maske selbst spielt keine Rolle.

{{EmbedLiveSample("image1", "", "250px")}}

## Alphatransparenz versus Leuchtdichte

Der Standardwert der `mask-mode`-Eigenschaft — `match-source` — setzt den Modus auf entweder `alpha` oder `luminance`, abhängig vom Wert. Der `match-source`-Wert löst sich in `alpha` für alle Maskenquellen außer SVG-{{svgelement("mask")}}-Elementen auf. Wenn die Maskenquelle ein `<mask>`-Element ist, löst sich `match-source` in den Wert der {{cssxref("mask-type")}}-Eigenschaft des `<mask>`-Elementes auf, falls festgelegt. Andernfalls löst es sich in den Wert des SVG-{{svgattr("mask-type")}}-Attributs, das auf dem `<mask>`-Element gesetzt ist, auf. Wenn auch dies nicht explizit gesetzt ist, löst sich `match-source` in `luminance` auf.

Wenn `mask-mode` sich in `luminance` auflöst oder wir es explizit auf `luminance` setzen, beeinflussen die Farben der Maske die Masken-Deckkraft. Im vorhergegangenen Beispiel war `mask-mode` nicht gesetzt, also wurde der Wert auf `match-source` standardmäßig gesetzt. Da das bunte Herzbild ein transparentes PNG ist, löst sich `match-source` in `alpha` auf. Indem wir diese Eigenschaft explizit setzen, können wir den Modus kontrollieren. In diesem Beispiel ändern wir `mask-mode` in `luminance`.

```css live-sample___luminance1
.applied-mask {
  mask-mode: luminance;
}
```

Bei Anwendung von `mask-mode: luminance` auf dieselbe Maske wie im vorherigen Beispiel sind die Bereiche des Elements, in denen die Maske am **hellsten** ist, mehr undurchsichtig, während **dunklere** Bereiche weniger undurchsichtig sind.

{{EmbedLiveSample("luminance1", "", "250px")}}

Die Deckkraft einer Leuchtdichte-Maske wird durch die Werte `R`, `G`, `B` und `A` einer {{Glossary("RGB", "RGB")}}-Farbe unter Verwendung der Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Beispielsweise ist die neueste {{cssxref("named-color")}} `rebeccapurple`, was `#663399` entspricht. Man könnte annehmen, dass die Helligkeit dem L der `hsl()`-Funktion entspricht, aber so einfach ist es nicht. Der Wert `#663399` entspricht `rgb(40% 20% 60% / 1)` und `hsl(270 50% 40% / 1)`, aber der Helligkeitswert ist `27.134%`, nicht `40%`.

`((0.2125 * 0.4) + (0.7154 * 0.2) + (0.0721 * 0.6)) * 1 = 0.27134`

Weiß hat einen Helligkeitswert von `100%`.

`((0.2125 * 1) + (0.7154 * 1) + (0.0721 * 1)) * 1 = 1`

Schwarz hat eine Helligkeit von `0%`.

`((0.2125 * 0) + (0.7154 * 0) + (0.0721 * 0)) * 1 = 0`

Wir demonstrieren dies, indem wir Weiß (`rgb(100% 100% 100%)`) mit einer Helligkeit von `100%` bei `27.234%` Deckkraft zu einem `rebeccapurple`, `weiß` und `schwarz` linearen Verlauf hinzufügen, den wir dann verwenden, um unser Bild zu maskieren. Dieses Weiß löst sich in denselben Deckkraftwert auf:

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

Die Bereiche mit einer `weiß`-Maske sind vollständig undurchsichtig. Die Bereiche mit einer `schwarz`-Maske sind vollständig transparent. Die Bereiche mit einer `rebeccapurple`-Maske und die Bereiche mit einer `27.1234%`-transparenten weißen Maske sind beide `27.1234%` undurchsichtig.

{{EmbedLiveSample("luminance2", "", "250px")}}

Wenn Sie den `mask-mode` zu `alpha` umschalten, spielt die Farbe des Verlaufs keine Rolle mehr. Das gesamte Element wird undurchsichtig sein, außer die Bereiche, die von dem halbtransparenten Weiß bedeckt sind.

Die `mask-mode`-Eigenschaft ermöglicht es, Rasterbilder ohne Alphatransparenz, wie JPEGs, als Maskenbilder zu verwenden. Ein JPEG besteht aus undurchsichtigen Pixeln. Die Verwendung eines JPEGs als Maske mit ihrem Standardwert `alpha` im Maskenmodus würde das gesamte Element verbergen. Der `luminance`-Wert von `mask-mode` hingegen schneidet das Element dort ab, wo die Maske schwarz ist (keine Helligkeit), ist vollständig undurchsichtig, wo die Maske weiß und deckend ist (100% Helligkeit), und andere Bereiche sind halbtransparent basierend auf der Helligkeit des Bereichs der Maske, die es maskiert.

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

In diesem Fall, wenn Sie `mask-mode` auf `alpha` umschalten, wird das gesamte Element sichtbar sein, da die gesamte Maske undurchsichtig ist.

## SVG `<mask>` als Maskenquelle

Eine Maske kann jede Art von CSS {{cssxref("image")}} oder eine `<mask-source>` sein. Eine `<mask-source>` ist eine {{cssxref("url_value", "&lt;url&gt;")}}-Referenz auf ein SVG-{{SVGElement("mask")}}-Element. Dies ist ähnlich wie beim Zuschneiden mit der CSS {{cssxref("clip-path")}}-Eigenschaft, wobei die "Maske" stattdessen ein SVG-{{SVGElement("clipPath")}}-Element ist (bei `clip-path` ist die Leuchtdichte des Pfades unerheblich).

In diesem Beispiel definieren wir ein SVG mit einem `<mask>`-Element, ein identisches {{SVGElement("clipPath")}}-Element und ein identisches {{SVGElement("path")}}-Element, sodass Sie die Masken- und Clip-Pfad-Quellen sehen können.

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

Da die Bildquelle eine `<mask>` ist und die Maske weder die CSS-Eigenschaft `mask-type` noch das SVG-Attribut `mask-type` gesetzt hat, ist der Standard für den `mask-type` `luminance`, also löst sich der Standard von `mask-mode: match-source` in `luminance` auf. Dies ist, weil für Maskenquellen, die SVG-{{svgelement("mask")}}-Elemente sind, der `mask-type` standardmäßig `luminance` ist, es sei denn, das {{svgattr("mask-type")}}-Attribut wird explizit auf `alpha` gesetzt.

{{EmbedLiveSample("svg1", "", "300px")}}

Da wir weder das `mask-type`-Attribut noch die CSS-Eigenschaft für unsere Maske gesetzt haben, löst sich der Standardwert der `mask-mode`-Eigenschaft von `match-source` in `luminance` auf. Aktivieren Sie das Kontrollkästchen, um den Wert von `mask-mode` auf `alpha` zu setzen oder den Standard `match-source` zuzulassen.

Dieses Beispiel demonstrierte auch den Unterschied zwischen Maskierung und Zuschneiden in CSS. Sie werden feststellen, dass Leuchtdichte und Alphatransparenz für die Maskierung relevant sind, aber nicht für das Zuschneiden. Mit dem Maskieren kann die Deckkraft eines Elements gesteuert werden, während das Zuschneiden alles innerhalb des Zuschnittspfades zeigt und die Teile des Elements außerhalb des Zuschnittspfads vollständig verbirgt. Geschnittene Bereiche sind völlig unsichtbar, während maskierte Bereiche teilweise oder vollständig sichtbar sein können.

Wenn Sie nur Formen benötigen, reicht das Zuschneiden möglicherweise aus. Aber wenn Sie ein Ausblenden, variable Deckkraft oder sogar die Kontrolle über Position und Größe benötigen (die wir in einem separaten Leitfaden besprechen werden), ist die Maskierung besser geeignet.

## Siehe auch

- [Einführung in CSS-Zuschnitt](/de/docs/Web/CSS/CSS_masking/Clipping)
- Modul [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking)
