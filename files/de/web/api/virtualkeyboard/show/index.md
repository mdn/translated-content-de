---
title: "VirtualKeyboard: show() Methode"
short-title: show()
slug: Web/API/VirtualKeyboard/show
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`show()`** Methode des [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) Interfaces zeigt programmgesteuert die Bildschirmtastatur an. Dies ist nützlich, wenn die Seite ihre eigene Logik für die Bildschirmtastatur implementieren muss, insbesondere bei der Verwendung des `virtualkeyboardpolicy` Attributs auf `contenteditable` Elementen, wie im [Steuern der Bildschirmtastatur bei `contenteditable` Elementen](/de/docs/Web/API/VirtualKeyboard_API#control_the_virtual_keyboard_on_contenteditable_elements) beschrieben.

Diese Methode funktioniert nur, wenn das aktuell fokussierte Element ein Formularelement ist — wie ein {{htmlelement("input")}} oder {{htmlelement("textarea")}} Element — oder wenn das fokussierte Element [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) ist, und das aktuell fokussierte Element das Attribut [`virtualKeyboardPolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) auf `manual` gesetzt hat und [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) nicht auf `none` gesetzt ist.

Die `show()` Methode gibt immer `undefined` zurück und löst ein [`geometrychange`](/de/docs/Web/API/VirtualKeyboard/geometrychange_event) Ereignis aus.

## Syntax

```js-nolint
show()
```

### Parameter

Keine.

### Rückgabewert

Undefiniert.

## Beispiel

Der untenstehende Codeausschnitt zeigt, wie das `virtualkeyboardpolicy` Attribut genutzt wird, um den Browser daran zu hindern, die Bildschirmtastatur bei Klick oder Berührung anzuzeigen. Der Code verwendet auch die Methoden `navigator.virtualKeyboard.show()` und `navigator.virtualKeyboard.hide()`, um die Bildschirmtastatur anzuzeigen und auszublenden, wenn ein Button geklickt wird:

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
