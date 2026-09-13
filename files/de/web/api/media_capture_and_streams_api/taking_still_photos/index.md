---
title: Aufnehmen von Standbildern mit getUserMedia()
slug: Web/API/Media_Capture_and_Streams_API/Taking_still_photos
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Dieser Artikel zeigt, wie Sie [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) nutzen, um über `getUserMedia()` auf die Kamera eines Computers oder Mobiltelefons zuzugreifen und ein Foto zu machen.

![getUserMedia-basiertes Bildaufnahme-App — links sehen wir einen Videostream von einer Webcam und einen Fotomachen-Knopf, rechts das Standbildausgabe des aufgenommenen Fotos](web-rtc-demo.png)

Sie können auch direkt zum [Demo](#demo) springen, wenn Sie möchten.

## Das HTML-Markup

Unsere HTML-Oberfläche hat zwei Hauptbetriebsbereiche: das Streaming- und Aufnahmepanel sowie das Präsentationspanel. Jeder dieser Bereiche wird nebeneinander in einem eigenen {{HTMLElement("div")}} präsentiert, um das Styling und die Steuerung zu erleichtern. Es gibt ein {{HTMLElement("button")}}-Element (`permissions-button`), das wir später im JavaScript verwenden können, um dem Benutzer zu erlauben oder zu blockieren, dass Kamera-Berechtigungen pro Gerät über `getUserMedia()` genutzt werden.

Die Box auf der linken Seite enthält zwei Komponenten: ein {{HTMLElement("video")}}-Element, das den Stream von `navigator.mediaDevices.getUserMedia()` erhalten wird, und ein {{HTMLElement("button")}} zum Starten der Videoaufnahme. Dies ist unkompliziert, und wir werden sehen, wie es sich mit dem JavaScript-Code verbindet.

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

Als Nächstes haben wir ein {{HTMLElement("canvas")}}-Element, in das die erfassten Frames gespeichert werden, möglicherweise in irgendeiner Weise manipuliert und dann in eine Ausgabebilddatei umgewandelt werden. Diese Leinwand wird versteckt gehalten, indem die Leinwand mit {{cssxref("display", "display: none")}} gestylt wird, um die Bildschirmdarstellung nicht zu überladen — der Benutzer muss diese Zwischenstufe nicht sehen.

Wir haben auch ein {{HTMLElement("img")}}-Element, in das wir das Bild zeichnen — dies ist die endgültige Anzeige, die dem Benutzer gezeigt wird.

```html live-sample___photo-capture live-sample___photo-capture-with-filters
<canvas id="canvas"></canvas>
<div class="output">
  <img id="photo" src="" alt="The screen capture will appear in this box." />
</div>
```

## Der JavaScript-Code

Schauen wir uns nun den JavaScript-Code an. Wir werden ihn in einige Häppchen aufteilen, um die Erklärung zu erleichtern.

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
  - : Unabhängig von der Größe des eingehenden Videos werden wir das resultierende Bild auf 320 Pixel Breite skalieren.
- `height`
  - : Die Ausgabehöhe des Bildes wird unter Berücksichtigung der `width` und des {{Glossary("aspect_ratio", "Aspect Ratio")}} des Streams berechnet.
- `streaming`
  - : Gibt an, ob derzeit ein aktiver Videostream läuft oder nicht.
- `video`
  - : Eine Referenz auf das {{HTMLElement("video")}}-Element.
- `canvas`
  - : Eine Referenz auf das {{HTMLElement("canvas")}}-Element.
- `photo`
  - : Eine Referenz auf das {{HTMLElement("img")}}-Element.
- `startButton`
  - : Eine Referenz auf das {{HTMLElement("button")}}-Element, das zum Auslösen der Aufnahme verwendet wird.
- `allowButton`
  - : Eine Referenz auf das {{HTMLElement("button")}}-Element, das verwendet wird, um zu steuern, ob die Seite auf Geräte zugreifen kann oder nicht.

#### Abrufen des Medienstroms

Die nächste Aufgabe besteht darin, den Medienstrom abzurufen: Wir definieren einen Ereignis-Listener, der [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufruft und einen Videostream (ohne Audio) anfordert, wenn der Benutzer auf den "Kamera erlauben"-Knopf klickt. Es gibt ein Versprechen zurück, an das wir Erfolgs- und Fehler-Callbacks anhängen:

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

Der Erfolgs-Callback erhält ein `stream`-Objekt als Eingabe, das als Quelle für unser {{HTMLElement("video")}}-Element festgelegt wird. Sobald der Stream mit dem `<video>`-Element verknüpft ist, starten wir die Wiedergabe, indem wir [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play_event) aufrufen.

Der Fehler-Callback wird aufgerufen, wenn das Öffnen des Streams nicht klappt. Dies passiert zum Beispiel, wenn keine kompatible Kamera angeschlossen ist oder der Benutzer den Zugriff verweigert hat.

#### Auf das Abspielen des Videos warten

Nach dem Aufrufen von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play_event) auf dem {{HTMLElement("video")}}, vergeht eine (hoffentlich kurze) Zeitspanne, bevor der Videostream zu fließen beginnt. Um zu vermeiden, dass wir blockieren, bis dies geschieht, fügen wir dem `video`-Element einen Ereignis-Listener für das [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)-Ereignis hinzu, das ausgelöst wird, wenn die Videowiedergabe tatsächlich beginnt. Zu diesem Zeitpunkt wurden alle Eigenschaften des `video`-Objekts basierend auf dem Format des Streams konfiguriert.

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

Dieser Callback tut nichts, es sei denn, es ist das erste Mal, dass er aufgerufen wird; dies wird überprüft, indem der Wert unserer `streaming`-Variable betrachtet wird, die `false` ist, wenn diese Methode das erste Mal ausgeführt wird.

Wenn dies tatsächlich der erste Lauf ist, setzen wir die Höhe des Videos basierend auf dem Größenunterschied zwischen der tatsächlichen Größe des Videos, `video.videoWidth`, und der Breite, in der wir es darstellen wollen, `width`.

Schließlich werden die `width` und `height` sowohl des Videos als auch der Leinwand so eingestellt, dass sie zueinander passen, indem [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) für jede der beiden Eigenschaften auf jedem Element aufgerufen wird, und die Breiten und Höhen entsprechend eingestellt werden. Schließlich setzen wir die `streaming`-Variable auf `true`, um zu verhindern, dass wir versehentlich diesen Einrichtungscode erneut ausführen.

#### Klicks auf den Button behandeln

Um bei jedem Klick des Benutzers auf den `startButton` ein Standbild aufzunehmen, müssen wir dem Button einen Ereignis-Listener hinzufügen, der aufgerufen wird, wenn das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis ausgegeben wird:

```js live-sample___photo-capture live-sample___photo-capture-with-filters
startButton.addEventListener("click", (ev) => {
  takePicture();
  ev.preventDefault();
});
```

Diese Methode ist einfach: Sie ruft die `takePicture()`-Funktion auf, die weiter unten im Abschnitt [Erfassung eines Frames aus dem Stream](#erfassung_eines_frames_aus_dem_stream) definiert ist, und ruft dann [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das empfangene Ereignis, um zu verhindern, dass der Klick mehr als einmal verarbeitet wird.

### Das Foto-Feld löschen

Das Löschen des Foto-Feldes beinhaltet das Erstellen eines Bildes und das anschließende Konvertieren in ein Format, das vom {{HTMLElement("img")}}-Element, das den zuletzt erfassten Frame anzeigt, verwendet werden kann. Der Code sieht so aus:

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

Wir beginnen damit, eine Referenz auf das versteckte {{HTMLElement("canvas")}}-Element zu erhalten, das wir für die Offscreen-Rendering verwenden. Als nächstes setzen wir das `fillStyle` auf `#aaaaaa` (ein ziemlich helles Grau) und füllen die gesamte Leinwand mit dieser Farbe, indem wir [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) aufrufen.

Zuletzt in dieser Funktion konvertieren wir die Leinwand in ein PNG-Bild und rufen [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, damit unser erfasstes Standbildkästchen das Bild anzeigt.

### Erfassung eines Frames aus dem Stream

Es gibt nur noch eine letzte Funktion zu definieren, und sie ist der Höhepunkt der gesamten Übung: die `takePicture()`-Funktion, deren Aufgabe es ist, den derzeit angezeigten Videoframe zu erfassen, ihn in eine PNG-Datei zu konvertieren und ihn im erfassten Bildfeld anzuzeigen. Der Code sieht so aus:

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

Wie immer, wenn wir mit dem Inhalt einer Leinwand arbeiten müssen, beginnen wir damit, den [2D-Zeichenkontext](/de/docs/Web/API/CanvasRenderingContext2D) für die versteckte Leinwand zu erhalten.

Dann, wenn die Breite und Höhe beide ungleich null sind (was bedeutet, dass zumindest potenziell gültige Bilddaten vorhanden sind), setzen wir die Breite und Höhe der Leinwand, um mit der des erfassten Frames zu übereinstimmen, und rufen dann [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf, um den aktuellen Frame des Videos in den Kontext zu zeichnen und die gesamte Leinwand mit dem Frame-Bild zu füllen.

> [!NOTE]
> Dies nutzt aus, dass die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle wie ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) für jede API aussieht, die ein `HTMLImageElement` als Parameter akzeptiert, wobei der aktuelle Frame des Videos als Inhalt des Bildes präsentiert wird.

Sobald die Leinwand das erfasste Bild enthält, konvertieren wir es in das PNG-Format, indem wir [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) aufrufen; schließlich rufen wir [`photo.setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf, damit unser erfasstes Standbildkästchen das Bild anzeigt.

Wenn kein gültiges Bild verfügbar ist (das heißt, die `width` und `height` sind beide 0), löschen wir den Inhalt des erfassten Bildfeldes, indem wir `clearPhoto()` aufrufen.

## Demo

Klicken Sie auf "Kamera erlauben", um ein Eingabegerät auszuwählen und der Seite den Zugriff auf die Kamera zu erlauben. Sobald das Video startet, können Sie auf "Foto aufnehmen" klicken, um ein Standbild aus dem Stream als Bild auf die Leinwand auf der rechten Seite zu erfassen:

{{EmbedLiveSample('photo-capture', '', '500', , , , 'camera', 'allow-popups')}}

## Spaß mit Filtern

Da wir Bilder von der Webcam des Benutzers durch das Erfassen von Frames aus einem {{HTMLElement("video")}}-Element aufnehmen, können wir mit CSS {{cssxref("filter")}}-Effekten den Videos lustige Filter hinzufügen. Diese Filter reichen von einfach (Schwarz-Weiß-Bild) bis komplex (Gaußsche Unschärfen und Farbtonrotation).

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

Sie können mit diesem Effekt unter Verwendung der Entwicklungswerkzeuge von Firefox, wie z.B. dem [Style-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html), herumspielen; siehe [Bearbeiten von CSS-Filtern](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html) für Details, wie dies zu tun ist.

## Verwendung bestimmter Geräte

Sie können, falls erforderlich, die Anzahl der zulässigen Videoquellen auf ein bestimmtes Gerät oder eine Gerätegruppe beschränken. Um dies zu tun, rufen Sie [`MediaDevices.enumerateDevices`](/de/docs/Web/API/MediaDevices/enumerateDevices) auf. Wenn das Versprechen mit einem Array von [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekten erfüllt wird, die die verfügbaren Geräte beschreiben, finden Sie diejenigen, die Sie zulassen möchten, und geben Sie die entsprechenden [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId) oder `deviceId`s im [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt an, das an [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) übergeben wird.

## Siehe auch

- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [Verwenden von Frames aus einem Video](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#using_frames_from_a_video) im Canvas-Leitfaden
