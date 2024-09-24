---
title: Mehrspaltiges Layout
slug: Learn/CSS/CSS_layout/Multiple-column_Layout
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout")}}

Die Spezifikation für das mehrspaltige Layout bietet Ihnen eine Methode, um Inhalte in Spalten anzuordnen, wie Sie sie in einer Zeitung sehen könnten. Dieser Artikel erklärt, wie Sie diese Funktion verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie man ein mehrspaltiges Layout auf Webseiten erstellt, wie Sie es in einer Zeitung finden könnten.
      </td>
    </tr>
  </tbody>
</table>

## Ein einfaches Beispiel

Lassen Sie uns erkunden, wie man ein mehrspaltiges Layout verwendet — oft als _multicol_ bezeichnet. Sie können mitmachen, indem Sie die [multicol Ausgangsdatei herunterladen](https://github.com/mdn/learning-area/blob/main/css/css-layout/multicol/0-starting-point.html) und das CSS an den entsprechenden Stellen hinzufügen. Am Ende des Abschnitts sehen Sie ein Beispiel dafür, wie der endgültige Code aussehen sollte.

### Ein dreispaltiges Layout

Unsere Ausgangsdatei enthält ein sehr einfaches HTML: einen Wrapper mit einer Klasse von `container`, in dem sich eine Überschrift und einige Absätze befinden.

Das {{htmlelement("div")}} mit einer Klasse von „container“ wird unser multicol Container. Wir aktivieren Multicol, indem wir eine von zwei Eigenschaften verwenden: {{cssxref("column-count")}} oder {{cssxref("column-width")}}. Die `column-count`-Eigenschaft nimmt eine Zahl als Wert und erstellt diese Anzahl von Spalten. Wenn Sie das folgende CSS zu Ihrem Stylesheet hinzufügen und die Seite neu laden, erhalten Sie drei Spalten:

```css
.container {
  column-count: 3;
}
```

Die Spalten, die Sie erstellen, haben flexible Breiten – der Browser berechnet, wie viel Platz jeder Spalte zugewiesen wird.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
```

```html hidden
<div class="container">
  <h1>Einfaches multicol Beispiel</h1>

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

{{ EmbedLiveSample('A_three-column_layout', '100%', 400) }}

### Festlegen der Spaltenbreite

Ändern Sie Ihr CSS, um `column-width` wie folgt zu verwenden:

```css
.container {
  column-width: 200px;
}
```

Der Browser gibt Ihnen nun so viele Spalten wie möglich in der von Ihnen angegebenen Größe; der verbleibende Platz wird dann zwischen den vorhandenen Spalten aufgeteilt. Das bedeutet, dass Sie nicht genau die Breite erhalten, die Sie angeben, es sei denn, Ihr Container ist genau durch diese Breite teilbar.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
```

```html hidden
<div class="container">
  <h1>Einfaches multicol Beispiel</h1>

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

{{ EmbedLiveSample('Setting_column-width', '100%', 400) }}

## Gestaltung der Spalten

Die von multicol erstellten Spalten können nicht individuell gestaltet werden. Es gibt keine Möglichkeit, eine Spalte größer als andere zu machen oder die Hintergrund- oder Textfarbe einer einzelnen Spalte zu ändern. Sie haben zwei Möglichkeiten, die Anzeige der Spalten zu ändern:

- Die Größe des Abstands zwischen den Spalten mit {{cssxref("column-gap")}} ändern.
- Eine Linie zwischen den Spalten mit {{cssxref("column-rule")}} hinzufügen.

Verwenden Sie Ihr obiges Beispiel und ändern Sie die Größe des Abstands, indem Sie eine `column-gap`-Eigenschaft hinzufügen. Sie können mit verschiedenen Werten experimentieren – die Eigenschaft akzeptiert jede Längeneinheit.

Fügen Sie nun eine Linie zwischen den Spalten mit `column-rule` hinzu. Ähnlich wie die {{cssxref("border")}}-Eigenschaft, die Sie in vorherigen Lektionen kennengelernt haben, ist `column-rule` eine Kurzform für {{cssxref("column-rule-color")}}, {{cssxref("column-rule-style")}} und {{cssxref("column-rule-width")}}, und akzeptiert die gleichen Werte wie `border`.

```css
.container {
  column-count: 3;
  column-gap: 20px;
  column-rule: 4px dotted rgb(79 185 227);
}
```

Versuchen Sie, Linien mit unterschiedlichen Stilen und Farben hinzuzufügen.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
```

```html hidden
<div class="container">
  <h1>Einfaches multicol Beispiel</h1>

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

{{ EmbedLiveSample('Styling_the_columns', '100%', 400) }}

Beachten Sie, dass die Linie keine eigene Breite einnimmt. Sie liegt über der Lücke, die Sie mit `column-gap` erstellt haben. Um auf beiden Seiten der Linie mehr Platz zu schaffen, müssen Sie die Größe des `column-gap` vergrößern.

## Spalten überspannen

Sie können ein Element über alle Spalten hinwegziehen. In diesem Fall bricht der Inhalt an der Stelle, an der das überspannende Element eingeführt wird, und wird dann unterhalb des Elements fortgesetzt, wobei ein neuer Satz von Spalten erstellt wird. Um ein Element über alle Spalten hinwegziehen zu lassen, geben Sie den Wert `all` für die {{cssxref("column-span")}}-Eigenschaft an.

> [!NOTE]
> Es ist nicht möglich, ein Element nur über _einige_ Spalten hinwegziehen zu lassen. Die Eigenschaft kann nur die Werte `none` (was der Standard ist) oder `all` haben.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
.container {
  column-count: 3;
  column-gap: 20px;
  column-rule: 4px dotted rgb(79 185 227);
}
h2 {
  column-span: all;
  background-color: rgb(79 185 227);
  color: white;
  padding: 0.5em;
}
```

```html hidden
<div class="container">
  <h1>Einfaches multicol Beispiel</h1>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.

  <h2>Überspannende Zwischenüberschrift</h2>
  Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit
  quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

  <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique
  elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit
  cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis
  dis parturient montes, nascetur ridiculus mus.</p>
</div>
```

{{ EmbedLiveSample('Spanning_columns', '100%', 550) }}

## Spalten und Fragmentierung

Der Inhalt eines mehrspaltigen Layouts ist fragmentiert. Es verhält sich im Wesentlichen so wie Inhalte in paginierten Medien, zum Beispiel wenn Sie eine Webseite drucken. Wenn Sie Ihren Inhalt in einen multicol Container verwandeln, wird dieser in Spalten fragmentiert. Damit der Inhalt das tun kann, muss er _brechen_.

### Fragmentierte Boxen

Manchmal erfolgt dieses Brechen an Stellen, die zu einem schlechten Leseerlebnis führen. Im folgenden Beispiel habe ich multicol verwendet, um eine Reihe von Boxen anzuordnen, von denen jede eine Überschrift und einen Text enthält. Die Überschrift wird vom Text getrennt, wenn die Spalten zwischen den beiden fragmentieren.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
```

```html
<div class="container">
  <div class="card">
    <h2>Ich bin die Überschrift</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>Ich bin die Überschrift</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>Ich bin die Überschrift</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>
  <div class="card">
    <h2>Ich bin die Überschrift</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>Ich bin die Überschrift</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>Ich bin die Überschrift</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>Ich bin die Überschrift</h2>
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

```css
.container {
  column-width: 250px;
  column-gap: 20px;
}

.card {
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  margin: 0 0 1em 0;
}
```

{{ EmbedLiveSample('Fragmented_boxes', '100%', 1000) }}

### Festlegen von break-inside

Um dieses Verhalten zu steuern, können wir Eigenschaften aus der [CSS-Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation) Spezifikation verwenden. Diese Spezifikation bietet uns Eigenschaften, um das Brechen von Inhalten in multicol und in paginierten Medien zu steuern. Zum Beispiel durch Hinzufügen der Eigenschaft {{cssxref("break-inside")}} mit dem Wert `avoid` zu den Regeln für `.card`. Dies ist der Container der Überschrift und des Textes, daher möchten wir nicht, dass er fragmentiert wird.

```css
.card {
  break-inside: avoid;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  margin: 0 0 1em 0;
}
```

Die Hinzufügung dieser Eigenschaft bewirkt, dass die Boxen in einem Stück bleiben – sie fragmentieren jetzt nicht mehr über die Spalten hinweg.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font:
    0.9em/1.2 Arial,
    Helvetica,
    sans-serif;
}
```

```html hidden
<div class="container">
  <div class="card">
    <h2>Ich bin die Überschrift</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>Ich bin die Überschrift</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>Ich bin die Überschrift</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>
  <div class="card">
    <h2>Ich bin die Überschrift</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>Ich bin die Überschrift</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>Ich bin die Überschrift</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>Ich bin die Überschrift</h2>
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

```css hidden
.container {
  column-width: 250px;
  column-gap: 20px;
}
```

{{ EmbedLiveSample('Setting_break-inside', '100%', 1100) }}

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Multicol](/de/docs/Learn/CSS/CSS_layout/Multicol_skills).

## Zusammenfassung

Sie wissen jetzt, wie Sie die grundlegenden Funktionen von mehrspaltigem Layout einsetzen können, ein weiteres Werkzeug, das Ihnen zur Verfügung steht, wenn Sie eine Layoutmethode für die von Ihnen erstellten Designs auswählen.

## Siehe auch

- [CSS Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation)
- [Verwendung von mehrspaltigen Layouts](/de/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)

{{PreviousMenuNext("Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout")}}
