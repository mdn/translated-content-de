---
title: "Testen Sie Ihre Fähigkeiten: Größenbestimmung"
short-title: "Test: Größenbestimmung"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing
l10n:
  sourceCommit: a623d4459e2aa00d17dc0fd6b6bc44f56c589950
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen einzuschätzen, ob Sie die verschiedenen Möglichkeiten des [Größenbestimmung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) verstehen.

> [!NOTE]
> Um Unterstützung zu erhalten, lesen Sie unseren [Test your skills](/de/docs/Learn_web_development#test_your_skills) Nutzungsleitfaden. Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Größenbestimmung 1

In dieser Aufgabe haben Sie zwei Boxen.

Um die Aufgabe abzuschließen:

1. Geben Sie der ersten Box eine Größe, sodass die Höhe mindestens `100px` beträgt, selbst wenn weniger Inhalt vorhanden ist, der sie auf diese Höhe bringen würde. Der Inhalt sollte nicht überlaufen, wenn er nicht in die Box passt.
2. Um dies zu testen, entfernen Sie den Inhalt aus dem HTML, um sicherzustellen, dass Sie immer noch eine `100px` hohe Box haben, selbst ohne Inhalt.
3. Geben Sie der zweiten Box eine feste Größe von `100px` Höhe. In diesem Fall sollte der Inhalt überlaufen.

Der Ausgangspunkt der Aufgabe sieht so aus:

{{EmbedLiveSample("sizing1-start", "", "480px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___sizing1-start live-sample___sizing1-finish
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

```css live-sample___sizing1-start live-sample___sizing1-finish
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

Das aktualisierte Styling sollte so aussehen:

{{EmbedLiveSample("sizing1-finish", "", "460px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Es gibt zwei Boxen. Der ersten sollte eine `min-height` gegeben werden, damit sie sich erweitert, um den zusätzlichen Inhalt zu fassen, aber nicht unter `100px` schrumpft, wenn der Inhalt entfernt wird. Der zweiten Box wird eine feste Höhe gegeben, was dazu führt, dass der Inhalt überläuft.

```css live-sample___sizing1-finish
.box1 {
  min-height: 100px;
}

.box2 {
  height: 100px;
}
```

</details>

## Größenbestimmung 2

In dieser Aufgabe haben Sie eine Box, die eine andere Box enthält.

Um die Aufgabe abzuschließen:

1. Stellen Sie sicher, dass die innere Box eine Breite von `60%` der Breite der äußeren Box hat. Die {{cssxref("box-sizing")}}-Eigenschaft ist auf `border-box` gesetzt, was bedeutet, dass die Gesamtbreite jegliches `padding` und `border` einschließt.
2. Geben Sie der inneren Box `10%` `padding` auf allen Seiten.

Der Ausgangspunkt der Aufgabe sieht so aus:

{{EmbedLiveSample("sizing2-start", "", "100px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___sizing2-start live-sample___sizing2-finish
<div class="box">
  <div class="inner">Make me 60% of my parent's width.</div>
</div>
```

```css live-sample___sizing2-start live-sample___sizing2-finish
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

Das aktualisierte Styling sollte so aussehen:

{{EmbedLiveSample("sizing2-finish", "", "220px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Stellen Sie die `width` der Box auf `60%` und geben ihr einen `padding`-Wert von `10%`. Alle Elemente haben bereits `box-sizing: border-box` gesetzt, um Ihnen die Berechnung des `60%`-Breitenwertes zu ersparen:

```css live-sample___sizing2-finish
.inner {
  width: 60%;
  padding: 10%;
}
```

</details>

## Größenbestimmung 3

In dieser Aufgabe haben Sie zwei Bilder in Boxen. Ein Bild ist kleiner als die Box, während das andere größer ist und aus der Box herausragt.

Um die Aufgabe abzuschließen, stellen Sie sich vor, dass die Box responsiv ist und daher wachsen und schrumpfen könnte. Wenden Sie eine Deklaration auf die Bilder an, sodass das große Bild in die Box schrumpft, das kleine Bild jedoch nicht gedehnt wird.

Der Ausgangspunkt der Aufgabe sieht so aus:

{{EmbedLiveSample("sizing3-start", "", "700px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

```html live-sample___sizing3-start live-sample___sizing3-finish
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

```css live-sample___sizing3-start live-sample___sizing3-finish
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

Das aktualisierte Styling sollte so aussehen:

{{EmbedLiveSample("sizing3-finish", "", "720px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Setzen Sie die `max-width`-Eigenschaft der Bilder auf `100%`, um das große Bild innerhalb seiner Box zu halten. Wenn Sie `width: 100%` verwenden, wird das kleine Bild gedehnt.

```css live-sample___sizing3-finish
img {
  max-width: 100%;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}
