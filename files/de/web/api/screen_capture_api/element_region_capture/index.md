---
title: Verwendung der Element Capture- und Region Capture-APIs
slug: Web/API/Screen_Capture_API/Element_Region_Capture
l10n:
  sourceCommit: d9879ec9fe29b627ea1bde790d981dd13d602794
---

{{DefaultAPISidebar("Screen Capture API")}}

Dieser Leitfaden bietet einen Überblick über die typische Nutzung der Element Capture- und Region Capture-APIs und zeigt, wie sie verwendet werden und welche Probleme sie lösen.

## Hintergrund

Standardmäßig erfasst die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) einen gesamten Bildschirm, ein Fenster oder einen Tab. Die Element Capture- und Region Capture-APIs ermöglichen es, den erfassten Stream auf einen bestimmten gerenderten DOM-Baum oder auf den Teil des Bildschirms zu beschränken, der durch das `bounding box` eines bestimmten DOM-Elements definiert ist.

Dies ist nützlich, wenn Sie nur einen begrenzten Bereich freigeben möchten, um unnötige Bandbreitennutzung oder Bildschirmplatz zu reduzieren, der für die Darstellung der Aufnahme benötigt wird, oder aus Datenschutzgründen (Sie möchten beispielsweise keine Benachrichtigungen oder ihre Hintergrundkonfigurationen anzeigen, die für die Demonstration erforderlich sind).

Zusätzlich können bei der Erfassung Ihrer Webcam-Ausgabe unerwünschte Effekte wie ein "endloser Tunnel" oder "Spiegelhalle" auftreten. Die Element Capture- und Region Capture-APIs können auch solche Probleme vermeiden.

## Wann welche API verwenden?

Die Element Capture-API erfasst das Element selbst (und dessen Nachkommen), während die Region Capture-API den Bereich des Browser-Tabs erfasst, der durch das `bounding box` des Ziel-Elements definiert ist. Element Capture zeigt immer nur das erfasste Element, selbst wenn andere DOM-Inhalte es überlagern, während bei Region Capture überlagernde Inhalte über dem Inhalt angezeigt werden können, den Sie freigeben möchten.

Es gibt legitime Anwendungsfälle für beide:

- Wenn Sie die Aufnahme auf einen DOM-Baum beschränken und alles außerhalb davon ausschließen möchten, ist die Element Capture-API die bessere Wahl. Beispielsweise möchten Sie private Inhalte wie eine Reihe von Nachrichtenbenachrichtigungen oder eine Notizansicht für Sprecher aus der Aufnahme ausschließen.
- Wenn Sie jedoch wirklich einen Bereich des Browser-Tabs erfassen möchten, unabhängig davon, was darin angezeigt wird, ist die Region Capture-API sinnvoll. Die [Region Capture-Demo](https://region-capture-demo.glitch.me/) (siehe den [Quellcode](https://glitch.com/edit/#!/region-capture-demo)) zeigt eine nützliche Möglichkeit — das Hineinzoomen auf einen bestimmten Bereich des Tabs, während Sie mehreren Benutzern eine interaktive Demonstration zeigen.

Im nächsten Abschnitt beginnen wir mit einer grundlegenden Demo der Screen Capture-API, um die Probleme zu veranschaulichen, die von den Element Capture- und Region Capture-APIs gelöst werden sollen.

## Demo zur Screen Capture API

Diese Demo verwendet die Screen Capture-API, um ein Fenster, einen Bildschirm oder einen Tab zu erfassen und den Stream über ein {{htmlelement("video")}}-Element auf derselben Seite zu übertragen. Sie können die Demo unter [Screen Capture API-Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/basic-screen-capture) live sehen (der [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/basic-screen-capture) ist ebenfalls verfügbar).

### HTML

Das HTML beginnt mit einer Hauptüberschrift und Einleitungstext und enthält dann zwei {{htmlelement("button")}}-Elemente, um die Aufnahme zu starten und zu beenden:

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

Als Nächstes fügen wir das Haupt-App-Container-Element hinzu, das das `<video>`-Element zur Übertragung der Aufnahme sowie einen Demo-Platzhalter als {{htmlelement("div")}} enthält:

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

Das CSS dieser Demo ist größtenteils wenig bemerkenswert, aber die folgenden Regeln sind erklärungswürdig. Der Rest des CSS wurde aus Gründen der Kürze ausgelassen.

```css hidden
* {
  box-sizing: border-box;
}

body {
  padding: 0 25px;
}

video,
#demo > p {
  border: 1px solid #ccc;
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

Wir setzen den {{cssxref("display")}}-Wert von `flex` auf das `main-app` `<div>`-Element, um das Video und den Demo-Platzhalter nebeneinander in zwei Spalten anzuordnen, wobei ein {{cssxref("gap")}} von `5%` dazwischen festgelegt wird. Außerdem setzen wir eine {{cssxref("min-width")}} von `980px` auf den Container, wodurch die Demo-App auf ein Desktop-Layout begrenzt wird. Dies liegt daran, dass Element Capture und Region Capture nur von Desktop-Browsern unterstützt werden und Inhalte außerhalb des Bildschirms nicht erfasst werden.

```css
#main-app {
  display: flex;
  gap: 5%;
  min-width: 980px;
}
```

Wir geben dem `<video>`-Element und dem `demo` `<div>` außerdem einen {{cssxref("flex")}}-Wert von `1`, sodass sie denselben horizontalen Platz einnehmen.

```css
video,
#demo {
  flex: 1;
}
```

Schließlich erhält das `<video>`-Element eine {{cssxref("max-width")}} von `50%` und ein festgelegtes {{cssxref("aspect-ratio")}} von `4/3`. Dies stellt sicher, dass das Video eine konsistente Größe behält und es nicht zu großen Layoutveränderungen kommt, wenn die Bildschirmaufnahme beginnt. Ohne diese Einschränkungen würde das `<video>`-Element die gleiche Breite wie der gesamte erfasste Bereich (Fenster oder Bildschirm) annehmen, was das Layout beeinträchtigen könnte. Es handelt sich schließlich um ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element), dessen {{Glossary("Intrinsic_Size", "intrinsische Größe")}} von der seines Inhalts abhängt.

```css
video {
  max-width: 50%;
  aspect-ratio: 4/3;
}
```

Layout-Verschiebungen können auch bei der Verwendung der Region- und Element Capture-APIs Probleme verursachen, weswegen dieser Code in allen drei Demos enthalten ist.

### JavaScript

Das JavaScript dieses Beispiels ist eine Anpassung des [Streaming-Bildschirmaufnahme](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture#streaming_screen_capture) Beispiels aus unserem Leitfaden "Verwendung der Screen Capture API". Wir wiederholen hier nicht die vollständige Code-Erklärung, sondern erläutern nur den relevantesten Erfassungscode.

Im Optionen-Objekt, das wir in `getDisplayMedia()` beim Aufruf übergeben, setzen wir [`preferCurrentTab: true`](/de/docs/Web/API/MediaDevices/getDisplayMedia#prefercurrenttab). Dieser Hinweis schlägt dem Browser vor, den aktuellen Tab des Benutzers als prominenteste Aufnahmequelle im Dialogfeld auszuwählen, in dem gefragt wird, was geteilt werden soll. Chrome beispielsweise bietet diese Option nur an, wenn `preferCurrentTab: true` gesetzt ist.

```js
const displayMediaOptions = {
  video: {
    displaySurface: "window",
  },
  preferCurrentTab: true,
};
```

Diese Option ist sehr nützlich, wenn Sie eine App mit einer integrierten "Bildschirm teilen"-Option entwickeln — Sie möchten nicht, dass Benutzer einen anderen Tab oder ein anderes Fenster teilen können.

Wenn die Schaltfläche "Start Capture" gedrückt wird, wird die `startCapture()`-Funktion aufgerufen, die [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) ausführt. Dadurch wird der Browser aufgefordert, den Benutzer zu bitten, eine Oberfläche zum Teilen auszuwählen (Fenster, Tab etc.). Sobald eine Auswahl getroffen wurde, wird der resultierende [`MediaStream`](/de/docs/Web/API/MediaStream) als Wert der [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des `<video>`-Elements eingestellt, um es zu übertragen:

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

Führen Sie die obige Demo in einem [unterstützten Browser](/de/docs/Web/API/Screen_Capture_API#browser_compatibility) aus, klicken Sie auf "Start Capture" und wählen Sie denselben Tab aus, in dem die Demo läuft. Sie werden den zuvor erwähnten "Spiegeleffekt" sehen:

![Ein Browserfenster mit einer Videokopie desselben Browserfensters, was bedeutet, dass es unendlich viele Aufnahmen innerhalb von Aufnahmen zeigt, die immer kleiner werden](hall-of-mirrors.png)

Das ist offensichtlich nicht ideal und würde in jeder Art von Konferenzanwendung mit einer integrierten "Bildschirm teilen"-Option Probleme verursachen.

## Die Element Capture API

Die Element Capture-API beschränkt die erfasste Region auf einen angegebenen gerenderten DOM-Baum (ein ausgewähltes Element und seine Nachkommen). In diesem Abschnitt werden wir eine zweite Demo untersuchen, die identisch mit der oben vorgestellten ist, außer dass sie Element Capture zusätzlich zur grundlegenden Screen Capture verwendet. Sehen Sie sich die Demo live unter [Element Capture API-Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/element-capture) an (der [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/element-capture) ist ebenfalls verfügbar).

Das HTML ist identisch mit dem vorherigen Beispiel, und das CSS ist _fast_ identisch. Wir erklären zunächst die Unterschiede im JavaScript und später in der [Probleme mit der Element Capture-API](#issues-with-the-element-capture-api)-Sektion die Unterschiede im CSS.

Um die Element Capture-API zu verwenden, greifen wir zusätzlich auf eine Referenz zu einem DOM-Element zu, das wir später als **Restriction Target** verwenden, d. h. der Bildschirmbereich, der im Stream gezeigt wird, wird auf genau dieses gerenderte Element und seine Nachkommen beschränkt:

```js
const demoElem = document.querySelector("#demo");
```

Die anderen Codeunterschiede befinden sich in der modifizierten `startCapture()`-Funktion:

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

1. Hier beginnen wir damit, den Media-Stream wie zuvor mit `mediaDevices.getDisplayMedia()` zu erhalten.
2. Dann isolieren wir den Video-Track aus dem Stream mit [`MediaStream.getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks).
3. Wir erstellen das notwendige `restrictionTarget`-Objekt, um die Einschränkung auf den Video-Track anzuwenden, indem wir [`RestrictionTarget.fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static) ausführen und ihm die DOM-Elementreferenz übergeben, die wir zuvor abgerufen haben.
4. Wir wenden das Restriction-Target auf den Track an, indem wir [`BrowserCaptureMediaStreamTrack.restrictTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/restrictTo) darauf ausführen und ihm das `restrictionTarget`-Objekt übergeben.
5. Sobald dies abgeschlossen ist, setzen wir die `srcObject`-Eigenschaft des `<video>`-Elements auf den Stream, um die Übertragung zu starten.

Probieren Sie das [Element Capture API-Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/element-capture) in einem [unterstützten Browser](/de/docs/Web/API/RestrictionTarget#browser_compatibility) aus. Sie sollten sehen, dass nur der Demo-Platzhalter im Stream enthalten ist, wodurch das "Spiegeleffekt"-Problem behoben wird.

> [!NOTE]
> Sie können die Einschränkung stoppen, indem Sie `restrictTo()` erneut auf denselben Track aufrufen und ein Argument von `null` übergeben:
>
> ```js
> await track.restrictTo(null);
> ```

### Einschränkungen der Element Capture API

Um sicherzustellen, dass ein Element **eignungsfähig für die Einschränkung** ist, also erfasst wird, wenn es als Restriction-Target-Element gewählt wird, muss es einen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) bilden und im 3D-Raum abgeflacht sein.

Um mit diesen Einschränkungen umzugehen, haben wir folgende zusätzliche CSS-Regel eingerichtet, die auf das Demo-Container-Element abzielt:

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

Die {{cssxref("isolation")}}-Eigenschaft wird auf `isolate` gesetzt, um einen Stacking Context zu bilden, und die {{cssxref("transform-style")}}-Eigenschaft wird auf `flat` gesetzt, um den 3D-Raum abzuflachen. Außerdem erbt das Element aufgrund der Isolationseinstellung nicht die Standardfarbe des Dokuments (weiß). Daher setzen wir {{cssxref("background-color")}} auf `white`, um zu verhindern, dass die Aufnahme transparent wird.

Eine vollständige Liste der Einschränkungen für Elemente, die als Restriction Targets verwendet werden können, finden Sie auf der [`RestrictionTarget.fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static#element)-Referenzseite.

## Die Region Capture API

Die Region Capture-API hat einen sehr ähnlichen Effekt wie die Element Capture-API. Statt jedoch die erfasste Region auf einen spezifischen gerenderten DOM-Baum zu beschränken, wird der Stream auf die Region des aktuellen Browser-Tabs zugeschnitten, die durch das `bounding box` des Ziel-Elements definiert ist. Schauen wir uns eine Demo an und untersuchen später die Unterschiede zwischen den beiden ausführlicher.

In diesem Abschnitt betrachten wir eine dritte Demo, die zu den anderen identisch ist, außer dass sie die Region Capture-API zusätzlich zur grundlegenden Screen Capture verwendet. Sehen Sie diese Demo live unter [Region Capture API-Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/region-capture) (der [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/region-capture) ist ebenfalls verfügbar).

Das HTML und CSS ist mit den vorherigen Beispielen identisch. Das JavaScript ist fast das gleiche wie das JavaScript der Element Capture-API, mit einigen bemerkenswerten Unterschieden, die wir jetzt erklären.

Um die Region Capture-API zu verwenden, greifen wir zunächst auf eine Referenz zu einem DOM-Element zu, das wir später als **Crop Target** verwenden — der Bereich des Streams wird auf die Region beschnitten, in der dieses Element gerendert ist:

```js
const demoElem = document.querySelector("#demo");
```

Nun schauen wir uns die `startCapture()`-Funktion der Region Capture-Demo an:

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

1. Wie zuvor starten wir mit dem Abrufen des Media-Streams mittels `mediaDevices.getDisplayMedia()`. Dann isolieren wir den Video-Track aus dem Stream mit [`MediaStream.getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks).
2. Wir erstellen das notwendige `cropTarget`-Objekt, um das Zuschneiden auf den Video-Track anzuwenden, indem wir [`fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static) ausführen und ihm die DOM-Elementreferenz übergeben, auf die wir zuvor zugegriffen haben.
3. Wir wenden das Crop Target auf den Track an, indem wir [`BrowserCaptureMediaStreamTrack.cropTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/cropTo) darauf ausführen und ihm das `cropTarget`-Objekt übergeben.
4. Sobald dies abgeschlossen ist, setzen wir die `srcObject`-Eigenschaft des `<video>`-Elements auf den Stream, um die Übertragung zu starten.

Probieren Sie das [Region Capture API-Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/region-capture) in einem [unterstützten Browser](/de/docs/Web/API/CropTarget#browser_compatibility) aus. Sie sollten sehen, dass nur der Demo-Platzhalter im Stream enthalten ist, wodurch ebenfalls das "Spiegeleffekt"-Problem behoben wird.

> [!NOTE]
> Sie können das Zuschneiden stoppen, indem Sie `cropTo()` erneut auf denselben Track aufrufen und ein Argument von `null` übergeben:
>
> ```js
> await track.cropTo(null);
> ```

### Einschränkungen der Region Capture API

Region Capture hat nicht die gleichen Einschränkungen wie Element Capture — es erfolgt ein Zuschneiden des Streams auf eine bestimmte Größe, anstelle der Übertragung eines spezifischen gerenderten DOM-Baums. Daher ist diese Regel nicht erforderlich:

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

Jedoch gibt es weiterhin Einschränkungen bezüglich der Elemente, die als Crop Targets verwendet werden können. Eine vollständige Liste finden Sie auf der [`CropTarget.fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static#element)-Referenzseite.

## Siehe auch

- [Erfassung eines Videostreams von einem beliebigen Element](https://developer.chrome.com/docs/web-platform/element-capture) auf developer.chrome.com (2025)
- [Besseres Tab-Sharing mit Region Capture](https://developer.chrome.com/docs/web-platform/region-capture) auf developer.chrome.com (2023)
- [Element Capture-Demo](https://element-capture-demo.glitch.me/)
- [Region Capture-Demo](https://region-capture-demo.glitch.me/)
