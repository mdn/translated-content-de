---
title: HTMLVideoElement
slug: Web/API/HTMLVideoElement
l10n:
  sourceCommit: 3975bcf6caa09c9c5f7fddf2eef2be6c021d00f6
---

{{APIRef("HTML DOM")}}

Implementiert durch das {{HTMLElement("video")}} Element, bietet das **`HTMLVideoElement`** Interface spezielle Eigenschaften und Methoden zur Manipulation von Videoobjekten. Es erbt auch Eigenschaften und Methoden von {{domxref("HTMLMediaElement")}} und {{domxref("HTMLElement")}}.

Die Liste der [unterstützten Medienformate](/de/docs/Web/Media/Formats) variiert von Browser zu Browser. Sie sollten entweder Ihr Video in einem einzigen Format bereitstellen, das alle relevanten Browser unterstützen, oder mehrere Videoquellen in genügend verschiedenen Formaten bereitstellen, die alle Browser abdecken, die Sie unterstützen müssen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten Interface, {{domxref("HTMLMediaElement")}}, und {{domxref("HTMLElement")}}._

- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
  - : Gibt an, ob der User-Agent den Bild-in-Bild-Modus den Benutzern vorschlagen soll oder nicht.
- {{domxref("HTMLVideoElement.height")}}
  - : Ein String, der das [`height`](/de/docs/Web/HTML/Element/video#height) HTML-Attribut widerspiegelt, welches die Höhe des Anzeigebereichs in CSS-Pixeln festlegt.
- {{domxref("HTMLVideoElement.poster")}}
  - : Ein String, der das [`poster`](/de/docs/Web/HTML/Element/video#poster) HTML-Attribut widerspiegelt, welches ein Bild angibt, das angezeigt werden soll, während keine Videodaten verfügbar sind.
- {{domxref("HTMLVideoElement.videoHeight")}} {{ReadOnlyInline}}
  - : Gibt einen nicht unterschriebenen ganzzahligen Wert zurück, der die intrinsische Höhe der Ressource in CSS-Pixeln angibt, oder 0, wenn noch keine Medien verfügbar sind.
- {{domxref("HTMLVideoElement.videoWidth")}} {{ReadOnlyInline}}
  - : Gibt einen nicht unterschriebenen ganzzahligen Wert zurück, der die intrinsische Breite der Ressource in CSS-Pixeln angibt, oder 0, wenn noch keine Medien verfügbar sind.
- {{domxref("HTMLVideoElement.width")}}
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Element/video#width) HTML-Attribut widerspiegelt, welches die Breite des Anzeigebereichs in CSS-Pixeln festlegt.

### Firefox-spezifische Eigenschaften

- {{domxref("HTMLVideoElement.mozParsedFrames")}} {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen `unsigned long` mit der Anzahl der Video-Frames zurück, die aus der Medienressource analysiert wurden.
- {{domxref("HTMLVideoElement.mozDecodedFrames")}} {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen `unsigned long` mit der Anzahl der analysierten Video-Frames zurück, die in Bilder decodiert wurden.
- {{domxref("HTMLVideoElement.mozPresentedFrames")}} {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen `unsigned long` mit der Anzahl der decodierten Frames zurück, die der Rendering-Pipeline zur Darstellung übergeben wurden.
- {{domxref("HTMLVideoElement.mozPaintedFrames")}} {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen `unsigned long` mit der Anzahl der dargestellten Frames zurück, die auf dem Bildschirm gemalt wurden.
- {{domxref("HTMLVideoElement.mozFrameDelay")}} {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen `double` mit der Zeit zurück, um die der letzte gemalte Video-Frame verspätet war, in Sekunden.
- {{domxref("HTMLVideoElement.mozHasAudio")}} {{Non-standard_Inline}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob Audio mit dem Video verknüpft ist.

## Instanz-Methoden

_Erbt Methoden von seinem übergeordneten Interface, {{domxref("HTMLMediaElement")}}, und {{domxref("HTMLElement")}}._

- {{DOMxRef("HTMLVideoElement.cancelVideoFrameCallback()")}}
  - : Hebt einen zuvor registrierten Video-Frame-Callback auf (siehe {{DOMxRef("HTMLVideoElement.requestVideoFrameCallback", "requestVideoFrameCallback()")}}).
- {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}}
  - : Gibt ein {{domxref("VideoPlaybackQuality")}} Objekt zurück, das die aktuellen Wiedergabemetriken enthält. Diese Information enthält Angaben wie die Anzahl der verloren gegangenen oder beschädigten Frames sowie die Gesamtanzahl der Frames.
- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
  - : Fordert an, dass der User-Agent das Video in den Bild-in-Bild-Modus versetzt.
- {{DOMxRef("HTMLVideoElement.requestVideoFrameCallback()")}}
  - : Registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Video-Frame an den Kompositor gesendet wird. Dadurch können Entwickler effiziente Operationen auf jedem Video-Frame durchführen.

## Ereignisse

_Erbt Ereignisse von seinem übergeordneten Interface, {{domxref("HTMLMediaElement")}}, und {{domxref("HTMLElement")}}._

Hören Sie diese Ereignisse mit {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder durch Zuweisung eines Ereignis-Listeners zu der `oneventname` Eigenschaft dieses Interfaces.

- {{DOMxRef("HTMLVideoElement.enterpictureinpicture_event", "enterpictureinpicture")}}
  - : Wird ausgelöst, wenn das `HTMLVideoElement` erfolgreich in den Bild-in-Bild-Modus wechselt.
- {{DOMxRef("HTMLVideoElement.leavepictureinpicture_event", "leavepictureinpicture")}}
  - : Wird ausgelöst, wenn das `HTMLVideoElement` erfolgreich den Bild-in-Bild-Modus verlässt.
- {{DOMxRef("HTMLVideoElement.resize_event", "resize")}}
  - : Wird ausgelöst, wenn eine oder beide der Eigenschaften {{domxref("HTMLVideoElement.videoWidth", "videoWidth")}} und {{domxref("HTMLVideoElement.videoHeight", "videoHeight")}} gerade aktualisiert wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{HTMLElement("video")}}.
- [Unterstützte Medienformate](/de/docs/Web/Media/Formats)
