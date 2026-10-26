---
title: "HTMLElement: toggle-Ereignis"
slug: Web/API/HTMLElement/toggle_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("HTML DOM")}}

Das **`toggle`**-Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle wird auf einem [Popover](/de/docs/Web/API/Popover_API)-Element, einem {{htmlelement("dialog")}}-Element oder einem {{htmlelement("details")}}-Element ausgelöst, unmittelbar nachdem es angezeigt oder verborgen wurde.

- Wenn das Element vom verborgenen in den angezeigten Zustand übergeht, wird die Eigenschaft [`event.oldState`](/de/docs/Web/API/ToggleEvent/oldState) auf `closed` und die Eigenschaft [`event.newState`](/de/docs/Web/API/ToggleEvent/newState) auf `open` gesetzt.
- Wenn das Element vom angezeigten in den verborgenen Zustand übergeht, ist `event.oldState` gleich `open` und `event.newState` gleich `closed`.

Dieses Ereignis kann nicht [abgebrochen](/de/docs/Web/API/Event/cancelable) werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("toggle", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ontoggle = (event) => { }
```

## Ereignistyp

Ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ToggleEvent")}}

## Beispiele

Der folgende Beispielcode zeigt, wie das `toggle`-Ereignis für ein [Popover](/de/docs/Web/API/Popover_API) verwendet werden kann. Derselbe Code kann auf die gleiche Weise für ein {{htmlelement("dialog")}}- oder {{htmlelement("details")}}-Element verwendet werden.

### Einfaches Beispiel

Dieses Beispiel zeigt, wie Sie auf das `toggle`-Ereignis lauschen und das Ergebnis protokollieren.

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

Der Code fügt einen Event-Listener für das `toggle`-Ereignis hinzu und protokolliert den Zustand.

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

### Hinweis zur Zusammenfassung von toggle-Ereignissen

Wenn mehrere `toggle`-Ereignisse ausgelöst werden, bevor die Ereignisschleife einen Durchlauf abschließen kann, wird nur ein einziges Ereignis ausgelöst. Dies wird als „Event Coalescing“ bezeichnet.

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

- Beispiel zum [Öffnen eines modalen Dialogs](/de/docs/Web/API/HTMLDialogElement#open_close_a_modal_dialog) unter `HTMLDialogElement`

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Globales HTML-Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)
- [Popover API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
