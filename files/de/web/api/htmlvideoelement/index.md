---
title: HTMLVideoElement
slug: Web/API/HTMLVideoElement
l10n:
  sourceCommit: 3975bcf6caa09c9c5f7fddf2eef2be6c021d00f6
---

{{APIRef("HTML DOM")}}

Implementiert durch das {{HTMLElement("video")}}-Element, bietet das **`HTMLVideoElement`**-Interface spezielle Eigenschaften und Methoden zur Manipulation von Videoobjekten. Es erbt auch Eigenschaften und Methoden von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`HTMLElement`](/de/docs/Web/API/HTMLElement).

Die Liste der [unterstützten Medienformate](/de/docs/Web/Media/Formats) variiert von Browser zu Browser. Sie sollten entweder Ihr Video in einem einzigen Format bereitstellen, das alle relevanten Browser unterstützen, oder mehrere Videoquellen in ausreichend unterschiedlichen Formaten bereitstellen, um alle Browser zu unterstützen, die Sie abdecken müssen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elterninterface, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), und [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
  - : Gibt an, ob der User-Agent Nutzern das Bild-in-Bild vorschlagen sollte oder nicht.
- [`HTMLVideoElement.height`](/de/docs/Web/API/HTMLVideoElement/height)
  - : Ein String, der das HTML-Attribut [`height`](/de/docs/Web/HTML/Element/video#height) widerspiegelt und die Höhe des Anzeigebereichs in CSS-Pixeln angibt.
- [`HTMLVideoElement.poster`](/de/docs/Web/API/HTMLVideoElement/poster)
  - : Ein String, der das HTML-Attribut [`poster`](/de/docs/Web/HTML/Element/video#poster) widerspiegelt und ein Bild angibt, das angezeigt wird, solange keine Videodaten verfügbar sind.
- [`HTMLVideoElement.videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) {{ReadOnlyInline}}
  - : Gibt einen vorzeichenlosen Integer-Wert zurück, der die intrinsische Höhe der Ressource in CSS-Pixeln angibt, oder 0, wenn noch keine Medien verfügbar sind.
- [`HTMLVideoElement.videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) {{ReadOnlyInline}}
  - : Gibt einen vorzeichenlosen Integer-Wert zurück, der die intrinsische Breite der Ressource in CSS-Pixeln angibt, oder 0, wenn noch keine Medien verfügbar sind.
- [`HTMLVideoElement.width`](/de/docs/Web/API/HTMLVideoElement/width)
  - : Ein String, der das HTML-Attribut [`width`](/de/docs/Web/HTML/Element/video#width) widerspiegelt und die Breite des Anzeigebereichs in CSS-Pixeln angibt.

### Firefox-spezifische Eigenschaften

- [`HTMLVideoElement.mozParsedFrames`](/de/docs/Web/API/HTMLVideoElement/mozParsedFrames) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein `unsigned long` mit der Anzahl der Video-Frames zurück, die aus der Medienressource geparst wurden.
- [`HTMLVideoElement.mozDecodedFrames`](/de/docs/Web/API/HTMLVideoElement/mozDecodedFrames) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein `unsigned long` mit der Anzahl der geparsten Video-Frames zurück, die in Bilder dekodiert wurden.
- [`HTMLVideoElement.mozPresentedFrames`](/de/docs/Web/API/HTMLVideoElement/mozPresentedFrames) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein `unsigned long` mit der Anzahl der dekodierten Frames zurück, die der Render-Pipeline zur Darstellung übergeben wurden.
- [`HTMLVideoElement.mozPaintedFrames`](/de/docs/Web/API/HTMLVideoElement/mozPaintedFrames) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein `unsigned long` mit der Anzahl der dargestellten Frames zurück, die auf dem Bildschirm gemalt wurden.
- [`HTMLVideoElement.mozFrameDelay`](/de/docs/Web/API/HTMLVideoElement/mozFrameDelay) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein `double` mit der Zeit zurück, um die der zuletzt dargestellte Video-Frame verspätet war, in Sekunden.
- [`HTMLVideoElement.mozHasAudio`](/de/docs/Web/API/HTMLVideoElement/mozHasAudio) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen Boolean zurück, der angibt, ob es ein Audio gibt, das mit dem Video verknüpft ist.

## Instanz-Methoden

_Erbt Methoden von seinem Elterninterface, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), und [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback)
  - : Hebt einen zuvor registrierten Video-Frame-Callback auf (siehe [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback)).
- [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality)
  - : Gibt ein [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Objekt zurück, das die aktuellen Wiedergabemetriken enthält. Diese Informationen umfassen Dinge wie die Anzahl der verworfenen oder beschädigten Frames sowie die Gesamtanzahl der Frames.
- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
  - : Fordert, dass der User-Agent das Video in den Bild-in-Bild-Modus versetzt.
- [`HTMLVideoElement.requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback)
  - : Registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neuer Video-Frame an den Kompositor gesendet wird. Dies ermöglicht Entwicklern, effiziente Operationen für jeden Video-Frame durchzuführen.

## Ereignisse

_Erbt Ereignisse von seinem Elterninterface, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), und [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener auf die `oneventname`-Eigenschaft dieses Interfaces zuordnen.

- [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)
  - : Wird ausgelöst, wenn das `HTMLVideoElement` erfolgreich in den Bild-in-Bild-Modus wechselt.
- [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event)
  - : Wird ausgelöst, wenn das `HTMLVideoElement` erfolgreich den Bild-in-Bild-Modus verlässt.
- [`resize`](/de/docs/Web/API/HTMLVideoElement/resize_event)
  - : Wird ausgelöst, wenn eine oder beide der Eigenschaften [`videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) und [`videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) gerade aktualisiert wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{HTMLElement("video")}}.
- [Unterstützte Medienformate](/de/docs/Web/Media/Formats)
