---
title: HTMLVideoElement
slug: Web/API/HTMLVideoElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Implementiert durch das {{HTMLElement("video")}}-Element stellt das **`HTMLVideoElement`**-Interface spezielle Eigenschaften und Methoden zur Manipulation von Videoobjekten bereit. Es erbt außerdem Eigenschaften und Methoden von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`HTMLElement`](/de/docs/Web/API/HTMLElement).

Die Liste der [unterstützten Medienformate](/de/docs/Web/Media/Guides/Formats) variiert von Browser zu Browser. Sie sollten entweder Ihr Video in einem einzigen Format bereitstellen, das alle relevanten Browser unterstützen, oder mehrere Videoquellen in ausreichend unterschiedlichen Formaten anbieten, sodass alle Browser, die Sie unterstützen möchten, abgedeckt werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten Interface, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), und [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
  - : Zeigt an, ob der Benutzeragent den Nutzern das Bild-in-Bild vorschlagen soll oder nicht.
- [`HTMLVideoElement.height`](/de/docs/Web/API/HTMLVideoElement/height)
  - : Ein String, der das [`height`](/de/docs/Web/HTML/Reference/Elements/video#height)-HTML-Attribut widerspiegelt, das die Höhe des Anzeigebereichs in CSS-Pixeln angibt.
- [`HTMLVideoElement.poster`](/de/docs/Web/API/HTMLVideoElement/poster)
  - : Ein String, der das [`poster`](/de/docs/Web/HTML/Reference/Elements/video#poster)-HTML-Attribut widerspiegelt, das ein Bild angibt, das angezeigt wird, wenn keine Video-Daten verfügbar sind.
- [`HTMLVideoElement.videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) {{ReadOnlyInline}}
  - : Gibt einen positiven ganzzahligen Wert zurück, der die intrinsische Höhe der Ressource in CSS-Pixeln angibt, oder 0, wenn noch keine Medien verfügbar sind.
- [`HTMLVideoElement.videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) {{ReadOnlyInline}}
  - : Gibt einen positiven ganzzahligen Wert zurück, der die intrinsische Breite der Ressource in CSS-Pixeln angibt, oder 0, wenn noch keine Medien verfügbar sind.
- [`HTMLVideoElement.width`](/de/docs/Web/API/HTMLVideoElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Reference/Elements/video#width)-HTML-Attribut widerspiegelt, das die Breite des Anzeigebereichs in CSS-Pixeln angibt.

### Firefox-spezifische Eigenschaften

- [`HTMLVideoElement.mozParsedFrames`](/de/docs/Web/API/HTMLVideoElement/mozParsedFrames) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt eine `unsigned long`-Zahl mit der Anzahl der Videoframes zurück, die aus der Medienressource analysiert wurden.
- [`HTMLVideoElement.mozDecodedFrames`](/de/docs/Web/API/HTMLVideoElement/mozDecodedFrames) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt eine `unsigned long`-Zahl mit der Anzahl der analysierten Videoframes zurück, die in Bilder dekodiert wurden.
- [`HTMLVideoElement.mozPresentedFrames`](/de/docs/Web/API/HTMLVideoElement/mozPresentedFrames) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt eine `unsigned long`-Zahl mit der Anzahl der dekodierten Frames zurück, die in der Rendering-Pipeline zur Darstellung bereitgestellt wurden.
- [`HTMLVideoElement.mozPaintedFrames`](/de/docs/Web/API/HTMLVideoElement/mozPaintedFrames) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt eine `unsigned long`-Zahl mit der Anzahl der präsentierten Frames zurück, die auf dem Bildschirm gemalt wurden.
- [`HTMLVideoElement.mozFrameDelay`](/de/docs/Web/API/HTMLVideoElement/mozFrameDelay) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen `double`-Wert mit der Zeit zurück, um die das zuletzt gemalte Videoframe nachlief, in Sekunden.
- [`HTMLVideoElement.mozHasAudio`](/de/docs/Web/API/HTMLVideoElement/mozHasAudio) {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen Boolean-Wert zurück, der angibt, ob Audio mit dem Video verknüpft ist.

## Instanz-Methoden

_Erbt Methoden von seinem übergeordneten Interface, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), und [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback)
  - : Hebt einen zuvor registrierten Video-Frame-Callback auf (siehe [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback)).
- [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality)
  - : Gibt ein [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Objekt zurück, das die aktuellen Wiedergabemetriken enthält. Diese Informationen umfassen Dinge wie die Anzahl der weggeworfenen oder beschädigten Frames sowie die Gesamtanzahl der Frames.
- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
  - : Fordert den Benutzeragenten auf, das Video in den Bild-in-Bild-Modus zu versetzen.
- [`HTMLVideoElement.requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback)
  - : Registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Video-Frame an den Kompositor gesendet wird. Dadurch können Entwickler effiziente Operationen auf jedem Video-Frame durchführen.

## Ereignisse

_Erbt Ereignisse von seinem übergeordneten Interface, [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), und [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieses Interfaces ab.

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
- [Unterstützte Medienformate](/de/docs/Web/Media/Guides/Formats)
