---
title: Verwendung der Element Capture und Region Capture APIs
slug: Web/API/Screen_Capture_API/Element_Region_Capture
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{DefaultAPISidebar("Screen Capture API")}}

Dieser Leitfaden bietet einen Überblick über die typische Verwendung der Element Capture und Region Capture APIs, zeigt, wie man sie verwendet und welches Problem sie lösen.

## Hintergrund

Standardmäßig erfasst die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) einen gesamten Bildschirm, ein Fenster oder einen Tab. Die Element Capture und Region Capture APIs ermöglichen es Ihnen jeweils, den erfassten Stream auf einen bestimmten gerenderten DOM-Baum oder auf den Teil des Bildschirms zu beschränken, der durch den Begrenzungsrahmen eines bestimmten DOM-Baums definiert wird.

Dies ist nützlich, wenn Sie nur einen begrenzten Bereich teilen möchten, um unnötige Bandbreite oder Bildschirmfläche einzusparen, die erforderlich ist, um die Erfassung darzustellen, oder aus Datenschutzgründen (Sie möchten möglicherweise nicht Ihre Nachrichtennotifikationen oder Hintergrund-Einstellungen zeigen, die erforderlich sind, um das freigegebene Demo auszuführen).

Darüber hinaus können unerwünschte Effekte wie "unendliche Wurmloch-" oder "Spiegelraum-" Effekte auftreten, wenn Sie den Webcam-Output erfassen. Die Element Capture und Region Capture APIs können helfen, solche Probleme zu vermeiden.

## Wann welche API verwenden

Die Element Capture API erfasst das Element selbst (und dessen Nachkommen), während die Region Capture API den Bereich des Browser-Tabs erfasst, der durch den Begrenzungsrahmen des Ziel-Elements definiert wird. Bei der Element Capture API wird immer nur das erfasste Element angezeigt, auch wenn andere DOM-Inhalte es überlappen, während bei der Region Capture API überlappende Inhalte über den Inhalt angezeigt werden können, den Sie teilen wollten.

Es gibt berechtigte Anwendungsfälle für beide:

- Wenn Sie die Erfassung auf einen bestimmten DOM-Baum beschränken müssen und alles außerhalb dessen ausschließen möchten, dann ist die Element Capture API die bessere Wahl. Beispielsweise möchten Sie nicht, dass private Inhalte wie eine Reihe von Nachrichtennotifikationen oder eine Sprecher-Notizen-Oberfläche in der Erfassung angezeigt werden.
- Wenn Sie jedoch tatsächlich einen bestimmten Bereich des Browser-Tabs erfassen möchten, unabhängig davon, was darin angezeigt wird, wird die Region Capture API Ihnen gut dienen.

Im nächsten Abschnitt beginnen wir mit einem einfachen Screen Capture API-Demo, um die Probleme zu veranschaulichen, die die Element Capture und Region Capture APIs lösen sollen.

## Screen Capture API-Demo

Dieses Demo verwendet die Screen Capture API, um ein Fenster, einen Bildschirm oder einen Tab zu erfassen und den Stream über ein {{htmlelement("video")}}-Element auf derselben Seite zu übertragen. Sie können es live anzeigen unter [Screen Capture API-Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/basic-screen-capture/) (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/basic-screen-capture)).

### HTML

Das HTML beginnt mit einer Hauptüberschrift und Einführungstext und enthält dann zwei {{htmlelement("button")}}-Elemente, um die Erfassung zu starten und zu stoppen:

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

Dann fügen wir den Haupt-App-Container ein, der das `<video>`-Element zum Übertragen der Erfassung und einen Demo-Platzhalter {{htmlelement("div")}} enthält:

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

Das CSS für dieses Demo ist größtenteils unauffällig, aber die folgenden Regeln verdienen eine Erklärung. Der Rest des CSS wurde aus Gründen der Kürze ausgeblendet.

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

Wir setzen einen {{cssxref("display")}}-Wert von `flex` auf die `main-app`-`<div>`, um das Video und den Demo-Platzhalter nebeneinander in zwei Spalten mit einem {{cssxref("gap")}} von `5%` dazwischen anzuordnen. Wir setzen auch eine {{cssxref("min-width")}} von `980px` auf den Container, was die Demo-App im Wesentlichen auf ein Desktop-Layout beschränkt. Dies liegt daran, dass Element Capture und Region Capture nur bei Desktop-Browsern unterstützt werden und nicht angezeigte Inhalte nicht erfasst werden.

```css
#main-app {
  display: flex;
  gap: 5%;
  min-width: 980px;
}
```

Wir geben auch dem `<video>`-Element und dem `demo`-`<div>` einen {{cssxref("flex")}}-Wert von `1`, sodass sie den gleichen horizontalen Raum einnehmen.

```css
video,
#demo {
  flex: 1;
}
```

Schließlich geben wir dem `<video>`-Element eine {{cssxref("max-width")}} von `50%` und ein festes {{cssxref("aspect-ratio")}} von `4/3`. Dies dient dazu, das Video in einer konsistenten Größe zu halten und zu verhindern, dass das Layout zu stark verändert wird, wenn die Bildschirmübertragung beginnt. Wenn wir das nicht tun würden, würde das `<video>`-Element auf die gleiche Breite wie der gesamte erfasste Bereich (Fenster oder Bildschirm) wachsen, was das Layout beeinflussen würde. Es ist schließlich ein {{Glossary("replaced_elements", "ersetzbares Element")}}, daher hängt seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} von der seines Inhalts ab.

```css
video {
  max-width: 50%;
  aspect-ratio: 4/3;
}
```

Layoutverschiebungen können auch Probleme bei der Verwendung der Region und Element Capture APIs verursachen, daher ist dieser Code in allen drei Demos enthalten.

### JavaScript

Das JavaScript für dieses Beispiel ist aus dem [Streaming Screen Capture](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture#streaming_screen_capture) Beispiel in unserem "Verwenden der Screen Capture API" Leitfaden adaptiert. Wir werden hier nicht die vollständige Code-Erklärung wiederholen, sondern nur den relevantesten Erfassungscode erklären.

Im Optionsobjekt, das an `getDisplayMedia()` übergeben wird, wenn wir es aufrufen, setzen wir [`preferCurrentTab: true`](/de/docs/Web/API/MediaDevices/getDisplayMedia#prefercurrenttab). Dieser Hinweis deutet an, dass der Browser den aktuellen Tab des Benutzers als prominenteste Erfassungsquelle im Dialogfeld anbieten sollte, in dem der Benutzer gefragt wird, was geteilt werden soll. Chrome beispielsweise bietet diese Option nur an, wenn `preferCurrentTab: true` gesetzt ist.

```js
const displayMediaOptions = {
  video: {
    displaySurface: "window",
  },
  preferCurrentTab: true,
};
```

Diese Option ist sehr nützlich, wenn Sie eine App mit einer integrierten "Bildschirm teilen"-Option entwickeln — Sie möchten nicht, dass Benutzer einen anderen Tab oder ein anderes Fenster teilen können.

Wenn der "Start Capture"-Button gedrückt wird, läuft die `startCapture()`-Funktion, die [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) aufruft. Dies führt dazu, dass der Browser den Benutzer auffordert, eine Oberfläche zur Freigabe auszuwählen (Fenster, Tab usw.). Sobald eine Wahl getroffen wurde, wird der resultierende [`MediaStream`](/de/docs/Web/API/MediaStream) als Wert der [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des `<video>`-Elements gesetzt, um es zu übertragen:

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

## Probleme der Screen Capture API

Führen Sie das obige Demo in einem [unterstützenden Browser](/de/docs/Web/API/Screen_Capture_API#browser_compatibility) aus, klicken Sie auf "Start Capture" und wählen Sie denselben Tab aus, in dem das Demo läuft. Sie werden den "Spiegelraum-Effekt" sehen, wie zuvor erwähnt:

![Ein Browserfenster, das eine Videoaufnahme desselben Browserfensters enthält, was bedeutet, dass es unendliche Aufnahmen in Aufnahmen zeigt, die immer kleiner werden](hall-of-mirrors.png)

Das ist offensichtlich nicht ideal und würde in jeder Art von Konferenzanwendung mit einer integrierten "Bildschirm teilen"-Option Probleme verursachen.

## Die Element Capture API

Die Element Capture API beschränkt den erfassten Bereich auf einen angegebenen gerenderten DOM-Baum (ein ausgewähltes Element und seine Nachkommen). In diesem Abschnitt werden wir ein zweites Demo erkunden, das mit dem zuvor vorgestellten identisch ist, außer dass es Element Capture zusätzlich zur grundlegenden Screen Capture verwendet. Siehe dieses Demo live bei [Element Capture API-Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/element-capture/) (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/element-capture)).

Das HTML ist mit dem vorherigen Beispiel identisch, und das CSS ist _fast_ identisch. Wir erklären nun die Unterschiede im JavaScript und betrachten später die CSS-Unterschiede im Abschnitt [Einschränkungen der Element Capture API](#einschränkungen_der_element_capture_api).

Um die Element Capture API zu verwenden, holen wir zusätzlich eine Referenz zu einem DOM-Element, das wir später als **Einschränkungsziel** verwenden werden — der im Stream angezeigte Bildschirmbereich wird nur auf dieses gerenderte Element und dessen Nachkommen beschränkt:

```js
const demoElem = document.querySelector("#demo");
```

Die anderen Codeunterschiede liegen alle in der modifizierten `startCapture()`-Funktion:

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

1. Hier beginnen wir wie zuvor damit, den Medienstream mit `mediaDevices.getDisplayMedia()` zu erfassen.
2. Dann isolieren wir die Videospur aus dem Stream mit [`MediaStream.getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks).
3. Wir erstellen das notwendige `restrictionTarget`-Objekt, um die Einschränkung auf die Videospur anzuwenden, indem wir [`RestrictionTarget.fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static) ausführen und die zuvor gegriffene DOM-Elementreferenz übergeben.
4. Wir wenden das Einschränkungsziel auf die Spur an, indem wir [`BrowserCaptureMediaStreamTrack.restrictTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/restrictTo) darauf aufrufen und das `restrictionTarget`-Objekt übergeben.
5. Sobald all dies erledigt ist, setzen wir den Wert der `srcObject`-Eigenschaft des `<video>`-Elements auf den Stream, um dessen Übertragung zu starten.

Versuchen Sie, das [Element Capture API-Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/element-capture/) jetzt in einem [unterstützenden Browser](/de/docs/Web/API/RestrictionTarget#browser_compatibility) auszuführen. Sie sollten sehen, dass nur der Demo-Platzhalter im Stream enthalten ist, wodurch das "Spiegelraum"-Problem behoben wird.

> [!NOTE]
> Sie können die Einschränkung stoppen, indem Sie `restrictTo()` erneut auf dieselbe Spur aufrufen und ein Argument von `null` übergeben:
>
> ```js
> await track.restrictTo(null);
> ```

### Einschränkungen der Element Capture API

Um sicherzustellen, dass das Element **für die Einschränkung berechtigt** ist, das heißt, es wird erfasst, wenn es als Einschränkungsziel-Element ausgewählt wird, muss es einen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) bilden und im 3D-Raum abgeflacht sein.

Um diese Einschränkungen zu handhaben, haben wir die folgende zusätzliche CSS-Regel gesetzt, die das Demo-Container-Element anspricht:

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

Die {{cssxref("isolation")}}-Eigenschaft wird auf `isolate` gesetzt, um das Element einen Stacking-Kontext bilden zu lassen, und die {{cssxref("transform-style")}}-Eigenschaft wird auf `flat` gesetzt, um es abzuflachen. Auch aufgrund der Art der von uns festgelegten Isolation wird das Element die standardmäßige weiße Farbe der Seite nicht mehr erben. Daher setzen wir die {{cssxref("background-color")}} auf `weiß`, um zu verhindern, dass die Erfassung transparent wird.

Für die vollständige Liste der Einschränkungen auf den Elementen, die als Einschränkungsziele verwendet werden können, siehe die [`RestrictionTarget.fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static#element) Referenzseite.

## Die Region Capture API

Die Region Capture API hat einen sehr ähnlichen Effekt wie die Element Capture API, außer dass sie anstatt den erfassten Bereich auf einen bestimmten gerenderten DOM-Baum zu beschränken, den Stream auf den Bereich des aktuellen Browser-Tabs zuschneidet, der durch den Begrenzungsrahmen des Ziel-Elements definiert wird. Lassen Sie uns ein Demo betrachten und die Unterschiede zwischen den beiden später genauer erkunden.

In diesem Abschnitt werden wir ein drittes Demo erkunden, das mit den anderen identisch ist, außer dass es Region Capture zusätzlich zur grundlegenden Screen Capture verwendet. Siehe dieses Demo live bei [Region Capture API-Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/region-capture/) (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/region-capture)).

Das HTML und CSS sind mit den vorherigen Beispielen identisch. Das JavaScript ist fast das gleiche wie das Element Capture JavaScript, mit ein paar bemerkenswerten Unterschieden, die wir nun erklären werden.

Um die Region Capture API zu verwenden, holen wir zunächst eine Referenz zu einem DOM-Element, das wir später als **Zuschnittsziel** verwenden werden — der im Stream angezeigte Bereich wird nur auf den Bereich zugeschnitten, in dem dieses Element gerendert wird:

```js
const demoElem = document.querySelector("#demo");
```

Nun lassen Sie uns die `startCapture()`-Funktion des Region Capture-Demos betrachten:

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

1. Wie zuvor beginnen wir damit, den Medienstream mit `mediaDevices.getDisplayMedia()` zu erfassen, dann isolieren wir die Videospur aus dem Stream mit [`MediaStream.getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks).
2. Wir erstellen das notwendige `cropTarget`-Objekt, um den Zuschnitt auf die Videospur anzuwenden, indem wir [`fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static) ausführen und die zuvor gegriffene DOM-Elementreferenz übergeben.
3. Wir wenden das Zuschnittsziel auf die Spur an, indem wir [`BrowserCaptureMediaStreamTrack.cropTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/cropTo) darauf aufrufen und das `cropTarget`-Objekt übergeben.
4. Sobald all dies erledigt ist, setzen wir den Wert der `srcObject`-Eigenschaft des `<video>`-Elements auf den Stream, um dessen Übertragung zu starten.

Versuchen Sie, das [Region Capture API-Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/region-capture/) jetzt in einem [unterstützenden Browser](/de/docs/Web/API/CropTarget#browser_compatibility) auszuführen. Sie sollten sehen, dass nur der Demo-Platzhalter im Stream enthalten ist, was ebenfalls das "Spiegelraum"-Problem behebt.

> [!NOTE]
> Sie können den Zuschnitt stoppen, indem Sie `cropTo()` erneut auf dieselbe Spur aufrufen und ein Argument von `null` übergeben:
>
> ```js
> await track.cropTo(null);
> ```

### Einschränkungen der Region Capture API

Die Region Capture hat nicht die gleiche Ebene von Einschränkungen wie die Element Capture — sie schneidet den Stream auf eine bestimmte Größe zu, anstatt einen bestimmten gerenderten DOM-Baum zu übertragen, daher benötigt sie diese Regel nicht:

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

Es gibt jedoch immer noch Einschränkungen für die Elemente, die als Zuschnittsziele verwendet werden können. Für die vollständige Liste siehe die [`CropTarget.fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static#element) Referenzseite.

## Siehe auch

- [Capture a video stream from any element](https://developer.chrome.com/docs/web-platform/element-capture) auf developer.chrome.com (2025)
- [Better tab sharing with Region Capture](https://developer.chrome.com/docs/web-platform/region-capture) auf developer.chrome.com (2023)
