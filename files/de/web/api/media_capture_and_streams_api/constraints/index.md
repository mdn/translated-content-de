---
title: Fähigkeiten, Constraints und Einstellungen
slug: Web/API/Media_Capture_and_Streams_API/Constraints
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel behandelt die beiden Konzepte **Constraints** und **Fähigkeiten** sowie Medieneinstellungen. Er enthält außerdem ein Beispiel, das wir [Constraint Exerciser](#example_constraint_exerciser) nennen. Mit dem Constraint Exerciser können Sie ausprobieren, wie sich unterschiedliche Constraint-Sätze auf die Audio- und Videospuren auswirken, die von den A/V-Eingabegeräten Ihres Computers stammen, etwa von der Webcam und dem Mikrofon.

Historisch gesehen war es beim Schreiben von Webskripten, die eng mit Web-APIs zusammenarbeiten, oft schwierig herauszufinden, ob eine API vorhanden ist und welche Einschränkungen sie im jeweiligen {{Glossary("user_agent", "User Agent")}} hat. Dazu musste man häufig ermitteln, welcher {{Glossary("user_agent", "User Agent")}} beziehungsweise Browser in welcher Version verwendet wird, ob bestimmte Objekte existieren, ob verschiedene Funktionen wie erwartet arbeiten und welche Fehler auftreten. Das führte zu viel anfälligem Code oder dazu, dass man sich auf Bibliotheken verließ, die diese Fragen klären und anschließend {{Glossary("polyfill", "Polyfills")}} bereitstellen, um Lücken in der Implementierung zu schließen.

Fähigkeiten und Constraints ermöglichen es Browsern und Websites beziehungsweise Apps, Informationen darüber auszutauschen, welche **einschränkbaren Eigenschaften** die Browserimplementierung unterstützt und welche Werte jeweils möglich sind.

## Überblick

Der Ablauf sieht folgendermaßen aus (am Beispiel von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)):

1. Rufen Sie bei Bedarf [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) auf, um die Liste der **unterstützten Constraints** abzurufen. Sie zeigt, welche einschränkbaren Eigenschaften der Browser kennt. Das ist nicht immer erforderlich, da unbekannte Constraints bei ihrer Angabe ignoriert werden. Wenn eine Eigenschaft für Ihre Anwendung jedoch unverzichtbar ist, können Sie zunächst prüfen, ob sie auf der Liste steht.
2. Sobald das Skript weiß, ob die gewünschten Eigenschaften unterstützt werden, kann es die **Fähigkeiten** der API und ihrer Implementierung prüfen. Dazu untersucht es das Objekt, das die Methode `getCapabilities()` der Spur zurückgibt. Dieses Objekt enthält für jeden unterstützten Constraint die möglichen Werte oder Wertebereiche.
3. Anschließend wird die Methode `applyConstraints()` der Spur aufgerufen, um die API zu konfigurieren. Dabei werden für die einschränkbaren Eigenschaften die gewünschten Werte oder Wertebereiche angegeben.
4. Die Methode `getConstraints()` der Spur gibt den Constraint-Satz zurück, der beim letzten Aufruf von `applyConstraints()` übergeben wurde. Er entspricht möglicherweise nicht dem tatsächlichen aktuellen Zustand der Spur: Angeforderte Werte können angepasst worden sein, und Standardwerte der Plattform sind darin nicht enthalten. Eine vollständige Darstellung der aktuellen Konfiguration der Spur erhalten Sie mit `getSettings()`.

In der Media Capture and Streams API besitzen sowohl [`MediaStream`](/de/docs/Web/API/MediaStream) als auch [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) einschränkbare Eigenschaften.

## Prüfen, ob ein Constraint unterstützt wird

Wenn Sie wissen müssen, ob der User Agent einen bestimmten Constraint unterstützt, können Sie mit [`navigator.mediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) eine Liste der einschränkbaren Eigenschaften abrufen, die der Browser kennt:

```js
const supported = navigator.mediaDevices.getSupportedConstraints();

document.getElementById("frameRateSlider").disabled = !supported["frameRate"];
```

In diesem Beispiel werden die unterstützten Constraints abgerufen. Falls der Constraint `frameRate` nicht unterstützt wird, wird ein Steuerelement deaktiviert, mit dem Benutzer die Bildrate einstellen können.

## Wie Constraints definiert werden

Ein einzelner Constraint ist ein Objekt, dessen Name der einschränkbaren Eigenschaft entspricht, für die ein gewünschter Wert oder Wertebereich angegeben wird. Dieses Objekt enthält null oder mehr einzelne Constraints sowie optional ein Unterobjekt namens `advanced`. Dieses enthält einen weiteren Satz aus null oder mehr Constraints, die der User Agent nach Möglichkeit erfüllen muss. Der User Agent versucht, die Constraints in der Reihenfolge zu erfüllen, in der sie im Constraint-Satz angegeben sind.

Wichtig ist vor allem, dass die meisten Constraints keine zwingenden Anforderungen, sondern Wünsche sind. Es gibt Ausnahmen, auf die wir gleich eingehen.

### Einen bestimmten Wert für eine Einstellung anfordern

In den meisten Fällen kann für einen Constraint ein bestimmter gewünschter Wert angegeben werden. Zum Beispiel:

```js
const constraints = {
  width: 1920,
  height: 1080,
  aspectRatio: 1.777777778,
};

myTrack.applyConstraints(constraints);
```

Hier geben die Constraints an, dass für fast alle Eigenschaften beliebige Werte akzeptabel sind. Gewünscht ist jedoch eine Standard-HD-Videoauflösung mit dem üblichen {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 16:9. Es gibt keine Garantie, dass die resultierende Spur alle diese Vorgaben erfüllt. Der User Agent sollte jedoch versuchen, möglichst viele davon zu erfüllen.

Die Priorisierung der Eigenschaften ist einfach: Schließen sich die angeforderten Werte zweier Eigenschaften gegenseitig aus, hat die Eigenschaft Vorrang, die im Constraint-Satz zuerst aufgeführt ist. Wenn der Browser im obigen Beispiel keine Spur mit 1920 × 1080, wohl aber eine mit 1920 × 900 bereitstellen könnte, würde er Letztere verwenden.

Einfache Constraints wie diese, die einen einzelnen Wert angeben, gelten nie als zwingend. Der User Agent versucht, den angeforderten Wert bereitzustellen, garantiert dies aber nicht. Wenn Sie beim Aufruf von [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) einfache Werte für Eigenschaften verwenden, ist die Anfrage daher immer erfolgreich: Die Werte gelten als Wünsche, nicht als Anforderungen.

### Einen Wertebereich angeben

Manchmal ist jeder Wert innerhalb eines bestimmten Bereichs für eine Eigenschaft akzeptabel. Sie können einen Mindestwert, einen Höchstwert oder beides angeben und auf Wunsch zusätzlich einen Idealwert innerhalb des Bereichs festlegen. Wenn Sie einen Idealwert angeben, versucht der Browser, diesem unter Berücksichtigung der anderen Constraints möglichst nahezukommen.

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

Hier prüfen wir zunächst, ob die einschränkbaren Eigenschaften unterstützt werden, für die passende Werte gefunden werden müssen (`width`, `height`, `frameRate` und `facingMode`). Danach legen wir Constraints fest: Die Breite soll mindestens 640 und höchstens 1920 betragen, vorzugsweise 1920. Die Höhe soll mindestens 400 betragen, idealerweise 1080. Das Seitenverhältnis soll 16:9 (1,777777778) sein und die Bildrate höchstens 30 Bilder pro Sekunde betragen. Außerdem kommt als Eingabegerät nur eine zum Benutzer gerichtete Kamera infrage (eine „Selfie-Kamera“). Wenn die Constraints für `width`, `height`, `frameRate` oder `facingMode` nicht erfüllt werden können, wird das von `applyConstraints()` zurückgegebene Promise zurückgewiesen.

> [!NOTE]
> Constraints, die `max`, `min` oder `exact` verwenden, gelten immer als zwingend. Kann beim Aufruf von `applyConstraints()` ein solcher Constraint nicht erfüllt werden, wird das Promise zurückgewiesen.

### Erweiterte Constraints

Sogenannte erweiterte Constraints werden erstellt, indem dem Constraint-Satz die Eigenschaft `advanced` hinzugefügt wird. Ihr Wert ist ein Array zusätzlicher Constraint-Sätze, die als optional gelten. Für diese Funktion gibt es kaum Anwendungsfälle, und es wird erwogen, sie aus der Spezifikation zu entfernen. Deshalb wird sie hier nicht weiter behandelt. Weitere Informationen finden Sie in [Abschnitt 11 der Media-Capture-and-Streams-Spezifikation](https://w3c.github.io/mediacapture-main/#constrainable-interface), nach Beispiel 2.

## Fähigkeiten prüfen

Mit [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) können Sie alle unterstützten Fähigkeiten und die Werte oder Wertebereiche abrufen, die diese auf der aktuellen Plattform und im aktuellen User Agent zulassen. Die Funktion gibt ein Objekt zurück, das jede vom Browser unterstützte einschränkbare Eigenschaft und die jeweils unterstützten Werte oder Wertebereiche aufführt.

Das folgende Codebeispiel fordert Benutzer auf, den Zugriff auf ihre lokale Kamera und ihr Mikrofon zu erlauben. Nach Erteilung der Berechtigung werden `MediaTrackCapabilities`-Objekte in der Konsole ausgegeben, die die Fähigkeiten jedes [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) beschreiben:

```js
navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    const tracks = stream.getTracks();
    tracks.map((t) => console.log(t.getCapabilities()));
  });
```

Ein solches Fähigkeitenobjekt kann wie folgt aussehen:

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

## Constraints anwenden

Die erste und gebräuchlichste Möglichkeit, Constraints zu verwenden, besteht darin, sie beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) anzugeben:

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

In diesem Beispiel werden die Constraints beim Aufruf von `getUserMedia()` angewendet. Für das Video wird ein idealer Satz von Optionen mit Alternativen angefordert.

> [!NOTE]
> Sie können eine oder mehrere IDs von Medieneingabegeräten angeben, um die zulässigen Eingabequellen einzuschränken. Eine Liste der verfügbaren Geräte erhalten Sie mit [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices). Anschließend können Sie für jedes Gerät, das die gewünschten Kriterien erfüllt, dessen `deviceId` zum `MediaConstraints`-Objekt hinzufügen, das schließlich an `getUserMedia()` übergeben wird.

Sie können die Constraints eines vorhandenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auch während des Betriebs ändern. Rufen Sie dazu die Methode [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) der Spur auf und übergeben Sie ihr ein Objekt mit den Constraints, die Sie anwenden möchten:

```js
videoTrack.applyConstraints({
  width: 1920,
  height: 1080,
});
```

In diesem Codebeispiel wird die von `videoTrack` referenzierte Videospur so aktualisiert, dass ihre Auflösung möglichst genau 1920 × 1080 Pixeln entspricht (1080p HD).

## Aktuelle Constraints und Einstellungen abrufen

Der Unterschied zwischen **Constraints** und **Einstellungen** ist wichtig. Mit Constraints geben Sie an, welche Werte Sie für die verschiedenen einschränkbaren Eigenschaften benötigen, bevorzugen oder akzeptieren würden (siehe die Dokumentation zu [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)). Einstellungen sind dagegen die tatsächlichen aktuellen Werte dieser Eigenschaften.

### Die geltenden Constraints abrufen

Wenn Sie die aktuell auf ein Medium angewendeten Constraints abrufen möchten, können Sie [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) aufrufen, wie im folgenden Beispiel gezeigt.

```js
function switchCameras(track, camera) {
  const constraints = track.getConstraints();
  constraints.facingMode = camera;
  track.applyConstraints(constraints);
}
```

Diese Funktion nimmt einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) und eine Zeichenfolge für die gewünschte Kameraausrichtung entgegen. Sie ruft die aktuellen Constraints ab, setzt [`MediaTrackConstraints.facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) auf den angegebenen Wert und wendet anschließend den aktualisierten Constraint-Satz an.

### Die aktuellen Einstellungen einer Spur abrufen

Sofern Sie nicht ausschließlich exakte Constraints verwenden – was ziemlich einschränkend ist –, lässt sich nicht garantieren, welche Werte nach dem Anwenden der Constraints tatsächlich vorliegen. Die tatsächlichen Werte der einschränkbaren Eigenschaften des resultierenden Mediums werden als Einstellungen bezeichnet. Wenn Sie das tatsächliche Format und andere Eigenschaften des Mediums kennen müssen, können Sie diese Einstellungen mit [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) abrufen. Die Methode gibt ein Objekt zurück, das auf dem Dictionary [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) basiert. Zum Beispiel:

```js
function whichCamera(track) {
  return track.getSettings().facingMode;
}
```

Diese Funktion ruft mit `getSettings()` die aktuell verwendeten Werte der einschränkbaren Eigenschaften der Spur ab und gibt den Wert von [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode) zurück.

## Beispiel: Constraint Exerciser

In diesem Beispiel erstellen wir ein Werkzeug, mit dem Sie Medien-Constraints ausprobieren können, indem Sie den Quellcode für die Constraint-Sätze der Audio- und Videospuren bearbeiten. Anschließend können Sie die Änderungen anwenden und das Ergebnis betrachten: sowohl den Stream selbst als auch die tatsächlichen Medieneinstellungen nach dem Anwenden der neuen Constraints.

HTML und CSS dieses Beispiels sind recht einfach und werden hier nicht gezeigt. Den vollständigen Code können Sie ansehen, indem Sie auf „Play“ klicken, um das Beispiel im Playground zu öffnen.

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

Zunächst definieren wir die Standard-Constraint-Sätze als Zeichenfolgen. Diese Zeichenfolgen werden in bearbeitbaren {{HTMLElement("textarea")}}-Elementen angezeigt und bilden die Ausgangskonfiguration des Streams.

```js
const videoDefaultConstraintString =
  '{\n  "width": 320,\n  "height": 240,\n  "frameRate": 30\n}';
const audioDefaultConstraintString =
  '{\n  "sampleSize": 16,\n  "channelCount": 2,\n  "echoCancellation": false\n}';
```

Diese Standardwerte fordern eine recht übliche Kamerakonfiguration an, ohne auf einer bestimmten Eigenschaft zu bestehen. Der Browser sollte versuchen, die Vorgaben möglichst gut zu erfüllen, kann aber auch eine Konfiguration wählen, die er als ausreichend ähnlich betrachtet.

Danach initialisieren wir die Variablen für die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte der Video- und Audiospur sowie die Variablen für die Verweise auf die Spuren selbst mit `null`.

```js
let videoConstraints = null;
let audioConstraints = null;

let audioTrack = null;
let videoTrack = null;
```

Außerdem holen wir Verweise auf alle Elemente, auf die wir zugreifen müssen.

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
  - : Ein {{HTMLElement("div")}}-Element, in das Fehlermeldungen und andere Protokollausgaben geschrieben werden.
- `supportedConstraintList`
  - : Ein {{HTMLElement("ul")}}-Element (eine ungeordnete Liste), in das wir programmgesteuert die Namen aller einschränkbaren Eigenschaften einfügen, die der Browser unterstützt.
- `videoConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}-Element, in dem Benutzer den Code für den Constraint-Satz der Videospur bearbeiten können.
- `audioConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}-Element, in dem Benutzer den Code für den Constraint-Satz der Audiospur bearbeiten können.
- `videoSettingsText`
  - : Ein {{HTMLElement("textarea")}}-Element (das stets deaktiviert ist), das die aktuellen Einstellungen der einschränkbaren Eigenschaften der Videospur anzeigt.
- `audioSettingsText`
  - : Ein {{HTMLElement("textarea")}}-Element (das stets deaktiviert ist), das die aktuellen Einstellungen der einschränkbaren Eigenschaften der Audiospur anzeigt.

Zum Schluss setzen wir den aktuellen Inhalt der beiden Editoren für Constraint-Sätze auf die Standardwerte.

```js
videoConstraintEditor.value = videoDefaultConstraintString;
audioConstraintEditor.value = audioDefaultConstraintString;
```

### Die Anzeige der Einstellungen aktualisieren

Rechts neben jedem Editor für Constraint-Sätze befindet sich ein weiteres Textfeld, das die aktuelle Konfiguration der einstellbaren Eigenschaften der jeweiligen Spur anzeigt. Die Funktion `getCurrentSettings()` aktualisiert diese Anzeige: Sie ruft die aktuellen Einstellungen der Audio- und Videospur ab und fügt den entsprechenden Code in die Anzeigefelder ein, indem sie deren [`value`](/de/docs/Web/API/HTMLTextAreaElement/value) setzt.

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

Die Funktion wird sowohl nach dem ersten Start des Streams als auch nach jeder Anwendung aktualisierter Constraints aufgerufen, wie Sie weiter unten sehen werden.

### Constraint-Satz-Objekte für die Spuren erstellen

Die Funktion `buildConstraints()` erstellt anhand des Codes in den beiden Editoren die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Audio- und Videospur.

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

Dazu wird der Code in jedem Editor mit {{jsxref("JSON.parse()")}} in ein Objekt umgewandelt. Löst einer der Aufrufe von JSON.parse() eine Ausnahme aus, wird `handleError()` aufgerufen, um die Fehlermeldung im Protokoll auszugeben.

### Den Stream konfigurieren und starten

Die Methode `startVideo()` richtet den Videostream ein und startet ihn.

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

Dabei werden mehrere Schritte ausgeführt:

1. `buildConstraints()` erstellt aus dem Code in den Editoren die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die beiden Spuren.
2. [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) wird mit den Constraint-Objekten für die Video- und Audiospur aufgerufen. Die Methode gibt einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit Audio und Video aus einer Quelle zurück, die den Vorgaben entspricht. In der Regel ist dies eine Webcam; mit passenden Constraints können jedoch auch Medien aus anderen Quellen bezogen werden.
3. Sobald der Stream verfügbar ist, wird er dem {{HTMLElement("video")}}-Element zugewiesen, damit er auf dem Bildschirm sichtbar ist. Außerdem speichern wir die Audio- und Videospur in den Variablen `audioTrack` und `videoTrack`.
4. Danach richten wir ein Promise ein, das erfüllt wird, wenn auf dem Videoelement das Ereignis [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event) eintritt.
5. Dann wissen wir, dass die Videowiedergabe begonnen hat, und rufen die oben beschriebene Funktion `getCurrentSettings()` auf. Sie zeigt die tatsächlichen Einstellungen an, die der Browser unter Berücksichtigung unserer Constraints und der Fähigkeiten der Hardware gewählt hat.
6. Falls ein Fehler auftritt, protokollieren wir ihn mit der Methode `handleError()`, die weiter unten beschrieben wird.

Außerdem richten wir einen Event-Listener ein, der auf einen Klick auf die Schaltfläche „Start Video“ reagiert:

```js
document.getElementById("startButton").addEventListener("click", () => {
  startVideo();
});
```

### Aktualisierte Constraint-Sätze anwenden

Als Nächstes richten wir einen Event-Listener für die Schaltfläche „Apply Constraints“ ein. Wird sie angeklickt und sind noch keine Medien in Verwendung, rufen wir `startVideo()` auf. Diese Funktion startet den Stream mit den angegebenen Einstellungen. Andernfalls wenden wir die aktualisierten Constraints in folgenden Schritten auf den bereits aktiven Stream an:

1. `buildConstraints()` erstellt aktualisierte [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Audiospur (`audioConstraints`) und die Videospur (`videoConstraints`).
2. Falls eine Videospur vorhanden ist, wird darauf [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufgerufen, um die neuen `videoConstraints` anzuwenden. Bei Erfolg wird das Feld mit den aktuellen Einstellungen der Videospur anhand des Ergebnisses ihrer Methode [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) aktualisiert.
3. Anschließend wird, falls eine Audiospur vorhanden ist, darauf `applyConstraints()` aufgerufen, um die neuen Audio-Constraints anzuwenden. Bei Erfolg wird das Feld mit den aktuellen Einstellungen der Audiospur anhand des Ergebnisses ihrer Methode [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) aktualisiert.
4. Tritt beim Anwenden eines der beiden Constraint-Sätze ein Fehler auf, gibt `handleError()` eine Meldung im Protokoll aus.

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

### Die Stopp-Schaltfläche verarbeiten

Danach richten wir den Handler für die Stopp-Schaltfläche ein.

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

Er stoppt die aktiven Spuren und setzt die Variablen `videoTrack` und `audioTrack` auf `null`, damit wir wissen, dass die Spuren nicht mehr vorhanden sind. Außerdem entfernt er den Stream aus dem {{HTMLElement("video")}}-Element, indem er [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) auf `null` setzt.

### Einfache Unterstützung der Tabulatortaste im Editor

Dieser Code ergänzt eine einfache Unterstützung der Tabulatortaste für die {{HTMLElement("textarea")}}-Elemente: Wenn eines der beiden Bearbeitungsfelder für Constraints fokussiert ist, fügt die Tabulatortaste zwei Leerzeichen ein.

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

Das letzte wichtige Puzzleteil ist Code, der zur Orientierung eine Liste der einschränkbaren Eigenschaften anzeigt, die der Browser unterstützt. Jede Eigenschaft ist mit ihrer MDN-Dokumentation verlinkt. Einzelheiten zur Funktionsweise dieses Codes finden Sie in den [Beispielen zu `MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#examples).

> [!NOTE]
> Die Liste kann auch nicht standardisierte Eigenschaften enthalten. In solchen Fällen ist der Link zur Dokumentation möglicherweise wenig hilfreich.

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

Schließlich gibt es noch einfachen Code zur Fehlerbehandlung: `handleError()` verarbeitet zurückgewiesene Promises, und die Funktion `log()` fügt die Fehlermeldung in ein spezielles {{HTMLElement("div")}}-Element unterhalb des Videos ein.

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
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
