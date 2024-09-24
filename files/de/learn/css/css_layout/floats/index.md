---
title: Floats
slug: Learn/CSS/CSS_layout/Floats
l10n:
  sourceCommit: afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}

Ursprünglich für das Einfügen von Bildern in Textblöcke gedacht, wurde die {{cssxref("float")}}-Eigenschaft zu einem der am häufigsten verwendeten Werkzeuge, um mehrspaltige Layouts auf Webseiten zu erstellen. Mit dem Aufkommen von Flexbox und Grid hat sie nun wieder ihre ursprüngliche Funktion übernommen, wie dieser Artikel erklärt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn/CSS/First_steps">Introduction to CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man schwebende Features auf Webseiten erstellt und die clear-Eigenschaft sowie andere Methoden zum Bereinigen von Floats verwendet.
      </td>
    </tr>
  </tbody>
</table>

## Der Hintergrund von Floats

Die {{cssxref("float")}}-Eigenschaft wurde eingeführt, um Webentwicklern zu ermöglichen, Layouts mit einem Bild zu erstellen, das innerhalb einer Textspalte schwebt, wobei der Text links oder rechts um das Bild herumfließt. So etwas findet man oft in Zeitungslayouts.

Webentwickler erkannten jedoch schnell, dass man nicht nur Bilder schweben lassen kann, also wurde die Verwendung von Float erweitert, zum Beispiel für interessante Layouteffekte wie [Drop-Caps](https://css-tricks.com/snippets/css/drop-caps/).

Floats wurden häufig verwendet, um ganze Webseitenlayouts mit mehreren Spalten von Informationen zu erstellen, die nebeneinander angeordnet sind (das Standardverhalten wäre, dass die Spalten untereinander in derselben Reihenfolge wie in der Quelle erscheinen). Es gibt neuere, bessere Layout-Techniken. Die Verwendung von Floats auf diese Weise sollte als [veraltete Technik](/de/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods) angesehen werden.

In diesem Artikel konzentrieren wir uns nur auf den richtigen Einsatz von Floats.

## Ein Float-Beispiel

Lassen Sie uns die Verwendung von Floats erkunden. Wir beginnen mit einem Beispiel, bei dem ein Textblock um ein Element herum schwebt. Sie können mitmachen, indem Sie eine neue `index.html`-Datei auf Ihrem Computer erstellen, sie mit einer [HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) füllen und den untenstehenden Code an den entsprechenden Stellen einfügen. Am Ende des Abschnitts können Sie ein Live-Beispiel sehen, wie der endgültige Code aussehen sollte.

Zuerst beginnen wir mit ein wenig HTML. Fügen Sie das Folgende zu Ihrem HTML-Körper hinzu und entfernen Sie alles, was zuvor darin war:

```html
<h1>Float-Beispiel</h1>

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

Wenden Sie nun das folgende CSS auf Ihr HTML an (verwenden Sie dazu ein {{htmlelement("style")}}-Element oder einen {{htmlelement("link")}} zu einer separaten `.css`-Datei — ganz wie Sie möchten):

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

Wenn Sie speichern und aktualisieren, sehen Sie etwas, das in etwa Ihren Erwartungen entspricht: Die Box sitzt über dem Text, im normalen Fluss.

### Die Box schweben lassen

Um die Box schweben zu lassen, fügen Sie die {{cssxref("float")}}- und {{cssxref("margin-right")}}-Eigenschaften zur `.box`-Regel hinzu:

```html hidden
<h1>Float-Beispiel</h1>

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

Denken wir darüber nach, wie der Float funktioniert. Das Element mit der gesetzten Float-Eigenschaft (das {{htmlelement("div")}}-Element in diesem Fall) wird aus dem normalen Layoutfluss des Dokuments herausgenommen und an die linke Seite seines übergeordneten Containers ({{htmlelement("body")}}, in diesem Fall) gefügt. Jeder Inhalt, der im normalen Layoutfluss unter dem schwebenden Element kommen würde, wird jetzt um es herum gruppiert, den Platz auf der rechten Seite füllend, bis zur Oberkante des schwebenden Elements. Dort wird er stoppen.

Wenn der Inhalt nach rechts geschoben wird, hat das genau denselben Effekt, nur umgekehrt: Das schwebende Element wird an die rechte Seite gefügt, und der Inhalt wird um es herum zur linken Seite gruppiert. Versuchen Sie, den Float-Wert zu `right` zu ändern und {{cssxref("margin-right")}} durch {{cssxref("margin-left")}} in der letzten Regel zu ersetzen, um zu sehen, was das Ergebnis ist.

### Den Float visualisieren

Während wir einen Rand zum Float hinzufügen können, um den Text wegzudrücken, können wir keinen Rand zum Text hinzufügen, um ihn vom Float zu entfernen. Dies liegt daran, dass ein schwebendes Element aus dem normalen Fluss herausgenommen wird und die Boxen der nachfolgenden Elemente tatsächlich hinter dem Float verlaufen. Sie können dies sehen, indem Sie einige Änderungen in Ihrem Beispiel vornehmen.

Fügen Sie der ersten Textabsatz-Klasse, die unmittelbar auf die schwebende Box folgt, eine Klasse von `special` hinzu und fügen Sie dann folgende Regeln in Ihr CSS ein. Diese geben unserem folgenden Absatz eine Hintergrundfarbe.

```css
.special {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
}
```

Um den Effekt leichter sichtbar zu machen, ändern Sie den `margin-right` auf Ihren Float zu `margin`, damit Sie Platz um den gesamten Float haben. Sie werden sehen, dass der Hintergrund des Absatzes direkt unter der schwebenden Box verläuft, wie im Beispiel unten.

```html hidden
<h1>Float-Beispiel</h1>

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

Die [Zeilenboxen](/de/docs/Web/CSS/Visual_formatting_model#line_boxes) unseres folgenden Elements wurden verkürzt, sodass der Text um den Float läuft, aber da der Float aus dem normalen Fluss herausgenommen wurde, bleibt die Box um den Absatz weiterhin voll breit.

## Floats bereinigen

Wir haben gesehen, dass ein Float aus dem normalen Fluss entfernt wird und dass andere Elemente neben ihm angezeigt werden. Wenn wir verhindern wollen, dass das folgende Element nach oben rückt, müssen wir es _bereinigen_; dies wird mit der {{cssxref("clear")}}-Eigenschaft erreicht.

Fügen Sie in Ihrem HTML aus dem vorherigen Beispiel der zweiten Zeile unter dem schwebenden Element eine Klasse von `cleared` hinzu. Fügen Sie dann das Folgende zu Ihrem CSS hinzu:

```css
.cleared {
  clear: left;
}
```

```html hidden
<h1>Float-Beispiel</h1>

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

Sie sollten sehen, dass der zweite Absatz jetzt das schwebende Element bereinigt und nicht mehr neben ihm kommt. Die `clear`-Eigenschaft akzeptiert die folgenden Werte:

- `left`: Elemente bereinigen, die zum linken Rand schweben.
- `right`: Elemente bereinigen, die zum rechten Rand schweben.
- `both`: Alle schwebenden Elemente bereinigen, links oder rechts.

## Boxen um einen Float herum bereinigen

Sie wissen jetzt, wie man etwas bereinigt, das einem schwebenden Element folgt. Sehen wir uns jedoch an, was passiert, wenn Sie einen hohen Float und einen kurzen Absatz haben und eine Box um _beide_ Elemente gewickelt ist.

### Das Problem

Ändern Sie Ihr Dokument so, dass der erste Absatz und die schwebende Box gemeinsam in einem {{htmlelement("div")}} mit einer Klasse von `wrapper` umwickelt sind.

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

Entfernen Sie außerdem die ursprüngliche `.cleared`-Klasse:

```css
.cleared {
  clear: left;
}
```

Sie werden sehen, dass der Hintergrund wie in dem Beispiel, bei dem wir eine Hintergrundfarbe auf den Absatz gesetzt haben, hinter dem Float verläuft.

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

Wieder einmal liegt das daran, dass der Float aus dem normalen Fluss herausgenommen wurde. Man könnte erwarten, dass durch das Umwickeln der schwebenden Box und des Textes des ersten Absatzes mit einem Wrapper der nachfolgende Inhalt von der Box bereinigt wird. Aber wie oben gezeigt, ist dem nicht so. Um dieses Problem zu lösen, besteht der Standardansatz darin, einen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) (BFC) mit der {{cssxref("display")}}-Eigenschaft zu erstellen.

### display: flow-root

Um dieses Problem zu lösen, kann man den Wert `flow-root` der `display`-Eigenschaft verwenden. Dieser existiert nur, um einen BFC ohne Verwendung von Tricks zu erstellen — es gibt keine unbeabsichtigten Konsequenzen, wenn Sie ihn verwenden.

```css
.wrapper {
  background-color: rgb(148 255 172);
  padding: 10px;
  color: purple;
  display: flow-root;
}
```

```html hidden
<h1>Float-Beispiel</h1>
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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen gespeichert haben, bevor Sie weitermachen — siehe [Test your skills: Floats](/de/docs/Learn/CSS/CSS_layout/Floats_skills).

## Zusammenfassung

Sie wissen nun alles über Floats in der modernen Webentwicklung. Siehe den Artikel über [veraltete Layout-Methoden](/de/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods) für Informationen darüber, wie sie früher verwendet wurden, was nützlich sein kann, wenn Sie an älteren Projekten arbeiten.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}
