---
title: "BaseAudioContext: Methode createStereoPanner()"
short-title: createStereoPanner()
slug: Web/API/BaseAudioContext/createStereoPanner
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die Methode `createStereoPanner()` des {{ domxref("BaseAudioContext") }}-Interfaces erstellt einen {{ domxref("StereoPannerNode") }}, der verwendet werden kann, um eine Stereo-Panorama-Einstellung auf eine Audioquelle anzuwenden. Es positioniert einen eingehenden Audiostrom in einem Stereo-Bild mittels eines [kostengünstigen Panorama-Algorithmus](https://webaudio.github.io/web-audio-api/#stereopanner-algorithm).

> [!NOTE]
> Der {{domxref("StereoPannerNode.StereoPannerNode", "StereoPannerNode()")}}-Konstruktor ist der empfohlene Weg, um einen {{domxref("StereoPannerNode")}} zu erstellen; siehe
> [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createStereoPanner()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("StereoPannerNode")}}.

## Beispiele

In unserem [StereoPannerNode-Beispiel](https://mdn.github.io/webaudio-examples/stereo-panner-node/) ([Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/stereo-panner-node)) haben wir ein einfaches {{htmlelement("audio")}}-Element zusammen mit einem Slider {{HTMLElement("input")}}, um den Panorama-Wert zu erhöhen und zu verringern. Im JavaScript erstellen wir einen {{domxref("MediaElementAudioSourceNode")}} und einen {{domxref("StereoPannerNode")}}, und verbinden die beiden miteinander mittels der `connect()`-Methode. Wir verwenden dann einen `oninput`-Ereignishandler, um den Wert des {{domxref("StereoPannerNode.pan")}}-Parameters zu ändern und den Panorama-Wert anzuzeigen, wenn der Slider bewegt wird.

Bewegt man den Slider nach links und rechts, während die Musik spielt, wird die Musik entsprechend auf die linken und rechten Lautsprecher der Ausgabe verschoben.

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
