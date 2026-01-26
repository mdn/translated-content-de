---
title: "Testen Sie Ihre Fähigkeiten: Werte und Einheiten"
short-title: "Test: Werte und Einheiten"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Values
l10n:
  sourceCommit: 9793615d7d2055dd13f5d3c588307e4dc2a7b92a
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie die verschiedenen Arten von [Werten und Einheiten, die in CSS-Eigenschaften verwendet werden](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units), verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zum Testen Ihrer Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe hat der erste Listeneintrag eine Hintergrundfarbe mit einem hexadezimalen Farbcode erhalten. Vervollständigen Sie das CSS, indem Sie dieselbe Farbe in verschiedenen Formaten verwenden, plus einem letzten Listeneintrag, bei dem Sie den Hintergrund halbtransparent machen sollten.

- Der zweite Listeneintrag sollte die RGB-Farbe verwenden.
- Der dritte sollte HSL-Farbe verwenden.
- Der vierte sollte RGB-Farbe verwenden, jedoch mit einem Alphakanal, der auf `0.6` gesetzt ist.

Sie [können die hexadezimale Farbe unter convertingcolors.com umwandeln](https://convertingcolors.com/hex-color-86DEFA.html). Sie müssen herausfinden, wie Sie die Werte in CSS verwenden. Ihr Endergebnis sollte wie die folgende Darstellung aussehen:

{{EmbedLiveSample("values1-finish", "", "300px")}}

```html live-sample___values1-start live-sample___values1-finish
<ul>
  <li class="hex">hex color</li>
  <li class="rgb">RGB color</li>
  <li class="hsl">HSL color</li>
  <li class="transparency">Alpha value 0.6</li>
</ul>
```

```css live-sample___values1-start live-sample___values1-finish
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

Dies ist der Anfangszustand der Aufgabe:

{{EmbedLiveSample("values1-start", "", "300px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Durch die Verwendung eines [Farbumwandlungstools](https://convertingcolors.com/hex-color-86DEFA.html) sollten Sie in der Lage sein, verschiedene [Farbfunktionen](/de/docs/Web/CSS/Reference/Values/color_value#syntax) zu verwenden, um dieselbe Farbe auf unterschiedliche Weise zu definieren:

```css live-sample___values1-finish
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

In dieser Aufgabe möchten wir, dass Sie die Schriftgröße verschiedener Textelemente festlegen:

- Das `<h1>` Element sollte `50px` sein.
- Das `<h2>` Element sollte `2em` sein.
- Alle `<p>` Elemente sollten `16px` sein.
- Ein `<p>` Element, das direkt nach einem `<h1>` steht, sollte `120%` sein.

Ihr Endergebnis sollte wie die folgende Darstellung aussehen:

{{EmbedLiveSample("values2-finish", "", "420px")}}

```html live-sample___values2-start live-sample___values2-finish
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

```css live-sample___values2-start live-sample___values2-finish
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

Dies ist der Anfangszustand der Aufgabe:

{{EmbedLiveSample("values2-start", "", "420px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie können die folgenden Längenwerte verwenden:

```css live-sample___values2-finish
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

Um die Aufgabe abzuschließen, aktualisieren Sie das CSS, um das Hintergrundbild so zu verschieben, dass es horizontal zentriert ist und `20%` von der Oberseite des Kastens entfernt ist.

Ihr Endergebnis sollte wie die folgende Darstellung aussehen:

{{EmbedLiveSample("values3-finish", "", "400px")}}

```html live-sample___values3-start live-sample___values3-finish
<div class="box"></div>
```

```css live-sample___values3-start live-sample___values3-finish
.box {
  border: 5px solid black;
  height: 350px;
}

.box {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/purple-star.png");
  background-repeat: no-repeat;
}
```

Dies ist der Anfangszustand der Aufgabe:

{{EmbedLiveSample("values3-start", "", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Verwenden Sie `background-position` mit dem Schlüsselwort `center` und einem Prozentsatz:

```css live-sample___values3-finish
.box {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/purple-star.png");
  background-repeat: no-repeat;
  background-position: center 20%;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}
