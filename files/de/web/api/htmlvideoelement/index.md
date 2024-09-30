---
title: HTMLVideoElement
slug: Web/API/HTMLVideoElement
l10n:
  sourceCommit: 3975bcf6caa09c9c5f7fddf2eef2be6c021d00f6
---

{{APIRef("HTML DOM")}}

Implementiert vom {{HTMLElement("video")}}-Element, bietet das **`HTMLVideoElement`**-Interface spezielle Eigenschaften und Methoden zur Manipulation von Videoobjekten. Es erbt zudem Eigenschaften und Methoden von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`HTMLElement`](/de/docs/Web/API/HTMLElement).

Die Liste der [unterstützten Medienformate](/de/docs/Web/Media/Formats) variiert von Browser zu Browser. Sie sollten entweder Ihr Video in einem einzigen Format bereitstellen, das alle relevanten Browser unterstützen, oder mehrere Videoquellen in genügend verschiedenen Formaten bereitstellen, um alle Browser, die Sie unterstützen müssen, abzudecken.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem übergeordneten Interface, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), und [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
  - : Gibt an, ob der Benutzeragent den Nutzern Picture-in-Picture vorschlagen soll oder nicht.
- [`HTMLVideoElement.height`](/de/docs/Web/API/HTMLVideoElement/height)
  - : Ein String, der das [`height`](/de/docs/Web/HTML/Element/video#height) HTML-Attribut widerspiegelt, das die Höhe des Anzeigebereichs in CSS-Pixeln angibt.
- [`HTMLVideoElement.poster`](/de/docs/Web/API/HTMLVideoElement/poster)
  - : Ein String, der das [`poster`](/de/docs/Web/HTML/Element/video#poster) HTML-Attribut widerspiegelt, das ein Bild angibt, das angezeigt werden soll, wenn keine Videodaten verfügbar sind.
- [`HTMLVideoElement.videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) {{ReadOnlyInline}}
  - : Gibt einen vorzeichenlosen Ganzzahlwert zurück, der die intrinsische Höhe der Ressource in CSS-Pixeln angibt, oder 0, wenn noch keine Medien verfügbar sind.
- [`HTMLVideoElement.videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) {{ReadOnlyInline}}
  - : Gibt einen vorzeichenlosen Ganzzahlwert zurück, der die intrinsische Breite der Ressource in CSS-Pixeln angibt, oder 0, wenn noch keine Medien verfügbar sind.
- [`HTMLVideoElement.width`](/de/docs/Web/API/HTMLVideoElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Element/video#width) HTML-Attribut widerspiegelt, das die Breite des Anzeigebereichs in CSS-Pixeln angibt.

### Firefox-spezifische Eigenschaften

- [`HTMLVideoElement.mozParsedFrames`](/de/docs/Web/API/HTMLVideoElement/mozParsedFrames) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein `unsigned long` mit der Anzahl der Videoframes zurück, die von der Medienressource geparst wurden.
- [`HTMLVideoElement.mozDecodedFrames`](/de/docs/Web/API/HTMLVideoElement/mozDecodedFrames) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein `unsigned long` mit der Anzahl der geparsten Videoframes zurück, die in Bilder decodiert wurden.
- [`HTMLVideoElement.mozPresentedFrames`](/de/docs/Web/API/HTMLVideoElement/mozPresentedFrames) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein `unsigned long` mit der Anzahl der decodierten Frames zurück, die der Render-Pipeline zum Malen übergeben wurden.
- [`HTMLVideoElement.mozPaintedFrames`](/de/docs/Web/API/HTMLVideoElement/mozPaintedFrames) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein `unsigned long` mit der Anzahl der dargestellten Frames zurück, die auf dem Bildschirm gemalt wurden.
- [`HTMLVideoElement.mozFrameDelay`](/de/docs/Web/API/HTMLVideoElement/mozFrameDelay) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein `double` mit der Zeit zurück, um die das zuletzt gemalte Videoframe zu spät war, in Sekunden.
- [`HTMLVideoElement.mozHasAudio`](/de/docs/Web/API/HTMLVideoElement/mozHasAudio) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen Booleschen Wert zurück, der angibt, ob dem Video Audiodaten zugeordnet sind.

## Instanzmethoden

_Erbt Methoden von seinem übergeordneten Interface, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), und [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback)
  - : Hebt einen zuvor registrierten Video-Frame-Rückruf auf (siehe [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback)).
- [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality)
  - : Gibt ein [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Objekt zurück, das die aktuellen Wiedergabemetriken enthält. Diese Informationen umfassen unter anderem die Anzahl der verworfenen oder beschädigten Frames sowie die Gesamtzahl der Frames.
- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
  - : Fordert den Benutzeragenten auf, das Video in den Picture-in-Picture-Modus zu versetzen.
- [`HTMLVideoElement.requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback)
  - : Registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Video-Frame an den Kompositor gesendet wird. Dies ermöglicht Entwicklern, effiziente Operationen auf jedem Video-Frame auszuführen.

## Ereignisse

_Erbt Ereignisse von seinem übergeordneten Interface, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), und [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie sich diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) an oder weisen Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zu.

- [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)
  - : Wird ausgelöst, wenn das `HTMLVideoElement` erfolgreich in den Picture-in-Picture-Modus wechselt.
- [`leavepictureinpicture`](/de/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event)
  - : Wird ausgelöst, wenn das `HTMLVideoElement` den Picture-in-Picture-Modus erfolgreich verlässt.
- [`resize`](/de/docs/Web/API/HTMLVideoElement/resize_event)
  - : Wird ausgelöst, wenn eine oder beide der Eigenschaften [`videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) und [`videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) gerade aktualisiert wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{HTMLElement("video")}}.
- [Unterstützte Medienformate](/de/docs/Web/Media/Formats)
