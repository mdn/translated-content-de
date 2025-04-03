---
title: Picture-in-Picture API
slug: Web/API/Picture-in-Picture_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Picture-in-Picture API")}}

Die **Picture-in-Picture API** ermöglicht es Websites, ein schwebendes, immer im Vordergrund bleibendes Videofenster zu erstellen. Dadurch können Nutzer Medien weiter konsumieren, während sie mit anderen Websites oder Anwendungen auf ihrem Gerät interagieren.

> [!NOTE]
> Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) erweitert die Picture-in-Picture API, um das immer im Vordergrund befindliche Fenster mit _beliebigem_ HTML-Inhalt zu füllen, nicht nur mit einem Video.

## Schnittstellen

- [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow)
  - : Repräsentiert das schwebende Videofenster; enthält die Eigenschaften [`width`](/de/docs/Web/API/PictureInPictureWindow/width) und [`height`](/de/docs/Web/API/PictureInPictureWindow/height) sowie eine [`onresize`](/de/docs/Web/API/PictureInPictureWindow/resize_event)-Ereignisbehandler-Eigenschaft.
- [`PictureInPictureEvent`](/de/docs/Web/API/PictureInPictureEvent)
  - : Repräsentiert Ereignisse im Zusammenhang mit Picture-in-Picture, einschließlich [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event), [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event) und [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event).

## Instanzmethoden

Die Picture-in-Picture API fügt den Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`Document`](/de/docs/Web/API/Document) Methoden hinzu, um das schwebende Videofenster umzuschalten.

### Instanzmethoden auf der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
  - : Fordert den User-Agent auf, das Video in den Picture-in-Picture-Modus zu versetzen.

### Instanzmethoden auf der Document-Schnittstelle

- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
  - : Fordert den User-Agent auf, das Element im Picture-in-Picture-Modus zurück in seinen ursprünglichen Bereich zu versetzen.

## Instanzeigenschaften

Die Picture-in-Picture API erweitert die Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`Document`](/de/docs/Web/API/Document) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) um Eigenschaften, die verwendet werden können, um festzustellen, ob der schwebende Videofenstermodus unterstützt und verfügbar ist, ob der Bild-im-Bild-Modus momentan aktiv ist und welches Video schwebt.

### Instanzeigenschaften auf der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
  - : Die `disablePictureInPicture`-Eigenschaft gibt dem User-Agent einen Hinweis darauf, dass dem Nutzer das Picture-in-Picture nicht vorgeschlagen oder automatisch angefordert werden soll.

### Instanzeigenschaften auf der Document-Schnittstelle

- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled)
  - : Die `pictureInPictureEnabled`-Eigenschaft sagt Ihnen, ob es möglich ist, den Bild-im-Bild-Modus zu aktivieren. Dies ist `false`, wenn der Bild-im-Bild-Modus aus irgendeinem Grund nicht verfügbar ist (z.B., das [`"picture-in-picture"`-Feature](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/picture-in-picture) wurde verboten oder der Bild-im-Bild-Modus wird nicht unterstützt).

### Instanzeigenschaften auf den Document- oder ShadowRoot-Schnittstellen

- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement) / [`ShadowRoot.pictureInPictureElement`](/de/docs/Web/API/ShadowRoot/pictureInPictureElement)
  - : Die `pictureInPictureElement`-Eigenschaft sagt Ihnen, welches [`Element`](/de/docs/Web/API/Element) momentan im schwebenden Fenster (oder im Shadow-DOM) angezeigt wird. Wenn dies `null` ist, hat das Dokument (oder das Shadow-DOM) keinen Knoten, der derzeit im Picture-in-Picture-Modus ist.

## Ereignisse

_Die Picture-in-Picture API definiert drei Ereignisse, die verwendet werden können, um zu erkennen, wann der Bild-im-Bild-Modus umgeschaltet wird und wann das schwebende Videofenster seine Größe ändert._

- [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es in den Bild-im-Bild-Modus wechselt.
- [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es den Bild-im-Bild-Modus verlässt.
- [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event)
  - : Wird an ein [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow) gesendet, wenn es seine Größe ändert.

## Hinzufügen von Steuerungen

Wenn Medienaktionshandler über die [Media Session API](/de/docs/Web/API/Media_Session_API) gesetzt wurden, dann werden geeignete Steuerungen für diese Aktionen vom Browser zur Bild-im-Bild-Überlagerung hinzugefügt. Zum Beispiel, wenn eine `"nexttrack"`-Aktion gesetzt wurde, könnte ein Überspringen-Button im Bild-im-Bild-Modus angezeigt werden. Es gibt keine Unterstützung für das Hinzufügen von benutzerdefinierten HTML-Buttons oder -Steuerungen.

## Steuerung der Gestaltung

Die [`:picture-in-picture`](/de/docs/Web/CSS/:picture-in-picture) [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) stimmt mit dem Videoelement überein, das sich momentan im Bild-im-Bild-Modus befindet, und ermöglicht es Ihnen, Ihre Stylesheets so zu konfigurieren, dass die Größe, der Stil oder das Layout von Inhalten automatisch angepasst wird, wenn ein Video zwischen Bild-im-Bild- und traditionellem Präsentationsmodus wechselt.

## Steuerung des Zugriffs

Die Verfügbarkeit des Bild-im-Bild-Modus kann mit den [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden. Die Bild-im-Bild-Modus-Funktion wird durch den String `"picture-in-picture"` identifiziert, mit einem Standard-Zulassungslistenwert von `*`, was bedeutet, dass der Bild-im-Bild-Modus in obersten Dokumentkontexten sowie in eingebetteten Browserkontexten, die aus demselben Ursprung wie das oberste Dokument geladen wurden, erlaubt ist.

## Beispiele

In diesem Beispiel wird ein Video auf einer Webseite präsentiert. Durch Klicken auf den Button unten kann der Nutzer das schwebende Videofenster umschalten.

{{EmbedGHLiveSample("dom-examples/picture-in-picture/index.html", '100%', 350)}}

### Umschalten des Bild-im-Bild-Modus

Dieser Code wird von einem Klick-Handler aufgerufen, wenn der Nutzer auf die Schaltfläche "Bild-im-Bild umschalten" klickt:

```js
function togglePictureInPicture() {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else if (document.pictureInPictureEnabled) {
    video.requestPictureInPicture();
  }
}
```

Dieser Block beginnt damit, den Wert der `pictureInPictureElement`-Eigenschaft des [`document`](/de/docs/Web/API/Document) anzusehen.

Wenn der Wert nicht `null` ist, ist es das Element, das momentan im Bild-im-Bild-Modus ist, das sich in einem schwebenden Fenster befindet. Wir rufen [`document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture) auf, um das Video zurück in seine ursprüngliche Box zu bringen.

Wenn der Wert `null` ist, befindet sich kein Video im schwebenden Fenster. So können wir ein Video anfordern, um in den Bild-im-Bild-Modus zu wechseln. Wir tun dies, indem wir [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) auf dem {{HTMLElement("video")}}-Element aufrufen.

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
