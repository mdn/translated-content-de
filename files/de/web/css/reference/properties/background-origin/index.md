---
title: "`background-origin` CSS property"
short-title: background-origin
slug: Web/CSS/Reference/Properties/background-origin
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`background-origin`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt den Ursprung des Hintergrunds: vom Randbeginn aus, innerhalb des Rahmens oder innerhalb des Innenabstands (Padding).

Beachten Sie, dass `background-origin` ignoriert wird, wenn {{cssxref("background-attachment")}} auf `fixed` gesetzt ist.

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
  border: 10px dashed #333333;
  font-size: 2em;
  font-weight: bold;
}
```

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

### Werte

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `border-box`
  - : Der Hintergrund ist relativ zur Rahmenbox positioniert.
- `padding-box`
  - : Der Hintergrund ist relativ zur Innenabstandsbox (Padding) positioniert. Standardwert.
- `content-box`
  - : Der Hintergrund ist relativ zur Inhaltsbox positioniert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung der Hintergrundursprünge

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

### Verwendung von zwei Verläufen

In diesem Beispiel hat die Box einen dicken gepunkteten Rahmen. Der erste Verlauf verwendet die `padding-box` als `background-origin`, und daher sitzt der Hintergrund innerhalb des Rahmens. Der zweite verwendet die `content-box` und wird daher nur hinter dem Inhalt angezeigt.

```css
.box {
  margin: 10px 0;
  color: white;
  background:
    linear-gradient(
      90deg,
      rgb(131 58 180 / 100%) 0%,
      rgb(253 29 29 / 60%) 60%,
      rgb(252 176 69 / 100%) 100%
    ),
    radial-gradient(circle, white 0%, black 28%);
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
