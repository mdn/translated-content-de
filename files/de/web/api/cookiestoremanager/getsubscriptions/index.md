---
title: "CookieStoreManager: getSubscriptions() Methode"
short-title: getSubscriptions()
slug: Web/API/CookieStoreManager/getSubscriptions
l10n:
  sourceCommit: 60c3843f55839380e0c0cdc293ea694fe9943158
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`getSubscriptions()`** Methode des [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager)-Interfaces gibt eine Liste aller Cookie-Änderungsabonnements für diese [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) zurück.

## Syntax

```js-nolint
getSubscriptions()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Liste von Objekten aufgelöst wird, die jeweils folgendes enthalten:

- `name`
  - : Ein String mit dem Namen eines Cookies.
- `url`
  - : Ein String mit der URL des Bereichs, der verwendet wurde, um das oder die Cookies zu abonnieren.

## Beispiele

Wenn die [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration), die durch `registration` repräsentiert wird, für Cookie-Änderungsereignisse abonniert ist, wird `subscriptions` zu einer Liste von Objekten aufgelöst, die den Namen und die URL dieser Cookies enthalten.

```js
const subscriptions = await self.registration.cookies.getSubscriptions();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
