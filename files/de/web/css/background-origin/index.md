---
title: background-origin
slug: Web/CSS/background-origin
l10n:
  sourceCommit: 9c8c461dc350668ad326fa9aad604ce9da800df2
---

{{CSSRef}}

Die **`background-origin`**-[CSS](/de/docs/Web/CSS) Eigenschaft legt den Ursprung des Hintergrunds fest: von Beginn der Grenze, innerhalb der Grenze oder innerhalb des Polsters.

{{EmbedInteractiveExample("pages/css/background-origin.html")}}

Beachten Sie, dass `background-origin` ignoriert wird, wenn {{cssxref("background-attachment")}} auf `fixed` gesetzt ist.

## Syntax

```css
/* Keyword values */
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;

/* Global values */
background-origin: inherit;
background-origin: initial;
background-origin: revert;
background-origin: revert-layer;
background-origin: unset;
```

Die Eigenschaft `background-origin` wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `border-box`
  - : Der Hintergrund ist relativ zum Randkasten positioniert.
- `padding-box`
  - : Der Hintergrund ist relativ zum Polsterkasten positioniert.
- `content-box`
  - : Der Hintergrund ist relativ zum Inhaltkasten positioniert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellungen der Hintergrundursprünge

```css
.example {
  border: 10px double;
  padding: 10px;
  background: url("image.jpg");
  background-position: center left;
  background-origin: content-box;
}
```

```css
#example2 {
  border: 4px solid black;
  padding: 10px;
  background: url("image.gif");
  background-repeat: no-repeat;
  background-origin: border-box;
}
```

```css
div {
  background-image: url("logo.jpg"), url("mainback.png"); /* Applies two images to the background */
  background-position:
    top right,
    0px 0px;
  background-origin: content-box, padding-box;
}
```

### Verwendung von zwei Gradienten

In diesem Beispiel hat die Box einen dicken gepunkteten Rand. Der erste Gradient verwendet den `padding-box` als `background-origin`, und daher sitzt der Hintergrund innerhalb des Rands. Der zweite verwendet den `content-box` und wird daher nur hinter dem Inhalt angezeigt.

```css
.box {
  margin: 10px 0;
  color: #fff;
  background: linear-gradient(
      90deg,
      rgb(131 58 180 / 100%) 0%,
      rgb(253 29 29 / 60%) 60%,
      rgb(252 176 69 / 100%) 100%
    ),
    radial-gradient(circle, rgb(255 255 255 / 100%) 0%, rgb(0 0 0 / 100%) 28%);
  border: 20px dashed black;
  padding: 20px;
  width: 400px;
  background-origin: padding-box, content-box;
  background-repeat: no-repeat;
}
```

```html
<div class="box">Hello!</div>
```

{{EmbedLiveSample('Using_two_gradients', 420, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-clip")}}
