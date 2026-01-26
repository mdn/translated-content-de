---
title: "HTMLDialogElement: show() Methode"
short-title: show()
slug: Web/API/HTMLDialogElement/show
l10n:
  sourceCommit: 661a04e7a61abe3d8c7245f04cdd1d0bc865fe69
---

{{ APIRef("HTML DOM") }}

Die **`show()`** Methode der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle zeigt das Dialogfeld als ein nicht-modales Dialogfeld an.

Ein nicht-modales Dialogfeld ist eines, bei dem Benutzer mit dem Inhalt außerhalb/hinter dem geöffneten Dialog interagieren können.

## Syntax

```js-nolint
show()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dialogfeld bereits geöffnet und modal ist (d.h. wenn das Dialogfeld bereits mit [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet wurde).

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt einen einfachen Button, der, wenn er angeklickt wird, ein {{htmlelement("dialog")}} mit der `show()` Methode öffnet.

Wenn das Dialogfeld geöffnet ist, können Sie weiterhin mit dem Rest der Seite interagieren, einschließlich des Klickens auf den Button _Click me_, der einen Alert auslöst.

Sie können auf den Button _Close dialog_ klicken, um das Dialogfeld zu schließen (über die [`close()`](/de/docs/Web/API/HTMLDialogElement/close) Methode).

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

// Open button opens a modeless dialog
openButton.addEventListener("click", () => {
  dialog.show();
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

- HTML {{htmlelement("dialog")}} Element
- [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)
