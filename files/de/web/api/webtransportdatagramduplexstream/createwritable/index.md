---
title: "WebTransportDatagramDuplexStream: createWritable() Methode"
short-title: createWritable()
slug: Web/API/WebTransportDatagramDuplexStream/createWritable
l10n:
  sourceCommit: c4ced66f871dd67ff683526ecc38e9eb7ebb5c9a
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`createWritable()`** Methode der [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) Schnittstelle gibt eine [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) Instanz zurück, die verwendet werden kann, um ausgehende Datagramme zum Transport zu schreiben.

Sie sollte anstelle der veralteten [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) Eigenschaft verwendet werden, wo sie unterstützt wird.

## Syntax

```js-nolint
createWritable()
createWritable(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `sendGroup` {{optional_inline}}
      - : Eine [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup), unter der die Datagramme des zurückgegebenen Streams für die Zwecke der `sendOrder`-Priorisierung gruppiert werden sollen, oder `null`, wenn sie Teil der Standardgruppe sein sollen.
        Der Standardwert ist `null`.
    - `sendOrder` {{optional_inline}}
      - : Ein ganzzahliger Wert, der die Sendepriorität der Datagramme des zurückgegebenen Streams angibt.
        Innerhalb der `sendGroup` des Streams werden Bytes, die in Streams und Datagrammen höherer Priorität eingereiht sind, vor denen mit niedrigerer Priorität gesendet.
        Der Standardwert ist `0`.

### Rückgabewert

Ein [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) Objekt, das von [`WritableStream`](/de/docs/Web/API/WritableStream) erbt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zustand des Transports `"closed"` oder `"failed"` ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `sendGroup` angegeben (nicht-null) ist und mit einem anderen `WebTransport` assoziiert ist.

## Beschreibung

Die **`createWritable()`** Methode wird verwendet, um eine [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) Instanz zu erstellen, um ausgehende Datagramme zu schreiben.

Die Methode ermöglicht es Ihnen, eine `sendGroup` festzulegen, die die Gruppe von Streams und Datagrammen definiert, zu der dieser Stream gehört, und eine `sendOrder`, die die relative Priorität dieses Streams innerhalb dieser Gruppe festlegt.
Innerhalb einer Gruppe werden Bytes, die in Streams und Datagrammen höherer Priorität eingereiht sind, vor Bytes von niedrigerer Priorität gesendet.
Es wird erwartet, dass verschiedene Gruppen gleich behandelt werden, um die Bandbreitenzuteilung — obwohl die genaue Art und Weise, wie Bandbreite zwischen Gruppen aufgeteilt wird, implementierungsabhängig ist.

Die Übertragung ist unzuverlässig, was bedeutet, dass es keine Garantie dafür gibt, dass jedes Datagramm gesendet wird, oder dass sie in einer bestimmten Reihenfolge ankommen, selbst wenn Sie die Prioritätsreihenfolge definieren können.

## Beispiele

### Grundlegende Verwendung

Dieser Code zeigt, wie Sie die `createWritable()` Methode verwenden können, um ein `WebTransportDatagramsWritable` zu erhalten und es zu verwenden, um Daten zu senden.

Zuerst definieren wir eine Funktion, um unseren Stream-Erstellungs-Code zu umhüllen.
Zuerst wird ein `WebTransport` konstruiert und mit `createWritable()` verwendet, um einen beschreibbaren Stream zu erstellen.
Da `createWritable()` nicht in allen Browsern unterstützt wird, stellt der Code auf die [`writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) Eigenschaft um, um den beschreibbaren Stream zu erstellen.

`getWriter()` wird dann auf `writable` aufgerufen, um einen Writer zu erstellen.
Da die Lieferung von Datagrammen unzuverlässig ist, werden in die Warteschlange gestellte ausgehende Datagramme, die nicht rechtzeitig gesendet werden, verworfen.
Aus diesem Grund wartet der Code das `ready`-Versprechen des Writers vor jedem Schreiben ab, sodass Datagramme nur geschrieben werden, wenn der zugrunde liegende Transport bereit ist, sie zu senden.
Es fängt auch alle Fehler von `write()` ab, da eine Ablehnung bedeutet, dass ein bestimmtes Datagramm nicht gesendet wurde.

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

Dieser Code zeigt, wie Sie die obige Methode verwenden können, indem Sie eine `sendOrder` von `1` in der Standard-Sendegruppe übergeben:

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

- [Streams API](/de/docs/Web/API/Streams_API)
- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
