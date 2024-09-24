---
title: Verstehen und Festlegen von Seitenverhältnissen
slug: Web/CSS/CSS_box_sizing/Understanding_aspect-ratio
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{CSSRef}}

Jedes Element, das auf der Seite angezeigt wird, hat eine Höhe und eine Breite und daher ein {{glossary("Seitenverhältnis")}}, welches das Verhältnis zwischen Breite und Höhe darstellt. Die natürlichen Abmessungen eines Medienobjekts, also seine Größe ohne jegliche Größenanpassung, Skalierung, Zoom oder Rahmen, sind als seine natürliche oder {{glossary("intrinsische Größe")}} bekannt. Die intrinsische Größe eines Elements wird durch das Element selbst bestimmt und nicht durch die Anwendung von Formatierungen wie [Box Sizing](/de/docs/Web/CSS/CSS_box_sizing) oder das Festlegen von Rahmen-, Rand- oder Auffüllungsbreiten.

Bei der Entwicklung von Websites möchten Sie oft die Breite eines Elements als Prozentsatz der Anzeigefenster- oder übergeordneten Containergröße festlegen und die Höhe proportional ändern, um ein bestimmtes Seitenverhältnis in Abhängigkeit von der Größe des Anzeigefensters beizubehalten. Für ersetzte Elemente wie Bilder und Videos ist die Aufrechterhaltung eines bestimmten Seitenverhältnisses nicht nur für die Erstellung von {{glossary("Responsive Webdesign")}} notwendig, sondern auch ein wesentlicher Bestandteil für eine gute Benutzererfahrung. Das Festlegen des Seitenverhältnisses eines Assets verhindert das Laden von [Jank](/de/docs/Learn/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)—die Layoutverschiebung, die auftritt, wenn Medien geladen werden, nachdem die Seite bereits gerendert wurde, was eine Neuanordnung verursacht, weil der Platz für das Asset nicht reserviert wurde.

Mit CSS können Sie die Größe von ersetzten und nicht-ersetzten Elementen basierend auf ihrem Seitenverhältnis anpassen. In diesem Leitfaden lernen wir die `aspect-ratio`-Eigenschaft kennen, diskutieren Seitenverhältnisse für ersetzte und nicht-ersetzte Elemente und untersuchen dann einige häufige Anwendungsfälle für Seitenverhältnisse.

## Wie die `aspect-ratio`-Eigenschaft funktioniert

Der CSS-Wert {{cssxref("aspect-ratio")}} definiert das bevorzugte Breite-zu-Höhe-Verhältnis des Box-Modells eines Elements. Der Wert ist entweder ein {{cssxref("Ratio")}}, das Schlüsselwort `auto` oder eine durch Leerzeichen getrennte Kombination von beidem.

Das `<ratio>` ist das Verhältnis von Breite zu Höhe, in dieser Reihenfolge. Es wird durch zwei positive {{cssxref("Zahlen")}} dargestellt, die durch einen Schrägstrich (`/`) oder eine einzelne `<number>` getrennt sind. Wenn eine einzelne Zahl verwendet wird, entspricht dies der Schreibweise des Verhältnisses als `<number> / 1`, was auch die Breite geteilt durch die Höhe ist.

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

Die Wirkung des `auto`-Schlüsselworts hängt davon ab, ob es auf ein ersetztes Element angewendet wird oder nicht. Bei ersetzten Elementen mit einem intrinsischen Seitenverhältnis bedeutet `auto`, dass das intrinsische Seitenverhältnis verwendet werden sollte. In allen anderen Fällen bedeutet der Wert `auto`, dass die Box kein bevorzugtes Seitenverhältnis hat. In beiden Fällen ist dies das Standardverhalten, als wäre keine `aspect-ratio`-Eigenschaft angewendet worden.

Wenn der Wert sowohl das `auto`-Schlüsselwort als auch einen `<ratio>`-Wert enthält, wie z. B. `aspect-ratio: auto 2 / 3;` oder `aspect-ratio: 0.75 auto;`, wird der `auto`-Wert auf ersetzte Elemente mit einem natürlichen Seitenverhältnis angewendet und das angegebene Verhältnis von `width / height` oder `<number>` wird als bevorzugtes Seitenverhältnis verwendet.

Sie werden das Wort "bevorzugt" in den obigen Definitionen bemerkt haben. Der `aspect-ratio`-Wert wird nicht immer angewendet, wenn er gesetzt ist. Die `aspect-ratio`-Eigenschaft legt ein "bevorzugtes" Seitenverhältnis fest und hat somit nur Auswirkungen, wenn mindestens eine der Box-Größen automatisch ist.

Wenn sowohl die Höhe als auch die Breite oder Inline- und Blockgrößen explizit festgelegt sind, wird der `aspect-ratio`-Eigenschaftswert ignoriert. In diesem Fall darf keine Dimension automatisch festgelegt werden - die bevorzugten Größen sind explizit festgelegt - daher hat die `aspect-ratio`-Eigenschaft keine Wirkung. Wenn Sie sowohl die Inline- als auch die Blockdimensionen angeben, haben diese Vorrang.

Bei ersetzten Elementen, wenn Sie keinen Wert (außer `auto`) für eine der Dimensionen explizit festlegen, werden beide standardmäßig auf ihre intrinsische Größe zurückgesetzt (jeder `aspect-ratio`-Wert wird nicht angewendet). Die `aspect-ratio` wird auf nicht-ersetzte Elemente angewendet, die keine Dimension explizit festgelegt haben, da diese entweder [intrinsisch](/de/docs/Glossary/Intrinsic_Size) oder [extrinsisch](/de/docs/Glossary/Intrinsic_Size#extrinsic_sizing) dimensioniert sind und ihre Größe aus ihrem Inhalt, Container, [Boxmodell](/de/docs/Learn/CSS/Building_blocks/The_box_model)-Eigenschaften usw. erhalten.

Wenn ein Element auf der Seite gerendert wird, wenn kein CSS angewendet wird und keine HTML-Größenattribute enthalten sind, rendert der Benutzeragent das Objekt in seiner natürlichen Größe.

## Anpassen der Seitenverhältnisse von ersetzten Elementen

Ersetzte Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden durch Medien ersetzt, die feste Abmessungen haben und daher ein intrinsisches Seitenverhältnis besitzen. Betrachten Sie ein Rasterbild, wie ein JPEG, PNG oder GIF. Wenn Sie ein Bild auf eine Seite setzen und keine Höhe oder Breite festlegen, weder über {{htmlelement("img")}}-Attribute noch mit CSS, wird es in seiner intrinsischen Größe angezeigt.

```html hidden live-sample___original
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg?image=good"
  alt="220 pixel square pride flag" />
```

{{EmbedLiveSample("original", "100", "230")}}

Dies ist ein `220px` großes quadratisches Bild ohne angewendetes CSS; es wird in seiner intrinsischen oder Standardgröße angezeigt.

Wenn ersetzte Inhalte automatisch dimensioniert sind oder Sie nur eine Dimension festlegen, z. B. einen Wert für die Breite, passt der Browser die andere Dimension automatisch an, in diesem Fall die Höhe, während das ursprüngliche Seitenverhältnis der Medien beibehalten wird.

In diesem Beispiel ist nur die {{cssxref("width")}} für das Bild festgelegt, sodass der Benutzeragent sein Seitenverhältnis beibehält. Dasselbe Bild wird dreimal wiederholt, in unterschiedlichen Breiten angezeigt: `55px`, `110px` und in seiner natürlichen Größe von `220px` mittels des [`width: auto`](/de/docs/Web/CSS/width)-Werts.

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

Nur wenn Sie Größen für beide Dimensionen angeben, besteht die Gefahr, das ersetzte Element zu verzerren. Zum Beispiel erzeugt die Festlegung von `width: 100vw;` und `height: 100vh;` auf ein Bild ein variables Seitenverhältnis; das Bild erscheint entweder gestreckt oder gequetscht, wenn das Seitenverhältnis des Anzeigefensters sich vom natürlichen Seitenverhältnis des Bildes unterscheidet.

In diesem Beispiel wird dasselbe Bild dreimal wiederholt, explizit mit demselben {{cssxref("height")}}-Wert (`110px`) aber unterschiedlichen {{cssxref("width")}}-Werten (`55px`, `110px` und `220px`) dimensioniert.

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

Wir haben die Bilder absichtlich verzerrt, indem wir sowohl eine `height` als auch eine `width` festgelegt haben: wir haben das erste gequetscht und das dritte gestreckt.

Wir hätten diesen gleichen verzerrten Effekt mit der CSS-{{cssxref("aspect-ratio")}}-Eigenschaft erzeugen können, indem wir eine einzelne Dimension (nicht beide oder keine) festlegen und einen Wert ungleich `1` (oder `1 / 1`) angeben. Wahrscheinlich möchten Sie dies nicht tun, aber es ist gut zu wissen, dass es möglich ist.

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

Wir haben eine einzelne Dimension angegeben; `100vh` ist die volle Höhe des Beispiel{{htmlelement("iframe")}}-Anzeigefensters. Damit `aspect-ratio` auf ersetzte Elemente angewendet wird, darf nur eine Dimension festgelegt sein. Beide oder keine festzulegen, funktioniert nicht.

### Anpassung ersetzter Elemente an ihre Container

Um ein ersetztes Element an die Abmessungen seines Containers anzupassen und gleichzeitig sein intrinsisches Seitenverhältnis beizubehalten, setzen Sie den Wert der {{cssxref("object-fit")}}-Eigenschaft auf `cover` oder `contain`. Dadurch wird das ersetzte Element in der Größe angepasst und entweder zugeschnitten, um den Container zu "füllen", oder in einer kleineren Größe angezeigt, die vollständig "im" Container enthalten ist.

In diesem Beispiel wird das quadratische Bild in ein Raster von drei Elementen platziert, von denen jedes ein Seitenverhältnis von `5 / 2` hat.

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

Als nächstes bezeichnen wir den Container als Raster, wobei jedes Element ein Seitenverhältnis von `2.5` (`5/2`) mit einer Mindestbreite von `150px` hat. Die Mindesthöhe wird daher `60px` betragen. Die endgültige Breite und Höhe wird jedoch durch die Breite des Beispiels-iFrames bestimmt, die auf der Größe des Anzeigefensters basiert:

```css live-sample___imagegrid
.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  font-size: 0; /* um Leerzeichen zu minimieren */
}

div div {
  aspect-ratio: 5 / 2;
  background-color: #ccc;
}
```

Wir passen dann die Größe der Bilder an und setzen die `object-fit`-Eigenschaft auf die letzten beiden Bilder:

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

Nur das erste Bild ist verzerrt (gestreckt). Wir hätten den `fill`-Wert von `object-fit` verwenden können, um denselben Effekt zu erzielen. Das `cover`-Bild erstreckt sich über die gesamte Breite des Containers, ist vertikal zentriert und wird zugeschnitten, um in den Container zu passen. Der Wert `contain` stellt sicher, dass das Bild im Container enthalten ist, horizontal zentriert und verkleinert, um zu passen.

## Definition von Seitenverhältnissen für nicht ersetzte Elemente

Während das Seitenverhältnis eines ersetzten Elements standardmäßig beibehalten wird, ändert sich durch die Anpassung der intrinsischen Größe eines nicht ersetzten Elements normalerweise das Seitenverhältnis. Zum Beispiel kann derselbe Inhalt auf einem Breitbildschirm oder in einem breiten übergeordneten Container als drei Zeilen erscheinen, auf einem schmalen Bildschirm oder Container jedoch als acht Zeilen.

In diesem Beispiel wird dasselbe Zitat in Containern mit einer Breite von `200px` und `600px` angezeigt, und ein Quadrat mit einer Höhe wird so eingestellt, dass es seiner Breite von `200px` entspricht:

```html hidden live-sample___alder
<p>Schmal:</p>
<blockquote>
  <q
    >Wenn Sie aufhören, Ihr Leben basierend auf dem zu leben, was andere von Ihnen denken, beginnt das wahre Leben. In diesem Moment werden Sie endlich die Tür zur Selbstakzeptanz geöffnet sehen.</q
  >
  - Shannon L. Alder
</blockquote>
<p>Breit:</p>
<blockquote>
  <q
    >Wenn Sie aufhören, Ihr Leben basierend auf dem zu leben, was andere von Ihnen denken, beginnt das wahre Leben. In diesem Moment werden Sie endlich die Tür zur Selbstakzeptanz geöffnet sehen.</q
  >
  - Shannon L. Alder
</blockquote>
<p>Seitenverhältnis mit Überlauf:</p>
<blockquote>
  <q
    >Wenn Sie aufhören, Ihr Leben basierend auf dem zu leben, was andere von Ihnen denken, beginnt das wahre Leben. In diesem Moment werden Sie endlich die Tür zur Selbstakzeptanz geöffnet sehen.</q
  >
  - Shannon L. Alder
</blockquote>
<p>
  <label
    ><input type="checkbox" checked /> Umschalten zwischen
    <code>overflow</code>-Werte <code>auto</code> und
    <code>visible</code></label
  >
</p>
```

Um das Problem hervorzuheben, das beim Festlegen des Seitenverhältnisses eines nicht ersetzten Elements durch Größenabmessungen entsteht, schalten Sie die {{cssxref("overflow")}}-Eigenschaft zwischen `auto` und `visible` um.

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

Obwohl es möglich ist, ein Seitenverhältnis auf nicht ersetzte Elemente zu definieren, indem beide Dimensionen festgelegt und überfließender Inhalt versteckt werden, bietet die CSS-{{cssxref("aspect-ratio")}}-Eigenschaft explizite Unterstützung für Seitenverhältnisse. Das bedeutet, dass ein bestimmtes Seitenverhältnis festgelegt werden kann, auch wenn Sie die Inhalte oder Bildschirmgrößen nicht kennen.

Im nächsten Beispiel rendern wir quadratische Kästchen, unabhängig von der Breite des Textes, indem wir `aspect ratio: 1` auf {{htmlelement("blockquote")}}, einem nicht ersetzten Element, setzen:

```html hidden live-sample___words
<p>Kurztext:</p>
<blockquote>Atmen.</blockquote>
<p>Längerer Text:</p>
<blockquote>Du bist perfekt, so wie du bist.</blockquote>
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

Jedes Kästchen hat eine Dimension definiert: die {{cssxref("inline-size")}}, die in horizontalen Sprachen der Breite entspricht, ist auf {{cssxref("max-content")}} gesetzt, was die Größe so einstellt, dass sie so breit ist, wie es erforderlich ist, um den Inhalt ohne Zeilenumbruch zu passen. Die zweite Dimension, in diesem Fall die {{cssxref("block-size")}} oder {{cssxref("height")}}, wird so eingestellt, dass sie dieselbe Länge wie die erste Dimension hat. Dies wird mit der {{cssxref("aspect-ratio")}}-Eigenschaft erreicht. Wir haben das gewünschte Breite-zu-Höhe-Verhältnis des Box-Modells des Elements auf `1` festgelegt, was dem gleichen wie `1 / 1`, einem Quadrat, entspricht. Dadurch wird die Blockrichtung an die Breite des Elements angepasst, ohne die {{cssxref("height")}}- oder {{cssxref("block-size")}}-Eigenschaften zu verwenden.

In diesen Beispielen wurde eine Größe explizit auf dem Element selbst festgelegt. Beim Arbeiten mit nicht ersetzten Elementen kommt das Seitenverhältnis ins Spiel, wenn keine Größenabmessung explizit festgelegt ist.

### Erstellen eines Kreises basierend auf der Containergröße

Die Inlinegröße von nicht ersetzten Block-Elementen ist die Größe ihres [Inhaltsbereichs](/de/docs/Web/CSS/box-edge#content-box). Da sie standardmäßig eine Größe haben, muss für die `aspect-ratio`-Eigenschaft keine explizite Größe festgelegt werden, um zu funktionieren.

In diesem Beispiel haben wir einen Container {{htmlelement("div")}}, der `200px` breit ist und `5px` Padding auf jeder Seite enthält. Der Inlinebereich des Inhaltsbereichs beträgt daher `190px`. Ohne die Höhe oder Breite auf dem verschachtelten {{htmlelement("p")}}-Element festzulegen, wissen wir, dass seine Inlinegröße `190px` beträgt. Mit `aspect-ratio: 1` eingestellt, wird der Absatz `190px` hoch sein, es sei denn, er hat sichtbaren überfließenden Inhalt, der ihn größer macht (was er nicht tut).

Die Höhe des `<div>`-Elements ist nicht explizit festgelegt, aber es enthält den `190px` hohen Absatz, die `5px` Padding oben und unten und die kombinierten Höhen der Standardabstände des oberen und unteren Rands von `<p>`. Daher ist es höher als breit. Beide Elemente haben einen {{cssxref("border-radius")}} von `50%`, also ist der Container ein Oval, während das Kind mit einem `aspect-ratio` von `1`, aber ohne explizit definierte Inline- oder Blockgrößen ein Kreis ist.

```html live-sample___circle
<div><p>Hallo Welt</p></div>
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

Um das `<div>` zu einem Kreis zu machen, können wir die `height` und `width` auf denselben Wert setzen oder `aspect-ratio: 1` festlegen und den `overflow` auf `auto` oder `hidden` setzen. Alternativ können wir einfach die Abstände auf dem Absatz mit [`margin-block: 0`](/de/docs/Web/CSS/margin-block) entfernen. Beide Optionen sind unten dargestellt.

```html live-sample___circle2
<section>
  <div><p>Hallo Welt</p></div>
  <div><p>Hallo Welt</p></div>
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

Werfen Sie einen Blick auf einige Situationen, in denen Sie `aspect-ratio` verwenden können, um einige häufige Herausforderungen beim Erstellen von responsiven Designs zu bewältigen.

### Externe Assets responsive machen

Alle Inhalte sollten responsiv sein, auch wenn diese Inhalte von Dritten eingebettete Videos sind, wie z. B. von TikTok, YouTube oder Instagram. Der Codeausschnitt, den Sie einfügen, um diese externen Videos einzubetten, erstellt normalerweise ein {{htmlelement("iframe")}}.

Während ein {{htmlelement("video")}}-Element typischerweise das Seitenverhältnis seiner Mediendatei übernimmt, fehlt diese Fähigkeit bei `iframe`-Elementen. Dies stellt die Herausforderung dar, sicherzustellen, dass das `<iframe>` responsiv ist, während immer das Seitenverhältnis des enthaltenen Videos beibehalten wird. Eine Technik, die wir verwenden können, besteht darin, die Breite des iframes auf `100%` seines Containers oder `100vw` festzulegen, um die Breite des Anzeigefensters unabhängig von seiner Größe anzupassen. Das Festlegen einer festen Höhe könnte jedoch das Video strecken oder quetschen. Stattdessen setzen wir das `aspect-ratio` für den Videocontainer, um es auf das gleiche Seitenverhältnis wie das Video auszurichten. Problem gelöst!

Zur Information: Das Standard-Seitenverhältnis von YouTube-Videos beträgt 16:9, wenn sie auf einem Desktop-Computer oder Laptop angesehen werden, während TikTok- und Instagram-Videos ein 9:16-Seitenverhältnis haben.

```css
.youtube {
  aspect-ratio: 16/9;
}

.instagram,
.tiktok {
  aspect-ratio: 9/16;
}
```

Wir können die `aspect-ratio`-Funktion innerhalb der {{cssxref("@media")}}-Abfrage zusammen mit der `aspect-ratio`-Eigenschaft verwenden, um die Größe sowohl des iframes als auch des enthaltenen Videos anzupassen. Dies stellt sicher, dass der Videoinhalt immer so groß wie möglich ist - entweder die volle Breite oder Höhe des Anzeigefensters einnimmt, unabhängig von der Größe des Anzeigefensters - und gleichzeitig ein spezifisches Seitenverhältnis beibehält.

Wir können die landschaftsorientierten YouTube-Videos so breit wie das Anzeigefenster und die hochkantorientierten TitTok- und Instagram-Videoframes auf die Höhe des Anzeigefensters festlegen. Wenn das Seitenverhältnis eines Anzeigefensters breiter als 16:9 ist, setzen wir das YouTube-Video auf die Höhe des Anzeigefensters. Wenn das Anzeigefenster schmaler als 9:16 ist, setzen wir sowohl Instagram- als auch TikTok-Videos auf die Breite des Anzeigefensters.

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

/* Wenn das Anzeigefenster sehr breit, aber nicht sehr hoch ist */
@media (aspect-ratio > 16 / 9) {
  iframe.youtube {
    width: auto;
    height: 100vh;
  }
}

/* Wenn das Anzeigefenster sehr hoch, aber nicht sehr breit ist */
@media (aspect-ratio < 9 / 16) {
  iframe.instagram,
  iframe.tiktok {
    height: auto;
    width: 100vw;
  }
}
```

### Gitterzellen quadratisch machen

Ein Raster mit quadratischen Zellen kann durch die Definition fester [Spurgrößen der Spalten](/de/docs/Web/CSS/grid-template-columns) erstellt werden, wobei sichergestellt wird, dass jede Zeile dieselbe Größe wie die Spaltenpfade hat. Wenn jedoch responsive Raster mit `auto-fill` erstellt werden, um so viele Spaltenpfade wie möglich innerhalb des Containers zu füllen, wird die Breite jedes Elements ungewiss. Dadurch wird es schwierig, die geeignete Höhe für die Erstellung quadratischer Elemente zu bestimmen.

Durch das Festlegen eines Seitenverhältnisses auf den Elementen können wir sicherstellen, dass, wenn die Rasterelemente angeordnet werden, jedes Rastelement so hoch wie breit ist, wodurch sich quadratische Rastelemente unabhängig von den Dimensionen des Containers ergeben.

In diesem Beispiel von quadratischen Rastelementen sind die Rasterspuren automatisch dimensioniert, wobei sie ihre Größe von den Elementen ableiten. Jedes Element wird mindestens `95px` breit sein, kann jedoch erheblich breiter sein. Unabhängig von der Breite wird jedes Element ein Quadrat sein, wobei die Höhe durch das `aspect-ratio` bestimmt wird, um seiner Breite zu entsprechen.

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
  /*  die Nummer verstecken, wenn es Inhalte gibt  */
  position: absolute;
  color: transparent;
}
```

```html hidden
<div class="grid">
  <div></div>
  <div></div>
  <div class="item">
    Dieser Text würde den Eltern überlaufen, aber wir haben Eigenschaften gesetzt, um dies zu verhindern.
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

Damit der Inhalt eines Rastelements nicht über die bevorzugte Höhe hinauswächst, die durch das `aspect-ratio` festgelegt wurde, setzen Sie die {{cssxref("min-height")}} auf `0` und den {{cssxref("overflow")}} auf einen anderen Wert als `visible`. Dies funktioniert für intrinsisch dimensionierte Inhalte. Wenn Sie Inhalte haben, die intrinsisch größer als der verfügbare Platz sind, setzen Sie diese Inhalte so, dass sie nicht größer als das Rastelement sind, indem Sie die {{cssxref("max-height")}} (oder {{cssxref("max-width")}}, abhängig von den Inhalten) auf `100%` festlegen.

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

- [CSS-Box-Berechnung](/de/docs/Web/CSS/CSS_box_sizing) Module
