---
title: Screen Capture API
slug: Web/API/Screen_Capture_API
l10n:
  sourceCommit: d9879ec9fe29b627ea1bde790d981dd13d602794
---

{{DefaultAPISidebar("Screen Capture API")}}

Die Screen Capture API erweitert die bestehende Media Capture and Streams API, um dem Benutzer zu ermöglichen, einen Bildschirm oder einen Teil eines Bildschirms (z. B. ein Fenster) auszuwählen, der als Mediastream erfasst werden soll. Dieser Stream kann dann aufgenommen oder über das Netzwerk mit anderen geteilt werden.

## Konzepte und Nutzung der Screen Capture API

Die Screen Capture API ist relativ einfach zu nutzen. Ihre einzige Methode ist [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), deren Aufgabe es ist, den Benutzer aufzufordern, einen Bildschirm oder einen Teil des Bildschirms zur Erfassung in Form eines [`MediaStream`](/de/docs/Web/API/MediaStream) auszuwählen.

Um mit der Erfassung von Videos vom Bildschirm zu beginnen, ruft man `getDisplayMedia()` auf `navigator.mediaDevices` auf:

```js
captureStream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

Das von `getDisplayMedia()` zurückgegebene {{jsxref("Promise")}} wird mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst, der den erfassten Inhalt streamt.

Lesen Sie den Artikel [Using the Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture), um einen tiefergehenden Einblick zu erhalten, wie die API verwendet wird, um Bildschirm-Inhalte als Stream zu erfassen.

Die Screen Capture API verfügt auch über Funktionen, die den Teil des Bildschirms einschränken, der im Stream erfasst wird:

- Die **Element Capture API** beschränkt den erfassten Bereich auf ein bestimmtes gerendertes DOM-Element und dessen Nachkommen.
- Die **Region Capture API** schneidet den erfassten Bereich auf den Bildschirmteil zu, in dem ein bestimmtes DOM-Element gerendert wird.

Lesen Sie [Using the Element Capture and Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture), um mehr darüber zu erfahren.

## Schnittstellen

- [`BrowserCaptureMediaStreamTrack`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack)
  - : Stellt eine einzelne Videospur dar; erweitert die Klasse [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) mit Methoden, um den Teil eines Selbstaufnahme-Streams (zum Beispiel den Bildschirm oder ein Fenster eines Benutzers) einzuschränken, der erfasst wird.
- [`CaptureController`](/de/docs/Web/API/CaptureController)
  - : Bietet Methoden, die verwendet werden können, um eine Erfassungssitzung separat von ihrer Initiierung über [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) weiter zu manipulieren. Ein `CaptureController`-Objekt wird mit einer Erfassungssitzung verbunden, indem es als Wert der `controller`-Eigenschaft im Optionsobjekt an einen [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)-Aufruf übergeben wird.
- [`CropTarget`](/de/docs/Web/API/CropTarget)
  - : Bietet eine statische Methode, [`fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static), die eine [`CropTarget`](/de/docs/Web/API/CropTarget)-Instanz zurückgibt, mit der eine erfasste Videospur auf den Bereich zugeschnitten werden kann, in dem ein bestimmtes Element gerendert wird.
- [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)
  - : Bietet eine statische Methode, [`fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static), die eine [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)-Instanz zurückgibt, mit der eine erfasste Videospur auf ein bestimmtes DOM-Element beschränkt werden kann.

## Ergänzungen zur MediaDevices-Schnittstelle

- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
  - : Die Methode `getDisplayMedia()` wird der `MediaDevices`-Schnittstelle hinzugefügt. Ähnlich wie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erstellt diese Methode ein Promise, das mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst wird, der den vom Benutzer ausgewählten Anzeigebereich in einem Format enthält, das den angegebenen Optionen entspricht.

## Ergänzungen zu bestehenden Wörterbüchern

Die Screen Capture API fügt den folgenden, durch andere Spezifikationen definierten Wörterbüchern Eigenschaften hinzu.

### MediaTrackConstraints

- [`MediaTrackConstraints.displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das angibt, welcher Typ von Anzeigefläche erfasst werden soll. Der Wert ist einer von `browser`, `monitor` oder `window`.
- [`MediaTrackConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)
  - : Gibt an, ob das Video im Stream eine logische Anzeigefläche darstellt (das heißt, eine Fläche, die möglicherweise nicht vollständig auf dem Bildschirm sichtbar ist oder vollständig außerhalb des Bildschirms liegt). Ein Wert von `true` bedeutet, dass eine logische Anzeigefläche erfasst werden soll.
- [`MediaTrackConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback)
  - : Steuert, ob die in einem Tab abgespielte Audioausgabe weiterhin über die lokalen Lautsprecher eines Benutzers abgespielt wird, wenn der Tab erfasst wird, oder ob diese unterdrückt wird. Ein Wert von `true` bedeutet, dass sie unterdrückt wird.

### MediaTrackSettings

- [`MediaTrackSettings.cursor`](/de/docs/Web/API/MediaTrackSettings/cursor)
  - : Ein String, der angibt, ob die derzeit erfasste Anzeigefläche den Mauszeiger enthält und, falls ja, ob er nur sichtbar ist, wenn die Maus in Bewegung ist, oder ob er immer sichtbar ist. Der Wert ist einer von `always`, `motion` oder `never`.
- [`MediaTrackSettings.displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface)
  - : Ein String, der angibt, welcher Typ von Anzeigefläche derzeit erfasst wird. Der Wert ist einer von `browser`, `monitor` oder `window`.
- [`MediaTrackSettings.logicalSurface`](/de/docs/Web/API/MediaTrackSettings/logicalSurface)
  - : Ein Boolean, der `true` ist, wenn das aufgezeichnete Video nicht direkt einer einzigen Anzeigefläche auf dem Bildschirm entspricht.
- [`MediaTrackSettings.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback)
  - : Ein Boolean, der `true` ist, wenn die aufgezeichnete Audioausgabe nicht über die lokalen Lautsprecher eines Benutzers abgespielt wird.

### MediaTrackSupportedConstraints

- [`MediaTrackSupportedConstraints.displaySurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/displaySurface)
  - : Ein Boolean, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) unterstützt.
- [`MediaTrackSupportedConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/logicalSurface)
  - : Ein Boolean, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface) unterstützt.
- [`MediaTrackSupportedConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSupportedConstraints/suppressLocalAudioPlayback)
  - : Ein Boolean, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) unterstützt.

## Prüfung durch Permissions Policy

{{Glossary("User_agent", "User Agents")}}, die die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) unterstützen (entweder durch den HTTP-Header {{HTTPHeader("Permissions-Policy")}} oder das Attribut [`allow`](/de/docs/Web/HTML/Element/iframe#allow) von {{HTMLElement("iframe")}}), können den Wunsch äußern, die Screen Capture API durch die Direktive `display-capture` zu verwenden:

```html
<iframe allow="display-capture" src="/some-other-document.html">…</iframe>
```

Die Standard-Zulassungsliste ist `self`, was es jedem Inhalt innerhalb desselben Ursprungs erlaubt, die Screen Capture API zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Using the Element Capture and Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
