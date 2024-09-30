---
title: "BaseAudioContext: sampleRate-Eigenschaft"
short-title: sampleRate
slug: Web/API/BaseAudioContext/sampleRate
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{ APIRef("Web Audio API") }}

Die `sampleRate`-Eigenschaft der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Schnittstelle gibt eine Gleitkommazahl zurück, die die Abtastrate in Samples pro Sekunde darstellt, die von allen Knoten in diesem Audiokontext verwendet wird. Diese Einschränkung bedeutet, dass Sample-Rate-Konverter nicht unterstützt werden.

## Wert

Eine Gleitkommazahl, die die Abtastrate des Audiokontexts in Samples pro Sekunde angibt.

## Beispiele

> [!NOTE]
> Für eine vollständige Implementierung von Web-Audio-Beispielen sehen Sie sich eine unserer
> Web Audio Demos im [MDN GitHub-Repo](https://github.com/mdn/webaudio-examples) an. Versuchen Sie, `audioCtx.sampleRate` in die Konsole Ihres Browsers einzugeben.

```js
const audioCtx = new AudioContext();
// Older webkit/blink browsers require a prefix

// …

console.log(audioCtx.sampleRate);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
