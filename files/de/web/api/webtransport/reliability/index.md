---
title: "WebTransport: Eigenschaft reliability"
short-title: reliability
slug: Web/API/WebTransport/reliability
l10n:
  sourceCommit: e1e7e2ac2cb1e40293c32c24bc0667905e9a7a04
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`reliability`** des [`WebTransport`](/de/docs/Web/API/WebTransport)-Interfaces gibt an, ob die Verbindung nur zuverlässige Transporte unterstützt oder ob sie auch unzuverlässige Transporte (wie UDP) unterstützt.

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
  // Initialize transport connection
  const transport = new WebTransport(url);

  // Once ready fulfills the connection can be used
  // Prior to this the reliability is "pending"
  await transport.ready;

  if (transport.reliability === "reliable-only") {
    // Use connection only with reliable transports
  } else {
    // Use connection with either reliable or unreliable transports.
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
