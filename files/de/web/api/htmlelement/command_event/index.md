---
title: "HTMLElement: command-Ereignis"
slug: Web/API/HTMLElement/command_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("Invoker Commands API")}}

Das **`command`**-Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle wird auf einem Element ausgelöst, das über einen [`button`](/de/docs/Web/API/HTMLButtonElement) mit gültigen Werten für [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) und [`command`](/de/docs/Web/API/HTMLButtonElement/command) gesteuert wird, sobald mit dem Button interagiert wird (z. B. durch einen Klick).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("command", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
oncommand = (event) => { }
```

## Ereignistyp

Ein [`CommandEvent`](/de/docs/Web/API/CommandEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("CommandEvent")}}

## Beispiele

### Einfaches Beispiel

```js
const popover = document.getElementById("mypopover");

// …

popover.addEventListener("command", (event) => {
  if (event.command === "show-popover") {
    console.log("Popover is about to be shown");
  }
});
```

### Auslösen und Abbrechen von Ereignissen

Beachten Sie, dass `command`-Ereignisse auf dem aufgerufenen Element ausgelöst werden. Wenn der Button angeklickt wird, löst er zunächst ein `click`-Ereignis aus. Wird dieses abgebrochen, wird das `command`-Ereignis nicht ausgelöst und das Standardverhalten nicht ausgeführt.
Neben dem `click`-Ereignis auf dem Button kann auch das `command`-Ereignis abgebrochen werden.

Zum Beispiel:

```js
button.addEventListener("click", (event) => {
  event.preventDefault(); // the `command` event will never fire
});
```

```js
element.addEventListener("command", (event) => {
  event.preventDefault(); // the `command` event fires but the default behavior is canceled
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Invoker Commands API](/de/docs/Web/API/Invoker_Commands_API)
- [`HTMLButtonElement.command`](/de/docs/Web/API/HTMLButtonElement/command)
- [`HTMLButtonElement.commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)
