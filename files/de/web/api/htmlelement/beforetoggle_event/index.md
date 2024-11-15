---
title: "HTMLElement: beforetoggle Ereignis"
slug: Web/API/HTMLElement/beforetoggle_event
l10n:
  sourceCommit: a62600788f390d326859cfbf6171013a3f351690
---

{{APIRef("HTML DOM")}}

Das **`beforetoggle`**-Ereignis des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces wird bei einem [Popover](/de/docs/Web/API/Popover_API) oder einem {{htmlelement("dialog")}}-Element ausgelöst, kurz bevor es angezeigt oder verborgen wird.

- Wenn das Element von verborgen zu sichtbar wechselt, wird die Eigenschaft [`event.oldState`](/de/docs/Web/API/ToggleEvent/oldState) auf `closed` und die Eigenschaft [`event.newState`](/de/docs/Web/API/ToggleEvent/newState) auf `open` gesetzt.
- Wenn das Element von sichtbar zu verborgen wechselt, ist `event.oldState` `open` und `event.newState` `closed`.

Dieses Ereignis ist [abbrechbar](/de/docs/Web/API/Event/cancelable), wenn ein Element geöffnet ("show") wird, nicht jedoch, wenn das Element geschlossen wird.

Unter anderem kann dieses Ereignis verwendet werden, um:

- zu verhindern, dass ein Element angezeigt wird.
- Klassen oder Eigenschaften vom Element oder assoziierten Elementen hinzuzufügen oder zu entfernen, um beispielsweise das Animationsverhalten eines Dialogs beim Öffnen und Schließen zu steuern.
- den Zustand des Elements zu löschen, bevor es geöffnet oder nachdem es verborgen wurde, um beispielsweise ein Dialogformular zurückzusetzen und den Rückgabewert in einen leeren Zustand zu versetzen oder jegliche geschachtelte manuelle Popovers beim erneuten Öffnen eines Popups zu verbergen.

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

Die folgenden Beispiele zeigen, wie das `beforetoggle`-Ereignis für ein [Popover](/de/docs/Web/API/Popover_API) oder ein {{htmlelement("dialog")}}-Element verwendet werden kann. Dieselben Beispiele würden ähnlich auf anderen Elementtypen funktionieren.

### Einfaches Beispiel

Dieses Beispiel zeigt, wie das `beforetoggle`-Ereignis abgehört und das Ergebnis protokolliert wird.

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

### Verhindern, dass ein Popover geöffnet wird

Das `beforetoggle`-Ereignis kann abgebrochen werden, wenn es beim Öffnen eines Elements ausgelöst wird.

Im Folgenden zeigen wir, wie ein Popover zuerst prüfen könnte, ob es geöffnet werden darf, und falls nicht, [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um das Ereignis abzubrechen. In diesem Beispiel verwenden wir einen Button, um festzulegen, ob das Popover geöffnet werden kann oder nicht: In einem "voll funktionsfähigen" Beispiel könnte dies vom Anwendungszustand abhängen oder davon, ob die Daten im Popover zur Anzeige bereit sind.

#### HTML

Das HTML besteht aus einem Popover, einem Button, um es zu öffnen und zu schließen, und einem Button, um festzulegen, ob es geöffnet werden kann.

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

Zuerst richten wir den Code ein, um einen Zustand zu simulieren, in dem das Öffnen des Popovers nicht erlaubt werden soll. Dies wird durch die Variable `allowOpen` dargestellt, die umgeschaltet wird, wenn der zugehörige Button geklickt wird.

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

Der Code fügt einen Ereignis-Listener für das `beforetoggle`-Ereignis hinzu. Wenn `allowOpen` falsch ist, wird `preventDefault()` aufgerufen, was verhindert, dass das Popup geöffnet wird.

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

### Ein Hinweis zum Ereignis-Coalescing von beforetoggle

Wenn mehrere `beforetoggle`-Ereignisse ausgelöst werden, bevor die Ereignisschleife die Möglichkeit hat, einen Zyklus zu durchlaufen, wird nur ein einziges Ereignis ausgelöst. Dies wird als "Ereignis-Coalescing" bezeichnet.

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

- [Beispiel zum Öffnen eines modalen Dialogs](/de/docs/Web/API/HTMLDialogElement#opening_a_modal_dialog) im `HTMLDialogElement`

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML-Globaleigenschaft
- [Popover-API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
