---
title: "Testen Sie Ihr Können: Größenanpassung"
short-title: Sizing
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, einzuschätzen, ob Sie die verschiedenen Methoden zum [Größen von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zur Nutzung der Tests](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Aufgabe 1

In dieser Aufgabe haben Sie zwei Boxen.

So vervollständigen Sie die Aufgabe:

1. Passen Sie die Größe der ersten Box so an, dass die Höhe mindestens `100px` beträgt, selbst wenn der Inhalt geringer ist, sodass sie auf diese Höhe anwächst. Der Inhalt sollte jedoch nicht überlaufen, wenn mehr Inhalt vorhanden ist, als in 100 Pixel passen.
2. Testen Sie diese Box, indem Sie den Inhalt aus dem HTML entfernen, um sicherzustellen, dass Sie weiterhin eine `100px` hohe Box erhalten, auch ohne Inhalt.
3. Passen Sie die Größe der zweiten Box so an, dass sie fest auf `100px` Höhe bleibt, sodass der Inhalt überläuft, wenn es zu viel gibt.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

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
  border: 5px solid #000;
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

Es gibt zwei Boxen, die erste sollte eine Mindesthöhe erhalten, in welchem Fall sie sich ausdehnt, um den zusätzlichen Inhalt aufzunehmen, aber wenn Sie etwas Inhalt entfernen, bleibt die Box mindestens so hoch wie das `min-height`. Die zweite erhält eine feste Höhe, wodurch der Inhalt überläuft.

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

So vervollständigen Sie die Aufgabe:

1. Machen Sie die Breite der inneren Box `60%` der Breite der äußeren Box. Der Wert der {{cssxref("box-sizing")}} Eigenschaft ist auf `border-box` gesetzt, was bedeutet, dass die Gesamtbreite jedwedes Padding und Rahmen einschließt.
2. Geben Sie der inneren Box ein Padding von `10%`, wobei die Breite (oder Inline-Größe) als Basis zur Berechnung dieses Prozentsatzes dient.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Eine Box mit einer weiteren Box darin](mdn-sizing-percentages.png)

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
  border: 5px solid #000;
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

Machen Sie die Box 60% des Containers und geben Sie ihr 10% Padding auf allen Seiten. Alle Elemente haben bereits `box-sizing: border-box`, damit Sie sich keine Gedanken darüber machen müssen, welche Breite Sie verwenden:

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

Um die Aufgabe abzuschließen, stellen Sie sich vor, dass die Box responsiv ist und sich daher vergrößern und verkleinern könnte. Wenden Sie eine Deklaration auf das Bild an, damit das große Bild in die Box schrumpft, das kleine Bild jedoch nicht gestreckt wird.

Ihr Endergebnis sollte wie die folgenden Bilder aussehen:

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
  border: 5px solid #000;
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

Das Beispiel enthält ein Bild, das aus der Box herausragt, und eines, das kleiner als die Box ist. Sie müssen `max-width` auf 100% setzen, damit das größere Bild nur so groß wie die Box wird. Wenn Sie `width: 100%` verwenden, wird das kleine Bild gestreckt.

```css
img {
  max-width: 100%;
}
```

</details>
