---
title: "Testen Sie Ihre Fähigkeiten: Werte und Einheiten"
slug: Learn/CSS/Building_blocks/Values_tasks
l10n:
  sourceCommit: c507c55f7a9a883d7a0308daa5e883aa0a619133
---

{{LearnSidebar}}

Ziel dieses Tests ist es, zu beurteilen, ob Sie die verschiedenen [Werte und Einheiten, die in CSS-Eigenschaften verwendet werden](/de/docs/Learn/CSS/Building_blocks/Values_and_units), verstehen.

> [!NOTE]
> Klicken Sie auf **"Abspielen"** in den Code-Blöcken unten, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Zwischenablage-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Aufgabe 1

In dieser Aufgabe wurde dem ersten Listenelement eine Hintergrundfarbe mit einem Hex-Farbcode zugewiesen. Ihre Aufgabe ist es, das CSS mit demselben Farbcode in verschiedenen Formaten zu vervollständigen, plus ein letztes Listenelement, bei dem Sie den Hintergrund halbtransparent machen sollen.

- Das zweite Listenelement sollte die Farbe im RGB-Format verwenden.
- Das dritte Listenelement sollte die Farbe im HSL-Format verwenden.
- Das vierte Listenelement sollte die Farbe im RGB-Format verwenden, jedoch mit einem Alpha-Kanal von `0.6`.

Sie [können die hexadezimale Farbe bei convertingcolors.com umrechnen](https://convertingcolors.com/hex-color-86DEFA.html). Sie müssen herausfinden, wie Sie die Werte in CSS verwenden. Ihr endgültiges Ergebnis sollte wie das Bild unten aussehen:

![Vier Listenelemente. Die ersten drei mit derselben Hintergrundfarbe und das letzte mit einem helleren Hintergrund.](mdn-value-color.png)

Versuchen Sie, den unten stehenden Code zu aktualisieren, um das fertige Beispiel zu reproduzieren:

```html live-sample___color
<ul>
  <li class="hex">hex color</li>
  <li class="rgb">RGB color</li>
  <li class="hsl">HSL color</li>
  <li class="transparency">Alpha value 0.6</li>
</ul>
```

```css hidden live-sample___color
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
```

```css live-sample___color
.hex {
  background-color: #86defa;
}

/* Add styles here */
```

{{EmbedLiveSample("color", "", "300px")}}

<details>
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Mit Hilfe eines [Werkzeugs zur Farbumrechnung](https://convertingcolors.com/hex-color-86DEFA.html) sollten Sie in der Lage sein, unterschiedliche [Farbfunktionen](/de/docs/Web/CSS/color_value#syntax) zu verwenden, um dieselbe Farbe auf unterschiedliche Weise zu definieren:

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

In dieser Aufgabe möchten wir, dass Sie die Größe verschiedener Textobjekte festlegen, wie unten beschrieben:

- Das `<h1>`-Element sollte 50 Pixel groß sein.
- Das `<h2>`-Element sollte 2em groß sein.
- Alle `<p>`-Elemente sollten 16 Pixel groß sein.
- Ein `<p>`-Element, das direkt nach einem `<h1>` folgt, sollte 120% groß sein.

Ihr endgültiges Ergebnis sollte wie das Bild unten aussehen:

![Einige Texte in unterschiedlichen Größen.](mdn-value-length.png)

Versuchen Sie, den unten stehenden Code zu aktualisieren, um das fertige Beispiel zu reproduzieren:

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

```css hidden live-sample___length
body {
  font: 1.2em / 1.5 sans-serif;
}
```

```css live-sample___length
h1 {
}

h2 {
}

p {
}

h1 + p {
}
```

{{EmbedLiveSample("length", "", "420px")}}

<details>
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

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

In dieser Aufgabe möchten wir, dass Sie das Hintergrundbild so verschieben, dass es horizontal zentriert ist und 20% vom oberen Rand der Box entfernt ist.

Ihr endgültiges Ergebnis sollte wie das Bild unten aussehen:

![Ein statisches Element, das horizontal in einer Box zentriert ist und sich ein Stück vom oberen Rand der Box entfernt befindet.](mdn-value-position.png)

Versuchen Sie, den unten stehenden Code zu aktualisieren, um das fertige Beispiel zu reproduzieren:

```html live-sample___position
<div class="box"></div>
```

```css hidden live-sample___position
.box {
  border: 5px solid #000;
  height: 350px;
}
```

```css live-sample___position
.box {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/purple-star.png);
  background-repeat: no-repeat;
}
```

{{EmbedLiveSample("position", "", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Verwenden Sie `background-position` mit dem Schlüsselwort `center` und einem Prozentsatz:

```css
.box {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/purple-star.png);
  background-repeat: no-repeat;
  background-position: center 20%;
}
```

</details>

## Siehe auch

- [CSS-Bausteine](/de/docs/Learn/CSS/Building_blocks)
