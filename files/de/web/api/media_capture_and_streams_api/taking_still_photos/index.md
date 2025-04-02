---
title: Aufnahme von Standbildern mit getUserMedia()
slug: Web/API/Media_Capture_and_Streams_API/Taking_still_photos
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel zeigt, wie Sie [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden, um auf die Kamera eines Computers oder Mobiltelefons mit `getUserMedia()`-Unterstützung zuzugreifen und damit ein Foto zu machen.

![getUserMedia-basierte Bildaufnahme-App — links haben wir einen Videostream von einer Webcam und einen „Foto aufnehmen“-Button, rechts das Standbild, das beim Fotografieren aufgenommen wurde](web-rtc-demo.png)

Sie können auch direkt zum [Demo](#demo) springen, wenn Sie möchten.

## Das HTML-Markup

[Unser HTML-Interface](#html) hat zwei Hauptfunktionsbereiche: das Stream- und Aufnahme-Panel sowie das Präsentations-Panel. Jeder dieser Bereiche wird in einem eigenen {{HTMLElement("div")}} nebeneinander präsentiert, um das Styling und die Kontrolle zu erleichtern.

Das erste Panel links enthält zwei Komponenten: ein {{HTMLElement("video")}}-Element, das den Stream von `navigator.mediaDevices.getUserMedia()` empfängt, und einen {{HTMLElement("button")}}, den der Benutzer anklickt, um einen Videorahmen zu erfassen.

```html
<div class="camera">
  <video id="video">Video stream not available.</video>
  <button id="start-button">Take photo</button>
</div>
```

Das ist einfach und wir werden sehen, wie es zusammenwirkt, wenn wir in den JavaScript-Code eintauchen.

Als nächstes haben wir ein {{HTMLElement("canvas")}}-Element, in das die erfassten Frames gespeichert, möglicherweise in irgendeiner Weise manipuliert und dann in eine Ausgabebilddatei konvertiert werden. Diese Leinwand wird versteckt, indem sie mit {{cssxref("display", "display: none")}} gestylt wird, um den Bildschirm nicht zu überladen – der Benutzer muss diese Zwischenstufe nicht sehen.

Wir haben auch ein {{HTMLElement("img")}}-Element, in das wir das Bild zeichnen werden — dies ist die endgültige Anzeige, die dem Benutzer gezeigt wird.

```html
<canvas id="canvas"> </canvas>
<div class="output">
  <img id="photo" alt="The screen capture will appear in this box." />
</div>
```

Das sind alle relevanten HTML-Teile. Der Rest ist nur etwas Seitengestaltungsdeko und ein wenig Text mit einem Link zurück zu dieser Seite.

## Der JavaScript-Code

Nun lassen Sie uns den [JavaScript-Code](#javascript) betrachten. Wir teilen ihn in einige kleine Stücke auf, um es einfacher zu erklären.

### Initialisierung

Wir beginnen damit, das gesamte Skript in eine anonyme Funktion zu kapseln, um globale Variablen zu vermeiden, und dann verschiedene Variablen einzurichten, die wir verwenden werden.

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
  - : Egal wie groß das eingehende Video ist, wir werden das resultierende Bild so skalieren, dass es 320 Pixel breit ist.
- `height`
  - : Die Ausgangshöhe des Bildes wird unter Berücksichtigung der `width` und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}} des Streams berechnet.
- `streaming`
  - : Gibt an, ob derzeit ein aktiver Videostream läuft oder nicht.
- `video`
  - : Dies wird eine Referenz auf das {{HTMLElement("video")}}-Element sein, nachdem die Seite geladen ist.
- `canvas`
  - : Dies wird eine Referenz auf das {{HTMLElement("canvas")}}-Element sein, nachdem die Seite geladen ist.
- `photo`
  - : Dies wird eine Referenz auf das {{HTMLElement("img")}}-Element sein, nachdem die Seite geladen ist.
- `startButton`
  - : Dies wird eine Referenz auf das {{HTMLElement("button")}}-Element sein, das zur Auslösung der Erfassung verwendet wird. Wir bekommen es, nachdem die Seite geladen ist.

### Die startup() Funktion

Die `startup()` Funktion wird ausgeführt, wenn die Seite fertig geladen ist, dank [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener). Die Aufgabe dieser Funktion ist es, den Zugriff auf die Webcam des Benutzers anzufordern, die Ausgabe im {{HTMLElement("img")}}-Element auf einen Standardzustand zu initialisieren und die Event-Listener einzurichten, die benötigt werden, um jeden Videoframe von der Kamera zu empfangen und darauf zu reagieren, wenn der Knopf zum Erfassen eines Bildes geklickt wird.

#### Elementreferenzen abrufen

Zuerst holen wir Referenzen auf die wichtigen Elemente, die wir zugänglich machen müssen.

```js
  function startup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    startButton = document.getElementById('start-button');
```

#### Den Medienstream abrufen

Der nächste Schritt ist, den Medienstream zu bekommen:

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

Hier rufen wir [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf und fordern einen Videostream (ohne Audio) an. Es gibt ein Versprechen zurück, an das wir Erfolgs- und Fehler-Callbacks anhängen.

Der Erfolgs-Callback erhält ein `stream` Objekt als Eingabe. Es ist die Quelle unseres neuen Streams für das {{HTMLElement("video")}}-Element.

Sobald der Stream mit dem `<video>`-Element verbunden ist, starten wir ihn, indem wir [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play_event) aufrufen.

Der Fehler-Callback wird aufgerufen, wenn das Öffnen des Streams nicht funktioniert. Dies geschieht zum Beispiel, wenn keine kompatible Kamera angeschlossen ist oder der Benutzer den Zugriff verweigert hat.

#### Auf das Starten des Videos warten

Nach dem Aufruf von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play_event) auf dem {{HTMLElement("video")}} gibt es eine (hoffentlich kurze) Zeitspanne, in der sich der Videostream noch nicht fließend bewegt. Um ein Blockieren zu vermeiden, bis das passiert, fügen wir einen Event-Listener zu `video` hinzu, um auf das [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event) Ereignis zu hören, das ausgegeben wird, wenn die Videowiedergabe tatsächlich beginnt. Zu diesem Zeitpunkt sind alle Eigenschaften im `video`-Objekt basierend auf dem Format des Streams konfiguriert.

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

Dieser Callback tut nichts, es sei denn, es ist das erste Mal, dass er aufgerufen wird; dies wird überprüft, indem man den Wert unserer `streaming`-Variablen betrachtet, die beim ersten Ausführen dieser Methode `false` ist.

Wenn dies tatsächlich das erste Mal ist, berechnen wir die Höhe des Videos basierend auf dem Größenunterschied zwischen der tatsächlichen Größe des Videos, `video.videoWidth`, und der Breite, in der wir es rendern möchten, `width`.

Schließlich werden die `width` und `height` sowohl des Videos als auch der Leinwand einander angepasst, indem [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) aufgerufen wird, um die Breiten und Höhen auf die jeweiligen Attribute jedes Elements zu setzen. Schließlich setzen wir die `streaming`-Variable auf `true`, um zu verhindern, dass wir diesen Setup-Code versehentlich erneut ausführen.

#### Klicks auf den Button verarbeiten

Um jedes Mal, wenn der Benutzer auf den `startButton` klickt, ein Standbild aufzunehmen, müssen wir einen Event-Listener zum Button hinzufügen, der aufgerufen wird, wenn das [`click`](/de/docs/Web/API/Element/click_event) Ereignis ausgelöst wird:

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

Diese Methode ist einfach genug: Sie ruft einfach unsere `takePicture()` Funktion auf, die unten im Abschnitt [Einen Frame aus dem Stream erfassen](#einen_frame_aus_dem_stream_erfassen) definiert ist, und dann ruft sie [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf, um zu verhindern, dass der Klick mehr als einmal verarbeitet wird.

#### Die startup()-Methode abschließen

Es gibt nur noch zwei Zeilen Code in der `startup()`-Methode:

```js
    clearPhoto();
  }
```

Hier rufen wir die `clearPhoto()`-Methode auf, die wir unten im Abschnitt [Das Fotofeld leeren](#das_fotofeld_leeren) beschreiben.

### Das Fotofeld leeren

Das Leeren des Fotofeldes umfasst das Erstellen eines Bildes, das dann in ein Format umgewandelt wird, das vom {{HTMLElement("img")}}-Element verwendet werden kann, welches den zuletzt aufgenommenen Frame anzeigt. Dieser Code sieht so aus:

```js
function clearPhoto() {
  const context = canvas.getContext("2d");
  context.fillStyle = "#AAA";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const data = canvas.toDataURL("image/png");
  photo.setAttribute("src", data);
}
```

Wir beginnen damit, eine Referenz auf das versteckte {{HTMLElement("canvas")}}-Element zu bekommen, das wir für das Offscreen-Rendering verwenden. Als nächstes setzen wir das `fillStyle` auf `#AAA` (ein recht helles Grau) und füllen die gesamte Leinwand mit dieser Farbe, indem wir [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) aufrufen.

Zuletzt in dieser Funktion konvertieren wir die Leinwand in ein PNG-Bild und rufen [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, um unser Fotoaufnahmefeld das Bild anzeigen zu lassen.

### Einen Frame aus dem Stream erfassen

Es gibt noch eine letzte Funktion zu definieren, und sie ist der Kern der gesamten Übung: die `takePicture()` Funktion, deren Aufgabe es ist, den aktuell angezeigten Videoframe zu erfassen, ihn in eine PNG-Datei zu konvertieren und ihn im aufgenommenen Rahmenfeld anzuzeigen. Der Code sieht so aus:

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

Wie immer, wenn wir mit den Inhalten einer Leinwand arbeiten müssen, beginnen wir damit, den [2D-Zeichenkontext](/de/docs/Web/API/CanvasRenderingContext2D) für die versteckte Leinwand zu erhalten.

Dann, wenn die Breite und Höhe beide ungleich null sind (was bedeutet, dass es zumindest potenziell gültige Bilddaten gibt), setzen wir die Breite und Höhe der Leinwand auf die des aufgenommenen Frames, rufen dann [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf, um den aktuellen Frame des Videos in den Kontext zu zeichnen, und füllen die gesamte Leinwand mit dem Framebild.

> [!NOTE]
> Dies nutzt aus, dass die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Schnittstelle für jede API, die ein `HTMLImageElement` als Parameter akzeptiert, wie ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) aussieht, wobei das aktuelle Frame des Videos als Inhalt des Bildes präsentiert wird.

Sobald die Leinwand das erfasste Bild enthält, konvertieren wir es durch Aufruf von [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) darauf in das PNG-Format; schließlich rufen wir [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, um unser aufgenommenes Standbildfeld das Bild anzeigen zu lassen.

Wenn kein gültiges Bild verfügbar ist (das heißt, die `width` und `height` sind beide 0), löschen wir den Inhalt des aufgenommenen Rahmenfeldes, indem wir `clearPhoto()` aufrufen.

## Demo

### HTML

```html live-sample___photo-capture
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
      Taking still photos with WebRTC
    </a>
    to learn more about the technologies used here.
  </p>
</div>
```

```css hidden live-sample___photo-capture
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

### JavaScript

```js live-sample___photo-capture
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
      button.textContent = "Open example in new window";
      document.body.append(button);
      button.addEventListener("click", () =>
        window.open(
          location.href,
          "MDN",
          "width=850,height=700,left=150,top=150",
        ),
      );
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

  // Fill the photo with an indication that none has been captured.
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

{{EmbedLiveSample('photo-capture', '100%', '30', , , , , 'allow-popups')}}

## Spaß mit Filtern

Da wir Bilder von der Kamera des Benutzers erfassen, indem wir Frames aus einem {{HTMLElement("video")}}-Element aufnehmen, können wir sehr einfach Filter und lustige Effekte auf das Video anwenden. Es stellt sich heraus, dass alle CSS-Filter, die Sie auf das Element mit der {{cssxref("filter")}}-Eigenschaft anwenden, das aufgenommene Foto beeinträchtigen. Diese Filter können vom Einfachen (Schwarz-Weiß-Darstellung) bis zum Extremen (Gaußsche Weichzeichner und Farbtonrotation) reichen.

Sie können diesen Effekt mit den Entwicklerwerkzeugen von Firefox im [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) ausprobieren; siehe [CSS-Filter bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html) für Details, wie dies zu tun ist.

## Verwendung bestimmter Geräte

Bei Bedarf können Sie die erlaubten Videoquellen auf ein bestimmtes Gerät oder eine Gruppe von Geräten beschränken. Dazu rufen Sie [`MediaDevices.enumerateDevices`](/de/docs/Web/API/MediaDevices/enumerateDevices) auf. Wenn das Versprechen mit einem Array von [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo) Objekten erfüllt wird, die die verfügbaren Geräte beschreiben, suchen Sie die Geräte, die Sie zulassen möchten, und geben Sie die entsprechenden [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId) oder `deviceId`s im [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) Objekt an, das an [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) übergeben wird.

## Siehe auch

- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [Verwendung von Frames eines Videos](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#using_frames_from_a_video) im Canvas-Leitfaden
- [Beispielcode auf GitHub](https://github.com/mdn/samples-server/tree/master/s/webrtc-capturestill)
