---
title: "HTMLElement: beforetoggle-Ereignis"
slug: Web/API/HTMLElement/beforetoggle_event
l10n:
  sourceCommit: a7444882eb1b18918f3c924d83eb3c78f245643a
---

{{APIRef("HTML DOM")}}

Das **`beforetoggle`**-Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle wird bei einem [Popover](/de/docs/Web/API/Popover_API)- oder {{htmlelement("dialog")}}-Element unmittelbar bevor es angezeigt oder ausgeblendet wird, ausgelöst.

- Wenn das Element von versteckt zu sichtbar wechselt, wird die Eigenschaft [`event.oldState`](/de/docs/Web/API/ToggleEvent/oldState) auf `closed` gesetzt und die Eigenschaft [`event.newState`](/de/docs/Web/API/ToggleEvent/newState) auf `open`.
- Wenn das Element von sichtbar zu versteckt wechselt, wird `event.oldState` `open` sein und `event.newState` `closed`.

Dieses Ereignis ist [abbrechbar](/de/docs/Web/API/Event/cancelable), wenn ein Element auf „offen“ („show“) umgeschaltet wird, jedoch nicht, wenn das Element geschlossen wird.

Dieses Ereignis kann unter anderem dazu genutzt werden, um:

- zu verhindern, dass ein Element angezeigt wird.
- Klassen oder Eigenschaften vom Element oder assoziierten Elementen hinzuzufügen oder zu entfernen, beispielsweise um das Animationsverhalten eines Dialogs während des Öffnens und Schließens zu steuern.
- den Zustand eines Elements zu bereinigen, bevor es geöffnet oder nachdem es verborgen wurde, z. B. um ein Formular in einem Dialog zurückzusetzen und in einen leeren Zustand zu versetzen, oder um beim erneuten Öffnen eines Popups verschachtelte manuelle Popovers auszublenden.

## Syntax

Nutzen Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("beforetoggle", (event) => {});

onbeforetoggle = (event) => {};
```

## Ereignistyp

Ein [`ToggleEvent`](/de/docs/Web/API/ToggleEvent), das von [`Event`](/de/docs/Web/API/Event) erbt.

{{InheritanceDiagram("ToggleEvent")}}

## Beispiele

Die Beispiele unten demonstrieren, wie das `beforetoggle`-Ereignis bei einem [Popover](/de/docs/Web/API/Popover_API)- oder {{htmlelement("dialog")}}-Element verwendet werden könnte. Die gleichen Beispiele würden auf anderen Elementtypen ähnlich funktionieren.

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

Der Code fügt einen Event Listener für das `beforetoggle`-Ereignis hinzu und protokolliert den Zustand.

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

Im Folgenden zeigen wir, wie ein Popover überprüft, ob es geöffnet werden darf, und falls nicht, [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um das Ereignis abzubrechen. In diesem Beispiel verwenden wir einen Button, um festzulegen, ob das Popover geöffnet werden kann oder nicht. In einem „vollständigeren“ Beispiel könnte dies von der Anwendungszustand abhängen oder davon, ob die Daten im Popover bereit sind, angezeigt zu werden.

#### HTML

Das HTML besteht aus einem Popover, einem Button, um es zu öffnen und zu schließen, und einem Button, um festzulegen, ob das Popover geöffnet werden kann.

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

Zunächst richten wir den Code ein, um einen Zustand zu simulieren, in dem das Öffnen des Popovers nicht erlaubt ist. Dies wird durch die Variable `allowOpen` dargestellt, die umgeschaltet wird, wenn der zugehörige Button geklickt wird.

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

Der Code fügt einen Event Listener für das `beforetoggle`-Ereignis hinzu. Wenn `allowOpen` auf false gesetzt ist, wird `preventDefault()` aufgerufen, was das Öffnen des Popovers verhindert.

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

### Hinweis zur Koaleszenz von beforetoggle-Ereignissen

Wenn mehrere `beforetoggle`-Ereignisse ausgelöst werden, bevor die Ereignisschleife eine Chance hat, sich zu erneuern, wird nur ein einzelnes Ereignis ausgelöst. Dies wird als „Ereignis-Koaleszenz“ bezeichnet.

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

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML-Globalattribut
- [Popover-API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
