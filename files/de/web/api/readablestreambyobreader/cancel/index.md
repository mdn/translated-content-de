---
title: "ReadableStreamBYOBReader: cancel() Methode"
short-title: cancel()
slug: Web/API/ReadableStreamBYOBReader/cancel
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`cancel()`** Methode der [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Stream abgebrochen wird.
Das Aufrufen dieser Methode signalisiert das Desinteresse eines Verbrauchers an dem Stream.

> [!NOTE]
> Wenn der Leser aktiv ist, verhält sich die `cancel()`-Methode genauso wie die für den zugehörigen Stream ([`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel)).

## Syntax

```js-nolint
cancel()
cancel(reason)
```

### Parameter

- `reason` {{optional_inline}}
  - : Ein menschenlesbarer Grund für die Stornierung. Die zugrunde liegende Quelle kann ihn verwenden oder nicht.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem im `reason`-Parameter angegebenen Wert erfüllt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Das Quellobjekt ist kein `ReadableStreamBYOBReader`, oder der Stream hat keinen Besitzer.

## Beispiele

Dieses Beispiel ruft die `cancel()`-Methode auf, wenn ein Button gedrückt wird, und übergibt den String "user choice" als Grund.
Das Promise wird aufgelöst, wenn die Stornierung abgeschlossen ist.

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => console.log(`cancel complete`));
});
```

Beachten Sie, dass dieser Code im [Verwenden von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#result)-Beispielcode ausgeführt werden kann (drücken Sie die **Cancel stream**-Taste).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStreamBYOBReader()`](/de/docs/Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader) Konstruktor
- [Verwenden von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
