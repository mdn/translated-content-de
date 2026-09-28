---
title: Screen Capture API
slug: Web/API/Screen_Capture_API
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{DefaultAPISidebar("Screen Capture API")}}

Die Screen Capture API erweitert die bestehende Media Capture and Streams API. Sie ermöglicht es Benutzern, einen Bildschirm oder einen Teil davon (etwa ein Fenster) auszuwählen und als Medienstream zu erfassen. Dieser Stream kann anschließend aufgezeichnet oder über das Netzwerk mit anderen geteilt werden.

## Konzepte und Verwendung der Screen Capture API

Die Screen Capture API ist relativ einfach zu verwenden. Ihre wichtigste Methode ist [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia). Sie fordert den Benutzer auf, einen Bildschirm oder einen Teil davon auszuwählen, der als [`MediaStream`](/de/docs/Web/API/MediaStream) erfasst werden soll.

Um die Videoerfassung des Bildschirms zu starten, rufen Sie `getDisplayMedia()` auf `navigator.mediaDevices` auf:

```js
captureStream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

Das von `getDisplayMedia()` zurückgegebene {{jsxref("Promise")}} wird mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) erfüllt, der die erfasste Anzeigefläche streamt.

Eine ausführlichere Beschreibung, wie Sie mit der API Bildschirminhalte als Stream erfassen, finden Sie im Artikel [Die Screen Capture API verwenden](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture).

### Erweiterungen für die Bildschirmerfassung

Die Screen Capture API bietet zusätzliche Funktionen, die ihre Möglichkeiten erweitern:

#### Den im Stream erfassten Bildschirmbereich begrenzen

- Die **Element Capture API** beschränkt den erfassten Bereich auf ein bestimmtes gerendertes DOM-Element und dessen Nachfahren.
- Die **Region Capture API** schneidet den erfassten Bereich auf den Bildschirmbereich zu, in dem ein bestimmtes DOM-Element gerendert wird.

Weitere Informationen finden Sie unter [Die Element Capture API und die Region Capture API verwenden](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture).

#### Den erfassten Bildschirmbereich steuern

Die **Captured Surface Control API** ermöglicht es der erfassenden Anwendung, die erfasste Anzeigefläche in begrenztem Umfang zu steuern, beispielsweise deren Inhalt zu zoomen und zu scrollen.

Weitere Informationen finden Sie unter [Die Captured Surface Control API verwenden](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control).

## Schnittstellen

- [`BrowserCaptureMediaStreamTrack`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack)
  - : Repräsentiert eine einzelne Videospur; erweitert die Klasse [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) um Methoden, mit denen sich der erfasste Teil eines Streams zur Selbsterfassung (beispielsweise des Bildschirms oder Fensters eines Benutzers) begrenzen lässt.
- [`CaptureController`](/de/docs/Web/API/CaptureController)
  - : Stellt Methoden bereit, mit denen sich eine erfasste Anzeigefläche (erfasst über [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)) weiter beeinflussen lässt. Ein `CaptureController`-Objekt wird einer erfassten Anzeigefläche zugeordnet, indem es bei einem Aufruf von `getDisplayMedia()` als Wert der Eigenschaft `controller` des Optionsobjekts übergeben wird.
- [`CropTarget`](/de/docs/Web/API/CropTarget)
  - : Stellt die statische Methode [`fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static) bereit. Sie gibt eine [`CropTarget`](/de/docs/Web/API/CropTarget)-Instanz zurück, mit der eine erfasste Videospur auf den Bereich zugeschnitten werden kann, in dem ein bestimmtes Element gerendert wird.
- [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)
  - : Stellt die statische Methode [`fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static) bereit. Sie gibt eine [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)-Instanz zurück, mit der eine erfasste Videospur auf ein bestimmtes DOM-Element beschränkt werden kann.

## Ergänzungen zur MediaDevices-Schnittstelle

- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
  - : Die Methode `getDisplayMedia()` wird der Schnittstelle `MediaDevices` hinzugefügt. Ähnlich wie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erstellt diese Methode ein Promise, das mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) erfüllt wird. Dieser enthält den vom Benutzer ausgewählten Anzeigebereich in einem Format, das den angegebenen Optionen entspricht.

## Ergänzungen zu bestehenden Dictionaries

Die Screen Capture API ergänzt die folgenden, in anderen Spezifikationen definierten Dictionaries um Eigenschaften.

### MediaTrackConstraints

- [`MediaTrackConstraints.displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), der angibt, welcher Typ von Anzeigefläche erfasst werden soll. Der Wert ist entweder `browser`, `monitor` oder `window`.
- [`MediaTrackConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)
  - : Gibt an, ob das Video im Stream eine logische Anzeigefläche darstellt (also eine Anzeigefläche, die möglicherweise nicht vollständig auf dem Bildschirm sichtbar ist oder sich vollständig außerhalb des sichtbaren Bildschirmbereichs befindet). Der Wert `true` gibt an, dass eine logische Anzeigefläche erfasst werden soll.
- [`MediaTrackConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback)
  - : Steuert, ob die Audiowiedergabe eines Tabs bei dessen Erfassung weiterhin über die lokalen Lautsprecher des Benutzers erfolgt oder unterdrückt wird. Der Wert `true` gibt an, dass sie unterdrückt wird.

### MediaTrackSettings

- [`MediaTrackSettings.cursor`](/de/docs/Web/API/MediaTrackSettings/cursor)
  - : Eine Zeichenfolge, die angibt, ob die derzeit erfasste Anzeigefläche den Mauszeiger enthält und, falls ja, ob dieser nur bei Bewegung der Maus oder immer sichtbar ist. Der Wert ist entweder `always`, `motion` oder `never`.
- [`MediaTrackSettings.displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface)
  - : Eine Zeichenfolge, die angibt, welcher Typ von Anzeigefläche derzeit erfasst wird. Der Wert ist entweder `browser`, `monitor` oder `window`.
- [`MediaTrackSettings.logicalSurface`](/de/docs/Web/API/MediaTrackSettings/logicalSurface)
  - : Ein boolescher Wert, der `true` ist, wenn das erfasste Video nicht unmittelbar einem einzelnen sichtbaren Anzeigebereich auf dem Bildschirm entspricht.
- [`MediaTrackSettings.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback)
  - : Ein boolescher Wert, der `true` ist, wenn das erfasste Audio nicht über die lokalen Lautsprecher des Benutzers wiedergegeben wird.
- [`MediaTrackSettings.screenPixelRatio`](/de/docs/Web/API/MediaTrackSettings/screenPixelRatio)
  - : Eine Zahl, die das Verhältnis zwischen der physischen Größe eines Pixels auf der erfassten Anzeigefläche (bei ihrer physischen Auflösung) und der logischen Größe eines CSS-Pixels auf dem erfassenden Bildschirm (bei seiner logischen Auflösung) darstellt. Sie kann weder als Constraint noch als Capability verwendet werden.

### MediaDevices.getSupportedConstraints()

Das von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegebene Objekt enthält drei zusätzliche Eigenschaften.

- `displaySurface`
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung den Constraint [`MediaTrackConstraints.displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) unterstützt.
- `logicalSurface`
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung den Constraint [`MediaTrackConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface) unterstützt.
- `suppressLocalAudioPlayback`
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung den Constraint [`MediaTrackConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) unterstützt.

## Sicherheitsaspekte

Websites, die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) unterstützen (entweder über den HTTP-Header {{HTTPHeader("Permissions-Policy")}} oder über das Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) des Elements {{HTMLElement("iframe")}}), können mit der Direktive {{HTTPHeader("Permissions-Policy/display-capture", "display-capture")}} angeben, dass sie die Screen Capture API verwenden möchten:

```html
<iframe allow="display-capture" src="/some-other-document.html">…</iframe>
```

Eine Website kann über die Direktive {{HTTPHeader("Permissions-Policy/captured-surface-control", "captured-surface-control")}} auch angeben, dass sie die [Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) verwenden möchte. Insbesondere werden die Methoden [`forwardWheel()`](/de/docs/Web/API/CaptureController/forwardWheel), [`increaseZoomLevel()`](/de/docs/Web/API/CaptureController/increaseZoomLevel), [`decreaseZoomLevel()`](/de/docs/Web/API/CaptureController/decreaseZoomLevel) und [`resetZoomLevel()`](/de/docs/Web/API/CaptureController/resetZoomLevel) durch diese Direktive gesteuert.

Die Standard-Zulassungsliste für beide Direktiven ist `self`. Damit darf jeder Inhalt desselben Ursprungs die Screen Capture API verwenden.

Diese Methoden gelten als _leistungsfähige Funktionen_. Das bedeutet, dass der Benutzer auch dann um Erlaubnis für ihre Verwendung gebeten wird, wenn sie über eine `Permissions-Policy` zugelassen sind. Mit der [Permissions API](/de/docs/Web/API/Permissions_API) lässt sich die zusammengefasste Berechtigung (von der Website und vom Benutzer) zur Verwendung der genannten Funktionen abfragen.

Darüber hinaus verlangt die Spezifikation, dass der Benutzer kürzlich mit der Seite interagiert hat, um diese Funktionen zu verwenden – es ist also eine {{Glossary("Transient_activation", "vorübergehende Aktivierung")}} erforderlich. Weitere Einzelheiten finden Sie auf den Seiten der jeweiligen Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die Screen Capture API verwenden](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Die Element Capture API und die Region Capture API verwenden](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
- [Die Captured Surface Control API verwenden](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
