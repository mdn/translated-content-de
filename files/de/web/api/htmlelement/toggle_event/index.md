---
title: "HTMLElement: toggle Ereignis"
slug: Web/API/HTMLElement/toggle_event
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Das **`toggle`** Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle wird bei einem [Popover](/de/docs/Web/API/Popover_API) Element, einem {{htmlelement("dialog")}} Element oder einem {{htmlelement("details")}} Element unmittelbar nach dessen Anzeige oder Ausblendung ausgelöst.

- Wenn das Element vom ausgeblendeten in den angezeigten Zustand wechselt, wird die Eigenschaft [`event.oldState`](/de/docs/Web/API/ToggleEvent/oldState) auf `closed` gesetzt und die Eigenschaft [`event.newState`](/de/docs/Web/API/ToggleEvent/newState) auf `open`.
- Wenn das Element vom angezeigten in den ausgeblendeten Zustand wechselt, ist `event.oldState` `open` und `event.newState` `closed`.

Dieses Ereignis ist nicht [abbrechbar](/de/docs/Web/API/Event/cancelable).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("toggle", (event) => {});

ontoggle = (event) => {};
```

## Ereignistyp

Ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ToggleEvent")}}

## Beispiele

Der folgende Beispielcode demonstriert, wie das `toggle` Ereignis für ein [Popover](/de/docs/Web/API/Popover_API) verwendet werden kann. Der gleiche Code kann auf {{htmlelement("dialog")}} oder {{htmlelement("details")}} Elemente auf die gleiche Weise angewendet werden.

### Einfaches Beispiel

Dieses Beispiel zeigt, wie Sie das `toggle` Ereignis überwachen und das Ergebnis protokollieren können.

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

Der Code fügt einen Ereignislistener für das `toggle` Ereignis hinzu und protokolliert den Zustand.

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

### Ein Hinweis zum Coalescing von toggle Ereignissen

Wenn mehrere `toggle` Ereignisse ausgelöst werden, bevor der Ereignis-Loop die Chance hat, erneut zu durchlaufen, wird nur ein einziges Ereignis ausgelöst. Dies wird als "Ereignis-Coalescing" bezeichnet.

Zum Beispiel:

```js
popover.addEventListener("toggle", () => {
  //...
});

popover.showPopover();
popover.hidePopover();
// `toggle` only fires once
```

### Weitere Beispiele

- [Öffnen eines modalen Dialogs](/de/docs/Web/API/HTMLDialogElement#opening_a_modal_dialog) Beispiel in `HTMLDialogElement`

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) HTML-Globalattribut
- [Popover API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
