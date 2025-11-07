---
title: Picture-in-Picture API
slug: Web/API/Picture-in-Picture_API
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

{{DefaultAPISidebar("Picture-in-Picture API")}}

Die **Picture-in-Picture API** ermöglicht es Websites, ein schwebendes, immer im Vordergrund befindliches Videofenster zu erstellen. Dies erlaubt es Benutzern, Medien weiter zu konsumieren, während sie mit anderen Seiten oder Anwendungen auf ihrem Gerät interagieren.

> [!NOTE]
> Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) erweitert die Picture-in-Picture API, um es zu ermöglichen, das immer im Vordergrund befindliche Fenster mit beliebigem HTML-Inhalt zu füllen, nicht nur mit einem Video.

## Schnittstellen

- [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow)
  - : Repräsentiert das schwebende Videofenster; enthält die Eigenschaften [`width`](/de/docs/Web/API/PictureInPictureWindow/width) und [`height`](/de/docs/Web/API/PictureInPictureWindow/height) sowie eine [`onresize`](/de/docs/Web/API/PictureInPictureWindow/resize_event) Ereignishandler-Eigenschaft.
- [`PictureInPictureEvent`](/de/docs/Web/API/PictureInPictureEvent)
  - : Repräsentiert Ereignisse im Zusammenhang mit Picture-in-Picture, einschließlich [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event), [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event) und [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event).

## Instanzmethoden

Die Picture-in-Picture API fügt den Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`Document`](/de/docs/Web/API/Document) Methoden hinzu, um das schwebende Videofenster umzuschalten.

### Instanzmethoden auf der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
  - : Fordert den Benutzeragenten auf, das Video in den Picture-in-Picture-Modus zu versetzen.

### Instanzmethoden auf der Document-Schnittstelle

- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
  - : Fordert den Benutzeragenten auf, das Element im Picture-in-Picture-Modus in seinen ursprünglichen Bereich zurückzuführen.

## Instanzeigenschaften

Die Picture-in-Picture API erweitert die Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`Document`](/de/docs/Web/API/Document) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) mit Eigenschaften, die verwendet werden können, um zu bestimmen, ob der Modus des schwebenden Videofensters unterstützt und verfügbar ist, ob der Picture-in-Picture-Modus derzeit aktiv ist und welches Video schwebt.

### Instanzeigenschaften auf der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
  - : Die Eigenschaft `disablePictureInPicture` gibt dem Benutzeragenten einen Hinweis, Picture-in-Picture nicht den Benutzern vorzuschlagen oder es automatisch anzufordern.

### Instanzeigenschaften auf der Document-Schnittstelle

- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled)
  - : Die Eigenschaft `pictureInPictureEnabled` teilt mit, ob es möglich ist, den Picture-in-Picture-Modus zu aktivieren. Dies ist `false`, wenn der Picture-in-Picture-Modus aus irgendeinem Grund nicht verfügbar ist (z. B. wurde die [`"picture-in-picture"` Funktion](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/picture-in-picture) untersagt, oder der Picture-in-Picture-Modus wird nicht unterstützt).

### Instanzeigenschaften auf den Schnittstellen Document oder ShadowRoot

- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement) / [`ShadowRoot.pictureInPictureElement`](/de/docs/Web/API/ShadowRoot/pictureInPictureElement)
  - : Die Eigenschaft `pictureInPictureElement` gibt an, welches [`Element`](/de/docs/Web/API/Element) derzeit im schwebenden Fenster (oder im Shadow DOM) angezeigt wird. Wenn dies `null` ist, hat das Dokument (oder das Shadow DOM) derzeit keine Knoten im Picture-in-Picture-Modus.

## Ereignisse

_Die Picture-in-Picture API definiert drei Ereignisse, die verwendet werden können, um zu erkennen, wann der Picture-in-Picture-Modus umgeschaltet wird und wann das schwebende Videofenster die Größe ändert._

- [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es in den Picture-in-Picture-Modus wechselt.
- [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es den Picture-in-Picture-Modus verlässt.
- [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event)
  - : Wird an ein [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow) gesendet, wenn es die Größe ändert.

## Hinzufügen von Steuerelementen

Wenn Medienaktionshandler über die [Media Session API](/de/docs/Web/API/Media_Session_API) gesetzt wurden, dann werden geeignete Steuerelemente für diese Aktionen vom Browser zum Picture-in-Picture-Overlay hinzugefügt. Wenn zum Beispiel eine `"nexttrack"`-Aktion gesetzt wurde, könnte ein Skip-Button in der Picture-in-Picture-Ansicht angezeigt werden. Es gibt keine Unterstützung für das Hinzufügen benutzerdefinierter HTML-Buttons oder -Steuerelemente.

## Steuerung des Stylings

Die [`:picture-in-picture`](/de/docs/Web/CSS/Reference/Selectors/:picture-in-picture) [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) stimmt mit dem Videoelement überein, das sich aktuell im Picture-in-Picture-Modus befindet, und ermöglicht es Ihnen, Ihre Stylesheets so zu konfigurieren, dass die Größe, der Stil oder das Layout des Inhalts automatisch angepasst werden, wenn ein Video zwischen Picture-in-Picture und traditionellen Präsentationsmodi wechselt.

## Steuerung des Zugriffs

Die Verfügbarkeit des Picture-in-Picture-Modus kann mithilfe der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden. Die Funktion des Picture-in-Picture-Modus wird durch den String `"picture-in-picture"` identifiziert, mit einem standardmäßigen Allowlist-Wert von `*`, was bedeutet, dass der Picture-in-Picture-Modus in obersten Dokumentkontexten sowie in verschachtelten Browsing-Kontexten erlaubt ist, die von der gleichen Herkunft wie das oberste Dokument geladen wurden.

## Beispiele

### Umschalten zwischen Picture-in-Picture-Modus

In diesem Beispiel haben wir ein {{HTMLElement("video")}}-Element in einer Webseite, ein {{HTMLElement("button")}}, um Picture-in-Picture umzuschalten, und ein Element, um Informationen zu protokollieren, die für das Beispiel relevant sind. Das {{HTMLElement("button")}}-Element ist anfänglich `disabled`, bis wir die Unterstützung des Browsers festgestellt haben.

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

Zuerst überprüfen wir, ob der Browser PiP mit `document.pictureInPictureEnabled` unterstützt, und wenn es nicht unterstützt wird, protokollieren wir diese Information in das `<pre>`-Element. Wenn es im Browser verfügbar ist, können wir den Toggle aktivieren, um PiP ein- und auszuschalten.

Für die Steuerelemente ruft ein Ereignis-Listener auf dem {{HTMLElement("button")}}-Element eine `togglePictureInPicture()`-Funktion auf, die wir definiert haben. In `togglePictureInPicture()` prüft eine `if`-Anweisung den Wert des `pictureInPictureElement` Attributs des [`document`](/de/docs/Web/API/Document).

- Wenn der Wert `null` ist, ist kein Video in einem schwebenden Fenster, sodass wir das Video bitten können, in den Picture-in-Picture-Modus zu wechseln. Dies tun wir, indem wir [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) auf dem {{HTMLElement("video")}}-Element aufrufen.
- Wenn der Wert nicht `null` ist, befindet sich ein Element derzeit im Picture-in-Picture-Modus. Wir können dann [`document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture) aufrufen, um das Video zurück in seinen ursprünglichen Bereich zu bringen und den Picture-in-Picture-Modus zu verlassen.

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

Das Klicken auf den "Toggle PiP"-Button ermöglicht es dem Benutzer, zwischen der Wiedergabe des Videos auf der Seite und in einem schwebenden Fenster zu wechseln:

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
