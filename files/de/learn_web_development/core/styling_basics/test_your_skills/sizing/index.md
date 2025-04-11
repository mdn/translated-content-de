---
title: "Testen Sie Ihre Fähigkeiten: Größenanpassung"
short-title: Sizing
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Ziel dieses Tests ist es, zu beurteilen, ob Sie die verschiedenen Möglichkeiten zur [Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) verstehen.

> [!NOTE]
> Klicken Sie auf **"Play"** in den untenstehenden Codeblöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Clipboard-Symbol) und ihn in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie feststecken, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Aufgabe 1

In dieser Aufgabe haben Sie zwei Boxen. Die erste sollte so dimensioniert sein, dass die Höhe mindestens 100 Pixel beträgt, auch wenn es weniger Inhalt gibt, der sie auf diese Höhe bringen würde. Jedoch sollte der Inhalt nicht überlaufen, wenn es mehr Inhalt gibt, als in 100 Pixel passt. Testen Sie diese Box, indem Sie den Inhalt aus dem HTML entfernen, um sicherzustellen, dass Sie auch ohne Inhalt eine 100 Pixel hohe Box erhalten.

Die zweite Box sollte auf 100 Pixel Höhe festgelegt sein, so dass der Inhalt überläuft, wenn es zu viel wird.

![Zwei Boxen, eine mit überlaufendem Inhalt](mdn-sizing-height-min-height.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubauen:

```html live-sample___height-min-height
<div class="box box1">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
    corn soko endive gumbo gourd.
  </p>
</div>

<div class="box box2">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
    corn soko endive gumbo gourd.
  </p>
</div>
```

```css hidden live-sample___height-min-height
body {
  font: 1.2em / 1.5 sans-serif;
  padding: 1em;
}

.box {
  border: 5px solid #000;
  width: 400px;
  margin-bottom: 1em;
}
```

```css live-sample___height-min-height
.box1 {
  /* Add styles here */
}

.box2 {
  /* Add styles here */
}
```

{{EmbedLiveSample("height-min-height", "", "500px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Es gibt zwei Boxen, die erste sollte eine Mindesthöhe haben, in diesem Fall wird sie sich vergrößern, um den zusätzlichen Inhalt aufzunehmen, aber wenn Sie Inhalt entfernen, wird die Box zumindest so hoch wie die `min-height` sein. Der zweiten wird eine feste Höhe zugewiesen, wodurch der Inhalt überlaufen wird.

```css
.box1 {
  min-height: 100px;
}

.box2 {
  height: 100px;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe haben Sie eine Box, die eine weitere Box enthält. Ihre Aufgabe ist es, die innere Box auf 60 % der Breite der äußeren Box zu setzen. Der Wert der {{cssxref("box-sizing")}}-Eigenschaft ist auf `border-box` gesetzt, was bedeutet, dass die Gesamtbreite jegliches Padding und den Rahmen einschließt. Sie sollten der inneren Box auch ein Padding von 10 % geben, indem Sie die Breite (oder die inline size) als Größe verwenden, von der dieser Prozentsatz berechnet wird.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Eine Box mit einer weiteren Box darin verschachtelt](mdn-sizing-percentages.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubauen:

```html live-sample___percentages
<div class="box">
  <div class="inner">Make me 60% of my parent's width.</div>
</div>
```

```css hidden live-sample___percentages
body {
  font: 1.2em / 1.5 sans-serif;
  padding: 1em;
}
.box {
  border: 5px solid #000;
  width: 400px;
  margin-bottom: 1em;
}

.inner {
  background-color: rebeccapurple;
  color: white;
  border-radius: 5px;
}
```

```css live-sample___percentages
* {
  box-sizing: border-box;
}
.inner {
  /* Add styles here */
}
```

{{EmbedLiveSample("percentages", "", "250px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Machen Sie die Box 60 % des Containers und geben Sie ihr auf allen Seiten 10 % Padding. Alle Elemente haben bereits `box-sizing: border-box`, damit Sie sich nicht um die Breite kümmern müssen, die Sie verwenden:

```css
* {
  box-sizing: border-box;
}
.inner {
  width: 60%;
  padding: 10%;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe haben Sie zwei Bilder in Boxen. Ein Bild ist kleiner als die Box, das andere ist größer und bricht aus der Box heraus. Wenn Sie sich vorstellen, dass die Box responsive ist und daher wachsen und schrumpfen könnte, welche Eigenschaft würden Sie auf das Bild anwenden, sodass das große Bild in die Box hinein schrumpft, aber das kleine Bild sich nicht dehnt.

Ihr Endergebnis sollte wie die Bilder unten aussehen:

![Zwei Boxen mit Bildern darin](mdn-sizing-max-width.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubauen:

```html live-sample___max-width
<div class="box">
  <img
    alt="A pink star"
    src="https://mdn.github.io/shared-assets/images/examples/star-pink_256x256.png" />
</div>

<div class="box">
  <img
    alt="Hot air balloons flying in clear sky, and a crowd of people in the foreground"
    src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
</div>
```

```css hidden live-sample___max-width
body {
  font: 1.2em / 1.5 sans-serif;
  padding: 1em;
}
.box {
  border: 5px solid #000;
  margin-bottom: 1em;
  width: 500px;
}
```

```css live-sample___max-width
img {
  /* Add styles here */
}
```

{{EmbedLiveSample("max-width", "", "700px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Das Beispiel hat ein Bild, das aus der Box herausbricht, und eines, das kleiner ist als die Box. Sie müssen `max-width` auf 100 % setzen, um das größere Bild nur so groß wie die Box wachsen zu lassen. Wenn Sie `width: 100%` verwenden, wird das kleine Bild gestreckt.

```css
img {
  max-width: 100%;
}
```

</details>

## Siehe auch

- [CSS Styling Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
