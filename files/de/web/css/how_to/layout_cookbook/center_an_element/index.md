---
title: Ein Element zentrieren
slug: Web/CSS/How_to/Layout_cookbook/Center_an_element
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

In diesem Rezept erfahren Sie, wie Sie eine Box innerhalb einer anderen zentrieren, indem Sie [flexbox](#verwendung_von_flexbox) und [grid](#verwendung_von_grid) verwenden, um Inhalte sowohl horizontal als auch vertikal zu zentrieren.

![ein Element, das innerhalb einer größeren Box zentriert ist](cookbook-center.png)

## Anforderungen

Um ein Element horizontal und vertikal in die Mitte einer anderen Box zu platzieren.

## Rezept

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

```html live-sample___center-example
<div class="container">
  <div class="item">I am centered!</div>
</div>
```

```css live-sample___center-example
.item {
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  padding: 20px;
  width: 10em;
}

.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  font: 1.2em sans-serif;

  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

{{EmbedLiveSample("center-example", "", "250px")}}

## Verwendung von flexbox

Um eine Box innerhalb einer anderen zu zentrieren, verwandeln Sie zunächst die Box, in der das Element enthalten ist, in einen [flex container](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#the_flex_container), indem Sie seine {{cssxref("display")}}-Eigenschaft auf `flex` setzen. Setzen Sie dann {{cssxref("align-items")}} auf `center` für die vertikale Zentrierung (auf der Block-Achse) und {{cssxref("justify-content")}} auf `center` für die horizontale Zentrierung (auf der Inline-Achse). Und das ist alles, was nötig ist, um eine Box innerhalb einer anderen zu zentrieren!

### HTML

```html
<div class="container">
  <div class="item">I am centered!</div>
</div>
```

### CSS

```css
div {
  border: solid 3px;
  padding: 1em;
  max-width: 75%;
}

.item {
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  padding: 20px;
  width: 10em;
}

.container {
  height: 8em;
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  font: 1.2em sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
}
```

Wir setzen eine Höhe für das Container-Element, um zu demonstrieren, dass das innere Element tatsächlich vertikal innerhalb des Containers zentriert ist.

### Ergebnis

{{EmbedLiveSample("Using_flexbox", "", "200px")}}

Statt `align-items: center;` auf den Container anzuwenden, können Sie das innere Element auch vertikal zentrieren, indem Sie {{cssxref("align-self")}} auf `center` für das innere Element selbst setzen.

## Verwendung von grid

Eine weitere Methode, die Sie verwenden können, um eine Box innerhalb einer anderen zu zentrieren, besteht darin, die umgebende Box zuerst in einen [grid container](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_container) zu verwandeln und dann seine {{cssxref("place-items")}}-Eigenschaft auf `center` zu setzen, um die Elemente auf beiden Achsen, Block- und Inline-Achse, zu zentrieren.

### HTML

```html
<div class="container">
  <div class="item">I am centered!</div>
</div>
```

### CSS

```css
div {
  border: solid 3px;
  padding: 1em;
  max-width: 75%;
}

.item {
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  padding: 20px;
  width: 10em;
}

.container {
  height: 8em;
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  font: 1.2em sans-serif;

  display: grid;
  place-items: center;
}
```

### Ergebnis

{{EmbedLiveSample("Using_grid", "", "200px")}}

Anstatt `place-items: center;` auf den Container anzuwenden, können Sie die gleiche Zentrierung erreichen, indem Sie {{cssxref("place-content", "place-content: center;")}} auf den Container anwenden oder entweder {{cssxref("place-self", "place-self: center")}} oder {{cssxref("margin", "margin: auto;")}} auf das innere Element selbst anwenden.

## Ressourcen auf MDN

- [Box-Ausgleich in flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [CSS Box-Ausgleichsleitfaden](/de/docs/Web/CSS/CSS_box_alignment)
