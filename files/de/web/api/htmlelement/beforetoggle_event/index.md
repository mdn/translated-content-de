---
title: "HTMLElement: beforetoggle-Ereignis"
slug: Web/API/HTMLElement/beforetoggle_event
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Das **`beforetoggle`**-Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle wird bei einem [Popover](/de/docs/Web/API/Popover_API) oder einem {{htmlelement("dialog")}}-Element kurz bevor es angezeigt oder versteckt wird ausgelöst.

- Wenn das Element vom Versteckten zum Sichtbaren wechselt, wird die Eigenschaft [`event.oldState`](/de/docs/Web/API/ToggleEvent/oldState) auf `closed` gesetzt und die Eigenschaft [`event.newState`](/de/docs/Web/API/ToggleEvent/newState) auf `open`.
- Wenn das Element vom Sichtbaren zum Versteckten wechselt, wird `event.oldState` auf `open` und `event.newState` auf `closed` gesetzt.

Dieses Ereignis ist [abbrechbar](/de/docs/Web/API/Event/cancelable), wenn ein Element geöffnet ("show") wird, jedoch nicht, wenn das Element geschlossen wird.

Unter anderem kann dieses Ereignis verwendet werden, um:

- zu verhindern, dass ein Element angezeigt wird.
- Klassen oder Eigenschaften von dem Element oder assoziierten Elementen hinzuzufügen oder zu entfernen, zum Beispiel um das Animationsverhalten eines Dialogs beim Öffnen und Schließen zu steuern.
- den Zustand des Elements zu löschen, bevor es geöffnet oder nachdem es versteckt wurde, zum Beispiel um ein Dialogformular und den Rückgabewert in einen leeren Zustand zurückzusetzen oder um verschachtelte manuelle Popovers beim erneuten Öffnen eines Popups zu verbergen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlereigenschaft.

```js
addEventListener("beforetoggle", (event) => {});

onbeforetoggle = (event) => {};
```

## Ereignistyp

Ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ToggleEvent")}}

## Beispiele

Die untenstehenden Beispiele zeigen, wie das `beforetoggle`-Ereignis bei einem [Popover](/de/docs/Web/API/Popover_API) oder einem {{htmlelement("dialog")}}-Element verwendet werden kann. Die gleichen Beispiele würden ähnlich bei anderen Elementtypen funktionieren.

### Einfaches Beispiel

Dieses Beispiel zeigt, wie Sie auf das `beforetoggle`-Ereignis horchen und das Ergebnis protokollieren können.

#### HTML

Das HTML besteht aus einem Popover und einem Button, um es ein- und auszuschalten.

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

### Verhindern eines Popover-Öffnens

Das `beforetoggle`-Ereignis kann abgebrochen werden, wenn es beim Öffnen eines Elements ausgelöst wird.

Unten zeigen wir, wie ein Popover zuerst prüfen könnte, ob es geöffnet werden darf, und falls nicht, [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um das Ereignis abzubrechen. In diesem Beispiel verwenden wir einen Button, um festzulegen, ob das Popover geöffnet werden kann oder nicht: In einem umfangreicheren Beispiel könnte dies vom Anwendungszustand abhängen oder davon, ob die Daten im Popover bereit zur Anzeige sind.

#### HTML

Das HTML besteht aus einem Popover, einem Button zum Ein- und Ausschalten und einem Button zum Festlegen, ob der Button geöffnet werden kann.

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

Zuerst richten wir den Code ein, um einen Zustand zu simulieren, in dem wir nicht wollen, dass das Popover geöffnet wird. Dies wird durch die Variable `allowOpen` dargestellt, die umgeschaltet wird, wenn der zugehörige Button geklickt wird.

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

Der Code fügt einen Ereignislistener für das `beforetoggle`-Ereignis hinzu. Wenn `allowOpen` falsch ist, wird `preventDefault()` aufgerufen, was verhindert, dass das Popup geöffnet wird.

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

### Eine Anmerkung zur Zusammenführung von beforetoggle-Ereignissen

Wenn mehrere `beforetoggle`-Ereignisse ausgelöst werden, bevor die Ereignisschleife eine Chance hat zu zyklieren, wird nur ein einziges Ereignis ausgelöst. Dies wird als "Zusammenführung von Ereignissen" bezeichnet.

Zum Beispiel:

```js
popover.addEventListener("beforetoggle", () => {
  //...
});

popover.showPopover();
popover.hidePopover();
// `beforetoggle` only fires once
```

### Andere Beispiele

- [Öffnen eines modalen Dialogs](/de/docs/Web/API/HTMLDialogElement#opening_a_modal_dialog) Beispiel im `HTMLDialogElement`

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) HTML globales Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
