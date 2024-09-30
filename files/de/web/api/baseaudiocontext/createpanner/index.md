---
title: "BaseAudioContext: createPanner()-Methode"
short-title: createPanner()
slug: Web/API/BaseAudioContext/createPanner
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `createPanner()`-Methode der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Schnittstelle wird verwendet, um einen neuen [`PannerNode`](/de/docs/Web/API/PannerNode) zu erstellen, der zur räumlichen Anordnung eines eingehenden Audiostreams im 3D-Raum genutzt wird.

Der Panner-Knoten ist in Bezug auf den [`AudioListener`](/de/docs/Web/API/AudioListener) der AudioContext (definiert durch das [`AudioContext.listener`](/de/docs/Web/API/BaseAudioContext/listener)-Attribut) räumlich angeordnet, welcher die Position und Orientierung der Person darstellt, die das Audio hört.

> [!NOTE]
> Der [`PannerNode()`](/de/docs/Web/API/PannerNode/PannerNode)-Konstruktor ist der empfohlene Weg, um einen [`PannerNode`](/de/docs/Web/API/PannerNode) zu erstellen; siehe [Anlegen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createPanner()
```

### Parameter

Keine.

### Rückgabewert

Ein [`PannerNode`](/de/docs/Web/API/PannerNode).

## Beispiele

Im folgenden Beispiel sehen Sie, wie die `createPanner()`-Methode, [`AudioListener`](/de/docs/Web/API/AudioListener) und [`PannerNode`](/de/docs/Web/API/PannerNode) verwendet werden können, um die Audiowiedergabe zu steuern. Im Allgemeinen wird die Position im 3D-Raum definiert, die Ihr Audio-Listener und Panner (Quelle) anfangs einnehmen, und dann wird die Position von einem oder beiden während der Nutzung der Anwendung aktualisiert. Beispielsweise könnte eine Figur in einer Spielwelt bewegt werden, wobei die Audioausgabe realistisch verändert wird, wenn sich die Figur einem Musikspieler wie einem Stereo näher oder weiter entfernt. Im Beispiel sehen Sie, wie dies durch die Funktionen `moveRight()`, `moveLeft()`, etc. gesteuert wird, welche neue Werte für die Panner-Position über die `PositionPanner()`-Funktion setzen.

Um eine vollständige Implementierung zu sehen, schauen Sie sich unser [Panner-Node-Beispiel](https://mdn.github.io/webaudio-examples/panner-node/) ([Quellcode anzeigen](https://github.com/mdn/webaudio-examples/tree/main/panner-node)) an — dieses Demo versetzt Sie in den 2.5D "Raum aus Metall", in dem Sie einen Track auf einem Boom Box abspielen können und dann um diese herumgehen, um zu sehen, wie sich der Klang verändert!

Beachten Sie, wie wir eine Funktionsweiseerkennung nutzen, um dem Browser entweder die neueren Eigenschaftswerte (wie [`AudioListener.forwardX`](/de/docs/Web/API/AudioListener/forwardX)) zur Positionsbestimmung zu geben, wenn er diese unterstützt, oder ältere Methoden (wie [`AudioListener.setOrientation()`](/de/docs/Web/API/AudioListener/setOrientation)), wenn diese unterstützt werden, aber die neuen Eigenschaften nicht.

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
> Um herauszufinden, welche Positionswerte auf den Listener und Panner angewendet werden sollen, damit der Klang den visuellen Darstellungen auf dem Bildschirm entspricht, ist eine ganze Menge Mathematik erforderlich, aber mit etwas Experimentieren gewöhnen Sie sich bald daran.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
