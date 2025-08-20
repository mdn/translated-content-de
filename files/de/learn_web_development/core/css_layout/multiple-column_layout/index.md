---
title: Mehrspaltiges Layout
slug: Learn_web_development/Core/CSS_layout/Multiple-column_Layout
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

Die Spezifikation für mehrspaltige Layouts bietet Ihnen eine Methode, um Inhalte in Spalten anzuordnen, wie sie in einer Zeitung zu sehen sind. In diesem Artikel wird erklärt, wie Sie diese Funktion verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Das Strukturieren von Inhalten mit HTML</a
        >) und ein Verständnis, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Lernen, wie man ein mehrspaltiges Layout auf Webseiten erstellt, wie es in einer Zeitung zu finden ist.
      </td>
    </tr>
  </tbody>
</table>

## Ein einfaches Beispiel

Lassen Sie uns erkunden, wie man das mehrspaltige Layout verwendet — oftmals als _multicol_ bezeichnet. Sie können mitmachen, indem Sie die [Multicol-Startdatei herunterladen](https://github.com/mdn/learning-area/blob/main/css/css-layout/multicol/0-starting-point.html) und das CSS an den entsprechenden Stellen hinzufügen. Am Ende des Abschnitts sehen Sie ein Beispiel dafür, wie der endgültige Code aussehen sollte.

### Ein dreispaltiges Layout

Unsere Startdatei enthält ein sehr einfaches HTML: ein Wrapper mit einer Klasse `container`, in dem sich eine Überschrift und einige Absätze befinden.

Das {{htmlelement("div")}} mit der Klasse `container` wird unser Multicol-Container. Wir aktivieren Multicol, indem wir eine von zwei Eigenschaften verwenden: {{cssxref("column-count")}} oder {{cssxref("column-width")}}. Die Eigenschaft `column-count` nimmt eine Zahl als Wert an und erstellt so viele Spalten. Wenn Sie das folgende CSS zu Ihrem Stylesheet hinzufügen und die Seite neu laden, erhalten Sie drei Spalten:

```css
.container {
  column-count: 3;
}
```

Die Spalten, die Sie erstellen, haben flexible Breiten — der Browser berechnet, wie viel Platz jeder Spalte zugewiesen wird.

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
```

```html hidden
<div class="container">
  <h1>Simple multicol example</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer
    ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur
    vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus.
    Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
    sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus.
    Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis,
    eget fermentum sapien.
  </p>

  <p>
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
    ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
    est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
    tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
    lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
    vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</div>
```

{{ EmbedLiveSample('A_three-column_layout', '100%', 400) }}

### Festlegen der column-width

Ändern Sie Ihr CSS so, dass `column-width` wie folgt verwendet wird:

```css
.container {
  column-width: 200px;
}
```

Der Browser wird nun so viele Spalten wie möglich in der von Ihnen angegebenen Größe anzeigen; der verbleibende Raum wird dann zwischen den vorhandenen Spalten aufgeteilt. Das bedeutet, dass Sie nicht genau die Breite erhalten, die Sie angeben, es sei denn, Ihr Container ist genau durch diese Breite teilbar.

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
```

```html hidden
<div class="container">
  <h1>Simple multicol example</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer
    ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur
    vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus.
    Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
    sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus.
    Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis,
    eget fermentum sapien.
  </p>

  <p>
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
    ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
    est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
    tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
    lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
    vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</div>
```

{{ EmbedLiveSample('Setting_column-width', '100%', 400) }}

## Stil der Spalten

Die von Multicol erstellten Spalten können nicht einzeln gestylt werden. Es gibt keine Möglichkeit, eine Spalte größer als andere zu machen oder die Hintergrund- oder Textfarbe einer einzelnen Spalte zu ändern. Sie haben zwei Möglichkeiten, das Erscheinungsbild der Spalten zu ändern:

- Ändern der Größe des Abstands zwischen den Spalten mit {{cssxref("column-gap")}}.
- Hinzufügen einer Linie zwischen den Spalten mit {{cssxref("column-rule")}}.

Verwenden Sie Ihr obiges Beispiel, um die Größe des Abstands zu ändern, indem Sie eine `column-gap`-Eigenschaft hinzufügen. Sie können mit verschiedenen Werten experimentieren — die Eigenschaft akzeptiert jede Längeneinheit.

Fügen Sie nun eine Regel zwischen den Spalten mit `column-rule` hinzu. Ähnlich wie die {{cssxref("border")}} Eigenschaft, die Sie in früheren Lektionen kennengelernt haben, ist `column-rule` eine Kurzform für {{cssxref("column-rule-color")}}, {{cssxref("column-rule-style")}} und {{cssxref("column-rule-width")}} und akzeptiert die gleichen Werte wie `border`.

```css
.container {
  column-count: 3;
  column-gap: 20px;
  column-rule: 4px dotted rgb(79 185 227);
}
```

Versuchen Sie, Regeln mit unterschiedlichen Stilen und Farben hinzuzufügen.

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
```

```html hidden
<div class="container">
  <h1>Simple multicol example</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer
    ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur
    vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus.
    Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
    sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus.
    Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis,
    eget fermentum sapien.
  </p>

  <p>
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
    ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
    est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
    tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
    lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
    vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</div>
```

{{ EmbedLiveSample('Styling_the_columns', '100%', 400) }}

Es ist zu beachten, dass die Regel keine eigene Breite einnimmt. Sie liegt über dem von Ihnen mit `column-gap` erstellten Abstand. Um mehr Platz auf beiden Seiten der Regel zu schaffen, müssen Sie die Größe des `column-gap` erhöhen.

## Spaltenübergreifend

Sie können ein Element dazu bringen, sich über alle Spalten zu erstrecken. In diesem Fall wird der Inhalt dort unterbrochen, wo das Spanning-Element eingeführt wird, und dann unterhalb des Elements fortgesetzt, wodurch ein neuer Satz von Spalten erstellt wird. Um ein Element über alle Spalten zu ziehen, legen Sie den Wert `all` für die Eigenschaft {{cssxref("column-span")}} fest.

> [!NOTE]
> Es ist nicht möglich, ein Element nur über _einige_ Spalten zu ziehen. Die Eigenschaft kann nur die Werte `none` (was der Standard ist) oder `all` haben.

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
  column-count: 3;
  column-gap: 20px;
  column-rule: 4px dotted rgb(79 185 227);
}
h2 {
  column-span: all;
  background-color: rgb(79 185 227);
  color: white;
  padding: 0.5em;
}
```

```html hidden
<div class="container">
  <h1>Simple multicol example</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer
    ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
  </p>

  <h2>Spanning subhead</h2>
  <p>
    Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae
    convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis.
    Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue
    ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id
    ornare felis, eget fermentum sapien.
  </p>

  <p>
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
    ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
    est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
    tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
    lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
    vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</div>
```

{{ EmbedLiveSample('Spanning_columns', '100%', 550) }}

## Spalten und Fragmentierung

Der Inhalt eines mehrspaltigen Layouts wird fragmentiert. Es verhält sich im Wesentlichen so, wie es Inhalte in paginierten Medien tun, wie beim Drucken einer Webseite. Wenn Sie Ihren Inhalt in einen Multicol-Container verwandeln, wird er in Spalten fragmentiert. Damit der Inhalt dies tun kann, muss er _brechen_.

### Fragmentierte Boxen

Manchmal tritt dieser Bruch an Stellen auf, die zu einem schlechten Leseerlebnis führen. Im folgenden Beispiel habe ich Multicol verwendet, um eine Reihe von Boxen zu gestalten, von denen jede eine Überschrift und etwas Text enthält. Die Überschrift wird vom Text getrennt, wenn die Spalten zwischen den beiden fragmentiert werden.

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
```

```html
<div class="container">
  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>
  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>
</div>
```

```css
.container {
  column-width: 250px;
  column-gap: 20px;
}

.card {
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  margin-bottom: 1em;
}
```

{{ EmbedLiveSample('Fragmented_boxes', '100%', 1000) }}

### Festlegen von break-inside

Um dieses Verhalten zu kontrollieren, können wir Eigenschaften aus der [CSS-Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation) Spezifikation verwenden. Diese Spezifikation gibt uns Eigenschaften, um das Brechen von Inhalten in Multicol und in paginierten Medien zu kontrollieren. Zum Beispiel, indem die Eigenschaft {{cssxref("break-inside")}} mit einem Wert von `avoid` zu den Regeln für `.card` hinzugefügt wird. Dies ist der Container der Überschrift und des Textes, also möchten wir nicht, dass es fragmentiert wird.

```css
.card {
  break-inside: avoid;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  margin-bottom: 1em;
}
```

Durch das Hinzufügen dieser Eigenschaft bleiben die Boxen in einem Stück — sie _fragmentieren_ jetzt nicht mehr über die Spalten.

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
```

```html hidden
<div class="container">
  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>
  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>
</div>
```

```css hidden
.container {
  column-width: 250px;
  column-gap: 20px;
}
```

{{ EmbedLiveSample('Setting_break-inside', '100%', 1100) }}

## Zusammenfassung

Sie wissen nun, wie Sie die grundlegenden Funktionen des mehrspaltigen Layouts verwenden können, ein weiteres Werkzeug zu Ihrer Verfügung, wenn Sie eine Layout-Methode für die Designs auswählen, die Sie erstellen.

## Siehe auch

- [CSS-Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation)
- [Verwendung von mehrspaltigen Layouts](/de/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)
