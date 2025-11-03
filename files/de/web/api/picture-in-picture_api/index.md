---
title: Picture-in-Picture API
slug: Web/API/Picture-in-Picture_API
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{DefaultAPISidebar("Picture-in-Picture API")}}

Die **Picture-in-Picture API** erlaubt es Websites, ein schwebendes, immer im Vordergrund befindliches Videofenster zu erstellen. Dadurch können Benutzer weiterhin Medien konsumieren, während sie mit anderen Websites oder Anwendungen auf ihrem Gerät interagieren.

> [!NOTE]
> Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) erweitert die Picture-in-Picture API, um das immer im Vordergrund befindliche Fenster mit beliebigem HTML-Inhalt zu füllen, nicht nur mit einem Video.

## Schnittstellen

- [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow)
  - : Repräsentiert das schwebende Videofenster; enthält die Eigenschaften [`width`](/de/docs/Web/API/PictureInPictureWindow/width) und [`height`](/de/docs/Web/API/PictureInPictureWindow/height) sowie eine [`onresize`](/de/docs/Web/API/PictureInPictureWindow/resize_event) Ereignis-Handler-Eigenschaft.
- [`PictureInPictureEvent`](/de/docs/Web/API/PictureInPictureEvent)
  - : Repräsentiert ereignisbezogene Vorgänge im Picture-in-Picture-Modus, einschließlich [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event), [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event) und [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event).

## Instanzmethoden

Die Picture-in-Picture API fügt den Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`Document`](/de/docs/Web/API/Document) Methoden hinzu, um das schwebende Videofenster umzuschalten.

### Instanzmethoden auf der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
  - : Fordert, dass der Benutzeragent das Video in den Picture-in-Picture-Modus versetzt.

### Instanzmethoden auf der Document-Schnittstelle

- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
  - : Fordert, dass der Benutzeragent das Element im Picture-in-Picture-Modus in seinen ursprünglichen Bereich zurückführt.

## Instanzeigenschaften

Die Picture-in-Picture API erweitert die Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`Document`](/de/docs/Web/API/Document) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) mit Eigenschaften, die verwendet werden können, um zu bestimmen, ob der Modus für ein schwebendes Videofenster unterstützt und verfügbar ist, ob der Picture-in-Picture-Modus derzeit aktiv ist und welches Video gerade schwebt.

### Instanzeigenschaften auf der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
  - : Die Eigenschaft `disablePictureInPicture` gibt dem Benutzeragenten einen Hinweis, den Picture-in-Picture-Modus den Benutzern nicht vorzuschlagen oder ihn automatisch anzufordern.

### Instanzeigenschaften auf der Document-Schnittstelle

- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled)
  - : Die Eigenschaft `pictureInPictureEnabled` teilt Ihnen mit, ob es möglich ist, den Picture-in-Picture-Modus zu aktivieren. Dies ist `false`, wenn der Picture-in-Picture-Modus aus irgendeinem Grund nicht verfügbar ist (z.B. wenn das [`"picture-in-picture"`-Feature](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/picture-in-picture) untersagt wurde oder der Picture-in-Picture-Modus nicht unterstützt wird).

### Instanzeigenschaften auf der Document- oder ShadowRoot-Schnittstelle

- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement) / [`ShadowRoot.pictureInPictureElement`](/de/docs/Web/API/ShadowRoot/pictureInPictureElement)
  - : Die Eigenschaft `pictureInPictureElement` teilt Ihnen mit, welches [`Element`](/de/docs/Web/API/Element) derzeit im schwebenden Fenster (oder im Shadow DOM) angezeigt wird. Wenn diese Eigenschaft `null` ist, hat das Dokument (oder das Shadow DOM) derzeit keinen Knoten im Picture-in-Picture-Modus.

## Ereignisse

_Die Picture-in-Picture API definiert drei Ereignisse, die verwendet werden können, um zu erkennen, wann der Picture-in-Picture-Modus umgeschaltet wird und wann das schwebende Videofenster seine Größe ändert._

- [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es in den Picture-in-Picture-Modus wechselt.
- [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es den Picture-in-Picture-Modus verlässt.
- [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event)
  - : Wird an ein [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow) gesendet, wenn es seine Größe ändert.

## Hinzufügen von Steuerelementen

Wenn Medienaktionshandler über die [Media Session API](/de/docs/Web/API/Media_Session_API) eingestellt wurden, werden passende Steuerelemente für diese Aktionen durch den Browser zum Picture-in-Picture-Overlay hinzugefügt. Beispielsweise wird eine Schaltfläche zum Überspringen angezeigt, wenn eine `"nexttrack"`-Aktion eingestellt wurde. Es gibt keine Unterstützung zum Hinzufügen von benutzerdefinierten HTML-Schaltflächen oder -Steuerelementen.

## Kontrolle der Gestaltung

Die [`:picture-in-picture`](/de/docs/Web/CSS/Reference/Selectors/:picture-in-picture) [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) passt auf das Videoelement im Picture-in-Picture-Modus und ermöglicht es Ihnen, Ihre Stylesheets so zu konfigurieren, dass die Größe, der Stil oder das Layout des Inhalts automatisch angepasst wird, wenn ein Video zwischen dem Picture-in-Picture- und dem herkömmlichen Darstellungsmode wechselt.

## Kontrolle des Zugriffs

Die Verfügbarkeit des Picture-in-Picture-Modus kann über die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden. Die Picture-in-Picture-Modus-Funktion wird durch den String `"picture-in-picture"` identifiziert, mit einem Standard-Allowlist-Wert von `*`, was bedeutet, dass der Picture-in-Picture-Modus sowohl in den obersten Dokumentkontexten als auch in verschachtelten Browsing-Kontexten zugelassen ist, die von derselben Herkunft wie das oberste Dokument geladen wurden.

## Beispiele

### Umschalten des Picture-in-Picture-Modus

In diesem Beispiel haben wir ein {{HTMLElement("video")}}-Element auf einer Webseite, ein {{HTMLElement("button")}}, um Picture-in-Picture umzuschalten, und ein Element, um relevante Informationen für das Beispiel zu protokollieren. Das {{HTMLElement("button")}}-Element ist anfänglich `disabled`, bis wir die Browserunterstützung festgestellt haben.

```html
<video
  src="/shared-assets/videos/friday.mp4"
  id="video"
  muted
  controls
  loop
  width="300"></video>

<button id="pip-button" disabled>Toggle PiP</button>
<pre id="log"></pre>
```

```css hidden
body {
  font:
    14px "Open Sans",
    sans-serif;
  padding: 0.5em;
}

button {
  display: block;
  margin-block: 1rem;
}
```

Wir überprüfen zuerst, ob der Browser PiP mit `document.pictureInPictureEnabled` unterstützt, und wenn es nicht unterstützt wird, protokollieren wir diese Information in das `<pre>`-Element. Wenn es im Browser verfügbar ist, können wir das Umschalten zum Ein- und Austritt aus PiP aktivieren.

Für die Steuerelemente ruft ein Ereignislistener am {{HTMLElement("button")}}-Element eine von uns definierte Funktion `togglePictureInPicture()` auf. In `togglePictureInPicture()` prüft eine `if`-Anweisung den Wert der `pictureInPictureElement`-Eigenschaft des [`document`](/de/docs/Web/API/Document).

- Wenn der Wert `null` ist, befindet sich kein Video in einem schwebenden Fenster, und wir können das Video in den Picture-in-Picture-Modus versetzen. Dafür rufen wir [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) am {{HTMLElement("video")}}-Element auf.
- Wenn der Wert nicht `null` ist, befindet sich derzeit ein Element im Picture-in-Picture-Modus. Wir können dann [`document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture) aufrufen, um das Video in seinen ursprünglichen Bereich zurückzubringen und den Picture-in-Picture-Modus zu verlassen.

```js
const video = document.getElementById("video");
const pipButton = document.getElementById("pip-button");
const log = document.getElementById("log");

if (document.pictureInPictureEnabled) {
  pipButton.removeAttribute("disabled");
} else {
  log.innerText = "PiP not supported. Check browser compatibility for details.";
}

function togglePictureInPicture() {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else {
    video.requestPictureInPicture();
  }
}

pipButton.addEventListener("click", togglePictureInPicture);
```

```css
:picture-in-picture {
  outline: 5px dashed green;
}
```

Ein Klick auf die "Toggle PiP"-Schaltfläche ermöglicht es dem Benutzer, zwischen dem Abspielen des Videos auf der Seite und in einem schwebenden Fenster zu wechseln:

{{embedlivesample("toggling_picture-in-picture", , "350")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled)
- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement)
- {{CSSxRef(":picture-in-picture")}}
- Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API)
