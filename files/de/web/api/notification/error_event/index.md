---
title: "Notification: Fehlerereignis"
short-title: error
slug: Web/API/Notification/error_event
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Das **`error`**-Ereignis des [`Notification`](/de/docs/Web/API/Notification)-Interfaces tritt auf, wenn ein Problem mit einer [`Notification`](/de/docs/Web/API/Notification) auftritt (in vielen Fällen ein Fehler, der verhindert, dass die Benachrichtigung angezeigt wird).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
