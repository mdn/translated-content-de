---
title: "Testen Sie Ihr Können: Selektoren"
short-title: "Test: Selektoren"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors
l10n:
  sourceCommit: d0be159e6119ff73453bea6d224f0a2056307aa4
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen zu bewerten, ob Sie die [CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verstehen.

Um diese Aufgaben zu erledigen, sollten Sie nur das CSS und nicht das HTML bearbeiten.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unser [Testen Sie Ihr Können](/de/docs/Learn_web_development#test_your_skills)-Leitfaden. Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

Um die Aufgabe abzuschließen:

1. Färben Sie die `<h1>`-Überschriften blau.
2. Geben Sie den `<h2>`-Überschriften einen blauen Hintergrund und weißen Text.
3. Vergrößern Sie den Text, der in einem `<span>` enthalten ist, auf `200%`.

Ihr Endergebnis sollte wie die folgende Darstellung aussehen:

{{EmbedLiveSample("selectors1-finish", "", "400px")}}

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

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("selectors1-start", "", "370px")}}

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

## Aufgabe 2

Um die Aufgabe abzuschließen:

1. Geben Sie dem Element mit der ID `special` einen gelben Hintergrund.
2. Geben Sie dem Element mit der Klasse `alert` einen `2px` soliden grauen Rahmen.
3. Wenn das Element mit der Klasse `alert` auch die Klasse `stop` hat, machen Sie den Hintergrund rot.
4. Wenn das Element mit der Klasse `alert` auch die Klasse `go` hat, machen Sie den Hintergrund grün.

Ihr Endergebnis sollte wie die folgende Darstellung aussehen:

{{EmbedLiveSample("selectors2-finish", "", "480px")}}

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

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("selectors2-start", "", "480px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Dies prüft, ob Sie den Unterschied zwischen Klassen- und ID-Selektoren verstehen und auch wissen, wie Sie mehrere Klassen auf einem Element anvisieren.

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

## Aufgabe 3

Um die Aufgabe abzuschließen:

1. Gestalten Sie Links, indem Sie den Link-Zustand orange, besuchte Links grün machen und den Unterstrich beim Hover entfernen.
2. Machen Sie das erste Element innerhalb des Containers `font-size: 150%` und die erste Zeile dieses Elements rot.
3. Streifen Sie jede zweite Zeile in der Tabelle, indem Sie diese Zeilen auswählen und ihnen einen Hintergrund in der Farbe `#333333` und einen Vordergrund in weiß geben.

Ihr Endergebnis sollte wie die folgende Darstellung aussehen:

{{EmbedLiveSample("selectors3-finish", "", "540px")}}

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

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("selectors3-start", "", "440px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Wenden Sie eine Pseudo-Klasse (`:first-child`) und ein Pseudo-Element (`::first-line`) auf den Inhalt an.
Gestalten Sie die `:link`-, `:visited`- und `:hover`-Zustände des `a`-Elements und erstellen Sie gestreifte Tabellenzeilen mit der `:nth-child` Pseudo-Klasse.

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

## Aufgabe 4

Um die Aufgabe abzuschließen:

1. Färben Sie jeden Absatz, der direkt auf ein `<h2>`-Element folgt, rot.
2. Gestalten Sie Listenelemente, die ein direktes Kind des `<ul>` mit der Klasse `list` sind, wie folgt:
   - Entfernen Sie ihre Aufzählungszeichen.
   - Geben Sie ihnen einen `1px` grauen Rand unten.

Ihr Endergebnis sollte wie die folgende Darstellung aussehen:

{{EmbedLiveSample("selectors4-finish", "", "500px")}}

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

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("selectors4-start", "", "500px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Diese Aufgabe überprüft, ob Sie verstehen, wie man verschiedene Kombinatoren verwendet.
Hier ist eine geeignete Lösung:

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

## Aufgabe 5

Um die Aufgabe abzuschließen, bieten Sie Lösungen für die folgenden Herausforderungen mit Attributselektoren:

1. Zielen Sie das `<a>`-Element mit einem `title`-Attribut an und machen Sie den Rahmen pink (`border-color: pink`).
2. Zielen Sie das `<a>`-Element mit einem `href`-Attribut, das das Wort `contact` irgendwo im Wert enthält, an und machen Sie den Rahmen orange (`border-color: orange`).
3. Zielen Sie das `<a>`-Element mit einem `href`-Wert, der mit `https` beginnt, an und geben Sie ihm einen grünen Rahmen (`border-color: green`).

Ihr Endergebnis sollte wie die folgende Darstellung aussehen:

{{EmbedLiveSample("selectors5-finish", "", "300px")}}

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

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("selectors5-start", "", "300px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

- Um Elemente mit einem `title`-Attribut auszuwählen, können wir `title` innerhalb der eckigen Klammern hinzufügen (`a[title]`), was den zweiten Link auswählt, der der einzige mit einem `title`-Attribut ist.

- Zielen Sie auf das `<a>`-Element mit einem `href`-Attribut, das irgendwo im Wert das Wort "contact" enthält, und machen Sie den Rahmen orange (`border-color: orange`).
  Es gibt zwei Dinge, die wir hier übereinstimmen wollen, den `href`-Wert `/contact` und auch `../contact`. Daher müssen wir die Zeichenkette "contact" irgendwo im Wert übereinstimmen, indem wir `*=` verwenden. Dies wird den dritten und vierten Link auswählen.

- Zielen Sie auf das `<a>`-Element mit einem `href`-Wert, der mit `https` beginnt, und geben Sie ihm einen grünen Rahmen (`border-color: green`).
  Suchen Sie nach einem `href`-Wert, der mit "https" beginnt, sodass Sie `^=` verwenden, um nur den ersten Link auszuwählen.

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
