---
title: Verständnis und Festlegen von Seitenverhältnissen
slug: Web/CSS/CSS_box_sizing/Understanding_aspect-ratio
l10n:
  sourceCommit: b64538dc77e9a6181b882bd54bdbb307c1430ba8
---

{{CSSRef}}

Jedes Element, das auf einer Seite dargestellt wird, hat eine Höhe und Breite und entsprechend ein {{Glossary("aspect_ratio", "Seitenverhältnis")}}, das das Verhältnis zwischen Breite und Höhe darstellt. Die natürlichen Dimensionen eines Medienobjekts, also dessen Größe ohne jegliche Größenanpassung, Skalierung, Zoom oder angelegte Ränder, werden als seine natürliche oder {{Glossary("intrinsic_size", "intrinsische Größe")}} bezeichnet. Die intrinsische Größe eines Elements wird durch das Element selbst bestimmt, nicht durch die Anwendung von Formatierungen wie [Box Sizing](/de/docs/Web/CSS/CSS_box_sizing) oder das Festlegen von Rand-, Außen- oder Innenabständen.

Bei der Entwicklung von Websites möchten Sie oft die Breite eines Elements auf einen Prozentsatz der Größe des Viewports oder des übergeordneten Containers festlegen und die Höhe proportional ändern, um ein spezifisches Seitenverhältnis abhängig von der Größe des Viewports beizubehalten. Für ersetzte Elemente, wie Bilder und Videos, ist das Beibehalten eines spezifischen Seitenverhältnisses nicht nur notwendig, um {{Glossary("responsive_web_design", "Responsive Webdesign")}} zu erstellen, sondern auch ein wesentlicher Bestandteil, um eine gute Benutzererfahrung zu gewährleisten. Das Festlegen eines Seitenverhältnisses für eine Ressource verhindert Lade-[Ruckler](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)—das Layout-Verschieben, das auftritt, wenn Medien geladen werden, nachdem die Seite bereits gerendert wurde, und eine Neuverteilung erfordert, da der Platz für die Ressource nicht reserviert wurde.

Mit CSS können Sie die Größe von ersetzten und nicht ersetzten Elementen basierend auf ihrem Seitenverhältnis anpassen. In diesem Leitfaden lernen wir die `aspect-ratio`-Eigenschaft, besprechen Seitenverhältnisse für ersetzte und nicht ersetzte Elemente und betrachten einige gängige Anwendungsfälle von Seitenverhältnissen.

## Wie die Eigenschaft `aspect-ratio` funktioniert

Der CSS-Wert {{cssxref("aspect-ratio")}} definiert das bevorzugte Breite-zu-Höhe-Verhältnis des Box-Modells eines Elements. Der Wert ist entweder ein {{cssxref("ratio")}}, das Schlüsselwort `auto` oder eine durch Leerzeichen getrennte Kombination aus beidem.

Das `<ratio>` ist das Verhältnis von Breite und Höhe, in dieser Reihenfolge. Es wird durch zwei positive {{cssxref("number")}}-Werte dargestellt, die durch einen Schrägstrich (`/`) oder eine einzelne `<number>` getrennt sind. Wenn eine einzelne Zahl verwendet wird, entspricht dies der Schreibweise des Verhältnisses als `<number> / 1`, was auch der Breite geteilt durch die Höhe entspricht.

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

Die Auswirkung des `auto`-Schlüsselworts hängt davon ab, ob das Element, auf das es angewendet wird, ein ersetztes Element ist oder nicht. Für ersetzte Elemente mit einem intrinsischen Seitenverhältnis bedeutet `auto`, dass das intrinsische Seitenverhältnis verwendet werden soll. In allen anderen Fällen bedeutet der Wert `auto`, dass die Box kein bevorzugtes Seitenverhältnis hat. In beiden Fällen ist dies das Standardverhalten, als ob keine `aspect-ratio`-Eigenschaft angewendet wurde.

Wenn der Wert sowohl das Schlüsselwort `auto` als auch einen `<ratio>`-Wert enthält, wie etwa `aspect-ratio: auto 2 / 3;` oder `aspect-ratio: 0.75 auto;`, wird der `auto`-Wert auf ersetzte Elemente mit einem natürlichen Seitenverhältnis angewendet, und das angegebene Verhältnis von `width / height` oder `<number>` wird als bevorzugtes Seitenverhältnis verwendet.

Sie werden bemerkt haben, dass in den obigen Definitionen das Wort "bevorzugt" verwendet wurde. Der Wert der `aspect-ratio`-Eigenschaft wird nicht immer angewendet, wenn er gesetzt wurde. Die Eigenschaft definiert ein "bevorzugtes" Seitenverhältnis, das nur dann Wirkung zeigt, wenn mindestens eine der Dimensionen der Box automatisch festgelegt ist.

Wenn sowohl die Höhe als auch die Breite oder die Inline- und Blockgrößen explizit festgelegt sind, wird der Wert der `aspect-ratio`-Eigenschaft ignoriert. In diesem Fall darf keine Dimension automatisch festgelegt werden - die bevorzugten Größen sind explizit definiert - weshalb die `aspect-ratio`-Eigenschaft keine Wirkung hat. Wenn Sie sowohl die Inline- als auch die Blockdimensionen angeben, haben diese Vorrang.

Bei ersetzten Elementen, wenn Sie für keine Dimension (außer `auto`) einen Wert explizit festlegen, nehmen beide ihre intrinsische Größe an (jede `aspect-ratio`-Angabe wird nicht angewendet). Die `aspect-ratio` wird auf nicht ersetzte Elemente angewendet, die keine Dimension explizit festgelegt haben, da nicht ersetzte Elemente entweder {{Glossary("Intrinsic_Size", "intrinsisch")}} oder {{Glossary("Intrinsic_Size#extrinsic_sizing", "extrinsisch")}} dimensioniert sind, wobei sie ihre Größe von ihrem Inhalt, ihrem Container, ihren [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)-Eigenschaften usw. beziehen.

Wenn ein Element auf der Seite gerendert wird und weder CSS angewendet noch HTML-Größenattribute angegeben werden, rendert der User-Agent das Objekt in seiner natürlichen Größe.

## Anpassen des Seitenverhältnisses ersetzter Elemente

Ersetzte Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden durch Medien mit festgelegten Dimensionen ersetzt und haben daher ein intrinsisches Seitenverhältnis. Betrachten Sie ein Rasterbild wie ein JPEG, PNG oder GIF. Wenn Sie ein Bild auf einer Seite platzieren und weder Höhe noch Breite über {{htmlelement("img")}}-Attribute oder CSS festlegen, wird es in seiner intrinsischen Größe angezeigt.

<!-- temporär diese Bilder ignorieren. Vorschau-Test -->

```html hidden live-sample___original
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg?image=good"
  alt="220 pixel square pride flag" />
```

{{EmbedLiveSample("original", "100", "230")}}

Dies ist ein `220px` großes quadratisches Bild ohne angewendetes CSS; es wird in seiner intrinsischen oder Standardgröße angezeigt.

Wenn ersetzter Inhalt automatisch dimensioniert ist oder Sie nur für eine Dimension eine Größe definieren, wie z. B. das Festlegen eines Werts für `width`, passt der Browser automatisch die andere Dimension an, in diesem Fall die Höhe, und behält dabei das ursprüngliche Seitenverhältnis des Mediums bei.

In diesem Beispiel wird nur die {{cssxref("width")}} für das Bild festgelegt, sodass der User-Agent sein Seitenverhältnis beibehält. Dasselbe Bild wird dreimal wiederholt und mit unterschiedlichen Breiten angezeigt: `55px`, `110px` und in seiner natürlichen Größe von `220px` mit dem Wert [`width: auto`](/de/docs/Web/CSS/width).

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

Nur wenn Sie für beide Dimensionen Größen angeben, besteht das Risiko, das ersetzte Element zu verzerren. Beispielsweise erzeugt das Festlegen von `width: 100vw;` und `height: 100vh;` auf ein Bild ein variables Seitenverhältnis; das Bild erscheint entweder gestreckt oder gestaucht, wenn das Seitenverhältnis des Viewports vom natürlichen Seitenverhältnis des Bildes abweicht.

In diesem Beispiel wird dasselbe Bild dreimal wiederholt, explizit mit demselben {{cssxref("height")}}-Wert (`110px`) und unterschiedlichen {{cssxref("width")}}-Werten (`55px`, `110px`, und `220px`) dimensioniert.

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

Wir haben die Bilder absichtlich verzerrt, indem wir sowohl eine `height` als auch eine `width` festgelegt haben: wir haben das eine gestaucht und das andere gedehnt.

Diesen Verzerreffekt hätten wir mit der CSS-Eigenschaft {{cssxref("aspect-ratio")}} erzeugen können, indem wir eine einzige Dimension (nicht beide oder keine) festgelegt haben und mit einem anderen Wert als `1` (oder `1 / 1`). Wahrscheinlich möchten Sie das nicht tun, aber es ist gut zu wissen, dass es möglich ist.

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

Wir haben eine einzelne Dimension deklariert; `100vh` ist die volle Höhe des Beispiel-{{htmlelement("iframe")}}-Viewports. Damit die `aspect-ratio` für ersetzte Elemente anwendbar ist, darf nur eine Dimension festgelegt sein. Das Festlegen beider oder keines funktioniert nicht.

### Anpassung ersetzter Elemente an ihre Container

Um ein ersetztes Element an die Abmessungen seines Containers anzupassen und dabei sein intrinsisches Seitenverhältnis zu bewahren, setzen Sie den Wert der {{cssxref("object-fit")}}-Eigenschaft auf `cover` oder `contain`. Dies ändert die Größe des ersetzten Elements und schneidet es entweder so zurecht, dass es den Container "bedeckt" oder zeigt es in einer kleineren Größe vollständig "enthalten" an.

In diesem Beispiel wird das quadratische Bild in ein Raster mit drei Elementen eingesetzt, wobei jedes ein Seitenverhältnis von `5 / 2` hat.

Zunächst erstellen wir einen Container mit drei Elementen, wobei jedes ein Bild enthält:

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

Anschließend bestimmen wir, dass der Container ein Raster ist, in dem jedes Element ein Seitenverhältnis von `2.5` (`5/2`) mit einer minimalen Breite von `150px` hat. Folglich wird die minimale Höhe `60px` betragen. Die endgültige Breite und Höhe werden jedoch durch die Breite des Beispiels-iframe bestimmt, die auf der Größe Ihres Viewports basiert:

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

Nun setzen wir die Größe der Bilder und legen die `object-fit`-Eigenschaft für die letzten beiden Bilder fest:

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

Nur das erste Bild ist verzerrt (gestreckt). Wir hätten denselben Effekt mit dem Wert `fill` der `object-fit`-Eigenschaft erzielen können. Das `cover`-Bild erstreckt sich über die gesamte Breite des Containers, ist vertikal zentriert und wird zugeschnitten, um in den Container zu passen. Der Wert `contain` stellt sicher, dass das Bild im Container enthalten ist, horizontal zentriert und verkleinert wird, um hineinzupassen.

## Festlegen von Seitenverhältnissen für nicht ersetzte Elemente

Während das Seitenverhältnis eines ersetzten Elements standardmäßig beibehalten wird, ändert die Anpassung der intrinsischen Größe eines nicht ersetzten Elements normalerweise dessen Seitenverhältnis. Zum Beispiel kann derselbe Inhalt auf einem Breitbildschirm oder in einem breiten übergeordneten Container als drei Zeilen erscheinen, aber auf einem schmalen Bildschirm oder in einem schmalen Container als acht Zeilen.

In diesem Beispiel wird dasselbe Zitat in Containern mit `200px` und `600px` Breite dargestellt, und ein Quadrat wird mit einer Höhe gesetzt, die seiner `200px`-Breite entspricht:

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

Um das Problem hervorzuheben, ein Seitenverhältnis für ein nicht ersetztes Element über Abmessungen festzulegen, wechseln Sie die {{cssxref("overflow")}}-Eigenschaft zwischen `auto` und `visible`.

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

Obwohl es möglich ist, ein Seitenverhältnis für nicht ersetzte Elemente festzulegen, indem beide Dimensionen eingestellt und der überfließende Inhalt verborgen wird, bietet die CSS-Eigenschaft {{cssxref("aspect-ratio")}} explizite Unterstützung für Seitenverhältnisse. Dies bedeutet, dass ein spezifisches Seitenverhältnis festgelegt werden kann, selbst wenn die Inhalte oder Bildschirmgrößen unbekannt sind.

Im nächsten Beispiel rendern wir quadratische Boxen, unabhängig von der Breite des Textes, indem wir `aspect ratio: 1` auf {{htmlelement("blockquote")}} anwenden, ein nicht ersetztes Element:

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

Jede Box hat eine Dimension definiert: die {{cssxref("inline-size")}} (was in horizontalen Sprachen die Breite ist) wird auf {{cssxref("max-content")}} gesetzt, wodurch die Größe so breit wie nötig sein wird, um den Inhalt ohne Umbruch zu füllen. Die zweite Dimension, in diesem Fall die {{cssxref("block-size")}} oder {{cssxref("height")}}, wird so gesetzt, dass sie dieselbe Länge wie die erste Dimension hat. Dies wird mit der Eigenschaft {{cssxref("aspect-ratio")}} erreicht. Wir haben das gewünschte Breite-zu-Höhe-Verhältnis der Elementbox auf `1` gesetzt, was dasselbe wie `1 / 1`, ein Quadrat, bedeutet. Dies stimmt die Blockrichtung mit der Breite des Elements ab, ohne die {{cssxref("height")}}- oder {{cssxref("block-size")}}-Eigenschaften zu verwenden.

In diesen Beispielen wurde eine Größe explizit auf dem Element selbst festgelegt. Bei nicht ersetzten Elementen tritt das Seitenverhältnis in Kraft, wenn keine Maßdimension explizit festgelegt ist.

### Ein Kreis basierend auf der Containergröße erstellen

Die Inline-Größe von nicht ersetzten Blocklevel-Elementen entspricht der Größe ihres [Inhaltsbereichs](/de/docs/Web/CSS/box-edge#content-box) des Containers. Da sie standardmäßig eine Größe haben, müssen keine expliziten Größen für die `aspect-ratio`-Eigenschaft definiert werden, damit sie funktioniert.

In diesem Beispiel haben wir einen Container {{htmlelement("div")}}, der `200px` breit ist, mit jeweils `5px` Padding an jeder Seite. Folglich beträgt die Inline-Größe des Inhaltsbereichs `190px`. Ohne das Festlegen einer Höhe oder Breite auf dem verschachtelten {{htmlelement("p")}}-Element wissen wir, dass seine Inline-Größe `190px` beträgt. Mit gesetztem `aspect-ratio: 1` wird der Absatz `190px` hoch sein, sofern kein sichtbarer Überlauf vorliegt, der ihn größer macht (was in diesem Fall nicht der Fall ist).

Die Höhe des `<div>`-Elements ist nicht explizit festgelegt, aber es enthält den `190px` hohen Absatz, `5px` Padding oben und unten, sowie die kombinierten Höhen der Standardabstände oben und unten von `<p>`. Dadurch ist der Container höher als breit. Beide Elemente haben einen {{cssxref("border-radius")}} von `50%`, daher ist der Container ein Oval, während das Kind, mit einem `aspect-ratio` von `1`, aber ohne explizit definierte Inline- oder Blockdimensionen, ein Kreis ist.

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

Um das `<div>` zu einem Kreis zu machen, können wir die `height` und `width` auf denselben Wert setzen oder `aspect-ratio: 1` und `overflow` auf `auto` oder `hidden` festlegen. Alternativ können wir die Abstände des Absatzes mit [`margin-block: 0`](/de/docs/Web/CSS/margin-block) entfernen. Beide Optionen werden unten dargestellt.

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

## Gewöhnliche Anwendungsfälle für `aspect-ratio`

Schauen wir uns einige gängige Situationen an, in denen Sie `aspect-ratio` verwenden können, um Herausforderungen bei der Erstellung von responsiven Designs zu lösen.

### Externe Ressourcen responsiv machen

Alle Inhalte sollten responsiv sein, auch wenn es sich um eingebettete Inhalte von Drittanbietern handelt, wie Videos von TikTok, YouTube oder Instagram. Der Code-Snippet, den Sie einfügen, um diese externen Videos einzubetten, erstellt im Allgemeinen ein {{htmlelement("iframe")}}.

Während ein {{htmlelement("video")}}-Element normalerweise das Seitenverhältnis seiner Mediendatei übernimmt, fehlt Iframeselementen diese Fähigkeit. Das stellt die Herausforderung dar, sicherzustellen, dass das `<iframe>` responsiv ist und dennoch immer das Seitenverhältnis des darin enthaltenen Videos beibehält. Eine der Techniken, die wir verwenden können, besteht darin, die Breite des iframes auf `100%` seines Containers oder `100vw`, um die Breite des Viewports unabhängig von der Größe des Viewports abzugleichen. Wenn jedoch eine feste Höhe festgelegt ist, könnte das Video gestreckt oder gestaucht werden. Stattdessen setzen wir das `aspect-ratio` des Containers des Videos, so dass es mit demselben Seitenverhältnis wie das Video übereinstimmt. Problem gelöst!

Zur Veranschaulichung: Das Standard-Seitenverhältnis von YouTube-Videos beträgt 16:9, wenn sie auf einem Desktop-Computer oder Laptop betrachtet werden, während TikTok- und Instagram-Videos ein Seitenverhältnis von 9:16 haben.

```css
.youtube {
  aspect-ratio: 16/9;
}

.instagram,
.tiktok {
  aspect-ratio: 9/16;
}
```

Wir können das `aspect-ratio`-Feature innerhalb der {{cssxref("@media")}}-Abfrage zusammen mit der `aspect-ratio`-Eigenschaft verwenden, um die Größe des Iframes und des darin enthaltenen Videos anzupassen. Dies stellt sicher, dass der Videoinhalt immer so groß wie möglich ist - entweder die volle Breite oder Höhe des Viewports einnimmt, unabhängig von der Größe des Viewports - und dabei ein bestimmtes Seitenverhältnis beibehält.

Wir können die landschaftsorientierten YouTube-Videos an die Breite des Viewports anpassen, und die hochformatigen TikTok- und Instagram-Videos werden an die Höhe des Viewports angepasst. Wenn das Seitenverhältnis eines Viewports breiter als 16:9 ist, setzen wir die YouTube-Videos auf die Höhe des Viewports. Wenn der Viewport schmaler als 9:16 ist, setzen wir sowohl Instagram- als auch TikTok-Videos auf die Breite des Viewports.

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

### Erstellung quadratischer Rasterzellen

Ein Raster aus quadratischen Zellen kann erstellt werden, indem feste [Spalten-Track-Größen](/de/docs/Web/CSS/grid-template-columns) definiert werden, die sicherstellen, dass jede Zeile die Größe des Spalten-Tracks übernimmt. Wenn jedoch responsives Raster mit `auto-fill` erstellt wird, um so viele Spalten-Tracks wie möglich im Container zu platzieren, wird die Breite jedes Elements unsicher. Das macht es schwierig, die passende Höhe für die Erstellung quadratischer Elemente zu bestimmen.

Indem Sie ein Seitenverhältnis auf den Elementen setzen, können Sie sicherstellen, dass, wenn die Rasterelemente angeordnet werden, jedes Rasterelement so hoch wie breit ist und somit quadratische Rasterelemente unabhängig von den Abmessungen des Containers entstehen.

In diesem Beispiel quadratischer Rasterelemente sind die Raster-Tracks automatisch dimensioniert, wobei ihre Größe von den Elementen abgeleitet wird. Jedes Element wird mindestens `95px` breit sein, könnte jedoch deutlich breiter sein. Unabhängig von der Breite wird jedes Element ein Quadrat, wobei die Höhe durch das `aspect-ratio` so bestimmt wird, dass es seiner Breite entspricht.

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

Damit der Inhalt eines Rasterelements die bevorzugte Höhe, die durch das `aspect-ratio` festgelegt wird, nicht überschreitet, setzen Sie die {{cssxref("min-height")}} auf `0` und den {{cssxref("overflow")}} auf einen anderen Wert als `visible`. Dies funktioniert für intrinsisch dimensionierte Inhalte. Wenn Sie Inhalte haben, die intrinsisch größer als der verfügbare Platz sind, stellen Sie sicher, dass diese Inhalte nicht größer als das Rasterelement sind, indem Sie die {{cssxref("max-height")}} (oder {{cssxref("max-width")}}, je nach Inhalt) auf `100%` setzen.

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
