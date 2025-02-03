---
title: HTMLVideoElement
slug: Web/API/HTMLVideoElement
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("HTML DOM")}}

Implementiert durch das {{HTMLElement("video")}} Element, bietet das **`HTMLVideoElement`** Interface spezielle Eigenschaften und Methoden zur Manipulation von Videoobjekten. Es erbt außerdem Eigenschaften und Methoden von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`HTMLElement`](/de/docs/Web/API/HTMLElement).

Die Liste der [unterstützten Medienformate](/de/docs/Web/Media/Guides/Formats) variiert von Browser zu Browser. Sie sollten entweder Ihr Video in einem einzigen Format bereitstellen, das alle relevanten Browser unterstützen, oder mehrere Videoquellen in genügend verschiedenen Formaten bereitstellen, sodass alle von Ihnen benötigten Browser abgedeckt sind.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten Interface, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), und [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
  - : Gibt an, ob der Benutzeragent den Benutzern den Bild-in-Bild-Modus vorschlagen soll oder nicht.
- [`HTMLVideoElement.height`](/de/docs/Web/API/HTMLVideoElement/height)
  - : Ein String, der das [`height`](/de/docs/Web/HTML/Element/video#height) HTML-Attribut widerspiegelt, welches die Höhe des Anzeigebereichs in CSS-Pixeln bestimmt.
- [`HTMLVideoElement.poster`](/de/docs/Web/API/HTMLVideoElement/poster)
  - : Ein String, der das [`poster`](/de/docs/Web/HTML/Element/video#poster) HTML-Attribut widerspiegelt, welches ein Bild spezifiziert, das angezeigt wird, während keine Videodaten verfügbar sind.
- [`HTMLVideoElement.videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) {{ReadOnlyInline}}
  - : Gibt einen positiven ganzzahligen Wert zurück, der die intrinsische Höhe der Ressource in CSS-Pixeln angibt, oder 0, wenn noch keine Medien verfügbar sind.
- [`HTMLVideoElement.videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) {{ReadOnlyInline}}
  - : Gibt einen positiven ganzzahligen Wert zurück, der die intrinsische Breite der Ressource in CSS-Pixeln angibt, oder 0, wenn noch keine Medien verfügbar sind.
- [`HTMLVideoElement.width`](/de/docs/Web/API/HTMLVideoElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Element/video#width) HTML-Attribut widerspiegelt, welches die Breite des Anzeigebereichs in CSS-Pixeln bestimmt.

### Firefox-spezifische Eigenschaften

- [`HTMLVideoElement.mozParsedFrames`](/de/docs/Web/API/HTMLVideoElement/mozParsedFrames) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein `unsigned long` mit der Anzahl der Videoframes zurück, die aus der Medienressource geparst wurden.
- [`HTMLVideoElement.mozDecodedFrames`](/de/docs/Web/API/HTMLVideoElement/mozDecodedFrames) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein `unsigned long` mit der Anzahl der geparsten Videoframes zurück, die in Bilder dekodiert wurden.
- [`HTMLVideoElement.mozPresentedFrames`](/de/docs/Web/API/HTMLVideoElement/mozPresentedFrames) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein `unsigned long` mit der Anzahl der dekodierten Frames zurück, die der Rendering-Pipeline zum Malen vorgestellt wurden.
- [`HTMLVideoElement.mozPaintedFrames`](/de/docs/Web/API/HTMLVideoElement/mozPaintedFrames) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein `unsigned long` mit der Anzahl der dargestellten Frames zurück, die auf dem Bildschirm gemalt wurden.
- [`HTMLVideoElement.mozFrameDelay`](/de/docs/Web/API/HTMLVideoElement/mozFrameDelay) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein `double` mit der Zeit zurück, um die das letzte gemalte Videoframe zu spät war, in Sekunden.
- [`HTMLVideoElement.mozHasAudio`](/de/docs/Web/API/HTMLVideoElement/mozHasAudio) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob mit dem Video Audiodaten verbunden sind.

## Instanz-Methoden

_Erbt Methoden von seinem übergeordneten Interface, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), und [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback)
  - : Hebt einen zuvor registrierten Video-Frame-Callback auf (siehe [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback)).
- [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality)
  - : Gibt ein [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality) Objekt zurück, das die aktuellen Wiedergabemetriken enthält. Diese Informationen beinhalten Dinge wie die Anzahl der ausgelassenen oder beschädigten Frames sowie die Gesamtanzahl der Frames.
- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
  - : Fordert den Benutzeragenten auf, das Video im Bild-in-Bild-Modus anzuzeigen.
- [`HTMLVideoElement.requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback)
  - : Registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videoframe an den Kompositor gesendet wird. Dies ermöglicht Entwicklern, effiziente Operationen auf jedem Videoframe durchzuführen.

## Ereignisse

_Erbt Ereignisse von seinem übergeordneten Interface, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), und [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname` Eigenschaft dieses Interfaces zuweisen.

- [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)
  - : Wird ausgelöst, wenn das `HTMLVideoElement` erfolgreich in den Bild-in-Bild-Modus wechselt.
- [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event)
  - : Wird ausgelöst, wenn das `HTMLVideoElement` erfolgreich den Bild-in-Bild-Modus verlässt.
- [`resize`](/de/docs/Web/API/HTMLVideoElement/resize_event)
  - : Wird ausgelöst, wenn eine oder beide der [`videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) und [`videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) Eigenschaften gerade aktualisiert wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{HTMLElement("video")}}.
- [Unterstützte Medienformate](/de/docs/Web/Media/Guides/Formats)
