---
title: "BaseAudioContext: Methode createPanner()"
short-title: createPanner()
slug: Web/API/BaseAudioContext/createPanner
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `createPanner()`-Methode der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Schnittstelle wird verwendet, um einen neuen [`PannerNode`](/de/docs/Web/API/PannerNode) zu erstellen, der verwendet wird, um einen eingehenden Audiostream im 3D-Raum zu räumlich zu gestalten.

Der Panner-Knoten ist in Bezug auf den [`AudioListener`](/de/docs/Web/API/AudioListener) des AudioContext räumlich positioniert (definiert durch das [`AudioContext.listener`](/de/docs/Web/API/BaseAudioContext/listener)-Attribut), das die Position und Orientierung der Person repräsentiert, die das Audio hört.

> [!NOTE]
> Der [`PannerNode()`](/de/docs/Web/API/PannerNode/PannerNode)-Konstruktor ist der empfohlene Weg, um einen [`PannerNode`](/de/docs/Web/API/PannerNode) zu erstellen; siehe
> [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createPanner()
```

### Parameter

Keine.

### Rückgabewert

Ein [`PannerNode`](/de/docs/Web/API/PannerNode).

## Beispiele

Im folgenden Beispiel sehen Sie, wie die `createPanner()`-Methode, [`AudioListener`](/de/docs/Web/API/AudioListener) und [`PannerNode`](/de/docs/Web/API/PannerNode) verwendet werden, um die Audio-Räumlierung zu steuern. In der Regel definieren Sie zunächst die Position im 3D-Raum, die Ihr Audio-Listener und Panner (Quelle) einnehmen, und aktualisieren dann die Position eines oder beider, während die Anwendung verwendet wird. Sie könnten zum Beispiel einen Charakter innerhalb einer Spielwelt bewegen und wünschen, dass die Lieferung von Audio sich realistisch ändert, wenn sich Ihr Charakter einem Musikspieler wie einem Stereo näher oder entfernt. Im Beispiel sehen Sie, wie dies durch die Funktionen `moveRight()`, `moveLeft()`, usw. gesteuert wird, die neue Werte für die Panner-Position über die `PositionPanner()`-Funktion festlegen.

Um eine vollständige Implementierung zu sehen, werfen Sie einen Blick auf unser [panner-node Beispiel](https://mdn.github.io/webaudio-examples/panner-node/) ([sehen Sie sich den Quellcode an](https://github.com/mdn/webaudio-examples/tree/main/panner-node)) — dieses Demo transportiert Sie in den 2.5D "Raum aus Metall", wo Sie einen Track auf einem Boom Box abspielen und dann um die Boom Box herumgehen können, um zu sehen, wie sich der Klang ändert!

Beachten Sie, wie wir einige Funktionserkennungen verwendet haben, um dem Browser entweder die neueren Eigenschaftswerte (wie [`AudioListener.forwardX`](/de/docs/Web/API/AudioListener/forwardX)) für die Positionierung zu geben, wenn er diese unterstützt, oder ältere Methoden (wie [`AudioListener.setOrientation()`](/de/docs/Web/API/AudioListener/setOrientation)), wenn er diese noch unterstützt, aber nicht die neuen Eigenschaften.

```js
// set up listener and panner position information
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const xPos = Math.floor(WIDTH / 2);
const yPos = Math.floor(HEIGHT / 2);
const zPos = 295;

// define other variables

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

// listener will always be in the same place for this demo

if (listener.positionX) {
  listener.positionX.setValueAtTime(xPos, audioCtx.currentTime);
  listener.positionY.setValueAtTime(yPos, audioCtx.currentTime);
  listener.positionZ.setValueAtTime(300, audioCtx.currentTime);
} else {
  listener.setPosition(xPos, yPos, 300);
}

listenerData.textContent = `Listener data: X ${xPos} Y ${yPos} Z 300`;

// panner will move as the boombox graphic moves around on the screen
function positionPanner() {
  if (panner.positionX) {
    panner.positionX.setValueAtTime(xPos, audioCtx.currentTime);
    panner.positionY.setValueAtTime(yPos, audioCtx.currentTime);
    panner.positionZ.setValueAtTime(zPos, audioCtx.currentTime);
  } else {
    panner.setPosition(xPos, yPos, zPos);
  }
  pannerData.textContent = `Panner data: X ${xPos} Y ${yPos} Z ${zPos}`;
}
```

> [!NOTE]
> Um herauszufinden, welche Positionswerte auf den Listener und den Panner angewendet werden sollen, damit der Klang zu dem passt, was auf dem Bildschirm visuell geschieht, ist einiges an Mathematik erforderlich, aber mit ein wenig Experimentieren werden Sie sich schnell daran gewöhnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
