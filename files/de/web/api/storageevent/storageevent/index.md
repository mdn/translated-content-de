---
title: "StorageEvent: StorageEvent() Konstruktor"
short-title: StorageEvent()
slug: Web/API/StorageEvent/StorageEvent
l10n:
  sourceCommit: cec2a003b670c686f1df5dba16d3b02073ad6711
---

{{ApiRef("Web Storage API")}}

Der **`StorageEvent()`** Konstruktor erstellt ein neues [`StorageEvent`](/de/docs/Web/API/StorageEvent) Objekt.

## Syntax

```js-nolint
new StorageEvent(type)
new StorageEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Typs des `StorageEvent`. Es ist case-sensitiv und Browser setzen es auf `storage`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften hat:
    - `key` {{optional_inline}}
      - : Ein String, der den Schlüssel für das geänderte Speicherelement darstellt. Standardmäßig `null`.
    - `oldValue` {{optional_inline}}
      - : Ein String, der den ursprünglichen Wert des Speicherelements enthält. Standardmäßig `null`.
    - `newValue` {{optional_inline}}
      - : Ein String mit dem neuen Wert des `key`. Standardmäßig `null`.
    - `url`
      - : Ein String mit der URL des Dokuments, dessen Speicher sich geändert hat.
    - `storageArea` {{optional_inline}}
      - : Ein [`Storage`](/de/docs/Web/API/Storage) Objekt, das den betroffenen Speicher repräsentiert. Standardmäßig `null`.

### Rückgabewert

Ein neues [`StorageEvent`](/de/docs/Web/API/StorageEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
