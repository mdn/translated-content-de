---
title: Grundlagen der Web-Audio-Sound-Spezialisierung
slug: Web/API/Web_Audio_API/Web_audio_spatialization_basics
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{DefaultAPISidebar("Web Audio API")}}

Wie wenn die umfangreiche Vielfalt an Soundverarbeitungs- (und anderen) Optionen nicht schon ausreichen würde, beinhaltet die Web Audio API auch Möglichkeiten, um den Unterschied im Klang zu simulieren, wenn ein Zuhörer sich um eine Schallquelle herumbewegt, beispielsweise das Panning, wenn Sie sich in einem 3D-Spiel um eine Schallquelle bewegen. Der offizielle Begriff hierfür ist **Spatialization**, und dieser Artikel behandelt die Grundlagen zur Implementierung eines solchen Systems.

## Grundlagen der Spatialization

In Web Audio werden komplexe 3D-Spatializations mit dem [`PannerNode`](/de/docs/Web/API/PannerNode) erstellt, was in einfachen Worten im Grunde eine Menge cooler Mathematik ist, um Audio im 3D-Raum erscheinen zu lassen. Denken Sie an Geräusche, die über Sie hinwegfliegen, von hinten anschleichen oder vor Ihnen vorbeiziehen. So etwas in der Art.

Es ist wirklich nützlich für WebXR und Gaming. In 3D-Räumen ist es der einzige Weg, um realistisches Audio zu erreichen. Bibliotheken wie [three.js](https://threejs.org/) und [A-frame](https://aframe.io/) nutzen sein Potenzial, wenn es um Sound geht. Es ist erwähnenswert, dass Sie den Ton nicht unbedingt in einem vollständigen 3D-Raum bewegen _müssen_ — Sie könnten auch nur bei einer 2D-Ebene bleiben, also wenn Sie ein 2D-Spiel planen, wäre dies trotzdem der Knoten, den Sie suchen.

> [!NOTE]
> Es gibt auch einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode), der für den allgemeinen Anwendungsfall gedacht ist, einfache Stereo-Panning-Effekte links und rechts zu erzeugen. Dies ist viel einfacher zu verwenden, aber natürlich bei weitem nicht so vielseitig. Wenn Sie nur einen einfachen Stereo-Panning-Effekt wünschen, sollte unser [StereoPannerNode-Beispiel](https://mdn.github.io/webaudio-examples/stereo-panner-node/) ([sehen Sie sich den Quellcode an](https://github.com/mdn/webaudio-examples/tree/main/stereo-panner-node)) Ihnen alles geben, was Sie benötigen.

## 3D-Boombox-Demo

Um 3D-Spatialization zu demonstrieren, haben wir eine modifizierte Version der Boombox-Demo erstellt, die wir in unserem grundlegenden [Leitfaden zur Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) erstellt haben. Siehe die [3D-Spatialization-Demo live](https://mdn.github.io/webaudio-examples/spatialization/) (und sehen Sie sich auch den [Quellcode](https://github.com/mdn/webaudio-examples/tree/main/spatialization) an).

![Eine einfache Benutzeroberfläche mit einem gedrehten Boombox und Steuerungen, um sie nach links und rechts sowie hinein und hinaus zu bewegen und sie zu drehen.](web-audio-spatialization.png)

Die Boombox befindet sich in einem Raum (definiert durch die Ränder des Browser-Viewports), und in dieser Demo können wir sie mit den bereitgestellten Steuerungen bewegen und drehen. Wenn wir die Boombox bewegen, ändert sich der von ihr erzeugte Klang entsprechend und wird leiser, wenn sie sich von der Nutzenden entfernt oder so gedreht wird, dass die Lautsprecher von ihnen wegzeigen usw. Dies wird erreicht, indem die verschiedenen Eigenschaften der `PannerNode`-Objektinstanz in Bezug auf diese Bewegung eingestellt werden, um Spatialization zu simulieren.

> [!NOTE]
> Das Erlebnis ist viel besser, wenn Sie Kopfhörer verwenden oder ein Surround-Sound-System haben, um Ihren Computer anzuschließen.

## Erstellung eines Audio-Zuhörers

Also, los geht's! Das [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) (das Interface, von dem das [`AudioContext`](/de/docs/Web/API/AudioContext) erweitert wird) hat eine [`listener`](/de/docs/Web/API/BaseAudioContext/listener)-Eigenschaft, die ein [`AudioListener`](/de/docs/Web/API/AudioListener)-Objekt zurückgibt. Dies repräsentiert den Zuhörer der Szene, üblicherweise Ihren Nutzenden. Sie können definieren, wo sie sich im Raum befinden und in welche Richtung sie blicken. Sie bleiben statisch. Der `pannerNode` kann dann seine Schallposition relativ zur Position des Zuhörers berechnen.

Lassen Sie uns unseren Kontext und Zuhörer erstellen und die Position des Zuhörers festlegen, um eine Person zu simulieren, die in unseren Raum blickt:

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

Wir könnten den Zuhörer mit `positionX` nach links oder rechts, mit `positionY` nach oben oder unten oder mit `positionZ` in den Raum hinein oder heraus bewegen. Hier setzen wir den Zuhörer in die Mitte des Viewports und leicht vor unsere Boombox. Wir können auch die Richtung einstellen, in die der Zuhörer blickt. Die Standardwerte hierfür funktionieren gut:

```js
listener.forwardX.value = 0;
listener.forwardY.value = 0;
listener.forwardZ.value = -1;
listener.upX.value = 0;
listener.upY.value = 1;
listener.upZ.value = 0;
```

Die Forward-Eigenschaften repräsentieren die 3D-Koordinatenposition der Vorwärtsrichtung des Zuhörers (z.B. die Richtung, in die sie blicken), während die Up-Eigenschaften die 3D-Koordinatenposition der Oberseite des Kopfes des Zuhörers darstellen. Diese beiden zusammen können die Richtung passend festlegen.

## Erstellung eines Panner-Knotens

Lassen Sie uns unseren [`PannerNode`](/de/docs/Web/API/PannerNode) erstellen. Dieser hat eine ganze Reihe von Eigenschaften, die damit verbunden sind. Schauen wir uns jede von ihnen an:

Zu Beginn können wir das [`panningModel`](/de/docs/Web/API/PannerNode/panningModel) festlegen. Dies ist der Spatialization-Algorithmus, der verwendet wird, um das Audio im 3D-Raum zu positionieren. Wir können dies auf folgende Weise einstellen:

`equalpower` — Der Standard und die allgemeine Methode, wie Panning ermittelt wird.

`HRTF` — Das steht für 'Head-related transfer function' und berücksichtigt den menschlichen Kopf, wenn ermittelt wird, wo der Ton ist.

Ziemlich clevere Sachen. Lassen Sie uns das `HRTF`-Modell verwenden!

```js
const panningModel = "HRTF";
```

Die Eigenschaften [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle) und [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) geben an, woher das Volumen emittiert wird. Standardmäßig sind beide 360 Grad. Unsere Boombox-Lautsprecher werden kleinere Kegel haben, die wir definieren können. Der innere Kegel ist, wo Verstärkung (Volumen) immer auf das Maximum emuliert wird und der äußere Kegel ist, wo die Verstärkung beginnt, nachzulassen. Die Verstärkung wird um den Wert des [`coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) reduziert. Lassen Sie uns Konstanten erstellen, die die Werte speichern, die wir später für diese Parameter verwenden werden:

```js
const innerCone = 60;
const outerCone = 90;
const outerGain = 0.3;
```

Der nächste Parameter ist [`distanceModel`](/de/docs/Web/API/PannerNode/distanceModel) — dieser kann nur auf `linear`, `inverse` oder `exponential` gesetzt werden. Dies sind verschiedene Algorithmen, die verwendet werden, um das Volumen der Schallquelle zu reduzieren, wenn sie sich vom Zuhörer entfernt. Wir werden `linear` verwenden, da es einfach ist:

```js
const distanceModel = "linear";
```

Wir können eine maximale Entfernung ([`maxDistance`](/de/docs/Web/API/PannerNode/maxDistance)) zwischen Quelle und Zuhörer einstellen — das Volumen wird nicht weiter reduziert, wenn die Quelle sich weiter von diesem Punkt entfernt. Dies kann nützlich sein, da Sie möglicherweise die Distanz simulieren wollen, aber das Volumen kann ausfallen und das ist tatsächlich nicht das, was Sie wollen. Standardmäßig ist es 10.000 (einheitenloser relativer Wert). Wir können es dabei belassen:

```js
const maxDistance = 10000;
```

Es gibt auch eine Referenzentfernung ([`refDistance`](/de/docs/Web/API/PannerNode/refDistance)), die von den Distanzmodellen verwendet wird. Wir können diesen ebenfalls auf den Standardwert von `1` belassen:

```js
const refDistance = 1;
```

Dann gibt es den Roll-off-Faktor ([`rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor)) — wie schnell reduziert sich das Volumen, wenn der Panner sich vom Zuhörer entfernt. Der Standardwert ist 1; lassen Sie uns das etwas größer machen, um unsere Bewegungen zu betonen.

```js
const rollOff = 10;
```

Nun können wir beginnen, die Position und Orientierung unserer Boombox festzulegen. Dies ist ähnlich wie wir es mit unserem Zuhörer gemacht haben. Dies sind auch die Parameter, die wir ändern werden, wenn die Steuerungen auf unserer Benutzeroberfläche verwendet werden.

```js
const positionX = posX;
const positionY = posY;
const positionZ = posZ;

const orientationX = 0.0;
const orientationY = 0.0;
const orientationZ = -1.0;
```

Beachten Sie den negativen Wert unserer z-Orientierung — dies stellt die Boombox so ein, dass sie uns zugewandt ist. Ein positiver Wert würde die Schallquelle von uns wegzeigen lassen.

Lassen Sie uns den geeigneten Konstruktor verwenden, um unseren Panner-Knoten zu erstellen und all diese Parameter zu übergeben, die wir oben festgelegt haben:

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

Nun werden wir unsere Boombox in unserem 'Raum' bewegen. Wir haben einige Steuerungen eingerichtet, um dies zu tun. Wir können sie nach links und rechts, oben und unten sowie hinein und heraus bewegen; wir können sie auch drehen. Die Klangrichtung kommt von den Boombox-Lautsprechern vorne, sodass wir beim Drehen ihre Klangrichtung ändern können — d.h. sie nach hinten projizieren lassen, wenn die Boombox um 180 Grad gedreht wird und von uns wegzeigt.

Wir müssen einiges für die Benutzeroberfläche einrichten. Zuerst holen wir uns Referenzen zu den Elementen, die wir bewegen möchten, dann speichern wir Referenzen zu den Werten, die wir ändern werden, wenn wir [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) einrichten, um die Bewegung tatsächlich durchzuführen. Schließlich setzen wir Grenzen, damit unsere Boombox sich nicht zu weit in eine Richtung bewegt:

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

Lassen Sie uns eine Funktion erstellen, die die Richtung, in die wir uns bewegen möchten, als Parameter nimmt und sowohl die CSS-Transformation ändert als auch die Positions- und Orientierungswerte unserer Panner-Knoteneigenschaften aktualisiert, um den Klang entsprechend zu ändern.

Zu Beginn lassen Sie uns unsere linken, rechten, oberen und unteren Werte betrachten, da diese ziemlich einfach sind. Wir bewegen die Boombox entlang dieser Achsen und aktualisieren die entsprechende Position.

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

Ähnlich ist es auch für unsere Bewegungswerte hinein und heraus:

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

Unsere Rotationswerte sind jedoch etwas komplexer, da wir den Klang _herumdrehend_ bewegen müssen. Wir müssen nicht nur zwei Achsenwerte aktualisieren (z.B. wenn Sie ein Objekt um die x-Achse drehen, müssen Sie die y- und z-Koordinaten für dieses Objekt aktualisieren), sondern auch mehr Mathematik dafür berechnen. Die Rotation ist ein Kreis, und wir benötigen [`Math.sin`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sin) und [`Math.cos`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/cos), um uns dabei zu helfen, diesen Kreis zu zeichnen.

Lassen Sie uns eine Rotationsrate festlegen, die wir in einen Bogenwertbereich für die Verwendung in `Math.sin` und `Math.cos` umwandeln, wenn wir die neuen Koordinaten herausfinden möchten, wenn wir unsere Boombox drehen:

```js
// set up rotation constants
const rotationRate = 60; // bigger number equals slower sound rotation

const q = Math.PI / rotationRate; //rotation increment in radians
```

Wir können dies auch verwenden, um herauszufinden, um wie viele Grad gedreht wird, was bei den CSS-Transformationen hilfreich sein wird, die wir erstellen müssen (beachten Sie, dass wir sowohl eine x- als auch y-Achse für die CSS-Transformationen benötigen):

```js
// get degrees for CSS
const degreesX = (q * 180) / Math.PI;
const degreesY = (q * 180) / Math.PI;
```

Lassen Sie uns unsere Linksdrehung als Beispiel betrachten. Wir müssen die x-Orientierung und die z-Orientierung der Panner-Koordinaten ändern, um uns für unsere Linksdrehung um die y-Achse zu bewegen:

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

Dies _ist_ ein wenig verwirrend, aber was wir tun, ist, Sinus und Cosinus zu verwenden, um uns bei der Berechnung der Kreisbewegung zu helfen, die die Koordinaten für die Drehung der Boombox benötigen.

Wir können dies für alle Achsen tun. Wir müssen nur die richtigen Orientierungen wählen, die wir aktualisieren wollen, und ob wir eine positive oder negative Zunahme benötigen.

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

Noch eine letzte Sache — wir müssen das CSS aktualisieren und eine Referenz auf die letzte Bewegung für das Mausereignis behalten. Hier ist die abschließende `moveBoombox`-Funktion.

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

## Unsere Steuerungen verdrahten

Das Verdrahten unserer Steuerknöpfe ist vergleichsweise einfach — jetzt können wir auf ein Mausereignis auf unseren Steuerungen hören und diese Funktion ausführen, sowie sie stoppen, wenn die Maus losgelassen wird:

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

Wir müssen die Quelle aus diesem Element holen und mithilfe von [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) in die Web Audio API einleiten.

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

Als nächstes müssen wir unser Audiograph verbinden. Wir verbinden unseren Eingang (den Track) mit unserem Modifikationsknoten (dem Panner) mit unserem Ziel (in diesem Fall den Lautsprechern).

```js
track.connect(panner).connect(audioCtx.destination);
```

Lassen Sie uns einen Wiedergabeknopf erstellen, der beim Klicken das Audio abspielt oder pausiert, je nach aktuellem Zustand.

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

Für einen tieferen Einblick in das Abspielen/Steuern von Audio und Audiographen sehen Sie sich [Leitfaden zur Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) an.

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel einen Einblick gegeben, wie Web Audio Spezialisation funktioniert und was jede der [`PannerNode`](/de/docs/Web/API/PannerNode)-Eigenschaften tut (es gibt ziemlich viele davon). Die Werte können manchmal schwer zu manipulieren sein, und je nach Ihrem Anwendungsfall kann es einige Zeit dauern, sie richtig einzustellen.

> [!NOTE]
> Es gibt leichte Unterschiede in der Art und Weise, wie die Audio-Spezialisierung in verschiedenen Browsern klingt. Der Panner-Knoten führt unter der Haube einige sehr umfassende Berechnungen durch; es gibt eine [Anzahl von Tests hier](https://wpt.fyi/results/webaudio/the-audio-api/the-pannernode-interface?label=stable&aligned=true), damit Sie den Status der inneren Abläufe dieses Knotens auf verschiedenen Plattformen verfolgen können.

Erneut können Sie sich [das endgültige Demo hier ansehen](https://mdn.github.io/webaudio-examples/spatialization/), und der [endgültige Quellcode ist hier](https://github.com/mdn/webaudio-examples/tree/main/spatialization). Es gibt auch eine [CodePen-Demo](https://codepen.io/Rumyra/pen/MqayoK?editors=0100).

Wenn Sie mit 3D-Spielen und/oder WebXR arbeiten, ist es eine gute Idee, eine 3D-Bibliothek zu nutzen, um solche Funktionen zu erstellen, anstatt zu versuchen, alles selbst von Grund auf zu entwickeln. Wir haben unser eigenes in diesem Artikel erstellt, um Ihnen eine Vorstellung davon zu geben, wie es funktioniert, aber Sie werden viel Zeit sparen, wenn Sie von der Arbeit profitieren, die andere vor Ihnen geleistet haben.
