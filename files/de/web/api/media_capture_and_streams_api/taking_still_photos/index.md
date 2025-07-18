---
title: Aufnehmen von Standbildern mit getUserMedia()
slug: Web/API/Media_Capture_and_Streams_API/Taking_still_photos
l10n:
  sourceCommit: a7b4ab7832c959f4fe6529e33e56e4bfcafad7cb
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel zeigt, wie Sie [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden, um auf die Kamera eines Computers oder Mobiltelefons mit Unterstützung von `getUserMedia()` zuzugreifen und ein Foto damit aufzunehmen.

![Auf einer getUserMedia-basierten Bildaufnahme-App sehen wir links einen Videostream von einer Webcam und einen Fotoaufnahme-Button, rechts sehen wir das Standbild-Ergebnis der Fotoaufnahme](web-rtc-demo.png)

Sie können auch direkt zum [Demo](#demo) springen, wenn Sie möchten.

## Das HTML-Markup

Unsere HTML-Oberfläche hat zwei Hauptbereiche: das Strom- und Aufnahmepanel und das Präsentationspanel. Jeder dieser Bereiche wird in einem eigenen {{HTMLElement("div")}} nebeneinander dargestellt, um einfaches Styling und Steuerung zu ermöglichen. Es gibt ein {{HTMLElement("button")}}-Element (`permissions-button`), das wir später in JavaScript verwenden können, um dem Benutzer zu ermöglichen, Kameraberechtigungen pro Gerät mit `getUserMedia()` zu erlauben oder zu blockieren.

Der Kasten auf der linken Seite enthält zwei Komponenten: ein {{HTMLElement("video")}}-Element, das den Stream von `navigator.mediaDevices.getUserMedia()` erhält, und ein {{HTMLElement("button")}}, um die Videoaufnahme zu starten. Dies ist unkompliziert, und wir werden sehen, wie es zusammenhängt, wenn wir uns den JavaScript-Code ansehen.

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
  color: rgb(255 255 255 / 100%);
}

#video,
#photo {
  border: 1px solid black;
  box-shadow: 2px 2px 3px black;
  width: 100%%;
  height: auto;
}

#canvas {
  display: none;
}

.camera,
.output {
  width: 300px;
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

Als Nächstes haben wir ein {{HTMLElement("canvas")}}-Element, in das die aufgenommenen Frames gespeichert, möglicherweise in irgendeiner Weise manipuliert und dann in eine Ausgabebilddatei umgewandelt werden. Diese Leinwand wird verborgen gehalten, indem sie mit {{cssxref("display", "display: none")}} gestylt wird, um die Benutzeroberfläche nicht zu überladen – der Benutzer muss diesen Zwischenstand nicht sehen.

Wir haben auch ein {{HTMLElement("img")}}-Element, in das wir das Bild zeichnen – dies ist die endgültige Anzeige, die dem Benutzer gezeigt wird.

```html live-sample___photo-capture live-sample___photo-capture-with-filters
<canvas id="canvas"></canvas>
<div class="output">
  <img id="photo" alt="The screen capture will appear in this box." />
</div>
```

## Der JavaScript-Code

Schauen wir uns nun den JavaScript-Code an. Wir werden ihn in ein paar kleine Teile aufteilen, um die Erklärung zu erleichtern.

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
  - : Unabhängig von der Größe des eingehenden Videos werden wir das resultierende Bild auf 320 Pixel Breite skalieren.
- `height`
  - : Die Ausgabehöhe des Bildes wird basierend auf der `width` und dem {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Streams berechnet.
- `streaming`
  - : Gibt an, ob derzeit ein aktiver Videostrom läuft oder nicht.
- `video`
  - : Ein Verweis auf das {{HTMLElement("video")}}-Element.
- `canvas`
  - : Ein Verweis auf das {{HTMLElement("canvas")}}-Element.
- `photo`
  - : Ein Verweis auf das {{HTMLElement("img")}}-Element.
- `startButton`
  - : Ein Verweis auf das {{HTMLElement("button")}}-Element, das zum Auslösen der Aufnahme verwendet wird.
- `allowButton`
  - : Ein Verweis auf das {{HTMLElement("button")}}-Element, das verwendet wird, um zu steuern, ob die Seite auf Geräte zugreifen kann.

#### Den Medienstream erhalten

Die nächste Aufgabe besteht darin, den Medienstream zu erhalten: Wir definieren einen Ereignislistener, der [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufruft und beim Klick des Benutzers auf die Schaltfläche "Kamera erlauben" einen Videostream (ohne Audio) anfordert. Es gibt ein Versprechen zurück, an das wir Erfolgs- und Fehler-Callbacks anhängen:

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

Der Erfolgs-Callback erhält ein `stream`-Objekt als Eingabe, das als Quelle unseres {{HTMLElement("video")}}-Elements festgelegt wird. Sobald der Stream mit dem `<video>`-Element verknüpft ist, starten wir ihn, indem wir [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play_event) aufrufen.

Der Fehler-Callback wird aufgerufen, wenn das Öffnen des Streams nicht funktioniert. Dies kann zum Beispiel passieren, wenn keine kompatible Kamera angeschlossen ist oder der Benutzer den Zugriff verweigert hat.

#### Warten, bis das Video zu spielen beginnt

Nachdem [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play_event) auf dem {{HTMLElement("video")}} aufgerufen wurde, vergeht hoffentlich nur eine kurze Zeitspanne, bevor der Videostream zu fließen beginnt. Um ein Blockieren zu vermeiden, bis das passiert, fügen wir dem `video` einen Ereignislistener für das [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)-Ereignis hinzu, das ausgeliefert wird, wenn die Videowiedergabe tatsächlich beginnt. Zu diesem Zeitpunkt sind alle Eigenschaften im `video`-Objekt basierend auf dem Format des Streams konfiguriert.

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

Dieser Callback macht nichts, es sei denn, es ist das erste Mal, dass er aufgerufen wird; dies wird getestet, indem der Wert unserer `streaming`-Variable überprüft wird, die `false` ist, wenn diese Methode zum ersten Mal ausgeführt wird.

Wenn dies tatsächlich der erste Lauf ist, setzen wir die Höhe des Videos basierend auf dem Größenunterschied zwischen der tatsächlichen Größe des Videos, `video.videoWidth`, und der Breite, mit der wir es darstellen werden, `width`.

Abschließend werden die `width` und `height` sowohl des Videos als auch der Leinwand so eingestellt, dass sie zueinander passen, indem [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) für jede der beiden Eigenschaften auf jedem Element aufgerufen und Breiten und Höhen entsprechend gesetzt werden. Schließlich setzen wir die `streaming`-Variable auf `true`, um zu verhindern, dass dieser Einrichtungscode versehentlich erneut ausgeführt wird.

#### Behandeln von Klicks auf den Button

Um bei jedem Klick des Benutzers auf den `startButton` ein Standbild aufzunehmen, müssen wir der Schaltfläche einen Ereignislistener hinzufügen, der aufgerufen wird, wenn das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ausgegeben wird:

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

Diese Methode ist unkompliziert: Sie ruft die `takePicture()`-Funktion auf, die im Abschnitt [Aufnehmen eines Frames aus dem Stream](#aufnehmen_eines_frames_aus_dem_stream) unten definiert ist, und ruft dann [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem empfangenen Ereignis auf, um zu verhindern, dass der Klick mehr als einmal behandelt wird.

### Leeren des Fotokastens

Das Leeren des Fotokastens beinhaltet das Erstellen eines Bildes und dessen Umwandlung in ein Format, das vom {{HTMLElement("img")}}-Element verwendet werden kann, das den zuletzt aufgenommenen Frame anzeigt. Der Code sieht so aus:

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

Wir beginnen damit, eine Referenz auf das versteckte {{HTMLElement("canvas")}}-Element zu erhalten, das wir für das Offscreen-Rendering verwenden. Als nächstes setzen wir das `fillStyle` auf `#AAA` (ein ziemlich helles Grau) und füllen das gesamte Canvas mit dieser Farbe durch Aufrufen von [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect).

Zuletzt in dieser Funktion wandeln wir das Canvas in ein PNG-Bild um und rufen [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, um unseren aufgenommenen Standbildkasten zur Anzeige des Bildes zu bringen.

### Aufnehmen eines Frames aus dem Stream

Es gibt noch eine letzte Funktion zu definieren, und sie ist der Kern der gesamten Übung: die `takePicture()`-Funktion, deren Aufgabe es ist, den aktuell angezeigten Videoframe aufzunehmen, ihn in eine PNG-Datei umzuwandeln und ihn im aufgenommenen Frame-Kasten anzuzeigen. Der Code sieht so aus:

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

Wie immer, wenn wir mit dem Inhalt einer Leinwand arbeiten müssen, beginnen wir damit, den [2D-Zeichnungskontext](/de/docs/Web/API/CanvasRenderingContext2D) für die versteckte Leinwand zu erhalten.

Dann, wenn die Breite und Höhe beide ungleich Null sind (was bedeutet, dass möglicherweise gültige Bilddaten vorhanden sind), setzen wir die Breite und Höhe der Leinwand so, dass sie mit der des aufgenommenen Frames übereinstimmen, und rufen dann [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf, um den aktuellen Videoframe in den Kontext zu zeichnen und die gesamte Leinwand mit dem Frame-Bild zu füllen.

> [!NOTE]
> Dies nutzt die Tatsache aus, dass die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle wie ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) für jede API aussieht, die ein `HTMLImageElement` als Parameter akzeptiert, wobei der aktuelle Frame des Videos als Inhalt des Bildes dargestellt wird.

Sobald die Leinwand das aufgezeichnete Bild enthält, wandeln wir es in das PNG-Format um, indem wir [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) darauf aufrufen; schließlich rufen wir [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, um unser aufgenommenes Standbild zur Anzeige des Bildes zu bringen.

Wenn kein gültiges Bild verfügbar ist (das heißt, die `width` und `height` sind beide 0), löschen wir den Inhalt des aufgenommenen Frames durch Aufrufen von `clearPhoto()`.

## Demo

Klicken Sie auf "Kamera erlauben", um ein Eingabegerät auszuwählen und der Seite den Zugriff auf die Kamera zu ermöglichen. Sobald das Video startet, können Sie auf "Foto aufnehmen" klicken, um ein Standbild aus dem Stream als Bild zu erfassen, das auf der rechten Leinwand gezeichnet wird:

{{EmbedLiveSample('photo-capture', '', '500', , , , 'camera', 'allow-popups')}}

## Spaß mit Filtern

Da wir Bilder von der Webcam des Benutzers aufnehmen, indem wir Frames von einem {{HTMLElement("video")}}-Element erfassen, können wir coole CSS {{cssxref("filter")}}-Effekte mit den Filtern auf das Video anwenden. Diese Filter reichen von grundlegend (das Bild schwarz-weiß machen) bis hin zu komplex (gaussianische Unschärfen und Farbtonrotation).

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

Sie können mit diesem Effekt spielen, indem Sie beispielsweise die [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) der Firefox-Entwicklerwerkzeuge verwenden; siehe [CSS-Filter bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html), um weitere Details zu erfahren.

## Verwendung spezifischer Geräte

Sie können, falls erforderlich, die Menge der zulässigen Videoquellen auf ein bestimmtes Gerät oder eine Reihe von Geräten beschränken. Dazu rufen Sie [`MediaDevices.enumerateDevices`](/de/docs/Web/API/MediaDevices/enumerateDevices) auf. Wenn das Versprechen mit einem Array von [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekten beschrieben ist, die die verfügbaren Geräte beschreiben, finden Sie die Geräte, die Sie zulassen möchten, und spezifizieren Sie die entsprechenden [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId) oder `deviceId`s im [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt, das an [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) übergeben wird.

## Siehe auch

- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [Verwendung von Frames aus einem Video](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#using_frames_from_a_video) im Canvas-Tutorial
