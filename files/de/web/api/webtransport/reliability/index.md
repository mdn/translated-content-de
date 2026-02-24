---
title: "WebTransport: reliability-Eigenschaft"
short-title: reliability
slug: Web/API/WebTransport/reliability
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte **`reliability`**-Eigenschaft der [`WebTransport`](/de/docs/Web/API/WebTransport)-Schnittstelle gibt an, ob die Verbindung nur zuverlässige Übertragungen unterstützt oder ob sie auch unzuverlässige Übertragungen (wie UDP) unterstützt.

## Wert

Ein String mit einem der folgenden Werte:

- `pending`
  - : Die Verbindung wurde noch nicht hergestellt.
    Die Zuverlässigkeit ist noch nicht bekannt.
- `reliable-only`
  - : Die Verbindung unterstützt nur zuverlässige Übertragungen.
- `supports-unreliable`
  - : Die Verbindung unterstützt sowohl unzuverlässige als auch zuverlässige Übertragungen.

## Beispiele

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // Once ready fulfils the connection can be used
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
