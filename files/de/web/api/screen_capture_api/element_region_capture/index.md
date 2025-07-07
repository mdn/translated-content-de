---
title: Verwendung der Element Capture und Region Capture APIs
slug: Web/API/Screen_Capture_API/Element_Region_Capture
l10n:
  sourceCommit: 90eafc463fe122c86a64836f4f3953a0bee85be9
---

{{DefaultAPISidebar("Screen Capture API")}}

Dieser Leitfaden bietet einen Überblick über die typische Nutzung der Element Capture und Region Capture APIs. Er zeigt, wie man sie verwendet und welches Problem sie lösen.

## Hintergrund

Standardmäßig erfasst die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) einen gesamten Bildschirm, ein Fenster oder einen Tab. Die Element Capture und Region Capture APIs ermöglichen es Ihnen jedoch, den erfassten Stream auf einen bestimmten gerenderten DOM-Baum oder auf den Teil des Bildschirms zu beschränken, der durch das Begrenzungsrechteck eines bestimmten DOM-Baums definiert wird.

Dies ist nützlich, wenn Sie nur einen begrenzten Bereich teilen möchten, um unnötigen Bandbreitenverbrauch oder den erforderlichen Bildschirmplatz für die Anzeige der Erfassung zu reduzieren, oder aus Datenschutzgründen (Sie möchten möglicherweise nicht, dass andere Teilnehmer Ihre Nachrichtenbenachrichtigungen oder Hintergrundinstellungen sehen, die zum Ausführen der von Ihnen geteilten Demo erforderlich sind).

Außerdem kann es beim Erfassen Ihres Webcam-Ausgangs zu unerwünschten "unendlichen Wurmloch"- oder "Spiegelhalle"-Effekten kommen. Die Element Capture und Region Capture APIs können Ihnen helfen, diese Art von Problemen ebenfalls zu vermeiden.

## Wann sollte jede API verwendet werden

Die Element Capture API erfasst das Element selbst (und seine Nachkommen), während die Region Capture API den Bereich des Browser-Tabs erfasst, der durch das Begrenzungsrechteck des Ziel-Elements definiert ist. Element Capture zeigt immer nur das erfasste Element an, auch wenn andere DOM-Inhalte es überlappen, während bei Region Capture überlagernder Inhalt oben auf dem von Ihnen beabsichtigten geteilten Inhalt angezeigt werden kann.

Es gibt legitime Anwendungsfälle für beide:

- Wenn Sie die Erfassung auf einen einzigen DOM-Baum beschränken müssen und alles außerhalb davon ausschließen möchten, ist die Element Capture API die bessere Wahl. Zum Beispiel möchten Sie nicht, dass private Inhalte wie eine Reihe von Nachrichtenbenachrichtigungen oder eine Benutzeroberfläche für Sprechernotizen in der Erfassung angezeigt werden.
- Wenn Sie jedoch tatsächlich einen Bereich des Browser-Tabs erfassen möchten, unabhängig davon, was darin angezeigt wird, wird die Region Capture API gut für Sie funktionieren.

Im nächsten Abschnitt beginnen wir mit einer grundlegenden Screen Capture API-Demo, um die Probleme zu veranschaulichen, die die Element Capture und Region Capture APIs lösen sollen.

## Screen Capture API-Demo

Diese Demo verwendet die Screen Capture API, um ein Fenster, einen Bildschirm oder einen Tab zu erfassen und den Stream über ein {{htmlelement("video")}}-Element auf derselben Seite zu übertragen. Sie können sie live ansehen unter [Screen Capture API Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/basic-screen-capture/) (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/basic-screen-capture)).

### HTML

Das HTML beginnt mit einer Hauptüberschrift und einem Einführungstext, gefolgt von zwei {{htmlelement("button")}}-Elementen zum Starten und Stoppen der Erfassung:

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

Als nächstes fügen wir den Hauptanwendungscontainer hinzu, der das `<video>`-Element zur Übertragung der Erfassung und einen Demo-Platzhalter-{{htmlelement("div")}} enthält:

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

Das CSS für diese Demo ist größtenteils unauffällig, aber die folgenden wenigen Regeln sind es wert, erklärt zu werden. Der Rest des CSS wurde zur Kürze ausgeblendet.

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

Wir setzen einen {{cssxref("display")}}-Wert von `flex` auf dem `main-app`-`<div>`, um das Video und den Demo-Platzhalter nebeneinander in zwei Spalten anzuordnen und eine {{cssxref("gap")}} von `5%` zwischen ihnen zu setzen. Wir setzen auch eine {{cssxref("min-width")}} von `980px` auf dem Container, wodurch die Demo-Anwendung im Wesentlichen auf ein Desktop-Layout beschränkt wird. Dies liegt daran, dass Element Capture und Region Capture nur in Desktop-Browsern unterstützt werden und Inhalte außerhalb des Bildschirms nicht erfasst werden.

```css
#main-app {
  display: flex;
  gap: 5%;
  min-width: 980px;
}
```

Wir geben dem `<video>`-Element und dem `demo`-`<div>` auch einen {{cssxref("flex")}}-Wert von `1`, damit sie denselben Betrag an horizontalem Raum einnehmen.

```css
video,
#demo {
  flex: 1;
}
```

Schließlich geben wir dem `<video>`-Element eine {{cssxref("max-width")}} von `50%` und ein festes {{cssxref("aspect-ratio")}} von `4/3`. Dies soll das Video in einer konsistenten Größe halten und zu große Layoutveränderungen vermeiden, wenn der Bildschirmübertragungsstart beginnt. Wenn wir dies nicht täten, würde das `<video>`-Element auf dieselbe Breite wie das gesamte erfasste Gebiet (Fenster oder Bildschirm) wachsen, was das Layout beeinflussen würde. Schließlich ist es ein {{Glossary("replaced_elements", "ersetzendes Element")}}, sodass seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} von der seiner Inhalte abhängt.

```css
video {
  max-width: 50%;
  aspect-ratio: 4/3;
}
```

Layoutverschiebungen können auch Probleme verursachen, wenn die Region und Element Capture APIs verwendet werden, daher ist dieser Code in allen drei Demos enthalten.

### JavaScript

Das JavaScript für dieses Beispiel stammt aus dem [Streaming screen capture](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture#streaming_screen_capture)-Beispiel in unserem "Verwendung der Screen Capture API"-Leitfaden. Wir werden die vollständige Codeerklärung hier nicht wiederholen; wir erklären nur den relevantesten Erfassungscode.

Im Optionsobjekt, das an `getDisplayMedia()` übergeben wird, wenn wir es aufrufen, setzen wir [`preferCurrentTab: true`](/de/docs/Web/API/MediaDevices/getDisplayMedia#prefercurrenttab). Dieser Hinweis schlägt dem Browser vor, den aktuellen Tab des Benutzers als die markanteste Erfassungsquelle im Dialogfeld anzubieten, das sie fragt, was sie teilen möchten. Chrome gibt ihnen beispielsweise nur diese Option, wenn `preferCurrentTab: true` gesetzt ist.

```js
const displayMediaOptions = {
  video: {
    displaySurface: "window",
  },
  preferCurrentTab: true,
};
```

Diese Option ist sehr nützlich, wenn Sie eine App mit einer integrierten "Teilen-Bildschirm"-Option erstellen – Sie möchten nicht zulassen, dass Benutzer einen anderen Tab oder ein anderes Fenster teilen.

Wenn die "Start Capture"-Schaltfläche gedrückt wird, läuft die `startCapture()`-Funktion, die [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) aufruft. Dies veranlasst den Browser, den Benutzer aufzufordern, eine Oberfläche zum Teilen auszuwählen (Fenster, Tab, usw.). Sobald eine Auswahl getroffen wurde, wird der resultierende [`MediaStream`](/de/docs/Web/API/MediaStream) auf den Wert der [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des `<video>`-Elements gesetzt, um es zu übertragen:

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

Führen Sie die obige Demo in einem [unterstützenden Browser](/de/docs/Web/API/Screen_Capture_API#browser_compatibility) aus, klicken Sie auf "Start Capture", und wählen Sie denselben Tab aus, in dem die Demo läuft. Sie werden den zuvor erwähnten "Spiegelhalle-Effekt" sehen:

![Ein Browserfenster, das eine Videoerfassung desselben Browserfensters enthält, was bedeutet, dass es unendliche Aufnahmen in Aufnahmen zeigt, die immer kleiner werden](hall-of-mirrors.png)

Dies ist offensichtlich nicht ideal und würde in jeder Art von Konferenzanwendung mit einer integrierten "Teilen-Bildschirm"-Option Probleme verursachen.

## Die Element Capture API

Die Element Capture API beschränkt die erfasste Region auf einen bestimmten gerenderten DOM-Baum (ein ausgewähltes Element und dessen Nachkommen). In diesem Abschnitt werden wir eine zweite Demo untersuchen, die mit der zuvor präsentierten identisch ist, außer dass sie Element Capture zusätzlich zur grundlegenden Screen Capture verwendet. Sehen Sie sich diese Demo live an unter [Element Capture API Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/element-capture/) (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/element-capture)).

Das HTML ist mit dem vorherigen Beispiel identisch, und das CSS ist _fast_ identisch. Wir erklären jetzt die Unterschiede im JavaScript und gehen später auf die CSS-Unterschiede im Abschnitt [Einschränkungen der Element Capture API](#einschränkungen_der_element_capture_api) ein.

Um die Element Capture API zu nutzen, greifen wir zusätzlich auf eine Referenz zu einem DOM-Element zu, das wir später als **Einschränkungsziel** verwenden werden – der auf dem Stream gezeigte Bildschirmbereich wird auf genau dieses gerenderte Element und seine Nachkommen beschränkt:

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

1. Hier beginnen wir damit, den Medienstrom wie zuvor mit `mediaDevices.getDisplayMedia()` zu holen.
2. Wir isolieren dann die Video-Track aus dem Stream mit [`MediaStream.getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks).
3. Wir erstellen das notwendige `restrictionTarget`-Objekt, um die Einschränkung auf den Video-Track anzuwenden, indem wir [`RestrictionTarget.fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static) ausführen und die zuvor erfasste DOM-Element-Referenz übergeben.
4. Wir wenden das Einschränkungsziel auf den Track an, indem wir [`BrowserCaptureMediaStreamTrack.restrictTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/restrictTo) darauf aufrufen und das `restrictionTarget`-Objekt übergeben.
5. Sobald alles oben Genannte erledigt ist, setzen wir dann den `srcObject`-Eigenschaftswert des `<video>`-Elements auf den Stream, um mit der Übertragung zu beginnen.

Versuchen Sie, das [Element Capture API Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/element-capture/) jetzt in einem [unterstützenden Browser](/de/docs/Web/API/RestrictionTarget#browser_compatibility) auszuführen. Sie sollten sehen, dass nur der Demo-Platzhalter im Stream enthalten ist, wodurch das "Spiegelhalle"-Problem behoben wird.

> [!NOTE]
> Sie können die Einschränkung stoppen, indem Sie `restrictTo()` erneut auf demselben Track aufrufen und ein Argument von `null` übergeben:
>
> ```js
> await track.restrictTo(null);
> ```

### Einschränkungen der Element Capture API

Um sicherzustellen, dass das Element **einschränkungsberechtigt** ist, d.h. es wird erfasst, wenn es als Einschränkungsziel-Element ausgewählt wird, muss es einen [stapelnden Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) bilden und in 3D-Raum abgeflacht sein.

Um diese Einschränkungen zu handhaben, haben wir die folgende zusätzliche CSS-Regel festgelegt, die auf das Demo-Container-Element abzielt:

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

Die {{cssxref("isolation")}}-Eigenschaft ist auf `isolate` gesetzt, um das Element einen stapelnden Kontext bilden zu lassen, und die {{cssxref("transform-style")}}-Eigenschaft ist auf `flat` gesetzt, um es abzuflachen. Außerdem wird das Element aufgrund der Art der von uns festgelegten Isolation nicht mehr die Standard-Weiße der Seite erben. Daher setzen wir die {{cssxref("background-color")}} auf `white`, um zu verhindern, dass die Erfassung transparent ist.

Für die vollständige Liste der Einschränkungen für die Elemente, die als Einschränkungsziele verwendet werden können, siehe die [`RestrictionTarget.fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static#element) Referenzseite.

## Die Region Capture API

Die Region Capture API hat eine sehr ähnliche Wirkung wie die Element Capture API, außer dass sie den erfassten Bereich nicht auf einen bestimmten gerenderten DOM-Baum beschränkt, sondern den Stream auf den Bereich des aktuellen Browser-Tabs zuschneidet, der durch das Begrenzungsrechteck des Ziel-Elements definiert ist. Schauen wir uns eine Demo an und erkunden später die Unterschiede zwischen den beiden detaillierter.

In diesem Abschnitt untersuchen wir eine dritte Demo, die mit den anderen identisch ist, außer dass sie Region Capture zusätzlich zur grundlegenden Screen Capture verwendet. Sehen Sie sich diese Demo live an unter [Region Capture API Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/region-capture/) (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/region-capture)).

Das HTML und das CSS sind mit den vorherigen Beispielen identisch. Das JavaScript ist fast dasselbe wie das JavaScript der Element Capture, mit einigen bemerkenswerten Unterschieden, die wir nun erklären.

Um die Region Capture API zu verwenden, greifen wir zunächst auf eine Referenz zu einem DOM-Element zu, das wir später als **Zuschneide-Ziel** verwenden werden – die Region, die im Stream gezeigt wird, wird auf genau den Bereich zugeschnitten, in dem dieses Element gerendert wird:

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

1. Wie zuvor beginnen wir damit, den Medienstrom mit `mediaDevices.getDisplayMedia()` zu holen, dann isolieren wir die Video-Track aus dem Stream mit [`MediaStream.getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks).
2. Wir erstellen das notwendige `cropTarget`-Objekt, um den Zuschnitt auf den Video-Track anzuwenden, indem wir [`fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static) ausführen und die zuvor erfasste DOM-Element-Referenz übergeben.
3. Wir wenden das Zuschneideziel auf den Track an, indem wir [`BrowserCaptureMediaStreamTrack.cropTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/cropTo) darauf aufrufen und das `cropTarget`-Objekt übergeben.
4. Sobald alles oben Genannte erledigt ist, setzen wir dann den `srcObject`-Eigenschaftswert des `<video>`-Elements auf den Stream, um mit der Übertragung zu beginnen.

Versuchen Sie, das [Region Capture API Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/region-capture/) jetzt in einem [unterstützenden Browser](/de/docs/Web/API/CropTarget#browser_compatibility) auszuführen. Sie sollten sehen, dass nur der Demo-Platzhalter im Stream enthalten ist, wodurch das "Spiegelhalle"-Problem ebenfalls behoben wird.

> [!NOTE]
> Sie können das Zuschneiden stoppen, indem Sie `cropTo()` erneut auf demselben Track aufrufen und ein Argument von `null` übergeben:
>
> ```js
> await track.cropTo(null);
> ```

### Einschränkungen der Region Capture API

Region Capture hat nicht dasselbe Maß an Einschränkungen wie Element Capture – es schneidet den Stream auf eine bestimmte Größe zu, anstatt einen bestimmten gerenderten DOM-Baum zu übertragen, daher benötigt es diese Regel nicht:

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

Es gibt jedoch weiterhin Einschränkungen für die Elemente, die als Zuschneide-Ziele verwendet werden können. Für die vollständige Liste siehe die [`CropTarget.fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static#element) Referenzseite.

## Siehe auch

- [Capture a video stream from any element](https://developer.chrome.com/docs/web-platform/element-capture) auf developer.chrome.com (2025)
- [Better tab sharing with Region Capture](https://developer.chrome.com/docs/web-platform/region-capture) auf developer.chrome.com (2023)
