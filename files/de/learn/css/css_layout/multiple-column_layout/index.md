---
title: Mehrspaltiges Layout
slug: Learn/CSS/CSS_layout/Multiple-column_Layout
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout")}}

Die Mehrspaltiges-Layout-Spezifikation bietet Ihnen eine Methode, um Inhalte in Spalten anzuordnen, wie Sie sie vielleicht in einer Zeitung sehen. Dieser Artikel erklärt, wie Sie diese Funktion nutzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man Mehrspalten-Layouts auf Webseiten erstellt, wie man sie vielleicht in einer Zeitung findet.
      </td>
    </tr>
  </tbody>
</table>

## Ein einfaches Beispiel

Lassen Sie uns erkunden, wie man ein Mehrspalten-Layout verwendet — oft als _multicol_ bezeichnet. Sie können mitmachen, indem Sie die [Ausgangsdatei für multicol herunterladen](https://github.com/mdn/learning-area/blob/main/css/css-layout/multicol/0-starting-point.html) und das CSS an den entsprechenden Stellen hinzufügen. Am Ende des Abschnitts sehen Sie ein Beispiel, wie der endgültige Code aussehen sollte.

### Ein Drei-Spalten-Layout

Unsere Ausgangsdatei enthält sehr einfaches HTML: einen Wrapper mit einer Klasse `container`, in dem sich eine Überschrift und einige Absätze befinden.

Das {{htmlelement("div")}} mit der Klasse container wird unser multicol-Container. Wir aktivieren multicol, indem wir eine von zwei Eigenschaften verwenden: {{cssxref("column-count")}} oder {{cssxref("column-width")}}. Die `column-count`-Eigenschaft nimmt eine Zahl als Wert und erstellt diese Anzahl an Spalten. Wenn Sie das folgende CSS zu Ihrem Stylesheet hinzufügen und die Seite neu laden, erhalten Sie drei Spalten:

```css
.container {
  column-count: 3;
}
```

Die von Ihnen erstellten Spalten haben flexible Breiten – der Browser berechnet, wie viel Platz jeder Spalte zugewiesen werden soll.

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
  <h1>Simple multicol example</h1>

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

### Einstellen von column-width

Ändern Sie Ihr CSS, um `column-width` wie folgt zu verwenden:

```css
.container {
  column-width: 200px;
}
```

Der Browser gibt Ihnen nun so viele Spalten, wie er von der von Ihnen angegebenen Größe unterbringen kann; der verbleibende Platz wird dann zwischen den vorhandenen Spalten aufgeteilt. Das bedeutet, dass Sie nicht genau die von Ihnen angegebene Breite erhalten, es sei denn, Ihr Container ist genau durch diese Breite teilbar.

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
  <h1>Simple multicol example</h1>

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

## Die Spalten stylen

Die von multicol erstellten Spalten können nicht einzeln gestylt werden. Es gibt keine Möglichkeit, eine Spalte größer als andere zu machen oder die Hintergrund- oder Textfarbe einer einzelnen Spalte zu ändern. Sie haben zwei Möglichkeiten, die Anzeige der Spalten zu ändern:

- Ändern der Größe des Abstands zwischen den Spalten mit {{cssxref("column-gap")}}.
- Hinzufügen einer Linie zwischen den Spalten mit {{cssxref("column-rule")}}.

Verwenden Sie Ihr obiges Beispiel und ändern Sie die Größe des Abstands, indem Sie eine `column-gap`-Eigenschaft hinzufügen. Sie können mit verschiedenen Werten experimentieren – die Eigenschaft akzeptiert jede Längeneinheit.

Fügen Sie nun eine Linie zwischen den Spalten mit `column-rule` hinzu. Ähnlich wie die Eigenschaft {{cssxref("border")}}, die Sie in vorherigen Lektionen kennengelernt haben, ist `column-rule` eine Abkürzung für {{cssxref("column-rule-color")}}, {{cssxref("column-rule-style")}} und {{cssxref("column-rule-width")}} und akzeptiert die gleichen Werte wie `border`.

```css
.container {
  column-count: 3;
  column-gap: 20px;
  column-rule: 4px dotted rgb(79 185 227);
}
```

Versuchen Sie, Linien verschiedener Stile und Farben hinzuzufügen.

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
  <h1>Simple multicol example</h1>

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

Etwas, das man beachten sollte, ist, dass die Linie keine eigene Breite beansprucht. Sie liegt im Abstand, den Sie mit `column-gap` erstellt haben. Um mehr Platz auf beiden Seiten der Linie zu schaffen, müssen Sie die `column-gap`-Größe erhöhen.

## Spalten überspannen

Sie können ein Element über alle Spalten überspannen. In diesem Fall bricht der Inhalt dort, wo das überspannende Element eingeführt wird, und wird dann unter dem Element fortgesetzt, wodurch ein neuer Satz von Spalten entsteht. Um ein Element über alle Spalten zu überspannen, geben Sie den Wert `all` für die Eigenschaft {{cssxref("column-span")}} an.

> [!NOTE]
> Es ist nicht möglich, ein Element nur über _einige_ Spalten zu überspannen. Die Eigenschaft kann nur die Werte `none` (der Standardwert) oder `all` haben.

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
  <h1>Simple multicol example</h1>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.

  <h2>Spanning subhead</h2>
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

Der Inhalt eines Mehrspalten-Layouts ist fragmentiert. Er verhält sich im Wesentlichen so, wie es Inhalte in Seitenträgern tun, wenn Sie beispielsweise eine Webseite drucken. Wenn Sie Ihren Inhalt in einen multicol-Container umwandeln, wird er in Spalten fragmentiert. Damit der Inhalt dies tun kann, muss er _brechen_.

### Fragmentierte Boxen

Manchmal geschieht dieses Brechen an Stellen, die zu einem schlechten Leseerlebnis führen. Im folgenden Beispiel habe ich multicol verwendet, um eine Reihe von Boxen anzuordnen, von denen jede eine Überschrift und etwas Text enthält. Die Überschrift wird vom Text getrennt, wenn die Spalten zwischen den beiden fragmentieren.

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
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>
  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
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

### break-inside einstellen

Um dieses Verhalten zu steuern, können wir Eigenschaften aus der [CSS Fragmentation](/de/docs/Web/CSS/CSS_fragmentation) Spezifikation verwenden. Diese Spezifikation gibt uns Eigenschaften, um das Brechen von Inhalten in multicol und in Seitenträgern zu steuern. Zum Beispiel, indem Sie die Eigenschaft {{cssxref("break-inside")}} mit einem Wert von `avoid` zu den Regeln für `.card` hinzufügen. Dies ist der Container für die Überschrift und den Text, daher wollen wir nicht, dass er fragmentiert wird.

```css
.card {
  break-inside: avoid;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  margin: 0 0 1em 0;
}
```

Durch die Hinzufügung dieser Eigenschaft bleiben die Boxen in einem Stück - sie fragmentieren nun nicht mehr über die Spalten hinweg.

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
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>
  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
      aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
      pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc,
      at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
      Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
    </p>
  </div>

  <div class="card">
    <h2>I am the heading</h2>
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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen - siehe [Testen Sie Ihre Fähigkeiten: Multicol](/de/docs/Learn/CSS/CSS_layout/Multicol_skills).

## Zusammenfassung

Sie wissen jetzt, wie Sie die Grundfunktionen des Mehrspalten-Layouts verwenden können, ein weiteres Werkzeug, das Ihnen zur Verfügung steht, wenn Sie eine Layout-Methode für die Designs wählen, die Sie erstellen.

## Siehe auch

- [CSS Fragmentation](/de/docs/Web/CSS/CSS_fragmentation)
- [Verwendung von Mehrspalten-Layouts](/de/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)

{{PreviousMenuNext("Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout")}}
