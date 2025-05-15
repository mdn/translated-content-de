---
title: Grundlagen der Web-Audio-Raumklangtechnik
slug: Web/API/Web_Audio_API/Web_audio_spatialization_basics
l10n:
  sourceCommit: dbfd2d40e79ad3029ef5a6269390284cafa9e971
---

{{DefaultAPISidebar("Web Audio API")}}

Als ob die umfangreiche Vielfalt an Klangbearbeitungsoptionen (und anderen) nicht genug wäre, bietet die Web Audio API auch Mittel, um den Unterschied im Klang zu simulieren, wenn sich ein Zuhörer um eine Klangquelle bewegt. Zum Beispiel das Panning, wenn Sie sich innerhalb eines 3D-Spiels um eine Klangquelle bewegen.
Der offizielle Begriff hierfür ist **Raumklangtechnik**, und dieser Artikel wird die Grundlagen der Implementierung eines solchen Systems behandeln.

## Grundlagen der Raumklangtechnik

In der Web-Audio-Technik werden komplexe 3D-Raumklänge mit dem [`PannerNode`](/de/docs/Web/API/PannerNode) erstellt, was vereinfacht gesagt eine Menge cooler Mathematik ist, um Audio im 3D-Raum erscheinen zu lassen.
Stellen Sie sich vor, Geräusche fliegen über Ihnen, schleichen sich hinter Ihnen her oder bewegen sich vor Ihnen her.
Solche Dinge.

Es ist wirklich nützlich für WebXR und Gaming.
In 3D-Räumen ist es der einzige Weg, um realistisches Audio zu erzielen. Bibliotheken wie [three.js](https://threejs.org/) und [A-frame](https://aframe.io/) nutzen das Potenzial beim Umgang mit Klang.
Es ist erwähnenswert, dass Sie den Klang nicht _zwangsläufig_ innerhalb eines vollständigen 3D-Raums bewegen müssen — Sie könnten auch nur bei einer 2D-Ebene bleiben, also wenn Sie ein 2D-Spiel planen, wäre dies immer noch der gesuchte Knoten.

> [!NOTE]
> Es gibt auch einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode), der dafür ausgelegt ist, den gängigen Anwendungsfall zur Erstellung einfacher Links-Rechts-Stereoeffekt-Panoramaeffekte zu behandeln.
> Dieser ist viel einfacher zu verwenden, aber offensichtlich bei Weitem nicht so vielseitig.
> Wenn Sie nur einen einfachen Stereoeffekt wünschen, sollte unser [StereoPannerNode-Beispiel](https://mdn.github.io/webaudio-examples/stereo-panner-node/) ([siehe Quellcode](https://github.com/mdn/webaudio-examples/tree/main/stereo-panner-node)) alles bieten, was Sie brauchen.

## 3D-Boombox-Demo

Um 3D-Raumklang zu demonstrieren, haben wir eine modifizierte Version der Boombox-Demo erstellt, die wir in unserem grundlegenden [Leitfaden zur Nutzung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) erstellt haben.
Sehen Sie sich die [3D-Raumklang-Demo live an](https://mdn.github.io/webaudio-examples/spatialization/) (und sehen Sie sich auch den [Quellcode](https://github.com/mdn/webaudio-examples/tree/main/spatialization) an).

![Eine einfache Benutzeroberfläche mit einer gedrehten Boombox und Bedienelementen, um sie nach links und rechts sowie hinein und hinaus zu bewegen und zu drehen.](web-audio-spatialization.png)

Die Boombox befindet sich in einem Raum (definiert durch die Ränder des Browser-Anzeigebereichs), und in dieser Demo können wir sie mit den bereitgestellten Steuerungen bewegen und drehen.
Wenn wir die Boombox bewegen, ändert sich der von ihr erzeugte Klang entsprechend, panning, während sie sich nach links oder rechts im Raum bewegt, oder sie wird leiser, wenn sie vom Benutzer wegbewegt wird oder so gedreht wird, dass die Lautsprecher von ihm wegzeigen usw.
Dies wird erreicht, indem die verschiedenen Eigenschaften der `PannerNode`-Objektinstanz in Bezug auf diese Bewegung eingestellt werden, um Raumklang zu simulieren.

> [!NOTE]
> Das Erlebnis ist viel besser, wenn Sie Kopfhörer verwenden oder eine Art Surround-Sound-System haben, an das Sie Ihren Computer anschließen können.

## Erstellen eines Audio-Listeners

Also, los geht's! Der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) (die Schnittstelle, von der [`AudioContext`](/de/docs/Web/API/AudioContext) erweitert wird) hat eine [`listener`](/de/docs/Web/API/BaseAudioContext/listener)-Eigenschaft, die ein [`AudioListener`](/de/docs/Web/API/AudioListener)-Objekt zurückgibt.
Dies stellt den Hörer der Szene dar, normalerweise Ihren Benutzer.
Sie können definieren, wo sie sich im Raum befinden und in welche Richtung sie schauen.
Sie bleiben statisch. Der `pannerNode` kann dann seine Klangposition relativ zur Position des Listeners berechnen.

Erstellen wir unseren Kontext und Listener und setzen die Position des Listeners, um eine Person zu simulieren, die in unseren Raum schaut:

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

Wir könnten den Listener nach links oder rechts bewegen, indem wir `positionX` verwenden, nach oben oder unten mit `positionY` oder hinein oder heraus aus dem Raum mit `positionZ`. Hier setzen wir den Listener in die Mitte des Anzeigebereichs und leicht vor unsere Boombox. Wir können auch die Richtung festlegen, in die der Listener schaut. Die Standardwerte hierfür funktionieren gut:

```js
listener.forwardX.value = 0;
listener.forwardY.value = 0;
listener.forwardZ.value = -1;
listener.upX.value = 0;
listener.upY.value = 1;
listener.upZ.value = 0;
```

Die Vorwärtseigenschaften repräsentieren die 3D-Koordinatenposition der Vorwärtsrichtung des Listeners (zum Beispiel die Richtung, in die sie schauen), während die Aufwärts-Eigenschaften die 3D-Koordinatenposition des oberen Teils des Kopfes des Listeners darstellen.
Diese beiden zusammen können die Richtung gut festlegen.

## Erstellen eines Panner-Knotens

Erstellen wir unseren [`PannerNode`](/de/docs/Web/API/PannerNode). Dieser hat eine ganze Reihe von Eigenschaften, die damit verbunden sind. Schauen wir uns jede von ihnen an:

Zuerst können wir das [`panningModel`](/de/docs/Web/API/PannerNode/panningModel) einstellen.
Dies ist der Algorithmus für die Raumklangtechnik, der verwendet wird, um das Audio im 3D-Raum zu positionieren. Wir können dies einstellen auf:

`equalpower` — Der Standard und die allgemeine Methode, wie Panning ermittelt wird

`HRTF` — Dies steht für 'Head-related transfer function' und versucht, den menschlichen Kopf zu berücksichtigen, wenn ermittelt wird, woher der Klang kommt.

Ziemlich clevere Sachen. Verwenden wir das `HRTF`-Modell!

```js
const panningModel = "HRTF";
```

Die Eigenschaften [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle) und [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) spezifizieren, woher die Lautstärke ausgeht.
Standardmäßig sind beide 360 Grad.
Unsere Boombox-Lautsprecher haben kleinere Konen, die wir definieren können.
Der innere Kegel ist, wo der Verstärkungsgrad (Lautstärke) immer maximal emuliert wird, und der äußere Kegel ist, wo der Verstärkungsgrad zu sinken beginnt.
Der Verstärkungsgrad wird um den Wert des [`coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) verringert.
Lassen Sie uns Konstanten erstellen, die die Werte speichern, die wir später für diese Parameter verwenden werden:

```js
const innerCone = 60;
const outerCone = 90;
const outerGain = 0.3;
```

Der nächste Parameter ist [`distanceModel`](/de/docs/Web/API/PannerNode/distanceModel) — dies kann nur auf `linear`, `inverse` oder `exponential` gesetzt werden. Dies sind verschiedene Algorithmen, die verwendet werden, um die Lautstärke der Tonquelle zu verringern, wenn sie sich vom Listener entfernt. Wir verwenden `linear`, da es einfach ist:

```js
const distanceModel = "linear";
```

Wir können eine maximale Distanz ([`maxDistance`](/de/docs/Web/API/PannerNode/maxDistance)) zwischen der Quelle und dem Listener festlegen — die Lautstärke wird danach nicht weiter verringert, wenn sich die Quelle weiter entfernt bewegt.
Dies kann nützlich sein, da Sie möglicherweise den Abstand emulieren möchten, aber die Lautstärke kann ausfallen und das ist eigentlich nicht, was Sie möchten.
Standardmäßig beträgt es 10.000 (ein einheitenloser relativer Wert). Wir können es dabei belassen:

```js
const maxDistance = 10000;
```

Es gibt auch eine Referenzdistanz ([`refDistance`](/de/docs/Web/API/PannerNode/refDistance)), die von den Distanzmodellen verwendet wird.
Wir können das auch auf dem Standardwert `1` belassen:

```js
const refDistance = 1;
```

Dann gibt es den Rolloff-Faktor ([`rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor)) — wie schnell reduziert sich die Lautstärke, wenn sich der Panner vom Listener entfernt.
Der Standardwert ist 1; wir machen ihn etwas größer, um unsere Bewegungen zu übertreiben.

```js
const rollOff = 10;
```

Nun können wir damit beginnen, die Position und Orientierung unserer Boombox festzulegen.
Dies ist ähnlich, wie wir es mit unserem Listener gemacht haben.
Dies sind auch die Parameter, die wir ändern, wenn die Steuerungen in unserer Benutzeroberfläche verwendet werden.

```js
const positionX = posX;
const positionY = posY;
const positionZ = posZ;

const orientationX = 0.0;
const orientationY = 0.0;
const orientationZ = -1.0;
```

Beachten Sie den negativen Wert bei unserer z-Ausrichtung — dies setzt die Boombox so, dass sie uns zugewandt ist.
Ein positiver Wert würde die Tonquelle von uns wegzeigen lassen.

Verwenden wir den entsprechenden Konstruktor, um unseren Panner-Knoten zu erstellen, und übergeben wir all diese zuvor festgelegten Parameter:

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

## Bewegen der Boombox

Jetzt werden wir unsere Boombox in unserem 'Raum' bewegen. Wir haben einige Steuerungen eingerichtet, um dies zu tun.
Wir können sie nach links und rechts, oben und unten sowie hin und her bewegen; wir können sie auch drehen.
Die Klangausrichtung kommt von den vorderen Lautsprechern der Boombox, sodass wir bei einer Drehung die Klangrichtung ändern können — das heißt, sie zum Rücken projizieren, wenn die Boombox um 180 Grad gedreht wird und von uns wegzeigt.

Wir müssen einige Dinge für die Benutzeroberfläche einrichten.
Zuerst holen wir uns Referenzen auf die Elemente, die wir bewegen möchten, dann speichern wir die Referenzen auf die Werte, die wir ändern werden, wenn wir [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) einrichten, um die Bewegung tatsächlich durchzuführen.
Schließlich setzen wir einige Grenzen, damit unsere Boombox nicht zu weit in eine beliebige Richtung bewegt wird:

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

Erstellen wir eine Funktion, die die Richtung, in die wir uns bewegen möchten, als Parameter nimmt und sowohl die CSS-Transformation modifiziert als auch die Positions- und Orientierungseigenschaften unserer Panner-Knoten-Eigenschaften aktualisiert, um den Klang entsprechend zu ändern.

Beginnen wir mit unseren Links-, Rechts-, Oben- und Unten-Werten, da diese ziemlich einfach sind.
Wir bewegen die Boombox entlang dieser Achsen und aktualisieren die entsprechende Position.

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

Es ist eine ähnliche Geschichte für unsere Werte zum Hinein- und Herausbewegen:

```js
switch (direction) {
  // …
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
}
```

Unsere Drehwerte sind jedoch etwas komplizierter, da wir den Klang _umher_ bewegen müssen.
Nicht nur müssen wir zwei Achsenwerte aktualisieren (z.B. wenn Sie ein Objekt um die x-Achse drehen, aktualisieren Sie die y- und z-Koordinaten für dieses Objekt), sondern wir müssen dafür auch mehr Mathematik einsetzen.
Die Rotation ist ein Kreis und wir brauchen [`Math.sin`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sin) und [`Math.cos`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/cos), um uns dabei zu helfen, diesen Kreis zu zeichnen.

Richten wir eine Rotationsrate ein, die wir später in einen Bogenmaßbereichswert umwandeln, um ihn in `Math.sin` und `Math.cos` zu verwenden, wenn wir die neuen Koordinaten herausfinden wollen, wenn wir unsere Boombox drehen:

```js
// Set up rotation constants
const rotationRate = 60; // Bigger number equals slower sound rotation

const q = Math.PI / rotationRate; // Rotation increment in radians
```

Wir können dies auch verwenden, um herauszufinden, um wie viele Grad gedreht wurde, was bei den CSS-Transformationen hilft, die wir erstellen müssen (beachten Sie, dass wir sowohl eine x- als auch eine y-Achse für die CSS-Transformationen benötigen):

```js
// Get degrees for CSS
const degreesX = (q * 180) / Math.PI;
const degreesY = (q * 180) / Math.PI;
```

Nehmen wir unsere Linksdrehung als Beispiel. Wir müssen die x-Ausrichtung und die z-Ausrichtung der Panner-Koordinaten ändern, um bei unserer Linksdrehung um die y-Achse herum zu bewegen:

```js
switch (direction) {
  // …
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
}
```

Das _ist_ ein wenig verwirrend, aber was wir tun, ist sin und cos zu verwenden, um die Kreisbewegung der Koordinaten zu berechnen, die für die Drehung der Boombox erforderlich ist.

Wir können das für alle Achsen tun. Wir müssen nur die richtigen Orientierungen auswählen, die aktualisiert werden sollen, und ob wir eine positive oder negative Inkrementierung wünschen.

```js
switch (direction) {
  // …
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
```

Eine letzte Sache — wir müssen das CSS aktualisieren und eine Referenz der letzten Bewegung für das Mausereignis behalten.
Hier ist die endgültige `moveBoombox`-Funktion.

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

## Verkabeln unserer Steuerungen

Das Verkabeln unserer Steuerungstasten ist vergleichsweise einfach — jetzt können wir auf ein Mausereignis auf unseren Steuerungen hören und diese Funktion ausführen sowie es stoppen, wenn die Maus losgelassen wird:

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

## Verbinden unseres Graphen

Unser HTML enthält das Audio-Element, das vom Panner-Knoten beeinflusst werden soll.

```html
<audio src="myCoolTrack.mp3"></audio>
```

Wir müssen die Quelle aus diesem Element abrufen und in die Web Audio API einspeisen, indem wir [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) verwenden.

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

Als nächstes müssen wir unseren Audiographen verbinden. Wir verbinden unser Eingabe (die Spur) mit unserem Modifikationsknoten (dem Panner) mit unserem Ziel (in diesem Fall die Lautsprecher).

```js
track.connect(panner).connect(audioCtx.destination);
```

Erstellen wir eine Wiedergabetaste, die beim Klicken das Audio abhängig vom aktuellen Zustand abspielt oder pausiert.

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

Für einen detaillierteren Blick auf das Spielen und Steuern von Audio und Audiographen schauen Sie sich den [Leitfaden zur Nutzung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) an.

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel einen Einblick in die Funktionsweise der Web-Audio-Raumklangtechnik gegeben und erklärt, welche Rolle jede der [`PannerNode`](/de/docs/Web/API/PannerNode)-Eigenschaften spielt (es sind ziemlich viele).
Die Werte können manchmal schwer zu handhaben sein und je nach Anwendungsfall kann es einige Zeit dauern, sie richtig einzustellen.

> [!NOTE]
> Es gibt leichte Unterschiede, wie sich die Audio-Raumklangtechnik in verschiedenen Browsern anhört.
> Der Panner-Knoten macht im Hintergrund einige sehr komplexe Berechnungen;
> es gibt [eine Reihe von Tests hier](https://wpt.fyi/results/webaudio/the-audio-api/the-pannernode-interface?label=stable&aligned=true), damit Sie den Status der inneren Funktionsweise dieses Knotens auf verschiedenen Plattformen im Auge behalten können.

Nochmals, Sie können [hier die endgültige Demo sehen](https://mdn.github.io/webaudio-examples/spatialization/), und der [endgültige Quellcode ist hier](https://github.com/mdn/webaudio-examples/tree/main/spatialization).
Es gibt auch eine [CodePen-Demo](https://codepen.io/Rumyra/pen/MqayoK?editors=0100).

Wenn Sie mit 3D-Spielen und/oder WebXR arbeiten, ist es eine gute Idee, eine 3D-Bibliothek zu nutzen, um solche Funktionen zu erstellen, anstatt zu versuchen, dies alles selbst von Grund auf zu tun.
In diesem Artikel haben wir es selbst gemacht, um Ihnen eine Vorstellung davon zu geben, wie es funktioniert, aber Sie sparen viel Zeit, wenn Sie die Arbeit anderer nutzen, die bereits vor Ihnen durchgeführt wurde.
