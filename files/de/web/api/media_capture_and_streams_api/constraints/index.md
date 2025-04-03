---
title: Funktionen, Einschränkungen und Einstellungen
slug: Web/API/Media_Capture_and_Streams_API/Constraints
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel behandelt die beiden Konzepte **Einschränkungen** und **Funktionen** sowie Medieneinstellungen und enthält ein Beispiel, das wir den [Constraint Exerciser](#example_constraint_exerciser) nennen. Der Constraint Exerciser ermöglicht es Ihnen, mit den Ergebnissen verschiedener Einschränkungssätze zu experimentieren, die auf die Audio- und Videospuren angewendet werden, die von den A/V-Eingabegeräten des Computers (wie Webcam und Mikrofon) kommen.

Historisch gesehen war das Schreiben von Skripten für das Web, die eng mit Web-APIs arbeiten, mit einer bekannten Herausforderung verbunden: Oft muss Ihr Code wissen, ob eine API existiert und, falls ja, welche Einschränkungen auf dem {{Glossary("user_agent", "User Agent")}} bestehen, auf dem er läuft. Dies herauszufinden war oft schwierig und erforderte in der Regel eine Kombination aus der Überprüfung, welcher {{Glossary("user_agent", "User Agent")}} (oder welcher Browser) verwendet wird, welche Version es ist, ob bestimmte Objekte existieren, ob verschiedene Dinge funktionieren und welche Fehler auftreten usw. Das Ergebnis war viel sehr fragiler Code oder eine Abhängigkeit von Bibliotheken, die diese Probleme für Sie lösen und dann {{Glossary("polyfill", "Polyfills")}} implementieren, um die Implementationslücken für Sie zu füllen.

Fähigkeiten und Einschränkungen ermöglichen es dem Browser und der Website oder App, Informationen darüber auszutauschen, welche **beschränkbaren Eigenschaften** die Implementierung des Browsers unterstützt und welche Werte sie für jede dieser Eigenschaften unterstützt.

## Überblick

Der Prozess funktioniert folgendermaßen (mit [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) als Beispiel):

1. Falls notwendig, rufen Sie [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) auf, um die Liste der **unterstützten Einschränkungen** zu erhalten, die Ihnen mitteilt, welche beschränkbaren Eigenschaften dem Browser bekannt sind. Dies ist nicht immer notwendig, da alle nicht bekannten ignoriert werden, wenn Sie sie angeben – aber wenn Sie welche haben, ohne die Sie nicht auskommen, können Sie zunächst nachprüfen, ob sie auf der Liste sind.
2. Sobald das Skript weiß, ob die gewünschte(n) Eigenschaft(en) unterstützt werden, kann es die **Fähigkeiten** der API und deren Implementierung überprüfen, indem es das Objekt untersucht, das von der `getCapabilities()`-Methode der Spur zurückgegeben wird. Dieses Objekt listet jede unterstützte Einschränkung und die unterstützten Werte oder Wertbereiche auf.
3. Schließlich wird die `applyConstraints()`-Methode der Spur aufgerufen, um die API nach Wunsch zu konfigurieren, indem die Werte oder Wertbereiche angegeben werden, die für jede der beschränkbaren Eigenschaften verwendet werden sollen, für die eine Präferenz besteht.
4. Die `getConstraints()`-Methode der Spur gibt die Menge an Einschränkungen zurück, die beim letzten Aufruf von `applyConstraints()` übergeben wurde. Dies muss nicht den aktuellen Zustand der Spur darstellen, aufgrund von Eigenschaften, deren angeforderte Werte angepasst werden mussten, und weil plattformspezifische Standardwerte nicht dargestellt werden. Für eine vollständige Darstellung der aktuellen Konfiguration der Spur verwenden Sie `getSettings()`.

In der Media Capture and Streams API haben sowohl [`MediaStream`](/de/docs/Web/API/MediaStream) als auch [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) beschränkbare Eigenschaften.

## Feststellen, ob eine Einschränkung unterstützt wird

Wenn Sie wissen müssen, ob eine bestimmte Einschränkung vom User Agent unterstützt wird, können Sie dies feststellen, indem Sie [`navigator.mediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) aufrufen, um eine Liste der beschränkbaren Eigenschaften zu erhalten, die dem Browser bekannt sind, wie folgt:

```js
const supported = navigator.mediaDevices.getSupportedConstraints();

document.getElementById("frameRateSlider").disabled = !supported["frameRate"];
```

In diesem Beispiel werden die unterstützten Einschränkungen abgerufen, und eine Steuerung, die es dem Benutzer ermöglicht, die Bildrate zu konfigurieren, wird deaktiviert, wenn die `frameRate`-Einschränkung nicht unterstützt wird.

## Wie Einschränkungen definiert sind

Eine einzelne Einschränkung ist ein Objekt, dessen Name mit der beschränkbaren Eigenschaft übereinstimmt, deren gewünschter Wert oder Wertebereich angegeben wird. Dieses Objekt enthält null oder mehr individuelle Einschränkungen sowie optional ein Unterobjekt namens `advanced`, das ein weiteres Set von null oder mehr Einschränkungen enthält, die der User Agent, wenn möglich, erfüllen muss. Der User Agent versucht, die Einschränkungen in der im Einschränkungssatz angegebenen Reihenfolge zu erfüllen.

Das Wichtigste, was es zu verstehen gilt, ist, dass die meisten Einschränkungen keine Anforderungen sind; stattdessen sind sie Wünsche. Es gibt Ausnahmen, und darauf werden wir in Kürze eingehen.

### Anfordern eines bestimmten Wertes für eine Einstellung

In den meisten Fällen kann jede Einschränkung ein bestimmter Wert sein, der einen gewünschten Wert für die Einstellung angibt. Zum Beispiel:

```js
const constraints = {
  width: 1920,
  height: 1080,
  aspectRatio: 1.777777778,
};

myTrack.applyConstraints(constraints);
```

In diesem Fall geben die Einschränkungen an, dass für nahezu alle Eigenschaften beliebige Werte in Ordnung sind, aber eine standardmäßige hochauflösende (HD) Videogröße mit dem Standard-16:9-{{Glossary("aspect_ratio", "Seitenverhältnis")}} gewünscht wird. Es gibt keine Garantie, dass die resultierende Spur mit einem dieser Werte übereinstimmt, aber der User Agent sollte sein Bestes tun, um so viele wie möglich zu erfüllen.

Die Priorisierung der Eigenschaften ist einfach: Wenn zwei Eigenschaften gegensätzliche Werte anfordern, wird die zuerst im Einschränkungssatz aufgeführte Eigenschaft genutzt. Ein Beispiel: Wenn der Browser, der obigen Code ausführt, keine 1920x1080-Spur bereitstellen kann, aber 1920x900 möglich ist, wird das bereitgestellt.

Einfache Einschränkungen wie diese, die einen einzelnen Wert angeben, werden immer als nicht notwendig behandelt. Der User Agent wird versuchen, das Gewünschte bereitzustellen, aber es gibt keine Garantie für eine Übereinstimmung. Wenn Sie jedoch einfache Werte für Eigenschaften verwenden, wenn Sie [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufrufen, wird die Anfrage immer erfolgreich sein, da diese Werte als Anfragen und nicht als Anforderungen betrachtet werden.

### Festlegen eines Wertebereichs

Manchmal ist jeder Wert innerhalb eines Bereichs für den Wert einer Eigenschaft akzeptierbar. Sie können Bereiche mit einem oder beiden Minimal- und Maximalwerten angeben und sogar einen idealen Wert innerhalb des Bereichs festlegen, wenn Sie möchten. Wenn Sie einen idealen Wert angeben, wird der Browser versuchen, so nah wie möglich an diesem Wert zu landen, unter Berücksichtigung der anderen angegebenen Einschränkungen.

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

Hier werden, nachdem sichergestellt wurde, dass die beschränkbaren Eigenschaften, für die übereinstimmungen gefunden werden müssen, unterstützt werden (`width`, `height`, `frameRate` und `facingMode`), Einschränkungen festgelegt, die eine Breite von mindestens 640 und maximal 1920 (aber vorzugsweise 1920), eine Höhe von mindestens 400 (aber idealerweise 1080), ein Seitenverhältnis von 16:9 (1.777777778) und eine Bildrate von nicht mehr als 30 Bildern pro Sekunde anfordern. Außerdem ist das einzige akzeptable Eingabegerät eine Kamera, die den Benutzer ansieht (eine "Selfie-Kamera"). Falls die Einschränkungen `width`, `height`, `frameRate` oder `facingMode` nicht erfüllt werden können, wird das von `applyConstraints()` zurückgegebene Versprechen abgelehnt.

> [!NOTE]
> Einschränkungen, die mit `max`, `min` oder `exact` angegeben werden, werden immer als zwingend betrachtet. Wenn eine Einschränkung, die eines oder mehrere dieser Merkmale verwendet, beim Aufruf von `applyConstraints()` nicht erfüllt werden kann, wird das Versprechen abgelehnt.

### Erweiterte Einschränkungen

Sogenannte erweiterte Einschränkungen werden erstellt, indem dem Einschränkungssatz eine `advanced`-Eigenschaft hinzugefügt wird; der Wert dieser Eigenschaft ist ein Array zusätzlicher Einschränkungssätze, die als optional betrachtet werden. Es gibt wenige, wenn überhaupt, Anwendungsfälle für diese Funktion, und es gibt Interesse daran, sie aus der Spezifikation zu entfernen, daher wird sie hier nicht behandelt. Wenn Sie mehr erfahren möchten, siehe [Abschnitt 11 der Media Capture and Streams-Spezifikation](https://www.w3.org/TR/mediacapture-streams/#idl-def-Constraints), nach Beispiel 2.

## Überprüfen der Fähigkeiten

Sie können [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) aufrufen, um eine Liste aller unterstützten Fähigkeiten und der Werte oder Wertbereiche, die jede auf der aktuellen Plattform und dem aktuellen User Agent akzeptiert, zu erhalten. Diese Funktion gibt ein Objekt zurück, das jede vom Browser unterstützte beschränkbare Eigenschaft und einen unterstützten Wert oder Wertebereich für jede dieser Eigenschaften auflistet.

Zum Beispiel wird der Benutzer im folgenden Codefragment um Erlaubnis gebeten, auf seine lokale Kamera und sein Mikrofon zuzugreifen. Sobald die Erlaubnis erteilt wurde, werden `MediaTrackCapabilities`-Objekte in der Konsole protokolliert, die die Fähigkeiten jeder [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) detailliert zeigen:

```js
navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    const tracks = stream.getTracks();
    tracks.map((t) => console.log(t.getCapabilities()));
  });
```

Ein Beispiel für ein Fähigkeitenobjekt sieht so aus:

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

Der erste und häufigste Weg, Einschränkungen zu verwenden, besteht darin, sie festzulegen, wenn Sie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufrufen:

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

In diesem Beispiel werden die Einschränkungen bei `getUserMedia()`-Zeitpunkt angewendet und fragen nach einem idealen Satz von Optionen mit Rückfallmöglichkeiten für das Video.

> [!NOTE]
> Sie können eine oder mehrere Medienquellgeräte-IDs angeben, um Einschränkungen dafür festzulegen, welche Eingabequellen erlaubt sind. Um eine Liste der verfügbaren Geräte zu sammeln, können Sie [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, dann für jedes Gerät, das die gewünschten Kriterien erfüllt, seine `deviceId` zum `MediaConstraints`-Objekt hinzufügen, das letztendlich in `getUserMedia()` übergeben wird.

Sie können auch die Einschränkungen einer bestehenden [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) während der Ausführung ändern, indem Sie die `applyConstraints()`-Methode der Spur aufrufen und ein Objekt übergeben, das die Einschränkungen darstellt, die Sie auf die Spur anwenden möchten:

```js
videoTrack.applyConstraints({
  width: 1920,
  height: 1080,
});
```

In diesem Codeausschnitt wird die Videospur, die von `videoTrack` referenziert wird, aktualisiert, sodass ihre Auflösung so nah wie möglich 1920x1080 Pixel (1080p High Definition) entspricht.

## Abrufen aktueller Einschränkungen und Einstellungen

Es ist wichtig, den Unterschied zwischen **Einschränkungen** und **Einstellungen** zu verstehen. Einschränkungen sind eine Möglichkeit, anzugeben, welche Werte Sie für die verschiedenen beschränkbaren Eigenschaften benötigen, wünschen und akzeptieren können (wie in der Dokumentation für[`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) beschrieben), während Einstellungen die tatsächlichen Werte jeder beschränkbaren Eigenschaft zum aktuellen Zeitpunkt sind.

### Abrufen der wirksamen Einschränkungen

Wenn Sie zu irgendeinem Zeitpunkt die aktuell auf die Medien angewendeten Einschränkungen abrufen müssen, können Sie diese Informationen erhalten, indem Sie [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) aufrufen, wie im folgenden Beispiel gezeigt.

```js
function switchCameras(track, camera) {
  const constraints = track.getConstraints();
  constraints.facingMode = camera;
  track.applyConstraints(constraints);
}
```

Diese Funktion akzeptiert eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) und einen String, der den zu verwendenden Modus der Kamerafront angibt, holt die aktuellen Einschränkungen, setzt den Wert des[`MediaTrackConstraints.facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) auf den angegebenen Wert und wendet dann den aktualisierten Einschränkungssatz an.

### Aktuelle Einstellungen für eine Spur abrufen

Es sei denn, Sie verwenden nur exakt definierte Einschränkungen (was ziemlich einschränkend ist, also stellen Sie sicher, dass Sie es ernst meinen!), es gibt keine Garantie dafür, was tatsächlich nach Anwendung der Einschränkungen herauskommt. Die Werte der beschränkbaren Eigenschaften, wie sie tatsächlich in den resultierenden Medien sind, werden als Einstellungen bezeichnet. Wenn Sie das wahre Format und andere Eigenschaften der Medien kennen müssen, können Sie diese Einstellungen erhalten, indem Sie [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) aufrufen. Dies gibt ein Objekt zurück, das auf dem Wörterbuch [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) basiert. Zum Beispiel:

```js
function whichCamera(track) {
  return track.getSettings().facingMode;
}
```

Diese Funktion verwendet `getSettings()`, um die derzeit für die beschränkbaren Eigenschaften der Spur verwendeten Werte abzurufen, und gibt den Wert von [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode) zurück.

## Beispiel: Constraint Exerciser

In diesem Beispiel erstellen wir einen Exerciser, der es Ihnen ermöglicht, mit Medieneinschränkungen zu experimentieren, indem Sie den Quellcode beschreiben, der die Einschränkungssätze für Audio- und Videospuren beschreibt. Sie können dann diese Änderungen anwenden und das Ergebnis sehen, einschließlich sowohl dessen, wie der Stream aussieht, als auch dessen, welche Medien-Einstellungen nach Anwendung der neuen Einschränkungen tatsächlich festgelegt sind.

Das HTML und CSS für dieses Beispiel sind ziemlich einfach und werden hier nicht gezeigt. Sie können das vollständige Beispiel ansehen, indem Sie {{LiveSampleLink("Example_Constraint_exerciser", "hier klicken")}}.

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

### Standards und Variablen

Zuerst haben wir die Standard-Einschränkungssätze als Strings. Diese Strings werden in bearbeitbaren {{HTMLElement("textarea")}}s präsentiert, aber dies ist die anfängliche Konfiguration des Streams.

```js
const videoDefaultConstraintString =
  '{\n  "width": 320,\n  "height": 240,\n  "frameRate": 30\n}';
const audioDefaultConstraintString =
  '{\n  "sampleSize": 16,\n  "channelCount": 2,\n  "echoCancellation": false\n}';
```

Diese Standards erbitten eine ziemlich gebräuchliche Kamerakonfiguration, bestehen jedoch nicht darauf, dass eine Eigenschaft von besonderer Bedeutung ist. Der Browser sollte sein Bestes tun, um diese Einstellungen zu erfüllen, wird sich jedoch mit allem zufriedengeben, was er für eine nahe Übereinstimmung hält.

Dann initialisieren wir die Variablen, die die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Video- und Audiospuren enthalten, sowie die Variablen, die Referenzen zu den Video- und Audiospuren selbst auf `null` setzen.

```js
let videoConstraints = null;
let audioConstraints = null;

let audioTrack = null;
let videoTrack = null;
```

Und wir bekommen Referenzen zu allen Elementen, auf die wir zugreifen müssen.

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
  - : Das {{HTMLElement("video")}}-Element, das den Stream anzeigen wird.
- `logElement`
  - : Ein {{HTMLElement("div")}}, in dem Fehlernachrichten oder andere Protokollarten ausgegeben werden.
- `supportedConstraintList`
  - : Ein {{HTMLElement("ul")}} (ungeordnete Liste), in die wir programmatisch die Namen jeder der vom Benutzer unterstützten beschränkbaren Eigenschaften hinzufügen.
- `videoConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}-Element, das dem Benutzer ermöglicht, den Code für den Einschränkungssatz der Videospur zu bearbeiten.
- `audioConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}-Element, das dem Benutzer ermöglicht, den Code für den Einschränkungssatz der Audiospur zu bearbeiten.
- `videoSettingsText`
  - : Ein {{HTMLElement("textarea")}} (das immer deaktiviert ist), das die aktuellen Einstellungen für die beschränkbaren Eigenschaften der Videospur anzeigt.
- `audioSettingsText`
  - : Ein {{HTMLElement("textarea")}} (das immer deaktiviert ist), das die aktuellen Einstellungen für die beschränkbaren Eigenschaften der Audiospur anzeigt.

Schließlich setzen wir den aktuellen Inhalt der beiden Einschränkungssatz-Editor-Elemente auf die Standardwerte.

```js
videoConstraintEditor.value = videoDefaultConstraintString;
audioConstraintEditor.value = audioDefaultConstraintString;
```

### Aktualisieren der Anzeigeneinstellungen

Rechts von jedem der Einschränkungssatz-Editoren befindet sich ein zweites Textfeld, das wir verwenden, um die aktuelle Konfiguration der konfigurierbaren Eigenschaften der Spur anzuzeigen. Diese Anzeige wird von der Funktion `getCurrentSettings()` aktualisiert, die die aktuellen Einstellungen für die Audio- und Videospuren erhält und den entsprechenden Code in die Anzeige der Einstellungen der Spuren einfügt, indem deren [`value`](/de/docs/Web/API/HTMLTextAreaElement/value) gesetzt wird.

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

Diese wird aufgerufen, nachdem der Stream zum ersten Mal gestartet wurde, sowie jedes Mal, wenn wir aktualisierte Einschränkungen angewendet haben, wie Sie weiter unten sehen werden.

### Erstellen der Objekte für den Einschränkungssatz der Spur

Die Funktion `buildConstraints()` erstellt die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Audio- und Videospuren unter Verwendung des Codes in den beiden Edit-Boxen für Einschränkungssätze der Spuren.

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

Diese verwendet {{jsxref("JSON.parse()")}}, um den Code in jedem Editor in ein Objekt zu parsen. Wenn einer der JSON.parse()-Aufrufe eine Ausnahme auslöst, wird `handleError()` zur Ausgabe der Fehlermeldung in das Protokoll aufgerufen.

### Konfigurieren und Starten des Streams

Die Methode `startVideo()` behandelt das Einrichten und Starten des Videostreams.

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
    .then(() => {
      return new Promise((resolve) => {
        videoElement.onloadedmetadata = resolve;
      });
    })
    .then(() => {
      getCurrentSettings();
    })
    .catch(handleError);
}
```

Es gibt mehrere Schritte hier:

1. Sie ruft `buildConstraints()` auf, um die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die beiden Spuren aus dem Code in den Edit-Boxen zu erstellen.
2. Sie ruft [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf und übergibt die Constraints-Objekte für die Video- und Audiospuren. Dies gibt einen [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der Audio und Video von einer Quelle enthält, die den Eingaben entspricht (normalerweise eine Webcam, obwohl Sie, wenn Sie die richtigen Einschränkungen angeben, Medien aus anderen Quellen erhalten können).
3. Wenn der Stream erhalten wird, wird er dem {{HTMLElement("video")}}-Element zugewiesen, damit er auf dem Bildschirm sichtbar ist, und wir holen die Audiound Videospur in die Variablen `audioTrack` und `videoTrack`.
4. Dann richten wir ein Versprechen ein, das sich auflöst, wenn das [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)-Ereignis im Videoelement auftritt.
5. Wenn das passiert, wissen wir, dass das Video zu spielen begonnen hat, also rufen wir unsere Funktion `getCurrentSettings()` (oben beschrieben) auf, um die tatsächlichen Einstellungen anzuzeigen, die der Browser nach Berücksichtigung unserer Einschränkungen und der Fähigkeiten der Hardware beschlossen hat.
6. Wenn ein Fehler auftritt, protokollieren wir ihn mit der Methode `handleError()`, die wir weiter unten in diesem Artikel betrachten werden.

Wir müssen auch einen Ereignis-Listener einrichten, um zu überwachen, wann die "Start Video"-Schaltfläche geklickt wird:

```js
document.getElementById("startButton").addEventListener(
  "click",
  () => {
    startVideo();
  },
  false,
);
```

### Anwenden von Updates an Einschränkungssätzen

Als Nächstes richten wir einen Ereignis-Listener für die "Apply Constraints"-Schaltfläche ein. Wenn sie geklickt wird und es nicht bereits Medien in Verwendung gibt, rufen wir `startVideo()` auf und lassen diese Funktion den Stream mit den festgelegten Einstellungen starten. Andernfalls führen wir folgende Schritte durch, um die aktualisierten Einschränkungen auf den bereits aktiven Stream anzuwenden:

1. `buildConstraints()` wird aufgerufen, um aktualisierte [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Audiospur (`audioConstraints`) und die Videospur (`videoConstraints`) zu erstellen.
2. [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) wird auf der Videospur aufgerufen (falls vorhanden), um die neuen `videoConstraints` anzuwenden. Wenn das erfolgreich ist, werden die Inhalte der aktuellen Einstellung der Videospur-Box basierend auf dem Ergebnis des Aufrufs seiner [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)-Methode aktualisiert.
3. Sobald das erledigt ist, wird `applyConstraints()` auf der Audiospur (falls vorhanden) aufgerufen, um die neuen Audio-Einschränkungen anzuwenden. Wenn das erfolgreich ist, werden die Inhalte der aktuellen Einstellung der Audiospur-Box basierend auf dem Ergebnis des Aufrufs seiner [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)-Methode aktualisiert.
4. Wenn ein Fehler auftritt, indem entweder der aufgewendete Einschränkungssatz angewendet wird, wird `handleError()` verwendet, um eine Nachricht in das Protokoll auszugeben.

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

### Handhabung der Stop-Taste

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

Dies stoppt die aktiven Spuren, setzt die `videoTrack` und `audioTrack`-Variablen auf `null`, damit wir wissen, dass sie weg sind, und entfernt den Stream aus dem {{HTMLElement("video")}}-Element, indem [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) auf `null` gesetzt wird.

### Einfache Tabulatorunterstützung im Editor

Dieser Code fügt den {{HTMLElement("textarea")}}-Elementen eine einfache Unterstützung für Tabulatoren hinzu, indem er die Tabulatortaste zwei Leerzeichen einfügt, wenn eine der Bearbeitungsboxen für Einschränkungen fokussiert ist.

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

### Anzeige von beschränkbaren Eigenschaften, die der Browser unterstützt

Das letzte wesentliche Teil des Puzzles: Code, der zur Referenz des Benutzers eine Liste der beschränkbaren Eigenschaften anzeigt, die sein Browser unterstützt. Jede Eigenschaft ist ein Link zu ihrer Dokumentation auf MDN für den Benutzer. Siehe die Beispiele zu [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#examples) für Details, wie dieser Code funktioniert.

> [!NOTE]
> Natürlich können einige dieser Eigenschaften in der Liste nicht standardisiert sein, in welchem Fall Sie wahrscheinlich feststellen werden, dass der Dokumentationslink nicht viel hilft.

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

Wir haben auch etwas einfache Fehlerbehandlung, `handleError()` wird aufgerufen, um fehlgeschlagene Versprechen zu handhaben, und die `log()`-Funktion fügt die Fehlermeldung in ein spezielles Protokoll-{{HTMLElement("div")}}-Feld unter dem Video ein.

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

- [Medienaufnahme- und Streams-API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
