---
title: "EditContext: compositionend-Ereignis"
short-title: compositionend
slug: Web/API/EditContext/compositionend_event
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `compositionend`-Ereignis der [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle wird ausgelöst, wenn die Komposition mit einem [Input Method Editor](/de/docs/Glossary/Input_Method_Editor) (IME)-Fenster endet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js
addEventListener("compositionend", (event) => {});

oncompositionend = (event) => {};
```

## Beispiele

### Verwendung von `compositionend`, um den Rand des editierbaren Bereichs zu ändern

Im folgenden Beispiel wird der Rand des editierbaren Bereichs auf Rot gesetzt, wenn das `compositionstart`-Ereignis ausgelöst wird, und zurück auf Schwarz, wenn das `compositionend`-Ereignis ausgelöst wird. Beachten Sie, dass die Rückruffunktionen der Ereignislistener in diesem Beispiel nur aufgerufen werden, wenn ein IME-Fenster oder andere plattformspezifische Bearbeitungs-UI-Oberflächen verwendet werden, um Text zu komponieren.

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
