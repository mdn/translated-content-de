---
title: Screen Capture API
slug: Web/API/Screen_Capture_API
l10n:
  sourceCommit: 2f3821009265f78e5ad9c3149b5fa954c030972f
---

{{DefaultAPISidebar("Screen Capture API")}}

Die Screen Capture API fügt der bestehenden Media Capture and Streams API Ergänzungen hinzu, um dem Benutzer zu ermöglichen, einen Bildschirm oder einen Teil eines Bildschirms (wie ein Fenster) auszuwählen, um diesen als Medien-Stream aufzunehmen. Dieser Stream kann dann aufgezeichnet oder über das Netzwerk mit anderen geteilt werden.

## Konzepte und Nutzung der Screen Capture API

Die Screen Capture API ist relativ einfach zu verwenden. Ihre einzige Methode ist [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), deren Aufgabe es ist, den Benutzer aufzufordern, einen Bildschirm oder einen Teil eines Bildschirms auszuwählen, um diesen in Form eines [`MediaStream`](/de/docs/Web/API/MediaStream) aufzunehmen.

Um mit der Erfassung von Video vom Bildschirm zu beginnen, rufen Sie `getDisplayMedia()` auf `navigator.mediaDevices` auf:

```js
captureStream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

Der von `getDisplayMedia()` zurückgegebene {{jsxref("Promise")}} löst sich auf ein [`MediaStream`](/de/docs/Web/API/MediaStream) auf, das die aufgezeichneten Medien streamt.

Lesen Sie den Artikel [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) für einen tieferen Einblick, wie Sie die API zur Bildschirmaufzeichnung als Stream verwenden können.

Die Screen Capture API verfügt auch über Funktionen, die den Teil des Bildschirms, der im Stream erfasst wird, einschränken:

- Die **Element Capture API** beschränkt den erfassten Bereich auf ein angegebenes gerendertes DOM-Element und dessen Nachkommen.
- Die **Region Capture API** schneidet den erfassten Bereich auf die Bildschirmfläche zu, in der ein angegebenes DOM-Element gerendert wird.

Informationen zur Verwendung der Element Capture und Region Capture APIs finden Sie unter [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture).

## Schnittstellen

- [`BrowserCaptureMediaStreamTrack`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack)
  - : Repräsentiert einen einzelnen Videospur; erweitert die Klasse [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) mit Methoden, um den Teil eines Selbstaufzeichnungsstreams (z. B. des Bildschirms oder Fensters eines Benutzers) zu begrenzen.
- [`CaptureController`](/de/docs/Web/API/CaptureController)
  - : Bietet Methoden, die verwendet werden können, um eine Sitzung der Aufzeichnung unabhängig von deren Start über [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) weiter zu bearbeiten. Ein `CaptureController` Objekt wird mit einer Aufnahmesitzung verbunden, indem es in einem Aufruf von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) als Wert für die `controller` Eigenschaft des Optionen-Objekts übergeben wird.
- [`CropTarget`](/de/docs/Web/API/CropTarget)
  - : Bietet eine statische Methode, [`fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static), die eine [`CropTarget`](/de/docs/Web/API/CropTarget) Instanz zurückgibt, die verwendet werden kann, um eine aufgezeichnete Videospur auf den Bereich zuzuschneiden, in dem ein angegebenes Element gerendert wird.
- [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)
  - : Bietet eine statische Methode, [`fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static), die eine [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget) Instanz zurückgibt, die verwendet werden kann, um eine aufgezeichnete Videospur auf ein angegebenes DOM-Element zu beschränken.

## Ergänzungen zur MediaDevices-Schnittstelle

- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
  - : Die Methode `getDisplayMedia()` wird der `MediaDevices`-Schnittstelle hinzugefügt. Ähnlich wie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), erstellt diese Methode ein Versprechen, das mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst wird, der den vom Benutzer ausgewählten Anzeigebereich in einem Format enthält, das den angegebenen Optionen entspricht.

## Ergänzungen zu bestehenden Wörterbüchern

Die Screen Capture API fügt den folgenden von anderen Spezifikationen definierten Wörterbüchern Eigenschaften hinzu.

### MediaTrackConstraints

- [`MediaTrackConstraints.displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), der angibt, welcher Typ von Anzeigefläche erfasst werden soll. Der Wert ist einer von `browser`, `monitor` oder `window`.
- [`MediaTrackConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)
  - : Gibt an, ob das Video im Stream eine logische Anzeigefläche darstellt (d.h. eine, die möglicherweise nicht vollständig auf dem Bildschirm sichtbar ist oder vollständig außerhalb des Bildschirms liegt). Ein `true`-Wert zeigt an, dass eine logische Anzeigefläche erfasst werden soll.
- [`MediaTrackConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback)
  - : Steuert, ob das Audio in einem Tab weiter über die lokalen Lautsprecher des Benutzers abgespielt wird, wenn der Tab erfasst wird, oder ob es unterdrückt wird. Ein `true`-Wert zeigt an, dass es unterdrückt wird.

### MediaTrackSettings

- [`MediaTrackSettings.cursor`](/de/docs/Web/API/MediaTrackSettings/cursor)
  - : Ein String, der angibt, ob die aktuell erfasste Anzeigefläche den Mauszeiger enthält und ob dieser, wenn ja, nur sichtbar ist, während die Maus in Bewegung ist oder ob er immer sichtbar ist. Der Wert ist einer von `always`, `motion` oder `never`.
- [`MediaTrackSettings.displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface)
  - : Ein String, der angibt, welcher Typ von Anzeigefläche momentan erfasst wird. Der Wert ist einer von `browser`, `monitor` oder `window`.
- [`MediaTrackSettings.logicalSurface`](/de/docs/Web/API/MediaTrackSettings/logicalSurface)
  - : Ein boolescher Wert, der `true` ist, wenn das erfasste Video nicht direkt einer einzelnen Anzeigefläche auf dem Bildschirm entspricht.
- [`MediaTrackSettings.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback)
  - : Ein boolescher Wert, der `true` ist, wenn das erfasste Audio nicht über die lokalen Lautsprecher des Benutzers abgespielt wird.
- [`MediaTrackSettings.screenPixelRatio`](/de/docs/Web/API/MediaTrackSettings/screenPixelRatio)
  - : Eine Zahl, die das Verhältnis der physischen Größe eines Pixels auf der erfassten Anzeigefläche (angezeigt in seiner physischen Auflösung) zur logischen Größe eines CSS-Pixels auf dem aufzeichnenden Bildschirm (angezeigt in seiner logischen Auflösung) darstellt. Es kann nicht als Einschränkung oder Fähigkeit verwendet werden.

### MediaTrackSupportedConstraints

- [`MediaTrackSupportedConstraints.displaySurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/displaySurface)
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) unterstützt.
- [`MediaTrackSupportedConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/logicalSurface)
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface) unterstützt.
- [`MediaTrackSupportedConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSupportedConstraints/suppressLocalAudioPlayback)
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) unterstützt.

## Validierung der Berechtigungsrichtlinie

{{Glossary("User_agent", "Benutzeragenten")}}, die die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) unterstützen (entweder durch den HTTP {{HTTPHeader("Permissions-Policy")}} Header oder das {{HTMLElement("iframe")}} Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow)), können den Wunsch angeben, die Screen Capture API zu verwenden, indem sie die Direktive `display-capture` verwenden:

```html
<iframe allow="display-capture" src="/some-other-document.html">…</iframe>
```

Die Standard-Zugriffsliste ist `self`, wodurch jedes Inhalt innerhalb desselben Ursprungs die Screen Capture verwenden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
