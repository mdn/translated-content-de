---
title: Mehrspaltiges Layout
slug: Learn_web_development/Core/CSS_layout/Multiple-column_Layout
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die Spezifikation für mehrspaltige Layouts bietet Ihnen eine Methode, um Inhalte in Spalten anzuordnen, wie Sie sie vielleicht in einer Zeitung sehen. Dieser Artikel erklärt, wie Sie dieses Feature nutzen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (lernen Sie mehr über
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (lernen Sie mehr über
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie Sie ein mehrspaltiges Layout auf Webseiten erstellen, wie Sie es vielleicht in einer Zeitung finden.
      </td>
    </tr>
  </tbody>
</table>

## Ein einfaches Beispiel

Lassen Sie uns erkunden, wie man ein mehrspaltiges Layout nutzt — oft als _multicol_ bezeichnet. Sie können mitmachen, indem Sie [die Multicol-Startdatei herunterladen](https://github.com/mdn/learning-area/blob/main/css/css-layout/multicol/0-starting-point.html) und das CSS an den entsprechenden Stellen hinzufügen. Am Ende des Abschnitts können Sie ein Beispiel dafür sehen, wie der endgültige Code aussehen sollte.

### Ein Dreispaltenlayout

Unsere Startdatei enthält einige sehr einfache HTML: einen Wrapper mit der Klasse `container`, in dem sich eine Überschrift und einige Absätze befinden.

Das {{htmlelement("div")}} mit der Klasse container wird zu unserem Multicol-Container. Wir aktivieren Multicol, indem wir eine von zwei Eigenschaften verwenden: {{cssxref("column-count")}} oder {{cssxref("column-width")}}. Die Eigenschaft `column-count` nimmt eine Zahl als Wert und erstellt die entsprechende Anzahl von Spalten. Wenn Sie das folgende CSS zu Ihrem Stylesheet hinzufügen und die Seite neu laden, erhalten Sie drei Spalten:

```css
.container {
  column-count: 3;
}
```

Die von Ihnen erstellten Spalten haben flexible Breiten — der Browser ermittelt, wie viel Platz jede Spalte erhält.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 "Helvetica",
    "Arial",
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

### Festlegen der Spaltenbreite

Ändern Sie Ihr CSS, um `column-width` wie folgt zu verwenden:

```css
.container {
  column-width: 200px;
}
```

Der Browser gibt Ihnen nun so viele Spalten, wie es mit der von Ihnen angegebenen Größe möglich ist; der verbleibende Platz wird dann zwischen den vorhandenen Spalten aufgeteilt. Das bedeutet, dass Sie nicht genau die von Ihnen angegebene Breite erhalten, es sei denn, Ihr Container ist genau durch diese Breite teilbar.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 "Helvetica",
    "Arial",
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

## Gestaltung der Spalten

Die durch Multicol erstellten Spalten können nicht individuell gestaltet werden. Es gibt keine Möglichkeit, eine Spalte größer als andere Spalten zu machen oder die Hintergrund- oder Textfarbe einer einzelnen Spalte zu ändern. Sie haben zwei Möglichkeiten, die Anzeige der Spalten zu ändern:

- Ändern der Größe des Abstands zwischen den Spalten mit {{cssxref("column-gap")}}.
- Hinzufügen einer Trennlinie zwischen den Spalten mit {{cssxref("column-rule")}}.

Verwenden Sie Ihr obiges Beispiel, um die Größe des Abstands zu ändern, indem Sie eine `column-gap`-Eigenschaft hinzufügen. Sie können mit verschiedenen Werten spielen — die Eigenschaft akzeptiert jede Längeneinheit.

Fügen Sie nun eine Regel zwischen den Spalten mit `column-rule` hinzu. Ähnlich wie die Eigenschaft {{cssxref("border")}}, die Sie in früheren Lektionen kennengelernt haben, ist `column-rule` eine Kurzform für {{cssxref("column-rule-color")}}, {{cssxref("column-rule-style")}}, und {{cssxref("column-rule-width")}}, und akzeptiert die gleichen Werte wie `border`.

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
    0.9em/1.2 "Helvetica",
    "Arial",
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

Beachten Sie, dass die Regel keine eigene Breite einnimmt. Sie liegt über dem Abstand, den Sie mit `column-gap` erstellt haben. Um mehr Platz auf jeder Seite der Regel zu schaffen, müssen Sie die `column-gap`-Größe erhöhen.

## Spaltenübergreifung

Sie können bewirken, dass ein Element über alle Spalten gespannt wird. In diesem Fall wird der Inhalt dort unterbrochen, wo das span-element eingeführt wird, und setzt sich dann unterhalb des Elements fort und erstellt eine neue Reihe von Spalten. Um ein Element über alle Spalten zu spannen, geben Sie den Wert `all` für die Eigenschaft {{cssxref("column-span")}} an.

> [!NOTE]
> Es ist nicht möglich, ein Element nur über _einige_ Spalten zu spannen. Die Eigenschaft kann nur die Werte `none` (was der Standardwert ist) oder `all` haben.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 "Helvetica",
    "Arial",
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

Der Inhalt eines mehrspaltigen Layouts wird fragmentiert. Es verhält sich im Wesentlichen genauso, wie Inhalte sich in Paged-Medien verhalten, z. B. wenn Sie eine Webseite drucken. Wenn Sie Ihren Inhalt in einen Multicol-Container verwandeln, wird er in Spalten fragmentiert. Damit der Inhalt dies tun kann, muss er _gebrochen_ werden.

### Fragmentierte Boxen

Manchmal tritt dieser Bruch an Stellen auf, die zu einem schlechten Leseerlebnis führen. Im folgenden Beispiel habe ich Multicol verwendet, um eine Reihe von Boxen darzustellen, von denen jede eine Überschrift und einen Text enthält. Die Überschrift wird vom Text getrennt, wenn die Spalten zwischen beiden fragmentiert werden.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 "Helvetica",
    "Arial",
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

Um dieses Verhalten zu steuern, können wir Eigenschaften aus der [CSS Fragmentierung](/de/docs/Web/CSS/Guides/Fragmentation)-Spezifikation verwenden. Diese Spezifikation gibt uns Eigenschaften zur Steuerung des Brechens von Inhalten in Multicol- und Paged-Medien. Zum Beispiel, indem man die Eigenschaft {{cssxref("break-inside")}} mit einem Wert von `avoid` zu den Regeln für `.card` hinzufügt. Dies ist der Container der Überschrift und des Textes, daher wollen wir nicht, dass er fragmentiert wird.

```css
.card {
  break-inside: avoid;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  margin-bottom: 1em;
}
```

Durch das Hinzufügen dieser Eigenschaft bleiben die Boxen in einem Stück—sie werden jetzt nicht mehr über die Spalten fragmentiert.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 "Helvetica",
    "Arial",
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

Sie wissen jetzt, wie Sie die grundlegenden Merkmale des mehrspaltigen Layouts nutzen, ein weiteres Werkzeug, das Ihnen zur Verfügung steht, wenn Sie eine Layoutmethode für die Designs wählen, die Sie erstellen.

## Siehe auch

- [CSS Fragmentierung](/de/docs/Web/CSS/Guides/Fragmentation)
- [Verwendung von mehrspaltigen Layouts](/de/docs/Web/CSS/Guides/Multicol_layout/Using)
