---
title: Grundlagen der Webaudio-Räumlichkeit
slug: Web/API/Web_Audio_API/Web_audio_spatialization_basics
l10n:
  sourceCommit: 4ac938c14e06a9cf0e322fc614576f0f9819e674
---

{{DefaultAPISidebar("Web Audio API")}}

Als ob das umfangreiche Angebot an Klangverarbeitung (und anderen) Optionen nicht schon genug wäre, bietet die Web Audio API auch Funktionalitäten, mit denen Sie den Unterschied im Klang simulieren können, wenn sich ein Zuhörer um eine Klangquelle bewegt, z.B. das Panning, wenn Sie sich in einem 3D-Spiel um eine Klangquelle bewegen. Der offizielle Begriff dafür ist **Räumlichkeit**, und dieser Artikel behandelt die Grundlagen der Implementierung eines solchen Systems.

## Grundlagen der Räumlichkeit

In Web Audio werden komplexe 3D-Räumlichkeiten mit dem [`PannerNode`](/de/docs/Web/API/PannerNode) erstellt, der einfach gesagt im Wesentlichen ein Haufen cooler Mathematik ist, um Audio im 3D-Raum darzustellen. Stellen Sie sich Geräusche vor, die über Sie hinwegfliegen, sich von hinten anschleichen oder vor Ihnen hin- und herbewegen. So etwas eben.

Das ist wirklich nützlich für WebXR und Spiele. In 3D-Räumen ist es der einzige Weg, realistischen Klang zu erzielen. Bibliotheken wie [three.js](https://threejs.org/) und [A-frame](https://aframe.io/) nutzen sein Potenzial bei der Arbeit mit Klang. Es ist erwähnenswert, dass Sie den Klang nicht _zwangsläufig_ in einem vollen 3D-Raum bewegen müssen – Sie könnten sich auch auf eine 2D-Ebene beschränken, sodass dieses Node auch für die Planung eines 2D-Spiels geeignet wäre.

> [!NOTE]
> Es gibt auch einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode), der für den häufigen Anwendungsfall gedacht ist, einfache links-rechts-Stereo-Panning-Effekte zu erzeugen. Dieser ist viel einfacher zu verwenden, aber offensichtlich nicht annähernd so vielseitig. Wenn Sie nur einen einfachen Stereo-Panning-Effekt möchten, sollte unser [StereoPannerNode-Beispiel](https://mdn.github.io/webaudio-examples/stereo-panner-node/) ([Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/stereo-panner-node)) Ihnen alle benötigten Informationen liefern.

## 3D Boombox-Demo

Um die 3D-Räumlichkeit zu demonstrieren, haben wir eine modifizierte Version der Boombox-Demo erstellt, die wir in unserem grundlegenden [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) Leitfaden entwickelt haben. Sehen Sie sich die [3D-Räumlichkeits-Demo live an](https://mdn.github.io/webaudio-examples/spatialization/) (und sehen Sie sich auch den [Quellcode](https://github.com/mdn/webaudio-examples/tree/main/spatialization) an).

![Eine einfache Benutzeroberfläche mit einer gedrehten Boombox und Steuerelementen, um sie nach links und rechts sowie hinein und hinaus zu bewegen und zu drehen.](web-audio-spatialization.png)

Die Boombox befindet sich in einem Raum (definiert durch die Ränder des Browser-Viewports), und in dieser Demo können wir sie mit den bereitgestellten Steuerelementen bewegen und drehen. Wenn wir die Boombox bewegen, ändert sich der von ihr erzeugte Klang entsprechend, indem er nach links oder rechts im Raum bewegt oder leiser wird, wenn sie von dem Benutzer weg oder so gedreht wird, dass die Lautsprecher von ihm weg zeigen, usw. Dies wird erreicht, indem die verschiedenen Eigenschaften der `PannerNode`-Objektinstanz in Bezug auf diese Bewegung eingestellt werden, um Räumlichkeit zu simulieren.

> [!NOTE]
> Das Erlebnis ist viel besser, wenn Sie Kopfhörer benutzen oder Ihr Computer an ein Surround-Sound-System angeschlossen ist.

## Erstellen eines Audio-Listeners

Beginnen wir! Das [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) (das Interface, von dem [`AudioContext`](/de/docs/Web/API/AudioContext) erweitert wird) hat eine [`listener`](/de/docs/Web/API/BaseAudioContext/listener) Eigenschaft, die ein [`AudioListener`](/de/docs/Web/API/AudioListener) Objekt zurückgibt. Dies repräsentiert den Zuhörer der Szene, normalerweise Ihren Benutzer. Sie können definieren, wo sie sich im Raum befinden und in welche Richtung sie schauen. Sie bleiben statisch. Der `pannerNode` kann dann seine Klangposition im Verhältnis zur Position des Listeners berechnen.

Lassen Sie uns unser Kontext und den Listener erstellen und die Position des Listeners einstellen, um eine Person zu simulieren, die in unseren Raum schaut:

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

Wir könnten den Listener nach links oder rechts mit `positionX`, nach oben oder unten mit `positionY` oder in den oder aus dem Raum mit `positionZ` bewegen. Hier setzen wir den Listener in die Mitte des Viewports und leicht vor unsere Boombox. Wir können auch die Richtung setzen, in die der Listener schaut. Die Standardwerte dafür funktionieren gut:

```js
listener.forwardX.value = 0;
listener.forwardY.value = 0;
listener.forwardZ.value = -1;
listener.upX.value = 0;
listener.upY.value = 1;
listener.upZ.value = 0;
```

Die Forward-Eigenschaften repräsentieren die 3D-Koordinatenposition der Vorwärtsrichtung des Listeners (z.B. die Richtung, in die sie schauen), während die Up-Eigenschaften die 3D-Koordinatenposition des oberen Teils des Kopfes des Listeners repräsentieren. Diese beiden zusammen können die Richtung gut einstellen.

## Erstellen eines Panner-Knotens

Lassen Sie uns unseren [`PannerNode`](/de/docs/Web/API/PannerNode) erstellen. Dieser hat eine ganze Reihe von Eigenschaften, die damit verbunden sind. Schauen wir uns jede einzelne davon an:

Zu Beginn können wir das [`panningModel`](/de/docs/Web/API/PannerNode/panningModel) einstellen. Dies ist der Algorithmus zur Räumlichkeit, der verwendet wird, um das Audio im 3D-Raum zu positionieren. Wir können dies auf folgende Weise einstellen:

`equalpower` — Der Standard und die allgemeine Methode, wie das Panning berechnet wird

`HRTF` — Das steht für 'Head-related transfer function' und berücksichtigt den menschlichen Kopf bei der Berechnung, wo sich der Klang befindet.

Ziemlich clevere Sachen. Lassen Sie uns das `HRTF`-Modell verwenden!

```js
const panningModel = "HRTF";
```

Die [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle) und [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) Eigenschaften geben an, woher die Lautstärke stammt. Standardmäßig sind beide auf 360 Grad eingestellt. Unsere Boombox-Lautsprecher werden kleinere Kegel haben, die wir definieren können. Der innere Kegel ist, wo die Verstärkung (Lautstärke) immer maximal simuliert wird, und beim äußeren Kegel beginnt die Verstärkung zu sinken. Die Verstärkung wird um den Wert des [`coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) reduziert. Lassen Sie uns Konstanten erstellen, die die Werte speichern, die wir später für diese Parameter verwenden werden:

```js
const innerCone = 60;
const outerCone = 90;
const outerGain = 0.3;
```

Der nächste Parameter ist [`distanceModel`](/de/docs/Web/API/PannerNode/distanceModel) – dieser kann nur auf `linear`, `inverse` oder `exponential` gesetzt werden. Dies sind verschiedene Algorithmen, die verwendet werden, um die Lautstärke der Audioquelle zu reduzieren, wenn sie sich vom Zuhörer entfernt. Wir verwenden `linear`, da es einfach ist:

```js
const distanceModel = "linear";
```

Wir können eine maximale Entfernung ([`maxDistance`](/de/docs/Web/API/PannerNode/maxDistance)) zwischen der Quelle und dem Zuhörer festlegen – die Lautstärke wird nicht weiter reduziert, wenn sich die Quelle weiter als dieser Punkt entfernt. Dies kann nützlich sein, da Sie möglicherweise möchten, dass eine Entfernung simuliert wird, aber die Lautstärke kann ausfallen und das ist eigentlich nicht das, was Sie wollen. Standardmäßig beträgt sie 10.000 (ein einheitenloser relativer Wert). Wir können es so belassen:

```js
const maxDistance = 10000;
```

Es gibt auch eine Referenzentfernung ([`refDistance`](/de/docs/Web/API/PannerNode/refDistance)), die von den Distanzmodellen verwendet wird. Wir können dies ebenfalls auf den Standardwert `1` belassen:

```js
const refDistance = 1;
```

Dann gibt es den Roll-Off-Faktor ([`rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor)) – wie schnell die Lautstärke abnimmt, wenn sich der Panner vom Zuhörer entfernt. Der Standardwert ist 1; lassen Sie uns diesen etwas erhöhen, um unsere Bewegungen zu übertreiben.

```js
const rollOff = 10;
```

Jetzt können wir anfangen, die Position und die Ausrichtung unserer Boombox festzulegen. Dies ist sehr ähnlich wie bei unserem Listener. Dies sind auch die Parameter, die wir ändern werden, wenn die Steuerelemente auf unserer Benutzeroberfläche verwendet werden.

```js
const positionX = posX;
const positionY = posY;
const positionZ = posZ;

const orientationX = 0.0;
const orientationY = 0.0;
const orientationZ = -1.0;
```

Beachten Sie den negativen Wert unserer z-Ausrichtung – dieser setzt die Boombox so, dass sie zu uns zeigt. Ein positiver Wert würde die Klangquelle so einstellen, dass sie von uns wegzeigt.

Lassen Sie uns den relevanten Konstruktor für die Erstellung unseres Panner-Knotens verwenden und all diese zuvor eingestellten Parameter übergeben:

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

## Verschieben der Boombox

Jetzt werden wir unsere Boombox in unserem 'Raum' bewegen. Wir haben einige Steuerelemente eingerichtet, um dies zu tun. Wir können sie nach links und rechts, oben und unten sowie vor und zurück bewegen; wir können sie auch drehen. Die Richtung des Klangs kommt von dem Lautsprecher der Boombox an der Vorderseite, sodass wir beim Drehen die Richtung des Klangs ändern können – z.B. ihn nach hinten projizieren, wenn die Boombox um 180 Grad gedreht und von uns abgewandt ist.

Wir müssen ein paar Dinge für die Benutzeroberfläche einrichten. Zunächst erhalten wir Verweise auf die Elemente, die wir bewegen möchten, dann speichern wir Verweise auf die Werte, die wir ändern werden, wenn wir [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) einrichten, um tatsächlich die Bewegung durchzuführen. Schließlich setzen wir einige Grenzen, damit sich unsere Boombox nicht zu weit in eine Richtung bewegt:

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

Lassen Sie uns eine Funktion erstellen, die die Richtung, in die wir uns bewegen möchten, als Parameter nimmt und sowohl die CSS-Transformation modifiziert als auch die Positions- und Orientierungswerte der Eigenschaften unseres Pannernodes aktualisiert, um den Klang entsprechend zu ändern.

Beginnen wir mit unseren Werten für links, rechts, oben und unten, da diese ziemlich einfach sind. Wir bewegen die Boombox entlang dieser Achsen und aktualisieren die entsprechende Position.

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

Es ist eine ähnliche Geschichte für unsere Werte für hinein und hinaus:

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

Unsere Rotationswerte sind jedoch etwas komplexer, da wir den Klang _herum_ bewegen müssen. Nicht nur, dass wir zwei Achsenwerte aktualisieren müssen (z.B. wenn Sie ein Objekt um die x-Achse drehen, aktualisieren Sie die y- und z-Koordinaten für dieses Objekt), wir müssen dafür auch mehr Mathematik verwenden. Die Rotation ist ein Kreis, und wir benötigen [`Math.sin`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sin) und [`Math.cos`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/cos), um uns bei der Darstellung dieses Kreises zu helfen.

Lassen Sie uns eine Rotationsrate festlegen, die wir in einen Bogenmaß-Radiuswert umwandeln, der später in `Math.sin` und `Math.cos` verwendet wird, wenn wir die neuen Koordinaten bestimmen, wenn wir unsere Boombox drehen:

```js
// Set up rotation constants
const rotationRate = 60; // Bigger number equals slower sound rotation

const q = Math.PI / rotationRate; // Rotation increment in radians
```

Wir können dies auch verwenden, um die Rotationsgrade zu berechnen, die bei den CSS-Transformationen, die wir erstellen müssen, helfen werden (beachten Sie, dass wir sowohl eine x- als auch eine y-Achse für die CSS-Transformationen benötigen):

```js
// Get degrees for CSS
const degreesX = (q * 180) / Math.PI;
const degreesY = (q * 180) / Math.PI;
```

Schauen wir uns die linke Rotation als Beispiel an. Wir müssen die x-Ausrichtung und die z-Ausrichtung der Panner-Koordinaten ändern, um uns für unsere linke Rotation um die y-Achse zu bewegen:

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

Dies _ist_ etwas verwirrend, aber was wir tun ist, sin und cos zu verwenden, um uns bei der Berechnung der kreisförmigen Bewegung zu helfen, die die Koordinaten für die Rotation der Boombox benötigen.

Wir können dies für alle Achsen tun. Wir müssen nur die richtigen Orientierungen auswählen, die aktualisiert werden sollen, und ob wir eine positive oder negative Erhöhung wünschen.

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

Eine letzte Sache – wir müssen das CSS aktualisieren und eine Referenz der letzten Bewegung für das Mouse-Event behalten. Hier ist die endgültige `moveBoombox`-Funktion.

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

## Verdrahten unserer Steuerungen

Das Verdrahten unserer Steuerknöpfe ist vergleichsweise einfach – jetzt können wir ein Mouse-Event auf unseren Steuerungen abhören und diese Funktion ausführen sowie es stoppen, wenn die Maus losgelassen wird:

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

Unser HTML enthält das Audioelement, das vom Pannernode beeinflusst werden soll.

```html
<audio src="myCoolTrack.mp3"></audio>
```

Wir müssen die Quelle von diesem Element erfassen und es mit der Web Audio API über [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) einfügen.

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

Als nächstes müssen wir unseren Audiographen verbinden. Wir verbinden unsere Eingabe (die Spur) mit unserem Modifikationsknoten (dem Panner) mit unserem Ziel (in diesem Fall den Lautsprechern).

```js
track.connect(panner).connect(audioCtx.destination);
```

Lassen Sie uns eine Wiedergabetaste erstellen, die beim Klicken die Wiedergabe startet oder das Audio pausiert, abhängig vom aktuellen Status.

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

Für einen vertieften Einblick in das Abspielen und Steuern von Audio und Audiographen schauen Sie sich [Verwendung der Web Audio API.](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) an.

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel einen Einblick gegeben, wie die Web-Audio-Räumlichkeit funktioniert und was jede der [`PannerNode`](/de/docs/Web/API/PannerNode)-Eigenschaften bewirkt (es gibt ziemlich viele davon). Die Werte können manchmal schwierig zu manipulieren sein und je nach Anwendungsfall kann es einige Zeit dauern, sie richtig einzustellen.

> [!NOTE]
> Es gibt leichte Unterschiede in der Art, wie die Audio-Räumlichkeit in verschiedenen Browsern klingt. Der Pannernode führt im Hintergrund einige sehr komplexe Berechnungen durch; es gibt eine [Anzahl von Tests hier](https://wpt.fyi/results/webaudio/the-audio-api/the-pannernode-interface?label=stable&aligned=true), damit Sie den Status der inneren Abläufe dieses Nodes auf verschiedenen Plattformen nachverfolgen können.

Erneut können Sie [das endgültige Demo hier anschauen](https://mdn.github.io/webaudio-examples/spatialization/), und der [endgültige Quellcode ist hier](https://github.com/mdn/webaudio-examples/tree/main/spatialization).

Wenn Sie mit 3D-Spielen und/oder WebXR arbeiten, ist es eine gute Idee, eine 3D-Bibliothek zu nutzen, um eine solche Funktionalität zu erstellen, anstatt zu versuchen, dies alles selbst von Grund auf neu zu tun. Wir haben unsere eigene in diesem Artikel erstellt, um Ihnen eine Vorstellung davon zu geben, wie es funktioniert, aber Sie werden viel Zeit sparen, indem Sie Arbeiten nutzen, die andere vor Ihnen bereits geleistet haben.
