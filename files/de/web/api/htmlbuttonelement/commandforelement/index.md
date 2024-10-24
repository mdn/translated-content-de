---
title: "HTMLButtonElement: commandForElement-Eigenschaft"
short-title: commandForElement
slug: Web/API/HTMLButtonElement/commandForElement
l10n:
  sourceCommit: 3556f7aca5478c222368dba8a7bd6a007898b36a
---

{{APIRef("Invoker Commands API")}}{{SeeCompatTable}}

Die **`commandForElement`**-Eigenschaft der [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Schnittstelle ruft das Element ab und setzt es, das über einen Button gesteuert wird.

Es ist das JavaScript-Äquivalent des [`commandfor`](/de/docs/Web/HTML/Element/button#commandfor)-HTML-Attributs.

## Wert

Ein Verweis auf ein vorhandenes [`Element`](/de/docs/Web/API/Element), das der Button steuert.

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
