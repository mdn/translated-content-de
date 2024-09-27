---
title: "BaseAudioContext: Methode createStereoPanner()"
short-title: createStereoPanner()
slug: Web/API/BaseAudioContext/createStereoPanner
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `createStereoPanner()`-Methode der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Schnittstelle erstellt einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode), der verwendet werden kann, um ein Audiosignal stereo zu positionieren.
Sie positioniert einen eingehenden Audiostream in einem Stereo-Bild unter Verwendung eines [kostengünstigen Panning-Algorithmus](https://webaudio.github.io/web-audio-api/#stereopanner-algorithm).

> [!NOTE]
> Der [`StereoPannerNode()`](/de/docs/Web/API/StereoPannerNode/StereoPannerNode)
> Konstruktor ist die empfohlene Methode, um einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode) zu erstellen; siehe
> [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createStereoPanner()
```

### Parameter

Keine.

### Rückgabewert

Ein [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode).

## Beispiele

In unserem [StereoPannerNode-Beispiel](https://mdn.github.io/webaudio-examples/stereo-panner-node/) ([siehe Quellcode](https://github.com/mdn/webaudio-examples/tree/main/stereo-panner-node)) HTML haben wir ein einfaches {{htmlelement("audio")}}-Element zusammen mit einem
Schieberegler {{HTMLElement("input")}}, um den Pan-Wert zu erhöhen und zu verringern. In dem JavaScript
erstellen wir einen [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) und einen
[`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode) und verbinden die beiden miteinander unter Verwendung der
`connect()`-Methode. Wir verwenden dann einen `oninput`-Event-Handler, um den Wert des [`StereoPannerNode.pan`](/de/docs/Web/API/StereoPannerNode/pan)-Parameters zu ändern und die Pan-Wert-Anzeige zu aktualisieren, wenn der Schieberegler bewegt wird.

Das Verschieben des Schiebereglers nach links und rechts, während die Musik abgespielt wird, verschiebt die Musik entsprechend zu den linken und rechten Lautsprechern der Ausgabe.

```js
const audioCtx = new AudioContext();
const myAudio = document.querySelector("audio");

const panControl = document.querySelector(".panning-control");
const panValue = document.querySelector(".panning-value");

// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
const source = audioCtx.createMediaElementSource(myAudio);

// Create a stereo panner
const panNode = audioCtx.createStereoPanner();

// Event handler function to increase panning to the right and left
// when the slider is moved

panControl.oninput = () => {
  panNode.pan.setValueAtTime(panControl.value, audioCtx.currentTime);
  panValue.textContent = panControl.value;
};

// connect the MediaElementAudioSourceNode to the panNode
// and the panNode to the destination, so we can play the
// music and adjust the panning using the controls
source.connect(panNode);
panNode.connect(audioCtx.destination);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
