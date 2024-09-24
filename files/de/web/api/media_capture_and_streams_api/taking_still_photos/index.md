---
title: Fotos mit getUserMedia() aufnehmen
slug: Web/API/Media_Capture_and_Streams_API/Taking_still_photos
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel zeigt, wie Sie [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden können, um auf die Kamera eines Computers oder Mobiltelefons mit Unterstützung von `getUserMedia()` zuzugreifen und mit ihr ein Foto aufzunehmen.

![getUserMedia-basiertes Bildaufnahme-App — links haben wir einen Videostream von einer Webcam und einen Fotoknopf, rechts haben wir das Ergebnisbild der Aufnahme](web-rtc-demo.png)

Sie können auch direkt zur [Demo](#demo) springen, wenn Sie möchten.

## Das HTML-Markup

[Unsere HTML-Oberfläche](#html) hat zwei Hauptfunktionsabschnitte: das Stream- und Aufnahmepanel sowie das Präsentationspanel. Jeder dieser Panels wird nebeneinander in einem eigenen {{HTMLElement("div")}} präsentiert, um das Styling und die Steuerung zu erleichtern.

Das erste Panel auf der linken Seite enthält zwei Komponenten: ein {{HTMLElement("video")}}-Element, das den Stream von `navigator.mediaDevices.getUserMedia()` empfängt, und einen {{HTMLElement("button")}}, den der Benutzer anklicken kann, um einen Videoframe aufzunehmen.

```html
<div class="camera">
  <video id="video">Video stream not available.</video>
  <button id="startbutton">Take photo</button>
</div>
```

Dies ist unkompliziert und wir werden sehen, wie es zusammenhängt, wenn wir in den JavaScript-Code einsteigen.

Als nächstes haben wir ein {{HTMLElement("canvas")}}-Element, in dem die aufgenommenen Frames gespeichert, möglicherweise auf irgendeine Weise bearbeitet, und dann in eine Ausgabebilddatei konvertiert werden. Diese Leinwand wird durch Styling mit {{cssxref("display", "display: none")}} verborgen, um den Bildschirm nicht zu überladen — der Benutzer muss diese Zwischenstufe nicht sehen.

Wir haben auch ein {{HTMLElement("img")}}-Element, in das wir das Bild zeichnen werden — dies ist die endgültige Anzeige, die dem Benutzer gezeigt wird.

```html
<canvas id="canvas"> </canvas>
<div class="output">
  <img id="photo" alt="The screen capture will appear in this box." />
</div>
```

Das ist der gesamte relevante HTML-Code. Der Rest ist nur etwas Seitengestaltungskram und ein bisschen Text, der einen Link zurück zu dieser Seite bietet.

## Der JavaScript-Code

Schauen wir uns nun den [JavaScript-Code](#javascript) an. Wir werden ihn in kleine, mundgerechte Stücke zerlegen, um die Erklärung zu erleichtern.

### Initialisierung

Wir beginnen damit, das gesamte Skript in eine anonyme Funktion zu kapseln, um globale Variablen zu vermeiden und dann verschiedene Variablen einzurichten, die wir verwenden werden.

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
  - : Unabhängig davon, wie groß das eingehende Video ist, werden wir das resultierende Bild auf 320 Pixel Breite skalieren.
- `height`
  - : Die Ausgabehöhe des Bildes wird anhand des `width` und des {{glossary("aspect ratio")}} des Streams berechnet.
- `streaming`
  - : Gibt an, ob derzeit ein aktiver Videostream läuft.
- `video`
  - : Dies wird ein Verweis auf das {{HTMLElement("video")}}-Element sein, nachdem die Seite geladen ist.
- `canvas`
  - : Dies wird ein Verweis auf das {{HTMLElement("canvas")}}-Element sein, nachdem die Seite geladen ist.
- `photo`
  - : Dies wird ein Verweis auf das {{HTMLElement("img")}}-Element sein, nachdem die Seite geladen ist.
- `startbutton`
  - : Dies wird ein Verweis auf das {{HTMLElement("button")}}-Element sein, das zur Aufnahme ausgelöst wird. Wir erhalten diesen Verweis, nachdem die Seite geladen ist.

### Die startup()-Funktion

Die `startup()`-Funktion wird ausgeführt, wenn die Seite vollständig geladen ist, dank {{domxref("EventTarget.addEventListener")}}. Die Aufgabe dieser Funktion besteht darin, Zugriff auf die Webcam des Benutzers anzufordern, das Ausgangs-{{HTMLElement("img")}}-Element auf einen Standardzustand zu initialisieren und die benötigten Ereignis-Listener einzurichten, um jeden Videoframe von der Kamera zu empfangen und darauf zu reagieren, wenn der Knopf zur Bildaufnahme gedrückt wird.

#### Holen von Elementreferenzen

Zunächst greifen wir auf Referenzen zu den Hauptelementen zu, auf die wir zugreifen müssen.

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

Hier rufen wir {{domxref("MediaDevices.getUserMedia()")}} auf und fordern einen Videostream (ohne Audio) an. Es wird ein Versprechen zurückgegeben, an das wir Erfolgs- und Fehler-Callbacks anhängen.

Der Erfolgs-Callback erhält ein `stream`-Objekt als Eingabe. Es ist die Quelle für das {{HTMLElement("video")}}-Element für unseren neuen Stream.

Sobald der Stream mit dem `<video>`-Element verknüpft ist, starten wir es, indem wir [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement#play) aufrufen.

Der Fehler-Callback wird aufgerufen, falls das Öffnen des Streams nicht funktioniert. Dies passiert beispielsweise, wenn keine kompatible Kamera angeschlossen ist oder der Benutzer den Zugriff verweigert.

#### Auf den Start des Videos hören

Nach dem Aufruf von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement#play) auf dem {{HTMLElement("video")}} gibt es eine (hoffentlich kurze) Zeitspanne, die vergeht, bevor der Videostream zu fließen beginnt. Um zu vermeiden, dass bis dahin blockiert wird, fügen wir ein Ereignis-Listener für das {{domxref("HTMLMediaElement/canplay_event", "canplay")}}-Ereignis hinzu, das ausgeliefert wird, wenn die Videowiedergabe tatsächlich beginnt. Zu diesem Zeitpunkt sind alle Eigenschaften des `video`-Objekts basierend auf dem Stream-Format konfiguriert.

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

Dieser Callback macht nichts, es sei denn, es ist das erste Mal, dass er aufgerufen wird; dies wird getestet, indem der Wert unserer Variablen `streaming` überprüft wird, die das erste Mal, wenn diese Methode ausgeführt wird, `false` ist.

Wenn dies tatsächlich das erste Mal ist, setzen wir die Höhe des Videos anhand des Größenunterschiedes zwischen der tatsächlichen Größe des Videos, `video.videoWidth`, und der Breite, mit der wir es rendern werden, `width`.

Schließlich werden die `width` und `height` sowohl des Videos als auch der Leinwand aneinander angepasst, indem auf jedem der beiden Elemente {{domxref("Element.setAttribute()")}} für die beiden Eigenschaften aufgerufen wird und Breiten und Höhen entsprechend gesetzt werden. Schließlich setzen wir die `streaming`-Variable auf `true`, um zu verhindern, dass wir diesen Setup-Code versehentlich erneut ausführen.

#### Klicks auf den Button behandeln

Um jedes Mal, wenn der Benutzer den `startbutton` klickt, ein Foto aufzunehmen, müssen wir dem Button einen Event-Listener hinzufügen, der aufgerufen wird, wenn das {{domxref("Element/click_event", "click")}}-Ereignis ausgegeben wird:

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

Diese Methode ist einfach genug: Sie ruft einfach unsere `takepicture()`-Funktion auf, die unten im Abschnitt [Einen Frame vom Stream erfassen](#einen_frame_vom_stream_erfassen) definiert ist, und ruft dann {{domxref("Event.preventDefault()")}} auf das empfangene Ereignis auf, um zu verhindern, dass der Klick mehr als einmal behandelt wird.

#### Abschluss der startup()-Methode

Es gibt nur noch zwei weitere Codezeilen in der `startup()`-Methode:

```js
    clearphoto();
  }
```

Hier rufen wir die `clearphoto()`-Methode auf, die wir unten im Abschnitt [Das Fotofeld leeren](#das_fotofeld_leeren) beschreiben werden.

### Das Fotofeld leeren

Das Leeren des Fotofeldes beinhaltet das Erstellen eines Bildes und das anschließende Konvertieren in ein Format, das vom {{HTMLElement("img")}}-Element, das den zuletzt aufgenommenen Frame anzeigt, verwendet werden kann. Der Code sieht folgendermaßen aus:

```js
function clearphoto() {
  const context = canvas.getContext("2d");
  context.fillStyle = "#AAA";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const data = canvas.toDataURL("image/png");
  photo.setAttribute("src", data);
}
```

Wir beginnen damit, einen Verweis auf das versteckte {{HTMLElement("canvas")}}-Element zu erhalten, das wir für das Offscreen-Rendering verwenden. Als nächstes setzen wir das `fillStyle` auf `#AAA` (ein ziemlich helles Grau) und füllen das gesamte Canvas mit dieser Farbe, indem wir {{domxref("CanvasRenderingContext2D.fillRect()","fillRect()")}} aufrufen.

Zuletzt konvertieren wir die Leinwand in ein PNG-Bild und rufen {{domxref("Element.setAttribute", "photo.setAttribute()")}} auf, um unser aufgenommene Bildbox das Bild anzeigen zu lassen.

### Einen Frame vom Stream erfassen

Es gibt eine letzte Funktion zu definieren, und sie ist der zentrale Punkt des gesamten Vorgangs: die `takepicture()`-Funktion, deren Aufgabe es ist, den aktuell angezeigten Videoframe zu erfassen, ihn in eine PNG-Datei zu konvertieren und im erfassten Rahmenfeld anzuzeigen. Der Code sieht folgendermaßen aus:

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

Wie es der Fall ist, wenn wir mit dem Inhalt einer Leinwand arbeiten müssen, beginnen wir mit dem Abrufen des [2D-Zeichenkontexts](/de/docs/Web/API/CanvasRenderingContext2D) für die versteckte Leinwand.

Dann, falls Breite und Höhe beide nicht null sind (was bedeutet, dass es zumindest potenziell gültige Bilddaten gibt), setzen wir die Breite und Höhe der Leinwand auf die des aufgenommenen Frames, und rufen {{domxref("CanvasRenderingContext2D.drawImage()", "drawImage()")}} auf, um den aktuellen Frame des Videos in den Kontext zu zeichnen und die gesamte Leinwand mit dem Framebild zu füllen.

> [!NOTE]
> Dies nutzt die Tatsache aus, dass die {{domxref("HTMLVideoElement")}}-Schnittstelle einem {{domxref("HTMLImageElement")}} in jeder API, die ein `HTMLImageElement` als Parameter akzeptiert, ähnelt, wobei der aktuelle Frame des Videos als Inhalt des Bildes präsentiert wird.

Sobald die Leinwand das aufgenommene Bild enthält, konvertieren wir es in das PNG-Format, indem wir {{domxref("HTMLCanvasElement.toDataURL()")}} darauf aufrufen; schließlich rufen wir {{domxref("Element.setAttribute", "photo.setAttribute()")}} auf, um unsere erfasste Bildbox das Bild anzeigen zu lassen.

Wenn kein gültiges Bild verfügbar ist (das heißt, wenn `width` und `height` beide 0 sind), löschen wir den Inhalt des erfassten Rahmenfeldes, indem wir `clearphoto()` aufrufen.

## Demo

### HTML

```html
<div class="contentarea">
  <h1>MDN - navigator.mediaDevices.getUserMedia(): Demoprojekt zur Fotoaufnahme</h1>
  <p>
    Dieses Beispiel zeigt, wie ein Medienstream mit Ihrer integrierten Webcam eingerichtet, ein Bild aus diesem Stream abgerufen und daraus ein PNG erstellt wird.
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
    Besuchen Sie unseren Artikel
    <a
      href="https://developer.mozilla.org/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos">
      Fotos mit WebRTC aufnehmen</a
    >
    um mehr über die hier verwendeten Technologien zu erfahren.
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

Da wir Bilder von der Webcam des Benutzers erfassen, indem wir Frames aus einem {{HTMLElement("video")}}-Element entnehmen, können wir sehr leicht Filter und lustige Effekte auf das Video anwenden. Wie sich herausstellt, wirken sich alle CSS-Filter, die Sie mit der {{cssxref("filter")}}-Eigenschaft auf das Element anwenden, auf das aufgenommene Foto aus. Diese Filter können von einfach (das Bild in Schwarz-Weiß) bis extrem (Gaussian Blurs und Farbtonrotationen) reichen.

Sie können mit diesem Effekt z.B. mit den Firefox-Entwicklertools' [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) experimentieren; sehen Sie [CSS-Filter bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html) für Details, wie das geht.

## Bestimmte Geräte verwenden

Sie können, falls erforderlich, die Menge der erlaubten Videoquellen auf ein bestimmtes Gerät oder einen Satz von Geräten beschränken. Dazu rufen Sie {{domxref("MediaDevices.enumerateDevices")}} auf. Wenn das Versprechen mit einem Array von {{domxref("MediaDeviceInfo")}}-Objekten, die die verfügbaren Geräte beschreiben, erfüllt wird, finden Sie die Geräte, die Sie zulassen möchten, und geben Sie die entsprechenden {{domxref("MediaTrackConstraints.deviceId", "deviceId")}} oder `deviceId`s im {{domxref("MediaTrackConstraints")}}-Objekt an, das an {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} übergeben wird.

## Siehe auch

- [Beispielcode auf GitHub](https://github.com/mdn/samples-server/tree/master/s/webrtc-capturestill)
- {{domxref("MediaDevices.getUserMedia")}}
- [Using frames from a video](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#using_frames_from_a_video) im Canvas-Tutorial
- {{domxref("CanvasRenderingContext2D.drawImage()")}}
