---
title: "WebTransport: closed-Eigenschaft"
short-title: closed
slug: Web/API/WebTransport/closed
l10n:
  sourceCommit: 584199ed3502f1a886fd1b074f48c81fcf519a73
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte **`closed`**-Eigenschaft des [`WebTransport`](/de/docs/Web/API/WebTransport)-Interfaces gibt ein Promise zurück, das aufgelöst wird, wenn der Transport geschlossen wird.

Dieses Promise wird erstellt, wenn das `WebTransport`-Objekt erstellt wird und wird aufgelöst, wenn der Transport auf irgendeine Weise geschlossen wird, beispielsweise durch Aufruf der [`close()`](/de/docs/Web/API/WebTransport/close)-Methode, wenn die Verbindung fehlgeschlagen ist oder wenn die Verbindung vom Server geschlossen wird. Der Zugriff auf dieses Promise oder das Abwarten darauf löst keine Aktion aus; es ermöglicht lediglich Maßnahmen zu ergreifen, wenn der Transport geschlossen wird, ähnlich dem Lauschen auf ein Ereignis.

## Wert

Ein {{jsxref("Promise")}}, das auf ein Objekt mit den folgenden Eigenschaften aufgelöst wird:

- `closeCode`
  - : Eine Zahl, die den Fehlercode für den Fehler darstellt.
- `reason`
  - : Ein String, der den Grund für das Schließen des `WebTransport` darstellt.

Oder, im Falle eines unerwarteten Schließens, wie bei einem Netzwerkfehler, wird das Promise mit einem Fehler abgelehnt.

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
