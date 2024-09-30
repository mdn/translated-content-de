---
title: Legacy-Layout-Methoden
slug: Learn/CSS/CSS_layout/Legacy_Layout_Methods
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}

Rastersysteme sind ein sehr häufiges Merkmal, das in CSS-Layouts verwendet wird. Vor dem CSS Grid Layout wurden sie häufig mit Floats oder anderen Layout-Funktionen implementiert. Man stellt sich sein Layout als eine feste Anzahl von Spalten vor (z. B. 4, 6 oder 12), und passt dann seine Inhalts-Spalten in diese imaginären Spalten ein. In diesem Artikel werden wir untersuchen, wie diese älteren Methoden funktionieren, damit Sie verstehen, wie sie verwendet wurden, wenn Sie an einem älteren Projekt arbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a> und
        <a href="/de/docs/Learn/CSS/Building_blocks">Styling von Boxen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die grundlegenden Konzepte hinter den Rastersystemen zu verstehen, die vor der Verfügbarkeit des CSS Grid Layouts in Browsern verwendet wurden.
      </td>
    </tr>
  </tbody>
</table>

## Layout- und Rastersysteme vor dem CSS Grid Layout

Es mag für jemanden aus einem Design-Hintergrund überraschend erscheinen, dass CSS bis vor kurzem kein eingebautes Rastersystem hatte, und stattdessen schien es, als würden wir eine Vielzahl von suboptimalen Methoden verwenden, um rasterähnliche Designs zu erstellen. Wir beziehen uns jetzt auf diese als "Legacy"-Methoden.

Für neue Projekte wird in den meisten Fällen das CSS Grid Layout in Kombination mit einer oder mehreren anderen modernen Layout-Methoden verwendet, um die Grundlage für jedes Layout zu bilden. Sie werden jedoch von Zeit zu Zeit auf "Rastersysteme" stoßen, die diese Legacy-Methoden verwenden. Es lohnt sich, zu verstehen, wie sie funktionieren und warum sie sich vom CSS Grid Layout unterscheiden.

Diese Lektion wird erklären, wie Rastersysteme und Raster-Frameworks, die auf Floats und Flexbox basieren, funktionieren. Nachdem Sie das Grid Layout studiert haben, werden Sie wahrscheinlich überrascht sein, wie kompliziert das alles erscheint! Dieses Wissen wird Ihnen nützlich sein, wenn Sie Rückwärtskompatibilitätscode für Browser erstellen müssen, die neuere Methoden nicht unterstützen, und ermöglicht es Ihnen außerdem, an bestehenden Projekten zu arbeiten, die diese Arten von Systemen verwenden.

Es ist wichtig, im Hinterkopf zu behalten, während wir diese Systeme erkunden, dass keines von ihnen tatsächlich ein Raster auf die Weise erstellt, wie das CSS Grid Layout ein Raster erstellt. Sie funktionieren, indem sie Elementen eine Größe geben und sie herumrücken, um sie so auszurichten, dass es _wie_ ein Raster aussieht.

## Ein zweispaltiges Layout

Beginnen wir mit dem einfachsten möglichen Beispiel — einem zweispaltigen Layout. Sie können mitmachen, indem Sie eine neue `index.html`-Datei auf Ihrem Computer erstellen, sie mit einer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) füllen und den untenstehenden Code an den entsprechenden Stellen einfügen. Am Ende des Abschnitts können Sie ein Live-Beispiel sehen, wie der endgültige Code aussehen sollte.

Zuerst benötigen wir etwas Inhalt, den wir in unsere Spalten einfügen können. Ersetzen Sie, was auch immer derzeit im Body steht, durch das Folgende:

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

Jede der Spalten benötigt ein äußeres Element, um ihren Inhalt zu enthalten und uns zu ermöglichen, alles auf einmal zu manipulieren. In diesem Fallbeispiel haben wir {{htmlelement("div")}}s gewählt, aber Sie könnten etwas semantisch passenderes wie {{htmlelement("article")}}s, {{htmlelement("section")}}s und {{htmlelement("aside")}}, oder was auch immer, wählen.

Nun zum CSS. Zuerst von allem, wenden Sie das Folgende auf Ihr HTML an, um einige grundlegende Einstellungen vorzunehmen:

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}
```

Der Body wird 90% der Viewportbreite einnehmen, bis er 900px breit wird, in diesem Fall bleibt er fixiert bei dieser Breite und zentriert sich im Viewport. Standardmäßig werden seine Kinder (die {{htmlelement("Heading_Elements", "h1")}} und die zwei {{htmlelement("div")}}s) 100% der Breite des Bodys einnehmen. Wenn wir möchten, dass die zwei {{htmlelement("div")}}s nebeneinander gefloatet werden, müssen wir ihre Breiten so einstellen, dass sie insgesamt 100% der Breite ihres Elternelements oder kleiner sind, damit sie nebeneinander passen. Fügen Sie Folgendes am Ende Ihres CSS hinzu:

```css
div:nth-of-type(1) {
  width: 48%;
}

div:nth-of-type(2) {
  width: 48%;
}
```

Hier haben wir beide auf 48% der Breite ihres Elternteils eingestellt - das ergibt insgesamt 96%, was uns 4% als Rinne zwischen den beiden Spalten lässt, damit der Inhalt etwas Raum zum Atmen bekommt. Jetzt müssen wir nur noch die Spalten floaten, so:

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

Das Zusammensetzen dieser Teile sollte uns ein Ergebnis wie folgt liefern:

{{ EmbedLiveSample('A_two_column_layout', '100%', 520) }}

Sie werden hier feststellen, dass wir überall Prozentwerte für die Breiten verwenden — das ist eine ziemlich gute Strategie, da es ein **fließendes Layout** schafft, das sich an verschiedene Bildschirmgrößen anpasst und die gleichen Proportionen für die Spaltenbreiten bei kleineren Bildschirmgrößen beibehält. Versuchen Sie, die Breite Ihres Browserfensters anzupassen, um es selbst zu sehen. Dies ist ein wertvolles Werkzeug für responsives Webdesign.

> [!NOTE]
> Sie können dieses Beispiel unter [0_two-column-layout.html](https://mdn.github.io/learning-area/css/css-layout/floats/0_two-column-layout.html) laufen sehen (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/floats/0_two-column-layout.html)).

## Einfache Legacy-Raster-Frameworks erstellen

Die Mehrheit der Legacy-Frameworks nutzt das Verhalten der {{cssxref("float")}}-Eigenschaft, um eine Spalte neben die andere zu floaten und so etwas zu schaffen, das wie ein Raster aussieht. Der Durchlauf des Prozesses zur Erstellung eines Rasters mit Floats zeigt Ihnen, wie dies funktioniert und führt einige fortgeschrittenere Konzepte ein, um auf den Dingen aufzubauen, die Sie in der Lektion über [Floats und Clearing](/de/docs/Learn/CSS/CSS_layout/Floats) gelernt haben.

Die einfachste Art von Raster-Framework zu erstellen ist eines mit fester Breite — wir müssen nur herausfinden, wie viel Gesamtbreite unser Design haben soll, wie viele Spalten wir wollen und wie breit die Rinnen und Spalten sein sollen. Wenn wir stattdessen beschließen, unser Design auf einem Raster zu layouten mit Spalten, die je nach Browserbreite wachsen und schrumpfen, müssten wir Prozentbreiten für die Spalten und Rinnen dazwischen berechnen.

In den nächsten Abschnitten werden wir uns ansehen, wie man beides erstellt. Wir werden ein Raster mit 12 Spalten erstellen — eine sehr häufige Wahl, die als sehr anpassungsfähig für verschiedene Situationen angesehen wird, da 12 schön durch 6, 4, 3 und 2 teilbar ist.

### Ein einfaches Raster mit fester Breite

Lassen Sie uns zunächst ein Rastersystem erstellen, das Spalten mit fester Breite verwendet.

Beginnen Sie damit, eine lokale Kopie unserer Beispiel-Datei [simple-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid.html) zu erstellen, die das folgende Markup im Body enthält.

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

Das Ziel ist es, dies in ein Demonstrationsraster von zwei Reihen auf einem Raster mit zwölf Spalten zu verwandeln — die obere Reihe demonstriert die Größe der einzelnen Spalten, die zweite Reihe einige unterschiedlich große Bereiche auf dem Raster.

![CSS-Raster mit 16 Rasterelementen, die sich über zwölf Spalten und zwei Reihen verteilen. Die obere Reihe hat 12 gleich breite Rasterelemente in 12 Spalten. Die zweite Reihe hat unterschiedlich große Rasterelemente. Element 13 erstreckt sich über 1 Spalte, Element 14 über sechs Spalten, 15 über drei und 16 über zwei.](simple-grid-finished.png)

Im {{htmlelement("style")}}-Element fügen Sie den folgenden Code hinzu, der dem Wrapper-Container eine Breite von 980 Pixeln gibt, mit einem Padding auf der rechten Seite von 20 Pixeln. Dadurch bleiben uns 960 Pixel für unsere Gesamtsäulen-/Rinnenbreiten — in diesem Fall wird das Padding von der Gesamtinhaltbreite subtrahiert, weil wir {{cssxref("box-sizing")}} auf `border-box` für alle Elemente auf der Seite eingestellt haben (siehe [Das alternative CSS-Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model#the_alternative_css_box_model) für weitere Erläuterungen).

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

Verwenden Sie nun den Zeilencontainer, der um jede Rasterreihe gewickelt ist, um eine Reihe von einer anderen zu trennen. Fügen Sie die folgende Regel unter Ihrer vorherigen hinzu:

```css
.row {
  clear: both;
}
```

Durch das Anwenden dieses Clearings müssen wir jede Reihe nicht vollständig mit Elementen füllen, die die vollen zwölf Spalten ausmachen. Die Reihen bleiben getrennt und stören sich nicht gegenseitig.

Die Rinnen zwischen den Spalten sind 20 Pixel breit. Wir erstellen diese Rinnen als einen margin auf der linken Seite jeder Spalte — einschließlich der ersten Spalte, um die 20 Pixel Padding auf der rechten Seite des Containers auszugleichen. Also haben wir insgesamt 12 Rinnen — 12 x 20 = 240.

Wir müssen das von unserer Gesamtbreite von 960 Pixeln abziehen, was uns 720 Pixel für unsere Spalten lässt. Wenn wir das nun durch 12 teilen, wissen wir, dass jede Spalte 60 Pixel breit sein sollte.

Unser nächster Schritt ist es, eine Regel für die Klasse `.col` zu erstellen, in der sie nach links gefloatet, ihr eine {{cssxref("margin-left")}} von 20 Pixeln gegeben wird, um die Rinne zu bilden, und eine {{cssxref("width")}} von 60 Pixeln. Fügen Sie die folgende Regel am Ende Ihres CSS hinzu:

```css
.col {
  float: left;
  margin-left: 20px;
  width: 60px;
  background: rgb(255 150 150);
}
```

Die oberste Reihe einzelner Spalten wird sich nun ordentlich als Raster anordnen.

> [!NOTE]
> Wir haben jeder Spalte auch eine hellrote Farbe gegeben, damit Sie genau sehen können, wie viel Platz jede einnimmt.

Layout-Container, die wir über mehr als eine Spalte spannen möchten, müssen spezielle Klassen erhalten, um ihre {{cssxref("width")}}-Werte an die erforderliche Anzahl von Spalten (plus Rinnen dazwischen) anzupassen. Wir müssen eine zusätzliche Klasse erstellen, damit Container von 2 bis 12 Spalten umfassen können. Jede Breite ergibt sich aus der Addition der Spaltenbreite jener Anzahl Spalten plus der Rinnenbreiten, die immer um eine weniger als die Anzahl der Spalten beträgt.

Fügen Sie Folgendes am Ende Ihres CSS hinzu:

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

Mit diesen Klassen erstellt, können wir nun unterschiedlich breite Spalten auf dem Raster anordnen. Versuchen Sie, die Seite zu speichern und im Browser zu laden, um die Effekte zu sehen.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das obige Beispiel zum Laufen zu bringen, versuchen Sie, es mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid-finished.html) auf GitHub zu vergleichen ([sie live sehen](https://mdn.github.io/learning-area/css/css-layout/grids/simple-grid-finished.html) auch).

Versuchen Sie, die Klassen an Ihren Elementen zu ändern oder sogar einige Container hinzuzufügen und zu entfernen, um zu sehen, wie Sie das Layout variieren können. Beispielsweise könnten Sie die zweite Reihe so aussehen lassen:

```html
<div class="row">
  <div class="col span8">13</div>
  <div class="col span4">14</div>
</div>
```

Jetzt haben Sie ein funktionierendes Rastersystem entwickelt, Sie können die Reihen und die Anzahl der Spalten in jeder Reihe definieren und dann jeden Container mit dem gewünschten Inhalt füllen. Großartig!

### Ein flüssiges Raster erstellen

Unser Raster funktioniert gut, aber es hat eine feste Breite. Wir möchten wirklich ein flexibles (flüssiges) Raster, das mit dem verfügbaren Platz im Browser-[Viewport](/de/docs/Glossary/viewport) wächst und schrumpft. Dazu können wir die Referenz-Pixelbreiten in Prozentsätze umwandeln.

Die Gleichung, die eine feste Breite in eine flexible, auf Prozentsätzen basierende Breite umwandelt, ist wie folgt.

```plain
target / context = result
```

Für unsere Spaltenbreite ist unsere **Ziellänge** 60 Pixel und unser **Kontext** ist der 960 Pixel breite Wrapper. Wir können das Folgende verwenden, um einen Prozentsatz zu berechnen.

```plain
60 / 960 = 0.0625
```

Wir bewegen dann den Dezimalpunkt 2 Stellen, was uns einen Prozentsatz von 6,25% gibt. In unserem CSS können wir die 60 Pixel Spaltenbreite durch 6,25% ersetzen.

Wir müssen dasselbe mit unserer Rinnenbreite tun:

```plain
20 / 960 = 0.02083333333
```

Also müssen wir die 20 Pixel {{cssxref("margin-left")}} auf unserer `.col` Regel und das 20 Pixel {{cssxref("padding-right")}} auf `.wrapper` durch 2,08333333% ersetzen.

#### Aktualisierung unseres Rasters

Um diesen Abschnitt zu beginnen, machen Sie eine neue Kopie Ihrer vorherigen Beispielseite oder machen Sie eine lokale Kopie unseres [simple-grid-finished.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid-finished.html) Codes, um ihn als Ausgangspunkt zu verwenden.

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

Wir haben ihm nicht nur eine Prozent-{{cssxref("width")}} gegeben, sondern wir haben auch eine {{cssxref("max-width")}}-Eigenschaft hinzugefügt, um zu verhindern, dass das Layout zu breit wird.

Aktualisieren Sie als nächstes die vierte CSS-Regel (mit dem `.col`-Selektor) so:

```css
.col {
  float: left;
  margin-left: 2.08333333%;
  width: 6.25%;
  background: rgb(255 150 150);
}
```

Nun kommt der etwas mühsamere Teil — wir müssen all unsere `.col.span`-Regeln aktualisieren, um Prozentangaben anstelle von Pixelbreiten zu verwenden. Das braucht ein bisschen Zeit mit dem Taschenrechner; um Ihnen ein wenig Mühe zu ersparen, haben wir es unten für Sie getan.

Aktualisieren Sie den unteren Block der CSS-Regeln mit dem Folgenden:

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

Speichern Sie nun Ihren Code, laden Sie ihn in einem Browser und versuchen Sie, die Viewport-Breite zu ändern — Sie sollten sehen, dass die Spaltenbreiten sich passend anpassen.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das obige Beispiel zum Laufen zu bringen, versuchen Sie, es mit unserer [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid.html) zu vergleichen ([sie live sehen](https://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid.html) auch).

### Einfachere Berechnungen mit der calc()-Funktion

Sie könnten die {{cssxref("calc", "calc()")}}-Funktion verwenden, um die Berechnungen direkt in Ihrem CSS durchzuführen — dies erlaubt es Ihnen, einfache mathematische Gleichungen in Ihre CSS-Werte einzufügen, um zu berechnen, was ein Wert sein sollte. Es ist besonders nützlich, wenn komplexe Berechnungen durchzuführen sind, und Sie können sogar eine Berechnung berechnen, die verschiedene Einheiten verwendet, zum Beispiel "Ich möchte, dass die Höhe dieses Elements immer 100% der Höhe seines Elternelements ist, minus 50px". Siehe [diese Beispiel aus einem MediaStream Recording API Tutorial](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API#keeping_the_interface_constrained_to_the_viewport_regardless_of_device_height_with_calc).

Zurück zu unseren Rastern! Jede Spalte, die mehr als eine Spalte unseres Rasters überspannt, hat eine Gesamtbreite von 6,25% multipliziert mit der Anzahl der überspannten Spalten plus 2,08333333% multipliziert mit der Anzahl der Rinnen (die immer die Anzahl der Spalten minus 1 betragen). Die Funktion `calc()` erlaubt uns, diese Berechnung direkt innerhalb des width-Wertes durchzuführen, so dass wir für jedes Element, das 4 Spalten umspannt, zum Beispiel folgendes tun können:

```css
.col.span4 {
  width: calc((6.25% * 4) + (2.08333333% * 3));
}
```

Versuchen Sie, Ihren unteren Block von Regeln durch das Folgende zu ersetzen, und laden Sie sie dann im Browser, um zu sehen, ob Sie das gleiche Ergebnis erhalten:

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
> Sie können unsere fertige Version in [fluid-grid-calc.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid-calc.html) sehen (auch [sie live sehen](https://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid-calc.html)).

### Semantische versus "unsemantische" Rastersysteme

Das Hinzufügen von Klassen zu Ihrem Markup zur Definition des Layouts bedeutet, dass Ihr Inhalt und Ihr Markup an Ihre visuelle Präsentation gebunden werden. Manchmal hört man diese Verwendung von CSS-Klassen als "unsemantisch" beschrieben — sie beschreibt, wie der Inhalt aussieht — im Gegensatz zu einem semantischen Gebrauch von Klassen, der den Inhalt beschreibt. Dies ist der Fall bei unseren `span2`, `span3`, etc., Klassen.

Das sind nicht die einzigen Ansätze. Sie könnten stattdessen über Ihr Raster entscheiden und dann die Größendaten zu den Regeln für vorhandene semantische Klassen hinzufügen. Wenn Sie zum Beispiel ein {{htmlelement("div")}} mit einer `content`-Klasse haben, das Sie über 8 Spalten spannen möchten, könnten Sie den Wert width von der `span8`-Klasse übernehmen und Ihnen eine Regel wie so geben:

```css
.content {
  width: calc((6.25% * 8) + (2.08333333% * 7));
}
```

> [!NOTE]
> Wenn Sie einen Präprozessor wie [Sass](https://sass-lang.com/) verwenden würden, könnten Sie ein einfaches Mixin erstellen, um diesen Wert für Sie einzufügen.

### Aktivieren von Offset-Containern in unserem Raster

Das Raster, das wir erstellt haben, funktioniert gut, solange wir alle Container möchte mit der linken Seite des Rasters abschließen. Wenn wir eine leere Spaltenbreite vor dem ersten Container — oder zwischen Containern — lassen möchten, müssten wir eine Offset-Klasse erstellen, um einen linken Rand zu unserem Standort hinzuzufügen, um ihn visuell über das Raster zu schieben. Mehr Mathematik!

Versuchen wir das aus.

Beginnen Sie mit Ihrem vorherigen Code oder verwenden Sie unsere [fluid-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid.html) Datei als Ausgangspunkt.

Lassen Sie uns eine Klasse in unserem CSS erstellen, die ein Containerelement um einen Spaltenbreite versetzt. Fügen Sie das Folgende am Ende Ihres CSS hinzu:

```css
.offset-by-one {
  margin-left: calc(6.25% + (2.08333333% * 2));
}
```

Oder wenn es Ihnen lieber ist, die Prozentsätze selbst zu berechnen, verwenden Sie diese:

```css
.offset-by-one {
  margin-left: 10.41666666%;
}
```

Sie können diese Klasse nun jedem Container hinzufügen, den Sie eine ein Spaltenbreite leeren Raum auf der linken Seite von möchten. Beispielsweise, wenn Sie dies in Ihrem HTML haben:

```html
<div class="col span6">14</div>
```

Versuchen Sie, es damit zu ersetzen

```html
<div class="col span5 offset-by-one">14</div>
```

> [!NOTE]
> Beachten Sie, dass Sie die Anzahl der Spalten reduzieren müssen, die gespannt angekündigt sind, um Platz für den Versatz zu schaffen!

Versuchen Sie, zu laden und zu aktualisieren, um den Unterschied zu sehen, oder sehen Sie sich unser [fluid-grid-offset.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid-offset.html) Beispiel an (sehen Sie es auch [live laufen](https://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid-offset.html)). Das fertige Beispiel sollte so aussehen:

![Das Raster hat 2 Reihen. Die erste Reihe hat 12 gleich breite Rasterelemente und die zweite Reihe hat 4 Elemente unterschiedlicher Breite. Element 13 umspannt 1 Spalte, Element 14 umspannt fünf Spalten, 15 umspannt drei und 16 umspannt zwei. Element 14 hat die Klasse 'offset-by-one' angewendet, was bedeutet, dass es in der 3. Spalte beginnt, nicht in der zweiten, sodass in der zweiten Reihe der zweiten Spalte ein ein Spaltenbreite leer Raum verbleibt.](offset-grid-finished.png)

> [!NOTE]
> Als zusätzliche Übung, können Sie eine `offset-by-two` Klasse implementieren?

### Begrenzungen von gefloateten Rastern

Bei der Verwendung eines solchen Systems müssen Sie darauf achten, dass Ihre Gesamtbreite korrekt addiert wird, und dass Sie keine Elemente in eine Reihe hinzufügen, die mehr Spalten als die Reihe enthalten, kann nicht enthalten werden. Aufgrund der Funktionsweise von Floats, wenn die Anzahl der Raster wird zu breit für das Raster, werden die Elemente am Ende auf die nächste Zeile fallen, das Raster brechen.

Bedenken Sie auch, dass wenn der Inhalt der Elemente breiter als die Reihen, die sie belegen, wird er überlaufen und sieht unordentlich aus.

Die größte Begrenzung dieses Systems ist, dass es im Wesentlichen eindimensional ist. Wir beschäftigen uns mit Spalten und Elementen, die Spalten überspannen, jedoch nicht mit Reihen. Mit diesen älteren Layoutmethoden ist es sehr schwierig, die Höhe von Elementen zu kontrollieren, ohne explizit eine Höhe festzulegen, und dies ist auch ein sehr unflexibler Ansatz — es funktioniert nur, wenn Sie garantieren können, dass Ihr Inhalt eine bestimmte Höhe haben wird.

## Flexbox-Raster?

Wenn Sie unseren vorherigen Artikel über [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) gelesen haben, könnten Sie denken, dass Flexbox die ideale Lösung für die Erstellung eines Rastersystems ist. Es gibt viele Flexbox-basierte Rastersysteme und Flexbox kann viele der Probleme lösen, die wir bereits entdeckt haben, als wir unser Raster erstellt haben.

Allerdings wurde Flexbox nie als Rastersystem entworfen und stellt eine neue Reihe von Herausforderungen dar, wenn es als solches verwendet wird. Als einfaches Beispiel können wir das gleiche Beispiel-Markup verwenden, das wir oben benutzt haben, und das folgende CSS verwenden, um die `wrapper`, `row`, und `col` Klassen zu stylen:

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

Sie können diese Ersetzungen in Ihrem Beispiel machen oder unseren [flexbox-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/flexbox-grid.html) Beispielcode ansehen (sehen Sie es auch [live laufen](https://mdn.github.io/learning-area/css/css-layout/grids/flexbox-grid.html)).

Hier machen wir jede Reihe zu einem Flexcontainer. Mit einem Flexbox-basierten Raster brauchen wir immer noch Reihen, um uns zu ermöglichen, Elemente zu haben, die sich auf weniger als 100% addieren. Wir setzen diesen Container auf `display: flex`.

Auf `.col` setzen wir den ersten Wert der {{cssxref("flex")}}-Eigenschaft ({{cssxref("flex-grow")}}) auf 1, damit unsere Elemente wachsen können, den zweiten Wert ({{cssxref("flex-shrink")}}) auf 1, damit die Elemente schrumpfen können, und den dritten Wert ({{cssxref("flex-basis")}}) auf `auto`. Da unser Element eine {{cssxref("width")}} hat, wird `auto` diese Breite als flex-basis-Wert verwenden.

Auf der oberen Linie erhalten wir zwölf ordentliche Boxen auf dem Raster und sie wachsen und schrumpfen gleichmäßig, wenn wir die Viewport-Breite ändern. Auf der nächsten Linie haben wir jedoch nur vier Elemente und diese wachsen und schrumpfen ebenfalls von dieser 60px-Basis. Mit nur vier von ihnen können sie deutlich mehr wachsen als die Elemente in der oberen Zeile, das Ergebnis ist, dass sie alle die gleiche Breite in der zweiten Zeile belegen.

![Das Raster hat zwei Reihen. Jede Zeile ist ein Flexcontainer. Die erste Zeile hat zwölf gleich breit Flexelemente. Die zweite Zeile hat vier gleich breit Flexelemente.](flexbox-grid-incomplete.png)

Um dies zu beheben, müssen wir immer noch unsere `span`-Klassen hinzufügen, um eine Breite bereitzustellen, die den für dieses Element verwendeten Wert von `flex-basis` ersetzt.

Sie respektieren auch nicht das Raster, das von den darüber liegenden Elementen verwendet wird, weil sie nichts darüber wissen.

Flexbox ist **eindimensional** im Design. Es befasst sich mit einer einzigen Dimension, die einer Zeile oder Spalte. Wir können kein striktes Raster für Spalten und Zeilen erstellen, was bedeutet, dass wir, wenn wir Flexbox für unser Raster verwenden, immer noch Prozentberechnungen durchführen müssen, wie beim gefloateten Layout.

In Ihrem Projekt könnten Sie dennoch ein Flexbox-"Raster" wählen, aufgrund der zusätzlichen Ausrichtungs- und Raumverteilungsmöglichkeiten, die Flexbox im Vergleich zu Floats bietet. Sie sollten sich jedoch bewusst sein, dass Sie immer noch ein Werkzeug für etwas verwenden, wofür es nicht entworfen wurde. Also, es kann Ihnen vorkommen, als würden Sie zusätzliche Hürden überwinden, um das gewünschte Endergebnis zu erzielen.

## Drittanbieter-Rastersysteme

Nachdem wir nun die Mathematik hinter unseren Rasterberechnungen verstehen, sind wir in einer guten Position, um einige der in der Praxis häufig verwendeten Drittanbieter-Rastersysteme zu betrachten. Wenn Sie im Web nach "CSS-Grid-Framework" suchen, finden Sie eine riesige Liste von Optionen, aus denen Sie wählen können. Beliebte Frameworks wie [Bootstrap](https://getbootstrap.com/) und [Foundation](https://get.foundation/) beinhalten ein Rastersystem. Es gibt auch eigenständige Rastersysteme, die entweder mit CSS oder unter Verwendung von Präprozessoren entwickelt wurden.

Lassen Sie uns eines dieser eigenständigen Systeme betrachten, da es gängige Techniken für die Arbeit mit einem Raster-Framework demonstriert. Das Raster, das wir verwenden werden, ist Teil von Skeleton, einem einfachen CSS-Framework.

Um zu beginnen, besuchen Sie die [Skeleton-Website](http://getskeleton.com/) und wählen Sie "Download", um die ZIP-Datei herunterzuladen. Entpacken Sie diese Datei und kopieren Sie die Dateien skeleton.css und normalize.css in ein neues Verzeichnis.

Machen Sie eine Kopie unserer [html-skeleton.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/html-skeleton.html)-Datei und speichern Sie sie im gleichen Verzeichnis wie das Skeleton und die Normalize CSS.

Fügen Sie das Skeleton und Normalize CSS in die HTML-Seite ein, indem Sie dem Kopf Folgendes hinzufügen:

```html
<link href="normalize.css" rel="stylesheet" />
<link href="skeleton.css" rel="stylesheet" />
```

Skeleton beinhaltet mehr als ein Rastersystem — es enthält auch CSS für Typografie und andere Seitenelemente, die Sie als Ausgangspunkt verwenden können. Wir werden diese zunächst auf den Standardeinstellungen lassen, da uns hier wirklich das Raster interessiert.

> **Hinweis:** [Normalize](https://necolas.github.io/normalize.css/) ist eine wirklich nützliche kleine CSS-Bibliothek, geschrieben von Nicolas Gallagher, die automatisch einige nützliche grundlegende Layoutkorrekturen vornimmt und das Standard-Element-Styling über Browser hinweg konsistenter macht.

Wir werden ein ähnliches HTML wie in unserem früheren Beispiel verwenden. Fügen Sie das Folgende in Ihren HTML-Body ein:

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

Um mit der Verwendung von Skeleton zu beginnen, müssen wir dem Wrapper-{{htmlelement("div")}} die Klasse `container` geben — dies ist bereits in unserem HTML enthalten. Dies zentriert den Inhalt mit einer maximalen Breite von 960 Pixeln. Sie können sehen, wie die Boxen jetzt nie breiter als 960 Pixel werden.

Sie können im skeleton.css nachsehen, welches CSS verwendet wird, wenn wir diese Klasse anwenden. Das `<div>` wird mit `auto`-Links- und Rechtsmargen zentriert, und ein Padding von 20 Pixeln wird links und rechts angewendet. Skeleton setzt auch die {{cssxref("box-sizing")}}-Eigenschaft auf `border-box`, wie wir es früher gemacht haben, sodass das Padding und die Ränder dieses Elements in die Gesamtbreite einbezogen werden.

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

Elemente können nur Teil des Rasters sein, wenn sie innerhalb einer Reihe sind, also wie in unserem früheren Beispiel benötigen wir ein zusätzliches `<div>` oder ein anderes Element mit einer Klasse von `row`, die zwischen den Inhalts-`<div>`-Elementen und dem `container`-`<div>` genestet sind. Wir haben dies bereits ebenfalls getan.

Lassen Sie uns nun die Container-Boxen layouten. Skeleton basiert auf einem 12-Spalten-Raster. Die Boxen in der obersten Zeile benötigen alle Klassen von `one column`, um eine Spalte zu überspannen.

Fügen Sie diese jetzt hinzu, wie im folgenden Snippet gezeigt:

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

Als nächstes geben Sie den Containern in der zweiten Zeile Klassen, die angeben, wie viele Spalten sie überspannen sollen, so:

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
> Wenn Sie Schwierigkeiten haben, dieses Beispiel zum Laufen zu bringen, versuchen Sie, das Fenster, in dem Sie es anzeigen, zu erweitern (das Raster wird nicht wie hier beschrieben angezeigt, wenn das Fenster zu schmal ist). Wenn das nicht funktioniert, versuchen Sie, es mit unserer [html-skeleton-finished.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/html-skeleton-finished.html) Datei zu vergleichen (sehen Sie es auch [live laufen](https://mdn.github.io/learning-area/css/css-layout/grids/html-skeleton-finished.html)).

Wenn Sie sich im skeleton.css umsehen, können Sie sehen, wie das funktioniert. Zum Beispiel hat Skeleton die folgenden Definitionen, um Elemente mit "drei columns" Klassen zu stylen, die zu ihnen hinzugefügt wurden.

```css
.three.columns {
  width: 22%;
}
```

Alles, was Skeleton (oder ein anderes Raster-Framework) macht, ist, vordefinierte Klasse bereitzustellen, die Sie verwenden können, indem Sie sie Ihrem Markup hinzufügen. Es ist genau das gleiche, als ob Sie die Arbeit geleistet hätten, diese Prozentsätze selbst zu berechnen.

Wie Sie sehen, müssen wir beim Einsatz von Skeleton nur sehr wenig CSS schreiben. Es erledigt all das Floaten für uns, wenn wir Klassen zu unserem Markup hinzufügen. Es ist diese Fähigkeit, die Verantwortung für das Layout an etwas anderes zu übergeben, was die Verwendung eines Frameworks für ein Rastersystem zu einer überzeugende Wahl gemacht hat! Heutzutage aber, mit CSS Grid Layout, bewegen sich viele Entwickler von diesen Frameworks weg, um das eingebaute native Raster zu verwenden, das CSS bereitstellt.

## Zusammenfassung

Sie verstehen nun, wie verschiedene Rastersysteme erstellt werden, was nützlich sein wird, um mit älteren Seiten zu arbeiten und den Unterschied zwischen dem nativen Raster des CSS Grid Layouts und diesen älteren Systemen zu verstehen.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}
