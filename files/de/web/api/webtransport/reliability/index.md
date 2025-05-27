---
title: "WebTransport: reliability-Eigenschaft"
short-title: reliability
slug: Web/API/WebTransport/reliability
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`reliability`** schreibgeschützte Eigenschaft der [`WebTransport`](/de/docs/Web/API/WebTransport)-Schnittstelle zeigt an, ob die Verbindung ausschließlich zuverlässige Übertragungen unterstützt oder ob sie auch unzuverlässige Übertragungen (wie UDP) unterstützt.

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
