---
title: Fortgeschrittene Stil-Effekte
slug: Learn_web_development/Core/Styling_basics/Advanced_styling_effects
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

Dieser Artikel fungiert als Kiste voller Tricks und bietet eine Einführung in einige interessante fortgeschrittene Stil-Funktionen wie Box-Schatten, Mischmodi und Filter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes HTML-Wissen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Stilgrundlagen</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine Vorstellung davon bekommen, wie einige der fortgeschrittenen Stil-Effekte verwendet werden können, die in modernen Browsern verfügbar sind.
      </td>
    </tr>
  </tbody>
</table>

## Box-Schatten

{{cssxref("box-shadow")}} ermöglicht es Ihnen, einem Elementenkasten einen oder mehrere Schlagschatten hinzuzufügen. Ähnlich wie Textschatten werden Box-Schatten in den meisten Browsern gut unterstützt, einschließlich IE9+ und Edge. Benutzer älterer IE-Versionen müssen möglicherweise ohne Schatten auskommen, daher sollten Sie Ihre Designs testen, um sicherzustellen, dass Ihr Inhalt auch ohne sie lesbar ist.

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

Dies ergibt das folgende Resultat:

{{EmbedLiveSample("A_simple_box_shadow", "", "100px")}}

Sie werden sehen, dass wir vier Elemente im `box-shadow`-Eigenschaftswert haben:

1. Der erste Längenwert ist der **horizontale Versatz** — die Entfernung nach rechts, um die der Schatten vom ursprünglichen Kasten versetzt ist (oder nach links, wenn der Wert negativ ist).
2. Der zweite Längenwert ist der **vertikale Versatz** — die Entfernung nach unten, um die der Schatten vom ursprünglichen Kasten versetzt ist (oder nach oben, wenn der Wert negativ ist).
3. Der dritte Längenwert ist der **Weichzeichnungsradius** — die Menge der Weichzeichnung, die auf den Schatten angewendet wird.
4. Der Farbwert ist die **Grundfarbe** des Schattens.

Sie können beliebige Längen- und Farbeinheiten verwenden, die zur Definition dieser Werte sinnvoll sind.

### Mehrere Box-Schatten

Es ist auch möglich, mehrere Box-Schatten in einer einzigen `box-shadow`-Deklaration anzugeben, indem Sie sie mit Kommas trennen:

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

Wir haben hier etwas Interessantes gemacht, indem wir einen hervorstehenden Kasten mit mehreren farbigen Schichten erstellt haben. Sie könnten es zum Beispiel verwenden, um einen realistischeren Look mit Schatten basierend auf mehreren Lichtquellen zu erstellen.

### Weitere Box-Schatten-Funktionen

Im Gegensatz zu {{cssxref("text-shadow")}} hat {{cssxref("box-shadow")}} ein `inset`-Schlüsselwort verfügbar — wenn Sie dies am Anfang einer Schattenerklärung setzen, wird es zu einem inneren Schatten statt einem äußeren. Lassen Sie uns das genauer ansehen.

Zuerst nehmen wir für dieses Beispiel anderes HTML:

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

Dies ergibt folgendes Resultat:

{{EmbedLiveSample("Other_box_shadow_features", "100%", "70px")}}

Hier haben wir einige Button-Stilierungen zusammen mit Fokus-/Hover-/Aktiv-Zuständen eingerichtet. Der Button hat standardmäßig einen einfachen schwarzen Box-Schatten, plus ein paar innere Schatten, einen hellen und einen dunklen, die an den gegenüberliegenden Ecken des Buttons platziert sind, um einen schönen Schattierungseffekt zu erzielen.

Wenn der Button gedrückt wird, tauscht der aktive Zustand den ersten Box-Schatten gegen einen sehr dunklen inneren Schatten aus, wodurch der Eindruck entsteht, dass der Button eingedrückt wird.

> [!NOTE]
> Es gibt ein weiteres Element, das im `box-shadow`-Wert festgelegt werden kann — ein weiterer Längenwert kann optional direkt vor dem Farbwert gesetzt werden, der als **Ausbreitungsradius** bezeichnet wird. Wenn er festgelegt ist, verursacht er, dass der Schatten größer als der ursprüngliche Kasten wird. Es wird nicht sehr häufig verwendet, ist aber erwähnenswert.

## Filter

Obwohl Sie die Zusammensetzung eines Bildes mit CSS nicht ändern können, gibt es einige kreative Dinge, die Sie tun können. Eine sehr nette Eigenschaft, die Ihrem Design Interesse verleihen kann, ist die {{cssxref("filter")}}-Eigenschaft. Diese Eigenschaft ermöglicht Photoshop-ähnliche Filter direkt aus CSS.

Im folgenden Beispiel haben wir zwei verschiedene Filter-Werte verwendet. Der erste ist `blur()` — dieser Funktion kann ein Wert übergeben werden, der angibt, wie stark das Bild weichgezeichnet werden soll.

Der zweite ist `grayscale()`; durch die Verwendung eines Prozentsatzes legen wir fest, wie viele Farben entfernt werden sollen.

Spielen Sie mit den Prozent- und Pixelparametern im folgenden Beispiel, um zu sehen, wie sich die Bilder verändern. Sie könnten die Werte auch gegen andere austauschen. Probieren Sie `contrast(200%)`, `invert(100%)` oder `hue-rotate(20deg)` im obigen Live-Beispiel aus. Schauen Sie sich die MDN-Seite für [`filter`](/de/docs/Web/CSS/filter) an, um viele andere Optionen zu entdecken, die Sie ausprobieren könnten.

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

Sie können Filter auf jedes Element anwenden und nicht nur auf Bilder. Einige der verfügbaren Filteroptionen erledigen sehr ähnliche Dinge wie andere CSS-Funktionen, z. B. funktioniert `drop-shadow()` sehr ähnlich und bietet einen ähnlichen Effekt wie [`box-shadow`](/de/docs/Web/CSS/box-shadow) oder [`text-shadow`](/de/docs/Web/CSS/text-shadow). Der wirklich schöne Aspekt von Filtern ist jedoch, dass sie auf die genauen Formen des Inhalts innerhalb des Kastens wirken und nicht nur auf den Kasten selbst als ein großes Stück, daher ist es wichtig, den Unterschied zu kennen.

Im nächsten Beispiel wenden wir unseren Filter auf einen Kasten an und vergleichen ihn mit einem Box-Schatten. Wie Sie sehen können, folgt der Drop-Shadow-Filter der genauen Form des Textes und der Randstriche. Der Box-Schatten folgt lediglich dem Quadrat des Kastens.

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

CSS-Mischmodi ermöglichen es uns, Mischmodi auf Elemente anzuwenden, die beim Überlappen von zwei Elementen einen Misch-Effekt spezifizieren — die endgültige Farbe, die für jedes Pixel angezeigt wird, ist das Ergebnis einer Kombination der ursprünglichen Pixel-Farbe und der des Pixels in der darunterliegenden Schicht. Mischmodi sind wiederum sehr vertraut für Benutzer von Grafikprogrammen wie Photoshop.

Es gibt zwei Eigenschaften, die Mischmodi in CSS verwenden:

- {{cssxref("background-blend-mode")}}, das mehrere Hintergrundbilder und -farben, die auf einem einzigen Element festgelegt sind, miteinander vermischt.
- {{cssxref("mix-blend-mode")}}, das das Element, auf dem es gesetzt ist, mit den Elementen, mit denen es sich überschneidet, vermischt — sowohl Hintergrund als auch Inhalt.

Sie können viele weitere Beispiele finden, die über das hinausgehen, was hier verfügbar ist, auf unserer [blend-modes.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/blend-modes.html) Beispielseite (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/blend-modes.html)) und auf der {{cssxref("&lt;blend-mode&gt;")}} Referenzseite.

> [!NOTE]
> Mischmodi sind ebenfalls sehr neu und etwas weniger gut unterstützt als Filter. Es gibt bisher keine Unterstützung in Edge, und Safari unterstützt nur einige der Mischmodi-Optionen.

### background-blend-mode

Sehen wir uns einige Beispiele an, um das besser zu verstehen. Zuerst {{cssxref("background-blend-mode")}} — hier zeigen wir ein paar einfache {{htmlelement("div")}}s, damit Sie das Original mit der gemischten Version vergleichen können:

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

Das Ergebnis, das wir erhalten, ist folgendes — links sieht man das Original, rechts den Multiplikations-Mischmodus:

{{EmbedLiveSample("background-blend-mode", "", "220px")}}

### mix-blend-mode

Nun schauen wir uns {{cssxref("mix-blend-mode")}} an. Hier präsentieren wir dieselben zwei `<div>`s, aber jedes sitzt nun auf einem einfachen `<div>` mit violettem Hintergrund, um zu zeigen, wie die Elemente miteinander verschmelzen:

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

Hier ist das CSS, mit dem wir das stilisieren werden:

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

Sie können hier sehen, dass die Multiplikations-Mix-Blende nicht nur die beiden Hintergrundbilder zusammengeführt hat, sondern auch die Farbe von dem `<div>` darunter.

> [!NOTE]
> Machen Sie sich keine Sorgen, wenn Sie einige der Layout-Eigenschaften oben nicht verstehen, wie {{cssxref("position")}}, {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("z-index")}}, usw. Wir werden diese eingehend in unserem [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)-Modul behandeln.

## CSS Formen

Es stimmt, dass alles in CSS ein rechteckiger Kasten ist, und Bilder sind physisch rechteckige Kästen, aber wir können es so aussehen lassen, als ob unser Inhalt um nicht-rechteckige Dinge fließt, indem wir [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) nutzen.

Die CSS-Formen-Spezifikation ermöglicht das Umfließen von Text um eine nicht-rechteckige Form. Sie ist besonders nützlich, wenn man mit einem Bild arbeitet, bei dem es weißen Raum gibt, um den man vielleicht Text fließen lassen möchte.

Im Bild unten haben wir einen angenehm runden Ballon. Die eigentliche Datei ist rechteckig, aber indem wir das Bild floaten (Formen gelten nur für gefloatete Elemente) und die {{cssxref("shape-outside")}}-Eigenschaft mit dem Wert `circle(50%)` verwenden, können wir den Effekt erzeugen, dass der Text der Linie des Ballons folgt.

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

Die `circle()`-Funktion ist nur eine von ein paar grundlegenden Formen, die definiert sind. Es gibt jedoch eine Reihe von Möglichkeiten, Formen zu erstellen. Für weitere Informationen und Beispielcode zu CSS-Formen siehe die [Leitfäden zu CSS-Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes) auf MDN.

## -webkit-background-clip: text

Eine weitere Funktion, die wir kurz erwähnen wollten, ist der `text`-Wert für {{cssxref("background-clip")}}. Wenn er zusammen mit der proprietären `-webkit-text-fill-color: transparent;`-Funktion verwendet wird, ermöglicht er es, Hintergrundbilder an die Form des Textelements zu klippen und nette Effekte zu erzielen. Dies ist kein offizieller Standard, wurde aber in mehreren Browsern implementiert, da es populär ist und von Entwicklern häufig genutzt wird. Wenn diese Eigenschaften in diesem Kontext verwendet werden, erfordern sie einen `-webkit-`-Vendor-Präfix, selbst für nicht auf WebKit/Chrome basierende Browser.
Sie können dies im folgenden Live-Beispiel sehen:

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

Warum haben andere Browser ein `-webkit-`-Präfix implementiert? Hauptsächlich für die Browser-Kompatibilität — so viele Webentwickler haben begonnen, Websites mit `-webkit-`-Präfixen zu implementieren, dass es so aussah, als ob die anderen Browser defekt wären, während sie tatsächlich den Standards folgten. Daher waren sie gezwungen, einige solcher Funktionen zu implementieren. Dies zeigt die Gefahr der Nutzung von nicht standardisierten und/oder präfixierten CSS-Funktionen in Ihrer Arbeit — sie verursachen nicht nur Browser-Kompatibilitätsprobleme, sondern unterliegen auch Änderungen, sodass Ihr Code jederzeit kaputtgehen könnte. Es ist viel besser, sich an die Standards zu halten.

Wenn Sie solche Funktionen in Ihrer Produktionsarbeit verwenden möchten, stellen Sie sicher, dass Sie sie in allen Browsern gründlich testen und überprüfen, ob die Website, wenn diese Funktionen nicht funktionieren, immer noch benutzbar ist.

## Zusammenfassung

Wir hoffen, dieser Artikel hat Ihnen Spaß gemacht — mit glänzenden Spielzeugen zu spielen ist es generell, und es ist immer interessant zu sehen, welche Arten von fortgeschrittenen Stilwerkzeugen in modernen Browsern verfügbar werden.
