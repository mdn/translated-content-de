---
title: "BaseAudioContext: createGain() Methode"
short-title: createGain()
slug: Web/API/BaseAudioContext/createGain
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{ APIRef("Web Audio API") }}

Die `createGain()`-Methode der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Schnittstelle erzeugt ein [`GainNode`](/de/docs/Web/API/GainNode), das verwendet werden kann, um die Gesamtverstärkung (oder Lautstärke) des Audiografen zu steuern.

> [!NOTE]
> Der [`GainNode()`](/de/docs/Web/API/GainNode/GainNode)-Konstruktor ist die empfohlene Methode zur Erstellung eines [`GainNode`](/de/docs/Web/API/GainNode); siehe
> [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createGain()
```

### Parameter

Keine.

### Rückgabewert

Ein [`GainNode`](/de/docs/Web/API/GainNode), das als Eingabe eine oder mehrere Audioquellen übernimmt und dessen Lautstärke in der Verstärkung (Lautstärke) auf ein durch den [`GainNode.gain`](/de/docs/Web/API/GainNode/gain) [a-rate](/de/docs/Web/API/AudioParam#a-rate)-Parameter spezifiziertes Niveau angepasst wurde.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines [`AudioContext`](/de/docs/Web/API/AudioContext) zur Erstellung eines `GainNode`, das dann verwendet wird, um den Ton stumm zu schalten und die Stummschaltung aufzuheben, wenn ein Stumm-Taste gedrückt wird, indem der Wert der `gain`-Eigenschaft geändert wird.

Das untenstehende Snippet würde nicht funktionieren, wie es ist — für ein vollständiges funktionierendes Beispiel, schauen Sie sich unser [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo an ([Quelltext anzeigen](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js).)

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
