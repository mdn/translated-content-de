---
title: "BlobEvent: BlobEvent()-Konstruktor"
short-title: BlobEvent()
slug: Web/API/BlobEvent/BlobEvent
l10n:
  sourceCommit: 1c9d35561671086a47fa501a34ec7af2cf8182cf
---

{{APIRef("MediaStream Recording")}}

Der **`BlobEvent()`**-Konstruktor gibt ein neu erstelltes {{domxref("BlobEvent")}}-Objekt mit einem zugehörigen {{domxref("Blob")}} zurück.

## Syntax

```js-nolint
new BlobEvent(type, options)
```

### Parameter

- `type`
  - : Ein Zeichenfolge mit dem Namen des Ereignisses.
    Es ist Groß- und Kleinschreibung beachten und Browser setzen es immer auf `dataavailable`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `data`
      - : Das mit dem Ereignis verknüpfte {{domxref("Blob")}}.
    - `timecode` {{optional_inline}}
      - : Ein {{domxref("DOMHighResTimeStamp")}}, der zur Initialisierung des Blob-Ereignisses verwendet wird.

### Rückgabewert

Ein neues {{domxref("BlobEvent")}}-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("BlobEvent")}}-Interface, zu dem es gehört.
