---
title: Aufnahme von Standbildern mit getUserMedia()
slug: Web/API/Media_Capture_and_Streams_API/Taking_still_photos
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel zeigt, wie Sie [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden, um auf die Kamera eines Computers oder Mobiltelefons mit Unterstützung für `getUserMedia()` zuzugreifen und ein Foto damit aufzunehmen.

![getUserMedia-basierte Bilderfassungs-Anwendung – links sehen wir einen Videostream von einer Webcam und einen Fotoaufnahme-Button, rechts sehen wir das Standbild-Ausgabeergebnis der Fotoaufnahme](web-rtc-demo.png)

Sie können auch direkt zum [Demo](#demo) springen, wenn Sie möchten.

## Das HTML-Markup

Unsere HTML-Oberfläche hat zwei Hauptfunktionsbereiche: das Stream- und Erfassungsfeld sowie das Präsentationsfeld.
Jeder dieser Bereiche wird nebeneinander in seinem eigenen {{HTMLElement("div")}} präsentiert, um das Styling und die Steuerung zu erleichtern.
Es gibt ein {{HTMLElement("button")}}-Element (`permissions-button`), das wir später in JavaScript verwenden können, um dem Benutzer zu ermöglichen, Kameraberechtigungen pro Gerät mit `getUserMedia()` zu erlauben oder zu blockieren.

Die Box auf der linken Seite enthält zwei Komponenten: ein {{HTMLElement("video")}}-Element, das den Stream von `navigator.mediaDevices.getUserMedia()` empfangen wird, und ein {{HTMLElement("button")}}, um die Videokapitur zu starten.
Das ist einfach, und wir werden sehen, wie es zusammenpasst, wenn wir den JavaScript-Code betrachten.

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

Als nächstes haben wir ein {{HTMLElement("canvas")}}-Element, in das die aufgenommenen Frames gespeichert, möglicherweise auf irgendeine Weise manipuliert und dann in eine Ausgabe-Bilddatei konvertiert werden.
Dieses Canvas wird verborgen gehalten, indem es mit {{cssxref("display", "display: none")}} gestylt wird, um zu vermeiden, dass der Bildschirm überladen wird — der Benutzer muss diese Zwischenschritte nicht sehen.

Wir haben auch ein {{HTMLElement("img")}}-Element, in das wir das Bild zeichnen werden — dies ist die finale Anzeige, die dem Benutzer angezeigt wird.

```html live-sample___photo-capture live-sample___photo-capture-with-filters
<canvas id="canvas"></canvas>
<div class="output">
  <img id="photo" alt="The screen capture will appear in this box." />
</div>
```

## Der JavaScript-Code

Lassen Sie uns nun den JavaScript-Code betrachten. Wir werden ihn in ein paar kleinere Abschnitte unterteilen, um ihn leichter zu erklären.

### Initialisierung

Wir beginnen damit, verschiedene Variablen einzurichten, die wir verwenden werden.

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
  - : Unabhängig davon, wie groß das eingehende Video ist, skalieren wir das resultierende Bild auf eine Breite von 320 Pixeln.
- `height`
  - : Die Ausgabehöhe des Bildes wird basierend auf der `width` und dem {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Streams berechnet.
- `streaming`
  - : Gibt an, ob derzeit ein aktiver Videostream läuft.
- `video`
  - : Eine Referenz auf das {{HTMLElement("video")}}-Element.
- `canvas`
  - : Eine Referenz auf das {{HTMLElement("canvas")}}-Element.
- `photo`
  - : Eine Referenz auf das {{HTMLElement("img")}}-Element.
- `startButton`
  - : Eine Referenz auf das {{HTMLElement("button")}}-Element, das verwendet wird, um die Erfassung auszulösen.
- `allowButton`
  - : Eine Referenz auf das {{HTMLElement("button")}}-Element, das verwendet wird, um zu steuern, ob die Seite auf Geräte zugreifen kann oder nicht.

#### Holen Sie sich den Medienstream

Die nächste Aufgabe besteht darin, den Medienstream zu erhalten: Wir definieren einen Ereignis-Listener, der [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufruft und einen Videostream (ohne Audio) anfordert, wenn der Benutzer auf den "Kamera erlauben"-Button klickt.
Es gibt ein Versprechen zurück, an das wir Erfolgs- und Fehler-Rückrufe anhängen:

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

Der Erfolgs-Rückruf erhält ein `stream`-Objekt als Eingabe, das als Quelle für unser {{HTMLElement("video")}}-Element eingestellt wird.
Sobald der Stream mit dem `<video>`-Element verknüpft ist, starten wir ihn durch einen Aufruf von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play_event).

Der Fehler-Rückruf wird aufgerufen, wenn das Öffnen des Streams nicht funktioniert.
Dies tritt beispielsweise auf, wenn keine kompatible Kamera angeschlossen ist oder der Benutzer den Zugriff verweigert hat.

#### Hören Sie darauf, dass das Video zu spielen beginnt

Nach dem Aufruf von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play_event) auf dem {{HTMLElement("video")}} gibt es eine (hoffentlich kurze) Zeitspanne, die abläuft, bevor der Videostream zu fließen beginnt. Um zu vermeiden, dass wir blockieren, bis das passiert, fügen wir `video` einen Ereignis-Listener für das [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)-Ereignis hinzu, das ausgeliefert wird, wenn die Videowiedergabe tatsächlich beginnt. Zu diesem Zeitpunkt wurden alle Eigenschaften im `video`-Objekt basierend auf dem Format des Streams konfiguriert.

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

Dieser Rückruf tut nichts, es sei denn, es ist das erste Mal, dass er aufgerufen wurde; dies wird getestet, indem der Wert unserer `streaming`-Variablen betrachtet wird, die `false` ist, das erste Mal, dass diese Methode ausgeführt wird.

Wenn dies tatsächlich das erste Mal ist, setzen wir die Höhe des Videos basierend auf dem Größenunterschied zwischen der tatsächlichen Größe des Videos, `video.videoWidth`, und der Breite, bei der wir es rendern werden, `width`.

Schließlich werden die `width` und `height` sowohl des Videos als auch des Canvas so eingestellt, dass sie sich gegenseitig entsprechen, indem [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) für jede der beiden Eigenschaften auf jedem Element aufgerufen wird und Breiten und Höhen entsprechend eingestellt werden. Schließlich setzen wir die `streaming`-Variable auf `true`, um zu verhindern, dass wir diesen Initialisierungscode versehentlich erneut ausführen.

#### Umgang mit Klicks auf den Button

Um jedes Mal, wenn der Benutzer auf den `startButton` klickt, ein Standbild zu erfassen, müssen wir dem Button einen Ereignis-Listener hinzufügen, der aufgerufen wird, wenn das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ausgegeben wird:

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

Diese Methode ist einfach: Sie ruft die `takePicture()`-Funktion auf, die im Abschnitt [Erfassen eines Frames vom Stream](#erfassen_eines_frames_vom_stream) weiter unten definiert ist, und ruft dann [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das empfangene Ereignis auf, um zu verhindern, dass der Klick mehr als einmal verarbeitet wird.

### Löschen des Fotofeldes

Das Löschen des Fotofeldes besteht darin, ein Bild zu erstellen und es dann in ein Format zu konvertieren, das vom {{HTMLElement("img")}}-Element verwendet werden kann, das das zuletzt erfasste Bild anzeigt. Der Code sieht so aus:

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

Wir beginnen damit, eine Referenz auf das versteckte {{HTMLElement("canvas")}}-Element zu erhalten, das wir für das Offscreen-Rendering verwenden. Als nächstes setzen wir das `fillStyle` auf `#aaaaaa` (ein ziemlich helles Grau) und füllen das gesamte Canvas mit dieser Farbe, indem wir [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) aufrufen.

Zuletzt in dieser Funktion konvertieren wir das Canvas in ein PNG-Bild und rufen [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, um unser erfasstes Standbild-Box anzuzeigen.

### Erfassen eines Frames vom Stream

Es gibt eine letzte Funktion zu definieren, und sie ist der Punkt der gesamten Übung: die `takePicture()`-Funktion, deren Aufgabe es ist, den aktuell angezeigten Videoframe zu erfassen, ihn in eine PNG-Datei zu konvertieren und ihn im erfassten Frame-Feld anzuzeigen. Der Code sieht so aus:

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

Wie jedes Mal, wenn wir mit dem Inhalt eines Canvas arbeiten müssen, beginnen wir damit, den [2D-Zeichnungskontext](/de/docs/Web/API/CanvasRenderingContext2D) für das versteckte Canvas zu erhalten.

Dann, wenn die Breite und die Höhe beide ungleich null sind (was bedeutet, dass potenziell gültige Bilddaten vorliegen), stellen wir die Breite und Höhe des Canvas so ein, dass sie mit denen des erfassten Frames übereinstimmen, und rufen dann [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf, um den aktuellen Frame des Videos in den Kontext zu zeichnen und das gesamte Canvas mit dem Frame-Bild zu füllen.

> [!NOTE]
> Dies nutzt die Tatsache, dass die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle für jede API, die ein `HTMLImageElement` als Parameter akzeptiert, wie ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) aussieht, wobei der aktuelle Frame des Videos als Inhalt des Bildes dargestellt wird.

Sobald das Canvas das erfasste Bild enthält, konvertieren wir es durch einen Aufruf von [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) in das PNG-Format; schließlich rufen wir [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, um unser erfasstes Standbild-Box anzuzeigen.

Wenn kein gültiges Bild verfügbar ist (d.h. die `width` und `height` sind beide 0), löschen wir den Inhalt des erfassten Frame-Feldes, indem wir `clearPhoto()` aufrufen.

## Demo

Klicken Sie auf "Kamera erlauben", um ein Eingabegerät auszuwählen und der Seite zu erlauben, auf die Kamera zuzugreifen.
Sobald das Video gestartet ist, können Sie auf "Foto aufnehmen" klicken, um ein Standbild aus dem Stream als Bild aufzunehmen und auf das rechte Canvas zu zeichnen:

{{EmbedLiveSample('photo-capture', '', '500', , , , 'camera', 'allow-popups')}}

## Spaß mit Filtern

Da wir Bilder von der Webcam des Benutzers durch Erfassen von Frames aus einem {{HTMLElement("video")}}-Element aufnehmen, können wir mit Filtern lustige CSS {{cssxref("filter")}}-Effekte auf das Video anwenden. Diese Filter reichen von einfach (Schwarz-Weiß-Bild) bis komplex (Gaussian-Weichzeichner und Farbtonrotation).

```css live-sample___photo-capture-with-filters
#video {
  filter: grayscale(100%);
}
```

Damit die Videofilter auf das Foto angewendet werden, benötigt die `takePicture()`-Funktion die folgenden Änderungen.

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

Sie können mit diesem Effekt spielen, indem Sie zum Beispiel die Firefox-Entwicklungstools' [Style-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) verwenden; sehen Sie [CSS-Filter bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html) für Einzelheiten, wie das geht.

## Verwendung spezifischer Geräte

Sie können, falls erforderlich, die Menge der zulässigen Videoquellen auf ein bestimmtes Gerät oder eine bestimmte Gruppe von Geräten beschränken. Dazu rufen Sie [`MediaDevices.enumerateDevices`](/de/docs/Web/API/MediaDevices/enumerateDevices) auf. Wenn das Versprechen mit einem Array von [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekten, die die verfügbaren Geräte beschreiben, erfüllt wird, finden Sie die Geräte, die Sie zulassen möchten, und geben die entsprechenden [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId) oder `deviceId`s im [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt an, das an [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) übergeben wird.

## Siehe auch

- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [Verwendung von Frames aus einem Video](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#using_frames_from_a_video) im Canvas-Tutorial
