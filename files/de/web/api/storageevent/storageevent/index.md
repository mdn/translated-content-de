---
title: "StorageEvent: StorageEvent() Konstruktor"
short-title: StorageEvent()
slug: Web/API/StorageEvent/StorageEvent
l10n:
  sourceCommit: cec2a003b670c686f1df5dba16d3b02073ad6711
---

{{ApiRef("Web Storage API")}}

Der **`StorageEvent()`** Konstruktor erstellt ein neues {{domxref("StorageEvent")}}-Objekt.

## Syntax

```js-nolint
new StorageEvent(type)
new StorageEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Typs des `StorageEvent`. Es ist groß- und kleinschreibungssensitiv, und Browser setzen ihn auf `storage`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften enthält:
    - `key` {{optional_inline}}
      - : Ein String, der den Schlüssel des geänderten Speicherobjekts darstellt. Standardwert ist `null`.
    - `oldValue` {{optional_inline}}
      - : Ein String, der den ursprünglichen Wert des Speicherobjekts enthält. Standardwert ist `null`.
    - `newValue` {{optional_inline}}
      - : Ein String mit dem neuen Wert des `key`. Standardwert ist `null`.
    - `url`
      - : Ein String mit der URL des Dokuments, dessen Speicher sich geändert hat.
    - `storageArea` {{optional_inline}}
      - : Ein {{DOMxRef("Storage")}}-Objekt, das den betroffenen Speicher darstellt. Standardwert ist `null`.

### Rückgabewert

Ein neues {{domxref("StorageEvent")}}-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Web Storage API", "", "", "nocode")}}
