---
title: Grundlagen der räumlichen Audiowiedergabe im Web
slug: Web/API/Web_Audio_API/Web_audio_spatialization_basics
l10n:
  sourceCommit: 87adaa5384b1015690f3435ce0ba64ac097764eb
---

{{DefaultAPISidebar("Web Audio API")}}

Als wäre die umfangreiche Vielfalt an Klangbearbeitungsoptionen der Web Audio API nicht schon genug, bietet sie auch Einrichtungen, um die Veränderung des Klangs zu simulieren, wenn ein Hörer sich um eine Tonquelle bewegt, zum Beispiel das Panning, wenn Sie sich in einem 3D-Spiel um eine Tonquelle bewegen.
Der offizielle Begriff dafür ist **räumliche Audioverarbeitung**, und dieser Artikel behandelt die Grundlagen der Implementierung eines solchen Systems.

## Grundlagen der räumlichen Audioverarbeitung

Im Bereich der Web Audio werden komplexe 3D-Raumklänge mit einem [`PannerNode`](/de/docs/Web/API/PannerNode) erstellt, was umgangssprachlich einfach eine Menge cooler Mathematik ist, um Audio im 3D-Raum erscheinen zu lassen.
Stellen Sie sich Töne vor, die über Ihnen hinwegfliegen, sich hinter Ihnen anschleichen oder vor Ihnen bewegen.
So etwas in der Art.

Es ist wirklich nützlich für WebXR und Gaming.
In 3D-Räumen ist es die einzige Möglichkeit, realistischen Sound zu erzielen. Bibliotheken wie [three.js](https://threejs.org/) und [A-frame](https://aframe.io/) nutzen sein Potenzial bei der Soundverarbeitung.
Es sei darauf hingewiesen, dass Sie den Ton nicht _zwingend_ in einem vollständigen 3D-Raum bewegen müssen – Sie könnten auch bei einer 2D-Ebene bleiben. Wenn Sie also ein 2D-Spiel planen, wäre dies trotzdem der gesuchte Node.

> [!NOTE]
> Es gibt auch einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode), der für den häufigen Anwendungsfall entwickelt wurde, einfache Stereo-Panning-Effekte links und rechts zu erzeugen.
> Dieser ist sehr viel einfacher zu verwenden, aber natürlich bei weitem nicht so vielseitig.
> Wenn Sie einfach nur einen einfachen Stereo-Panning-Effekt wünschen, sollte unser [StereoPannerNode-Beispiel](https://mdn.github.io/webaudio-examples/stereo-panner-node/) ([siehe Quellcode](https://github.com/mdn/webaudio-examples/tree/main/stereo-panner-node)) Ihnen alles geben, was Sie brauchen.

## 3D-Boombox-Demo

Um die 3D-Raumklangverarbeitung zu demonstrieren, haben wir eine modifizierte Version der Boombox-Demo erstellt, die wir in unserem grundlegenden [Verwenden der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)-Leitfaden erstellt haben.
Sehen Sie sich die [3D-Raumklang-Demo live an](https://mdn.github.io/webaudio-examples/spatialization/) (und sehen Sie auch den [Quellcode](https://github.com/mdn/webaudio-examples/tree/main/spatialization)).

![Eine einfache Benutzeroberfläche mit einer rotierenden Boombox und Bedienelementen, um sie nach links und rechts sowie rein und raus zu bewegen und sie zu rotieren.](web-audio-spatialization.png)

Die Boombox befindet sich in einem Raum (definiert durch die Ränder des Browser-Ansichtsfensters), und in dieser Demo können wir sie mit den bereitgestellten Steuerelementen bewegen und rotieren.
Wenn wir die Boombox bewegen, ändert sich der von ihr erzeugte Klang entsprechend, indem er nach links oder rechts im Raum wandert oder leiser wird, wenn sie vom Benutzer wegbewegt oder so gedreht wird, dass die Lautsprecher von ihm abgewandt sind, usw.
Dies geschieht durch Einstellen der verschiedenen Eigenschaften der `PannerNode`-Objektinstanz in Bezug auf diese Bewegung, um räumliche Audioverarbeitung zu simulieren.

> [!NOTE]
> Das Erlebnis ist viel besser, wenn Sie Kopfhörer verwenden oder Ihr Computer an ein Surround-Sound-System angeschlossen ist.

## Erstellen eines Audio-Listeners

Beginnen wir! Das [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) (das Interface, von dem das [`AudioContext`](/de/docs/Web/API/AudioContext) abgeleitet ist) hat eine [`listener`](/de/docs/Web/API/BaseAudioContext/listener)-Eigenschaft, die ein [`AudioListener`](/de/docs/Web/API/AudioListener)-Objekt zurückgibt.
Dies stellt den Hörer der Szene dar, in der Regel Ihren Benutzer.
Sie können definieren, wo er sich im Raum befindet und in welche Richtung er schaut.
Er bleibt statisch. Der `pannerNode` kann dann seine Tonposition relativ zur Position des Hörers berechnen.

Lassen Sie uns unseren Kontext und Hörer erstellen und die Position des Hörers festlegen, um eine Person zu simulieren, die in unseren Raum schaut:

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

Wir könnten den Hörer nach links oder rechts mit `positionX`, nach oben oder unten mit `positionY` oder in den Raum hinein oder aus dem Raum heraus mit `positionZ` bewegen. Hier setzen wir den Hörer in die Mitte des Ansichtsfensters und leicht vor unsere Boombox. Wir können auch die Richtung festlegen, in die der Hörer schaut. Die Standardwerte dafür funktionieren gut:

```js
listener.forwardX.value = 0;
listener.forwardY.value = 0;
listener.forwardZ.value = -1;
listener.upX.value = 0;
listener.upY.value = 1;
listener.upZ.value = 0;
```

Die forward-Eigenschaften repräsentieren die 3D-Koordinatenposition der Vorwärtsrichtung des Hörers (z.B. die Richtung, in die er schaut), während die up-Eigenschaften die 3D-Koordinatenposition der Oberseite des Kopfes des Hörers darstellen.
Diese beiden zusammen können die Richtung schön festlegen.

## Erstellen eines Panner Nodes

Lassen Sie uns unseren [`PannerNode`](/de/docs/Web/API/PannerNode) erstellen. Dieser hat eine ganze Reihe von Eigenschaften, die damit verbunden sind. Schauen wir uns jede davon an:

Zu Beginn können wir das [`panningModel`](/de/docs/Web/API/PannerNode/panningModel) einstellen.
Dies ist der räumliche Audioalgorithmus, der verwendet wird, um den Ton im 3D-Raum zu positionieren. Wir können dies einstellen auf:

`equalpower` — Der Standard und die allgemeine Methode, wie Panning herausgefunden wird

`HRTF` — Dies steht für "Head-related transfer function" und versucht, den menschlichen Kopf zu berücksichtigen, wenn festgestellt wird, wo sich der Ton befindet.

Ziemlich clevere Sache. Lassen Sie uns das `HRTF`-Modell verwenden!

```js
const panningModel = "HRTF";
```

Die [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle) und [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle)-Eigenschaften spezifizieren, woher die Lautstärke ausgeht.
Standardmäßig sind beide 360 Grad.
Unsere Boombox-Lautsprecher werden kleinere Kegel haben, die wir definieren können.
Der innere Kegel ist der Bereich, in dem die Verstärkung (Lautstärke) immer maximal simuliert wird, und der äußere Kegel ist der Bereich, in dem die Verstärkung abzunehmen beginnt.
Die Verstärkung wird um den Wert der [`coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) reduziert.
Lassen Sie uns Konstanten erstellen, die die Werte speichern, die wir für diese Parameter später verwenden werden:

```js
const innerCone = 60;
const outerCone = 90;
const outerGain = 0.3;
```

Der nächste Parameter ist das [`distanceModel`](/de/docs/Web/API/PannerNode/distanceModel) — dies kann nur auf `linear`, `inverse` oder `exponential` gesetzt werden. Dies sind verschiedene Algorithmen, die verwendet werden, um die Lautstärke der Tonquelle zu reduzieren, wenn sie sich vom Hörer entfernt. Wir verwenden `linear`, da es einfach ist:

```js
const distanceModel = "linear";
```

Wir können eine maximale Entfernung ([`maxDistance`](/de/docs/Web/API/PannerNode/maxDistance)) zwischen der Quelle und dem Hörer einstellen — die Lautstärke wird nicht mehr weiter reduziert, wenn sich die Quelle weiter von diesem Punkt entfernt.
Dies kann nützlich sein, da Sie möglicherweise Entfernung simulieren möchten, aber die Lautstärke wird stumm geschaltet, und das ist eigentlich nicht das, was Sie wollen.
Standardmäßig beträgt sie 10.000 (einheitenloser relativer Wert). Wir können es dabei belassen:

```js
const maxDistance = 10000;
```

Es gibt auch eine Referenzentfernung ([`refDistance`](/de/docs/Web/API/PannerNode/refDistance)), die von den Entfernungsmodellen verwendet wird.
Wir können dies ebenfalls auf dem Standardwert von `1` belassen:

```js
const refDistance = 1;
```

Dann gibt es den Roll-off-Faktor ([`rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor)) — wie schnell reduziert sich die Lautstärke, wenn sich der Panner vom Hörer entfernt.
Der Standardwert ist 1; lassen Sie uns das etwas größer machen, um unsere Bewegungen zu übertreiben.

```js
const rollOff = 10;
```

Nun können wir beginnen, die Position und Ausrichtung unserer Boombox festzulegen.
Dies ist sehr ähnlich dem, wie wir es mit unserem Hörer gemacht haben.
Dies sind auch die Parameter, die wir ändern werden, wenn die Bedienelemente unserer Benutzeroberfläche verwendet werden.

```js
const positionX = posX;
const positionY = posY;
const positionZ = posZ;

const orientationX = 0.0;
const orientationY = 0.0;
const orientationZ = -1.0;
```

Beachten Sie den negativen Wert unserer z-Ausrichtung — dies setzt die Boombox so, dass sie uns zugewandt ist.
Ein positiver Wert würde die Tonquelle so einstellen, dass sie von uns weg zeigt.

Lassen Sie uns den relevanten Konstruktor verwenden, um unseren Panner Node zu erstellen und all diese zuvor eingestellten Parameter zu übergeben:

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

Jetzt werden wir unsere Boombox in unserem 'Raum' bewegen. Wir haben einige Steuerelemente eingerichtet, um dies zu tun.
Wir können sie nach links und rechts, oben und unten sowie vor und zurück bewegen; wir können sie auch rotieren.
Die Klangrichtung kommt von dem Lautsprecher der Boombox an der Vorderseite, sodass wir die Klangrichtung ändern können, wenn wir sie drehen — d.h. wir lassen sie nach hinten projizieren, wenn die Boombox um 180 Grad gedreht und von uns weg gewandt ist.

Wir müssen ein paar Dinge für die Benutzeroberfläche einrichten.
Zuerst holen wir uns Referenzen zu den Elementen, die wir bewegen wollen, dann speichern wir die Referenzen zu den Werten, die wir ändern werden, wenn wir [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) einrichten, um die Bewegung tatsächlich auszuführen.
Schließlich legen wir einige Grenzen fest, damit sich unsere Boombox nicht zu weit in eine Richtung bewegt:

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

Lassen Sie uns eine Funktion erstellen, die die Richtung, in die wir uns bewegen wollen, als Parameter nimmt und sowohl die CSS-Transformierung als auch die Positions- und Orientierungswerte unserer Panner Node-Eigenschaften modifiziert, um den Klang entsprechend zu ändern.

Zunächst lassen Sie uns unsere Links-, Rechts-, Oben- und Unten-Werte betrachten, da diese ziemlich einfach sind.
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

Ähnlich verhält es sich bei unseren Bewegungen rein und raus:

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

Unsere Rotationswerte sind jedoch etwas komplizierter, da wir den Klang _um_ bewegen müssen.
Nicht nur müssen wir zwei Achsenwerte aktualisieren (z.B. wenn Sie ein Objekt um die x-Achse drehen, aktualisieren Sie die y- und z-Koordinaten für dieses Objekt), sondern wir müssen auch ein bisschen mehr Mathematik dafür tun.
Die Rotation ist ein Kreis, und wir benötigen [`Math.sin`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sin) und [`Math.cos`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/cos), um uns zu helfen, diesen Kreis zu zeichnen.

Lassen Sie uns einen Rotationswert festlegen, den wir später bei `Math.sin` und `Math.cos` in einen Bogenmaßwert umwandeln, um die neuen Koordinaten herauszufinden, wenn wir unsere Boombox rotieren:

```js
// Set up rotation constants
const rotationRate = 60; // Bigger number equals slower sound rotation

const q = Math.PI / rotationRate; // Rotation increment in radians
```

Wir können dies auch verwenden, um herauszufinden, wie viele Grad rotiert wurden, was bei den CSS-Transformationen hilft, die wir erstellen (beachten Sie, dass wir eine x- und y-Achse für die CSS-Transformationen benötigen):

```js
// Get degrees for CSS
const degreesX = (q * 180) / Math.PI;
const degreesY = (q * 180) / Math.PI;
```

Schauen wir uns unsere Links-Rotation als Beispiel an. Wir müssen die x-Ausrichtung und die z-Ausrichtung der Panner-Koordinaten ändern, um um die y-Achse zu rotieren für unsere Links-Rotation:

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

Dies _ist_ ein wenig verwirrend, aber was wir tun, ist `sin` und `cos` zu verwenden, um uns zu helfen, die kreisförmige Bewegung der Koordinaten zu berechnen, die unsere Boombox dreht.

Wir können dies für alle Achsen tun. Wir müssen nur die richtigen Ausrichtungen wählen, die aktualisiert werden sollen, und ob wir eine positive oder negative Erhöhung wünschen.

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

Eine letzte Sache — wir müssen das CSS aktualisieren und eine Referenz des letzten Schritts für das Mausereignis behalten.
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

## Verdrahtung unserer Steuerungen

Das Verdrahten unserer Steuerungsknöpfe ist vergleichsweise einfach — jetzt können wir ein Mausereignis auf unseren Steuerungen lauschen und diese Funktion ausführen sowie sie stoppen, wenn die Maus freigegeben wird:

```js
// for each of our controls, move the boombox and change the position values
moveControls.forEach((el) => {
  let moving;
  el.addEventListener("mousedown", () => {
    const direction = this.dataset.control;
    if (moving && moving.frameId) {
      cancelAnimationFrame(moving.frameId);
    }
    moving = moveBoombox(direction);
  });

  window.addEventListener("mouseup", () => {
    if (moving && moving.frameId) {
      cancelAnimationFrame(moving.frameId);
    }
  });
});
```

## Verbinden unseres Graphen

Unser HTML enthält das Audio-Element, das von dem Panner Node beeinflusst werden soll.

```html
<audio src="myCoolTrack.mp3"></audio>
```

Wir müssen die Quelle aus diesem Element holen und in die Web Audio API mittels [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) einspeisen.

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

Als nächstes müssen wir unseren Audio-Graphen verbinden. Wir verbinden unseren Eingang (den Track) mit unserem Änderungs-Node (dem Panner) mit dem Ziel (in diesem Fall den Lautsprechern).

```js
track.connect(panner).connect(audioCtx.destination);
```

Lassen Sie uns einen Wiedergabeknopf erstellen, der bei einem Klick das Audio je nach aktuellem Zustand abspielt oder pausiert.

```html
<button data-playing="false" role="switch">Play/Pause</button>
```

```js
// Select our play button
const playButton = document.querySelector("button");

playButton.addEventListener("click", () => {
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
});
```

Für einen tieferen Einblick in das Abspielen/Steuern von Audio und Audio-Graphen sehen Sie sich [Verwenden Der Web Audio API.](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) an

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel einen Einblick gegeben, wie die räumliche Audiowiedergabe im Web funktioniert und was jede der [`PannerNode`](/de/docs/Web/API/PannerNode)-Eigenschaften leistet (es gibt ziemlich viele).
Die Werte können manchmal schwer zu manipulieren sein, und je nach Anwendungsfall kann es einige Zeit dauern, sie richtig einzustellen.

> [!NOTE]
> Es gibt geringfügige Unterschiede, wie die räumliche Audiowiedergabe in verschiedenen Browsern klingt.
> Der Panner Node führt einige sehr komplizierte Berechnungen unter der Haube durch;
> es gibt [hier eine Reihe von Tests](https://wpt.fyi/results/webaudio/the-audio-api/the-pannernode-interface?label=stable&aligned=true), sodass Sie den Status der inneren Abläufe dieses Nodes in verschiedenen Plattformen verfolgen können.

Erneut können Sie [das endgültige Demo hier ansehen](https://mdn.github.io/webaudio-examples/spatialization/), und der [endgültige Quellcode ist hier verfügbar](https://github.com/mdn/webaudio-examples/tree/main/spatialization).

Wenn Sie mit 3D-Spielen und/oder WebXR arbeiten, ist es eine gute Idee, eine 3D-Bibliothek zu nutzen, um solche Funktionen zu erstellen, anstatt zu versuchen, dies alles selbst von Grund auf zu tun.
Wir haben in diesem Artikel unsere eigene Lösung entwickelt, um Ihnen einen Eindruck davon zu vermitteln, wie es funktioniert, aber Sie sparen viel Zeit, indem Sie von der Arbeit anderer profitieren, die vor Ihnen getan wurde.
