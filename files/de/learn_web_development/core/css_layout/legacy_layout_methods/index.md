---
title: Veraltete Layout-Methoden
slug: Learn_web_development/Core/CSS_layout/Legacy_Layout_Methods
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

Rastersysteme sind eine sehr häufig verwendete Funktion in CSS-Layouts, und bevor es das CSS-Grid-Layout gab, neigten sie dazu, mit Floats oder anderen Layout-Funktionen implementiert zu werden. Sie stellen sich Ihr Layout als eine bestimmte Anzahl von Spalten vor (z. B. 4, 6 oder 12) und fügen dann Ihre Inhalts-Spalten in diese imaginären Spalten ein. In diesem Artikel werden wir untersuchen, wie diese älteren Methoden funktionieren, damit Sie verstehen, wie sie verwendet wurden, falls Sie an einem älteren Projekt arbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen in HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und grundlegende Kenntnisse, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die grundlegenden Konzepte hinter den Rasterlayout-Systemen zu verstehen,
        die vor der Verfügbarkeit von CSS-Grid-Layout in Browsern verwendet wurden.
      </td>
    </tr>
  </tbody>
</table>

## Layout- und Rastersysteme vor dem CSS-Grid-Layout

Es mag für jemanden aus einem Design-Hintergrund überraschend erscheinen, dass CSS bis vor kurzem kein integriertes Rastersystem hatte und wir stattdessen eine Vielzahl von suboptimalen Methoden verwendeten, um rasterähnliche Designs zu erstellen. Wir bezeichnen diese jetzt als "veraltete" Methoden.

Bei neuen Projekten wird in den meisten Fällen CSS-Grid-Layout in Kombination mit einer oder mehreren anderen modernen Layout-Methoden verwendet, um die Basis für jedes Layout zu bilden. Sie werden jedoch von Zeit zu Zeit auf "Rastersysteme" stoßen, die diese veralteten Methoden verwenden. Es ist wertvoll zu verstehen, wie sie funktionieren und warum sie sich vom CSS-Grid-Layout unterscheiden.

Diese Lektion erklärt, wie Rastersysteme und Raster-Frameworks basierend auf Floats und Flexbox funktionieren. Da Sie das Grid-Layout studiert haben, werden Sie wahrscheinlich überrascht sein, wie kompliziert das alles scheint! Dieses Wissen wird Ihnen helfen, wenn Sie Fallback-Code für Browser erstellen müssen, die neuere Methoden nicht unterstützen, zusätzlich dazu, dass Sie an bestehenden Projekten arbeiten können, die diese Arten von Systemen verwenden.

Es ist wichtig, im Auge zu behalten, wenn wir diese Systeme erkunden, dass keines von ihnen tatsächlich ein Raster auf die Weise erstellt, wie es das CSS-Grid-Layout tut. Sie funktionieren, indem sie den Elementen eine Größe zuweisen und sie so verschieben, dass sie sich auf eine Weise ausrichten, die _aussieht_ wie ein Raster.

## Ein zweispaltiges Layout

Lassen Sie uns mit dem einfachsten möglichen Beispiel beginnen — einem zweispaltigen Layout. Sie können mitmachen, indem Sie eine neue `index.html`-Datei auf Ihrem Computer erstellen, sie mit einer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) füllen und den unten stehenden Code an den entsprechenden Stellen einfügen. Am Ende des Abschnitts können Sie ein Live-Beispiel dafür sehen, wie der endgültige Code aussehen sollte.

Zuerst brauchen wir etwas Inhalt, den wir in unsere Spalten einfügen können. Ersetzen Sie, was sich derzeit im Body befindet, mit dem folgenden:

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

Jede der Spalten benötigt ein äußeres Element, um ihren Inhalt zu enthalten und uns zu ermöglichen, alles auf einmal zu manipulieren. In diesem Beispiel haben wir {{htmlelement("div")}}s gewählt, aber Sie könnten etwas Semantisch Angemesseneres wie {{htmlelement("article")}}s, {{htmlelement("section")}}s und {{htmlelement("aside")}}, oder was auch immer, wählen.

Nun zum CSS. Zuerst einmal, wenden Sie Folgendes auf Ihr HTML an, um einige grundlegende Einstellungen vorzunehmen:

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}
```

Der Body wird 90% der Viewport-Breite groß sein, bis er 900px breit wird, in diesem Fall wird er fixiert bei dieser Breite bleiben und sich im Viewport zentrieren. Standardmäßig werden seine Kinder (die {{htmlelement("Heading_Elements", "h1")}} und die zwei {{htmlelement("div")}}s) 100% der Breite des Bodys einnehmen. Wenn wir möchten, dass die zwei {{htmlelement("div")}}s nebeneinander floated werden, müssen wir ihre Breiten auf insgesamt 100% der Breite ihres Elternelements oder kleiner einstellen, damit sie nebeneinander passen. Fügen Sie das Folgende am Ende Ihres CSS hinzu:

```css
div:nth-of-type(1) {
  width: 48%;
}

div:nth-of-type(2) {
  width: 48%;
}
```

Hier haben wir beide auf 48% der Breite ihres Elternelements eingestellt — das ergibt 96%, sodass uns noch 4% bleiben, um als Rinne zwischen den beiden Spalten zu wirken, was dem Inhalt etwas Raum zum Atmen gibt. Jetzt müssen wir nur noch die Spalten floaten, wie so:

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

Wenn Sie das alles zusammenfügen, sollten Sie ein Ergebnis wie folgendes erhalten:

{{ EmbedLiveSample('A_two_column_layout', '100%', 520) }}

Hier werden Sie bemerken, dass wir für alle Breiten Prozentwerte verwenden — dies ist eine gute Strategie, da es ein **liquides Layout** erstellt, das sich an verschiedene Bildschirmgrößen anpasst und die gleichen Proportionen für die Spaltenbreiten bei kleineren Bildschirmgrößen beibehält. Versuchen Sie, die Breite Ihres Browserfensters anzupassen, um es selbst zu sehen. Dies ist ein wertvolles Werkzeug für [responsives Webdesign](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

## Einfache veraltete Raster-Frameworks erstellen

Die Mehrheit der veralteten Frameworks verwenden das Verhalten der {{cssxref("float")}}-Eigenschaft, um eine Spalte neben die andere zu floaten, um etwas zu erstellen, das wie ein Raster aussieht. Der Prozess des Erstellens eines Rasters mit Floats zeigt Ihnen, wie dies funktioniert und führt auch einige fortgeschrittenere Konzepte ein, die auf den Dingen aufbauen, die Sie in der Lektion über [Floats und Clearing](/de/docs/Learn_web_development/Core/CSS_layout/Floats) gelernt haben.

Der einfachste Typ eines Raster-Frameworks, den man erstellen kann, ist eines mit fester Breite — wir müssen nur herausfinden, wie viel Gesamtebreite unser Design haben soll, wie viele Spalten wir wollen und wie breit die Rinnen und Spalten sein sollten. Wenn wir stattdessen entscheiden, unser Design auf einem Raster mit Spalten zu gestalten, die wachsen und schrumpfen gemäß der Browser-Breite, müssten wir Prozentbreiten für die Spalten und Rinnen zwischen ihnen berechnen.

In den nächsten Abschnitten werden wir ansehen, wie man beides erstellt. Wir werden ein 12-Spalten-Raster erstellen — eine sehr verbreitete Wahl, die als sehr anpassungsfähig an unterschiedliche Situationen gilt, da 12 sich gut durch 6, 4, 3 und 2 teilen lässt.

### Ein einfaches Raster mit fester Breite

Lassen Sie uns zuerst ein Rastersystem erstellen, das feste Spaltenbreiten verwendet.

Beginnen Sie damit, eine neue HTML-Datei auf Ihrem lokalen System zu erstellen und fügen Sie folgendes Markup in dessen `<body>` ein:

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

Das Ziel ist, dies in ein Demonstrationsraster aus zwei Reihen auf einem zwölfspaltigen Raster zu verwandeln — die oberste Reihe demonstriert die Größe der einzelnen Spalten, die zweite Reihe einige unterschiedlich große Bereiche im Raster.

![CSS-Raster mit 16 Rasterelementen, verteilt auf zwölf Spalten und zwei Reihen. Die obere Reihe hat 12 gleich breite Rasterelemente in 12 Spalten. Die zweite Reihe hat unterschiedlich große Rasterelemente. Element 13 erstreckt sich über 1 Spalte, Element 14 über sechs Spalten, 15 über drei und 16 über zwei.](simple-grid-finished.png)

Wenden Sie als Nächstes ein Stylesheet auf Ihr HTML an, indem Sie entweder ein {{htmlelement("style")}}-Element oder eine externe CSS-Datei verwenden, die in einem {{htmlelement("link")}}-Element referenziert wird.

Fügen Sie den folgenden Code zum Stylesheet hinzu, der dem Wrapper-Container eine Breite von 980 Pixeln gibt, mit einem Padding auf der rechten Seite von 20 Pixeln. Das lässt uns 960 Pixel für unsere Gesamtbreite von Spalten- und Rinnenbreiten — in diesem Fall wird das Padding von der Gesamteinhaltsbreite subtrahiert, weil wir {{cssxref("box-sizing")}} auf `border-box` auf alle Elemente auf der Seite eingestellt haben (siehe [Das alternative CSS-Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#the_alternative_css_box_model) für weitere Erklärungen).

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

Nun verwenden Sie den Reihencontainer, der um jede Reihe des Rasters gewickelt ist, um eine Reihe von der anderen zu trennen. Fügen Sie die folgende Regel unter Ihrer vorherigen hinzu:

```css live-sample___basic-grid
.row {
  clear: both;
}
```

Die Anwendung dieses Clearings bedeutet, dass wir nicht jede Reihe vollständig mit Elementen auffüllen müssen, die die vollen zwölf Spalten ausmachen. Die Reihen bleiben getrennt und stören sich nicht gegenseitig.

Die Rinnen zwischen den Spalten sind 20 Pixel breit. Wir erstellen diese Rinnen als Margin auf der linken Seite jeder Spalte — einschließlich der ersten Spalte, um die 20 Pixel Padding auf der rechten Seite des Containers auszugleichen. So haben wir insgesamt 12 Rinnen — 12 x 20 = 240.

Wir müssen das von unserer Gesamtebreite von 960 Pixeln abziehen, was uns 720 Pixel für unsere Spalten lässt. Wenn wir das jetzt durch 12 teilen, wissen wir, dass jede Spalte 60 Pixel breit sein sollte.

Unser nächster Schritt ist, eine Regel für die Klasse `.col` zu erstellen, sie nach links zu floaten, ihr einen {{cssxref("margin-left")}} von 20 Pixeln zu geben, um die Rinne zu bilden, und eine {{cssxref("width")}} von 60 Pixeln. Fügen Sie die folgende Regel am Ende Ihres CSS hinzu:

```css live-sample___basic-grid
.col {
  float: left;
  margin-left: 20px;
  width: 60px;
  background: rgb(255 150 150);
}
```

Die obere Reihe von Einzelspalten wird nun ordentlich als ein Raster angeordnet.

> [!NOTE]
> Wir haben auch jeder Spalte eine hellrote Farbe gegeben, damit Sie genau sehen können, wie viel Platz jede einnimmt.

Layout-Container, die wir über mehr als eine Spalte erstrecken wollen, müssen spezielle Klassen erhalten, um ihre {{cssxref("width")}}-Werte auf die erforderliche Anzahl von Spalten (plus Rinnen dazwischen) anzupassen. Wir müssen eine zusätzliche Klasse erstellen, damit Container sich über 2 bis 12 Spalten erstrecken können. Jede Breite ist das Ergebnis der Addition der Spaltenbreite dieser Anzahl von Spalten plus der Rinnenbreiten, die immer um eins weniger sind als die Anzahl der Spalten.

Fügen Sie das Folgende am Ende Ihres CSS hinzu:

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

Mit diesen geschaffenen Klassen können wir nun unterschiedlich breite Spalten im Raster anordnen. Versuchen Sie, die Seite in Ihrem Browser zu speichern und zu laden, um die Effekte zu sehen. Es sollte so aussehen wie im folgenden Live-Beispiel:

{{embedlivesample("basic-grid", "100%", 100)}}

Versuchen Sie, die Klassen an Ihren Elementen zu ändern oder sogar einige Container hinzuzufügen und zu entfernen, um zu sehen, wie Sie das Layout variieren können. Zum Beispiel könnten Sie die zweite Reihe so aussehen lassen:

```html
<div class="row">
  <div class="col span8">13</div>
  <div class="col span4">14</div>
</div>
```

Jetzt haben Sie ein Rastersystem, mit dem Sie die Reihen und die Anzahl der Spalten in jeder Reihe definieren und dann jeden Container mit dem erforderlichen Inhalt füllen können. Großartig!

### Ein flexibles Raster erstellen

Unser Raster funktioniert gut, hat aber eine feste Breite; Sie werden bemerkt haben, dass das Raster die eingebettete Seite im obigen Live-Beispiel überläuft. Wir wollen wirklich ein flexibles (fluides) Raster, das mit dem verfügbaren Raum im Browser {{Glossary("viewport", "Viewport")}} wächst und schrumpft. Um dies zu erreichen, können wir die Pixelbreiten in Prozentsätze umwandeln.

Die Gleichung, die eine feste Breite in eine flexible prozentbasierte umwandelt, ist wie folgt.

```plain
target / context = result
```

Für unsere Spaltenbreite ist unsere **Zielbreite** 60 Pixel und unser **Kontext** der 960 Pixel breite Wrapper. Wir können das Folgende verwenden, um einen Prozentsatz zu berechnen.

```plain
60 / 960 = 0.0625
```

Dann verschieben wir das Dezimal um 2 Stellen, was uns einen Prozentsatz von 6.25% gibt. In unserem CSS können wir die 60 Pixel breite Spaltenbreite durch 6.25% ersetzen.

Wir müssen das Gleiche auch mit unserer Rinnenbreite tun:

```plain
20 / 960 = 0.02083333333
```

Wir müssen also die 20 Pixel {{cssxref("margin-left")}} in unserer `.col`-Regel und das 20 Pixel {{cssxref("padding-right")}} auf der `.wrapper` mit 2.08333333% ersetzen.

#### Aktualisierung unseres Rasters

Um in diesem Abschnitt anzufangen, machen Sie eine neue Kopie Ihrer vorherigen Beispielseite, oder greifen Sie auf den Code aus dem vorherigen Live-Beispiel zurück, um ihn als Startpunkt zu verwenden (klicken Sie auf die "Play"-Schaltfläche, um den vollständigen Code im MDN Playground zu sehen).

Aktualisieren Sie die zweite CSS-Regel (mit dem `.wrapper`-Selektor) wie folgt:

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

Nicht nur, dass wir ihm eine Prozent-{{cssxref("width")}} gegeben haben, wir haben auch eine {{cssxref("max-width")}} Eigenschaft hinzugefügt, um zu verhindern, dass das Layout zu breit wird.

Aktualisieren Sie als nächstes die vierte CSS-Regel (mit dem `.col`-Selektor) so:

```css
.col {
  float: left;
  margin-left: 2.08333333%;
  width: 6.25%;
  background: rgb(255 150 150);
}
```

Jetzt kommt der etwas mühsamere Teil — wir müssen alle unsere `.col.span`-Regeln aktualisieren, um anstelle von Pixelbreiten Prozente zu verwenden. Das erfordert ein wenig Zeit mit einem Taschenrechner; um Ihnen etwas Mühe zu ersparen, haben wir es hier unten für Sie gemacht.

Aktualisieren Sie den unteren Block von CSS-Regeln mit dem Folgenden:

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

Speichern Sie nun Ihren Code und laden Sie ihn in einem Browser, oder schauen Sie sich das folgende Live-Beispiel an:

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
  background: rgb(255, 150, 150);
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

Probieren Sie aus, die Viewport-Breite zu ändern — Sie sollten sehen, dass sich die Spaltenbreiten schön anpassen, um zu passen.

### Einfachere Berechnungen mit der calc() Funktion

Sie könnten die {{cssxref("calc", "calc()")}}-Funktion verwenden, um die Mathematik direkt in Ihrem CSS zu erledigen — dies ermöglicht es Ihnen, einfache mathematische Gleichungen in Ihre CSS-Werte einzufügen, um zu berechnen, was ein Wert sein sollte. Es ist besonders nützlich, wenn es komplexe Mathematik zu tun gibt, und Sie können sogar eine Berechnung durchführen, die verschiedene Einheiten verwendet, zum Beispiel "Ich möchte, dass die Höhe dieses Elements immer 100% der Höhe seines Elternteils minus 50px beträgt". Siehe [dieses Beispiel aus einem MediaStream Recording API Tutorial](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API#keeping_the_interface_constrained_to_the_viewport_regardless_of_device_height_with_calc).

Jedenfalls, zurück zu unseren Rastern! Jede Spalte, die sich über mehr als eine Spalte unseres Rasters erstreckt, hat eine Gesamtbreite von 6.25%, multipliziert mit der Anzahl der erstreckten Spalten plus 2.08333333%, multipliziert mit der Anzahl der Rinnen (was immer die Anzahl der Spalten minus 1 sein wird). Die `calc()`-Funktion erlaubt es uns, diese Berechnung direkt im Breitenwert zu machen, so dass wir zum Beispiel für jedes Element, das 4 Spalten spannt, dies tun können:

```css
.col.span4 {
  width: calc((6.25% * 4) + (2.08333333% * 3));
}
```

Versuchen Sie, Ihren unteren Regelblock mit dem folgenden zu ersetzen und laden Sie ihn dann im Browser neu, um zu sehen, ob Sie das gleiche Ergebnis erhalten:

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
  background: rgb(255, 150, 150);
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

Das gibt uns das folgende Endergebnis:

{{embedlivesample("fluid-grid-calc", "100%", "100")}}

### Semantische versus "unsemantische" Rastersysteme

Klassen zu Ihrem Markup hinzuzufügen, um das Layout zu definieren, bedeutet, dass Ihr Inhalt und Ihr Markup an Ihre visuelle Darstellung gebunden werden. Sie werden diese Verwendung von CSS-Klassen manchmal als "unsemantisch" bezeichnet hören — sie beschreibt, wie der Inhalt aussieht — anstelle einer semantischen Verwendung von Klassen, die den Inhalt beschreibt. Dies ist der Fall bei unseren `span2`, `span3`, etc., Klassen.

Dies sind nicht die einzigen Ansätze. Sie könnten stattdessen entscheiden, Ihr Raster festzulegen und dann die Größeninformationen in die Regeln für bestehende semantische Klassen einfügen. Wenn Sie zum Beispiel ein {{htmlelement("div")}} mit einer Klasse von `content` haben, das Sie über 8 Spalten erstrecken möchten, könnten Sie die Breite aus der Klasse `span8` kopieren und damit eine Regel wie folgt erstellen:

```css
.content {
  width: calc((6.25% * 8) + (2.08333333% * 7));
}
```

> [!NOTE]
> Wenn Sie einen Präprozessor wie [Sass](https://sass-lang.com/) verwenden würden, könnten Sie ein einfaches Mixin erstellen, um diesen Wert für Sie einzufügen.

### Offsets in unserem Raster ermöglichen

Das von uns erstellte Raster funktioniert gut, solange wir wollen, dass alle Container bündig mit der linken Seite des Rasters beginnen. Wenn wir einen leeren Spaltenplatz vor dem ersten Container — oder zwischen Containern — lassen wollten, müssten wir eine Offset-Klasse erstellen, um unserem Element eine linke Margin zu geben, um es visuell über das Raster zu schieben. Mehr Mathematik!

Lassen Sie uns das ausprobieren.

Beginnen Sie mit Ihrem vorhandenen vorherigen Code oder verwenden Sie den Code aus dem vorherigen Live-Beispiel (drücken Sie die "Play"-Schaltfläche, um den vollständigen Code im MDN Playground zu sehen).

Lassen Sie uns eine Klasse in unserem CSS erstellen, die ein Containerelement um eine Spaltenbreite versetzt. Fügen Sie das folgende Ihrem CSS am Ende hinzu:

```css
.offset-by-one {
  margin-left: calc(6.25% + (2.08333333% * 2));
}
```

Oder, wenn Sie es vorziehen, die Prozentsätze selbst zu berechnen, verwenden Sie diesen:

```css
.offset-by-one {
  margin-left: 10.41666666%;
}
```

Sie können diese Klasse nun zu jedem Container hinzufügen, bei dem Sie möchten, dass auf der linken Seite ein leerer Spaltenplatz bleibt. Zum Beispiel, wenn Sie dies in Ihrem HTML haben:

```html
<div class="col span6">14</div>
```

Versuchen Sie es durch Folgendes zu ersetzen

```html
<div class="col span5 offset-by-one">14</div>
```

> [!NOTE]
> Beachten Sie, dass Sie die Anzahl der erstreckten Spalten reduzieren müssen, um Platz für das Offset zu schaffen!

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
  background: rgb(255, 150, 150);
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

Versuchen Sie zu laden und zu aktualisieren, um den Unterschied zu sehen, oder überprüfen Sie unser fertiggestelltes Live-Beispiel:

{{embedlivesample("fluid-grid-offset", "100%","100")}}

> [!NOTE]
> Als zusätzliche Übung, können Sie eine `offset-by-two` Klasse implementieren?

### Einschränkungen von Float-basierten Rastern

Wenn Sie ein System wie dieses verwenden, müssen Sie darauf achten, dass Ihre Gesamtbreiten korrekt summiert werden und dass Sie keine Elemente in einer Reihe haben, die breiter als die Reihe sind. Aufgrund der Art und Weise, wie Floats funktionieren, fallen die Elemente am Ende auf die nächste Zeile, wenn die Anzahl der Rastern zu breit für das Grid wird und das Raster zerbricht.

Denken Sie auch daran, dass wenn der Inhalt der Elemente breiter wird als die Reihen, die sie einnehmen, er überläuft und es unordentlich aussieht.

Die größte Einschränkung dieses Systems ist, dass es im Grunde eindimensional ist. Wir beschäftigen uns mit Spalten und dem Erspannen von Elementen über Spalten, aber nicht über Reihen. Es ist sehr schwierig mit diesen älteren Layout-Methoden, die Höhe der Elemente zu kontrollieren, ohne explizit eine Höhe zu setzen, und dies ist auch ein sehr unflexibler Ansatz — es funktioniert nur, wenn Sie garantieren können, dass Ihr Inhalt eine bestimmte Höhe hat.

## Flexbox-Raster?

Wenn Sie unseren vorherigen Artikel über [flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) gelesen haben, denken Sie vielleicht, dass Flexbox die ideale Lösung für die Erstellung eines Rastersystems ist. Es gibt viele auf Flexbox basierende Rastersysteme und Flexbox kann viele der Probleme, die wir bereits bei der Erstellung unseres Rasters oben entdeckt haben, lösen.

Allerdings wurde Flexbox nie als Rastersystem entworfen und stellt eine neue Reihe von Herausforderungen dar, wenn es als eines verwendet wird. Als einfaches Beispiel hierfür können wir dasselbe Beispielmarkup verwenden, das wir oben verwendet haben, und das folgende CSS verwenden, um die `wrapper`, `row` und `col`-Klassen zu stylen:

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
  background: rgb(255, 150, 150);
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

Dies gibt uns im Grunde dasselbe Ergebnis wie zuvor:

{{embedlivesample("flexbox-grid", "100%","100")}}

Hier machen wir jede Reihe zu einem Flex-Container. Mit einem Flexbox-basierten Raster benötigen wir immer noch Reihen, um uns zu erlauben, Elemente zu haben, die sich zu weniger als `100%` summieren. Wir stellen diesen Container auf `display: flex` ein.

Auf `.col` setzen wir den ersten Wert der {{cssxref("flex")}} Eigenschaft ({{cssxref("flex-grow")}}) auf 1, damit unsere Elemente wachsen können, den zweiten Wert ({{cssxref("flex-shrink")}}) auf 1, damit die Elemente schrumpfen können, und den dritten Wert ({{cssxref("flex-basis")}}) auf `auto`. Da unser Element eine {{cssxref("width")}} gesetzt hat, wird `auto` diese Breite als `flex-basis` Wert verwenden.

Wir müssen immer noch unsere `span`-Klassen auf Spalten einfügen, die wir über eine bestimmte Anzahl von Reihen erstrecken möchten, indem sie eine Breite angeben, die den für diese Elemente verwendeten `flex-basis` Wert ersetzt.

Dieses System respektiert nicht das Raster, das verwendet wird, um die Elemente zu enthalten, weil es nichts darüber weiß. Flexbox ist **eindimensional** von Design her. Es beschäftigt sich nur mit einer Dimension, entweder einer Reihe oder einer Spalte. Wir können kein striktes Raster für Spalten und Reihen erstellen, was bedeutet, dass wir auch, wenn wir Flexbox für unser Raster verwenden, Prozentsätze wie für das Float-basierte Layout berechnen müssen.

In Ihrem Projekt könnten Sie sich immer noch entscheiden, ein Flexbox-"Raster" zu verwenden, aufgrund der zusätzlichen Ausrichtungs- und Raumverteilungsfähigkeiten, die Flexbox im Vergleich zu Floats bietet. Sie sollten sich jedoch bewusst sein, dass Sie immer noch ein Tool für etwas anderes verwenden, als wofür es entworfen wurde. Sie könnten also das Gefühl haben, dass es Sie durch zusätzliche Reifen springen lässt, um das gewünschte Endergebnis zu erzielen.

## Drittanbieter-Rastersysteme

Da wir nun die Mathematik hinter unseren Rasterberechnungen verstehen, sind wir in einer guten Position, um einige der Drittanbieter-Rastersysteme zu betrachten, die häufig verwendet werden. Wenn Sie im Netz nach "CSS-Raster-Framework" suchen, finden Sie eine riesige Liste von Optionen zur Auswahl. Beliebte Frameworks wie [Bootstrap](https://getbootstrap.com/) und [Foundation](https://get.foundation/) enthalten ein Rastersystem. Es gibt auch eigenständige Rastersysteme, die entweder mit CSS oder mit Präprozessoren entwickelt wurden.

Lassen Sie uns einen Blick auf eines dieser eigenständigen Systeme werfen, da es häufig verwendete Techniken zur Arbeit mit einem Raster-Framework demonstriert. Das Raster, das wir verwenden werden, ist Teil von Skeleton, einem einfachen CSS-Framework.

Um loszulegen, besuchen Sie die [Skeleton-Website](http://getskeleton.com/), und wählen Sie "Download", um die ZIP-Datei herunterzuladen. Entpacken Sie diese und kopieren Sie die enthaltenen Dateien skeleton.css und normalize.css in ein neues Verzeichnis.

Erstellen Sie eine neue HTML-Datei mit einem leeren `<body>` im gleichen Verzeichnis wie die Skeleton- und Normalize-CSS-Dateien.

Schließen Sie die Skeleton- und Normalize-CSS in die HTML-Seite ein, indem Sie das Folgende im Head hinzufügen:

```html
<link href="normalize.css" rel="stylesheet" />
<link href="skeleton.css" rel="stylesheet" />
```

Skeleton enthält mehr als nur ein Rastersystem — es enthält auch CSS für Typografie und andere Seitenelemente, die Sie als Ausgangspunkt verwenden können. Wir lassen diese jedoch jetzt auf den Standardwerten, denn das Raster ist das, was uns hier wirklich interessiert.

> [!NOTE]
> [Normalize](https://necolas.github.io/normalize.css/) ist eine wirklich nützliche kleine CSS-Bibliothek, die von Nicolas Gallagher geschrieben wurde, die einige nützliche grundlegende Layout-Fixes automatisch durchführt und das Standard-Element-Styling über Browser konsistenter macht.

Wir werden ähnliches HTML wie in unserem früheren Beispiel verwenden. Fügen Sie das Folgende in den Body Ihres HTMLs ein:

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

Um Skeleton zu verwenden, müssen wir dem Wrapper-{{htmlelement("div")}} eine Klasse von `container` geben — dies ist bereits in unserem HTML enthalten. Dadurch wird der Inhalt mit einer maximalen Breite von 960 Pixeln zentriert. Sie können nun sehen, wie die Boxen nie breiter als 960 Pixel werden.

Sie können in die skeleton.css-Datei schauen, um das CSS zu sehen, das verwendet wird, wenn wir diese Klasse anwenden. Das `<div>` wird zentriert, indem `auto` für die linken und rechten Margins verwendet wird und ein Padding von 20 Pixeln links und rechts angewendet wird. Skeleton setzt auch die {{cssxref("box-sizing")}}-Eigenschaft, wie wir es zuvor getan haben, auf `border-box`, sodass das Padding und die Rahmen dieses Elements in die Gesamtbreite aufgenommen werden.

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

Elemente können nur Teil des Rasters sein, wenn sie sich innerhalb einer Reihe befinden, also benötigen wir wie in unserem früheren Beispiel ein zusätzliches `<div>` oder ein anderes Element mit einer Klasse `row`, das zwischen den Inhaltselementen `<div>` und dem Container-Element `<div>` verschachtelt ist. Das haben wir auch bereits getan.

Lassen Sie uns nun die Container-Boxen anordnen. Skeleton basiert auf einem 12-Spalten-Raster. Die Top-Linie Boxen benötigen alle Klassen von `one column`, um sich über eine Spalte zu erstrecken.

Fügen Sie diese jetzt hinzu, wie im folgenden Schnipsel gezeigt:

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

Geben Sie den Containern in der zweiten Reihe als Nächstes Klassen, die erklären, wie viele Spalten sie erstrecken sollen, wie folgt:

```html
<div class="row">
  <div class="one column">13</div>
  <div class="six columns">14</div>
  <div class="three columns">15</div>
  <div class="two columns">16</div>
</div>
```

Versuchen Sie, Ihre HTML-Datei zu speichern und in Ihrem Browser zu laden, um den Effekt zu sehen.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, dieses Beispiel zum Laufen zu bringen, versuchen Sie, das Fenster, in dem Sie es anzeigen, zu verbreitern (das Raster wird nicht wie hier beschrieben angezeigt, wenn das Fenster zu schmal ist). Wenn das nicht funktioniert, versuchen Sie, es mit unserer [html-skeleton-finished.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/legacy/html-skeleton-finished.html)-Datei zu vergleichen (sehen Sie es auch [live ausgeführt](https://mdn.github.io/learning-area/css/css-layout/legacy/html-skeleton-finished.html)).

Wenn Sie in die skeleton.css-Datei schauen, können Sie sehen, wie dies funktioniert. Zum Beispiel hat Skeleton folgendes definiert, um Elemente mit "drei Spalten" Klassen zu stylen.

```css
.three.columns {
  width: 22%;
}
```

Alles, was Skeleton (oder jedes andere Raster-Framework) tut, ist, vordefinierte Klassen einzurichten, die Sie verwenden können, indem Sie sie Ihrem Markup hinzufügen. Es ist genau so, als ob Sie die Arbeit des Berechnens dieser Prozentsätze selbst erledigen würden.

Wie Sie sehen können, müssen wir sehr wenig CSS schreiben, wenn wir Skeleton verwenden. Es kümmert sich für uns um das floaten der Elemente, wenn wir Klassen zu unserem Markup hinzufügen. Es ist diese Fähigkeit, die Verantwortung für das Layout an etwas anderes zu übergeben, die die Verwendung eines Frameworks für ein Rastersystem zu einer überzeugenden Wahl machte! Heutzutage jedoch, mit CSS-Grid-Layout, wenden sich viele Entwickler von diesen Frameworks ab, um das in CSS native Raster zu benutzen.

## Zusammenfassung

Sie verstehen nun, wie verschiedene Rastersysteme erstellt werden, was nützlich beim Arbeiten mit älteren Websites sein wird und beim Verständnis des Unterschieds zwischen dem nativen Raster des CSS-Grid-Layouts und diesen älteren Systemen.
