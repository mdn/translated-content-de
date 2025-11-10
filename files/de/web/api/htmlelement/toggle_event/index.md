---
title: "HTMLElement: toggle event"
slug: Web/API/HTMLElement/toggle_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTML DOM")}}

Das **`toggle`**-Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle wird bei einem [Popover](/de/docs/Web/API/Popover_API)-Element, {{htmlelement("dialog")}}-Element oder {{htmlelement("details")}}-Element unmittelbar nach dem Anzeigen oder Verbergen ausgelöst.

- Wenn das Element von "versteckt" zu "angezeigt" wechselt, wird die Eigenschaft [`event.oldState`](/de/docs/Web/API/ToggleEvent/oldState) auf `closed` und die Eigenschaft [`event.newState`](/de/docs/Web/API/ToggleEvent/newState) auf `open` gesetzt.
- Wenn das Element von "angezeigt" zu "versteckt" wechselt, wird `event.oldState` `open` sein und `event.newState` wird `closed` sein.

Dieses Ereignis ist nicht [abbrechbar](/de/docs/Web/API/Event/cancelable).

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

Der folgende Beispielcode demonstriert, wie das `toggle`-Ereignis für [Popover](/de/docs/Web/API/Popover_API) verwendet werden könnte. Der gleiche Code könnte auf ähnliche Weise für {{htmlelement("dialog")}}- oder {{htmlelement("details")}}-Elemente verwendet werden.

### Einfaches Beispiel

Dieses Beispiel zeigt, wie man auf das `toggle`-Ereignis hört und das Ergebnis protokolliert.

#### HTML

Das HTML besteht aus einem Popover und einem Button zum Öffnen und Schließen des Popovers.

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

Der Code fügt einen Event Listener für das `toggle`-Ereignis hinzu und protokolliert den Zustand.

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

### Ein Hinweis zur Ereigniszusammenfassung bei toggle-Ereignissen

Wenn mehrere `toggle`-Ereignisse ausgelöst werden, bevor die Ereignisschleife eine Chance hat, den Zyklus durchzuführen, wird nur ein einziges Ereignis ausgelöst. Dies wird als "Ereigniszusammenfassung" bezeichnet.

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

- [Öffnen eines modalen Dialogs](/de/docs/Web/API/HTMLDialogElement#opening_a_modal_dialog) Beispiel in `HTMLDialogElement`

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) HTML-Globalattribut
- [Popover API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
