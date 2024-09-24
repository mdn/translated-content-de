---
title: "Benachrichtigung: Klick-Ereignis"
short-title: Klick
slug: Web/API/Notification/click_event
l10n:
  sourceCommit: 94ef07a7b073c2663cbace0667bdb717a40bfa28
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Das **`click`**-Ereignis der {{domxref("Notification")}}-Schnittstelle wird ausgelöst, wenn der Benutzer auf eine angezeigte {{domxref("Notification")}} klickt.

Das Standardverhalten besteht darin, den Fokus auf den Viewport des mit der Benachrichtigung verbundenen [Browsing-Kontextes](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) zu verschieben. Wenn Sie dieses Verhalten nicht wünschen, rufen Sie {{domxref("Event/preventDefault", "preventDefault()")}} am Ereignisobjekt auf.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("click", (event) => {});

onclick = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Im folgenden Beispiel verwenden wir einen onclick-Handler, um eine Webseite in einem neuen Tab zu öffnen (angegeben durch die Einbeziehung des `'_blank'`-Parameters), sobald auf eine Benachrichtigung geklickt wird:

```js
notification.onclick = (event) => {
  event.preventDefault(); // Verhindert, dass der Browser den Fokus auf den Tab der Benachrichtigung legt
  window.open("https://www.mozilla.org", "_blank");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
