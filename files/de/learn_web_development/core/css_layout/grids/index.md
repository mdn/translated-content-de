---
title: CSS-Grid-Layout
slug: Learn_web_development/Core/CSS_layout/Grids
l10n:
  sourceCommit: 4139ce4b1532098a9f604da3e96eaefe7a1cdfd1
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout")}}

Das CSS-Grid-Layout ist ein zweidimensionales Layoutsystem für das Web. Es ermöglicht Ihnen, Inhalte in Reihen und Spalten zu organisieren und bietet viele Funktionen, um die Erstellung komplexer Layouts zu vereinfachen. Dieser Artikel erklärt alles, was Sie wissen müssen, um mit dem Grid-Layout zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Strukturierung von Inhalten mit HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Stilgestaltung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftstilgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten von CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen Sie den Zweck von CSS-Grid — flexibel ein Set von Block- oder Inline-Elementen in zwei Dimensionen layouten.</li>
          <li>Verstehen Sie die Grid-Terminologie — Reihen, Spalten, Lücken und Abstände.</li>
          <li>Verstehen, was <code>display: grid</code> standardmäßig bietet.</li>
          <li>Definition von Grid-Reihen, Spalten und Lücken.</li>
          <li>Positionierung von Elementen im Grid.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist Grid-Layout?

Ein Grid ist eine Sammlung horizontaler und vertikaler Linien, die ein Muster erzeugen, an dem wir unsere Designelemente ausrichten können. Sie helfen uns, Layouts zu erstellen, bei denen unsere Elemente nicht herumspringen oder ihre Breite ändern, wenn wir von Seite zu Seite gehen, was auf unseren Websites für mehr Konsistenz sorgt.

Ein Grid hat typischerweise **Spalten**, **Reihen** und dann Lücken zwischen jeder Reihe und Spalte. Die Lücken werden allgemein als **Rinnen** (gutters) bezeichnet.

![CSS-Grid mit Teilen, die als Reihen, Spalten und Rinnen gekennzeichnet sind. Reihen sind die horizontalen Segmente des Grids und Spalten die vertikalen Segmente. Der Raum zwischen zwei Reihen wird als 'Reihenrinne' und der Raum zwischen zwei Spalten als 'Spaltenrinne' bezeichnet.](grid.png)

## Ihr Grid in CSS erstellen

Nachdem Sie sich für das Grid entschieden haben, das Ihr Design benötigt, können Sie das CSS-Grid-Layout verwenden, um es zu erstellen. Wir werden uns zuerst die grundlegenden Funktionen des Grid-Layouts ansehen und dann erkunden, wie Sie ein einfaches Grid-System für Ihr Projekt erstellen können. Das folgende Video bietet eine anschauliche visuelle Erklärung zur Verwendung des CSS-Grids:

{{EmbedYouTube("KOvGeFUHAC0")}}

### Ein Grid definieren

Probieren wir Grid-Layouts aus, hier ist ein Beispiel mit einem Container, der einige untergeordnete Elemente enthält. Diese Elemente werden standardmäßig in einem normalen Fluss angezeigt, wodurch sie eins unter dem anderen erscheinen.

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
  font: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

{{EmbedLiveSample('simple-grid_0', '100%', "310") }}

Ähnlich wie Sie Flexbox definieren, definieren Sie ein Grid-Layout, indem Sie den Wert der {{cssxref("display")}}-Eigenschaft auf `grid` setzen. Wie im Fall von Flexbox verwandelt die `display: grid`-Eigenschaft alle direkten Kinder des Containers in Grid-Elemente. Wir haben folgende CSS zum Datei hinzugefügt:

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
  font: sans-serif;
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

Im Gegensatz zu Flexbox werden die Elemente nicht sofort anders aussehen. Das Deklarieren von `display: grid` gibt Ihnen ein einspaltiges Grid, sodass Ihre Elemente weiterhin eins unter dem anderen angezeigt werden, so wie sie es im normalen Fluss tun.

Um etwas zu sehen, das mehr wie ein Grid aussieht, müssen wir dem Grid einige Spalten hinzufügen. Fügen wir drei 200-Pixel-Spalten hinzu. Sie können jede Längeneinheit oder Prozentsätze verwenden, um diese Spaltentracks zu erstellen.

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
  font: sans-serif;
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

Sie sollten sehen, dass die Elemente sich so umgestellt haben, dass sich jeder in einer Zell des Grids befindet.

{{EmbedLiveSample('simple-grid_2', '100%', "130") }}

### Flexible Grids mit der fr-Einheit

Zusätzlich zur Erstellung von Grids mit Längen und Prozentsätzen können wir [`fr`](/de/docs/Web/CSS/flex_value) verwenden. Die `fr`-Einheit stellt einen Bruchteil des verfügbaren Raums im Grid-Container dar, um die Grid-Reihen und -Spalten flexibel zu dimensionieren.

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
  font: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

Hier ändern wir die Trackliste auf die folgende Definition, wodurch drei `1fr`-Tracks erstellt werden:

```css live-sample___grid-fr-unit_0
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

{{EmbedLiveSample('grid-fr-unit_0', '100%', "130") }}

Sie haben jetzt flexible Tracks. Die `fr`-Einheit verteilt den Raum proportional. Sie können verschiedene positive Werte für Ihre Tracks angeben:

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
  font: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

Ändern Sie jetzt Ihre Trackliste auf die folgende Definition, wodurch ein `2fr` und zwei `1fr`-Tracks erstellt werden:

```css live-sample___grid-fr-unit_1
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
```

{{EmbedLiveSample('grid-fr-unit_1', '100%', "130") }}

Der erste Track erhält `2fr` des verfügbaren Raums und die anderen beiden Tracks erhalten `1fr`, wodurch der erste Track größer wird. Sie können `fr`-Einheiten mit festen Längeneinheiten mischen. In diesem Fall wird der für die festen Tracks benötigte Platz zuerst verwendet, bevor der verbleibende Platz auf die anderen Tracks verteilt wird.

> [!NOTE]
> Die `fr`-Einheit verteilt _verfügbaren_ Raum, nicht _den gesamten_ Raum. Daher, wenn einer Ihrer Tracks etwas Großes enthält, gibt es weniger freien Raum zu teilen.

### Lücken zwischen den Tracks

Um Lücken zwischen den Tracks zu erstellen, verwenden wir die Eigenschaften:

- {{cssxref("column-gap")}} für Lücken zwischen Spalten
- {{cssxref("row-gap")}} für Lücken zwischen Reihen
- {{cssxref("gap")}} als Kurzschreibweise für beides

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
  font: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

Hier fügen wir die `gap`-Eigenschaft hinzu, um Lücken mit einem Wert von `20px` zwischen den Tracks zu erstellen:

```css live-sample___grid-gap
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
}
```

{{EmbedLiveSample('grid-gap', '100%', "180") }}

Diese Lücken können beliebige Längeneinheiten oder Prozentsätze sein, jedoch keine `fr`-Einheit.

### Wiederholende Tracklisten

Sie können Ihre gesamte Trackliste oder nur einen Abschnitt davon mithilfe der CSS-Funktion `repeat()` wiederholen.
Hier ändern wir die Trackliste in die folgende:

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
  font: sans-serif;
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

Sie erhalten jetzt drei `1fr`-Tracks, genau wie zuvor. Der erste Wert, der an die `repeat()`-Funktion übergeben wird, gibt die Anzahl der Wiederholungen der Liste an, während der zweite Wert eine Trackliste ist, die ein oder mehrere Tracks enthält, die Sie wiederholen möchten.

### Implizite und explizite Grids

Bis zu diesem Punkt haben wir nur Spaltentracks angegeben, aber Reihen werden automatisch erstellt, um den Inhalt zu halten. Dieses Konzept verdeutlicht den Unterschied zwischen expliziten und impliziten Grids.
Hier ist ein bisschen mehr über den Unterschied zwischen den beiden Arten von Grids:

- **Explizites Grid** wird mit `grid-template-columns` oder `grid-template-rows` erstellt.
- **Implizites Grid** erweitert das definierte explizite Grid, wenn Inhalt außerhalb dieses Grids platziert wird, z. B. in den Reihen, indem zusätzliche Linien des Grids erzeugt werden.

Standardmäßig werden Tracks im impliziten Grid in der Größe `auto` erstellt, was im Allgemeinen bedeutet, dass sie groß genug sind, um ihren Inhalt zu enthalten. Wenn Sie den impliziten Grid-Tracks eine Größe geben möchten, können Sie die Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} verwenden. Wenn Sie `grid-auto-rows` mit einem Wert von `100px` zu Ihrem CSS hinzufügen, werden Sie sehen, dass die erstellten Reihen jetzt 100 Pixel hoch sind.

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
  font: sans-serif;
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

Unsere 100 Pixel hohen Tracks sind möglicherweise nicht sehr nützlich, wenn wir Inhalte in diese Tracks einfügen, die höher als 100 Pixel sind, da dies zu einem Überlauf führen würde. Es könnte besser sein, Tracks zu haben, die _mindestens_ 100 Pixel hoch sind und sich dennoch erweitern können, wenn mehr Inhalt hinzugefügt wird. Eine ziemlich grundlegende Tatsache über das Web ist, dass man nie wirklich weiß, wie hoch etwas sein wird — zusätzlicher Inhalt oder größere Schriftgrößen können Probleme mit Designs verursachen, die versuchen, in jeder Dimension perfekt in Pixeln zu sein.

Die {{cssxref("minmax", "minmax()")}}-Funktion ermöglicht es uns, eine minimale und maximale Größe für einen Track festzulegen, zum Beispiel `minmax(100px, auto)`. Die Mindestgröße beträgt 100 Pixel, aber die maximale ist `auto`, was sich ausdehnt, um mehr Inhalt aufzunehmen. Hier ändern wir `grid-auto-rows`, um einen `minmax()`-Wert zu verwenden:

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
  font: sans-serif;
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

Wenn Sie zusätzlichen Inhalt hinzufügen, sehen Sie, dass sich der Track ausdehnt, um ihn aufzunehmen. Beachten Sie, dass die Erweiterung direkt entlang der Reihe erfolgt.

### So viele Spalten, wie passen

Wir können einige der Lektionen, die wir über Tracklisten, Wiederholungsnotation und {{cssxref("minmax", "minmax()")}} gelernt haben, kombinieren, um ein nützliches Muster zu erstellen. Manchmal ist es hilfreich, dem Grid zu erlauben, so viele Spalten zu erstellen, wie in den Container passen. Wir tun dies, indem wir den Wert von `grid-template-columns` mit der {{cssxref("repeat", "repeat()")}}-Funktion festlegen, aber anstatt eine Zahl zu übergeben, übergeben wir das Schlüsselwort [`auto-fit`](/de/docs/Web/CSS/repeat#auto-fit). Für den zweiten Parameter der Funktion verwenden wir `minmax()` mit einem Mindestwert, der der Mindestgröße des Tracks entspricht, den wir haben möchten, und einer maximalen Größe von `1fr`.

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
  font: sans-serif;
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

Dies funktioniert, weil das Grid so viele 230-Pixel-Spalten erstellt, wie in den Container passen, und dann den übrigen Raum unter allen Spalten aufteilt. Das Maximum ist `1fr`, was, wie wir bereits wissen, den Raum gleichmäßig zwischen den Tracks verteilt.

## Linienbasierte Platzierung

Wir gehen nun vom Erstellen eines Grids zur Platzierung von Dingen auf dem Grid über. Unser Grid hat immer Linien — diese sind ab 1 nummeriert und beziehen sich auf den [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) des Dokuments. Zum Beispiel wäre die Spaltenlinie 1 im Englischen (von links nach rechts geschrieben) auf der linken Seite des Grids und die Reihenlinie 1 oben, während im Arabischen (von rechts nach links geschrieben) die Spaltenlinie 1 auf der rechten Seite wäre.

Um Elemente entlang dieser Linien zu positionieren, können wir die Start- und Endlinien des Gridbereichs angeben, in dem ein Element platziert werden soll. Es gibt vier Eigenschaften, die wir dafür verwenden können:

- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}

Diese Eigenschaften akzeptieren Liniennummern als Werte, sodass wir angeben können, dass ein Element z. B. auf Linie 1 beginnen und auf Linie 3 enden soll.
Alternativ können Sie auch Kurzschreibweise verwenden, um Start- und Endlinien gleichzeitig anzugeben, getrennt durch einen Schrägstrich `/`:

- {{cssxref("grid-column")}} Kurzschreibweise für `grid-column-start` und `grid-column-end`
- {{cssxref("grid-row")}} Kurzschreibweise für `grid-row-start` und `grid-row-end`

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

Ohne die definierte Platzierung können Sie sehen, dass die _automatische Platzierung_ jedes Element in seine eigene Zelle im Grid einfügt. Der {{htmlelement("header")}} nimmt `1fr` (ein Viertel) ein und der {{htmlelement("main")}} `3fr` (drei Viertel).

{{EmbedLiveSample('grid-placement_0', '100%', "230") }}

Lassen Sie uns alle Elemente für unsere Website arrangieren, indem wir die Grid-Linien verwenden. Fügen Sie die folgenden Regeln am Ende Ihres CSS hinzu:

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
> Sie können auch den Wert `-1` verwenden, um die Endspalten- oder -reihenlinie zu adressieren, und dann mit negativen Werten vom Ende nach innen zählen. Beachten Sie auch, dass Linien immer von den Rändern des expliziten Grids zählen, nicht von dem {{Glossary("Grid", "impliziten Grid")}}.

## Platzierung mit grid-template-areas

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

Hier verwenden wir die Eigenschaft {{CSSXRef("grid-template-areas")}}, um festzulegen, wie die 3 Reihen angeordnet sind. Die erste Reihe hat den Wert `header header`, die zweite `sidebar content` und die dritte `footer footer`. Wir verwenden dann die Eigenschaft {{CSSXRef("grid-area")}}, um zu definieren, wo Elemente in den `grid-template-areas` platziert werden.

{{EmbedLiveSample('grid-placement_2', '100%', "230") }}

Die Regeln für `grid-template-areas` sind wie folgt:

- Sie müssen jede Zelle des Grids füllen.
- Um sich über zwei Zellen zu erstrecken, wiederholen Sie den Namen.
- Verwenden Sie einen `.` (Punkt), um eine Zelle leer zu lassen.
- Bereiche müssen rechteckig sein — Sie können z. B. keinen L-förmigen Bereich haben.
- Bereiche können nicht an verschiedenen Orten wiederholt werden.

Sie können mit unserem Layout herumspielen, indem Sie den Footer so ändern, dass er nur unter dem Artikel sitzt und die Sidebar sich ganz nach unten erstreckt. Dies ist eine sehr schöne Möglichkeit, ein Layout zu beschreiben, da es aus der CSS-Betrachtung sofort ersichtlich ist, was passiert.

## Verschachtelte Grids und Subgrid

Es ist möglich, ein Grid innerhalb eines anderen Grids zu verschachteln, wodurch ein ["Subgrid"](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) entsteht.
Dies können Sie tun, indem Sie die Eigenschaft `display: grid` auf einem Element im übergeordneten Grid setzen.

Lassen Sie uns das vorherige Beispiel erweitern, indem wir einen Container für Artikel hinzufügen und ein verschachteltes Grid verwenden, um das Layout mehrerer Artikel zu steuern.
Während wir im verschachtelten Grid nur eine Spalte verwenden, können wir die Reihen in einem Verhältnis von 4:3:3 aufteilen, indem wir die Eigenschaft `grid-template-rows` verwenden.
Diese Methode ermöglicht es uns, ein Layout zu erstellen, bei dem ein Artikel oben auf der Seite eine große Anzeige hat, während die anderen eine kleinere Vorschau-Anzeige haben.

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

Um das Arbeiten mit Layouts in verschachtelten Grids zu erleichtern, können Sie `subgrid` auf den Eigenschaften `grid-template-rows` und `grid-template-columns` verwenden. Dies ermöglicht es Ihnen, die Tracks des übergeordneten Grids zu nutzen.

Im folgenden Beispiel verwenden wir eine [linienbasierte Platzierung](#linienbasierte_platzierung), um das verschachtelte Grid über mehrere Spalten und Reihen des übergeordneten Grids hinaus zu erweitern.
Wir haben `subgrid` hinzugefügt, um die Spaltentracks des übergeordneten Grids zu erben, während innerhalb des verschachtelten Grids ein anderes Layout für die Reihen hinzugefügt wird.

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

Es gibt zahlreiche Grid-Frameworks, die ein 12- oder 16-Spalten-Grid anbieten, um Ihnen bei der Anordnung Ihrer Inhalte zu helfen.
Die gute Nachricht ist, dass Sie wahrscheinlich keine Drittanbieter-Frameworks benötigen, um grid-basierte Layouts zu erstellen — die Grid-Funktionalität ist bereits in der Spezifikation enthalten und wird von den meisten modernen Browsern unterstützt.

Dies hat einen Container mit einem definierten 12-Spalten-Grid, unter Verwendung von `grid-template-columns: repeat(12, 1fr);` und derselben Markup, die wir in den beiden vorherigen Beispielen verwendet haben. Wir können jetzt linienbasierte Platzierung verwenden, um unsere Inhalte auf dem 12-Spalten-Grid zu platzieren.

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

![Ein 12-Spalten-Grid, das auf unser Design überlagert ist.](learn-grids-inspector.png)

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Grid](/de/docs/Learn_web_development/Core/CSS_layout/Grid_skills).

## Zusammenfassung

In diesem Überblick haben wir die Hauptfunktionen des CSS-Grid-Layouts erkundet. Sie sollten in der Lage sein, es in Ihren Designs zu verwenden. Als nächstes betrachten wir das responsive Design.

## Siehe auch

- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout#guides)
  - : Hauptmodulseite des CSS-Grid-Layouts, die viele weitere Ressourcen enthält
- [Ein kompletter Leitfaden zu CSS-Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
  - : Ein visueller Leitfaden auf CSS-Tricks (2023).
- [Grid Garden](https://cssgridgarden.com/)
  - : Ein Bildungsspiel, um die Grundlagen von Grid auf cssgridgarden.com besser zu verstehen und zu lernen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout/Responsive_design", "Learn_web_development/Core/CSS_layout")}}
