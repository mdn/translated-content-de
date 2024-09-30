---
title: Floats
slug: Learn/CSS/CSS_layout/Floats
l10n:
  sourceCommit: afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}

Ursprünglich für das Einfügen von Bildern in Textblöcke gedacht, wurde die {{cssxref("float")}}-Eigenschaft zu einem der am häufigsten verwendeten Werkzeuge zur Erstellung von mehrspaltigen Layouts auf Webseiten. Mit der Einführung von Flexbox und Grid kehrt sie nun zu ihrem ursprünglichen Zweck zurück, wie dieser Artikel erklärt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man auf Webseiten schwebende Features erstellt und die
        clear-Eigenschaft sowie andere Methoden zum Beseitigen von Floats verwendet.
      </td>
    </tr>
  </tbody>
</table>

## Der Hintergrund von Floats

Die {{cssxref("float")}}-Eigenschaft wurde eingeführt, um Webentwicklern zu ermöglichen, Layouts mit einem Bild, das innerhalb einer Textspalte schwebt, zu implementieren, wobei der Text links oder rechts um das Bild herumfließt. Eine Art Layout, das man aus Zeitungen kennt.

Aber Webentwickler erkannten schnell, dass man alles schweben lassen kann, nicht nur Bilder. So wurde die Verwendung von Floats ausgeweitet, zum Beispiel auf unterhaltsame Layout-Effekte wie [Initialen](https://css-tricks.com/snippets/css/drop-caps/).

Floats wurden häufig verwendet, um vollständige Website-Layouts mit mehreren Spalten von Informationen zu erstellen, die so schwebend sind, dass sie nebeneinander sitzen (das Standardverhalten wäre, dass die Spalten untereinander in derselben Reihenfolge erscheinen wie in der Quelle). Es gibt neuere, bessere Layout-Techniken. Das Verwenden von Floats auf diese Weise sollte als [veraltete Technik](/de/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods) angesehen werden.

In diesem Artikel konzentrieren wir uns nur auf die richtigen Verwendungen von Floats.

## Ein Float-Beispiel

Lassen Sie uns die Verwendung von Floats erkunden. Wir beginnen mit einem Beispiel, bei dem ein Textblock um ein Element schwebt. Sie können mitmachen, indem Sie eine neue Datei `index.html` auf Ihrem Computer erstellen, diese mit einer [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) füllen und den folgenden Code an den entsprechenden Stellen einfügen. Am Ende des Abschnitts können Sie ein Live-Beispiel sehen, wie der endgültige Code aussehen sollte.

Zuerst beginnen wir mit etwas HTML. Fügen Sie Folgendes in das HTML-Body ein und entfernen Sie alles, was dort zuvor war:

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

Wenden Sie nun das folgende CSS auf Ihr HTML an (verwenden Sie dazu ein {{htmlelement("style")}}-Element oder eine {{htmlelement("link")}} zu einer separaten `.css`-Datei – Ihre Wahl):

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

Wenn Sie speichern und aktualisieren, sehen Sie etwas, das dem entspricht, was Sie erwarten: Der Kasten sitzt oberhalb des Textes im normalen Fluss.

### Den Kasten schweben lassen

Um den Kasten schweben zu lassen, fügen Sie die Eigenschaften {{cssxref("float")}} und {{cssxref("margin-right")}} der `.box`-Regel hinzu:

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

Denken wir darüber nach, wie der Float funktioniert. Das Element, auf dem der Float gesetzt ist (in diesem Fall das {{htmlelement("div")}}-Element), wird aus dem normalen Layoutfluss des Dokuments herausgenommen und an der linken Seite seines übergeordneten Containers (in diesem Fall {{htmlelement("body")}}) festgehalten. Jeglicher Inhalt, der im normalen Layoutfluss unter dem geschwebten Element erscheinen würde, wird nun darum herumfließen, den Raum auf der rechten Seite des Elements bis zur Oberkante des geschwebten Elements auffüllen. Dort wird es stoppen.

Das Schweben des Inhalts nach rechts hat genau denselben Effekt, jedoch umgekehrt: Das geschwebte Element wird an der rechten Seite festgehalten und der Inhalt wird links um das Element herumfließen. Ändern Sie den Float-Wert zu `right` und ersetzen Sie {{cssxref("margin-right")}} durch {{cssxref("margin-left")}} im letzten Regelwerk, um das Ergebnis zu sehen.

### Den Float visualisieren

Während wir dem Float einen Rand hinzufügen können, um den Text wegzuschieben, können wir keinen Rand zum Text hinzufügen, um ihn vom Float wegzubewegen. Dies liegt daran, dass ein geschwebtes Element aus dem normalen Fluss herausgenommen wird und die Boxen der folgenden Elemente tatsächlich hinter dem Float verlaufen. Sie können dies sehen, indem Sie einige Änderungen an Ihrem Beispiel vornehmen.

Fügen Sie der ersten Textstelle, die sich direkt nach dem geschwebten Kasten befindet, eine Klasse `special` hinzu und fügen Sie dann folgende Regeln in Ihrem CSS hinzu. Diese werden unserem folgenden Absatz eine Hintergrundfarbe geben.

```css
.special {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
}
```

Um den Effekt leichter zu sehen, ändern Sie das `margin-right` Ihres Floats zu `margin`, sodass Sie Raum um den Float herum bekommen. Sie können den Hintergrund im Absatz direkt unter dem geschwebten Kasten sehen, wie im folgenden Beispiel.

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

Die [Linienboxen](/de/docs/Web/CSS/Visual_formatting_model#line_boxes) unseres folgenden Elements wurden verkürzt, sodass der Text um den Float herumfließt, aber aufgrund des aus dem normalen Fluss herausgenommenen Floats bleibt die Box um den Absatz dennoch in voller Breite bestehen.

## Floats klären

Wir haben gesehen, dass ein Float aus dem normalen Fluss entfernt wird und andere Elemente neben ihm angezeigt werden. Wenn wir verhindern möchten, dass das folgende Element nach oben verschoben wird, müssen wir es _klären_; dies wird mit der {{cssxref("clear")}}-Eigenschaft erreicht.

Fügen Sie in Ihrem HTML aus dem vorhergehenden Beispiel eine Klasse `cleared` dem zweiten Absatz hinzu, der sich unter dem geschwebten Element befindet. Fügen Sie dann Folgendes zu Ihrem CSS hinzu:

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

Sie sollten sehen, dass der zweite Absatz nun das geschwebte Element klärt und nicht mehr daneben erscheint. Die `clear`-Eigenschaft akzeptiert die folgenden Werte:

- `left`: Elemente, die nach links geschwebt sind, klären.
- `right`: Elemente, die nach rechts geschwebt sind, klären.
- `both`: Jegliche geschwebten Elemente klären, ob rechts oder links.

## Boxen um einen Float klären

Sie wissen jetzt, wie Sie etwas klären, das einem geschwebten Element folgt, aber sehen wir uns an, was passiert, wenn Sie einen hohen Float und einen kurzen Absatz haben, mit einer Box, die um _beide_ Elemente gruppiert ist.

### Das Problem

Ändern Sie Ihr Dokument so, dass der erste Absatz und der geschwebte Kasten gemeinsam mit einem {{htmlelement("div")}} umschlossen sind, das eine Klasse `wrapper` hat.

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

Fügen Sie in Ihrem CSS die folgende Regel für die `.wrapper`-Klasse hinzu und laden Sie die Seite dann neu:

```css live-sample___the_problem
.wrapper {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
}
```

Darüber hinaus entfernen Sie die ursprüngliche `.cleared`-Klasse:

```css
.cleared {
  clear: left;
}
```

Sie werden sehen, dass, genau wie im Beispiel, bei dem wir auf den Absatz eine Hintergrundfarbe gesetzt haben, die Hintergrundfarbe hinter dem Float verläuft.

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

Auch hier liegt das daran, dass der Float aus dem normalen Fluss herausgenommen wurde. Sie könnten erwarten, dass durch das Gruppieren des geschwebten Kastens und des Textes des ersten Absatzes, der um den Float herum verläuft, der nachfolgende Inhalt von der Box getrennt wird. Aber dies ist nicht der Fall, wie oben gezeigt. Um dies zu beheben, wird die Standardmethode verwendet, um einen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) mit der {{cssxref("display")}}-Eigenschaft zu erstellen.

### display: flow-root

Die Lösung für dieses Problem besteht darin, den Wert `flow-root` der `display`-Eigenschaft zu verwenden. Dieser Wert existiert nur, um einen BFC ohne Tricks zu erzeugen — es wird keine unbeabsichtigten Konsequenzen geben, wenn Sie ihn verwenden.

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

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu prüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: Floats](/de/docs/Learn/CSS/CSS_layout/Floats_skills).

## Zusammenfassung

Sie wissen jetzt alles, was es über Floats in der modernen Webentwicklung zu wissen gibt. Sehen Sie sich den Artikel über [veraltete Layout-Methoden](/de/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods) an, um zu erfahren, wie sie früher verwendet wurden, was nützlich sein könnte, wenn Sie an älteren Projekten arbeiten.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}
