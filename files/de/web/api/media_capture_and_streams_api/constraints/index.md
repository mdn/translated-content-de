---
title: Fähigkeiten, Einschränkungen und Einstellungen
slug: Web/API/Media_Capture_and_Streams_API/Constraints
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Dieser Artikel erörtert die Doppelkonzepte von **Einschränkungen** und **Fähigkeiten** sowie die Medieneinstellungen und beinhaltet ein Beispiel, das wir den [Constraint-Übungsraum](#example_constraint_exerciser) nennen. Der Constraint-Übungsraum ermöglicht es Ihnen, mit den Ergebnissen verschiedener Einschränkungssets zu experimentieren, die auf die Audio- und Videospuren der A/V Eingabegeräte des Computers (wie Webcam und Mikrofon) angewendet werden.

Historisch gesehen gab es beim Schreiben von Skripten für das Web, die eng mit Web-APIs arbeiten, eine bekannte Herausforderung: Häufig muss Ihr Code wissen, ob eine API existiert und, falls ja, welche Einschränkungen sie auf den {{Glossary("Benutzeragenten")}} hat, auf dem sie läuft. Dies festzustellen war oft schwierig und beinhaltete in der Regel eine Kombination aus dem Überprüfen, welcher {{Glossary("Benutzeragent")}} (oder Browser) verwendet wird, in welcher Version, ob bestimmte Objekte existieren, ob verschiedene Dinge funktionieren und welche Fehler auftreten, und so weiter. Das Ergebnis war oft sehr brüchiger Code oder eine Abhängigkeit von Bibliotheken, die diese Punkte für Sie ermitteln und dann {{Glossary("polyfill", "Polyfills")}} implementieren, um die Lücken in der Implementierung für Sie zu schließen.

Fähigkeiten und Einschränkungen ermöglichen es dem Browser und der Website oder App, Informationen darüber auszutauschen, welche **einschränkbaren Eigenschaften** die Implementation des Browsers unterstützt und welche Werte für jede unterstützt werden.

## Überblick

Der Prozess funktioniert wie folgt (unter Verwendung von {{domxref("MediaStreamTrack")}} als Beispiel):

1. Falls notwendig, rufen Sie {{domxref("MediaDevices.getSupportedConstraints()")}} auf, um die Liste der **unterstützten Einschränkungen** zu erhalten. Diese Liste gibt Aufschluss darüber, welche einschränkbaren Eigenschaften der Browser kennt. Das ist nicht immer nötig, da unbekannte einfach ignoriert werden, wenn Sie sie angeben. Wenn Sie jedoch eine Einschränkung haben, ohne die Sie nicht auskommen, können Sie sicherstellen, dass sie auf der Liste stehen.
2. Sobald das Skript weiß, ob die gewünschte(n) Eigenschaft(en) unterstützt werden, kann es dann die **Fähigkeiten** der API und ihrer Implementierung überprüfen, indem es das von der `getCapabilities()`-Methode der Spur zurückgegebene Objekt untersucht; dieses Objekt listet jede unterstützte Einschränkung und die Werte oder Wertebereiche auf, die unterstützt werden.
3. Schließlich wird die `applyConstraints()`-Methode der Spur aufgerufen, um die API nach seinen Wünschen zu konfigurieren, indem es die Werte oder Wertebereiche angibt, die es für eine der einschränkbaren Eigenschaften verwenden möchte, für die es eine Präferenz hat.
4. Die `getConstraints()`-Methode der Spur gibt die Menge der Einschränkungen zurück, die beim letzten Aufruf von `applyConstraints()` übergeben wurden. Dies könnte nicht den tatsächlichen aktuellen Zustand der Spur darstellen, aufgrund von Eigenschaften, deren angeforderte Werte angepasst werden mussten und weil Standardwerte der Plattform nicht repräsentiert werden. Für eine vollständige Darstellung der aktuellen Konfiguration der Spur verwenden Sie `getSettings()`.

In der Media Capture and Streams API verfügen sowohl {{domxref("MediaStream")}} als auch {{domxref("MediaStreamTrack")}} über einschränkbare Eigenschaften.

## Bestimmung, ob eine Einschränkung unterstützt wird

Wenn Sie wissen müssen, ob eine bestimmte Einschränkung vom Benutzeragenten unterstützt wird, können Sie dies herausfinden, indem Sie {{domxref("MediaDevices.getSupportedConstraints", "navigator.mediaDevices.getSupportedConstraints()")}} aufrufen, um eine Liste der einschränkbaren Eigenschaften zu erhalten, die der Browser kennt, wie folgt:

```js
const supported = navigator.mediaDevices.getSupportedConstraints();

document.getElementById("frameRateSlider").disabled = !supported["frameRate"];
```

In diesem Beispiel werden die unterstützten Einschränkungen abgerufen und eine Steuerung, die dem Benutzer erlaubt, die Bildrate zu konfigurieren, wird deaktiviert, wenn die `frameRate`-Einschränkung nicht unterstützt wird.

## Wie Einschränkungen definiert sind

Eine einzelne Einschränkung ist ein Objekt, dessen Name mit der einschränkbaren Eigenschaft übereinstimmt, deren gewünschter Wert oder Wertebereich angegeben wird. Dieses Objekt enthält null oder mehr individuelle Einschränkungen sowie ein optionales Unterobjekt namens `advanced`, das eine weitere Menge von null oder mehr Einschränkungen enthält, die der Benutzeragent so weit wie möglich erfüllen muss. Der Benutzeragent versucht, Einschränkungen in der im Einschränkungsset angegebenen Reihenfolge zu erfüllen.

Das Wichtigste ist zu verstehen, dass die meisten Einschränkungen keine Anforderungen sind, sondern Anfragen. Es gibt Ausnahmen, auf die wir schnell eingehen werden.

### Anfordern eines bestimmten Wertes für eine Einstellung

Meist kann jede Einschränkung ein bestimmter Wert sein, der einen gewünschten Wert für die Einstellung angibt. Zum Beispiel:

```js
const constraints = {
  width: 1920,
  height: 1080,
  aspectRatio: 1.777777778,
};

myTrack.applyConstraints(constraints);
```

In diesem Fall zeigen die Einschränkungen an, dass für fast alle Eigenschaften irgendwelche Werte in Ordnung sind, aber eine standardmäßige High Definition (HD) Videoauflösung gewünscht wird, mit dem Standard 16:9 {{glossary("Seitenverhältnis")}}. Es gibt keine Garantie, dass die resultierende Spur mit einer dieser Vorgaben übereinstimmt, aber der Benutzeragent sollte sein Bestes tun, um so viele wie möglich anzupassen.

Die Priorisierung der Eigenschaften ist einfach: Wenn die angeforderten Werte zweier Eigenschaften sich gegenseitig ausschließen, wird diejenige zuerst verwendet, die im Einschränkungsset zuerst aufgelistet wird. Als Beispiel, wenn der Browser, der den oben angegebenen Code ausführt, keine 1920x1080-Spur bereitstellen könnte, aber 1920x900 könnte, dann wäre das, was bereitgestellt würde.

Einfache Einschränkungen wie diese, die einen einzelnen Wert angeben, werden immer als nicht erforderlich behandelt. Der Benutzeragent wird versuchen, das Bereitzustellen, was Sie anfordern, garantiert jedoch nicht, dass das erhaltene damit übereinstimmt. Wenn Sie einfache Werte für Eigenschaften beim Aufruf von {{domxref("MediaStreamTrack.applyConstraints()" )}} verwenden, wird die Anfrage immer erfolgreich sein, da diese Werte als Anfrage und nicht als Anforderung betrachtet werden.

### Angabe eines Wertebereichs

Manchmal ist jeder Wert innerhalb eines Bereichs für den Wert einer Eigenschaft akzeptabel. Sie können Bereiche mit entweder minimalen oder maximalen Werten oder beiden angeben, und Sie können sogar einen idealen Wert innerhalb des Bereichs festlegen, wenn Sie möchten. Wenn Sie einen idealen Wert angeben, wird der Browser versuchen, diesem Wert möglichst nahe zu kommen, unter Berücksichtigung der anderen angegebenen Einschränkungen.

```js
const supports = navigator.mediaDevices.getSupportedConstraints();

if (
  !supports["width"] ||
  !supports["height"] ||
  !supports["frameRate"] ||
  !supports["facingMode"]
) {
  // Wir benötigen Eigenschaften fehlen, gehen Sie mit diesem Fehler um.
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
      /* erledigt, wenn Einschränkungen erfolgreich angewendet wurden */
    })
    .catch((reason) => {
      /* Anwendung der Einschränkungen fehlgeschlagen; reason gibt den Grund an */
    });
}
```

Hier, nachdem sichergestellt wurde, dass die einschränkbaren Eigenschaften, die erfüllt werden müssen, unterstützt werden (`width`, `height`, `frameRate` und `facingMode`), stellen wir Einschränkungen auf, die eine Breite von nicht weniger als 640 und nicht mehr als 1920 (aber vorzugsweise 1920) verlangen, eine Höhe von nicht weniger als 400 (aber idealerweise 1080), ein Seitenverhältnis von 16:9 (1.777777778) und eine Bildrate von höchstens 30 Bildern pro Sekunde. Darüber hinaus ist das einzige akzeptable Eingabegerät eine nach vorne gerichtete Kamera (eine „Selfie-Kamera“). Wenn die Einschränkungen `width`, `height`, `frameRate` oder `facingMode` nicht erfüllt werden können, wird das Promise, das von `applyConstraints()` zurückgegeben wird, abgelehnt.

> [!NOTE]
> Einschränkungen, die unter Verwendung eines oder aller von `max`, `min` oder `exact` angegeben werden, werden immer als obligatorisch betrachtet. Wenn eine Einschränkung, die einen oder mehrere dieser Werte verwendet, nicht erfüllt werden kann, wenn `applyConstraints()` aufgerufen wird, wird das Promise abgelehnt.

### Erweiterte Einschränkungen

Sogenannte erweiterte Einschränkungen werden durch Hinzufügen einer `advanced`-Eigenschaft zu dem Einschränkungsset erstellt; der Wert dieser Eigenschaft ist ein Array von zusätzlichen Einschränkungssets, die als optional betrachtet werden. Es gibt wenige, wenn überhaupt, Anwendungsfälle für diese Funktion, und es gibt Interesse, sie aus der Spezifikation zu entfernen, daher wird sie hier nicht behandelt. Wenn Sie mehr erfahren möchten, siehe [Abschnitt 11 der Media Capture and Streams-Spezifikation](https://www.w3.org/TR/mediacapture-streams/#idl-def-Constraints), Beispiel 2.

## Überprüfen der Fähigkeiten

Sie können {{domxref("MediaStreamTrack.getCapabilities()")}} aufrufen, um eine Liste aller unterstützten Fähigkeiten und der Werte oder Wertebereiche zu erhalten, die jeweils auf der aktuellen Plattform und dem Benutzeragenten akzeptiert werden. Diese Funktion gibt ein Objekt zurück, das jede einschränkbare Eigenschaft unterstützt, die vom Browser unterstützt wird, sowie einen Wert oder einen Wertebereich, der für jede dieser Eigenschaften unterstützt wird.

> **Hinweis:** `getCapabilities()` wurde noch nicht von allen großen Browsern implementiert. Derzeit müssen Sie versuchen, das zu erhalten, was Sie benötigen, und falls dies nicht möglich ist, entscheiden, was dann zu tun ist. Siehe Firefox [Firefox-Bug 1179084](https://bugzil.la/1179084) als Beispiel.

## Anwenden von Einschränkungen

Der erste und häufigste Ansatz, Einschränkungen zu verwenden, besteht darin, sie beim Aufruf von {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} anzugeben:

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

In diesem Beispiel werden Einschränkungen zur `getUserMedia()`-Zeit angewendet und nach einem idealen Set von Optionen mit Rückfällen für das Video gefragt.

> [!NOTE]
> Sie können eine oder mehrere IDs von Medieneingabegeräten spezifizieren, um Einschränkungen dafür festzulegen, welche Eingabequellen erlaubt sind. Um eine Liste der verfügbaren Geräte zu sammeln, können Sie {{domxref("MediaDevices.enumerateDevices", "navigator.mediaDevices.enumerateDevices()")}} aufrufen und dann für jedes Gerät, das die gewünschten Kriterien erfüllt, dessen `deviceId` dem `MediaConstraints`-Objekt hinzufügen, das letztendlich an `getUserMedia()` übergeben wird.

Sie können auch die Einschränkungen eines bestehenden {{domxref("MediaStreamTrack")}} während der Ausführung ändern, indem Sie die {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}}-Methode der Spur aufrufen und ihr ein Objekt übergeben, das die Einschränkungen enthält, die Sie auf die Spur anwenden möchten:

```js
videoTrack.applyConstraints({
  width: 1920,
  height: 1080,
});
```

In diesem Ausschnitt wird die Videospur, auf die `videoTrack` verweist, aktualisiert, sodass ihre Auflösung möglichst genau 1920x1080 Pixel (1080p High Definition) entspricht.

## Abrufen von aktiven Einschränkungen und Einstellungen

Es ist wichtig, den Unterschied zwischen **Einschränkungen** und **Einstellungen** zu beachten. Einschränkungen sind eine Möglichkeit, anzugeben, welche Werte Sie benötigen, möchten und bereit sind, für die verschiedenen einschränkbaren Eigenschaften zu akzeptieren (wie in der Dokumentation für {{domxref("MediaTrackConstraints")}} beschrieben), während Einstellungen die tatsächlichen Werte jeder einschränkbaren Eigenschaft zur aktuellen Zeit sind.

### Abrufen der wirksamen Einschränkungen

Wenn Sie zu irgendeinem Zeitpunkt die Menge der Einschränkungen abrufen müssen, die aktuell auf das Medium angewendet werden, können Sie diese Informationen durch Aufrufen von {{domxref("MediaStreamTrack.getConstraints()")}} erhalten, wie im folgenden Beispiel gezeigt.

```js
function switchCameras(track, camera) {
  const constraints = track.getConstraints();
  constraints.facingMode = camera;
  track.applyConstraints(constraints);
}
```

Diese Funktion akzeptiert eine {{domxref("MediaStreamTrack")}} und eine Zeichenkette, die den Kameramodus angibt, und ruft die aktuellen Einschränkungen ab, legt den Wert der {{domxref("MediaTrackConstraints.facingMode")}} auf den angegebenen Wert fest und wendet dann das aktualisierte Einschränkungsset an.

### Abrufen der aktuellen Einstellungen für eine Spur

Sofern Sie keine genauen Einschränkungen verwenden (was recht einschränkend ist, stellen Sie also sicher, dass Sie es so meinen!), gibt es keine Garantie, was Sie tatsächlich erhalten, nachdem die Einschränkungen angewendet wurden. Die Werte der einschränkbaren Eigenschaften, so wie sie tatsächlich im resultierenden Medium sind, werden als Einstellungen bezeichnet. Wenn Sie das tatsächliche Format und die anderen Eigenschaften des Mediums wissen müssen, können Sie diese Einstellungen abrufen, indem Sie {{domxref("MediaStreamTrack.getSettings()")}} aufrufen. Dies gibt ein Objekt auf der Grundlage des Wörterbuchs {{domxref("MediaTrackSettings")}} zurück. Zum Beispiel:

```js
function whichCamera(track) {
  return track.getSettings().facingMode;
}
```

Diese Funktion verwendet `getSettings()`, um die aktuell in Verwendung befindlichen Werte der einschränkbaren Eigenschaften der Spur zu erhalten und gibt den Wert von {{domxref("MediaTrackSettings.facingMode", "facingMode")}} zurück.

## Beispiel: Constraint-Übungsraum

In diesem Beispiel erstellen wir einen Übungsraum, der Ihnen ermöglicht, mit Medieneinschränkungen zu experimentieren, indem Sie den Quellcode bearbeiten, der die Einschränkungssets für Audio- und Videospuren beschreibt. Anschließend können Sie diese Änderungen anwenden und das Ergebnis sehen, einschließlich sowohl dessen, wie der Stream aussieht, als auch welche tatsächlichen Medieneinstellungen nach dem Anwenden der neuen Einschränkungen eingestellt sind.

Das HTML und CSS für dieses Beispiel sind ziemlich einfach und werden hier nicht angezeigt. Sie können sich das vollständige Beispiel anschauen, indem Sie {{LiveSampleLink("Example_Constraint_exerciser", "hier klicken")}}.

```html hidden
<p>
  Experimentieren Sie mit Medieneinschränkungen! Bearbeiten Sie die Einschränkungssets für die Video- und Audio-Spuren in den Bearbeitungsfeldern auf der linken Seite und klicken Sie dann auf die Schaltfläche "Einschränkungen anwenden", um sie auszuprobieren. Die tatsächlichen Einstellungen, die der Browser ausgewählt hat und verwendet werden, werden in den Boxen rechts angezeigt. Darunter sehen Sie das Video selbst.
</p>
<p>Klicken Sie auf die Schaltfläche "Starten", um zu beginnen.</p>

<h3>Verfügbare einschränkbare Eigenschaften:</h3>
<ul id="supportedConstraints"></ul>
<div id="startButton" class="button">Starten</div>
<div class="wrapper">
  <div class="trackrow">
    <div class="leftside">
      <h3>Angeforderte Videoeinschränkungen:</h3>
      <textarea id="videoConstraintEditor" cols="32" rows="8"></textarea>
    </div>
    <div class="rightside">
      <h3>Tatsächliche Videoeinstellungen:</h3>
      <textarea id="videoSettingsText" cols="32" rows="8" disabled></textarea>
    </div>
  </div>
  <div class="trackrow">
    <div class="leftside">
      <h3>Angeforderte Audioeinschränkungen:</h3>
      <textarea id="audioConstraintEditor" cols="32" rows="8"></textarea>
    </div>
    <div class="rightside">
      <h3>Tatsächliche Audioeinstellungen:</h3>
      <textarea id="audioSettingsText" cols="32" rows="8" disabled></textarea>
    </div>
  </div>

  <div class="button" id="applyButton">Einschränkungen anwenden</div>
</div>
<video id="video" autoplay></video>

<div class="button" id="stopButton">Video stoppen</div>

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

Zuerst haben wir die Standardeinschränkungssets als Strings. Diese Strings werden in bearbeitbaren {{HTMLElement("textarea")}}s dargestellt, aber dies ist die anfängliche Konfiguration des Streams.

```js
const videoDefaultConstraintString =
  '{\n  "width": 320,\n  "height": 240,\n  "frameRate": 30\n}';
const audioDefaultConstraintString =
  '{\n  "sampleSize": 16,\n  "channelCount": 2,\n  "echoCancellation": false\n}';
```

Diese Standardwerte fragen eine recht gängige Kameraeinstellung an, bestehen jedoch nicht darauf, dass eine Eigenschaft von besonderer Bedeutung ist. Der Browser sollte sein Bestes tun, um diese Einstellungen anzupassen, begnügt sich jedoch mit allem, was er als engen Treffer ansieht.

Dann initialisieren wir die Variablen, die die {{domxref("MediaTrackConstraints")}}-Objekte für die Video- und Audiospuren sowie die Variablen, die Referenzen zu den Video- und Audiospuren selbst halten, mit `null`.

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
  - : Ein {{HTMLElement("div")}}, in das alle Fehlermeldungen oder andere log-Artige Ausgaben geschrieben werden.
- `supportedConstraintList`
  - : Ein {{HTMLElement("ul")}} (ungeordnete Liste), in den wir programmatisch die Namen jeder der einschränkbaren Eigenschaften hinzufügen, die im Browser des Benutzers unterstützt werden.
- `videoConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}, das dem Benutzer erlaubt, den Code für das Einschränkungsset der Videospur zu bearbeiten.
- `audioConstraintEditor`
  - : Ein {{HTMLElement("textarea")}}, das dem Benutzer erlaubt, den Code für das Einschränkungsset der Audiospur zu bearbeiten.
- `videoSettingsText`
  - : Ein {{HTMLElement("textarea")}} (das immer deaktiviert ist), das die aktuellen Einstellungen für die einschränkbaren Eigenschaften der Videospur anzeigt.
- `audioSettingsText`
  - : Ein {{HTMLElement("textarea")}} (das immer deaktiviert ist), das die aktuellen Einstellungen für die einschränkbaren Eigenschaften der Audiospur anzeigt.

Schließlich setzen wir die aktuellen Inhalte der beiden Einschränkungsset-Editor-Elemente auf die Standardwerte.

```js
videoConstraintEditor.value = videoDefaultConstraintString;
audioConstraintEditor.value = audioDefaultConstraintString;
```

### Aktualisieren der Einstellung Darstellung

Rechts von jedem der Constraint-Set-Editoren befindet sich eine zweite Textbox, die wir verwenden, um die aktuelle Konfiguration der anpassbaren Eigenschaften des Tracks anzuzeigen. Diese Anzeige wird durch die Funktion `getCurrentSettings()` aktualisiert, die die aktuellen Einstellungen für die Audio- und Videospuren abruft und den entsprechenden Code in die Einstellungsanzeigeboxen der Spuren einfügt, indem sie ihren [`Wert`](/de/docs/Web/API/HTMLTextAreaElement/value) setzt.

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

Dies wird aufgerufen, nachdem der Stream erstmals gestartet wurde, und jedes Mal, wenn wir aktualisierte Einschränkungen angewandt haben, wie Sie unten sehen werden.

### Aufbau der Track Constraint-Set-Objekte

Die `buildConstraints()`-Funktion erstellt die {{domxref("MediaTrackConstraints")}}-Objekte für die Audio- und Videospuren, indem sie den Code in den beiden Bearbeitungsfeldern der Spuren's Constraint-Sets verwendet.

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

Dies verwendet {{jsxref("JSON.parse()")}}, um den Code in jedem Editor in ein Objekt zu parsen. Wenn einer der Aufrufe von JSON.parse() eine Ausnahme wirft, wird `handleError()` aufgerufen, um die Fehlermeldung in das Log zu schreiben.

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

1. Es ruft `buildConstraints()` auf, um die {{domxref("MediaTrackConstraints")}}-Objekte für die beiden Spuren aus dem Code in den Bearbeitungsfeldern zu erstellen.
2. Es ruft {{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}} auf, übergibt die Constraints-Objekte für die Video- und Audio-Spuren. Dies gibt einen {{domxref("MediaStream")}} mit dem Audio und Video von einer Quelle zurück, die den Eingaben entspricht (normalerweise eine Webcam, obwohl Sie, wenn Sie die richtigen Einschränkungen angeben, Medien von anderen Quellen erhalten können).
3. Wenn der Stream erhalten wurde, wird er an das {{HTMLElement("video")}}-Element angehängt, sodass es auf dem Bildschirm sichtbar ist, und wir holen die Audiospur und die Videospur in die Variablen `audioTrack` und `videoTrack`.
4. Dann setzen wir ein Versprechen auf, das aufgelöst wird, wenn das {{domxref("HTMLMediaElement/loadedmetadata_event", "loadedmetadata")}} Ereignis auf dem Videoelement eintritt.
5. Wenn das passiert, wissen wir, dass das Video angefangen hat abzuspielen, also rufen wir unsere `getCurrentSettings()`-Funktion (oben beschrieben) auf, um die eigentlichen Einstellungen anzuzeigen, die der Browser nach Berücksichtigung unserer Einschränkungen und der Fähigkeiten der Hardware beschlossen hat.
6. Wenn ein Fehler auftritt, loggen wir ihn mit der `handleError()`-Methode, die weiter unten beschrieben wird.

Wir müssen auch einen Ereignislistener einrichten, um zu beobachten, dass die Schaltfläche „Video Starten“ geklickt wird:

```js
document.getElementById("startButton").addEventListener(
  "click",
  () => {
    startVideo();
  },
  false,
);
```

### Anwenden von Aktualisierungen des Constraint-Sets

Als Nächstes richten wir einen Ereignislistener für die „Einschränkungen anwenden“-Schaltfläche ein. Wenn diese geklickt wird und es bereits keine Medien gibt, die verwendet werden, rufen wir `startVideo()` auf und überlassen dieser Funktion das Starten des Streams mit den angegebenen Einstellungen. Andernfalls folgen wir diesen Schritten, um die aktualisierten Einschränkungen auf den bereits aktiven Stream anzuwenden:

1. `buildConstraints()` wird aufgerufen, um aktualisierte {{domxref("MediaTrackConstraints")}}-Objekte für die Audiospur (`audioConstraints`) und die Videospur (`videoConstraints`) zu erstellen.
2. {{domxref("MediaStreamTrack.applyConstraints()")}} wird auf die Videospur aufgerufen (falls vorhanden), um die neuen `videoConstraints` anzuwenden. Wenn dies gelingt, werden die Inhalte der Einstellungsbox der Videospur basierend auf dem Ergebnis des Aufrufes ihrer {{domxref("MediaStreamTrack.getSettings", "getSettings()")}}-Methode aktualisiert.
3. Wenn das erledigt ist, wird `applyConstraints()` auf die Audiospur aufgerufen (falls vorhanden), um die neuen Audioeinstellungen anzuwenden. Wenn dies gelingt, werden die Inhalte der Einstellungsbox der Audiospur basierend auf dem Ergebnis des Aufrufes ihrer {{domxref("MediaStreamTrack.getSettings", "getSettings()")}}-Methode aktualisiert.
4. Wenn ein Fehler beim Anwenden eines der Constraint-Sets auftritt, wird `handleError()` verwendet, um eine Nachricht in das Log zu schreiben.

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

### Behandeln der Stop-Schaltfläche

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

Dies stoppt die aktiven Spuren, setzt die Variablen `videoTrack` und `audioTrack` auf `null`, damit wir wissen, dass sie verschwunden sind, und entfernt den Stream aus dem {{HTMLElement("video")}}-Element, indem {{domxref("HTMLMediaElement.srcObject")}} auf `null` gesetzt wird.

### Einfache Tab-Unterstützung im Editor

Dieser Code fügt einfache Unterstützung für Tabs in den {{HTMLElement("textarea")}}-Elementen hinzu, indem er die Tabulatortaste zwei Leerzeichen einfügen lässt, wenn eines der Bearbeitungsfelder fokussiert ist.

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

Das letzte bedeutsame Stück des Puzzles: Code, der für die Benutzerreferenz eine Liste der einschränkbaren Eigenschaften anzeigt, die ihr Browser unterstützt. Jede Eigenschaft ist ein Link zu deren Dokumentation auf MDN für die Bequemlichkeit des Benutzers. Siehe die [Beispiele von `MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#examples) für Details dazu, wie dieser Code funktioniert.

> [!NOTE]
> Natürlich könnten in dieser Liste nicht standardisierte Eigenschaften vorhanden sein, in diesem Fall finden Sie wahrscheinlich, dass der Dokumentationslink nicht viel hilft.

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

Wir haben auch einige einfache Fehlerbehandlungscode; `handleError()` wird aufgerufen, um fehlgeschlagene Versprechen zu handhaben, und die `log()`-Funktion fügt die Fehlermeldung zu einer speziellen Log-{{HTMLElement("div")}} Box unter dem Video hinzu.

```js
function log(msg) {
  logElement.innerHTML += `${msg}<br>`;
}

function handleError(reason) {
  log(
    `Fehler <code>${reason.name}</code> in Einschraenkung <code>${reason.constraint}</code>: ${reason.message}`,
  );
}
```

### Ergebnis

Hier können Sie das vollständige Beispiel in Aktion sehen.

{{EmbedLiveSample("Example_Constraint_exerciser", 650, 800)}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaTrackSettings")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
