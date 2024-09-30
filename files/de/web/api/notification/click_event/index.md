---
title: "Notification: click Event"
short-title: click
slug: Web/API/Notification/click_event
l10n:
  sourceCommit: 94ef07a7b073c2663cbace0667bdb717a40bfa28
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Das **`click`** Event des [`Notification`](/de/docs/Web/API/Notification)-Interfaces wird ausgelöst, wenn der Benutzer auf eine angezeigte [`Notification`](/de/docs/Web/API/Notification) klickt.

Das Standardverhalten besteht darin, den Fokus auf den Viewport des mit der Benachrichtigung verbundenen [Browsing-Kontextes](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) zu verschieben. Wenn Sie dieses Verhalten nicht wünschen, rufen Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Event-Objekt auf.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("click", (event) => {});

onclick = (event) => {};
```

## Eventtyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Im folgenden Beispiel verwenden wir einen `onclick`-Handler, um eine Webseite in einem neuen Tab zu öffnen (angegeben durch die Einbeziehung des `'_blank'` Parameters), sobald eine Benachrichtigung angeklickt wird:

```js
notification.onclick = (event) => {
  event.preventDefault(); // prevent the browser from focusing the Notification's tab
  window.open("https://www.mozilla.org", "_blank");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
