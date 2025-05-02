---
title: "EditContext: compositionstart Ereignis"
short-title: compositionstart
slug: Web/API/EditContext/compositionstart_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `compositionstart`-Ereignis der [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle wird ausgelöst, wenn die Zusammensetzung mithilfe eines {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME)-Fensters beginnt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("compositionstart", (event) => { })

oncompositionstart = (event) => { }
```

## Beispiele

### Verwendung von `compositionstart`, um den Rahmen der bearbeitbaren Region zu ändern

Im folgenden Beispiel wird der Rahmen der bearbeitbaren Region auf Rot gesetzt, wenn das `compositionstart`-Ereignis ausgelöst wird, und zurück auf Schwarz, wenn das `compositionend`-Ereignis ausgelöst wird. Beachten Sie, dass die Rückruffunktionen der Ereignislistener in diesem Beispiel nur aufgerufen werden, wenn ein IME-Fenster oder andere plattformabhängige Bearbeitungsoberflächen zur Textzusammensetzung verwendet werden.

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
