---
title: Picture-in-Picture API
slug: Web/API/Picture-in-Picture_API
l10n:
  sourceCommit: 74c92544977217347d3c461f9386bb2d32cdf99d
---

{{DefaultAPISidebar("Picture-in-Picture API")}}

Die **Picture-in-Picture API** erlaubt es Websites, ein schwebendes, immer im Vordergrund stehendes Videofenster zu erstellen. Dadurch können Nutzer Medien weiterhin konsumieren, während sie mit anderen Websites oder Anwendungen auf ihrem Gerät interagieren.

> [!NOTE]
> Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) erweitert die Picture-in-Picture API, um das immer im Vordergrund stehende Fenster mit _beliebigem_ HTML-Inhalt zu füllen, nicht nur mit einem Video.

> [!NOTE]
> Sie können Code ausführen, wenn das immer im Vordergrund stehende Fenster programmgesteuert geöffnet wird, indem Sie das [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)-Ereignis verwenden. Dieses Ereignis wird jedoch nicht ausgelöst, wenn der Browser selbst (anstelle Ihres Codes) das Verschieben von Inhalten in das immer im Vordergrund stehende Fenster veranlasst. Dies kann beispielsweise auftreten, wenn der Inhalt verdeckt wird, die angezeigte Registerkarte gewechselt wird oder der Nutzer eine "Picture-in-Picture"-Option aus dem Kontextmenü eines Videos oder dem Browser chrome auswählt.
>
> Um Code als Reaktion auf solche Aktionen auszuführen, richten Sie einen Media-Session-Aktionshandler ein, indem Sie [`MediaSession.setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler) mit einem `type` von `enterpictureinpicture` verwenden.

## Schnittstellen

- [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow)
  - : Repräsentiert das schwebende Videofenster; enthält die Eigenschaften [`width`](/de/docs/Web/API/PictureInPictureWindow/width) und [`height`](/de/docs/Web/API/PictureInPictureWindow/height) sowie eine [`onresize`](/de/docs/Web/API/PictureInPictureWindow/resize_event)-Ereignishandler-Eigenschaft.
- [`PictureInPictureEvent`](/de/docs/Web/API/PictureInPictureEvent)
  - : Repräsentiert ereignisbezogene Ereignisse für Picture-in-Picture, einschließlich [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event), [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event) und [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event).

## Methodeninstanzen

Die Picture-in-Picture API fügt den Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`Document`](/de/docs/Web/API/Document) Methoden hinzu, um das schwebende Videofenster ein- oder auszuschalten.

### Methodeninstanzen auf der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
  - : Fordert den Nutzeragenten auf, das Video in den Picture-in-Picture-Modus zu versetzen

### Methodeninstanzen auf der Document-Schnittstelle

- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
  - : Fordert den Nutzeragenten auf, das Element im Picture-in-Picture-Modus zurück in seinen ursprünglichen Rahmen zu bringen.

## Instanzeigenschaften

Die Picture-in-Picture API erweitert die Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`Document`](/de/docs/Web/API/Document), und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) mit Eigenschaften, die verwendet werden können, um zu bestimmen, ob der schwebende Videofenstermodus unterstützt und verfügbar ist, ob der Picture-in-Picture-Modus derzeit aktiv ist, und welches Video schwebt.

### Instanzeigenschaften auf der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
  - : Die Eigenschaft `disablePictureInPicture` gibt einen Hinweis an den Nutzeragenten, die Picture-in-Picture-Funktion den Nutzern nicht vorzuschlagen oder sie automatisch anzufordern.

### Instanzeigenschaften auf der Document-Schnittstelle

- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled)
  - : Die Eigenschaft `pictureInPictureEnabled` gibt an, ob es möglich ist, den Picture-in-Picture-Modus zu aktivieren. Dies ist `false`, wenn der Picture-in-Picture-Modus aus irgendeinem Grund nicht verfügbar ist (z.B. wurde die Funktion [`"picture-in-picture"`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/picture-in-picture) nicht erlaubt, oder der Picture-in-Picture-Modus wird nicht unterstützt).

### Instanzeigenschaften auf den Document- oder ShadowRoot-Schnittstellen

- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement) / [`ShadowRoot.pictureInPictureElement`](/de/docs/Web/API/ShadowRoot/pictureInPictureElement)
  - : Die Eigenschaft `pictureInPictureElement` teilt Ihnen mit, welches [`Element`](/de/docs/Web/API/Element) derzeit im schwebenden Fenster (oder im Shadow DOM) angezeigt wird. Wenn dieser Wert `null` ist, hat das Dokument (oder das Shadow DOM) derzeit keinen Knoten im Picture-in-Picture-Modus.

## Ereignisse

_Die Picture-in-Picture API definiert drei Ereignisse, die verwendet werden können, um zu erkennen, wann der Picture-in-Picture-Modus ein- oder ausgeschaltet wird und wann das schwebende Videofenster seine Größe ändert._

- [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es in den Picture-in-Picture-Modus wechselt.
- [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es den Picture-in-Picture-Modus verlässt.
- [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event)
  - : Wird an ein [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow) gesendet, wenn es seine Größe ändert.

## Hinzufügen von Steuerungen

Wenn Medienaktionshandler über die [Media Session API](/de/docs/Web/API/Media_Session_API) eingerichtet wurden, dann werden die entsprechenden Steuerungen für diese Aktionen vom Browser in die Picture-in-Picture-Überlagerung hinzugefügt. Wenn beispielsweise eine `"nexttrack"`-Aktion gesetzt wurde, könnte eine Überspringen-Taste in der Picture-in-Picture-Ansicht angezeigt werden. Es gibt keine Unterstützung für das Hinzufügen benutzerdefinierter HTML-Schaltflächen oder -Steuerungen.

## Steuerung des Stylings

Die {{cssxref(":picture-in-picture")}} [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) stimmt mit dem derzeit im Picture-in-Picture-Modus befindlichen Videoelement überein, wodurch Sie Ihre Stylesheets so konfigurieren können, dass Größe, Stil oder Layout des Inhalts automatisch angepasst werden, wenn ein Video zwischen Picture-in-Picture und herkömmlichen Präsentationsmodi wechselt.

## Steuerung des Zugriffs

Die Verfügbarkeit des Picture-in-Picture-Modus kann mit der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden. Die Picture-in-Picture-Modus-Funktion wird durch den String `"picture-in-picture"` identifiziert, mit einem Standardwert der Erlaubtenliste von `*`, was bedeutet, dass der Picture-in-Picture-Modus in obersten Dokumentkontexten sowie in eingebetteten Browsing-Kontexten, die von derselben Quelle wie das oberste Dokument geladen werden, erlaubt ist.

## Beispiele

### Umschalten des Picture-in-Picture-Modus

In diesem Beispiel haben wir ein {{HTMLElement("video")}}-Element auf einer Webseite, ein {{HTMLElement("button")}}, um Picture-in-Picture umzuschalten, und ein Element, um Informationen zu protokollieren, die für das Beispiel relevant sind.
Das {{HTMLElement("button")}}-Element ist initial `deaktiviert`, bis wir die Unterstützung des Browsers festgestellt haben.

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

Zuerst überprüfen wir, ob der Browser PiP mit `document.pictureInPictureEnabled` unterstützt, und wenn es nicht unterstützt wird, protokollieren wir diese Information im `<pre>`-Element.
Wenn es im Browser verfügbar ist, können wir das Umschalten zum Ein- und Austreten des PiP aktivieren.

Für die Steuerungen ruft ein Ereignislistener auf dem {{HTMLElement("button")}}-Element eine von uns definierte `togglePictureInPicture()`-Funktion auf.
In `togglePictureInPicture()` überprüft eine `if`-Anweisung den Wert des Attributs `pictureInPictureElement` des [`document`](/de/docs/Web/API/Document).

- Wenn der Wert `null` ist, befindet sich kein Video in einem schwebenden Fenster, daher können wir das Video anfordern, um in den Picture-in-Picture-Modus zu wechseln.
  Wir tun dies, indem wir [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) auf dem {{HTMLElement("video")}}-Element aufrufen.
- Wenn der Wert nicht `null` ist, befindet sich derzeit ein Element im Picture-in-Picture-Modus.
  Dann können wir [`document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture) aufrufen, um das Video zurück in seinen ursprünglichen Kasten zu holen und den Picture-in-Picture-Modus zu verlassen.

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

Durch Klicken auf die "Toggle PiP"-Schaltfläche kann der Nutzer zwischen der Wiedergabe des Videos auf der Seite und in einem schwebenden Fenster umschalten:

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
