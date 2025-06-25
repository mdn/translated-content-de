---
title: Floats
slug: Learn_web_development/Core/CSS_layout/Floats
l10n:
  sourceCommit: 723afd83589b692a198a814d2555ae203091218b
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout")}}

Ursprünglich für das Einfügen von Bildern innerhalb von Textblöcken gedacht, wurde die {{cssxref("float")}}-Eigenschaft zu einem der am häufigsten verwendeten Werkzeuge, um mehrspaltige Layouts auf Webseiten zu erstellen. Mit dem Aufkommen von Flexbox und Grid hat sie nun zu ihrem ursprünglichen Zweck zurückgefunden, wie dieser Artikel erklärt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegendes Text- und Schriftstyling</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen Sie den Zweck von Floats – für das Einfügen von Bildern innerhalb von Textspalten und andere Techniken wie Initialbuchstaben und schwebende Informationsboxen.</li>
          <li>Verstehen Sie, dass Floats früher für Mehrspalten-Layouts verwendet wurden, was inzwischen aufgrund besserer Werkzeuge nicht mehr der Fall ist.</li>
          <li>Verwendung der <code>float</code>-Eigenschaft zur Erstellung von Floats.</li>
          <li>Floats mit <code>clear</code> und dem Wert <code>display: flow-root</code> freiräumen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Der Hintergrund von Floats

Die {{cssxref("float")}}-Eigenschaft wurde eingeführt, um Webentwicklern die Implementierung von Layouts zu ermöglichen, bei denen ein Bild innerhalb einer Textspalte schwebt, wobei der Text sich links oder rechts um das Bild herum anordnet. Etwas, das Sie möglicherweise in einem Zeitungs-Layout finden würden.

Webentwickler erkannten jedoch schnell, dass man alles schweben lassen kann, nicht nur Bilder. Daher erweiterte sich die Nutzung von Floats, beispielsweise um unterhaltsame Layouteffekte wie [Initialbuchstaben](https://css-tricks.com/snippets/css/drop-caps/) zu erzielen.

Floats wurden häufig verwendet, um gesamte Website-Layouts zu erstellen, bei denen mehrere Informationsspalten so schweben, dass sie nebeneinander stehen (das Standardverhalten wäre, dass die Spalten untereinander in der gleichen Reihenfolge erscheinen, wie sie im Quelltext erscheinen). Es stehen neuere, bessere Layout-Techniken zur Verfügung. Die Verwendung von Floats auf diese Weise sollte als veraltete Technik betrachtet werden.

In diesem Artikel konzentrieren wir uns nur auf die korrekten Verwendungen von Floats.

## Ein Float-Beispiel

Lassen Sie uns die Verwendung von Floats erkunden. Wir beginnen mit einem Beispiel, bei dem ein Textblock um ein Element schwebt. Sie können mitmachen, indem Sie eine neue `index.html`-Datei auf Ihrem Computer erstellen, diese mit einer [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) füllen und den unten stehenden Code an den entsprechenden Stellen einfügen. Am Ende des Abschnitts können Sie ein Live-Beispiel sehen, wie der endgültige Code aussehen sollte.

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

Wenden Sie nun das folgende CSS auf Ihr HTML an (entweder mit einem {{htmlelement("style")}}-Element oder einem {{htmlelement("link")}} zu einer separaten `.css`-Datei - Ihre Wahl):

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

Wenn Sie speichern und aktualisieren, sehen Sie etwas, das dem entspricht, was Sie erwarten: Die Box steht über dem Text im normalen Fluss.

### Das Box floaten

Um die Box zu floaten, fügen Sie die Eigenschaften {{cssxref("float")}} und {{cssxref("margin-right")}} zur Regel `.box` hinzu:

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

Wenn Sie jetzt speichern und aktualisieren, sehen Sie etwas wie Folgendes:

{{EmbedLiveSample('Floating_the_box', '100%', 500)}}

Denken wir darüber nach, wie der Float funktioniert. Das Element, auf das der Float gesetzt ist (in diesem Fall das {{htmlelement("div")}}-Element), wird aus dem normalen Layoutfluss des Dokuments entfernt und an der linken Seite seines übergeordneten Containers (in diesem Fall {{htmlelement("body")}}) fixiert. Jeder Inhalt, der im normalen Layoutfluss unterhalb des schwebenden Elements angezeigt würde, umfließt jetzt stattdessen das schwebende Element und füllt den Raum rechts davon aus, soweit nach oben, wie bis zur Oberkante des schwebenden Elements. Dort stoppt es.

Das Schweben des Inhalts nach rechts hat genau den umgekehrten Effekt: Das schwebende Element bleibt rechts haften, und der Inhalt umfließt es nach links. Versuchen Sie, den Float-Wert auf `right` zu ändern und ersetzen Sie {{cssxref("margin-right")}} durch {{cssxref("margin-left")}} in der letzten Regel, um zu sehen, welches Ergebnis Sie erhalten.

### Den Float visualisieren

Während wir dem Float einen Rand hinzufügen können, um den Text wegzustoßen, können wir dem Text keinen Rand hinzufügen, um ihn vom Float zu entfernen. Dies liegt daran, dass ein schwebendes Element aus dem normalen Fluss entfernt wird und die Boxen der folgenden Elemente tatsächlich hinter dem Float verlaufen. Sie können dies sehen, indem Sie einige Änderungen an Ihrem Beispiel vornehmen.

Fügen Sie der ersten Absatz des Textes, direkt nach der schwebenden Box, eine Klasse `special` hinzu und fügen Sie dann in Ihrem CSS die folgenden Regeln hinzu. Diese verleihen unserem folgenden Absatz eine Hintergrundfarbe.

```css
.special {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
}
```

Um den Effekt besser sichtbar zu machen, ändern Sie das `margin-right` auf Ihrem Float in `margin`, sodass Sie Raum um den gesamten Float erhalten. Sie werden sehen, dass der Hintergrund unter der schwebenden Box hindurchläuft, wie im folgenden Beispiel.

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

Die [Linienboxen](/de/docs/Web/CSS/CSS_display/Visual_formatting_model#line_boxes) unseres folgenden Elements wurden verkürzt, sodass der Text um den Float herumläuft, aber aufgrund der Tatsache, dass der Float aus dem normalen Fluss entfernt wurde, bleibt die Box um den Absatz trotzdem in voller Breite.

## Floats freiräumen

Wir haben gesehen, dass ein Float aus dem normalen Fluss entfernt wird und dass andere Elemente neben ihm angezeigt werden. Wenn wir das folgende Element davon abhalten wollen, sich nach oben zu bewegen, müssen wir es _freiräumen_; dies wird mit der {{cssxref("clear")}}-Eigenschaft erreicht.

Fügen Sie in Ihrem HTML aus dem vorherigen Beispiel eine Klasse `cleared` zum zweiten Absatz unterhalb des schwebenden Elements hinzu. Fügen Sie dann dies zu Ihrem CSS hinzu:

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

Sie sollten sehen, dass der zweite Absatz jetzt das schwebende Element freiräumt und nicht mehr neben ihm angezeigt wird. Die `clear`-Eigenschaft akzeptiert die folgenden Werte:

- `left`: Elemente freiräumen, die nach links gefloatet sind.
- `right`: Elemente freiräumen, die nach rechts gefloatet sind.
- `both`: Alle gefloateten Elemente, links oder rechts, freiräumen.

## Boxen freiräumen, die um einen Float gewickelt sind

Sie wissen nun, wie Sie etwas freiräumen können, das einem schwebenden Element folgt, aber lassen Sie uns sehen, was passiert, wenn Sie einen hohen Float und einen kurzen Absatz mit einer Box haben, die _beide_ Elemente enthält.

### Das Problem

Ändern Sie Ihr Dokument so, dass der erste Absatz und die schwebende Box gemeinsam mit einem {{htmlelement("div")}} umwickelt sind, das eine Klasse `wrapper` hat.

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

Fügen Sie in Ihrem CSS die folgende Regel für die `.wrapper`-Klasse hinzu und laden Sie dann die Seite neu:

```css live-sample___the_problem
.wrapper {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
}
```

Entfernen Sie zudem die ursprüngliche `.cleared`-Klasse:

```css
.cleared {
  clear: left;
}
```

Sie werden sehen, dass, wie im Beispiel, wo wir dem Absatz eine Hintergrundfarbe gaben, die Hintergrundfarbe hinter dem Float verläuft.

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

Dies liegt wiederum daran, dass der Float aus dem normalen Fluss entfernt wurde. Sie könnten erwarten, dass, wenn Sie die schwebende Box und den Text des ersten Absatzes, der um den Float herumläuft, zusammen umwickeln, der folgende Inhalt von der Box freigeräumt wird. Aber das ist nicht der Fall.

### display: flow-root

Um dieses Problem zu lösen, verwenden Sie den Wert `flow-root` der `display`-Eigenschaft. Dieser Wert existiert nur, um genau dieses Problem ohne Hacks zu lösen - es wird keine unbeabsichtigten Konsequenzen geben, wenn Sie ihn verwenden.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Floats](/de/docs/Learn_web_development/Core/CSS_layout/Test_your_skills/Floats).

## Zusammenfassung

Das ist alles, was Sie über Floats wissen müssen. Als nächstes werden wir das Thema Positionierung im Detail erkunden.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout")}}
