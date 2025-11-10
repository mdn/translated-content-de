---
title: Floats
slug: Learn_web_development/Core/CSS_layout/Floats
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core/CSS_layout/Test_your_skills/Floats", "Learn_web_development/Core/CSS_layout")}}

Ursprünglich für schwebende Bilder innerhalb von Textblöcken gedacht, wurde die {{cssxref("float")}}-Eigenschaft zu einem der am häufigsten genutzten Werkzeuge für die Erstellung von mehrspaltigen Layouts auf Webseiten. Mit dem Aufkommen von Flexbox und Grid hat sie nun wieder zu ihrem ursprünglichen Zweck zurückgefunden, wie dieser Artikel erklärt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundlegende Konzepte des CSS-Layouts</a>.
      </td>
    </tr>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen Sie den Zweck von Floats — zum Schweben von Bildern innerhalb von Textspalten und anderen Techniken wie Initialen und schwebenden eingebetteten Informationskästen.</li>
          <li>Verstehen Sie, dass Floats früher für Mehrspaltenlayouts verwendet wurden, dies jedoch nicht mehr der Fall ist, da jetzt bessere Werkzeuge verfügbar sind.</li>
          <li>Verwendung der <code>float</code>-Eigenschaft zur Erstellung von Floats.</li>
          <li>Floats beseitigen mit <code>clear</code> und dem <code>display: flow-root</code>-Wert.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Der Hintergrund von Floats

Die {{cssxref("float")}}-Eigenschaft wurde eingeführt, um Webentwicklern zu ermöglichen, Layouts zu implementieren, bei denen ein Bild innerhalb einer Textspalte schwebt und der Text um die linke oder rechte Seite des Bildes herum fließt. So etwas findet man in einem Zeitungs-Layout.

Aber Webentwickler erkannten schnell, dass man nicht nur Bilder schweben lassen kann, und so verbreiterte sich die Nutzung von Float, beispielsweise für unterhaltsame Layouteffekte wie [Initialen](https://css-tricks.com/snippets/css/drop-caps/).

Floats wurden häufig verwendet, um komplette Webseiten-Layouts zu erstellen, die mehrere Spalten mit Informationen enthalten, die nebeneinander schweben (das Standardverhalten wäre, dass die Spalten untereinander in der gleichen Reihenfolge stehen wie im Quelltext). Es gibt neuere, bessere Layouttechniken. Die Verwendung von Floats auf diese Weise sollte als veraltete Technik betrachtet werden.

In diesem Artikel konzentrieren wir uns nur auf die richtige Verwendung von Floats.

## Ein Float-Beispiel

Lassen Sie uns die Verwendung von Floats erkunden. Wir beginnen mit einem Beispiel, das das Schweben eines Textblocks um ein Element herum zeigt. Sie können mitmachen, indem Sie eine neue `index.html`-Datei auf Ihrem Computer erstellen, sie mit einer [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) füllen und den unten stehenden Code an den entsprechenden Stellen einfügen. Am Ende des Abschnitts sehen Sie ein Live-Beispiel, wie der endgültige Code aussehen sollte.

Zuerst beginnen wir mit etwas HTML. Fügen Sie Folgendes in den Body Ihres HTML-Dokuments ein und entfernen Sie alles, was zuvor darin war:

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

Jetzt wenden Sie das folgende CSS auf Ihr HTML an (verwenden Sie ein {{htmlelement("style")}}-Element oder ein {{htmlelement("link")}} zu einer separaten `.css`-Datei – Ihre Wahl):

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

Wenn Sie speichern und aktualisieren, sehen Sie etwas, das dem entspricht, was Sie erwarten würden: Die Box sitzt über dem Text im normalen Fluss.

### Die Box schweben lassen

Um die Box schweben zu lassen, fügen Sie die Eigenschaften {{cssxref("float")}} und {{cssxref("margin-right")}} zur Regel `.box` hinzu:

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

Wenn Sie nun speichern und aktualisieren, sehen Sie etwas wie Folgendes:

{{EmbedLiveSample('Floating_the_box', '100%', 500)}}

Überlegen Sie, wie der Float funktioniert. Das Element mit dem gesetzten Float (in diesem Fall das {{htmlelement("div")}}-Element) wird aus dem normalen Layoutfluss des Dokuments herausgenommen und an der linken Seite seines übergeordneten Containers ({{htmlelement("body")}}, in diesem Fall) fixiert. Jeder Inhalt, der im normalen Layoutfluss unterhalb des schwebenden Elements kommen würde, wird nun um ihn herum fließen und den Raum auf der rechten Seite davon bis zum oberen Rand des schwebenden Elements ausfüllen. Dort wird er enden.

Das Schweben des Inhalts nach rechts hat genau den gleichen Effekt, jedoch umgekehrt: Das schwebende Element wird an der rechten Seite fixiert, und der Inhalt wird sich auf der linken Seite darum herumfließen. Versuchen Sie, den Float-Wert zu `right` zu ändern und ersetzen Sie {{cssxref("margin-right")}} durch {{cssxref("margin-left")}} in dem letzten Regelset, um das Ergebnis zu sehen.

### Den Float visualisieren

Während wir dem Float einen Rand hinzufügen können, um den Text abzustoßen, können wir dem Text keinen Rand hinzufügen, um ihn vom Float wegzubewegen. Dies liegt daran, dass ein schwebendes Element aus dem normalen Fluss herausgenommen wird und die Kästchen der folgenden Elemente tatsächlich hinter dem Float verlaufen. Sie können dies sehen, indem Sie einige Änderungen an Ihrem Beispiel vornehmen.

Fügen Sie der ersten Textzeile, der unmittelbar nach der schwebenden Box, eine Klasse `special` hinzu, und fügen Sie dann in Ihrem CSS die folgenden Regeln hinzu. Diese geben unserem folgenden Absatz eine Hintergrundfarbe.

```css
.special {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
}
```

Um den Effekt leichter sichtbar zu machen, ändern Sie die `margin-right` in Ihrem Float zu `margin`, sodass Sie Platz um den gesamten Float haben. Sie werden den Hintergrund auf dem Absatz sehen, der direkt unter der schwebenden Box verläuft, wie im folgenden Beispiel.

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

Die [Zeilenkästchen](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model#line_boxes) unseres folgenden Elements wurden verkürzt, sodass der Text um den Float herumfließt, aber aufgrund des Floats, der aus dem normalen Fluss entfernt wurde, bleibt das Kästchen um den Absatz weiterhin in voller Breite.

## Floats beseitigen

Wir haben gesehen, dass ein Float aus dem normalen Fluss entfernt wird und dass andere Elemente nebeneinander angezeigt werden. Wenn wir verhindern wollen, dass das folgende Element nach oben rutscht, müssen wir es _beseitigen_; dies wird mit der Eigenschaft {{cssxref("clear")}} erreicht.

Fügen Sie in Ihrem HTML aus dem vorherigen Beispiel der zweiten Textzeile unter dem schwebenden Element eine Klasse `cleared` hinzu. Fügen Sie dann das Folgende zu Ihrem CSS hinzu:

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

Sie sollten sehen, dass die zweite Textzeile jetzt das schwebende Element beseitigt und nicht mehr daneben erscheint. Die `clear`-Eigenschaft akzeptiert die folgenden Werte:

- `left`: Elemente beseitigen, die nach links schweben.
- `right`: Elemente beseitigen, die nach rechts schweben.
- `both`: Alle schwebenden Elemente beseitigen, links oder rechts.

## Kästchen um einen Float herum beseitigen

Jetzt wissen Sie, wie Sie etwas beseitigen können, das einem schwebenden Element folgt, aber sehen wir, was passiert, wenn Sie einen hohen Float und einen kurzen Absatz mit einem Kästchen haben, das _beide_ Elemente enthält.

### Das Problem

Ändern Sie Ihr Dokument so, dass der erste Textzeile und der schwebende Kasten gemeinsam mit einem {{htmlelement("div")}} umschlossen sind, der die Klasse `wrapper` hat.

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

Entfernen Sie außerdem die ursprüngliche `.cleared`-Klasse:

```css
.cleared {
  clear: left;
}
```

Sie werden sehen, dass der Hintergrund wie im Beispiel, in dem wir eine Hintergrundfarbe auf den Absatz gesetzt haben, hinter dem Float verläuft.

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

Auch hier liegt das daran, dass der Float aus dem normalen Fluss herausgenommen wurde. Sie könnten erwarten, dass durch das Umwickeln des schwebenden Kastens und des Textes des ersten Absatzes, der um den Float herumfließt, der darauf folgende Inhalt aus dem Kasten beseitigt wird. Aber das ist nicht der Fall.

### display: flow-root

Um dieses Problem zu lösen, verwenden Sie den Wert `flow-root` für die `display`-Eigenschaft. Dieser existiert nur, um dieses spezielle Problem ohne Tricks zu lösen — es wird keine unbeabsichtigten Konsequenzen geben, wenn Sie ihn verwenden.

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

Das war alles, was Sie über Floats wissen müssen. Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie all diese Informationen verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core/CSS_layout/Test_your_skills/Floats", "Learn_web_development/Core/CSS_layout")}}
