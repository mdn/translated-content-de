---
title: Erweiterte Styling-Effekte
slug: Learn_web_development/Core/Styling_basics/Advanced_styling_effects
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel dient als Zauberkiste und bietet eine Einführung in einige interessante erweiterte Styling-Funktionen wie Box-Schatten, Mischmodi und Filter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen in HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine Vorstellung davon zu bekommen, wie man einige der erweiterten Styling-Effekte nutzt, die in modernen Browsern verfügbar sind.
      </td>
    </tr>
  </tbody>
</table>

## Box-Schatten

{{cssxref("box-shadow")}} ermöglicht es Ihnen, ein oder mehrere Schlagschatten auf das Element-Box anzuwenden. Wie Textschatten werden Box-Schatten in Browsern ziemlich gut unterstützt, einschließlich IE9+ und Edge. Benutzer älterer IE-Versionen müssen möglicherweise auf Schatten verzichten, daher sollten Sie Ihre Designs testen, um sicherzustellen, dass Ihr Inhalt ohne sie lesbar ist.

### Ein einfacher Box-Schatten

Lassen Sie uns mit einem einfachen Beispiel beginnen. Zuerst etwas HTML:

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

Das ergibt folgendes Ergebnis:

{{EmbedLiveSample("A_simple_box_shadow", "", "100px")}}

Sie werden sehen, dass wir vier Elemente im Wert der `box-shadow`-Eigenschaft haben:

1. Der erste Längenwert ist der **horizontale Versatz** — die Entfernung nach rechts, um die der Schatten vom ursprünglichen Kasten versetzt ist (oder nach links, wenn der Wert negativ ist).
2. Der zweite Längenwert ist der **vertikale Versatz** — die Entfernung nach unten, um die der Schatten vom ursprünglichen Kasten versetzt ist (oder nach oben, wenn der Wert negativ ist).
3. Der dritte Längenwert ist der **Unschärferadius** — die Menge an Unschärfe, die auf den Schatten angewendet wird.
4. Der Farbwert ist die **Basisfarbe** des Schattens.

Sie können beliebige Längen- und Farbeinheiten verwenden, die sinnvoll sind, um diese Werte zu definieren.

### Mehrere Box-Schatten

Sie können auch mehrere Box-Schatten in einer einzigen `box-shadow`-Deklaration angeben, indem Sie sie durch Kommas trennen:

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

Wir haben hier etwas Spaßiges gemacht, indem wir eine erhöhte Box mit mehreren farbigen Schichten erstellt haben, aber Sie könnten es auf jede gewünschte Weise verwenden, zum Beispiel um einen realistischeren Look mit Schatten basierend auf mehreren Lichtquellen zu erzeugen.

### Weitere Box-Schatten-Funktionen

Im Gegensatz zu {{cssxref("text-shadow")}} hat {{cssxref("box-shadow")}} ein `inset`-Schlüsselwort verfügbar — wenn dieses am Anfang einer Schatten-Deklaration platziert wird, wird es zu einem inneren Schatten, anstatt zu einem äußeren Schatten. Lassen Sie uns sehen, was wir damit meinen.

Zuerst nehmen wir etwas anderes HTML für dieses Beispiel:

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

Das ergibt folgendes Ergebnis:

{{EmbedLiveSample("Other_box_shadow_features", "100%", "70px")}}

Hier haben wir einige Schaltflächen-Stylings zusammen mit Fokus/Über/Active-Zuständen eingerichtet. Die Schaltfläche hat standardmäßig einen einfachen schwarzen Box-Schatten und ein paar eingehende Schatten, einen hellen und einen dunklen, an gegenüberliegenden Ecken der Schaltfläche platziert, um einen schönen Schattierungseffekt zu erzielen.

Wenn die Schaltfläche gedrückt wird, führt der aktive Zustand dazu, dass der erste Box-Schatten gegen einen sehr dunklen eingehenden Schatten getauscht wird, was den Eindruck eines eingedrückten Knopfes vermittelt.

> [!NOTE]
> Es gibt einen weiteren Punkt, den man im `box-shadow`-Wert festlegen kann — ein weiterer Längenwert kann optional direkt vor dem Farbwert gesetzt werden, der ein **Verteilungsradius** ist. Wenn dieser gesetzt ist, wird der Schatten größer als der ursprüngliche Kasten. Er wird nicht sehr häufig verwendet, sollte aber erwähnt werden.

## Filter

Während Sie die Zusammensetzung eines Bildes nicht mit CSS ändern können, gibt es einige kreative Dinge, die Sie tun können. Eine sehr nette Eigenschaft, die helfen kann, Ihr Design interessanter zu gestalten, ist die {{cssxref("filter")}}-Eigenschaft. Diese Eigenschaft ermöglicht Photoshop-ähnliche Filter direkt aus CSS.

Im folgenden Beispiel haben wir zwei verschiedene Werte für den Filter verwendet. Der `erste` ist `blur()` — dieser Funktion kann ein Wert übergeben werden, um anzugeben, wie stark das Bild unscharf gemacht werden soll.

Der zweite ist `grayscale()`; indem wir einen Prozentsatz verwenden, legen wir fest, wie viel Farbe wir entfernen möchten.

Spielen Sie mit den Prozent- und Pixelparametern im untenstehenden Beispiel, um zu sehen, wie sich die Bilder ändern. Sie könnten die Werte auch für einige andere tauschen. Versuchen Sie `contrast(200%)`, `invert(100%)` oder `hue-rotate(20deg)` im obigen Live-Beispiel. Werfen Sie einen Blick auf die MDN-Seite für [`filter`](/de/docs/Web/CSS/Reference/Properties/filter) für viele andere Optionen, die Sie ausprobieren könnten.

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

Sie können Filter auf jedes Element anwenden, nicht nur auf Bilder. Einige der verfügbaren Filteroptionen tun sehr ähnliche Dinge wie andere CSS-Funktionen, z.B. arbeitet `drop-shadow()` auf sehr ähnliche Weise und erzeugt einen ähnlichen Effekt wie [`box-shadow`](/de/docs/Web/CSS/Reference/Properties/box-shadow) oder [`text-shadow`](/de/docs/Web/CSS/Reference/Properties/text-shadow). Das wirklich Schöne an Filtern ist jedoch, dass sie an den genauen Formen des Inhalts innerhalb des Kastens arbeiten, nicht nur am Kasten selbst als großes Ganzes, daher lohnt es sich, den Unterschied zu kennen.

Im nächsten Beispiel wenden wir unseren Filter auf einen Kasten an und vergleichen ihn mit einem Box-Schatten. Wie Sie sehen können, folgt der Drop-Shadow-Filter der exakten Form des Textes und der Umrahmung. Der Box-Schatten folgt nur dem Quadrat des Kastens.

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

CSS-Mischmodi ermöglichen es uns, Mischmodi auf Elemente anzuwenden, die eine Mischwirkung angeben, wenn zwei Elemente überlappen — die endgültige Farbe, die für jedes Pixel angezeigt wird, ist das Ergebnis einer Kombination der ursprünglichen Pixel-Farbe und der des Pixels in der darunterliegenden Schicht. Mischmodi sind sehr vertraut für Benutzer von Grafikprogrammen wie Photoshop.

Es gibt zwei Eigenschaften, die Mischmodi in CSS nutzen:

- {{cssxref("background-blend-mode")}}, der mehrere Hintergrundbilder und Farben auf einem einzelnen Element mischt.
- {{cssxref("mix-blend-mode")}}, der das Element, auf dem es eingestellt ist, mit Elementen, die es überlappt — sowohl Hintergrund als auch Inhalt — mischt.

Sie finden viele weitere Beispiele als hier verfügbar auf unserer [blend-modes.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/blend-modes.html)-Beispielseite (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/blend-modes.html)) und auf der {{cssxref("&lt;blend-mode&gt;")}}-Referenzseite.

> [!NOTE]
> Mischmodi sind ebenfalls sehr neu und etwas weniger gut unterstützt als Filter. Es gibt noch keine Unterstützung in Edge, und Safari unterstützt nur einige der Mischmodusoptionen.

### background-blend-mode

Schauen wir uns erneut einige Beispiele an, um dies besser zu verstehen. Zuerst {{cssxref("background-blend-mode")}} — hier zeigen wir ein paar einfache {{htmlelement("div")}}s, damit Sie das Original mit der gemischten Version vergleichen können:

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

Das Ergebnis, das wir erhalten, ist dieses — Sie sehen das Original links und den Multiplizieren-Mischmodus rechts:

{{EmbedLiveSample("background-blend-mode", "", "220px")}}

### mix-blend-mode

Schauen wir uns nun {{cssxref("mix-blend-mode")}} an. Hier präsentieren wir die gleichen zwei `<div>`s, aber jedes von ihnen sitzt jetzt auf einem einfachen `<div>` mit einem lila Hintergrund, um zu zeigen, wie die Elemente zusammen gemischt werden:

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

Dies ergibt die folgenden Ergebnisse:

{{EmbedLiveSample("mix-blend-mode", "", "220px")}}

Hier können Sie sehen, dass der Multiplizieren-Mischmodus nicht nur die beiden Hintergrundbilder, sondern auch die Farbe des darunterliegenden `<div>` gemischt hat.

> [!NOTE]
> Machen Sie sich keine Sorgen, wenn Sie einige der oben genannten Layout-Eigenschaften nicht verstehen, wie {{cssxref("position")}}, {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("z-index")}} usw. Wir werden diese ausführlich in unserem [CSS Layout](/de/docs/Learn_web_development/Core/CSS_layout)-Modul behandeln.

## CSS-Formen

Obwohl alles in CSS ein rechteckiger Kasten ist und Bilder physische rechteckige Kästen sind, können wir es so aussehen lassen, als fließe unser Inhalt um nicht-rechteckige Dinge, indem wir [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) verwenden.

Die CSS-Formen-Spezifikation ermöglicht das Umfließen von Text um eine nicht-rechteckige Form. Dies ist besonders nützlich, wenn Sie mit einem Bild arbeiten, das etwas Weißraum enthält, um den Sie Text fließen lassen möchten.

Im untenstehenden Bild haben wir einen erfreulich runden Ballon. Die eigentliche Datei ist rechteckig, aber indem wir das Bild floaten (Formen gelten nur für gefloatete Elemente) und die {{cssxref("shape-outside")}}-Eigenschaft mit einem Wert von `circle(50%)` verwenden, können wir den Effekt erzielen, dass der Text der Linie des Ballons folgt.

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

Die Form in diesem Beispiel reagiert nicht auf den Inhalt der Bilddatei. Stattdessen nimmt die Kreisfunktion ihren Mittelpunkt von der Mitte der Bilddatei, als ob wir einen Zirkel in die Mitte der Datei gesetzt und einen Kreis gezeichnet hätten, der in die Datei passt. Genau um diesen Kreis fließt der Text.

> [!NOTE]
> In Firefox können Sie das DevTools [Shapes Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) verwenden, um Formen zu inspizieren.

Die `circle()`-Funktion ist nur eine von wenigen grundlegenden Formen, die definiert sind, es gibt jedoch eine Reihe verschiedener Möglichkeiten, Formen zu erstellen. Für weitere Informationen und Beispielcode zu CSS-Formen sehen Sie sich die [Leitfäden zu CSS-Formen](/de/docs/Web/CSS/Guides/Shapes/Overview) auf MDN an.

## -webkit-background-clip: text

Ein weiteres Feature, das wir kurz erwähnen wollten, ist der `text`-Wert für {{cssxref("background-clip")}}. Wenn er zusammen mit der proprietären Funktion `-webkit-text-fill-color: transparent;` verwendet wird, können Sie Hintergrundbilder auf die Form des Elementtextes zuschneiden und damit einige schöne Effekte erzielen. Dies ist kein offizieller Standard, wurde jedoch in mehreren Browsern implementiert, da es beliebt ist und ziemlich häufig von Entwicklern verwendet wird. Wenn er in diesem Kontext verwendet wird, würden beide Eigenschaften ein `-webkit-`-Anbieterpräfix erfordern, selbst für Nicht-WebKit/Chrome-basierte Browser.
Sie können dies im untenstehenden Live-Beispiel sehen:

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

Warum haben andere Browser ein `-webkit-`-Präfix implementiert? Hauptsächlich aus Gründen der Browser-Kompatibilität — so viele Webentwickler haben begonnen, Websites mit `-webkit-`-Präfixen zu implementieren, dass es so aussah, als wären die anderen Browser defekt, obwohl sie in Wirklichkeit die Standards befolgten. So wurden sie gezwungen, einige solcher Funktionen zu implementieren. Dies zeigt die Gefahr, nicht standardisierte und/oder präfixierte CSS-Funktionen in Ihrer Arbeit zu verwenden — sie verursachen nicht nur Browser-Kompatibilitätsprobleme, sondern sind auch Änderungen unterworfen, sodass Ihr Code jederzeit kaputt gehen könnte. Es ist viel besser, sich an die Standards zu halten.

Wenn Sie solche Funktionen in Ihrer Produktionsarbeit verwenden möchten, testen Sie sie gründlich über verschiedene Browser hinweg und stellen Sie sicher, dass die Website, wo diese Funktionen nicht funktionieren, trotzdem benutzbar ist.

## Zusammenfassung

Wir hoffen, dass dieser Artikel Spaß gemacht hat — das Spielen mit glänzenden Spielzeugen ist in der Regel interessant und es ist immer spannend zu sehen, welche Arten von erweiterten Styling-Werkzeugen in modernen Browsern verfügbar werden.
