---
title: "HTMLElement: toggle event"
slug: Web/API/HTMLElement/toggle_event
l10n:
  sourceCommit: 661a04e7a61abe3d8c7245f04cdd1d0bc865fe69
---

{{APIRef("HTML DOM")}}

Das **`toggle`**-Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle wird bei einem [Popover](/de/docs/Web/API/Popover_API)-Element, einem {{htmlelement("dialog")}}-Element oder einem {{htmlelement("details")}}-Element unmittelbar, nachdem es angezeigt oder verborgen wurde, ausgelöst.

- Wenn das Element vom Zustand "verborgen" zu "angezeigt" wechselt, wird die Eigenschaft [`event.oldState`](/de/docs/Web/API/ToggleEvent/oldState) auf `closed` und die Eigenschaft [`event.newState`](/de/docs/Web/API/ToggleEvent/newState) auf `open` gesetzt.
- Wenn das Element vom Zustand "angezeigt" zu "verborgen" wechselt, ist `event.oldState` `open` und `event.newState` `closed`.

Dieses Ereignis ist nicht [abbrufbar](/de/docs/Web/API/Event/cancelable).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("toggle", (event) => { })

ontoggle = (event) => { }
```

## Ereignistyp

Ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ToggleEvent")}}

## Beispiele

Das folgende Beispielcode zeigt, wie das `toggle`-Ereignis bei einem [Popover](/de/docs/Web/API/Popover_API) verwendet werden kann.
Der gleiche Code kann auf dieselbe Weise für {{htmlelement("dialog")}}- oder {{htmlelement("details")}}-Elemente verwendet werden.

### Einfaches Beispiel

Dieses Beispiel zeigt, wie man auf das `toggle`-Ereignis hört und das Ergebnis protokolliert.

#### HTML

Das HTML besteht aus einem Popover und einem Button, mit dem es geöffnet und geschlossen werden kann.

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

Der Code fügt einen Ereignislistener für das `toggle`-Ereignis hinzu und protokolliert den Status.

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (event) => {
  if (event.newState === "open") {
    log("Popover has been shown");
  } else {
    log("Popover has been hidden");
  }
});
```

#### Ergebnis

{{EmbedLiveSample("Basic example", '100%', "250px")}}

### Eine Anmerkung zur Zusammenfassung von Toggle-Ereignissen

Wenn mehrere `toggle`-Ereignisse ausgelöst werden, bevor die Ereignisschleife eine Chance hat, einen Zyklus durchzuführen, wird nur ein einziges Ereignis ausgelöst.
Dies wird als "Ereigniscoalescen" bezeichnet.

Zum Beispiel:

```js
popover.addEventListener("toggle", () => {
  // …
});

popover.showPopover();
popover.hidePopover();
// `toggle` only fires once
```

### Weitere Beispiele

- [Öffnen eines modalen Dialogs](/de/docs/Web/API/HTMLDialogElement#open_close_a_modal_dialog) Beispiel in `HTMLDialogElement`

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) HTML-Globalattribut
- [Popover API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
