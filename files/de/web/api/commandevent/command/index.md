---
title: "CommandEvent: command-Eigenschaft"
short-title: command
slug: Web/API/CommandEvent/command
l10n:
  sourceCommit: af550427ce6ddc8b22dae1f6c8a109ed4a5fbd91
---

{{APIRef("Invoker Commands API")}}

Die schreibgeschützte **`command`**-Eigenschaft des [`CommandEvent`](/de/docs/Web/API/CommandEvent) Interfaces gibt einen String zurück, der den Wert der [`command`](/de/docs/Web/API/HTMLButtonElement/command)-Eigenschaft zu dem Zeitpunkt enthält, an dem das Ereignis ausgelöst wurde.

## Wert

Ein String.

## Beispiele

Im folgenden einfachen Beispiel haben wir einen Ereignis-Listener eingerichtet, der auf den "show-modal"-Befehl hört:

```js
document.body.addEventListener(
  "command",
  (event) => {
    const theAction = event.command;

    if (theAction == "show-modal") {
      console.log("Showing modal dialog");
    }
  },
  { capture: true },
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Invoker Commands API](/de/docs/Web/API/Invoker_Commands_API)
- [`HTMLButtonElement.command`](/de/docs/Web/API/HTMLButtonElement/command)
- [`HTMLButtonElement.commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)
