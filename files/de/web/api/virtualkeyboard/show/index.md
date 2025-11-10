---
title: "VirtualKeyboard: show() Methode"
short-title: show()
slug: Web/API/VirtualKeyboard/show
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`show()`**-Methode der [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)-Schnittstelle zeigt programmatisch die virtuelle Bildschirmtastatur an. Dies ist nützlich, wenn die Seite ihre eigene Logik für die virtuelle Tastatur implementieren muss, insbesondere bei der Verwendung des `virtualkeyboardpolicy`-Attributs auf `contenteditable`-Elementen, wie im Abschnitt [Die virtuelle Tastatur auf `contenteditable`-Elementen steuern](/de/docs/Web/API/VirtualKeyboard_API#control_the_virtual_keyboard_on_contenteditable_elements) erläutert wird.

Diese Methode funktioniert nur, wenn das aktuell fokussierte Element ein Formularelement ist — wie ein {{htmlelement("input")}} oder {{htmlelement("textarea")}} Element — oder wenn das fokussierte Element [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) ist und das Attribut [`virtualKeyboardPolicy`](/de/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) des aktuell fokussierten Elements auf `manual` gesetzt ist und [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) nicht auf `none` gesetzt ist.

Die `show()`-Methode gibt immer `undefined` zurück und löst ein [`geometrychange`](/de/docs/Web/API/VirtualKeyboard/geometrychange_event)-Ereignis aus.

## Syntax

```js-nolint
show()
```

### Parameter

Keine.

### Rückgabewert

Undefined.

## Beispiel

Der folgende Codeausschnitt zeigt, wie das `virtualkeyboardpolicy`-Attribut verwendet wird, um den Browser daran zu hindern, die virtuelle Tastatur bei Klick oder Tippen anzuzeigen. Der Code verwendet auch die Methoden `navigator.virtualKeyboard.show()` und `navigator.virtualKeyboard.hide()`, um die virtuelle Tastatur anzuzeigen und auszublenden, wenn ein Button geklickt wird:

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
