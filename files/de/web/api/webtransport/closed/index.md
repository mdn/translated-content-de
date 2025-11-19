---
title: "WebTransport: closed-Eigenschaft"
short-title: closed
slug: Web/API/WebTransport/closed
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`closed`** schreibgeschützte Eigenschaft der [`WebTransport`](/de/docs/Web/API/WebTransport)-Schnittstelle gibt ein Promise zurück, das aufgelöst wird, wenn der Transport geschlossen wird.

Dieses Promise wird erstellt, wenn das `WebTransport`-Objekt erstellt wird, und wird aufgelöst, wenn der Transport auf irgendeine Weise geschlossen wird, z.B. durch Aufrufen der [`close()`](/de/docs/Web/API/WebTransport/close)-Methode, wenn die Verbindung fehlschlägt, oder wenn die Verbindung vom Server geschlossen wird. Das Zugreifen auf oder das Warten auf dieses Promise löst keine Aktion aus; es ermöglicht nur Maßnahmen, wenn der Transport geschlossen wird, ähnlich wie das Zuhören eines Ereignisses.

## Wert

Ein {{jsxref("Promise")}}, das zu einem Objekt aufgelöst wird, das die folgenden Eigenschaften enthält:

- `closeCode`
  - : Eine Zahl, die den Fehlercode für den Fehler darstellt.
- `reason`
  - : Ein String, der den Grund für das Schließen des `WebTransport` angibt.

Oder, im Fall eines unerwarteten Abschlusses, wie z.B. eines Netzwerkausfalls, wird das Promise mit einem Fehler abgelehnt.

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
