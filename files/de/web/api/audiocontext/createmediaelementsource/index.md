---
title: "AudioContext: createMediaElementSource()-Methode"
short-title: createMediaElementSource()
slug: Web/API/AudioContext/createMediaElementSource
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die `createMediaElementSource()`-Methode der [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle wird verwendet, um ein neues [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)-Objekt zu erstellen, ausgehend von einem bestehenden HTML-{{htmlelement("audio")}}- oder {{htmlelement("video")}}-Element, wobei der Ton abgespielt und manipuliert werden kann.

Für weitere Details über Media Element Audio Source Nodes sehen Sie sich die [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)-Referenzseite an.

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

Dieses einfache Beispiel erstellt eine Quelle aus einem {{htmlelement("audio")}}-Element mithilfe von `createMediaElementSource()`, leitet dann den Ton durch einen [`GainNode`](/de/docs/Web/API/GainNode), bevor er in den [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) zur Wiedergabe eingespeist wird. Wenn der Mauszeiger bewegt wird, wird die Funktion `updatePage()` aufgerufen, die den aktuellen Gain als Verhältnis des Maus-Y-Position zur gesamten Fensterhöhe berechnet. Dadurch können Sie die Lautstärke der laufenden Musik durch Bewegen des Mauszeigers nach oben oder unten erhöhen oder verringern.

> [!NOTE]
> Sie können sich dieses Beispiel auch [live ansehen](https://mdn.github.io/webaudio-examples/media-source-buffer/) oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/media-source-buffer).

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
> Durch den Aufruf von `createMediaElementSource()` wird die Audiowiedergabe von dem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) in den Verarbeitungsgrafen des AudioContext umgeleitet. Das Abspielen/Pausieren der Medien kann jedoch weiterhin über die Media-Element-API und die Player-Steuerelemente erfolgen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
