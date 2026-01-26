---
title: "HTMLDialogElement: showModal() Methode"
short-title: showModal()
slug: Web/API/HTMLDialogElement/showModal
l10n:
  sourceCommit: 661a04e7a61abe3d8c7245f04cdd1d0bc865fe69
---

{{ APIRef("HTML DOM") }}

Die **`showModal()`**-Methode des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Interfaces zeigt das Dialogfeld als modales Dialogfeld an, das alle anderen sichtbaren Dialoge oder Elemente überlagert.

Ein modales Dialogfeld wird in der {{Glossary("top_layer", "obersten Ebene")}} zusammen mit einem {{cssxref('::backdrop')}} Pseudo-Element angezeigt. Elemente im selben Dokument wie das Dialogfeld, mit Ausnahme des Dialogfelds und seiner Nachkommen, werden _inert_ (als ob das [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attribut angegeben ist). Nur das umgebende Dokument wird blockiert; wenn das Dialogfeld in einem iframe gerendert wird, bleibt der Rest der Seite interaktiv.

## Syntax

```js-nolint
showModal()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dialogfeld bereits geöffnet und nicht-modal ist (d.h. wenn das Dialogfeld bereits mit [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show) geöffnet wurde).

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt einen einfachen Button, der bei einem Klick ein {{htmlelement("dialog")}} mit der `showModal()`-Methode öffnet.

Wenn das Dialogfeld geöffnet ist, können Sie nicht mit dem Rest der Seite interagieren, einschließlich des Klickens auf den Button _Click me_, der andernfalls einen Alarm auslösen würde.

Sie können auf den Button _Close dialog_ klicken, um das Dialogfeld zu schließen (über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode).

#### HTML

```html
<dialog id="dialog">
  <button type="button" id="close">Close dialog</button>
</dialog>

<p><button id="open">Open dialog</button></p>
<p><button id="alert">Trigger alert</button></p>
```

#### JavaScript

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const alertButton = document.getElementById("alert");

// Open button opens a modal dialog
openButton.addEventListener("click", () => {
  dialog.showModal();
});

// Alert button triggers an alert
alertButton.addEventListener("click", () => {
  alert("you clicked me!");
});

// Close button closes the dialog box
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", '100%', "250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{htmlelement("dialog")}}-Element
- [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)
