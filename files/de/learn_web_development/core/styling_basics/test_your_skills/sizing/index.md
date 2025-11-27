---
title: "Testen Sie Ihre Fähigkeiten: Größenbestimmung"
short-title: "Test: Größenbestimmung"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing
l10n:
  sourceCommit: 774a81081f5688fcf0e7aa8f6a7b8e3cf86180c8
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu überprüfen, ob Sie die verschiedenen Methoden der [Größenbestimmung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills) Verwendungsleitfaden. Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe haben Sie zwei Boxen.

Um die Aufgabe abzuschließen:

1. Bestimmen Sie die Größe der ersten Box so, dass die Höhe mindestens `100px` beträgt, selbst wenn es weniger Inhalt gibt, der sie auf diese Höhe anwachsen lassen würde. Der Inhalt sollte nicht überlaufen, wenn er nicht in die Box passt.
2. Testen Sie dies, indem Sie den Inhalt aus dem HTML-Code entfernen, um sicherzustellen, dass Sie eine `100px` hohe Box erhalten, auch ohne Inhalt.
3. Bestimmen Sie die Größe der zweiten Box so, dass sie fest auf `100px` Höhe eingestellt ist. In diesem Fall sollte der Inhalt überlaufen.

Ihr endgültiges Ergebnis sollte wie das untenstehende Bild aussehen:

![Zwei Boxen, eine mit überfließendem Inhalt](mdn-sizing-height-min-height.png)

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
<summary>Hier klicken, um die Lösung zu zeigen</summary>

Es gibt zwei Boxen. Die erste sollte eine `min-height` erhalten, damit sie sich erweitert, um zusätzlichen Inhalt aufzunehmen, aber nicht unter `100px` schrumpft, wenn der Inhalt entfernt wird. Die zweite Box erhält eine feste Höhe, wodurch Inhalt überläuft.

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

1. Machen Sie die Breite der inneren Box `60%` der Breite der äußeren Box. Die {{cssxref("box-sizing")}}-Eigenschaft ist auf `border-box` gesetzt, was bedeutet, dass die Gesamtbreite jegliches `padding` und `border` einschließt.
2. Geben Sie der inneren Box `10%` `padding` auf allen Seiten.

Ihr endgültiges Ergebnis sollte wie das untenstehende Bild aussehen:

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
<summary>Hier klicken, um die Lösung zu zeigen</summary>

Stellen Sie die Box-`width` auf `60%` und geben Sie ihr einen `padding`-Wert von `10%`.
Alle Elemente haben bereits `box-sizing: border-box` gesetzt, damit Sie sich nicht um die Berechnung des `60%` `width`-Werts kümmern müssen:

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

In dieser Aufgabe haben Sie zwei Bilder in Boxen. Ein Bild ist kleiner als die Box, während das andere größer ist, sodass es aus der Box herausragt.

Um die Aufgabe abzuschließen, stellen Sie sich vor, dass die Box ansprechend ist und daher wachsen und schrumpfen könnte. Wenden Sie eine Deklaration auf die Bilder an, sodass das große Bild in die Box schrumpft, aber das kleine Bild sich nicht streckt.

Ihr endgültiges Ergebnis sollte so aussehen:

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
<summary>Hier klicken, um die Lösung zu zeigen</summary>

Setzen Sie für die Bilder die `max-width`-Eigenschaft auf `100%`, um das große Bild in seiner Box zu halten. Wenn Sie `width: 100%` verwenden, wird das kleine Bild gestreckt.

```css
img {
  max-width: 100%;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}
