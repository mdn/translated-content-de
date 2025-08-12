---
title: Erweiterte Stil-Effekte
slug: Learn_web_development/Core/Styling_basics/Advanced_styling_effects
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

Dieser Artikel fungiert als eine Sammlung von Tricks und bietet eine Einführung in einige interessante erweiterte Stil-Features wie Boxschatten, Mischmodi und Filter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (Studieren Sie die
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (Studieren Sie die
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Stilgrundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Gefühl dafür zu bekommen, wie einige der in modernen Browsern verfügbaren erweiterten Stil-Effekte verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

## Boxschatten

{{cssxref("box-shadow")}} ermöglicht es Ihnen, einem Element einen oder mehrere Schlagschatten hinzuzufügen. Wie Textschatten werden Boxschatten von den meisten Browsern gut unterstützt, einschließlich IE9+ und Edge. Benutzer älterer IE-Versionen müssen leider ohne Schatten auskommen, daher sollten Sie Ihre Designs testen, um sicherzustellen, dass Ihr Inhalt auch ohne sie lesbar ist.

### Ein einfacher Boxschatten

Schauen wir uns ein einfaches Beispiel an, um loszulegen. Zuerst ein wenig HTML:

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

Sie sehen, dass wir vier Elemente im `box-shadow`-Eigenschaftswert haben:

1. Der erste Längenwert ist der **horizontale Versatz** — der Abstand, den der Schatten nach rechts vom ursprünglichen Kasten versetzt ist (oder links, wenn der Wert negativ ist).
2. Der zweite Längenwert ist der **vertikale Versatz** — der Abstand nach unten, den der Schatten vom ursprünglichen Kasten versetzt ist (oder nach oben, wenn der Wert negativ ist).
3. Der dritte Längenwert ist der **Unschärferadius** — das Ausmaß der angewandten Unschärfe auf den Schatten.
4. Der Farbwert ist die **Grundfarbe** des Schattens.

Sie können für diese Werte beliebige Längen- und Farbeinheiten verwenden, die sinnvoll sind.

### Mehrere Boxschatten

Sie können in einer einzigen `box-shadow`-Deklaration auch mehrere Boxschatten angeben, indem Sie sie mit Kommas trennen:

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

Wir haben etwas Spaßiges gemacht, indem wir einen erhöhten Kasten mit mehreren farbigen Schichten erstellt haben, aber Sie können es nach Belieben verwenden, z. B. um ein realistischeres Aussehen mit Schatten basierend auf mehreren Lichtquellen zu erstellen.

### Weitere Boxschatten-Funktionen

Im Gegensatz zu {{cssxref("text-shadow")}} hat {{cssxref("box-shadow")}} ein `inset`-Schlüsselwort — wenn dieses am Anfang einer Schatten-Deklaration steht, wird der Schatten zu einem inneren Schatten anstelle eines äußeren Schattens. Lassen Sie uns schauen, was damit gemeint ist.

Zuerst nutzen wir für dieses Beispiel etwas anderes HTML:

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

Hier haben wir etwas Button-Styling mit Fokus/hover/aktiven Zuständen eingerichtet. Der Button hat standardmäßig einen einfachen schwarzen Boxschatten, plus ein paar innere Schatten, einen hellen und einen dunklen, die auf gegenüberliegenden Ecken des Buttons platziert sind, um einen schönen Schattierungseffekt zu erzeugen.

Wenn der Button gedrückt wird, bewirkt der aktive Zustand, dass der erste Boxschatten gegen einen sehr dunklen inneren Schatten ausgetauscht wird, was den Eindruck erweckt, der Button würde hineingedrückt.

> [!NOTE]
> Es gibt ein weiteres Element, das im `box-shadow`-Wert eingestellt werden kann — ein weiterer Längenwert kann optional direkt vor dem Farbwert gesetzt werden, was ein **Ausbreitungsradius** ist. Wenn dieser gesetzt ist, sorgt er dafür, dass der Schatten größer wird als der ursprüngliche Kasten. Es wird nicht sehr häufig verwendet, aber es lohnt sich, es zu erwähnen.

## Filter

Obwohl Sie die Komposition eines Bildes nicht mit CSS ändern können, gibt es einige kreative Dinge, die Sie tun können. Eine sehr nützliche Eigenschaft, die helfen kann, Interesse an Ihren Designs zu wecken, ist die {{cssxref("filter")}}-Eigenschaft. Diese Eigenschaft ermöglicht es, Photoshop-ähnliche Filter direkt aus CSS anzuwenden.

Im folgenden Beispiel haben wir zwei verschiedene Werte für Filter verwendet. Der `erste` ist `blur()` — dieser Funktion kann ein Wert übergeben werden, der angibt, wie stark das Bild verschwommen werden soll.

Der zweite ist `grayscale()`; durch Angabe eines Prozentsatzes legen wir fest, wie viel Farbe entfernt werden soll.

Experimentieren Sie mit den Prozent- und Pixelparametern im folgenden Beispiel, um zu sehen, wie sich die Bilder verändern. Sie könnten die Werte auch gegen andere austauschen. Versuchen Sie `contrast(200%)`, `invert(100%)` oder `hue-rotate(20deg)` im obigen Live-Beispiel. Schauen Sie sich die MDN-Seite für [`filter`](/de/docs/Web/CSS/filter) an, um viele weitere Optionen auszuprobieren.

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

Sie können Filter auf jedes Element anwenden, nicht nur auf Bilder. Einige der verfügbaren Filteroptionen ähneln sehr anderen CSS-Funktionen, zum Beispiel funktioniert `drop-shadow()` auf sehr ähnliche Weise und gibt einen ähnlichen Effekt wie [`box-shadow`](/de/docs/Web/CSS/box-shadow) oder [`text-shadow`](/de/docs/Web/CSS/text-shadow). Das wirklich Schöne an Filtern ist jedoch, dass sie auf die genauen Formen des Inhalts innerhalb des Kastens wirken, nicht nur auf den Kasten selbst als ein großes Ganzes, daher lohnt es sich, den Unterschied zu kennen.

Im nächsten Beispiel wenden wir unseren Filter auf ein Kasten an und vergleichen ihn mit einem Boxschatten. Wie Sie sehen können, folgt der Drop-Shadow-Filter der genauen Form des Textes und der Randstriche. Der Boxschatten folgt einfach dem Quadrat des Kastens.

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

CSS-Mischmodi ermöglichen es uns, Mischmodi zu Elementen hinzuzufügen, die einen Mischeffekt angeben, wenn sich zwei Elemente überlappen — die endgültige Farbe, die für jedes Pixel angezeigt wird, ist das Ergebnis einer Kombination aus der ursprünglichen Pixel-Farbe und der des darunterliegenden Pixels. Mischmodi sind wieder sehr vertraut für Benutzer von Grafik-Programmen wie Photoshop.

Es gibt zwei Eigenschaften, die in CSS Mischmodi verwenden:

- {{cssxref("background-blend-mode")}}, der mehrere Hintergrundbilder und Farben, die auf ein einzelnes Element gesetzt sind, miteinander mischt.
- {{cssxref("mix-blend-mode")}}, der das Element, auf dem er gesetzt ist, mit den überlappenden Elementen — sowohl Hintergrund als auch Inhalt — mischt.

Sie können viele weitere Beispiele finden als hier verfügbar, auf unserer [blend-modes.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/blend-modes.html) Beispielseite (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/blend-modes.html)) und auf der {{cssxref("&lt;blend-mode&gt;")}} Referenzseite.

> [!NOTE]
> Mischmodi sind auch sehr neu und etwas weniger gut unterstützt als Filter. In Edge gibt es bisher keine Unterstützung und Safari unterstützt nur einige der Mischmodus-Optionen.

### background-blend-mode

Schauen wir uns noch ein paar Beispiele an, damit wir das besser verstehen. Zuerst, {{cssxref("background-blend-mode")}} — hier zeigen wir ein paar einfache {{htmlelement("div")}}s, damit Sie das Original mit der gemischten Version vergleichen können:

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

Das Ergebnis, das wir erhalten, ist dies — Sie sehen das Original links und den Multiply-Mischmodus rechts:

{{EmbedLiveSample("background-blend-mode", "", "220px")}}

### mix-blend-mode

Nun schauen wir uns {{cssxref("mix-blend-mode")}} an. Hier präsentieren wir dieselben zwei `<div>`s, aber jedes sitzt jetzt auf einem einfachen `<div>` mit einem purpurnen Hintergrund, um zu zeigen, wie die Elemente miteinander verschmelzen:

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

Sie sehen hier, dass die Multiply-Mischung nicht nur die beiden Hintergrundbilder, sondern auch die Farbe des darunterliegenden `<div>`s mit einbezogen hat.

> [!NOTE]
> Machen Sie sich keine Sorgen, wenn Sie einige der oben genannten Layout-Eigenschaften, wie {{cssxref("position")}}, {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("z-index")}}, etc., noch nicht verstehen. Wir werden das im Detail in unserem [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) Modul behandeln.

## CSS-Formen

Es ist zwar wahr, dass in CSS alles ein rechteckiger Kasten ist und Bilder ein physischer rechteckiger Kasten sind, aber wir können es so aussehen lassen, als ob unser Inhalt um nicht-rechteckige Dinge fließt, indem wir [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) verwenden.

Das CSS Shapes-Spezifikation ermöglicht das Umfließen von Text um eine nicht-rechteckige Form. Es ist besonders nützlich, wenn man mit einem Bild arbeitet, das etwas Weißraum enthält, um den man Text fließen lassen möchte.

Im Bild unten haben wir einen angenehm runden Ballon. Die eigentliche Datei ist rechteckig, aber durch das Schwebenlassen des Bildes (Formen gelten nur für schwebende Elemente) und die Verwendung der {{cssxref("shape-outside")}}-Eigenschaft mit einem Wert von `circle(50%)`, können wir den Effekt erzielen, dass der Text der Linie des Ballons folgt.

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

Die Form in diesem Beispiel reagiert nicht auf den Inhalt der Bilddatei. Stattdessen nimmt die Kreisfunktion ihren Mittelpunkt aus der Mitte der Bilddatei, als hätten wir einen Zirkel in die Mitte des Bildes gesteckt und einen Kreis gezeichnet, der in das Bild passt. Es ist dieser Kreis, um den der Text fließt.

> [!NOTE]
> In Firefox können Sie das DevTools [Shapes Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) verwenden, um Formen zu inspizieren.

Die `circle()`-Funktion ist nur eine von wenigen grundlegenden Formen, die definiert sind, es gibt jedoch eine Reihe von verschiedenen Möglichkeiten, Formen zu erstellen. Weitere Informationen und Beispielcode für CSS-Formen finden Sie in den [Leitfäden zu CSS-Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes) auf MDN.

## -webkit-background-clip: text

Ein weiteres Feature, das wir kurz erwähnen möchten, ist der `text`-Wert für {{cssxref("background-clip")}}. Wenn dieses zusammen mit der proprietären `-webkit-text-fill-color: transparent;`-Funktion verwendet wird, ermöglicht es Ihnen, Hintergrundbilder an die Form des Textes des Elements anzupassen, was zu schönen Effekten führen kann. Dies ist kein offizieller Standard, wurde aber in mehreren Browsern implementiert, da es populär ist und von Entwicklern ziemlich weit verbreitet verwendet wird. Wenn es in diesem Kontext verwendet wird, würden beide Eigenschaften ein `-webkit-`-Vendor-Präfix erfordern, selbst für nicht auf WebKit/Chrome basierende Browser.
Sie können dies im Live-Beispiel unten sehen:

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

Warum haben andere Browser ein `-webkit-`-Präfix implementiert? Hauptsächlich der Browser-Kompatibilität zuliebe — so viele Webentwickler haben angefangen, Websites mit `-webkit-`-Präfixen zu implementieren, dass es begann, so auszusehen, als ob die anderen Browser kaputt wären, während sie in Wirklichkeit die Standards befolgten. Daher waren sie gezwungen, einige solcher Funktionen zu implementieren. Dies macht die Gefahr der Verwendung von nicht standardisierten und/oder mit Präfixen versehenen CSS-Funktionen in Ihrer Arbeit deutlich — sie verursachen nicht nur Kompatibilitätsprobleme, sondern unterliegen auch Änderungen, sodass Ihr Code jederzeit brechen könnte. Es ist viel besser, sich an die Standards zu halten.

Wenn Sie solche Funktionen in Ihrer produktiven Arbeit verwenden möchten, testen Sie umfassend in verschiedenen Browsern, und stellen Sie sicher, dass die Website weiterhin nutzbar ist, wo diese Funktionen nicht funktionieren.

## Zusammenfassung

Wir hoffen, dieser Artikel hat Ihnen Spaß gemacht — mit glänzenden Spielzeugen zu spielen, macht generell Spaß, und es ist immer interessant zu sehen, welche Arten von erweiterten Styling-Tools in modernen Browsern verfügbar werden.
