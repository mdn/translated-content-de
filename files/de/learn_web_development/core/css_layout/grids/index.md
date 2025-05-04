---
title: CSS-Grid-Layout
slug: Learn_web_development/Core/CSS_layout/Grids
l10n:
  sourceCommit: 2cdde962d935653e92c2b0e046ead20efbb26ec8
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout")}}

CSS-Grid-Layout ist ein zweidimensionales Layoutsystem für das Web. Es ermöglicht Ihnen, Inhalte in Zeilen und Spalten zu organisieren und bietet viele Funktionen, um das Erstellen komplexer Layouts zu vereinfachen. Dieser Artikel erklärt alles, was Sie wissen müssen, um mit Grid-Layout zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden CSS-Layout-Konzepten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, welchen Zweck CSS Grid erfüllt — flexibel eine Reihe von Block- oder Inline-Elementen in zwei Dimensionen anzuordnen.</li>
          <li>Grid-Terminologie verstehen — Zeilen, Spalten, Abstände und Trennlinien.</li>
          <li>Verstehen, was <code>display: grid</code> standardmäßig bietet.</li>
          <li>Definieren von Grid-Zeilen, Spalten und Abständen.</li>
          <li>Positionieren von Elementen im Grid.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist Grid-Layout?

Ein Grid ist eine Sammlung horizontaler und vertikaler Linien, die ein Muster erzeugen, an dem wir unsere Designelemente ausrichten können. Sie helfen uns, Layouts zu erstellen, in denen sich unsere Elemente nicht bewegen oder ihre Breite verändern, wenn wir von Seite zu Seite wechseln, und sorgen so für eine größere Konsistenz auf unseren Websites.

Ein Grid hat typischerweise **Spalten**, **Zeilen** und dann Abstände zwischen jeder Zeile und Spalte. Diese Abstände werden allgemein als **Trennlinien** bezeichnet.

![CSS-Grid mit als Zeilen, Spalten und Trennlinien gekennzeichneten Teilen. Zeilen sind die horizontalen Segmente des Grids und Spalten sind die vertikalen Segmente des Grids. Der Raum zwischen zwei Zeilen wird als 'Zeilen-Trennlinie' bezeichnet und der Raum zwischen zwei Spalten als 'Spalten-Trennlinie'.](grid.png)

## Erstellen Ihres Grids in CSS

Nachdem Sie das für Ihr Design benötigte Grid festgelegt haben, können Sie das CSS-Grid-Layout verwenden, um es zu erstellen. Wir werden uns zuerst die grundlegenden Funktionen des Grid-Layouts ansehen und dann erkunden, wie Sie ein einfaches Gitter-System für Ihr Projekt erstellen können.
Das folgende Video bietet eine schöne visuelle Erklärung der Verwendung von CSS-Grid:

{{EmbedYouTube("KOvGeFUHAC0")}}

### Definieren eines Grids

Lassen Sie uns Grid-Layouts ausprobieren. Hier ist ein Beispiel mit einem Container, der einige Kind-Elemente hat. Diese Elemente werden standardmäßig im normalen Fluss angezeigt, so dass sie untereinander erscheinen.

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

Ähnlich wie Sie Flexbox definieren, definieren Sie ein Grid-Layout, indem Sie den Wert der {{cssxref("display")}}-Eigenschaft auf `grid` setzen. Wie im Fall von Flexbox verwandelt die Eigenschaft `display: grid` alle direkten Kinder des Containers in Grid-Items. Wir haben die folgende CSS dem Dokument hinzugefügt:

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

Im Gegensatz zu Flexbox sehen die Elemente nicht sofort anders aus. Die Deklaration von `display: grid` gibt Ihnen ein Ein-Spalten-Grid, so dass Ihre Elemente weiterhin untereinander angezeigt werden, wie sie es im normalen Fluss tun.

Um etwas zu sehen, das mehr wie ein Grid aussieht, müssen wir einige Spalten zum Grid hinzufügen. Lassen Sie uns drei 200-Pixel-Spalten hinzufügen. Sie können eine beliebige Längeneinheit oder Prozentsatz verwenden, um diese Spalten-Tracks zu erstellen.

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

Sie sollten sehen, dass sich die Elemente so neu angeordnet haben, dass eines in jeder Zelle des Grids ist.

{{EmbedLiveSample('simple-grid_2', '100%', "130") }}

### Flexible Grids mit der fr-Einheit

Zusätzlich zur Erstellung von Grids mit Längen und Prozentangaben können wir [`fr`](/de/docs/Web/CSS/flex_value) verwenden. Die `fr`-Einheit repräsentiert einen Bruchteil des verfügbaren Platzes im Grid-Container, um die Größe der Grid-Zeilen und -Spalten flexibel zu gestalten.

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

Hier ändern wir die Track-Liste zur folgenden Definition und erstellen drei `1fr`-Tracks:

```css live-sample___grid-fr-unit_0
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

{{EmbedLiveSample('grid-fr-unit_0', '100%', "130") }}

Sie haben jetzt flexible Tracks.
Die `fr`-Einheit verteilt den Platz proportional, so dass Sie unterschiedliche positive Werte für Ihre Tracks angeben können.
Ändern Sie Ihre Track-Liste zur folgenden Definition und erstellen Sie einen `2fr`-Track und zwei `1fr`-Tracks:

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

```css live-sample___grid-fr-unit_1
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
```

{{EmbedLiveSample('grid-fr-unit_1', '100%', "130") }}

Der erste Track erhält `2fr` des verfügbaren Platzes und die anderen beiden Tracks erhalten `1fr`, wodurch der erste Track größer wird. Sie können `fr`-Einheiten mit festen Längeneinheiten mischen. In diesem Fall wird der für die festen Tracks benötigte Raum zuerst verwendet, bevor der verbleibende Raum auf die anderen Tracks verteilt wird.

> [!NOTE]
> Die `fr`-Einheit verteilt den _verfügbaren_ Raum, nicht den _gesamten_ Raum. Daher, wenn einer Ihrer Tracks etwas Großes enthält, wird es weniger freien Raum zum Teilen geben.

### Abstände zwischen Tracks

Um Abstände zwischen Tracks zu erstellen, verwenden wir die Eigenschaften:

- {{cssxref("column-gap")}} für Abstände zwischen Spalten
- {{cssxref("row-gap")}} für Abstände zwischen Zeilen
- {{cssxref("gap")}} als Kurzform für beides

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

Hier fügen wir die `gap`-Eigenschaft hinzu, um Abstände zwischen den Tracks mit einem Wert von `20px` zu erstellen:

```css live-sample___grid-gap
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
}
```

{{EmbedLiveSample('grid-gap', '100%', "180") }}

Diese Abstände können beliebige Längeneinheiten oder Prozentsätze sein, aber keine `fr`-Einheit.

### Wiederholen von Track-Listen

Sie können die komplette oder nur einen Teil Ihrer Track-Liste mithilfe der CSS-Funktion `repeat()` wiederholen.
Hier ändern wir die Track-Liste zur folgenden:

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

Sie erhalten nun drei `1fr`-Tracks wie zuvor. Der erste Wert, der an die `repeat()`-Funktion übergeben wird, gibt an, wie oft Sie die Liste wiederholen möchten, während der zweite Wert eine Track-Liste ist, die aus einem oder mehreren Tracks bestehen kann, die Sie wiederholen möchten.

### Implizite und explizite Grids

Bis zu diesem Punkt haben wir nur Spalten-Tracks angegeben, aber Zeilen werden automatisch erstellt, um den Inhalt zu halten. Dieses Konzept hebt den Unterschied zwischen expliziten und impliziten Grids hervor.
Hier ist ein wenig mehr über den Unterschied zwischen den beiden Arten von Grids:

- **Explizites Grid** wird mit `grid-template-columns` oder `grid-template-rows` erstellt.
- **Implizites Grid** erweitert das definierte explizite Grid, wenn Inhalte außerhalb dieses Grids platziert werden, wie z.B. in die Zeilen durch Hinzufügen zusätzlicher Grid-Linien.

Standardmäßig werden in dem impliziten Grid erstellte Tracks `auto` dimensioniert, was im Allgemeinen bedeutet, dass sie groß genug sind, um ihren Inhalt zu enthalten. Wenn Sie den impliziten Grid-Tracks eine Größe geben möchten, können Sie die Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} verwenden. Wenn Sie Ihrer CSS `grid-auto-rows` mit einem Wert von `100px` hinzufügen, werden Sie sehen, dass die erstellten Zeilen jetzt 100 Pixel hoch sind.

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

### Die Funktion minmax()

Unsere 100 Pixel hohen Tracks werden nicht sehr nützlich sein, wenn wir Inhalte in diese Tracks hinzufügen, die höher als 100 Pixel sind, in welchem Fall es zu einem Überlauf kommen würde. Es könnte besser sein, Tracks zu haben, die _mindestens_ 100 Pixel hoch sind und sich dennoch ausdehnen können, wenn mehr Inhalte hinzugefügt werden. Eine ziemlich grundlegende Tatsache im Web ist, dass Sie nie wirklich wissen, wie hoch etwas sein wird — zusätzliche Inhalte oder größere Schriftgrößen können Probleme mit Designs verursachen, die versuchen, in jeder Dimension pixelgenau zu sein.

Die {{cssxref("minmax", "minmax()")}}-Funktion ermöglicht es uns, eine Mindest- und Maximalgröße für einen Track festzulegen, zum Beispiel `minmax(100px, auto)`. Die Mindestgröße beträgt 100 Pixel, aber das Maximum ist `auto`, das sich erweitern wird, um mehr Inhalt aufzunehmen. Hier ändern wir die `grid-auto-rows` zu einem `minmax()`-Wert:

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

Wenn Sie zusätzliche Inhalte hinzufügen, werden Sie sehen, dass sich der Track erweitert, um ihn zu passen. Beachten Sie, dass sich die Erweiterung genau entlang der Zeile ereignet.

### So viele Spalten, wie passen

Wir können einige der Lektionen kombinieren, die wir über Track-Listung, Wiederholungsnotation und {{cssxref("minmax", "minmax()")}} gelernt haben, um ein nützliches Muster zu erstellen. Manchmal ist es hilfreich, dem Grid zu sagen, dass es so viele Spalten erstellen soll, wie in den Container passen. Dies tun wir, indem wir den Wert von `grid-template-columns` mit der {{cssxref("repeat", "repeat()")}}-Funktion festlegen, jedoch anstelle einer Zahl das Schlüsselwort [`auto-fit`](/de/docs/Web/CSS/repeat#auto-fit) übergeben. Für den zweiten Parameter der Funktion verwenden wir `minmax()` mit einem Mindestwert, der der minimalen Track-Größe entspricht, die wir haben möchten, und einem Maximum von `1fr`.

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

Dies funktioniert, weil das Grid so viele 230-Pixel-Spalten erstellt, wie in den Container passen, und dann den übrigen Raum gleichmäßig auf alle Spalten verteilt. Das Maximum ist `1fr`, was, wie wir bereits wissen, den Raum gleichmäßig zwischen den Tracks verteilt.

## Linienbasierte Platzierung

Wir wechseln nun vom Erstellen eines Grids zum Platzieren von Dingen im Grid. Unser Grid hat immer Linien — diese sind beginnend bei 1 nummeriert und beziehen sich auf den [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) des Dokuments. Zum Beispiel wäre die Spaltenlinie 1 in Englisch (von links nach rechts geschrieben) auf der linken Seite des Grids und die Zeilenlinie 1 oben, während in Arabisch (von rechts nach links geschrieben) die Spaltenlinie 1 auf der rechten Seite wäre.

Um Elemente entlang dieser Linien zu positionieren, können wir die Start- und Endlinien des Grid-Bereichs angeben, in dem ein Element platziert werden soll. Es gibt vier Eigenschaften, die wir dafür verwenden können:

- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}

Diese Eigenschaften akzeptieren Liniennummern als ihre Werte, sodass wir angeben können, dass ein Element beispielsweise auf Linie 1 beginnen und auf Linie 3 enden soll.
Alternativ können Sie auch Kurzform-Eigenschaften verwenden, die es Ihnen ermöglichen, die Start- und Endlinien gleichzeitig anzugeben, getrennt durch einen Schrägstrich `/`:

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

Ohne definierte Platzierung können Sie sehen, dass die _automatische Platzierung_ jedes Element in seine eigene Zelle im Grid setzt. Der {{htmlelement("header")}} nimmt `1fr` (ein Viertel) und der {{htmlelement("main")}} nimmt `3fr` (drei Viertel) ein.

{{EmbedLiveSample('grid-placement_0', '100%', "230") }}

Lassen Sie uns alle Elemente für unsere Website arrangieren, indem wir die Grid-Linien verwenden. Fügen Sie die folgenden Regeln am Ende Ihrer CSS hinzu:

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

Jetzt sind der {{htmlelement("header")}} und {{htmlelement("footer")}} auf `1 / 3` gesetzt, was bedeutet, dass sie bei Linie `1` beginnen und bei Linie `3` enden.

{{EmbedLiveSample('grid-placement_1', '100%', "230") }}

> [!NOTE]
> Sie können auch den Wert `-1` verwenden, um die Endspalte oder -zeilenlinie anzusprechen, und dann von den Kanten des expliziten Grids mit negativen Werten nach innen zählen. Beachten Sie auch, dass die Linien immer von den Rändern des expliziten Grids und nicht des {{Glossary("Grid", "impliziten Grids")}} zählen.

## Positionierung mit grid-template-areas

Eine alternative Möglichkeit, Elemente auf Ihrem Grid anzuordnen, ist die Verwendung der {{cssxref("grid-template-areas")}}-Eigenschaft, und geben Sie den verschiedenen Elementen Ihres Designs einen Namen.

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

Die Regeln für `grid-template-areas` sind wie folgt:

- Sie müssen jede Zelle des Grids ausfüllen.
- Um sich über zwei Zellen zu erstrecken, wiederholen Sie den Namen.
- Um eine Zelle leer zu lassen, verwenden Sie einen `.` (Punkt).
- Bereiche müssen rechteckig sein — zum Beispiel können Sie keinen L-förmigen Bereich haben.
- Bereiche können nicht an verschiedenen Orten wiederholt werden.

Sie können mit unserem Layout experimentieren, indem Sie den Footer so ändern, dass er nur unterhalb des Artikels sitzt, und die Sidebar, um sich ganz nach unten zu erstrecken. Dies ist eine sehr schöne Möglichkeit, ein Layout zu beschreiben, denn es ist allein schon beim Betrachten des CSS klar, was genau passiert.

## Verschachtelte Grids und Subgrid

Es ist möglich, ein Grid innerhalb eines anderen Grids zu verschachteln und ein ["Subgrid"](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) zu erstellen.
Sie können dies tun, indem Sie die Eigenschaft `display: grid` auf ein Element im übergeordneten Grid setzen.

Lassen Sie uns das vorherige Beispiel erweitern, indem wir einen Container für Artikel hinzufügen und ein verschachteltes Grid verwenden, um das Layout mehrerer Artikel zu steuern.
Während wir im verschachtelten Grid nur eine Spalte verwenden, können wir die Zeilen mithilfe der Eigenschaft `grid-template-rows` in ein Verhältnis von 4:3:3 aufteilen.
Dieser Ansatz ermöglicht es uns, ein Layout zu erstellen, bei dem ein Artikel oben auf der Seite eine große Anzeige hat, während die anderen ein kleineres, vorschauartiges Layout haben.

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

Um das Arbeiten mit Layouts in verschachtelten Grids zu erleichtern, können Sie `subgrid` auf den Eigenschaften `grid-template-rows` und `grid-template-columns` verwenden. Dies ermöglicht es Ihnen, die im übergeordneten Grid definierten Tracks zu nutzen.

Im folgenden Beispiel verwenden wir [linienbasierte Platzierung](#linienbasierte_platzierung), die es dem verschachtelten Grid ermöglicht, sich über mehrere Spalten und Zeilen des übergeordneten Grids zu erstrecken.
Wir haben `subgrid` hinzugefügt, um die Spaltentracks des übergeordneten Grids zu erben, während wir ein anderes Layout für die Zeilen innerhalb des verschachtelten Grids hinzufügen.

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

Es sind zahlreiche Grid-Frameworks verfügbar, die ein 12- oder 16-Spaltengrid anbieten, um bei der Gestaltung Ihres Inhalts zu helfen.
Die gute Nachricht ist, dass Sie wahrscheinlich keine Drittanbieter-Frameworks benötigen, um grid-basierte Layouts zu erstellen — die Grid-Funktionalität ist bereits in der Spezifikation enthalten und wird von den meisten modernen Browsern unterstützt.

Dies hat einen Container mit einem definierten 12-Spaltengrid, das `grid-template-columns: repeat(12, 1fr);` verwendet, und das gleiche Markup, das wir in den vorherigen zwei Beispielen verwendet haben. Wir können jetzt linienbasierte Platzierung verwenden, um unseren Inhalt auf dem 12-Spaltengrid zu platzieren.

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

Wenn Sie den [Firefox Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) verwenden, um die Gridlinien auf Ihrem Design zu überlagern, können Sie sehen, wie unser 12-Spaltengrid funktioniert.

![Ein 12-Spaltengrid überlagert über unser Design.](learn-grids-inspector.png)

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Grid](/de/docs/Learn_web_development/Core/CSS_layout/Test_your_skills/Grid).

## Zusammenfassung

In diesem Überblick haben wir die Hauptmerkmale des CSS-Grid-Layouts besprochen. Sie sollten nun in der Lage sein, es in Ihren Designs zu verwenden. Weiter geht es mit responsivem Design.

## Siehe auch

- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout#guides)
  - : Hauptseite des CSS Grid Layout Moduls, die viele weitere Ressourcen enthält
- [Ein vollständiger Leitfaden zu CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
  - : Ein visueller Leitfaden auf CSS-Tricks (2023).
- [Grid Garden](https://cssgridgarden.com/)
  - : Ein lehrreiches Spiel, um die Grundlagen von Grid auf cssgridgarden.com zu lernen und besser zu verstehen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout")}}
