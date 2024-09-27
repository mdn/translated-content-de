---
title: "Notification: click Ereignis"
short-title: click
slug: Web/API/Notification/click_event
l10n:
  sourceCommit: 94ef07a7b073c2663cbace0667bdb717a40bfa28
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Das **`click`**-Ereignis der [`Notification`](/de/docs/Web/API/Notification)-Schnittstelle tritt auf, wenn der Benutzer auf die angezeigte [`Notification`](/de/docs/Web/API/Notification) klickt.

Das Standardverhalten ist, den Fokus auf den Viewport des mit der Benachrichtigung verknüpften [Browsing-Kontexts](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) zu verschieben. Wenn Sie dieses Verhalten nicht wünschen, rufen Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) am Ereignisobjekt auf.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("click", (event) => {});

onclick = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Im folgenden Beispiel verwenden wir einen `onclick`-Handler, um beim Anklicken einer Benachrichtigung eine Webseite in einem neuen Tab zu öffnen (angegeben durch die Einbindung des `'_blank'` Parameters):

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
