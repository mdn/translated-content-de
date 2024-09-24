---
title: "Benachrichtigung: Fehlerereignis"
short-title: Fehler
slug: Web/API/Notification/error_event
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Das **`error`**-Ereignis der {{domxref("Notification")}}-Schnittstelle wird ausgelöst, wenn bei einer {{domxref("Notification")}} etwas schiefgeht (in vielen Fällen ein Fehler, der verhindert, dass die Benachrichtigung angezeigt wird).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
