---
title: "ReadableStreamBYOBReader: cancel()-Methode"
short-title: cancel()
slug: Web/API/ReadableStreamBYOBReader/cancel
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`cancel()`**-Methode der {{domxref("ReadableStreamBYOBReader")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Stream abgebrochen wird. Dieser Methodenaufruf signalisiert einen Verlust des Interesses an dem Stream durch einen Konsumenten.

> [!NOTE]
> Wenn der Leser aktiv ist, verhält sich die `cancel()`-Methode gleich wie die für den zugehörigen Stream ({{domxref("ReadableStream.cancel()")}}).

## Syntax

```js-nolint
cancel()
cancel(reason)
```

### Parameter

- `reason` {{optional_inline}}
  - : Ein für Menschen lesbarer Grund für die Stornierung. Die zugrunde liegende Quelle kann diesen verwenden oder auch nicht.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit dem im `reason`-Parameter angegebenen Wert erfüllt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Das Quellobjekt ist kein `ReadableStreamBYOBReader` oder der Stream hat keinen Besitzer.

## Beispiele

Dieses Beispiel ruft die `cancel()`-Methode auf, wenn eine Schaltfläche gedrückt wird, und übergibt den String "user choice" als Grund. Das Versprechen wird aufgelöst, wenn die Stornierung abgeschlossen ist.

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => console.log(`cancel complete`));
});
```

Beachten Sie, dass dieser Code in dem Beispielcode [Verwendung von lesbaren Byte-Strömen](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#result) ausgeführt werden kann (drücken Sie die **Cancel stream**-Schaltfläche).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ReadableStreamBYOBReader.ReadableStreamBYOBReader", "ReadableStreamBYOBReader()")}}-Konstruktor
- [Verwendung von lesbarem Byte-Stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
