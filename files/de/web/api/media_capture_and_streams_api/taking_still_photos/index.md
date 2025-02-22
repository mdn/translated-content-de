---
title: Fotos mit getUserMedia() aufnehmen
slug: Web/API/Media_Capture_and_Streams_API/Taking_still_photos
l10n:
  sourceCommit: 9b52765cefc649969574e722760cc90168c6b6df
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel zeigt, wie Sie [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden, um auf die Kamera eines Computers oder Mobiltelefons mit `getUserMedia()`-Unterstützung zuzugreifen und damit ein Foto aufzunehmen.

![GetUserMedia-basierte Bildaufnahmeanwendung — links haben wir einen Videostream, der von einer Webcam aufgenommen wurde, und einen Fotoaufnahme-Button, rechts haben wir das Ausgabe-Bild der aufgenommenen Fotos](web-rtc-demo.png)

Sie können auch direkt zum [Demo](#demo) springen, wenn Sie möchten.

## Das HTML-Markup

[Unsere HTML-Oberfläche](#html) hat zwei Hauptfunktionsabschnitte: das Stream- und Erfassungspanel und das Präsentationspanel. Jeder dieser Abschnitte wird nebeneinander in einem eigenen {{HTMLElement("div")}} präsentiert, um das Styling und die Kontrolle zu erleichtern.

Das erste Panel auf der linken Seite enthält zwei Komponenten: ein {{HTMLElement("video")}}-Element, das den Stream von `navigator.mediaDevices.getUserMedia()` empfangen wird, und ein {{HTMLElement("button")}}, auf den der Benutzer klickt, um einen Videorahmen zu erfassen.

```html
<div class="camera">
  <video id="video">Video stream not available.</video>
  <button id="start-button">Take photo</button>
</div>
```

Dies ist unkompliziert, und wir werden sehen, wie alles zusammenpasst, wenn wir uns den JavaScript-Code ansehen.

Als nächstes haben wir ein {{HTMLElement("canvas")}}-Element, in dem die erfassten Rahmen gespeichert, möglicherweise auf irgendeine Weise manipuliert und dann in eine Ausgabebilddatei konvertiert werden. Dieses Canvas wird verborgen gehalten, indem das Canvas mit {{cssxref("display", "display: none")}} gestylt wird, um unnötige Überladungen auf dem Bildschirm zu vermeiden — der Benutzer muss dieses Zwischenstadium nicht sehen.

Wir haben auch ein {{HTMLElement("img")}}-Element, in das wir das Bild zeichnen — dies ist die endgültige Anzeige, die dem Benutzer gezeigt wird.

```html
<canvas id="canvas"> </canvas>
<div class="output">
  <img id="photo" alt="The screen capture will appear in this box." />
</div>
```

Das ist das gesamte relevante HTML. Der Rest ist nur etwas Seitenlayout-Extravaganz und ein wenig Text, der einen Link zurück zu dieser Seite bietet.

## Der JavaScript-Code

Jetzt werfen wir einen Blick auf den [JavaScript-Code](#javascript). Wir werden ihn in ein paar kleine Stücke aufteilen, um die Erklärung zu erleichtern.

### Initialisierung

Wir beginnen damit, das gesamte Skript in eine anonyme Funktion zu packen, um globale Variablen zu vermeiden, und dann verschiedene Variablen einzurichten, die wir verwenden werden.

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
  - : Unabhängig von der Größe des eingehenden Videos skalieren wir das resultierende Bild so, dass es 320 Pixel breit ist.
- `height`
  - : Die Ausgangshöhe des Bildes wird unter Berücksichtigung der `width` und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}} des Streams berechnet.
- `streaming`
  - : Gibt an, ob derzeit ein aktiver Videostream läuft oder nicht.
- `video`
  - : Dies wird ein Verweis auf das {{HTMLElement("video")}}-Element sein, nachdem die Seite geladen ist.
- `canvas`
  - : Dies wird ein Verweis auf das {{HTMLElement("canvas")}}-Element sein, nachdem die Seite geladen ist.
- `photo`
  - : Dies wird ein Verweis auf das {{HTMLElement("img")}}-Element sein, nachdem die Seite geladen ist.
- `startButton`
  - : Dies wird ein Verweis auf das {{HTMLElement("button")}}-Element sein, das zum Auslösen der Erfassung verwendet wird. Wir holen das, nachdem die Seite geladen ist.

### Die startup()-Funktion

Die `startup()`-Funktion wird ausgeführt, wenn die Seite fertig geladen ist, dank [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener). Die Aufgabe dieser Funktion besteht darin, Zugriff auf die Webcam des Benutzers zu verlangen, das Ausgabebild-{{HTMLElement("img")}} in einen Standardzustand zu versetzen und die Ereignislistener einzurichten, die benötigt werden, um jeden Videorahmen von der Kamera zu empfangen und zu reagieren, wenn der Button geklickt wird, um ein Bild aufzunehmen.

#### Elementreferenzen abrufen

Zuerst holen wir uns Referenzen auf die wichtigsten Elemente, auf die wir zugreifen müssen.

```js
  function startup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    startButton = document.getElementById('start-button');
```

#### Den Medienstream abrufen

Die nächste Aufgabe besteht darin, den Medienstream zu erhalten:

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

Hier rufen wir [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf und fordern einen Videostream (ohne Audio) an. Es gibt ein Versprechen zurück, dem wir Erfolgs- und Fehlerrückrufe anhängen.

Der Erfolgsrückruf erhält ein `stream`-Objekt als Eingabe. Es ist die Quelle unseres neuen Streams für das {{HTMLElement("video")}}-Element.

Sobald der Stream mit dem `<video>`-Element verknüpft ist, starten wir ihn, indem wir [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement#play) aufrufen.

Der Fehlerrückruf wird aufgerufen, wenn das Öffnen des Streams nicht funktioniert. Dies passiert z.B., wenn keine kompatible Kamera angeschlossen ist oder der Benutzer den Zugriff verweigert hat.

#### Auf das Starten des Videos hören

Nach dem Aufruf von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement#play) auf dem {{HTMLElement("video")}}, vergeht eine (hoffentlich kurze) Zeitspanne, bevor der Videostream zu fließen beginnt. Um das Blockieren zu vermeiden, bis dies geschieht, fügen wir dem `video` einen Ereignislistener für das [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)-Ereignis hinzu, das geliefert wird, wenn die Videowiedergabe tatsächlich beginnt. Zu diesem Zeitpunkt wurden alle Eigenschaften im `video`-Objekt basierend auf dem Format des Streams konfiguriert.

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

Dieser Rückruf tut nichts, es sei denn, es ist das erste Mal, dass er aufgerufen wurde; dies wird getestet, indem der Wert unserer Variablen `streaming` überprüft wird, die `false` ist, wenn diese Methode zum ersten Mal ausgeführt wird.

Wenn dies tatsächlich der erste Aufruf ist, setzen wir die Höhe des Videos basierend auf dem Größenunterschied zwischen der tatsächlichen Größe des Videos, `video.videoWidth`, und der Breite, bei der wir es rendern werden, `width`.

Schließlich werden die `width` und `height` sowohl des Videos als auch des Canvas angepasst, sodass sie übereinstimmen, indem [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf jede der zwei Eigenschaften jedes Elements aufgerufen wird und die Breiten und Höhen entsprechend gesetzt werden. Schließlich setzen wir die Variable `streaming` auf `true`, um zu verhindern, dass wir diesen Einrichtungscode versehentlich erneut ausführen.

#### Klicks auf den Button behandeln

Um jedes Mal ein Foto aufzunehmen, wenn der Benutzer auf den `startButton` klickt, müssen wir dem Button einen Event-Listener hinzufügen, der aufgerufen wird, wenn das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ausgelöst wird:

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

Diese Methode ist einfach genug: Sie ruft einfach unsere `takePicture()`-Funktion auf, die weiter unten im Abschnitt [Einen Rahmen vom Stream aufnehmen](#einen_rahmen_vom_stream_aufnehmen) definiert ist, und ruft dann [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das empfangene Ereignis auf, um zu verhindern, dass der Klick mehr als einmal verarbeitet wird.

#### Die startup()-Methode abschließen

Es gibt nur noch zwei Zeilen Code in der `startup()`-Methode:

```js
    clearPhoto();
  }
```

Hier rufen wir die `clearPhoto()`-Methode auf, die wir weiter unten im Abschnitt [Den Fotokasten leeren](#den_fotokasten_leeren) beschreiben werden.

### Den Fotokasten leeren

Das Leeren des Fotokastens beinhaltet das Erstellen eines Bildes und dann dessen Umwandlung in ein Format, das vom {{HTMLElement("img")}}-Element verwendet werden kann, das den zuletzt erfassten Rahmen anzeigt. Der Code sieht so aus:

```js
function clearPhoto() {
  const context = canvas.getContext("2d");
  context.fillStyle = "#AAA";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const data = canvas.toDataURL("image/png");
  photo.setAttribute("src", data);
}
```

Wir beginnen, indem wir einen Verweis auf das verborgene {{HTMLElement("canvas")}}-Element erhalten, das wir für das Offscreen-Rendering verwenden. Als Nächstes setzen wir den `fillStyle` auf `#AAA` (ein ziemlich helles Grau) und füllen das gesamte Canvas mit dieser Farbe, indem wir [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) aufrufen.

Zum Schluss in dieser Funktion wandeln wir das Canvas in ein PNG-Bild um und rufen [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, um unseren erfassten Fotokasten das Bild anzeigen zu lassen.

### Einen Rahmen vom Stream aufnehmen

Es gibt eine letzte Funktion zu definieren, und sie ist der Punkt der gesamten Übung: Die `takePicture()`-Funktion, deren Aufgabe es ist, den derzeit angezeigten Videorahmen zu erfassen, ihn in eine PNG-Datei zu konvertieren und ihn im erfassten Rahmenkasten anzuzeigen. Der Code sieht so aus:

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

Wie immer, wenn wir mit den Inhalten eines Canvas arbeiten müssen, beginnen wir damit, den [2D-Zeichenkontext](/de/docs/Web/API/CanvasRenderingContext2D) für das verborgene Canvas zu erhalten.

Dann, wenn die Breite und Höhe beide ungleich Null sind (was bedeutet, dass es zumindest potenziell gültige Bilddaten gibt), setzen wir die Breite und Höhe des Canvas so, dass sie mit dem erfassten Rahmen übereinstimmt, und rufen dann [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf, um den aktuellen Rahmen des Videos im Kontext zu zeichnen, wobei das gesamte Canvas mit dem Rahmenbild gefüllt wird.

> [!NOTE]
> Dies nutzt die Tatsache, dass die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle jedem API, das ein `HTMLImageElement` als Parameter akzeptiert, wie ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) aussieht, wobei der aktuelle Videorahmen als Inhalt des Bildes präsentiert wird.

Sobald das Canvas das erfasste Bild enthält, konvertieren wir es mit einem Aufruf von [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) in das PNG-Format und rufen schließlich [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, um unseren erfassten Fotokasten das Bild anzeigen zu lassen.

Wenn kein gültiges Bild verfügbar ist (d.h. `width` und `height` sind beide 0), löschen wir die Inhalte des erfassten Rahmenkastens, indem wir `clearPhoto()` aufrufen.

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

Da wir Bilder von der Webcam des Benutzers erfassen, indem wir Rahmen aus einem {{HTMLElement("video")}}-Element entnehmen, können wir sehr leicht Filter und lustige Effekte auf das Video anwenden. Wie sich herausstellt, beeinflussen alle CSS-Filter, die Sie auf das Element mit der {{cssxref("filter")}}-Eigenschaft anwenden, das erfasste Foto. Diese Filter können von einfach (das Bild schwarz-weiß machen) bis extrem (Gaußsche Unschärfen und Farbtondrehung) reichen.

Sie können mit diesem Effekt spielen, indem Sie beispielsweise die Firefox-Entwickler-Tools im [Style-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) verwenden; siehe [Bearbeiten von CSS-Filtern](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html) für Details, wie dies zu tun ist.

## Spezifische Geräte verwenden

Falls erforderlich, können Sie die Menge der zulässigen Videoquellen auf ein spezifisches Gerät oder eine bestimmte Gerätegruppe beschränken. Um dies zu tun, rufen Sie [`MediaDevices.enumerateDevices`](/de/docs/Web/API/MediaDevices/enumerateDevices) auf. Wenn das Versprechen mit einem Array von [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekten erfüllt wird, die die verfügbaren Geräte beschreiben, finden Sie die, die Sie zulassen möchten, und geben die entsprechenden [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId) oder `deviceId`s in dem [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt an, das in [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) übergeben wird.

## Siehe auch

- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [Verwenden von Rahmen eines Videos](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#using_frames_from_a_video) im Canvas-Tutorial
- [Beispielcode auf GitHub](https://github.com/mdn/samples-server/tree/master/s/webrtc-capturestill)
