---
title: Verstehen und Festlegen von Seitenverhältnissen
slug: Web/CSS/CSS_box_sizing/Understanding_aspect-ratio
l10n:
  sourceCommit: bbff081938f76bdd6c6fdbf59d2e25e0a7a1cf2a
---

Jedes auf der Seite gerenderte Element hat eine Höhe und eine Breite und damit ein {{Glossary("aspect_ratio", "Seitenverhältnis")}}, also das Verhältnis zwischen Breite und Höhe. Die natürlichen Abmessungen eines Medienobjekts, also seine Größe ohne Anwendung von Größenveränderungen, Skalierung, Zoom oder Rändern, werden als seine natürliche oder {{Glossary("intrinsic_size", "intrinsische Größe")}} bezeichnet. Die intrinsische Größe eines Elements wird durch das Element selbst bestimmt, nicht durch die Anwendung von Formatierungen wie [Boxgrößenanpassung](/de/docs/Web/CSS/CSS_box_sizing) oder das Festlegen von Rand-, Abstands- oder Außenabstandbreiten.

Beim Entwickeln von Websites möchten Sie häufig die Breite eines Elements als Prozentsatz der Ansichtshöhe oder der Größe des übergeordneten Containers festlegen und die Höhe proportional ändern, um dadurch bei der Änderung der Ansichtshöhe ein bestimmtes Seitenverhältnis beizubehalten. Bei ersetzten Elementen wie Bildern und Videos ist das Beibehalten eines bestimmten Seitenverhältnisses nicht nur für die Erstellung eines {{Glossary("responsive_web_design", "reaktionsfähigen Webdesigns")}} notwendig, sondern auch ein wesentlicher Bestandteil für eine gute Benutzererfahrung. Das Festlegen des Seitenverhältnisses eines Assets verhindert das Laden von [Jank](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images) — die Layoutverschiebung, die auftritt, wenn Medien nach dem Rendern der Seite geladen werden und eine Neuanordnung verursachen, weil der Platz für das Asset nicht reserviert wurde.

Mit CSS können Sie die Größe von ersetzten und nicht ersetzten Elementen basierend auf ihrem Seitenverhältnis anpassen. In diesem Leitfaden erfahren wir mehr über die Eigenschaft `aspect-ratio`, diskutieren die Seitenverhältnisse für ersetzte und nicht ersetzte Elemente und untersuchen dann einige typische Anwendungsfälle für Seitenverhältnisse.

## Wie die Eigenschaft `aspect-ratio` funktioniert

Der Wert der CSS-Eigenschaft {{cssxref("aspect-ratio")}} definiert das bevorzugte Breite-zu-Höhe-Verhältnis des Box eines Elements. Der Wert ist entweder ein {{cssxref("ratio")}}, das Schlüsselwort `auto` oder eine durch Leerzeichen getrennte Kombination aus beidem.

Das `<ratio>` ist das Verhältnis von Breite und Höhe, in dieser Reihenfolge. Es wird durch zwei positive {{cssxref("number")}}-Werte dargestellt, die durch einen Schrägstrich (`/`) getrennt sind, oder durch eine einzelne `<number>`. Wenn eine einzelne Zahl verwendet wird, entspricht dies dem Schreiben des Verhältnisses als `<number> / 1`, was auch der Breite geteilt durch die Höhe entspricht.

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

Die Wirkung des Schlüsselworts `auto` hängt davon ab, ob das Element, auf das es angewendet wird, ein ersetztes Element ist oder nicht. Bei ersetzten Elementen mit einem intrinsischen Seitenverhältnis bedeutet `auto`, dass das intrinsische Seitenverhältnis verwendet werden soll. In allen anderen Fällen bedeutet der Wert `auto`, dass das Box kein bevorzugtes Seitenverhältnis hat. In beiden Fällen ist dies das Standardverhalten, als ob keine `aspect-ratio`-Eigenschaft angewendet wurde.

Wenn der Wert sowohl das `auto`-Schlüsselwort als auch einen `<ratio>`-Wert enthält, wie in `aspect-ratio: auto 2 / 3;` oder `aspect-ratio: 0.75 auto;`, wird der `auto`-Wert auf ersetzte Elemente mit einem natürlichen Seitenverhältnis angewendet, und das angegebene Verhältnis der `width / height` oder `<number>` wird als bevorzugtes Seitenverhältnis verwendet.

Sie haben in den obigen Definitionen möglicherweise auf das Wort „bevorzugt“ geachtet. Der `aspect-ratio`-Wert wird nicht immer angewendet, wenn er festgelegt ist. Die Eigenschaft `aspect-ratio` setzt ein "bevorzugtes" Seitenverhältnis, sodass es nur wirksam wird, wenn mindestens eine der Box-Größen automatisch ist.

Wenn sowohl die Höhe als auch die Breite oder Inline- und Blockgrößen explizit festgelegt sind, wird der Wert der Eigenschaft `aspect-ratio` ignoriert. In diesem Fall darf keine Dimension automatisch dimensioniert werden - die bevorzugten Größen sind explizit festgelegt - daher hat die Eigenschaft `aspect-ratio` keine Wirkung. Wenn Sie sowohl die Inline- als auch die Blockdimensionen deklarieren, haben diese Vorrang.

Bei ersetzten Elementen, wenn Sie keinen Wert (außer `auto`) für eine der Dimensionen explizit festlegen, wird standardmäßig ihre intrinsische Größe verwendet (kein `aspect-ratio`-Wert wird angewendet). Die `aspect-ratio` wird auf nicht ersetzte Elemente angewendet, die keine Dimension explizit festgelegt haben, da nicht ersetzte Elemente entweder {{Glossary("Intrinsic_Size", "intrinsisch")}} oder {{Glossary("Extrinsic_size", "extrinsisch")}} dimensioniert sind und ihre Größe aus ihrem Inhalt, Container, [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)-Eigenschaften usw. beziehen.

Wenn ein Element auf die Seite gerendert wird, wird das Objekt ohne angewendetes CSS und ohne HTML-Größenattribute von der Benutzerumgebung in seiner natürlichen Größe dargestellt.

## Anpassen von Seitenverhältnissen ersetzter Elemente

Ersetzte Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden durch Medien ersetzt, die festgelegte Abmessungen und daher ein intrinsisches Seitenverhältnis haben. Betrachten Sie ein Rasterbild, wie zum Beispiel ein JPEG, PNG oder GIF. Wenn Sie ein Bild auf einer Seite platzieren und keine Höhe oder Breite festlegen, entweder über {{htmlelement("img")}}-Attribute oder mit CSS, wird es in seiner intrinsischen Größe angezeigt.

<!-- ignorieren Sie diese Bilder temporär. Testen Sie die Vorschau -->

```html hidden live-sample___original
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg?image=good"
  alt="220 pixel square pride flag" />
```

{{EmbedLiveSample("original", "100", "230")}}

Dies ist ein `220px` großes quadratisches Bild ohne angewendetes CSS; es wird in seiner intrinsischen oder Standardgröße angezeigt.

Wenn ersetzter Inhalt automatisch dimensioniert wird oder Sie nur für eine Dimension, wie z. B. die `width`, eine Größe angeben, wird der Browser die andere Dimension, in diesem Fall die Höhe, automatisch anpassen und dabei das ursprüngliche Seitenverhältnis des Mediums beibehalten.

In diesem Beispiel ist nur die {{cssxref("width")}} des Bildes festgelegt, sodass die Benutzerumgebung dessen Seitenverhältnis beibehält. Dasselbe Bild wird dreimal gezeigt, es hat jeweils unterschiedliche Breiten: `55px`, `110px` und seine natürliche Größe von `220px` mit dem [`width: auto`](/de/docs/Web/CSS/width)-Wert.

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

Nur wenn Sie für beide Dimensionen Größen angeben, besteht die Gefahr, das ersetzte Element zu verzerren. Zum Beispiel, das Setzen von `width: 100vw;` und `height: 100vh;` auf einem Bild erzeugt ein variables Seitenverhältnis; das Bild erscheint entweder gestreckt oder gestaucht, wenn das Seitenverhältnis des Ansichtsfensters vom natürlichen Seitenverhältnis des Bildes abweicht.

In diesem Beispiel wird dasselbe Bild dreimal wiederholt, explizit mit derselben {{cssxref("height")}} (`110px`) aber unterschiedlichen {{cssxref("width")}}-Werten (`55px`, `110px` und `220px`) dimensioniert.

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

Wir haben die Bilder absichtlich verzerrt, indem wir sowohl eine `height` als auch `width` festgelegt haben: wir haben das erste gestaucht und das dritte gestreckt.

Wir hätten diesen gleichen verzerrten Effekt mit der CSS-Eigenschaft {{cssxref("aspect-ratio")}} erzielen können, indem wir eine einzelne Dimension (nicht beide oder keine) gesetzt haben und einen anderen Wert als `1` (oder `1 / 1`) angegeben haben. Sie möchten dies wahrscheinlich nicht tun, aber es ist gut zu wissen, dass es möglich ist.

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

Wir haben eine einzelne Dimension deklariert; `100vh` ist die volle Höhe des Beispiel-{{htmlelement("iframe")}}-Ansichtsfensters. Damit `aspect-ratio` auf ersetzte Elemente angewendet werden kann, darf nur eine Dimension gesetzt sein. Beides festzulegen oder keine, funktioniert nicht.

### Einfügen ersetzter Elemente in ihre Container

Um ein ersetztes Element auf die Dimensionen seines Containers zuzuschneiden und gleichzeitig sein intrinsisches Seitenverhältnis beizubehalten, setzen Sie den Wert der Eigenschaft {{cssxref("object-fit")}} auf `cover` oder `contain`. Dies wird das ersetzte Element vergrößern oder verkleinern und entweder zuschneiden, um den Container zu "bedecken" oder in einer kleineren Größe vollständig „eingeschlossen“ anzuzeigen.

In diesem Beispiel wird das quadratische Bild in ein Raster von drei Elementen eingefügt, wobei jede ein Seitenverhältnis von `5 / 2` hat.

Zu Beginn erstellen wir einen Container mit drei Elementen, von denen jedes ein Bild enthält:

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

Als nächstes bezeichnen wir den Container als Raster, in dem jedes Element ein Seitenverhältnis von `2,5` (`5/2`) mit einer minimalen Breite von `150px` hat. Daher beträgt die Mindesthöhe `60px`. Die endgültige Breite und Höhe werden jedoch durch die Breite des Beispiels-Iframes bestimmt, welche auf der Größe Ihres Ansichtsfensters basieren wird:

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

Nur das erste Bild ist verzerrt (gestreckt). Wir hätten den `fill`-Wert von `object-fit` verwenden können, um denselben Effekt zu erzielen. Das `cover`-Bild erstreckt sich über die gesamte Breite des Containers, vertikal zentriert und zugeschnitten, um in den Container zu passen. Der `contain`-Wert sorgt dafür, dass das Bild im Container enthalten ist, horizontal zentriert und verkleinert, um zu passen.

## Definieren von Seitenverhältnissen für nicht ersetzte Elemente

Während das Seitenverhältnis eines ersetzten Elements standardmäßig beibehalten wird, ändert das Anpassen der intrinsischen Größe eines nicht ersetzten Elements in der Regel dessen Seitenverhältnis. Beispielsweise kann derselbe Inhalt auf einem Breitbildschirm oder in einem breiten übergeordneten Container als drei Zeilen angezeigt werden, aber als acht Zeilen auf einem schmalen Bildschirm oder Container.

In diesem Beispiel wird dasselbe Zitat in Containern mit Breiten von `200px` und `600px` angezeigt, und ein Quadrat wird mit einer Höhe gleich seiner `200px` Breite festgelegt:

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

Um das Problem mit der Einstellung des Seitenverhältnisses eines nicht ersetzten Elements über Größenabmessungen hervorzuheben, schalten Sie die {{cssxref("overflow")}}-Eigenschaft zwischen `auto` und `visible`.

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

Obwohl es möglich ist, ein Seitenverhältnis bei nicht ersetzten Elementen durch Festlegen sowohl der Dimensionen als auch der Ausblendung überschüssigen Inhalts zu definieren, bietet die CSS-Eigenschaft {{cssxref("aspect-ratio")}} explizite Unterstützung für Seitenverhältnisse. Dies bedeutet, dass ein spezifisches Seitenverhältnis festgelegt werden kann, auch wenn Sie die Inhalts- oder Bildschirmgrößen nicht kennen.

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
  border: 1px solid #cccccc;
  padding: 1px;
  margin: 20px 0;
  background-color: #ededed;
}
```

{{EmbedLiveSample("words", "100", "400")}}

Jede Box hat eine definierte Dimension: die {{cssxref("inline-size")}} entspricht der Breite in horizontalen Sprachen und ist auf {{cssxref("max-content")}} gesetzt, was die Größe auf die maximale Breite festlegt, die erforderlich ist, um den Inhalt ohne Umbruch zu enthalten. Die zweite Dimension, in diesem Fall die {{cssxref("block-size")}} oder {{cssxref("height")}}, wird auf die gleiche Länge wie die erste Dimension gesetzt. Dies wird durch die {{cssxref("aspect-ratio")}}-Eigenschaft erreicht. Wir haben das gewünschte Breite-zu-Höhe-Verhältnis des Box des Elements auf `1` festgelegt, was dem Wert `1 / 1` entspricht, einem Quadrat. Dies setzt die Blockrichtung auf die Breite des Elements fest, ohne die Eigenschaften {{cssxref("height")}} oder {{cssxref("block-size")}} zu verwenden.

In diesen Beispielen war eine Größe explizit auf dem Element selbst festgelegt. Bei nicht ersetzten Elementen spielt das Seitenverhältnis eine Rolle, wenn keine Größenabmessung explizit gesetzt ist.

### Einen Kreis basierend auf der Containergröße erstellen

Die Inline-Größe von nicht ersetzten Block-Level-Elementen entspricht der Größe ihres Containers [Content-Box](/de/docs/Web/CSS/box-edge#content-box). Da sie standardmäßig eine Größe haben, müssen sie nicht explizit eine Größe für die `aspect-ratio`-Eigenschaft festlegen.

In diesem Beispiel haben wir einen Container {{htmlelement("div")}}, der `200px` breit ist und auf jeder Seite `5px` Padding hat. Daher beträgt die Inline-Größe der Content-Box `190px`. Ohne eine Höhe oder Breite auf dem geschachtelten {{htmlelement("p")}}-Element festzulegen, wissen wir, dass seine Inline-Größe `190px` beträgt. Mit `aspect-ratio: 1` gesetzt, wird der Absatz `190px` hoch sein, es sei denn, er hat sichtbar übergeordneten Inhalt, der ihn höher macht (was er nicht hat).

Die Höhe des `<div>`-Elements ist nicht explizit festgelegt, aber es enthält den `190px` hohen Absatz, das `5px` Padding oben und unten und die kombinierten Höhen der Standard-Top- und Bottom-Margen von `<p>`. Als Ergebnis ist es höher als es breit ist. Beide Elemente haben einen {{cssxref("border-radius")}} von `50%`, sodass der Container ein Oval ist, während das Kind mit einem `aspect-ratio` von `1` aber ohne explizit definierte Inline- oder Blockgrößen ein Kreis ist.

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

Um das `<div>` zu einem Kreis zu machen, können wir die `height` und `width` auf denselben Wert setzen oder `aspect-ratio: 1` setzen und das `overflow` auf `auto` oder `hidden`. Alternativ können wir einfach die Margen auf dem Absatz mit [`margin-block: 0`](/de/docs/Web/CSS/margin-block) entfernen. Beide Optionen werden unten gezeigt.

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

## Häufige `aspect-ratio` Anwendungsfälle

Werfen wir einen Blick auf einige Situationen, in denen Sie `aspect-ratio` verwenden können, um einige häufige Herausforderungen bei der Erstellung responsiver Designs zu lösen.

### Externe Assets reaktionsfähig machen

Alle Inhalte sollten reaktionsfähig sein, auch wenn es sich um eingebettete Inhalte von Dritten handelt, wie Videos von TikTok, YouTube oder Instagram. Der Code-Snippet, den Sie zum Einbetten dieser externen Videos verwenden, erzeugt in der Regel ein {{htmlelement("iframe")}}.

Während ein {{htmlelement("video")}}-Element typischerweise das Seitenverhältnis der Mediendatei übernimmt, fehlt diese Möglichkeit bei `iframe`-Elementen. Dies stellt die Herausforderung dar, sicherzustellen, dass das `<iframe>` reaktionsfähig ist und gleichzeitig immer das Seitenverhältnis des Videos beibehält, das es enthält. Eine der Techniken, die wir verwenden können, besteht darin, die Breite des iframes auf `100%` seines Containers oder `100vw` einzustellen, um unabhängig von der Größe des Ansichtsfensters die Ansichtsfensterbreite anzupassen. Das Festlegen einer festen Höhe kann das Video jedoch strecken oder stauchen. Stattdessen setzen wir das `aspect-ratio` auf den Container des Videos und passen es an, damit es dasselbe Seitenverhältnis wie das Video hat. Problem gelöst!

Zur Verdeutlichung: Das Standard-Seitenverhältnis von YouTube-Videos beträgt 16:9, wenn sie auf einem Desktop-Computer oder Laptop angezeigt werden, während TikTok- und Instagram-Videos ein Seitenverhältnis von 9:16 haben.

```css
.youtube {
  aspect-ratio: 16/9;
}

.instagram,
.tiktok {
  aspect-ratio: 9/16;
}
```

Wir können die `aspect-ratio`-Funktion im {{cssxref("@media")}}-Abfrage zusammen mit der `aspect-ratio`-Eigenschaft verwenden, um die Größe sowohl des iframes als auch des Videos darin anzupassen. Dies stellt sicher, dass der Videoinhalt immer so groß wie möglich ist – entweder die volle Breite oder Höhe des Ansichtsfensters einnimmt, unabhängig von der Größe des Ansichtsfensters – und gleichzeitig ein spezifisches Seitenverhältnis beibehält.

Wir können die landschaftsorientierten YouTube-Videos so einstellen, dass sie so breit wie das Ansichtsfenster sind, und die vertikal orientierten TitTok- und Instagram-Videos, wennrames so hoch wie das Ansichtsfenster. Wenn das Seitenverhältnis eines Ansichtsfensters breiter als 16:9 ist, stellen wir das YouTube-Video auf die Höhe des Ansichtsfensters ein. Wenn das Ansichtsfenster schmaler als 9:16 ist, stellen wir sowohl die Instagram- als auch die TikTok-Videos auf die Breite des Ansichtsfensters ein.

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

Ein Gitter mit quadratischen Zellen kann erstellt werden, indem feste [Spalten-Track-Größen](/de/docs/Web/CSS/grid-template-columns) definiert werden, um sicherzustellen, dass jede Zeile die Größe des Spalten-Tracks annimmt. Wenn jedoch reaktionsfähige Gitter unter Verwendung von `auto-fill` erstellt werden, um so viele Spalten-Tracks wie möglich innerhalb des Containers zu platzieren, wird die Breite jedes Elements unsicher. Dies macht es schwierig, die geeignete Höhe zu bestimmen, um quadratische Elemente zu erstellen.

Durch das Setzen eines Seitenverhältnisses auf den Elementen können wir sicherstellen, dass, wenn die Gitterelemente ausgelegt werden, jedes Gitterelement so hoch wie breit ist und quadratische Gitterelemente unabhängig von den Abmessungen des Containers erstellt werden.

In diesem Beispiel quadratischer Gitterelemente sind die Gitter-Tracks automatisch dimensioniert und nehmen ihre Größe von den Elementen an. Jedes Element wird mindestens `95px` breit sein, kann aber viel breiter sein. Unabhängig von der Breite wird jedes Element ein Quadrat sein, mit einer Höhe, die durch das `aspect-ratio` bestimmt wird, um seiner Breite zu entsprechen.

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

Damit der Inhalt eines Gitterelements nicht über die bevorzugte Höhe hinauswächst, die durch das `aspect-ratio` festgelegt ist, setzen Sie die {{cssxref("min-height")}} auf `0` und {{cssxref("overflow")}} auf einen anderen Wert als `visible`. Dies funktioniert für intrinsisch dimensionierte Inhalte. Wenn Sie Inhalte haben, die intrinsisch größer als der verfügbare Platz sind, setzen Sie diesen Inhalt, damit er nicht größer als das Gitterelement ist, indem Sie die {{cssxref("max-height")}} (oder {{cssxref("max-width")}}, abhängig vom Inhalt) auf `100%` setzen.

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

- [CSS Boxgrößenanpassung](/de/docs/Web/CSS/CSS_box_sizing) Modul
