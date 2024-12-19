---
title: "Testen Sie Ihre Fähigkeiten: Größenanpassung"
slug: Learn_web_development/Core/Styling_basics/Sizing_tasks
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Ziel dieses Tests ist es, zu überprüfen, ob Sie die verschiedenen Möglichkeiten verstehen, [Elemente in CSS zu dimensionieren](/de/docs/Learn_web_development/Core/Styling_basics/Sizing).

> [!NOTE]
> Klicken Sie auf **"Play"** in den untenstehenden Code-Blöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Klemmbrett-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Falls Sie nicht weiterkommen, können Sie sich über unsere [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) mit uns in Verbindung setzen.

## Aufgabe 1

In dieser Aufgabe haben Sie zwei Boxen. Die erste sollte so dimensioniert werden, dass die Höhe mindestens 100 Pixel beträgt, selbst wenn es weniger Inhalt gibt, der dazu führen würde, dass sie diese Höhe erreicht. Der Inhalt sollte jedoch nicht überlaufen, wenn mehr Inhalt vorhanden ist, als in 100 Pixel passt. Testen Sie diese Box, indem Sie den Inhalt aus dem HTML entfernen, um sicherzustellen, dass Sie auch ohne Inhalt eine 100 Pixel hohe Box erhalten.

Die zweite Box sollte fest auf 100 Pixel eingestellt sein, sodass der Inhalt überläuft, wenn zu viel Inhalt vorhanden ist.

![Zwei Boxen, eine mit überlaufendem Inhalt](mdn-sizing-height-min-height.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Es gibt zwei Boxen, die erste sollte eine Mindesthöhe erhalten, bei der sie sich an den zusätzlichen Inhalt anpasst, aber wenn Sie etwas Inhalt entfernen, ist die Box mindestens so hoch wie die `min-height`. Die zweite hat eine feste Höhe, die den Inhalt überlaufen lässt.

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

In dieser Aufgabe haben Sie eine Box, die eine andere Box enthält. Ihre Aufgabe ist es, die innere Box 60% der Breite der äußeren Box zu machen. Der Wert der {{cssxref("box-sizing")}}-Eigenschaft ist auf `border-box` gesetzt, was bedeutet, dass die Gesamtbreite jegliche Auffüllung und den Rand beinhaltet. Sie sollten der inneren Box auch eine Auffüllung von 10% geben, wobei die Breite (oder die im Textzeilenmaß angegebenen Breite) als Größe verwendet wird, von der dieser Prozentsatz berechnet wird.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Eine Box mit einer anderen Box darin eingebettet](mdn-sizing-percentages.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Machen Sie die Box 60% des Containers und geben Sie ihr 10% Auffüllung auf allen Seiten.
Alle Elemente haben bereits `box-sizing: border-box`, damit Sie sich nicht darum kümmern müssen, welche Breite Sie verwenden:

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

In dieser Aufgabe haben Sie zwei Bilder in Boxen. Ein Bild ist kleiner als die Box, das andere ist größer und bricht aus der Box heraus. Stellen Sie sich vor, dass die Box responsiv ist und daher wachsen und schrumpfen könnte. Welche Eigenschaft würden Sie auf das Bild anwenden, sodass das große Bild in die Box schrumpft, aber das kleine Bild nicht gestreckt wird.

Ihr Endergebnis sollte wie die untenstehenden Bilder aussehen:

![Zwei Boxen mit Bildern darin](mdn-sizing-max-width.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Das Beispiel enthält ein Bild, das aus der Box herausbricht und eines, das kleiner ist als die Box. Sie müssen `max-width` auf 100% setzen, um das größere Bild nur so groß wie die Box wachsen zu lassen. Wenn Sie `width: 100%` verwenden, wird das kleine Bild gestreckt.

```css
img {
  max-width: 100%;
}
```

</details>

## Siehe auch

- [CSS Styling Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
