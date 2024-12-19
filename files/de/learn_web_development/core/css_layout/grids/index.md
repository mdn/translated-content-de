---
title: CSS Grid-Layout
slug: Learn_web_development/Core/CSS_layout/Grids
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout")}}

Der CSS Grid-Layout ist ein zweidimensionales Layoutsystem für das Web. Es ermöglicht Ihnen, Inhalte in Reihen und Spalten zu organisieren und bietet viele Funktionen zur Vereinfachung der Erstellung komplexer Layouts. Dieser Artikel erklärt alles, was Sie wissen müssen, um mit dem Grid-Layout zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen Sie den Zweck von CSS Grid — flexibel ein Set von Block- oder Inline-Elementen in zwei Dimensionen zu layouten.</li>
          <li>Verstehen Sie die Terminologie von Grid — Reihen, Spalten, Abstände und Rinnen.</li>
          <li>Verstehen, was `display: grid` standardmäßig bietet.</li>
          <li>Definition von Grid-Reihen, -Spalten und -Abständen.</li>
          <li>Positionierung von Elementen auf dem Grid.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Grid-Layout?

Ein Grid ist eine Sammlung horizontaler und vertikaler Linien, die ein Muster erzeugen, an dem wir unsere Designelemente ausrichten können. Sie helfen uns, Layouts zu erstellen, in denen unsere Elemente nicht herumspringen oder die Breite ändern, während wir von Seite zu Seite wechseln, was zu größerer Konsistenz auf unseren Websites führt.

Ein Grid hat normalerweise **Spalten**, **Reihen** und dann Abstände zwischen jeder Reihe und Spalte. Die Abstände werden häufig als **Rinnen** bezeichnet.

![CSS Grid mit als Reihen, Spalten und Rinnen beschrifteten Teilen. Reihen sind die horizontalen Segmente des Grids und Spalten sind die vertikalen Segmente des Grids. Der Raum zwischen zwei Reihen wird als 'Reihenrille' bezeichnet und der Raum zwischen zwei Spalten als 'Spaltenrille'.](grid.png)

## Erstellen Ihres Grids in CSS

Wenn Sie sich für das Grid entschieden haben, das Ihr Design benötigt, können Sie das CSS Grid-Layout verwenden, um es zu erstellen. Zuerst werden wir die grundlegenden Funktionen des Grid-Layouts betrachten und dann erforschen, wie man ein einfaches Grid-System für Ihr Projekt erstellt. Das folgende Video bietet eine schöne visuelle Erklärung zur Verwendung von CSS Grid:

{{EmbedYouTube("KOvGeFUHAC0")}}

### Definition eines Grids

Lassen Sie uns mit Hilfe eines Beispiels Grid-Layouts ausprobieren. Laden Sie die [Ausgangspunkt-Datei](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/0-starting-point.html) herunter und öffnen Sie diese in Ihrem Texteditor und Browser (Sie können sie auch [hier live sehen](https://mdn.github.io/learning-area/css/css-layout/grids/0-starting-point.html)). Sie werden ein Beispiel mit einem Container sehen, der einige Kind-Elemente enthält. Standardmäßig werden diese Elemente in einem normalen Fluss angezeigt, sodass sie untereinander erscheinen. Im ersten Teil dieser Lektion werden wir diese Datei verwenden, um zu sehen, wie sich ihr Grid verhält.

Ähnlich wie bei der Definition von Flexbox definieren Sie ein Grid-Layout, indem Sie den Wert der {{cssxref("display")}}-Eigenschaft auf `grid` setzen. Wie im Fall von Flexbox transformiert die Eigenschaft `display: grid` alle direkten Kinder des Containers in Grid-Elemente. Fügen Sie Ihrer Datei den folgenden CSS hinzu:

```css
.container {
  display: grid;
}
```

Anders als bei Flexbox sehen die Elemente nicht sofort anders aus. Die Deklaration von `display: grid` gibt Ihnen ein Ein-Spalten-Grid, sodass Ihre Elemente weiterhin untereinander angezeigt werden, wie sie es im normalen Fluss tun.

Um etwas zu sehen, das grid-ähnlicher aussieht, müssen wir dem Grid einige Spalten hinzufügen. Lassen Sie uns drei 200-Pixel-Spalten hinzufügen. Sie können jede Längeneinheit oder Prozentsätze verwenden, um diese Spaltenspuren zu erstellen.

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

Fügen Sie die zweite Deklaration zu Ihrer CSS-Regel hinzu und laden Sie die Seite neu. Sie sollten sehen, dass sich die Elemente so neu angeordnet haben, dass sich in jeder Zelle des Grids eines befindet.

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

### Flexible Grids mit der Einheit fr

Zusätzlich zur Erstellung von Grids mit Längen und Prozentsätzen können wir [`fr`](/de/docs/Web/CSS/flex_value) verwenden. Die `fr` Einheit repräsentiert einen Bruchteil des verfügbaren Raums im Grid-Container, um Grid-Reihen und -Spalten flexibel zu skalieren.

Ändern Sie Ihre Spurauflistung in die folgende Definition, die drei `1fr` Spuren erstellt:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Sie haben jetzt flexible Spuren. Die `fr` Einheit verteilt den Raum proportional. Sie können verschiedene positive Werte für Ihre Spuren angeben, wie folgt:

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
> Die `fr` Einheit verteilt _verfügbaren_ Raum, nicht _allen_ Raum. Daher wird, wenn eine Ihrer Spuren etwas Großes darin hat, weniger freier Raum zum Teilen zur Verfügung stehen.

### Abstände zwischen Spuren

Um Abstände zwischen Spuren zu erstellen, verwenden wir die folgenden Eigenschaften:

- {{cssxref("column-gap")}} für Abstände zwischen Spalten
- {{cssxref("row-gap")}} für Abstände zwischen Reihen
- {{cssxref("gap")}} als Kurzform für beide

```css
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
}
```

Diese Abstände können jede Längeneinheit oder Prozentsatz sein, aber keine `fr` Einheit.

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

### Wiederholen von Spurauflistungen

Sie können Ihre gesamte Spurauflistung oder einen Abschnitt davon mithilfe der CSS-`repeat()` Funktion wiederholen.
Ändern Sie Ihre Spurauflistung in die folgende:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

Sie erhalten jetzt genau wie zuvor drei `1fr` Spuren. Der erste Wert, der an die `repeat()` Funktion übergeben wird, gibt die Anzahl der Wiederholungen der Auflistung an, während der zweite Wert eine Spurauflistung ist, die eine oder mehrere Spuren enthalten kann, die Sie wiederholen möchten.

### Implizite und explizite Grids

Bis zu diesem Punkt haben wir nur Spaltenspuren spezifiziert, aber Reihen werden automatisch erstellt, um den Inhalt zu halten. Dieses Konzept hebt den Unterschied zwischen expliziten und impliziten Grids hervor.
Hier ist ein wenig mehr über den Unterschied zwischen den beiden Arten von Grids:

- **Explizites Grid** wird mit `grid-template-columns` oder `grid-template-rows` erstellt.
- **Implizites Grid** erweitert das definierte explizite Grid, wenn Inhalt außerhalb dieses Grids platziert wird, z. B. in den Reihen, indem zusätzliche Gitterlinien gezeichnet werden.

Standardmäßig sind im impliziten Grid erstellte Spuren `auto`-größenbasiert, was im Allgemeinen bedeutet, dass sie groß genug sind, um ihren Inhalt zu enthalten. Wenn Sie den impliziten Grid-Spuren eine Größe geben möchten, können Sie die Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} verwenden. Wenn Sie `grid-auto-rows` mit einem Wert von `100px` zu Ihrem CSS hinzufügen, werden Sie sehen, dass diese erstellten Reihen nun 100 Pixel hoch sind.

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

### Die Funktion minmax()

Unsere 100-Pixel-hohen Spuren werden nicht sehr nützlich sein, wenn wir Inhalt in diese Spuren einfügen, der höher als 100 Pixel ist, da dies zu einem Überlauf führen würde. Es könnte besser sein, Spuren zu haben, die _zumindest_ 100 Pixel hoch sind und sich dennoch ausdehnen können, wenn mehr Inhalt hinzugefügt wird. Eine recht grundlegende Tatsache über das Web ist, dass Sie nie wirklich wissen, wie hoch etwas sein wird – zusätzlicher Inhalt oder größere Schriftgrößen können Probleme mit Designs verursachen, die versuchen, in jeder Dimension pixelgenau zu sein.

Die {{cssxref("minmax", "minmax()")}}-Funktion erlaubt es uns, eine Mindest- und Höchstgröße für eine Spur festzulegen, z. B. `minmax(100px, auto)`. Die Minimalgröße beträgt 100 Pixel, aber die Maximalgröße ist `auto`, die sich an mehr Inhalt anpassen wird. Versuchen Sie, `grid-auto-rows` mit einem minmax-Wert zu ändern:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 20px;
}
```

Wenn Sie zusätzlichen Inhalt hinzufügen, sehen Sie, dass die Spur sich ausdehnt, um ihn zu ermöglichen. Beachten Sie, dass die Expansion genau entlang der Reihe stattfindet.

### So viele Spalten wie passen

Wir können einige der Lektionen, die wir über Spurauflistung gelernt haben, die Wiederholungsnotation und {{cssxref("minmax", "minmax()")}} kombinieren, um ein nützliches Muster zu erstellen. Manchmal ist es hilfreich, dem Grid zu sagen, dass es so viele Spalten erstellen soll, wie in den Container passen. Wir erreichen dies, indem wir den Wert der `grid-template-columns`-Eigenschaft mit der {{cssxref("repeat", "repeat()")}}-Funktion festlegen, aber anstelle einer Zahl geben wir das Schlüsselwort `auto-fit` weiter. Für den zweiten Parameter der Funktion verwenden wir `minmax()` mit einem Minimalwert gleich der minimalen Spurgröße, die wir haben möchten, und einem Maximum von `1fr`.

Versuchen Sie dies jetzt in Ihrer Datei mit dem folgenden CSS:

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

Dies funktioniert, weil das Grid so viele 200-Pixel-Spalten erstellt, wie in den Container passen, und dann den restlichen Raum gleichmäßig auf alle Spalten verteilt. Das Maximum ist `1fr`, das, wie wir bereits wissen, Raum gleichmäßig zwischen den Spuren verteilt.

## Zeilenbasierte Platzierung

Wir bewegen uns nun von der Erstellung eines Grids hin zur Platzierung von Dingen auf dem Grid. Unser Grid hat immer Linien – diese sind nummeriert, beginnend mit 1, und beziehen sich auf den [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) des Dokuments. Zum Beispiel wäre die Liniennummer 1 in einer linken auf rechten Schrift wie im Englischen auf der linken Seite des Grids und die Zeile 1 oben, während sie in einer rechten auf linken Schrift wie im Arabischen auf der rechten Seite wäre.

Um Elemente entlang dieser Linien zu positionieren, können wir die Start- und Endlinien des Grid-Bereichs angeben, in dem ein Element platziert werden soll. Es gibt vier Eigenschaften, die wir dafür verwenden können:

- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}

Diese Eigenschaften akzeptieren Liniensatznummern als ihre Werte, sodass wir angeben können, dass ein Element zum Beispiel bei Linie 1 beginnen und bei Linie 3 enden soll. Alternativ können Sie auch Kurzbefehle verwenden, die es Ihnen ermöglichen, die Start- und Endlinien gleichzeitig anzugeben, getrennt durch einen Schrägstrich `/`:

- {{cssxref("grid-column")}} Kurzform für `grid-column-start` und `grid-column-end`
- {{cssxref("grid-row")}} Kurzform für `grid-row-start` und `grid-row-end`

Um das im Einsatz zu sehen, laden Sie die [Zeilenbasierte Platzierung Ausgangspunkt-Datei](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/8-placement-starting-point.html) herunter oder [sehen Sie sie hier live](https://mdn.github.io/learning-area/css/css-layout/grids/8-placement-starting-point.html). Es hat ein definiertes Grid und einen umrandeten Artikel. Sie können sehen, dass die _Automatische-Platzierung_ jedes Element in seine eigene Zelle im Grid platziert.

Lassen Sie uns all die Elemente für unsere Website arrangieren, indem wir die Grid-Linien verwenden. Fügen Sie die folgenden Regeln am Ende Ihres CSS hinzu:

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
> Sie können auch den Wert `-1` verwenden, um die Endspalte oder Zeilenlinie anzusprechen, und dann negativ von der Endlinie aus zählen. Beachten Sie auch, dass die Linien immer von den Rändern des expliziten Grids zählen, nicht vom {{Glossary("Grid", "impliziten Grid")}}.

## Positionierung mit grid-template-areas

Eine alternative Möglichkeit, Elemente auf Ihrem Grid anzuordnen, ist die Verwendung der Eigenschaft {{cssxref("grid-template-areas")}} und das Benennen der verschiedenen Elemente Ihres Designs.

Entfernen Sie das zeilenbasierte Positionieren aus dem letzten Beispiel (oder laden Sie die Datei erneut, um einen frischen Ausgangspunkt zu haben) und fügen Sie das folgende CSS hinzu.

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

Laden Sie die Seite neu und Sie werden sehen, dass Ihre Elemente genauso wie zuvor platziert wurden, ohne dass wir Zeilennummern verwenden müssen!

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
- Um über zwei Zellen zu spannen, den Namen wiederholen.
- Um eine Zelle leer zu lassen, verwenden Sie ein `.` (Punkt).
- Bereiche müssen rechteckig sein – z. B. können Sie keinen L-förmigen Bereich haben.
- Bereiche können nicht an unterschiedlichen Orten wiederholt werden.

Sie können mit unserem Layout herumspielen, indem Sie ändern, dass der Footer nur unter dem Artikel sitzt und die Sidebar sich bis ganz unten erstreckt. Dies ist eine sehr schöne Art, ein Layout zu beschreiben, da es allein durch das Betrachten des CSS deutlich wird, was vor sich geht.

## Verschachtelung von Grids und Subgrid

Es ist möglich, ein Grid innerhalb eines anderen Grids zu verschachteln, wodurch ein ["Subgrid"](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) entsteht.
Sie können dies tun, indem Sie die `display: grid`-Eigenschaft auf einem Grid-Element setzen.

Lassen Sie uns das vorherige Beispiel erweitern, indem wir einen Container für Artikel hinzufügen und ein verschachteltes Grid verwenden, um das Layout mehrerer Artikel zu steuern.
Während wir nur eine Spalte im verschachtelten Grid verwenden, können wir die Zeilen definieren, so dass sie im Verhältnis 2:1:1 aufgeteilt sind, indem wir die `grid-template-rows` Eigenschaft verwenden.
Dieser Ansatz erlaubt uns, ein Layout zu erstellen, in dem ein Artikel oben auf der Seite eine große Anzeige hat, während die anderen ein kleineres, vorschauähnliches Layout haben.

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

Um das Arbeiten mit Layouts in verschachtelten Grids zu erleichtern, können Sie `subgrid` auf `grid-template-rows` und `grid-template-columns`-Eigenschaften verwenden. Dadurch können Sie die im Elterngrid definierten Spuren verwenden.

Im folgenden Beispiel verwenden wir [zeilenbasierte Platzierung](#zeilenbasierte_platzierung), sodass das verschachtelte Grid über mehrere Spalten und Zeilen des Elterngrids erstreckt wird.
Wir haben `subgrid` hinzugefügt, um die Spaltenspuren des Elterngrids zu erben, während ein anderes Layout für die Zeilen innerhalb des verschachtelten Grids hinzugefügt wird.

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

## Gridsysteme

Wenn Sie an einer Produktions-Website arbeiten, wird diese wahrscheinlich mit einem vordefinierten Gridsystem (12- oder 16-Spalten-Grids sind üblich) gestaltet. Dieses könnte von einem der leitenden Entwickler in Ihrem Team erstellt oder in einem dritten CSS-Framework definiert sein. Das folgende Beispiel zeigt, wie ein einfaches Gridsystem aussehen könnte.

[Laden Sie die Ausgangspunkt-Datei herunter](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/11-grid-system-starting-point.html). Diese hat einen Container mit einem 12-Spalten-Grid definiert und denselben Markup, wie wir in den beiden vorherigen Beispielen verwendet haben. Das Grid wird mit der folgenden Regel definiert:

```css
.container {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 20px;
}
```

Wir können jetzt zeilenbasierte Platzierung verwenden, um unseren Inhalt auf dem 12-Spalten-Grid zu platzieren.

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

![Ein 12-Spalten-Grid, überlagert auf unserem Design.](learn-grids-inspector.png)

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie die wichtigsten Informationen behalten? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren – siehe [Testen Sie Ihre Fähigkeiten: Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grid_skills).

## Zusammenfassung

In dieser Übersicht haben wir die Hauptmerkmale des CSS Grid-Layouts behandelt. Sie sollten in der Lage sein, es in Ihren Designs zu verwenden. Als nächstes werden wir uns das responsive Design ansehen.

## Siehe auch

- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout#guides)
  - : Hauptseite des CSS Grid Layout Moduls, die viele weitere Ressourcen enthält
- [Ein vollständiger Leitfaden zu CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
  - : Ein visueller Leitfaden auf CSS-Tricks (2023).
- [Grid Garden](https://cssgridgarden.com/)
  - : Ein Lernspiel, um die Grundlagen von Grid auf cssgridgarden.com besser zu verstehen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout")}}
