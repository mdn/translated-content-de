---
title: "CookieStoreManager: unsubscribe()-Methode"
short-title: unsubscribe()
slug: Web/API/CookieStoreManager/unsubscribe
l10n:
  sourceCommit: 7db8dfc37827571a904fb97d7626f096ff4ec720
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

Die **`unsubscribe()`**-Methode der [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager)-Schnittstelle stoppt die [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) von der Empfangnahme zuvor abonnierter Ereignisse.

## Syntax

```js-nolint
unsubscribe(subscriptions)
```

### Parameter

- `subscriptions`

  - : Eine Objektliste, wobei jedes Objekt folgende Daten enthält:

    - `name`
      - : Ein String mit dem Namen eines Cookies.
    - `url`
      - : Ein String mit der URL des Bereichs, der zum Abonnieren dieses Cookies verwendet wurde.

### Rückgabewert

Ein {{jsxref("Promise")}}, der sich mit {{jsxref("undefined")}} auflöst, wenn der Service Worker abgemeldet wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die in `subscriptions` übergebene URL nicht mit dem [`scope`](/de/docs/Web/API/ServiceWorkerRegistration/scope) der Service Worker-Registrierung übereinstimmt.

## Beispiele

In diesem Beispiel meldet sich die durch `registration` repräsentierte [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) von Änderungsereignissen auf dem Cookie namens `"cookie1"` mit einem Bereich von `"/path1"` ab.

```js
const subscriptions = [{ name: "cookie1", url: `/path1` }];
await registration.cookies.unsubscribe(subscriptions);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
