---
title: ::highlight()
slug: Web/CSS/::highlight
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`::highlight()`** CSS-[Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) wendet Stile auf ein benutzerdefiniertes Highlight an.

Ein benutzerdefiniertes Highlight ist eine Sammlung von [`Range`](/de/docs/Web/API/Range)-Objekten und wird auf einer Webseite über das [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) registriert.

## Erlaubte Eigenschaften

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

### Charaktere hervorheben

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
  color: #ad26ad;
  text-decoration: underline;
}
::highlight(rainbow-color-2) {
  color: #5d0a99;
  text-decoration: underline;
}
::highlight(rainbow-color-3) {
  color: #0000ff;
  text-decoration: underline;
}
::highlight(rainbow-color-4) {
  color: #07c607;
  text-decoration: underline;
}
::highlight(rainbow-color-5) {
  color: #b3b308;
  text-decoration: underline;
}
::highlight(rainbow-color-6) {
  color: #ffa500;
  text-decoration: underline;
}
::highlight(rainbow-color-7) {
  color: #ff0000;
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

- [CSS custom highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- Modul [CSS-Pseudoelemente](/de/docs/Web/CSS/CSS_pseudo-elements)
