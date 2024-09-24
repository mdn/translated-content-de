---
title: ErweitertesCookieÄnderungsEreignis
slug: Web/API/ExtendableCookieChangeEvent
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

Die Schnittstelle **`ExtendableCookieChangeEvent`** der {{domxref("Cookie Store API", "", "", "nocode")}} ist der Ereignistyp, der an das {{domxref("ServiceWorkerGlobalScope/cookiechange_event", "cookiechange")}}-Ereignis übergeben wird, das bei Änderungen von Cookies ausgelöst wird, die mit der Cookie-Änderungs-Abonnementliste des Service Workers übereinstimmen. Ein Cookie-Änderungsereignis besteht aus einem Cookie und einem Typ (entweder "changed" oder "deleted").

Cookie-Änderungen, die dazu führen, dass das `ExtendableCookieChangeEvent` ausgelöst wird, sind:

- Ein Cookie wird neu erstellt und nicht sofort entfernt. In diesem Fall ist `type` "changed".
- Ein Cookie wird neu erstellt und sofort entfernt. In diesem Fall ist `type` "deleted".
- Ein Cookie wird entfernt. In diesem Fall ist `type` "deleted".

> [!NOTE]
> Ein Cookie, das durch das Einfügen eines anderen Cookies mit demselben Namen, demselben Domain und demselben Pfad ersetzt wird, wird ignoriert und löst kein Änderungsereignis aus.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("ExtendableCookieChangeEvent.ExtendableCookieChangeEvent", "ExtendableCookieChangeEvent()")}}
  - : Erstellt ein neues `ExtendableCookieChangeEvent`.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von {{domxref("ExtendableEvent")}}._

- {{domxref("ExtendableCookieChangeEvent.changed")}} {{ReadOnlyInline}}
  - : Gibt ein Array zurück, das die geänderten Cookies enthält.
- {{domxref("ExtendableCookieChangeEvent.deleted")}} {{ReadOnlyInline}}
  - : Gibt ein Array zurück, das die gelöschten Cookies enthält.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von {{domxref("ExtendableEvent")}}._

## Beispiele

Im untenstehenden Beispiel verwenden wir {{domxref("CookieStoreManager.getSubscriptions()")}}, um eine Liste bestehender Abonnements zu erhalten. (In Service Workern ist ein Abonnement erforderlich, um Ereignisse abhören zu können.) Wir kündigen die bestehenden Abonnements mit {{domxref("CookieStoreManager.unsubscribe()")}} und abonnieren dann das Cookie mit dem Namen 'COOKIE_NAME' mit {{domxref("CookieStoreManager.subscribe()")}}. Wenn dieses Cookie geändert wird, protokolliert der Ereignis-Listener das Ereignis in der Konsole. Dies wird ein `ExtendableCookieChangeEvent`-Objekt sein, mit der Eigenschaft {{domxref("ExtendableCookieChangeEvent.changed","changed")}} oder {{domxref("ExtendableCookieChangeEvent.deleted","deleted")}}, die das geänderte Cookie enthält.

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(async () => {
    const subscriptions = await self.registration.cookies.getSubscriptions();

    await self.registration.cookies.unsubscribe(subscriptions);

    await self.registration.cookies.subscribe([
      {
        name: "COOKIE_NAME",
      },
    ]);
  });
});

self.addEventListener("cookiechange", (event) => {
  console.log(event);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
