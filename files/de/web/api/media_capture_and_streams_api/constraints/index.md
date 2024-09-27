---
title: Fähigkeiten, Einschränkungen und Einstellungen
slug: Web/API/Media_Capture_and_Streams_API/Constraints
l10n:
  sourceCommit: b07efa13f8459a44a2cbc7b6cdb3279967565e63
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel behandelt die beiden Konzepte der **Einschränkungen** und **Fähigkeiten**, sowie die Medieneinstellungen und beinhaltet ein Beispiel, das wir den [Constraint Exerciser](#example_constraint_exerciser) nennen. Der Constraint Exerciser ermöglicht es Ihnen, mit verschiedenen Einschränkungssätzen zu experimentieren, die auf die Audio- und Videospuren der A/V-Eingabegeräte des Computers (wie Webcam und Mikrofon) angewendet werden.

Historisch gesehen gab es beim Schreiben von Skripten für das Web, die eng mit Web-APIs arbeiten, eine bekannte Herausforderung: Oft muss Ihr Code wissen, ob eine API existiert und wenn ja, welche Einschränkungen sie auf dem [User-Agent](/de/docs/Glossary/user_agent) hat, auf dem sie läuft. Das Herausfinden war oft schwierig und beinhaltete gewöhnlich eine Kombination aus dem Überprüfen, auf welchem [User-Agent](/de/docs/Glossary/user_agent) (oder Browser) Sie laufen, welcher Version es ist, dem Überprüfen, ob bestimmte Objekte existieren, dem Versuch herauszufinden, ob verschiedene Dinge funktionieren oder nicht, und dem Feststellen, welche Fehler auftreten, und so weiter. Das Ergebnis war viel sehr fragiler Code oder eine Abhängigkeit von Bibliotheken, die dies für Sie herausfinden und dann [Polyfills](/de/docs/Glossary/polyfill) implementieren, um die Implementierung in Ihrem Namen zu flicken.

Fähigkeiten und Einschränkungen ermöglichen es dem Browser und der Website oder App, Informationen darüber auszutauschen, welche **beschränkbaren Eigenschaften** die Browser-Implementierung unterstützt und welche Werte sie jeweils unterstützt.

## Übersicht

Der Prozess funktioniert folgendermaßen (unter Nutzung von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) als Beispiel):

1. Falls erforderlich, rufen Sie [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) auf, um die Liste der **unterstützten Einschränkungen** zu erhalten, welche Ihnen mitteilt, welche beschränkbaren Eigenschaften der Browser kennt. Das ist nicht immer notwendig, da alle unbekannten ignoriert werden, wenn Sie sie angeben – aber wenn Sie welche haben, auf die Sie nicht verzichten können, können Sie damit beginnen, zu prüfen, ob sie auf der Liste sind.
2. Sobald das Skript weiß, ob die gewünschte Eigenschaft oder die Eigenschaften unterstützt werden, kann es dann die **Fähigkeiten** der API und ihrer Implementierung prüfen, indem es das Objekt betrachtet, das von der `getCapabilities()`-Methode des Tracks zurückgegeben wird; dieses Objekt listet jede unterstützte Einschränkung und die Werte oder Wertebereiche auf, die unterstützt werden.
3. Schließlich wird die `applyConstraints()`-Methode des Tracks aufgerufen, um die API wie gewünscht zu konfigurieren, indem die Werte oder Wertebereiche angegeben werden, die es verwenden möchte, für alle beschränkbaren Eigenschaften, die Präferenzen haben.
4. Die `getConstraints()`-Methode des Tracks gibt die Menge der Einschränkungen zurück, die in den letzten Aufruf von `applyConstraints()` übergeben wurden. Diese repräsentiert möglicherweise nicht den tatsächlichen aktuellen Zustand des Tracks, aufgrund von Eigenschaften, deren angeforderte Werte angepasst werden mussten, und weil Plattform-Standardwerte nicht dargestellt werden. Für eine vollständige Darstellung der aktuellen Konfiguration des Tracks verwenden Sie `getSettings()`.

In der Media Capture and Streams API haben sowohl [`MediaStream`](/de/docs/Web/API/MediaStream) als auch [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) beschränkbare Eigenschaften.

## Bestimmen, ob eine Einschränkung unterstützt wird

Wenn Sie wissen müssen, ob eine bestimmte Einschränkung vom User-Agent unterstützt wird, können Sie dies herausfinden, indem Sie [`navigator.mediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) aufrufen, um eine Liste der beschränkbaren Eigenschaften zu erhalten, die der Browser kennt, wie hier gezeigt:

```js
const supported = navigator.mediaDevices.getSupportedConstraints();

document.getElementById("frameRateSlider").disabled = !supported["frameRate"];
```

In diesem Beispiel werden die unterstützten Einschränkungen abgerufen, und ein Steuerelement, das dem Benutzer erlaubt, die Bildrate zu konfigurieren, wird deaktiviert, wenn die `frameRate`-Einschränkung nicht unterstützt wird.

## Wie Einschränkungen definiert sind

Eine einzelne Einschränkung ist ein Objekt, dessen Name mit der beschränkbaren Eigenschaft übereinstimmt, deren gewünschter Wert oder Wertebereich angegeben wird. Dieses Objekt enthält null oder mehr individuelle Einschränkungen, sowie ein optionales Unterobjekt namens `advanced`, welches eine andere Menge von null oder mehr Einschränkungen enthält, die der User-Agent, wenn irgend möglich, erfüllen muss. Der User-Agent versucht, die Einschränkungen in der Reihenfolge zu erfüllen, in der sie im Einschränkungssatz angegeben sind.

Das Wichtigste zu verstehen ist, dass die meisten Einschränkungen keine Anforderungen sind; stattdessen sind sie Wünsche. Es gibt Ausnahmen, und auf die werden wir gleich eingehen.

### Anfordern eines spezifischen Werts für eine Einstellung

Die meisten, jede Einschränkung kann ein spezifischer Wert sein, der einen gewünschten Wert für die Einstellung angibt. Zum Beispiel:

```js
const constraints = {
  width: 1920,
  height: 1080,
  aspectRatio: 1.777777778,
};

myTrack.applyConstraints(constraints);
```

In diesem Fall geben die Einschränkungen an, dass jegliche Werte für nahezu alle Eigenschaften in Ordnung sind, aber dass eine standardmäßige High Definition (HD) Video-Größe gewünscht wird, mit dem standardmäßigen 16:9 [Seitenverhältnis](/de/docs/Glossary/aspect_ratio). Es gibt keine Garantie, dass die resultierende Spur eine dieser Größen haben wird, aber der User-Agent sollte sein Bestes tun, um so viele wie möglich zu erfüllen.

Die Priorisierung der Eigenschaften ist einfach: Wenn zwei Eigenschaften angeforderte Werte haben, die sich gegenseitig ausschließen, dann wird die zuerst im Einschränkungssatz aufgeführte verwendet. Als Beispiel: Wenn der laufende Browser keine 1920x1080-Spur bereitstellen kann, aber 1920x900, dann wäre das, was bereitgestellt würde.

Einfache Einschränkungen wie diese, die einen einzelnen Wert angeben, werden immer als nicht erforderlich behandelt. Der User-Agent wird versuchen, das, was Sie anfordern, bereitzustellen, garantiert aber nicht, dass das, was Sie bekommen, übereinstimmt. Wenn Sie jedoch einfache Werte für Eigenschaften verwenden, wenn Sie [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufrufen, wird die Anforderung immer erfolgreich sein, weil diese Werte als Wunsch und nicht als Anforderung behandelt werden.

### Ein Wertebereich angeben

Manchmal ist jeder Wert innerhalb eines Bereichs für den Wert einer Eigenschaft akzeptabel. Sie können Bereiche mit entweder oder beiden minimalen und maximalen Werten angeben, und Sie können sogar einen idealen Wert innerhalb des Bereichs angeben, wenn Sie möchten. Wenn Sie einen idealen Wert angeben, wird der Browser versuchen, so nah wie möglich an diesen Wert heranzukommen, unter Berücksichtigung der angegebenen anderen Einschränkungen.

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

Hier, nachdem sichergestellt wurde, dass die beschränkbaren Eigenschaften, für die passende Werte gefunden werden müssen, unterstützt werden (`width`, `height`, `frameRate`, und `facingMode`), richten wir Einschränkungen ein, die eine Breite fordern, die nicht kleiner als 640 und nicht größer als 1920 (aber vorzugsweise 1920) ist, eine Höhe, die nicht kleiner als 400 (aber idealerweise 1080) ist, ein Seitenverhältnis von 16:9 (1.777777778), und eine Bildrate, die nicht größer als 30 Bilder pro Sekunde ist. Darüber hinaus ist das einzig akzeptable Eingabegerät eine Kamera, die auf den Benutzer gerichtet ist (eine "Selfie-Kamera"). Wenn die `width`, `height`, `frameRate`, oder `facingMode`-Einschränkungen nicht erfüllt werden können, wird das Versprechen, das von `applyConstraints()` zurückgegeben wird, abgelehnt.

> [!NOTE]
> Einschränkungen, die mit `max`, `min` oder `exact` angegeben werden, werden immer als Pflicht behandelt. Wenn eine Einschränkung, die eine oder mehrere dieser Optionen verwendet, nicht erfüllt werden kann, wenn `applyConstraints()` aufgerufen wird, wird das Versprechen abgelehnt.

### Erweiterte Einschränkungen

Die sogenannten erweiterten Einschränkungen werden erstellt, indem eine `advanced`-Eigenschaft zum Einschränkungssatz hinzugefügt wird; der Wert dieser Eigenschaft ist ein Array zusätzlicher Einschränkungssätze, die als optional betrachtet werden. Es gibt wenige bis keine Anwendungsfälle für dieses Feature, und es gibt ein gewisses Interesse daran, es aus der Spezifikation zu entfernen, daher wird es hier nicht behandelt. Wenn Sie mehr erfahren möchten, lesen Sie [Abschnitt 11 der Medienaufnahme und -streams-Spezifikation](https://www.w3.org/TR/mediacapture-streams/#idl-def-Constraints), nach Beispiel 2.

## Überprüfung der Fähigkeiten

Sie können [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) aufrufen, um eine Liste aller unterstützten Fähigkeiten und der Werte oder Wertebereiche zu erhalten, die jede auf der aktuellen Plattform und dem verwendeten User-Agent akzeptiert. Diese Funktion gibt ein Objekt zurück, das jede vom Browser unterstützte beschränkbare Eigenschaft und einen Wert oder Wertebereich auflistet, die für jede dieser Eigenschaften unterstützt werden.

> **Note:** `getCapabilities()` wurde noch nicht von allen großen Browsern implementiert. Bis auf weiteres müssen Sie versuchen, das zu bekommen, was Sie brauchen, und wenn Sie es nicht bekommen, entscheiden, was Sie in diesem Fall tun. Sehen Sie sich zum Beispiel den Firefox [Firefox Bug 1179084](https://bugzil.la/1179084) an.

## Anwenden von Einschränkungen

Der erste und häufigste Weg, Einschränkungen zu verwenden, besteht darin, sie anzugeben, wenn Sie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufrufen:

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

In diesem Beispiel werden Einschränkungen zur `getUserMedia()`-Zeit angewendet, wobei für das Video ein idealer Satz von Optionen mit Alternativen abgefragt wird.

> [!NOTE]
> Sie können eine oder mehrere IDs von Medien-Eingabegeräten angeben, um Einschränkungen festzulegen, welche Eingabequellen zulässig sind. Um eine Liste der verfügbaren Geräte zu sammeln, können Sie [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen und für jedes Gerät, das die gewünschten Kriterien erfüllt, dessen `deviceId` zum `MediaConstraints`-Objekt hinzufügen, das schließlich an `getUserMedia()` übergeben wird.

Sie können auch die Einschränkungen eines existierenden [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) "on the fly" ändern, indem Sie die `applyConstraints()`-Methode des Tracks aufrufen und ein Objekt übergeben, das die Einschränkungen darstellt, die Sie anwenden möchten:

```js
videoTrack.applyConstraints({
  width: 1920,
  height: 1080,
});
```

In diesem Code-Schnipsel wird die Videospur, auf die `videoTrack` verweist, so aktualisiert, dass ihre Auflösung möglichst genau 1920x1080 Pixel (1080p High Definition) entspricht.

## Abrufen aktueller Einschränkungen und Einstellungen

Es ist wichtig, den Unterschied zwischen **Einschränkungen** und **Einstellungen** zu beachten. Einschränkungen sind eine Möglichkeit, anzugeben, welche Werte Sie für die verschiedenen beschränkbaren Eigenschaften benötigen, wünschen und bereit sind zu akzeptieren (wie in der Dokumentation für [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) beschrieben), während Einstellungen die tatsächlichen Werte jeder beschränkbaren Eigenschaft zum aktuellen Zeitpunkt sind.

### Abrufen der wirksamen Einschränkungen

Wenn Sie zu irgendeinem Zeitpunkt die Menge der derzeit auf das Medium angewendeten Einschränkungen abrufen müssen, können Sie diese Informationen durch einen Aufruf von [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) erhalten, wie im folgenden Beispiel gezeigt.

```js
function switchCameras(track, camera) {
  const constraints = track.getConstraints();
  constraints.facingMode = camera;
  track.applyConstraints(constraints);
}
```

Diese Funktion akzeptiert einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) und einen String, der den zu verwendenden Kameraausrichtungsmodus angibt, ruft die aktuellen Einschränkungen ab, setzt den Wert von [`MediaTrackConstraints.facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) auf den angegebenen Wert und wendet den aktualisierten Einschränkungssatz an.

### Abrufen der aktuellen Einstellungen für eine Spur

Es sei denn, Sie verwenden nur exakt Einschränkungen (was ziemlich einschränkend ist, also stellen Sie sicher, dass Sie es wirklich so meinen!), gibt es keine Garantie, was Sie tatsächlich erhalten werden, nachdem die Einschränkungen angewendet wurden. Die Werte der beschränkbaren Eigenschaften, wie sie tatsächlich im resultierenden Medium sind, werden als die Einstellungen bezeichnet. Wenn Sie das tatsächliche Format und andere Eigenschaften des Mediums wissen müssen, können Sie diese Einstellungen durch einen Aufruf von [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) erhalten. Dies gibt ein Objekt basierend auf dem Wörterbuch [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) zurück. Zum Beispiel:

```js
function whichCamera(track) {
  return track.getSettings().facingMode;
}
```

Diese Funktion verwendet `getSettings()` um die aktuell verwendeten Werte der beschränkbaren Eigenschaften des Tracks zu erhalten und gibt den Wert von [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode) zurück.

## Beispiel: Constraint Exerciser

In diesem Beispiel erstellen wir einen Exerciser, der es Ihnen ermöglicht, mit Medieneinschränkungen zu experimentieren, indem Sie den Quellcode für die Einschränkungssätze für Audio- und Videospuren bearbeiten. Sie können dann diese Änderungen anwenden und das Ergebnis sehen, einschließlich sowohl des Aussehens des Streams als auch der tatsächlichen Medien-Einstellungen, die nach Anwendung der neuen Einschränkungen gesetzt wurden.

Die HTML- und CSS-Dateien für dieses Beispiel sind ziemlich einfach und werden hier nicht gezeigt. Sie können das vollständige Beispiel sehen, indem Sie {{LiveSampleLink("Example_Constraint_exerciser", "hier klicken")}}.

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
  <div class="trackrow">
    <div class="leftside">
      <h3>Requested video constraints:</h3>
      <textarea id="videoConstraintEditor" cols="32" rows="8"></textarea>
    </div>
    <div class="rightside">
      <h3>Actual video settings:</h3>
      <textarea id="videoSettingsText" cols="32" rows="8" disabled></textarea>
    </div>
  </div>
  <div class="trackrow">
    <div class="leftside">
      <h3>Requested audio constraints:</h3>
      <textarea id="audioConstraintEditor" cols="32" rows="8"></textarea>
    </div>
    <div class="rightside">
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

.trackrow {
  height: 200px;
}

.leftside {
  float: left;
  width: calc(calc(100% / 2) - 10px);
}

.rightside {
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

Zuerst haben wir die Standard-Einschränkungssätze, als Strings. Diese Strings werden in bearbeitbaren {{HTMLElement("textarea")}}s dargestellt, aber dies ist die Anfangskonfiguration des Streams.

```js
const videoDefaultConstraintString =
  '{\n  "width": 320,\n  "height": 240,\n  "frameRate": 30\n}';
const audioDefaultConstraintString =
  '{\n  "sampleSize": 16,\n  "channelCount": 2,\n  "echoCancellation": false\n}';
```

Diese Standardeinstellungen fragen nach einer ziemlich üblichen Kamerakonfiguration, bestehen jedoch nicht auf die besondere Wichtigkeit einer Eigenschaft. Der Browser sollte sein Bestes tun, um diese Einstellungen zu erfüllen, aber akzeptiert auch alles, was er als nah gültig ansieht.

Dann initialisieren wir die Variablen, die die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Video- und Audiospuren sowie die Variablen, die Referenzen auf die Video-und Audiospuren selbst halten, auf `null`.

```js
let videoConstraints = null;
let audioConstraints = null;

let audioTrack = null;
let videoTrack = null;
```

Und wir erhalten Referenzen zu allen Elementen, die wir benötiegen.

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
  - : Ein {{HTMLElement("div")}}, in das alle Fehlermeldungen oder andere Log-Nachrichten geschrieben werden.
- `supportedConstraintList`
  - : Eine {{HTMLElement("ul")}} (unordered list), in die wir programmatisch die Namen der beschränkbaren Eigenschaften hinzufügen, die vom Browser des Benutzers unterstützt werden.
- `videoConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}-Element, das dem Benutzer das Bearbeiten des Codes für den Einspruchsatz der Videospur ermöglicht.
- `audioConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}-Element, das dem Benutzer das Bearbeiten des Codes für den Einspruchsatz der Audiospur ermöglicht.
- `videoSettingsText`
  - : Ein {{HTMLElement("textarea")}} (das immer deaktiviert ist), das die aktuellen Einstellungen für die beschränkbaren Eigenschaften der Videospur anzeigt.
- `audioSettingsText`
  - : Ein {{HTMLElement("textarea")}} (das immer deaktiviert ist), das die aktuellen Einstellungen für die beschränkbaren Eigenschaften der Audiospur anzeigt.

Schließlich setzen wir den aktuellen Inhalt der beiden Bearbeitungselemente für die Einschränkungssätze auf die Standardeinstellungen.

```js
videoConstraintEditor.value = videoDefaultConstraintString;
audioConstraintEditor.value = audioDefaultConstraintString;
```

### Aktualisieren der Einstellungsanzeige

Rechts von jedem der Bearbeitungselemente für die Einschränkungssätze befindet sich ein zweites Textfeld, das wir verwenden, um die aktuelle Konfiguration der konfigurierbaren Eigenschaften des Tracks anzuzeigen. Diese Anzeige wird durch die Funktion `getCurrentSettings()` aktualisiert, die die aktuellen Einstellungen für die Audio- und Videospuren abruft und den entsprechenden Code in die Einstellungselemente der Tracks einfügt, indem sie deren [`value`](/de/docs/Web/API/HTMLTextAreaElement/value) setzt.

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

Dies wird aufgerufen, nachdem der Stream zuerst gestartet wurde, sowie jedes Mal, wenn wir aktualisierte Einschränkungen angewendet haben, wie Sie unten sehen werden.

### Erstellen der Objekte für den Einspruchsatz

Die Funktion `buildConstraints()` erstellt die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Audio- und Videospuren unter Verwendung des Codes in den beiden Editor-Elementen der Spuren.

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

Dies verwendet {{jsxref("JSON.parse()")}}, um den Code in jedem Editor in ein Objekt zu analysieren. Wenn einer der Aufrufe von JSON.parse() eine Ausnahme wirft, wird `handleError()` aufgerufen, um die Fehlermeldung im Log auszugeben.

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

1. Es ruft `buildConstraints()` auf, um die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die beiden Spuren aus dem Code in den Editor-Elementen zu erstellen.
2. Es ruft die [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)-Methode auf, indem es die Constraints-Objekte für die Video- und Audiospuren übergibt. Dies gibt einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit dem Audio und Video von einer Quelle zurück, die den Eingaben entspricht (normalerweise eine Webcam, obwohl, wenn Sie die richtigen Einschränkungen angeben, können Sie Medien von anderen Quellen erhalten).
3. Wenn der Stream abgerufen wird, wird er dem {{HTMLElement("video")}}-Element zugewiesen, damit er auf dem Bildschirm sichtbar ist, und wir greifen die Audiospur und die Videospur in den Variablen `audioTrack` und `videoTrack`.
4. Dann richten wir ein Versprechen ein, das erfüllt wird, wenn das [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)-Ereignis am Videoelement auftritt.
5. Wenn das passiert, wissen wir, dass das Video begonnen hat zu spielen, und rufen deshalb unsere Funktion `getCurrentSettings()` auf (wie oben beschrieben), um die tatsächlichen Einstellungen anzuzeigen, die der Browser nach Berücksichtigung unserer Einschränkungen und der Fähigkeiten der Hardware entschieden hat.
6. Wenn ein Fehler auftritt, loggen wir diesen mit der Methode `handleError()`, die wir weiter unten in diesem Artikel betrachten werden.

Wir müssen auch einen Event-Listener einrichten, der auf das Klicken der "Start Video"-Schaltfläche achtet:

```js
document.getElementById("startButton").addEventListener(
  "click",
  () => {
    startVideo();
  },
  false,
);
```

### Anwenden von Updates des Constraint-Sets

Als nächstes richten wir einen Event-Listener für die Schaltfläche "Einschränkungen anwenden" ein. Wenn diese angeklickt wird und keine Medien in Betrieb sind, rufen wir `startVideo()` auf, und lassen diese Funktion den Stream mit den angegebenen Einstellungen in Betrieb nehmen. Andernfalls befolgen wir diese Schritte, um die aktualisierten Einschränkungen auf den bereits aktiven Stream anzuwenden:

1. `buildConstraints()` wird aufgerufen, um aktualisierte [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Audiospur (`audioConstraints`) und die Videospur (`videoConstraints`) zu konstruieren.
2. Die [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)-Methode wird auf die Videospur (falls vorhanden) aufgerufen, um die neuen `videoConstraints` anzuwenden. Wenn dies erfolgreich ist, wird der Inhalt der aktuellen Einstellungen-Box der Videospur basierend auf dem Ergebnis des Aufrufs ihrer [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)-Methode aktualisiert.
3. Sobald das erledigt ist, wird `applyConstraints()` auf die Audiospur (falls vorhanden) aufgerufen, um die neuen Audioeinschränkungen anzuwenden. Wenn dies erfolgreich ist, wird der Inhalt der aktuellen Einstellungen-Box der Audiospur basierend auf dem Ergebnis des Aufrufs ihrer [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)-Methode aktualisiert.
4. Wenn ein Fehler beim Anwenden eines der Einschränkungssätze auftritt, wird `handleError()` verwendet, um eine Nachricht in das Log auszugeben.

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

### Umgang mit der Stopp-Schaltfläche

Dann richten wir den Handler für die Stop-Schaltfläche ein.

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

Dieser stoppt die aktiven Spuren, setzt die Variablen `videoTrack` und `audioTrack` auf `null`, damit wir wissen, dass sie entfernt wurden, und entfernt den Stream vom {{HTMLElement("video")}}-Element, indem [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) auf `null` gesetzt wird.

### Unterstützung für einfache Tabs im Editor

Dieser Code fügt den {{HTMLElement("textarea")}}-Elementen eine einfache Unterstützung für Tabs hinzu, indem er die Tabulatortaste dazu verwendet, zwei Leerzeichen einzufügen, wenn eines der Bearbeitungselemente im Fokus ist.

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

### Anzeigen der vom Browser unterstützten beschränkbaren Eigenschaften

Das letzte bedeutende Puzzlestück: Code, der für den Benutzer zur Referenz eine Liste der beschränkbaren Eigenschaften anzeigt, die von ihrem Browser unterstützt werden. Jede Eigenschaft ist ein Link zu ihrer Dokumentation auf MDN zum Nutzen des Benutzers. Lesen Sie die [`MediaDevices.getSupportedConstraints()`-Beispiele](/de/docs/Web/API/MediaDevices/getSupportedConstraints#examples) für Details, wie dieser Code funktioniert.

> [!NOTE]
> Natürlich können in dieser Liste nicht-standardmäßige Eigenschaften enthalten sein, in diesem Fall werden Sie wahrscheinlich feststellen, dass der Dokumentationslink nicht viel hilft.

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

Wir haben auch einige einfache Fehlerbehandlungscodes; `handleError()` wird aufgerufen, um Versprechen zu behandeln, die fehlschlagen, und die `log()`-Funktion fügt die Fehlermeldung in eine spezielle Protokoll-{{HTMLElement("div")}}-Box unter dem Video hinzu.

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
