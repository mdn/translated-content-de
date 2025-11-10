---
title: Verständnis und Festlegung von Seitenverhältnissen
slug: Web/CSS/CSS_box_sizing/Understanding_aspect-ratio
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Jedes Element, das auf der Seite gerendert wird, hat eine Höhe und eine Breite und damit ein {{Glossary("aspect_ratio", "Seitenverhältnis")}}, welches das Verhältnis zwischen Breite und Höhe ist. Die natürlichen Abmessungen eines Medienobjekts, also seine Größe ohne jegliche Größenanpassung, Skalierung, Zoom oder angewandte Rahmen, bezeichnet man als seine natürliche oder {{Glossary("intrinsic_size", "intrinsische Größe")}}. Die intrinsische Größe eines Elements wird durch das Element selbst bestimmt und nicht durch das Anwenden von Formatierungen wie [Boxsizing](/de/docs/Web/CSS/Guides/Box_sizing) oder das Setzen von Rahmen-, Rand- oder Polsterbreiten.

Beim Entwickeln von Websites möchte man oft die Breite eines Elements als Prozentsatz der Größe des Ansichtsfensters oder des übergeordneten Containers festlegen und die Höhe proportional ändern, um so ein spezifisches Seitenverhältnis je nach Größe des Ansichtsfensters beizubehalten. Für ersetzte Elemente wie Bilder und Videos ist es nicht nur notwendig, ein spezifisches Seitenverhältnis aufrechtzuerhalten, um ein {{Glossary("responsive_web_design", "responsives Webdesign")}} zu erstellen, sondern es ist auch ein wesentlicher Bestandteil eines guten Nutzererlebnisses. Die Festlegung des Seitenverhältnisses eines Assets verhindert Lade- [Ruckeln](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images) — die Layoutverschiebung, die auftritt, wenn Medien geladen werden, nachdem die Seite bereits gezeichnet wurde, was zu einem Neufluss führt, weil der Platz für das Asset nicht reserviert wurde.

Mit CSS können Sie die Größe von ersetzten und nicht ersetzten Elementen basierend auf ihrem Seitenverhältnis anpassen. In diesem Leitfaden lernen wir die Eigenschaft `aspect-ratio` kennen, diskutieren Seitenverhältnisse für ersetzte und nicht ersetzte Elemente und betrachten anschließend einige gängige Anwendungsfälle von Seitenverhältnissen.

## Funktion der `aspect-ratio`-Eigenschaft

Der Wert der CSS {{cssxref("aspect-ratio")}}-Eigenschaft definiert das bevorzugte Breite-zu-Höhe-Verhältnis des Rahmens eines Elements. Der Wert ist entweder ein {{cssxref("ratio")}}, das Schlüsselwort `auto` oder eine durch Leerzeichen getrennte Kombination aus beidem.

Das `<ratio>` ist das Verhältnis von Breite zu Höhe, in dieser Reihenfolge. Es wird durch zwei positive {{cssxref("number")}}-Werte dargestellt, die durch einen Schrägstrich (`/`) getrennt sind, oder durch eine einzelne `<number>`. Wenn eine einzelne Zahl verwendet wird, entspricht dies dem Schreiben des Verhältnisses als `<number> / 1`, was auch die Breite geteilt durch die Höhe ist.

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

Die Auswirkung des `auto`-Schlüsselworts hängt davon ab, ob das Element, auf das es angewendet wird, ein ersetztes Element ist oder nicht. Bei ersetzten Elementen mit einem intrinsischen Seitenverhältnis bedeutet `auto`, dass das intrinsische Seitenverhältnis verwendet werden sollte. In allen anderen Fällen bedeutet der `auto`-Wert, dass der Rahmen kein bevorzugtes Seitenverhältnis hat. In beiden Fällen ist dies das Standardverhalten, als ob keine `aspect-ratio`-Eigenschaft angewendet wäre.

Wenn der Wert sowohl das `auto`-Schlüsselwort als auch einen `<ratio>`-Wert enthält, wie in `aspect-ratio: auto 2 / 3;` oder `aspect-ratio: 0.75 auto;`, wird der `auto`-Wert auf ersetzte Elemente mit einem natürlichen Seitenverhältnis angewendet, und das angegebene Verhältnis von `width / height` oder `<number>` wird als bevorzugtes Seitenverhältnis verwendet.

Sie werden bemerkt haben, dass in den obigen Definitionen das Wort "bevorzugt" verwendet wird. Der `aspect-ratio`-Wert wird nicht immer angewendet, wenn er gesetzt ist. Die `aspect-ratio`-Eigenschaft legt ein "bevorzugtes" Seitenverhältnis fest, so dass sie nur einen Effekt hat, wenn mindestens eine der Boxgrößen automatisch ist.

Wenn sowohl die Höhe als auch die Breite bzw. die Block- und Inline-Größen explizit festgelegt sind, wird der Wert der `aspect-ratio`-Eigenschaft ignoriert. In diesem Fall darf keine Dimension automatisch dimensioniert werden – die bevorzugten Größen sind explizit festgelegt – daher hat die `aspect-ratio`-Eigenschaft keine Wirkung. Wenn Sie sowohl die Inline- als auch die Blockdimensionen deklarieren, haben diese Vorrang.

Bei ersetzten Elementen, wenn Sie keinen Wert (außer `auto`) für eine der Dimensionen explizit festlegen, werden beide auf ihre intrinsische Größe zurückgesetzt (jeder `aspect-ratio`-Wert wird nicht angewendet). Die `aspect-ratio` wird auf nicht ersetzte Elemente angewendet, die keine explizit festgelegte Dimension haben, da nicht ersetzte Elemente entweder {{Glossary("Intrinsic_Size", "intrinsisch")}} oder {{Glossary("Extrinsic_size", "extrinsisch")}} dimensioniert sind, wobei sie ihre Größe aus ihrem Inhalt, Container, [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)-Eigenschaften usw. erhalten.

Wenn ein Element auf der Seite gerendert wird und kein CSS angewendet und keine HTML-Größenattribute enthalten sind, rendert der Benutzeragent das Objekt in seiner natürlichen Größe.

## Anpassen der Seitenverhältnisse von ersetzten Elementen

Ersetzte Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden durch Medien ersetzt, die festgelegte Abmessungen haben und daher ein intrinsisches Seitenverhältnis aufweisen. Betrachten Sie ein Rasterbild, wie ein JPEG, PNG oder GIF. Wenn Sie ein Bild auf einer Seite platzieren und keine Höhe oder Breite entweder über {{htmlelement("img")}}-Attribute oder mit CSS festlegen, wird es in seiner intrinsischen Größe angezeigt.

```html hidden live-sample___original
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg?image=good"
  alt="220 pixel square pride flag" />
```

{{EmbedLiveSample("original", "100", "230")}}

Dies ist ein `220px` großes quadratisches Bild ohne angewandtes CSS; es wird in seiner intrinsischen oder Standardgröße dargestellt.

Wenn ersetzter Inhalt automatisch dimensioniert ist oder Sie nur für eine Dimension eine Größe angeben, z. B. das Festlegen eines Wertes für `width`, passt der Browser die andere Dimension automatisch an, in diesem Fall die Höhe, unter Beibehaltung des ursprünglichen Seitenverhältnisses der Medien an.

In diesem Beispiel ist nur die {{cssxref("width")}} am Bild festgelegt, so dass der Benutzeragent sein Seitenverhältnis beibehält. Dasselbe Bild wird dreimal wiederholt und in unterschiedlichen Breiten angezeigt: `55px`, `110px` und in seiner natürlichen Größe von `220px` über den [`width: auto`](/de/docs/Web/CSS/Reference/Properties/width)-Wert.

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

Nur wenn Sie Größen für beide Dimensionen angeben, besteht die Gefahr, dass das ersetzte Element verzerrt wird. Beispielsweise führt das Festlegen von `width: 100vw;` und `height: 100vh;` auf ein Bild zu einem variablen Seitenverhältnis; das Bild wird entweder gestreckt oder verzerrt erscheinen, wenn das Seitenverhältnis des Ansichtsfensters von dem natürlichen Seitenverhältnis des Bildes abweicht.

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

Wir haben die Bilder absichtlich verzerrt, indem wir sowohl eine `height` als auch eine `width` festgelegt haben: Wir haben das erste Bild zusammengedrückt und das dritte gestreckt.

Wir hätten diesen gleichen verzerrten Effekt mit der CSS-{{cssxref("aspect-ratio")}}-Eigenschaft erzeugen können, indem wir eine einzige Dimension (nicht beide oder keine) festlegen und einen anderen Wert als `1` (oder `1 / 1`) angeben. Sie möchten dies wahrscheinlich nicht tun, aber es ist gut zu wissen, dass es möglich ist.

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

Wir haben eine einzelne Dimension deklariert; `100vh` ist die volle Höhe des Beispiel-{{htmlelement("iframe")}}-Ansichtsfensters. Damit `aspect-ratio` auf ersetzte Elemente angewendet werden kann, muss nur eine Dimension festgelegt sein. Das Festlegen beider oder keiner Funktioniert funktioniert nicht.

### Anpassen ersetzter Elemente an ihre Container

Um ein ersetztes Element an die Abmessungen seines Containers anzupassen und dabei sein intrinsisches Seitenverhältnis beizubehalten, setzen Sie den Wert der {{cssxref("object-fit")}}-Eigenschaft auf `cover` oder `contain`. Dadurch wird das ersetzte Element in der Größe geändert und entweder zugeschnitten, um den Container zu "bedecken" oder in einer kleineren Größe vollständig "eingepasst".

In diesem Beispiel wird das quadratische Bild in ein Raster von drei Elementen platziert, die jeweils ein Seitenverhältnis von `5 / 2` haben.

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

Als nächstes bezeichnen wir den Container als Raster, wobei jedes Element ein Seitenverhältnis von `2.5` (`5/2`) mit einer Mindestbreite von `150px` hat. Daher beträgt die Mindesthöhe `60px`. Die endgültige Breite und Höhe hängt jedoch von der Breite des Beispiel-If-rames ab, die auf Ihre Ansichtsfenstergröße basiert:

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

Dann dimensionieren wir die Bilder und setzen die `object-fit`-Eigenschaft bei den letzten beiden Bildern:

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

Nur das erste Bild ist verzerrt (gestreckt). Wir hätten den `fill`-Wert von `object-fit` verwenden können, um denselben Effekt zu erzielen. Das `cover`-Bild erstreckt sich über die volle Breite des Containers, ist vertikal zentriert und beschnitten, um in den Container zu passen. Der `contain`-Wert sorgt dafür, dass das Bild innerhalb des Containers untergebracht wird, horizontal zentriert und verkleinert, um zu passen.

## Festlegen von Seitenverhältnissen für nicht ersetzte Elemente

Während das Seitenverhältnis eines ersetzten Elements standardmäßig beibehalten wird, ändert das Anpassen der intrinsischen Größe eines nicht ersetzten Elements normalerweise sein Seitenverhältnis. Beispielsweise kann derselbe Inhalt auf einem Breitbild oder in einem breiten übergeordneten Container auf drei Zeilen erscheinen, aber auf einem schmalen Bildschirm oder Container auf acht Zeilen.

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

Um das Problem beim Festlegen eines Seitenverhältnisses für nicht ersetzte Elemente durch Maße zu verdeutlichen, wechseln Sie die {{cssxref("overflow")}}-Eigenschaft zwischen `auto` und `visible`.

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

Während es möglich ist, ein Seitenverhältnis bei nicht ersetzten Elementen durch das Festlegen beider Abmessungen und Verbergen von überlaufendem Inhalt zu definieren, bietet die CSS-{{cssxref("aspect-ratio")}}-Eigenschaft explizite Unterstützung für Seitenverhältnisse. Dies bedeutet, dass ein bestimmtes Seitenverhältnis eingestellt werden kann, auch wenn Sie die Inhalts- oder Bildschirmgrößen nicht kennen.

Im nächsten Beispiel rendern wir quadratische Boxen, unabhängig von der Breite des Textes, indem wir `aspect ratio: 1` auf {{htmlelement("blockquote")}}, ein nicht ersetztes Element, festlegen:

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

Jede Box hat eine festgelegte Dimension: die {{cssxref("inline-size")}}, was die Breite in horizontalen Sprachen ist, wurde auf {{cssxref("max-content")}} festgelegt, was die Größe so setzt, dass sie so breit wie nötig ist, um den Inhalt ohne Umbruch zu passen. Die zweite Dimension, in diesem Fall die {{cssxref("block-size")}} oder {{cssxref("height")}}, wird auf dieselbe Länge wie die erste Dimension gesetzt. Dies wird mit der {{cssxref("aspect-ratio")}}-Eigenschaft erreicht. Wir haben das gewünschte Breite-zu-Höhe-Verhältnis des Rahmens des Elements auf `1` gesetzt, was dasselbe ist wie `1 / 1`, ein Quadrat. Dies stellt die Blockrichtung so ein, dass sie der Breite des Elements entspricht, ohne die {{cssxref("height")}} oder {{cssxref("block-size")}}-Eigenschaften zu verwenden.

In diesen Beispielen wurde eine Größe explizit auf das Element selbst gesetzt. Bei der Arbeit mit nicht ersetzten Elementen spielt das Seitenverhältnis eine Rolle, wenn keine Größenabmessung explizit festgelegt ist.

### Erstellen eines Kreises basierend auf der Containergröße

Die Inline-Größe von nicht ersetzten Blockebenen-Elementen ist die Größe ihres Container-[Inhaltsfelds](/de/docs/Web/CSS/Reference/Values/box-edge#content-box). Da sie standardmäßig eine Größe haben, müssen sie keine explizite Größe haben, damit die `aspect-ratio`-Eigenschaft wirksam wird.

In diesem Beispiel haben wir einen Container {{htmlelement("div")}}, der `200px` breit ist und `5px` Polsterung auf jeder Seite enthält. Daher ist die Inline-Größe des Inhaltsfelds `190px`. Ohne das Setzen einer Höhe oder Breite auf das verschachtelte {{htmlelement("p")}} Element wissen wir, dass seine Inline-Größe `190px` ist. Mit `aspect-ratio: 1` eingestellt, wird der Absatz `190px` hoch sein, es sei denn, er hat sichtbaren überlaufenden Inhalt, der ihn höher macht (was er nicht tut).

Die Höhe des `<div>`-Elements ist nicht explizit festgelegt, aber es enthält den `190px` hohen Absatz, die `5px` Polsterung oben und unten sowie die kombinierten Höhen der standardmäßigen oberen und unteren Ränder von `<p>`. Dadurch ist es höher als breit. Beide Elemente haben einen {{cssxref("border-radius")}} von `50%`, sodass der Container ein Oval ist, während das Kind, mit einem `aspect-ratio` von `1` aber ohne explizit definierte Inline- oder Blockgrößen, ein Kreis ist.

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

Um das `<div>` zu einem Kreis zu machen, können wir die `height` und `width` auf den gleichen Wert setzen oder `aspect-ratio: 1` setzen und das `overflow` auf `auto` oder `hidden` einstellen. Alternativ können wir einfach die Ränder am Absatz mit [`margin-block: 0`](/de/docs/Web/CSS/Reference/Properties/margin-block) entfernen. Beide Optionen sind unten gezeigt.

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

Werfen wir einen Blick auf einige Situationen, in denen Sie `aspect-ratio` verwenden können, um einige gängige Herausforderungen beim Erstellen responsiver Designs zu lösen.

### Externe Assets responsiv machen

Alle Inhalte sollten responsiv sein, auch wenn es sich um Einbettungen von Drittanbietern handelt, wie Videos von TikTok, YouTube oder Instagram. Der Code-Schnipsel, den Sie einschließen, um diese externen Videos einzubetten, erstellt in der Regel ein {{htmlelement("iframe")}}.

Während ein {{htmlelement("video")}}-Element typischerweise das Seitenverhältnis seiner Mediendatei annimmt, haben `iframe`-Elemente diese Fähigkeit nicht. Dies stellt die Herausforderung dar, sicherzustellen, dass das `<iframe>` responsiv ist, während es immer das Seitenverhältnis des Videos beibehält, das es enthält. Eine der Techniken, die wir verwenden können, besteht darin, die Breite des iframes auf `100%` seines Containers oder `100vw` einzustellen, um die Breite des Ansichtsfensters unabhängig von der Größe des Ansichtsfensters abzugleichen. Durch das Setzen einer festen Höhe könnte jedoch das Video gestreckt oder verzerrt werden. Stattdessen setzen wir das `aspect-ratio` auf den Container des Videos, wodurch es mit demselben Seitenverhältnis wie das Video ausgerichtet wird. Problem gelöst!

Zur Veranschaulichung: Das Standard-Seitenverhältnis von YouTube-Videos beträgt 16:9, wenn es auf einem Desktop-Computer oder Laptop angesehen wird, während TikTok- und Instagram-Videos ein Seitenverhältnis von 9:16 haben.

```css
.youtube {
  aspect-ratio: 16/9;
}

.instagram,
.tiktok {
  aspect-ratio: 9/16;
}
```

Wir können die `aspect-ratio`-Funktion innerhalb der {{cssxref("@media")}}-Abfrage zusammen mit der `aspect-ratio`-Eigenschaft verwenden, um die Größe sowohl des iframes als auch des darin enthaltenen Videos anzupassen. Dies stellt sicher, dass der Videoinhalt immer so groß wie möglich ist – entweder die volle Breite oder Höhe des Ansichtsfensters ausnutzt, unabhängig von der Größe des Ansichtsfensters – während er ein bestimmtes Seitenverhältnis beibehält.

Wir können die YouTube-Videos im Querformat so breit wie das Ansichtsfenster einstellen und die Hochformat-orientierten TitTok- und Instagram-Video- iframes so hoch wie das Ansichtsfenster. Wenn ein Ansichtsfenster-Seitenverhältnis breiter als 16:9 ist, stellen wir das YouTube-Video auf die Höhe des Ansichtsfensters ein. Wenn das Ansichtsfenster schmaler als 9:16 ist, stellen wir sowohl die Instagram- als auch die TikTok-Videos auf die Breite des Ansichtsfensters ein.

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

### Quadratische Rasterzellen erstellen

Ein Raster aus quadratischen Zellen kann durch das Festlegen fester [Spaltenstreckengrößen](/de/docs/Web/CSS/Reference/Properties/grid-template-columns) erstellt werden, wobei jede Zeile die Größe des Spaltenstrecks annimmt. Beim Erstellen responsiver Raster unter Verwendung von `auto-fill`, um so viele Spaltenstrecken wie möglich im Container zu platzieren, wird die Breite jedes Elements unsicher. Dies erschwert die Bestimmung der entsprechenden Höhe für die Erstellung quadratischer Elemente.

Durch das Setzen eines Seitenverhältnisses auf die Elemente können wir sicherstellen, dass, wenn die Rasterelemente ausgelegt sind, jedes Rasterelement so hoch ist, wie es breit ist, was quadratische Rasterelemente unabhängig von den Abmessungen des Containers erzeugt.

In diesem Beispiel quadratischer Rasterelemente werden die Rasterstrecken automatisch dimensioniert und nehmen ihre Größe von den Elementen an. Jedes Element wird mindestens `95px` breit sein, könnte aber auch viel breiter sein. Unabhängig von der Breite wird jedes Element ein Quadrat sein, mit der Höhe, die durch das `aspect-ratio` festgelegt ist, um seiner Breite zu entsprechen.

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

Damit der Inhalt eines Rasterelements nicht über die bevorzugte Höhenbeschränkung, gesetzt durch das `aspect-ratio`, hinauswächst, stelle die {{cssxref("min-height")}} auf `0` und das {{cssxref("overflow")}} auf einen Wert ungleich `visible`. Dies funktioniert für intrinsisch dimensionierten Inhalt. Wenn Sie Inhalt haben, der intrinsisch größer als der verfügbare Platz ist, stellen Sie den Inhalt so ein, dass er nicht größer als das Rasterelement ist, indem Sie die {{cssxref("max-height")}} (oder {{cssxref("max-width")}}, je nach Inhalt) auf `100%` setzen.

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

- [CSS Boxsizing](/de/docs/Web/CSS/Guides/Box_sizing) Modul
