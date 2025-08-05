---
title: ::highlight()
slug: Web/CSS/::highlight
l10n:
  sourceCommit: 7f460077d6f16c939718e9482a8270166f6d9abd
---

Das **`::highlight()`** CSS [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wendet Stile auf einen benutzerdefinierten Highlight an.

Ein benutzerdefinierter Highlight ist eine Sammlung von [`Range`](/de/docs/Web/API/Range)-Objekten und wird auf einer Webseite mit dem [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) registriert.

## Zulässige Eigenschaften

Nur bestimmte CSS-Eigenschaften können mit `::highlight()` verwendet werden:

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("text-decoration")}} und die zugehörigen Eigenschaften
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("-webkit-text-stroke-color")}}, {{CSSxRef("-webkit-text-fill-color")}} und {{CSSxRef("-webkit-text-stroke-width")}}

Insbesondere wird {{CSSxRef("background-image")}} ignoriert.

## Syntax

```css-nolint
::highlight(custom-highlight-name)
```

## Beispiele

### Zeichen hervorheben

#### HTML

```html
<p id="rainbow-text">CSS Custom Highlight API rainbow</p>
```

#### CSS

```css
#rainbow-text {
  font-family: monospace;
  font-size: 1.5rem;
}

::highlight(rainbow-color-1) {
  color: violet;
  text-decoration: underline;
}
::highlight(rainbow-color-2) {
  color: purple;
  text-decoration: underline;
}
::highlight(rainbow-color-3) {
  color: blue;
  text-decoration: underline;
}
::highlight(rainbow-color-4) {
  color: green;
  text-decoration: underline;
}
::highlight(rainbow-color-5) {
  color: yellow;
  text-decoration: underline;
}
::highlight(rainbow-color-6) {
  color: orange;
  text-decoration: underline;
}
::highlight(rainbow-color-7) {
  color: red;
  text-decoration: underline;
}
```

#### JavaScript

```js
const textNode = document.getElementById("rainbow-text").firstChild;

if (!CSS.highlights) {
  textNode.textContent =
    "The CSS Custom Highlight API is not supported in this browser!";
}

// Create and register highlights for each color in the rainbow.
const highlights = [];
for (let i = 0; i < 7; i++) {
  // Create a new highlight for this color.
  const colorHighlight = new Highlight();
  highlights.push(colorHighlight);

  // Register this highlight under a custom name.
  CSS.highlights.set(`rainbow-color-${i + 1}`, colorHighlight);
}

// Iterate over the text, character by character.
for (let i = 0; i < textNode.textContent.length; i++) {
  // Create a new range just for this character.
  const range = new Range();
  range.setStart(textNode, i);
  range.setEnd(textNode, i + 1);

  // Add the range to the next available highlight,
  // looping back to the first one once we've reached the 7th.
  highlights[i % 7].add(range);
}
```

#### Ergebnis

{{ EmbedLiveSample("Highlighting characters") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS custom highlight API](/de/docs/Web/CSS/CSS_custom_highlight_API) Modul
- [CSS custom highlight](/de/docs/Web/API/CSS_Custom_Highlight_API) API
- [CSS pseudo-elements](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
