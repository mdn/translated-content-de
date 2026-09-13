---
title: "StorageEvent: Methode initStorageEvent()"
short-title: initStorageEvent()
slug: Web/API/StorageEvent/initStorageEvent
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ApiRef("Web Storage API")}}

Die **`StorageEvent.initStorageEvent()`**-Methode wird verwendet, um den Wert eines [`StorageEvent`](/de/docs/Web/API/StorageEvent) zu initialisieren.

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
  - : Der Name des Events.
- `canBubble` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob das Ereignis durch das DOM nach oben propagiert oder nicht.
- `cancelable` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann.
- `key` {{optional_inline}}
  - : Der Schlüssel, dessen Wert sich infolge dieses Ereignisses ändert.
- `oldValue` {{optional_inline}}
  - : Der alte Wert des Schlüssels.
- `newValue` {{optional_inline}}
  - : Der neue Wert des Schlüssels.
- `url` {{optional_inline}}
  - : Die URL des Dokuments, das die Änderung initiiert.
- `storageArea` {{optional_inline}}
  - : Das [`Storage`](/de/docs/Web/API/Storage)-Objekt, das den Speicherbereich repräsentiert, auf dem dieses Ereignis auftrat.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
- Der Konstruktor, den Sie anstelle dieser veralteten Methode verwenden sollten: [`StorageEvent()`](/de/docs/Web/API/StorageEvent/StorageEvent).
