---
title: Picture-in-Picture API
slug: Web/API/Picture-in-Picture_API
l10n:
  sourceCommit: bb4d21e3c6e71db4e0ba983a450d6ed628e82670
---

{{DefaultAPISidebar("Picture-in-Picture API")}}

Die **Picture-in-Picture API** ermöglicht es Websites, ein schwebendes, immer im Vordergrund befindliches Videofenster zu erstellen. Dadurch können Nutzer Medien weiterhin konsumieren, während sie mit anderen Websites oder Anwendungen auf ihrem Gerät interagieren.

> [!NOTE]
> Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) erweitert die Picture-in-Picture API, um das Fenster mit beliebigem HTML-Inhalt zu füllen, nicht nur mit einem Video.

## Schnittstellen

- [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow)
  - : Repräsentiert das schwebende Videofenster; enthält Eigenschaften für [`width`](/de/docs/Web/API/PictureInPictureWindow/width) und [`height`](/de/docs/Web/API/PictureInPictureWindow/height) sowie eine Ereignisbehandlungseigenschaft [`onresize`](/de/docs/Web/API/PictureInPictureWindow/resize_event).
- [`PictureInPictureEvent`](/de/docs/Web/API/PictureInPictureEvent)
  - : Repräsentiert ereignisbezogene Ereignisse für Picture-in-Picture, einschließlich [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event), [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event) und [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event).

## Instanzmethoden

Die Picture-in-Picture API fügt den Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`Document`](/de/docs/Web/API/Document) Methoden hinzu, um das schwebende Videofenster umzuschalten.

### Instanzmethoden auf der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
  - : Fordert den Benutzeragenten auf, das Video in den Picture-in-Picture-Modus zu versetzen.

### Instanzmethoden auf der Document-Schnittstelle

- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
  - : Fordert den Benutzeragenten auf, das Element im Picture-in-Picture-Modus in seinen ursprünglichen Rahmen zurückzubringen.

## Instanzeigenschaften

Die Picture-in-Picture API erweitert die Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`Document`](/de/docs/Web/API/Document) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) mit Eigenschaften, die verwendet werden können, um festzustellen, ob der Modus des schwebenden Videofensters unterstützt und verfügbar ist, ob der Picture-in-Picture-Modus gerade aktiv ist und welches Video schwebt.

### Instanzeigenschaften auf der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
  - : Die Eigenschaft `disablePictureInPicture` gibt dem Benutzeragenten einen Hinweis, das Picture-in-Picture den Nutzern nicht vorzuschlagen oder automatisch anzufordern.

### Instanzeigenschaften auf der Document-Schnittstelle

- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled)
  - : Die Eigenschaft `pictureInPictureEnabled` teilt Ihnen mit, ob der Picture-in-Picture-Modus aktiviert werden kann. Dies ist `false`, wenn der Picture-in-Picture-Modus aus irgendeinem Grund nicht verfügbar ist (z.B. wenn die Funktion [`"picture-in-picture"`](/de/docs/Web/HTTP/Headers/Permissions-Policy/picture-in-picture) deaktiviert oder der Picture-in-Picture-Modus nicht unterstützt wird).

### Instanzeigenschaften auf der Document- oder ShadowRoot-Schnittstelle

- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement) / [`ShadowRoot.pictureInPictureElement`](/de/docs/Web/API/ShadowRoot/pictureInPictureElement)
  - : Die Eigenschaft `pictureInPictureElement` informiert Sie darüber, welches [`Element`](/de/docs/Web/API/Element) derzeit im schwebenden Fenster (oder im Shadow-DOM) angezeigt wird. Wenn dies `null` ist, hat das Dokument (oder der Shadow-DOM) derzeit keinen Knoten im Picture-in-Picture-Modus.

## Ereignisse

_Die Picture-in-Picture API definiert drei Ereignisse, die verwendet werden können, um zu erkennen, wann der Picture-in-Picture-Modus umgeschaltet wird und wann das schwebende Videofenster die Größe ändert._

- [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es in den Picture-in-Picture-Modus wechselt.
- [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es den Picture-in-Picture-Modus verlässt.
- [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event)
  - : Wird an ein [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow) gesendet, wenn es die Größe ändert.

## Hinzufügen von Bedienelementen

Wenn Medienaktionshandler über die [Media Session API](/de/docs/Web/API/Media_Session_API) festgelegt wurden, dann fügt der Browser entsprechende Steuerungen für diese Aktionen zur Picture-in-Picture-Überlagerung hinzu. Wenn beispielsweise eine Aktion `"nexttrack"` festgelegt wurde, könnte eine Überspringen-Schaltfläche in der Picture-in-Picture-Ansicht angezeigt werden. Es gibt keine Unterstützung für das Hinzufügen benutzerdefinierter HTML-Schaltflächen oder Steuerelemente.

## Kontrolle des Stylings

Die [`:picture-in-picture`](/de/docs/Web/CSS/:picture-in-picture) [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) stimmt mit dem Videoelement überein, das sich derzeit im Picture-in-Picture-Modus befindet, und ermöglicht es Ihnen, Ihre Stylesheets so zu konfigurieren, dass sie die Größe, den Stil oder das Layout des Inhalts automatisch anpassen, wenn ein Video zwischen Picture-in-Picture und traditioneller Präsentationsmodus wechselt.

## Zugriffssteuerung

Die Verfügbarkeit des Picture-in-Picture-Modus kann über die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) gesteuert werden. Die Picture-in-Picture-Modus-Funktion wird durch den String `"picture-in-picture"` identifiziert und hat einen Standardwert der Positivliste von `*`, was bedeutet, dass der Picture-in-Picture-Modus im Kontext von Top-Level-Dokumenten sowie in eingebetteten Kontexten, die von der gleichen Herkunft wie das oberste Dokument geladen wurden, erlaubt ist.

## Beispiele

In diesem Beispiel wird ein Video auf einer Webseite präsentiert. Ein Klick auf die Schaltfläche unten ermöglicht es dem Benutzer, das schwebende Videofenster umzuschalten.

{{EmbedGHLiveSample("dom-examples/picture-in-picture/index.html", '100%', 350)}}

### Umschalten des Picture-in-Picture-Modus

Dieser Code wird von einem Klick-Handler aufgerufen, wenn der Benutzer auf die Schaltfläche "Picture-in-Picture umschalten" klickt:

```js
function togglePictureInPicture() {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else if (document.pictureInPictureEnabled) {
    video.requestPictureInPicture();
  }
}
```

Dieser Block beginnt mit der Überprüfung des Werts des `pictureInPictureElement`-Attributs des [`document`](/de/docs/Web/API/Document).

Wenn der Wert nicht `null` ist, ist es das Element, das sich derzeit im Picture-in-Picture-Modus befindet, also in einem schwebenden Fenster. Wir rufen [`document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture) auf, um das Video in seinen ursprünglichen Rahmen zurückzubringen.

Wenn der Wert `null` ist, befindet sich kein Video im schwebenden Fenster. Also können wir ein Video anfordern, in den Picture-in-Picture-Modus zu wechseln. Wir tun dies, indem wir [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) auf dem {{HTMLElement("video")}} Element aufrufen.

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
