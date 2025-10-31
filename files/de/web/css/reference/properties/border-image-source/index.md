---
title: border-image-source
slug: Web/CSS/Reference/Properties/border-image-source
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`border-image-source`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Quellbild fest, das verwendet wird, um das [Rahmenbild](/de/docs/Web/CSS/Reference/Properties/border-image) eines Elements zu erstellen.

{{InteractiveExample("CSS Demo: border-image-source")}}

```css interactive-example-choice
border-image-source: url("/shared-assets/images/examples/border-diamonds.png");
```

```css interactive-example-choice
border-image-source: url("/shared-assets/images/examples/border-stars.png");
```

```css interactive-example-choice
border-image-source: repeating-linear-gradient(
  45deg,
  transparent,
  #4d9f0c 20px
);
```

```css interactive-example-choice
border-image-source: none;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">This is a box with a border around it.</div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background: #fff3d4;
  color: black;
  border: 30px solid;
  border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
    round;
  font-size: 1.2em;
}
```

Die {{cssxref("border-image-slice")}} Eigenschaft wird verwendet, um das Quellbild in Regionen zu unterteilen, die dann dynamisch auf das endgültige Rahmenbild angewendet werden.

## Syntax

```css
/* Keyword value */
border-image-source: none;

/* <image> values */
border-image-source: url("image.jpg");
border-image-source: linear-gradient(to top, red, yellow);

/* Global values */
border-image-source: inherit;
border-image-source: initial;
border-image-source: revert;
border-image-source: revert-layer;
border-image-source: unset;
```

### Werte

- `none`
  - : Es wird kein Rahmenbild verwendet. Stattdessen wird das durch {{cssxref("border-style")}} definierte Erscheinungsbild angezeigt.
- {{cssxref("&lt;image&gt;")}}
  - : Bildreferenz, die für den Rahmen verwendet wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

```css
.box {
  border-image-source: url("image.png");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("background-image")}}
- {{cssxref("url_value", "&lt;url&gt;")}} Typ
- [Rahmenbilder in CSS: Ein Hauptfokusbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) auf dem MDN-Blog (2023)
