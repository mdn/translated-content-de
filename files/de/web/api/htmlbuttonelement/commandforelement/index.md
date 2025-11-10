---
title: "HTMLButtonElement: commandForElement-Eigenschaft"
short-title: commandForElement
slug: Web/API/HTMLButtonElement/commandForElement
l10n:
  sourceCommit: af550427ce6ddc8b22dae1f6c8a109ed4a5fbd91
---

{{APIRef("Invoker Commands API")}}

Die **`commandForElement`**-Eigenschaft der [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Schnittstelle erhält und setzt das Element, das über eine Schaltfläche gesteuert werden soll.

Es ist das JavaScript-Äquivalent des HTML-Attributs [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor).

## Wert

Ein Verweis auf ein vorhandenes [`Element`](/de/docs/Web/API/Element), das durch die Schaltfläche gesteuert wird.

## Beispiele

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.commandForElement = popover;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Invoker Commands API](/de/docs/Web/API/Invoker_Commands_API)
- [`HTMLButtonElement.command`](/de/docs/Web/API/HTMLButtonElement/command)
- [`CommandEvent`](/de/docs/Web/API/CommandEvent)
