---
title: "WebTransport: ready-Eigenschaft"
short-title: ready
slug: Web/API/WebTransport/ready
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`ready`** schreibgeschützte Eigenschaft der [`WebTransport`](/de/docs/Web/API/WebTransport)-Schnittstelle gibt ein Promise zurück, das aufgelöst wird, wenn das Transportmittel einsatzbereit ist.

Dieses Promise wird erstellt, wenn das `WebTransport`-Objekt erstellt wird und es wird aufgelöst, wenn eine Verbindung hergestellt ist. Der Zugriff oder das Abwarten dieses Promises löst keine Aktion aus; es ermöglicht lediglich Aktionen, die ausgeführt werden können, wenn der Transport bereit ist, ähnlich wie beim Zuhören eines Ereignisses.

## Wert

Ein {{jsxref("Promise")}}, das zu `undefined` aufgelöst wird.

## Beispiele

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  // …
}

// …

async function closeTransport(transport) {
  // Respond to connection closing
  try {
    await transport.closed;
    console.log(`The HTTP/3 connection to ${url} closed gracefully.`);
  } catch (error) {
    console.error(`The HTTP/3 connection to ${url} closed due to ${error}.`);
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
