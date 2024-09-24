---
title: "BaseAudioContext: Methode createPanner()"
short-title: createPanner()
slug: Web/API/BaseAudioContext/createPanner
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die Methode `createPanner()` der {{ domxref("BaseAudioContext") }}-Schnittstelle wird verwendet, um ein neues {{domxref("PannerNode")}} zu erstellen, das dazu dient, einen ankommenden Audiostream im 3D-Raum zu räumlich darzustellen.

Der Panner-Knoten wird in Bezug auf den {{domxref("AudioListener") }} des AudioContext räumlich dargestellt (definiert durch das Attribut {{domxref("BaseAudioContext/listener", "AudioContext.listener")}}), das die Position und Orientierung der Person repräsentiert, die das Audio hört.

> [!NOTE]
> Der {{domxref("PannerNode.PannerNode", "PannerNode()")}}-Konstruktor ist der empfohlene Weg, um ein {{domxref("PannerNode")}} zu erstellen; siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createPanner()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("PannerNode")}}.

## Beispiele

Im folgenden Beispiel sehen Sie ein Beispiel dafür, wie die `createPanner()`-Methode, {{domxref("AudioListener")}} und {{domxref("PannerNode")}} verwendet würden, um die Audioräumlichkeit zu steuern. Im Allgemeinen werden Sie die Position im 3D-Raum definieren, die Ihr Audio-Listener und -Panner (Quelle) zunächst besetzen, und dann die Position eines oder beider davon aktualisieren, während die Anwendung verwendet wird. Sie könnten zum Beispiel eine Figur in einer Spielwelt bewegen und möchten, dass die Audioausgabe realistisch verändert wird, wenn sich Ihre Figur einem Musikabspielgerät wie einem Stereo nähert oder sich davon entfernt. Im Beispiel sehen Sie, wie dies durch die Funktionen `moveRight()`, `moveLeft()` usw. gesteuert wird, die neue Werte für die Pannerposition über die Funktion `PositionPanner()` setzen.

Um eine vollständige Implementierung zu sehen, schauen Sie sich unser [Panner-Node-Beispiel](https://mdn.github.io/webaudio-examples/panner-node/) an ([sehen Sie sich den Quellcode an](https://github.com/mdn/webaudio-examples/tree/main/panner-node)) — dieses Demo versetzt Sie in den 2.5D "Raum des Metalls", wo Sie einen Track auf einem Kassettenrekorder abspielen und dann um den Kassettenrekorder herumlaufen können, um zu sehen, wie sich der Klang verändert!

Beachten Sie, wie wir einige Feature-Erkennungen verwendet haben, um dem Browser entweder die neueren Eigenschaftswerte (wie {{domxref("AudioListener.forwardX")}}) für das Setzen der Position usw. zu geben, wenn dieser diese unterstützt, oder ältere Methoden (wie {{domxref("AudioListener.setOrientation()")}}), wenn dieser diese noch unterstützt, aber nicht die neuen Eigenschaften.

```js
// Einrichtung der Informationen zur Listener- und Panner-Position
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const xPos = Math.floor(WIDTH / 2);
const yPos = Math.floor(HEIGHT / 2);
const zPos = 295;

// andere Variablen definieren

const audioCtx = new AudioContext();

const panner = audioCtx.createPanner();
panner.panningModel = "HRTF";
panner.distanceModel = "inverse";
panner.refDistance = 1;
panner.maxDistance = 10000;
panner.rolloffFactor = 1;
panner.coneInnerAngle = 360;
panner.coneOuterAngle = 0;
panner.coneOuterGain = 0;

if (panner.orientationX) {
  panner.orientationX.setValueAtTime(1, audioCtx.currentTime);
  panner.orientationY.setValueAtTime(0, audioCtx.currentTime);
  panner.orientationZ.setValueAtTime(0, audioCtx.currentTime);
} else {
  panner.setOrientation(1, 0, 0);
}

const listener = audioCtx.listener;

if (listener.forwardX) {
  listener.forwardX.setValueAtTime(0, audioCtx.currentTime);
  listener.forwardY.setValueAtTime(0, audioCtx.currentTime);
  listener.forwardZ.setValueAtTime(-1, audioCtx.currentTime);
  listener.upX.setValueAtTime(0, audioCtx.currentTime);
  listener.upY.setValueAtTime(1, audioCtx.currentTime);
  listener.upZ.setValueAtTime(0, audioCtx.currentTime);
} else {
  listener.setOrientation(0, 0, -1, 0, 1, 0);
}

let source;

const play = document.querySelector(".play");
const stop = document.querySelector(".stop");

const boomBox = document.querySelector(".boom-box");

const listenerData = document.querySelector(".listener-data");
const pannerData = document.querySelector(".panner-data");

leftBound = -xPos + 50;
rightBound = xPos - 50;

xIterator = WIDTH / 150;

// Der Listener wird in diesem Demo immer an derselben Stelle sein

if (listener.positionX) {
  listener.positionX.setValueAtTime(xPos, audioCtx.currentTime);
  listener.positionY.setValueAtTime(yPos, audioCtx.currentTime);
  listener.positionZ.setValueAtTime(300, audioCtx.currentTime);
} else {
  listener.setPosition(xPos, yPos, 300);
}

listenerData.textContent = `Listener-Daten: X ${xPos} Y ${yPos} Z 300`;

// Der Panner wird sich bewegen, während sich die Boombox-Grafik auf dem Bildschirm bewegt
function positionPanner() {
  if (panner.positionX) {
    panner.positionX.setValueAtTime(xPos, audioCtx.currentTime);
    panner.positionY.setValueAtTime(yPos, audioCtx.currentTime);
    panner.positionZ.setValueAtTime(zPos, audioCtx.currentTime);
  } else {
    panner.setPosition(xPos, yPos, zPos);
  }
  pannerData.textContent = `Panner-Daten: X ${xPos} Y ${yPos} Z ${zPos}`;
}
```

> [!NOTE]
> In Bezug auf die Ermittlung, welche Positionswerte auf den
> Listener und Panner angewendet werden sollten, um den Ton an das anzupassen, was auf dem Bildschirm visuell passiert, ist einiges an Mathematik erforderlich, aber mit etwas Experimente werden Sie bald den Dreh raus haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
