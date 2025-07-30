---
title: Fähigkeiten, Einschränkungen und Einstellungen
slug: Web/API/Media_Capture_and_Streams_API/Constraints
l10n:
  sourceCommit: 9c2c116a665347cc25ce024bf4983beef88373c1
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel behandelt die beiden Konzepte **Einschränkungen** und **Fähigkeiten** sowie Medieneinstellungen und enthält ein Beispiel, das wir [Constraint Exerciser](#example_constraint_exerciser) nennen. Der Constraint Exerciser ermöglicht es Ihnen, mit den Ergebnissen verschiedener Einschränkungssätze zu experimentieren, die auf die Audio- und Videospuren von den A/V-Eingabegeräten des Computers (wie die Webcam und das Mikrofon) angewendet werden.

Historisch gesehen stellte das Schreiben von Skripten für das Web, die eng mit Web-APIs arbeiten, eine bekannte Herausforderung dar: Häufig muss Ihr Code wissen, ob eine API existiert und falls ja, welche Einschränkungen der {{Glossary("user_agent", "User-Agent")}}, auf dem er läuft, hat. Dies herauszufinden war oft schwierig und erforderte in der Regel eine Kombination von Faktoren: Auf welchem {{Glossary("user_agent", "User-Agent")}} (oder Browser) läuft Ihr Code, welche Version ist es, gibt es bestimmte Objekte, funktionieren verschiedene Dinge oder nicht, und welche Fehler treten auf? Das Ergebnis war viel sehr anfälliger Code oder eine Abhängigkeit von Bibliotheken, die dies für Sie herausfinden, und dann {{Glossary("polyfill", "Polyfills")}} implementieren, um die Lücken in der Implementierung in Ihrem Namen zu schließen.

Fähigkeiten und Einschränkungen ermöglichen es dem Browser und der Website oder App, Informationen darüber auszutauschen, welche **einschränkbaren Eigenschaften** die Implementierung des Browsers unterstützt und welche Werte sie für jede unterstützt.

## Überblick

Der Prozess funktioniert so (unter Verwendung von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) als Beispiel):

1. Falls erforderlich, rufen Sie [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) auf, um die Liste der **unterstützten Einschränkungen** zu erhalten, die Ihnen mitteilt, welche einschränkbaren Eigenschaften dem Browser bekannt sind. Dies ist nicht immer notwendig, da alle, die nicht bekannt sind, ignoriert werden, wenn Sie sie angeben. Wenn es jedoch welche gibt, auf die Sie nicht verzichten können, können Sie damit beginnen, zu überprüfen, ob sie auf der Liste stehen.
2. Sobald das Skript weiß, ob die Eigenschaft oder Eigenschaften, die es verwenden möchte, unterstützt werden, kann es die **Fähigkeiten** der API und ihrer Implementierung überprüfen, indem es das vom Track zurückgegebene Objekt durch die `getCapabilities()`-Methode untersucht; dieses Objekt listet jede unterstützte Einschränkung und die Werte oder Wertbereiche auf, die unterstützt werden.
3. Schließlich wird die Methode `applyConstraints()` des Tracks aufgerufen, um die API wie gewünscht zu konfigurieren, indem die Werte oder Wertbereiche angegeben werden, die für alle einschränkbaren Eigenschaften, über die es eine Präferenz hat, verwendet werden sollen.
4. Die Methode `getConstraints()` des Tracks gibt die Menge der Einschränkungen zurück, die bei dem letzten Aufruf von `applyConstraints()` übergeben wurden. Dies spiegelt möglicherweise nicht den tatsächlichen aktuellen Zustand des Tracks wider, da Eigenschaften, deren angeforderte Werte angepasst werden mussten und weil Standardwerte der Plattform nicht dargestellt werden. Für eine vollständige Darstellung der aktuellen Konfiguration des Tracks verwenden Sie `getSettings()`.

In der Media Capture and Streams API haben sowohl [`MediaStream`](/de/docs/Web/API/MediaStream) als auch [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) einschränkbare Eigenschaften.

## Bestimmen, ob eine Einschränkung unterstützt wird

Falls Sie feststellen müssen, ob eine bestimmte Einschränkung vom User-Agent unterstützt wird, können Sie dies herausfinden, indem Sie [`navigator.mediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) aufrufen, um eine Liste der einschränkbaren Eigenschaften zu erhalten, die der Browser kennt, wie folgt:

```js
const supported = navigator.mediaDevices.getSupportedConstraints();

document.getElementById("frameRateSlider").disabled = !supported["frameRate"];
```

In diesem Beispiel werden die unterstützten Einschränkungen abgerufen, und ein Steuerungselement, das dem Benutzer ermöglicht, die Bildrate zu konfigurieren, wird deaktiviert, wenn die Einschränkung `frameRate` nicht unterstützt wird.

## Wie Einschränkungen definiert sind

Eine einzelne Einschränkung ist ein Objekt, dessen Name mit der einschränkbaren Eigenschaft übereinstimmt, deren gewünschter Wert oder Wertebereich angegeben wird. Dieses Objekt enthält null oder mehr individuelle Einschränkungen sowie ein optionales Unterobjekt mit dem Namen `advanced`, das einen weiteren Satz von null oder mehr Einschränkungen enthält, die der User-Agent erfüllen muss, wenn möglich. Der User-Agent versucht, die Einschränkungen in der im Einschränkungssatz angegebenen Reihenfolge zu erfüllen.

Das Wichtigste, das zu verstehen ist, ist, dass die meisten Einschränkungen keine Anforderungen sind; sie sind stattdessen Anfragen. Es gibt Ausnahmen, auf die wir gleich noch eingehen werden.

### Anfordern eines bestimmten Werts für eine Einstellung

Bei den meisten Einschränkungen kann es sich um einen bestimmten Wert handeln, der einen gewünschten Wert für die Einstellung angibt. Zum Beispiel:

```js
const constraints = {
  width: 1920,
  height: 1080,
  aspectRatio: 1.777777778,
};

myTrack.applyConstraints(constraints);
```

In diesem Fall geben die Einschränkungen an, dass jede Werte für fast alle Eigenschaften in Ordnung sind, aber eine standardmäßige High-Definition (HD) Videogröße erwünscht ist, mit dem standardmäßigen 16:9 {{Glossary("aspect_ratio", "Seitenverhältnis")}}. Es gibt keine Garantie dafür, dass die resultierende Spur mit einer dieser übereinstimmt, aber der User-Agent sollte sein Bestes tun, um so viele wie möglich zu erfüllen.

Die Priorisierung der Eigenschaften ist einfach: Wenn zwei Eigenschaften widersprüchliche angeforderte Werte haben, wird die zuerst in der Einschränkungsliste aufgeführte verwendet. Als Beispiel: Wenn der Browser, der den oben genannten Code ausführt, keine 1920x1080 Spur liefern könnte, aber 1920x900 möglich wäre, dann würde dies bereitgestellt werden.

Einfache Einschränkungen wie diese, die einen einzelnen Wert angeben, werden immer als nicht erforderlich behandelt. Der User-Agent wird versuchen, das Gewünschte bereitzustellen, aber es ist nicht garantiert, dass das Ergebnis übereinstimmt. Wenn Sie jedoch einfache Werte für Eigenschaften beim Aufruf der Methode [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) verwenden, wird die Anfrage immer erfolgreich sein, weil diese Werte als Anfrage und nicht als Anforderung betrachtet werden.

### Festlegen eines Wertebereichs

Manchmal ist jeder Wert innerhalb eines Bereichs für einen Eigenschaftswert akzeptabel. Sie können Bereiche mit entweder oder sowohl Mindest- als auch Höchstwerten festlegen, und Sie können, falls gewünscht, einen Idealwert innerhalb des Bereichs angeben. Wenn Sie einen Idealwert angeben, wird der Browser versuchen, so nah wie möglich an diesen Wert heranzukommen, unter Berücksichtigung der anderen festgelegten Einschränkungen.

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

Hier setzen wir, nachdem sichergestellt wurde, dass die einschränkbaren Eigenschaften, für die Übereinstimmungen gefunden werden müssen, unterstützt werden (`width`, `height`, `frameRate` und `facingMode`), Einschränkungen, die eine Breite von nicht weniger als 640 und nicht mehr als 1920 (aber vorzugsweise 1920) anfordern, eine Höhe von nicht weniger als 400 (aber idealerweise 1080), ein Seitenverhältnis von 16:9 (1.777777778) und eine Bildrate von maximal 30 Bildern pro Sekunde. Außerdem ist das einzige akzeptable Eingabegerät eine nach vorn gerichtete Kamera (eine "Selfie-Kamera"). Wenn die Einschränkungen `width`, `height`, `frameRate` oder `facingMode` nicht erfüllt werden können, wird das bei `applyConstraints()` zurückgegebene Versprechen abgelehnt.

> [!NOTE]
> Einschränkungen, die unter Verwendung von `max`, `min` oder `exact` angegeben werden, werden immer als verpflichtend behandelt. Wenn eine Einschränkung, die eine dieser Optionen verwendet, bei einem Aufruf von `applyConstraints()` nicht erfüllt werden kann, wird das Versprechen abgelehnt.

### Erweiterte Einschränkungen

Die sogenannten erweiterten Einschränkungen werden erstellt, indem der Einschränkungssammlung eine `advanced`-Eigenschaft hinzugefügt wird; der Wert dieser Eigenschaft ist ein Array zusätzlicher Einschränkungssätze, die als optional betrachtet werden. Für diese Funktion gibt es nur wenige, wenn überhaupt, Anwendungsfälle, und es besteht Interesse daran, sie aus der Spezifikation zu entfernen, daher wird sie hier nicht behandelt. Wenn Sie mehr erfahren möchten, lesen Sie [Abschnitt 11 der Media Capture and Streams-Spezifikation](https://w3c.github.io/mediacapture-main/#constrainable-interface), hinter Beispiel 2.

## Überprüfen der Fähigkeiten

Sie können [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) aufrufen, um eine Liste aller unterstützten Fähigkeiten und der Werte oder Wertebereiche zu erhalten, die jede von ihnen auf der aktuellen Plattform und dem aktuellen User-Agent akzeptiert. Diese Funktion gibt ein Objekt zurück, das jede einschränkbare Eigenschaft auflistet, die vom Browser unterstützt wird und einen Wert oder Wertebereich, der für jede dieser Eigenschaften unterstützt wird.

Beispielsweise wird durch den folgenden Schnipsel der Benutzer um Erlaubnis gebeten, auf die lokale Kamera und das Mikrofon zuzugreifen. Sobald die Erlaubnis erteilt ist, werden `MediaTrackCapabilities`-Objekte an die Konsole ausgegeben, die die Fähigkeiten jedes [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) detailliert beschreiben:

```js
navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    const tracks = stream.getTracks();
    tracks.map((t) => console.log(t.getCapabilities()));
  });
```

Ein Beispiel für ein Fähigkeitenobjekt sieht folgendermaßen aus:

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

Der exakte Inhalt des Objekts hängt vom Browser und der Medienhardware ab.

## Anwenden von Einschränkungen

Die erste und häufigste Methode, Einschränkungen anzuwenden, besteht darin, sie anzugeben, wenn Sie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufrufen:

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

In diesem Beispiel werden Einschränkungen zur Zeit von `getUserMedia()` angewendet, indem ein ideales Optionsset mit Fallbacks für das Video angefordert wird.

> [!NOTE]
> Sie können eine oder mehrere Medien-Eingabe-Geräte-IDs angeben, um Einschränkungen darüber zu verhängen, welche Eingabequellen erlaubt sind. Um eine Liste der verfügbaren Geräte zu sammeln, können Sie [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen und dann für jedes Gerät, das die gewünschten Kriterien erfüllt, die `deviceId` dem `MediaConstraints`-Objekt hinzufügen, das schließlich in `getUserMedia()` übergeben wird.

Sie können die Einschränkungen eines vorhandenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auch dynamisch ändern, indem Sie die Methode [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) des Tracks aufrufen und ein Objekt übergeben, das die Einschränkungen darstellt, die Sie auf den Track anwenden möchten:

```js
videoTrack.applyConstraints({
  width: 1920,
  height: 1080,
});
```

In diesem Schnipsel wird die Videospur, die durch `videoTrack` referenziert wird, aktualisiert, sodass ihre Auflösung so nah wie möglich an 1920x1080 Pixel (1080p High Definition) heranreicht.

## Abrufen aktueller Einschränkungen und Einstellungen

Es ist wichtig, den Unterschied zwischen **Einschränkungen** und **Einstellungen** zu verstehen. Einschränkungen sind eine Möglichkeit, anzugeben, welche Werte Sie für die verschiedenen einschränkbaren Eigenschaften benötigen, wünschen und akzeptieren können (wie in der Dokumentation zu [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) beschrieben), während Einstellungen die tatsächlichen Werte jeder einschränkbaren Eigenschaft zu einem bestimmten Zeitpunkt sind.

### Abrufen der in Kraft befindlichen Einschränkungen

Wenn Sie zu irgendeinem Zeitpunkt die Menge der Einschränkungen abrufen müssen, die derzeit auf die Medien angewendet werden, können Sie diese Informationen durch Aufruf von [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) erhalten, wie im folgenden Beispiel gezeigt.

```js
function switchCameras(track, camera) {
  const constraints = track.getConstraints();
  constraints.facingMode = camera;
  track.applyConstraints(constraints);
}
```

Diese Funktion akzeptiert einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) und einen String, der angibt, welcher Kameramodus verwendet werden soll, holt die aktuellen Einschränkungen, setzt den Wert des [`MediaTrackConstraints.facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) auf den angegebenen Wert und wendet den aktualisierten Einschränkungssatz an.

### Abrufen der aktuellen Einstellungen für eine Spur

Es gibt keine Garantie, was genau Sie erhalten, nachdem die Einschränkungen angewendet wurden, es sei denn, Sie verwenden nur exakte Einschränkungen (was ziemlich restriktiv ist, also vergewissern Sie sich, dass Sie es ernst meinen!). Die Werte der einschränkbaren Eigenschaften, wie sie tatsächlich im resultierenden Medium sind, werden als Einstellungen bezeichnet. Wenn Sie das tatsächliche Format und die anderen Eigenschaften des Mediums kennen müssen, können Sie diese Einstellungen durch Aufruf von [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) erhalten. Dies gibt ein Objekt basierend auf dem Wörterbuch [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) zurück. Zum Beispiel:

```js
function whichCamera(track) {
  return track.getSettings().facingMode;
}
```

Diese Funktion verwendet `getSettings()`, um die aktuell verwendeten Werte der einschränkbaren Eigenschaften der Spur zu erhalten und gibt den Wert von [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode) zurück.

## Beispiel: Constraint Exerciser

In diesem Beispiel erstellen wir einen Exerciser, der es Ihnen ermöglicht, mit Medieneinschränkungen zu experimentieren, indem Sie den Quellcode, der die Einschränkungssätze für Audio- und Videospuren beschreibt, bearbeiten. Sie können diese Änderungen dann anwenden und das Ergebnis sehen, einschließlich wie der Stream aussieht und welche tatsächlichen Medieneinstellungen nach dem Anwenden der neuen Einschränkungen festgelegt sind.

Das HTML und CSS für dieses Beispiel ist ziemlich einfach und wird hier nicht gezeigt. Sie können den vollständigen Code ansehen, indem Sie auf "Play" klicken, um es im Playground anzuzeigen.

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

Zuerst haben wir die Standard-Einschränkungssätze als Strings. Diese Strings werden in editierbaren {{HTMLElement("textarea")}}s präsentiert, dies ist jedoch die anfängliche Konfiguration des Streams.

```js
const videoDefaultConstraintString =
  '{\n  "width": 320,\n  "height": 240,\n  "frameRate": 30\n}';
const audioDefaultConstraintString =
  '{\n  "sampleSize": 16,\n  "channelCount": 2,\n  "echoCancellation": false\n}';
```

Diese Standardwerte bitten um eine sehr gängige Kamerakonfiguration, bestehen jedoch nicht darauf, dass eine Eigenschaft besonders wichtig ist. Der Browser sollte sein Bestes tun, um diese Einstellungen zu erfüllen, sich jedoch mit allem zufriedengeben, was er als nah genug ansieht.

Dann initialisieren wir die Variablen, die die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Video- und Audiotracks enthalten werden, sowie die Variablen für Verweise auf die Video- und Audiotracks selbst, auf `null`.

```js
let videoConstraints = null;
let audioConstraints = null;

let audioTrack = null;
let videoTrack = null;
```

Und wir erhalten Referenzen zu allen Elementen, die wir benötigen werden.

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
  - : Das {{HTMLElement("video")}}-Element, das den Stream zeigen wird.
- `logElement`
  - : Ein {{HTMLElement("div")}}, in das Fehlermeldungen oder andere log-ähnliche Ausgaben geschrieben werden.
- `supportedConstraintList`
  - : Ein {{HTMLElement("ul")}} (ungeordnete Liste), in die wir die Namen jeder der einschränkbaren Eigenschaften hinzufügen, die der Browser des Benutzers unterstützt.
- `videoConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}-Element, das den Benutzern ermöglicht, den Code des Einschränkungssatzes der Videospur zu bearbeiten.
- `audioConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}-Element, das den Benutzern ermöglicht, den Code des Einschränkungssatzes der Audiospur zu bearbeiten.
- `videoSettingsText`
  - : Ein immer deaktiviertes {{HTMLElement("textarea")}}, das die aktuellen Einstellungen für die einschränkbaren Eigenschaften der Videospur anzeigt.
- `audioSettingsText`
  - : Ein immer deaktiviertes {{HTMLElement("textarea")}}, das die aktuellen Einstellungen für die einschränkbaren Eigenschaften der Audiospur anzeigt.

Schließlich setzen wir den aktuellen Inhalt der zwei Einschränkungssatzelemente auf die Standardwerte.

```js
videoConstraintEditor.value = videoDefaultConstraintString;
audioConstraintEditor.value = audioDefaultConstraintString;
```

### Aktualisieren der Einstellungsausgabe

Rechts von jedem Anzeige-Editor der Einschränkungssätze befindet sich ein zweites Textfeld, das wir verwenden, um die aktuelle Konfiguration der konfigurierbaren Eigenschaften der Spur anzuzeigen. Diese Anzeige wird von der Funktion `getCurrentSettings()` aktualisiert, die die aktuellen Einstellungen für die Audio- und Videospuren abruft und den entsprechenden Code in die Anzeige-Boxen der Spur-Einstellungen einfügt, indem sie den [`value`](/de/docs/Web/API/HTMLTextAreaElement/value) setzt.

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

### Erstellen der Objekte für die Track-Einschränkungssätze

Die Funktion `buildConstraints()` erstellt die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Audio- und Videotracks unter Verwendung des Codes in den beiden Bearbeitungsboxen der Einschränkungssätze der Tracks.

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

Dies verwendet {{jsxref("JSON.parse()")}}, um den Code in jedem Editor in ein Objekt umzuwandeln. Wenn einer der Aufrufe von JSON.parse() eine Ausnahme auslöst, wird `handleError()` aufgerufen, um die Fehlermeldung in das Log auszugeben.

### Konfigurieren und Starten des Streams

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

Hier gibt es mehrere Schritte:

1. Es ruft `buildConstraints()` auf, um die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die beiden Tracks aus dem Code in den Bearbeitungsfeldern zu erstellen.
2. Es ruft [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf und übergibt dabei die Einschränkungsobjekte für die Video- und Audiotracks. Dies gibt einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit dem Audio und Video von einer Quelle zurück, die den Eingaben entspricht (in der Regel eine Webcam, obwohl Sie, wenn Sie die richtigen Einschränkungen angeben, Medien von anderen Quellen erhalten können).
3. Wenn der Stream abgerufen wird, wird er dem {{HTMLElement("video")}}-Element beigefügt, sodass er auf dem Bildschirm sichtbar ist, und wir holen den Audiotrack und Videotrack in die Variablen `audioTrack` und `videoTrack`.
4. Dann richten wir ein Versprechen ein, das aufgelöst wird, wenn das [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)-Ereignis auf dem Videoelement eintritt.
5. Wenn dies geschieht, wissen wir, dass das Video zu spielen begonnen hat, sodass wir unsere Funktion `getCurrentSettings()` (oben beschrieben) aufrufen, um die tatsächlichen Einstellungen anzuzeigen, die der Browser nach Berücksichtigung unserer Einschränkungen und der Fähigkeiten der Hardware entschieden hat.
6. Wenn ein Fehler auftritt, loggen wir diesen mit der Methode `handleError()`, die wir weiter unten in diesem Artikel betrachten.

Wir müssen auch einen Ereignis-Listener einrichten, um auf das Klicken auf die Schaltfläche "Video starten" zu reagieren:

```js
document.getElementById("startButton").addEventListener(
  "click",
  () => {
    startVideo();
  },
  false,
);
```

### Anwenden von Updates auf die Einschränkungssätze

Als Nächstes richten wir einen Ereignis-Listener für die Schaltfläche "Einschränkungen anwenden" ein. Wenn darauf geklickt wird und noch keine Medien verwendet werden, rufen wir `startVideo()` auf und überlassen dieser Funktion die Handhabung des Startens des Streams mit den spezifischen Einstellungen. Andernfalls gehen wir wie folgt vor, um die aktualisierten Einschränkungen auf den bereits aktiven Stream anzuwenden:

1. `buildConstraints()` wird aufgerufen, um aktualisierte [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Audiospur (`audioConstraints`) und die Videospur (`videoConstraints`) aus dem Code in den Bearbeitungsfeldern zu erstellen.
2. [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) wird für den Videotrack (falls vorhanden) aufgerufen, um die neuen `videoConstraints` anzuwenden. Wenn dies erfolgreich ist, wird der Inhalt des aktuellen Einstellungsfeldes der Videospur basierend auf dem Ergebnis des Aufrufs ihrer Methode [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) aktualisiert.
3. Sobald dies erledigt ist, wird `applyConstraints()` auf dem Audiotrack (falls vorhanden) aufgerufen, um die neuen Audioeinschränkungen anzuwenden. Wenn dies erfolgreich ist, wird der Inhalt des aktuellen Einstellungsfeldes der Audiospur basierend auf dem Ergebnis des Aufrufs ihrer Methode [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) aktualisiert.
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

### Die Stopp-Schaltfläche handhaben

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

Dies stoppt die aktiven Tracks, setzt die Variablen `videoTrack` und `audioTrack` auf `null`, damit wir wissen, dass sie weg sind, und entfernt den Stream aus dem {{HTMLElement("video")}}-Element, indem die [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) auf `null` gesetzt wird.

### Einfache Tabulator-Unterstützung im Editor

Dieser Code fügt den {{HTMLElement("textarea")}}-Elementen eine einfache Unterstützung für Tabs hinzu, indem er die Tabulatortaste zwei Leerzeichen einfügen lässt, wenn entweder das Einschränkungsbearbeitungsfeld fokussiert ist.

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

Das letzte bedeutende Stück des Puzzles: Code, das zur Darstellung, als Referenz für den Benutzer, eine Liste der einschränkbaren Eigenschaften anzeigt, die der Browser des Benutzers unterstützt. Jede Eigenschaft ist ein Link zu ihrer Dokumentation auf MDN zur Bequemlichkeit des Benutzers. Siehe die Beispiele zu [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#examples) für Details zur Funktionsweise dieses Codes.

> [!NOTE]
> Natürlich, könnte es nicht standardisierte Eigenschaften in dieser Liste geben, in diesem Fall werden Sie wahrscheinlich feststellen, dass der Dokumentationslink nicht viel hilft.

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

Wir haben auch einfachen Code zur Fehlerbehandlung; `handleError()` wird aufgerufen, um fehlgeschlagene Versprechen zu behandeln, und die Funktion `log()` fügt die Fehlermeldung einer speziellen Protokoll-{{HTMLElement("div")}}-Box unter dem Video hinzu.

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
