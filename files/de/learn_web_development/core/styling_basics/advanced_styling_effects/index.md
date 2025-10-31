---
title: Erweitere Stil-Effekte
slug: Learn_web_development/Core/Styling_basics/Advanced_styling_effects
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel dient als eine Art Trickkiste und bietet eine Einführung in einige interessante erweiterte Stileigenschaften wie Box-Schatten, Mischmodi und Filter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen in HTML (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und ein Verständnis dafür, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis dafür zu bekommen, wie man einige der in modernen Browsern verfügbaren erweiterten Stil-Effekte verwendet.
      </td>
    </tr>
  </tbody>
</table>

## Box-Schatten

{{cssxref("box-shadow")}} ermöglicht es Ihnen, ein oder mehrere Schlagschatten auf den Kasten eines Elements anzuwenden. Wie Textschatten werden auch Box-Schatten recht gut browserübergreifend unterstützt, einschließlich IE9+ und Edge. Nutzer älterer IE-Versionen müssen möglicherweise ohne Schatten auskommen, testen Sie also Ihre Designs, um sicherzustellen, dass Ihr Inhalt auch ohne Schattierungen lesbar ist.

### Ein einfacher Box-Schatten

Schauen wir uns ein einfaches Beispiel an, um loszulegen. Zuerst etwas HTML:

```html
<article class="simple">
  <p>
    <strong>Warning</strong>: The thermostat on the cosmic transcender has
    reached a critical level.
  </p>
</article>
```

Nun das CSS:

```css
p {
  margin: 0;
}

article {
  max-width: 500px;
  padding: 10px;
  background-color: red;
  background-image: linear-gradient(to bottom, transparent, rgb(0 0 0 / 25%));
}

.simple {
  box-shadow: 5px 5px 5px rgb(0 0 0 / 70%);
}
```

Dies ergibt das folgende Ergebnis:

{{EmbedLiveSample("A_simple_box_shadow", "", "100px")}}

Sie sehen, dass wir vier Elemente im Wert der `box-shadow`-Eigenschaft haben:

1. Der erste Längenwert ist der **horizontale Versatz** — die Distanz nach rechts, um die der Schatten gegenüber dem Originalkasten versetzt ist (oder nach links, wenn der Wert negativ ist).
2. Der zweite Längenwert ist der **vertikale Versatz** — die Distanz nach unten, um die der Schatten gegenüber dem Originalkasten versetzt ist (oder nach oben, wenn der Wert negativ ist).
3. Der dritte Längenwert ist der **Unschärferadius** — die Menge an Unschärfe, die auf den Schatten angewendet wird.
4. Der Farbwert ist die **Grundfarbe** des Schattens.

Sie können alle Längen- und Farbeinheiten verwenden, die für diese Werte sinnvoll sind.

### Mehrere Box-Schatten

Sie können auch mehrere Box-Schatten in einer einzigen `box-shadow`-Deklaration angeben, indem Sie sie mit Kommas trennen:

```html hidden
<article class="multiple">
  <p>
    <strong>Warning</strong>: The thermostat on the cosmic transcender has
    reached a critical level.
  </p>
</article>
```

```css
p {
  margin: 0;
}

article {
  max-width: 500px;
  padding: 10px;
  background-color: red;
  background-image: linear-gradient(to bottom, transparent, rgb(0 0 0 / 25%));
}

.multiple {
  box-shadow:
    1px 1px 1px black,
    2px 2px 1px black,
    3px 3px 1px red,
    4px 4px 1px red,
    5px 5px 1px black,
    6px 6px 1px black;
}
```

Jetzt erhalten wir dieses Ergebnis:

{{EmbedLiveSample("Multiple_box_shadows", "", "100px")}}

Wir haben hier etwas Spaßiges gemacht, indem wir einen erhöhten Kasten mit mehreren farbigen Schichten erstellt haben. Sie könnten es jedoch auf jede beliebige Weise verwenden, zum Beispiel, um mit Schatten, die auf mehrere Lichtquellen basieren, einen realistischeren Look zu erzeugen.

### Weitere Box-Schatten-Features

Im Gegensatz zu {{cssxref("text-shadow")}} hat {{cssxref("box-shadow")}} ein `inset`-Schlüsselwort — wenn Sie dies zu Beginn einer Schattendeklaration setzen, wird der Schatten zu einem Innenschatten statt zu einem Außenschatten. Schauen wir uns das einmal an.

Zuerst werden wir für dieses Beispiel etwas anderes HTML verwenden:

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
  background-image: linear-gradient(to bottom right, #777777, #dddddd);
  box-shadow:
    1px 1px 1px black,
    inset 2px 3px 5px rgb(0 0 0 / 30%),
    inset -2px -3px 5px rgb(255 255 255 / 50%);
}

button:focus,
button:hover {
  background-image: linear-gradient(to bottom right, #888888, #eeeeee);
}

button:active {
  box-shadow:
    inset 2px 2px 1px black,
    inset 2px 3px 5px rgb(0 0 0 / 30%),
    inset -2px -3px 5px rgb(255 255 255 / 50%);
}
```

Dies ergibt das folgende Resultat:

{{EmbedLiveSample("Other_box_shadow_features", "100%", "70px")}}

Hier haben wir einige Button-Stile zusammen mit Fokus/Hover/Aktiv-Zuständen eingerichtet. Der Button hat standardmäßig einen einfachen schwarzen Box-Schatten, plus ein paar innere Schatten, einen hellen und einen dunklen, die an entgegengesetzten Ecken des Buttons platziert wurden, um einen schönen Schattierungseffekt zu erzeugen.

Wenn der Button gedrückt wird, tauscht der aktive Zustand den ersten Box-Schatten gegen einen sehr dunklen Innenschatten aus und vermittelt so den Eindruck, dass der Button eingedrückt ist.

> [!NOTE]
> Es gibt ein weiteres Element, das im `box-shadow`-Wert eingestellt werden kann — ein weiterer Längenwert kann optional direkt vor dem Farbwert gesetzt werden: ein **Verteilungsradius**. Wenn dieser eingestellt ist, wird der Schatten größer als der ursprüngliche Kasten. Er wird nicht sehr häufig verwendet, ist aber erwähnenswert.

## Filter

Auch wenn Sie die Zusammensetzung eines Bildes nicht mit CSS ändern können, gibt es einige kreative Dinge, die Sie tun können. Eine sehr angenehme Eigenschaft, die Ihnen helfen kann, Interesse in Ihre Designs zu bringen, ist die {{cssxref("filter")}}-Eigenschaft. Diese Eigenschaft ermöglicht Photoshop-ähnliche Filter direkt aus CSS.

Im folgenden Beispiel haben wir zwei verschiedene Werte für den Filter verwendet. Der `erste` ist `blur()` — diese Funktion kann einen Wert übergeben bekommen, der angibt, wie stark das Bild verschwommen sein soll.

Der zweite ist `grayscale()`; indem wir einen Prozentsatz verwenden, legen wir fest, wie viel Farbe entfernt werden soll.

Spielen Sie in dem folgenden Beispiel mit den Prozent- und Pixelparametern, um zu sehen, wie sich die Bilder ändern. Sie könnten auch die Werte für einige andere austauschen. Versuchen Sie `contrast(200%)`, `invert(100%)` oder `hue-rotate(20deg)` im Live-Beispiel oben. Schauen Sie sich die MDN-Seite zu [`filter`](/de/docs/Web/CSS/Reference/Properties/filter) für viele weitere Optionen an, die Sie ausprobieren könnten.

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

Sie können Filter auf jedes Element anwenden, nicht nur auf Bilder. Einige der verfügbaren Filteroptionen bewirken sehr ähnliche Dinge wie andere CSS-Features, zum Beispiel funktioniert `drop-shadow()` auf eine sehr ähnliche Weise und erzeugt einen ähnlichen Effekt wie [`box-shadow`](/de/docs/Web/CSS/Reference/Properties/box-shadow) oder [`text-shadow`](/de/docs/Web/CSS/Reference/Properties/text-shadow). Das wirklich Schöne an Filtern ist jedoch, dass sie auf die exakten Formen des Inhalts innerhalb des Kastens wirken, nicht nur auf den Kasten selbst als ein großes Stück, daher lohnt es sich, den Unterschied zu kennen.

In diesem nächsten Beispiel wenden wir unseren Filter auf einen Kasten an und vergleichen ihn mit einem Box-Schatten. Wie Sie sehen können, folgt der Drop-Shadow-Filter der genauen Form des Textes und der Randstriche. Der Box-Schatten folgt nur dem Quadrat des Kastens.

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

## Blend-Modi

CSS-Blend-Modi ermöglichen es uns, Elementen Blend-Modi hinzuzufügen, die einen Blending-Effekt spezifizieren, wenn zwei Elemente sich überlappen — die endgültige Farbe, die für jedes Pixel angezeigt wird, ist das Ergebnis einer Kombination der ursprünglichen Pixel-Farbe und der des Pixels in der Schicht darunter. Blend-Modi sind wiederum sehr vertraut für Nutzer von Grafikprogrammen wie Photoshop.

Es gibt zwei Eigenschaften, die Blend-Modi in CSS verwenden:

- {{cssxref("background-blend-mode")}}, das mehrere Hintergrundbilder und -farben, die auf ein einzelnes Element gesetzt werden, miteinander mischt.
- {{cssxref("mix-blend-mode")}}, das das Element, auf das es gesetzt ist, mit den Elementen mischt, mit denen es sich überschneidet — sowohl im Hintergrund als auch im Inhalt.

Sie können viel mehr Beispiele finden, als hier verfügbar sind, auf unserer [blend-modes.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/blend-modes.html) Beispielseite (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/blend-modes.html)) und auf der {{cssxref("&lt;blend-mode&gt;")}} Referenzseite.

> [!NOTE]
> Blend-Modi sind auch sehr neu und etwas weniger gut unterstützt als Filter. Es gibt bisher keine Unterstützung in Edge, und Safari unterstützt nur einige der Blend-Modus-Optionen.

### background-blend-mode

Schauen wir uns einige Beispiele an, um dies besser zu verstehen. Zuerst {{cssxref("background-blend-mode")}} — hier zeigen wir ein paar einfache {{htmlelement("div")}}s, damit Sie das Original mit der gemischten Version vergleichen können:

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
  background: url("colorful-heart.png") no-repeat center 20px;
  background-color: green;
}

.multiply {
  background-blend-mode: multiply;
}
```

Das Ergebnis, das wir erhalten, sieht so aus — Sie sehen das Original links und den Multiply-Blend-Modus rechts:

{{EmbedLiveSample("background-blend-mode", "", "220px")}}

### mix-blend-mode

Nun schauen wir uns {{cssxref("mix-blend-mode")}} an. Hier präsentieren wir dieselben beiden `<div>`s, aber jedes steht jetzt auf einem einfachen `<div>` mit einem lila Hintergrund, um zu zeigen, wie die Elemente zusammen gemischt werden:

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

Hier ist das CSS, mit dem wir dies gestalten:

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
  background: url("colorful-heart.png") no-repeat center 20px;
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

Sie können hier sehen, dass der Multiply-Mix-Blend nicht nur die beiden Hintergrundbilder miteinander vermischt hat, sondern auch die Farbe vom `<div>` darunter.

> [!NOTE]
> Keine Sorge, wenn Sie einige der oben genannten Layout-Eigenschaften, wie {{cssxref("position")}}, {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("z-index")}}, usw. nicht verstehen. Wir werden diese ausführlich in unserem [CSS Layout](/de/docs/Learn_web_development/Core/CSS_layout) Modul behandeln.

## CSS-Formen

Es ist zwar wahr, dass alles in CSS ein rechteckiger Kasten ist und Bilder ein physischer rechteckiger Kasten sind, aber wir können es so aussehen lassen, als würde unser Inhalt um nicht-rechteckige Dinge fließen, indem wir [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) verwenden.

Die CSS-Shapes-Spezifikation ermöglicht das Umfassen von Text um eine nicht-rechteckige Form. Sie ist besonders nützlich, wenn Sie mit einem Bild arbeiten, das etwas Leerraum hat, um den Sie Text fließen lassen möchten.

Im untenstehenden Bild haben wir einen angenehm runden Ballon. Die eigentliche Datei ist rechteckig, aber indem wir das Bild fließen lassen (Shops gelten nur für geswappte Elemente) und die {{cssxref("shape-outside")}}-Eigenschaft mit einem Wert von `circle(50%)` verwenden, können wir den Effekt erzielen, dass der Text der Linie des Ballons folgt.

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

Die Form in diesem Beispiel reagiert nicht auf den Inhalt der Bilddatei. Stattdessen nimmt die Kreisfunktion ihren Mittelpunkt vom Zentrum der Bilddatei, als hätten wir einen Zirkel in die Mitte der Datei gesetzt und einen Kreis gezeichnet, der in die Datei passt. Es ist dieser Kreis, um den der Text fließt.

> [!NOTE]
> In Firefox können Sie die DevTools [Shapes Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) verwenden, um Formen zu inspizieren.

Die `circle()`-Funktion ist nur eine von wenigen definierten Grundformen, es gibt jedoch eine Reihe von verschiedenen Möglichkeiten, Formen zu erstellen. Für weitere Informationen und Beispielcode zu CSS-Formen sehen Sie sich die [Leitfäden zu CSS-Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes) auf MDN an.

## -webkit-background-clip: text

Ein weiteres Feature, das wir kurz erwähnen möchten, ist der Wert `text` für {{cssxref("background-clip")}}. Wenn er zusammen mit der proprietären Funktion `-webkit-text-fill-color: transparent;` verwendet wird, können damit Hintergrundbilder auf die Form des Textelements zugeschnitten werden, was einige nette Effekte ermöglicht. Dies ist kein offizieller Standard, aber wurde über mehrere Browser hinweg implementiert, da es beliebt und von Entwicklern recht häufig verwendet wird. Wenn es in diesem Kontext verwendet wird, würden beide Eigenschaften ein `-webkit-`-Präfix benötigen, selbst für nicht auf WebKit/Chrome basierte Browser.
Sie können dies im Live-Beispiel unten in Aktion sehen:

```html live-sample___webkit-background-clip
<h2>WOW</h2>
<h2 class="text-clip">WOW</h2>
```

```css hidden live-sample___webkit-background-clip
body {
  font-family: "impact", sans-serif;
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
  background: url("colorful-heart.png") no-repeat center;
}

.text-clip {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

{{EmbedLiveSample("webkit-background-clip", "", "340px")}}

Warum haben andere Browser ein `-webkit-`-Präfix implementiert? Hauptsächlich zur Browser-Kompatibilität — so viele Webentwickler haben begonnen, Websites mit `-webkit-`-Präfixen zu implementieren, dass es so aussah, als wären die anderen Browser kaputt, obwohl sie in Wirklichkeit die Standards befolgten. Daher waren sie gezwungen, einige solcher Features zu implementieren. Dies zeigt die Gefahr der Verwendung von nicht standardisierten und/oder mit Präfixen versehenen CSS-Features in Ihrer Arbeit auf — sie verursachen nicht nur Browser-Kompatibilitätsprobleme, sondern sie können sich auch ändern, sodass Ihr Code jederzeit brechen könnte. Es ist viel besser, sich an die Standards zu halten.

Wenn Sie solche Features in Ihrer Produktionsarbeit verwenden möchten, stellen Sie sicher, dass Sie gründlich über Browser testen und prüfen, dass, wo diese Features nicht funktionieren, die Website dennoch benutzbar ist.

## Zusammenfassung

Wir hoffen, dieser Artikel war unterhaltsam — das Spielen mit glänzenden Spielzeugen ist es im Allgemeinen, und es ist immer interessant zu sehen, welche Arten von erweiterten Stilwerkzeugen in modernen Browsern verfügbar werden.
