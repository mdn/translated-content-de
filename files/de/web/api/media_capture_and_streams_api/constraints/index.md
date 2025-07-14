---
title: Fähigkeiten, Einschränkungen und Einstellungen
slug: Web/API/Media_Capture_and_Streams_API/Constraints
l10n:
  sourceCommit: e0f97a8a4e8a2fc45f1a7bdc8d1e3f524ccb627d
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel behandelt die beiden Konzepte der **Einschränkungen** und **Fähigkeiten** sowie der Medieneinstellungen und enthält ein Beispiel, das wir den [Constraint Exerciser](#example_constraint_exerciser) nennen. Der Constraint Exerciser ermöglicht es Ihnen, mit den Ergebnissen verschiedener Einschränkungssätze zu experimentieren, die auf die Audio- und Video-Tracks der A/V-Eingabegeräte des Computers (wie Webcam und Mikrofon) angewendet werden.

Historisch gesehen ist das Schreiben von Skripten für das Web, die eng mit Web-APIs arbeiten, mit einer bekannten Herausforderung verbunden: Oft muss Ihr Code wissen, ob eine API existiert und, falls ja, welche Einschränkungen für den {{Glossary("user_agent", "User-Agent")}} gelten, auf dem er ausgeführt wird. Dies herauszufinden war oft schwierig und beinhaltete normalerweise die Prüfung, welcher {{Glossary("user_agent", "User-Agent")}} (oder Browser) verwendet wird, welche Version es ist, ob bestimmte Objekte existieren, ob verschiedene Dinge funktionieren oder nicht und welche Fehler auftreten. Das Ergebnis war viel sehr fragiler Code oder eine Abhängigkeit von Bibliotheken, die dies für Sie herausfinden und dann {{Glossary("polyfill", "Polyfills")}} implementieren, um die Lücken in der Implementierung in Ihrem Namen zu stopfen.

Fähigkeiten und Einschränkungen ermöglichen es dem Browser und der Website oder App, Informationen darüber auszutauschen, welche **einschränkbaren Eigenschaften** die Implementierung des Browsers unterstützt und welche Werte sie für jede unterstützt.

## Überblick

Der Prozess funktioniert folgendermaßen (unter Verwendung von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) als Beispiel):

1. Falls erforderlich, rufen Sie [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) auf, um die Liste der **unterstützten Einschränkungen** zu erhalten. Diese Liste sagt Ihnen, welche einschränkbaren Eigenschaften der Browser kennt. Das ist nicht immer notwendig, da unbekannte einfach ignoriert werden, wenn Sie sie angeben. Wenn es jedoch welche gibt, auf die Sie nicht verzichten können, können Sie damit beginnen, sie zu überprüfen, um sicherzustellen, dass sie auf der Liste stehen.
2. Sobald das Skript weiß, ob die gewünschten Eigenschaften unterstützt werden, kann es die **Fähigkeiten** der API und ihrer Implementierung überprüfen, indem es das Objekt untersucht, das von der Methode `getCapabilities()` des Tracks zurückgegeben wird. Dieses Objekt listet jede unterstützte Einschränkung und die Werte oder Wertebereiche auf, die unterstützt werden.
3. Schließlich wird die Methode `applyConstraints()` des Tracks aufgerufen, um die API wie gewünscht zu konfigurieren, indem die Werte oder Wertebereiche angegeben werden, die sie für eine der einschränkbaren Eigenschaften, über die sie eine Präferenz hat, verwenden möchte.
4. Die Methode `getConstraints()` des Tracks gibt den Satz von Einschränkungen zurück, der beim letzten Aufruf von `applyConstraints()` übergeben wurde. Dies repräsentiert möglicherweise nicht den tatsächlichen aktuellen Zustand des Tracks aufgrund von Eigenschaften, deren angeforderte Werte angepasst werden mussten, und weil Plattform-Standardwerte nicht dargestellt werden. Für eine vollständige Darstellung der aktuellen Konfiguration des Tracks verwenden Sie `getSettings()`.

Im Media Capture and Streams API haben sowohl [`MediaStream`](/de/docs/Web/API/MediaStream) als auch [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) einschränkbare Eigenschaften.

## Feststellen, ob eine Einschränkung unterstützt wird

Wenn Sie wissen müssen, ob eine bestimmte Einschränkung vom User-Agent unterstützt wird, können Sie dies herausfinden, indem Sie [`navigator.mediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) aufrufen, um eine Liste der einschränkbaren Eigenschaften zu erhalten, die der Browser kennt, wie folgt:

```js
const supported = navigator.mediaDevices.getSupportedConstraints();

document.getElementById("frameRateSlider").disabled = !supported["frameRate"];
```

In diesem Beispiel werden die unterstützten Einschränkungen abgerufen, und eine Steuerung, die dem Benutzer die Konfiguration der Bildrate ermöglicht, wird deaktiviert, wenn die Einschränkung `frameRate` nicht unterstützt wird.

## Wie Einschränkungen definiert sind

Eine einzelne Einschränkung ist ein Objekt, dessen Name der einschränkbaren Eigenschaft entspricht, deren gewünschter Wert oder Wertebereich angegeben wird. Dieses Objekt enthält null oder mehr einzelne Einschränkungen sowie ein optionales Unterobjekt namens `advanced`, das eine weitere Menge von null oder mehr Einschränkungen enthält, die der User-Agent erfüllen muss, wenn möglich. Der User-Agent versucht, die Einschränkungen in der im Einschränkungssatz angegebenen Reihenfolge zu erfüllen.

Das Wichtigste, was Sie verstehen müssen, ist, dass die meisten Einschränkungen keine Anforderungen sind; stattdessen sind sie Anfragen. Es gibt Ausnahmen, auf die wir gleich eingehen werden.

### Anfordern eines bestimmten Wertes für eine Einstellung

Die meisten, jede Einschränkung kann ein bestimmter Wert sein, der einen gewünschten Wert für die Einstellung angibt. Zum Beispiel:

```js
const constraints = {
  width: 1920,
  height: 1080,
  aspectRatio: 1.777777778,
};

myTrack.applyConstraints(constraints);
```

In diesem Fall geben die Einschränkungen an, dass beliebige Werte für fast alle Eigenschaften in Ordnung sind, aber eine Standard-High-Definition (HD) Videoauflösung mit dem Standard-Seitenverhältnis 16:9 angestrebt wird. Es gibt keine Garantie, dass der resultierende Track eine dieser Anforderungen erfüllt, aber der User-Agent sollte sein Bestes tun, so viele wie möglich zu erfüllen.

Die Priorisierung der Eigenschaften ist einfach: Wenn zwei Eigenschaften gegensätzliche angeforderte Werte haben, wird die zuerst im Einschränkungssatz aufgeführte verwendet. Wenn der Browser den oben genannten Code ausführt und keinen 1920x1080-Track bereitstellen kann, aber 1920x900 bieten kann, wird das bereitgestellt.

Einfache Einschränkungen wie diese, die einen einzelnen Wert festlegen, werden immer als nicht erforderlich behandelt. Der User-Agent wird versuchen, das zu liefern, was Sie anfordern, aber es wird nicht garantiert, dass das, was Sie erhalten, entspricht. Wenn Sie jedoch einfache Werte für Eigenschaften verwenden, wenn Sie [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufrufen, wird die Anfrage immer erfolgreich sein, da diese Werte als Anfrage und nicht als Anforderung betrachtet werden.

### Einen Wertebereich angeben

Manchmal ist jeder Wert innerhalb eines Bereichs akzeptabel für den Wert einer Eigenschaft. Sie können Bereiche mit entweder oder beidem Mindest- und Höchstwerten angeben, und Sie können sogar einen idealen Wert innerhalb des Bereichs angeben, wenn Sie möchten. Wenn Sie einen idealen Wert angeben, wird der Browser versuchen, so nah wie möglich an diesen Wert heranzukommen, angesichts der anderen angegebenen Einschränkungen.

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

Hier, nachdem sichergestellt wurde, dass die einschränkbaren Eigenschaften, für die Übereinstimmungen gefunden werden müssen, unterstützt werden (`width`, `height`, `frameRate` und `facingMode`), richten wir Einschränkungen ein, die eine Breite nicht kleiner als 640 und nicht größer als 1920 (aber vorzugsweise 1920) anfordern, eine Höhe nicht kleiner als 400 (aber idealerweise 1080), ein Seitenverhältnis von 16:9 (1.777777778) und eine Bildrate von maximal 30 Bildern pro Sekunde. Zusätzlich ist das einzige akzeptable Eingabegerät eine Kamera, die zum Benutzer gerichtet ist (eine "Selfie-Kamera"). Wenn die Einschränkungen `width`, `height`, `frameRate` oder `facingMode` nicht erfüllt werden können, wird das von `applyConstraints()` zurückgegebene Versprechen abgelehnt.

> [!NOTE]
> Einschränkungen, die mit `max`, `min` oder `exact` angegeben werden, werden immer als zwingend behandelt. Wenn eine Einschränkung, die eine oder mehrere davon verwendet, nicht erfüllt werden kann, wenn `applyConstraints()` aufgerufen wird, wird das Versprechen abgelehnt.

### Erweiterte Einschränkungen

Die sogenannten erweiterten Einschränkungen werden durch Hinzufügen einer `advanced`-Eigenschaft zum Einschränkungssatz erstellt; der Wert dieser Eigenschaft ist ein Array zusätzlicher Einschränkungssätze, die als optional betrachtet werden. Es gibt wenige, wenn überhaupt, Anwendungsfälle für dieses Feature, und es besteht Interesse daran, es aus der Spezifikation zu entfernen, daher wird es hier nicht diskutiert. Wenn Sie mehr darüber erfahren möchten, siehe [Abschnitt 11 der Media Capture and Streams-Spezifikation](https://w3c.github.io/mediacapture-main/#constrainable-interface), nach Beispiel 2.

## Überprüfung der Fähigkeiten

Sie können [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) aufrufen, um eine Liste aller unterstützten Fähigkeiten und die Werte oder Bereiche von Werten, die jeder akzeptiert, auf der aktuellen Plattform und dem User-Agent zu erhalten. Diese Funktion gibt ein Objekt zurück, das jede vom Browser unterstützte einschränkbare Eigenschaft und einen Wert oder Bereich von Werten auflistet, die für jede dieser Eigenschaften unterstützt werden.

Beispielsweise führt der folgende Ausschnitt dazu, dass der Benutzer um Erlaubnis gebeten wird, auf seine lokale Kamera und sein Mikrofon zuzugreifen. Sobald die Erlaubnis erteilt wird, werden `MediaTrackCapabilities`-Objekte in die Konsole protokolliert, die die Fähigkeiten jedes [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) im Detail anzeigen:

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

Die erste und häufigste Methode zur Verwendung von Einschränkungen besteht darin, sie anzugeben, wenn Sie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufrufen:

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

In diesem Beispiel werden Einschränkungen zur Zeit von `getUserMedia()` angewendet, wobei ein ideales Set von Optionen mit Fallbacks für das Video angefordert wird.

> [!NOTE]
> Sie können eine oder mehrere Medien-Eingabegeräte-IDs angeben, um Einschränkungen dafür festzulegen, welche Eingabequellen zulässig sind. Um eine Liste der verfügbaren Geräte zu sammeln, können Sie [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen und dann die `deviceId` jedes Geräts, das die gewünschten Kriterien erfüllt, zum `MediaConstraints`-Objekt hinzufügen, das schließlich an `getUserMedia()` übergeben wird.

Sie können auch die Einschränkungen eines bestehenden [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) im laufenden Betrieb ändern, indem Sie die Methode [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) des Tracks aufrufen und ein Objekt übergeben, das die Einschränkungen darstellt, die Sie auf den Track anwenden möchten:

```js
videoTrack.applyConstraints({
  width: 1920,
  height: 1080,
});
```

In diesem Ausschnitt wird der Videotrack, der durch `videoTrack` referenziert wird, aktualisiert, sodass seine Auflösung möglichst eng 1920x1080 Pixel (1080p High Definition) beträgt.

## Abrufen aktueller Einschränkungen und Einstellungen

Es ist wichtig, den Unterschied zwischen **Einschränkungen** und **Einstellungen** zu verstehen. Einschränkungen sind eine Möglichkeit, anzugeben, welche Werte Sie benötigen, wünschen und bereit sind, für die verschiedenen einschränkbaren Eigenschaften zu akzeptieren (wie in der Dokumentation für [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) beschrieben), während Einstellungen die tatsächlichen Werte jeder einschränkbaren Eigenschaft zu einem gegebenen Zeitpunkt sind.

### Abrufen der aktuellen Einschränkungen

Wenn Sie zu irgendeinem Zeitpunkt den Satz von Einschränkungen abrufen müssen, die derzeit auf die Medien angewandt werden, können Sie diese Informationen durch Aufrufen von [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) abrufen, wie im folgenden Beispiel gezeigt.

```js
function switchCameras(track, camera) {
  const constraints = track.getConstraints();
  constraints.facingMode = camera;
  track.applyConstraints(constraints);
}
```

Diese Funktion akzeptiert einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) und eine Zeichenkette, die den zu verwendenden Kamera-Facing-Modus angibt, ruft die aktuellen Einschränkungen ab, setzt den Wert von [`MediaTrackConstraints.facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) auf den angegebenen Wert und wendet den aktualisierten Einschränkungssatz an.

### Abrufen der aktuellen Einstellungen eines Tracks

Es sei denn, Sie verwenden nur genaue Einschränkungen (was ziemlich einschränkend ist, seien Sie also sicher, dass Sie es so meinen!), es gibt keine Garantie, was Sie tatsächlich erhalten, nachdem die Einschränkungen angewendet wurden. Die Werte der einschränkbaren Eigenschaften, wie sie tatsächlich in den resultierenden Medien sind, werden als die Einstellungen bezeichnet. Wenn Sie das tatsächliche Format und andere Eigenschaften der Medien kennen müssen, können Sie diese Einstellungen abrufen, indem Sie [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) aufrufen. Dies gibt ein auf dem Wörterbuch [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) basierendes Objekt zurück. Beispiel:

```js
function whichCamera(track) {
  return track.getSettings().facingMode;
}
```

Diese Funktion verwendet `getSettings()`, um die zurzeit verwendeten Werte der einschränkbaren Eigenschaften des Tracks zu erhalten und gibt den Wert von [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode) zurück.

## Beispiel: Constraint Exerciser

In diesem Beispiel erstellen wir einen Exerciser, der es Ihnen ermöglicht, mit Medieneinschränkungen zu experimentieren, indem Sie den Quellcode ändern, der die Einschränkungssätze für Audio- und Video-Tracks beschreibt. Anschließend können Sie diese Änderungen anwenden und das Ergebnis sehen, einschließlich dessen, wie der Stream aussieht und welche tatsächlichen Medieneinstellungen nach Anwendung der neuen Einschränkungen eingestellt sind.

Das HTML und CSS für dieses Beispiel sind ziemlich einfach und werden hier nicht gezeigt. Sie können den vollständigen Code ansehen, indem Sie auf "Play" klicken, um ihn im Playground anzuzeigen.

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

### Standardwerte und Variablen

Zuerst haben wir die Standard-Einschränkungssätze als Zeichenfolgen. Diese Zeichenfolgen werden in bearbeitbaren {{HTMLElement("textarea")}}s dargestellt, aber dies ist die anfängliche Konfiguration des Streams.

```js
const videoDefaultConstraintString =
  '{\n  "width": 320,\n  "height": 240,\n  "frameRate": 30\n}';
const audioDefaultConstraintString =
  '{\n  "sampleSize": 16,\n  "channelCount": 2,\n  "echoCancellation": false\n}';
```

Diese Standardwerte fordern eine ziemlich allgemeine Kamerakonfiguration an, bestehen jedoch nicht darauf, dass eine bestimmte Eigenschaft von besonderer Bedeutung ist. Der Browser sollte sein Bestes tun, diese Einstellungen zu erfüllen, aber sich mit allem zufriedengeben, was er als nahe Übereinstimmung ansieht.

Dann initialisieren wir die Variablen, die die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Video- und Audiotracks sowie die Variablen, die Referenzen auf die Video- und Audiotracks selbst enthalten werden, mit `null`.

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
  - : Ein {{HTMLElement("div")}}, in den alle Fehlermeldungen oder andere Protokollausgaben geschrieben werden.
- `supportedConstraintList`
  - : Eine {{HTMLElement("ul")}} (ungeordnete Liste), in die wir programmatisch die Namen jeder der vom Benutzer unterstützten einschränkbaren Eigenschaften hinzufügen.
- `videoConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}-Element, das es dem Benutzer ermöglicht, den Code für die Einschränkungssätze des Videotracks zu bearbeiten.
- `audioConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}-Element, das es dem Benutzer ermöglicht, den Code für die Einschränkungssätze des Audiotracks zu bearbeiten.
- `videoSettingsText`
  - : Ein {{HTMLElement("textarea")}} (das immer deaktiviert ist), das die aktuellen Einstellungen für die einschränkbaren Eigenschaften des Videotracks anzeigt.
- `audioSettingsText`
  - : Ein {{HTMLElement("textarea")}} (das immer deaktiviert ist), das die aktuellen Einstellungen für die einschränkbaren Eigenschaften des Audiotracks anzeigt.

Schließlich setzen wir den aktuellen Inhalt der beiden Einschränkungssätze-Editoren auf die Standardwerte.

```js
videoConstraintEditor.value = videoDefaultConstraintString;
audioConstraintEditor.value = audioDefaultConstraintString;
```

### Aktualisierung der Einstellungsanzeige

Rechts von jedem der Einschränkungssatz-Editoren befindet sich ein zweites Textfeld, das wir verwenden, um die aktuelle Konfiguration der konfigurierbaren Eigenschaften des Tracks anzuzeigen. Diese Anzeige wird von der Funktion `getCurrentSettings()` aktualisiert, die die aktuellen Einstellungen für die Audio- und Videotracks erhält und den entsprechenden Code in die Anzeige der Track-Einstellungen durch Setzen ihrer [`value`](/de/docs/Web/API/HTMLTextAreaElement/value) einfügt.

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

Dies wird aufgerufen, nachdem der Stream erstmals gestartet wurde, sowie jedes Mal, wenn wir aktualisierte Einschränkungen angewendet haben, wie Sie weiter unten sehen werden.

### Erstellen der Track-Einschränkungssatzobjekte

Die Funktion `buildConstraints()` erstellt die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Audio- und Videotracks mit dem Code in den beiden Editoren der Einschränkungssätze.

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

Dies verwendet {{jsxref("JSON.parse()")}}, um den Code in jedem Editor in ein Objekt zu parsen. Wenn einer der Aufrufe von JSON.parse() eine Ausnahme auslöst, wird `handleError()` aufgerufen, um die Fehlermeldung in das Protokoll einzutragen.

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

Es gibt mehrere Schritte hier:

1. Sie ruft `buildConstraints()` auf, um die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die beiden Tracks aus dem Code in den Editoren zu erstellen.
2. Sie ruft [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf und übergibt dabei die Einschränkungsobjekte für die Video- und Audiotracks. Dies gibt einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit dem Audio und Video von einer Quelle zurück, die den Eingaben entspricht (normalerweise eine Webcam, obwohl Sie bei Angabe der richtigen Einschränkungen Medien von anderen Quellen erhalten können).
3. Wenn der Stream erhalten wird, wird er an das {{HTMLElement("video")}}-Element angehängt, damit er auf dem Bildschirm sichtbar ist, und wir erhalten den Audiotrack und Videotrack in die Variablen `audioTrack` und `videoTrack`.
4. Dann richten wir ein Versprechen ein, das aufgelöst wird, wenn das [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)-Ereignis auf dem Videoelement auftritt.
5. Wenn dies geschieht, wissen wir, dass das Video zu spielen begonnen hat, daher rufen wir unsere Funktion `getCurrentSettings()` (oben beschrieben) auf, um die tatsächlichen Einstellungen anzuzeigen, die der Browser festgelegt hat, nachdem es unsere Einschränkungen und die Fähigkeiten der Hardware berücksichtigt hat.
6. Wenn ein Fehler auftritt, protokollieren wir ihn mit der Methode `handleError()`, die wir weiter unten in diesem Artikel betrachten werden.

Wir müssen auch einen Event-Listener einrichten, um zu überwachen, wann der "Start Video"-Button geklickt wird:

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

Als nächstes richten wir einen Event-Listener für den "Apply Constraints"-Button ein. Wenn er geklickt wird und noch keine Medien verwendet werden, rufen wir `startVideo()` auf und lassen diese Funktion den Stream mit den angegebenen Einstellungen starten. Andernfalls folgen wir diesen Schritten, um die aktualisierten Einschränkungen auf den bereits aktiven Stream anzuwenden:

1. `buildConstraints()` wird aufgerufen, um aktualisierte [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für den Audiotrack (`audioConstraints`) und den Videotrack (`videoConstraints`) zu erstellen.
2. [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) wird auf dem Videotrack (falls einer vorhanden ist) aufgerufen, um die neuen `videoConstraints` anzuwenden. Wenn dies gelingt, werden die Inhalte des aktuellen Einstellungsfeldes des Videotracks basierend auf dem Ergebnis des Aufrufs seiner Methode [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) aktualisiert.
3. Sobald dies erledigt ist, wird `applyConstraints()` auf dem Audiotrack (falls einer vorhanden ist) aufgerufen, um die neuen Audioeinstellungen anzuwenden. Wenn dies gelingt, werden die Inhalte des aktuellen Einstellungsfeldes des Audiotracks basierend auf dem Ergebnis des Aufrufs seiner Methode [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) aktualisiert.
4. Wenn ein Fehler beim Anwenden einer der beiden Einschränkungssätze auftritt, wird `handleError()` verwendet, um eine Nachricht in das Protokoll auszugeben.

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

Dies stoppt die aktiven Tracks, setzt die Variablen `videoTrack` und `audioTrack` auf `null`, um zu wissen, dass sie entfernt wurden, und entfernt den Stream aus dem {{HTMLElement("video")}}-Element, indem [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) auf `null` gesetzt wird.

### Einfache Tab-Unterstützung im Editor

Dieser Code fügt den {{HTMLElement("textarea")}}-Elementen eine einfache Unterstützung für Tabs hinzu, indem die Tabulatortaste beim Fokussieren eines der beiden Editoren zwei Leerzeichen einfügt.

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

Das letzte bedeutende Stück des Puzzles: Code, der dem Benutzer, als Referenz, eine Liste der einschränkbaren Eigenschaften anzeigt, die ihr Browser unterstützt. Jede Eigenschaft ist ein Link zur entsprechenden Dokumentation auf MDN für die Bequemlichkeit des Benutzers. Weitere Informationen zur Funktionsweise dieses Codes finden Sie in den [Beispielen zu `MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#examples).

> [!NOTE]
> Natürlich kann es nicht-standardisierte Eigenschaften in dieser Liste geben, in diesem Fall werden Sie wahrscheinlich feststellen, dass der Dokumentationslink nicht viel hilft.

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

Wir haben auch einfachen Code zur Fehlerbehandlung; `handleError()` wird aufgerufen, um gescheiterte Versprechen zu verwalten, und die Funktion `log()` fügt die Fehlermeldung in ein spezielles Protokoll-{{HTMLElement("div")}}-Feld unter dem Video ein.

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
