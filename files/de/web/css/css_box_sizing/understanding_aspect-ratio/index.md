---
title: Verständnis und Festlegung von Seitenverhältnissen
slug: Web/CSS/CSS_box_sizing/Understanding_aspect-ratio
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{CSSRef}}

Jedes Element, das auf der Seite dargestellt wird, hat eine Höhe und eine Breite und daher ein [Seitenverhältnis](/de/docs/Glossary/aspect_ratio), das das Verhältnis zwischen Breite und Höhe beschreibt. Die natürlichen Abmessungen eines Medienobjekts, also seine Größe ohne jegliche Anpassung, Skalierung, Zoom oder angewendete Rahmen, sind als seine natürliche oder [intrinsische Größe](/de/docs/Glossary/intrinsic_size) bekannt. Die intrinsische Größe eines Elements wird durch das Element selbst bestimmt, nicht durch Formatierung wie [box sizing](/de/docs/Web/CSS/CSS_box_sizing) oder das Festlegen von Breiten für Rahmen, Ränder oder Abstände.

Bei der Entwicklung von Websites möchten Sie häufig die Breite eines Elements als Prozentsatz der Ansicht oder der Größe des übergeordneten Containers festlegen und die Höhe proportional ändern lassen, um ein bestimmtes Seitenverhältnis in Abhängigkeit von der Größe des Ansichtsfensters beizubehalten. Für ersetzte Elemente, wie Bilder und Videos, ist das Beibehalten eines bestimmten Seitenverhältnisses nicht nur notwendig für die Erstellung eines [responsive Webdesigns](/de/docs/Glossary/responsive_web_design), sondern auch ein wesentlicher Bestandteil für eine gute Benutzererfahrung. Das Festlegen eines Seitenverhältnisses für ein Asset verhindert das Laden von [Jank](/de/docs/Learn/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)—die Layoutverschiebung, die auftritt, wenn Medien geladen werden, nachdem die Seite bereits gezeichnet wurde, und ein Neulayout ausgelöst wird, weil der Platz für das Asset nicht reserviert wurde.

Mit CSS können Sie die Größe von ersetzten und nicht ersetzten Elementen basierend auf ihrem Seitenverhältnis anpassen. In diesem Leitfaden werden wir die `aspect-ratio`-Eigenschaft kennenlernen, Seitenverhältnisse für ersetzte und nicht ersetzte Elemente besprechen und dann einige häufige Anwendungsfälle für Seitenverhältnisse untersuchen.

## Funktionsweise der `aspect-ratio`-Eigenschaft

Der CSS {{cssxref("aspect-ratio")}} Eigenschaftswert definiert das bevorzugte Breite-zu-Höhe-Verhältnis eines Element-Box. Der Wert ist entweder ein {{cssxref("ratio")}}, das Schlüsselwort `auto` oder eine durch Leerzeichen getrennte Kombination aus beidem.

Das `<ratio>` ist das Verhältnis von Breite zu Höhe, in dieser Reihenfolge. Es wird durch zwei positive {{cssxref("number")}} Werte dargestellt, die durch einen Schrägstrich (`/`) getrennt sind, oder durch eine einzelne `<number>`. Wenn eine einzelne Zahl verwendet wird, entspricht dies derselben Darstellung des Verhältnisses als `<number> / 1`, was ebenfalls die Breite geteilt durch die Höhe ist.

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

Die Wirkung des Schlüsselworts `auto` hängt davon ab, ob es auf ein ersetztes Element angewendet wird oder nicht. Für ersetzte Elemente mit einem intrinsischen Seitenverhältnis bedeutet `auto`, dass das intrinsische Seitenverhältnis verwendet werden sollte. In allen anderen Fällen bedeutet der `auto`-Wert, dass die Box kein bevorzugtes Seitenverhältnis hat. In beiden Fällen ist dies das Standardverhalten, wenn keine `aspect-ratio`-Eigenschaft angewendet wird.

Wenn der Wert sowohl das Schlüsselwort `auto` als auch einen `<ratio>`-Wert enthält, wie in `aspect-ratio: auto 2 / 3;` oder `aspect-ratio: 0.75 auto;`, wird der `auto`-Wert auf ersetzte Elemente mit einem natürlichen Seitenverhältnis angewendet und das angegebene Verhältnis von `width / height` oder `<number>` wird als bevorzugtes Seitenverhältnis verwendet.

Sie werden in den obigen Definitionen das Wort "bevorzugt" bemerkt haben. Der Wert der `aspect-ratio` wird nicht immer angewendet, wenn er gesetzt ist. Die `aspect-ratio`-Eigenschaft legt ein "bevorzugtes" Seitenverhältnis fest, es hat also nur dann eine Wirkung, wenn mindestens eine der Box-Größen automatisch ist.

Wenn sowohl die Höhe als auch die Breite oder die Inline- und Blockgrößen explizit gesetzt sind, wird der `aspect-ratio`-Eigenschaftswert ignoriert. In diesem Fall darf keine Dimension automatisch dimensioniert werden - die bevorzugten Größen sind explizit festgelegt - somit hat die `aspect-ratio`-Eigenschaft keine Auswirkung. Wenn Sie sowohl die Inline- als auch die Blockdimensionen deklarieren, haben diese Vorrang.

Bei ersetzten Elementen, wenn Sie keinen Wert (außer `auto`) für eine der Dimensionen explizit setzen, werden beide standardmäßig auf ihre intrinsische Größe zurückgesetzt (jeder `aspect-ratio`-Wert wird nicht angewendet). Das `aspect-ratio` wird auf nicht ersetzte Elemente angewendet, die keine explizit festgelegte Dimension haben, da nicht ersetzte Elemente entweder [intrinsisch](/de/docs/Glossary/Intrinsic_Size) oder [extrinsisch](/de/docs/Glossary/Intrinsic_Size#extrinsic_sizing) dimensioniert sind und ihre Größe von ihrem Inhalt, Container, [box model](/de/docs/Learn/CSS/Building_blocks/The_box_model) Eigenschaften usw. erhalten.

Wenn ein Element zur Seite gerendert wird, wenn kein CSS angewendet ist und keine HTML-Größenattribute enthalten sind, rendert der Benutzeragent das Objekt in seiner natürlichen Größe.

## Anpassen des Seitenverhältnisses von ersetzten Elementen

Ersetzte Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden durch Medien ersetzt, die festgelegte Abmessungen haben und daher ein intrinsisches Seitenverhältnis besitzen. Betrachten Sie ein Rasterbild, wie ein JPEG, PNG oder GIF. Wenn Sie ein Bild auf eine Seite platzieren und keine Höhe oder Breite angeben, entweder über {{htmlelement("img")}}-Attribute oder mit CSS, wird es in seiner intrinsischen Größe angezeigt.

```html hidden live-sample___original
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg?image=good"
  alt="220 pixel square pride flag" />
```

{{EmbedLiveSample("original", "100", "230")}}

Dies ist ein quadratisches `220px` Bild ohne angewendetes CSS; es wird in seiner intrinsischen oder Standardgröße angezeigt.

Wenn ersetzter Inhalt automatisch dimensioniert ist oder Sie nur eine Dimension angeben, wie das Festlegen eines Wertes für die Breite, wird der Browser die andere Dimension, in diesem Fall die Höhe, automatisch anpassen und dabei das ursprüngliche Seitenverhältnis der Medien beibehalten.

In diesem Beispiel ist nur die {{cssxref("width")}} auf dem Bild festgelegt, daher bewahrt der Benutzeragent sein Seitenverhältnis. Dasselbe Bild wird dreimal angezeigt, mit unterschiedlichen Breiten: `55px`, `110px` und in seiner natürlichen Größe von `220px` über den [`width: auto`](/de/docs/Web/CSS/width) Wert.

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

Nur wenn Sie Größen für beide Dimensionen angeben, besteht die Gefahr, dass das ersetzte Element verzerrt wird. Beispielsweise erzeugt das Festlegen von `width: 100vw;` und `height: 100vh;` auf einem Bild ein variables Seitenverhältnis; das Bild erscheint entweder gestreckt oder gequetscht, wenn das Seitenverhältnis des Ansichtsfensters von dem des natürlichen Seitenverhältnisses des Bildes abweicht.

In diesem Beispiel wird dasselbe Bild dreimal wiederholt, explizit mit demselben {{cssxref("height")}} Wert (`110px`), aber unterschiedlichen {{cssxref("width")}} Werten (`55px`, `110px` und `220px`).

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

Wir haben die Bilder absichtlich verzerrt, indem wir sowohl eine `height` als auch eine `width` eingestellt haben: Wir haben das erste Bild gequetscht und das dritte gestreckt.

Wir hätten diesen verzerrten Effekt mithilfe der CSS {{cssxref("aspect-ratio")}}-Eigenschaft erzeugen können, indem wir eine einzelne Dimension (nicht beide oder keine) eingestellt und einen anderen Wert als `1` (oder `1 / 1`) angegeben haben. Vermutlich möchten Sie dies nicht tun, aber es ist gut zu wissen, dass es möglich ist.

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

Wir haben eine einzelne Dimension deklariert; `100vh` ist die volle Höhe des Beispiel-{{htmlelement("iframe")}} Ansichtsfensters. Damit die `aspect-ratio` für ersetzte Elemente gilt, muss nur eine Dimension gesetzt werden. Das Setzen beider oder keiner funktioniert nicht.

### Anpassen ersetzter Elemente an ihre Container

Um ein ersetztes Element an die Abmessungen seines Containers anzupassen und dabei sein intrinsisches Seitenverhältnis beizubehalten, setzen Sie den {{cssxref("object-fit")}} Eigenschaftswert auf `cover` oder `contain`. Dies wird das ersetzte Element in der Größe anpassen und entweder so abschneiden, dass es den Container "abdeckt", oder es in einer kleineren Größe vollständig innerhalb des Containers "eingeschlossen" darstellen.

In diesem Beispiel wird das quadratische Bild in ein Gitter aus drei Elementen platziert, von denen jedes ein Seitenverhältnis von `5 / 2` hat.

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

Als nächstes bezeichnen wir den Container als ein Gitter, wobei jedes Element ein Seitenverhältnis von `2.5` (`5/2`) mit einer Mindestbreite von `150px` hat. Daher wird die Mindesthöhe `60px` betragen. Die endgültige Breite und Höhe werden jedoch durch die Breite des iframes des Beispiels bestimmt, die auf Ihrer Ansichtsgröße basiert:

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

Wir rufen dann die Bilder auf und setzen die `object-fit`-Eigenschaft auf die letzten beiden Bilder:

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

Nur das erste Bild ist verzerrt (gestreckt). Wir hätten auch den `fill`-Wert von `object-fit` verwenden können, um denselben Effekt zu erzielen. Das `cover`-Bild spannt sich über die gesamte Breite des Containers, ist vertikal zentriert und wird beschnitten, um in den Container zu passen. Der `contain`-Wert stellt sicher, dass das Bild vollständig im Container enthalten ist, horizontal zentriert und verkleinert dargestellt wird.

## Festlegung von Seitenverhältnissen für nicht ersetzte Elemente

Während das Seitenverhältnis eines ersetzten Elements standardmäßig beibehalten wird, ändert sich normalerweise das Seitenverhältnis eines nicht ersetzten Elements, wenn die intrinsische Größe angepasst wird. Zum Beispiel kann identischer Inhalt auf einem Breitbildschirm oder in einem breiten übergeordneten Container wie drei Zeilen erscheinen, aber auf einem schmalen Bildschirm oder Container wie acht Zeilen.

In diesem Beispiel wird dasselbe Zitat in `200px` und `600px` breiten Containern angezeigt, und ein Quadrat wird mit einer Höhe eingestellt, die seiner `200px` Breite entspricht:

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

Um das Problem beim Festlegen des Seitenverhältnisses eines nicht ersetzten Elements über Dimensionsgrößen hervorzuheben, wechseln Sie die {{cssxref("overflow")}}-Eigenschaft zwischen `auto` und `visible`.

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

Obwohl es möglich ist, ein Seitenverhältnis auf nicht ersetzten Elementen durch Festlegen sowohl der Dimensionen als auch des Versteckens von überlaufendem Inhalt zu definieren, bietet die CSS {{cssxref("aspect-ratio")}}-Eigenschaft explizite Unterstützung für Seitenverhältnisse. Dies bedeutet, dass ein spezifisches Seitenverhältnis festgelegt werden kann, selbst wenn die Inhalts- oder Bildschirmgrößen unbekannt sind.

Im nächsten Beispiel rendern wir quadratische Boxen unabhängig von der Breite des Textes, indem wir `aspect ratio: 1` auf {{htmlelement("blockquote")}}, ein nicht ersetztes Element, setzen:

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

Jede Box hat eine Dimension definiert: die {{cssxref("inline-size")}}, die in horizontalen Sprachen die Breite ist, wird auf {{cssxref("max-content")}} gesetzt, die die Größe auf die Breite einstellt, die benötigt wird, um den Inhalt ohne Umbruch zu fassen. Die zweite Dimension, in diesem Fall die {{cssxref("block-size")}} oder {{cssxref("height")}}, wird mit der {{cssxref("aspect-ratio")}}-Eigenschaft auf dieselbe Länge wie die erste Dimension eingestellt. Wir haben das gewünschte Breite-zu-Höhe-Verhältnis der Box des Elements auf `1` gesetzt, was dasselbe wie `1 / 1`, also ein Quadrat, ist. Dies stellt die Blockrichtung so ein, dass sie mit der Breite des Elements übereinstimmt, ohne die Eigenschaften {{cssxref("height")}} oder {{cssxref("block-size")}} zu verwenden.

In diesen Beispielen wurde eine Größe explizit auf dem Element selbst festgelegt. Bei der Arbeit mit nicht ersetzten Elementen kommt das Seitenverhältnis ins Spiel, wenn keine Größenabmessung explizit festgelegt ist.

### Erstellen eines Kreises basierend auf der Größe des Containers

Die Inline-Größe nicht ersetzter Block-Elemente ist die Größe ihrer [Content-Box](/de/docs/Web/CSS/box-edge#content-box) des Containers. Da sie standardmäßig eine Größe haben, müssen sie keine explizite Größe für das Funktionieren der `aspect-ratio`-Eigenschaft definieren.

In diesem Beispiel haben wir ein Container-{{htmlelement("div")}}, das `200px` breit ist, einschließlich `5px` Polsterung auf jeder Seite. Daher beträgt die Inline-Größe der Content-Box `190px`. Ohne eine Höhe oder Breite auf dem verschachtelten {{htmlelement("p")}} Element einzustellen, wissen wir, dass seine Inline-Größe `190px` beträgt. Mit `aspect-ratio: 1` gesetzt, wird der Absatz `190px` hoch sein, es sei denn, er hat sichtbaren überlappenden Inhalt, der ihn höher macht (was er nicht tut).

Die Höhe des `<div>` Elements ist nicht explizit festgelegt, aber sie enthält den `190px` hohen Absatz, die `5px` Polsterung oben und unten und die kombinierten Höhen der Standard-Top- und -Bottom-Ränder des `<p>`. Daher ist es höher als es breit ist. Beide Elemente haben einen {{cssxref("border-radius")}} von `50%`, daher ist der Container ein Oval, während das Kind mit einem `aspect-ratio` von `1`, aber keiner explizit definierten Inline- oder Blockgröße, ein Kreis ist.

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

Um das `<div>` als Kreis zu gestalten, können wir die `height` und `width` auf denselben Wert setzen oder `aspect-ratio: 1` festlegen und den `overflow` auf `auto` oder `hidden` stellen. Alternativ können wir einfach die Ränder auf dem Absatz mit [`margin-block: 0`](/de/docs/Web/CSS/margin-block) entfernen. Beide Optionen sind unten gezeigt.

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

Schauen wir uns einige Situationen an, in denen Sie `aspect-ratio` verwenden können, um einige häufige Herausforderungen beim Erstellen responsiver Designs zu adressieren.

### Externe Assets responsive machen

Alle Inhalte sollten responsive sein, selbst wenn es sich um Drittanbieter-Embeds handelt, wie Videos von TikTok, YouTube oder Instagram. Der Code-Snippet, den Sie zum Einbetten dieser externen Videos einfügen, erzeugt normalerweise ein {{htmlelement("iframe")}}.

Während ein {{htmlelement("video")}}-Element typischerweise das Seitenverhältnis seiner Mediendatei annimmt, fehlt diese Fähigkeit den `iframe`-Elementen. Dies stellt die Herausforderung dar, sicherzustellen, dass das `<iframe>` responsive ist und dabei stets das Seitenverhältnis des enthaltenen Videos beibehält. Eine der Techniken, die wir verwenden können, ist das Festlegen der Breite des iframes auf `100%` seines Containers oder `100vw`, um die Ansichtsbreite unabhängig von der Größe des Ansichtsfensters zu übernehmen. Das Festlegen einer festen Höhe könnte allerdings das Video strecken oder quetschen. Stattdessen setzen wir das `aspect-ratio` auf den Container des Videos, um es auf dasselbe Seitenverhältnis wie das Video auszurichten. Problem gelöst!

Zum Kontext: Das Standard-Seitenverhältnis von YouTube-Videos beträgt 16:9, wenn sie auf einem Desktop-Computer oder Laptop angesehen werden, während TikTok und Instagram-Videos ein Seitenverhältnis von 9:16 haben.

```css
.youtube {
  aspect-ratio: 16/9;
}

.instagram,
.tiktok {
  aspect-ratio: 9/16;
}
```

Wir können die `aspect-ratio`-Funktion innerhalb der {{cssxref("@media")}}-Abfrage zusammen mit der `aspect-ratio`-Eigenschaft verwenden, um die Größe sowohl des iframes als auch des darin enthaltenen Videos anzupassen. Dies stellt sicher, dass der Videoinhalt immer so groß wie möglich dargestellt wird - entweder die volle Breite oder Höhe des Ansichtsfensters - und dabei ein spezifisches Seitenverhältnis beibehält.

Wir können die im Querformat ausgerichteten YouTube-Videos so einstellen, dass sie so breit wie das Ansichtsfenster sind, und die hochformatigen TikTok- und Instagram-Video-iframes so hoch wie das Ansichtsfenster sind. Wenn das Seitenverhältnis eines Ansichtsfensters breiter als 16:9 ist, stellen wir das YouTube-Video auf die Höhe des Ansichtsfensters ein. Wenn das Ansichtsfenster schmaler als 9:16 ist, stellen wir sowohl die Instagram- als auch die TikTok-Videos auf die Breite des Ansichtsfensters ein.

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

Ein Gitter aus quadratischen Zellen kann erstellt werden, indem feste [Spurengrößen von Spalten](/de/docs/Web/CSS/grid-template-columns) definiert werden, wobei sichergestellt wird, dass jede Zeile die Größe der Spalte annimmt. Wenn jedoch responsive Gitter mit `auto-fill` erstellt werden, um so viele Spaltenspuren wie möglich innerhalb des Containers zu platzieren, wird die Breite jedes Elements unsicher. Dies erschwert die Bestimmung der geeigneten Höhe zur Erstellung quadratischer Elemente.

Durch Festlegen eines Seitenverhältnisses auf die Elemente können wir sicherstellen, dass wenn die Gitternetz-Elemente angeordnet sind, jedes Gitternetz-Element so hoch wie breit ist, quadratische Gitternetz-Elemente unabhängig von den Abmessungen des Containers zu schaffen.

In diesem Beispiel von quadratischen Gitternetz-Elementen sind die Gitternetz-Spuren automatisch dimensioniert und nehmen ihre Größe von den Elementen. Jedes Element ist mindestens `95px` breit, könnte jedoch viel breiter sein. Unabhängig von der Breite wird jedes Element ein Quadrat sein, wobei die Höhe durch die `aspect-ratio` so eingestellt wird, dass sie seiner Breite entspricht.

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

Damit der Inhalt eines Gitternetz-Elements nicht über die bevorzugte Höhe, die durch das `aspect-ratio` festgelegt wurde, hinauswächst, setzen Sie die {{cssxref("min-height")}} auf `0` und{{cssxref("overflow")}} auf einen anderen Wert als `visible`. Dies funktioniert für intrinsisch dimensionierte Inhalte. Wenn Sie Inhalte haben, die intrinsisch größer als der verfügbare Platz sind, stellen Sie sicher, dass der Inhalt nicht größer als das Gitternetz-Element ist, indem Sie die {{cssxref("max-height")}} (oder {{cssxref("max-width")}}, abhängig vom Inhalt) auf `100%` setzen.

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

- [CSS box sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
