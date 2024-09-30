---
title: CookieStoreManager
slug: Web/API/CookieStoreManager
l10n:
  sourceCommit: 60c3843f55839380e0c0cdc293ea694fe9943158
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Das **`CookieStoreManager`** Interface der [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ermöglicht es Service-Workern, sich für Cookie-Änderungsereignisse zu registrieren. Rufen Sie [`subscribe()`](/de/docs/Web/API/CookieStoreManager/subscribe) bei einer bestimmten Service-Worker-Registrierung auf, um Änderungsereignisse zu empfangen.

Ein `CookieStoreManager` ist mit einer [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) assoziiert. Jede Service-Worker-Registrierung hat eine Liste von Cookie-Änderungsabonnements, die aus einem Namen und einer URL besteht. Die Methoden in diesem Interface ermöglichen es dem Service-Worker, Abonnements zu dieser Liste hinzuzufügen, daraus zu entfernen und eine Liste aller Abonnements abzurufen.

Um einen `CookieStoreManager` zu erhalten, rufen Sie [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies) auf.

## Instanzmethoden

- [`CookieStoreManager.getSubscriptions()`](/de/docs/Web/API/CookieStoreManager/getSubscriptions)
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich zu einer Liste von Cookie-Änderungsabonnements für diese Service-Worker-Registrierung auflöst.
- [`CookieStoreManager.subscribe()`](/de/docs/Web/API/CookieStoreManager/subscribe)
  - : Abonniert Änderungen an Cookies. Es gibt ein {{jsxref("Promise")}} zurück, das sich auflöst, wenn das Abonnement erfolgreich ist.
- [`CookieStoreManager.unsubscribe()`](/de/docs/Web/API/CookieStoreManager/unsubscribe)
  - : Hebt das Abonnement des registrierten Service-Workers für Änderungen an Cookies auf. Es gibt ein {{jsxref("Promise")}} zurück, das sich auflöst, wenn die Operation erfolgreich ist.

## Beispiele

In diesem Beispiel abonniert die [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration), die durch `registration` repräsentiert wird, Änderungsereignisse für das Cookie namens `"cookie1"` im Bereich `"/path1"`.

```js
const subscriptions = [{ name: "cookie1", url: `/path1` }];
await registration.cookies.subscribe(subscriptions);
```

Wenn die [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) Cookies abonniert hat, gibt [`getSubscriptions()`](/de/docs/Web/API/CookieStoreManager/getSubscriptions) eine Liste von Cookies zurück, die durch Objekte im gleichen Format wie das ursprüngliche Abonnement repräsentiert werden.

```js
const subscriptions = await self.registration.cookies.getSubscriptions();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
