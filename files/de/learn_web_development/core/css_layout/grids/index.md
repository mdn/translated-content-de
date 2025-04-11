---
title: CSS-Grid-Layout
slug: Learn_web_development/Core/CSS_layout/Grids
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout")}}

Der CSS-Grid-Layout ist ein zweidimensionales Layoutsystem für das Web. Es ermöglicht Ihnen, Inhalte in Reihen und Spalten zu organisieren und bietet viele Features, um die Erstellung komplexer Layouts zu vereinfachen. Dieser Artikel erklärt alles, was Sie wissen müssen, um mit dem Grid-Layout zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen für das Styling</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen Sie den Zweck von CSS Grid — flexibel ein Set von Block- oder Inline-Elementen in zwei Dimensionen anordnen.</li>
          <li>Verstehen Sie die Grid-Terminologie — Reihen, Spalten, Abstände und Rinnen.</li>
          <li>Verstehen Sie, was <code>display: grid</code> Ihnen standardmäßig bietet.</li>
          <li>Definieren von Grid-Reihen, Spalten und Abständen.</li>
          <li>Positionierung von Elementen im Grid.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Grid-Layout?

Ein Grid ist eine Sammlung von horizontalen und vertikalen Linien, die ein Muster erzeugen, an dem wir unsere Designelemente ausrichten können. Sie helfen uns dabei, Layouts zu erstellen, bei denen unsere Elemente nicht herumspringen oder ihre Breite ändern, während wir von Seite zu Seite wechseln, was für größere Konsistenz auf unseren Websites sorgt.

Ein Grid hat typischerweise **Spalten**, **Reihen** und dann Abstände zwischen jeder Reihe und Spalte. Diese Abstände werden allgemein als **Rinnen** bezeichnet.

![CSS-Grid mit als Reihen, Spalten und Rinnen gekennzeichneten Teilen. Reihen sind die horizontalen Segmente des Grids und Spalten sind die vertikalen Segmente des Grids. Der Raum zwischen zwei Reihen wird als 'Reihenrinnen' bezeichnet und der Raum zwischen zwei Spalten als 'Spaltenrinnen'.](grid.png)

## Erstellung Ihres Grids in CSS

Nachdem Sie sich für das Grid entschieden haben, das Ihr Design benötigt, können Sie das CSS-Grid-Layout verwenden, um es zu erstellen. Wir werden zunächst die grundlegenden Funktionen von Grid-Layout betrachten und dann untersuchen, wie Sie ein einfaches Gridsystem für Ihr Projekt erstellen.

Das folgende Video bietet eine schöne visuelle Erklärung zur Verwendung von CSS-Grid:

{{EmbedYouTube("KOvGeFUHAC0")}}

### Definition eines Grids

Lassen Sie uns Grid-Layouts ausprobieren. Hier ist ein Beispiel mit einem Container, der einige Kind-Elemente enthält. Standardmäßig werden diese Elemente im normalen Fluss angezeigt, was dazu führt, dass sie untereinander erscheinen.

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

Ähnlich wie Sie Flexbox definieren, definieren Sie ein Grid-Layout, indem Sie den Wert der {{cssxref("display")}}-Eigenschaft auf `grid` setzen. Wie im Fall von Flexbox transformiert die `display: grid`-Eigenschaft alle direkten Kinder des Containers in Grid-Elemente. Wir haben die folgende CSS zum Dokument hinzugefügt:

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

Im Gegensatz zu Flexbox werden die Elemente nicht sofort anders aussehen. Die Deklarierung von `display: grid` gibt Ihnen ein Ein-Spalten-Grid, sodass Ihre Elemente weiterhin untereinander angezeigt werden, wie sie es im normalen Fluss tun.

Um etwas Grid-Ähnliches zu sehen, müssen wir dem Grid einige Spalten hinzufügen. Lassen Sie uns drei 200-Pixel-Spalten hinzufügen. Sie können jede Längeneinheit oder Prozentzahl verwenden, um diese Spaltenstränge zu erstellen.

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

Sie sollten sehen, dass sich die Elemente so neu arrangiert haben, dass sich jeweils eines in jeder Zelle des Grids befindet.

{{EmbedLiveSample('simple-grid_2', '100%', "130") }}

### Flexible Grids mit der Einheit fr

Zusätzlich zur Erstellung von Grids mit Längen und Prozentsätzen können wir [`fr`](/de/docs/Web/CSS/flex_value) verwenden. Die `fr`-Einheit stellt einen Bruchteil des verfügbaren Raums im Grid-Container dar und dient dazu, Grid-Reihen und -Spalten flexibel zu gestalten.

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

Hier ändern wir die Track-Auflistung zu der folgenden Definition und erstellen drei `1fr`-Tracks:

```css live-sample___grid-fr-unit_0
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

{{EmbedLiveSample('grid-fr-unit_0', '100%', "130") }}

Jetzt haben Sie flexible Tracks. Die `fr`-Einheit verteilt den Raum proportional, sodass Sie unterschiedliche positive Werte für Ihre Tracks angeben können. Ändern Sie Ihre Track-Auflistung zur folgenden Definition, die einen `2fr`-Track und zwei `1fr`-Tracks erstellt:

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

Der erste Track erhält `2fr` des verfügbaren Raums und die anderen zwei Tracks erhalten `1fr`, wodurch der erste Track größer wird. Sie können `fr`-Einheiten mit Einheiten fester Länge mischen. In diesem Fall wird der benötigte Raum für die festen Tracks zuerst verwendet, bevor der verbleibende Raum auf die anderen Tracks verteilt wird.

> [!NOTE]
> Die `fr`-Einheit verteilt _verfügbaren_ Raum, nicht _allen_ Raum. Daher wird, wenn einer Ihrer Tracks etwas Großes enthält, weniger freier Raum zum Teilen vorhanden sein.

### Abstände zwischen Tracks

Um Abstände zwischen Tracks zu erstellen, verwenden wir die Eigenschaften:

- {{cssxref("column-gap")}} für Abstände zwischen Spalten
- {{cssxref("row-gap")}} für Abstände zwischen Reihen
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

Hier fügen wir die `gap`-Eigenschaft hinzu, um Abstände zwischen den Tracks mit einem Wert von `20px` zu erstellen:

```css live-sample___grid-gap
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
}
```

{{EmbedLiveSample('grid-gap', '100%', "180") }}

Diese Abstände können jede Längeneinheit oder Prozentzahl sein, aber nicht eine `fr`-Einheit.

### Wiederholende Track-Auflistungen

Sie können die gesamte oder nur einen Teil Ihrer Track-Auflistung mit der CSS-Funktion `repeat()` wiederholen. Hier ändern wir die Track-Auflistung zu der folgenden:

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

Sie erhalten jetzt drei `1fr`-Tracks wie zuvor. Der erste Wert, der an die `repeat()`-Funktion übergeben wird, gibt an, wie oft Sie die Auflistung wiederholen möchten, während der zweite Wert eine Track-Auflistung ist, die ein oder mehrere Tracks enthalten kann, die Sie wiederholen möchten.

### Implizite und explizite Grids

Bis zu diesem Punkt haben wir nur Spaltenstränge spezifiziert, aber Reihen werden automatisch erstellt, um den Inhalt zu halten. Dieses Konzept hebt den Unterschied zwischen expliziten und impliziten Grids hervor. Hier ist ein bisschen mehr über den Unterschied zwischen den beiden Grid-Typen:

- Ein **explizites Grid** wird mit `grid-template-columns` oder `grid-template-rows` erstellt.
- Ein **implizites Grid** erweitert das definierte explizite Grid, wenn Inhalte außerhalb dieses Grids platziert werden, beispielsweise in den Reihen durch das Zeichnen zusätzlicher Grid-Linien.

Standardmäßig werden in einem impliziten Grid angelegte Stränge automatisch bemessen, was im Allgemeinen bedeutet, dass sie groß genug sind, um ihren Inhalt zu enthalten. Wenn Sie impliziten Grid-Strängen eine Größe zuweisen möchten, können Sie die Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} verwenden. Wenn Sie `grid-auto-rows` mit einem Wert von `100px` zu Ihrer CSS hinzufügen, werden Sie sehen, dass diese erstellen Reihen jetzt 100 Pixel hoch sind.

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

Unsere 100 Pixel hohen Stränge werden nicht sehr nützlich sein, wenn wir Inhalte in diese Stränge einfügen, die höher als 100 Pixel sind, was dann zu einem Überlauf führen würde. Es könnte besser sein, Stränge zu haben, die _mindestens_ 100 Pixel hoch sind, sich aber trotzdem erweitern können, wenn mehr Inhalt hinzugefügt wird. Eine ziemlich grundlegende Tatsache über das Web ist, dass man nie wirklich weiß, wie hoch etwas sein wird — zusätzlicher Inhalt oder größere Schriftgrößen können bei Designs Probleme verursachen, die versuchen, in jeder Dimension pixelgenau zu sein.

Die {{cssxref("minmax", "minmax()")}}-Funktion ermöglicht es uns, eine minimale und maximale Größe für einen Track festzulegen, zum Beispiel `minmax(100px, auto)`. Die Mindestgröße beträgt 100 Pixel, aber das Maximum ist `auto`, was sich erweitern wird, um mehr Inhalt aufzunehmen. Hier ändern wir die `grid-auto-rows`, um einen `minmax()`-Wert zu verwenden:

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

Wenn Sie zusätzlichen Inhalt hinzufügen, werden Sie sehen, dass sich der Track erweitert, um ihn aufzunehmen. Beachten Sie, dass die Erweiterung direkt entlang der Reihe erfolgt.

### So viele Spalten wie passen

Wir können einige der Lektionen, die wir über die Track-Auflistung gelernt haben, die Wiederholungsnotierung und {{cssxref("minmax", "minmax()")}} kombinieren, um ein nützliches Muster zu erstellen. Manchmal ist es hilfreich, in der Lage zu sein, das Grid zu bitten, so viele Spalten zu erstellen, wie in den Container passen. Wir tun dies, indem wir den Wert von `grid-template-columns` mit der {{cssxref("repeat", "repeat()")}}-Funktion festlegen, aber anstatt eine Nummer zu übergeben, übergeben wir das Schlüsselwort [`auto-fit`](/de/docs/Web/CSS/repeat#auto-fit). Für den zweiten Parameter der Funktion verwenden wir `minmax()` mit einem Mindestwert gleich der minimalen Trackgröße, die wir haben möchten, und einem Maximum von `1fr`.

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

Dies funktioniert, weil das Grid so viele 230-Pixel-Spalten erstellt, wie in den Container passen, und dann den verbleibenden Raum auf alle Spalten verteilt. Das Maximum ist `1fr`, das, wie wir bereits wissen, den Raum gleichmäßig zwischen den Tracks verteilt.

## Linienbasierte Platzierung

Jetzt gehen wir vom Erstellen eines Grids zur Platzierung von Dingen im Grid über. Unser Grid hat immer Linien — diese sind nummeriert, beginnend mit 1, und beziehen sich auf den [Schreibrichtung-Modus](/de/docs/Web/CSS/CSS_writing_modes) des Dokuments. Zum Beispiel würde die Spaltenlinie 1 in Englisch (von links nach rechts geschrieben) auf der linken Seite des Grids sein und die Reihenlinie 1 oben, während in Arabisch (von rechts nach links geschrieben), die Spaltenlinie 1 auf der rechten Seite wäre.

Um Elemente entlang dieser Linien zu positionieren, können wir die Start- und Endlinien des Grid-Bereichs, in dem ein Element platziert werden soll, angeben. Es gibt vier Eigenschaften, die wir verwenden können, um dies zu tun:

- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}

Diese Eigenschaften akzeptieren Liniennummern als ihre Werte, sodass wir zum Beispiel angeben können, dass ein Element auf Linie 1 beginnen und auf Linie 3 enden soll. Alternativ können Sie auch Kurzform-Eigenschaften verwenden, die es Ihnen ermöglichen, die Start- und Endlinien gleichzeitig anzugeben, getrennt durch einen Schrägstrich `/`:

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

Ohne die definierte Platzierung können Sie sehen, dass _automatische Platzierung_ jedes Element in seiner eigenen Zelle im Grid platziert. Der {{htmlelement("header")}} nimmt `1fr` (ein Viertel) ein und die {{htmlelement("main")}} nimmt `3fr` (drei Viertel) ein.

{{EmbedLiveSample('grid-placement_0', '100%', "230") }}

Lassen Sie uns alle Elemente unserer Seite mit den Grid-Linien arrangieren. Fügen Sie die folgenden Regeln am Ende Ihrer CSS hinzu:

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

Jetzt sind der {{htmlelement("header")}} und {{htmlelement("footer")}} auf `1 / 3` eingestellt, was bedeutet, dass sie bei Linie `1` beginnen und bei Linie `3` enden.

{{EmbedLiveSample('grid-placement_1', '100%', "230") }}

> [!NOTE]
> Sie können auch den Wert `-1` verwenden, um die Endspalte oder -zeile anzuvisieren, und dann mit negativen Werten von Ende nach Anfang zählen. Beachten Sie auch, dass Linien immer von den Rändern des expliziten Grids zählen, nicht vom {{Glossary("Grid", "impliziten Grid")}}.

## Positionierung mit grid-template-areas

Eine alternative Möglichkeit, Elemente auf Ihrem Grid anzuordnen, besteht darin, die Eigenschaft {{cssxref("grid-template-areas")}} zu verwenden und den verschiedenen Elementen Ihres Designs einen Namen zu geben.

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

Hier verwenden wir die Eigenschaft {{CSSXRef("grid-template-areas")}}, um zu definieren, wie die 3 Reihen layoutiert sind. Die erste Reihe hat einen Wert von `header header`, die zweite `sidebar content` und die dritte `footer footer`. Wir verwenden dann die Eigenschaft {{CSSXRef("grid-area")}}, um zu definieren, wo Elemente in den `grid-template-areas` platziert werden.

{{EmbedLiveSample('grid-placement_2', '100%', "230") }}

Die Regeln für `grid-template-areas` lauten wie folgt:

- Sie müssen jede Zelle des Grids ausfüllen.
- Um sich über zwei Zellen zu erstrecken, wiederholen Sie den Namen.
- Um eine Zelle leer zu lassen, verwenden Sie einen `.` (Punkt).
- Bereiche müssen rechteckig sein — zum Beispiel kann man keinen L-förmigen Bereich haben.
- Bereiche können nicht an verschiedenen Stellen wiederholt werden.

Sie können mit unserem Layout herumspielen, indem Sie den Footer ändern, sodass er nur unter dem Artikel sitzt, und die Sidebar so anpassen, dass sie sich bis ganz nach unten erstreckt. Dies ist eine sehr schöne Möglichkeit, ein Layout zu beschreiben, da es allein durch den Blick auf das CSS klar ist, was genau passiert.

## Verschachteln von Grids und Subgrid

Es ist möglich, ein Grid in ein anderes zu verschachteln und damit ein ["Subgrid"](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) zu erstellen. Sie können dies tun, indem Sie die Eigenschaft `display: grid` auf ein Element im übergeordneten Grid anwenden.

Lassen Sie uns das vorherige Beispiel erweitern, indem wir einen Container für Artikel hinzufügen und ein verschachteltes Grid verwenden, um das Layout mehrerer Artikel zu steuern. Auch wenn wir im verschachtelten Grid nur eine Spalte verwenden, können wir die Reihen mit der Eigenschaft `grid-template-rows` in ein Verhältnis von 4:3:3 teilen. Dieser Ansatz ermöglicht es uns, ein Layout zu erstellen, bei dem ein Artikel oben auf der Seite eine große Darstellung hat, während die anderen kleinere, vorschauähnliche Layouts haben.

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

Um die Arbeit mit Layouts in verschachtelten Grids zu erleichtern, können Sie `subgrid` auf den Eigenschaften `grid-template-rows` und `grid-template-columns` verwenden. Dies ermöglicht es Ihnen, die im übergeordneten Grid definierten Tracks zu nutzen.

Im folgenden Beispiel verwenden wir die [linienbasierte Platzierung](#linienbasierte_platzierung), das es dem verschachtelten Grid ermöglicht, mehrere Spalten und Reihen des übergeordneten Grids zu überspannen. Wir haben `subgrid` hinzugefügt, um die Spaltentracks des übergeordneten Grids zu erben, während wir ein anderes Layout für die Reihen innerhalb des verschachtelten Grids hinzufügen.

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

Zahlreiche Grid-Frameworks sind verfügbar, die ein 12- oder 16-Spalten-Grid bieten, um bei der Layoutgestaltung Ihrer Inhalte zu helfen. Die gute Nachricht ist, dass Sie wahrscheinlich keine Drittanbieter-Frameworks benötigen, um grid-basierte Layouts zu erstellen — die Grid-Funktionalität ist bereits in der Spezifikation enthalten und wird von den meisten modernen Browsern unterstützt.

Dies hat einen Container mit einem 12-Spalten-Grid definiert, unter Verwendung von `grid-template-columns: repeat(12, 1fr);`, und dasselbe Markup, das wir in den vorherigen zwei Beispielen verwendet haben. Jetzt können wir die linienbasierte Platzierung verwenden, um unsere Inhalte im 12-Spalten-Grid zu platzieren.

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

Wenn Sie den [Firefox-Grid-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) verwenden, um die Grid-Linien auf Ihrem Design zu überlagern, können Sie sehen, wie unser 12-Spalten-Grid funktioniert.

![Ein 12-Spalten-Grid überlagert unser Design.](learn-grids-inspector.png)

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen gespeichert haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Können: Grid](/de/docs/Learn_web_development/Core/CSS_layout/Test_your_skills/Grid).

## Zusammenfassung

In dieser Übersicht haben wir die Hauptfunktionen des CSS-Grid-Layouts beleuchtet. Sie sollten in der Lage sein, es in Ihren Designs zu verwenden. Als nächstes werden wir uns mit dem responsiven Design beschäftigen.

## Siehe auch

- [CSS Grid layout](/de/docs/Web/CSS/CSS_grid_layout#guides)
  - : Hauptseite des CSS Grid Layout Moduls mit vielen weiteren Ressourcen
- [A complete guide to CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
  - : Ein visueller Leitfaden auf CSS-Tricks (2023).
- [Grid Garden](https://cssgridgarden.com/)
  - : Ein lehrreiches Spiel, um die Grundlagen von Grid auf cssgridgarden.com zu lernen und besser zu verstehen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout")}}
