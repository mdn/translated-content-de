---
title: Fähigkeiten, Einschränkungen und Einstellungen
slug: Web/API/Media_Capture_and_Streams_API/Constraints
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel behandelt die beiden Konzepte der **Einschränkungen** und **Fähigkeiten** sowie Medieneinstellungen und umfasst ein Beispiel, das wir [Constraint Exerciser](#example_constraint_exerciser) nennen. Der Constraint Exerciser ermöglicht es Ihnen, die Ergebnisse verschiedener Einschränkungssätze auszuprobieren, die auf die Audio- und Videospuren angewendet werden, die von den A/V-Eingabegeräten des Computers (wie seiner Webcam und seinem Mikrofon) kommen.

Historisch gesehen bestand bei der Erstellung von Skripten für das Web, die eng mit Web-APIs zusammenarbeiten, eine wohlbekannte Herausforderung: Oft muss Ihr Code wissen, ob eine API existiert und falls ja, welche Einschränkungen auf dem {{Glossary("user_agent", "User-Agent")}} bestehen, auf dem es läuft. Dies herauszufinden war oft schwierig und beinhaltete in der Regel eine Kombination aus der Erkennung, welcher {{Glossary("user_agent", "User-Agent")}} (oder Browser) verwendet wird, welche Version es ist, das Prüfen, ob bestimmte Objekte existieren, das Überprüfen, ob verschiedene Dinge funktionieren oder nicht, und das Bestimmen, welche Fehler auftreten, und so weiter. Das Ergebnis war, eine Menge sehr fragilen Code zu schreiben oder sich auf Bibliotheken zu verlassen, die diese Dinge für Sie herausfinden und dann {{Glossary("polyfill", "Polyfills")}} implementieren, um die Lücken in der Implementierung in Ihrem Namen zu schließen.

Fähigkeiten und Einschränkungen ermöglichen es dem Browser und der Website oder App, Informationen darüber auszutauschen, welche **einschränkbaren Eigenschaften** die Implementierung des Browsers unterstützt und welche Werte sie für jede unterstützt.

## Überblick

Der Prozess funktioniert folgendermaßen (unter der Verwendung von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) als Beispiel):

1. Falls nötig, rufen Sie [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) auf, um die Liste der **unterstützten Einschränkungen** zu erhalten. Diese Liste teilt Ihnen mit, welche einschränkbaren Eigenschaften dem Browser bekannt sind. Dies ist nicht immer notwendig, da alle nicht bekannten eingeschränkt werden, wenn Sie sie angeben - aber wenn es solche gibt, auf die Sie nicht verzichten können, können Sie damit beginnen, zu überprüfen, ob sie auf der Liste stehen.
2. Sobald das Skript weiß, ob die Eigenschaft(en), die es verwenden möchte, unterstützt werden, kann es die **Fähigkeiten** der API und ihrer Implementierung überprüfen, indem das Objekt untersucht wird, das von der Methode `getCapabilities()` der Spur zurückgegeben wird; dieses Objekt listet jede unterstützte Einschränkung und die unterstützten Werte oder den Bereich der Werte auf.
3. Schließlich wird die Methode `applyConstraints()` der Spur aufgerufen, um die API nach Wunsch zu konfigurieren, indem die Werte oder Wertebereiche angegeben werden, die für eine der einschränkbaren Eigenschaften verwendet werden sollen, für die sie eine Präferenz hat.
4. Die Methode `getConstraints()` der Spur gibt die Menge der Einschränkungen zurück, die beim letzten Aufruf von `applyConstraints()` übergeben wurden. Diese stellen möglicherweise nicht den tatsächlichen aktuellen Zustand der Spur dar, aufgrund von Eigenschaften, deren angeforderte Werte angepasst werden mussten, und weil Standardwerte der Plattform nicht dargestellt werden. Für eine vollständige Darstellung der aktuellen Konfiguration der Spur verwenden Sie `getSettings()`.

In der Media Capture and Streams API haben sowohl [`MediaStream`](/de/docs/Web/API/MediaStream) als auch [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) einschränkbare Eigenschaften.

## Bestimmen, ob eine Einschränkung unterstützt wird

Wenn Sie wissen müssen, ob eine bestimmte Einschränkung vom User-Agent unterstützt wird, können Sie dies herausfinden, indem Sie [`navigator.mediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) aufrufen, um eine Liste der einschränkbaren Eigenschaften zu erhalten, die dem Browser bekannt sind, so wie hier:

```js
const supported = navigator.mediaDevices.getSupportedConstraints();

document.getElementById("frameRateSlider").disabled = !supported["frameRate"];
```

In diesem Beispiel werden die unterstützten Einschränkungen abgerufen, und eine Steuerung, die dem Benutzer die Konfiguration der Bildrate ermöglicht, wird deaktiviert, wenn die Einschränkung `frameRate` nicht unterstützt wird.

## Wie Einschränkungen definiert sind

Eine einzelne Einschränkung ist ein Objekt, dessen Name mit der einschränkbaren Eigenschaft übereinstimmt, deren gewünschter Wert oder Wertebereich angegeben wird. Dieses Objekt enthält null oder mehr individuelle Einschränkungen sowie ein optionales Unterobjekt namens `advanced`, das eine weitere Menge von null oder mehr Einschränkungen enthält, die der User-Agent nach Möglichkeit erfüllen muss. Der User-Agent versucht, die Einschränkungen in der im Einschränkungssatz angegebenen Reihenfolge zu erfüllen.

Das Wichtigste zu verstehen ist, dass die meisten Einschränkungen keine Anforderungen sind; stattdessen sind sie Anfragen. Es gibt Ausnahmen, die wir in Kürze behandeln werden.

### Einen spezifischen Wert für eine Einstellung anfordern

Die meisten Einschränkungen können ein spezifischer Wert sein, der einen gewünschten Wert für die Einstellung angibt. Zum Beispiel:

```js
const constraints = {
  width: 1920,
  height: 1080,
  aspectRatio: 1.777777778,
};

myTrack.applyConstraints(constraints);
```

In diesem Fall geben die Einschränkungen an, dass alle Werte für fast alle Eigenschaften in Ordnung sind, aber eine Standard-Auflösung in hoher Definition (HD) gewünscht wird, mit dem Standard-Seitenverhältnis von 16:9. Es gibt keine Garantie dafür, dass die resultierende Spur mit einem dieser Werte übereinstimmt, aber der User-Agent sollte sein Bestes tun, um so viele wie möglich zu erfüllen.

Die Priorität der Eigenschaften ist einfach: Wenn zwei Eigenschaften gegensätzliche Werte haben, wird die zuerst im Einschränkungssatz aufgeführte Eigenschaft verwendet. Als Beispiel: Wenn der Browser, der den obigen Code ausführt, keine 1920x1080-Spur bereitstellen könnte, aber 1920x900, würde diese bereitgestellt.

Einfache Einschränkungen wie diese, die einen einzelnen Wert angeben, werden immer als nicht erforderlich behandelt. Der User-Agent wird versuchen, das Bereitstellen, was Sie anfordern, wird jedoch nicht garantieren, dass das, was Sie erhalten, übereinstimmen wird. Wenn Sie jedoch einfache Werte für Eigenschaften verwenden, wenn Sie [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufrufen, wird die Anfrage immer erfolgreich sein, da diese Werte als Anfrage betrachtet werden, nicht als Bedingung.

### Festlegen eines Wertebereichs

Manchmal ist jeder Wert innerhalb eines Bereichs für den Wert einer Eigenschaft akzeptabel. Sie können Bereiche entweder mit minimalen oder maximalen Werten angeben und können sogar einen idealen Wert innerhalb des Bereichs spezifizieren. Wenn Sie einen idealen Wert angeben, wird der Browser versuchen, so nah wie möglich an diesen Wert heranzukommen, angesichts der anderen angegebenen Einschränkungen.

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

Hier, nachdem sichergestellt wurde, dass die einschränkbaren Eigenschaften, für die Übereinstimmungen gefunden werden müssen, unterstützt werden (`width`, `height`, `frameRate` und `facingMode`), setzen wir Einschränkungen, die eine Breite nicht kleiner als 640 und nicht größer als 1920 (aber vorzugsweise 1920), eine Höhe nicht kleiner als 400 (aber idealerweise 1080), ein Seitenverhältnis von 16:9 (1.777777778) und eine Bildrate nicht größer als 30 Bilder pro Sekunde anfordern. Darüber hinaus ist das einzige akzeptable Eingabegerät eine Kamera, die zum Benutzer gerichtet ist (eine "Selfie-Kamera"). Wenn die Einschränkungen `width`, `height`, `frameRate` oder `facingMode` nicht erfüllt werden können, wird das zurückgegebene Promise von `applyConstraints()` abgelehnt.

> [!NOTE]
> Einschränkungen, die mit einem oder allen von `max`, `min` oder `exact` angegeben werden, werden immer als verbindlich betrachtet. Wenn eine dieser Einschränkungen beim Aufruf von `applyConstraints()` nicht erfüllt werden kann, wird das Promise abgelehnt.

### Erweiterte Einschränkungen

Die sogenannten erweiterten Einschränkungen werden durch das Hinzufügen einer Eigenschaft `advanced` zu dem Einschränkungssatz erstellt; der Wert dieser Eigenschaft ist ein Array zusätzlicher Einschränkungssätze, die als optional angesehen werden. Es gibt wenige, wenn überhaupt, Anwendungsfälle für dieses Merkmal, und es gibt einige Bestrebungen, es aus der Spezifikation zu entfernen, daher wird es hier nicht behandelt. Wenn Sie mehr erfahren möchten, sehen Sie sich [Abschnitt 11 der Media Capture and Streams Spezifikation](https://w3c.github.io/mediacapture-main/#constrainable-interface) nach Beispiel 2 an.

## Überprüfen der Fähigkeiten

Sie können [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) aufrufen, um eine Liste aller unterstützten Fähigkeiten und der Werte oder Wertebereiche zu erhalten, die jede auf der aktuellen Plattform und dem User-Agent akzeptiert. Diese Funktion gibt ein Objekt zurück, das jede einschränkbare Eigenschaft auflistet, die vom Browser unterstützt wird, und einen Wert oder Wertebereich, der für jede dieser Eigenschaften unterstützt wird.

Beispielsweise wird der Benutzer durch das folgende Snippet um Erlaubnis gebeten, auf seine lokale Kamera und sein Mikrofon zuzugreifen. Sobald die Erlaubnis erteilt wurde, werden `MediaTrackCapabilities`-Objekte in der Konsole protokolliert, die die Fähigkeiten jeder [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) im Detail aufzeigen:

```js
navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    const tracks = stream.getTracks();
    tracks.map((t) => console.log(t.getCapabilities()));
  });
```

Ein Beispiel für ein Fähigkeitsobjekt sieht so aus:

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

Der genaue Inhalt des Objekts hängt vom Browser und der Medientechnologie ab.

## Anwendung von Einschränkungen

Der erste und gebräuchlichste Weg, um Einschränkungen zu verwenden, besteht darin, sie anzugeben, wenn Sie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufrufen:

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

In diesem Beispiel werden die Einschränkungen zur `getUserMedia()`-Zeit angewendet, wobei ein ideales Set von Optionen mit Fallbacks für das Video angefordert wird.

> [!NOTE]
> Sie können eine oder mehrere Medien-Eingabegeräte-IDs angeben, um Einschränkungen dafür festzulegen, welche Eingabequellen zulässig sind. Um eine Liste der verfügbaren Geräte zu sammeln, können Sie [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, dann für jedes Gerät, das die gewünschten Kriterien erfüllt, dessen `deviceId` zum `MediaConstraints`-Objekt hinzufügen, das letztendlich in `getUserMedia()` übergeben wird.

Sie können auch die Einschränkungen einer vorhandenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) während des Laufens ändern, indem Sie die Methode [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) der Spur aufrufen und in ihr ein Objekt übergeben, das die Einschränkungen darstellt, die Sie auf die Spur anwenden möchten:

```js
videoTrack.applyConstraints({
  width: 1920,
  height: 1080,
});
```

In diesem Snippet wird die Videospur, auf die `videoTrack` verweist, aktualisiert, sodass ihre Auflösung so nah wie möglich an 1920x1080 Pixel (1080p High Definition) entspricht.

## Abrufen der aktuellen Einschränkungen und Einstellungen

Es ist wichtig, den Unterschied zwischen **Einschränkungen** und **Einstellungen** zu verstehen. Einschränkungen sind eine Möglichkeit, anzugeben, welche Werte Sie benötigen, wünschen und bereit sind zu akzeptieren für die verschiedenen einschränkbaren Eigenschaften (wie in der Dokumentation zu [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) beschrieben). Einstellungen hingegen sind die tatsächlichen Werte jeder einschränkbaren Eigenschaft zur aktuellen Zeit.

### Abrufen der in Kraft befindlichen Einschränkungen

Wenn Sie zu einem beliebigen Zeitpunkt die Menge der Einschränkungen abrufen müssen, die derzeit auf das Medium angewendet werden, können Sie diese Informationen durch Aufruf von [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) erhalten, wie im folgenden Beispiel gezeigt.

```js
function switchCameras(track, camera) {
  const constraints = track.getConstraints();
  constraints.facingMode = camera;
  track.applyConstraints(constraints);
}
```

Diese Funktion akzeptiert ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) und eine Zeichenkette, die die zu verwendende Kamerarichtung angibt, ruft die aktuellen Einschränkungen ab, setzt den Wert von [`MediaTrackConstraints.facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) auf den angegebenen Wert und wendet dann den aktualisierten Einschränkungssatz an.

### Abrufen der aktuellen Einstellungen für eine Spur

Wenn Sie keine genauen Einschränkungen verwenden (was ziemlich einschränkend ist, also vergewissern Sie sich, dass Sie es ernst meinen!), gibt es keine Garantie dafür, was Sie tatsächlich erhalten, nachdem die Einschränkungen angewendet wurden. Die Werte der einschränkbaren Eigenschaften, wie sie tatsächlich im resultierenden Medium sind, werden als Einstellungen bezeichnet. Wenn Sie das wahre Format und andere Eigenschaften des Mediums wissen müssen, können Sie diese Einstellungen durch Aufruf von [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) abrufen. Dies gibt basierend auf dem Wörterbuch [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) ein Objekt zurück. Zum Beispiel:

```js
function whichCamera(track) {
  return track.getSettings().facingMode;
}
```

Diese Funktion verwendet `getSettings()`, um die derzeit verwendeten Werte für die einschränkbaren Eigenschaften der Spur abzurufen und gibt den Wert von [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode) zurück.

## Beispiel: Constraint Exerciser

In diesem Beispiel erstellen wir einen Exerciser, mit dem Sie mit Medieneinschränkungen experimentieren können, indem Sie den Quellcode bearbeiten, der die Einschränkungssätze für Audio- und Videospuren beschreibt. Sie können diese Änderungen dann anwenden und das Ergebnis sehen, einschließlich sowohl der Ansicht, wie der Stream aussieht, als auch der tatsächlichen Medieneinstellungen, die nach der Anwendung der neuen Einschränkungen festgelegt werden.

HTML und CSS für dieses Beispiel sind ziemlich einfach und werden hier nicht gezeigt. Sie können das vollständige Beispiel sehen, indem Sie {{LiveSampleLink("Example_Constraint_exerciser", "hier klicken")}}.

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
<video id="video" autoplay></video>

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

### Voreinstellungen und Variablen

Zuerst haben wir die voreingestellten Einschränkungssätze als Zeichenketten. Diese Zeichenketten werden in bearbeitbaren {{HTMLElement("textarea")}}s präsentiert, aber dies ist die anfängliche Konfiguration des Streams.

```js
const videoDefaultConstraintString =
  '{\n  "width": 320,\n  "height": 240,\n  "frameRate": 30\n}';
const audioDefaultConstraintString =
  '{\n  "sampleSize": 16,\n  "channelCount": 2,\n  "echoCancellation": false\n}';
```

Diese Voreinstellungen verlangen nach einer ziemlich üblichen Kamerakonfiguration, bestehen jedoch nicht darauf, dass irgendeine Eigenschaft von besonderer Bedeutung ist. Der Browser sollte sein Bestes tun, um diese Einstellungen zu erfüllen, wird sich jedoch mit allem zufriedengeben, was er als nahe Übereinstimmung betrachtet.

Dann initialisieren wir die Variablen, die die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) Objekte für die Video- und Audiospuren sowie die Variablen, die Verweise auf die Video- und Audiospuren selbst speichern, auf `null`.

```js
let videoConstraints = null;
let audioConstraints = null;

let audioTrack = null;
let videoTrack = null;
```

Und wir erhalten Verweise auf alle Elemente, auf die wir zugreifen müssen.

```js
const videoElement = document.getElementById("video");
const logElement = document.getElementById("log");
const supportedConstraintList = document.getElementById("supportedConstraints");
const videoConstraintEditor = document.getElementById("videoConstraintEditor");
const audioConstraintEditor = document.getElementById("audioConstraintEditor");
const videoSettingsText = document.getElementById("videoSettingsText");
const audioSettingsText = document.getElementById("audioSettingsText");
```

Diese Elemente sind:

- `videoElement`
  - : Das {{HTMLElement("video")}} Element, das den Stream anzeigt.
- `logElement`
  - : Ein {{HTMLElement("div")}}, in dem alle Fehlermeldungen oder andere protokollartige Ausgaben geschrieben werden.
- `supportedConstraintList`
  - : Ein {{HTMLElement("ul")}} (ungeordnete Liste), in die wir programmatisch die Namen jeder einschränkbaren Eigenschaft hinzufügen, die vom Browser des Benutzers unterstützt wird.
- `videoConstraintEditor`
  - : Ein {{HTMLElement("textarea")}} Element, das dem Benutzer das Bearbeiten des Codes für den Einschränkungssatz der Videospur ermöglicht.
- `audioConstraintEditor`
  - : Ein {{HTMLElement("textarea")}} Element, das dem Benutzer das Bearbeiten des Codes für den Einschränkungssatz der Audiospur ermöglicht.
- `videoSettingsText`
  - : Ein {{HTMLElement("textarea")}} (das immer deaktiviert ist), das die aktuellen Einstellungen für die einschränkbaren Eigenschaften der Videospur anzeigt.
- `audioSettingsText`
  - : Ein {{HTMLElement("textarea")}} (das immer deaktiviert ist), das die aktuellen Einstellungen für die einschränkbaren Eigenschaften der Audiospur anzeigt.

Schließlich setzen wir den aktuellen Inhalt der beiden Einschränkungsset-Editor-Elemente auf die Voreinstellungen.

```js
videoConstraintEditor.value = videoDefaultConstraintString;
audioConstraintEditor.value = audioDefaultConstraintString;
```

### Aktualisierung der Anzeigeeinstellungen

Rechts von jedem der Einschränkungssatz-Editoren befindet sich eine zweite Textbox, die wir verwenden, um die aktuelle Konfiguration der konfigurierbaren Eigenschaften der Spur anzuzeigen. Diese Anzeige wird von der Funktion `getCurrentSettings()` aktualisiert, die die aktuellen Einstellungen der Audio- und Videospuren abruft und den entsprechenden Code in die Anzeigeelemente der Track-Einstellungen einfügt, indem sie deren [`value`](/de/docs/Web/API/HTMLTextAreaElement/value) festlegt.

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

Diese wird aufgerufen, nachdem der Stream zum ersten Mal gestartet wurde sowie jedes Mal, wenn wir aktualisierte Einschränkungen angewendet haben, wie Sie unten sehen werden.

### Aufbau der Track-Einschränkungssatzobjekte

Die Funktion `buildConstraints()` erstellt die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) Objekte für die Audio- und Videospuren unter Verwendung des Codes in den jeweiligen Einschränkungssatz-Editorfeldern.

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

Diese verwendet {{jsxref("JSON.parse()")}}, um den Code in jedem Editor in ein Objekt zu parsen. Wenn einer der Aufrufe von JSON.parse() eine Ausnahme auslöst, wird `handleError()` aufgerufen, um die Fehlermeldung in das Protokoll auszugeben.

### Konfigurieren und Starten des Streams

Die Methode `startVideo()` kümmert sich um das Einrichten und Starten des Videostreams.

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

Es gibt mehrere Schritte:

1. Sie ruft `buildConstraints()` auf, um die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) Objekte für die beiden Spuren aus dem Code in den Editierfeldern zu erstellen.
2. Sie ruft [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf, wobei sie die Einschränkungsobjekte für die Video- und Audiospuren übergibt. Dies gibt ein [`MediaStream`](/de/docs/Web/API/MediaStream) mit dem Audio und Video von einer Quelle zurück, die den Eingaben entspricht (typischerweise eine Webcam, obwohl Sie mit den richtigen Einschränkungen Medien von anderen Quellen erhalten können).
3. Wenn der Stream erhalten wurde, wird er dem {{HTMLElement("video")}} Element zugewiesen, sodass er auf dem Bildschirm sichtbar ist, und wir greifen die Audiospur und die Videos pur in den Variablen `audioTrack` und `videoTrack` ab.
4. Dann richten wir ein Promise ein, das sich auflöst, wenn das [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event) Ereignis auf dem Videoelement auftritt.
5. Wenn das passiert, wissen wir, dass das Video zu spielen begonnen hat, also rufen wir unsere Funktion `getCurrentSettings()` (oben beschrieben) auf, um die tatsächlichen Einstellungen anzuzeigen, die der Browser nach Berücksichtigung unserer Einschränkungen und der Fähigkeiten der Hardware gewählt hat.
6. Wenn ein Fehler auftritt, protokollieren wir ihn mit der Methode `handleError()`, die wir weiter unten in diesem Artikel betrachten werden.

Wir müssen auch einen Event-Listener einrichten, um darauf zu achten, wann der "Start Video"-Button angeklickt wird:

```js
document.getElementById("startButton").addEventListener(
  "click",
  () => {
    startVideo();
  },
  false,
);
```

### Anwenden von Einschränkungssatz-Updates

Als nächstes richten wir einen Event-Listener für den "Apply Constraints"-Button ein. Wenn er angeklickt wird und keine Medien in Verwendung sind, rufen wir `startVideo()` auf und lassen diese Funktion den Stream mit den angegebenen Einstellungen starten. Andernfalls folgen wir diesen Schritten, um die aktualisierten Einschränkungen auf den schon aktiven Stream anzuwenden:

1. `buildConstraints()` wird aufgerufen, um aktualisierte [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) Objekte für die Audiospur (`audioConstraints`) und die Videospur (`videoConstraints`) zu erstellen.
2. [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) wird auf der Videospur (falls vorhanden) aufgerufen, um die neuen `videoConstraints` anzuwenden. Wenn dies erfolgreich ist, werden die Inhalte des aktuellen Einstellungsfeldes der Videospur basierend auf dem Ergebnis des Aufrufs ihrer Methode [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) aktualisiert.
3. Sobald das erledigt ist, wird `applyConstraints()` auf der Audiospur (falls vorhanden) aufgerufen, um die neuen Audioeinschränkungen anzuwenden. Wenn dies erfolgreich ist, werden die Inhalte des aktuellen Einstellungsfeldes der Audiospur basierend auf dem Ergebnis des Aufrufs ihrer Methode [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) aktualisiert.
4. Wenn ein Fehler beim Anwenden eines der Einschränkungssätze auftritt, wird `handleError()` verwendet, um eine Meldung in das Protokoll auszugeben.

```js
document.getElementById("applyButton").addEventListener(
  "click",
  () => {
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
  },
  false,
);
```

### Behandlung der Stop-Taste

Dann richten wir den Handler für die Stop-Taste ein.

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

Dies stoppt die aktiven Spuren, setzt die Variablen `videoTrack` und `audioTrack` auf `null`, damit wir wissen, dass sie weg sind, und entfernt den Stream aus dem {{HTMLElement("video")}} Element, indem [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) auf `null` gesetzt wird.

### Einfache Unterstützung für Tabs im Editor

Dieser Code fügt den {{HTMLElement("textarea")}} Elementen einfache Unterstützung für Tabs hinzu, indem die Tab-Taste beim Fokussieren eines der beiden Einschränkungsbearbeitungsfelder zwei Leerzeichen einfügt.

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

videoConstraintEditor.addEventListener("keydown", keyDownHandler, false);
audioConstraintEditor.addEventListener("keydown", keyDownHandler, false);
```

### Anzeigen der vom Browser unterstützten einschränkbaren Eigenschaften

Das letzte bedeutende Puzzleteil: Code, der eine Liste der vom Browser des Benutzers unterstützten einschränkbaren Eigenschaften zu Referenzzwecken anzeigt. Jede Eigenschaft ist ein Link zu ihrer Dokumentation auf MDN für die Bequemlichkeit des Benutzers. Siehe die Beispiele zu [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#examples) für Details dazu, wie dieser Code funktioniert.

> [!NOTE]
> Natürlich kann es nicht-standardisierte Eigenschaften in dieser Liste geben, in diesem Fall werden Sie wahrscheinlich feststellen, dass der Dokumentationslink nicht viel Hilfe bietet.

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

Wir haben auch etwas einfache Fehlerbehandlung; `handleError()` wird aufgerufen, um fehlschlagende Promises zu behandeln, und die Funktion `log()` fügt die Fehlermeldung einer speziellen Protokoll-{{HTMLElement("div")}}-Box unterhalb des Videos hinzu.

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

{{EmbedLiveSample("Example_Constraint_exerciser", 650, 800)}}

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
