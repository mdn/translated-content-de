---
title: Screen Capture API
slug: Web/API/Screen_Capture_API
l10n:
  sourceCommit: 6e78306f9674a5e6329e07eca5f2791ce3138f0c
---

{{DefaultAPISidebar("Screen Capture API")}}

Die Screen Capture API fügt der bestehenden Media Capture and Streams API Erweiterungen hinzu, um es dem Benutzer zu ermöglichen, einen Bildschirm oder einen Teil eines Bildschirms (wie ein Fenster) zur Aufnahme als Medienstream auszuwählen. Dieser Stream kann dann aufgezeichnet oder mit anderen über das Netzwerk geteilt werden.

## Konzepte und Nutzung der Screen Capture API

Die Screen Capture API ist relativ einfach zu verwenden. Ihre einzige Methode ist [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), deren Aufgabe es ist, den Benutzer aufzufordern, einen Bildschirm oder einen Teil eines Bildschirms auszuwählen, der in Form eines [`MediaStream`](/de/docs/Web/API/MediaStream) aufgenommen werden soll.

Um mit der Aufnahme von Videos vom Bildschirm zu beginnen, rufen Sie `getDisplayMedia()` auf `navigator.mediaDevices` auf:

```js
captureStream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

Das von `getDisplayMedia()` zurückgegebene {{jsxref("Promise")}} wird auf einen [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst, der die aufgenommenen Medien streamt.

Für einen tiefergehenden Blick darauf, wie die API verwendet wird, um Bildschirm-Inhalte als Stream aufzunehmen, lesen Sie den Artikel [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture).

## Schnittstellen

- [`CaptureController`](/de/docs/Web/API/CaptureController)
  - : Bietet Methoden, die verwendet werden können, um eine Aufnahmesitzung weiter zu manipulieren, getrennt von ihrer Einleitung über [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia). Ein `CaptureController`-Objekt wird mit einer Aufnahmesitzung verknüpft, indem es in einem Aufruf von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) als Wert der `controller`-Eigenschaft des options-Objekts übergeben wird.

## Erweiterungen der MediaDevices-Schnittstelle

- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
  - : Die `getDisplayMedia()`-Methode wird der `MediaDevices`-Schnittstelle hinzugefügt. Ähnlich wie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erstellt diese Methode ein Promise, das mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst wird, das den vom Benutzer ausgewählten Anzeigebereich in einem Format enthält, das den angegebenen Optionen entspricht.

## Erweiterungen bestehender Wörterbücher

Die Screen Capture API fügt den folgenden Wörterbüchern, die von anderen Spezifikationen definiert werden, Eigenschaften hinzu.

### MediaTrackConstraints

- [`MediaTrackConstraints.displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das angibt, welcher Typ von Anzeigefläche erfasst werden soll. Der Wert ist einer von `browser`, `monitor` oder `window`.
- [`MediaTrackConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)
  - : Gibt an, ob das Video im Stream eine logische Anzeigefläche darstellt (d. h. eine, die möglicherweise nicht vollständig sichtbar ist oder vollständig außerhalb des Bildschirms liegt). Ein Wert von `true` zeigt an, dass eine logische Anzeigefläche erfasst werden soll.
- [`MediaTrackConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback)
  - : Steuert, ob der Ton, der in einem Tab abgespielt wird, weiterhin auf den lokalen Lautsprechern eines Benutzers wiedergegeben wird, wenn der Tab erfasst wird, oder ob er unterdrückt wird. Ein Wert von `true` zeigt an, dass er unterdrückt wird.

### MediaTrackSettings

- [`MediaTrackSettings.cursor`](/de/docs/Web/API/MediaTrackSettings/cursor)
  - : Ein String, der angibt, ob die aktuell erfasste Anzeigefläche den Mauszeiger einschließt und ob dieser nur sichtbar ist, wenn die Maus in Bewegung ist oder ob er immer sichtbar ist. Der Wert ist einer von `always`, `motion` oder `never`.
- [`MediaTrackSettings.displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface)
  - : Ein String, der angibt, welcher Typ von Anzeigefläche aktuell erfasst wird. Der Wert ist einer von `browser`, `monitor` oder `window`.
- [`MediaTrackSettings.logicalSurface`](/de/docs/Web/API/MediaTrackSettings/logicalSurface)
  - : Ein boolescher Wert, der `true` ist, wenn das aufgenommene Video nicht direkt mit einem einzigen sichtbaren Anzeigebereich übereinstimmt.
- [`MediaTrackSettings.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback)
  - : Ein boolescher Wert, der `true` ist, wenn das aufgenommene Audio nicht über die lokalen Lautsprecher des Benutzers abgespielt wird.

### MediaTrackSupportedConstraints

- [`MediaTrackSupportedConstraints.displaySurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/displaySurface)
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) unterstützt.
- [`MediaTrackSupportedConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/logicalSurface)
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface) unterstützt.
- [`MediaTrackSupportedConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSupportedConstraints/suppressLocalAudioPlayback)
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung die Einschränkung [`MediaTrackConstraints.suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) unterstützt.

## Validierung der Berechtigungsrichtlinie

{{Glossary("User_agent", "Benutzeragenten")}}, die die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) unterstützen (entweder mit dem HTTP {{HTTPHeader("Permissions-Policy")}} Header oder dem {{HTMLElement("iframe")}} Attribut [`allow`](/de/docs/Web/HTML/Element/iframe#allow)), können den Wunsch spezifizieren, die Screen Capture API mit der Direktive `display-capture` zu verwenden:

```html
<iframe allow="display-capture" src="/some-other-document.html">…</iframe>
```

Die standardmäßige Zulassungsliste ist `self`, was es jedem Inhalt innerhalb desselben Ursprungs erlaubt, die Screen Capture zu nutzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
