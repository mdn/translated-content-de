---
title: Grundlagen der Web-Audio-Räumlichkeit
slug: Web/API/Web_Audio_API/Web_audio_spatialization_basics
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Web Audio API")}}

Zusätzlich zu seiner umfangreichen Vielfalt an Soundverarbeitungsoptionen (und anderen) bietet die Web Audio API auch Möglichkeiten, um den Unterschied im Klang zu simulieren, wenn ein Zuhörer sich um eine Schallquelle bewegt, zum Beispiel das Panning, wenn Sie sich in einem 3D-Spiel um eine Schallquelle bewegen.
Der offizielle Begriff dafür ist **Räumlichkeit**, und dieser Artikel behandelt die Grundlagen der Implementierung eines solchen Systems.

## Grundlagen der Räumlichkeit

In Web Audio werden komplexe 3D-Räumlichkeiten mithilfe des [`PannerNode`](/de/docs/Web/API/PannerNode) erstellt, der in einfachen Worten im Wesentlichen aus einer Menge cooler Mathematik besteht, um Audio in einem 3D-Raum erscheinen zu lassen.
Denken Sie an Geräusche, die über Sie hinwegfliegen, sich von hinten anschleichen oder vor Ihnen entlang bewegen.
So etwas in der Art.

Es ist wirklich nützlich für WebXR und Spiele.
In 3D-Räumen ist es der einzige Weg, realistische Audioeffekte zu erzielen. Bibliotheken wie [three.js](https://threejs.org/) und [A-frame](https://aframe.io/) nutzen sein Potenzial im Umgang mit Sound.
Es ist erwähnenswert, dass Sie den Sound nicht unbedingt in einem vollen 3D-Raum bewegen müssen — Sie könnten auch nur mit einer 2D-Ebene arbeiten, sodass, wenn Sie ein 2D-Spiel planen, dies immer noch der Node wäre, den Sie suchen.

> [!NOTE]
> Es gibt auch einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode), der für die häufige Anwendung von einfachen Links-Rechts-Stereo-Panning-Effekten entwickelt wurde.
> Dieser ist viel einfacher zu verwenden, ist aber offensichtlich bei weitem nicht so vielseitig.
> Wenn Sie nur einen einfachen Stereo-Panning-Effekt wünschen, sollte unser [StereoPannerNode-Beispiel](https://mdn.github.io/webaudio-examples/stereo-panner-node/) ([Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/stereo-panner-node)) alles bieten, was Sie brauchen.

## 3D-Boom-Box-Demo

Um die 3D-Räumlichkeit zu demonstrieren, haben wir eine modifizierte Version der Boom-Box-Demo erstellt, die wir in unserem grundlegenden [Leitfaden zur Nutzung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) erstellt haben.
Sehen Sie sich die [3D-Räumlichkeits-Demo live an](https://mdn.github.io/webaudio-examples/spatialization/) (und sehen Sie sich auch den [Quellcode](https://github.com/mdn/webaudio-examples/tree/main/spatialization) an).

![Eine einfache Benutzeroberfläche mit einer gedrehten Boom-Box und Steuerelementen, um sie nach links und rechts sowie hinein und heraus zu bewegen und sie zu drehen.](web-audio-spatialization.png)

Die Boom-Box befindet sich in einem Raum (definiert durch die Ränder des Browser-Viewports), und in dieser Demo können wir sie mit den bereitgestellten Steuerelementen bewegen und drehen.
Wenn wir die Boom-Box bewegen, ändert sich der von ihr erzeugte Klang entsprechend: Er wird gepannt, wenn sie sich nach links oder rechts im Raum bewegt, oder leiser, wenn er weiter vom Benutzer entfernt wird oder gedreht wird, sodass die Lautsprecher von ihm wegzeigen, usw.
Dies wird erreicht, indem die verschiedenen Eigenschaften der `PannerNode`-Objektinstanz in Relation zu dieser Bewegung gesetzt werden, um Räumlichkeit zu emulieren.

> [!NOTE]
> Das Erlebnis ist viel besser, wenn Sie Kopfhörer verwenden oder ein Surround-Sound-System haben, das Sie an Ihren Computer anschließen können.

## Erstellen eines Audio-Listeners

Dann lassen Sie uns beginnen! Der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) (das Interface, von dem der [`AudioContext`](/de/docs/Web/API/AudioContext) erweitert wird) hat eine [`listener`](/de/docs/Web/API/BaseAudioContext/listener) Eigenschaft, die ein [`AudioListener`](/de/docs/Web/API/AudioListener)-Objekt zurückgibt.
Dies repräsentiert den Zuhörer der Szene, normalerweise Ihren Benutzer.
Sie können definieren, wo er sich im Raum befindet und in welche Richtung er schaut.
Er bleibt statisch. Der `pannerNode` kann dann seine Position relativ zur Position des Listeners berechnen.

Lassen Sie uns unseren Kontext und den Listener erstellen und die Position des Listeners so einstellen, dass sie eine Person emuliert, die in unseren Raum schaut:

```js
const audioCtx = new AudioContext();
const listener = audioCtx.listener;

const posX = window.innerWidth / 2;
const posY = window.innerHeight / 2;
const posZ = 300;

listener.positionX.value = posX;
listener.positionY.value = posY;
listener.positionZ.value = posZ - 5;
```

Wir könnten den Listener nach links oder rechts mit `positionX`, nach oben oder unten mit `positionY` oder in den oder aus dem Raum mit `positionZ` bewegen. Hier setzen wir den Listener in die Mitte des Viewports und leicht vor unserer Boom-Box. Wir können auch die Richtung einstellen, in die der Listener schaut. Die Standardwerte dafür funktionieren gut:

```js
listener.forwardX.value = 0;
listener.forwardY.value = 0;
listener.forwardZ.value = -1;
listener.upX.value = 0;
listener.upY.value = 1;
listener.upZ.value = 0;
```

Die Vorwärts-Eigenschaften repräsentieren die 3D-Koordinatenposition der Vorwärtsrichtung des Listeners (z.B. die Richtung, in die er schaut), während die Aufwärts-Eigenschaften die 3D-Koordinatenposition der Oberseite des Kopfes des Listeners repräsentieren.
Diese beiden zusammen können die Richtung schön festlegen.

## Erstellen eines Panner-Nodes

Lassen Sie uns unseren [`PannerNode`](/de/docs/Web/API/PannerNode) erstellen. Dieser hat eine ganze Reihe von Eigenschaften, die mit ihm verbunden sind. Schauen wir uns jede davon an:

Zu Beginn können wir das [`panningModel`](/de/docs/Web/API/PannerNode/panningModel) einstellen.
Dies ist der Räumlichkeitsalgorithmus, der verwendet wird, um die Position des Audios im 3D-Raum zu berechnen. Wir können dies auf folgende Weise einstellen:

`equalpower` — Die Standardeinstellung und die allgemeine Methode, wie das Panning ermittelt wird

`HRTF` — Dies steht für 'Head-related transfer function' und berücksichtigt den menschlichen Kopf, wenn ermittelt wird, woher der Klang kommt.

Ziemlich clevere Sachen. Verwenden wir das `HRTF`-Modell!

```js
const panningModel = "HRTF";
```

Die Eigenschaften [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle) und [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) spezifizieren, woher das Volumen kommt.
Standardmäßig sind beide 360 Grad.
Die Lautsprecher unserer Boom-Box werden kleinere Kegel haben, die wir definieren können.
Der innere Kegel ist dort, wo die Verstärkung (Lautstärke) immer maximal emuliert wird, und der äußere Kegel ist dort, wo die Verstärkung zu sinken beginnt.
Die Verstärkung wird um den Wert der [`coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) reduziert.
Lassen Sie uns Konstanten erstellen, die die Werte speichern, die wir später für diese Parameter verwenden werden:

```js
const innerCone = 60;
const outerCone = 90;
const outerGain = 0.3;
```

Der nächste Parameter ist [`distanceModel`](/de/docs/Web/API/PannerNode/distanceModel) — dies kann nur auf `linear`, `inverse` oder `exponential` gesetzt werden. Dies sind unterschiedliche Algorithmen, die verwendet werden, um das Volumen der Audioquelle zu verringern, wenn sie sich vom Zuhörer entfernt. Wir werden `linear` verwenden, da es einfach ist:

```js
const distanceModel = "linear";
```

Wir können eine maximale Distanz ([`maxDistance`](/de/docs/Web/API/PannerNode/maxDistance)) zwischen der Quelle und dem Zuhörer festlegen — das Volumen wird nicht weiter reduziert, wenn sich die Quelle über diesen Punkt hinaus entfernt.
Dies kann nützlich sein, da Sie feststellen könnten, dass Sie eine Entfernung emulieren möchten, aber das Volumen kann ausfallen und das ist eigentlich nicht das, was Sie wollen.
Standardmäßig sind es 10.000 (einheitenloser relativer Wert). Wir können dies beibehalten:

```js
const maxDistance = 10000;
```

Es gibt auch eine Referenzdistanz ([`refDistance`](/de/docs/Web/API/PannerNode/refDistance)), die von den Distanzmodellen verwendet wird.
Wir können diesen ebenfalls auf den Standardwert von `1` belassen:

```js
const refDistance = 1;
```

Dann gibt es den Abrollfaktor ([`rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor)) — wie schnell reduziert sich das Volumen, wenn sich der Panner vom Zuhörer entfernt.
Der Standardwert ist 1; lassen Sie uns diesen etwas größer machen, um unsere Bewegungen zu übertreiben.

```js
const rollOff = 10;
```

Jetzt können wir beginnen, die Position und Orientierung unserer Boom-Box einzustellen.
Dies ist ähnlich wie bei unserem Listener.
Dies sind auch die Parameter, die wir ändern werden, wenn die Steuerelemente unserer Benutzeroberfläche verwendet werden.

```js
const positionX = posX;
const positionY = posY;
const positionZ = posZ;

const orientationX = 0.0;
const orientationY = 0.0;
const orientationZ = -1.0;
```

Beachten Sie den negativen Wert bei unserer z-Orientierung — dies lässt die Boom-Box auf uns zu zeigen.
Ein positiver Wert würde die Schallquelle von uns weg zeigen lassen.

Verwenden wir den entsprechenden Konstruktor zum Erstellen unseres Panner-Nodes und geben alle die oben gesetzten Parameter ein:

```js
const panner = new PannerNode(audioCtx, {
  panningModel,
  distanceModel,
  positionX,
  positionY,
  positionZ,
  orientationX,
  orientationY,
  orientationZ,
  refDistance,
  maxDistance,
  rolloffFactor: rollOff,
  coneInnerAngle: innerCone,
  coneOuterAngle: outerCone,
  coneOuterGain: outerGain,
});
```

## Die Boom-Box bewegen

Jetzt werden wir unsere Boom-Box in unserem 'Raum' bewegen. Wir haben einige Steuerelemente eingerichtet, um dies zu tun.
Wir können sie nach links und rechts, oben und unten sowie vor und zurück bewegen; wir können sie auch drehen.
Die Schalldirektion kommt von den Lautsprechern an der Vorderseite der Boom-Box, sodass wir beim Drehen die Richtung des Klangs ändern können – z.B. ihn nach hinten projizieren, wenn die Boom-Box um 180 Grad gedreht und von uns weg zeigt.

Wir müssen ein paar Dinge für die Benutzeroberfläche einrichten.
Zuerst holen wir uns Referenzen zu den Elementen, die wir bewegen wollen, dann speichern wir Referenzen zu den Werten, die wir ändern werden, wenn wir [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) einrichten, um die Bewegung tatsächlich auszuführen.
Schließlich setzen wir einige Grenzen, sodass unsere Boom-Box sich nicht zu weit in irgendeine Richtung bewegt:

```js
const moveControls = document
  .querySelector("#move-controls")
  .querySelectorAll("button");
const boombox = document.querySelector(".boombox-body");

// the values for our CSS transforms
const transform = {
  xAxis: 0,
  yAxis: 0,
  zAxis: 0.8,
  rotateX: 0,
  rotateY: 0,
};

// set our bounds
const topBound = -posY;
const bottomBound = posY;
const rightBound = posX;
const leftBound = -posX;
const innerBound = 0.1;
const outerBound = 1.5;
```

Lassen Sie uns eine Funktion erstellen, die die Richtung, in die wir uns bewegen wollen, als Parameter annimmt und sowohl die CSS-Transformation modifiziert als auch die Position und Orientierungswerte unserer Panner-Node-Eigenschaften aktualisiert, um den Klang entsprechend zu ändern.

Beginnen wirmit unsere nach links, nach rechts, nach oben und nach unten Werten, da diese ziemlich einfach sind.
Wir bewegen die Boom-Box entlang dieser Achsen und aktualisieren die entsprechende Position.

```js
function moveBoombox(direction) {
  switch (direction) {
    case "left":
      if (transform.xAxis > leftBound) {
        transform.xAxis -= 5;
        panner.positionX.value -= 0.1;
      }
      break;
    case "up":
      if (transform.yAxis > topBound) {
        transform.yAxis -= 5;
        panner.positionY.value -= 0.3;
      }
      break;
    case "right":
      if (transform.xAxis < rightBound) {
        transform.xAxis += 5;
        panner.positionX.value += 0.1;
      }
      break;
    case "down":
      if (transform.yAxis < bottomBound) {
        transform.yAxis += 5;
        panner.positionY.value += 0.3;
      }
      break;
  }
}
```

Es verhält sich ähnlich mit unseren Vorwärts- und Rückwärtswerten auch:

```js
case 'back':
  if (transform.zAxis > innerBound) {
    transform.zAxis -= 0.01;
    panner.positionZ.value += 40;
  }
  break;
case 'forward':
  if (transform.zAxis < outerBound) {
    transform.zAxis += 0.01;
    panner.positionZ.value -= 40;
  }
  break;
```

Unsere Rotationswerte sind jedoch etwas komplexer, da wir den Klang _herum_ bewegen müssen.
Wir müssen nicht nur zwei Achsenwerte aktualisieren (z.B. wenn Sie ein Objekt um die x-Achse drehen, aktualisieren Sie die y- und z-Koordinaten für dieses Objekt), sondern wir müssen auch hierfür noch einige weitere mathematische Berechnungen anstellen.
Die Rotation ist ein Kreis und wir benötigen [`Math.sin`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sin) und [`Math.cos`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/cos), um uns zu helfen, diesen Kreis zu zeichnen.

Lassen Sie uns eine Rotationsrate einrichten, die wir später in einen Bogenmaßbereichswert umwandeln werden, um sie in `Math.sin` und `Math.cos` zu verwenden, wenn wir die neuen Koordinaten herausfinden möchten, sobald wir unsere Boom-Box drehen:

```js
// set up rotation constants
const rotationRate = 60; // bigger number equals slower sound rotation

const q = Math.PI / rotationRate; //rotation increment in radians
```

Wir können dies auch verwenden, um die gedrehten Grad zu berechnen, was bei den CSS-Transformationen, die wir erstellen müssen, hilfreich sein wird (beachten Sie, dass wir sowohl eine x- als auch eine y-Achse für die CSS-Transformationen benötigen):

```js
// get degrees for CSS
const degreesX = (q * 180) / Math.PI;
const degreesY = (q * 180) / Math.PI;
```

Schauen wir uns als Beispiel unsere Linksdrehung an. Wir müssen die x-Orientierung und die z-Orientierung der Panner-Koordinaten ändern, um uns bei unserer Linksdrehung um die y-Achse zu bewegen:

```js
case 'rotate-left':
  transform.rotateY -= degreesY;

  // 'left' is rotation about y-axis with negative angle increment
  z = panner.orientationZ.value*Math.cos(q) - panner.orientationX.value*Math.sin(q);
  x = panner.orientationZ.value*Math.sin(q) + panner.orientationX.value*Math.cos(q);
  y = panner.orientationY.value;

  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
  break;
```

Dies _ist_ etwas verwirrend, aber was wir tun, ist, sin und cos zu verwenden, um uns zu helfen, die kreisförmige Bewegung der Koordinaten für die Drehung der Boom-Box zu berechnen.

Wir können dies für alle Achsen tun. Wir müssen nur die richtigen Orientierungen auswählen, die aktualisiert werden sollen, und ob wir einen positiven oder negativen Anstieg wünschen.

```js
case 'rotate-right':
  transform.rotateY += degreesY;
  // 'right' is rotation about y-axis with positive angle increment
  z = panner.orientationZ.value*Math.cos(-q) - panner.orientationX.value*Math.sin(-q);
  x = panner.orientationZ.value*Math.sin(-q) + panner.orientationX.value*Math.cos(-q);
  y = panner.orientationY.value;
  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
  break;
case 'rotate-up':
  transform.rotateX += degreesX;
  // 'up' is rotation about x-axis with negative angle increment
  z = panner.orientationZ.value*Math.cos(-q) - panner.orientationY.value*Math.sin(-q);
  y = panner.orientationZ.value*Math.sin(-q) + panner.orientationY.value*Math.cos(-q);
  x = panner.orientationX.value;
  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
  break;
case 'rotate-down':
  transform.rotateX -= degreesX;
  // 'down' is rotation about x-axis with positive angle increment
  z = panner.orientationZ.value*Math.cos(q) - panner.orientationY.value*Math.sin(q);
  y = panner.orientationZ.value*Math.sin(q) + panner.orientationY.value*Math.cos(q);
  x = panner.orientationX.value;
  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
  break;
```

Noch eine letzte Sache — wir müssen das CSS aktualisieren und eine Referenz der letzten Bewegung für das Mausereignis aufbewahren.
Hier ist die abschließende `moveBoombox`-Funktion.

```js
function moveBoombox(direction, prevMove) {
  switch (direction) {
    case "left":
      if (transform.xAxis > leftBound) {
        transform.xAxis -= 5;
        panner.positionX.value -= 0.1;
      }
      break;
    case "up":
      if (transform.yAxis > topBound) {
        transform.yAxis -= 5;
        panner.positionY.value -= 0.3;
      }
      break;
    case "right":
      if (transform.xAxis < rightBound) {
        transform.xAxis += 5;
        panner.positionX.value += 0.1;
      }
      break;
    case "down":
      if (transform.yAxis < bottomBound) {
        transform.yAxis += 5;
        panner.positionY.value += 0.3;
      }
      break;
    case "back":
      if (transform.zAxis > innerBound) {
        transform.zAxis -= 0.01;
        panner.positionZ.value += 40;
      }
      break;
    case "forward":
      if (transform.zAxis < outerBound) {
        transform.zAxis += 0.01;
        panner.positionZ.value -= 40;
      }
      break;
    case "rotate-left":
      transform.rotateY -= degreesY;

      // 'left' is rotation about y-axis with negative angle increment
      z =
        panner.orientationZ.value * Math.cos(q) -
        panner.orientationX.value * Math.sin(q);
      x =
        panner.orientationZ.value * Math.sin(q) +
        panner.orientationX.value * Math.cos(q);
      y = panner.orientationY.value;

      panner.orientationX.value = x;
      panner.orientationY.value = y;
      panner.orientationZ.value = z;
      break;
    case "rotate-right":
      transform.rotateY += degreesY;
      // 'right' is rotation about y-axis with positive angle increment
      z =
        panner.orientationZ.value * Math.cos(-q) -
        panner.orientationX.value * Math.sin(-q);
      x =
        panner.orientationZ.value * Math.sin(-q) +
        panner.orientationX.value * Math.cos(-q);
      y = panner.orientationY.value;
      panner.orientationX.value = x;
      panner.orientationY.value = y;
      panner.orientationZ.value = z;
      break;
    case "rotate-up":
      transform.rotateX += degreesX;
      // 'up' is rotation about x-axis with negative angle increment
      z =
        panner.orientationZ.value * Math.cos(-q) -
        panner.orientationY.value * Math.sin(-q);
      y =
        panner.orientationZ.value * Math.sin(-q) +
        panner.orientationY.value * Math.cos(-q);
      x = panner.orientationX.value;
      panner.orientationX.value = x;
      panner.orientationY.value = y;
      panner.orientationZ.value = z;
      break;
    case "rotate-down":
      transform.rotateX -= degreesX;
      // 'down' is rotation about x-axis with positive angle increment
      z =
        panner.orientationZ.value * Math.cos(q) -
        panner.orientationY.value * Math.sin(q);
      y =
        panner.orientationZ.value * Math.sin(q) +
        panner.orientationY.value * Math.cos(q);
      x = panner.orientationX.value;
      panner.orientationX.value = x;
      panner.orientationY.value = y;
      panner.orientationZ.value = z;
      break;
  }

  boombox.style.transform =
    `translateX(${transform.xAxis}px) ` +
    `translateY(${transform.yAxis}px) ` +
    `scale(${transform.zAxis}) ` +
    `rotateY(${transform.rotateY}deg) ` +
    `rotateX(${transform.rotateX}deg)`;

  const move = prevMove || {};
  move.frameId = requestAnimationFrame(() => moveBoombox(direction, move));
  return move;
}
```

## Verkabelung unserer Steuerelemente

Die Verkabelung unserer Steuerknöpfe ist vergleichsweise einfach — jetzt können wir ein Mausereignis für unsere Steuerelemente abhören und diese Funktion ausführen sowie sie stoppen, wenn die Maus losgelassen wird:

```js
// for each of our controls, move the boombox and change the position values
moveControls.forEach((el) => {
  let moving;
  el.addEventListener(
    "mousedown",
    () => {
      const direction = this.dataset.control;
      if (moving && moving.frameId) {
        cancelAnimationFrame(moving.frameId);
      }
      moving = moveBoombox(direction);
    },
    false,
  );

  window.addEventListener(
    "mouseup",
    () => {
      if (moving && moving.frameId) {
        cancelAnimationFrame(moving.frameId);
      }
    },
    false,
  );
});
```

## Verbindung unseres Graphen

Unser HTML enthält das Audioelement, das vom Panner-Node beeinflusst werden soll.

```html
<audio src="myCoolTrack.mp3"></audio>
```

Wir müssen die Quelle von diesem Element erfassen und in die Web Audio API einleiten, indem wir den [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) verwenden.

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

Als Nächstes müssen wir unseren Audiographen verbinden. Wir verbinden unseren Eingang (den Track) mit unserem Modifikationsnode (dem Panner) und unserem Ziel (in diesem Fall den Lautsprechern).

```js
track.connect(panner).connect(audioCtx.destination);
```

Lassen Sie uns einen Abspielknopf erstellen, der beim Klicken das Audio je nach aktuellem Zustand abspielt oder pausiert.

```html
<button data-playing="false" role="switch">Play/Pause</button>
```

```js
// Select our play button
const playButton = document.querySelector("button");

playButton.addEventListener(
  "click",
  () => {
    // Check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    // Play or pause track depending on state
    if (playButton.dataset.playing === "false") {
      audioElement.play();
      playButton.dataset.playing = "true";
    } else if (playButton.dataset.playing === "true") {
      audioElement.pause();
      playButton.dataset.playing = "false";
    }
  },
  false,
);
```

Für einen intensiveren Überblick über das Abspielen/Steuern von Audio und Audiographen sehen Sie sich den [Leitfaden zur Nutzung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) an.

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel einen Einblick gegeben, wie Web Audio-Räumlichkeit funktioniert und was jede der [`PannerNode`](/de/docs/Web/API/PannerNode)-Eigenschaften bewirkt (es gibt davon einige).
Die Werte können manchmal schwer zu manipulieren sein und je nach Anwendungsfall kann es einige Zeit dauern, sie richtig einzustellen.

> [!NOTE]
> Es gibt leichte Unterschiede darin, wie die Audio-Räumlichkeit in verschiedenen Browsern klingt.
> Der Panner-Node macht einige sehr komplizierte mathematische Berechnungen im Hintergrund;
> es gibt eine [Anzahl von Tests hier](https://wpt.fyi/results/webaudio/the-audio-api/the-pannernode-interface?label=stable&aligned=true), sodass Sie den Status der inneren Arbeitsweise dieses Nodes auf verschiedenen Plattformen verfolgen können.

Erneut, Sie können [das endgültige Demo hier ansehen](https://mdn.github.io/webaudio-examples/spatialization/), und der [endgültige Quellcode ist hier](https://github.com/mdn/webaudio-examples/tree/main/spatialization) verfügbar.
Es gibt auch ein [CodePen-Demo](https://codepen.io/Rumyra/pen/MqayoK?editors=0100).

Wenn Sie mit 3D-Spielen und/oder WebXR arbeiten, ist es eine gute Idee, eine 3D-Bibliothek zu nutzen, um solche Funktionalität zu erstellen, anstatt all dies selbst von Grund auf zu tun.
In diesem Artikel haben wir unser eigenes erstellt, um Ihnen eine Vorstellung davon zu geben, wie es funktioniert, aber Sie sparen viel Zeit, wenn Sie den Vorteil von Arbeiten nutzen, die andere bereits vor Ihnen getan haben.
