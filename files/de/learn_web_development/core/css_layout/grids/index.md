---
title: CSS-Grid-Layout
slug: Learn_web_development/Core/CSS_layout/Grids
l10n:
  sourceCommit: b5ee197a87ea18acbc4dd9544efa8c0e46253785
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout")}}

CSS-Grid-Layout ist ein zweidimensionales Layoutsystem für das Web. Es ermöglicht Ihnen, Inhalte in Reihen und Spalten zu organisieren und bietet viele Funktionen, um die Erstellung komplexer Layouts zu vereinfachen. Dieser Artikel erklärt alles, was Sie wissen müssen, um mit dem Grid-Layout zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen für das Styling</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden CSS-Layout-Konzepten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen Sie den Zweck von CSS Grid — ein flexibles Layout, um eine Reihe von Block- oder Inline-Elementen in zwei Dimensionen anzuordnen.</li>
          <li>Verständnis der Grid-Terminologie — Reihen, Spalten, Lücken und Rinnen.</li>
          <li>Verstehen, was <code>display: grid</code> Ihnen standardmäßig bietet.</li>
          <li>Definieren von Grid-Reihen, -Spalten und Lücken.</li>
          <li>Positionierung von Elementen im Grid.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Grid-Layout?

Ein Grid ist eine Sammlung von horizontalen und vertikalen Linien, die ein Muster bilden, an dem wir unsere Designelemente ausrichten können. Sie helfen uns, Layouts zu erstellen, in denen sich unsere Elemente nicht verschieben oder Breite ändern, wenn wir von Seite zu Seite wechseln, was zu einer größeren Konsistenz auf unseren Websites führt.

Ein Grid hat typischerweise **Spalten**, **Reihen** und dann Lücken zwischen jeder Reihe und Spalte. Die Lücken werden allgemein als **Rinnen** bezeichnet.

![CSS-Grid mit Teilen, die als Reihen, Spalten und Rinnen bezeichnet sind. Reihen sind die horizontalen Segmente des Grids und Spalten die vertikalen Segmente des Grids. Der Abstand zwischen zwei Reihen wird als 'Reihenrinnen' bezeichnet und der Abstand zwischen 2 Spalten als 'Spaltenrinnen'.](grid.png)

## Erstellen Ihres Grids in CSS

Nachdem Sie sich für das Grid entschieden haben, das Ihr Design benötigt, können Sie mit CSS-Grid-Layout es erstellen. Wir werden zuerst die grundlegenden Funktionen des Grid-Layouts untersuchen und dann erkunden, wie man ein einfaches Grid-System für Ihr Projekt erstellt.
Das folgende Video bietet eine anschauliche Erklärung zur Verwendung von CSS-Grid:

{{EmbedYouTube("KOvGeFUHAC0")}}

### Definieren eines Grids

Probieren wir Grid-Layouts aus. Hier ist ein Beispiel mit einem Container, der einige Kindelemente enthält. Standardmäßig werden diese Elemente in einem normalen Fluss angezeigt, sodass sie untereinander erscheinen.

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

Ähnlich wie Sie Flexbox definieren, definieren Sie ein Grid-Layout, indem Sie den Wert der {{cssxref("display")}}-Eigenschaft auf `grid` setzen. Wie bei der Flexbox verwandelt die Eigenschaft `display: grid` alle direkten Kinder des Containers in Grid-Elemente. Wir haben dem Dokument den folgenden CSS-Code hinzugefügt:

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

Im Gegensatz zur Flexbox sehen die Elemente sofort nicht anders aus. Die Deklaration von `display: grid` gibt Ihnen ein Einspalten-Grid, sodass Ihre Elemente weiterhin untereinander angezeigt werden, wie es im normalen Fluss der Fall ist.

Um etwas zu sehen, das grid-ähnlicher aussieht, müssen wir dem Grid einige Spalten hinzufügen. Lassen Sie uns drei Spalten mit 200 Pixeln hinzufügen. Sie können eine beliebige Längeneinheit oder Prozentsätze verwenden, um diese Spaltentracks zu erstellen.

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

Sie sollten sehen, dass die Elemente so umgestellt wurden, dass sich jedes in einer Zelle des Grids befindet.

{{EmbedLiveSample('simple-grid_2', '100%', "130") }}

## Interaktive Zusammenfassung der Grid-Konzepte

Der folgende eingebettete Inhalt von Scrimba<sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine interaktive Lektion zu den Grundlagen von CSS-Grid. Es beinhaltet auch ein Live-Grid-Beispiel, mit dem Sie spielen können, um zu sehen, wie der Code funktioniert.

<mdn-scrim-inline url="https://scrimba.com/learn-css-grid-c02k/~01" scrimtitle="Ihr erstes Grid"></mdn-scrim-inline>

### Flexible Grids mit der Fr-Einheit

Neben der Erstellung von Grids mit Längen und Prozenten können wir auch [`fr`](/de/docs/Web/CSS/Reference/Values/flex_value) verwenden. Die `fr`-Einheit repräsentiert einen Bruchteil des verfügbaren Raums im Grid-Container, um Grid-Reihen und -Spalten flexibel zu dimensionieren.

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

Sie haben jetzt flexible Tracks. Die `fr`-Einheit verteilt den Platz proportional, sodass Sie verschiedene positive Werte für Ihre Tracks angeben können.
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

Der erste Track erhält `2fr` des verfügbaren Platzes und die anderen beiden Tracks erhalten `1fr`, was den ersten Track größer macht. Sie können `fr`-Einheiten mit festen Längeneinheiten mischen. In diesem Fall wird der für die festen Tracks benötigte Platz zuerst aufgebraucht, bevor der restliche Platz auf die anderen Tracks verteilt wird.

> [!NOTE]
> Die `fr`-Einheit verteilt _verfügbaren_ Platz, nicht _allen_ Platz. Daher wird, wenn einer Ihrer Tracks etwas Großes enthält, weniger freier Platz zum Teilen vorhanden sein.

### Lücken zwischen Tracks

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

Diese Lücken können jede Längeneinheit oder Prozentangabe sein, jedoch nicht eine `fr`-Einheit.

### Wiederholen von Track-Listings

Sie können Ihr gesamtes Track-Listing oder nur einen Abschnitt davon mit der CSS-`repeat()`-Funktion wiederholen.
Hier ändern wir das Track-Listing zur folgenden:

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

Sie erhalten nun wie zuvor drei `1fr`-Tracks. Der erste Wert, der an die `repeat()`-Funktion übergeben wird, gibt die Anzahl der Wiederholungen des Listings an, während der zweite Wert ein Track-Listing ist, das ein oder mehrere Tracks enthält, die Sie wiederholen möchten.

### Implizite und explizite Grids

Bis zu diesem Punkt haben wir nur Spaltentracks spezifiziert, aber Reihen werden automatisch erstellt, um den Inhalt zu halten. Dieses Konzept hebt den Unterschied zwischen expliziten und impliziten Grids hervor.
Hier ist ein bisschen mehr über den Unterschied zwischen den beiden Grid-Typen:

- **Explizites Grid** wird mit `grid-template-columns` oder `grid-template-rows` erstellt.
- **Implizites Grid** erweitert das definierte explizite Grid, wenn Inhalt außerhalb dieses Grids platziert wird, beispielsweise in die Reihen, indem zusätzliche Grid-Linien gezeichnet werden.

Standardmäßig sind die im impliziten Grid erstellten Tracks `auto`-dimensioniert, was im Allgemeinen bedeutet, dass sie groß genug sind, um ihren Inhalt zu enthalten. Wenn Sie den impliziten Grid-Tracks eine Größe geben möchten, können Sie die Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} verwenden. Wenn Sie `grid-auto-rows` mit einem Wert von `100px` zu Ihrem CSS hinzufügen, werden Sie sehen, dass diese erstellten Reihen jetzt 100 Pixel hoch sind.

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

Unsere 100 Pixel hohen Tracks sind nicht sehr nützlich, wenn wir Inhalte in diese Tracks einfügen, die höher als 100 Pixel sind, in diesem Fall würde es zu Überlaufproblemen kommen. Es könnte besser sein, wenn die Tracks _mindestens_ 100 Pixel hoch sind und sich trotzdem erweitern können, wenn mehr Inhalt hinzugefügt wird. Ein ziemlich grundlegender Fakt über das Web ist, dass Sie nie wirklich wissen, wie hoch etwas sein wird — zusätzlicher Inhalt oder größere Schriftgrößen können Probleme bei Designs verursachen, die versuchen, in jeder Dimension pixelgenau zu sein.

Die {{cssxref("minmax", "minmax()")}}-Funktion erlaubt es uns, eine Mindest- und Maximalgröße für einen Track festzulegen, beispielsweise `minmax(100px, auto)`. Die Mindestgröße beträgt 100 Pixel, aber die maximale Größe ist `auto`, was sich ausdehnt, um mehr Inhalt aufzunehmen. Hier ändern wir die `grid-auto-rows`, um einen `minmax()`-Wert zu verwenden:

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

Wenn Sie zusätzlichen Inhalt hinzufügen, werden Sie sehen, dass der Track sich erweitert, um ihn aufzunehmen. Beachten Sie, dass die Erweiterung direkt entlang der Reihe erfolgt.

### So viele Spalten wie möglich

Wir können einige der Lektionen kombinieren, die wir über Track-Listing, Wiederholungsnotation und {{cssxref("minmax", "minmax()")}} gelernt haben, um ein nützliches Muster zu erstellen. Manchmal ist es hilfreich, CSS-Grid bitten zu können, so viele Spalten zu erstellen, wie in den Container passen. Wir tun dies, indem wir den Wert von `grid-template-columns` unter Verwendung der {{cssxref("repeat", "repeat()")}}-Funktion setzen, aber anstatt eine Zahl zu übergeben, übergeben wir das Schlüsselwort [`auto-fit`](/de/docs/Web/CSS/Reference/Values/repeat#auto-fit). Für den zweiten Parameter der Funktion verwenden wir `minmax()` mit einem Mindestwert, der der gewünschten minimalen Trackgröße entspricht, und einem Maximum von `1fr`.

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

Dies funktioniert, weil Grid so viele 230-Pixel-Spalten wie möglich in den Container einfügt und den restlichen Platz gleichmäßig auf alle Spalten verteilt. Das Maximum ist `1fr`, welches, wie wir bereits wissen, den Raum gleichmäßig zwischen den Tracks verteilt.

## Linienstütze Platzierung

Wir gehen nun über das Erstellen eines Grids hinaus zur Platzierung von Dingen im Grid. Unser Grid hat immer Linien — diese sind nummeriert, beginnend bei 1, und beziehen sich auf den [Schreibmodus](/de/docs/Web/CSS/Guides/Writing_modes) des Dokuments. Beispielsweise wäre die Spaltenlinie 1 in Englisch (von links nach rechts geschrieben) auf der linken Seite des Grids und die Zeilenlinie 1 oben, während in Arabisch (von rechts nach links geschrieben), die Spaltenlinie 1 auf der rechten Seite wäre.

Um Elemente entlang dieser Linien zu positionieren, können wir die Start- und Endlinien des Grid-Bereichs angeben, in dem ein Element platziert werden soll. Es gibt vier Eigenschaften, die wir dazu verwenden können:

- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}

Diese Eigenschaften akzeptieren Liniennummern als ihre Werte, sodass wir angeben können, dass ein Element beispielsweise auf Linie 1 beginnen und auf Linie 3 enden soll.
Alternativ können Sie auch Kurzschreibweise-Eigenschaften verwenden, die es Ihnen erlauben, die Start- und Endlinien gleichzeitig anzugeben, getrennt durch einen Schrägstrich `/`:

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

Ohne die definierte Platzierung sehen Sie, dass die _Auto-Platzierung_ jedes Element in seine eigene Zelle im Grid platziert. Der {{htmlelement("header")}} nimmt `1fr` (ein Viertel) ein und der {{htmlelement("main")}} nimmt `3fr` (drei Viertel) ein.

{{EmbedLiveSample('grid-placement_0', '100%', "230") }}

Lassen Sie uns alle Elemente für unsere Seite durch die Verwendung der Grid-Linien anordnen. Fügen Sie die folgenden Regeln am Ende Ihres CSS hinzu:

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

Jetzt sind der {{htmlelement("header")}} und der {{htmlelement("footer")}} auf `1 / 3` gesetzt, was bedeutet, auf Linie `1` zu beginnen und auf Linie `3` zu enden.

{{EmbedLiveSample('grid-placement_1', '100%', "230") }}

> [!NOTE]
> Sie können auch den Wert `-1` verwenden, um die Endspalten- oder Zeilenlinie anzusprechen und dann negative Werte zu verwenden, um von den Enden aus nach innen zu zählen. Beachten Sie auch, dass Linien immer von den Rändern des expliziten Grids zählen, nicht vom {{Glossary("Grid", "impliziten Grid")}}.

## Positionierung mit grid-template-areas

Eine alternative Möglichkeit, Elemente in Ihrem Grid anzuordnen, besteht darin, die Eigenschaft {{cssxref("grid-template-areas")}} zu verwenden und den verschiedenen Elementen Ihres Designs einen Namen zu geben.

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

Hier verwenden wir die Eigenschaft {{CSSXRef("grid-template-areas")}} um festzulegen, wie die 3 Reihen angeordnet sind. Die erste Reihe hat den Wert `header header`, die zweite `sidebar content` und die dritte `footer footer`. Wir verwenden dann die Eigenschaft {{CSSXRef("grid-area")}}, um festzulegen, wo Elemente in den `grid-template-areas` platziert werden.

{{EmbedLiveSample('grid-placement_2', '100%', "230") }}

Die Regeln für `grid-template-areas` sind wie folgt:

- Sie müssen jede Zelle des Grids ausfüllen.
- Um über zwei Zellen zu spannen, wiederholen Sie den Namen.
- Um eine Zelle leer zu lassen, verwenden Sie einen `.` (Punkt).
- Bereiche müssen rechteckig sein — z.B. kann kein L-förmiger Bereich existieren.
- Bereiche können nicht an verschiedenen Orten wiederholt werden.

Sie können mit unserem Layout herumspielen, indem Sie ändern, dass der Footer nur unter dem Artikel sitzt und die Sidebar sich den ganzen Weg nach unten erstreckt. Dies ist eine sehr nette Möglichkeit, ein Layout zu beschreiben, da es allein durch einen Blick auf das CSS klar wird, was passiert.

## Verschachtelte Grids und Subgrid

Es ist möglich, ein Grid innerhalb eines anderen Grids zu verschachteln und ein ["Subgrid"](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid) zu erstellen.
Sie können dies tun, indem Sie die Eigenschaft `display: grid` auf ein Element im übergeordneten Grid setzen.

Lassen Sie uns das vorherige Beispiel erweitern, indem wir einen Container für Artikel hinzufügen und ein verschachteltes Grid verwenden, um das Layout mehrerer Artikel zu steuern.
Während wir nur eine Spalte im verschachtelten Grid verwenden, können wir die Reihen in einem Verhältnis von 4:3:3 mit der Eigenschaft `grid-template-rows` aufteilen.
Dieser Ansatz ermöglicht es uns, ein Layout zu erstellen, in dem ein Artikel oben auf der Seite eine große Anzeige hat, während die anderen ein kleineres, vorschauartiges Layout haben.

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

Um es einfacher zu machen, mit Layouts in verschachtelten Grids zu arbeiten, können Sie `subgrid` auf `grid-template-rows` und `grid-template-columns` Eigenschaften verwenden. Dies ermöglicht es Ihnen, die Tracks des übergeordneten Grids zu nutzen.

Im folgenden Beispiel verwenden wir [Linienstützplatzierung](#linienstütze_platzierung), wodurch das verschachtelte Grid über mehrere Spalten und Reihen des übergeordneten Grids erstreckt wird.
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

Es gibt zahlreiche Grid-Frameworks — das sind vorgefertigte CSS-Systeme, die
Funktionen wie 12- oder 16-Spalten-Grids, Dienstklassen zur Abstands- und Ausrichtungskontrolle und
responsive Designs über Breakpoints bereitstellen.

Die gute Nachricht ist, dass Sie wahrscheinlich keine proprietären Workarounds benötigen, um grid-basierte Layouts zu erstellen — alle modernen Browser unterstützen den CSS-Grid-Standard.

Das folgende Beispiel zeigt eine vereinfachte Version, wie solch ein Code aussehen könnte. Es verfügt über einen Container mit einem 12-Spalten-Grid, das mit `grid-template-columns: repeat(12, 1fr);` definiert ist, und dieselbe Markup, die wir in den vorherigen beiden Beispielen verwendet haben. Jetzt können wir Linienstützplatzierung verwenden, um unseren Inhalt im 12-Spalten-Grid zu platzieren.

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

Wenn Sie den [Firefox Grid-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) verwenden, um die Grid-Linien auf Ihrem Design zu überlagern, können Sie sehen, wie unser 12-Spalten-Grid funktioniert.

![Ein 12-Spalten-Grid überlagert auf unserem Design.](learn-grids-inspector.png)

## Zusammenfassung

In dieser Übersicht haben wir die Hauptfunktionen des CSS-Grid-Layouts durchgegangen. Sie sollten in der Lage sein, es in Ihren Designs zu verwenden.

Im nächsten Artikel geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie all diese Informationen verstanden und behalten haben.

## Siehe auch

- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout)
  - : Die Hauptseite des CSS-Grid-Layout-Moduls mit vielen weiteren Ressourcen.
- [CSS-Grid-Layout-Leitfaden](https://css-tricks.com/complete-guide-css-grid-layout/)
  - : Ein visueller Leitfaden auf CSS-Tricks (2021).
- [Grid Garden](https://cssgridgarden.com/)
  - : Ein Bildungsspiel, um die Grundlagen von Grid auf cssgridgarden.com zu lernen und besser zu verstehen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout")}}
