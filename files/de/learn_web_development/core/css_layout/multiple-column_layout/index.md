---
title: Mehrspaltiges Layout
slug: Learn_web_development/Core/CSS_layout/Multiple-column_Layout
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

Die Spezifikation für mehrspaltige Layouts bietet Ihnen eine Möglichkeit, Inhalte in Spalten anzuordnen, wie Sie es beispielsweise aus einer Zeitung kennen. In diesem Artikel erfahren Sie, wie Sie diese Funktion verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >) und ein grundlegendes Verständnis davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie Sie auf Webseiten ein mehrspaltiges Layout erstellen, wie
        es beispielsweise in einer Zeitung zu finden ist.
      </td>
    </tr>
  </tbody>
</table>

## Ein einfaches Beispiel

Sehen wir uns Schritt für Schritt an, wie Sie ein mehrspaltiges Layout – oft als _Multicol_ bezeichnet – erstellen. Um mitzumachen, erstellen Sie auf Ihrem lokalen System eine neue HTML-Datei und fügen Sie den folgenden Inhalt ein:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Multicol example</title>
    <style>
      body {
        width: 90%;
        max-width: 900px;
        margin: 2em auto;
        font:
          0.9em/1.2 "Arial",
          "Helvetica",
          sans-serif;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <h1>Simple multicol example</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
        aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
        pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
        at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
        Integer ligula ipsum, tristique sit amet orci vel, viverra egestas
        ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In
        vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet
        turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare
        egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et
        a urna. Ut id ornare felis, eget fermentum sapien.
      </p>

      <p>
        Nam vulputate diam nec tempor bibendum. Donec luctus augue eget
        malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut,
        facilisis sed est. Nam id risus quis ante semper consectetur eget
        aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit
        vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget
        velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus
        in interdum. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </p>
    </div>
  </body>
</html>
```

Die folgenden Live-Beispiele zeigen Ihnen, wie das gerenderte Ergebnis in jeder Phase aussehen sollte.

### Ein dreispaltiges Layout

Unsere Ausgangsdatei enthält sehr einfaches HTML: ein umschließendes Element mit der Klasse `container`, das eine Überschrift und einige Absätze enthält.

Das {{htmlelement("div")}} mit der Klasse `container` wird zu unserem Multicol-Container. Wir aktivieren Multicol mit einer von zwei Eigenschaften: {{cssxref("column-count")}} oder {{cssxref("column-width")}}. Die Eigenschaft `column-count` nimmt eine Zahl als Wert an und erstellt entsprechend viele Spalten. Wenn Sie das folgende CSS zu Ihrem Stylesheet hinzufügen und die Seite neu laden, erhalten Sie drei Spalten:

```css live-sample___column-count
.container {
  column-count: 3;
}
```

Die erstellten Spalten haben flexible Breiten – der Browser berechnet, wie viel Platz jede Spalte erhält.

```css hidden live-sample___column-count live-sample___column-width live-sample___column-styling live-sample___column-spanning
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

```html hidden live-sample___column-count live-sample___column-width live-sample___column-styling
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

{{ EmbedLiveSample('column-count', '100%', 400) }}

### column-width festlegen

Ändern Sie Ihr CSS so, dass es `column-width` verwendet:

```css live-sample___column-width
.container {
  column-width: 200px;
}
```

Der Browser erstellt nun so viele Spalten der angegebenen Breite, wie möglich sind. Verbleibender Platz wird anschließend auf die vorhandenen Spalten verteilt. Das bedeutet, dass die Spalten nur dann genau die angegebene Breite haben, wenn die Breite des Containers ohne Rest durch diesen Wert teilbar ist.

{{ EmbedLiveSample('column-width', '100%', 400) }}

## Spalten gestalten

Die von Multicol erstellten Spalten können nicht einzeln gestaltet werden. Es gibt keine Möglichkeit, eine Spalte breiter als die anderen zu machen oder die Hintergrund- oder Textfarbe einer einzelnen Spalte zu ändern. Sie haben jedoch zwei Möglichkeiten, die Darstellung der Spalten anzupassen:

- Den Abstand zwischen den Spalten mit {{cssxref("column-gap")}} ändern.
- Mit {{cssxref("column-rule")}} eine Trennlinie zwischen den Spalten hinzufügen.

Ändern Sie im obigen Beispiel den Abstand, indem Sie die Eigenschaft `column-gap` hinzufügen. Probieren Sie verschiedene Werte aus – die Eigenschaft akzeptiert jede Längeneinheit.

Fügen Sie nun mit `column-rule` eine Trennlinie zwischen den Spalten hinzu. Ähnlich wie die Eigenschaft {{cssxref("border")}}, die Sie in früheren Lektionen kennengelernt haben, ist `column-rule` eine Kurzschreibweise für {{cssxref("column-rule-color")}}, {{cssxref("column-rule-style")}} und {{cssxref("column-rule-width")}}. Sie akzeptiert dieselben Werte wie `border`.

```css live-sample___column-styling live-sample___column-spanning
.container {
  column-count: 3;
  column-gap: 20px;
  column-rule: 4px dotted rgb(79 185 227);
}
```

Probieren Sie Trennlinien mit unterschiedlichen Stilen und Farben aus.

{{ EmbedLiveSample('column-styling', '100%', 400) }}

Beachten Sie, dass die Trennlinie selbst keine Breite beansprucht. Sie verläuft innerhalb des mit `column-gap` erzeugten Zwischenraums. Wenn Sie auf beiden Seiten der Trennlinie mehr Platz schaffen möchten, müssen Sie den Wert von `column-gap` erhöhen.

## Spalten überspannen

Sie können ein Element über alle Spalten erstrecken. In diesem Fall wird der Inhalt an der Stelle unterbrochen, an der das überspannende Element eingefügt wird. Unterhalb des Elements wird er in einer neuen Gruppe von Spalten fortgesetzt. Damit sich ein Element über alle Spalten erstreckt, legen Sie für die Eigenschaft {{cssxref("column-span")}} den Wert `all` fest.

> [!NOTE]
> Es ist nicht möglich, ein Element nur über _einige_ Spalten zu erstrecken. Die Eigenschaft kann nur die Werte `none` (der Standardwert) oder `all` annehmen.

Fügen Sie Ihrem CSS unterhalb der bisherigen Regeln die folgende Regel hinzu:

```css live-sample___column-spanning
h2 {
  column-span: all;
  background-color: rgb(79 185 227);
  color: white;
  padding: 0.5em;
}
```

Fügen Sie nun zwischen dem ersten und dem zweiten Absatz eine Überschrift der zweiten Ebene ein:

```html
<h2>Spanning subhead</h2>
```

```html hidden live-sample___column-spanning
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

Ihr gerenderter Code sollte nun so aussehen:

{{ EmbedLiveSample('column-spanning', '100%', 550) }}

## Spalten und Fragmentierung

Der Inhalt eines mehrspaltigen Layouts wird fragmentiert. Er verhält sich im Wesentlichen wie Inhalt in paginierten Medien, beispielsweise beim Drucken einer Webseite. Wenn Sie Ihren Inhalt in einen Multicol-Container umwandeln, wird er auf Spalten aufgeteilt. Dazu muss der Inhalt _umgebrochen_ werden.

### Fragmentierte Boxen

Manchmal erfolgt dieser Umbruch an Stellen, die das Lesen erschweren. Im folgenden Beispiel habe ich mit Multicol eine Reihe von Boxen angeordnet, die jeweils eine Überschrift und etwas Text enthalten. Wenn zwischen Überschrift und Text ein Spaltenumbruch erfolgt, werden die beiden voneinander getrennt.

```css hidden live-sample___fragmented-boxes live-sample___fragmented-boxes-fixed
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

```html live-sample___fragmented-boxes live-sample___fragmented-boxes-fixed
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

```css live-sample___fragmented-boxes live-sample___fragmented-boxes-fixed
.container {
  column-width: 250px;
  column-gap: 1em;
}

.card {
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  margin-bottom: 1em;
}
```

{{ EmbedLiveSample('fragmented-boxes', '100%', 1000) }}

### break-inside festlegen

Um dieses Verhalten zu steuern, können wir Eigenschaften aus der Spezifikation zur [CSS-Fragmentierung](/de/docs/Web/CSS/Guides/Fragmentation) verwenden. Sie stellt Eigenschaften bereit, mit denen sich Umbrüche in mehrspaltigen Layouts und paginierten Medien steuern lassen. Fügen Sie beispielsweise den Regeln für `.card` die Eigenschaft {{cssxref("break-inside")}} mit dem Wert `avoid` hinzu. Da `.card` die Überschrift und den Text enthält, möchten wir verhindern, dass dieser Container fragmentiert wird.

```css live-sample___fragmented-boxes-fixed
.card {
  break-inside: avoid;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  margin-bottom: 1em;
}
```

Durch diese Eigenschaft bleiben die Boxen zusammen – sie werden nicht mehr über mehrere Spalten _fragmentiert_.

{{ EmbedLiveSample('fragmented-boxes-fixed', '100%', 1100) }}

## Zusammenfassung

Sie kennen nun die grundlegenden Funktionen mehrspaltiger Layouts. Damit steht Ihnen ein weiteres Werkzeug zur Verfügung, wenn Sie eine Layoutmethode für Ihre Entwürfe auswählen.

## Siehe auch

- [CSS-Fragmentierung](/de/docs/Web/CSS/Guides/Fragmentation)
- [Mehrspaltige Layouts verwenden](/de/docs/Web/CSS/Guides/Multicol_layout/Using)
