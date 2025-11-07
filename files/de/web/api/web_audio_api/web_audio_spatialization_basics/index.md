---
title: Grundlagen der Audio-Räumlichkeit im Web
slug: Web/API/Web_Audio_API/Web_audio_spatialization_basics
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("Web Audio API")}}

Als ob die umfangreiche Bandbreite an Klangverarbeitungs- (und anderen) Optionen noch nicht genug wäre, enthält die Web Audio API auch Möglichkeiten, um die Unterschiede im Klang zu emulieren, wenn ein Zuhörer sich um eine Schallquelle herum bewegt, zum Beispiel ein Panning, wenn Sie sich innerhalb eines 3D-Spiels um eine Schallquelle bewegen. Der offizielle Begriff hierfür ist **Räumlichkeit**, und dieser Artikel behandelt die Grundlagen der Implementierung eines solchen Systems.

## Grundlagen der Räumlichkeit

In Web Audio werden komplexe 3D-Räumlichkeiten mit dem [`PannerNode`](/de/docs/Web/API/PannerNode) erstellt, der in einfachen Worten im Wesentlichen viele coole mathematische Berechnungen enthält, um Audio im 3D-Raum erscheinen zu lassen. Stellen Sie sich vor, Klänge fliegen über Sie hinweg, schleichen sich hinter Ihnen an, bewegen sich vor Ihnen vorbei. So etwas in der Art.

Es ist wirklich nützlich für WebXR und Spiele. In 3D-Räumen ist es die einzige Möglichkeit, realistisches Audio zu erzielen. Bibliotheken wie [three.js](https://threejs.org/) und [A-frame](https://aframe.io/) nutzen dieses Potenzial bei der Arbeit mit Klang. Es ist erwähnenswert, dass Sie den Klang nicht in einem vollständigen 3D-Raum bewegen _müssen_ — Sie könnten auch nur mit einer 2D-Ebene arbeiten, sodass dies auch der Knoten ist, den Sie suchen, wenn Sie ein 2D-Spiel planen.

> [!NOTE]
> Es gibt auch einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode), der für den häufigen Anwendungsfall entwickelt wurde, einfache links-rechts-Stereopanorama-Effekte zu erzeugen. Dieser ist viel einfacher zu verwenden, aber natürlich bei weitem nicht so vielseitig. Wenn Sie nur einen einfachen Stereo-Panorama-Effekt möchten, sollte unser [StereoPannerNode-Beispiel](https://mdn.github.io/webaudio-examples/stereo-panner-node/) ([siehe Quellcode](https://github.com/mdn/webaudio-examples/tree/main/stereo-panner-node)) alles bieten, was Sie brauchen.

## 3D-Boombox-Demo

Um die 3D-Räumlichkeit zu demonstrieren, haben wir eine modifizierte Version der Boombox-Demo erstellt, die wir in unserem grundlegenden [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)-Leitfaden erstellt haben. Sehen Sie sich die [3D-Räumlichkeitsdemo live an](https://mdn.github.io/webaudio-examples/spatialization/) (und sehen Sie sich auch den [Quellcode](https://github.com/mdn/webaudio-examples/tree/main/spatialization) an).

![Eine einfache Benutzeroberfläche mit einer gedrehten Boombox und Bedienelementen, um sie nach links und rechts zu bewegen sowie rein und raus und zu drehen.](web-audio-spatialization.png)

Die Boombox befindet sich in einem Raum (definiert durch die Ränder des Browser-Viewports), und in dieser Demo können wir sie mit den bereitgestellten Bedienelementen bewegen und drehen. Wenn wir die Boombox bewegen, ändert sich der von ihr produzierte Klang entsprechend, indem er zu den linken oder rechten Raumseiten schwenkt oder leiser wird, wenn sie vom Benutzer wegbewegt wird oder so gedreht wird, dass die Lautsprecher von ihm weggedreht sind usw. Dies geschieht durch das Setzen der verschiedenen Eigenschaften der `PannerNode`-Objektinstanz in Bezug auf diese Bewegung, um Räumlichkeit zu emulieren.

> [!NOTE]
> Das Erlebnis ist viel besser, wenn Sie Kopfhörer verwenden oder ein Surround-Soundsystem an Ihren Computer anschließen.

## Erstellen eines Audio-Listeners

Also los geht's! Der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) (die Schnittstelle, von der [`AudioContext`](/de/docs/Web/API/AudioContext) erweitert wird) hat eine [`listener`](/de/docs/Web/API/BaseAudioContext/listener)-Eigenschaft, die ein [`AudioListener`](/de/docs/Web/API/AudioListener)-Objekt zurückgibt. Dies stellt den Zuhörer der Szene dar, normalerweise Ihren Benutzer. Sie können festlegen, wo sie sich im Raum befinden und in welche Richtung sie blicken. Sie bleiben statisch. Der `pannerNode` kann dann seine Klangposition relativ zur Position des Zuhörers berechnen.

Lassen Sie uns unseren Kontext und den Zuhörer erstellen und die Position des Zuhörers festlegen, um eine Person zu emulieren, die in unseren Raum schaut:

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

Wir könnten den Zuhörer nach links oder rechts mit `positionX`, nach oben oder unten mit `positionY` oder in den Raum hinein oder aus dem Raum heraus mit `positionZ` bewegen. Hier setzen wir den Zuhörer in die Mitte des Viewports und leicht vor unsere Boombox. Wir können auch die Blickrichtung des Zuhörers festlegen. Die Standardwerte dafür funktionieren gut:

```js
listener.forwardX.value = 0;
listener.forwardY.value = 0;
listener.forwardZ.value = -1;
listener.upX.value = 0;
listener.upY.value = 1;
listener.upZ.value = 0;
```

Die Vorwärts-Eigenschaften repräsentieren die 3D-Koordinatenposition der Vorwärtsrichtung des Zuhörers (z. B. die Richtung, in die sie blicken), während die oberen Eigenschaften die 3D-Koordinatenposition der Oberseite des Kopfes des Zuhörers darstellen. Diese beiden zusammen können die Richtung schön festlegen.

## Erstellen eines Panner-Knotens

Lassen Sie uns unseren [`PannerNode`](/de/docs/Web/API/PannerNode) erstellen. Dieser hat eine ganze Reihe von Eigenschaften, die damit verbunden sind. Schauen wir uns jede davon an:

Zunächst können wir das [`panningModel`](/de/docs/Web/API/PannerNode/panningModel) festlegen. Dies ist der Algorithmus zur Räumlichkeit, der verwendet wird, um das Audio im 3D-Raum zu positionieren. Wir können dies auf folgende Optionen setzen:

`equalpower` — Der Standard und die allgemeine Methode, wie Panning ermittelt wird

`HRTF` — Dies steht für „Head-related Transfer Function“ (Kopfbezogene Transferfunktion) und versucht, den menschlichen Kopf zu berücksichtigen, wenn ermittelt wird, wo sich der Klang befindet.

Ziemlich clevere Sachen. Lasst uns das `HRTF`-Modell verwenden!

```js
const panningModel = "HRTF";
```

Die Eigenschaften [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle) und [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) spezifizieren, von wo der Klang ausgeht. Standardmäßig sind beide 360 Grad. Unsere Boombox-Lautsprecher werden kleinere Kegel haben, die wir definieren können. Der innere Kegel ist der Bereich, in dem die Verstärkung (Lautstärke) immer auf Maximum emuliert wird, und der äußere Kegel ist der Bereich, in dem die Verstärkung abzunehmen beginnt. Die Verstärkung wird um den Wert der [`coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) reduziert. Lassen Sie uns Konstanten erstellen, die die Werte speichern, die wir später für diese Parameter verwenden werden:

```js
const innerCone = 60;
const outerCone = 90;
const outerGain = 0.3;
```

Der nächste Parameter ist [`distanceModel`](/de/docs/Web/API/PannerNode/distanceModel) — dieser kann nur auf `linear`, `inverse` oder `exponential` gesetzt werden. Dies sind unterschiedliche Algorithmen, die verwendet werden, um das Audio-Level der Schallquelle zu reduzieren, wenn sie sich vom Zuhörer entfernt. Wir werden `linear` verwenden, da es einfach ist:

```js
const distanceModel = "linear";
```

Wir können einen maximalen Abstand ([`maxDistance`](/de/docs/Web/API/PannerNode/maxDistance)) zwischen der Quelle und dem Zuhörer festlegen — das Klangvolumen wird nicht weiter reduziert, wenn sich die Quelle von diesem Punkt weiter entfernt. Dies kann nützlich sein, da Sie möglicherweise Entfernung emulieren möchten, aber das Klangvolumen kann abfallen, was tatsächlich nicht das ist, was Sie wollen. Standardmäßig beträgt es 10.000 (ein einheitenloser relativer Wert). Wir können es dabei belassen:

```js
const maxDistance = 10000;
```

Es gibt auch einen Referenzabstand ([`refDistance`](/de/docs/Web/API/PannerNode/refDistance)), der von den Distanzmodellen verwendet wird. Wir können diesen ebenfalls auf den Standardwert `1` belassen:

```js
const refDistance = 1;
```

Dann gibt es den Abrollfaktor ([`rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor)), der angibt, wie schnell das Klangvolumen abnimmt, wenn sich der Panner vom Zuhörer entfernt. Der Standardwert ist 1; lassen Sie uns diesen etwas größer machen, um unsere Bewegungen zu betonen.

```js
const rollOff = 10;
```

Jetzt können wir beginnen, die Position und Orientierung unserer Boombox festzulegen. Dies ist ähnlich wie bei unserem Zuhörer. Dies sind auch die Parameter, die wir ändern werden, wenn die Bedienelemente unserer Benutzeroberfläche verwendet werden.

```js
const positionX = posX;
const positionY = posY;
const positionZ = posZ;

const orientationX = 0.0;
const orientationY = 0.0;
const orientationZ = -1.0;
```

Beachten Sie den Minuswert bei unserer z-Orientierung — dies setzt die Boombox so, dass sie uns zugewandt ist. Ein positiver Wert würde die Klangquelle so setzen, dass sie uns abgewandt ist.

Lassen Sie uns den relevanten Konstruktor verwenden, um unseren Panner-Knoten zu erstellen und alle oben festgelegten Parameter übergeben:

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

Nun werden wir unsere Boombox in unserem 'Raum' bewegen. Wir haben einige Steuerelemente eingerichtet, um dies zu tun. Wir können sie nach links und rechts, auf und ab sowie vor und zurück bewegen; wir können sie auch drehen. Die Klangrichtung kommt von den Lautsprechern der Boombox an der Vorderseite, sodass wir durch Drehen die Klangrichtung ändern können — d.h. sie nach hinten projizieren, wenn die Boombox um 180 Grad gedreht und von uns abgewandt ist.

Wir müssen einige Dinge für die Benutzeroberfläche einrichten. Zunächst erhalten wir Referenzen zu den Elementen, die wir bewegen möchten, dann speichern wir Referenzen zu den Werten, die wir ändern, wenn wir [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) einrichten, um die Bewegung tatsächlich durchzuführen. Schließlich setzen wir einige Grenzen, damit sich unsere Boombox nicht zu weit in eine Richtung bewegt:

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

Lassen Sie uns eine Funktion erstellen, die die Richtung, in die wir uns bewegen möchten, als Parameter nimmt und sowohl die CSS-Transformation als auch die Positions- und Orientierungswerte unserer Panner-Knoten-Eigenschaften aktualisiert, um den Klang entsprechend zu ändern.

Zunächst lassen Sie uns einen Blick auf unsere Links-, Rechts-, Auf- und Ab-Werte werfen, da diese ziemlich einfach sind. Wir werden die Boombox entlang dieser Achsen bewegen und die entsprechende Position aktualisieren.

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

Es ist eine ähnliche Geschichte für unsere hinein- und hinausgehenden Werte:

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

Unsere Rotationswerte sind jedoch etwas komplexer, da wir den Klang _herum_ bewegen müssen. Wir müssen nicht nur zwei Achsenwerte aktualisieren (z. B. wenn Sie ein Objekt um die x-Achse drehen, aktualisieren Sie die y- und z-Koordinaten für dieses Objekt), sondern wir müssen auch etwas mehr Mathematik dafür betreiben. Die Rotation ist ein Kreis und wir benötigen [`Math.sin`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sin) und [`Math.cos`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/cos), um uns dabei zu helfen, diesen Kreis zu zeichnen.

Lassen Sie uns eine Rotationsrate festlegen, die wir später in einen Bogenmaßbereichswert umwandeln werden, um in `Math.sin` und `Math.cos` zu verwenden, wenn wir die neuen Koordinaten bei der Drehung unserer Boombox bestimmen möchten:

```js
// Set up rotation constants
const rotationRate = 60; // Bigger number equals slower sound rotation

const q = Math.PI / rotationRate; // Rotation increment in radians
```

Wir können dies auch verwenden, um den gedrehten Grad herauszufinden, was bei den CSS-Transformationen hilft, die wir erstellen müssen (beachten Sie, dass wir für die CSS-Transformationen sowohl eine x- als auch eine y-Achse benötigen):

```js
// Get degrees for CSS
const degreesX = (q * 180) / Math.PI;
const degreesY = (q * 180) / Math.PI;
```

Schauen wir uns als Beispiel unsere linke Rotation an. Wir müssen die x-Orientierung und die z-Orientierung der Panner-Koordinaten ändern, um uns um die y-Achse für unsere linke Rotation zu bewegen:

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

Das _ist_ ein wenig verwirrend, aber was wir tun, ist sin und cos zu verwenden, um uns zu helfen, die Kreisbewegung zu ermitteln, die die Koordinaten für die Rotation der Boombox benötigen.

Wir können dies für alle Achsen tun. Wir müssen nur die richtigen Orientierungen zum Aktualisieren wählen und ob wir eine positive oder negative Erhöhung wünschen.

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

Eine letzte Sache — wir müssen das CSS aktualisieren und eine Referenz zur letzten Bewegung für das Mausereignis behalten. Hier ist die endgültige `moveBoombox`-Funktion.

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

## Verkabeln unserer Bedienelemente

Das Verkabeln unserer Steuerknöpfe ist vergleichsweise einfach — jetzt können wir auf ein Mausereignis bei unseren Steuerelementen hören und diese Funktion ausführen sowie sie stoppen, wenn die Maus losgelassen wird:

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

## Verbindung unseres Graphen

Unser HTML enthält das Audio-Element, das vom Panner-Knoten beeinflusst werden soll.

```html
<audio src="myCoolTrack.mp3"></audio>
```

Wir müssen die Quelle von diesem Element greifen und sie in die Web Audio API mit der [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) leiten.

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

Als Nächstes müssen wir unseren Audio-Graphen verbinden. Wir verbinden unseren Eingang (den Track) mit unserem Modifikationsknoten (dem Panner) mit unserem Ziel (in diesem Fall den Lautsprechern).

```js
track.connect(panner).connect(audioCtx.destination);
```

Lassen Sie uns einen Wiedergabeknopf erstellen, der bei Klick das Audio je nach aktuellem Zustand abspielt oder pausiert.

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

Für einen tiefergehenden Blick auf das Abspielen/Steuern von Audio und Audio-Graphen sehen Sie sich [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) an.

## Zusammenfassung

Hoffentlich hat dieser Artikel Ihnen einen Einblick gegeben, wie Web-Audio-Räumlichkeit funktioniert und was jede der [`PannerNode`](/de/docs/Web/API/PannerNode)-Eigenschaften bewirkt (es gibt davon ziemlich viele). Die Werte können manchmal schwer zu manipulieren sein, und je nach Ihrem Anwendungsfall kann es einige Zeit dauern, sie richtig einzustellen.

> [!NOTE]
> Es gibt leichte Unterschiede in der Art und Weise, wie die Audio-Räumlichkeit in verschiedenen Browsern klingt. Der Panner-Knoten macht einige sehr komplexe Berechnungen im Hintergrund; es gibt eine [Anzahl von Tests hier](https://wpt.fyi/results/webaudio/the-audio-api/the-pannernode-interface?label=stable&aligned=true), sodass Sie den Status der internen Abläufe dieses Knotens auf verschiedenen Plattformen verfolgen können.

Noch einmal, Sie können sich [die endgültige Demo hier ansehen](https://mdn.github.io/webaudio-examples/spatialization/), und [der endgültige Quellcode ist hier](https://github.com/mdn/webaudio-examples/tree/main/spatialization).

Wenn Sie mit 3D-Spielen und/oder WebXR arbeiten, ist es eine gute Idee, eine 3D-Bibliothek zu nutzen, um solche Funktionalitäten zu erstellen, anstatt zu versuchen, dies alles selbst von Grund auf zu machen. Wir haben in diesem Artikel unsere eigene Implementierung erstellt, um Ihnen eine Vorstellung davon zu geben, wie es funktioniert, aber Sie sparen viel Zeit, wenn Sie sich die Arbeit zunutze machen, die andere vor Ihnen geleistet haben.
