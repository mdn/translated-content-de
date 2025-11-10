---
title: "Clients: matchAll() Methode"
short-title: matchAll()
slug: Web/API/Clients/matchAll
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`matchAll()`**-Methode der [`Clients`](/de/docs/Web/API/Clients)-Schnittstelle gibt ein {{jsxref("Promise")}} für eine Liste von Service Worker-[`Client`](/de/docs/Web/API/Client)-Objekten zurück. Schließen Sie den `options`-Parameter ein, um alle Service Worker-Clients zurückzugeben, deren Ursprung derselbe ist wie der Ursprung des zugehörigen Service Workers. Wenn keine Optionen eingeschlossen sind, gibt die Methode nur die vom Service Worker kontrollierten Service Worker-Clients zurück.

## Syntax

```js-nolint
matchAll()
matchAll(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, mit dem Sie Optionen für den Matching-Vorgang festlegen können. Verfügbare Optionen sind:
    - `includeUncontrolled`
      - : Ein boolescher Wert — wenn auf `true` gesetzt, wird der Matching-Vorgang alle Service Worker-Clients zurückgeben, die denselben Ursprung wie der aktuelle Service Worker teilen. Andernfalls werden nur die Service Worker-Clients zurückgegeben, die vom aktuellen Service Worker kontrolliert werden. Der Standardwert ist `false`.
    - `type`
      - : Legt den Typ der Clients fest, die Sie abgleichen möchten. Verfügbare Werte sind `"window"`, `"worker"`, `"sharedworker"` und `"all"`. Der Standardwert ist `"window"`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Array von [`Client`](/de/docs/Web/API/Client)-Objekten auflöst. In Chrome 46/Firefox 54 und später gibt diese Methode Clients in der Reihenfolge der zuletzt fokussierten, korrekt gemäß Spezifikation, zurück.

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
