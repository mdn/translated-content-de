---
title: "CommandEvent: command-Eigenschaft"
short-title: command
slug: Web/API/CommandEvent/command
l10n:
  sourceCommit: 3556f7aca5478c222368dba8a7bd6a007898b36a
---

{{APIRef("Invoker Commands API")}}{{SeeCompatTable}}

Die schreibgeschützte **`command`**-Eigenschaft des [`CommandEvent`](/de/docs/Web/API/CommandEvent)-Interfaces gibt einen String zurück, der den Wert der [`command`](/de/docs/Web/API/HTMLButtonElement/command)-Eigenschaft zum Zeitpunkt der Ereignisauslösung enthält.

## Wert

Ein String.

## Beispiele

Im folgenden einfachen Beispiel haben wir einen Ereignislistener eingerichtet, der auf das "show-modal"-Kommando hört:

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
