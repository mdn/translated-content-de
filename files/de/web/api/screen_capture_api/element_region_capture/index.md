---
title: Verwendung der Element Capture und Region Capture APIs
slug: Web/API/Screen_Capture_API/Element_Region_Capture
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{DefaultAPISidebar("Screen Capture API")}}

Dieser Leitfaden bietet eine Schritt-für-Schritt-Anleitung zur typischen Verwendung der Element Capture und Region Capture APIs und zeigt, wie man sie verwendet und welches Problem sie lösen.

## Hintergrund

Standardmäßig erfasst die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) einen gesamten Bildschirm, ein Fenster oder einen Reiter. Mit den Element Capture und Region Capture APIs können Sie den erfassten Stream auf eine spezifische gerenderte DOM-Struktur oder auf den Bildschirmbereich, der durch die Begrenzungsbox einer bestimmten DOM-Struktur definiert ist, beschränken.

Dies ist nützlich, wenn Sie nur einen begrenzten Bereich teilen möchten, um unnötige Bandbreite zu sparen oder den erforderlichen Bildschirmplatz zu reduzieren, oder aus Datenschutzgründen (vielleicht möchten Sie nicht, dass andere Teilnehmer Ihre Nachrichtennachrichten oder Hintergrundkonfigurationen sehen, die für die Ausführung der Demo erforderlich sind, die Sie teilen).

Darüber hinaus kann es beim Erfassen Ihrer Webkamera-Ausgabe zu einem unerwünschten "unendlichen Wurmloch" oder "Spiegeleffekt" kommen. Die Element Capture und Region Capture APIs können auch helfen, solche Probleme zu vermeiden.

## Wann welche API verwenden

Die Element Capture API erfasst das Element selbst (und seine Nachfahren), während die Region Capture API den Bereich des Browser-Reiters erfasst, der durch die Begrenzungsbox des Ziel-Elements definiert ist. Element Capture zeigt immer nur das erfasste Element, auch wenn andere DOM-Inhalte darüberliegen, während Region Capture dazu führen kann, dass überlappende Inhalte über dem Inhalt angezeigt werden, den Sie teilen wollten.

Beide haben legitime Anwendungsfälle:

- Wenn Sie die Erfassung auf einen bestimmten DOM-Baum beschränken müssen und alles außerhalb davon ausschließen wollen, ist die Element Capture API die bessere Wahl. Zum Beispiel möchten Sie nicht, dass private Inhalte wie eine Reihe von Nachrichtennachrichten oder die Benutzeroberfläche für Sprechernotizen in der Erfassung auftauchen.
- Wenn Sie jedoch wirklich einen Bereich des Browser-Reiters erfassen möchten, unabhängig davon, was darin angezeigt wird, ist die Region Capture API gut geeignet. Die [Region Capture Demo](https://region-capture-demo.glitch.me/) (siehe den [Quellcode](https://glitch.com/edit/#!/region-capture-demo)) zeigt eine nützliche Möglichkeit — einen bestimmten Bereich des Reiters heranzoomen, während mehrere Benutzer eine interaktive Anleitung erhalten.

Im nächsten Abschnitt beginnen wir mit einer grundlegenden Screen Capture API-Demo, um die Probleme zu veranschaulichen, die die Element Capture und Region Capture APIs lösen sollen.

## Screen Capture API Demo

Diese Demo verwendet die Screen Capture API, um ein Fenster, einen Bildschirm oder einen Reiter zu erfassen und den Stream über ein {{htmlelement("video")}}-Element auf derselben Seite zu übertragen. Sie können es live unter [Screen Capture API Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/basic-screen-capture/) sehen (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/basic-screen-capture)).

### HTML

Das HTML beginnt mit einer Hauptüberschrift und einem Einführungstext und umfasst dann zwei {{htmlelement("button")}}-Elemente, um die Erfassung zu starten und zu stoppen:

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

Als nächstes fügen wir den Haupt-App-Container hinzu, der das `<video>`-Element enthält, um die Erfassung zu übertragen, sowie einen Demo-Platzhalter {{htmlelement("div")}}:

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

Das CSS für diese Demo ist größtenteils unscheinbar, aber die folgenden wenigen Regeln sind erklärungswürdig. Den Rest des CSS haben wir zur Kürze ausgeblendet.

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

Wir setzen einen {{cssxref("display")}}-Wert von `flex` auf das `main-app` `<div>`, um das Video und den Demo-Platzhalter nebeneinander in zwei Spalten mit einem {{cssxref("gap")}} von `5%` zwischen ihnen anzuordnen. Wir setzen auch eine {{cssxref("min-width")}} von `980px` auf den Container, was die App im Wesentlichen auf ein Desktop-Layout beschränkt. Dies liegt daran, dass Element Capture und Region Capture nur auf Desktop-Browsern unterstützt werden und Inhalte außerhalb des Bildschirms nicht erfasst werden.

```css
#main-app {
  display: flex;
  gap: 5%;
  min-width: 980px;
}
```

Wir geben auch dem `<video>`-Element und dem `demo`-`<div>` einen {{cssxref("flex")}}-Wert von `1`, sodass sie die gleiche Menge an horizontalem Platz einnehmen.

```css
video,
#demo {
  flex: 1;
}
```

Schließlich geben wir dem `<video>`-Element eine {{cssxref("max-width")}} von `50%` und ein festgelegtes {{cssxref("aspect-ratio")}} von `4/3`. Dies dient dazu, das Video in einer konsistenten Größe zu halten und zu vermeiden, dass es zu großen Layout-Änderungen kommt, wenn die Bildschirmaufnahme beginnt. Wenn wir dies nicht tun würden, würde das `<video>`-Element auf die gleiche Breite wie der gesamte erfasste Bereich (Fenster oder Bildschirm) wachsen, was das Layout beeinflussen würde. Letztendlich, ist es ein {{Glossary("replaced_elements", "replaced element")}}, daher hängt seine {{Glossary("Intrinsic_Size", "intrinsic size")}} von der seines Inhalts ab.

```css
video {
  max-width: 50%;
  aspect-ratio: 4/3;
}
```

Layoutverschiebungen können auch Probleme verursachen, wenn man die Region und Element Capture APIs verwendet, daher ist dieser Code in allen drei Demos enthalten.

### JavaScript

Das JavaScript für dieses Beispiel ist vom [Streaming-Bildschirmaufnahme](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture#streaming_screen_capture) Beispiel in unserem "Verwenden der Screen Capture API" Leitfaden angepasst. Wir werden hier nicht die vollständige Codeerklärung wiederholen; wir erklären nur den relevantesten Erfassungscode.

Im Optionsobjekt, das wir an `getDisplayMedia()` übergeben, wenn wir es aufrufen, setzen wir [`preferCurrentTab: true`](/de/docs/Web/API/MediaDevices/getDisplayMedia#prefercurrenttab). Dieser Hinweis deutet darauf hin, dass der Browser den aktuellen Tab des Benutzers als die prominenteste Erfassungsquelle im Dialogfenster anzeigen sollte, in dem der Benutzer gefragt wird, was er teilen möchte. Chrome gibt beispielsweise nur diese Option, wenn `preferCurrentTab: true` gesetzt ist.

```js
const displayMediaOptions = {
  video: {
    displaySurface: "window",
  },
  preferCurrentTab: true,
};
```

Diese Option ist sehr nützlich, wenn Sie eine App mit einer integrierten "Bildschirmfreigabe"-Option erstellen — Sie möchten nicht, dass Benutzer einen anderen Tab oder ein Fenster freigeben können.

Wenn die "Start Capture"-Taste gedrückt wird, läuft die `startCapture()`-Funktion, die [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) aufruft. Dies veranlasst den Browser, den Benutzer aufzufordern, eine Oberfläche zum Teilen auszuwählen (Fenster, Tab usw.). Sobald eine Wahl getroffen wurde, wird der resultierende [`MediaStream`](/de/docs/Web/API/MediaStream) auf den Wert der [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) Eigenschaft des `<video>`-Elements gesetzt, um ihn zu übertragen:

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

Führen Sie die obige Demo in einem [unterstützenden Browser](/de/docs/Web/API/Screen_Capture_API#browser_compatibility) aus, klicken Sie auf "Start Capture" und wählen Sie denselben Tab aus, in dem die Demo läuft. Sie werden den "Spiegeleffekt" sehen, wie bereits erwähnt:

![Ein Browserfenster, das eine Videoaufnahme desselben Browserfensters enthält, was bedeutet, dass es unendliche Erfassungen innerhalb von Erfassungen zeigt, die immer kleiner werden](hall-of-mirrors.png)

Dies ist offensichtlich nicht ideal und würde in jeder Art von Konferenzanwendung mit einer integrierten "Bildschirmfreigabe"-Option Probleme verursachen.

## Die Element Capture API

Die Element Capture API beschränkt den erfassten Bereich auf einen angegebenen gerenderten DOM-Baum (ein ausgewähltes Element und dessen Nachfahren). In diesem Abschnitt werden wir eine zweite Demo erkunden, die mit der oben vorgestellten identisch ist, mit dem Unterschied, dass sie Element Capture zusätzlich zur grundlegenden Screen Capture verwendet. Sehen Sie sich diese Demo live unter [Element Capture API Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/element-capture/) an (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/element-capture)).

Das HTML ist mit dem vorherigen Beispiel identisch, und das CSS ist _fast_ identisch. Wir erklären die Unterschiede im JavaScript jetzt und gehen später im Abschnitt [Probleme mit der Element Capture API](#issues-with-the-element-capture-api) auf die Unterschiede im CSS ein.

Um die Element Capture API zu verwenden, holen wir uns zusätzlich eine Referenz zu einem DOM-Element, das wir später als **Einschränkungsziel** verwenden werden — der im Stream angezeigte Bildschirmbereich wird auf dieses gerenderte Element und seine Nachfahren beschränkt:

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

1. Hier beginnen wir damit, wie zuvor den Medienstream mit `mediaDevices.getDisplayMedia()` abzurufen.
2. Dann isolieren wir die Videospur aus dem Stream, indem wir [`MediaStream.getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks) verwenden.
3. Wir erstellen das notwendige `restrictionTarget`-Objekt, um die Einschränkung auf die Videospur anzuwenden, indem wir [`RestrictionTarget.fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static) ausführen und ihm die zuvor abgerufene DOM-Elementreferenz übergeben.
4. Wir wenden das Einschränkungsziel auf die Spur an, indem wir [`BrowserCaptureMediaStreamTrack.restrictTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/restrictTo) aufrufen und ihm das `restrictionTarget`-Objekt übergeben.
5. Sobald alles oben Genannte erledigt ist, setzen wir den Wert der `srcObject`-Eigenschaft des `<video>`-Elements auf den Stream, um die Übertragung zu starten.

Versuchen Sie jetzt, das [Element Capture API Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/element-capture/) in einem [unterstützenden Browser](/de/docs/Web/API/RestrictionTarget#browser_compatibility) auszuführen. Sie sollten sehen, dass nur der Demo-Platzhalter im Stream enthalten ist, wodurch das "Spiegeleffekt"-Problem behoben wird.

> [!NOTE]
> Sie können die Einschränkung aufheben, indem Sie `restrictTo()` erneut auf derselben Spur aufrufen und ihm ein Argument von `null` übergeben:
>
> ```js
> await track.restrictTo(null);
> ```

### Einschränkungen der Element Capture API

Um sicherzustellen, dass das Element **einschränkungsberechtigt** ist, d.h. es wird erfasst, wenn es als Einschränkungsziel-Element ausgewählt wird, muss es einen [Stacking-Context](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) bilden und in 3D-Raum abgeflacht werden.

Um diese Einschränkungen zu handhaben, haben wir die folgende zusätzliche CSS-Regel erstellt, die auf das Demo-Containerelement abzielt:

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

Die {{cssxref("isolation")}}-Eigenschaft ist auf `isolate` gesetzt, um das Element einen Stacking-Context bilden zu lassen, und die {{cssxref("transform-style")}}-Eigenschaft ist auf `flat` gesetzt, um es abzuflachen. Aufgrund der Art der Isolation, die wir gesetzt haben, wird das Element auch nicht mehr die Standardweiße Farbe der Seite erben. Daher setzen wir {{cssxref("background-color")}} auf `white`, um zu verhindern, dass die Erfassung transparent wird.

Für die vollständige Liste der Einschränkungen der Elemente, die als Einschränkungsziele verwendet werden können, siehe die Referenzseite [`RestrictionTarget.fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static#element).

## Die Region Capture API

Die Region Capture API hat einen sehr ähnlichen Effekt wie die Element Capture API, mit dem Unterschied, dass sie statt den erfassten Bereich auf einen spezifischen gerenderten DOM-Baum zu beschränken, den Stream auf den Bereich des aktuellen Browser-Tabs zuschneidet, der durch die Begrenzungsbox des Ziel-Elements definiert ist. Lassen Sie uns eine Demo ansehen und dann später die Unterschiede zwischen den beiden näher erkunden.

In diesem Abschnitt werden wir eine dritte Demo erkunden, die mit den anderen identisch ist, mit dem Unterschied, dass sie die Region Capture zusätzlich zur grundlegenden Screen Capture verwendet. Sehen Sie sich diese Demo live unter [Region Capture API Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/region-capture/) an (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/screen-capture-api/region-capture)).

Das HTML und CSS sind mit den vorherigen Beispielen identisch. Das JavaScript ist fast das gleiche wie das Element Capture JavaScript, mit einigen bemerkenswerten Unterschieden, die wir nun erklären.

Um die Region Capture API zu verwenden, holen wir uns zuerst eine Referenz zu einem DOM-Element, das wir später als **Crop-Ziel** verwenden werden — der im Stream angezeigte Bereich wird auf den Bereich beschränkt, in dem das Element gerendert wird:

```js
const demoElem = document.querySelector("#demo");
```

Nun schauen wir uns die `startCapture()`-Funktion der Region Capture Demo an:

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

1. Wie zuvor beginnen wir damit, den Medienstream mit `mediaDevices.getDisplayMedia()` abzurufen, und isolieren dann die Videospur aus dem Stream, indem wir [`MediaStream.getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks) verwenden.
2. Wir erstellen das notwendige `cropTarget`-Objekt, um den Schnitt auf die Videospur anzuwenden, indem wir [`fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static) ausführen und ihm die zuvor erhaltene DOM-Elementreferenz übergeben.
3. Wir wenden das Crop-Ziel auf die Spur an, indem wir [`BrowserCaptureMediaStreamTrack.cropTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/cropTo) aufrufen und ihm das `cropTarget`-Objekt übergeben.
4. Sobald all das oben erwähnt ist, setzen wir den Wert der `srcObject`-Eigenschaft des `<video>`-Elements auf den Stream, um die Übertragung zu starten.

Versuchen Sie jetzt, das [Region Capture API Beispiel](https://mdn.github.io/dom-examples/screen-capture-api/region-capture/) in einem [unterstützenden Browser](/de/docs/Web/API/CropTarget#browser_compatibility) auszuführen. Sie sollten sehen, dass nur der Demo-Platzhalter im Stream enthalten ist, was auch das "Spiegeleffekt"-Problem behebt.

> [!NOTE]
> Sie können das Zuschneiden aufheben, indem Sie `cropTo()` erneut auf derselben Spur aufrufen und ihm ein Argument von `null` übergeben:
>
> ```js
> await track.cropTo(null);
> ```

### Einschränkungen der Region Capture API

Region Capture hat nicht das gleiche Maß an Einschränkungen wie Element Capture — es wird der Stream auf eine bestimmte Größe zugeschnitten und nicht ein spezifischer gerenderter DOM-Baum übertragen, sodass diese Regel nicht erforderlich ist:

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

Es gibt jedoch immer noch Einschränkungen bei den Elementen, die als Crop-Ziele verwendet werden können. Für die vollständige Liste siehe die Referenzseite [`CropTarget.fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static#element).

## Siehe auch

- [Ein Video-Stream von jedem Element erfassen](https://developer.chrome.com/docs/web-platform/element-capture) auf developer.chrome.com (2025)
- [Besseres Teilen von Reitern mit Region Capture](https://developer.chrome.com/docs/web-platform/region-capture) auf developer.chrome.com (2023)
- [Element Capture Demo](https://element-capture-demo.glitch.me/)
- [Region Capture Demo](https://region-capture-demo.glitch.me/)
