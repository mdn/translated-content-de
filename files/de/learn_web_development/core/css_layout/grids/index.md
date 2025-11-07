---
title: CSS Grid Layout
slug: Learn_web_development/Core/CSS_layout/Grids
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout")}}

CSS Grid Layout ist ein zweidimensionales Layout-System für das Web. Es ermöglicht Ihnen, Inhalte in Zeilen und Spalten anzuordnen und bietet viele Funktionen, um die Erstellung komplexer Layouts zu vereinfachen. Dieser Artikel erklärt Ihnen alles, was Sie wissen müssen, um mit dem Grid-Layout zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Strukturierung von Inhalten mit HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Stilgestaltung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlagen der Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundlagenkonzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Das Ziel von CSS Grid verstehen — flexibles Layout von Block- oder Inline-Elementen in zwei Dimensionen.</li>
          <li>Grid-Terminologie verstehen — Zeilen, Spalten, Abstände und Rinnen.</li>
          <li>Verstehen, was <code>display: grid</code> standardmäßig bietet.</li>
          <li>Definieren von Grid-Zeilen, -Spalten und -Abständen.</li>
          <li>Positionierung von Elementen im Grid.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist Grid-Layout?

Ein Grid ist eine Anordnung von horizontalen und vertikalen Linien, die ein Muster bilden, an dem wir unsere Designelemente ausrichten können. Sie helfen uns, Layouts zu erstellen, in denen sich unsere Elemente nicht verschieben oder ihre Breite ändern, wenn wir von Seite zu Seite wechseln, und bieten so mehr Konsistenz auf unseren Websites.

Ein Grid hat typischerweise **Spalten**, **Zeilen** und dann Abstände zwischen jeder Zeile und Spalte. Diese Abstände werden häufig als **Rinnen** bezeichnet.

![CSS-Grid mit als Zeilen, Spalten und Rinnen beschrifteten Teilen. Zeilen sind die horizontalen Segmente des Grids und Spalten die vertikalen Segmente des Grids. Der Raum zwischen zwei Zeilen wird als 'Zeilenrinnel' und der Raum zwischen zwei Spalten als 'Spaltenrinnel' bezeichnet.](grid.png)

## Erstellen Ihres Grids in CSS

Nachdem Sie das Design und die Anforderungen Ihres Grids festgelegt haben, können Sie das CSS Grid Layout verwenden, um es zu erstellen. Wir werden uns zunächst die grundlegenden Merkmale des Grid-Layouts ansehen und dann erkunden, wie Sie ein einfaches Rastersystem für Ihr Projekt erstellen können. Das folgende Video bietet eine anschauliche Erklärung zur Verwendung von CSS Grid:

{{EmbedYouTube("KOvGeFUHAC0")}}

### Definieren eines Grids

Probieren wir Grid-Layouts aus, hier ist ein Beispiel mit einem Container, der einige Kindelemente enthält. Standardmäßig werden diese Elemente in einem normalen Fluss angezeigt, wodurch sie untereinander erscheinen.

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

Ähnlich wie bei der Definition von Flexbox definieren Sie ein Grid-Layout, indem Sie den Wert der {{cssxref("display")}}-Eigenschaft auf `grid` setzen. Wie im Fall von Flexbox verwandelt die `display: grid`-Eigenschaft alle direkten Kinder des Containers in Grid-Elemente. Wir haben die folgende CSS zum Daten hinzugefügt:

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

Anders als bei Flexbox werden die Elemente nicht sofort anders aussehen. Das Deklarieren von `display: grid` ergibt ein Ein-Spalten-Grid, sodass Ihre Elemente weiterhin untereinander angezeigt werden, wie sie es im normalen Fluss tun.

Um etwas grid-artigeres zu sehen, müssen wir dem Grid einige Spalten hinzufügen. Fügen wir drei 200-Pixel-Spalten hinzu. Sie können jede Längeneinheit oder Prozentangaben verwenden, um diese Spaltenspuren zu erstellen.

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

Sie sollten sehen, dass sich die Elemente so neu angeordnet haben, dass sich eins in jeder Zelle des Grids befindet.

{{EmbedLiveSample('simple-grid_2', '100%', "130") }}

### Flexible Grids mit der fr-Einheit

Zusätzlich zur Erstellung von Grids mithilfe von Längen und Prozentsätzen können wir [`fr`](/de/docs/Web/CSS/Reference/Values/flex_value) verwenden. Die `fr`-Einheit stellt einen Bruchteil des verfügbaren Raums im Grid-Container zum flexiblen Anpassen von Grid-Zeilen und -Spalten dar.

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

Hier ändern wir die Track-Liste auf die folgende Definition, wodurch drei `1fr`-Tracks entstehen:

```css live-sample___grid-fr-unit_0
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

{{EmbedLiveSample('grid-fr-unit_0', '100%', "130") }}

Sie haben jetzt flexible Tracks. Die `fr`-Einheit verteilt den Raum proportional, sodass Sie für Ihre Tracks unterschiedliche positive Werte angeben können. Ändern Sie Ihre Track-Liste auf die folgende Definition und erstellen Sie einen `2fr`-Track und zwei `1fr`-Tracks:

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

Der erste Track erhält `2fr` des verfügbaren Raums und die anderen beiden Tracks erhalten `1fr`, was den ersten Track größer macht. Sie können `fr`-Einheiten mit festen Längeneinheiten mischen. In diesem Fall wird der erforderliche Raum für die festen Tracks zuerst verbraucht, bevor der verbleibende Raum auf die anderen Tracks verteilt wird.

> [!NOTE]
> Die `fr`-Einheit verteilt _verfügbaren_ Raum und nicht _allen_ Raum. Daher wird es, wenn einer Ihrer Tracks etwas Großes enthält, weniger freien Raum zum Teilen geben.

### Abstände zwischen Tracks

Um Abstände zwischen Tracks zu erstellen, verwenden wir die Eigenschaften:

- {{cssxref("column-gap")}} für Lücken zwischen Spalten
- {{cssxref("row-gap")}} für Lücken zwischen Zeilen
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

### Wiederholung von Track-Listen

Sie können alle oder nur einen Teil Ihrer Track-Liste mithilfe der CSS-Funktion `repeat()` wiederholen. Hier ändern wir die Track-Liste in die folgende:

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

Sie erhalten jetzt drei `1fr`-Tracks wie zuvor. Der erste an die `repeat()`-Funktion übergebene Wert gibt die Anzahl der Wiederholungen an, während der zweite Wert eine Track-Liste ist, die eine oder mehrere wiederholbare Tracks sein kann.

### Implizite und explizite Grids

Bis zu diesem Punkt haben wir nur Spalten-Tracks spezifiziert, aber Zeilen werden automatisch erstellt, um den Inhalt zu halten. Dieses Konzept unterstreicht den Unterschied zwischen expliziten und impliziten Grids. Hier ist ein bisschen mehr über den Unterschied zwischen den beiden Grid-Typen:

- **Explizites Grid** wird mit `grid-template-columns` oder `grid-template-rows` erstellt.
- **Implizites Grid** erweitert das definierte explizite Grid, wenn Inhalt außerhalb dieses Grids platziert wird, etwa indem zusätzliche Gitternetzlinien gezogen werden.

Standardmäßig sind in impliziten Grids erstellte Tracks `auto`-dimensioniert, was im Allgemeinen bedeutet, dass sie groß genug sind, um ihren Inhalt zu enthalten. Wenn Sie impliziten Grid-Tracks eine Größe zuweisen möchten, können Sie die Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} verwenden. Wenn Sie `grid-auto-rows` mit einem Wert von `100px` zu Ihrem CSS hinzufügen, sehen Sie, dass diese erstellten Zeilen jetzt 100 Pixel hoch sind.

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

### Die minmax() Funktion

Unsere 100 Pixel hohen Tracks werden nicht besonders nützlich sein, wenn wir Inhalte in diese Tracks hinzufügen, die höher als 100 Pixel sind, was zu einem Überlauf führen würde. Es könnte besser sein, Tracks zu haben, die _mindestens_ 100 Pixel hoch sind, sich aber dennoch erweitern können, wenn mehr Inhalte hinzugefügt werden. Eine grundlegende Tatsache über das Web ist, dass man nie wirklich weiß, wie hoch etwas sein wird — zusätzliche Inhalte oder größere Schriftgrößen können zu Problemen mit Designs führen, die versuchen, in jeder Dimension pixelgenau zu sein.

Die {{cssxref("minmax", "minmax()")}}-Funktion ermöglicht es uns, eine Mindest- und Höchstgröße für einen Track festzulegen, z. B. `minmax(100px, auto)`. Die Mindestgröße beträgt 100 Pixel, aber die Höchstgröße ist `auto`, was sich zur Aufnahme weiterer Inhalte erweitert. Hier ändern wir `grid-auto-rows`, um einen `minmax()`-Wert zu verwenden:

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

Wenn Sie zusätzliche Inhalte hinzufügen, sehen Sie, dass sich der Track erweitert, um ihn aufzunehmen. Beachten Sie, dass die Erweiterung entlang der gesamten Zeile erfolgt.

### So viele Spalten wie möglich

Wir können einige der Lektionen kombinieren, die wir über Track-Listen, Wiederholungsnotation und {{cssxref("minmax", "minmax()")}} gelernt haben, um ein nützliches Muster zu erstellen. Manchmal ist es hilfreich, dem Grid zu sagen, dass so viele Spalten wie möglich in den Container passen sollen. Dies tun wir, indem wir den Wert von `grid-template-columns` mit der {{cssxref("repeat", "repeat()")}}-Funktion einstellen, aber anstelle einer Zahl das Schlüsselwort [`auto-fit`](/de/docs/Web/CSS/Reference/Values/repeat#auto-fit) übergeben. Für den zweiten Parameter der Funktion verwenden wir `minmax()` mit einem Mindestwert, der gleich der Mindestspurgröße ist, die wir haben möchten, und einem Maximum von `1fr`.

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

Dies funktioniert, weil das Grid so viele 230-Pixel-Spalten erstellt, wie in den Container passen, und dann den restlichen Platz gleichmäßig auf alle Spalten verteilt. Das Maximum ist `1fr`, das, wie wir bereits wissen, den Raum gleichmäßig zwischen den Tracks verteilt.

## Linien-basierte Platzierung

Wir gehen nun vom Erstellen eines Grids zur Platzierung von Elementen im Grid über. Unser Grid hat immer Linien — diese beginnen bei 1 und beziehen sich auf den [Schriftsystem](/de/docs/Web/CSS/CSS_writing_modes) des Dokuments. Beispielsweise wäre die Spaltenlinie 1 im Englischen (von links nach rechts geschrieben) auf der linken Seite des Grids und die Zeilenlinie 1 oben, während sie im Arabischen (von rechts nach links geschrieben) auf der rechten Seite wäre.

Um Elemente entlang dieser Linien zu positionieren, können wir die Start- und Endlinien des Gitterbereichs angeben, in dem ein Element platziert werden soll. Es gibt vier Eigenschaften, die wir dafür verwenden können:

- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}

Diese Eigenschaften akzeptieren Liniennummern als Werte, sodass wir angeben können, dass ein Element beispielsweise bei Linie 1 beginnen und bei Linie 3 enden soll. Alternativ können Sie auch Kurzform-Eigenschaften verwenden, die es Ihnen ermöglichen, die Start- und Endlinien gleichzeitig anzugeben und durch einen Schrägstrich `/` zu trennen:

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

Ohne die definierte Platzierung können Sie sehen, dass die _automatische Platzierung_ jedes Element in seine eigene Zelle im Grid platziert. Der {{htmlelement("header")}} nimmt `1fr` (ein Viertel) ein und der {{htmlelement("main")}} nimmt `3fr` (drei Viertel) ein.

{{EmbedLiveSample('grid-placement_0', '100%', "230") }}

Lassen Sie uns alle Elemente unserer Site mithilfe der Grid-Linien anordnen. Fügen Sie am Ende Ihres CSS die folgenden Regeln hinzu:

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

Jetzt sind der {{htmlelement("header")}} und der {{htmlelement("footer")}} auf `1 / 3` gesetzt, was bedeutet, dass sie bei Linie `1` beginnen und bei Linie `3` enden.

{{EmbedLiveSample('grid-placement_1', '100%', "230") }}

> [!NOTE]
> Sie können auch den Wert `-1` verwenden, um die Endspalte oder Zeilenlinie anzuzielen, und dann von außen nach innen mit negativen Werten zählen. Beachten Sie auch, dass die Linien immer vom Rand des expliziten Grids zählen, nicht vom {{Glossary("Grid", "impliziten Grid")}}.

## Positionieren mit grid-template-areas

Eine alternative Möglichkeit, Elemente im Grid anzuordnen, besteht darin, die Eigenschaft {{cssxref("grid-template-areas")}} zu verwenden und den verschiedenen Elementen Ihres Designs einen Namen zu geben.

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

Hier verwenden wir die Eigenschaft {{CSSXRef("grid-template-areas")}}, um zu definieren, wie die 3 Zeilen angeordnet sind. Die erste Zeile hat den Wert `header header`, die zweite `sidebar content` und die dritte `footer footer`. Wir verwenden dann die Eigenschaft {{CSSXRef("grid-area")}}, um zu definieren, wo Elemente in den `grid-template-areas` platziert werden.

{{EmbedLiveSample('grid-placement_2', '100%', "230") }}

Die Regeln für `grid-template-areas` sind wie folgt:

- Sie müssen jede Zelle des Grids ausfüllen.
- Um sich über zwei Zellen hinweg zu erstrecken, wiederholen Sie den Namen.
- Um eine Zelle leer zu lassen, verwenden Sie ein `.` (Punkt).
- Bereiche müssen rechteckig sein — zum Beispiel kann ein Bereich nicht L-förmig sein.
- Bereiche können nicht an verschiedenen Stellen wiederholt werden.

Sie können mit unserem Layout herumspielen, indem Sie den Footer nur unter den Artikel setzen und die Sidebar über die gesamte Länge spannen lassen. Dies ist eine sehr nette Möglichkeit, ein Layout zu beschreiben, da allein anhand der CSS ersichtlich ist, was genau passiert.

## Verschachteln von Grids und Subgrid

Es ist möglich, ein Grid innerhalb eines anderen Grids zu verschachteln, wobei ein ["Subgrid"](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) erstellt wird. Dies können Sie tun, indem Sie die Eigenschaft `display: grid` auf einen Artikel im übergeordneten Grid anwenden.

Lassen Sie uns das vorherige Beispiel erweitern, indem wir einen Container für Artikel hinzufügen und ein verschachteltes Grid verwenden, um das Layout mehrerer Artikel zu steuern. Während wir im verschachtelten Grid nur eine Spalte verwenden, können wir definieren, dass die Zeilen im Verhältnis 4:3:3 aufgeteilt werden, indem wir die Eigenschaft `grid-template-rows` verwenden. Dieser Ansatz ermöglicht es uns, ein Layout zu erstellen, bei dem ein Artikel oben auf der Seite groß dargestellt wird, während die anderen ein kleineres, vorschauartiges Layout haben.

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

Um es einfacher zu machen, mit Layouts in verschachtelten Grids zu arbeiten, können Sie `subgrid` auf `grid-template-rows` und `grid-template-columns`-Eigenschaften verwenden. Dies ermöglicht es Ihnen, die im Eltern-Grid definierten Tracks zu nutzen.

Im folgenden Beispiel verwenden wir [linienbasierte Platzierung](#linien-basierte_platzierung), wodurch das verschachtelte Grid mehrere Spalten und Zeilen des übergeordneten Grids umfassen kann. Wir haben `subgrid` hinzugefügt, um die Spaltenspuren des übergeordneten Grids zu erben, während wir ein anderes Layout für die Zeilen im verschachtelten Grid hinzufügen.

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

Es gibt zahlreiche Grid-Frameworks, die ein 12- oder 16-Spalten-Grid anbieten, um Ihnen bei der Anordnung Ihrer Inhalte zu helfen. Die gute Nachricht ist, dass Sie wahrscheinlich keine Drittanbieter-Frameworks benötigen, um grid-basierte Layouts zu erstellen — die Grid-Funktionalität ist bereits in der Spezifikation enthalten und wird von den meisten modernen Browsern unterstützt.

Dies hat einen Container mit einem 12-Spalten-Grid definiert, unter Verwendung von `grid-template-columns: repeat(12, 1fr);`, und das gleiche Markup, das wir in den vorherigen beiden Beispielen verwendet haben. Wir können nun mit linienbasierter Platzierung unsere Inhalte im 12-Spalten-Grid platzieren.

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

![Ein 12-Spalten-Grid, das auf unser Design überlagert ist.](learn-grids-inspector.png)

## Zusammenfassung

In dieser Übersicht haben wir die Hauptmerkmale des CSS Grid Layouts kennengelernt. Sie sollten in der Lage sein, es in Ihren Designs zu verwenden.

Im nächsten Artikel geben wir Ihnen einige Tests, die Sie verwenden können, um zu prüfen, wie gut Sie all diese Informationen verstanden und behalten haben.

## Siehe auch

- [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout#guides)
  - : Hauptseite des CSS Grid Layout-Moduls mit vielen weiteren Ressourcen
- [Ein vollständiger Leitfaden zum CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
  - : Ein visueller Leitfaden auf CSS-Tricks (2023).
- [Grid Garden](https://cssgridgarden.com/)
  - : Ein Lernspiel, um die Grundlagen des Grids auf cssgridgarden.com besser zu verstehen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout")}}
