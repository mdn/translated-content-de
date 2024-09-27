---
title: "ReadableStreamBYOBReader: cancel()-Methode"
short-title: cancel()
slug: Web/API/ReadableStreamBYOBReader/cancel
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`cancel()`**-Methode der [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Stream abgebrochen wird.
Das Aufrufen dieser Methode signalisiert einen Verlust des Interesses an dem Stream durch einen Verbraucher.

> [!NOTE]
> Wenn der Leser aktiv ist, verhält sich die `cancel()`-Methode genauso wie für den zugehörigen Stream ([`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel)).

## Syntax

```js-nolint
cancel()
cancel(reason)
```

### Parameter

- `reason` {{optional_inline}}
  - : Ein für Menschen lesbarer Grund für die Stornierung. Die zugrunde liegende Quelle kann diesen verwenden oder auch nicht.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem im `reason`-Parameter angegebenen Wert aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Das Quellobjekt ist kein `ReadableStreamBYOBReader`, oder der Stream hat keinen Besitzer.

## Beispiele

Dieses Beispiel ruft die `cancel()`-Methode auf, wenn eine Schaltfläche gedrückt wird, und übergibt den String "user choice" als Grund. Das Versprechen wird eingelöst, wenn die Stornierung abgeschlossen ist.

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => console.log(`cancel complete`));
});
```

Beachten Sie, dass dieser Code im [Beispiel für die Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#result) ausgeführt werden kann (drücken Sie die Schaltfläche **Cancel stream**).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStreamBYOBReader()`](/de/docs/Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader)-Konstruktor
- [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
