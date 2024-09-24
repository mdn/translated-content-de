---
title: "AudioNode: context-Eigenschaft"
short-title: context
slug: Web/API/AudioNode/context
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte `context`-Eigenschaft des {{domxref("AudioNode")}}-Interfaces gibt den zugehörigen {{domxref("BaseAudioContext")}} zurück, das ist das Objekt, das den Verarbeitungsgraphen darstellt, an dem der Node beteiligt ist.

## Wert

Das {{domxref("AudioContext")}}- oder {{domxref("OfflineAudioContext")}}-Objekt, das verwendet wurde, um dieses `AudioNode` zu konstruieren.

## Beispiele

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();
oscillator.connect(gainNode).connect(audioCtx.destination);

console.log(oscillator.context); // AudioContext
console.log(oscillator.context === audioCtx); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
