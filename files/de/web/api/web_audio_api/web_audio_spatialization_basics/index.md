---
title: Grundlagen der Web-Audio-Raumklangverarbeitung
slug: Web/API/Web_Audio_API/Web_audio_spatialization_basics
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("Web Audio API")}}

Als ob die Web Audio API mit ihrer Vielzahl von Möglichkeiten zur Klangverarbeitung (und anderen Optionen) noch nicht genug wäre, bietet sie auch Funktionen, um die Veränderung des Klangs zu emulieren, wenn sich ein Zuhörer um eine Klangquelle herum bewegt, z. B. das Panning, wenn Sie sich in einem 3D-Spiel um eine Klangquelle bewegen.
Der offizielle Begriff dafür ist **Raumklangverarbeitung**, und dieser Artikel behandelt die Grundlagen der Implementierung eines solchen Systems.

## Grundlagen der Raumklangverarbeitung

In Web Audio werden komplexe 3D-Raumklänge mit dem {{domxref("PannerNode")}} erstellt, was im Grunde genommen eine Menge cooler Mathematik ist, um Audio im 3D-Raum erscheinen zu lassen.
Denken Sie an Geräusche, die über Sie hinwegfliegen, sich von hinten anschleichen oder vor Ihnen vorbeiziehen.
Solche Dinge eben.

Es ist wirklich nützlich für WebXR und Gaming.
In 3D-Räumen ist dies der einzige Weg, um realistischen Klang zu erzielen. Bibliotheken wie [three.js](https://threejs.org/) und [A-frame](https://aframe.io/) nutzen ihr Potenzial, wenn es um Klang geht.
Es ist erwähnenswert, dass Sie den Klang nicht _unbedingt_ in einem vollständigen 3D-Raum bewegen müssen — Sie könnten sich auch auf eine 2D-Ebene beschränken. Wenn Sie also ein 2D-Spiel planen, wäre dies trotzdem der benötigte Knoten.

> [!NOTE]
> Es gibt auch einen {{domxref("StereoPannerNode")}}, der für den häufigen Anwendungsfall von einfachen Links-Rechts-Stereo-Panning-Effekten konzipiert ist.
> Dieser ist viel einfacher zu verwenden, aber natürlich bei weitem nicht so vielseitig.
> Wenn Sie nur einen einfachen Stereo-Panning-Effekt wünschen, sollte unser [StereoPannerNode-Beispiel](https://mdn.github.io/webaudio-examples/stereo-panner-node/) ([siehe Quellcode](https://github.com/mdn/webaudio-examples/tree/main/stereo-panner-node)) alles bieten, was Sie benötigen.

## 3D-Boombox-Demo

Um die 3D-Raumklangverarbeitung zu demonstrieren, haben wir eine modifizierte Version der Boombox-Demo erstellt, die wir in unserem grundlegenden Leitfaden [Using the Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) erstellt haben.
Sehen Sie sich die [3D-Raumklang-Demo live an](https://mdn.github.io/webaudio-examples/spatialization/) (und sehen Sie sich auch den [Quellcode](https://github.com/mdn/webaudio-examples/tree/main/spatialization) an).

![Eine einfache Benutzeroberfläche mit einer gedrehten Boombox und Bedienelementen, um sie nach links und rechts und hinein und hinaus zu bewegen und zu drehen.](web-audio-spatialization.png)

Die Boombox befindet sich in einem Raum (definiert durch die Kanten des Browser-Viewports), und in dieser Demo können wir sie mit den bereitgestellten Steuerelementen bewegen und drehen.
Wenn wir die Boombox bewegen, ändert sich der von ihr erzeugte Klang entsprechend, verschiebt sich, wenn sie sich nach links oder rechts im Raum bewegt, oder wird leiser, wenn sie vom Benutzer wegbewegt wird oder die Lautsprecher in eine andere Richtung gedreht sind.
Dies wird erreicht, indem die verschiedenen Eigenschaften der `PannerNode`-Objektinstanz in Bezug auf diese Bewegung gesetzt werden, um die Raumklangverarbeitung zu emulieren.

> [!NOTE]
> Das Erlebnis ist viel besser, wenn Sie Kopfhörer verwenden oder ein Surround-Sound-System an Ihren Computer anschließen.

## Erstellen eines Audio-Lautsprechers

Fangen wir also an! Die {{domxref("BaseAudioContext")}} (die Schnittstelle, von der die {{domxref("AudioContext")}} erweitert wird) hat eine [`listener`](/de/docs/Web/API/BaseAudioContext/listener)-Eigenschaft, die ein {{domxref("AudioListener")}}-Objekt zurückgibt.
Dies stellt den Zuhörer der Szene dar, normalerweise Ihren Benutzer.
Sie können definieren, wo er sich im Raum befindet und in welche Richtung er schaut.
Er bleibt statisch. Der `pannerNode` kann dann seine Klangposition relativ zur Position des Zuhörers berechnen.

Erstellen wir unseren Kontext und Zuhörer und setzen die Position des Zuhörers, um eine Person zu emulieren, die in unseren Raum schaut:

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

Wir könnten den Zuhörer mit `positionX` nach links oder rechts bewegen, mit `positionY` nach oben oder unten oder mit `positionZ` in den Raum hinein oder aus dem Raum heraus. Hier setzen wir den Zuhörer in die Mitte des Viewports und leicht vor unsere Boombox. Wir können auch die Richtung festlegen, in die der Zuhörer schaut. Die Standardwerte dafür sind gut:

```js
listener.forwardX.value = 0;
listener.forwardY.value = 0;
listener.forwardZ.value = -1;
listener.upX.value = 0;
listener.upY.value = 1;
listener.upZ.value = 0;
```

Die Vorwärts-Eigenschaften stellen die 3D-Koordinatenposition der Vorwärtsrichtung des Zuhörers dar (z. B. die Richtung, in die er schaut), während die Up-Eigenschaften die 3D-Koordinatenposition des oberen Teils des Kopfes des Zuhörers darstellen.
Diese beiden zusammen können die Richtung gut festlegen.

## Erstellen eines Panner-Knotens

Erstellen wir unseren {{domxref("PannerNode")}}. Dieser hat eine ganze Menge von Eigenschaften, die mit ihm verbunden sind. Schauen wir uns jede von ihnen an:

Zu Beginn können wir das [`panningModel`](/de/docs/Web/API/PannerNode/panningModel) einstellen.
Dies ist der Algorithmus der Raumklangverarbeitung, der verwendet wird, um das Audio im 3D-Raum zu positionieren. Wir können dies einstellen auf:

`equalpower` — Der Standard und die allgemeine Methode, wie Panning berechnet wird

`HRTF` — Das steht für 'Head-related transfer function' und berücksichtigt den menschlichen Kopf, wenn er berechnet, wo der Klang ist.

Ziemlich clevere Sachen. Verwenden wir das `HRTF`-Modell!

```js
const panningModel = "HRTF";
```

Die Eigenschaften [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle) und [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) legen fest, woher die Lautstärke kommt.
Standardmäßig beträgt beides 360 Grad.
Die Lautsprecher unserer Boombox werden kleinere Kegel haben, die wir definieren können.
Der innere Kegel ist, wo der Gain (die Lautstärke) immer auf Maximum emuliert wird, und der äußere Kegel ist, wo der Gain zu sinken beginnt.
Der Gain wird um den Wert des [`coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) reduziert.
Lassen Sie uns Konstanten erstellen, die die Werte speichern, die wir später für diese Parameter verwenden werden:

```js
const innerCone = 60;
const outerCone = 90;
const outerGain = 0.3;
```

Der nächste Parameter ist das [`distanceModel`](/de/docs/Web/API/PannerNode/distanceModel) — dies kann nur auf `linear`, `inverse` oder `exponential` gesetzt werden. Dabei handelt es sich um verschiedene Algorithmen, die verwendet werden, um die Lautstärke der Audioquelle zu verringern, sobald sie sich vom Zuhörer entfernt. Wir werden `linear` verwenden, da es einfach ist:

```js
const distanceModel = "linear";
```

Wir können eine maximale Entfernung ([`maxDistance`](/de/docs/Web/API/PannerNode/maxDistance)) zwischen der Quelle und dem Zuhörer festlegen — die Lautstärke wird danach nicht mehr reduziert, wenn die Quelle sich von diesem Punkt weiter entfernt.
Das kann nützlich sein, da Sie feststellen könnten, dass Sie Entfernung emulieren möchten, aber die Lautstärke kann ausfallen und das ist tatsächlich nicht das, was Sie wollen.
Standardmäßig beträgt dies 10.000 (ein einheitsloser relativer Wert). Wir können es dabei belassen:

```js
const maxDistance = 10000;
```

Es gibt auch eine Referenzentfernung ([`refDistance`](/de/docs/Web/API/PannerNode/refDistance)), die von den Distanzmodellen verwendet wird.
Wir können das ebenfalls auf den Standardwert `1` belassen:

```js
const refDistance = 1;
```

Dann gibt es den Abrollfaktor ([`rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor)) — wie schnell reduziert sich die Lautstärke, wenn sich der Panner vom Zuhörer entfernt.
Der Standardwert ist 1; lassen Sie uns diesen etwas größer machen, um unsere Bewegungen zu übertreiben.

```js
const rollOff = 10;
```

Jetzt können wir beginnen, die Position und Orientierung unserer Boombox festzulegen.
Dies ist dem, wie wir es mit unserem Zuhörer gemacht haben, sehr ähnlich.
Dies sind auch die Parameter, die angepasst werden, wenn die Bedienelemente auf unserer Schnittstelle verwendet werden.

```js
const positionX = posX;
const positionY = posY;
const positionZ = posZ;

const orientationX = 0.0;
const orientationY = 0.0;
const orientationZ = -1.0;
```

Beachten Sie den negativen Wert bei unserer Z-Orientierung — dies richtet die Boombox auf uns aus.
Ein positiver Wert würde die Klangquelle von uns weg ausrichten.

Lassen Sie uns den relevanten Konstruktor zum Erstellen unseres Panner-Knotens verwenden und alle oben festgelegten Parameter übergeben:

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

Nun werden wir unsere Boombox in unserem 'Raum' bewegen. Wir haben einige Bedienelemente eingerichtet, um dies zu tun.
Wir können sie nach links und rechts, oben und unten und vor und zurück bewegen; wir können sie auch drehen.
Die Klangrichtung kommt vom Boombox-Lautsprecher an der Vorderseite, sodass wir beim Drehen die Klangrichtung ändern können — d. h. ihn nach hinten projizieren lassen, wenn die Boombox um 180 Grad gedreht und von uns weggerichtet ist.

Wir müssen einige Dinge für die Schnittstelle einrichten.
Zuerst holen wir uns Referenzen zu den Elementen, die wir bewegen möchten, dann speichern wir Referenzen zu den Werten, die wir ändern werden, wenn wir [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) einrichten, um die tatsächliche Bewegung durchzuführen.
Schließlich legen wir einige Grenzen fest, damit unsere Boombox sich nicht zu weit in irgendeine Richtung bewegt:

```js
const moveControls = document
  .querySelector("#move-controls")
  .querySelectorAll("button");
const boombox = document.querySelector(".boombox-body");

// die Werte für unsere CSS-Transformationen
const transform = {
  xAxis: 0,
  yAxis: 0,
  zAxis: 0.8,
  rotateX: 0,
  rotateY: 0,
};

// setzen Sie unsere Grenzen
const topBound = -posY;
const bottomBound = posY;
const rightBound = posX;
const leftBound = -posX;
const innerBound = 0.1;
const outerBound = 1.5;
```

Lassen Sie uns eine Funktion erstellen, die die Richtung nimmt, in die wir uns bewegen möchten, und sowohl die CSS-Transformation modifiziert als auch die Positions- und Orientierungswerte unserer Panner-Knoteigenschaften aktualisiert, um den Klang entsprechend zu ändern.

Zu Beginn sehen wir uns die Werte für links, rechts, oben und unten an, da diese ziemlich einfach sind.
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

Es ist eine ähnliche Geschichte für unsere Werte für vorwärts und rückwärts:

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

Unsere Rotationswerte sind jedoch ein wenig aufwändiger, da wir den Klang _umher_ bewegen müssen.
Wir müssen nicht nur zwei Achsenwerte aktualisieren (z. B. wenn Sie ein Objekt um die X-Achse drehen, aktualisieren Sie die Y- und Z-Koordinaten für dieses Objekt), sondern auch hierfür einige weitere mathematische Berechnungen durchführen.
Die Rotation ist ein Kreis, und wir benötigen [`Math.sin`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sin) und [`Math.cos`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/cos), um diesen Kreis zu zeichnen.

Lassen Sie uns eine Rotationsgeschwindigkeit festlegen, die wir später in einen Bogenwert-Bereich umwandeln werden, wenn wir `Math.sin` und `Math.cos` verwenden möchten, um die neuen Koordinaten zu berechnen, wenn wir unsere Boombox drehen:

```js
// Rotationkonstanten einstellen
const rotationRate = 60; // größere Zahl entspricht langsamerer Klangrotation

const q = Math.PI / rotationRate; // Rotationsinkrement in Bogenmaß
```

Wir können dies auch verwenden, um die gedrehten Winkelgrade zu berechnen, was bei den CSS-Transformationen hilft, die wir erstellen werden müssen (beachten Sie, dass wir sowohl eine X- als auch eine Y-Achse für die CSS-Transformationen benötigen):

```js
// Grad für CSS erhalten
const degreesX = (q * 180) / Math.PI;
const degreesY = (q * 180) / Math.PI;
```

Sehen wir uns als Beispiel unsere Linksdrehung an. Wir müssen die X-Orientierung und die Z-Orientierung der Panner-Koordinaten ändern, um die Boombox um die Y-Achse zu drehen:

```js
case 'rotate-left':
  transform.rotateY -= degreesY;

  // 'links' ist Rotation um die y-Achse mit negativem Winkelinkrement
  z = panner.orientationZ.value*Math.cos(q) - panner.orientationX.value*Math.sin(q);
  x = panner.orientationZ.value*Math.sin(q) + panner.orientationX.value*Math.cos(q);
  y = panner.orientationY.value;

  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
  break;
```

Das _ist_ ein wenig verwirrend, aber was wir tun, ist, Sinus und Kosinus zu verwenden, um die kreisförmige Bewegung der Koordinaten zu berechnen, die erforderlich sind, um die Boombox zu drehen.

Wir können dies für alle Achsen tun. Wir müssen nur die richtigen Orientierungen auswählen, die aktualisiert werden sollen, und ob wir ein positives oder negatives Inkrement wünschen.

```js
case 'rotate-right':
  transform.rotateY += degreesY;
  // 'rechts' ist Rotation um die y-Achse mit positivem Winkelinkrement
  z = panner.orientationZ.value*Math.cos(-q) - panner.orientationX.value*Math.sin(-q);
  x = panner.orientationZ.value*Math.sin(-q) + panner.orientationX.value*Math.cos(-q);
  y = panner.orientationY.value;
  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
  break;
case 'rotate-up':
  transform.rotateX += degreesX;
  // 'oben' ist Rotation um die x-Achse mit negativem Winkelinkrement
  z = panner.orientationZ.value*Math.cos(-q) - panner.orientationY.value*Math.sin(-q);
  y = panner.orientationZ.value*Math.sin(-q) + panner.orientationY.value*Math.cos(-q);
  x = panner.orientationX.value;
  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
  break;
case 'rotate-down':
  transform.rotateX -= degreesX;
  // 'unten' ist Rotation um die x-Achse mit positivem Winkelinkrement
  z = panner.orientationZ.value*Math.cos(q) - panner.orientationY.value*Math.sin(q);
  y = panner.orientationZ.value*Math.sin(q) + panner.orientationY.value*Math.cos(q);
  x = panner.orientationX.value;
  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
  break;
```

Eine letzte Sache — wir müssen das CSS aktualisieren und eine Referenz zur letzten Bewegung für das Mausereignis speichern.
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

      // 'links' ist Rotation um die y-Achse mit negativem Winkelinkrement
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
      // 'rechts' ist Rotation um die y-Achse mit positivem Winkelinkrement
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
      // 'oben' ist Rotation um die x-Achse mit negativem Winkelinkrement
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
      // 'unten' ist Rotation um die x-Achse mit positivem Winkelinkrement
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

## Verkabeln unserer Steuerelemente

Das Verkabeln unserer Steuerungsknöpfe ist vergleichsweise einfach — jetzt können wir auf ein Mausereignis auf unseren Steuerungen hören und diese Funktion ausführen sowie es stoppen, wenn die Maus losgelassen wird:

```js
// für jede unserer Steuerungen die Boombox bewegen und die Positionswerte ändern
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

Unser HTML enthält das Audioelement, das durch den Panner-Knoten beeinflusst werden soll.

```html
<audio src="myCoolTrack.mp3"></audio>
```

Wir müssen die Quelle aus diesem Element entnehmen und in die Web Audio API mit {{domxref('AudioContext.createMediaElementSource')}} leiten.

```js
// das Audioelement abrufen
const audioElement = document.querySelector("audio");

// es in den Audiokontext einfügen
const track = audioContext.createMediaElementSource(audioElement);
```

Als nächstes müssen wir unseren Audiographen verbinden. Wir verbinden unseren Eingang (den Track) mit unserem Modifikationsknoten (dem Panner) mit unserem Ziel (in diesem Fall den Lautsprechern).

```js
track.connect(panner).connect(audioCtx.destination);
```

Lassen Sie uns einen Play-Button erstellen, der bei Klick das Audio je nach aktuellem Zustand abspielt oder pausiert.

```html
<button data-playing="false" role="switch">Play/Pause</button>
```

```js
// Unseren Play-Button auswählen
const playButton = document.querySelector("button");

playButton.addEventListener(
  "click",
  () => {
    // Überprüfen Sie, ob der Kontext im Zustand "suspended" ist (Autoplay-Richtlinie)
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    // Track je nach Zustand abspielen oder pausieren
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

Für einen tiefergehenden Blick auf das Abspielen und Steuern von Audio und Audiographen werfen Sie einen Blick auf [Using The Web Audio API.](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel einen Einblick gegeben, wie die Web-Audio-Raumklangverarbeitung funktioniert und was jede der {{domxref("PannerNode")}}-Eigenschaften bewirkt (es gibt ziemlich viele davon).
Die Werte können manchmal schwer zu handhaben sein und je nach Verwendungszweck kann es einige Zeit dauern, bis sie richtig angepasst sind.

> [!NOTE]
> Es gibt kleine Unterschiede in der Art und Weise, wie die Klangverarbeitung in verschiedenen Browsern klingt.
> Der Panner-Knoten führt im Hintergrund einige sehr komplexe Mathematik durch.
> Es gibt eine [Reihe von Tests hier](https://wpt.fyi/results/webaudio/the-audio-api/the-pannernode-interface?label=stable&aligned=true), so dass Sie den Status der inneren Funktionsweise dieses Knotens über verschiedene Plattformen hinweg verfolgen können.

Nochmals, Sie können [hier die endgültige Demo ansehen](https://mdn.github.io/webaudio-examples/spatialization/), und der [endgültige Quellcode befindet sich hier](https://github.com/mdn/webaudio-examples/tree/main/spatialization).
Es gibt auch [eine Demo bei Codepen](https://codepen.io/Rumyra/pen/MqayoK?editors=0100).

Wenn Sie mit 3D-Spielen und/oder WebXR arbeiten, ist es eine gute Idee, eine 3D-Bibliothek zu nutzen, um solche Funktionalitäten zu erstellen, anstatt zu versuchen, alles selbst von Grund auf neu zu machen.
Wir haben in diesem Artikel unsere eigene aufgebaut, um Ihnen eine Vorstellung davon zu geben, wie es funktioniert, aber Sie sparen viel Zeit, indem Sie die Arbeit nutzen, die andere bereits vor Ihnen geleistet haben.
