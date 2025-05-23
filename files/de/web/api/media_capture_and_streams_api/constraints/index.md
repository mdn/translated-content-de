---
title: Fähigkeiten, Einschränkungen und Einstellungen
slug: Web/API/Media_Capture_and_Streams_API/Constraints
l10n:
  sourceCommit: 4a0413ef319179b7d0d833c42a156629544c8248
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel behandelt die beiden Konzepte der **Einschränkungen** und **Fähigkeiten** sowie die Medieneinstellungen und enthält ein Beispiel, das wir den [Constraint Exerciser](#example_constraint_exerciser) nennen. Der Constraint Exerciser ermöglicht Ihnen, mit den Ergebnissen verschiedener Einschränkungssets zu experimentieren, die auf die Audio- und Videospuren der A/V-Eingabegeräte des Computers (wie z.B. Webcam und Mikrofon) angewendet werden.

Historisch gesehen hatte das Schreiben von Skripten für das Web, die eng mit Web-APIs arbeiten, eine bekannte Herausforderung: Oft muss Ihr Code wissen, ob eine API existiert und falls ja, welche Einschränkungen auf dem {{Glossary("user_agent", "Benutzeragenten")}} bestehen, auf dem sie ausgeführt wird. Dies herauszufinden war oft schwierig und beinhaltete in der Regel eine Kombination aus der Ermittlung, welcher {{Glossary("user_agent", "Benutzeragent")}} (oder Browser) verwendet wird, welche Version dies ist, ob bestimmte Objekte existieren, ob verschiedene Dinge funktionieren und Fehler auftreten usw. Das Ergebnis war oft sehr anfälliger Code oder eine Abhängigkeit von Bibliotheken, die diese Sachen für Sie herausfinden und dann {{Glossary("polyfill", "Polyfills")}} implementieren, um die Lücken in der Implementierung in Ihrem Namen zu füllen.

Fähigkeiten und Einschränkungen ermöglichen dem Browser und der Website oder App den Austausch von Informationen darüber, welche **einschränkbaren Eigenschaften** die Implementierung des Browsers unterstützt und welche Werte sie für jede unterstützt.

## Überblick

Der Prozess funktioniert folgendermaßen (unter Verwendung von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) als Beispiel):

1. Falls nötig, rufen Sie [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) auf, um die Liste der **unterstützten Einschränkungen** zu erhalten, die Ihnen sagt, welche einschränkbaren Eigenschaften der Browser kennt. Dies ist nicht immer notwendig, da alle, die nicht bekannt sind, bei der Spezifikation ignoriert werden – aber wenn Sie einige haben, ohne die Sie nicht auskommen können, können Sie überprüfen, ob sie auf der Liste stehen.
2. Sobald das Skript weiß, ob die Eigenschaft(en), die es verwenden möchte, unterstützt werden, kann es dann die **Fähigkeiten** der API und deren Implementierung überprüfen, indem es das Objekt untersucht, das durch die `getCapabilities()`-Methode der Spur zurückgegeben wird; dieses Objekt listet jede unterstützte Einschränkung und die Werte oder Wertespannen auf, die unterstützt werden.
3. Schließlich wird die `applyConstraints()`-Methode der Spur aufgerufen, um die API nach Wunsch zu konfigurieren, indem sie die Werte oder Wertespannen angibt, die sie für jede der einschränkbaren Eigenschaften, über die sie eine Präferenz hat, verwenden möchte.
4. Die `getConstraints()`-Methode der Spur gibt die Menge der Einschränkungen zurück, die beim letzten Aufruf von `applyConstraints()` übergeben wurden. Dies kann nicht den tatsächlichen aktuellen Zustand der Spur darstellen, aufgrund von Eigenschaften, deren angeforderte Werte angepasst werden mussten, und weil Plattform-Standardwerte nicht dargestellt werden. Verwenden Sie `getSettings()` für eine vollständige Darstellung der aktuellen Konfiguration der Spur.

In der Media Capture and Streams API haben sowohl [`MediaStream`](/de/docs/Web/API/MediaStream) als auch [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) einschränkbare Eigenschaften.

## Ermittlung, ob eine Einschränkung unterstützt wird

Wenn Sie wissen müssen, ob eine bestimmte Einschränkung vom Benutzeragenten unterstützt wird, können Sie das herausfinden, indem Sie [`navigator.mediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) aufrufen, um eine Liste der einschränkbaren Eigenschaften zu erhalten, die der Browser kennt, wie folgt:

```js
const supported = navigator.mediaDevices.getSupportedConstraints();

document.getElementById("frameRateSlider").disabled = !supported["frameRate"];
```

In diesem Beispiel werden die unterstützten Einschränkungen abgerufen und eine Steuerung, mit der der Benutzer die Bildrate konfigurieren kann, wird deaktiviert, wenn die `frameRate`-Einschränkung nicht unterstützt wird.

## Wie Einschränkungen definiert sind

Eine einzelne Einschränkung ist ein Objekt, dessen Name mit der einschränkbaren Eigenschaft übereinstimmt, deren gewünschter Wert oder Wertebereich angegeben wird. Dieses Objekt enthält null oder mehr individuelle Einschränkungen sowie ein optionales Unterobjekt namens `advanced`, das einen weiteren Satz aus null oder mehr Einschränkungen enthält, die der Benutzeragent erfüllen muss, wenn es irgendwie möglich ist. Der Benutzeragent versucht, Einschränkungen in der angegebenen Reihenfolge im Einschränkungsset zu erfüllen.

Das Wichtigste zu verstehen ist, dass die meisten Einschränkungen keine Anforderungen sind; stattdessen sind sie Anfragen. Es gibt Ausnahmen, auf die wir gleich eingehen werden.

### Anforderung eines spezifischen Wertes für eine Einstellung

Bei den meisten kann jede Einschränkung ein spezifischer Wert sein, der einen gewünschten Wert für die Einstellung angibt. Zum Beispiel:

```js
const constraints = {
  width: 1920,
  height: 1080,
  aspectRatio: 1.777777778,
};

myTrack.applyConstraints(constraints);
```

In diesem Fall zeigen die Einschränkungen an, dass für nahezu alle Eigenschaften irgendwelche Werte in Ordnung sind, aber dass eine standardmäßige hochauflösende (HD) Videogröße gewünscht wird, mit dem standardmäßigen 16:9 {{Glossary("aspect_ratio", "Seitenverhältnis")}}. Es gibt keine Garantie, dass die resultierende Spur mit einer dieser übereinstimmt, aber der Benutzeragent sollte sein Bestes tun, um so viele wie möglich zu erfüllen.

Die Priorisierung der Eigenschaften ist einfach: Wenn zwei Eigenschaftsanfragen einander ausschließen, wird die zuerst im Einschränkungsset aufgeführte verwendet. Ein Beispiel: Wenn der Browser, der den obigen Code ausführt, keine 1920x1080-Spur bereitstellen kann, jedoch 1920x900, dann wird das bereitgestellt.

Einfache Einschränkungen wie diese, die einen Einzelwert angeben, werden immer als nicht erforderlich behandelt. Der Benutzeragent wird versuchen, das zu liefern, was Sie anfordern, garantiert jedoch nicht, dass das, was Sie erhalten, übereinstimmt. Wenn Sie jedoch einfache Werte für Eigenschaften verwenden, wenn Sie [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufrufen, wird die Anfrage immer erfolgreich sein, da diese Werte als Anfrage betrachtet werden, nicht als Anforderung.

### Angabe eines Wertebereichs

Manchmal ist jeder Wert innerhalb eines Bereichs für den Wert einer Eigenschaft akzeptabel. Sie können Bereiche mit entweder oder sowohl Minimal- als auch Maximalwerten angeben, und Sie können sogar einen idealen Wert innerhalb des Bereichs angeben, wenn Sie möchten. Wenn Sie einen idealen Wert angeben, wird der Browser versuchen, diesen Wert unter Berücksichtigung der anderen angegebenen Einschränkungen so weit wie möglich zu erreichen.

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

Hier, nachdem sichergestellt wurde, dass die einschränkbaren Eigenschaften, für die Übereinstimmungen gefunden werden müssen, unterstützt werden (`width`, `height`, `frameRate` und `facingMode`), richten wir Einschränkungen ein, die eine Breite anfordern, die nicht kleiner als 640 und nicht größer als 1920 (aber vorzugsweise 1920) ist, eine Höhe von nicht weniger als 400 (aber idealerweise 1080), ein Seitenverhältnis von 16:9 (1,777777778) und eine Bildrate von nicht mehr als 30 Bildern pro Sekunde. Darüber hinaus ist das einzige akzeptable Eingabegerät eine Kamera, die den Benutzer ansieht (eine "Selfie-Kamera"). Wenn die Einschränkungen `width`, `height`, `frameRate` oder `facingMode` nicht erfüllt werden können, wird das Versprechen, das von `applyConstraints()` zurückgegeben wird, abgelehnt.

> [!NOTE]
> Einschränkungen, die mit einem oder mehreren der Werte `max`, `min` oder `exact` angegeben werden, werden immer als obligatorisch behandelt. Wenn eine Einschränkung, die einen oder mehrere davon verwendet, nicht erfüllt werden kann, wenn `applyConstraints()` aufgerufen wird, wird das Versprechen abgelehnt.

### Erweiterte Einschränkungen

So genannte erweiterte Einschränkungen werden erstellt, indem dem Einschränkungsset eine `advanced`-Eigenschaft hinzugefügt wird; der Wert dieser Eigenschaft ist ein Array zusätzlicher Einschränkungssets, die als optional betrachtet werden. Es gibt nur wenige, wenn überhaupt, Anwendungsfälle für diese Funktion, und es gibt ein gewisses Interesse daran, sie aus der Spezifikation zu entfernen, daher wird sie hier nicht besprochen. Wenn Sie mehr erfahren möchten, lesen Sie [Abschnitt 11 der Media Capture and Streams-Spezifikation](https://www.w3.org/TR/mediacapture-streams/#idl-def-Constraints), über Beispiel 2 hinaus.

## Fähigkeiten prüfen

Sie können [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) aufrufen, um eine Liste aller unterstützten Fähigkeiten und die Werte oder Wertebereiche zu erhalten, die jeder dieser Werte auf der aktuellen Plattform und dem Benutzeragenten akzeptiert. Diese Funktion gibt ein Objekt zurück, das jede vom Browser unterstützte einschränkbare Eigenschaft auflistet und für jede dieser Eigenschaften einen Wert oder Wertebereich angibt, der unterstützt wird.

Zum Beispiel wird der Benutzer durch das folgende Snippet um Erlaubnis gebeten, auf seine lokale Kamera und das Mikrofon zuzugreifen. Sobald die Erlaubnis erteilt wird, werden `MediaTrackCapabilities`-Objekte in die Konsole protokolliert, die die Fähigkeiten jeder [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) detailliert beschreiben:

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

Der genaue Inhalt des Objekts hängt vom Browser und der Medientechnologie ab.

## Einschränkungen anwenden

Der erste und häufigste Weg, Einschränkungen zu verwenden, ist ihre Spezifikation, wenn Sie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufrufen:

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

In diesem Beispiel werden Einschränkungen zur `getUserMedia()`-Zeit angewendet, die ein ideales Set von Optionen mit Rückfällen für das Video anfordern.

> [!NOTE]
> Sie können eine oder mehrere IDs für Medieneingabegeräte angeben, um Einschränkungen festzulegen, welche Eingabequellen erlaubt sind. Um eine Liste der verfügbaren Geräte zu sammeln, können Sie [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen und dann für jedes Gerät, das die gewünschten Kriterien erfüllt, dessen `deviceId` dem `MediaConstraints`-Objekt hinzufügen, das schließlich in `getUserMedia()` übergeben wird.

Sie können auch die Einschränkungen eines vorhandenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) im laufenden Betrieb ändern, indem Sie die `applyConstraints()`-Methode der Spur aufrufen und ein Objekt übergeben, das die Einschränkungen darstellt, die Sie auf die Spur anwenden möchten:

```js
videoTrack.applyConstraints({
  width: 1920,
  height: 1080,
});
```

In diesem Snippet wird die Videospur, die durch `videoTrack` referenziert wird, so aktualisiert, dass ihre Auflösung so weit wie möglich 1920x1080 Pixel (1080p HD) entspricht.

## Abfrage der aktuellen Einschränkungen und Einstellungen

Es ist wichtig, den Unterschied zwischen **Einschränkungen** und **Einstellungen** zu beachten. Einschränkungen sind eine Möglichkeit, anzugeben, welche Werte Sie für die verschiedenen einschränkbaren Eigenschaften benötigen, wünschen und akzeptieren können (wie in der Dokumentation für [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) beschrieben), während Einstellungen die tatsächlichen Werte jeder einschränkbaren Eigenschaft zum aktuellen Zeitpunkt sind.

### Abrufen der derzeit gültigen Einschränkungen

Wenn Sie irgendwann die aktuell angewendeten Einschränkungen auf die Medien abrufen müssen, können Sie diese Informationen abrufen, indem Sie [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) aufrufen, wie im folgenden Beispiel gezeigt.

```js
function switchCameras(track, camera) {
  const constraints = track.getConstraints();
  constraints.facingMode = camera;
  track.applyConstraints(constraints);
}
```

Diese Funktion akzeptiert einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) und einen String, der den zu verwendenden Kameramodus angibt, ruft die aktuellen Einschränkungen ab, setzt den Wert des [`MediaTrackConstraints.facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) auf den angegebenen Wert und wendet das aktualisierte Einschränkungsset an.

### Abrufen der aktuellen Einstellungen für eine Spur

Sofern Sie nicht nur genaue Einschränkungen verwenden (was ziemlich einschränkend ist, stellen Sie also sicher, dass Sie es wirklich meinen!), gibt es keine Garantie dafür, was Sie tatsächlich nach dem Anwenden der Einschränkungen erhalten. Die Werte der einschränkbaren Eigenschaften, wie sie tatsächlich in den resultierenden Medien sind, werden als Einstellungen bezeichnet. Wenn Sie das tatsächliche Format und andere Eigenschaften der Medien wissen müssen, können Sie diese Einstellungen durch Aufrufen von [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) abrufen. Dies gibt ein auf dem Wörterbuch [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) basierendes Objekt zurück. Zum Beispiel:

```js
function whichCamera(track) {
  return track.getSettings().facingMode;
}
```

Diese Funktion verwendet `getSettings()`, um die derzeit verwendeten Werte der einschränkbaren Eigenschaften der Spur zu erhalten und gibt den Wert des [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode) zurück.

## Beispiel: Constraint Exerciser

In diesem Beispiel erstellen wir einen Exerciser, der es Ihnen ermöglicht, mit Medienbeschränkungen zu experimentieren, indem Sie den Quellcode ändern, der die Einschränkungssets für Audio- und Videospuren beschreibt. Sie können diese Änderungen dann anwenden und das Ergebnis sehen, einschließlich dessen, wie der Stream aussieht und welche tatsächlichen Medieneinstellungen nach dem Anwenden der neuen Einschränkungen festgelegt wurden.

Das HTML und CSS für dieses Beispiel sind ziemlich einfach und werden hier nicht gezeigt. Sie können sich das vollständige Beispiel {{LiveSampleLink("Example_Constraint_exerciser", "hier anschauen")}}.

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

Zuerst haben wir die Standard-Einschränkungssets als Strings. Diese Strings werden in bearbeitbaren {{HTMLElement("textarea")}}-Feldern dargestellt, aber dies ist die anfängliche Konfiguration des Streams.

```js
const videoDefaultConstraintString =
  '{\n  "width": 320,\n  "height": 240,\n  "frameRate": 30\n}';
const audioDefaultConstraintString =
  '{\n  "sampleSize": 16,\n  "channelCount": 2,\n  "echoCancellation": false\n}';
```

Diese Standardwerte fragen nach einer ziemlich gängigen Kamerakonfiguration, bestehen jedoch nicht darauf, dass irgendeine Eigenschaft von besonderer Bedeutung ist. Der Browser sollte sein Bestes tun, um diese Einstellungen zu erfüllen, wird sich jedoch mit allem zufriedengeben, was er als nahe Übereinstimmung betrachtet.

Dann initialisieren wir die Variablen, die die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Video- und Audiotracks enthalten werden, sowie die Variablen, die Referenzen zu den Video- und Audiotracks selbst auf `null` setzen.

```js
let videoConstraints = null;
let audioConstraints = null;

let audioTrack = null;
let videoTrack = null;
```

Und wir erhalten Referenzen zu allen Elementen, auf die wir zugreifen müssen.

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
  - : Ein {{HTMLElement("div")}}, in dem Fehlermeldungen oder andere Protokollausgaben geschrieben werden.
- `supportedConstraintList`
  - : Eine {{HTMLElement("ul")}} (ungeordnete Liste), zu der wir programmgesteuert die Namen jeder vom Browser des Benutzers unterstützten einschränkbaren Eigenschaft hinzufügen.
- `videoConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}-Element, das dem Benutzer ermöglicht, den Code für das Einschränkungsset der Videospur zu bearbeiten.
- `audioConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}-Element, das dem Benutzer ermöglicht, den Code für das Einschränkungsset der Audiospur zu bearbeiten.
- `videoSettingsText`
  - : Ein {{HTMLElement("textarea")}} (das immer deaktiviert ist), das die aktuellen Einstellungen für die einschränkbaren Eigenschaften der Videospur anzeigt.
- `audioSettingsText`
  - : Ein {{HTMLElement("textarea")}} (das immer deaktiviert ist), das die aktuellen Einstellungen für die einschränkbaren Eigenschaften der Audiospur anzeigt.

Schließlich setzen wir den aktuellen Inhalt der beiden Editor-Elemente für das Einschränkungsset auf die Standardwerte.

```js
videoConstraintEditor.value = videoDefaultConstraintString;
audioConstraintEditor.value = audioDefaultConstraintString;
```

### Aktualisieren der Einstellungsanzeige

Rechts neben jedem der Editorfelder für das Einschränkungsset befindet sich ein zweites Textfeld, das wir verwenden, um die aktuelle Konfiguration der konfigurierbaren Eigenschaften der Spur anzuzeigen. Diese Anzeige wird durch die Funktion `getCurrentSettings()` aktualisiert, die die aktuellen Einstellungen für die Audio- und Videotracks abruft und den entsprechenden Code in die Anzeigefelder der Tracks einfügt, indem sie deren [`value`](/de/docs/Web/API/HTMLTextAreaElement/value) setzt.

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

### Erstellen der Track-Einschränkungsset-Objekte

Die `buildConstraints()`-Funktion erstellt die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Audio- und Videotracks unter Verwendung des Codes in den beiden Editierfeldern für das Einschränkungsset der Tracks.

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

Dies verwendet {{jsxref("JSON.parse()")}}, um den Code in jedem Editor in ein Objekt zu parsen. Wenn bei einem der `JSON.parse()`-Aufrufe eine Ausnahme auftritt, wird `handleError()` aufgerufen, um die Fehlermeldung im Protokoll auszugeben.

### Konfiguration und Start des Streams

Die `startVideo()`-Methode kümmert sich um die Einrichtung und den Start des Video-Streams.

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

1. Sie ruft `buildConstraints()` auf, um die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die beiden Tracks aus dem Code in den Bearbeitungsfeldern zu erstellen.
2. Sie ruft [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf, wobei die Einschränkungsobjekte für die Video- und Audiotracks übergeben werden. Dies gibt einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit dem Audio und Video von einer Quelle zurück, die den Eingaben entspricht (typischerweise eine Webcam, obwohl Sie durch Angabe der richtigen Einschränkungen Medien aus anderen Quellen erhalten können).
3. Wenn der Stream abgerufen wird, wird er dem {{HTMLElement("video")}}-Element zugeordnet, damit er auf dem Bildschirm sichtbar ist, und wir erfassen die Audioträger und Videoträger in den Variablen `audioTrack` und `videoTrack`.
4. Dann richten wir ein Versprechen ein, das aufgelöst wird, wenn das [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)-Ereignis auf dem Video-Element auftritt.
5. Wenn das passiert, wissen wir, dass das Video zu spielen begonnen hat, daher rufen wir unsere `getCurrentSettings()`-Funktion (oben beschrieben) auf, um die tatsächlichen Einstellungen anzuzeigen, die der Browser nach Berücksichtigung unserer Einschränkungen und der Fähigkeiten der Hardware entschieden hat.
6. Wenn ein Fehler auftritt, protokollieren wir ihn mithilfe der `handleError()`-Methode, die wir weiter unten in diesem Artikel untersuchen werden.

Wir müssen auch einen Ereignislistener einrichten, um zu überwachen, wann der "Start Video"-Button geklickt wird:

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

Als Nächstes richten wir einen Ereignislistener für den "Apply Constraints"-Button ein. Wenn er geklickt wird und die Medien nicht bereits verwendet werden, rufen wir `startVideo()` auf und lassen diese Funktion den Stream mit den angegebenen Einstellungen starten. Andernfalls folgen wir diesen Schritten, um die aktualisierten Einschränkungen auf den bereits aktiven Stream anzuwenden:

1. `buildConstraints()` wird aufgerufen, um aktualisierte [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Audiospur (`audioConstraints`) und die Videospur (`videoConstraints`) zu erstellen.
2. [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) wird auf der Videospur (falls vorhanden) aufgerufen, um die neuen `videoConstraints` anzuwenden. Wenn dies erfolgreich ist, wird der Inhalt des aktuellen Einstellungsfeldes der Videospur basierend auf dem Ergebnis des Aufrufs ihrer [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)-Methode aktualisiert.
3. Sobald das erledigt ist, wird `applyConstraints()` auf der Audiospur (falls vorhanden) aufgerufen, um die neuen Audioeinschränkungen anzuwenden. Wenn dies erfolgreich ist, wird der Inhalt des aktuellen Einstellungsfeldes der Audiospur basierend auf dem Ergebnis des Aufrufs ihrer [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)-Methode aktualisiert.
4. Wenn ein Fehler beim Anwenden eines der Einschränkungssets auftritt, wird `handleError()` verwendet, um eine Nachricht in das Protokoll auszugeben.

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

### Handhabung des Stop-Buttons

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

Dies stoppt die aktiven Tracks, setzt die Variablen `videoTrack` und `audioTrack` auf `null`, damit wir wissen, dass sie weg sind, und entfernt den Stream aus dem {{HTMLElement("video")}}-Element, indem [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) auf `null` gesetzt wird.

### Einfache Tab-Unterstützung im Editor

Dieser Code fügt den {{HTMLElement("textarea")}}-Elementen einfache Unterstützung für Tabs hinzu, indem der Tab-Key zwei Leerzeichen einfügt, wenn eines der beiden Einschränkungseditierfelder fokussiert ist.

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

### Anzeige der einschränkbaren Eigenschaften, die der Browser unterstützt

Das letzte bedeutende Stück des Puzzles: Code, der eine Liste der einschränkbaren Eigenschaften anzeigt, die ihr Browser unterstützt, als Referenz für den Benutzer. Jede Eigenschaft ist ein Link zu ihrer Dokumentation auf MDN zum Nutzen des Benutzers. Sehen Sie die Beispiele zu [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#examples) für Details darüber, wie dieser Code funktioniert.

> [!NOTE]
> Natürlich kann es in dieser Liste nicht-standardisierte Eigenschaften geben, in diesem Fall werden Sie wahrscheinlich feststellen, dass der Dokumentationslink nicht viel hilft.

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

Wir haben auch einige einfache Fehlerbehandlungscodes; `handleError()` wird aufgerufen, um fehlerhafte Versprechen zu behandeln, und die `log()`-Funktion fügt die Fehlermeldung in ein spezielles Protokollierungs-{{HTMLElement("div")}}-Feld unter dem Video ein.

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
