---
title: "HTMLElement: beforetoggle Ereignis"
slug: Web/API/HTMLElement/beforetoggle_event
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

Das **`beforetoggle`** Ereignis des [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interfaces wird bei einem [popover](/de/docs/Web/API/Popover_API) oder {{htmlelement("dialog")}} Element unmittelbar bevor es angezeigt oder verborgen wird, ausgelöst.

- Wenn das Element vom verborgenen zum sichtbaren Zustand wechselt, wird die Eigenschaft [`event.oldState`](/de/docs/Web/API/ToggleEvent/oldState) auf `closed` gesetzt und die Eigenschaft [`event.newState`](/de/docs/Web/API/ToggleEvent/newState) auf `open`.
- Wenn das Element vom sichtbaren zum verborgenen Zustand wechselt, wird `event.oldState` `open` und `event.newState` `closed`.

Dieses Ereignis ist [abbrechbar](/de/docs/Web/API/Event/cancelable), wenn ein Element geöffnet ("angezeigt") wird, aber nicht, wenn das Element geschlossen wird.

Dieses Ereignis kann unter anderem verwendet werden, um:

- zu verhindern, dass ein Element angezeigt wird.
- Klassen oder Eigenschaften von dem Element oder anstehenden Elementen hinzuzufügen oder zu entfernen, um beispielsweise das Animationsverhalten eines Dialogs beim Öffnen und Schließen zu steuern.
- den Zustand des Elements zu löschen, bevor es geöffnet oder nachdem es verborgen wurde, zum Beispiel um ein Dialogformular zurückzusetzen und den Rückgabewert in einen leeren Zustand zu versetzen, oder um beim erneuten Öffnen eines Popups alle verschachtelten manuellen Popover zu verbergen.

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

Die folgenden Beispiele zeigen, wie das `beforetoggle` Ereignis für ein [popover](/de/docs/Web/API/Popover_API) oder ein {{htmlelement("dialog")}} Element verwendet werden könnte.
Die gleichen Beispiele würden auf anderen Elementtypen ähnlich funktionieren.

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

### Öffnen eines Popovers verhindern

Das `beforetoggle` Ereignis ist abbrechbar, wenn es beim Öffnen eines Elements ausgelöst wird.

Unten zeigen wir, wie ein Popover, das möglicherweise zuerst prüft, ob es geöffnet werden darf, und wenn nicht, [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um das Ereignis abzubrechen.
In diesem Beispiel verwenden wir einen Button, um festzulegen, ob das Popover geöffnet werden kann oder nicht: in einem umfassenderen Beispiel könnte dies vom Anwendungszustand abhängen oder davon, ob die Daten im Popover bereit zur Anzeige sind.

#### HTML

Das HTML besteht aus einem Popover, einem Button, um es zu öffnen und zu schließen, und einem Button, um festzulegen, ob der Button geöffnet werden kann.

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

Zuerst richten wir den Code ein, um einen Zustand zu simulieren, in dem wir nicht wollen, dass das Popover geöffnet wird.
Dies wird durch die Variable `allowOpen` dargestellt, die umgeschaltet wird, wenn das zugehörige Kontrollkästchen umgeschaltet wird.

```js
const allowCheckbox = document.getElementById("allow-popover");

let allowOpen = true;

allowCheckbox.addEventListener("change", (event) => {
  allowOpen = allowCheckbox.checked;
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

### Eine Anmerkung zur Koaleszenz von beforetoggle Ereignissen

Wenn mehrere `beforetoggle` Ereignisse ausgelöst werden, bevor die Ereignisschleife einen Zyklus durchgeführt hat, wird nur ein einziges Ereignis ausgelöst.
Dies wird als "Ereigniskoaleszenz" bezeichnet.

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
