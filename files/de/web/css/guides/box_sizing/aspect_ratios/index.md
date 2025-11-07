---
title: Verständnis und Festlegung von Seitenverhältnissen
short-title: Aspect ratios
slug: Web/CSS/Guides/Box_sizing/Aspect_ratios
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Jedes Element, das auf der Seite dargestellt wird, hat eine Höhe und eine Breite, und somit auch ein {{Glossary("aspect_ratio", "Seitenverhältnis")}}, das das Verhältnis zwischen Breite und Höhe beschreibt. Die natürlichen Abmessungen eines Medienobjekts, also seine Größe ohne jegliche Größenanpassungen, Skalierungen, Zooms oder angewandte Ränder, werden als seine natürliche oder {{Glossary("intrinsic_size", "intrinsische Größe")}} bezeichnet. Die intrinsische Größe eines Elements wird durch das Element selbst bestimmt und nicht durch angewandte Formatierungen wie [Boxmodell](/de/docs/Web/CSS/Guides/Box_sizing) oder festgelegte Ränder, Abstände oder Polsterbreiten.

Beim Entwickeln von Websites möchten Sie häufig die Breite eines Elements auf einen Prozentsatz der Ansicht oder der Größe des übergeordneten Containers setzen und die Höhe proportional anpassen, um ein bestimmtes Seitenverhältnis beizubehalten, das von der Größe der Ansicht abhängt. Für ersetzte Elemente wie Bilder und Videos ist die Beibehaltung eines bestimmten Seitenverhältnisses nicht nur notwendig für die Erstellung von {{Glossary("responsive_web_design", "responsive Webdesigns")}}, sondern auch ein wesentlicher Bestandteil für eine gute Benutzererfahrung. Die Festlegung des Seitenverhältnisses eines Assets verhindert Lade-[Ruckler](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images) – das Layout-Shift, das auftritt, wenn Medien geladen werden, nachdem die Seite bereits gerendert wurde, wodurch ein Reflow verursacht wird, weil der Platz für das Asset nicht reserviert wurde.

Mit CSS können Sie die Größe von ersetzten und nicht ersetzten Elementen basierend auf ihrem Seitenverhältnis anpassen. In diesem Leitfaden lernen wir die Eigenschaft `aspect-ratio`, diskutieren Seitenverhältnisse für ersetzte und nicht ersetzte Elemente und betrachten dann einige gängige Anwendungsfälle für Seitenverhältnisse.

## Wie die Eigenschaft `aspect-ratio` funktioniert

Der CSS-{{cssxref("aspect-ratio")}}-Eigenschaftswert definiert das bevorzugte Breite-zu-Höhe-Verhältnis des Elementbox. Der Wert ist entweder ein {{cssxref("ratio")}}, das Schlüsselwort `auto`, oder eine aus beiden bestehende, durch Leerzeichen getrennte Kombination.

Das `<ratio>` ist das Verhältnis von Breite zu Höhe, in dieser Reihenfolge. Es wird durch zwei positive {{cssxref("number")}}-Werte dargestellt, die durch einen Schrägstrich (`/`) oder eine einzige `<number>` getrennt sind. Wenn eine einzelne Zahl verwendet wird, entspricht dies dem Schreiben des Verhältnisses als `<number> / 1`, was auch die Breite durch die Höhe geteilt ist.

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

Die Wirkung des `auto`-Schlüsselworts hängt davon ab, ob das Element, auf das es angewendet wird, ein ersetztes Element ist oder nicht. Für ersetzte Elemente mit einem intrinsischen Seitenverhältnis bedeutet `auto`, dass das intrinsische Seitenverhältnis verwendet werden soll. In allen anderen Fällen bedeutet der `auto`-Wert, dass die Box kein bevorzugtes Seitenverhältnis hat. In beiden Fällen ist dies das Standardverhalten, als ob keine `aspect-ratio`-Eigenschaft angewendet wurde.

Wenn der Wert sowohl das `auto`-Schlüsselwort als auch einen `<ratio>`-Wert enthält, wie z.B. `aspect-ratio: auto 2 / 3;` oder `aspect-ratio: 0.75 auto;`, wird der `auto`-Wert auf ersetzte Elemente mit einem natürlichen Seitenverhältnis angewendet und das angegebene Verhältnis von `width / height` oder `<number>` als bevorzugtes Seitenverhältnis verwendet.

Sie werden das Wort "bevorzugt" in den obigen Definitionen bemerkt haben. Der `aspect-ratio`-Wert wird nicht immer angewendet, wenn er festgelegt ist. Die Eigenschaft `aspect-ratio` legt ein "bevorzugtes" Seitenverhältnis fest und hat daher nur dann eine Wirkung, wenn mindestens eine der Größen automatisch ist.

Wenn sowohl die Höhe als auch die Breite oder die Inline- und Block-Größen explizit festgelegt sind, wird der `aspect-ratio`-Eigenschaftswert ignoriert. In diesem Fall darf keine Dimension automatisch sein - die bevorzugten Größen sind ausdrücklich festgelegt - somit hat die `aspect-ratio`-Eigenschaft keinen Effekt. Wenn sowohl die Inline- als auch die Block-Dimensionen erklärt sind, haben diese Vorrang.

Bei ersetzten Elementen, wenn Sie keinen Wert explizit (außer `auto`) auf eine der Dimensionen setzen, werden beide auf ihre intrinsische Größe zurückgesetzt (jeder `aspect-ratio`-Wert wird nicht angewendet). Der `aspect-ratio` wird auf nicht ersetzte Elemente angewendet, die keine explizit festgelegte Dimension haben, da nicht ersetzte Elemente entweder {{Glossary("Intrinsic_Size", "intrinsisch")}} oder {{Glossary("Extrinsic_size", "extrinsisch")}} dimensioniert sind und ihre Größe von ihrem Inhalt, Container, [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) Eigenschaften usw. erhalten.

Wenn ein Element auf der Seite gerendert wird, ohne dass CSS angewendet oder HTML-Größenattribute enthalten sind, rendert der Benutzeragent das Objekt in seiner natürlichen Größe.

## Anpassung der Seitenverhältnisse von ersetzten Elementen

Ersetzte Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden durch Medien ersetzt, die festgelegte Dimensionen und somit ein intrinsisches Seitenverhältnis haben. Betrachten Sie ein Rasterbild, wie ein JPEG, PNG oder GIF. Wenn Sie ein Bild auf eine Seite platzieren und keine Höhe oder Breite festlegen, weder über {{htmlelement("img")}}-Attribute noch mit CSS, wird es in seiner intrinsischen Größe angezeigt.

<!-- diese Bilder vorübergehend ignorieren. Testvorschau -->

```html hidden live-sample___original
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg?image=good"
  alt="220 pixel square pride flag" />
```

{{EmbedLiveSample("original", "100", "230")}}

Dies ist ein `220px` quadratisches Bild ohne angewendetes CSS; es wird in seiner intrinsischen oder Standardgröße angezeigt.

Wenn ersetzter Inhalt automatisch dimensioniert ist oder Sie lediglich eine Dimension angeben, wie z.B. einen Wert für `width`, wird der Browser automatisch die andere Dimension ändern, in diesem Fall die Höhe, während das ursprüngliche Seitenverhältnis des Mediums beibehalten wird.

In diesem Beispiel ist nur die {{cssxref("width")}} am Bild gesetzt, sodass der Benutzeragent das Seitenverhältnis beibehält. Dasselbe Bild wird dreimal wiederholt und in unterschiedlichen Breiten angezeigt: `55px`, `110px` und in seiner natürlichen Größe von `220px` durch den [`width: auto`](/de/docs/Web/CSS/Reference/Properties/width)-Wert.

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

Nur wenn Sie Größen für beide Dimensionen angeben, besteht die Gefahr, das ersetzte Element zu verzerren. Beispielsweise erzeugt das Setzen von `width: 100vw;` und `height: 100vh;` auf einem Bild ein variables Seitenverhältnis; das Bild wird entweder gestreckt oder gestaucht erscheinen, wenn das Seitenverhältnis der Ansicht von dem Bilds natürlichen Seitenverhältnis abweicht.

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

Wir haben die Bilder absichtlich verzerrt, indem wir sowohl eine `height` als auch eine `width` gesetzt haben: wir haben das erste gestaucht und das dritte gestreckt.

Wir hätten denselben verzerrten Effekt mit der CSS-{{cssxref("aspect-ratio")}}-Eigenschaft erzeugen können, indem eine einzelne Dimension (nicht beide oder keine) gesetzt und ein anderer Wert als `1` (oder `1 / 1`) bereitgestellt wird. Sie wollen dies wahrscheinlich nicht tun, aber es ist gut zu wissen, dass es möglich ist.

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

Wir haben eine einzelne Dimension erklärt; `100vh` ist die volle Höhe der Beispiel-{{htmlelement("iframe")}}-Ansicht. Damit `aspect-ratio` auf ersetzte Elemente angewendet werden kann, darf nur eine Dimension festgelegt sein. Das Setzen beider oder keiner funktioniert nicht.

### Anpassen ersetzter Elemente an ihre Container

Um ein ersetztes Element an die Dimensionen seines Containers, während der Beibehaltung seines intrinsischen Seitenverhältnisses, anzupassen, setzen Sie den {{cssxref("object-fit")}}-Eigenschaftswert auf `cover` oder `contain`. Dies wird das ersetzte Element in der Größe anpassen und es entweder abschneiden, um den Container zu "abdecken", oder in einer kleineren Größe anzeigen, vollständig innerhalb davon "enthalten".

In diesem Beispiel wird das quadratische Bild in einem Raster von drei Elementen platziert, jedes mit einem Seitenverhältnis von `5 / 2`.

Zuerst erstellen wir einen Container mit drei Elementen, die jeweils ein Bild enthalten:

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

Als nächstes definieren wir den Container als ein Raster, wobei jedes Element ein Seitenverhältnis von `2.5` (`5/2`) und eine Mindestbreite von `150px` hat. Die Mindesthöhe wird somit `60px` sein. Die endgültige Breite und Höhe wird jedoch durch die Breite des Beispiels-iframe, das auf Ihrer Ansichtsgröße basiert, bestimmt:

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

Nur das erste Bild ist verzerrt (gestreckt). Wir hätten den `fill`-Wert von `object-fit` verwenden können, um denselben Effekt zu erzeugen. Das `cover`-Bild erstreckt sich über die volle Breite des Containers, ist vertikal zentriert und zur Anpassung an den Container zugeschnitten. Der `contain`-Wert stellt sicher, dass das Bild innerhalb des Containers enthalten ist, sitzt horizontal zentriert und ist geschrumpft, um zu passen.

## Festlegen von Seitenverhältnissen für nicht ersetzte Elemente

Während das Seitenverhältnis eines ersetzten Elements standardmäßig beibehalten wird, ändert sich das Seitenverhältnis eines nicht ersetzten Elements normalerweise, wenn die intrinsische Größe angepasst wird. Beispielsweise kann derselbe Inhalt als drei Zeilen auf einem Breitbild oder in einem weiten übergeordneten Container erscheinen, aber als acht Zeilen auf einem schmalen Bildschirm oder Container.

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

Um das Problem mit der Einstellung des Seitenverhältnisses eines nicht ersetzten Elements über die Abmessungsgrößen hervorzuheben, wechseln Sie die {{cssxref("overflow")}}-Eigenschaft zwischen `auto` und `visible`.

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

Während es möglich ist, ein Seitenverhältnis auf nicht ersetzten Elementen durch das Setzen beider Dimensionen und das Verbergen überlaufender Inhalte zu definieren, bietet die CSS-{{cssxref("aspect-ratio")}}-Eigenschaft explizite Unterstützung für Seitenverhältnisse. Dies bedeutet, dass ein spezifisches Seitenverhältnis festgelegt werden kann, selbst wenn Sie die Inhalte oder Bildschirmgrößen nicht kennen.

Im nächsten Beispiel rendert sich das Zitatfeld quadratisch, unabhängig von der Breite des Textes, indem `aspect ratio: 1` auf {{htmlelement("blockquote")}}, ein nicht ersetztes Element, gesetzt wird:

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

Jedes Zitatfeld hat eine Dimension festgelegt: die {{cssxref("inline-size")}}, die in horizontalen Sprachen die Breite ist, ist auf {{cssxref("max-content")}} gesetzt, was die Größe so einstellt, dass sie breit genug ist, um die Inhalte ohne Umbruch zu umfassen. Die zweite Dimension, in diesem Fall die {{cssxref("block-size")}} oder {{cssxref("height")}}, ist so eingestellt, dass sie dieselbe Länge wie die erste Dimension hat. Dies wird durch die {{cssxref("aspect-ratio")}}-Eigenschaft erreicht. Wir haben das gewünschte Breite-zu-Höhe-Verhältnis des Elementrahmens auf `1` festgelegt, was dem gleichen entspricht wie `1 / 1`, also ein Quadrat. Der Blockrichtung passt sich der Breite des Elements an, ohne die {{cssxref("height")}} oder {{cssxref("block-size")}}-Eigenschaften zu verwenden.

In diesen Beispielen wurde die Größe explizit auf dem Element selbst festgelegt. Beim Arbeiten mit nicht ersetzten Elementen kommt das Seitenverhältnis ins Spiel, wenn keine Abmessungsgrößen explizit festgelegt sind.

### Einen Kreis basierend auf der Containergröße erstellen

Die Inline-Größe von nicht ersetzten Blockebenen-Elementen ist die Größe ihrer [Inhaltsbox](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) des Containers. Da sie standardmäßig eine Größe haben, müssen sie keine explizite Größe für die `aspect-ratio`-Eigenschaft festlegen.

In diesem Beispiel haben wir einen Container {{htmlelement("div")}}, der `200px` breit ist, wobei `5px` Polsterung auf jeder Seite enthalten sind. Daher ist die Inline-Größe der Inhaltsbox `190px`. Ohne ein `height` oder `width` auf dem verschachtelten {{htmlelement("p")}}-Element festzulegen, wissen wir seine Inline-Größe ist `190px`. Mit `aspect-ratio: 1` gesetzt, wird der Absatz `190px` hoch, es sei denn, er hat sichtbare überfüllende Inhalte, die ihn größer machen (was er nicht hat).

Die Höhe des `<div>`-Elements wird nicht explizit festgelegt, enthält aber den `190px` hohen Absatz, die `5px` Polsterung oben und unten, und die kombinierten Höhen der Standard-Top- und Bottom-Ränder des `<p>`. Somit ist er höher, als er breit ist. Beide Elemente haben einen {{cssxref("border-radius")}} von `50%`, daher ist der Container ein Oval, während das Kind, mit einem `aspect-ratio` von `1`, aber ohne explizit definierte Inline- oder Blockgrößen, ein Kreis ist.

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

Um das `<div>` zu einem Kreis zu machen, können wir die `height` und `width` auf denselben Wert setzen, oder `aspect-ratio: 1` setzen und den `overflow` auf `auto` oder `hidden` tätig. Alternativ können wir einfach die Ränder auf dem Absatz mit [`margin-block: 0`](/de/docs/Web/CSS/Reference/Properties/margin-block) entfernen. Beide Optionen werden unten gezeigt.

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

Schauen wir uns ein paar Situationen an, in denen Sie `aspect-ratio` verwenden können, um einige gängige Herausforderungen bei der Erstellung von responsiven Designs zu lösen.

### Externe Assets reaktionsfähig machen

Alle Inhalte sollten reaktionsfähig sein, auch wenn diese Inhalte Drittanbieterembeds wie Videos von TikTok, YouTube, oder Instagram sind. Der Codeausschnitt, den Sie zum Einbetten dieser externen Videos einfügen, erzeugt im Allgemeinen ein {{htmlelement("iframe")}}.

Während ein {{htmlelement("video")}}-Element normalerweise das Seitenverhältnis seiner Mediendatei annimmt, fehlt bei `iframe`-Elementen diese Fähigkeit. Dies stellt das Problem sicherzustellen, dass das `<iframe>` immer reaktionsfähig ist und gleichzeitig das Seitenverhältnis des darin enthaltenen Videos beibehält. Eine der Techniken, die wir verwenden können, ist, die Breite des iframes auf `100%` seines Containers oder `100vw` zu setzen, um der Breite des Viewports, ungeachtet der Viewportgröße, zu entsprechen. Das Festlegen einer festen Höhe könnte jedoch das Video strecken oder stauchen. Stattdessen setzen wir die `aspect-ratio` auf den Container des Videos, damit sie dasselbe Seitenverhältnis hat wie das Video. Problem gelöst!

Zur Verdeutlichung beträgt das Standardseitenverhältnis von YouTube-Videos 16:9, wenn sie auf einem Desktop-Computer oder Laptop angezeigt werden, während TikTok- und Instagram-Videos ein 9:16 Seitenverhältnis haben.

```css
.youtube {
  aspect-ratio: 16/9;
}

.instagram,
.tiktok {
  aspect-ratio: 9/16;
}
```

Wir können die `aspect-ratio`-Funktion innerhalb der {{cssxref("@media")}}-Abfrage zusammen mit der `aspect-ratio`-Eigenschaft verwenden, um die Größe sowohl des iframes als auch des darin enthaltenen Videos anzupassen. Dies stellt sicher, dass der Videoinhalt immer so groß wie möglich ist – entweder die vollständige Breite oder Höhe des Viewports einnehmend, unabhängig von der Viewportgröße – während ein bestimmtes Seitenverhältnis beibehalten wird.

Wir können festlegen, dass die landschaftsorientierten YouTube-Videos so breit wie der Viewport sind und die hochformatigen Tiktok- und Instagram-Video- iframes so hoch wie der Viewport sind. Wenn das Seitenverhältnis eines Viewports breiter als 16:9 ist, stellen wir das YouTube-Video auf die Höhe des Viewports ein. Wenn der Viewport schmaler als 9:16 ist, setzen wir beide Instagram- und TikTok-Videos auf die Breite des Viewports.

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

### Rasterzellen quadratisch machen

Ein Raster mit quadratischen Zellen kann durch das Definieren fester [Spaltenspurdimensionen](/de/docs/Web/CSS/Reference/Properties/grid-template-columns) erstellt werden, wobei jede Zeile die Größe der Spaltenspur annimmt. Wenn jedoch reaktive Raster mit `auto-fill` erstellt werden, um so viele Spaltenspuren wie möglich innerhalb des Containers zu passen, wird die Breite jedes Elements unklar. Dies macht es schwierig, die angemessene Höhe festzulegen, um quadratische Elemente zu schaffen.

Indem das Seitenverhältnis auf die Elemente eingestellt wird, können wir sicherstellen, dass, wenn die Rasterelemente layoutiert werden, jedes Rasterelement so hoch wie breit ist und somit quadratische Rasterelemente entsteht, unabhängig von den Containerdimensionen.

In diesem Beispiel von quadratischen Rasterelementen sind die Rasterspuren automatisch dimensioniert und nehmen ihre Größe aus den Elementen. Jedes Element wird mindestens `95px` breit, könnte aber viel breiter sein. Egal wie breit, jedes Element wird ein Quadrat sein, mit der Höhe bestimmt durch das `aspect-ratio`, um ihrer Breite zu entsprechen.

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

Damit der Inhalt eines Rasterelements nicht über die bevorzugte Höhe hinauswächst, die durch das `aspect-ratio` gesetzt wird, setzen Sie die {{cssxref("min-height")}} auf `0` und {{cssxref("overflow")}} auf einen anderen Wert als `visible`. Dies wird für intrinisch dimensionierte Inhalte funktionieren. Wenn Sie Inhalte haben, die größer als der verfügbare Raum sind, setzen Sie diese Inhalte auf nicht größer als das Rasterelement, indem Sie die {{cssxref("max-height")}} (oder {{cssxref("max-width")}}, je nach Inhalt) auf `100%` setzen.

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

- [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_sizing) Modul
