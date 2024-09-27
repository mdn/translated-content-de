---
title: "BaseAudioContext: createGain()-Methode"
short-title: createGain()
slug: Web/API/BaseAudioContext/createGain
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{ APIRef("Web Audio API") }}

Die `createGain()`-Methode des [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Interfaces erstellt einen [`GainNode`](/de/docs/Web/API/GainNode), der verwendet werden kann, um die Gesamtverstärkung (oder Lautstärke) des Audiographen zu steuern.

> [!NOTE]
> Der [`GainNode()`](/de/docs/Web/API/GainNode/GainNode)-Konstruktor ist die empfohlene Methode zur Erstellung eines [`GainNode`](/de/docs/Web/API/GainNode); siehe [Creating an AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createGain()
```

### Parameter

Keine.

### Rückgabewert

Ein [`GainNode`](/de/docs/Web/API/GainNode), der als Eingabequellen ein oder mehrere Audiosignale akzeptiert und Audio ausgibt, dessen Lautstärke in der Verstärkung (Lautstärke) auf ein durch den [`GainNode.gain`](/de/docs/Web/API/GainNode/gain) [a-rate](/de/docs/Web/API/AudioParam#a-rate)-Parameter des Knotens spezifiziertes Niveau angepasst wurde.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines [`AudioContext`](/de/docs/Web/API/AudioContext), um einen `GainNode` zu erstellen, der dann verwendet wird, um das Audio stummzuschalten und die Stummschaltung aufzuheben, wenn eine Stummschalttaste durch Ändern des `gain`-Eigenschaftswerts angeklickt wird.

Der unten stehende Codeausschnitt funktioniert nicht wie angegeben - für ein vollständiges funktionierendes Beispiel schauen Sie sich unser [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo ([Quellcode anzeigen](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js).)

```html
<div>
  <button class="mute">Mute button</button>
</div>
```

```js
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
const mute = document.querySelector(".mute");
let source;

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia(
    // constraints - only audio needed for this app
    {
      audio: true,
    },

    // Success callback
    (stream) => {
      source = audioCtx.createMediaStreamSource(stream);
    },

    // Error callback
    (err) => {
      console.error(`The following gUM error occurred: ${err}`);
    },
  );
} else {
  console.error("getUserMedia not supported on your browser!");
}

source.connect(gainNode);
gainNode.connect(audioCtx.destination);

// …

mute.onclick = () => {
  if (mute.id === "") {
    // 0 means mute. If you still hear something, make sure you haven't
    // connected your source into the output in addition to using the GainNode.
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    mute.id = "activated";
    mute.textContent = "Unmute";
  } else {
    gainNode.gain.setValueAtTime(1, audioCtx.currentTime);
    mute.id = "";
    mute.textContent = "Mute";
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
