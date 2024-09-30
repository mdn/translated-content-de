---
title: "MediaStreamEvent: MediaStreamEvent() Konstruktor"
short-title: MediaStreamEvent()
slug: Web/API/MediaStreamEvent/MediaStreamEvent
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Der **`MediaStreamEvent()`** Konstruktor erzeugt ein neues [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent)-Objekt.

## Syntax

```js-nolint
 new MediaStreamEvent(type, options)
```

### Werte

- `type`
  - : Ein String mit dem Namen des Ereignisses, wie `addstream` oder `removestream`.
- `options`
  - : Ein Objekt, das zusätzlich zu den im [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften die folgenden Eigenschaften haben kann:
    - `stream`
      - : Ein [`MediaStream`](/de/docs/Web/API/MediaStream), der den Stream darstellt, der vom Ereignis betroffen ist.

### Rückgabewert

Ein neues [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent)-Objekt.

## Beispiel

```js
// s is a MediaStream
const event = new MediaStreamEvent("addstream", { stream: s });
```

## Spezifikationen

_Dieses Feature ist nicht mehr Teil einer Spezifikation._

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
