---
title: "WebTransport: close() Methode"
short-title: close()
slug: Web/API/WebTransport/close
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`close()`** Methode der [`WebTransport`](/de/docs/Web/API/WebTransport) Schnittstelle schließt eine laufende WebTransport-Sitzung.

## Syntax

```js-nolint
close(info)
```

### Parameter

- `info` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `closeCode`
      - : Eine Zahl, die den Fehlercode für den Fehler darstellt.
    - `reason`
      - : Ein String, der den Grund für das Schließen des `WebTransport` darstellt.

### Rückgabewert

`undefined`.

### Ausnahmen

- [`WebTransportError`](/de/docs/Web/API/WebTransportError)
  - : Wird ausgelöst, wenn `close()` aufgerufen wird, während WebTransport sich im Verbindungsaufbau befindet.

## Beispiele

```js
const url = "https://example.com:4999/wt";
// Initialize transport connection
const transport = new WebTransport(url);

// ...

transport.close({
  closeCode: 17,
  reason: "CloseButtonPressed",
});
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
