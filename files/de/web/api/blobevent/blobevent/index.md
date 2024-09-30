---
title: "BlobEvent: BlobEvent() Konstruktor"
short-title: BlobEvent()
slug: Web/API/BlobEvent/BlobEvent
l10n:
  sourceCommit: 1c9d35561671086a47fa501a34ec7af2cf8182cf
---

{{APIRef("MediaStream Recording")}}

Der **`BlobEvent()`** Konstruktor gibt ein neu erstelltes [`BlobEvent`](/de/docs/Web/API/BlobEvent)-Objekt zurück, das mit einem assoziierten [`Blob`](/de/docs/Web/API/Blob) verbunden ist.

## Syntax

```js-nolint
new BlobEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist Groß-/Kleinschreibung beachten, und Browser setzen es immer auf `dataavailable`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `data`
      - : Der mit dem Ereignis assoziierte [`Blob`](/de/docs/Web/API/Blob).
    - `timecode` {{optional_inline}}
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der zur Initialisierung des Blob-Ereignisses verwendet wird.

### Rückgabewert

Ein neues [`BlobEvent`](/de/docs/Web/API/BlobEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`BlobEvent`](/de/docs/Web/API/BlobEvent)-Schnittstelle, zu der es gehört.
