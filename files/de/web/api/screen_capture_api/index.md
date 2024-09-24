---
title: Bildschirmaufnahme-API
slug: Web/API/Screen_Capture_API
l10n:
  sourceCommit: 6e78306f9674a5e6329e07eca5f2791ce3138f0c
---

{{DefaultAPISidebar("Screen Capture API")}}

Die Bildschirmaufnahme-API führt Erweiterungen zur bestehenden Media Capture und Streams API ein, um den Benutzer auszuwählen zu lassen, welcher Bildschirm oder Bildschirmbereich (wie etwa ein Fenster) als Medienstream aufgenommen werden soll. Dieser Stream kann dann aufgezeichnet oder über das Netzwerk mit anderen geteilt werden.

## Konzepte und Verwendung der Bildschirmaufnahme-API

Die Bildschirmaufnahme-API ist relativ einfach zu verwenden. Ihre einzige Methode ist {{domxref("MediaDevices.getDisplayMedia()")}}, deren Aufgabe es ist, den Benutzer zu bitten, einen Bildschirm oder Bildschirmbereich zur Aufnahme in Form eines {{domxref("MediaStream")}} auszuwählen.

Um mit der Aufnahme von Video vom Bildschirm zu beginnen, rufen Sie `getDisplayMedia()` auf `navigator.mediaDevices` auf:

```js
captureStream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

Das von `getDisplayMedia()` zurückgegebene {{jsxref("Promise")}} löst sich in einen {{domxref("MediaStream")}} auf, der die aufgenommenen Medien streamt.

Lesen Sie den Artikel [Verwendung der Bildschirmaufnahme-API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) für einen tieferen Einblick in die Nutzung der API zur Aufnahme von Bildschirm-Inhalten als Stream.

## Schnittstellen

- {{domxref("CaptureController")}}
  - : Bietet Methoden, die verwendet werden können, um eine Aufnahmesitzung weiter zu manipulieren, unabhängig vom Start durch {{domxref("MediaDevices.getDisplayMedia()")}}. Ein `CaptureController`-Objekt wird mit einer Aufnahmesitzung verknüpft, indem es in einen {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}-Aufruf als Wert der `controller`-Eigenschaft des Optionsobjekts übergeben wird.

## Ergänzungen zur MediaDevices-Schnittstelle

- {{domxref("MediaDevices.getDisplayMedia()")}}
  - : Die Methode `getDisplayMedia()` wird zur `MediaDevices`-Schnittstelle hinzugefügt. Ähnlich wie {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} erstellt diese Methode ein Promise, das sich mit einem {{domxref("MediaStream")}} auflöst, der den vom Benutzer ausgewählten Anzeigebereich enthält, in einem Format, das den angegebenen Optionen entspricht.

## Ergänzungen zu bestehenden Wörterbüchern

Die Bildschirmaufnahme-API fügt Eigenschaften zu folgenden, durch andere Spezifikationen definierten Wörterbüchern hinzu.

### MediaTrackConstraints

- {{domxref("MediaTrackConstraints.displaySurface")}}
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), der angibt, welche Art von Anzeigefläche aufgenommen werden soll. Der Wert ist einer von `browser`, `monitor` oder `window`.
- {{domxref("MediaTrackConstraints.logicalSurface")}}
  - : Gibt an, ob das Video im Stream eine logische Anzeigefläche darstellt (also eine, die möglicherweise nicht vollständig sichtbar auf dem Bildschirm ist oder vollständig außerhalb des Bildschirms liegt). Ein Wert von `true` zeigt an, dass eine logische Anzeigefläche aufgenommen werden soll.
- {{domxref("MediaTrackConstraints.suppressLocalAudioPlayback")}}
  - : Steuert, ob das Audio, das in einem Tab abgespielt wird, weiterhin über die lokalen Lautsprecher des Benutzers abgespielt wird, wenn der Tab aufgenommen wird, oder ob es unterdrückt wird. Ein Wert von `true` zeigt an, dass es unterdrückt wird.

### MediaTrackSettings

- {{domxref("MediaTrackSettings.cursor")}}
  - : Ein String, der angibt, ob die aktuell aufgenommene Anzeigefläche den Mauszeiger einschließt und falls ja, ob er nur sichtbar ist, während die Maus in Bewegung ist, oder ob er immer sichtbar ist. Der Wert ist einer von `always`, `motion` oder `never`.
- {{domxref("MediaTrackSettings.displaySurface")}}
  - : Ein String, der angibt, welche Art von Anzeigefläche aktuell aufgenommen wird. Der Wert ist einer von `browser`, `monitor` oder `window`.
- {{domxref("MediaTrackSettings.logicalSurface")}}
  - : Ein boolescher Wert, der `true` ist, wenn das aufgenommene Video nicht direkt einer einzigen Bildschirmfläche entspricht.
- {{domxref("MediaTrackSettings.suppressLocalAudioPlayback")}}
  - : Ein boolescher Wert, der `true` ist, wenn das aufgenommene Audio nicht über die lokalen Lautsprecher des Benutzers abgespielt wird.

### MediaTrackSupportedConstraints

- {{domxref("MediaTrackSupportedConstraints.displaySurface")}}
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung die {{domxref("MediaTrackConstraints.displaySurface")}}-Einschränkung unterstützt.
- {{domxref("MediaTrackSupportedConstraints.logicalSurface")}}
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung die Einschränkung {{domxref("MediaTrackConstraints.logicalSurface")}} unterstützt.
- {{domxref("MediaTrackSupportedConstraints.suppressLocalAudioPlayback")}}
  - : Ein boolescher Wert, der `true` ist, wenn die aktuelle Umgebung die Einschränkung {{domxref("MediaTrackConstraints.suppressLocalAudioPlayback")}} unterstützt.

## Überprüfung der Berechtigungsrichtlinie

{{Glossary("User agent", "User-Agenten")}}, die die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) unterstützen (entweder mit dem HTTP-{{HTTPHeader("Permissions-Policy")}}-Header oder dem {{HTMLElement("iframe")}}-Attribut [`allow`](/de/docs/Web/HTML/Element/iframe#allow)), können den Wunsch zur Nutzung der Bildschirmaufnahme-API über die Direktive `display-capture` angeben:

```html
<iframe allow="display-capture" src="/some-other-document.html">…</iframe>
```

Die Standard-Zulassungsliste ist `self`, was es jedem Inhalt innerhalb der gleichen Herkunft erlaubt, die Bildschirmaufnahme zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Bildschirmaufnahme-API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- {{domxref("MediaDevices.getDisplayMedia()")}}
