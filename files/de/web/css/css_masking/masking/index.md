---
title: Einführung in CSS-Masking
slug: Web/CSS/CSS_masking/Masking
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

CSS-Masking ermöglicht es Ihnen, Teile eines Elements selektiv sichtbar oder unsichtbar zu machen, indem Sie ein oder mehrere Maskenbilder darauf anwenden. Diese Maskenbilder können Verläufe, Bilder oder SVG-Quellen sein. Anders als beim [CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping), das entweder vollständig Bereiche eines Elements basierend auf der Form eines einzelnen Pfades zeigt oder verbirgt, ermöglicht Masking subtile Transparenz- und Überblendungseffekte basierend auf der Alpha-Transparenz und, optional, der Luminanz der Maskenbilder.

Dieser Leitfaden führt in das Konzept des Maskings, die verschiedenen Maskenbildtypen und wie die Luminanz und Alpha-Transparenz der Maske die Bereiche des Elements, die maskiert (sichtbar gemacht) werden, im Gegensatz zu den Bereichen, die ausgeschnitten (oder verborgen) werden, beeinflusst.

## Was ist Masking in CSS?

In CSS können Masken verwendet werden, um sichtbare und versteckte Bereiche eines Elements zu definieren. Maskenschichten, definiert durch eine oder mehrere {{cssxref("mask-image")}}-Quellen, bestimmen, welche Bereiche eines Elements sichtbar sein sollen und mit welcher Transparenz.

> [!NOTE]
> Mehrere CSS-Masking-Eigenschaftswerte können mit der {{cssxref("mask")}}-Kurzschreibweise festgelegt werden.

Bei `alpha`-Masken entspricht die Opazität des maskierten Elements der Opazität der angewendeten Maske. Im CSS ist Masking das Gegenteil einer Faschingsmaske, bei der das Gesicht dort verborgen ist, wo die Maske undurchsichtig ist. Im CSS sind die Bereiche des Elements, in denen die Maske vollständig undurchsichtig ist, vollständig undurchsichtig und sichtbar. Wo immer die Maske vollständig transparent ist, ist das Element vollständig verborgen. Bereiche des Elements, die durch teilweise undurchsichtige Maskenbereiche maskiert sind, werden teilweise undurchsichtig und stimmen mit der Opazität der Maske überein.

Bei Alpha-Masken ist die Farbe der Maske irrelevant. Nur die Opazität der Maske ist von Bedeutung. Bei [Luminanzmasken](#alpha-transparenz_versus_luminanz) wird die Helligkeit der Maskenfarben bei der Bestimmung der Opazität des maskierten Elements berücksichtigt. Je heller und durchsichtiger die Farbe, desto undurchsichtiger ist das Element. Je dunkler und transparenter die Farbe, desto weniger undurchsichtig wird die Maske sein.

Masken können mit CSS-Verläufen, Rasterbildern (wie PNGs) und SVG-{{svgelement("mask")}}-Elementen definiert werden. In diesem Leitfaden stellen wir die verschiedenen Maskenbildtypen vor, während wir [Undurchsichtigkeit und Transparenz](#undurchsichtigkeit_im_vergleich_zu_transparenz), [Luminanz](#alpha-transparenz_versus_luminanz) und [Masking im Vergleich zu CSS-Clipping](#svg_mask_as_mask_source) diskutieren.

Jede Maskenschicht besteht aus einem {{cssxref("mask-image")}}, das relativ zu einem Ursprungsrahmen [positioniert](/de/docs/Web/CSS/mask-position) ist. Die Maskenbilder können [skaliert](/de/docs/Web/CSS/mask-size), [wiederholt](/de/docs/Web/CSS/mask-repeat) und [ausgeschnitten](/de/docs/Web/CSS/mask-clip) werden. In Fällen, in denen mehrere Maskenbilder deklariert sind, kann festgelegt werden, wie die [Maskenschichten zusammengefügt](/de/docs/Web/CSS/mask-composite) werden. Diese werden im [Leitfaden zu den Maskeneigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties) behandelt.

> [!NOTE]
> Alle Beispiele werden das folgende Bild als zugrunde liegendes Element verwenden, auf das Masken angewendet werden:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride-Flagge" />

## Undurchsichtigkeit im Vergleich zu Transparenz

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

Mit Alpha-Masken werden die sichtbaren Bereiche eines Elements durch die Alpha-Transparenz der darauf angewendeten Maske definiert. Wo immer die Maske vollständig undurchsichtig ist, wird das Element sichtbar sein. An jedem Pixel, wo die Maske vollständig transparent ist, wird das Element ebenfalls vollständig verborgen sein. Bereiche des Elements, die durch einen teilweise undurchsichtigen Abschnitt einer Maske maskiert sind, werden teilweise undurchsichtig und stimmen mit der Opazität der darauf angewendeten Maske überein.

### Mit Verläufen

Um dies zu demonstrieren, betrachten wir ein Beispiel mit einem {{cssxref("conic-gradient")}} als `mask-image`. CSS-Verläufe, einschließlich konischer Verläufe, können verwendet werden, um sanfte Übergänge zwischen sichtbaren und verborgenen Bereichen zu schaffen.

In diesem Fall ist die obere rechte Ecke der Maske vollständig undurchsichtig, das obere linke Viertel ist vollständig transparent, und die untere Hälfte hat einen sanften Übergang zwischen undurchsichtig und transparent.

```css live-sample___gradient1
.applied-mask {
  mask-image: conic-gradient(black 90deg, transparent 270deg);
}
.mask-source {
  background: conic-gradient(black 90deg, transparent 270deg);
}
```

Beachten Sie, wie das Element, auf dem die Maske angewendet wird, eine vollständig sichtbare obere rechte Ecke hat, das obere linke Viertel verborgen ist und die untere Hälfte sanft von sichtbar zu transparent übergeht, was die Sichtbarkeit des aufgetragenen Maskenbilds widerspiegelt.

{{EmbedLiveSample("gradient1", "", "250px")}}

Mit Alpha-Masken ist die Farbe der Maske unerheblich, nur die Transparenz. In diesem Beispiel haben wir einen gestreiften Verlauf mit vollständig undurchsichtigem Rot, halbtransparentem Rot und vollständig transparenten Streifen.

```css live-sample___gradient2
.applied-mask {
  mask-image: repeating-linear-gradient(
    to bottom right,
    red 0 20px,
    #f005 20px 40px,
    transparent 40px 60px
  );
}
.mask-source {
  background: repeating-linear-gradient(
    to bottom right,
    red 0 20px,
    #f005 20px 40px,
    transparent 40px 60px
  );
}
```

Beachten Sie, wie die vollständig undurchsichtigen Maskenbereiche vollständig undurchsichtige Elemente sichtbar machen, halbtransparente Maskenbereiche halbtransparente Bereiche schaffen und vollständig transparente Maskenbereiche die zugehörigen Bereiche vollständig verbergen.

{{EmbedLiveSample("gradient2", "", "250px")}}

### Mit importierten Bildern

Die vorherigen beiden Beispiele verwendeten Verläufe als Masken und Hintergrundbilder. Das Maskenbild muss kein CSS-Bild sein. Es kann ein externes Bild oder ein SVG sein.

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

## Alpha-Transparenz versus Luminanz

Der Standardwert der `mask-mode`-Eigenschaft — `match-source` — setzt den Modus entweder auf `alpha` oder `luminance`, je nach Wert. Der `match-source`-Wert wird für alle Maskenquellen außer SVG-{{svgelement("mask")}}-Elementen auf `alpha` aufgelöst. Wenn die Maskenquelle ein `<mask>`-Element ist, löst sich `match-source` auf den Wert der {{cssxref("mask-type")}}-Eigenschaft des `<mask>` auf, falls gesetzt. Andernfalls wird es auf den Wert des SVG-{{svgattr("mask-type")}}-Attributs auf dem `<mask>`-Element aufgelöst. Wenn dies ebenfalls nicht explizit gesetzt ist, wird `match-source` auf `luminance` aufgelöst.

Wenn `mask-mode` auf `luminance` aufgelöst wird, oder wir es explizit auf `luminance` setzen, beeinflussen die Farben der Maske die Maskenopazität. In der vorherigen Demo wurde der `mask-mode` nicht gesetzt, sodass der Wert standardmäßig auf `match-source` gesetzt war. Da das bunte Herzbild ein transparentes PNG ist, löst sich `match-source` auf `alpha` auf. Indem wir diese Eigenschaft explizit setzen, können wir den Modus kontrollieren. In dieser Demo ändern wir den `mask-mode` auf `luminance`.

```css live-sample___luminance1
.applied-mask {
  mask-mode: luminance;
}
```

Wenn man `mask-mode: luminance` auf dieselbe Maske wie im vorherigen Beispiel anwendet, sind die Bereiche des Elements, in denen die Maske am **hellsten** ist, undurchsichtiger, während **dunklere** Bereiche weniger undurchsichtig sind.

{{EmbedLiveSample("luminance1", "", "250px")}}

Die Opazität einer Luminanzmaske wird durch die `R`-, `G`-, `B`- und `A`-Werte eines {{Glossary("RGB", "RGB")}}-Farbwertes mit der Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel ist die neueste {{cssxref("named-color")}} `rebeccapurple`, was `#663399` entspricht. Während man annehmen könnte, dass die Helligkeit dem L der `hsl()`-Farbfunktion entspricht, ist es nicht so einfach. Der Wert `#663399` entspricht `rgb(40% 20% 60% / 1)` und `hsl(270 50% 40% / 1)`, aber der Helligkeitswert ist `27.134%`, nicht `40%`.

`((0.2125 * 0.4) + (0.7154 * 0.2) + (0.0721 * 0.6)) * 1 = 0.27134`

Weiß hat einen Helligkeitswert von `100%`.

`((0.2125 * 1) + (0.7154 * 1) + (0.0721 * 1)) * 1 = 1`

Schwarz hat eine Helligkeit von `0%`.

`((0.2125 * 0) + (0.7154 * 0) + (0.0721 * 0)) * 1 = 0`

Wir werden dies demonstrieren, indem wir Weiß (`rgb(100% 100% 100%)`) mit einer Helligkeit von `100%` bei `27.234%` Opazität zu einem linearen Verlauf aus `rebeccapurple`, `white` und `black` hinzufügen, den wir dann verwenden, um unser Bild zu maskieren. Dieses Weiß löst sich zum gleichen Opazitätswert:

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

Die Bereiche mit einer `weißen` Maske sind vollständig undurchsichtig. Die Bereiche mit einer `schwarzen` Maske sind vollständig transparent. Die Bereiche mit einer `rebeccapurple`-Maske und die Bereiche mit einer `27.1234%`-undurchsichtigen weißen Maske sind beide `27.1234%` undurchsichtig.

{{EmbedLiveSample("luminance2", "", "250px")}}

Wenn Sie den `mask-mode` auf `alpha` umschalten, spielt die Farbe des Verlaufs keine Rolle mehr. Das gesamte Element wird undurchsichtig sein, außer in den Bereichen, die von dem halb-undurchsichtigen Weiß bedeckt sind.

Die `mask-mode`-Eigenschaft ermöglicht es, Rasterbilder ohne Alpha-Transparenz, wie JPEGs, als Maskenbilder zu verwenden. Ein JPEG besteht aus undurchsichtigen Pixeln. Die Verwendung eines JPEGs als Maske mit seinem Standard-`alpha`-Maskenmodus würde das gesamte Element verbergen. Der `luminance`-Wert des `mask-mode` hingegen schneidet das Element dort ab, wo die Maske schwarz ist (keine Helligkeit hat), ist vollständig undurchsichtig, wo die Maske undurchsichtig weiß ist (100% Helligkeit), und andere Bereiche sind semitransparent basierend auf der Helligkeit des maskierenden Bereichs.

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

Das Element ist abgeschnitten und nicht sichtbar, wo der Himmel schwarz ist. Das Bild ist am sichtbarsten, wo der Mond am hellsten ist.

{{EmbedLiveSample("luminance3", "", "250px")}}

In diesem Fall, wenn Sie den `mask-mode` auf `alpha` umschalten, wird das gesamte Element sichtbar, da die gesamte Maske undurchsichtig ist.

## SVG `<mask>` als Maskenquelle

Eine Maske kann jede Art von CSS-{{cssxref("image")}} oder ein `<mask-source>` sein. Ein `<mask-source>` ist ein {{cssxref("url_value", "&lt;url&gt;")}}-Verweis auf ein SVG-{{SVGElement("mask")}}-Element. Dies ähnelt dem Clipping mit der CSS-{{cssxref("clip-path")}}-Eigenschaft, wobei die "Maske" ein SVG-{{SVGElement("clipPath")}}-Element ist (bei `clip-path` ist die Luminanz des Pfades unerheblich).

In diesem Beispiel definieren wir ein SVG mit einem `<mask>`-Element, einem identischen {{SVGElement("clipPath")}}-Element und einem identischen {{SVGElement("path")}}-Element, damit Sie die Masken- und Clipping-Pfadquelle sehen können.

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

Da die Bildquelle ein `<mask>` ist, und die Maske weder die `mask-type` CSS-Eigenschaft noch das `mask-type` SVG-Attribut gesetzt hat, wird der `mask-type` standardmäßig auf `alpha` gesetzt, sodass der Standard-`mask-mode: match-source` auf `luminance` aufgelöst wird. Dies ist, weil für Maskenquellen, die SVG-{{svgelement("mask")}}-Elemente sind, der `mask-type` standardmäßig auf `luminance` gesetzt ist, es sei denn, das {{svgattr("mask-type")}}-Attribut ist explizit auf `alpha` gesetzt.

{{EmbedLiveSample("svg1", "", "300px")}}

Da wir das `mask-type`-Attribut oder die CSS-Eigenschaft unserer Maske nicht gesetzt haben, löst der `mask-mode`-Standardwert `match-source` auf `luminance` auf. Aktivieren Sie das Kontrollkästchen, um den `mask-mode`-Wert auf `alpha` zu setzen oder ihn standardmäßig auf `match-source` zu belassen.

Dieses Beispiel zeigt auch den Unterschied zwischen Masking und Clipping in CSS. Sie werden feststellen, dass Luminanz und Alpha-Transparenz für das Masking relevant sind, nicht aber für das Clipping. Masking kann verwendet werden, um die Opazität eines Elements zu steuern, während Clipping alles innerhalb des Clipping-Pfades zeigt und die Teile des Elements außerhalb des Clipping-Pfades vollständig verbirgt. Ausgeschnittene Bereiche sind vollständig unsichtbar, während maskierte Bereiche teilweise oder vollständig sichtbar sein können.

Wenn Sie nur Formen benötigen, kann Clipping ausreichen. Wenn Sie jedoch Überblendungen, variable Opazität oder sogar die Kontrolle über Position und Größe benötigen (was wir in einem separaten Leitfaden besprechen), ist Masking besser geeignet.

## Siehe auch

- [Einführung in CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS-`mask`-Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklaration mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking)-Modul
