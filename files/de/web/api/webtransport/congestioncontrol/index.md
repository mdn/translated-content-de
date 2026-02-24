---
title: "WebTransport: congestionControl-Eigenschaft"
short-title: congestionControl
slug: Web/API/WebTransport/congestionControl
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`congestionControl`**-Leseeigenschaft der [`WebTransport`](/de/docs/Web/API/WebTransport)-Schnittstelle gibt die Präferenz der Anwendung für entweder hohen Durchsatz oder geringe Latenz beim Senden von Daten an.

Der Wert wird in den [`WebTransport()`-Konstruktoroptionen](/de/docs/Web/API/WebTransport/WebTransport#congestioncontrol) festgelegt.

## Wert

Ein String mit einem der folgenden Werte:

- `default`
  - : Die Standard-Einstellung für die Staukontrolle des Transports.
    Dies ist die Voreinstellung.
- `throughput`
  - : Die Anwendung bevorzugt, dass die Staukontrolle auf Durchsatz abgestimmt wird.
- `low-latency`
  - : Die Anwendung bevorzugt, dass die Staukontrolle auf geringe Latenz abgestimmt wird.

## Beispiele

Dieses Beispiel zeigt, wie die `congestionControl`-Präferenz abgerufen wird. Da dies im Konstruktor nicht explizit festgelegt wurde, ist das Ergebnis `default`.

```js
const url = "https://example.com:4999/wt";
const transport = new WebTransport(url);
console.log(transport.congestionControl); // default
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
