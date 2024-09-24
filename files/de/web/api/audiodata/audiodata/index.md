---
title: "AudioData: AudioData()-Konstruktor"
short-title: AudioData()
slug: Web/API/AudioData/AudioData
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`AudioData()`**-Konstruktor erstellt ein neues {{domxref("AudioData")}}-Objekt, das eine einzelne Audio-Probe darstellt.

## Syntax

```js-nolint
new AudioData(init)
```

### Parameter

- `init`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `format`
      - : Eines von:
        - "u8"
        - "s16"
        - "s32"
        - "f32"
        - "u8-planar"
        - "s16-planar"
        - "s32-planar"
        - "f32-planar"
    - `sampleRate`
      - : Ein Dezimalwert, der die Abtastrate in Hz enthält.
    - `numberOfFrames`
      - : Eine ganze Zahl, die die Anzahl von Frames in dieser Probe enthält.
    - `numberOfChannels`
      - : Eine ganze Zahl, die die Anzahl der Kanäle in dieser Probe enthält.
    - `timestamp`
      - : Eine ganze Zahl, die die Zeit der Daten in Mikrosekunden angibt.
    - `data`
      - : Ein typisiertes Array der Audiodaten für diese Probe.
    - `transfer`
      - : Ein Array von {{jsxref("ArrayBuffer")}}s, die `AudioData` abnimmt und in Besitz nimmt. Wenn das Array den {{jsxref("ArrayBuffer")}} enthält, der `data` unterstützt, wird `AudioData` diesen Puffer direkt verwenden, anstatt ihn zu kopieren.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `init` in einem falschen Format vorliegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
