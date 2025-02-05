---
title: "::-webkit-inner-spin-button"
slug: Web/CSS/::-webkit-inner-spin-button
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-webkit-inner-spin-button`** CSS-Pseudoelement wird verwendet, um den inneren Teil des Drehknopfs von Eingabeelementen für Zahlenauswahl zu stylen.

## Syntax

```css
::-webkit-inner-spin-button {
  /* ... */
}
```

## Beispiele

Diese Beispiele funktionieren nur in Browsern, die auf WebKit und Blink basieren.

### Ändern des Cursors in den Drehsteuerungen

In diesem Beispiel wird das CSS {{cssxref("cursor")}} auf `pointer` gesetzt, wenn sich der Cursor über dem inneren Teil der Drehsteuerungen des Eingabefelds befindet.

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
