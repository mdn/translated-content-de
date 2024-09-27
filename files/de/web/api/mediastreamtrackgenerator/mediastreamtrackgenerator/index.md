---
title: "MediaStreamTrackGenerator: MediaStreamTrackGenerator() Konstruktor"
short-title: MediaStreamTrackGenerator()
slug: Web/API/MediaStreamTrackGenerator/MediaStreamTrackGenerator
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}{{Non-standard_Header}}

Der **`MediaStreamTrackGenerator()`** Konstruktor erstellt ein neues [`MediaStreamTrackGenerator`](/de/docs/Web/API/MediaStreamTrackGenerator) Objekt, das einen Strom von Medien-Frames konsumiert und einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) bereitstellt.

## Syntax

```js-nolint
new MediaStreamTrackGenerator(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die Eigenschaft `kind` enthält, welche einer der folgenden Strings ist:
    - `"audio"`
      - : Gibt an, dass der Stream [`AudioTrack`](/de/docs/Web/API/AudioTrack) Objekte akzeptiert.
    - `"video"`
      - : Gibt an, dass der Stream [`VideoTrack`](/de/docs/Web/API/VideoTrack) Objekte akzeptiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `init.kind` nicht `"video"` oder `"audio"` ist.

## Beispiele

Im folgenden Beispiel wird ein neuer Video `MediaStreamTrackGenerator` erstellt.

```js
const trackGenerator = new MediaStreamTrackGenerator({ kind: "video" });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Insertable streams for MediaStreamTrack](https://developer.chrome.com/docs/capabilities/web-apis/mediastreamtrack-insertable-media-processing)
