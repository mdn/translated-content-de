---
title: CSS-Grid-Layout
slug: Learn_web_development/Core/CSS_layout/Grids
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout")}}

Das CSS-Grid-Layout ist ein zweidimensionales Layoutsystem für das Web. Es lässt Sie Inhalte in Zeilen und Spalten organisieren und bietet viele Funktionen, um die Erstellung komplexer Layouts zu vereinfachen. In diesem Artikel erklären wir Ihnen alles, was Sie wissen müssen, um mit dem Grid-Layout zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturieren von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen des CSS-Stylings</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegendes Text- und Schriftstyling</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen Sie den Zweck von CSS Grid — ein flexibles Layout von Block- oder Inline-Elementen in zwei Dimensionen.</li>
          <li>Verstehen Sie die Grid-Terminologie — Zeilen, Spalten, Abstände und Rinnen.</li>
          <li>Verstehen Sie, was `display: grid` Ihnen standardmäßig bietet.</li>
          <li>Definieren von Grid-Zeilen, -Spalten und -Abständen.</li>
          <li>Positionieren von Elementen im Grid.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist das Grid-Layout?

Ein Grid ist eine Sammlung von horizontalen und vertikalen Linien, die ein Muster erzeugen, an dem wir unsere Designelemente ausrichten können. Sie helfen uns, Layouts zu erstellen, bei denen unsere Elemente nicht springen oder die Breite ändern, wenn wir von Seite zu Seite wechseln, was für eine größere Konsistenz auf unseren Websites sorgt.

Ein Grid hat typischerweise **Spalten**, **Zeilen** und dann Abstände zwischen jeder Zeile und Spalte. Diese Abstände werden üblicherweise als **Rinnen** bezeichnet.

![CSS-Grid mit als Zeilen, Spalten und Rinnen beschrifteten Teilen. Zeilen sind die horizontalen Segmente des Grids, und Spalten sind die vertikalen Segmente des Grids. Der Abstand zwischen zwei Zeilen wird als 'Zeilenrinnen' und der Abstand zwischen zwei Spalten als 'Spaltenrinnen' bezeichnet.](grid.png)

## Ihr Grid in CSS erstellen

Nachdem Sie das Grid entschieden haben, das Ihr Design benötigt, können Sie das CSS-Grid-Layout verwenden, um es zu erstellen. Wir werden zunächst die grundlegenden Funktionen des Grid-Layouts prüfen und dann erkunden, wie man ein einfaches Grid-System für Ihr Projekt erstellt.
Das folgende Video bietet eine schöne visuelle Erklärung zur Verwendung von CSS-Grid:

{{EmbedYouTube("KOvGeFUHAC0")}}

### Ein Grid definieren

Probieren wir Grid-Layouts aus. Hier ist ein Beispiel mit einem Container, der einige Kind-Elemente enthält. Standardmäßig werden diese Elemente im normalen Fluss angezeigt, was dazu führt, dass sie untereinander erscheinen.

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

Ähnlich wie Sie Flexbox definieren, definieren Sie ein Grid-Layout, indem Sie den Wert der {{cssxref("display")}}-Eigenschaft auf `grid` setzen. Wie im Fall von Flexbox, transformiert die `display: grid`-Eigenschaft alle direkten Kinder des Containers in Grid-Items. Wir haben die folgende CSS zum Dokument hinzugefügt:

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

Im Gegensatz zu Flexbox sehen die Elemente nicht sofort anders aus. Die Deklaration von `display: grid` ergibt ein einspaltiges Grid, sodass Ihre Elemente weiterhin untereinander wie im normalen Fluss angezeigt werden.

Um etwas Grid-Ähnliches zu sehen, müssen wir dem Grid einige Spalten hinzufügen. Lassen Sie uns drei 200-Pixel-Spalten hinzufügen. Sie können jede Längeneinheit oder Prozentzahl verwenden, um diese Spaltenspuren zu erstellen.

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

Sie sollten sehen, dass sich die Elemente so neu angeordnet haben, dass sich eines in jeder Zelle des Grids befindet.

{{EmbedLiveSample('simple-grid_2', '100%', "130") }}

## Interaktive Wiederholung der Grid-Konzepte

Die folgende eingebettete Inhalte von Scrimba<sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bieten eine interaktive Lektion zu den Grundlagen von CSS Grid. Es enthält ein Live-Grid-Beispiel, mit dem Sie herumspielen können, um zu sehen, wie der Code funktioniert.

<mdn-scrim-inline url="https://scrimba.com/learn-css-grid-c02k/~01" scrimtitle="Ihr erstes Grid"></mdn-scrim-inline>

### Flexible Grids mit der `fr`-Einheit

Zusätzlich zur Erstellung von Grids mithilfe von Längen und Prozentwerten können wir [`fr`] (/de/docs/Web/CSS/Reference/Values/flex_value) verwenden. Die `fr`-Einheit repräsentiert ein Bruchteil des verfügbaren Platzes im Grid-Container, um damit flexibel Grid-Zeilen und -Spalten zu dimensionieren.

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

Hier ändern wir die Spur-Auflistung in die folgende Definition, die drei `1fr`-Spuren erstellt:

```css live-sample___grid-fr-unit_0
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

{{EmbedLiveSample('grid-fr-unit_0', '100%', "130") }}

Jetzt haben Sie flexible Spuren. Die `fr`-Einheit verteilt den Raum proportional, sodass Sie verschiedene positive Werte für Ihre Spuren angeben können.
Ändern Sie Ihre Spur-Auflistung in die folgende Definition, die eine `2fr`-Spur und zwei `1fr`-Spuren erstellt:

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

Die erste Spur erhält `2fr` des verfügbaren Platzes, und die anderen zwei Spuren erhalten jeweils `1fr`, wodurch die erste Spur größer wird. Sie können `fr`-Einheiten mit Einheiten fester Länge mischen. In diesem Fall wird der für die festen Spuren benötigte Platz zuerst verwendet, bevor der verbleibende Platz auf die anderen Spuren verteilt wird.

> [!NOTE]
> Die `fr`-Einheit verteilt _verfügbaren_ Platz, nicht _allen_ Platz. Daher wird es, wenn eine Ihrer Spuren etwas Großes enthält, weniger freien Platz zum Verteilen geben.

### Abstände zwischen Spuren

Um Abstände zwischen Spuren zu schaffen, verwenden wir die Eigenschaften:

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

Hier fügen wir die `gap`-Eigenschaft hinzu, um Abstände zwischen den Spuren mit einem Wert von `20px` zu erstellen:

```css live-sample___grid-gap
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
}
```

{{EmbedLiveSample('grid-gap', '100%', "180") }}

Diese Abstände können jede Längeneinheit oder Prozentzahl sein, jedoch keine `fr`-Einheit.

### Wiederholende Spurlisten

Sie können Ihre gesamte Spurliste oder nur einen Abschnitt mithilfe der CSS-Funktion `repeat()` wiederholen.
Hier ändern wir die Spurliste in die folgende:

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

Sie erhalten jetzt drei `1fr`-Spuren wie zuvor. Der erste Wert, der an die `repeat()`-Funktion übergeben wird, gibt die Anzahl der Wiederholungen der Liste an, während der zweite Wert eine Spurliste ist, die aus einem oder mehreren zu wiederholenden Spuren besteht.

### Implizite und explizite Grids

Bis zu diesem Punkt haben wir nur Spaltenspuren angegeben, aber Zeilen werden automatisch erstellt, um den Inhalt zu halten. Dieses Konzept unterstreicht den Unterschied zwischen expliziten und impliziten Grids.
Hier ist ein wenig mehr über den Unterschied zwischen den beiden Arten von Grids:

- **Explizites Grid** wird mithilfe von `grid-template-columns` oder `grid-template-rows` erstellt.
- **Implizites Grid** erweitert das definierte explizite Grid, wenn Inhalte außerhalb dieses Grids platziert werden, z. B. in die Zeilen durch das Zeichnen zusätzlicher Grid-Linien.

Standardmäßig sind Spuren, die im impliziten Grid erstellt werden, `auto`-dimensioniert, was im Allgemeinen bedeutet, dass sie groß genug sind, um ihren Inhalt zu enthalten. Wenn Sie den impliziten Grid-Spuren eine Größe geben möchten, können Sie die Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} verwenden. Wenn Sie `grid-auto-rows` mit einem Wert von `100px` zu Ihrem CSS hinzufügen, werden Sie sehen, dass diese erstellten Zeilen jetzt 100 Pixel hoch sind.

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

### Die `minmax()`-Funktion

Unsere 100 Pixel hohen Spuren werden nicht sehr nützlich sein, wenn wir Inhalte in diese Spuren hinzufügen, die höher als 100 Pixel sind, was einen Überlauf verursachen würde. Es könnte besser sein, Spuren zu haben, die _mindestens_ 100 Pixel hoch sind und sich trotzdem erweitern können, wenn mehr Inhalte hinzugefügt werden. Eine ziemlich grundlegende Tatsache über das Web ist, dass Sie nie wirklich wissen, wie hoch etwas sein wird — zusätzliche Inhalte oder größere Schriftgrößen können bei Designs Probleme verursachen, die versuchen, in jeder Dimension pixelgenau zu sein.

Die {{cssxref("minmax", "minmax()")}}-Funktion lässt uns eine Mindest- und Höchstgröße für eine Spur festlegen, zum Beispiel `minmax(100px, auto)`. Die Mindestgröße beträgt 100 Pixel, aber die Höchstgröße ist `auto`, was sich anpasst, um mehr Inhalt zu fassen. Hier ändern wir die `grid-auto-rows` zur Verwendung eines `minmax()`-Werts:

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

Wenn Sie zusätzliche Inhalte hinzufügen, werden Sie sehen, dass die Spur sich erweitert, um sie aufzunehmen. Beachten Sie, dass die Erweiterung direkt entlang der Zeile erfolgt.

### So viele Spalten wie erforderlich

Wir können einige der Lektionen kombinieren, die wir über Spurlisten, repeat-Notation und {{cssxref("minmax", "minmax()")}} gelernt haben, um ein nützliches Muster zu erstellen. Manchmal ist es hilfreich, CSS Grid bitten zu können, so viele Spalten zu erstellen, wie in den Container passen. Wir tun dies, indem wir den Wert von `grid-template-columns` mit der {{cssxref("repeat", "repeat()")}}-Funktion festlegen, aber anstatt eine Zahl zu übergeben, übergeben wir das Schlüsselwort [`auto-fit`](/de/docs/Web/CSS/Reference/Values/repeat#auto-fit). Für den zweiten Parameter der Funktion verwenden wir `minmax()` mit einem Mindestwert, gleich der minimalen Spurgröße, die wir haben möchten, und einem Maximum von `1fr`.

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

Das funktioniert, weil das Grid so viele 230-Pixel-Spalten erstellt, wie in den Container passen, und dann den verbleibenden Raum gleichmäßig unter allen Spalten aufteilt. Das Maximum ist `1fr`, was, wie wir bereits wissen, den Raum gleichmäßig zwischen den Spuren verteilt.

## Linienbasierte Platzierung

Wir wechseln jetzt vom Erstellen eines Grids zum Platzieren von Dingen im Grid. Unser Grid hat immer Linien - diese werden beginnend mit 1 nummeriert und beziehen sich auf den [Schreibmodus](/de/docs/Web/CSS/Guides/Writing_modes) des Dokuments. Beispielsweise befände sich die Spaltenlinie 1 im Englischen (von links nach rechts geschrieben) auf der linken Seite des Grids und die Zeilenlinie 1 oben, während im Arabischen (von rechts nach links geschrieben) die Spaltenlinie 1 auf der rechten Seite wäre.

Um Elemente entlang dieser Linien zu positionieren, können wir die Start- und Endlinien des Grid-Bereichs angeben, in dem ein Element platziert werden soll. Es gibt vier Eigenschaften, die wir dafür verwenden können:

- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}

Diese Eigenschaften akzeptieren Liniennummern als Werte, sodass wir angeben können, dass ein Element beispielsweise auf Linie 1 beginnen und auf Linie 3 enden soll.
Alternativ können Sie auch Kurzschreibweise-Eigenschaften verwenden, die es Ihnen ermöglichen, die Start- und Endlinien gleichzeitig anzugeben, getrennt durch einen Schrägstrich `/`:

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

Ohne definierte Platzierung sehen Sie, dass die _automatische Platzierung_ jedes Element in seine eigene Zelle im Grid platziert. Der {{htmlelement("header")}} nimmt `1fr` (ein Viertel) ein und der {{htmlelement("main")}} nimmt `3fr` (drei Viertel) ein.

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

Jetzt sind der {{htmlelement("header")}} und {{htmlelement("footer")}} auf `1 / 3` gesetzt, was bedeutet, von Linie `1` bis Linie `3` zu beginnen.

{{EmbedLiveSample('grid-placement_1', '100%', "230") }}

> [!NOTE]
> Sie können auch den Wert `-1` verwenden, um die Endspalte oder -zeile zu erreichen, und dann von innen mit negativen Werten zu zählen. Beachten Sie auch, dass die Linien immer von den Rändern des expliziten Grids zählen, nicht des {{Glossary("Grid", "impliziten Grids")}}.

## Positionierung mit grid-template-areas

Eine alternative Möglichkeit, Elemente auf Ihrem Grid anzuordnen, ist die Verwendung der {{cssxref("grid-template-areas")}}-Eigenschaft und die Benennung der verschiedenen Elemente Ihres Designs.

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

Hier verwenden wir die {{CSSXRef("grid-template-areas")}}-Eigenschaft, um zu definieren, wie die 3 Zeilen angeordnet sind. Die erste Zeile hat den Wert `header header`, die zweite `sidebar content` und die dritte `footer footer`. Wir verwenden dann die {{CSSXRef("grid-area")}}-Eigenschaft, um zu definieren, wo Elemente in den `grid-template-areas` platziert sind.

{{EmbedLiveSample('grid-placement_2', '100%', "230") }}

Die Regeln für `grid-template-areas` sind wie folgt:

- Jede Zelle des Grids muss ausgefüllt sein.
- Um sich über zwei Zellen zu erstrecken, wiederholen Sie den Namen.
- Um eine Zelle leer zu lassen, verwenden Sie einen `.` (Punkt).
- Bereiche müssen rechteckig sein – zum Beispiel kann ein Bereich nicht L-förmig sein.
- Bereiche können nicht an unterschiedlichen Stellen wiederholt werden.

Sie können mit unserem Layout spielen, den Footer so ändern, dass er nur unter dem Artikel steht, und die Sidebar so, dass sie sich über die ganze Länge erstreckt. Dies ist eine sehr schöne Art, ein Layout zu beschreiben, weil aus dem CSS sofort ersichtlich ist, was genau passiert.

## Verschachtelte Grids und Subgrid

Es ist möglich, ein Grid innerhalb eines anderen Grids zu verschachteln, ein sogenanntes ["Subgrid"](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid).
Sie können dies tun, indem Sie die `display: grid`-Eigenschaft für ein Element im übergeordneten Grid setzen.

Lassen Sie uns das vorherige Beispiel erweitern, indem wir einen Container für Artikel hinzufügen und ein verschachteltes Grid verwenden, um das Layout mehrerer Artikel zu steuern.
Während wir nur eine Spalte im verschachtelten Grid verwenden, können wir die Zeilen in einem Verhältnis von 4:3:3 mithilfe der `grid-template-rows`-Eigenschaft aufteilen.
Dieser Ansatz ermöglicht es uns, ein Layout zu erstellen, bei dem ein Artikel oben auf der Seite eine große Anzeige hat, während die anderen eine kleinere, vorschauähnliche Layout haben.

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

Um die Arbeit mit verschachtelten Grids zu erleichtern, können Sie `subgrid` auf den Eigenschaften `grid-template-rows` und `grid-template-columns` verwenden. So können Sie die im übergeordneten Grid definierten Spuren nutzen.

Im folgenden Beispiel verwenden wir [linienbasierte Platzierung](#linienbasierte_platzierung), wodurch das verschachtelte Grid mehrere Spalten und Zeilen des übergeordneten Grids umfassen kann.
Wir haben `subgrid` hinzugefügt, um die Spaltenspuren des übergeordneten Grids zu erben, während ein anderes Layout für die Zeilen im verschachtelten Grid hinzugefügt wird.

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

{{EmbedLiveSample('subgrid', '100%', 200) }}

## Grid-Frameworks

Es gibt zahlreiche Grid-Frameworks — diese sind vorgefertigte CSS-Systeme, die Funktionen wie 12- oder 16-Spalten-Grids, Utility-Klassen für Abstände und Ausrichtung sowie ein responsives Design über Breakpoints bieten.

Die gute Nachricht ist, dass Sie vermutlich keine proprietären Workarounds benötigen, um gridbasierte Layouts zu erstellen — alle modernen Browser unterstützen den CSS-Grid-Standard.

Das folgende Beispiel zeigt eine vereinfachte Version dessen, wie solch ein Code aussehen könnte. Es verfügt über einen Container mit einem 12-Spalten-Grid, das mit `grid-template-columns: repeat(12, 1fr);` definiert ist, und das gleiche Markup wie in den beiden vorherigen Beispielen. Wir können jetzt eine linienbasierte Platzierung verwenden, um unseren Inhalt auf dem 12-Spalten-Grid zu platzieren.

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

Wenn Sie den [Firefox-Grid-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) verwenden, um die Grid-Linien auf Ihrem Design einzublenden, können Sie sehen, wie unser 12-Spalten-Grid funktioniert.

![Ein 12-Spalten-Grid, überlagert auf unser Design.](learn-grids-inspector.png)

## Zusammenfassung

In diesem Überblick haben wir die Hauptmerkmale des CSS-Grid-Layouts erkundet. Sie sollten in der Lage sein, es in Ihren Designs zu verwenden.

Im nächsten Artikel geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie all diese Informationen verstanden und behalten haben.

## Siehe auch

- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout)
  - : Die Hauptseite des CSS-Grid-Layout-Moduls, die viele weitere Ressourcen enthält.
- [Leitfaden für CSS-Grid-Layout](https://css-tricks.com/complete-guide-css-grid-layout/)
  - : Ein visueller Leitfaden bei CSS-Tricks (2021).
- [Grid Garden](https://cssgridgarden.com/)
  - : Ein Lernspiel, um die Grundlagen von Grid bei cssgridgarden.com besser zu verstehen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout")}}
