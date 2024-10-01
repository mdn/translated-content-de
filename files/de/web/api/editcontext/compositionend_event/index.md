---
title: "EditContext: compositionend-Ereignis"
short-title: compositionend
slug: Web/API/EditContext/compositionend_event
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `compositionend`-Ereignis des [`EditContext`](/de/docs/Web/API/EditContext)-Interfaces wird ausgelöst, wenn die Komposition mit einem {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME)-Fenster endet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("compositionend", (event) => {});

oncompositionend = (event) => {};
```

## Beispiele

### Verwendung von `compositionend`, um den Rand des bearbeitbaren Bereichs zu ändern

Im folgenden Beispiel wird der Rand des bearbeitbaren Bereichs auf Rot gesetzt, wenn das `compositionstart`-Ereignis ausgelöst wird, und wieder auf Schwarz, wenn das `compositionend`-Ereignis ausgelöst wird. Beachten Sie, dass die Rückruffunktionen des Ereignis-Listeners in diesem Beispiel nur aufgerufen werden, wenn ein IME-Fenster oder andere plattformspezifische UI-Oberflächen zum Bearbeiten von Text verwendet werden.

```css
#text-editor {
  border: 1px solid black;
}
#text-editor.is-composing {
  border-color: red;
}
```

```html
<div id="text-editor"></div>
```

```js
const editorElement = document.getElementById("text-editor");
const editContext = new EditContext();
editorElement.editContext = editContext;

editContext.addEventListener("compositionstart", (event) => {
  editorElement.classList.add("is-composing");
});

editContext.addEventListener("compositionend", (event) => {
  editorElement.classList.remove("is-composing");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
