---
title: "VirtualKeyboard: hide() Methode"
short-title: hide()
slug: Web/API/VirtualKeyboard/hide
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`hide()`** Methode des [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) Interfaces blendet die virtuelle Bildschirmtastatur programmatisch aus. Dies ist nützlich, wenn die Seite ihre eigene Logik für die virtuelle Tastatur mithilfe der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API) implementieren muss.

Diese Methode funktioniert nur, wenn das Attribut [`virtualKeyboardPolicy`](/de/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) des aktuell fokussierten Elements auf `manual` gesetzt ist und [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) nicht auf `none` festgelegt ist.

Die `hide()` Methode gibt immer `undefined` zurück und löst ein [`geometrychange`](/de/docs/Web/API/VirtualKeyboard/geometrychange_event) Ereignis aus.

## Syntax

```js-nolint
hide()
```

### Parameter

Keine.

### Rückgabewert

Undefined.

## Beispiel

Der folgende Code-Schnipsel zeigt, wie das `virtualkeyboardpolicy` Attribut verwendet wird, um zu verhindern, dass der Browser beim Klicken oder Tippen die virtuelle Tastatur anzeigt. Der Code verwendet auch die Methoden `navigator.virtualKeyboard.show()` und `navigator.virtualKeyboard.hide()`, um die virtuelle Tastatur anzuzeigen und auszublenden, wenn eine Schaltfläche angeklickt wird:

```html
<div contenteditable virtualkeyboardpolicy="manual" id="editor"></div>
<button id="edit-button">Edit</button>
```

```js
if ("virtualKeyboard" in navigator) {
  const editor = document.getElementById("editor");
  const editButton = document.getElementById("edit-button");
  let isEditing = false;

  editButton.addEventListener("click", () => {
    if (isEditing) {
      navigator.virtualKeyboard.hide();
      editButton.textContent = "Edit";
    } else {
      editor.focus();
      navigator.virtualKeyboard.show();
      editButton.textContent = "Save changes";
    }

    isEditing = !isEditing;
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API)
- [Vollständige Kontrolle mit der VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
