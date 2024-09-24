---
title: "AudioContext: Methode createMediaElementSource()"
short-title: createMediaElementSource()
slug: Web/API/AudioContext/createMediaElementSource
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die Methode `createMediaElementSource()` der {{ domxref("AudioContext") }}-Schnittstelle wird verwendet, um ein neues {{ domxref("MediaElementAudioSourceNode") }}-Objekt zu erstellen. Dazu wird ein vorhandenes HTML-{{htmlelement("audio")}}- oder {{htmlelement("video")}}-Element verwendet, dessen Audio dann abgespielt und manipuliert werden kann.

Weitere Details zu Media Element Audio Source Nodes finden Sie auf der Referenzseite des {{ domxref("MediaElementAudioSourceNode") }}.

## Syntax

```js-nolint
createMediaElementSource(myMediaElement)
```

### Parameter

- `myMediaElement`
  - : Ein {{domxref("HTMLMediaElement")}}-Objekt, das Sie in ein Audioverarbeitungsdiagramm einspeisen möchten, um es zu manipulieren.

### Rückgabewert

Ein {{domxref("MediaElementAudioSourceNode")}}.

## Beispiele

Dieses einfache Beispiel erstellt eine Quelle aus einem {{htmlelement("audio")}}-Element mit `createMediaElementSource()` und leitet dann das Audio durch einen {{ domxref("GainNode") }}, bevor es zur Wiedergabe in den {{ domxref("AudioDestinationNode") }} eingespeist wird. Wenn der Mauszeiger bewegt wird, wird die Funktion `updatePage()` aufgerufen, die den aktuellen Verstärkungswert als Verhältnis der Maus-Y-Position zur Gesamthöhe des Fensters berechnet. Sie können daher die Lautstärke der abgespielten Musik erhöhen und verringern, indem Sie den Mauszeiger nach oben und unten bewegen.

> [!NOTE]
> Sie können dieses [Beispiel live ansehen](https://mdn.github.io/webaudio-examples/media-source-buffer/), oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/media-source-buffer).

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
> Als Folge des Aufrufs von `createMediaElementSource()` wird die Audio-Wiedergabe des {{domxref("HTMLMediaElement")}} in das Verarbeitungsdiagramm des AudioContext umgeleitet. Das Abspielen/Pausieren des Mediums kann jedoch weiterhin über die Media-Element-API und die Steuerelemente des Players erfolgen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
