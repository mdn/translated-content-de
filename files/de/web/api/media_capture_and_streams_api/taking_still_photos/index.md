---
title: Fotos mit getUserMedia() aufnehmen
slug: Web/API/Media_Capture_and_Streams_API/Taking_still_photos
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel zeigt, wie Sie [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden können, um auf die Kamera eines Computers oder Mobiltelefons mit `getUserMedia()`-Unterstützung zuzugreifen und damit ein Foto aufzunehmen.

![getUserMedia-basierte Bildaufnahme-App — links haben wir einen Video-Stream von einer Webcam und einen Fotoaufnahme-Button, rechts das Standbild, das durch die Fotoaufnahme erstellt wurde](web-rtc-demo.png)

Sie können auch direkt zum [Demo](#demo) springen, wenn Sie möchten.

## Das HTML-Markup

[Unser HTML-Interface](#html) hat zwei Hauptbetriebsteile: das Stream- und Aufnahmepanel und das Präsentationspanel. Jeder dieser Teile wird nebeneinander in seinem eigenen {{HTMLElement("div")}} präsentiert, um das Styling und die Steuerung zu erleichtern.

Das erste Panel auf der linken Seite enthält zwei Komponenten: ein {{HTMLElement("video")}}-Element, das den Stream von `navigator.mediaDevices.getUserMedia()` empfängt, und ein {{HTMLElement("button")}}, das der Benutzer klickt, um einen Videorahmen aufzunehmen.

```html
<div class="camera">
  <video id="video">Video stream not available.</video>
  <button id="start-button">Take photo</button>
</div>
```

Dies ist unkompliziert, und wir werden sehen, wie es zusammenpasst, wenn wir in den JavaScript-Code eintauchen.

Als Nächstes haben wir ein {{HTMLElement("canvas")}}-Element, in dem die aufgenommenen Rahmen gespeichert, möglicherweise in irgendeiner Weise manipuliert und dann in eine Ausgabebilddatei umgewandelt werden. Dieses Canvas wird durch Styling mit {{cssxref("display", "display: none")}} verborgen gehalten, um den Bildschirm nicht zu überladen — der Benutzer muss dieses Zwischenstadium nicht sehen.

Wir haben auch ein {{HTMLElement("img")}}-Element, in das wir das Bild zeichnen — dies ist die endgültige Anzeige, die dem Benutzer gezeigt wird.

```html
<canvas id="canvas"> </canvas>
<div class="output">
  <img id="photo" alt="The screen capture will appear in this box." />
</div>
```

Das ist der gesamte relevante HTML-Code. Der Rest ist nur etwas Seitenlayout-Fluff und ein bisschen Text, der einen Link zurück zu dieser Seite bietet.

## Der JavaScript-Code

Nun lassen Sie uns einen Blick auf den [JavaScript-Code](#javascript) werfen. Wir werden ihn in einige verdauliche Stücke aufteilen, um die Erklärung zu erleichtern.

### Initialisierung

Wir beginnen damit, das gesamte Skript in eine anonyme Funktion zu wickeln, um globale Variablen zu vermeiden, und dann verschiedene Variablen einzurichten, die wir verwenden werden.

```js
(() => {
  const width = 320;    // We will scale the photo width to this
  const height = 0;     // This will be computed based on the input stream

  const streaming = false;

  let video = null;
  let canvas = null;
  let photo = null;
  let startButton = null;
```

Diese Variablen sind:

- `width`
  - : Unabhängig von der Größe des eingehenden Videos werden wir das resultierende Bild skalieren, damit es 320 Pixel breit ist.
- `height`
  - : Die Ausgabehöhe des Bildes wird basierend auf der `width` und dem {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Streams berechnet.
- `streaming`
  - : Zeigt an, ob derzeit ein aktiver Video-Stream läuft.
- `video`
  - : Dies wird ein Verweis auf das {{HTMLElement("video")}}-Element sein, nachdem die Seite geladen ist.
- `canvas`
  - : Dies wird ein Verweis auf das {{HTMLElement("canvas")}}-Element sein, nachdem die Seite geladen ist.
- `photo`
  - : Dies wird ein Verweis auf das {{HTMLElement("img")}}-Element sein, nachdem die Seite geladen ist.
- `startButton`
  - : Dies wird ein Verweis auf das {{HTMLElement("button")}}-Element sein, das zur Auslösung der Aufnahme verwendet wird. Wir erhalten es, nachdem die Seite geladen ist.

### Die `startup()`-Funktion

Die `startup()`-Funktion wird ausgeführt, wenn die Seite vollständig geladen ist, dank [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener). Die Aufgabe dieser Funktion ist es, Zugriff auf die Webcam des Benutzers anzufordern, das Ausgangs-{{HTMLElement("img")}} auf einen Standardzustand zu initialisieren und die erforderlichen Ereignis-Listener einzurichten, um jeden Videorahmen von der Kamera zu empfangen und zu reagieren, wenn der Button geklickt wird, um ein Bild aufzunehmen.

#### Referenzen der Elemente erhalten

Zuerst holen wir Referenzen zu den wichtigsten Elementen, auf die wir zugreifen müssen.

```js
  function startup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    startButton = document.getElementById('start-button');
```

#### Den Medien-Stream erhalten

Die nächste Aufgabe ist es, den Medien-Stream zu erhalten:

```js
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

Hier rufen wir [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf und fordern einen Video-Stream an (ohne Audio). Es gibt ein Promise zurück, an das wir Erfolgs- und Fehler-Callbacks anhängen.

Der Erfolgs-Callback empfängt ein `stream`-Objekt als Eingabe. Es ist die Quelle unseres neuen Streams für das {{HTMLElement("video")}}-Element.

Sobald der Stream an das `<video>`-Element gebunden ist, starten wir ihn, indem wir [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement#play) aufrufen.

Der Fehler-Callback wird aufgerufen, wenn das Öffnen des Streams nicht funktioniert. Dies passiert zum Beispiel, wenn keine kompatible Kamera angeschlossen ist oder der Benutzer den Zugriff verweigert hat.

#### Warten auf den Start der Video-Wiedergabe

Nach dem Aufruf von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement#play) auf dem {{HTMLElement("video")}} folgt eine (hoffentlich kurze) Zeitspanne, bevor der Video-Stream zu fließen beginnt. Um ein Blockieren bis dahin zu vermeiden, fügen wir dem `video` einen Ereignis-Listener für das [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)-Ereignis hinzu, das ausgeliefert wird, wenn die Videowiedergabe tatsächlich beginnt. An diesem Punkt sind alle Eigenschaften im `video`-Objekt basierend auf dem Format des Streams konfiguriert.

```js
video.addEventListener(
  "canplay",
  (ev) => {
    if (!streaming) {
      height = (video.videoHeight / video.videoWidth) * width;

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

Dieser Callback macht nichts, es sei denn, es ist das erste Mal, dass er aufgerufen wurde; dies wird getestet, indem auf den Wert unserer `streaming`-Variablen geschaut wird, die beim ersten Aufruf dieser Methode `false` ist.

Wenn dies tatsächlich das erste Mal ist, richten wir die Höhe des Videos basierend auf der Größenunterschied zwischen der tatsächlichen Größe des Videos, `video.videoWidth`, und der Breite, in der wir es rendern werden, `width`, ein.

Schließlich werden die `width` und `height` sowohl des Videos als auch des Canvas aufeinander abgestimmt, indem [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf jede der beiden Eigenschaften auf jedem Element aufgerufen wird, und die Breiten und Höhen wie angemessen gesetzt werden. Schließlich setzen wir die `streaming`-Variable auf `true`, um zu verhindern, dass wir versehentlich diesen Einrichtungscode erneut ausführen.

#### Klicks auf den Button behandeln

Um jedes Mal ein Standbild aufzunehmen, wenn der Benutzer den `startButton` klickt, müssen wir dem Button einen Ereignis-Listener hinzufügen, der aufgerufen wird, wenn das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ausgegeben wird:

```js
startButton.addEventListener(
  "click",
  (ev) => {
    takePicture();
    ev.preventDefault();
  },
  false,
);
```

Diese Methode ist einfach genug: sie ruft einfach unsere `takePicture()`-Funktion auf, die weiter unten im Abschnitt [Ein Frame aus dem Stream aufnehmen](#ein_frame_aus_dem_stream_aufnehmen) definiert ist, und ruft dann [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem empfangenen Ereignis auf, um zu verhindern, dass der Klick mehr als einmal behandelt wird.

#### Den `startup()`-Methode abschließen

Es gibt nur noch zwei Zeilen Code in der `startup()`-Methode:

```js
    clearPhoto();
  }
```

Hier rufen wir die `clearPhoto()`-Methode auf, die wir weiter unten im Abschnitt [Den Foto-Frame leeren](#den_foto-frame_leeren) beschreiben.

### Den Foto-Frame leeren

Das Leeren des Foto-Frames beinhaltet das Erstellen eines Bildes und dann das Konvertieren in ein Format, das vom {{HTMLElement("img")}}-Element, das den zuletzt aufgenommenen Frame anzeigt, verwendet werden kann. Dieser Code sieht so aus:

```js
function clearPhoto() {
  const context = canvas.getContext("2d");
  context.fillStyle = "#AAA";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const data = canvas.toDataURL("image/png");
  photo.setAttribute("src", data);
}
```

Wir beginnen damit, eine Referenz auf das versteckte {{HTMLElement("canvas")}}-Element zu erhalten, das wir für das Offscreen-Rendering verwenden. Anschließend setzen wir die `fillStyle` zu `#AAA` (ein ziemlich helles Grau) und füllen das gesamte Canvas mit dieser Farbe, indem wir [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) aufrufen.

Zuletzt in dieser Funktion konvertieren wir das Canvas in ein PNG-Bild und rufen [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, um unser aufgenommene Bildbox das Bild anzuzeigen zu lassen.

### Ein Frame aus dem Stream aufnehmen

Es gibt eine letzte Funktion zu definieren, und sie ist der Zweck der gesamten Übung: die `takePicture()`-Funktion, deren Aufgabe es ist, den aktuell angezeigten Videorahmen aufzunehmen, in eine PNG-Datei zu konvertieren und ihn in der aufgenommenen Frame-Box anzuzeigen. Der Code sieht so aus:

```js
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

Wie generell immer, wenn wir mit dem Inhalt eines Canvas arbeiten müssen, beginnen wir damit, den [2D-Zeichenkontext](/de/docs/Web/API/CanvasRenderingContext2D) für das versteckte Canvas zu holen.

Dann, wenn die Breite und Höhe beide nicht null sind (was bedeutet, dass mindestens potenziell gültige Bilddaten vorhanden sind), setzen wir die Breite und Höhe des Canvas, um sie der des aufgenommenen Rahmens anzupassen, und rufen dann [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf, um den aktuellen Frame des Videos in den Kontext zu zeichnen, wobei das gesamte Canvas mit dem Frame-Bild gefüllt wird.

> [!NOTE]
> Dies nutzt die Tatsache aus, dass die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle wie ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) für jede API aussieht, die ein `HTMLImageElement` als Parameter akzeptiert, wobei der aktuelle Frame des Videos als Bildinhalt präsentiert wird.

Sobald das Canvas das aufgenommene Bild enthält, konvertieren wir es in das PNG-Format, indem wir [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) darauf aufrufen; schließlich rufen wir [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, um unser aufgenommene Bildbox das Bild anzeigen zu lassen.

Wenn kein gültiges Bild verfügbar ist (d. h. die `width` und `height` sind beide 0), leeren wir den Inhaltsbereich des aufgenommenen Frames, indem wir `clearPhoto()` aufrufen.

## Demo

### HTML

```html
<div class="content-area">
  <h1>MDN - navigator.mediaDevices.getUserMedia(): Still photo capture demo</h1>
  <p>
    This example demonstrates how to set up a media stream using your built-in
    webcam, fetch an image from that stream, and create a PNG using that image.
  </p>
  <div class="camera">
    <video id="video">Video stream not available.</video>
    <button id="start-button">Take photo</button>
  </div>
  <canvas id="canvas"> </canvas>
  <div class="output">
    <img id="photo" alt="The screen capture will appear in this box." />
  </div>
  <p>
    Visit our article
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos">
      Taking still photos with WebRTC</a
    >
    to learn more about the technologies used here.
  </p>
</div>
```

### CSS

```css
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
  font-size: 16px;
  font-family: "Lucida Grande", "Arial", sans-serif;
  width: 760px;
}
```

### JavaScript

```js
(() => {
  // The width and height of the captured photo. We will set the
  // width to the value defined here, but the height will be
  // calculated based on the aspect ratio of the input stream.

  const width = 320; // We will scale the photo width to this
  let height = 0; // This will be computed based on the input stream

  // |streaming| indicates whether or not we're currently streaming
  // video from the camera. Obviously, we start at false.

  let streaming = false;

  // The various HTML elements we need to configure or control. These
  // will be set by the startup() function.

  let video = null;
  let canvas = null;
  let photo = null;
  let startButton = null;

  function showViewLiveResultButton() {
    if (window.self !== window.top) {
      // Ensure that if our document is in a frame, we get the user
      // to first open it in its own tab or window. Otherwise, it
      // won't be able to request permission for camera access.
      document.querySelector(".content-area").remove();
      const button = document.createElement("button");
      button.textContent = "View live result of the example code above";
      document.body.append(button);
      button.addEventListener("click", () => window.open(location.href));
      return true;
    }
    return false;
  }

  function startup() {
    if (showViewLiveResultButton()) {
      return;
    }
    video = document.getElementById("video");
    canvas = document.getElementById("canvas");
    photo = document.getElementById("photo");
    startButton = document.getElementById("start-button");

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });

    video.addEventListener(
      "canplay",
      (ev) => {
        if (!streaming) {
          height = video.videoHeight / (video.videoWidth / width);

          // Firefox currently has a bug where the height can't be read from
          // the video, so we will make assumptions if this happens.

          if (isNaN(height)) {
            height = width / (4 / 3);
          }

          video.setAttribute("width", width);
          video.setAttribute("height", height);
          canvas.setAttribute("width", width);
          canvas.setAttribute("height", height);
          streaming = true;
        }
      },
      false,
    );

    startButton.addEventListener(
      "click",
      (ev) => {
        takePicture();
        ev.preventDefault();
      },
      false,
    );

    clearPhoto();
  }

  // Fill the photo with an indication that none has been
  // captured.

  function clearPhoto() {
    const context = canvas.getContext("2d");
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
  }

  // Capture a photo by fetching the current contents of the video
  // and drawing it into a canvas, then converting that to a PNG
  // format data URL. By drawing it on an offscreen canvas and then
  // drawing that to the screen, we can change its size and/or apply
  // other changes before drawing it.

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

  // Set up our event listener to run the startup process
  // once loading is complete.
  window.addEventListener("load", startup, false);
})();
```

### Ergebnis

{{EmbedLiveSample('Demo', '100%', 30)}}

## Spaß mit Filtern

Da wir Bilder von der Webcam des Benutzers durch das Aufnehmen von Frames aus einem {{HTMLElement("video")}}-Element erfassen, können wir sehr einfach Filter und lustige Effekte auf das Video anwenden. Wie sich herausstellt, wirken sich alle CSS-Filter, die Sie auf das Element mit der {{cssxref("filter")}}-Eigenschaft anwenden, auch auf das aufgenommene Foto aus. Diese Filter können von einfach (das Bild schwarz-weiß machen) bis extrem (Gaussian Blur und Farbtonrotation) reichen.

Sie können mit diesem Effekt experimentieren, indem Sie zum Beispiel die Firefox-Entwicklerwerkzeuge' [Style-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) verwenden; siehe [CSS-Filter bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html) für Details, wie dies zu tun ist.

## Verwendung spezifischer Geräte

Sie können, falls erforderlich, die erlaubte Menge an Videoquellen auf ein spezifisches Gerät oder eine Reihe von Geräten beschränken. Um dies zu tun, rufen Sie [`MediaDevices.enumerateDevices`](/de/docs/Web/API/MediaDevices/enumerateDevices) auf. Wenn das Versprechen mit einer Liste von [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekten erfüllt wird, die die verfügbaren Geräte beschreiben, finden Sie die, die Sie zulassen möchten, und spezifizieren Sie die entsprechenden [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId) oder `deviceId`s im [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt, das an [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) übergeben wird.

## Siehe auch

- [Beispielcode auf GitHub](https://github.com/mdn/samples-server/tree/master/s/webrtc-capturestill)
- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Verwendung von Frames aus einem Video](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#using_frames_from_a_video) im Canvas-Tutorial
- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
