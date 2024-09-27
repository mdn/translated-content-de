---
title: "VirtualKeyboard: show()-Methode"
short-title: show()
slug: Web/API/VirtualKeyboard/show
l10n:
  sourceCommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`show()`**-Methode des [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)-Interfaces zeigt das virtuelle Bildschirmtastaturprogramm an. Dies ist nützlich, wenn die Seite ihre eigene Logik für die virtuelle Tastatur implementieren muss, insbesondere bei der Verwendung des `virtualkeyboardpolicy`-Attributs auf `contenteditable`-Elementen, wie im Abschnitt [Steuern der virtuellen Tastatur auf `contenteditable`-Elementen](/de/docs/Web/API/VirtualKeyboard_API#control_the_virtual_keyboard_on_contenteditable_elements) erläutert.

Diese Methode funktioniert nur, wenn das momentan fokussierte Element ein Formularsteuerelement ist — wie ein {{htmlelement("input")}}- oder {{htmlelement("textarea")}}-Element — oder wenn das fokussierte Element [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) ist und das momentan fokussierte Element das Attribut [`virtualKeyboardPolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) auf `manual` gesetzt hat und [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) nicht auf `none` gesetzt ist.

Die `show()`-Methode gibt immer `undefined` zurück und löst ein [`geometrychange`](/de/docs/Web/API/VirtualKeyboard/geometrychange_event)-Ereignis aus.

## Syntax

```js-nolint
show()
```

### Parameter

Keine.

### Rückgabewert

Undefiniert.

## Beispiel

Der unten stehende Codeausschnitt zeigt, wie das `virtualkeyboardpolicy`-Attribut verwendet wird, um zu verhindern, dass der Browser die virtuelle Tastatur bei einem Klick oder Tipp anzeigt. Der Code verwendet auch die `navigator.virtualKeyboard.show()`- und `navigator.virtualKeyboard.hide()`-Methoden, um die virtuelle Tastatur anzuzeigen und auszublenden, wenn eine Schaltfläche geklickt wird:

```js
<div contenteditable virtualkeyboardpolicy="manual" id="editor"></div>
<button id="edit-button">Edit</button>
<script>
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
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API)
- [Volle Kontrolle mit der VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
