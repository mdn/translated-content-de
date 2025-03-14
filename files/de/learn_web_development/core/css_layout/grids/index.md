---
title: CSS-Grid-Layout
slug: Learn_web_development/Core/CSS_layout/Grids
l10n:
  sourceCommit: cf727ab58e668060b6aa4171d9d2fc5fc823dfe9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout")}}

Das CSS-Grid-Layout ist ein zweidimensionales Layoutsystem für das Web. Es erlaubt Ihnen, Inhalte in Zeilen und Spalten zu organisieren und bietet viele Funktionen, um die Erstellung von komplexen Layouts zu vereinfachen. Dieser Artikel wird alles erklären, was Sie wissen müssen, um mit dem Grid-Layout zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen des Stylings</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegendes Text- und Schriftstyling</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Den Zweck von CSS Grid verstehen — flexibles Layout von Block- oder Inline-Elementen in zwei Dimensionen.</li>
          <li>Grid-Terminologie verstehen — Zeilen, Spalten, Abstände und Fugen.</li>
          <li>Verstehen, was <code>display: grid</code> standardmäßig bietet.</li>
          <li>Grid-Zeilen, -Spalten und -Abstände definieren.</li>
          <li>Elemente auf dem Grid positionieren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Grid-Layout?

Ein Grid ist eine Ansammlung von horizontalen und vertikalen Linien, die ein Muster bilden, an dem wir unsere Designelemente ausrichten können. Sie helfen uns, Layouts zu erstellen, in denen unsere Elemente nicht herumspringen oder ihre Breite ändern, wenn wir von Seite zu Seite wechseln, was eine größere Konsistenz auf unseren Websites bietet.

Ein Grid hat typischerweise **Spalten**, **Zeilen** und dann Abstände zwischen jeder Zeile und Spalte. Die Abstände werden üblicherweise als **Fugen** bezeichnet.

![CSS-Grid mit Teilen, die als Zeilen, Spalten und Fugen bezeichnet sind. Zeilen sind die horizontalen Segmente des Grids und Spalten sind die vertikalen Segmente des Grids. Der Raum zwischen zwei Zeilen wird als 'Zeilenfuge' bezeichnet und der Raum zwischen zwei Spalten als 'Spaltenfuge'.](grid.png)

## Ihr Grid in CSS erstellen

Wenn Sie sich für das Grid entschieden haben, das Ihr Design benötigt, können Sie das CSS-Grid-Layout verwenden, um es zu erstellen. Zuerst betrachten wir die grundlegenden Eigenschaften des Grid-Layouts und erkunden dann, wie Sie ein einfaches Gridsystem für Ihr Projekt erstellen können.
Das folgende Video bietet eine anschauliche Erklärung zur Verwendung von CSS-Grid:

{{EmbedYouTube("KOvGeFUHAC0")}}

### Ein Grid definieren

Probieren wir Grid-Layouts aus. Hier ist ein Beispiel mit einem Container, der einige Kind-Elemente hat. Standardmäßig werden diese Elemente in einem normalen Flow angezeigt, wodurch sie untereinander erscheinen.

```html live-sample___simple-grid_0
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

```css live-sample___simple-grid_0
body {
  font-family: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

{{EmbedLiveSample('simple-grid_0', '100%', "310") }}

Ähnlich wie bei der Definition von Flexbox definieren Sie ein Grid-Layout, indem Sie den Wert der {{cssxref("display")}}-Eigenschaft auf `grid` setzen. Wie im Fall von Flexbox transformiert die Eigenschaft `display: grid` alle direkten Kinder des Containers in Grid-Elemente. Wir haben die folgende CSS-Datei hinzugefügt:

```html hidden live-sample___simple-grid_1
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

```css hidden live-sample___simple-grid_1
body {
  font-family: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```css live-sample___simple-grid_1
.container {
  display: grid;
}
```

{{EmbedLiveSample('simple-grid_1', '100%', "310") }}

Im Gegensatz zu Flexbox sehen die Elemente nicht sofort anders aus. Die Deklaration `display: grid` gibt Ihnen ein Ein-Spalten-Grid, sodass Ihre Elemente weiterhin untereinander angezeigt werden, wie sie es im normalen Flow tun.

Um etwas zu sehen, das mehr wie ein Grid aussieht, müssen wir einige Spalten zum Grid hinzufügen. Fügen wir drei 200-Pixel-Spalten hinzu. Sie können jede Längeneinheit oder jeden Prozentsatz verwenden, um diese Spaltenbereiche zu erstellen.

```html hidden live-sample___simple-grid_2
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

```css hidden live-sample___simple-grid_2
body {
  font-family: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```css live-sample___simple-grid_2
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

Sie sollten sehen, dass die Elemente sich so neu angeordnet haben, dass sich eines in jeder Zelle des Grids befindet.

{{EmbedLiveSample('simple-grid_2', '100%', "130") }}

### Flexible Grids mit der fr-Einheit

Zusätzlich zur Erstellung von Grids mit Längen und Prozentsätzen, können wir [`fr`](/de/docs/Web/CSS/flex_value) verwenden. Die `fr`-Einheit repräsentiert einen Bruchteil des verfügbaren Raums im Grid-Container, um die Größe von Grid-Zeilen und -Spalten flexibel zu gestalten.

```html hidden live-sample___grid-fr-unit_0
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

```css hidden live-sample___grid-fr-unit_0
body {
  font-family: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

Hier ändern wir die Track-Auflistung zur folgenden Definition, um drei `1fr` Tracks zu erstellen:

```css live-sample___grid-fr-unit_0
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

{{EmbedLiveSample('grid-fr-unit_0', '100%', "130") }}

Sie haben nun flexible Tracks. Die `fr`-Einheit verteilt den Raum proportional. Sie können verschiedene positive Werte für Ihre Tracks angeben, wie folgt:

```html hidden live-sample___grid-fr-unit_1
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

```css hidden live-sample___grid-fr-unit_1
body {
  font-family: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

Ändern Sie nun Ihre Track-Auflistung zur folgenden Definition, um einen `2fr` zu erstellen und zwei `1fr` Tracks:

```css live-sample___grid-fr-unit_1
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
```

{{EmbedLiveSample('grid-fr-unit_1', '100%', "130") }}

Der erste Track erhält `2fr` des verfügbaren Raums und die anderen beiden Tracks erhalten `1fr`, was den ersten Track größer macht. Sie können `fr`-Einheiten mit feststehenden Längeneinheiten mischen. In diesem Fall wird zuerst der Platz für die festen Tracks genutzt, bevor der restliche Platz auf die anderen Tracks verteilt wird.

> [!NOTE]
> Die `fr`-Einheit verteilt den _verfügbaren_ Platz, nicht den _gesamten_ Platz. Daher gibt es weniger freien Raum zu teilen, wenn einer Ihrer Tracks etwas Großes enthält.

### Abstände zwischen Tracks

Um Abstände zwischen Tracks zu erstellen, verwenden wir die Eigenschaften:

- {{cssxref("column-gap")}} für Abstände zwischen Spalten
- {{cssxref("row-gap")}} für Abstände zwischen Zeilen
- {{cssxref("gap")}} als Kurzform für beide

```html hidden live-sample___grid-gap
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

```css hidden live-sample___grid-gap
body {
  font-family: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

Hier fügen wir die `gap`-Eigenschaft hinzu, um Lücken zwischen den Tracks mit einem Wert von `20px` zu erzeugen:

```css live-sample___grid-gap
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
}
```

{{EmbedLiveSample('grid-gap', '100%', "180") }}

Diese Lücken können jede Längeneinheit oder jeden Prozentsatz haben, nicht jedoch eine `fr`-Einheit.

### Wiederholende Track-Auflistungen

Sie können alle oder nur einen Abschnitt Ihrer Track-Auflistung mit der CSS-`repeat()`-Funktion wiederholen.
Hier ändern wir die Track-Auflistung wie folgt:

```html hidden live-sample___grid-repeat
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

```css hidden live-sample___grid-repeat
body {
  font-family: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```css live-sample___grid-repeat
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

{{EmbedLiveSample('grid-repeat', '100%', "180") }}

Sie werden jetzt drei `1fr` Tracks wie zuvor erhalten. Der erste Wert, der der `repeat()`-Funktion übergeben wird, gibt an, wie oft Sie die Auflistung wiederholen möchten, während der zweite Wert eine Track-Auflistung ist, die eine oder mehrere Tracks enthalten kann, die Sie wiederholen möchten.

### Implizite und explizite Grids

Bis zu diesem Punkt haben wir nur Spalten-Tracks spezifiziert, aber Zeilen werden automatisch erstellt, um den Inhalt aufzunehmen. Dieses Konzept verdeutlicht den Unterschied zwischen expliziten und impliziten Grids.
Hier ist ein wenig mehr über den Unterschied zwischen den beiden Arten von Grids:

- **Explizites Grid** wird durch `grid-template-columns` oder `grid-template-rows` erstellt.
- **Implizites Grid** erweitert das definierte explizite Grid, wenn Inhalte außerhalb dieses Grids platziert werden, wie z.B. in die Zeilen durch das Zeichnen zusätzlicher Gridlinien.

Standardmäßig sind über das implizite Grid erstellte Tracks `auto`-dimensioniert, was im Allgemeinen bedeutet, dass sie groß genug sind, um ihren Inhalt zu enthalten. Wenn Sie impliziten Grid-Tracks eine Größe geben möchten, können Sie die Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} verwenden. Wenn Sie `grid-auto-rows` mit einem Wert von `100px` zu Ihrem CSS hinzufügen, werden Sie sehen, dass diese erstellten Zeilen jetzt 100 Pixel hoch sind.

```html hidden live-sample___grid-auto
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

```css hidden live-sample___grid-auto
body {
  font-family: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```css live-sample___grid-auto
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  gap: 20px;
}
```

{{EmbedLiveSample('grid-auto', '100%', "350") }}

### Die minmax()-Funktion

Unsere 100 Pixel hohen Tracks sind nicht sehr nützlich, wenn wir Inhalte in diese Tracks einfügen, die höher als 100 Pixel sind, was zu einem Überlauf führen würde. Es wäre möglicherweise besser, Tracks zu haben, die _mindestens_ 100 Pixel hoch sind und sich trotzdem erweitern können, wenn mehr Inhalt hinzugefügt wird. Eine ziemlich grundlegende Tatsache über das Web ist, dass man nie wirklich weiß, wie hoch etwas sein wird — zusätzlicher Inhalt oder größere Schriftgrößen können Probleme mit Designs verursachen, die in jeder Dimension pixelgenau sein wollen.

Die {{cssxref("minmax", "minmax()")}}-Funktion lässt uns eine minimale und maximale Größe für einen Track festlegen, z.B. `minmax(100px, auto)`. Die Mindestgröße ist 100 Pixel, aber die maximale ist `auto`, was sich anpasst, um mehr Inhalt aufzunehmen. Hier ändern wir die `grid-auto-rows` zur Verwendung eines `minmax()`-Wertes:

```html hidden live-sample___grid-minmax_0
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four<br />More content</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

```css hidden live-sample___grid-minmax_0
body {
  font-family: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```css live-sample___grid-minmax_0
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(50px, auto);
  gap: 20px;
}
```

{{EmbedLiveSample('grid-minmax_0', '100%', "210") }}

Wenn Sie zusätzlichen Inhalt hinzufügen, werden Sie sehen, dass sich der Track erweitert, um ihn zu beherbergen. Beachten Sie, dass die Erweiterung direkt über die Zeile erfolgt.

### So viele Spalten, wie passen

Wir können einige der Lektionen, die wir über Track-Auflistungen, das Wiederholen von Notationen und {{cssxref("minmax", "minmax()")}} gelernt haben, kombinieren, um ein nützliches Muster zu erstellen. Manchmal ist es hilfreich, dem Grid zu ermöglichen, so viele Spalten zu erstellen, wie in den Container passen. Dazu setzen wir den Wert von `grid-template-columns` mithilfe der {{cssxref("repeat", "repeat()")}}-Funktion, aber anstelle der Übergabe einer Zahl, übergeben wir das Schlüsselwort [`auto-fit`](/de/docs/Web/CSS/repeat#auto-fit). Für den zweiten Parameter der Funktion verwenden wir `minmax()` mit einem Minimalwert gleich der minimalen Trackgröße, die wir haben möchten, und einem Maximum von `1fr`.

```html hidden live-sample___grid-minmax_1
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four<br />More content</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

```css hidden live-sample___grid-minmax_1
body {
  font-family: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```css live-sample___grid-minmax_1
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  gap: 20px;
}
```

{{EmbedLiveSample('grid-minmax_1', '100%', "210") }}

Das funktioniert, weil das Grid so viele 230-Pixel-Spalten wie möglich in den Container erstellt und dann den restlichen Raum gleichmäßig auf alle Spalten verteilt. Das Maximum ist `1fr`, das, wie wir bereits wissen, den Raum gleichmäßig zwischen den Tracks verteilt.

## Lineare Platzierung

Wir kommen jetzt von der Erstellung eines Grids zur Platzierung von Elementen auf dem Grid. Unser Grid hat immer Linien — diese werden ab 1 nummeriert und beziehen sich auf den [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) des Dokuments. Zum Beispiel würde sich die Spaltenlinie 1 in Englisch (von links nach rechts geschrieben) auf der linken Seite des Grids befinden und die Zeilenlinie 1 oben, während sie in Arabisch (von rechts nach links geschrieben) auf der rechten Seite wäre.

Um Elemente entlang dieser Linien zu positionieren, können wir die Start- und Endlinien des Grid-Bereichs angeben, in dem ein Element platziert werden soll. Es gibt vier Eigenschaften, die wir dafür nutzen können:

- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}

Diese Eigenschaften akzeptieren Liniendnummern als ihre Werte, sodass wir angeben können, dass ein Element beispielsweise auf Linie 1 beginnen und auf Linie 3 enden soll.
Alternativ können Sie auch Kurzform-Eigenschaften verwenden, die es Ihnen ermöglichen, die Start- und Endlinien gleichzeitig zu spezifizieren, getrennt durch einen Schrägstrich `/`:

- {{cssxref("grid-column")}} als Kurzform für `grid-column-start` und `grid-column-end`
- {{cssxref("grid-row")}} als Kurzform für `grid-row-start` und `grid-row-end`

```html live-sample___grid-placement_0
<div class="container">
  <header>Header</header>
  <main>
    <h1>Main</h1>
    <p>Main content…</p>
  </main>
  <aside>
    <h2>Aside</h2>
    <p>Related content</p>
  </aside>
  <footer>footer</footer>
</div>
```

```css live-sample___grid-placement_0
.container {
  font-family: sans-serif;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}
header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rebeccapurple;
  color: whitesmoke;
  text-align: center;
}
aside {
  border-right: 1px solid rebeccapurple;
}
```

Ohne die definierte Platzierung können Sie sehen, dass _Auto-Platzierung_ jedes Element in seine eigene Zelle im Grid setzt. Das {{htmlelement("header")}} nimmt `1fr` (ein Viertel) und das {{htmlelement("main")}} nimmt `3fr` (drei Viertel).

{{EmbedLiveSample('grid-placement_0', '100%', "230") }}

Lassen Sie uns alle Elemente für unsere Website anordnen, indem wir die Grid-Linien verwenden. Fügen Sie die folgenden Regeln am Ende Ihres CSS hinzu:

```html hidden live-sample___grid-placement_1
<div class="container">
  <header>Header</header>
  <main>
    <h1>Main</h1>
    <p>Main content…</p>
  </main>
  <aside>
    <h2>Aside</h2>
    <p>Related content</p>
  </aside>
  <footer>footer</footer>
</div>
```

```css hidden live-sample___grid-placement_1
.container {
  font-family: sans-serif;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}
header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rebeccapurple;
  color: whitesmoke;
  text-align: center;
}
aside {
  border-right: 1px solid rebeccapurple;
}
```

```css live-sample___grid-placement_1
header {
  grid-column: 1 / 3;
  grid-row: 1;
}
main {
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

Jetzt sind das {{htmlelement("header")}} und das {{htmlelement("footer")}} auf `1 / 3` gesetzt, was bedeutet, bei Linie `1` zu beginnen und bei Linie `3` zu enden.

{{EmbedLiveSample('grid-placement_1', '100%', "230") }}

> [!NOTE]
> Sie können auch den Wert `-1` verwenden, um die Endspalten- oder Zeilenlinie zu treffen und sich dann mit negativen Werten von den Rändern des expliziten Grids nach innen zu zählen, nicht vom {{Glossary("Grid", "impliziten Grid")}}.

## Positionierung mit grid-template-areas

Eine alternative Methode, Elemente auf Ihrem Grid anzuordnen, ist die Verwendung der {{cssxref("grid-template-areas")}}-Eigenschaft und den verschiedenen Elementen Ihres Designs einen Namen zu geben.

```html hidden live-sample___grid-placement_2
<div class="container">
  <header>Header</header>
  <main>
    <h1>Main</h1>
    <p>Main content…</p>
  </main>
  <aside>
    <h2>Aside</h2>
    <p>Related content</p>
  </aside>
  <footer>footer</footer>
</div>
```

```css hidden live-sample___grid-placement_2
.container {
  font-family: sans-serif;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}
header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rebeccapurple;
  color: whitesmoke;
  text-align: center;
}
aside {
  border-right: 1px solid rebeccapurple;
}
```

```css live-sample___grid-placement_2
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
main {
  grid-area: content;
}
aside {
  grid-area: sidebar;
}
footer {
  grid-area: footer;
}
```

Hier verwenden wir die {{CSSXRef("grid-template-areas")}}-Eigenschaft, um zu definieren, wie die 3 Zeilen angeordnet sind. Die erste Zeile hat den Wert `header header`, die zweite `sidebar content` und die dritte `footer footer`. Wir verwenden dann die {{CSSXRef("grid-area")}}-Eigenschaft, um zu definieren, wo Elemente in den `grid-template-areas` platziert werden.

{{EmbedLiveSample('grid-placement_2', '100%', "230") }}

Die Regeln für `grid-template-areas` sind:

- Sie müssen jede Zelle des Grids ausfüllen.
- Um sich über zwei Zellen zu erstrecken, wiederholen Sie den Namen.
- Um eine Zelle leer zu lassen, verwenden Sie ein `.` (Punkt).
- Bereiche müssen rechteckig sein — z.B. können Sie keinen L-förmigen Bereich haben.
- Bereiche können nicht an verschiedenen Stellen wiederholt werden.

Sie können mit unserem Layout herumspielen und den Footer nur unterhalb des Artikels platzieren und die Sidebar über die gesamte Länge spannen. Dies ist eine sehr nette Methode, ein Layout zu beschreiben, da es, schon beim Ansehen des CSS, genau klar ist, was passiert.

## Verschachtelte Grids und Subgrid

Es ist möglich, ein Grid innerhalb eines anderen Grids zu verschachteln, ein sogenanntes ["Subgrid"](/de/docs/Web/CSS/CSS_grid_layout/Subgrid).
Sie können dies tun, indem Sie die `display: grid`-Eigenschaft auf ein Element im übergeordneten Grid setzen.

Lassen Sie uns das vorherige Beispiel erweitern, indem wir einen Container für Artikel hinzufügen und ein verschachteltes Grid verwenden, um das Layout mehrerer Artikel zu steuern.
Obwohl wir nur eine Spalte im verschachtelten Grid verwenden, können wir die Zeilen aufteilen in ein 4:3:3-Verhältnis, indem wir die `grid-template-rows`-Eigenschaft verwenden.
Dieser Ansatz ermöglicht es uns, ein Layout zu erstellen, in dem ein Artikel oben auf der Seite eine große Anzeige hat, während die anderen eine kleinere, vorschauähnliche Darstellung haben.

```html hidden live-sample___nesting-grids
<div class="container">
  <header>Header</header>
  <main>
    <article>
      <h1>Article one</h1>
      <p>Content…</p>
    </article>
    <article>
      <h1>Article two</h1>
      <p>Content…</p>
    </article>
    <article>
      <h1>Article three</h1>
      <p>Content…</p>
    </article>
  </main>
  <aside>
    <h2>Aside</h2>
    <p>Related content</p>
  </aside>
  <footer>footer</footer>
</div>
```

```css hidden live-sample___nesting-grids
.container {
  font-family: sans-serif;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}
header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rebeccapurple;
  color: whitesmoke;
  text-align: center;
}
header {
  grid-area: header;
}
aside {
  border-right: 1px solid rebeccapurple;
  grid-area: sidebar;
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
main {
  grid-area: content;
  display: grid;
  grid-template-rows: 4fr 3fr 3fr;
  gap: inherit;
}
article {
  padding: 10px;
  border: 2px solid rebeccapurple;
  border-radius: 5px;
}
```

{{EmbedLiveSample('nesting-grids', '100%', 560)}}

Um die Arbeit mit Layouts in verschachtelten Grids zu erleichtern, können Sie `subgrid` auf `grid-template-rows` und `grid-template-columns`-Eigenschaften verwenden. Dies ermöglicht es Ihnen, die in der übergeordneten Grid definierten Tracks zu nutzen.

Im folgenden Beispiel verwenden wir [lineare Platzierung](#lineare_platzierung), wodurch das verschachtelte Grid mehrere Spalten und Zeilen des übergeordneten Grids überlagern kann.
Wir haben `subgrid` hinzugefügt, um die Spalten-Tracks des übergeordneten Grids zu erben, während wir ein anderes Layout für die Zeilen im verschachtelten Grid hinzufügen.

```html hidden live-sample___subgrid
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div class="subgrid">
    <div>Five</div>
    <div>Six</div>
    <div>Seven</div>
    <div>Eight</div>
  </div>
  <div>Nine</div>
  <div>Ten</div>
</div>
```

```css hidden live-sample___subgrid
.container {
  font-family: sans-serif;
}
.container div {
  border-radius: 5px;
  padding: 10px;
  background-color: rebeccapurple;
  border: 1px solid white;
  color: white;
}
```

```css live-sample___subgrid
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 10px;
}
.subgrid {
  grid-column: 1 / 4;
  grid-row: 2 / 4;
  display: grid;
  gap: inherit;
  grid-template-columns: subgrid;
  grid-template-rows: 2fr 1fr;
}
```

{{ EmbedLiveSample('subgrid', '100%', 200) }}

## Grid-Frameworks

Es gibt zahlreiche Grid-Frameworks, die ein 12- oder 16-Spalten-Grid anbieten, um beim Layout Ihres Inhalts zu helfen.
Die gute Nachricht ist, dass Sie wahrscheinlich keine Drittanbieter-Frameworks benötigen, um gridbasierte Layouts zu erstellen — die Grid-Funktionalität ist bereits in der Spezifikation enthalten und wird von den meisten modernen Browsern unterstützt.

Dies hat einen Container mit einem 12-Spalten-Grid, der durch `grid-template-columns: repeat(12, 1fr);` definiert ist, und dem gleichen Markup, das wir in den beiden vorherigen Beispielen verwendet haben. Wir können jetzt die lineare Platzierung verwenden, um unseren Inhalt auf das 12-Spalten-Grid zu setzen.

```html hidden live-sample___grid-frameworks
<div class="container">
  <header>Header</header>
  <main>
    <h1>Main</h1>
    <p>Main content…</p>
  </main>
  <aside>
    <h2>Aside</h2>
    <p>Related content</p>
  </aside>
  <footer>footer</footer>
</div>
```

```css hidden live-sample___grid-frameworks
.container {
  font-family: sans-serif;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rebeccapurple;
  color: whitesmoke;
  text-align: center;
}
aside {
  border-right: 1px solid rebeccapurple;
}
```

```css live-sample___grid-frameworks
.container {
  font-family: sans-serif;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}
header {
  grid-column: 1 / 13;
  grid-row: 1;
}
main {
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

{{EmbedLiveSample('grid-frameworks', '100%', "230") }}

Wenn Sie den [Firefox Grid-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) verwenden, um die Gridlinien in Ihrem Design zu überlagern, können Sie sehen, wie unser 12-Spalten-Grid funktioniert.

![Ein 12-Spalten-Grid überlagert auf unser Design.](learn-grids-inspector.png)

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie sich diese Informationen gemerkt haben, bevor Sie weitergehen — siehe [Testen Sie Ihre Fähigkeiten: Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grid_skills).

## Zusammenfassung

In diesem Überblick haben wir die Hauptmerkmale des CSS-Grid-Layouts erkundet. Sie sollten in der Lage sein, es in Ihren Designs zu verwenden. Als nächstes werden wir uns mit dem responsiven Design befassen.

## Siehe auch

- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout#guides)
  - : Hauptseite des CSS-Grid-Layout-Moduls mit vielen weiteren Ressourcen
- [Ein vollständiger Leitfaden zu CSS-Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
  - : Ein visueller Leitfaden auf CSS-Tricks (2023).
- [Grid Garden](https://cssgridgarden.com/)
  - : Ein Bildungsspiel, um die Grundlagen des Grids auf cssgridgarden.com zu erlernen und besser zu verstehen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout")}}
