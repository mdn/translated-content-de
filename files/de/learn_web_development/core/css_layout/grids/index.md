---
title: CSS-Grid-Layout
slug: Learn_web_development/Core/CSS_layout/Grids
l10n:
  sourceCommit: 30cb9ca54d74a63bd95e0e0f5281e9ade578c044
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout")}}

CSS-Grid-Layout ist ein zweidimensionales Layoutsystem für das Web. Es ermöglicht Ihnen, Inhalte in Zeilen und Spalten zu organisieren und bietet viele Funktionen, um die Erstellung komplexer Layouts zu vereinfachen. Dieser Artikel erklärt alles, was Sie wissen müssen, um mit dem Grid-Layout zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftstilierung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">CSS-Layout-Grundkonzepten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen des Zwecks von CSS Grid — flexibel ein Satz von Block- oder Inline-Elementen in zwei Dimensionen gestalten.</li>
          <li>Verstehen der Grid-Terminologie — Zeilen, Spalten, Abstände und Rinnen.</li>
          <li>Verstehen, was <code>display: grid</code> standardmäßig bietet.</li>
          <li>Definition von Grid-Zeilen, Spalten und Abständen.</li>
          <li>Positionierung von Elementen im Grid.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist Grid-Layout?

Ein Grid ist eine Sammlung horizontaler und vertikaler Linien, die ein Muster bilden, an dem wir unsere Designelemente ausrichten können. Sie helfen uns, Layouts zu erstellen, bei denen unsere Elemente nicht herumspringen oder die Breite ändern, wenn wir von Seite zu Seite gehen, und bieten so mehr Konsistenz auf unseren Websites.

Ein Grid besteht typischerweise aus **Spalten**, **Zeilen** und den Abständen zwischen jeder Zeile und Spalte. Diese Abstände werden üblicherweise als **Rinnen** bezeichnet.

![CSS-Grid mit als Zeilen, Spalten und Rinnen bezeichneten Teilen. Zeilen sind die horizontalen Segmente des Grids und Spalten sind die vertikalen Segmente des Grids. Der Abstand zwischen zwei Zeilen wird als 'Zeilenrille' bezeichnet und der Abstand zwischen zwei Spalten wird als 'Spaltenrille' bezeichnet.](grid.png)

## Ihr Grid in CSS erstellen

Nachdem Sie sich für das benötigte Grid Ihres Designs entschieden haben, können Sie das CSS-Grid-Layout verwenden, um es zu erstellen. Wir werden uns zunächst die grundlegenden Funktionen des Grid-Layouts ansehen und dann untersuchen, wie Sie ein einfaches Gridsystem für Ihr Projekt erstellen können. Das folgende Video bietet eine gute visuelle Erklärung zur Verwendung von CSS Grid:

{{EmbedYouTube("KOvGeFUHAC0")}}

### Ein Grid definieren

Probieren wir Grid-Layouts aus: Hier ist ein Beispiel mit einem Container, der einige Kindelemente hat. Standardmäßig werden diese Elemente im normalen Fluss angezeigt, was dazu führt, dass sie untereinander erscheinen.

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

Ähnlich wie bei der Definition von Flexbox definieren Sie ein Grid-Layout, indem Sie den Wert der {{cssxref("display")}}-Eigenschaft auf `grid` setzen. Wie im Fall von Flexbox verwandelt die Eigenschaft `display: grid` alle direkten Kinder des Containers in Grid-Elemente. Wir haben die folgende CSS-Datei hinzugefügt:

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

Im Gegensatz zu Flexbox sehen die Elemente nicht sofort anders aus. Die Deklaration `display: grid` gibt Ihnen ein Ein-Spalten-Grid, sodass Ihre Elemente weiterhin untereinander angezeigt werden, wie sie es im normalen Fluss tun.

Um etwas gridähnlicheres zu sehen, müssen wir dem Grid einige Spalten hinzufügen. Fügen wir drei 200-Pixel-Spalten hinzu. Sie können jede beliebige Längeneinheit oder Prozente verwenden, um diese Spaltenstrecken zu erstellen.

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

Sie sollten sehen, dass sich die Elemente so neu angeordnet haben, dass sich jeweils eines in jeder Zelle des Grids befindet.

{{EmbedLiveSample('simple-grid_2', '100%', "130") }}

## Interaktive Wiederholung der Grid-Konzepte

Der folgende eingebettete Inhalt von Scrimba<sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine interaktive Lektion zu den Grundlagen von CSS Grid. Es enthält auch ein Live-Grid-Beispiel, mit dem Sie spielen können, um zu sehen, wie der Code funktioniert.

<mdn-scrim-inline url="https://scrimba.com/learn-css-grid-c02k/~01" scrimtitle="Your first grid"></mdn-scrim-inline>

### Flexible Grids mit der fr-Einheit

Zusätzlich zur Erstellung von Grids mit Längen und Prozentsätzen können wir [`fr`](/de/docs/Web/CSS/Reference/Values/flex_value) verwenden. Die `fr`-Einheit stellt einen Bruchteil des verfügbaren Platzes im Grid-Container dar, um Grid-Zeilen und -Spalten flexibel zu dimensionieren.

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

Hier ändern wir die Streckenaufstellung zur folgenden Definition und erstellen drei `1fr`-Strecken:

```css live-sample___grid-fr-unit_0
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

{{EmbedLiveSample('grid-fr-unit_0', '100%', "130") }}

Sie haben jetzt flexible Strecken.
Die `fr`-Einheit verteilt den Platz proportional, sodass Sie Ihren Strecken unterschiedliche positive Werte zuweisen können.
Ändern Sie Ihre Streckenaufstellung zur folgenden Definition und erstellen Sie eine `2fr`-Strecke und zwei `1fr`-Strecken:

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

Die erste Strecke erhält `2fr` des verfügbaren Platzes und die anderen beiden Strecken erhalten `1fr`, wodurch die erste Strecke größer wird. Sie können `fr`-Einheiten mit festen Längeneinheiten mischen. In diesem Fall wird der für die festen Strecken benötigte Platz zunächst verbraucht, bevor der verbleibende Platz auf die anderen Strecken verteilt wird.

> [!NOTE]
> Die `fr`-Einheit verteilt _verfügbaren_ Platz, nicht _allen_ Platz. Daher wird weniger freier Raum zum Teilen vorhanden sein, wenn eine Ihrer Strecken etwas Großes enthält.

### Abstände zwischen den Strecken

Um Abstände zwischen den Strecken zu schaffen, verwenden wir die Eigenschaften:

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

Hier fügen wir die Eigenschaft `gap` hinzu, um Abstände zwischen den Strecken mit einem Wert von `20px` zu erzeugen:

```css live-sample___grid-gap
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
}
```

{{EmbedLiveSample('grid-gap', '100%', "180") }}

Diese Abstände können jede beliebige Längeneinheit oder Prozentangaben sein, jedoch keine `fr`-Einheit.

### Wiederholte Streckenaufstellungen

Sie können die gesamte oder nur einen Teil Ihrer Streckenaufstellung mithilfe der CSS-`repeat()`-Funktion wiederholen.
Ändern wir hier die Streckenaufstellung wie folgt:

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

Sie erhalten jetzt wie zuvor drei `1fr`-Strecken. Der erste an die `repeat()`-Funktion übergebene Wert gibt an, wie oft Sie die Aufstellung wiederholen möchten, während der zweite Wert eine Streckenaufstellung ist, die eine oder mehrere zu wiederholende Strecken sein kann.

### Implizite und explizite Grids

Bisher haben wir nur Spaltenstrecken spezifiziert, aber Zeilen werden automatisch erstellt, um den Inhalt aufzunehmen. Dieses Konzept unterstreicht den Unterschied zwischen expliziten und impliziten Grids.
Hier ein bisschen mehr über den Unterschied zwischen den beiden Arten von Grids:

- **Explizites Grid** wird mit `grid-template-columns` oder `grid-template-rows` erstellt.
- **Implizites Grid** erweitert das definierte explizite Grid, wenn Inhalte außerhalb dieses Grids platziert werden, z. B. in den Zeilen durch Zeichnen zusätzlicher Grid-Linien.

Standardmäßig sind im impliziten Grid erstellte Strecken auf `auto` Dimensioniert, was im Allgemeinen bedeutet, dass sie groß genug sind, um ihren Inhalt zu enthalten. Wenn Sie den Strecken des impliziten Grids eine Größe geben möchten, können Sie die Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} verwenden. Wenn Sie `grid-auto-rows` mit einem Wert von `100px` zu Ihrem CSS hinzufügen, werden Sie sehen, dass diese erstellten Zeilen jetzt 100 Pixel hoch sind.

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

Unsere 100 Pixel hohen Strecken werden nicht sehr nützlich sein, wenn wir Inhalte in diese Strecken einfügen, die höher als 100 Pixel sind, was zu einem Überlauf führen würde. Es wäre besser, Strecken zu haben, die _mindestens_ 100 Pixel hoch sind und sich dennoch erweitern können, wenn mehr Inhalt hinzugefügt wird. Eine ziemlich grundlegende Tatsache über das Web ist, dass man nie wirklich weiß, wie hoch etwas sein wird — zusätzlicher Inhalt oder größere Schriftgrößen können Probleme mit Designs verursachen, die versuchen, pixelgenau in jeder Dimension zu sein.

Die {{cssxref("minmax", "minmax()")}}-Funktion ermöglicht es uns, eine minimale und maximale Größe für eine Strecke festzulegen, zum Beispiel `minmax(100px, auto)`. Die Mindestgröße beträgt 100 Pixel, aber die maximale Größe ist `auto`, die sich zur Aufnahme von mehr Inhalt erweitern wird. Hier ändern wir `grid-auto-rows`, um einen `minmax()`-Wert zu nutzen:

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

Wenn Sie zusätzlichen Inhalt hinzufügen, werden Sie sehen, dass sich die Strecke erweitert, um ihn anzupassen. Beachten Sie, dass die Erweiterung direkt entlang der Zeile erfolgt.

### So viele Spalten wie möglich

Wir können einige der Lektionen, die wir über die Streckenaufstellung, Wiederholungsnotation und {{cssxref("minmax", "minmax()")}} gelernt haben, kombinieren, um ein nützliches Muster zu erstellen. Manchmal ist es hilfreich, Grid zu bitten, so viele Spalten zu erstellen, wie in den Container passen. Wir machen dies, indem wir den Wert von `grid-template-columns` mit der {{cssxref("repeat", "repeat()")}}-Funktion festlegen, jedoch anstelle einer Anzahl das Schlüsselwort [`auto-fit`](/de/docs/Web/CSS/Reference/Values/repeat#auto-fit) übergeben. Für den zweiten Parameter der Funktion nutzen wir `minmax()` mit einem Mindestwert gleich der Mindestgröße der Strecke, die wir haben möchten, und einem Maximum von `1fr`.

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

Dies funktioniert, weil das Grid so viele 230-Pixel-Spalten erstellt, wie in den Container passen, und dann den restlichen Raum gleichmäßig auf alle Spalten verteilt. Das Maximum ist `1fr`, welches, wie wir bereits wissen, den Raum gleichmäßig zwischen den Strecken verteilt.

## Linienbasierte Platzierung

Wir bewegen uns jetzt vom Erstellen eines Grids zur Platzierung von Dingen im Grid. Unser Grid hat immer Linien — diese beginnen mit 1 und beziehen sich auf den [Schreibmodus](/de/docs/Web/CSS/Guides/Writing_modes) des Dokuments. Zum Beispiel würde die Spaltenlinie 1 in Englisch (von links nach rechts geschrieben) auf der linken Seite des Grids sein und die Zeilenlinie 1 oben, während die Spaltenlinie 1 im Arabischen (von rechts nach links geschrieben) auf der rechten Seite wäre.

Um Elemente entlang dieser Linien zu positionieren, können wir die Start- und Endlinien des Grid-Bereichs angeben, in dem ein Element platziert werden soll. Es gibt vier Eigenschaften, die wir dafür verwenden können:

- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}

Diese Eigenschaften akzeptieren Liniennummern als ihre Werte, sodass wir angeben können, dass ein Element beispielsweise auf Linie 1 beginnen und auf Linie 3 enden soll. Alternativ können Sie auch Kurzform-Eigenschaften verwenden, die es Ihnen ermöglichen, die Start- und Endlinien gleichzeitig anzugeben, getrennt durch einen Schrägstrich `/`:

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

Ohne die definierte Platzierung können Sie sehen, dass _Auto-Platzierung_ jedes Element in seine eigene Zelle im Grid setzt. Der {{htmlelement("header")}} nimmt `1fr` (ein Viertel) und der {{htmlelement("main")}} nimmt `3fr` (drei Viertel) ein.

{{EmbedLiveSample('grid-placement_0', '100%', "230") }}

Lassen Sie uns alle Elemente unserer Website durch die Verwendung der Grid-Linien anordnen. Fügen Sie die folgenden Regeln am Ende Ihres CSS hinzu:

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

Jetzt sind der {{htmlelement("header")}} und der {{htmlelement("footer")}} auf `1 / 3` gesetzt, was bedeutet, dass sie auf Linie `1` beginnen und bei Linie `3` enden.

{{EmbedLiveSample('grid-placement_1', '100%', "230") }}

> [!NOTE]
> Sie können auch den Wert `-1` verwenden, um die Endspalte oder Zeilenlinie anzusprechen und dann mit negativen Werten von innen nach außen zu zählen. Beachten Sie auch, dass Linien immer von den Rändern des expliziten Grids zählen, nicht von dem {{Glossary("Grid", "impliziten Grid")}}.

## Positionierung mit grid-template-areas

Eine alternative Möglichkeit, Elemente in Ihrem Grid anzuordnen, ist die Verwendung der {{cssxref("grid-template-areas")}}-Eigenschaft und den verschiedenen Elementen Ihres Designs einen Namen zu geben.

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

Hier verwenden wir die {{CSSXRef("grid-template-areas")}}-Eigenschaft, um zu definieren, wie die 3 Zeilen gestaltet sind. Die erste Zeile hat einen Wert von `header header`, die zweite `sidebar content` und die dritte `footer footer`. Wir verwenden dann die {{CSSXRef("grid-area")}}-Eigenschaft, um zu definieren, wo Elemente in den `grid-template-areas` platziert werden.

{{EmbedLiveSample('grid-placement_2', '100%', "230") }}

Die Regeln für `grid-template-areas` sind wie folgt:

- Sie müssen jede Zelle des Grids ausfüllen.
- Um über zwei Zellen zu erstrecken, wiederholen Sie den Namen.
- Um eine Zelle leer zu lassen, verwenden Sie einen `.` (Punkt).
- Bereiche müssen rechteckig sein — zum Beispiel können Sie keinen L-förmigen Bereich haben.
- Bereiche können nicht an verschiedenen Orten wiederholt werden.

Sie können mit unserem Layout herumspielen und das Footer nur unterhalb des Artikels platzieren und die Sidebar die ganze Seite nach unten erstrecken lassen. Dies ist eine sehr angenehme Art, ein Layout zu beschreiben, denn es ist allein durch das Betrachten des CSS klar, was genau passiert.

## Verschachtelte Grids und Subgrid

Es ist möglich, ein Grid innerhalb eines anderen Grids zu verschachteln und ein ["Subgrid"](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid) zu erstellen. Sie können dies tun, indem Sie die Eigenschaft `display: grid` auf einem Element im übergeordneten Grid setzen.

Erweitern wir das vorherige Beispiel, indem wir einen Container für Artikel hinzufügen und ein verschachteltes Grid zur Steuerung des Layouts mehrerer Artikel verwenden. Während wir im verschachtelten Grid nur eine Spalte verwenden, können wir die Zeilen so definieren, dass sie im Verhältnis 4:3:3 aufgeteilt werden, indem wir die Eigenschaft `grid-template-rows` verwenden. Dieser Ansatz ermöglicht es uns, ein Layout zu erstellen, bei dem ein Artikel oben auf der Seite eine große Darstellung hat, während die anderen eine kleinere, vorschauähnliche Darstellung haben.

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

Um es einfacher zu machen, mit Layouts in verschachtelten Grids zu arbeiten, können Sie `subgrid` auf den Eigenschaften `grid-template-rows` und `grid-template-columns` verwenden. Dies ermöglicht es Ihnen, die im übergeordneten Grid definierten Strecken zu nutzen.

Im folgenden Beispiel verwenden wir die [linienbasierte Platzierung](#linienbasierte_platzierung), die es dem verschachtelten Grid ermöglicht, mehrere Spalten und Zeilen des übergeordneten Grids zu überspannen. Wir haben `subgrid` hinzugefügt, um die Spaltenstrecken des übergeordneten Grids zu erben, während wir ein anderes Layout für die Zeilen innerhalb des verschachtelten Grids hinzufügen.

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

Es gibt zahlreiche Grid-Frameworks, die ein 12- oder 16-Spalten-Grid bieten, um Ihnen bei der Gestaltung Ihrer Inhalte zu helfen. Die gute Nachricht ist, dass Sie wahrscheinlich keine Drittanbieter-Frameworks benötigen, um gridbasierte Layouts zu erstellen — die Grid-Funktionalität ist bereits in der Spezifikation enthalten und wird von den meisten modernen Browsern unterstützt.

Dies hat einen Container mit einem definierten 12-Spalten-Grid, unter Verwendung von `grid-template-columns: repeat(12, 1fr);`, und das gleiche Markup, das wir in den vorherigen beiden Beispielen verwendet haben. Wir können jetzt die linienbasierte Platzierung verwenden, um unseren Inhalt auf dem 12-Spalten-Grid zu platzieren.

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

## Zusammenfassung

In dieser Übersicht haben wir die wichtigsten Funktionen von CSS-Grid-Layout vorgestellt. Sie sollten in der Lage sein, es in Ihren Designs zu verwenden.

Im nächsten Artikel geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie all diese Informationen verstanden und behalten haben.

## Siehe auch

- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout)
  - : Die Hauptseite des CSS-Grid-Layout-Moduls, die viele weitere Ressourcen enthält.
- [Ein vollständiger Leitfaden zu CSS-Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
  - : Ein visueller Leitfaden auf CSS-Tricks (2023).
- [Grid Garden](https://cssgridgarden.com/)
  - : Ein Lernspiel, um die Grundlagen von Grid auf cssgridgarden.com zu lernen und besser zu verstehen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout")}}
