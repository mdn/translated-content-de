---
title: Grundlagen der Web-Audio-Spatialisation
slug: Web/API/Web_Audio_API/Web_audio_spatialization_basics
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("Web Audio API")}}

Als ob die Web Audio API nicht schon genug vielfältige Soundverarbeitungs- (und andere) Optionen bieten würde, gibt es auch Möglichkeiten, die Unterschiede im Klang zu simulieren, wenn ein Zuhörer sich um eine Schallquelle herum bewegt, z.B. das Panning, wenn Sie sich in einem 3D-Spiel um eine Schallquelle herum bewegen. Der offizielle Begriff hierfür ist **Spatialisation**, und dieser Artikel behandelt die Grundlagen der Implementierung eines solchen Systems.

## Grundlagen der Spatialisation

Im Web Audio werden komplexe 3D-Spatialisationen mit dem [`PannerNode`](/de/docs/Web/API/PannerNode) erstellt, was in einfachen Worten im Grunde genommen richtig coole Mathematik ist, die Audio im 3D-Raum erscheinen lässt. Stellen Sie sich vor, Sounds fliegen über Sie hinweg, schleichen sich von hinten an oder bewegen sich vor Ihnen hin und her. Solche Dinge.

Es ist wirklich nützlich für WebXR und Gaming. In 3D-Räumen ist es die einzige Möglichkeit, realistischen Sound zu erreichen. Bibliotheken wie [three.js](https://threejs.org/) und [A-frame](https://aframe.io/) nutzen sein Potenzial, wenn es um den Umgang mit Sound geht. Es sei darauf hingewiesen, dass Sie den Sound nicht _zwangsläufig_ innerhalb eines vollständigen 3D-Raums bewegen müssen — Sie könnten sich auch nur an einer 2D-Ebene halten, sodass, wenn Sie ein 2D-Spiel planten, dies immer noch der Knoten wäre, den Sie suchen.

> [!NOTE]
> Es gibt auch einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode), der für den häufigen Anwendungsfall entwickelt wurde, einfache Links-Rechts-Stereo-Panning-Effekte zu erstellen. Dieser ist viel einfacher zu verwenden, aber natürlich nicht annähernd so vielseitig. Wenn Sie nur einen einfachen Stereo-Panning-Effekt wünschen, sollte unser [StereoPannerNode-Beispiel](https://mdn.github.io/webaudio-examples/stereo-panner-node/) ([Quellcode anzeigen](https://github.com/mdn/webaudio-examples/tree/main/stereo-panner-node)) Ihnen alles geben, was Sie brauchen.

## 3D-Boombox-Demo

Um die 3D-Spatialisation zu demonstrieren, haben wir eine modifizierte Version der Boombox-Demo erstellt, die wir in unserem grundlegenden [Verwenden der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)-Leitfaden erstellt haben. Sehen Sie sich die [3D-Spatialisation-Demo live an](https://mdn.github.io/webaudio-examples/spatialization/) (und sehen Sie sich auch den [Quellcode](https://github.com/mdn/webaudio-examples/tree/main/spatialization) an).

![Eine einfache Benutzeroberfläche mit einer gedrehten Boombox und Steuerungen, um sie nach links und rechts, hinein und heraus zu bewegen und sie zu drehen.](web-audio-spatialization.png)

Die Boombox befindet sich in einem Raum (definiert durch die Ränder des Browser-Viewports), und in dieser Demo können wir sie mit den bereitgestellten Steuerungen bewegen und drehen. Wenn wir die Boombox bewegen, ändert sich der von ihr erzeugte Sound entsprechend, er wird gepannt, wenn sie sich nach links oder rechts im Raum bewegt, oder wird leiser, wenn sie vom Benutzer weg bewegt wird oder so gedreht wird, dass die Lautsprecher von ihm weg weisen, usw. Dies wird erreicht, indem die verschiedenen Eigenschaften der `PannerNode`-Objektinstanz im Verhältnis zu dieser Bewegung gesetzt werden, um Spatialisation zu emulieren.

> [!NOTE]
> Die Erfahrung ist viel besser, wenn Sie Kopfhörer verwenden oder ein Surround-Sound-System haben, an das Sie Ihren Computer anschließen können.

## Erstellen eines Audiowehrnehmers

Legen Sie los! Der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) (die Schnittstelle, von der der [`AudioContext`](/de/docs/Web/API/AudioContext) erweitert wird) hat eine [`listener`](/de/docs/Web/API/BaseAudioContext/listener)-Eigenschaft, die ein [`AudioListener`](/de/docs/Web/API/AudioListener)-Objekt zurückgibt. Dieses repräsentiert den Zuhörer der Szene, in der Regel Ihren Benutzer. Sie können definieren, wo sie sich im Raum befinden und in welche Richtung sie blicken. Sie bleiben statisch. Der `pannerNode` kann dann seine Klangposition relativ zur Position des Hörers berechnen.

Lassen Sie uns unseren Kontext und Hörer erstellen und die Position des Hörers festlegen, um eine Person zu emulieren, die in unseren Raum schaut:

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

Wir könnten den Hörer nach links oder rechts mit `positionX`, nach oben oder unten mit `positionY` oder in den Raum hinein und heraus mit `positionZ` bewegen. Hier setzen wir den Hörer in die Mitte des Viewports und leicht vor unsere Boombox. Wir können auch die Richtung festlegen, in die der Hörer zeigt. Die Standardwerte hierfür funktionieren gut:

```js
listener.forwardX.value = 0;
listener.forwardY.value = 0;
listener.forwardZ.value = -1;
listener.upX.value = 0;
listener.upY.value = 1;
listener.upZ.value = 0;
```

Die Vorwärts-Eigenschaften repräsentieren die 3D-Koordinatenposition der Vorwärtsrichtung des Hörers (z.B. die Richtung, in die sie blicken), während die Aufwärts-Eigenschaften die 3D-Koordinatenposition des oberen Teils des Kopfes des Hörers repräsentieren. Diese beiden zusammen können die Richtung schön festlegen.

## Erstellen eines Pannerknotens

Erstellen wir unseren [`PannerNode`](/de/docs/Web/API/PannerNode). Dieser hat eine ganze Reihe von Eigenschaften, die mit ihm verbunden sind. Lassen Sie uns jede von ihnen ansehen:

Zu Beginn können wir das [`panningModel`](/de/docs/Web/API/PannerNode/panningModel) festlegen. Dies ist der Algorithmus zur Spatialisation, der verwendet wird, um das Audio im 3D-Raum zu positionieren. Wir können dies auf Folgendes setzen:

`equalpower` — Der Standard und die allgemeine Art, wie Panning berechnet wird

`HRTF` — Dies steht für 'Head-related transfer function' und versucht, den menschlichen Kopf zu berücksichtigen, wenn er berechnet, wo sich der Sound befindet.

Ziemlich clevere Sache. Lassen Sie uns das `HRTF`-Modell verwenden!

```js
const panningModel = "HRTF";
```

Die Eigenschaften [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle) und [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) bestimmen, von wo aus das Volumen ausgeht. Standardmäßig sind beide 360 Grad. Unsere Boombox-Lautsprecher haben kleinere Kegel, die wir definieren können. Der innere Kegel ist dort, wo der Gewinn (Lautstärke) immer maximal emuliert wird, und der äußere Kegel ist dort, wo der Gewinn zu sinken beginnt. Der Gewinn wird um den Wert der [`coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) reduziert. Lassen Sie uns Konstanten erstellen, die die Werte speichern, die wir später für diese Parameter verwenden werden:

```js
const innerCone = 60;
const outerCone = 90;
const outerGain = 0.3;
```

Der nächste Parameter ist [`distanceModel`](/de/docs/Web/API/PannerNode/distanceModel) — dieser kann nur auf `linear`, `inverse` oder `exponential` gesetzt werden. Dies sind verschiedene Algorithmen, die verwendet werden, um die Lautstärke der Audioquelle zu reduzieren, wenn sie sich vom Hörer entfernt. Wir werden `linear` verwenden, da es einfach ist:

```js
const distanceModel = "linear";
```

Wir können eine maximale Distanz ([`maxDistance`](/de/docs/Web/API/PannerNode/maxDistance)) zwischen der Quelle und dem Zuhörer festlegen — die Lautstärke wird nicht weiter reduziert, wenn sich die Quelle über diesen Punkt hinaus bewegt. Dies kann nützlich sein, da Sie möglicherweise eine Entfernung emulieren möchten, aber die Lautstärke könnte wegfallen und eigentlich ist das nicht das, was Sie wollen. Standardmäßig beträgt sie 10.000 (ein einheitsloser relativer Wert). Wir können es dabei belassen:

```js
const maxDistance = 10000;
```

Es gibt auch eine Referenzdistanz ([`refDistance`](/de/docs/Web/API/PannerNode/refDistance)), die von den Entfernungsmodellen verwendet wird. Wir können den Standardwert von `1` beibehalten:

```js
const refDistance = 1;
```

Dann gibt es den Roll-off-Faktor ([`rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor)) — wie schnell reduziert sich die Lautstärke, wenn der Panner sich vom Hörer wegbewegt. Der Standardwert ist 1; lassen Sie uns das etwas größer machen, um unsere Bewegungen zu betonen.

```js
const rollOff = 10;
```

Nun können wir unsere Position und Ausrichtung unserer Boombox festlegen. Das ist ziemlich ähnlich wie wir es mit unserem Hörer gemacht haben. Dies sind auch die Parameter, die wir ändern werden, wenn die Steuerungen auf unserer Oberfläche verwendet werden.

```js
const positionX = posX;
const positionY = posY;
const positionZ = posZ;

const orientationX = 0.0;
const orientationY = 0.0;
const orientationZ = -1.0;
```

Beachten Sie den negativen Wert bei unserer z-Ausrichtung — dieser setzt die Boombox dazu, uns zugewandt zu sein. Ein positiver Wert würde die Schallquelle von uns weggewandt setzen.

Lassen Sie uns den relevanten Konstruktor verwenden, um unseren Panner-Knoten zu erstellen, und alle diese Parameter übergeben, die wir oben festgelegt haben:

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

## Die Boombox bewegen

Nun werden wir unsere Boombox in unserem 'Raum' bewegen. Wir haben einige Steuerungen eingerichtet, um dies zu tun. Wir können sie nach links und rechts, oben und unten sowie hin und her bewegen; wir können sie auch drehen. Die Schallrichtung kommt aus dem Lautsprecher der Boombox an der Vorderseite, sodass wir, wenn wir sie drehen, die Richtung des Klangs ändern können — d.h. nach hinten projizieren, wenn die Boombox um 180 Grad gedreht wird und von uns wegzeigt.

Wir müssen einige Dinge für die Oberfläche einrichten. Zuerst erhalten wir Referenzen auf die Elemente, die wir bewegen möchten, dann speichern wir Referenzen auf die Werte, die wir ändern werden, wenn wir [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) einrichten, um die Bewegung tatsächlich durchzuführen. Schließlich legen wir einige Grenzen fest, damit unsere Boombox nicht zu weit in eine Richtung geht:

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

Lassen Sie uns eine Funktion erstellen, die die Richtung, in die wir uns bewegen wollen, als Parameter nimmt, und sowohl die CSS-Transformation modifiziert als auch die Positions- und Ausrichtungswerte unseres Panner-Knoten-Eigenschaften aktualisiert, um den Klang entsprechend zu ändern.

Um zu beginnen, lassen Sie uns einen Blick auf unsere Werte für Links, Rechts, Oben und Unten werfen, da diese ziemlich einfach sind. Wir bewegen die Boombox entlang dieser Achsen und aktualisieren die entsprechende Position.

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

Es ist eine ähnliche Geschichte für unsere Werte für In und Out:

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

Unsere Rotationswerte sind jedoch etwas aufwändiger, da wir den Klang _um_ bewegen müssen. Nicht nur müssen wir zwei Achsenwerte aktualisieren (z.B. wenn Sie ein Objekt um die x-Achse drehen, aktualisieren Sie die y- und z-Koordinaten für dieses Objekt), sondern wir müssen dafür auch noch weitere Mathematik anstellen. Die Rotation ist ein Kreis und wir benötigen [`Math.sin`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sin) und [`Math.cos`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/cos), um uns zu helfen, diesen Kreis zu zeichnen.

Lassen Sie uns eine Rotationsrate aufstellen, die wir in einen Bogenmaßbereichswert umwandeln werden, um sie später in `Math.sin` und `Math.cos` zu verwenden, wenn wir die neuen Koordinaten ermitteln wollen, wenn wir unsere Boombox drehen:

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

Werfen wir einen Blick auf unsere Linksdrehung als Beispiel. Wir müssen die x-Ausrichtung und die z-Ausrichtung der Panner-Koordinaten ändern, um die y-Achse für unsere Linksdrehung zu bewegen:

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

Das _ist_ ein wenig verwirrend, aber was wir tun, ist Sinus und Kosinus zu verwenden, um uns zu helfen, die Kreisbewegung zu berechnen, die die Koordinaten für die Rotation der Boombox benötigen.

Wir können dies für alle Achsen tun. Wir müssen nur die richtige Orientierung auswählen, um sie zu aktualisieren, und ob wir eine positive oder negative Erhöhung wünschen.

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

Eine letzte Sache — wir müssen das CSS aktualisieren und eine Referenz der letzten Bewegung für das Mausereignis behalten. Hier ist die endgültige `moveBoombox`-Funktion.

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

## Unsere Steuerungen verkabeln

Das Verkabeln unserer Steuerungstasten ist vergleichsweise einfach — jetzt können wir auf ein Mausereignis auf unseren Steuerungen hören und diese Funktion ausführen, sowie stoppen, wenn die Maus losgelassen wird:

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

## Unser Diagramm verbinden

Unser HTML enthält das Audio-Element, das vom Panner-Knoten beeinflusst werden soll.

```html
<audio src="myCoolTrack.mp3"></audio>
```

Wir müssen die Quelle aus diesem Element holen und in die Web Audio API einleiten, indem wir [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) verwenden.

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

Als Nächstes müssen wir unser Audiograf verbinden. Wir verbinden unseren Eingang (den Track) mit unserem Modifikationsknoten (dem Panner) mit unserem Ziel (in diesem Fall die Lautsprecher).

```js
track.connect(panner).connect(audioCtx.destination);
```

Lassen Sie uns eine Abspieltaste erstellen, die beim Klick das Audio abspielt oder pausiert, je nach dem aktuellen Zustand.

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

Für einen tiefer gehenden Blick auf das Abspielen/Kontrollieren von Audio und Audiografen schauen Sie sich den [Verwenden der Web Audio API-Leitfaden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) an.

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel einen Einblick in die Funktionsweise der Web-Audio-Spatialisation gegeben und was jede der [`PannerNode`](/de/docs/Web/API/PannerNode)-Eigenschaften bewirkt (es gibt ziemlich viele davon). Die Werte können manchmal schwer zu manipulieren sein und je nach Anwendungsfall kann es einige Zeit dauern, sie richtig zu bringen.

> [!NOTE]
> Es gibt leichte Unterschiede in der Art, wie die Audiospatialisation in verschiedenen Browsern klingt. Der Panner-Knoten macht unter der Haube einige sehr komplexe Berechnungen; es gibt eine [Anzahl von Tests hier](https://wpt.fyi/results/webaudio/the-audio-api/the-pannernode-interface?label=stable&aligned=true), sodass Sie den Status der inneren Funktionen dieses Knotens über verschiedene Plattformen hinweg verfolgen können.

Nochmals, Sie können [das endgültige Demo hier ansehen](https://mdn.github.io/webaudio-examples/spatialization/), und der [endgültige Quellcode ist hier](https://github.com/mdn/webaudio-examples/tree/main/spatialization). Es gibt auch eine [Codepen-Demo](https://codepen.io/Rumyra/pen/MqayoK?editors=0100).

Wenn Sie mit 3D-Spielen und/oder WebXR arbeiten, ist es eine gute Idee, eine 3D-Bibliothek zu nutzen, um eine solche Funktionalität zu erstellen, anstatt zu versuchen, dies alles selbst von Grund auf zu tun. Wir haben in diesem Artikel unser eigenes entwickelt, um Ihnen eine Vorstellung davon zu geben, wie es funktioniert, aber Sie werden viel Zeit sparen, indem Sie die Arbeit nutzen, die andere bereits vor Ihnen geleistet haben.
