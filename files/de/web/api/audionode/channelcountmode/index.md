---
title: "AudioNode: Eigenschaft channelCountMode"
short-title: channelCountMode
slug: Web/API/AudioNode/channelCountMode
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die Eigenschaft `channelCountMode` des [`AudioNode`](/de/docs/Web/API/AudioNode)-Interfaces repräsentiert einen enumerierten Wert, der beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen.

## Wert

Die möglichen Werte des enumerierten Wertes `channelCountMode` und ihre Bedeutungen sind:

- `max`

  - : Die Anzahl der Kanäle entspricht der maximalen Anzahl von Kanälen aller Verbindungen.
    In diesem Fall wird `channelCount` ignoriert und nur up-mixing durchgeführt.

    Die folgenden AudioNode-Kinder haben standardmäßig diesen Wert: [`GainNode`](/de/docs/Web/API/GainNode), [`DelayNode`](/de/docs/Web/API/DelayNode), [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode), [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode).

- `clamped-max`

  - : Die Anzahl der Kanäle entspricht der maximalen Anzahl von Kanälen aller Verbindungen, die auf den Wert von `channelCount` begrenzt ist.

    Die folgenden AudioNode-Kinder haben standardmäßig diesen Wert: [`PannerNode`](/de/docs/Web/API/PannerNode), [`ConvolverNode`](/de/docs/Web/API/ConvolverNode), [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)

- `explicit`

  - : Die Anzahl der Kanäle wird durch den Wert von `channelCount` definiert.

    Die folgenden AudioNode-Kinder haben standardmäßig diesen Wert: [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode), [`AnalyserNode`](/de/docs/Web/API/AnalyserNode), [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode), [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode)

> [!NOTE]
> In älteren Versionen der Spezifikation war der Standard für einen [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode) `max`.

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
