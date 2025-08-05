---
title: Erweiterte Stilwirkungseffekte
slug: Learn_web_development/Core/Styling_basics/Advanced_styling_effects
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Dieser Artikel ist eine Art Trickkiste und bietet eine Einführung in einige interessante erweiterte Stileigenschaften wie Box Shadows, Blendmodi und Filter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und ein Verständnis davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einen Eindruck davon bekommen, wie einige der fortgeschrittenen
        Stileffekte verwendet werden können, die in modernen Browsern verfügbar sind.
      </td>
    </tr>
  </tbody>
</table>

## Box Shadows

{{cssxref("box-shadow")}} erlaubt es Ihnen, einem Element einen oder mehrere Schlagschatten hinzuzufügen. Wie Textschatten werden Box Shadows recht gut von Browsern unterstützt, einschließlich IE9+ und Edge. Benutzer älterer IE-Versionen müssen möglicherweise ohne Schatten auskommen, daher sollten Sie Ihre Designs testen, um sicherzustellen, dass Ihre Inhalte auch ohne Schatten lesbar sind.

### Ein einfacher Box Shadow

Schauen wir uns zunächst ein einfaches Beispiel an. Zuerst etwas HTML:

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

Dies ergibt das folgende Ergebnis:

{{EmbedLiveSample("A_simple_box_shadow", "", "100px")}}

Sie sehen, dass wir vier Komponenten im Wert der `box-shadow`-Eigenschaft haben:

1. Der erste Längenwert ist der **horizontale Versatz** — die Entfernung, um die der Schatten vom ursprünglichen Kasten nach rechts verschoben ist (oder nach links, wenn der Wert negativ ist).
2. Der zweite Längenwert ist der **vertikale Versatz** — die Entfernung, um die der Schatten vom ursprünglichen Kasten nach unten verschoben ist (oder nach oben, wenn der Wert negativ ist).
3. Der dritte Längenwert ist der **Unschärferadius** — das Maß der Unschärfe, die auf den Schatten angewendet wird.
4. Der Farbwert ist die **Grundfarbe** des Schattens.

Sie können beliebige Längen- und Farbeinheiten verwenden, die sinnvoll sind, um diese Werte zu definieren.

### Mehrere Box Shadows

Sie können auch mehrere Box Shadows in einer einzigen `box-shadow`-Deklaration angeben, indem Sie sie durch Kommas trennen:

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

Nun erhalten wir dieses Ergebnis:

{{EmbedLiveSample("Multiple_box_shadows", "", "100px")}}

Wir haben hier etwas Spaß gemacht, indem wir einen erhöhten Kasten mit mehreren farbigen Schichten erstellt haben, aber Sie könnten es auf jede beliebige Art verwenden, zum Beispiel um einen realistischeren Look mit Schatten zu erzeugen, die auf mehreren Lichtquellen basieren.

### Weitere Box Shadow-Funktionen

Im Gegensatz zu {{cssxref("text-shadow")}} hat {{cssxref("box-shadow")}} ein `inset`-Schlüsselwort verfügbar — wenn Sie dies am Anfang einer Schatten-Deklaration setzen, wird es zu einem Innenschatten anstatt zu einem Außenschatten. Schauen wir uns an, was wir damit meinen.

Zuerst werden wir für dieses Beispiel anderes HTML verwenden:

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

Dies ergibt das folgende Ergebnis:

{{EmbedLiveSample("Other_box_shadow_features", "100%", "70px")}}

Hier haben wir eine Schaltflächenstilierung mit Fokus/Hover/Aktiv-Zuständen eingerichtet. Die Schaltfläche hat standardmäßig einen einfachen schwarzen Box Shadow, plus ein paar Innenschatten, einen hellen und einen dunklen, die auf gegenüberliegenden Ecken der Schaltfläche platziert sind, um einen schönen Schattierungseffekt zu erzeugen.

Wenn die Schaltfläche gedrückt wird, ersetzt der aktive Zustand den ersten Box Shadow durch einen sehr dunklen Innenschatten, wodurch der Eindruck entsteht, dass die Schaltfläche hineingedrückt wird.

> [!NOTE]
> Es gibt noch einen weiteren Punkt, der im `box-shadow`-Wert eingestellt werden kann — ein weiterer Längenwert kann optional kurz vor dem Farbwert gesetzt werden, dies ist ein **Spread-Radius**. Wenn gesetzt, wird der Schatten größer als der ursprüngliche Kasten. Es wird nicht sehr häufig verwendet, aber es ist erwähnenswert.

## Filter

Während Sie die Komposition eines Bildes nicht mit CSS ändern können, gibt es einige kreative Dinge, die Sie tun können. Eine sehr schöne Eigenschaft, die helfen kann, Interesse in Ihre Designs zu bringen, ist die {{cssxref("filter")}}-Eigenschaft. Diese Eigenschaft ermöglicht Photoshop-ähnliche Filter direkt aus CSS.

Im folgenden Beispiel haben wir zwei verschiedene Werte für `filter` verwendet. Der `erste` ist `blur()` — diese Funktion kann einen Wert übergeben bekommen, um anzuzeigen, wie stark das Bild verwischt werden soll.

Der zweite ist `grayscale()`; indem wir einen Prozentsatz verwenden, legen wir fest, wie viel Farbe wir entfernen möchten.

Experimentieren Sie mit den Prozent- und Pixelparametern im folgenden Beispiel, um zu sehen, wie sich die Bilder ändern. Sie könnten die Werte auch durch andere ersetzen. Versuchen Sie `contrast(200%)`, `invert(100%)` oder `hue-rotate(20deg)` im obigen Live-Beispiel. Schauen Sie sich die MDN-Seite für [`filter`](/de/docs/Web/CSS/filter) an, um viele andere Optionen zu finden, die Sie ausprobieren könnten.

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

Sie können Filter auf jedes Element und nicht nur auf Bilder anwenden. Einige der verfügbaren Filteroptionen tun sehr ähnliche Dinge wie andere CSS-Funktionen, zum Beispiel funktioniert `drop-shadow()` in sehr ähnlicher Weise und gibt einen ähnlichen Effekt wie [`box-shadow`](/de/docs/Web/CSS/box-shadow) oder [`text-shadow`](/de/docs/Web/CSS/text-shadow). Das wirklich Schöne an Filtern ist jedoch, dass sie auf die genauen Formen des Inhalts innerhalb des Kastens wirken, nicht nur auf den Kasten selbst als ein großes Stück, daher ist es wichtig, den Unterschied zu kennen.

Im nächsten Beispiel wenden wir unseren Filter auf einen Kasten an und vergleichen ihn mit einem Box Shadow. Wie Sie sehen können, folgt der Drop-Shadow-Filter der genauen Form des Textes und der Randstriche. Der Box Shadow folgt einfach dem Quadrat des Kastens.

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

## Blendmodi

CSS Blendmodi ermöglichen es uns, Blendmodi auf Elemente anzuwenden, die einen Misch-Effekt spezifizieren, wenn zwei Elemente sich überlappen – die endgültige Farbe, die für jedes Pixel angezeigt wird, ist das Ergebnis einer Kombination der ursprünglichen Pixel-Farbe und derjenigen des Pixels in der darunter liegenden Schicht. Blendmodi sind wieder sehr vertraut für Benutzer von Grafikprogrammen wie Photoshop.

Es gibt zwei Eigenschaften, die Blendmodi in CSS verwenden:

- {{cssxref("background-blend-mode")}}, das mehrere Hintergrundbilder und -farben auf einem einzelnen Element vermischt.
- {{cssxref("mix-blend-mode")}}, das das Element, auf dem es gesetzt ist, mit Elementen mischt, die es überlappt – sowohl Hintergrund als auch Inhalt.

Sie können viel mehr Beispiele finden, als hier verfügbar sind, auf unserer [blend-modes.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/blend-modes.html) Beispielseite (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/blend-modes.html)), und auf der {{cssxref("&lt;blend-mode&gt;")}} Referenzseite.

> [!NOTE]
> Blendmodi sind auch sehr neu und etwas weniger gut unterstützt als Filter. Es gibt noch keine Unterstützung in Edge, und Safari unterstützt nur einige der Blendmodi-Optionen.

### background-blend-mode

Schauen wir uns einige Beispiele an, um dies besser zu verstehen. Zuerst, {{cssxref("background-blend-mode")}} — hier zeigen wir ein paar einfache {{htmlelement("div")}}s, damit Sie das Original mit der gemischten Version vergleichen können:

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

Das Resultat ist dies — Sie sehen das Original auf der linken Seite und den Multiply-Blendmodus auf der rechten Seite:

{{EmbedLiveSample("background-blend-mode", "", "220px")}}

### mix-blend-mode

Schließlich betrachten wir {{cssxref("mix-blend-mode")}}. Hier präsentieren wir dieselben zwei `<div>`s, aber jedes sitzt nun auf einem einfachen `<div>` mit einem violetten Hintergrund, um zu zeigen, wie die Elemente zusammen gemischt werden:

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

Hier können Sie sehen, dass der Multiply-Mix-Blend nicht nur die beiden Hintergrundbilder vermischt hat, sondern auch die Farbe des darunter liegenden `<div>`s.

> [!NOTE]
> Machen Sie sich keine Sorgen, wenn Sie einige der oben genannten Layout-Eigenschaften nicht verstehen, wie {{cssxref("position")}}, {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("z-index")}}, usw. Wir werden diese detailliert in unserem [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) Modul behandeln.

## CSS Shapes

Auch wenn es stimmt, dass alles in CSS ein rechteckiger Kasten ist und Bilder physisch rechteckige Kästen sind, können wir es so aussehen lassen, als ob unser Inhalt um nicht-rechteckige Dinge fließt, indem wir [CSS Shapes](/de/docs/Web/CSS/CSS_shapes) verwenden.

Die CSS-Shapes-Spezifikation ermöglicht das Umfließen von Text um eine nicht-rechteckige Form. Dies ist besonders nützlich, wenn Sie mit einem Bild arbeiten, das einen gewissen Freiraum hat, um den Sie Text fließen lassen möchten.

Auf dem Bild unten haben wir einen angenehm runden Ballon. Die tatsächliche Datei ist rechteckig, aber durch das Schweben des Bildes (Formen gelten nur für schwebende Elemente) und die Verwendung der {{cssxref("shape-outside")}} Eigenschaft mit einem Wert von `circle(50%)`, können wir den Effekt erzeugen, dass der Text der Linie des Ballons folgt.

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

Die Form in diesem Beispiel reagiert nicht auf den Inhalt der Bilddatei. Stattdessen nimmt die `circle()`-Funktion ihren Mittelpunkt von der Mitte der Bilddatei, als ob wir einen Zirkel in die Mitte der Datei gesetzt und einen Kreis gezeichnet hätten, der in die Datei passt. Es ist dieser Kreis, um den der Text fließt.

> [!NOTE]
> In Firefox können Sie das DevTools [Shapes Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) verwenden, um Shapes zu inspizieren.

Die `circle()`-Funktion ist nur eine von ein paar grundlegenden Formen, die definiert sind, aber es gibt eine Reihe von verschiedenen Möglichkeiten, um Formen zu erstellen. Für weitere Informationen und Beispielcode für CSS Shapes siehe die [Leitfäden zu CSS Shapes](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes) auf MDN.

## -webkit-background-clip: text

Ein weiteres Feature, das wir kurz erwähnen wollten, ist der `text`-Wert für {{cssxref("background-clip")}}. Wenn dies zusammen mit dem proprietären Feature `-webkit-text-fill-color: transparent;` verwendet wird, ermöglicht es das Clippen von Hintergrundbildern an die Form des Textelements, was einige schöne Effekte ermöglicht. Dies ist kein offizieller Standard, wurde jedoch von mehreren Browsern implementiert, da es beliebt ist und von Entwicklern recht häufig verwendet wird. Wenn es in diesem Kontext verwendet wird, benötigen beide Eigenschaften ein `-webkit-` Vendor-Prefix, sogar für nicht-WebKit/Chrome-basierte Browser. Sie können dies im Live-Beispiel unten in Aktion sehen:

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
  background: url("colorful-heart.png") no-repeat center;
}

.text-clip {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

{{EmbedLiveSample("webkit-background-clip", "", "340px")}}

Warum haben andere Browser ein `-webkit-` Präfix implementiert? Hauptsächlich wegen der Browser-Kompatibilität — so viele Webentwickler haben begonnen, Websites mit `-webkit-` Präfixen zu implementieren, dass es den Anschein machte, als seien die anderen Browser fehlerhaft, obwohl sie in Wirklichkeit die Standards befolgt hatten. Also waren sie gezwungen, einige solcher Features zu implementieren. Dies unterstreicht die Gefahr der Verwendung von nicht standardisierten und/oder mit Präfixen versehenen CSS-Funktionen in Ihrer Arbeit — nicht nur verursachen sie Probleme mit der Browser-Kompatibilität, sondern sie unterliegen auch Änderungen, sodass Ihr Code jederzeit kaputtgehen könnte. Es ist viel besser, sich an die Standards zu halten.

Wenn Sie solche Funktionen in Ihrer Produktionsarbeit verwenden möchten, sollten Sie unbedingt umfassend auf verschiedenen Browsern testen und sicherstellen, dass die Seite, wo diese Funktionen nicht funktionieren, dennoch nutzbar ist.

## Zusammenfassung

Wir hoffen, dieser Artikel hat Ihnen gefallen — mit glänzenden Spielzeugen zu spielen, macht generell Spaß, und es ist immer interessant zu sehen, welche fortgeschrittenen Stilwerkzeuge in modernen Browsern verfügbar werden.
