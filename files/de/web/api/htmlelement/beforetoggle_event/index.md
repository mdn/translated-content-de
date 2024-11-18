---
title: "HTMLElement: beforetoggle-Event"
slug: Web/API/HTMLElement/beforetoggle_event
l10n:
  sourceCommit: 45913d055f02da51493b1b8a5d2c07a86e8d90b7
---

{{APIRef("HTML DOM")}}

Der **`beforetoggle`**-Event des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces wird bei einem [Popover](/de/docs/Web/API/Popover_API) oder dem {{htmlelement("dialog")}}-Element unmittelbar bevor es angezeigt oder versteckt wird, ausgelöst.

- Wenn das Element von unsichtbar zu sichtbar wechselt, wird die Eigenschaft [`event.oldState`](/de/docs/Web/API/ToggleEvent/oldState) auf `closed` gesetzt und die Eigenschaft [`event.newState`](/de/docs/Web/API/ToggleEvent/newState) auf `open`.
- Wenn das Element von sichtbar zu unsichtbar wechselt, wird `event.oldState` auf `open` und `event.newState` auf `closed` gesetzt.

Dieser Event ist [abbruchsfähig](/de/docs/Web/API/Event/cancelable), wenn ein Element geöffnet ("angezeigt") wird, aber nicht beim Schließen des Elements.

Unter anderem kann dieser Event verwendet werden, um:

- das Anzeigen eines Elements zu verhindern.
- Klassen oder Eigenschaften von dem Element oder damit verbundenen Elementen hinzuzufügen oder zu entfernen, z. B. um das Animationsverhalten eines Dialogs beim Öffnen und Schließen zu steuern.
- den Zustand des Elements zu löschen, bevor es geöffnet oder nachdem es versteckt wurde, z. B. um ein Dialogformular und Rückgabewerte in einen leeren Zustand zurückzusetzen oder beim erneuten Öffnen eines Popups verschachtelte manuelle Popovers zu verstecken.

## Syntax

Verwenden Sie den Event-Namen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("beforetoggle", (event) => {});

onbeforetoggle = (event) => {};
```

## Event-Typ

Ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ToggleEvent")}}

## Beispiele

Die folgenden Beispiele zeigen, wie der `beforetoggle`-Event bei einem [Popover](/de/docs/Web/API/Popover_API) oder {{htmlelement("dialog")}}-Element verwendet werden könnte. Die gleichen Beispiele würden bei anderen Elementtypen ähnlich funktionieren.

### Einfaches Beispiel

Dieses Beispiel zeigt, wie man den `beforetoggle`-Event überwacht und das Ergebnis protokolliert.

#### HTML

Das HTML besteht aus einem Popover und einer Schaltfläche zum Umschalten zwischen geöffnet und geschlossen.

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

Der Code fügt einen Event-Listener für den `beforetoggle`-Event hinzu und protokolliert den Zustand.

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

Der `beforetoggle`-Event ist abbruchfähig, wenn er beim Öffnen eines Elements ausgelöst wird.

Im Folgenden zeigen wir, wie ein Popover zunächst überprüft, ob es geöffnet werden darf, und wenn nicht, [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um den Event abzubrechen.
In diesem Beispiel verwenden wir eine Schaltfläche, um festzulegen, ob das Popover geöffnet werden kann oder nicht: In einem "vollständigeren" Beispiel könnte dies vom Anwendungszustand abhängen oder davon, ob die Daten im Popover bereit zur Anzeige sind.

#### HTML

Das HTML besteht aus einem Popover, einer Schaltfläche zum Umschalten zwischen geöffnet und geschlossen und einer Schaltfläche zum Festlegen, ob das Popover geöffnet werden kann.

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

Der Code fügt einen Event-Listener für den `beforetoggle`-Event hinzu.
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

### Eine Anmerkung zur Zusammenlegung von beforetoggle-Events

Wenn mehrere `beforetoggle`-Events ausgelöst werden, bevor die Ereignisschleife die Möglichkeit hat, einen Zyklus abzuschließen, wird nur ein einzelner Event ausgelöst.
Dies wird als "Event-Zusammenlegung" bezeichnet.

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

- [Beispiel zum Öffnen eines modalen Dialogs](/de/docs/Web/API/HTMLDialogElement#opening_a_modal_dialog) in `HTMLDialogElement`

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML-Global-Attribut
- [Popover API](/de/docs/Web/API/Popover_API)
- Verwandter Event: [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
