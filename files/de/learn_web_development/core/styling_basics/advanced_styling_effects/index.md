---
title: Fortgeschrittene Stileffekte
slug: Learn_web_development/Core/Styling_basics/Advanced_styling_effects
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

Dieser Artikel dient als Werkzeugkasten und bietet eine Einführung in einige interessante fortgeschrittene Styling-Funktionen wie Box-Schatten, Mischmodi und Filter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine Vorstellung davon bekommen, wie einige der fortgeschrittenen Styling-Effekte in modernen Browsern genutzt werden können.
      </td>
    </tr>
  </tbody>
</table>

## Box-Schatten

{{cssxref("box-shadow")}} ermöglicht es Ihnen, ein oder mehrere Schlagschatten auf das Box-Element eines Elements anzuwenden. Wie Text-Schatten werden Box-Schatten in den meisten Browsern gut unterstützt, einschließlich IE9+ und Edge. Benutzer älterer IE-Versionen müssen möglicherweise ohne Schatten auskommen, daher sollten Sie Ihre Designs testen, um sicherzustellen, dass Ihr Inhalt auch ohne sie lesbar ist.

### Ein einfacher Box-Schatten

Schauen wir uns ein einfaches Beispiel an, um zu beginnen. Zuerst etwas HTML:

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

Sie werden sehen, dass wir vier Elemente im `box-shadow`-Eigenschaftswert haben:

1. Der erste Längenwert ist der **horizontale Versatz** — die Entfernung, um die der Schatten vom ursprünglichen Kasten nach rechts oder nach links (wenn der Wert negativ ist) versetzt ist.
2. Der zweite Längenwert ist der **vertikale Versatz** — die Entfernung, um die der Schatten vom ursprünglichen Kasten nach unten oder nach oben (wenn der Wert negativ ist) versetzt ist.
3. Der dritte Längenwert ist der **Weichzeichnungsradius** — die Menge der Unschärfe, die auf den Schatten angewendet wird.
4. Der Farbwert ist die **Grundfarbe** des Schattens.

Sie können alle Längen- und Farbeinheiten verwenden, die sinnvoll zur Definition dieser Werte sind.

### Mehrere Box-Schatten

Sie können auch mehrere Box-Schatten in einer einzigen `box-shadow`-Deklaration angeben, indem Sie sie mit Kommata trennen:

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

Nun erhalten wir dieses Ergebnis:

{{EmbedLiveSample("Multiple_box_shadows", "", "100px")}}

Wir haben hier etwas Lustiges gemacht, indem wir eine erhabene Box mit mehreren farbigen Schichten erstellt haben, aber Sie könnten es in jeder gewünschten Weise verwenden, zum Beispiel um durch mehrere Lichtquellen erzeugte Schatten für einen realistischeren Look zu erzeugen.

### Andere Box-Schatten-Funktionen

Im Gegensatz zu {{cssxref("text-shadow")}} hat {{cssxref("box-shadow")}} ein `inset`-Schlüsselwort, das am Anfang einer Schattendeklaration verwendet werden kann, um ihn zu einem inneren Schatten anstelle eines äußeren Schattens zu machen. Lassen Sie uns einen Blick darauf werfen, was wir damit meinen.

Zuerst verwenden wir für dieses Beispiel einen anderen HTML-Code:

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

Dies ergibt das folgende Ergebnis:

{{EmbedLiveSample("Other_box_shadow_features", "100%", "70px")}}

Hier haben wir eine Schaltflächen-Styling zusammen mit Fokus/Hover/Aktiv-Zustände eingerichtet. Die Schaltfläche hat standardmäßig einen einfachen schwarzen Box-Schatten, sowie ein paar innere Schatten, einen hellen und einen dunklen, die auf entgegengesetzten Ecken der Schaltfläche platziert sind, um einen schönen Schattierungseffekt zu erzielen.

Wenn die Schaltfläche gedrückt wird, verursacht der aktive Zustand, dass der erste Box-Schatten durch einen sehr dunklen inneren Schatten ersetzt wird, was den Anschein erweckt, dass die Schaltfläche eingedrückt wird.

> [!NOTE]
> Es gibt ein weiteres Element, das im `box-shadow`-Wert gesetzt werden kann — ein weiterer Längenwert kann optional direkt vor dem Farbwert gesetzt werden, der ein **Spreizradius** ist. Wenn gesetzt, vergrößert sich der Schatten über den ursprünglichen Kasten hinaus. Es wird nicht sehr häufig verwendet, ist aber erwähnenswert.

## Filter

Während Sie die Struktur eines Bildes mit CSS nicht ändern können, gibt es einige kreative Dinge, die Sie tun können. Eine sehr nette Eigenschaft, die Ihnen helfen kann, Interesse zu Ihren Designs hinzuzufügen, ist die {{cssxref("filter")}}-Eigenschaft. Diese Eigenschaft ermöglicht Photoshop-ähnliche Filter direkt aus CSS.

Im folgenden Beispiel haben wir zwei verschiedene Werte für `filter` verwendet. Der `erste` ist `blur()` — diese Funktion kann mit einem Wert versehen werden, um anzugeben, wie stark das Bild unscharf gemacht werden soll.

Der zweite ist `grayscale()`; durch die Verwendung eines Prozentsatzes legen wir fest, wie viel Farbe entfernt werden soll.

Spielen Sie mit den Prozent- und Pixelparametern im folgenden Beispiel, um zu sehen, wie sich die Bilder ändern. Sie könnten die Werte auch durch einige andere ersetzen. Versuchen Sie `contrast(200%)`, `invert(100%)` oder `hue-rotate(20deg)` im obigen Live-Beispiel. Schauen Sie sich die MDN-Seite für {{cssxref("filter")}} an, um viele andere Optionen zu finden, die Sie ausprobieren könnten.

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

Sie können Filter auf jedes Element und nicht nur auf Bilder anwenden. Einige der verfügbaren Filteroptionen bewirken sehr ähnliche Dinge wie andere CSS-Features, zum Beispiel funktioniert `drop-shadow()` auf sehr ähnliche Weise und erzeugt einen ähnlichen Effekt wie {{cssxref("box-shadow")}} oder {{cssxref("text-shadow")}}. Der wirklich schöne Aspekt von Filtern ist jedoch, dass sie auf die genauen Formen des Inhalts innerhalb des Kastens wirken, nicht nur auf den Kasten selbst als einen großen Abschnitt, daher lohnt es sich, den Unterschied zu kennen.

Im nächsten Beispiel wenden wir unseren Filter auf einen Kasten an und vergleichen ihn mit einem Box-Schatten. Wie Sie sehen, folgt der Drop-Shadow-Filter der exakten Form des Textes und der Rand-Strichelung. Der Box-Schatten folgt einfach dem Quadrat des Kastens.

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

CSS-Mischmodi ermöglichen es uns, Mischmodi zu Elementen hinzuzufügen, die einen Blendungseffekt angeben, wenn zwei Elemente sich überschneiden — die endgültige Farbe, die für jedes Pixel angezeigt wird, ist das Ergebnis einer Kombination der ursprünglichen Pixel-Farbe und der des Pixels in der darunter liegenden Schicht. Mischmodi sind wiederum sehr vertraut für Benutzer von Grafikprogrammen wie Photoshop.

Es gibt zwei Eigenschaften, die Mischmodi in CSS verwenden:

- {{cssxref("background-blend-mode")}}, der mehrere Hintergrundbilder und Farben, die auf einem einzigen Element gesetzt sind, miteinander vermischt.
- {{cssxref("mix-blend-mode")}}, der das Element, auf dem es gesetzt ist, mit den Elementen vermischt, die es überlagert — sowohl Hintergrund als auch Inhalt.

Sie finden viel mehr Beispiele als hier verfügbar auf unserer [blend-modes.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/blend-modes.html)-Beispielseite (sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/blend-modes.html) an) und auf der {{cssxref("&lt;blend-mode&gt;")}}-Referenzseite.

> [!NOTE]
> Mischmodi sind ebenfalls sehr neu und werden etwas weniger gut unterstützt als Filter. Es gibt noch keine Unterstützung in Edge, und Safari unterstützt nur einige der Mischmodi-Optionen.

### background-blend-mode

Schauen wir uns einige Beispiele an, um dies besser zu verstehen. Zuerst {{cssxref("background-blend-mode")}} — hier werden wir ein paar einfache {{htmlelement("div")}}s zeigen, damit Sie das Original mit der gemischten Version vergleichen können:

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

Das Ergebnis, das wir erhalten, ist dieses — Sie sehen das Original links und den Multiply-Blendenmodus rechts:

{{EmbedLiveSample("background-blend-mode", "", "220px")}}

### mix-blend-mode

Schauen wir uns nun {{cssxref("mix-blend-mode")}} an. Hier präsentieren wir dieselben zwei `<div>`s, aber jedes befindet sich jetzt über einem einfachen `<div>` mit einem lilafarbenen Hintergrund, um zu zeigen, wie die Elemente zusammenblenden:

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

Dies ergibt die folgenden Ergebnisse:

{{EmbedLiveSample("mix-blend-mode", "", "220px")}}

Sie können hier sehen, dass das Multiply-Mix-Blending nicht nur die beiden Hintergrundbilder zusammengemischt hat, sondern auch die Farbe aus dem `<div>` darunter.

> [!NOTE]
> Machen Sie sich keine Sorgen, wenn Sie einige der Layout-Eigenschaften oben wie {{cssxref("position")}}, {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("z-index")}}, etc. nicht verstehen. Wir werden diese ausführlich in unserem [CSS Layout](/de/docs/Learn_web_development/Core/CSS_layout)-Modul behandeln.

## CSS-Formen

Auch wenn alles in CSS ein rechteckiger Kasten ist und Bilder physisch rechteckige Kästen sind, können wir es so aussehen lassen, als ob unser Inhalt um nicht-rechteckige Dinge fließt, indem wir [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) verwenden.

Die CSS-Formen-Spezifikation ermöglicht das Umfließen von Text um eine nicht-rechteckige Form. Dies ist besonders nützlich, wenn Sie mit einem Bild arbeiten, das über einen Leerraum verfügt, den Sie mit Text umfließen möchten.

Im folgenden Bild haben wir einen ansprechend runden Ballon. Die eigentliche Datei ist rechteckig, aber durch das Schweben des Bildes (Formen gelten nur für schwebende Elemente) und die Verwendung der {{cssxref("shape-outside")}}-Eigenschaft mit einem Wert von `circle(50%)` können wir den Effekt erzeugen, dass der Text der Linie des Ballons folgt.

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

Die Form in diesem Beispiel reagiert nicht auf den Inhalt der Bilddatei. Stattdessen nimmt die circle-Funktion ihren Mittelpunkt als den Mittelpunkt der Bilddatei, als ob wir einen Zirkel in der Mitte der Datei platziert und einen Kreis gezeichnet hätten, der in die Datei passt. Um diesen Kreis fließt der Text.

> [!NOTE]
> In Firefox können Sie die DevTools [Shapes Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) verwenden, um Formen zu inspizieren.

Die `circle()`-Funktion ist nur eine von wenigen grundlegenden Formen, die definiert sind, jedoch gibt es eine Reihe verschiedener Möglichkeiten, Formen zu erstellen. Für weitere Informationen und Beispielcode zu CSS-Formen sehen Sie sich die [Leitfäden zu CSS-Formen](/de/docs/Web/CSS/Guides/Shapes/Overview) auf MDN an.

## -webkit-background-clip: text

Ein weiteres Feature, das wir kurz erwähnen wollten, ist der `text`-Wert für {{cssxref("background-clip")}}. Bei Verwendung zusammen mit der proprietären `-webkit-text-fill-color: transparent;` Funktion ermöglicht diese Funktion, Hintergrundbilder auf die Form des Textes eines Elements zuzuschneiden, was einige nette Effekte ermöglicht. Dies ist kein offizieller Standard, wurde jedoch über mehrere Browser hinweg implementiert, da es beliebt ist und von Entwicklern relativ häufig verwendet wird. Wenn es in diesem Kontext verwendet wird, benötigen beide Eigenschaften ein `-webkit-`-Anbieterpräfix, selbst für nicht auf WebKit/Chrome basierende Browser.
Sie können dies im folgenden Live-Beispiel in Aktion sehen:

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

Warum haben andere Browser ein `-webkit-`-Präfix implementiert? Hauptsächlich für die Browser-Kompatibilität — so viele Webentwickler haben angefangen, Webseiten mit `-webkit-` Präfixen zu implementieren, dass es begann, so auszusehen, als ob die anderen Browser nicht funktionieren würden, obwohl sie in Wirklichkeit die Standards befolgten. Sie waren daher gezwungen, einige solcher Funktionen zu implementieren. Dies unterstreicht die Gefahr der Verwendung von nicht standardmäßigen und/oder präfixierten CSS-Funktionen in Ihrer Arbeit — nicht nur verursachen sie Browser-Kompatibilitätsprobleme, sondern sie sind auch Änderungen unterworfen, sodass Ihr Code jederzeit brechen könnte. Es ist viel besser, sich an die Standards zu halten.

Wenn Sie solche Funktionen in Ihrer Produktionsarbeit verwenden möchten, stellen Sie sicher, dass Sie gründlich in verschiedenen Browsern testen und prüfen, dass die Seite auch dort noch verwendbar ist, wo diese Funktionen nicht funktionieren.

## Zusammenfassung

Wir hoffen, dieser Artikel hat Spaß gemacht — mit glänzenden Spielzeugen zu spielen, ist im Allgemeinen unterhaltsam, und es ist immer interessant zu sehen, welche Arten von fortgeschrittenen Styling-Tools in modernen Browsern zur Verfügung stehen.
