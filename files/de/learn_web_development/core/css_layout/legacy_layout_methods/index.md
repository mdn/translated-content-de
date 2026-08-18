---
title: Alte Layoutmethoden
slug: Learn_web_development/Core/CSS_layout/Legacy_Layout_Methods
l10n:
  sourceCommit: 1b7c3c1e03f14c3878e4d8518b0f1a89bedfdc9c
---

Rastersysteme sind eine sehr verbreitete Funktion, die in CSS-Layouts verwendet wird. Vor der Einführung von CSS Grid Layout wurden sie oft mithilfe von Floats oder anderen Layout-Funktionen implementiert. Man stellt sich sein Layout als eine feste Anzahl von Spalten vor (z.B. 4, 6 oder 12) und fügt dann die Inhaltsspalten in diese imaginären Spalten ein. In diesem Artikel werden wir untersuchen, wie diese älteren Methoden funktionieren, damit Sie verstehen, wie sie verwendet wurden, falls Sie an einem älteren Projekt arbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (Studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (Studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die grundlegenden Konzepte hinter den Rastersystemen zu verstehen, die vor der Verfügbarkeit von CSS Grid Layout in Browsern verwendet wurden.
      </td>
    </tr>
  </tbody>
</table>

## Layout- und Rastersysteme vor dem CSS Grid Layout

Es mag für jemanden mit Designhintergrund überraschend sein, dass CSS bis vor kurzem kein eingebautes Rastersystem hatte und dass wir stattdessen eine Vielzahl von suboptimalen Methoden verwendeten, um rasterähnliche Designs zu erstellen. Wir bezeichnen diese mittlerweile als "alte" Methoden.

Für neue Projekte wird in den meisten Fällen CSS Grid Layout in Kombination mit einer oder mehreren anderen modernen Layoutmethoden als Grundlage für jedes Layout verwendet. Sie werden jedoch gelegentlich auf "Rastersysteme" stoßen, die mit diesen alten Methoden erstellt wurden. Es lohnt sich zu verstehen, wie sie funktionieren und warum sie sich von CSS Grid Layout unterscheiden.

Diese Lektion erläutert, wie auf Floats und Flexbox basierende Rastersysteme und Rasterframeworks funktionieren. Wenn Sie das Grid Layout studiert haben, werden Sie wahrscheinlich überrascht sein, wie kompliziert das alles scheint! Dieses Wissen wird Ihnen nützlich sein, wenn Sie Fallback-Code für Browser erstellen müssen, die neuere Methoden nicht unterstützen, und es ermöglicht Ihnen, an bestehenden Projekten zu arbeiten, die diese Art von Systemen verwenden.

Es ist wichtig zu beachten, dass keiner dieser Systeme tatsächlich ein Raster auf die gleiche Weise erstellt, wie es CSS Grid Layout tut. Sie arbeiten, indem sie Elementen eine Größe zuweisen und sie so verschieben, dass es _wie_ ein Raster aussieht.

## Ein zweispaltiges Layout

Beginnen wir mit dem einfachsten möglichen Beispiel — einem zweispaltigen Layout. Sie können mitmachen, indem Sie eine neue `index.html`-Datei auf Ihrem Computer erstellen, sie mit einer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) füllen und den folgenden Code an den entsprechenden Stellen einfügen. Am Ende des Abschnitts sehen Sie ein Live-Beispiel, wie der endgültige Code aussehen sollte.

Zuerst benötigen wir etwas Inhalt für unsere Spalten. Ersetzen Sie alles, was sich derzeit im Body befindet, durch Folgendes:

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

Jede der Spalten benötigt ein äußeres Element, um ihren Inhalt zu enthalten und uns zu ermöglichen, alles auf einmal zu manipulieren. In diesem Beispiel haben wir uns für {{htmlelement("div")}}s entschieden, aber Sie könnten auch etwas Semantischeres wie {{htmlelement("article")}}s, {{htmlelement("section")}}s und {{htmlelement("aside")}}, oder etwas anderes wählen.

Nun zum CSS. Zunächst einmal wenden Sie folgendes auf Ihr HTML an, um einige grundlegende Einstellungen vorzunehmen:

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}
```

Der Body hat eine Breite von 90% des Viewports, bis er 900px breit wird, ab dann bleibt er auf dieser Breite fixiert und zentriert sich im Viewport. Standardmäßig erstrecken sich seine Kinder (die {{htmlelement("Heading_Elements", "h1")}} und die zwei {{htmlelement("div")}}s) über 100% der Breite des Bodys. Wenn wir möchten, dass die beiden {{htmlelement("div")}}s nebeneinander floaten, müssen wir ihre Breiten so einstellen, dass sie insgesamt 100% der Breite ihres Elternelements oder weniger ausmachen, um nebeneinander passen zu können. Fügen Sie dies am Ende Ihres CSS hinzu:

```css
div:nth-of-type(1) {
  width: 48%;
}

div:nth-of-type(2) {
  width: 48%;
}
```

Hier haben wir beide auf 48% der Breite ihres Elternteils eingestellt — das ergibt insgesamt 96% und lässt uns 4% frei, um als Abstand zwischen den beiden Spalten zu fungieren, was dem Inhalt Raum zum Atmen gibt. Jetzt müssen wir nur noch die Spalten floaten, und zwar so:

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

Wenn Sie alles zusammenfügen, sollte es ein Ergebnis wie dieses geben:

{{ EmbedLiveSample('A_two_column_layout', '100%', 520) }}

Sie werden hier feststellen, dass wir für alle Breiten Prozentsätze verwenden — dies ist eine ziemlich gute Strategie, da es ein **flüssiges Layout** erzeugt, das sich an verschiedene Bildschirmgrößen anpasst und die gleichen Proportionen für die Spaltenbreiten bei kleineren Bildschirmgrößen beibehält. Versuchen Sie, die Breite Ihres Browserfensters anzupassen, um es selbst zu sehen. Dies ist ein wertvolles Werkzeug für [responsives Webdesign](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

## Einfache alte Rasterframeworks erstellen

Die Mehrheit der alten Frameworks nutzt das Verhalten der {{cssxref("float")}}-Eigenschaft, um eine Spalte neben der anderen zu floaten, um etwas zu schaffen, das wie ein Raster aussieht. Den Prozess des Erstellens eines Rasters mit Floats durchzugehen, zeigt Ihnen, wie dies funktioniert, und führt einige fortgeschrittenere Konzepte ein, um auf den Dingen aufzubauen, die Sie in der Lektion zu [Floats und Clearings](/de/docs/Learn_web_development/Core/CSS_layout/Floats) gelernt haben.

Die einfachste Art von Rasterframework zu erstellen ist ein festes Breite-Raster — wir müssen nur herausfinden, wie viel Gesamtbreite wir für unser Design haben wollen, wie viele Spalten wir möchten und wie breit die Abstände und Spalten sein sollen. Wenn wir stattdessen unser Design auf einem Raster mit Spalten, die je nach Browserbreite wachsen und schrumpfen, layouten möchten, müssten wir Prozentbreiten für die Spalten und die Abstände dazwischen berechnen.

In den nächsten Abschnitten werden wir uns ansehen, wie man beides erstellt. Wir werden ein 12-Spalten-Raster erstellen — eine sehr häufige Wahl, die als sehr anpassungsfähig an verschiedene Situationen angesehen wird, da 12 sich schön durch 6, 4, 3 und 2 teilen lässt.

### Ein einfaches Raster mit fester Breite

Beginnen wir mit einem Rastersystem, das Spalten mit fester Breite verwendet.

Erstellen Sie eine neue HTML-Datei auf Ihrem lokalen System und fügen Sie den folgenden Markup in seinen `<body>` ein:

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

Das Ziel ist es, dies in ein Demonstrationsraster von zwei Reihen auf einem zwölf Spalten Raster zu verwandeln — die obere Reihe zeigt die Größe der einzelnen Spalten, die zweite Reihe einige unterschiedlich große Bereiche auf dem Raster.

![CSS Grid mit 16 Rasterelementen, verteilt auf zwölf Spalten und zwei Zeilen. Die obere Zeile hat 12 gleichbreite Rasterelemente in 12 Spalten. Die zweite Zeile hat unterschiedlich große Rasterelemente. Element 13 erstreckt sich über 1 Spalte, Element 14 über sechs Spalten, 15 über drei und 16 über zwei.](simple-grid-finished.png)

Nun, wenden Sie ein Stylesheet auf Ihr HTML an, entweder mit einem {{htmlelement("style")}}-Element oder einer externen CSS-Datei, die in einem {{htmlelement("link")}}-Element referenziert wird.

Fügen Sie den folgenden Code dem Stylesheet hinzu, welches dem Wrapper-Container eine Breite von 980 Pixeln verleiht, mit einem rechten Seitendrand von 20 Pixeln. Dadurch bleiben uns 960 Pixel für unsere gesamten Spalten-/Abstandbreiten — in diesem Fall wird der Seitendrand von der gesamten Inhaltsbreite abgezogen, weil wir {{cssxref("box-sizing")}} auf `border-box` für alle Elemente auf der Seite gesetzt haben (siehe [Das alternative CSS-Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#the_alternative_css_box_model) für weitere Erklärungen).

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

Verwenden Sie jetzt den Reihen-Container, der um jede Reihe des Rasters gewickelt ist, um eine Reihe von der anderen zu trennen. Fügen Sie die folgende Regel unterhalb Ihrer vorherigen hinzu:

```css live-sample___basic-grid
.row {
  clear: both;
}
```

Durch das Anwenden dieser Clearing-Methode müssen wir jede Reihe nicht vollständig mit Elementen füllen, die die vollen zwölf Spalten einnehmen. Die Reihen bleiben getrennt und beeinflussen sich nicht gegenseitig.

Die Abstände zwischen den Spalten sind 20 Pixel breit. Wir erstellen diese Abstände als Rand auf der linken Seite jeder Spalte — einschließlich der ersten Spalte, um die 20 Pixel Seitendrand auf der rechten Seite des Containers auszugleichen. So haben wir insgesamt 12 Abstände — 12 x 20 = 240.

Wir müssen das von unserer Gesamtbreite von 960 Pixeln abziehen, was uns 720 Pixel für unsere Spalten gibt. Wenn wir das nun durch 12 teilen, wissen wir, dass jede Spalte 60 Pixel breit sein sollte.

Unser nächster Schritt ist, eine Regel für die Klasse `.col` zu erstellen, sie nach links zu floaten, ihr einen {{cssxref("margin-left")}} von 20 Pixeln zu geben, um den Abstand zu bilden, und eine {{cssxref("width")}} von 60 Pixeln. Fügen Sie die folgende Regel am Ende Ihres CSS hinzu:

```css live-sample___basic-grid
.col {
  float: left;
  margin-left: 20px;
  width: 60px;
  background: rgb(255 150 150);
}
```

Die obere Zeile der Einzelspalten legt sich jetzt ordentlich als Raster aus.

> [!NOTE]
> Wir haben auch jeder Spalte eine hellrote Farbe gegeben, damit Sie genau sehen können, wie viel Platz jede einnimmt.

Layout-Container, die über mehr als eine Spalte verteilt werden sollen, müssen spezielle Klassen erhalten, um ihre {{cssxref("width")}}-Werte auf die erforderliche Anzahl von Spalten (plus die Abstände dazwischen) anzupassen. Wir müssen eine zusätzliche Klasse erstellen, die es Containern ermöglicht, von 2 bis 12 Spalten zu überspannen. Jede Breite ist das Ergebnis des Addierens der Spaltenbreite dieser Anzahl von Spalten plus der Abstandbreiten, die immer eine weniger sein werden als die Anzahl der Spalten.

Fügen Sie das folgende am Ende Ihres CSS hinzu:

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

Mit diesen erstellten Klassen können wir nun unterschiedlich breite Spalten auf dem Raster auslegen. Versuchen Sie, die Seite in Ihrem Browser zu speichern und zu laden, um die Effekte zu sehen. Es sollte wie das folgende Live-Beispiel aussehen:

{{embedlivesample("basic-grid", "100%", 100)}}

Versuchen Sie, die Klassen Ihrer Elemente zu ändern oder sogar einige Container hinzuzufügen und zu entfernen, um zu sehen, wie Sie das Layout variieren können. Zum Beispiel könnten Sie die zweite Reihe so aussehen lassen:

```html
<div class="row">
  <div class="col span8">13</div>
  <div class="col span4">14</div>
</div>
```

Jetzt, da Sie ein Rastersystem haben, können Sie die Reihen und die Anzahl der Spalten in jeder Reihe definieren und dann jeden Container mit Ihrem benötigten Inhalt füllen. Großartig!

### Ein flüssiges Raster erstellen

Unser Raster funktioniert gut, hat aber eine feste Breite; Sie werden bemerkt haben, dass das Raster im eingebetteten Beispiel oben die Seite überläuft. Wir möchten wirklich ein flexibles (flüssiges) Raster, das mit dem verfügbaren Platz im Browser-{{Glossary("viewport", "Viewport")}} wächst und schrumpft. Um dies zu erreichen, können wir die Referenz-Pixelbreiten in Prozentwerte umwandeln.

Die Gleichung, die eine feste Breite in eine flexible, prozentbasierte umwandelt, lautet wie folgt.

```plain
target / context = result
```

Für unsere Spaltenbreite ist unsere **Ziellänge** 60 Pixel und unser **Kontext** ist der 960 Pixel breite Wrapper. Wir können das folgende verwenden, um einen Prozentsatz zu berechnen.

```plain
60 / 960 = 0.0625
```

Wir verschieben dann das Dezimalkomma um 2 Stellen und erhalten einen Prozentsatz von 6,25%. Also können wir in unserem CSS die 60 Pixel breite Spaltenbreite durch 6,25% ersetzen.

Wir müssen dasselbe mit unserer Abstandbreite tun:

```plain
20 / 960 = 0.02083333333
```

Wir müssen also die 20 Pixel breite {{cssxref("margin-left")}} auf unserer `.col`-Regel und die 20 Pixel breite {{cssxref("padding-right")}} auf `.wrapper` durch 2,08333333% ersetzen.

#### Aktualisierung unseres Rasters

Um in diesem Abschnitt loszulegen, erstellen Sie eine neue Kopie Ihrer vorherigen Beispielseite oder holen Sie sich eine Kopie des Codes aus dem vorherigen Live-Beispiel (klicken Sie auf die "Play"-Taste, um den vollständigen Code im MDN-Spielplatz zu sehen).

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

Wir haben nicht nur eine prozentuale {{cssxref("width")}} gegeben, wir haben auch eine {{cssxref("max-width")}}-Eigenschaft hinzugefügt, um zu verhindern, dass das Layout zu breit wird.

Aktualisieren Sie als nächstes die vierte CSS-Regel (mit dem `.col`-Selektor) wie folgt:

```css
.col {
  float: left;
  margin-left: 2.08333333%;
  width: 6.25%;
  background: rgb(255 150 150);
}
```

Nun kommt der etwas mühseligere Teil — wir müssen all unsere `.col.span`-Regeln aktualisieren, um Prozentsätze statt Pixelbreiten zu verwenden. Dies dauert ein wenig mit einem Taschenrechner; um Ihnen etwas Mühe zu ersparen, haben wir es für Sie unten gemacht.

Aktualisieren Sie den unteren Block der CSS-Regeln mit dem folgenden:

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

Speichern Sie nun Ihren Code und laden Sie ihn in einem Browser, oder überprüfen Sie das folgende Live-Beispiel:

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

Versuchen Sie die Breite des Viewports zu ändern — Sie sollten sehen, dass sich die Spaltenbreiten schön anpassen.

### Einfachere Berechnungen mit der calc()-Funktion

Sie könnten die {{cssxref("calc", "calc()")}}-Funktion verwenden, um die Berechnungen direkt in Ihrem CSS durchzuführen — dies ermöglicht es Ihnen, einfache mathematische Gleichungen in Ihre CSS-Werte einzufügen, um zu berechnen, welcher Wert genommen werden soll. Es ist besonders nützlich, wenn komplexe Berechnungen durchgeführt werden müssen, und Sie können sogar eine Berechnung durchführen, die verschiedene Einheiten verwendet, z.B. "Ich möchte, dass die Höhe dieses Elements immer 100% der Höhe seines übergeordneten Elements minus 50px ist". Siehe [dieses Beispiel aus einem Kurzlehrgang zur MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API#keeping_the_interface_constrained_to_the_viewport_regardless_of_device_height_with_calc).

Zurück zu unseren Rastern! Jede Spalte, die mehr als eine Spalte unseres Rasters überspannt, hat eine Gesamtbreite von 6,25%, multipliziert mit der Anzahl der überspannten Spalten plus 2,08333333% multipliziert mit der Anzahl der Abstände (die immer die Anzahl der Spalten minus 1 sein wird). Die `calc()`-Funktion ermöglicht es uns, diese Berechnung direkt innerhalb des Breitenwerts vorzunehmen, sodass wir für jedes Element, das 4 Spalten überspannt, dies tun können:

```css
.col.span4 {
  width: calc((6.25% * 4) + (2.08333333% * 3));
}
```

Versuchen Sie, Ihren unteren Block von Regeln durch das folgende zu ersetzen, und laden Sie ihn dann im Browser, um zu sehen, ob Sie das gleiche Ergebnis erhalten:

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

Dies gibt uns das folgende Endergebnis:

{{embedlivesample("fluid-grid-calc", "100%", "100")}}

### Semantische versus "unsemantische" Rastersysteme

Klassens werden in Ihrem Markup hinzugefügt, um das Layout zu definieren, bedeutet, dass Ihr Inhalt und Markup an Ihre visuelle Präsentation gebunden werden. Sie werden diese Verwendung von CSS-Klassen manchmal als "unsemantisch" beschrieben sehen — sie beschreibt, wie der Inhalt aussieht — im Gegensatz zu einer semantischen Verwendung von Klassen, die den Inhalt beschreibt. Dies ist der Fall bei unseren `span2`, `span3` usw. Klassen.

Das sind nicht die einzigen Ansätze. Sie könnten sich stattdessen für Ihr Raster entscheiden und dann die Größeninformationen den Regeln für bestehende semantische Klassen hinzufügen. Zum Beispiel, wenn Sie ein {{htmlelement("div")}} mit einer `content`-Klasse darauf haben, die über 8 Spalten gehen soll, könnten Sie die Breite aus der `span8`-Klasse kopieren, sodass Sie eine Regel wie diese erhalten:

```css
.content {
  width: calc((6.25% * 8) + (2.08333333% * 7));
}
```

> [!NOTE]
> Wenn Sie einen Präprozessor wie [Sass](https://sass-lang.com/) verwenden, könnten Sie ein einfaches Mixin erstellen, um diesen Wert für Sie einzufügen.

### Hinzufügen von Off-Set-Containern in unserem Raster

Das Raster, das wir erstellt haben, funktioniert gut, solange wir alle Container mit dem linken Rand des Rasters beginnen wollen. Wenn wir wollten, dass ein leerer Spaltenraum vor dem ersten Container oder zwischen Container bleibt, müssten wir eine Offset-Klasse erstellen, um ein linkes Margen zu unserem Site hinzuzufügen, um es visuell über das Raster zu schieben. Mehr Mathematik!

Lassen Sie uns das ausprobieren.

Beginnen Sie mit Ihrem vorhandenen vorherigen Code, oder verwenden Sie den Code aus dem vorherigen Live-Beispiel (drücken Sie die "Play"-Taste, um den vollständigen Code im MDN-Spielplatz zu sehen).

Lassen Sie uns eine Klasse in unserem CSS erstellen, die ein Container-Element um eine Spaltenbreite versetzen wird. Fügen Sie folgendes dem Ende Ihres CSS hinzu:

```css
.offset-by-one {
  margin-left: calc(6.25% + (2.08333333% * 2));
}
```

Oder wenn Sie es vorziehen, die Prozentsätze selbst zu berechnen, verwenden Sie dieses:

```css
.offset-by-one {
  margin-left: 10.41666666%;
}
```

Sie können diese Klasse jetzt jedem Container hinzufügen, bei dem Sie einen einspaltigen Leerraum auf der linken Seite bleiben möchten. Zum Beispiel, wenn Sie das in Ihrem HTML haben:

```html
<div class="col span6">14</div>
```

Versuchen Sie es durch

```html
<div class="col span5 offset-by-one">14</div>
```

zu ersetzen.

> [!NOTE]
> Beachten Sie, dass Sie die Anzahl der überspannten Spalten verringern müssen, um Platz für den Offset zu schaffen!

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

Versuchen Sie zu laden und zu aktualisieren, um den Unterschied zu sehen, oder überprüfen Sie unser fertiges Live-Beispiel:

{{embedlivesample("fluid-grid-offset", "100%","100")}}

> [!NOTE]
> Als zusätzliche Übung, können Sie eine `offset-by-two`-Klasse implementieren?

### Einschränkungen von gefloateten Rastern

Bei Verwendung eines Systems wie diesem müssen Sie darauf achten, dass Ihre Gesamtbreiten korrekt addieren und dass Sie keine Elemente in einer Reihe haben, die mehr Spalten umfassen, als die Reihe enthalten kann. Aufgrund der Funktionsweise von Floats, wenn die Anzahl der Rasterspalten zu breit für das Raster wird, fallen die Elemente am Ende in die nächste Zeile, was das Raster bricht.

Außerdem denken Sie daran, dass, wenn der Inhalt der Elemente breiter als die Reihen wird, in denen sie sich befinden, er überläuft und ein Durcheinander verursacht.

Die größte Einschränkung dieses Systems ist, dass es im Wesentlichen eindimensional ist. Wir beschäftigen uns mit Spalten und überlappenden Elementen über Spalten, aber nicht über Reihen. Es ist sehr schwierig mit diesen älteren Layoutmethoden die Höhe von Elementen zu kontrollieren, ohne explizit eine Höhe festzulegen und dies ist ebenfalls ein sehr unflexibler Ansatz — es funktioniert nur, wenn Sie garantieren können, dass Ihr Inhalt eine bestimmte Höhe haben wird.

## Flexbox-Raster?

Wenn Sie unseren vorherigen Artikel über [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) gelesen haben, denken Sie vielleicht, dass Flexbox die ideale Lösung zur Erstellung eines Rastersystems ist. Es gibt viele auf Flexbox basierende Rastersysteme und Flexbox kann viele der Probleme lösen, die wir beim Erstellen unseres Rasters oben entdeckt haben.

Allerdings wurde Flexbox nie als Rastersystem entwickelt und bringt eine neue Reihe von Herausforderungen mit sich, wenn es als solches verwendet wird. Ein einfaches Beispiel dafür ist, dass wir das gleiche Beispielmarkup wie oben verwenden und das folgende CSS verwenden, um die `wrapper`, `row`, und `col` Klassen zu stylen:

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

Dies gibt uns im Wesentlichen das gleiche Ergebnis wie zuvor:

{{embedlivesample("flexbox-grid", "100%","100")}}

Hier machen wir jede Zeile zu einem Flex-Container. Mit einem auf Flexbox basierenden Raster benötigen wir immer noch Reihen, um uns zu erlauben Elemente zu haben, die sich auf weniger als `100%` addieren. Wir setzen diesen Container auf `display: flex`.

Auf `.col` setzen wir den ersten Wert ({{cssxref("flex-grow")}}) der {{cssxref("flex")}}-Eigenschaft auf 1, damit unsere Elemente wachsen können, den zweiten Wert ({{cssxref("flex-shrink")}}) auf 1, damit sich die Elemente verkleinern können, und den dritten Wert ({{cssxref("flex-basis")}}) auf `auto`. Da unser Element eine {{cssxref("width")}} gesetzt hat, wird `auto` diese Breite als Wert für `flex-basis` verwenden.

Wir müssen immer noch unsere `span`-Klassen bei Spalten einbeziehen, die eine spezifische Anzahl von Reihen überspannen wollen, unter Angabe einer Breite, die den Wert ersetzt, der für `flex-basis` für diese Elemente verwendet wird.

Dieses System respektiert das Raster, das verwendet wird, um die Elemente zu enthalten nicht, da es nichts darüber weiß. Flexbox ist **eindimensional** von Design. Sie befasst sich mit nur einer Dimension, die einer Zeile oder einer Spalte. Wir können kein strenges Raster für Spalten und Zeilen erstellen, was bedeutet, dass wir, wenn wir Flexbox für unser Raster verwenden, immer noch Prozentsätze wie für das gefloatete Layout berechnen müssen.

In Ihrem Projekt könnten Sie sich dennoch für ein Flexbox-"Raster" entscheiden, aufgrund der zusätzlichen Ausrichtungs- und Platzverteilungsmöglichkeiten, die Flexbox über Floats bietet. Sie sollten jedoch bedenken, dass Sie immer noch ein Werkzeug verwenden, das nicht für den Zweck entworfen wurde, für den Sie es verwenden. Dies kann dazu führen, dass es Ihnen zusätzliche Herausforderungen bereitet, um das gewünschte Endergebnis zu erzielen.

## Drittanbieter-Rastersysteme

Jetzt, da wir die Mathematik hinter unseren Rasterberechnungen verstehen, sind wir in einer guten Position, um uns einige der von Drittanbietern entwickelten Rastersysteme anzusehen, die häufig verwendet werden. Wenn Sie im Web nach "CSS Grid Framework" suchen, finden Sie eine riesige Liste von Optionen zur Auswahl. Beliebte Frameworks wie [Bootstrap](https://getbootstrap.com/) und [Foundation](https://get.foundation/) beinhalten ein Rastersystem. Es gibt auch eigenständige Rastersysteme, entweder mithilfe von CSS oder unter Verwendung von Präprozessoren entwickelt.

Schauen wir uns eines dieser eigenständigen Systeme an, da es gängige Techniken zur Arbeit mit einem Rasterframework demonstriert. Das Raster, das wir verwenden werden, ist Teil von Skeleton, einem einfachen CSS-Framework.

Um loszulegen, besuchen Sie die [Skeleton-Website](http://getskeleton.com/) und wählen Sie "Download", um die ZIP-Datei herunterzuladen. Entpacken Sie diese und kopieren Sie die skeleton.css und normalize.css Dateien in ein neues Verzeichnis.

Erstellen Sie eine neue HTML-Datei mit einem leeren `<body>` im selben Verzeichnis wie die Skeleton-und Normalize CSS-Dateien.

Binden Sie das Skeleton und Normalize CSS auf der HTML-Seite ein, indem Sie folgendes in den Kopf der Seite hinzufügen:

```html
<link href="normalize.css" rel="stylesheet" />
<link href="skeleton.css" rel="stylesheet" />
```

Skeleton umfasst mehr als ein Rastersystem — es enthält auch CSS für Typografie und andere Seitenelemente, die als Anfangspunkt verwendet werden können. Wir belassen dies jetzt bei den Standardeinstellungen — es ist das Raster, das uns hier wirklich interessiert.

> [!NOTE]
> [Normalize](https://necolas.github.io/normalize.css/) ist eine wirklich nützliche kleine CSS-Bibliothek, geschrieben von Nicolas Gallagher, die automatisch einige nützliche grundlegende Layout-Korrekturen vornimmt und das Standard-Element-Styling in Browsern konsistenter macht.

Wir werden einen ähnlichen HTML-Code wie in unserem früheren Beispiel verwenden. Fügen Sie folgendes in den Body Ihres HTML-Codes ein:

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

Um Skeleton zu verwenden, müssen wir dem Wrapper-{{htmlelement("div")}} die Klasse `container` geben — diese ist bereits in unserem HTML enthalten. Dies zentriert den Inhalt mit einer maximalen Breite von 960 Pixeln. Sie können sehen, wie die Boxen jetzt nie breiter als 960 Pixel werden.

Sie können in die skeleton.css-Datei schauen, um das CSS zu sehen, das verwendet wird, wenn wir diese Klasse anwenden. Das `<div>` wird zentriert, indem links und rechts automatische Ränder verwendet werden, und ein Polster von 20 Pixeln wird links und rechts angewendet. Skeleton setzt auch die {{cssxref("box-sizing")}}-Eigenschaft auf `border-box`, wie wir es zuvor getan haben, sodass das Padding und die Ränder dieses Elements in die Gesamtbreite eingeschlossen werden.

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

Elemente können nur Teil des Rasters sein, wenn sie sich innerhalb einer Zeile befinden. Daher benötigen wir wie in unserem früheren Beispiel ein zusätzliches `<div>` oder ein anderes Element mit einer `row`-Klasse, die zwischen den Inhalts-{{htmlelement("div")}}-Elementen und dem Container-{{htmlelement("div")}} geschachtelt ist. Auch dies haben wir bereits getan.

Lassen Sie uns nun die Container-Boxen anordnen. Skeleton basiert auf einem 12-Spalten-Raster. Die Boxen der oberen Reihe benötigen alle Klassen von `one column`, um eine Spalte einzunehmen.

Fügen Sie diese nun hinzu, wie im folgenden Schnipsel gezeigt:

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

Geben Sie als nächstes den Containern in der zweiten Reihe Klassen, die erklären, wie viele Spalten sie überspannen sollen, so wie hier:

```html
<div class="row">
  <div class="one column">13</div>
  <div class="six columns">14</div>
  <div class="three columns">15</div>
  <div class="two columns">16</div>
</div>
```

Versuchen Sie, die HTML-Datei zu speichern und in Ihrem Browser zu laden, um den Effekt zu sehen.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, dies zum Laufen zu bringen, versuchen Sie, das Fenster, das Sie zum Anzeigen verwenden, zu verbreitern (das Raster wird nicht wie hier beschrieben angezeigt, wenn das Fenster zu schmal ist). Wenn das nicht hilft, vergleichen Sie es mit unserer Datei [html-skeleton-finished.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/legacy/html-skeleton-finished.html) (sehen Sie es auch [live vorgeführt](https://mdn.github.io/learning-area/css/css-layout/legacy/html-skeleton-finished.html)).

Wenn Sie in der skeleton.css-Datei nachsehen, können Sie sehen, wie dies funktioniert. Beispielsweise hat Skeleton folgendes definiert, um Elemente mit "drei Spalten" hinzuzufügen.

```css
.three.columns {
  width: 22%;
}
```

Alles, was Skeleton (oder jedes andere Rasterframework) tut, ist, vordefinierte Klassen einzurichten, die Sie verwenden können, indem Sie sie zu Ihrem Markup hinzufügen. Es ist genau das gleiche, als ob Sie die Arbeit der Berechnung dieser Prozentsätze selbst machen würden.

Wie Sie sehen können, müssen wir sehr wenig CSS schreiben, wenn wir Skeleton verwenden. Es kümmert sich um all das Floats, wenn wir Klassen zu unserem Markup hinzufügen. Es ist diese Fähigkeit, die Verantwortung für das Layout an etwas anderes zu übergeben, die die Verwendung eines Frameworks für ein Rastersystem zu einer überzeugenden Wahl machte! Allerdings in diesen Tagen, mit CSS Grid Layout, wechseln viele Entwickler von diesen Frameworks, um das eingebaute native Raster zu verwenden, das CSS bietet.

## Zusammenfassung

Sie verstehen nun, wie verschiedene Rastersysteme erstellt werden, was nützlich sein wird, um mit älteren Websites zu arbeiten und um den Unterschied zwischen dem nativen Raster von CSS Grid Layout und diesen älteren Systemen zu verstehen.
