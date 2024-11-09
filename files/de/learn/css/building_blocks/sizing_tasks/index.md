---
title: "Testen Sie Ihre Fähigkeiten: Größenanpassung"
slug: Learn/CSS/Building_blocks/Sizing_tasks
l10n:
  sourceCommit: c507c55f7a9a883d7a0308daa5e883aa0a619133
---

{{LearnSidebar}}

Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie die verschiedenen Arten der [Größenbestimmung von Elementen in CSS](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS) verstehen.

> [!NOTE]
> Klicken Sie auf **„Play“** in den Codeblöcken unten, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Clipboard-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Sollten Sie steckenbleiben, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe haben Sie zwei Kästchen. Das erste soll so dimensioniert werden, dass die Höhe mindestens 100 Pixel beträgt, auch wenn weniger Inhalt vorhanden ist, der es zu dieser Höhe wachsen lassen würde. Der Inhalt sollte jedoch nicht überlaufen, wenn mehr Inhalt vorhanden ist, als in 100 Pixel passt. Testen Sie dieses Kästchen, indem Sie den Inhalt aus dem HTML entfernen, um sicherzustellen, dass Sie auch bei keinem Inhalt ein Kästchen mit einer Höhe von 100 Pixel erhalten.

Das zweite Kästchen soll fest 100 Pixel hoch sein, sodass der Inhalt überläuft, wenn es zu viel davon gibt.

![Zwei Kästen, einer mit überlaufendem Inhalt](mdn-sizing-height-min-height.png)

Versuchen Sie, den Code unten zu aktualisieren, um das fertige Beispiel zu reproduzieren:

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

Es gibt zwei Kästchen, dem ersten sollte eine Mindesthöhe gegeben werden, in diesem Fall wird es sich ausdehnen, um zusätzlichen Inhalt aufzunehmen, aber wenn Sie einige Inhalte entfernen, wird das Kästchen mindestens so hoch sein wie die `min-height`. Dem zweiten wird eine feste Höhe zugewiesen, wodurch der Inhalt überlaufen wird.

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

In dieser Aufgabe haben Sie ein Kästchen, das ein weiteres Kästchen enthält. Ihre Aufgabe ist es, das innere Kästchen auf 60% der Breite des äußeren Kästchens zu setzen. Der Wert der {{cssxref("box-sizing")}}-Eigenschaft ist auf `border-box` gesetzt, was bedeutet, dass die Gesamtbreite jegliche Polsterung und Rahmen einschließt. Sie sollten dem inneren Kästchen auch eine Polsterung von 10% geben, wobei die Breite (oder Inline-Größe) als die Größe verwendet wird, von der dieser Prozentsatz berechnet wird.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Ein Kästchen mit einem weiteren verschachtelten Kästchen darin](mdn-sizing-percentages.png)

Versuchen Sie, den Code unten zu aktualisieren, um das fertige Beispiel zu reproduzieren:

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

Machen Sie das innere Kästchen 60% des Containers und geben Sie ihm auf allen Seiten 10% Polsterung.
Alle Elemente haben bereits `box-sizing: border-box`, um Sie davor zu bewahren, sich um die verwendete Breite zu kümmern:

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

In dieser Aufgabe haben Sie zwei Bilder in Kästchen. Ein Bild ist kleiner als das Kästchen, das andere ist größer und bricht aus dem Kästchen aus. Wenn Sie sich vorstellen, dass das Kästchen reaktionsfähig ist und daher wachsen und schrumpfen könnte, welche Eigenschaft würden Sie auf das Bild anwenden, damit das große Bild in das Kästchen schrumpft, das kleine Bild jedoch nicht gestreckt wird.

Ihr Endergebnis sollte wie die untenstehenden Bilder aussehen:

![Zwei Kästen mit Bildern darin](mdn-sizing-max-width.png)

Versuchen Sie, den Code unten zu aktualisieren, um das fertige Beispiel zu reproduzieren:

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

Das Beispiel enthält ein Bild, das aus dem Kästchen ausbricht, und eines, das kleiner als das Kästchen ist. Sie müssen `max-width` auf 100% setzen, damit das größere Bild nur so groß wie das Kästchen wächst. Wenn Sie `width: 100%` verwenden, wird das kleine Bild gedehnt.

```css
img {
  max-width: 100%;
}
```

</details>

## Siehe auch

- [CSS-Grundlagen](/de/docs/Learn/CSS/Building_blocks)
