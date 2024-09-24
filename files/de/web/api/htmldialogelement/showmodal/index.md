---
title: "HTMLDialogElement: showModal()-Methode"
short-title: showModal()
slug: Web/API/HTMLDialogElement/showModal
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("HTML DOM") }}

Die **`showModal()`**-Methode der {{domxref("HTMLDialogElement")}}-Schnittstelle zeigt den Dialog als modales Fenster über allen anderen möglicherweise vorhandenen Dialogen an. Es wird in der {{glossary("top layer")}} zusammen mit einem {{cssxref('::backdrop')}} Pseudoelement angezeigt. Die Interaktion außerhalb des Dialogs ist gesperrt und der Inhalt außerhalb wird inaktiv dargestellt.

## Syntax

```js-nolint
showModal()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Dialog bereits geöffnet ist (d. h., wenn das `open`-Attribut bereits auf dem {{htmlelement("dialog")}}-Element gesetzt ist), oder wenn der Dialog auch ein [Popover](/de/docs/Web/API/Popover_API) ist, das bereits angezeigt wird.

## Beispiele

### Öffnen eines modalen Dialogs

Das folgende Beispiel zeigt einen Button, der beim Klicken ein modales {{htmlelement("dialog")}} mit einem Formular über die `HTMLDialogElement.showModal()`-Funktion öffnet. Während es geöffnet ist, ist alles außer dem Inhalt des modalen Dialogs inaktiv. Von dort aus können Sie auf die Schaltfläche _Abbrechen_ klicken, um den Dialog zu schließen (über die {{domxref("HTMLDialogElement.close()")}}-Funktion) oder das Formular über die Absenden-Schaltfläche senden. Durch Auswahl der Abbrechen-Schaltfläche wird der Dialog geschlossen und ein {{domxref("HTMLDialogElement/close_event", "close")}}-Ereignis ausgelöst, nicht jedoch ein {{domxref("HTMLElement/cancel_event", "cancel")}}-Ereignis.

#### HTML

```html
<!-- Popup-Dialogfeld, das ein Formular enthält -->
<dialog id="favDialog">
  <form method="dialog">
    <p>
      <label for="favAnimal">Lieblingstier:</label>
      <select id="favAnimal" name="favAnimal">
        <option></option>
        <option>Salinenkrebs</option>
        <option>Roter Panda</option>
        <option>Klammeraffe</option>
      </select>
    </p>
    <div>
      <button id="cancel" type="reset">Abbrechen</button>
      <button type="submit">Bestätigen</button>
    </div>
  </form>
</dialog>

<div>
  <button id="updateDetails">Details aktualisieren</button>
</div>
```

#### JavaScript

```js
const updateButton = document.getElementById("updateDetails");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("favDialog");
dialog.returnValue = "favAnimal";

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog geöffnet");
  } else {
    console.log("Dialog geschlossen");
  }
}

// Aktualisierungs-Button öffnet einen modalen Dialog
updateButton.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

// Abbrechen-Schaltfläche im Formular schließt das Dialogfeld
cancelButton.addEventListener("click", () => {
  dialog.close("animalNotChosen");
  openCheck(dialog);
});
```

#### Ergebnis

{{EmbedLiveSample("Opening a modal dialog")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("dialog") }}.
