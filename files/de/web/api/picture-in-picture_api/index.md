---
title: Picture-in-Picture API
slug: Web/API/Picture-in-Picture_API
l10n:
  sourceCommit: 61ceefea7281f267055e4481a9a610d7ac2e724e
---

{{DefaultAPISidebar("Picture-in-Picture API")}}

Die **Picture-in-Picture-API** ermöglicht es Websites, ein schwebendes, immer im Vordergrund befindliches Videofenster zu erstellen. Dies erlaubt es Benutzern, weiterhin Medien zu konsumieren, während sie mit anderen Websites oder Anwendungen auf ihrem Gerät interagieren.

> [!NOTE]
> Sie können Code ausführen, wenn das immer im Vordergrund befindliche Fenster programmgesteuert geöffnet wird, indem Sie das [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event) Ereignis verwenden. Dieses Ereignis wird jedoch nicht ausgelöst, wenn der Browser selbst (anstatt Ihr Code) den Inhalt in das immer im Vordergrund befindliche Fenster verschiebt. Dies kann beispielsweise geschehen, wenn der Inhalt verdeckt ist, indem der angezeigte Tab gewechselt wird oder der Benutzer eine "Bild-in-Bild"-Option aus dem Kontextmenü eines Videos oder der Browser-Oberfläche auswählt.
>
> Um Code als Reaktion auf solche Aktionen auszuführen, richten Sie einen Media-Session-Aktions-Handler unter Verwendung von [`MediaSession.setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler) mit einem `type` von `enterpictureinpicture` ein.

> [!NOTE]
> Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) erweitert die Picture-in-Picture-API, um es zu ermöglichen, das immer im Vordergrund befindliche Fenster mit beliebigem HTML-Inhalt zu füllen, nicht nur mit einem Video.

## Konzepte und Verwendung

Es ist oft hilfreich, ein Video in einem separaten Fenster zur restlichen Website abzuspielen, um weiterhin schauen zu können, während verbundene App-Inhalte angezeigt werden oder sogar um eine andere Website zu betrachten. Dies könnte man erreichen, indem man einfach ein reguläres neues Browserfenster öffnet, aber das hat zwei wesentliche Probleme:

1. Sie müssen die gemeinsame Nutzung von Statusinformationen zwischen den beiden Fenstern handhaben.
2. Das zusätzliche App-Fenster bleibt nicht immer im Vordergrund und kann daher von anderen Fenstern verdeckt werden.

Die Picture-in-Picture-API für `<video>` löst diese Probleme, indem sie den Großteil der Komplexität verwaltet, ein einzelnes {{htmlelement("video")}}-Element in ein separates, immer im Vordergrund befindliches Fenster zu platzieren.

### Hinzufügen von Steuerelementen

Wenn Media-Session-Aktions-Handler über die [Media Session API](/de/docs/Web/API/Media_Session_API) festgelegt wurden, werden passende Steuerelemente für diese Aktionen vom Browser dem Bild-in-Bild-Overlay hinzugefügt. Zum Beispiel, wenn eine `"nexttrack"`-Aktion festgelegt wurde, könnte ein Überspringen-Button in der Bild-in-Bild-Ansicht angezeigt werden. Es gibt keine Unterstützung für das Hinzufügen von benutzerdefinierten HTML-Buttons oder -Steuerelementen.

### Steuerung des Stylings

Die {{cssxref(":picture-in-picture")}} [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt das Videoelement aus, das sich derzeit im Bild-in-Bild-Modus befindet, und ermöglicht Ihnen, Ihre Stylesheets so zu konfigurieren, dass Größe, Stil oder Layout des Inhalts automatisch angepasst werden, wenn ein Video zwischen Bild-in-Bild- und traditioneller Präsentationsweise wechselt.

### Sicherheitserwägungen

Die Verfügbarkeit des Bild-in-Bild-Modus kann über die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) kontrolliert werden. Die Funktion des Bild-in-Bild-Modus wird durch den String `"picture-in-picture"` identifiziert, mit einem Standard-Whitelist-Wert von `*`, was bedeutet, dass der Bild-in-Bild-Modus in Dokumentkontexten auf oberster Ebene sowie in eingebetteten Browserkontexten, die aus derselben Herkunft wie das oberste Dokument geladen wurden, erlaubt ist.

## Schnittstellen

- [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow)
  - : Repräsentiert das schwebende Videofenster; enthält die Eigenschaften [`width`](/de/docs/Web/API/PictureInPictureWindow/width) und [`height`](/de/docs/Web/API/PictureInPictureWindow/height) sowie eine [`onresize`](/de/docs/Web/API/PictureInPictureWindow/resize_event) Ereignis-Handler-Eigenschaft.
- [`PictureInPictureEvent`](/de/docs/Web/API/PictureInPictureEvent)
  - : Stellt Ereignisse im Zusammenhang mit Bild-in-Bild dar, einschließlich [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event), [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event) und [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event).

## Instanzmethoden

Die Picture-in-Picture-API fügt den Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`Document`](/de/docs/Web/API/Document) Methoden hinzu, um das schwebende Videofenster umschalten zu können.

### Instanzmethoden in der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
  - : Fordert den Benutzeragenten auf, das Video in den Bild-in-Bild-Modus zu versetzen.

### Instanzmethoden in der Document-Schnittstelle

- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
  - : Fordert den Benutzeragenten auf, das Element, das sich im Bild-in-Bild-Modus befindet, zurück in seine ursprüngliche Box zu versetzen.

## Instanzeigenschaften

Die Picture-in-Picture-API erweitert die Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`Document`](/de/docs/Web/API/Document) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) um Eigenschaften, die verwendet werden können, um zu bestimmen, ob der Modus des schwebenden Videofensters unterstützt und verfügbar ist, ob der Bild-in-Bild-Modus derzeit aktiv ist und welches Video gerade schwebt.

### Instanzeigenschaften in der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
  - : Die Eigenschaft `disablePictureInPicture` gibt einen Hinweis an den Benutzeragenten, den Bild-in-Bild-Modus den Benutzern nicht vorzuschlagen oder ihn automatisch anzufordern.

### Instanzeigenschaften in der Document-Schnittstelle

- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled)
  - : Die Eigenschaft `pictureInPictureEnabled` informiert Sie darüber, ob es möglich ist, den Bild-in-Bild-Modus zu aktivieren. Dies ist `false`, wenn der Bild-in-Bild-Modus aus irgendeinem Grund nicht verfügbar ist (z.B. wenn die [`"picture-in-picture"`-Funktion](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/picture-in-picture) verboten wurde oder der Bild-in-Bild-Modus nicht unterstützt wird).

### Instanzeigenschaften in den Document oder ShadowRoot-Schnittstellen

- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement) / [`ShadowRoot.pictureInPictureElement`](/de/docs/Web/API/ShadowRoot/pictureInPictureElement)
  - : Die Eigenschaft `pictureInPictureElement` informiert Sie darüber, welches [`Element`](/de/docs/Web/API/Element) derzeit im schwebenden Fenster (oder im Shadow DOM) angezeigt wird. Wenn dies `null` ist, hat das Dokument (oder das Shadow DOM) derzeit kein Knoten im Bild-in-Bild-Modus.

## Ereignisse

_Die Picture-in-Picture-API definiert drei Ereignisse, die verwendet werden können, um zu erkennen, wann der Bild-in-Bild-Modus umgeschaltet wird und wann das schwebende Videofenster seine Größe ändert._

- [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es in den Bild-in-Bild-Modus wechselt.
- [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es den Bild-in-Bild-Modus verlässt.
- [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event)
  - : Wird an ein [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow) gesendet, wenn es seine Größe ändert.

## Beispiele

### Umschalten des Bild-in-Bild-Modus

In diesem Beispiel haben wir ein {{HTMLElement("video")}}-Element in einer Webseite, ein {{HTMLElement("button")}} zum Umschalten des Bild-in-Bild-Modus und ein Element, um relevante Informationen für das Beispiel zu protokollieren. Das {{HTMLElement("button")}}-Element ist anfänglich `disabled`, bis wir die Browserunterstützung festgestellt haben.

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

Zuerst prüfen wir, ob der Browser PiP mit `document.pictureInPictureEnabled` unterstützt, und wenn es nicht unterstützt wird, protokollieren wir diese Information in das `<pre>`-Element. Wenn es im Browser verfügbar ist, können wir das Umschalten aktivieren, um in den und aus dem PiP zu wechseln.

Für die Steuerung ruft ein Ereignislistener am {{HTMLElement("button")}}-Element eine `togglePictureInPicture()`-Funktion auf, die wir definiert haben. In `togglePictureInPicture()` überprüft eine `if`-Anweisung den Wert des Attributes `pictureInPictureElement` des [`document`](/de/docs/Web/API/Document).

- Wenn der Wert `null` ist, befindet sich kein Video in einem schwebenden Fenster, sodass wir das Video anfordern können, in den Bild-in-Bild-Modus zu wechseln. Dies tun wir, indem wir [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) am {{HTMLElement("video")}}-Element aufrufen.
- Wenn der Wert nicht `null` ist, befindet sich derzeit ein Element im Bild-in-Bild-Modus. Wir können dann [`document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture) aufrufen, um das Video zurück in seine ursprüngliche Box zu bringen und den Bild-in-Bild-Modus zu beenden.

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

Das Klicken auf die "Toggle PiP"-Schaltfläche ermöglicht es dem Benutzer, zwischen dem Abspielen des Videos auf der Seite und in einem schwebenden Fenster umzuschalten:

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
