---
title: "VideoTrackGenerator: VideoTrackGenerator() Konstruktor"
short-title: VideoTrackGenerator()
slug: Web/API/VideoTrackGenerator/VideoTrackGenerator
l10n:
  sourceCommit: 62e6088450ab10db4697d190dd54d09dd9a0791a
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}

Der **`VideoTrackGenerator()`** Konstruktor erstellt ein neues [`VideoTrackGenerator`](/de/docs/Web/API/VideoTrackGenerator) Objekt, das einen Strom von Medienrahmen verarbeitet und einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) bereitstellt.

## Syntax

```js-nolint
new VideoTrackGenerator()
```

## Beispiele

Im folgenden Beispiel wird ein neuer Video `VideoTrackGenerator` erstellt.

```js
const trackGenerator = new VideoTrackGenerator();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Insertable streams für MediaStreamTrack](https://developer.chrome.com/docs/capabilities/web-apis/mediastreamtrack-insertable-media-processing)
