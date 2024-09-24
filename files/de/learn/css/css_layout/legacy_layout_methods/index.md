---
title: Veraltete Layoutmethoden
slug: Learn/CSS/CSS_layout/Legacy_Layout_Methods
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}

Gitter-Systeme sind ein sehr häufig genutztes Feature bei CSS-Layouts, und vor dem CSS-Grid-Layout wurden sie in der Regel mit Floats oder anderen Layout-Features implementiert. Sie stellen sich Ihr Layout als eine bestimmte Anzahl von Spalten vor (zum Beispiel 4, 6 oder 12) und passen Ihre Inhaltskolonnen in diese imaginären Spalten ein. In diesem Artikel werden wir untersuchen, wie diese älteren Methoden funktionieren, damit Sie verstehen, wie sie verwendet wurden, falls Sie an einem älteren Projekt arbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) sowie ein Grundverständnis davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a> und
        <a href="/de/docs/Learn/CSS/Building_blocks">Styling-Boxen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis der grundlegenden Konzepte hinter den Gitter-Layouts zu erlangen, die verwendet wurden, bevor CSS-Grid-Layout in Browsern verfügbar war.
      </td>
    </tr>
  </tbody>
</table>

## Layout und Gitter-Systeme vor dem CSS-Grid-Layout

Es mag überraschen, dass CSS für jemanden mit einem Designhintergrund erst kürzlich ein eingebautes Gitter-System erhalten hat, und stattdessen schien es, als würden wir eine Vielfalt an suboptimalen Methoden verwenden, um gitterartige Designs zu erstellen. Heute bezeichnen wir diese als "veraltete" Methoden.

Für neue Projekte wird in den meisten Fällen das CSS-Grid-Layout in Kombination mit einer oder mehreren anderen modernen Layoutmethoden verwendet, um die Basis für jedes Layout zu bilden. Sie werden jedoch von Zeit zu Zeit auf Gitter-Systeme stoßen, die diese veralteten Methoden verwenden. Es ist sinnvoll zu verstehen, wie sie funktionieren und warum sie sich von CSS-Grid-Layout unterscheiden.

Diese Lektion wird erklären, wie Gitter-Systeme und Gitter-Frameworks, die auf Floats und Flexbox basieren, funktionieren. Wenn Sie Grid-Layout studiert haben, wird es Sie wahrscheinlich überraschen, wie kompliziert das alles scheint! Dieses Wissen wird Ihnen helfen, wenn Sie Fallback-Code für Browser erstellen müssen, die neuere Methoden nicht unterstützen, und Ihnen ermöglichen, an bestehenden Projekten zu arbeiten, die diese Arten von Systemen verwenden.

Es ist wichtig zu bedenken, während wir diese Systeme erkunden, dass keines von ihnen tatsächlich ein Gitter in der Art und Weise erstellt, wie es das CSS-Grid-Layout tut. Sie funktionieren, indem sie Elementen eine Größe zuweisen und sie so verschieben, dass sie wie ein Gitter aussehen.

## Ein zweispaltiges Layout

Lassen Sie uns mit dem einfachsten möglichen Beispiel beginnen – einem zweispaltigen Layout. Sie können mitmachen, indem Sie eine neue `index.html`-Datei auf Ihrem Computer erstellen, sie mit einer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) füllen und den folgenden Code an den entsprechenden Stellen einfügen. Am Ende des Abschnitts können Sie eine Live-Version dessen sehen, wie der endgültige Code aussehen sollte.

Zunächst brauchen wir etwas Inhalt, den wir in unsere Spalten einfügen können. Ersetzen Sie das, was sich derzeit im Body befindet, durch Folgendes:

```html
<h1>Beispiel eines zweispaltigen Layouts</h1>
<div>
  <h2>Erste Spalte</h2>
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
  <h2>Zweite Spalte</h2>
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

Jede der Spalten benötigt ein äußeres Element, um ihren Inhalt zu enthalten und um uns zu ermöglichen, alles auf einmal zu manipulieren. In diesem Beispiel haben wir {{htmlelement("div")}}s gewählt, aber Sie könnten etwas Semantischeres wählen, wie zum Beispiel {{htmlelement("article")}}s, {{htmlelement("section")}}s und {{htmlelement("aside")}}, oder was auch immer.

Nun zum CSS. Tragen Sie zunächst das folgende CSS in Ihr HTML-Dokument ein, um ein grundlegendes Setup bereitzustellen:

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}
```

Der Body wird 90% der Breite des Viewports einnehmen, bis er 900px Breite erreicht, woraufhin er auf dieser Breite fixiert und im Viewport zentriert wird. Standardmäßig werden seine Kinder (die {{htmlelement("Heading_Elements", "h1")}} und die beiden {{htmlelement("div")}}s) 100% der Breite des Bodys einnehmen. Wenn wir möchten, dass die beiden {{htmlelement("div")}}s nebeneinander schwebend dargestellt werden, müssen wir ihre Breiten auf insgesamt 100% der Breite ihres Elternelements oder kleiner setzen, damit sie nebeneinander passen. Fügen Sie das Folgende am Ende Ihres CSS hinzu:

```css
div:nth-of-type(1) {
  width: 48%;
}

div:nth-of-type(2) {
  width: 48%;
}
```

Hier haben wir beide auf 48% der Breite ihres Elternteils gesetzt – das ergibt zusammen 96%, sodass uns 4% als Abstand zwischen den beiden Spalten bleiben, was dem Inhalt Raum zum Atmen gibt. Jetzt müssen wir die Spalten folgendermaßen zum Schweben bringen:

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

Alles zusammen ergibt ein Ergebnis wie dieses:

{{ EmbedLiveSample('A_two_column_layout', '100%', 520) }}

Sie werden hier bemerken, dass wir für alle Breiten Prozentangaben verwenden – das ist eine ziemlich gute Strategie, da es ein **flüssiges Layout** erzeugt, das sich an unterschiedliche Bildschirmgrößen anpasst und die gleichen Proportionen für die Spaltenbreiten bei kleineren Bildschirmgrößen beibehält. Versuchen Sie, die Breite Ihres Browserfensters anzupassen und sehen Sie selbst. Dies ist ein wertvolles Werkzeug für das responsive Webdesign.

> [!NOTE]
> Sie können dieses Beispiel unter [0_two-column-layout.html](https://mdn.github.io/learning-area/css/css-layout/floats/0_two-column-layout.html) laufen sehen (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/floats/0_two-column-layout.html)).

## Einfache veraltete Gitter-Frameworks erstellen

Die Mehrheit der veralteten Frameworks verwendet das Verhalten der {{cssxref("float")}}-Eigenschaft, um eine Spalte neben die andere zu stellen, um etwas zu erstellen, das wie ein Gitter aussieht. Den Prozess des Erstellens eines Gitters mit Floats durchzugehen, zeigt Ihnen, wie dies funktioniert, und führt auch einige fortgeschrittenere Konzepte ein, um auf dem Gelernte aus der Lektion über [Floats und Löschen](/de/docs/Learn/CSS/CSS_layout/Floats) aufzubauen.

Die einfachste Art von Gitter-Frameworks, die man erstellen kann, ist ein festes Breitenmaß – wir müssen nur herausfinden, wie groß das Gesamtmaß unseres Designs sein soll, wie viele Spalten wir wollen und wie breit die Abstände und die Spalten sein sollen. Wenn wir uns stattdessen entscheiden, unser Design auf einem Gitter mit Spalten zu layouten, die sich je nach Browserbreite vergrößern und verkleinern, müssten wir prozentuale Breiten für die Spalten und die Zwischenräume zwischen ihnen berechnen.

In den nächsten Abschnitten werden wir uns ansehen, wie man beides erstellt. Wir werden ein 12-Spalten-Gitter erstellen – eine sehr häufige Wahl, die als sehr anpassungsfähig an unterschiedliche Situationen angesehen wird, da 12 durch 6, 4, 3 und 2 gut teilbar ist.

### Ein einfaches festes Breitengitter

Lassen Sie uns zuerst ein Gitter-System erstellen, das feste Breiten für die Spalten verwendet.

Beginnen Sie, indem Sie eine lokale Kopie unserer Beispiel-Datei [simple-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid.html) erstellen, die folgenden Markup im Body enthält:

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

Das Ziel ist es, dies in ein Demonstrationsgitter mit zwei Reihen auf einem zwölfspaltigen Gitter zu verwandeln – die obere Reihe zeigt die Größe der einzelnen Spalten, die zweite Reihe einige unterschiedlich große Bereiche auf dem Gitter.

![CSS-Gitter mit 16 Gitter-Elementen, die sich auf zwölf Spalten und zwei Reihen verteilen. Die obere Reihe hat 12 gleich breite Gitterelemente in 12 Spalten. Die zweite Reihe hat unterschiedlich große Gitterelemente. Element 13 erstreckt sich über 1 Spalte, Element 14 über sechs Spalten, 15 über drei und 16 über zwei.](simple-grid-finished.png)

Im {{htmlelement("style")}}-Element fügen Sie den folgenden Code hinzu, der dem Wrapper-Container eine Breite von 980 Pixel und ein rechter Padding von 20 Pixel zuweist. Dies lässt uns 960 Pixel für unsere Gesamt-Spalten-/Abstandbreiten – in diesem Fall wird das Padding von der Gesamtinhaltsbreite subtrahiert, da wir {{cssxref("box-sizing")}} auf `border-box` für alle Elemente auf der Seite gesetzt haben (siehe [Das alternative CSS-Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model#the_alternative_css_box_model) für eine genauere Erklärung).

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

Jetzt verwenden Sie den Reihen-Container, der um jede Zeile des Gitters gewickelt ist, um eine Zeile von der anderen zu klären. Fügen Sie die folgende Regel unter Ihrer vorherigen Regel hinzu:

```css
.row {
  clear: both;
}
```

Durch das Anwenden dieses Cleavings müssen wir keine vollständige Zeile mit Elementen füllen, die die vollen zwölf Spalten ausmachen. Die Zeilen bleiben getrennt und stören sich nicht gegenseitig.

Die Abstände zwischen den Spalten sind 20 Pixel breit. Wir erstellen diese Abstände als einen Abstand am linken Rand jeder Spalte – einschließlich der ersten Spalte, um die 20 Pixel Padding auf der rechten Seite des Containers auszugleichen. So haben wir insgesamt 12 Abstände – 12 x 20 = 240.

Wir müssen das von unserer Gesamtbreite von 960 Pixeln abziehen, was uns 720 Pixel für unsere Spalten ergibt. Wenn wir das jetzt durch 12 teilen, wissen wir, dass jede Spalte 60 Pixel breit sein sollte.

Unser nächster Schritt ist es, eine Regel für die Klasse `.col` zu erstellen, die sie nach links schwimmen lässt, einen {{cssxref("margin-left")}} von 20 Pixeln festlegt, der den Abstand bildet, und eine {{cssxref("width")}} von 60 Pixeln gibt. Fügen Sie die folgende Regel am Ende Ihres CSS hinzu:

```css
.col {
  float: left;
  margin-left: 20px;
  width: 60px;
  background: rgb(255 150 150);
}
```

Die oberen Einspaltzeilen legen sich jetzt sauber im Gitter aus.

> [!NOTE]
> Wir haben den einzelnen Spalten eine hellrote Farbe gegeben, damit Sie genau sehen können, wie viel Platz jede einnimmt.

Layout-Container, die wir über mehr als eine Spalte erstrecken möchten, müssen spezielle Klassen erhalten, um ihre {{cssxref("width")}} auf die benötigte Anzahl von Spalten (plus Abstände dazwischen) einzustellen. Wir müssen eine zusätzliche Klasse erstellen, um Container zu ermöglichen, die sich über 2 bis 12 Spalten erstrecken. Jede Breite ist das Ergebnis der Addition der Spaltenbreite der gewünschten Anzahl von Spalten plus der Abstandsbreiten, die immer eine weniger als die Anzahl der Spalten sein werden.

Fügen Sie das folgende am Ende Ihres CSS hinzu:

```css
/* Zwei Spaltenbreiten (120px) plus eine Abstandsbreite (20px) */
.col.span2 {
  width: 140px;
}
/* Drei Spaltenbreiten (180px) plus zwei Abstandsbreiten (40px) */
.col.span3 {
  width: 220px;
}
/* Und so weiter… */
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

Mit diesen erstellten Klassen können wir jetzt unterschiedlich breite Spalten auf dem Gitter anordnen. Versuchen Sie, die Seite in Ihrem Browser zu speichern und zu laden, um die Auswirkungen zu sehen.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das obige Beispiel zum Laufen zu bringen, versuchen Sie es mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid-finished.html) auf GitHub zu vergleichen (sehen Sie es [live laufen](https://mdn.github.io/learning-area/css/css-layout/grids/simple-grid-finished.html) auch).

Versuchen Sie, die Klassen Ihrer Elemente zu ändern oder sogar einige Container hinzuzufügen und zu entfernen, um zu sehen, wie Sie das Layout variieren können. Zum Beispiel könnten Sie die zweite Zeile so aussehen lassen:

```html
<div class="row">
  <div class="col span8">13</div>
  <div class="col span4">14</div>
</div>
```

Jetzt haben Sie ein funktionierendes Gitter-System und können die Zeilen und die Anzahl der Spalten in jeder Zeile definieren und dann jeden Container mit dem erforderlichen Inhalt füllen. Wunderbar!

### Ein flüssiges Gitter erstellen

Unser Gitter funktioniert gut, aber es hat eine feste Breite. Wir möchten wirklich ein anpassbares (flüssiges) Gitter, das mit dem verfügbaren Platz im Browser-{{Glossary("viewport")}} wächst und schrumpft. Um dies zu erreichen, können wir die Referenz-Pixelbreiten in Prozentangaben umwandeln.

Die Gleichung, die eine feste Breite in eine flexible, prozentbasierte verwandelt, lautet wie folgt.

```plain
Ziel / Kontext = Ergebnis
```

Für unsere Spaltenbreite ist unsere **Zielbreite** 60 Pixel und unser **Kontext** ist der 960-Pixel-Wrapper. Wir können das folgende verwenden, um einen Prozentsatz zu berechnen.

```plain
60 / 960 = 0.0625
```

Wir verschieben dann den Dezimalpunkt um 2 Stellen, was uns einen Prozentsatz von 6,25% gibt. In unserem CSS können wir die Spaltenbreite von 60 Pixel mit 6,25% ersetzen.

Wir müssen das gleiche mit unserer Abstandbreite machen:

```plain
20 / 960 = 0.02083333333
```

Wir müssen also den {{cssxref("margin-left")}} von 20 Pixeln auf `.col`-Regel und das {{cssxref("padding-right")}} von 20 Pixeln auf `.wrapper` mit 2,08333333% ersetzen.

#### Unser Gitter aktualisieren

Um in diesem Abschnitt zu beginnen, machen Sie eine neue Kopie Ihrer vorherigen Beispielseite oder eine lokale Kopie unseres [simple-grid-finished.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid-finished.html) Codes, um als Ausgangspunkt zu verwenden.

Aktualisieren Sie die zweite CSS-Regel (mit dem `.wrapper` Selektor) wie folgt:

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

Nicht nur, dass wir ihm eine prozentuale {{cssxref("width")}} gegeben haben, sondern wir haben auch eine {{cssxref("max-width")}}-Eigenschaft hinzugefügt, um zu verhindern, dass das Layout zu breit wird.

Aktualisieren Sie als Nächstes die vierte CSS-Regel (mit dem `.col` Selektor) wie folgt:

```css
.col {
  float: left;
  margin-left: 2.08333333%;
  width: 6.25%;
  background: rgb(255 150 150);
}
```

Jetzt kommt der etwas mühsamere Teil — wir müssen alle unsere `.col.span`-Regeln aktualisieren, um Prozentangaben zu verwenden, anstatt Pixelbreiten. Dies dauert ein wenig Zeit mit einem Taschenrechner; um Ihnen ein wenig Mühe zu ersparen, haben wir es für Sie unten getan.

Aktualisieren Sie den unteren Block der CSS-Regeln mit dem folgenden:

```css
/* Zwei Spaltenbreiten (12,5%) plus eine Abstandbreite (2,08333333%) */
.col.span2 {
  width: 14.58333333%;
}
/* Drei Spaltenbreiten (18,75%) plus zwei Abstandsbreiten (4,1666666) */
.col.span3 {
  width: 22.91666666%;
}
/* Und so weiter… */
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

Speichern Sie nun Ihren Code, laden Sie ihn in einem Browser und versuchen Sie, die Viewport-Breite zu ändern – Sie sollten sehen, dass die Breiten der Spalten sich schön anpassen.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das obige Beispiel zum Laufen zu bringen, versuchen Sie es mit unserer [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid.html) zu vergleichen (siehe es [live laufen](https://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid.html) auch).

### Einfachere Berechnungen mit der calc()-Funktion

Sie könnten die {{cssxref("calc", "calc()")}}-Funktion verwenden, um die Mathematik direkt in Ihrem CSS durchzuführen — dies ermöglicht es Ihnen, einfache mathematische Gleichungen in Ihre CSS-Werte einzufügen, um zu berechnen, was ein Wert sein sollte. Dies ist besonders nützlich, wenn komplexe Mathematik notwendig ist, und Sie können sogar eine Berechnung durchführen, die unterschiedliche Einheiten verwendet, zum Beispiel „Ich möchte die Höhe dieses Elements immer 100% der Höhe des übergeordneten Elements minus 50px sein“. Sehen Sie sich [dieses Beispiel aus einem MediaStream Recording API-Tutorial an](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API#keeping_the_interface_constrained_to_the_viewport_regardless_of_device_height_with_calc).

Wie auch immer, zurück zu unseren Gittern! Jede Spalte, die sich über mehr als eine Spalte unseres Gitters erstreckt, hat eine Gesamtbreite von 6,25% multipliziert mit der Anzahl der überspannten Spalten plus 2,08333333% multipliziert mit der Anzahl der Abstände (die immer die Anzahl der Spalten minus 1 betragen wird). Die `calc()`-Funktion ermöglicht es uns, diese Berechnung direkt im Wert der Breite durchzuführen, sodass wir beispielsweise für ein Element, das sich über 4 Spalten erstreckt, dies tun können:

```css
.col.span4 {
  width: calc((6.25% * 4) + (2.08333333% * 3));
}
```

Versuchen Sie, Ihren unteren Block von Regeln durch das folgende zu ersetzen, und laden Sie ihn dann im Browser neu, um zu sehen, ob Sie das gleiche Ergebnis erhalten:

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
> Sie können unsere fertige Version in [fluid-grid-calc.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid-calc.html) sehen (sehen Sie es [live laufen](https://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid-calc.html) auch).

### Semantische versus „unsemantische“ Gitter-Systeme

Das Hinzufügen von Klassen zu Ihrem Markup zur Definition der Layouts bedeutet, dass Ihr Inhalt und Markup mit Ihrer visuellen Darstellung verbunden werden. Sie werden manchmal diese Verwendung von CSS-Klassen als "unsemantisch" beschrieben hören — die Beschreibung, wie der Inhalt aussieht — im Gegensatz zu einer semantischen Verwendung von Klassen, die den Inhalt beschreibt. Dies ist der Fall bei unseren `span2`, `span3`, etc., Klassen.

Dies sind nicht die einzigen Ansätze. Sie könnten stattdessen Ihr Gitter festlegen und dann die Größeninformationen den Regeln bestehender semantischer Klassen hinzufügen. Wenn Sie beispielsweise ein {{htmlelement("div")}} mit einer Klasse von `content` darauf hatten, das Sie sich über 8 Spalten erstrecken möchten, könnten Sie die Breite von der `span8`-Klasse kopieren, was Ihnen eine Regel wie folgt ergibt:

```css
.content {
  width: calc((6.25% * 8) + (2.08333333% * 7));
}
```

> [!NOTE]
> Wenn Sie einen Präprozessor wie [Sass](https://sass-lang.com/) verwenden würden, könnten Sie ein einfaches Mixin erstellen, um diesen Wert für Sie einzufügen.

### Offse tüberschnittene Container in unserem Gitter aktivieren

Das Gitter, das wir erstellt haben, funktioniert gut, solange wir möchten, dass alle Container bündig mit der linken Seite des Gitters beginnen. Wenn wir eine leere Spaltenbreite vor dem ersten Container – oder zwischen den Containern – belassen möchten, müssten wir eine Offset-Klasse erstellen, um einen linken Rand zu unserem Standort hinzuzufügen, um ihn visuell über das Gitter zu schieben. Mehr Mathematik!

Probieren wir das aus.

Beginnen Sie mit Ihrem vorherigen Code oder verwenden Sie unsere [fluid-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid.html) Datei als Startpunkt.

Lassen Sie uns eine Klasse in unserem CSS erstellen, die ein Containerelement um eine Spaltenbreite verschiebt. Fügen Sie das folgende am Ende Ihres CSS hinzu:

```css
.offset-by-one {
  margin-left: calc(6.25% + (2.08333333% * 2));
}
```

Oder wenn Sie es vorziehen, die Prozentsätze selbst zu berechnen, verwenden Sie dieses hier:

```css
.offset-by-one {
  margin-left: 10.41666666%;
}
```

Sie können diese Klasse jetzt jedem Container hinzufügen, den Sie einen einspaltigen freistehenden Platz auf der linken Seite belassen möchten. Wenn Sie zum Beispiel das in Ihrem HTML haben:

```html
<div class="col span6">14</div>
```

Versuchen Sie es zu ersetzen mit

```html
<div class="col span5 offset-by-one">14</div>
```

> [!NOTE]
> Beachten Sie, dass Sie die Anzahl der überspannten Spalten reduzieren müssen, um Platz für das Offset zu schaffen!

Laden und aktualisieren Sie, um den Unterschied zu sehen, oder sehen Sie sich unser [fluid-grid-offset.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid-offset.html) Beispiel an (sehen Sie es [live laufen](https://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid-offset.html) auch). Das fertige Beispiel sollte so aussehen:

![Das Gitter hat 2 Reihen. Die erste hat 12 gleich breite Gitterelemente und die zweite Reihe hat 4 Elemente unterschiedlicher Breite. Element 13 erstreckt sich über 1 Spalte, Element 14 über fünf Spalten, 15 über drei und 16 über zwei. Element 14 hat die 'offset-by-one'-Klasse angewendet, was bedeutet, dass es in der 3. Spalte beginnt, anstatt in der zweiten, was eine einspaltige breite leere Stelle in der zweiten Zeile, zweite Spalte hinterlässt.](offset-grid-finished.png)

> [!NOTE]
> Als zusätzliche Übung können Sie eine `offset-by-two`-Klasse implementieren?

### Begrenzungen von floatierenden Gittern

Wenn Sie ein System wie dieses verwenden, müssen Sie darauf achten, dass Ihre Gesamtbreiten korrekt addiert werden und dass Sie keine Elemente in einer Reihe hinzufügen, die mehr Spalten als die Reihe aufnehmen können. Aufgrund der Funktionsweise von Floats, wenn die Anzahl der Gitterspalten zu breit für das Gitter wird, fallen die letzten Elemente auf die nächste Zeile herunter und brechen das Gitter.

Bedenken Sie auch, dass, wenn der Inhalt der Elemente breiter wird als die Zeilen, in denen sie sich befinden, der Inhalt überlaufen und chaotisch aussehen wird.

Die größte Einschränkung dieses Systems ist, dass es im Wesentlichen eindimensional ist. Wir behandeln Spalten und das Überspannen von Elementen über Spalten, aber nicht über Zeilen. Mit diesen älteren Layoutmethoden ist es sehr schwierig, die Höhe der Elemente zu kontrollieren, ohne explizit eine Höhe festzulegen, und das ist ein sehr unflexibler Ansatz – es funktioniert nur, wenn Sie garantieren können, dass Ihr Inhalt eine bestimmte Höhe haben wird.

## Flexbox-Gitter?

Wenn Sie unser vorherigen Artikel über [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) gelesen haben, denken Sie vielleicht, dass Flexbox die ideale Lösung zum Erstellen eines Gitter-Systems ist. Es gibt viele flexbox-basierte Gitter-Systeme, die verfügbar sind und Flexbox kann viele der Probleme lösen, die wir bereits entdeckt haben, als wir unser Gitter oben erstellt haben.

Allerdings wurde Flexbox nie als Gitter-System konzipiert und stellt ein neues Set an Herausforderungen, wenn es als eines verwendet wird. Als einfaches Beispiel können wir das gleiche Beispielmarkup verwenden, das wir oben verwendet haben, und das folgende CSS verwenden, um die `wrapper`, `row` und `col` Klassen zu stylen:

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

Sie können versuchen, diese Ersetzungen in Ihrem eigenen Beispiel vorzunehmen, oder sich unseren [flexbox-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/flexbox-grid.html) Beispielcode anzusehen (sehen Sie es [live laufen](https://mdn.github.io/learning-area/css/css-layout/grids/flexbox-grid.html) auch).

Hier verwandeln wir jede Zeile in ein Flex-Container. Mit einem Flexbox-basierten Gitter benötigen wir immer noch Zeilen, damit wir Elemente haben, die weniger als 100% ausmachen. Wir setzen diesen Container auf `display: flex`.

Auf `.col` setzen wir den ersten Wert ({{cssxref("flex-grow")}}) der {{cssxref("flex")}}-Eigenschaft auf 1, damit unsere Elemente wachsen können, den zweiten Wert ({{cssxref("flex-shrink")}}) auf 1, damit die Elemente schrumpfen können, und den dritten Wert ({{cssxref("flex-basis")}}) auf `auto`. Da unser Element eine {{cssxref("width")}} gesetzt hat, wird `auto` diese Breite als `flex-basis`-Wert verwenden.

In der obersten Zeile bekommen wir zwölf ordentliche Boxen auf dem Gitter, die gleichermaßen wachsen und schrumpfen, wenn wir die Größe des Viewports ändern. In der nächsten Zeile haben wir jedoch nur vier Elemente und diese wachsen und schrumpfen ebenfalls von diesen 60px ausgehend. Mit nur vier von ihnen können sie viel mehr wachsen als die Elemente in der oberen Zeile, was dazu führt, dass sie alle die gleiche Breite in der zweiten Zeile einnehmen.

![Das Gitter hat zwei Reihen. Jede Reihe ist ein Flex-Container. Die erste Reihe hat zwölf gleichbreite Flex-Elemente. Die zweite Reihe hat vier gleichbreite Flex-Elemente.](flexbox-grid-incomplete.png)

Um dies zu beheben, müssen wir immer noch unsere `span`-Klassen einbeziehen, um eine Breite bereitzustellen, die den Wert ersetzt, der von `flex-basis` für dieses Element verwendet wurde.

Sie respektieren auch nicht das Gitter, das die übergeordneten Elemente verwenden, da sie nichts darüber wissen.

Flexbox ist **eindimensional** von Design. Es behandelt eine einzelne Dimension, die einer Reihe oder einer Spalte. Wir können kein streng kontrolliertes Gitter für Spalten und Zeilen erstellen, was bedeutet, dass wenn wir Flexbox für unser Gitter verwenden, wir immer noch Prozentsätze berechnen müssen wie für das floatierte Layout.

In Ihrem Projekt können Sie sich dennoch für ein Flexbox-„Gitter“ entscheiden, aufgrund der zusätzlichen Ausrichtungs- und Platzverteilungsmöglichkeiten von Flexbox gegenüber Floats. Sie sollten jedoch wissen, dass Sie immer noch ein Tool für etwas anderes verwenden, als wofür es konzipiert ist. Sie können das Gefühl haben, dass es zusätzliche Hürden gibt, um das gewünschte Endergebnis zu erzielen.

## Dritthersteller-Gittersysteme

Jetzt, da wir das Verständnis hinter unseren Gitterberechnungen erlangt haben, sind wir in einer guten Position, um uns einige der Drittsystems in Verwendung anzusehen. Wenn Sie im Web nach "CSS Gitter-Framework" suchen, finden Sie eine riesige Liste von Optionen, aus denen Sie wählen können. Beliebte Frameworks wie [Bootstrap](https://getbootstrap.com/) und [Foundation](https://get.foundation/) beinhalten ein Gitter-System. Es gibt auch eigenständige Gittersysteme, die entweder mit CSS oder unter Verwendung von Präprozessoren entwickelt wurden.

Lassen Sie uns einen Blick auf eines dieser eigenständigen Systeme werfen, da es gängige Techniken zum Arbeiten mit einem Gitter-Framework demonstriert. Das Gitter, das wir verwenden werden, ist Teil von Skeleton, einem einfachen CSS-Framework.

Um loszulegen, besuchen Sie die [Skeleton-Website](http://getskeleton.com/) und wählen „Download“, um die ZIP-Datei herunterzuladen. Entpacken Sie dies und kopieren Sie die skeleton.css und normalize.css Dateien in ein neues Verzeichnis.

Machen Sie eine Kopie unserer [html-skeleton.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/html-skeleton.html) Datei und speichern Sie sie im selben Verzeichnis wie das Skelett und die Normalisieren CSS.

Binden Sie das Skelett und die Normalisieren CSS in die HTML-Seite ein, indem Sie Folgendes in den Kopf hinzufügen:

```html
<link href="normalize.css" rel="stylesheet" />
<link href="skeleton.css" rel="stylesheet" />
```

Skeleton enthält mehr als ein Gitter-System – es enthält auch CSS für Typografie und andere Seitenelemente, die Sie als Ausgangspunkt verwenden können. Wir lassen vorerst die Eckpunkte auf den Standardwerten – es ist das Gitter, das uns hier wirklich interessiert.

> **Hinweis:** [Normalisieren](https://necolas.github.io/normalize.css/) ist ein wirklich nützliches kleines CSS-Framework, das von Nicolas Gallagher geschrieben wurde, das automatisch einige nützliche grundlegende Layout-Reparaturen durchführt und das Standard-Elementstyling in Browsern konsistenter macht.

Wir werden ein ähnliches HTML wie in unserem vorherigen Beispiel verwenden. Fügen Sie das Folgende in Ihren HTML-Body ein:

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

Um Skeleton zu verwenden, müssen wir dem äußeren {{htmlelement("div")}} eine Klasse von `container` zuweisen – dies ist bereits in unserem HTML enthalten. Dadurch wird der Inhalt mit einer maximalen Breite von 960 Pixel zentriert. Sie können jetzt sehen, wie die Boxen nie breiter als 960 Pixel werden.

Sie können sich die skeleton.css-Datei ansehen, um das CSS zu sehen, das verwendet wird, wenn wir diese Klasse anwenden. Das `<div>` wird mit `auto` linken und rechten Rändern zentriert und es wird ein Padding von 20 Pixeln links und rechts angewendet. Skeleton setzt auch die {{cssxref("box-sizing")}}-Eigenschaft auf `border-box`, wie wir es zuvor getan haben, sodass die Paddings und Ränder dieses Elements in die Gesamtbreite eingeschlossen werden.

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

Elemente können nur Teil des Gitters sein, wenn sie sich innerhalb einer Zeile befinden, daher benötigen wir wie in unserem vorherigen Beispiel ein zusätzliches `<div>` oder ein anderes Element mit der Klasse `row`, das zwischen den Inhaltselementen `<div>` und dem Container-`<div>` verschachtelt ist. Das haben wir bereits gemacht.

Lassen Sie uns jetzt die Container-Boxen layouten. Skeleton basiert auf einem 12-Spalten-Gitter. Die Boxen der obersten Zeile brauchen alle Klassen von `one column`, um sich über eine Spalte zu erstrecken.

Fügen Sie dies nun hinzu, wie im folgenden Beispiel gezeigt:

```html
<div class="container">
  <div class="row">
    <div class="one column">1</div>
    <div class="one column">2</div>
    <div class="one column">3</div>
    /* und so weiter */
  </div>
</div>
```

Geben Sie als Nächstes den Containern in der zweiten Zeile Klassen, die erklären, über wie viele Spalten sie sich erstrecken sollen, wie folgt:

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
> Wenn Sie Probleme haben, dieses Beispiel zum Laufen zu bringen, versuchen Sie, das Fenster zu erweitern, das Sie zum Betrachten verwenden (das Gitter wird nicht wie hier beschrieben angezeigt, wenn das Fenster zu schmal ist). Wenn das nicht funktioniert, versuchen Sie es mit unserer [html-skeleton-finished.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/html-skeleton-finished.html) Datei zu vergleichen (sehen Sie es [live laufen](https://mdn.github.io/learning-area/css/css-layout/grids/html-skeleton-finished.html) auch).

Wenn Sie sich die skeleton.css-Datei ansehen, können Sie sehen, wie dies funktioniert. Beispielsweise hat Skeleton folgendes definiert, um Elemente mit „drei columns“-Klassen zu stylen.

```css
.three.columns {
  width: 22%;
}
```

Alles, was Skeleton (oder jedes andere Gitter-Framework) tut, erstellt vordefinierte Klassen, die Sie verwenden können, indem sie sie in Ihr Markup einfügen. Es ist genau dasselbe, als wenn Sie die Arbeit machen würden, diese Prozentsätze selbst zu berechnen.

Wie Sie sehen können, müssen wir sehr wenig CSS schreiben, wenn wir Skeleton verwenden. Es kümmert sich darum, alle zu floaten, wenn wir Klassen zu unserem Markup hinzufügen. Diese Fähigkeit, die Verantwortung für das Layout an etwas anderes zu übertragen, machte die Verwendung eines Frameworks für ein Gitter-System zu einer überzeugenden Wahl! Heutzutage, mit dem CSS-Grid-Layout, ziehen viele Entwickler jedoch typischerweise diese Frameworks ab, um das eingebaute native Gitter zu verwenden, das CSS bietet.

## Zusammenfassung

Sie verstehen nun, wie verschiedene Gitter-Systeme erstellt werden, was nützlich sein wird, um mit älteren Websites zu arbeiten und den Unterschied zwischen dem nativen Gitter des CSS-Grid-Layouts und diesen älteren Systemen zu verstehen.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Media_queries", "Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}
