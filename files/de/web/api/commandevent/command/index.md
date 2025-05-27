---
title: "CommandEvent: command-Eigenschaft"
short-title: command
slug: Web/API/CommandEvent/command
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("Invoker Commands API")}}

Die schreibgeschützte **`command`**-Eigenschaft des [`CommandEvent`](/de/docs/Web/API/CommandEvent)-Interfaces gibt einen String zurück, der den Wert der [`command`](/de/docs/Web/API/HTMLButtonElement/command)-Eigenschaft zum Zeitpunkt der Auslösung des Ereignisses enthält.

## Wert

Ein String.

## Beispiele

Im folgenden einfachen Beispiel haben wir einen Ereignis-Listener eingerichtet, um auf den "show-modal"-Befehl zu hören:

```js
document.body.addEventListener(
  "command",
  (event) => {
    const theAction = event.command;

    if (theAction === "show-modal") {
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
