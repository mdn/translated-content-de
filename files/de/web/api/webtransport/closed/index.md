---
title: "WebTransport: closed-Eigenschaft"
short-title: closed
slug: Web/API/WebTransport/closed
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte **`closed`**-Eigenschaft der [`WebTransport`](/de/docs/Web/API/WebTransport)-Schnittstelle gibt ein Versprechen zurück, das aufgelöst wird, wenn der Transport geschlossen wird.

## Wert

Ein {{jsxref("Promise")}}, das zu einem Objekt aufgelöst wird, das die folgenden Eigenschaften enthält:

- `closeCode`
  - : Eine Zahl, die den Fehlercode für den Fehler darstellt.
- `reason`
  - : Ein String, der den Grund für das Schließen des `WebTransport` darstellt.

## Beispiele

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  // ...
}

// ...

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
