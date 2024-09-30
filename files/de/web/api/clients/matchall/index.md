---
title: "Clients: matchAll() Methode"
short-title: matchAll()
slug: Web/API/Clients/matchAll
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`matchAll()`** Methode der [`Clients`](/de/docs/Web/API/Clients) Schnittstelle gibt ein {{jsxref("Promise")}} für eine Liste von Service Worker
[`Client`](/de/docs/Web/API/Client) Objekten zurück. Schließen Sie den `options`-Parameter ein, um alle Service Worker-Clients zurückzugeben, deren Herkunft mit der des zugehörigen Service Workers identisch ist. Wenn keine Optionen einbezogen werden, gibt die Methode nur die vom Service Worker gesteuerten Service Worker-Clients zurück.

## Syntax

```js-nolint
matchAll()
matchAll(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionsobjekt, mit dem Sie Optionen für den Matching-Vorgang festlegen können. Verfügbare Optionen sind:

    - `includeUncontrolled`
      - : Ein boolescher Wert — wenn er auf `true` gesetzt ist, gibt der Matching-Vorgang alle Service Worker-Clients zurück, die denselben Ursprung wie der aktuelle Service Worker haben. Andernfalls gibt er nur die vom aktuellen Service Worker gesteuerten Service Worker-Clients zurück. Der Standardwert ist `false`.
    - `type`
      - : Legt den Typ der Clients fest, die Sie abgleichen möchten. Verfügbare Werte sind `"window"`, `"worker"`, `"sharedworker"` und `"all"`. Der Standardwert ist `"window"`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein Array von [`Client`](/de/docs/Web/API/Client) Objekten aufgelöst wird. In Chrome 46/Firefox 54 und später gibt diese Methode die Clients in der Reihenfolge der zuletzt fokussierten zurück, gemäß der Spezifikation.

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
