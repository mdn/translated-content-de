---
title: Möglichkeiten, Einschränkungen und Einstellungen
slug: Web/API/Media_Capture_and_Streams_API/Constraints
l10n:
  sourceCommit: 6f1b699dd8891431bbfe0bc3bb803f929fa6032e
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel behandelt die beiden Konzepte von **Einschränkungen** und **Möglichkeiten** sowie die Medieneinstellungen und enthält ein Beispiel, das wir den [Einschränkungs-Exerciser](#example_constraint_exerciser) nennen. Der Einschränkungs-Exerciser ermöglicht es Ihnen, mit den Ergebnissen verschiedener Einschränkungssätze zu experimentieren, die auf die Audio- und Videospuren angewendet werden, die von den A/V-Eingabegeräten des Computers (wie Webcam und Mikrofon) stammen.

Historisch gesehen war es eine bekannte Herausforderung, Skripte für das Web zu schreiben, die eng mit Web-APIs zusammenarbeiten: Oft muss Ihr Code wissen, ob eine API existiert und wenn ja, was deren Einschränkungen auf dem {{Glossary("user_agent", "User-Agent")}} sind, auf dem sie ausgeführt wird. Dies herauszufinden war oft schwierig und beinhaltete normalerweise eine Kombination aus der Überprüfung, welcher {{Glossary("user_agent", "User-Agent")}} (oder Browser) verwendet wird, welche Version es ist, ob bestimmte Objekte existieren, ob verschiedene Dinge funktionieren oder nicht und welche Fehler auftreten. Das Ergebnis war oft sehr anfälliger Code oder eine Abhängigkeit von Bibliotheken, die diese Dinge für Sie herausfinden, um dann {{Glossary("polyfill", "Polyfills")}} zu implementieren, die die Löcher in der Implementierung für Sie stopfen.

Möglichkeiten und Einschränkungen ermöglichen es dem Browser und der Website oder App, Informationen darüber auszutauschen, welche **einschränkbaren Eigenschaften** die Implementierung des Browsers unterstützt und welche Werte sie für jede unterstützt.

## Überblick

Der Prozess funktioniert folgendermaßen (unter Verwendung von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) als Beispiel):

1. Falls erforderlich, rufen Sie [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) auf, um die Liste der **unterstützten Einschränkungen** zu erhalten, die Ihnen mitteilt, welche einschränkbaren Eigenschaften der Browser kennt. Dies ist nicht immer notwendig, da unbekannte Einschränkungen ignoriert werden, wenn Sie sie angeben – aber wenn Sie welche haben, auf die Sie nicht verzichten können, können Sie damit beginnen, sicherzustellen, dass sie auf der Liste stehen.
2. Sobald das Skript weiß, ob die Eigenschaft oder Eigenschaften, die es verwenden möchte, unterstützt werden, kann es die **Möglichkeiten** der API und deren Implementierung überprüfen, indem es das Objekt untersucht, das durch die Methode `getCapabilities()` der Spur zurückgegeben wird; dieses Objekt listet jede unterstützte Einschränkung und die Werte oder den Bereich von Werten auf, die unterstützt werden.
3. Schließlich wird die Methode `applyConstraints()` der Spur aufgerufen, um die API nach Wunsch zu konfigurieren, indem die Werte oder Bereiche von Werten angegeben werden, die für irgendeine der einschränkbaren Eigenschaften, über die es eine Präferenz hat, verwendet werden sollen.
4. Die `getConstraints()`-Methode der Spur gibt den Satz von Einschränkungen zurück, der beim letzten Aufruf von `applyConstraints()` übergeben wurde. Dies kann nicht unbedingt den aktuellen Zustand der Spur darstellen, da Eigenschaften, deren angeforderte Werte angepasst werden mussten, und weil Plattformstandardwerte nicht dargestellt werden. Für eine vollständige Darstellung der aktuellen Konfiguration der Spur verwenden Sie `getSettings()`.

In der Media Capture and Streams API haben sowohl [`MediaStream`](/de/docs/Web/API/MediaStream) als auch [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) einschränkbare Eigenschaften.

## Ermittlung, ob eine Einschränkung unterstützt wird

Wenn Sie wissen müssen, ob eine bestimmte Einschränkung vom User-Agent unterstützt wird, können Sie dies herausfinden, indem Sie [`navigator.mediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) aufrufen, um eine Liste der einschränkbaren Eigenschaften zu erhalten, die der Browser kennt, so:

```js
const supported = navigator.mediaDevices.getSupportedConstraints();

document.getElementById("frameRateSlider").disabled = !supported["frameRate"];
```

In diesem Beispiel werden die unterstützten Einschränkungen abgerufen, und eine Steuerung, die es dem Benutzer ermöglicht, die Bildrate zu konfigurieren, wird deaktiviert, wenn die Einschränkung `frameRate` nicht unterstützt wird.

## Wie Einschränkungen definiert sind

Eine einzelne Einschränkung ist ein Objekt, dessen Name mit der einschränkbaren Eigenschaft übereinstimmt, deren gewünschter Wert oder Wertebereich angegeben wird. Dieses Objekt enthält null oder mehr individuelle Einschränkungen sowie ein optionales Unterobjekt namens `advanced`, das einen weiteren Satz von null oder mehr Einschränkungen enthält, die der User-Agent, sofern möglich, erfüllen muss. Der User-Agent versucht, die Einschränkungen in der Reihenfolge zu erfüllen, die im Einschränkungsset angegeben ist.

Das Wichtigste, was man verstehen muss, ist, dass die meisten Einschränkungen keine Anforderungen sind; stattdessen sind sie Anfragen. Es gibt Ausnahmen, auf die wir gleich eingehen werden.

### Anfordern eines bestimmten Werts für eine Einstellung

Bei den meisten Einschränkungen kann es sich um einen bestimmten Wert handeln, der einen gewünschten Wert für die Einstellung anzeigt. Zum Beispiel:

```js
const constraints = {
  width: 1920,
  height: 1080,
  aspectRatio: 1.777777778,
};

myTrack.applyConstraints(constraints);
```

In diesem Fall geben die Einschränkungen an, dass für fast alle Eigenschaften beliebige Werte in Ordnung sind, aber eine standardmäßige hochauflösende (HD) Videogröße mit dem standardmäßigen 16:9 {{Glossary("aspect_ratio", "Seitenverhältnis")}} gewünscht ist. Es gibt keine Garantie dafür, dass die resultierende Spur mit einer dieser Eigenschaften übereinstimmt, aber der User-Agent sollte sein Bestes tun, um so viele wie möglich zu erfüllen.

Die Priorisierung der Eigenschaften ist einfach: Wenn zwei Eigenschaften angeforderte Werte haben, die sich gegenseitig ausschließen, wird die zuerst im Einschränkungsset aufgeführte verwendet. Als Beispiel: Wenn der Browser, der den obigen Code ausführt, keine 1920x1080-Spur bereitstellen kann, aber 1920x900 möglich ist, dann wird das bereitgestellt.

Einfache Einschränkungen wie diese, die einen einzelnen Wert angeben, werden immer als nicht erforderlich behandelt. Der User-Agent wird versuchen, das bereitzustellen, was Sie anfordern, aber es wird nicht garantiert, dass das, was Sie bekommen, genau passt. Wenn Sie jedoch bei Eigenschaften, die Sie in [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufrufen, einfache Werte verwenden, wird die Anforderung immer erfolgreich sein, da diese Werte als Anfrage und nicht als Anforderung angesehen werden.

### Spezifizieren eines Wertebereichs

Manchmal ist jeder Wert innerhalb eines Bereichs für den Wert einer Eigenschaft akzeptabel. Sie können Bereiche mit entweder minimalen und maximalen Werten oder beiden angeben, und Sie können sogar einen idealen Wert innerhalb des Bereichs angeben, wenn Sie möchten. Wenn Sie einen idealen Wert angeben, versucht der Browser, diesen Wert so genau wie möglich zu erfüllen, basierend auf den anderen angegebenen Einschränkungen.

```js
const supports = navigator.mediaDevices.getSupportedConstraints();

if (
  !supports["width"] ||
  !supports["height"] ||
  !supports["frameRate"] ||
  !supports["facingMode"]
) {
  // We're missing needed properties, so handle that error.
} else {
  const constraints = {
    width: { min: 640, ideal: 1920, max: 1920 },
    height: { min: 400, ideal: 1080 },
    aspectRatio: 1.777777778,
    frameRate: { max: 30 },
    facingMode: { exact: "user" },
  };

  myTrack
    .applyConstraints(constraints)
    .then(() => {
      /* do stuff if constraints applied successfully */
    })
    .catch((reason) => {
      /* failed to apply constraints; reason is why */
    });
}
```

Hier, nachdem sichergestellt wurde, dass die einschränkbaren Eigenschaften, für die Übereinstimmungen gefunden werden müssen, unterstützt werden (`width`, `height`, `frameRate` und `facingMode`), richten wir Einschränkungen ein, die eine Breite von nicht kleiner als 640 und nicht größer als 1920 (aber vorzugsweise 1920) sowie eine Höhe von nicht kleiner als 400 (aber idealerweise 1080) fordern, ein Seitenverhältnis von 16:9 (1.777777778) und eine Bildrate von nicht mehr als 30 Bilder pro Sekunde. Außerdem ist das einzige akzeptable Eingabegerät eine Kamera, die zum Benutzer ausgerichtet ist (eine "Selfie-Cam"). Wenn die Einschränkungen `width`, `height`, `frameRate` oder `facingMode` nicht erfüllt werden können, wird das durch `applyConstraints()` zurückgegebene Versprechen abgelehnt.

> [!NOTE]
> Einschränkungen, die unter Verwendung von `max`, `min` oder `exact` angegeben werden, werden immer als zwingend angesehen. Wenn eine Einschränkung, die ein oder mehrere davon verwendet, beim Aufruf von `applyConstraints()` nicht erfüllt werden kann, wird das Versprechen abgelehnt.

### Erweiterte Einschränkungen

So genannte erweiterte Einschränkungen werden durch Hinzufügen einer `advanced`-Eigenschaft zum Einschränkungsset erstellt; der Wert dieser Eigenschaft ist ein Array zusätzlicher Einschränkungssets, die als optional betrachtet werden. Es gibt nur wenige oder gar keine Anwendungsfälle für dieses Feature, und es besteht ein gewisses Interesse daran, es aus der Spezifikation zu entfernen, weshalb es hier nicht behandelt wird. Wenn Sie mehr erfahren möchten, lesen Sie [Abschnitt 11 der Media Capture and Streams-Spezifikation](https://w3c.github.io/mediacapture-main/#constrainable-interface), nach Beispiel 2.

## Überprüfen der Möglichkeiten

Sie können [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) aufrufen, um eine Liste aller unterstützten Möglichkeiten und die unterstützten Werte oder Wertebereiche für jede einzelne auf der aktuellen Plattform und dem User-Agent zu erhalten. Diese Funktion gibt ein Objekt zurück, das jede vom Browser unterstützte einschränkbare Eigenschaft und einen unterstützten Wert oder Wertebereich für jede dieser Eigenschaften auflistet.

Zum Beispiel führt der folgende Code dazu, dass der Benutzer um Erlaubnis zum Zugriff auf seine lokale Kamera und sein Mikrofon gebeten wird. Sobald die Erlaubnis erteilt wird, werden `MediaTrackCapabilities`-Objekte in der Konsole protokolliert, die die Fähigkeiten jeder [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) detailliert beschreiben:

```js
navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    const tracks = stream.getTracks();
    tracks.map((t) => console.log(t.getCapabilities()));
  });
```

Ein Beispiel für ein Möglichkeiten-Objekt sieht so aus:

```json
{
  "autoGainControl": [true, false],
  "channelCount": {
    "max": 1,
    "min": 1
  },
  "deviceId": "jjxEMqxIhGdryqbTjDrXPWrkjy55Vte70kWpMe3Lge8=",
  "echoCancellation": [true, false],
  "groupId": "o2tZiEj4MwOdG/LW3HwkjpLm1D8URat4C5kt742xrVQ=",
  "noiseSuppression": [true, false]
}
```

Der genaue Inhalt des Objekts hängt vom Browser und der Medienhardware ab.

## Anwenden von Einschränkungen

Der erste und häufigste Weg zur Verwendung von Einschränkungen besteht darin, sie anzugeben, wenn Sie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufrufen:

```js
navigator.mediaDevices
  .getUserMedia({
    video: {
      width: { min: 640, ideal: 1920 },
      height: { min: 400, ideal: 1080 },
      aspectRatio: { ideal: 1.7777777778 },
    },
    audio: {
      sampleSize: 16,
      channelCount: 2,
    },
  })
  .then((stream) => {
    videoElement.srcObject = stream;
  })
  .catch(handleError);
```

In diesem Beispiel werden Einschränkungen zur `getUserMedia()`-Zeit angewendet, wobei um eine ideale Einstellung mit Fallbacks für das Video gebeten wird.

> [!NOTE]
> Sie können eine oder mehrere Medien-Eingabegeräte-IDs angeben, um Einschränkungen festzulegen, welche Eingabequellen erlaubt sind. Um eine Liste der verfügbaren Geräte zu sammeln, können Sie [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, dann für jedes Gerät, das die gewünschten Kriterien erfüllt, dessen `deviceId` zum `MediaConstraints`-Objekt hinzufügen, das schließlich an `getUserMedia()` übergeben wird.

Sie können auch die Einschränkungen eines bestehenden [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) spontan ändern, indem Sie die Methode [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) der Spur aufrufen, in die Sie ein Objekt übergeben, das die Einschränkungen darstellt, die Sie auf die Spur anwenden möchten:

```js
videoTrack.applyConstraints({
  width: 1920,
  height: 1080,
});
```

In diesem Schnipsel wird die Video-Spur, auf die `videoTrack` verweist, so aktualisiert, dass ihre Auflösung so nahe wie möglich an 1920x1080 Pixel (1080p hohe Auflösung) liegt.

## Abrufen aktueller Einschränkungen und Einstellungen

Es ist wichtig, den Unterschied zwischen **Einschränkungen** und **Einstellungen** zu berücksichtigen. Einschränkungen sind eine Möglichkeit, Werte anzugeben, die Sie benötigen, wünschen und akzeptieren sind für die verschiedenen einschränkbaren Eigenschaften (wie in der Dokumentation für [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) beschrieben), während Einstellungen die tatsächlichen Werte jeder einschränkbaren Eigenschaft zu diesem Zeitpunkt sind.

### Abrufen der in Kraft befindlichen Einschränkungen

Wenn Sie jederzeit den Satz von Einschränkungen abrufen müssen, der derzeit auf die Medien angewendet wird, können Sie diese Informationen durch Aufrufen von [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) erhalten, wie im folgenden Beispiel gezeigt.

```js
function switchCameras(track, camera) {
  const constraints = track.getConstraints();
  constraints.facingMode = camera;
  track.applyConstraints(constraints);
}
```

Diese Funktion akzeptiert eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) und einen String, der den zu verwendenden Kameramodus angibt, ruft die aktuellen Einschränkungen ab, legt den Wert des [`MediaTrackConstraints.facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) auf den angegebenen Wert fest und wendet dann das aktualisierte Einschränkungsset an.

### Abrufen der aktuellen Einstellungen für eine Spur

Es sei denn, Sie verwenden nur genaue Einschränkungen (was ziemlich restriktiv ist, also stellen Sie sicher, dass Sie das wirklich wollen!), gibt es keine Garantie, was Sie tatsächlich bekommen, nachdem die Einschränkungen angewendet wurden. Die Werte der einschränkbaren Eigenschaften, wie sie tatsächlich in den resultierenden Medien sind, werden als die Einstellungen bezeichnet. Wenn Sie das wahre Format und andere Eigenschaften der Medien kennen müssen, können Sie diese Einstellungen abrufen, indem Sie [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) aufrufen. Dies gibt ein auf dem Wörterbuch [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) basierendes Objekt zurück. Zum Beispiel:

```js
function whichCamera(track) {
  return track.getSettings().facingMode;
}
```

Diese Funktion verwendet `getSettings()`, um die derzeit verwendeten Werte der einschränkbaren Eigenschaften der Spur zu erhalten und gibt den Wert des [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode) zurück.

## Beispiel: Einschränkungs-Exerciser

In diesem Beispiel erstellen wir einen Exerciser, der es Ihnen ermöglicht, mit Medieneinschränkungen zu experimentieren, indem Sie den Quellcode ändern, der die Einschränkungssätze für Audio- und Videospuren beschreibt. Sie können diese Änderungen dann anwenden und das Ergebnis sehen, einschließlich dessen, wie der Stream aussieht und welche tatsächlichen Medien-Einstellungen nach Anwendung der neuen Einschränkungen festgelegt sind.

Das HTML und CSS für dieses Beispiel sind ziemlich einfach und werden hier nicht gezeigt. Sie können den vollständigen Code sehen, indem Sie auf "Play" klicken, um ihn im Playground anzusehen.

```html hidden
<p>
  Experiment with media constraints! Edit the constraint sets for the video and
  audio tracks in the edit boxes on the left, then click the "Apply Constraints"
  button to try them out. The actual settings the browser selected and is using
  are shown in the boxes on the right. Below all of that, you'll see the video
  itself.
</p>
<p>Click the "Start" button to begin.</p>

<h3>Constrainable properties available:</h3>
<ul id="supportedConstraints"></ul>
<div id="startButton" class="button">Start</div>
<div class="wrapper">
  <div class="track-row">
    <div class="left-side">
      <h3>Requested video constraints:</h3>
      <textarea id="videoConstraintEditor" cols="32" rows="8"></textarea>
    </div>
    <div class="right-side">
      <h3>Actual video settings:</h3>
      <textarea id="videoSettingsText" cols="32" rows="8" disabled></textarea>
    </div>
  </div>
  <div class="track-row">
    <div class="left-side">
      <h3>Requested audio constraints:</h3>
      <textarea id="audioConstraintEditor" cols="32" rows="8"></textarea>
    </div>
    <div class="right-side">
      <h3>Actual audio settings:</h3>
      <textarea id="audioSettingsText" cols="32" rows="8" disabled></textarea>
    </div>
  </div>

  <div class="button" id="applyButton">Apply Constraints</div>
</div>
<video id="my-video" autoplay></video>

<div class="button" id="stopButton">Stop Video</div>

<div id="log"></div>
```

```css hidden
body {
  font:
    14px "Open Sans",
    "Arial",
    sans-serif;
}

video {
  margin-top: 20px;
  border: 1px solid black;
}

.button {
  cursor: pointer;
  width: 150px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
}

.wrapper {
  margin-bottom: 10px;
  width: 600px;
}

.track-row {
  height: 200px;
}

.left-side {
  float: left;
  width: calc(calc(100% / 2) - 10px);
}

.right-side {
  float: right;
  width: calc(calc(100% / 2) - 10px);
}

textarea {
  padding: 8px;
}

h3 {
  margin-bottom: 3px;
}

#supportedConstraints {
  column-count: 2;
}

#log {
  padding-top: 10px;
}
```

### Standards und Variablen

Zuerst haben wir die Standard-Einschränkungssets, als Strings. Diese Strings werden in bearbeitbaren {{HTMLElement("textarea")}}s präsentiert, aber das ist die Initialkonfiguration des Streams.

```js
const videoDefaultConstraintString =
  '{\n  "width": 320,\n  "height": 240,\n  "frameRate": 30\n}';
const audioDefaultConstraintString =
  '{\n  "sampleSize": 16,\n  "channelCount": 2,\n  "echoCancellation": false\n}';
```

Diese Standards fragen nach einer ziemlich gebräuchlichen Kamera-Konfiguration, bestehen jedoch nicht darauf, dass irgendeine Eigenschaft von besonderer Bedeutung ist. Der Browser sollte sein Bestes tun, um diese Einstellungen zu erfüllen, aber sich mit allem zufriedengeben, was er als nahe Übereinstimmung ansieht.

Dann initialisieren wir die Variablen, die die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Video- und Audiospuren enthalten werden sowie die Variablen, die Referenzen zu den Video- und Audiospuren selbst enthalten werden, auf `null`.

```js
let videoConstraints = null;
let audioConstraints = null;

let audioTrack = null;
let videoTrack = null;
```

Und wir holen uns Referenzen zu allen Elementen, auf die wir zugreifen müssen.

```js
const videoElement = document.getElementById("my-video");
const logElement = document.getElementById("log");
const supportedConstraintList = document.getElementById("supportedConstraints");
const videoConstraintEditor = document.getElementById("videoConstraintEditor");
const audioConstraintEditor = document.getElementById("audioConstraintEditor");
const videoSettingsText = document.getElementById("videoSettingsText");
const audioSettingsText = document.getElementById("audioSettingsText");
```

Diese Elemente sind:

- `videoElement`
  - : Das {{HTMLElement("video")}}-Element, das den Stream anzeigen wird.
- `logElement`
  - : Ein {{HTMLElement("div")}}, in das alle Fehlermeldungen oder andere Log-Typ-Ausgaben geschrieben werden.
- `supportedConstraintList`
  - : Ein {{HTMLElement("ul")}} (ungeordnete Liste), in die wir programmatisch die Namen jeder der einschränkbaren Eigenschaften einfügen, die der Browser des Benutzers unterstützt.
- `videoConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}, das dem Benutzer ermöglicht, den Code für das Einschränkungsset der Videospur zu bearbeiten.
- `audioConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}-Element, das dem Benutzer ermöglicht, den Code für das Einschränkungsset der Audiospur zu bearbeiten.
- `videoSettingsText`
  - : Ein {{HTMLElement("textarea")}} (das immer deaktiviert ist), das die aktuellen Einstellungen der einschränkbaren Eigenschaften der Videospur anzeigt.
- `audioSettingsText`
  - : Ein {{HTMLElement("textarea")}} (das immer deaktiviert ist), das die aktuellen Einstellungen der einschränkbaren Eigenschaften der Audiospur anzeigt.

Schließlich setzen wir den aktuellen Inhalt der beiden Einschränkungsset-Editor-Elemente auf die Standards.

```js
videoConstraintEditor.value = videoDefaultConstraintString;
audioConstraintEditor.value = audioDefaultConstraintString;
```

### Aktualisieren der Einstellungsanzeige

Rechts von jedem Editor für die Einschränkungssets befindet sich ein zweites Textfeld, das wir verwenden, um die aktuelle Konfiguration der einstellbaren Eigenschaften der Spur anzuzeigen. Diese Anzeige wird durch die Funktion `getCurrentSettings()` aktualisiert, die die aktuellen Einstellungen für die Audio- und Videospuren erhält und den entsprechenden Code in die Einstellungsausgabefelder einfügt, indem sie deren [`value`](/de/docs/Web/API/HTMLTextAreaElement/value) festlegt.

```js
function getCurrentSettings() {
  if (videoTrack) {
    videoSettingsText.value = JSON.stringify(videoTrack.getSettings(), null, 2);
  }

  if (audioTrack) {
    audioSettingsText.value = JSON.stringify(audioTrack.getSettings(), null, 2);
  }
}
```

Diese Funktion wird aufgerufen, nachdem der Stream das erste Mal gestartet wurde, sowie jedes Mal, wenn wir aktualisierte Einschränkungen angewendet haben, wie Sie weiter unten sehen werden.

### Erstellen der Track-Einschränkungsset-Objekte

Die Funktion `buildConstraints()` erstellt die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Audio- und Videospuren unter Verwendung des Codes in den beiden Editierfeldern für Einschränkungssets.

```js
function buildConstraints() {
  try {
    videoConstraints = JSON.parse(videoConstraintEditor.value);
    audioConstraints = JSON.parse(audioConstraintEditor.value);
  } catch (error) {
    handleError(error);
  }
}
```

Dies erfolgt durch Verwendung von {{jsxref("JSON.parse()")}}, um den Code in jedem Editor in ein Objekt zu parsen. Wenn eine der JSON.parse()-Aufrufe eine Ausnahme auslöst, wird `handleError()` aufgerufen, um die Fehlermeldung in das Log zu schreiben.

### Konfigurieren und Starten des Streams

Die Methode `startVideo()` behandelt die Einrichtung und den Start des Videostreams.

```js
function startVideo() {
  buildConstraints();

  navigator.mediaDevices
    .getUserMedia({
      video: videoConstraints,
      audio: audioConstraints,
    })
    .then((stream) => {
      const audioTracks = stream.getAudioTracks();
      const videoTracks = stream.getVideoTracks();

      videoElement.srcObject = stream;

      if (audioTracks.length > 0) {
        audioTrack = audioTracks[0];
      }

      if (videoTracks.length > 0) {
        videoTrack = videoTracks[0];
      }
    })
    .then(
      () =>
        new Promise((resolve) => {
          videoElement.onloadedmetadata = resolve;
        }),
    )
    .then(() => {
      getCurrentSettings();
    })
    .catch(handleError);
}
```

Hier sind mehrere Schritte:

1. Sie ruft `buildConstraints()` auf, um die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die beiden Tracks aus dem Code in den Editierfeldern zu erstellen.
2. Sie ruft [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf, wobei sie die Einschränkungsobjekte für die Video- und Audiospuren übergibt. Dies gibt einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit dem Audio und Video von einer Quelle zurück, die den Eingaben entspricht (typischerweise eine Webcam, obwohl Sie durch das Angeben der richtigen Einschränkungen Medien von anderen Quellen erhalten können).
3. Wenn der Stream erhalten wird, wird er an das {{HTMLElement("video")}}-Element angehängt, sodass er auf dem Bildschirm sichtbar ist, und wir holen uns die Audiospur und Videospur in die Variablen `audioTrack` und `videoTrack`.
4. Dann richten wir ein Versprechen ein, das aufgelöst wird, wenn das [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)-Ereignis am Video-Element auftritt.
5. Wenn das geschieht, wissen wir, dass das Video zu spielen begonnen hat, also rufen wir unsere `getCurrentSettings()`-Funktion (wie oben beschrieben) auf, um die tatsächlichen Einstellungen anzuzeigen, die der Browser nach Berücksichtigung unserer Einschränkungen und der Fähigkeiten der Hardware entschieden hat.
6. Wenn ein Fehler auftritt, protokollieren wir ihn mit der `handleError()`-Methode, die wir weiter unten in diesem Artikel betrachten werden.

Wir müssen auch einen Ereignislistener einrichten, der überwacht, wann die "Start Video"-Schaltfläche angeklickt wird:

```js
document.getElementById("startButton").addEventListener("click", () => {
  startVideo();
});
```

### Anwenden von Updates für Einschränkungssets

Als Nächstes richten wir einen Ereignislistener für die "Apply Constraints"-Schaltfläche ein. Wenn diese angeklickt wird und derzeit keine Medien verwendet werden, rufen wir `startVideo()` auf, das die Handhabung des Starts des Streams und das Anwenden der angegebenen Einstellungen übernimmt. Andernfalls folgen wir diesen Schritten, um die aktualisierten Einschränkungen auf den bereits aktiven Stream anzuwenden:

1. `buildConstraints()` wird aufgerufen, um aktualisierte [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Audiospur (`audioConstraints`) und die Videospur (`videoConstraints`) zu erstellen.
2. [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) wird auf der Videospur (falls vorhanden) aufgerufen, um die neuen `videoConstraints` anzuwenden. Falls dies erfolgreich ist, wird der Inhalt des aktuellen Einstellungskasten der Videospur basierend auf dem Ergebnis des Aufrufs der Methode [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) aktualisiert.
3. Sobald dies getan ist, wird `applyConstraints()` auf der Audiospur (falls vorhanden) aufgerufen, um die neuen Audio-Einschränkungen anzuwenden. Falls dies erfolgreich ist, wird der Inhalt des aktuellen Einstellungskasten der Audiospur basierend auf dem Ergebnis des Aufrufs der Methode [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) aktualisiert.
4. Wenn ein Fehler auftritt, beim Anwenden eines der Einschränkungssets `handleError()` verwendet wird, um eine Meldung in das Log auszugeben.

```js
document.getElementById("applyButton").addEventListener("click", () => {
  if (!videoTrack && !audioTrack) {
    startVideo();
  } else {
    buildConstraints();

    const prettyJson = (obj) => JSON.stringify(obj, null, 2);

    if (videoTrack) {
      videoTrack
        .applyConstraints(videoConstraints)
        .then(() => {
          videoSettingsText.value = prettyJson(videoTrack.getSettings());
        })
        .catch(handleError);
    }

    if (audioTrack) {
      audioTrack
        .applyConstraints(audioConstraints)
        .then(() => {
          audioSettingsText.value = prettyJson(audioTrack.getSettings());
        })
        .catch(handleError);
    }
  }
});
```

### Handler für die Stopp-Schaltfläche

Dann richten wir den Handler für die Stopp-Schaltfläche ein.

```js
document.getElementById("stopButton").addEventListener("click", () => {
  if (videoTrack) {
    videoTrack.stop();
  }

  if (audioTrack) {
    audioTrack.stop();
  }

  videoTrack = audioTrack = null;
  videoElement.srcObject = null;
});
```

Dieser stoppt die aktiven Tracks, setzt die Variablen `videoTrack` und `audioTrack` auf `null`, damit wir wissen, dass sie weg sind, und entfernt den Stream aus dem {{HTMLElement("video")}}-Element, indem er [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) auf `null` setzt.

### Einfache Tab-Unterstützung im Editor

Dieser Code fügt einfache Tab-Unterstützung für die {{HTMLElement("textarea")}}-Elemente hinzu, indem das Drücken der Tabulatortaste zwei Leerzeichen einfügt, wenn eines der Einschränkungseditierfelder fokussiert ist.

```js
function keyDownHandler(event) {
  if (event.key === "Tab") {
    const elem = event.target;
    const str = elem.value;

    const position = elem.selectionStart;
    const beforeTab = str.substring(0, position);
    const afterTab = str.substring(position, str.length);
    const newStr = `${beforeTab}  ${afterTab}`;
    elem.value = newStr;
    elem.selectionStart = elem.selectionEnd = position + 2;
    event.preventDefault();
  }
}

videoConstraintEditor.addEventListener("keydown", keyDownHandler);
audioConstraintEditor.addEventListener("keydown", keyDownHandler);
```

### Zeigen von einschränkbaren Eigenschaften, die der Browser unterstützt

Der letzte wichtige Teil des Puzzles: Code, der zur Referenz für den Benutzer eine Liste der einschränkbaren Eigenschaften anzeigt, die sein Browser unterstützt. Jede Eigenschaft ist ein Link zu ihrer Dokumentation auf MDN zur Bequemlichkeit des Benutzers. Siehe die [`MediaDevices.getSupportedConstraints()`-Beispiele](/de/docs/Web/API/MediaDevices/getSupportedConstraints#examples) für Details dazu, wie dieser Code funktioniert.

> [!NOTE]
> Natürlich kann es in dieser Liste nicht standardmäßige Eigenschaften geben, in welchem Fall Sie wahrscheinlich feststellen werden, dass der Dokumentationslink nicht viel hilft.

```js
const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
for (const constraint in supportedConstraints) {
  if (Object.hasOwn(supportedConstraints, constraint)) {
    const elem = document.createElement("li");

    elem.innerHTML = `<code><a href='https://developer.mozilla.org/docs/Web/API/MediaTrackSupportedConstraints/${constraint}' target='_blank'>${constraint}</a></code>`;
    supportedConstraintList.appendChild(elem);
  }
}
```

### Fehlerbehandlung

Wir haben auch einige einfache Fehlerbehandlungscodes; `handleError()` wird aufgerufen, um nicht erfüllte Versprechen zu behandeln und die `log()`-Funktion hängt die Fehlermeldung an ein spezielles Logging-{{HTMLElement("div")}}-Feld unter dem Video an.

```js
function log(msg) {
  logElement.innerHTML += `${msg}<br>`;
}

function handleError(reason) {
  log(
    `Error <code>${reason.name}</code> in constraint <code>${reason.constraint}</code>: ${reason.message}`,
  );
}
```

### Ergebnis

Hier können Sie das vollständige Beispiel in Aktion sehen.

{{EmbedLiveSample("Example_Constraint_exerciser", 650, 1200, , , , "camera;microphone")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
