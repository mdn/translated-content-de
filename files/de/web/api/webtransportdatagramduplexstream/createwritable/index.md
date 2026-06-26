---
title: "WebTransportDatagramDuplexStream: createWritable() Methode"
short-title: createWritable()
slug: Web/API/WebTransportDatagramDuplexStream/createWritable
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{SeeCompatTable}}

Die **`createWritable()`**-Methode des [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Interfaces gibt eine [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Instanz zurück, die zum Schreiben ausgehender Datagramme zum Transport verwendet werden kann.

Sie sollte anstelle der veralteten [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable)-Eigenschaft verwendet werden, wo sie unterstützt wird.

## Syntax

```js-nolint
createWritable()
createWritable(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften haben kann:
    - `sendGroup` {{optional_inline}}
      - : Ein [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup), unter dem die Datagramme des zurückgegebenen Streams zur Zwecke der `sendOrder`-Priorisierung gruppiert werden sollen, oder `null`, wenn sie Teil der Standardgruppe sein sollen. Der Standardwert ist `null`.
    - `sendOrder` {{optional_inline}}
      - : Ein ganzzahliger Wert, der die Sendepriorität der Datagramme des zurückgegebenen Streams angibt. Innerhalb der `sendGroup` des Streams werden die Bytes auf Streams mit höherer Priorität und Datagramme vor denen mit niedrigerer Priorität gesendet. Der Standardwert ist `0`.

### Rückgabewert

Ein [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Objekt, welches [`WritableStream`](/de/docs/Web/API/WritableStream) erweitert.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Status des Transports `"closed"` oder `"failed"` ist, oder wenn `sendGroup` angegeben ist (nicht null) und mit einem anderen `WebTransport` assoziiert ist.

## Beschreibung

Die **`createWritable()`**-Methode wird verwendet, um eine [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Instanz zum Schreiben ausgehender Datagramme zu erstellen.

Die Methode erlaubt es Ihnen, eine `sendGroup` anzugeben, die die Gruppe von Streams und Datagrammen definiert, zu der dieser Stream gehört, und eine `sendOrder`, die die relative Priorität dieses Streams innerhalb dieser Gruppe festlegt. Innerhalb einer Gruppe werden die Bytes, die auf Streams mit höherer Priorität und Datagrammen warten, vor den Bytes von niedrigeren gesendet. Verschiedene Gruppen sollten als gleichwertig für die Zwecke der Bandbreitenzuteilung behandelt werden — obwohl die genaue Art und Weise der Bandbreitenverteilung zwischen Gruppen implementierungsabhängig ist.

Die Übertragung ist unzuverlässig, was bedeutet, dass auch wenn Sie die Prioritätenfolge definieren können, es keine Garantie dafür gibt, dass jedes Datagramm gesendet wird oder dass sie in einer bestimmten Reihenfolge ankommen.

## Beispiele

### Grundlegende Verwendung

Dieser Code zeigt, wie Sie die `createWritable()`-Methode verwenden können, um ein `WebTransportDatagramsWritable` zu erhalten und es zum Senden von Daten zu nutzen.

Zuerst definieren wir eine Funktion, um unseren Stream-Erstellungscode zu kapseln. Diese konstruierst zuerst einen `WebTransport` und verwendet diesen mit `createWritable()`, um einen schreibbaren Stream zu erstellen. Beachten Sie, dass, weil `createWritable()` nicht in allen Browsern unterstützt wird, der Code auf die [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable)-Eigenschaft zurückfällt, um den schreibbaren zu erstellen.

`getWriter()` wird dann auf `writable` aufgerufen, um einen Schreiber zu erstellen. Da Datagrammlieferung unzuverlässig ist, werden ausgehende Datagramme, die nicht rechtzeitig gesendet werden, verworfen. Aus diesem Grund wartet der Code auf das [`ready`](/de/docs/Web/API/WritableStreamDefaultWriter/ready)-Versprechen des Schreibers, bevor jedes Schreiben durchgeführt wird, sodass Datagramme nur geschrieben werden, wenn der zugrunde liegende Transport bereit ist, sie zu senden. Es werden auch alle Fehler von `write()` abgefangen, da eine Ablehnung bedeutet, dass ein bestimmtes Datagramm nicht gesendet wurde.

```js
async function sendDatagrams(url, datagrams, writableOptions = {}) {
  const wt = new WebTransport(url);
  await wt.ready;
  const writable =
    typeof wt.datagrams.createWritable === "function"
      ? wt.datagrams.createWritable(writableOptions)
      : wt.datagrams.writable;
  const writer = writable.getWriter();
  for (const bytes of datagrams) {
    await writer.ready;
    writer.write(bytes).catch(() => {});
  }
}
```

Dieser Code zeigt, wie Sie die obige Methode verwenden könnten, indem Sie eine `sendOrder` von `1` in der Standard-Sendegruppe übergeben:

```js
const url = "https://example.com/webtransport";
const datagrams = [new Uint8Array([65, 66, 67]), new Uint8Array([68, 69, 70])];
await sendDatagrams(url, datagrams, { sendOrder: 1 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [Streams API](/de/docs/Web/API/Streams_API)
