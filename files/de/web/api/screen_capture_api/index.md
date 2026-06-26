---
title: Screen Capture API
slug: Web/API/Screen_Capture_API
l10n:
  sourceCommit: 9b3f226141b5a609e173fd40de31b342abddcf44
---

{{DefaultAPISidebar("Screen Capture API")}}

Die Screen Capture API fügt der bestehenden Media Capture and Streams API Funktionen hinzu, um dem Benutzer die Auswahl eines Bildschirms oder eines Teils eines Bildschirms (wie z. B. ein Fenster) zu ermöglichen, um diesen als Medienstream aufzunehmen. Dieser Stream kann dann aufgezeichnet oder mit anderen über das Netzwerk geteilt werden.

## Konzepte und Nutzung der Screen Capture API

Die Screen Capture API ist relativ einfach zu verwenden. Ihre Hauptmethode ist [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), die den Benutzer auffordert, einen Bildschirm oder einen Bildschirmbereich auszuwählen, um ihn in Form eines [`MediaStream`](/de/docs/Web/API/MediaStream) aufzunehmen.

Um mit der Aufnahme von Videos vom Bildschirm zu beginnen, rufen Sie `getDisplayMedia()` auf `navigator.mediaDevices` auf:

```js
captureStream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

Das von `getDisplayMedia()` zurückgegebene {{jsxref("Promise")}} wird mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst, der die aufgenommene Bildschirmoberfläche streamt.

Sehen Sie sich den Artikel [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) für einen detaillierteren Einblick in die Verwendung der API zur Aufnahme von Bildschirm-Inhalten als Stream an.

### Screen Capture Erweiterungen

Die Screen Capture API verfügt über zusätzliche Funktionen, die ihre Fähigkeiten erweitern:

#### Begrenzung des aufgenommenen Bildschirmbereichs im Stream

- Die **Element Capture API** beschränkt den aufgenommenen Bereich auf ein bestimmtes gerendertes DOM-Element und dessen Nachkommen.
- Die **Region Capture API** schneidet den aufgenommenen Bereich auf den Bildschirmbereich zu, in dem ein bestimmtes DOM-Element gerendert wird.

Siehe [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture) um mehr zu erfahren.

#### Steuerung des aufgenommenen Bildschirmbereichs

Die **Captured Surface Control API** ermöglicht es der Aufnahmeanwendung, eingeschränkte Kontrolle über die aufgenommene Bildschirmoberfläche bereitzustellen, zum Beispiel das Zoomen und Scrollen ihrer Inhalte.

Siehe [Verwendung der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) um mehr zu erfahren.

## Schnittstellen

- [`BrowserCaptureMediaStreamTrack`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack)
  - : Repräsentiert eine einzelne Video-Spur; erweitert die [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Klasse mit Methoden zur Begrenzung des Teils eines Selbst-Aufnahmestreams (zum Beispiel des Bildschirms oder Fensters eines Benutzers), der aufgenommen wird.
- [`CaptureController`](/de/docs/Web/API/CaptureController)
  - : Bietet Methoden, die verwendet werden können, um eine aufgenommene Bildschirmoberfläche (aufgenommen über [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)) weiter zu manipulieren. Ein `CaptureController`-Objekt wird durch Übergeben an einen `getDisplayMedia()`-Aufruf als Wert der `controller`-Eigenschaft des Optionsobjekts mit einer aufgenommenen Bildschirmoberfläche verknüpft.
- [`CropTarget`](/de/docs/Web/API/CropTarget)
  - : Bietet eine statische Methode, [`fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static), die eine [`CropTarget`](/de/docs/Web/API/CropTarget)-Instanz zurückgibt, die verwendet werden kann, um eine aufgenommene Videospur auf den Bereich zuzuschneiden, in dem ein bestimmtes Element gerendert wird.
- [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)
  - : Bietet eine statische Methode, [`fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static), die eine [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)-Instanz zurückgibt, die verwendet werden kann, um eine aufgenommene Videospur auf ein angegebenes DOM-Element zu beschränken.

## Ergänzungen zur MediaDevices-Schnittstelle

- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
  - : Die `getDisplayMedia()`-Methode wird zur `MediaDevices`-Schnittstelle hinzugefügt. Ähnlich wie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erstellt diese Methode ein Versprechen, das mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst wird, der den vom Benutzer ausgewählten Bildschirmbereich in einem Format enthält, das den angegebenen Optionen entspricht.

## Ergänzungen zu bestehenden Wörterbüchern

Die Screen Capture API fügt den folgenden, von anderen Spezifikationen definierten, Wörterbüchern Eigenschaften hinzu.

### MediaTrackConstraints

- [`MediaTrackConstraints.displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das angibt, welcher Typ von Bildschirmoberfläche aufgenommen werden soll. Der Wert ist einer von `browser`, `monitor` oder `window`.
- [`MediaTrackConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)
  - : Gibt an, ob das Video im Stream eine logische Bildschirmoberfläche darstellt (das heißt, eine, die möglicherweise nicht vollständig sichtbar ist oder sich vollständig außerhalb des Bildschirms befindet). Ein Wert von `true` bedeutet, dass eine logische Bildschirmoberfläche aufgenommen werden soll.
- [`MediaTrackConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback)
  - : Steuert, ob der Ton in einem Tabulator weiterhin über die lokalen Lautsprecher eines Benutzers abgespielt wird, wenn der Tabulator aufgenommen wird, oder ob er unterdrückt wird. Ein Wert von `true` bedeutet, dass er unterdrückt wird.

### MediaTrackSettings

- [`MediaTrackSettings.cursor`](/de/docs/Web/API/MediaTrackSettings/cursor)
  - : Ein String, der angibt, ob die gerade aufgenommene Bildschirmoberfläche den Mauszeiger einschließt und, falls ja, ob er nur sichtbar ist, während die Maus in Bewegung ist, oder ob er immer sichtbar ist. Der Wert ist einer von `always`, `motion` oder `never`.
- [`MediaTrackSettings.displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface)
  - : Ein String, der angibt, welcher Typ von Bildschirmoberfläche derzeit aufgenommen wird. Der Wert ist einer von `browser`, `monitor` oder `window`.
- [`MediaTrackSettings.logicalSurface`](/de/docs/Web/API/MediaTrackSettings/logicalSurface)
  - : Ein boolescher Wert, der `true` ist, wenn das aufgenommene Video nicht direkt einer einzigen Bildschirmfläche entspricht.
- [`MediaTrackSettings.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback)
  - : Ein boolescher Wert, der `true` ist, wenn die aufgenommene Audioausgabe nicht über die lokalen Lautsprecher des Benutzers abgespielt wird.
- [`MediaTrackSettings.screenPixelRatio`](/de/docs/Web/API/MediaTrackSettings/screenPixelRatio)
  - : Eine Zahl, die das Verhältnis der physischen Größe eines Pixels auf der aufgenommenen Bildschirmoberfläche (angezeigt in ihrer physischen Auflösung) zur logischen Größe eines CSS-Pixels auf dem aufzeichnenden Bildschirm (angezeigt in ihrer logischen Auflösung) darstellt. Sie kann nicht als Einschränkung oder Fähigkeit verwendet werden.

### MediaTrackSupportedConstraints

- [`MediaTrackSupportedConstraints.displaySurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/displaySurface)
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) unterstützt.
- [`MediaTrackSupportedConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/logicalSurface)
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface) unterstützt.
- [`MediaTrackSupportedConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSupportedConstraints/suppressLocalAudioPlayback)
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) unterstützt.

## Sicherheitsüberlegungen

Websites, die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) (entweder mit dem HTTP {{HTTPHeader("Permissions-Policy")}} Header oder dem {{HTMLElement("iframe")}} Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow)) unterstützen, können den Wunsch angeben, die Screen Capture API mit der Direktive {{HTTPHeader("Permissions-Policy/display-capture", "display-capture")}} zu verwenden:

```html
<iframe allow="display-capture" src="/some-other-document.html">…</iframe>
```

Eine Seite kann auch den Wunsch angeben, die [Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) über die Direktive {{HTTPHeader("Permissions-Policy/captured-surface-control", "captured-surface-control")}} zu verwenden. Insbesondere werden die Methoden [`forwardWheel()`](/de/docs/Web/API/CaptureController/forwardWheel), [`increaseZoomLevel()`](/de/docs/Web/API/CaptureController/increaseZoomLevel), [`decreaseZoomLevel()`](/de/docs/Web/API/CaptureController/decreaseZoomLevel) und [`resetZoomLevel()`](/de/docs/Web/API/CaptureController/resetZoomLevel) von dieser Direktive kontrolliert.

Die Standardeinstellungen für beide Direktiven ist `self`, was bedeutet, dass alle Inhalte innerhalb desselben Ursprungs die Screen Capture verwenden können.

Diese Methoden werden als _leistungsstarke Funktionen_ betrachtet, was bedeutet, dass selbst wenn die Berechtigung über eine `Permissions-Policy` zugelassen wird, der Benutzer immer noch um Erlaubnis gebeten wird, sie zu verwenden. Die [Permissions API](/de/docs/Web/API/Permissions_API) kann verwendet werden, um die aggregierte Berechtigung (sowohl von der Website als auch vom Benutzer) zur Nutzung der aufgelisteten Funktionen abzufragen.

Darüber hinaus erfordert die Spezifikation, dass der Benutzer kürzlich mit der Seite interagiert hat, um diese Funktionen zu nutzen — dies bedeutet, dass eine {{Glossary("Transient_activation", "transiente Aktivierung")}} erforderlich ist. Weitere Details finden Sie auf den einzelnen Methoden-Seiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
- [Verwendung der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
