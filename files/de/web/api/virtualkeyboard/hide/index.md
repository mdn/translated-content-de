---
title: "VirtualKeyboard: hide() Methode"
short-title: hide()
slug: Web/API/VirtualKeyboard/hide
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`hide()`**-Methode der [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)-Schnittstelle blendet programmatisch die Bildschirmtastatur aus. Dies ist nützlich, wenn die Seite ihre eigene virtuelle Tastaturlogik mithilfe der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API) implementieren muss.

Diese Methode funktioniert nur, wenn das aktuell fokussierte Element das Attribut [`virtualKeyboardPolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) auf `manual` gesetzt hat und [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) nicht auf `none` gesetzt ist.

Die `hide()`-Methode gibt immer `undefined` zurück und löst ein [`geometrychange`](/de/docs/Web/API/VirtualKeyboard/geometrychange_event)-Ereignis aus.

## Syntax

```js-nolint
hide()
```

### Parameter

Keine.

### Rückgabewert

Undefined.

## Beispiel

Der folgende Codeausschnitt zeigt, wie das `virtualkeyboardpolicy`-Attribut verwendet wird, um den Browser daran zu hindern, die virtuelle Tastatur bei einem Klick oder Tippen anzuzeigen. Der Code verwendet ebenfalls die `navigator.virtualKeyboard.show()` und `navigator.virtualKeyboard.hide()`-Methoden, um die virtuelle Tastatur anzuzeigen oder auszublenden, wenn ein Button geklickt wird:

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
- [Volle Kontrolle mit der VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
