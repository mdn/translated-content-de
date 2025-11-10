---
title: "PeriodicWave: PeriodicWave() Konstruktor"
short-title: PeriodicWave()
slug: Web/API/PeriodicWave/PeriodicWave
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Der **`PeriodicWave()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt eine neue
[`PeriodicWave`](/de/docs/Web/API/PeriodicWave)-Objektinstanz.

## Syntax

```js-nolint
new PeriodicWave(context)
new PeriodicWave(context, options)
```

### Parameter

- `context`
  - : Ein [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext), das den Audiokontext darstellt, mit dem der Knoten
    verknüpft werden soll.
- `options` {{optional_inline}}
  - : Ein
    [`PeriodicWaveOptions`](https://webaudio.github.io/web-audio-api/#idl-def-PeriodicWaveOptions)
    Dictionary-Objekt, das die Eigenschaften definiert, die Sie der `PeriodicWave`
    zuweisen möchten (Es erbt auch die Optionen, die im [PeriodicWaveConstraints](https://webaudio.github.io/web-audio-api/#idl-def-PeriodicWaveConstraints)
    Dictionary definiert sind.):
    - `real`
      - : Ein {{jsxref("Float32Array")}}, das die Cosinus-Terme enthält, die Sie zur Bildung der Welle verwenden möchten (entspricht dem `real`
        Parameter von [`BaseAudioContext.createPeriodicWave`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave)).
    - `imag`
      - : Ein {{jsxref("Float32Array")}}, das die Sinus-Terme enthält, die
        Sie zur Bildung der Welle verwenden möchten (entspricht dem `imag`-Parameter von
        [`BaseAudioContext.createPeriodicWave`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave)).
    - `channelCount`
      - : Stellt eine ganze Zahl dar, die verwendet wird, um zu bestimmen, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu allen Eingängen des Knotens verwendet werden. (Siehe
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Seine Verwendung und genaue
        Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen enumerierten Wert dar, der beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere
        Informationen, einschließlich Standardwerten.)
    - `channelInterpretation`
      - : Stellt einen enumerierten Wert dar, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation wird definieren, wie Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) durchgeführt wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich Standardwerte.)

### Rückgabewert

Eine neue [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)-Objektinstanz.

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
