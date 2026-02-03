---
title: "Testen Sie Ihre Fähigkeiten: Selektoren"
short-title: "Test: Selektoren"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors
l10n:
  sourceCommit: a623d4459e2aa00d17dc0fd6b6bc44f56c589950
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}

Ziel dieses Fähigkeitentests ist es, Ihnen dabei zu helfen, zu beurteilen, ob Sie [CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verstehen.

Zur Durchführung dieser Aufgaben sollten Sie nur das CSS bearbeiten, nicht das HTML.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zur Nutzung](/de/docs/Learn_web_development#test_your_skills) der Testen Sie Ihre Fähigkeiten. Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Selektoren 1

Um die Aufgabe abzuschließen:

1. Machen Sie die `<h1>`-Überschriften blau.
2. Geben Sie `<h2>`-Überschriften einen blauen Hintergrund und weißen Text.
3. Veranlassen Sie, dass Text, der in einem `<span>` enthalten ist, eine Schriftgröße von `200%` hat.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{EmbedLiveSample("selectors1-start", "", "370px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___selectors1-start live-sample___selectors1-finish
<div class="container">
  <h1>This is a heading</h1>
  <p>
    Veggies es <span>bonus vobis</span>, proinde vos postulo essum magis
    kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
    garlic.
  </p>
  <h2>A level 2 heading</h2>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</div>
```

```css live-sample___selectors1-start live-sample___selectors1-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
/* Add styles here */
```

Das aktualisierte Styling sollte so aussehen:

{{EmbedLiveSample("selectors1-finish", "", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie müssen die `h1`-, `h2`- und `span`-Selektoren anvisieren, um deren Farbe oder Größe zu ändern.

```css live-sample___selectors1-finish
h1 {
  color: blue;
}

h2 {
  background-color: blue;
  color: white;
}

span {
  font-size: 200%;
}
```

</details>

## Selektoren 2

Um die Aufgabe abzuschließen:

1. Geben Sie dem Element mit einer ID von `special` einen gelben Hintergrund.
2. Geben Sie dem Element mit einer Klasse von `alert` einen `2px` dicken soliden grauen Rahmen.
3. Wenn das Element mit einer Klasse von `alert` auch eine Klasse von `stop` hat, machen Sie den Hintergrund rot.
4. Wenn das Element mit einer Klasse von `alert` auch eine Klasse von `go` hat, machen Sie den Hintergrund grün.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{EmbedLiveSample("selectors2-start", "", "480px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___selectors2-start live-sample___selectors2-finish
<div class="container">
  <h1>This is a heading</h1>
  <p>
    Veggies es <span class="alert">bonus vobis</span>, proinde vos postulo
    <span class="alert stop">essum magis</span> kohlrabi welsh onion daikon
    amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <h2 id="special">A level 2 heading</h2>
  <p>Gumbo beet greens corn soko endive gumbo gourd.</p>
  <h2>Another level 2 heading</h2>
  <p>
    <span class="alert go">Parsley shallot</span> courgette tatsoi pea sprouts
    fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber
    earthnut pea peanut soko zucchini.
  </p>
</div>
```

```css live-sample___selectors2-start live-sample___selectors2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
/* Add styles here */
```

Das aktualisierte Styling sollte so aussehen:

{{EmbedLiveSample("selectors2-finish", "", "480px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Dieser Test überprüft, ob Sie den Unterschied zwischen Klassen- und ID-Selektoren verstehen, und auch, wie Sie mehrere Klassen auf ein Element anvisieren.

```css live-sample___selectors2-finish
#special {
  background-color: yellow;
}

.alert {
  border: 2px solid grey;
}

.alert.stop {
  background-color: red;
}

.alert.go {
  background-color: green;
}
```

</details>

## Selektoren 3

Um die Aufgabe abzuschließen:

1. Stylen Sie Links, indem Sie den Link-Zustand orange, besuchte Links grün machen und den Unterstrich beim Hover entfernen.
2. Machen Sie das erste Element innerhalb des Containers `font-size: 150%` und die erste Zeile dieses Elements rot.
3. Streifen Sie jede zweite Zeile in der Tabelle, indem Sie diese Zeilen auswählen und ihnen eine Hintergrundfarbe von `#333333` und Vordergrundfarbe weiß geben.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{EmbedLiveSample("selectors3-start", "", "440px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___selectors3-start live-sample___selectors3-finish
<div class="container">
  <p>
    Veggies es <a href="http://example.com">bonus vobis</a>, proinde vos postulo
    essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon
    azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <table>
    <tbody>
      <tr>
        <th>Fruits</th>
        <th>Vegetables</th>
      </tr>
      <tr>
        <td>Apple</td>
        <td>Potato</td>
      </tr>
      <tr>
        <td>Orange</td>
        <td>Carrot</td>
      </tr>
      <tr>
        <td>Tomato</td>
        <td>Parsnip</td>
      </tr>
      <tr>
        <td>Kiwi</td>
        <td>Onion</td>
      </tr>
      <tr>
        <td>Banana</td>
        <td>Beet</td>
      </tr>
    </tbody>
  </table>
</div>
```

```css live-sample___selectors3-start live-sample___selectors3-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}

table {
  border-collapse: collapse;
  width: 300px;
}

td,
th {
  padding: 0.2em;
  text-align: left;
}

/* Add styles here */
```

Das aktualisierte Styling sollte so aussehen:

{{EmbedLiveSample("selectors3-finish", "", "540px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Wenden Sie eine Pseudo-Klasse (`:first-child`) und ein Pseudo-Element (`::first-line`) auf den Inhalt an.
Stylen Sie die `:link`, `:visited` und `:hover` Zustände des `a`-Elements und erstellen Sie gestreifte Tabellenzeilen mit der Pseudo-Klasse `:nth-child`.

```css live-sample___selectors3-finish
.container p:first-child {
  font-size: 150%;
}

.container p:first-child::first-line {
  color: red;
}

a:link {
  color: orange;
}

a:visited {
  color: green;
}

a:hover {
  text-decoration: none;
}

tr:nth-child(even) {
  background-color: #333333;
  color: white;
}
```

</details>

## Selektoren 4

Um die Aufgabe abzuschließen:

1. Machen Sie jeden Absatz, der direkt einem `<h2>`-Element folgt, rot.
2. Stylen Sie Listenelemente, die ein direktes Kind des `<ul>` mit einer Klasse von `list` sind, wie folgt:
   - Entfernen Sie deren Aufzählungszeichen.
   - Geben Sie ihnen einen `1px` grauen unteren Rahmen.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{EmbedLiveSample("selectors4-start", "", "500px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___selectors4-start live-sample___selectors4-finish
<div class="container">
  <h2>This is a heading</h2>
  <p>This paragraph comes after the heading.</p>
  <p>This is the second paragraph.</p>

  <h2>Another heading</h2>
  <p>This paragraph comes after the heading.</p>
  <ul class="list">
    <li>One</li>
    <li>
      Two
      <ul>
        <li>2.1</li>
        <li>2.2</li>
      </ul>
    </li>
    <li>Three</li>
  </ul>
</div>
```

```css live-sample___selectors4-start live-sample___selectors4-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

/* Add styles here */
```

Das aktualisierte Styling sollte so aussehen:

{{EmbedLiveSample("selectors4-finish", "", "500px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Diese Aufgabe überprüft, ob Sie verstehen, wie verschiedene Kombinatoren verwendet werden.
Hier ist eine passende Lösung:

```css live-sample___selectors4-finish
h2 + p {
  color: red;
}

.list > li {
  list-style: none;
  border-bottom: 1px solid #cccccc;
}
```

</details>

## Selektoren 5

Um die Aufgabe abzuschließen, finden Sie Lösungen für die folgenden Herausforderungen mit Attributselektoren:

1. Visieren Sie das `<a>`-Element mit einem `title`-Attribut an und machen Sie die Umrandung pink (`border-color: pink`).
2. Visieren Sie das `<a>`-Element mit einem `href`-Attribut an, das irgendwo in seinem Wert das Wort `contact` enthält, und machen Sie die Umrandung orange (`border-color: orange`).
3. Visieren Sie das `<a>`-Element mit einem `href`-Wert an, der mit `https` beginnt, und geben Sie ihm eine grüne Umrandung (`border-color: green`).

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{EmbedLiveSample("selectors5-start", "", "300px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___selectors5-start live-sample___selectors5-finish
<ul>
  <li><a href="https://example.com">Link 1</a></li>
  <li><a href="http://example.com" title="Visit example.com">Link 2</a></li>
  <li><a href="/contact">Link 3</a></li>
  <li><a href="../contact/index.html">Link 4</a></li>
</ul>
```

```css live-sample___selectors5-start live-sample___selectors5-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 0.5em;
}

a {
  display: block;
  padding: 0.5em;
}

a {
  border: 5px solid grey;
}

/* Add styles here */
```

Das aktualisierte Styling sollte so aussehen:

{{EmbedLiveSample("selectors5-finish", "", "300px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

- Um Elemente mit einem Titelattribut auszuwählen, können wir `title` in die eckigen Klammern hinzufügen (`a[title]`), was den zweiten Link auswählt, der der einzige mit einem Titelattribut ist.

- Visieren Sie das `<a>`-Element mit einem `href`-Attribut an, welches das Wort "contact" irgendwo in seinem Wert enthält, und machen Sie die Umrandung orange (`border-color: orange`).
  Es gibt hier zwei Dinge, die wir anvisieren wollen: den href-Wert `/contact` und auch `../contact`. Daher müssen wir den String "contact" irgendwo im Wert mit `*=` anvisieren. Dies wird den dritten und vierten Link auswählen.

- Visieren Sie das `<a>`-Element mit einem href-Wert an, der mit `https` beginnt, und geben Sie ihm eine grüne Umrandung (`border-color: green`).
  Suchen Sie nach einem `href`-Wert, der mit "https" beginnt, verwenden Sie daher `^=`, um nur den ersten Link auszuwählen.

```css live-sample___selectors5-finish
a[title] {
  border-color: pink;
}
a[href*="contact"] {
  border-color: orange;
}
a[href^="https"] {
  border-color: green;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}
