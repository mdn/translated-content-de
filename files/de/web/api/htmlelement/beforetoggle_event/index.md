---
title: "HTMLElement: beforetoggle-Ereignis"
slug: Web/API/HTMLElement/beforetoggle_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("HTML DOM")}}

Das **`beforetoggle`**-Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle wird bei einem [Popover](/de/docs/Web/API/Popover_API)- oder {{htmlelement("dialog")}}-Element ausgelöst, unmittelbar bevor es angezeigt oder ausgeblendet wird.

- Wenn das Element vom ausgeblendeten in den angezeigten Zustand wechselt, wird die Eigenschaft [`event.oldState`](/de/docs/Web/API/ToggleEvent/oldState) auf `closed` und die Eigenschaft [`event.newState`](/de/docs/Web/API/ToggleEvent/newState) auf `open` gesetzt.
- Wenn das Element vom angezeigten in den ausgeblendeten Zustand wechselt, ist `event.oldState` gleich `open` und `event.newState` gleich `closed`.

Dieses Ereignis kann [abgebrochen](/de/docs/Web/API/Event/cancelable) werden, wenn ein Element geöffnet („angezeigt“) wird, nicht jedoch, wenn es geschlossen wird.

Sie können dieses Ereignis unter anderem verwenden, um:

- zu verhindern, dass ein Element angezeigt wird.
- Klassen oder Eigenschaften des Elements oder zugehöriger Elemente hinzuzufügen oder zu entfernen, beispielsweise um die Animation beim Öffnen und Schließen eines Dialogs zu steuern.
- den Zustand des Elements vor dem Öffnen oder nach dem Ausblenden zurückzusetzen, beispielsweise um ein Dialogformular und dessen Rückgabewert zurückzusetzen oder beim erneuten Öffnen eines Popups darin verschachtelte manuelle Popover auszublenden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("beforetoggle", (event) => { })
```

Alternativ können Sie ihn der [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onbeforetoggle = (event) => { }
```

## Ereignistyp

Ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ToggleEvent")}}

## Beispiele

Die folgenden Beispiele zeigen, wie das `beforetoggle`-Ereignis für ein [Popover](/de/docs/Web/API/Popover_API)-Element verwendet werden kann.
Dieselben Beispiele funktionieren in ähnlicher Weise mit einem {{htmlelement("dialog")}}-Element.

### Einfaches Beispiel

Dieses Beispiel zeigt, wie Sie auf das `beforetoggle`-Ereignis reagieren und das Ergebnis protokollieren können.

#### HTML

Das HTML besteht aus einem Popover und einer Schaltfläche, mit der es geöffnet und geschlossen werden kann.

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

Das `beforetoggle`-Ereignis kann abgebrochen werden, wenn es beim Öffnen eines Elements ausgelöst wird.

Im Folgenden zeigen wir, wie ein Popover zunächst prüfen kann, ob es geöffnet werden darf, und andernfalls mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) das Ereignis abbricht.
In diesem Beispiel legen wir über ein Kontrollkästchen fest, ob das Popover geöffnet werden darf. In einem umfangreicheren Beispiel könnte dies vom Zustand der Anwendung abhängen oder davon, ob die Daten im Popover zur Anzeige bereit sind.

#### HTML

Das HTML besteht aus einem Popover, einer Schaltfläche zum Öffnen und Schließen sowie einem Kontrollkästchen, mit dem festgelegt wird, ob das Popover geöffnet werden darf.

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

Zunächst richten wir den Code so ein, dass er einen Zustand simuliert, in dem das Öffnen des Popovers erlaubt ist.
Diesen Zustand stellt die Variable `allowOpen` dar, deren Wert sich ändert, wenn das zugehörige Kontrollkästchen aktiviert oder deaktiviert wird.

```js
const allowCheckbox = document.getElementById("allow-popover");

let allowOpen = true;

allowCheckbox.addEventListener("change", (event) => {
  allowOpen = allowCheckbox.checked;
});
```

Der Code fügt einen Ereignis-Listener für das `beforetoggle`-Ereignis hinzu.
Wenn `allowOpen` false ist, wird `preventDefault()` aufgerufen. Dadurch wird verhindert, dass sich das Popover öffnet.

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

- Beispiel zum [Öffnen eines modalen Dialogs](/de/docs/Web/API/HTMLDialogElement#open_close_a_modal_dialog) in `HTMLDialogElement`

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das globale HTML-Attribut [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)
- [Popover API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
