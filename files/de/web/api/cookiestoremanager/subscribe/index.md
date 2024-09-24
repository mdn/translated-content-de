---
title: "CookieStoreManager: subscribe()-Methode"
short-title: subscribe()
slug: Web/API/CookieStoreManager/subscribe
l10n:
  sourceCommit: b5a6ae42bf8e7670297d8fb2271e846840f6aa15
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`subscribe()`**-Methode des {{domxref("CookieStoreManager")}}-Interfaces abonniert einen {{domxref("ServiceWorkerRegistration")}} für Cookie-Änderungsereignisse.

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
  - : Wird ausgelöst, wenn die URL in `subscriptions` nicht mit dem {{domxref("ServiceWorkerRegistration.scope","scope")}} der Service-Worker-Registrierung übereinstimmt.

## Beispiele

In diesem Beispiel abonniert die von `registration` dargestellte {{domxref("ServiceWorkerRegistration")}} Änderungsereignisse für das Cookie mit dem Namen `"cookie1"` mit einem Bereich von `"/path1"`.

```js
const subscriptions = [{ name: "cookie1", url: `/path1` }];
await registration.cookies.subscribe(subscriptions);
```

Die URL, die an die `subscribe()`-Methode übergeben wird, kann enger sein als der Bereich der Service-Worker-Registrierung. Im folgenden Beispiel ist das Abonnement für `/path/one/`, sodass es Änderungsereignisse für Änderungen am ersten Cookie, aber nicht am zweiten erhält.

```js
registration.cookies.subscribe([{ name: "cookie1", url: "/path/one/" }]); // Abonnement
cookieStore.set({ name: "cookie1", value: "cookie-value", path: "/path/one/" }); // erhält ein Änderungsereignis
cookieStore.set({ name: "cookie1", value: "cookie-value", path: "/path/two/" }); // erhält kein Änderungsereignis
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
