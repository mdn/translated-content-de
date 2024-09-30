---
title: "PeriodicWave: PeriodicWave()-Konstruktor"
short-title: PeriodicWave()
slug: Web/API/PeriodicWave/PeriodicWave
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
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
  - : Ein [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext), das den Audiokontext darstellt, dem der Knoten zugeordnet werden soll.
- `options` {{optional_inline}}

  - : Ein [`PeriodicWaveOptions`](https://webaudio.github.io/web-audio-api/#idl-def-PeriodicWaveOptions)-Wörterbuchobjekt, das die Eigenschaften definiert, die der `PeriodicWave` haben soll (es erbt auch die in den [PeriodicWaveConstraints](https://webaudio.github.io/web-audio-api/#idl-def-PeriodicWaveConstraints) definierten Optionen):

    - `real`
      - : Ein {{jsxref("Float32Array")}}, das die Kosinus-Terme enthält, die zur Bildung der Welle verwendet werden sollen (entspricht dem `real`-Parameter von [`BaseAudioContext.createPeriodicWave`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave)).
    - `imag`
      - : Ein {{jsxref("Float32Array")}}, das die Sinus-Terme enthält, die zur Bildung der Welle verwendet werden sollen (entspricht dem `imag`-Parameter von [`BaseAudioContext.createPeriodicWave`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave)).
    - `channelCount`
      - : Stellt eine Ganzzahl dar, die bestimmt, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu allen Eingängen des Knotens verwendet werden. (Siehe [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Die Verwendung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen enumerierten Wert dar, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich Standardwerte.)
    - `channelInterpretation`
      - : Stellt einen enumerierten Wert dar, der die Bedeutung der Kanäle beschreibt. Diese Interpretation bestimmt, wie Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) erfolgen wird. Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich Standardwerte.)

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
