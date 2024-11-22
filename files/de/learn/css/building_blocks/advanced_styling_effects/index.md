---
title: Erweiterte Styling-Effekte
slug: Learn/CSS/Building_blocks/Advanced_styling_effects
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}

Dieser Artikel dient als eine Sammlung von Tricks und bietet eine Einführung in einige interessante erweiterte Styling-Funktionen wie Boxschatten, Mischmodi und Filter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen in HTML (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sich einen Überblick darüber verschaffen, wie man einige der verfügbaren fortgeschrittenen Styling-Effekte in modernen Browsern nutzt.
      </td>
    </tr>
  </tbody>
</table>

## Box-Schatten

{{cssxref("box-shadow")}} ermöglicht es Ihnen, einem Elementkasten einen oder mehrere Schatten hinzuzufügen. Wie Textschatten werden Boxschatten in Browsern recht gut unterstützt, einschließlich IE9+ und Edge. Benutzer älterer IE-Versionen müssen möglicherweise ohne Schatten auskommen, daher testen Sie Ihre Designs, um sicherzustellen, dass Ihr Inhalt auch ohne sie lesbar ist.

### Ein einfacher Boxschatten

Lassen Sie uns mit einem einfachen Beispiel beginnen, um den Einstieg zu erleichtern. Zuerst etwas HTML:

```html
<article class="simple">
  <p>
    <strong>Warning</strong>: The thermostat on the cosmic transcender has
    reached a critical level.
  </p>
</article>
```

Jetzt das CSS:

```css
p {
  margin: 0;
}

article {
  max-width: 500px;
  padding: 10px;
  background-color: red;
  background-image: linear-gradient(
    to bottom,
    rgb(0 0 0 / 0%),
    rgb(0 0 0 / 25%)
  );
}

.simple {
  box-shadow: 5px 5px 5px rgb(0 0 0 / 70%);
}
```

Dies gibt uns das folgende Ergebnis:

{{EmbedLiveSample("A_simple_box_shadow", "", "100px")}}

Sie werden sehen, dass wir vier Elemente im Wert der `box-shadow`-Eigenschaft haben:

1. Der erste Längenwert ist der **horizontale Versatz** — der Abstand, um den der Schatten vom ursprünglichen Kasten nach rechts (oder nach links, wenn der Wert negativ ist) verschoben wird.
2. Der zweite Längenwert ist der **vertikale Versatz** — der Abstand, um den der Schatten vom ursprünglichen Kasten nach unten (oder nach oben, wenn der Wert negativ ist) verschoben wird.
3. Der dritte Längenwert ist der **Unschärferadius** — die Menge an Unschärfe, die auf den Schatten angewendet wird.
4. Der Farbwert ist die **Grundfarbe** des Schattens.

Sie können beliebige Längen- und Farbeinheiten verwenden, die sinnvoll sind, um diese Werte zu definieren.

### Mehrere Boxschatten

Sie können auch mehrere Boxschatten in einer einzigen `box-shadow`-Deklaration angeben, indem Sie sie mit Kommas trennen:

```html hidden
<article class="multiple">
  <p>
    <strong>Warning</strong>: The thermostat on the cosmic transcender has
    reached a critical level.
  </p>
</article>
```

```css-nolint
p {
  margin: 0;
}

article {
  max-width: 500px;
  padding: 10px;
  background-color: red;
  background-image: linear-gradient(
    to bottom,
    rgb(0 0 0 / 0%),
    rgb(0 0 0 / 25%)
  );
}

.multiple {
  box-shadow: 1px 1px 1px black,
              2px 2px 1px black,
              3px 3px 1px red,
              4px 4px 1px red,
              5px 5px 1px black,
              6px 6px 1px black;
}
```

Jetzt erhalten wir dieses Ergebnis:

{{EmbedLiveSample("Multiple_box_shadows", "", "100px")}}

Wir haben hier etwas Spaßiges gemacht, indem wir einen erhöhten Kasten mit mehreren farbigen Schichten erstellt haben, aber Sie könnten es auf jede gewünschte Weise verwenden, zum Beispiel um einen realistischeren Look mit Schatten basierend auf mehreren Lichtquellen zu schaffen.

### Weitere Box-Schatten-Funktionen

Anders als {{cssxref("text-shadow")}} hat {{cssxref("box-shadow")}} ein `inset`-Schlüsselwort verfügbar — wenn Sie dies am Anfang einer Schattendeklaration platzieren, wird daraus ein innerer Schatten statt eines äußeren Schattens. Lassen Sie uns einen Blick darauf werfen, was wir damit meinen.

Zuerst verwenden wir für dieses Beispiel etwas anderes HTML:

```html
<button>Press me!</button>
```

```css
button {
  width: 150px;
  font-size: 1.1rem;
  line-height: 2;
  border-radius: 10px;
  border: none;
  background-image: linear-gradient(to bottom right, #777, #ddd);
  box-shadow:
    1px 1px 1px black,
    inset 2px 3px 5px rgb(0 0 0 / 30%),
    inset -2px -3px 5px rgb(255 255 255 / 50%);
}

button:focus,
button:hover {
  background-image: linear-gradient(to bottom right, #888, #eee);
}

button:active {
  box-shadow:
    inset 2px 2px 1px black,
    inset 2px 3px 5px rgb(0 0 0 / 30%),
    inset -2px -3px 5px rgb(255 255 255 / 50%);
}
```

Dies gibt uns das folgende Ergebnis:

{{EmbedLiveSample("Other_box_shadow_features", "100%", "70px")}}

Hier haben wir eine Button-Styling eingerichtet, zusammen mit Fokus-/Hover-/Aktivzuständen. Der Button hat standardmäßig einen einfachen schwarzen Boxschatten, plus ein paar innere Schatten, einen hellen und einen dunklen, an gegenüberliegenden Ecken des Buttons, um ihm einen schönen Schattierungseffekt zu verleihen.

Wenn der Button gedrückt wird, ersetzt der aktive Zustand den ersten Boxschatten durch einen sehr dunklen inneren Schatten, was den Anschein erweckt, dass der Button eingedrückt wird.

> [!NOTE]
> Es gibt einen weiteren Punkt, der im `box-shadow`-Wert gesetzt werden kann — ein weiterer Längenwert kann optional direkt vor dem Farbwert gesetzt werden, dies ist ein **Ausbreitungsradius**. Wenn gesetzt, wird der Schatten größer als der ursprüngliche Kasten. Es wird nicht sehr häufig verwendet, ist aber erwähnenswert.

## Filter

Während Sie die Komposition eines Bildes mit CSS nicht ändern können, gibt es einige kreative Dinge, die Sie tun können. Eine sehr interessante Eigenschaft, die Ihnen helfen kann, Interesse an Ihren Designs zu wecken, ist die {{cssxref("filter")}}-Eigenschaft. Diese Eigenschaft ermöglicht Photoshop-ähnliche Filter direkt aus CSS.

Im folgenden Beispiel haben wir zwei verschiedene Werte für den Filter verwendet. Der `erste` ist `blur()` — diese Funktion kann einen Wert annehmen, der angibt, wie stark das Bild verschwommen sein soll.

Der zweite ist `grayscale()`; durch die Verwendung eines Prozentsatzes legen wir fest, wie viel Farbe entfernt werden soll.

Spielen Sie mit den Prozent- und Pixelparametern im Beispiel unten, um zu sehen, wie sich die Bilder verändern. Sie könnten die Werte auch für andere austauschen. Versuchen Sie `contrast(200%)`, `invert(100%)` oder `hue-rotate(20deg)` im obigen Live-Beispiel. Schauen Sie auf der MDN-Seite für [`filter`](/de/docs/Web/CSS/filter) nach, um viele andere Optionen zu finden, die Sie ausprobieren könnten.

```html live-sample___filter
<div class="wrapper">
  <div class="box">
    <img
      alt="balloons"
      class="blur"
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
  </div>
  <div class="box">
    <img
      alt="balloons"
      class="grayscale"
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
  </div>
</div>
```

```css hidden live-sample___filter
.wrapper {
  display: flex;
  align-items: flex-start;
}

.wrapper > * {
  margin: 20px;
  flex: 1;
}

.box {
  border: 5px solid darkblue;
}
```

```css live-sample___filter
img {
  height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
}

.blur {
  filter: blur(10px);
}

.grayscale {
  filter: grayscale(60%);
}
```

{{EmbedLiveSample("filter", "", "260px")}}

Sie können Filter auf jedes Element, nicht nur auf Bilder, anwenden. Einige der verfügbaren Filteroptionen tun sehr ähnliche Dinge wie andere CSS-Funktionen, zum Beispiel funktioniert `drop-shadow()` in sehr ähnlicher Weise und bietet einen ähnlichen Effekt wie [`box-shadow`](/de/docs/Web/CSS/box-shadow) oder [`text-shadow`](/de/docs/Web/CSS/text-shadow). Das wirklich Schöne an Filtern ist jedoch, dass sie auf die exakten Formen des Inhalts innerhalb des Kastens wirken und nicht nur auf den Kasten selbst als ein großer Block. Es lohnt sich also, den Unterschied zu kennen.

Im nächsten Beispiel wenden wir unseren Filter auf einen Kasten an und vergleichen ihn mit einem Boxschatten. Wie Sie sehen können, folgt der Drop-Shadow-Filter der exakten Form des Textes und der Rahmenstriche. Der Boxschatten folgt nur dem Quadrat des Kastens.

```html live-sample___filter-text
<p class="filter">Filter</p>
<p class="box-shadow">Box shadow</p>
```

```css live-sample___filter-text
body {
  font-family: sans-serif;
}
p {
  margin: 1em 2em;
  padding: 20px;
  width: 100px;
  display: inline-block;
  border: 5px dashed red;
}

.filter {
  filter: drop-shadow(5px 5px 1px rgb(0 0 0 / 70%));
}

.box-shadow {
  box-shadow: 5px 5px 1px rgb(0 0 0 / 70%);
}
```

{{EmbedLiveSample("filter-text")}}

## Mischmodi

CSS-Mischmodi ermöglichen es uns, Blending-Modi auf Elemente anzuwenden, die einen Mischeffekt angeben, wenn zwei Elemente überlappen — die endgültige Farbe, die für jedes Pixel angezeigt wird, ist das Ergebnis einer Kombination aus der ursprünglichen Pixel-Farbe und der des Pixels in der darunter liegenden Schicht. Mischmodi sind wiederum sehr vertraut für Benutzer von Grafikprogrammen wie Photoshop.

Es gibt zwei Eigenschaften, die in CSS Mischmodi verwenden:

- {{cssxref("background-blend-mode")}}, das mehrere Hintergrundbilder und Farben, die auf einem einzigen Element festgelegt sind, miteinander vermischt.
- {{cssxref("mix-blend-mode")}}, das das Element, auf dem es gesetzt ist, mit den Elementen, mit denen es überlappt — sowohl Hintergrund als auch Inhalt — vermischt.

Sie können viel mehr Beispiele als hier verfügbar auf unserer [blend-modes.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/blend-modes.html) Beispielseite finden (siehe [Quelldaten](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/blend-modes.html)), und auf der {{cssxref("&lt;blend-mode&gt;")}} Referenzseite.

> [!NOTE]
> Mischmodi sind ebenfalls sehr neu und werden etwas weniger gut unterstützt als Filter. Es gibt noch keine Unterstützung in Edge, und Safari unterstützt nur einige der Mischmodi-Optionen.

### background-blend-mode

Lassen Sie uns wieder Beispiele ansehen, um dies besser zu verstehen. Zuerst {{cssxref("background-blend-mode")}} — hier zeigen wir ein paar einfache {{htmlelement("div")}}s, damit Sie das Original mit der vermischten Version vergleichen können:

```html
<div></div>
<div class="multiply"></div>
```

Nun etwas CSS — wir fügen dem `<div>` ein Hintergrundbild und eine grüne Hintergrundfarbe hinzu:

```css
div {
  width: 250px;
  height: 130px;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  background: url(colorful-heart.png) no-repeat center 20px;
  background-color: green;
}

.multiply {
  background-blend-mode: multiply;
}
```

Das Ergebnis, das wir erhalten, ist dieses — Sie können das Original links und den Multiply-Mischmodus rechts sehen:

{{EmbedLiveSample("background-blend-mode", "", "220px")}}

### mix-blend-mode

Schauen wir uns nun {{cssxref("mix-blend-mode")}} an. Hier präsentieren wir die gleichen zwei `<div>`s, aber jedes steht nun auf einem einfachen `<div>` mit violettem Hintergrund, um zu zeigen, wie die Elemente zusammengefügt werden:

```html
<article>
  No mix blend mode
  <div></div>
  <div></div>
</article>

<article>
  Multiply mix
  <div class="multiply-mix"></div>
  <div></div>
</article>
```

Hier ist das CSS, mit dem wir dies gestalten werden:

```css
article {
  width: 280px;
  height: 180px;
  margin: 10px;
  position: relative;
  display: inline-block;
}

div {
  width: 250px;
  height: 130px;
  padding: 10px;
  margin: 10px;
}

article div:first-child {
  position: absolute;
  top: 10px;
  left: 0;
  background: url(colorful-heart.png) no-repeat center 20px;
  background-color: green;
}

article div:last-child {
  background-color: purple;
  position: absolute;
  bottom: -10px;
  right: 0;
  z-index: -1;
}

.multiply-mix {
  mix-blend-mode: multiply;
}
```

Dies gibt uns die folgenden Ergebnisse:

{{EmbedLiveSample("mix-blend-mode", "", "220px")}}

Sie können hier sehen, dass der Multiply-Mix-Mischmodus nicht nur die beiden Hintergrundbilder miteinander vermischt hat, sondern auch die Farbe des darunter liegenden `<div>`.

> [!NOTE]
> Machen Sie sich keine Sorgen, wenn Sie einige der oben genannten Layout-Eigenschaften nicht verstehen, wie {{cssxref("position")}}, {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("z-index")}}, etc. Wir werden diese im Detail in unserem [CSS-Layout](/de/docs/Learn/CSS/CSS_layout)-Modul behandeln.

## CSS-Formen

Obwohl es stimmt, dass alles in CSS ein rechteckiger Kasten ist und Bilder ein physischer rechteckiger Kasten sind, können wir es so aussehen lassen, als ob unser Inhalt um nicht-rechteckige Objekte fließt, indem wir [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) verwenden.

Die CSS-Formen-Spezifikation ermöglicht das Umfließen von Text um eine nicht-rechteckige Form. Dies ist besonders nützlich, wenn Sie mit einem Bild arbeiten, das weißen Raum enthält, um den Sie Text fließen lassen möchten.

Im Bild unten haben wir einen angenehm runden Ballon. Die eigentliche Datei ist rechteckig, aber indem wir das Bild floaten lassen (Formen gelten nur für gefloatete Elemente) und die {{cssxref("shape-outside")}}-Eigenschaft mit einem Wert von `circle(50%)` verwenden, können wir den Effekt erzielen, dass der Text der Linie des Ballons folgt.

```html live-sample___shapes
<div class="wrapper">
  <img
    alt="balloon"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___shapes
body {
  font-family: sans-serif;
}
img {
  float: left;
  shape-outside: circle(50%);
}
```

{{EmbedLiveSample("shapes", "", "200px")}}

Die Form in diesem Beispiel reagiert nicht auf den Inhalt der Bilddatei. Stattdessen nimmt die Kreisfunktion ihren Mittelpunkt von der Mitte der Bilddatei, als ob wir einen Zirkel in die Mitte der Datei gesetzt und einen Kreis gezeichnet hätten, der in die Datei passt. Es ist dieser Kreis, um den der Text fließt.

> [!NOTE]
> In Firefox können Sie die DevTools [Shapes Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) verwenden, um Formen zu inspizieren.

Die `circle()`-Funktion ist nur eine von einigen grundlegenden Formen, die definiert sind, aber es gibt eine Reihe verschiedener Möglichkeiten, Formen zu erstellen. Für weitere Informationen und Beispielcode zu CSS-Formen, sehen Sie sich die [Leitfaden zu CSS-Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes) auf MDN an.

## -webkit-background-clip: text

Ein weiteres Feature, das wir kurz erwähnen wollten, ist der `text`-Wert für {{cssxref("background-clip")}}. Wenn er zusammen mit der proprietären `-webkit-text-fill-color: transparent;`-Funktion verwendet wird, ermöglicht dies das Zuschneiden von Hintergrundbildern auf die Form des Textelements, was einige schöne Effekte ergeben kann. Dies ist kein offizieller Standard, wurde jedoch in mehreren Browsern implementiert, da er beliebt und von Entwicklern recht weit verbreitet verwendet wird. Bei Verwendung in diesem Kontext würden beide Eigenschaften ein `-webkit-`-Vendor-Präfix erfordern, auch für nicht auf WebKit/Chrome-basierte Browser.
Sie können dies im folgenden Live-Beispiel in Aktion sehen:

```html live-sample___webkit-background-clip
<h2>WOW</h2>
<h2 class="text-clip">WOW</h2>
```

```css hidden live-sample___webkit-background-clip
body {
  font-family: impact, sans-serif;
}

h2 {
  width: 250px;
  height: 250px;
  text-align: center;
  line-height: 250px;
  font-size: 50px;
}
```

```css live-sample___webkit-background-clip
h2 {
  color: white;
  display: inline-block;
  background: url(colorful-heart.png) no-repeat center;
}

.text-clip {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

{{EmbedLiveSample("webkit-background-clip", "", "340px")}}

Warum haben andere Browser ein `-webkit-` Präfix implementiert? Hauptsächlich aus Gründen der Browser-Kompatibilität — so viele Webentwickler haben begonnen, Websites mit `-webkit-` Präfixen zu implementieren, dass es begann, so auszusehen, als ob die anderen Browser fehlerhaft wären, während sie tatsächlich den Standards folgten. So waren sie gezwungen, einige solcher Funktionen zu implementieren. Dies verdeutlicht die Gefahr der Verwendung von nicht standardmäßigen und/oder mit Präfixen versehenen CSS-Funktionen in Ihrer Arbeit — sie verursachen nicht nur Probleme mit der Browser-Kompatibilität, sondern sind auch Änderungen unterworfen, sodass Ihr Code jederzeit brechen könnte. Es ist viel besser, sich an die Standards zu halten.

Wenn Sie solche Funktionen in Ihrer Produktionsarbeit verwenden möchten, stellen Sie sicher, dass Sie über alle Browser hinweg gründlich testen und überprüfen, dass die Website auch dann noch nutzbar ist, wenn diese Funktionen nicht funktionieren.

## Zusammenfassung

Wir hoffen, dieser Artikel war unterhaltsam — mit glänzenden Spielzeugen zu spielen ist es normalerweise, und es ist immer interessant zu sehen, welche Arten von erweiterten Styling-Tools in modernen Browsern verfügbar werden.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}
