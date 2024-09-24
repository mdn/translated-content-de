---
title: "WebTransport: reliability Eigenschaft"
short-title: Zuverlässigkeit
slug: Web/API/WebTransport/reliability
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`reliability`** des {{domxref("WebTransport")}}-Interfaces gibt an, ob die Verbindung nur zuverlässige Transporte unterstützt oder ob sie auch unzuverlässige Transporte (wie UDP) unterstützt.

## Wert

Ein String mit einem der folgenden Werte:

- `pending`
  - : Die Verbindung wurde noch nicht hergestellt.
    Die Zuverlässigkeit ist noch nicht bekannt.
- `reliable-only`
  - : Die Verbindung unterstützt nur zuverlässige Transporte.
- `supports-unreliable`
  - : Die Verbindung unterstützt sowohl unzuverlässige als auch zuverlässige Transporte.

## Beispiele

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Transportverbindung initialisieren
  const transport = new WebTransport(url);

  // Sobald ready erfüllt ist, kann die Verbindung verwendet werden
  // Vorher ist die Zuverlässigkeit "pending"
  await transport.ready;

  if (transport.reliability == "reliable-only") {
    // Verbindung nur mit zuverlässigen Transporten nutzen
  } else {
    // Verbindung mit entweder zuverlässigen oder unzuverlässigen Transporten nutzen.
  }
  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
