---
title: "EditContext: compositionend-Ereignis"
short-title: compositionend
slug: Web/API/EditContext/compositionend_event
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `compositionend`-Ereignis der [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle wird ausgelöst, wenn die Komposition mit einem {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME)-Fenster endet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("compositionend", (event) => { })

oncompositionend = (event) => { }
```

## Beispiele

### Verwendung von `compositionend`, um den Rand des bearbeitbaren Bereichs zu ändern

Im folgenden Beispiel wird der Rand des bearbeitbaren Bereichs rot, wenn das `compositionstart`-Ereignis ausgelöst wird, und wieder schwarz, wenn das `compositionend`-Ereignis ausgelöst wird. Beachten Sie, dass die Ereignis-Listener-Rückrufe in diesem Beispiel nur aufgerufen werden, wenn ein IME-Fenster oder andere plattformspezifische Bearbeitungs-UI-Oberflächen verwendet werden, um Text zu komponieren.

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
