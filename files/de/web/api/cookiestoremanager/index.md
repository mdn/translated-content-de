---
title: CookieStoreManager
slug: Web/API/CookieStoreManager
l10n:
  sourceCommit: 60c3843f55839380e0c0cdc293ea694fe9943158
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Das **`CookieStoreManager`**-Interface der {{domxref("Cookie Store API", "", "", "nocode")}} ermöglicht es Service-Workern, sich für Ereignisse bei Cookie-Änderungen zu registrieren. Rufen Sie {{domxref("CookieStoreManager.subscribe()","subscribe()")}} auf einer bestimmten Service-Worker-Registrierung auf, um Änderungsereignisse zu empfangen.

Ein `CookieStoreManager` ist mit einer {{domxref("ServiceWorkerRegistration")}} verbunden. Jede Service-Worker-Registrierung hat eine Liste für Cookie-Änderungsabonnements, die eine Liste von Cookie-Änderungsabonnements enthält, wobei jedes eine Name und URL beinhaltet. Die Methoden in diesem Interface ermöglichen es dem Service-Worker, Abonnements zu dieser Liste hinzuzufügen und zu entfernen und eine Liste aller Abonnements abzurufen.

Um einen `CookieStoreManager` zu erhalten, rufen Sie {{domxref("ServiceWorkerRegistration.cookies")}} auf.

## Instanzmethoden

- {{domxref("CookieStoreManager.getSubscriptions()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das eine Liste der Cookie-Änderungsabonnements für diese Service-Worker-Registrierung auflöst.
- {{domxref("CookieStoreManager.subscribe()")}}
  - : Abonniert Änderungen an Cookies. Es gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das Abonnement erfolgreich ist.
- {{domxref("CookieStoreManager.unsubscribe()")}}
  - : Kündigt das Abonnement des registrierten Service-Workers für Änderungen an Cookies. Es gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Vorgang erfolgreich ist.

## Beispiele

In diesem Beispiel abonniert die durch `registration` repräsentierte {{domxref("ServiceWorkerRegistration")}} Änderungsereignisse für das Cookie mit dem Namen `"cookie1"` mit einem Scope von `"/path1"`.

```js
const subscriptions = [{ name: "cookie1", url: `/path1` }];
await registration.cookies.subscribe(subscriptions);
```

Wenn die {{domxref("ServiceWorkerRegistration")}} Cookies abonniert hat, gibt {{domxref("CookieStoreManager.getSubscriptions()","getSubscriptions()")}} eine Liste von Cookies zurück, die durch Objekte im gleichen Format wie bei der ursprünglichen Abonnementanfrage dargestellt werden.

```js
const subscriptions = await self.registration.cookies.getSubscriptions();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
