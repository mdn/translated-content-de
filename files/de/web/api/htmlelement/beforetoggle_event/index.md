---
title: "HTMLElement: beforetoggle Ereignis"
slug: Web/API/HTMLElement/beforetoggle_event
l10n:
  sourceCommit: 661a04e7a61abe3d8c7245f04cdd1d0bc865fe69
---

{{APIRef("HTML DOM")}}

Das **`beforetoggle`** Ereignis des [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interfaces wird an einem [Popover](/de/docs/Web/API/Popover_API) oder einem {{htmlelement("dialog")}} Element kurz bevor es angezeigt oder versteckt wird, ausgelöst.

- Wenn das Element von versteckt zu sichtbar wechselt, wird die Eigenschaft [`event.oldState`](/de/docs/Web/API/ToggleEvent/oldState) auf `closed` gesetzt und die Eigenschaft [`event.newState`](/de/docs/Web/API/ToggleEvent/newState) wird auf `open` gesetzt.
- Wenn das Element von sichtbar zu versteckt wechselt, dann ist `event.oldState` `open` und `event.newState` `closed`.

Dieses Ereignis ist [abbrechbar](/de/docs/Web/API/Event/cancelable), wenn ein Element geöffnet ("show") wird, jedoch nicht, wenn das Element geschlossen wird.

Dieses Ereignis kann unter anderem dazu verwendet werden, um:

- zu verhindern, dass ein Element angezeigt wird.
- Klassen oder Eigenschaften vom Element oder zugehörigen Elementen hinzuzufügen oder zu entfernen, beispielsweise um das Animationsverhalten eines Dialogs beim Öffnen und Schließen zu steuern.
- den Zustand des Elements zu löschen, bevor es geöffnet oder nachdem es versteckt wurde, beispielsweise um ein Dialogformular und den Rückgabewert auf einen leeren Zustand zurückzusetzen oder um alle verschachtelten manuellen Popover beim erneuten Öffnen eines Popups zu verstecken.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("beforetoggle", (event) => { })

onbeforetoggle = (event) => { }
```

## Ereignistyp

Ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ToggleEvent")}}

## Beispiele

Die untenstehenden Beispiele zeigen, wie das `beforetoggle` Ereignis für ein [Popover](/de/docs/Web/API/Popover_API) oder ein {{htmlelement("dialog")}} Element verwendet werden könnte. Dieselben Beispiele würden ähnlich auf anderen Elementtypen funktionieren.

### Einfaches Beispiel

Dieses Beispiel zeigt, wie man das `beforetoggle` Ereignis abfängt und das Ergebnis protokolliert.

#### HTML

Das HTML besteht aus einem Popover und einem Schalter, um es zu öffnen und zu schließen.

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

Der Code fügt einen Ereignis-Listener für das `beforetoggle` Ereignis hinzu und protokolliert den Zustand.

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    log("Popover is about to be shown");
  } else {
    log("Popover is about to be hidden");
  }
});
```

#### Ergebnis

{{EmbedLiveSample("Einfaches Beispiel", '100%', "250px")}}

### Verhindern, dass ein Popover geöffnet wird

Das `beforetoggle` Ereignis ist abbrechbar, wenn es beim Öffnen eines Elements ausgelöst wird.

Unten zeigen wir, wie ein Popover zuerst überprüfen könnte, ob es geöffnet werden darf, und falls nicht, wird [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufgerufen, um das Ereignis abzubrechen. In diesem Beispiel verwenden wir einen Schalter, um festzulegen, ob das Popover geöffnet werden kann oder nicht: In einem "vollständigeren" Beispiel könnte dies vom Anwendungszustand oder davon abhängen, ob die Daten im Popover zum Anzeigen bereit sind.

#### HTML

Das HTML besteht aus einem Popover, einem Schalter, um es zu öffnen und zu schließen, und einem Schalter, um festzulegen, ob der Button geöffnet werden kann.

```html
<button popovertarget="mypopover">Toggle the popover</button>
<label for="allow-popover">
  Allow opening <input type="checkbox" id="allow-popover" checked />
</label>
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

Zuerst richten wir den Code ein, um einen Zustand zu simulieren, in dem wir nicht möchten, dass das Popover geöffnet wird. Dies wird durch die Variable `allowOpen` dargestellt, die umgeschaltet wird, wenn das zugehörige Kontrollkästchen umgeschaltet wird.

```js
const allowCheckbox = document.getElementById("allow-popover");

let allowOpen = true;

allowCheckbox.addEventListener("change", (event) => {
  allowOpen = allowCheckbox.checked;
});
```

Der Code fügt einen Ereignis-Listener für das `beforetoggle` Ereignis hinzu. Wenn `allowOpen` false ist, wird `preventDefault()` aufgerufen, was verhindert, dass das Popup geöffnet wird.

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    if (allowOpen) {
      log("Popover is about to be shown");
    } else {
      log("Popover opening prevented");
      event.preventDefault();
    }
  } else {
    log("Popover is about to be hidden");
  }
});
```

#### Ergebnis

{{EmbedLiveSample("Verhindern, dass ein Popover geöffnet wird", '100%', "250px")}}

### Eine Anmerkung zur Zusammenführung von beforetoggle Ereignissen

Wenn mehrere `beforetoggle` Ereignisse ausgelöst werden, bevor der Ereignisschleifen-Zyklus eine Chance hat, nur ein einziges Ereignis wird ausgelöst. Dies wird als "Ereignis-Zusammenführung" bezeichnet.

Zum Beispiel:

```js
popover.addEventListener("beforetoggle", () => {
  // …
});

popover.showPopover();
popover.hidePopover();
// `beforetoggle` only fires once
```

### Weitere Beispiele

- Beispiel zum [Öffnen eines modalen Dialogs](/de/docs/Web/API/HTMLDialogElement#open_close_a_modal_dialog) in `HTMLDialogElement`

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) HTML globaler Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
