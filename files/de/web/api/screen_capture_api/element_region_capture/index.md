---
title: Verwendung der Element Capture und Region Capture APIs
slug: Web/API/Screen_Capture_API/Element_Region_Capture
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{DefaultAPISidebar("Screen Capture API")}}

Dieser Leitfaden bietet einen Überblick über die typische Verwendung der Element Capture und Region Capture APIs, zeigt, wie man sie nutzt und welches Problem sie lösen.

## Hintergrund

Standardmäßig erfasst die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) einen gesamten Bildschirm, ein Fenster oder einen Tab. Die Element Capture und Region Capture APIs ermöglichen es Ihnen, den erfassten Stream entweder auf einen bestimmten gerenderten DOM-Baum oder auf den Teil des Bildschirms, der durch das Begrenzungsrechteck eines spezifischen DOM-Baums definiert ist, zu beschränken.

Dies ist nützlich, wenn Sie nur einen begrenzten Bereich teilen möchten, um unnötige Bandbreite oder den erforderlichen Bildschirmplatz zur Anzeige der Erfassung zu reduzieren oder aus Datenschutzgründen (Sie möchten möglicherweise nicht, dass andere Teilnehmer Ihre Nachrichtennachrichten oder Hintergrundeinstellungen sehen, die zum Ausführen der von Ihnen geteilten Demo erforderlich sind).

Außerdem können beim Erfassen Ihrer Webkamera-Ausgabe unerwünschte Effekte wie der "endlose Wurmloch"- oder "Spiegeleffekt" auftreten. Die Element Capture und Region Capture APIs können Ihnen auch dabei helfen, solche Probleme zu vermeiden.

## Wann man welche API verwenden sollte

Die Element Capture API erfasst das Element selbst (und seine Nachkommen), während die Region Capture API den Bereich des Browser-Tabs erfasst, der durch das Begrenzungsrechteck des Ziel-Elements definiert ist. Element Capture zeigt immer nur das erfasste Element, selbst wenn andere DOM-Inhalte es überlappen, während Region Capture dazu führen kann, dass überlappende Inhalte über den freizugebenden Inhalten angezeigt werden.

Es gibt legitime Anwendungsfälle für beide:

- Wenn Sie die Erfassung auf einen DOM-Baum beschränken möchten und alles außerhalb davon ausschließen wollen, ist die Element Capture API die bessere Wahl. Zum Beispiel möchten Sie nicht, dass private Inhalte wie eine Reihe von Nachrichtennachrichten oder eine Referentennotizen-UI in der Erfassung erscheinen.
- Wenn Sie einen Bereich des Browser-Tabs erfassen möchten, unabhängig davon, was darin angezeigt wird, ist die Region Capture API gut geeignet. Die [Region Capture Demo](https://region-capture-demo.glitch.me/) (siehe den [Quellcode](https://glitch.com/edit/#!/region-capture-demo)) zeigt eine nützliche Möglichkeit — das Heranzoomen eines bestimmten Bereichs des Tabs, während Sie mehreren Benutzern eine interaktive Anleitung zeigen.

Im nächsten Abschnitt beginnen wir mit einer grundlegenden Demo zur Screen Capture API, um die Probleme darzustellen, die die Element Capture und Region Capture APIs lösen sollen.

## Screen Capture API-Demo

Diese Demo verwendet die Screen Capture API, um ein Fenster, einen Bildschirm oder einen Tab zu erfassen und den Stream über ein {{htmlelement("video")}}-Element auf derselben Seite zu übertragen. Sie können es live bei [Screen Capture API Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/basic-screen-capture/) (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/basic-screen-capture)) sehen.

### HTML

Das HTML beginnt mit einer Hauptüberschrift und einem Einführungstext und enthält dann zwei {{htmlelement("button")}}-Elemente, um die Erfassung zu starten und zu stoppen:

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

Danach fügen wir den Haupt-App-Container ein, der das `<video>`-Element zur Übertragung der Erfassung enthält, sowie einen Demo-Platzhalter {{htmlelement("div")}}:

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

Das CSS für diese Demo ist größtenteils unauffällig, aber die folgenden Regeln sind erwähnenswert. Wir haben den Rest des CSS aus Gründen der Kürze ausgeblendet.

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

Wir setzen einen {{cssxref("display")}}-Wert von `flex` auf das `main-app` `<div>`, um Video und Demo-Platzhalter nebeneinander in zwei Spalten anzuordnen, und setzen einen {{cssxref("gap")}} von `5%` zwischen ihnen. Wir setzen auch eine {{cssxref("min-width")}} von `980px` auf den Container, was im Wesentlichen die Demo-App auf ein Desktop-Layout beschränkt. Dies liegt daran, dass Element Capture und Region Capture nur von Desktop-Browsern unterstützt werden und Inhalte außerhalb des Bildschirms nicht erfasst werden.

```css
#main-app {
  display: flex;
  gap: 5%;
  min-width: 980px;
}
```

Wir geben auch dem `<video>`-Element und dem `demo` `<div>` einen {{cssxref("flex")}}-Wert von `1`, sodass sie die gleiche Menge an horizontalem Platz einnehmen.

```css
video,
#demo {
  flex: 1;
}
```

Schließlich geben wir dem `<video>`-Element eine {{cssxref("max-width")}} von `50%` und ein festes {{cssxref("aspect-ratio")}} von `4/3`. Dies dient dazu, das Video in einer konsistenten Größe zu halten und zu vermeiden, dass es zu viel Layout-Umwälzung gibt, wenn die Bildschirmübertragung beginnt. Wenn wir das nicht tun würden, würde das `<video>`-Element auf die gleiche Breite wie der gesamte erfasste Bereich (Fenster oder Bildschirm) anwachsen, was das Layout beeinflussen würde. Es ist schließlich ein [ersetzbares Element](/de/docs/Web/CSS/Replaced_element), sodass seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} von der seines Inhalts abhängt.

```css
video {
  max-width: 50%;
  aspect-ratio: 4/3;
}
```

Layoutverschiebungen können auch Probleme beim Einsatz der Region und Element Capture APIs verursachen, daher ist dieser Code in allen drei Demos enthalten.

### JavaScript

Das JavaScript für dieses Beispiel ist aus dem [Streaming-Bildschirmaufnahme](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture#streaming_screen_capture)-Beispiel in unserem "Using the Screen Capture API" Leitfaden abgeleitet. Wir werden die vollständige Code-Erklärung hier nicht wiederholen; wir erklären nur den relevantesten Erfassungscode.

Im Optionsobjekt, das bei der Ausführung von `getDisplayMedia()` übergeben wird, setzen wir [`preferCurrentTab: true`](/de/docs/Web/API/MediaDevices/getDisplayMedia#prefercurrenttab). Dieser Hinweis legt nahe, dass der Browser dem Benutzer den aktuellen Tab als prominenteste Erfassungsquelle im Dialogfeld anbieten sollte, das ihn fragt, was er teilen möchte. Chrome bietet ihnen beispielsweise diese Option nur, wenn `preferCurrentTab: true` gesetzt ist.

```js
const displayMediaOptions = {
  video: {
    displaySurface: "window",
  },
  preferCurrentTab: true,
};
```

Diese Option ist sehr nützlich, wenn Sie eine App mit einer integrierten "Bildschirmfreigabe"-Option entwickeln — Sie möchten nicht zulassen, dass Benutzer einen anderen Tab oder ein anderes Fenster freigeben.

Wenn der "Start Capture"-Button gedrückt wird, wird die Funktion `startCapture()` ausgeführt, die [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) aufruft. Dies führt dazu, dass der Browser den Benutzer auffordert, eine Oberfläche auszuwählen, die geteilt werden soll (Fenster, Tab usw.). Sobald eine Auswahl getroffen wurde, wird der resultierende [`MediaStream`](/de/docs/Web/API/MediaStream) auf den Wert der [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des `<video>`-Elements gesetzt, um ihn zu übertragen:

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

Führen Sie die obige Demo in einem [unterstützenden Browser](/de/docs/Web/API/Screen_Capture_API#browser_compatibility) aus, klicken Sie auf "Start Capture", und wählen Sie denselben Tab aus, in dem die Demo ausgeführt wird. Sie werden den "Spiegeleffekt" sehen, wie oben erwähnt:

![Ein Browserfenster, das eine Videoerfassung dieses Browserfensters enthält, was bedeutet, dass es unendlich viele Erfassungen innerhalb von Erfassungen zeigt, die immer kleiner werden](hall-of-mirrors.png)

Das ist offensichtlich nicht ideal und würde in jeder Art von Konferenzanwendung mit einer integrierten "Bildschirmfreigabe"-Option Probleme verursachen.

## Die Element Capture API

Die Element Capture API beschränkt den erfassten Bereich auf einen angegebenen gerenderten DOM-Baum (ein ausgewähltes Element und seine Nachkommen). In diesem Abschnitt werden wir eine zweite Demo erkunden, die identisch mit der oben gezeigten ist, außer dass sie Element Capture zusätzlich zur grundlegenden Screen Capture nutzt. Sehen Sie sich diese Demo live an bei [Element Capture API Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/element-capture/) (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/element-capture)).

Das HTML ist mit dem vorherigen Beispiel identisch und das CSS ist _fast_ identisch. Wir erklären jetzt die Unterschiede im JavaScript und gehen dann später im Abschnitt [Probleme mit der Element Capture API](#issues-with-the-element-capture-api) auf die CSS-Unterschiede ein.

Um die Element Capture API zu nutzen, erfassen wir zusätzlich eine Referenz auf ein DOM-Element, das wir später als **Einschränkungsziel** verwenden werden – der Bildschirmbereich, der im Stream angezeigt wird, wird auf dieses gerenderte Element und seine Nachkommen beschränkt:

```js
const demoElem = document.querySelector("#demo");
```

Die anderen Code-Unterschiede liegen alle in der modifizierten `startCapture()` Funktion:

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

1. Zuerst erfassen wir wie zuvor den Mediastream mittels `mediaDevices.getDisplayMedia()`.
2. Anschließend isolieren wir die Video-Spur aus dem Stream mittels [`MediaStream.getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks).
3. Wir erstellen das notwendige `restrictionTarget`-Objekt, um die Einschränkung auf die Video-Spur anzuwenden, indem wir [`RestrictionTarget.fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static) ausführen und die zuvor erfasste DOM-Element-Referenz übergeben.
4. Wir wenden das Einschränkungsziel auf die Spur an, indem wir [`BrowserCaptureMediaStreamTrack.restrictTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/restrictTo) darauf aufrufen und das `restrictionTarget`-Objekt übergeben.
5. Sobald alles erledigt ist, setzen wir den `srcObject`-Eigenschaftswert des `<video>`-Elements auf den Stream, um ihn zu übertragen.

Versuchen Sie jetzt, das [Element Capture API Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/element-capture/) in einem [unterstützenden Browser](/de/docs/Web/API/RestrictionTarget#browser_compatibility) auszuführen. Sie sollten sehen, dass nur der Demo-Platzhalter im Stream enthalten ist und dadurch das Problem des "Spiegeleffekts" behoben wird.

> [!NOTE]
> Sie können die Einschränkung aufheben, indem Sie `restrictTo()` erneut auf derselben Spur aufrufen und `null` als Argument übergeben:
>
> ```js
> await track.restrictTo(null);
> ```

### Einschränkungen bei der Element Capture API

Um sicherzustellen, dass das Element **förderfähig für die Einschränkung** ist, also dass es erfasst wird, wenn es als Einschränkungsziel-Element ausgewählt wird, muss es einen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) bilden und im 3D-Raum abgeflacht sein.

Um diese Einschränkungen zu bearbeiten, haben wir die folgende zusätzliche CSS-Regel festgelegt, die das Demo-Container-Element anvisiert:

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

Die {{cssxref("isolation")}}-Eigenschaft ist auf `isolate` gesetzt, um das Element einen Stacking Context bilden zu lassen, und die {{cssxref("transform-style")}}-Eigenschaft ist auf `flat` gesetzt, um es abzuflachen. Da das Element aufgrund der festgelegten Isolierung nicht länger die standardmäßig weiße Farbe der Seite erbt, setzen wir {{cssxref("background-color")}} auf `weiß`, um zu vermeiden, dass die Erfassung transparent wird.

Für die vollständige Liste der Einschränkungen bei den Elementen, die als Einschränkungsziele verwendet werden können, siehe die Referenzseite [`RestrictionTarget.fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static#element).

## Die Region Capture API

Die Region Capture API hat eine sehr ähnliche Wirkung wie die Element Capture API, außer dass sie anstelle der Beschränkung des erfassten Bereichs auf einen bestimmten gerenderten DOM-Baum den Stream auf den Bereich des aktuellen Browser-Tabs zuschneidet, der durch das Begrenzungsrechteck des Ziel-Elements definiert ist. Schauen wir uns eine Demo an und erkunden dann die Unterschiede zwischen den beiden im Detail.

In diesem Abschnitt betrachten wir eine dritte Demo, die identisch mit den anderen ist, außer dass sie Region Capture zusätzlich zur grundlegenden Screen Capture nutzt. Sehen Sie sich diese Demo live an bei [Region Capture API Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/region-capture/) (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/region-capture)).

Das HTML und CSS ist mit den vorherigen Beispielen identisch. Das JavaScript ist fast identisch mit dem Element Capture JavaScript, mit einigen bemerkenswerten Unterschieden, die wir jetzt erklären werden.

Um die Region Capture API zu nutzen, erfassen wir zuerst eine Referenz auf ein DOM-Element, das wir später als **Zuschnittsziel** verwenden werden – die Region, die im Stream angezeigt wird, wird auf den Bereich zugeschnitten, in dem das Element gerendert wird:

```js
const demoElem = document.querySelector("#demo");
```

Nun betrachten wir die `startCapture()` Funktion der Region Capture Demo:

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

1. Wie zuvor beginnen wir mit der Erfassung des Mediastreams mittels `mediaDevices.getDisplayMedia()`, dann isolieren wir die Video-Spur aus dem Stream mittels [`MediaStream.getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks).
2. Wir erstellen das notwendige `cropTarget`-Objekt, um den Zuschnitt auf die Video-Spur anzuwenden, indem wir [`fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static) ausführen und die zuvor erfasste DOM-Element-Referenz übergeben.
3. Wir wenden das Zuschnittsziel auf die Spur an, indem wir [`BrowserCaptureMediaStreamTrack.cropTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/cropTo) darauf aufrufen und das `cropTarget`-Objekt übergeben.
4. Sobald alles erledigt ist, setzen wir den `srcObject`-Eigenschaftswert des `<video>`-Elements auf den Stream, um ihn zu übertragen.

Versuchen Sie jetzt, das [Region Capture API Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/region-capture/) in einem [unterstützenden Browser](/de/docs/Web/API/CropTarget#browser_compatibility) auszuführen. Sie sollten sehen, dass nur der Demo-Platzhalter im Stream enthalten ist, was auch das Problem des "Spiegeleffekts" behebt.

> [!NOTE]
> Sie können den Zuschnitt aufheben, indem Sie `cropTo()` erneut auf derselben Spur aufrufen und `null` als Argument übergeben:
>
> ```js
> await track.cropTo(null);
> ```

### Einschränkungen bei der Region Capture API

Region Capture hat nicht die gleichen Einschränkungen wie Element Capture – es schneidet den Stream auf eine bestimmte Größe zu, anstatt einen bestimmten gerenderten DOM-Baum zu übertragen, daher erfordert es diese Regel nicht:

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

Es gibt jedoch immer noch Einschränkungen bei den Elementen, die als Zuschnittsziele verwendet werden können. Für die vollständige Liste siehe die Referenzseite [`CropTarget.fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static#element).

## Siehe auch

- [Ein Video-Stream von einem beliebigen Element erfassen](https://developer.chrome.com/docs/web-platform/element-capture) auf developer.chrome.com (2025)
- [Besseres Tab-Sharing mit Region Capture](https://developer.chrome.com/docs/web-platform/region-capture) auf developer.chrome.com (2023)
- [Element Capture Demo](https://element-capture-demo.glitch.me/)
- [Region Capture Demo](https://region-capture-demo.glitch.me/)
