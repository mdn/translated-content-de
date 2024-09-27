---
title: "ConvolverNode: normalize-Eigenschaft"
short-title: normalize
slug: Web/API/ConvolverNode/normalize
l10n:
  sourceCommit: ca4eca184b32202ce9fd80b29e1c2a68763b7f92
---

{{ APIRef("Web Audio API") }}

Die `normalize`-Eigenschaft des [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)-Interfaces
ist ein boolescher Wert, der steuert, ob die Impulsantwort aus dem Puffer
durch eine Gleichstrom-Normalisierung skaliert wird, wenn das `buffer` Attribut gesetzt ist,
oder nicht.

Der Standardwert ist `true`, um ein gleichmäßigeres Ausgangsniveau
des Convolvers zu erreichen, wenn er mit unterschiedlichen Impulsantworten geladen wird. Wenn `normalize`
auf `false` gesetzt wird, dann wird die Faltung ohne
Vorverarbeitung/Skalierung der Impulsantwort durchgeführt. Änderungen an diesem Wert werden erst
beim nächsten Setzen des `buffer` Attributs wirksam.

## Wert

Ein boolescher Wert.

## Beispiele

### Normalisierung ausschalten

Das folgende Beispiel erstellt einen Convolver-Knoten und weist ihm einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zu. Bevor der Audio-Puffer zugewiesen wird, wird `normalize` auf `false` gesetzt.

```js
const audioCtx = new AudioContext();
// ...

const convolver = audioCtx.createConvolver();
// ...

// Grab audio track via fetch() for convolver node
try {
  const response = await fetch(
    "https://mdn.github.io/voice-change-o-matic/audio/concert-crowd.ogg",
  );
  const arrayBuffer = await response.arrayBuffer();
  const decodedAudio = await audioCtx.decodeAudioData(arrayBuffer);
  convolver.normalize = false; // must be set before the buffer, to take effect
  convolver.buffer = decodedAudio;
} catch (error) {
  console.error(
    `Unable to fetch the audio file: ${name} Error: ${err.message}`,
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
