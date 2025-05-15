---
title: "MediaStreamTrackProcessor: MediaStreamTrackProcessor() Konstruktor"
short-title: MediaStreamTrackProcessor()
slug: Web/API/MediaStreamTrackProcessor/MediaStreamTrackProcessor
l10n:
  sourceCommit: a61be259435257328a25c462cb0f42bc91981a6f
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}

Der **`MediaStreamTrackProcessor()`**-Konstruktor erstellt ein neues [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor)-Objekt, das die Quelle eines Video-[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekts konsumiert und einen Strom von [`VideoFrame`](/de/docs/Web/API/VideoFrame)s generiert.

## Syntax

```js-nolint
new MediaStreamTrackProcessor(options)
```

### Parameter

- `options`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `track`
      - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack).
    - `maxBufferSize` {{optional_inline}}
      - : Eine ganze Zahl, die die maximale Anzahl an zu puffernden Medienframes angibt.

## Beispiele

Im folgenden Beispiel wird ein neuer `MediaStreamTrackProcessor` erstellt.

```js
const trackProcessor = new MediaStreamTrackProcessor({ track: videoTrack });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
