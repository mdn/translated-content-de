---
title: "WebTransport: responseHeaders-Eigenschaft"
short-title: responseHeaders
slug: Web/API/WebTransport/responseHeaders
l10n:
  sourceCommit: 98b1752bbde3987c1c445b038aa4a463dccff6b8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`responseHeaders`** der [`WebTransport`](/de/docs/Web/API/WebTransport)-Schnittstelle gibt die HTTP-Header aus der Antwort des Servers auf die Anfrage zurück, mit der die Sitzung eingerichtet wurde.

## Wert

Ein [`Headers`](/de/docs/Web/API/Headers)-Objekt oder `null`, wenn die Sitzung noch nicht eingerichtet wurde.

Das zurückgegebene Objekt ist unveränderlich: Der Aufruf von Methoden, die es verändern, etwa [`set()`](/de/docs/Web/API/Headers/set) oder [`append()`](/de/docs/Web/API/Headers/append), löst einen {{jsxref("TypeError")}} aus.

## Beschreibung

Die Sitzung wird mit einer [erweiterten `CONNECT`-Anfrage](/de/docs/Web/HTTP/Reference/Methods/CONNECT#extended_connect) eingerichtet.
Der Client kann dieser Anfrage über die Konstruktoroption [`headers`](/de/docs/Web/API/WebTransport/WebTransport#headers) benutzerdefinierte Header hinzufügen.
Der Server kann in seine Antwort Header aufnehmen, um anwendungsspezifische Informationen wie eine Sitzungskennung an den Client zurückzugeben.

Der Wert wird gesetzt, bevor das [`ready`](/de/docs/Web/API/WebTransport/ready)-Promise erfüllt wird.

Die zurückgegebenen Header enthalten nicht `WT-Protocol`, mit dem der Server das von ihm gewählte Anwendungsprotokoll angibt.
Verwenden Sie stattdessen [`WebTransport.protocol`](/de/docs/Web/API/WebTransport/protocol), um das ausgewählte Protokoll abzurufen.

## Beispiele

### Antwort-Header auslesen

Dieses Beispiel zeigt, wie Sie beim Einrichten einer Sitzung einen benutzerdefinierten Header senden und anschließend einen Header aus der Antwort des Servers auslesen können.

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  const transport = new WebTransport(url, {
    // Custom request headers
    headers: { Authorization: "Bearer abc123" },
  });

  // responseHeaders is null until the session is established
  console.log(transport.responseHeaders); // null

  await transport.ready;

  // Log all the response headers
  for (const [name, value] of transport.responseHeaders) {
    console.log(`${name}: ${value}`);
  }

  // Read a specific header
  const sessionId = transport.responseHeaders.get("X-Session-Id");
  console.log(`Session ID: ${sessionId}`);

  return transport;
}

initTransport(url);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Konstruktoroption `headers` von `WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport#headers)
- [`WebTransport.protocol`](/de/docs/Web/API/WebTransport/protocol)
