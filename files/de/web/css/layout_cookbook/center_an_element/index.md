---
title: Ein Element zentrieren
slug: Web/CSS/Layout_cookbook/Center_an_element
l10n:
  sourceCommit: 70f49e78d0f6830748fcaa490d98b4ae3e2da161
---

{{CSSRef}}

In diesem Rezept erfahren Sie, wie Sie ein Kästchen innerhalb eines anderen Kästchens mit [Flexbox](#verwendung_von_flexbox) und [Grid](#verwendung_von_grid) zentrieren. Das Zentrieren sowohl horizontal als auch vertikal ist einfach und unkompliziert.

![ein Element zentriert in einem größeren Kasten](cookbook-center.png)

## Anforderungen

Um ein Element horizontal und vertikal in das Zentrum eines anderen Kästchens zu platzieren.

## Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/center.html", '100%', 720)}}

> [!CALLOUT]
>
> [Dieses Beispiel herunterladen](https://github.com/mdn/css-examples/blob/main/css-cookbook/center--download.html)

## Verwendung von Flexbox

Um ein Kästchen innerhalb eines anderen Kästchens zu zentrieren, verwandeln Sie zuerst das enthaltende Kästchen in einen [Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#the_flex_container), indem Sie seine {{cssxref("display")}}-Eigenschaft auf `flex` setzen. Setzen Sie dann {{cssxref("align-items")}} auf `center` für vertikales Zentrieren (auf der Block-Achse) und {{cssxref("justify-content")}} auf `center` für horizontales Zentrieren (auf der Inline-Achse). Und das ist alles, was nötig ist, um ein Kästchen innerhalb eines anderen zu zentrieren!

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
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8em;
}
```

Wir setzen eine Höhe für den Container, um zu demonstrieren, dass das innere Element tatsächlich vertikal innerhalb des Containers zentriert ist.

### Ergebnis

{{ EmbedLiveSample('Using_flexbox', 400, 200) }}

Anstatt `align-items: center;` auf den Container anzuwenden, können Sie das innere Element auch vertikal zentrieren, indem Sie {{cssxref("align-self")}} auf `center` auf das innere Element selbst setzen.

## Verwendung von Grid

Eine weitere Methode, die Sie verwenden können, um ein Kästchen innerhalb eines anderen zu zentrieren, besteht darin, zuerst das enthaltende Kästchen zu einem [Grid-Container](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_container) zu machen und dann dessen {{cssxref("place-items")}}-Eigenschaft auf `center` zu setzen, um seine Elemente sowohl auf der Block- als auch auf der Inline-Achse auszurichten.

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
.container {
  display: grid;
  place-items: center;
  height: 8em;
}
```

### Ergebnis

{{ EmbedLiveSample('Using_grid', 400, 200) }}

Anstatt `place-items: center;` auf den Container anzuwenden, können Sie dasselbe Zentrieren auch erreichen, indem Sie {{cssxref("place-content", "place-content: center;")}} auf den Container anwenden oder entweder {{cssxref("place-self", "place-self: center")}} oder {{cssxref("margin", "margin: auto;")}} auf das innere Element selbst anwenden.

## Ressourcen auf MDN

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Leitfaden zur CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
