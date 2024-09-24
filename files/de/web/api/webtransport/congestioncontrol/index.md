---
title: "WebTransport: congestionControl Eigenschaft"
short-title: congestionControl
slug: Web/API/WebTransport/congestionControl
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`congestionControl`** schreibgeschützte Eigenschaft der {{domxref("WebTransport")}}-Schnittstelle gibt die Präferenz der Anwendung entweder für hohen Durchsatz oder niedrige Latenz beim Senden von Daten an.

Der Wert wird in den [Optionen des `WebTransport()` Konstruktors](/de/docs/Web/API/WebTransport/WebTransport#congestioncontrol) festgelegt.

## Wert

Ein String mit einem der folgenden Werte:

- `default`
  - : Die Standardanpassung der Überlastkontrolle für das Transportprotokoll.
    Dies ist die Standardeinstellung.
- `throughput`
  - : Die Anwendung bevorzugt, dass die Überlastkontrolle für Durchsatz optimiert ist.
- `low-latency`
  - : Die Anwendung bevorzugt, dass die Überlastkontrolle für niedrige Latenz optimiert ist.

## Beispiele

Dieses Beispiel zeigt, wie die `congestionControl`-Präferenz abgerufen wird.
Da dies nicht explizit im Konstruktor festgelegt ist, lautet das Ergebnis `default`.

```js
const url = "https://example.com:4999/wt";
const transport = new WebTransport(url);
console.log(transport.congestionControl); // default
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
