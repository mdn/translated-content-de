---
title: "HTMLElement: blur() Methode"
short-title: blur()
slug: Web/API/HTMLElement/blur
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("HTML DOM")}}

Die **`HTMLElement.blur()`** Methode entfernt die Tastaturfokussierung vom aktuellen Element.

## Syntax

```js-nolint
blur()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Den Fokus aus einem Texteingabefeld entfernen

#### HTML

```html
<input type="text" id="sampleText" value="Sample Text" /><br /><br />
<button type="button">Click me to gain focus</button>
```

#### JavaScript

```js
const textField = document.getElementById("sampleText");
const button = document.querySelector("button");

function focusInput() {
  textField.focus();

  // The input will lose focus after 3 seconds
  setTimeout(() => {
    textField.blur();
  }, 3000);
}

button.addEventListener("click", focusInput);
```

#### Ergebnis

{{ EmbedLiveSample('Remove_focus_from_a_text_input') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.focus`](/de/docs/Web/API/HTMLElement/focus)
