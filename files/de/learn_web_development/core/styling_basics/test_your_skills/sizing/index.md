---
title: "Testen Sie Ihre Fähigkeiten: Größenanpassung"
short-title: Sizing
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

Ziel dieses Tests ist es, Ihnen dabei zu helfen, zu beurteilen, ob Sie die verschiedenen Möglichkeiten der [Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Leitfaden. Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe haben Sie zwei Boxen.

Um die Aufgabe abzuschließen:

1. Passen Sie die erste Box so an, dass die Höhe mindestens `100px` beträgt, auch wenn der Inhalt weniger ist, als um auf diese Höhe zu wachsen. Der Inhalt sollte jedoch nicht überlaufen, wenn es mehr Inhalt gibt, als in 100 Pixel passen.
2. Testen Sie diese Box, indem Sie den Inhalt aus dem HTML entfernen, um sicherzustellen, dass Sie immer noch eine `100px` hohe Box erhalten, selbst ohne Inhalt.
3. Passen Sie die zweite Box so an, dass sie fest auf `100px` Höhe eingestellt ist, sodass der Inhalt überläuft, wenn er zu viel ist.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Zwei Boxen, eine mit überlaufendem Inhalt](mdn-sizing-height-min-height.png)

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

```css live-sample___height-min-height
body {
  font: 1.2em / 1.5 sans-serif;
  padding: 1em;
}

.box {
  border: 5px solid black;
  width: 400px;
  margin-bottom: 1em;
}

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

Es gibt zwei Boxen, die erste sollte eine minimale Höhe erhalten, in diesem Fall wird sie sich erweitern, um den zusätzlichen Inhalt aufzunehmen, aber wenn Sie etwas Inhalt entfernen, wird die Box mindestens so hoch sein wie die `min-height`. Die zweite erhält eine feste Höhe, die dazu führt, dass der Inhalt überläuft.

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

In dieser Aufgabe haben Sie eine Box, die eine weitere Box enthält.

Um die Aufgabe abzuschließen:

1. Passen Sie die Breite der inneren Box auf `60%` der Breite der äußeren Box an. Der Wert der {{cssxref("box-sizing")}} Eigenschaft ist auf `border-box` gesetzt, was bedeutet, dass die Gesamtbreite jegliche Polsterung und Rahmen einschließt.
2. Geben Sie der inneren Box eine Polsterung von `10%`, wobei die Breite (oder Inline-Größe) als Maßstab verwendet wird, von dem dieser Prozentsatz berechnet wird.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Eine Box mit einer weiteren Box darin verschachtelt](mdn-sizing-percentages.png)

```html live-sample___percentages
<div class="box">
  <div class="inner">Make me 60% of my parent's width.</div>
</div>
```

```css live-sample___percentages
body {
  font: 1.2em / 1.5 sans-serif;
  padding: 1em;
}

.box {
  border: 5px solid black;
  width: 400px;
  margin-bottom: 1em;
}

.inner {
  background-color: rebeccapurple;
  color: white;
  border-radius: 5px;
}

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

Machen Sie die Box 60% des Containers und geben Sie ihr 10% Polsterung auf allen Seiten.
Alle Elemente haben bereits `box-sizing: border-box`, um Ihnen die Sorge zu ersparen, welche Breite Sie verwenden:

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

In dieser Aufgabe haben Sie zwei Bilder in Boxen. Ein Bild ist kleiner als die Box, das andere ist größer und ragt aus der Box heraus.

Um die Aufgabe abzuschließen, stellen Sie sich vor, dass die Box reaktionsfähig ist und daher wachsen und schrumpfen könnte. Wenden Sie eine Deklaration auf das Bild an, sodass das große Bild in die Box schrumpft, das kleine Bild jedoch nicht dehnt.

Ihr Endergebnis sollte wie die Bilder unten aussehen:

![Zwei Boxen mit Bildern darin](mdn-sizing-max-width.png)

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

```css live-sample___max-width
body {
  font: 1.2em / 1.5 sans-serif;
  padding: 1em;
}
.box {
  border: 5px solid black;
  margin-bottom: 1em;
  width: 500px;
}

img {
  /* Add styles here */
}
```

{{EmbedLiveSample("max-width", "", "700px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Das Beispiel hat ein Bild, das aus der Box herausragt, und eines, das kleiner als die Box ist. Sie müssen `max-width` auf 100% setzen, damit das größere Bild nur so groß wie die Box wird. Wenn Sie `width: 100%` verwenden, wird das kleine Bild gestreckt.

```css
img {
  max-width: 100%;
}
```

</details>
