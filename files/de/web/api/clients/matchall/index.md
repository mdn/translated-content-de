---
title: "Clients: matchAll()-Methode"
short-title: matchAll()
slug: Web/API/Clients/matchAll
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`matchAll()`**-Methode der {{domxref("Clients")}}-Schnittstelle gibt ein {{jsxref("Promise")}} für eine Liste von Service Worker-{{domxref("Client")}}-Objekten zurück. Geben Sie den `options`-Parameter an, um alle Service Worker-Clients zurückzugeben, deren Ursprung derselbe ist wie der des zugehörigen Service Workers. Wenn Optionen nicht angegeben werden, gibt die Methode nur die vom Service Worker gesteuerten Service Worker-Clients zurück.

## Syntax

```js-nolint
matchAll()
matchAll(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das es Ihnen ermöglicht, Optionen für den Abgleichsvorgang festzulegen. Verfügbare Optionen sind:

    - `includeUncontrolled`
      - : Ein boolescher Wert — wenn auf `true` gesetzt, wird der Abgleichsvorgang alle Service Worker-Clients zurückgeben, die denselben Ursprung wie der aktuelle Service Worker teilen. Andernfalls gibt es nur die vom aktuellen Service Worker gesteuerten Service Worker-Clients zurück. Der Standardwert ist `false`.
    - `type`
      - : Legt den Typ der Clients fest, die Sie abgleichen möchten. Verfügbare Werte sind `"window"`, `"worker"`, `"sharedworker"` und `"all"`. Der Standardwert ist `"window"`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein Array von {{domxref("Client")}}-Objekten aufgelöst wird. In Chrome 46/Firefox 54 und später gibt diese Methode Clients in der Reihenfolge des zuletzt fokussierten Fensters zurück, korrekt gemäß der Spezifikation.

## Beispiele

```js
clients.matchAll(options).then((clientList) => {
  for (const client of clientList) {
    if (client.url === "index.html") {
      clients.openWindow(client);
      // oder machen Sie etwas anderes mit dem übereinstimmenden Client
    }
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
