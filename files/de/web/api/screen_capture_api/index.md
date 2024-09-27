---
title: Screen Capture API
slug: Web/API/Screen_Capture_API
l10n:
  sourceCommit: 6e78306f9674a5e6329e07eca5f2791ce3138f0c
---

{{DefaultAPISidebar("Screen Capture API")}}

Die Screen Capture API führt Ergänzungen zur bestehenden Media Capture and Streams API ein, um es dem Benutzer zu ermöglichen, einen Bildschirm oder einen Teil eines Bildschirms (wie ein Fenster) auszuwählen, um ihn als Medienstream zu erfassen. Dieser Stream kann dann aufgenommen oder über das Netzwerk mit anderen geteilt werden.

## Konzepte und Verwendung der Screen Capture API

Die Screen Capture API ist relativ einfach zu verwenden. Ihre einzige Methode ist [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), deren Aufgabe es ist, den Benutzer aufzufordern, einen Bildschirm oder einen Teil eines Bildschirms auszuwählen, um ihn in Form eines [`MediaStream`](/de/docs/Web/API/MediaStream) zu erfassen.

Um das Video vom Bildschirm zu erfassen, rufen Sie `getDisplayMedia()` auf `navigator.mediaDevices` auf:

```js
captureStream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

Das von `getDisplayMedia()` zurückgegebene {{jsxref("Promise")}} löst sich in einen [`MediaStream`](/de/docs/Web/API/MediaStream) auf, der die erfassten Medien streamt.

Lesen Sie den Artikel [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) für einen detaillierteren Blick darauf, wie Sie die API verwenden können, um Bildschirm-Inhalte als Stream zu erfassen.

## Schnittstellen

- [`CaptureController`](/de/docs/Web/API/CaptureController)
  - : Bietet Methoden, die verwendet werden können, um eine Erfassungssitzung weiter zu manipulieren, die unabhängig von ihrer Initialisierung über [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) ist. Ein `CaptureController`-Objekt wird mit einer Erfassungssitzung verbunden, indem es in einem `getDisplayMedia()`-Aufruf als Wert der `controller`-Eigenschaft des Optionsobjekts übergeben wird.

## Ergänzungen zur MediaDevices-Schnittstelle

- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
  - : Die Methode `getDisplayMedia()` wird der `MediaDevices`-Schnittstelle hinzugefügt. Ähnlich wie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erstellt diese Methode ein Versprechen, das sich mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) auflöst, der den vom Benutzer ausgewählten Anzeigebereich in einem Format enthält, das den angegebenen Optionen entspricht.

## Ergänzungen zu bestehenden Wörterbüchern

Die Screen Capture API fügt den folgenden Wörterbüchern, die von anderen Spezifikationen definiert werden, Eigenschaften hinzu.

### MediaTrackConstraints

- [`MediaTrackConstraints.displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das angibt, welcher Typ von Anzeigefläche erfasst werden soll. Der Wert ist einer von `browser`, `monitor` oder `window`.
- [`MediaTrackConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)
  - : Gibt an, ob das Video im Stream eine logische Anzeigefläche darstellt (d.h. eine, die möglicherweise nicht vollständig sichtbar auf dem Bildschirm ist oder vollständig außerhalb des Bildschirms sein kann). Ein Wert von `true` zeigt an, dass eine logische Anzeigefläche erfasst werden soll.
- [`MediaTrackConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback)
  - : Kontrolliert, ob das Audio, das in einem Tab abgespielt wird, weiterhin über die lokalen Lautsprecher des Benutzers wiedergegeben wird, wenn der Tab erfasst wird, oder ob es unterdrückt wird. Ein Wert von `true` zeigt an, dass es unterdrückt wird.

### MediaTrackSettings

- [`MediaTrackSettings.cursor`](/de/docs/Web/API/MediaTrackSettings/cursor)
  - : Ein String, der angibt, ob die aktuell erfasste Anzeigefläche den Mauszeiger enthält und, falls ja, ob er nur sichtbar ist, während die Maus in Bewegung ist, oder ob er immer sichtbar ist. Der Wert ist einer von `always`, `motion` oder `never`.
- [`MediaTrackSettings.displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface)
  - : Ein String, der angibt, welcher Typ von Anzeigefläche aktuell erfasst wird. Der Wert ist einer von `browser`, `monitor` oder `window`.
- [`MediaTrackSettings.logicalSurface`](/de/docs/Web/API/MediaTrackSettings/logicalSurface)
  - : Ein boolescher Wert, der `true` ist, wenn das erfasste Video nicht direkt einem einzelnen Bildschirmbereich entspricht.
- [`MediaTrackSettings.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback)
  - : Ein boolescher Wert, der `true` ist, wenn das erfasste Audio nicht über die lokalen Lautsprecher des Benutzers wiedergegeben wird.

### MediaTrackSupportedConstraints

- [`MediaTrackSupportedConstraints.displaySurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/displaySurface)
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) unterstützt.
- [`MediaTrackSupportedConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/logicalSurface)
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface) unterstützt.
- [`MediaTrackSupportedConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSupportedConstraints/suppressLocalAudioPlayback)
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) unterstützt.

## Überprüfung der Berechtigungspolitik

[Benutzeragenten](/de/docs/Glossary/User_agent), die die [Permission Policy](/de/docs/Web/HTTP/Permissions_Policy) unterstützen (entweder über den HTTP-{{HTTPHeader("Permissions-Policy")}}-Header oder das {{HTMLElement("iframe")}}-Attribut [`allow`](/de/docs/Web/HTML/Element/iframe#allow)), können den Wunsch spezifizieren, die Screen Capture API mit der Direktive `display-capture` zu verwenden:

```html
<iframe allow="display-capture" src="/some-other-document.html">…</iframe>
```

Die standardmäßige Zulassungsliste ist `self`, was es jeglichen Inhalten innerhalb desselben Ursprungs erlaubt, die Screen Capture zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
