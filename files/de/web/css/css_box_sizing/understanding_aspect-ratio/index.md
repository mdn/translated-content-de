---
title: Verstehen und Einstellen von Seitenverhältnissen
slug: Web/CSS/CSS_box_sizing/Understanding_aspect-ratio
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Jedes auf die Seite gerenderte Element hat eine Höhe und eine Breite und somit ein {{Glossary("aspect_ratio", "Seitenverhältnis")}}, welches das Verhältnis zwischen Breite und Höhe ist. Die natürlichen Dimensionen eines Medienelements, also seine Größe ohne jegliche Größenanpassung, Skalierung, Zoom oder angewandte Ränder, werden als seine natürliche oder {{Glossary("intrinsic_size", "intrinsische Größe")}} bezeichnet. Die intrinsische Größe eines Elements wird durch das Element selbst bestimmt, nicht durch die Anwendung von Formatierungen wie [Box-Größeneinstellung](/de/docs/Web/CSS/CSS_box_sizing) oder das Setzen von Rand-, Margin- oder Paddingbreiten.

Bei der Entwicklung von Websites möchten Sie oft die Breite eines Elements auf einen Prozentsatz der Größe des Viewports oder des übergeordneten Containers einstellen und die Höhe proportional ändern, sodass ein bestimmtes Seitenverhältnis je nach Größe des Viewports beibehalten wird. Für ersetzte Elemente wie Bilder und Videos ist es nicht nur notwendig, ein bestimmtes Seitenverhältnis beizubehalten, um {{Glossary("responsive_web_design", "responsives Webdesign")}} zu erstellen, sondern auch ein wesentlicher Bestandteil zur Schaffung einer guten Benutzererfahrung. Das Festlegen eines Seitenverhältnisses für ein Asset verhindert Lade-[Jank](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images) – das Layout-Verschiebung, die auftritt, wenn Medien geladen werden, nachdem die Seite bereits gezeichnet wurde, eine Neuanordnung verursacht, weil der Platz für das Asset nicht reserviert wurde.

Mit CSS können Sie die Größe von ersetzten und nicht-ersetzten Elementen basierend auf ihrem Seitenverhältnis anpassen. In diesem Leitfaden werden wir die Eigenschaft `aspect-ratio` kennenlernen, Seitenverhältnisse für ersetzte und nicht-ersetzte Elemente diskutieren und dann einige gängige Anwendungsfälle für Seitenverhältnisse untersuchen.

## Wie die Eigenschaft `aspect-ratio` funktioniert

Der CSS-Wert {{cssxref("aspect-ratio")}} definiert das bevorzugte Breiten-Höhen-Verhältnis eines Element-Blocks. Der Wert ist entweder ein {{cssxref("ratio")}}, das Schlüsselwort `auto` oder eine durch Leerzeichen getrennte Kombination aus beidem.

Das `<ratio>` ist das Verhältnis von Breite zu Höhe, in dieser Reihenfolge. Es wird durch zwei positive {{cssxref("number")}}-Werte dargestellt, die durch einen Schrägstrich (`/`) oder eine einzelne `<number>` getrennt sind. Wird eine einzelne Zahl verwendet, entspricht dies dem Schreiben des Verhältnisses als `<number> / 1`, was auch der Breite geteilt durch die Höhe entspricht.

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

Die Wirkung des `auto`-Schlüsselworts hängt davon ab, ob das Element, auf das es angewendet wird, ein ersetztes Element ist oder nicht. Bei ersetzten Elementen mit einem intrinsischen Seitenverhältnis bedeutet `auto`, dass das intrinsische Seitenverhältnis verwendet werden sollte. In allen anderen Fällen bedeutet der `auto`-Wert, dass der Block kein bevorzugtes Seitenverhältnis hat. In beiden Fällen ist dies das Standardverhalten, als ob keine `aspect-ratio`-Eigenschaft angewendet wurde.

Wenn der Wert sowohl das `auto`-Schlüsselwort als auch ein `<ratio>`-Wert enthält, wie in `aspect-ratio: auto 2 / 3;` oder `aspect-ratio: 0.75 auto;`, wird der `auto`-Wert auf ersetzte Elemente mit einem natürlichen Seitenverhältnis angewendet, und das angegebene Verhältnis von `width / height` oder `<number>` wird als bevorzugtes Seitenverhältnis verwendet.

Sie werden das Wort "bevorzugtes" in den obigen Definitionen bemerkt haben. Der `aspect-ratio`-Wert wird nicht immer angewendet, wenn er gesetzt wird. Die `aspect-ratio`-Eigenschaft setzt ein "bevorzugtes" Seitenverhältnis, sodass es nur dann von Bedeutung ist, wenn mindestens eine der Blockgrößen automatisch ist.

Wenn sowohl die Höhe als auch die Breite oder die Inline- und Blockgrößen explizit festgelegt sind, wird der Wert der `aspect-ratio`-Eigenschaft ignoriert. In diesem Fall darf keine Dimension automatisch dimensioniert werden - die bevorzugten Größen sind explizit festgelegt - sodass die `aspect-ratio`-Eigenschaft keine Wirkung hat. Wenn Sie sowohl die Inline- als auch die Blockdimensionen angeben, haben diese Vorrang.

Bei ersetzten Elementen, wenn Sie nicht explizit einen Wert (außer `auto`) für eine der Dimensionen festlegen, werden beide auf ihre intrinsische Größe zurückgesetzt (ein `aspect-ratio`-Wert wird nicht angewendet). Der `aspect-ratio` wird auf nicht-ersetzte Elemente angewendet, die keine Dimension explizit festgelegt haben, da nicht-ersetzte Elemente entweder {{Glossary("Intrinsic_Size", "intrinsisch")}} oder {{Glossary("Intrinsic_Size#extrinsic_sizing", "extrinsisch")}} dimensioniert sind, ihre Größe aus ihrem Inhalt, Container, [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) Eigenschaften usw. beziehen.

Wenn ein Element auf der Seite gerendert wird, wenn kein CSS angewendet wird und keine HTML-Größenattribute enthalten sind, rendert das Benutzeragent das Objekt in seiner natürlichen Größe.

## Anpassen von Seitenverhältnissen ersetzter Elemente

Ersetzte Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden mit Medien ersetzt, die festgelegte Dimensionen und somit ein intrinsisches Seitenverhältnis haben. Betrachten Sie ein Rasterbild, wie ein JPEG, PNG oder GIF. Wenn Sie ein Bild auf einer Seite platzieren und keine Höhe oder Breite festlegen, entweder über {{htmlelement("img")}}-Attribute oder mit CSS, wird es in seiner intrinsischen Größe angezeigt.

```html hidden live-sample___original
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg?image=good"
  alt="220 pixel square pride flag" />
```

{{EmbedLiveSample("original", "100", "230")}}

Dies ist ein `220px` großes quadratisches Bild ohne angewandtes CSS; es wird in seiner intrinsischen oder Standardgröße angezeigt.

Wenn ersetzter Inhalt automatisch dimensioniert wird oder Sie eine Größe nur für eine Dimension angeben, beispielsweise einen Wert für `width` festlegen, wird der Browser die andere Dimension automatisiert anpassen, in diesem Fall die Höhe, während das ursprüngliche Seitenverhältnis des Mediums beibehalten wird.

In diesem Beispiel ist nur die {{cssxref("width")}} für das Bild festgelegt, sodass der Benutzeragent sein Seitenverhältnis beibehält. Dasselbe Bild wird dreimal wiederholt und mit unterschiedlichen Breiten angezeigt: `55px`, `110px` und in seiner natürlichen Größe von `220px` über den Wert [`width: auto`](/de/docs/Web/CSS/width).

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

Nur wenn Sie Größenangaben für beide Dimensionen angeben, besteht das Risiko, das ersetzte Element zu verzerren. Wenn Sie zum Beispiel `width: 100vw;` und `height: 100vh;` auf ein Bild anwenden, wird ein variables Seitenverhältnis erstellt; das Bild erscheint entweder gestreckt oder zusammengedrückt, wenn das Seitenverhältnis des Viewports von dem des natürlichen Bildseitenverhältnisses abweicht.

In diesem Beispiel wird das gleiche Bild dreimal wiederholt, explizit dimensioniert mit demselben {{cssxref("height")}}-Wert (`110px`), aber unterschiedlichen {{cssxref("width")}}-Werten (`55px`, `110px` und `220px`).

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

Wir haben die Bilder absichtlich verzerrt, indem wir sowohl eine `height` als auch `width` festgelegt haben: Das erste haben wir zusammengedrückt und das dritte gestreckt.

Wir hätten diesen gleichen verzerrten Effekt mithilfe der CSS-Eigenschaft {{cssxref("aspect-ratio")}} erzeugen können, indem wir eine einzige Dimension festlegen (nicht beide oder keine) und einen anderen Wert als `1` (oder `1 / 1`) angeben. Sie möchten dies wahrscheinlich nicht tun, aber es ist gut zu wissen, dass es möglich ist.

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

Wir haben eine einzige Dimension deklariert; `100vh` ist die volle Höhe des Beispiel-{{htmlelement("iframe")}}-Viewports. Damit `aspect-ratio` auf ersetzte Elemente angewendet wird, muss nur eine Dimension gesetzt sein. Das Setzen beider oder keiner funktioniert nicht.

### Anpassen ersetzter Elemente an ihre Container

Um ein ersetztes Element an die Dimensionen seines Containers anzupassen und dabei sein intrinsisches Seitenverhältnis beizubehalten, setzen Sie den Wert der {{cssxref("object-fit")}}-Eigenschaft auf `cover` oder `contain`. Dies wird das ersetzte Element skalieren und entweder so zuschneiden, dass es den Container "voll abdeckt" oder es bei kleinerer Größe vollständig "im Container" anzeigen.

In diesem Beispiel wird das quadratische Bild in ein Raster von drei Elementen eingefügt, wobei jedes ein Seitenverhältnis von `5 / 2` hat.

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

Als Nächstes bezeichnen wir den Container als ein Raster, bei dem jedes Element ein Seitenverhältnis von `2,5` (`5/2`) mit einer Mindestbreite von `150px` hat. Die Mindesthöhe wird daher `60px` betragen. Die endgültige Breite und Höhe wird jedoch von der Breite des iframes des Beispiels bestimmt, die auf der Größe Ihres Viewports basiert:

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

Nur das erste Bild ist verzerrt (gestreckt). Wir hätten den Füllwert von `object-fit` verwenden können, um denselben Effekt zu erzeugen. Das `cover`-Bild erstreckt sich über die gesamte Breite des Containers, zentriert vertikal und zugeschnitten, damit es in den Container passt. Der `contain`-Wert sorgt dafür, dass das Bild im Container enthalten ist, horizontal zentriert und auf die Größe reduziert.

## Seitenverhältnisse für nicht-ersetzte Elemente definieren

Während das Seitenverhältnis eines ersetzten Elements standardmäßig beibehalten wird, ändert die Anpassung der intrinsischen Größe eines nicht-ersetzten Elements in der Regel sein Seitenverhältnis. Beispielsweise kann identischer Inhalt auf einem Breitbildschirm oder in einem breiten übergeordneten Container drei Zeilen anzeigen, aber acht Zeilen auf einem schmalen Bildschirm oder Container.

In diesem Beispiel wird das gleiche Zitat in `200px` und `600px` breiten Containern angezeigt, und ein Quadrat wird mit einer Höhe gesetzt, die seiner Breite von `200px` entspricht:

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

Um das Problem mit dem Festlegen des Seitenverhältnisses eines nicht-ersetzten Elements durch Größenangaben hervorzuheben, schalten Sie die {{cssxref("overflow")}}-Eigenschaft zwischen `auto` und `visible` um.

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

Während es möglich ist, ein Seitenverhältnis auf nicht-ersetzten Elementen zu definieren, indem sowohl die Dimensionen festgelegt werden und überfließender Inhalt versteckt wird, bietet die CSS-Eigenschaft {{cssxref("aspect-ratio")}} explizite Unterstützung für Seitenverhältnisse. Dies bedeutet, dass ein bestimmtes Seitenverhältnis gesetzt werden kann, selbst wenn Sie die Inhalts- oder Bildschirmgrößen nicht kennen.

Im nächsten Beispiel rendern wir quadratische Kästen unabhängig davon, wie breit der Text ist, indem wir `aspect-ratio: 1` auf {{htmlelement("blockquote")}}, ein nicht-ersetztes Element, festlegen:

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

Jeder Kasten hat eine definierte Dimension: Die {{cssxref("inline-size")}}, die in horizontalen Sprachen die Breite ist, ist auf {{cssxref("max-content")}} gesetzt, was die Größe auf die Breite festlegt, die notwendig ist, um den Inhalt ohne Umbruch zu passen. Die zweite Dimension, in diesem Fall die {{cssxref("block-size")}} oder {{cssxref("height")}}, ist so eingestellt, dass sie die gleiche Länge wie die erste Dimension hat. Dies wird durch die {{cssxref("aspect-ratio")}}-Eigenschaft erreicht. Wir haben das gewünschte Breiten-Höhen-Verhältnis des Element-Blocks auf `1` gesetzt, was dasselbe wie `1 / 1`, ein Quadrat, ist. Dies setzt die Blockrichtung so fest, dass sie der Breite des Elements entspricht, ohne die {{cssxref("height")}} oder {{cssxref("block-size")}}-Eigenschaften zu verwenden.

In diesen Beispielen wurde eine Größe explizit auf dem Element selbst festgelegt. Beim Arbeiten mit nicht-ersetzten Elementen kommt das Seitenverhältnis ins Spiel, wenn keine Dimensionsgröße explizit festgelegt ist.

### Einen Kreis basierend auf der Containergröße erstellen

Die Inline-Größe von nicht-ersetzten Blocklevel-Elementen ist die Größe der [Inhaltsbox](/de/docs/Web/CSS/box-edge#content-box) ihres Containers. Da sie standardmäßig eine Größe haben, müssen sie keine explizite Größe haben, damit die `aspect-ratio`-Eigenschaft funktioniert.

In diesem Beispiel haben wir einen Container {{htmlelement("div")}}, der `200px` breit ist, was `5px` Polsterung auf jeder Seite umfasst. Daher beträgt die Inline-Größe der Inhaltsbox `190px`. Ohne eine Höhe oder Breite auf dem verschachtelten {{htmlelement("p")}}-Element festzulegen, wissen wir, dass seine Inline-Größe `190px` ist. Mit `aspect-ratio: 1` gesetzt, wird der Absatz `190px` hoch, es sei denn, er hat sichtbaren überfließenden Inhalt, der ihn höher macht (was er nicht hat).

Die Höhe des `<div>`-Elements ist nicht explizit festgelegt, aber es enthält den `190px` hohen Absatz, die `5px` Polsterung oben und unten und die kombinierten Höhen der Standard-Top- und Bottom-Margen des `<p>`. Infolgedessen ist es höher als es breit ist. Beide Elemente haben einen {{cssxref("border-radius")}} von `50%`, sodass der Container ein Oval ist, während das Kind, mit einem `aspect-ratio` von `1`, aber keiner Inline- oder Blockgröße explizit definiert, ein Kreis ist.

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

Um das `<div>` zu einem Kreis zu machen, können wir die `height` und `width` auf den gleichen Wert setzen oder `aspect-ratio: 1` setzen und das `overflow` auf `auto` oder `hidden` setzen. Alternativ können wir einfach die Margen auf dem Absatz mit [`margin-block: 0`](/de/docs/Web/CSS/margin-block) entfernen. Beide Optionen sind unten dargestellt.

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

Betrachten wir einige Situationen, in denen Sie `aspect-ratio` verwenden können, um einige häufige Herausforderungen bei der Erstellung responsiver Designs zu bewältigen.

### Externe Ressourcen responsiv machen

Alle Inhalte sollten responsiv sein, auch wenn dieser Inhalt externe Einbettungen sind, wie Videos von TikTok, YouTube oder Instagram. Das Code-Snippet, das Sie einfügen, um diese externen Videos einzubetten, erstellt im Allgemeinen ein {{htmlelement("iframe")}}.

Während ein {{htmlelement("video")}}-Element typischerweise das Seitenverhältnis seiner Mediendatei übernimmt, fehlt diese Fähigkeit bei `iframe`-Elementen. Dies stellt die Herausforderung dar, sicherzustellen, dass das `<iframe>` responsiv ist und gleichzeitig das Seitenverhältnis des darin enthaltenen Videos beibehält. Eine der Techniken, die wir verwenden können, besteht darin, die Breite des iframes auf `100%` seines Containers oder `100vw` zu setzen, um die Viewport-Breite unabhängig von der Größe des Viewports zu erreichen. Das Festlegen einer festen Höhe könnte das Video jedoch strecken oder zusammendrücken. Stattdessen setzen wir das `aspect-ratio` auf den Container des Videos, um es auf dasselbe Seitenverhältnis wie das Video abzustimmen. Problem gelöst!

Zur Orientierung: Das Standard-Seitenverhältnis von YouTube-Videos beträgt 16:9, wenn sie auf einem Desktop-Computer oder Laptop angezeigt werden, während TikTok- und Instagram-Videos ein Seitenverhältnis von 9:16 haben.

```css
.youtube {
  aspect-ratio: 16/9;
}

.instagram,
.tiktok {
  aspect-ratio: 9/16;
}
```

Wir können die `aspect-ratio`-Eigenschaft innerhalb der {{cssxref("@media")}}-Abfrage zusammen mit der `aspect-ratio`-Eigenschaft verwenden, um die Größe sowohl des iframes als auch des darin enthaltenen Videos anzupassen. Dies stellt sicher, dass der Videoinhalt immer so groß wie möglich ist - entweder die volle Breite oder Höhe des Viewports einnimmt, unabhängig von der Größe des Viewports - während ein bestimmtes Seitenverhältnis beibehalten wird.

Wir können die YouTube-Videos im Querformat so breit wie den Viewport machen und die hochformatigen TikTok- und Instagram-Video iframes so hoch wie den Viewport ansetzen. Wenn das Seitenverhältnis eines Viewports breiter als 16:9 ist, setzen wir das YouTube-Video auf die Höhe des Viewports. Wenn der Viewport schmaler als 9:16 ist, setzen wir sowohl Instagram- als auch TikTok-Videos auf die Breite des Viewports.

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

Ein Raster quadratischer Zellen kann erstellt werden, indem feste [Spurbreiten](/de/docs/Web/CSS/grid-template-columns) definiert werden, um sicherzustellen, dass jede Zeile die Größe der Spurbreite entspricht. Bei der Erstellung responsiver Raster mit `auto-fill`, um so viele Spuren in den Container zu passen, wird die Breite jedes Elements unsicher. Dies macht es herausfordernd, die geeignete Höhe für die Erstellung quadratischer Elemente zu bestimmen.

Indem ein Seitenverhältnis auf den Elementen festgelegt wird, können wir sicherstellen, dass, wenn die Rastelemente angeordnet werden, jedes Rastelement so hoch wie breit ist, wodurch quadratische Rastelemente unabhängig von den Dimensionen des Containers erstellt werden.

In diesem Beispiel quadratischer Rastelemente sind die Rasterspuren automatisch dimensioniert und nehmen ihre Größe von den Elementen. Jedes Element wird mindestens `95px` breit sein, könnte aber viel breiter sein. Unabhängig von der Breite wird jedes Element quadratisch sein, mit der Höhe bestimmt durch das `aspect-ratio`, um seiner Breite zu entsprechen.

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

Damit der Inhalt eines Rastelements nicht über die bevorzugte Höhe hinaus wächst, die durch das `aspect-ratio` festgelegt wird, setzen Sie die {{cssxref("min-height")}} auf `0` und das {{cssxref("overflow")}} auf einen anderen Wert als `visible`. Dies wird für intrinsisch dimensionierte Inhalte funktionieren. Wenn Sie Inhalte haben, die intrinsisch größer als der verfügbare Raum sind, setzen Sie diese Inhalte so, dass sie nicht größer als das Rastelement sind, indem Sie die {{cssxref("max-height")}} (oder {{cssxref("max-width")}}, je nach Inhalt) auf `100%` setzen.

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

- [CSS Box-Größeneinstellung](/de/docs/Web/CSS/CSS_box_sizing) Modul
