---
title: Picture-in-Picture API
slug: Web/API/Picture-in-Picture_API
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{DefaultAPISidebar("Picture-in-Picture API")}}

Die **Picture-in-Picture API** ermöglicht es Webseiten, ein schwebendes „immer-im-Vordergrund“-Videofenster zu erstellen. Dies ermöglicht es den Nutzern, weiterhin Medien zu konsumieren, während sie mit anderen Websites oder Anwendungen auf ihrem Gerät interagieren.

> [!NOTE]
> Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) erweitert die Picture-in-Picture API, um das „immer-im-Vordergrund“-Fenster mit beliebigem HTML-Inhalt zu füllen, nicht nur mit einem Video.

## Schnittstellen

- [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow)
  - : Repräsentiert das schwebende Videofenster; enthält die Eigenschaften [`width`](/de/docs/Web/API/PictureInPictureWindow/width) und [`height`](/de/docs/Web/API/PictureInPictureWindow/height) sowie eine [`onresize`](/de/docs/Web/API/PictureInPictureWindow/resize_event) Ereignis-Handler-Eigenschaft.
- [`PictureInPictureEvent`](/de/docs/Web/API/PictureInPictureEvent)
  - : Repräsentiert ereignisbezogene Bilder-in-Bild-Ereignisse, einschließlich [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event), [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event) und [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event).

## Instanzmethoden

Die Picture-in-Picture API fügt den Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`Document`](/de/docs/Web/API/Document) Methoden hinzu, um das schwebende Videofenster umzuschalten.

### Instanzmethoden in der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
  - : Fordert vom Benutzer-Agent an, das Video im Bild-in-Bild-Modus anzuzeigen

### Instanzmethoden in der Document-Schnittstelle

- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
  - : Fordert vom Benutzer-Agent an, das Element im Bild-in-Bild-Modus zurück in sein ursprüngliches Feld zu versetzen.

## Instanzeigenschaften

Die Picture-in-Picture API erweitert die Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`Document`](/de/docs/Web/API/Document) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) mit Eigenschaften, die verwendet werden können, um festzustellen, ob der Modus für das schwebende Videofenster unterstützt und verfügbar ist, ob der Bild-in-Bild-Modus derzeit aktiv ist und welches Video schwebt.

### Instanzeigenschaften in der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
  - : Die `disablePictureInPicture`-Eigenschaft gibt dem Benutzer-Agent einen Hinweis, den Bild-in-Bild-Modus nicht den Nutzern vorzuschlagen oder ihn automatisch anzufordern.

### Instanzeigenschaften in der Document-Schnittstelle

- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled)
  - : Die `pictureInPictureEnabled`-Eigenschaft sagt Ihnen, ob es möglich ist, den Bild-in-Bild-Modus zu aktivieren. Dies ist `false`, wenn der Bild-in-Bild-Modus aus irgendeinem Grund nicht verfügbar ist (z.B. wenn die [`„picture-in-picture“`-Funktion](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/picture-in-picture) untersagt wurde oder der Bild-in-Bild-Modus nicht unterstützt wird).

### Instanzeigenschaften in den Document- oder ShadowRoot-Schnittstellen

- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement) / [`ShadowRoot.pictureInPictureElement`](/de/docs/Web/API/ShadowRoot/pictureInPictureElement)
  - : Die `pictureInPictureElement`-Eigenschaft sagt Ihnen, welches [`Element`](/de/docs/Web/API/Element) derzeit im schwebenden Fenster angezeigt wird (oder im Shadow-DOM). Wenn dies `null` ist, hat das Dokument (oder Shadow-DOM) derzeit keinen Knoten im Bild-in-Bild-Modus.

## Ereignisse

_Die Picture-in-Picture API definiert drei Ereignisse, die verwendet werden können, um zu erkennen, wann der Bild-in-Bild-Modus umgeschaltet wird und wann das schwebende Videofenster seine Größe ändert._

- [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es in den Bild-in-Bild-Modus wechselt.
- [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es den Bild-in-Bild-Modus verlässt.
- [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event)
  - : Wird an ein [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow) gesendet, wenn es seine Größe ändert.

## Hinzufügen von Steuerungen

Wenn Medienaktions-Handler über die [Media Session API](/de/docs/Web/API/Media_Session_API) gesetzt wurden, werden geeignete Steuerungen für diese Aktionen vom Browser zur Bild-in-Bild-Überlagerung hinzugefügt. Beispielsweise könnte, wenn eine `"nexttrack"`-Aktion gesetzt wurde, eine Schaltfläche zum Überspringen in der Bild-in-Bild-Ansicht angezeigt werden. Es gibt keine Unterstützung für das Hinzufügen benutzerdefinierter HTML-Schaltflächen oder Steuerungen.

## Steuerung des Stylings

Die {{cssxref(":picture-in-picture")}} [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) entspricht dem Videoelement, das sich derzeit im Bild-in-Bild-Modus befindet, sodass Sie Ihre Stylesheets so konfigurieren können, dass die Größe, der Stil oder das Layout von Inhalten automatisch angepasst wird, wenn ein Video zwischen Bild-in-Bild- und traditionellen Präsentationsmodi wechselt.

## Steuerung des Zugriffs

Die Verfügbarkeit des Bild-in-Bild-Modus kann über [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden. Die Funktion des Bild-in-Bild-Modus wird durch den String `"picture-in-picture"` identifiziert, mit einem Standard-Werstelistenwert von `*`, was bedeutet, dass der Bild-in-Bild-Modus in obersten Dokumentkontexten sowie in verschachtelten Browsingkontexten, die aus demselben Ursprung wie das oberste Dokument geladen wurden, erlaubt ist.

## Beispiele

### Umschalten des Bild-in-Bild-Modus

In diesem Beispiel haben wir ein {{HTMLElement("video")}}-Element auf einer Webseite, ein {{HTMLElement("button")}}, um den Bild-in-Bild-Modus umzuschalten, und ein Element, um relevante Informationen für das Beispiel zu protokollieren. Das {{HTMLElement("button")}}-Element ist anfänglich `disabled`, bis wir die Browser-Unterstützung überprüft haben.

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

Wir überprüfen zuerst, ob der Browser PiP mit `document.pictureInPictureEnabled` unterstützt, und wenn es nicht unterstützt wird, protokollieren wir diese Information im `<pre>`-Element. Wenn es im Browser verfügbar ist, können wir den Schalter aktivieren, um in den und aus dem PiP zu wechseln.

Für die Steuerungen ruft ein Ereignis-Listener auf dem {{HTMLElement("button")}}-Element eine `togglePictureInPicture()`-Funktion auf, die wir definiert haben. In `togglePictureInPicture()` prüft eine `if`-Anweisung den Wert des `pictureInPictureElement`-Attributs des [`document`](/de/docs/Web/API/Document).

- Wenn der Wert `null` ist, befindet sich kein Video in einem schwebenden Fenster, sodass wir das Video anfordern können, den Bild-in-Bild-Modus zu betreten. Wir tun dies durch einen Aufruf von [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) auf dem {{HTMLElement("video")}}-Element.
- Wenn der Wert nicht `null` ist, befindet sich ein Element derzeit im Bild-in-Bild-Modus. Wir können dann [`document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture) aufrufen, um das Video zurück in seinen ursprünglichen Kasten zu bringen und den Bild-in-Bild-Modus zu verlassen.

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

Durch Klicken auf die Schaltfläche "Toggle PiP" kann der Benutzer zwischen der Wiedergabe des Videos auf der Seite und in einem schwebenden Fenster umschalten:

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
