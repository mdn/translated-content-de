---
title: Ältere Layoutmethoden
slug: Learn_web_development/Core/CSS_layout/Legacy_Layout_Methods
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

Rastersysteme werden häufig für CSS-Layouts verwendet. Bevor CSS Grid Layout verfügbar war, wurden sie meist mit Floats oder anderen Layoutfunktionen umgesetzt. Dabei stellen Sie sich Ihr Layout als eine festgelegte Anzahl von Spalten vor (z. B. 4, 6 oder 12) und ordnen die Inhaltsspalten innerhalb dieser gedachten Spalten an. In diesem Artikel sehen wir uns an, wie diese älteren Methoden funktionieren. So können Sie nachvollziehen, wie sie in älteren Projekten eingesetzt wurden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundkenntnisse (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziel:</th>
      <td>
        Die grundlegenden Konzepte der Rastersysteme verstehen, die verwendet
        wurden, bevor CSS Grid Layout in Browsern verfügbar war.
      </td>
    </tr>
  </tbody>
</table>

## Layouts und Rastersysteme vor CSS Grid Layout

Wenn Sie aus dem Designbereich kommen, mag es Sie überraschen, dass CSS bis vor nicht allzu langer Zeit kein integriertes Rastersystem hatte. Stattdessen wurden verschiedene, nicht optimale Methoden verwendet, um rasterähnliche Designs zu erstellen. Heute bezeichnen wir diese Methoden als „ältere“ Layoutmethoden.

Bei neuen Projekten bildet CSS Grid Layout in den meisten Fällen zusammen mit einer oder mehreren anderen modernen Layoutmethoden die Grundlage des Layouts. Dennoch werden Ihnen gelegentlich „Rastersysteme“ begegnen, die auf älteren Methoden beruhen. Es lohnt sich zu verstehen, wie sie funktionieren und worin sie sich von CSS Grid Layout unterscheiden.

In diesem Artikel wird erklärt, wie Rastersysteme und Raster-Frameworks auf Basis von Floats und Flexbox funktionieren. Nachdem Sie sich mit Grid Layout beschäftigt haben, wird Ihnen das alles vermutlich überraschend kompliziert vorkommen! Dieses Wissen hilft Ihnen sowohl beim Erstellen von Fallback-Code für Browser, die neuere Methoden nicht unterstützen, als auch bei der Arbeit an bestehenden Projekten, die solche Systeme verwenden.

Behalten Sie bei der Betrachtung dieser Systeme im Hinterkopf, dass keines davon ein Raster so erzeugt, wie CSS Grid Layout es tut. Stattdessen weisen sie Elementen eine Größe zu und verschieben sie so, dass ihre Anordnung _wie_ ein Raster aussieht.

## Ein Layout mit zwei Spalten

Beginnen wir mit dem einfachsten Beispiel: einem Layout mit zwei Spalten. Sie können die Schritte nachvollziehen, indem Sie auf Ihrem Computer eine neue Datei `index.html` erstellen, sie mit einer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) füllen und den folgenden Code an den passenden Stellen einfügen. Am Ende dieses Abschnitts sehen Sie ein interaktives Beispiel des fertigen Ergebnisses.

Zunächst benötigen wir Inhalte für unsere Spalten. Ersetzen Sie den bisherigen Inhalt des body durch Folgendes:

```html
<h1>2 column layout example</h1>
<div>
  <h2>First column</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer
    ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur
    vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus.
    Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
    sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus.
    Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis,
    eget fermentum sapien.
  </p>
</div>

<div>
  <h2>Second column</h2>
  <p>
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
    ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
    est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
    tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
    lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
    vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</div>
```

Jede Spalte benötigt ein äußeres Element, das ihren Inhalt umschließt und es uns ermöglicht, die gesamte Spalte auf einmal zu bearbeiten. In diesem Beispiel haben wir {{htmlelement("div")}}-Elemente gewählt. Sie könnten aber auch semantisch passendere Elemente wie {{htmlelement("article")}}, {{htmlelement("section")}} oder {{htmlelement("aside")}} verwenden.

Nun zum CSS. Fügen Sie Ihrem HTML zunächst Folgendes für die Grundeinstellungen hinzu:

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}
```

Der body nimmt 90 % der Breite des Viewports ein, bis er eine Breite von 900 Pixeln erreicht. Danach behält er diese Breite bei und wird im Viewport zentriert. Standardmäßig erstrecken sich seine Kindelemente (das {{htmlelement("Heading_Elements", "h1")}}-Element und die beiden {{htmlelement("div")}}-Elemente) über 100 % der Breite des body. Damit die beiden {{htmlelement("div")}}-Elemente nebeneinander gefloatet werden können, müssen ihre Breiten zusammen höchstens 100 % der Breite ihres Elternelements ergeben. Fügen Sie am Ende Ihres CSS Folgendes hinzu:

```css
div:nth-of-type(1) {
  width: 48%;
}

div:nth-of-type(2) {
  width: 48%;
}
```

Wir haben beide auf 48 % der Breite ihres Elternelements gesetzt. Zusammen ergeben sie 96 %, sodass 4 % als Abstand zwischen den beiden Spalten übrig bleiben und der Inhalt mehr Raum erhält. Jetzt müssen wir die Spalten nur noch floaten:

```css
div:nth-of-type(1) {
  width: 48%;
  float: left;
}

div:nth-of-type(2) {
  width: 48%;
  float: right;
}
```

Zusammen sollte das Ergebnis so aussehen:

{{ EmbedLiveSample('A_two_column_layout', '100%', 520) }}

Sie sehen, dass wir für alle Breiten Prozentwerte verwenden. Das ist eine gute Strategie, weil dadurch ein **flüssiges Layout** entsteht: Es passt sich verschiedenen Bildschirmgrößen an und behält auch bei kleineren Bildschirmen die Proportionen der Spaltenbreiten bei. Verändern Sie die Breite Ihres Browserfensters, um es selbst zu sehen. Das ist ein wertvolles Hilfsmittel für [responsives Webdesign](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

## Einfache ältere Raster-Frameworks erstellen

Die meisten älteren Frameworks nutzen das Verhalten der {{cssxref("float")}}-Eigenschaft, um eine Spalte neben eine andere zu setzen und so etwas zu erzeugen, das wie ein Raster aussieht. Wenn Sie ein solches Raster mit Floats selbst erstellen, sehen Sie, wie dies funktioniert. Zugleich lernen Sie weiterführende Konzepte kennen, die auf dem Artikel über [Floats und das Aufheben von Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats) aufbauen.

Am einfachsten lässt sich ein Raster-Framework mit fester Breite erstellen. Dazu müssen wir nur festlegen, wie breit das gesamte Design sein soll, wie viele Spalten es haben soll und wie breit die Spalten und ihre Zwischenräume sein sollen. Wenn die Spalten stattdessen mit der Browserbreite wachsen und schrumpfen sollen, müssen wir prozentuale Breiten für die Spalten und die Zwischenräume berechnen.

In den nächsten Abschnitten erstellen wir beide Varianten. Wir verwenden ein Raster mit 12 Spalten – eine häufige Wahl, die sich gut an unterschiedliche Anforderungen anpassen lässt, weil 12 durch 6, 4, 3 und 2 teilbar ist.

### Ein einfaches Raster mit fester Breite

Erstellen wir zunächst ein Rastersystem mit Spalten fester Breite.

Erstellen Sie auf Ihrem Computer eine neue HTML-Datei und fügen Sie das folgende Markup in ihren `<body>` ein:

```html live-sample___basic-grid
<div class="wrapper">
  <div class="row">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
    <div class="col">4</div>
    <div class="col">5</div>
    <div class="col">6</div>
    <div class="col">7</div>
    <div class="col">8</div>
    <div class="col">9</div>
    <div class="col">10</div>
    <div class="col">11</div>
    <div class="col">12</div>
  </div>
  <div class="row">
    <div class="col span1">13</div>
    <div class="col span6">14</div>
    <div class="col span3">15</div>
    <div class="col span2">16</div>
  </div>
</div>
```

Daraus soll ein Beispielraster mit zwei Zeilen und zwölf Spalten werden. Die obere Zeile zeigt die Größe der einzelnen Spalten, die zweite Zeile unterschiedlich breite Bereiche des Rasters.

![CSS-Raster mit 16 Rasterelementen, verteilt auf zwölf Spalten und zwei Zeilen. Die obere Zeile enthält 12 gleich breite Rasterelemente in 12 Spalten. Die zweite Zeile enthält unterschiedlich breite Rasterelemente. Element 13 erstreckt sich über eine Spalte, Element 14 über sechs Spalten, Element 15 über drei und Element 16 über zwei.](simple-grid-finished.png)

Binden Sie als Nächstes ein Stylesheet in Ihr HTML ein: entweder mit einem {{htmlelement("style")}}-Element oder als externe CSS-Datei, auf die ein {{htmlelement("link")}}-Element verweist.

Fügen Sie dem Stylesheet den folgenden Code hinzu. Er gibt dem umschließenden Container eine Breite von 980 Pixeln und auf der rechten Seite ein Padding von 20 Pixeln. Damit bleiben insgesamt 960 Pixel für Spalten und Zwischenräume. In diesem Fall wird das Padding von der Gesamtbreite abgezogen, weil wir {{cssxref("box-sizing")}} für alle Elemente der Seite auf `border-box` gesetzt haben (weitere Informationen finden Sie unter [Das alternative CSS-Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#the_alternative_css_box_model)).

```css live-sample___basic-grid
* {
  box-sizing: border-box;
}

body {
  width: 980px;
  margin: 0 auto;
}

.wrapper {
  padding-right: 20px;
}
```

Nutzen Sie nun den Container, der jede Rasterzeile umschließt, um die Zeilen voneinander zu trennen. Fügen Sie unter der vorherigen Regel Folgendes hinzu:

```css live-sample___basic-grid
.row {
  clear: both;
}
```

Durch dieses Aufheben der Floats müssen wir nicht jede Zeile mit Elementen füllen, die zusammen alle zwölf Spalten belegen. Die Zeilen bleiben getrennt und beeinflussen sich nicht gegenseitig.

Die Zwischenräume zwischen den Spalten sind 20 Pixel breit. Wir erzeugen sie durch einen linken Außenabstand an jeder Spalte – auch an der ersten, um das Padding von 20 Pixeln auf der rechten Seite des Containers auszugleichen. Insgesamt haben wir also 12 Zwischenräume: 12 × 20 = 240.

Ziehen wir diese von der Gesamtbreite von 960 Pixeln ab, bleiben 720 Pixel für die Spalten. Geteilt durch 12 ergibt das eine Breite von 60 Pixeln pro Spalte.

Als Nächstes erstellen wir eine Regel für die Klasse `.col`. Sie floatet das Element nach links, gibt ihm mit {{cssxref("margin-left")}} einen Abstand von 20 Pixeln für den Zwischenraum und setzt seine {{cssxref("width")}} auf 60 Pixel. Fügen Sie die folgende Regel am Ende Ihres CSS hinzu:

```css live-sample___basic-grid
.col {
  float: left;
  margin-left: 20px;
  width: 60px;
  background: rgb(255 150 150);
}
```

Die einzelnen Spalten der oberen Zeile sind nun ordentlich als Raster angeordnet.

> [!NOTE]
> Wir haben außerdem jede Spalte hellrot eingefärbt, damit Sie genau sehen können, wie viel Platz sie einnimmt.

Container, die sich über mehr als eine Spalte erstrecken sollen, benötigen zusätzliche Klassen. Mit ihnen passen wir ihre {{cssxref("width")}}-Werte an die gewünschte Anzahl von Spalten einschließlich der dazwischenliegenden Zwischenräume an. Wir brauchen jeweils eine zusätzliche Klasse für Container, die sich über 2 bis 12 Spalten erstrecken. Die Breite ergibt sich aus der Summe der Spaltenbreiten und der Breiten der Zwischenräume. Dabei gibt es immer einen Zwischenraum weniger als Spalten.

Fügen Sie am Ende Ihres CSS Folgendes hinzu:

```css live-sample___basic-grid
/* Two column widths (120px) plus one gutter width (20px) */
.col.span2 {
  width: 140px;
}
/* Three column widths (180px) plus two gutter widths (40px) */
.col.span3 {
  width: 220px;
}
/* And so on… */
.col.span4 {
  width: 300px;
}
.col.span5 {
  width: 380px;
}
.col.span6 {
  width: 460px;
}
.col.span7 {
  width: 540px;
}
.col.span8 {
  width: 620px;
}
.col.span9 {
  width: 700px;
}
.col.span10 {
  width: 780px;
}
.col.span11 {
  width: 860px;
}
.col.span12 {
  width: 940px;
}
```

Mit diesen Klassen können wir nun unterschiedlich breite Bereiche im Raster anordnen. Speichern Sie die Seite und laden Sie sie in Ihrem Browser, um das Ergebnis zu sehen. Es sollte wie das folgende interaktive Beispiel aussehen:

{{embedlivesample("basic-grid", "100%", 100)}}

Ändern Sie die Klassen Ihrer Elemente oder fügen Sie Container hinzu beziehungsweise entfernen Sie welche, um zu sehen, wie sich das Layout verändern lässt. Beispielsweise könnten Sie die zweite Zeile so gestalten:

```html
<div class="row">
  <div class="col span8">13</div>
  <div class="col span4">14</div>
</div>
```

Jetzt funktioniert Ihr Rastersystem: Sie können die Zeilen und die Anzahl der Spalten pro Zeile festlegen und die Container anschließend mit den gewünschten Inhalten füllen. Geschafft!

### Ein flüssiges Raster erstellen

Unser Raster funktioniert gut, hat aber eine feste Breite. Im interaktiven Beispiel oben ist Ihnen vielleicht aufgefallen, dass es über die eingebettete Seite hinausragt. Wir möchten ein flexibles (flüssiges) Raster, das mit dem verfügbaren Platz im {{Glossary("viewport", "Viewport")}} des Browsers wächst und schrumpft. Dazu können wir die Pixelwerte in Prozentwerte umrechnen.

Mit der folgenden Formel wird eine feste Breite in einen flexiblen Prozentwert umgerechnet:

```plain
target / context = result
```

Für unsere Spaltenbreite beträgt die **Zielbreite** 60 Pixel und der **Kontext** ist der 960 Pixel breite umschließende Container. Den Prozentwert können wir so berechnen:

```plain
60 / 960 = 0.0625
```

Wenn wir das Dezimalkomma um zwei Stellen verschieben, erhalten wir 6,25 %. Wir können also im CSS die Spaltenbreite von 60 Pixeln durch 6,25 % ersetzen.

Dasselbe müssen wir für die Breite der Zwischenräume tun:

```plain
20 / 960 = 0.02083333333
```

Daher müssen wir den 20-Pixel-Wert für {{cssxref("margin-left")}} in der `.col`-Regel und für {{cssxref("padding-right")}} in der `.wrapper`-Regel durch 2,08333333 % ersetzen.

#### Unser Raster aktualisieren

Erstellen Sie für diesen Abschnitt eine Kopie Ihrer bisherigen Beispielseite. Alternativ können Sie den Code aus dem vorherigen interaktiven Beispiel als Ausgangspunkt verwenden (klicken Sie auf die Schaltfläche „Play“, um den vollständigen Code im MDN Playground zu sehen).

Ändern Sie die zweite CSS-Regel (mit dem Selektor `.wrapper`) wie folgt:

```css
body {
  width: 90%;
  max-width: 980px;
  margin: 0 auto;
}

.wrapper {
  padding-right: 2.08333333%;
}
```

Wir haben nicht nur einen Prozentwert für {{cssxref("width")}} angegeben, sondern auch die Eigenschaft {{cssxref("max-width")}} hinzugefügt, damit das Layout nicht zu breit wird.

Ändern Sie anschließend die vierte CSS-Regel (mit dem Selektor `.col`) wie folgt:

```css
.col {
  float: left;
  margin-left: 2.08333333%;
  width: 6.25%;
  background: rgb(255 150 150);
}
```

Nun folgt der etwas mühsamere Teil: Wir müssen alle `.col.span`-Regeln so ändern, dass sie statt Pixelbreiten Prozentwerte verwenden. Das Berechnen dauert etwas; um Ihnen die Arbeit zu ersparen, haben wir die Werte unten bereits ermittelt.

Ersetzen Sie den unteren Block der CSS-Regeln durch Folgendes:

```css
/* Two column widths (12.5%) plus one gutter width (2.08333333%) */
.col.span2 {
  width: 14.58333333%;
}
/* Three column widths (18.75%) plus two gutter widths (4.1666666) */
.col.span3 {
  width: 22.91666666%;
}
/* And so on… */
.col.span4 {
  width: 31.24999999%;
}
.col.span5 {
  width: 39.58333332%;
}
.col.span6 {
  width: 47.91666665%;
}
.col.span7 {
  width: 56.24999998%;
}
.col.span8 {
  width: 64.58333331%;
}
.col.span9 {
  width: 72.91666664%;
}
.col.span10 {
  width: 81.24999997%;
}
.col.span11 {
  width: 89.5833333%;
}
.col.span12 {
  width: 97.91666663%;
}
```

Speichern Sie Ihren Code und laden Sie ihn in einem Browser oder sehen Sie sich das folgende interaktive Beispiel an:

```css hidden live-sample___fluid-grid
* {
  box-sizing: border-box;
}

body {
  width: 90%;
  max-width: 980px;
  margin: 0 auto;
}

.wrapper {
  padding-right: 2.08333333%;
}

.row {
  clear: both;
}

.col {
  float: left;
  margin-left: 2.08333333%;
  width: 6.25%;
  background: rgb(255 150 150);
}

/* Two column widths (12.5%) plus one gutter width (2.08333333%) */
.col.span2 {
  width: 14.58333333%;
}
/* Three column widths (18.75%) plus two gutter widths (4.1666666) */
.col.span3 {
  width: 22.91666666%;
}
/* And so on... */
.col.span4 {
  width: 31.24999999%;
}
.col.span5 {
  width: 39.58333332%;
}
.col.span6 {
  width: 47.91666665%;
}
.col.span7 {
  width: 56.24999998%;
}
.col.span8 {
  width: 64.58333331%;
}
.col.span9 {
  width: 72.91666664%;
}
.col.span10 {
  width: 81.24999997%;
}
.col.span11 {
  width: 89.5833333%;
}
.col.span12 {
  width: 97.91666663%;
}
```

{{embedlivesample("fluid-grid", "100%", 100)}}

Ändern Sie die Breite des Viewports. Die Spaltenbreiten sollten sich entsprechend anpassen.

### Einfacher rechnen mit der Funktion calc()

Mit der Funktion {{cssxref("calc", "calc()")}} können Sie direkt in Ihrem CSS rechnen. Sie ermöglicht einfache mathematische Ausdrücke in CSS-Werten, um den benötigten Wert zu berechnen. Das ist besonders hilfreich bei komplexeren Berechnungen. Sie können sogar verschiedene Einheiten kombinieren, beispielsweise für folgende Anforderung: „Die Höhe dieses Elements soll immer 100 % der Höhe seines Elternelements minus 50px betragen.“ Ein Beispiel finden Sie in [diesem Tutorial zur MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API#keeping_the_interface_constrained_to_the_viewport_regardless_of_device_height_with_calc).

Zurück zu unserem Raster: Jede Spalte, die sich über mehrere Rasterspalten erstreckt, hat eine Gesamtbreite von 6,25 % multipliziert mit der Anzahl der belegten Spalten plus 2,08333333 % multipliziert mit der Anzahl der Zwischenräume. Die Zahl der Zwischenräume ist immer um eins kleiner als die Zahl der Spalten. Mit `calc()` können wir das direkt im Breitenwert berechnen. Für ein Element, das sich über vier Spalten erstreckt, sieht das beispielsweise so aus:

```css
.col.span4 {
  width: calc((6.25% * 4) + (2.08333333% * 3));
}
```

Ersetzen Sie den unteren Regelblock durch Folgendes und laden Sie die Seite im Browser neu. Prüfen Sie, ob Sie dasselbe Ergebnis erhalten:

```css
.col.span2 {
  width: calc((6.25% * 2) + 2.08333333%);
}
.col.span3 {
  width: calc((6.25% * 3) + (2.08333333% * 2));
}
.col.span4 {
  width: calc((6.25% * 4) + (2.08333333% * 3));
}
.col.span5 {
  width: calc((6.25% * 5) + (2.08333333% * 4));
}
.col.span6 {
  width: calc((6.25% * 6) + (2.08333333% * 5));
}
.col.span7 {
  width: calc((6.25% * 7) + (2.08333333% * 6));
}
.col.span8 {
  width: calc((6.25% * 8) + (2.08333333% * 7));
}
.col.span9 {
  width: calc((6.25% * 9) + (2.08333333% * 8));
}
.col.span10 {
  width: calc((6.25% * 10) + (2.08333333% * 9));
}
.col.span11 {
  width: calc((6.25% * 11) + (2.08333333% * 10));
}
.col.span12 {
  width: calc((6.25% * 12) + (2.08333333% * 11));
}
```

```css hidden live-sample___fluid-grid-calc
* {
  box-sizing: border-box;
}

body {
  width: 90%;
  max-width: 980px;
  margin: 0 auto;
}

.wrapper {
  padding-right: 2.08333333%;
}

.row {
  clear: both;
}

.col {
  float: left;
  margin-left: 2.08333333%;
  width: 6.25%;
  background: rgb(255 150 150);
}

.col.span2 {
  width: calc((6.25% * 2) + 2.08333333%);
}
.col.span3 {
  width: calc((6.25% * 3) + (2.08333333% * 2));
}
.col.span4 {
  width: calc((6.25% * 4) + (2.08333333% * 3));
}
.col.span5 {
  width: calc((6.25% * 5) + (2.08333333% * 4));
}
.col.span6 {
  width: calc((6.25% * 6) + (2.08333333% * 5));
}
.col.span7 {
  width: calc((6.25% * 7) + (2.08333333% * 6));
}
.col.span8 {
  width: calc((6.25% * 8) + (2.08333333% * 7));
}
.col.span9 {
  width: calc((6.25% * 9) + (2.08333333% * 8));
}
.col.span10 {
  width: calc((6.25% * 10) + (2.08333333% * 9));
}
.col.span11 {
  width: calc((6.25% * 11) + (2.08333333% * 10));
}
.col.span12 {
  width: calc((6.25% * 12) + (2.08333333% * 11));
}
```

Das fertige Ergebnis sieht so aus:

{{embedlivesample("fluid-grid-calc", "100%", "100")}}

### Semantische und „nicht semantische“ Rastersysteme

Wenn Sie Klassen zu Ihrem Markup hinzufügen, um das Layout festzulegen, koppeln Sie Inhalt und Markup an die visuelle Darstellung. Eine solche Verwendung von CSS-Klassen wird manchmal als „nicht semantisch“ bezeichnet: Die Klassen beschreiben, wie der Inhalt aussieht, statt den Inhalt selbst zu beschreiben. Das ist bei unseren Klassen `span2`, `span3` usw. der Fall.

Das ist jedoch nicht die einzige Möglichkeit. Sie könnten zunächst Ihr Raster festlegen und die Größenangaben dann den Regeln bereits vorhandener semantischer Klassen hinzufügen. Wenn Sie beispielsweise ein {{htmlelement("div")}}-Element mit der Klasse `content` haben, das sich über acht Spalten erstrecken soll, können Sie die Breite aus der Klasse `span8` übernehmen. Daraus ergibt sich eine Regel wie diese:

```css
.content {
  width: calc((6.25% * 8) + (2.08333333% * 7));
}
```

> [!NOTE]
> Wenn Sie einen Präprozessor wie [Sass](https://sass-lang.com/) verwenden, können Sie ein einfaches Mixin erstellen, das diesen Wert für Sie einfügt.

### Versetzte Container in unserem Raster ermöglichen

Unser Raster funktioniert gut, solange alle Container bündig an der linken Seite des Rasters beginnen sollen. Wenn vor dem ersten Container oder zwischen Containern eine Spalte frei bleiben soll, benötigen wir eine Klasse für einen Versatz. Sie fügt einen linken Außenabstand hinzu, der den Container optisch im Raster verschiebt. Wieder ist etwas Rechenarbeit nötig!

Probieren wir es aus.

Verwenden Sie Ihren bisherigen Code oder den Code aus dem vorherigen interaktiven Beispiel (klicken Sie auf die Schaltfläche „Play“, um den vollständigen Code im MDN Playground zu sehen).

Erstellen Sie in Ihrem CSS eine Klasse, die ein Container-Element um eine Spaltenbreite versetzt. Fügen Sie am Ende Ihres CSS Folgendes hinzu:

```css
.offset-by-one {
  margin-left: calc(6.25% + (2.08333333% * 2));
}
```

Wenn Sie die Prozentwerte lieber selbst berechnen, verwenden Sie stattdessen diese Variante:

```css
.offset-by-one {
  margin-left: 10.41666666%;
}
```

Sie können diese Klasse nun jedem Container hinzufügen, links von dem eine Spalte frei bleiben soll. Wenn Ihr HTML beispielsweise Folgendes enthält:

```html
<div class="col span6">14</div>
```

Ersetzen Sie es durch:

```html
<div class="col span5 offset-by-one">14</div>
```

> [!NOTE]
> Beachten Sie, dass Sie die Anzahl der belegten Spalten verringern müssen, um Platz für den Versatz zu schaffen!

```html hidden live-sample___fluid-grid-offset
<div class="wrapper">
  <div class="row">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
    <div class="col">4</div>
    <div class="col">5</div>
    <div class="col">6</div>
    <div class="col">7</div>
    <div class="col">8</div>
    <div class="col">9</div>
    <div class="col">10</div>
    <div class="col">11</div>
    <div class="col">12</div>
  </div>
  <div class="row">
    <div class="col span1">13</div>
    <div class="col span5 offset-by-one">14</div>
    <div class="col span3">15</div>
    <div class="col span2">16</div>
  </div>
</div>
```

```css hidden live-sample___fluid-grid-offset
* {
  box-sizing: border-box;
}

body {
  width: 90%;
  max-width: 980px;
  margin: 0 auto;
}

.wrapper {
  padding-right: 2.08333333%;
}

.row {
  clear: both;
}

.col {
  float: left;
  margin-left: 2.08333333%;
  width: 6.25%;
  background: rgb(255 150 150);
}

/* Two column widths (12.5%) plus one gutter width (2.08333333%) */
.col.span2 {
  width: 14.58333333%;
}
/* Three column widths (18.75%) plus two gutter widths (4.1666666) */
.col.span3 {
  width: 22.91666666%;
}
/* And so on... */
.col.span4 {
  width: 31.24999999%;
}
.col.span5 {
  width: 39.58333332%;
}
.col.span6 {
  width: 47.91666665%;
}
.col.span7 {
  width: 56.24999998%;
}
.col.span8 {
  width: 64.58333331%;
}
.col.span9 {
  width: 72.91666664%;
}
.col.span10 {
  width: 81.24999997%;
}
.col.span11 {
  width: 89.5833333%;
}
.col.span12 {
  width: 97.91666663%;
}

.offset-by-one {
  margin-left: 10.41666666%;
}
```

Laden Sie die Seite neu, um den Unterschied zu sehen, oder sehen Sie sich unser fertiges interaktives Beispiel an:

{{embedlivesample("fluid-grid-offset", "100%","100")}}

> [!NOTE]
> Als zusätzliche Übung: Können Sie eine Klasse `offset-by-two` implementieren?

### Grenzen von Rastern mit Floats

Bei einem solchen System müssen Sie darauf achten, dass die Gesamtbreiten stimmen und dass eine Zeile keine Elemente enthält, die zusammen mehr Spalten belegen, als vorhanden sind. Aufgrund der Funktionsweise von Floats rutschen die letzten Elemente in die nächste Zeile, wenn die Rasterspalten zusammen zu breit werden. Dadurch wird das Raster aufgebrochen.

Bedenken Sie außerdem, dass Inhalte überlaufen und unordentlich aussehen, wenn sie breiter werden als die Zeilen, in denen sie stehen.

Die größte Einschränkung dieses Systems ist, dass es im Wesentlichen eindimensional ist. Wir arbeiten mit Spalten und mit Elementen, die sich über mehrere Spalten erstrecken, aber nicht mit Zeilen. Bei diesen älteren Layoutmethoden lässt sich die Höhe von Elementen nur schwer steuern, ohne sie ausdrücklich festzulegen. Auch das ist wenig flexibel, denn es funktioniert nur, wenn Sie sicherstellen können, dass Ihr Inhalt eine bestimmte Höhe hat.

## Flexbox-Raster?

Wenn Sie unseren vorherigen Artikel über [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) gelesen haben, halten Sie Flexbox vielleicht für die ideale Lösung für ein Rastersystem. Es gibt viele Rastersysteme auf Flexbox-Basis, und Flexbox kann zahlreiche Probleme lösen, die wir bei unserem obigen Raster festgestellt haben.

Flexbox wurde jedoch nicht als Rastersystem entworfen und bringt bei einer solchen Verwendung eigene Herausforderungen mit sich. Als einfaches Beispiel können wir dasselbe Markup wie oben verwenden und die Klassen `wrapper`, `row` und `col` mit dem folgenden CSS gestalten:

```css
body {
  width: 90%;
  max-width: 980px;
  margin: 0 auto;
}

.wrapper {
  padding-right: 2.08333333%;
}

.row {
  display: flex;
}

.col {
  margin-left: 2.08333333%;
  margin-bottom: 1em;
  width: 6.25%;
  flex: 1 1 auto;
  background: rgb(255 150 150);
}
```

```html hidden live-sample___fluid-grid live-sample___fluid-grid-calc live-sample___flexbox-grid
<div class="wrapper">
  <div class="row">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
    <div class="col">4</div>
    <div class="col">5</div>
    <div class="col">6</div>
    <div class="col">7</div>
    <div class="col">8</div>
    <div class="col">9</div>
    <div class="col">10</div>
    <div class="col">11</div>
    <div class="col">12</div>
  </div>
  <div class="row">
    <div class="col span1">13</div>
    <div class="col span6">14</div>
    <div class="col span3">15</div>
    <div class="col span2">16</div>
  </div>
</div>
```

```css hidden live-sample___flexbox-grid
* {
  box-sizing: border-box;
}

body {
  width: 90%;
  max-width: 980px;
  margin: 0 auto;
}

.wrapper {
  padding-right: 2.08333333%;
}

.row {
  display: flex;
}

.col {
  margin-left: 2.08333333%;
  margin-bottom: 1em;
  width: 6.25%;
  flex: 1 1 auto;
  background: rgb(255 150 150);
}

.col.span2 {
  width: calc((6.25% * 2) + 2.08333333%);
}
.col.span3 {
  width: calc((6.25% * 3) + (2.08333333% * 2));
}
.col.span4 {
  width: calc((6.25% * 4) + (2.08333333% * 3));
}
.col.span5 {
  width: calc((6.25% * 5) + (2.08333333% * 4));
}
.col.span6 {
  width: calc((6.25% * 6) + (2.08333333% * 5));
}
.col.span7 {
  width: calc((6.25% * 7) + (2.08333333% * 6));
}
.col.span8 {
  width: calc((6.25% * 8) + (2.08333333% * 7));
}
.col.span9 {
  width: calc((6.25% * 9) + (2.08333333% * 8));
}
.col.span10 {
  width: calc((6.25% * 10) + (2.08333333% * 9));
}
.col.span11 {
  width: calc((6.25% * 11) + (2.08333333% * 10));
}
.col.span12 {
  width: calc((6.25% * 12) + (2.08333333% * 11));
}
```

Damit erhalten wir im Wesentlichen dasselbe Ergebnis wie zuvor:

{{embedlivesample("flexbox-grid", "100%","100")}}

Hier machen wir jede Zeile zu einem Flex-Container. Auch bei einem Flexbox-basierten Raster benötigen wir Zeilen, damit die darin enthaltenen Elemente zusammen weniger als `100%` einnehmen können. Wir setzen für diesen Container `display: flex`.

Für `.col` setzen wir den ersten Wert der Eigenschaft {{cssxref("flex")}} ({{cssxref("flex-grow")}}) auf 1, damit die Elemente wachsen können, und den zweiten Wert ({{cssxref("flex-shrink")}}) ebenfalls auf 1, damit sie schrumpfen können. Den dritten Wert ({{cssxref("flex-basis")}}) setzen wir auf `auto`. Da für unser Element {{cssxref("width")}} festgelegt ist, wird bei `auto` diese Breite als Wert für `flex-basis` verwendet.

Spalten, die sich über eine bestimmte Anzahl von Spalten erstrecken sollen, benötigen weiterhin unsere `span`-Klassen. Diese geben eine Breite vor, die bei den betreffenden Elementen als Wert für `flex-basis` verwendet wird.

Dieses System richtet sich nicht nach dem Raster, in dem die Elemente liegen, weil es nichts darüber weiß. Flexbox ist von seiner Konzeption her **eindimensional**: Es verarbeitet jeweils eine Dimension, entweder eine Zeile oder eine Spalte. Damit können wir kein starres Raster aus Spalten und Zeilen erstellen. Wenn wir Flexbox für unser Raster verwenden, müssen wir die Prozentwerte also weiterhin wie beim Layout mit Floats berechnen.

Möglicherweise entscheiden Sie sich in Ihrem Projekt dennoch für ein Flexbox-„Raster“, weil Flexbox gegenüber Floats zusätzliche Möglichkeiten zur Ausrichtung und Platzverteilung bietet. Sie sollten sich aber bewusst sein, dass Sie ein Werkzeug für einen anderen Zweck einsetzen als den, für den es entworfen wurde. Deshalb können zusätzliche Umwege nötig sein, um das gewünschte Ergebnis zu erzielen.

## Rastersysteme von Drittanbietern

Da wir nun die Berechnungen hinter unserem Raster verstehen, können wir uns einige verbreitete Rastersysteme von Drittanbietern ansehen. Wenn Sie im Web nach „CSS grid framework“ suchen, finden Sie eine große Auswahl. Beliebte Frameworks wie [Bootstrap](https://getbootstrap.com/) und [Foundation](https://get.foundation/) enthalten ein Rastersystem. Daneben gibt es eigenständige Rastersysteme, die mit CSS oder Präprozessoren entwickelt wurden.

Wir sehen uns eines dieser eigenständigen Systeme an, da es typische Techniken für die Arbeit mit einem Raster-Framework veranschaulicht. Das verwendete Raster ist Teil von Skeleton, einem einfachen CSS-Framework.

Besuchen Sie zunächst die [Skeleton-Website](http://getskeleton.com/) und wählen Sie „Download“, um die ZIP-Datei herunterzuladen. Entpacken Sie sie und kopieren Sie die enthaltenen Dateien skeleton.css und normalize.css in ein neues Verzeichnis.

Erstellen Sie im selben Verzeichnis wie die Skeleton- und Normalize-CSS-Dateien eine neue HTML-Datei mit einem leeren `<body>`.

Binden Sie Skeleton und Normalize in die HTML-Seite ein, indem Sie ihrem head Folgendes hinzufügen:

```html
<link href="normalize.css" rel="stylesheet" />
<link href="skeleton.css" rel="stylesheet" />
```

Skeleton enthält mehr als nur ein Rastersystem: Es bietet auch CSS für Typografie und andere Seitenelemente, das Sie als Ausgangspunkt verwenden können. Vorerst belassen wir es jedoch bei den Standardeinstellungen – uns interessiert hier vor allem das Raster.

> [!NOTE]
> [Normalize](https://necolas.github.io/normalize.css/) ist eine kleine, sehr nützliche CSS-Bibliothek von Nicolas Gallagher. Sie nimmt automatisch einige grundlegende Layoutkorrekturen vor und sorgt dafür, dass die Standardgestaltung von Elementen in verschiedenen Browsern einheitlicher ist.

Wir verwenden ähnliches HTML wie in unserem früheren Beispiel. Fügen Sie Folgendes in den body Ihres HTML ein:

```html
<div class="container">
  <div class="row">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
    <div class="col">4</div>
    <div class="col">5</div>
    <div class="col">6</div>
    <div class="col">7</div>
    <div class="col">8</div>
    <div class="col">9</div>
    <div class="col">10</div>
    <div class="col">11</div>
    <div class="col">12</div>
  </div>
  <div class="row">
    <div class="col">13</div>
    <div class="col">14</div>
    <div class="col">15</div>
    <div class="col">16</div>
  </div>
</div>
```

Um Skeleton zu verwenden, muss das umschließende {{htmlelement("div")}}-Element die Klasse `container` erhalten. Das ist in unserem HTML bereits der Fall. Dadurch wird der Inhalt bei einer maximalen Breite von 960 Pixeln zentriert. Sie können sehen, dass die Boxen nun nie breiter als 960 Pixel werden.

In der Datei skeleton.css können Sie nachsehen, welches CSS beim Anwenden dieser Klasse verwendet wird. Das `<div>` wird durch linke und rechte Außenabstände mit dem Wert `auto` zentriert; auf beiden Seiten erhält es ein Padding von 20 Pixeln. Skeleton setzt außerdem wie in unserem früheren Beispiel die Eigenschaft {{cssxref("box-sizing")}} auf `border-box`. Dadurch zählen Padding und Rahmen dieses Elements zur Gesamtbreite.

```css
.container {
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
```

Elemente können nur Teil des Rasters sein, wenn sie sich innerhalb einer Zeile befinden. Wie in unserem früheren Beispiel benötigen wir daher ein zusätzliches `<div>` oder ein anderes Element mit der Klasse `row` zwischen den `<div>`-Elementen mit dem Inhalt und dem umschließenden `<div>`. Auch das haben wir bereits vorbereitet.

Ordnen wir nun die Container-Boxen an. Skeleton basiert auf einem Raster mit 12 Spalten. Alle Boxen der oberen Zeile benötigen die Klassen `one column`, damit sie jeweils eine Spalte belegen.

Fügen Sie diese Klassen wie im folgenden Ausschnitt gezeigt hinzu:

```html
<div class="container">
  <div class="row">
    <div class="one column">1</div>
    <div class="one column">2</div>
    <div class="one column">3</div>
    /* and so on */
  </div>
</div>
```

Geben Sie anschließend den Containern in der zweiten Zeile Klassen, die angeben, über wie viele Spalten sie sich erstrecken sollen:

```html
<div class="row">
  <div class="one column">13</div>
  <div class="six columns">14</div>
  <div class="three columns">15</div>
  <div class="two columns">16</div>
</div>
```

Speichern Sie Ihre HTML-Datei und laden Sie sie in Ihrem Browser, um das Ergebnis zu sehen.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, dieses Beispiel zum Laufen zu bringen, verbreitern Sie das Browserfenster, in dem Sie es betrachten. Ist das Fenster zu schmal, wird das Raster nicht wie hier beschrieben angezeigt. Falls das nicht hilft, vergleichen Sie Ihre Datei mit unserer Datei [html-skeleton-finished.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/legacy/html-skeleton-finished.html) (sie ist auch als [interaktives Beispiel](https://mdn.github.io/learning-area/css/css-layout/legacy/html-skeleton-finished.html) verfügbar).

In der Datei skeleton.css können Sie nachvollziehen, wie das funktioniert. Beispielsweise enthält Skeleton die folgende Definition für die Gestaltung von Elementen mit den Klassen „three columns“:

```css
.three.columns {
  width: 22%;
}
```

Skeleton – wie jedes andere Raster-Framework – stellt vordefinierte Klassen bereit, die Sie Ihrem Markup hinzufügen können. Das Ergebnis ist dasselbe, als hätten Sie die Prozentwerte selbst berechnet.

Wie Sie sehen, müssen wir bei der Verwendung von Skeleton nur sehr wenig CSS schreiben. Sobald wir die Klassen zum Markup hinzufügen, übernimmt es das Floaten für uns. Diese Möglichkeit, die Verantwortung für das Layout an ein Framework abzugeben, machte Raster-Frameworks so attraktiv. Heute verzichten jedoch viele Entwickler darauf und verwenden stattdessen das native Raster, das CSS Grid Layout bereitstellt.

## Zusammenfassung

Sie wissen nun, wie verschiedene Rastersysteme erstellt werden. Dieses Wissen hilft Ihnen bei der Arbeit an älteren Websites und dabei, die Unterschiede zwischen dem nativen Raster von CSS Grid Layout und diesen älteren Systemen zu verstehen.
