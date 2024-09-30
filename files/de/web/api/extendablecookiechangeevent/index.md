---
title: ExtendableCookieChangeEvent
slug: Web/API/ExtendableCookieChangeEvent
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

Das **`ExtendableCookieChangeEvent`** Interface der [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist der Ereignistyp, der an das [`cookiechange`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookiechange_event) Ereignis übergeben wird, das im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ausgelöst wird, wenn Änderungen an Cookies auftreten, die mit der Cookie-Änderungsabo-Liste des Service Workers übereinstimmen. Ein Cookie-Änderungsereignis besteht aus einem Cookie und einem Typ (entweder "changed" oder "deleted").

Cookie-Änderungen, die das `ExtendableCookieChangeEvent` auslösen, sind:

- Ein Cookie wird neu erstellt und nicht sofort entfernt. In diesem Fall ist `type` "changed".
- Ein Cookie wird neu erstellt und sofort entfernt. In diesem Fall ist `type` "deleted".
- Ein Cookie wird entfernt. In diesem Fall ist `type` "deleted".

> [!NOTE]
> Ein Cookie, das aufgrund der Einfügung eines anderen Cookies mit demselben Namen, derselben Domain und demselben Pfad ersetzt wird, wird ignoriert und löst kein Änderungsereignis aus.

{{InheritanceDiagram}}

## Konstruktor

- [`ExtendableCookieChangeEvent()`](/de/docs/Web/API/ExtendableCookieChangeEvent/ExtendableCookieChangeEvent)
  - : Erstellt ein neues `ExtendableCookieChangeEvent`.

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)._

- [`ExtendableCookieChangeEvent.changed`](/de/docs/Web/API/ExtendableCookieChangeEvent/changed) {{ReadOnlyInline}}
  - : Gibt ein Array mit den geänderten Cookies zurück.
- [`ExtendableCookieChangeEvent.deleted`](/de/docs/Web/API/ExtendableCookieChangeEvent/deleted) {{ReadOnlyInline}}
  - : Gibt ein Array mit den gelöschten Cookies zurück.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)._

## Beispiele

Im folgenden Beispiel verwenden wir [`CookieStoreManager.getSubscriptions()`](/de/docs/Web/API/CookieStoreManager/getSubscriptions), um eine Liste bestehender Abonnements zu erhalten. (In Service Workern ist ein Abonnement erforderlich, um Ereignisse zu lauschen.) Wir melden uns von bestehenden Abonnements mit [`CookieStoreManager.unsubscribe()`](/de/docs/Web/API/CookieStoreManager/unsubscribe) ab und abonnieren dann das Cookie mit dem Namen 'COOKIE_NAME' mit [`CookieStoreManager.subscribe()`](/de/docs/Web/API/CookieStoreManager/subscribe). Wenn dieses Cookie geändert wird, protokolliert der Ereignislistener das Ereignis in der Konsole. Dies wird ein `ExtendableCookieChangeEvent` Objekt sein, mit der [`changed`](/de/docs/Web/API/ExtendableCookieChangeEvent/changed) oder [`deleted`](/de/docs/Web/API/ExtendableCookieChangeEvent/deleted) Eigenschaft, die das geänderte Cookie enthält.

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
