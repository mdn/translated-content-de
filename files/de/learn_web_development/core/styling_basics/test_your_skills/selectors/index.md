---
title: "Testen Sie Ihre Fähigkeiten: Selektoren"
short-title: Selectors
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Ziel dieses Tests ist es, zu überprüfen, ob Sie die [CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verstehen.

> [!NOTE]
> Klicken Sie auf **"Play"** in den folgenden Codeblöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Zwischenablage-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe sollen Sie mit CSS Folgendes erreichen, ohne das HTML zu ändern:

- Machen Sie `<h1>`-Überschriften blau.
- Geben Sie `<h2>`-Überschriften einen blauen Hintergrund und weißen Text.
- Veranlassen Sie, dass Text, der in einem `<span>` eingeschlossen ist, eine Schriftgröße von 200% hat.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Text mit dem CSS, das für die Lösung der Aufgabe 1 angewendet wurde.](selectors1.jpg)

Versuchen Sie den folgenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Sie müssen die Selektoren `h1`, `h2` und `span` anvisieren, um deren Farbe oder Größe zu ändern.

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

In dieser Aufgabe möchten wir, dass Sie das Aussehen des Inhalts in diesem Beispiel ändern, ohne das HTML zu ändern:

- Geben Sie dem Element mit der id `special` einen gelben Hintergrund.
- Geben Sie dem Element mit der Klasse `alert` einen 2px grauen Rand.
- Wenn das Element mit der Klasse `alert` auch die Klasse `stop` hat, machen Sie den Hintergrund rot.
- Wenn das Element mit der Klasse `alert` auch die Klasse `go` hat, machen Sie den Hintergrund grün.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Text mit dem CSS, das für die Lösung der Aufgabe 2 angewendet wurde.](selectors2.jpg)

Versuchen Sie den folgenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Dies prüft, ob Sie den Unterschied zwischen Klassen- und ID-Selektoren verstehen und wie Sie mehrere Klassen auf einem Element anvisieren können.

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

In dieser Aufgabe sollen Sie folgende Änderungen vornehmen, ohne das HTML zu ändern:

- Gestalten Sie Links so, dass der Link-Zustand orange, besuchte Links grün sind und der Unterstrich beim Hover entfernt wird.
- Machen Sie das erste Element im Container `font-size: 150%` und die erste Zeile dieses Elements rot.
- Streifen Sie jede zweite Zeile in der Tabelle, indem Sie diese Zeilen auswählen und ihnen eine Hintergrundfarbe von `#333` und Vordergrundfarbe weiß geben.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Text mit dem CSS, das für die Lösung der Aufgabe 3 angewendet wurde.](selectors3.jpg)

Versuchen Sie den folgenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

```css hidden live-sample___pseudo
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
```

```css live-sample___pseudo
/* Add styles here */
```

{{EmbedLiveSample("pseudo", "", "320px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Wenden Sie eine Pseudo-Klasse (`:first-child`) und ein Pseudo-Element (`::first-line`) auf den Inhalt an.
Stilieren Sie die `:link`, `:visited` und `:hover` Zustände des `a`-Elements und erstellen Sie gestreifte Tabellenzeilen mit der `:nth-child` Pseudo-Klasse.

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
  color: #fff;
}
```

</details>

## Aufgabe 4

In dieser Aufgabe sollen Sie Folgendes tun:

- Machen Sie jeden Absatz, der direkt auf ein `<h2>`-Element folgt, rot.
- Entfernen Sie die Aufzählungspunkte und fügen Sie den Listenelementen, die ein direkter Nachkomme einer `ul` mit der Klasse `list` sind, einen 1px grauen unteren Rand hinzu.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Text mit dem CSS, das für die Lösung der Aufgabe 4 angewendet wurde.](selectors4.jpg)

Versuchen Sie den folgenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Diese Aufgabe überprüft, ob Sie wissen, wie man verschiedene Kombinatoren verwendet.
Hier ist eine passende Lösung:

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

In dieser Aufgabe fügen Sie CSS mit Attributselektoren hinzu, um Folgendes zu tun:

- Ziel ist das `<a>`-Element mit einem `title`-Attribut und eine pinke Umrandung (`border-color: pink`).
- Ziel ist das `<a>`-Element mit einem `href`-Attribut, das irgendwo im Wert das Wort `contact` enthält, und machen Sie die Umrandung orange (`border-color: orange`).
- Ziel ist das `<a>`-Element mit einem `href`-Wert, der mit `https` beginnt, und geben Sie ihm eine grüne Umrandung (`border-color: green`).

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Vier Links mit unterschiedlich farbigen Rändern.](selectors-attribute.png)

Versuchen Sie den folgenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___attribute-links
<ul>
  <li><a href="https://example.com">Link 1</a></li>
  <li><a href="http://example.com" title="Visit example.com">Link 2</a></li>
  <li><a href="/contact">Link 3</a></li>
  <li><a href="../contact/index.html">Link 4</a></li>
</ul>
```

```css hidden live-sample___attribute-links
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
```

```css live-sample___attribute-links
a {
  border: 5px solid grey;
}
/* Add styles here */
```

{{EmbedLiveSample("attribute-links", "", "300px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

- Um Elemente mit einem Titelattribut auszuwählen, können wir Titel in eckigen Klammern hinzufügen (`a[title]`), was den zweiten Link auswählen wird, der der einzige mit einem Titelattribut ist.

- Ziel ist das `<a>`-Element mit einem `href`-Attribut, das das Wort "contact" irgendwo im Wert enthält, und machen Sie die Umrandung orange (`border-color: orange`).
  Es gibt zwei Dinge, die wir hier übereinstimmen wollen, der `href`-Wert `/contact` und auch `../contact`. Also müssen wir die Zeichenkette "contact" irgendwo im Wert mit `*=` übereinstimmen. Dies wird den dritten und vierten Link auswählen.

- Ziel ist das `<a>`-Element mit einem href-Wert, das mit `https` beginnt, und geben Sie ihm eine grüne Umrandung (`border-color: green`).
  Suchen Sie nach einem `href`-Wert, der mit "https" beginnt, also verwenden Sie `^=`, um nur den ersten Link auszuwählen.

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

## Siehe auch

- [CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
