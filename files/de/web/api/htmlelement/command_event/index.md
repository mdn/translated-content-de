---
title: "HTMLElement: command-Ereignis"
slug: Web/API/HTMLElement/command_event
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Invoker Commands API")}}

Das **`command`**-Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle wird bei einem Element ausgelöst, das über einen [`button`](/de/docs/Web/API/HTMLButtonElement) mit gültigen [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)- und [`command`](/de/docs/Web/API/HTMLButtonElement/command)-Werten gesteuert wird, wann immer mit dem Button interagiert wird (z.B. wenn er geklickt wird).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("command", (event) => { })

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

### Ereignisauslösung und -abbruch

Es ist erwähnenswert, dass `command`-Ereignisse auf dem aufgerufenen Element ausgelöst werden. Wenn der Button geklickt wird, löst er zuerst ein `click`-Ereignis aus, das, wenn es abgebrochen wird, das `command`-Ereignis nicht ausgelöst wird und das Standardverhalten nicht ausgeführt wird. Neben dem Abbrechen des `click`-Ereignisses auf dem Button ist es auch möglich, das `command`-Ereignis abzubrechen.

Zum Beispiel:

```js
button.addEventListener("click", (event) => {
  event.preventDefault(); // the `command` event will never fire
});
```

```js
element.addEventListener("command", (event) => {
  event.preventDefault(); // the `command` event fires but the default behavior is cancelled
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
