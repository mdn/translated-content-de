---
title: "CommandEvent: source-Eigenschaft"
short-title: source
slug: Web/API/CommandEvent/source
l10n:
  sourceCommit: 3556f7aca5478c222368dba8a7bd6a007898b36a
---

{{APIRef("Invoker Commands API")}}{{SeeCompatTable}}

Die schreibgeschützte **`source`**-Eigenschaft des [`CommandEvent`](/de/docs/Web/API/CommandEvent)-Interfaces gibt ein [`EventTarget`](/de/docs/Web/API/EventTarget) zurück, das das Steuerelement darstellt, das den gegebenen Befehl ausgelöst hat.

## Wert

Ein [`EventTarget`](/de/docs/Web/API/EventTarget)-Objekt. In der Regel ein [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement).

## Beispiele

Im folgenden einfachen Beispiel haben wir einen Event-Listener eingerichtet, um dem Button-Element bei einem CommandEvent eine temporäre Klasse hinzuzufügen:

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
