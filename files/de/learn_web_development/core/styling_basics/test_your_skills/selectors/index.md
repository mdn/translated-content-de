---
title: "Testen Sie Ihr Wissen: Selektoren"
short-title: "Test: Selektoren"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors
l10n:
  sourceCommit: d44daf87d0785ddacb9322e93ce347736c62c2e5
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen einzuschätzen, ob Sie [CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verstehen.

Zur Bearbeitung dieser Aufgaben sollten Sie nur das CSS bearbeiten, nicht das HTML.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihr Wissen](/de/docs/Learn_web_development#test_your_skills) Nutzungsleitfaden. Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

Zur Bearbeitung der Aufgabe:

1. Machen Sie die `<h1>` Überschriften blau.
2. Geben Sie `<h2>` Überschriften einen blauen Hintergrund und weißen Text.
3. Sorgen Sie dafür, dass Text, der in einem `<span>` eingeschlossen ist, eine Schriftgröße von `200%` hat.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Text mit dem CSS angewendet für die Lösung zu Aufgabe 1.](selectors1.jpg)

```html live-sample___type
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

```css live-sample___type
body {
  font: 1.2em / 1.5 sans-serif;
}
/* Add styles here */
```

{{EmbedLiveSample("type", "", "260px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie müssen die `h1`, `h2` und `span` Selektoren ansprechen, um deren Farbe oder Größe zu ändern.

```css
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

Zur Bearbeitung der Aufgabe:

1. Geben Sie dem Element mit der ID `special` einen gelben Hintergrund.
2. Geben Sie dem Element mit der Klasse `alert` einen `2px` festen grauen Rahmen.
3. Wenn das Element mit der Klasse `alert` auch die Klasse `stop` hat, machen Sie den Hintergrund rot.
4. Wenn das Element mit der Klasse `alert` auch die Klasse `go` hat, machen Sie den Hintergrund grün.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Text mit dem CSS angewendet für die Lösung zu Aufgabe 2.](selectors2.jpg)

```html live-sample___class-id
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

```css live-sample___class-id
body {
  font: 1.2em / 1.5 sans-serif;
}
/* Add styles here */
```

{{EmbedLiveSample("class-id", "", "320px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Dies testet, ob Sie den Unterschied zwischen Klassen- und ID-Selektoren verstehen und wie man mehrere Klassen an einem Element ansprechen kann.

```css
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

Zur Bearbeitung der Aufgabe:

1. Stylen Sie Links, indem Sie den Link-Zustand orange machen, besuchte Links grün und entfernen Sie die Unterstreichung beim Hover.
2. Machen Sie das erste Element innerhalb des Containers `font-size: 150%` und die erste Zeile dieses Elements rot.
3. Ziehen Sie jede zweite Zeile in der Tabelle, indem Sie diese Zeilen auswählen und ihnen eine Hintergrundfarbe von `#333333` und weißem Vordergrund geben.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Text mit dem CSS angewendet für die Lösung zu Aufgabe 3.](selectors3.jpg)

```html live-sample___pseudo
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

```css live-sample___pseudo
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

{{EmbedLiveSample("pseudo", "", "320px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Wenden Sie eine Pseudo-Klasse (`:first-child`) und ein Pseudo-Element (`::first-line`) auf den Inhalt an.
Stylen Sie die `:link`, `:visited`, und `:hover` Zustände des `a` Elements und erstellen Sie gestreifte Tabellenzeilen mit der `:nth-child` Pseudo-Klasse.

```css
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

Zur Bearbeitung der Aufgabe:

1. Machen Sie jeden Absatz, der direkt auf ein `<h2>` Element folgt, rot.
2. Stylen Sie Listenelemente, die ein direktes Kind des `<ul>` mit der Klasse `list` sind, wie folgt:
   - Entfernen Sie deren Aufzählungszeichen.
   - Geben Sie ihnen einen `1px` grauen unteren Rahmen.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Text mit dem CSS angewendet für die Lösung zu Aufgabe 4.](selectors4.jpg)

```html live-sample___combinators
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

```css live-sample___combinators
body {
  font: 1.2em / 1.5 sans-serif;
}

/* Add styles here */
```

{{EmbedLiveSample("combinators", "", "350px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Diese Aufgabe prüft, ob Sie verstehen, wie man verschiedene Kombinatoren verwendet.
Hier ist eine passende Lösung:

```css
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

Zur Bearbeitung der Aufgabe, bieten Sie Lösungen für die folgenden Herausforderungen mit Attributselektoren:

1. Sprechen Sie das `<a>` Element mit einem `title` Attribut an und machen Sie die Umrandung pink (`border-color: pink`).
2. Sprechen Sie das `<a>` Element mit einem `href` Attribut an, das das Wort `contact` irgendwo in seinem Wert enthält, und machen Sie die Umrandung orange (`border-color: orange`).
3. Sprechen Sie das `<a>` Element mit einem `href` Wert, der mit `https` beginnt, an und geben Sie ihm eine grüne Umrandung (`border-color: green`).

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Vier Links mit unterschiedlichen farbigen Umrandungen.](selectors-attribute.png)

```html live-sample___attribute-links
<ul>
  <li><a href="https://example.com">Link 1</a></li>
  <li><a href="http://example.com" title="Visit example.com">Link 2</a></li>
  <li><a href="/contact">Link 3</a></li>
  <li><a href="../contact/index.html">Link 4</a></li>
</ul>
```

```css live-sample___attribute-links
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

{{EmbedLiveSample("attribute-links", "", "300px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

- Um Elemente mit einem title-Attribut auszuwählen, können wir title in die eckigen Klammern setzen (`a[title]`), was den zweiten Link auswählt, der der einzige mit einem title-Attribut ist.

- Sprechen Sie das `<a>` Element mit einem `href` Attribut an, das das Wort "contact" irgendwo in seinem Wert enthält, und machen Sie die Umrandung orange (`border-color: orange`).
  Hier wollen wir zwei Dinge übereinstimmen, den href-Wert `/contact` und `../contact`. Also müssen wir die Zeichenkette "contact" irgendwo im Wert mit `*=` matchen. Dies wählt die dritten und vierten Links aus.

- Sprechen Sie das `<a>` Element mit einem href-Wert, das mit `https` beginnt, an und geben Sie ihm eine grüne Umrandung (`border-color: green`).
  Suchen Sie nach einem `href` Wert, der mit "https" beginnt, also verwenden Sie `^=` um nur den ersten Link auszuwählen.

```css
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
