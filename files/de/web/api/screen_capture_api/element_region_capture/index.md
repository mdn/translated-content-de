---
title: Verwenden der Element Capture- und Region Capture-APIs
slug: Web/API/Screen_Capture_API/Element_Region_Capture
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("Screen Capture API")}}

Dieser Leitfaden bietet einen Überblick über die typische Verwendung der Element Capture- und Region Capture-APIs, zeigt, wie man sie benutzt, und welches Problem sie lösen.

## Hintergrund

Standardmäßig erfasst die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) einen gesamten Bildschirm, ein Fenster oder einen Tab. Die Element Capture- und Region Capture-APIs ermöglichen es Ihnen, den erfassten Stream auf einen bestimmten gerenderten DOM-Baum oder auf den Teil des Bildschirms zu beschränken, der durch den Begrenzungsrahmen eines bestimmten DOM-Baums definiert wird.

Dies ist nützlich, wenn Sie nur einen begrenzten Bereich teilen möchten, um unnötige Bandbreite oder Bildschirmfläche zu reduzieren, die für das Anzeigen der Aufnahme erforderlich ist, oder aus Datenschutzgründen (z. B. möchten Sie möglicherweise anderen Teilnehmern nicht Ihre Nachrichtenbenachrichtigungen oder die benötigten Hintergrundinformationen für die Demo, die Sie teilen, zeigen).

Darüber hinaus kann beim Erfassen der Ausgabe Ihrer Webcam einer dieser unerwünschten "unendlichen Wurmloch-" oder "Spiegelhalle-"Effekte entstehen. Die Element Capture- und Region Capture-APIs können Ihnen auch helfen, diese Probleme zu vermeiden.

## Wann sollten Sie welche API verwenden?

Die Element Capture API erfasst das Element selbst (und seine Nachfahren), während die Region Capture API den Bereich des Browser-Tabs erfasst, der durch den Begrenzungsrahmen des Ziel-Elements definiert wird. Element Capture zeigt immer nur das erfasste Element, auch wenn andere DOM-Inhalte es überlappen. Region Capture kann dazu führen, dass überlappende Inhalte über den von Ihnen zu teilenden Inhalt angezeigt werden.

Es gibt legitime Anwendungsfälle für beide:

- Wenn Sie die Aufnahme auf einen DOM-Baum beschränken müssen und alles außerhalb davon ausschließen, ist die Element Capture API eine bessere Wahl. Zum Beispiel möchten Sie keine privaten Inhalte wie eine Reihe von Nachrichtenbenachrichtigungen oder ein Rednernotizen-UI in der Aufnahme zeigen.
- Wenn Sie jedoch wirklich einen Bereich des Browser-Tabs erfassen möchten, unabhängig davon, was darin angezeigt wird, dann ist die Region Capture API geeignet.

Im nächsten Abschnitt beginnen wir mit einer grundlegenden Demo der Screen Capture API, um die Probleme zu veranschaulichen, die mit den Element Capture- und Region Capture-APIs gelöst werden sollen.

## Screen Capture API-Demo

Diese Demo verwendet die Screen Capture API, um ein Fenster, einen Bildschirm oder einen Tab zu erfassen und den Stream über ein {{htmlelement("video")}}-Element auf derselben Seite zu übertragen. Sie können es live unter [Screen Capture API-Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/basic-screen-capture/) sehen (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/basic-screen-capture)).

### HTML

Das HTML beginnt mit einer Hauptüberschrift und einem Einführungstext und enthält dann zwei {{htmlelement("button")}}-Elemente, um die Aufnahme zu starten und zu stoppen:

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

Als Nächstes fügen wir den Haupt-Container der App hinzu, der das `<video>`-Element zum Übertragen der Aufnahme enthält, sowie einen Demo-Platzhalter {{htmlelement("div")}}:

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

Das CSS für diese Demo ist größtenteils unauffällig, aber die folgenden wenigen Regeln sind erwähnenswert. Wir haben den Rest des CSS aus Gründen der Kürze ausgeblendet.

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

Wir setzen einen {{cssxref("display")}}-Wert von `flex` auf das `main-app` `<div>`, um das Video und den Demo-Platzhalter nebeneinander in zwei Spalten anzuordnen und setzen einen {{cssxref("gap")}} von `5%` dazwischen. Wir setzen auch eine {{cssxref("min-width")}} von `980px` auf den Container, wodurch die Demo-App im Wesentlichen auf ein Desktop-Layout beschränkt wird. Dies liegt daran, dass Element Capture- und Region Capture nur auf Desktop-Browsern unterstützt werden und außerhalb des Bildschirms befindliche Inhalte nicht erfasst werden.

```css
#main-app {
  display: flex;
  gap: 5%;
  min-width: 980px;
}
```

Wir geben auch dem `<video>`-Element und dem `demo` `<div>` einen {{cssxref("flex")}}-Wert von `1`, sodass sie denselben horizontalen Raum einnehmen.

```css
video,
#demo {
  flex: 1;
}
```

Schließlich geben wir dem `<video>`-Element eine {{cssxref("max-width")}} von `50%` und ein festes {{cssxref("aspect-ratio")}} von `4/3`. Dies dient dazu, das Video in einer konsistenten Größe zu halten und zu vermeiden, dass das Layout zu stark durcheinander gebracht wird, wenn die Bildschirmaufnahme beginnt zu übertragen. Wenn wir das nicht tun würden, würde das `<video>`-Element so breit wie der gesamte erfasste Bereich (Fenster oder Bildschirm) und würde das Layout beeinflussen. Es ist schließlich ein {{Glossary("replaced_elements", "ersetztes Element")}}, sodass seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} von der seines Inhalts abhängt.

```css
video {
  max-width: 50%;
  aspect-ratio: 4/3;
}
```

Layoutverschiebungen können auch Probleme verursachen, wenn man die Region- und Element-Capture-APIs verwendet, weshalb dieser Code in allen drei Demos enthalten ist.

### JavaScript

Das JavaScript für dieses Beispiel ist aus dem Beispiel [Streaming screen capture](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture#streaming_screen_capture) in unserem Leitfaden "Using the Screen Capture API" angepasst. Wir werden die vollständige Codeerklärung hier nicht wiederholen; wir erklären nur den relevantesten Aufnahmecode.

Im Optionsobjekt, das in `getDisplayMedia()` übergeben wird, wenn wir es aufrufen, setzen wir [`preferCurrentTab: true`](/de/docs/Web/API/MediaDevices/getDisplayMedia#prefercurrenttab). Dieser Hinweis schlägt dem Browser vor, den aktuellen Tab des Nutzers als prominenteste Aufnahmequelle im Dialog anzubieten, der sie fragt, was geteilt werden soll. Chrome gibt beispielsweise nur diese Option, wenn `preferCurrentTab: true` gesetzt ist.

```js
const displayMediaOptions = {
  video: {
    displaySurface: "window",
  },
  preferCurrentTab: true,
};
```

Diese Option ist sehr nützlich, wenn Sie eine App mit einer eingebauten "Bildschirm teilen"-Option erstellen — Sie möchten nicht, dass Benutzer einen anderen Tab oder ein Fenster teilen dürfen.

Wenn die Schaltfläche "Start Capture" gedrückt wird, läuft die Funktion `startCapture()`, die [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) aufruft. Dies veranlasst den Browser, den Benutzer zu fragen, welches Element geteilt werden soll (Fenster, Tab, usw.). Sobald eine Wahl getroffen wurde, wird der resultierende [`MediaStream`](/de/docs/Web/API/MediaStream) auf den Wert der [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des `<video>`-Elements gesetzt, um ihn zu übertragen:

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

Führen Sie die obige Demo in einem [unterstützenden Browser](/de/docs/Web/API/Screen_Capture_API#browser_compatibility) aus, klicken Sie auf "Start Capture" und wählen Sie denselben Tab aus, auf dem die Demo läuft. Sie werden den "Spiegelhalleneffekt" sehen, der bereits erwähnt wurde:

![Ein Browserfenster, das eine Videoaufnahme dieses Browserfensters enthält, zeigt daher unendliche Aufnahmen innerhalb von Aufnahmen, die kleiner und kleiner werden](hall-of-mirrors.png)

Dies ist offensichtlich nicht ideal und würde in jeder Art von Konferenzanwendung mit einer eingebauten "Bildschirm teilen"-Option Probleme verursachen.

## Die Element Capture API

Die Element Capture API beschränkt den erfassten Bereich auf einen angegebenen gerenderten DOM-Baum (ein ausgewähltes Element und seine Nachfahren). In diesem Abschnitt werden wir eine zweite Demo untersuchen, die identisch mit der oben vorgestellten ist, mit dem Unterschied, dass sie Element Capture zusätzlich zur grundlegenden Bildschirmaufnahme verwendet. Sehen Sie sich diese Demo live an unter [Element Capture API-Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/element-capture/) (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/element-capture)).

Das HTML ist identisch mit dem vorherigen Beispiel und das CSS ist _fast_ identisch. Wir erklären jetzt die Unterschiede im JavaScript und später die Unterschiede im CSS im Abschnitt [Einschränkungen der Element Capture API](#einschränkungen_der_element_capture_api).

Um die Element Capture API zu verwenden, greifen wir zusätzlich auf ein DOM-Element zu, das wir später als **Einschränkungsziel** verwenden werden — der im Stream gezeigte Bildschirmbereich wird auf nur dieses gerenderte Element und seine Nachfahren beschränkt:

```js
const demoElem = document.querySelector("#demo");
```

Die anderen Code-Unterschiede befinden sich alle in der modifizierten `startCapture()`-Funktion:

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

1. Wir beginnen hier, indem wir wie zuvor den Medienstream mit `mediaDevices.getDisplayMedia()` erfassen.
2. Dann isolieren wir die Videospur aus dem Stream mit [`MediaStream.getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks).
3. Wir erstellen das erforderliche `restrictionTarget`-Objekt, um die Einschränkung auf die Videospur anzuwenden, indem wir [`RestrictionTarget.fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static) aufrufen und ihm die zuvor erfasste DOM-Element-Referenz übergeben.
4. Wir wenden das Einschränkungsziel auf die Spur an, indem wir [`BrowserCaptureMediaStreamTrack.restrictTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/restrictTo) darauf aufrufen und ihm das `restrictionTarget`-Objekt übergeben.
5. Nachdem alles oben Genannte erledigt ist, setzen wir dann den `srcObject`-Eigenschaftswert des `<video>`-Elements auf den Stream, um die Übertragung zu starten.

Versuchen Sie nun, das [Element Capture API-Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/element-capture/) in einem [unterstützenden Browser](/de/docs/Web/API/RestrictionTarget#browser_compatibility) auszuführen. Sie sollten sehen, dass nur der Demo-Platzhalter im Stream enthalten ist, wodurch das "Spiegelhallen"-Problem behoben wird.

> [!NOTE]
> Sie können die Einschränkung stoppen, indem Sie `restrictTo()` erneut auf derselben Spur aufrufen und ihm ein Argument von `null` übergeben:
>
> ```js
> await track.restrictTo(null);
> ```

### Einschränkungen der Element Capture API

Um sicherzustellen, dass das Element **für die Einschränkung geeignet** ist, d.h. es beim Auswählen als Einschränkungsziel erfasst wird, muss es einen [Stapelkontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) bilden und in 3D-Raum abgeflacht sein.

Um mit diesen Einschränkungen umzugehen, haben wir die folgende zusätzliche CSS-Regel gesetzt, die das Demo-Container-Element anspricht:

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

Die {{cssxref("isolation")}}-Eigenschaft ist auf `isolate` gesetzt, um das Element einen Stapelkontext bilden zu lassen, und die {{cssxref("transform-style")}}-Eigenschaft ist auf `flat` gesetzt, um es abzuflachen. Außerdem übernimmt das Element aufgrund der von uns gesetzten Isolationseigenschaften die standardmäßige weiße Farbe der Seite nicht mehr. Daher setzen wir die {{cssxref("background-color")}} auf `weiß`, um zu verhindern, dass die Aufnahme transparent ist.

Für die vollständige Liste der Einschränkungen der als Einschränkungsziele verwendbaren Elemente siehe die [`RestrictionTarget.fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static#element) Referenzseite.

## Die Region Capture API

Die Region Capture API hat eine sehr ähnliche Wirkung wie die Element Capture API, jedoch beschränkt sie nicht den erfassten Bereich auf einen bestimmten gerenderten DOM-Baum, sondern schneidet den Stream auf den Bereich des aktuellen Browser-Tabs zu, der durch den Begrenzungsrahmen des Ziel-Elements definiert wird. Schauen wir uns eine Demo an und untersuchen dann später die Unterschiede zwischen den beiden im Detail.

In diesem Abschnitt werden wir eine dritte Demo untersuchen, die identisch mit den anderen ist, jedoch die Region Capture zusätzlich zur grundlegenden Bildschirmaufnahme verwendet. Sehen Sie sich diese Demo live an unter [Region Capture API-Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/region-capture/) (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/region-capture)).

Das HTML und das CSS sind identisch mit den vorherigen Beispielen. Das JavaScript ist fast dasselbe wie das der Element Capture, mit einigen bemerkenswerten Unterschieden, die wir nun erklären.

Um die Region Capture API zu verwenden, greifen wir zuerst auf ein DOM-Element zu, das wir später als **Beschnitteziel** verwenden werden — der im Stream gezeigte Bereich wird auf nur den Bereich reduziert, in dem dieses Element gerendert wird:

```js
const demoElem = document.querySelector("#demo");
```

Untersuchen wir nun die `startCapture()`-Funktion der Region Capture-Demo:

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

1. Wie zuvor beginnen wir, indem wir den Medienstream mit `mediaDevices.getDisplayMedia()` erfassen, und isolieren dann die Videospur aus dem Stream mit [`MediaStream.getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks).
2. Wir erstellen das erforderliche `cropTarget`-Objekt, um den Beschnitt auf die Videospur anzuwenden, indem wir [`fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static) aufrufen und ihm die zuvor erfasste DOM-Element-Referenz übergeben.
3. Wir wenden das Beschnitteziel auf die Spur an, indem wir [`BrowserCaptureMediaStreamTrack.cropTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/cropTo) darauf aufrufen und ihm das `cropTarget`-Objekt übergeben.
4. Nachdem alles oben Genannte erledigt ist, setzen wir dann den `srcObject`-Eigenschaftswert des `<video>`-Elements auf den Stream, um die Übertragung zu starten.

Versuchen Sie nun, das [Region Capture API-Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/region-capture/) in einem [unterstützenden Browser](/de/docs/Web/API/CropTarget#browser_compatibility) auszuführen. Sie sollten sehen, dass nur der Demo-Platzhalter im Stream enthalten ist, was auch das "Spiegelhallen"-Problem behebt.

> [!NOTE]
> Sie können das Zuschneiden stoppen, indem Sie `cropTo()` erneut auf derselben Spur aufrufen und ihm ein Argument von `null` übergeben:
>
> ```js
> await track.cropTo(null);
> ```

### Einschränkungen der Region Capture API

Region Capture hat nicht dieselben Einschränkungen wie Element Capture — es schneidet den Stream auf eine bestimmte Größe zu, anstatt einen bestimmten gerenderten DOM-Baum zu übertragen, daher benötigt es diese Regel nicht:

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

Es gibt jedoch weiterhin Einschränkungen bei den als Beschnitteziele verwendbaren Elementen. Für die vollständige Liste siehe die [`CropTarget.fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static#element) Referenzseite.

## Siehe auch

- [Eine Videostream aus jedem Element erfassen](https://developer.chrome.com/docs/web-platform/element-capture) auf developer.chrome.com (2025)
- [Besseres Tab-Sharing mit Region Capture](https://developer.chrome.com/docs/web-platform/region-capture) auf developer.chrome.com (2023)
