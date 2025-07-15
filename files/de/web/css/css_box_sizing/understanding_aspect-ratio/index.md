---
title: Verständnis und Festlegung von Seitenverhältnissen
slug: Web/CSS/CSS_box_sizing/Understanding_aspect-ratio
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Jedes Element, das auf der Seite dargestellt wird, hat eine Höhe und eine Breite und somit ein {{Glossary("aspect_ratio", "Seitenverhältnis")}}, das das Verhältnis zwischen Breite und Höhe darstellt. Die natürlichen Abmessungen eines Medienobjekts, also seine Größe ohne jegliche Größenanpassung, Skalierung, Zoom oder angewandte Ränder, werden als seine natürliche oder {{Glossary("intrinsic_size", "intrinsische Größe")}} bezeichnet. Die intrinsische Größe eines Elements wird durch das Element selbst bestimmt, nicht durch die Anwendung von Formatierungen wie [Box Sizing](/de/docs/Web/CSS/CSS_box_sizing) oder das Festlegen von Rand-, Margin- oder Padding-Breiten.

Bei der Entwicklung von Websites möchten Sie oft die Breite eines Elements als Prozentsatz der Viewport- oder übergeordneten Containergröße festlegen und die Höhe proportional ändern, um ein bestimmtes Seitenverhältnis je nach Größe des Viewports beizubehalten. Für ersetzte Elemente wie Bilder und Videos ist es nicht nur notwendig, ein spezifisches Seitenverhältnis beizubehalten, um ein {{Glossary("responsive_web_design", "responsives Webdesign")}} zu erstellen, sondern auch ein wichtiger Bestandteil, um eine gute Benutzererfahrung zu gewährleisten. Die Festlegung des Seitenverhältnisses eines Assets verhindert das Laden von [Jank](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images) – der Layout-Shift, der auftritt, wenn Medien geladen werden, nachdem die Seite bereits gerendert wurde, was zu einem Reflow führt, weil der Platz für das Asset nicht reserviert wurde.

Mit CSS können Sie die Größe von ersetzten und nicht ersetzten Elementen basierend auf ihrem Seitenverhältnis anpassen. In diesem Leitfaden werden wir die `aspect-ratio`-Eigenschaft kennenlernen, über Seitenverhältnisse für ersetzte und nicht ersetzte Elemente diskutieren und dann einige häufige Anwendungsfälle für Seitenverhältnisse untersuchen.

## Wie die `aspect-ratio`-Eigenschaft funktioniert

Der CSS-Wert der {{cssxref("aspect-ratio")}}-Eigenschaft definiert das bevorzugte Breite-zu-Höhe-Verhältnis des Box-Elements. Der Wert ist entweder ein {{cssxref("ratio")}}, das Schlüsselwort `auto` oder eine durch Leerzeichen getrennte Kombination aus beiden.

Der `<ratio>` ist das Verhältnis von Breite und Höhe, in dieser Reihenfolge. Es wird durch zwei positive {{cssxref("number")}}-Werte dargestellt, die durch einen Schrägstrich (`/`) getrennt sind, oder eine einzelne `<number>`. Wenn eine einzelne Zahl verwendet wird, entspricht das dem Schreiben des Verhältnisses als `<number> / 1`, was auch die Breite geteilt durch die Höhe ist.

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

Die Wirkung des `auto`-Schlüsselworts hängt davon ab, ob das Element, auf das es angewendet wird, ein ersetztes Element ist oder nicht. Bei ersetzten Elementen mit einem intrinsischen Seitenverhältnis bedeutet `auto`, dass das intrinsische Seitenverhältnis verwendet werden soll. In allen anderen Fällen bedeutet der Wert `auto`, dass die Box kein bevorzugtes Seitenverhältnis hat. In beiden Fällen ist dies das Standardverhalten, als ob keine `aspect-ratio`-Eigenschaft angewendet wurde.

Wenn der Wert sowohl das `auto`-Schlüsselwort als auch einen `<ratio>`-Wert enthält, wie z.B. `aspect-ratio: auto 2 / 3;` oder `aspect-ratio: 0.75 auto;`, wird der `auto`-Wert auf ersetzte Elemente mit einem natürlichen Seitenverhältnis angewendet und das angegebene Verhältnis der `width / height` oder `<number>` wird als bevorzugtes Seitenverhältnis verwendet.

Sie werden bemerkt haben, dass in den obigen Definitionen das Wort „bevorzugt“ verwendet wird. Der `aspect-ratio`-Wert wird nicht immer angewendet, wenn er gesetzt wird. Die `aspect-ratio`-Eigenschaft legt ein „bevorzugtes“ Seitenverhältnis fest und hat nur dann eine Wirkung, wenn mindestens eine der Box-Größen automatisch ist.

Wenn sowohl die Höhe als auch die Breite oder Inline- und Blockgrößen explizit festgelegt sind, wird der `aspect-ratio`-Wert ignoriert. In diesem Fall darf keine Dimension automatisch dimensioniert werden – die bevorzugten Größen sind explizit festgelegt – daher hat die `aspect-ratio`-Eigenschaft keine Wirkung. Wenn Sie sowohl die Inline- als auch die Blockdimensionen angeben, haben diese Vorrang.

Bei ersetzten Elementen gilt: Wenn Sie keinen Wert (außer `auto`) explizit für eine der Dimensionen festlegen, werden beide standardmäßig auf ihre intrinsische Größe gesetzt (ein `aspect-ratio`-Wert wird nicht angewendet). Die `aspect-ratio` gilt für nicht ersetzte Elemente, die keine Dimension explizit gesetzt haben, da nicht ersetzte Elemente entweder {{Glossary("Intrinsic_Size", "intrinsisch")}} oder {{Glossary("Intrinsic_Size#extrinsic_sizing", "extrinsisch")}} dimensioniert sind und ihre Größe von ihrem Inhalt, Container, [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)-Eigenschaften usw. erhalten.

Wenn ein Element auf der Seite gerendert wird und kein CSS angewendet wird und keine HTML-Größenattribute enthalten sind, rendert der Benutzeragent das Objekt in seiner natürlichen Größe.

## Anpassung der Seitenverhältnisse von ersetzten Elementen

Ersetzte Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden durch Medien ersetzt, die festgelegte Dimensionen und somit ein intrinsisches Seitenverhältnis haben. Betrachten Sie ein Rasterbild, wie z.B. eine JPEG-, PNG- oder GIF-Datei. Wenn Sie ein Bild auf eine Seite einfügen und keine Höhe oder Breite festlegen, entweder über {{htmlelement("img")}}-Attribute oder mit CSS, wird es in seiner intrinsischen Größe angezeigt.

```html hidden live-sample___original
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg?image=good"
  alt="220 pixel square pride flag" />
```

{{EmbedLiveSample("original", "100", "230")}}

Dies ist ein `220px` großes Quadratbild ohne angewendetes CSS; es wird in seiner intrinsischen oder Standardgröße angezeigt.

Wenn ersetzter Inhalt automatisch dimensioniert ist oder Sie nur für eine Dimension eine Größe angeben, z.B. einen Wert für die `width` setzen, passt der Browser die andere Dimension automatisch an, in diesem Fall die Höhe, während das ursprüngliche Seitenverhältnis des Mediums beibehalten wird.

In diesem Beispiel ist nur die {{cssxref("width")}} des Bildes festgelegt, sodass der Benutzeragent sein Seitenverhältnis beibehält. Dasselbe Bild wird dreimal wiederholt und in unterschiedlichen Breiten angezeigt: `55px`, `110px` und in seiner natürlichen Größe von `220px` durch den Wert [`width: auto`](/de/docs/Web/CSS/width).

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

Erst wenn Sie Größen für beide Dimensionen angeben, besteht die Gefahr, dass das ersetzte Element verzerrt wird. Wenn Sie beispielsweise `width: 100vw;` und `height: 100vh;` auf ein Bild anwenden, entsteht ein variables Seitenverhältnis; das Bild wird entweder gestreckt oder gestaucht erscheinen, wenn das Seitenverhältnis des Viewports von dem natürlichen Seitenverhältnis des Bildes abweicht.

In diesem Beispiel wird dasselbe Bild dreimal wiederholt, explizit mit demselben {{cssxref("height")}}-Wert (`110px`) aber unterschiedlichen {{cssxref("width")}}-Werten (`55px`, `110px` und `220px`) dimensioniert.

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

Wir haben die Bilder absichtlich verzerrt, indem wir sowohl `height` als auch `width` festgelegt haben: Wir haben das erste gestaucht und das dritte gestreckt.

Wir hätten diesen gleichen verzerrten Effekt mit der CSS-{{cssxref("aspect-ratio")}}-Eigenschaft erzeugen können, indem wir eine einzelne Dimension (nicht beide oder keine) festlegen und einen anderen Wert als `1` (oder `1 / 1`) angeben. Sie möchten das wahrscheinlich nicht tun, aber es ist gut zu wissen, dass es möglich ist.

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

Wir haben eine einzelne Dimension deklariert; `100vh` ist die volle Höhe des beispielhaften {{htmlelement("iframe")}}-Viewports. Damit die `aspect-ratio` auf ersetzte Elemente angewendet wird, muss nur eine Dimension festgelegt werden. Das Festlegen beider oder keiner funktioniert nicht.

### Anpassung ersetzter Elemente an ihre Container

Um ein ersetztes Element an die Dimensionen seines Containers anzupassen und gleichzeitig sein intrinsisches Seitenverhältnis beizubehalten, setzen Sie den Wert der {{cssxref("object-fit")}}-Eigenschaft auf `cover` oder `contain`. Dies wird das ersetzte Element verkleinern und entweder zuschneiden, um den Container "zu bedecken" oder in einer kleineren Größe anzeigen, vollständig im Container "enthalten".

In diesem Beispiel wird das quadratische Bild in ein Raster mit drei Elementen platziert, wobei jedes ein Seitenverhältnis von `5 / 2` hat.

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

Als nächstes bezeichnen wir den Container als Raster, bei dem jedes Element ein Seitenverhältnis von `2.5` (`5/2`) mit einer Mindestbreite von `150px` hat. Daher beträgt die Mindesthöhe `60px`. Die endgültige Breite und Höhe werden jedoch durch die Breite des Beispiels-Iframes bestimmt, das basierend auf Ihrer Viewport-Größe basiert:

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

Wir dimensionieren dann die Bilder und setzen die `object-fit`-Eigenschaft auf die letzten beiden Bilder:

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

Nur das erste Bild ist verzerrt (gestreckt). Wir hätten den Wert `fill` der `object-fit`-Eigenschaft verwenden können, um den gleichen Effekt zu erzeugen. Das `cover`-Bild erstreckt sich über die volle Breite des Containers, zentriert vertikal und zugeschnitten, um in den Container zu passen. Der `contain`-Wert sorgt dafür, dass das Bild innerhalb des Containers enthalten ist, horizontal zentriert und verkleinert, um zu passen.

## Festlegung von Seitenverhältnissen für nicht ersetzte Elemente

Während das Seitenverhältnis eines ersetzten Elements standardmäßig beibehalten wird, ändert das Anpassen der intrinsischen Größe eines nicht ersetzten Elements normalerweise sein Seitenverhältnis. Zum Beispiel kann identischer Inhalt auf einem Breitbild oder in einem breiten übergeordneten Container als drei Zeilen erscheinen, aber auf einem schmalen Bildschirm oder Container als acht Zeilen.

In diesem Beispiel wird dasselbe Zitat in `200px` und `600px` breiten Containern angezeigt, und ein Quadrat ist mit einer Höhe festgelegt, die seiner `200px`-Breite entspricht:

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

Um das Problem mit der Festlegung des Seitenverhältnisses eines nicht ersetzten Elements über Größendimensionen hervorzuheben, wechseln Sie die {{cssxref("overflow")}}-Eigenschaft zwischen `auto` und `visible`.

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

Während es möglich ist, ein Seitenverhältnis auf nicht ersetzte Elemente festzulegen, indem Sie sowohl die Dimensionen festlegen als auch den überfließenden Inhalt ausblenden, bietet die CSS-{{cssxref("aspect-ratio")}}-Eigenschaft explizite Unterstützung für das Seitenverhältnis. Dies bedeutet, dass ein spezifisches Seitenverhältnis festgelegt werden kann, auch wenn Sie die Inhalts- oder Bildschirmgrößen nicht kennen.

Im nächsten Beispiel rendern wir quadratische Boxen unabhängig von der Breite des Textes, indem wir `aspect-ratio: 1` auf {{htmlelement("blockquote")}}, einem nicht ersetzten Element, setzen:

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

Jede Box hat eine Dimension definiert: die {{cssxref("inline-size")}}, die in horizontalen Sprachen die Breite ist, wird auf {{cssxref("max-content")}} gesetzt, was die Größe auf die maximale Breite setzt, die erforderlich ist, um den Inhalt ohne Zeilenumbruch zu passen. Die zweite Dimension, in diesem Fall die {{cssxref("block-size")}} oder {{cssxref("height")}}, wird auf die gleiche Länge wie die erste Dimension gesetzt. Dies wird mit der {{cssxref("aspect-ratio")}}-Eigenschaft erreicht. Wir haben das gewünschte Breite-zu-Höhe-Verhältnis des Box-Elements auf `1` definiert, das dem Verhältnis von `1 / 1`, einem Quadrat, entspricht. Dies setzt die Blockrichtung so, dass sie der Breite des Elements entspricht, ohne die {{cssxref("height")}}- oder {{cssxref("block-size")}}-Eigenschaften zu verwenden.

In diesen Beispielen wurde eine Größe explizit am Element selbst festgelegt. Beim Arbeiten mit nicht ersetzten Elementen kommt das Seitenverhältnis ins Spiel, wenn keine Größendimension explizit gesetzt ist.

### Erstellen eines Kreises basierend auf der Containergröße

Die Inline-Größe von block-level nicht ersetzten Elementen ist die Größe ihres [Inhaltsrahmens](/de/docs/Web/CSS/box-edge#content-box). Da sie standardmäßig eine Größe haben, muss für die `aspect-ratio`-Eigenschaft keine explizite Größe festgelegt werden.

In diesem Beispiel haben wir einen Container {{htmlelement("div")}}, der `200px` breit ist und auf jeder Seite `5px` Polsterung enthält. Daher beträgt die Inline-Größe des Inhaltsrahmens `190px`. Ohne eine Höhe oder Breite auf das verschachtelte {{htmlelement("p")}}-Element zu setzen, wissen wir, dass seine Inline-Größe `190px` ist. Mit `aspect-ratio: 1` gesetzt, wird der Absatz `190px` hoch sein, es sei denn, er hat sichtbaren überfüllten Inhalt, der ihn höher macht (was er nicht tut).

Die Höhe des `<div>`-Elements ist nicht explizit gesetzt, aber es enthält den `190px` hohen Absatz, die `5px` Polsterung oben und unten und die kombinierten Höhen der Standard-oben- und unten-Margen von `<p>`. Infolgedessen ist es höher als breit. Beide Elemente haben einen {{cssxref("border-radius")}} von `50%`, daher ist der Container ein Oval, während das Kind, mit einem `aspect-ratio` von `1` aber ohne explizit definierte Inline- oder Block-Größen, ein Kreis ist.

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
  border: 10px solid #ffffff;
  background-color: #f4aab9;
}
```

{{EmbedLiveSample("circle", "100", "250")}}

Um das `<div>` zu einem Kreis zu machen, können wir die `height` und `width` auf denselben Wert setzen oder `aspect-ratio: 1` setzen und das `overflow` auf `auto` oder `hidden`. Alternativ können wir einfach die Ränder des Absatzes mit [`margin-block: 0`](/de/docs/Web/CSS/margin-block) entfernen. Beide dieser Optionen werden unten gezeigt.

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

{{EmbedLiveSample("circle2", "100", "520")}}

## Häufige Anwendungsfälle für die `aspect-ratio`-Eigenschaft

Schauen wir uns einige Situationen an, in denen Sie `aspect-ratio` verwenden können, um einige häufige Herausforderungen bei der Erstellung von responsiven Designs zu adressieren.

### Externe Assets responsiv gestalten

Alle Inhalte sollten responsiv sein, selbst wenn diese Inhalte von Drittanbietern eingebettete Inhalte sind, wie Videos von TikTok, YouTube oder Instagram. Der Code-Snippet, den Sie verwenden, um diese externen Videos einzubetten, erstellt in der Regel ein {{htmlelement("iframe")}}.

Obwohl ein {{htmlelement("video")}}-Element typischerweise das Seitenverhältnis seiner Mediendatei übernimmt, fehlt `iframe`-Elementen diese Fähigkeit. Dies stellt die Herausforderung dar, sicherzustellen, dass das `<iframe>` responsiv ist, während es immer das Seitenverhältnis des enthaltenen Videos beibehält. Eine der Techniken, die wir verwenden können, besteht darin, die Breite des Iframes auf `100%` seines Containers oder `100vw` zu setzen, um die Breite des Viewports unabhängig von der Größe des Viewports anzupassen. Das Setzen einer festen Höhe könnte jedoch das Video strecken oder stauchen. Stattdessen setzen wir das `aspect-ratio` auf den Container des Videos, um es auf das gleiche Seitenverhältnis wie das Video auszurichten. Problem gelöst!

Zur Info: Das Standard-Seitenverhältnis von YouTube-Videos beträgt 16:9, wenn sie auf einem Desktop-Computer oder Laptop angesehen werden, während TikTok- und Instagram-Videos ein Seitenverhältnis von 9:16 haben.

```css
.youtube {
  aspect-ratio: 16/9;
}

.instagram,
.tiktok {
  aspect-ratio: 9/16;
}
```

Wir können die `aspect-ratio`-Eigenschaft innerhalb der {{cssxref("@media")}}-Abfrage zusammen mit der `aspect-ratio`-Eigenschaft verwenden, um die Größe sowohl des Iframes als auch des darin enthaltenen Videos anzupassen. Dies stellt sicher, dass der Videoinhalt immer so groß wie möglich ist – entweder die volle Breite oder Höhe des Viewports einnehmend, unabhängig von der Größe des Viewports – während ein bestimmtes Seitenverhältnis beibehalten wird.

Wir können die landschaftsorientierten YouTube-Videos so einstellen, dass sie so breit wie der Viewport sind, und die hochformatigen Instagram- und TikTok-Video-Iframes so, dass sie so hoch wie der Viewport sind. Wenn das Verhältnis eines Viewports breiter als 16:9 ist, setzen wir das YouTube-Video auf die Höhe des Viewports. Wenn der Viewport schmaler als 9:16 ist, setzen wir sowohl Instagram- als auch TikTok-Videos auf die Breite des Viewports.

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

Ein Raster aus quadratischen Zellen kann durch die Definition fester [Spurgrößen von Spalten](/de/docs/Web/CSS/grid-template-columns) erstellt werden, wodurch sichergestellt wird, dass jede Zeile die Größe der Spaltenspur erhält. Wenn jedoch reaktionsfähige Raster unter Verwendung von `auto-fill` erstellt werden, um so viele Spaltenspuren wie möglich in den Container zu passen, wird die Breite jedes Elements ungewiss. Dies erschwert es, die geeignete Höhe zu bestimmen, um quadratische Elemente zu erstellen.

Durch das Festlegen eines Seitenverhältnisses an den Elementen können wir sicherstellen, dass die Rasterelemente bei der Layoutanordnung jedes Rasterelemente so hoch sind, wie sie breit sind, und so quadratische Rasterelemente unabhängig von den Dimensionen des Containers erstellen.

In diesem Beispiel von quadratischen Rasterelementen sind die Rasterspuren automatisch dimensioniert, und beziehen ihre Größe von den Elementen. Jedes Element ist mindestens `95px` breit, könnte aber viel breiter sein. Egal wie groß die Breite ist, jedes Element wird ein Quadrat sein, mit der Höhe, die bestimmt wird, indem die `aspect-ratio` das Seitenverhältnis festlegt, um der Breite zu entsprechen.

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

Um sicherzustellen, dass der Inhalt eines Rasterelements nicht über die bevorzugte Höhe wächst, die durch die `aspect-ratio` festgelegt ist, setzen Sie die {{cssxref("min-height")}} auf `0` und das {{cssxref("overflow")}} auf einen anderen Wert als `visible`. Dies funktioniert für intrinsisch dimensionierte Inhalte. Wenn Sie Inhalte haben, die intrinsisch größer als der verfügbare Platz sind, setzen Sie diese Inhalte so, dass sie nicht größer als das Rasterelement sind, indem Sie die {{cssxref("max-height")}} (oder {{cssxref("max-width")}}, je nach Inhalt) auf `100%` setzen.

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

- [CSS Box-Sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
