---
title: Ein Element zentrieren
slug: Web/CSS/Layout_cookbook/Center_an_element
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

In diesem Rezept erfahren Sie, wie Sie eine Box mithilfe von [Flexbox](#flexbox_verwenden) und [Grid](#grid_verwenden) sowohl horizontal als auch vertikal in einer anderen zentrieren können.

![ein Element, das innerhalb einer größeren Box zentriert ist](cookbook-center.png)

## Anforderungen

Ein Element horizontal und vertikal in der Mitte einer anderen Box positionieren.

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

## Flexbox verwenden

Um eine Box in einer anderen Box zu zentrieren, verwandeln Sie zuerst die umgebende Box in einen [Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#the_flex_container), indem Sie ihre {{cssxref("display")}}-Eigenschaft auf `flex` setzen. Dann setzen Sie {{cssxref("align-items")}} auf `center` für vertikales Zentrieren (auf der Block-Achse) und {{cssxref("justify-content")}} auf `center` für horizontales Zentrieren (auf der Inline-Achse). Das ist alles, was benötigt wird, um eine Box innerhalb einer anderen zu zentrieren!

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

Wir setzen eine Höhe für den Container, um zu demonstrieren, dass das innere Element tatsächlich vertikal innerhalb des Containers zentriert ist.

### Ergebnis

{{EmbedLiveSample("Using_flexbox", "", "200px")}}

Anstatt `align-items: center;` auf den Container anzuwenden, können Sie das innere Element auch vertikal zentrieren, indem Sie {{cssxref("align-self")}} auf `center` für das innere Element selbst einstellen.

## Grid verwenden

Eine weitere Methode, mit der Sie eine Box innerhalb einer anderen zentrieren können, besteht darin, die umgebende Box zuerst in einen [Grid-Container](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_container) zu verwandeln und dann ihre {{cssxref("place-items")}}-Eigenschaft auf `center` zu setzen, um ihre Elemente sowohl auf der Block- als auch auf der Inline-Achse zentriert auszurichten.

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

Anstatt `place-items: center;` auf den Container anzuwenden, können Sie die gleiche Zentrierung erreichen, indem Sie {{cssxref("place-content", "place-content: center;")}} auf den Container oder entweder {{cssxref("place-self", "place-self: center")}} oder {{cssxref("margin", "margin: auto;")}} auf das innere Element selbst anwenden.

## Ressourcen auf MDN

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [CSS Box-Ausrichtungsleitfaden](/de/docs/Web/CSS/CSS_box_alignment)
