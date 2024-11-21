---
title: Raster
slug: Learn/CSS/CSS_layout/Grids
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout")}}

[CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) ist ein zweidimensionales Layoutsystem für das Web. Es ermöglicht Ihnen, Inhalte in Zeilen und Spalten zu organisieren und bietet viele Funktionen, um die Erstellung komplexer Layouts zu vereinfachen. Dieser Artikel erklärt alles, was Sie wissen müssen, um mit dem Grid-Layout zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Idee, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a> und
        <a href="/de/docs/Learn/CSS/Building_blocks">Styling-Boxen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die grundlegenden Konzepte des Grid-Layouts zu verstehen sowie dessen
        Implementierung mit CSS Grid.
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Grid-Layout?

Ein Raster ist eine Sammlung horizontaler und vertikaler Linien, die ein Muster bilden, an dem wir unsere Designelemente ausrichten können. Sie helfen uns dabei, Layouts zu erstellen, in denen sich unsere Elemente nicht verschieben oder ihre Breite ändern, wenn wir von Seite zu Seite wechseln, und sorgen so für mehr Konsistenz auf unseren Websites.

Ein Raster besteht typischerweise aus **Spalten**, **Zeilen** und Lücken zwischen jeder Zeile und Spalte. Die Lücken werden häufig als **Rinnen** bezeichnet.

![CSS Grid mit Teilen, die als Zeilen, Spalten und Rinnen beschriftet sind. Zeilen sind die horizontalen Segmente des Grids und Spalten sind die vertikalen Segmente des Grids. Der Raum zwischen zwei Zeilen wird als 'Zeilenrinn' und der Raum zwischen zwei Spalten als 'Spaltenrinn' bezeichnet.](grid.png)

## Ihr Grid in CSS erstellen

Sobald Sie sich für das Raster entschieden haben, das Ihr Design benötigt, können Sie das CSS Grid-Layout verwenden, um es zu erstellen. Zunächst betrachten wir die grundlegenden Funktionen des Grid-Layouts und erkunden dann, wie Sie ein einfaches Gridsystem für Ihr Projekt erstellen können.
Das folgende Video bietet eine anschauliche Erklärung zur Verwendung von CSS Grid:

{{EmbedYouTube("KOvGeFUHAC0")}}

### Ein Grid definieren

Probieren wir Grid-Layouts mit Hilfe eines Beispiels aus. Laden Sie [die Ausgangsdatei](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/0-starting-point.html) herunter und öffnen Sie sie in Ihrem Texteditor und Browser (Sie können es auch [hier live sehen](https://mdn.github.io/learning-area/css/css-layout/grids/0-starting-point.html)). Sie sehen ein Beispiel mit einem Container, der einige Kind-Elemente enthält. Standardmäßig werden diese Elemente im normalen Fluss angezeigt, wodurch sie untereinander erscheinen. Für den Anfangsteil dieser Lektion verwenden wir diese Datei, um zu sehen, wie sich ihr Grid verhält.

Ähnlich wie Sie Flexbox definieren, definieren Sie ein Grid-Layout, indem Sie den Wert der {{cssxref("display")}}-Eigenschaft auf `grid` setzen. Wie bei Flexbox transformiert die Eigenschaft `display: grid` alle direkten Kinder des Containers in Rasterelemente. Fügen Sie die folgende CSS zu Ihrer Datei hinzu:

```css
.container {
  display: grid;
}
```

Im Gegensatz zu Flexbox sehen die Elemente nicht sofort anders aus. Die Deklaration von `display: grid` gibt Ihnen ein Ein-Spalten-Raster, sodass Ihre Elemente weiterhin untereinander angezeigt werden, wie sie es im normalen Fluss tun.

Um etwas Grid-Ähnliches zu sehen, müssen wir dem Grid einige Spalten hinzufügen. Fügen wir drei 200-Pixel-Spalten hinzu. Sie können jede Längeneinheit oder Prozentangabe verwenden, um diese Spuren zu erstellen.

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

Fügen Sie die zweite Deklaration Ihrer CSS-Regel hinzu und laden Sie die Seite neu. Sie sollten sehen, dass sich die Elemente so umgeordnet haben, dass sich eines in jeder Zelle des Grids befindet.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```html hidden
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

{{ EmbedLiveSample('Defining_a_grid', '100%', 200) }}

### Flexible Grids mit der fr-Einheit

Zusätzlich zur Erstellung von Grids mit Längen und Prozentsätzen können wir [`fr`](/de/docs/Web/CSS/flex_value) verwenden. Die `fr`-Einheit repräsentiert einen Bruchteil des verfügbaren Raums im Grid-Container, um Grid-Zeilen und -Spalten flexibel zu skalieren.

Ändern Sie Ihre Spurauflistung auf die folgende Definition und erstellen Sie drei `1fr`-Spuren:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Sie haben jetzt flexible Spuren. Die `fr`-Einheit verteilt den Raum proportional. Sie können unterschiedliche positive Werte für Ihre Spuren angeben:

```css
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
```

Die erste Spur erhält `2fr` des verfügbaren Raums und die anderen beiden Spuren erhalten `1fr`, wodurch die erste Spur größer wird. Sie können `fr`-Einheiten mit festen Längeneinheiten mischen. In diesem Fall wird der für die festen Spuren benötigte Raum zuerst aufgebraucht, bevor der restliche Raum auf die anderen Spuren verteilt wird.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```html hidden
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

{{ EmbedLiveSample('Flexible_grids_with_the_fr_unit', '100%', 200) }}

> [!NOTE]
> Die `fr`-Einheit verteilt den _verfügbaren_ Raum, nicht _den gesamten_ Raum. Wenn also eine Ihrer Spuren etwas Großes darin hat, wird es weniger freien Raum zum Teilen geben.

### Lücken zwischen den Spuren

Um Lücken zwischen den Spuren zu schaffen, verwenden wir die Eigenschaften:

- {{cssxref("column-gap")}} für Lücken zwischen den Spalten
- {{cssxref("row-gap")}} für Lücken zwischen den Zeilen
- {{cssxref("gap")}} als Kurzform für beide

```css
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
}
```

Diese Lücken können jede Längeneinheit oder Prozentangabe sein, aber nicht eine `fr`-Einheit.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```html hidden
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

{{ EmbedLiveSample('Gaps_between_tracks', '100%', 250) }}

> [!NOTE]
> Die `gap`-Eigenschaften (`column-gap`, `row-gap` und `gap`) waren früher mit `grid-` vorangestellt. Die Spezifikation hat sich geändert, aber die vorangestellten Versionen werden als Alias beibehalten. Um auf der sicheren Seite zu sein und Ihren Code widerstandsfähiger zu machen, können Sie beide Eigenschaften hinzufügen:
>
> ```css
> .container {
>   display: grid;
>   grid-template-columns: 2fr 1fr 1fr;
>   grid-gap: 20px;
>   gap: 20px;
> }
> ```

### Wiederholung von Spurauflistungen

Sie können die gesamte oder nur einen Teil Ihrer Spurauflistung mit der CSS-Funktion `repeat()` wiederholen.
Ändern Sie Ihre Spurauflistung zur Folgenden:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

Jetzt erhalten Sie drei `1fr`-Spuren wie zuvor. Der erste Wert, der an die `repeat()`-Funktion übergeben wird, gibt an, wie oft Sie die Auflistung wiederholen möchten, während der zweite Wert eine Spuraufzählung ist, die eine oder mehrere wiederholbare Spuren enthalten kann.

### Implizite und explizite Grids

Bis zu diesem Punkt haben wir nur Spalten-Spuren spezifiziert, aber Zeilen werden automatisch erstellt, um den Inhalt zu halten. Dieses Konzept hebt den Unterschied zwischen expliziten und impliziten Grids hervor.
Hier ein wenig mehr über den Unterschied zwischen den beiden Typen von Grids:

- **Explizites Grid** wird durch `grid-template-columns` oder `grid-template-rows` erstellt.
- **Implizites Grid** erweitert das definierte explizite Grid, wenn Inhalte außerhalb dieses Grids platziert werden, wie z. B. in den Zeilen durch das Zeichnen zusätzlicher Grid-Linien.

Standardmäßig sind Spuren, die im impliziten Grid erstellt werden, auf `auto` eingestellt, was im Allgemeinen bedeutet, dass sie groß genug sind, um ihren Inhalt zu enthalten. Wenn Sie den impliziten Grid-Spuren eine Größe geben möchten, können Sie die Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} verwenden. Wenn Sie `grid-auto-rows` mit einem Wert von `100px` zu Ihrem CSS hinzufügen, werden diese erstellten Zeilen nun 100 Pixel hoch sein.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```html hidden
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

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  gap: 20px;
}
```

{{ EmbedLiveSample('Implicit_and_explicit_grids', '100%', 400) }}

### Die minmax()-Funktion

Unsere 100 Pixel hohen Spuren werden nicht sehr nützlich sein, wenn wir Inhalte in diese Spuren einfügen, die höher als 100 Pixel sind, was zu einem Überlauf führen würde. Es könnte besser sein, Spuren zu haben, die _mindestens_ 100 Pixel hoch sind und sich dennoch ausdehnen können, wenn mehr Inhalt hinzugefügt wird. Eine grundlegende Tatsache im Web ist, dass man nie wirklich weiß, wie hoch etwas wird — zusätzlicher Inhalt oder größere Schriftgrößen können Probleme mit Designs verursachen, die versuchen, in jeder Dimension pixelgenau zu sein.

Die {{cssxref("minmax", "minmax()")}}-Funktion ermöglicht es uns, eine Mindest- und Höchstgröße für eine Spur festzulegen, zum Beispiel `minmax(100px, auto)`. Die Mindestgröße beträgt 100 Pixel, aber die Höchstgröße ist `auto`, was sich erweitern wird, um mehr Inhalt aufzunehmen. Versuchen Sie, `grid-auto-rows` zu ändern, um einen minmax-Wert zu verwenden:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 20px;
}
```

Wenn Sie zusätzlichen Inhalt hinzufügen, werden Sie sehen, dass sich die Spur erweitert, um ihn aufzunehmen. Beachten Sie, dass die Erweiterung entlang der gesamten Zeile erfolgt.

### So viele Spalten, wie passen

Wir können einige der Lektionen, die wir über die Spuraufzählung gelernt haben, die Wiederholungsnotation und {{cssxref("minmax", "minmax()")}} kombinieren, um ein nützliches Muster zu erstellen. Manchmal ist es hilfreich, Grid zu fragen, so viele Spalten zu erstellen, wie in den Container passen. Wir tun dies, indem wir den Wert von `grid-template-columns` mit der {{cssxref("repeat", "repeat()")}}-Funktion festlegen, aber anstatt eine Zahl zu übergeben, verwenden wir das Schlüsselwort `auto-fit`. Für den zweiten Parameter der Funktion verwenden wir `minmax()` mit einem Mindestwert, der der minimalen Spurgröße entspricht, die wir haben möchten, und einem Maximum von `1fr`.

Versuchen Sie dies jetzt in Ihrer Datei mit dem folgenden CSS:

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```html hidden
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

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  gap: 20px;
}
```

{{ EmbedLiveSample('As_many_columns_as_will_fit', '100%', 400) }}

Das funktioniert, weil Grid so viele 200-Pixel-Spalten erstellt, wie in den Container passen, und dann den restlichen Platz gleichmäßig auf alle Spalten verteilt. Das Maximum ist `1fr`, was, wie wir bereits wissen, den Raum gleichmäßig zwischen den Spuren verteilt.

## Linienbasierte Platzierung

Wir wechseln nun von der Erstellung eines Grids zur Platzierung von Elementen im Grid. Unser Grid hat immer Linien — diese sind nummeriert, beginnend mit 1 und beziehen sich auf den [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) des Dokuments. Beispielsweise würde Spaltenlinie 1 in Englisch (von links nach rechts geschrieben) auf der linken Seite des Grids und Zeilenlinie 1 oben sein, während in Arabisch (von rechts nach links geschrieben) Spaltenlinie 1 auf der rechten Seite wäre.

Um Elemente entlang dieser Linien zu positionieren, können wir die Start- und Endlinien des Grid-Bereichs spezifizieren, in dem ein Element platziert werden soll. Es gibt vier Eigenschaften, die wir verwenden können, um dies zu tun:

- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}

Diese Eigenschaften akzeptieren Liniennummern als ihre Werte, damit wir angeben können, dass ein Element beispielsweise auf Linie 1 beginnen und auf Linie 3 enden soll.
Alternativ können Sie auch Kurzform-Eigenschaften verwenden, mit denen Sie die Start- und Endlinien gleichzeitig angeben können, getrennt durch einen Schrägstrich `/`:

- {{cssxref("grid-column")}} Kurzform für `grid-column-start` und `grid-column-end`
- {{cssxref("grid-row")}} Kurzform für `grid-row-start` und `grid-row-end`

Um dies in Aktion zu sehen, laden Sie die [line-basierte Platzierung Ausgangsdatei](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/8-placement-starting-point.html) herunter oder sehen Sie sie [hier live](https://mdn.github.io/learning-area/css/css-layout/grids/8-placement-starting-point.html). Es hat ein definiertes Grid und einen Artikel umrissen. Sie können sehen, dass die _automatische Platzierung_ jedes Element in seine eigene Zelle im Grid platziert.

Lassen Sie uns alle Elemente unserer Seite durch die Verwendung der Grid-Linien anordnen. Fügen Sie die folgenden Regeln am Ende Ihres CSS hinzu:

```css
header {
  grid-column: 1 / 3;
  grid-row: 1;
}

article {
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

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}

aside {
  border-right: 1px solid #999;
}
```

```html hidden
<div class="container">
  <header>This is my lovely blog</header>
  <article>
    <h1>My article</h1>
    <p>
      Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
      imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus
      massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra
      egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada
      et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac
      imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
      ornare egestas augue ut luctus. Proin blandit quam nec lacus varius
      commodo et a urna. Ut id ornare felis, eget fermentum sapien.
    </p>

    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
      tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
      lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra
      quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>
  </article>
  <aside>
    <h2>Other things</h2>
    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est.
    </p>
  </aside>
  <footer>Contact me@example.com</footer>
</div>
```

{{ EmbedLiveSample('Line-based_placement', '100%', 550) }}

> [!NOTE]
> Sie können auch den Wert `-1` verwenden, um die Endspalte oder Zeilenlinie anzusteuern und dann mit negativen Werten von den Enden zu zählen. Beachten Sie auch, dass Linien immer von den Rändern des expliziten Grids zählen, nicht vom {{Glossary("Grid", "impliziten Grid")}}.

## Positionierung mit grid-template-areas

Eine alternative Möglichkeit, Elemente auf Ihrem Grid anzuordnen, besteht darin, die Eigenschaft {{cssxref("grid-template-areas")}} zu verwenden und den verschiedenen Elementen Ihres Designs einen Namen zu geben.

Entfernen Sie die linienbasierte Positionierung aus dem letzten Beispiel (oder laden Sie die Datei erneut herunter, um einen neuen Ausgangspunkt zu haben) und fügen Sie das folgende CSS hinzu.

```css
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

article {
  grid-area: content;
}

aside {
  grid-area: sidebar;
}

footer {
  grid-area: footer;
}
```

Laden Sie die Seite neu und Sie werden sehen, dass Ihre Elemente genau wie zuvor platziert wurden, ohne dass wir irgendwelche Zeilennummern verwenden mussten!

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}

aside {
  border-right: 1px solid #999;
}
```

```html hidden
<div class="container">
  <header>This is my lovely blog</header>
  <article>
    <h1>My article</h1>
    <p>
      Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
      imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus
      massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra
      egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada
      et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac
      imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
      ornare egestas augue ut luctus. Proin blandit quam nec lacus varius
      commodo et a urna. Ut id ornare felis, eget fermentum sapien.
    </p>

    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
      tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
      lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra
      quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>
  </article>
  <aside>
    <h2>Other things</h2>
    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est.
    </p>
  </aside>
  <footer>Contact me@example.com</footer>
</div>
```

{{ EmbedLiveSample('Positioning_with_grid-template-areas', '100%', 550) }}

Die Regeln für `grid-template-areas` sind wie folgt:

- Sie müssen jede Zelle des Grids füllen.
- Um über zwei Zellen zu spannen, wiederholen Sie den Namen.
- Um eine Zelle leer zu lassen, verwenden Sie einen `.` (Punkt).
- Bereiche müssen rechteckig sein — beispielsweise können Sie keinen L-förmigen Bereich haben.
- Bereiche können nicht an verschiedenen Orten wiederholt werden.

Sie können mit unserem Layout experimentieren, indem Sie ändern, dass der Footer nur unter dem Artikel sitzt und die Sidebar bis ganz unten reicht. Dies ist eine sehr schöne Möglichkeit, ein Layout zu beschreiben, weil es klar aus dem CSS ersichtlich ist, was genau passiert.

## Verschachtelung von Grids und Subgrid

Es ist möglich, ein Grid in ein anderes zu verschachteln, wodurch ein ["Subgrid"](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) entsteht.
Sie können dies tun, indem Sie die Eigenschaft `display: grid` auf ein Rasterelement setzen.

Lassen Sie uns das vorherige Beispiel erweitern, indem wir einen Container für Artikel hinzufügen und ein verschachteltes Grid verwenden, um das Layout mehrerer Artikel zu steuern.
Während wir nur eine Spalte im verschachtelten Grid verwenden, können wir die Zeilen definieren, die in einem Verhältnis von 2:1:1 aufgeteilt werden, indem wir die Eigenschaft `grid-template-rows` verwenden.
Dieser Ansatz ermöglicht es uns, ein Layout zu erstellen, bei dem ein Artikel oben auf der Seite eine große Darstellung hat, während die anderen ein kleineres, vorschauartiges Layout haben.

```html hidden live-sample___nesting-grids
<div class="container">
  <header>This is my lovely blog</header>
  <div class="articles">
    <article>
      <h1>Darmok and Jalad had a picnic at Tanagra</h1>

      <p>
        Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras
        porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed
        auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
        orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac
        ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
        Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
        pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam
        nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum
        sapien.
      </p>

      <button>Read more</button>
    </article>
    <article>
      <h1>Temba held his arms wide</h1>
      <p>
        Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras
        porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed
        auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
        orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac
        ornare ex malesuada et ...
      </p>
      <button>Read more</button>
    </article>
    <article>
      <h1>Gilgamesh, a king, at Uruk</h1>
      <p>
        Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras
        porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed
        auctor cursus massa at porta ...
      </p>
      <button>Read more</button>
    </article>
  </div>
  <aside>
    <h2>Other things</h2>
    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est.
    </p>
    <button>Read more</button>
  </aside>
  <footer>Contact me@example.com</footer>
</div>
```

```css hidden live-sample___nesting-grids
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
header {
  grid-area: header;
}

aside {
  border-right: 1px solid #999;
  grid-area: sidebar;
  padding-right: 10px;
  font-size: 0.8em;
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
.articles {
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  gap: inherit;
}

article {
  padding: 10px;
  border: 2px solid rgb(79 185 227);
  border-radius: 5px;
}
```

{{EmbedLiveSample('nesting-grids', '100%', 1100)}}

Um das Arbeiten mit Layouts in verschachtelten Grids zu erleichtern, können Sie `subgrid` für die Eigenschaften `grid-template-rows` und `grid-template-columns` verwenden. Dies ermöglicht es Ihnen, die im übergeordneten Grid definierten Spuren zu nutzen.

Im folgenden Beispiel verwenden wir [linienbasierte Platzierung](#linienbasierte_platzierung), die dem verschachtelten Grid ermöglicht, über mehrere Spalten und Zeilen des übergeordneten Grids zu spannen.
Wir haben `subgrid` hinzugefügt, um die Spuren des übergeordneten Grids zu erben, wobei ein anderes Layout für die Zeilen innerhalb des verschachtelten Grids hinzugefügt wurde.

```css hidden live-sample___subgrid
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```html live-sample___subgrid
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div id="subgrid">
    <div>Five</div>
    <div>Six</div>
    <div>Seven</div>
    <div>Eight</div>
  </div>
  <div>Nine</div>
  <div>Ten</div>
</div>
```

```css live-sample___subgrid
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 10px;
}

#subgrid {
  grid-column: 1 / 4;
  grid-row: 2 / 4;
  display: grid;
  gap: inherit;
  grid-template-columns: subgrid;
  grid-template-rows: 2fr 1fr;
}
```

{{ EmbedLiveSample('subgrid', '100%', 300) }}

## Grid-Frameworks

Es gibt zahlreiche Grid-Frameworks, die ein 12- oder 16-Spalten-Grid bieten, um Ihnen bei der Anordnung Ihrer Inhalte zu helfen.
Die gute Nachricht ist, dass Sie wahrscheinlich keine Drittanbieter-Frameworks benötigen, um Grid-basierte Layouts zu erstellen — die Grid-Funktionalität ist bereits in der Spezifikation enthalten und wird von den meisten modernen Browsern unterstützt.

[Laden Sie die Ausgangsdatei](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/11-grid-system-starting-point.html) herunter. Diese hat einen Container mit einem 12-Spalten-Grid definiert und dasselbe Markup, das wir in den vorherigen beiden Beispielen verwendet haben. Wir können nun eine linienbasierte Platzierung verwenden, um unsere Inhalte im 12-Spalten-Grid zu platzieren.

```css
header {
  grid-column: 1 / 13;
  grid-row: 1;
}

article {
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

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}

.container {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 20px;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}

aside {
  border-right: 1px solid #999;
}
```

```html hidden
<div class="container">
  <header>This is my lovely blog</header>
  <article>
    <h1>My article</h1>
    <p>
      Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor
      imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus
      massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra
      egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada
      et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac
      imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
      ornare egestas augue ut luctus. Proin blandit quam nec lacus varius
      commodo et a urna. Ut id ornare felis, eget fermentum sapien.
    </p>

    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
      tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
      lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra
      quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>
  </article>
  <aside>
    <h2>Other things</h2>
    <p>
      Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
      ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
      est.
    </p>
  </aside>
  <footer>Contact me@example.com</footer>
</div>
```

{{ EmbedLiveSample('Grid frameworks in CSS grid', '100%', 600) }}

Wenn Sie den [Firefox Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) verwenden, um die Grid-Linien auf Ihrem Design zu überlagern, können Sie sehen, wie unser 12-Spalten-Grid funktioniert.

![Ein 12-Spalten-Grid überlagert unser Design.](learn-grids-inspector.png)

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Grid](/de/docs/Learn/CSS/CSS_layout/Grid_skills).

## Zusammenfassung

In diesem Überblick haben wir die Hauptmerkmale des CSS Grid-Layouts betrachtet. Sie sollten in der Lage sein, es in Ihren Designs zu verwenden. Um tiefer in die Spezifikation einzutauchen, lesen Sie unsere Leitfäden zum Grid-Layout, die unten zu finden sind.

## Siehe auch

- Eine [Liste von Leitfäden](/de/docs/Web/CSS/CSS_grid_layout#guides), die sich auf das CSS Grid-Layout beziehen
- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) Leitfaden
- [CSS Grid Inspector: Grid-Layouts untersuchen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) auf firefox-source-docs
- [Ein vollständiger Leitfaden zu CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/), ein visueller Leitfaden auf CSS-Tricks (2023)
- [Grid Garden](https://cssgridgarden.com/), ein Bildungsspiel, um die Grundlagen von Grid besser zu verstehen, auf cssgridgarden.com

{{PreviousMenuNext("Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout")}}
