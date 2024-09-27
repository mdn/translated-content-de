---
title: Ein Element zentrieren
slug: Web/CSS/Layout_cookbook/Center_an_element
l10n:
  sourceCommit: 70f49e78d0f6830748fcaa490d98b4ae3e2da161
---

{{CSSRef}}

In diesem Rezept erfahren Sie, wie Sie eine Box innerhalb einer anderen Box zentrieren, indem Sie [flexbox](#verwendung_von_flexbox) und [grid](#verwendung_von_grid) verwenden. Sowohl das horizontale als auch das vertikale Zentrieren sind einfach und unkompliziert.

![ein Element zentriert innerhalb einer größeren Box](cookbook-center.png)

## Anforderungen

Ein Objekt sowohl horizontal als auch vertikal in die Mitte einer anderen Box platzieren.

## Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/center.html", '100%', 720)}}

> [!CALLOUT]
>
> [Laden Sie dieses Beispiel herunter](https://github.com/mdn/css-examples/blob/main/css-cookbook/center--download.html)

## Verwendung von Flexbox

Um eine Box innerhalb einer anderen Box zu zentrieren, verwandeln Sie zuerst die umschließende Box in einen [Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#the_flex_container), indem Sie die {{cssxref("display")}}-Eigenschaft auf `flex` setzen. Setzen Sie dann {{cssxref("align-items")}} auf `center` für die vertikale Zentrierung (auf der Blockachse) und {{cssxref("justify-content")}} auf `center` für die horizontale Zentrierung (auf der Inlineachse). Und das ist alles, was nötig ist, um eine Box innerhalb einer anderen zu zentrieren!

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

Eine weitere Methode, um eine Box innerhalb einer anderen zu zentrieren, besteht darin, die umgebende Box zuerst in einen [Grid-Container](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_container) zu verwandeln und dann die {{cssxref("place-items")}}-Eigenschaft auf `center` zu setzen, um deren Elemente sowohl auf der Block- als auch auf der Inlineachse zentriert auszurichten.

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

Anstatt `place-items: center;` auf den Container anzuwenden, können Sie dieselbe Zentrierung erreichen, indem Sie {{cssxref("place-content", "place-content: center;")}} auf den Container oder entweder {{cssxref("place-self", "place-self: center")}} oder {{cssxref("margin", "margin: auto;")}} auf das innere Element selbst anwenden.

## Ressourcen auf MDN

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [CSS-Box-Ausrichtungsleitfaden](/de/docs/Web/CSS/CSS_box_alignment)
