---
title: "BaseAudioContext: createDynamicsCompressor() Methode"
short-title: createDynamicsCompressor()
slug: Web/API/BaseAudioContext/createDynamicsCompressor
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `createDynamicsCompressor()` Methode der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) Schnittstelle wird verwendet, um ein [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode) zu erstellen, das zur Komprimierung eines Audiosignals eingesetzt werden kann.

Kompression senkt die Lautstärke der lautesten Teile des Signals und erhöht die Lautstärke
der leisesten Teile. Insgesamt kann ein lauteres, reichhaltigeres und volleres Klangbild erreicht werden. Dies ist besonders wichtig in Spielen und musikalischen Anwendungen, bei denen gleichzeitig viele individuelle Klänge abgespielt werden, um den Gesamtpegel des Signals zu kontrollieren und ein Clipping (Verzerrung) des Audioausgangs zu vermeiden.

> [!NOTE]
> Der [`DynamicsCompressorNode()`](/de/docs/Web/API/DynamicsCompressorNode/DynamicsCompressorNode)
> Konstruktor ist die empfohlene Methode zum Erstellen eines [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode); siehe
> [Creating an AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createDynamicsCompressor()
```

### Parameter

Keine.

### Rückgabewert

Ein [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode).

## Beispiele

Der folgende Code zeigt eine einfache Verwendung von `createDynamicsCompressor()`, um einer Tonspur Kompression hinzuzufügen. Für ein vollständigeres Beispiel siehe unser [einfaches Kompressor-Beispiel](https://mdn.github.io/webaudio-examples/compressor-example/) ([Quellcode anzeigen](https://github.com/mdn/webaudio-examples/tree/main/compressor-example)).

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
