---
title: "AudioNode: Eigenschaft channelCountMode"
short-title: channelCountMode
slug: Web/API/AudioNode/channelCountMode
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die Eigenschaft `channelCountMode` des {{ domxref("AudioNode") }}-Interfaces stellt einen enumerierten Wert dar, der beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen.

## Wert

Die möglichen Werte des enumerierten Wertes `channelCountMode`, und deren Bedeutungen sind:

- `max`

  - : Die Anzahl der Kanäle entspricht der maximalen Anzahl der Kanäle aller Verbindungen.
    In diesem Fall wird `channelCount` ignoriert und es erfolgt nur ein Hochmischen.

    Die folgenden AudioNode-Kinder haben diesen Wert standardmäßig: {{domxref("GainNode")}}, {{domxref("DelayNode")}}, {{domxref("ScriptProcessorNode")}}, {{domxref("BiquadFilterNode")}}, {{domxref("WaveShaperNode")}}.

- `clamped-max`

  - : Die Anzahl der Kanäle entspricht der maximalen Anzahl der Kanäle aller Verbindungen, beschränkt auf den Wert von `channelCount`.

    Die folgenden AudioNode-Kinder haben diesen Wert standardmäßig: {{domxref("PannerNode")}}, {{domxref("ConvolverNode")}}, {{domxref("DynamicsCompressorNode")}}.

- `explicit`

  - : Die Anzahl der Kanäle wird durch den Wert von `channelCount` definiert.

    Die folgenden AudioNode-Kinder haben diesen Wert standardmäßig: {{domxref("AudioDestinationNode")}}, {{domxref("AnalyserNode")}}, {{domxref("ChannelSplitterNode")}}, {{domxref("ChannelMergerNode")}}.

> [!NOTE]
> In älteren Versionen der Spezifikation war der Standardwert für einen {{domxref("ChannelSplitterNode")}} `max`.

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
