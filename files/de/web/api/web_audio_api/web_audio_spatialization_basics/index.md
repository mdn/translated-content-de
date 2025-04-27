---
title: Grundlagen der Web-Audio-Räumlichkeit
slug: Web/API/Web_Audio_API/Web_audio_spatialization_basics
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{DefaultAPISidebar("Web Audio API")}}

Als ob die umfangreiche Vielfalt an Klangverarbeitungsoptionen (und anderen) nicht genug wäre, umfasst die Web Audio API auch Funktionen, die es Ihnen ermöglichen, den Unterschied im Klang zu emulieren, wenn sich ein Hörer um eine Klangquelle herumbewegt, zum Beispiel das Panning, wenn Sie sich in einem 3D-Spiel um eine Klangquelle bewegen.
Der offizielle Begriff dafür ist **Räumlichkeit**, und dieser Artikel behandelt die Grundlagen der Implementierung eines solchen Systems.

## Grundlagen der Räumlichkeit

Im Web Audio werden komplexe 3D-Räumlichkeiten mit dem [`PannerNode`](/de/docs/Web/API/PannerNode) erstellt, der in einfachen Worten ziemlich viele coole mathematische Operationen ausführt, um Audio im 3D-Raum erscheinen zu lassen.
Denken Sie an Geräusche, die über Ihnen hinwegfliegen, sich von hinten anschleichen, vor Ihnen hinüberziehen.
Solche Dinge eben.

Es ist wirklich nützlich für WebXR und Gaming.
In 3D-Räumen ist es der einzige Weg, um realistisches Audio zu erreichen. Bibliotheken wie [three.js](https://threejs.org/) und [A-frame](https://aframe.io/) nutzen ihr Potenzial, wenn es um Sound geht.
Es ist erwähnenswert, dass Sie den Ton nicht _unbedingt_ in einem vollständigen 3D-Raum bewegen müssen - Sie könnten sich auch nur auf eine 2D-Ebene beschränken, also wenn Sie ein 2D-Spiel planen, wäre dies dennoch der Knoten, den Sie suchen.

> [!NOTE]
> Es gibt auch einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode), der für den häufigen Anwendungsfall entwickelt wurde, einfache links-rechts Stereo-Panning-Effekte zu erzeugen.
> Dieser ist viel einfacher zu verwenden, aber offensichtlich bei weitem nicht so vielseitig.
> Wenn Sie nur einen einfachen Stereo-Panning-Effekt wünschen, sollte Ihnen unser [StereoPannerNode-Beispiel](https://mdn.github.io/webaudio-examples/stereo-panner-node/) ([siehe Quellcode](https://github.com/mdn/webaudio-examples/tree/main/stereo-panner-node)) alles bieten, was Sie brauchen.

## 3D-Boombox-Demo

Um die 3D-Räumlichkeit zu demonstrieren, haben wir eine modifizierte Version der Boombox-Demo erstellt, die wir in unserem grundlegenden [Verwenden der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) Leitfaden erstellt haben.
Sehen Sie die [3D-Räumlichkeits-Demo live](https://mdn.github.io/webaudio-examples/spatialization/) (und sehen Sie auch [den Quellcode](https://github.com/mdn/webaudio-examples/tree/main/spatialization)).

![Eine einfache Benutzeroberfläche mit einer gedrehten Boombox und Bedienelementen, um sie nach links und rechts sowie hinein und hinaus zu bewegen und zu drehen.](web-audio-spatialization.png)

Die Boombox sitzt in einem Raum (definiert durch die Ränder des Browser-Viewports), und in dieser Demo können wir sie mit den bereitgestellten Steuerelementen bewegen und drehen.
Wenn wir die Boombox bewegen, ändert sich der von ihr erzeugte Klang entsprechend, indem er schwenkt, wenn sie sich nach links oder rechts im Raum bewegt, oder leiser wird, wenn sie vom Benutzer weg bewegt oder so gedreht wird, dass die Lautsprecher von ihm weg zeigen etc.
Dies wird erreicht, indem die verschiedenen Eigenschaften des `PannerNode`-Objektinstanz in Bezug auf diese Bewegung eingestellt werden, um die Räumlichkeit zu emulieren.

> [!NOTE]
> Die Erfahrung ist viel besser, wenn Sie Kopfhörer benutzen oder eine Art Surround-Sound-System haben, an das Sie Ihren Computer anschließen können.

## Erstellung eines Audiolisteners

Dann wollen wir beginnen! Das [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) (das Interface, von dem das [`AudioContext`](/de/docs/Web/API/AudioContext) erweitert wird) hat eine [`listener`](/de/docs/Web/API/BaseAudioContext/listener) Eigenschaft, die ein [`AudioListener`](/de/docs/Web/API/AudioListener) Objekt zurückgibt.
Dies repräsentiert den Hörer der Szene, üblicherweise Ihren Benutzer.
Sie können definieren, wo er sich im Raum befindet und in welche Richtung er schaut.
Er bleibt statisch. Der `pannerNode` kann dann seine Klangposition relativ zur Position des Hörers berechnen.

Lassen Sie uns unseren Kontext und Listener erstellen und die Position des Listeners so einstellen, dass sie eine Person nachahmt, die in unseren Raum schaut:

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

Wir könnten den Listener nach links oder rechts mit `positionX`, nach oben oder unten mit `positionY` oder hinein oder hinaus aus dem Raum mit `positionZ` bewegen. Hier setzen wir den Listener in die Mitte des Viewports und leicht vor unsere Boombox. Wir können auch die Richtung einstellen, in die der Listener schaut. Die Standardwerte hierfür funktionieren gut:

```js
listener.forwardX.value = 0;
listener.forwardY.value = 0;
listener.forwardZ.value = -1;
listener.upX.value = 0;
listener.upY.value = 1;
listener.upZ.value = 0;
```

Die Vorwärts-Eigenschaften repräsentieren die 3D-Koordinatenposition der Vorwärtsrichtung des Listeners (d.h. die Richtung, in die er blickt), während die Aufwärts-Eigenschaften die 3D-Koordinatenposition des Oberkopfs des Listeners repräsentieren.
Diese beiden zusammen können die Richtung gut einstellen.

## Erstellen eines Panner-Nodes

Erstellen wir unseren [`PannerNode`](/de/docs/Web/API/PannerNode). Dieser hat eine ganze Menge von Eigenschaften, die ihm zugeordnet sind. Lassen Sie uns jede von ihnen ansehen:

Zunächst können wir das [`panningModel`](/de/docs/Web/API/PannerNode/panningModel) einstellen.
Dies ist der Räumlichkeitsalgorithmus, der verwendet wird, um das Audio im 3D-Raum zu positionieren. Wir können dies auf Folgendes setzen:

`equalpower` — Der Standard und die allgemeine Methode, wie Panning herausgefunden wird

`HRTF` — Dies steht für 'Head-related transfer function' und versucht, den menschlichen Kopf zu berücksichtigen, wenn er herausfindet, wo der Klang ist.

Ziemlich schlaue Sachen. Lassen Sie uns das `HRTF`-Modell verwenden!

```js
const panningModel = "HRTF";
```

Die Eigenschaften [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle) und [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) geben an, woher das Volumen ausgeht.
Standardmäßig sind beide 360 Grad.
Unsere Boombox-Lautsprecher werden kleinere Kegel haben, die wir definieren können.
Der innere Kegel ist, wo der Gewinn (Lautstärke) immer auf dem Maximum emuliert wird und der äußere Kegel ist, wo der Gewinn zu sinken beginnt.
Der Gewinn wird durch den Wert des [`coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) verringert.
Lassen Sie uns Konstanten erstellen, die die Werte speichern, die wir später für diese Parameter verwenden werden:

```js
const innerCone = 60;
const outerCone = 90;
const outerGain = 0.3;
```

Der nächste Parameter ist [`distanceModel`](/de/docs/Web/API/PannerNode/distanceModel) — dies kann nur auf `linear`, `inverse` oder `exponential` gesetzt werden. Dies sind verschiedene Algorithmen, die verwendet werden, um das Volumen der Audioquelle zu verringern, wenn sie sich vom Hörer entfernt. Wir verwenden `linear`, da es einfach ist:

```js
const distanceModel = "linear";
```

Wir können eine maximale Distanz ([`maxDistance`](/de/docs/Web/API/PannerNode/maxDistance)) zwischen der Quelle und dem Hörer einstellen — das Volumen wird nicht weiter reduziert, wenn sich die Quelle weiter von diesem Punkt entfernt bewegt.
Dies kann nützlich sein, da Sie vielleicht emulieren möchten, dass die Distanz, aber das Volumen abnimmt und das ist tatsächlich nicht das, was Sie wollen.
Standardmäßig liegt sie bei 10.000 (ein einheitsloser relativer Wert). Wir können es dabei belassen:

```js
const maxDistance = 10000;
```

Es gibt auch eine Referenzdistanz ([`refDistance`](/de/docs/Web/API/PannerNode/refDistance)), die von den Distanzmodellen verwendet wird.
Wir können diese ebenfalls auf den Standardwert von `1` belassen:

```js
const refDistance = 1;
```

Dann gibt es den Abrollfaktor ([`rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor)) — wie schnell reduziert sich das Volumen, wenn sich der Panner vom Hörer entfernt.
Der Standardwert ist 1; lassen Sie uns das ein wenig größer machen, um unsere Bewegungen zu übertreiben.

```js
const rollOff = 10;
```

Jetzt können wir damit beginnen, die Position und Ausrichtung unserer Boombox festzulegen.
Das ist sehr ähnlich, wie wir es mit unserem Listener gemacht haben.
Dies sind auch die Parameter, die wir ändern werden, wenn die Steuerelemente auf unserer Benutzeroberfläche verwendet werden.

```js
const positionX = posX;
const positionY = posY;
const positionZ = posZ;

const orientationX = 0.0;
const orientationY = 0.0;
const orientationZ = -1.0;
```

Beachten Sie den negativen Wert bei unserer z-Ausrichtung — dies setzt die Boombox so, dass sie uns zugewandt ist.
Ein positiver Wert würde die Klangquelle uns abgewandt setzen.

Lassen Sie uns den relevanten Konstruktor verwenden, um unseren Panner-Node zu erstellen und alle diese Parameter, die wir oben festgelegt haben, zu übergeben:

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
Wir können sie nach links und rechts, nach oben und unten und vor und zurück bewegen; wir können sie auch drehen.
Die Richtung des Klanges kommt von der Vorderseite des Boombox-Lautsprechers, sodass wir die Richtung des Klanges ändern können, wenn wir sie drehen — d.h. sie dazu bringen, nach hinten zu projizieren, wenn die Boombox um 180 Grad gedreht ist und von uns weg zeigt.

Wir müssen ein paar Dinge für die Benutzeroberfläche einrichten.
Zuerst erhalten wir Referenzen zu den Elementen, die wir bewegen möchten, dann speichern wir Referenzen zu den Werten, die wir ändern werden, wenn wir [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) einrichten, um die Bewegung tatsächlich durchzuführen.
Schließlich setzen wir einige Grenzen, damit unsere Boombox sich nicht zu weit in irgendeine Richtung bewegt:

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

Lassen Sie uns eine Funktion erstellen, die die Richtung, in die wir uns bewegen möchten, als Parameter übernimmt und sowohl die CSS-Transformation ändert als auch die Positions- und Ausrichtungswerte unserer Panner-Node-Eigenschaften aktualisiert, um den Klang entsprechend zu ändern.

Zunächst werfen wir einen Blick auf unsere Werte für links, rechts, hoch und runter, da diese ziemlich einfach sind.
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

Eine ähnliche Geschichte gilt auch für unsere Vorwärts- und Rückwärtsbewegungen:

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

Unsere Drehungswerte sind jedoch etwas komplizierter, da wir den Klang _herum_ bewegen müssen.
Nicht nur müssen wir zwei Achsenwerte aktualisieren (z. B. wenn Sie ein Objekt um die x-Achse drehen, aktualisieren Sie die y- und z-Koordinaten für dieses Objekt), sondern wir müssen auch dafür ein paar mehr mathematische Berechnungen durchführen.
Die Drehung ist ein Kreis, und wir benötigen [`Math.sin`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sin) und [`Math.cos`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/cos), um uns dabei zu helfen, diesen Kreis zu zeichnen.

Lassen Sie uns eine Rotationsrate einrichten, die wir später in einen Bogenmaßbereichswert konvertieren können, um ihn in `Math.sin` und `Math.cos` zu verwenden, wenn wir die neuen Koordinaten berechnen möchten, wenn wir unsere Boombox drehen:

```js
// Set up rotation constants
const rotationRate = 60; // Bigger number equals slower sound rotation

const q = Math.PI / rotationRate; // Rotation increment in radians
```

Wir können dies auch verwenden, um die gedrehten Grad zu berechnen, was bei den CSS-Transformationen, die wir erstellen müssen, helfen wird (beachten Sie, dass wir sowohl eine x- als auch eine y-Achse für die CSS-Transformationen benötigen):

```js
// Get degrees for CSS
const degreesX = (q * 180) / Math.PI;
const degreesY = (q * 180) / Math.PI;
```

Schauen wir uns als Beispiel unsere Linksdrehung an. Wir müssen die x-Ausrichtung und die z-Ausrichtung der Panner-Koordinaten ändern, um um die y-Achse für unsere Linksdrehung zu bewegen:

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

Das _ist_ ein bisschen verwirrend, aber was wir tun, ist sin und cos zu verwenden, um uns dabei zu helfen, die kreisförmige Bewegung zu ermitteln, die die Koordinaten für die Drehung der Boombox benötigen.

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

Eine letzte Sache - wir müssen das CSS und eine Referenz der letzten Bewegung für das Mausereignis aktualisieren.
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

## Verkabelung unserer Steuerelemente

Das Verkabeln unserer Steuerknöpfe ist vergleichsweise einfach - jetzt können wir auf ein Mausereignis an unseren Steuerelementen hören und diese Funktion ausführen sowie es stoppen, wenn die Maus losgelassen wird:

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

Unser HTML enthält das Audioelement, das durch den Panner-Node beeinflusst werden soll.

```html
<audio src="myCoolTrack.mp3"></audio>
```

Wir müssen die Quelle aus diesem Element herausholen und in die Web Audio API mittels [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) einspeisen.

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

Als nächstes müssen wir unseren Audio-Graphen verbinden. Wir verbinden unser Eingabegerät (den Track) mit unserem Modifikationsknoten (dem Panner) zu unserem Ziel (in diesem Fall die Lautsprecher).

```js
track.connect(panner).connect(audioCtx.destination);
```

Lassen Sie uns eine Wiedergabetaste erstellen, die, wenn sie geklickt wird, das Audio abhängig vom aktuellen Zustand abspielt oder pausiert.

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

Für einen tiefergehenden Blick auf das Abspielen/Steuern von Audio und Audiographen schauen Sie sich die [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) an.

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel einen Einblick darüber gegeben, wie Web-Audio-Räumlichkeit funktioniert und was jede der [`PannerNode`](/de/docs/Web/API/PannerNode)-Eigenschaften tut (es gibt ziemlich viele davon).
Die Werte können manchmal schwer zu manipulieren sein und je nach Anwendungsfall kann es einige Zeit dauern, sie richtig hinzubekommen.

> [!NOTE]
> Es gibt leichte Unterschiede in der Art und Weise, wie die Audio-Räumlichkeit über verschiedene Browser hinweg klingt.
> Der Panner-Node führt unter der Haube einige sehr komplexe Berechnungen durch;
> es gibt hier eine [Anzahl von Tests](https://wpt.fyi/results/webaudio/the-audio-api/the-pannernode-interface?label=stable&aligned=true), damit Sie den Status der inneren Abläufe dieses Nodes über verschiedene Plattformen hinweg verfolgen können.

Sie können sich das [finale Demo hier ansehen](https://mdn.github.io/webaudio-examples/spatialization/) und [den finalen Quellcode hier finden](https://github.com/mdn/webaudio-examples/tree/main/spatialization).
Es gibt auch ein [CodePen-Demo](https://codepen.io/Rumyra/pen/MqayoK?editors=0100).

Wenn Sie mit 3D-Spielen und/oder WebXR arbeiten, ist es eine gute Idee, eine 3D-Bibliothek zu nutzen, um solche Funktionalitäten zu erstellen, anstatt alles selbst von Grund auf neu zu machen.
Wir haben unser eigenes System in diesem Artikel erstellt, um Ihnen eine Vorstellung davon zu geben, wie es funktioniert, aber Sie sparen viel Zeit, wenn Sie von der Arbeit anderer profitieren, die vor Ihnen gegangen sind.
