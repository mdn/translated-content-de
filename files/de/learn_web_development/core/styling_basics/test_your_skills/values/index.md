---
title: "Testen Sie Ihre Fähigkeiten: Werte und Einheiten"
short-title: "Test: Werte und Einheiten"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Values
l10n:
  sourceCommit: 78bdd004c24d256efc8372f18204ea58f83a1b5e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, einzuschätzen, ob Sie die verschiedenen Arten von [Werten und Einheiten, die in CSS-Eigenschaften verwendet werden](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units), verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zum Testen Ihrer Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) Kontakt zu uns aufnehmen.

## Aufgabe 1

In dieser Aufgabe wurde dem ersten Listenelement eine Hintergrundfarbe mittels eines Hex-Farbcodes zugewiesen. Vervollständigen Sie das CSS, indem Sie dieselbe Farbe in verschiedenen Formaten verwenden, sowie ein letztes Listenelement, bei dem Sie den Hintergrund halbtransparent machen.

- Das zweite Listenelement sollte die RGB-Farbe verwenden.
- Das dritte sollte die HSL-Farbe verwenden.
- Das vierte sollte die RGB-Farbe verwenden, aber mit dem Alpha-Kanal auf `0.6` gesetzt.

Sie [können die Hex-Farbe auf convertingcolors.com konvertieren](https://convertingcolors.com/hex-color-86DEFA.html). Sie müssen herausfinden, wie Sie die Werte in CSS verwenden. Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

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

Durch die Verwendung [eines Farbkonvertierungstools](https://convertingcolors.com/hex-color-86DEFA.html) sollten Sie in der Lage sein, verschiedene [Farbfunktionen](/de/docs/Web/CSS/color_value#syntax) zu nutzen, um dieselbe Farbe auf unterschiedliche Weise zu definieren:

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

In dieser Aufgabe sollen Sie die Schriftgröße verschiedener Textteile festlegen:

- Das `<h1>`-Element sollte `50px` groß sein.
- Das `<h2>`-Element sollte `2em` groß sein.
- Alle `<p>`-Elemente sollten `16px` groß sein.
- Ein `<p>`-Element, das sich direkt nach einem `<h1>` befindet, sollte `120%` sein.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Einige Texte mit unterschiedlichen Größen.](mdn-value-length.png)

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

Um die Aufgabe zu vervollständigen, aktualisieren Sie das CSS, um das Hintergrundbild so zu verschieben, dass es horizontal zentriert und `20%` vom oberen Rand des Kastens entfernt ist.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Ein horizontales Zentrieren in einem Kasten und kurze Distanz vom oberen Rand des Kastens.](mdn-value-position.png)

```html live-sample___position
<div class="box"></div>
```

```css live-sample___position
.box {
  border: 5px solid black;
  height: 350px;
}

.box {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/purple-star.png");
  background-repeat: no-repeat;
}
```

{{EmbedLiveSample("position", "", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Verwenden Sie `background-position` mit dem `center` Schlüsselwort und einem Prozentsatz:

```css
.box {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/purple-star.png");
  background-repeat: no-repeat;
  background-position: center 20%;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}
