---
title: CSS Grid Layout
slug: Learn_web_development/Core/CSS_layout/Grids
l10n:
  sourceCommit: 2a4d705a12d76ee17e013f8a50007fd25029e0fc
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout")}}

Das CSS Grid Layout ist ein zweidimensionales Layoutsystem für das Web. Es ermöglicht Ihnen, Inhalte in Zeilen und Spalten zu organisieren und bietet viele Funktionen, um die Erstellung von komplexen Layouts zu vereinfachen. Dieser Artikel erklärt alles, was Sie wissen müssen, um mit dem Grid Layout zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen des CSS-Stylings</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltungen</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Verstehen Sie den Zweck von CSS Grid — flexible Anordnung einer Reihe von Block- oder Inline-Elementen in zwei Dimensionen.</li>
          <li>Verstehen Sie die Terminologie des Grids — Zeilen, Spalten, Abstände und Rinnen.</li>
          <li>Verstehen Sie, was <code>display: grid</code> Ihnen standardmäßig bietet.</li>
          <li>Definition von Gitterreihen, Spalten und Abständen.</li>
          <li>Positionierung von Elementen im Grid.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist Grid Layout?

Ein Grid ist eine Ansammlung von horizontalen und vertikalen Linien, die ein Muster erzeugen, an dem wir unsere Designelemente ausrichten können. Sie helfen uns, Layouts zu erstellen, in denen unsere Elemente nicht umherhüpfen oder ihre Breite ändern, während wir von Seite zu Seite wechseln, und bieten so eine größere Konsistenz auf unseren Websites.

Ein Grid hat typischerweise **Spalten**, **Zeilen** und dann Abstände zwischen jeder Zeile und Spalte. Die Abstände werden allgemein als **Rinnen** bezeichnet.

![CSS-Grid mit Teilen, die als Zeilen, Spalten und Rinnen bezeichnet sind. Zeilen sind die horizontalen Abschnitte des Grids und Spalten sind die vertikalen Abschnitte des Grids. Der Abstand zwischen zwei Zeilen wird als 'Reihenrinne' bezeichnet und der Abstand zwischen 2 Spalten als 'Spaltenrinne'.](grid.png)

## Ihr Grid in CSS erstellen

Nachdem Sie sich für das Grid entschieden haben, das Ihr Design benötigt, können Sie das CSS Grid Layout verwenden, um es zu erstellen. Zuerst betrachten wir die grundlegenden Funktionen des Grid Layouts und dann erkunden wir, wie Sie ein einfaches Grid-System für Ihr Projekt erstellen können. Das folgende Video bietet eine schöne visuelle Erklärung zur Verwendung von CSS Grid:

{{EmbedYouTube("KOvGeFUHAC0")}}

### Ein Grid definieren

Lassen Sie uns Grid Layouts ausprobieren, hier ist ein Beispiel mit einem Container, der einige untergeordnete Elemente enthält. Standardmäßig werden diese Elemente in einem normalen Fluss angezeigt, wodurch sie übereinander erscheinen.

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

Ähnlich wie bei der Definition von Flexbox definieren Sie ein Grid Layout, indem Sie den Wert der {{cssxref("display")}} Eigenschaft auf `grid` setzen. Wie im Fall von Flexbox verwandelt die Eigenschaft `display: grid` alle direkten Kinder des Containers in Grid-Elemente. Wir haben die folgende CSS-Datei hinzugefügt:

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

Im Gegensatz zu Flexbox sehen die Elemente nicht sofort anders aus. Das Deklarieren von `display: grid` ergibt ein einspaltiges Grid, sodass Ihre Elemente weiterhin übereinander angezeigt werden, wie sie es im normalen Fluss tun.

Um etwas zu sehen, das mehr wie ein Grid aussieht, müssen wir einige Spalten zum Grid hinzufügen. Lassen Sie uns drei 200-Pixel-Spalten hinzufügen. Sie können jede Längeneinheit oder Prozentsatz verwenden, um diese Spaltentracks zu erstellen.

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

Sie sollten sehen, dass sich die Elemente so neu angeordnet haben, dass jedes sich in einer Zelle des Grids befindet.

{{EmbedLiveSample('simple-grid_2', '100%', "130") }}

### Flexible Grids mit der fr-Einheit

Zusätzlich zur Erstellung von Grids mit Längen und Prozentsätzen können wir [`fr`](/de/docs/Web/CSS/flex_value) verwenden. Die `fr`-Einheit repräsentiert einen Bruchteil des verfügbaren Raums im Grid-Container, um Grid-Reihen und -Spalten flexibel zu dimensionieren.

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

Hier ändern wir die Track-Liste zu der folgenden Definition, indem wir drei `1fr`-Tracks erstellen:

```css live-sample___grid-fr-unit_0
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

{{EmbedLiveSample('grid-fr-unit_0', '100%', "130") }}

Sie haben nun flexible Tracks.
Die `fr`-Einheit verteilt den Raum proportional, sodass Sie für Ihre Tracks verschiedene positive Werte angeben können.
Ändern Sie Ihre Track-Liste zu der folgenden Definition, indem Sie einen `2fr`-Track und zwei `1fr`-Tracks erstellen:

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

Der erste Track erhält `2fr` des verfügbaren Raums und die anderen beiden Tracks erhalten `1fr`, wodurch der erste Track größer wird. Sie können `fr`-Einheiten mit festen Längeneinheiten mischen. In diesem Fall wird der für die festen Tracks benötigte Raum zuerst verbraucht, bevor der verbleibende Raum auf die anderen Tracks verteilt wird.

> [!NOTE]
> Die `fr`-Einheit verteilt _verfügbaren_ Raum, nicht _allen_ Raum. Wenn also einer Ihrer Tracks etwas Großes darin hat, wird es weniger freien Raum zum Teilen geben.

### Abstände zwischen Tracks

Um Abstände zwischen Tracks zu schaffen, verwenden wir die Eigenschaften:

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

Hier fügen wir die Eigenschaft `gap` hinzu, um Abstände zwischen den Tracks mit einem Wert von `20px` zu erstellen:

```css live-sample___grid-gap
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
}
```

{{EmbedLiveSample('grid-gap', '100%', "180") }}

Diese Abstände können jede Längeneinheit oder Prozentsatz sein, aber keine `fr`-Einheit.

### Wiederholung von Track-Listen

Sie können die gesamte oder nur einen Teil Ihrer Track-Liste mithilfe der CSS-Funktion `repeat()` wiederholen.
Hier ändern wir die Track-Liste zu der folgenden:

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

Sie erhalten nun drei `1fr`-Tracks genau wie zuvor. Der erste Wert, der an die `repeat()`-Funktion übergeben wird, gibt an, wie oft Sie das Listing wiederholen möchten, während der zweite Wert eine Track-Liste ist, bei der es sich um einen oder mehrere Tracks handeln kann, die Sie wiederholen möchten.

### Implizite und explizite Grids

Bis zu diesem Punkt haben wir nur Spaltentracks angegeben, aber Zeilen werden automatisch erstellt, um den Inhalt zu halten. Dieses Konzept verdeutlicht den Unterschied zwischen expliziten und impliziten Grids.
Hier ist ein bisschen mehr über den Unterschied zwischen den beiden Arten von Grids:

- **Explizites Grid** wird mit `grid-template-columns` oder `grid-template-rows` erstellt.
- **Implizites Grid** erweitert das definierte explizite Grid, wenn Inhalt außerhalb dieses Grids platziert wird, z.B. in die Zeilen durch Zeichnen zusätzlicher Gitterlinien.

Standardmäßig sind Tracks, die im impliziten Grid erstellt werden, auf `auto` dimensioniert, was im Allgemeinen bedeutet, dass sie groß genug sind, um ihren Inhalt zu enthalten. Wenn Sie impliziten Grid-Tracks eine Größe geben möchten, können Sie die Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} verwenden. Wenn Sie `grid-auto-rows` mit einem Wert von `100px` zu Ihrem CSS hinzufügen, werden Sie sehen, dass diese erstellten Zeilen jetzt 100 Pixel hoch sind.

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

Unsere 100 Pixel hohen Tracks sind nicht sehr nützlich, wenn wir Inhalte in diese Tracks hinzufügen, die höher als 100 Pixel sind, was zu einem Überlauf führen würde. Es könnte besser sein, Tracks zu haben, die mindestens 100 Pixel hoch sind und sich dennoch erweitern können, wenn mehr Inhalte hinzugefügt werden. Eine ziemlich grundlegende Tatsache über das Web ist, dass Sie nie wirklich wissen, wie hoch etwas sein wird — zusätzliche Inhalte oder größere Schriftgrößen können Probleme mit Designs verursachen, die versuchen, in jeder Dimension pixelgenau zu sein.

Die {{cssxref("minmax", "minmax()")}}-Funktion ermöglicht es uns, eine minimale und maximale Größe für einen Track festzulegen, z.B. `minmax(100px, auto)`. Die Mindestgröße beträgt 100 Pixel, aber das Maximum ist `auto`, das sich erweitert, um mehr Inhalt aufzunehmen. Hier ändern wir die `grid-auto-rows`, um einen `minmax()`-Wert zu verwenden:

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

Wenn Sie weitere Inhalte hinzufügen, sehen Sie, dass sich der Track erweitert, um sie aufzunehmen. Beachten Sie, dass sich die Erweiterung direkt entlang der Reihe erfolgt.

### So viele Spalten, wie passen

Wir können einige der Lektionen, die wir über Track-Listing, Wiederholungsnotation und {{cssxref("minmax", "minmax()")}} gelernt haben, kombinieren, um ein nützliches Muster zu erstellen. Manchmal ist es hilfreich, dem Grid zu sagen, dass es so viele Spalten erstellen soll, wie in den Container passen. Dies tun wir, indem wir den Wert von `grid-template-columns` mit der {{cssxref("repeat", "repeat()")}}-Funktion setzen, aber anstelle einer Zahl das Schlüsselwort [`auto-fit`](/de/docs/Web/CSS/repeat#auto-fit) übergeben. Für den zweiten Parameter der Funktion verwenden wir `minmax()` mit einem Mindestwert gleich dem Mindesttrackgröße, die wir haben möchten, und einem Maximum von `1fr`.

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

Das funktioniert, weil das Grid so viele 230-Pixel-Spalten wie möglich in den Container erstellt und dann den verbleibenden Raum gleichmäßig auf alle Spalten verteilt. Das Maximum ist `1fr`, was, wie wir bereits wissen, den Raum gleichmäßig zwischen Tracks verteilt.

## Linienbasierte Platzierung

Wir gehen nun vom Erstellen eines Grids zur Platzierung von Dingen auf dem Grid über. Unser Grid hat immer Linien — diese werden beginnend mit 1 nummeriert und beziehen sich auf den [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) des Dokuments. Zum Beispiel wäre in Englisch (von links nach rechts geschrieben) die Spaltenlinie 1 auf der linken Seite des Grids und die Zeilenlinie 1 oben, während sie in Arabisch (von rechts nach links geschrieben) die Spaltenlinie 1 auf der rechten Seite wäre.

Um Elemente entlang dieser Linien zu positionieren, können wir die Start- und Endlinien des Grid-Bereichs angeben, in dem ein Element platziert werden soll. Es gibt vier Eigenschaften, die wir dafür verwenden können:

- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}

Diese Eigenschaften akzeptieren Liniennummern als Werte, sodass wir angeben können, dass ein Element z.B. auf Linie 1 beginnen und auf Linie 3 enden soll. Alternativ können Sie auch Kurzeigenschaften verwenden, die es Ihnen ermöglichen, die Start- und Endlinien gleichzeitig anzugeben, getrennt durch einen Schrägstrich `/`:

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

Ohne die definierte Platzierung können Sie sehen, dass die _automatische Platzierung_ jedes Element in seine eigene Zelle im Grid stellt. Das {{htmlelement("header")}} beansprucht `1fr` (ein Viertel) und das {{htmlelement("main")}} beansprucht `3fr` (drei Viertel).

{{EmbedLiveSample('grid-placement_0', '100%', "230") }}

Lassen Sie uns alle Elemente für unsere Seite mithilfe der Grid-Linien anordnen. Fügen Sie die folgenden Regeln am Ende Ihres CSS hinzu:

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

Jetzt sind das {{htmlelement("header")}} und das {{htmlelement("footer")}} auf `1 / 3` gesetzt, was bedeutet, dass es auf Linie `1` beginnt und auf Linie `3` endet.

{{EmbedLiveSample('grid-placement_1', '100%', "230") }}

> [!NOTE]
> Sie können auch den Wert `-1` verwenden, um die Endspalte oder -zeilenlinie zu neAnpassenen, und dann von dort ausgehend negative Werte verwenden. Beachten Sie auch, dass die Linien immer von den Rändern des expliziten Grids zählen, nicht vom {{Glossary("Grid", "impliziten Grid")}}.

## Positionierung mit `grid-template-areas`

Eine alternative Möglichkeit, Elemente auf Ihrem Grid anzuordnen, ist die Verwendung der {{cssxref("grid-template-areas")}} Eigenschaft und das Zuweisen eines Namens zu den verschiedenen Elementen Ihres Designs.

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

Hier verwenden wir die {{CSSXRef("grid-template-areas")}} Eigenschaft, um zu definieren, wie die 3 Zeilen angeordnet sind. Die erste Zeile hat einen Wert von `header header`, die zweite `sidebar content` und die dritte `footer footer`. Wir verwenden dann die {{CSSXRef("grid-area")}} Eigenschaft, um zu definieren, wo Elemente in den `grid-template-areas` platziert werden.

{{EmbedLiveSample('grid-placement_2', '100%', "230") }}

Die Regeln für `grid-template-areas` sind wie folgt:

- Sie müssen jede Zelle des Grids gefüllt haben.
- Um über zwei Zellen zu spannen, wiederholen Sie den Namen.
- Um eine Zelle leer zu lassen, verwenden Sie einen `.` (Punkt).
- Bereiche müssen rechteckig sein – z.B. dürfen Sie keinen L-förmigen Bereich haben.
- Bereiche dürfen nicht an unterschiedlichen Stellen wiederholt werden.

Sie können mit unserem Layout herumspielen, indem Sie den Footer so ändern, dass er nur unterhalb des Artikels sitzt, und die Seitenleiste, um sich den ganzen Weg nach unten zu erstrecken. Dies ist eine sehr schöne Möglichkeit, ein Layout zu beschreiben, weil es allein durch das Ansehen des CSS klar wird, was genau passiert.

## Verschachtelte Grids und Subgrid

Es ist möglich, ein Grid innerhalb eines anderen Grids zu verschachteln, indem man ein ["Subgrid"](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) erstellt.
Sie können dies erreichen, indem Sie die Eigenschaft `display: grid` auf ein Element im übergeordneten Grid setzen.

Lassen Sie uns das vorherige Beispiel erweitern, indem wir einen Container für Artikel hinzufügen und ein verschachteltes Grid verwenden, um die Anordnung mehrerer Artikel zu steuern.
Während wir nur eine Spalte im verschachtelten Grid verwenden, können wir die Zeilen definieren, die sich im Verhältnis 4:3:3 aufteilen, indem wir die Eigenschaft `grid-template-rows` verwenden.
Dieser Ansatz ermöglicht es uns, ein Layout zu erstellen, bei dem ein Artikel oben auf der Seite eine große Darstellung hat, während die anderen über ein kleineres, vorschauähnliches Layout verfügen.

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

Um es einfacher zu gestalten, mit Layouts in verschachtelten Grids zu arbeiten, können Sie `subgrid` auf den Eigenschaften `grid-template-rows` und `grid-template-columns` verwenden. Dies erlaubt es Ihnen, die im übergeordneten Grid definierten Tracks zu nutzen.

Im folgenden Beispiel verwenden wir [linienbasierte Platzierung](#linienbasierte_platzierung), damit das verschachtelte Grid mehrere Spalten und Zeilen des übergeordneten Grids umfasst.
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

Es gibt zahlreiche Grid-Frameworks, die ein 12- oder 16-Spalten-Grid bieten, um Ihnen bei der Anordnung Ihrer Inhalte zu helfen.
Die gute Nachricht ist, dass Sie wahrscheinlich keine Drittanbieter-Frameworks benötigen werden, um Grid-basierte Layouts zu erstellen — die Grid-Funktionalität ist bereits in der Spezifikation enthalten und wird von den meisten modernen Browsern unterstützt.

Dies hat einen Container mit einem 12-Spalten-Grid definiert, das `grid-template-columns: repeat(12, 1fr);` verwendet, und die gleiche Markup-Struktur, die wir in den beiden vorhergehenden Beispielen verwendet haben. Wir können nun linienbasierte Platzierung verwenden, um unseren Inhalt auf dem 12-Spalten-Grid zu platzieren.

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

Wenn Sie den [Firefox Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) verwenden, um die Gitternetzlinien auf Ihr Design zu überlagern, können Sie sehen, wie unser 12-Spalten-Grid funktioniert.

![Ein 12-Spalten-Grid überlagert unserem Design.](learn-grids-inspector.png)

## Zusammenfassung

In dieser Übersicht haben wir die Hauptmerkmale des CSS Grid Layouts betrachtet. Sie sollten in der Lage sein, es in Ihren Designs zu verwenden.

Im nächsten Artikel werden wir Ihnen einige Tests zur Verfügung stellen, mit denen Sie überprüfen können, wie gut Sie all diese Informationen verstanden und behalten haben.

## Siehe auch

- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout#guides)
  - : Hauptseite des CSS-Grid-Layout-Moduls, die viele weitere Ressourcen enthält
- [Ein vollständiger Leitfaden zu CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
  - : Ein visueller Leitfaden auf CSS-Tricks (2023).
- [Grid Garden](https://cssgridgarden.com/)
  - : Ein Lernspiel, um die Grundlagen des Grids auf cssgridgarden.com besser zu verstehen und zu erlernen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout")}}
