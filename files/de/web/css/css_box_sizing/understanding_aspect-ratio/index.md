---
title: Verständnis und Festlegung von Seitenverhältnissen
slug: Web/CSS/CSS_box_sizing/Understanding_aspect-ratio
l10n:
  sourceCommit: 4521a955b41d003ab3b4eba0f9028831e109ca9f
---

{{CSSRef}}

Jedes Element, das auf der Seite gerendert wird, hat eine Höhe und eine Breite und daher ein {{Glossary("aspect_ratio", "Seitenverhältnis")}}, das das Verhältnis zwischen Breite und Höhe darstellt. Die natürlichen Dimensionen eines Medienobjekts, also seine Größe ohne angewandte Größenanpassung, Skalierung, Zoom oder Ränder, sind als seine natürliche oder {{Glossary("intrinsic_size", "intrinsische Größe")}} bekannt. Die intrinsische Größe eines Elements wird durch das Element selbst bestimmt, nicht durch die Anwendung von Formatierungen wie [Box-Sizing](/de/docs/Web/CSS/CSS_box_sizing) oder das Setzen von Rand-, Außenabstand- oder Polsterbreiten.

Beim Entwickeln von Websites möchten Sie häufig die Breite eines Elements auf einen Prozentsatz der Fenster- oder Elternelementgröße setzen und die Höhe proportional ändern lassen, um dadurch ein spezifisches Seitenverhältnis zu beibehalten, das von der Größe des Viewports abhängt. Für ersetzte Elemente wie Bilder und Videos ist es nicht nur notwendig, ein bestimmtes Seitenverhältnis für das {{Glossary("responsive_web_design", "Responsive Webdesign")}} beizubehalten, sondern es ist auch ein wesentlicher Bestandteil einer guten Benutzererfahrung. Das Setzen eines Seitenverhältnisses für ein Asset verhindert das Laden von [Jank](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images) - die Layoutverschiebung, die auftritt, wenn Medien geladen werden, nachdem die Seite bereits gestrichen wurde, was einen Reflow verursacht, weil der Platz für das Asset nicht reserviert wurde.

Mit CSS können Sie die Größe von ersetzten und nicht ersetzten Elementen basierend auf ihrem Seitenverhältnis anpassen. In diesem Leitfaden lernen wir die `aspect-ratio`-Eigenschaft kennen, besprechen Seitenverhältnisse für ersetzte und nicht ersetzte Elemente und untersuchen dann einige häufige Anwendungsfälle für Seitenverhältnisse.

## Funktionsweise der `aspect-ratio`-Eigenschaft

Der CSS-Wert {{cssxref("aspect-ratio")}} definiert das bevorzugte Verhältnis von Breite zu Höhe des Box eines Elements. Der Wert ist entweder ein {{cssxref("ratio")}}, das Schlüsselwort `auto` oder eine durch Leerzeichen getrennte Kombination aus beidem.

Das `<ratio>` ist das Verhältnis von Breite zu Höhe, in dieser Reihenfolge. Es wird durch zwei positive {{cssxref("number")}}-Werte dargestellt, die durch einen Schrägstrich (`/`) oder eine einzelne `<number>` getrennt sind. Wenn eine einzelne Zahl verwendet wird, ist es dasselbe wie das Schreiben des Verhältnisses als `<number> / 1`, was auch die Breite geteilt durch die Höhe ist.

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

Die Wirkung des `auto`-Schlüsselworts hängt davon ab, ob das Element, auf das es angewendet wird, ein ersetztes Element ist oder nicht. Für ersetzte Elemente mit einem intrinsischen Seitenverhältnis bedeutet `auto`, dass das intrinsische Seitenverhältnis verwendet werden sollte. In allen anderen Fällen bedeutet der Wert `auto`, dass die Box kein bevorzugtes Seitenverhältnis hat. In beiden Fällen ist dies das Standardverhalten, als ob keine `aspect-ratio`-Eigenschaft angewendet würde.

Wenn der Wert sowohl das `auto`-Schlüsselwort als auch einen `<ratio>`-Wert enthält, wie in `aspect-ratio: auto 2 / 3;` oder `aspect-ratio: 0.75 auto;`, wird der `auto`-Wert auf ersetzte Elemente mit einem natürlichen Seitenverhältnis angewendet und das angegebene Verhältnis von `width / height` oder `<number>` als bevorzugtes Seitenverhältnis verwendet.

Sie werden bemerkt haben, dass in den obigen Definitionen das Wort "bevorzugt" vorkommt. Der `aspect-ratio`-Wert wird nicht immer angewendet, wenn er gesetzt ist. Die `aspect-ratio`-Eigenschaft legt ein "bevorzugtes" Seitenverhältnis fest, sodass sie nur dann eine Wirkung hat, wenn mindestens eine der Boxgrößen automatisch ist.

Wenn sowohl die Höhe als auch die Breite oder die Inline- und Blockgrößen explizit festgelegt sind, wird der `aspect-ratio`-Eigenschaftswert ignoriert. In diesem Fall darf keine Dimension automatisch dimensioniert sein - die bevorzugten Größen sind explizit festgelegt -, sodass die `aspect-ratio`-Eigenschaft keine Wirkung hat. Wenn Sie sowohl die Inline- als auch die Blockmaße deklarieren, haben diese Vorrang.

Bei ersetzten Elementen, wenn Sie keinen Wert (außer `auto`) für eine der Dimensionen explizit festlegen, wird beides auf ihre intrinsische Größe zurückgesetzt (ein `aspect-ratio`-Wert wird nicht angewendet). Die `aspect-ratio` wird auf nicht ersetzte Elemente angewendet, die keine explizit festgelegte Dimension haben, da nicht ersetzte Elemente entweder {{Glossary("Intrinsic_Size", "intrinsisch")}} oder {{Glossary("Intrinsic_Size#extrinsic_sizing", "extrinsisch")}} dimensioniert sind, wobei sie ihre Größe von ihrem Inhalt, Container, [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)-Eigenschaften usw. beziehen.

Wenn ein Element auf der Seite gerendert wird, wenn kein CSS angewendet wird und keine HTML-Größenattribute enthalten sind, rendert das Benutzerprogramm das Objekt in seiner natürlichen Größe.

## Anpassen der Seitenverhältnisse von ersetzten Elementen

Ersetzte Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden durch Medien ersetzt, die feste Dimensionen haben und daher ein intrinsisches Seitenverhältnis aufweisen. Betrachten Sie ein Rasterbild wie JPEG, PNG oder GIF. Wenn Sie ein Bild auf einer Seite platzieren und keine Höhe oder Breite festlegen, entweder über {{htmlelement("img")}}-Attribute oder mit CSS, wird es in seiner intrinsischen Größe angezeigt.

<!-- diese Bilder vorläufig ignorieren. Vorschau testen -->

```html hidden live-sample___original
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg?image=good"
  alt="220 pixel square pride flag" />
```

{{EmbedLiveSample("original", "100", "230")}}

Dies ist ein `220px` quadratisches Bild ohne angewendetes CSS; es wird in seiner intrinsischen oder Standardgröße angezeigt.

Wenn ersetzter Inhalt automatisch dimensioniert wird oder Sie eine Größe nur für eine Dimension angeben, z. B. einen Wert für `width` festlegen, wird der Browser die andere Dimension, in diesem Fall die Höhe, automatisch ändern, während das ursprüngliche Seitenverhältnis des Mediums beibehalten wird.

In diesem Beispiel ist auf dem Bild nur die {{cssxref("width")}} gesetzt, sodass das Benutzerprogramm das Seitenverhältnis beibehält. Dasselbe Bild wird drei Mal wiederholt und in unterschiedlichen Breiten angezeigt: `55px`, `110px` und in seiner natürlichen Größe von `220px` über den [`width: auto`](/de/docs/Web/CSS/width)-Wert.

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

Nur wenn Sie Größen für beide Dimensionen angeben, besteht das Risiko, das ersetzte Element zu verzerren. Zum Beispiel erzeugt das Setzen von `width: 100vw;` und `height: 100vh;` auf einem Bild ein variables Seitenverhältnis; das Bild erscheint entweder gestreckt oder gestaucht, wenn das Seitenverhältnis des Viewports vom natürlichen Seitenverhältnis des Bildes abweicht.

In diesem Beispiel wird dasselbe Bild dreimal wiederholt, wobei explizit dieselbe {{cssxref("height")}}-Größe (`110px`) aber unterschiedliche {{cssxref("width")}}-Werte (`55px`, `110px` und `220px`) festgelegt wurden.

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

Wir haben die Bilder absichtlich verzerrt, indem wir sowohl eine `height` als auch `width` gesetzt haben: wir haben das erste gestaucht und das dritte gestreckt.

Wir hätten denselben verzerrten Effekt mit der CSS {{cssxref("aspect-ratio")}}-Eigenschaft erzeugen können, indem wir eine Dimension (nicht beide oder keine) setzten und einen anderen Wert als `1` (oder `1 / 1`) angaben. Sie möchten dies wahrscheinlich nicht tun, aber es ist gut zu wissen, dass es möglich ist.

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

Wir haben eine einzelne Dimension deklariert; `100vh` ist die volle Höhe des Beispiel-{{htmlelement("iframe")}}-Viewports. Damit `aspect-ratio` auf ersetzte Elemente angewendet wird, muss nur eine Dimension gesetzt sein. Das Setzen beider oder keiner funktioniert nicht.

### Ersetzen von Elementen innerhalb ihrer Container

Um ein ersetztes Element so an die Dimensionen seines Containers anzupassen, dass sein intrinsisches Seitenverhältnis beibehalten wird, setzen Sie den {{cssxref("object-fit")}}-Eigenschaftswert auf `cover` oder `contain`. Dadurch wird das ersetzte Element skaliert und entweder zugeschnitten, um den Container zu "füllen" oder in einer kleineren Größe "eingepasst" im Container angezeigt.

In diesem Beispiel wird das quadratische Bild in ein Raster aus drei Elementen mit einem Seitenverhältnis von `5 / 2` eingefügt.

Um zu beginnen, erstellen wir einen Container mit drei Elementen, die jeweils ein Bild enthalten:

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

Als nächstes definieren wir den Container als Raster, bei dem jedes Element ein Seitenverhältnis von `2,5` (`5/2`) bei einer Mindestbreite von `150px` hat. Daher wird die minimale Höhe `60px` sein. Allerdings richtet sich die endgültige Breite und Höhe nach der Breite des Beispiel-iFrames, der auf der Größe Ihres Viewports basiert:

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

Nur das erste Bild wird verzerrt (gestreckt). Wir hätten den `fill`-Wert von `object-fit` verwenden können, um denselben Effekt zu erzielen. Das `cover`-Bild erstreckt sich über die gesamte Breite des Containers, zentriert sich vertikal und wird passend zugeschnitten, um in den Container zu passen. Der `contain`-Wert sorgt dafür, dass das Bild im Container enthalten ist, es ist horizontal zentriert und wird verkleinert, um zu passen.

## Festlegen von Seitenverhältnissen für nicht ersetzte Elemente

Während das Seitenverhältnis eines ersetzten Elements standardmäßig beibehalten wird, ändert das Anpassen der intrinsischen Größe eines nicht ersetzten Elements normalerweise dessen Seitenverhältnis. Zum Beispiel kann identischer Inhalt auf einem Breitbildschirm oder in einem breiten Elternelement als drei Zeilen erscheinen, aber als acht Zeilen auf einem schmalen Bildschirm oder Container.

In diesem Beispiel wird dasselbe Zitat in `200px` und `600px` breiten Containern angezeigt. Ein Quadrat wird so gesetzt, dass seine Höhe seiner `200px` Breite entspricht:

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

Um das Problem hervorzuheben, ein Seitenverhältnis eines nicht ersetzten Elements durch seine Dimensionen zu setzen, schalten Sie die {{cssxref("overflow")}}-Eigenschaft zwischen `auto` und `visible` um.

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

Während es möglich ist, ein Seitenverhältnis auf nicht ersetzten Elementen festzulegen, indem sowohl die Dimensionen definiert als auch der überlaufende Inhalt ausgeblendet werden, bietet die CSS {{cssxref("aspect-ratio")}}-Eigenschaft explizite Unterstützung für Seitenverhältnisse. Dies bedeutet, dass ein spezifisches Seitenverhältnis festgelegt werden kann, auch wenn die Inhalts- oder Bildschirmgrößen unbekannt sind.

Im nächsten Beispiel rendert wir quadratische Boxen unabhängig von der Breite des Textes, indem `aspect-ratio: 1` auf {{htmlelement("blockquote")}}, ein nicht-ersetztes Element, gesetzt wird:

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

Jede Box hat eine definierte Dimension: die {{cssxref("inline-size")}}, die in horizontalen Sprachen die Breite ist, wird auf {{cssxref("max-content")}} gesetzt, was die Größe so einstellt, dass sie so breit ist, wie nötig, um den Inhalt ohne Umbruch aufzunehmen. Die zweite Dimension, in diesem Fall die {{cssxref("block-size")}} oder {{cssxref("height")}} wird so eingestellt, dass sie die gleiche Länge wie die erste Dimension hat. Dies wird mit der {{cssxref("aspect-ratio")}}-Eigenschaft erreicht. Das gewünschte Breiten-zu-Höhe-Verhältnis der Box des Elements wurde auf `1` festgelegt, was dem Verhältnis `1 / 1`, einem Quadrat, entspricht. Dadurch wird die Blockrichtung an die Breite des Elements angepasst, ohne die {{cssxref("height")}}- oder {{cssxref("block-size")}}-Eigenschaften zu verwenden.

In diesen Beispielen wurde die Größe explizit auf dem Element selbst festgelegt. Beim Arbeiten mit nicht ersetzten Elementen kommt das Seitenverhältnis ins Spiel, wenn keine Größendimension explizit festgelegt ist.

### Erstellen eines Kreises basierend auf der Containergöße

Die Inline-Größe von Blockebenen nicht ersetzter Elemente ist die Größe ihres [Inhaltsfeldes](/de/docs/Web/CSS/box-edge#content-box) des Containers. Da sie standardmäßig eine Größe haben, muss keine explizite Größe festgelegt werden, damit die `aspect-ratio`-Eigenschaft funktioniert.

In diesem Beispiel haben wir einen {{htmlelement("div")}}-Container, der `200px` breit ist und `5px` Polsterung auf jeder Seite einschließt. Daher beträgt die Inline-Größe des Inhaltsfeldes `190px`. Ohne Höhe oder Breite auf dem verschachtelten {{htmlelement("p")}}-Element zu setzen, wissen wir, dass seine Inline-Größe `190px` ist. Mit `aspect-ratio: 1` gesetzt, wird der Absatz `190px` hoch sein, es sei denn, es hat sichtbaren überlaufenden Inhalt, der ihn (was hier nicht der Fall ist) höher macht.

Die Höhe des `<div>`-Elements ist nicht explizit festgelegt, aber es enthält den `190px` hohen Absatz, die `5px` Polsterung oben und unten und die zusammengefasste Höhe der Standard-Oben- und Unten-Ränder von `<p>`. Dadurch ist es breiter als hoch. Beide Elemente haben einen {{cssxref("border-radius")}} von `50%`, sodass der Container ein Oval und das Kind mit einer `aspect-ratio` von `1`, aber ohne explizit definiertes Inline- oder Blocksizing, ein Kreis ist.

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
  border: 10px solid #ffffff;
  background-color: #f4aab9;
}
```

{{EmbedLiveSample("circle", "100", "250")}}

Um das `<div>` auf einen Kreis zu setzen, können wir die `height` und `width` auf denselben Wert setzen oder `aspect-ratio: 1` setzen und den `overflow` auf `auto` oder `hidden` stellen. Alternativ können wir einfach die Ränder auf dem Absatz mit [`margin-block: 0`](/de/docs/Web/CSS/margin-block) entfernen. Beide Optionen sind unten gezeigt.

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

{{EmbedLiveSample("circle2", "100", "520")}}

## Häufige Anwendungsfälle für `aspect-ratio`

Lassen Sie uns einige Situationen betrachten, in denen Sie `aspect-ratio` verwenden können, um einige häufige Herausforderungen bei der Erstellung von responsiven Designs zu bewältigen.

### Externe Assets responsiv machen

Alle Inhalte sollten responsiv sein, selbst wenn diese Inhalte aus externen Einbettungen wie Videos von TikTok, YouTube oder Instagram bestehen. Der Codeausschnitt, den Sie einbinden, um diese externen Videos einzusetzen, erstellt in der Regel ein {{htmlelement("iframe")}}.

Während ein {{htmlelement("video")}}-Element in der Regel das Seitenverhältnis seiner Mediendatei übernimmt, fehlt `iframe`-Elementen diese Fähigkeit. Dies stellt die Herausforderung dar, sicherzustellen, dass das `<iframe>` responsiv ist, während das Seitenverhältnis des enthaltenen Videos immer eingehalten wird. Eine der Techniken, die wir verwenden können, ist, die Breite des iFrames auf `100%` seines Containers oder `100vw` zu setzen, um die Viewport-Breite zu entsprechen, unabhängig von der Größe des Viewports. Wenn jedoch eine feste Höhe gesetzt wird, könnte das Video gestreckt oder gestaucht werden. Stattdessen setzen wir das `aspect-ratio` auf den Container des Videos, das so ausgerichtet ist, dass es dasselbe Seitenverhältnis wie das Video hat. Problem gelöst!

Zum Kontext: Das Standardseitenverhältnis von YouTube-Videos beträgt 16:9, wenn sie auf einem Desktop-Computer oder Laptop angezeigt werden, während TikTok- und Instagram-Videos ein 9:16-Seitenverhältnis haben.

```css
.youtube {
  aspect-ratio: 16/9;
}

.instagram,
.tiktok {
  aspect-ratio: 9/16;
}
```

Wir können die `aspect-ratio`-Funktion innerhalb der {{cssxref("@media")}}-Anfrage neben der `aspect-ratio`-Eigenschaft verwenden, um die Größe sowohl des iFrames als auch des darin enthaltenen Videos anzupassen. Dadurch wird sichergestellt, dass der Videoinhalt immer so groß wie möglich ist - entweder die volle Breite oder Höhe des Viewports einnimmt, unabhängig von der Größe des Viewports - während ein spezifisches Seitenverhältnis beibehalten wird.

Wir können festlegen, dass die YouTube-Videos im Querformat so breit wie der Viewport sind und die im Hochformat orientierten TitTok- und Instagram-Video-iframes so hoch wie der Viewport sein sollen. Wenn das Seitenverhältnis des Viewports breiter als 16:9 ist, setzen wir das YouTube-Video auf die Höhe des Viewports. Wenn der Viewport schmaler als 9:16 ist, setzen wir sowohl Instagram- als auch TikTok-Videos auf die Breite des Viewports.

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

### Quadratförmige Rasterzellen erstellen

Ein Quadrat-Raster kann erstellt werden, indem feste [Spaltenspurlängen](/de/docs/Web/CSS/grid-template-columns) definiert werden, um sicherzustellen, dass jede Zeile der Größe der Spalte entspricht. Wenn jedoch responsive Rasters mit `auto-fill` erstellt werden, um so viele Spuren wie möglich innerhalb des Containers zu passen, wird die Breite jedes Elements ungewiss. Dies erschwert die Bestimmung der geeigneten Höhe, um zellenförmige Elemente zu erstellen.

Indem wir ein Seitenverhältnis auf die Elemente festlegen, können wir sicherstellen, dass beim Layout der Grid-Elemente jedes Grid-Element so hoch wie breit ist, wodurch quadratische Grid-Elemente unabhängig von den Dimensionen des Containers entstehen.

In diesem Beispiel für quadratische Grid-Elemente sind die Grid-Tracks automatisch dimensioniert, und nehmen ihre Größe von den Elementen. Jedes Element wird mindestens `95px` breit sein, aber es könnte viel breiter sein. Egal wie breit, jedes Element wird ein Quadrat sein, wobei die Höhe durch die `aspect-ratio` an seine Breite angepasst wird.

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

Damit der Inhalt eines Grid-Elements nicht die bevorzugte Höhe überschreitet, die durch das `aspect-ratio` festgelegt wird, setzen Sie die {{cssxref("min-height")}} auf `0` und den {{cssxref("overflow")}} auf einen anderen Wert als `visible`. Dies funktioniert für intrinsisch dimensionierte Inhalte. Falls Sie Inhalte haben, die intrinsisch größer als der verfügbare Platz sind, richten Sie den Inhalt so ein, dass er nicht größer als das Grid-Element ist, indem Sie die {{cssxref("max-height")}} (oder {{cssxref("max-width")}}, je nach Inhalt) auf `100%` setzen.

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
