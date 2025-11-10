---
title: "Benachrichtigung: show Ereignis"
short-title: show
slug: Web/API/Notification/show_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Das **`show`** Ereignis des [`Notification`](/de/docs/Web/API/Notification)-Interfaces wird ausgelöst, wenn eine [`Notification`](/de/docs/Web/API/Notification) angezeigt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("show", (event) => { })

onshow = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
