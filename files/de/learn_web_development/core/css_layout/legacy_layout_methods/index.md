---
title: Legacy-Layout-Methoden
slug: Learn_web_development/Core/CSS_layout/Legacy_Layout_Methods
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

Gridsysteme sind ein sehr verbreitetes Merkmal in CSS-Layouts, und bevor CSS-Grid-Layout eingeführt wurde, wurden sie oft mit Floats oder anderen Layout-Funktionen umgesetzt. Man stellt sich sein Layout als eine feste Anzahl von Spalten vor (z. B. 4, 6 oder 12) und platziert die Inhaltsspalten in diesen imaginären Spalten. In diesem Artikel werden wir erforschen, wie diese älteren Methoden funktionieren, damit Sie verstehen, wie sie verwendet wurden, falls Sie an einem älteren Projekt arbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis der grundlegenden Konzepte hinter den Grid-Layout-Systemen, die vor der Verfügbarkeit von CSS-Grid-Layouts in Browsern verwendet wurden.
      </td>
    </tr>
  </tbody>
</table>

## Layout- und Gridsysteme vor CSS-Grid-Layout

Es könnte für jemanden mit Designhintergrund überraschend erscheinen, dass CSS bis vor Kurzem kein eingebautes Gridsystem hatte und wir stattdessen scheinbar eine Vielzahl suboptimaler Methoden nutzten, um gridähnliche Designs zu erstellen. Wir bezeichnen diese jetzt als "Legacy"-Methoden.

Für neue Projekte wird in den meisten Fällen das CSS-Grid-Layout in Kombination mit einer oder mehreren anderen modernen Layout-Methoden verwendet, um die Grundlage für jedes Layout zu bilden. Sie werden jedoch ab und zu auf "Gridsysteme" stoßen, die diese Legacy-Methoden verwenden. Es lohnt sich, zu verstehen, wie sie funktionieren und warum sie sich von CSS-Grid-Layouts unterscheiden.

Diese Lektion erklärt, wie Gridsysteme und Grid-Frameworks, die auf Floats und Flexbox basieren, funktionieren. Nachdem Sie das Grid-Layout studiert haben, werden Sie wahrscheinlich überrascht sein, wie kompliziert das alles erscheint! Dieses Wissen wird Ihnen helfen, wenn Sie Fallback-Code für Browser erstellen müssen, die neuere Methoden nicht unterstützen, und es ermöglicht Ihnen, an bestehenden Projekten zu arbeiten, die diese Arten von Systemen verwenden.

Es ist wichtig zu beachten, während wir diese Systeme erkunden, dass keines von ihnen tatsächlich ein Raster in der Weise erstellt, wie das CSS-Grid-Layout ein Raster erstellt. Sie funktionieren, indem sie Elementen eine Größe geben und sie so verschieben, dass sie sich in einer Weise ausrichten, die _wie_ ein Raster _aussieht_.

## Ein Layout mit zwei Spalten

Beginnen wir mit dem einfachsten Beispiel — einem Layout mit zwei Spalten. Sie können mitmachen, indem Sie eine neue `index.html`-Datei auf Ihrem Computer erstellen, sie mit einer [einfachen HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) füllen und den untenstehenden Code an geeigneten Stellen einfügen. Am Ende des Abschnitts können Sie ein Live-Beispiel sehen, wie der endgültige Code aussehen sollte.

Zuerst brauchen wir etwas Inhalt, den wir in unsere Spalten setzen. Ersetzen Sie, was immer gerade im Body ist, durch Folgendes:

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

Jede der Spalten benötigt ein äußeres Element, um ihren Inhalt zu enthalten und uns zu ermöglichen, alles auf einmal zu manipulieren. In diesem Beispiel haben wir uns für {{htmlelement("div")}}s entschieden, aber Sie können auch etwas Semantischeres wählen, wie {{htmlelement("article")}}s, {{htmlelement("section")}}s und {{htmlelement("aside")}}, oder was auch immer.

Nun zum CSS. Zunächst einmal wenden Sie Folgendes auf Ihr HTML an, um eine grundlegende Einrichtung vorzunehmen:

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}
```

Der Body wird 90% der Viewport-Breite haben, bis er 900px Breite erreicht, in welchem Fall er an dieser Breite fest bleibt und sich im Viewport zentriert. Standardmäßig werden seine Kinder (die {{htmlelement("Heading_Elements", "h1")}} und die beiden {{htmlelement("div")}}s) 100% der Breite des Bodys einnehmen. Wenn wir wollen, dass die beiden {{htmlelement("div")}}s nebeneinander schweben, müssen wir ihre Breiten so einstellen, dass sie zusammen 100% der Breite ihres Elternelements oder weniger ausmachen, damit sie nebeneinander passen. Fügen Sie folgenden Code am Ende Ihres CSS hinzu:

```css
div:nth-of-type(1) {
  width: 48%;
}

div:nth-of-type(2) {
  width: 48%;
}
```

Hier haben wir beide auf 48% der Breite ihres Elternteils eingestellt — das ergibt insgesamt 96%, womit uns 4% frei bleiben, um als Abstand zwischen den beiden Spalten zu dienen, was den Inhalt etwas atmen lässt. Jetzt müssen wir nur noch die Spalten schweben lassen, so:

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

Das alles zusammengefügt sollte uns ein Ergebnis wie dieses geben:

{{ EmbedLiveSample('A_two_column_layout', '100%', 520) }}

Sie werden bemerken, dass wir hier Prozentsätze für alle Breiten verwenden — das ist eine ziemlich gute Strategie, da es ein **flüssiges Layout** schafft, das sich an verschiedene Bildschirmgrößen anpasst und die gleichen Proportionen für die Spaltenbreiten bei kleineren Bildschirmgrößen beibehält. Versuchen Sie, die Breite Ihres Browserfensters zu ändern, um es selbst zu sehen. Dies ist ein wertvolles Werkzeug für responsives Webdesign.

> [!NOTE]
> Sie können sich dieses Beispiel unter [0_two-column-layout.html](https://mdn.github.io/learning-area/css/css-layout/floats/0_two-column-layout.html) ansehen (siehe auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/floats/0_two-column-layout.html)).

## Einfache Legacy-Grid-Frameworks erstellen

Die Mehrheit der Legacy-Frameworks nutzt das Verhalten der {{cssxref("float")}}-Eigenschaft, um eine Spalte neben die andere zu schweben, um etwas zu schaffen, das wie ein Raster aussieht. Der Prozess, ein Raster mit Floats zu erstellen, zeigt Ihnen, wie das funktioniert und führt auch einige fortgeschrittenere Konzepte ein, um auf den Dingen aufzubauen, die Sie in der Lektion über [Floats und Clearing](/de/docs/Learn_web_development/Core/CSS_layout/Floats) gelernt haben.

Die einfachste Art von Grid-Framework, die man erstellen kann, ist ein festbreites — wir müssen nur herausfinden, wie viel Gesamtbreite wir für unser Design wollen, wie viele Spalten wir wollen und wie breit die Abstände und Spalten sein sollten. Wenn wir uns stattdessen dazu entschließen würden, unser Design auf einem Raster mit Spalten zu gestalten, die je nach Browserbreite wachsen und schrumpfen, müssten wir prozentuale Breiten für die Spalten und Abstände zwischen ihnen berechnen.

In den nächsten Abschnitten schauen wir uns an, wie man beides erstellt. Wir werden ein 12-Spalten-Raster erstellen — eine sehr verbreitete Wahl, die als sehr anpassungsfähig an verschiedene Situationen gilt, da 12 schön durch 6, 4, 3 und 2 teilbar ist.

### Ein einfaches festes Breitenraster

Lassen Sie uns zuerst ein Gridsystem erstellen, das feste Breiten verwendet.

Beginnen Sie mit einer lokalen Kopie unserer Beispieldatei [simple-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid.html), die folgendes Markup in ihrem Body enthält.

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

Das Ziel ist es, dies in ein Demonstrationsraster von zwei Reihen auf einem Zwölf-Spalten-Raster zu verwandeln — die obere Reihe demonstriert die Größe der einzelnen Spalten, die zweite Reihe einige unterschiedlich große Bereiche im Raster.

![CSS-Grid mit 16 Gitterelementen auf zwölf Spalten und zwei Reihen verteilt. Die obere Reihe hat 12 gleich breite Gitterelemente in 12 Spalten. Die zweite Reihe hat unterschiedlich große Gitterelemente. Element 13 erstreckt sich über 1 Spalte, Element 14 über sechs Spalten, 15 über drei und 16 über zwei.](simple-grid-finished.png)

Fügen Sie im {{htmlelement("style")}}-Element den folgenden Code hinzu, der dem Wrapper-Container eine Breite von 980 Pixeln gibt, mit einem Padding auf der rechten Seite von 20 Pixeln. Das lässt uns 960 Pixel für unsere Gesamtbreite für Spalten/Abstände - in diesem Fall wird das Padding von der gesamten Inhaltsbreite abgezogen, da wir {{cssxref("box-sizing")}} auf `border-box` für alle Elemente auf der Seite gesetzt haben (siehe [Das alternative CSS-Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#the_alternative_css_box_model) für mehr Erläuterung).

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

Nun verwenden Sie den Zeilen-Container, der um jede Reihe des Rasters gewickelt ist, um eine Reihe von der anderen zu trennen. Fügen Sie die folgende Regel unterhalb Ihrer vorherigen hinzu:

```css
.row {
  clear: both;
}
```

Durch das Anwenden dieses Clearing müssen wir jede Reihe nicht vollständig mit Elementen füllen, die die vollen zwölf Spalten ausmachen. Die Reihen bleiben getrennt und beeinflussen sich nicht gegenseitig.

Die Abstände zwischen den Spalten sind 20 Pixel breit. Wir erstellen diese Abstände als einen Rand auf der linken Seite jeder Spalte — einschließlich der ersten Spalte, um die 20 Pixel Padding auf der rechten Seite des Containers auszugleichen. So haben wir insgesamt 12 Abstände — 12 x 20 = 240.

Wir müssen das von unserer Gesamtbreite von 960 Pixeln subtrahieren, was uns 720 Pixel für unsere Spalten lässt. Wenn wir das jetzt durch 12 teilen, wissen wir, dass jede Spalte 60 Pixel breit sein sollte.

Unser nächster Schritt ist es, eine Regel für die Klasse `.col` zu erstellen, sie nach links zu floaten, ihr einen {{cssxref("margin-left")}} von 20 Pixeln zu geben, um den Abstand zu bilden, und eine {{cssxref("width")}} von 60 Pixeln. Fügen Sie die folgende Regel am Ende Ihres CSS hinzu:

```css
.col {
  float: left;
  margin-left: 20px;
  width: 60px;
  background: rgb(255 150 150);
}
```

Die obere Reihe einzelner Spalten wird nun ordentlich als Raster angezeigt.

> [!NOTE]
> Wir haben jeder Spalte auch eine hellrote Farbe gegeben, damit Sie genau sehen können, wie viel Platz jede einnimmt.

Layout-Container, denen wir mehr als eine Spalte zuweisen möchten, benötigen spezielle Klassen, um ihre {{cssxref("width")}}-Werte auf die benötigte Anzahl von Spalten (plus Abstände dazwischen) anzupassen. Wir müssen eine zusätzliche Klasse erstellen, um Container zu ermöglichen, 2 bis 12 Spalten zu überspannen. Jede Breite ist das Ergebnis der Addition der Spaltenbreiten dieser Anzahl von Spalten plus die Breiten der Abstände, die immer eins weniger als die Anzahl der Spalten betragen.

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

Mit diesen Klassen können wir nun unterschiedlich breite Spalten im Raster anordnen. Versuchen Sie, die Datei zu speichern und im Browser zu laden, um die Effekte zu sehen.

> [!NOTE]
> Wenn Sie Probleme haben, das obige Beispiel zum Laufen zu bringen, versuchen Sie, es mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid-finished.html) auf GitHub zu vergleichen ([sehen Sie es auch live](https://mdn.github.io/learning-area/css/css-layout/grids/simple-grid-finished.html)).

Versuchen Sie, die Klassen an Ihren Elementen zu ändern oder sogar einige Container hinzuzufügen und zu entfernen, um zu sehen, wie Sie das Layout variieren können. Beispielsweise könnten Sie die zweite Reihe so aussehen lassen:

```html
<div class="row">
  <div class="col span8">13</div>
  <div class="col span4">14</div>
</div>
```

Jetzt, da Sie ein Gridsystem haben, können Sie die Reihen und die Anzahl der Spalten in jeder Reihe definieren und dann jeden Container mit dem benötigten Inhalt füllen. Großartig!

### Ein flüssiges Raster erstellen

Unser Raster funktioniert gut, aber es hat eine feste Breite. Wir möchten wirklich ein flexibles (flüssiges) Raster haben, das mit dem verfügbaren Platz im Browser {{Glossary("viewport", "Viewport")}} wächst und schrumpft. Um dies zu erreichen, können wir die Referenz-Pixelbreiten in Prozentsätze umwandeln.

Die Gleichung, die eine feste Breite in eine flexible, prozentuale umwandelt, ist wie folgt.

```plain
target / context = result
```

Für unsere Spaltenbreite ist unsere **Zielbreite** 60 Pixel und unser **Kontext** ist der 960-Pixel-Wrapper. Wir können das folgende verwenden, um einen Prozentsatz zu berechnen.

```plain
60 / 960 = 0.0625
```

Wir verschieben dann den Dezimalpunkt um zwei Stellen, was uns einen Prozentsatz von 6,25% ergibt. So können wir in unserem CSS die 60-Pixel-Spaltenbreite durch 6,25% ersetzen.

Dasselbe müssen wir mit unserer Spaltenabstandbreite tun:

```plain
20 / 960 = 0.02083333333
```

So müssen wir den 20-Pixel-{{cssxref("margin-left")}} auf unserer `.col`-Regel und das 20-Pixel-{{cssxref("padding-right")}} auf `.wrapper` durch 2,08333333% ersetzen.

#### Unser Raster aktualisieren

Um in diesem Abschnitt loszulegen, machen Sie eine neue Kopie Ihrer vorherigen Beispielseite oder machen Sie eine lokale Kopie unseres [simple-grid-finished.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/simple-grid-finished.html) Codes als Ausgangspunkt.

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

Nicht nur haben wir ihm eine prozentuale {{cssxref("width")}} gegeben, wir haben auch eine {{cssxref("max-width")}}-Eigenschaft hinzugefügt, um zu verhindern, dass das Layout zu breit wird.

Als Nächstes aktualisieren Sie die vierte CSS-Regel (mit dem `.col`-Selektor) so:

```css
.col {
  float: left;
  margin-left: 2.08333333%;
  width: 6.25%;
  background: rgb(255 150 150);
}
```

Jetzt kommt der etwas mühsamere Teil — wir müssen alle unsere `.col.span`-Regeln aktualisieren, um Prozentsätze anstelle von Pixelbreiten zu verwenden. Das erfordert etwas Zeit mit einem Taschenrechner; um Ihnen ein wenig Mühe zu ersparen, haben wir es bereits für Sie gemacht.

Aktualisieren Sie den unteren Block der CSS-Regeln mit folgendem:

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

Speichern Sie nun Ihren Code, laden Sie ihn in einem Browser und versuchen Sie, die Viewport-Breite zu ändern — Sie sollten sehen, dass sich die Spaltenbreiten schön anpassen.

> [!NOTE]
> Wenn Sie Probleme haben, das obige Beispiel zum Laufen zu bringen, versuchen Sie, es mit unserer [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid.html) zu vergleichen ([sehen Sie es auch live](https://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid.html)).

### Leichter zu berechnende Kalkulationen mit der calc()-Funktion

Sie könnten die {{cssxref("calc", "calc()")}}-Funktion verwenden, um die Berechnungen direkt in Ihrem CSS durchzuführen — dies ermöglicht es, einfache mathematische Gleichungen in Ihre CSS-Werte einzufügen, um zu berechnen, wie ein Wert sein sollte. Es ist besonders nützlich, wenn komplexe Mathematik erforderlich ist, und Sie können sogar eine Berechnung durchführen, die unterschiedliche Einheiten verwendet, zum Beispiel "Ich möchte, dass die Höhe dieses Elements immer 100% der Höhe seines Elternteils minus 50px beträgt". Siehe [dieses Beispiel aus einem MediaStream Recording API Tutorial](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API#keeping_the_interface_constrained_to_the_viewport_regardless_of_device_height_with_calc).

Wie auch immer, zurück zu unseren Rastern! Jedes Element, das sich über mehr als eine Spalte unseres Rasters erstreckt, hat eine Gesamtbreite von 6,25%, multipliziert mit der Anzahl der überspannten Spalten, plus 2,08333333%, multipliziert mit der Anzahl der Abstände (das wird immer die Anzahl der Spalten minus 1 sein). Die `calc()`-Funktion ermöglicht es uns, diese Berechnung direkt innerhalb des Breitenwerts durchzuführen, also für jedes Element, das 4 Spalten überspannt, können wir das so tun, zum Beispiel:

```css
.col.span4 {
  width: calc((6.25% * 4) + (2.08333333% * 3));
}
```

Versuchen Sie, Ihren unteren Block von Regeln durch Folgendes zu ersetzen, und laden Sie ihn dann im Browser neu, um zu sehen, ob Sie das gleiche Ergebnis erhalten:

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
> Sie können unsere fertige Version in [fluid-grid-calc.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid-calc.html) sehen (auch [live ansehen](https://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid-calc.html)).

### Semantische versus "unsemantische" Gridsysteme

Klassen zu Ihrem Markup hinzuzufügen, um das Layout zu definieren, bedeutet, dass Ihr Inhalt und Ihr Markup mit Ihrer visuellen Präsentation verknüpft werden. Sie werden manchmal hören, dass diese Verwendung von CSS-Klassen als "unsemantisch" beschrieben wird — sie beschreibt, wie der Inhalt aussieht — im Gegensatz zur semantischen Verwendung von Klassen, die den Inhalt beschreibt. Dies ist der Fall mit unseren `span2`, `span3`, usw. Klassen.

Dies sind nicht die einzigen Ansätze. Sie könnten sich stattdessen für Ihr Grid entscheiden und dann die Größeninformationen auf die Regeln für bestehende semantische Klassen anwenden. Beispielsweise, wenn Sie ein {{htmlelement("div")}} mit einer Klasse von `content` hätten, das Sie über 8 Spalten span­nen möchten, könnten Sie die Breite von der `span8`-Klasse kopieren, wobei sich die Regel so darstellen würde:

```css
.content {
  width: calc((6.25% * 8) + (2.08333333% * 7));
}
```

> [!NOTE]
> Wenn Sie einen Präprozessor wie [Sass](https://sass-lang.com/) verwenden würden, könnten Sie einen einfachen Mixin erstellen, um diesen Wert für Sie einzufügen.

### Offset-Container in unserem Raster aktivieren

Das von uns erstellte Raster funktioniert gut, solange wir alle Container bündig mit der linken Seite des Rasters starten möchten. Wenn wir eine leere Spaltenbreite vor dem ersten Container lassen wollten — oder zwischen Containern — müssten wir eine Offset-Klasse erstellen, um eine linken Rand hinzuzufügen, der uns optisch durch das Raster schiebt. Mehr Mathe!

Lassen Sie uns das ausprobieren.

Starten Sie mit Ihrem vorherigen Code oder verwenden Sie unsere [fluid-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid.html) Datei als Ausgangspunkt.

Erstellen wir eine Klasse in unserem CSS, die ein Container-Element um eine Spaltenbreite versetzt. Fügen Sie Folgendes am Ende Ihres CSS hinzu:

```css
.offset-by-one {
  margin-left: calc(6.25% + (2.08333333% * 2));
}
```

Oder, wenn Sie es vorziehen, die Prozentsätze selbst zu berechnen, verwenden Sie dies:

```css
.offset-by-one {
  margin-left: 10.41666666%;
}
```

Sie können diese Klasse jetzt auf jeden Container anwenden, bei dem Sie eine ein Spaltenbreite leeren Raum auf der linken Seite lassen möchten. Wenn Sie dies in Ihrem HTML haben:

```html
<div class="col span6">14</div>
```

Versuchen Sie, es durch Folgendes zu ersetzen:

```html
<div class="col span5 offset-by-one">14</div>
```

> [!NOTE]
> Beachten Sie, dass Sie die Anzahl der überspannten Spalten reduzieren müssen, um Platz für den Offset zu schaffen!

Versuchen Sie, die Datei zu laden und zu aktualisieren, um den Unterschied zu sehen, oder sehen Sie sich unser [fluid-grid-offset.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/fluid-grid-offset.html) Beispiel an (siehe es auch [live](https://mdn.github.io/learning-area/css/css-layout/grids/fluid-grid-offset.html)). Das fertige Beispiel sollte so aussehen:

![Das Raster hat 2 Reihen. Die erste Reihe hat 12 gleich breite Gitteritems und die zweite Reihe hat 4 Items unterschiedlicher Breite. Element 13 erstreckt sich über 1 Spalte, Element 14 über fünf Spalten, 15 über drei und 16 über zwei. Element 14 hat die Klasse 'offset-by-one', was bedeutet, dass es in der 3. Spalte beginnt, nicht in der zweiten, wodurch ein ein Spaltenbreite leerer Platz in der zweiten Zeile, zweiten Spalte bleibt.](offset-grid-finished.png)

> [!NOTE]
> Als zusätzliche Übung, können Sie eine `offset-by-two`-Klasse implementieren?

### Einschränkungen bei schwebenden Rastern

Beim Verwenden eines Systems wie diesem müssen Sie darauf achten, dass Ihre Gesamtbreiten korrekt summiert werden und dass Sie nicht Elemente in eine Zeile einfügen, die mehr Spalten beanspruchen können, als die Zeile aufnehmen kann. Aufgrund der Art und Weise, wie Floats funktionieren, falls die Anzahl der Gridspalten zu breit für das Raster wird, werden die Elemente am Ende auf die nächste Zeile herunterfallen und das Raster brechen.

Beachten Sie auch, dass, wenn der Inhalt der Elemente breiter wird als die Zeilen, die sie einnehmen, er überläuft und unordentlich aussieht.

Die größte Einschränkung dieses Systems ist, dass es im Wesentlichen eindimensional ist. Wir haben es mit Spalten zu tun und Elemente über Spalten zu spannen, aber nicht über Zeilen. Mit diesen älteren Layout-Methoden ist es sehr schwierig, die Höhe von Elementen zu kontrollieren, ohne explizit eine Höhe festzulegen, und dies ist auch ein sehr unflexibler Ansatz — er funktioniert nur, wenn Sie garantieren können, dass Ihr Inhalt eine bestimmte Höhe hat.

## Flexbox-Raster?

Wenn Sie unseren vorherigen Artikel über [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) gelesen haben, denken Sie vielleicht, dass Flexbox die ideale Lösung zum Erstellen eines Gridsystems ist. Es gibt viele Flexbox-basierte Gridsysteme, und Flexbox kann viele der Probleme lösen, die wir bereits festgestellt haben, als wir unser Grid oben erstellt haben.

Allerdings wurde Flexbox nie als Gridsystem konzipiert und stellt ein neues Set von Herausforderungen dar, wenn es als solches verwendet wird. Als ein einfaches Beispiel dafür können wir das gleiche Beispiel-Markup verwenden, das wir oben verwendet haben, und das folgende CSS verwenden, um die `wrapper`, `row` und `col` Klassen zu stylen:

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

Sie können versuchen, in Ihrem eigenen Beispiel diese Ersetzungen vorzunehmen, oder schauen Sie sich unser [flexbox-grid.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/flexbox-grid.html) Beispielcode an (sehen Sie es auch [live](https://mdn.github.io/learning-area/css/css-layout/grids/flexbox-grid.html)).

Hier machen wir jede Zeile zu einem Flex-Container. Mit einem Flexbox-basierten Grid benötigen wir immer noch Zeilen, um uns zu ermöglichen, Elemente zu haben, die insgesamt weniger als 100% ausmachen. Setzen Sie diesen Container auf `display: flex`.

Auf `.col` setzen wir den ersten Wert der {{cssxref("flex")}}-Eigenschaft ({{cssxref("flex-grow")}}) auf 1, damit unsere Items wachsen können, den zweiten Wert ({{cssxref("flex-shrink")}}) auf 1, damit die Items schrumpfen können, und den dritten Wert ({{cssxref("flex-basis")}}) auf `auto`. Da unser Element eine {{cssxref("width")}} hat, wird `auto` diese Breite als `flex-basis`-Wert verwenden.

Auf der oberen Linie erhalten wir zwölf ordentliche Boxen auf dem Raster, und sie wachsen und schrumpfen gleichmäßig, wenn sich die Viewport-Breite ändert. Auf der zweiten Linie jedoch haben wir nur vier Items, und diese wachsen und schrumpfen auch ausgehend von dieser 60px-Basis. Da es nur vier von ihnen sind, können sie viel mehr wachsen als die Items in der darüberliegenden Reihe, was dazu führt, dass sie alle die gleiche Breite in der zweiten Reihe einnehmen.

![Das Raster hat zwei Reihen. Jede Reihe ist ein Flex-Container. Die erste Reihe hat zwölf gleich breite Flex-Items. Die zweite Reihe hat vier gleich breite Flex-Items.](flexbox-grid-incomplete.png)

Um dies zu korrigieren, müssen wir immer noch unsere `span`-Klassen einfügen, um eine Breite bereitzustellen, die den von `flex-basis` für dieses Element verwendeten Wert ersetzt.

Sie respektieren auch nicht das von den Items darüber verwendete Raster, weil sie nichts darüber wissen.

Flexbox ist **eindimensional** von Natur aus. Es befasst sich mit einer einzigen Dimension, die einer Reihe oder einer Spalte. Wir können kein strenges Raster für Spalten und Zeilen erstellen, was bedeutet, dass wir, wenn wir Flexbox für unser Raster verwenden möchten, immer noch Prozentsätze wie beim schwebenen Layout berechnen müssen.

In Ihrem Projekt könnten Sie sich dennoch entschließen, ein Flexbox-'Grid' zu verwenden, aufgrund der zusätzlichen Ausrichtungs- und Raumsverteilungsmöglichkeiten, die Flexbox im Vergleich zu Floats bietet. Sie sollten jedoch bewusst sein, dass Sie immer noch ein Werkzeug für etwas anderes verwenden, als es konzipiert wurde. Daher könnte es Ihnen vorkommen, als ob es Sie dazu bringt, zusätzliche Hürden zu überwinden, um das gewünschte Endergebnis zu erzielen.

## Dritthersteller-Gridsysteme

Jetzt, da wir die Mathematik hinter unseren Gitterberechnungen verstehen, sind wir in einer guten Position, um einige der gängigen Drittanbieter-Gridsysteme zu betrachten. Wenn Sie "CSS Grid Framework" im Internet suchen, werden Sie eine große Liste von Optionen zur Auswahl finden. Beliebte Frameworks wie [Bootstrap](https://getbootstrap.com/) und [Foundation](https://get.foundation/) beinhalten ein Gridsystem. Es gibt auch eigenständige Gridsysteme, entweder als CSS entwickelt oder mit Präprozessoren.

Lassen Sie uns einen Blick auf eines dieser eigenständigen Systeme werfen, da es häufige Techniken für die Arbeit mit einem Grid-Framework demonstriert. Das Grid, das wir verwenden werden, ist Teil von Skeleton, einem einfachen CSS-Framework.

Um loszulegen, besuchen Sie die [Skeleton-Website](http://getskeleton.com/), und wählen Sie "Download", um die ZIP-Datei herunterzuladen. Entpacken Sie diese und kopieren Sie die skeleton.css und normalize.css Dateien in ein neues Verzeichnis.

Machen Sie eine Kopie unserer [html-skeleton.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/html-skeleton.html) Datei und speichern Sie sie im gleichen Verzeichnis wie die Skeleton- und Normalisierungscs.

Schließen Sie die Skeleton- und Normalisierungscsc in die HTML-Seite ein, indem Sie Folgendes in den Kopfbereich einfügen:

```html
<link href="normalize.css" rel="stylesheet" />
<link href="skeleton.css" rel="stylesheet" />
```

Skeleton enthält mehr als nur ein Gridsystem — es enthält auch CSS für Typografie und andere Seitenelemente, die Sie als Ausgangspunkt verwenden können. Wir werden diese vorerst in Standardform belassen, da uns hier hauptsächlich das Grid interessiert.

> [!NOTE] > [Normalize](https://necolas.github.io/normalize.css/) ist eine wirklich nützliche kleine CSS-Bibliothek, geschrieben von Nicolas Gallagher, die automatisch einige grundlegende Layout-Korrekturen durchführt und das Standard-Element Styling konsistenter über Browser hinweg macht.

Wir verwenden ein ähnliches HTML wie in unserem früheren Beispiel. Fügen Sie Folgendes in Ihren HTML-Body ein:

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

Um Skeleton zu verwenden, müssen wir dem Wrapper-{{htmlelement("div")}} eine Klasse von `container` geben — dies ist bereits in unserem HTML enthalten. Dadurch wird der Inhalt mit einer maximalen Breite von 960 Pixeln zentriert. Sie können sehen, wie die Boxen jetzt nie breiter als 960 Pixel werden.

Sie können einen Blick in die skeleton.css-Datei werfen, um das CSS zu sehen, das verwendet wird, wenn wir diese Klasse anwenden. Das `<div>`-Element wird mit 'auto'-linken und rechten Abständen zentriert, und es wird ein Padding von 20 Pixeln links und rechts aufgebracht. Skeleton setzt auch die {{cssxref("box-sizing")}}-Eigenschaft auf `border-box`, wie wir es zuvor getan haben, sodass das Padding und die Ränder dieses Elements in die Gesamtbreite einbezogen werden.

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

Elemente können nur ein Teil des Grids sein, wenn sie sich in einer Zeile befinden, daher benötigen wir, wie in unserem früheren Beispiel, ein zusätzliches `<div>` oder ein anderes Element mit einer Klasse von `row`, das zwischen den Inhalts-`<div>`-Elementen und dem Container-`<div>` verschachtelt ist. Das haben wir bereits auch getan.

Nun lassen Sie uns die Container-Boxen anordnen. Skeleton basiert auf einem 12-Spalten-Raster. Die Boxen in der oberen Linie benötigen alle Klassen von `one column`, um eine Spalte zu überspannen.

Fügen Sie diese jetzt hinzu, wie im folgenden Ausschnitt gezeigt:

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

Als nächstes geben Sie den Containern in der zweiten Reihe Klassen, die die Anzahl der Spalten erklären, die sie überspannen sollten, wie folgt:

```html
<div class="row">
  <div class="one column">13</div>
  <div class="six columns">14</div>
  <div class="three columns">15</div>
  <div class="two columns">16</div>
</div>
```

Versuchen Sie, Ihre HTML-Datei zu speichern und in Ihrem Browser zu laden, um die Wirkung zu sehen.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, dieses Beispiel zum Laufen zu bringen, versuchen Sie, das Fenster, das Sie zur Ansicht verwenden, zu vergrößern (das Grid wird nicht wie hier beschrieben angezeigt, wenn das Fenster zu schmal ist). Falls das nicht funktioniert, vergleichen Sie es mit unserer [html-skeleton-finished.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/html-skeleton-finished.html) Datei (sehen Sie es auch [live](https://mdn.github.io/learning-area/css/css-layout/grids/html-skeleton-finished.html)).

Wenn Sie in die skeleton.css-Datei schauen, können Sie sehen, wie es funktioniert. Beispielsweise hat Skeleton folgendes definiert, um Elemente mit "three columns"-Klassen zu stylen.

```css
.three.columns {
  width: 22%;
}
```

Alles, was Skeleton (oder ein anderes Grid-Framework) tut, ist vordefinierte Klassen bereitzustellen, die Sie verwenden können, indem Sie sie Ihrem Markup hinzufügen. Es ist genau das gleiche, als ob Sie die Arbeit selbst machen, um diese Prozentsätze zu berechnen.

Wie Sie sehen können, müssen wir bei Verwendung von Skeleton sehr wenig CSS schreiben. Es erledigt das gesamte Schweben für uns, wenn wir Klassen zu unserem Markup hinzufügen. Diese Möglichkeit, die Verantwortung für das Layout an etwas anderes zu übertragen, machte die Verwendung eines Frameworks für ein Gridsystem zu einer verlockenden Wahl! Heutzutage jedoch, mit CSS-Grid-Layout, wechseln viele Entwickler von diesen Frameworks zum nativ eingebauten Grid, das CSS bietet.

## Zusammenfassung

Sie verstehen nun, wie verschiedene Gridsysteme erstellt werden, was für die Arbeit mit älteren Sites nützlich sein wird und um den Unterschied zwischen dem nativen Grid von CSS-Grid-Layout und diesen älteren Systemen zu verstehen.
