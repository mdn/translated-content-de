---
title: "MediaStreamTrackProcessor: MediaStreamTrackProcessor() Konstruktor"
short-title: MediaStreamTrackProcessor()
slug: Web/API/MediaStreamTrackProcessor/MediaStreamTrackProcessor
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}

Der **`MediaStreamTrackProcessor()`** Konstruktor erstellt ein neues {{domxref("MediaStreamTrackProcessor")}} Objekt, das die Quelle eines {{domxref("MediaStreamTrack")}} Objekts nutzt und einen Stream von Medienframes erzeugt.

## Syntax

```js-nolint
new MediaStreamTrackProcessor(options)
```

### Parameter

- `options`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `track`
      - : Ein {{domxref("MediaStreamTrack")}}.
    - `maxBufferSize` {{optional_inline}}
      - : Eine ganze Zahl, die die maximale Anzahl der zu puffernden Medienframes angibt.

## Beispiele

Im folgenden Beispiel wird ein neuer `MediaStreamTrackProcessor` erstellt.

```js
const trackProcessor = new MediaStreamTrackProcessor({ track: videoTrack });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
