---
title: Grids
slug: Learn/CSS/CSS_layout/Grids
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout")}}

[CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) ist ein zweidimensionales Layoutsystem für das Web. Es ermöglicht Ihnen, Inhalte in Reihen und Spalten zu organisieren und bietet viele Funktionen, um die Erstellung komplexer Layouts zu vereinfachen. Dieser Artikel erklärt alles, was Sie wissen müssen, um mit dem Grid-Layout zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (Studieren
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (Studieren
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a> und
        <a href="/de/docs/Learn/CSS/Building_blocks">Boxen stylen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das grundlegende Verständnis des Grid-Layouts sowie die Implementierung mit CSS Grid zu verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Grid-Layout?

Ein Grid ist eine Sammlung horizontaler und vertikaler Linien, die ein Muster bilden, an dem wir unsere Designelemente ausrichten können. Sie helfen uns, Layouts zu erstellen, in denen unsere Elemente nicht herumspringen oder die Breite ändern, während wir von Seite zu Seite wechseln, was für mehr Konsistenz auf unseren Websites sorgt.

Ein Grid hat typischerweise **Spalten**, **Reihen** und dann Abstände zwischen jeder Reihe und Spalte. Die Abstände werden allgemein als **Rinnen** (Gutters) bezeichnet.

![CSS-Grid mit beschrifteten Teilen als Reihen, Spalten und Rinnen. Reihen sind die horizontalen Segmente des Grids und Spalten die vertikalen Segmente des Grids. Der Raum zwischen zwei Reihen wird als 'Reihengut' und der Raum zwischen zwei Spalten als 'Spaltenrinne' bezeichnet.](grid.png)

## Erstellen Ihres Grids in CSS

Nachdem Sie entschieden haben, welches Grid Ihr Design benötigt, können Sie das CSS Grid Layout verwenden, um es zu erstellen. Wir werden zuerst die grundlegenden Merkmale des Grid-Layouts betrachten und dann untersuchen, wie man ein einfaches Grid-System für Ihr Projekt erstellt. Das folgende Video bietet eine anschauliche Erklärung zur Verwendung von CSS Grid:

{{EmbedYouTube("KOvGeFUHAC0")}}

### Definieren eines Grids

Lassen Sie uns Grid-Layouts mit Hilfe eines Beispiels ausprobieren. Laden Sie die [Startdatei](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/0-starting-point.html) herunter und öffnen Sie sie in Ihrem Texteditor und Browser (Sie können sie auch [hier live sehen](https://mdn.github.io/learning-area/css/css-layout/grids/0-starting-point.html)). Sie werden ein Beispiel mit einem Container sehen, der einige untergeordnete Elemente enthält. Standardmäßig werden diese Elemente im normalen Fluss angezeigt, sodass sie nacheinander erscheinen. Für den anfänglichen Teil dieser Lektion verwenden wir diese Datei, um zu sehen, wie sich das Grid verhält.

Ähnlich wie bei der Definition von Flexbox definieren Sie ein Grid-Layout, indem Sie den Wert der Eigenschaft {{cssxref("display")}} auf `grid` setzen. Wie im Fall von Flexbox verwandelt die Eigenschaft `display: grid` alle unmittelbaren Kinder des Containers in Grid-Elemente. Fügen Sie Ihrer Datei den folgenden CSS-Code hinzu:

```css
.container {
  display: grid;
}
```

Im Gegensatz zu Flexbox sehen die Elemente nicht sofort anders aus. Die Deklaration von `display: grid` gibt Ihnen ein einspaltiges Grid, sodass Ihre Elemente weiterhin nacheinander wie im normalen Fluss angezeigt werden.

Um etwas zu sehen, das mehr wie ein Grid aussieht, müssen wir dem Grid einige Spalten hinzufügen. Lassen Sie uns drei 200-Pixel-Spalten hinzufügen. Sie können jede Längeneinheit oder Prozentsatz verwenden, um diese Spalten-Tracks zu erstellen.

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

Fügen Sie die zweite Deklaration zu Ihrer CSS-Regel hinzu und laden Sie die Seite neu. Sie sollten sehen, dass sich die Elemente so umgeordnet haben, dass sich eines in jeder Zelle des Grids befindet.

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

Neben der Erstellung von Grids mit Längen und Prozentsätzen können wir [`fr`](/de/docs/Web/CSS/flex_value) verwenden. Die `fr`-Einheit repräsentiert einen Bruchteil des verfügbaren Raums im Grid-Container, um Grid-Reihen und -Spalten flexibel zu dimensionieren.

Ändern Sie Ihre Track-Liste auf die folgende Definition, um drei `1fr`-Tracks zu erstellen:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Sie haben jetzt flexible Tracks. Die `fr`-Einheit verteilt den Raum proportional. Sie können für Ihre Tracks unterschiedliche positive Werte angeben, wie folgt:

```css
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
```

Der erste Track erhält `2fr` des verfügbaren Raums und die anderen beiden Tracks erhalten `1fr`, sodass der erste Track größer wird. Sie können `fr`-Einheiten mit festen Längeneinheiten mischen. In diesem Fall wird der für die festen Tracks benötigte Raum zuerst verbraucht, bevor der verbleibende Raum auf die anderen Tracks verteilt wird.

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
> Die `fr`-Einheit verteilt _verfügbaren_ Raum, nicht _allen_ Raum. Daher wird bei einem Ihrer Tracks mit etwas Großem darin weniger freier Raum zum Teilen vorhanden sein.

### Zwischenräume zwischen den Tracks

Um Zwischenräume zwischen den Tracks zu schaffen, verwenden wir die Eigenschaften:

- {{cssxref("column-gap")}} für Zwischenräume zwischen Spalten
- {{cssxref("row-gap")}} für Zwischenräume zwischen Reihen
- {{cssxref("gap")}} als Kurzform für beide

```css
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
}
```

Diese Zwischenräume können jede Längeneinheit oder Prozentsatz sein, aber keine `fr`-Einheit.

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
> Die `gap`-Eigenschaften (`column-gap`, `row-gap` und `gap`) wurden früher mit `grid-` vorangestellt. Die Spezifikation hat sich geändert, aber die vorangestellten Versionen werden als Alias beibehalten. Um sicherer zu gehen und Ihren Code kugelsicher zu machen, können Sie beide Eigenschaften hinzufügen:
>
> ```css
> .container {
>   display: grid;
>   grid-template-columns: 2fr 1fr 1fr;
>   grid-gap: 20px;
>   gap: 20px;
> }
> ```

### Wiederholung von Track-Listings

Sie können das gesamte oder nur einen Teil Ihres Track-Listings mithilfe der CSS `repeat()`-Funktion wiederholen.
Ändern Sie Ihr Track-Listing auf die folgende:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

Sie erhalten nun wie zuvor drei `1fr`-Tracks. Der erste Wert, der an die `repeat()`-Funktion übergeben wird, gibt die Anzahl der Wiederholungen an, während der zweite Wert ein Track-Listing darstellt, das eines oder mehrere Tracks enthält, die Sie wiederholen möchten.

### Implizite und explizite Grids

Bisher haben wir nur Spalten-Tracks spezifiziert, aber Reihen werden automatisch erstellt, um den Inhalt zu halten. Dieses Konzept hebt den Unterschied zwischen expliziten und impliziten Grids hervor.
Hier ist ein bisschen mehr über den Unterschied zwischen den beiden Arten von Grids:

- **Explizites Grid** wird mit `grid-template-columns` oder `grid-template-rows` erstellt.
- **Implizites Grid** erweitert das definierte explizite Grid, wenn Inhalt außerhalb dieses Grids platziert wird, z. B. in den Reihen durch zusätzliche Grid-Linien.

Standardmäßig sind Tracks, die im impliziten Grid erstellt werden, `auto` dimensioniert, was im Allgemeinen bedeutet, dass sie groß genug sind, um ihren Inhalt zu enthalten. Wenn Sie impliziten Grid-Tracks eine Größe geben möchten, können Sie die Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} verwenden. Wenn Sie `grid-auto-rows` mit einem Wert von `100px` zu Ihrem CSS hinzufügen, sehen Sie, dass diese erstellten Reihen jetzt 100 Pixel hoch sind.

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

### Die minmax() Funktion

Unsere 100 Pixel hohen Tracks wären nicht sehr nützlich, wenn wir Inhalte in diese Tracks hinzufügen, die höher als 100 Pixel sind, was einen Überlauf verursachen würde. Es könnte besser sein, Tracks zu haben, die mindestens 100 Pixel hoch sind und sich dennoch erweitern können, wenn mehr Inhalt hinzugefügt wird. Eine ziemlich grundlegende Tatsache über das Web ist, dass Sie nie wirklich wissen, wie hoch etwas sein wird — zusätzlicher Inhalt oder größere Schriftgrößen können bei Designs, die versuchen, pixelgenau in jeder Dimension zu sein, Probleme verursachen.

Die Funktion {{cssxref("minmax", "minmax()")}} ermöglicht es uns, eine Mindest- und Höchstgröße für einen Track festzulegen, zum Beispiel `minmax(100px, auto)`. Die Mindestgröße beträgt 100 Pixel, aber das Maximum ist `auto`, das sich erweitert, um mehr Inhalt aufzunehmen. Versuchen Sie, `grid-auto-rows` auf einen minmax-Wert zu ändern:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 20px;
}
```

Wenn Sie zusätzlichen Inhalt hinzufügen, sehen Sie, dass sich der Track erweitert, um ihn aufzunehmen. Beachten Sie, dass die Erweiterung entlang der Reihe erfolgt.

### So viele Spalten wie passen

Wir können einige der Lektionen kombinieren, die wir über Track-Listing, Wiederholnotation und {{cssxref("minmax", "minmax()")}} gelernt haben, um ein nützliches Muster zu erstellen. Manchmal ist es hilfreich, in der Lage zu sein, Grid zu bitten, so viele Spalten zu erstellen, wie in den Container passen. Wir tun dies, indem wir den Wert von `grid-template-columns` mithilfe der {{cssxref("repeat", "repeat()")}}-Funktion festlegen, aber anstatt eine Zahl zu übergeben, übergeben Sie das Schlüsselwort `auto-fit`. Für den zweiten Parameter der Funktion verwenden wir `minmax()` mit einem Mindestwert, der der minimalen Track-Größe entspricht, die wir haben möchten, und einem Maximum von `1fr`.

Versuchen Sie, dies jetzt in Ihrer Datei mit dem folgenden CSS zu testen:

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

Dies funktioniert, weil Grid so viele 200-Pixel-Spalten erstellt, wie in den Container passen, und dann den verbleibenden Raum gleichmäßig auf die Spalten verteilt. Das Maximum ist `1fr`, das, wie wir bereits wissen, den Raum gleichmäßig zwischen den Tracks verteilt.

## Linienbasierte Platzierung

Wir bewegen uns nun vom Erstellen eines Grids zur Platzierung von Dingen auf dem Grid. Unser Grid hat immer Linien — diese sind beginnend bei 1 nummeriert und beziehen sich auf den [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) des Dokuments. Beispielsweise würde die Spaltenlinie 1 im Englischen (das von links nach rechts geschrieben wird) sich auf der linken Seite des Grids befinden und die Reihenfolge 1 oben, während sich die Spaltenlinie 1 im Arabischen (rechts-nach-links geschrieben) auf der rechten Seite befindet.

Um Elemente entlang dieser Linien zu positionieren, können wir die Start- und Endlinien des Gridbereichs angeben, in dem ein Element platziert werden soll. Es gibt vier Eigenschaften, die wir dafür verwenden können:

- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}

Diese Eigenschaften akzeptieren Zeilennummern als ihre Werte, sodass wir angeben können, dass ein Element beispielsweise auf Linie 1 beginnen und auf Linie 3 enden soll. Alternativ können Sie auch Kurzform-Eigenschaften verwenden, mit denen Sie die Start- und Endlinien gleichzeitig durch einen Schrägstrich `/` getrennt angeben können:

- {{cssxref("grid-column")}} Kurzform für `grid-column-start` und `grid-column-end`
- {{cssxref("grid-row")}} Kurzform für `grid-row-start` und `grid-row-end`

Um dies in Aktion zu sehen, laden Sie die [Startdatei für die linienbasierte Platzierung](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/8-placement-starting-point.html) herunter oder [sehen Sie sie hier live](https://mdn.github.io/learning-area/css/css-layout/grids/8-placement-starting-point.html). Es hat ein definiertes Grid und einen einfachen Umrissartikel. Sie können sehen, dass _Autoplatzierung_ jedes Element in seine eigene Zelle im Grid platziert.

Lassen Sie uns alle Elemente für unsere Seite anordnen, indem wir die Grid-Linien verwenden. Fügen Sie die folgenden Regeln am Ende Ihres CSS hinzu:

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
> Sie können auch den Wert `-1` verwenden, um die Endzeile oder Reihende zuzuordnen und dann von Ende mit negativen Werten nach innen zählen. Beachten Sie auch, dass die Linien immer von den Rändern des expliziten Grids gezählt werden, nicht vom [impliziten Grid](/de/docs/Glossary/Grid).

## Positionierung mit grid-template-areas

Eine alternative Möglichkeit, Elemente auf Ihrem Grid anzuordnen, ist die Verwendung der Eigenschaft {{cssxref("grid-template-areas")}} und den verschiedenen Elementen Ihres Designs einen Namen zu geben.

Entfernen Sie die linienbasierte Positionierung aus dem letzten Beispiel (oder laden Sie die Datei erneut herunter, um einen frischen Ausgangspunkt zu haben) und fügen Sie das folgende CSS hinzu.

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

Laden Sie die Seite neu und Sie werden sehen, dass Ihre Elemente genauso platziert wurden wie zuvor, ohne dass wir irgendwelche Liniennummern verwenden mussten!

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

- Sie müssen jede Zelle des Grids ausgefüllt haben.
- Um über zwei Zellen zu spannen, den Namen wiederholen.
- Um eine Zelle leer zu lassen, verwenden Sie ein `.` (Punkt).
- Bereiche müssen rechteckig sein — beispielsweise können Sie keinen L-förmigen Bereich haben.
- Bereiche können nicht in verschiedenen Positionen wiederholt werden.

Sie können mit unserem Layout herumspielen, indem Sie den Footer so ändern, dass er nur unter dem Artikel sitzt und die Seitenleiste über die gesamte Länge läuft. Dies ist eine sehr schöne Möglichkeit, ein Layout zu beschreiben, weil aus dem CSS klar ersichtlich ist, was genau passiert.

## Verschachtelte Grids und Subgrid

Es ist möglich, ein Grid in ein anderes Grid einzubetten und ein ["Subgrid"](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) zu erstellen. Sie können dies tun, indem Sie die Eigenschaft `display: grid` auf ein Grid-Element setzen.

Lassen Sie uns das vorherige Beispiel erweitern, indem wir einen Container für Artikel hinzufügen und ein verschachteltes Grid verwenden, um das Layout mehrerer Artikel zu steuern. Während wir nur eine Spalte im verschachtelten Grid verwenden, können wir die Reihen in ein Verhältnis von 2:1:1 aufteilen, indem wir die Eigenschaft `grid-template-rows` verwenden. Dieser Ansatz ermöglicht es uns, ein Layout zu erstellen, in dem ein Artikel oben auf der Seite eine große Anzeige hat, während die anderen ein kleineres, vorschauähnliches Layout haben.

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

Um das Arbeiten mit Layouts in verschachtelten Grids zu erleichtern, können Sie `subgrid` auf den Eigenschaften `grid-template-rows` und `grid-template-columns` verwenden. Dies ermöglicht es Ihnen, die in dem übergeordneten Grid definierten Tracks zu nutzen.

Im folgenden Beispiel verwenden wir [linienbasierte Platzierung](#linienbasierte_platzierung), wodurch es dem verschachtelten Grid ermöglicht wird, über mehrere Spalten und Reihen des übergeordneten Grids zu spannen. Wir haben `subgrid` hinzugefügt, um die Spaltentracks des übergeordneten Grids zu erben, während wir in dem verschachtelten Grid ein anderes Layout für die Reihen hinzufügen.

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

Zahlreiche Grid-Frameworks sind verfügbar, die ein 12- oder 16-Spalten-Grid anbieten, um Ihnen beim Layouten Ihres Inhalts zu helfen. Die gute Nachricht ist, dass Sie wahrscheinlich keine Drittanbieter-Frameworks benötigen, um grid-basierte Layouts zu erstellen — die Grid-Funktionalität ist bereits in der Spezifikation enthalten und wird von den meisten modernen Browsern unterstützt.

[Laden Sie die Startdatei herunter](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/11-grid-system-starting-point.html). Diese enthält einen Container mit einem 12-Spalten-Grid und dem gleichen Markup, das wir in den beiden vorherigen Beispielen verwendet haben. Wir können jetzt die linienbasierte Platzierung verwenden, um unseren Inhalt auf dem 12-Spalten-Grid zu platzieren.

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

Wenn Sie den [Firefox-Grid-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) verwenden, um die Grid-Linien auf Ihrem Design zu überlagern, können Sie sehen, wie unser 12-Spalten-Grid funktioniert.

![Ein 12-Spalten-Grid überlagert unser Design.](learn-grids-inspector.png)

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: Grid](/de/docs/Learn/CSS/CSS_layout/Grid_skills).

## Zusammenfassung

In dieser Übersicht haben wir die Hauptmerkmale des CSS-Grid-Layouts untersucht. Sie sollten in der Lage sein, es in Ihren Designs zu verwenden. Um weiter in die Spezifikation einzutauchen, lesen Sie unsere Leitfäden zum Grid-Layout, die unten zu finden sind.

## Siehe auch

- Eine [Liste der Leitfäden](/de/docs/Web/CSS/CSS_grid_layout#guides) zum CSS-Grid-Layout
- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) Leitfaden
- [CSS-Grid-Inspektor: Untersuchen Sie Grid-Layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) auf firefox-source-docs
- [Ein vollständiger Leitfaden zu CSS-Grid](https://css-tricks.com/snippets/css/complete-guide-grid/), ein visueller Leitfaden auf CSS-Tricks (2023)
- [Grid Garden](https://cssgridgarden.com/), ein Lernspiel, um die Grundlagen des Grids auf cssgridgarden.com besser zu verstehen und zu erlernen

{{PreviousMenuNext("Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout")}}
