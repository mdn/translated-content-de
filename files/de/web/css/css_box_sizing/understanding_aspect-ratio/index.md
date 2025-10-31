---
title: Verstehen und Festlegen von Seitenverhältnissen
slug: Web/CSS/CSS_box_sizing/Understanding_aspect-ratio
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Jedes Element, das auf der Seite dargestellt wird, hat eine Höhe und eine Breite und somit auch ein {{Glossary("aspect_ratio", "Seitenverhältnis")}}, das das Verhältnis zwischen Breite und Höhe beschreibt. Die natürlichen Abmessungen eines Medienobjekts, also seine Größe ohne jegliche Größenanpassung, Skalierung, Zoom oder angewandte Ränder, werden als seine natürliche oder {{Glossary("intrinsic_size", "intrinsische Größe")}} bezeichnet. Die intrinsische Größe eines Elements wird vom Element selbst bestimmt, nicht durch das Anwenden von Formatierungen wie [Box Sizing](/de/docs/Web/CSS/CSS_box_sizing) oder das Festlegen von Rand-, Margin- oder Padding-Breiten.

Beim Entwickeln von Websites möchten Sie oft die Breite eines Elements als Prozentsatz der Größe des Viewports oder des übergeordneten Containers festlegen und die Höhe proportional ändern, um ein spezifisches Seitenverhältnis je nach Größe des Viewports beizubehalten. Bei ersetzten Elementen wie Bildern und Videos ist es nicht nur notwendig, ein spezifisches Seitenverhältnis beizubehalten, um ein {{Glossary("responsive_web_design", "responsives Webdesign")}} zu erstellen, sondern es ist auch ein wesentlicher Bestandteil für eine gute Benutzererfahrung. Das Festlegen eines Seitenverhältnisses eines Assets verhindert das Laden von [Jank](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)—die Layoutverschiebung, die auftritt, wenn Medien geladen werden, nachdem die Seite bereits gemalt wurde, was zu einem Reflow führt, da der Platz für das Asset nicht reserviert wurde.

Mit CSS können Sie die Größe von ersetzten und nicht ersetzten Elementen basierend auf ihrem Seitenverhältnis anpassen. In diesem Leitfaden werden wir uns die CSS-Eigenschaft `aspect-ratio` ansehen, Seitenverhältnisse für ersetzte und nicht ersetzte Elemente diskutieren und dann einige gängige Anwendungsfälle für Seitenverhältnisse untersuchen.

## Wie die `aspect-ratio`-Eigenschaft funktioniert

Der Wert der CSS-Eigenschaft {{cssxref("aspect-ratio")}} definiert das bevorzugte Breiten-zu-Höhen-Verhältnis eines Element-Boxes. Der Wert ist entweder ein {{cssxref("ratio")}}, das Schlüsselwort `auto` oder eine durch Leerzeichen getrennte Kombination von beidem.

Das `<ratio>` ist das Verhältnis von Breite und Höhe, in dieser Reihenfolge. Es wird durch zwei positive {{cssxref("number")}}-Werte dargestellt, die durch einen Schrägstrich (`/`) getrennt sind, oder durch eine einzelne `<number>`. Wenn eine einzelne Zahl verwendet wird, entspricht das dem Schreiben des Verhältnisses als `<number> / 1`, was auch der Breite geteilt durch die Höhe entspricht.

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
  background-image:
    repeating-linear-gradient(to right, black 0px 1px, transparent 1px 20px),
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

Die Wirkung des `auto`-Schlüsselworts hängt davon ab, ob das Element, auf das es angewendet wird, ein ersetztes Element ist oder nicht. Für ersetzte Elemente mit einem intrinsischen Seitenverhältnis bedeutet `auto`, dass das intrinsische Seitenverhältnis verwendet werden sollte. In allen anderen Fällen bedeutet der `auto`-Wert, dass das Box keinen bevorzugten Seitenverhältnis hat. In beiden Fällen ist dies das Standardverhalten, als ob keine `aspect-ratio`-Eigenschaft angewendet worden wäre.

Wenn der Wert sowohl das `auto`-Schlüsselwort als auch einen `<ratio>`-Wert enthält, wie zum Beispiel `aspect-ratio: auto 2 / 3;` oder `aspect-ratio: 0.75 auto;`, wird der `auto`-Wert auf ersetzte Elemente mit einem natürlichen Seitenverhältnis angewendet, und das angegebene Verhältnis von `width / height` oder `<number>` wird als bevorzugtes Seitenverhältnis verwendet.

Sie haben in den obigen Definitionen das Wort "bevorzugt" bemerkt. Der `aspect-ratio`-Wert wird nicht immer angewendet, wenn er festgelegt ist. Die `aspect-ratio`-Eigenschaft legt ein "bevorzugtes" Seitenverhältnis fest, sodass sie nur dann eine Wirkung hat, wenn mindestens eine der Box-Größen automatisch ist.

Wenn sowohl die Höhe als auch die Breite oder Inline- und Blockgrößen explizit festgelegt sind, wird der `aspect-ratio`-Eigenschaftswert ignoriert. In diesem Fall darf keine Dimension automatisch dimensioniert werden - die bevorzugten Größen sind explizit gesetzt - wodurch die `aspect-ratio`-Eigenschaft keine Wirkung hat. Wenn Sie sowohl die Inline- als auch die Block-Dimensionen deklarieren, haben diese Vorrang.

Bei ersetzten Elementen, wenn Sie nicht explizit einen Wert (außer `auto`) für eine der Dimensionen festlegen, werden beide auf ihre intrinsische Größe zurückgesetzt (jeder `aspect-ratio`-Wert wird nicht angewendet). Die `aspect-ratio` wird auf nicht ersetzte Elemente angewendet, die keine Dimension explizit festgelegt haben, da nicht ersetzte Elemente entweder {{Glossary("Intrinsic_Size", "intrinsisch")}} oder {{Glossary("Extrinsic_size", "extrinsisch")}} dimensioniert sind und ihre Größe von ihrem Inhalt, Container, [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)-Eigenschaften usw. erhalten.

Wenn ein Element auf der Seite gerendert wird, wenn kein CSS angewendet wird und keine HTML-Größenattribute enthalten sind, wird der Benutzeragent das Objekt in seiner natürlichen Größe rendern.

## Anpassen von Seitenverhältnissen ersetzter Elemente

Ersetzte Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden durch Medien ersetzt, die festgelegte Dimensionen und somit ein intrinsisches Seitenverhältnis haben. Betrachten Sie ein Rasterbild, wie z.B. ein JPEG, PNG oder GIF. Wenn Sie ein Bild auf einer Seite platzieren und keine Höhe oder Breite festlegen, entweder über {{htmlelement("img")}}-Attribute oder mit CSS, wird es in seiner intrinsischen Größe angezeigt.

<!-- diese Bilder vorübergehend ignorieren. Vorschau testen -->

```html hidden live-sample___original
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg?image=good"
  alt="220 pixel square pride flag" />
```

{{EmbedLiveSample("original", "100", "230")}}

Dies ist ein `220px` großes quadratisches Bild ohne angewandtes CSS; es wird in seiner intrinsischen oder Standardgröße angezeigt.

Wenn ersetzte Inhalte automatisch dimensioniert sind oder Sie nur eine Dimension festlegen, wie zum Beispiel einen Wert für `Breite`, passt der Browser die andere Dimension automatisch an, in diesem Fall die Höhe, und behält das ursprüngliche Seitenverhältnis des Mediums bei.

In diesem Beispiel ist nur die {{cssxref("width")}} am Bild eingestellt, sodass der Benutzeragent sein Seitenverhältnis beibehält. Das gleiche Bild wird dreimal angezeigt, jeweils in unterschiedlichen Breiten: `55px`, `110px` und in seiner natürlichen Größe von `220px` über den [`width: auto`](/de/docs/Web/CSS/Reference/Properties/width) Wert.

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

Nur wenn Sie für beide Dimensionen Größen angeben, besteht die Gefahr, dass das ersetzte Element verzerrt wird. Zum Beispiel, wenn Sie `width: 100vw;` und `height: 100vh;` auf einem Bild festlegen, wird ein variables Seitenverhältnis erstellt; das Bild wird entweder gestreckt oder gestaucht erscheinen, wenn das Seitenverhältnis des Viewports von dem natürlichen Seitenverhältnis des Bildes abweicht.

In diesem Beispiel wird das gleiche Bild dreimal wiederholt, explizit mit dem gleichen {{cssxref("height")}}-Wert (`110px`), aber unterschiedlichen {{cssxref("width")}}-Werten (`55px`, `110px` und `220px`) dimensioniert.

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

Wir haben die Bilder absichtlich verzerrt, indem wir sowohl `height` als auch `width` festgelegt haben: wir haben das erste gestaucht und das dritte gestreckt.

Wir hätten diesen gleichen verzerrten Effekt mit der CSS-Eigenschaft {{cssxref("aspect-ratio")}} erstellen können, indem wir eine einzige Dimension (nicht beide oder keine) festlegen und einen Wert ungleich `1` (oder `1 / 1`) verwenden. Wahrscheinlich möchten Sie dies nicht tun, aber es ist gut zu wissen, dass es möglich ist.

```html hidden live-sample___stretch
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

```css live-sample___stretch
img {
  height: 90vh;
  aspect-ratio: 3;
}
```

{{EmbedLiveSample("stretch", "100", "270")}}

Wir haben eine einzige Dimension deklariert; `100vh` ist die volle Höhe des Beispiel-{{htmlelement("iframe")}}-Viewports. Damit `aspect-ratio` auf ersetzte Elemente angewendet werden kann, muss nur eine Dimension festgelegt sein. Das Setzen von beiden oder keiner funktioniert nicht.

### Anpassung ersetzter Elemente an ihre Container

Um ein ersetztes Element an die Dimensionen seines Containers anzupassen und dabei sein intrinsisches Seitenverhältnis beizubehalten, setzen Sie den Wert der {{cssxref("object-fit")}}-Eigenschaft auf `cover` oder `contain`. Diese wird das ersetzte Element anpassen und entweder zuschneiden, um den Container zu "füllen" oder es in kleinerer Größe anzeigen, voll "eingeschlossen" innerhalb des Containers.

In diesem Beispiel wird das quadratische Bild in einem Raster aus drei Elementen platziert, von denen jedes ein Seitenverhältnis von `5 / 2` hat.

Zunächst erstellen wir einen Container mit drei Elementen, die jeweils ein Bild enthalten:

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

Anschließend deklarieren wir den Container als Raster, wobei jedes Element ein Seitenverhältnis von `2.5` (`5/2`) hat, mit einer minimalen Breite von `150px`. Daher wird die minimale Höhe `60px` betragen. Die endgültige Breite und Höhe werden jedoch von der Breite des iframe der beispielhaften Abbildung bestimmt, die auf Ihrer Fenstergröße basiert:

```css live-sample___image-grid
.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  font-size: 0; /* to minimize whitespace */
}

div div {
  aspect-ratio: 5 / 2;
  background-color: #cccccc;
}
```

Dann dimensionieren wir die Bilder und setzen die `object-fit`-Eigenschaft auf die letzten beiden Bilder:

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

Nur das erste Bild ist verzerrt (gestreckt). Wir hätten den `fill`-Wert von `object-fit` verwenden können, um den gleichen Effekt zu erzeugen. Das `cover`-Bild spannt die volle Breite des Containers, zentriert vertikal und zugeschnitten, um in den Container zu passen. Der `contain`-Wert stellt sicher, dass das Bild innerhalb des Containers zentriert horizontal enthalten ist und entsprechend verkleinert wird.

## Definition von Seitenverhältnissen für nicht ersetzte Elemente

Während das Seitenverhältnis eines ersetzten Elements standardmäßig beibehalten wird, ändert das Anpassen der intrinsischen Größe eines nicht ersetzten Elements normalerweise sein Seitenverhältnis. Zum Beispiel kann derselbe Inhalt auf einem Breitbildschirm oder in einem breiten übergeordneten Container als drei Zeilen erscheinen, aber als acht Zeilen auf einem schmalen Bildschirm oder Container.

In diesem Beispiel wird dasselbe Zitat in `200px` und `600px` breiten Containern angezeigt, und ein Quadrat wird mit einer Höhe festgelegt, die seiner `200px` Breite entspricht:

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

Um das Problem hervorzuheben, das beim Festlegen des Seitenverhältnisses eines nicht ersetzten Elements über Größenabmessungen entsteht, ändern Sie die {{cssxref("overflow")}}-Eigenschaft zwischen `auto` und `visible`.

```css hidden live-sample___alder
blockquote {
  border: 3px dotted #cccccc;
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

Während es möglich ist, ein Seitenverhältnis auf nicht ersetzte Elemente durch Festlegen der Größen und Verbergen überfließender Inhalte zu definieren, bietet die CSS-Eigenschaft {{cssxref("aspect-ratio")}} explizite Unterstützung für Seitenverhältnisse. Das bedeutet, dass ein spezifisches Seitenverhältnis auch dann festgelegt werden kann, wenn Sie die Inhalte oder Bildschirmgrößen nicht kennen.

Im folgenden Beispiel rendern wir quadratische Kästen, unabhängig von der Breite des Textes, indem wir `aspect ratio: 1` auf {{htmlelement("blockquote")}}, ein nicht ersetztes Element, setzen:

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
  border: 1px solid #cccccc;
  padding: 1px;
  margin: 20px 0;
  background-color: #ededed;
}
```

{{EmbedLiveSample("words", "100", "400")}}

Jeder Kasten hat eine Dimension definiert: die {{cssxref("inline-size")}}, die bei horizontalen Sprachen die Breite ist, wird auf {{cssxref("max-content")}} gesetzt, was bedeutet, dass die Größe so breit wie nötig ist, um den Inhalt ohne Umbruch zu passen. Die zweite Dimension, in diesem Fall die {{cssxref("block-size")}} oder {{cssxref("height")}}, wird so gesetzt, dass sie die gleiche Länge wie die erste Dimension hat. Dies wird durch die {{cssxref("aspect-ratio")}} Eigenschaft erreicht. Wir haben das gewünschte Seitenverhältnis vom Kasten des Elements auf `1` definiert, das gleich `1 / 1`, einem Quadrat, ist. Dies setzt die Richtung des Blocks, um die Breite des Elements anzupassen, ohne die {{cssxref("height")}} oder {{cssxref("block-size")}} Eigenschaften zu verwenden.

In diesen Beispielen war eine Größe explizit auf das Element selbst eingestellt. Bei der Arbeit mit nicht ersetzten Elementen kommt das Seitenverhältnis ins Spiel, wenn keine Größen-Dimension explizit festgelegt ist.

### Erstellen eines Kreises basierend auf der Containergröße

Die Inline-Größe von nicht ersetzten block-level Elementen entspricht der Größe des [Inhaltsbox](/de/docs/Web/CSS/box-edge#content-box) ihres Containers. Da sie standardmäßig eine Größe haben, müssen sie keine explizite Größe haben, damit die `aspect-ratio` Eigenschaft funktioniert.

In diesem Beispiel haben wir einen Container {{htmlelement("div")}}, der `200px` breit ist, einschließlich `5px` Padding an jeder Seite. Daher beträgt die Inline-Größe der Inhaltsbox `190px`. Ohne eine Höhe oder Breite auf dem verschachtelten {{htmlelement("p")}} Element festzulegen, wissen wir, dass seine Inline-Größe `190px` beträgt. Mit `aspect-ratio: 1` gesetzt, wird der Absatz `190px` hoch sein, es sei denn, es hat sichtbaren Überlauf an Inhalten, die ihn höher machen (was es nicht tut).

Die Höhe des `<div>` Elements ist nicht explizit festgelegt, enthält jedoch den `190px` hohen Absatz, die `5px` Padding oben und unten, sowie die kombinierten Höhen der Standardränder oben und unten von `<p>`. Als Ergebnis ist es höher als breit. Beide Elemente haben einen {{cssxref("border-radius")}} von `50%`, sodass der Container ein Oval ist, während das Kind, mit einem `aspect-ratio` von `1`, aber ohne Inline- oder Blockgrößen explizit definiert, ein Kreis ist.

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
  border: 1px solid black;
  background-color: #66ccff;
}

p {
  aspect-ratio: 1;
  text-align: center;
  border: 10px solid white;
  background-color: #f4aab9;
}
```

{{EmbedLiveSample("circle", "100", "250")}}

Um das `<div>` in einen Kreis zu verwandeln, können wir die `height` und `width` auf denselben Wert setzen oder `aspect-ratio: 1` festlegen und das `overflow` auf `auto` oder `hidden` setzen. Alternativ können wir einfach die Margen auf dem Absatz mit [`margin-block: 0`](/de/docs/Web/CSS/Reference/Properties/margin-block) entfernen. Beide Optionen sind nachstehend gezeigt.

```html live-sample___circle2
<div><p>Hello world</p></div>
<div><p>Hello world</p></div>
```

```css hidden live-sample___circle2
div {
  width: 200px;
  padding: 5px;
  margin: 1rem;
  border: 1px solid black;
  background-color: #66ccff;
}

p {
  text-align: center;
  border: 10px solid white;
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

{{EmbedLiveSample("circle2", "100", "520")}}

## Häufige Anwendungsfälle für `aspect-ratio`

Lassen Sie uns einige Situationen betrachten, in denen Sie `aspect-ratio` verwenden können, um einige häufige Herausforderungen beim Erstellen reaktionsfähiger Designs zu bewältigen.

### Externe Assets reaktionsfähig machen

Alle Inhalte sollten reaktionsfähig sein, selbst wenn diese Inhalte von Drittanbieter-Einbettungen stammen, wie Videos von TikTok, YouTube oder Instagram. Der Code-Snippet, den Sie zum Einbetten dieser externen Videos verwenden, erstellt im Allgemeinen ein {{htmlelement("iframe")}}.

Während ein {{htmlelement("video")}}-Element normalerweise das Seitenverhältnis seiner Mediendatei annimmt, fehlt `iframe`-Elementen diese Fähigkeit. Dies stellt die Herausforderung dar, sicherzustellen, dass das `<iframe>` reaktionsfähig ist und dabei immer das Seitenverhältnis des Videos beibehält, das es enthält. Eine der Techniken, die wir verwenden können, besteht darin, die Breite des iframes auf `100%` seines Containers oder `100vw` festzulegen, um die Breite des Viewports unabhängig von deren Größe zu übernehmen. Wenn jedoch eine feste Höhe eingestellt wird, könnte das Video gedehnt oder gestaucht werden. Stattdessen setzen wir das `aspect-ratio` auf den Videocontainer, sodass es das gleiche Seitenverhältnis wie das Video beibehält. Problem gelöst!

Zum Kontext: das Standard-Seitenverhältnis von YouTube-Videos beträgt 16:9, wenn sie auf einem Desktop-Computer oder Laptop angezeigt werden, während TikTok- und Instagram-Videos ein 9:16-Seitenverhältnis haben.

```css
.youtube {
  aspect-ratio: 16/9;
}

.instagram,
.tiktok {
  aspect-ratio: 9/16;
}
```

Wir können die `aspect-ratio`-Eigenschaft innerhalb des {{cssxref("@media")}}-Abfrage zusammen mit der `aspect-ratio` Eigenschaft verwenden, um die Größe sowohl des iframes als auch des Videos, das es enthält, anzupassen. Dies stellt sicher, dass der Video-Inhalt immer so groß wie möglich ist - entweder die vollständige Breite oder Höhe des Viewports einnehmend, unabhängig von der Größe des Viewports - und dabei ein spezifisches Seitenverhältnis beibehält.

Wir können die YouTube-Videos mit Landschaftsorientierung so einstellen, dass sie so breit wie der Viewport sind, und die iframes der hochkant orientierten TikTok- und Instagram-Videos so, dass sie so hoch wie der Viewport sind. Wenn das Seitenverhältnis eines Viewports breiter als 16:9 ist, setzen wir das YouTube-Video auf die Höhe des Viewports. Wenn der Viewport schmaler als 9:16 ist, setzen wir sowohl die Instagram- als auch die TikTok-Videos auf die Breite des Viewports.

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

### Gitterzellen quadratisch machen

Ein Raster aus quadratischen Zellen kann erstellt werden, indem feste [Spalten-Track-Größen](/de/docs/Web/CSS/Reference/Properties/grid-template-columns) definiert werden, sodass jede Reihe die Größe des Spalten-Tracks entspricht. Beim Erstellen von responsiven Rastern mit `auto-fill`, um so viele Spalten-Tracks wie möglich im Container zu platzieren, wird die Breite jedes Elements ungewiss. Dies macht es herausfordernd, die geeignete Höhe zu bestimmen, um quadratische Elemente zu erstellen.

Indem das Seitenverhältnis auf den Elementen eingestellt wird, können wir sicherstellen, dass jedes Gitterelement beim Layout so hoch wie breit ist, quadratische Gitterelemente erstellt werden, unabhängig von den Abmessungen des Containers.

In diesem Beispiel quadratischer Gitterelemente sind die Raster-Track-Größen automatisch dimensioniert, wobei sie ihre Größe von den Elementen nehmen. Jedes Element wird mindestens `95px` breit sein, könnte aber viel breiter sein. Unabhängig von der Breite wird jedes Element ein Quadrat sein, wobei die Höhe durch das `aspect-ratio` festgelegt wird, um ihrer Breite zu entsprechen.

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
  font-size: 1.1rem;
}

div div {
  background-color: #cccccc;
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

Damit der Inhalt eines Gitterelements nicht über die bevorzugte Höhe hinauswächst, die durch das `aspect-ratio` festgelegt wird, setzen Sie die {{cssxref("min-height")}} auf `0` und das {{cssxref("overflow")}} auf einen anderen Wert als `visible`. Dies funktioniert für intrinsisch dimensionierten Inhalt. Wenn Sie Inhalte haben, die intrinsisch größer als der verfügbare Platz sind, richten Sie diesen Inhalt so ein, dass er nicht größer als der Gitter-Element ist, indem Sie die {{cssxref("max-height")}} (oder {{cssxref("max-width")}}, abhängig vom Inhalt) auf `100%` setzen.

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

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Box Sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
