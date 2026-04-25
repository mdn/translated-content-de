---
title: "WebTransportSendStream: getWriter() Methode"
short-title: getWriter()
slug: Web/API/WebTransportSendStream/getWriter
l10n:
  sourceCommit: 8f5f505dfb5c7907fb21f18efd03e07a2cd7b3c6
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`getWriter()`** Methode der [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream) Schnittstelle gibt ein neues `WebTransportWriter`-Objekt zurück und sperrt den Stream für diese Instanz. Solange der Stream gesperrt ist, kann kein anderer Writer erworben werden, bis dieser freigegeben wird.

`WebTransportWriter` ist eine Unterklasse von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter), die zusätzlich die Methoden `atomicWrite()` und `commit()` bereitstellt.

## Syntax

```js-nolint
getWriter()
```

### Parameter

Keine.

### Rückgabewert

Ein `WebTransportWriter`-Objektinstanz.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Stream ist bereits mit einem anderen Writer gesperrt.

## Beispiele

Das folgende Beispiel zeigt, wie ein unidirektionaler Stream über eine [`WebTransport`](/de/docs/Web/API/WebTransport) Verbindung geöffnet wird und `getWriter()` verwendet wird, um Datenblöcke darauf zu schreiben.

```js
const transport = new WebTransport("https://example.com/webtransport");
await transport.ready;

const stream = await transport.createUnidirectionalStream();
const writer = stream.getWriter();

const encoder = new TextEncoder();
await writer.write(encoder.encode("Hello"));
await writer.write(encoder.encode(", world!"));
await writer.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WritableStream.getWriter()`](/de/docs/Web/API/WritableStream/getWriter)
- [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)
- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
