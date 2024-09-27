---
title: "::-webkit-inner-spin-button"
slug: Web/CSS/::-webkit-inner-spin-button
l10n:
  sourceCommit: 0e264dd679bdb56fe062fe2849ae57e3209a702b
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-webkit-inner-spin-button`** CSS-Pseudoelement wird verwendet, um den inneren Teil des Drehknopfs von Zahlenauswahl-Input-Elementen zu gestalten.

## Syntax

```css
::-webkit-inner-spin-button {
  /* ... */
}
```

## Beispiele

Diese Beispiele funktionieren nur in Browsern, die auf WebKit und Blink basieren.

### Ändern des Cursors in den Drehsteuerungen

In diesem Beispiel wird das CSS {{cssxref("cursor")}} auf `pointer` geändert, wenn sich der Cursor über dem inneren Teil der Drehsteuerungen des Eingabefeldes befindet.

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
