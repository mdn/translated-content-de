---
title: Erweiterte Styling-Effekte
slug: Learn_web_development/Core/Styling_basics/Advanced_styling_effects
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

Dieser Artikel dient als eine Trickkiste und bietet eine Einführung in einige interessante erweiterte Styling-Funktionen wie Box-Schatten, Mischmodi und Filter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und ein Verständnis dafür, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einen Eindruck davon zu bekommen, wie einige der in modernen Browsern verfügbaren erweiterten Styling-Effekte genutzt werden können.
      </td>
    </tr>
  </tbody>
</table>

## Box-Schatten

{{cssxref("box-shadow")}} erlaubt es Ihnen, einem Elementenkasten einen oder mehrere Schlagschatten hinzuzufügen. Ähnlich wie Textschatten werden Box-Schatten in den meisten Browsern gut unterstützt, einschließlich IE9+ und Edge. Benutzer älterer IE-Versionen müssen möglicherweise ohne Schatten klarkommen, daher sollten Sie Ihre Designs testen, um sicherzustellen, dass Ihr Inhalt auch ohne sie lesbar ist.

### Ein einfacher Box-Schatten

Sehen wir uns ein einfaches Beispiel an, um zu starten. Zuerst etwas HTML:

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

Dies ergibt folgendes Ergebnis:

{{EmbedLiveSample("A_simple_box_shadow", "", "100px")}}

Sie werden sehen, dass wir vier Elemente im Wert der `box-shadow`-Eigenschaft haben:

1. Der erste Längenwert ist der **horizontale Versatz** — der Abstand nach rechts, um den der Schatten vom ursprünglichen Kasten versetzt ist (oder nach links, wenn der Wert negativ ist).
2. Der zweite Längenwert ist der **vertikale Versatz** — der Abstand nach unten, um den der Schatten vom ursprünglichen Kasten versetzt ist (oder nach oben, wenn der Wert negativ ist).
3. Der dritte Längenwert ist der **Unschärferadius** — die Menge an Unschärfe, die auf den Schatten angewendet wird.
4. Der Farbwert ist die **Grundfarbe** des Schattens.

Sie können beliebige Längen- und Farbeinheiten verwenden, die sinnvoll sind, um diese Werte zu definieren.

### Mehrfache Box-Schatten

Sie können auch in einer einzelnen `box-shadow`-Deklaration mehrere Box-Schatten angeben, indem Sie sie mit Kommas trennen:

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

Wir haben hier etwas Spaßes halber eine erhobene Box mit mehreren farbigen Schichten erstellt, aber Sie könnten es verwenden, um ein realistischeres Aussehen mit Schatten basierend auf mehreren Lichtquellen zu erzeugen.

### Andere Box-Schatten-Features

Anders als {{cssxref("text-shadow")}} hat {{cssxref("box-shadow")}} ein `inset`-Keyword verfügbar — wenn Sie dies zu Beginn einer Schattendeklaration setzen, wird es zu einem inneren Schatten anstelle eines äußeren Schattens. Lassen Sie uns sehen, was wir damit meinen.

Zuerst nehmen wir für dieses Beispiel einen anderen HTML-Code:

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

Dies ergibt folgendes Ergebnis:

{{EmbedLiveSample("Other_box_shadow_features", "100%", "70px")}}

Hier haben wir ein paar Schaltflächen-Styling mit Fokus/Hover/Aktiv-Zuständen eingerichtet. Die Schaltfläche hat standardmäßig einen einfachen schwarzen Box-Schatten, plus ein paar eingekerbte Schatten, einen hellen und einen dunklen, die in entgegengesetzten Ecken der Schaltfläche platziert sind, um einen schönen Schattierungseffekt zu erzeugen.

Wenn die Schaltfläche gedrückt wird, bewirkt der aktive Zustand, dass der erste Box-Schatten gegen einen sehr dunklen eingekerbten Schatten ausgetauscht wird, was den Eindruck erweckt, dass die Schaltfläche eingedrückt ist.

> [!NOTE]
> Es gibt ein weiteres Element, das im `box-shadow`-Wert gesetzt werden kann — ein weiterer Längenwert kann optional direkt vor dem Farbwert gesetzt werden, was einen **Streueffekt** bewirkt. Wenn gesetzt, wird der Schatten größer als der ursprüngliche Kasten. Es wird nicht sehr häufig verwendet, aber es ist erwähnenswert.

## Filter

Obwohl Sie die Zusammensetzung eines Bildes mit CSS nicht ändern können, gibt es einige kreative Dinge, die Sie tun können. Eine sehr schöne Eigenschaft, die Ihnen helfen kann, Interesse an Ihren Designs zu wecken, ist die {{cssxref("filter")}}-Eigenschaft. Diese Eigenschaft ermöglicht Photoshop-ähnliche Filter direkt aus CSS.

Im folgenden Beispiel haben wir zwei verschiedene Werte für den Filter verwendet. Der `erste` ist `blur()` — dieser Funktion kann ein Wert übergeben werden, um anzugeben, wie stark das Bild verwischt werden soll.

Der zweite ist `grayscale()`; durch die Verwendung eines Prozentsatzes legen wir fest, wie viel Farbe wir entfernen möchten.

Experimentieren Sie mit den Prozent- und Pixelparametern im folgenden Beispiel, um zu sehen, wie sich die Bilder ändern. Sie können auch die Werte gegen andere austauschen. Probieren Sie `contrast(200%)`, `invert(100%)` oder `hue-rotate(20deg)` im obigen Live-Beispiel aus. Werfen Sie einen Blick auf die MDN-Seite für [`filter`](/de/docs/Web/CSS/filter) für viele andere Optionen, die Sie ausprobieren könnten.

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

Sie können Filter auf jedes Element anwenden und nicht nur auf Bilder. Einige der verfügbaren Filteroptionen tun sehr ähnliche Dinge wie andere CSS-Funktionen, zum Beispiel funktioniert `drop-shadow()` auf sehr ähnliche Weise und gibt einen ähnlichen Effekt wie [`box-shadow`](/de/docs/Web/CSS/box-shadow) oder [`text-shadow`](/de/docs/Web/CSS/text-shadow). Das wirklich Schöne an Filtern ist jedoch, dass sie auf die genauen Formen des Inhalts innerhalb des Kastens wirken, nicht nur auf den Kasten selbst als ein großes Ganzes, daher ist es wichtig, den Unterschied zu kennen.

Im nächsten Beispiel wenden wir unseren Filter auf eine Box an und vergleichen ihn mit einem Box-Schatten. Wie Sie sehen können, folgt der Drop-Shadow-Filter genau der Form des Textes und der Rahmenstriche. Der Box-Schatten folgt einfach dem Quadrat des Kastens.

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

CSS-Mischmodi ermöglichen es uns, Mischmodi auf Elemente anzuwenden, die einen Mischeffekt angeben, wenn sich zwei Elemente überlappen — die endgültige Farbe, die für jedes Pixel angezeigt wird, ist das Ergebnis einer Kombination der ursprünglichen Pixelfarbe und derjenigen des Pixels in der darunterliegenden Schicht. Mischmodi sind Anwendern von Grafikprogrammen wie Photoshop sehr vertraut.

Es gibt zwei Eigenschaften, die Mischmodi in CSS verwenden:

- {{cssxref("background-blend-mode")}}, die mehrere Hintergrundbilder und Farben, die auf einem einzelnen Element eingestellt sind, miteinander vermischt.
- {{cssxref("mix-blend-mode")}}, die das Element, auf dem sie eingestellt ist, mit überlappenden Elementen — sowohl Hintergrund als auch Inhalt — vermischt.

Sie können viele weitere Beispiele als die hier verfügbaren auf unserer [blend-modes.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/blend-modes.html) Beispielseite (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/blend-modes.html)) und auf der {{cssxref("&lt;blend-mode&gt;")}} Referenzseite finden.

> [!NOTE]
> Mischmodi sind auch sehr neu und etwas weniger gut unterstützt als Filter. In Edge gibt es noch keine Unterstützung und Safari unterstützt nur einige der Mischmodi-Optionen.

### background-blend-mode

Sehen wir uns wieder einige Beispiele an, um dies besser zu verstehen. Zuerst {{cssxref("background-blend-mode")}} — hier zeigen wir ein paar einfache {{htmlelement("div")}}s, damit Sie das Original mit der Mischversion vergleichen können:

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

Das Ergebnis, das wir erhalten, ist dieses — Sie sehen das Original links und den Multiply-Mischmodus rechts:

{{EmbedLiveSample("background-blend-mode", "", "220px")}}

### mix-blend-mode

Nun sehen wir uns {{cssxref("mix-blend-mode")}} an. Hier präsentieren wir die gleichen zwei `<div>`s, aber jedes sitzt nun auf einem einfachen `<div>` mit einem violetten Hintergrund, um zu zeigen, wie die Elemente miteinander vermischt werden:

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

Sie sehen hier, dass der Multiply-Mix-Mischung nicht nur die beiden Hintergrundbilder miteinander vermischt hat, sondern auch die Farbe des `<div>` darunter.

> [!NOTE]
> Machen Sie sich keine Sorgen, wenn Sie einige der oben genannten Layout-Eigenschaften nicht verstehen, wie {{cssxref("position")}}, {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("z-index")}}, usw. Wir werden diese ausführlich in unserem [CSS Layout](/de/docs/Learn_web_development/Core/CSS_layout) Modul behandeln.

## CSS-Formen

Obwohl es stimmt, dass in CSS alles ein rechteckiger Kasten ist und Bilder ein physischer rechteckiger Kasten sind, können wir es so aussehen lassen, als ob unser Inhalt um nicht-rechteckige Dinge fließt, indem wir [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) verwenden.

Die CSS-Formen-Spezifikation ermöglicht das Umfließen von Text um eine nicht-rechteckige Form. Es ist besonders nützlich, wenn Sie mit einem Bild arbeiten, das über viel freien Raum verfügt, den Sie vielleicht mit Text umfließen lassen möchten.

Im Bild unten haben wir einen angenehm runden Ballon. Die eigentliche Datei ist rechteckig, aber indem wir das Bild floaten (Formen gelten nur für gefloatete Elemente) und die {{cssxref("shape-outside")}}-Eigenschaft mit einem Wert von `circle(50%)` verwenden, können wir den Effekt erzielen, dass der Text der Linie des Ballons folgt.

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

Die Form in diesem Beispiel reagiert nicht auf den Inhalt der Bilddatei. Stattdessen nimmt die Kreisform ihre Mitte von der Mitte der Bilddatei, als ob wir einen Zirkel in die Mitte der Datei gesteckt und einen Kreis gezeichnet hätten, der in die Datei passt. Es ist dieser Kreis, um den der Text fließt.

> [!NOTE]
> In Firefox können Sie die DevTools [Shapes Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) verwenden, um Formen zu untersuchen.

Die `circle()`-Funktion ist nur eine von wenigen definierten Grundformen, es gibt jedoch mehrere Möglichkeiten, Formen zu erstellen. Für weitere Informationen und Beispielcode für CSS-Formen sehen Sie sich die [Leitfäden zu CSS-Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes) auf MDN an.

## -webkit-background-clip: text

Ein weiteres Feature, das wir kurz erwähnen wollten, ist der `text`-Wert für {{cssxref("background-clip")}}. Wenn er zusammen mit dem proprietären `-webkit-text-fill-color: transparent;` Feature verwendet wird, ermöglicht dies das Clippen von Hintergrundbildern zur Form des Textes des Elements, was einige schöne Effekte ermöglicht. Dies ist kein offizieller Standard, wurde jedoch in mehreren Browsern implementiert, da es beliebt und ziemlich weit verbreitet von Entwicklern genutzt wird. In diesem Kontext würden beide Eigenschaften ein `-webkit-` Vendor-Präfix erfordern, auch für nicht-WebKit/Chrome-basierte Browser.
Sie können dies im Live-Beispiel unten sehen:

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

Warum haben andere Browser ein `-webkit-` Präfix implementiert? Hauptsächlich für die Browser-Kompatibilität — so viele Webentwickler haben begonnen, Websites mit `-webkit-` Präfixen zu implementieren, dass andere Browser wie defekt erschienen, während sie in Wirklichkeit den Standards folgten. So waren sie gezwungen, einige solcher Funktionen zu implementieren. Dies verdeutlicht die Gefahr der Verwendung nicht standardisierter und/oder mit Präfixen versehener CSS-Funktionen in Ihrer Arbeit – nicht nur verursachen sie Kompatibilitätsprobleme mit Browsern, sondern sie können sich auch ändern, sodass Ihr Code jederzeit brechen könnte. Es ist viel besser, sich an die Standards zu halten.

Wenn Sie solche Funktionen in Ihrer Produktionsarbeit verwenden möchten, stellen Sie sicher, dass Sie umfassend über Browser testen und überprüfen, dass die Seite dort, wo diese Funktionen nicht funktionieren, weiterhin nutzbar ist.

## Zusammenfassung

Wir hoffen, dieser Artikel hat Spaß gemacht — mit glänzenden Spielzeugen zu spielen, macht in der Regel Spaß, und es ist immer interessant zu sehen, welche Arten von erweiterten Styling-Tools in modernen Browsern verfügbar werden.
