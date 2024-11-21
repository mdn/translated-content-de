---
title: "HTMLElement: beforetoggle Event"
slug: Web/API/HTMLElement/beforetoggle_event
l10n:
  sourceCommit: 5d6b290e20c400b676b8b84434cc3d1ceab74ae1
---

{{APIRef("HTML DOM")}}

Das **`beforetoggle`** Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle tritt bei einem [Popover](/de/docs/Web/API/Popover_API) oder einem {{htmlelement("dialog")}}-Element auf, unmittelbar bevor es angezeigt oder ausgeblendet wird.

- Wenn das Element von verborgen zu sichtbar wechselt, wird die Eigenschaft [`event.oldState`](/de/docs/Web/API/ToggleEvent/oldState) auf `closed` und die Eigenschaft [`event.newState`](/de/docs/Web/API/ToggleEvent/newState) auf `open` gesetzt.
- Wenn das Element von sichtbar zu verborgen wechselt, dann ist `event.oldState` `open` und `event.newState` `closed`.

Dieses Ereignis ist [abbrechbar](/de/docs/Web/API/Event/cancelable), wenn ein Element geöffnet ("show") wird, jedoch nicht, wenn das Element geschlossen wird.

Dieses Ereignis kann unter anderem verwendet werden, um:

- zu verhindern, dass ein Element angezeigt wird.
- Klassen oder Eigenschaften von dem Element oder assoziierten Elementen hinzuzufügen oder zu entfernen, um beispielsweise das Animationsverhalten eines Dialogs beim Öffnen und Schließen zu steuern.
- den Zustand des Elements zu löschen, bevor es geöffnet wird oder nachdem es ausgeblendet wurde, um zum Beispiel ein Dialogformular zurückzusetzen und den Rückgabewert auf einen leeren Zustand zu setzen oder verschachtelte manuelle Popovers beim erneuten Öffnen eines Popups auszublenden.

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

Die nachstehenden Beispiele zeigen, wie das `beforetoggle`-Ereignis für ein [Popover](/de/docs/Web/API/Popover_API) oder ein {{htmlelement("dialog")}}-Element verwendet werden könnte. Dieselben Beispiele würden ähnlich auf anderen Elementtypen funktionieren.

### Einfaches Beispiel

Dieses Beispiel zeigt, wie das `beforetoggle`-Ereignis abgehört und das Ergebnis protokolliert wird.

#### HTML

Das HTML besteht aus einem Popover und einem Button zum Umschalten zwischen geöffnet und geschlossen.

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

Der Code fügt einen Ereignis-Listener für das `beforetoggle`-Ereignis hinzu und protokolliert den Zustand.

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

### Öffnen eines Popovers verhindern

Das `beforetoggle`-Ereignis ist abbrechbar, wenn es beim Öffnen eines Elements ausgelöst wird.

Unten zeigen wir, wie ein Popover zuerst prüfen könnte, ob es sich öffnen darf, und falls nicht, `Event.preventDefault()` aufrufen, um das Ereignis abzubrechen. In diesem Beispiel verwenden wir einen Button, um festzulegen, ob der Popover geöffnet werden kann oder nicht: In einem umfassenderen Beispiel könnte dies vom Anwendungszustand oder den anzuzeigenden Daten im Popover abhängen.

#### HTML

Das HTML besteht aus einem Popover, einem Button zum Umschalten zwischen geöffnet und geschlossen, und einem Button zum Festlegen, ob der Button geöffnet werden kann.

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

Zunächst richten wir den Code ein, um einen Zustand zu simulieren, in dem wir nicht möchten, dass sich der Popover öffnet. Dies wird durch die Variable `allowOpen` dargestellt, die beim Klicken auf den zugehörigen Button umgeschaltet wird.

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

Der Code fügt einen Ereignis-Listener für das `beforetoggle`-Ereignis hinzu. Wenn `allowOpen` falsch ist, wird `preventDefault()` aufgerufen, wodurch das Öffnen des Popups verhindert wird.

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

### Eine Anmerkung zur Coalescence von beforetoggle-Ereignissen

Wenn mehrere `beforetoggle`-Ereignisse ausgelöst werden, bevor die Ereignisschleife die Chance hat zu durchlaufen, wird nur ein einziges Ereignis ausgelöst. Dies wird als "Ereignis-Koaleszenz" bezeichnet.

Zum Beispiel:

```js
popover.addEventListener("beforetoggle", () => {
  //...
});

popover.showPopover();
popover.hidePopover();
// `beforetoggle` only fires once
```

### Weitere Beispiele

- [Öffnen eines modalen Dialogs](/de/docs/Web/API/HTMLDialogElement#opening_a_modal_dialog) Beispiel in `HTMLDialogElement`

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML-globales Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
