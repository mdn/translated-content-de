---
title: Aufnehmen von Standbildern mit getUserMedia()
slug: Web/API/Media_Capture_and_Streams_API/Taking_still_photos
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel zeigt, wie Sie [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden, um auf die Kamera eines Computers oder Mobiltelefons mit `getUserMedia()`-Unterstützung zuzugreifen und damit ein Foto zu machen.

![Bildaufnahme-App basierend auf getUserMedia — links haben wir einen Videostream von einer Webcam und eine Fototaste, rechts haben wir das Standbild, das durch das Foto aufgenommen wurde](web-rtc-demo.png)

Sie können auch direkt zur [Demo](#demo) springen, wenn Sie möchten.

## Das HTML-Markup

[Unsere HTML-Oberfläche](#html) hat zwei Hauptbetriebsabschnitte: das Stream- und Aufnahmepanel sowie das Präsentationspanel. Jeder von ihnen wird nebeneinander in seinem eigenen {{HTMLElement("div")}} präsentiert, um das Styling und die Steuerung zu erleichtern.

Das erste Panel auf der linken Seite enthält zwei Komponenten: ein {{HTMLElement("video")}}-Element, das den Stream von `navigator.mediaDevices.getUserMedia()` empfängt, und einen {{HTMLElement("button")}}, den der Benutzer anklickt, um einen Videorahmen aufzunehmen.

```html
<div class="camera">
  <video id="video">Video stream not available.</video>
  <button id="startbutton">Take photo</button>
</div>
```

Das ist simpel, und wir werden sehen, wie es zusammenpasst, wenn wir zum JavaScript-Code kommen.

Als nächstes haben wir ein {{HTMLElement("canvas")}}-Element, in das die aufgenommenen Frames gespeichert, möglicherweise in irgendeiner Weise manipuliert und anschließend in eine Ausgabebilddatei konvertiert werden. Diese Leinwand wird dadurch verborgen gehalten, dass sie mit {{cssxref("display", "display: none")}} gestylt wird, um zu vermeiden, dass der Bildschirm überfüllt wird — der Benutzer muss diese Zwischenstufe nicht sehen.

Wir haben auch ein {{HTMLElement("img")}}-Element, in das wir das Bild zeichnen – dies ist die endgültige Darstellung, die dem Benutzer gezeigt wird.

```html
<canvas id="canvas"> </canvas>
<div class="output">
  <img id="photo" alt="The screen capture will appear in this box." />
</div>
```

Das ist das gesamte relevante HTML. Der Rest besteht nur aus etwas Seitenlayout und ein bisschen Text, der einen Link zurück zu dieser Seite bietet.

## Der JavaScript-Code

Schauen wir uns jetzt den [JavaScript-Code](#javascript) an. Wir werden ihn in ein paar mundgerechte Stücke aufteilen, um die Erklärung zu erleichtern.

### Initialisierung

Wir beginnen damit, das gesamte Skript in eine anonyme Funktion zu verpacken, um globale Variablen zu vermeiden, und richten dann verschiedene Variablen ein, die wir verwenden werden.

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
  - : Unabhängig von der Größe des eingehenden Videos skalieren wir das resultierende Bild auf eine Breite von 320 Pixeln.
- `height`
  - : Die Ausgangshöhe des Bildes wird unter Berücksichtigung der `width` und des [Seitenverhältnisses](/de/docs/Glossary/aspect_ratio) des Streams berechnet.
- `streaming`
  - : Gibt an, ob derzeit ein aktiver Videostream läuft.
- `video`
  - : Dies wird ein Verweis auf das {{HTMLElement("video")}}-Element sein, nachdem die Seite geladen ist.
- `canvas`
  - : Dies wird ein Verweis auf das {{HTMLElement("canvas")}}-Element sein, nachdem die Seite geladen ist.
- `photo`
  - : Dies wird ein Verweis auf das {{HTMLElement("img")}}-Element sein, nachdem die Seite geladen ist.
- `startbutton`
  - : Dies wird ein Verweis auf das {{HTMLElement("button")}}-Element sein, das zur Auslösung der Aufnahme verwendet wird. Wir holen dies, nachdem die Seite geladen ist.

### Die `startup()`-Funktion

Die `startup()`-Funktion wird ausgeführt, wenn die Seite vollständig geladen ist, dank [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener). Zu den Aufgaben dieser Funktion gehört es, Zugriff auf die Webcam des Benutzers anzufordern, das Ausgangs-{{HTMLElement("img")}}-Element in einen Standardzustand zu versetzen und die Ereignis-Listener einzurichten, die benötigt werden, um jeden Frame des Videos aus der Kamera zu empfangen und zu reagieren, wenn die Schaltfläche zum Aufnehmen eines Bildes geklickt wird.

#### Abrufen von Elementreferenzen

Zuerst holen wir uns Referenzen zu den Hauptelementen, auf die wir zugreifen müssen.

```js
  function startup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    startbutton = document.getElementById('startbutton');
```

#### Den Medienstrom abrufen

Der nächste Schritt besteht darin, den Medienstrom zu erhalten:

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

Hier rufen wir [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf und fordern einen Videostrom (ohne Audio) an. Es gibt ein Versprechen zurück, an das wir Erfolgs- und Fehler-Callbacks anhängen.

Der Erfolgs-Callback erhält ein `stream`-Objekt als Eingabe. Es ist die Quelle des {{HTMLElement("video")}}-Elements für unseren neuen Stream.

Sobald der Stream mit dem `<video>`-Element verknüpft ist, starten wir ihn, indem wir [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement#play) aufrufen.

Der Fehler-Callback wird aufgerufen, wenn das Öffnen des Streams nicht funktioniert. Dies geschieht zum Beispiel, wenn keine kompatible Kamera angeschlossen ist oder der Benutzer den Zugriff verweigert hat.

#### Video-Startereignis überwachen

Nachdem wir [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement#play) auf dem {{HTMLElement("video")}}-Element aufgerufen haben, gibt es eine (hoffentlich kurze) Zeitspanne, die vergeht, bevor der Videostream beginnt zu fließen. Um zu vermeiden, dass wir bis dahin blockieren, fügen wir dem `video`-Element einen Ereignis-Listener für das [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)-Ereignis hinzu, das ausgelöst wird, wenn die Videowiedergabe tatsächlich beginnt. Zu diesem Zeitpunkt sind alle Eigenschaften im `video`-Objekt basierend auf dem Format des Streams konfiguriert.

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

Dieser Callback macht nichts, es sei denn, es ist das erste Mal, dass er aufgerufen wird; dies wird getestet, indem der Wert unserer `streaming`-Variablen betrachtet wird, die beim ersten Lauf dieser Methode `false` ist.

Wenn dies tatsächlich der erste Lauf ist, setzen wir die Höhe des Videos basierend auf dem Größenunterschied zwischen der tatsächlichen Größe des Videos, `video.videoWidth`, und der Breite, in der wir es rendern werden, `width`, fest.

Schließlich werden `width` und `height` sowohl des Videos als auch der Leinwand einander angepasst, indem [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf jede der beiden Eigenschaften jedes Elements aufgerufen und Breiten und Höhen entsprechend gesetzt werden. Schließlich setzen wir die `streaming`-Variable auf `true`, um zu verhindern, dass wir diesen Einrichtungscode versehentlich erneut ausführen.

#### Ereignisse auf dem Button behandeln

Um bei jedem Klick des Benutzers auf den `startbutton` ein Standbild aufzunehmen, müssen wir dem Button einen Ereignis-Listener hinzufügen, der aufgerufen wird, wenn das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ausgegeben wird:

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

Diese Methode ist einfach genug: Sie ruft einfach unsere `takepicture()`-Funktion auf, die unten im Abschnitt [Ein Bild aus dem Stream aufnehmen](#ein_bild_aus_dem_stream_aufnehmen) definiert wird, und ruft dann [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem empfangenen Ereignis auf, um zu verhindern, dass der Klick mehr als einmal behandelt wird.

#### Abschluss der `startup()`-Methode

Es gibt nur noch zwei weitere Zeilen Code in der `startup()`-Methode:

```js
    clearphoto();
  }
```

Hier rufen wir die `clearphoto()`-Methode auf, die wir unten im Abschnitt [Das Fotobildfeld räumen](#das_fotobildfeld_räumen) beschreiben werden.

### Das Fotobildfeld räumen

Das Räumen des Fotobildfelds besteht darin, ein Bild zu erstellen und es dann in ein Format umzuwandeln, das von dem {{HTMLElement("img")}}-Element verwendet wird, das den zuletzt aufgenommenen Frame anzeigt. Dieser Code sieht so aus:

```js
function clearphoto() {
  const context = canvas.getContext("2d");
  context.fillStyle = "#AAA";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const data = canvas.toDataURL("image/png");
  photo.setAttribute("src", data);
}
```

Wir beginnen damit, einen Verweis auf das verborgene {{HTMLElement("canvas")}}-Element zu bekommen, das wir für das Offscreen-Rendering verwenden. Als nächstes setzen wir das `fillStyle` auf `#AAA` (ein ziemlich helles Grau) und füllen die gesamte Leinwand mit dieser Farbe, indem wir [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) aufrufen.

Zuletzt in dieser Funktion konvertieren wir die Leinwand in ein PNG-Bild und rufen [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, um unser aufgenommenes Standbildfeld dazu zu bringen, das Bild anzuzeigen.

### Ein Bild aus dem Stream aufnehmen

Es gibt noch eine letzte Funktion zu definieren, und es ist der Hauptpunkt der gesamten Übung: die `takepicture()`-Funktion, deren Aufgabe es ist, den aktuell angezeigten Videoframe aufzunehmen, in eine PNG-Datei zu konvertieren und im aufgenommenen Rahmenfeld anzuzeigen. Der Code sieht so aus:

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

Wie immer, wenn wir mit dem Inhalt einer Leinwand arbeiten müssen, beginnen wir damit, den [2D-Zeichenkontext](/de/docs/Web/API/CanvasRenderingContext2D) für die verborgene Leinwand zu erhalten.

Wenn die Breite und Höhe beide ungleich Null sind (was bedeutet, dass es zumindest potenziell gültige Bilddaten gibt), setzen wir die Breite und Höhe der Leinwand so, dass sie der des aufgenommenen Frames entsprechen, und rufen dann [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf, um das aktuelle Frame des Videos in den Kontext zu zeichnen und die gesamte Leinwand mit dem Frame-Bild zu füllen.

> [!NOTE]
> Dies nutzt die Tatsache aus, dass die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Schnittstelle in jeder API, die ein `HTMLImageElement` als Parameter akzeptiert, wie ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) aussieht, wobei das aktuelle Frame des Videos als Inhalt des Bildes angezeigt wird.

Sobald die Leinwand das aufgenommene Bild enthält, konvertieren wir es in PNG-Format, indem wir [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) darauf aufrufen; zuletzt rufen wir [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, um unser aufgenommenes Standbildfeld dazu zu bringen, das Bild anzuzeigen.

Wenn kein gültiges Bild verfügbar ist (das bedeutet, dass `width` und `height` beide 0 sind), löschen wir den Inhalt des aufgenommenen Rahmenfelds, indem wir `clearphoto()` aufrufen.

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

Da wir durch das Aufnehmen von Frames aus einem {{HTMLElement("video")}}-Element Bilder von der Webcam des Benutzers erfassen, können wir ganz einfach Filter und lustige Effekte auf das Video anwenden. Wie sich herausstellt, wirken sich alle CSS-Filter, die Sie mithilfe der {{cssxref("filter")}}-Eigenschaft auf das Element anwenden, auf das aufgenommene Foto aus. Diese Filter können von einfach (das Bild schwarz-weiß machen) bis extrem (Gaussian-Blurs und Farbtonrotation) reichen.

Sie können mit diesem Effekt experimentieren, indem Sie zum Beispiel die [Stilbearbeitung](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) der Firefox-Entwicklertools verwenden; sehen Sie sich [CSS-Filter bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html) an, um zu erfahren, wie dies funktioniert.

## Verwendung spezifischer Geräte

Sie können, falls nötig, die zulässigen Videoquellen auf ein bestimmtes Gerät oder eine Gruppe von Geräten beschränken. Dazu rufen Sie [`MediaDevices.enumerateDevices`](/de/docs/Web/API/MediaDevices/enumerateDevices) auf. Wenn das Versprechen mit einem Array von [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekten erfüllt wird, die die verfügbaren Geräte beschreiben, finden Sie diejenigen, die Sie zulassen möchten, und geben Sie die entsprechenden [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId) oder `deviceId`s im [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt an, das an [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) übergeben wird.

## Siehe auch

- [Beispielcode auf GitHub](https://github.com/mdn/samples-server/tree/master/s/webrtc-capturestill)
- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [Verwendung von Frames aus einem Video](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#using_frames_from_a_video) im Canvas-Tutorial
- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
