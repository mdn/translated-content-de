---
title: "VirtualKeyboard: hide()-Methode"
short-title: hide()
slug: Web/API/VirtualKeyboard/hide
l10n:
  sourceCommit: 957097d5450e24397857fc10902e3d2028f1bc50
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`hide()`**-Methode der {{domxref("VirtualKeyboard")}}-Schnittstelle blendet die virtuelle Bildschirmtastatur programmgesteuert aus. Dies ist nützlich, wenn die Seite ihre eigene Logik für eine virtuelle Tastatur implementieren muss, indem sie die {{domxref("VirtualKeyboard_API", "VirtualKeyboard API", "", "nocode")}} verwendet.

Diese Methode funktioniert nur, wenn das aktuell fokussierte Element das [`virtualKeyboardPolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy)-Attribut auf `manual` gesetzt hat und [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) nicht auf `none` gesetzt ist.

Die `hide()`-Methode gibt immer `undefined` zurück und löst ein {{domxref("VirtualKeyboard.geometrychange_event", "geometrychange")}}-Ereignis aus.

## Syntax

```js-nolint
hide()
```

### Parameter

Keine.

### Rückgabewert

Undefined.

## Beispiel

Der folgende Codeausschnitt zeigt, wie das `virtualkeyboardpolicy`-Attribut verwendet wird, um zu verhindern, dass der Browser die virtuelle Tastatur bei einem Klick oder Tipp anzeigt. Der Code verwendet auch die `navigator.virtualKeyboard.show()`- und `navigator.virtualKeyboard.hide()`-Methoden, um die virtuelle Tastatur zu zeigen und zu verbergen, wenn ein Button geklickt wird:

```html
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

- {{domxref("VirtualKeyboard_API", "Die VirtualKeyboard API", "", "nocode")}}
- [Volle Kontrolle mit der VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
