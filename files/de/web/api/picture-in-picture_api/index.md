---
title: Picture-in-Picture API
slug: Web/API/Picture-in-Picture_API
l10n:
  sourceCommit: 645ffab942bbaeadcc325dcaad6953c0d4fc26c4
---

{{DefaultAPISidebar("Picture-in-Picture API")}}

Die **Picture-in-Picture API** ermöglicht es Websites, ein schwebendes, immer im Vordergrund stehendes Videofenster zu erstellen. Dies erlaubt es den Nutzern, weiterhin Medien zu konsumieren, während sie mit anderen Websites oder Anwendungen auf ihrem Gerät interagieren.

> [!NOTE]
> Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) erweitert die Picture-in-Picture API, um zu ermöglichen, dass das immer im Vordergrund stehende Fenster mit _beliebigem_ HTML-Inhalt gefüllt wird, nicht nur mit einem Video.

## Schnittstellen

- [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow)
  - : Repräsentiert das schwebende Videofenster; enthält die Eigenschaften [`width`](/de/docs/Web/API/PictureInPictureWindow/width) und [`height`](/de/docs/Web/API/PictureInPictureWindow/height) sowie eine [`onresize`](/de/docs/Web/API/PictureInPictureWindow/resize_event) Event-Handler-Eigenschaft.
- [`PictureInPictureEvent`](/de/docs/Web/API/PictureInPictureEvent)
  - : Repräsentiert ereignisbezogene Ereignisse im Bild-im-Bild-Modus, einschließlich [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event), [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event) und [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event).

## Instanzmethoden

Die Picture-in-Picture API fügt den Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`Document`](/de/docs/Web/API/Document) Methoden hinzu, um das schwebende Videofenster ein- und auszuschalten.

### Instanzmethoden der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
  - : Fordert den User-Agent auf, das Video in den Bild-im-Bild-Modus zu versetzen.

### Instanzmethoden der Document-Schnittstelle

- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
  - : Fordert den User-Agent auf, das im Bild-im-Bild-Modus befindliche Element zurück in seinen ursprünglichen Kasten zurückzugeben.

## Instanzeigenschaften

Die Picture-in-Picture API erweitert die Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`Document`](/de/docs/Web/API/Document) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) mit Eigenschaften, die verwendet werden können, um festzustellen, ob der Modus des schwebenden Videofensters unterstützt und verfügbar ist, ob der Bild-im-Bild-Modus derzeit aktiv ist und welches Video schwebt.

### Instanzeigenschaften der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
  - : Die `disablePictureInPicture`-Eigenschaft gibt dem User-Agent einen Hinweis, den Bild-im-Bild-Modus den Nutzern nicht vorzuschlagen oder automatisch anzufordern.

### Instanzeigenschaften der Document-Schnittstelle

- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled)
  - : Die `pictureInPictureEnabled`-Eigenschaft zeigt an, ob es möglich ist, den Bild-im-Bild-Modus zu aktivieren. Dies ist `false`, wenn der Bild-im-Bild-Modus aus irgendeinem Grund nicht verfügbar ist (z.B. wenn das [`"picture-in-picture"`-Feature](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/picture-in-picture) nicht erlaubt wurde oder der Modus nicht unterstützt wird).

### Instanzeigenschaften der Document- oder ShadowRoot-Schnittstellen

- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement) / [`ShadowRoot.pictureInPictureElement`](/de/docs/Web/API/ShadowRoot/pictureInPictureElement)
  - : Die `pictureInPictureElement`-Eigenschaft gibt an, welches [`Element`](/de/docs/Web/API/Element) derzeit im schwebenden Fenster (oder im Shadow DOM) angezeigt wird. Ist dies `null`, hat das Dokument (oder das Shadow DOM) derzeit keinen Knoten im Bild-im-Bild-Modus.

## Ereignisse

_Die Picture-in-Picture API definiert drei Ereignisse, die verwendet werden können, um zu erkennen, wann der Bild-im-Bild-Modus umgeschaltet wird und wann das schwebende Videofenster die Größe ändert._

- [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es in den Bild-im-Bild-Modus wechselt.
- [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es den Bild-im-Bild-Modus verlässt.
- [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event)
  - : Wird an ein [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow) gesendet, wenn es die Größe ändert.

## Hinzufügen von Steuerelementen

Wenn Medienaktions-Handler über die [Media Session API](/de/docs/Web/API/Media_Session_API) gesetzt wurden, werden vom Browser entsprechende Steuerelemente für diese Aktionen zum Bild-im-Bild-Overlay hinzugefügt. Wenn beispielsweise eine `"nexttrack"`-Aktion gesetzt wurde, könnte in der Bild-im-Bild-Ansicht eine Überspringen-Schaltfläche angezeigt werden. Es gibt keine Unterstützung für das Hinzufügen benutzerdefinierter HTML-Schaltflächen oder Steuerungen.

## Steuerung der Gestaltung

Die [`:picture-in-picture`](/de/docs/Web/CSS/:picture-in-picture) [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) stimmt mit dem Videoelement überein, das sich derzeit im Bild-im-Bild-Modus befindet, sodass Sie Ihre Stylesheets so konfigurieren können, dass Größe, Stil oder Layout des Inhalts automatisch angepasst werden, wenn ein Video zwischen Bild-im-Bild- und traditionellem Präsentationsmodus wechselt.

## Steuerung des Zugriffs

Die Verfügbarkeit des Bild-im-Bild-Modus kann mithilfe der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden. Das Bild-im-Bild-Modus-Feature wird durch den String `"picture-in-picture"` identifiziert, mit einem standardmäßigen Allowlist-Wert von `*`, was bedeutet, dass der Bild-im-Bild-Modus in obersten Dokumentenkontexten sowie in verschachtelten Browsing-Kontexten, die aus dem gleichen Ursprung wie das oberste Dokument geladen wurden, erlaubt ist.

## Beispiele

### Umschalten des Bild-im-Bild-Modus

In diesem Beispiel haben wir ein {{HTMLElement("video")}}-Element auf einer Webseite, einen {{HTMLElement("button")}} zum Umschalten des Bild-im-Bild-Modus und ein Element, um Informationen zu protokollieren, die für das Beispiel relevant sind. Das {{HTMLElement("button")}}-Element ist zunächst `disabled`, bis wir die Browserunterstützung ermittelt haben.

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

Wir prüfen zuerst, ob der Browser PiP mit `document.pictureInPictureEnabled` unterstützt. Wenn es nicht unterstützt wird, protokollieren wir diese Information im `<pre>`-Element. Wenn es im Browser verfügbar ist, können wir das Umschalten zum Ein- und Aussteigen in PiP aktivieren.

Für die Steuerelemente ruft ein Ereignis-Listener am {{HTMLElement("button")}}-Element eine Funktion `togglePictureInPicture()` auf, die wir definiert haben. In `togglePictureInPicture()` prüft eine `if`-Anweisung den Wert des `pictureInPictureElement`-Attributes des [`document`](/de/docs/Web/API/Document).

- Wenn der Wert `null` ist, ist kein Video in einem schwebenden Fenster, sodass wir das Video anfordern können, in den Bild-im-Bild-Modus einzutreten. Das tun wir, indem wir [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) am {{HTMLElement("video")}}-Element aufrufen.
- Wenn der Wert nicht `null` ist, befindet sich derzeit ein Element im Bild-im-Bild-Modus. Wir können dann [`document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture) aufrufen, um das Video zurück in seinen ursprünglichen Kasten zu bringen und den Bild-im-Bild-Modus zu beenden.

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

Das Klicken auf die "Toggle PiP"-Schaltfläche ermöglicht es dem Nutzer, zwischen dem Abspielen des Videos auf der Seite und in einem schwebenden Fenster umzuschalten:

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
