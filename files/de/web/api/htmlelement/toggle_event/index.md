---
title: "HTMLElement: toggle event"
slug: Web/API/HTMLElement/toggle_event
l10n:
  sourceCommit: 405fc9a921068347e95211312a8c19e917c457d2
---

{{APIRef("HTML DOM")}}

Das **`toggle`**-Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle wird bei einem [Popover](/de/docs/Web/API/Popover_API)-Element, einem {{htmlelement("dialog")}}-Element oder einem {{htmlelement("details")}}-Element ausgelöst, gerade nachdem es angezeigt oder versteckt wird.

- Wenn das Element von versteckt zu sichtbar wechselt, wird die Eigenschaft [`event.oldState`](/de/docs/Web/API/ToggleEvent/oldState) auf `closed` und die Eigenschaft [`event.newState`](/de/docs/Web/API/ToggleEvent/newState) auf `open` gesetzt.
- Wenn das Element von sichtbar zu versteckt wechselt, wird `event.oldState` `open` sein und `event.newState` `closed`.

Dieses Ereignis ist nicht [abbrechbar (cancelable)](/de/docs/Web/API/Event/cancelable).

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

Der Beispielcode unten zeigt, wie das `toggle`-Ereignis für [Popover](/de/docs/Web/API/Popover_API) verwendet werden könnte. Der gleiche Code kann auf die gleiche Weise für ein {{htmlelement("dialog")}}- oder {{htmlelement("details")}}-Element verwendet werden.

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

Der Code fügt einen Ereignis-Listener für das `toggle`-Ereignis hinzu und protokolliert den Zustand.

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

### Eine Notiz zum Coalescing von Toggle-Ereignissen

Wenn mehrere `toggle`-Ereignisse ausgelöst werden, bevor die Ereignisschleife eine Chance hat, einen Zyklus auszuführen, wird nur ein einziges Ereignis ausgelöst. Dies wird als "Ereignis-Coalescing" bezeichnet.

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

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) HTML globales Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
