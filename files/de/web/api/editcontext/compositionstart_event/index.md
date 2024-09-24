---
title: "EditContext: compositionstart-Ereignis"
short-title: compositionstart
slug: Web/API/EditContext/compositionstart_event
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `compositionstart`-Ereignis der {{domxref("EditContext")}}-Schnittstelle wird ausgelöst, wenn die Komposition mit einem {{glossary("Input Method Editor")}} (IME)-Fenster beginnt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("compositionstart", (event) => {});

oncompositionstart = (event) => {};
```

## Beispiele

### Verwendung von `compositionstart`, um den Rahmen des bearbeitbaren Bereichs zu ändern

Im folgenden Beispiel wird der Rahmen des bearbeitbaren Bereichs auf Rot gesetzt, wenn das `compositionstart`-Ereignis ausgelöst wird, und zurück auf Schwarz, wenn das `compositionend`-Ereignis ausgelöst wird. Beachten Sie, dass die Ereignis-Listener-Callbacks in diesem Beispiel nur aufgerufen werden, wenn ein IME-Fenster oder andere plattformspezifische Bearbeitungsoberflächen zum Komponieren von Text verwendet werden.

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
