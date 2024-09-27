---
title: "BlobEvent: BlobEvent()-Konstruktor"
short-title: BlobEvent()
slug: Web/API/BlobEvent/BlobEvent
l10n:
  sourceCommit: 1c9d35561671086a47fa501a34ec7af2cf8182cf
---

{{APIRef("MediaStream Recording")}}

Der **`BlobEvent()`**-Konstruktor gibt ein neu erstelltes [`BlobEvent`](/de/docs/Web/API/BlobEvent)-Objekt mit einem zugehörigen [`Blob`](/de/docs/Web/API/Blob) zurück.

## Syntax

```js-nolint
new BlobEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Events.
    Er ist case-sensitive, und Browser setzen ihn immer auf `dataavailable`.
- `options`
  - : Ein Objekt, das _neben den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ folgende Eigenschaften haben kann:
    - `data`
      - : Das [`Blob`](/de/docs/Web/API/Blob), das mit dem Event verknüpft ist.
    - `timecode` {{optional_inline}}
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der zur Initialisierung des Blob-Events verwendet wird.

### Rückgabewert

Ein neues [`BlobEvent`](/de/docs/Web/API/BlobEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`BlobEvent`](/de/docs/Web/API/BlobEvent)-Interface, zu dem es gehört.
