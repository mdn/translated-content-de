---
title: "BaseAudioContext: Eigenschaft destination"
short-title: destination
slug: Web/API/BaseAudioContext/destination
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft **`destination`** der Schnittstelle [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) gibt einen [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) zurück, der das endgültige Ziel aller Audiodaten im Kontext darstellt. Häufig ist dies ein tatsächliches Audiowiedergabegerät, beispielsweise die Lautsprecher Ihres Geräts.

## Wert

Ein [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode).

## Beispiele

> [!NOTE]
> Ausführlichere Anwendungsbeispiele und Informationen finden Sie in unserer Demo [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic). Den relevanten Code finden Sie in [app.js, Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193).

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
