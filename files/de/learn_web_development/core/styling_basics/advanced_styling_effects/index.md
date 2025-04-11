---
title: Erweiterte Stil-Effekte
slug: Learn_web_development/Core/Styling_basics/Advanced_styling_effects
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Dieser Artikel dient als eine Art Trickkiste und bietet eine Einführung in einige interessante, erweiterte Stileigenschaften wie Box-Shadows, Blend-Modi und Filter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und Grundwissen, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine Vorstellung davon zu bekommen, wie einige der in modernen Browsern verfügbaren erweiterten Stileffekte verwendet werden können.
      </td>
    </tr>
  </tbody>
</table>

## Box-Shadows

{{cssxref("box-shadow")}} ermöglicht es Ihnen, einem Elementrahmen einen oder mehrere Schlagschatten hinzuzufügen. Ähnlich wie Textschatten werden Box-Shadows gut in Browsern unterstützt, einschließlich IE9+ und Edge. Nutzer älterer IE-Versionen müssen möglicherweise ohne Schatten auskommen, daher sollten Sie Ihre Designs testen, um sicherzustellen, dass Ihre Inhalte auch ohne Schatten lesbar sind.

### Ein einfacher Box-Shadow

Schauen wir uns ein einfaches Beispiel an, um den Anfang zu machen. Zuerst etwas HTML:

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

Dies ergibt folgendes Ergebnis:

{{EmbedLiveSample("A_simple_box_shadow", "", "100px")}}

Wie Sie sehen, haben wir vier Elemente im Wert der `box-shadow`-Eigenschaft:

1. Der erste Längenwert ist der **horizontale Versatz** — die Entfernung nach rechts, die der Schatten vom ursprünglichen Rahmen versetzt ist (oder nach links, wenn der Wert negativ ist).
2. Der zweite Längenwert ist der **vertikale Versatz** — die Entfernung nach unten, die der Schatten vom ursprünglichen Rahmen versetzt ist (oder nach oben, wenn der Wert negativ ist).
3. Der dritte Längenwert ist der **Unschärferadius** — die Menge der Unschärfe, die auf den Schatten angewendet wird.
4. Der Farbwert ist die **Basisfarbe** des Schattens.

Sie können beliebige Längen- und Farbeinheiten verwenden, die Sinn machen, um diese Werte zu definieren.

### Mehrere Box-Shadows

Sie können auch mehrere Box-Shadows in einer einzigen `box-shadow`-Deklaration angeben, indem Sie sie mit Kommas trennen:

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

Wir haben hier etwas Spaß gehabt, indem wir eine hervorgehobene Box mit mehreren farbigen Schichten erstellt haben, aber Sie könnten es auf jede Weise verwenden, die Sie möchten, zum Beispiel um ein realistischeres Aussehen mit Schatten basierend auf mehreren Lichtquellen zu erzeugen.

### Weitere Box-Shadow-Funktionen

Anders als {{cssxref("text-shadow")}} hat {{cssxref("box-shadow")}} ein `inset`-Schlüsselwort verfügbar — wenn Sie dies am Anfang einer Schatten-Deklaration platzieren, wird es zu einem inneren Schatten anstelle eines äußeren Schattens. Lassen Sie uns einen Blick darauf werfen, was wir meinen.

Erstmal verwenden wir für dieses Beispiel etwas anderes HTML:

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

Dies ergibt folgendes Ergebnis:

{{EmbedLiveSample("Other_box_shadow_features", "100%", "70px")}}

Hier haben wir einige Button-Stil-Funktionen zusammen mit Fokus/Hover/Aktiv-Zuständen eingerichtet. Der Button hat standardmäßig einen einfachen schwarzen Box-Shadow und zusätzlich ein paar eingesetzte Schatten, einen hellen und einen dunklen, die auf gegenüberliegenden Ecken des Buttons platziert sind, um einen schönen Schatteneffekt zu erzeugen.

Wenn der Button gedrückt wird, tauscht der aktive Zustand den ersten Box-Shadow gegen einen sehr dunklen Innen-Schatten aus, was den Eindruck vermittelt, dass der Button hineingedrückt wird.

> [!NOTE]
> Es gibt ein weiteres Element, das im `box-shadow`-Wert festgelegt werden kann — ein weiterer Längenwert kann optional direkt vor dem Farbwert festgelegt werden, der ein **Ausbreitungsradius** ist. Wenn festgelegt, wird der Schatten größer als der ursprüngliche Rahmen. Es wird nicht sehr häufig verwendet, aber es lohnt sich, es zu erwähnen.

## Filter

Während Sie die Komposition eines Bildes nicht mit CSS ändern können, gibt es einige kreative Dinge, die Sie tun können. Eine sehr schöne Eigenschaft, die Ihnen helfen kann, Interesse an Ihren Designs zu wecken, ist die {{cssxref("filter")}}-Eigenschaft. Diese Eigenschaft ermöglicht Photoshop-ähnliche Filter direkt aus CSS.

Im folgenden Beispiel haben wir zwei verschiedene Werte für den Filter verwendet. Der `erste` ist `blur()` — dieser Funktion kann ein Wert übergeben werden, der angibt, wie stark das Bild verschwommen werden soll.

Der zweite ist `grayscale()`; indem wir einen Prozentsatz verwenden, setzen wir fest, wie viel Farbe entfernt werden soll.

Spielen Sie mit den Prozent- und Pixelparametern im Beispiel unten, um zu sehen, wie sich die Bilder verändern. Sie könnten die Werte auch gegen andere austauschen. Probieren Sie `contrast(200%)`, `invert(100%)` oder `hue-rotate(20deg)` im obigen Live-Beispiel aus. Werfen Sie einen Blick auf die MDN-Seite für [`filter`](/de/docs/Web/CSS/filter) für viele andere Optionen, die Sie ausprobieren könnten.

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

Sie können Filter auf jedes Element anwenden und nicht nur auf Bilder. Einige der verfügbaren Filteroptionen erledigen sehr ähnliche Aufgaben wie andere CSS-Funktionen, zum Beispiel funktioniert `drop-shadow()` auf sehr ähnliche Weise und bietet einen ähnlichen Effekt wie [`box-shadow`](/de/docs/Web/CSS/box-shadow) oder [`text-shadow`](/de/docs/Web/CSS/text-shadow). Das wirklich Schöne an Filtern ist jedoch, dass sie auf die exakten Formen des Inhalts innerhalb der Box wirken, nicht nur auf die Box selbst als ein großer Block, daher ist es wichtig, den Unterschied zu kennen.

Im nächsten Beispiel wenden wir unseren Filter auf eine Box an und vergleichen ihn mit einem Box-Shadow. Wie Sie sehen können, folgt der Drop-Shadow-Filter der genauen Form der Text- und Randstriche. Der Box-Shadow folgt einfach dem Quadrat der Box.

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

CSS-Blend-Modi ermöglichen es uns, Elementen Blend-Modi hinzuzufügen, die einen Blending-Effekt angeben, wenn sich zwei Elemente überschneiden — die endgültige Farbe, die für jedes Pixel angezeigt wird, ist das Ergebnis einer Kombination aus der ursprünglichen Pixelfarbe und der des darunterliegenden Pixels. Blend-Modi sind wieder sehr vertraut für Benutzer von Grafikprogrammen wie Photoshop.

Es gibt zwei Eigenschaften, die Blend-Modi in CSS verwenden:

- {{cssxref("background-blend-mode")}}, das mehrere Hintergrundbilder und Farben, die auf ein einzelnes Element gesetzt sind, miteinander vermischt.
- {{cssxref("mix-blend-mode")}}, das das Element, auf dem es gesetzt ist, mit den Elementen, die es überlappt — sowohl Hintergrund als auch Inhalt — miteinander vermischt.

Sie finden viel mehr Beispiele als hier verfügbar auf unserer [blend-modes.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/blend-modes.html) Beispielseite (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/blend-modes.html)) und auf der {{cssxref("&lt;blend-mode&gt;")}} Referenzseite.

> [!NOTE]
> Blend-Modi sind noch sehr neu und werden etwas weniger gut unterstützt als Filter. Es gibt bisher keine Unterstützung in Edge, und Safari unterstützt nur einige der Blend-Modus-Optionen.

### background-blend-mode

Schauen wir uns nun einige Beispiele an, um dies besser zu verstehen. Zuerst {{cssxref("background-blend-mode")}} — hier zeigen wir ein paar einfache {{htmlelement("div")}}s, sodass Sie das Original mit der blendeten Version vergleichen können:

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

Das Ergebnis, das wir erhalten, ist folgendes — Sie können das Original auf der linken Seite und den Multiply-Blend-Modus auf der rechten Seite sehen:

{{EmbedLiveSample("background-blend-mode", "", "220px")}}

### mix-blend-mode

Schauen wir uns nun {{cssxref("mix-blend-mode")}} an. Hier präsentieren wir die gleichen zwei `<div>`s, aber jedes sitzt nun auf einem einfachen `<div>` mit einem lila Hintergrund, um zu zeigen, wie die Elemente kombiniert werden:

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

Dies ergibt die folgenden Ergebnisse:

{{EmbedLiveSample("mix-blend-mode", "", "220px")}}

Hier können Sie sehen, dass das Multiply-Mix-Blend nicht nur die beiden Hintergrundbilder vermischt hat, sondern auch die Farbe des darunterliegenden `<div>`.

> [!NOTE]
> Keine Sorge, wenn Sie einige der oben genannten Layout-Eigenschaften nicht verstehen, wie {{cssxref("position")}}, {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("z-index")}}, usw. Wir werden diese im Detail in unserem [CSS Layout](/de/docs/Learn_web_development/Core/CSS_layout) Modul behandeln.

## CSS-Formen

Während es wahr ist, dass in CSS alles ein rechteckiger Block ist und Bilder physikalisch rechteckige Blöcke sind, können wir es so aussehen lassen, als ob unser Inhalt um nicht-rechteckige Dinge herum fließt, indem wir [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) verwenden.

Die CSS-Formen-Spezifikation ermöglicht das Umfließen von Text um eine nicht-rechteckige Form. Dies ist besonders nützlich, wenn Sie mit einem Bild arbeiten, das einige Freiräume hat, um die Sie Text fließen lassen möchten.

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

Die Form in diesem Beispiel reagiert nicht auf den Inhalt der Bilddatei. Stattdessen nimmt die Kreisfunktion ihren Mittelpunkt aus der Mitte der Bilddatei, als ob wir einen Zirkel in die Mitte der Datei gesetzt und einen Kreis gezeichnet hätten, der in die Datei passt. Es ist dieser Kreis, um den der Text fließt.

> [!NOTE]
> In Firefox können Sie die DevTools [Shapes Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) verwenden, um Formen zu inspizieren.

Die `circle()`-Funktion ist nur eine von wenigen grundlegenden Formen, die definiert sind. Es gibt jedoch eine Reihe von Möglichkeiten, um Formen zu erstellen. Für weitere Informationen und Beispielcode zu CSS-Formen siehe die [Leitfäden zu CSS-Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes) auf MDN.

## -webkit-background-clip: text

Ein weiteres Merkmal, das wir kurz erwähnen wollten, ist der `text` Wert für {{cssxref("background-clip")}}. Wenn Sie dies zusammen mit der proprietären `-webkit-text-fill-color: transparent;`-Funktion verwenden, ermöglicht dies, Hintergrundbilder auf die Form des Textelements zu beschneiden, was einige nette Effekte ergeben kann. Dies ist kein offizieller Standard, wurde jedoch von mehreren Browsern implementiert, da es populär ist und von Entwicklern relativ häufig verwendet wird. Wenn dies in diesem Kontext verwendet wird, benötigen beide Eigenschaften ein `-webkit-`-Vendor-Präfix, selbst für nicht-WebKit/Chrome-basierte Browser.
Sie können dies im Live-Beispiel unten in Aktion sehen:

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

Warum haben andere Browser ein `-webkit-` Präfix implementiert? Vor allem wegen der Browser-Kompatibilität — so viele Webentwickler haben begonnen, Websites mit `-webkit-` Präfixen zu implementieren, dass es aussah, als wären die anderen Browser defekt, während sie tatsächlich den Standards folgten. Sie waren gezwungen, einige dieser Funktionen zu implementieren. Dies zeigt die Gefahr der Verwendung von nicht standardisierten und/oder mit Präfixen versehenen CSS-Funktionen in Ihrer Arbeit — sie verursachen nicht nur Browser-Kompatibilitätsprobleme, sondern sie sind auch Änderungen unterworfen, sodass Ihr Code jederzeit brechen könnte. Es ist viel besser, sich an die Standards zu halten.

Wenn Sie solche Funktionen in Ihrer Produktion verwenden möchten, testen Sie gründlich über die Browser hinweg und überprüfen Sie, dass die Website dort, wo diese Funktionen nicht funktionieren, immer noch nutzbar ist.

## Zusammenfassung

Wir hoffen, dieser Artikel hat Ihnen Spaß gemacht — mit glänzenden Spielzeugen zu spielen, macht allgemein Spaß, und es ist immer interessant zu sehen, welche Arten von erweiterten Stil-Tools in modernen Browsern verfügbar werden.
