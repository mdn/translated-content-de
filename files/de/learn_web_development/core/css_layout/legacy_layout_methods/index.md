---
title: Veraltete Layout-Methoden
slug: Learn_web_development/Core/CSS_layout/Legacy_Layout_Methods
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Gridsysteme sind ein sehr häufiges Merkmal in CSS-Layouts und wurden vor dem CSS-Grid-Layout oft mit Floats oder anderen Layout-Funktionen implementiert. Man stellt sich sein Layout als eine festgelegte Anzahl von Spalten vor (z.B. 4, 6 oder 12) und passt dann die Inhalts-Spalten in diese imaginären Spalten ein. In diesem Artikel werden wir untersuchen, wie diese älteren Methoden funktionieren, damit Sie verstehen, wie sie verwendet wurden, wenn Sie an einem älteren Projekt arbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (Studium der
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (Studium der
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis der grundlegenden Konzepte hinter den Gridsystemen, die verwendet wurden, bevor das CSS-Grid-Layout in Browsern verfügbar war.
      </td>
    </tr>
  </tbody>
</table>

## Layout- und Gridsysteme vor dem CSS-Grid-Layout

Es mag überraschend erscheinen, dass CSS bis vor Kurzem kein eingebautes Gridsystem hatte und stattdessen eine Vielzahl von suboptimalen Methoden verwendet wurde, um gridartige Designs zu erstellen. Diese bezeichnen wir jetzt als "veraltete" Methoden.

Für neue Projekte wird in den meisten Fällen das CSS-Grid-Layout in Kombination mit einer oder mehreren anderen modernen Layout-Methoden verwendet werden, um die Basis für jedes Layout zu bilden. Sie werden jedoch von Zeit zu Zeit auf "Gridsysteme" stoßen, die diese veralteten Methoden verwenden. Es ist wichtig zu verstehen, wie sie funktionieren und warum sie sich vom CSS-Grid-Layout unterscheiden.

Diese Lektion erklärt, wie Gridsysteme und Grid-Frameworks basierend auf Floats und Flexbox funktionieren. Nachdem Sie das Grid-Layout studiert haben, werden Sie wahrscheinlich überrascht sein, wie kompliziert das alles erscheint! Dieses Wissen wird Ihnen hilfreich sein, wenn Sie Fallback-Code für Browser erstellen müssen, die neuere Methoden nicht unterstützen, und ermöglicht Ihnen auch, an bestehenden Projekten zu arbeiten, die diese Art von Systemen verwenden.

Es ist wichtig zu bedenken, dass keines dieser Systeme tatsächlich ein Grid auf die Weise erstellt, wie es das CSS-Grid-Layout tut. Sie funktionieren, indem sie Elementen eine Größe geben und sie so verschieben, dass sie wie ein Grid aussehen.

## Ein Zwei-Spalten-Layout

Beginnen wir mit dem einfachsten Beispiel – einem Zwei-Spalten-Layout. Sie können mitmachen, indem Sie eine neue `index.html`-Datei auf Ihrem Computer erstellen, sie mit einer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) füllen und den untenstehenden Code an den entsprechenden Stellen einfügen. Am Ende des Abschnitts können Sie ein Live-Beispiel sehen, wie der finale Code aussehen sollte.

Zuerst brauchen wir etwas Inhalt für unsere Spalten. Ersetzen Sie den aktuellen Inhalt des Body mit dem folgenden:

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

Jede der Spalten benötigt ein äußeres Element, um ihren Inhalt zu enthalten und es uns zu ermöglichen, alles auf einmal zu manipulieren. In diesem Beispiel haben wir uns für {{htmlelement("div")}}s entschieden, aber Sie könnten auch etwas Semantischeres wie {{htmlelement("article")}}s, {{htmlelement("section")}}s und {{htmlelement("aside")}} wählen oder was auch immer.

Nun zum CSS. Zuerst einmal wenden Sie Folgendes auf Ihr HTML an, um den Grundaufbau zu schaffen:

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}
```

Der Body wird 90% der Viewport-Breite einnehmen, bis er 900px breit wird, dann bleibt er fixiert auf dieser Breite und zentriert sich im Viewport. Standardmäßig werden seine Kinder (die {{htmlelement("Heading_Elements", "h1")}} und die beiden {{htmlelement("div")}}s) 100% der Breite des Bodys einnehmen. Wenn wir möchten, dass die beiden {{htmlelement("div")}}s nebeneinander schweben, müssen wir ihre Breiten auf insgesamt 100% der Breite ihres Elternelements oder kleiner setzen, damit sie nebeneinander passen. Fügen Sie dies am Ende Ihres CSS hinzu:

```css
div:nth-of-type(1) {
  width: 48%;
}

div:nth-of-type(2) {
  width: 48%;
}
```

Hier haben wir beide auf 48% der Breite ihres Elternelements gesetzt – das ergibt insgesamt 96%, wodurch uns 4% als Abstand zwischen den beiden Spalten bleiben, wodurch der Inhalt etwas Platz zum Atmen hat. Nun müssen wir nur noch die Spalten schweben lassen, und zwar so:

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

Zusammengefügt sollte dies zu folgendem Ergebnis führen:

{{ EmbedLiveSample('A_two_column_layout', '100%', 520) }}

Sie werden feststellen, dass wir hier Prozentsätze für alle Breiten verwenden – das ist eine ziemlich gute Strategie, da es ein **flüssiges Layout** erstellt, das sich an verschiedene Bildschirmgrößen anpasst und die gleichen Proportionen für die Spaltenbreiten bei kleineren Bildschirmgrößen beibehält. Versuchen Sie, die Breite Ihres Browserfensters zu ändern, um es selbst zu sehen. Dies ist ein wertvolles Werkzeug für responsives Webdesign.

> [!NOTE]
> Sie können dieses Beispiel unter [0_two-column-layout.html](https://mdn.github.io/learning-area/css/css-layout/floats/0_two-column-layout.html) testen (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/floats/0_two-column-layout.html)).

## Einfache veraltete Grid-Frameworks erstellen

Die meisten veralteten Frameworks verwenden das Verhalten der {{cssxref("float")}}-Eigenschaft, um eine Spalte neben die andere zu setzen, um etwas zu erstellen, das wie ein Grid aussieht. Der Prozess, ein Grid mit Floats zu erstellen, zeigt Ihnen, wie das funktioniert und führt auch einige fortgeschrittenere Konzepte ein, aufbauend auf den Lektionen über [Floats und Räumung](/de/docs/Learn_web_development/Core/CSS_layout/Floats).

Der einfachste Typ eines Grid-Frameworks ist eines mit fester Breite - wir müssen nur herausfinden, wie breit unser Design insgesamt sein soll, wie viele Spalten wir wollen, und wie breit die Abstände und Spalten sein sollten. Wenn wir stattdessen unser Design auf einem Raster mit Spalten layouten würden, die je nach Browserbreite wachsen und schrumpfen, müssten wir prozentuale Breiten für die Spalten und die Abstände dazwischen berechnen.

In den nächsten Abschnitten werden wir uns ansehen, wie man beides erstellt. Wir werden ein 12-Spalten-Grid erstellen - eine sehr gängige Wahl, die als sehr anpassungsfähig für verschiedene Situationen gilt, da 12 sich gut durch 6, 4, 3 und 2 teilen lässt.

### Ein einfaches Raster mit fester Breite

Lassen Sie uns zunächst ein Raster-System erstellen, das Spalten mit fester Breite verwendet.

Beginnen Sie, indem Sie eine lokale Kopie unserer Beispieldatei [simple-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid.html) erstellen, die folgendes Markup im Body enthält.

```html
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

Das Ziel ist es, dies in ein Demonstrationsraster von zwei Zeilen auf einem Zwölf-Spalten-Raster zu verwandeln – die obere Zeile zeigt die Größe der einzelnen Spalten, die zweite Zeile einige unterschiedlich große Bereiche auf dem Raster.

![CSS-Raster mit 16 Rasterelementen, die sich auf zwölf Spalten und zwei Zeilen verteilen. Die obere Zeile hat 12 gleich breite Rasterelemente in 12 Spalten. Die zweite Zeile hat unterschiedlich große Rasterelemente. Element 13 umfasst 1 Spalte, Element 14 sechs Spalten, 15 reicht über drei und 16 über zwei.](simple-grid-finished.png)

Fügen Sie im {{htmlelement("style")}}-Element den folgenden Code hinzu, der dem Wrapper-Container eine Breite von 980 Pixeln gibt, mit einem Padding auf der rechten Seite von 20 Pixeln. Dies gibt uns 960 Pixel für unsere gesamte Spalten- und Abstandsbreiten – in diesem Fall wird das Padding von der gesamten Inhaltsbreite subtrahiert, da wir {{cssxref("box-sizing")}} auf `border-box` für alle Elemente auf der Seite gesetzt haben (siehe [Das alternative CSS-Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#the_alternative_css_box_model) für eine genauere Erklärung).

```css
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

Verwenden Sie nun den Zeilen-Container, der um jede Zeile des Rasters gelegt ist, um eine Zeile von der anderen zu trennen. Fügen Sie die folgende Regel unter Ihrer vorherigen hinzu:

```css
.row {
  clear: both;
}
```

Durch das Anwenden dieser Clearing-Methode müssen wir jede Zeile nicht komplett mit Elementen füllen, die alle zwölf Spalten belegen. Die Zeilen bleiben getrennt und beeinflussen sich nicht gegenseitig.

Die Abstände zwischen den Spalten sind 20 Pixel breit. Wir erstellen diese Abstände als Rand auf der linken Seite jeder Spalte – einschließlich der ersten Spalte, um die 20 Pixel Padding auf der rechten Seite des Containers auszugleichen. So haben wir insgesamt 12 Abstände – 12 x 20 = 240.

Wir müssen dies von unserer Gesamtbreite von 960 Pixeln abziehen, was uns 720 Pixel für unsere Spalten gibt. Wenn wir dies jetzt durch 12 teilen, wissen wir, dass jede Spalte 60 Pixel breit sein sollte.

Unser nächster Schritt ist es, eine Regel für die Klasse `.col` zu erstellen, sie links schweben zu lassen, ihr einen {{cssxref("margin-left")}} von 20 Pixeln zu geben, um den Abstand zu bilden, und eine {{cssxref("width")}} von 60 Pixeln. Fügen Sie die folgende Regel am Ende Ihres CSS hinzu:

```css
.col {
  float: left;
  margin-left: 20px;
  width: 60px;
  background: rgb(255 150 150);
}
```

Die obere Zeile der Einzelsäulen wird sich jetzt als Raster ordentlich auslegen.

> [!NOTE]
> Wir haben auch jeder Spalte eine helle rote Farbe gegeben, sodass Sie genau sehen können, wie viel Platz jede einnimmt.

Layout-Container, die sich über mehr als eine Spalte erstrecken möchten, müssen spezielle Klassen erhalten, um ihre {{cssxref("width")}}-Werte auf die benötigte Anzahl von Spalten (plus Abstand dazwischen) anzupassen. Wir müssen eine zusätzliche Klasse erstellen, die es den Containern ermöglicht, von 2 bis 12 Spalten zu überspannen. Jede Breite ist das Ergebnis der Addition der Spaltenbreite der jeweiligen Spaltenzahl plus der Abstandbreiten, die immer um eins kleiner sind als die Anzahl der Spalten.

Fügen Sie das folgende am Ende Ihres CSS hinzu:

```css
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

Mit diesen Klassen, die erstellt wurden, können wir nun unterschiedlich breite Spalten auf dem Raster anordnen. Versuchen Sie, Ihre Datei zu speichern und sie im Browser zu laden, um die Effekte zu sehen.

> [!NOTE]
> Wenn Sie Probleme haben, das obige Beispiel zum Laufen zu bringen, versuchen Sie es mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid-finished.html) auf GitHub ([sehen Sie es live](https://mdn.github.io/learning-area/css/css-layout/grids/simple-grid-finished.html) auch).

Versuchen Sie, die Klassen auf Ihren Elementen zu ändern oder sogar einige Container hinzuzufügen und zu entfernen, um zu sehen, wie Sie das Layout variieren können. Zum Beispiel könnten Sie die zweite Zeile so aussehen lassen:

```html
<div class="row">
  <div class="col span8">13</div>
  <div class="col span4">14</div>
</div>
```

Jetzt, wo Sie ein Gridsystem haben, das funktioniert, können Sie die Zeilen und die Anzahl der Spalten in jeder Zeile definieren und dann jeden Container mit dem gewünschten Inhalt füllen. Großartig!

### Ein flüssiges Raster erstellen

Unser Raster funktioniert gut, hat aber eine feste Breite. Wir wollen wirklich ein flexibles (flüssiges) Raster, das mit dem verfügbaren Platz im Browser-Viewport wächst und schrumpft. Um dies zu erreichen, können wir die referenzierten Pixelbreiten in Prozentsätze umwandeln.

Die Gleichung, die eine feste Breite in eine flexible, prozentuale Breite umwandelt, lautet:

```plain
target / context = result
```

Für unsere Spaltenbreite ist unsere **Zielbreite** 60 Pixel und unser **Kontext** ist der 960 Pixel Wrapper. Wir können das folgende verwenden, um einen Prozentsatz zu berechnen.

```plain
60 / 960 = 0.0625
```

Wir verschieben dann den Dezimalpunkt um 2 Stellen, was uns einen Prozentsatz von 6.25% ergibt. In unserem CSS können wir somit die 60 Pixel Spaltenbreite mit 6.25% ersetzen.

Dasselbe müssen wir mit unserer Abstandbreite machen:

```plain
20 / 960 = 0.02083333333
```

Wir müssen also die 20 Pixel {{cssxref("margin-left")}} auf unserer `.col`-Regel und das 20 Pixel {{cssxref("padding-right")}} auf `.wrapper` mit 2.08333333% ersetzen.

#### Unser Raster aktualisieren

Um in diesem Abschnitt zu starten, machen Sie eine neue Kopie Ihrer vorherigen Beispielseite, oder machen Sie eine lokale Kopie unseres [simple-grid-finished.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid-finished.html) Codes, um als Ausgangspunkt zu verwenden.

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

Wir haben ihr nicht nur eine prozentuale {{cssxref("width")}} gegeben, wir haben auch eine {{cssxref("max-width")}} hinzugefügt, um zu verhindern, dass das Layout zu breit wird.

Als nächstes aktualisieren Sie die vierte CSS-Regel (mit dem `.col`-Selektor) wie folgt:

```css
.col {
  float: left;
  margin-left: 2.08333333%;
  width: 6.25%;
  background: rgb(255 150 150);
}
```

Nun kommt der etwas mühsamere Teil – wir müssen alle unsere `.col.span`-Regeln aktualisieren, um anstelle von Pixelbreiten Prozentangaben zu verwenden. Das erfordert ein wenig Zeit mit einem Taschenrechner; um Ihnen etwas Mühe zu ersparen, haben wir es für Sie unten gemacht.

Aktualisieren Sie den unteren Block von CSS-Regeln mit dem folgenden:

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

Nun speichern Sie Ihren Code, laden ihn in einem Browser und versuchen, die Viewport-Breite zu ändern – Sie sollten sehen, wie sich die Spaltenbreiten schön anpassen.

> [!NOTE]
> Wenn Sie Probleme haben, das obige Beispiel zum Laufen zu bringen, vergleichen Sie es mit unserer [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid.html) (sehen Sie es [live](https://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid.html) auch).

### Einfachere Berechnungen mit der calc()-Funktion

Sie könnten die {{cssxref("calc", "calc()")}}-Funktion verwenden, um die Mathematik direkt in Ihrem CSS durchzuführen – dies ermöglicht es Ihnen, einfache mathematische Gleichungen in Ihre CSS-Werte einzufügen, um zu berechnen, welchen Wert ein Wert haben soll. Dies ist besonders nützlich, wenn komplexe Mathematik zu erledigen ist, und Sie können sogar eine Berechnung durchführen, die unterschiedliche Einheiten verwendet, z.B. "Ich möchte, dass die Höhe dieses Elements immer 100% der Höhe des Elternteils minus 50px beträgt". Sehen Sie sich [dieses Beispiel aus einem MediaStream Recording API-Tutorial](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API#keeping_the_interface_constrained_to_the_viewport_regardless_of_device_height_with_calc) an.

Zurück zu unseren Grids! Jede Spalte, die mehr als eine Spalte unseres Rasters überspannt, hat eine Gesamtbreite von 6.25% multipliziert mit der Anzahl der abgedeckten Spalten plus 2.08333333% multipliziert mit der Anzahl der Abstände (was immer die Anzahl der Spalten minus 1 sein wird). Die `calc()`-Funktion ermöglicht es uns, diese Berechnung direkt im Wert von width durchzuführen, sodass wir für jedes Element, das 4 Spalten umfasst, dies tun können, zum Beispiel:

```css
.col.span4 {
  width: calc((6.25% * 4) + (2.08333333% * 3));
}
```

Versuchen Sie, Ihren unteren Block von Regeln mit dem folgenden zu ersetzen, dann laden Sie es im Browser, um zu sehen, ob Sie das gleiche Ergebnis erhalten:

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

> [!NOTE]
> Sie können unsere fertige Version in [fluid-grid-calc.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid-calc.html) sehen (sehen Sie es [live](https://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid-calc.html) auch).

### Semantische versus "unsemantische" Gridsysteme

Klassen zu ihrem Markup hinzuzufügen, um das Layout zu definieren, bedeutet, dass Ihr Inhalt und Ihr Markup an Ihre visuelle Präsentation gebunden werden. Sie werden diesen Gebrauch von CSS-Klassen manchmal als "unsemantisch" hören – es beschreibt, wie der Inhalt aussieht – im Gegensatz zu einem semantischen Gebrauch von Klassen, der den Inhalt beschreibt. Dies ist bei unseren `span2`, `span3`, etc., Klassen der Fall.

Dies ist nicht der einzige Ansatz. Sie könnten stattdessen Ihr Raster festlegen und dann die Größeninformationen zu den Regeln für vorhandene semantische Klassen hinzufügen. Zum Beispiel, wenn Sie ein {{htmlelement("div")}} mit einer Klasse von `content` hatten, das Sie über 8 Spalten erstrecken wollten, könnten Sie die Breite aus der `span8`-Klasse kopieren und Ihnen eine Regel geben wie:

```css
.content {
  width: calc((6.25% * 8) + (2.08333333% * 7));
}
```

> [!NOTE]
> Wenn Sie einen Präprozessor wie [Sass](https://sass-lang.com/) verwenden würden, könnten Sie einen einfachen Mixin erstellen, um diesen Wert für Sie einzufügen.

### Offset-Container in unserem Raster ermöglichen

Das Raster, das wir erstellt haben, funktioniert gut, solange wir alle Container bündig mit der linken Seite des Rasters anfangen lassen wollen. Wenn wir einen leeren Spaltenplatz vor dem ersten Container – oder zwischen Containern – lassen wollten, müssten wir eine Offset-Klasse erstellen, um eine linke Marge zu unserem Standort hinzuzufügen, um ihn visuell über das Raster zu schieben. Mehr Mathematik!

Probieren wir das aus.

Beginnen Sie mit Ihrem vorherigen Code, oder verwenden Sie unsere [fluid-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid.html) Datei als Ausgangspunkt.

Erstellen wir eine Klasse in unserem CSS, die ein Container-Element um eine Spaltenbreite versetzt. Fügen Sie dies am Ende Ihres CSS hinzu:

```css
.offset-by-one {
  margin-left: calc(6.25% + (2.08333333% * 2));
}
```

Oder wenn Sie die Prozentsätze lieber selbst berechnen, verwenden Sie diesen hier:

```css
.offset-by-one {
  margin-left: 10.41666666%;
}
```

Sie können diese Klasse nun zu jedem Container hinzufügen, bei dem Sie möchten, dass ein einspaltig leerer Bereich links davon bleibt. Wenn Sie zum Beispiel dies in Ihrem HTML haben:

```html
<div class="col span6">14</div>
```

Versuchen Sie, es zu ersetzen mit

```html
<div class="col span5 offset-by-one">14</div>
```

> [!NOTE]
> Beachten Sie, dass Sie die Anzahl der abgedeckten Spalten reduzieren müssen, um Platz für das Offset zu machen!

Versuchen Sie, die Seite zu laden und aktualisieren Sie, um den Unterschied zu sehen, oder sehen Sie sich unser [fluid-grid-offset.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid-offset.html) Beispiel an (sehen Sie es [live](https://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid-offset.html) auch). Das fertige Beispiel sollte so aussehen:

![Das Raster hat 2 Zeilen. Die erste Zeile hat 12 gleich breite Rasterelemente und die zweite Zeile hat 4 unterschiedlich breite Rasterelemente. Element 13 umspannt 1 Spalte, Element 14 umspannt fünf Spalten, 15 drei und 16 zwei. Auf Element 14 wurde die Klasse 'offset-by-one' angewendet, wodurch es in der dritten Spalte beginnt statt in der zweiten, wodurch ein einspaltig breiter Leerraum in der zweiten-Zeilen-zweiten-Spalte verbleibt.](offset-grid-finished.png)

> [!NOTE]
> Als zusätzliche Übung, können Sie eine `offset-by-two`-Klasse implementieren?

### Einschränkungen von Floated Grids

Wenn Sie ein System wie dieses verwenden, müssen Sie darauf achten, dass Ihre Gesamtbreiten korrekt addiert werden und dass Sie keine Elemente in einer Zeile haben, die mehr Spalten umfassen als die Zeile enthalten kann. Aufgrund der Funktionsweise von Floats, wenn die Anzahl der Rasterspalten zu breit für das Raster wird, werden die Elemente am Ende in die nächste Zeile fallen und das Raster brechen.

Bedenken Sie auch, dass, wenn der Inhalt der Elemente breiter als die Reihen ist, die sie belegen, er herausragt und unordentlich aussieht.

Die größte Einschränkung dieses Systems ist, dass es im Wesentlichen eindimensional ist. Wir beschäftigen uns mit Spalten und Spalten überspannenden Elementen, aber nicht mit Zeilen. Es ist sehr schwierig mit diesen älteren Layout-Methoden die Höhe von Elementen zu kontrollieren, ohne explizit eine Höhe festzulegen, und dies ist auch ein sehr unflexibler Ansatz – es funktioniert nur, wenn Sie garantieren können, dass Ihr Inhalt eine bestimmte Höhe haben wird.

## Flexbox-Grids?

Wenn Sie unseren vorherigen Artikel über [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) gelesen haben, denken Sie vielleicht, dass Flexbox die ideale Lösung zum Erstellen eines Gridsystems ist. Es gibt viele Flexbox-basierte Gridsysteme und Flexbox kann viele der Probleme lösen, die wir bereits beim Erstellen unseres Rasters oben entdeckt haben.

Allerdings wurde Flexbox nie als Gridsystem entwickelt und stellt eine neue Reihe von Herausforderungen dar, wenn es als solches verwendet wird. Als einfaches Beispiel können wir die gleiche Markup-Vorlage verwenden, die wir oben verwendet haben, und das folgende CSS verwenden, um die `wrapper`, `row` und `col` Klassen zu gestalten:

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

Sie können diese Ersetzungen in Ihrem eigenen Beispiel vornehmen oder sich unseren [flexbox-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/flexbox-grid.html) Beispielcode ansehen (sehen Sie es [live](https://mdn.github.io/learning-area/css/css-layout/grids/flexbox-grid.html) auch).

Hier verwandeln wir jede Zeile in ein Flex-Container. Mit einem Flexbox-basierten Raster benötigen wir weiterhin Zeilen, um es uns zu ermöglichen, Elemente zu haben, die sich auf weniger als 100% summieren. Wir setzen dieses Container auf `display: flex`.

Auf `.col` setzen wir den ersten Wert der {{cssxref("flex")}}-Eigenschaft ({{cssxref("flex-grow")}}) auf 1, damit unsere Elemente wachsen können, den zweiten Wert ({{cssxref("flex-shrink")}}) auf 1, damit die Elemente schrumpfen können, und den dritten Wert ({{cssxref("flex-basis")}}) auf `auto`. Da unser Element eine {{cssxref("width")}} gesetzt hat, verwendet `auto` diese Breite als Wert für `flex-basis`.

In der oberen Zeile erhalten wir zwölf ordentliche Kästchen auf dem Raster, und sie wachsen und schrumpfen gleichmäßig, während wir die Viewport-Breite ändern. In der nächsten Zeile haben wir jedoch nur vier Elemente, und diese wachsen und schrumpfen ebenfalls von dieser 60px Basis. Da es nur vier von ihnen sind, können sie sehr viel mehr wachsen als die Elemente in der Zeile darüber, was dazu führt, dass alle in der zweiten Zeile die gleiche Breite einnehmen.

![Das Raster hat zwei Zeilen. Jede Zeile ist ein flex-Container. Die erste Zeile hat zwölf gleich breite Flex-Elemente. Die zweite Zeile hat vier gleich breite Flex-Elemente.](flexbox-grid-incomplete.png)

Um dies zu beheben, müssen wir weiterhin unsere `span`-Klassen enthalten, um eine Breite bereitzustellen, die den für dieses Element verwendeten `flex-basis`-Wert ersetzt.

Sie respektieren auch nicht das von den oben genannten Elementen verwendete Raster, weil sie nichts darüber wissen.

Flexbox ist per Design **eindimensional**. Es befasst sich mit einer einzigen Dimension, nämlich einer Zeile oder einer Spalte. Wir können kein striktes Raster für Spalten und Zeilen erstellen, was bedeutet, dass wir, wenn wir Flexbox für unser Raster verwenden, weiterhin Prozentsätze wie beim gefloateten Layout berechnen müssen.

In Ihrem Projekt könnten Sie sich dennoch entscheiden, ein Flexbox-"Raster" zu verwenden, aufgrund der zusätzlichen Ausrichtungs- und Raumverteilungsfähigkeiten, die Flexbox über Floats bietet. Sie sollten jedoch darüber informiert sein, dass Sie nach wie vor ein Werkzeug für etwas anderes verwenden, als es entwickelt wurde. Daher könnte es sein, dass es Ihnen vorkommt, als müssten Sie zusätzliche Umstände berücksichtigen, um das gewünschte Endergebnis zu erreichen.

## Grid-Systeme von Drittanbietern

Nun, da wir die Mathematik hinter unseren Rasterberechnungen verstehen, sind wir in einer guten Position, einige der Grid-Systeme von Drittanbietern, die häufig verwendet werden, anzusehen. Wenn Sie im Internet nach "CSS-Grid-Framework" suchen, werden Sie eine riesige Liste von Optionen finden, aus denen Sie wählen können. Beliebte Frameworks wie [Bootstrap](https://getbootstrap.com/) und [Foundation](https://get.foundation/) enthalten ein Gridsystem. Es gibt auch eigenständige Gridsysteme, die entweder mit CSS oder mit Präprozessoren entwickelt wurden.

Lassen Sie uns einen Blick auf eines dieser eigenständigen Systeme werfen, da es gängige Techniken zur Arbeit mit einem Grid-Framework demonstriert. Das Raster, das wir verwenden werden, ist Teil von Skeleton, einem einfachen CSS-Framework.

Um mit Skeleton zu beginnen, besuchen Sie die [Skeleton-Website](http://getskeleton.com/), und wählen Sie "Download", um die ZIP-Datei herunterzuladen. Entpacken Sie diese und kopieren Sie die skeleton.css und normalize.css Dateien in ein neues Verzeichnis.

Machen Sie eine Kopie unserer [html-skeleton.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/html-skeleton.html) Datei und speichern Sie sie im selben Verzeichnis wie die Skeleton- und Normalisieren-CSS.

Fügen Sie die Skeleton- und Normalisieren-CSS in die HTML-Seite ein, indem Sie Folgendes in den Kopf der Datei hinzufügen:

```html
<link href="normalize.css" rel="stylesheet" />
<link href="skeleton.css" rel="stylesheet" />
```

Skeleton enthält mehr als nur ein Gridsystem – es enthält auch CSS für Typografie und andere Seitenelemente, die als Ausgangspunkt verwendet werden können. Wir lassen diese zunächst auf den Standardeinstellungen, da es hier hauptsächlich um das Grid geht.

> **Hinweis:** [Normalisieren](https://necolas.github.io/normalize.css/) ist eine wirklich nützliche kleine CSS-Bibliothek, die von Nicolas Gallagher geschrieben wurde und automatisch einige nützliche grundlegende Layout-Korrekturen vornimmt und das standardmäßige Styling von Elementen über Browser hinweg konsistenter macht.

Wir werden ein ähnliches HTML verwenden wie in unserem vorherigen Beispiel. Fügen Sie folgendes in den Body Ihres HTML ein:

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

Um Skeleton zu verwenden, müssen wir dem Wrapper-{{htmlelement("div")}} eine Klasse `container` geben – dies ist bereits in unserem HTML enthalten. Dadurch wird der Inhalt zentriert, mit einer maximalen Breite von 960 Pixeln. Sie können sehen, wie die Boxen jetzt nie breiter als 960 Pixel werden.

Sie können einen Blick in die skeleton.css-Datei werfen, um das CSS zu sehen, das verwendet wird, wenn wir diese Klasse anwenden. Der `<div>` wird zentriert, indem `auto` linke und rechte Margen verwendet werden, und es wird ein Padding von 20 Pixeln links und rechts angewendet. Skeleton setzt auch die {{cssxref("box-sizing")}}-Eigenschaft auf `border-box`, wie wir es zuvor gemacht haben, sodass das Padding und die Ränder dieses Elements in die gesamte Breite einbezogen werden.

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

Elemente können nur Teil des Grids sein, wenn sie sich innerhalb einer Zeile befinden. Daher benötigen wir wie bei unserem früheren Beispiel ein zusätzliches `<div>` oder ein anderes Element mit einer Klasse `row`, das zwischen den Inhalts-`<div>`-Elementen und dem `container`-`<div>` geschachtelt ist. Auch das haben wir bereits erledigt.

Legen wir nun die Container-Boxen an. Skeleton basiert auf einem 12-Spalten-Raster. Alle oberen Zeilen-Boxen benötigen Klassen von `one column`, um eine Spalte zu umfassen.

Fügen Sie diese nun hinzu, wie im folgenden Snippet gezeigt:

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

Als nächstes geben Sie den Containern in der zweiten Zeile Klassen, die angeben, wie viele Spalten sie umfassen sollen, etwa so:

```html
<div class="row">
  <div class="one column">13</div>
  <div class="six columns">14</div>
  <div class="three columns">15</div>
  <div class="two columns">16</div>
</div>
```

Versuchen Sie, Ihre HTML-Datei zu speichern und im Browser zu laden, um den Effekt zu sehen.

> [!NOTE]
> Wenn Sie Probleme haben, dieses Beispiel zum Laufen zu bringen, versuchen Sie das Fenster, in dem Sie es betrachten, zu erweitern (das Grid wird nicht angezeigt, wie hier beschrieben, wenn das Fenster zu schmal ist). Wenn das nicht funktioniert, vergleichen Sie es mit unserer [html-skeleton-finished.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/html-skeleton-finished.html) Datei (sehen Sie es [live](https://mdn.github.io/learning-area/css/css-layout/grids/html-skeleton-finished.html) auch).

Wenn Sie in die skeleton.css-Datei sehen, können Sie sehen, wie das funktioniert. Zum Beispiel hat Skeleton das folgende definiert, um Elemente mit `three columns` Klassen hinzuzufügen, um sie zu stylen.

```css
.three.columns {
  width: 22%;
}
```

Alles, was Skeleton (oder jedes andere Grid-Framework) tut, ist, vordefinierte Klassen bereitzustellen, die Sie verwenden können, indem Sie sie zu Ihrem Markup hinzufügen. Es ist genau dasselbe, als wenn Sie selbst die Arbeit gemacht hätten, diese Prozentsätze zu berechnen.

Wie Sie sehen, müssen wir beim Einsatz von Skeleton sehr wenig CSS schreiben. Es kümmert sich um all das Floating für uns, wenn wir Klassen zu unserem Markup hinzufügen. Diese Fähigkeit, die Verantwortung für das Layout an etwas anderes zu übergeben, machte die Verwendung eines Frameworks für ein Gridsystem zu einer überzeugenden Wahl! Denken Sie jedoch daran, dass heute, mit CSS-Grid-Layout, vielerlei Entwickler von diesen Frameworks abweichen, um das eingebaute native Grid, das CSS bietet, zu verwenden.

## Zusammenfassung

Sie verstehen nun, wie verschiedene Gridsysteme erstellt werden, was hilfreich sein wird, um mit älteren Seiten zu arbeiten und den Unterschied zwischen dem nativen Grid des CSS-Grid-Layouts und diesen älteren Systemen zu verstehen.
