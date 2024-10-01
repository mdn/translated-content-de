---
title: Fähigkeiten, Einschränkungen und Einstellungen
slug: Web/API/Media_Capture_and_Streams_API/Constraints
l10n:
  sourceCommit: b07efa13f8459a44a2cbc7b6cdb3279967565e63
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel behandelt die beiden Konzepte der **Einschränkungen** und **Fähigkeiten**, sowie Medien-Einstellungen und enthält ein Beispiel, das wir den [Constraint-Übenden](#example_constraint_exerciser) nennen. Der Constraint-Übende ermöglicht es Ihnen, mit den Ergebnissen verschiedener Einschränkungssets zu experimentieren, die auf die Audio- und Video-Spuren angewendet werden, die von den A/V-Eingabegeräten des Computers kommen (wie z.B. der Webcam und dem Mikrofon).

Historisch gesehen hatte das Schreiben von Skripten für das Web, die eng mit Web-APIs interagieren, eine bekannte Herausforderung: Oft muss Ihr Code wissen, ob eine API existiert und falls ja, welche Einschränkungen sie auf dem Benutzeragenten, auf dem sie läuft, hat. Dies herauszufinden war oft schwierig und umfasste normalerweise eine Kombination aus der Überprüfung, welcher {{Glossary("user_agent", "Benutzeragent")}} (oder Browser) verwendet wird, welche Version er hat, das Vorhandensein bestimmter Objekte zu überprüfen, zu versuchen festzustellen, ob verschiedene Sachen funktionieren oder nicht, und welche Fehler auftreten. Das Ergebnis war viel sehr fragiler Code oder eine Abhängigkeit von Bibliotheken, die dies für Sie herausfinden und dann {{Glossary("polyfill", "Polyfills")}} implementieren, um die Lücken in der Implementierung in Ihrem Namen zu füllen.

Fähigkeiten und Einschränkungen lassen den Browser und die Website oder App Informationen darüber austauschen, welche **begrenzt veränderbaren Eigenschaften** die Implementierung des Browsers unterstützt und welche Werte sie für jede unterstützt.

## Übersicht

Der Prozess funktioniert folgendermaßen (am Beispiel von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)):

1. Falls erforderlich, rufen Sie [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) auf, um die Liste der **unterstützten Einschränkungen** zu erhalten, die Ihnen mitteilen, welche begrenzten Eigenschaften der Browser kennt. Dies ist nicht immer notwendig, da alle unbekannten ignoriert werden, wenn Sie diese angeben – aber wenn Sie welche haben, die Sie unbedingt benötigen, können Sie überprüfen, ob sie auf der Liste stehen.
2. Sobald das Skript weiß, ob die Eigenschaft oder Eigenschaften, die es verwenden möchte, unterstützt werden, kann es die **Fähigkeiten** der API und deren Implementierung prüfen, indem es das Objekt untersucht, das von der `getCapabilities()`-Methode der Spur zurückgegeben wird; dieses Objekt listet jede unterstützte Einschränkung und die Werte oder Bereichen von Werten auf, die unterstützt werden.
3. Schließlich wird die `applyConstraints()`-Methode der Spur aufgerufen, um die API nach Wunsch zu konfigurieren, indem die Werte oder Bereiche von Werten angegeben werden, die für eine der begrenzten Eigenschaften verwendet werden sollen, über die es eine Präferenz hat.
4. Die Methode `getConstraints()` der Spur gibt das Set von Einschränkungen zurück, das beim letzten Aufruf von `applyConstraints()` übergeben wurde. Dies kann möglicherweise nicht den tatsächlichen aktuellen Zustand der Spur repräsentieren, aufgrund von Eigenschaften, deren angeforderte Werte angepasst werden mussten, und da Plattform-Standardwerte nicht dargestellt werden. Für eine vollständige Darstellung der aktuellen Konfiguration der Spur verwenden Sie `getSettings()`.

In der Media Capture and Streams API haben sowohl [`MediaStream`](/de/docs/Web/API/MediaStream) als auch [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) begrenzte Eigenschaften.

## Bestimmen, ob eine Einschränkung unterstützt wird

Falls Sie wissen müssen, ob eine bestimmte Einschränkung vom Benutzeragenten unterstützt wird, können Sie dies herausfinden, indem Sie [`navigator.mediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) aufrufen, um eine Liste der begrenzten Eigenschaften zu erhalten, die der Browser kennt, so wie hier:

```js
const supported = navigator.mediaDevices.getSupportedConstraints();

document.getElementById("frameRateSlider").disabled = !supported["frameRate"];
```

In diesem Beispiel werden die unterstützten Einschränkungen abgerufen, und ein Steuerelement, das es dem Benutzer ermöglicht, die Bildrate zu konfigurieren, wird deaktiviert, wenn die `frameRate`-Einschränkung nicht unterstützt wird.

## Wie Einschränkungen definiert sind

Eine einzige Einschränkung ist ein Objekt, dessen Name mit der begrenzten Eigenschaft übereinstimmt, deren gewünschter Wert oder Wertebereich angegeben wird. Dieses Objekt enthält null oder mehr einzelne Einschränkungen sowie ein optionales Unterobjekt mit dem Namen `advanced`, das ein weiteres Set aus null oder mehr Einschränkungen enthält, die der Benutzeragent, sofern möglich, erfüllen muss. Der Benutzeragent versucht, Einschränkungen in der im Einschränkungs-Set angegebenen Reihenfolge zu erfüllen.

Das Wichtigste, das man verstehen muss, ist, dass die meisten Einschränkungen keine Anforderungen sind; stattdessen sind sie Anfragen. Es gibt Ausnahmen, und zu diesen kommen wir gleich.

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

In diesem Fall zeigen die Einschränkungen an, dass für fast alle Eigenschaften beliebige Werte in Ordnung sind, jedoch ist eine Standard-High-Definition-Video-Größe (HD) mit dem Standard-16:9-{{Glossary("aspect_ratio", "Seitenverhältnis")}} erwünscht. Es gibt keine Garantie dafür, dass die resultierende Spur irgendeine dieser Anforderungen erfüllt, aber der Benutzeragent sollte sein Bestes tun, um so viele wie möglich zu erfüllen.

Die Priorisierung der Eigenschaften ist einfach: Wenn die angeforderten Werte zweier Eigenschaften einander ausschließen, wird die erstgenannte im Einschränkungs-Set verwendet. Als Beispiel, wenn der Browser, der diesen Code ausführt, keine 1920x1080-Spur bereitstellen kann, aber 1920x900 möglich ist, wird letzteres bereitgestellt.

Einfache Einschränkungen wie diese, die einen einzelnen Wert angeben, werden immer als nicht zwingend betrachtet. Der Benutzeragent wird versuchen, das zu liefern, was Sie anfordern, wird jedoch nicht garantieren, dass das Gelieferte übereinstimmen wird. Wenn Sie jedoch einfache Werte für Eigenschaften verwenden, wenn Sie [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufrufen, wird die Anfrage immer erfolgreich sein, weil diese Werte als Anfrage, nicht als Anforderung, betrachtet werden.

### Festlegen eines Wertebereichs

Manchmal ist ein beliebiger Wert innerhalb eines Bereichs für den Wert einer Eigenschaft akzeptabel. Sie können Bereiche mit entweder oder beiden Mindest- und Höchstwerten angeben und sogar einen idealen Wert innerhalb des Bereichs festlegen, wenn Sie möchten. Wenn Sie einen idealen Wert angeben, wird der Browser versuchen, diesen Wert so genau wie möglich zu erreichen, unter Berücksichtigung der anderen angegebenen Einschränkungen.

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

Hier, nachdem sichergestellt wurde, dass die begrenzten Eigenschaften, für die Übereinstimmungen gefunden werden müssen, unterstützt werden (`width`, `height`, `frameRate` und `facingMode`), setzen wir Einschränkungen, die eine Breite von nicht weniger als 640 und nicht mehr als 1920 (aber vorzugsweise 1920), eine Höhe von nicht weniger als 400 (aber idealerweise 1080), ein Seitenverhältnis von 16:9 (1.777777778) und eine Bildrate von nicht mehr als 30 Bilder pro Sekunde anfordern. Darüber hinaus ist das einzig akzeptable Eingabegerät eine nutzerseitige Kamera (eine "Selfie-Cam"). Wenn die `width`-, `height`-, `frameRate`- oder `facingMode`-Einschränkungen nicht erfüllt werden können, wird das von `applyConstraints()` zurückgegebene Versprechen abgelehnt.

> [!NOTE]
> Einschränkungen, die mit einem oder allen `max`, `min` oder `exact` angegeben sind, werden immer als zwingend betrachtet. Sollte irgendeine Einschränkung, die eines oder mehrere dieser Mittel verwendet, beim Aufruf von `applyConstraints()` nicht erfüllbar sein, wird das Versprechen abgelehnt.

### Erweiterte Einschränkungen

Sogenannte erweiterte Einschränkungen werden durch Hinzufügen einer `advanced`-Eigenschaft zum Einschränkungsset erstellt; der Wert dieser Eigenschaft ist ein Array von zusätzlichen Einschränkungssets, die als optional angesehen werden. Es gibt nur wenige, wenn überhaupt, Anwendungsfälle für diese Funktion, und es besteht Interesse daran, sie aus der Spezifikation zu entfernen, weshalb sie hier nicht weiter behandelt wird. Wenn Sie mehr erfahren möchten, sehen Sie bitte [Abschnitt 11 der Media Capture and Streams Spezifikation](https://www.w3.org/TR/mediacapture-streams/#idl-def-Constraints), nach Beispiel 2.

## Fähigkeiten überprüfen

Sie können [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) aufrufen, um eine Liste aller unterstützten Fähigkeiten und der Werte oder Wertebereiche zu erhalten, die jeder auf der aktuellen Plattform und beim Benutzeragenten akzeptiert. Diese Funktion gibt ein Objekt zurück, das jede von dem Browser unterstützte begrenzte Eigenschaft auflistet und einen Wert oder Wertebereich, der für jede dieser Eigenschaften unterstützt wird.

> **Hinweis:** `getCapabilities()` wurde noch nicht von allen großen Browsern implementiert. Vorerst müssen Sie versuchen, das zu bekommen, was Sie benötigen, und falls nicht, entscheiden, was Sie dann tun. Siehe Firefox [Firefox Bug 1179084](https://bugzil.la/1179084) als Beispiel.

## Einschränkungen anwenden

Die erste und gängigste Methode, um Einschränkungen zu verwenden, besteht darin, sie bei dem Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) anzugeben:

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

In diesem Beispiel werden Einschränkungen zu der Zeit von `getUserMedia()` angewendet, wobei ein ideales Set von Optionen mit Rückfallebenen für das Video angefordert wird.

> [!NOTE]
> Sie können eine oder mehrere Medien-Eingabegerät-IDs angeben, um Einschränkungen festzulegen, welche Eingabequellen erlaubt sind. Um eine Liste der verfügbaren Geräte zu sammeln, können Sie [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, dann für jedes Gerät, das die gewünschten Kriterien erfüllt, seine `deviceId` zum `MediaConstraints` Objekt hinzufügen, das schließlich in `getUserMedia()` übergeben wird.

Sie können auch die Einschränkungen einer bestehenden [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) im laufenden Betrieb ändern, indem Sie die [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)-Methode der Spur aufrufen und ein Objekt übergeben, das die Einschränkungen darstellt, die Sie auf die Spur anwenden möchten:

```js
videoTrack.applyConstraints({
  width: 1920,
  height: 1080,
});
```

In diesem Ausschnitt wird die Videospur, auf die `videoTrack` verweist, aktualisiert, sodass ihre Auflösung so genau wie möglich 1920x1080 Pixel (1080p High Definition) entspricht.

## Abrufen aktueller Einschränkungen und Einstellungen

Es ist wichtig, den Unterschied zwischen **Einschränkungen** und **Einstellungen** zu verstehen. Einschränkungen sind eine Möglichkeit, anzugeben, welche Werte Sie benötigen, wollen und bereit sind, für die verschiedenen begrenzten Eigenschaften zu akzeptieren (wie in der Dokumentation zu [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) beschrieben), während Einstellungen die tatsächlichen Werte jeder begrenzten Eigenschaft zu einem bestimmten Zeitpunkt sind.

### Abrufen der wirksamen Einschränkungen

Wenn Sie zu einem beliebigen Zeitpunkt das Set der Einschränkungen abrufen müssen, das derzeit auf die Medien angewendet wird, können Sie diese Informationen durch Aufrufen von [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) erhalten, wie im folgenden Beispiel gezeigt.

```js
function switchCameras(track, camera) {
  const constraints = track.getConstraints();
  constraints.facingMode = camera;
  track.applyConstraints(constraints);
}
```

Diese Funktion akzeptiert eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) und einen String, der den Kamerablickmodus angibt, welcher verwendet werden soll, holt die aktuellen Einschränkungen, setzt den Wert von [`MediaTrackConstraints.facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) auf den angegebenen Wert und wendet dann das aktualisierte Einschränkungsset an.

### Abrufen der aktuellen Einstellungen für eine Spur

Sofern Sie nicht nur mit exakten Einschränkungen arbeiten (was ziemlich einschränkend ist, also vergewissern Sie sich, dass Sie es so meinen!), gibt es keine Garantie, was Sie tatsächlich erhalten, nachdem die Einschränkungen angewendet wurden. Die Werte der begrenzten Eigenschaften, wie sie tatsächlich in den resultierenden Medien sind, werden als die Einstellungen bezeichnet. Wenn Sie das genaue Format und andere Eigenschaften der Medien kennen müssen, können Sie diese Einstellungen durch Aufrufen von [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) abrufen. Dies gibt ein Objekt auf Basis des Wörterbuchs [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) zurück. Zum Beispiel:

```js
function whichCamera(track) {
  return track.getSettings().facingMode;
}
```

Diese Funktion verwendet `getSettings()`, um die derzeit in Gebrauch befindlichen Werte für die begrenzten Eigenschaften der Spur zu erhalten und gibt den Wert von [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode) zurück.

## Beispiel: Constraint-Übende

In diesem Beispiel erstellen wir einen Übenden, der es ermöglicht, mit Medieneinschränkungen zu experimentieren, indem der Quellcode für die Einschränkungssets der Audio- und Videospuren bearbeitet wird. Anschließend können Sie diese Änderungen anwenden und das Ergebnis sehen, einschließlich sowohl des Aussehens des Streams als auch der tatsächlichen Medien-Einstellungen, die nach Anwendung der neuen Einschränkungen festgelegt wurden.

Das HTML und CSS für dieses Beispiel sind ziemlich einfach und werden hier nicht gezeigt. Sie können jedoch auf das komplette Beispiel zugreifen, indem Sie {{LiveSampleLink("Example_Constraint_exerciser", "hier klicken")}}.

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

### Standardwerte und Variablen

Zuerst haben wir die Standard-Einschränkungssets als Strings. Diese Strings werden in bearbeiteten {{HTMLElement("textarea")}}-Elementen präsentiert, aber dies ist die anfängliche Konfiguration des Streams.

```js
const videoDefaultConstraintString =
  '{\n  "width": 320,\n  "height": 240,\n  "frameRate": 30\n}';
const audioDefaultConstraintString =
  '{\n  "sampleSize": 16,\n  "channelCount": 2,\n  "echoCancellation": false\n}';
```

Diese Standardwerte fragen nach einer ziemlich häufigen Kameraeinstellung, bestehen aber nicht darauf, dass eine Eigenschaft von besonderer Bedeutung ist. Der Browser sollte sein Bestes tun, um diesen Einstellungen zu entsprechen, wird sich aber mit allem zufriedengeben, was er als nahe zufriedenstellend erachtet.

Dann initialisieren wir die Variablen, die die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Video- und Audiospuren sowie die Variablen, die Verweise auf die Video- und Audiospuren selbst enthalten sollen, auf `null`.

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
  - : Das {{HTMLElement("video")}} Element, das den Stream anzeigen wird.
- `logElement`
  - : Ein {{HTMLElement("div")}}, in den Fehlermeldungen oder andere Logbuch-artige Ausgaben geschrieben werden.
- `supportedConstraintList`
  - : Eine {{HTMLElement("ul")}} (ungeordnete Liste), in die wir programmatisch die Namen jeder der vom Browser des Benutzers unterstützten begrenzten Eigenschaften einfügen.
- `videoConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}-Element, das es dem Benutzer ermöglicht, den Code für das Einschränkungsset der Videospur zu bearbeiten.
- `audioConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}-Element, das es dem Benutzer ermöglicht, den Code für das Einschränkungsset der Audiospur zu bearbeiten.
- `videoSettingsText`
  - : Ein {{HTMLElement("textarea")}} (das immer deaktiviert ist), das die aktuellen Einstellungen für die begrenzten Eigenschaften der Videospur anzeigt.
- `audioSettingsText`
  - : Ein {{HTMLElement("textarea")}} (das immer deaktiviert ist), das die aktuellen Einstellungen für die begrenzten Eigenschaften der Audiospur anzeigt.

Schließlich setzen wir den aktuellen Inhalt der beiden Einschränkungsset-Editor-Elemente auf die Standardwerte.

```js
videoConstraintEditor.value = videoDefaultConstraintString;
audioConstraintEditor.value = audioDefaultConstraintString;
```

### Aktualisieren der Anzeige der Einstellungen

Rechts von jedem der Einschränkungseditore ist ein zweites Textfeld, welches wir zur Anzeige der aktuellen Konfiguration der konfigurierbaren Eigenschaften der Spur verwenden. Diese Anzeige wird von der Funktion `getCurrentSettings()` aktualisiert, welche die aktuellen Einstellungen für die Audio- und Videospuren erhält und den entsprechenden Code in die Anzeigefelder der Spureneinstellungen einfügt, indem sie deren [`value`](/de/docs/Web/API/HTMLTextAreaElement/value) setzt.

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

Diese wird aufgerufen, nachdem der Stream erstmals gestartet wurde und jedes Mal, wenn wir aktualisierte Einschränkungen angewendet haben, wie Sie unten sehen werden.

### Erstellen der Einschränkungsset-Objekte der Spur

Die `buildConstraints()`-Funktion erstellt die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Audio- und Videospuren anhand des Codes in den beiden Einschränkungsset-Editierboxen.

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

Dies verwendet {{jsxref("JSON.parse()")}}, um den Code in jedem Editor in ein Objekt zu parsen. Falls irgendein Aufruf von JSON.parse() eine Ausnahme wirft, wird `handleError()` verwendet, um die Fehlermeldung im Log auszugeben.

### Konfigurieren und Starten des Streams

Die `startVideo()`-Methode kümmert sich um das Einrichten und Starten des Videostreams.

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

Es gibt mehrere Schritte:

1. Es ruft `buildConstraints()` auf, um die [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die beiden Spuren aus dem Code in den Editierfeldern zu erstellen.
2. Es ruft [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf und übergibt die Einschränkungsobjekte für die Video- und Audiospuren. Dies liefert einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit dem Audio und Video von einer Quelle, die den Eingaben entspricht (typischerweise eine Webcam, obwohl Sie mit den richtigen Einschränkungen Medien aus anderen Quellen erhalten können).
3. Wenn der Stream abgerufen wird, wird er an das {{HTMLElement("video")}}-Element angehängt, sodass er auf dem Bildschirm sichtbar ist, und wir greifen die Audio- und Videospuren in die Variablen `audioTrack` und `videoTrack`.
4. Dann richten wir ein Versprechen ein, das aufgelöst wird, wenn das [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)-Ereignis auf dem Video-Element auftritt.
5. Wenn dies geschieht, wissen wir, dass das Video sich zu spielen beginnt, weshalb wir unsere `getCurrentSettings()`-Funktion (unten beschrieben) aufrufen, um die tatsächlichen Einstellungen anzuzeigen, die der Browser nach Berücksichtigung unserer Einschränkungen und der Fähigkeiten der Hardware entschieden hat.
6. Wenn ein Fehler auftritt, protokollieren wir ihn mit der `handleError()`-Methode, auf die wir weiter unten im Artikel eingehen werden.

Wir müssen auch noch einen Ereignis-Listener einrichten, der darauf wartet, dass der „Start Video“-Knopf gedrückt wird:

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

Als nächstes richten wir einen Ereignis-Listener für den „Einschränkungen anwenden“-Knopf ein. Wenn dieser gedrückt wird und es keine bereits verwendeten Medien gibt, rufen wir `startVideo()` auf, und lassen diese Funktion den Stream mit den angegebenen Einstellungen starten. Andernfalls folgen wir diesen Schritten, um die aktualisierten Einschränkungen auf den bereits aktiven Stream anzuwenden:

1. `buildConstraints()` wird aufgerufen, um aktualisierte [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekte für die Audiospur (`audioConstraints`) und die Videospur (`videoConstraints`) zu erstellen.
2. [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) wird auf die Videospur (falls vorhanden) aufgerufen, um die neuen `videoConstraints` anzuwenden. Falls dies gelingt, werden die Inhalte der Anzeige-Box der aktuellen Einstellungen der Videospur basierend auf dem Ergebnis des Aufrufs ihrer [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) aktualisiert.
3. Sobald dies geschehen ist, wird `applyConstraints()` auf die Audiospur (falls vorhanden) aufgerufen, um die neuen Audio-Einschränkungen anzuwenden. Falls dies gelingt, werden die Inhalte der Anzeige-Box der aktuellen Einstellungen der Audiospur auf Basis des Ergebnisses des Aufrufs ihrer [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) aktualisiert.
4. Sollte ein Fehler beim Anwenden eines der Einschränkungssets auftreten, wird `handleError()` verwendet, um eine Fehlermeldung in das Log auszugeben.

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

### Handhabung des Stop-Knopfes

Dann richten wir den Handler für den Stop-Knopf ein.

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

Dies stoppt die aktiven Spuren, setzt die Variablen `videoTrack` und `audioTrack` auf `null`, damit wir wissen, dass sie weg sind, und entfernt den Stream aus dem {{HTMLElement("video")}}-Element, indem [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) auf `null` gesetzt wird.

### Einfache Tab-Unterstützung im Editor

Dieser Code fügt den {{HTMLElement("textarea")}}-Elementen einfache Tabulatorunterstützung hinzu, indem die Tabulatortaste zwei Leerzeichen einfügt, wenn eines der Editierboxen fokussiert ist.

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

### Zeige begrenzte Eigenschaften, die der Browser unterstützt

Das letzte bedeutende Stück des Puzzles: Code, der eine Liste der begrenzten Eigenschaften anzeigt, die der Browser des Benutzers unterstützt. Jede Eigenschaft ist ein Link zu ihrer Dokumentation auf MDN für die Bequemlichkeit des Benutzers. Siehe die [`MediaDevices.getSupportedConstraints()` Beispiele](/de/docs/Web/API/MediaDevices/getSupportedConstraints#examples) für Details darüber, wie dieser Code funktioniert.

> [!NOTE]
> Natürlich kann es in dieser Liste nicht standardisierte Eigenschaften geben, in welchem Fall Sie wahrscheinlich feststellen werden, dass der Dokumentationslink nicht sehr hilfreich ist.

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

Wir haben auch etwas einfachen Code zur Fehlerbehandlung; `handleError()` wird verwendet, um versprochene Fehler zu handhaben, und die `log()`-Funktion hängt die Fehlermeldung an eine spezielle Logbuch-{{HTMLElement("div")}}-Box unter dem Video.

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

Hier können Sie das komplette Beispiel in Aktion sehen.

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
