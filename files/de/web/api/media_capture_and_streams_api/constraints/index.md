---
title: Fähigkeiten, Einschränkungen und Einstellungen
slug: Web/API/Media_Capture_and_Streams_API/Constraints
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel behandelt die beiden Konzepte **Einschränkungen** und **Fähigkeiten** sowie Medieneinstellungen und beinhaltet ein Beispiel, das wir [Constraint Exerciser](#example_constraint_exerciser) nennen. Der Constraint Exerciser ermöglicht Ihnen, mit den Ergebnissen verschiedener Einschränkungssets zu experimentieren, die auf die Audio- und Videospuren der A/V-Eingabegeräte des Computers (wie Webcam und Mikrofon) angewendet werden.

Historisch gesehen gab es beim Schreiben von Skripten für das Web, die eng mit Web-APIs arbeiten, eine bekannte Herausforderung: Oft muss Ihr Code wissen, ob eine API existiert und, falls ja, welche Einschränkungen in Bezug auf den {{Glossary("user_agent", "Benutzeragenten")}} bestehen, auf dem sie läuft. Dies herauszufinden ist oft schwierig und erforderte normalerweise das Prüfen, auf welchem {{Glossary("user_agent", "Benutzeragenten")}} (oder Browser) Sie laufen, welche Version es ist, das Überprüfen, ob bestimmte Objekte existieren, das Versuchen, ob verschiedene Dinge funktionieren oder nicht und das Bestimmen, welche Fehler auftreten, und so weiter. Das Ergebnis war eine Menge sehr fragiler Code oder das Vertrauen auf Bibliotheken, die dies für Sie herausfinden und dann {{Glossary("polyfill", "Polyfills")}} implementieren, um die Lücken in der Implementierung in Ihrem Namen zu schließen.

Fähigkeiten und Einschränkungen ermöglichen es dem Browser und der Website oder App, Informationen auszutauschen, über welche **einschränkbaren Eigenschaften** die Implementierung des Browsers unterstützt und welche Werte für jede unterstützt werden.

## Überblick

Der Prozess funktioniert wie folgt (unter Verwendung von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) als Beispiel):

1. Falls erforderlich, rufen Sie [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) auf, um die Liste der **unterstützten Einschränkungen** zu erhalten, die Ihnen mitteilt, welche einschränkbaren Eigenschaften der Browser kennt. Dies ist nicht immer notwendig, da alle unbekannten Eigenschaften ignoriert werden, wenn Sie sie angeben - aber wenn Sie welche haben, ohne die Sie nicht auskommen können, können Sie sie überprüfen, um sicherzustellen, dass sie auf der Liste stehen.
2. Sobald das Skript weiß, ob die Eigenschaft oder die Eigenschaften, die es verwenden möchte, unterstützt werden, kann es in der API und ihrer Implementierung nachsehen, indem es das Objekt untersucht, das von der Methode `getCapabilities()` der Spur zurückgegeben wird; dieses Objekt listet jede unterstützte Einschränkung und die Werte oder Wertebereiche auf, die unterstützt werden.
3. Schließlich wird die Methode `applyConstraints()` der Spur aufgerufen, um die API nach Wunsch zu konfigurieren, indem die Werte oder Bereiche von Werten angegeben werden, die es für jede der einschränkbaren Eigenschaften verwenden möchte, an denen es eine Präferenz hat.
4. Die Methode `getConstraints()` der Spur gibt das Set von Einschränkungen zurück, die in dem letzten Aufruf von `applyConstraints()` übergeben wurden. Dies repräsentiert möglicherweise nicht den tatsächlichen aktuellen Zustand der Spur, aufgrund von Eigenschaften, deren angeforderte Werte angepasst werden mussten und weil Standardwerte der Plattform nicht repräsentiert sind. Für eine vollständige Darstellung der aktuellen Konfiguration der Spur verwenden Sie `getSettings()`.

In der Media Capture and Streams API haben sowohl [`MediaStream`](/de/docs/Web/API/MediaStream) als auch [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) einschränkbare Eigenschaften.

## Bestimmen, ob eine Einschränkung unterstützt wird

Wenn Sie wissen müssen, ob eine bestimmte Einschränkung vom Benutzeragenten unterstützt wird, können Sie dies herausfinden, indem Sie [`navigator.mediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) aufrufen, um eine Liste der einschränkbaren Eigenschaften zu erhalten, die der Browser kennt, wie folgt:

```js
const supported = navigator.mediaDevices.getSupportedConstraints();

document.getElementById("frameRateSlider").disabled = !supported["frameRate"];
```

In diesem Beispiel werden die unterstützten Einschränkungen abgerufen und eine Steuerfunktion, die es dem Benutzer ermöglicht, die Bildrate zu konfigurieren, wird deaktiviert, wenn die Einschränkung `frameRate` nicht unterstützt wird.

## Wie Einschränkungen definiert sind

Eine einzelne Einschränkung ist ein Objekt, dessen Name zur einschränkbaren Eigenschaft passt, deren gewünschter Wert oder Wertebereich angegeben wird. Dieses Objekt enthält null oder mehr individuelle Einschränkungen sowie ein optionales Unterobjekt mit dem Namen `advanced`, das eine weitere Menge von null oder mehr Einschränkungen enthält, die der Benutzeragent nach Möglichkeit erfüllen muss. Der Benutzeragent versucht, die Einschränkungen in der im Einschränkungsset angegebenen Reihenfolge zu erfüllen.

Am wichtigsten ist zu verstehen, dass die meisten Einschränkungen keine Anforderungen sind; stattdessen sind sie Anfragen. Es gibt Ausnahmen, zu denen wir gleich kommen.

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

In diesem Fall geben die Einschränkungen an, dass alle Werte für nahezu alle Eigenschaften akzeptabel sind, es aber wünschenswert ist, dass eine Standard-HD-Auflösung (High Definition) mit dem Standardseitenverhältnis von 16:9 angestrebt wird. Es gibt keine Garantie, dass die resultierende Spur mit einer dieser übereinstimmen wird, aber der Benutzeragent sollte sein Bestes geben, um so viele wie möglich zu erfüllen.

Die Priorisierung der Eigenschaften ist einfach: Wenn zwei Eigenschaften angeforderte Werte haben, die sich gegenseitig ausschließen, wird diejenige zuerst im Einschränkungsset verwendet. Als Beispiel: Wenn der Browser, der den obigen Code ausführt, keine 1920x1080-Spur bereitstellen könnte, aber 1920x900, würde diese bereitgestellt werden.

Einfache Einschränkungen wie diese, die einen einzelnen Wert angeben, werden immer als nicht zwingend angesehen. Der Benutzeragent wird versuchen, das Bereitgestellte bestmöglich zu erfüllen, jedoch keine Garantie geben, dass es zu 100% übereinstimmt. Wenn Sie jedoch einfache Werte für Eigenschaften verwenden, wenn Sie [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufrufen, wird die Anfrage immer erfolgreich sein, weil diese Werte als Anfrage und nicht als Anforderung behandelt werden.

### Einen Wertebereich angeben

Manchmal ist jeder Wert innerhalb eines Bereichs für den Wert einer Eigenschaft akzeptabel. Sie können Bereiche mit einem oder beiden Mindest- und Höchstwerten angeben, und Sie können sogar einen Idealwert innerhalb des Bereichs angeben, wenn Sie möchten. Wenn Sie einen Idealwert angeben, wird der Browser versuchen, diesen Wert unter Berücksichtigung der anderen angegebenen Einschränkungen so genau wie möglich zu erreichen.

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

In diesem Fall, nachdem sichergestellt wurde, dass die einschränkbaren Eigenschaften, für die Übereinstimmungen gefunden werden müssen, unterstützt werden (`width`, `height`, `frameRate` und `facingMode`), richten wir Einschränkungen ein, die eine Breite verlangen, die nicht kleiner als 640 und nicht größer als 1920 ist (aber vorzugsweise 1920), eine Höhe, die nicht kleiner als 400 ist (aber idealerweise 1080), ein Seitenverhältnis von 16:9 (1.777777778) und eine Bildrate von höchstens 30 Bildern pro Sekunde. Darüber hinaus ist das einzige akzeptable Eingabegerät eine Kamera, die auf den Benutzer gerichtet ist (eine "Selfie-Kamera"). Wenn die Einschränkungen `width`, `height`, `frameRate` oder `facingMode` nicht erfüllt werden können, wird das Versprechen, das von `applyConstraints()` zurückgegeben wird, abgelehnt.

> [!NOTE]
> Einschränkungen, die unter Verwendung von `max`, `min` oder `exact` angegeben werden, werden immer als zwingend behandelt. Wenn eine der Einschränkungen, die eines oder mehrere dieser Elemente verwendet nicht erfüllt werden kann, wenn `applyConstraints()` aufgerufen wird, wird das Versprechen abgelehnt.

### Erweiterte Einschränkungen

So genannte erweiterte Einschränkungen werden erstellt, indem eine `advanced`-Eigenschaft zum Einschränkungsset hinzugefügt wird; der Wert dieser Eigenschaft ist ein Array von zusätzlichen Einschränkungssets, die als optional angesehen werden. Es gibt nur wenige, wenn überhaupt, Anwendungsfälle für diese Funktion, und es gibt Interesse, sie aus der Spezifikation zu entfernen, daher wird sie hier nicht weiter thematisiert. Wenn Sie mehr erfahren möchten, sehen Sie sich [Abschnitt 11 der Media Capture and Streams-Spezifikation](https://w3c.github.io/mediacapture-main/#constrainable-interface) nach Beispiel 2 an.

## Überprüfung der Fähigkeiten

Sie können [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) aufrufen, um eine Liste aller unterstützten Fähigkeiten und der Werte oder Wertebereiche zu erhalten, welche jeder akzeptiert, auf der aktuellen Plattform und dem Benutzeragenten. Diese Funktion gibt ein Objekt zurück, das jede einschränkbare Eigenschaft auflistet, die vom Browser unterstützt wird, sowie einen Wert oder Wertebereich, der für jede dieser Eigenschaften unterstützt wird.

Zum Beispiel wird das folgende Snippet dazu führen, dass der Benutzer um Erlaubnis gebeten wird, auf seine lokale Kamera und sein Mikrofon zuzugreifen. Sobald die Erlaubnis erteilt wird, werden `MediaTrackCapabilities`-Objekte in der Konsole protokolliert, die die Fähigkeiten jeder [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) detailliert darstellen:

```js
navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    const tracks = stream.getTracks();
    tracks.map((t) => console.log(t.getCapabilities()));
  });
```

Ein Beispiel eines Fähigkeitenobjekts sieht folgendermaßen aus:

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

Der genaue Inhalt des Objekts hängt vom Browser und der Media-Hardware ab.

## Einschränkungen anwenden

Die erste und häufigste Möglichkeit, Einschränkungen zu nutzen, besteht darin, sie anzugeben, wenn Sie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufrufen:

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

In diesem Beispiel werden die Einschränkungen zur Zeit von `getUserMedia()` angewendet, wobei ein ideales Satz von Optionen mit Fallbacks für das Video angefordert wird.

> [!NOTE]
> Sie können eine oder mehrere Medien-Eingabegeräte-IDs angeben, um Einschränkungen darüber festzulegen, welche Eingabequellen zulässig sind. Um eine Liste der verfügbaren Geräte zu sammeln, können Sie [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen und dann für jedes Gerät, das die gewünschten Kriterien erfüllt, seine `deviceId` zum `MediaConstraints`-Objekt hinzufügen, das schließlich an `getUserMedia()` übergeben wird.

Sie können auch die Einschränkungen einer bestehenden [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) spontan ändern, indem Sie die Methode [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) der Spur aufrufen und ein Objekt übergeben, das die Einschränkungen darstellt, die Sie anwenden möchten:

```js
videoTrack.applyConstraints({
  width: 1920,
  height: 1080,
});
```

In diesem Snippet wird die Videospur, auf die durch `videoTrack` verwiesen wird, so aktualisiert, dass ihre Auflösung so gut wie möglich 1920x1080 Pixel (1080p High Definition) entspricht.

## Aktuelle Einschränkungen und Einstellungen abrufen

Es ist wichtig, den Unterschied zwischen **Einschränkungen** und **Einstellungen** zu beachten. Einschränkungen sind eine Möglichkeit, anzugeben, welche Werte Sie für die verschiedenen einschränkbaren Eigenschaften benötigen, wollen und bereit sind zu akzeptieren (wie in der Dokumentation für [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) beschrieben), während Einstellungen die tatsächlichen Werte jeder einschränkbaren Eigenschaft zu diesem Zeitpunkt sind.

### Die wirksamen Einschränkungen abrufen

Wenn Sie irgendwann das Set von Einschränkungen abrufen müssen, die derzeit auf die Medien angewendet werden, können Sie diese Information abrufen, indem Sie [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) aufrufen, wie im folgenden Beispiel gezeigt.

```js
function switchCameras(track, camera) {
  const constraints = track.getConstraints();
  constraints.facingMode = camera;
  track.applyConstraints(constraints);
}
```

Diese Funktion akzeptiert eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) und eine Zeichenkette, die den zu verwendenden Kamera-Auswahlmodus angibt, holt die aktuellen Einschränkungen, setzt den Wert von [`MediaTrackConstraints.facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) auf den angegebenen Wert, und wendet dann das aktualisierte Einschränkungsset an.

### Die aktuellen Einstellungen für eine Spur abrufen

Sofern Sie nicht nur genaue Einschränkungen verwenden (was ziemlich einschränkend ist, also seien Sie sicher, dass Sie es so meinen!), gibt es keine Garantie dafür, was Sie letztendlich nach der Anwendung der Einschränkungen erhalten. Die Werte der einschränkbaren Eigenschaften, wie sie tatsächlich in den resultierenden Medien sind, werden als Einstellungen bezeichnet. Wenn Sie das genaue Format und andere Eigenschaften der Medien erfahren müssen, können Sie diese Einstellungen abrufen, indem Sie [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) aufrufen. Diese Methode gibt ein Objekt basierend auf dem Wörterbuch [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) zurück. Zum Beispiel:

```js
function whichCamera(track) {
  return track.getSettings().facingMode;
}
```

Diese Funktion verwendet `getSettings()`, um die derzeit genutzten Werte der einschränkbaren Eigenschaften der Spur zu erhalten und gibt den Wert von [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode) zurück.

## Beispiel: Constraint Exerciser

In diesem Beispiel erstellen wir einen Exerciser, mit dem Sie mit Medieneinschränkungen experimentieren können, indem Sie den Quellcode bearbeiten, der die Einschränkungssets für Audio- und Videospuren beschreibt. Sie können dann diese Änderungen anwenden und das Ergebnis sehen, einschließlich sowohl des Aussehens des Streams als auch der tatsächlichen Medieneinstellungen, die nach der Anwendung der neuen Einschränkungen festgelegt wurden.

Der HTML- und CSS-Code für dieses Beispiel ist ziemlich einfach und wird hier nicht gezeigt. Sie können den vollständigen Code anzeigen, indem Sie auf "Play" klicken, um ihn im Playground anzuzeigen.

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

### Vorgaben und Variablen

Zuerst haben wir die Standard-Einschränkungssets als Zeichenketten. Diese Zeichenketten werden in bearbeitbaren {{HTMLElement("textarea")}}s angezeigt, aber dies ist die Anfangskonfiguration des Streams.

```js
const videoDefaultConstraintString =
  '{\n  "width": 320,\n  "height": 240,\n  "frameRate": 30\n}';
const audioDefaultConstraintString =
  '{\n  "sampleSize": 16,\n  "channelCount": 2,\n  "echoCancellation": false\n}';
```

Diese Vorgaben verlangen nach einer recht verbreiteten Kamerakonfiguration, bestehen aber nicht darauf, dass eine spezielle Eigenschaft von besonderer Bedeutung ist. Der Browser sollte sein Bestes geben, um diese Einstellungen zu erfüllen, wird sich jedoch auch mit allem zufriedengeben, was als nahe Übereinstimmung betrachtet wird.

Dann initialisieren wir die Variablen, die die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Video- und Audiotracks sowie die Variablen, die Referenzen zu den Video- und Audiotracks selbst enthalten werden, mit `null`.

```js
let videoConstraints = null;
let audioConstraints = null;

let audioTrack = null;
let videoTrack = null;
```

Und wir holen uns Referenzen auf alle Elemente, auf die wir zugreifen müssen.

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
  - : Das {{HTMLElement("video")}}-Element, das den Stream anzeigt.
- `logElement`
  - : Ein {{HTMLElement("div")}}, in dem eventuelle Fehlermeldungen oder andere Protokollausgaben geschrieben werden.
- `supportedConstraintList`
  - : Ein {{HTMLElement("ul")}} (unordered list), in den wir die Namen jeder der vom Browser des Benutzers unterstützten einschränkbaren Eigenschaften programmatisch hinzufügen.
- `videoConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}-Element, das dem Benutzer das Bearbeiten des Codes für das Einschränkungsset der Videospur ermöglicht.
- `audioConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}-Element, das dem Benutzer das Bearbeiten des Codes für das Einschränkungsset der Audiospur ermöglicht.
- `videoSettingsText`
  - : Ein {{HTMLElement("textarea")}} (das immer deaktiviert ist), das die aktuellen Einstellungen für die einschränkbaren Eigenschaften der Videospur anzeigt.
- `audioSettingsText`
  - : Ein {{HTMLElement("textarea")}} (das immer deaktiviert ist), das die aktuellen Einstellungen für die einschränkbaren Eigenschaften der Audiospur anzeigt.

Schließlich setzen wir die aktuellen Inhalte der beiden Einschränkungsset-Editor-Elemente auf die Vorgaben.

```js
videoConstraintEditor.value = videoDefaultConstraintString;
audioConstraintEditor.value = audioDefaultConstraintString;
```

### Anzeige der Einstellungen aktualisieren

Rechts von jedem der Einschränkungsset-Editoren befindet sich eine zweite Textbox, die wir verwenden, um die aktuelle Konfiguration der konfigurierbaren Eigenschaften der Spur anzuzeigen. Diese Anzeige wird von der Funktion `getCurrentSettings()` aktualisiert, die die aktuellen Einstellungen für die Audio- und Videospuren abruft und den entsprechenden Code in den Anzeigeelementen der Einstellungen der Spuren einfügt, indem deren [`value`](/de/docs/Web/API/HTMLTextAreaElement/value) gesetzt wird.

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

Dies wird aufgerufen, nachdem der Stream zum ersten Mal gestartet wurde, sowie jedes Mal, wenn wir aktualisierte Einschränkungen angewendet haben, wie Sie unten sehen werden.

### Aufbau des Einschränkungsset-Objekte der Spuren

Die `buildConstraints()`-Funktion erstellt die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Audio- und Videospuren unter Verwendung des Codes in den beiden Einschränkungsset-Editierfeldern.

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

Dies verwendet {{jsxref("JSON.parse()")}}, um den Code in jedem Editor in ein Objekt zu parsen. Wenn eine der Aufrufe an JSON.parse() eine Ausnahme auslöst, wird `handleError()` aufgerufen, um die Fehlermeldung in das Protokoll auszugeben.

### Konfiguration und Start des Streams

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

Es gibt mehrere Schritte hier:

1. Sie ruft `buildConstraints()` auf, um die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die beiden Spuren aus dem Code in den Editierfeldern zu erstellen.
2. Sie ruft [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf, wobei die Einschränkungsobjekte für die Video- und Audiospuren übergeben werden. Dies gibt einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit dem Audio und Video von einer Quelle zurück, die den Eingaben entspricht (normalerweise eine Webcam, obwohl Sie, wenn Sie die richtigen Einschränkungen angeben, Medien von anderen Quellen erhalten können).
3. Wenn der Stream erhalten wird, wird er an das {{HTMLElement("video")}}-Element angehängt, damit er auf dem Bildschirm sichtbar ist, und wir greifen die Audiospur und die Videospur in den Variablen `audioTrack` und `videoTrack` ab.
4. Dann richten wir ein Versprechen ein, das aufgelöst wird, wenn das Event [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event) auf dem Videoelement eintritt.
5. Wenn das passiert, wissen wir, dass das Video zu spielen begonnen hat, und rufen unsere Funktion `getCurrentSettings()` (oben beschrieben) auf, um die tatsächlichen Einstellungen anzuzeigen, die der Browser nach Berücksichtigung unserer Einschränkungen und der Fähigkeiten der Hardware beschlossen hat.
6. Tritt ein Fehler auf, verwenden wir `handleError()`, um ihn mit der Methode zu protokollieren, die wir weiter unten in diesem Artikel besprechen werden.

Wir müssen auch einen Event-Listener einrichten, um auf den Klick auf die Schaltfläche "Start Video" zu achten:

```js
document.getElementById("startButton").addEventListener("click", () => {
  startVideo();
});
```

### Anwenden von Einschränkungs-Set-Updates

Als Nächstes richten wir einen Event-Listener für die Schaltfläche "Apply Constraints" ein. Wenn er angeklickt wird und keine Medien vorhanden sind, lassen wir `startVideo()` den Stream mit den spezifizierten Einstellungen neu starten. Andernfalls folgen wir diesen Schritten, um die aktualisierten Einschränkungen auf den aktiven Stream anzuwenden:

1. `buildConstraints()` wird aufgerufen, um die aktualisierten [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Audiospur (`audioConstraints`) und die Videospur (`videoConstraints`) zu erstellen.
2. [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) wird auf die Videospur angewandt (falls vorhanden), um die neuen `videoConstraints` zu implementieren. Wenn dies erfolgreich ist, werden die Inhalte der aktuellen Einstellungsbox der Videospur basierend auf dem Ergebnis des Aufrufs seiner Methode [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) aktualisiert.
3. Sobald das erledigt ist, wird `applyConstraints()` auf die Audiospur angewandt (falls vorhanden), um die neuen Audiobeschränkungen zu implementieren. Wenn dies erfolgreich ist, werden die Inhalte der aktuellen Einstellungsbox der Audiospur basierend auf dem Ergebnis des Aufrufs seiner Methode [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) aktualisiert.
4. Wenn ein Fehler bei der Anwendung eines der Beschränkungssätze auftritt, verwenden wir `handleError()`, um eine Nachricht in das Protokoll auszugeben.

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

### Handhabung der Stopp-Schaltfläche

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

Dies stoppt die aktiven Spuren, setzt die Variablen `videoTrack` und `audioTrack` auf `null`, um anzuzeigen, dass sie nicht mehr vorhanden sind, und entfernt den Stream vom {{HTMLElement("video")}}-Element, indem [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) auf `null` gesetzt wird.

### Einfache Tabulatorunterstützung im Editor

Dieser Code fügt einfache Unterstützung für Tabulatoren in den {{HTMLElement("textarea")}}-Elementen hinzu, indem die Tabulatortaste zwei Leerzeichen einfügt, wenn eines der beiden Einschränkungs-Editierfelder fokussiert ist.

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

### Anzeige der vom Browser unterstützen einschränkbaren Eigenschaften

Das letzte bedeutende Stück des Puzzles: Code, der für die Referenz des Benutzers eine Liste der einschränkbaren Eigenschaften anzeigt, die der Browser des Benutzers unterstützt. Jede Eigenschaft ist ein Link zur Dokumentation auf MDN zum Nutzen des Benutzers. Siehe die Beispiele in [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#examples) für Details, wie dieser Code funktioniert.

> [!NOTE]
> Natürlich kann es nicht-standardmäßige Eigenschaften in dieser Liste geben, in diesem Fall werden Sie wahrscheinlich feststellen, dass Ihnen der Dokumentationslink nicht viel hilft.

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

Wir haben auch einen einfachen Fehlerbehandlungscode; `handleError()` wird für die Behandlung von fehlschlagenden Zusagen verwendet, und die Funktion `log()` fügt die Fehlermeldung zu einer speziellen Protokollierung {{HTMLElement("div")}}-Box unter dem Video hinzu.

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

{{EmbedLiveSample("Example_Constraint_exerciser", 650, 1200, , , , "Kamera;Mikrofon")}}

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
