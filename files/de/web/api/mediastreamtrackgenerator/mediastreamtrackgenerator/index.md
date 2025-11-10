---
title: "MediaStreamTrackGenerator: MediaStreamTrackGenerator() Konstruktor"
short-title: MediaStreamTrackGenerator()
slug: Web/API/MediaStreamTrackGenerator/MediaStreamTrackGenerator
l10n:
  sourceCommit: 62e6088450ab10db4697d190dd54d09dd9a0791a
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}{{Non-standard_Header}}

Der **`MediaStreamTrackGenerator()`** Konstruktor erstellt ein neues [`MediaStreamTrackGenerator`](/de/docs/Web/API/MediaStreamTrackGenerator)-Objekt, das einen Strom von Medienrahmen konsumiert und einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) bereitstellt.

## Syntax

```js-nolint
new MediaStreamTrackGenerator(options)
```

### Parameter

- `options` {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Ein Objekt, das die Eigenschaft `kind` enthält, die einer der folgenden Zeichenfolgen ist:
    - `"audio"`
      - : Gibt an, dass der Stream [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Objekte akzeptiert.
    - `"video"`
      - : Gibt an, dass der Stream [`VideoTrack`](/de/docs/Web/API/VideoTrack)-Objekte akzeptiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `init.kind` nicht `"video"` oder `"audio"` ist.

## Beispiele

Im folgenden Beispiel wird ein neuer Video-`MediaStreamTrackGenerator` erstellt.

```js
const trackGenerator = new MediaStreamTrackGenerator({ kind: "video" });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Insertable streams for MediaStreamTrack](https://developer.chrome.com/docs/capabilities/web-apis/mediastreamtrack-insertable-media-processing)
