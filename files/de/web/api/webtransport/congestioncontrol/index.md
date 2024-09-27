---
title: "WebTransport: congestionControl-Eigenschaft"
short-title: congestionControl
slug: Web/API/WebTransport/congestionControl
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`congestionControl`** schreibgeschützte Eigenschaft der [`WebTransport`](/de/docs/Web/API/WebTransport)-Schnittstelle zeigt die Präferenz der Anwendung für entweder hohen Durchsatz oder niedrige Latenz beim Senden von Daten an.

Der Wert wird in den [`WebTransport()`-Konstruktoroptionen](/de/docs/Web/API/WebTransport/WebTransport#congestioncontrol) festgelegt.

## Wert

Ein String mit einem der folgenden Werte:

- `default`
  - : Die standardmäßige Staukontrollabstimmung für den Transport.
    Dies ist der Standardwert.
- `throughput`
  - : Die Anwendung bevorzugt, dass die Staukontrolle auf Durchsatz abgestimmt wird.
- `low-latency`
  - : Die Anwendung bevorzugt, dass die Staukontrolle auf niedrige Latenz abgestimmt wird.

## Beispiele

Dieses Beispiel zeigt, wie die `congestionControl`-Präferenz abgerufen wird.
Da dies nicht explizit im Konstruktor festgelegt ist, ist das Ergebnis `default`.

```js
const url = "https://example.com:4999/wt";
const transport = new WebTransport(url);
console.log(transport.congestionControl); // default
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
