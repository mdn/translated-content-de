---
title: "BaseAudioContext: createDynamicsCompressor()-Methode"
short-title: createDynamicsCompressor()
slug: Web/API/BaseAudioContext/createDynamicsCompressor
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{ APIRef("Web Audio API") }}

Die `createDynamicsCompressor()`-Methode der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Schnittstelle wird verwendet, um einen [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode) zu erstellen, der zur Anwendung von Kompression auf ein Audiosignal genutzt werden kann.

Die Kompression verringert die Lautstärke der lautesten Teile des Signals und erhöht die Lautstärke der leisesten Teile. Insgesamt kann ein lauteres, reichhaltigeres und volleres Klangbild erzielt werden. Dies ist besonders wichtig in Spielen und Musik-Anwendungen, bei denen eine große Anzahl einzelner Klänge gleichzeitig abgespielt wird und Sie den Gesamtpegel des Signals kontrollieren und helfen möchten, das Übersteuern (Verzerren) der Audioausgabe zu vermeiden.

> [!NOTE]
> Der [`DynamicsCompressorNode()`](/de/docs/Web/API/DynamicsCompressorNode/DynamicsCompressorNode)-Konstruktor ist die empfohlene Methode, um einen [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode) zu erstellen; siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createDynamicsCompressor()
```

### Parameter

Keine.

### Rückgabewert

Ein [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode).

## Beispiele

Der folgende Code zeigt, wie `createDynamicsCompressor()` verwendet wird, um Kompression zu einem Audiotrack hinzuzufügen. Für ein vollständigeres Beispiel sehen Sie sich unser [Grundlegendes Compressor-Beispiel](https://mdn.github.io/webaudio-examples/compressor-example/) ([Quellcode anzeigen](https://github.com/mdn/webaudio-examples/tree/main/compressor-example)) an.

```js
// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
const source = audioCtx.createMediaElementSource(myAudio);

// Create a compressor node
const compressor = audioCtx.createDynamicsCompressor();
compressor.threshold.setValueAtTime(-50, audioCtx.currentTime);
compressor.knee.setValueAtTime(40, audioCtx.currentTime);
compressor.ratio.setValueAtTime(12, audioCtx.currentTime);
compressor.attack.setValueAtTime(0, audioCtx.currentTime);
compressor.release.setValueAtTime(0.25, audioCtx.currentTime);

// connect the AudioBufferSourceNode to the destination
source.connect(audioCtx.destination);

button.onclick = () => {
  const active = button.getAttribute("data-active");
  if (active === "false") {
    button.setAttribute("data-active", "true");
    button.textContent = "Remove compression";

    source.disconnect(audioCtx.destination);
    source.connect(compressor);
    compressor.connect(audioCtx.destination);
  } else if (active === "true") {
    button.setAttribute("data-active", "false");
    button.textContent = "Add compression";

    source.disconnect(compressor);
    compressor.disconnect(audioCtx.destination);
    source.connect(audioCtx.destination);
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
