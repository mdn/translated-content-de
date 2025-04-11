---
title: "HTMLButtonElement: commandForElement-Eigenschaft"
short-title: commandForElement
slug: Web/API/HTMLButtonElement/commandForElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Invoker Commands API")}}{{SeeCompatTable}}

Die **`commandForElement`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces ruft das zu steuernde Element über eine Schaltfläche ab und setzt dieses.

Es ist das JavaScript-Äquivalent des [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor)-HTML-Attributes.

## Wert

Ein Verweis auf ein existierendes [`Element`](/de/docs/Web/API/Element), das durch die Schaltfläche kontrolliert wird.

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
