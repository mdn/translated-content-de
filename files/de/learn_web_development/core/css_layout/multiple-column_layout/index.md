---
title: Mehrspaltiges Layout
slug: Learn_web_development/Core/CSS_layout/Multiple-column_Layout
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

Die Spezifikation für mehrspaltige Layouts bietet Ihnen eine Möglichkeit, Inhalte in Spalten anzuordnen, wie Sie es aus Zeitungen kennen. Dieser Artikel erklärt, wie Sie diese Funktion verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >) und ein grundlegendes Verständnis der Funktionsweise von CSS (siehe
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie Sie auf Webseiten ein mehrspaltiges Layout erstellen, wie
        Sie es beispielsweise aus Zeitungen kennen.
      </td>
    </tr>
  </tbody>
</table>

## Ein einfaches Beispiel

Sehen wir uns Schritt für Schritt an einem Beispiel an, wie Sie ein mehrspaltiges Layout verwenden – häufig auch _Multicol_ genannt. Wenn Sie mitmachen möchten, erstellen Sie auf Ihrem Computer eine neue HTML-Datei und fügen Sie den folgenden Inhalt ein:

```html
<!DOCTYPE html>
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

Die folgenden interaktiven Beispiele zeigen Ihnen, wie das gerenderte Ergebnis in jeder Phase aussehen sollte.

### Ein dreispaltiges Layout

Unsere Ausgangsdatei enthält sehr einfaches HTML: einen umschließenden Container mit der Klasse `container`, in dem sich eine Überschrift und einige Absätze befinden.

Das {{htmlelement("div")}} mit der Klasse `container` wird zu unserem Multicol-Container. Wir aktivieren das mehrspaltige Layout mit einer von zwei Eigenschaften: {{cssxref("column-count")}} oder {{cssxref("column-width")}}. Die Eigenschaft `column-count` erwartet eine Zahl als Wert und erzeugt entsprechend viele Spalten. Wenn Sie das folgende CSS zu Ihrem Stylesheet hinzufügen und die Seite neu laden, erhalten Sie drei Spalten:

```css live-sample___column-count
.container {
  column-count: 3;
}
```

Die erzeugten Spalten haben flexible Breiten – der Browser berechnet, wie viel Platz er jeder Spalte zuweist.

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

### `column-width` festlegen

Ändern Sie Ihr CSS wie folgt, um `column-width` zu verwenden:

```css live-sample___column-width
.container {
  column-width: 200px;
}
```

Der Browser erstellt nun so viele Spalten der angegebenen Größe wie möglich. Verbleibender Platz wird anschließend auf die vorhandenen Spalten verteilt. Das bedeutet, dass die Spalten nur dann genau die angegebene Breite haben, wenn die Breite des Containers durch diesen Wert teilbar ist.

{{ EmbedLiveSample('column-width', '100%', 400) }}

## Spalten gestalten

Die von Multicol erzeugten Spalten lassen sich nicht einzeln gestalten. Sie können weder eine Spalte breiter als die anderen machen noch die Hintergrund- oder Textfarbe einer einzelnen Spalte ändern. Sie haben jedoch zwei Möglichkeiten, die Darstellung der Spalten zu beeinflussen:

- Den Abstand zwischen den Spalten mit {{cssxref("column-gap")}} ändern.
- Mit {{cssxref("column-rule")}} eine Trennlinie zwischen den Spalten hinzufügen.

Ändern Sie im obigen Beispiel den Abstand, indem Sie eine `column-gap`-Eigenschaft hinzufügen. Probieren Sie verschiedene Werte aus – die Eigenschaft akzeptiert jede Längeneinheit.

Fügen Sie nun mit `column-rule` eine Trennlinie zwischen den Spalten hinzu. Ähnlich wie die Eigenschaft {{cssxref("border")}}, die Sie in früheren Lektionen kennengelernt haben, ist `column-rule` eine Kurzschreibweise für {{cssxref("column-rule-color")}}, {{cssxref("column-rule-style")}} und {{cssxref("column-rule-width")}} und akzeptiert dieselben Werte wie `border`.

```css live-sample___column-styling live-sample___column-spanning
.container {
  column-count: 3;
  column-gap: 20px;
  column-rule: 4px dotted rgb(79 185 227);
}
```

Probieren Sie Trennlinien mit unterschiedlichen Stilen und Farben aus.

{{ EmbedLiveSample('column-styling', '100%', 400) }}

Beachten Sie, dass die Trennlinie selbst keine Breite beansprucht. Sie liegt in dem Zwischenraum, den Sie mit `column-gap` festgelegt haben. Wenn Sie auf beiden Seiten der Trennlinie mehr Platz benötigen, müssen Sie den Wert von `column-gap` erhöhen.

## Spalten überspannen

Sie können ein Element über alle Spalten hinweg erstrecken. Dabei wird der Inhalt an der Stelle des überspannenden Elements unterbrochen und unterhalb des Elements in einem neuen Satz von Spalten fortgesetzt. Damit ein Element alle Spalten überspannt, setzen Sie die Eigenschaft {{cssxref("column-span")}} auf `all`.

> [!NOTE]
> Ein Element kann nicht nur _einige_ Spalten überspannen. Die Eigenschaft kann nur die Werte `none` (der Standardwert) oder `all` haben.

Fügen Sie die folgende Regel unterhalb der bisherigen Regeln zu Ihrem CSS hinzu:

```css live-sample___column-spanning
h2 {
  column-span: all;
  background-color: rgb(79 185 227);
  color: white;
  padding: 0.5em;
}
```

Fügen Sie nun zwischen dem ersten und dem zweiten Absatz eine Überschrift zweiter Ebene ein:

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

Der gerenderte Code sollte nun so aussehen:

{{ EmbedLiveSample('column-spanning', '100%', 550) }}

## Spalten und Fragmentierung

Der Inhalt eines mehrspaltigen Layouts wird fragmentiert. Im Wesentlichen verhält er sich genauso wie Inhalt in seitenbasierten Medien, etwa beim Drucken einer Webseite. Wenn Sie Ihren Inhalt in einen Multicol-Container umwandeln, wird er auf Spalten aufgeteilt. Dafür muss der Inhalt _umgebrochen_ werden.

### Fragmentierte Boxen

Manchmal erfolgt dieser Umbruch an Stellen, die das Lesen erschweren. Im folgenden Beispiel wird mit Multicol eine Reihe von Boxen angeordnet, die jeweils eine Überschrift und etwas Text enthalten. Wenn der Spaltenumbruch zwischen Überschrift und Text liegt, werden die beiden voneinander getrennt.

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

### `break-inside` festlegen

Um dieses Verhalten zu steuern, können wir Eigenschaften aus der Spezifikation zur [CSS-Fragmentierung](/de/docs/Web/CSS/Guides/Fragmentation) verwenden. Sie stellt Eigenschaften bereit, mit denen sich der Umbruch von Inhalten in mehrspaltigen Layouts und seitenbasierten Medien steuern lässt. Beispielsweise können wir für `.card` die Eigenschaft {{cssxref("break-inside")}} mit dem Wert `avoid` hinzufügen. `.card` enthält die Überschrift und den Text; deshalb möchten wir verhindern, dass dieser Container fragmentiert wird.

```css live-sample___fragmented-boxes-fixed
.card {
  break-inside: avoid;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  margin-bottom: 1em;
}
```

Durch diese Eigenschaft bleiben die Boxen zusammen – sie werden nicht mehr über mehrere Spalten hinweg _fragmentiert_.

{{ EmbedLiveSample('fragmented-boxes-fixed', '100%', 1100) }}

## Zusammenfassung

Sie wissen nun, wie Sie die grundlegenden Funktionen mehrspaltiger Layouts verwenden. Damit steht Ihnen ein weiteres Werkzeug zur Verfügung, wenn Sie eine Layoutmethode für Ihre Designs auswählen.

## Siehe auch

- [CSS-Fragmentierung](/de/docs/Web/CSS/Guides/Fragmentation)
- [Mehrspaltige Layouts verwenden](/de/docs/Web/CSS/Guides/Multicol_layout/Using)
