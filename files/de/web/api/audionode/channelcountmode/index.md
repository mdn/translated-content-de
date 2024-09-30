---
title: "AudioNode: channelCountMode-Eigenschaft"
short-title: channelCountMode
slug: Web/API/AudioNode/channelCountMode
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die `channelCountMode`-Eigenschaft der [`AudioNode`](/de/docs/Web/API/AudioNode)-Schnittstelle repräsentiert einen enumerierten Wert, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen.

## Wert

Die möglichen Werte des enumerierten Wertes `channelCountMode` und ihre Bedeutungen sind:

- `max`

  - : Die Anzahl der Kanäle entspricht der maximalen Anzahl der Kanäle aller Verbindungen.
    In diesem Fall wird `channelCount` ignoriert und es erfolgt nur ein Hochmischen.

    Die folgenden Kinder von AudioNode haben diesen Wert standardmäßig: [`GainNode`](/de/docs/Web/API/GainNode), [`DelayNode`](/de/docs/Web/API/DelayNode), [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode), [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode).

- `clamped-max`

  - : Die Anzahl der Kanäle entspricht der maximalen Anzahl der Kanäle aller Verbindungen, begrenzt auf den Wert von `channelCount`.

    Die folgenden Kinder von AudioNode haben diesen Wert standardmäßig: [`PannerNode`](/de/docs/Web/API/PannerNode), [`ConvolverNode`](/de/docs/Web/API/ConvolverNode), [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)

- `explicit`

  - : Die Anzahl der Kanäle wird durch den Wert von `channelCount` definiert.

    Die folgenden Kinder von AudioNode haben diesen Wert standardmäßig: [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode), [`AnalyserNode`](/de/docs/Web/API/AnalyserNode), [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode), [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode)

> [!NOTE]
> In älteren Versionen der Spezifikation war der Standardwert für einen [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode) `max`.

## Beispiele

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.channelCountMode = "explicit";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
