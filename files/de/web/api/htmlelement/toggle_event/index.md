---
title: "HTMLElement: toggle Ereignis"
slug: Web/API/HTMLElement/toggle_event
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("HTML DOM")}}

Das **`toggle`**-Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle wird bei einem [Popover](/de/docs/Web/API/Popover_API)-Element, {{htmlelement("dialog")}}-Element oder {{htmlelement("details")}}-Element ausgelöst, unmittelbar nachdem es angezeigt oder verborgen wurde.

- Wenn das Element von verborgen zu sichtbar wechselt, wird die Eigenschaft [`event.oldState`](/de/docs/Web/API/ToggleEvent/oldState) auf `closed` gesetzt und die Eigenschaft [`event.newState`](/de/docs/Web/API/ToggleEvent/newState) auf `open`.
- Wenn das Element von sichtbar zu verborgen wechselt, wird `event.oldState` `open` sein und `event.newState` wird `closed` sein.

Dieses Ereignis ist nicht [abbrechbar](/de/docs/Web/API/Event/cancelable).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("toggle", (event) => {});

ontoggle = (event) => {};
```

## Ereignistyp

Ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ToggleEvent")}}

## Beispiele

Der folgende Beispielcode zeigt, wie das `toggle`-Ereignis mit einem [Popover](/de/docs/Web/API/Popover_API) verwendet werden kann.
Der gleiche Code kann auch auf {{htmlelement("dialog")}}- oder {{htmlelement("details")}}-Elemente in gleicher Weise angewendet werden.

### Einfaches Beispiel

Dieses Beispiel zeigt, wie man auf das `toggle`-Ereignis hört und das Ergebnis protokolliert.

#### HTML

Das HTML besteht aus einem Popover und einem Button, um es zu öffnen und zu schließen.

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 150px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

Der Code fügt einen Ereignislistener für das `toggle`-Ereignis hinzu und protokolliert den Zustand.

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (event) => {
  if (event.newState === "open") {
    console.log("Popover has been shown");
  } else {
    console.log("Popover has been hidden");
  }
});
```

#### Ergebnis

{{EmbedLiveSample("Basic example", '100%', "250px")}}

### Eine Anmerkung zur Zusammenführung von toggle-Ereignissen

Wenn mehrere `toggle`-Ereignisse ausgelöst werden, bevor die Ereignisschleife die Möglichkeit hat, ihren Zyklus zu durchlaufen, wird nur ein einzelnes Ereignis ausgelöst. Dies wird als "Ereigniszusaammenführung" bezeichnet.

Beispiel:

```js
popover.addEventListener("toggle", () => {
  // …
});

popover.showPopover();
popover.hidePopover();
// `toggle` only fires once
```

### Weitere Beispiele

- [Ein modales Dialogfeld öffnen](/de/docs/Web/API/HTMLDialogElement#opening_a_modal_dialog) Beispiel im `HTMLDialogElement`

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) HTML-Globalattribut
- [Popover API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
