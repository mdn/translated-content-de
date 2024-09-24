---
title: "BaseAudioContext: createGain()-Methode"
short-title: createGain()
slug: Web/API/BaseAudioContext/createGain
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{ APIRef("Web Audio API") }}

Die `createGain()`-Methode der {{ domxref("BaseAudioContext") }}-Schnittstelle erstellt einen {{ domxref("GainNode") }}, der verwendet werden kann, um die gesamte Verstärkung (oder Lautstärke) des Audiografen zu steuern.

> [!NOTE]
> Der {{domxref("GainNode.GainNode", "GainNode()")}}-Konstruktor ist die empfohlene Methode zur Erstellung eines {{domxref("GainNode")}}; siehe [Erstellung eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createGain()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("GainNode")}}, der als Eingang eine oder mehrere Audioquellen annimmt und Audio ausgibt, dessen Lautstärke in Verstärkung (Lautstärke) auf ein durch den {{domxref("GainNode.gain")}}-Parameter auf [a-rate](/de/docs/Web/API/AudioParam#a-rate) festgelegtes Niveau angepasst wurde.

## Beispiele

Das folgende Beispiel zeigt die grundlegende Verwendung eines {{domxref("AudioContext")}}, um einen `GainNode` zu erstellen, der dann verwendet wird, um das Audio stummzuschalten und wieder hörbar zu machen, wenn eine Stummschalttaste angeklickt wird, indem der Wert der `gain`-Eigenschaft geändert wird.

Der untenstehende Ausschnitt würde so nicht funktionieren — für ein komplettes funktionierendes Beispiel schauen Sie sich unser [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo an ([Quellcode anzeigen](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js).)

```html
<div>
  <button class="mute">Stummschalttaste</button>
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
  console.error("getUserMedia wird von Ihrem Browser nicht unterstützt!");
}

source.connect(gainNode);
gainNode.connect(audioCtx.destination);

// …

mute.onclick = () => {
  if (mute.id === "") {
    // 0 bedeutet stumm. Wenn Sie noch etwas hören, stellen Sie sicher, dass
    // Sie Ihre Quelle nicht zusätzlich zur Verwendung des GainNode mit dem Ausgang verbunden haben.
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    mute.id = "activated";
    mute.textContent = "Wiederherstellen";
  } else {
    gainNode.gain.setValueAtTime(1, audioCtx.currentTime);
    mute.id = "";
    mute.textContent = "Stummschalten";
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
