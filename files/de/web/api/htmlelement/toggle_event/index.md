---
title: "HTMLElement: toggle event"
slug: Web/API/HTMLElement/toggle_event
l10n:
  sourceCommit: a62600788f390d326859cfbf6171013a3f351690
---

{{APIRef("HTML DOM")}}

Das **`toggle`**-Ereignis des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces wird bei einem [Popover](/de/docs/Web/API/Popover_API)-Element, einem {{htmlelement("dialog")}}-Element oder einem {{htmlelement("details")}}-Element unmittelbar nach dessen Anzeige oder Ausblenden ausgelöst.

- Wenn das Element vom Zustand "versteckt" zu "sichtbar" wechselt, wird die Eigenschaft [`event.oldState`](/de/docs/Web/API/ToggleEvent/oldState) auf `closed` und die Eigenschaft [`event.newState`](/de/docs/Web/API/ToggleEvent/newState) auf `open` gesetzt.
- Falls das Element von "sichtbar" zu "versteckt" wechselt, wird `event.oldState` auf `open` und `event.newState` auf `closed` gesetzt.

Dieses Ereignis ist nicht [cancelable](/de/docs/Web/API/Event/cancelable).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("toggle", (event) => {});

ontoggle = (event) => {};
```

## Ereignistyp

Ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ToggleEvent")}}

## Beispiele

Der folgende Beispielcode zeigt, wie das `toggle`-Ereignis für ein [Popover](/de/docs/Web/API/Popover_API) verwendet werden kann. Der gleiche Code kann für ein {{htmlelement("dialog")}}- oder {{htmlelement("details")}}-Element auf die gleiche Weise verwendet werden.

### Einfaches Beispiel

Dieses Beispiel zeigt, wie man dem `toggle`-Ereignis zuhört und das Ergebnis protokolliert.

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
    console.log("Popover has been shown");
  } else {
    console.log("Popover has been hidden");
  }
});
```

#### Ergebnis

{{EmbedLiveSample("Basic example", '100%', "250px")}}

### Eine Anmerkung zur Zusammenfassung von toggle-Ereignissen

Wenn mehrere `toggle`-Ereignisse ausgelöst werden, bevor der Ereignisschleifen-Zyklus durchläuft, wird nur ein einziges Ereignis ausgelöst. Dies wird als "Ereignis-Zusammenfassung" bezeichnet.

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

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML Globales Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
