---
title: Verstehen und Festlegen von Seitenverhältnissen
slug: Web/CSS/CSS_box_sizing/Understanding_aspect-ratio
l10n:
  sourceCommit: 0145c6497d2f2206dca1326593fe308f7b771a08
---

{{CSSRef}}

Jedes Element, das auf der Seite gerendert wird, hat eine Höhe und eine Breite und daher ein {{Glossary("aspect_ratio", "Seitenverhältnis")}}, welches das Verhältnis zwischen Breite und Höhe darstellt. Die natürlichen Abmessungen eines Medienobjekts, also seine Größe ohne Anwendung von Größenänderungen, Skalierungen, Zoom oder Rahmen, sind bekannt als seine natürliche oder {{Glossary("intrinsic_size", "intrinsische Größe")}}. Die intrinsische Größe eines Elements wird durch das Element selbst bestimmt, nicht durch die Anwendung von Formatierungen wie [Box Sizing](/de/docs/Web/CSS/CSS_box_sizing) oder das Festlegen von Rahmen-, Rand- oder Füllbreiten.

Bei der Entwicklung von Websites möchten Sie häufig die Breite eines Elements als Prozentsatz der Ansichtport- oder Elterncontainergröße festlegen und die Höhe proportional ändern lassen, um ein bestimmtes Seitenverhältnis beizubehalten, abhängig von der Größe des Ansichtports. Für ersetzte Elemente wie Bilder und Videos ist das Beibehalten eines bestimmten Seitenverhältnisses nicht nur notwendig zur Erstellung von {{Glossary("responsive_web_design", "responsivem Webdesign")}}, sondern auch ein wesentlicher Bestandteil für eine gute Benutzererfahrung. Das Festlegen des Seitenverhältnisses eines Assets verhindert das Laden von [Jank](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images) – die Layoutverschiebung, die auftritt, wenn Medien geladen werden, nachdem die Seite bereits angezeigt wurde, was zu einem Neulayout führt, weil der Platz für das Asset nicht reserviert wurde.

Mit CSS können Sie die Größe von ersetzten und nicht ersetzten Elementen basierend auf ihrem Seitenverhältnis anpassen. In diesem Leitfaden werden wir die `aspect-ratio`-Eigenschaft kennenlernen, Seitenverhältnisse für ersetzte und nicht ersetzte Elemente diskutieren und dann einige häufige Anwendungsfälle von Seitenverhältnissen betrachten.

## Wie die `aspect-ratio`-Eigenschaft funktioniert

Der Wert der CSS-Eigenschaft {{cssxref("aspect-ratio")}} definiert das bevorzugte Breiten-Höhen-Verhältnis eines Element-Box. Der Wert ist entweder ein {{cssxref("ratio")}}, das Schlüsselwort `auto` oder eine durch Leerzeichen getrennte Kombination aus beidem.

Das `<ratio>` ist das Verhältnis von Breite zu Höhe, in dieser Reihenfolge. Es wird durch zwei positive {{cssxref("number")}}-Werte dargestellt, die durch einen Schrägstrich (`/`) getrennt sind oder durch eine einzelne `<number>`. Wenn eine einzelne Zahl verwendet wird, entspricht dies dem Schreiben des Verhältnisses als `<number> / 1`, was auch Breite geteilt durch Höhe ist.

Die folgenden Werte sind alle gleichwertig:

```css
aspect-ratio: 3 / 6;
aspect-ratio: 1 / 2;
aspect-ratio: 0.5 / 1;
aspect-ratio: 0.5;
```

Die folgenden Werte sind auch alle gleichwertig:

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

Die Wirkung des `auto`-Schlüsselworts hängt davon ab, ob das Element, auf das es angewendet wird, ein ersetztes Element ist oder nicht. Für ersetzte Elemente mit einem intrinsischen Seitenverhältnis bedeutet `auto`, dass das intrinsische Seitenverhältnis verwendet werden sollte. In allen anderen Fällen bedeutet der `auto`-Wert, dass die Box kein bevorzugtes Seitenverhältnis hat. In beiden Fällen ist dies das Standardverhalten, als ob keine `aspect-ratio`-Eigenschaft angewendet worden wäre.

Wenn der Wert sowohl das `auto`-Schlüsselwort als auch ein `<ratio>`-Wert enthält, wie `aspect-ratio: auto 2 / 3;` oder `aspect-ratio: 0.75 auto;`, wird der `auto`-Wert auf ersetzte Elemente mit einem natürlichen Seitenverhältnis angewendet und das angegebene Verhältnis der `width / height` oder `<number>` wird als bevorzugtes Seitenverhältnis verwendet.

Sie haben sicherlich das Wort "bevorzugt" in den obigen Definitionen bemerkt. Der `aspect-ratio`-Wert wird nicht immer angewendet, wenn er gesetzt ist. Die `aspect-ratio`-Eigenschaft setzt ein "bevorzugtes" Seitenverhältnis, was nur dann Wirkung hat, wenn mindestens eine der Größen der Box automatisch ist.

Wenn sowohl die Höhe und Breite oder Inline- und Blockgrößen explizit festgelegt sind, wird der `aspect-ratio`-Eigenschaftswert ignoriert. In diesem Fall darf keine Dimension automatisch dimensioniert werden - die bevorzugten Größen sind explizit festgelegt -, sodass die `aspect-ratio`-Eigenschaft keine Wirkung hat. Wenn Sie sowohl die Inline- als auch die Blockdimensionen deklarieren, haben diese Vorrang.

Bei ersetzten Elementen, wenn Sie keinen Wert (außer `auto`) für eine der Dimensionen explizit festlegen, werden beide auf ihre intrinsische Größe zurückgreifen (jede `aspect-ratio`-Wert wird nicht angewendet). Die `aspect-ratio` wird auf nicht ersetzte Elemente angewendet, die keine Dimension explizit festgelegt haben, da nicht ersetzte Elemente entweder {{Glossary("Intrinsic_Size", "intrinsisch")}} oder {{Glossary("Intrinsic_Size#extrinsic_sizing", "extrinsisch")}} dimensioniert sind und ihre Größe von ihrem Inhalt, ihrem Container, [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)-Eigenschaften usw. erhalten.

Wenn ein Element auf der Seite gerendert wird, falls kein CSS angewendet und keine HTML-Größenattribute enthalten sind, wird das Benutzeragent das Objekt in seiner natürlichen Größe rendern.

## Anpassung der Seitenverhältnisse von ersetzten Elementen

Ersetzte Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden durch Medien ersetzt, die festgelegte Dimensionen und daher ein intrinsisches Seitenverhältnis haben. Betrachten Sie ein Rasterbild wie ein JPEG, PNG oder GIF. Wenn Sie ein Bild auf einer Seite platzieren und keine Höhe oder Breite festlegen, entweder über {{htmlelement("img")}}-Attribute oder mit CSS, wird es in seiner intrinsischen Größe angezeigt.

<!-- vorübergehend diese Bilder ignorieren. Vorschau testen -->

```html hidden live-sample___original
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg?image=good"
  alt="220 pixel square pride flag" />
```

{{EmbedLiveSample("original", "100", "230")}}

Dies ist ein `220px` quadratisches Bild ohne angewendetes CSS; es wird in seiner intrinsischen oder Standardgröße angezeigt.

Wenn ersetzter Inhalt automatisch dimensioniert ist oder Sie eine Größe nur für eine Dimension angeben, z.B. eine Wert für `width` setzen, wird der Browser die andere Dimension, in diesem Fall die Höhe, automatisch so dimensionieren, dass das ursprüngliche Seitenverhältnis der Medien beibehalten wird.

In diesem Beispiel ist nur die {{cssxref("width")}} am Bild gesetzt, sodass das Benutzeragent sein Seitenverhältnis bewahrt. Dasselbe Bild wird dreimal wiederholt, angezeigt in unterschiedlichen Breiten: `55px`, `110px` und in seiner natürlichen Größe von `220px` über den Wert [`width: auto`](/de/docs/Web/CSS/width).

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

Erst wenn Sie Größen für beide Dimensionen bereitstellen, besteht die Gefahr, dass das ersetzte Element verzerrt wird. Zum Beispiel, indem `width: 100vw;` und `height: 100vh;` auf ein Bild gesetzt wird, wird ein variables Seitenverhältnis geschaffen; das Bild wird entweder gedehnt oder gestaucht erscheinen, wenn das Seitenverhältnis des Ansichtports vom natürlichen Seitenverhältnis des Bildes abweicht.

In diesem Beispiel wird dasselbe Bild dreimal wiederholt, explizit in derselben {{cssxref("height")}}-Werten (`110px`) aber unterschiedlichen {{cssxref("width")}}-Werten (`55px`, `110px` und `220px`) dimensioniert.

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

Wir haben die Bilder absichtlich verzerrt, indem sowohl eine `height` als auch `width` festgelegt wurden: das erste wurde gestaucht und das letzte gedehnt.

Wir hätten denselben verzerrten Effekt mit der CSS-Eigenschaft {{cssxref("aspect-ratio")}} erzeugen können, indem wir eine einzige Dimension (nicht beide oder keine) setzen und einen anderen Wert als `1` (oder `1 / 1`) angeben. Sie möchten dies wahrscheinlich nicht tun, aber es ist gut zu wissen, dass es möglich ist.

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

Wir haben eine einzige Dimension deklariert; `100vh` ist die volle Höhe des Beispiel-{{htmlelement("iframe")}}-Ansichtports. Damit `aspect-ratio` auf ersetzte Elemente angewendet werden kann, muss nur eine Dimension gesetzt sein. Das Setzen beider oder keiner funktioniert nicht.

### Anpassung ersetzter Elemente innerhalb ihrer Container

Um ein ersetztes Element an die Dimensionen seines Containers anzupassen und dabei sein intrinsisches Seitenverhältnis beizubehalten, setzen Sie den Wert der {{cssxref("object-fit")}}-Eigenschaft auf `cover` oder `contain`. Dies wird das ersetzte Element skalieren und entweder beschneiden, um den Container zu "füllen", oder in einer kleineren Größe anzeigen, vollständig "eingeschlossen" in ihm.

In diesem Beispiel wird das quadratische Bild in ein Raster aus drei Elementen platziert, jedes mit einem Seitenverhältnis von `5 / 2`.

Zuerst erstellen wir einen Container mit drei Elementen, jedes enthält ein Bild:

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

Als nächstes bezeichnen wir den Container als ein Raster, wo jedes Element ein Seitenverhältnis von `2.5` (`5/2`) mit einer Mindestbreite von `150px` hat. Daher wird die Mindesthöhe `60px` betragen. Die endgültige Breite und Höhe hängen jedoch von der Breite des Beispiels-`iframe`s ab, welche basierend auf Ihrer Bildschirmgröße basiert:

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

Dann dimensionieren wir die Bilder und setzen die `object-fit`-Eigenschaft auf den letzten beiden Bildern:

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

Nur das erste Bild ist verzerrt (gestreckt). Wir hätten den `fill`-Wert von `object-fit` verwenden können, um denselben Effekt zu erzielen. Das `cover`-Bild spannt die gesamte Breite des Containers auf, zentriert vertikal und beschneidet, um in den Container zu passen. Der `contain`-Wert stellt sicher, dass das Bild im Container enthalten ist, horizontal zentriert und verkleinert, um zu passen.

## Definition von Seitenverhältnissen für nicht ersetzte Elemente

Während das Seitenverhältnis eines ersetzten Elements standardmäßig beibehalten wird, ändert das Anpassen der intrinsischen Größe eines nicht ersetzten Elements in der Regel sein Seitenverhältnis. Zum Beispiel kann gleicher Inhalt als drei Zeilen auf einem Breitbild oder in einem breiten Eltern-Container erscheinen, aber als acht Zeilen auf einem schmalen Bildschirm oder Container.

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

Um das Problem hervorzuheben, ein Seitenverhältnis einer nicht ersetzten Element über Größenabmessungen festzulegen, schalten Sie die {{cssxref("overflow")}}-Eigenschaft zwischen `auto` und `visible`.

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

Während es möglich ist, ein Seitenverhältnis bei nicht ersetzten Elementen festzulegen, indem sowohl die Dimensionen als auch versteckter Inhalt überläuft, bietet die CSS-Eigenschaft {{cssxref("aspect-ratio")}} explizite Unterstützung für das Seitenverhältnis. Das bedeutet, dass ein spezifisches Seitenverhältnis festgelegt werden kann, selbst wenn Sie die Inhalte oder Bildschirmgrößen nicht kennen.

Im nächsten Beispiel rendern wir quadratische Boxen, unabhängig von der Breite des Textes, indem `aspect ratio: 1` auf {{htmlelement("blockquote")}}, einem nicht ersetzten Element, gesetzt wird:

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

Jede Box hat eine definierte Dimension: die {{cssxref("inline-size")}}, die in horizontalen Sprachen die Breite ist, ist auf {{cssxref("max-content")}} gesetzt, was die Größe so setzt, dass sie benötigt wird, um den Inhalt ohne Umschließung zu passen. Die zweite Dimension, in diesem Fall die {{cssxref("block-size")}} oder {{cssxref("height")}}, wird auf dieselbe Länge wie die erste Dimension gesetzt. Dies wird mit der {{cssxref("aspect-ratio")}}-Eigenschaft erreicht. Wir haben das gewünschte Breiten-Höhen-Verhältnis der Elementbox auf `1` festgelegt, was dasselbe wie `1 / 1`, ein Quadrat. Dies setzt die Blockrichtung so, dass sie der Breite des Elements entspricht, ohne die {{cssxref("height")}} oder {{cssxref("block-size")}}-Eigenschaften zu verwenden.

In diesen Beispielen wurde eine Größe explizit auf dem Element selbst festgelegt. Wenn man mit nicht ersetzten Elementen arbeitet, kommt das Seitenverhältnis ins Spiel, wenn keine Größenabmessung explizit gesetzt ist.

### Einen Kreis basierend auf der Containergröße erstellen

Die Inline-Größe von nicht ersetzten Blockelementen ist die Größe ihrer [content box](/de/docs/Web/CSS/box-edge#content-box) ihres Containers. Da sie standardmäßig eine Größe haben, müssen sie keine explizite Größe gesetzt haben, damit die `aspect-ratio`-Eigenschaft funktioniert.

In diesem Beispiel haben wir einen Container {{htmlelement("div")}}, der `200px` breit ist, inklusive `5px` Padding auf jeder Seite. Daher ist die Inline-Größe der Content-Box `190px`. Ohne eine Höhe oder Breite auf dem verschachtelten {{htmlelement("p")}}-Element zu setzen, wissen wir, dass seine Inline-Größe `190px` beträgt. Mit `aspect-ratio: 1` gesetzt, wird der Absatz `190px` hoch sein, es sei denn, er hat sichtbar überlaufenden Inhalt, der ihn größer macht (was er nicht hat).

Die Höhe des `<div>`-Elements ist nicht explizit gesetzt, aber es enthält den `190px` hohen Absatz, das `5px` Padding oben und unten sowie die verbundenen Höhe der Standard oben und unten Margen von `<p>`. Das Ergebnis ist, dass es höher als breit ist. Beide Elemente haben einen {{cssxref("border-radius")}} von `50%`, also ist der Container ein Oval, während das Kind, mit einer `aspect-ratio` von `1` aber keiner explizit definierten Inline- oder Blockgröße, ein Kreis ist.

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

Um das `<div>` zu einem Kreis zu machen, können wir die `height` und `width` auf denselben Wert setzen, oder `aspect-ratio: 1` setzen und den `overflow` auf `auto` oder `hidden` setzen. Alternativ können wir einfach die Margen auf dem Absatz mit [`margin-block: 0`](/de/docs/Web/CSS/margin-block) entfernen. Beide Optionen werden unten gezeigt.

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

Lassen Sie uns einige Situationen betrachten, in denen Sie `aspect-ratio` verwenden können, um einige häufige Herausforderungen beim Erstellen von responsiven Designs zu adressieren.

### Externe Assets responsiv gestalten

Alle Inhalte sollten responsiv sein, selbst wenn diese Inhalte von Drittanbietern eingebettet werden, wie Videos von TikTok, YouTube oder Instagram. Der Code-Schnipsel, den Sie einfügen, um diese externen Videos einzubetten, erstellt allgemein ein {{htmlelement("iframe")}}.

Während ein {{htmlelement("video")}}-Element typischerweise das Seitenverhältnis seiner Mediendatei übernimmt, fehlt diese Fähigkeit `iframe`-Elementen. Dies stellt die Herausforderung dar, sicherzustellen, dass das `<iframe>` responsiv ist, während immer das Seitenverhältnis des darin enthaltenen Videos beibehalten wird. Eine der Techniken, die wir verwenden können, ist, die Breite des iframes auf `100%` seines Containers oder `100vw` zu setzen, um die Ansichtportbreite unabhängig von der Größe des Ansichtports anzupassen. Ein festgelegte Höhe zu setzen, könnte jedoch das Video dehnen oder stauchen. Stattdessen setzen wir das `aspect-ratio` auf den Container des Videos, so dass es das gleiche Seitenverhältnis wie das Video hat. Problem gelöst!

Zum Verständnis, das Standard-Seitenverhältnis von YouTube-Videos beträgt 16:9, wenn es auf einem Desktop-Computer oder Laptop angezeigt wird, während TikTok- und Instagram-Videos ein 9:16-Seitenverhältnis haben.

```css
.youtube {
  aspect-ratio: 16/9;
}

.instagram,
.tiktok {
  aspect-ratio: 9/16;
}
```

Wir können das `aspect-ratio`-Feature innerhalb der {{cssxref("@media")}}-Abfrage zusammen mit der `aspect-ratio`-Eigenschaft verwenden, um die Größe sowohl des iframes als auch des darin enthaltenen Videos anzupassen. Dies stellt sicher, dass der Videoinhalt immer so groß wie möglich ist - entweder die gesamte Breite oder Höhe des Ansichtports einnehmend, unabhängig von der Größe des Ansichtports - während ein spezifisches Seitenverhältnis beibehalten wird.

Wir können die in der Landschaft ausgerichteten YouTube-Videos so einstellen, dass sie so breit wie der Ansichtport werden und die in Portrait ausgerichteten TitTok- und Instagram-Video-iframes so, dass sie so hoch wie der Ansichtport werden. Wenn das Seitenverhältnis eines Ansichtports breiter als 16:9 ist, setzen wir das YouTube-Video auf die Höhe des Ansichtports. Wenn der Ansichtport schmaler als 9:16 ist, setzen wir sowohl Instagram- als auch TikTok-Videos auf die Breite des Ansichtports.

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

### Grid-Zellen quadratisch machen

Ein Raster aus quadratischen Zellen kann durch Definition von festen [Spaltenspuren](/de/docs/Web/CSS/grid-template-columns) erstellt werden, wobei jede Zeile die Größe der Spaltenspur hat. Allerdings wird beim Erstellen von responsiven Grids, die `auto-fill` verwenden, um so viele Spaltenspuren wie möglich in den Container einzufügen, die Breite jedes Elements ungewiss. Das macht es herausfordernd, die passende Höhe zur Erstellung von quadratischen Elementen zu bestimmen.

Durch das Setzen eines Seitenverhältnisses auf die Elemente können wir sicherstellen, dass, wenn die Grid-Elemente angeordnet sind, jedes Grid-Element so hoch wie breit ist, und quadratische Grid-Elemente unabhängig von den Abmessungen des Containers erstellt werden.

In diesem Beispiel von quadratischen Grid-Elementen sind die Rasterspuren auto-dimensioniert und nehmen ihre Größe von den Elementen. Jedes Element wird mindestens `95px` breit sein, könnte jedoch viel breiter sein. Unabhängig von der Breite wird jedes Element ein Quadrat sein, mit der Höhe, die durch das `aspect-ratio` bestimmt wird, um seiner Breite zu entsprechen.

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

Damit der Inhalt eines Grid-Elements nicht über die bevorzugte Höhe hinauswächst, die durch das `aspect-ratio` festgelegt wird, setzen Sie die {{cssxref("min-height")}} auf `0` und den {{cssxref("overflow")}} auf einen Wert, der nicht `visible` ist. Dies wird für intrinsisch dimensionierten Inhalt funktionieren. Wenn Sie Inhalte haben, die intrinsisch größer als der verfügbare Platz sind, setzen Sie diese Inhalte so, dass sie nicht größer als das Grid-Element sind, indem Sie die {{cssxref("max-height")}} (oder {{cssxref("max-width")}}, abhängig vom Inhalt) auf `100%` setzen.

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
