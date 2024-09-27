---
title: "StorageEvent: initStorageEvent() Methode"
short-title: initStorageEvent()
slug: Web/API/StorageEvent/initStorageEvent
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ApiRef("Web Storage API")}}{{deprecated_header}}

Die **`StorageEvent.initStorageEvent()`** Methode wird verwendet, um den Wert eines [`StorageEvent`](/de/docs/Web/API/StorageEvent) zu initialisieren.

## Syntax

```js-nolint
initStorageEvent(type)
initStorageEvent(type, canBubble)
initStorageEvent(type, canBubble, cancelable)
initStorageEvent(type, canBubble, cancelable, key)
initStorageEvent(type, canBubble, cancelable, key, oldValue)
initStorageEvent(type, canBubble, cancelable, key, oldValue, newValue)
initStorageEvent(type, canBubble, cancelable, key, oldValue, newValue, url)
initStorageEvent(type, canBubble, cancelable, key, oldValue, newValue, url, storageArea)
```

### Parameter

- `typeArg`
  - : Der Name des Ereignisses.
- `canBubble` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob das Ereignis durch den DOM aufsteigt oder nicht.
- `cancelable` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann.
- `key` {{optional_inline}}
  - : Der Schlüssel, dessen Wert sich als Ergebnis dieses Ereignisses ändert.
- `oldValue` {{optional_inline}}
  - : Der alte Wert des Schlüssels.
- `newValue` {{optional_inline}}
  - : Der neue Wert des Schlüssels.
- `url` {{optional_inline}}
  - : Die URL des Dokuments, das die Änderung initiiert.
- `storageArea` {{optional_inline}}
  - : Das [`Storage`](/de/docs/Web/API/Storage)-Objekt, das den Speicherbereich darstellt, in dem dieses Ereignis aufgetreten ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
- Der Konstruktor, der anstelle dieser veralteten Methode verwendet werden sollte: [`StorageEvent()`](/de/docs/Web/API/StorageEvent/StorageEvent).
