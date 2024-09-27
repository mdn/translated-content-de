---
title: "HTMLElement: `blur()` Methode"
short-title: blur()
slug: Web/API/HTMLElement/blur
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`HTMLElement.blur()`** Methode entfernt den Tastaturfokus von dem aktuellen Element.

## Syntax

```js-nolint
blur()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Fokus von einem Texteingabefeld entfernen

#### HTML

```html
<input type="text" id="sampleText" value="Sample Text" /> <br /><br />
<button type="button" onclick="focusInput()">Click me to gain focus</button>
```

#### JavaScript

```js
function focusInput() {
  const textField = document.getElementById("sampleText");

  textField.focus();

  // The input will lose focus after 3 seconds
  setTimeout(() => {
    textField.blur();
  }, 3000);
}
```

#### Ergebnis

{{ EmbedLiveSample('Remove_focus_from_a_text_input') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.focus`](/de/docs/Web/API/HTMLElement/focus)
