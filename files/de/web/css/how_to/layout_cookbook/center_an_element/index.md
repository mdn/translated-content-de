---
title: Ein Element zentrieren
slug: Web/CSS/How_to/Layout_cookbook/Center_an_element
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In diesem Rezept erfahren Sie, wie Sie eine Box innerhalb einer anderen Box zentrieren können, indem Sie [Flexbox](#verwendung_von_flexbox) und [Grid](#verwendung_von_grid) verwenden, um den Inhalt sowohl horizontal als auch vertikal zu zentrieren.

![ein Element, das innerhalb einer größeren Box zentriert wird](cookbook-center.png)

## Anforderungen

Ein Element horizontal und vertikal in die Mitte einer anderen Box platzieren.

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

## Verwendung von Flexbox

Um eine Box innerhalb einer anderen Box zu zentrieren, verwandeln Sie zuerst die umgebende Box in ein [Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts#the_flex_container), indem Sie die {{cssxref("display")}}-Eigenschaft auf `flex` setzen. Setzen Sie dann {{cssxref("align-items")}} auf `center` für vertikale Zentrierung (auf der Blockachse) und {{cssxref("justify-content")}} auf `center` für horizontale Zentrierung (auf der Inline-Achse). Und das ist alles, was es braucht, um eine Box innerhalb einer anderen zu zentrieren!

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

Wir haben die Höhe für den Container festgelegt, um zu demonstrieren, dass das innere Element tatsächlich vertikal innerhalb des Containers zentriert ist.

### Ergebnis

{{EmbedLiveSample("Using_flexbox", "", "200px")}}

Anstelle von `align-items: center;` auf den Container anzuwenden, können Sie das innere Element auch vertikal zentrieren, indem Sie {{cssxref("align-self")}} auf `center` für das innere Element selbst setzen.

## Verwendung von Grid

Eine weitere Methode, um eine Box innerhalb einer anderen zu zentrieren, ist, die umgebende Box zuerst zu einem [Grid-Container](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#grid_container) zu machen und dann ihre {{cssxref("place-items")}}-Eigenschaft auf `center` zu setzen, um seine Elemente sowohl auf der Block- als auch auf der Inline-Achse zu zentrieren.

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

Anstelle von `place-items: center;` auf den Container anzuwenden, können Sie die gleiche Zentrierung auch erreichen, indem Sie {{cssxref("place-content", "place-content: center;")}} auf den Container anwenden oder indem Sie entweder {{cssxref("place-self", "place-self: center")}} oder {{cssxref("margin", "margin: auto;")}} auf das innere Element selbst anwenden.

## Ressourcen auf MDN

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [CSS-Box-Ausrichtungsleitfaden](/de/docs/Web/CSS/Guides/Box_alignment)
