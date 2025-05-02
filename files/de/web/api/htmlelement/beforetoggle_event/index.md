---
title: "HTMLElement: beforetoggle Ereignis"
slug: Web/API/HTMLElement/beforetoggle_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTML DOM")}}

Das **`beforetoggle`** Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle wird bei einem [Popover](/de/docs/Web/API/Popover_API) oder einem {{htmlelement("dialog")}} Element unmittelbar bevor es angezeigt oder versteckt wird, ausgelöst.

- Wenn das Element von versteckt zu sichtbar wechselt, wird die Eigenschaft [`event.oldState`](/de/docs/Web/API/ToggleEvent/oldState) auf `closed` gesetzt und die Eigenschaft [`event.newState`](/de/docs/Web/API/ToggleEvent/newState) auf `open`.
- Wenn das Element von sichtbar zu versteckt wechselt, wird `event.oldState` auf `open` und `event.newState` auf `closed` gesetzt.

Dieses Ereignis ist [cancelable](/de/docs/Web/API/Event/cancelable), wenn ein Element geöffnet ("angezeigt") wird, aber nicht, wenn das Element geschlossen wird.

Unter anderem kann dieses Ereignis verwendet werden, um:

- zu verhindern, dass ein Element angezeigt wird.
- Klassen oder Eigenschaften von dem Element oder assoziierten Elementen hinzuzufügen oder zu entfernen, zum Beispiel um das Animationsverhalten eines Dialogs beim Öffnen und Schließen zu steuern.
- den Zustand des Elements zu löschen, bevor es geöffnet oder nachdem es versteckt wird, zum Beispiel um ein Dialogformular und den Rückgabewert auf einen leeren Zustand zurückzusetzen oder alle verschachtelten manuellen Popover beim erneuten Öffnen eines Popups zu verbergen.

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

Die folgenden Beispiele zeigen, wie das `beforetoggle` Ereignis für ein [Popover](/de/docs/Web/API/Popover_API) oder ein {{htmlelement("dialog")}} Element verwendet werden könnte.
Die gleichen Beispiele würden ähnlich auf andere Elementtypen wirken.

### Einfaches Beispiel

Dieses Beispiel zeigt, wie man auf das `beforetoggle` Ereignis hört und das Ergebnis protokolliert.

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

{{EmbedLiveSample("Basic example", '100%', "250px")}}

### Verhindern, dass ein Popover öffnet

Das `beforetoggle` Ereignis ist abbrechbar, wenn es ausgelöst wird, um ein Element zu öffnen.

Unten zeigen wir, wie ein Popover zuerst überprüft, ob es sich öffnen darf, und wenn nicht, [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um das Ereignis abzubrechen.
In diesem Beispiel verwenden wir einen Button, um zu setzen, ob das Popover geöffnet werden darf oder nicht: In einem "ausgereifteren" Beispiel könnte dies vom Anwendungszustand abhängen oder davon, ob die Daten im Popover bereit zur Anzeige sind.

#### HTML

Das HTML besteht aus einem Popover, einem Button zum Öffnen und Schließen und einem Button, um festzulegen, ob der Button geöffnet werden kann.

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

Zuerst richten wir den Code so ein, dass er einen Zustand simuliert, in dem wir nicht möchten, dass sich das Popover öffnet.
Dies wird durch die Variable `allowOpen` dargestellt, die umgeschaltet wird, wenn der zugehörige Button geklickt wird.

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

Der Code fügt einen Ereignis-Listener für das `beforetoggle` Ereignis hinzu.
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

### Eine Anmerkung zum beforetoggle Ereignis-Koaleszenz

Wenn mehrere `beforetoggle` Ereignisse ausgelöst werden, bevor die Ereignisschleife eine Chance hat, sich zu drehen, wird nur ein einziges Ereignis ausgelöst.
Dies wird als "Ereignis-Koaleszenz" bezeichnet.

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

- [Öffnen eines modalen Dialogs](/de/docs/Web/API/HTMLDialogElement#opening_a_modal_dialog) Beispiel in `HTMLDialogElement`

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) HTML globales Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
