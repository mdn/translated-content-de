---
title: "WebTransport: ready Eigenschaft"
short-title: ready
slug: Web/API/WebTransport/ready
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`ready`** des {{domxref("WebTransport")}}-Interfaces gibt ein Promise zurück, das aufgelöst wird, wenn der Transport bereit zur Nutzung ist.

## Wert

Ein {{jsxref("Promise")}}, das zu `undefined` aufgelöst wird.

## Beispiele

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialisieren der Transportverbindung
  const transport = new WebTransport(url);

  // Die Verbindung kann benutzt werden, sobald ready erfüllt ist
  await transport.ready;

  // ...
}

// ...

async function closeTransport(transport) {
  // Reagieren auf das Schließen der Verbindung
  try {
    await transport.closed;
    console.log(`Die HTTP/3-Verbindung zu ${url} wurde ordnungsgemäß geschlossen.`);
  } catch (error) {
    console.error(`Die HTTP/3-Verbindung zu ${url} wurde aufgrund von ${error} geschlossen.`);
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
