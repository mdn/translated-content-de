---
title: Legacy-Layout-Methoden
slug: Learn/CSS/CSS_layout/Legacy_Layout_Methods
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}

Gridsysteme sind eine sehr häufig verwendete Funktion in CSS-Layouts, und bevor es das CSS-Grid-Layout gab, wurden sie tendenziell mit Floats oder anderen Layout-Funktionen implementiert. Sie stellen sich Ihr Layout als eine bestimmte Anzahl von Spalten vor (z. B. 4, 6 oder 12) und passen dann Ihre Inhaltskolonnen in diese imaginären Kolonnen. In diesem Artikel werden wir untersuchen, wie diese älteren Methoden funktionieren, damit Sie verstehen, wie sie verwendet wurden, falls Sie an einem älteren Projekt arbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a> und
        <a href="/de/docs/Learn/CSS/Building_blocks">Styling von Boxen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die grundlegenden Konzepte hinter den Gridsystemen zu verstehen, die vor der Verfügbarkeit von CSS-Grid-Layout in Browsern verwendet wurden.
      </td>
    </tr>
  </tbody>
</table>

## Layout und Gridsysteme vor dem CSS-Grid-Layout

Es mag für jemanden mit Design-Hintergrund überraschend erscheinen, dass CSS bis vor kurzem kein eingebautes Gridsystem hatte und wir stattdessen eine Vielzahl suboptimaler Methoden verwendeten, um gridartige Designs zu erstellen. Wir bezeichnen diese jetzt als "Legacy"-Methoden.

Für neue Projekte wird in den meisten Fällen das CSS-Grid-Layout in Kombination mit einer oder mehreren anderen modernen Layout-Methoden als Grundlage für jedes Layout verwendet. Sie werden jedoch von Zeit zu Zeit auf "Gridsysteme" stoßen, die diese älteren Methoden verwenden. Es lohnt sich zu verstehen, wie sie funktionieren und warum sie sich vom CSS-Grid-Layout unterscheiden.

Diese Lektion erklärt, wie Gridsysteme und Grid-Frameworks basierend auf Floats und Flexbox funktionieren. Nachdem Sie das Grid-Layout studiert haben, werden Sie wahrscheinlich überrascht sein, wie kompliziert das alles scheint! Dieses Wissen wird Ihnen helfen, wenn Sie Fallback-Code für Browser erstellen müssen, die neuere Methoden nicht unterstützen, oder wenn Sie an bestehenden Projekten arbeiten, die diese Arten von Systemen verwenden.

Es ist wichtig, zu beachten, dass keiner dieser Systeme tatsächlich ein Raster in der Weise erstellt, wie es das CSS-Grid-Layout tut. Sie arbeiten, indem sie Elementen eine Größe geben und sie so schieben, dass sie wie ein Raster aussehen.

## Ein zweispaltiges Layout

Lassen Sie uns mit dem einfachsten möglichen Beispiel beginnen — einem zweispaltigen Layout. Sie können das Beispiel nachvollziehen, indem Sie eine neue `index.html`-Datei auf Ihrem Computer erstellen, sie mit einer [einfache HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) füllen und den folgenden Code an den entsprechenden Stellen einfügen. Am Ende des Abschnitts können Sie ein Live-Beispiel dessen sehen, wie der endgültige Code aussehen sollte.

Zuerst benötigen wir einige Inhalte, die wir in unsere Kolonnen einfügen. Ersetzen Sie den derzeitigen Inhalt im Body durch Folgendes:

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

Jede der Kolonnen benötigt ein äußeres Element, um ihren Inhalt zu enthalten und es uns zu ermöglichen, alles auf einmal zu manipulieren. In diesem Beispiel haben wir uns für `{{htmlelement("div")}}`s entschieden, aber Sie könnten auch etwas Semantisch Passenderes wählen, wie `{{htmlelement("article")}}`s, `{{htmlelement("section")}}`s und `{{htmlelement("aside")}}`, oder was auch immer.

Nun zum CSS. Zuerst einmal wenden Sie Folgendes an Ihrem HTML an, um einige grundlegende Einstellungen vorzunehmen:

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}
```

Der Body wird 90% der Viewport-Breite sein, bis er 900px Breite erreicht, in diesem Fall bleibt er auf dieser Breite fixiert und zentriert sich im Viewport. Standardmäßig nehmen seine Kinder (der `{{htmlelement("Heading_Elements", "h1")}}` und die beiden `{{htmlelement("div")}}`s) 100% der Breite des Bodys ein. Wenn wir möchten, dass die beiden `{{htmlelement("div")}}`s nebeneinander floated sind, müssen wir ihre Breiten so setzen, dass sie zusammen maximal 100% oder weniger der Breite ihres übergeordneten Elements betragen, damit sie nebeneinander passen. Fügen Sie Folgendes am Ende Ihres CSS hinzu:

```css
div:nth-of-type(1) {
  width: 48%;
}

div:nth-of-type(2) {
  width: 48%;
}
```

Wir haben hier beide auf 48% der Breite ihres übergeordneten Elements gesetzt — das ergibt insgesamt 96%, sodass 4% übrig bleiben, die als Abstand zwischen den beiden Kolonnen dienen, um dem Inhalt etwas Raum zum Atmen zu geben. Nun müssen wir nur noch die Kolonnen floaten, wie folgt:

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

Wenn Sie alles zusammenfügen, sollte das Ergebnis so aussehen:

{{ EmbedLiveSample('A_two_column_layout', '100%', 520) }}

Sie werden hier bemerken, dass wir Prozentsätze für alle Breiten verwenden — dies ist eine ziemlich gute Strategie, da sie ein **liquides Layout** erstellt, das sich an verschiedene Bildschirmgrößen anpasst und die gleichen Proportionen für die Kolonnenbreiten bei kleineren Bildschirmgrößen beibehält. Versuchen Sie, die Breite Ihres Browserfensters anzupassen, um es selbst zu sehen. Dies ist ein wertvolles Werkzeug für responsives Webdesign.

> [!NOTE]
> Sie können dieses Beispiel unter [0_two-column-layout.html](https://mdn.github.io/learning-area/css/css-layout/floats/0_two-column-layout.html) laufen sehen (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/floats/0_two-column-layout.html)).

## Erstellen einfacher Legacy-Grid-Frameworks

Die Mehrheit der Legacy-Frameworks nutzt das Verhalten der `{{cssxref("float")}}`-Eigenschaft, um eine Kolonne neben der anderen schweben zu lassen, um etwas zu schaffen, das wie ein Raster aussieht. Den Prozess durchzugehen, ein Raster mit Floats zu erstellen, zeigt Ihnen, wie dies funktioniert und führt auch einige fortgeschrittenere Konzepte ein, um auf den Dingen aufzubauen, die Sie in der Lektion über [Floats und Clearing](/de/docs/Learn/CSS/CSS_layout/Floats) gelernt haben.

Der einfachste Typ eines Grid-Frameworks, das zu erstellen ist, ist ein festbreitiges — wir müssen nur herausfinden, wie viel Gesamtbreite unser Design haben soll, wie viele Kolonnen wir möchten und wie breit die Abstände und Kolonnen sein sollen. Wenn wir stattdessen entscheiden, unser Design auf einem Raster mit Kolonnen zu layouten, die entsprechend der Browserbreite wachsen und schrumpfen, müssten wir Prozentbreiten für die Kolonnen und Abstände zwischen ihnen berechnen.

In den nächsten Abschnitten werden wir uns ansehen, wie man beides erstellt. Wir werden ein 12-Kolonnen-Raster erstellen — eine sehr häufige Wahl, die als sehr anpassungsfähig an unterschiedliche Situationen angesehen wird, da 12 sich gut durch 6, 4, 3 und 2 teilen lässt.

### Ein einfaches festbreites Raster

Lassen Sie uns zuerst ein Gridsystem erstellen, das festbreite Kolonnen verwendet.

Fangen Sie an, indem Sie eine lokale Kopie unserer Beispieldatei [simple-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid.html) erstellen, die den folgenden Markup-Inhalt im Body enthält.

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

Das Ziel ist es, dies in ein Demonstrationsgitter von zwei Reihen auf einem zwölfspaltigen Raster zu verwandeln — die obere Reihe zeigt die Größe der einzelnen Kolonnen, die zweite Reihe einige unterschiedlich große Bereiche auf dem Raster.

![CSS-Grid mit 16 Gitterelementen, die sich über zwölf Spalten und zwei Reihen erstrecken. Die oberste Reihe hat 12 gleichbreite Gitterelemente in 12 Spalten. Die zweite Reihe hat unterschiedlich große Gitterelemente. Element 13 erstreckt sich über 1 Spalte, Element 14 über sechs Spalten, 15 erstreckt sich über drei, und 16 über zwei.](simple-grid-finished.png)

Fügen Sie im `{{htmlelement("style")}}`-Element den folgenden Code hinzu, der dem Wrapper-Container eine Breite von 980 Pixeln gibt, mit einem Padding auf der rechten Seite von 20 Pixeln. Dies lässt uns 960 Pixel für unsere gesamten Kolonnen-/Abstandbreiten — in diesem Fall wird das Padding von der gesamten Inhaltsbreite abgezogen, weil wir `{{cssxref("box-sizing")}}` auf `border-box` für alle Elemente auf der Seite gesetzt haben (siehe [Das alternative CSS-Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model#the_alternative_css_box_model) für eine genauere Erklärung).

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

Verwenden Sie nun den Reihencontainer, der um jede Reihe des Rasters gewickelt ist, um eine Reihe von der anderen zu trennen. Fügen Sie die folgende Regel unter Ihrer vorherigen hinzu:

```css
.row {
  clear: both;
}
```

Die Anwendung dieses Clearings bedeutet, dass wir nicht jede Reihe mit Elementen, die alle zwölf Spalten ausfüllen, vollständig füllen müssen. Die Reihen bleiben getrennt und beeinflussen sich nicht gegenseitig.

Die Abstände zwischen den Kolonnen sind 20 Pixel breit. Wir schaffen diese Abstände als einen Rand auf der linken Seite jeder Kolonne — einschließlich der ersten Kolonne, um die 20 Pixel Padding auf der rechten Seite des Containers auszugleichen. So haben wir insgesamt 12 Abstände — 12 x 20 = 240.

Wir müssen dies von unserer Gesamtbreite von 960 Pixeln abziehen, was uns 720 Pixel für unsere Kolonnen ergibt. Wenn wir dies nun durch 12 teilen, wissen wir, dass jede Kolonne 60 Pixel breit sein sollte.

Unser nächster Schritt ist es, eine Regel für die Klasse `.col` zu erstellen, sie links floaten zu lassen, ihr einen `{{cssxref("margin-left")}}` von 20 Pixeln zu geben, um den Abstand zu bilden, und eine Breite von 60 Pixeln. Fügen Sie die folgende Regel am Ende Ihres CSS hinzu:

```css
.col {
  float: left;
  margin-left: 20px;
  width: 60px;
  background: rgb(255 150 150);
}
```

Die oberste Reihe einzelner Kolonnen wird nun ordentlich als Raster layoutet.

> [!NOTE]
> Wir haben jeder Kolonne auch eine helle rote Farbe gegeben, damit Sie genau sehen können, wie viel Platz jede einnimmt.

Layout-Container, die über mehr als eine Kolonne hinwegspannen sollen, müssen mit speziellen Klassen versehen werden, um ihre `{{cssxref("width")}}`-Werte auf die erforderliche Anzahl von Kolonnen (plus Abständen dazwischen) anzupassen. Wir müssen eine zusätzliche Klasse erstellen, um Container von 2 bis 12 Kolonnen spannen zu lassen. Jede Breite ist das Ergebnis der Addition der Kolonnenbreiten dieser Anzahl von Kolonnen plus der Anzahl der Abstände, die immer um eins weniger ist als die Anzahl der Kolonnen.

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

Mit diesen erstellten Klassen können wir nun unterschiedlich breite Kolonnen auf dem Raster erstellen. Versuchen Sie, die Seite in Ihrem Browser zu speichern und zu laden, um die Effekte zu sehen.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das obige Beispiel zum Laufen zu bringen, vergleichen Sie es mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid-finished.html) auf GitHub (sehen Sie sich auch [das Live-Beispiel](https://mdn.github.io/learning-area/css/css-layout/grids/simple-grid-finished.html) an).

Versuchen Sie, die Klassen auf Ihren Elementen zu ändern oder sogar einige Container hinzuzufügen oder zu entfernen, um zu sehen, wie Sie das Layout variieren können. Zum Beispiel könnten Sie die zweite Reihe so aussehen lassen:

```html
<div class="row">
  <div class="col span8">13</div>
  <div class="col span4">14</div>
</div>
```

Jetzt, da Sie ein Gridsystem arbeiten haben, können Sie die Reihen und die Anzahl der Kolonnen in jeder Reihe definieren und dann jedes Container mit Ihrem benötigten Inhalt füllen. Großartig!

### Erstellen eines fluiden Rasters

Unser Raster funktioniert gut, hat aber eine feste Breite. Wir möchten wirklich ein flexibles (fluides) Raster, das mit dem verfügbaren Platz im Browser [Viewport](/de/docs/Glossary/viewport) wächst und schrumpft. Um dies zu erreichen, können wir die Referenzpixelbreiten in Prozentsätze umwandeln.

Die Gleichung, die eine Festbreite in eine flexible, prozentbasierte umwandelt, ist wie folgt.

```plain
target / context = result
```

Für unsere Kolonnenbreite ist unsere **Zielbreite** 60 Pixel und unser **Kontext** der 960 Pixel Wrapper. Wir können das Folgende verwenden, um einen Prozentsatz zu berechnen.

```plain
60 / 960 = 0.0625
```

Wir verschieben dann das Dezimalzeichen um 2 Stellen und erhalten einen Prozentsatz von 6,25%. Also können wir in unserem CSS die 60 Pixel Kolonnenbreite durch 6,25% ersetzen.

Für unsere Abstandsbreite müssen wir dasselbe tun:

```plain
20 / 960 = 0.02083333333
```

Also müssen wir den `{{cssxref("margin-left")}}` von 20 Pixeln auf unserer `.col`-Regel und den `{{cssxref("padding-right")}}` von 20 Pixeln auf der `.wrapper` mit 2,08333333% ersetzen.

#### Unser Raster aktualisieren

Um in diesem Abschnitt zu starten, erstellen Sie eine neue Kopie Ihrer vorherigen Beispielseite oder erstellen Sie eine lokale Kopie unseres [simple-grid-finished.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid-finished.html) Codes zur Verwendung als Ausgangspunkt.

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

Wir haben ihr nicht nur eine prozentuale `{{cssxref("width")}}` gegeben, sondern auch eine `{{cssxref("max-width")}}` Eigenschaft hinzugefügt, um zu verhindern, dass das Layout zu breit wird.

Aktualisieren Sie als nächstes die vierte CSS-Regel (mit dem `.col`-Selektor) so:

```css
.col {
  float: left;
  margin-left: 2.08333333%;
  width: 6.25%;
  background: rgb(255 150 150);
}
```

Nun kommt der etwas mühsamere Teil — wir müssen alle unsere `.col.span`-Regeln aktualisieren, um Prozentsätze anstelle von Pixelbreiten zu verwenden. Dies benötigt etwas Zeit mit einem Taschenrechner; um Ihnen etwas Mühe zu ersparen, haben wir es Ihnen unten abgenommen.

Aktualisieren Sie den unteren Block von CSS-Regeln mit Folgendem:

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

Speichern Sie nun Ihren Code, laden Sie ihn in einem Browser und versuchen Sie, die Viewport-Breite zu ändern — Sie sollten sehen, wie die Kolonnenbreiten sich schön anpassen.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das obige Beispiel zum Laufen zu bringen, vergleichen Sie es mit unserer [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid.html) (sehen Sie sich auch [das Live-Beispiel](https://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid.html) an).

### Einfachere Berechnungen mit der calc()-Funktion

Sie könnten die `{{cssxref("calc", "calc()")}}`-Funktion benutzen, um die Berechnungen direkt in Ihrem CSS durchzuführen — dies erlaubt es Ihnen, einfache mathematische Gleichungen in Ihre CSS-Werte einzufügen, um zu berechnen, welchen Wert ein Element haben sollte. Es ist besonders nützlich, wenn komplexere Mathematik erforderlich ist, und Sie können sogar eine Berechnung durchführen, die unterschiedliche Einheiten verwendet, zum Beispiel "Ich möchte, dass diese Elemente die Höhe von 100% der Höhe des Elternteils minus 50px haben". Siehe [dieses Beispiel aus einem MediaStream Recording API Tutorial](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API#keeping_the_interface_constrained_to_the_viewport_regardless_of_device_height_with_calc).

Zurück zu unseren Rastern! Jede Kolonne, die sich über mehr als eine Kolonne unseres Rasters erstreckt, hat eine Gesamtbreite von 6,25% multipliziert mit der Anzahl der gespannten Kolonnen plus 2,08333333% multipliziert mit der Anzahl der Abstände (die immer die Anzahl der Kolonnen minus 1 ist). Die `calc()`-Funktion erlaubt uns, diese Berechnung direkt im Wert der Breite durchzuführen, sodass wir dies für jedes Element, das 4 Kolonnen spannt, zum Beispiel so machen können:

```css
.col.span4 {
  width: calc((6.25% * 4) + (2.08333333% * 3));
}
```

Versuchen Sie, Ihren unteren Block von Regeln mit dem Folgenden zu ersetzen, und laden Sie dann den Browser neu, um zu sehen, ob Sie das gleiche Ergebnis erhalten:

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

### Semantische vs. "unsemantische" Gridsysteme

Das Hinzufügen von Klassen zu Ihrem Markup, um Layout zu definieren, bedeutet, dass Ihr Inhalt und das Markup an Ihre visuelle Präsentation gebunden sind. Manchmal wird diese Verwendung von CSS-Klassen als "unsemantisch" bezeichnet — beschreibt, wie der Inhalt aussieht — im Gegensatz zu einer semantischen Verwendung von Klassen, die den Inhalt beschreibt. Dies ist der Fall bei unseren `span2`, `span3` etc.-Klassen.

Dies sind nicht die einzigen Ansätze. Sie könnten stattdessen Ihr Raster entscheiden und dann die Größeninformationen zu den Regeln für Ihre bestehenden semantischen Klassen hinzufügen. Wenn Sie beispielsweise ein `{{htmlelement("div")}}` mit einer Klasse `content` haben, das Sie über 8 Kolonnen spannen möchten, könnten Sie die Breite aus der `span8`-Klasse kopieren, was Ihnen eine Regel wie diese gibt:

```css
.content {
  width: calc((6.25% * 8) + (2.08333333% * 7));
}
```

> [!NOTE]
> Wenn Sie einen Präprozessor wie [Sass](https://sass-lang.com/) verwenden würden, könnten Sie ein einfaches Mixin erstellen, um diesen Wert für Sie einzufügen.

### Ermöglichen von Offset-Containern in unserem Raster

Das Raster, das wir erstellt haben, funktioniert gut, solange wir alle Container bündig mit der linken Seite des Rasters beginnen möchten. Wenn wir einen leeren Spaltenraum vor dem ersten Container — oder zwischen Containern —lassen wollten, müssten wir eine Offset-Klasse erstellen, um unserer Site einen linken Rand hinzuzufügen, um sie visuell über das Raster zu schieben. Mehr Mathematik!

Lassen Sie uns dies ausprobieren.

Verwenden Sie Ihren vorherigen Code, oder verwenden Sie unsere [fluid-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid.html) Datei als Ausgangspunkt.

Lassen Sie uns eine Klasse in unserem CSS erstellen, die ein Containerelement um eine Kolonnenbreite verschiebt. Fügen Sie Folgendes am Ende Ihres CSS hinzu:

```css
.offset-by-one {
  margin-left: calc(6.25% + (2.08333333% * 2));
}
```

Oder wenn Sie es bevorzugen, die Prozentsätze selbst zu berechnen, verwenden Sie diese:

```css
.offset-by-one {
  margin-left: 10.41666666%;
}
```

Sie können diese Klasse jetzt zu jedem Container hinzufügen, bei dem Sie auf der linken Seite einen einspaltigen leeren Raum lassen möchten. Wenn Sie beispielsweise Folgendes in Ihrem HTML haben:

```html
<div class="col span6">14</div>
```

Versuchen Sie, ihn durch

```html
<div class="col span5 offset-by-one">14</div>
```

zu ersetzen.

> [!NOTE]
> Beachten Sie, dass Sie die Anzahl der gespannten Kolonen reduzieren müssen, um Platz für das Offset zu schaffen!

Versuchen Sie, die Seite zu laden und neu zu laden, um den Unterschied zu sehen, oder sehen Sie sich unsere [fluid-grid-offset.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid-offset.html) Beispiel an (siehe es [live](https://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid-offset.html) laufend). Das fertige Beispiel sollte so aussehen:

![Das Raster hat 2 Reihen. Die erste Reihe hat 12 Gitterelemente mit gleicher Breite, die zweite Reihe hat 4 Elemente unterschiedlicher Breite. Element 13 erstreckt sich über 1 Spalte, Element 14 über fünf Spalten, 15 über drei und 16 über zwei. Element 14 hat die Klasse „offset-by-one“ angewandt, wodurch es in der 3. Spalte statt der zweiten beginnt und einen einspaltigen leeren Raum in der zweiten Reihe, der zweiten Spalte lässt.](offset-grid-finished.png)

> [!NOTE]
> Können Sie als zusätzliche Übung eine `offset-by-two`-Klasse implementieren?

### Beschränkungen eines gefloateten Rasters

Bei der Verwendung eines solchen Systems müssen Sie darauf achten, dass Ihre Gesamtaussagen korrekt addiert werden und dass Sie keine Elemente in einer Zeile verwenden, die mehr Spalten enthalten, als die Zeile enthalten kann. Aufgrund der Funktionsweise von Floats, wenn die Anzahl der Rasterspalten zu breit für das Raster wird, fallen die Elemente am Ende auf die nächste Zeile und brechen das Raster.

Bedenken Sie auch, dass wenn der Inhalt der Elemente breiter als die Reihen wird, die sie belegen, es überläuft und chaotisch aussieht.

Die größte Einschränkung dieses Systems ist, dass es im Wesentlichen eindimensional ist. Wir befassen uns mit Spalten und Elementen, die über Spalten hinwegspannen, aber nicht mit Reihen. Es ist sehr schwierig, mit diesen älteren Layoutmethoden die Höhe der Elemente zu kontrollieren, ohne ausdrücklich eine Höhe festzulegen, was auch ein sehr unflexibler Ansatz ist — es funktioniert nur, wenn Sie garantieren können, dass Ihr Inhalt eine bestimmte Höhe hat.

## Flexbox-Raster?

Wenn Sie unseren vorherigen Artikel über [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) gelesen haben, mögen Sie denken, dass Flexbox die ideale Lösung zum Erstellen eines Gridsystems ist. Es gibt viele flexboxbasierte Gridsysteme und Flexbox kann viele der bereits entdeckten Probleme lösen, wenn wir unser oben erstelltes Raster betrachten.

Flexbox wurde jedoch nie als ein Gridsystem entwickelt und stellt ein neues Set von Herausforderungen dar, wenn man es als solches verwendet. Als ein einfaches Beispiel dafür können wir das gleiche Beispielmarkup, das wir oben verwendet haben, übernehmen und das folgende CSS verwenden, um die `wrapper`, `row` und `col` Klassen zu stylen:

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

Sie können versuchen, diese Ersetzungen in Ihrem eigenen Beispiel vorzunehmen oder sich unseren [flexbox-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/flexbox-grid.html) Beispielcode anzusehen (siehe es [live](https://mdn.github.io/learning-area/css/css-layout/grids/flexbox-grid.html) auch).

Hier verwandeln wir jede Zeile in einen Flex-Container. Mit einem auf Flexbox basierenden Raster benötigen wir immer noch Reihen, um uns zu ermöglichen, Elemente zu haben, die zusammen weniger als 100% ergeben. Wir setzen diesen Container auf `display: flex`.

Auf `.col` setzen wir den ersten Wert der `{{cssxref("flex")}}`-Eigenschaft (`{{cssxref("flex-grow")}}`) auf 1, damit unsere Elemente wachsen können, den zweiten Wert (`{{cssxref("flex-shrink")}}`) auf 1, damit die Elemente schrumpfen können, und den dritten Wert (`{{cssxref("flex-basis")}}`) auf `auto`. Da unser Element eine `{{cssxref("width")}}` gesetzt hat, wird `auto` diese Breite als `flex-basis`-Wert verwenden.

In der obersten Zeile erhalten wir zwölf ordentliche Boxen auf dem Raster, die gleichmäßig wachsen und schrumpfen, wenn wir die Viewport-Breite ändern. In der nächsten Zeile haben wir jedoch nur vier Elemente, und diese wachsen und schrumpfen ebenfalls von diesem 60px-Basiswert. Mit nur vier von ihnen können sie viel mehr wachsen als die Elemente in der darüberliegenden Zeile, das Ergebnis ist, dass sie alle die gleiche Breite in der zweiten Zeile einnehmen.

![Das Raster hat zwei Zeilen. Jede Zeile ist ein Flex-Container. Die erste Zeile hat zwölf Flex-Elemente gleicher Breite. Die zweite Zeile hat vier Flex-Elemente mit gleicher Breite.](flexbox-grid-incomplete.png)

Um dies zu beheben, müssen wir immer noch unsere `span`-Klassen einbeziehen, um eine Breite bereitzustellen, die den Wert ersetzt, der für `flex-basis` für dieses Element verwendet wird.

Sie respektieren auch nicht das von den anderen Elementen genutzte Raster, weil sie darüber nichts wissen.

Flexbox ist **eindimensional** von Design her. Es befasst sich mit einer einzigen Dimension, die einer Reihe oder einer Kolonne. Wir können kein striktes Raster für Kolonnen und Reihen erstellen, was bedeutet, dass wenn wir Flexbox für unser Raster verwenden, wir trotzdem Prozentsätze wie im gefloateten Layout berechnen müssen.

In Ihrem Projekt könnten Sie sich trotzdem entscheiden, ein Flexbox-Raster zu verwenden, aufgrund der zusätzlichen Ausrichtungs- und Raumverteilungsmöglichkeiten, die Flexbox gegenüber Floats bietet. Sie sollten jedoch bewusst sein, dass Sie ein Werkzeug für etwas anderes als das verwenden, wofür es entwickelt wurde. So könnten Sie das Gefühl haben, dass es Ihnen zusätzlich schwierige Schritte auferlegt, um das gewünschte Endergebnis zu erzielen.

## Drittherstellersysteme

Nun, da wir die Mathematik hinter unseren Rasterberechnungen verstehen, sind wir in einer guten Lage, uns einige der Drittherstellersysteme anzusehen, die häufig verwendet werden. Wenn Sie nach "CSS-Grid-Framework" im Internet suchen, finden Sie eine riesige Liste an Optionen zur Auswahl. Populäre Frameworks wie [Bootstrap](https://getbootstrap.com/) und [Foundation](https://get.foundation/) enthalten ein Gridsystem. Es gibt auch eigenständige Gridsysteme, die entweder mit CSS entwickelt wurden oder Präprozessoren verwenden.

Werfen wir einen Blick auf eines dieser eigenständigen Systeme, da es häufige Techniken zum Arbeiten mit einem Grid-Framework demonstriert. Das Raster, das wir verwenden werden, ist Teil von Skeleton, einem einfachen CSS-Framework.

Um zu beginnen, besuchen Sie die [Skeleton-Website](http://getskeleton.com/) und wählen Sie "Download", um die ZIP-Datei herunterzuladen. Entpacken Sie diese und kopieren Sie die skeleton.css und normalize.css Dateien in ein neues Verzeichnis.

Machen Sie eine Kopie unserer [html-skeleton.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/html-skeleton.html) Datei und speichern Sie sie im gleichen Verzeichnis wie das Skeleton- und Normalize-CSS.

Binden Sie das Skeleton- und Normalize-CSS in die HTML-Seite ein, indem Sie das Folgende im Kopfbereich hinzufügen:

```html
<link href="normalize.css" rel="stylesheet" />
<link href="skeleton.css" rel="stylesheet" />
```

Skeleton enthält mehr als ein Gridsystem — es enthält auch CSS für Typografie und andere Seitenelemente, die Sie als Ausgangspunkt verwenden können. Wir lassen diese jedoch vorerst auf den Standardeinstellungen — das Raster interessiert uns hier wirklich.

> **Hinweis:** [Normalize](https://necolas.github.io/normalize.css/) ist eine wirklich nützliche kleine CSS-Bibliothek, geschrieben von Nicolas Gallagher, die automatisch einige nützliche grundlegende Layout-Korrekturen vornimmt und das standardmäßige Elementstyling über Browser hinweg konsistenter macht.

Wir werden ähnliches HTML wie in unserem früheren Beispiel verwenden. Fügen Sie das Folgende in den HTML-Body ein:

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

Um mit Skeleton zu beginnen, müssen wir dem Wrapper-{{htmlelement("div")}} eine Klasse `container` geben — dies ist bereits in unserem HTML enthalten. Dies zentriert den Inhalt mit einer maximalen Breite von 960 Pixeln. Sie können sehen, wie die Boxen nun nie breiter als 960 Pixel werden.

Sie können sich die skeleton.css Datei ansehen, um das CSS zu sehen, das verwendet wird, wenn wir diese Klasse anwenden. Das {{htmlelement("div")}} wird mit `auto` linken und rechten Rändern zentriert und es wird ein Padding von 20 Pixeln links und rechts angewendet. Skeleton setzt auch die `{{cssxref("box-sizing")}}` Eigenschaft auf `border-box`, wie wir es zuvor getan haben, so dass Padding und Ränder dieses Elements in die Gesamtbreite eingeschlossen sind.

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

Elemente können nur Teil des Rasters sein, wenn sie sich innerhalb einer Reihe befinden. Wie in unserem früheren Beispiel benötigen wir also ein zusätzliches `{{htmlelement("div")}}` oder ein anderes Element mit einer Klasse `row`, das zwischen den Inhalts-{{htmlelement("div")}}-Elementen und dem Container-{{htmlelement("div")}} verschachtelt ist. Wir haben dies bereits ebenfalls getan.

Lassen Sie uns nun die Container-Boxen layouten. Skeleton basiert auf einem 12-Spalten-Raster. Die Boxen der obersten Zeile benötigen alle Klassen `one column`, um eine Spalte zu überspannen.

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

Geben Sie als Nächstes den Containern in der zweiten Zeile Klassen, die die Anzahl der Spalten erklären, die sie überspannen sollten, so:

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
> Wenn Sie Schwierigkeiten haben, dieses Beispiel zum Laufen zu bringen, versuchen Sie, das Fenster zu verbreitern, in dem Sie es betrachten (das Raster wird nicht so angezeigt, wie hier beschrieben, wenn das Fenster zu schmal ist). Wenn das nicht funktioniert, vergleichen Sie es mit unserer [html-skeleton-finished.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/html-skeleton-finished.html) Datei (sehen Sie es auch [live](https://mdn.github.io/learning-area/css/css-layout/grids/html-skeleton-finished.html) laufen).

Wenn Sie sich die skeleton.css Datei ansehen, können Sie sehen, wie dies funktioniert. Zum Beispiel hat Skeleton das Folgende definiert, um Elemente zu stylen, denen "three columns" Klassen hinzugefügt wurden.

```css
.three.columns {
  width: 22%;
}
```

Alles, was Skeleton (oder jedes andere Grid-Framework) tut, ist, vordefinierte Klassen einzurichten, die Sie verwenden können, indem Sie sie zu Ihrem Markup hinzufügen. Es ist genau das gleiche, als hätten Sie die Arbeit der Berechnung dieser Prozentsätze selbst gemacht.

Wie Sie sehen können, müssen wir sehr wenig CSS schreiben, wenn wir Skeleton verwenden. Es übernimmt die gesamte Floating für uns, wenn wir Klassen zu unserem Markup hinzufügen. Es ist diese Fähigkeit, die Verantwortung für das Layout an etwas anderes abzugeben, die die Verwendung eines Frameworks für ein Gridsystem zu einer überzeugenden Wahl machte! Allerdings bewegen sich heutzutage mit dem CSS-Grid-Layout viele Entwickler von diesen Frameworks weg, um das eingebaute native Raster zu verwenden, das CSS bietet.

## Zusammenfassung

Sie verstehen jetzt, wie verschiedene Gridsysteme erstellt werden, was nützlich sein wird, um mit älteren Websites zu arbeiten und den Unterschied zwischen dem nativen Raster des CSS-Grid-Layouts und diesen älteren Systemen zu verstehen.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}
