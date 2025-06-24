---
title: "CookieStoreManager: subscribe() Methode"
short-title: subscribe()
slug: Web/API/CookieStoreManager/subscribe
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`subscribe()`**-Methode der [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) Schnittstelle abonniert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für Cookie-Änderungsereignisse.

## Syntax

```js-nolint
subscribe(subscriptions)
```

### Parameter

- `subscriptions`
  - : Ein Array von Objekten, von denen jedes die folgenden Eigenschaften hat:
    - `name`
      - : Ein String mit dem Namen eines Cookies.
    - `url`
      - : Ein String mit der URL eines Cookie-Bereichs. Dieser kann enger sein als der Bereich der Service-Worker-Registrierung.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird, wenn das Abonnement abgeschlossen ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die in `subscriptions` übergebene URL nicht mit dem [`scope`](/de/docs/Web/API/ServiceWorkerRegistration/scope) der Service-Worker-Registrierung übereinstimmt.

## Beispiele

In diesem Beispiel abonniert die [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration), die durch `registration` dargestellt wird, die Änderungsevents für das Cookie mit dem Namen `"cookie1"` mit einem Bereich von `"/path1"`.

```js
const subscriptions = [{ name: "cookie1", url: `/path1` }];
await registration.cookies.subscribe(subscriptions);
```

Die an die `subscribe()`-Methode übergebene URL kann enger sein als der Bereich der Service-Worker-Registrierung. Im folgenden Beispiel ist das Abonnement für `/path/one/`, sodass es Änderungsereignisse für Änderungen am ersten Cookie empfängt, aber nicht am zweiten.

```js
registration.cookies.subscribe([{ name: "cookie1", url: "/path/one/" }]); // subscription
cookieStore.set({ name: "cookie1", value: "cookie-value", path: "/path/one/" }); // receives a change event
cookieStore.set({ name: "cookie1", value: "cookie-value", path: "/path/two/" }); // does not receive a change event
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
