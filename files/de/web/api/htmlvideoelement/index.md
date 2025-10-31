---
title: HTMLVideoElement
slug: Web/API/HTMLVideoElement
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("HTML DOM")}}

Implementiert durch das {{HTMLElement("video")}}-Element, bietet das **`HTMLVideoElement`**-Interface spezielle Eigenschaften und Methoden zur Manipulation von Video-Objekten. Es erbt auch die Eigenschaften und Methoden von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`HTMLElement`](/de/docs/Web/API/HTMLElement).

Die Liste der [unterstützten Medienformate](/de/docs/Web/Media/Guides/Formats) variiert zwischen den verschiedenen Browsern. Sie sollten entweder Ihr Video in einem einzigen Format bereitstellen, das alle relevanten Browser unterstützen, oder mehrere Videoquellen in ausreichend unterschiedlichen Formaten anbieten, damit alle benötigten Browser abgedeckt sind.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seiner übergeordneten Schnittstelle, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), und [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
  - : Gibt an, ob der User Agent den Benutzern den Picture-in-Picture-Modus vorschlagen sollte oder nicht.
- [`HTMLVideoElement.height`](/de/docs/Web/API/HTMLVideoElement/height)
  - : Ein String, der das HTML-Attribut [`height`](/de/docs/Web/HTML/Reference/Elements/video#height) widerspiegelt und die Höhe des Anzeigebereichs in CSS-Pixeln angibt.
- [`HTMLVideoElement.poster`](/de/docs/Web/API/HTMLVideoElement/poster)
  - : Ein String, der das HTML-Attribut [`poster`](/de/docs/Web/HTML/Reference/Elements/video#poster) widerspiegelt und ein Bild angibt, das angezeigt wird, solange keine Videodaten verfügbar sind.
- [`HTMLVideoElement.videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) {{ReadOnlyInline}}
  - : Gibt einen nicht-negativen ganzzahligen Wert zurück, der die intrinsische Höhe der Ressource in CSS-Pixeln angibt, oder 0, wenn noch keine Medien verfügbar sind.
- [`HTMLVideoElement.videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) {{ReadOnlyInline}}
  - : Gibt einen nicht-negativen ganzzahligen Wert zurück, der die intrinsische Breite der Ressource in CSS-Pixeln angibt, oder 0, wenn noch keine Medien verfügbar sind.
- [`HTMLVideoElement.width`](/de/docs/Web/API/HTMLVideoElement/width)
  - : Ein String, der das HTML-Attribut [`width`](/de/docs/Web/HTML/Reference/Elements/video#width) widerspiegelt und die Breite des Anzeigebereichs in CSS-Pixeln angibt.

### Firefox-spezifische Eigenschaften

- [`HTMLVideoElement.mozParsedFrames`](/de/docs/Web/API/HTMLVideoElement/mozParsedFrames) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen `unsigned long` mit der Anzahl der Videoframes zurück, die aus der Medienressource geparst wurden.
- [`HTMLVideoElement.mozDecodedFrames`](/de/docs/Web/API/HTMLVideoElement/mozDecodedFrames) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen `unsigned long` mit der Anzahl der geparsten Videoframes zurück, die in Bilder dekodiert wurden.
- [`HTMLVideoElement.mozPresentedFrames`](/de/docs/Web/API/HTMLVideoElement/mozPresentedFrames) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen `unsigned long` mit der Anzahl der dekodierten Frames zurück, die zur Rendering-Pipeline zur Darstellung übergeben wurden.
- [`HTMLVideoElement.mozPaintedFrames`](/de/docs/Web/API/HTMLVideoElement/mozPaintedFrames) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen `unsigned long` mit der Anzahl der dargestellten Frames zurück, die auf dem Bildschirm gemalt wurden.
- [`HTMLVideoElement.mozFrameDelay`](/de/docs/Web/API/HTMLVideoElement/mozFrameDelay) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein `double` mit der Zeit in Sekunden zurück, um die das letzte dargestellte Videoframe verspätet war.
- [`HTMLVideoElement.mozHasAudio`](/de/docs/Web/API/HTMLVideoElement/mozHasAudio) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob irgendein Audio mit dem Video verbunden ist.

## Instanzmethoden

_Erbt Methoden von seiner übergeordneten Schnittstelle, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), und [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback)
  - : Hebt einen zuvor registrierten Video-Frame-Callback auf (siehe [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback)).
- [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality)
  - : Gibt ein [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Objekt zurück, das die aktuellen Wiedergabemetriken enthält. Diese Informationen beinhalten Dinge wie die Anzahl der verworfenen oder beschädigten Frames sowie die Gesamtanzahl der Frames.
- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
  - : Fordert, dass der User Agent das Video in den Picture-in-Picture-Modus überführt.
- [`HTMLVideoElement.requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback)
  - : Registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neuer Video-Frame an den Kompositor gesendet wird. Dies ermöglicht Entwicklern, effiziente Operationen auf jedem Video-Frame durchzuführen.

## Events

_Erbt Events von seiner übergeordneten Schnittstelle, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), und [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Rufen Sie diese Events mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ab oder durch Zuweisen eines Event-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle.

- [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)
  - : Wird ausgelöst, wenn das `HTMLVideoElement` erfolgreich in den Picture-in-Picture-Modus überführt wird.
- [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event)
  - : Wird ausgelöst, wenn das `HTMLVideoElement` erfolgreich den Picture-in-Picture-Modus verlässt.
- [`resize`](/de/docs/Web/API/HTMLVideoElement/resize_event)
  - : Wird ausgelöst, wenn eine oder beide der Eigenschaften [`videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) und [`videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) gerade aktualisiert wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("video")}}.
- [Unterstützte Medienformate](/de/docs/Web/Media/Guides/Formats)
