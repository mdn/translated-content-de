---
title: "CookieStoreManager: unsubscribe() Methode"
short-title: unsubscribe()
slug: Web/API/CookieStoreManager/unsubscribe
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`unsubscribe()`**-Methode des [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager)-Interfaces stoppt die [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) vom Empfang zuvor abonnierter Ereignisse.

## Syntax

```js-nolint
unsubscribe(subscriptions)
```

### Parameter

- `subscriptions`
  - : Eine Liste von Objekten, wobei jedes Objekt enthält:
    - `name`
      - : Einen String mit dem Namen eines Cookies.
    - `url`
      - : Einen String mit der URL des Bereichs, der zum Abonnieren dieses Cookies verwendet wurde.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird, wenn der Service Worker abgemeldet wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die URL in `subscriptions` nicht mit dem [`scope`](/de/docs/Web/API/ServiceWorkerRegistration/scope) der Service Worker-Registrierung übereinstimmt.

## Beispiele

In diesem Beispiel meldet sich die durch `registration` repräsentierte [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) von Änderungsereignissen beim Cookie mit dem Namen `"cookie1"` und einem Bereich von `"/path1"` ab.

```js
const subscriptions = [{ name: "cookie1", url: `/path1` }];
await registration.cookies.unsubscribe(subscriptions);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
