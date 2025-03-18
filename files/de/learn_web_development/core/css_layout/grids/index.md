---
title: CSS-Grid-Layout
slug: Learn_web_development/Core/CSS_layout/Grids
l10n:
  sourceCommit: 3daf759d8f7204d056f437a53cb75d386d6e18f6
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout")}}

CSS-Grid-Layout ist ein zweidimensionales Layoutsystem für das Web. Es ermöglicht Ihnen, Inhalte in Zeilen und Spalten zu organisieren und bietet viele Funktionen, um die Erstellung komplexer Layouts zu vereinfachen. Dieser Artikel erklärt alles, was Sie wissen müssen, um mit dem Grid-Layout zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Stilgestaltung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Fundamentale Text- und Schriftstilierung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">CSS-Layout-Grundkonzepten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen Sie den Zweck von CSS Grid — flexibel ein Set von Block- oder Inline-Elementen in zwei Dimensionen anzuordnen.</li>
          <li>Verstehen Sie die Grid-Terminologie — Reihen, Spalten, Lücken und Rinnen.</li>
          <li>Verstehen Sie, was <code>display: grid</code> standardmäßig bewirkt.</li>
          <li>Definition von Grid-Reihen, Spalten und Lücken.</li>
          <li>Platzierung von Elementen auf dem Grid.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist Grid-Layout?

Ein Grid ist eine Sammlung von horizontalen und vertikalen Linien, die ein Muster bilden, an dem wir unsere Designelemente ausrichten können. Sie helfen uns, Layouts zu erstellen, in denen unsere Elemente nicht herumspringen oder ihre Breite ändern, wenn wir von Seite zu Seite wechseln, was eine größere Konsistenz auf unseren Websites bietet.

Ein Grid hat typischerweise **Spalten**, **Reihen** und dann Lücken zwischen jeder Reihe und Spalte. Die Lücken werden üblicherweise als **Rinnen** bezeichnet.

![CSS-Grid mit Teilen, die als Reihen, Spalten und Rinnen bezeichnet sind. Reihen sind die horizontalen Segmente des Grids und Spalten sind die vertikalen Segmente des Grids. Der Raum zwischen zwei Reihen wird als 'Reihenrinnen' und der Raum zwischen 2 Spalten als 'Spaltenrinnen' bezeichnet.](grid.png)

## Erstellen Ihres Grids in CSS

Nachdem Sie sich für das Grid entschieden haben, das Ihr Design benötigt, können Sie CSS-Grid-Layout verwenden, um es zu erstellen. Wir werden zunächst die grundlegenden Funktionen des Grid-Layouts betrachten und dann untersuchen, wie man ein einfaches Gridsystem für Ihr Projekt erstellt.
Das folgende Video bietet eine anschauliche Erklärung zur Verwendung von CSS Grid:

{{EmbedYouTube("KOvGeFUHAC0")}}

### Definierung eines Grids

Lassen Sie uns Grid-Layouts ausprobieren, hier ist ein Beispiel mit einem Container, der einige Kind-Elemente hat. Standardmäßig werden diese Elemente in einem normalen Fluss angezeigt, wodurch sie untereinander erscheinen.

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

Ähnlich wie bei der Definition von Flexbox definieren Sie ein Grid-Layout, indem Sie den Wert der {{cssxref("display")}}-Eigenschaft auf `grid` setzen. Wie im Fall von Flexbox verwandelt die `display: grid`-Eigenschaft alle direkten Kinder des Containers in Grid-Elemente. Wir haben die folgende CSS-Datei hinzugefügt:

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

Im Gegensatz zu Flexbox sehen die Elemente nicht sofort anders aus. Die Deklaration von `display: grid` gibt Ihnen ein Ein-Spalten-Grid, sodass Ihre Elemente weiterhin untereinander angezeigt werden, wie sie es im normalen Fluss tun.

Um etwas zu sehen, das mehr nach einem Grid aussieht, müssen wir dem Grid einige Spalten hinzufügen. Lassen Sie uns drei Spalten von je 200 Pixeln hinzufügen. Sie können jede Längeneinheit oder Prozentsatz verwenden, um diese Spaltentracks zu erstellen.

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

Sie sollten sehen, dass sich die Elemente so umarrangiert haben, dass sich eins in jeder Zelle des Grids befindet.

{{EmbedLiveSample('simple-grid_2', '100%', "130") }}

### Flexible Grids mit der fr-Einheit

Zusätzlich zur Erstellung von Grids unter Verwendung von Längen und Prozenten können wir [`fr`](/de/docs/Web/CSS/flex_value) verwenden. Die `fr`-Einheit repräsentiert einen Bruchteil des verfügbaren Platzes im Grid-Container, um Grid-Reihen und -Spalten flexibel zu dimensionieren.

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

Sie verfügen jetzt über flexible Tracks.
Die `fr`-Einheit verteilt den Raum proportional, sodass Sie unterschiedliche positive Werte für Ihre Tracks angeben können.
Ändern Sie Ihre Track-Liste zur folgenden Definition, um einen `2fr`-Track und zwei `1fr`-Tracks zu erstellen:

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

Der erste Track erhält `2fr` des verfügbaren Platzes und die anderen beiden Tracks erhalten `1fr`, sodass der erste Track größer wird. Sie können `fr`-Einheiten mit festen Längeneinheiten mischen. In diesem Fall wird der für die festen Tracks benötigte Platz zuerst verwendet, bevor der verbleibende Platz auf die anderen Tracks verteilt wird.

> [!NOTE]
> Die `fr`-Einheit verteilt den _verfügbaren_ Platz, nicht den _gesamten_ Platz. Wenn also einer Ihrer Tracks etwas Großes enthält, wird weniger freier Platz zum Verteilen zur Verfügung stehen.

### Lücken zwischen den Tracks

Um Lücken zwischen den Tracks zu erstellen, verwenden wir die Eigenschaften:

- {{cssxref("column-gap")}} für Lücken zwischen Spalten
- {{cssxref("row-gap")}} für Lücken zwischen Reihen
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

Hier fügen wir die `gap`-Eigenschaft hinzu, um Lücken zwischen den Tracks mit einem Wert von `20px` zu erstellen:

```css live-sample___grid-gap
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
}
```

{{EmbedLiveSample('grid-gap', '100%', "180") }}

Diese Lücken können jede Längeneinheit oder Prozentsatz sein, aber keine `fr`-Einheit.

### Wiederholende Track-Auflistungen

Sie können die gesamte oder nur einen Abschnitt Ihrer Track-Auflistung mit der CSS-Funktion `repeat()` wiederholen.
Hier ändern wir die Track-Auflistung zur folgenden:

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

Sie erhalten jetzt drei `1fr`-Tracks wie zuvor. Der erste Wert, der an die `repeat()`-Funktion übergeben wird, gibt an, wie oft Sie die Liste wiederholen möchten, während der zweite Wert eine Track-Liste ist, die können ein oder mehrere Tracks sein, die Sie wiederholen möchten.

### Implizite und explizite Grids

Bis zu diesem Punkt haben wir nur Spalten-Tracks spezifiziert, aber die Reihen werden automatisch erstellt, um den Inhalt zu halten. Dieses Konzept hebt den Unterschied zwischen expliziten und impliziten Grids hervor.
Hier ist etwas mehr über den Unterschied zwischen den beiden Arten von Grids:

- **Explizites Grid** wird mit `grid-template-columns` oder `grid-template-rows` erstellt.
- **Implizites Grid** erweitert das definierte explizite Grid, wenn Inhalte außerhalb dieses Grids platziert werden, z.B. in den Reihen durch das Ziehen zusätzlicher Grid-Linien.

Standardmäßig sind in das implizite Grid erstellte Tracks `auto`-groß, was im Allgemeinen bedeutet, dass sie groß genug sind, um ihren Inhalt zu enthalten. Wenn Sie den impliziten Grid-Tracks eine Größe geben möchten, können Sie die Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} verwenden. Wenn Sie `grid-auto-rows` mit einem Wert von `100px` zu Ihrem CSS hinzufügen, sehen Sie, dass diese erstellten Reihen nun 100 Pixel hoch sind.

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

Unsere 100-Pixel hohe Tracks werden nicht sehr nützlich sein, wenn wir Inhalte einfügen, die höher als 100 Pixel sind, was zu einem Überlauf führen würde. Es könnte besser sein, Tracks zu haben, die _mindestens_ 100 Pixel hoch sind und dennoch expandieren können, wenn mehr Inhalt hinzugefügt wird. Eine ziemlich grundlegende Tatsache über das Web ist, dass Sie nie wirklich wissen, wie hoch etwas sein wird — zusätzlicher Inhalt oder größere Schriftgrößen können bei Designs, die versuchen, pixelgenau in jeder Dimension zu sein, Probleme verursachen.

Die {{cssxref("minmax", "minmax()")}}-Funktion erlaubt es uns, eine minimale und maximale Größe für einen Track zu setzen, zum Beispiel `minmax(100px, auto)`. Die Mindestgröße beträgt 100 Pixel, aber das Maximum ist `auto`, das sich erweitert, um mehr Inhalt unterzubringen. Hier ändern wir die `grid-auto-rows`, um einen `minmax()`-Wert zu verwenden:

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

Wenn Sie zusätzliche Inhalte hinzufügen, sehen Sie, dass sich der Track ausdehnt, um alles unterzubringen. Beachten Sie, dass die Erweiterung direkt entlang der Reihe erfolgt.

### So viele Spalten wie passen werden

Wir können einige der Lektionen, die wir über Track-Auflistungen, Wiederholungsnotation und {{cssxref("minmax", "minmax()")}} gelernt haben, kombinieren, um ein nützliches Muster zu erstellen. Manchmal ist es hilfreich, grid zu bitten, so viele Spalten zu erstellen, wie in den Container passen. Wir tun dies, indem wir den Wert von `grid-template-columns` mit der {{cssxref("repeat", "repeat()")}}-Funktion setzen, jedoch anstelle einer Zahl verwenden wir das Schlüsselwort [`auto-fit`](/de/docs/Web/CSS/repeat#auto-fit). Für den zweiten Parameter der Funktion verwenden wir `minmax()` mit einem minimalen Wert, der der minimalen Track-Größe entspricht, die wir haben möchten und einem Maximum von `1fr`.

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

Das funktioniert, weil grid so viele 230-Pixel-Spalten erstellt, wie in den Container passen, und den verbleibenden Platz auf alle Spalten verteilt. Das Maximum ist `1fr`, was, wie wir bereits wissen, den Raum gleichmäßig zwischen den Tracks verteilt.

## Linienbasierte Platzierung

Wir fahren nun fort, von der Erstellung eines Grids zur Platzierung von Dingen auf dem Grid. Unser Grid hat immer Linien — diese werden beginnend mit 1 durchnummeriert und beziehen sich auf den [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) des Dokuments. Zum Beispiel wäre die Spaltenlinie 1 im Englischen (von links nach rechts geschrieben) auf der linken Seite des Grids und die Reihenlinie 1 oben, während sie im Arabischen (von rechts nach links geschrieben) die Spaltenlinie 1 auf der rechten Seite wäre.

Um Elemente entlang dieser Linien zu positionieren, können wir die Start- und Endlinien des Grid-Bereichs angeben, in dem ein Element platziert werden soll. Es gibt vier Eigenschaften, die wir dafür verwenden können:

- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}

Diese Eigenschaften akzeptieren Liniennummern als ihre Werte, sodass wir beispielsweise angeben können, dass ein Element auf Linie 1 beginnen und auf Linie 3 enden soll. Alternativ können Sie auch Kurzform-Eigenschaften verwenden, mit denen Sie die Start- und Endlinien gleichzeitig angeben können, getrennt durch einen Schrägstrich `/`:

- {{cssxref("grid-column")}} Kurzform für `grid-column-start` und `grid-column-end`
- {{cssxref("grid-row")}} Kurzform für `grid-row-start` und `grid-row-end`

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

Ohne die definierte Platzierung können Sie sehen, dass _Auto-Placement_ jedes Element in seine eigene Zelle im Grid setzt. Das {{htmlelement("header")}} nimmt `1fr` (ein Viertel) ein und das {{htmlelement("main")}} `3fr` (drei Viertel).

{{EmbedLiveSample('grid-placement_0', '100%', "230") }}

Lassen Sie uns alle Elemente für unsere Website mit den Grid-Linien anordnen. Fügen Sie die folgenden Regeln am Ende Ihres CSS hinzu:

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

Nun sind das {{htmlelement("header")}} und das {{htmlelement("footer")}} auf `1 / 3` gesetzt, was bedeutet, dass sie bei Linie `1` beginnen und bei Linie `3` enden.

{{EmbedLiveSample('grid-placement_1', '100%', "230") }}

> [!NOTE]
> Sie können auch den Wert `-1` verwenden, um die Endspalten- oder Endreihenlinie zu targetieren und dann negative Werte verwenden, um von dort aus nach innen zu zählen. Beachten Sie auch, dass Linien immer von den Rändern des expliziten Grids zählen, nicht von dem {{Glossary("Grid", "impliziten Grid")}}.

## Positionierung mit grid-template-areas

Eine alternative Möglichkeit, Elemente auf Ihrem Grid anzuordnen, ist die Verwendung der {{cssxref("grid-template-areas")}}-Eigenschaft und den verschiedenen Elementen Ihres Designs einen Namen zu geben.

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

Hier verwenden wir die {{CSSXRef("grid-template-areas")}}-Eigenschaft, um zu definieren, wie die 3 Reihen angeordnet sind. Die erste Reihe hat den Wert `header header`, die zweite `sidebar content` und die dritte `footer footer`. Wir verwenden dann die {{CSSXRef("grid-area")}}-Eigenschaft, um zu definieren, wo Elemente in den `grid-template-areas` platziert sind.

{{EmbedLiveSample('grid-placement_2', '100%', "230") }}

Die Regeln für `grid-template-areas` sind wie folgt:

- Sie müssen jede Zelle des Grids füllen.
- Um über zwei Zellen zu spannen, wiederholen Sie den Namen.
- Um eine Zelle leer zu lassen, verwenden Sie einen `.` (Punkt).
- Bereiche müssen rechteckig sein — zum Beispiel kann man keinen L-förmigen Bereich haben.
- Bereiche können nicht an unterschiedlichen Orten wiederholt werden.

Sie können mit unserem Layout spielen, indem Sie das Footer nur unterhalb des Artikels platzieren und das Sidebar sich über die gesamte Höhe erstrecken lassen. Dies ist eine sehr schöne Möglichkeit, ein Layout zu beschreiben, weil es klar ist, was genau im CSS passiert.

## Verschachtelung von Grids und Subgrid

Es ist möglich, ein Grid innerhalb eines anderen Grids zu verschachteln und somit ein ["Subgrid"](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) zu erstellen.
Sie können dies tun, indem Sie die Eigenschaft `display: grid` auf ein Element im übergeordneten Grid setzen.

Lassen Sie uns das vorherige Beispiel erweitern, indem wir einen Container für Artikel hinzufügen und ein verschachteltes Grid verwenden, um das Layout für mehrere Artikel zu kontrollieren.
Während wir nur eine Spalte im verschachtelten Grid verwenden, können wir definieren, dass die Reihen im Verhältnis 4:3:3 aufgeteilt werden, indem wir die Eigenschaft `grid-template-rows` verwenden.
Dieser Ansatz ermöglicht es uns, ein Layout zu erstellen, bei dem ein Artikel oben auf der Seite groß angezeigt wird, während die anderen ein kleineres, vorschauähnliches Layout haben.

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

Um es einfacher zu machen, innerhalb verschachtelter Grids mit Layouts zu arbeiten, können Sie `subgrid` auf die Eigenschaften `grid-template-rows` und `grid-template-columns` anwenden. Dadurch können Sie die in dem übergeordneten Grid definierten Tracks nutzen.

Im folgenden Beispiel verwenden wir [linienbasierte Platzierung](#linienbasierte_platzierung), die es dem verschachtelten Grid ermöglicht, sich über mehrere Spalten und Reihen des übergeordneten Grids zu erstrecken.
Wir haben `subgrid` hinzugefügt, um die Spaltentracks des übergeordneten Grids zu erben, während wir ein anderes Layout für die Reihen innerhalb des verschachtelten Grids hinzufügen.

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

Es gibt zahlreiche Grid-Frameworks, die ein 12- oder 16-Spalten-Grid anbieten, um das Layout für Ihre Inhalte zu unterstützen.
Die gute Nachricht ist, dass Sie wahrscheinlich keine Drittanbieter-Frameworks benötigen, um Grid-basierte Layouts zu erstellen — die Grid-Funktionalität ist bereits in der Spezifikation enthalten und wird von den meisten modernen Browsern unterstützt.

Dies hat einen Container mit einem 12-Spalten-Grid definiert, unter Verwendung von `grid-template-columns: repeat(12, 1fr);`, und derselben Markup, die wir in den vorherigen zwei Beispielen verwendet haben. Wir können jetzt linienbasierte Platzierung verwenden, um unsere Inhalte auf dem 12-Spalten-Grid zu platzieren.

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

Wenn Sie den [Firefox-Grid-Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) verwenden, um die Grid-Linien auf Ihrem Design zu überlagern, können Sie sehen, wie unser 12-Spalten-Grid funktioniert.

![Ein 12-Spalten-Grid, das auf unser Design überlagert ist.](learn-grids-inspector.png)

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um sicherzustellen, dass Sie diese Informationen beibehalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grid_skills).

## Zusammenfassung

In diesem Überblick haben wir die Hauptmerkmale des CSS-Grid-Layouts durchlaufen. Sie sollten in der Lage sein, es in Ihren Entwürfen zu verwenden. Als nächstes betrachten wir das Responsive Design.

## Siehe auch

- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout#guides)
  - : Hauptseite des CSS-Grid-Layout-Moduls, mit vielen weiteren Ressourcen
- [Ein vollständiger Leitfaden zu CSS-Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
  - : Ein visueller Leitfaden auf CSS-Tricks (2023).
- [Grid Garden](https://cssgridgarden.com/)
  - : Ein Bildungs-Spiel, um die Grundlagen von Grid auf cssgridgarden.com zu lernen und besser zu verstehen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout")}}
