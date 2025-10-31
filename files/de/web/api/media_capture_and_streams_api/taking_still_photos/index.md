---
title: Fotos aufnehmen mit getUserMedia()
slug: Web/API/Media_Capture_and_Streams_API/Taking_still_photos
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel zeigt, wie man mit [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf die Kamera eines Computers oder Mobiltelefons zugreift, das `getUserMedia()` unterstützt, und ein Foto damit aufnimmt.

![getUserMedia-basierte Bildaufnahme-App — links sehen wir einen Videostream von einer Webcam und einen Fotoaufnahme-Button, rechts das Standbild aus der Fotoaufnahme](web-rtc-demo.png)

Sie können auch direkt zum [Demo](#demo) springen, wenn Sie möchten.

## Das HTML-Markup

Unsere HTML-Oberfläche hat zwei Hauptbereiche: das Stream- und Aufnahmepanel sowie das Präsentationspanel.
Jeder davon wird nebeneinander in einem eigenen {{HTMLElement("div")}} präsentiert, um das Styling und die Kontrolle zu erleichtern.
Es gibt ein {{HTMLElement("button")}} Element (`permissions-button`), das wir später in JavaScript nutzen können, um dem Benutzer zu erlauben, Kamera-Berechtigungen pro Gerät mit `getUserMedia()` zuzulassen oder zu blockieren.

Die Box auf der linken Seite enthält zwei Komponenten: ein {{HTMLElement("video")}} Element, das den Stream von `navigator.mediaDevices.getUserMedia()` empfangen wird, und ein {{HTMLElement("button")}}, um die Videoaufnahme zu starten.
Dies ist einfach, und wir werden sehen, wie es mit dem JavaScript-Code zusammenhängt.

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

Als nächstes haben wir ein {{HTMLElement("canvas")}} Element, in das die aufgenommenen Frames gespeichert, bei Bedarf manipuliert und dann in eine Ausgabebilddatei umgewandelt werden.
Diese Leinwand wird versteckt gehalten, indem die Leinwand mit {{cssxref("display", "display: none")}} gestylt wird, um die Bildschirmgestaltung nicht zu überladen — der Benutzer muss diese Zwischenstufe nicht sehen.

Wir haben auch ein {{HTMLElement("img")}} Element, in das wir das Bild zeichnen werden — dies ist die finale Anzeige, die dem Benutzer gezeigt wird.

```html live-sample___photo-capture live-sample___photo-capture-with-filters
<canvas id="canvas"></canvas>
<div class="output">
  <img id="photo" src="" alt="The screen capture will appear in this box." />
</div>
```

## Der JavaScript-Code

Schauen wir uns nun den JavaScript-Code an. Wir teilen ihn in einige gut verdauliche Stücke auf, um ihn leichter erklären zu können.

### Initialisierung

Wir beginnen mit der Einrichtung verschiedener Variablen, die wir verwenden werden.

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
  - : Unabhängig von der Größe des eingehenden Videos skalieren wir das resultierende Bild auf eine Breite von 320 Pixel.
- `height`
  - : Die Ausgabehöhe des Bildes wird unter Berücksichtigung der `width` und des {{Glossary("aspect_ratio", "Seitenverhältnisses")}} des Streams berechnet.
- `streaming`
  - : Gibt an, ob derzeit ein aktiver Videostream läuft.
- `video`
  - : Eine Referenz auf das {{HTMLElement("video")}} Element.
- `canvas`
  - : Eine Referenz auf das {{HTMLElement("canvas")}} Element.
- `photo`
  - : Eine Referenz auf das {{HTMLElement("img")}} Element.
- `startButton`
  - : Eine Referenz auf das {{HTMLElement("button")}} Element, das zur Aufnahme verwendet wird.
- `allowButton`
  - : Eine Referenz auf das {{HTMLElement("button")}} Element, das steuert, ob die Seite auf Geräte zugreifen darf oder nicht.

#### Holen Sie sich den Medienstream

Die nächste Aufgabe besteht darin, den Medienstream zu erhalten: Wir definieren einen Event-Listener, der [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufruft und einen Videostream (ohne Audio) anfordert, wenn der Benutzer auf die Schaltfläche "Kamera erlauben" klickt.
Es gibt ein Versprechen zurück, an das wir Erfolgs- und Fehlerrückrufe anhängen:

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

Der Erfolgsrückruf erhält ein `stream` Objekt als Eingabe, das als Quelle unseres {{HTMLElement("video")}} Elements festgelegt wird.
Sobald der Stream mit dem `<video>` Element verknüpft ist, starten wir ihn, indem wir [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play_event) aufrufen.

Der Fehlerrückruf wird aufgerufen, wenn das Öffnen des Streams nicht funktioniert.
Dies passiert beispielsweise, wenn keine kompatible Kamera angeschlossen ist oder der Benutzer den Zugriff verweigert hat.

#### Hören Sie zu, wenn das Video zu spielen beginnt

Nach dem Aufruf von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play_event) auf dem {{HTMLElement("video")}} gibt es einen (hoffentlich kurzen) Zeitraum, der vergeht, bevor der Videostream zu fließen beginnt. Um zu vermeiden, zu blockieren, bis dies passiert, fügen wir einen Event-Listener für das [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event) Ereignis hinzu, das ausgeliefert wird, wenn die Videowiedergabe tatsächlich beginnt. Zu diesem Zeitpunkt wurden alle Eigenschaften im `video` Objekt basierend auf dem Format des Streams konfiguriert.

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

Dieser Rückruf tut nichts, es sei denn, es ist das erste Mal, dass er aufgerufen wurde; dies wird überprüft, indem der Wert unserer `streaming` Variable überprüft wird, die `false` ist, das erste Mal, wenn diese Methode ausgeführt wird.

Wenn dies tatsächlich der erste Durchlauf ist, setzen wir die Höhe des Videos basierend auf dem Größenunterschied zwischen der tatsächlichen Größe des Videos, `video.videoWidth`, und der Breite, bei der wir es rendern werden, `width`.

Schließlich werden die `width` und `height` sowohl des Videos als auch der Leinwand so gesetzt, dass sie zueinander passen, indem [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) für die zwei Eigenschaften jedes Elements aufgerufen wird, und Breiten und Höhen wie angemessen setzen. Schließlich setzen wir die `streaming` Variable auf `true`, um zu verhindern, dass wir diesen Setup-Code versehentlich erneut ausführen.

#### Behandeln Sie Klicks auf die Schaltfläche

Um bei jedem Klick des Benutzers auf `startButton` ein Standbild zu erfassen, müssen wir der Schaltfläche einen Event-Listener hinzufügen, der aufgerufen wird, wenn das [`click`](/de/docs/Web/API/Element/click_event) Ereignis ausgegeben wird:

```js live-sample___photo-capture live-sample___photo-capture-with-filters
startButton.addEventListener("click", (ev) => {
  takePicture();
  ev.preventDefault();
});
```

Diese Methode ist einfach: sie ruft die `takePicture()` Funktion auf, die unten im Abschnitt [Erfassen eines Frames aus dem Stream](#erfassen_eines_frames_aus_dem_stream) definiert wird, und ruft dann [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem empfangenen Ereignis auf, um zu verhindern, dass der Klick mehr als einmal behandelt wird.

### Das Fotofeld löschen

Das Löschen des Fotofelds beinhaltet das Erstellen eines Bildes und das Konvertieren in ein Format, das von dem {{HTMLElement("img")}} Element verwendet werden kann, das den zuletzt aufgenommenen Frame anzeigt. Der Code sieht so aus:

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

Wir beginnen damit, eine Referenz auf das versteckte {{HTMLElement("canvas")}} Element zu erhalten, das wir für das Offscreen-Rendering verwenden. Als nächstes setzen wir `fillStyle` auf `#aaaaaa` (einen ziemlich hellen Grauton) und füllen die gesamte Leinwand mit dieser Farbe, indem wir [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) aufrufen.

Zuletzt in dieser Funktion konvertieren wir die Leinwand in ein PNG-Bild und rufen [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, damit unser aufgenommenes Standbild das Bild anzeigt.

### Erfassen eines Frames aus dem Stream

Es gibt noch eine letzte Funktion zu definieren, und sie ist der Punkt der gesamten Übung: die `takePicture()` Funktion, deren Aufgabe es ist, den aktuell angezeigten Video-Frame zu erfassen, in eine PNG-Datei zu konvertieren und ihn im aufgenommenen Rahmen-Feld anzuzeigen. Der Code sieht so aus:

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

Immer, wenn wir mit den Inhalten einer Leinwand arbeiten müssen, beginnen wir, indem wir den [2D-Zeichenkontext](/de/docs/Web/API/CanvasRenderingContext2D) für die versteckte Leinwand erhalten.

Dann, wenn die Breite und Höhe beide ungleich null sind (was bedeutet, dass zumindest potenziell gültige Bilddaten vorhanden sind), setzen wir die Breite und Höhe der Leinwand so, dass sie mit dem aufgenommenen Frame übereinstimmen, und rufen dann [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf, um den aktuellen Frame des Videos in den Kontext zu zeichnen und die gesamte Leinwand mit dem Framebild zu füllen.

> [!NOTE]
> Dies nutzt die Tatsache, dass die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Schnittstelle wie eine [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) für jede API aussieht, die ein `HTMLImageElement` als Parameter akzeptiert, wobei der aktuelle Frame des Videos als Inhalt des Bildes präsentiert wird.

Sobald die Leinwand das aufgenommene Bild enthält, konvertieren wir es in das PNG-Format, indem wir [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) darauf aufrufen; schließlich rufen wir [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, damit unser aufgenommener Stillkasten das Bild anzeigt.

Wenn kein gültiges Bild verfügbar ist (d.h. die `width` und `height` sind beide 0), löschen wir den Inhalt des aufgenommenen Rahmenkastens, indem wir `clearPhoto()` aufrufen.

## Demo

Klicken Sie auf "Kamera erlauben", um ein Eingabegerät auszuwählen und der Seite den Zugriff auf die Kamera zu erlauben.
Sobald das Video gestartet wird, können Sie auf "Foto aufnehmen" klicken, um ein Standbild aus dem Stream als auf der rechten Leinwand gezeichnete Grafik aufzunehmen:

{{EmbedLiveSample('photo-capture', '', '500', , , , 'camera', 'allow-popups')}}

## Spaß mit Filtern

Da wir Bilder von der Webcam des Benutzers aufnehmen, indem wir Frames von einem {{HTMLElement("video")}} Element ergreifen, können wir lustige CSS {{cssxref("filter")}} Effekte auf das Video mit Filtern anwenden. Diese Filter reichen von einfach (das Bild schwarz-weiß machen) bis komplex (Gauss'sche Unschärfen und Farbtonrotation).

```css live-sample___photo-capture-with-filters
#video {
  filter: grayscale(100%);
}
```

Damit die Videofilter auf das Foto angewendet werden, benötigt die `takePicture()` Funktion die folgenden Änderungen.

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

Sie können mit diesem Effekt spielen, indem Sie beispielsweise die Entwicklerwerkzeuge des Firefox Stil-Editors verwenden; siehe [Bearbeiten von CSS-Filtern](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html) für Details wie dies zu tun ist.

## Verwendung spezifischer Geräte

Sie können, falls erforderlich, die Menge der erlaubten Videoquellen auf ein bestimmtes Gerät oder eine Reihe von Geräten beschränken. Um dies zu tun, rufen Sie [`MediaDevices.enumerateDevices`](/de/docs/Web/API/MediaDevices/enumerateDevices) auf. Wenn das Versprechen mit einem Array von [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo) Objekten, die die verfügbaren Geräte beschreiben, erfüllt wird, finden Sie die, die Sie zulassen möchten, und geben Sie die entsprechende [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId) oder `deviceId`s im [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) Objekt an, das in [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) übergeben wird.

## Siehe auch

- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [Verwendung von Frames aus einem Video](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#using_frames_from_a_video) im Canvas-Leitfaden
