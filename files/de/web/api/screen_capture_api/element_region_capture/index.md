---
title: Verwendung der Element Capture- und Region Capture-APIs
slug: Web/API/Screen_Capture_API/Element_Region_Capture
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{DefaultAPISidebar("Screen Capture API")}}

Dieser Leitfaden bietet einen Überblick über die typische Nutzung der Element Capture- und Region Capture-APIs, zeigt, wie man sie verwendet, und welches Problem sie lösen.

## Hintergrund

Standardmäßig erfasst die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) einen gesamten Bildschirm, ein Fenster oder einen Tab. Die Element Capture- und Region Capture-APIs ermöglichen es Ihnen, den erfassten Stream auf einen bestimmten gerenderten DOM-Baum oder auf den Teil des Bildschirms zu beschränken, der durch das Begrenzungsrechteck eines bestimmten DOM-Baums definiert ist.

Dies ist nützlich, wenn Sie nur eine begrenzte Region teilen möchten, um unnötige Bandbreite oder den Bildschirmplatz zu reduzieren, der für die Anzeige der Aufnahme erforderlich ist, oder aus Datenschutzgründen (Sie möchten möglicherweise anderen Teilnehmern nicht Ihre Nachrichtennotifikationen oder die Hintergrundkonfigurationen zeigen, die zum Ausführen der Demo erforderlich sind, die Sie teilen).

Darüber hinaus können Sie beim Erfassen Ihrer Webcam-Ausgabe einen dieser unerwünschten Effekte wie "endlose Wurmloch" oder "Spiegelhalle" erhalten. Die Element Capture- und Region Capture-APIs können Ihnen auch dabei helfen, diese Arten von Problemen zu vermeiden.

## Wann jede API verwendet werden sollte

Die Element Capture-API erfasst das Element selbst (und seine Nachkommen), während die Region Capture-API den Bereich des Browser-Tabs erfasst, der durch das Begrenzungsrechteck des Ziel-Elements definiert ist. Element Capture zeigt immer nur das erfasste Element, auch wenn anderer DOM-Inhalt es überlappt, während Region Capture dazu führen kann, dass überlappender Inhalt über dem Inhalt angezeigt wird, den Sie teilen möchten.

Es gibt legitime Anwendungsfälle für beide:

- Wenn Sie die Erfassung auf einen bestimmten DOM-Baum beschränken und alles außerhalb davon ausschließen müssen, ist die Element Capture-API die bessere Wahl. Zum Beispiel möchten Sie nicht, dass private Inhalte wie eine Reihe von Nachrichtennotifikationen oder ein UI für Sprechernotizen in der Erfassung angezeigt werden.
- Wenn Sie jedoch wirklich einen Bereich des Browser-Tabs erfassen möchten, unabhängig davon, was darin angezeigt wird, wird Ihnen die Region Capture-API gut dienen. Das [Region Capture Demo](https://region-capture-demo.glitch.me/) (siehe den [Quellcode](https://glitch.com/edit/#!/region-capture-demo)) zeigt eine nützliche Möglichkeit — das Hineinzoomen in einen bestimmten Bereich des Tabs, während Sie mehreren Benutzern eine interaktive Anleitung zeigen.

Im nächsten Abschnitt beginnen wir mit einer grundlegenden Screen Capture API-Demo, um die Probleme zu veranschaulichen, die mit der Element Capture- und Region Capture-API gelöst werden sollen.

## Screen Capture API-Demo

Diese Demo verwendet die Screen Capture API, um ein Fenster, einen Bildschirm oder einen Tab zu erfassen und den Stream über ein {{htmlelement("video")}}-Element auf derselben Seite zu übertragen. Sie können es live ausführen unter [Screen Capture API example](https://mdn.github.io/dom-examples/screen-capture-api/basic-screen-capture) (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/basic-screen-capture)).

### HTML

Das HTML beginnt mit einer Hauptüberschrift und einem Einführungstext und schließt dann zwei {{htmlelement("button")}}-Elemente ein, um die Erfassung zu starten und zu stoppen:

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

Als Nächstes fügen wir den Haupt-App-Container ein, der das `<video>`-Element zur Übertragung der Erfassung und einen Demo-Platzhalter {{htmlelement("div")}} enthält:

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

Das CSS für dieses Demo ist größtenteils unauffällig, aber die folgenden wenigen Regeln sind es wert, erklärt zu werden. Wir haben den Rest des CSS aus Gründen der Kürze ausgeblendet.

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

Wir setzen einen {{cssxref("display")}}-Wert von `flex` auf das `main-app` `<div>`, um das Video und den Demo-Platzhalter nebeneinander in zwei Spalten anzuordnen und einen {{cssxref("gap")}} von `5%` zwischen ihnen zu setzen. Wir setzen auch eine {{cssxref("min-width")}} von `980px` auf den Container, um die Demo-App im Wesentlichen auf ein Desktop-Layout zu beschränken. Dies liegt daran, dass Element Capture und Region Capture nur in Desktop-Browsern unterstützt werden und Off-Screen-Inhalte nicht erfasst werden.

```css
#main-app {
  display: flex;
  gap: 5%;
  min-width: 980px;
}
```

Wir geben dem `<video>`-Element und dem `demo` `<div>` auch einen {{cssxref("flex")}}-Wert von `1`, damit sie die gleiche Menge an horizontalem Raum einnehmen.

```css
video,
#demo {
  flex: 1;
}
```

Schließlich geben wir dem `<video>`-Element eine {{cssxref("max-width")}} von `50%` und ein festes {{cssxref("aspect-ratio")}} von `4/3`. Dies dient dazu, das Video in einer konsistenten Größe zu halten und zu viel Layout-Umstellung zu vermeiden, wenn die Bildschirmaufzeichnung begonnen wird. Wenn wir dies nicht tun würden, würde das `<video>`-Element auf die gleiche Breite wie der gesamte erfasste Bereich (Fenster oder Bildschirm) wachsen, was das Layout beeinflussen würde. Es ist letztendlich ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element), sodass seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} von der Größe seines Inhalts abhängt.

```css
video {
  max-width: 50%;
  aspect-ratio: 4/3;
}
```

Layoutverschiebung kann auch Probleme beim Einsatz der Region und Element Capture-APIs verursachen, daher ist dieser Code in allen drei Demos enthalten.

### JavaScript

Das JavaScript für dieses Beispiel ist eine Anpassung des Beispiels [Streaming screen capture](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture#streaming_screen_capture) in unserem Leitfaden "Using the Screen Capture API". Wir werden die vollständige Codeerklärung hier nicht wiederholen; wir erklären nur den relevantesten Erfassungscode.

In dem Optionsobjekt, das an `getDisplayMedia()` übergeben wird, wenn wir es aufrufen, setzen wir [`preferCurrentTab: true`](/de/docs/Web/API/MediaDevices/getDisplayMedia#prefercurrenttab). Dieser Hinweis schlägt vor, dass der Browser dem Benutzer den aktuellen Tab als prominenteste Erfassungsquelle im Dialog anbieten sollte, in dem der Benutzer gefragt wird, was geteilt werden soll. Chrome beispielsweise gibt dem Benutzer nur diese Option, wenn `preferCurrentTab: true` gesetzt ist.

```js
const displayMediaOptions = {
  video: {
    displaySurface: "window",
  },
  preferCurrentTab: true,
};
```

Diese Option ist sehr nützlich, wenn Sie eine App mit einer integrierten "Bildschirm teilen"-Option entwickeln — Sie möchten den Benutzern nicht erlauben, einen anderen Tab oder ein anderes Fenster zu teilen.

Wenn die Schaltfläche "Start Capture" gedrückt wird, wird die `startCapture()`-Funktion ausgeführt, die [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) aufruft. Dadurch wird der Browser veranlasst, den Benutzer aufzufordern, eine Oberfläche zum Teilen auszuwählen (Fenster, Tab, etc.). Sobald eine Auswahl getroffen wurde, wird der resultierende [`MediaStream`](/de/docs/Web/API/MediaStream) auf den Wert der [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des `<video>`-Elements gesetzt, um ihn zu übertragen:

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

Führen Sie die obige Demo in einem [unterstützenden Browser](/de/docs/Web/API/Screen_Capture_API#browser_compatibility) aus, klicken Sie auf "Start Capture" und wählen Sie denselben Tab aus, in dem die Demo ausgeführt wird. Sie werden den zuvor erwähnten "Spiegelhalleneffekt" sehen:

![Ein Browserfenster enthält eine Videoaufnahme dieses Browserfensters, was bedeutet, dass es unendliche Aufnahmen innerhalb von Aufnahmen zeigt, die immer kleiner werden](hall-of-mirrors.png)

Dies ist offensichtlich nicht ideal und würde in jeder Art von Konferenzanwendung mit einer integrierten "Bildschirm teilen"-Option Probleme verursachen.

## Die Element Capture-API

Die Element Capture-API beschränkt die erfasste Region auf einen angegebenen gerenderten DOM-Baum (ein ausgewähltes Element und dessen Nachkommen). In diesem Abschnitt werden wir eine zweite Demo erkunden, die mit der oben präsentierten identisch ist, außer dass sie Element Capture zusätzlich zur grundlegenden Screen Capture verwendet. Sehen Sie sich diese Demo live an bei [Element Capture API example](https://mdn.github.io/dom-examples/screen-capture-api/element-capture) (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/element-capture)).

Das HTML ist identisch mit dem vorherigen Beispiel, und das CSS ist _fast_ identisch. Wir werden die Unterschiede im JavaScript jetzt erklären, dann die Unterschiede im CSS später, im Abschnitt [Probleme mit der Element Capture API](#issues-with-the-element-capture-api), betrachten.

Um die Element Capture-API zu verwenden, greifen wir zusätzlich auf eine Referenz zu einem DOM-Element zu, das wir später als **Einschränkungsziel** verwenden werden — der im Stream gezeigte Bildschirmbereich wird auf nur dieses gerenderte Element und dessen Nachkommen beschränkt:

```js
const demoElem = document.querySelector("#demo");
```

Die anderen Codeunterschiede befinden sich alle in der modifizierten `startCapture()`-Funktion:

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

1. Hier beginnen wir damit, den Medien-Stream wie zuvor mit `mediaDevices.getDisplayMedia()` zu erfassen.
2. Dann isolieren wir die Videospur aus dem Stream mit [`MediaStream.getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks).
3. Wir erstellen das notwendige `restrictionTarget`-Objekt, um die Einschränkung auf die Videospur anzuwenden, indem wir [`RestrictionTarget.fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static) ausführen und das zuvor erfasste DOM-Element übergeben.
4. Wir wenden das Einschränkungsziel auf die Spur an, indem wir [`BrowserCaptureMediaStreamTrack.restrictTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/restrictTo) darauf aufrufen und das `restrictionTarget`-Objekt übergeben.
5. Sobald all dies erledigt ist, setzen wir den Wert der `srcObject`-Eigenschaft des `<video>`-Elements auf den Stream, um mit der Übertragung zu beginnen.

Versuchen Sie nun, das [Element Capture API example](https://mdn.github.io/dom-examples/screen-capture-api/element-capture) in einem [unterstützenden Browser](/de/docs/Web/API/RestrictionTarget#browser_compatibility) auszuführen. Sie sollten sehen, dass nur der Demo-Platzhalter im Stream enthalten ist, was das "Spiegelhallen"-Problem behebt.

> [!NOTE]
> Sie können die Einschränkung stoppen, indem Sie `restrictTo()` erneut auf derselben Spur aufrufen und als Argument `null` übergeben:
>
> ```js
> await track.restrictTo(null);
> ```

### Einschränkungen bei der Element Capture-API

Um sicherzustellen, dass das Element **für die Einschränkung geeignet** ist, das heißt, es wird erfasst, wenn es als Einschränkungsziel ausgewählt wird, muss es einen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) bilden und im 3D-Raum flach sein.

Um mit diesen Einschränkungen umzugehen, haben wir die folgende zusätzliche CSS-Regel festgelegt, die auf das Demo-Container-Element abzielt:

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

Die {{cssxref("isolation")}}-Eigenschaft ist auf `isolate` gesetzt, um das Element einen Stacking-Kontext bilden zu lassen, und die {{cssxref("transform-style")}}-Eigenschaft ist auf `flat` gesetzt, um es abzuflachen. Außerdem erbt das Element aufgrund der Art der Isolation, die wir festgelegt haben, nicht mehr die standardmäßige weiße Farbe der Seite. Daher setzen wir {{cssxref("background-color")}} auf `white`, um zu verhindern, dass die Erfassung transparent wird.

Für die vollständige Liste der Einschränkungen der Elemente, die als Einschränkungsziele verwendet werden können, siehe die Referenzseite zu [`RestrictionTarget.fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static#element).

## Die Region Capture-API

Die Region Capture-API hat einen sehr ähnlichen Effekt wie die Element Capture-API, außer dass sie anstatt die erfasste Region auf einen bestimmten gerenderten DOM-Baum zu beschränken, den Stream auf den Bereich des aktuellen Browser-Tabs zuschneidet, der durch das Begrenzungsrechteck des Ziel-Elements definiert wird. Schauen wir uns eine Demo an und dann später die Unterschiede zwischen den beiden im Detail.

In diesem Abschnitt werden wir eine dritte Demo untersuchen, die mit den anderen identisch ist, außer dass sie Region Capture zusätzlich zur grundlegenden Screen Capture verwendet. Siehe diese Demo live bei [Region Capture API example](https://mdn.github.io/dom-examples/screen-capture-api/region-capture) (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/region-capture)).

HTML und CSS sind identisch mit den vorherigen Beispielen. Das JavaScript ähnelt dem der Element Capture-Demo, es gibt jedoch einige bemerkenswerte Unterschiede, die wir jetzt erklären werden.

Um die Region Capture-API zu nutzen, greifen wir zuerst auf eine Referenz zu einem DOM-Element zu, das wir später als **Crop-Ziel** verwenden werden — der im Stream gezeigte Bereich wird auf genau den Bereich zugeschnitten, in dem dieses Element gerendert wird:

```js
const demoElem = document.querySelector("#demo");
```

Schauen wir uns nun die `startCapture()`-Funktion der Region Capture-Demo an:

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

1. Wie zuvor beginnen wir damit, den Medien-Stream mit `mediaDevices.getDisplayMedia()` zu erfassen, dann isolieren wir die Videospur aus dem Stream mit [`MediaStream.getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks).
2. Wir erstellen das notwendige `cropTarget`-Objekt, um den Zuschnitt auf die Videospur anzuwenden, indem wir [`fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static) ausführen und das zuvor erfasste DOM-Element übergeben.
3. Wir wenden das Crop-Ziel auf die Spur an, indem wir [`BrowserCaptureMediaStreamTrack.cropTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/cropTo) darauf aufrufen und das `cropTarget`-Objekt übergeben.
4. Sobald all dies erledigt ist, setzen wir den Wert der `srcObject`-Eigenschaft des `<video>`-Elements auf den Stream, um mit der Übertragung zu beginnen.

Versuchen Sie nun, das [Region Capture API example](https://mdn.github.io/dom-examples/screen-capture-api/region-capture) in einem [unterstützenden Browser](/de/docs/Web/API/CropTarget#browser_compatibility) auszuführen. Sie sollten sehen, dass nur der Demo-Platzhalter im Stream enthalten ist, was auch das "Spiegelhallen"-Problem behebt.

> [!NOTE]
> Sie können den Zuschnitt stoppen, indem Sie `cropTo()` erneut auf derselben Spur aufrufen und als Argument `null` übergeben:
>
> ```js
> await track.cropTo(null);
> ```

### Einschränkungen bei der Region Capture-API

Region Capture hat nicht das gleiche Maß an Einschränkungen wie Element Capture — es schneidet den Stream auf eine bestimmte Größe zu, anstatt einen spezifisch gerenderten DOM-Baum zu übertragen, daher erfordert es diese Regel nicht:

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

Es gibt jedoch weiterhin Einschränkungen für die Elemente, die als Crop-Ziele verwendet werden können. Für die vollständige Liste siehe die Referenzseite zu [`CropTarget.fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static#element).

## Siehe auch

- [Capture a video stream from any element](https://developer.chrome.com/docs/web-platform/element-capture) auf developer.chrome.com (2025)
- [Better tab sharing with Region Capture](https://developer.chrome.com/docs/web-platform/region-capture) auf developer.chrome.com (2023)
- [Element Capture Demo](https://element-capture-demo.glitch.me/)
- [Region Capture Demo](https://region-capture-demo.glitch.me/)
