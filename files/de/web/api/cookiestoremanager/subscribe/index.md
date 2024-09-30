---
title: "CookieStoreManager: subscribe() Methode"
short-title: subscribe()
slug: Web/API/CookieStoreManager/subscribe
l10n:
  sourceCommit: b5a6ae42bf8e7670297d8fb2271e846840f6aa15
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`subscribe()`** Methode der [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) Schnittstelle abonniert ein [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für Cookie-Änderungsereignisse.

## Syntax

```js-nolint
subscribe(subscriptions)
```

### Parameter

- `subscriptions`

  - : Ein Array von Objekten, die jeweils die folgenden Eigenschaften haben:

    - `name`
      - : Ein String mit dem Namen eines Cookies.
    - `url`
      - : Ein String mit der URL eines Cookie-Bereichs. Diese kann enger gefasst sein als der Bereich der Service Worker-Registrierung.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit {{jsxref("undefined")}} auflöst, wenn das Abonnement abgeschlossen ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die in `subscriptions` übergebene URL nicht mit dem [`scope`](/de/docs/Web/API/ServiceWorkerRegistration/scope) der Service Worker-Registrierung übereinstimmt.

## Beispiele

In diesem Beispiel abonniert die durch `registration` dargestellte [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) Änderungsereignisse für das Cookie mit dem Namen `"cookie1"` und einem Bereich von `"/path1"`.

```js
const subscriptions = [{ name: "cookie1", url: `/path1` }];
await registration.cookies.subscribe(subscriptions);
```

Die URL, die der `subscribe()` Methode übergeben wird, kann enger gefasst sein als der Service Worker-Registrierungsbereich. Im folgenden Beispiel ist das Abonnement für `/path/one/`, sodass es Änderungsereignisse für Änderungen am ersten Cookie, aber nicht am zweiten, erhält.

```js
registration.cookies.subscribe([{ name: "cookie1", url: "/path/one/" }]); // subscription
cookieStore.set({ name: "cookie1", value: "cookie-value", path: "/path/one/" }); // receives a change event
cookieStore.set({ name: "cookie1", value: "cookie-value", path: "/path/two/" }); // does not receive a change event
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
