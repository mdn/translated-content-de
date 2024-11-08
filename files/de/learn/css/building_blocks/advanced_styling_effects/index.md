---
title: Erweitere Stileffekte
slug: Learn/CSS/Building_blocks/Advanced_styling_effects
l10n:
  sourceCommit: 033285c99a8e1bc05b646ff19b70d2e8b86dff46
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}

Dieser Artikel dient als Trickkiste und bietet eine Einführung in einige interessante erweiterte Stilfunktionen wie Box-Schatten, Mischmodi und Filter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn/CSS/First_steps">CSS: Erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine Vorstellung davon bekommen, wie einige der in modernen Browsern verfügbaren erweiterten Stileffekte genutzt werden können.
      </td>
    </tr>
  </tbody>
</table>

## Box-Schatten

{{cssxref("box-shadow")}} ermöglicht es Ihnen, ein oder mehrere Schlagschatten auf das Box-Element anzuwenden. Ähnlich wie Textschatten werden Box-Schatten von den meisten Browsern gut unterstützt, einschließlich IE9+ und Edge. Benutzer älterer IE-Versionen müssen eventuell auf Schatten verzichten, daher sollten Sie Ihre Designs testen, um sicherzustellen, dass Ihre Inhalte auch ohne diese lesbar sind.

### Ein einfacher Box-Schatten

Sehen wir uns ein einfaches Beispiel an, um loszulegen. Zuerst ein wenig HTML:

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

Dies ergibt das folgende Resultat:

{{EmbedLiveSample("A_simple_box_shadow", "", "100px")}}

Sie werden feststellen, dass wir vier Elemente im `box-shadow`-Eigenschaftswert haben:

1. Der erste Längenwert ist die **horizontale Verschiebung** — der Abstand nach rechts, den der Schatten vom ursprünglichen Kasten versetzt ist (oder nach links, wenn der Wert negativ ist).
2. Der zweite Längenwert ist die **vertikale Verschiebung** — der Abstand nach unten, den der Schatten vom ursprünglichen Kasten versetzt ist (oder nach oben, wenn der Wert negativ ist).
3. Der dritte Längenwert ist der **Weichzeichnungsradius** — die Menge an Weichzeichnung, die auf den Schatten angewendet wird.
4. Der Farbwert ist die **Basisfarbe** des Schattens.

Sie können beliebige Längen- und Färbeeinheiten verwenden, die sinnvoll sind, um diese Werte zu definieren.

### Mehrere Box-Schatten

Sie können auch mehrere Box-Schatten in einer einzelnen `box-shadow`-Deklaration angeben, indem Sie sie mit Kommas trennen:

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

Wir haben hier etwas Interessantes gemacht, indem wir eine hervorgehobene Box mit mehreren farbigen Schichten erstellt haben, aber Sie könnten es auf beliebige Weise verwenden, zum Beispiel um einen realistischeren Look mit Schatten basierend auf mehreren Lichtquellen zu erzeugen.

### Weitere Features von Box-Schatten

Anders als {{cssxref("text-shadow")}} hat {{cssxref("box-shadow")}} ein `inset`-Schlüsselwort — wenn Sie dies am Anfang einer Schatten-Deklaration hinzufügen, wird der Schatten zu einem inneren Schatten, anstatt zu einem äußeren Schatten. Sehen wir uns an, was das bedeutet.

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

Dies ergibt das folgende Resultat:

{{EmbedLiveSample("Other_box_shadow_features", "100%", "70px")}}

Hier haben wir ein Button-Styling zusammen mit Fokus-/Hover-/Aktiv-Zuständen eingerichtet. Der Button hat standardmäßig einen einfachen schwarzen Box-Schatten gesetzt, sowie ein paar inneren Schatten, einen hellen und einen dunklen, die auf entgegengesetzten Ecken des Buttons platziert sind, um einen schönen Schattierungseffekt zu erzielen.

Wenn der Button gedrückt wird, ersetzt der aktive Zustand den ersten Box-Schatten durch einen sehr dunklen inneren Schatten, der den Eindruck vermittelt, dass der Button eingedrückt wird.

> [!NOTE]
> Es gibt ein weiteres Element, das im `box-shadow`-Wert festgelegt werden kann — ein weiterer Längenwert kann optional direkt vor dem Farbwert festgelegt werden, der ein **Ausbreitungsradius** ist. Wenn dieser festgelegt ist, wird der Schatten größer als die ursprüngliche Box. Es wird nicht sehr häufig verwendet, aber es lohnt sich, es zu erwähnen.

## Filter

Auch wenn Sie die Struktur eines Bildes mit CSS nicht ändern können, gibt es einige kreative Dinge, die Sie tun können. Eine sehr schöne Eigenschaft, die helfen kann, Ihre Designs interessanter zu gestalten, ist die {{cssxref("filter")}}-Eigenschaft. Diese Eigenschaft ermöglicht Photoshop-ähnliche Filter direkt aus CSS heraus.

Im folgenden Beispiel haben wir zwei verschiedene Werte für den Filter verwendet. Der `erste` ist `blur()` — dieser Funktion kann ein Wert übergeben werden, der angibt, wie stark das Bild verschwommen sein soll.

Der zweite ist `grayscale()`; durch die Verwendung eines Prozentsatzes legen wir fest, wie viel Farbe entfernt werden soll.

Spielen Sie mit den Prozent- und Pixelparametern im folgenden Beispiel, um zu sehen, wie sich die Bilder ändern. Sie könnten die Werte auch gegen andere austauschen. Versuchen Sie `contrast(200%)`, `invert(100%)` oder `hue-rotate(20deg)` im obigen Live-Beispiel. Sehen Sie sich die MDN-Seite zu [`filter`](/de/docs/Web/CSS/filter) an, um viele andere Optionen zu finden, die Sie ausprobieren könnten.

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

Sie können Filter auf jedes Element anwenden, nicht nur auf Bilder. Einige der verfügbaren Filteroptionen machen sehr ähnliche Dinge wie andere CSS-Funktionen, zum Beispiel `drop-shadow()`, das auf ähnliche Weise arbeitet und einen ähnlichen Effekt wie [`box-shadow`](/de/docs/Web/CSS/box-shadow) oder [`text-shadow`](/de/docs/Web/CSS/text-shadow) erzielt. Der wirklich schöne Aspekt von Filtern ist jedoch, dass sie auf die exakten Formen des Inhalts innerhalb des Kastens angewendet werden, nicht nur auf den Kasten selbst als einen großen Block, daher ist es wichtig, den Unterschied zu kennen.

Im nächsten Beispiel wenden wir unseren Filter auf eine Box an und vergleichen ihn mit einem Box-Schatten. Wie Sie sehen können, folgt der Tropfen-Schatten-Filter der genauen Form des Textes und der Rahmenstriche. Der Box-Schatten folgt nur dem Quadrat des Kastens.

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

CSS-Mischmodi erlauben es uns, Mischmodi zu Elementen hinzuzufügen, die einen Mischeffekt angeben, wenn sich zwei Elemente überlappen — die endgültige Farbe, die für jedes Pixel angezeigt wird, ist das Ergebnis einer Kombination der ursprünglichen Pixelfarbe und derjenigen des Pixels in der darunter liegenden Schicht. Mischmodi sind den Benutzern von Grafik-Anwendungen wie Photoshop sehr vertraut.

Es gibt zwei Eigenschaften, die in CSS Mischmodi verwenden:

- {{cssxref("background-blend-mode")}}, das mehrere Hintergrundbilder und -farben auf einem einzigen Element vermischt.
- {{cssxref("mix-blend-mode")}}, das das Element, auf das es angewendet wird, mit den überlappenden Elementen vermischt — sowohl Hintergrund als auch Inhalt.

Sie finden weit mehr Beispiele als hier verfügbar auf unserer [blend-modes.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/blend-modes.html) Beispielseite (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/blend-modes.html)), und auf der {{cssxref("&lt;blend-mode&gt;")}} Referenzseite.

> [!NOTE]
> Mischmodi sind ebenfalls sehr neu und etwas weniger gut unterstützt als Filter. Es gibt derzeit keine Unterstützung in Edge, und Safari unterstützt nur einige der Mischmodi-Optionen.

### background-blend-mode

Sehen wir uns wieder einige Beispiele an, um dies besser zu verstehen. Zuerst {{cssxref("background-blend-mode")}} — hier zeigen wir ein paar einfache {{htmlelement("div")}}s, damit Sie das Original mit der gemischten Version vergleichen können:

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
  background: url(colorful-heart.png) no-repeat center 20px;
  background-color: green;
}

.multiply {
  background-blend-mode: multiply;
}
```

Das Ergebnis, das wir erhalten, ist dieses — Sie sehen das Original links und den Multiply-Blen-Modus rechts:

{{EmbedLiveSample("background-blend-mode", "", "220px")}}

### mix-blend-mode

Nun sehen wir uns {{cssxref("mix-blend-mode")}} an. Hier präsentieren wir die gleichen zwei `<div>`s, aber jedes sitzt jetzt auf einem einfachen `<div>` mit einem lila Hintergrund, um zu zeigen, wie die Elemente zusammenblenden werden:

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

Sie sehen hier, dass der Multiply Mix Blend nicht nur die beiden Hintergrundbilder, sondern auch die Farbe des darunter liegenden `<div>`s miteinander vermischt hat.

> [!NOTE]
> Keine Sorge, wenn Sie einige der oben aufgeführten Layout-Eigenschaften nicht verstehen, wie {{cssxref("position")}}, {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("z-index")}}, usw. Wir werden diese im Detail in unserem [CSS Layout](/de/docs/Learn/CSS/CSS_layout) Modul besprechen.

## CSS-Formen

Auch wenn es stimmt, dass alles in CSS ein rechteckiger Kasten ist, und Bilder eine physisch rechteckige Box sind, können wir es so aussehen lassen, als ob unser Inhalt um nicht-rechteckige Dinge herumfließt, indem wir [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) verwenden.

Die CSS-Formen-Spezifikation ermöglicht das Umfließen von Text um eine nicht-rechteckige Form. Dies ist besonders nützlich, wenn man mit einem Bild arbeitet, das etwas Weißraum hat, den Sie mit Text umfließen lassen möchten.

Im Bild unten haben wir einen angenehm runden Ballon. Die eigentliche Datei ist rechteckig, aber indem das Bild gefloatet wird (Formen gelten nur für gefloatete Elemente) und die {{cssxref("shape-outside")}} Eigenschaft mit einem Wert von `circle(50%)` verwendet wird, können wir den Effekt erzielen, dass der Text der Linie des Ballons folgt.

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

Die Form in diesem Beispiel reagiert nicht auf den Inhalt der Bilddatei. Stattdessen nimmt die Kreisfunktion ihren Mittelpunkt von der Mitte der Bilddatei, als hätten wir einen Zirkel in der Mitte der Datei platziert und einen Kreis gezeichnet, der in die Datei passt. Es ist dieser Kreis, um den der Text fließt.

> [!NOTE]
> In Firefox können Sie die DevTools [Shapes Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) verwenden, um Shapes zu inspizieren.

Die `circle()`-Funktion ist nur eine von ein paar grundlegenden Formen, die definiert sind, es gibt jedoch eine Reihe verschiedener Wege, um Formen zu erstellen. Für weitere Informationen und Beispielcode zu CSS-Formen siehe die [Leitfäden zu CSS-Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes) auf MDN.

## -webkit-background-clip: text

Ein weiteres Feature, das wir kurz erwähnen möchten, ist der `text`-Wert für {{cssxref("background-clip")}}. Wenn er zusammen mit dem proprietären `-webkit-text-fill-color: transparent;` Feature verwendet wird, ermöglicht dieses, Hintergrundbilder auf die Form des Textes des Elements zu beschneiden, was zu einigen schönen Effekten führt. Dies ist kein offizieller Standard, wurde aber in mehreren Browsern implementiert, da es beliebt ist und recht häufig von Entwicklern verwendet wird. Wenn es in diesem Kontext verwendet wird, benötigen beide Eigenschaften ein `-webkit-`-Vendor-Präfix, auch für nicht-Webkit/Chrome-basierte Browser.
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

Warum haben andere Browser ein `-webkit-` Präfix implementiert? Hauptsächlich wegen der Browser-Kompatibilität — so viele Webentwickler haben begonnen, Websites mit `-webkit-` Präfixen zu implementieren, dass es aussah, als seien die anderen Browser fehlerhaft, während sie in Wirklichkeit den Standards folgten. Daher waren sie gezwungen, einige solcher Features zu implementieren. Dies zeigt das Risiko der Verwendung von nicht standardisierten und/oder präfixierten CSS-Features in Ihrer Arbeit — sie verursachen Browserkompatibilitätsprobleme und sind auch Änderungen unterworfen, so dass Ihr Code jederzeit brechen könnte. Es ist viel besser, sich an die Standards zu halten.

Wenn Sie solche Features in Ihrer Produktionsarbeit verwenden möchten, testen Sie gründlich in verschiedenen Browsern und vergewissern Sie sich, dass die Seite dort, wo diese Features nicht funktionieren, immer noch verwendbar ist.

## Zusammenfassung

Wir hoffen, dieser Artikel hat Ihnen Spaß gemacht — mit glänzenden Spielsachen zu spielen, ist meist vergnüglich, und es ist immer interessant zu sehen, welche Arten von erweiterten Stilwerkzeugen in modernen Browsern verfügbar werden.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}
