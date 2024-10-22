---
title: Verständnis und Festlegung von Seitenverhältnissen
slug: Web/CSS/CSS_box_sizing/Understanding_aspect-ratio
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

Jedes Element, das auf der Seite dargestellt wird, hat eine Höhe und eine Breite und somit ein {{Glossary("aspect_ratio", "Seitenverhältnis")}}, das das Verhältnis zwischen Breite und Höhe beschreibt. Die natürlichen Abmessungen eines Medienobjekts, also dessen Größe ohne jegliche Anpassungen wie Skalierung, Zoom oder Ränder, werden als natürliche oder {{Glossary("intrinsic_size", "intrinsische Größe")}} bezeichnet. Die intrinsische Größe eines Elements wird durch das Element selbst bestimmt und nicht durch die Anwendung von Formatierungen wie [Box Sizing](/de/docs/Web/CSS/CSS_box_sizing) oder durch die Festlegung von Rand-, Außen- oder Innenabständen.

Bei der Entwicklung von Websites möchten Sie oft die Breite eines Elements proportional zur Größe des Viewports oder des übergeordneten Containers einstellen und die Höhe proportional anpassen, um ein bestimmtes Seitenverhältnis beizubehalten, abhängig von der Größe des Viewports. Bei ersetzten Elementen wie Bildern und Videos ist das Beibehalten eines bestimmten Seitenverhältnisses nicht nur erforderlich, um ein {{Glossary("responsive_web_design", "responsives Webdesign")}} zu erstellen, sondern auch ein wesentlicher Bestandteil, um ein gutes Benutzererlebnis zu bieten. Die Festlegung des Seitenverhältnisses eines Assets verhindert Ladeverzögerungen ([Jank](/de/docs/Learn/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)) – das Layout-Shift, das auftritt, wenn Medien geladen werden, nachdem die Seite bereits gerendert wurde und eine Neuanordnung verursacht, weil der Platz für das Asset nicht reserviert wurde.

Mit CSS können Sie die Größe von ersetzten und nicht ersetzten Elementen basierend auf ihrem Seitenverhältnis anpassen. In diesem Leitfaden erfahren Sie mehr über die Eigenschaft `aspect-ratio`, diskutieren Seitenverhältnisse für ersetzte und nicht ersetzte Elemente und untersuchen einige häufige Anwendungsfälle von Seitenverhältnissen.

## Funktionsweise der Eigenschaft `aspect-ratio`

Der CSS-Wert {{cssxref("aspect-ratio")}} definiert das bevorzugte Breite-zu-Höhe-Verhältnis des Box-Modells eines Elements. Der Wert ist entweder ein {{cssxref("ratio")}}, das Schlüsselwort `auto`, oder eine durch Leerzeichen getrennte Kombination beider.

Der `<ratio>` ist das Verhältnis von Breite zu Höhe, in genau dieser Reihenfolge. Es wird durch zwei positive {{cssxref("number")}}-Werte repräsentiert, die durch einen Schrägstrich (`/`) getrennt sind, oder eine einzelne `<number>`. Wenn eine einzelne Zahl verwendet wird, entspricht dies dem Schreiben des Verhältnisses als `<number> / 1`, was auch der Breite geteilt durch die Höhe entspricht.

Die folgenden Werte sind alle gleichwertig:

```css
aspect-ratio: 3 / 6;
aspect-ratio: 1 / 2;
aspect-ratio: 0.5 / 1;
aspect-ratio: 0.5;
```

Die folgenden Werte sind ebenfalls alle gleichwertig:

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

Die Wirkung des `auto`-Schlüsselworts hängt davon ab, ob das Element, auf das es angewendet wird, ein ersetztes Element ist oder nicht. Für ersetzte Elemente mit einem intrinsischen Seitenverhältnis bedeutet `auto`, dass das intrinsische Seitenverhältnis verwendet werden soll. In allen anderen Fällen bedeutet der `auto`-Wert, dass die Box kein bevorzugtes Seitenverhältnis hat. In beiden Fällen ist dies das Standardverhalten, als wäre keine `aspect-ratio`-Eigenschaft angewendet.

Wenn der Wert sowohl das `auto`-Schlüsselwort als auch einen `<ratio>`-Wert enthält, wie `aspect-ratio: auto 2 / 3;` oder `aspect-ratio: 0.75 auto;`, wird der `auto`-Wert auf ersetzte Elemente mit einem natürlichen Seitenverhältnis angewendet und das angegebene Verhältnis von `width / height` oder `<number>` als bevorzugtes Seitenverhältnis verwendet.

Sie haben im obigen Text das Wort "bevorzugt" bemerkt. Der `aspect-ratio`-Wert wird nicht immer angewandt, wenn er festgelegt ist. Die `aspect-ratio`-Eigenschaft setzt ein "bevorzugtes" Seitenverhältnis, das also nur eine Wirkung hat, wenn mindestens eine der Boxen in ihrer Größe automatisch ist.

Wenn sowohl die Höhe als auch die Breite oder die Inline- und Blockgrößen explizit festgelegt sind, wird der `aspect-ratio`-Wert ignoriert. In diesem Fall ist es nicht erlaubt, dass eine Dimension automatisch dimensioniert wird - die bevorzugten Größen sind explizit festgelegt - daher hat die `aspect-ratio`-Eigenschaft keine Wirkung. Wenn Sie sowohl die Inline- als auch die Blockgrößen deklarieren, haben diese Vorrang.

Bei ersetzten Elementen, wenn Sie keinen Wert explizit setzen (außer `auto`) für eine der Dimensionen, werden beide auf ihre intrinsische Größe zurückgesetzt (kein `aspect-ratio` wird angewendet). Die `aspect-ratio` wird auf nicht ersetzte Elemente angewandt, die keine explizite Größenfestlegung haben, da nicht ersetzte Elemente entweder {{Glossary("Intrinsic_Size", "intrinsisch")}} oder {{Glossary("Intrinsic_Size#extrinsic_sizing", "extrinsisch")}} dimensioniert sind und ihre Größe von ihrem Inhalt, Container, [Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model)-Eigenschaften etc. erhalten.

Wenn ein Element auf der Seite gerendert wird und kein CSS angewandt wird und keine HTML-Größenattribute enthalten sind, rendert der Benutzeragent das Objekt in seiner natürlichen Größe.

## Anpassen von Seitenverhältnissen ersetzter Elemente

Ersetzte Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden durch Medien ersetzt, die festgelegte Dimensionen haben und daher ein intrinsisches Seitenverhältnis besitzen. Betrachten Sie ein Rasterbild, wie z.B. ein JPEG, PNG oder GIF. Wenn Sie ein Bild auf einer Seite platzieren und keine Höhe oder Breite setzen, entweder über die {{htmlelement("img")}}-Attribute oder mit CSS, wird es in seiner intrinsischen Größe angezeigt.

<!-- temporär diese Bilder ignorieren. Testen der Vorschau -->

```html hidden live-sample___original
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg?image=good"
  alt="220 pixel square pride flag" />
```

{{EmbedLiveSample("original", "100", "230")}}

Dies ist ein `220px` Quadratbild ohne angewandtes CSS; es wird in seiner intrinsischen oder Standardgröße dargestellt.

Wenn ersetzter Inhalt automatisch dimensioniert ist oder Sie nur eine Dimension angeben, wie z.B. einen Wert für `width` setzen, wird der Browser die andere Dimension, in diesem Fall die Höhe, automatisch anpassen und dabei das ursprüngliche Seitenverhältnis des Mediums beibehalten.

In diesem Beispiel ist nur die {{cssxref("width")}} beim Bild gesetzt, sodass der Benutzeragent sein Seitenverhältnis bewahrt. Dasselbe Bild wird dreimal angezeigt und zeigt unterschiedliche Breiten: `55px`, `110px` und seine natürliche Größe von `220px` über den [`width: auto`](/de/docs/Web/CSS/width)-Wert.

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

Nur wenn Sie Größen für beide Dimensionen angeben, besteht die Gefahr, dass das ersetzte Element verzerrt wird. Ein Beispiel: Wenn Sie `width: 100vw;` und `height: 100vh;` auf ein Bild setzen, entsteht ein variables Seitenverhältnis; das Bild erscheint entweder gestreckt oder gequetscht, wenn das Seitenverhältnis des Viewports sich von dem natürlichen Seitenverhältnis des Bildes unterscheidet.

In diesem Beispiel wird dasselbe Bild dreimal wiederholt, explizit mit demselben {{cssxref("height")}} Wert (`110px`) aber mit unterschiedlichen {{cssxref("width")}} Werten (`55px`, `110px` und `220px`) dimensioniert.

```html hidden live-sample___image-bad
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

```css hidden live-sample___image-bad
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

{{EmbedLiveSample("image-bad", "100", "120")}}

Wir haben die Bilder absichtlich verzerrt, indem wir sowohl eine `height` als auch eine `width` gesetzt haben: Wir haben das erste Bild gequetscht und das dritte gestreckt.

Wir hätten diesen gleichen verzerrten Effekt mit der CSS-{{cssxref("aspect-ratio")}}-Eigenschaft erzeugen können, indem wir eine einzige Dimension (nicht beide oder keine) festgelegt und einen Wert ungleich `1` (oder `1 / 1`) angegeben haben. Sie möchten dies vermutlich nicht tun, aber es ist gut zu wissen, dass es möglich ist.

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

Wir haben eine einzige Dimension deklariert; `100vh` ist die volle Höhe des Beispiel-{{htmlelement("iframe")}}-Viewports. Damit `aspect-ratio` auf ersetzte Elemente angewandt wird, muss nur eine Dimension festgelegt werden. Das Setzen von beiden oder keine funktioniert nicht.

### Anpassen von ersetzten Elementen innerhalb ihrer Container

Um ein ersetztes Element an die Abmessungen seines Containers anzupassen und dabei sein intrinsisches Seitenverhältnis beizubehalten, setzen Sie den Wert der {{cssxref("object-fit")}}-Eigenschaft auf `cover` oder `contain`. Dadurch wird das ersetzte Element angepasst und entweder auf seinen Container zurechtgeschnitten oder vollständig "eingeschlossen" innerhalb dieses angezeigt.

In diesem Beispiel wird das quadratische Bild in ein Raster von drei Elementen eingefügt, von denen jedes ein Seitenverhältnis von `5 / 2` hat.

Zuerst erstellen wir einen Container mit drei Elementen, die jeweils ein Bild enthalten:

```html live-sample___image-grid
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

Als nächstes designieren wir den Container als Raster, bei dem jedes Element ein Seitenverhältnis von `2.5` (`5/2`) mit einer Mindestbreite von `150px` hat. Daher wird die Mindesthöhe `60px` betragen. Die endgültige Breite und Höhe werden jedoch von der Breite des Beispiels-iframe bestimmt, die auf der Größe Ihres Viewports basiert:

```css live-sample___image-grid
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

Wir dimensionieren dann die Bilder und setzen die `object-fit`-Eigenschaft auf die letzten zwei Bilder:

```css live-sample___image-grid
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

{{EmbedLiveSample("image-grid", "100", "100")}}

Nur das erste Bild ist verzerrt (gestreckt). Wir hätten den `fill`-Wert von `object-fit` verwenden können, um den gleichen Effekt zu erzielen. Das `cover` Bild erstreckt sich über die ganze Breite des Containers, ist vertikal zentriert und wird eingeklemmt, um in den Container zu passen. Der `contain`-Wert stellt sicher, dass das Bild im Container enthalten bleibt, horizontal zentriert und verkleinert, um zu passen.

## Definieren von Seitenverhältnissen für nicht ersetzte Elemente

Während das Seitenverhältnis eines ersetzten Elements standardmäßig beibehalten wird, verändert das Ändern der intrinsischen Größe eines nicht ersetzten Elements normalerweise dessen Seitenverhältnis. Zum Beispiel kann derselbe Inhalt auf einem Breitbildschirm oder in einem breiten übergeordneten Container als drei Zeilen erscheinen, aber auf einem schmalen Bildschirm oder Container als acht Zeilen.

In diesem Beispiel wird dasselbe Zitat in `200px` und `600px` breiten Containern dargestellt, und ein Quadrat wird mit einer Höhe entsprechend seiner `200px` Breite gesetzt:

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

Um das Problem zu verdeutlichen, ein Seitenverhältnis eines nicht ersetzten Elements durch Größenabmessungen festzulegen, wechseln Sie die {{cssxref("overflow")}}-Eigenschaft zwischen `auto` und `visible`.

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

Auch wenn es möglich ist, ein Seitenverhältnis bei nicht ersetzten Elementen durch Setzen von beiden Dimensionen und Verbergen von überlaufendem Inhalt festzulegen, bietet die CSS-{{cssxref("aspect-ratio")}}-Eigenschaft explizite Unterstützung für das Seitenverhältnis. Dies bedeutet, dass ein bestimmtes Seitenverhältnis festgelegt werden kann, selbst wenn Sie die Inhalte oder die Bildschirmgrößen nicht kennen.

Im nächsten Beispiel rendern wir quadratische Boxen unabhängig von der Breite des Textes durch das Setzen von `aspect-ratio: 1` auf {{htmlelement("blockquote")}}, einem nicht ersetzten Element:

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

Jede Box hat eine Dimension definiert: Die {{cssxref("inline-size")}}, die die Breite in horizontalen Sprachen ist, wird auf {{cssxref("max-content")}} gesetzt, was die Größe so setzt, dass sie so breit ist, wie sie sein muss, um den Inhalt ohne Umbruch zu fassen. Die zweite Dimension, in diesem Fall die {{cssxref("block-size")}} oder {{cssxref("height")}}, wird auf dieselbe Länge wie die erste Dimension gesetzt. Dies wird mit der {{cssxref("aspect-ratio")}}-Eigenschaft erreicht. Wir haben das gewünschte Breite-zu-Höhe-Verhältnis des Box-Modells des Elements auf `1` definiert, was dasselbe ist wie `1 / 1`, ein Quadrat. Dadurch wird die Blockrichtung an die Breite des Elements angepasst, ohne die {{cssxref("height")}}- oder {{cssxref("block-size")}}-Eigenschaften zu verwenden.

In diesen Beispielen wurde eine Größe explizit am Element selbst festgelegt. Bei der Arbeit mit nicht ersetzten Elementen kommt das Seitenverhältnis dann ins Spiel, wenn keine Größendimension explizit gesetzt ist.

### Schaffung eines Kreises basierend auf der Containergröße

Die Inline-Größe von nicht ersetzten Block-Level-Elementen entspricht der Größe des Inhaltsbereichs ihres Containers [Content Box](/de/docs/Web/CSS/box-edge#content-box). Da sie standardmäßig eine Größe haben, müssen sie keine explizite Größe festgelegt haben, damit die `aspect-ratio`-Eigenschaft funktioniert.

In diesem Beispiel haben wir einen Container {{htmlelement("div")}} der `200px` breit ist, einschließlich `5px` Polsterung auf jeder Seite. Daher ist die Inline-Größe des Inhaltsbereichs `190px`. Ohne eine Höhe oder Breite auf dem eingebetteten {{htmlelement("p")}}-Element festzulegen, wissen wir, dass dessen Inline-Größe `190px` ist. Mit `aspect-ratio: 1` festgelegt, wird der Absatz `190px` hoch sein, es sei denn, er enthält sichtbaren überlaufenden Inhalt, der ihn größer macht (was er nicht tut).

Die Höhe des `<div>`-Elements ist nicht explizit festgelegt, aber es enthält den `190px` hohen Absatz, die `5px` Polsterung oben und unten und die kombinierten Höhen der Standard-Top-und-Bottom-Ränder des `<p>`. Resultierend ist es höher als breit. Beide Elemente haben einen {{cssxref("border-radius")}} von `50%`, daher ist der Container oval, während das Kind mit einem `aspect-ratio` von `1`, aber ohne explizit definierte Inline- oder Blockausmaße, ein Kreis ist.

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

Um das `<div>` zu einem Kreis zu machen, können wir die `height` und `width` auf denselben Wert setzen oder `aspect-ratio: 1` setzen und das `overflow` auf `auto` oder `hidden`. Alternativ können wir einfach die Ränder des Absatzes mit [`margin-block: 0`](/de/docs/Web/CSS/margin-block) entfernen. Beide Optionen sind unten gezeigt.

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

Schauen wir uns einige Situationen an, in denen Sie `aspect-ratio` verwenden können, um einige häufige Herausforderungen bei der Erstellung von responsiven Designs zu adressieren.

### Externe Assets responsiv machen

Alle Inhalte sollten responsiv sein, auch wenn es sich um Einbettungen von Drittanbietern wie Videos von TikTok, YouTube oder Instagram handelt. Der Codeausschnitt, den Sie verwenden, um diese externen Videos einzubetten, erstellt normalerweise ein {{htmlelement("iframe")}}.

Während ein {{htmlelement("video")}}-Element normalerweise das Seitenverhältnis seiner Mediendatei übernimmt, fehlt `iframe`-Elementen diese Fähigkeit. Dies stellt die Herausforderung dar, sicherzustellen, dass das `<iframe>` immer das Seitenverhältnis des Videos beibehält, das es enthält. Eine der Techniken, die wir verwenden können, besteht darin, die Breite des Iframes auf `100%` seines Containers oder `100vw` festzulegen, um der Breite des Viewports unabhängig von dessen Größe zu entsprechen. Das Festlegen einer festen Höhe könnte jedoch das Video strecken oder quetschen. Stattdessen setzen wir das `aspect-ratio` auf den Container des Videos und passen ihn an dasselbe Seitenverhältnis wie das Video an. Problem gelöst!

Zum Kontext: Das Standardseitenverhältnis von YouTube-Videos beträgt 16:9, wenn sie auf einem Desktop-Computer oder Laptop betrachtet werden, während TikTok- und Instagram-Videos ein 9:16-Seitenverhältnis haben.

```css
.youtube {
  aspect-ratio: 16/9;
}

.instagram,
.tiktok {
  aspect-ratio: 9/16;
}
```

Wir können die `aspect-ratio`-Funktion innerhalb der {{cssxref("@media")}}-Abfrage zusammen mit der `aspect-ratio`-Eigenschaft verwenden, um die Größe sowohl des Iframes als auch des Videos, das es enthält, anzupassen. Dies stellt sicher, dass der Videoinhalt immer so groß wie möglich ist - entweder die volle Breite oder Höhe des Viewports einnehmend, unabhängig von der Viewportgröße - und gleichzeitig ein spezifisches Seitenverhältnis beibehalten wird.

Wir können die im Querformat ausgerichteten YouTube-Videos so gestalten, dass sie so breit wie der Viewport sind, und die im Hochformat ausgerichteten TitTok- und Instagram-Videorames so hoch wie der Viewport. Wenn das Seitenverhältnis des Viewports breiter als 16:9 ist, setzen wir das YouTube-Video auf die Höhe des Viewports. Ist der Viewport schmaler als 9:16, setzen wir die Breite der Instagram- und TikTok-Videos auf die des Viewports.

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

### Quadratische Gitterzellen erstellen

Ein Gitter aus quadratischen Zellen kann erstellt werden, indem feste [Spaltenbahngrößen](/de/docs/Web/CSS/grid-template-columns) definiert werden, um sicherzustellen, dass jede Zeile die Größe der Spaltenbahn annimmt. Wenn jedoch responsive Gitter mit `auto-fill` erstellt werden, um so viele Spaltenbahnen wie möglich innerhalb des Containers zu füllen, wird die Breite jedes Elements ungewiss. Dies macht es herausfordernd, die geeignete Höhe für quadratische Elemente zu bestimmen.

Wenn wir ein Seitenverhältnis auf die Elemente setzen, können wir sicherstellen, dass, wenn die Gitterelemente angeordnet werden, jedes Gitterelement so hoch wie breit ist und unabhängig von den Containerabmessungen quadratische Gitterelemente erstellt.

In diesem Beispiel quadratischer Gitterelemente sind die Gitterscheinen automatisch dimensioniert und ihre Größe ergibt sich aus den Elementen. Jedes Element wird mindestens `95px` breit sein, könnte aber viel breiter sein. Unabhängig von der Breite wird jedes Element ein Quadrat sein, wobei die Höhe durch die `aspect-ratio` bestimmt wird, um mit der Breite übereinzustimmen.

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

Um sicherzustellen, dass der Inhalt eines Gitterelements nicht über die bevorzugte Höhe hinauswächst, die durch das `aspect-ratio` gesetzt wird, setzen Sie die {{cssxref("min-height")}} auf `0` und die {{cssxref("overflow")}} auf einen anderen Wert als `visible`. Dies funktioniert für intrinsisch dimensionierten Inhalt. Wenn Sie Inhalt haben, der von Natur aus größer als der verfügbare Platz ist, setzen Sie diesen Inhalt so, dass er nicht größer als das Gitterelement ist, indem Sie die {{cssxref("max-height")}} (oder {{cssxref("max-width")}}, je nach Inhalt) auf `100%` setzen.

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

- [CSS Box Sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
