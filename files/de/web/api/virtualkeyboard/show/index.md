---
title: "VirtualKeyboard: show()-Methode"
short-title: show()
slug: Web/API/VirtualKeyboard/show
l10n:
  sourceCommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`show()`**-Methode des [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)-Interfaces zeigt programmatisch die virtuelle Bildschirmtastatur an. Dies ist nützlich, wenn die Seite ihre eigene virtuelle Tastaturlogik implementieren muss, insbesondere bei der Verwendung des `virtualkeyboardpolicy`-Attributs auf `contenteditable`-Elementen, wie in [Steuern der virtuellen Tastatur auf `contenteditable`-Elementen](/de/docs/Web/API/VirtualKeyboard_API#control_the_virtual_keyboard_on_contenteditable_elements) erklärt.

Diese Methode funktioniert nur, wenn das aktuell fokussierte Element ein Formularelement ist – wie ein {{htmlelement("input")}}- oder {{htmlelement("textarea")}}-Element – oder wenn das fokussierte Element [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) ist und das `virtualKeyboardPolicy`-Attribut des aktuell fokussierten Elements auf `manual` gesetzt ist und `inputmode` nicht auf `none` gesetzt ist.

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

Der folgende Codeausschnitt zeigt, wie das `virtualkeyboardpolicy`-Attribut verwendet wird, um den Browser daran zu hindern, die virtuelle Tastatur bei Klick oder Tipp zu zeigen. Der Code verwendet außerdem die Methoden `navigator.virtualKeyboard.show()` und `navigator.virtualKeyboard.hide()`, um die virtuelle Tastatur anzuzeigen bzw. zu verbergen, wenn eine Schaltfläche geklickt wird:

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
