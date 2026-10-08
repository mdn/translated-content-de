---
title: Fähigkeiten, Einschränkungen und Einstellungen
slug: Web/API/Media_Capture_and_Streams_API/Constraints
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel behandelt die beiden Konzepte **Einschränkungen** und **Fähigkeiten** sowie Medieneinstellungen. Er enthält außerdem ein Beispiel, den [Constraint Exerciser](#example_constraint_exerciser). Mit dem Constraint Exerciser können Sie ausprobieren, wie sich unterschiedliche Einschränkungssätze auf die Audio- und Videospuren auswirken, die von den A/V-Eingabegeräten des Computers stammen, etwa von seiner Webcam und seinem Mikrofon.

Historisch gesehen war das Schreiben von Skripten für das Web, die eng mit Web-APIs zusammenarbeiten, mit einer bekannten Herausforderung verbunden: Ihr Code muss häufig wissen, ob eine API vorhanden ist und, falls ja, welche Einschränkungen sie auf dem {{Glossary("user_agent", "User Agent")}} hat, auf dem der Code ausgeführt wird. Das herauszufinden war oft schwierig. Üblicherweise musste man dazu eine Kombination verschiedener Dinge prüfen: welcher {{Glossary("user_agent", "User Agent")}} (oder Browser) verwendet wird, welche Version er hat, ob bestimmte Objekte existieren, ob verschiedene Funktionen wie erwartet arbeiten und welche Fehler auftreten. Das Ergebnis war viel anfälliger Code oder die Abhängigkeit von Bibliotheken, die diese Fragen für Sie klären und anschließend {{Glossary("polyfill", "Polyfills")}} bereitstellen, um Lücken in der Implementierung zu schließen.

Fähigkeiten und Einschränkungen ermöglichen es dem Browser und der Website oder App, Informationen darüber auszutauschen, welche **einschränkbaren Eigenschaften** die Implementierung des Browsers unterstützt und welche Werte sie jeweils annehmen können.

## Überblick

Der Ablauf sieht folgendermaßen aus (am Beispiel von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)):

1. Rufen Sie bei Bedarf [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) auf, um die Liste der **unterstützten Einschränkungen** zu erhalten. Sie zeigt, welche einschränkbaren Eigenschaften der Browser kennt. Das ist nicht immer erforderlich, da unbekannte Eigenschaften ignoriert werden, wenn Sie sie angeben. Wenn Sie auf bestimmte Eigenschaften jedoch angewiesen sind, können Sie zunächst prüfen, ob sie in der Liste stehen.
2. Sobald das Skript weiß, ob die gewünschten Eigenschaften unterstützt werden, kann es die **Fähigkeiten** der API und ihrer Implementierung prüfen. Dazu untersucht es das Objekt, das die `getCapabilities()`-Methode der Spur zurückgibt. Dieses Objekt führt jede unterstützte Einschränkung sowie die unterstützten Werte oder Wertebereiche auf.
3. Anschließend wird die `applyConstraints()`-Methode der Spur aufgerufen, um die API wie gewünscht zu konfigurieren. Dabei werden die gewünschten Werte oder Wertebereiche für die einschränkbaren Eigenschaften angegeben.
4. Die `getConstraints()`-Methode der Spur gibt den Einschränkungssatz zurück, der beim letzten Aufruf von `applyConstraints()` übergeben wurde. Er muss nicht den tatsächlichen aktuellen Zustand der Spur wiedergeben: Angeforderte Werte können angepasst worden sein, und Standardwerte der Plattform sind darin nicht enthalten. Eine vollständige Darstellung der aktuellen Konfiguration der Spur erhalten Sie mit `getSettings()`.

In der Media Capture and Streams API besitzen sowohl [`MediaStream`](/de/docs/Web/API/MediaStream) als auch [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) einschränkbare Eigenschaften.

## Prüfen, ob eine Einschränkung unterstützt wird

Wenn Sie wissen müssen, ob der User Agent eine bestimmte Einschränkung unterstützt, können Sie [`navigator.mediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) aufrufen. So erhalten Sie eine Liste der einschränkbaren Eigenschaften, die der Browser kennt:

```js
const supported = navigator.mediaDevices.getSupportedConstraints();

document.getElementById("frameRateSlider").disabled = !supported["frameRate"];
```

In diesem Beispiel werden die unterstützten Einschränkungen abgerufen. Eine Steuereinheit, mit der Benutzer die Bildrate konfigurieren können, wird deaktiviert, falls die Einschränkung `frameRate` nicht unterstützt wird.

## Definition von Einschränkungen

Eine einzelne Einschränkung ist ein Objekt, dessen Name der einschränkbaren Eigenschaft entspricht, für die ein gewünschter Wert oder Wertebereich angegeben wird. Dieses Objekt enthält null oder mehr einzelne Einschränkungen sowie gegebenenfalls ein Unterobjekt namens `advanced`. Dieses enthält einen weiteren Satz von null oder mehr Einschränkungen, die der User Agent nach Möglichkeit erfüllen muss. Der User Agent versucht, die Einschränkungen in der Reihenfolge zu erfüllen, in der sie im Einschränkungssatz angegeben sind.

Am wichtigsten ist zu verstehen, dass die meisten Einschränkungen keine Anforderungen, sondern Wünsche sind. Es gibt Ausnahmen, auf die wir gleich eingehen.

### Einen bestimmten Wert für eine Einstellung anfordern

In den meisten Fällen kann für jede Einschränkung ein bestimmter Wert angegeben werden, der den gewünschten Wert der Einstellung bezeichnet. Zum Beispiel:

```js
const constraints = {
  width: 1920,
  height: 1080,
  aspectRatio: 1.777777778,
};

myTrack.applyConstraints(constraints);
```

In diesem Fall geben die Einschränkungen an, dass für fast alle Eigenschaften beliebige Werte zulässig sind, aber eine standardmäßige High-Definition-Videogröße (HD) mit dem üblichen {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 16:9 gewünscht wird. Es gibt keine Garantie, dass die resultierende Spur diese Werte aufweist, aber der User Agent sollte versuchen, möglichst viele davon zu erfüllen.

Die Priorisierung der Eigenschaften ist einfach: Wenn sich die angeforderten Werte zweier Eigenschaften gegenseitig ausschließen, wird die Eigenschaft verwendet, die im Einschränkungssatz zuerst aufgeführt ist. Wenn der Browser im obigen Beispiel etwa keine Spur mit 1920 × 1080, aber eine mit 1920 × 900 bereitstellen könnte, würde er Letztere bereitstellen.

Einfache Einschränkungen wie diese, die einen einzelnen Wert angeben, gelten nie als zwingend erforderlich. Der User Agent versucht, den angeforderten Wert bereitzustellen, garantiert aber keine Übereinstimmung. Wenn Sie beim Aufruf von [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) einfache Werte für Eigenschaften verwenden, wird die Anfrage daher immer erfolgreich sein: Diese Werte gelten als Wünsche, nicht als Anforderungen.

### Einen Wertebereich angeben

Manchmal ist für eine Eigenschaft jeder Wert innerhalb eines bestimmten Bereichs akzeptabel. Sie können Bereiche mit einem Mindestwert, einem Höchstwert oder beidem angeben und bei Bedarf auch einen idealen Wert innerhalb des Bereichs festlegen. Wenn Sie einen idealen Wert angeben, versucht der Browser, diesem unter Berücksichtigung der anderen angegebenen Einschränkungen so nahe wie möglich zu kommen.

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

Hier stellen wir zunächst sicher, dass die einschränkbaren Eigenschaften unterstützt werden, für die passende Werte gefunden werden müssen (`width`, `height`, `frameRate` und `facingMode`). Anschließend legen wir Einschränkungen fest, die eine Breite von mindestens 640 und höchstens 1920 (vorzugsweise 1920), eine Höhe von mindestens 400 (idealerweise 1080), ein Seitenverhältnis von 16:9 (1,777777778) und eine Bildrate von höchstens 30 Bildern pro Sekunde anfordern. Außerdem ist als Eingabegerät nur eine zum Benutzer gerichtete Kamera („Selfie-Kamera“) zulässig. Wenn die Einschränkungen für `width`, `height`, `frameRate` oder `facingMode` nicht erfüllt werden können, wird das von `applyConstraints()` zurückgegebene Promise zurückgewiesen.

> [!NOTE]
> Einschränkungen, die mit `max`, `min` oder `exact` angegeben werden, gelten immer als zwingend erforderlich. Kann eine solche Einschränkung beim Aufruf von `applyConstraints()` nicht erfüllt werden, wird das Promise zurückgewiesen.

### Erweiterte Einschränkungen

Sogenannte erweiterte Einschränkungen werden erstellt, indem dem Einschränkungssatz eine Eigenschaft `advanced` hinzugefügt wird. Ihr Wert ist ein Array zusätzlicher Einschränkungssätze, die als optional gelten. Für diese Funktion gibt es nur wenige, wenn überhaupt, Anwendungsfälle. Da zudem erwogen wird, sie aus der Spezifikation zu entfernen, wird sie hier nicht weiter behandelt. Wenn Sie mehr erfahren möchten, lesen Sie [Abschnitt 11 der Media Capture and Streams-Spezifikation](https://w3c.github.io/mediacapture-main/#constrainable-interface) nach Beispiel 2.

## Fähigkeiten prüfen

Mit [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) können Sie eine Liste aller unterstützten Fähigkeiten sowie der Werte oder Wertebereiche abrufen, die diese auf der aktuellen Plattform und im aktuellen User Agent annehmen können. Die Funktion gibt ein Objekt zurück, das jede vom Browser unterstützte einschränkbare Eigenschaft und deren unterstützte Werte oder Wertebereiche aufführt.

Das folgende Codefragment bewirkt beispielsweise, dass Benutzer um Erlaubnis für den Zugriff auf ihre lokale Kamera und ihr Mikrofon gebeten werden. Nach Erteilung der Erlaubnis werden `MediaTrackCapabilities`-Objekte in der Konsole ausgegeben, die die Fähigkeiten der einzelnen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Spuren beschreiben:

```js
navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    const tracks = stream.getTracks();
    tracks.map((t) => console.log(t.getCapabilities()));
  });
```

Ein Beispiel für ein solches Fähigkeiten-Objekt sieht so aus:

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

## Einschränkungen anwenden

Die erste und gebräuchlichste Möglichkeit, Einschränkungen zu verwenden, besteht darin, sie beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) anzugeben:

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

In diesem Beispiel werden die Einschränkungen beim Aufruf von `getUserMedia()` angewendet. Dabei wird ein idealer Optionssatz mit Ausweichmöglichkeiten für das Video angefordert.

> [!NOTE]
> Sie können eine oder mehrere IDs von Medieneingabegeräten angeben, um festzulegen, welche Eingabequellen zulässig sind. Um eine Liste der verfügbaren Geräte zu erhalten, können Sie [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen. Fügen Sie dann die `deviceId` jedes Geräts, das die gewünschten Kriterien erfüllt, dem `MediaConstraints`-Objekt hinzu, das schließlich an `getUserMedia()` übergeben wird.

Sie können die Einschränkungen einer vorhandenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Spur auch während des Betriebs ändern. Rufen Sie dazu die [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)-Methode der Spur auf und übergeben Sie ihr ein Objekt mit den Einschränkungen, die Sie anwenden möchten:

```js
videoTrack.applyConstraints({
  width: 1920,
  height: 1080,
});
```

In diesem Codefragment wird die von `videoTrack` referenzierte Videospur so aktualisiert, dass ihre Auflösung möglichst genau 1920 × 1080 Pixeln entspricht (1080p High Definition).

## Aktuelle Einschränkungen und Einstellungen abrufen

Es ist wichtig, zwischen **Einschränkungen** und **Einstellungen** zu unterscheiden. Mit Einschränkungen geben Sie an, welche Werte Sie für die verschiedenen einschränkbaren Eigenschaften benötigen, wünschen oder akzeptieren können (wie in der Dokumentation zu [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) beschrieben). Einstellungen dagegen sind die tatsächlichen aktuellen Werte dieser Eigenschaften.

### Wirksame Einschränkungen abrufen

Wenn Sie den aktuell auf die Medien angewendeten Einschränkungssatz benötigen, können Sie ihn mit [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) abrufen, wie das folgende Beispiel zeigt.

```js
function switchCameras(track, camera) {
  const constraints = track.getConstraints();
  constraints.facingMode = camera;
  track.applyConstraints(constraints);
}
```

Diese Funktion nimmt eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Spur und einen String entgegen, der die gewünschte Ausrichtung der Kamera angibt. Sie ruft die aktuellen Einschränkungen ab, setzt den Wert von [`MediaTrackConstraints.facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) auf den angegebenen Wert und wendet anschließend den aktualisierten Einschränkungssatz an.

### Aktuelle Einstellungen einer Spur abrufen

Sofern Sie nicht ausschließlich exakte Einschränkungen verwenden – was ziemlich restriktiv ist und gut überlegt sein sollte –, lässt sich nicht garantieren, welche Werte Sie nach dem Anwenden der Einschränkungen tatsächlich erhalten. Die tatsächlichen Werte der einschränkbaren Eigenschaften in den resultierenden Medien werden als Einstellungen bezeichnet. Wenn Sie das tatsächliche Format und weitere Eigenschaften der Medien kennen müssen, können Sie diese Einstellungen mit [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) abrufen. Zum Beispiel:

```js
function whichCamera(track) {
  return track.getSettings().facingMode;
}
```

Diese Funktion verwendet `getSettings()`, um die aktuell verwendeten Werte der einschränkbaren Eigenschaften der Spur abzurufen, und gibt den Wert von [`facingMode`](/de/docs/Web/API/MediaStreamTrack/getSettings#facingmode) zurück.

## Beispiel: Constraint Exerciser

In diesem Beispiel erstellen wir ein Werkzeug, mit dem Sie Medieneinschränkungen ausprobieren können, indem Sie den Quellcode bearbeiten, der die Einschränkungssätze für Audio- und Videospuren beschreibt. Anschließend können Sie die Änderungen anwenden und das Ergebnis ansehen: sowohl das Aussehen des Streams als auch die tatsächlichen Medieneinstellungen nach dem Anwenden der neuen Einschränkungen.

Das HTML und CSS für dieses Beispiel sind recht einfach und werden hier nicht gezeigt. Sie können den vollständigen Code ansehen, indem Sie auf „Play“ klicken, um ihn im Playground zu öffnen.

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

### Standardwerte und Variablen

Zunächst definieren wir die standardmäßigen Einschränkungssätze als Strings. Diese Strings werden in bearbeitbaren {{HTMLElement("textarea")}}-Elementen angezeigt und bilden die anfängliche Konfiguration des Streams.

```js
const videoDefaultConstraintString =
  '{\n  "width": 320,\n  "height": 240,\n  "frameRate": 30\n}';
const audioDefaultConstraintString =
  '{\n  "sampleSize": 16,\n  "channelCount": 2,\n  "echoCancellation": false\n}';
```

Diese Standardwerte fordern eine recht übliche Kamerakonfiguration an, ohne eine bestimmte Eigenschaft als besonders wichtig vorauszusetzen. Der Browser sollte versuchen, diesen Einstellungen möglichst genau zu entsprechen, akzeptiert aber auch Werte, die er als hinreichend ähnlich ansieht.

Anschließend initialisieren wir die Variablen für die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte der Video- und Audiospur sowie die Variablen mit den Referenzen auf die Spuren selbst mit `null`.

```js
let videoConstraints = null;
let audioConstraints = null;

let audioTrack = null;
let videoTrack = null;
```

Dann holen wir Referenzen auf alle Elemente, auf die wir zugreifen müssen.

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
  - : Das {{HTMLElement("video")}}-Element, das den Stream anzeigt.
- `logElement`
  - : Ein {{HTMLElement("div")}}, in das Fehlermeldungen und andere Protokollausgaben geschrieben werden.
- `supportedConstraintList`
  - : Ein {{HTMLElement("ul")}} (eine ungeordnete Liste), der wir programmgesteuert die Namen aller einschränkbaren Eigenschaften hinzufügen, die der Browser des Benutzers unterstützt.
- `videoConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}-Element, in dem Benutzer den Code für den Einschränkungssatz der Videospur bearbeiten können.
- `audioConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}-Element, in dem Benutzer den Code für den Einschränkungssatz der Audiospur bearbeiten können.
- `videoSettingsText`
  - : Ein {{HTMLElement("textarea")}}-Element (das immer deaktiviert ist), das die aktuellen Einstellungen der einschränkbaren Eigenschaften der Videospur anzeigt.
- `audioSettingsText`
  - : Ein {{HTMLElement("textarea")}}-Element (das immer deaktiviert ist), das die aktuellen Einstellungen der einschränkbaren Eigenschaften der Audiospur anzeigt.

Abschließend setzen wir den aktuellen Inhalt der beiden Editoren für Einschränkungssätze auf die Standardwerte.

```js
videoConstraintEditor.value = videoDefaultConstraintString;
audioConstraintEditor.value = audioDefaultConstraintString;
```

### Anzeige der Einstellungen aktualisieren

Rechts neben jedem Editor für Einschränkungssätze befindet sich ein zweites Textfeld, in dem wir die aktuelle Konfiguration der konfigurierbaren Eigenschaften der jeweiligen Spur anzeigen. Die Funktion `getCurrentSettings()` aktualisiert diese Anzeige: Sie ruft die aktuellen Einstellungen der Audio- und Videospur ab und fügt den entsprechenden Code in die Anzeigefelder ein, indem sie deren [`value`](/de/docs/Web/API/HTMLTextAreaElement/value) setzt.

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

Diese Funktion wird aufgerufen, nachdem der Stream zum ersten Mal gestartet wurde, und jedes Mal, wenn wir aktualisierte Einschränkungen angewendet haben, wie Sie weiter unten sehen werden.

### Objekte für die Einschränkungssätze der Spuren erstellen

Die Funktion `buildConstraints()` erstellt aus dem Code in den beiden Editoren die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Audio- und Videospur.

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

Dazu verwendet sie {{jsxref("JSON.parse()")}}, um den Code in jedem Editor in ein Objekt umzuwandeln. Wenn einer der Aufrufe von JSON.parse() eine Ausnahme auslöst, wird `handleError()` aufgerufen, um die Fehlermeldung im Protokoll auszugeben.

### Stream konfigurieren und starten

Die Methode `startVideo()` übernimmt die Einrichtung und den Start des Videostreams.

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

Dies geschieht in mehreren Schritten:

1. Sie ruft `buildConstraints()` auf, um aus dem Code in den Editoren die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für beide Spuren zu erstellen.
2. Sie ruft [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf und übergibt die Einschränkungsobjekte für die Video- und Audiospur. Dadurch wird ein [`MediaStream`](/de/docs/Web/API/MediaStream) mit Audio und Video von einer Quelle zurückgegeben, die den Vorgaben entspricht – üblicherweise eine Webcam, wobei Sie mit geeigneten Einschränkungen auch Medien aus anderen Quellen erhalten können.
3. Sobald der Stream verfügbar ist, wird er mit dem {{HTMLElement("video")}}-Element verknüpft, damit er auf dem Bildschirm sichtbar ist. Außerdem speichern wir die Audio- und Videospur in den Variablen `audioTrack` und `videoTrack`.
4. Dann richten wir ein Promise ein, das aufgelöst wird, wenn das Ereignis [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event) auf dem Videoelement eintritt.
5. Wenn das geschieht, wissen wir, dass die Wiedergabe des Videos begonnen hat. Daher rufen wir die oben beschriebene Funktion `getCurrentSettings()` auf, um die tatsächlichen Einstellungen anzuzeigen, die der Browser unter Berücksichtigung unserer Einschränkungen und der Fähigkeiten der Hardware gewählt hat.
6. Falls ein Fehler auftritt, protokollieren wir ihn mit der Methode `handleError()`, die wir weiter unten im Artikel betrachten.

Außerdem müssen wir einen Event Listener einrichten, der auf Klicks auf die Schaltfläche „Start Video“ reagiert:

```js
document.getElementById("startButton").addEventListener("click", () => {
  startVideo();
});
```

### Aktualisierte Einschränkungssätze anwenden

Als Nächstes richten wir einen Event Listener für die Schaltfläche „Apply Constraints“ ein. Wird sie angeklickt und sind noch keine Medien in Verwendung, rufen wir `startVideo()` auf. Diese Funktion startet dann den Stream mit den angegebenen Einstellungen. Andernfalls gehen wir wie folgt vor, um die aktualisierten Einschränkungen auf den bereits aktiven Stream anzuwenden:

1. `buildConstraints()` wird aufgerufen, um aktualisierte [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Audiospur (`audioConstraints`) und die Videospur (`videoConstraints`) zu erstellen.
2. Auf der Videospur wird, sofern vorhanden, [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufgerufen, um die neuen `videoConstraints` anzuwenden. Bei Erfolg wird das Feld mit den aktuellen Einstellungen der Videospur anhand des Ergebnisses ihrer [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)-Methode aktualisiert.
3. Danach wird `applyConstraints()` auf der Audiospur aufgerufen, sofern eine vorhanden ist, um die neuen Audioeinschränkungen anzuwenden. Bei Erfolg wird das Feld mit den aktuellen Einstellungen der Audiospur anhand des Ergebnisses ihrer [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)-Methode aktualisiert.
4. Falls beim Anwenden eines der Einschränkungssätze ein Fehler auftritt, wird mit `handleError()` eine Meldung im Protokoll ausgegeben.

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

### Die Stoppschaltfläche behandeln

Anschließend richten wir den Handler für die Stoppschaltfläche ein.

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

Er stoppt die aktiven Spuren, setzt die Variablen `videoTrack` und `audioTrack` auf `null`, damit wir wissen, dass die Spuren nicht mehr vorhanden sind, und entfernt den Stream aus dem {{HTMLElement("video")}}-Element, indem er [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) auf `null` setzt.

### Einfache Unterstützung der Tabulatortaste im Editor

Dieser Code ergänzt die {{HTMLElement("textarea")}}-Elemente um eine einfache Unterstützung der Tabulatortaste: Wenn eines der Textfelder zum Bearbeiten der Einschränkungen fokussiert ist, fügt ein Druck auf die Tabulatortaste zwei Leerzeichen ein.

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

### Vom Browser unterstützte einschränkbare Eigenschaften anzeigen

Das letzte wichtige Puzzleteil ist Code, der Benutzern als Referenz eine Liste der einschränkbaren Eigenschaften anzeigt, die ihr Browser unterstützt. Jede Eigenschaft ist zur bequemeren Nutzung mit ihrer Dokumentation auf MDN verlinkt. Einzelheiten zur Funktionsweise dieses Codes finden Sie in den [Beispielen zu `MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#examples).

> [!NOTE]
> Natürlich kann diese Liste auch nicht standardisierte Eigenschaften enthalten. In diesem Fall ist der Link zur Dokumentation wahrscheinlich wenig hilfreich.

```js
const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
for (const constraint in supportedConstraints) {
  if (Object.hasOwn(supportedConstraints, constraint)) {
    const elem = document.createElement("li");

    elem.innerHTML = `<code><a href='https://developer.mozilla.org/docs/Web/API/MediaDevices/getSupportedConstraints#${constraint.toLowerCase()}' target='_blank'>${constraint}</a></code>`;
    supportedConstraintList.appendChild(elem);
  }
}
```

### Fehlerbehandlung

Wir haben außerdem einfachen Code zur Fehlerbehandlung: `handleError()` wird aufgerufen, um fehlgeschlagene Promises zu behandeln, und die Funktion `log()` fügt die Fehlermeldung einem speziellen {{HTMLElement("div")}} für Protokolleinträge unter dem Video hinzu.

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

Hier sehen Sie das vollständige Beispiel in Aktion.

{{EmbedLiveSample("Example_Constraint_exerciser", 650, 1200, , , , "camera;microphone")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
