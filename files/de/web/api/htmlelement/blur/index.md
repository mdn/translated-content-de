---
title: "HTMLElement: blur()-Methode"
short-title: blur()
slug: Web/API/HTMLElement/blur
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`HTMLElement.blur()`**-Methode entfernt den Tastaturfokus vom aktuellen Element.

## Syntax

```js-nolint
blur()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Fokus von einem Texteingabefeld entfernen

#### HTML

```html
<input type="text" id="sampleText" value="Sample Text" /> <br /><br />
<button type="button" onclick="focusInput()">Klicken Sie hier, um den Fokus zu erhalten</button>
```

#### JavaScript

```js
function focusInput() {
  const textField = document.getElementById("sampleText");

  textField.focus();

  // Der Fokus des Eingabefeldes geht nach 3 Sekunden verloren
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

- {{domxref("HTMLElement.focus")}}
