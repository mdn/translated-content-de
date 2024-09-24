---
title: "Notification: show-Ereignis"
short-title: show
slug: Web/API/Notification/show_event
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Das **`show`**-Ereignis der {{domxref("Notification")}}-Schnittstelle wird ausgelöst, wenn eine {{domxref("Notification")}} angezeigt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("show", (event) => {});

onshow = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications-API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
