---
title: "PeriodicWave: PeriodicWave() Konstruktor"
short-title: PeriodicWave()
slug: Web/API/PeriodicWave/PeriodicWave
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Web Audio API")}}

Der **`PeriodicWave()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt eine neue Instanz eines [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)-Objekts.

## Syntax

```js-nolint
new PeriodicWave(context)
new PeriodicWave(context, options)
```

### Parameter

- `context`
  - : Ein [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext), der den Audio-Kontext darstellt, dem der Knoten zugeordnet werden soll.
- `options` {{optional_inline}}

  - : Ein
    [`PeriodicWaveOptions`](https://webaudio.github.io/web-audio-api/#idl-def-PeriodicWaveOptions)
    Wörterbuch-Objekt, das die Eigenschaften definiert, die der `PeriodicWave` haben soll (es erbt auch die in den [PeriodicWaveConstraints](https://webaudio.github.io/web-audio-api/#idl-def-PeriodicWaveConstraints) definierten Optionen):

    - `real`
      - : Ein {{jsxref("Float32Array")}} mit den Kosinus-Terms, die Sie verwenden möchten, um die Welle zu bilden (äquivalent zum `real`-Parameter von [`BaseAudioContext.createPeriodicWave`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave)).
    - `imag`
      - : Ein {{jsxref("Float32Array")}} mit den Sinus-Terms, die Sie verwenden möchten, um die Welle zu bilden (äquivalent zum `imag`-Parameter von [`BaseAudioContext.createPeriodicWave`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave)).
    - `channelCount`
      - : Repräsentiert eine Ganzzahl, die verwendet wird, um zu bestimmen, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu Eingängen zum Knoten genutzt werden. (Siehe [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Die Nutzung und genaue Definition hängt vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen enumerierten Wert, der beschreibt, wie die Kanäle zwischen den Ein- und Ausgängen des Knotens abgeglichen werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für mehr Informationen, einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt. Diese Interpretation definiert, wie Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) ablaufen wird. Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für mehr Informationen, einschließlich der Standardwerte.)

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
