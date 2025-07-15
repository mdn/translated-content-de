---
title: Screen Capture API
slug: Web/API/Screen_Capture_API
l10n:
  sourceCommit: 83a92f1eaf27dabf71beec6c548afb03171aa194
---

{{DefaultAPISidebar("Screen Capture API")}}

Die Screen Capture API führt Ergänzungen zur bestehenden Media Capture and Streams API ein, um den Benutzer auszuwählen, einen Bildschirm oder einen Teil eines Bildschirms (wie ein Fenster) als Medien-Stream aufzunehmen. Dieser Stream kann dann aufgenommen oder mit anderen über das Netzwerk geteilt werden.

## Konzepte und Nutzung der Screen Capture API

Die Screen Capture API ist relativ einfach zu verwenden. Ihre Hauptmethode ist [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), deren Aufgabe es ist, den Benutzer zu bitten, einen Bildschirm oder einen Teil eines Bildschirms auszuwählen, der in Form eines [`MediaStream`](/de/docs/Web/API/MediaStream) aufgenommen werden soll.

Um mit der Aufnahme von Videos vom Bildschirm zu beginnen, rufen Sie `getDisplayMedia()` in `navigator.mediaDevices` auf:

```js
captureStream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

Das von `getDisplayMedia()` zurückgegebene {{jsxref("Promise")}} wird mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst, der die aufgenommene Anzeigefläche streamt.

Lesen Sie den Artikel [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) für einen detaillierteren Blick darauf, wie Sie die API nutzen, um Bildschirm-Inhalte als Stream aufzunehmen.

### Erweiterungen der Screen Capture API

Die Screen Capture API verfügt über zusätzliche Funktionen, die ihre Möglichkeiten erweitern:

#### Begrenzung der im Stream aufgenommenen Bildschirmfläche

- Die **Element Capture API** beschränkt die aufgenommene Region auf ein bestimmtes gerendertes DOM-Element und seine Nachkommen.
- Die **Region Capture API** schneidet die aufgenommene Region auf den Bereich des Bildschirms zu, in dem ein bestimmtes DOM-Element gerendert wird.

Lesen Sie [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture), um mehr zu erfahren.

#### Steuerung der aufgenommenen Bildschirmfläche

Die **Captured Surface Control API** ermöglicht es der erfassenden Anwendung, begrenzte Kontrolle über die erfasste Anzeigefläche zu bieten, beispielsweise durch Zoomen und Scrollen ihrer Inhalte.

Lesen Sie [Verwendung der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control), um mehr zu erfahren.

## Schnittstellen

- [`BrowserCaptureMediaStreamTrack`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack)
  - : Repräsentiert eine einzelne Videospur; erweitert die [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Klasse mit Methoden, um den Teil eines Self-Capture-Streams (zum Beispiel der Bildschirm oder ein Fenster eines Benutzers) zu begrenzen, der aufgenommen wird.
- [`CaptureController`](/de/docs/Web/API/CaptureController)
  - : Bietet Methoden, die verwendet werden können, um eine erfasste Anzeigefläche weiter zu manipulieren (erfasst über [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)). Ein `CaptureController`-Objekt wird einer erfassten Anzeigefläche zugeordnet, indem es in einen `getDisplayMedia()`-Aufruf als Wert der `controller`-Eigenschaft des Optionsobjekts übergeben wird.
- [`CropTarget`](/de/docs/Web/API/CropTarget)
  - : Stellt eine statische Methode zur Verfügung, [`fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static), die eine [`CropTarget`](/de/docs/Web/API/CropTarget)-Instanz zurückgibt, die verwendet werden kann, um eine aufgenommene Videospur auf den Bereich zuzuschneiden, in dem ein bestimmtes Element gerendert wird.
- [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)
  - : Stellt eine statische Methode zur Verfügung, [`fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static), die eine [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)-Instanz zurückgibt, die verwendet werden kann, um eine aufgenommene Videospur auf ein bestimmtes DOM-Element zu beschränken.

## Ergänzungen zur MediaDevices-Schnittstelle

- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
  - : Die `getDisplayMedia()`-Methode wird der `MediaDevices`-Schnittstelle hinzugefügt. Ähnlich wie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erstellt diese Methode ein Versprechen, das mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst wird, welches den vom Benutzer ausgewählten Anzeigebereich im spezifizierten Format enthält.

## Ergänzungen zu bestehenden Wörterbüchern

Die Screen Capture API fügt den folgenden Wörterbüchern, die durch andere Spezifikationen definiert sind, Eigenschaften hinzu.

### MediaTrackConstraints

- [`MediaTrackConstraints.displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das angibt, welche Art von Anzeigefläche aufgenommen werden soll. Der Wert ist einer von `browser`, `monitor` oder `window`.
- [`MediaTrackConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)
  - : Gibt an, ob das Video im Stream eine logische Anzeigefläche darstellt (das heißt, eine, die möglicherweise nicht vollständig sichtbar auf dem Bildschirm ist oder vollständig außerhalb des Bildschirms liegt). Ein Wert von `true` zeigt an, dass eine logische Anzeigefläche aufgenommen werden soll.
- [`MediaTrackConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback)
  - : Steuert, ob das Audio, das in einem Tab abgespielt wird, weiterhin über die lokalen Lautsprecher eines Benutzers wiedergegeben wird, wenn der Tab aufgenommen wird, oder ob es unterdrückt wird. Ein Wert von `true` zeigt an, dass es unterdrückt wird.

### MediaTrackSettings

- [`MediaTrackSettings.cursor`](/de/docs/Web/API/MediaTrackSettings/cursor)
  - : Ein String, der angibt, ob die derzeit aufgenommene Anzeigefläche den Mauszeiger enthält und, falls ja, ob dieser nur sichtbar ist, während die Maus in Bewegung ist, oder ob er immer sichtbar ist. Der Wert ist einer von `always`, `motion` oder `never`.
- [`MediaTrackSettings.displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface)
  - : Ein String, der angibt, welche Art von Anzeigefläche derzeit aufgenommen wird. Der Wert ist einer von `browser`, `monitor` oder `window`.
- [`MediaTrackSettings.logicalSurface`](/de/docs/Web/API/MediaTrackSettings/logicalSurface)
  - : Ein boolescher Wert, der `true` ist, wenn das aufgenommene Video nicht direkt einer einzigen Bildschirm-Anzeigefläche entspricht.
- [`MediaTrackSettings.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback)
  - : Ein boolescher Wert, der `true` ist, wenn das aufgenommene Audio nicht über die lokalen Lautsprecher des Benutzers abgespielt wird.
- [`MediaTrackSettings.screenPixelRatio`](/de/docs/Web/API/MediaTrackSettings/screenPixelRatio)
  - : Eine Nummer, die das Verhältnis der physischen Größe eines Pixels auf der erfassten Anzeigefläche (angezeigt in ihrer physischen Auflösung) zur logischen Größe eines CSS-Pixels auf dem aufnehmenden Bildschirm (angezeigt in ihrer logischen Auflösung) repräsentiert. Es kann nicht als Einschränkung oder Fähigkeit verwendet werden.

### MediaTrackSupportedConstraints

- [`MediaTrackSupportedConstraints.displaySurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/displaySurface)
  - : Ein Boolean, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) unterstützt.
- [`MediaTrackSupportedConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/logicalSurface)
  - : Ein Boolean, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface) unterstützt.
- [`MediaTrackSupportedConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSupportedConstraints/suppressLocalAudioPlayback)
  - : Ein Boolean, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) unterstützt.

## Sicherheitsüberlegungen

Websites, die die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) unterstützen (entweder mithilfe des HTTP-{{HTTPHeader("Permissions-Policy")}} Headers oder des {{HTMLElement("iframe")}}-Attributs [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow)), können den Wunsch spezifizieren, die Screen Capture API mit der Direktive {{HTTPHeader("Permissions-Policy/display-capture", "display-capture")}} zu verwenden:

```html
<iframe allow="display-capture" src="/some-other-document.html">…</iframe>
```

Eine Website kann auch den Wunsch spezifizieren, die [Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) über die Direktive {{HTTPHeader("Permissions-Policy/captured-surface-control", "captured-surface-control")}} zu verwenden. Speziell die Methoden [`forwardWheel()`](/de/docs/Web/API/CaptureController/forwardWheel), [`increaseZoomLevel()`](/de/docs/Web/API/CaptureController/increaseZoomLevel), [`decreaseZoomLevel()`](/de/docs/Web/API/CaptureController/decreaseZoomLevel) und [`resetZoomLevel()`](/de/docs/Web/API/CaptureController/resetZoomLevel) werden von dieser Direktive gesteuert.

Die Standard-Zulassungsliste für beide Direktiven ist `self`, was jeglichen Inhalt innerhalb desselben Ursprungs die Nutzung der Screen Capture erlaubt.

Diese Methoden werden als [mächtige Funktionen](/de/docs/Web/Security#secure_contexts_and_feature_permissions) angesehen, was bedeutet, dass selbst wenn die Erlaubnis über eine `Permissions-Policy` erlaubt ist, der Benutzer dennoch um Erlaubnis zur Nutzung gebeten wird. Die [Permissions API](/de/docs/Web/API/Permissions_API) kann verwendet werden, um die aggregierte Erlaubnis (sowohl von der Website als auch vom Benutzer) zur Nutzung der aufgelisteten Funktionen abzufragen.

Darüber hinaus erfordert die Spezifikation, dass ein Benutzer kürzlich mit der Seite interagiert hat, um diese Funktionen nutzen zu können – das bedeutet, dass {{Glossary("Transient_activation", "transiente Aktivierung")}} erforderlich ist. Weitere Details finden Sie auf den einzelnen Methodenseiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
- [Verwendung der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
