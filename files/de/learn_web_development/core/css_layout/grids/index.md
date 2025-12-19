---
title: CSS-Grid-Layout
slug: Learn_web_development/Core/CSS_layout/Grids
l10n:
  sourceCommit: f343e7e4a82a4be0378377e3d2a6b0fa48273312
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout")}}

Das CSS-Grid-Layout ist ein zweidimensionales Layoutsystem für das Web. Es ermöglicht Ihnen, Inhalte in Zeilen und Spalten zu organisieren und bietet zahlreiche Funktionen, um die Erstellung komplexer Layouts zu vereinfachen. Dieser Artikel erklärt alles, was Sie wissen müssen, um mit Grid-Layout zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftstyling</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verständnis des Zwecks von CSS Grid — flexibles Layouten eines Satzes von Block- oder Inline-Elementen in zwei Dimensionen.</li>
          <li>Verständnis der Grid-Terminologie — Zeilen, Spalten, Lücken und Abstände.</li>
          <li>Verständnis, welche Standardeinstellungen <code>display: grid</code> bereitstellt.</li>
          <li>Definieren von Grid-Zeilen, -Spalten und -Abständen.</li>
          <li>Positionierung von Elementen im Grid.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Grid-Layout?

Ein Grid ist eine Sammlung von horizontalen und vertikalen Linien, die ein Muster bilden, an dem wir unsere Designelemente ausrichten können. Sie helfen uns dabei, Layouts zu erstellen, in denen sich unsere Elemente nicht verschieben oder in der Breite ändern, wenn wir von einer Seite zur anderen wechseln, und bieten eine größere Konsistenz auf unseren Websites.

Ein Grid besteht typischerweise aus **Spalten**, **Zeilen** und dann aus Lücken zwischen jeder Zeile und Spalte. Die Lücken werden häufig als **Abstände** bezeichnet.

![Ein CSS-Grid mit als Zeilen, Spalten und Abstände bezeichneten Teilen. Zeilen sind die horizontalen Segmente des Grids, und Spalten sind die vertikalen Segmente des Grids. Der Abstand zwischen zwei Zeilen wird als 'Zeilenabstand' und der Abstand zwischen zwei Spalten als 'Spaltenabstand' bezeichnet.](grid.png)

## Erstellen Ihres Grids in CSS

Nachdem Sie sich für das Grid entschieden haben, das Ihr Design benötigt, können Sie mithilfe von CSS Grid-Layout es erstellen. Wir werden zuerst die grundlegenden Funktionen des Grid-Layouts untersuchen und dann darauf eingehen, wie Sie ein einfaches Grid-System für Ihr Projekt erstellen können.
Das folgende Video bietet eine gute visuelle Erklärung zur Verwendung von CSS Grid:

{{EmbedYouTube("KOvGeFUHAC0")}}

### Ein Grid definieren

Lassen Sie uns Grid-Layouts ausprobieren. Hier ist ein Beispiel mit einem Container, das einige untergeordnete Elemente enthält. Standardmäßig werden diese Elemente in einem normalen Fluss angezeigt und erscheinen daher untereinander.

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

Ähnlich wie bei der Definition von Flexbox definieren Sie ein Grid-Layout, indem Sie den Wert der {{cssxref("display")}}-Eigenschaft auf `grid` setzen. Wie bei Flexbox verwandelt die `display: grid`-Eigenschaft alle direkten Kinder des Containers in Grid-Elemente. Wir haben dem Dokument die folgende CSS hinzugefügt:

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

Um etwas zu sehen, das eher wie ein Grid aussieht, müssen wir dem Grid einige Spalten hinzufügen. Lassen Sie uns drei 200-Pixel-Spalten hinzufügen. Sie können jede Längeneinheit oder Prozentangaben verwenden, um diese Spaltentracks zu erstellen.

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

Sie sollten sehen, dass sich die Elemente so neu angeordnet haben, dass eins in jeder Zelle des Grids ist.

{{EmbedLiveSample('simple-grid_2', '100%', "130") }}

## Interaktive Wiederholung der Grid-Konzepte

Der folgende eingebettete Inhalt von Scrimba<sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine interaktive Lektion zu den Grundlagen von CSS Grid. Es enthält auch ein Live-Grid-Beispiel, das Sie ausprobieren können, um zu sehen, wie der Code funktioniert.

<mdn-scrim-inline url="https://scrimba.com/learn-css-grid-c02k/~01" scrimtitle="Ihr erstes Grid"></mdn-scrim-inline>

### Flexible Grids mit der fr-Einheit

Zusätzlich zur Erstellung von Grids mit Längen und Prozentangaben können wir [`fr`](/de/docs/Web/CSS/Reference/Values/flex_value) verwenden. Die `fr`-Einheit repräsentiert einen Bruchteil des verfügbaren Raums im Grid-Container, um Grid-Zeilen und -Spalten flexibel zu dimensionieren.

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

Hier ändern wir das Tracklisting zur folgenden Definition und erstellen drei `1fr`-Tracks:

```css live-sample___grid-fr-unit_0
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

{{EmbedLiveSample('grid-fr-unit_0', '100%', "130") }}

Sie haben jetzt flexible Tracks.
Die `fr`-Einheit verteilt den Raum proportional, sodass Sie unterschiedliche positive Werte für Ihre Tracks angeben können.
Ändern Sie Ihr Tracklisting zur folgenden Definition, um einen `2fr`-Track und zwei `1fr`-Tracks zu erstellen:

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

Der erste Track erhält `2fr` des verfügbaren Raums und die anderen beiden Tracks erhalten `1fr`, wodurch der erste Track größer wird. Sie können `fr`-Einheiten mit festgelegten Längeneinheiten mischen. In diesem Fall wird der für die festen Tracks benötigte Raum zuerst verbraucht, bevor der verbleibende Raum auf die anderen Tracks verteilt wird.

> [!NOTE]
> Die `fr`-Einheit verteilt _verfügbaren_ Raum, nicht _allen_ Raum. Daher wird, wenn einer Ihrer Tracks etwas Großes darin hat, weniger freier Raum zum Teilen vorhanden sein.

### Abstände zwischen Tracks

Um Abstände zwischen Tracks zu erstellen, verwenden wir die Eigenschaften:

- {{cssxref("column-gap")}} für Abstände zwischen Spalten
- {{cssxref("row-gap")}} für Abstände zwischen Zeilen
- {{cssxref("gap")}} als eine Kurzform für beides

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

Diese Abstände können jede Längeneinheit oder Prozentangabe sein, aber keine `fr`-Einheit.

### Wiederkehrende Tracklistings

Sie können Ihr gesamtes Tracklisting oder nur einen Abschnitt davon mithilfe der CSS-`repeat()`-Funktion wiederholen.
Hier ändern wir das Tracklisting zur folgenden Definition:

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

Sie erhalten jetzt drei `1fr`-Tracks wie zuvor. Der erste Wert, den Sie der `repeat()`-Funktion übergeben, gibt die Anzahl der Wiederholungen des Listings an, während der zweite Wert ein Tracklisting ist, das aus einem oder mehreren Tracks bestehen kann, die Sie wiederholen möchten.

### Implizite und explizite Grids

Bis zu diesem Punkt haben wir nur Spaltentracks spezifiziert, aber Zeilen werden automatisch erstellt, um den Inhalt aufzunehmen. Dieses Konzept hebt den Unterschied zwischen expliziten und impliziten Grids hervor.
Hier ist ein bisschen mehr über den Unterschied zwischen den beiden Arten von Grids:

- **Explizites Grid** wird mithilfe von `grid-template-columns` oder `grid-template-rows` erstellt.
- **Implizites Grid** erweitert das definierte explizite Grid, wenn Inhalte außerhalb dieses Grids platziert werden, z. B. in die Zeilen durch das Zeichnen zusätzlicher Grid-Linien.

Standardmäßig sind Tracks, die im impliziten Grid erstellt werden, `auto`-dimensioniert, was im Allgemeinen bedeutet, dass sie groß genug sind, um ihren Inhalt zu enthalten. Wenn Sie den impliziten Grid-Tracks eine Größe geben möchten, können Sie die Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} verwenden. Wenn Sie `grid-auto-rows` mit einem Wert von `100px` zu Ihrem CSS hinzufügen, werden Sie sehen, dass diese erstellten Zeilen jetzt 100 Pixel hoch sind.

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

Unsere 100-Pixel hohen Tracks werden nicht sehr nützlich sein, wenn wir Inhalte in diese Tracks einfügen, die höher als 100 Pixel sind, da dies einen Überlauf verursachen würde. Es könnte besser sein, Tracks zu haben, die _mindestens_ 100 Pixel hoch sind und sich dennoch erweitern können, wenn weiterer Inhalt hinzugefügt wird. Eine grundlegende Tatsache über das Web ist, dass Sie nie wirklich wissen, wie hoch etwas sein wird — zusätzlicher Inhalt oder größere Schriftgrößen können Probleme bei Designs verursachen, die versuchen, in jeder Dimension pixelperfekt zu sein.

Die {{cssxref("minmax", "minmax()")}}-Funktion ermöglicht es uns, eine Mindest- und Höchstgröße für einen Track festzulegen, z. B. `minmax(100px, auto)`. Die Mindestgröße beträgt 100 Pixel, aber die Höchstgröße ist `auto`, die sich anpasst, um mehr Inhalt aufzunehmen. Hier ändern wir die `grid-auto-rows`, um einen `minmax()`-Wert zu verwenden:

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

Wenn Sie zusätzlichen Inhalt hinzufügen, werden Sie sehen, dass sich der Track erweitert, um ihn unterzubringen. Beachten Sie, dass die Erweiterung entlang der Zeile stattfindet.

### So viele Spalten wie passen

Wir können einige der Lektionen, die wir über Tracklisten, Wiederholungsnotation und {{cssxref("minmax", "minmax()")}} gelernt haben, kombinieren, um ein nützliches Muster zu erstellen. Manchmal ist es hilfreich, der CSS-Grid-Funktion zu sagen, dass sie so viele Spalten erstellen soll, wie in den Container passen. Wir tun dies, indem wir den Wert von `grid-template-columns` mit der {{cssxref("repeat", "repeat()")}}-Funktion setzen, aber anstatt eine Zahl zu übergeben, geben wir das Schlüsselwort [`auto-fit`](/de/docs/Web/CSS/Reference/Values/repeat#auto-fit) ein. Für den zweiten Parameter der Funktion verwenden wir `minmax()` mit einem Mindestwert, der der Mindest-Trackgröße entspricht, den wir haben möchten, und einem Maximum von `1fr`.

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

Dies funktioniert, weil das Grid so viele 230-Pixel-Spalten erstellt, wie in den Container passen, und dann den verbleibenden Raum gleichmäßig auf alle Spalten verteilt. Das Maximum ist `1fr`, das, wie wir bereits wissen, den Raum gleichmäßig zwischen den Tracks verteilt.

## Linienbasierte Platzierung

Wir gehen nun von der Erstellung eines Grids zur Platzierung von Elementen im Grid über. Unser Grid hat immer Linien – diese sind nummeriert, beginnend mit 1 und beziehen sich auf den [Schreibmodus](/de/docs/Web/CSS/Guides/Writing_modes) des Dokuments. Beispielsweise wäre die Spaltenlinie 1 im Englischen (von links nach rechts geschrieben) auf der linken Seite des Grids und die Zeilenlinie 1 oben, während im Arabischen (von rechts nach links geschrieben), die Spaltenlinie 1 auf der rechten Seite sein würde.

Um Elemente an diesen Linien zu positionieren, können wir die Start- und Endlinien des Grid-Bereichs spezifizieren, in dem ein Element platziert werden soll. Es gibt vier Eigenschaften, die wir verwenden können, um dies zu tun:

- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}

Diese Eigenschaften akzeptieren Liniennummern als ihre Werte, sodass wir beispielsweise spezifizieren können, dass ein Element auf Linie 1 beginnen und auf Linie 3 enden soll. Alternativ können Sie auch Kurzformeigenschaften verwenden, die es Ihnen erlauben, die Start- und Endlinien gleichzeitig anzugeben, getrennt durch einen Schrägstrich `/`:

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

Ohne die definierte Platzierung können Sie sehen, dass die _automatische Platzierung_ jedes Element in seine eigene Zelle im Grid platziert. Der {{htmlelement("header")}} nimmt `1fr` (ein Viertel) ein und der {{htmlelement("main")}} nimmt `3fr` (drei Viertel) ein.

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

Nun sind der {{htmlelement("header")}} und der {{htmlelement("footer")}} auf `1 / 3` gesetzt, was bedeutet, dass sie auf Linie `1` beginnen und auf Linie `3` enden.

{{EmbedLiveSample('grid-placement_1', '100%', "230") }}

> [!NOTE]
> Sie können auch den Wert `-1` verwenden, um die Endspalte oder Endzeilenlinie anzusprechen, und dann von dort aus mit negativen Werten nach innen zählen. Beachten Sie auch, dass Linien immer von den Rändern des expliziten Grids gezählt werden, nicht vom {{Glossary("Grid", "impliziten Grid")}}.

## Positionierung mit grid-template-areas

Eine alternative Möglichkeit, Elemente in Ihrem Grid anzuordnen, ist die Verwendung der {{cssxref("grid-template-areas")}}-Eigenschaft und der Vergabe von Namen für die verschiedenen Elemente Ihres Designs.

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
- Um über zwei Zellen zu spannen, wiederholen Sie den Namen.
- Um eine Zelle leer zu lassen, verwenden Sie ein `.` (Punkt).
- Bereiche müssen rechteckig sein – beispielsweise kann es keine L-förmigen Bereiche geben.
- Bereiche können nicht an unterschiedlichen Stellen wiederholt werden.

Sie können mit unserem Layout experimentieren und ändern, dass der Footer nur unter dem Artikel sitzt und die Sidebar sich ganz erstreckt. Dies ist eine sehr angenehme Art, ein Layout zu beschreiben, da es schon beim Ansehen des CSS klar ist, was geschieht.

## Verschachtelte Grids und Subgrid

Es ist möglich, ein Grid in ein anderes zu verschachteln und dabei ein ["Subgrid"](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid) zu erstellen. Sie können dies tun, indem Sie die `display: grid`-Eigenschaft auf ein Element im übergeordneten Grid anwenden.

Erweitern wir das vorherige Beispiel, indem wir einen Container für Artikel hinzufügen und ein verschachteltes Grid verwenden, um das Layout mehrerer Artikel zu steuern. Während wir im verschachtelten Grid nur eine Spalte verwenden, können wir die Zeilen definieren, um in einem Verhältnis von 4:3:3 durch die Verwendung der `grid-template-rows`-Eigenschaft zu teilen. Dieser Ansatz ermöglicht es uns, ein Layout zu erstellen, bei dem ein Artikel oben auf der Seite eine große Darstellung hat, während die anderen eine kleinere, vorschauartige Darstellung aufweisen.

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

Um die Arbeit mit Layouts in verschachtelten Grids zu erleichtern, können Sie `subgrid` auf die `grid-template-rows`- und `grid-template-columns`-Eigenschaften anwenden. Dies ermöglicht es Ihnen, die im übergeordneten Grid definierten Tracks zu nutzen.

Im folgenden Beispiel verwenden wir [linienbasierte Platzierung](#linie-basierte_platzierung), die es dem verschachtelten Grid ermöglicht, über mehrere Spalten und Zeilen des übergeordneten Grids zu spannen. Wir haben `subgrid` hinzugefügt, um die Spaltentracks des übergeordneten Grids zu übernehmen, während ein anderes Layout für die Zeilen im verschachtelten Grid hinzugefügt wird.

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

Es gibt zahlreiche Grid-Frameworks, die erhältlich sind – dies sind vorgefertigte CSS-Systeme, die Funktionen wie 12- oder 16-Spalten-Grids, Utility-Klassen für Abstände und Ausrichtung sowie responsive Design über Breakpoints bieten.

Das Gute daran ist, dass Sie wahrscheinlich keine proprietären Workarounds benötigen, um Grid-basierte Layouts zu erstellen – alle modernen Browser unterstützen den CSS-Grid-Standard.

Das folgende Beispiel zeigt eine vereinfachte Version davon, wie solch ein Code aussehen könnte. Es besitzt einen Container mit einem definierten 12-Spalten-Grid, das `grid-template-columns: repeat(12, 1fr);` verwendet, und das gleiche Markup, das wir in den letzten beiden Beispielen verwendet haben. Wir können nun linienbasierte Platzierung verwenden, um unseren Inhalt auf dem 12-Spalten-Grid zu platzieren.

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

Wenn Sie den [Firefox-Grid-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) verwenden, um die Grid-Linien in Ihrem Design zu überlagern, können Sie sehen, wie unser 12-Spalten-Grid funktioniert.

![Ein 12-Spalten-Grid, das auf unserem Design überlagert ist.](learn-grids-inspector.png)

## Zusammenfassung

In diesem Überblick haben wir die Hauptfunktionen des CSS-Grid-Layouts durchlaufen. Sie sollten in der Lage sein, es in Ihren Designs zu verwenden.

Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie alle diese Informationen verstanden und behalten haben.

## Siehe auch

- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout)
  - : Die Hauptseite des CSS-Grid-Layout-Moduls, die viele weitere Ressourcen enthält.
- [Ein vollständiger Leitfaden zu CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
  - : Ein visueller Leitfaden auf CSS-Tricks (2023).
- [Grid Garden](https://cssgridgarden.com/)
  - : Ein Bildungs-Spiel, um die Grundlagen von Grid auf cssgridgarden.com besser zu verstehen und zu erlernen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout")}}
