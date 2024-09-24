---
title: Grids
slug: Learn/CSS/CSS_layout/Grids
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout")}}

[CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) ist ein zweidimensionales Layoutsystem für das Web. Es ermöglicht Ihnen, Inhalte in Zeilen und Spalten zu organisieren und bietet viele Funktionen, die die Erstellung komplexer Layouts vereinfachen. Dieser Artikel erklärt alles, was Sie wissen müssen, um mit Grid Layout zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (Studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (Studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a> und
        <a href="/de/docs/Learn/CSS/Building_blocks">Gestaltung von Boxen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die grundlegenden Konzepte von Grid Layout verstehen sowie deren Implementierung mit CSS Grid.
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Grid Layout?

Ein Grid ist eine Sammlung von horizontalen und vertikalen Linien, die ein Muster schaffen, an dem wir unsere Designelemente ausrichten können. Sie helfen uns dabei, Layouts zu erstellen, in denen unsere Elemente nicht von Seite zu Seite springen oder ihre Breite ändern, und bieten so eine größere Konsistenz auf unseren Websites.

Ein Grid hat typischerweise **Spalten**, **Zeilen** und die Abstände zwischen jeder Zeile und Spalte. Die Abstände werden häufig als **Rinnen** bezeichnet.

![CSS-Grid mit Teilen, die als Zeilen, Spalten und Rinnen gekennzeichnet sind. Zeilen sind die horizontalen Segmente des Grids und Spalten sind die vertikalen Segmente des Grids. Der Raum zwischen zwei Zeilen wird als 'Zeilenrinnen' bezeichnet und der Raum zwischen zwei Spalten als 'Spaltenrinnen'.](grid.png)

## Erstellen Ihres Grids in CSS

Nachdem Sie sich für das Grid entschieden haben, das Ihr Design benötigt, können Sie CSS Grid Layout verwenden, um es zu erstellen. Wir werden zunächst die grundlegenden Funktionen von Grid Layout betrachten und dann erkunden, wie man ein einfaches Gridsystem für Ihr Projekt erstellt.
Das folgende Video bietet eine anschauliche Erklärung zur Nutzung von CSS Grid:

{{EmbedYouTube("KOvGeFUHAC0")}}

### Definition eines Grids

Versuchen wir es mit Grid Layouts anhand eines Beispiels. Laden Sie die [Ausgangsdatei](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/0-starting-point.html) herunter und öffnen Sie sie in Ihrem Texteditor und Browser (Sie können sie auch [hier live ansehen](https://mdn.github.io/learning-area/css/css-layout/grids/0-starting-point.html)). Sie werden ein Beispiel mit einem Container sehen, der einige Kindelemente enthält. Diese Elemente werden standardmäßig im normalen Fluss angezeigt, sodass sie untereinander erscheinen. Für den ersten Teil dieser Lektion werden wir diese Datei verwenden, um zu sehen, wie sich ihr Grid verhält.

Ähnlich wie bei der Definition von Flexbox definieren Sie ein Grid Layout, indem Sie den Wert der {{cssxref("display")}}-Eigenschaft auf `grid` setzen. Wie im Falle von Flexbox transformiert die `display: grid`-Eigenschaft alle direkten Kinder des Containers in Gridelemente. Fügen Sie die folgende CSS zu Ihrer Datei hinzu:

```css
.container {
  display: grid;
}
```

Im Gegensatz zu Flexbox sehen die Elemente nicht sofort anders aus. Die Deklaration von `display: grid` gibt Ihnen ein Ein-Spalten-Grid, sodass Ihre Elemente weiter untereinander angezeigt werden, wie sie es im normalen Fluss tun.

Um etwas zu sehen, das mehr nach einem Grid aussieht, müssen wir dem Grid einige Spalten hinzufügen. Lassen Sie uns drei 200-Pixel-Spalten hinzufügen. Sie können jede Längeneinheit oder Prozentsätze verwenden, um diese Spuren zu erstellen.

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

Fügen Sie die zweite Deklaration Ihrer CSS-Regel hinzu und laden Sie die Seite neu. Sie sollten sehen, dass die Elemente sich so neu anordnen, dass sich jeweils eines in jedem Zellbereich des Grids befindet.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```html hidden
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

{{ EmbedLiveSample('Defining_a_grid', '100%', 200) }}

### Flexible Grids mit der fr-Einheit

Neben der Erstellung von Grids mit Längen und Prozentsätzen können wir [`fr`](/de/docs/Web/CSS/flex_value) verwenden. Die `fr`-Einheit repräsentiert einen Bruchteil des verfügbaren Raums im Grid-Container, um die Zeilen und Spalten flexibel zu dimensionieren.

Ändern Sie Ihre Spurenliste in die folgende Definition, indem Sie drei `1fr`-Spuren erstellen:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Sie haben jetzt flexible Spuren. Die `fr`-Einheit verteilt den Raum proportional. Sie können unterschiedliche positive Werte für Ihre Spuren angeben, wie folgt:

```css
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
```

Die erste Spur erhält `2fr` des verfügbaren Raums und die anderen beiden Spuren erhalten `1fr`, wodurch die erste Spur größer wird. Sie können `fr`-Einheiten mit festen Längeneinheiten mischen. In diesem Fall wird der für die festen Spuren benötigte Raum zuerst verwendet, bevor der verbleibende Raum auf die anderen Spuren verteilt wird.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```html hidden
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

{{ EmbedLiveSample('Flexible_grids_with_the_fr_unit', '100%', 200) }}

> [!NOTE]
> Die `fr`-Einheit verteilt _verfügbaren_ Raum, nicht _allen_ Raum. Daher, wenn einer Ihrer Tracks etwas Großes enthalten hat, wird es weniger freien Raum geben, um ihn zu teilen.

### Abstände zwischen Tracks

Um Abstände zwischen Tracks zu erzeugen, verwenden wir die Eigenschaften:

- {{cssxref("column-gap")}} für Abstände zwischen Spalten
- {{cssxref("row-gap")}} für Abstände zwischen Zeilen
- {{cssxref("gap")}} als Kurzform für beides

```css
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
}
```

Diese Abstände können jede Längeneinheit oder Prozentangabe sein, aber keine `fr`-Einheit.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```html hidden
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

{{ EmbedLiveSample('Gaps_between_tracks', '100%', 250) }}

> [!NOTE]
> Die `gap`-Eigenschaften (`column-gap`, `row-gap` und `gap`) wurden früher durch `grid-` vorangestellt. Die Spezifikation hat sich geändert, aber die vorangestellten Versionen bleiben als Alias erhalten. Um auf der sicheren Seite zu sein und Ihren Code kugelsicher zu machen, können Sie beide Eigenschaften hinzufügen:
>
> ```css
> .container {
>   display: grid;
>   grid-template-columns: 2fr 1fr 1fr;
>   grid-gap: 20px;
>   gap: 20px;
> }
> ```

### Wiederholende Track-Auflistungen

Sie können die gesamte oder nur einen Abschnitt Ihrer Track-Auflistung mit der CSS `repeat()`-Funktion wiederholen.
Ändern Sie Ihre Track-Auflistung zur folgenden:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

Sie erhalten jetzt drei `1fr`-Tracks wie zuvor. Der erste Wert, der an die `repeat()`-Funktion übergeben wird, gibt die Anzahl der Wiederholungen an, während der zweite Wert eine Track-Auflistung ist, die eine oder mehrere Tracks sein kann, die Sie wiederholen möchten.

### Implizite und explizite Grids

Bisher haben wir nur Spalten-Tracks angegeben, aber Zeilen werden automatisch erstellt, um den Inhalt zu halten. Dieses Konzept hebt den Unterschied zwischen expliziten und impliziten Grids hervor.
Hier sind einige Informationen über den Unterschied zwischen den beiden Grid-Typen:

- **Explizites Grid** wird mit `grid-template-columns` oder `grid-template-rows` erstellt.
- **Implizites Grid** erweitert das definierte explizite Grid, wenn Inhalte außerhalb dieses Grids gelegt werden.

Standardmäßig werden Tracks, die im impliziten Grid erstellt werden, in der Größe `auto` angezeigt, was im Allgemeinen bedeutet, dass sie groß genug sind, um ihren Inhalt zu fassen. Wenn Sie den impliziten Grid-Tracks eine Größe geben möchten, können Sie die Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} verwenden. Wenn Sie `grid-auto-rows` mit einem Wert von `100px` zu Ihrem CSS hinzufügen, werden die erstellten Reihen jetzt 100 Pixel hoch sein.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```html hidden
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  gap: 20px;
}
```

{{ EmbedLiveSample('Implicit_and_explicit_grids', '100%', 400) }}

### Die minmax() Funktion

Unsere 100-Pixel-hohen Tracks werden nicht besonders nützlich sein, wenn wir Inhalte in diese Tracks einfügen, die höher als 100 Pixel sind, wodurch ein Überlauf verursacht werden könnte. Es könnte besser sein, Tracks zu haben, die _mindestens_ 100 Pixel hoch sind und sich dennoch erweitern, wenn mehr Inhalt hinzugefügt wird. Eine grundlegende Tatsache über das Web ist, dass man nie wirklich weiß, wie hoch etwas sein wird – zusätzlicher Inhalt oder größere Schriftgrößen können Probleme bei Designs verursachen, die versuchen, pikselgenau in jeder Dimension zu sein.

Die {{cssxref("minmax", "minmax()")}}-Funktion lässt uns eine Min- und Max-Größe für einen Track festlegen, zum Beispiel `minmax(100px, auto)`. Die Mindestgröße beträgt 100 Pixel, aber die Höchstgröße ist `auto`, was sich ausdehnen wird, um mehr Inhalt aufzunehmen. Versuchen Sie, `grid-auto-rows` auf einen minmax-Wert zu ändern:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 20px;
}
```

Wenn Sie zusätzlichen Inhalt hinzufügen, wird der Track erweitert, um ihn aufzunehmen. Beachten Sie, dass die Erweiterung direkt entlang der Zeile erfolgt.

### So viele Spalten, wie hineinpassen

Wir können einige der Lektionen kombinieren, die wir über die Spuraufstellung, die Repeat-Notation und die {{cssxref("minmax", "minmax()")}} gelernt haben, um ein nützliches Muster zu erstellen. Manchmal ist es hilfreich, Grid zu fragen, so viele Spalten zu erstellen, wie in den Container passen werden. Dazu setzen wir den Wert von `grid-template-columns` mit der {{cssxref("repeat", "repeat()")}}-Funktion, aber anstatt eine Zahl zu übergeben, verwenden wir das Schlüsselwort `auto-fit`. Für den zweiten Parameter der Funktion verwenden wir `minmax()` mit einem minimalen Wert, der gleich der minimalen Spurgröße ist, die wir haben möchten, und einem Maximum von `1fr`.

Versuchen Sie dies in Ihrer Datei mit dem untenstehenden CSS:

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```html hidden
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  gap: 20px;
}
```

{{ EmbedLiveSample('As_many_columns_as_will_fit', '100%', 400) }}

Dies funktioniert, weil Grid so viele 200-Pixel-Spalten erstellt, die in den Container passen, und den verbleibenden Platz gleichmäßig zwischen allen Spalten teilt. Das Maximum ist `1fr`, das, wie wir bereits wissen, den Raum gleichmäßig zwischen den Spuren verteilt.

## Linienbasierte Platzierung

Wir gehen nun vom Erstellen eines Grids zum Platzieren von Dingen auf dem Grid über. Unser Grid hat immer Linien – diese sind beginnend mit 1 nummeriert und beziehen sich auf den [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) des Dokuments. Zum Beispiel wäre in Englisch (von links nach rechts geschrieben) die Spaltenlinie 1 auf der linken Seite des Grids und die Zeilenlinie 1 oben, während in Arabisch (von rechts nach links geschrieben) die Spaltenlinie 1 auf der rechten Seite wäre.

Um Elemente entlang dieser Linien zu positionieren, können wir die Start- und Endlinien des Grid-Bereichs angeben, in dem ein Element platziert werden soll. Es gibt vier Eigenschaften, die wir dafür verwenden können:

- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}

Diese Eigenschaften akzeptieren Liniennummern als Werte, sodass wir angeben können, dass ein Element beispielsweise auf Linie 1 beginnen und auf Linie 3 enden soll.
Alternativ können Sie auch Kurzform-Eigenschaften verwenden, die Ihnen ermöglichen, die Start- und Endlinien gleichzeitig anzugeben, getrennt durch einen Schrägstrich `/`:

- {{cssxref("grid-column")}} Kurzform für `grid-column-start` und `grid-column-end`
- {{cssxref("grid-row")}} Kurzform für `grid-row-start` und `grid-row-end`

Um dies in Aktion zu sehen, laden Sie die [Startdatei für linienbasierte Platzierung](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/8-placement-starting-point.html) herunter oder [sehen Sie es sich hier live an](https://mdn.github.io/learning-area/css/css-layout/grids/8-placement-starting-point.html). Es hat ein definiertes Grid und einen einfachen Artikel umrissen. Sie können sehen, dass _automatische Platzierung_ jedes Element in seine eigene Zelle im Grid platziert.

Lassen Sie uns alle Elemente für unsere Site an den Grid-Linien ausrichten. Fügen Sie die folgenden Regeln zu Ihrem CSS am Ende hinzu:

```css
header {
  grid-column: 1 / 3;
  grid-row: 1;
}

article {
  grid-column: 2;
  grid-row: 2;
}

aside {
  grid-column: 1;
  grid-row: 2;
}

footer {
  grid-column: 1 / 3;
  grid-row: 3;
}
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}

aside {
  border-right: 1px solid #999;
}
```

```html hidden
<div class="container">
  <header>This is my lovely blog</header>
  <article>
    <h1>My article</h1>
    <p>
      Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
      imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus
      massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra
      egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada
      et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac
      imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
      ornare egestas augue ut luctus. Proin blandit quam nec lacus varius
      commodo et a urna. Ut id ornare felis, eget fermentum sapien.
    </p>

    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
      tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
      lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra
      quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>
  </article>
  <aside>
    <h2>Other things</h2>
    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est.
    </p>
  </aside>
  <footer>Contact me@example.com</footer>
</div>
```

{{ EmbedLiveSample('Line-based_placement', '100%', 550) }}

> [!NOTE]
> Sie können auch den Wert `-1` verwenden, um den Endspalten- oder Reihenlinie anzuvisieren, und dann von innen mit negativen Werten zählen. Beachten Sie auch, dass Linien immer von den Rändern des expliziten Grids zählen, nicht vom [impliziten Grid](/de/docs/Glossary/Grid).

## Positionierung mit grid-template-areas

Eine alternative Möglichkeit, Elemente auf Ihrem Grid anzuordnen, besteht darin, die {{cssxref("grid-template-areas")}}-Eigenschaft zu verwenden und den verschiedenen Elementen Ihres Designs einen Namen zuzuweisen.

Entfernen Sie die linienbasierte Positionierung aus dem letzten Beispiel (oder laden Sie die Datei neu, um einen frischen Ausgangspunkt zu haben) und fügen Sie das folgende CSS hinzu.

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}

header {
  grid-area: header;
}

article {
  grid-area: content;
}

aside {
  grid-area: sidebar;
}

footer {
  grid-area: footer;
}
```

Laden Sie die Seite neu und Sie werden sehen, dass Ihre Elemente genau wie zuvor platziert wurden, ohne dass wir Liniennummern verwenden mussten!

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}

aside {
  border-right: 1px solid #999;
}
```

```html hidden
<div class="container">
  <header>This is my lovely blog</header>
  <article>
    <h1>My article</h1>
    <p>
      Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
      imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus
      massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra
      egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada
      et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac
      imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
      ornare egestas augue ut luctus. Proin blandit quam nec lacus varius
      commodo et a urna. Ut id ornare felis, eget fermentum sapien.
    </p>

    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
      tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
      lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra
      quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>
  </article>
  <aside>
    <h2>Other things</h2>
    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est.
    </p>
  </aside>
  <footer>Contact me@example.com</footer>
</div>
```

{{ EmbedLiveSample('Positioning_with_grid-template-areas', '100%', 550) }}

Die Regeln für `grid-template-areas` sind wie folgt:

- Sie müssen jede Zelle des Grids ausfüllen.
- Um über zwei Zellen zu spannen, wiederholen Sie den Namen.
- Um eine Zelle leer zu lassen, verwenden Sie ein `.` (Punkt).
- Bereiche müssen rechteckig sein – zum Beispiel können Sie keinen L-förmigen Bereich haben.
- Bereiche können nicht an verschiedenen Orten wiederholt werden.

Sie können mit unserem Layout spielen, indem Sie ändern, dass das Footer nur unter dem Artikel steht und die Sidebar sich ganz nach unten spannt. Das ist eine sehr schöne Möglichkeit, ein Layout zu beschreiben, weil es nur durch die Betrachtung des CSS klar ist, was genau passiert.

## Verschachtelte Grids und Subgrid

Es ist möglich, ein Grid innerhalb eines anderen Grids zu verschachteln, ein sogenanntes ["Subgrid"](/de/docs/Web/CSS/CSS_grid_layout/Subgrid).
Sie können dies tun, indem Sie die Eigenschaft `display: grid` auf ein Gridelement setzen.

Lassen Sie uns das vorherige Beispiel erweitern, indem wir einen Container für Artikel hinzufügen und ein verschachteltes Grid verwenden, um das Layout mehrerer Artikel zu steuern.
Während wir nur eine Spalte im verschachtelten Grid verwenden, können wir die Zeilen definieren, um in einem Verhältnis von 2:1:1 zu teilen, indem wir die `grid-template-rows`-Eigenschaft verwenden.
Dieser Ansatz ermöglicht es uns, ein Layout zu erstellen, in dem ein Artikel oben auf der Seite eine große Anzeige hat, während die anderen ein kleineres, vorschauähnliches Layout haben.

```html hidden live-sample___nesting-grids
<div class="container">
  <header>This is my lovely blog</header>
  <div class="articles">
    <article>
      <h1>Darmok and Jalad had a picnic at Tanagra</h1>

      <p>
        Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras
        porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed
        auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
        orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac
        ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
        Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
        pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam
        nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum
        sapien.
      </p>

      <button>Read more</button>
    </article>
    <article>
      <h1>Temba held his arms wide</h1>
      <p>
        Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras
        porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed
        auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
        orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac
        ornare ex malesuada et ...
      </p>
      <button>Read more</button>
    </article>
    <article>
      <h1>Gilgamesh, a king, at Uruk</h1>
      <p>
        Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras
        porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed
        auctor cursus massa at porta ...
      </p>
      <button>Read more</button>
    </article>
  </div>
  <aside>
    <h2>Other things</h2>
    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est.
    </p>
    <button>Read more</button>
  </aside>
  <footer>Contact me@example.com</footer>
</div>
```

```css hidden live-sample___nesting-grids
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
header {
  grid-area: header;
}

aside {
  border-right: 1px solid #999;
  grid-area: sidebar;
  padding-right: 10px;
  font-size: 0.8em;
}

footer {
  grid-area: footer;
}
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}
```

```css live-sample___nesting-grids
.articles {
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  gap: inherit;
}

article {
  padding: 10px;
  border: 2px solid rgb(79 185 227);
  border-radius: 5px;
}
```

{{EmbedLiveSample('nesting-grids', '100%', 1100)}}

Um es einfacher zu machen, mit Layouts in verschachtelten Grids zu arbeiten, können Sie `subgrid` auf `grid-template-rows` und `grid-template-columns`-Eigenschaften verwenden. Dies ermöglicht es Ihnen, die Tracks zu nutzen, die im Eltern-Grid definiert sind.

Im folgenden Beispiel verwenden wir [linienbasierte Platzierung](#linienbasierte_platzierung), was es dem verschachtelten Grid ermöglicht, mehrere Spalten und Zeilen des Eltern-Grids zu überspannen.
Wir haben `subgrid` hinzugefügt, um die Spalten-Tracks des Eltern-Grids zu erben, während wir ein anderes Layout für die Zeilen innerhalb des verschachtelten Grids hinzufügen.

```css hidden live-sample___subgrid
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```html live-sample___subgrid
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div id="subgrid">
    <div>Five</div>
    <div>Six</div>
    <div>Seven</div>
    <div>Eight</div>
  </div>
  <div>Nine</div>
  <div>Ten</div>
</div>
```

```css live-sample___subgrid
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 10px;
}

#subgrid {
  grid-column: 1 / 4;
  grid-row: 2 / 4;
  display: grid;
  gap: inherit;
  grid-template-columns: subgrid;
  grid-template-rows: 2fr 1fr;
}
```

{{ EmbedLiveSample('subgrid', '100%', 300) }}

## Grid-Frameworks

Es gibt zahlreiche Grid-Frameworks, die ein 12- oder 16-Spalten-Grid anbieten, um Ihnen bei der Anordnung Ihrer Inhalte zu helfen.
Die gute Nachricht ist, dass Sie wahrscheinlich keine Drittanbieter-Frameworks benötigen werden, um grid-basierte Layouts zu erstellen – Grid-Funktionalität ist bereits in der Spezifikation enthalten und wird von den meisten modernen Browsern unterstützt.

[Laden Sie die Startdatei herunter](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/11-grid-system-starting-point.html). Dies hat einen Container mit einem 12-Spalten-Grid definiert und das gleiche Markup, das wir in den vorherigen zwei Beispielen verwendet haben. Jetzt können wir linienbasierte Platzierung verwenden, um unseren Inhalt auf das 12-Spalten-Grid zu platzieren.

```css
header {
  grid-column: 1 / 13;
  grid-row: 1;
}

article {
  grid-column: 4 / 13;
  grid-row: 2;
}

aside {
  grid-column: 1 / 4;
  grid-row: 2;
}

footer {
  grid-column: 1 / 13;
  grid-row: 3;
}
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 20px;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}

aside {
  border-right: 1px solid #999;
}
```

```html hidden
<div class="container">
  <header>This is my lovely blog</header>
  <article>
    <h1>My article</h1>
    <p>
      Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
      imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus
      massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra
      egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada
      et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac
      imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
      ornare egestas augue ut luctus. Proin blandit quam nec lacus varius
      commodo et a urna. Ut id ornare felis, eget fermentum sapien.
    </p>

    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
      tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
      lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra
      quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>
  </article>
  <aside>
    <h2>Other things</h2>
    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est.
    </p>
  </aside>
  <footer>Contact me@example.com</footer>
</div>
```

{{ EmbedLiveSample('Grid frameworks in CSS grid', '100%', 600) }}

Wenn Sie den [Firefox Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) verwenden, um die Grid-Linien auf Ihrem Design zu überlagern, können Sie sehen, wie unser 12-Spalten-Grid funktioniert.

![Ein 12-Spalten-Grid überlagert unser Design.](learn-grids-inspector.png)

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Grid](/de/docs/Learn/CSS/CSS_layout/Grid_skills).

## Zusammenfassung

In dieser Übersicht haben wir die Hauptmerkmale des CSS Grid Layouts durchlaufen. Sie sollten in der Lage sein, es in Ihren Designs zu verwenden. Um weiter in die Spezifikation einzutauchen, lesen Sie unsere Leitfäden zum Grid Layout, die unten zu finden sind.

## Siehe auch

- Eine [Liste von Leitfäden](/de/docs/Web/CSS/CSS_grid_layout#guides), die sich auf das CSS Grid Layout beziehen
- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) Leitfaden
- [CSS Grid Inspector: Untersuchen von Grid Layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) auf firefox-source-docs
- [Ein vollständiger Leitfaden zu CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/), ein visueller Leitfaden auf CSS-Tricks (2023)
- [Grid Garden](https://cssgridgarden.com/), ein Bildungsspiel, um die Grundlagen von Grid auf cssgridgarden.com besser zu verstehen

{{PreviousMenuNext("Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout")}}
