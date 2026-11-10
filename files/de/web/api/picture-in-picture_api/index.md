---
title: Picture-in-Picture API
slug: Web/API/Picture-in-Picture_API
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{DefaultAPISidebar("Picture-in-Picture API")}}

Die **Picture-in-Picture API** ermöglicht es Websites, ein schwebendes Videofenster zu erstellen, das immer im Vordergrund bleibt.
So können Benutzer weiterhin Medien ansehen, während sie auf ihrem Gerät mit anderen Websites oder Anwendungen interagieren.

> [!NOTE]
> Sie können Code ausführen, wenn das immer im Vordergrund bleibende Fenster programmgesteuert geöffnet wird, indem Sie das Ereignis [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event) verwenden. Dieses Ereignis wird jedoch nicht ausgelöst, wenn der Browser selbst (und nicht Ihr Code) Inhalte in das immer im Vordergrund bleibende Fenster verschiebt. Dies kann beispielsweise geschehen, wenn der Inhalt verdeckt wird, der angezeigte Tab gewechselt wird oder der Benutzer eine „Picture-in-Picture“-Option im Kontextmenü eines Videos oder in der Browseroberfläche auswählt.
>
> Um als Reaktion auf solche Aktionen Code auszuführen, richten Sie mit [`MediaSession.setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler) einen Media-Session-Aktionshandler mit dem `type` `enterpictureinpicture` ein.

> [!NOTE]
> Die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) erweitert die Picture-in-Picture API, sodass das immer im Vordergrund bleibende Fenster mit _beliebigem_ HTML-Inhalt gefüllt werden kann, nicht nur mit einem Video.

## Konzepte und Verwendung

Oft ist es hilfreich, ein Video in einem separaten Fenster vom Rest Ihrer Website abzuspielen. So können Sie es weiter ansehen und gleichzeitig zugehörige App-Inhalte im Blick behalten oder sogar eine andere Website betrachten.
Sie könnten dafür einfach ein gewöhnliches neues Browserfenster öffnen. Das hat jedoch zwei wesentliche Nachteile:

1. Sie müssen den Austausch von Zustandsinformationen zwischen den beiden Fenstern handhaben.
2. Das zusätzliche App-Fenster bleibt nicht immer im Vordergrund und kann daher von anderen Fenstern verdeckt werden.

Die Picture-in-Picture API für `<video>` löst diese Probleme und übernimmt den Großteil der Komplexität, die damit verbunden ist, ein einzelnes {{htmlelement("video")}}-Element in einem separaten, immer im Vordergrund bleibenden Fenster anzuzeigen.

### Steuerelemente hinzufügen

Wenn über die [Media Session API](/de/docs/Web/API/Media_Session_API) Media-Action-Handler eingerichtet wurden, fügt der Browser dem Picture-in-Picture-Fenster passende Steuerelemente für diese Aktionen hinzu. Wenn beispielsweise eine `"nexttrack"`-Aktion eingerichtet wurde, kann in der Picture-in-Picture-Ansicht eine Schaltfläche zum Überspringen angezeigt werden. Das Hinzufügen eigener HTML-Schaltflächen oder -Steuerelemente wird nicht unterstützt.

### Darstellung steuern

Die [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) {{cssxref(":picture-in-picture")}} trifft auf das Videoelement zu, das sich gerade im Picture-in-Picture-Modus befindet. Damit können Sie Ihre Stylesheets so konfigurieren, dass Größe, Darstellung oder Layout von Inhalten automatisch angepasst werden, wenn ein Video zwischen dem Picture-in-Picture-Modus und der herkömmlichen Darstellung wechselt.

### Sicherheitsaspekte

Die Verfügbarkeit des Picture-in-Picture-Modus lässt sich über die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) steuern. Die Picture-in-Picture-Funktion wird durch die Zeichenfolge `"picture-in-picture"` identifiziert. Der Standardwert ihrer Allowlist ist `*`. Das bedeutet, dass der Picture-in-Picture-Modus sowohl in Dokumentkontexten der obersten Ebene als auch in verschachtelten Browsing-Kontexten zulässig ist, die vom selben Ursprung wie das oberste Dokument geladen wurden.

## Schnittstellen

- [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow)
  - : Repräsentiert das schwebende Videofenster; enthält die Eigenschaften [`width`](/de/docs/Web/API/PictureInPictureWindow/width) und [`height`](/de/docs/Web/API/PictureInPictureWindow/height) sowie die Event-Handler-Eigenschaft [`onresize`](/de/docs/Web/API/PictureInPictureWindow/resize_event).
- [`PictureInPictureEvent`](/de/docs/Web/API/PictureInPictureEvent)
  - : Repräsentiert Picture-in-Picture-bezogene Ereignisse, darunter [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event), [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event) und [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event).

## Instanzmethoden

Die Picture-in-Picture API ergänzt die Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) und [`Document`](/de/docs/Web/API/Document) um Methoden, mit denen das schwebende Videofenster ein- und ausgeschaltet werden kann.

### Instanzmethoden der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
  - : Fordert den User Agent auf, das Video in den Picture-in-Picture-Modus zu versetzen.

### Instanzmethoden der Document-Schnittstelle

- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
  - : Fordert den User Agent auf, das Element im Picture-in-Picture-Modus in seinen ursprünglichen Bereich zurückzuführen.

## Instanzeigenschaften

Die Picture-in-Picture API ergänzt die Schnittstellen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), [`Document`](/de/docs/Web/API/Document) und [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) um Eigenschaften. Mit ihnen lässt sich feststellen, ob der Modus für schwebende Videofenster unterstützt wird und verfügbar ist, ob der Picture-in-Picture-Modus derzeit aktiv ist und welches Video im schwebenden Fenster angezeigt wird.

### Instanzeigenschaften der HTMLVideoElement-Schnittstelle

- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
  - : Die Eigenschaft `disablePictureInPicture` gibt dem User Agent einen Hinweis, Benutzern den Picture-in-Picture-Modus nicht vorzuschlagen und ihn nicht automatisch anzufordern.

### Instanzeigenschaften der Document-Schnittstelle

- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled)
  - : Die Eigenschaft `pictureInPictureEnabled` gibt an, ob der Picture-in-Picture-Modus aktiviert werden kann. Sie ist `false`, wenn der Picture-in-Picture-Modus aus irgendeinem Grund nicht verfügbar ist (z. B. weil die [Funktion `"picture-in-picture"`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/picture-in-picture) nicht zugelassen wurde oder der Picture-in-Picture-Modus nicht unterstützt wird).

### Instanzeigenschaften der Document- oder ShadowRoot-Schnittstelle

- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement) / [`ShadowRoot.pictureInPictureElement`](/de/docs/Web/API/ShadowRoot/pictureInPictureElement)
  - : Die Eigenschaft `pictureInPictureElement` gibt an, welches [`Element`](/de/docs/Web/API/Element) derzeit im schwebenden Fenster angezeigt wird (beziehungsweise im Shadow DOM). Ist der Wert `null`, befindet sich derzeit kein Knoten des Dokuments (beziehungsweise des Shadow DOM) im Picture-in-Picture-Modus.

## Ereignisse

_Die Picture-in-Picture API definiert drei Ereignisse, mit denen sich erkennen lässt, wann der Picture-in-Picture-Modus ein- oder ausgeschaltet und wann die Größe des schwebenden Videofensters geändert wird._

- [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es in den Picture-in-Picture-Modus wechselt.
- [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event)
  - : Wird an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gesendet, wenn es den Picture-in-Picture-Modus verlässt.
- [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event)
  - : Wird an ein [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow) gesendet, wenn sich dessen Größe ändert.

## Beispiele

### Picture-in-Picture-Modus ein- und ausschalten

In diesem Beispiel gibt es auf einer Webseite ein {{HTMLElement("video")}}-Element, ein {{HTMLElement("button")}}-Element zum Ein- und Ausschalten von Picture-in-Picture sowie ein Element, in dem für das Beispiel relevante Informationen protokolliert werden.
Das {{HTMLElement("button")}}-Element ist zunächst `disabled`, bis wir festgestellt haben, ob der Browser die Funktion unterstützt.

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

Zunächst prüfen wir mit `document.pictureInPictureEnabled`, ob der Browser PiP unterstützt. Falls nicht, protokollieren wir diese Information im `<pre>`-Element.
Ist PiP im Browser verfügbar, können wir die Schaltfläche zum Ein- und Ausschalten aktivieren.

Für die Steuerung ruft ein Event-Listener am {{HTMLElement("button")}}-Element eine von uns definierte Funktion `togglePictureInPicture()` auf.
In `togglePictureInPicture()` prüft eine `if`-Anweisung den Wert des Attributs `pictureInPictureElement` von [`document`](/de/docs/Web/API/Document).

- Ist der Wert `null`, befindet sich kein Video in einem schwebenden Fenster. Wir können dann anfordern, das Video in den Picture-in-Picture-Modus zu versetzen.
  Dazu rufen wir [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) für das {{HTMLElement("video")}}-Element auf.
- Ist der Wert nicht `null`, befindet sich derzeit ein Element im Picture-in-Picture-Modus.
  Wir können dann [`document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture) aufrufen, um das Video in seinen ursprünglichen Bereich zurückzubringen und den Picture-in-Picture-Modus zu verlassen.

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

Mit einem Klick auf die Schaltfläche „Toggle PiP“ kann der Benutzer zwischen der Wiedergabe des Videos auf der Seite und in einem schwebenden Fenster wechseln:

{{embedlivesample("toggling_picture-in-picture_mode", , "350")}}

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
