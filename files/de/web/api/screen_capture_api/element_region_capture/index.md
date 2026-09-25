---
title: Verwendung der Element Capture API und der Region Capture API
slug: Web/API/Screen_Capture_API/Element_Region_Capture
l10n:
  sourceCommit: 3601fb859ad38e80a49d9c7d2d81a783781aac24
---

{{DefaultAPISidebar("Screen Capture API")}}

Dieser Leitfaden zeigt anhand typischer Anwendungsfälle, wie Sie die Element Capture API und die Region Capture API verwenden und welche Probleme sie lösen.

## Hintergrund

Standardmäßig erfasst die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) einen gesamten Bildschirm, ein Fenster oder einen Tab. Mit der Element Capture API können Sie den erfassten Stream auf einen bestimmten gerenderten DOM-Baum beschränken. Mit der Region Capture API können Sie ihn auf den Bildschirmbereich beschränken, den die Bounding Box eines bestimmten DOM-Baums definiert.

Das ist nützlich, wenn Sie nur einen begrenzten Bereich teilen möchten, um unnötige Bandbreite oder den für die Anzeige benötigten Platz zu sparen. Auch aus Datenschutzgründen kann das sinnvoll sein: Möglicherweise möchten Sie anderen Teilnehmenden weder Ihre Nachrichtenbenachrichtigungen noch Einstellungen im Hintergrund zeigen, die zum Ausführen der geteilten Demo erforderlich sind.

Wenn Sie die Ausgabe Ihrer Webcam erfassen, kann außerdem ein unerwünschter „Endlostunnel“- oder „Spiegelkabinett“-Effekt entstehen. Auch solche Probleme können Sie mit der Element Capture API und der Region Capture API vermeiden.

## Wann Sie welche API verwenden sollten

Die Element Capture API erfasst das Element selbst und seine Nachfahren. Die Region Capture API erfasst dagegen den Bereich des Browser-Tabs, den die Bounding Box des Zielelements definiert. Bei Element Capture ist immer nur das erfasste Element zu sehen, selbst wenn andere DOM-Inhalte es überlagern. Bei Region Capture können hingegen überlagernde Inhalte vor den Inhalten erscheinen, die Sie eigentlich teilen wollten.

Für beide APIs gibt es sinnvolle Anwendungsfälle:

- Wenn die Aufnahme auf einen DOM-Baum beschränkt bleiben und alles außerhalb davon ausgeschlossen werden soll, ist die Element Capture API die bessere Wahl. So verhindern Sie beispielsweise, dass private Inhalte wie Nachrichtenbenachrichtigungen oder eine Oberfläche mit Vortragsnotizen in der Aufnahme erscheinen.
- Wenn Sie dagegen einen Bereich des Browser-Tabs erfassen möchten, unabhängig davon, was darin angezeigt wird, eignet sich die Region Capture API.

Im nächsten Abschnitt beginnen wir mit einer einfachen Demo zur Screen Capture API. Sie veranschaulicht die Probleme, für deren Lösung die Element Capture API und die Region Capture API entwickelt wurden.

## Demo zur Screen Capture API

Diese Demo verwendet die Screen Capture API, um ein Fenster, einen Bildschirm oder einen Tab zu erfassen und den Stream über ein {{htmlelement("video")}}-Element auf derselben Seite wiederzugeben. Sie können die [Beispielanwendung zur Screen Capture API](https://mdn.github.io/dom-examples/screen-capture-api/basic-screen-capture/) ausprobieren und sich den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/basic-screen-capture) ansehen.

### HTML

Das HTML beginnt mit einer Hauptüberschrift und einem einleitenden Text. Danach folgen zwei {{htmlelement("button")}}-Elemente, mit denen Sie die Aufnahme starten und stoppen können:

```html
<h1>Screen Capture API example</h1>
<p>
  This example shows you the contents of the selected part of your display.
  Click the Start Capture button to begin.
</p>

<p>
  <button id="start">Start Capture</button>&nbsp;
  <button id="stop">Stop Capture</button>
</p>
```

Anschließend folgt der Hauptcontainer der Anwendung. Er enthält das `<video>`-Element zur Wiedergabe der Aufnahme sowie ein {{htmlelement("div")}} als Platzhalter für die Demo:

```html
<div id="main-app">
  <video autoplay></video>
  <div id="demo">
    <h2>Some kind of demo</h2>
    <p>
      This container is a placeholder for some kind of demo that you might want
      to share with other participants.
    </p>
  </div>
</div>
```

### CSS

Das CSS dieser Demo ist größtenteils unspektakulär. Die folgenden Regeln sind jedoch eine Erklärung wert. Der Kürze halber ist das übrige CSS ausgeblendet.

```css hidden
* {
  box-sizing: border-box;
}

body {
  padding: 0 25px;
}

video,
#demo > p {
  border: 1px solid #cccccc;
  margin: 0;
}

#demo > h2 {
  margin-top: 0;
}

#demo > p {
  padding: 5px;
  height: 320px;
}
```

Für das `main-app`-`<div>` setzen wir {{cssxref("display")}} auf `flex`, um das Video und den Demo-Platzhalter in zwei Spalten nebeneinander anzuordnen. Dazwischen setzen wir mit {{cssxref("gap")}} einen Abstand von `5%`. Außerdem setzen wir für den Container {{cssxref("min-width")}} auf `980px`. Dadurch beschränken wir die Demo-Anwendung im Wesentlichen auf ein Desktop-Layout. Der Grund dafür ist, dass Element Capture und Region Capture nur in Desktop-Browsern unterstützt werden und Inhalte außerhalb des Bildschirms nicht erfasst werden.

```css
#main-app {
  display: flex;
  gap: 5%;
  min-width: 980px;
}
```

Sowohl dem `<video>`-Element als auch dem `demo`-`<div>` geben wir außerdem für {{cssxref("flex")}} den Wert `1`, damit beide gleich viel horizontalen Platz einnehmen.

```css
video,
#demo {
  flex: 1;
}
```

Schließlich setzen wir für das `<video>`-Element {{cssxref("max-width")}} auf `50%` und {{cssxref("aspect-ratio")}} fest auf `4/3`. So behält das Video eine gleichbleibende Größe und das Layout verändert sich nicht zu stark, wenn die Bildschirmaufnahme wiedergegeben wird. Ohne diese Regeln würde das `<video>`-Element auf die Breite des gesamten erfassten Bereichs – des Fensters oder Bildschirms – anwachsen und damit das Layout beeinflussen. Schließlich handelt es sich um ein {{Glossary("replaced_elements", "ersetztes Element")}}, dessen {{Glossary("Intrinsic_Size", "intrinsische Größe")}} von der Größe seines Inhalts abhängt.

```css
video {
  max-width: 50%;
  aspect-ratio: 4/3;
}
```

Layoutverschiebungen können auch bei der Verwendung der Region Capture API und der Element Capture API Probleme verursachen. Daher ist dieser Code in allen drei Demos enthalten.

### JavaScript

Das JavaScript dieses Beispiels basiert auf dem Beispiel zur [Wiedergabe einer Bildschirmaufnahme](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture#streaming_screen_capture) aus unserem Leitfaden zur Verwendung der Screen Capture API. Wir erklären den Code hier nicht noch einmal vollständig, sondern konzentrieren uns auf den wichtigsten Code für die Aufnahme.

Im Optionsobjekt, das wir beim Aufruf an `getDisplayMedia()` übergeben, setzen wir [`preferCurrentTab: true`](/de/docs/Web/API/MediaDevices/getDisplayMedia#prefercurrenttab). Dieser Hinweis empfiehlt dem Browser, den aktuellen Tab der nutzenden Person im Dialog zur Auswahl der Freigabequelle besonders prominent anzubieten. Chrome bietet diese Option beispielsweise nur an, wenn `preferCurrentTab: true` gesetzt ist.

```js
const displayMediaOptions = {
  video: {
    displaySurface: "window",
  },
  preferCurrentTab: true,
};
```

Diese Option ist sehr nützlich, wenn Sie eine Anwendung mit integrierter Bildschirmfreigabe entwickeln und verhindern möchten, dass Nutzende einen anderen Tab oder ein anderes Fenster teilen.

Wenn die Schaltfläche „Start Capture“ gedrückt wird, führt die Anwendung die Funktion `startCapture()` aus. Diese ruft [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) auf. Daraufhin fordert der Browser die nutzende Person auf, eine Freigabequelle auszuwählen, etwa ein Fenster oder einen Tab. Nach der Auswahl wird der resultierende [`MediaStream`](/de/docs/Web/API/MediaStream) der Eigenschaft [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) des `<video>`-Elements zugewiesen, um ihn wiederzugeben:

```js
async function startCapture() {
  try {
    videoElem.srcObject =
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch (err) {
    console.error(err);
  }
}
```

## Probleme mit der Screen Capture API

Führen Sie die obige Demo in einem [unterstützten Browser](/de/docs/Web/API/Screen_Capture_API#browser_compatibility) aus, klicken Sie auf „Start Capture“ und wählen Sie denselben Tab aus, in dem die Demo läuft. Sie sehen dann den zuvor erwähnten „Spiegelkabinett“-Effekt:

![Ein Browserfenster mit einer Videoaufnahme desselben Browserfensters. Dadurch sind unendlich viele, immer kleiner werdende Aufnahmen innerhalb von Aufnahmen zu sehen.](hall-of-mirrors.png)

Das ist offensichtlich nicht ideal und würde bei jeder Art von Konferenzanwendung mit integrierter Bildschirmfreigabe zu Problemen führen.

## Die Element Capture API

Die Element Capture API beschränkt den erfassten Bereich auf einen bestimmten gerenderten DOM-Baum, also ein ausgewähltes Element und seine Nachfahren. In diesem Abschnitt betrachten wir eine zweite Demo. Sie entspricht der vorherigen Demo, verwendet zusätzlich zur grundlegenden Bildschirmaufnahme aber Element Capture. Sie können das [Beispiel zur Element Capture API](https://mdn.github.io/dom-examples/screen-capture-api/element-capture/) ausprobieren und sich den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/element-capture) ansehen.

Das HTML ist mit dem vorherigen Beispiel identisch, und das CSS ist _fast_ identisch. Zunächst erläutern wir die Unterschiede im JavaScript. Auf die Unterschiede im CSS gehen wir später im Abschnitt [Einschränkungen der Element Capture API](#einschränkungen_der_element_capture_api) ein.

Um die Element Capture API zu verwenden, speichern wir zusätzlich eine Referenz auf ein DOM-Element. Dieses verwenden wir später als **Ziel für die Einschränkung**: Der im Stream angezeigte Bildschirmbereich wird auf dieses gerenderte Element und seine Nachfahren beschränkt.

```js
const demoElem = document.querySelector("#demo");
```

Alle weiteren Codeunterschiede befinden sich in der angepassten Funktion `startCapture()`:

```js
async function startCapture() {
  try {
    const stream =
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    const [track] = stream.getVideoTracks();
    const restrictionTarget = await RestrictionTarget.fromElement(demoElem);
    await track.restrictTo(restrictionTarget);
    videoElem.srcObject = stream;
  } catch (err) {
    console.error(err);
  }
}
```

1. Wie zuvor rufen wir zunächst mit `mediaDevices.getDisplayMedia()` den Medienstream ab.
2. Anschließend holen wir mit [`MediaStream.getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks) den Videotrack aus dem Stream.
3. Mit [`RestrictionTarget.fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static) erstellen wir das erforderliche `restrictionTarget`-Objekt. Dazu übergeben wir die zuvor gespeicherte Referenz auf das DOM-Element.
4. Wir wenden das Ziel für die Einschränkung auf den Track an, indem wir [`BrowserCaptureMediaStreamTrack.restrictTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/restrictTo) darauf aufrufen und das `restrictionTarget`-Objekt übergeben.
5. Nachdem diese Schritte abgeschlossen sind, weisen wir den Stream der Eigenschaft `srcObject` des `<video>`-Elements zu, um die Wiedergabe zu starten.

Probieren Sie nun das [Beispiel zur Element Capture API](https://mdn.github.io/dom-examples/screen-capture-api/element-capture/) in einem [unterstützten Browser](/de/docs/Web/API/RestrictionTarget#browser_compatibility) aus. Im Stream sollte nur der Demo-Platzhalter zu sehen sein. Damit ist das „Spiegelkabinett“-Problem behoben.

> [!NOTE]
> Sie können die Einschränkung aufheben, indem Sie `restrictTo()` auf demselben Track erneut aufrufen und dabei `null` als Argument übergeben:
>
> ```js
> await track.restrictTo(null);
> ```

### Einschränkungen der Element Capture API

Damit ein Element **als Ziel für die Einschränkung geeignet** ist und erfasst wird, wenn Sie es als solches auswählen, muss es einen [Stapelkontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) bilden und im dreidimensionalen Raum abgeflacht sein.

Um diese Voraussetzungen zu erfüllen, haben wir die folgende zusätzliche CSS-Regel für das Demo-Containerelement festgelegt:

```css
#demo {
  /* Forms a stacking context */
  isolation: isolate;
  /* Flattened */
  transform-style: flat;
  /* Explicit background color to stop the capture being transparent */
  background-color: white;
}
```

Die Eigenschaft {{cssxref("isolation")}} wird auf `isolate` gesetzt, damit das Element einen Stapelkontext bildet. Die Eigenschaft {{cssxref("transform-style")}} wird auf `flat` gesetzt, um es abzuflachen. Aufgrund dieser Isolation übernimmt das Element außerdem nicht mehr die standardmäßige weiße Hintergrundfarbe der Seite. Deshalb setzen wir {{cssxref("background-color")}} auf `white`, damit die Aufnahme nicht transparent ist.

Eine vollständige Liste der Einschränkungen für Elemente, die als Ziele für die Einschränkung verwendet werden können, finden Sie auf der Referenzseite zu [`RestrictionTarget.fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static#element).

## Die Region Capture API

Die Region Capture API hat eine sehr ähnliche Wirkung wie die Element Capture API. Sie beschränkt den erfassten Bereich jedoch nicht auf einen bestimmten gerenderten DOM-Baum, sondern schneidet den Stream auf den Bereich des aktuellen Browser-Tabs zu, den die Bounding Box des Zielelements definiert. Sehen wir uns zunächst eine Demo an. Danach betrachten wir die Unterschiede zwischen den beiden APIs genauer.

In diesem Abschnitt betrachten wir eine dritte Demo. Sie entspricht den anderen Demos, verwendet zusätzlich zur grundlegenden Bildschirmaufnahme aber Region Capture. Sie können das [Beispiel zur Region Capture API](https://mdn.github.io/dom-examples/screen-capture-api/region-capture/) ausprobieren und sich den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/region-capture) ansehen.

HTML und CSS sind mit den vorherigen Beispielen identisch. Das JavaScript entspricht weitgehend dem JavaScript für Element Capture. Es gibt jedoch einige wichtige Unterschiede, die wir nun erläutern.

Um die Region Capture API zu verwenden, speichern wir zunächst eine Referenz auf ein DOM-Element. Dieses verwenden wir später als **Ziel für den Zuschnitt**: Der im Stream angezeigte Bereich wird auf den Bereich zugeschnitten, in dem dieses Element gerendert wird.

```js
const demoElem = document.querySelector("#demo");
```

Sehen wir uns nun die Funktion `startCapture()` der Region-Capture-Demo an:

```js
async function startCapture() {
  try {
    const stream =
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    const [track] = stream.getVideoTracks();
    const cropTarget = await CropTarget.fromElement(demoElem);
    await track.cropTo(cropTarget);
    videoElem.srcObject = stream;
  } catch (err) {
    console.error(err);
  }
}
```

1. Wie zuvor rufen wir zunächst mit `mediaDevices.getDisplayMedia()` den Medienstream ab und holen anschließend mit [`MediaStream.getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks) den Videotrack aus dem Stream.
2. Mit [`fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static) erstellen wir das für den Zuschnitt des Videotracks erforderliche `cropTarget`-Objekt. Dazu übergeben wir die zuvor gespeicherte Referenz auf das DOM-Element.
3. Wir wenden das Ziel für den Zuschnitt auf den Track an, indem wir [`BrowserCaptureMediaStreamTrack.cropTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/cropTo) darauf aufrufen und das `cropTarget`-Objekt übergeben.
4. Nachdem diese Schritte abgeschlossen sind, weisen wir den Stream der Eigenschaft `srcObject` des `<video>`-Elements zu, um die Wiedergabe zu starten.

Probieren Sie nun das [Beispiel zur Region Capture API](https://mdn.github.io/dom-examples/screen-capture-api/region-capture/) in einem [unterstützten Browser](/de/docs/Web/API/CropTarget#browser_compatibility) aus. Im Stream sollte nur der Demo-Platzhalter zu sehen sein. Auch dadurch wird das „Spiegelkabinett“-Problem behoben.

> [!NOTE]
> Sie können den Zuschnitt aufheben, indem Sie `cropTo()` auf demselben Track erneut aufrufen und dabei `null` als Argument übergeben:
>
> ```js
> await track.cropTo(null);
> ```

### Einschränkungen der Region Capture API

Für Region Capture gelten nicht dieselben umfangreichen Einschränkungen wie für Element Capture. Da hier der Stream auf eine bestimmte Größe zugeschnitten und kein bestimmter gerenderter DOM-Baum wiedergegeben wird, ist die folgende Regel nicht erforderlich:

```css
#demo {
  /* Forms a stacking context */
  isolation: isolate;
  /* Flattened */
  transform-style: flat;
  /* Explicit background color to stop the capture being transparent */
  background-color: white;
}
```

Dennoch gibt es Einschränkungen für Elemente, die als Ziele für den Zuschnitt verwendet werden können. Die vollständige Liste finden Sie auf der Referenzseite zu [`CropTarget.fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static#element).

## Einen Screenshot erstellen

Um einen einzelnen Screenshot zu speichern, ohne ein Video anzuzeigen, verwenden Sie [`ImageCapture.grabFrame()`](/de/docs/Web/API/ImageCapture/grabFrame). Damit erhalten Sie direkt aus dem erfassten Track ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap). Sie können dieses Bitmap auf einen Canvas zeichnen und es mit [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) als PNG kodieren.

Die folgende Variante verwendet Element Capture, um einen Screenshot des `demo`-Elements zu erstellen, wenn die nutzende Person auf eine Schaltfläche klickt. Dafür müssen sowohl Element Capture als auch `ImageCapture.grabFrame()` unterstützt werden. Die Variante verwendet dasselbe `#demo`-CSS wie im Abschnitt [Einschränkungen der Element Capture API](#einschränkungen_der_element_capture_api).

```html
<button id="screenshot">Save screenshot</button>
<a id="download" download="screenshot.png" hidden>Download screenshot</a>
<div id="demo">
  <h2>Some kind of demo</h2>
  <p>This is the content to capture.</p>
</div>
```

Der Click-Handler fordert die Berechtigung zur Bildschirmfreigabe an, beschränkt den Track auf das Zielelement und erfasst ein einzelnes Bild. Der `finally`-Block beendet die Freigabe und gibt das Bitmap frei, auch wenn ein Fehler auftritt.

```js
const screenshotElem = document.getElementById("screenshot");
const downloadElem = document.getElementById("download");
const demoElem = document.getElementById("demo");
let screenshotURL;

screenshotElem.addEventListener("click", async () => {
  screenshotElem.disabled = true;
  let stream;
  let bitmap;

  try {
    stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: false,
      preferCurrentTab: true,
    });
    const [track] = stream.getVideoTracks();
    const restrictionTarget = await RestrictionTarget.fromElement(demoElem);
    await track.restrictTo(restrictionTarget);
    bitmap = await new ImageCapture(track).grabFrame();

    const canvas = document.createElement("canvas");
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    canvas.getContext("2d").drawImage(bitmap, 0, 0);
    const blob = await new Promise((resolve) => {
      canvas.toBlob(resolve, "image/png");
    });
    if (!blob) {
      throw new Error("Could not create the screenshot.");
    }

    if (screenshotURL) {
      URL.revokeObjectURL(screenshotURL);
    }
    screenshotURL = URL.createObjectURL(blob);
    downloadElem.href = screenshotURL;
    downloadElem.hidden = false;
    downloadElem.click();
  } catch (err) {
    console.error(err);
  } finally {
    stream?.getTracks().forEach((track) => track.stop());
    bitmap?.close();
    screenshotElem.disabled = false;
  }
});
```

Sie finden die Demo im [Beispiel für einen Screenshot mit Element Capture](https://mdn.github.io/dom-examples/screen-capture-api/element-screenshot/). Sie können sich auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/element-screenshot) ansehen. Klicken Sie auf **Save screenshot** und wählen Sie im Freigabedialog des Browsers den Tab aus, der das Beispiel enthält. Sobald das PNG bereitsteht, startet der Code den Download. Der Download-Link bleibt verfügbar, damit Sie das Bild erneut speichern können. Die zugehörige [Blob-URL](/de/docs/Web/URI/Reference/Schemes/blob) bleibt erhalten, bis sie durch einen weiteren Screenshot ersetzt wird.

Wenn Sie stattdessen Region Capture verwenden möchten, ersetzen Sie die Aufrufe von `RestrictionTarget.fromElement()` und `restrictTo()` durch:

```js
const cropTarget = await CropTarget.fromElement(demoElem);
await track.cropTo(cropTarget);
```

## Siehe auch

- [Einen Videostream von einem beliebigen Element erfassen](https://developer.chrome.com/docs/web-platform/element-capture) auf developer.chrome.com (2025)
- [Bessere Tab-Freigabe mit Region Capture](https://developer.chrome.com/docs/web-platform/region-capture) auf developer.chrome.com (2023)
