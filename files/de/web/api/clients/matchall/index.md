---
title: "Clients: matchAll() Methode"
short-title: matchAll()
slug: Web/API/Clients/matchAll
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`matchAll()`**-Methode der [`Clients`](/de/docs/Web/API/Clients) Schnittstelle gibt ein {{jsxref("Promise")}} für eine Liste von Service Worker [`Client`](/de/docs/Web/API/Client)-Objekten zurück. Verwenden Sie den `options`-Parameter, um alle Service Worker Clients zurückzugeben, deren Ursprung derselbe ist wie der des zugehörigen Service Workers. Wenn keine Optionen angegeben sind, gibt die Methode nur die Service Worker Clients zurück, die vom Service Worker gesteuert werden.

## Syntax

```js-nolint
matchAll()
matchAll(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionsobjekt, mit dem Sie Optionen für den Übereinstimmungsvorgang festlegen können. Verfügbare
    Optionen sind:

    - `includeUncontrolled`
      - : Ein boolescher Wert — wenn auf `true` gesetzt,
        gibt der Übereinstimmungsvorgang alle Service Worker Clients zurück, die den
        gleichen Ursprung wie der aktuelle Service Worker teilen. Andernfalls gibt er
        nur die Service Worker Clients zurück, die vom aktuellen Service Worker gesteuert werden. Standardwert ist `false`.
    - `type`
      - : Legt den Typ der Clients fest, die Sie übereinstimmt haben möchten. Verfügbare Werte
        sind `"window"`, `"worker"`, `"sharedworker"` und `"all"`. Standardwert ist `"window"`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Array von [`Client`](/de/docs/Web/API/Client)-Objekten aufgelöst wird. In Chrome 46/Firefox 54 und später gibt diese Methode Clients in der Reihenfolge der zuletzt fokussierten, korrekt gemäß der Spezifikation zurück.

## Beispiele

```js
clients.matchAll(options).then((clientList) => {
  for (const client of clientList) {
    if (client.url === "index.html") {
      clients.openWindow(client);
      // or do something else involving the matching client
    }
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
