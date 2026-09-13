---
title: Mehrspaltiges Layout
slug: Learn_web_development/Core/CSS_layout/Multiple-column_Layout
l10n:
  sourceCommit: 1b7c3c1e03f14c3878e4d8518b0f1a89bedfdc9c
---

Die Spezifikation für das mehrspaltige Layout bietet Ihnen eine Methode, um Inhalte in Spalten anzuordnen, wie Sie sie möglicherweise in einer Zeitung sehen. Dieser Artikel erklärt, wie Sie dieses Feature verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >) und eine Vorstellung, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man ein mehrspaltiges Layout auf Webseiten erstellt, wie man es in einer Zeitung finden könnte.
      </td>
    </tr>
  </tbody>
</table>

## Ein einfaches Beispiel

Lassen Sie uns untersuchen, wie das mehrspaltige Layout verwendet wird – oft als _multicol_ bezeichnet – indem wir Schritt für Schritt ein Beispiel erstellen. Um mitzumachen, erstellen Sie ein neues HTML-Dokument auf Ihrem lokalen System und fügen Sie den folgenden Inhalt ein:

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
          0.9em/1.2 Arial,
          Helvetica,
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

Unten sehen Sie verschiedene Live-Beispiele, die zeigen, wie die gerenderte Ausgabe in jedem Stadium aussehen sollte.

### Ein Drei-Spalten-Layout

Unsere Ausgangsdatei enthält sehr einfaches HTML: einen Wrapper mit der Klasse `container`, in dem sich eine Überschrift und einige Absätze befinden.

Das {{htmlelement("div")}} mit der Klasse container wird unser Multicol-Container. Wir aktivieren Multicol, indem wir eine von zwei Eigenschaften verwenden: {{cssxref("column-count")}} oder {{cssxref("column-width")}}. Die Eigenschaft `column-count` nimmt eine Zahl als Wert an und erstellt diese Anzahl von Spalten. Wenn Sie das folgende CSS zu Ihrem Stylesheet hinzufügen und die Seite neu laden, erhalten Sie drei Spalten:

```css live-sample___column-count
.container {
  column-count: 3;
}
```

Die von Ihnen erstellten Spalten haben flexible Breiten – der Browser bestimmt, wie viel Platz jeder Spalte zugewiesen wird.

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

### Festlegen der Spaltenbreite

Ändern Sie Ihr CSS, um `column-width` wie folgt zu verwenden:

```css live-sample___column-width
.container {
  column-width: 200px;
}
```

Der Browser erstellt nun so viele Spalten, wie es die von Ihnen angegebene Größe zulässt; der verbleibende Raum wird dann zwischen den vorhandenen Spalten aufgeteilt. Das bedeutet, dass Sie nicht genau die von Ihnen angegebene Breite erhalten, es sei denn, Ihr Container ist genau durch diese Breite teilbar.

{{ EmbedLiveSample('column-width', '100%', 400) }}

## Gestaltung der Spalten

Die durch Multicol erstellten Spalten können nicht individuell gestaltet werden. Es gibt keine Möglichkeit, eine Spalte größer als die anderen zu machen oder die Hintergrund- oder Textfarbe einer einzelnen Spalte zu ändern. Sie haben zwei Möglichkeiten, die Darstellung der Spalten zu ändern:

- Ändern der Größe der Lücke zwischen Spalten mit dem {{cssxref("column-gap")}}.
- Hinzufügen einer Linie zwischen den Spalten mit {{cssxref("column-rule")}}.

Verwenden Sie Ihr obiges Beispiel und ändern Sie die Größe der Lücke, indem Sie eine `column-gap`-Eigenschaft hinzufügen. Sie können mit verschiedenen Werten experimentieren – die Eigenschaft akzeptiert jede Längeneinheit.

Fügen Sie nun eine Linie zwischen den Spalten mit `column-rule` hinzu. Ähnlich wie die {{cssxref("border")}}-Eigenschaft, die Sie in früheren Lektionen kennengelernt haben, ist `column-rule` eine Kurzform für {{cssxref("column-rule-color")}}, {{cssxref("column-rule-style")}} und {{cssxref("column-rule-width")}} und akzeptiert die gleichen Werte wie `border`.

```css live-sample___column-styling live-sample___column-spanning
.container {
  column-count: 3;
  column-gap: 20px;
  column-rule: 4px dotted rgb(79 185 227);
}
```

Versuchen Sie, Linien unterschiedlicher Stile und Farben hinzuzufügen.

{{ EmbedLiveSample('column-styling', '100%', 400) }}

Beachten Sie, dass die Linie keine eigene Breite beansprucht. Sie liegt über der mit `column-gap` geschaffenen Lücke. Um mehr Platz auf beiden Seiten der Linie zu schaffen, müssen Sie die `column-gap`-Größe vergrößern.

## Spalten überspannen

Sie können ein Element alle Spalten überspannen lassen. In diesem Fall wird der Inhalt an der Stelle unterbrochen, an der das überspannende Element eingeführt wird, und dann unterhalb des Elements fortgesetzt, wobei ein neues Satz Spalten erstellt wird. Um ein Element alle Spalten überspannen zu lassen, geben Sie den Wert `all` für die Eigenschaft {{cssxref("column-span")}} an.

> [!NOTE]
> Es ist nicht möglich, ein Element nur _einige_ Spalten überspannen zu lassen. Die Eigenschaft kann nur die Werte `none` (was der Standard ist) oder `all` haben.

Fügen Sie die folgende Regel zu Ihrem CSS hinzu, unter den vorherigen:

```css live-sample___column-spanning
h2 {
  column-span: all;
  background-color: rgb(79 185 227);
  color: white;
  padding: 0.5em;
}
```

Fügen Sie nun eine Überschrift der zweiten Ebene zwischen dem ersten und dem zweiten Absatz ein:

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

Ihr gerendertes Code sollte jetzt so aussehen:

{{ EmbedLiveSample('column-spanning', '100%', 550) }}

## Spalten und Fragmentierung

Der Inhalt eines mehrspaltigen Layouts ist fragmentiert. Er verhält sich im Wesentlichen auf die gleiche Weise wie Inhalte in Medien mit Seiten, etwa wenn Sie eine Webseite drucken. Wenn Sie Ihren Inhalt in einen Multicol-Container verwandeln, wird er in Spalten fragmentiert. Damit der Inhalt das tun kann, muss er _brechen_.

### Fragmentierte Boxen

Manchmal erfolgt dieses Brechen an Stellen, die zu einem schlechten Leseerlebnis führen. Im folgenden Beispiel habe ich multicol verwendet, um eine Reihe von Boxen zu gestalten, von denen jede eine Überschrift und etwas Text enthält. Die Überschrift wird vom Text getrennt, wenn die Spalten zwischen den beiden fragmentieren.

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

### Festlegen von break-inside

Um dieses Verhalten zu steuern, können wir Eigenschaften aus der [CSS-Fragmentierung](/de/docs/Web/CSS/Guides/Fragmentation)-Spezifikation verwenden. Diese Spezifikation gibt uns Eigenschaften, um das Brechen von Inhalten in Multicol und in Medien mit Seiten zu steuern. Zum Beispiel, indem Sie die Eigenschaft {{cssxref("break-inside")}} mit einem Wert von `avoid` zu den Regeln für `.card` hinzufügen. Dies ist der Container der Überschrift und des Textes, sodass wir nicht möchten, dass er fragmentiert wird.

```css live-sample___fragmented-boxes-fixed
.card {
  break-inside: avoid;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  margin-bottom: 1em;
}
```

Durch das Hinzufügen dieser Eigenschaft bleiben die Boxen intakt – sie _fragmentieren_ jetzt nicht mehr über die Spalten hinweg.

{{ EmbedLiveSample('fragmented-boxes-fixed', '100%', 1100) }}

## Zusammenfassung

Sie wissen nun, wie Sie die grundlegenden Funktionen des mehrspaltigen Layouts nutzen können, ein weiteres Werkzeug, das Ihnen zur Verfügung steht, wenn Sie eine Layout-Methode für die von Ihnen erstellten Designs auswählen.

## Siehe auch

- [CSS-Fragmentierung](/de/docs/Web/CSS/Guides/Fragmentation)
- [Verwendung von mehrspaltigen Layouts](/de/docs/Web/CSS/Guides/Multicol_layout/Using)
