---
title: Floats
slug: Learn_web_development/Core/CSS_layout/Floats
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout")}}

Ursprünglich für das Einfügen von Bildern in Textblöcke entwickelt, wurde die {{cssxref("float")}}-Eigenschaft zu einem der am häufigsten verwendeten Werkzeuge für die Erstellung mehrspaltiger Layouts auf Webseiten. Mit der Einführung von `flexbox` und `grid` kehrt sie nun wieder zu ihrem ursprünglichen Zweck zurück, wie dieser Artikel erläutert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftartgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen Sie den Zweck von Floats — für schwebende Bilder innerhalb von Textspalten und andere Techniken wie Initialen und schwebende Informationseinblendungen.</li>
          <li>Verstehen Sie, dass Floats früher für mehrspaltige Layouts verwendet wurden, dies aber nicht mehr der Fall ist, da es jetzt bessere Werkzeuge gibt.</li>
          <li>Die <code>float</code>-Eigenschaft verwenden, um Floats zu erstellen.</li>
          <li>Floats mit der Verwendung von <code>clear</code> und dem Wert <code>display: flow-root</code> aufzulösen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Der Hintergrund von Floats

Die {{cssxref("float")}}-Eigenschaft wurde eingeführt, um Webentwicklern zu ermöglichen, Layouts zu implementieren, bei denen ein Bild innerhalb einer Textspalte schwebt und der Text links oder rechts darum herum fließt. Solche Layouts könnten beispielsweise in einer Zeitungsseite vorkommen.

Webentwickler erkannten jedoch schnell, dass man nicht nur Bilder schweben lassen kann, und so erweiterte sich die Verwendung von `float`, beispielsweise für unterhaltsame Layouteffekte wie [Initialen](https://css-tricks.com/snippets/css/drop-caps/).

Floats wurden häufig verwendet, um komplette Webseitenlayouts mit mehreren Spalten von Informationen zu erstellen, die so geschwebt sind, dass sie nebeneinander stehen (das Standardverhalten wäre, dass die Spalten untereinander in der Reihenfolge sitzen, in der sie im Quellcode erscheinen). Es gibt neuere, bessere Layouttechniken. Die Verwendung von Floats auf diese Weise sollte als veraltete Technik betrachtet werden.

In diesem Artikel konzentrieren wir uns nur auf die korrekten Verwendungszwecke von Floats.

## Ein Float-Beispiel

Lassen Sie uns die Verwendung von Floats erkunden. Wir beginnen mit einem Beispiel, bei dem ein Textblock um ein Element herum schwebt. Sie können mithilfe der Erstellung einer neuen `index.html`-Datei auf Ihrem Computer mit einem [HTML-Template](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) fortfahren und den nachstehenden Code an den entsprechenden Stellen einfügen. Am Ende des Abschnitts können Sie ein Live-Beispiel sehen, wie der endgültige Code aussehen sollte.

Zunächst beginnen wir mit etwas HTML. Fügen Sie das folgende zu Ihrem HTML-Body hinzu und entfernen Sie dabei alles, was zuvor darin war:

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

Wenden Sie nun das folgende CSS auf Ihr HTML an (verwenden Sie dazu ein {{htmlelement("style")}}-Element oder einen {{htmlelement("link")}} zu einer separaten `.css`-Datei — Ihrer Wahl):

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

Wenn Sie speichern und aktualisieren, werden Sie etwas sehen, das Ihren Erwartungen entspricht: Die Box sitzt im normalen Fluss über dem Text.

### Die Box schweben lassen

Um die Box schweben zu lassen, fügen Sie die Eigenschaften {{cssxref("float")}} und {{cssxref("margin-right")}} zur `.`box-Regel hinzu:

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

Wenn Sie nun speichern und aktualisieren, sehen Sie etwa Folgendes:

{{EmbedLiveSample('Floating_the_box', '100%', 500)}}

Lassen Sie uns über die Funktionsweise des Floats nachdenken. Das Element, auf dem das `float` gesetzt ist (in diesem Fall das {{htmlelement("div")}}-Element), wird aus dem normalen Layoutfluss des Dokuments herausgenommen und an der linken Seite des übergeordneten Containers ({{htmlelement("body")}}, in diesem Fall) fixiert. Jeglicher Inhalt, der im normalen Layoutfluss unterhalb des geschwebten Elements erscheinen würde, umfließt es nun stattdessen und füllt den Raum rechts davon bis nach oben zum geschwebten Element. Dort stoppt es.

Das Schweben des Inhalts nach rechts hat genau denselben Effekt, nur umgekehrt: Das geschwebte Element wird rechts fixiert, und der Inhalt umfließt es nach links. Versuchen Sie, den `float`-Wert auf `right` zu ändern und ersetzen Sie {{cssxref("margin-right")}} durch {{cssxref("margin-left")}} in der letzten Regelsetzung, um zu sehen, was das Ergebnis ist.

### Den Float visualisieren

Während wir ein `margin` zum Float hinzufügen können, um den Text wegzuschieben, können wir dem Text kein `margin` hinzufügen, um ihn vom Float wegzubewegen. Dies liegt daran, dass ein geschwebtes Element aus dem normalen Fluss herausgenommen wird und die Boxen der nachfolgenden Elemente tatsächlich hinter dem Float verlaufen. Sie können dies sehen, indem Sie einige Änderungen an Ihrem Beispiel vornehmen.

Fügen Sie dem ersten Textabsatz, direkt nach der geschwebten Box, eine Klasse `special` hinzu und fügen Sie dann in Ihrem CSS die folgenden Regeln hinzu. Diese geben unserem nachfolgenden Absatz eine Hintergrundfarbe.

```css
.special {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
}
```

Um den Effekt leichter sichtbar zu machen, ändern Sie `margin-right` Ihres Floats auf `margin`, damit Sie Platz um den Float herum erhalten. Sie werden sehen können, dass der Hintergrund des Absatzes direkt unterhalb der geschwebten Box verläuft, wie im untenstehenden Beispiel.

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

Die [Line-Boxes](/de/docs/Web/CSS/Visual_formatting_model#line_boxes) unseres nachfolgenden Elements wurden verkürzt, sodass der Text um den Float herum verlaufen kann, aber aufgrund des Floats, der aus dem normalen Fluss entfernt wurde, bleibt die Box um den Absatz weiterhin voll breit.

## Floats auflösen

Wir haben gesehen, dass ein Float aus dem normalen Fluss entfernt wird und dass andere Elemente neben ihm angezeigt werden. Wenn wir verhindern möchten, dass das folgende Element aufrückt, müssen wir es _auflösen_; dies wird mit der Eigenschaft {{cssxref("clear")}} erreicht.

Fügen Sie in Ihrem HTML aus dem vorherigen Beispiel der zweiten Zeile unter dem geschwebten Element eine Klasse `cleared` hinzu. Fügen Sie dann das Folgende zu Ihrem CSS hinzu:

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

Sie sollten sehen, dass der zweite Absatz jetzt das geschwebte Element auflöst und nicht mehr daneben erscheint. Die `clear`-Eigenschaft akzeptiert die folgenden Werte:

- `left`: Löst Elemente auf, die nach links geschwebt sind.
- `right`: Löst Elemente auf, die nach rechts geschwebt sind.
- `both`: Löst alle geschwebten Elemente, links oder rechts.

## Boxen aufräumen, die um einen Float herumgewickelt sind

Sie wissen jetzt, wie man etwas auflöst, das einem geschwebten Element folgt, aber lassen Sie uns sehen, was passiert, wenn Sie einen hohen Float und einen kurzen Absatz haben, mit einer Box, die um _beide_ Elemente gewickelt ist.

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

Fügen Sie in Ihrem CSS die folgende Regel für die Klasse `.wrapper` hinzu und laden Sie die Seite dann erneut:

```css live-sample___the_problem
.wrapper {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
}
```

Entfernen Sie außerdem die ursprüngliche `.`cleared-Klasse:

```css
.cleared {
  clear: left;
}
```

Sie werden sehen, dass genau wie im Beispiel, in dem wir einen Hintergrund auf den Absatz gelegt haben, der Hintergrund hinter dem Float verläuft.

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

Auch hier liegt es daran, dass der Float aus dem normalen Fluss herausgenommen wurde. Sie könnten erwarten, dass durch das Umwickeln der geschwebten Box und des Textes des ersten Absatzes, der um den Float herumfließt, das nachfolgende Material von der Box aufgelöst wird. Aber das ist nicht der Fall.

### display: flow-root

Um dieses Problem zu lösen, verwenden Sie den Wert `flow-root` der `display`-Eigenschaft. Dies existiert nur, um genau dieses Problem ohne den Einsatz von Hacks zu lösen — es gibt keine unbeabsichtigten Konsequenzen, wenn Sie es verwenden.

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

## Testen Sie Ihre Kenntnisse!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um sicherzustellen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Kenntnisse: Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats_skills).

## Zusammenfassung

Das ist alles, was Sie über Floats wissen müssen. Als Nächstes werden wir das Thema Positionierung im Detail erkunden.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout")}}
