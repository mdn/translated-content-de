---
title: "Testen Sie Ihre Fähigkeiten: Werte und Einheiten"
short-title: Werte und Einheiten
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Values
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie die verschiedenen Arten von [Werten und Einheiten, die in CSS-Eigenschaften verwendet werden](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units), verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Verwendungsleitfaden für Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe wurde dem ersten Listenelement eine Hintergrundfarbe mittels eines Hex-Farbcodes gegeben. Vervollständigen Sie das CSS, indem Sie dieselbe Farbe in verschiedenen Formaten verwenden, sowie ein letztes Listenelement, bei dem Sie den Hintergrund halbtransparent machen sollten.

- Das zweite Listenelement sollte die RGB-Farbwiedergabe verwenden.
- Das dritte sollte die HSL-Farbwiedergabe verwenden.
- Das vierte sollte die RGB-Farbwiedergabe verwenden, aber mit dem Alpha-Kanal auf `0.6` gesetzt.

[Sie können die Hex-Farbe bei convertingcolors.com konvertieren](https://convertingcolors.com/hex-color-86DEFA.html). Sie müssen herausfinden, wie die Werte in CSS verwendet werden. Ihr Endergebnis sollte wie das Bild unten aussehen:

![Vier Listenelemente. Die ersten drei mit derselben Hintergrundfarbe und das letzte mit einem helleren Hintergrund.](mdn-value-color.png)

```html live-sample___color
<ul>
  <li class="hex">hex color</li>
  <li class="rgb">RGB color</li>
  <li class="hsl">HSL color</li>
  <li class="transparency">Alpha value 0.6</li>
</ul>
```

```css live-sample___color
body {
  font: 1.2em / 1.5 sans-serif;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 1em;
  padding: 0.5em;
}

.hex {
  background-color: #86defa;
}

/* Add styles here */
```

{{EmbedLiveSample("color", "", "300px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Indem Sie [ein Farbkonvertierungstool](https://convertingcolors.com/hex-color-86DEFA.html) verwenden, sollten Sie in der Lage sein, verschiedene [Farbfunktionen](/de/docs/Web/CSS/color_value#syntax) zu verwenden, um dieselbe Farbe auf unterschiedliche Weise zu definieren:

```css
.hex {
  background-color: #86defa;
}

.rgb {
  background-color: rgb(134 222 250);
}

.hsl {
  background-color: hsl(194 92% 75%);
}

.transparency {
  background-color: rgb(134 222 250 / 60%);
}
```

</details>

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie die Schriftgröße verschiedener Textteile festlegen:

- Das `<h1>`-Element sollte `50px` sein.
- Das `<h2>`-Element sollte `2em` sein.
- Alle `<p>`-Elemente sollten `16px` sein.
- Ein `<p>`-Element, das direkt nach einem `<h1>` steht, sollte `120%` sein.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Einige Texte in unterschiedlichen Größen.](mdn-value-length.png)

```html live-sample___length
<h1>Level 1 heading</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
  daikon amaranth tatsoi tomatillo melon azuki bean garlic.
</p>
<h2>Level 2 heading</h2>
<p>
  Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
  tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
  Dandelion cucumber earthnut pea peanut soko zucchini.
</p>
```

```css live-sample___length
body {
  font: 1.2em / 1.5 sans-serif;
}

h1 {
  /* Add styles here */
}

h2 {
  /* Add styles here */
}

p {
  /* Add styles here */
}

h1 + p {
  /* Add styles here */
}
```

{{EmbedLiveSample("length", "", "420px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie können die folgenden Längenwerte verwenden:

```css
h1 {
  font-size: 50px;
}

h2 {
  font-size: 2em;
}

p {
  font-size: 16px;
}

h1 + p {
  font-size: 120%;
}
```

</details>

## Aufgabe 3

Um die Aufgabe zu vervollständigen, aktualisieren Sie das CSS, um das Hintergrundbild so zu verschieben, dass es horizontal zentriert ist und `20%` vom oberen Rand des Kastens entfernt ist.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Ein statistisches Element, das horizontal in einem Kasten zentriert und etwas vom oberen Rand des Kastens entfernt ist.](mdn-value-position.png)

```html live-sample___position
<div class="box"></div>
```

```css live-sample___position
.box {
  border: 5px solid #000;
  height: 350px;
}

.box {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/purple-star.png);
  background-repeat: no-repeat;
}
```

{{EmbedLiveSample("position", "", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Verwenden Sie `background-position` mit dem Schlüsselwort `center` und einem Prozentsatz:

```css
.box {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/purple-star.png);
  background-repeat: no-repeat;
  background-position: center 20%;
}
```

</details>
