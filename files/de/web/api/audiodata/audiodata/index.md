---
title: "AudioData: AudioData()-Konstruktor"
short-title: AudioData()
slug: Web/API/AudioData/AudioData
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`AudioData()`**-Konstruktor erstellt ein neues [`AudioData`](/de/docs/Web/API/AudioData)-Objekt, das eine einzelne Audioprobe darstellt.

## Syntax

```js-nolint
new AudioData(init)
```

### Parameter

- `init`
  - : Ein Objekt, das Folgendes enthält:
    - `format`
      - : Einer von:
        - "u8"
        - "s16"
        - "s32"
        - "f32"
        - "u8-planar"
        - "s16-planar"
        - "s32-planar"
        - "f32-planar"
    - `sampleRate`
      - : Eine Dezimalzahl, die die Abtastrate in Hz enthält.
    - `numberOfFrames`
      - : Eine Ganzzahl, die die Anzahl der Frames in dieser Probe enthält.
    - `numberOfChannels`
      - : Eine Ganzzahl, die die Anzahl der Kanäle in dieser Probe enthält.
    - `timestamp`
      - : Eine Ganzzahl, die die Zeit der Daten in Mikrosekunden angibt.
    - `data`
      - : Ein typisiertes Array der Audiodaten für diese Probe.
    - `transfer`
      - : Ein Array von {{jsxref("ArrayBuffer")}}s, die `AudioData` abkoppeln und übernehmen wird. Wenn das Array den das `data` unterstützende {{jsxref("ArrayBuffer")}} enthält, wird `AudioData` diesen Puffer direkt verwenden, anstatt daraus zu kopieren.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `init` in einem falschen Format vorliegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
