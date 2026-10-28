---
title: "PeriodicWave: Konstruktor PeriodicWave()"
short-title: PeriodicWave()
slug: Web/API/PeriodicWave/PeriodicWave
l10n:
  sourceCommit: 01501e37cc8a84b9193671f348ff2c7b10f5dffe
---

{{APIRef("Web Audio API")}}

Der **`PeriodicWave()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt eine neue Instanz eines [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)-Objekts.

## Syntax

```js-nolint
new PeriodicWave(context)
new PeriodicWave(context, options)
```

### Parameter

- `context`
  - : Ein [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext), der den Audiokontext darstellt, mit dem der Node verknüpft werden soll.
- `options` {{optional_inline}}
  - : Ein [`PeriodicWaveOptions`](https://webaudio.github.io/web-audio-api/#idl-def-PeriodicWaveOptions)-Dictionary-Objekt, das die gewünschten Eigenschaften des `PeriodicWave` definiert. Es übernimmt außerdem die Optionen, die im [PeriodicWaveConstraints](https://webaudio.github.io/web-audio-api/#idl-def-PeriodicWaveConstraints)-Dictionary definiert sind:
    - `real`
      - : Ein {{jsxref("Float32Array")}} mit den Kosinustermen, aus denen die Welle gebildet werden soll (entspricht dem Parameter `real` von [`BaseAudioContext.createPeriodicWave`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave)).
    - `imag`
      - : Ein {{jsxref("Float32Array")}} mit den Sinustermen, aus denen die Welle gebildet werden soll (entspricht dem Parameter `imag` von [`BaseAudioContext.createPeriodicWave`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave)).

### Rückgabewert

Eine neue Instanz eines [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)-Objekts.

## Beispiele

```js
const real = new Float32Array(2);
const imag = new Float32Array(2);
const ac = new AudioContext();

real[0] = 0;
imag[0] = 0;
real[1] = 1;
imag[1] = 0;

const wave = new PeriodicWave(ac, {
  real,
  imag,
  disableNormalization: false,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
