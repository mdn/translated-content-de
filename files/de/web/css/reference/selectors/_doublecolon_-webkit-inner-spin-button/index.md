---
title: ::-webkit-inner-spin-button
slug: Web/CSS/Reference/Selectors/::-webkit-inner-spin-button
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_header}}

Das **`::-webkit-inner-spin-button`** [CSS](/de/docs/Web/CSS) Pseudoelement wird verwendet, um den inneren Teil des Spin-Buttons von Zahlen-Eingabeelementen zu gestalten.

## Syntax

```css
::-webkit-inner-spin-button {
  /* ... */
}
```

## Beispiele

Diese Beispiele funktionieren nur in Browsern, die auf WebKit und Blink basieren.

### Ändern des Cursors in den Spin-Steuerelementen

In diesem Beispiel wird der CSS {{cssxref("cursor")}} auf `pointer` geändert, wenn sich der Cursor über dem inneren Teil der Spin-Steuerelemente des Eingabefelds befindet.

#### HTML

```html
<input type="number" />
```

#### CSS

```css
input[type="number"]::-webkit-inner-spin-button {
  cursor: pointer;
}
```

#### Ergebnis

{{EmbedLiveSample("Changing_the_cursor_in_the_spin_controls", 200, 30)}}

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::-webkit-textfield-decoration-container")}}
- [Styling Form Controls – WebKit](https://trac.webkit.org/wiki/Styling%20Form%20Controls#inputelement)
