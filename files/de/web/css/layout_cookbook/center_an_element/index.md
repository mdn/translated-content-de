---
title: Ein Element zentrieren
slug: Web/CSS/Layout_cookbook/Center_an_element
l10n:
  sourceCommit: 507825f6292eb73f0a96419d69870d9330b6776f
---

{{CSSRef}}

In diesem Rezept erfahren Sie, wie man ein Kästchen innerhalb eines anderen mithilfe von [Flexbox](#verwendung_von_flexbox) und [Grid](#verwendung_von_grid) zentriert. Das Zentrieren sowohl horizontal als auch vertikal ist einfach und unkompliziert.

![ein Element zentriert in einer größeren Box](cookbook-center.png)

## Anforderungen

Ein Element horizontal und vertikal in der Mitte einer anderen Box platzieren.

## Rezept

Klicken Sie auf "Play" in den untenstehenden Code-Blöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

## Verwendung von Flexbox

Um ein Kästchen innerhalb eines anderen Kästchens zu zentrieren, verwandeln Sie zuerst das umgebende Kästchen in einen [Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#the_flex_container), indem Sie seine {{cssxref("display")}}-Eigenschaft auf `flex` setzen. Setzen Sie dann {{cssxref("align-items")}} auf `center` für die vertikale Zentrierung (auf der Block-Achse) und {{cssxref("justify-content")}} auf `center` für die horizontale Zentrierung (auf der Inline-Achse). Und das ist alles, was nötig ist, um ein Kästchen in einem anderen zu zentrieren!

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

Wir legen eine Höhe für den Container fest, um zu demonstrieren, dass das innere Element in der Tat vertikal innerhalb des Containers zentriert ist.

### Ergebnis

{{EmbedLiveSample("Using_flexbox", "", "200px")}}

Anstatt `align-items: center;` auf dem Container anzuwenden, können Sie das innere Element auch vertikal zentrieren, indem Sie {{cssxref("align-self")}} auf `center` für das innere Element selbst setzen.

## Verwendung von Grid

Eine weitere Methode, um ein Kästchen innerhalb eines anderen zu zentrieren, besteht darin, das umgebende Kästchen zunächst in einen [Grid-Container](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_container) zu verwandeln und dann seine {{cssxref("place-items")}}-Eigenschaft auf `center` zu setzen, um seine Elemente sowohl auf der Block- als auch auf der Inline-Achsen auszurichten.

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

Anstatt `place-items: center;` auf den Container anzuwenden, können Sie die gleiche Zentrierung erreichen, indem Sie {{cssxref("place-content", "place-content: center;")}} auf den Container setzen oder indem Sie entweder {{cssxref("place-self", "place-self: center")}} oder {{cssxref("margin", "margin: auto;")}} auf das innere Element selbst anwenden.

## Ressourcen auf MDN

- [Kastenausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [CSS-Kastenausrichtungsleitfaden](/de/docs/Web/CSS/CSS_box_alignment)
