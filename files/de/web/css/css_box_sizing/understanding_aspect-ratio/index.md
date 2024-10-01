---
title: Verstehen und Festlegen von Seitenverhältnissen
slug: Web/CSS/CSS_box_sizing/Understanding_aspect-ratio
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{CSSRef}}

Jedes Element, das auf der Seite gerendert wird, hat eine Höhe und eine Breite und damit ein {{Glossary("aspect_ratio", "Seitenverhältnis")}}, das das Verhältnis zwischen Breite und Höhe ist. Die natürlichen Dimensionen eines Medienobjekts, also seine Größe ohne jegliche Größenanpassungen, Skalierungen, Zooms oder Ränder, werden als seine natürliche oder {{Glossary("intrinsic_size", "intrinsische Größe")}} bezeichnet. Die intrinsische Größe eines Elements wird durch das Element selbst bestimmt und nicht durch die Anwendung von Formatierungen wie [Boxsizing](/de/docs/Web/CSS/CSS_box_sizing) oder das Festlegen von Rand-, Rahmen- oder Auffüllbreiten.

Beim Entwickeln von Websites möchten Sie oft die Breite eines Elements relativ zur Größe des Ansichtsbereichs oder des übergeordneten Containers als Prozentsatz festlegen und die Höhe proportional ändern, um ein bestimmtes Seitenverhältnis je nach Größe des Ansichtsbereichs beizubehalten. Für ersetzte Elemente, wie Bilder und Videos, ist es nicht nur notwendig, ein bestimmtes Seitenverhältnis beizubehalten, um {{Glossary("responsive_web_design", "reaktives Webdesign")}} zu erstellen, sondern es ist auch ein wesentlicher Bestandteil der Bereitstellung einer guten Benutzererfahrung. Das Festlegen des Seitenverhältnisses eines Assets verhindert Ladeverzögerungen—die Layoutverschiebung, die auftritt, wenn Medien geladen werden, nachdem die Seite bereits bemalt wurde und dadurch ein Neulayout verursacht wird, weil der Platz für das Asset nicht reserviert wurde.

Mit CSS können Sie die Größe sowohl von ersetzten als auch von nicht ersetzten Elementen basierend auf ihrem Seitenverhältnis anpassen. In diesem Leitfaden werden wir die Eigenschaft `aspect-ratio` kennenlernen, Seitenverhältnisse für ersetzte und nicht ersetzte Elemente besprechen und dann einige gängige Anwendungsfälle für Seitenverhältnisse untersuchen.

## Wie die Eigenschaft `aspect-ratio` funktioniert

Der CSS-{{cssxref("aspect-ratio")}}-Eigenschaftswert definiert das bevorzugte Breite-zu-Höhe-Verhältnis eines Element-Boxs. Der Wert ist entweder ein {{cssxref("ratio")}}, das Schlüsselwort `auto` oder eine mit Leerzeichen getrennte Kombination von beiden.

Das `<ratio>` ist das Verhältnis von Breite und Höhe, in dieser Reihenfolge. Es wird durch zwei positive {{cssxref("number")}}-Werte dargestellt, die durch einen Schrägstrich (`/`) getrennt sind, oder eine einzelne `<number>`. Wenn eine einzelne Zahl verwendet wird, entspricht dies dem Schreiben des Verhältnisses als `<number> / 1`, was auch die Breite geteilt durch die Höhe ist.

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

Die Wirkung des `auto`-Schlüsselworts hängt davon ab, ob das Element, auf das es angewendet wird, ein ersetztes Element ist oder nicht. Für ersetzte Elemente mit einem intrinsischen Seitenverhältnis bedeutet `auto`, dass das intrinsische Seitenverhältnis verwendet werden sollte. In allen anderen Fällen bedeutet der `auto`-Wert, dass die Box kein bevorzugtes Seitenverhältnis hat. In beiden Fällen ist dies das Standardverhalten, als ob keine `aspect-ratio`-Eigenschaft angewendet wäre.

Wenn der Wert sowohl das `auto`-Schlüsselwort als auch einen `<ratio>`-Wert enthält, wie z. B. `aspect-ratio: auto 2 / 3;` oder `aspect-ratio: 0.75 auto;`, wird der `auto`-Wert auf ersetzte Elemente mit einem natürlichen Seitenverhältnis angewendet und das angegebene Verhältnis der `Breite / Höhe` oder `<number>` wird als bevorzugtes Seitenverhältnis verwendet.

Sie werden das Wort "bevorzugt" in den obigen Definitionen bemerkt haben. Der `aspect-ratio`-Wert wird nicht immer angewendet, wenn er gesetzt wird. Die `aspect-ratio`-Eigenschaft legt ein "bevorzugtes" Seitenverhältnis fest, sie hat also nur dann eine Wirkung, wenn mindestens eine der Boxdimensionen automatisch ist.

Wenn sowohl die Höhe als auch die Breite oder Inline- und Blockgrößen explizit festgelegt sind, wird der `aspect-ratio`-Eigenschaftswert ignoriert. In diesem Fall darf keine Dimension automatisch dimensioniert werden - die bevorzugten Größen sind explizit festgelegt - sodass die `aspect-ratio`-Eigenschaft keine Wirkung hat. Wenn Sie sowohl die Inline- als auch die Blockdimensionen deklarieren, haben diese Vorrang.

Bei ersetzten Elementen, wenn Sie nicht explizit einen Wert (außer `auto`) für eine der Dimensionen festlegen, werden beide standardmäßig auf ihre intrinsische Größe gesetzt (jeglicher `aspect-ratio`-Wert wird nicht angewendet). Die `aspect-ratio` wird auf nicht ersetzte Elemente angewendet, die keine Dimension explizit festgelegt haben, da nicht ersetzte Elemente entweder {{Glossary("Intrinsic_Size", "intrinsisch")}} oder {{Glossary("Intrinsic_Size#extrinsic_sizing", "extrinsisch")}} dimensioniert sind und ihre Größe aus ihrem Inhalt, Container, den [Box-Modell-](/de/docs/Learn/CSS/Building_blocks/The_box_model)-Eigenschaften usw. beziehen.

Wenn ein Element auf der Seite gerendert wird, wenn kein CSS angewendet wird und keine HTML-Größenattribute enthalten sind, rendert der Benutzeragent das Objekt in seiner natürlichen Größe.

## Anpassen von Seitenverhältnissen ersetzter Elemente

Ersetzte Elemente wie {{htmlelement("img")}} und {{htmlelement("video")}} werden durch Medien ersetzt, die festgelegte Dimensionen und daher ein intrinsisches Seitenverhältnis haben. Nehmen wir ein Rasterbild, wie ein JPEG, PNG oder GIF. Wenn Sie ein Bild auf einer Seite platzieren und keine Höhe oder Breite festlegen, entweder über {{htmlelement("img")}}-Attribute oder mit CSS, wird es in seiner intrinsischen Größe angezeigt.

<!-- vorübergehend diese Bilder ignorieren. Vorschau testen -->

```html hidden live-sample___original
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg?image=good"
  alt="220 pixel square pride flag" />
```

{{EmbedLiveSample("original", "100", "230")}}

Dies ist ein `220px` großes quadratisches Bild ohne angewendetes CSS; es wird in seiner intrinsischen oder Standardgröße angezeigt.

Wenn ersetzter Inhalt automatisch dimensioniert ist oder Sie eine Größe nur für eine Dimension festlegen, z. B. einen Wert für die Breite, passt der Browser automatisch die andere Dimension an, in diesem Fall die Höhe, während das ursprüngliche Seitenverhältnis der Medien beibehalten wird.

In diesem Beispiel ist nur die {{cssxref("width")}} des Bildes festgelegt, sodass der Benutzeragent das Seitenverhältnis beibehält. Dasselbe Bild wird dreimal wiederholt, bei unterschiedlichen Breiten angezeigt: `55px`, `110px` und bei seiner natürlichen Größe von `220px` über den [`width: auto`](/de/docs/Web/CSS/width)-Wert.

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

Nur wenn Sie Größen für beide Dimensionen angeben, besteht das Risiko, das ersetzte Element zu verzerren. Zum Beispiel erzeugt das Festlegen von `width: 100vw;` und `height: 100vh;` auf einem Bild ein variables Seitenverhältnis; das Bild wird entweder gestreckt oder gestaucht angezeigt, wenn das Seitenverhältnis des Ansichtsbereichs vom natürlichen Seitenverhältnis des Bildes abweicht.

In diesem Beispiel wird dasselbe Bild dreimal wiederholt, explizit mit demselben {{cssxref("height")}}-Wert (`110px`), aber unterschiedlichen {{cssxref("width")}}-Werten (`55px`, `110px` und `220px`) dimensioniert.

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

Wir haben die Bilder absichtlich verzerrt, indem wir sowohl eine `height` als auch eine `width` festgelegt haben: Wir haben das erste gestaucht und das dritte gestreckt.

Wir hätten diesen gleichen verzerrten Effekt mit der CSS-{{cssxref("aspect-ratio")}}-Eigenschaft erzeugen können, indem wir eine einzelne Dimension (nicht beide oder keine) festgelegt und einen anderen Wert als `1` (oder `1 / 1`) angegeben haben. Sie möchten dies wahrscheinlich nicht tun, aber es ist gut zu wissen, dass es möglich ist.

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

Wir haben eine einzelne Dimension deklariert; `100vh` ist die volle Höhe des Beispiel-{{htmlelement("iframe")}}-Ansichtsbereichs. Damit `aspect-ratio` auf ersetzte Elemente angewendet werden kann, muss nur eine Dimension festgelegt sein. Das Festlegen beider oder keiner funktioniert nicht.

### Anpassen ersetzter Elemente in ihren Containern

Um ein ersetztes Element an die Dimensionen seines Containers anzupassen, während das intrinsische Seitenverhältnis beibehalten wird, setzen Sie den {{cssxref("object-fit")}}-Eigenschaftswert auf `cover` oder `contain`. Dies wird das ersetzte Element vergrößern oder verkleinern, es entweder zuschneiden, um den Container "zu füllen", oder es in einer kleineren Größe anzeigen, die vollständig im Container "enthalten" ist.

In diesem Beispiel wird das quadratische Bild in ein Raster mit drei Elementen eingefügt, von denen jedes ein Seitenverhältnis von `5 / 2` hat.

Um zu beginnen, erstellen wir einen Container mit drei Elementen, die jeweils ein Bild enthalten:

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

Als Nächstes definieren wir den Container als ein Raster, bei dem jedes Element ein Seitenverhältnis von `2.5` (`5/2`) mit einer Mindestbreite von `150px` hat. Folglich beträgt die Mindesthöhe `60px`. Die endgültige Breite und Höhe hängt jedoch von der Breite des Beispiels-iframe ab, die auf Ihrer Bildschirmgröße basiert:

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

Dann dimensionieren wir die Bilder und setzen die `object-fit`-Eigenschaft auf die letzten beiden Bilder:

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

Nur das erste Bild ist verzerrt (gestreckt). Wir hätten den `fill`-Wert von `object-fit` verwenden können, um denselben Effekt zu erzielen. Das `cover`-Bild spannt die volle Breite des Containers, zentriert vertikal und zugeschnitten, um in den Container zu passen. Der `contain`-Wert stellt sicher, dass das Bild innerhalb des Containers enthalten ist, horizontal zentriert und verkleinert, um zu passen.

## Definieren von Seitenverhältnissen für nicht ersetzte Elemente

Während das Seitenverhältnis eines ersetzten Elements standardmäßig beibehalten wird, ändert sich das Seitenverhältnis normalerweise, wenn die intrinsische Größe eines nicht ersetzten Elements angepasst wird. Zum Beispiel kann identischer Inhalt auf einem Breitbildschirm oder in einem breiten übergeordneten Container als drei Zeilen erscheinen, aber als acht Zeilen auf einem schmalen Bildschirm oder Container.

In diesem Beispiel wird dasselbe Zitat in `200px` und `600px` breiten Containern angezeigt, und ein Quadrat wird mit einer Höhe, die seiner Breite von `200px` entspricht, festgelegt:

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

Um das Problem des Festlegens eines Seitenverhältnisses für nicht ersetzte Elemente über Größen zu verdeutlichen, schalten Sie die {{cssxref("overflow")}}-Eigenschaft zwischen `auto` und `visible`.

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

Während es möglich ist, ein Seitenverhältnis auf nicht ersetzte Elemente festzulegen, indem man beide Dimensionen setzt und den überlaufenden Inhalt ausblendet, bietet die CSS-{{cssxref("aspect-ratio")}}-Eigenschaft explizite Unterstützung für Seitenverhältnisse. Das bedeutet, dass ein spezifisches Seitenverhältnis festgelegt werden kann, auch wenn Sie die Inhalts- oder Bildschirmdimensionen nicht kennen.

Im nächsten Beispiel rendern wir quadratische Boxen, unabhängig von der Breite des Textes, indem wir `aspect-ratio: 1` auf das {{htmlelement("blockquote")}}, ein nicht ersetztes Element, setzen:

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

Jede Box hat eine Dimension definiert: die {{cssxref("inline-size")}}, die die Breite in horizontalen Sprachen ist, wird auf {{cssxref("max-content")}} gesetzt, das die Größe so setzt, dass sie so weit wie nötig ist, um den Inhalt aufzunehmen, ohne umzubrechen. Die zweite Dimension, in diesem Fall die {{cssxref("block-size")}} oder {{cssxref("height")}}, wird auf dieselbe Länge wie die erste Dimension gesetzt. Dies wird mit der {{cssxref("aspect-ratio")}}-Eigenschaft erreicht. Wir haben das gewünschte Breite-zu-Höhe-Verhältnis des Element-Boxs auf `1` definiert, was dasselbe ist wie `1 / 1`, also ein Quadrat. Dies setzt die Blockrichtung so, dass sie der Breite des Elements entspricht, ohne die {{cssxref("height")}} oder {{cssxref("block-size")}}-Eigenschaften zu verwenden.

In diesen Beispielen wurde eine Größe explizit auf das Element selbst gesetzt. Beim Arbeiten mit nicht ersetzten Elementen kommt das Seitenverhältnis ins Spiel, wenn keine Größenabmessung explizit festgelegt ist.

### Erzeugen eines Kreises basierend auf der Containergröße

Die Inline-Größe von nicht ersetzten Block-Level-Elementen ist die Größe ihrer Container-[Inhaltsbox](/de/docs/Web/CSS/box-edge#content-box). Da sie standardmäßig eine Größe haben, müssen sie keine explizite Größe haben, damit die `aspect-ratio`-Eigenschaft funktioniert.

In diesem Beispiel haben wir einen Container {{htmlelement("div")}}, der `200px` breit ist, und `5px` Polsterung auf jeder Seite enthält. Folglich ist die Inline-Größe der Inhaltsbox `190px`. Ohne eine Höhe oder Breite auf dem verschachtelten {{htmlelement("p")}}-Element festzulegen, wissen wir, dass seine Inline-Größe `190px` ist. Mit `aspect-ratio: 1` eingestellt, wird der Absatz `190px` hoch sein, es sei denn, er hat sichtbaren überlaufenden Inhalt, der ihn höher macht (was er nicht hat).

Die Höhe des `<div>`-Elements ist nicht explizit festgelegt, aber es enthält den `190px` hohen Absatz, die `5px` Polsterung oben und unten sowie die kombinierten Höhen der Standard-oben und unten Ränder des `<p>`. Als Ergebnis ist es größer als breit. Beide Elemente haben einen {{cssxref("border-radius")}} von `50%`, sodass der Container ein Oval ist, während das Kind, mit
