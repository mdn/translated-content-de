---
title: "BaseAudioContext: createWaveShaper()-Methode"
short-title: createWaveShaper()
slug: Web/API/BaseAudioContext/createWaveShaper
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `createWaveShaper()`-Methode der {{ domxref("BaseAudioContext") }}-Schnittstelle erstellt einen {{ domxref("WaveShaperNode") }}, der eine nichtlineare Verzerrung darstellt. Sie wird verwendet, um Verzerrungseffekte auf Ihr Audio anzuwenden.

> [!NOTE]
> Der {{domxref("WaveShaperNode.WaveShaperNode", "WaveShaperNode()")}}-Konstruktor ist der empfohlene Weg, um einen {{domxref("WaveShaperNode")}} zu erstellen; siehe [Creating an AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createWaveShaper()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("WaveShaperNode")}}.

## Beispiele

Das folgende Beispiel zeigt die Grundnutzung eines AudioContext zur Erstellung eines WaveShaper-Knotens. Für vollständigere praktische Beispiele bzw. Informationen schauen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

> [!NOTE]
> Sigmoid-Funktionen werden häufig für Verzerrungskurven verwendet
> aufgrund ihrer natürlichen Eigenschaften. Ihre S-Form hilft zum Beispiel dabei, ein
> sanfter klingendes Ergebnis zu erzeugen. Wir haben den untenstehenden Verzerrungskurvencode auf [Stack Overflow](https://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion) gefunden.

```js
const audioCtx = new AudioContext();
const distortion = audioCtx.createWaveShaper();

// …

function makeDistortionCurve(amount) {
  const k = typeof amount === "number" ? amount : 50;
  const n_samples = 44100;
  const curve = new Float32Array(n_samples);
  const deg = Math.PI / 180;

  for (let i = 0; i < n_samples; i++) {
    const x = (i * 2) / n_samples - 1;
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  }
  return curve;
}

// …

distortion.curve = makeDistortionCurve(400);
distortion.oversample = "4x";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
