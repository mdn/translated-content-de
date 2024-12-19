---
title: Verstehen und Festlegen von Seitenverhältnissen
slug: Web/CSS/CSS_box_sizing/Understanding_aspect-ratio
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Jedes Element, das auf der Seite gerendert wird, hat eine Höhe und eine Breite und damit ein {{Glossary("aspect_ratio", "Seitenverhältnis")}}, das das Verhältnis zwischen Breite und Höhe darstellt. Die natürlichen Abmessungen eines Medienelements, das heißt, seine Größe ohne jegliche Größenanpassung, Skalierung, Zoom oder angewandte Ränder, sind als seine nativen oder {{Glossary("intrinsic_size", "intrinsischen Größen")}} bekannt. Die intrinsische Größe eines Elements wird durch das Element selbst bestimmt, nicht durch angewandte Formatierungen wie [box sizing](/de/docs/Web/CSS/CSS_box_sizing) oder durch das Festlegen von Rand-, Außen- oder Innenabstandsabmessungen.

Beim Entwickeln von Websites möchten Sie oft in der Lage sein, die Breite eines Elements als Prozentsatz der Größe des Viewports oder des übergeordneten Containers festzulegen und die Höhe proportional ändern zu lassen, um so ein bestimmtes Seitenverhältnis basierend auf der Größe des Viewports beizubehalten. Für ersetzte Elemente wie Bilder und Videos ist die Beibehaltung eines bestimmten Seitenverhältnisses nicht nur notwendig, um {{Glossary("responsive_web_design", "responsives Webdesign")}} zu schaffen, sondern auch ein entscheidender Bestandteil für eine gute Benutzererfahrung. Das Festlegen des Seitenverhältnisses eines Assets verhindert das Laden von [Jank](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images) – die Layoutverschiebung, die auftritt, wenn Medien geladen werden, nachdem die Seite bereits gezeichnet wurde, was einen Neulayout zur Folge hat, da der Platz für das Asset nicht reserviert war.

Mit CSS können Sie die Größe von ersetzten und nicht ersetzten Elementen basierend auf ihrem Seitenverhältnis anpassen. In diesem Leitfaden werden wir über die `aspect-ratio`-Eigenschaft lernen, Seitenverhältnisse für ersetzte und nicht ersetzte Elemente diskutieren und dann einige häufige Anwendungsfälle für Seitenverhältnisse untersuchen.

## Wie die `aspect-ratio`-Eigenschaft funktioniert

Der CSS-Wert der {{cssxref("aspect-ratio")}}-Eigenschaft definiert das bevorzugte Breite-zu-Höhe-Verhältnis der Box eines Elements. Der Wert ist entweder ein {{cssxref("ratio")}}, das Schlüsselwort `auto` oder eine durch Leerzeichen getrennte Kombination aus beidem.

Das `<ratio>` ist das Verhältnis von Breite und Höhe, in dieser Reihenfolge. Es wird durch zwei positive {{cssxref("number")}}-Werte dargestellt, die durch einen Schrägstrich (`/`) getrennt sind, oder durch eine einzelne `<number>`. Wenn eine einzelne Zahl verwendet wird, ist es das gleiche, wie das Verhältnis als `<number> / 1` zu schreiben, was auch die Breite geteilt durch die Höhe ist.

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

Die Wirkung des `auto`-Schlüsselwortes hängt davon ab, ob das Element, auf das es angewendet wird, ein ersetztes Element ist oder nicht. Für ersetzte Elemente mit einem intrinsischen Seitenverhältnis bedeutet `auto`, dass das intrinsische Seitenverhältnis verwendet werden soll. In allen anderen Fällen bedeutet der `auto`-Wert, dass die Box kein bevorzugtes Seitenverhältnis hat. In beiden Fällen ist dies das Standardverhalten, als ob keine `aspect-ratio`-Eigenschaft angewendet würde.

Wenn der Wert sowohl das `auto`-Schlüsselwort als auch einen `<ratio>`-Wert enthält, wie `aspect-ratio: auto 2 / 3;` oder `aspect-ratio: 0.75 auto;`, wird der `auto`-Wert auf ersetzte Elemente mit einem natürlichen Seitenverhältnis angewendet und das angegebene Verhältnis der `width / height` oder `<number>` wird als das bevorzugte Seitenverhältnis verwendet.

Sie werden das Wort "bevorzugt" in den obigen Definitionen bemerkt haben. Der `aspect-ratio`-Wert wird nicht immer angewendet, wenn er festgelegt ist. Die `aspect-ratio`-Eigenschaft legt ein "bevorzugtes" Seitenverhältnis fest und hat daher nur eine Wirkung, wenn mindestens eine der Größen der Box automatisch ist.

Wenn sowohl die Höhe als auch die Breite oder die Inline- und Blockgrößen explizit festgelegt sind, wird der Wert der `aspect-ratio`-Eigenschaft ignoriert. In diesem Fall darf keine Dimension automatisch dimensioniert sein – die bevorzugten Größen sind explizit festgelegt – sodass die `aspect-ratio`-Eigenschaft keine Wirkung hat. Wenn Sie sowohl die Inline- als auch die Blockdimensionen deklarieren, haben diese Vorrang.

Bei ersetzten Elementen, wenn Sie nicht explizit einen anderen Wert als `auto` für eine der Dimensionen festlegen, werden beide standardmäßig auf ihre intrinsische Größe gesetzt (ein `aspect-ratio`-Wert wird nicht angewendet). Die `aspect-ratio` wird auf nicht ersetzte Elemente angewendet, die keine explizit festgelegte Dimension haben, da nicht ersetzte Elemente entweder {{Glossary("Intrinsic_Size", "intrinsisch")}} oder {{Glossary("Intrinsic_Size#extrinsic_sizing", "extrinsisch")}} dimensioniert sind und ihre Größe von ihrem Inhalt, Container, [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)-Eigenschaften usw. erhalten.

Wenn ein Element auf der Seite gerendert wird, und keine CSS angewendet und keine HTML-Größenattribute enthalten sind, rendert der Benutzeragent das Objekt in seiner natürlichen Größe.

## Anpassung der Seitenverhältnisse ersetzter Elemente

Ersetzte Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden durch Medien ersetzt, die feste Abmessungen haben und daher ein intrinsisches Seitenverhältnis haben. Betrachten Sie ein Rasterbild, wie ein JPEG, PNG oder GIF. Wenn Sie ein Bild auf einer Seite platzieren und keine Höhe oder Breite festlegen, entweder über {{htmlelement("img")}}-Attribute oder mit CSS, wird es in seiner intrinsischen Größe dargestellt.

```html hidden live-sample___original
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg?image=good"
  alt="220 pixel square pride flag" />
```

{{EmbedLiveSample("original", "100", "230")}}

Dies ist ein `220px` großes quadratisches Bild ohne angewandtes CSS; es wird in seiner intrinsischen oder Standardgröße angezeigt.

Wenn ersetzter Inhalt automatisch dimensioniert ist oder Sie nur eine Dimension festlegen, wie beispielsweise einen Wert für die `width`, wird der Browser die andere Dimension, in diesem Fall die Höhe, automatisch reskalieren, während das ursprüngliche Seitenverhältnis des Mediums beibehalten wird.

In diesem Beispiel ist nur die {{cssxref("width")}} des Bildes festgelegt, sodass der Benutzeragent sein Seitenverhältnis beibehält. Dasselbe Bild wird dreimal wiederholt, bei unterschiedlichen Breiten angezeigt: `55px`, `110px`, und in seiner natürlichen Größe von `220px` über den [`width: auto`](/de/docs/Web/CSS/width)-Wert.

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

Nur wenn Sie Größen für beide Dimensionen festlegen, besteht die Gefahr, das ersetzte Element zu verzerren. Zum Beispiel erzeugt das Festlegen von `width: 100vw;` und `height: 100vh;` auf einem Bild ein variables Seitenverhältnis; das Bild wird entweder gestreckt oder gestaucht erscheinen, wenn das Seitenverhältnis des Viewports von dem des natürlichen Seitenverhältnisses des Bildes abweicht.

In diesem Beispiel wird dasselbe Bild dreimal wiederholt und mit derselben {{cssxref("height")}} von `110px`, aber unterschiedlichen {{cssxref("width")}}-Werten (`55px`, `110px` und `220px`) explizit dimensioniert.

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

Wir haben die Bilder absichtlich verzerrt, indem wir sowohl eine `height` als auch `width` festgelegt haben: Wir haben das erste gestaucht und das dritte gestreckt.

Wir hätten denselben verzerrten Effekt mit der CSS-{{cssxref("aspect-ratio")}}-Eigenschaft erzielen können, indem wir eine einzige Dimension (nicht beide oder keine) festgelegt und einen anderen Wert als `1` (oder `1 / 1`) angegeben hätten. Sie möchten dies wahrscheinlich nicht tun, aber es ist gut zu wissen, dass es möglich ist.

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

Wir haben eine einzelne Dimension deklariert; `100vh` ist die volle Höhe des Beispiel-{{htmlelement("iframe")}}-Viewports. Damit `aspect-ratio` auf ersetzte Elemente angewendet werden kann, muss nur eine Dimension festgelegt werden. Das Festlegen beider oder keiner funktioniert nicht.

### Anpassung ersetzter Elemente an ihre Container

Um ein ersetztes Element an die Abmessungen seines Containers anzupassen, während sein intrinsisches Seitenverhältnis beibehalten wird, setzen Sie den Wert der {{cssxref("object-fit")}}-Eigenschaft auf `cover` oder `contain`. Dies wird das ersetzte Element in der Größe anpassen und entweder clippen, um den Container zu "bedecken", oder in einer kleineren Größe vollständig "eingeschlossen" anzeigen.

In diesem Beispiel wird das quadratische Bild in einem Raster von drei Elementen platziert, jedes mit einem Seitenverhältnis von `5 / 2`.

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

Als Nächstes definieren wir den Container als ein Raster, bei dem jedes Element ein Seitenverhältnis von `2.5` (`5/2`) mit einer Mindestbreite von `150px` hat. Daher wird die Mindesthöhe `60px` betragen. Allerdings werden die endgültige Breite und Höhe durch die Breite des Beispiel-iframe, die auf Basis Ihrer Viewportgröße basiert, bestimmt:

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

Nur das erste Bild ist verzerrt (gestreckt). Wir hätten den `fill`-Wert von `object-fit` verwenden können, um denselben Effekt zu erzeugen. Das `cover`-Bild spannt die gesamte Breite des Containers auf, ist vertikal zentriert und zugeschnitten, um in den Container zu passen. Der `contain`-Wert stellt sicher, dass das Bild innerhalb des Containers enthalten ist, horizontal zentriert ist und passt.

## Festlegen von Seitenverhältnissen für nicht ersetzte Elemente

Während das Seitenverhältnis eines ersetzten Elements standardmäßig beibehalten wird, ändert das Anpassen der intrinsischen Größe eines nicht ersetzten Elements normalerweise sein Seitenverhältnis. Beispielsweise kann identischer Inhalt auf einem Breitbildschirm oder in einem breiten übergeordneten Container als drei Zeilen erscheinen, aber als acht Zeilen auf einem schmalen Bildschirm oder Container.

In diesem Beispiel wird dasselbe Zitat in `200px` und `600px` breiten Containern angezeigt, und ein Quadrat ist auf eine Höhe eingestellt, die zu seiner `200px` Breite passt:

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

Um das Problem mit der Festlegung des Seitenverhältnisses eines nicht ersetzten Elements über Größenabmessungen hervorzuheben, wechseln Sie die {{cssxref("overflow")}}-Eigenschaft zwischen `auto` und `visible`.

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

Obwohl es möglich ist, ein Seitenverhältnis bei nicht ersetzten Elementen durch das Festlegen beider Dimensionen und das Verstecken von überfließendem Inhalt zu definieren, bietet die CSS-{{cssxref("aspect-ratio")}}-Eigenschaft explizite Unterstützung für das Seitenverhältnis. Dies bedeutet, dass ein bestimmtes Seitenverhältnis festgelegt werden kann, selbst wenn Sie die Inhalts- oder Bildschirmgrößen nicht kennen.

Im nächsten Beispiel rendert wir quadratische Boxen unabhängig von der Breite des Textes, indem wir `aspect ratio: 1` auf {{htmlelement("blockquote")}}, ein nicht ersetztes Element, setzen:

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

Jede Box hat eine definierte Dimension: die {{cssxref("inline-size")}}, die die Breite in horizontalen Sprachen ist, wird auf {{cssxref("max-content")}} gesetzt, die die Größe so einstellt, dass sie so breit ist, wie sie sein muss, um den Inhalt ohne Zeilenumbruch aufzunehmen. Die zweite Dimension, in diesem Fall die {{cssxref("block-size")}} oder {{cssxref("height")}}, ist auf dieselbe Länge wie die erste Dimension eingestellt. Dies wird mit der {{cssxref("aspect-ratio")}}-Eigenschaft erreicht. Wir haben das gewünschte Breite-zu-Höhe-Verhältnis der Box des Elements zu `1` deklariert, was dasselbe wie `1 / 1`, ein Quadrat, ist. Dies setzt die Blockrichtung so, dass sie zur Breite des Elements passt, ohne die {{cssxref("height")}} oder {{cssxref("block-size")}}-Eigenschaften zu verwenden.

In diesen Beispielen wurde eine Größe explizit auf dem Element selbst festgelegt. Bei der Arbeit mit nicht ersetzten Elementen kommt das Seitenverhältnis ins Spiel, wenn keine Größenabmessung explizit festgelegt ist.

### Erstellen eines Kreises basierend auf der Containergröße

Die Inline-Größe von nicht ersetzten Blockelementen ist die Größe ihrer [Inhaltsbox](/de/docs/Web/CSS/box-edge#content-box). Da sie standardmäßig eine Größe haben, brauchen sie keine explizite Größe, um die `aspect-ratio`-Eigenschaft anzuwenden.

In diesem Beispiel haben wir einen Container {{htmlelement("div")}}, der `200px` breit ist und `5px` Innenabstand auf jeder Seite enthält. Daher beträgt die Inline-Größe der Inhaltsbox `190px`. Ohne die Höhe oder Breite des verschachtelten {{htmlelement("p")}}-Elements festzulegen, wissen wir, dass seine Inline-Größe `190px` beträgt. Mit eingestelltem `aspect-ratio: 1` wird der Absatz `190px` hoch sein, es sei denn, es gibt sichtbaren überlaufenden Inhalt, der ihn höher machen würde (was nicht der Fall ist).

Die Höhe des `<div>`-Elements ist nicht explizit festgelegt, aber es enthält den `190px` hohen Absatz, die `5px` Innenabstand oben und unten sowie die kombinierten Höhen der standardmäßigen oberen und unteren Ränder von `<p>`. Dadurch ist es größer als breit. Beide Elemente haben einen {{cssxref("border-radius")}} von `50%`, sodass der Container oval ist, während das Kind mit einem `aspect-ratio` von `1`, aber ohne explizit definierte Inline- oder Blockgrößen, ein Kreis ist.

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

Um das `<div>` zu einem Kreis zu machen, können wir die `height` und `width` auf denselben Wert setzen oder `aspect-ratio: 1` festlegen und den `overflow` auf `auto` oder `hidden` setzen. Alternativ können wir einfach die Ränder des Absatzes mit [`margin-block: 0`](/de/docs/Web/CSS/margin-block) entfernen. Beide Optionen sind unten gezeigt.

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

Schauen wir uns einige Situationen an, in denen Sie `aspect-ratio` verwenden können, um einige häufige Herausforderungen bei der Erstellung von responsivem Design zu bewältigen.

### Externe Assets responsiv machen

Alle Inhalte sollten responsiv sein, auch wenn diese Inhalte von Drittanbietern stammen, wie Videos von TikTok, YouTube oder Instagram. Der Codeausschnitt, den Sie verwenden, um diese externen Videos einzubetten, erstellt normalerweise ein {{htmlelement("iframe")}}.

Während ein {{htmlelement("video")}}-Element typischerweise das Seitenverhältnis seiner Mediendatei übernimmt, fehlt `iframe`-Elementen diese Fähigkeit. Dies stellt die Herausforderung dar, sicherzustellen, dass das `<iframe>` responsiv ist und gleichzeitig das Seitenverhältnis des darin enthaltenen Videos beibehält. Eine der Techniken, die wir verwenden können, besteht darin, die Breite des iframes auf `100%` seines Containers festzulegen oder `100vw`, um die Breite des Viewports unabhängig von der Viewportgröße anzupassen. Wenn jedoch eine feste Höhe eingestellt wird, könnte das Video gestreckt oder gestaucht werden. Stattdessen setzen wir das `aspect-ratio` auf den Container des Videos, um es im selben Seitenverhältnis wie das Video auszurichten. Problem gelöst!

Zur Veranschaulichung: Das Standard-Seitenverhältnis von YouTube-Videos beträgt 16:9, wenn Sie auf einem Desktop-Computer oder Laptop betrachtet werden, während TikTok- und Instagram-Videos ein 9:16-Seitenverhältnis haben.

```css
.youtube {
  aspect-ratio: 16/9;
}

.instagram,
.tiktok {
  aspect-ratio: 9/16;
}
```

Wir können die `aspect-ratio`-Funktion in der {{cssxref("@media")}}-Abfrage neben der `aspect-ratio`-Eigenschaft verwenden, um die Größe sowohl des iframes als auch des darin enthaltenen Videos anzupassen. Dies stellt sicher, dass die Videoinhalte immer so groß wie möglich sind – entweder die gesamte Breite oder Höhe des Viewports einnehmend, unabhängig von der Viewportgröße – und gleichzeitig ein bestimmtes Seitenverhältnis beibehalten.

Wir können die landschaftsorientierten YouTube-Videos so einstellen, dass sie so breit wie der Viewport sind, während Videos von Instagram und TikTok bei schmalerem Viewport entsprechend angepasst werden. Wenn das Seitenverhältnis eines Viewports breiter als 16:9 ist, setzen wir das YouTube-Video auf die Höhe des Viewports. Wenn der Viewport schmaler als 9:16 ist, setzen wir sowohl die Instagram- als auch die TikTok-Videos auf die Breite des Viewports.

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

Ein Gitter von quadratischen Zellen kann erstellt werden, indem feste [Spurgrößen der Spalten](/de/docs/Web/CSS/grid-template-columns) definiert werden und sichergestellt wird, dass jede Zeile die Größe der Spaltenspur entspricht. Beim Erstellen responsiver Gitter durch Verwendung von `auto-fill`, um so viele Spaltenspuren wie möglich innerhalb des Containers unterzubringen, wird jedoch die Breite jedes Elements unsicher. Dies macht es herausfordernd, die geeignete Höhe zur Erstellung quadratischer Elemente zu bestimmen.

Durch Festlegen eines Seitenverhältnisses auf den Elementen können wir sicherstellen, dass beim Anordnen der Giterelemente jedes Gitterelement genauso hoch wie breit ist, was quadratische Gitterelemente unabhängig von den Abmessungen des Containers schafft.

In diesem Beispiel mit quadratischen Giterelementen sind die Gitterspuren automatisch dimensioniert und nehmen ihre Größe von den Elementen. Jedes Element wird mindestens `95px` breit sein, könnte aber viel breiter sein. Unabhängig von der Breite wird jedes Element ein Quadrat sein, wobei die Höhe durch das `aspect-ratio` festgelegt wird, um mit seiner Breite übereinzustimmen.

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

Damit der Inhalt eines Giterelements nicht über die bevorzugte Höhe hinauswächst, die durch das `aspect-ratio` festgelegt ist, setzen Sie die {{cssxref("min-height")}} auf `0` und den {{cssxref("overflow")}} auf einen anderen Wert als `visible`. Dies wird bei intrinsisch dimensionierten Inhalten funktionieren. Wenn Sie Inhalte haben, die von Natur aus größer sind als der verfügbare Platz, setzen Sie diese Inhalte so, dass sie nicht größer als das Giterelement sind, indem Sie die {{cssxref("max-height")}} (oder {{cssxref("max-width")}}, abhängig vom Inhalt) auf `100%` setzen.

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

- [CSS-Box-Sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
