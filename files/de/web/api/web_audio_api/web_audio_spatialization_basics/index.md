---
title: Grundlagen der Audio-Raumklang-Verarbeitung
slug: Web/API/Web_Audio_API/Web_audio_spatialization_basics
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{DefaultAPISidebar("Web Audio API")}}

Als ob die umfangreiche Vielfalt an Sound-Verarbeitungs- (und anderen) Optionen nicht genug wäre, bietet die Web Audio API auch Möglichkeiten, den Unterschied im Klang zu simulieren, wenn sich ein Hörer um eine Klangquelle herum bewegt, beispielsweise das Panning, wenn Sie sich in einem 3D-Spiel um eine Klangquelle bewegen.
Der offizielle Begriff hierfür ist **Raumklang** (Spatialization) und dieser Artikel behandelt die Grundlagen, wie ein solches System implementiert werden kann.

## Grundlagen der Raumklang-Verarbeitung

In Web Audio werden komplexe 3D-Raumklang-Verarbeitungen mithilfe des [`PannerNode`](/de/docs/Web/API/PannerNode) erstellt, was im Grunde viel „cooles“ Mathe ist, um Audio im 3D-Raum erscheinen zu lassen.
Denken Sie an Töne, die über Ihnen fliegen, sich hinter Ihnen heranschleichen oder vor Ihnen hin und her bewegen.
So etwas in der Art.

Es ist wirklich nützlich für WebXR und Gaming.
In 3D-Räumen ist es die einzige Möglichkeit, realistischen Sound zu erzielen. Bibliotheken wie [three.js](https://threejs.org/) und [A-frame](https://aframe.io/) nutzen das Potenzial bei der Arbeit mit Sound.
Es ist erwähnenswert, dass Sie den Sound nicht unbedingt in einem vollen 3D-Raum bewegen müssen — Sie könnten auch nur bei einer 2D-Ebene bleiben, also wenn Sie ein 2D-Spiel planen, wäre dies immer noch der Node, den Sie suchen.

> [!NOTE]
> Es gibt auch einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode), der für den häufigen Anwendungsfall gedacht ist, einfache Links-Rechts-Stereo-Panning-Effekte zu erzeugen.
> Dieser ist viel einfacher zu verwenden, aber natürlich bei weitem nicht so vielseitig.
> Wenn Sie nur einen einfachen Stereo-Panning-Effekt möchten, sollte unser [StereoPannerNode-Beispiel](https://mdn.github.io/webaudio-examples/stereo-panner-node/) ([Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/stereo-panner-node)) Ihnen alles geben, was Sie brauchen.

## 3D-Boombox-Demo

Um die 3D-Raumklang-Verarbeitung zu demonstrieren, haben wir eine modifizierte Version der Boombox-Demo erstellt, die wir in unserem grundlegenden [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)-Leitfaden erstellt haben.
Sehen Sie sich die [3D-Raumklang-Demo live](https://mdn.github.io/webaudio-examples/spatialization/) an (und sehen Sie sich auch den [Quellcode](https://github.com/mdn/webaudio-examples/tree/main/spatialization) an).

![Eine einfache Benutzeroberfläche mit einer gedrehten Boombox und Steuerungen, um sie nach links und rechts sowie hinein und hinaus zu bewegen und zu drehen.](web-audio-spatialization.png)

Die Boombox sitzt in einem Raum (definiert durch die Ränder des Browser-Viewports), und in dieser Demo können wir sie mit den bereitgestellten Steuerungen bewegen und drehen.
Wenn wir die Boombox bewegen, ändert sich der von ihr erzeugte Klang entsprechend, panning nach links oder rechts im Raum oder wird leiser, wenn sie vom Benutzer weg bewegt oder so gedreht wird, dass die Lautsprecher von ihm wegzeigen usw.
Dies wird durch das Einstellen der verschiedenen Eigenschaften der `PannerNode`-Objektinstanz in Bezug auf diese Bewegung erreicht, um Raumklang zu simulieren.

> [!NOTE]
> Das Erlebnis ist viel besser, wenn Sie Kopfhörer oder ein Surround-Sound-System verwenden, an das Sie Ihren Computer anschließen können.

## Erstellen eines Audio-Listeners

Lassen Sie uns beginnen! Das [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) (die Schnittstelle, aus der das [`AudioContext`](/de/docs/Web/API/AudioContext) erweitert wird) hat eine [`listener`](/de/docs/Web/API/BaseAudioContext/listener)-Eigenschaft, die ein [`AudioListener`](/de/docs/Web/API/AudioListener)-Objekt zurückgibt.
Dies stellt den Hörer der Szene dar, normalerweise Ihren Benutzer.
Sie können definieren, wo er sich im Raum befindet und in welche Richtung er schaut.
Er bleibt statisch. Der `pannerNode` kann dann die Position seines Klangs relativ zur Position des Hörers berechnen.

Lassen Sie uns unseren Kontext und Hörer erstellen und die Position des Hörers so einstellen, dass sie eine Person simuliert, die in unseren Raum schaut:

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

Wir könnten den Hörer nach links oder rechts mit `positionX`, nach oben oder unten mit `positionY` oder in den Raum hinein oder hinaus mit `positionZ` bewegen. Hier setzen wir den Hörer in die Mitte des Viewports und leicht vor unsere Boombox. Wir können auch die Richtung einstellen, in die der Hörer schaut. Die Standardwerte dafür funktionieren gut:

```js
listener.forwardX.value = 0;
listener.forwardY.value = 0;
listener.forwardZ.value = -1;
listener.upX.value = 0;
listener.upY.value = 1;
listener.upZ.value = 0;
```

Die Forward-Eigenschaften repräsentieren die 3D-Koordinatenposition der Vorwärtsrichtung des Hörers (z. B. die Richtung, in die er schaut), während die Up-Eigenschaften die 3D-Koordinatenposition des oberen Teils des Kopfes des Hörers repräsentieren.
Diese beiden zusammen können die Richtung gut einstellen.

## Erstellen eines Panner-Knotens

Lassen Sie uns unseren [`PannerNode`](/de/docs/Web/API/PannerNode) erstellen. Dieser hat eine ganze Reihe von Eigenschaften, die mit ihm verbunden sind. Lassen Sie uns jeden von ihnen ansehen:

Zu Beginn können wir das [`panningModel`](/de/docs/Web/API/PannerNode/panningModel) einstellen.
Dies ist der Raumklang-Algorithmus, der verwendet wird, um das Audio im 3D-Raum zu positionieren. Wir können dies auf folgende Werte setzen:

`equalpower` — Der Standardwert und die allgemeine Methode, wie das Panning berechnet wird

`HRTF` — Dies steht für „Head-related transfer function“ und berücksichtigt den menschlichen Kopf, wenn berechnet wird, wo sich der Klang befindet.

Ziemlich clevere Sachen. Lassen Sie uns das `HRTF`-Modell verwenden!

```js
const panningModel = "HRTF";
```

Die Eigenschaften [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle) und [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) geben an, woher das Volumen kommt.
Standardmäßig sind beide 360 Grad.
Unsere Boombox-Lautsprecher werden kleinere Kegel haben, die wir definieren können.
Der innere Kegel ist der Bereich, in dem der Gain (das Volumen) immer maximal emuliert wird, und der äußere Kegel ist der Bereich, in dem der Gain abzunehmen beginnt.
Der Gain wird durch den Wert der [`coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) reduziert.
Lassen Sie uns Konstanten erstellen, die die Werte speichern, die wir später für diese Parameter verwenden werden:

```js
const innerCone = 60;
const outerCone = 90;
const outerGain = 0.3;
```

Der nächste Parameter ist [`distanceModel`](/de/docs/Web/API/PannerNode/distanceModel) — dies kann nur auf `linear`, `inverse` oder `exponential` gesetzt werden. Dies sind unterschiedliche Algorithmen, die verwendet werden, um die Lautstärke der Audioquelle zu reduzieren, wenn sie sich vom Hörer entfernt. Wir werden `linear` verwenden, da es einfach ist:

```js
const distanceModel = "linear";
```

Wir können eine maximale Entfernung ([`maxDistance`](/de/docs/Web/API/PannerNode/maxDistance)) zwischen der Quelle und dem Hörer festlegen — das Volumen wird nicht weiter reduziert, wenn die Quelle sich weiter von diesem Punkt entfernt.
Dies kann nützlich sein, da Sie möglicherweise Entfernungen emulieren möchten, aber das Volumen kann abnehmen, und das ist tatsächlich nicht gewünscht.
Standardmäßig beträgt sie 10.000 (ein einheitenloser relativer Wert). Wir können es so belassen:

```js
const maxDistance = 10000;
```

Es gibt auch eine Referenzentfernung ([`refDistance`](/de/docs/Web/API/PannerNode/refDistance)), die von den Distanzmodellen verwendet wird.
Wir können diese auch beim Standardwert von `1` lassen:

```js
const refDistance = 1;
```

Dann gibt es den Abrollfaktor ([`rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor)) — wie schnell reduziert sich die Lautstärke, wenn der Panner sich vom Hörer entfernt.
Der Standardwert ist 1; lassen Sie uns diesen etwas größer machen, um unsere Bewegungen zu betonen.

```js
const rollOff = 10;
```

Jetzt können wir damit beginnen, die Position und Orientierung unserer Boombox festzulegen.
Dies ist ähnlich wie wir es mit unserem Hörer gemacht haben.
Dies sind auch die Parameter, die wir ändern werden, wenn die Steuerungen unserer Benutzeroberfläche verwendet werden.

```js
const positionX = posX;
const positionY = posY;
const positionZ = posZ;

const orientationX = 0.0;
const orientationY = 0.0;
const orientationZ = -1.0;
```

Beachten Sie den negativen Wert bei unserer Z-Orientierung – dies setzt die Boombox so, dass sie uns zugewandt ist.
Ein positiver Wert würde die Klangquelle so setzen, dass sie von uns weg zeigt.

Lassen Sie uns den entsprechenden Konstruktor zum Erstellen unseres Panner-Nodes verwenden und alle diese oben gesetzten Parameter übergeben:

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

Jetzt werden wir unsere Boombox in unserem „Raum“ bewegen. Wir haben einige Steuerungen eingerichtet, um dies zu tun.
Wir können sie nach links und rechts, oben und unten sowie vorwärts und rückwärts bewegen; wir können sie auch drehen.
Die Klangrichtung kommt von den Boombox-Lautsprechern an der Vorderseite, so dass, wenn wir sie drehen, die Klangrichtung geändert werden kann – z. B. nach hinten projizieren, wenn die Boombox um 180 Grad gedreht ist und von uns weg zeigt.

Wir müssen einige Dinge für die Benutzeroberfläche einrichten.
Zuerst beziehen wir uns auf die Elemente, die wir bewegen wollen, dann speichern wir Referenzen zu den Werten, die wir ändern werden, wenn wir [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) einrichten, um tatsächlich die Bewegung durchzuführen.
Schließlich setzen wir einige Grenzen, damit unsere Boombox nicht zu weit in irgendeine Richtung wandert:

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

Lassen Sie uns eine Funktion erstellen, die die Richtung, in die wir uns bewegen wollen, als Parameter nimmt und sowohl die CSS-Transformation modifiziert als auch die Positions- und Orientierungswerte der Eigenschaften unseres Panner-Nodes aktualisiert, um den Sound entsprechend zu ändern.

Zu Beginn werfen wir einen Blick auf unsere Links-, Rechts-, Auf- und Ab-Werte, da diese ziemlich einfach sind.
Wir werden die Boombox entlang dieser Achsen bewegen und die entsprechende Position aktualisieren.

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

Eine ähnliche Geschichte gilt auch für unsere Hinein- und Heraus-Werte:

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

Unsere Drehwerte sind jedoch etwas umfangreicher, da wir den Sound _herum_ bewegen müssen.
Nicht nur müssen wir zwei Achsenwerte aktualisieren (z.B., wenn Sie ein Objekt um die X-Achse drehen, aktualisieren Sie die Y- und Z-Koordinaten für das Objekt), sondern wir müssen dafür auch mehr Mathematik betreiben.
Die Drehung ist ein Kreis und wir benötigen [`Math.sin`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sin) und [`Math.cos`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/cos), um uns zu helfen, diesen Kreis zu zeichnen.

Lassen Sie uns eine Drehungsgeschwindigkeit einrichten, die wir später in einen Bogenmaß-Bereichswert umwandeln werden, wenn wir `Math.sin` und `Math.cos` verwenden, um die neuen Koordinaten zu berechnen, wenn wir unsere Boombox drehen:

```js
// Set up rotation constants
const rotationRate = 60; // Bigger number equals slower sound rotation

const q = Math.PI / rotationRate; // Rotation increment in radians
```

Wir können dies auch verwenden, um gedrehte Winkel auszuarbeiten, was bei den CSS-Transformationen, die wir erstellen müssen (beachten Sie, dass wir sowohl eine X- als auch eine Y-Achse für die CSS-Transformationen benötigen), hilfreich sein wird:

```js
// Get degrees for CSS
const degreesX = (q * 180) / Math.PI;
const degreesY = (q * 180) / Math.PI;
```

Schauen wir uns unser Linksdrehen als Beispiel an. Wir müssen die X-Orientierung und die Z-Orientierung der Panner-Koordinaten ändern, um die linke Drehung um die Y-Achse herum zu bewegen:

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

Das _ist_ ein wenig verwirrend, aber was wir tun, ist `sin` und `cos` zu verwenden, um die kreisförmige Bewegung der Koordinaten für die Drehung der Boombox auszuarbeiten.

Wir können dies für alle Achsen tun. Wir müssen nur die richtigen Orientierungen zum Aktualisieren wählen und ob wir eine positive oder negative Erhöhung haben möchten.

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

Eine letzte Sache – wir müssen das CSS aktualisieren und eine Referenz für die letzte Bewegung für das Mausereignis behalten.
Hier ist die finale `moveBoombox`-Funktion.

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

## Verkabelung unserer Steuerungen

Das Verkabeln unserer Steuerknöpfe ist vergleichsweise einfach — jetzt können wir auf ein Mausereignis an unseren Steuerungen hören und diese Funktion ausführen sowie es stoppen, wenn die Maus losgelassen wird:

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

## Verbinden unserers Graphen

Unser HTML enthält das Audiosystem, das von dem Panner-Node beeinträchtigt werden soll.

```html
<audio src="myCoolTrack.mp3"></audio>
```

Wir müssen die Quelle dieses Elements nehmen und sie in die Web Audio API einspeisen, indem wir [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) verwenden.

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

Als Nächstes müssen wir unseren Audiographen verbinden. Wir verbinden unsere Eingabe (den Track) mit unserem Modifikations-Node (dem Panner) mit unserem Ziel (in diesem Fall den Lautsprechern).

```js
track.connect(panner).connect(audioCtx.destination);
```

Lassen Sie uns eine Wiedergabetaste erstellen, die bei einem Klick die Audio je nach aktuellem Status abspielt oder pausiert.

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

Für einen tiefergehenden Einblick in das Abspielen/Steuern von Audio und Audiographen lesen Sie [Verwendung der Web Audio API.](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel einen Einblick gegeben, wie die Raumklang-Verarbeitung in Web Audio funktioniert und was jede der [`PannerNode`](/de/docs/Web/API/PannerNode)-Eigenschaften tut (es gibt eine ganze Menge davon).
Die Werte können manchmal schwer zu manipulieren sein und je nach Anwendungsfall kann es einige Zeit dauern, bis sie richtig eingestellt sind.

> [!NOTE]
> Es gibt geringfügige Unterschiede in der Art, wie die Audio-Raumklang-Verarbeitung in verschiedenen Browsern klingt.
> Der Panner-Node führt im Hintergrund sehr komplizierte Berechnungen durch;
> hier gibt es eine [Anzahl von Tests](https://wpt.fyi/results/webaudio/the-audio-api/the-pannernode-interface?label=stable&aligned=true), sodass Sie den Status der inneren Abläufe dieses Nodes auf verschiedenen Plattformen im Blick behalten können.

Noch einmal, Sie können [das endgültige Demo hier ansehen](https://mdn.github.io/webaudio-examples/spatialization/), und der [endgültige Quellcode ist hier](https://github.com/mdn/webaudio-examples/tree/main/spatialization).

Wenn Sie mit 3D-Spielen und/oder WebXR arbeiten, ist es ratsam, eine 3D-Bibliothek zu nutzen, um solche Funktionalitäten zu erstellen, anstatt zu versuchen, dies alles selbst von den Grundlagen her zu machen.
Wir haben in diesem Artikel unsere eigene Lösung entwickelt, um Ihnen eine Vorstellung davon zu geben, wie sie funktioniert, aber Sie sparen viel Zeit, wenn Sie die Arbeit anderer nutzen, die sie vor Ihnen erledigt haben.
