---
title: "CookieStoreManager: unsubscribe() Methode"
short-title: unsubscribe()
slug: Web/API/CookieStoreManager/unsubscribe
l10n:
  sourceCommit: 7db8dfc37827571a904fb97d7626f096ff4ec720
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`unsubscribe()`** Methode der {{domxref("CookieStoreManager")}} Schnittstelle stoppt die {{domxref("ServiceWorkerRegistration")}} von dem Empfang zuvor abonnierter Ereignisse.

## Syntax

```js-nolint
unsubscribe(subscriptions)
```

### Parameter

- `subscriptions`

  - : Eine Objektliste, wobei jedes Objekt folgendes enthält:

    - `name`
      - : Ein String mit dem Namen eines Cookies.
    - `url`
      - : Ein String mit der URL des Scopes, der verwendet wurde, um dieses Cookie zu abonnieren.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit {{jsxref("undefined")}} aufgelöst wird, wenn der Service Worker abgemeldet wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die URL in `subscriptions` nicht mit dem {{domxref("ServiceWorkerRegistration.scope","scope")}} der Service Worker Registrierung übereinstimmt.

## Beispiele

In diesem Beispiel meldet sich die {{domxref("ServiceWorkerRegistration")}}, dargestellt durch `registration`, von Änderungsereignissen am Cookie mit dem Namen `"cookie1"` mit einem Scope von `"/path1"` ab.

```js
const subscriptions = [{ name: "cookie1", url: `/path1` }];
await registration.cookies.unsubscribe(subscriptions);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
