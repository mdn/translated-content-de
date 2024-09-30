---
title: Grundlagen der Web-Audio-Raumklang-Technik
slug: Web/API/Web_Audio_API/Web_audio_spatialization_basics
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("Web Audio API")}}

Als ob die umfangreiche Auswahl an Klangverarbeitung (und anderen) Optionen nicht genug wäre, beinhaltet die Web Audio API auch Möglichkeiten, um die Änderung des Klangs zu emulieren, wenn sich ein Zuhörer um eine Klangquelle bewegt, zum Beispiel die Stereoverlagerung, wenn man sich in einem 3D-Spiel um eine Klangquelle bewegt. Der offizielle Begriff dafür ist **Spatialization** (Raumklang), und dieser Artikel behandelt die Grundlagen der Implementierung eines solchen Systems.

## Grundlagen der Spatialization

In Web Audio werden komplexe 3D-Spatializationen mithilfe von [`PannerNode`](/de/docs/Web/API/PannerNode) erstellt, was vereinfacht gesagt bedeutet, dass eine Menge komplexer mathematischer Berechnungen durchgeführt werden, um Audio im 3D-Raum erscheinen zu lassen. Denken Sie an Geräusche, die über Sie fliegen, sich von hinten anschleichen und sich vor Ihnen bewegen. Genau solche Dinge.

Es ist besonders nützlich für WebXR und Gaming. In 3D-Räumen ist es der einzige Weg, um realistische Audioeffekte zu erzielen. Bibliotheken wie [three.js](https://threejs.org/) und [A-frame](https://aframe.io/) nutzen ihr Potenzial beim Umgang mit Klang. Es ist erwähnenswert, dass Sie den Klang nicht _unbedingt_ innerhalb eines vollständigen 3D-Raums bewegen müssen — Sie könnten sich auch mit einer 2D-Ebene zufrieden geben, das wäre also auch der gesuchte Knoten, wenn Sie ein 2D-Spiel planen würden.

> [!NOTE]
> Es gibt auch einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode), der für die häufigen Anwendungsfälle von einfachen Links-Rechts-Stereo-Paning-Effekten entwickelt wurde. Dieser ist viel einfacher zu benutzen, aber offensichtlich nicht annähernd so vielseitig. Wenn Sie nur einen einfachen Stereo-Paning-Effekt wünschen, sollte unser [StereoPannerNode Beispiel](https://mdn.github.io/webaudio-examples/stereo-panner-node/) ([siehe Quellcode](https://github.com/mdn/webaudio-examples/tree/main/stereo-panner-node)) Ihnen alles bieten, was Sie brauchen.

## 3D-Boombox-Demo

Um 3D-Spatialization zu demonstrieren, haben wir eine modifizierte Version der Boombox-Demo erstellt, die wir in unserem grundlegenden [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) Leitfaden erstellt haben. Sehen Sie sich die [3D-Spatialization-Demo live an](https://mdn.github.io/webaudio-examples/spatialization/) (und sehen Sie sich auch den [Quellcode](https://github.com/mdn/webaudio-examples/tree/main/spatialization) an).

![Eine einfache Benutzeroberfläche mit einer gedrehten Boombox und Bedienelementen, um sie nach links und rechts sowie nach innen und außen zu bewegen und sie zu drehen.](web-audio-spatialization.png)

Die Boombox steht in einem Raum (definiert durch die Ränder des Browserfensters), und in dieser Demo können wir sie mit den bereitgestellten Bedienelementen bewegen und drehen. Wenn wir die Boombox bewegen, ändert sich der von ihr produzierte Klang entsprechend, indem er nach links oder rechts im Raum wandert oder leiser wird, wenn sie vom Benutzer weg bewegt oder so gedreht wird, dass die Lautsprecher vom Benutzer weg zeigen, usw. Dies wird durch das Einstellen der verschiedenen Eigenschaften der `PannerNode`-Objektinstanz in Bezug auf diese Bewegung erreicht, um Spatialization zu emulieren.

> [!NOTE]
> Das Erlebnis ist viel besser, wenn Sie Kopfhörer verwenden oder ein Surround-Soundsystem an Ihren Computer anschließen.

## Erstellen eines Audio-Listeners

Fangen wir also an! Die [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) (das Interface, von dem [`AudioContext`](/de/docs/Web/API/AudioContext) erweitert wird) hat eine [`listener`](/de/docs/Web/API/BaseAudioContext/listener) Eigenschaft, die ein [`AudioListener`](/de/docs/Web/API/AudioListener) Objekt zurückgibt. Dies stellt den Zuhörer der Szene dar, in der Regel Ihren Benutzer. Sie können definieren, wo er sich im Raum befindet und in welche Richtung er schaut. Er bleibt statisch. Der `pannerNode` kann dann seine Schallposition relativ zur Position des Listeners berechnen.

Lassen Sie uns unseren Kontext und den Listener erstellen und die Position des Listeners so festlegen, dass sie eine Person simuliert, die in unseren Raum schaut:

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

Wir könnten den Listener nach links oder rechts bewegen, indem wir `positionX` verwenden, nach oben oder unten durch `positionY`, oder hinein oder heraus aus dem Raum durch `positionZ`. Hier setzen wir den Listener in die Mitte des Viewports und etwas vor unsere Boombox. Wir können auch die Richtung festlegen, in die der Listener schaut. Die Standardwerte dafür funktionieren gut:

```js
listener.forwardX.value = 0;
listener.forwardY.value = 0;
listener.forwardZ.value = -1;
listener.upX.value = 0;
listener.upY.value = 1;
listener.upZ.value = 0;
```

Die vorderen Eigenschaften stellen die 3D-Koordinatenposition der Vorwärtsrichtung des Listeners dar (z. B. die Richtung, in die er schaut), während die oberen Eigenschaften die 3D-Koordinatenposition des oberen Kopfteils des Listeners darstellen. Beide zusammen können die Richtung gut festlegen.

## Erstellen eines Panner-Knotens

Lassen Sie uns unseren [`PannerNode`](/de/docs/Web/API/PannerNode) erstellen. Dieser hat eine ganze Reihe von Eigenschaften, die damit verbunden sind. Schauen wir uns jede von ihnen an:

Zunächst können wir das [`panningModel`](/de/docs/Web/API/PannerNode/panningModel) festlegen. Dies ist der räumliche Algorithmus, der zur Positionierung des Audios im 3D-Raum verwendet wird. Wir können dies auf folgende Werte setzen:

`equalpower` — Der Standardwert und die allgemeine Methode zur Berechnung des Panings

`HRTF` — Das steht für 'Head-related transfer function' und berücksichtigt den menschlichen Kopf bei der Berechnung der Klangposition.

Ziemlich clevere Sachen. Lassen Sie uns das `HRTF`-Modell verwenden!

```js
const panningModel = "HRTF";
```

Die Eigenschaften [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle) und [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) geben an, von wo aus das Volumen ausgeht. Standardmäßig sind beide auf 360 Grad gesetzt. Unsere Boombox-Lautsprecher werden kleinere Kegel haben, die wir definieren können. Der innere Kegel ist der Bereich, in dem die Verstärkung (Lautstärke) immer maximal erscheint, und der äußere Kegel ist der Bereich, in dem die Verstärkung zu fallen beginnt. Die Verstärkung wird um den Wert der [`coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) reduziert. Lassen Sie uns Konstanten erstellen, die die Werte speichern, die wir später für diese Parameter verwenden werden:

```js
const innerCone = 60;
const outerCone = 90;
const outerGain = 0.3;
```

Der nächste Parameter ist das [`distanceModel`](/de/docs/Web/API/PannerNode/distanceModel) — dies kann nur auf `linear`, `inverse` oder `exponential` gesetzt werden. Diese sind verschiedene Algorithmen, die verwendet werden, um die Lautstärke der Audioquelle zu reduzieren, wenn sie sich vom Zuhörer entfernt. Wir verwenden `linear`, da es einfach ist:

```js
const distanceModel = "linear";
```

Wir können eine maximale Distanz ([`maxDistance`](/de/docs/Web/API/PannerNode/maxDistance)) zwischen der Quelle und dem Zuhörer festlegen — die Lautstärke wird nicht weiter reduziert, wenn sich die Quelle weiter von diesem Punkt entfernt. Dies kann nützlich sein, da Sie möglicherweise die Entfernung emulieren möchten, aber die Lautstärke kann ausfallen und das ist eigentlich nicht das, was Sie möchten. Standardmäßig ist es 10.000 (ein einheitsloser relativer Wert). Wir können es so belassen:

```js
const maxDistance = 10000;
```

Es gibt auch eine Referenzdistanz ([`refDistance`](/de/docs/Web/API/PannerNode/refDistance)), die von den Distanzmodellen verwendet wird. Wir können diese ebenfalls auf den Standardwert `1` belassen:

```js
const refDistance = 1;
```

Dann gibt es noch den Roll-off-Faktor ([`rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor)) — wie schnell reduziert sich die Lautstärke, wenn sich der Panner vom Zuhörer entfernt. Der Standardwert ist 1; lassen Sie uns diesen ein wenig erhöhen, um unsere Bewegungen zu übertreiben.

```js
const rollOff = 10;
```

Jetzt können wir anfangen, die Position und die Ausrichtung unserer Boombox festzulegen. Dies ist sehr ähnlich, wie wir es mit unserem Listener gemacht haben. Dies sind auch die Parameter, die wir ändern werden, wenn die Bedienelemente in unserer Benutzeroberfläche verwendet werden.

```js
const positionX = posX;
const positionY = posY;
const positionZ = posZ;

const orientationX = 0.0;
const orientationY = 0.0;
const orientationZ = -1.0;
```

Beachten Sie den negativen Wert auf unserer z-Ausrichtung — dies stellt die Boombox so ein, dass sie uns zugewandt ist. Ein positiver Wert würde die Klangquelle von uns weg zeigen lassen.

Lassen Sie uns den entsprechenden Konstruktor verwenden, um unseren Panner-Knoten zu erstellen und alle Parameter zu übergeben, die wir oben festgelegt haben:

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

Nun werden wir unsere Boombox in unserem 'Raum' bewegen. Wir haben einige Bedienelemente eingerichtet, um dies zu tun. Wir können sie nach links und rechts, oben und unten sowie hin und her bewegen; wir können sie auch drehen. Die Schallrichtung kommt von den Boombox-Lautsprechern an der Vorderseite, sodass wir durch ihre Drehung die Schallrichtung ändern können — d. h. den Sound nach hinten projizieren, wenn die Boombox um 180 Grad gedreht und von uns weggerichtet ist.

Wir müssen einige Dinge für die Benutzeroberfläche einrichten. Zuerst holen wir uns Referenzen zu den Elementen, die wir verschieben möchten, dann speichern wir Referenzen zu den Werten, die wir ändern werden, wenn wir [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) einrichten, um tatsächlich die Bewegung durchzuführen. Schließlich legen wir einige Grenzen fest, damit sich unsere Boombox nicht in irgendeine Richtung zu weit bewegt:

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

Lassen Sie uns eine Funktion erstellen, die die Richtung, in die wir uns bewegen möchten, als Parameter annimmt und sowohl die CSS-Transformation modifiziert als auch die Position und Orientierungseigenschaften unseres Panner-Knotens aktualisiert, um den Klang entsprechend zu ändern.

Zunächst schauen wir uns unsere Links-, Rechts-, Auf- und Abwärtswerte an, da diese ziemlich einfach zu handhaben sind. Wir bewegen die Boombox entlang dieser Achsen und aktualisieren die entsprechende Position.

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

Es ist eine ähnliche Geschichte mit unseren Ein- und Auswerten:

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

Unsere Drehwerte sind jedoch etwas komplizierter, da wir den Sound _um_ bewegen müssen. Wir müssen nicht nur zwei Achsenwerte aktualisieren (z. B. wenn Sie ein Objekt um die x-Achse drehen, aktualisieren Sie die y- und z-Koordinaten für dieses Objekt), sondern wir müssen auch einige weitere mathematische Berechnungen dafür anstellen. Die Drehung ist ein Kreis und wir benötigen [`Math.sin`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sin) und [`Math.cos`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/cos), um uns beim Zeichnen dieses Kreises zu helfen.

Lassen Sie uns eine Rotationsrate einrichten, die wir später in einen Radiantenbereichswert umwandeln werden, den wir in `Math.sin` und `Math.cos` verwenden, wenn wir die neuen Koordinaten berechnen, wenn wir unsere Boombox drehen:

```js
// set up rotation constants
const rotationRate = 60; // bigger number equals slower sound rotation

const q = Math.PI / rotationRate; //rotation increment in radians
```

Wir können dies auch verwenden, um die Drehgrade zu berechnen, die bei den CSS-Transformationen helfen, die wir erstellen müssen (beachten Sie, dass wir sowohl eine x- als auch eine y-Achse für die CSS-Transformationen benötigen):

```js
// get degrees for CSS
const degreesX = (q * 180) / Math.PI;
const degreesY = (q * 180) / Math.PI;
```

Schauen wir uns unsere Linksdrehung als Beispiel an. Wir müssen die x-Ausrichtung und die z-Ausrichtung der Panner-Koordinaten ändern, um bei unserer Linksdrehung um die y-Achse zu bewegen:

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

Das _ist_ ein wenig verwirrend, aber was wir tun, ist, Sinus und Kosinus zu verwenden, um uns zu helfen, die kreisförmige Bewegung zu berechnen, die die Koordinaten für die Drehung der Boombox benötigen.

Wir können dies für alle Achsen tun. Wir müssen nur die richtigen Ausrichtungen auswählen, die wir aktualisieren wollen und ob wir einen positive oder negative Inkrement wünschen.

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

Eine letzte Sache — wir müssen das CSS aktualisieren und eine Referenz zur letzten Bewegung für das Mausereignis halten. Hier ist die endgültige `moveBoombox` Funktion.

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

## Unsere Bedienelemente anschließen

Das Anschließen unserer Steuerknöpfe ist vergleichsweise einfach — jetzt können wir auf ein Mausereignis an unseren Bedienelementen hören und diese Funktion ausführen sowie es beenden, wenn die Maus losgelassen wird:

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

## Unseren Graphen verbinden

Unser HTML enthält das Audioelement, das vom Panner-Knoten beeinflusst werden soll.

```html
<audio src="myCoolTrack.mp3"></audio>
```

Wir müssen die Quelle aus diesem Element holen und in die Web Audio API einspeisen, indem wir [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) verwenden.

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

Als nächstes müssen wir unseren Audiographen verbinden. Wir verbinden unseren Eingang (den Track) mit unserem Änderungs-Knoten (dem Panner) und unserem Ziel (in diesem Fall den Lautsprechern).

```js
track.connect(panner).connect(audioCtx.destination);
```

Lassen Sie uns eine Wiedergabetaste erstellen, die beim Klicken das Audio abspielt oder pausiert, je nach aktuellem Zustand.

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

Für einen tiefergehenden Einblick in die Wiedergabe/Steuerung von Audio und Audio-Graphen werfen Sie einen Blick auf [Verwendung der Web Audio API.](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel einen Einblick gegeben, wie die Web-Audio-Spatialization funktioniert und was jede der [`PannerNode`](/de/docs/Web/API/PannerNode)-Eigenschaften bewirken (es gibt viele davon). Die Werte können manchmal schwer zu manipulieren sein und je nach Anwendungsfall kann es einige Zeit dauern, sie richtig einzustellen.

> [!NOTE]
> Es gibt leichte Unterschiede, wie sich die Audio-Spatialization in verschiedenen Browsern anhört. Der Panner-Knoten führt einige sehr komplexe Berechnungen im Hintergrund durch; es gibt eine [Anzahl von Tests hier](https://wpt.fyi/results/webaudio/the-audio-api/the-pannernode-interface?label=stable&aligned=true), sodass Sie den Status der inneren Abläufe dieses Knotens auf verschiedenen Plattformen verfolgen können.

Sie können die [finale Demo hier ansehen](https://mdn.github.io/webaudio-examples/spatialization/), und [den endgültigen Quellcode finden Sie hier](https://github.com/mdn/webaudio-examples/tree/main/spatialization). Es gibt auch eine [Codepen-Demo hier](https://codepen.io/Rumyra/pen/MqayoK?editors=0100).

Wenn Sie mit 3D-Spielen und/oder WebXR arbeiten, ist es eine gute Idee, eine 3D-Bibliothek zu nutzen, um eine solche Funktionalität zu erstellen, anstatt zu versuchen, dies alles selbst aus den Grundlagen heraus zu tun. Wir haben unsere eigene Lösung in diesem Artikel entwickelt, um Ihnen eine Vorstellung davon zu geben, wie es funktioniert, aber Sie sparen viel Zeit, indem Sie die Arbeit anderer nutzen, die vor Ihnen gemacht wurde.
