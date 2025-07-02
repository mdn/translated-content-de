---
title: Aufnahmen von Standbildern mit getUserMedia()
slug: Web/API/Media_Capture_and_Streams_API/Taking_still_photos
l10n:
  sourceCommit: fd56a549d24a8002df09735ee8319ce1a721c233
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel zeigt, wie Sie [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden, um auf die Kamera eines Computers oder Mobiltelefons zuzugreifen, das `getUserMedia()` unterstützt, und ein Foto damit aufzunehmen.

![App zur Bildaufnahme auf Basis von getUserMedia — links haben wir einen Videostream von einer Webcam und einen Foto-Aufnahme-Button, rechts das Standbild-Ergebnis nach der Aufnahme](web-rtc-demo.png)

Sie können auch direkt zur [Demo](#demo) springen, wenn Sie möchten.

## Das HTML-Markup

Unsere HTML-Oberfläche hat zwei Hauptfunktionsbereiche: das Stream- und Aufnahmepanel und das Präsentationspanel. Jeder von ihnen wird in seinem eigenen {{HTMLElement("div")}} nebeneinander dargestellt, um das Styling und die Steuerung zu erleichtern.

```html-nolint hidden live-sample___photo-capture live-sample___photo-capture-with-filters
<div class="content-area">
```

```html hidden live-sample___photo-capture live-sample___photo-capture-with-filters
<h1>MDN - navigator.mediaDevices.getUserMedia(): Still photo capture demo</h1>
<p>
  This example demonstrates how to set up a media stream using your built-in
  webcam, fetch an image from that stream, and create a PNG using that image.
</p>
```

Das erste Panel auf der linken Seite enthält zwei Komponenten: ein {{HTMLElement("video")}}-Element, das den Stream von `navigator.mediaDevices.getUserMedia()` erhält, und einen {{HTMLElement("button")}}, den der Benutzer anklickt, um einen Videorahmen aufzunehmen.

```html live-sample___photo-capture live-sample___photo-capture-with-filters
<div class="camera">
  <video id="video">Video stream not available.</video>
  <button id="start-button">Take photo</button>
</div>
```

Das ist unkompliziert und wir werden sehen, wie alles zusammenkommt, wenn wir in den JavaScript-Code eintauchen.

Als nächstes haben wir ein {{HTMLElement("canvas")}}-Element, in das die aufgenommenen Frames gespeichert werden. Diese können potenziell irgendwie manipuliert und dann in eine Ausgabedatei umgewandelt werden. Das Canvas wird verborgen gehalten, indem das Canvas mit {{cssxref("display", "display: none")}} gestylt wird, um den Bildschirm nicht zu überfrachten — der Benutzer muss diese Zwischenstufe nicht sehen.

Wir haben auch ein {{HTMLElement("img")}}-Element, in das wir das Bild zeichnen werden — dies ist die endgültige Darstellung, die dem Benutzer gezeigt wird.

```html live-sample___photo-capture live-sample___photo-capture-with-filters
<canvas id="canvas"> </canvas>
<div class="output">
  <img id="photo" alt="The screen capture will appear in this box." />
</div>
```

Das ist alles an relevantem HTML. Der Rest ist nur etwas Seitengestaltungs-Fluff und ein bisschen Text mit einem Link zurück zu dieser Seite.

```html hidden live-sample___photo-capture live-sample___photo-capture-with-filters
<p>
  Visit our article
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos">
    Taking still photos with WebRTC
  </a>
  to learn more about the technologies used here.
</p>
```

```html-nolint hidden live-sample___photo-capture live-sample___photo-capture-with-filters
</div>
```

## Der JavaScript-Code

Werfen wir nun einen Blick auf den JavaScript-Code. Wir werden ihn in einige mundgerechte Stücke aufteilen, um die Erklärung zu erleichtern.

### Initialisierung

Wir beginnen mit der Einrichtung verschiedener Variablen, die wir verwenden werden.

```js live-sample___photo-capture live-sample___photo-capture-with-filters
const width = 320; // We will scale the photo width to this
let height = 0; // This will be computed based on the input stream

let streaming = false;

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const photo = document.getElementById("photo");
const startButton = document.getElementById("start-button");
```

Diese Variablen sind:

- `width`
  - : Unabhängig von der Größe des eingehenden Videos skalieren wir das resultierende Bild auf eine Breite von 320 Pixeln.
- `height`
  - : Die Ausgabebreite des Bildes wird in Anbetracht der `width` und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}} des Streams berechnet.
- `streaming`
  - : Gibt an, ob derzeit ein aktiver Videostream läuft.
- `video`
  - : Eine Referenz auf das {{HTMLElement("video")}}-Element.
- `canvas`
  - : Eine Referenz auf das {{HTMLElement("canvas")}}-Element.
- `photo`
  - : Eine Referenz auf das {{HTMLElement("img")}}-Element.
- `startButton`
  - : Eine Referenz auf das {{HTMLElement("button")}}-Element, das für den Auslösevorgang verwendet wird.

Als Teil der anfänglichen Einrichtung fordern wir den Zugriff auf die Webcam des Nutzers an, initialisieren das Ausgabebild-{{HTMLElement("img")}} in einen Standardzustand und richten die benötigten Ereignislistener ein, um jeden Videoframe von der Kamera zu empfangen und zu reagieren, wenn der Button zum Aufnehmen eines Bildes geklickt wird.

#### Erhalten des Medienstroms

Die nächste Aufgabe ist es, den Medienstrom zu erhalten:

```js live-sample___photo-capture live-sample___photo-capture-with-filters
navigator.mediaDevices
  .getUserMedia({ video: true, audio: false })
  .then((stream) => {
    video.srcObject = stream;
    video.play();
  })
  .catch((err) => {
    console.error(`An error occurred: ${err}`);
  });
```

Hier rufen wir [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf und fordern einen Videostream (ohne Audio) an. Es gibt ein Versprechen zurück, dem wir Erfolgs- und Fehler-Callbacks zuweisen.

Der Erfolgs-Callback erhält ein `stream`-Objekt als Eingabe. Es ist die Quelle des {{HTMLElement("video")}}-Elements für unseren neuen Stream.

Sobald der Stream an das `<video>`-Element gebunden ist, starten wir es, indem wir [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play_event) aufrufen.

Der Fehler-Callback wird aufgerufen, wenn das Öffnen des Streams nicht funktioniert. Dies passiert zum Beispiel, wenn keine kompatible Kamera angeschlossen ist oder der Nutzer den Zugriff verweigert hat.

#### Warten, bis das Video zu spielen beginnt

Nach dem Aufruf von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play_event) am {{HTMLElement("video")}}, vergeht eine (hoffentlich kurze) Zeitspanne, bevor der Videostream zu fließen beginnt. Um zu vermeiden, dass darauf gewartet wird, fügen wir dem `video`-Element einen Ereignislisten hinzu, der auf das [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)-Ereignis reagiert, welches gesendet wird, wenn die Videowiedergabe tatsächlich beginnt. Zu diesem Zeitpunkt sind alle Eigenschaften des `video`-Objekts basierend auf dem Format des Streams konfiguriert.

```js live-sample___photo-capture live-sample___photo-capture-with-filters
video.addEventListener(
  "canplay",
  (ev) => {
    if (!streaming) {
      height = video.videoHeight / (video.videoWidth / width);

      video.setAttribute("width", width);
      video.setAttribute("height", height);
      canvas.setAttribute("width", width);
      canvas.setAttribute("height", height);
      streaming = true;
    }
  },
  false,
);
```

Dieser Callback tut nichts, es sei denn, es ist das erste Mal, dass er aufgerufen wird; dies wird durch Betrachtung des Wertes unserer `streaming`-Variablen geprüft, die beim ersten Ausführen dieser Methode `false` ist.

Wenn es tatsächlich der erste Durchlauf ist, setzen wir die Höhe des Videos basierend auf dem Größenunterschied zwischen der tatsächlichen Größe des Videos, `video.videoWidth`, und der Breite, mit der wir es rendern werden, `width`.

Schließlich werden die `width` und `height` sowohl des Videos als auch des Canvas so eingestellt, dass sie mit einander übereinstimmen, indem [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf jede der beiden Eigenschaften jedes Elements aufgerufen wird, und die Breiten und Höhen entsprechend eingestellt werden. Schließlich setzen wir die `streaming`-Variable auf `true`, um zu verhindern, dass wir diesen Einrichtungs-Code versehentlich erneut ausführen.

#### Umgang mit Klicks auf den Button

Um ein Standfoto jedes Mal aufzunehmen, wenn der Benutzer den `startButton` klickt, müssen wir der Schaltfläche einen Ereignislistener hinzufügen, der aufgerufen wird, wenn das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ausgelöst wird:

```js live-sample___photo-capture live-sample___photo-capture-with-filters
startButton.addEventListener(
  "click",
  (ev) => {
    takePicture();
    ev.preventDefault();
  },
  false,
);
```

Diese Methode ist einfach genug: Sie ruft einfach unsere `takePicture()`-Funktion auf, die weiter unten im Abschnitt [Einen Frame aus dem Stream aufnehmen](#einen_frame_aus_dem_stream_aufnehmen) definiert wird, und dann wird [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das empfangene Ereignis aufgerufen, um zu verhindern, dass der Klick mehr als einmal verarbeitet wird.

### Löschen des Fotofelds

Das Löschen des Fotofelds beinhaltet das Erstellen eines Bildes, das dann in ein Format umgewandelt wird, das vom {{HTMLElement("img")}}-Element, das den zuletzt aufgenommenen Frame anzeigt, verwendet werden kann. Dieser Code sieht folgendermaßen aus:

```js live-sample___photo-capture live-sample___photo-capture-with-filters
function clearPhoto() {
  const context = canvas.getContext("2d");
  context.fillStyle = "#AAA";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const data = canvas.toDataURL("image/png");
  photo.setAttribute("src", data);
}

clearPhoto();
```

Wir beginnen damit, eine Referenz auf das versteckte {{HTMLElement("canvas")}}-Element zu erhalten, das wir für das Offscreen-Rendering verwenden. Als nächstes setzen wir das `fillStyle` auf `#AAA` (ein relativ helles Grau) und füllen das gesamte Canvas mit dieser Farbe, indem wir [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) aufrufen.

Zuletzt in dieser Funktion konvertieren wir das Canvas in ein PNG-Bild und rufen [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, um unsere aufgenommenen Standbildbox das Bild anzeigen zu lassen.

### Einen Frame aus dem Stream aufnehmen

Es gibt eine letzte Funktion zu definieren und sie ist der Punkt der gesamten Übung: die `takePicture()`-Funktion, deren Aufgabe es ist, den aktuell angezeigten Videoframe aufzunehmen, in eine PNG-Datei zu konvertieren und im aufgenommenen Frame-Feld anzuzeigen. Der Code sieht folgendermaßen aus:

```js live-sample___photo-capture
function takePicture() {
  const context = canvas.getContext("2d");
  if (width && height) {
    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);

    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
  } else {
    clearPhoto();
  }
}
```

Wie immer, wenn wir mit den Inhalten eines Canvas arbeiten müssen, beginnen wir damit, den [2D-Zeichenkontext](/de/docs/Web/API/CanvasRenderingContext2D) für das versteckte Canvas zu erhalten.

Dann, wenn Breite und Höhe beide ungleich null sind (was bedeutet, dass zumindest potenziell gültige Bilddaten vorhanden sind), setzen wir die Breite und Höhe des Canvas so, dass sie mit denen des aufgenommenen Frames übereinstimmen, und rufen dann [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf, um den aktuellen Frame des Videos in den Kontext zu zeichnen und das gesamte Canvas mit dem Framebild zu füllen.

> [!NOTE]
> Dies nutzt die Tatsache aus, dass das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Interface wie ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) für jede API aussieht, die ein `HTMLImageElement` als Parameter akzeptiert, wobei der aktuelle Frame des Videos als Inhalt des Bildes präsentiert wird.

Sobald das Canvas das aufgenommene Bild enthält, konvertieren wir es in das PNG-Format, indem wir [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) darauf aufrufen; schließlich rufen wir [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, um unsere aufgenommene Standbildbox das Bild anzeigen zu lassen.

Wenn kein gültiges Bild verfügbar ist (d.h. die `width` und `height` sind beide 0), löschen wir den Inhalt der aufgenommenen Frame-Box, indem wir `clearPhoto()` aufrufen.

## Demo

```css hidden live-sample___photo-capture live-sample___photo-capture-with-filters
#video {
  border: 1px solid black;
  box-shadow: 2px 2px 3px black;
  width: 320px;
  height: 240px;
}

#photo {
  border: 1px solid black;
  box-shadow: 2px 2px 3px black;
  width: 320px;
  height: 240px;
}

#canvas {
  display: none;
}

.camera {
  width: 340px;
  display: inline-block;
}

.output {
  width: 340px;
  display: inline-block;
  vertical-align: top;
}

#start-button {
  display: block;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  bottom: 32px;
  background-color: rgb(0 150 0 / 50%);
  border: 1px solid rgb(255 255 255 / 70%);
  box-shadow: 0px 0px 1px 2px rgb(0 0 0 / 20%);
  font-size: 14px;
  font-family: "Lucida Grande", "Arial", sans-serif;
  color: rgb(255 255 255 / 100%);
}

.content-area {
  font:
    1.2rem "Lucida Grande",
    "Arial",
    sans-serif;
  width: 760px;
  padding: 2rem;
}
```

{{EmbedLiveSample('photo-capture', '100%', '30', , , , , 'allow-popups')}}

## Spaß mit Filtern

Da wir Bilder von der Webcam des Benutzers erfassen, indem wir Frames von einem {{HTMLElement("video")}}-Element abgreifen, können wir mit Filtern lustige Effekte auf das Video anwenden. Diese Filter reichen von einfach (das Bild schwarz-weiß machen) bis komplex (Gaussian-Verwischungen und Farbtonrotation).

Damit die Videofilter auf das Foto angewendet werden, benötigt die `takePicture()`-Funktion die folgenden Änderungen. Beachten Sie, dass zwar CSS {{cssxref("filter")}}-Effekte, die auf das Videoelement angewendet werden, dessen Darstellung beeinflussen, diese jedoch nicht automatisch auf das aufgenommene Foto angewendet werden, es sei denn, sie werden im Canvas-Zeichenvorgang behandelt.

```js live-sample___photo-capture-with-filters
function takePicture() {
  const context = canvas.getContext("2d");
  if (width && height) {
    canvas.width = width;
    canvas.height = height;

    // Get the computed CSS filter from the video element.
    // For example, it might return "grayscale(100%)"
    const videoStyles = window.getComputedStyle(video);
    const filterValue = videoStyles.getPropertyValue("filter");

    // Apply the filter to the canvas drawing context.
    // If there's no filter (i.e., it returns "none"), default to "none".
    context.filter = filterValue !== "none" ? filterValue : "none";

    context.drawImage(video, 0, 0, width, height);

    const dataUrl = canvas.toDataURL("image/png");
    photo.setAttribute("src", dataUrl);
  } else {
    clearPhoto();
  }
}
```

{{EmbedLiveSample('photo-capture-with-filters', '100%', '30', , , , , 'allow-popups')}}

Sie können mit diesem Effekt spielen, indem Sie beispielsweise die Entwicklertools im Firefox-Browser verwenden; siehe [CSS-Filter bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html) für Details, wie dies zu tun ist.

## Verwendung spezifischer Geräte

Sie können, falls erforderlich, die Menge der erlaubten Videoquellen auf ein bestimmtes Gerät oder eine Gruppe von Geräten einschränken. Dazu rufen Sie [`MediaDevices.enumerateDevices`](/de/docs/Web/API/MediaDevices/enumerateDevices) auf. Wenn das Versprechen mit einem Array von [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekten, die die verfügbaren Geräte beschreiben, erfüllt wird, finden Sie die, die Sie zulassen möchten, und geben Sie die entsprechenden [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId) oder `deviceId`s im [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt an, das in [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) übergeben wird.

## Siehe auch

- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [Verwendung von Frames aus einem Video](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#using_frames_from_a_video) im Canvas-Leitfaden
- [Beispielcode auf GitHub](https://github.com/mdn/samples-server/tree/master/s/webrtc-capturestill)
