---
title: Screen Capture API
slug: Web/API/Screen_Capture_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("Screen Capture API")}}

Die Screen Capture API führt Ergänzungen zur bestehenden Media Capture and Streams API ein, um es dem Benutzer zu ermöglichen, einen Bildschirm oder einen Teil eines Bildschirms (wie ein Fenster) auszuwählen, um ihn als Medienstream aufzunehmen. Dieser Stream kann dann aufgenommen oder über das Netzwerk mit anderen geteilt werden.

## Konzepte und Verwendung der Screen Capture API

Die Screen Capture API ist relativ einfach zu verwenden. Ihre einzige Methode ist [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), deren Aufgabe es ist, den Benutzer aufzufordern, einen Bildschirm oder einen Teil eines Bildschirms auszuwählen, um ihn in Form eines [`MediaStream`](/de/docs/Web/API/MediaStream) aufzunehmen.

Um mit der Aufnahme von Video vom Bildschirm zu beginnen, rufen Sie `getDisplayMedia()` auf `navigator.mediaDevices` auf:

```js
captureStream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

Das von `getDisplayMedia()` zurückgegebene {{jsxref("Promise")}} löst sich in einen [`MediaStream`](/de/docs/Web/API/MediaStream) auf, der die aufgenommene Medien streamt.

Lesen Sie den Artikel [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) für einen tieferen Einblick, wie Sie die API verwenden, um Bildschirm-Inhalte als Stream aufzunehmen.

Die Screen Capture API verfügt auch über Funktionen, die den Teil des Bildschirms begrenzen, der im Stream erfasst wird:

- Die **Element Capture API** beschränkt den erfassten Bereich auf ein angegebenes gerendertes DOM-Element und seine Nachkommen.
- Die **Region Capture API** schneidet den erfassten Bereich auf den Bereich des Bildschirms zu, in dem ein angegebenes DOM-Element gerendert wird.

Lesen Sie [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture), um mehr zu erfahren.

## Schnittstellen

- [`BrowserCaptureMediaStreamTrack`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack)
  - : Repräsentiert eine einzelne Videospur; erweitert die [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Klasse mit Methoden zur Begrenzung des Teils eines Selbstaufnahme-Streams (zum Beispiel eines Benutzerbildschirms oder -fensters), der erfasst wird.
- [`CaptureController`](/de/docs/Web/API/CaptureController)
  - : Bietet Methoden, mit denen eine Aufnahmesitzung weiter manipuliert werden kann, getrennt von ihrer Initiierung über [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia). Ein `CaptureController`-Objekt wird mit einer Aufnahmesitzung verbunden, indem es in einem [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) Aufruf als Wert der `controller` Eigenschaft des Optionsobjekts übergeben wird.
- [`CropTarget`](/de/docs/Web/API/CropTarget)
  - : Bietet eine statische Methode, [`fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static), die eine [`CropTarget`](/de/docs/Web/API/CropTarget) Instanz zurückgibt, die verwendet werden kann, um eine aufgenommene Videospur auf den Bereich zu beschränken, in dem ein angegebenes Element gerendert wird.
- [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)
  - : Bietet eine statische Methode, [`fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static), die eine [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget) Instanz zurückgibt, die verwendet werden kann, um eine aufgenommene Videospur auf ein angegebenes DOM-Element zu beschränken.

## Ergänzungen zur MediaDevices-Schnittstelle

- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
  - : Die Methode `getDisplayMedia()` wird zur `MediaDevices` Schnittstelle hinzugefügt. Ähnlich wie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), erstellt diese Methode ein Promise, das mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst wird, der den vom Benutzer ausgewählten Anzeigebereich enthält, in einem Format, das den angegebenen Optionen entspricht.

## Ergänzungen zu bestehenden Dictionaries

Die Screen Capture API fügt die folgenden Eigenschaften zu Dictionaries hinzu, die von anderen Spezifikationen definiert werden.

### MediaTrackConstraints

- [`MediaTrackConstraints.displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das angibt, welcher Typ von Anzeigeoberfläche erfasst werden soll. Der Wert ist einer von `browser`, `monitor` oder `window`.
- [`MediaTrackConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)
  - : Gibt an, ob das Video im Stream eine logische Anzeigeoberfläche repräsentiert (das heißt, eine, die möglicherweise nicht vollständig sichtbar auf dem Bildschirm ist oder komplett außerhalb des Bildschirms ist). Ein Wert von `true` gibt an, dass eine logische Anzeigeoberfläche erfasst werden soll.
- [`MediaTrackConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback)
  - : Steuert, ob das in einem Tab abgespielte Audio weiterhin über die lokalen Lautsprecher eines Benutzers abgespielt wird, wenn der Tab erfasst wird, oder ob es unterdrückt wird. Ein Wert von `true` gibt an, dass es unterdrückt wird.

### MediaTrackSettings

- [`MediaTrackSettings.cursor`](/de/docs/Web/API/MediaTrackSettings/cursor)
  - : Ein String, der angibt, ob die aktuell erfasste Anzeigeoberfläche den Mauszeiger enthält und wenn ja, ob er nur sichtbar ist, während sich die Maus bewegt, oder ob er immer sichtbar ist. Der Wert ist einer von `always`, `motion` oder `never`.
- [`MediaTrackSettings.displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface)
  - : Ein String, der angibt, welcher Typ von Anzeigeoberfläche aktuell erfasst wird. Der Wert ist einer von `browser`, `monitor` oder `window`.
- [`MediaTrackSettings.logicalSurface`](/de/docs/Web/API/MediaTrackSettings/logicalSurface)
  - : Ein boolescher Wert, der `true` ist, wenn das Video, das erfasst wird, nicht direkt einer einzigen Bildschirm-Anzeigefläche entspricht
- [`MediaTrackSettings.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback)
  - : Ein boolescher Wert, der `true` ist, wenn das erfasste Audio nicht über die lokalen Lautsprecher des Benutzers abgespielt wird.

### MediaTrackSupportedConstraints

- [`MediaTrackSupportedConstraints.displaySurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/displaySurface)
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) unterstützt.
- [`MediaTrackSupportedConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/logicalSurface)
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface) unterstützt.
- [`MediaTrackSupportedConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSupportedConstraints/suppressLocalAudioPlayback)
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) unterstützt.

## Permissions Policy Validierung

{{Glossary("User_agent", "Benutzeragenten")}}, die die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) unterstützen (entweder mit dem HTTP {{HTTPHeader("Permissions-Policy")}} Header oder dem {{HTMLElement("iframe")}} Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow)), können den Wunsch äußern, die Screen Capture API zu verwenden, indem sie die Direktive `display-capture` verwenden:

```html
<iframe allow="display-capture" src="/some-other-document.html">…</iframe>
```

Die Standard-Zulassungsliste ist `self`, was es jedem Inhalt innerhalb desselben Ursprungs erlaubt, Screen Capture zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
