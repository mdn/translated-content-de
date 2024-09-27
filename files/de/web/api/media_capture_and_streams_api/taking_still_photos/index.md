---
title: Standbilder aufnehmen mit getUserMedia()
slug: Web/API/Media_Capture_and_Streams_API/Taking_still_photos
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel zeigt, wie Sie [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden, um auf die Kamera eines Computers oder Mobiltelefons mit `getUserMedia()`-Unterstützung zuzugreifen und ein Foto damit aufzunehmen.

![getUserMedia-basierte Bilderfassungs-App — links haben wir einen Videostream von einer Webcam und einen Knopf zum Fotografieren, rechts das Standbild, das aus dem Foto hervorgeht](web-rtc-demo.png)

Sie können auch direkt zum [Demo](#demo) springen, wenn Sie möchten.

## Das HTML-Markup

[Unsere HTML-Oberfläche](#html) hat zwei Hauptarbeitsbereiche: das Streaming- und Aufnahmepanel sowie das Präsentationspanel. Jede dieser Bereiche wird nebeneinander in einem eigenen {{HTMLElement("div")}} dargestellt, um das Styling und die Steuerung zu erleichtern.

Das erste Panel auf der linken Seite enthält zwei Komponenten: ein {{HTMLElement("video")}}-Element, das den Stream von `navigator.mediaDevices.getUserMedia()` empfangen wird, und einen {{HTMLElement("button")}}, den der Benutzer anklickt, um einen Videoframe aufzunehmen.

```html
<div class="camera">
  <video id="video">Video stream not available.</video>
  <button id="startbutton">Take photo</button>
</div>
```

Dies ist einfach, und wir werden sehen, wie es zusammen funktioniert, wenn wir uns den JavaScript-Code ansehen.

Als Nächstes haben wir ein {{HTMLElement("canvas")}}-Element, in dem die aufgenommenen Frames gespeichert, möglicherweise in irgendeiner Weise manipuliert und dann in eine Ausgabebilddatei umgewandelt werden. Diese Leinwand bleibt durch das Styling mit {{cssxref("display", "display: none")}} verborgen, um eine Überladung des Bildschirms zu vermeiden – der Benutzer muss diesen Zwischenstand nicht sehen.

Wir haben auch ein {{HTMLElement("img")}}-Element, in das wir das Bild zeichnen werden - dies ist die endgültige Anzeige, die dem Benutzer gezeigt wird.

```html
<canvas id="canvas"> </canvas>
<div class="output">
  <img id="photo" alt="The screen capture will appear in this box." />
</div>
```

Das ist das gesamte relevante HTML. Der Rest ist nur etwas Seitenlayout-Details und ein bisschen Text, der einen Link zurück zu dieser Seite bietet.

## Der JavaScript-Code

Nun schauen wir uns den [JavaScript-Code](#javascript) an. Wir teilen ihn in einige kleine Teile auf, um es einfacher zu erklären.

### Initialisierung

Wir beginnen damit, das gesamte Skript in eine anonyme Funktion zu verpacken, um globale Variablen zu vermeiden, und dann verschiedene Variablen einzurichten, die wir verwenden werden.

```js
(() => {
  const width = 320;    // We will scale the photo width to this
  const height = 0;     // This will be computed based on the input stream

  const streaming = false;

  let video = null;
  let canvas = null;
  let photo = null;
  let startbutton = null;
```

Diese Variablen sind:

- `width`
  - : Unabhängig von der Größe des eingehenden Videos skalieren wir das resultierende Bild auf 320 Pixel Breite.
- `height`
  - : Die Ausgabehöhe des Bildes wird unter Berücksichtigung der `width` und des [Seitenverhältnisses](/de/docs/Glossary/aspect_ratio) des Streams berechnet.
- `streaming`
  - : Gibt an, ob derzeit ein aktiver Videostream läuft.
- `video`
  - : Dies wird eine Referenz auf das {{HTMLElement("video")}}-Element sein, nachdem die Seite vollständig geladen ist.
- `canvas`
  - : Dies wird eine Referenz auf das {{HTMLElement("canvas")}}-Element sein, nachdem die Seite vollständig geladen ist.
- `photo`
  - : Dies wird eine Referenz auf das {{HTMLElement("img")}}-Element sein, nachdem die Seite vollständig geladen ist.
- `startbutton`
  - : Dies wird eine Referenz auf das {{HTMLElement("button")}}-Element sein, das zum Auslösen der Aufnahme verwendet wird. Wir werden dies nach dem Laden der Seite erhalten.

### Die startup()-Funktion

Die `startup()`-Funktion wird aufgerufen, nachdem die Seite geladen ist, dank [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener). Diese Funktion ist dafür verantwortlich, den Zugriff auf die Webcam des Benutzers anzufordern, das Ausgangs-{{HTMLElement("img")}} auf einen Standardzustand zu initialisieren und die Ereignislistener zu etablieren, die benötigt werden, um jeden Videosframe von der Kamera zu empfangen und zu reagieren, wenn der Button geklickt wird, um ein Bild aufzunehmen.

#### Elementreferenzen abrufen

Zuerst holen wir uns Referenzen zu den wichtigsten Elementen, auf die wir zugreifen müssen.

```js
  function startup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    startbutton = document.getElementById('startbutton');
```

#### Den Medienstrom abrufen

Die nächste Aufgabe besteht darin, den Medienstrom zu erhalten:

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

Der Erfolgs-Callback erhält ein `stream`-Objekt als Eingabe. Es ist die Quelle für unser neues {{HTMLElement("video")}}-Element.

Sobald der Stream mit dem `<video>`-Element verknüpft ist, starten wir ihn durch Aufruf von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement#play).

Der Fehler-Callback wird aufgerufen, wenn das Öffnen des Streams nicht funktioniert. Das passiert zum Beispiel, wenn keine kompatible Kamera angeschlossen ist oder der Benutzer den Zugriff verweigert.

#### Auf den Start des Videospielens warten

Nachdem [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement#play) auf dem {{HTMLElement("video")}} aufgerufen wurde, vergeht ein (hoffentlich kurzer) Zeitraum, bevor der Videostream beginnt zu fließen. Um zu vermeiden, dass wir blockieren, bis das passiert, fügen wir ein Ereignislistener für das [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)-Ereignis hinzu, das geliefert wird, wenn die Videowiedergabe tatsächlich beginnt. Zu diesem Zeitpunkt sind alle Eigenschaften im `video`-Objekt basierend auf dem Format des Streams konfiguriert.

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

Dieser Callback macht nichts, es sei denn, es ist das erste Mal, dass er aufgerufen wird; das wird getestet, indem wir den Wert unserer `streaming`-Variable betrachten, die beim ersten Mal, wenn diese Methode ausgeführt wird, `false` ist.

Wenn dies tatsächlich der erste Lauf ist, setzen wir die Videohöhe basierend auf dem Größenunterschied zwischen der tatsächlichen Größe des Videos, `video.videoWidth`, und der Breite, in der wir es darstellen, `width`, fest.

Schließlich werden die `width` und `height` sowohl des Videos als auch der Leinwand so eingestellt, dass sie einander entsprechen, indem wir [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf jede der beiden Eigenschaften auf jedem Element aufrufen und die Breiten und Höhen entsprechend einstellen. Schließlich setzen wir die `streaming`-Variable auf `true`, um zu verhindern, dass wir dieses Setup erneut aus Versehen ausführen.

#### Klicks auf den Button behandeln

Um bei jedem Klick des Benutzers auf den `startbutton` ein Standbild aufzunehmen, müssen wir einen Ereignislistener zum Button hinzufügen, der aufgerufen wird, wenn das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ausgelöst wird:

```js
startbutton.addEventListener(
  "click",
  (ev) => {
    takepicture();
    ev.preventDefault();
  },
  false,
);
```

Diese Methode ist einfach genug: Sie ruft einfach unsere `takepicture()`-Funktion auf, die unten im Abschnitt [Einen Frame aus dem Stream erfassen](#einen_frame_aus_dem_stream_erfassen) definiert ist, und dann [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem empfangenen Ereignis auf, um zu verhindern, dass der Klick mehr als einmal gehandhabt wird.

#### Abschluss der startup()-Methode

Es gibt nur noch zwei Zeilen Code in der `startup()`-Methode:

```js
    clearphoto();
  }
```

Hier rufen wir die `clearphoto()`-Methode auf, die wir unten im Abschnitt [Das Fotofeld leeren](#das_fotofeld_leeren) beschreiben.

### Das Fotofeld leeren

Das Leeren des Fotofelds beinhaltet das Erstellen eines Bildes und dessen Umwandlung in ein Format, das vom {{HTMLElement("img")}}-Element, das den zuletzt aufgenommenen Frame anzeigt, verwendet werden kann. Dieser Code sieht folgendermaßen aus:

```js
function clearphoto() {
  const context = canvas.getContext("2d");
  context.fillStyle = "#AAA";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const data = canvas.toDataURL("image/png");
  photo.setAttribute("src", data);
}
```

Wir beginnen damit, eine Referenz auf das versteckte {{HTMLElement("canvas")}}-Element zu erhalten, das wir zum Ausrendern verwenden. Als Nächstes setzen wir das `fillStyle` auf `#AAA` (ein ziemlich helles Grau) und füllen die gesamte Leinwand mit dieser Farbe durch Aufruf von [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect).

Zuletzt in dieser Funktion konvertieren wir die Leinwand in ein PNG-Bild und rufen [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, um unser aufgenommenes Standbildfeld anzeigen zu lassen.

### Einen Frame aus dem Stream erfassen

Es gibt nur noch eine Funktion zu definieren, und sie ist der Hauptgrund für die gesamte Übung: die `takepicture()`-Funktion, deren Aufgabe es ist, den aktuell angezeigten Videoframe zu erfassen, ihn in eine PNG-Datei umzuwandeln und im aufgenommenen Rahmenfeld anzuzeigen. Der Code sieht folgendermaßen aus:

```js
function takepicture() {
  const context = canvas.getContext("2d");
  if (width && height) {
    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);

    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
  } else {
    clearphoto();
  }
}
```

Wie immer, wenn wir mit den Inhalten einer Leinwand arbeiten müssen, beginnen wir damit, den [2D-Zeichenkontext](/de/docs/Web/API/CanvasRenderingContext2D) für die versteckte Leinwand zu erhalten.

Dann, wenn die Breite und Höhe beide ungleich null sind (was bedeutet, dass es zumindest potenziell gültige Bilddaten gibt), setzen wir die Breite und Höhe der Leinwand auf die des aufgenommenen Frames, und rufen dann [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf, um den aktuellen Videoframe in den Kontext zu zeichnen und die gesamte Leinwand mit dem Framebild zu füllen.

> [!NOTE]
> Dies nutzt die Tatsache, dass die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle für jede API wie ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) aussieht, die ein `HTMLImageElement` als Parameter akzeptiert, wobei der aktuelle Frame des Videos als Inhalt des Bildes angezeigt wird.

Sobald die Leinwand das aufgenommene Bild enthält, konvertieren wir es in das PNG-Format durch Aufruf von [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) darauf; schließlich rufen wir [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, um unser Standbildfeld das Bild anzeigen zu lassen.

Wenn kein gültiges Bild vorhanden ist (das heißt, `width` und `height` beide sind 0), leeren wir den Inhalt des aufgenommenen Rahmenfelds durch Aufruf von `clearphoto()`.

## Demo

### HTML

```html
<div class="contentarea">
  <h1>MDN - navigator.mediaDevices.getUserMedia(): Still photo capture demo</h1>
  <p>
    This example demonstrates how to set up a media stream using your built-in
    webcam, fetch an image from that stream, and create a PNG using that image.
  </p>
  <div class="camera">
    <video id="video">Video stream not available.</video>
    <button id="startbutton">Take photo</button>
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

#startbutton {
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

.contentarea {
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
  let startbutton = null;

  function showViewLiveResultButton() {
    if (window.self !== window.top) {
      // Ensure that if our document is in a frame, we get the user
      // to first open it in its own tab or window. Otherwise, it
      // won't be able to request permission for camera access.
      document.querySelector(".contentarea").remove();
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
    startbutton = document.getElementById("startbutton");

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

    startbutton.addEventListener(
      "click",
      (ev) => {
        takepicture();
        ev.preventDefault();
      },
      false,
    );

    clearphoto();
  }

  // Fill the photo with an indication that none has been
  // captured.

  function clearphoto() {
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

  function takepicture() {
    const context = canvas.getContext("2d");
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);

      const data = canvas.toDataURL("image/png");
      photo.setAttribute("src", data);
    } else {
      clearphoto();
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

Da wir Bilder von der Webcam des Benutzers erfassen, indem wir Frames aus einem {{HTMLElement("video")}}-Element entnehmen, können wir sehr leicht Filter und lustige Effekte auf das Video anwenden. Wie sich herausstellt, wirken sich alle CSS-Filter, die Sie mithilfe der {{cssxref("filter")}}-Eigenschaft auf das Element anwenden, auf das aufgenommene Bild aus. Diese Filter können von einfach (z. B. das Bild schwarzweiß machen) bis zu extrem (z. B. Gauß'sche Unschärfe und Farbdrehung) reichen.

Sie können mit diesem Effekt spielen, indem Sie beispielsweise die [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) der Firefox-Entwicklungstools verwenden; sehen Sie sich [CSS-Filter bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html) an, um Details zu erfahren, wie Sie dies tun.

## Verwendung spezifischer Geräte

Sie können, falls erforderlich, die Menge der zulässigen Videoquellen auf ein bestimmtes Gerät oder eine Gruppe von Geräten beschränken. Um dies zu tun, rufen Sie [`MediaDevices.enumerateDevices`](/de/docs/Web/API/MediaDevices/enumerateDevices) auf. Wenn das Versprechen mit einem Array von [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekten erfüllt wird, die die verfügbaren Geräte beschreiben, finden Sie die, die Sie zulassen möchten und geben Sie die entsprechenden [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId) oder `deviceId`s im [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt an, das in [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) übergeben wird.

## Siehe auch

- [Beispielcode auf GitHub](https://github.com/mdn/samples-server/tree/master/s/webrtc-capturestill)
- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Verwendung von Frames aus einem Video](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#using_frames_from_a_video) im Canvas-Tutorial
- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
