---
title: overflow-clip-margin
slug: Web/CSS/overflow-clip-margin
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`overflow-clip-margin`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, wie weit außerhalb seiner Grenzen ein Element mit [`overflow: clip`](/de/docs/Web/CSS/overflow) gezeichnet werden darf, bevor es abgeschnitten wird. Die durch diese Eigenschaft definierte Grenze wird als _Overflow-Clip-Kante_ der Box bezeichnet.

## Syntax

```css
/* <length> values */
overflow-clip-margin: 20px;
overflow-clip-margin: 1em;

/* <visual-box> | <length> */
overflow-clip-margin: content-box 5px;

/* Global values */
overflow-clip-margin: inherit;
overflow-clip-margin: initial;
overflow-clip-margin: revert;
overflow-clip-margin: revert-layer;
overflow-clip-margin: unset;
```

Der `<visual-box>` Wert, der standardmäßig `padding-box` ist, gibt die Boxkante an, die als Ursprung der Overflow-Clip-Kante verwendet wird. Der in `overflow-clip-margin` angegebene {{cssxref("&lt;length&gt;")}}-Wert muss nicht negativ sein.

> [!NOTE]
> Wenn das Element nicht `overflow: clip` aufweist, wird diese Eigenschaft ignoriert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<div class="box">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur.
</div>
```

### CSS

```css
.box {
  border: 3px solid black;
  width: 250px;
  height: 100px;
  overflow: clip;
  overflow-clip-margin: 20px;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", "280")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte CSS-Eigenschaften: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow")}}, {{Cssxref("overflow-inline")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
