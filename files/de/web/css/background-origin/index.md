---
title: background-origin
slug: Web/CSS/background-origin
l10n:
  sourceCommit: 2b50b00ce6e88a5ba663d95a1553694b86dae86a
---

{{CSSRef}}

Die **`background-origin`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Ursprung des Hintergrunds fest: vom Beginn des Rahmens, innerhalb des Rahmens oder innerhalb des Innenabstands.

{{InteractiveExample("CSS Demo: background-origin")}}

```css interactive-example-choice
background-origin: border-box;
background-repeat: no-repeat;
```

```css interactive-example-choice
background-origin: padding-box;
background-repeat: no-repeat;
```

```css interactive-example-choice
background-origin: content-box;
background-repeat: no-repeat;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">This is the content of the element.</div>
</section>
```

```css interactive-example
#example-element {
  background-image: url("/shared-assets/images/examples/leopard.jpg");
  color: #d73611;
  text-shadow: 2px 2px black;
  padding: 20px;
  border: 10px dashed #333;
  font-size: 2em;
  font-weight: bold;
}
```

Beachten Sie, dass `background-origin` ignoriert wird, wenn {{cssxref("background-attachment")}} auf `fixed` eingestellt ist.

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

Die Eigenschaft `background-origin` wird als einer der unten aufgeführten Schlüsselwort-Werte angegeben.

### Werte

- `border-box`
  - : Der Hintergrund wird relativ zur Rahmenbox positioniert.
- `padding-box`
  - : Der Hintergrund wird relativ zur Innenabstandsbox positioniert. Standardwert.
- `content-box`
  - : Der Hintergrund wird relativ zur Inhaltsbox positioniert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Hintergrund-Ursprüngen

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
  background-image:
    url("logo.jpg"), url("main-back.png"); /* Applies two images to the background */
  background-position:
    top right,
    0px 0px;
  background-origin: content-box, padding-box;
}
```

### Verwendung von zwei Farbverläufen

In diesem Beispiel hat die Box einen dicken gepunkteten Rahmen. Der erste Verlauf verwendet die `padding-box` als `background-origin` und deshalb sitzt der Hintergrund innerhalb des Rahmens. Der zweite verwendet die `content-box` und wird daher nur hinter dem Inhalt angezeigt.

```css
.box {
  margin: 10px 0;
  color: #fff;
  background:
    linear-gradient(
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
