---
title: "MediaStreamTrackProcessor: MediaStreamTrackProcessor() Konstruktor"
short-title: MediaStreamTrackProcessor()
slug: Web/API/MediaStreamTrackProcessor/MediaStreamTrackProcessor
l10n:
  sourceCommit: 62e6088450ab10db4697d190dd54d09dd9a0791a
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}

Der **`MediaStreamTrackProcessor()`** Konstruktor erstellt ein neues [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) Objekt, das die Quelle eines Video-[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Objekts konsumiert und einen Strom von [`VideoFrame`](/de/docs/Web/API/VideoFrame)s erzeugt.

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
      - : Eine ganze Zahl, die die maximale Anzahl der zu puffenden Medienframes angibt.

## Beispiele

Im folgenden Beispiel wird ein neuer `MediaStreamTrackProcessor` erstellt.

```js
const trackProcessor = new MediaStreamTrackProcessor({ track: videoTrack });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
