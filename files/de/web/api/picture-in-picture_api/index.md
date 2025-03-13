---
title: Picture-in-Picture API
slug: Web/API/Picture-in-Picture_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Picture-in-Picture API")}}

Die **Bild-in-Bild-API** ermöglicht es Websites, ein schwebendes, immer im Vordergrund befindliches Videofenster zu erstellen. Dies erlaubt es den Nutzern, Medien weiter zu konsumieren, während sie mit anderen Websites oder Anwendungen auf ihrem Gerät interagieren.

> [!NOTE]
> Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) erweitert die Bild-in-Bild-API, um das immer im Vordergrund befindliche Fenster mit beliebigem HTML-Inhalt zu füllen, nicht nur mit einem Video.

## Schnittstellen

- [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow)
  - : Repräsentiert das schwebende Videofenster; enthält die Eigenschaften [`width`](/de/docs/Web/API/PictureInPictureWindow/width) und [`height`](/de/docs/Web/API/PictureInPictureWindow/height) sowie eine [`onresize`](/de/docs/Web/API/PictureInPictureWindow/resize_event)-Ereignisbehandlungseigenschaft.
- [`PictureInPictureEvent`](/de/docs/Web/API/PictureInPictureEvent)
  - : Repräsentiert ereignisbezogene Bild-in-Bild-Ereignisse, einschließlich [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event), [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event) und [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event).

## Instanzmethoden

Die Bild-in-Bild-API fügt den Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`Document`](/de/docs/Web/API/Document) Methoden hinzu, um das schwebende Videofenster ein- und auszuschalten.

### Instanzmethoden auf der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
  - : Fordert an, dass der Benutzeragent das Video in den Bild-in-Bild-Modus versetzt.

### Instanzmethoden auf der Document-Schnittstelle

- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
  - : Fordert an, dass der Benutzeragent das Element im Bild-in-Bild-Modus zurück in seine ursprüngliche Box bringt.

## Instanzeigenschaften

Die Bild-in-Bild-API erweitert die Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`Document`](/de/docs/Web/API/Document) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) um Eigenschaften, die dazu verwendet werden können, um zu bestimmen, ob der schwebende Videofenstermodus unterstützt und verfügbar ist, ob der Bild-in-Bild-Modus momentan aktiv ist und welches Video schwebt.

### Instanzeigenschaften auf der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
  - : Die `disablePictureInPicture`-Eigenschaft gibt dem Benutzeragent einen Hinweis, das Bild-in-Bild nicht den Benutzern vorzuschlagen oder es automatisch anzufordern.

### Instanzeigenschaften auf der Document-Schnittstelle

- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled)
  - : Die `pictureInPictureEnabled`-Eigenschaft gibt an, ob es möglich ist, den Bild-in-Bild-Modus zu aktivieren oder nicht. Dies ist `false`, wenn der Bild-in-Bild-Modus aus irgendeinem Grund nicht verfügbar ist (z.B. wurde die [`"picture-in-picture"`-Funktion](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/picture-in-picture) untersagt oder der Bild-in-Bild-Modus wird nicht unterstützt).

### Instanzeigenschaften auf den Document- oder ShadowRoot-Schnittstellen

- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement) / [`ShadowRoot.pictureInPictureElement`](/de/docs/Web/API/ShadowRoot/pictureInPictureElement)
  - : Die `pictureInPictureElement`-Eigenschaft gibt an, welches [`Element`](/de/docs/Web/API/Element) derzeit im schwebenden Fenster (oder im Shadow-DOM) angezeigt wird. Ist dieser Wert `null`, gibt es im Dokument (oder im Shadow-DOM) keinen Knoten im Bild-in-Bild-Modus.

## Ereignisse

_Die Bild-in-Bild-API definiert drei Ereignisse, die verwendet werden können, um zu erkennen, wann der Bild-in-Bild-Modus umgeschaltet wird und wann das schwebende Videofenster die Größe ändert._

- [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es in den Bild-in-Bild-Modus wechselt.
- [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es den Bild-in-Bild-Modus verlässt.
- [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event)
  - : Wird an ein [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow) gesendet, wenn es die Größe ändert.

## Steuerung hinzufügen

Wenn Medienaktionshandler über die [Media Session API](/de/docs/Web/API/Media_Session_API) festgelegt wurden, dann fügt der Browser geeignete Steuerelemente für diese Aktionen dem Bild-in-Bild-Overlay hinzu. Zum Beispiel, wenn eine `"nexttrack"`-Aktion festgelegt wurde, könnte im Bild-in-Bild-Ansicht eine Schaltfläche zum Überspringen angezeigt werden. Es gibt keine Unterstützung für das Hinzufügen von benutzerdefinierten HTML-Schaltflächen oder -Steuerelementen.

## Styling steuern

Die [`:picture-in-picture`](/de/docs/Web/CSS/:picture-in-picture) [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) passt das Videoelement an, das aktuell im Bild-in-Bild-Modus ist, und ermöglicht es Ihnen, Ihre Stylesheets so zu konfigurieren, dass sie automatisch die Größe, den Stil oder das Layout von Inhalten anpassen, wenn ein Video zwischen Bild-in-Bild- und traditionellem Präsentationsmodus wechselt.

## Zugriff steuern

Die Verfügbarkeit des Bild-in-Bild-Modus kann mit [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden. Die Bild-in-Bild-Modus-Funktion wird durch den String `"picture-in-picture"` identifiziert, mit einem Standarderlaubniswert von `*`, was bedeutet, dass der Bild-in-Bild-Modus sowohl im obersten Dokumentkontext als auch in verschachtelten Browsing-Kontexten erlaubt ist, die aus derselben Herkunft wie das oberste Dokument geladen werden.

## Beispiele

In diesem Beispiel wird ein Video auf einer Webseite präsentiert. Durch Klicken auf die Schaltfläche unten kann der Benutzer das schwebende Videofenster umschalten.

{{EmbedGHLiveSample("dom-examples/picture-in-picture/index.html", '100%', 350)}}

### Umschalten des Bild-in-Bild-Modus

Dieser Code wird von einem Klick-Handler aufgerufen, wenn der Benutzer auf die Schaltfläche "Bild-in-Bild umschalten" klickt:

```js
function togglePictureInPicture() {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else if (document.pictureInPictureEnabled) {
    video.requestPictureInPicture();
  }
}
```

Dieser Block beginnt damit, den Wert des Attributs `pictureInPictureElement` des [`document`](/de/docs/Web/API/Document) zu überprüfen.

Wenn der Wert nicht `null` ist, ist es das Element, das sich derzeit im Bild-in-Bild-Modus befindet, also in einem schwebenden Fenster. Wir rufen [`document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture) auf, um das Video in seine ursprüngliche Box zurückzubringen.

Wenn der Wert `null` ist, befindet sich kein Video im schwebenden Fenster. Daher können wir ein Video anfordern, in den Bild-in-Bild-Modus zu wechseln. Dies tun wir, indem wir [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) auf das {{HTMLElement("video")}}-Element aufrufen.

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
