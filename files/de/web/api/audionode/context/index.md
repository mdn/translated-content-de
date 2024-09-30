---
title: "AudioNode: context-Eigenschaft"
short-title: context
slug: Web/API/AudioNode/context
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte `context`-Eigenschaft der [`AudioNode`](/de/docs/Web/API/AudioNode)-Schnittstelle gibt den zugehörigen [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) zurück, also das Objekt, das den Verarbeitungsgraph repräsentiert, an dem der Knoten beteiligt ist.

## Wert

Das [`AudioContext`](/de/docs/Web/API/AudioContext)- oder [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)-Objekt, das zum Erstellen dieses `AudioNode` verwendet wurde.

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

- [Verwenden der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
