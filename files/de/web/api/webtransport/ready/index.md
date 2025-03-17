---
title: "WebTransport: ready-Eigenschaft"
short-title: ready
slug: Web/API/WebTransport/ready
l10n:
  sourceCommit: 584199ed3502f1a886fd1b074f48c81fcf519a73
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte **`ready`**-Eigenschaft des [`WebTransport`](/de/docs/Web/API/WebTransport)-Interfaces gibt ein Promise zurück, das aufgelöst wird, wenn der Transport bereit zur Verwendung ist.

Dieses Promise wird erstellt, wenn das `WebTransport`-Objekt erstellt wird, und wird aufgelöst, wenn eine Verbindung hergestellt wird. Das Zugreifen oder Warten auf dieses Promise löst keine Aktion aus; es erlaubt lediglich, Aktionen zu ergreifen, wenn der Transport bereit ist, ähnlich wie beim Lauschen auf ein Ereignis.

## Wert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird.

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
