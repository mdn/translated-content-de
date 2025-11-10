---
title: ExtendableCookieChangeEvent
slug: Web/API/ExtendableCookieChangeEvent
l10n:
  sourceCommit: 335a6f38068e697c64009243648c75fb97650402
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

Die **`ExtendableCookieChangeEvent`**-Schnittstelle der [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist der Ereignistyp, der an das [`cookiechange`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookiechange_event)-Ereignis übergeben wird, das im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) ausgelöst wird, wenn Änderungen an Cookies auftreten, die der Cookie-Änderungs-Abonnementliste des Service-Workers entsprechen. Ein Cookie-Änderungsereignis besteht aus einem Cookie und einem Typ (entweder "changed" oder "deleted").

Cookie-Änderungen, die dazu führen, dass das `ExtendableCookieChangeEvent` ausgelöst wird, sind:

- Ein Cookie wird neu erstellt und nicht sofort entfernt oder wird ersetzt.
  In diesem Fall ist `type` "changed".
- Ein Cookie wird neu erstellt und sofort entfernt.
  In diesem Fall ist `type` "deleted".
- Ein Cookie wird entfernt. In diesem Fall ist `type` "deleted".

{{InheritanceDiagram}}

## Konstruktor

- [`ExtendableCookieChangeEvent()`](/de/docs/Web/API/ExtendableCookieChangeEvent/ExtendableCookieChangeEvent)
  - : Erstellt ein neues `ExtendableCookieChangeEvent`.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)._

- [`ExtendableCookieChangeEvent.changed`](/de/docs/Web/API/ExtendableCookieChangeEvent/changed) {{ReadOnlyInline}}
  - : Gibt ein Array zurück, das die geänderten Cookies enthält.
- [`ExtendableCookieChangeEvent.deleted`](/de/docs/Web/API/ExtendableCookieChangeEvent/deleted) {{ReadOnlyInline}}
  - : Gibt ein Array zurück, das die gelöschten Cookies enthält.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)._

## Beispiele

Im folgenden Beispiel verwenden wir [`CookieStoreManager.getSubscriptions()`](/de/docs/Web/API/CookieStoreManager/getSubscriptions), um eine Liste der bestehenden Abonnements zu erhalten. (In Service-Workern ist ein Abonnement erforderlich, um Ereignisse empfangen zu können.) Wir kündigen bestehende Abonnements mit [`CookieStoreManager.unsubscribe()`](/de/docs/Web/API/CookieStoreManager/unsubscribe), und abonnieren dann das Cookie mit dem Namen 'COOKIE_NAME' mit [`CookieStoreManager.subscribe()`](/de/docs/Web/API/CookieStoreManager/subscribe). Wenn dieses Cookie geändert wird, protokolliert der Ereignis-Listener das Ereignis in der Konsole. Dies wird ein `ExtendableCookieChangeEvent`-Objekt sein, mit der Eigenschaft [`changed`](/de/docs/Web/API/ExtendableCookieChangeEvent/changed) oder [`deleted`](/de/docs/Web/API/ExtendableCookieChangeEvent/deleted), die das geänderte Cookie enthält.

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
