---
title: "CommandEvent: source-Eigenschaft"
short-title: source
slug: Web/API/CommandEvent/source
l10n:
  sourceCommit: af550427ce6ddc8b22dae1f6c8a109ed4a5fbd91
---

{{APIRef("Invoker Commands API")}}

Die **`source`**-Schreibgeschützte Eigenschaft des [`CommandEvent`](/de/docs/Web/API/CommandEvent)-Interfaces gibt ein [`EventTarget`](/de/docs/Web/API/EventTarget) zurück, das das Steuerelement darstellt, das den gegebenen Befehl aufgerufen hat.

## Wert

Ein [`EventTarget`](/de/docs/Web/API/EventTarget)-Objekt. In der Regel ein [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement).

## Beispiele

Im folgenden einfachen Beispiel haben wir einen Ereignislistener eingerichtet, um eine temporäre Klasse zum Button-Element hinzuzufügen, wenn ein CommandEvent ausgelöst wird:

```js
document.body.addEventListener(
  "command",
  (event) => {
    const theButton = event.source;

    theButton.classList.add("just-pressed");

    setTimeout(() => {
      theButton.classList.remove("just-pressed");
    }, 1000);
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
