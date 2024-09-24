---
title: "BaseAudioContext: Methode createDynamicsCompressor()"
short-title: createDynamicsCompressor()
slug: Web/API/BaseAudioContext/createDynamicsCompressor
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die Methode `createDynamicsCompressor()` der {{domxref("BaseAudioContext")}}-Schnittstelle wird verwendet, um einen {{domxref("DynamicsCompressorNode")}} zu erstellen, der zur Anwendung von Kompression auf ein Audiosignal genutzt werden kann.

Kompression verringert die Lautstärke der lautesten Teile des Signals und erhöht die Lautstärke der leisesten Teile. Insgesamt kann ein lauteres, reicheres und voller klingendes Ergebnis erzielt werden. Dies ist besonders in Spielen und musikalischen Anwendungen wichtig, in denen viele einzelne Klänge gleichzeitig abgespielt werden. Hier möchten Sie die gesamte Signalstärke kontrollieren und Verzerrungen des Audioausgangs vermeiden.

> [!NOTE]
> Der Konstruktor {{domxref("DynamicsCompressorNode.DynamicsCompressorNode", "DynamicsCompressorNode()")}}
> ist die empfohlene Methode, um einen {{domxref("DynamicsCompressorNode")}} zu erstellen; siehe
> [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createDynamicsCompressor()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("DynamicsCompressorNode")}}.

## Beispiele

Der folgende Code zeigt die einfache Verwendung von `createDynamicsCompressor()`, um einem Audiotrack Kompression hinzuzufügen. Für ein vollständigeres Beispiel sehen Sie sich unser [einfaches Kompressor-Beispiel](https://mdn.github.io/webaudio-examples/compressor-example/) ([Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/compressor-example)) an.

```js
// Erstellen Sie einen MediaElementAudioSourceNode
// Speisen Sie das HTMLMediaElement in ihn ein
const source = audioCtx.createMediaElementSource(myAudio);

// Erstellen Sie einen Kompressor-Knoten
const compressor = audioCtx.createDynamicsCompressor();
compressor.threshold.setValueAtTime(-50, audioCtx.currentTime);
compressor.knee.setValueAtTime(40, audioCtx.currentTime);
compressor.ratio.setValueAtTime(12, audioCtx.currentTime);
compressor.attack.setValueAtTime(0, audioCtx.currentTime);
compressor.release.setValueAtTime(0.25, audioCtx.currentTime);

// Verbinden Sie den AudioBufferSourceNode mit dem Ziel
source.connect(audioCtx.destination);

button.onclick = () => {
  const active = button.getAttribute("data-active");
  if (active === "false") {
    button.setAttribute("data-active", "true");
    button.textContent = "Kompression entfernen";

    source.disconnect(audioCtx.destination);
    source.connect(compressor);
    compressor.connect(audioCtx.destination);
  } else if (active === "true") {
    button.setAttribute("data-active", "false");
    button.textContent = "Kompression hinzufügen";

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
