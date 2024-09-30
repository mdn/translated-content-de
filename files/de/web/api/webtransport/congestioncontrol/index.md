---
title: "WebTransport: Eigenschaft congestionControl"
short-title: congestionControl
slug: Web/API/WebTransport/congestionControl
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`congestionControl`** Eigenschaft des [`WebTransport`](/de/docs/Web/API/WebTransport) Interfaces gibt die Präferenz der Anwendung für entweder hohen Durchsatz oder niedrige Latenzzeit beim Senden von Daten an.

Der Wert wird in den [`WebTransport()` Konstruktoroptionen](/de/docs/Web/API/WebTransport/WebTransport#congestioncontrol) festgelegt.

## Wert

Ein String mit einem der folgenden Werte:

- `default`
  - : Die Standardeinstellung für die Überlaststeuerung des Transports.
    Dies ist der Standardwert.
- `throughput`
  - : Die Anwendung bevorzugt, dass die Überlaststeuerung auf Durchsatz optimiert wird.
- `low-latency`
  - : Die Anwendung bevorzugt, dass die Überlaststeuerung auf niedrige Latenz optimiert wird.

## Beispiele

Dieses Beispiel zeigt, wie die `congestionControl` Präferenz abgerufen wird.
Da dies nicht explizit im Konstruktor gesetzt wird, ist das Ergebnis `default`.

```js
const url = "https://example.com:4999/wt";
const transport = new WebTransport(url);
console.log(transport.congestionControl); // default
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
