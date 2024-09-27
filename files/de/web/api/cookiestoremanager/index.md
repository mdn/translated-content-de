---
title: CookieStoreManager
slug: Web/API/CookieStoreManager
l10n:
  sourceCommit: 60c3843f55839380e0c0cdc293ea694fe9943158
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Das **`CookieStoreManager`**-Interface der [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ermöglicht es Service Workern, sich für Cookie-Änderungsereignisse zu abonnieren. Rufen Sie [`subscribe()`](/de/docs/Web/API/CookieStoreManager/subscribe) auf einer bestimmten Service Worker-Registrierung auf, um Änderungsereignisse zu erhalten.

Ein `CookieStoreManager` hat eine zugehörige [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration). Jede Service Worker-Registrierung hat eine Cookie-Änderungsabonnementliste, die eine Liste von Cookie-Änderungsabonnements mit jeweils einem Namen und einer URL ist. Die Methoden in diesem Interface erlauben es dem Service Worker, Abonnements zu dieser Liste hinzuzufügen und zu entfernen sowie eine Liste aller Abonnements zu erhalten.

Um ein `CookieStoreManager` zu erhalten, rufen Sie [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies) auf.

## Instanzmethoden

- [`CookieStoreManager.getSubscriptions()`](/de/docs/Web/API/CookieStoreManager/getSubscriptions)
  - : Gibt ein {{jsxref("Promise")}} zurück, das in eine Liste der Cookie-Änderungsabonnements für diese Service Worker-Registrierung aufgelöst wird.
- [`CookieStoreManager.subscribe()`](/de/docs/Web/API/CookieStoreManager/subscribe)
  - : Abonniert Änderungen an Cookies. Es gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das Abonnement erfolgreich ist.
- [`CookieStoreManager.unsubscribe()`](/de/docs/Web/API/CookieStoreManager/unsubscribe)
  - : Kündigt das Abonnement des registrierten Service Workers für Änderungen an Cookies. Es gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die Operation erfolgreich ist.

## Beispiele

In diesem Beispiel abonniert die durch `registration` repräsentierte [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) Änderungsereignisse für das Cookie mit dem Namen `"cookie1"` und dem Geltungsbereich `"/path1"`.

```js
const subscriptions = [{ name: "cookie1", url: `/path1` }];
await registration.cookies.subscribe(subscriptions);
```

Wenn die [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) sich für irgendwelche Cookies angemeldet hat, dann wird [`getSubscriptions()`](/de/docs/Web/API/CookieStoreManager/getSubscriptions) eine Liste von Cookies zurückgeben, die durch Objekte im gleichen Format wie beim ursprünglichen Abonnement dargestellt werden.

```js
const subscriptions = await self.registration.cookies.getSubscriptions();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
