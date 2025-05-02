---
title: "EditContext: compositionend-Ereignis"
short-title: compositionend
slug: Web/API/EditContext/compositionend_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `compositionend`-Ereignis des [`EditContext`](/de/docs/Web/API/EditContext)-Interfaces wird ausgelöst, wenn die Komposition mit einem {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME)-Fenster endet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("compositionend", (event) => { })

oncompositionend = (event) => { }
```

## Beispiele

### Verwendung von `compositionend`, um den Rahmen des editierbaren Bereichs zu ändern

Im folgenden Beispiel wird der Rahmen des editierbaren Bereichs auf Rot gesetzt, wenn das `compositionstart`-Ereignis ausgelöst wird, und zurück zu Schwarz, wenn das `compositionend`-Ereignis ausgelöst wird. Beachten Sie, dass die Event-Listener-Rückrufe in diesem Beispiel nur aufgerufen werden, wenn ein IME-Fenster oder andere plattform-spezifische Bearbeitungsoberflächen verwendet werden, um Text zu komponieren.

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
