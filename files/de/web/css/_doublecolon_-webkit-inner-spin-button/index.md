---
title: ::-webkit-inner-spin-button
slug: Web/CSS/::-webkit-inner-spin-button
l10n:
  sourceCommit: 7e1296fc0722c86fb7e15487b5e9626597c7a2a0
---

{{Non-standard_header}}

Der **`::-webkit-inner-spin-button`** [CSS](/de/docs/Web/CSS) Pseudoelement wird verwendet, um den inneren Teil des Spinnbuttons von Zahlenauswahl-Eingabeelementen zu gestalten.

## Syntax

```css
::-webkit-inner-spin-button {
  /* ... */
}
```

## Beispiele

Diese Beispiele funktionieren nur in Browsern, die auf WebKit und Blink basieren.

### Ändern des Cursors in den Spin-Kontrollen

In diesem Beispiel wird der CSS {{cssxref("cursor")}} auf `pointer` geändert, wenn der Cursor über dem inneren Teil der Spinkontrollen des Eingabeelements positioniert ist.

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
