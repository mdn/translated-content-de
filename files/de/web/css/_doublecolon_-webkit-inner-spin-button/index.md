---
title: ::-webkit-inner-spin-button
slug: Web/CSS/::-webkit-inner-spin-button
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Das **`::-webkit-inner-spin-button`** CSS-Pseudoelement wird verwendet, um den inneren Teil der Spinner-Schaltfläche von Zahlen-Eingabeelementen zu stylen.

## Syntax

```css
::-webkit-inner-spin-button {
  /* ... */
}
```

## Beispiele

Diese Beispiele funktionieren nur in Browsern, die auf WebKit und Blink basieren.

### Den Cursor in den Drehreglern ändern

In diesem Beispiel wird der CSS-{{cssxref("cursor")}} auf `pointer` geändert, wenn sich der Cursor über dem inneren Teil der Spin-Steuerelemente des Eingabefelds befindet.

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

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::-webkit-textfield-decoration-container")}}
- [Styling Form Controls – WebKit](https://trac.webkit.org/wiki/Styling%20Form%20Controls#inputelement)
