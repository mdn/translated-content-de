---
title: Bild-im-Bild-API
slug: Web/API/Picture-in-Picture_API
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Picture-in-Picture API")}}

Die **Picture-in-Picture-API** ermöglicht es Websites, ein schwebendes, immer im Vordergrund befindliches Videofenster zu erstellen. Dies erlaubt Benutzern, Medien weiter zu konsumieren, während sie mit anderen Websites oder Anwendungen auf ihrem Gerät interagieren.

> [!NOTE]
> Die [Document Picture-in-Picture-API](/de/docs/Web/API/Document_Picture-in-Picture_API) erweitert die Picture-in-Picture-API, sodass das immer im Vordergrund befindliche Fenster mit _beliebigem_ HTML-Inhalt gefüllt werden kann, nicht nur mit einem Video.

## Schnittstellen

- {{DOMxRef("PictureInPictureWindow")}}
  - : Repräsentiert das schwebende Videofenster; enthält die Eigenschaften {{domxref("PictureInPictureWindow/width", "width")}} und {{domxref("PictureInPictureWindow/height", "height")}}, sowie eine Ereignishandler-Eigenschaft {{domxref("PictureInPictureWindow/resize_event", "onresize")}}.

## Instanzmethoden

Die Picture-in-Picture-API fügt den Schnittstellen {{DOMxRef("HTMLVideoElement")}} und {{DOMxRef("Document")}} Methoden hinzu, um das schwebende Videofenster umzuschalten.

### Instanzmethoden auf der HTMLVideoElement-Schnittstelle

- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
  - : Fordert den Benutzeragenten auf, das Video in den Bild-im-Bild-Modus zu versetzen.

### Instanzmethoden auf der Document-Schnittstelle

- {{DOMxRef("Document.exitPictureInPicture()")}}
  - : Fordert den Benutzeragenten auf, das Element im Bild-im-Bild-Modus zurück in seine ursprüngliche Position zu bringen.

## Instanzeigenschaften

Die Picture-in-Picture-API erweitert die Schnittstellen {{DOMxRef("HTMLVideoElement")}}, {{DOMxRef("Document")}} und {{DOMxRef("ShadowRoot")}} mit Eigenschaften, die verwendet werden können, um festzustellen, ob der schwebende Videofenster-Modus unterstützt und verfügbar ist, ob der Bild-im-Bild-Modus derzeit aktiv ist, und welches Video schwebt.

### Instanzeigenschaften auf der HTMLVideoElement-Schnittstelle

- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
  - : Die Eigenschaft `disablePictureInPicture` gibt einen Hinweis an den Benutzeragenten, dem Benutzer den Bild-im-Bild-Modus nicht vorzuschlagen oder ihn automatisch anzufordern.

### Instanzeigenschaften auf der Document-Schnittstelle

- {{DOMxRef("Document.pictureInPictureEnabled")}}
  - : Die Eigenschaft `pictureInPictureEnabled` zeigt an, ob es möglich ist, den Bild-im-Bild-Modus zu aktivieren. Dies ist `false`, wenn der Bild-im-Bild-Modus aus irgendeinem Grund nicht verfügbar ist (z.B. wenn die [„picture-in-picture“-Funktion](/de/docs/Web/HTTP/Headers/Permissions-Policy/picture-in-picture) untersagt wurde oder der Bild-im-Bild-Modus nicht unterstützt wird).

### Instanzeigenschaften auf den Schnittstellen Document oder ShadowRoot

- {{DOMxRef("Document.pictureInPictureElement")}} / {{DOMxRef("ShadowRoot.pictureInPictureElement")}}
  - : Die Eigenschaft `pictureInPictureElement` zeigt an, welches {{DOMxRef("Element")}} derzeit im schwebenden Fenster (oder im Schatten-DOM) angezeigt wird. Wenn dies `null` ist, hat das Dokument (oder Schatten-DOM) derzeit kein Element im Bild-im-Bild-Modus.

## Ereignisse

_Die Picture-in-Picture-API definiert drei Ereignisse, die verwendet werden können, um zu erkennen, wann der Bild-im-Bild-Modus umgeschaltet wird und wann das schwebende Videofenster die Größe ändert._

- {{domxref("HTMLVideoElement.enterpictureinpicture_event", "enterpictureinpicture")}}
  - : Wird an ein {{DOMxRef("HTMLVideoElement")}} gesendet, wenn es in den Bild-im-Bild-Modus wechselt.
- {{domxref("HTMLVideoElement.leavepictureinpicture_event", "leavepictureinpicture")}}
  - : Wird an ein {{DOMxRef("HTMLVideoElement")}} gesendet, wenn es den Bild-im-Bild-Modus verlässt.
- {{domxref("PictureInPictureWindow.resize_event", "resize")}}
  - : Wird an ein {{DOMxRef("PictureInPictureWindow")}} gesendet, wenn es die Größe ändert.

## Hinzufügen von Steuerelementen

Wenn Medienaktions-Handler über die [Media Session API](/de/docs/Web/API/Media_Session_API) gesetzt wurden, dann fügt der Browser geeignete Steuerelemente für diese Aktionen dem Bild-im-Bild-Overlay hinzu. Beispielsweise könnte eine Überspringen-Schaltfläche in der Bild-im-Bild-Ansicht angezeigt werden, wenn eine `"nexttrack"`-Aktion gesetzt wurde. Es gibt keine Unterstützung für das Hinzufügen benutzerdefinierter HTML-Schaltflächen oder -Steuerelemente.

## Steuerung des Stylings

Die [`:picture-in-picture`](/de/docs/Web/CSS/:picture-in-picture) [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) entspricht dem Videoelement, das aktuell im Bild-im-Bild-Modus ist, und erlaubt Ihnen die Konfiguration Ihrer Stylesheets, um die Größe, den Stil oder das Layout von Inhalten automatisch anzupassen, wenn ein Video zwischen Bild-im-Bild und traditionellem Präsentationsmodus wechselt.

## Steuerung des Zugriffs

Die Verfügbarkeit des Bild-im-Bild-Modus kann mit der [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) gesteuert werden. Die Vollbildmodus-Funktion wird durch den String `"picture-in-picture"` identifiziert, mit einem Standard-Wert für die Zulassungsliste von `"self"`, was bedeutet, dass der Bild-im-Bild-Modus in Kontexten von Top-Level-Dokumenten sowie in eingebetteten Betrachtungskontexten, die von derselben Herkunft wie das oberste Dokument geladen wurden, erlaubt ist.

## Beispiele

In diesem Beispiel wird ein Video auf einer Webseite präsentiert. Durch Klicken auf die Schaltfläche unten kann der Benutzer das schwebende Videofenster umschalten.

{{EmbedGHLiveSample("dom-examples/picture-in-picture/index.html", '100%', 350)}}

### Umschalten des Bild-im-Bild-Modus

Dieser Code wird von einem Klick-Handler aufgerufen, wenn der Benutzer auf die Schaltfläche „Bild-im-Bild umschalten“ klickt:

```js
function togglePictureInPicture() {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else if (document.pictureInPictureEnabled) {
    video.requestPictureInPicture();
  }
}
```

Dieser Block beginnt damit, den Wert der {{DOMxRef("Document", "document")}}-`pictureInPictureElement`-Attributs zu prüfen.

Wenn der Wert nicht `null` ist, ist es das Element, das sich derzeit im Bild-im-Bild-Modus befindet, also in einem schwebenden Fenster. Wir rufen {{DOMxRef("Document.exitPictureInPicture", "document.exitPictureInPicture()")}} auf, um das Video zurück in seine ursprüngliche Position zu bringen.

Wenn der Wert `null` ist, befindet sich derzeit kein Video im schwebenden Fenster. Wir können dann ein Video anfordern, in den Bild-im-Bild-Modus zu wechseln. Dies geschieht durch den Aufruf von {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}} auf dem {{HTMLElement("video")}}-Element.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
- {{CSSxRef(":picture-in-picture")}}
- Die [Document Picture-in-Picture-API](/de/docs/Web/API/Document_Picture-in-Picture_API)
