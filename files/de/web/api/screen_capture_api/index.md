---
title: Screen Capture API
slug: Web/API/Screen_Capture_API
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{DefaultAPISidebar("Screen Capture API")}}

Die Screen Capture API erweitert die bestehende Media Capture and Streams API. Sie ermöglicht es Benutzern, einen Bildschirm oder einen Teil davon (beispielsweise ein Fenster) auszuwählen und als Medienstrom aufzunehmen. Dieser Strom kann anschließend aufgezeichnet oder über das Netzwerk mit anderen geteilt werden.

## Konzepte und Verwendung der Screen Capture API

Die Screen Capture API ist relativ einfach zu verwenden. Ihre wichtigste Methode ist [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia). Sie fordert den Benutzer auf, einen Bildschirm oder einen Teil davon auszuwählen, der als [`MediaStream`](/de/docs/Web/API/MediaStream) aufgenommen werden soll.

Um die Videoaufnahme des Bildschirms zu starten, rufen Sie `getDisplayMedia()` auf `navigator.mediaDevices` auf:

```js
captureStream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

Das von `getDisplayMedia()` zurückgegebene {{jsxref("Promise")}} wird mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) erfüllt, der die aufgenommene Anzeigefläche überträgt.

Eine ausführlichere Beschreibung, wie Sie mit der API Bildschirminhalte als Strom aufnehmen, finden Sie im Artikel [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture).

### Erweiterungen für die Bildschirmaufnahme

Die Screen Capture API bietet zusätzliche Funktionen, die ihre Möglichkeiten erweitern:

#### Begrenzung des aufgenommenen Bildschirmbereichs im Strom

- Die **Element Capture API** beschränkt den aufgenommenen Bereich auf ein bestimmtes gerendertes DOM-Element und dessen Nachfahren.
- Die **Region Capture API** schneidet den aufgenommenen Bereich auf den Bildschirmbereich zu, in dem ein bestimmtes DOM-Element gerendert wird.

Weitere Informationen finden Sie unter [Verwendung der Element Capture API und der Region Capture API](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture).

#### Steuerung des aufgenommenen Bildschirmbereichs

Die **Captured Surface Control API** ermöglicht der aufnehmenden Anwendung eine begrenzte Steuerung der aufgenommenen Anzeigefläche, beispielsweise das Zoomen und Scrollen ihrer Inhalte.

Weitere Informationen finden Sie unter [Verwendung der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control).

## Schnittstellen

- [`BrowserCaptureMediaStreamTrack`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack)
  - : Repräsentiert eine einzelne Videospur und erweitert die Klasse [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) um Methoden, mit denen sich der aufgenommene Teil eines Stroms zur Aufnahme der eigenen Anzeige (beispielsweise des Bildschirms oder eines Fensters des Benutzers) begrenzen lässt.
- [`CaptureController`](/de/docs/Web/API/CaptureController)
  - : Stellt Methoden bereit, mit denen eine aufgenommene Anzeigefläche weiter gesteuert werden kann (die über [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) aufgenommen wurde). Ein `CaptureController`-Objekt wird einer aufgenommenen Anzeigefläche zugeordnet, indem es beim Aufruf von `getDisplayMedia()` als Wert der `controller`-Eigenschaft des Optionsobjekts übergeben wird.
- [`CropTarget`](/de/docs/Web/API/CropTarget)
  - : Stellt eine statische Methode [`fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static) bereit. Sie gibt eine [`CropTarget`](/de/docs/Web/API/CropTarget)-Instanz zurück, mit der eine aufgenommene Videospur auf den Bereich zugeschnitten werden kann, in dem ein bestimmtes Element gerendert wird.
- [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)
  - : Stellt eine statische Methode [`fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static) bereit. Sie gibt eine [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)-Instanz zurück, mit der eine aufgenommene Videospur auf ein bestimmtes DOM-Element beschränkt werden kann.

## Ergänzungen der MediaDevices-Schnittstelle

- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
  - : Die Methode `getDisplayMedia()` wird der `MediaDevices`-Schnittstelle hinzugefügt. Ähnlich wie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erstellt diese Methode ein Promise, das mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) erfüllt wird. Dieser enthält den vom Benutzer ausgewählten Anzeigebereich in einem Format, das den angegebenen Optionen entspricht.

## Ergänzungen bestehender Dictionaries

Die Screen Capture API ergänzt Eigenschaften in den folgenden Dictionaries, die durch andere Spezifikationen definiert sind.

### MediaTrackConstraints

- [`MediaTrackConstraints.displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), der angibt, welcher Typ von Anzeigefläche aufgenommen werden soll. Der Wert ist `browser`, `monitor` oder `window`.
- [`MediaTrackConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)
  - : Gibt an, ob das Video im Strom eine logische Anzeigefläche darstellt (also eine Anzeigefläche, die möglicherweise nicht vollständig auf dem Bildschirm sichtbar ist oder sich ganz außerhalb des sichtbaren Bildschirmbereichs befindet). Der Wert `true` gibt an, dass eine logische Anzeigefläche aufgenommen werden soll.
- [`MediaTrackConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback)
  - : Steuert, ob der in einem Tab wiedergegebene Ton während der Aufnahme des Tabs weiterhin über die lokalen Lautsprecher des Benutzers ausgegeben oder unterdrückt wird. Der Wert `true` gibt an, dass die Wiedergabe unterdrückt wird.

### MediaStreamTrack.getSettings()

Das von [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) zurückgegebene Objekt enthält zusätzliche Eigenschaften.

- [`cursor`](/de/docs/Web/API/MediaStreamTrack/getSettings#cursor)
  - : Eine Zeichenfolge, die angibt, ob die aktuell aufgenommene Anzeigefläche den Mauszeiger enthält und, falls ja, ob er nur sichtbar ist, während die Maus bewegt wird, oder ob er immer sichtbar ist. Der Wert ist `always`, `motion` oder `never`.
- [`displaySurface`](/de/docs/Web/API/MediaStreamTrack/getSettings#displaysurface)
  - : Eine Zeichenfolge, die angibt, welcher Typ von Anzeigefläche aktuell aufgenommen wird. Der Wert ist `browser`, `monitor` oder `window`.
- [`logicalSurface`](/de/docs/Web/API/MediaStreamTrack/getSettings#logicalsurface)
  - : Ein boolescher Wert, der `true` ist, wenn das aufgenommene Video nicht direkt einem einzelnen sichtbaren Anzeigebereich entspricht.
- [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaStreamTrack/getSettings#suppresslocalaudioplayback)
  - : Ein boolescher Wert, der `true` ist, wenn der aufgenommene Ton nicht über die lokalen Lautsprecher des Benutzers ausgegeben wird.
- [`screenPixelRatio`](/de/docs/Web/API/MediaStreamTrack/getSettings#screenpixelratio)
  - : Eine Zahl, die das Verhältnis der physischen Größe eines Pixels auf der aufgenommenen Anzeigefläche (bei ihrer physischen Auflösung) zur logischen Größe eines CSS-Pixels auf dem aufnehmenden Bildschirm (bei seiner logischen Auflösung) angibt. Sie kann weder als Constraint noch als Capability verwendet werden.

### MediaDevices.getSupportedConstraints()

Das von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegebene Objekt enthält drei zusätzliche Eigenschaften.

- `displaySurface`
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung den Constraint [`MediaTrackConstraints.displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) unterstützt.
- `logicalSurface`
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung den Constraint [`MediaTrackConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface) unterstützt.
- `suppressLocalAudioPlayback`
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung den Constraint [`MediaTrackConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) unterstützt.

## Sicherheitsaspekte

Websites, die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) unterstützen (entweder über den HTTP-Header {{HTTPHeader("Permissions-Policy")}} oder das Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) von {{HTMLElement("iframe")}}), können mit der Direktive {{HTTPHeader("Permissions-Policy/display-capture", "display-capture")}} festlegen, dass sie die Screen Capture API verwenden möchten:

```html
<iframe allow="display-capture" src="/some-other-document.html">…</iframe>
```

Eine Website kann außerdem über die Direktive {{HTTPHeader("Permissions-Policy/captured-surface-control", "captured-surface-control")}} festlegen, dass sie die [Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) verwenden möchte. Insbesondere werden die Methoden [`forwardWheel()`](/de/docs/Web/API/CaptureController/forwardWheel), [`increaseZoomLevel()`](/de/docs/Web/API/CaptureController/increaseZoomLevel), [`decreaseZoomLevel()`](/de/docs/Web/API/CaptureController/decreaseZoomLevel) und [`resetZoomLevel()`](/de/docs/Web/API/CaptureController/resetZoomLevel) durch diese Direktive gesteuert.

Die standardmäßige Zulassungsliste für beide Direktiven ist `self`. Damit darf jeder Inhalt desselben Ursprungs die Bildschirmaufnahme verwenden.

Diese Methoden gelten als _leistungsfähige Funktionen_. Das bedeutet, dass der Benutzer auch dann um Erlaubnis für ihre Verwendung gebeten wird, wenn eine `Permissions-Policy` die Berechtigung erteilt. Mit der [Permissions API](/de/docs/Web/API/Permissions_API) lässt sich die sich aus den Berechtigungen der Website und des Benutzers ergebende Gesamtberechtigung für die aufgeführten Funktionen abfragen.

Darüber hinaus verlangt die Spezifikation, dass der Benutzer vor Kurzem mit der Seite interagiert hat, um diese Funktionen zu verwenden. Es ist also eine {{Glossary("Transient_activation", "vorübergehende Aktivierung")}} erforderlich. Weitere Informationen finden Sie auf den Seiten der einzelnen Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Verwendung der Element Capture API und der Region Capture API](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
- [Verwendung der Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
