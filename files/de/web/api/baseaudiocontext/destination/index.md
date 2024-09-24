---
title: "BaseAudioContext: Eigenschaft destination"
short-title: destination
slug: Web/API/BaseAudioContext/destination
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `destination`-Eigenschaft der {{ domxref("BaseAudioContext") }}-Schnittstelle gibt ein {{ domxref("AudioDestinationNode") }} zurück, das das endgültige Ziel aller Audiodaten im Kontext darstellt. Es repräsentiert oft ein tatsächliches Audio-Ausgabegerät, wie zum Beispiel die Lautsprecher Ihres Geräts.

## Wert

Ein {{ domxref("AudioDestinationNode") }}.

## Beispiele

> [!NOTE]
> Für umfassendere Beispiele und Informationen sehen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

```js
const audioCtx = new AudioContext();
// Ältere Webkit/Blink Browser benötigen ein Präfix

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

- [Using the Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
