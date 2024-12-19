---
title: Erweitere Stileffekte
slug: Learn_web_development/Core/Styling_basics/Advanced_styling_effects
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Dieser Artikel ist eine Trickkiste, die eine Einführung in einige interessante erweiterte Stileigenschaften wie Box-Schatten, Mischmodi und Filter bietet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Gefühl dafür bekommen, wie einige der in modernen Browsern verfügbaren erweiterten Stileffekte verwendet werden können.
      </td>
    </tr>
  </tbody>
</table>

## Box-Schatten

{{cssxref("box-shadow")}} erlaubt es, einem Element im Box-Modell einen oder mehrere Schlagschatten hinzuzufügen. Wie Textschatten werden Box-Schatten gut über die Browser hinweg unterstützt, einschließlich IE9+ und Edge. Benutzer älterer IE-Versionen müssen möglicherweise ohne Schatten auskommen, testen Sie daher Ihre Designs, um sicherzustellen, dass Ihre Inhalte auch ohne Schatten lesbar sind.

### Ein einfacher Box-Schatten

Schauen wir uns ein einfaches Beispiel an, um den Einstieg zu erleichtern. Zuerst etwas HTML:

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

Sie werden sehen, dass wir vier Elemente im Wert der Eigenschaft `box-shadow` haben:

1. Der erste Längenwert ist der **horizontale Versatz** — der Abstand, um den der Schatten vom Originalkasten nach rechts (oder nach links, wenn der Wert negativ ist) versetzt ist.
2. Der zweite Längenwert ist der **vertikale Versatz** — der nach unten verschobene Abstand des Schattens vom Originalkasten (oder nach oben, wenn der Wert negativ ist).
3. Der dritte Längenwert ist der **Unschärferadius** — die Menge der auf den Schatten angewandten Unschärfe.
4. Der Farbwert ist die **Basisfarbe** des Schattens.

Sie können beliebige Längen- und Farbeinheiten verwenden, die sinnvoll wären, um diese Werte zu definieren.

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

Wir haben etwas Spaß gemacht, indem wir einen erhöhten Kasten mit mehreren farbigen Ebenen erstellt haben, aber Sie könnten es auf jede gewünschte Weise verwenden, zum Beispiel um ein realistischeres Aussehen mit Schatten basierend auf mehreren Lichtquellen zu erzeugen.

### Weitere Box-Schatten-Funktionen

Im Gegensatz zu {{cssxref("text-shadow")}} verfügt {{cssxref("box-shadow")}} über ein `inset`-Schlüsselwort — durch das Platzieren zu Beginn einer Schattendeklaration wird dieser zu einem inneren Schatten anstelle eines äußeren Schattens. Lassen Sie uns dies ansehen und sehen, was wir damit meinen.

Zuerst verwenden wir für dieses Beispiel ein anderes HTML:

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

Das ergibt das folgende Ergebnis:

{{EmbedLiveSample("Other_box_shadow_features", "100%", "70px")}}

Hier haben wir einige Button-Stilierungen mit Fokus/Hover/Aktive-Zuständen eingerichtet. Der Button hat standardmäßig einen einfachen schwarzen Box-Schatten, plus ein paar innenliegende Schatten, ein heller und ein dunkler, auf entgegengesetzten Ecken des Buttons platziert, um ihm einen schönen Schattierungseffekt zu verleihen.

Wenn der Button gedrückt wird, wird im aktiven Zustand der erste Box-Schatten gegen einen sehr dunklen innenliegenden Schatten ausgetauscht, wodurch der Eindruck entsteht, dass der Button eingedrückt wird.

> [!NOTE]
> Es gibt ein weiteres Element, das im `box-shadow`-Wert gesetzt werden kann — ein weiterer Längenwert kann optional direkt vor dem Farbwert gesetzt werden, der ein **Ausbreitungsradius** ist. Wenn gesetzt, wird dadurch der Schatten größer als der ursprüngliche Kasten. Es wird nicht sehr häufig verwendet, ist aber erwähnenswert.

## Filter

Während Sie mit CSS die Struktur eines Bildes nicht ändern können, gibt es einige kreative Dinge, die Sie tun können. Eine sehr nette Eigenschaft, die Ihnen helfen kann, Interesse an Ihren Designs zu wecken, ist die {{cssxref("filter")}}-Eigenschaft. Diese Eigenschaft ermöglicht Photoshop-ähnliche Filter direkt aus CSS.

Im folgenden Beispiel haben wir zwei unterschiedliche Werte für den Filter verwendet. Der `erste` ist `blur()` — diese Funktion kann ein Wert übergeben werden, der angibt, wie stark das Bild verschwommen sein soll.

Der zweite ist `grayscale()`; indem ein Prozentsatz verwendet wird, legen wir fest, wie viel Farbe entfernt werden soll.

Spielen Sie mit den Prozent- und Pixelparametern im folgenden Beispiel, um zu sehen, wie sich die Bilder ändern. Sie könnten die Werte auch gegen andere austauschen. Versuchen Sie es mit `contrast(200%)`, `invert(100%)` oder `hue-rotate(20deg)` im obigen Live-Beispiel. Werfen Sie einen Blick auf die MDN-Seite für [`filter`](/de/docs/Web/CSS/filter), um viele andere Optionen zu sehen, die Sie ausprobieren könnten.

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

Sie können Filter auf jedes Element anwenden und nicht nur auf Bilder. Einige der verfügbaren Filteroptionen tun sehr ähnliche Dinge wie andere CSS-Funktionen, zum Beispiel funktioniert `drop-shadow()` sehr ähnlich und erzielt einen ähnlichen Effekt wie [`box-shadow`](/de/docs/Web/CSS/box-shadow) oder [`text-shadow`](/de/docs/Web/CSS/text-shadow). Das wirklich Schöne an Filtern ist jedoch, dass sie auf die exakten Formen des Inhalts innerhalb des Kastens einwirken, nicht nur auf den Kasten selbst als einen großen Block, daher ist es wert, den Unterschied zu kennen.

Im nächsten Beispiel wenden wir unseren Filter auf einen Kasten an und vergleichen ihn mit einem Box-Schatten. Wie Sie sehen, folgt der Drop-Shadow-Filter exakt der Form des Textes und der gestrichelten Ränder. Der Box-Schatten folgt nur dem Quadrat des Kastens.

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

CSS-Mischmodi ermöglichen es uns, Mischmodi zu Elementen hinzuzufügen, die einen Mischeffekt angeben, wenn zwei Elemente überlappen — die endgültige Farbe, die für jedes Pixel angezeigt wird, ist das Ergebnis einer Kombination der ursprünglichen Pixel-Farbe und derjenigen des darunter liegenden Pixels. Mischmodi sind erneut sehr vertraut für Benutzer von Grafikprogrammen wie Photoshop.

Es gibt zwei Eigenschaften, die Mischmodi in CSS verwenden:

- {{cssxref("background-blend-mode")}}, das mehrere Hintergrundbilder und -farben auf einem einzelnen Element miteinander vermischt.
- {{cssxref("mix-blend-mode")}}, das das Element, auf das es gesetzt ist, mit den Elementen, die es überlagert — sowohl Hintergrund als auch Inhalt — mischt.

Sie finden viele weitere Beispiele als hier verfügbar auf unserer [blend-modes.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/blend-modes.html)-Beispielseite (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/blend-modes.html)), und auf der {{cssxref("&lt;blend-mode&gt;")}}-Referenzseite.

> [!NOTE]
> Mischmodi sind ebenfalls sehr neu und etwas weniger gut unterstützt als Filter. Es gibt noch keine Unterstützung in Edge, und Safari unterstützt nur einige der Mischmodi-Optionen.

### background-blend-mode

Sehen wir uns erneut einige Beispiele an, um dies besser zu verstehen. Zuerst {{cssxref("background-blend-mode")}} — hier zeigen wir ein paar einfache {{htmlelement("div")}}s, damit Sie das Original mit der gemischten Version vergleichen können:

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

Das Ergebnis ist folgendes — Sie sehen das Original links und den Multiplikations-Mischmodus rechts:

{{EmbedLiveSample("background-blend-mode", "", "220px")}}

### mix-blend-mode

Nun werfen wir einen Blick auf {{cssxref("mix-blend-mode")}}. Hier präsentieren wir dieselben zwei `<div>`s, aber jedes sitzt nun auf einem einfachen `<div>` mit einem lila Hintergrund, um zu zeigen, wie die Elemente zusammen vermischt werden:

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

Hier ist das CSS, mit dem wir dies stylen werden:

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

Sie sehen hier, dass die Multiplikation im Mischmodus nicht nur die beiden Hintergrundbilder vermischt hat, sondern auch die Farbe des darunterliegenden `<div>`s.

> [!NOTE]
> Keine Sorge, wenn Sie einige der oben stehenden Layout-Eigenschaften nicht verstehen, wie {{cssxref("position")}}, {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("z-index")}}, etc. Wir werden diese ausführlich in unserem [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)-Modul behandeln.

## CSS Shapes

Zwar ist es wahr, dass alles in CSS ein rechteckiger Kasten ist, und Bilder physisch rechteckige Kästen sind, aber wir können es so aussehen lassen, als ob unser Inhalt um nicht-rechteckige Dinge herumfließt, indem wir [CSS Shapes](/de/docs/Web/CSS/CSS_shapes) verwenden.

Die CSS Shapes-Spezifikation ermöglicht das Umfließen von Text um eine nicht-rechteckige Form. Dies ist besonders nützlich, wenn Sie mit einem Bild arbeiten, das einige Leerstellen hat, um die Sie Text herumfließen lassen möchten.

Im Bild unten haben wir einen angenehm runden Ballon. Die tatsächliche Datei ist rechteckig, aber durch das Schweben des Bildes (Shapes gelten nur für schwebende Elemente) und die Verwendung der {{cssxref("shape-outside")}}-Eigenschaft mit einem Wert von `circle(50%)`, können wir den Effekt erzeugen, dass der Text der Linie des Ballons folgt.

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

Die Form in diesem Beispiel reagiert nicht auf den Inhalt der Bilddatei. Stattdessen nimmt die Kreisfunktion ihren Mittelpunkt von der Mitte der Bilddatei ein, als hätten wir einen Zirkel in der Mitte der Datei platziert und einen Kreis gezeichnet, der in die Datei passt. Um diesen Kreis fließt der Text herum.

> [!NOTE]
> In Firefox können Sie das DevTools [Shapes Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) verwenden, um Shapes zu inspizieren.

Die `circle()`-Funktion ist nur eine von wenigen einfachen Formen, die definiert sind, es gibt jedoch mehrere verschiedene Möglichkeiten, Formen zu erstellen. Für weitere Informationen und Beispielcode zu CSS Shapes siehe die [Leitfäden zu CSS Shapes](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes) auf MDN.

## -webkit-background-clip: text

Eine weitere Funktion, die wir kurz erwähnen möchten, ist der `text`-Wert für {{cssxref("background-clip")}}. Wenn er zusammen mit der proprietären `-webkit-text-fill-color: transparent;`-Funktion verwendet wird, können Sie Hintergrundbilder an die Form des Textes des Elements anpassen und so einige nette Effekte erzielen. Dies ist kein offizieller Standard, wurde jedoch in mehreren Browsern implementiert, da es beliebt und von Entwicklern ziemlich weit verbreitet verwendet wird. Wenn es in diesem Zusammenhang verwendet wird, erfordern beide Eigenschaften einen `-webkit-`-Vendor-Präfix, selbst für nicht auf WebKit/Chrome basierende Browser.
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

Warum haben also andere Browser ein `-webkit-`-Präfix implementiert? Hauptsächlich für die Browser-Kompatibilität — so viele Webentwickler haben begonnen, Websites mit `-webkit-`-Präfixen zu implementieren, dass es so aussah, als wären die anderen Browser kaputt, obwohl sie tatsächlich die Standards befolgten. Daher wurden sie gezwungen, einige solcher Funktionen zu implementieren. Dies zeigt die Gefahr auf, nicht standardisierte und/oder mit Präfixen versehene CSS-Funktionen in Ihrer Arbeit zu verwenden — sie verursachen nicht nur Browser-Kompatibilitätsprobleme, sondern können sich auch ändern, sodass Ihr Code jederzeit kaputtgehen kann. Es ist viel besser, sich an die Standards zu halten.

Wenn Sie solche Funktionen in Ihrer Produktionsarbeit verwenden möchten, stellen Sie sicher, dass Sie gründlich über Browser hinweg testen und prüfen, dass, wenn diese Funktionen nicht funktionieren, die Website dennoch nutzbar bleibt.

## Zusammenfassung

Wir hoffen, dieser Artikel hat Spaß gemacht — mit glänzenden Spielzeugen zu spielen ist im Allgemeinen spaßig und es ist immer interessant zu sehen, welche Arten von erweiterten Styling-Tools in modernen Browsern verfügbar werden.
