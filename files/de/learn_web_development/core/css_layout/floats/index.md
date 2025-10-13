---
title: Floats
slug: Learn_web_development/Core/CSS_layout/Floats
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core/CSS_layout/Test_your_skills/Floats", "Learn_web_development/Core/CSS_layout")}}

Ursprünglich wurde die {{cssxref("float")}} Eigenschaft entwickelt, um Bilder innerhalb von Textblöcken zu platzieren. Sie wurde zu einem der am häufigsten verwendeten Werkzeuge für die Erstellung von mehrspaltigen Layouts auf Webseiten. Mit dem Aufkommen von Flexbox und Grid hat sie nun zu ihrem ursprünglichen Zweck zurückgefunden, wie dieser Artikel erklärt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalt mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftstilierung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten von CSS-Layouts</a>.
      </td>
    </tr>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Den Zweck von Floats verstehen — zum Einfügen von Bildern in Textspalten und andere Techniken wie Drop-Caps und schwebende Infoboxen.</li>
          <li>Verstehen, dass Floats früher für mehrspaltige Layouts verwendet wurden, aber dafür heute bessere Werkzeuge verfügbar sind.</li>
          <li>Die <code>float</code> Eigenschaft verwenden, um Floats zu erstellen.</li>
          <li>Floats mit <code>clear</code> und dem Wert <code>display: flow-root</code> bereinigen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Der Hintergrund von Floats

Die {{cssxref("float")}} Eigenschaft wurde eingeführt, um Webentwicklern zu ermöglichen, Layouts mit einem Bild zu erstellen, das innerhalb einer Textspalte schwebt, wobei der Text links oder rechts davon umbricht. Eine Art Layout, die man in einer Zeitungsanordnung finden könnte.

Webentwickler erkannten schnell, dass man nicht nur Bilder, sondern auch andere Elemente schweben lassen kann. So weitete sich die Verwendung von Float zum Beispiel auf unterhaltsame Layout-Effekte wie [Drop-Caps](https://css-tricks.com/snippets/css/drop-caps/) aus.

Floats wurden häufig verwendet, um komplette Webseitenlayouts zu erstellen, die mehrere Spalten mit Informationen zeigen, die so angeordnet sind, dass sie nebeneinander stehen (das Standardverhalten wäre, dass die Spalten untereinander in der Reihenfolge erscheinen, in der sie im Quellcode auftauchen). Es gibt neuere, bessere Layout-Techniken. Die Verwendung von Floats auf diese Weise sollte als veraltete Technik angesehen werden.

In diesem Artikel konzentrieren wir uns nur auf die richtigen Verwendungen von Floats.

## Ein Float-Beispiel

Lassen Sie uns die Verwendung von Floats erkunden. Wir beginnen mit einem Beispiel, bei dem ein Textblock um ein Element herum positioniert wird. Sie können mitmachen, indem Sie eine neue Datei `index.html` auf Ihrem Computer erstellen, sie mit einer [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) füllen und den untenstehenden Code an den entsprechenden Stellen einfügen. Am Ende des Abschnitts sehen Sie ein Live-Beispiel, wie der finale Code aussehen sollte.

Zuerst beginnen wir mit etwas HTML. Fügen Sie das Folgende zu Ihrem HTML-Body hinzu und entfernen Sie alles, was zuvor dort war:

```html
<h1>Float example</h1>

<div class="box">Float</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet.
</p>

<p>
  Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
  orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
  ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
  ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et
  a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

Wenden Sie nun das folgende CSS auf Ihr HTML an (entweder durch ein {{htmlelement("style")}} Element oder durch einen {{htmlelement("link")}} zu einer separaten `.css` Datei — Ihrer Wahl):

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 "Helvetica",
    "Arial",
    sans-serif;
}

.box {
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: rgb(207 232 220);
  padding: 1em;
}
```

Wenn Sie speichern und aktualisieren, sehen Sie etwas, das Sie erwarten würden: Die Box sitzt oberhalb des Textes im normalen Fluss.

### Die Box schweben lassen

Um die Box schweben zu lassen, fügen Sie die Eigenschaften {{cssxref("float")}} und {{cssxref("margin-right")}} zur `.box` Regel hinzu:

```html hidden
<h1>Float example</h1>

<div class="box">Float</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet.
</p>

<p>
  Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
  orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
  ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
  ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et
  a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

```css
.box {
  float: left;
  margin-right: 15px;
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: rgb(207 232 220);
  padding: 1em;
}
```

Wenn Sie jetzt speichern und aktualisieren, sehen Sie etwas wie das Folgende:

{{EmbedLiveSample('Floating_the_box', '100%', 500)}}

Denken wir darüber nach, wie der Float funktioniert. Das Element, auf das der Float angewendet wurde (in diesem Fall das {{htmlelement("div")}} Element), wird aus dem normalen Layoutfluss des Dokuments entfernt und an der linken Seite seines übergeordneten Containers (hier das {{htmlelement("body")}}) fixiert. Jeder Inhalt, der im normalen Layoutfluss unterhalb des schwebenden Elements erscheinen würde, wird stattdessen drumherum verlaufen und den Platz zur rechten Seite ausfüllen, bis hoch zur Oberseite des schwebenden Elements. Dort stoppt es.

Das Schweben des Inhalts nach rechts hat genau den gleichen Effekt, jedoch in umgekehrter Richtung: Das schwebende Element haftet sich an die rechte Seite und der Inhalt verläuft um es herum nach links. Versuchen Sie, den Float-Wert auf `right` zu ändern und ersetzen Sie {{cssxref("margin-right")}} durch {{cssxref("margin-left")}} in dem letzten Regelset, um zu sehen, was das Ergebnis ist.

### Den Float visualisieren

Während wir einen Rand zum Float hinzufügen können, um den Text wegzustoßen, können wir dem Text keinen Rand hinzufügen, um ihn vom Float zu entfernen. Dies liegt daran, dass ein schwebendes Element aus dem normalen Fluss entfernt wird und die Boxen der nachfolgenden Elemente tatsächlich hinter dem Float verlaufen. Sie können dies sehen, indem Sie einige Änderungen an Ihrem Beispiel vornehmen.

Fügen Sie der ersten Textabsatz, der direkt nach der schwebenden Box kommt, eine Klasse `special` hinzu, und fügen Sie dann in Ihrem CSS die folgenden Regeln hinzu. Diese werden unserem nachfolgenden Absatz eine Hintergrundfarbe geben.

```css
.special {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
}
```

Um den Effekt deutlicher sichtbar zu machen, ändern Sie den `margin-right` Ihres Floats in `margin`, sodass Sie Platz rund um den Float haben. Sie werden sehen, dass der Hintergrund des Absatzes direkt unter der schwebenden Box verläuft, wie im untenstehenden Beispiel.

```html hidden
<h1>Float example</h1>

<div class="box">Float</div>

<p class="special">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet.
</p>

<p>
  Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
  orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
  ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
  ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et
  a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 "Helvetica",
    "Arial",
    sans-serif;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207 232 220);
  padding: 1em;
}
```

{{EmbedLiveSample('Visualizing_the_float', '100%', 500)}}

Die [Zeilenboxen](/de/docs/Web/CSS/CSS_display/Visual_formatting_model#line_boxes) unseres nachfolgenden Elements wurden verkürzt, sodass der Text um den Float verläuft. Aufgrund der Entfernung des Floats aus dem normalen Fluss bleibt die Box um den Absatz jedoch in voller Breite.

## Floats bereinigen

Wir haben gesehen, dass ein Float aus dem normalen Fluss entfernt wird und dass andere Elemente daneben angezeigt werden. Wenn wir möchten, dass das nachfolgende Element sich nicht hochschiebt, müssen wir es _bereinigen_; dies wird mit der {{cssxref("clear")}} Eigenschaft erreicht.

Fügen Sie in Ihrem HTML aus dem vorherigen Beispiel der zweiten Textabsatz unter dem schwebenden Element eine Klasse `cleared` hinzu. Fügen Sie dann Folgendes zu Ihrem CSS hinzu:

```css
.cleared {
  clear: left;
}
```

```html hidden
<h1>Float example</h1>

<div class="box">Float</div>

<p class="special">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet.
</p>

<p class="cleared">
  Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
  orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
  ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
  ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et
  a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 "Helvetica",
    "Arial",
    sans-serif;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207 232 220);
  padding: 1em;
}

.special {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
}

.cleared {
  clear: left;
}
```

{{EmbedLiveSample('Clearing_floats', '100%', 600)}}

Sie sollten sehen, dass der zweite Absatz nun das schwebende Element bereinigt und nicht mehr neben ihm erscheint. Die `clear` Eigenschaft akzeptiert folgende Werte:

- `left`: Elemente beseitigen, die links schweben.
- `right`: Elemente beseitigen, die rechts schweben.
- `both`: Beliebige schwebende Elemente beseitigen, links oder rechts.

## Boxen um einen Float bereinigen

Sie wissen jetzt, wie Sie etwas bereinigen, das einem schwebenden Element folgt, aber sehen wir uns an, was passiert, wenn Sie einen hohen Float und einen kurzen Absatz haben, mit einer Box, die _beide_ Elemente enthält.

### Das Problem

Ändern Sie Ihr Dokument so, dass der erste Absatz und die schwebende Box gemeinsam mit einem {{htmlelement("div")}} umschlossen sind, das die Klasse `wrapper` hat.

```html live-sample___the_problem
<div class="wrapper">
  <div class="box">Float1</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
</div>
```

Fügen Sie in Ihrem CSS die folgende Regel für die Klasse `.wrapper` hinzu und laden Sie dann die Seite neu:

```css live-sample___the_problem
.wrapper {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
}
```

Entfernen Sie außerdem die ursprüngliche `.cleared` Klasse:

```css
.cleared {
  clear: left;
}
```

Sie werden sehen, dass, genau wie im Beispiel, in dem wir eine Hintergrundfarbe auf den Absatz gelegt haben, die Hintergrundfarbe hinter dem Float verläuft.

```html hidden live-sample___the_problem
<p>
  Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
  orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
  ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
  ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et
  a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

```css hidden live-sample___the_problem
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 "Helvetica",
    "Arial",
    sans-serif;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207 232 220);
  padding: 1em;
  color: black;
}
```

{{EmbedLiveSample('the_problem', '100%', 600)}}

Auch hier liegt das daran, dass der Float aus dem normalen Fluss entfernt wurde. Man könnte erwarten, dass durch das gemeinsame Umhüllen der schwebenden Box und des Textes des ersten Absatzes, der um den Float verläuft, der nachfolgende Inhalt von der Box bereinigt wird. Aber das ist nicht der Fall.

### display: flow-root

Um dieses Problem zu lösen, verwenden Sie den Wert `flow-root` der `display` Eigenschaft. Dieser Wert existiert nur, um dieses spezielle Problem ohne Hacks zu lösen — es gibt keine unbeabsichtigten Konsequenzen, wenn Sie ihn verwenden.

```css
.wrapper {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
  display: flow-root;
}
```

```html hidden
<h1>Float example</h1>
<div class="wrapper">
  <div class="box">Float</div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
</div>
<p class="cleared">
  Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
  orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
  ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
  ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et
  a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 "Helvetica",
    "Arial",
    sans-serif;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207 232 220);
  padding: 1em;
  color: black;
}
```

{{EmbedLiveSample('display_flow-root', '100%', 600)}}

## Zusammenfassung

Das ist alles, was Sie über Floats wissen müssen. Im nächsten Artikel geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie all diese Informationen verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core/CSS_layout/Test_your_skills/Floats", "Learn_web_development/Core/CSS_layout")}}
