---
title: Aufnehmen von Fotos mit getUserMedia()
slug: Web/API/Media_Capture_and_Streams_API/Taking_still_photos
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel zeigt, wie Sie [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden, um auf die Kamera eines Computers oder Mobiltelefons mit `getUserMedia()`-Unterstützung zuzugreifen und ein Foto damit aufzunehmen.

![getUserMedia-basierte Bildaufnahme-App — links haben wir einen Videostream von einer Webcam und einen Fotoaufnahme-Button, rechts das Standbild-Ergebnis der Fotoaufnahme](web-rtc-demo.png)

Sie können auch direkt zum [Demo](#demo) springen, wenn Sie mögen.

## Das HTML-Markup

Unsere HTML-Oberfläche hat zwei Hauptarbeitsbereiche: das Stream- und Aufnahme-Panel sowie das Präsentations-Panel. Jedes davon wird nebeneinander in seinem eigenen {{HTMLElement("div")}} dargestellt, um Styling und Steuerung zu erleichtern. Es gibt ein {{HTMLElement("button")}}-Element (`permissions-button`), das wir später in JavaScript verwenden können, um es dem Benutzer zu ermöglichen, Kameraerlaubnisse pro Gerät mit `getUserMedia()` zu erlauben oder zu blockieren.

Die Box auf der linken Seite enthält zwei Komponenten: ein {{HTMLElement("video")}}-Element, das den Stream von `navigator.mediaDevices.getUserMedia()` erhält, und einen {{HTMLElement("button")}}, um die Videoaufnahme zu starten. Dies ist unkompliziert, und wir werden sehen, wie es zusammenpasst, wenn wir zum JavaScript-Code kommen.

```css hidden live-sample___photo-capture live-sample___photo-capture-with-filters
body {
  font:
    1rem "Lucida Grande",
    "Arial",
    sans-serif;
  padding: 0.8rem;
}

button {
  display: block;
  margin-block: 1rem;
}

#start-button {
  position: relative;
  margin: auto;
  bottom: 32px;
  background-color: rgb(0 150 0 / 50%);
  border: 1px solid rgb(255 255 255 / 70%);
  box-shadow: 0px 0px 1px 2px rgb(0 0 0 / 20%);
  font-size: 14px;
  color: white;
}

#video,
#photo {
  border: 1px solid black;
  box-shadow: 2px 2px 3px black;
  width: 100%;
  height: auto;
}

#canvas {
  display: none;
}

.camera,
.output {
  display: inline-block;
  width: 49%;
  height: auto;
}

.output {
  vertical-align: top;
}

code {
  background-color: lightgrey;
}
```

```html hidden live-sample___photo-capture live-sample___photo-capture-with-filters
<h1>Still photo capture demo</h1>
<p>
  This example demonstrates how to use
  <code>navigator.mediaDevices.getUserMedia()</code> to set up a media stream
  using your webcam or other video device, fetch an image from that stream, and
  create a PNG using that image.
</p>
<button id="permissions-button">Allow camera</button>
```

```html hidden live-sample___photo-capture-with-filters
<p>
  &#9432; This example uses the same code as before, but this time, we're adding
  a filter effect to the <code>&lt;video&gt;</code> element using a CSS
  <code>filter: grayscale(100%)</code> declaration. We can then check if the
  video element has any CSS <code>filter</code> applied, and use the same filter
  when drawing to the canvas:
</p>
```

```html live-sample___photo-capture live-sample___photo-capture-with-filters
<div class="camera">
  <video id="video">Video stream not available.</video>
  <button id="start-button">Capture photo</button>
</div>
```

Als nächstes haben wir ein {{HTMLElement("canvas")}}-Element, in dem die aufgenommenen Frames gespeichert, möglicherweise auf irgendeine Weise bearbeitet und dann in eine Bilddatei konvertiert werden. Dieses Canvas wird durch Styling mit {{cssxref("display", "display: none")}} verborgen, um das Bildschirmlayout nicht zu stören — der Benutzer muss diese Zwischenstufe nicht sehen.

Wir haben auch ein {{HTMLElement("img")}}-Element, in das wir das Bild zeichnen werden — dies ist die endgültige Darstellung, die dem Benutzer gezeigt wird.

```html live-sample___photo-capture live-sample___photo-capture-with-filters
<canvas id="canvas"></canvas>
<div class="output">
  <img id="photo" alt="The screen capture will appear in this box." />
</div>
```

## Der JavaScript-Code

Werfen wir nun einen Blick auf den JavaScript-Code. Wir werden ihn in einige leicht verständliche Abschnitte aufteilen, um die Erklärung zu erleichtern.

### Initialisierung

Wir beginnen mit dem Einrichten verschiedener Variablen, die wir verwenden werden.

```js live-sample___photo-capture live-sample___photo-capture-with-filters
const width = 320; // We will scale the photo width to this
let height = 0; // This will be computed based on the input stream

let streaming = false;

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const photo = document.getElementById("photo");
const startButton = document.getElementById("start-button");
const allowButton = document.getElementById("permissions-button");
```

Diese Variablen sind:

- `width`
  - : Unabhängig von der Größe des eingehenden Videos skalieren wir das resultierende Bild auf eine Breite von 320 Pixeln.
- `height`
  - : Die Ausgabehöhe des Bildes wird basierend auf `width` und dem {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Streams berechnet.
- `streaming`
  - : Gibt an, ob derzeit ein aktiver Videostream läuft oder nicht.
- `video`
  - : Eine Referenz auf das {{HTMLElement("video")}}-Element.
- `canvas`
  - : Eine Referenz auf das {{HTMLElement("canvas")}}-Element.
- `photo`
  - : Eine Referenz auf das {{HTMLElement("img")}}-Element.
- `startButton`
  - : Eine Referenz auf das {{HTMLElement("button")}}-Element, das zum Starten der Aufnahme verwendet wird.
- `allowButton`
  - : Eine Referenz auf das {{HTMLElement("button")}}-Element, das zum Steuern dient, ob die Seite auf Geräte zugreifen kann oder nicht.

#### Den Mediastream abrufen

Die nächste Aufgabe besteht darin, den Mediastream abzurufen: Wir definieren einen Event-Listener, der [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufruft und einen Videostream (ohne Audio) anfordert, wenn der Benutzer auf den Button "Kamera erlauben" klickt. Dies gibt ein Versprechen zurück, an das wir Erfolgs- und Fehler-Callbacks anhängen:

```js live-sample___photo-capture live-sample___photo-capture-with-filters
allowButton.addEventListener("click", () => {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
    })
    .catch((err) => {
      console.error(`An error occurred: ${err}`);
    });
});
```

Das Erfolgs-Callback erhält ein `stream`-Objekt als Eingabe, das als Quelle für unser {{HTMLElement("video")}}-Element gesetzt wird. Sobald der Stream mit dem `<video>`-Element verlinkt ist, starten wir es, indem wir [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play_event) aufrufen.

Das Fehler-Callback wird aufgerufen, wenn das Öffnen des Streams nicht funktioniert. Dies passiert zum Beispiel, wenn keine kompatible Kamera angeschlossen ist oder der Benutzer den Zugriff verweigert hat.

#### Auf das Abspielen des Videos hören

Nach dem Aufruf von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play_event) auf dem {{HTMLElement("video")}} gibt es eine (hoffentlich kurze) Zeitspanne, bevor der Videostream zu fließen beginnt. Um ein Blockieren bis dahin zu vermeiden, fügen wir dem `video`-Element einen Event-Listener für das [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)-Event hinzu, das ausgeliefert wird, wenn die Videowiedergabe tatsächlich beginnt. Zu diesem Zeitpunkt wurden alle Eigenschaften im `video`-Objekt basierend auf dem Format des Streams konfiguriert.

```js live-sample___photo-capture live-sample___photo-capture-with-filters
video.addEventListener("canplay", (ev) => {
  if (!streaming) {
    height = video.videoHeight / (video.videoWidth / width);

    video.setAttribute("width", width);
    video.setAttribute("height", height);
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);
    streaming = true;
  }
});
```

Dieses Callback tut nichts, es sei denn, es ist das erste Mal, dass es aufgerufen wird; dies wird durch Überprüfen des Werts unserer `streaming`-Variable getestet, die beim ersten Ausführen dieser Methode `false` ist.

Wenn dies tatsächlich der erste Lauf ist, setzen wir die Höhe des Videos basierend auf dem Größendifferenz zwischen der tatsächlichen Größe des Videos, `video.videoWidth`, und der Breite, in der wir es rendern werden, `width`.

Schließlich werden die `width` und `height` sowohl des Videos als auch des Canvas entsprechend einander angepasst, indem [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf jedes der beiden Eigenschaften der beiden Elemente angewendet wird und Breiten und Höhen entsprechend festgelegt werden. Schließlich setzen wir die `streaming`-Variable auf `true`, um zu verhindern, dass dieser Setup-Code versehentlich erneut ausgeführt wird.

#### Klicks auf den Button behandeln

Um jedes Mal, wenn der Benutzer auf den `startButton` klickt, ein Standbild aufzunehmen, müssen wir dem Button einen Event-Listener hinzufügen, der aufgerufen wird, wenn das [`click`](/de/docs/Web/API/Element/click_event)-Event ausgelöst wird:

```js live-sample___photo-capture live-sample___photo-capture-with-filters
startButton.addEventListener("click", (ev) => {
  takePicture();
  ev.preventDefault();
});
```

Diese Methode ist unkompliziert: Sie ruft die `takePicture()`-Funktion auf, die im Abschnitt [Einen Frame aus dem Stream aufnehmen](#einen_frame_aus_dem_stream_aufnehmen) unten definiert ist, und ruft dann [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das empfangene Event auf, um zu verhindern, dass der Klick mehr als einmal verarbeitet wird.

### Das Fotofeld leeren

Das Leeren des Fotofeldes beinhaltet das Erstellen eines Bildes, um es dann in ein Format umzuwandeln, das vom {{HTMLElement("img")}}-Element verwendet werden kann, das das zuletzt aufgenommene Bild anzeigt. Dieser Code sieht so aus:

```js live-sample___photo-capture live-sample___photo-capture-with-filters
function clearPhoto() {
  const context = canvas.getContext("2d");
  context.fillStyle = "#aaaaaa";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const data = canvas.toDataURL("image/png");
  photo.setAttribute("src", data);
}

clearPhoto();
```

Wir beginnen damit, eine Referenz auf das versteckte {{HTMLElement("canvas")}}-Element zu erhalten, das wir für das Offscreen-Rendering verwenden. Als Nächstes setzen wir das `fillStyle` auf `#aaaaaa` (ein ziemlich helles Grau) und füllen das gesamte Canvas mit dieser Farbe, indem wir [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) aufrufen.

Zuletzt in dieser Funktion konvertieren wir das Canvas in ein PNG-Bild und rufen [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, um unsere aufgenommene Standbild-Box anzuzeigen.

### Einen Frame aus dem Stream aufnehmen

Es gibt eine letzte Funktion zu definieren, die den Kern der ganzen Übung bildet: die `takePicture()`-Funktion, deren Aufgabe es ist, den aktuell angezeigten Videoframe aufzunehmen, in eine PNG-Datei zu konvertieren und im aufgenommenen Framefeld anzuzeigen. Der Code sieht so aus:

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

Wie immer, wenn wir mit dem Inhalt eines Canvas arbeiten müssen, beginnen wir damit, den [2D-Zeichenkontext](/de/docs/Web/API/CanvasRenderingContext2D) für das versteckte Canvas abzurufen.

Dann, wenn sowohl die Breite als auch die Höhe ungleich Null sind (was bedeutet, dass zumindest potenziell gültige Bilddaten vorhanden sind), setzen wir die Breite und Höhe des Canvas auf die des aufgenommenen Frames und rufen dann [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf, um den aktuellen Videoframe in den Kontext zu zeichnen und das gesamte Canvas mit dem Framebild zu füllen.

> [!NOTE]
> Dies nutzt die Tatsache aus, dass die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle für jede API, die ein `HTMLImageElement` als Parameter akzeptiert, wie ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) aussieht, wobei der aktuelle Frame des Videos als Inhalt des Bildes präsentiert wird.

Sobald das Canvas das aufgenommene Bild enthält, konvertieren wir es in das PNG-Format, indem wir [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) darauf aufrufen; schließlich rufen wir [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, um unsere aufgenommene Standbild-Box anzuzeigen.

Wenn kein gültiges Bild verfügbar ist (das heißt, die `width` und `height` sind beide 0), löschen wir den Inhalt der aufgenommenen Frame-Box, indem wir `clearPhoto()` aufrufen.

## Demo

Klicken Sie auf "Kamera erlauben", um ein Eingabegerät auszuwählen und der Seite den Zugriff auf die Kamera zu erlauben. Sobald das Video gestartet ist, können Sie auf "Foto aufnehmen" klicken, um ein Standbild aus dem Stream aufzunehmen, das als Bild auf das Canvas rechts gezeichnet wird:

{{EmbedLiveSample('photo-capture', '', '500', , , , 'camera', 'allow-popups')}}

## Spaß mit Filtern

Da wir Bilder von der Webcam des Benutzers erfassen, indem wir Frames aus einem {{HTMLElement("video")}}-Element übernehmen, können wir lustige CSS-{{cssxref("filter")}}-Effekte mit Filtern auf das Video anwenden. Diese Filter reichen von einfach (das Bild schwarzweiß machen) bis komplex (Gaußsche Unschärfen und Farbtonrotation).

```css live-sample___photo-capture-with-filters
#video {
  filter: grayscale(100%);
}
```

Damit die Video-Filter auf das Foto angewendet werden, benötigt die `takePicture()`-Funktion die folgenden Änderungen.

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

{{EmbedLiveSample('photo-capture-with-filters', , '600', , , , 'camera', 'allow-popups')}}

Sie können mit diesem Effekt spielen, indem Sie zum Beispiel die [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) von Firefox Developer Tools verwenden; Details dazu finden Sie unter [Bearbeiten von CSS-Filtern](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html).

## Verwenden bestimmter Geräte

Sie können, falls erforderlich, die Menge der zulässigen Videoquellen auf ein bestimmtes Gerät oder eine Gruppe von Geräten beschränken. Um dies zu tun, rufen Sie [`MediaDevices.enumerateDevices`](/de/docs/Web/API/MediaDevices/enumerateDevices) auf. Wenn das Versprechen mit einem Array von [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekten erfüllt wird, die die verfügbaren Geräte beschreiben, finden Sie die Geräte, die Sie erlauben möchten, und geben Sie die entsprechenden [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId) oder `deviceId`s im [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt an, das an [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) übergeben wird.

## Siehe auch

- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [Verwendung von Frames aus einem Video](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#using_frames_from_a_video) im Canvas-Tutorial
