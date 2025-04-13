---
title: Using the Element Capture and Region Capture APIs
slug: Web/API/Screen_Capture_API/Element_Region_Capture
l10n:
  sourceCommit: 5c5ee35d66ac24bc6513c14f120750c74d779d20
---

{{DefaultAPISidebar("Screen Capture API")}}

Dieser Leitfaden bietet eine Schritt-für-Schritt-Anleitung zur typischen Verwendung der Element Capture- und Region Capture-APIs. Er zeigt, wie diese verwendet werden und welches Problem sie lösen.

## Hintergrund

Standardmäßig erfasst die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) einen gesamten Bildschirm, ein Fenster oder einen Tab. Die Element Capture- und Region Capture-APIs ermöglichen es Ihnen, den erfassten Stream jeweils auf einen spezifischen gerenderten DOM-Baum oder auf den Teil des Bildschirms zu beschränken, der durch die Begrenzungsbox eines spezifischen DOM-Baums definiert ist.

Dies ist nützlich, wenn Sie nur einen begrenzten Bereich teilen möchten, um unnötige Bandbreite oder Bildschirmplatz zu reduzieren, der benötigt wird, um die Erfassung anzuzeigen, oder aus Datenschutzgründen (Sie möchten anderen Teilnehmern möglicherweise nicht Ihre Nachrichtennachrichten oder Hintergrund-Einstellungen, die zum Ausführen der von Ihnen geteilten Demo erforderlich sind, zeigen).

Zusätzlich können Sie, wenn Sie die Ausgabe Ihrer Webcam erfassen, einen dieser unerwünschten „unendlichen Wurmloch“- oder „Spiegelsaal“-Effekte erhalten. Die Element Capture- und Region Capture-APIs können Ihnen auch dabei helfen, solche Probleme zu vermeiden.

## Wann welche API verwenden

Die Element Capture API erfasst das Element selbst (und seine Nachkommen), während die Region Capture API den Bereich des Browser-Tabs erfasst, der durch die Begrenzungsbox des Ziel-Elements definiert ist. Element Capture zeigt immer nur das erfasste Element, auch wenn andere DOM-Inhalte darüber liegen, während bei Region Capture sich überlappende Inhalte über dem beabsichtigten Inhalt angezeigt werden können.

Für beide gibt es legitime Anwendungsfälle:

- Wenn Sie die Erfassung auf einen DOM-Baum beschränken und alles außerhalb davon ausschließen müssen, ist die Element Capture API die bessere Wahl. Zum Beispiel möchten Sie möglicherweise nicht, dass private Inhalte wie eine Reihe von Nachrichtennachrichten oder eine Sprecher-Notizen-UI in der Erfassung erscheinen.
- Wenn Sie jedoch wirklich einen Bereich des Browser-Tabs erfassen möchten, unabhängig davon, was darin angezeigt wird, wird Ihnen die Region Capture API gut dienen. Die [Region Capture Demo](https://region-capture-demo.glitch.me/) (siehe den [Quellcode](https://glitch.com/edit/#!/region-capture-demo)) zeigt eine nützliche Möglichkeit — das Hereinzoomen auf einen bestimmten Bereich des Tabs, während Sie mehreren Nutzern einen interaktiven Rundgang irgendeiner Art zeigen.

Im nächsten Abschnitt beginnen wir mit einer grundlegenden Screen Capture API-Demo, um die Probleme zu veranschaulichen, die die Element Capture- und Region Capture-APIs lösen sollten.

## Screen Capture API-Demo

Diese Demo verwendet die Screen Capture API, um ein Fenster, einen Bildschirm oder einen Tab zu erfassen und den Stream über ein {{htmlelement("video")}}-Element auf derselben Seite zu übertragen. Sie können es live bei [Screen Capture API example](https://mdn.github.io/dom-examples/screen-capture-api/basic-screen-capture/) (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/basic-screen-capture)) anzeigen.

### HTML

Das HTML beginnt mit einer Hauptüberschrift und einem Einleitungstext und enthält dann zwei {{htmlelement("button")}}-Elemente, um die Erfassung zu starten und zu stoppen:

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

Als nächstes fügen wir den Haupt-App-Container ein, der das `<video>`-Element zum Übertragen der Erfassung und einen Demo-Platzhalter-{{htmlelement("div")}} enthält:

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

Das CSS für diese Demo ist größtenteils unspektakulär, aber die folgenden Regeln sind erklärenswert. Wir haben den Rest des CSS der Kürze halber ausgeblendet.

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

Wir setzen einen {{cssxref("display")}}-Wert von `flex` auf das `main-app`-`<div>`, um das Video und den Demo-Platzhalter nebeneinander in zwei Spalten zu platzieren, und setzen einen {{cssxref("gap")}} von `5%` dazwischen. Wir setzen auch eine {{cssxref("min-width")}} von `980px` auf den Container, um die Demo-App im Wesentlichen auf ein Desktop-Layout zu beschränken. Dies liegt daran, dass die Element Capture- und Region Capture-APIs nur in Desktop-Browsern unterstützt werden und Off-Screen-Inhalte nicht erfasst werden.

```css
#main-app {
  display: flex;
  gap: 5%;
  min-width: 980px;
}
```

Wir geben dem `<video>`-Element und dem `demo`-`<div>` auch einen {{cssxref("flex")}}-Wert von `1`, sodass sie den gleichen horizontalen Raum einnehmen.

```css
video,
#demo {
  flex: 1;
}
```

Schließlich geben wir dem `<video>`-Element eine {{cssxref("max-width")}} von `50%` und ein festes {{cssxref("aspect-ratio")}} von `4/3`, um das Video in einer konsistenten Größe zu halten und zu vermeiden, dass es zu starken Layout-Verschiebungen kommt, wenn die Bildschirmaufnahme übertragen wird. Wenn wir dies nicht täten, würde das `<video>`-Element so breit wie der gesamte erfasste Bereich (Fenster oder Bildschirm) werden, was das Layout beeinflussen würde. Schließlich ist es ein {{Glossary("replaced_elements", "ersetztes Element")}}, sodass seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} von der seines Inhalts abhängt.

```css
video {
  max-width: 50%;
  aspect-ratio: 4/3;
}
```

Layout-Verschiebungen können auch bei der Verwendung der Region- und Element Capture-APIs Probleme verursachen, daher ist dieser Code in allen drei Demos enthalten.

### JavaScript

Das JavaScript für dieses Beispiel basiert auf dem [Streaming screen capture](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture#streaming_screen_capture)-Beispiel in unserem "Anleitung zur Verwendung der Screen Capture API". Wir werden die vollständige Code-Erklärung hier nicht wiederholen; wir erklären nur den relevantesten Erfassungscode.

Im Optionsobjekt, das an `getDisplayMedia()` übergeben wird, wenn wir es aufrufen, setzen wir [`preferCurrentTab: true`](/de/docs/Web/API/MediaDevices/getDisplayMedia#prefercurrenttab). Dieser Hinweis schlägt vor, dass der Browser den aktuellen Tab des Benutzers als prominenteste Erfassungsquelle im Dialog anzeigen sollte, der sie fragt, was sie teilen möchten. Chrome gibt ihnen beispielsweise nur diese Option, wenn `preferCurrentTab: true` gesetzt ist.

```js
const displayMediaOptions = {
  video: {
    displaySurface: "window",
  },
  preferCurrentTab: true,
};
```

Diese Option ist sehr nützlich, wenn Sie eine App mit einer integrierten "Bildschirm teilen"-Option erstellen — Sie möchten nicht, dass Benutzer einen anderen Tab oder ein anderes Fenster teilen dürfen.

Wenn die Schaltfläche "Start Capture" gedrückt wird, läuft die `startCapture()`-Funktion, die [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) aufruft. Dadurch wird der Browser veranlasst, den Benutzer aufzufordern, eine Oberfläche zum Teilen auszuwählen (Fenster, Tab usw.). Sobald eine Auswahl getroffen wurde, wird der resultierende [`MediaStream`](/de/docs/Web/API/MediaStream) dem Wert der [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des `<video>`-Elements zugewiesen, um ihn zu übertragen:

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

Führen Sie die obige Demo in einem [unterstützenden Browser](/de/docs/Web/API/Screen_Capture_API#browser_compatibility) aus, klicken Sie auf "Start Capture" und wählen Sie denselben Tab aus, in dem die Demo ausgeführt wird. Sie werden den oben genannten „Spiegelsaal-Effekt“ sehen:

![Ein Browserfenster, das eine Videoaufnahme desselben Browserfensters enthält, was bedeutet, dass es unendliche Erfassungen in Erfassungen zeigt, die immer kleiner werden](hall-of-mirrors.png)

Dies ist offensichtlich nicht ideal und würde bei jeder Art von Konferenzanwendung mit einer integrierten "Bildschirm teilen"-Option Probleme verursachen.

## Die Element Capture API

Die Element Capture API beschränkt den erfassten Bereich auf einen angegebenen gerenderten DOM-Baum (ein ausgewähltes Element und seine Nachkommen). In diesem Abschnitt werden wir eine zweite Demo untersuchen, die mit der zuvor präsentierten identisch ist, außer dass sie die Element Capture zusätzlich zur grundlegenden Screen Capture verwendet. Sehen Sie sich diese Demo live bei [Element Capture API-Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/element-capture/) an (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/element-capture)).

Das HTML ist mit dem vorherigen Beispiel identisch, und das CSS ist _fast_ identisch. Wir erklären jetzt die Unterschiede im JavaScript und betrachten später die Unterschiede im CSS im Abschnitt [Einschränkungen für die Element Capture API](#einschränkungen_der_element_capture_api).

Um die Element Capture API zu verwenden, holen wir zusätzlich eine Referenz zu einem DOM-Element, das wir später als **Einschränkungsziel** verwenden — der im Stream angezeigte Bildschirmbereich wird auf genau dieses gerenderte Element und seine Nachkommen beschränkt:

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

1. Hier beginnen wir damit, den Medienstream wie zuvor mit `mediaDevices.getDisplayMedia()` zu holen.
2. Wir isolieren dann die Video-Spur aus dem Stream mit [`MediaStream.getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks).
3. Wir erstellen das notwendige `restrictionTarget`-Objekt, um die Einschränkung auf die Video-Spur anzuwenden, indem wir [`RestrictionTarget.fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static) ausführen und ihm die zuvor erhaltene DOM-Element-Referenz übergeben.
4. Wir wenden das Einschränkungsziel auf die Spur an, indem wir [`BrowserCaptureMediaStreamTrack.restrictTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/restrictTo) darauf aufrufen und ihm das `restrictionTarget`-Objekt übergeben.
5. Sobald all dies erledigt ist, setzen wir dann den `srcObject`-Eigenschaftswert des `<video>`-Elements auf den Stream, um ihn zu übertragen.

Versuchen Sie nun, das [Element Capture API-Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/element-capture/) in einem [unterstützenden Browser](/de/docs/Web/API/RestrictionTarget#browser_compatibility) auszuführen. Sie sollten sehen, dass nur der Demo-Platzhalter im Stream enthalten ist und das „Spiegelsaal“-Problem behoben wird.

> [!NOTE]
> Sie können die Einschränkung aufheben, indem Sie `restrictTo()` erneut auf dieselbe Spur aufrufen und ihm ein Argument von `null` übergeben:
>
> ```js
> await track.restrictTo(null);
> ```

### Einschränkungen der Element Capture API

Um sicherzustellen, dass das Element **für Einschränkungen geeignet** ist, das heißt, es wird erfasst, wenn es als Einschränkungsziel-Element ausgewählt wird, muss es einen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) bilden und im 3D-Raum abgeflacht sein.

Um mit diesen Einschränkungen umzugehen, haben wir die folgende zusätzliche CSS-Regel gesetzt, die auf das Demo-Container-Element abzielt:

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

Die {{cssxref("isolation")}}-Eigenschaft ist auf `isolate` gesetzt, um das Element einen Stacking-Kontext bilden zu lassen, und die {{cssxref("transform-style")}}-Eigenschaft ist auf `flat` gesetzt, um es abzuflachen. Aufgrund der Art der von uns gesetzten Isolierung wird das Element zudem nicht mehr die Standardfarbe Weiß der Seite erben. Daher setzen wir {{cssxref("background-color")}} auf Weiß, um zu verhindern, dass die Erfassung transparent ist.

Für die vollständige Liste der Einschränkungen auf den Elementen, die als Einschränkungsziele verwendet werden können, siehe die [`RestrictionTarget.fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static#element)-Referenzseite.

## Die Region Capture API

Die Region Capture API hat eine sehr ähnliche Wirkung wie die Element Capture API, außer dass sie statt den erfassten Bereich auf einen spezifischen gerenderten DOM-Baum zu beschränken, den Stream auf den Bereich des aktuellen Browsertabs beschneidet, der durch die Begrenzungsbox des Ziel-Elements definiert ist. Schauen wir uns eine Demo an und erkunden später die Unterschiede zwischen den beiden genauer.

In diesem Abschnitt werden wir eine dritte Demo untersuchen, die mit den anderen identisch ist, außer dass sie Region Capture zusätzlich zur grundlegenden Screen Capture verwendet. Sehen Sie sich diese Demo live bei [Region Capture API example](https://mdn.github.io/dom-examples/screen-capture-api/region-capture/) an (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/region-capture)).

Das HTML und CSS sind mit den vorherigen Beispielen identisch. Das JavaScript ist fast dasselbe wie das Element Capture-JavaScript, mit ein paar bemerkenswerten Unterschieden, die wir jetzt erklären.

Um die Region Capture API zu verwenden, holen wir zunächst eine Referenz zu einem DOM-Element, das wir später als **Schnittziel** verwenden — die im Stream angezeigte Region wird auf nur den Bereich beschnitten, in dem dieses Element gerendert wird:

```js
const demoElem = document.querySelector("#demo");
```

Sehen wir uns nun die `startCapture()`-Funktion der Region Capture-Demo an:

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

1. Wie zuvor beginnen wir mit dem Holen des Medienstreams mit `mediaDevices.getDisplayMedia()`, dann isolieren wir die Video-Spur aus dem Stream mit [`MediaStream.getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks).
2. Wir erstellen das notwendige `cropTarget`-Objekt, um den Zuschnitt auf die Video-Spur anzuwenden, indem wir [`fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static) ausführen und ihm die zuvor erhaltene DOM-Element-Referenz übergeben.
3. Wir wenden das Schnittziel auf die Spur an, indem wir [`BrowserCaptureMediaStreamTrack.cropTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/cropTo) darauf aufrufen und ihm das `cropTarget`-Objekt übergeben.
4. Sobald all dies erledigt ist, setzen wir dann den `srcObject`-Eigenschaftswert des `<video>`-Elements auf den Stream, um ihn zu übertragen.

Versuchen Sie nun, das [Region Capture API-Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/region-capture/) in einem [unterstützenden Browser](/de/docs/Web/API/CropTarget#browser_compatibility) auszuführen. Sie sollten sehen, dass nur der Demo-Platzhalter im Stream enthalten ist, was auch das „Spiegelsaal“-Problem behebt.

> [!NOTE]
> Sie können den Zuschnitt aufheben, indem Sie `cropTo()` erneut auf dieselbe Spur aufrufen und ihm ein Argument von `null` übergeben:
>
> ```js
> await track.cropTo(null);
> ```

### Einschränkungen der Region Capture API

Region Capture hat nicht dasselbe Maß an Einschränkungen wie Element Capture — es wird der Stream auf eine bestimmte Größe zugeschnitten, anstatt einen spezifischen gerenderten DOM-Baum zu übertragen, sodass diese Regel nicht erforderlich ist:

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

Es gibt jedoch immer noch Einschränkungen für die Elemente, die als Schnittziele verwendet werden können. Für die vollständige Liste siehe die [`CropTarget.fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static#element)-Referenzseite.

## Siehe auch

- [Capture a video stream from any element](https://developer.chrome.com/docs/web-platform/element-capture) auf developer.chrome.com (2025)
- [Better tab sharing with Region Capture](https://developer.chrome.com/docs/web-platform/region-capture) auf developer.chrome.com (2023)
- [Element Capture Demo](https://element-capture-demo.glitch.me/)
- [Region Capture Demo](https://region-capture-demo.glitch.me/)
