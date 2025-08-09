---
title: Verstehen und Festlegen von Seitenverhältnissen
slug: Web/CSS/CSS_box_sizing/Understanding_aspect-ratio
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Jedes Element, das auf der Seite dargestellt wird, hat eine Höhe und eine Breite und damit ein {{Glossary("aspect_ratio", "Seitenverhältnis")}}, das das Verhältnis zwischen Breite und Höhe beschreibt. Die natürlichen Dimensionen eines Medienobjekts, die seine Größe ohne jegliche Größenänderung, Skalierung, Zoom oder Ränder sind, werden als natürliche oder {{Glossary("intrinsic_size", "intrinsische Größe")}} bezeichnet. Die intrinsische Größe eines Elements wird durch das Element selbst bestimmt, nicht durch die Anwendung von Formatierungen wie [Box-Sizing](/de/docs/Web/CSS/CSS_box_sizing) oder das Festlegen von Rand-, Außen- oder Innenabständen.

Beim Entwickeln von Websites möchte man oft die Breite eines Elements als Prozentsatz der Ansichtshöhe oder der übergeordneten Containergröße festlegen und gleichzeitig die Höhe proportional ändern, um ein spezifisches Seitenverhältnis abhängig von der Größe der Ansicht beizubehalten. Für ersetzte Elemente, wie Bilder und Videos, ist die Beibehaltung eines spezifischen Seitenverhältnisses nicht nur notwendig für die Erstellung eines {{Glossary("responsive_web_design", "responsiven Webdesigns")}}, sondern auch ein wesentlicher Bestandteil der Bereitstellung einer guten Benutzererfahrung. Das Festlegen eines Seitenverhältnisses für ein Asset verhindert das Laden von [Jank](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images) – die Layoutverschiebung, die auftritt, wenn Medien geladen werden, nachdem die Seite bereits gezeichnet wurde, was zu einem Umbruch führt, weil der Platz für das Asset nicht reserviert wurde.

Mit CSS können Sie die Größe von ersetzten und nicht ersetzten Elementen basierend auf ihrem Seitenverhältnis anpassen. In diesem Leitfaden lernen wir die `aspect-ratio`-Eigenschaft kennen, besprechen Seitenverhältnisse für ersetzte und nicht ersetzte Elemente und untersuchen dann einige häufige Anwendungsfälle von Seitenverhältnissen.

## Wie die `aspect-ratio`-Eigenschaft funktioniert

Der CSS-Wert {{cssxref("aspect-ratio")}} definiert das bevorzugte Breite-zu-Höhe-Verhältnis eines Element-Containers. Der Wert ist entweder ein {{cssxref("ratio")}}, das Keyword `auto` oder eine durch Leerzeichen getrennte Kombination von beidem.

Das `<ratio>` ist das Verhältnis von Breite zu Höhe, in dieser Reihenfolge. Es wird durch zwei positive {{cssxref("number")}}-Werte dargestellt, die durch einen Schrägstrich (`/`) getrennt sind, oder durch eine einzelne `<number>`. Wenn eine einzelne Zahl verwendet wird, ist dies dasselbe wie das Schreiben des Verhältnisses als `<number> / 1`, was auch die Breite durch die Höhe geteilt bedeutet.

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

Die Wirkung des `auto`-Keywords hängt davon ab, ob das Element, auf das es angewendet wird, ein ersetztes Element ist oder nicht. Für ersetzte Elemente mit einem intrinsischen Seitenverhältnis bedeutet `auto`, dass das intrinsische Seitenverhältnis verwendet werden sollte. In allen anderen Fällen bedeutet der Wert `auto`, dass der Container kein bevorzugtes Seitenverhältnis hat. In beiden Fällen ist dies das Standardverhalten, als ob keine `aspect-ratio`-Eigenschaft angewendet worden wäre.

Wenn der Wert sowohl das `auto`-Keyword als auch einen `<ratio>`-Wert enthält, wie in `aspect-ratio: auto 2 / 3;` oder `aspect-ratio: 0.75 auto;`, wird der `auto`-Wert auf ersetzte Elemente mit einem natürlichen Seitenverhältnis angewendet und das angegebene Verhältnis von `Breite / Höhe` oder `<number>` wird als bevorzugtes Seitenverhältnis verwendet.

Sie werden das Wort "bevorzugt" in den obigen Definitionen bemerkt haben. Der `aspect-ratio`-Wert wird nicht immer angewendet, wenn er gesetzt wird. Die `aspect-ratio`-Eigenschaft legt ein "bevorzugtes" Seitenverhältnis fest und hat deshalb nur dann eine Wirkung, wenn mindestens eine der Box-Größen automatisch ist.

Wenn sowohl die Höhe als auch die Breite oder Inline- und Blockgrößen explizit festgelegt werden, wird der Wert der `aspect-ratio`-Eigenschaft ignoriert. In diesem Fall darf keine Dimension automatisch festgelegt werden – die bevorzugten Größen sind explizit festgelegt – sodass die `aspect-ratio`-Eigenschaft keine Wirkung hat. Wenn Sie sowohl die Inline- als auch Blockdimensionen deklarieren, haben diese Vorrang.

Bei ersetzten Elementen, wenn Sie keinen Wert (außer `auto`) für eine der Dimensionen explizit festlegen, werden beide auf ihre intrinsische Größe (irgendein `aspect-ratio`-Wert wird nicht angewendet) zurückgesetzt. Die `aspect-ratio` wird auf nicht ersetzte Elemente angewendet, die keine Dimension explizit festgelegt haben, da nicht ersetzte Elemente entweder {{Glossary("Intrinsic_Size", "intrinsisch")}} oder {{Glossary("Intrinsic_Size#extrinsic_sizing", "extrinsisch")}} dimensioniert sind und ihre Größe von ihrem Inhalt, Container, [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) Eigenschaften etc. erhalten.

Wenn ein Element auf der Seite gerendert wird, falls kein CSS angewendet wird und keine HTML-Größenattribute enthalten sind, rendert der Benutzeragent das Objekt in seiner natürlichen Größe.

## Anpassen von Seitenverhältnissen von ersetzten Elementen

Ersetzte Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden durch Medien ersetzt, die feste Dimensionen haben und daher ein intrinsisches Seitenverhältnis. Betrachten Sie ein Rasterbild, wie ein JPEG, PNG oder GIF. Wenn Sie ein Bild auf einer Seite platzieren und keine Höhe oder Breite festlegen, entweder über {{htmlelement("img")}}-Attribute oder mit CSS, wird es in seiner intrinsischen Größe angezeigt.

```html hidden live-sample___original
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg?image=good"
  alt="220 pixel square pride flag" />
```

{{EmbedLiveSample("original", "100", "230")}}

Dies ist ein `220px` quadratisches Bild ohne angewendetes CSS; es wird in seiner intrinsischen oder Standardgröße angezeigt.

Wenn ersetzter Inhalt automatisch dimensioniert ist oder Sie eine Größe nur für eine Dimension angeben, z.B. einen Wert für `width`, wird der Browser die andere Dimension, in diesem Fall die Höhe, automatisch ändern, während er das ursprüngliche Seitenverhältnis des Mediums beibehält.

In diesem Beispiel ist nur die {{cssxref("width")}} für das Bild festgelegt, sodass der Benutzeragent das Seitenverhältnis beibehält. Dasselbe Bild wird dreimal wiederholt, in verschiedenen Breiten angezeigt: `55px`, `110px` und in seiner natürlichen Größe von `220px` über den Wert [`width: auto`](/de/docs/Web/CSS/width).

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

Nur wenn Sie Größen für beide Dimensionen angeben, besteht die Gefahr, dass das ersetzte Element verzerrt wird. Zum Beispiel, indem Sie `width: 100vw;` und `height: 100vh;` auf ein Bild festlegen, erzeugen Sie ein variables Seitenverhältnis; das Bild wird entweder gestreckt oder zusammengedrückt erscheinen, wenn das Seitenverhältnis der Ansicht vom natürlichen Seitenverhältnis des Bildes abweicht.

In diesem Beispiel wird dasselbe Bild dreimal wiederholt, explizit mit demselben {{cssxref("height")}}-Wert (`110px`) aber unterschiedlichen {{cssxref("width")}}-Werten (`55px`, `110px`, und `220px`) dimensioniert.

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

Wir haben die Bilder absichtlich verzerrt, indem wir sowohl eine `height` als auch eine `width` festgelegt haben: wir haben das erste zusammengedrückt und das dritte gestreckt.

Wir hätten denselben verzerrten Effekt mit der CSS {{cssxref("aspect-ratio")}}-Eigenschaft erzeugen können, indem wir eine einzelne Dimension (nicht beide oder keine) setzen und einen Wert ungleich `1` (oder `1 / 1`) angeben. Dies wollen Sie wahrscheinlich nicht tun, aber es ist gut zu wissen, dass es möglich ist.

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

Wir haben eine einzelne Dimension deklariert; `100vh` ist die volle Höhe der Beispiel-{{htmlelement("iframe")}}-Ansicht. Damit `aspect-ratio` auf ersetzte Elemente anwendbar ist, muss nur eine Dimension festgelegt sein. Das Festlegen beider oder keines funktioniert nicht.

### Ersetzen von Elementen in ihrem Behälter einpassen

Um ein ersetztes Element in die Dimensionen seines Behälters einzupassen, während das intrinsische Seitenverhältnis beibehalten wird, setzen Sie den {{cssxref("object-fit")}}-Eigenschaftswert auf `cover` oder `contain`. Dies wird das ersetzte Element skalieren und entweder zuschneiden, um den Behälter zu "füllen", oder es in kleinerer Größe anzeigen, vollständig "eingefasst" innerhalb des Behälters.

In diesem Beispiel wird das quadratische Bild in ein Raster mit drei Elementen eingefügt, jedes mit einem Seitenverhältnis von `5 / 2`.

Zuerst erstellen wir einen Container mit drei Elementen, jedes mit einem Bild darin:

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

Als Nächstes legen wir den Container als Raster fest, wobei jedes Element ein Seitenverhältnis von `2.5` (`5/2`) und eine Mindestbreite von `150px` hat. Daher beträgt die Mindesthöhe `60px`. Die endgültige Breite und Höhe basieren jedoch auf der Breite des Beispiel-iframe, die auf der Größe Ihrer Ansicht basiert:

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

Nur das erste Bild wird verzerrt (gestreckt). Wir hätten den `fill`-Wert von `object-fit` verwenden können, um denselben Effekt zu erzeugen. Das `cover`-Bild spannt die volle Breite des Containers und wird vertikal zentriert und zugeschnitten, um in den Container zu passen. Der `contain`-Wert stellt sicher, dass das Bild innerhalb des Containers enthalten ist, horizontal zentriert und verkleinert, um zu passen.

## Festlegen von Seitenverhältnissen für nicht ersetzte Elemente

Während das Seitenverhältnis eines ersetzten Elements standardmäßig beibehalten wird, ändert das Einstellen der intrinsischen Größe eines nicht ersetzten Elements normalerweise sein Seitenverhältnis. Zum Beispiel kann ein identisches Element auf einem Breitbildschirm oder in einem breiten übergeordneten Container als drei Zeilen erscheinen, aber auf einem schmalen Bildschirm oder Container als acht Zeilen.

In diesem Beispiel wird dasselbe Zitat in `200px` und `600px` breiten Containern angezeigt, und ein Quadrat wird mit einer Höhe, die seiner `200px` Breite entspricht, festgelegt:

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

Um das Problem beim Festlegen des Seitenverhältnisses eines nicht ersetzten Elements über Größenabmessungen hervorzuheben, wechseln Sie zwischen dem {{cssxref("overflow")}}-Eigenschaftswert `auto` und `visible`.

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

Während es möglich ist, ein Seitenverhältnis bei nicht ersetzten Elementen durch Einstellen beider Dimensionen und Verbergen des überlappenden Inhalts zu definieren, bietet die CSS-{{cssxref("aspect-ratio")}}-Eigenschaft explizite Unterstützung für Seitenverhältnisse. Das bedeutet, dass ein spezifisches Seitenverhältnis festgelegt werden kann, auch wenn die Inhalt- oder Bildschirmgrößen unbekannt sind.

Im nächsten Beispiel rendern wir quadratische Boxen unabhängig von der Breite des Textes, indem wir `aspect ratio: 1` auf {{htmlelement("blockquote")}}, einem nicht ersetzten Element, setzen:

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

Jede Box hat eine definierte Dimension: die {{cssxref("inline-size")}}, die in horizontalen Sprachen die Breite angibt, wird auf {{cssxref("max-content")}} gesetzt, was die Größe auf die Breite einstellt, die notwendig ist, um den Inhalt ohne Umbruch zu umfassen. Die zweite Dimension, in diesem Fall die {{cssxref("block-size")}} oder {{cssxref("height")}}, wird auf die gleiche Länge wie die erste Dimension gesetzt. Dies wird mit der {{cssxref("aspect-ratio")}}-Eigenschaft erreicht. Wir haben das gewünschte Breite-zu-Höhe-Verhältnis des Element-Containers auf `1` festgelegt, was dasselbe ist wie `1 / 1`, ein Quadrat. Dies setzt die Blockrichtung so, dass sie zur Breite des Elements passt, ohne die {{cssxref("height")}}- oder {{cssxref("block-size")}}-Eigenschaften zu verwenden.

In diesen Beispielen wurde eine Größe explizit auf dem Element selbst festgelegt. Beim Arbeiten mit nicht ersetzten Elementen kommt das Seitenverhältnis ins Spiel, wenn keine Größendimension explizit festgelegt ist.

### Erstellen eines Kreises basierend auf der Containergröße

Die Inline-Größe von nicht ersetzten Block-Elementen ist die Größe ihres [Inhaltsfeldes](/de/docs/Web/CSS/box-edge#content-box). Da sie standardmäßig eine Größe haben, müssen sie keine explizite Größe für die `aspect-ratio`-Eigenschaft festlegen.

In diesem Beispiel haben wir ein Container-{{htmlelement("div")}}, das `200px` breit ist, was `5px` Polsterung auf jeder Seite einbezieht. Daher beträgt die Inline-Größe des Inhaltsfeldes `190px`. Ohne eine Höhe oder Breite auf dem verschachtelten {{htmlelement("p")}}-Element zu setzen, wissen wir, dass seine Inline-Größe `190px` ist. Mit `aspect-ratio: 1` festgelegt, wird der Absatz `190px` hoch sein, es sei denn, er hat sichtbaren überlappendem Inhalt, der ihn größer macht (was er nicht hat).

Die Höhe des `<div>`-Elements ist nicht explizit festgelegt, enthält aber den `190px` hohen Absatz, die `5px` Polsterung daran oben und unten und die kombinierte Höhe der Standardober- und Untermargen von `<p>`. Daher ist es höher als es breit ist. Beide Elemente haben einen {{cssxref("border-radius")}} von `50%`, so dass der Container ein Oval ist, während das Kind, mit einem `aspect-ratio` von `1` aber ohne explizit definierte Inline- oder Blockgrößen, ein Kreis ist.

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

Um das `<div>` zu einem Kreis zu machen, können wir die `height` und `width` auf denselben Wert setzen, oder `aspect-ratio: 1` einstellen und `overflow` auf `auto` oder `hidden` setzen. Alternativ können wir einfach die Margen auf dem Absatz mit [`margin-block: 0`](/de/docs/Web/CSS/margin-block) entfernen. Beide Optionen sind unten gezeigt.

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

Lassen Sie uns einige Situationen betrachten, in denen Sie `aspect-ratio` verwenden können, um einige häufige Herausforderungen beim Erstellen von responsiven Designs zu bewältigen.

### Externe Assets responsiv machen

Alles Inhalt sollte responsiv sein, selbst wenn dieser Inhalt aus Einbettungen Dritter besteht, wie Videos von TikTok, YouTube oder Instagram. Der Code-Schnipsel, den Sie einfügen, um diese externen Videos einzubetten, erstellt im Allgemeinen ein {{htmlelement("iframe")}}.

Während ein {{htmlelement("video")}}-Element normalerweise das Seitenverhältnis seiner Mediendatei übernimmt, fehlt `iframe`-Elementen diese Fähigkeit. Dies stellt die Herausforderung dar, sicherzustellen, dass das `<iframe>` responsiv ist und gleichzeitig immer das Seitenverhältnis des enthaltenen Videos beibehält. Eine der Techniken, die wir verwenden können, ist, die Breite des iframes auf `100%` seines Containers oder `100vw` zu setzen, um sicherzustellen, dass es die Breite der Ansicht unabhängig von der Größe der Ansicht einnimmt. Das Festlegen einer festen Höhe könnte jedoch das Video strecken oder zusammendrücken. Stattdessen setzen wir das `aspect-ratio` auf den Container des Videos, was es auf dasselbe Seitenverhältnis wie das Video ausrichtet. Problem gelöst!

Zum Kontext: Das Standardseitenverhältnis von YouTube-Videos ist 16:9, wenn sie auf einem Desktop-Computer oder Laptop angezeigt werden, während TikTok- und Instagram-Videos ein Seitenverhältnis von 9:16 haben.

```css
.youtube {
  aspect-ratio: 16/9;
}

.instagram,
.tiktok {
  aspect-ratio: 9/16;
}
```

Wir können das `aspect-ratio`-Feature innerhalb der {{cssxref("@media")}}-Abfrage zusammen mit der `aspect-ratio`-Eigenschaft verwenden, um die Größe sowohl des iframes als auch des darin enthaltenen Videos anzupassen. Dies stellt sicher, dass der Videoinhalt unabhängig von der Viewportgröße immer so groß wie möglich ist – entweder die volle Breite oder Höhe der Ansicht einnehmend – während ein spezifisches Seitenverhältnis beibehalten wird.

Wir können die im Landformat orientierten YouTube-Videos so einstellen, dass sie so breit wie die Ansicht sind, und die im Hochformat orientierten TikTok- und Instagram-Video-iframes so, dass sie so hoch wie die Ansicht sind. Wenn das Seitenverhältnis einer Ansicht breiter als 16:9 ist, setzen wir das YouTube-Video auf die Höhe der Ansicht. Ist der Viewport schmaler als 9:16, setzen wir sowohl Instagram- als auch TikTok-Videos auf die Breite der Ansicht.

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

Ein Raster aus quadratischen Zellen kann durch das Festlegen fester [Spurbreiten](/de/docs/Web/CSS/grid-template-columns) erstellt werden, wodurch sichergestellt wird, dass jede Zeile der Größe des Spuren-Tracks entspricht. Wenn jedoch responsive Gitternetze unter Verwendung von `auto-fill` erstellt werden, um so viele Spur Tracks wie möglich innerhalb des Containers einzupassen, ist die Breite jedes Elements unsicher. Dies erschwert es, die passende Höhe für die Erstellung quadratischer Elemente zu bestimmen.

Indem wir ein Seitenverhältnis auf den Elementen festlegen, können wir sicherstellen, dass, wenn die Gitterelemente ausgelegt sind, jedes Gitterelement so hoch wie breit sein wird, wodurch quadratische Gitterelemente unabhängig von den Dimensionen des Containers geschaffen werden.

In diesem Beispiel von quadratischen Gittern, werden die Rastersätze automatisch dimensioniert, wobei ihre Größe von den Elementen übernommen wird. Jedes Element wird mindestens `95px` breit sein, könnte aber viel breiter sein. Unabhängig von der Breite wird jedes Element ein Quadrat sein, wobei die Höhe durch das `aspect-ratio` festgelegt wird, um seiner Breite zu entsprechen.

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

Damit der Inhalt eines Rasterelements nicht über die bevorzugte Höhe, die durch das `aspect-ratio` eingestellt wird, hinauswächst, setzen Sie die {{cssxref("min-height")}} auf `0` und den {{cssxref("overflow")}} auf einen anderen Wert als `visible`. Dies funktioniert für intrinsisch dimensionierte Inhalte. Wenn Sie Inhalte haben, die von Natur aus größer als der verfügbare Platz sind, setzen Sie diesen Inhalt so, dass er nicht größer als das Gitterelement ist, indem Sie die {{cssxref("max-height")}} (oder {{cssxref("max-width")}}, abhängig von den Inhalten) auf `100%` setzen.

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

- [CSS Box-Sizing](/de/docs/Web/CSS/CSS_box_sizing)-Modul
