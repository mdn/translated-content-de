---
title: "Clients: get()-Methode"
short-title: get()
slug: Web/API/Clients/get
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`get()`**-Methode der [`Clients`](/de/docs/Web/API/Clients)-Schnittstelle ruft einen Service-Worker-Client ab, der mit einer gegebenen `id` übereinstimmt, und gibt ihn in einem {{jsxref("Promise")}} zurück.

## Syntax

```js-nolint
get(id)
```

### Parameter

- `id`
  - : Ein String, der die id des Clients repräsentiert, den Sie abrufen möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf ein [`Client`](/de/docs/Web/API/Client)-Objekt oder `undefined` aufgelöst wird.

## Beispiele

```js
self.clients.get(id).then((client) => {
  self.clients.openWindow(client.url);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
