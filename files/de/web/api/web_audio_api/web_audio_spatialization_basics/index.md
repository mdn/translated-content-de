---
title: Grundlagen der räumlichen Audiowiedergabe im Web
slug: Web/API/Web_Audio_API/Web_audio_spatialization_basics
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{DefaultAPISidebar("Web Audio API")}}

Neben einer Vielzahl von Optionen zur Klangverarbeitung (und anderen Möglichkeiten) bietet die Web Audio API auch Funktionen, um Unterschiede im Klang zu emulieren, wenn sich ein Hörer um eine Klangquelle herum bewegt, beispielsweise durch Schwenken, während Sie sich innerhalb eines 3D-Spiels um eine Klangquelle bewegen. Der offizielle Begriff dafür ist **Spatialization**, und dieser Artikel behandelt die Grundlagen zur Implementierung eines solchen Systems.

## Grundlagen der Spatialization

In der Web Audio API werden komplexe 3D-Räumlichkeiten mithilfe des [`PannerNode`](/de/docs/Web/API/PannerNode) erstellt, was im Grunde genommen eine Menge cooles Mathematik ist, um Audio im 3D-Raum erscheinen zu lassen. Denken Sie an Klänge, die über Sie hinwegfliegen, sich von hinten anschleichen oder vor Ihnen bewegen. So etwas eben.

Das ist besonders nützlich für WebXR und Spiele. In 3D-Räumen ist es die einzige Möglichkeit, realistischen Klang zu erzielen. Bibliotheken wie [three.js](https://threejs.org/) und [A-frame](https://aframe.io/) nutzen sein Potenzial im Umgang mit Klang. Es ist erwähnenswert, dass Sie den Klang nicht unbedingt in einem vollen 3D-Raum bewegen müssen — Sie könnten sich auch nur auf eine 2D-Ebene beschränken. Wenn Sie beispielsweise ein 2D-Spiel planen, wäre dies ebenfalls der Knoten, den Sie suchen.

> [!NOTE]
> Es gibt auch einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode), der für den häufigen Anwendungsfall der Erstellung einfacher Links-Rechts-Stereo-Panning-Effekte entwickelt wurde. Dieser ist deutlich einfacher zu verwenden, ist aber offensichtlich nicht annähernd so vielseitig. Wenn Sie nur einen einfachen Stereo-Panning-Effekt wünschen, sollte unser [StereoPannerNode-Beispiel](https://mdn.github.io/webaudio-examples/stereo-panner-node/) ([Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/stereo-panner-node)) alles bieten, was Sie benötigen.

## 3D-Boombox-Demo

Um die 3D-Räumlichkeit zu demonstrieren, haben wir eine angepasste Version der Boombox-Demo erstellt, die wir in unserem grundlegenden [Leitfaden zur Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) entwickelt haben. Sehen Sie sich die [3D-Räumlichkeitsdemo live](https://mdn.github.io/webaudio-examples/spatialization/) an (und sehen Sie sich auch den [Quellcode](https://github.com/mdn/webaudio-examples/tree/main/spatialization) an).

![Eine einfache Benutzeroberfläche mit einer gedrehten Boombox und Steuerungen, um sie nach links und rechts und hinein und heraus zu bewegen und zu drehen.](web-audio-spatialization.png)

Die Boombox befindet sich in einem Raum (definiert durch die Kanten des Browser-Viewports), und in dieser Demo können wir sie mit den bereitgestellten Steuerungen bewegen und drehen. Wenn wir die Boombox bewegen, ändert sich der von ihr erzeugte Klang entsprechend, in dem der Klang nach links oder rechts im Raum schwenkt oder leiser wird, wenn sie vom Benutzer weg bewegt wird oder so gedreht wird, dass die Lautsprecher von ihm weg zeigen usw. Dies geschieht, indem die verschiedenen Eigenschaften der `PannerNode`-Objektinstanz in Bezug auf diese Bewegung gesetzt werden, um die Raumklangdarstellung zu emulieren.

> [!NOTE]
> Das Erlebnis ist viel besser, wenn Sie Kopfhörer verwenden oder ein Surround-Sound-System haben, an das Sie Ihren Computer anschließen können.

## Erstellen eines Audio-Listeners

Lassen Sie uns beginnen! Das [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) (die Schnittstelle, von der das [`AudioContext`](/de/docs/Web/API/AudioContext) erweitert wird) verfügt über eine [`listener`](/de/docs/Web/API/BaseAudioContext/listener)-Eigenschaft, die ein [`AudioListener`](/de/docs/Web/API/AudioListener)-Objekt zurückgibt. Dieses stellt den Hörer der Szene dar, normalerweise Ihren Benutzer. Sie können definieren, wo er sich im Raum befindet und in welche Richtung er blickt. Er bleibt statisch. Der `pannerNode` kann dann seine Klangposition relativ zur Position des Hörers berechnen.

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

Wir könnten den Listener nach links oder rechts bewegen, indem wir `positionX` verwenden, nach oben oder unten mit `positionY` oder in oder aus dem Raum mit `positionZ`. Hier setzen wir den Listener in die Mitte des Viewports und leicht vor unsere Boombox. Wir können auch die Blickrichtung des Listeners festlegen. Die Standardwerte hierfür funktionieren gut:

```js
listener.forwardX.value = 0;
listener.forwardY.value = 0;
listener.forwardZ.value = -1;
listener.upX.value = 0;
listener.upY.value = 1;
listener.upZ.value = 0;
```

Die Vorwärtseigenschaften repräsentieren die 3D-Koordinatenposition der Vorwärtsrichtung des Listeners (d. h. die Richtung, in die er blickt), während die Aufwärtseigenschaften die 3D-Koordinatenposition der Oberseite des Kopfes des Listeners darstellen. Diese beiden zusammen können die Richtung gut einstellen.

## Erstellen eines Panner-Knotens

Lassen Sie uns unseren [`PannerNode`](/de/docs/Web/API/PannerNode) erstellen. Dieser hat eine ganze Reihe von Eigenschaften, die ihm zugeordnet sind. Lassen Sie uns jede von ihnen ansehen:

Zunächst können wir das [`panningModel`](/de/docs/Web/API/PannerNode/panningModel) festlegen. Dies ist der Raumklang-Algorithmus, der verwendet wird, um das Audio im 3D-Raum zu positionieren. Wir können dies auf folgende Einstellungen setzen:

`equalpower` — Der Standardwert und die allgemeine Art und Weise, wie das Panning berechnet wird.

`HRTF` — Dies steht für "Head-related transfer function" und berücksichtigt den menschlichen Kopf bei der Berechnung, wo der Klang sich befindet.

Ziemlich clevere Sachen. Lassen Sie uns das `HRTF`-Modell verwenden!

```js
const panningModel = "HRTF";
```

Die [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle) und [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle)-Eigenschaften geben an, von woher die Lautstärke ausgeht. Standardmäßig haben beide 360 Grad. Unsere Boombox-Lautsprecher werden kleinere Kegel haben, die wir definieren können. Der innere Kegel ist der Bereich, in dem die Verstärkung (Lautstärke) immer maximal emuliert wird, und der äußere Kegel ist der Bereich, in dem die Verstärkung beginnt abzunehmen. Die Verstärkung wird um den Wert der [`coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) reduziert. Lassen Sie uns Konstanten erstellen, die die Werte speichern, die wir später für diese Parameter verwenden werden:

```js
const innerCone = 60;
const outerCone = 90;
const outerGain = 0.3;
```

Der nächste Parameter ist [`distanceModel`](/de/docs/Web/API/PannerNode/distanceModel) — dieser kann nur auf `linear`, `inverse` oder `exponential` gesetzt werden. Dies sind unterschiedliche Algorithmen, die verwendet werden, um die Lautstärke der Audioquelle zu reduzieren, wenn sie sich vom Hörer entfernt. Wir werden `linear` verwenden, da es einfach ist:

```js
const distanceModel = "linear";
```

Wir können eine maximale Entfernung ([`maxDistance`](/de/docs/Web/API/PannerNode/maxDistance)) zwischen der Quelle und dem Hörer festlegen — die Lautstärke wird nicht weiter reduziert, wenn sich die Quelle weiter von diesem Punkt entfernt. Dies kann nützlich sein, da Sie möglicherweise die Entfernung nachahmen möchten, aber die Lautstärke kann ausfallen und das ist eigentlich nicht das, was Sie wollen. Standardmäßig beträgt dieser Wert 10.000 (einheitsloser relativer Wert). Wir können dies so belassen:

```js
const maxDistance = 10000;
```

Es gibt auch eine Referenzdistanz ([`refDistance`](/de/docs/Web/API/PannerNode/refDistance)), die von den Distanzmodellen verwendet wird. Wir können diesen ebenfalls auf den Standardwert `1` belassen:

```js
const refDistance = 1;
```

Dann gibt es den Abschwächungsfaktor ([`rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor)) — wie schnell nimmt die Lautstärke ab, wenn sich der Panner vom Hörer entfernt. Der Standardwert ist 1; lassen Sie uns das ein wenig größer machen, um unsere Bewegungen zu übertreiben.

```js
const rollOff = 10;
```

Nun können wir mit der Festlegung der Position und Orientierung unserer Boombox beginnen. Dies ist sehr ähnlich wie bei unserem Hörer. Dies sind auch die Parameter, die wir ändern werden, wenn die Steuerelemente in unserer Benutzeroberfläche verwendet werden.

```js
const positionX = posX;
const positionY = posY;
const positionZ = posZ;

const orientationX = 0.0;
const orientationY = 0.0;
const orientationZ = -1.0;
```

Beachten Sie den negativen Wert in unserer z-Ausrichtung — dies setzt die Boombox, dass sie uns zugewandt ist. Ein positiver Wert würde die Klangquelle so einstellen, dass sie von uns weg zeigt.

Lassen Sie uns den relevanten Konstruktor zum Erstellen unseres Panner-Knotens verwenden und all diese Parameter übergeben, die wir oben festgelegt haben:

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

## Bewegung der Boombox

Jetzt werden wir unsere Boombox in unserem "Raum" bewegen. Wir haben einige Steuerelemente eingerichtet, um dies zu tun. Wir können sie nach links und rechts, oben und unten, sowie vor und zurück bewegen; wir können sie auch drehen. Die Klangrichtung stammt von den Lautsprechern der Boombox vorne, sodass wir beim Drehen die Klangrichtung ändern können — d.h., die Klangrichtung nach hinten projizieren, wenn die Boombox um 180 Grad gedreht und uns abgewandt ist.

Wir müssen einige Dinge für die Benutzeroberfläche einrichten. Zuerst holen wir uns die Referenzen zu den zu bewegenden Elementen, dann speichern wir die Referenzen zu den Werten, die wir ändern werden, wenn wir [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) einrichten, um die tatsächliche Bewegung durchzuführen. Schließlich legen wir einige Grenzen fest, damit sich unsere Boombox nicht zu weit in eine Richtung bewegt:

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

Lassen Sie uns eine Funktion erstellen, die die Richtung, in die wir uns bewegen möchten, als Parameter nimmt, sowohl die CSS-Transformation ändert als auch die Positions- und Orientierungswerte unserer Panner-Knoteneigenschaften aktualisiert, um den Klang entsprechend zu modifizieren.

Zunächst können wir uns die Werte für links, rechts, oben und unten ansehen, da diese ziemlich unkompliziert sind. Wir bewegen die Boombox entlang dieser Achsen und aktualisieren die entsprechende Position.

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

Ähnlich verhält es sich bei den Werten für die Bewegungen hinein und hinaus:

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

Unsere Rotationswerte sind jedoch etwas umfangreicher, da wir den Klang _herum_ bewegen müssen. Wir müssen nicht nur zwei Achsenwerte aktualisieren (z.B. bei der Drehung eines Objekts um die x-Achse, die y- und z-Koordinaten für dieses Objekt aktualisieren), wir müssen dafür auch noch mehr Mathematik einsetzen. Die Rotationsbewegung ist ein Kreis, und wir benötigen [`Math.sin`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sin) und [`Math.cos`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/cos), um uns dabei zu helfen, diesen Kreis zu zeichnen.

Lassen Sie uns eine Rotationsrate einrichten, die wir in einen Bereich mit Radiantenwerten für die Verwendung in `Math.sin` und `Math.cos` umwandeln, wenn wir die neuen Koordinaten berechnen möchten, wenn wir unsere Boombox drehen:

```js
// set up rotation constants
const rotationRate = 60; // bigger number equals slower sound rotation

const q = Math.PI / rotationRate; //rotation increment in radians
```

Wir können dies auch verwenden, um die gedrehten Grad zu berechnen, die bei den CSS-Transformationen helfen werden, die wir erstellen müssen (beachten Sie, dass wir sowohl eine x- als auch eine y-Achse für die CSS-Transformationen benötigen):

```js
// get degrees for CSS
const degreesX = (q * 180) / Math.PI;
const degreesY = (q * 180) / Math.PI;
```

Nehmen wir als Beispiel unsere Linksrotation. Wir müssen die x-Ausrichtung und die z-Ausrichtung der Panner-Koordinaten ändern, um eine Rotation um die y-Achse für unsere Linksrotation zu erreichen:

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

Das _ist_ ein wenig verwirrend, aber was wir tun, ist, Sinus und Cosinus zu verwenden, um uns zu helfen, die Kreisbewegung zu berechnen, die die Koordinaten für die Böogen.</Codeαγogrotation der Boombox benötigen.

Wir können dies für alle Achsen tun. Wir müssen nur die richtigen Ausrichtungen auswählen, die aktualisiert werden sollen, und entscheiden, ob wir einen positiven oder negativen Anstieg wünschen.

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

Eine letzte Sache — wir müssen das CSS aktualisieren und eine Referenz für die letzte Bewegung beim Mausereignis behalten. Hier ist die endgültige `moveBoombox`-Funktion.

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

Die Verkabelung unserer Steuertasten ist vergleichsweise einfach — jetzt können wir auf ein Mausereignis bei unseren Steuerungen hören und diese Funktion ausführen, sowie sie stoppen, wenn die Maus losgelassen wird:

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

Unser HTML enthält das Audioelement, das vom Panner-Knoten beeinflusst werden soll.

```html
<audio src="myCoolTrack.mp3"></audio>
```

Wir müssen die Quelle aus diesem Element beziehen und sie mit der Web Audio API mithilfe von [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) verbinden.

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

Als nächstes müssen wir unser Audio-Diagramm verbinden. Wir verbinden unsere Eingabe (den Track) mit unserem Modifikationsknoten (dem Panner) mit unserem Ziel (in diesem Fall die Lautsprecher).

```js
track.connect(panner).connect(audioCtx.destination);
```

Lassen Sie uns eine Wiedergabetaste erstellen, die beim Klicken die Wiedergabe des Audios startet oder pausiert, je nach aktuellem Zustand.

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

Für einen tieferen Einblick in das Abspielen / Steuern von Audio und Audiografen lesen Sie den [Leitfaden zur Verwendung der Web Audio API.](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel einen Einblick in die Funktionsweise der Web Audio Spatialization gegeben und erklärt, was jede der [`PannerNode`](/de/docs/Web/API/PannerNode)-Eigenschaften tut (es gibt ziemlich viele davon). Es kann manchmal schwierig sein, die Werte zu manipulieren, und je nach Anwendungsfall kann es einige Zeit dauern, bis Sie sie richtig eingestellt haben.

> [!NOTE]
> Es gibt leichte Unterschiede in der Art und Weise, wie die Audio-Spatialization in verschiedenen Browsern klingt. Der Panner-Knoten führt sehr komplexe Berechnungen im Hintergrund durch; es gibt eine [Anzahl von Tests hier](https://wpt.fyi/results/webaudio/the-audio-api/the-pannernode-interface?label=stable&aligned=true), sodass Sie den Status der inneren Arbeitsweise dieses Knotens auf verschiedenen Plattformen verfolgen können.

Sie können das [abschließende Demo hier ansehen](https://mdn.github.io/webaudio-examples/spatialization/), und der [abschließende Quellcode ist hier](https://github.com/mdn/webaudio-examples/tree/main/spatialization). Es gibt auch ein [CodePen-Demo](https://codepen.io/Rumyra/pen/MqayoK?editors=0100).

Wenn Sie mit 3D-Spielen und/oder WebXR arbeiten, ist es eine gute Idee, eine 3D-Bibliothek zu nutzen, um solche Funktionen zu erstellen, anstatt alles von Grund auf selbst zu machen. Wir haben unser eigenes in diesem Artikel erstellt, um Ihnen eine Vorstellung davon zu geben, wie es funktioniert, aber Sie sparen viel Zeit, indem Sie die Arbeit anderer nutzen, die bereits vor Ihnen gemacht wurde.
