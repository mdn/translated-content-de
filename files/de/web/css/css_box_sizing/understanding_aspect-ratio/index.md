---
title: Verstehen und Festlegen von Seitenverhältnissen
slug: Web/CSS/CSS_box_sizing/Understanding_aspect-ratio
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{CSSRef}}

Jedes Element, das auf der Seite gerendert wird, hat eine Höhe und eine Breite und damit ein {{Glossary("aspect_ratio", "Seitenverhältnis")}}, welches das Verhältnis zwischen Breite und Höhe beschreibt. Die natürlichen Dimensionen eines Medienelements, das sind seine Größe ohne angewendete Größenänderungen, Skalierungen, Zooms oder Ränder, werden als natürliche oder {{Glossary("intrinsic_size", "intrinsische Größe")}} bezeichnet. Die intrinsische Größe eines Elements wird durch das Element selbst bestimmt, nicht durch Formatierungen wie [box sizing](/de/docs/Web/CSS/CSS_box_sizing) oder das Setzen von Rand-, Rand- oder Polsterbreiten.

Beim Entwickeln von Websites möchte man oft die Breite eines Elements als Prozentsatz der Ansichtsfenster- oder Elternelementgröße festlegen und die Höhe proportional ändern, um ein bestimmtes Seitenverhältnis je nach Größe des Ansichtsfensters beizubehalten. Für ersetzte Elemente wie Bilder und Videos ist die Beibehaltung eines bestimmten Seitenverhältnisses nicht nur notwendig für die Erstellung von {{Glossary("responsive_web_design", "responsivem Webdesign")}}, sondern auch ein wesentlicher Bestandteil für eine gute Benutzererfahrung. Das Festlegen des Seitenverhältnisses eines Assets verhindert Ladeunterbrechungen, die eintreten können, wenn Medien nachträglich geladen werden und der Platz für das Asset nicht reserviert wurde.

Mit CSS können Sie die Größe von ersetzten und nicht ersetzten Elementen basierend auf ihrem Seitenverhältnis anpassen. In diesem Leitfaden lernen wir die `aspect-ratio`-Eigenschaft kennen, sprechen über Seitenverhältnisse für ersetzte und nicht ersetzte Elemente und untersuchen einige häufige Anwendungsfälle für Seitenverhältnisse.

## Wie die `aspect-ratio`-Eigenschaft funktioniert

Der CSS-Wert {{cssxref("aspect-ratio")}} definiert das bevorzugte Breiten-Höhen-Verhältnis eines Elements. Der Wert ist entweder ein {{cssxref("ratio")}}, das Schlüsselwort `auto`, oder eine kombinationsgetrennte Kombination aus beiden.

Das `<ratio>` ist das Verhältnis der Breite zur Höhe, in dieser Reihenfolge. Es wird durch zwei positive {{cssxref("number")}}-Werte dargestellt, die durch einen Schrägstrich (`/`) oder eine einzelne `<number>` getrennt sind. Wenn eine einzelne Zahl verwendet wird, entspricht dies dem Schreiben des Verhältnisses als `<number> / 1`, was ebenso die Breite durch die Höhe bedeutet.

Die folgenden Werte sind alle gleichwertig:

```css
aspect-ratio: 3 / 6;
aspect-ratio: 1 / 2;
aspect-ratio: 0.5 / 1;
aspect-ratio: 0.5;
```

Auch die folgenden Werte sind alle gleichwertig:

```css
aspect-ratio: 9/6;
aspect-ratio: 3/2;
aspect-ratio: 1.5;
```

```html hidden live-sample___number
<div>0.5</div>
<div>1.5</div>
```

```css hidden live-sample___number
div {
  height: 121px;
  aspect-ratio: 0.5;
  background-color: pink;
  line-height: 100px;
  text-align: center;
  float: left;
  background-image: repeating-linear-gradient(
      to right,
      black 0px 1px,
      transparent 1px 20px
    ),
    repeating-linear-gradient(black 0px 1px, transparent 1px 20px);
  background-size:
    181px 5px,
    5px 121px;
  background-repeat: no-repeat;
}

div + div {
  aspect-ratio: 1.5;
  background-color: lightgreen;
  margin-left: 10px;
}
```

{{EmbedLiveSample("number", "100", "130")}}

Die Wirkung des `auto`-Schlüsselworts hängt davon ab, ob das Element, auf das es angewandt wird, ein ersetztes Element ist oder nicht. Für ersetzte Elemente mit einem intrinsischen Seitenverhältnis bedeutet `auto`, dass das intrinsische Seitenverhältnis verwendet werden soll. In allen anderen Fällen bedeutet der Wert `auto`, dass die Box kein bevorzugtes Seitenverhältnis hat. In beiden Fällen ist dies das Standardverhalten, als ob keine `aspect-ratio`-Eigenschaft angewendet worden wäre.

Wenn der Wert sowohl das `auto`-Schlüsselwort als auch einen `<ratio>`-Wert enthält, wie `aspect-ratio: auto 2 / 3;` oder `aspect-ratio: 0.75 auto;`, wird der `auto`-Wert auf ersetzte Elemente mit einem natürlichen Seitenverhältnis angewendet, und das angegebene Verhältnis von `width / height` oder `<number>` wird als bevorzugtes Seitenverhältnis verwendet.

Sie haben bemerkt, dass das Wort "bevorzugt" in den obigen Definitionen vorkommt. Der `aspect-ratio`-Wert wird nicht immer angewendet, wenn er gesetzt wird. Die `aspect-ratio`-Eigenschaft legt ein "bevorzugtes" Seitenverhältnis fest und hat daher nur dann einen Effekt, wenn mindestens eine Größe der Box automatisch ist.

Wenn sowohl die Höhe als auch die Breite oder die Inline- und Blockgrößen explizit festgelegt sind, wird der Wert der `aspect-ratio`-Eigenschaft ignoriert. In diesem Fall darf keine Dimension automatisch größenveränderbar sein - die bevorzugten Größen sind explizit gesetzt - daher hat die `aspect-ratio`-Eigenschaft keinen Effekt. Wenn Sie sowohl die Inline- als auch die Blockdimensionen angeben, haben diese Vorrang.

Bei ersetzten Elementen, wenn Sie keinen expliziten Wert (außer `auto`) für eine der Dimensionen festlegen, werden beide auf ihre intrinsische Größe zurückgesetzt (ein `aspect-ratio`-Wert wird nicht angewendet). Die `aspect-ratio` gilt für nicht ersetzte Elemente, die keine explizite Dimension haben, da nicht ersetzte Elemente entweder {{Glossary("Intrinsic_Size", "intrinsisch")}} oder {{Glossary("Intrinsic_Size#extrinsic_sizing", "extrinsisch")}} dimensioniert sind und ihre Größe aus ihrem Inhalt, Container, [Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model) -Eigenschaften usw. erhalten.

Wenn ein Element auf die Seite gerendert wird, wird das Objekt in seiner natürlichen Größe gerendert, wenn kein CSS angewendet und keine HTML-Markierungsattribute enthalten sind.

## Anpassen von Seitenverhältnissen ersetzter Elemente

Ersatzobjekte wie {{htmlelement("img")}} und {{htmlelement("video")}} werden durch Medien ersetzt, die feste Dimensionen haben und somit ein intrinsisches Seitenverhältnis. Betrachten Sie ein Rasterbild, wie ein JPEG, PNG oder GIF. Wenn Sie ein Bild auf einer Seite ohne festgelegte Höhe oder Breite platzieren, entweder über {{htmlelement("img")}}-Attribute oder mit CSS, wird es in seiner intrinsischen Größe angezeigt.

<!-- ignorieren Sie diese Bilder vorübergehend. Testen der Vorschau -->

```html hidden live-sample___original
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg?image=good"
  alt="220 pixel square pride flag" />
```

{{EmbedLiveSample("original", "100", "230")}}

Dies ist ein `220px` quadratisches Bild ohne angewendetes CSS; es wird in seiner intrinsischen oder Standardgröße angezeigt.

Wenn ersetzte Inhalte automatisch dimensioniert werden oder Sie nur für eine Dimension eine Größe angeben, wie z.B. einen Wert für die Breite, wird der Browser die andere Dimension, in diesem Fall die Höhe, automatisch anpassen, während das ursprüngliche Seitenverhältnis des Mediums beibehalten wird.

In diesem Beispiel ist nur die {{cssxref("width")}} für das Bild festgelegt, sodass der Benutzeragent das Seitenverhältnis beibehält. Dasselbe Bild wird dreimal in unterschiedlichen Breiten angezeigt: `55px`, `110px` und in seiner natürlichen Größe von `220px` über den Wert [`width: auto`](/de/docs/Web/CSS/width).

```html hidden live-sample___image
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

```css hidden live-sample___image
img {
  width: 55px;
  margin-right: 5px;
}

img + img {
  width: 110px;
}

img + img + img {
  width: auto;
}
```

{{EmbedLiveSample("image", "100", "230")}}

Erst wenn Sie Größen für beide Dimensionen festlegen, besteht das Risiko der Verzerrung des ersetzten Elements. Wenn Sie beispielsweise ein Bild auf `width: 100vw;` und `height: 100vh;` setzen, entsteht ein variables Seitenverhältnis; das Bild erscheint entweder gestreckt oder gestaucht, wenn das Seitenverhältnis des Ansichtsfensters von dem natürlichen Seitenverhältnis des Bildes abweicht.

In diesem Beispiel wird dasselbe Bild dreimal wiederholt, explizit mit demselben {{cssxref("height")}}-Wert (`110px`), jedoch unterschiedlichen {{cssxref("width")}}-Werten (`55px`, `110px` und `220px`), dimensioniert.

```html hidden live-sample___imagebad
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

```css hidden live-sample___imagebad
img {
  width: 55px;
  height: 110px;
}

img + img {
  width: 110px;
}

img + img + img {
  width: 220px;
}
```

{{EmbedLiveSample("imagebad", "100", "120")}}

Wir haben die Bilder absichtlich verzerrt, indem wir sowohl eine `height` als auch eine `width` festgelegt haben: Wir haben das erste gestaucht und das dritte gestreckt.

Wir hätten diesen gleichen verzerrten Effekt mit der CSS-Eigenschaft {{cssxref("aspect-ratio")}} erzeugen können, indem wir eine einzelne Dimension (nicht beide oder keine) festlegen und einen anderen Wert als `1` (oder `1 / 1`) verwenden. Wahrscheinlich möchten Sie dies nicht tun, aber es ist gut zu wissen, dass es möglich ist.

```html hidden live-sample___stretch
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

```css live-sample___stretch
img {
  height: 100vh;
  aspect-ratio: 3;
}
```

{{EmbedLiveSample("stretch", "100", "230")}}

Wir haben eine einzige Dimension deklariert; `100vh` ist die volle Höhe des Beispiel-{{htmlelement("iframe")}}-Ansichtsfensters. Damit das `aspect-ratio` auf ersetzte Elemente angewendet werden kann, muss nur eine Dimension gesetzt sein. Sowohl das Festlegen von beiden als auch keines funktioniert nicht.

### Ersetzen von Elementen innerhalb ihrer Container

Um ein ersetztes Element an die Dimensionen seines Containers anzupassen, während das intrinsische Seitenverhältnis beibehalten wird, setzen Sie den Wert der Eigenschaft {{cssxref("object-fit")}} auf `cover` oder `contain`. Dadurch wird das ersetzte Element in der Größe angepasst und entweder beschnitten, um den Container „zu bedecken“ oder in kleinerer Größe vollständig „enthalten“ innerhalb dessen angezeigt.

In diesem Beispiel wird das quadratische Bild in einem Raster von drei Elementen platziert, wobei jedes ein Seitenverhältnis von `5 / 2` hat.

Zunächst erstellen wir einen Container mit drei Elementen, die jeweils ein Bild enthalten:

```html live-sample___imagegrid
<div class="grid">
  <div>
    <img
      src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
      alt="Pride flag" />
  </div>
  <div>
    <img
      class="cover"
      src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
      alt="Pride flag" />
  </div>
  <div>
    <img
      class="contain"
      src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
      alt="Pride flag" />
  </div>
</div>
```

Als Nächstes bezeichnen wir den Container als Raster, bei dem jedes Element ein Seitenverhältnis von `2.5` (`5/2`) mit einer Mindestbreite von `150px` hat. Daher beträgt die Mindesthöhe `60px`. Die endgültige Breite und Höhe wird jedoch durch die Breite des Beispiels iframes bestimmt, welche von der Größe Ihres Ansichtsfensters abhängt:

```css live-sample___imagegrid
.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  font-size: 0; /* to minimize whitespace */
}

div div {
  aspect-ratio: 5 / 2;
  background-color: #ccc;
}
```

Wir dimensionieren dann die Bilder und legen die Eigenschaft `object-fit` auf die letzten zwei Bilder:

```css live-sample___imagegrid
img {
  height: 100%;
  width: 100%;
}

.cover {
  object-fit: cover;
}

.contain {
  object-fit: contain;
}
```

{{EmbedLiveSample("imagegrid", "100", "100")}}

Nur das erste Bild ist verzerrt (gestreckt). Wir hätten den Wert `fill` von `object-fit` verwenden können, um denselben Effekt zu erzielen. Das `cover`-Bild spannt die gesamte Breite des Containers, zentriert vertikal und beschnitten, um im Container zu passen. Der `contain`-Wert stellt sicher, dass das Bild innerhalb des Containers enthalten ist, horizontal zentriert und verkleinert, um zu passen.

## Definieren von Seitenverhältnissen für nicht ersetzte Elemente

Während das Seitenverhältnis eines ersetzten Elements standardmäßig beibehalten wird, ändert das Anpassen der intrinsischen Größe eines nicht ersetzten Elements in der Regel sein Seitenverhältnis. Zum Beispiel kann derselbe Inhalt auf einem Breitbildschirm oder in einem breiten Elternelementcontainer als drei Zeilen erscheinen, aber als acht Zeilen auf einem schmalen Bildschirm oder Container.

In diesem Beispiel wird dasselbe Zitat in `200px` und `600px` breiten Containern angezeigt und ein Quadrat wird mit einer Höhe festgelegt, die seiner `200px`-Breite entspricht:

```html hidden live-sample___alder
<p>Narrow:</p>
<blockquote>
  <q
    >When you stop living your life based on what others think of you real life
    begins. At that moment, you will finally see the door of self acceptance
    opened.</q
  >
  - Shannon L. Alder
</blockquote>
<p>Wide:</p>
<blockquote>
  <q
    >When you stop living your life based on what others think of you real life
    begins. At that moment, you will finally see the door of self acceptance
    opened.</q
  >
  - Shannon L. Alder
</blockquote>
<p>Aspect ratio with overflow:</p>
<blockquote>
  <q
    >When you stop living your life based on what others think of you real life
    begins. At that moment, you will finally see the door of self acceptance
    opened.</q
  >
  - Shannon L. Alder
</blockquote>
<p>
  <label
    ><input type="checkbox" checked /> Toggle between
    <code>overflow</code> values <code>auto</code> and
    <code>visible</code></label
  >
</p>
```

Um das Problem mit dem Festlegen des Seitenverhältnisses eines nicht ersetzten Elements über Größenmaße zu verdeutlichen, wechseln Sie die `overflow`-Eigenschaft zwischen `auto` und `visible`.

```css hidden live-sample___alder
blockquote {
  border: 3px dotted #ccc;
  padding: 0 3px;
  margin: 20px 0;
  font-size: 1.25rem;
  line-height: 1.5;
}

body:has(:checked) blockquote {
  overflow: auto;
}

:checked + code,
:not(:checked) + code + code {
  outline: 1px solid green;
}

p:nth-last-of-type(n + 2) {
  font-weight: bold;
}
```

```css live-sample___alder
blockquote {
  width: 200px;
}

blockquote:nth-of-type(2) {
  width: 600px;
}

blockquote:nth-of-type(3) {
  height: 200px;
}
```

{{EmbedLiveSample("alder", "100", "800")}}

Auch wenn es möglich ist, ein Seitenverhältnis bei nicht ersetzten Elementen festzulegen, indem Dimensionen gesetzt und der überlaufende Inhalt versteckt wird, bietet die CSS-Eigenschaft {{cssxref("aspect-ratio")}} explizite Unterstützung für Seitenverhältnisse. Dies bedeutet, dass ein spezifisches Seitenverhältnis festgelegt werden kann, auch wenn die Inhalte oder Bildschirmgrößen nicht bekannt sind.

Im nächsten Beispiel erstellen wir quadratische Boxen, unabhängig von der Breite des Textes, indem wir `aspect ratio: 1` auf {{htmlelement("blockquote")}}, einem nicht ersetzten Element, setzen:

```html hidden live-sample___words
<p>Short text:</p>
<blockquote>Breath.</blockquote>
<p>Longer text:</p>
<blockquote>You're perfect just as you are.</blockquote>
```

```css live-sample___words
blockquote {
  inline-size: max-content;
  aspect-ratio: 1;
}
```

```css hidden live-sample___words
blockquote {
  border: 1px solid #ccc;
  padding: 1px;
  margin: 20px 0;
  background-color: #ededed;
}
```

{{EmbedLiveSample("words", "100", "400")}}

Jede Box hat eine Dimension definiert: die {{cssxref("inline-size")}}, die die Breite in horizontalen Sprachen ist, wird auf {{cssxref("max-content")}} gesetzt, was die Größe so festlegt, dass sie so breit ist, wie es nötig ist, um den Inhalt ohne Umbruch zu fassen. Die zweite Dimension, in diesem Fall die {{cssxref("block-size")}} oder {{cssxref("height")}}, wird auf dieselbe Länge wie die erste Dimension gesetzt. Dies wird mit der Eigenschaft {{cssxref("aspect-ratio")}} erreicht. Wir haben das gewünschte Breiten-Höhen-Verhältnis der Elementbox auf `1` festgelegt, was dasselbe ist wie `1 / 1`, ein Quadrat. Dies legt die Blockrichtung fest, um mit der Breite des Elements übereinzustimmen, ohne die Eigenschaften {{cssxref("height")}} oder {{cssxref("block-size")}} zu verwenden.

In diesen Beispielen wurde eine Größe explizit auf dem Element selbst festgelegt. Bei der Arbeit mit nicht ersetzten Elementen spielt das Seitenverhältnis eine Rolle, wenn keine Maßgröße explizit festgelegt ist.

### Erstellen eines Kreises basierend auf der Containergröße

Die Inline-Größe von nicht ersetzten Blockelementen ist die Größe ihrer Container-[Inhaltsbox](/de/docs/Web/CSS/box-edge#content-box). Da sie standardmäßig eine Größe haben, müssen sie keine explizite Größe haben, damit die `aspect-ratio`-Eigenschaft funktioniert.

In diesem Beispiel haben wir einen Container {{htmlelement("div")}}, der `200px` breit ist und `5px` Polsterung auf jeder Seite enthält. Daher beträgt die Inline-Größe der Inhaltsbox `190px`. Ohne eine Höhe oder Breite auf dem verschachtelten {{htmlelement("p")}}-Element zu setzen, wissen wir, dass seine Inline-Größe `190px` ist. Mit `aspect-ratio: 1` gesetzt, wird der Absatz `190px` hoch, es sei denn, er hat sichtbare überfließende Inhalte, die ihn höher machen (was er nicht hat).

Die Höhe des `<div>`-Elements ist nicht explizit gesetzt, enthält jedoch den `190px` hohen Absatz, die `5px` Polsterung oben und unten sowie die kombinierten Höhen der standardmäßigen oberen und unteren Ränder des `<p>`. Infolgedessen ist es höher als es breit ist. Beide Elemente haben einen {{cssxref("border-radius")}} von `50%`, sodass der Container ein Oval ist, während das Kind, mit einem `aspect-ratio` von `1`, aber ohne ausdrücklich definierte Inline- oder Blockdimensionen, ein Kreis ist.

```html live-sample___circle
<div><p>Hello world</p></div>
```

```css live-sample___circle
div,
p {
  border-radius: 50%;
}

div {
  width: 200px;
  padding: 5px;
  background-color: #66ccff;
}

p {
  aspect-ratio: 1;
  text-align: center;
  border: 10px solid #ffffff;
  background-color: #f4aab9;
}
```

{{EmbedLiveSample("circle", "100", "250")}}

Um das `<div>` zu einem Kreis zu machen, können wir die `height` und `width` auf denselben Wert setzen oder `aspect-ratio: 1` setzen und das `overflow` auf `auto` oder `hidden` setzen. Alternativ können wir einfach die Ränder auf dem Absatz mit [`margin-block: 0`](/de/docs/Web/CSS/margin-block) entfernen. Beide Optionen werden unten gezeigt.

```html live-sample___circle2
<section>
  <div><p>Hello world</p></div>
  <div><p>Hello world</p></div>
  <section></section>
</section>
```

```css hidden live-sample___circle2
section {
  display: flex;
  gap: 20px;
}

div {
  width: 200px;
  padding: 5px;
  background-color: #66ccff;
}

p {
  text-align: center;
  border: 10px solid #ffffff;
  background-color: #f4aab9;
}
```

```css live-sample___circle2
div,
p {
  aspect-ratio: 1;
  border-radius: 50%;
}

div:first-of-type {
  overflow: hidden;
}

div:last-of-type p {
  margin-block: 0;
}
```

{{EmbedLiveSample("circle2", "100", "250")}}

## Häufige Anwendungsfälle für `aspect-ratio`

Schauen wir uns einige Situationen an, in denen Sie `aspect-ratio` verwenden können, um einige häufige Herausforderungen beim Erstellen von responsiven Designs zu lösen.

### Externe Inhalte responsiv machen

Alle Inhalte sollten responsiv sein, sogar wenn diese Inhalte von Drittanbietern eingebettete Inhalte sind, wie Videos von TikTok, YouTube oder Instagram. Der Code-Schnipsel, den Sie verwenden, um diese externen Videos einzubetten, erstellt im Allgemeinen ein {{htmlelement("iframe")}}.

Während ein {{htmlelement("video")}}-Element typischerweise das Seitenverhältnis seiner Mediendatei übernimmt, fehlt `<iframe>`-Elementen diese Fähigkeit. Dies stellt die Herausforderung sicherzustellen, dass das `<iframe>` responsiv bleibt und immer das Seitenverhältnis des Videos beibehält. Eine der Techniken, die wir verwenden können, ist es, die Breite des iframes auf `100%` seines Containers oder `100vw` zu setzen, um die Breite des Ansichtsfensters unabhängig von dessen Größe zu entsprechen. Wenn jedoch eine feste Höhe festgelegt wird, könnte das Video gestreckt oder gestaucht werden. Stattdessen setzen wir das `aspect-ratio` am Container des Videos, um es mit dem gleichen Seitenverhältnis wie das Video auszurichten. Problem gelöst!

Zur Orientierung: Das standardmäßige Seitenverhältnis von YouTube-Videos liegt bei 16:9, wenn sie auf einem Desktop-Computer oder Laptop betrachtet werden, während TikTok- und Instagram-Videos ein Seitenverhältnis von 9:16 haben.

```css
.youtube {
  aspect-ratio: 16/9;
}

.instagram,
.tiktok {
  aspect-ratio: 9/16;
}
```

Wir können das `aspect-ratio`-Feature innerhalb der {{cssxref("@media")}}-Abfrage zusammen mit der `aspect-ratio`-Eigenschaft verwenden, um die Größe des iframes und des darin enthaltenen Videos anzupassen. Dies stellt sicher, dass der Video-Inhalt immer so groß wie möglich ist - entweder die volle Breite oder Höhe des Ansichtsfensters einnehmend, unabhängig von der Größe des Ansichtsfensters - und gleichzeitig ein bestimmtes Seitenverhältnis beibehält.

Wir können die im Querformat orientierten YouTube-Videos so einstellen, dass sie so breit wie das Ansichtsfenster sind, während die im Hochformat orientierten TitTok- und Instagram-Video-iframes so hoch wie das Ansichtsfenster sind. Falls das Seitenverhältnis des Ansichtsfensters breiter als 16:9 ist, setzen wir das YouTube-Video auf die Höhe des Ansichtsfensters. Wenn das Ansichtsfenster schmaler als 9:16 ist, setzen wir sowohl Instagram- als auch TikTok-Videos auf die Breite des Ansichtsfensters.

```css
iframe.youtube {
  aspect-ratio: 16/9;
  width: 100vw;
  height: auto;
}

iframe.instagram,
iframe.tiktok {
  aspect-ratio: 9/16;
  height: 100vh;
  width: auto;
}

/* If the viewport is very wide but not very tall */
@media (aspect-ratio > 16 / 9) {
  iframe.youtube {
    width: auto;
    height: 100vh;
  }
}

/* If the viewport is very tall but not very wide */
@media (aspect-ratio < 9 / 16) {
  iframe.instagram,
  iframe.tiktok {
    height: auto;
    width: 100vw;
  }
}
```

### Quadratförmige Rasterzellen erstellen

Ein Raster aus quadratischen Zellen kann erstellt werden, indem feste [Spurgrößen der Spalten](/de/docs/Web/CSS/grid-template-columns) definiert werden, wodurch jede Reihe die Größe der Spaltenspur übernimmt. Wenn jedoch responsive Raster unter Verwendung von `auto-fill` erstellt werden, um so viele Spaltenspuren wie möglich innerhalb des Containers zu platzieren, wird die Breite jedes Elements ungewiss. Dies macht es schwierig, die geeignete Höhe für quadratische Elemente zu bestimmen.

Durch das Festlegen eines Seitenverhältnisses auf den Elementen können wir sicherstellen, dass jedes Rasterelement so hoch wie breit ist, wodurch quadratische Rasterelemente unabhängig von den Dimensionen des Containers entstehen.

In diesem Beispiel von quadratischen Rasterelementen werden die Rasters geworden. Jedes Element ist mindestens `95px` breit, könnte jedoch viel breiter sein. Unabhängig von der Breite wird jedes Element ein Quadrat sein, wobei die Höhe durch das `aspect-ratio` bestimmt wird, um der Breite zu entsprechen.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
}

.item {
  aspect-ratio: 1;
}
```

```css hidden
div {
  gap: 20px;
  font-size: 1.1;
}

div div {
  background-color: #ccc;
  aspect-ratio: 1;
  counter-increment: items;
}

div div::after {
  content: counter(items);
}

.item::after {
  /*  hide the number if there's content  */
  position: absolute;
  color: transparent;
}
```

```html hidden
<div class="grid">
  <div></div>
  <div></div>
  <div class="item">
    This text would overflow the parent, but we've set properties to prevent it
    from doing so.
  </div>
  <div></div>
  <div></div>
  <div></div>
  <div class="item">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
      alt="Pride flag" />
  </div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

Damit der Inhalt eines Rasters nicht über die gewünschte Höhe hinauswächst, die durch das `aspect-ratio`-Verhältnis festgelegt wird, setzen Sie die {{cssxref("min-height")}} auf `0` und den {{cssxref("overflow")}} auf einen Wert anders als `visible`. Dies funktioniert für intrinsisch dimensionierte Inhalte. Wenn Sie Inhalte haben, die intrinsisch größer sind als der verfügbare Platz, stellen Sie sicher, dass dieser Inhalt nicht größer als das Rasterelement ist, indem Sie die {{cssxref("max-height")}} (oder {{cssxref("max-width")}}, abhängig vom Inhalt) auf `100%` setzen.

```css
.item {
  min-height: 0;
  overflow: auto;
}

.item > * {
  max-height: 100%;
}
```

{{EmbedLiveSample("making_grid_cells_square", "100", "380")}}

## Siehe auch

- [CSS-Box-Größenmodul](/de/docs/Web/CSS/CSS_box_sizing)
