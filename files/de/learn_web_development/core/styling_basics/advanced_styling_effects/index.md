---
title: Erweiterte Styling-Effekte
slug: Learn_web_development/Core/Styling_basics/Advanced_styling_effects
l10n:
  sourceCommit: 1b7c3c1e03f14c3878e4d8518b0f1a89bedfdc9c
---

Dieser Artikel fungiert als eine Art Zauberkiste, die eine Einführung in einige interessante erweiterte Styling-Funktionen wie Box-Schattierungen, Mischmodi und Filter bietet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Idee, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einen Einblick zu bekommen, wie einige der in modernen Browsern verfügbaren erweiterten Styling-Effekte genutzt werden können.
      </td>
    </tr>
  </tbody>
</table>

## Box-Schattierungen

{{cssxref("box-shadow")}} erlaubt es Ihnen, einem Box-Element einen oder mehrere Schlagschatten hinzuzufügen. Wie Textschattierungen werden Box-Schattierungen gut über verschiedene Browser hinweg unterstützt, einschließlich IE9+ und Edge. Benutzer älterer IE-Versionen müssen möglicherweise ohne Schatten auskommen, testen Sie also Ihre Designs, um sicherzustellen, dass Ihre Inhalte auch ohne diese lesbar sind.

### Ein einfacher Box-Schatten

Beginnen wir mit einem einfachen Beispiel. Zuerst etwas HTML:

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

Sie sehen, dass wir vier Elemente im `box-shadow` Eigenschaftswert haben:

1. Der erste Längenwert ist der **horizontale Versatz** — die Entfernung nach rechts, die der Schatten vom ursprünglichen Kasten aus versetzt wird (oder nach links, wenn der Wert negativ ist).
2. Der zweite Längenwert ist der **vertikale Versatz** — die Entfernung nach unten, die der Schatten vom ursprünglichen Kasten aus versetzt wird (oder nach oben, wenn der Wert negativ ist).
3. Der dritte Längenwert ist der **Unschärferadius** — die Menge der Unschärfe, die auf den Schatten angewendet wird.
4. Der Farbwert ist die **Grundfarbe** des Schattens.

Sie können beliebige Längen- und Farbeinheiten verwenden, die sinnvoll sind, um diese Werte zu definieren.

### Mehrere Box-Schattierungen

Sie können in einer einzigen `box-shadow` Deklaration auch mehrere Box-Schattierungen angeben, indem Sie diese mit Kommas trennen:

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

Wir haben hier etwas Spaß gemacht, indem wir eine erhobene Box mit mehreren farbigen Schichten erstellt haben, aber Sie könnten es in jeder gewünschten Weise nutzen, zum Beispiel um ein realistischeres Aussehen mit Schatten zu erzeugen, die auf mehreren Lichtquellen basieren.

### Andere Box-Schatten-Features

Anders als {{cssxref("text-shadow")}} hat {{cssxref("box-shadow")}} ein `inset` Schlüsselwort verfügbar — wenn dies am Anfang einer Schattendeklaration steht, wird es zu einem inneren Schatten statt eines äußeren Schattens. Schauen wir uns das genauer an.

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

Hier haben wir ein Button-Styling zusammen mit Fokus-/Hover-/Aktivzuständen eingerichtet. Der Button hat standardmäßig einen einfachen schwarzen Box-Schatten sowie ein paar innere Schatten, einen hellen und einen dunklen, die an gegenüberliegenden Ecken des Buttons platziert sind, um einen schönen Schattierungseffekt zu erzeugen.

Wenn der Button gedrückt wird, ersetzt der aktive Zustand den ersten Box-Schatten durch einen sehr dunklen inneren Schatten, was den Anschein erweckt, als ob der Button eingedrückt wird.

> [!NOTE]
> Es gibt ein weiteres Element, das im `box-shadow` Wert festgelegt werden kann — ein weiterer Längenwert kann optional direkt vor dem Farbwert gesetzt werden, der einen **Ausbreitungsradius** darstellt. Wenn gesetzt, lässt dies den Schatten größer als den ursprünglichen Kasten werden. Er wird nicht sehr häufig verwendet, ist aber erwähnenswert.

## Filter

Während Sie die Zusammenstellung eines Bildes nicht mit CSS ändern können, gibt es einige kreative Dinge, die Sie tun können. Eine sehr nette Eigenschaft, die Ihnen helfen kann, Interesse an Ihre Designs zu bringen, ist die {{cssxref("filter")}} Eigenschaft. Diese Eigenschaft ermöglicht Photoshop-ähnliche Filter direkt aus CSS.

Im untenstehenden Beispiel haben wir zwei verschiedene Werte für den Filter verwendet. Der `erste` ist `blur()` — diese Funktion kann mit einem Wert übergeben werden, um anzugeben, wie stark das Bild verschwommen sein soll.

Der zweite ist `grayscale()`; durch die Verwendung eines Prozentsatzes legen wir fest, wie viel Farbe wir entfernen möchten.

Spielen Sie mit den Prozentsatz- und Pixelparametern im untenstehenden Beispiel, um zu sehen, wie sich die Bilder ändern. Sie könnten die Werte auch für einige andere austauschen. Probieren Sie `contrast(200%)`, `invert(100%)` oder `hue-rotate(20deg)` im obigen Live-Beispiel. Schauen Sie sich die MDN-Seite für {{cssxref("filter")}} an, um viele andere Optionen zu finden, die Sie ausprobieren könnten.

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

Sie können Filter auf jedes Element und nicht nur auf Bilder anwenden. Einige der verfügbaren Filteroptionen tun ähnliches wie andere CSS-Funktionen, zum Beispiel funktioniert `drop-shadow()` auf sehr ähnliche Weise und bietet einen ähnlichen Effekt wie {{cssxref("box-shadow")}} oder {{cssxref("text-shadow")}}. Das wirklich schöne an Filtern ist jedoch, dass sie auf die genauen Formen des Inhalts innerhalb des Kastens wirken, nicht nur auf den Kasten selbst als großen Block, daher ist es wichtig, den Unterschied zu kennen.

Im nächsten Beispiel wenden wir unseren Filter auf einen Kasten an und vergleichen ihn mit einem Box-Schatten. Wie Sie sehen können, folgt der drop-shadow-Filter der genauen Form des Textes und der Rahmenelemente. Der Box-Schatten folgt nur dem Quadrat des Kastens.

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

Sie können viel mehr Beispiele als hier verfügbar auf unserer [filters.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/filters.html) Beispielseite (siehe [Source-Code](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/filters.html)) und auf der {{cssxref("filter")}} Referenzseite finden.

## Mischmodi

CSS Mischmodi erlauben es, Mischmodi zu Elementen hinzuzufügen, die einen Misch-Effekt angeben, wenn zwei Elemente überlappen — die endgültige Farbe, die für jedes Pixel angezeigt wird, wird das Ergebnis einer Kombination der ursprünglichen Pixelfarbe und der des darunterliegenden Pixels sein. Mischmodi sind wieder sehr vertraut für Benutzer von Grafikprogrammen wie Photoshop.

Es gibt zwei Eigenschaften, die Mischmodi in CSS verwenden:

- {{cssxref("background-blend-mode")}}, der mehrere Hintergrundbilder und Farben auf einem einzelnen Element miteinander vermischt.
- {{cssxref("mix-blend-mode")}}, der das Element, auf dem er gesetzt ist, mit den Elementen, die es überlappt, mischt — sowohl Hintergrund als auch Inhalt.

Sie können viel mehr Beispiele als hier verfügbar auf unserer [blend-modes.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/blend-modes.html) Beispielseite (siehe [Source-Code](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/blend-modes.html)) und auf der {{cssxref("&lt;blend-mode&gt;")}} Referenzseite finden.

> [!NOTE]
> Mischmodi sind auch sehr neu und etwas weniger gut unterstützt als Filter. Es gibt noch keine Unterstützung in Edge, und Safari unterstützt nur einige der Mischmodi-Optionen.

### background-blend-mode

Lassen Sie uns noch einmal einige Beispiele betrachten, um dies besser zu verstehen. Zuerst {{cssxref("background-blend-mode")}} — hier zeigen wir ein paar einfache {{htmlelement("div")}}s, damit Sie das Original mit der gemischten Version vergleichen können:

```html
<div></div>
<div class="multiply"></div>
```

Jetzt etwas CSS — wir fügen dem `<div>` ein Hintergrundbild und eine grüne Hintergrundfarbe hinzu:

```css
div {
  width: 250px;
  height: 130px;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  background: url("https://mdn.github.io/shared-assets/images/examples/colorful-heart.png")
    no-repeat center 20px;
  background-color: green;
}

.multiply {
  background-blend-mode: multiply;
}
```

Das Ergebnis sieht so aus — Sie sehen das Original auf der linken Seite und den "Multiply" Mischmodus auf der rechten Seite:

{{EmbedLiveSample("background-blend-mode", "", "220px")}}

### mix-blend-mode

Schauen wir nun auf {{cssxref("mix-blend-mode")}}. Hier zeigen wir dieselben zwei `<div>`s, aber jedes sitzt nun auf einem einfachen `<div>` mit einem violetten Hintergrund, um zu zeigen, wie sich die Elemente miteinander vermischen:

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

Hier ist das CSS, mit dem wir dies stylen:

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
  background: url("https://mdn.github.io/shared-assets/images/examples/colorful-heart.png")
    no-repeat center 20px;
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

Sie können hier sehen, dass die "Multiply"-Mischung nicht nur die beiden Hintergrundbilder, sondern auch die Farbe des darunterliegenden `<div>`s gemischt hat.

> [!NOTE]
> Machen Sie sich keine Sorgen, falls Sie einige der oben genannten Layout-Eigenschaften wie {{cssxref("position")}}, {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("z-index")}}, etc. nicht verstehen. Wir werden diese ausführlich in unserem [CSS Layout](/de/docs/Learn_web_development/Core/CSS_layout) Modul behandeln.

## CSS Formen

Zwar ist es wahr, dass in CSS alles ein rechteckiger Kasten ist und Bilder einen physischen rechteckigen Kasten haben, wir können es so aussehen lassen, als ob unser Inhalt um nicht-rechteckige Dinge herumfließt, indem wir [CSS Shapes](/de/docs/Web/CSS/Guides/Shapes) verwenden.

Die CSS Shapes-Spezifikation ermöglicht das Umfließen von Text um eine nicht-rechteckige Form. Es ist besonders nützlich, wenn Sie mit einem Bild arbeiten, das etwas Leerraum hat, um den Sie Text herumlaufen lassen möchten.

Im untenstehenden Bild haben wir einen angenehm runden Ballon. Die eigentliche Datei ist rechteckig, aber indem wir das Bild floaten (Formen gelten nur für gefloatete Elemente) und die {{cssxref("shape-outside")}} Eigenschaft mit einem Wert von `circle(50%)` verwenden, können wir den Effekt erzeugen, dass der Text der Linie des Ballons folgt.

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

Die Form in diesem Beispiel reagiert nicht auf den Inhalt der Bilddatei. Stattdessen nimmt die Kreisfunktion ihren Mittelpunkt von der Mitte der Bilddatei, als ob wir einen Zirkel in die Mitte der Datei gesetzt und einen Kreis gezeichnet hätten, der in die Datei passt. Es ist dieser Kreis, um den der Text herumfließt.

> [!NOTE]
> In Firefox können Sie die DevTools [Shapes Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) verwenden, um Formen zu inspizieren.

Die `circle()` Funktion ist nur eine von wenigen definierten Grundformen, jedoch gibt es eine Reihe unterschiedlicher Möglichkeiten, Formen zu erstellen. Für mehr Informationen und Beispielcode zu CSS Shapes siehe die [Leitfäden zu CSS Shapes](/de/docs/Web/CSS/Guides/Shapes/Overview) auf MDN.

## -webkit-background-clip: text

Ein weiteres Feature, das wir kurz erwähnen möchten, ist der `text` Wert für {{cssxref("background-clip")}}. Wenn es zusammen mit dem proprietären `-webkit-text-fill-color: transparent;` Feature verwendet wird, ermöglicht es Ihnen, Hintergrundbilder auf die Form des Textelements zuzuschneiden, was zu einigen netten Effekten führt. Dies ist kein offizieller Standard, wurde jedoch in mehreren Browsern implementiert, da es populär und ziemlich weit verbreitet bei Entwicklern ist. In diesem Kontext erfordern beide Eigenschaften ein `-webkit-` Vendor-Prefix, selbst für nicht auf WebKit/Chrome-basierte Browser.
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
  background: url("https://mdn.github.io/shared-assets/images/examples/colorful-heart.png")
    no-repeat center;
}

.text-clip {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

{{EmbedLiveSample("webkit-background-clip", "", "340px")}}

Warum haben andere Browser ein `-webkit-` Präfix implementiert? Hauptsächlich für die Browser-Kompatibilität — so viele Webentwickler haben begonnen, Websites mit `-webkit-` Präfixen zu implementieren, dass es so aussah, als ob die anderen Browser kaputt wären, während sie in Wirklichkeit den Standards folgten. Daher waren sie gezwungen, einige solcher Features zu implementieren. Dies zeigt die Gefahr der Verwendung nicht standardisierter und/oder mit Präfixen versehener CSS Features in Ihrer Arbeit auf — sie verursachen nicht nur Browser-Kompatibilitätsprobleme, sondern unterliegen auch Änderungen, sodass Ihr Code jederzeit brechen könnte. Es ist viel besser, sich an die Standards zu halten.

Wenn Sie solche Features in Ihrer Produktionsarbeit verwenden möchten, stellen Sie sicher, dass Sie sie gründlich über verschiedene Browser hinweg testen und überprüfen, dass, wo diese Features nicht funktionieren, die Website dennoch nutzbar ist.

## Zusammenfassung

Wir hoffen, dieser Artikel war unterhaltsam — das Spielen mit glänzenden Spielzeugen ist es generell, und es ist immer interessant zu sehen, welche Arten von erweiterten Styling-Tools in modernen Browsern verfügbar werden.
