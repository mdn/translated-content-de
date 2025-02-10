---
title: background-origin
slug: Web/CSS/background-origin
l10n:
  sourceCommit: b64538dc77e9a6181b882bd54bdbb307c1430ba8
---

{{CSSRef}}

Die **`background-origin`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt den Ursprung des Hintergrunds fest: vom Randanfang, innerhalb des Randes oder innerhalb des Paddings.

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

Die Eigenschaft `background-origin` wird mit einem der unten aufgelisteten Schlüsselwortwerte angegeben.

### Werte

- `border-box`
  - : Der Hintergrund wird relativ zur Border-Box positioniert.
- `padding-box`
  - : Der Hintergrund wird relativ zur Padding-Box positioniert.
- `content-box`
  - : Der Hintergrund wird relativ zur Content-Box positioniert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hintergrundursprünge festlegen

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
  background-image: url("logo.jpg"), url("main-back.png"); /* Applies two images to the background */
  background-position:
    top right,
    0px 0px;
  background-origin: content-box, padding-box;
}
```

### Mit zwei Verläufen arbeiten

In diesem Beispiel hat die Box einen dicken, gepunkteten Rand. Der erste Verlauf verwendet die `padding-box` als `background-origin`, und daher liegt der Hintergrund innerhalb des Randes. Der zweite verwendet die `content-box` und wird somit nur hinter dem Inhalt angezeigt.

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
