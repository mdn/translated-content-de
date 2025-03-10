---
title: Verständnis und Festlegung von Seitenverhältnissen
slug: Web/CSS/CSS_box_sizing/Understanding_aspect-ratio
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{CSSRef}}

Jedes Element, das auf der Seite gerendert wird, hat eine Höhe und eine Breite und somit ein {{Glossary("aspect_ratio", "Seitenverhältnis")}}, das das Verhältnis zwischen Breite und Höhe darstellt. Die natürlichen Abmessungen eines Media-Objekts, also seine Größe ohne jegliche Größenänderung, Skalierung, Zoom oder Rahmen, werden als natürliche oder {{Glossary("intrinsic_size", "intrinsische Größe")}} bezeichnet. Die intrinsische Größe eines Elements wird durch das Element selbst bestimmt und nicht durch Formatierungen wie [Box Sizing](/de/docs/Web/CSS/CSS_box_sizing) oder das Setzen von Rahmen-, Rand- oder Abstandsbreiten.

Beim Entwickeln von Websites möchten Sie häufig die Breite eines Elements auf einen Prozentsatz der Größe des Ansichtsfensters oder des übergeordneten Containers einstellen und die Höhe proportional ändern, um ein bestimmtes Seitenverhältnis basierend auf der Größe des Ansichtsfensters beizubehalten. Für ersetzte Elemente wie Bilder und Videos ist die Beibehaltung eines bestimmten Seitenverhältnisses nicht nur notwendig für ein {{Glossary("responsive_web_design", "responsive Webdesign")}}, sondern auch ein wichtiger Bestandteil einer guten Benutzererfahrung. Das Festlegen des Seitenverhältnisses eines Assets verhindert das Laden von [Jank](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images) — der Layout-Verschiebung, die auftritt, wenn Medien geladen werden, nachdem die Seite bereits gerendert wurde, und eine Neuanordnung verursacht, weil der Platz für das Asset nicht reserviert wurde.

Mithilfe von CSS können Sie die Größe von ersetzten und nicht ersetzten Elementen basierend auf ihrem Seitenverhältnis anpassen. In diesem Leitfaden werden wir die `aspect-ratio`-Eigenschaft kennenlernen, über Seitenverhältnisse für ersetzte und nicht ersetzte Elemente sprechen und anschließend einige häufige Anwendungsfälle für Seitenverhältnisse untersuchen.

## Wie die Eigenschaft `aspect-ratio` funktioniert

Der CSS-Wert der {{cssxref("aspect-ratio")}}-Eigenschaft definiert das bevorzugte Verhältnis von Breite zu Höhe eines Element-Kastens. Der Wert ist entweder ein {{cssxref("ratio")}}, das Schlüsselwort `auto` oder eine durch Leerzeichen getrennte Kombination aus beidem.

Das `<ratio>` ist das Verhältnis von Breite zu Höhe, in dieser Reihenfolge. Es wird durch zwei positive {{cssxref("number")}}-Werte dargestellt, die durch einen Schrägstrich (`/`) oder eine einzelne `<number>` getrennt sind. Wenn eine einzelne Zahl verwendet wird, entspricht dies dem Schreiben des Verhältnisses als `<number> / 1`, was ebenfalls der Breite geteilt durch die Höhe entspricht.

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

Die Wirkung des `auto`-Schlüsselworts hängt davon ab, ob das Element, auf dem es angewendet wird, ein ersetztes Element ist oder nicht. Für ersetzte Elemente mit einem intrinsischen Seitenverhältnis bedeutet `auto`, dass das intrinsische Seitenverhältnis verwendet werden sollte. In allen anderen Fällen bedeutet der `auto`-Wert, dass die Box kein bevorzugtes Seitenverhältnis hat. In beiden Fällen ist dies das Standardverhalten, als ob keine `aspect-ratio`-Eigenschaft angewendet wäre.

Wenn der Wert sowohl das Schlüsselwort `auto` als auch einen `<ratio>`-Wert enthält, wie z.B. `aspect-ratio: auto 2 / 3;` oder `aspect-ratio: 0.75 auto;`, wird der `auto`-Wert auf ersetzte Elemente mit einem natürlichen Seitenverhältnis angewendet, und das angegebene Verhältnis von `width / height` oder `<number>` wird als bevorzugtes Seitenverhältnis verwendet.

Sie werden bemerkt haben, dass in den obigen Definitionen das Wort "bevorzugt" vorkommt. Der `aspect-ratio`-Wert wird nicht immer angewendet, wenn er festgelegt ist. Die `aspect-ratio`-Eigenschaft setzt ein "bevorzugtes" Seitenverhältnis fest, sodass sie nur dann eine Wirkung entfaltet, wenn mindestens eine der Box-Größen automatisch ist.

Wenn sowohl die Höhe als auch die Breite oder die Inline- und Blockgrößen ausdrücklich festgelegt sind, wird der Wert der `aspect-ratio`-Eigenschaft ignoriert. In diesem Fall darf keine Dimension automatisch bemessen werden - die bevorzugten Größen sind ausdrücklich festgelegt - daher hat die `aspect-ratio`-Eigenschaft keine Wirkung. Wenn Sie sowohl die Inline- als auch die Blockdimensionen deklarieren, haben diese Vorrang.

Bei ersetzten Elementen, wenn Sie keinen Wert (außer `auto`) für eine Dimension explizit festlegen, wird standardmäßig die intrinsische Größe verwendet (jeder `aspect-ratio`-Wert wird nicht angewendet). Die `aspect-ratio` wird auf nicht ersetzte Elemente angewendet, die keine explizit festgelegte Dimension haben, da nicht ersetzte Elemente entweder {{Glossary("Intrinsic_Size", "intrinsisch")}} oder {{Glossary("Intrinsic_Size#extrinsic_sizing", "extrinsisch")}} dimensioniert sind und ihre Größe von ihrem Inhalt, Container, [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)-Eigenschaften usw. erhalten.

Wenn ein Element auf der Seite gerendert wird, werden, wenn kein CSS angewendet ist und keine HTML-Größenattribute enthalten sind, das Objekt von der Benutzeroberfläche in seiner natürlichen Größe gerendert.

## Anpassung der Seitenverhältnisse von ersetzten Elementen

Ersetzte Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden durch Medien ersetzt, die über festgelegte Dimensionen und daher über ein intrinsisches Seitenverhältnis verfügen. Betrachten Sie ein Rasterbild, wie z.B. ein JPEG, PNG oder GIF. Wenn Sie ein Bild auf einer Seite platzieren und keine Höhe oder Breite festlegen, weder über {{htmlelement("img")}}-Attribute noch mit CSS, wird es in seiner intrinsischen Größe angezeigt.

<!-- diese Bilder vorübergehend ignorieren. Testen der Vorschau -->

```html hidden live-sample___original
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg?image=good"
  alt="220 pixel square pride flag" />
```

{{EmbedLiveSample("original", "100", "230")}}

Dies ist ein `220px` großes quadratisches Bild ohne angewendetes CSS; es wird in seiner intrinsischen oder Standardgröße angezeigt.

Wenn das ersetzte Bild automatisch dimensioniert wird oder Sie nur für eine Dimension eine Größe angeben, z.B. einen Wert für `width`, wird der Browser die andere Dimension, in diesem Fall die Höhe, automatisch anpassen und dabei das ursprüngliche Seitenverhältnis des Mediums beibehalten.

In diesem Beispiel ist nur die {{cssxref("width")}} des Bildes festgelegt, sodass der Benutzeragent das Seitenverhältnis beibehält. Dasselbe Bild wird dreimal angezeigt, in verschiedenen Breiten: `55px`, `110px` und in seiner natürlichen Größe von `220px` über den [Wert `width: auto`](/de/docs/Web/CSS/width).

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

Nur wenn Sie Größen für beide Dimensionen angeben, besteht die Gefahr, dass das ersetzte Element verzerrt wird. Wenn Sie z.B. `width: 100vw;` und `height: 100vh;` auf ein Bild setzen, erhalten Sie ein variables Seitenverhältnis; das Bild erscheint entweder gestreckt oder gestaucht, wenn sich das Seitenverhältnis des Ansichtsfensters vom natürlichen Seitenverhältnis des Bildes unterscheidet.

In diesem Beispiel wird dasselbe Bild dreimal wiederholt, explizit mit demselben {{cssxref("height")}}-Wert (`110px`) aber verschiedenen {{cssxref("width")}}-Werten (`55px`, `110px` und `220px`).

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

Wir haben die Bilder absichtlich verzerrt, indem wir sowohl eine `height` als auch eine `width` festgelegt haben: Wir haben das erste gestaucht und das dritte gestreckt.

Wir hätten denselben verzerrten Effekt mit der CSS-Eigenschaft {{cssxref("aspect-ratio")}} erzeugen können, indem wir eine einzelne Dimension (nicht beide oder keine) festgelegt und einen anderen Wert als `1` (oder `1/1`) angegeben hätten. Sie wollen dies wahrscheinlich nicht tun, aber es ist gut zu wissen, dass es möglich ist.

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

Wir haben eine einzelne Dimension deklariert; `100vh` ist die volle Höhe des Ansichtsfensters des Beispiel-{{htmlelement("iframe")}}. Damit `aspect-ratio` auf ersetzte Elemente angewendet werden kann, darf nur eine Dimension festgelegt sein. Das Festlegen beider oder keiner Dimension funktioniert nicht.

### Ersetzte Elemente innerhalb ihrer Container anpassen

Um ein ersetztes Element an die Abmessungen seines Containers anzupassen und dabei sein intrinsisches Seitenverhältnis beizubehalten, setzen Sie den Wert der {{cssxref("object-fit")}}-Eigenschaft auf `cover` oder `contain`. Dadurch wird das ersetzte Element in der Größe angepasst und entweder abgeschnitten, um den Container zu "füllen" oder in einer kleineren Größe vollständig "eingepasst" angezeigt.

In diesem Beispiel wird das quadratische Bild in ein Raster mit drei Elementen eingefügt, von denen jedes ein Seitenverhältnis von `5 / 2` hat.

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

Als nächstes legen wir den Container als Raster fest, in dem jedes Element ein Seitenverhältnis von `2.5` (`5/2`) hat, mit einer minimalen Breite von `150px`. Daher beträgt die minimale Höhe `60px`. Die endgültige Breite und Höhe werden jedoch von der Breite des iframes des Beispiels bestimmt, die basierend auf Ihrer Ansichtsfenstergröße festgelegt wird:

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

Wir dimensionieren dann die Bilder und setzen die `object-fit`-Eigenschaft für die letzten beiden Bilder:

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

Nur das erste Bild ist verzerrt (gestreckt). Wir hätten den `fill`-Wert von `object-fit` verwenden können, um denselben Effekt zu erzielen. Das `cover`-Bild spannt die gesamte Breite des Containers und wird vertikal zentriert, um innerhalb des Containers zu passen. Der `contain`-Wert stellt sicher, dass das Bild innerhalb des Containers enthalten ist, horizontal zentriert und verkleinert wird, um zu passen.

## Festlegung von Seitenverhältnissen für nicht ersetzte Elemente

Während das Seitenverhältnis eines ersetzten Elements standardmäßig beibehalten wird, ändert sich das Seitenverhältnis eines nicht ersetzten Elements üblicherweise, wenn die intrinsische Größe angepasst wird. Beispielsweise kann identischer Inhalt auf einem Breitbildschirm oder in einem weiten übergeordneten Container als drei Zeilen erscheinen, während auf einem schmalen Bildschirm oder Container als acht Zeilen angezeigt wird.

In diesem Beispiel wird dasselbe Zitat in `200px` und `600px` breiten Containern angezeigt, und ein Quadrat wird mit einer Höhe festgelegt, die seiner `200px`-Breite entspricht:

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

Um das Problem bei der Einstellung des Seitenverhältnisses eines nicht ersetzten Elements durch Größenabmessungen hervorzuheben, schalten Sie die {{cssxref("overflow")}}-Eigenschaft zwischen `auto` und `visible` um.

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

Während es möglich ist, ein Seitenverhältnis für nicht ersetzte Elemente zu definieren, indem beide Dimensionen festgelegt und überlaufender Inhalt verborgen wird, bietet die CSS-{{cssxref("aspect-ratio")}}-Eigenschaft explizite Unterstützung für das Seitenverhältnis. Dies bedeutet, dass ein bestimmtes Seitenverhältnis festgelegt werden kann, selbst wenn die Inhalte oder Bildschirmgrößen nicht bekannt sind.

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

Jede Box hat eine definierte Dimension: die {{cssxref("inline-size")}}, was die Breite in horizontalen Sprachen ist, wird auf {{cssxref("max-content")}} gesetzt, was die Größe auf das Maximale setzt, was erforderlich ist, um den Inhalt ohne Umbruch zu gewährleisten. Die zweite Dimension, in diesem Fall die {{cssxref("block-size")}} oder {{cssxref("height")}}, wird so gesetzt, dass sie genauso lang ist wie die erste Dimension. Dies wird mit der {{cssxref("aspect-ratio")}}-Eigenschaft erreicht. Wir haben das gewünschte Breite-zu-Höhe-Verhältnis des Element-Kastens auf `1` festgelegt, was dem gleichen wie `1/1`, einem Quadrat, entspricht. Dies setzt die Blockrichtung so, dass sie der Breite des Elements entspricht, ohne die {{cssxref("height")}}- oder {{cssxref("block-size")}}-Eigenschaften zu verwenden.

In diesen Beispielen wurde eine Größe explizit auf das Element selbst gesetzt. Wenn mit nicht ersetzten Elementen gearbeitet wird, kommt das Seitenverhältnis ins Spiel, wenn keine Größenabmessung explizit gesetzt ist.

### Erzeugen eines Kreises basierend auf der Containergröße

Die Inline-Größe von nicht ersetzten Block-Elementen ist die Größe ihrer [Content-Box](/de/docs/Web/CSS/box-edge#content-box). Da sie von Natur aus eine Größe haben, müssen sie keine explizite Größe haben, damit die `aspect-ratio`-Eigenschaft funktioniert.

In diesem Beispiel haben wir einen {{htmlelement("div")}}-Container, der `200px` breit ist und `5px` Polsterung auf jeder Seite enthält. Daher beträgt die Inline-Größe der Content-Box `190px`. Ohne eine Höhe oder Breite auf dem verschachtelten {{htmlelement("p")}}-Element zu setzen, wissen wir, dass seine Inline-Größe `190px` beträgt. Mit `aspect-ratio: 1` eingestellt, wird der Absatz `190px` hoch, es sei denn, er hat sichtbaren überlaufenden Inhalt, der ihn größer macht (was er nicht hat).

Die Höhe des `<div>`-Elements ist nicht explizit festgelegt, aber es enthält den `190px` hohen Absatz, die `5px` Polsterung oben und unten sowie die kombinierten Höhen der Standard-Top- und Bottom-Ränder von `<p>`. Infolgedessen ist es höher als breit. Beide Elemente haben einen {{cssxref("border-radius")}} von `50%`, sodass der Container oval und das Kind mit einem `aspect-ratio` von `1` aber ohne explizit definierte Inline- oder Blockgrößen ein Kreis ist.

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

Um den `<div>`-Container zu einem Kreis zu machen, können wir die `height` und `width` auf denselben Wert setzen oder `aspect-ratio: 1` festlegen und den `overflow` auf `auto` oder `hidden` stellen. Alternativ können wir einfach die Ränder des Absatzes mit [`margin-block: 0`](/de/docs/Web/CSS/margin-block) entfernen. Beide Optionen werden unten gezeigt.

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

Schauen wir uns einige Situationen an, in denen Sie `aspect-ratio` verwenden können, um einige häufige Herausforderungen bei der Erstellung responsiver Designs zu lösen.

### Externe Ressourcen responsiv machen

Alle Inhalte sollten responsiv sein, auch wenn es sich um eingebettete externe Inhalte handelt, wie z.B. Videos von TikTok, YouTube oder Instagram. Der Code-Ausschnitt, den Sie einfügen, um diese externen Videos einzubetten, erstellt üblicherweise ein {{htmlelement("iframe")}}.

Während ein {{htmlelement("video")}}-Element typischerweise das Seitenverhältnis seiner Mediendatei annimmt, fehlt den `iframe`-Elementen diese Fähigkeit. Dies stellt die Herausforderung dar, sicherzustellen, dass das `<iframe>` responsiv ist und gleichzeitig das Seitenverhältnis des darin enthaltenen Videos beibehält. Eine der Techniken, die wir verwenden können, besteht darin, die Breite des iframes auf `100%` seines Containers oder `100vw` zu setzen, um die Breite des Ansichtsfensters unabhängig von der Größe des Ansichtsfensters anzupassen. Das Setzen einer festen Höhe kann jedoch dazu führen, dass das Video gestreckt oder gestaucht wird. Stattdessen setzen wir das `aspect-ratio` auf den Container des Videos und passen es so an, dass es dasselbe Seitenverhältnis wie das Video hat. Problem gelöst!

Zum Kontext: Das Standard-Seitenverhältnis von YouTube-Videos beträgt 16:9, wenn sie auf einem Desktop-Computer oder Laptop angesehen werden, während TikTok- und Instagram-Videos ein Seitenverhältnis von 9:16 haben.

```css
.youtube {
  aspect-ratio: 16/9;
}

.instagram,
.tiktok {
  aspect-ratio: 9/16;
}
```

Wir können das `aspect-ratio`-Feature innerhalb der {{cssxref("@media")}}-Abfrage zusammen mit der `aspect-ratio`-Eigenschaft verwenden, um die Größe sowohl des iframes als auch des darin enthaltenen Videos anzupassen. Dies stellt sicher, dass das Videoinhalt immer so groß wie möglich ist - entweder die volle Breite oder Höhe des Ansichtsfensters einnimmt, unabhängig von der Ansichtsfenstergröße - und ein bestimmtes Seitenverhältnis beibehält.

Wir können die landschaftlich orientierten YouTube-Videos auf die Breite des Ansichtsfensters einstellen und die hochformatig orientierten TikTok- und Instagram-Video-iframes auf die Höhe des Ansichtsfensters. Wenn das Seitenverhältnis eines Ansichtsfensters breiter als 16:9 ist, setzen wir das YouTube-Video auf die Höhe des Ansichtsfensters. Wenn das Ansichtsfenster schmaler als 9:16 ist, setzen wir sowohl Instagram- als auch TikTok-Videos auf die Breite des Ansichtsfensters.

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

Ein Gitter aus quadratischen Zellen kann erstellt werden, indem feste [Spurgrößen der Spalten](/de/docs/Web/CSS/grid-template-columns) definiert werden, sodass jede Zeile derselben Größe wie die Spalte ist. Bei der Erstellung responsiver Gitter mit `auto-fill`, um so viele Spuren wie möglich innerhalb des Containers zu füllen, wird die Breite jedes Elements jedoch unsicher. Dies macht es schwierig, die geeignete Höhe für das Erstellen quadratischer Elemente zu bestimmen.

Durch das Setzen eines Seitenverhältnisses auf die Elemente können wir sicherstellen, dass, wenn die Gitternetz-Elemente ausgelegt werden, jedes Gitternetz-Element so hoch wie breit ist und quadratische Gitternetz-Elemente entstehen, unabhängig von den Abmessungen des Containers.

In diesem Beispiel von quadratischen Gitternetz-Elementen sind die Gitternetz-Spuren automatisch dimensioniert, wobei ihre Größe von den Elementen übernommen wird. Jedes Element ist mindestens `95px` breit, könnte jedoch viel breiter sein. Unabhängig von der Breite wird jedes Element ein Quadrat sein, wobei die Höhen durch das `aspect-ratio` auf die Breite abgestimmt wird.

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

Um sicherzustellen, dass der Inhalt eines Gitternetz-Elements nicht über die bevorzugte Höhe hinauswächst, die durch das `aspect-ratio` festgelegt wird, setzen Sie die {{cssxref("min-height")}} auf `0` und den {{cssxref("overflow")}} auf einen anderen Wert als `visible`. Dies funktioniert für von Natur aus dimensionierte Inhalte. Wenn Sie Inhalte haben, die von Natur aus größer als der verfügbare Platz sind, setzen Sie diesen Inhalt so, dass er nicht größer als das Gitternetz-Element ist, indem Sie die {{cssxref("max-height")}} (oder {{cssxref("max-width")}}, abhängig vom Inhalt) auf `100%` setzen.

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
