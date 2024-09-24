---
title: "StorageEvent: Methode initStorageEvent()"
short-title: initStorageEvent()
slug: Web/API/StorageEvent/initStorageEvent
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ApiRef("Web Storage API")}}{{deprecated_header}}

Die Methode **`StorageEvent.initStorageEvent()`** wird verwendet, um den Wert eines {{ domxref("StorageEvent") }} zu initialisieren.

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
  - : Ein Boolean, der angibt, ob das Event im DOM aufsteigt oder nicht.
- `cancelable` {{optional_inline}}
  - : Ein Boolean, der angibt, ob das Event abgebrochen werden kann.
- `key` {{optional_inline}}
  - : Der Schlüssel, dessen Wert sich infolge dieses Events ändert.
- `oldValue` {{optional_inline}}
  - : Der alte Wert des Schlüssels.
- `newValue` {{optional_inline}}
  - : Der neue Wert des Schlüssels.
- `url` {{optional_inline}}
  - : Die URL des Dokuments, das die Änderung initiiert.
- `storageArea` {{optional_inline}}
  - : Das {{DOMxRef("Storage")}}-Objekt, das den Speicherbereich darstellt, in dem dieses Event aufgetreten ist.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Web Storage API", "", "", "nocode")}}
- Der Konstruktor, der anstelle dieser veralteten Methode verwendet werden sollte: {{domxref("StorageEvent.StorageEvent", "StorageEvent()")}}.
