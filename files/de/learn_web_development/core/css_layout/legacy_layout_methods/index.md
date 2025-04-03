---
title: Veraltete Layout-Methoden
slug: Learn_web_development/Core/CSS_layout/Legacy_Layout_Methods
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

Raster-Systeme sind ein sehr häufiges Feature, das in CSS-Layouts verwendet wird. Bevor CSS Grid Layout eingeführt wurde, tendierten sie dazu, mit Floats oder anderen Layout-Funktionen implementiert zu werden. Sie stellen sich Ihr Layout als eine feste Anzahl von Spalten vor (z. B. 4, 6 oder 12) und passen dann Ihre Inhalts-Spalten in diese imaginären Spalten ein. In diesem Artikel werden wir untersuchen, wie diese älteren Methoden funktionieren, so dass Sie verstehen, wie sie verwendet wurden, wenn Sie an einem älteren Projekt arbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (Studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (Studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Stilgestaltung</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis der grundlegenden Konzepte hinter den Raster-Layout-Systemen, die vor der Verfügbarkeit des CSS Grid Layouts in Browsern verwendet wurden.
      </td>
    </tr>
  </tbody>
</table>

## Layout- und Rastersysteme vor dem CSS Grid Layout

Es mag für jemanden mit Design-Hintergrund überraschend erscheinen, dass CSS bis vor Kurzem kein eingebautes Raster-System hatte und stattdessen scheinbar eine Vielzahl von suboptimalen Methoden verwendet wurde, um grid-ähnliche Designs zu erstellen. Wir bezeichnen diese jetzt als "veraltete" Methoden.

Für neue Projekte wird in den meisten Fällen das CSS Grid Layout in Kombination mit einer oder mehreren anderen modernen Layout-Methoden verwendet, um die Grundlage für jedes Layout zu bilden. Sie werden jedoch von Zeit zu Zeit auf "Rastersysteme" stoßen, die diese veralteten Methoden verwenden. Es ist von Vorteil zu verstehen, wie sie funktionieren und warum sie sich vom CSS Grid Layout unterscheiden.

Diese Lektion erklärt, wie Rastersysteme und Raster-Frameworks, die auf Floats und Flexbox basieren, funktionieren. Nachdem Sie das Grid-Layout studiert haben, werden Sie wahrscheinlich überrascht sein, wie kompliziert das alles erscheint! Dieses Wissen wird Ihnen helfen, wenn Sie Fallback-Code für Browser erstellen müssen, die keine neueren Methoden unterstützen, und ermöglicht es Ihnen, an bestehenden Projekten zu arbeiten, die diese Arten von Systemen verwenden.

Es ist wichtig zu beachten, wenn wir diese Systeme erkunden, dass keines von ihnen tatsächlich ein Raster erstellt, so wie es das CSS Grid Layout tut. Sie funktionieren, indem sie Elemente in der Größe festlegen und sie so verschieben, dass sie wie ein Raster _aussehen_.

## Ein zweispaltiges Layout

Beginnen wir mit dem einfachsten möglichen Beispiel – einem zweispaltigen Layout. Sie können mitmachen, indem Sie eine neue `index.html`-Datei auf Ihrem Computer erstellen, sie mit einer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) füllen und den untenstehenden Code an den entsprechenden Stellen einfügen. Am Ende des Abschnitts können Sie ein Live-Beispiel sehen, wie der endgültige Code aussehen sollte.

Zunächst benötigen wir einige Inhalte, die wir in unsere Spalten einfügen können. Ersetzen Sie alles, was sich derzeit im Body befindet, durch Folgendes:

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

Jede der Spalten benötigt ein äußeres Element, um ihren Inhalt zu enthalten und es uns zu ermöglichen, alles auf einmal zu manipulieren. In diesem Fall haben wir uns für {{htmlelement("div")}}s entschieden, aber Sie könnten auch etwas Semantischeres wie {{htmlelement("article")}}, {{htmlelement("section")}} und {{htmlelement("aside")}} wählen, oder was immer passender ist.

Nun zum CSS. Wenden Sie zunächst Folgendes auf Ihr HTML an, um eine grundlegende Einrichtung bereitzustellen:

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}
```

Der Body wird 90% der Ansichtsfensterbreite sein, bis er eine Breite von 900px erreicht, ab dann bleibt diese Breite fixiert und zentriert sich im Ansichtsfenster. Standardmäßig erstrecken sich seine Kinder (die {{htmlelement("Heading_Elements", "h1")}} und die beiden {{htmlelement("div")}}s) über 100% der Breite des Bodys. Wenn wir möchten, dass die beiden {{htmlelement("div")}}s nebeneinander gefloatet werden, müssen wir ihre Breiten auf insgesamt 100% der Breite ihres Elternelements oder kleiner setzen, damit sie nebeneinander passen. Fügen Sie Folgendes am Ende Ihres CSS hinzu:

```css
div:nth-of-type(1) {
  width: 48%;
}

div:nth-of-type(2) {
  width: 48%;
}
```

Hier haben wir beide auf 48% der Breite ihres Elternelements gesetzt — dies ergibt insgesamt 96%, so dass uns 4% frei bleiben, um als Abstand zwischen den beiden Spalten zu dienen und den Inhalten etwas Raum zum Atmen zu geben. Jetzt müssen wir nur noch die Spalten floaten, wie folgt:

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

Das Zusammenfügen all dessen sollte uns folgendes Ergebnis liefern:

{{ EmbedLiveSample('A_two_column_layout', '100%', 520) }}

Hier verwenden wir überall Prozentsätze für die Breiten — dies ist eine ziemlich gute Strategie, da es ein **flüssiges Layout** schafft, das sich an verschiedene Bildschirmgrößen anpasst und die gleichen Proportionen für die Spaltenbreiten bei kleineren Bildschirmgrößen beibehält. Versuchen Sie, die Breite Ihres Browserfensters anzupassen, um es selbst zu sehen. Dies ist ein wertvolles Werkzeug für responsives Webdesign.

> [!NOTE]
> Sie können dieses Beispiel unter [0_two-column-layout.html](https://mdn.github.io/learning-area/css/css-layout/floats/0_two-column-layout.html) sehen (sehen Sie auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/floats/0_two-column-layout.html)).

## Erstellung einfacher veralteter Raster-Frameworks

Die Mehrheit der veralteten Frameworks nutzen das Verhalten der {{cssxref("float")}}-Eigenschaft, um eine Spalte neben die andere zu floaten, um etwas zu schaffen, das wie ein Raster aussieht. Durch die Durchführung der Erstellung eines Rasters mit Floats wird gezeigt, wie dies funktioniert und es werden auch einige weiterführende Konzepte eingeführt, um auf den in der Lektion über [Floats und Clearing](/de/docs/Learn_web_development/Core/CSS_layout/Floats) erlernten Dingen aufzubauen.

Die einfachste Art von Raster-Framework, das man erstellen kann, ist eines mit fester Breite — wir müssen nur herausfinden, wie viel Gesamtbreite unser Design haben soll, wie viele Spalten wir möchten, und wie breit die Abstände und Spalten sein sollen. Wenn wir stattdessen entscheiden, unser Design auf einem Raster mit Spalten zu erstellen, die sich je nach Browserbreite vergrößern und verkleinern, müssten wir die Prozentbreiten für die Spalten und Abstände zwischen ihnen berechnen.

In den nächsten Abschnitten werden wir uns ansehen, wie man beides erstellt. Wir werden ein 12-Spalten-Raster erstellen — eine sehr häufige Wahl, die als sehr anpassungsfähig an verschiedene Situationen angesehen wird, da 12 schön durch 6, 4, 3 und 2 teilbar ist.

### Ein einfaches Raster mit fester Breite

Lassen Sie uns zunächst ein Rastersystem erstellen, das Spalten mit fester Breite verwendet.

Beginnen Sie damit, eine lokale Kopie unserer Beispieldatei [simple-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid.html) zu erstellen, die folgenden Markup in ihrem Body enthält.

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

Das Ziel ist es, dies in ein Demonstrationsraster mit zwei Zeilen auf einem zwölfspaltigen Raster zu verwandeln — die obere Zeile, die die Größe der einzelnen Spalten demonstriert, die zweite Zeile einige unterschiedlich große Bereiche auf dem Raster.

![CSS-Raster mit 16 Rasterelementen, verteilt auf zwölf Spalten und zwei Zeilen. Die oberste Zeile hat 12 gleich breite Rasterelemente in 12 Spalten. Die zweite Zeile hat unterschiedlich große Rasterelemente. Element 13 erstreckt sich über 1 Spalte, Element 14 über sechs Spalten, 15 über drei und 16 über zwei.](simple-grid-finished.png)

Fügen Sie im {{htmlelement("style")}}-Element den folgenden Code ein, der dem Wrapper-Container eine Breite von 980 Pixeln gibt, mit einem Padding auf der rechten Seite von 20 Pixeln. Dies lässt uns 960 Pixel für unsere gesamten Spalten/Abstand-Breiten — in diesem Fall wird das Padding von der Gesamt-Inhaltsbreite abgezogen, weil wir {{cssxref("box-sizing")}} auf `border-box` für alle Elemente auf der Seite gesetzt haben (siehe [Das alternative CSS-Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#the_alternative_css_box_model) für mehr Erklärung).

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

Jetzt verwenden Sie den Zeilencontainer, der um jede Zeile des Rasters gewickelt ist, um eine Zeile von der anderen zu trennen. Fügen Sie die folgende Regel unter Ihrer vorherigen Regel hinzu:

```css
.row {
  clear: both;
}
```

Durch die Anwendung dieses Clearings müssen wir nicht jede Zeile vollständig mit Elementen füllen, die die vollen zwölf Spalten ausmachen. Die Zeilen bleiben getrennt und stören sich nicht gegenseitig.

Die Abstände zwischen den Spalten sind 20 Pixel breit. Wir erstellen diese Abstände als einen Margin auf der linken Seite jeder Spalte — einschließlich der ersten Spalte, um das 20 Pixel große Padding auf der rechten Seite des Containers auszugleichen. So haben wir insgesamt 12 Abstände — 12 x 20 = 240.

Wir müssen das von unserer Gesamtbreite von 960 Pixeln abziehen, was uns 720 Pixel für unsere Spalten gibt. Wenn wir das jetzt durch 12 teilen, wissen wir, dass jede Spalte 60 Pixel breit sein sollte.

Unser nächster Schritt ist es, eine Regel für die Klasse `.col` zu erstellen, sie nach links zu floaten, ihr einen {{cssxref("margin-left")}} von 20 Pixeln zu geben, um den Abstand zu formen, und eine {{cssxref("width")}} von 60 Pixeln. Fügen Sie die folgende Regel am Ende Ihres CSS hinzu:

```css
.col {
  float: left;
  margin-left: 20px;
  width: 60px;
  background: rgb(255 150 150);
}
```

Die oberste Zeile einzelner Spalten wird sich nun ordentlich als Raster anordnen.

> [!NOTE]
> Wir haben jeder Spalte auch eine hellrote Farbe gegeben, damit Sie genau sehen können, wie viel Platz jede einnimmt.

Layout-Container, die wir über mehr als eine Spalte spannen möchten, müssen speziellen Klassen zugewiesen werden, um ihre {{cssxref("width")}}-Werte an die erforderliche Anzahl von Spalten (plus Abständen dazwischen) anzupassen. Wir müssen eine zusätzliche Klasse erstellen, um Container zu erlauben, sich über 2 bis 12 Spalten zu erstrecken. Jede Breite ist das Ergebnis der Addition der Spaltenbreite dieser Anzahl von Spalten plus der Abstandbreiten, die immer eins weniger als die Anzahl der Spalten betragen.

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

Mit diesen erstellten Klassen können wir jetzt unterschiedlich breite Spalten auf dem Raster anlegen. Versuchen Sie, den Code zu speichern und die Seite in Ihrem Browser zu laden, um die Effekte zu sehen.

> [!NOTE]
> Wenn Sie Probleme haben, das obige Beispiel zum Laufen zu bringen, versuchen Sie, es mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid-finished.html) auf GitHub zu vergleichen ([sehen Sie es live](https://mdn.github.io/learning-area/css/css-layout/grids/simple-grid-finished.html) auch).

Versuchen Sie, die Klassen auf Ihren Elementen zu ändern oder sogar einige Container hinzuzufügen oder zu entfernen, um zu sehen, wie Sie das Layout variieren können. Zum Beispiel könnten Sie die zweite Zeile so aussehen lassen:

```html
<div class="row">
  <div class="col span8">13</div>
  <div class="col span4">14</div>
</div>
```

Jetzt, da Sie ein funktionierendes Rastersystem haben, können Sie die Zeilen und die Anzahl der Spalten in jeder Zeile definieren und dann jeden Container mit Ihrem benötigten Inhalt füllen. Großartig!

### Erstellung eines flüssigen Rasters

Unser Raster funktioniert gut, hat aber eine feste Breite. Wir möchten wirklich ein flexibles (flüssiges) Raster, das mit dem verfügbaren Platz im Browser-Viewport wächst und schrumpft. Um dies zu erreichen, können wir die Referenz-Pixelbreiten in Prozentsätze umwandeln.

Die Gleichung, die eine feste Breite in eine flexible, prozentbasierte umwandelt, lautet wie folgt.

```plain
target / context = result
```

Für unsere Spaltenbreite ist unsere **Zielbreite** 60 Pixel und unser **Kontext** ist der 960 Pixel Wrapper. Wir können das Folgende verwenden, um einen Prozentsatz zu berechnen.

```plain
60 / 960 = 0.0625
```

Wir verschieben das Dezimalzeichen dann um 2 Stellen und erhalten einen Prozentsatz von 6,25%. In unserem CSS können wir nun die 60 Pixel Spaltenbreite durch 6,25% ersetzen.

Wir müssen dasselbe mit unserer Abstandbreite tun:

```plain
20 / 960 = 0.02083333333
```

Wir müssen also den 20 Pixel {{cssxref("margin-left")}} auf unserer `.col`-Regel und den 20 Pixel {{cssxref("padding-right")}} auf `.wrapper` durch 2.08333333% ersetzen.

#### Aktualisierung unseres Rasters

Um in diesem Abschnitt zu beginnen, machen Sie eine neue Kopie Ihrer vorherigen Beispielseite oder machen Sie eine lokale Kopie unseres [simple-grid-finished.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid-finished.html)-Codes, den Sie als Ausgangspunkt verwenden können.

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

Wir haben ihm nicht nur eine prozentuale {{cssxref("width")}} gegeben, sondern auch eine {{cssxref("max-width")}}-Eigenschaft hinzugefügt, um zu verhindern, dass das Layout zu breit wird.

Aktualisieren Sie als Nächstes die vierte CSS-Regel (mit dem `.col`-Selektor) so:

```css
.col {
  float: left;
  margin-left: 2.08333333%;
  width: 6.25%;
  background: rgb(255 150 150);
}
```

Jetzt kommt der etwas mühsamere Teil — wir müssen alle unsere `.col.span`-Regeln aktualisieren, um Prozentsätze anstelle von Pixelbreiten zu verwenden. Dies erfordert ein wenig Zeit mit einem Taschenrechner; um Ihnen etwas Mühe zu ersparen, haben wir es bereits für Sie unten erledigt.

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

Speichern Sie nun Ihren Code, laden Sie ihn in einem Browser und versuchen Sie, die Ansichtsfensterbreite zu ändern — Sie sollten sehen, dass sich die Spaltenbreiten schön anpassen.

> [!NOTE]
> Wenn Sie Probleme haben, das obige Beispiel zum Laufen zu bringen, versuchen Sie, es mit unserer [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid.html) zu vergleichen ([sehen Sie es live](https://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid.html) auch).

### Einfachere Berechnungen mit der Funktion calc()

Sie könnten die {{cssxref("calc", "calc()")}}-Funktion verwenden, um die Mathematik direkt in Ihrem CSS auszuführen — dies ermöglicht es Ihnen, einfache mathematische Gleichungen in Ihre CSS-Werte einzufügen, um zu berechnen, was ein Wert sein soll. Es ist besonders nützlich, wenn komplexe Mathematik durchgeführt werden muss, und Sie können sogar eine Berechnung durchführen, die verschiedene Einheiten verwendet, zum Beispiel "Ich möchte, dass die Höhe dieses Elements immer 100% der Höhe seines Elternteils beträgt, minus 50px". Siehe [dieses Beispiel aus einem MediaStream Recording API-Tutorial](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API#keeping_the_interface_constrained_to_the_viewport_regardless_of_device_height_with_calc).

Zurück zu unseren Rastern! Jede Spalte, die mehr als eine Spalte unseres Rasters überspannt, hat eine Gesamtbreite von 6,25%, multipliziert mit der Anzahl der überspannten Spalten, plus 2,08333333%, multipliziert mit der Anzahl der Abstände (die immer die Anzahl der Spalten minus 1 ist).

Die `calc()`-Funktion ermöglicht es uns, diese Berechnung direkt innerhalb des Wertsausdrucks durchzuführen, so dass wir bei einem Element, das 4 Spalten überspannt, zum Beispiel Folgendes tun können:

```css
.col.span4 {
  width: calc((6.25% * 4) + (2.08333333% * 3));
}
```

Versuchen Sie, Ihren unteren Block von Regeln durch den folgenden zu ersetzen, und laden Sie ihn dann im Browser neu, um zu sehen, ob Sie das gleiche Ergebnis erhalten:

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
> Sie können unsere fertige Version in [fluid-grid-calc.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid-calc.html) sehen (auch [sehen Sie es live](https://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid-calc.html)).

### Semantische vs. "unsemantische" Rastersysteme

Das Hinzufügen von Klassen zu Ihrem Markup, um das Layout zu definieren, bedeutet, dass Ihr Inhalt und Markup an Ihre visuelle Darstellung gebunden werden. Sie werden diese Verwendung von CSS-Klassen manchmal als "unsemantisch" beschreiben hören — sie beschreibt, wie der Inhalt aussieht — im Gegensatz zu einer semantischen Verwendung von Klassen, die den Inhalt beschreibt. Dies ist der Fall mit unseren `span2`, `span3` usw. Klassen.

Dies ist nicht der einzige Ansatz. Sie könnten stattdessen entscheiden, Ihr Raster zu erstellen und dann die Größendaten auf die Regeln für vorhandene semantische Klassen übertragen. Wenn Sie beispielsweise ein {{htmlelement("div")}} mit einer Klasse `content` hätten, das Sie über 8 Spalten spannen möchten, könnten Sie die Breite von der `span8`-Klasse kopieren und eine Regel wie folgt erstellen:

```css
.content {
  width: calc((6.25% * 8) + (2.08333333% * 7));
}
```

> [!NOTE]
> Wenn Sie einen Präprozessor wie [Sass](https://sass-lang.com/) verwenden, könnten Sie einen einfachen Mixin erstellen, um diesen Wert für Sie einzufügen.

### Aktivieren von Offset-Containern in unserem Raster

Das Raster, das wir erstellt haben, funktioniert gut, solange wir alle Container auf derselben einen Spaltenbreite links ausrichten möchten. Wenn wir möchten, dass vor dem ersten Container oder zwischen den Containern ein leerer Spaltenraum bleibt, müssen wir eine Offset-Klasse erstellen, um einen linken Abstand hinzuzufügen, um ihn quer über das Raster zu verschieben. Mehr Mathematik!

Versuchen wir dies.

Beginnen Sie mit Ihrem vorherigen Code oder verwenden Sie unsere Datei [fluid-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid.html) als Ausgangspunkt.

Lassen Sie uns eine Klasse in unserem CSS erstellen, die ein Container-Element um eine Spaltenbreite verschiebt. Fügen Sie das folgende am Ende Ihres CSS hinzu:

```css
.offset-by-one {
  margin-left: calc(6.25% + (2.08333333% * 2));
}
```

Oder wenn Sie es vorziehen, die Prozentsätze selbst zu berechnen, verwenden Sie diese:

```css
.offset-by-one {
  margin-left: 10.41666666%;
}
```

Sie können diese Klasse jetzt jedem Container hinzufügen, den Sie möchten, um ein einspaltiges Feld auf der linken Seite zu hinterlassen. Wenn Sie beispielsweise dies in Ihrem HTML haben:

```html
<div class="col span6">14</div>
```

Versuchen Sie, es durch Folgendes zu ersetzen:

```html
<div class="col span5 offset-by-one">14</div>
```

> [!NOTE]
> Beachten Sie, dass Sie die Anzahl der Spalten, die er spannt, reduzieren müssen, um Platz für den Versatz zu machen!

Versuchen Sie, neu zu laden und die Unterschiede zu sehen, oder sehen Sie sich unser [fluid-grid-offset.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid-offset.html)-Beispiel an (sehen Sie es auch [live](https://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid-offset.html)). Das fertige Beispiel sollte so aussehen:

![Das Raster hat 2 Zeilen. Die erste Zeile hat 12 gleich große Rasterelemente und die zweite Zeile hat 4 Elemente mit unterschiedlicher Breite. Element 13 erstreckt sich über 1 Spalte, Element 14 über fünf Spalten, 15 über drei und 16 über zwei. Element 14 hat die Klasse 'offset-by-one' angewendet, wodurch es in der dritten Spalte beginnt, anstatt in der zweiten, was eine einspaltige leere Stelle in der zweiten Reihe, zweiten Spalte hinterlässt.](offset-grid-finished.png)

> [!NOTE]
> Als zusätzliches Übungsbeispiel: Können Sie eine `offset-by-two`-Klasse implementieren?

### Begrenzungen des gefloateten Rasters

Bei der Verwendung eines solchen Systems müssen Sie darauf achten, dass Ihre Gesamtbreiten korrekt addiert werden und dass Sie nicht Elemente in einer Zeile einschließen, die mehr Spalten umfassen, als die Zeile enthalten kann. Aufgrund der Funktionsweise von Floats, wenn die Anzahl der Rasterspalten zu groß für das Raster wird, werden die Elemente am Ende auf die nächste Zeile verschoben und brechen das Raster.

Auch bedenken Sie, dass wenn der Inhalt der Elemente breiter wird als die Reihen, die sie belegen, er überläuft und ein Durcheinander verursacht.

Die größte Einschränkung dieses Systems ist, dass es im Wesentlichen eindimensional ist. Wir befassen uns mit Spalten und dem Überbrücken von Elementen über Spalten, nicht jedoch über Zeilen. Es ist sehr schwierig mit diesen älteren Layout-Methoden die Höhe von Elementen zu kontrollieren, ohne explizit eine Höhe festzulegen, und dies ist auch eine sehr unflexible Herangehensweise – es funktioniert nur, wenn Sie garantieren können, dass Ihre Inhalte eine bestimmte Höhe haben werden.

## Flexbox-Raster?

Wenn Sie unseren vorherigen Artikel über [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) gelesen haben, könnten Sie denken, dass Flexbox die ideale Lösung zur Erstellung eines Rastersystems ist. Es gibt viele Flexbox-basierte Rastersysteme und Flexbox kann viele der Probleme lösen, die wir bereits bei der Erstellung unseres Rasters oben festgestellt haben.

Flexbox wurde jedoch nie als Rastersystem konzipiert und stellt bei der Verwendung als solches eine neue Reihe von Herausforderungen dar. Als einfaches Beispiel dafür können wir dasselbe Beispiel-Markup verwenden, das wir oben verwendet haben, und das folgende CSS verwenden, um die `wrapper`, `row` und `col`-Klassen zu gestalten:

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

Sie können diese Ersetzungen in Ihrem eigenen Beispiel ausprobieren oder unser Beispielcode [flexbox-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/flexbox-grid.html) ansehen (sehen Sie es auch [live](https://mdn.github.io/learning-area/css/css-layout/grids/flexbox-grid.html)).

Hier machen wir jede Zeile zu einem Flex-Container. Bei einem Flexbox-basierten Raster benötigen wir immer noch Zeilen, um uns zu ermöglichen, Elemente zu haben, die weniger als 100% ausmachen. Wir setzen diesen Container auf `display: flex`.

Auf `.col` setzen wir den ersten Wert der {{cssxref("flex")}}-Eigenschaft ({{cssxref("flex-grow")}}) auf 1, damit sich unsere Elemente vergrößern können, den zweiten Wert ({{cssxref("flex-shrink")}}) auf 1, damit sich die Elemente verkleinern können, und den dritten Wert ({{cssxref("flex-basis")}}) auf `auto`. Da unser Element eine {{cssxref("width")}} hat, wird `auto` diese Breite als `flex-basis`-Wert verwenden.

In der oberen Linie bekommen wir zwölf saubere Kästchen auf dem Raster und sie vergrößern und verkleinern sich gleichmäßig, wenn wir die Ansichtsfensterbreite ändern. In der nächsten Zeile allerdings haben wir nur vier Elemente und diese vergrößern und verkleinern sich ebenfalls von der 60px-Basis. Da es nur vier von ihnen gibt, können sie viel mehr wachsen als die Elemente in der Zeile darüber, was dazu führt, dass alle die gleiche Breite in der zweiten Zeile einnehmen.

![Das Raster hat zwei Zeilen. Jede Zeile ist ein Flex-Container. Die erste Zeile hat zwölf gleich breite Flex-Elemente. Die zweite Zeile hat vier gleich breite Flex-Elemente.](flexbox-grid-incomplete.png)

Um dies zu beheben, müssen wir weiterhin unsere `span`-Klassen beibehalten, um eine Breite zu liefern, die den von `flex-basis` für dieses Element verwendeten Wert ersetzt.

Sie respektieren auch nicht das von den darüberstehenden Elementen verwendete Raster, da sie nichts darüber wissen.

Flexbox ist **eindimensional** von Design. Es befasst sich mit einer einzigen Dimension, der einer Zeile oder einer Spalte. Wir können kein striktes Raster für Spalten und Zeilen erstellen, was bedeutet, dass wir bei der Verwendung von Flexbox für unser Raster weiterhin Prozentsätze wie beim gefloateten Layout berechnen müssen.

In Ihrem Projekt könnten Sie sich dennoch entscheiden, ein Flexbox-"Raster" zu verwenden, aufgrund der zusätzlichen Ausrichtungs- und Raumverteilungsmöglichkeiten, die Flexbox über Floats bietet. Sie sollten jedoch wissen, dass Sie immer noch ein Werkzeug für etwas anderes nutzen, als wofür es vorgesehen war. Daher kann es Ihnen vorkommen, dass es Sie zwingt, zusätzliche Hindernisse zu überwinden, um das gewünschte Endergebnis zu erzielen.

## Drittanbieter-Rastersysteme

Jetzt, da wir die Mathematik hinter unseren Rasterberechnungen verstehen, sind wir in einer guten Position, einige der gängigen Drittanbieter-Rastersysteme zu betrachten. Wenn Sie im Web nach "CSS Grid Framework" suchen, werden Sie eine riesige Liste von Optionen finden, aus denen Sie wählen können. Beliebte Frameworks wie [Bootstrap](https://getbootstrap.com/) und [Foundation](https://get.foundation/) enthalten ein Rastersystem. Es gibt auch eigenständige Rastersysteme, entweder entwickelt mit CSS oder mit Präprozessoren.

Lassen Sie uns einen Blick auf eines dieser eigenständigen Systeme werfen, da es gängige Techniken zur Arbeit mit einem Rasterframework demonstriert. Das Raster, das wir verwenden werden, ist Teil von Skeleton, einem einfachen CSS-Framework.

Zum Einstieg besuchen Sie die [Skeleton-Website](http://getskeleton.com/) und wählen Sie "Download", um die ZIP-Datei herunterzuladen. Entpacken Sie diese und kopieren Sie die skeleton.css- und normalize.css-Dateien in ein neues Verzeichnis.

Machen Sie eine Kopie unserer Datei [html-skeleton.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/html-skeleton.html) und speichern Sie sie im selben Verzeichnis wie die Skeleton- und Normalize-CSS.

Binden Sie die Skeleton- und Normalize-CSS in die HTML-Seite ein, indem Sie das Folgende in den Head einfügen:

```html
<link href="normalize.css" rel="stylesheet" />
<link href="skeleton.css" rel="stylesheet" />
```

Skeleton enthält mehr als ein Rastersystem — es umfasst auch CSS für Typografie und andere Seitenelemente, die Sie als Ausgangspunkt verwenden können. Wir lassen diese jetzt jedoch standardmäßig — das Raster interessiert uns hier wirklich.

> **Hinweis:** [Normalize](https://necolas.github.io/normalize.css/) ist eine wirklich nützliche kleine CSS-Bibliothek, die von Nicolas Gallagher geschrieben wurde, und die automatisch einige nützliche grundlegende Layout-Korrekturen vornimmt und das Standardelement-Styling über Browser hinweg konsistenter macht.

Wir werden ein ähnliches HTML wie in unserem früheren Beispiel verwenden. Fügen Sie das Folgende in Ihr HTML-Body ein:

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

Um Skeleton zu verwenden, müssen wir dem Wrapper-{{htmlelement("div")}} eine Klasse von `container` geben — dies ist bereits in unserem HTML enthalten. Dies zentriert den Inhalt mit einer maximalen Breite von 960 Pixeln. Sie können sehen, wie die Felder jetzt niemals breiter als 960 Pixel werden.

Sie können sich die Skeleton.css Datei ansehen, um zu sehen, welches CSS verwendet wird, wenn wir diese Klasse anwenden. Das `<div>` wird durch `auto` linke und rechte Margen zentriert und ein Padding von 20 Pixeln wird links und rechts angewendet. Skeleton setzt auch die {{cssxref("box-sizing")}}-Eigenschaft auf `border-box` wie wir es zuvor getan haben, sodass das Padding und die Ränder dieses Elements in die Gesamtbreite einbezogen werden.

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

Elemente können nur Teil des Rasters sein, wenn sie innerhalb einer Zeile sind, daher benötigen wir wie in unserem früheren Beispiel ein weiteres `<div>` oder ein anderes Element mit einer Klasse von `row`, das zwischen den Inhalts`<div>`-Elementen und dem Container-`<div>` verschachtelt ist. Das haben wir auch schon gemacht.

Lassen Sie uns nun die Container-Boxen anordnen. Skeleton basiert auf einem 12-Spalten-Raster. Die obersten Zeilenkästchen benötigen alle Klassen von `one column`, um eine Spalte zu umfassen.

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

Geben Sie als Nächstes den Containern auf der zweiten Zeile Klassen ein, die erklären, über wie viele Spalten sie sich erstrecken sollen, etwa so:

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
> Wenn Sie Probleme haben, dieses Beispiel zuzum Laufen zu bringen, versuchen Sie, das Fenster, in dem Sie es anzeigen, zu verbreitern (das Raster wird wie hier beschrieben möglicherweise nicht angezeigt, wenn das Fenster zu schmal ist). Wenn das nicht klappt, vergleichen Sie es mit unserer Datei [html-skeleton-finished.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/html-skeleton-finished.html) (sehen Sie es auch [live](https://mdn.github.io/learning-area/css/css-layout/grids/html-skeleton-finished.html)).

Wenn Sie sich die Datei skeleton.css ansehen, können Sie sehen, wie das funktioniert. Zum Beispiel hat Skeleton das folgende definiert, um Elemente mit hinzugefügten "three columns"-Klassen zu stylen.

```css
.three.columns {
  width: 22%;
}
```

Alles, was Skeleton (oder jedes andere Raster-Framework) tut, ist vordefinierte Klassen einzurichten, die Sie verwenden können, indem Sie sie Ihrem Markup hinzufügen. Es ist genau dasselbe, als wenn Sie die Arbeit leisten würden, diese Prozentsätze selbst zu berechnen.

Wie Sie sehen, müssen wir sehr wenig CSS schreiben, wenn wir Skeleton verwenden. Es kümmert sich um alle Auftriebsarbeiten für uns, wenn wir Klassen zu unserem Markup hinzufügen. Gerade dies, die Verantwortung für das Layout an etwas anderes zu übergeben, machte es zu einer überzeugenden Wahl, ein Framework für ein Rastersystem zu verwenden! Aber heutzutage, mit CSS Grid Layout, wechseln viele Entwickler dazu, das eingebaute native Raster zu verwenden, das CSS bietet.

## Zusammenfassung

Sie verstehen nun, wie verschiedene Rastersysteme erstellt werden, was nützlich ist, um mit älteren Websites zu arbeiten und den Unterschied zwischen dem nativen Raster von CSS Grid Layout und diesen älteren Systemen zu verstehen.
