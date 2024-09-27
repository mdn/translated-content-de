---
title: "BaseAudioContext: destination-Eigenschaft"
short-title: destination
slug: Web/API/BaseAudioContext/destination
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `destination`-Eigenschaft der Schnittstelle [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) liefert ein [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode), das das endgültige Ziel aller Audiodaten im Kontext darstellt. Diese repräsentiert häufig ein tatsächliches Audiowiedergabegerät, wie beispielsweise die Lautsprecher Ihres Geräts.

## Wert

Ein [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode).

## Beispiele

> [!NOTE]
> Für vollständigere angewandte Beispiele/Informationen schauen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic)-Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für den relevanten Code).

```js
const audioCtx = new AudioContext();
// Older webkit/blink browsers require a prefix

const oscillatorNode = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillatorNode.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
