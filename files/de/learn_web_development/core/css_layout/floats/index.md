---
title: Floats
slug: Learn_web_development/Core/CSS_layout/Floats
l10n:
  sourceCommit: 2a4d705a12d76ee17e013f8a50007fd25029e0fc
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core/CSS_layout/Test_your_skills/Floats", "Learn_web_development/Core/CSS_layout")}}

Ursprünglich zur Einbettung von Bildern innerhalb von Textblöcken gedacht, wurde die {{cssxref("float")}}-Eigenschaft zu einem der am häufigsten verwendeten Werkzeuge zur Erstellung von Mehrspalten-Layouts auf Webseiten. Mit der Einführung von Flexbox und Grid wird sie nun wieder für ihren ursprünglichen Zweck verwendet, wie in diesem Artikel erklärt wird.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturieren von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegendes Text- und Schriftstyling</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen des Zwecks von Floats — zum Einfügen von Bildern in Textspalten und anderen Techniken wie Initiale und schwebende Informationseinblendungen.</li>
          <li>Verstehen, dass Floats früher für Mehrspalten-Layouts verwendet wurden, dies aber nicht mehr der Fall ist, da bessere Werkzeuge verfügbar sind.</li>
          <li>Verwendung der <code>float</code>-Eigenschaft, um Floats zu erzeugen.</li>
          <li>Floats mit <code>clear</code> und dem Wert <code>display: flow-root</code> klären.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Der Hintergrund von Floats

Die {{cssxref("float")}}-Eigenschaft wurde eingeführt, um Webentwicklern zu ermöglichen, Layouts mit einem Bild zu implementieren, das innerhalb einer Textspalte schwebt, wobei der Text links oder rechts darum herumfließt. So etwas, wie Sie es in einem Zeitungs-Layout finden könnten.

Aber Webentwickler erkannten schnell, dass man nicht nur Bilder, sondern alles schweben lassen kann, also erweiterte sich die Verwendung von float, beispielsweise zu interessanten Layout-Effekten wie [Initiale](https://css-tricks.com/snippets/css/drop-caps/).

Floats wurden üblicherweise verwendet, um ganze Webseiten-Layouts zu erstellen, die mehrere Informationsspalten umfassten, die so geschwebt sind, dass sie nebeneinander stehen (das Standardverhalten wäre, dass die Spalten untereinander in der gleichen Reihenfolge stehen würden, wie sie im Quellcode erscheinen). Es gibt neuere, bessere Layout-Techniken. Die Verwendung von Floats auf diese Weise sollte als veraltete Technik betrachtet werden.

In diesem Artikel konzentrieren wir uns nur auf die richtigen Verwendungen von Floats.

## Ein Float-Beispiel

Lassen Sie uns die Verwendung von Floats erkunden. Wir beginnen mit einem Beispiel, das das Schweben eines Textblocks um ein Element behandelt. Sie können folgen, indem Sie eine neue `index.html`-Datei auf Ihrem Computer erstellen, sie mit einer [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) füllen und den unten stehenden Code an den entsprechenden Stellen einfügen. Am Ende des Abschnitts können Sie ein Live-Beispiel sehen, wie der finale Code aussehen sollte.

Zuerst beginnen wir mit etwas HTML. Fügen Sie Folgendes zu Ihrem HTML-Body hinzu und entfernen Sie alles, was zuvor darin war:

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

Wenden Sie nun das folgende CSS auf Ihr HTML an (indem Sie ein {{htmlelement("style")}}-Element oder einen {{htmlelement("link")}} zu einer separaten `.css`-Datei verwenden — Ihre Wahl):

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
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

Wenn Sie speichern und neu laden, sehen Sie etwas, das in etwa dem entspricht, was Sie erwarten: Die Box sitzt oberhalb des Textes im normalen Fluss.

### Die Box schweben lassen

Um die Box schweben zu lassen, fügen Sie die Eigenschaften {{cssxref("float")}} und {{cssxref("margin-right")}} zur `.box`-Regel hinzu:

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

Wenn Sie jetzt speichern und neu laden, sehen Sie etwas wie Folgendes:

{{EmbedLiveSample('Floating_the_box', '100%', 500)}}

Lassen Sie uns überlegen, wie das Schweben funktioniert. Das Element, bei dem das Schweben eingestellt ist (in diesem Fall das {{htmlelement("div")}}-Element), wird aus dem normalen Layoutfluss des Dokuments herausgenommen und an die linke Seite seines übergeordneten Containers (in diesem Fall {{htmlelement("body")}}) angeheftet. Jedes Element, das im normalen Layoutfluss unter das schwebende Element kommen würde, wird nun darum herumfließen, den Platz auf der rechten Seite davon bis zur Oberkante des schwebenden Elements einnehmend. An dieser Stelle wird es enden.

Das Schweben des Inhalts nach rechts hat genau den gleichen Effekt, jedoch umgekehrt: Das schwebende Element wird an die rechte Seite angeheftet und der Inhalt wird darum herum nach links fließen. Versuchen Sie, den Float-Wert auf `right` zu ändern und ersetzen Sie {{cssxref("margin-right")}} durch {{cssxref("margin-left")}} im letzten Regelset, um das Ergebnis zu sehen.

### Das Schweben visualisieren

Während wir einen Rand (margin) zum Float hinzufügen können, um den Text weg zu drücken, können wir dem Text keinen Rand hinzufügen, um ihn vom Float weg zu bewegen. Dies liegt daran, dass ein geschwebtes Element aus dem normalen Fluss genommen wird und die Boxen der nachfolgenden Elemente tatsächlich hinter dem Float verlaufen. Sie können dies sehen, indem Sie einige Änderungen an Ihrem Beispiel vornehmen.

Fügen Sie der ersten Textpassage, die direkt auf die schwebende Box folgt, eine Klasse `special` hinzu und fügen Sie dann die folgenden Regeln in Ihrem CSS hinzu. Diese geben unserer folgenden Textpassage eine Hintergrundfarbe.

```css
.special {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
}
```

Um den Effekt besser sichtbar zu machen, ändern Sie den `margin-right` an Ihrem Float zu `margin`, damit Sie Platz rund um den Float bekommen. Sie können den Hintergrund auf der Textpassage direkt unter der geschwebten Box sehen, wie im unten stehenden Beispiel.

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
    0.9em/1.2 Arial,
    Helvetica,
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

Die [Line-Boxen](/de/docs/Web/CSS/CSS_display/Visual_formatting_model#line_boxes) unseres folgenden Elements wurden verkürzt, sodass der Text um den Float herum verläuft, aber da der Float aus dem normalen Fluss entfernt wurde, bleibt die Box um den Absatz herum nach wie vor voll in der Breite.

## Floats räumen

Wir haben gesehen, dass ein Float aus dem normalen Fluss entfernt wird und dass andere Elemente daneben angezeigt werden. Wenn wir das Nachfolgeelement davon abhalten wollen, nach oben zu rücken, müssen wir es _räumen_; dies wird mit der {{cssxref("clear")}}-Eigenschaft erreicht.

Fügen Sie in Ihrem HTML aus dem vorherigen Beispiel der zweiten Textpassage unter dem schwebenden Element eine Klasse `cleared` hinzu. Fügen Sie anschließend das folgende zu Ihrem CSS hinzu:

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
    0.9em/1.2 Arial,
    Helvetica,
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

Sie sollten sehen, dass die zweite Textpassage nun das geschwebte Element klärt und nicht mehr seitlich davon erscheint. Die `clear`-Eigenschaft akzeptiert die folgenden Werte:

- `left`: Elemente klären, die links geschwebt sind.
- `right`: Elemente klären, die rechts geschwebt sind.
- `both`: Alle Elemente klären, unabhängig ob links oder rechts geschwebt.

## Boxen, die um einen Float gelegt sind, klären

Sie wissen jetzt, wie Sie ein Element nach einem geschwebten Element klären, aber sehen wir, was passiert, wenn Sie einen hohen Float und einen kurzen Absatz haben, mit einer Box, die _beide_ Elemente enthält.

### Das Problem

Ändern Sie Ihr Dokument so, dass der erste Absatz und die geschwebte Box gemeinsam mit einem {{htmlelement("div")}} umwickelt sind, das eine Klasse `wrapper` hat.

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

Fügen Sie in Ihrem CSS die folgende Regel für die Klasse `.wrapper` hinzu und laden Sie die Seite dann neu:

```css live-sample___the_problem
.wrapper {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
}
```

Zusätzlich entfernen Sie die ursprüngliche Klasse `.cleared`:

```css
.cleared {
  clear: left;
}
```

Sie werden sehen, dass genauso wie im Beispiel, bei dem wir die Hintergrundfarbe auf dem Absatz gesetzt haben, die Hintergrundfarbe hinter dem Float verläuft.

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
    0.9em/1.2 Arial,
    Helvetica,
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

Wiederum liegt es daran, dass der Float aus dem normalen Fluss herausgenommen wurde. Man könnte erwarten, dass durch das Umwickeln der geschwebten Box und des Textes des ersten Absatzes, der um den Float herum verläuft, der nachfolgende Inhalt der Box abgeklärt wird. Dies ist jedoch nicht der Fall.

### display: flow-root

Um dieses Problem zu lösen, verwenden Sie den Wert `flow-root` der `display`-Eigenschaft. Dies existiert einzig, um dieses spezielle Problem ohne Hacks zu lösen — es gibt keine unbeabsichtigten Konsequenzen, wenn Sie es verwenden.

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
    0.9em/1.2 Arial,
    Helvetica,
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
