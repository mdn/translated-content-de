---
title: Veraltete Layoutmethoden
slug: Learn_web_development/Core/CSS_layout/Legacy_Layout_Methods
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Rastersysteme sind ein sehr gebräuchliches Merkmal in CSS-Layouts und wurden vor dem CSS-Grid-Layout meist mit `floats` oder anderen Layout-Funktionen implementiert. Man stellt sich das Layout als eine festgelegte Anzahl von Spalten vor (z. B. 4, 6 oder 12) und passt dann die Inhalts-Spalten in diese imaginären Spalten. In diesem Artikel werden wir diese älteren Methoden untersuchen, um zu verstehen, wie sie verwendet wurden, falls Sie an einem älteren Projekt arbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (lernen Sie die
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (lernen Sie die
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die grundlegenden Konzepte hinter den Rastersystemen zu verstehen, die verwendet wurden, bevor CSS-Grid-Layout in Browsern verfügbar war.
      </td>
    </tr>
  </tbody>
</table>

## Layout- und Rastersysteme vor dem CSS-Grid-Layout

Es mag für jemanden mit Design-Hintergrund überraschend erscheinen, dass CSS bis vor kurzem kein eingebautes Rastersystem hatte und stattdessen verschiedene suboptimale Methoden verwendet wurden, um rasterähnliche Designs zu erstellen. Wir sprechen jetzt von diesen Methoden als vom "veralteten" Methoden.

Bei neuen Projekten wird in den meisten Fällen CSS-Grid-Layout in Kombination mit einer oder mehreren anderen modernen Layoutmethoden verwendet, um die Grundlage für ein Layout zu bilden. Sie werden jedoch von Zeit zu Zeit auf "Rastersysteme" stoßen, die diese veralteten Methoden verwenden. Es ist sinnvoll, zu verstehen, wie sie funktionieren und warum sie sich von CSS-Grid-Layout unterscheiden.

Diese Lektion erklärt, wie Rastersysteme und Raster-Frameworks basierend auf `floats` und `flexbox` funktionieren. Nachdem Sie das Grid-Layout studiert haben, werden Sie wahrscheinlich überrascht sein, wie kompliziert das alles erscheint! Dieses Wissen wird Ihnen hilfreich sein, wenn Sie Fallback-Code für Browser erstellen müssen, die neuere Methoden nicht unterstützen, und ermöglicht es Ihnen, an bestehenden Projekten zu arbeiten, die diese Art von Systemen verwenden.

Es ist wichtig, sich bei der Erkundung dieser Systeme vor Augen zu halten, dass keines von ihnen tatsächlich ein Gitter auf die Weise erstellt, wie CSS-Grid-Layout ein Gitter erstellt. Sie funktionieren, indem sie Elementen eine Größe geben und diese so verschieben, dass sie sich in einer Weise ausrichten, die wie ein Gitter aussieht.

## Ein Layout mit zwei Spalten

Beginnen wir mit dem einfachsten möglichen Beispiel — einem Layout mit zwei Spalten. Sie können mitmachen, indem Sie eine neue `index.html`-Datei auf Ihrem Computer erstellen, sie mit einer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) füllen und den unten stehenden Code an den entsprechenden Stellen einfügen. Am Ende des Abschnitts können Sie ein Live-Beispiel sehen, wie der endgültige Code aussehen sollte.

Zuerst brauchen wir etwas Inhalt, den wir in unsere Spalten setzen können. Ersetzen Sie alles, was sich derzeit im Body befindet, durch Folgendes:

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

Jede der Spalten benötigt ein äußeres Element, um ihren Inhalt zu enthalten und es uns zu ermöglichen, alles auf einmal zu manipulieren. In diesem Beispiel haben wir uns für {{htmlelement("div")}}-Elemente entschieden, aber Sie könnten etwas semantisch Passenderes wie {{htmlelement("article")}}s, {{htmlelement("section")}}s, und {{htmlelement("aside")}}s oder was auch immer wählen.

Nun zum CSS. Zuerst einmal wenden Sie folgendes auf Ihr HTML an, um einige grundlegende Einstellungen zu treffen:

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}
```

Der `body` wird 90% der Viewport-Breite ausmachen, bis er 900px Breite erreicht, in diesem Fall bleibt er auf dieser Breite fixiert und zentriert sich im Viewport. Standardmäßig werden seine Kinder (die {{htmlelement("Heading_Elements", "h1")}} und die beiden {{htmlelement("div")}}s) 100% der Breite des Bodys umfassen. Wenn wir möchten, dass die beiden {{htmlelement("div")}}s nebeneinander schweben, müssen wir ihre Breiten so einstellen, dass sie insgesamt 100% der Breite ihres Elternelements oder kleiner sind, damit sie nebeneinander passen. Fügen Sie dazu folgendes am Ende Ihres CSS hinzu:

```css
div:nth-of-type(1) {
  width: 48%;
}

div:nth-of-type(2) {
  width: 48%;
}
```

Hier haben wir beide auf 48% der Breite ihres Elternelements gesetzt — das ergibt insgesamt 96% und lässt uns 4% als Abstand zwischen den beiden Spalten frei, damit der Inhalt etwas Platz zum Atmen hat. Jetzt müssen wir nur noch die Spalten schweben lassen, und zwar so:

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

Wenn wir alles zusammenfügen, sollte das Ergebnis so aussehen:

{{ EmbedLiveSample('A_two_column_layout', '100%', 520) }}

Sie werden hier feststellen, dass wir überall Prozentangaben für die Breiten verwenden — dies ist eine ziemlich gute Strategie, da es ein **Liquid Layout** schafft, das sich an verschiedene Bildschirmgrößen anpasst und dieselben Proportionen für die Spaltenbreiten bei kleineren Bildschirmgrößen beibehält. Versuchen Sie, die Breite Ihres Browserfensters anzupassen, um es selbst zu sehen. Dies ist ein wertvolles Werkzeug für responsives Webdesign.

> [!NOTE]
> Sie können dieses Beispiel unter [0_two-column-layout.html](https://mdn.github.io/learning-area/css/css-layout/floats/0_two-column-layout.html) ausführen (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/floats/0_two-column-layout.html)).

## Einfache, veraltete Raster-Frameworks erstellen

Die Mehrheit der veralteten Frameworks verwendet das Verhalten der {{cssxref("float")}}-Eigenschaft, um eine Spalte neben einer anderen schweben zu lassen und auf diese Weise etwas zu schaffen, das wie ein Raster aussieht. Den Prozess des Erstellens eines Rasters mit `floats` durchzugehen, zeigt Ihnen, wie das funktioniert und führt auch einige komplexere Konzepte ein, die auf dem aufbauen, was Sie in der Lektion über [Floats und Aufräumen](/de/docs/Learn_web_development/Core/CSS_layout/Floats) gelernt haben.

Der einfachste Raster-Framework-Typ, den man erstellen kann, ist einer mit fester Breite — wir müssen lediglich herausfinden, wie breit unser Design insgesamt sein soll, wie viele Spalten wir wollen und wie breit die Abstände und Spalten sein sollten. Wenn wir stattdessen beschließen, unser Design auf einem Raster anzuordnen, bei dem die Spalten je nach Browserbreite wachsen und schrumpfen, müssten wir prozentuale Breiten für die Spalten und die Abstände zwischen ihnen berechnen.

In den nächsten Abschnitten werden wir uns ansehen, wie man beides erstellt. Wir werden ein 12-Spalten-Gitter erstellen — eine sehr häufige Wahl, die als sehr anpassungsfähig für verschiedene Situationen angesehen wird, da 12 gut durch 6, 4, 3 und 2 teilbar ist.

### Ein einfaches Raster mit fester Breite

Lassen Sie uns zuerst ein Rastersystem erstellen, das feste Breiten für die Spalten verwendet.

Beginnen Sie damit, eine lokale Kopie unserer Beispiel- [simple-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid.html)-Datei zu erstellen, die das folgende Markup in ihrem Body enthält.

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

Das Ziel ist es, dies in ein Demonstrationsraster mit zwei Zeilen auf einem zwölfspaltigen Raster zu verwandeln — die obere Zeile demonstriert die Größe der einzelnen Spalten, die zweite Zeile einige unterschiedlich große Bereiche auf dem Raster.

![CSS-Raster mit 16 Rasterelementen, verteilt auf zwölf Spalten und zwei Reihen. Die obere Reihe hat 12 gleichbreite Rasterelemente in 12 Spalten. Die zweite Reihe hat Rasterelemente unterschiedlicher Größe. Element 13 umfasst 1 Spalte, Element 14 umfasst sechs Spalten, 15 umfasst drei und 16 umfasst zwei.](simple-grid-finished.png)

Im {{htmlelement("style")}}-Element, fügen Sie den folgenden Code hinzu, der dem Wrapper-Container eine Breite von 980 Pixeln gibt, mit einem Polster auf der rechten Seite von 20 Pixeln. Dadurch bleiben uns 960 Pixel für unsere gesamten Spalten-/Abstandsbreiten — in diesem Fall wird das Polster von der gesamten Inhaltsbreite abgezogen, weil wir {{cssxref("box-sizing")}} auf `border-box` für alle Elemente auf der Seite gesetzt haben (siehe [Das alternative CSS-Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#the_alternative_css_box_model) für eine ausführlichere Erklärung).

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

Jetzt verwenden Sie den Zeilen-Container, der um jede Zeile des Rasters gewickelt ist, um den Abstand von einer Zeile zur nächsten zu klären. Fügen Sie die folgende Regel unter Ihrer vorherigen hinzu:

```css
.row {
  clear: both;
}
```

Das Anwenden dieser Klärung bedeutet, dass wir nicht jede Zeile vollständig mit Elementen füllen müssen, um die vollen zwölf Spalten zu machen. Die Zeilen bleiben getrennt und beeinträchtigen sich nicht gegenseitig.

Die Abstände zwischen den Spalten sind 20 Pixel breit. Wir erstellen diese Abstände als einen linken Rand auf jeder Spalte — einschließlich der ersten Spalte, um die 20 Pixel Polster auf der rechten Seite des Containers auszugleichen. Insgesamt haben wir also 12 Abstände — 12 x 20 = 240.

Wir müssen das von unserer Gesamtbreite von 960 Pixel abziehen, was uns 720 Pixel für unsere Spalten gibt. Wenn wir das jetzt durch 12 teilen, wissen wir, dass jede Spalte 60 Pixel breit sein sollte.

Unser nächster Schritt ist, eine Regel für die Klasse `.col` zu erstellen, die sie nach links floatet, ihr einen {{cssxref("margin-left")}} von 20 Pixeln gibt, um den Rand zu bilden, und eine {{cssxref("width")}} von 60 Pixeln hat. Fügen Sie die folgende Regel am Ende Ihres CSS hinzu:

```css
.col {
  float: left;
  margin-left: 20px;
  width: 60px;
  background: rgb(255 150 150);
}
```

Die obere Reihe einzelner Spalten wird nun ordentlich als Raster ausgelegt.

> [!NOTE]
> Wir haben jeder Spalte auch eine hellrote Farbe gegeben, damit Sie genau sehen können, wie viel Platz jede einnimmt.

Layout-Container, die mehr als eine Spalte umfassen sollen, müssen spezielle Klassen erhalten, um ihre {{cssxref("width")}}-Werte an die erforderliche Anzahl von Spalten (plus die dazwischenliegenden Abstände) anzupassen. Wir müssen eine zusätzliche Klasse erstellen, um Container zu ermöglichen, 2 bis 12 Spalten zu umfassen. Jede Breite ergibt sich aus der Summe der Spaltenbreite dieser Anzahl von Spalten plus der Randbreiten, die immer um eins weniger sind als die Anzahl der Spalten.

Fügen Sie folgendes am unteren Rand Ihres CSS hinzu:

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

Mit diesen erstellten Klassen können wir nun unterschiedlich breite Spalten auf dem Raster anordnen. Versuchen Sie, die Seite zu speichern und im Browser zu laden, um die Effekte zu sehen.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das obige Beispiel zum Laufen zu bringen, vergleichen Sie es mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid-finished.html) auf GitHub (siehe sie auch [live](https://mdn.github.io/learning-area/css/css-layout/grids/simple-grid-finished.html)).

Versuchen Sie, die Klassen an Ihren Elementen zu ändern oder sogar einige Container hinzuzufügen und zu entfernen, um zu sehen, wie Sie das Layout variieren können. Zum Beispiel könnten Sie die zweite Reihe so aussehen lassen:

```html
<div class="row">
  <div class="col span8">13</div>
  <div class="col span4">14</div>
</div>
```

Jetzt, da Sie ein Rastersystem in Betrieb haben, können Sie die Reihen und die Anzahl der Spalten in jeder Reihe definieren und dann jeden Container mit dem gewünschten Inhalt füllen. Großartig!

### Ein flexibles Raster erstellen

Unser Raster funktioniert gut, aber es hat eine feste Breite. Wir möchten wirklich ein flexibles (flüssiges) Raster, das mit dem verfügbaren Platz im Browser- {{Glossary("viewport", "Viewport")}} wächst und schrumpft. Um das zu erreichen, können wir die Referenz-Pixelbreiten in Prozentzahlen umwandeln.

Die Gleichung, die eine feste Breite in eine flexible, prozentbasierte umwandelt, lautet wie folgt.

```plain
target / context = result
```

Für unsere Spaltenbreite ist unsere **Zielbreite** 60 Pixel und unser **Kontext** ist der 960-Pixel-Wrapper. Wir können das Folgende verwenden, um einen Prozentsatz zu berechnen.

```plain
60 / 960 = 0.0625
```

Dann verschieben wir das Dezimal um 2 Stellen und erhalten einen Prozentsatz von 6,25%. So können wir in unserem CSS die 60-Pixel-Spaltenbreite durch 6,25% ersetzen.

Wir müssen dasselbe mit unserer Randbreite tun:

```plain
20 / 960 = 0.02083333333
```

Also müssen wir den 20-Pixel-{{cssxref("margin-left")}} in unserer `.col`-Regel und die 20-Pixel-{{cssxref("padding-right")}} in `.wrapper` durch 2.08333333% ersetzen.

#### Aktualisieren unseres Rasters

Um in diesem Abschnitt zu beginnen, erstellen Sie eine neue Kopie Ihrer vorherigen Beispielseite oder erstellen Sie eine lokale Kopie unseres [simple-grid-finished.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid-finished.html) Codes, um ihn als Ausgangspunkt zu verwenden.

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

Wir haben nicht nur eine prozentuale {{cssxref("width")}} hinzugefügt, sondern auch eine {{cssxref("max-width")}}-Eigenschaft hinzugefügt, um zu verhindern, dass das Layout zu breit wird.

Aktualisieren Sie als nächstes die vierte CSS-Regel (mit dem `.col`-Selektor) wie folgt:

```css
.col {
  float: left;
  margin-left: 2.08333333%;
  width: 6.25%;
  background: rgb(255 150 150);
}
```

Jetzt kommt der etwas arbeitsintensivere Teil — wir müssen alle unsere `.col.span`-Regeln aktualisieren, um Prozentwerte anstelle von Pixelwerten zu verwenden. Das erfordert ein bisschen Zeit mit einem Taschenrechner; um Ihnen etwas Mühe zu ersparen, haben wir es unten für Sie erledigt.

Aktualisieren Sie den unteren Block der CSS-Regeln wie folgt:

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

Jetzt speichern Sie Ihren Code, laden ihn in einem Browser und versuchen, die Viewportbreite zu ändern — Sie sollten sehen, dass sich die Spaltenbreiten schön anpassen, um zu passen.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das obige Beispiel zum Laufen zu bringen, vergleichen Sie es mit unserer [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid.html) (siehe sie auch [live](https://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid.html)).

### Einfachere Berechnungen mit der Funktion calc()

Sie könnten die {{cssxref("calc", "calc()")}}-Funktion verwenden, um die Berechnungen direkt in Ihrem CSS durchzuführen — dies ermöglicht es Ihnen, einfache mathematische Gleichungen in Ihre CSS-Werte einzufügen, um zu berechnen, welchen Wert ein Element haben sollte. Dies ist besonders nützlich, wenn komplexe Mathematik durchgeführt werden muss, und Sie können sogar eine Berechnung durchführen, die unterschiedliche Einheiten verwendet, z. B. "Ich möchte, dass die Höhe dieses Elements immer 100% der Höhe des Elternelements beträgt, minus 50px". Siehe [dieses Beispiel aus einem MediaStream Recording API-Tutorial](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API#keeping_the_interface_constrained_to_the_viewport_regardless_of_device_height_with_calc).

Auf jeden Fall zurück zu unseren Rastern! Jede Spalte, die mehr als eine Spalte unseres Rasters umfasst, hat eine Gesamtbreite von 6,25%, multipliziert mit der Anzahl der Spalten, die umfasst werden, plus 2.08333333%, multipliziert mit der Anzahl der Ränder (die immer die Anzahl der Spalten minus 1 beträgt). Die `calc()`-Funktion ermöglicht es uns, diese Berechnung direkt im `width`-Wert durchzuführen, sodass wir für jedes Element, das 4 Spalten umfasst, beispielsweise folgendes tun können:

```css
.col.span4 {
  width: calc((6.25% * 4) + (2.08333333% * 3));
}
```

Versuchen Sie, Ihren unteren Regelblock durch das Folgende zu ersetzen und laden Sie ihn dann im Browser, um zu sehen, ob Sie das gleiche Ergebnis erhalten:

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
> Sie können unsere fertige Version in [fluid-grid-calc.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid-calc.html) sehen (sehen Sie es auch [live](https://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid-calc.html)).

### Semantische versus "unsemantische" Rastersysteme

Das Hinzufügen von Klassen zu Ihrem Markup, um Layout zu definieren, bedeutet, dass Ihr Inhalt und Ihr Markup an Ihre visuelle Darstellung gebunden werden. Sie werden manchmal hören, dass diese Verwendung von CSS-Klassen als "unsemantisch" beschrieben wird — sie beschreibt, wie der Inhalt aussieht — im Gegensatz zu einer semantischen Verwendung von Klassen, die den Inhalt beschreibt. Dies ist der Fall bei unseren `span2`, `span3` usw. Klassen.

Dies sind nicht die einzigen Ansätze. Sie könnten stattdessen Ihr Raster festlegen und dann die Größeninformationen den Regeln für bestehende semantische Klassen hinzufügen. Zum Beispiel, wenn Sie einen {{htmlelement("div")}} mit einer Klasse `content` darauf hätten, den Sie über 8 Spalten spannen möchten, könnten Sie die Breite aus der `span8`-Klasse übernehmen und Ihnen eine Regel wie die folgende geben:

```css
.content {
  width: calc((6.25% * 8) + (2.08333333% * 7));
}
```

> [!NOTE]
> Wenn Sie einen Präprozessor wie [Sass](https://sass-lang.com/) verwenden würden, könnten Sie einen einfachen Mixin erstellen, um diesen Wert für Sie einzufügen.

### Verschobene Container im Raster aktivieren

Das von uns erstellte Raster funktioniert gut, solange wir alle Container mit der linken Seite des Rasters bündig beginnen möchten. Wenn wir einen leeren Spaltenbereich vor dem ersten Container — oder zwischen Containern — lassen wollten, müssten wir eine Versatzklasse erstellen, um einen linken Rand zu unserem Standort hinzuzufügen, um ihn optisch über das Raster zu verschieben. Mehr Mathematik!

Lassen Sie uns das ausprobieren.

Beginnen Sie mit Ihrem vorherigen Code oder verwenden Sie unsere [fluid-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid.html) Datei als Ausgangspunkt.

Lassen Sie uns eine Klasse in unserem CSS erstellen, die ein Container-Element um eine Spaltenbreite verschiebt. Fügen Sie folgendes am Ende Ihres CSS hinzu:

```css
.offset-by-one {
  margin-left: calc(6.25% + (2.08333333% * 2));
}
```

Oder falls Sie die Prozentsätze lieber selbst berechnen möchten, verwenden Sie diese hier:

```css
.offset-by-one {
  margin-left: 10.41666666%;
}
```

Sie können diese Klasse jetzt jedem Container hinzufügen, wenn Sie links von ihm einen leeren Spaltenbereich vorbereiten möchten. Zum Beispiel, wenn Sie dies in Ihrem HTML haben:

```html
<div class="col span6">14</div>
```

Versuchen Sie, es zu ersetzen durch

```html
<div class="col span5 offset-by-one">14</div>
```

> [!NOTE]
> Beachten Sie, dass Sie die Anzahl der umspannten Spalten reduzieren müssen, um Platz für den Versatz zu schaffen!

Versuchen Sie, es zu laden und zu aktualisieren, um den Unterschied zu sehen, oder sehen Sie sich unser Beispiel [fluid-grid-offset.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid-offset.html) an (sehen Sie es auch [live](https://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid-offset.html)). Das fertige Beispiel sollte so aussehen:

![Das Raster hat 2 Reihen. In der ersten Reihe befinden sich 12 gleich breite Rasterelemente und in der zweiten Reihe 4 Rasterelemente unterschiedlicher Breite. Element 13 umfasst 1 Spalte, Element 14 umfasst fünf Spalten, 15 umfasst drei und 16 umfasst zwei. Element 14 hat die Klasse 'offset-by-one' angewendet, was bedeutet, dass es in der 3. Spalte beginnt, anstatt in der zweiten, und einen einspaltigen Leerraum in der zweiten Zeilen zweiter Spalte lässt.](offset-grid-finished.png)

> [!NOTE]
> Als zusätzliche Übung: Können Sie eine `offset-by-two` Klasse implementieren?

### Einschränkungen von gefloateten Rastern

Wenn Sie ein solches System verwenden, müssen Sie darauf achten, dass sich die Gesamtsummen der Breiten korrekt addieren und Sie keine Elemente in eine Zeile einfügen, die mehr Spalten umfassen, als die Zeile enthalten kann. Aufgrund der Funktionsweise von `floats` wird, wenn die Anzahl der Rasterspalten zu breit für das Raster wird, die Elemente am Ende auf die nächste Zeile fallen und das Raster zerstören.

Beachten Sie auch, dass, wenn der Inhalt der Elemente breiter wird als die Reihen, die sie belegen, er überlaufen wird und chaotisch aussieht.

Die größte Einschränkung dieses Systems besteht darin, dass essenziell eindimensional ist. Wir beschäftigen uns mit Spalten und dem Spannen von Elementen über Spalten, aber nicht mit Reihen. Es ist mit diesen älteren Layoutmethoden sehr schwierig, die Höhe von Elementen zu kontrollieren, ohne explizit eine Höhe festzulegen, und dies ist auch ein sehr unflexibler Ansatz — er funktioniert nur, wenn Sie sicherstellen können, dass Ihr Inhalt eine bestimmte Höhe hat.

## Flexbox-Raster?

Wenn Sie unseren vorherigen Artikel über [flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) gelesen haben, denken Sie vielleicht, dass `flexbox` die ideale Lösung für die Erstellung eines Rasters ist. Es gibt viele auf `flexbox` basierende Rastersysteme und `flexbox` kann viele der Probleme lösen, die wir bereits entdeckt haben, als wir unser oben erstelltes Raster erstellt haben.

Jedoch war `flexbox` nie als Raster-System gedacht und stellt eine neue Reihe von Herausforderungen dar, wenn es als solches verwendet wird. Als einfaches Beispiel können wir das gleiche Beispiel-Markup verwenden, das wir oben verwendet haben, und mit dem folgenden CSS-Styling für die `wrapper`, `row`, und `col` Klassen:

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

Sie können diese Ersetzungen in Ihrem eigenen Beispiel machen oder unseren [flexbox-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/flexbox-grid.html) Beispielcode anschauen (sehen Sie es auch [live](https://mdn.github.io/learning-area/css/css-layout/grids/flexbox-grid.html) ebenfalls).

Hier verwandeln wir jede Zeile in einen Flex-Container. Mit einem auf `flexbox` basierenden Raster brauchen wir immer noch Reihen, um es uns zu ermöglichen, Elemente zu haben, die zusammen weniger als 100% ausmachen. Wir setzen diesen Container auf `display: flex`.

Auf `.col` setzen wir den ersten Wert der {{cssxref("flex")}}-Eigenschaft ({{cssxref("flex-grow")}}) auf 1, damit unsere Elemente wachsen können, den zweiten Wert ({{cssxref("flex-shrink")}}) auf 1, damit die Elemente schrumpfen können, und den dritten Wert ({{cssxref("flex-basis")}}) auf `auto`. Da unser Element eine {{cssxref("width")}} gesetzt hat, wird `auto` diese Breite als `flex-basis`-Wert verwenden.

Auf der oberen Zeile erhalten wir zwölf ordentliche Boxen auf dem Raster und sie wachsen und schrumpfen gleichmäßig, während wir die Viewport-Breite ändern. In der nächsten Zeile jedoch haben wir nur vier Elemente und diese wachsen und schrumpfen auch ausgehend von der 60-Pixel-Basisbreite. Mit nur vier von ihnen können sie viel mehr wachsen als die Elemente in der darüberliegenden Zeile, was dazu führt, dass sie alle die gleiche Breite in der zweiten Zeile einnehmen.

![Das Raster hat zwei Zeilen. Jede Zeile ist ein Flex-Container. Die erste Reihe hat zwölf gleich breite Flex-Elemente. Die zweite Reihe hat vier gleich breite Flex-Elemente.](flexbox-grid-incomplete.png)

Um dies zu beheben, müssen wir immer noch unsere `span`-Klassen einfügen, um eine Breite bereitzustellen, die den Wert zum `flex-basis` für dieses Element ersetzen wird.

Sie respektieren auch nicht das Raster, das von den darüber liegenden Elementen verwendet wird, da sie nichts darüber wissen.

`Flexbox` ist **eindimensional** von Design her. Es befasst sich mit einer einzigen Dimension, nämlich einer Reihe oder einer Spalte. Wir können kein striktes Raster für Spalten und Reihen erstellen, was bedeutet, dass wir, wenn wir `flexbox` für unser Raster verwenden, immer noch Prozentsätze wie beim gefloateten Layout berechnen müssen.

In Ihrem Projekt könnten Sie dennoch ein `flexbox`-„Raster“ verwenden, aufgrund der zusätzlichen Ausrichtungs- und Verteilungsfähigkeiten, die `flexbox` gegenüber `floats` bietet. Sie sollten sich jedoch bewusst sein, dass Sie dennoch ein Werkzeug für etwas anderes verwenden, als es gedacht war. Deshalb haben Sie vielleicht das Gefühl, dass es Ihnen zusätzliche Hürden auferlegt, um das gewünschte Endergebnis zu erzielen.

## Dritthersteller-Rastersysteme

Da wir nun den mathematischen Hintergrund unserer Rasterberechnungen verstehen, sind wir gut vorbereitet, um uns einige der Dritthersteller-Rastersysteme anzusehen, die häufig verwendet werden. Wenn Sie auf dem Web nach "CSS-Raster-Framework" suchen, werden Sie eine große Liste von Optionen finden, aus denen Sie wählen können. Beliebte Frameworks wie [Bootstrap](https://getbootstrap.com/) und [Foundation](https://get.foundation/) enthalten ein Raster-System. Es gibt auch eigenständige Raster-Systeme, die entweder in CSS oder unter Verwendung von Präprozessoren entwickelt wurden.

Schauen wir uns eines dieser eigenständigen Systeme an, da es gängige Techniken für die Arbeit mit einem Raster-Framework demonstriert. Das Raster, das wir verwenden werden, ist Teil von Skeleton, einem einfachen CSS-Framework.

Um loszulegen, besuchen Sie die [Skeleton-Website](http://getskeleton.com/), und wählen Sie "Download", um die ZIP-Datei herunterzuladen. Entpacken Sie diese und kopieren Sie die `skeleton.css` und `normalize.css`-Dateien in ein neues Verzeichnis.

Machen Sie eine Kopie unserer [html-skeleton.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/html-skeleton.html) Datei und speichern Sie es im selben Verzeichnis wie die Skeleton- und Normalize-CSS.

Binden Sie Skeleton und Normalize CSS in die HTML-Seite ein, indem Sie folgendes in den Kopfbereich hinzufügen:

```html
<link href="normalize.css" rel="stylesheet" />
<link href="skeleton.css" rel="stylesheet" />
```

Skeleton enthält mehr als ein Rastersystem — es enthält auch CSS für Typografie und andere Seitenelemente, die Sie als Ausgangspunkt verwenden können. Wir lassen diese zunächst auf den Standardwerten, jedoch — es ist das Raster, das uns hier wirklich interessiert.

> **Note:** [Normalize](https://necolas.github.io/normalize.css/) ist eine wirklich nützliche kleine CSS-Bibliothek, geschrieben von Nicolas Gallagher, die automatisch einige nützliche grundlegende Layout-Korrekturen vornimmt und standardmäßige Elementstyling konsistenter über Browser hinweg macht.

Wir werden ein ähnliches HTML wie in unserem früheren Beispiel verwenden. Fügen Sie das folgende Ihrem HTML-Body hinzu:

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

Um Skeleton nutzen zu können, müssen wir dem Wrapper-{{htmlelement("div")}} eine Klasse `container` geben — dies ist bereits in unserem HTML enthalten. Dies zentriert den Inhalt mit einer maximalen Breite von 960 Pixeln. Sie können sehen, wie die Boxen jetzt nie breiter als 960 Pixel werden.

Sie können in der `skeleton.css` Datei sehen, welches CSS verwendet wird, wenn wir diese Klasse anwenden. Das `<div>` wird mit `auto` linken und rechten Rändern zentriert und eine Polsterung von 20 Pixeln wird links und rechts angewendet. Skeleton setzt auch die {{cssxref("box-sizing")}}-Eigenschaft auf `border-box`, wie wir es früher getan haben, sodass die Polsterung und Rahmen dieses Elements in die Gesamtbreite einbezogen werden.

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

Elemente können nur Teil des Rasters werden, wenn sie sich innerhalb einer Zeile befinden, sodass wir wie in unserem früheren Beispiel ein weiteres `<div>` oder ein anderes Element mit der Klasse `row` zwischen den Inhalts-`<div>`-Elementen und dem `container`-`<div>` verschachteln müssen. Das haben wir auch schon gemacht.

Legen wir nun die Container-Boxen fest. Skeleton basiert auf einem Raster mit 12 Spalten. Die Boxen in der obersten Zeile benötigen alle Klassen `one column`, um eine Spalte zu umfassen.

Fügen Sie diese jetzt hinzu, wie in folgendem Snippet gezeigt:

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

Geben Sie als nächstes den Containern in der zweiten Zeile Klassen, die die Anzahl der Spalten angeben, die sie umfassen sollen, wie folgt:

```html
<div class="row">
  <div class="one column">13</div>
  <div class="six columns">14</div>
  <div class="three columns">15</div>
  <div class="two columns">16</div>
</div>
```

Versuchen Sie, Ihre HTML-Datei zu speichern und im Browser zu laden, um die Wirkung zu sehen.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, dieses Beispiel zum Laufen zu bringen, versuchen Sie, das Fenster zu verbreitern, das Sie zum Anzeigen verwenden (das Raster wird nicht wie hier beschrieben angezeigt, wenn das Fenster zu schmal ist). Wenn das nicht funktioniert, vergleichen Sie es mit unserer [html-skeleton-finished.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/html-skeleton-finished.html)-Datei (sehen Sie es auch [live](https://mdn.github.io/learning-area/css/css-layout/grids/html-skeleton-finished.html) ebenfalls).

Wenn Sie in der `skeleton.css`-Datei nachsehen, können Sie sehen, wie dies funktioniert. Skeleton hat zum Beispiel das Folgende definiert, um Elemente mit "drei Spalten" -Klassen zu stylen.

```css
.three.columns {
  width: 22%;
}
```

Alles was Skeleton (oder ein anderes Raster-Framework) macht, ist das Einrichten von vordefinierten Klassen, die Sie verwenden können, indem Sie sie Ihrem Markup hinzufügen. Es ist genau so, wie wenn Sie die Arbeit des Berechnens dieser Prozentsätze selber machen würden.

Wie Sie sehen können, müssen wir beim Verwenden von Skeleton sehr wenig CSS schreiben. Es übernimmt das ganze Floating für uns, wenn wir Klassen in unser Markup einfügen. Diese Fähigkeit, die Verantwortung für das Layout an etwas anderes zu übergeben, machte die Verwendung eines Frameworks für ein Rastersystem zu einer überzeugenden Wahl! Diese Tage aber, mit CSS-Grid-Layout, bewegen viele Entwickler sich davon weg, diese Frameworks zu verwenden, um das eingebaute native Raster, das CSS bietet, zu nutzen.

## Zusammenfassung

Sie verstehen jetzt, wie verschiedene Rastersysteme erstellt werden, was nützlich sein wird, um mit älteren Sites zu arbeiten und den Unterschied zwischen dem nativen Raster von CSS-Grid-Layout und diesen älteren Systemen zu verstehen.
