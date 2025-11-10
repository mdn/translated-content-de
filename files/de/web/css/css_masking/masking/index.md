---
title: Einführung in das CSS-Masking
slug: Web/CSS/CSS_masking/Masking
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

CSS-Masking ermöglicht es, Teile eines Elements selektiv zu zeigen oder zu verbergen, indem eine oder mehrere Maskenbilder darauf angewendet werden. Diese Maskenbilder können Verläufe, Bilder oder SVG-Quellen sein. Im Gegensatz zum [CSS-Clipping](/de/docs/Web/CSS/Guides/Masking/Clipping), das entweder vollständig Bereiche eines Elements auf Basis der Form eines einzelnen Pfades zeigt oder verbirgt, erlaubt Masking nuancierte Transparenz- und Blending-Effekte basierend auf der Alpha-Transparenz und optional auch der Luminanz der Maskenbilder.

Dieser Leitfaden führt in das Konzept des Masking, die verschiedenen Maskenbildtypen und wie die Luminanz und Alpha-Transparenz der Maske die Bereiche des Elements beeinflussen, die maskiert (sichtbar gemacht) versus geclippt (oder verborgen) werden.

## Was ist Masking in CSS?

In CSS können Masken verwendet werden, um Bereiche eines Elements zu definieren, die sichtbar sind, und andere Bereiche, die verborgen sind. Mask-Ebenen, definiert durch eine oder mehrere {{cssxref("mask-image")}}-Quellen, bestimmen die Bereiche eines Elements, die sichtbar sein sollten und in welcher Opazität.

> [!NOTE]
> Mehrere CSS-Maskeneigenschaftenwerte können mit der {{cssxref("mask")}}-Kurzschreibweise gesetzt werden.

Bei `alpha`-Masken entspricht die Opazität des maskierten Elements der Opazität der angewendeten Maske. In CSS ist Masking das Gegenteil einer Maskenball-Maske, wo das Gesicht dort verborgen ist, wo die Maske opak ist. In CSS sind die Bereiche des Elements, bei denen die Maske vollständig opak ist, vollständig opak und sichtbar. Wo auch immer die Maske vollständig transparent ist, wird das Element vollständig verborgen sein. Bereiche des Elements, die durch teilweise opake Maskenbereiche maskiert werden, sind teilweise opak und entsprechen der Opazität der Maske.

Bei Alpha-Masken ist die Farbe der Maske irrelevant. Nur die Opazität der Maske zählt. Bei [Luminanzmasken](#alpha-transparenz_versus_luminanz) wird die Helligkeit der Maskenfarben berücksichtigt, um die Opazität des maskierten Elements zu bestimmen. Je heller und undurchsichtiger die Farbe ist, desto undurchsichtiger ist das Element. Je dunkler und transparenter die Farbe ist, desto weniger opak wird die Maske sein.

Masken können mit CSS-Verläufen, Rasterbildern (wie PNGs) und SVG-{{svgelement("mask")}}-Elementen definiert werden. In diesem Leitfaden stellen wir die verschiedenen Maskenbildtypen vor, während wir [Undurchsichtigkeit und Transparenz](#undurchsichtigkeit_versus_transparenz), [Luminanz](#alpha-transparenz_versus_luminanz) und [Masking versus CSS-Clipping](#svg_mask_as_mask_source) besprechen.

Jede Maskenschicht besteht aus einem {{cssxref("mask-image")}}, das relativ zu einem Ursprungsfeld [positioniert](/de/docs/Web/CSS/Reference/Properties/mask-position) ist. Die Maskenbilder können [skaliert](/de/docs/Web/CSS/Reference/Properties/mask-size), [wiederholt](/de/docs/Web/CSS/Reference/Properties/mask-repeat) und [geclippt](/de/docs/Web/CSS/Reference/Properties/mask-clip) werden. In Fällen, in denen mehrere Maskenbilder deklariert sind, kann die Art, wie die [Maskenschichten zusammengesetzt](/de/docs/Web/CSS/Reference/Properties/mask-composite) oder kombiniert werden, festgelegt werden. Diese Themen werden im [Leitfaden zu Maskeneigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties) behandelt.

> [!NOTE]
> Alle Beispiele verwenden das folgende Bild als darunterliegendes Element, auf das Masken angewendet werden:
>
> <img src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg" alt="Pride flag" />

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

Bei Alpha-Masken werden die sichtbaren Bereiche eines Elements durch die Alpha-Transparenz der auf es angewendeten Maske definiert. Wo auch immer die Maske vollständig opak ist, wird das Element sichtbar sein. An jedem Pixel, an dem die Maske vollständig transparent ist, wird das Element ebenfalls vollständig verborgen sein. Bereiche des Elements, die durch einen teilweise opaken Abschnitt einer Maske maskiert werden, sind teilweise opak und entsprechen der Opazität der angewendeten Maske.

### Mit Verläufen

Um dies zu demonstrieren, schauen wir uns ein Beispiel an, das einen {{cssxref("conic-gradient")}} als `mask-image` verwendet. CSS-Verläufe, einschließlich konischer Verläufe, können verwendet werden, um sanfte Übergänge zwischen sichtbaren und verborgenen Bereichen zu schaffen.

In diesem Fall ist die obere rechte Ecke der Maske vollständig opak, das obere linke Viertel vollständig transparent, und die untere Hälfte hat einen sanften Übergang zwischen opak und transparent.

```css live-sample___gradient1
.applied-mask {
  mask-image: conic-gradient(black 90deg, transparent 270deg);
}
.mask-source {
  background: conic-gradient(black 90deg, transparent 270deg);
}
```

Beachten Sie, wie das Element, auf das die Maske angewendet wird, eine vollständig sichtbare obere rechte Ecke hat, das obere linke Viertel verborgen ist, und die untere Hälfte sanft von sichtbar zu transparent übergeht, was die Sichtbarkeit des angewendeten Maskenbildes widerspiegelt.

{{EmbedLiveSample("gradient1", "", "250px")}}

Bei Alpha-Masken ist die Farbe der Maske irrelevant, nur die Transparenz. In diesem Beispiel haben wir einen gestreiften Verlauf mit vollständig opaken roten, halb-opaken roten und vollständig transparenten Streifen.

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

Beachten Sie, wie die vollständig opaken Maskenbereiche vollständig opake Elementpixel zeigen, halbtransparente Maskenbereiche halbtransparente Bereiche erzeugen und vollständig transparente Maskenbereiche die zugehörigen Bereiche vollständig verbergen.

{{EmbedLiveSample("gradient2", "", "250px")}}

### Mit importierten Bildern

Die vorherigen beiden Beispiele verwendeten Verläufe als Masken und Hintergrundbilder. Das Maskenbild muss kein CSS-Bild sein. Es kann ein externes Bild oder eine SVG sein.

In diesem Fall verwenden wir ein externes PNG. Das Bild enthält ein buntes Herz mit einem transparenten Hintergrund.

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

Beachten Sie, wie die transparenten Maskenbereiche das Element zuschneiden; die einzigen sichtbaren Teile des Elements sind die Bereiche, in denen die Maske opak ist. Die Farbe der Maske an sich ist irrelevant.

{{EmbedLiveSample("image1", "", "250px")}}

## Alpha-Transparenz versus Luminanz

Der Standardwert der `mask-mode`-Eigenschaft — `match-source` — setzt den Modus auf entweder `alpha` oder `luminance`, abhängig vom Wert. Der Wert `match-source` wird bei allen Maskenquellen, außer SVG-{{svgelement("mask")}}-Elementen, auf `alpha` aufgelöst. Wenn die Maskenquelle ein `<mask>`-Element ist, löst sich `match-source` auf den Wert der {{cssxref("mask-type")}}-Eigenschaft des `<mask>` auf, falls gesetzt. Andernfalls löst es sich auf den Wert des {{svgattr("mask-type")}}-Attributs, das am `<mask>`-Element gesetzt ist, auf. Wenn dies ebenfalls nicht explizit gesetzt ist, wird `match-source` auf `luminance` aufgelöst.

Wenn `mask-mode` auf `luminance` auflöst, oder wir es explizit auf `luminance` setzen, beeinflussen die Farben der Maske die Maskenopazität. Im vorherigen Demo wurde der `mask-mode` nicht gesetzt, sodass der Wert auf `match-source` standardmäßig eingestellt war. Da das bunte Herzbild ein transparentes PNG ist, löst sich `match-source` auf `alpha` auf. Indem wir diese Eigenschaft explizit setzen, können wir den Modus steuern. In diesem Demo ändern wir den `mask-mode` auf `luminance`.

```css live-sample___luminance1
.applied-mask {
  mask-mode: luminance;
}
```

Wenn `mask-mode: luminance` auf die gleiche Maske wie im vorherigen Beispiel angewendet wird, sind die Bereiche des Elements, in denen die Maske am **hellsten** ist, opaker, während **dunklere** Bereiche weniger opak sind.

{{EmbedLiveSample("luminance1", "", "250px")}}

Die Opazität einer Luminanzmaske wird durch die `R`, `G`, `B` und `A` Werte einer {{Glossary("RGB", "RGB")}}-Farbe mithilfe der Formel bestimmt:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Zum Beispiel ist die neueste {{cssxref("named-color")}} `rebeccapurple`, welches `#663399` ist. Man könnte annehmen, dass die Helligkeit dem L der `hsl()`-Farb-Funktion entspricht, aber das ist nicht so einfach. Der Wert `#663399` entspricht `rgb(40% 20% 60% / 1)` und `hsl(270 50% 40% / 1)`, aber der Helligkeitswert ist `27.134%`, nicht `40%`.

`((0.2125 * 0.4) + (0.7154 * 0.2) + (0.0721 * 0.6)) * 1 = 0.27134`

Weiß hat einen Helligkeitswert von `100%`.

`((0.2125 * 1) + (0.7154 * 1) + (0.0721 * 1)) * 1 = 1`

Schwarz hat eine Helligkeit von `0%`.

`((0.2125 * 0) + (0.7154 * 0) + (0.0721 * 0)) * 1 = 0`

Wir demonstrieren dies, indem wir Weiß (`rgb(100% 100% 100%)`) mit einer Helligkeit von `100%` bei `27.234%` Opazität zu einem `rebeccapurple`, `weiß` und `schwarz`-Linearen Verlauf hinzufügen, den wir dann zum Maskieren unseres Bildes verwenden. Dieses Weiß löst sich in denselben Opazitätswert auf:

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

Die Bereiche mit einer `weißen` Maske sind vollständig opak. Die Bereiche mit einer `schwarzen` Maske sind vollständig transparent. Die Bereiche mit einer `rebeccapurple`-Maske und die Bereiche mit einer `27.1234%` opaken weißen Maske sind beide `27.1234%` opak.

{{EmbedLiveSample("luminance2", "", "250px")}}

Wenn Sie den `mask-mode` auf `alpha` umschalten, spielt die Farbe des Verlaufs keine Rolle mehr. Das gesamte Element wird opak sein, außer die Bereiche, die von dem halb-opaken Weiß bedeckt sind.

Die Eigenschaft `mask-mode` ermöglicht die Verwendung von Rasterbildern ohne Alphatransparenz, wie JPEGs, als Maskenbilder. Ein JPEG besteht aus opaken Pixeln. Ein JPEG als Maske mit seinem Standard-`alpha`-Maskenmodus würde das gesamte Element verbergen. Der `luminance` Wert des `mask-mode` hingegen clippt das Element dort, wo die Maske schwarz ist (keine Helligkeit hat), ist vollständig opak, wo die Maske opakes Weiß ist (100% Helligkeit), mit anderen Bereichen halbtransparent basierend auf der Helligkeit des maskierenden Maskenbereichs.

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

Das Element ist geclippt und nicht sichtbar, wo der Himmel schwarz ist. Das Bild ist am sichtbarsten, wo der Mond am hellsten ist.

{{EmbedLiveSample("luminance3", "", "250px")}}

In diesem Fall, wenn Sie den `mask-mode` auf `alpha` umschalten, wird das gesamte Element sichtbar sein, da die gesamte Maske opak ist.

## SVG `<mask>` als Maskenquelle

Eine Maske kann jede Art von CSS {{cssxref("image")}} oder ein `<mask-source>` sein. Ein `<mask-source>` ist ein {{cssxref("url_value", "&lt;url&gt;")}}-Verweis auf ein SVG {{SVGElement("mask")}}-Element. Dies ist ähnlich wie das Clipping mit der CSS-{{cssxref("clip-path")}}-Eigenschaft, bei der die "Maske" stattdessen ein SVG-{{SVGElement("clipPath")}}-Element ist (bei `clip-path` spielt die Luminanz des Pfades keine Rolle).

In diesem Beispiel definieren wir ein SVG mit einem `<mask>`-Element, einem identischen {{SVGElement("clipPath")}}-Element und einem identischen {{SVGElement("path")}}-Element, damit Sie die Masken- und Clip-Pfad-Quellen sehen können.

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

Da die Bildquelle ein `<mask>` ist, und die Maske weder das `mask-type`-CSS-Property noch das `mask-type` SVG-Attribut gesetzt hat, wird das `mask-type` standardmäßig auf `alpha` gesetzt, sodass das Standard-`mask-mode: match-source` auf `luminance` auflöst. Das liegt daran, dass für Maskenquellen, die SVG-{{svgelement("mask")}}-Elemente sind, das `mask-type` standardmäßig auf `luminance` eingestellt ist, es sei denn, das {{svgattr("mask-type")}}-Attribut wird explizit auf `alpha` gesetzt.

{{EmbedLiveSample("svg1", "", "300px")}}

Da wir weder das `mask-type`-Attribut noch das `mask-type`-CSS-Property auf unserer Maske gesetzt haben, löst sich das `mask-mode`-Property-Default von `match-source` auf `luminance` auf. Aktivieren Sie die Checkbox, um den `mask-mode`-Wert auf `alpha` zu setzen oder auf `match-source` zu belassen.

Dieses Beispiel zeigte auch den Unterschied zwischen Masking und Clipping in CSS. Sie werden feststellen, dass Luminanz und Alpha-Transparenz für das Masking relevant sind, aber nicht für das Clipping. Masking kann verwendet werden, um die Opazität eines Elements zu steuern, während Clipping alles innerhalb des Clipping-Pfads zeigt und die Teile des Elements außerhalb des Clippfads vollständig verbirgt. Geclippte Bereiche sind völlig unsichtbar, während maskierte Bereiche teilweise oder vollständig sichtbar sein können.

Wenn Sie nur Formen benötigen, könnte Clipping ausreichen. Aber wenn Sie Fading, variable Opazität oder sogar Kontrolle über Position und Größe benötigen (was wir in einem separaten Leitfaden besprechen werden), ist Masking besser geeignet.

## Siehe auch

- [Einführung in das CSS-Clipping](/de/docs/Web/CSS/Guides/Masking/Clipping)
- [CSS-`mask`-Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/Guides/Masking) Modul
