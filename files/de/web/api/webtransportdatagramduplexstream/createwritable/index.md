---
title: "WebTransportDatagramDuplexStream: createWritable() Methode"
short-title: createWritable()
slug: Web/API/WebTransportDatagramDuplexStream/createWritable
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`createWritable()`** Methode der [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) Schnittstelle gibt eine [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) Instanz zurück, die verwendet werden kann, um ausgehende Datagramme in den Transport zu schreiben.

Sie sollte anstelle der veralteten [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) Eigenschaft verwendet werden, wo sie unterstützt wird.

## Syntax

```js-nolint
createWritable()
createWritable(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften haben kann:
    - `sendGroup` {{optional_inline}}
      - : Eine [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup), unter der die Datagramme des zurückgegebenen Streams für Zwecke der `sendOrder` Priorisierung gruppiert werden sollen, oder `null`, wenn sie Teil der Standardgruppe sein sollen.
        Der Standardwert ist `null`.
    - `sendOrder` {{optional_inline}}
      - : Ein ganzzahliger Wert, der die Sendepriorität der Datagramme des zurückgegebenen Streams angibt.
        Innerhalb der `sendGroup` des Streams werden Bytes, die in höher priorisierten Streams und Datagrammen anstehen, vor denen mit niedrigerer Priorität gesendet.
        Der Standardwert ist `0`.

### Rückgabewert

Ein [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) Objekt, das [`WritableStream`](/de/docs/Web/API/WritableStream) erweitert.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zustand des Transports `"closed"` oder `"failed"` ist, oder wenn `sendGroup` angegeben ist (nicht null) und mit einem anderen `WebTransport` verbunden ist.

## Beschreibung

Die **`createWritable()`** Methode wird verwendet, um eine [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) Instanz zum Schreiben ausgehender Datagramme zu erstellen.

Die Methode ermöglicht es Ihnen, eine `sendGroup` anzugeben, die die Gruppe von Streams und Datagrammen definiert, zu der dieser Stream gehört, sowie eine `sendOrder`, die die relative Priorität dieses Streams innerhalb dieser Gruppe festlegt.
Innerhalb einer Gruppe werden Bytes, die in höher priorisierten Streams und Datagrammen anstehen, vor jeglichen Bytes aus niedrigeren Prioritäten gesendet.
Unterschiedliche Gruppen sollen als gleichwertig hinsichtlich der Bandbreitenzuteilung behandelt werden — obwohl die genaue Art und Weise, wie die Bandbreite zwischen Gruppen aufgeteilt wird, von der Implementierung festgelegt wird.

Die Übertragung ist unzuverlässig, das bedeutet, dass es keine Garantie gibt, dass jedes Datagramm gesendet wird oder dass sie in einer bestimmten Reihenfolge ankommen, obwohl Sie die Prioritätsreihenfolge definieren können.

## Beispiele

### Grundlegende Verwendung

Dieser Code zeigt, wie Sie die `createWritable()` Methode verwenden können, um ein `WebTransportDatagramsWritable` zu erhalten und es zu nutzen, um Daten zu senden.

Zunächst definieren wir eine Funktion, um unseren Stream-Erstellungscode zu kapseln.
Diese erstellt zuerst ein `WebTransport` und verwendet es mit `createWritable()`, um einen beschreibbaren Stream zu erstellen.
Beachten Sie, dass, da `createWritable()` nicht in allen Browsern unterstützt wird, der Code auf die [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) Eigenschaft zum Erstellen des beschreibbaren Streams zurückfällt.

`getWriter()` wird dann auf `writable` aufgerufen, um einen Writer zu erstellen.
Da die Zustellung von Datagrammen unzuverlässig ist, werden ausstehende ausgehende Datagramme, die nicht rechtzeitig gesendet werden, verworfen.
Aus diesem Grund wartet der Code auf das [`ready`](/de/docs/Web/API/WritableStreamDefaultWriter/ready) Promise des Writers vor jedem Schreiben, damit Datagramme nur geschrieben werden, wenn der zugrunde liegende Transport bereit ist, sie zu senden.
Es werden auch alle Fehler von `write()` abgefangen, da eine Ablehnung bedeutet, dass ein bestimmtes Datagramm nicht gesendet wurde.

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
