---
title: Fähigkeiten, Einschränkungen und Einstellungen
slug: Web/API/Media_Capture_and_Streams_API/Constraints
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel behandelt die Konzepte der **Einschränkungen** und **Fähigkeiten**, sowie die Medieneinstellungen und enthält ein Beispiel, das wir den [Constraint Exerciser](#example_constraint_exerciser) nennen. Der Constraint Exerciser ermöglicht es Ihnen, mit den Ergebnissen verschiedener Einschränkungssets zu experimentieren, die auf die Audio- und Videospuren angewendet werden, die von den A/V-Eingabegeräten des Computers (wie z.B. der Webcam und dem Mikrofon) stammen.

Historisch gesehen hatte das Schreiben von Skripten für das Web, die eng mit Web-APIs arbeiten, eine bekannte Herausforderung: Oft muss Ihr Code wissen, ob eine API existiert und falls ja, welche Einschränkungen sie auf dem {{Glossary("user_agent", "User-Agent")}}, auf dem sie läuft, hat. Dies herauszufinden war oft schwierig und hat in der Regel damit zu tun, welche Kombination von {{Glossary("user_agent", "User-Agent")}} (oder Browser) Sie verwenden, welche Version es ist, ob bestimmte Objekte existieren, ob verschiedene Dinge funktionieren und welche Fehler auftreten, und so weiter. Das Ergebnis war oft viel sehr fragiler Code oder eine Abhängigkeit von Bibliotheken, die diese Dinge für Sie herausfinden und dann {{Glossary("polyfill", "Polyfills")}} implementieren, um die Löcher in der Implementierung für Sie zu stopfen.

Fähigkeiten und Einschränkungen ermöglichen es dem Browser und der Website oder App, Informationen darüber auszutauschen, welche **beschränkbaren Eigenschaften** die Implementierung des Browsers unterstützt und welche Werte dafür unterstützt werden.

## Überblick

Der Prozess funktioniert so (mit [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) als Beispiel):

1. Rufen Sie bei Bedarf [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) auf, um die Liste der **unterstützten Einschränkungen** zu erhalten, die Ihnen mitteilt, welche beschränkbaren Eigenschaften dem Browser bekannt sind. Das ist nicht immer notwendig, da alle, die nicht bekannt sind, ignoriert werden, wenn Sie sie angeben – aber wenn Sie einige haben, ohne die Sie nicht auskommen können, können Sie damit beginnen, zu überprüfen, ob sie auf der Liste stehen.
2. Sobald das Skript weiß, ob die Eigenschaft oder Eigenschaften, die es verwenden möchte, unterstützt werden, kann es die **Fähigkeiten** der API und ihrer Implementierung überprüfen, indem es das von der Methode `getCapabilities()` des Tracks zurückgegebene Objekt untersucht; dieses Objekt listet jede unterstützte Einschränkung und die unterstützten Werte oder Wertebereiche auf.
3. Schließlich wird die Methode `applyConstraints()` des Tracks aufgerufen, um die API nach Wünschen zu konfigurieren, indem die Werte oder Wertebereiche angegeben werden, die es für eine der beschränkbaren Eigenschaften verwenden möchte, für die es eine Präferenz hat.
4. Die Methode `getConstraints()` des Tracks gibt das Set von Einschränkungen zurück, das bei der zuletzt aufgerufenen `applyConstraints()`-Methode übergeben wurde. Dies könnte nicht den tatsächlichen aktuellen Zustand des Tracks darstellen, da angeforderte Werte angepasst werden mussten und weil Standardwerte der Plattform nicht vertreten sind. Für eine vollständige Darstellung der aktuellen Konfiguration des Tracks verwenden Sie `getSettings()`.

In der API für Media Capture und Streams haben sowohl [`MediaStream`](/de/docs/Web/API/MediaStream) als auch [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) beschränkbare Eigenschaften.

## Feststellen, ob eine Einschränkung unterstützt wird

Wenn Sie wissen müssen, ob eine gegebene Einschränkung vom User-Agent unterstützt wird, können Sie dies herausfinden, indem Sie [`navigator.mediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) aufrufen, um eine Liste der beschränkbaren Eigenschaften zu erhalten, die dem Browser bekannt sind, wie folgt:

```js
const supported = navigator.mediaDevices.getSupportedConstraints();

document.getElementById("frameRateSlider").disabled = !supported["frameRate"];
```

In diesem Beispiel werden die unterstützten Einschränkungen abgerufen, und ein Steuerungselement, das es dem Benutzer ermöglicht, die Bildrate zu konfigurieren, wird deaktiviert, wenn die Einschränkung `frameRate` nicht unterstützt wird.

## Wie Einschränkungen definiert sind

Eine einzelne Einschränkung ist ein Objekt, dessen Name mit der beschränkbaren Eigenschaft übereinstimmt, deren gewünschter Wert oder Wertebereich spezifiziert wird. Dieses Objekt enthält null oder mehr einzelne Einschränkungen sowie ein optionales Unterobjekt namens `advanced`, das eine weitere Menge von null oder mehr Einschränkungen enthält, die der User-Agent nach Möglichkeit erfüllen muss. Der User-Agent versucht, die Einschränkungen in der im Einschränkungsset angegebenen Reihenfolge zu erfüllen.

Das Wichtigste zu verstehen ist, dass die meisten Einschränkungen keine Anforderungen sind; stattdessen sind sie Anfragen. Es gibt Ausnahmen, und zu diesen kommen wir in Kürze.

### Anfordern eines bestimmten Werts für eine Einstellung

Bei den meisten kann jede Einschränkung ein bestimmter Wert sein, der einen gewünschten Wert für die Einstellung angibt. Zum Beispiel:

```js
const constraints = {
  width: 1920,
  height: 1080,
  aspectRatio: 1.777777778,
};

myTrack.applyConstraints(constraints);
```

In diesem Fall geben die Einschränkungen an, dass jeder Wert für fast alle Eigenschaften in Ordnung ist, aber dass eine Bildgröße in Standard-High-Definition (HD) mit dem Standard-16:9 {{Glossary("aspect_ratio", "Seitenverhältnis")}} erwünscht ist. Es gibt keine Garantie, dass die resultierende Spur mit einer dieser Einstellungen übereinstimmt, aber der User-Agent sollte sein Bestes tun, um so viele wie möglich anzupassen.

Die Priorisierung der Eigenschaften ist einfach: Wenn zwei Eigenschaften mit angeforderten Werten unvereinbar sind, wird die erste im Einschränkungsset aufgelistet. Ein Beispiel: Wenn der Browser, auf dem der obige Code ausgeführt wird, keine 1920x1080-Spur bereitstellen kann, aber 1920x900, dann wird dies bereitgestellt.

Einfache Einschränkungen wie diese, die nur einen Wert angeben, werden immer als nicht erforderlich behandelt. Der User-Agent wird versuchen, das zu liefern, was Sie anfordern, aber keine Garantie dafür geben, dass das, was Sie bekommen, übereinstimmt. Wenn Sie jedoch einfache Werte für Eigenschaften verwenden, wenn Sie [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufrufen, wird die Anforderung immer erfolgreich sein, da diese Werte als Anruf angesehen werden, nicht als Anforderung.

### Angabe eines Wertebereichs

Manchmal ist jeder Wert innerhalb eines Bereichs akzeptabel für den Wert einer Eigenschaft. Sie können Bereiche mit entweder minimalen oder maximalen Werten oder beidem angeben, und Sie können sogar einen idealen Wert innerhalb des Bereichs angeben, wenn Sie möchten. Wenn Sie einen idealen Wert bereitstellen, wird der Browser versuchen, diesen Wert so gut wie möglich zu erreichen, unter Berücksichtigung der anderen spezifizierten Einschränkungen.

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

Hier, nachdem sichergestellt wurde, dass die zu findenden beschränkbaren Eigenschaften unterstützt werden (`width`, `height`, `frameRate` und `facingMode`), richten wir Einschränkungen ein, die eine Breite von nicht weniger als 640 und nicht mehr als 1920 (aber vorzugsweise 1920), eine Höhe von nicht weniger als 400 (aber idealerweise 1080), ein Seitenverhältnis von 16:9 (1.777777778) und eine Bildrate von nicht mehr als 30 Bildern pro Sekunde anfordern. Darüber hinaus ist das einzige akzeptable Eingabegerät eine Kamera, die den Benutzer ansieht (eine "Selfie-Kamera"). Wenn die Einschränkungen `width`, `height`, `frameRate` oder `facingMode` nicht erfüllt werden können, wird das Promise, das von `applyConstraints()` zurückgegeben wurde, abgelehnt.

> [!NOTE]
> Einschränkungen, die mit `max`, `min` oder `exact` angegeben werden, werden immer als obligatorisch behandelt. Wenn eine Einschränkung, die eine oder mehrere davon verwendet, nicht erfüllt werden kann, wenn `applyConstraints()` aufgerufen wird, wird das Promise abgelehnt.

### Erweiterte Einschränkungen

Die sogenannten erweiterten Einschränkungen werden erstellt, indem der Einschränkungsmenge eine `advanced`-Eigenschaft hinzugefügt wird; der Wert dieser Eigenschaft ist ein Array von zusätzlichen Einschränkungssets, die als optional angesehen werden. Es gibt wenige, wenn überhaupt, Anwendungsfälle für diese Funktion, und es gibt Interesse daran, sie aus der Spezifikation zu entfernen, daher wird sie hier nicht behandelt. Wenn Sie mehr erfahren möchten, lesen Sie [Abschnitt 11 der Media Capture and Streams-Spezifikation](https://www.w3.org/TR/mediacapture-streams/#idl-def-Constraints), nach Beispiel 2.

## Überprüfung der Fähigkeiten

Sie können [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) aufrufen, um eine Liste aller unterstützten Fähigkeiten und der Werte oder Wertebereiche zu erhalten, die jeder auf der aktuellen Plattform und dem User-Agent akzeptiert. Diese Funktion gibt ein Objekt zurück, das jede vom Browser unterstützte beschränkbare Eigenschaft auflistet und einen Wert oder Wertebereich, der für jede dieser Eigenschaften unterstützt wird.

Zum Beispiel wird der folgende Ausschnitt dazu führen, dass der Benutzer um Erlaubnis gebeten wird, auf seine lokale Kamera und Mikrofon zuzugreifen. Sobald die Erlaubnis erteilt wurde, werden `MediaTrackCapabilities`-Objekte in die Konsole geloggt, die die Fähigkeiten jedes [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) detaillieren:

```js
navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    const tracks = stream.getTracks();
    tracks.map((t) => console.log(t.getCapabilities()));
  });
```

Ein Beispiel für ein Fähigkeiten-Objekt sieht so aus:

```js
{
  "autoGainControl": [
    true,
    false
  ],
  "channelCount": {
    "max": 1,
    "min": 1
  },
  "deviceId": "jjxEMqxIhGdryqbTjDrXPWrkjy55Vte70kWpMe3Lge8=",
  "echoCancellation": [
    true,
    false
  ],
  "groupId": "o2tZiEj4MwOdG/LW3HwkjpLm1D8URat4C5kt742xrVQ=",
  "noiseSuppression": [
    true,
    false
  ]
}
```

Der genaue Inhalt des Objekts hängt vom Browser und dem Medienhardware ab.

## Anwendung von Einschränkungen

Der erste und häufigste Weg, Einschränkungen zu verwenden, ist, sie beim Aufrufen von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) anzugeben:

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

In diesem Beispiel werden Einschränkungen zur `getUserMedia()`-Zeit angewendet, um ein ideales Set von Optionen mit Fallbacks für das Video zu erbitten.

> [!NOTE]
> Sie können ein oder mehrere Medien-Eingabegeräte-IDs angeben, um Einschränkungen festzulegen, welche Eingabequellen zulässig sind. Um eine Liste der verfügbaren Geräte zu sammeln, können Sie [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, dann für jedes Gerät, das die gewünschten Kriterien erfüllt, seine `deviceId` zum `MediaConstraints`-Objekt hinzufügen, das schließlich an `getUserMedia()` übergeben wird.

Sie können auch die Einschränkungen einer bestehenden [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) im laufenden Betrieb ändern, indem Sie die [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)-Methode des Tracks aufrufen, wobei Sie ein Objekt übergeben, das die Einschränkungen darstellt, die Sie auf den Track anwenden möchten:

```js
videoTrack.applyConstraints({
  width: 1920,
  height: 1080,
});
```

In diesem Ausschnitt wird die Videospur, auf die von `videoTrack` verwiesen wird, aktualisiert, so dass ihre Auflösung so nah wie möglich bei 1920x1080 Pixeln (1080p HD) liegt.

## Abrufen der aktuellen Einschränkungen und Einstellungen

Es ist wichtig, den Unterschied zwischen **Einschränkungen** und **Einstellungen** zu verstehen. Einschränkungen sind eine Möglichkeit, welche Werte Sie benötigen, wünschen und bereit sind zu akzeptieren, für die verschiedenen beschränkbaren Eigenschaften anzugeben (wie in der Dokumentation für [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) beschrieben), während Einstellungen die tatsächlichen Werte jeder beschränkbaren Eigenschaft zum aktuellen Zeitpunkt sind.

### Abrufen der aktuellen Einschränkungen

Wenn Sie zu irgendeinem Zeitpunkt das Set von Einschränkungen abrufen müssen, das derzeit auf die Medien angewendet wird, können Sie diese Informationen abrufen, indem Sie [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) aufrufen, wie im folgenden Beispiel gezeigt.

```js
function switchCameras(track, camera) {
  const constraints = track.getConstraints();
  constraints.facingMode = camera;
  track.applyConstraints(constraints);
}
```

Diese Funktion akzeptiert eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) und einen String, der den Modus der Kameraausrichtung angibt, den sie verwenden möchten, holt die aktuellen Einschränkungen, setzt den Wert von [`MediaTrackConstraints.facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) auf den angegebenen Wert und wendet das aktualisierte Einschränkungsset an.

### Abrufen der aktuellen Einstellungen für einen Track

Sofern Sie keine genauen Einschränkungen verwenden (was ziemlich restriktiv ist, also stellen Sie sicher, dass Sie es wirklich so meinen!), gibt es keine Garantie, was Sie tatsächlich erhalten, nachdem die Einschränkungen angewendet wurden. Die Werte der beschränkbaren Eigenschaften, wie sie tatsächlich im resultierenden Medium sind, werden als die Einstellungen bezeichnet. Wenn Sie das wahre Format und andere Eigenschaften des Mediums wissen müssen, können Sie diese Einstellungen durch Aufrufen von [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) abrufen. Dies gibt ein Objekt basierend auf dem Wörterbuch [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) zurück. Zum Beispiel:

```js
function whichCamera(track) {
  return track.getSettings().facingMode;
}
```

Diese Funktion verwendet `getSettings()`, um die Werte der derzeit in Verwendung befindlichen beschränkbaren Eigenschaften des Tracks abzurufen und gibt den Wert von [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode) zurück.

## Beispiel: Einschränkungsübungen

In diesem Beispiel erstellen wir einen Übungsprogramm, mit dem Sie mit Medieneinschränkungen experimentieren können, indem Sie den Quellcode bearbeiten, der die Einschränkungssets für Audio- und Videospuren beschreibt. Sie können dann diese Änderungen anwenden und das Ergebnis sehen, einschließlich dessen, wie der Stream aussieht und welche tatsächlichen Medieneinstellungen nach dem Anwenden der neuen Einschränkungen eingestellt sind.

Das HTML und CSS für dieses Beispiel sind ziemlich einfach und werden hier nicht gezeigt. Sie können sich das vollständige Beispiel ansehen, indem Sie {{LiveSampleLink("Example_Constraint_exerciser", "hier klicken")}}.

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

### Standardeinstellungen und Variablen

Zuerst haben wir die Standardeinschränkungssets als Strings. Diese Strings werden in bearbeitbaren {{HTMLElement("textarea")}}s präsentiert, aber dies ist die anfängliche Konfiguration des Streams.

```js
const videoDefaultConstraintString =
  '{\n  "width": 320,\n  "height": 240,\n  "frameRate": 30\n}';
const audioDefaultConstraintString =
  '{\n  "sampleSize": 16,\n  "channelCount": 2,\n  "echoCancellation": false\n}';
```

Diese Standardeinstellungen fordern eine ziemlich häufige Kamerakonfiguration an, bestehen jedoch nicht darauf, dass eine Eigenschaft von besonderer Bedeutung ist. Der Browser sollte sein Bestes tun, um diese Einstellungen zu erreichen, wird sich aber mit dem begnügen, was er für eine nahe Übereinstimmung hält.

Dann initialisieren wir die Variablen, die die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Video- und Audiospuren enthalten, sowie die Variablen, die Referenzen auf die Video- und Audiospuren selbst enthalten, auf `null`.

```js
let videoConstraints = null;
let audioConstraints = null;

let audioTrack = null;
let videoTrack = null;
```

Und wir erhalten Referenzen auf alle Elemente, auf die wir zugreifen müssen.

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
  - : Ein {{HTMLElement("div")}}, in den Fehlermeldungen oder andere log-ähnliche Ausgaben geschrieben werden.
- `supportedConstraintList`
  - : Ein {{HTMLElement("ul")}} (ungeordnete Liste), in die wir die Namen jeder der beschränkbaren Eigenschaften programmatisch hinzufügen, die vom Browser des Benutzers unterstützt werden.
- `videoConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}-Element, das es dem Benutzer ermöglicht, den Code für das Einschränkungsset der Videospur zu bearbeiten.
- `audioConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}-Element, das es dem Benutzer ermöglicht, den Code für das Einschränkungsset der Audiospur zu bearbeiten.
- `videoSettingsText`
  - : Ein {{HTMLElement("textarea")}} (immer deaktiviert), das die aktuellen Einstellungen für die beschränkbaren Eigenschaften der Videospur anzeigt.
- `audioSettingsText`
  - : Ein {{HTMLElement("textarea")}} (immer deaktiviert), das die aktuellen Einstellungen für die beschränkbaren Eigenschaften der Audiospur anzeigt.

Schließlich setzen wir die aktuellen Inhalte der beiden Einschränkungsset-Editor-Elemente auf die Standardeinstellungen.

```js
videoConstraintEditor.value = videoDefaultConstraintString;
audioConstraintEditor.value = audioDefaultConstraintString;
```

### Aktualisierung der Anzeigeneinstellungen

Rechts von jedem der Einschränkungsset-Editoren befindet sich ein zweites Textfeld, das wir verwenden, um die aktuelle Konfiguration der konfigurierbaren Eigenschaften des Tracks anzuzeigen. Diese Anzeige wird von der Funktion `getCurrentSettings()` aktualisiert, die die aktuellen Einstellungen für die Audio- und Videospuren erhält und den entsprechenden Code in die Anzeige der Einstellungen der Spuren einfügt, indem ihre [`value`](/de/docs/Web/API/HTMLTextAreaElement/value) gesetzt wird.

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

Dies wird aufgerufen, nachdem der Stream zum ersten Mal startet, sowie jedes Mal, wenn wir aktualisierte Einschränkungen angewendet haben, wie Sie unten sehen werden.

### Aufbau der Track-Einschränkungsobjekte

Die Funktion `buildConstraints()` erstellt die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Audio- und Videospuren mithilfe des Codes in den beiden Editoren der Einschränkungssets.

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

Sie verwendet {{jsxref("JSON.parse()")}}, um den Code in jedem Editor in ein Objekt zu parsen. Wenn ein Aufruf von JSON.parse() eine Ausnahme auslöst, wird `handleError()` aufgerufen, um die Fehlermeldung im Log auszugeben.

### Konfiguration und Start des Streams

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

Es gibt mehrere Schritte, die hier ausgeführt werden:

1. Sie ruft `buildConstraints()` auf, um die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die beiden Tracks aus dem Code in den Editoren zu erstellen.
2. Sie ruft [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf und übergibt die Einschränkungsobjekte für die Video- und Audiospuren. Dies gibt einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit dem Audio und Video aus einer Quelle zurück, die die Eingaben erfüllt (typischerweise eine Webcam, obwohl Sie mit den richtigen Einschränkungen Medien aus anderen Quellen beziehen können).
3. Wenn der Stream abgerufen wurde, wird er dem {{HTMLElement("video")}}-Element zugewiesen, damit es auf dem Bildschirm sichtbar ist, und wir holen die Audiospur und die Videospur in den Variablen `audioTrack` und `videoTrack`.
4. Dann richten wir ein Promise ein, das sich auflöst, wenn das [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)-Ereignis beim Videoelement eintritt.
5. Wenn das passiert, wissen wir, dass das Video zu spielen begonnen hat, also rufen wir unsere `getCurrentSettings()`-Funktion auf (oben beschrieben), um die tatsächlichen Einstellungen anzuzeigen, die der Browser nach Berücksichtigung unserer Einschränkungen und der Fähigkeiten der Hardware beschlossen hat.
6. Wenn ein Fehler auftritt, loggen wir ihn mit der `handleError()`-Methode, die wir weiter unten in diesem Artikel sehen werden.

Wir müssen auch einen Event-Listener einrichten, um darauf zu achten, dass die Schaltfläche "Start Video" geklickt wird:

```js
document.getElementById("startButton").addEventListener(
  "click",
  () => {
    startVideo();
  },
  false,
);
```

### Anwenden von Einschränkungsset-Updates

Als nächstes richten wir einen Event-Listener für die "Anwendung von Einschränkungen"-Schaltfläche ein. Wenn sie geklickt wird und derzeit keine Medien verwendet werden, rufen wir `startVideo()` auf, und lassen diese Funktion den Stream mit den angegebenen Einstellungen starten. Andernfalls folgen wir diesen Schritten, um die aktualisierten Einschränkungen auf den bereits aktiven Stream anzuwenden:

1. `buildConstraints()` wird aufgerufen, um die aktualisierten [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Audiospur (`audioConstraints`) und die Videospur (`videoConstraints`) zu erstellen.
2. [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) wird auf der Videospur (falls vorhanden) aufgerufen, um die neuen `videoConstraints` anzuwenden. Wenn dies gelingt, werden die Inhalte des aktuellen Einstellungsfeldes der Videospur basierend auf dem Ergebnis des Aufrufs ihrer [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)-Methode aktualisiert.
3. Wird das erledigt, wird `applyConstraints()` auf der Audiospur (falls vorhanden) aufgerufen, um die neuen Audio-Einschränkungen anzuwenden. Wenn dies gelingt, werden die Inhalte des aktuellen Einstellungsfeldes der Audiospur basierend auf dem Ergebnis des Aufrufs ihrer [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)-Methode aktualisiert.
4. Wenn ein Fehler beim Anwenden eines der Einschränkungssets auftritt, wird `handleError()` verwendet, um eine Nachricht in das Log auszugeben.

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

### Behandlung des Stop-Buttons

Dann richten wir den Handler für den Stop-Button ein.

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

Dies stoppt die aktiven Tracks, setzt die `videoTrack`- und `audioTrack`-Variablen auf `null`, damit wir wissen, dass sie weg sind, und entfernt den Stream vom {{HTMLElement("video")}}-Element, indem [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) auf `null` gesetzt wird.

### Einfache Tabulatorunterstützung im Editor

Dieser Code fügt einfache Tabulatorunterstützung für die {{HTMLElement("textarea")}}-Elemente hinzu, indem die Tabulatortaste zwei Leerzeichen einfügt, wenn eines der Einschränkungsset-Felder fokussiert ist.

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

### Anzeige beschränkbarer Eigenschaften, die der Browser unterstützt

Das letzte wichtige Teil des Puzzles: Code, der für die Bequemlichkeit des Benutzers eine Liste der beschränkbaren Eigenschaften anzeigt, die ihr Browser unterstützt. Jede Eigenschaft ist ein Link zur Dokumentation auf MDN, um dem Benutzer zu helfen. Siehe die [`MediaDevices.getSupportedConstraints()` Beispiele](/de/docs/Web/API/MediaDevices/getSupportedConstraints#examples) für Details zur Funktionsweise dieses Codes.

> [!NOTE]
> Natürlich können in dieser Liste nicht-standardisierte Eigenschaften enthalten sein, in diesem Fall finden Sie wahrscheinlich, dass der Dokumentationslink nicht viel hilft.

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

Wir haben auch etwas einfachen Fehlerbehandlungscode; `handleError()` wird aufgerufen, um gescheiterte Promises zu behandeln, und die `log()`-Funktion fügt die Fehlermeldung einer speziellen Log-{{HTMLElement("div")}}-Box unter dem Video hinzu.

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
