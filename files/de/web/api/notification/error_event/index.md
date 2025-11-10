---
title: "Notification: error event"
short-title: error
slug: Web/API/Notification/error_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Das **`error`**-Ereignis des [`Notification`](/de/docs/Web/API/Notification)-Interfaces wird ausgelöst, wenn etwas mit einer [`Notification`](/de/docs/Web/API/Notification) schiefgeht (in vielen Fällen ein Fehler, der verhindert, dass die Benachrichtigung angezeigt wird).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
