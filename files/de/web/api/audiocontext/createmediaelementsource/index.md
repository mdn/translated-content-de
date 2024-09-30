---
title: "AudioContext: createMediaElementSource()-Methode"
short-title: createMediaElementSource()
slug: Web/API/AudioContext/createMediaElementSource
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die `createMediaElementSource()`-Methode der [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle wird verwendet, um ein neues [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)-Objekt zu erstellen, basierend auf einem vorhandenen HTML-{{htmlelement("audio")}}- oder {{htmlelement("video")}}-Element. Der Ton dieses Elements kann dann abgespielt und manipuliert werden.

Für weitere Details zu Media-Element-Audioquellknoten besuchen Sie die [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)-Referenzseite.

## Syntax

```js-nolint
createMediaElementSource(myMediaElement)
```

### Parameter

- `myMediaElement`
  - : Ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt, das Sie in einen Audioverarbeitungsgraphen einspeisen möchten, um es zu manipulieren.

### Rückgabewert

Ein [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode).

## Beispiele

In diesem einfachen Beispiel wird eine Quelle aus einem {{htmlelement("audio")}}-Element mit `createMediaElementSource()` erstellt, dann wird das Audio durch einen [`GainNode`](/de/docs/Web/API/GainNode) geleitet, bevor es in den [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) zur Wiedergabe eingespeist wird. Wenn der Mauszeiger bewegt wird, wird die Funktion `updatePage()` aufgerufen, die den aktuellen Gewinn als Verhältnis der Y-Position der Maus zur Gesamthöhe des Fensters berechnet. Sie können die Lautstärke der abgespielten Musik erhöhen und verringern, indem Sie den Mauszeiger nach oben und unten bewegen.

> [!NOTE]
> Sie können dieses [Beispiel auch live sehen](https://mdn.github.io/webaudio-examples/media-source-buffer/) oder den [Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/media-source-buffer).

```js
const audioCtx = new AudioContext();
const myAudio = document.querySelector("audio");

// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
const source = audioCtx.createMediaElementSource(myAudio);

// Create a gain node
const gainNode = audioCtx.createGain();

// Create variables to store mouse pointer Y coordinate
// and HEIGHT of screen
let curY;
const HEIGHT = window.innerHeight;

// Get new mouse pointer coordinates when mouse is moved
// then set new gain value
document.onmousemove = updatePage;

function updatePage(e) {
  curY = e.pageY;
  gainNode.gain.value = curY / HEIGHT;
}

// Connect the AudioBufferSourceNode to the gainNode
// and the gainNode to the destination, so we can play the
// music and adjust the volume using the mouse cursor
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

> [!NOTE]
> Durch den Aufruf von `createMediaElementSource()` wird die Audio-Wiedergabe vom [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) in den Verarbeitungs-Graphen des AudioContext umgeleitet. Das Abspielen/Pausieren des Mediums kann weiterhin über die Media-Element-API und die Player-Steuerelemente erfolgen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
