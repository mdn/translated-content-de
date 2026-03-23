---
title: "HTMLElement: beforetoggle Event"
slug: Web/API/HTMLElement/beforetoggle_event
l10n:
  sourceCommit: 887acda9b43338ce492d4c0ad1a2145e383187b9
---

{{APIRef("HTML DOM")}}

Das **`beforetoggle`**-Ereignis des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces wird bei einem [Popover](/de/docs/Web/API/Popover_API) oder {{htmlelement("dialog")}}-Element unmittelbar bevor es angezeigt oder verborgen wird, ausgelöst.

- Wenn das Element von verborgen zu angezeigt wechselt, ist die [`event.oldState`](/de/docs/Web/API/ToggleEvent/oldState)-Eigenschaft auf `closed` gesetzt und die [`event.newState`](/de/docs/Web/API/ToggleEvent/newState)-Eigenschaft auf `open`.
- Wenn das Element von angezeigt zu verborgen wechselt, wird `event.oldState` `open` sein und `event.newState` `closed`.

Dieses Ereignis ist [abbrechbar](/de/docs/Web/API/Event/cancelable), wenn ein Element zu "offen" ("show") umgeschaltet wird, jedoch nicht, wenn das Element geschlossen wird.

Unter anderem kann dieses Ereignis verwendet werden, um:

- zu verhindern, dass ein Element angezeigt wird.
- Klassen oder Eigenschaften von dem Element oder assoziierten Elementen hinzuzufügen oder zu entfernen, um beispielsweise das Animationsverhalten eines Dialogs zu steuern, während er geöffnet und geschlossen wird.
- den Zustand des Elements zu löschen, bevor es geöffnet oder nachdem es verborgen wurde, um zum Beispiel ein Dialogformular zurückzusetzen und den Rückgabewert in einen leeren Zustand zu versetzen oder geschachtelte manuelle Popovers zu verbergen, wenn ein Popup wieder geöffnet wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("beforetoggle", (event) => { })

onbeforetoggle = (event) => { }
```

## Ereignistyp

Ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ToggleEvent")}}

## Beispiele

Die folgenden Beispiele demonstrieren, wie das `beforetoggle`-Ereignis für ein [Popover](/de/docs/Web/API/Popover_API)-Element verwendet werden könnte.
Die gleichen Beispiele würden ähnlich auf einem {{htmlelement("dialog")}}-Element funktionieren.

### Einfaches Beispiel

Dieses Beispiel zeigt, wie das `beforetoggle`-Ereignis überwacht und das Ergebnis protokolliert wird.

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

Der Code fügt einen Ereignislistener für das `beforetoggle`-Ereignis hinzu und protokolliert den Zustand.

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

{{EmbedLiveSample("Basic example", '100%', "250px")}}

### Verhindern, dass ein Popover geöffnet wird

Das `beforetoggle`-Ereignis ist abbrechbar, wenn es beim Öffnen eines Elements ausgelöst wird.

Unten zeigen wir, wie ein Popover zuerst überprüft, ob es geöffnet werden darf, und wenn nicht, wird [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufgerufen, um das Ereignis abzubrechen. In diesem Beispiel verwenden wir eine Checkbox, um festzulegen, ob das Popover geöffnet werden kann oder nicht: In einem umfassenderen Beispiel könnte dies vom Anwendungszustand oder davon abhängen, ob die Daten im Popover bereit zur Anzeige sind.

#### HTML

Das HTML besteht aus einem Popover, einem Button zum Öffnen und Schließen und einer Checkbox, um festzulegen, ob das Popover geöffnet werden darf.

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

Zuerst setzen wir den Code auf, um einen Zustand zu simulieren, in dem wir dem Popover erlauben wollen, sich zu öffnen.
Dies wird durch die Variable `allowOpen` dargestellt, die umgeschaltet wird, wenn die zugehörige Checkbox umgeschaltet wird.

```js
const allowCheckbox = document.getElementById("allow-popover");

let allowOpen = true;

allowCheckbox.addEventListener("change", (event) => {
  allowOpen = allowCheckbox.checked;
});
```

Der Code fügt einen Ereignislistener für das `beforetoggle`-Ereignis hinzu.
Wenn `allowOpen` falsch ist, wird `preventDefault()` aufgerufen, was das Öffnen des Popups verhindert.

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

{{EmbedLiveSample("Prevent a popover opening", '100%', "250px")}}

### Weitere Beispiele

- [Öffnen eines modalen Dialogs](/de/docs/Web/API/HTMLDialogElement#open_close_a_modal_dialog) im Beispiel `HTMLDialogElement`

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) globales HTML-Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
