---
title: Screen Capture API
slug: Web/API/Screen_Capture_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Screen Capture API")}}

Die Screen Capture API erweitert die bestehende Media Capture and Streams API, um es dem Benutzer zu ermöglichen, einen Bildschirm oder einen Teil eines Bildschirms (wie beispielsweise ein Fenster) auszuwählen, um diesen als Medienstream zu erfassen. Dieser Stream kann dann aufgezeichnet oder über das Netzwerk mit anderen geteilt werden.

## Konzepte und Nutzung der Screen Capture API

Die Nutzung der Screen Capture API ist relativ einfach. Ihre einzige Methode ist [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), deren Aufgabe es ist, den Benutzer aufzufordern, einen Bildschirm oder einen Teil eines Bildschirms zur Erfassung in Form eines [`MediaStream`](/de/docs/Web/API/MediaStream) auszuwählen.

Um mit der Erfassung des Videos vom Bildschirm zu beginnen, rufen Sie `getDisplayMedia()` auf `navigator.mediaDevices` auf:

```js
captureStream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

Das von `getDisplayMedia()` zurückgegebene {{jsxref("Promise")}} wird auf einen [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst, der die erfassten Medien streamt.

Weitere ausführliche Informationen zur Nutzung der API, um Bildschirminhalte als Stream zu erfassen, finden Sie im Artikel [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture).

Die Screen Capture API verfügt außerdem über Funktionen, die den aufgenommenen Teil des Bildschirms im Stream einschränken:

- Die **Element Capture API** beschränkt die erfasste Region auf ein angegebenes gerendertes DOM-Element und dessen Nachkommen.
- Die **Region Capture API** schneidet die erfasste Region auf den Bereich des Bildschirms zu, in dem ein angegebenes DOM-Element gerendert wird.

Weitere Informationen finden Sie unter [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture).

## Schnittstellen

- [`BrowserCaptureMediaStreamTrack`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack)
  - : Repräsentiert eine einzelne Videospur; erweitert die Klasse [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) mit Methoden, um den Teil eines Selbstaufnahme-Streams (zum Beispiel der Bildschirm oder das Fenster eines Benutzers) zu begrenzen.
- [`CaptureController`](/de/docs/Web/API/CaptureController)
  - : Bietet Methoden, mit denen eine Aufnahmesitzung weiter manipuliert werden kann, getrennt von ihrer Einleitung über [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia). Ein `CaptureController`-Objekt wird mit einer Aufnahmesitzung assoziiert, indem es in einen Aufruf von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) als Wert der `controller`-Eigenschaft im Optionsobjekt übergeben wird.
- [`CropTarget`](/de/docs/Web/API/CropTarget)
  - : Bietet eine statische Methode, [`fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static), die eine [`CropTarget`](/de/docs/Web/API/CropTarget)-Instanz zurückgibt, die verwendet werden kann, um eine aufgenommene Videospur auf den Bereich zuzuschneiden, in dem ein bestimmtes Element gerendert wird.
- [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)
  - : Bietet eine statische Methode, [`fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static), die eine [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)-Instanz zurückgibt, die verwendet werden kann, um eine aufgenommene Videospur auf ein bestimmtes DOM-Element zu beschränken.

## Ergänzungen zur MediaDevices-Schnittstelle

- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
  - : Die Methode `getDisplayMedia()` wird zur `MediaDevices`-Schnittstelle hinzugefügt. Ähnlich wie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erzeugt diese Methode ein Promise, das mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst wird, der den vom Benutzer ausgewählten Anzeigebereich enthält, in einem Format, das den angegebenen Optionen entspricht.

## Ergänzungen vorhandener Wörterbücher

Die Screen Capture API fügt den folgenden Wörterbüchern, die durch andere Spezifikationen definiert sind, Eigenschaften hinzu.

### MediaTrackConstraints

- [`MediaTrackConstraints.displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), der angibt, welcher Typ von Anzeigefläche erfasst werden soll. Der Wert ist einer von `browser`, `monitor` oder `window`.
- [`MediaTrackConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)
  - : Gibt an, ob das Video im Stream eine logische Anzeigefläche darstellt (also eine, die möglicherweise nicht vollständig sichtbar oder komplett vom Bildschirm verschwunden ist). Ein Wert von `true` gibt an, dass eine logische Anzeigefläche erfasst werden soll.
- [`MediaTrackConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback)
  - : Kontrolliert, ob das Audio, das in einem Tab abgespielt wird, weiterhin aus den lokalen Lautsprechern eines Benutzers wiedergegeben wird, wenn der Tab erfasst wird, oder ob es unterdrückt wird. Ein Wert von `true` zeigt an, dass es unterdrückt wird.

### MediaTrackSettings

- [`MediaTrackSettings.cursor`](/de/docs/Web/API/MediaTrackSettings/cursor)
  - : Ein String, der angibt, ob die derzeit erfasste Anzeigefläche den Mauszeiger enthält und ob er sichtbar ist, während die Maus in Bewegung ist, oder ob er immer sichtbar ist. Der Wert ist einer von `always`, `motion` oder `never`.
- [`MediaTrackSettings.displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface)
  - : Ein String, der angibt, welcher Typ von Anzeigefläche derzeit erfasst wird. Der Wert ist einer von `browser`, `monitor` oder `window`.
- [`MediaTrackSettings.logicalSurface`](/de/docs/Web/API/MediaTrackSettings/logicalSurface)
  - : Ein boolescher Wert, der `true` ist, wenn das erfasste Video nicht direkt einer einzigen Anzeigefläche auf dem Bildschirm entspricht.
- [`MediaTrackSettings.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback)
  - : Ein boolescher Wert, der `true` ist, wenn das erfasste Audio nicht über die lokalen Lautsprecher des Benutzers wiedergegeben wird.

### MediaTrackSupportedConstraints

- [`MediaTrackSupportedConstraints.displaySurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/displaySurface)
  - : Ein boolean, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) unterstützt.
- [`MediaTrackSupportedConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/logicalSurface)
  - : Ein boolean, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface) unterstützt.
- [`MediaTrackSupportedConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSupportedConstraints/suppressLocalAudioPlayback)
  - : Ein boolean, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) unterstützt.

## Überprüfung der Berechtigungsrichtlinie

{{Glossary("User_agent", "User Agents")}}, die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) unterstützen (entweder durch den HTTP {{HTTPHeader("Permissions-Policy")}}-Header oder das {{HTMLElement("iframe")}}-Attribut [`allow`](/de/docs/Web/HTML/Element/iframe#allow)), können ein Interesse an der Nutzung der Screen Capture API mit der Direktive `display-capture` angeben:

```html
<iframe allow="display-capture" src="/some-other-document.html">…</iframe>
```

Die Standard-Zulassungsliste ist `self`, was bedeutet, dass jeder Inhalt innerhalb desselben Ursprungs die Screen Capture verwenden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
