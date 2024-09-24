---
title: "PeriodicWave: PeriodicWave()-Konstruktor"
short-title: PeriodicWave()
slug: Web/API/PeriodicWave/PeriodicWave
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Web Audio API")}}

Der **`PeriodicWave()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt eine neue
{{domxref("PeriodicWave")}}-Objektinstanz.

## Syntax

```js-nolint
new PeriodicWave(context)
new PeriodicWave(context, options)
```

### Parameter

- `context`
  - : Ein {{domxref("BaseAudioContext")}}, das den Audiokontext repräsentiert, mit dem der Knoten
    verbunden werden soll.
- `options` {{optional_inline}}

  - : Ein
    [`PeriodicWaveOptions`](https://webaudio.github.io/web-audio-api/#idl-def-PeriodicWaveOptions)
    Wörterbuchobjekt, das die Eigenschaften definiert, die Sie der `PeriodicWave` zuweisen möchten (es erbt auch die in den [PeriodicWaveConstraints](https://webaudio.github.io/web-audio-api/#idl-def-PeriodicWaveConstraints) definierten Optionen):

    - `real`
      - : Ein {{jsxref("Float32Array")}}, der die Kosinus-Terme enthält,
        die Sie zur Bildung der Welle verwenden möchten (entspricht dem `real`-Parameter von {{domxref("BaseAudioContext.createPeriodicWave")}}).
    - `imag`
      - : Ein {{jsxref("Float32Array")}}, der die Sinus-Terme enthält, die
        Sie zur Bildung der Welle verwenden möchten (entspricht dem `imag`-Parameter von {{domxref("BaseAudioContext.createPeriodicWave")}}).
    - `channelCount`
      - : Repräsentiert eine Ganzzahl, die bestimmt, wie viele Kanäle verwendet werden, wenn [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) Verbindungen zu beliebigen Eingängen des Knotens vorgenommen werden. (Siehe {{domxref("AudioNode.channelCount")}} für weitere Informationen.) Seine Verwendung und genaue
        Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen enumerierten Wert, der beschreibt, wie die Kanäle zwischen
        den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere
        Informationen einschließlich Standardwerte.)
    - `channelInterpretation`
      - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation wird definieren, wie das [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) durchgeführt wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        {{domxref("AudioNode.channelCountMode")}} für weitere Informationen einschließlich Standardwerte.)

### Rückgabewert

Eine neue {{domxref("PeriodicWave")}}-Objektinstanz.

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
