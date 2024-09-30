---
title: Picture-in-Picture API
slug: Web/API/Picture-in-Picture_API
l10n:
  sourceCommit: bb4d21e3c6e71db4e0ba983a450d6ed628e82670
---

{{DefaultAPISidebar("Picture-in-Picture API")}}

Die **Picture-in-Picture-API** ermöglicht es Websites, ein schwebendes, immer im Vordergrund stehendes Videofenster zu erstellen. Dies erlaubt es den Benutzern, Medien weiter zu konsumieren, während sie mit anderen Seiten oder Anwendungen auf ihrem Gerät interagieren.

> [!NOTE]
> Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) erweitert die Picture-in-Picture-API, um das immer im Vordergrund stehende Fenster mit beliebigem HTML-Inhalt zu füllen, nicht nur mit einem Video.

## Schnittstellen

- [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow)
  - : Repräsentiert das schwebende Videofenster; enthält die Eigenschaften [`width`](/de/docs/Web/API/PictureInPictureWindow/width) und [`height`](/de/docs/Web/API/PictureInPictureWindow/height) sowie eine [`onresize`](/de/docs/Web/API/PictureInPictureWindow/resize_event)-Ereignishandler-Eigenschaft.
- [`PictureInPictureEvent`](/de/docs/Web/API/PictureInPictureEvent)
  - : Repräsentiert ereignisse im Zusammenhang mit Picture-in-Picture, einschließlich [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event), [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event) und [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event).

## Instanzmethoden

Die Picture-in-Picture-API fügt Methoden zu den Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`Document`](/de/docs/Web/API/Document) hinzu, um das Umschalten des schwebenden Videofensters zu ermöglichen.

### Instanzmethoden auf der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
  - : Fordert den Benutzeragenten auf, das Video in den Picture-in-Picture-Modus zu versetzen.

### Instanzmethoden auf der Document-Schnittstelle

- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
  - : Fordert den Benutzeragenten auf, das Element im Picture-in-Picture-Modus zurück in seinen ursprünglichen Bereich zu bringen.

## Instanzeigenschaften

Die Picture-in-Picture-API erweitert die Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`Document`](/de/docs/Web/API/Document) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) mit Eigenschaften, die verwendet werden können, um festzustellen, ob der schwebende Videofenstermodus unterstützt und verfügbar ist, ob der Picture-in-Picture-Modus derzeit aktiv ist und welches Video schwebt.

### Instanzeigenschaften auf der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
  - : Die `disablePictureInPicture`-Eigenschaft gibt dem Benutzeragenten einen Hinweis, das Picture-in-Picture den Benutzern nicht vorzuschlagen oder es automatisch anzufordern.

### Instanzeigenschaften auf der Document-Schnittstelle

- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled)
  - : Die `pictureInPictureEnabled`-Eigenschaft teilt Ihnen mit, ob es möglich ist, den Picture-in-Picture-Modus zu aktivieren. Dies ist `false`, wenn der Picture-in-Picture-Modus aus irgendeinem Grund nicht verfügbar ist (z.B. wenn die [`"picture-in-picture"`-Funktion](/de/docs/Web/HTTP/Headers/Permissions-Policy/picture-in-picture) nicht erlaubt wurde oder der Picture-in-Picture-Modus nicht unterstützt wird).

### Instanzeigenschaften auf den Document- oder ShadowRoot-Schnittstellen

- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement) / [`ShadowRoot.pictureInPictureElement`](/de/docs/Web/API/ShadowRoot/pictureInPictureElement)
  - : Die `pictureInPictureElement`-Eigenschaft teilt Ihnen mit, welches [`Element`](/de/docs/Web/API/Element) derzeit im schwebenden Fenster angezeigt wird (oder im Shadow-DOM). Wenn dies `null` ist, hat das Dokument (oder das Shadow-DOM) derzeit keinen Knoten im Picture-in-Picture-Modus.

## Ereignisse

_Die Picture-in-Picture-API definiert drei Ereignisse, die verwendet werden können, um zu erkennen, wann der Picture-in-Picture-Modus umgeschaltet wird und wann das schwebende Videofenster seine Größe ändert._

- [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es in den Picture-in-Picture-Modus wechselt.
- [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es den Picture-in-Picture-Modus verlässt.
- [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event)
  - : Wird an ein [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow) gesendet, wenn sich seine Größe ändert.

## Hinzufügen von Steuerelementen

Wenn Medienaktions-Handler über die [Media Session API](/de/docs/Web/API/Media_Session_API) festgelegt wurden, werden die entsprechenden Steuerelemente für diese Aktionen vom Browser zur Picture-in-Picture-Überlagerung hinzugefügt. Wenn beispielsweise eine `"nexttrack"`-Aktion festgelegt wurde, könnte ein Überspringen-Knopf im Picture-in-Picture-Modus angezeigt werden. Es gibt keine Unterstützung für das Hinzufügen benutzerdefinierter HTML-Schaltflächen oder Steuerelemente.

## Steuerung der Stilgebung

Die [`:picture-in-picture`](/de/docs/Web/CSS/:picture-in-picture) [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) entspricht dem Video-Element, das sich derzeit im Picture-in-Picture-Modus befindet, sodass Sie Ihre Stylesheets so konfigurieren können, dass Größe, Stil oder Layout von Inhalten automatisch angepasst werden, wenn ein Video zwischen dem Picture-in-Picture- und dem traditionellen Präsentationsmodus wechselt.

## Kontrolle des Zugriffs

Die Verfügbarkeit des Picture-in-Picture-Modus kann mithilfe der [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) gesteuert werden. Die Picture-in-Picture-Modus-Funktion wird durch den String `"picture-in-picture"` identifiziert, mit einem Standard-Erlaubnislistenwert von `*`, was bedeutet, dass der Picture-in-Picture-Modus in Top-Level-Dokument-Kontexten sowie in geschachtelten Browsing-Kontexten, die von demselben Ursprung wie das oberste Dokument geladen werden, erlaubt ist.

## Beispiele

In diesem Beispiel wird ein Video auf einer Webseite präsentiert. Mit dem Klick auf die Schaltfläche unten kann der Benutzer das schwebende Videofenster umschalten.

{{EmbedGHLiveSample("dom-examples/picture-in-picture/index.html", '100%', 350)}}

### Umschalten des Picture-in-Picture-Modus

Dieser Code wird von einem Klick-Handler aufgerufen, wenn der Benutzer auf die Schaltfläche "Toggle Picture-in-Picture" klickt:

```js
function togglePictureInPicture() {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else if (document.pictureInPictureEnabled) {
    video.requestPictureInPicture();
  }
}
```

Dieser Block beginnt damit, den Wert des Attributs `pictureInPictureElement` des [`document`](/de/docs/Web/API/Document) zu betrachten.

Wenn der Wert nicht `null` ist, ist es das Element, das sich derzeit im Picture-in-Picture-Modus befindet, also in einem schwebenden Fenster. Wir rufen [`document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture) auf, um das Video zurück in seinen ursprünglichen Bereich zu bringen.

Wenn der Wert `null` ist, befindet sich kein Video im schwebenden Fenster. Daher können wir ein Video anfordern, in den Picture-in-Picture-Modus zu wechseln. Wir tun dies, indem wir [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) auf dem {{HTMLElement("video")}}-Element aufrufen.

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
