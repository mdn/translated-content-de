---
title: Standbilder mit getUserMedia() aufnehmen
slug: Web/API/Media_Capture_and_Streams_API/Taking_still_photos
l10n:
  sourceCommit: b16d05494dd1252531451ebc3e995ea0f2a9007b
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel zeigt, wie Sie [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden, um auf die Kamera eines Computers oder Mobiltelefons mit `getUserMedia()`-Unterstützung zuzugreifen und ein Foto damit aufzunehmen.

![getUserMedia-basiertes Bildaufnahme-App — Links haben wir einen Videostream von einer Webcam und eine Fotoaufnahme-Schaltfläche, rechts das Standbildausgabe von der Fotoaufnahme](web-rtc-demo.png)

Sie können auch direkt zur [Demo](#demo) springen, wenn Sie möchten.

## Das HTML-Markup

[Unsere HTML-Oberfläche](#html) hat zwei Hauptfunktionsbereiche: das Stream- und Aufnahmepanel sowie das Präsentationspanel. Jeder dieser Bereiche wird nebeneinander in einem eigenen {{HTMLElement("div")}} dargestellt, um das Styling und die Kontrolle zu erleichtern.

Das erste Panel auf der linken Seite enthält zwei Komponenten: ein {{HTMLElement("video")}}-Element, das den Stream von `navigator.mediaDevices.getUserMedia()` empfängt, und eine {{HTMLElement("button")}}, auf die der Benutzer klickt, um einen Videorahmen zu erfassen.

```html
<div class="camera">
  <video id="video">Video stream not available.</video>
  <button id="start-button">Take photo</button>
</div>
```

Das ist unkompliziert, und wir werden sehen, wie alles zusammenpasst, wenn wir uns dem JavaScript-Code widmen.

Als nächstes haben wir ein {{HTMLElement("canvas")}}-Element, in dem die erfassten Frames gespeichert, möglicherweise auf irgendeine Weise manipuliert und dann in eine Ausgabedatei umgewandelt werden. Dieses Canvas bleibt versteckt, indem das Canvas mit {{cssxref("display", "display: none")}} gestylt wird, um den Bildschirm nicht überladen zu lassen — der Benutzer muss diese Zwischenstufe nicht sehen.

Wir haben auch ein {{HTMLElement("img")}}-Element, in das wir das Bild zeichnen — dies ist die endgültige Darstellung, die dem Benutzer angezeigt wird.

```html
<canvas id="canvas"> </canvas>
<div class="output">
  <img id="photo" alt="The screen capture will appear in this box." />
</div>
```

Das ist alles relevante HTML. Der Rest ist nur etwas Seitenlayout und ein wenig Text, der einen Link zurück zu dieser Seite bietet.

## Der JavaScript-Code

Schauen wir uns nun den [JavaScript-Code](#javascript) an. Wir werden ihn in einige leicht verdauliche Teile aufteilen, um die Erklärung zu erleichtern.

### Initialisierung

Wir beginnen damit, das gesamte Skript in eine anonyme Funktion zu kapseln, um globale Variablen zu vermeiden, und richten dann verschiedene Variablen ein, die wir verwenden werden.

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
  - : Unabhängig von der Größe des eingehenden Videos skalieren wir das resultierende Bild auf eine Breite von 320 Pixeln.
- `height`
  - : Die Ausgabehöhe des Bildes wird anhand der `width` und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}} des Streams berechnet.
- `streaming`
  - : Gibt an, ob derzeit ein aktiver Videostream läuft.
- `video`
  - : Dies wird eine Referenz auf das {{HTMLElement("video")}}-Element sein, nachdem die Seite geladen ist.
- `canvas`
  - : Dies wird eine Referenz auf das {{HTMLElement("canvas")}}-Element sein, nachdem die Seite geladen ist.
- `photo`
  - : Dies wird eine Referenz auf das {{HTMLElement("img")}}-Element sein, nachdem die Seite geladen ist.
- `startButton`
  - : Dies wird eine Referenz auf das {{HTMLElement("button")}}-Element sein, das zur Auslösung der Aufnahme verwendet wird. Wir erhalten dies, nachdem die Seite geladen ist.

### Die startup()-Funktion

Die `startup()`-Funktion wird ausgeführt, wenn die Seite fertig geladen ist, dank [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener). Diese Funktion hat die Aufgabe, den Zugang zur Webcam des Benutzers zu erbitten, das Ausgabebild in einen Standardzustand zu versetzen und die Ereignislistener zu etablieren, die nötig sind, um jeden Videorahmen von der Kamera zu empfangen und zu reagieren, wenn die Schaltfläche zum Erfassen eines Bildes geklickt wird.

#### Elemente referenzieren

Zuerst holen wir uns Referenzen zu den Hauptelementen, die wir zugänglich haben müssen.

```js
  function startup() {
    video = document.getElementById("video");
    canvas = document.getElementById("canvas");
    photo = document.getElementById("photo");
    startButton = document.getElementById("start-button");
```

#### Den Mediastream abrufen

Die nächste Aufgabe ist es, den Mediastream zu erhalten:

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

Hier rufen wir [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf und bitten um einen Videostream (ohne Audio). Es gibt ein Versprechen zurück, dem wir Erfolgs- und Fehlschlag-Callbacks anhängen.

Das Erfolgs-Callback erhält ein `stream`-Objekt als Eingabe. Es ist die Quelle des {{HTMLElement("video")}}-Elements für unseren neuen Stream.

Sobald der Stream mit dem `<video>`-Element verknüpft ist, starten wir es, indem wir [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play_event) aufrufen.

Das Fehler-Callback wird aufgerufen, wenn das Öffnen des Streams nicht funktioniert. Dies tritt zum Beispiel auf, wenn keine kompatible Kamera angeschlossen ist oder der Benutzer den Zugriff verweigert hat.

#### Auf das Starten des Videos warten

Nachdem wir [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play_event) auf dem {{HTMLElement("video")}} aufgerufen haben, vergeht eine (hoffentlich kurze) Zeitspanne, bevor der Videostream zu fließen beginnt. Um ein Blockieren zu vermeiden, bis dies geschieht, fügen wir dem `video`-Element einen Ereignislistener für das [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)-Ereignis hinzu, das gesendet wird, wenn die Videowiedergabe tatsächlich beginnt. Zu diesem Zeitpunkt wurden alle Eigenschaften im `video`-Objekt basierend auf dem Format des Streams konfiguriert.

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

Dieses Callback tut nichts, es sei denn, es ist das erste Mal, dass es aufgerufen wird; dies wird getestet, indem der Wert unserer `streaming`-Variablen geprüft wird, die beim ersten Aufruf dieser Methode `false` ist.

Wenn es tatsächlich der erste Lauf ist, stellen wir die Höhe des Videos basierend auf dem Größenunterschied zwischen der tatsächlichen Videogröße, `video.videoWidth`, und der Breite, in der wir es rendern werden, `width`, ein.

Schließlich setzen wir die `width` und `height` sowohl des Videos als auch des Canvas gleich dem Wert des anderen, indem wir [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf jede der beiden Eigenschaften jedes Elements aufrufen und Breiten und Höhen nach Bedarf einstellen. Schließlich setzen wir die `streaming`-Variable auf `true`, um zu verhindern, dass wir diesen Einrichtungscode versehentlich erneut ausführen.

#### Klicks auf die Schaltfläche behandeln

Um bei jedem Klick des Benutzers auf die `startButton`-Schaltfläche ein Standbild aufzunehmen, müssen wir einen Ereignislistener auf die Schaltfläche hinzufügen, der aufgerufen wird, wenn das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ausgelöst wird:

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

Diese Methode ist einfach genug: sie ruft einfach unsere `takePicture()`-Funktion auf, die unten im Abschnitt [Erfassen eines Rahmens aus dem Stream](#erfassen_eines_rahmens_aus_dem_stream) definiert ist. Anschließend wird [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das empfangene Ereignis aufgerufen, um zu verhindern, dass der Klick mehr als einmal behandelt wird.

#### Abschluss der startup()-Methode

In der `startup()`-Methode gibt es nur noch zwei Zeilen Code:

```js
    clearPhoto();
  }
```

Hier rufen wir die `clearPhoto()`-Methode auf, die wir im Abschnitt [Den Fotokasten leeren](#den_fotokasten_leeren) weiter unten beschreiben.

### Den Fotokasten leeren

Das Leeren des Fotokastens beinhaltet das Erstellen eines Bildes und das Konvertieren in ein Format, das vom {{HTMLElement("img")}}-Element verwendet werden kann, das den zuletzt erfassten Frame anzeigt. Dieser Code sieht wie folgt aus:

```js
function clearPhoto() {
  const context = canvas.getContext("2d");
  context.fillStyle = "#AAA";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const data = canvas.toDataURL("image/png");
  photo.setAttribute("src", data);
}
```

Wir beginnen mit dem Abrufen einer Referenz auf das versteckte {{HTMLElement("canvas")}}-Element, das wir für das Offscreen-Rendering verwenden. Als nächstes setzen wir das `fillStyle` auf `#AAA` (ein ziemlich helles Grau) und füllen das gesamte Canvas mit dieser Farbe, indem wir [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) aufrufen.

Zuletzt in dieser Funktion konvertieren wir das Canvas in ein PNG-Bild und rufen [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, um unser erfasstes Standbildfeld das Bild anzeigen zu lassen.

### Erfassen eines Rahmens aus dem Stream

Es gibt noch eine letzte Funktion zu definieren, und sie ist der Kern der gesamten Übung: die `takePicture()`-Funktion, deren Aufgabe es ist, den derzeit angezeigten Videorahmen zu erfassen, in eine PNG-Datei zu konvertieren und im erfassten Rahmenfeld anzuzeigen. Der Code sieht so aus:

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

Wie immer, wenn wir mit den Inhalten eines Canvas arbeiten müssen, beginnen wir mit dem Abrufen des [2D-Zeichenkontextes](/de/docs/Web/API/CanvasRenderingContext2D) für das versteckte Canvas.

Dann, wenn sowohl die Breite als auch die Höhe ungleich Null sind (was bedeutet, dass zumindest potenziell gültige Bilddaten vorhanden sind), setzen wir die Breite und Höhe des Canvas auf die des erfassten Rahmens und rufen [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf, um den aktuellen Bildrahmen des Videos in den Kontext zu zeichnen und das gesamte Canvas mit dem Rahmenbild zu füllen.

> [!NOTE]
> Dies nutzt die Tatsache aus, dass die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle für jede API, die ein `HTMLImageElement` als Parameter akzeptiert, wie ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) aussieht, wobei der aktuelle Videorahmen als Bildinhalt dargestellt wird.

Sobald das Canvas das erfasste Bild enthält, konvertieren wir es in PNG-Format, indem wir [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) darauf aufrufen; schließlich rufen wir [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, um unser erfasstes Standbildfeld das Bild anzeigen zu lassen.

Falls kein gültiges Bild verfügbar ist (d.h. die `width` und `height` sind beide 0), löschen wir den Inhalt des erfassten Rahmenfeldes, indem wir `clearPhoto()` aufrufen.

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

Da wir Bilder von der Webcam des Benutzers erfassen, indem wir Frames aus einem {{HTMLElement("video")}}-Element greifen, können wir mit Filtern lustige Effekte auf das Video anwenden. Diese Filter reichen von einfach (das Bild schwarz-weiß machen) bis komplex (Gauss'sche Unschärfen und Farbtonrotation).

Damit die Videofilter auf das Foto angewendet werden, benötigt die `takePicture()`-Funktion die folgenden Änderungen. Beachten Sie, dass, während CSS-{{cssxref("filter")}}-Effekte, die auf das Videoelement angewendet werden, sich auf dessen Anzeige auswirken, sie nicht automatisch auf das erfasste Foto angewendet werden, es sei denn, dies wird im Canvas-Zeichnungsprozess gehandhabt.

```js
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

```html hidden live-sample___photo-capture-with-filters
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

```css hidden live-sample___photo-capture-with-filters
#video {
  border: 1px solid black;
  box-shadow: 2px 2px 3px black;
  width: 320px;
  height: 240px;
  filter: grayscale(100%);
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

```js hidden live-sample___photo-capture-with-filters
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

      const videoStyles = window.getComputedStyle(video);
      const filterValue = videoStyles.getPropertyValue("filter");
      context.filter = filterValue !== "none" ? filterValue : "none";
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

{{EmbedLiveSample('photo-capture-with-filters', '100%', '30', , , , , 'allow-popups')}}

Sie können diesen Effekt verwenden, zum Beispiel mit den Entwicklertools in Firefox im [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html); siehe [CSS-Filter bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html) für Details, wie dies gemacht wird.

## Verwendung spezifischer Geräte

Sie können, falls nötig, die Menge der zulässigen Videoquellen auf ein spezifisches Gerät oder eine Gerätegruppe beschränken. Dazu rufen Sie [`MediaDevices.enumerateDevices`](/de/docs/Web/API/MediaDevices/enumerateDevices) auf. Wenn das Versprechen mit einem Array von [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekten, die die verfügbaren Geräte beschreiben, erfüllt wird, suchen Sie die Geräte, die Sie zulassen möchten, und geben Sie die entsprechenden [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId) oder `deviceId`s im [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt an, das an [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) übergeben wird.

## Siehe auch

- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [Frames aus einem Video verwenden](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#using_frames_from_a_video) im Canvas-Leitfaden
- [Beispielcode auf GitHub](https://github.com/mdn/samples-server/tree/master/s/webrtc-capturestill)
