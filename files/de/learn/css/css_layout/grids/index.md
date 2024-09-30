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
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a> und
        <a href="/de/docs/Learn/CSS/Building_blocks">Stylen von Boxen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die grundlegenden Konzepte des Grid-Layouts verstehen sowie lernen, wie man es mit CSS-Grid implementiert.
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Grid-Layout?

Ein Grid ist eine Sammlung horizontaler und vertikaler Linien, die ein Muster erstellen, woran wir unsere Designelemente ausrichten können. Sie helfen uns dabei, Layouts zu erstellen, in denen unsere Elemente nicht herumspringen oder ihre Breite ändern, wenn wir von Seite zu Seite wechseln. Dies sorgt für größere Konsistenz auf unseren Websites.

Ein Grid hat typischerweise **Spalten**, **Reihen** und dann Lücken zwischen jeder Reihe und Spalte. Die Lücken werden üblicherweise als **Rinnen** bezeichnet.

![CSS-Grid mit als Reihen, Spalten und Rinnen gekennzeichneten Teilen. Reihen sind die horizontalen Segmente des Grids und Spalten die vertikalen Segmente. Der Raum zwischen zwei Reihen wird als 'Reihenrinne' und der Raum zwischen zwei Spalten als 'Spaltenrinne' bezeichnet.](grid.png)

## Erstellen Ihres Grids in CSS

Nachdem Sie sich für das Grid entschieden haben, das Ihr Design benötigt, können Sie mit dem CSS Grid Layout erstellen. Wir werden uns zuerst die grundlegenden Funktionen des Grid-Layouts ansehen und dann erkunden, wie Sie ein einfaches Gridsystem für Ihr Projekt erstellen können. Das folgende Video bietet eine nette visuelle Erklärung zur Verwendung von CSS Grid:

{{EmbedYouTube("KOvGeFUHAC0")}}

### Definieren eines Grids

Lassen Sie uns Grid-Layouts mit Hilfe eines Beispiels ausprobieren. Laden Sie die [Ausgangsdatei](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/0-starting-point.html) herunter und öffnen Sie sie in Ihrem Texteditor und Browser (Sie können sie auch [hier live ansehen](https://mdn.github.io/learning-area/css/css-layout/grids/0-starting-point.html)). Sie sehen ein Beispiel mit einem Container, der einige Kind-Elemente enthält. Standardmäßig werden diese Elemente im normalen Fluss angezeigt, wodurch sie eines unter dem anderen erscheinen. Im ersten Teil dieser Lektion verwenden wir diese Datei, um zu sehen, wie sich ihr Grid verhält.

Ähnlich wie bei der Definition von Flexbox definieren Sie ein Grid-Layout, indem Sie den Wert der {{cssxref("display")}}-Eigenschaft auf `grid` setzen. Wie im Fall von Flexbox verwandelt die Eigenschaft `display: grid` alle direkten Kinder des Containers in Grid-Elemente. Fügen Sie Ihrer Datei das folgende CSS hinzu:

```css
.container {
  display: grid;
}
```

Anders als bei Flexbox sehen die Elemente nicht sofort anders aus. Das Deklarieren von `display: grid` gibt Ihnen ein Ein-Spalten-Grid, sodass Ihre Elemente weiterhin wie im normalen Fluss untereinander angezeigt werden.

Um etwas zu sehen, das mehr nach einem Grid aussieht, müssen wir dem Grid einige Spalten hinzufügen. Fügen wir drei Spalten mit einer Breite von 200 Pixeln hinzu. Sie können jede Längeneinheit oder Prozentwerte verwenden, um diese Spaltenspuren zu erstellen.

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

Fügen Sie die zweite Deklaration zu Ihrer CSS-Regel hinzu und laden Sie die Seite neu. Sie sollten sehen, dass die Elemente sich so neu angeordnet haben, dass sich eines in jeder Zelle des Grids befindet.

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

Neben der Erstellung von Grids mit Längen und Prozentwerten können wir die [`fr`](/de/docs/Web/CSS/flex_value) Einheit verwenden. Die `fr`-Einheit repräsentiert einen Bruchteil des verfügbaren Raums im Grid-Container zur flexiblen Größenanpassung von Grid-Reihen und -Spalten.

Ändern Sie Ihre Spurliste zu folgender Definition, indem Sie drei `1fr`-Spuren erstellen:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Sie haben nun flexible Spuren. Die `fr`-Einheit verteilt den Raum proportional. Sie können für Ihre Spuren unterschiedliche positive Werte angeben, z.B.:

```css
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
```

Die erste Spur erhält `2fr` des verfügbaren Raums und die anderen beiden Spuren erhalten `1fr`, wodurch die erste Spur größer wird. Sie können `fr`-Einheiten mit festen Längeneinheiten mischen. In diesem Fall wird zuerst der benötigte Raum für die festen Spuren verbraucht, bevor der verbleibende Raum auf die anderen Spuren verteilt wird.

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
> Die `fr`-Einheit verteilt _verfügbaren_ Raum, nicht _den gesamten_ Raum. Daher gibt es, wenn eine Ihrer Spuren etwas Großes enthält, weniger freien Raum zu verteilen.

### Lücken zwischen Spuren

Um Lücken zwischen den Spuren zu erstellen, verwenden wir die Eigenschaften:

- {{cssxref("column-gap")}} für Lücken zwischen den Spalten
- {{cssxref("row-gap")}} für Lücken zwischen den Reihen
- {{cssxref("gap")}} als Kurzform für beide

```css
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
}
```

Diese Lücken können jede Längeneinheit oder Prozentsätze sein, jedoch nicht eine `fr`-Einheit.

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
> Die `gap`-Eigenschaften (`column-gap`, `row-gap` und `gap`) wurden früher mit `grid-` vorangestellt. Die Spezifikation hat sich geändert, aber die vorangestellten Versionen werden als Alias beibehalten. Um auf Nummer sicher zu gehen und Ihren Code solider zu machen, können Sie beide Eigenschaften hinzufügen:
>
> ```css
> .container {
>   display: grid;
>   grid-template-columns: 2fr 1fr 1fr;
>   grid-gap: 20px;
>   gap: 20px;
> }
> ```

### Wiederholen von Spuraufstellungen

Sie können alle oder nur einen Teil Ihrer Spuraufstellung mithilfe der CSS-`repeat()`-Funktion wiederholen. Ändern Sie Ihre Spuraufstellung wie folgt:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

Sie erhalten nun drei `1fr`-Spuren wie zuvor. Der erste Wert, der an die Funktion `repeat()` übergeben wird, gibt die Anzahl der Wiederholungen der Aufstellung an, während der zweite Wert eine Spuraufstellung ist, die eine oder mehrere Spuren enthalten kann, die Sie wiederholen möchten.

### Implizite und explizite Grids

Bis zu diesem Punkt haben wir nur Säulenspuren angegeben, aber Reihen werden automatisch erstellt, um den Inhalt zu halten. Dieses Konzept hebt den Unterschied zwischen expliziten und impliziten Grids hervor. Hier ist ein bisschen mehr über den Unterschied zwischen den beiden Arten von Grids erklärt:

- **Explizites Grid** wird durch `grid-template-columns` oder `grid-template-rows` erstellt.
- **Implizites Grid** erweitert das definierte explizite Grid, wenn Inhalte außerhalb dieses Grids platziert werden, wie z.B. in den Zeilen durch das Zeichnen zusätzlicher Gitternetzlinien.

Standardmäßig sind die in impliziten Grids erstellten Spuren `auto`-groß, was im Allgemeinen bedeutet, dass sie groß genug sind, um ihren Inhalt zu enthalten. Wenn Sie impliziten Grid-Spuren eine Größe zuweisen möchten, können Sie die Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} verwenden. Wenn Sie `grid-auto-rows` mit einem Wert von `100px` zu Ihrem CSS hinzufügen, sehen Sie, dass diese erstellten Reihen nun 100 Pixel hoch sind.

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

Unsere 100-Pixel hohen Spuren sind nicht sehr nützlich, wenn wir Inhalte in diese Spuren einfügen, die höher als 100 Pixel sind, da es sonst zu einem Überlauf kommen würde. Es könnte besser sein, Spuren zu haben, die _mindestens_ 100 Pixel hoch sind und sich dennoch erweitern können, wenn mehr Inhalte hinzugefügt werden. Eine ziemlich grundlegende Tatsache über das Web ist, dass man nie wirklich weiß, wie hoch etwas sein wird - zusätzlicher Inhalt oder größere Schriftgrößen können Probleme bei Designs verursachen, die versuchen, pixelgenau in jeder Dimension zu sein.

Die {{cssxref("minmax", "minmax()")}}-Funktion ermöglicht es uns, eine Mindest- und Maximalgröße für eine Spur festzulegen, z.B. `minmax(100px, auto)`. Die Mindestgröße beträgt 100 Pixel, aber das Maximum ist `auto`, was sich erweitert, um mehr Inhalte aufzunehmen. Versuchen Sie, `grid-auto-rows` zu ändern, damit ein minmax-Wert verwendet wird:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 20px;
}
```

Wenn Sie zusätzlichen Inhalt hinzufügen, sehen Sie, dass sich die Spur erweitert, um diesen zu passen. Beachten Sie, dass die Erweiterung entlang der gesamten Reihe erfolgt.

### So viele Spalten wie passen

Wir können einige der Lektionen, die wir über die Spuraufstellung, Wiederholungsnotation und {{cssxref("minmax", "minmax()")}} gelernt haben, kombinieren, um ein nützliches Muster zu erstellen. Manchmal ist es hilfreich, dem Grid zu sagen, dass so viele Spalten wie möglich in den Container passen sollen. Wir tun dies, indem wir den Wert von `grid-template-columns` mit der {{cssxref("repeat", "repeat()")}}-Funktion setzen, aber anstelle einer Zahl das Schlüsselwort `auto-fit` verwenden. Für den zweiten Parameter der Funktion verwenden wir `minmax()` mit einem Mindestwert, der der Mindestspaltengröße entspricht, die wir haben möchten, und einem Maximum von `1fr`.

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

Dies funktioniert, weil das Grid so viele 200-Pixel breite Spalten wie möglich in den Container erstellt und dann den verbleibenden Raum unter allen Spalten teilt. Das Maximum ist `1fr`, was, wie wir bereits wissen, den Raum gleichmäßig zwischen den Spuren verteilt.

## Linienbasierte Platzierung

Wir gehen jetzt über das Erstellen eines Grids zur Platzierung von Elementen im Grid. Unser Grid hat immer Linien - diese sind von 1 an nummeriert und beziehen sich auf den [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) des Dokuments. Beispielsweise wäre die Spaltenlinie 1 in Englisch (von links nach rechts geschrieben) auf der linken Seite des Grids und die Zeilenlinie 1 oben, während in Arabisch (von rechts nach links geschrieben) die Spaltenlinie 1 auf der rechten Seite wäre.

Um Elemente entlang dieser Linien zu positionieren, können wir die Start- und Endlinien des Grid-Bereichs angeben, in dem ein Element platziert werden soll. Es gibt vier Eigenschaften, die wir dafür verwenden können:

- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}

Diese Eigenschaften akzeptieren Liniennummern als Werte, sodass wir z.B. angeben können, dass ein Element auf Linie 1 beginnen und auf Linie 3 enden soll. Alternativ können Sie auch Kurzformeigenschaften verwenden, die es Ihnen ermöglichen, die Start- und Endlinien gleichzeitig durch einen Schrägstrich `/` getrennt anzugeben:

- {{cssxref("grid-column")}} Kurzform für `grid-column-start` und `grid-column-end`
- {{cssxref("grid-row")}} Kurzform für `grid-row-start` und `grid-row-end`

Um dies in Aktion zu sehen, laden Sie die [Startdatei zur linienbasierten Platzierung](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/8-placement-starting-point.html) herunter oder [sehen Sie sie sich hier live an](https://mdn.github.io/learning-area/css/css-layout/grids/8-placement-starting-point.html). Sie hat ein definiertes Grid und einen einfachen Artikel skizziert. Sie können sehen, dass die _automatische Platzierung_ jedes Element in seiner eigenen Zelle im Grid platziert.

Lassen Sie uns alle Elemente für unsere Website anordnen, indem wir die Grid-Linien verwenden. Fügen Sie die folgenden Regeln am Ende Ihres CSS hinzu:

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
> Sie können auch den Wert `-1` verwenden, um die Endspalten- oder Zeilenlinie anzusprechen, und dann von der Endlinie aus nach innen mit negativen Werten zählen. Beachten Sie auch, dass Linien immer von den Rändern des expliziten Grids zählen, nicht vom [impliziten Grid](/de/docs/Glossary/Grid).

## Positionierung mit grid-template-areas

Eine alternative Möglichkeit, Elemente in Ihrem Grid anzuordnen, ist die Verwendung der {{cssxref("grid-template-areas")}}-Eigenschaft und das Benennen der verschiedenen Elemente Ihres Designs.

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

Laden Sie die Seite neu und Sie werden sehen, dass Ihre Artikel genauso platziert wurden wie zuvor, ohne dass wir irgendwelche Linienzahlen verwenden mussten!

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
- Flächen müssen rechteckig sein — z.B. können Sie keine L-förmige Fläche haben.
- Flächen dürfen nicht an verschiedenen Stellen wiederholt werden.

Sie können mit unserem Layout experimentieren, indem Sie z.B. die Fußzeile nur unterhalb des Artikels platzieren und die Seitenleiste nach unten erweitern. Dies ist eine sehr schöne Art, ein Layout zu beschreiben, da es aus dem CSS klar ersichtlich ist, was genau passiert.

## Verschachtelte Grids und Subgrid

Es ist möglich, ein Grid innerhalb eines anderen Grids zu verschachteln und ein ["Subgrid"](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) zu erstellen. Sie können dies tun, indem Sie die `display: grid`-Eigenschaft auf einem Grid-Element setzen.

Lassen Sie uns das vorherige Beispiel erweitern, indem wir einen Container für Artikel hinzufügen und ein verschachteltes Grid verwenden, um das Layout mehrerer Artikel zu steuern. Während wir nur eine Spalte im verschachtelten Grid verwenden, können wir die Reihen auf ein Verhältnis von 2:1:1 aufteilen, indem wir die Eigenschaft `grid-template-rows` verwenden. Dieser Ansatz ermöglicht es uns, ein Layout zu erstellen, bei dem ein Artikel oben auf der Seite eine große Anzeige hat, während die anderen eine kleinere, vorschauähnliche Darstellung haben.

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

Um es einfacher zu machen, mit Layouts in verschachtelten Grids zu arbeiten, können Sie `subgrid` für die Eigenschaften `grid-template-rows` und `grid-template-columns` verwenden. Dadurch können Sie die in dem übergeordneten Grid definierten Spuren nutzen.

Im folgenden Beispiel verwenden wir [linienbasierte Platzierung](#linienbasierte_platzierung), was es dem verschachtelten Grid ermöglicht, über mehrere Spalten und Reihen des übergeordneten Grids zu spannen. Wir haben `subgrid` hinzugefügt, um die Spaltenstrecken des übergeordneten Grids zu erben, während für die Reihen innerhalb des verschachtelten Grids ein anderes Layout hinzugefügt wird.

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

Es gibt zahlreiche Grid-Frameworks, die ein 12- oder 16-Spalten-Grid bieten, um Ihnen beim Layouten Ihrer Inhalte zu helfen. Die gute Nachricht ist, dass Sie wahrscheinlich keine Drittanbieter-Frameworks benötigen, um Grid-basierte Layouts zu erstellen - Grid-Funktionen sind bereits in der Spezifikation enthalten und werden von den meisten modernen Browsern unterstützt.

[Laden Sie die Ausgangsdatei herunter](https://github.com/mdn/learning-area/blob/main/css/css-layout/grids/11-grid-system-starting-point.html). Diese hat einen Container mit einem 12-Spalten-Grid definiert und das gleiche Markup, das wir in den vorherigen beiden Beispielen verwendet haben. Wir können jetzt linienbasierte Platzierung verwenden, um unsere Inhalte im 12-Spalten-Grid zu platzieren.

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

Wenn Sie das [Firefox Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) verwenden, um die Gitterlinien über Ihr Design zu legen, können Sie sehen, wie unser 12-Spalten-Grid funktioniert.

![Ein 12-Spalten-Grid, über unser Design gelegt.](learn-grids-inspector.png)

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Können: Grid](/de/docs/Learn/CSS/CSS_layout/Grid_skills).

## Zusammenfassung

In diesem Überblick haben wir die Hauptfunktionen des CSS Grid Layouts behandelt. Sie sollten in der Lage sein, es in Ihren Designs zu verwenden. Um tiefer in die Spezifikation einzutauchen, lesen Sie unsere Leitfäden zum Grid-Layout, die unten aufgeführt sind.

## Siehe auch

- Eine [Liste von Leitfäden](/de/docs/Web/CSS/CSS_grid_layout#guides) zum CSS Grid Layout
- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) Leitfaden
- [CSS Grid Inspector: Untersuchen von Grid-Layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) auf firefox-source-docs
- [Ein vollständiger Leitfaden zu CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/), ein visueller Leitfaden auf CSS-Tricks (2023)
- [Grid Garden](https://cssgridgarden.com/), ein Lernspiel, um die Grundlagen von Grid auf cssgridgarden.com besser zu verstehen

{{PreviousMenuNext("Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout")}}
