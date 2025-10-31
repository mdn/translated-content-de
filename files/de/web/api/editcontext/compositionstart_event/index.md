---
title: "EditContext: compositionstart Ereignis"
short-title: compositionstart
slug: Web/API/EditContext/compositionstart_event
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `compositionstart`-Ereignis des [`EditContext`](/de/docs/Web/API/EditContext)-Interfaces wird ausgelöst, wenn die Komposition mit einem {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME)-Fenster beginnt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("compositionstart", (event) => { })

oncompositionstart = (event) => { }
```

## Beispiele

### Verwendung von `compositionstart`, um den Rahmen des editierbaren Bereichs zu ändern

Im folgenden Beispiel wird der Rahmen des editierbaren Bereichs auf Rot gesetzt, wenn das `compositionstart`-Ereignis ausgelöst wird, und zurück auf Schwarz, wenn das `compositionend`-Ereignis ausgelöst wird. Beachten Sie, dass die Event-Listener-Callbacks in diesem Beispiel nur aufgerufen werden, wenn ein IME-Fenster oder andere plattformspezifische Bearbeitungsoberflächen zur Textkomposition verwendet werden.

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
