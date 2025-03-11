---
title: Ein Element zentrieren
slug: Web/CSS/Layout_cookbook/Center_an_element
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

In diesem Rezept sehen Sie, wie Sie eine Box in einer anderen mittels [Flexbox](#verwendung_von_flexbox) und [Grid](#verwendung_von_grid) zentrieren, sowohl horizontal als auch vertikal.

![ein zentriertes Element in einer größeren Box](cookbook-center.png)

## Anforderungen

Ein Element horizontal und vertikal in der Mitte einer anderen Box platzieren.

## Rezept

Klicken Sie auf "Play" in den folgenden Code-Blöcken, um das Beispiel im MDN-Playground zu bearbeiten:

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

Um eine Box innerhalb einer anderen Box zu zentrieren, machen Sie zuerst die umgebende Box zu einem [Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#the_flex_container), indem Sie ihre {{cssxref("display")}}-Eigenschaft auf `flex` setzen. Dann setzen Sie {{cssxref("align-items")}} auf `center`, um die vertikale Zentrierung (auf der Block-Achse) zu erreichen, und {{cssxref("justify-content")}} auf `center`, um die horizontale Zentrierung (auf der Inline-Achse) zu erreichen. Und das ist alles, was nötig ist, um eine Box innerhalb einer anderen zu zentrieren!

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

Anstelle von `align-items: center;` auf dem Container, können Sie auch das innere Element vertikal zentrieren, indem Sie {{cssxref("align-self")}} auf `center` beim inneren Element selbst einstellen.

## Verwendung von Grid

Eine andere Methode, die Sie verwenden können, um eine Box innerhalb einer anderen zu zentrieren, ist, die umgebende Box zuerst zu einem [Grid-Container](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_container) zu machen, und dann die {{cssxref("place-items")}}-Eigenschaft auf `center` zu setzen, um ihre Elemente sowohl auf der Block- als auch auf der Inline-Achse zentriert auszurichten.

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

Statt `place-items: center;` auf dem Container zu verwenden, können Sie dieselbe Zentrierung erreichen, indem Sie {{cssxref("place-content", "place-content: center;")}} auf den Container anwenden oder entweder {{cssxref("place-self", "place-self: center")}} oder {{cssxref("margin", "margin: auto;")}} auf das innere Element selbst anwenden.

## Ressourcen auf MDN

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [CSS-Box-Ausrichtungsleitfaden](/de/docs/Web/CSS/CSS_box_alignment)
