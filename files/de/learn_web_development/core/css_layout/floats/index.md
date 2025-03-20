---
title: Floats
slug: Learn_web_development/Core/CSS_layout/Floats
l10n:
  sourceCommit: 6d55eec58e38583da60aa635d41393ad051d1c6d
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout")}}

Ursprünglich für das Flottieren von Bildern innerhalb von Textblöcken entwickelt, wurde die {{cssxref("float")}}-Eigenschaft eines der am häufigsten verwendeten Werkzeuge, um mehrspaltige Layouts auf Webseiten zu erstellen. Mit dem Aufkommen von Flexbox und Grid ist die Eigenschaft nun zu ihrem ursprünglichen Zweck zurückgekehrt, wie dieser Artikel erklärt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen der Gestaltung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, wofür Floats gedacht sind — um Bilder innerhalb von Textspalten zu platzieren und für andere Techniken wie Initialen und schwebende Informationsboxen.</li>
          <li>Verstehen, dass Floats früher für mehrspaltige Layouts verwendet wurden, dies aber nicht mehr der Fall ist, da jetzt bessere Werkzeuge verfügbar sind.</li>
          <li>Verwendung der <code>float</code>-Eigenschaft, um Floats zu erstellen.</li>
          <li>Floats mit <code>clear</code> und dem Wert <code>display: flow-root</code> bereinigen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Der Hintergrund von Floats

Die {{cssxref("float")}}-Eigenschaft wurde eingeführt, um Webentwicklern zu ermöglichen, Layouts mit einem Bild, das innerhalb einer Textspalte schwebt, zu erstellen, wobei der Text sich links oder rechts um das Bild legt. So etwas könnte man in einem Zeitungs-Layout finden.

Webentwickler erkannten jedoch schnell, dass man nicht nur Bilder, sondern alles schweben lassen kann, sodass die Verwendung von Floats erweitert wurde, z. B. für unterhaltsame Layouteffekte wie [Initialen](https://css-tricks.com/snippets/css/drop-caps/).

Floats wurden häufig verwendet, um komplette Webseiten-Layouts mit mehreren Spalten von Informationen zu erstellen, die so schwebend angeordnet sind, dass sie nebeneinander stehen (das Standardverhalten wäre, dass die Spalten untereinander in derselben Reihenfolge wie im Quelltext erscheinen). Es gibt neuere, bessere Layout-Techniken. Die Verwendung von Floats auf diese Weise sollte als veraltete Technik betrachtet werden.

In diesem Artikel konzentrieren wir uns nur auf die ordnungsgemäße Verwendung von Floats.

## Ein Float-Beispiel

Lassen Sie uns die Verwendung von Floats erkunden. Wir beginnen mit einem Beispiel, bei dem ein Textblock um ein Element herum schwebt. Sie können mitmachen, indem Sie eine neue `index.html`-Datei auf Ihrem Computer erstellen, sie mit einer [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) füllen und den untenstehenden Code an den entsprechenden Stellen einfügen. Am Ende des Abschnitts können Sie ein Live-Beispiel sehen, wie der endgültige Code aussehen sollte.

Zuerst beginnen wir mit etwas HTML. Fügen Sie das Folgende in den HTML-Body ein und entfernen Sie alles, was vorher darin war:

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

Wenden Sie nun das folgende CSS auf Ihr HTML an (unter Verwendung eines {{htmlelement("style")}}-Elements oder eines {{htmlelement("link")}} zu einer separaten `.css`-Datei – Ihre Wahl):

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

Wenn Sie speichern und aktualisieren, werden Sie etwas sehen, das ganz Ihrer Erwartung entspricht: Die Box sitzt über dem Text im normalen Fluss.

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

Wenn Sie jetzt speichern und aktualisieren, sehen Sie etwas Ähnliches wie das Folgende:

{{EmbedLiveSample('Floating_the_box', '100%', 500)}}

Lassen Sie uns darüber nachdenken, wie der Float funktioniert. Das Element, auf dem der Float gesetzt ist (in diesem Fall das {{htmlelement("div")}}-Element), wird aus dem normalen Layoutfluss des Dokuments herausgenommen und an die linke Seite seines übergeordneten Containers (in diesem Fall {{htmlelement("body")}}) festgeheftet. Jeder Inhalt, der im normalen Layoutfluss unterhalb des schwebenden Elements erscheinen würde, wird nun um es herum verlaufen und den Raum auf der rechten Seite ausfüllen, bis zur Oberseite des schwebenden Elements. Dort hört es auf.

Das Schweben des Inhalts nach rechts hat genau den gleichen Effekt, jedoch umgekehrt: Das schwebende Element wird an die rechte Seite geheftet, und der Inhalt verläuft um es herum nach links. Versuchen Sie, den Float-Wert auf `right` zu ändern und {{cssxref("margin-right")}} in {{cssxref("margin-left")}} in der letzten Regel zu ersetzen, um zu sehen, was herauskommt.

### Den Float visualisieren

Während wir einen Rand zum Float hinzufügen können, um den Text wegzudrücken, können wir dem Text keinen Rand hinzufügen, um ihn vom Float wegzubewegen. Dies liegt daran, dass ein schwebendes Element aus dem normalen Flow herausgenommen wird und die Boxen der folgenden Elemente tatsächlich hinter dem Float verlaufen. Sie können dies sehen, indem Sie einige Änderungen an Ihrem Beispiel vornehmen.

Fügen Sie der ersten Textpassage, die sofort auf die schwebende Box folgt, eine Klasse `special` hinzu, und fügen Sie dann in Ihrem CSS die folgenden Regeln hinzu. Diese werden unserem folgenden Absatz eine Hintergrundfarbe geben.

```css
.special {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
}
```

Um den Effekt besser sichtbar zu machen, ändern Sie den `margin-right` Ihres Floats zu `margin`, damit Sie rund um den Float Platz bekommen. Sie werden sehen können, dass der Hintergrund des Absatzes direkt unter der schwebenden Box verläuft, wie im folgenden Beispiel.

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

Die [Zeilenboxen](/de/docs/Web/CSS/CSS_display/Visual_formatting_model#line_boxes) unseres folgenden Elements wurden verkürzt, sodass der Text um den Float verläuft. Aufgrund des Floats wird jedoch der ursprüngliche normale Flow des gesamten Boxmodells erhalten.

## Floats bereinigen

Wir haben gesehen, dass ein Float aus dem normalen Flow herausgenommen wird und andere Elemente daneben angezeigt werden. Wenn wir das nachfolgende Element am Weiterwandern hindern wollen, müssen wir es _bereinigen_; dies wird mit der {{cssxref("clear")}}-Eigenschaft erreicht.

Fügen Sie Ihrem HTML aus dem vorherigen Beispiel eine Klasse `cleared` zum zweiten Absatz unterhalb des schwebenden Elements hinzu. Fügen Sie dann das Folgende zu Ihrem CSS hinzu:

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

Sie sollten sehen, dass der zweite Absatz jetzt das schwebende Element bereinigt und nicht mehr daneben erscheint. Die `clear`-Eigenschaft akzeptiert die folgenden Werte:

- `left`: Elemente bereinigen, die nach links schweben.
- `right`: Elemente bereinigen, die nach rechts schweben.
- `both`: Jegliche schwebende Elemente, links oder rechts, bereinigen.

## Boxen um einen Float herum bereinigen

Sie wissen jetzt, wie Sie etwas nach einem schwebenden Element bereinigen können, aber sehen wir uns an, was passiert, wenn Sie einen hohen Float und einen kurzen Absatz haben, mit einer Box, die um _beide_ Elemente herum verläuft.

### Das Problem

Ändern Sie Ihr Dokument so, dass der erste Absatz und die schwebende Box gemeinsam mit einem {{htmlelement("div")}} umhüllt sind, das eine Klasse `wrapper` hat.

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

Fügen Sie in Ihrem CSS die folgende Regel für die `.wrapper`-Klasse hinzu und laden Sie die Seite neu:

```css live-sample___the_problem
.wrapper {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
}
```

Entfernen Sie zusätzlich die ursprüngliche `.cleared`-Klasse:

```css
.cleared {
  clear: left;
}
```

Sie werden sehen, dass, genau wie im Beispiel, in dem wir eine Hintergrundfarbe auf dem Absatz hinzugefügt haben, die Hintergrundfarbe hinter dem Float verläuft.

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

Wieder einmal liegt dies daran, dass der Float aus dem normalen Fluss herausgenommen wurde. Sie könnten erwarten, dass, indem die schwebende Box und der Text des ersten Absatzes, der um den Float herum verläuft, zusammen umhüllt werden, der nachfolgende Inhalt von der Box bereinigt wird. Dies ist jedoch nicht der Fall.

### display: flow-root

Um dieses Problem zu lösen, verwenden Sie den Wert `flow-root` der `display`-Eigenschaft. Dies existiert nur, um dieses spezielle Problem ohne den Einsatz von Hacks zu lösen - es wird keine unbeabsichtigten Konsequenzen haben, wenn Sie es verwenden.

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

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats_skills).

## Zusammenfassung

Das ist alles, was Sie über Floats wissen müssen. Als nächstes werden wir das Thema Positionierung im Detail erkunden.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout")}}
