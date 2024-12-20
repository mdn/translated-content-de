---
title: "TextUpdateEvent: selectionStart Eigenschaft"
short-title: selectionStart
slug: Web/API/TextUpdateEvent/selectionStart
l10n:
  sourceCommit: 76f2007d4bd30314202820d96bba09f1e31dff33
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`TextUpdateEvent.selectionStart`** gibt die Position des Beginns der Auswahl (oder des Cursors) innerhalb des Textinhalts des bearbeitbaren Bereichs an, der dem [`EditContext`](/de/docs/Web/API/EditContext) Objekt angehängt ist.

## Wert

Eine {{jsxref("Number")}}.

## Beispiele

### Verwendung von `textupdate`, um den bearbeiteten Text und die Benutzerauswahl darzustellen

Dieses Beispiel zeigt, wie die `selectionStart` Eigenschaft verwendet wird, um den ausgewählten Text innerhalb eines [`textupdate`](/de/docs/Web/API/EditContext/textupdate_event) Ereignishandlers darzustellen.

```css
#editor {
  height: 200px;
  background: #eee;
  color: black;
}

.selection {
  display: inline-block;
  vertical-align: bottom;
  background: blue;
  color: white;
  min-width: 2px;
  height: 3ex;
}
```

```html
<div id="editor"></div>
```

```js
const editorEl = document.getElementById("editor");
const editContext = new EditContext();
editorEl.editContext = editContext;

editContext.addEventListener("textupdate", (e) => {
  // Clear the current content.
  editorEl.textContent = "";

  const text = editContext.text;
  const { selectionStart, selectionEnd } = e;

  // Render the text before the selection.
  const textBefore = document.createElement("span");
  textBefore.textContent = text.substring(0, selectionStart);

  // Render the selected text, or caret.
  const textSelected = document.createElement("span");
  textSelected.classList.add("selection");
  textSelected.textContent = text.substring(selectionStart, selectionEnd);

  // Render the text after the selection.
  const textAfter = document.createElement("span");
  textAfter.textContent = text.substring(selectionEnd);

  editorEl.appendChild(textBefore);
  editorEl.appendChild(textSelected);
  editorEl.appendChild(textAfter);

  console.log(`Text before selection: ${textBefore.textContent}`);
  console.log(`Selected text: ${textSelected.textContent}`);
  console.log(`Text after selection: ${textAfter.textContent}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
