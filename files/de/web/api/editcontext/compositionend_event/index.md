---
title: "EditContext: compositionend-Ereignis"
short-title: compositionend
slug: Web/API/EditContext/compositionend_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `compositionend`-Ereignis der [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle wird ausgelöst, wenn die Texteingabe über ein Fenster eines {{Glossary("Input_Method_Editor", "Input Method Editors")}} (IME) endet.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("compositionend", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
oncompositionend = (event) => { }
```

## Beispiele

### Mit `compositionend` den Rahmen des bearbeitbaren Bereichs ändern

Im folgenden Beispiel wird der Rahmen des bearbeitbaren Bereichs rot, wenn das `compositionstart`-Ereignis ausgelöst wird, und wieder schwarz, wenn das `compositionend`-Ereignis ausgelöst wird. Beachten Sie, dass die Event-Listener-Callbacks in diesem Beispiel nur aufgerufen werden, wenn Text über ein IME-Fenster oder eine andere plattformspezifische Bearbeitungsoberfläche eingegeben wird.

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
