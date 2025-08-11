---
title: "Testen Sie Ihre Fähigkeiten: Selektoren"
short-title: Selectors
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors
l10n:
  sourceCommit: 3eef0b1e767c7e8d87a46a3450af908ce89f1ffb
---

Ziel dieses Fähigkeitstests ist es zu überprüfen, ob Sie die [CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verstehen.

Um diese Aufgaben zu erfüllen, sollten Sie ausschließlich das CSS bearbeiten, nicht das HTML.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Benutzerleitfaden zu "Testen Sie Ihre Fähigkeiten"](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

Zur Erfüllung dieser Aufgabe:

1. Machen Sie die `<h1>`-Überschriften blau.
2. Geben Sie `<h2>`-Überschriften einen blauen Hintergrund und weißen Text.
3. Lassen Sie den in einem `<span>` umschlossenen Text eine Schriftgröße von `200%` haben.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Text mit dem angewendeten CSS für die Lösung zu Aufgabe 1.](selectors1.jpg)

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

Sie müssen die `h1`-, `h2`- und `span`-Selektoren anvisieren, um deren Farbe oder Größe zu ändern.

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

Zur Erfüllung dieser Aufgabe:

1. Geben Sie dem Element mit einer ID `special` einen gelben Hintergrund.
2. Geben Sie dem Element mit einer Klasse `alert` einen `2px` soliden grauen Rand.
3. Wenn das Element mit einer Klasse `alert` auch eine Klasse `stop` hat, machen Sie den Hintergrund rot.
4. Wenn das Element mit einer Klasse `alert` auch eine Klasse `go` hat, machen Sie den Hintergrund grün.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Text mit dem angewendeten CSS für die Lösung zu Aufgabe 2.](selectors2.jpg)

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

Dies testet, ob Sie den Unterschied zwischen Klassen- und ID-Selektoren verstehen und wie man mehrere Klassen auf ein Element anwendet.

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

Zur Erfüllung dieser Aufgabe:

1. Gestalten Sie Links so, dass der Link-Zustand orange ist, besuchte Links grün und das Unterstreichen beim Hover entfernt wird.
2. Machen Sie das erste Element innerhalb des Containers `font-size: 150%` und die erste Zeile dieses Elements rot.
3. Streifen Sie jede zweite Zeile der Tabelle, indem Sie diese Zeilen auswählen und ihnen eine Hintergrundfarbe von `#333` und weiße Vordergrundfarbe geben.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Text mit dem angewendeten CSS für die Lösung zu Aufgabe 3.](selectors3.jpg)

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

Wenden Sie eine Pseudo-Klasse (`:first-child`) und ein Pseudo-Element (`::first-line`) auf den Inhalt an. Gestalten Sie die `:link`-, `:visited`- und `:hover`-Zustände des `a`-Elements und erstellen Sie gestreifte Tabellenzeilen mithilfe der `:nth-child`-Pseudo-Klasse.

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
  background-color: #333;
  color: white;
}
```

</details>

## Aufgabe 4

Zur Erfüllung dieser Aufgabe:

1. Machen Sie jeden Absatz, der direkt auf ein `<h2>`-Element folgt, rot.
2. Entfernen Sie die Aufzählungszeichen und fügen Sie einen 1px grauen unteren Rand nur für Listenpunkte hinzu, die ein direktes Kind der `<ul>` mit einer Klasse `list` sind.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Text mit dem angewendeten CSS für die Lösung zu Aufgabe 4.](selectors4.jpg)

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

Diese Aufgabe prüft, ob Sie verstehen, wie man verschiedene Kombinatoren verwendet. Hier ist eine passende Lösung:

```css
h2 + p {
  color: red;
}

.list > li {
  list-style: none;
  border-bottom: 1px solid #ccc;
}
```

</details>

## Aufgabe 5

Um die Aufgabe zu vervollständigen, bieten Sie Lösungen für die folgenden Herausforderungen mit Attributselektoren an:

1. Zielen Sie auf das `<a>`-Element mit einem `title`-Attribut und machen Sie die Umrandung pink (`border-color: pink`).
2. Zielen Sie auf das `<a>`-Element mit einem `href`-Attribut, das das Wort `contact` irgendwo im Wert enthält, und machen Sie die Umrandung orange (`border-color: orange`).
3. Zielen Sie auf das `<a>`-Element mit einem `href`-Wert, der mit `https` beginnt, und geben Sie ihm eine grüne Umrandung (`border-color: green`).

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Vier Links mit verschiedenfarbigen Umrandungen.](selectors-attribute.png)

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
  margin: 0 0 0.5em 0;
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

- Um Elemente mit einem `title`-Attribut auszuwählen, können wir `title` in die eckigen Klammern setzen (`a[title]`), was den zweiten Link auswählt, da dies der einzige mit einem `title`-Attribut ist.

- Zielen Sie auf das `<a>`-Element mit einem `href`-Attribut, das das Wort "contact" irgendwo im Wert enthält, und machen Sie die Umrandung orange (`border-color: orange`).
  Es gibt zwei Dinge, die wir hier treffen wollen: den `href`-Wert `/contact` und auch `../contact`. Daher müssen wir die Zeichenfolge "contact" irgendwo im Wert mit `*=` treffen. Dadurch werden der dritte und vierte Link ausgewählt.

- Zielen Sie auf das `<a>`-Element mit einem `href`-Wert, der mit `https` beginnt, und geben Sie ihm eine grüne Umrandung (`border-color: green`).
  Suchen Sie nach einem `href`-Wert, der mit "https" beginnt, verwenden Sie daher `^=`, um nur den ersten Link auszuwählen.

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
