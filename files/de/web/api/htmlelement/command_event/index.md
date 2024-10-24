---
title: "HTMLElement: command-Ereignis"
slug: Web/API/HTMLElement/command_event
l10n:
  sourceCommit: 3556f7aca5478c222368dba8a7bd6a007898b36a
---

{{APIRef("Invoker Commands API")}}{{SeeCompatTable}}

Das **`command`**-Ereignis der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle wird auf einem Element ausgelöst, das über einen [`button`](/de/docs/Web/API/HTMLButtonElement) mit gültigen Werten für [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) und [`command`](/de/docs/Web/API/HTMLButtonElement/command) gesteuert wird, wann immer der Button interagiert wird (z.B. wenn er geklickt wird).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js
addEventListener("command", (event) => {});

oncommand = (event) => {};
```

## Ereignistyp

Ein [`CommandEvent`](/de/docs/Web/API/CommandEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("CommandEvent")}}

## Beispiele

### Einfaches Beispiel

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("command", (event) => {
  if (event.action === "show-popover") {
    console.log("Popover is about to be shown");
  }
});
```

### Ereignisverteilung und Abbruch

Es ist erwähnenswert, dass `command`-Ereignisse auf dem Element ausgelöst werden, das aufgerufen wird. Wenn der Button geklickt wird, wird zuerst ein `click`-Ereignis ausgelöst, das, wenn es abgebrochen wird, dann das `command`-Ereignis nicht ausgelöst wird und das Standardverhalten nicht ausgeführt wird. Zusätzlich zur Stornierung des `click`-Ereignisses auf dem Button ist es auch möglich, das `command`-Ereignis abzubrechen.

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
