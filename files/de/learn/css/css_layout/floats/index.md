---
title: Floats
slug: Learn/CSS/CSS_layout/Floats
l10n:
  sourceCommit: afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}

Ursprünglich zum Einfügen von Bildern in Textblöcke gedacht, wurde die {{cssxref("float")}}-Eigenschaft zu einem der am häufigsten verwendeten Werkzeuge, um mehrspaltige Layouts auf Webseiten zu erstellen. Mit dem Aufkommen von Flexbox und Grid hat sie nun zu ihrem ursprünglichen Zweck zurückgefunden, wie in diesem Artikel erklärt wird.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wie man schwebende Elemente auf Webseiten erstellt und die
        {{cssxref("clear")}}-Eigenschaft sowie andere Methoden zum Aufheben von
        Umfließungen verwendet.
      </td>
    </tr>
  </tbody>
</table>

## Der Hintergrund von Floats

Die {{cssxref("float")}}-Eigenschaft wurde eingeführt, um Webentwicklern zu ermöglichen, Layouts zu implementieren, bei denen ein Bild innerhalb einer Textspalte schwebt und der Text links oder rechts davon umfließt. Dieser Effekt ist vergleichbar mit einem Zeitungs-Layout.

Webentwickler erkannten schnell, dass nicht nur Bilder schweben können, und so wurde die Verwendung von Float auf lustige Layout-Effekte wie z.B. [Drop-Caps](https://css-tricks.com/snippets/css/drop-caps/) erweitert.

Floats wurden oft verwendet, um gesamte Website-Layouts zu erstellen, bei denen mehrere Informationsspalten schweben, sodass sie nebeneinander stehen (das Standardverhalten wäre, dass die Spalten untereinander in der Reihenfolge erscheinen, in der sie im Quelltext stehen). Es gibt neuere und bessere Layout-Techniken. Die Verwendung von Floats auf diese Weise sollte als [veraltete Technik](/de/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods) angesehen werden.

In diesem Artikel konzentrieren wir uns nur auf den richtigen Einsatz von Floats.

## Ein Float-Beispiel

Lassen Sie uns die Verwendung von Floats erkunden. Wir beginnen mit einem Beispiel, bei dem ein Textblock um ein Element schwebt. Sie können mitmachen, indem Sie auf Ihrem Computer eine neue `index.html` Datei erstellen, sie mit einer [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) füllen und den unten stehenden Code an den entsprechenden Stellen einfügen. Am Ende des Abschnitts können Sie ein Live-Beispiel sehen, wie der endgültige Code aussehen sollte.

Zuerst beginnen wir mit etwas HTML. Fügen Sie das Folgende in Ihren HTML-Body ein und entfernen Sie alles, was vorher darin war:

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

Wenden Sie nun das folgende CSS auf Ihr HTML an (mittels eines {{htmlelement("style")}}-Elements oder eines {{htmlelement("link")}} zu einer separaten `.css`-Datei — nach Ihrer Wahl):

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

Wenn Sie speichern und aktualisieren, sehen Sie etwas, das dem erwartetem Bild ähnelt: Die Box sitzt oberhalb des Textes, im normalen Fluss.

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

Wenn Sie nun speichern und aktualisieren, sehen Sie etwas wie das Folgende:

{{EmbedLiveSample('Floating_the_box', '100%', 500)}}

Lassen Sie uns darüber nachdenken, wie der Float funktioniert. Das Element, auf dem der Float gesetzt ist (in diesem Fall das {{htmlelement("div")}}-Element), wird aus dem normalen Layout-Fluss des Dokuments herausgenommen und an die linke Seite seines übergeordneten Containers angeheftet (in diesem Fall {{htmlelement("body")}}). Inhalte, die im normalen Layout-Fluss unterhalb des schwebenden Elements kommen würden, umfließen dieses nun und füllen den Raum rechts davon bis zur Oberkante des schwebenden Elements. Dort hören sie auf.

Das Schweben des Inhalts nach rechts hat genau den gleichen Effekt, nur umgekehrt: Das schwebende Element wird an der rechten Seite anheften und der Inhalt umfließt es nach links. Versuchen Sie, den Float-Wert auf `right` zu ändern und ersetzen Sie {{cssxref("margin-right")}} durch {{cssxref("margin-left")}} in der letzten Regel, um zu sehen, was das Ergebnis ist.

### Die Float-Visualisierung

Während wir einen Rand zum Float hinzufügen können, um den Text wegzudrücken, können wir keinen Rand zum Text hinzufügen, um ihn vom Float wegzubewegen. Dies liegt daran, dass ein schwebendes Element aus dem normalen Fluss herausgenommen wird und die Boxen der folgenden Elemente tatsächlich hinter dem Float verlaufen. Dies können Sie sehen, indem Sie einige Änderungen an Ihrem Beispiel vornehmen.

Fügen Sie der ersten Textabsatzklasse, unmittelbar nach dem schwebenden Kasten, eine Klasse `special` hinzu, dann fügen Sie in Ihrem CSS die folgenden Regeln hinzu. Diese geben unserem folgenden Absatz eine Hintergrundfarbe.

```css
.special {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
}
```

Um den Effekt besser sichtbar zu machen, ändern Sie die `margin-right`-Eigenschaft Ihres Floats auf `margin`, sodass Sie rund um den Float Platz haben. Sie werden sehen, dass der Hintergrund des Absatzes direkt unter der schwebenden Box verläuft, wie im folgenden Beispiel.

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

Die [Linien-Boxen](/de/docs/Web/CSS/Visual_formatting_model#line_boxes) unseres folgenden Elements wurden verkürzt, sodass der Text um den Float herumläuft, aber aufgrund des Floats aus dem normalen Fluss bleibt die Box um den Absatz immer noch volle Breite.

## Floats aufheben

Wir haben gesehen, dass ein Float aus dem normalen Fluss herausgenommen wird und dass andere Elemente daneben angezeigt werden. Wenn wir verhindern wollen, dass das folgende Element nach oben rutscht, müssen wir es _aufheben_; dies wird durch die {{cssxref("clear")}}-Eigenschaft erreicht.

Fügen Sie in Ihrem HTML aus dem vorherigen Beispiel der zweiten Textabsatzklasse, unterhalb des schwebenden Elements, eine Klasse `cleared` hinzu. Fügen Sie dann das Folgende zu Ihrem CSS hinzu:

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

Sie sollten sehen, dass der zweite Absatz nun das schwebende Element aufhebt und nicht mehr daneben erscheint. Die `clear`-Eigenschaft akzeptiert die folgenden Werte:

- `left`: Elemente aufheben, die nach links schweben.
- `right`: Elemente aufheben, die nach rechts schweben.
- `both`: Jegliche schwebende Elemente aufheben, egal ob links oder rechts.

## Boxen um einen Float herum aufheben

Sie wissen nun, wie Sie etwas nach einem schwebenden Element aufheben, aber sehen wir uns an, was passiert, wenn Sie einen hohen Float und einen kurzen Absatz mit einer Box haben, die um _beide_ Elemente herum verläuft.

### Das Problem

Ändern Sie Ihr Dokument so, dass der erste Absatz und der schwebende Kasten gemeinsam in ein {{htmlelement("div")}} gewickelt werden, das eine Klasse von `wrapper` hat.

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

In Ihrem CSS fügen Sie die folgende Regel für die `.wrapper`-Klasse hinzu und laden Sie dann die Seite neu:

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

Sie werden sehen, dass, genauso wie in dem Beispiel, bei dem wir eine Hintergrundfarbe auf den Absatz gesetzt haben, die Hintergrundfarbe hinter dem Float verläuft.

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

Auch hier liegt es daran, dass der Float aus dem normalen Fluss herausgenommen wurde. Man würde erwarten, dass durch das gemeinsame Umwickeln des schwebenden Kastens und des Textes des ersten Absatzes, das nachfolgende Inhaltselement den Kasten aufhebt. Aber dem ist nicht so, wie oben dargestellt. Um dem zu begegnen, ist die Standardmethode, einen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) mit der {{cssxref("display")}}-Eigenschaft zu erstellen.

### display: flow-root

Um dieses Problem zu lösen, verwendet man den Wert `flow-root` der `display`-Eigenschaft. Dieser dient nur dazu, einen BFC zu schaffen, ohne Hacks zu verwenden — es gibt keine unbeabsichtigten Konsequenzen, wenn Sie ihn verwenden.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: Floats](/de/docs/Learn/CSS/CSS_layout/Floats_skills).

## Zusammenfassung

Sie wissen nun alles, was es über Floats in der modernen Webentwicklung zu wissen gibt. Siehe den Artikel über [veraltete Layout-Methoden](/de/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods) für Informationen darüber, wie sie früher verwendet wurden, was nützlich sein könnte, wenn Sie an älteren Projekten arbeiten.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}
