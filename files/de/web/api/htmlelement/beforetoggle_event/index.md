---
title: "HTMLElement: beforetoggle Ereignis"
slug: Web/API/HTMLElement/beforetoggle_event
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("HTML DOM")}}

Das **`beforetoggle`** Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle wird auf einem [Popover](/de/docs/Web/API/Popover_API) oder einem {{htmlelement("dialog")}}-Element unmittelbar bevor es angezeigt oder ausgeblendet wird, ausgelöst.

- Wenn das Element von ausgeblendet zu sichtbar wechselt, wird die Eigenschaft [`event.oldState`](/de/docs/Web/API/ToggleEvent/oldState) auf `closed` gesetzt und die Eigenschaft [`event.newState`](/de/docs/Web/API/ToggleEvent/newState) auf `open`.
- Wenn das Element von sichtbar zu ausgeblendet wechselt, ist `event.oldState` `open` und `event.newState` `closed`.

Dieses Ereignis ist [stornierbar](/de/docs/Web/API/Event/cancelable), wenn ein Element geöffnet ("show") wird, jedoch nicht, wenn das Element geschlossen wird.

Dieses Ereignis kann unter anderem verwendet werden, um:

- zu verhindern, dass ein Element angezeigt wird.
- Klassen oder Eigenschaften vom Element oder zugehörigen Elementen hinzuzufügen oder zu entfernen, um beispielsweise das Animationsverhalten eines Dialogs beim Öffnen und Schließen zu steuern.
- den Zustand des Elements vor dem Öffnen oder nach dem Ausblenden zu bereinigen, beispielsweise um ein Dialogformular zurückzusetzen und den Rückgabewert in einen leeren Zustand zu versetzen oder verschachtelte manuelle Popover beim erneuten Öffnen eines Popups auszublenden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("beforetoggle", (event) => {});

onbeforetoggle = (event) => {};
```

## Ereignistyp

Ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ToggleEvent")}}

## Beispiele

Die untenstehenden Beispiele zeigen, wie das `beforetoggle` Ereignis für ein [Popover](/de/docs/Web/API/Popover_API) oder ein {{htmlelement("dialog")}}-Element verwendet werden könnte.
Die gleichen Beispiele würden ähnlich auf den anderen Elementtypen funktionieren.

### Einfaches Beispiel

Dieses Beispiel zeigt, wie auf das `beforetoggle` Ereignis gehört und das Ergebnis protokolliert wird.

#### HTML

Das HTML besteht aus einem Popover und einer Schaltfläche zum Umschalten.

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

Der Code fügt einen Ereignislistener für das `beforetoggle` Ereignis hinzu und protokolliert den Zustand.

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

### Verhindern des Öffnens eines Popovers

Das `beforetoggle` Ereignis ist stornierbar, wenn es beim Öffnen eines Elements ausgelöst wird.

Unten zeigen wir, wie ein Popover möglicherweise zuerst überprüft, ob es geöffnet werden darf, und wenn nicht, [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um das Ereignis abzubrechen.
In diesem Beispiel verwenden wir eine Schaltfläche, um festzulegen, ob das Popover geöffnet werden kann oder nicht: In einem "voll funktionsfähigen" Beispiel könnte dies vom Anwendungszustand oder den Daten im Popover abhängen, die bereit sind, angezeigt zu werden.

#### HTML

Das HTML besteht aus einem Popover, einer Schaltfläche zum Umschalten und einer Schaltfläche zum Festlegen, ob die Schaltfläche geöffnet werden kann.

```html
<button popovertarget="mypopover">Toggle the popover</button>
<button id="allow_button"></button>
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

Zuerst richten wir den Code ein, um einen Zustand zu simulieren, in dem wir nicht möchten, dass das Popover geöffnet wird.
Dies wird durch die Variable `allowOpen` dargestellt, die umgeschaltet wird, wenn die zugehörige Schaltfläche geklickt wird.

```js
const allowButton = document.getElementById("allow_button");

let allowOpen = true;

function toggleState() {
  allowOpen = !allowOpen;
  allowButton.innerText = allowOpen ? "Open Allowed" : "Open Prevented";
}

toggleState();

allowButton.addEventListener("click", (event) => {
  toggleState();
});
```

Der Code fügt einen Ereignislistener für das `beforetoggle` Ereignis hinzu.
Wenn `allowOpen` false ist, wird `preventDefault()` aufgerufen, was das Öffnen des Popups verhindert.

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

### Eine Anmerkung zur Zusammenführung von beforetoggle Ereignissen

Wenn mehrere `beforetoggle` Ereignisse ausgelöst werden, bevor die Ereignisschleife eine Chance hat, ausgeführt zu werden, wird nur ein einzelnes Ereignis ausgelöst.
Dies wird als "Ereignis-Zusammenführung" bezeichnet.

Zum Beispiel:

```js
popover.addEventListener("beforetoggle", () => {
  // …
});

popover.showPopover();
popover.hidePopover();
// `beforetoggle` only fires once
```

### Andere Beispiele

- [Öffnen eines modalen Dialogs](/de/docs/Web/API/HTMLDialogElement#opening_a_modal_dialog) Beispiel in `HTMLDialogElement`

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) HTML-Globalattribut
- [Popover API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
