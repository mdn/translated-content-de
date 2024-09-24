---
title: CaptureController
slug: Web/API/CaptureController
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`CaptureController`**-Interface bietet Methoden, die verwendet werden können, um eine Aufnahmesitzung weiter zu manipulieren, unabhängig von deren Initiierung über {{domxref("MediaDevices.getDisplayMedia()")}}.

Ein `CaptureController`-Objekt wird mit einer Aufnahmesitzung verbunden, indem es in einen {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}-Aufruf als Wert der `controller`-Eigenschaft des Optionsobjekts übergeben wird.

## Konstruktor

- {{ domxref("CaptureController.CaptureController", "CaptureController()") }} {{Experimental_Inline}}
  - : Erstellt eine neue Instanz eines `CaptureController`-Objekts.

## Instanzmethoden

- {{ domxref("CaptureController.setFocusBehavior", "setFocusBehavior()") }} {{Experimental_Inline}}
  - : Kontrolliert, ob der erfasste Tab oder das Fenster fokussiert wird oder ob der Fokus bei dem Tab verbleibt, der die aufzeichnende App enthält.

## Beispiele

```js
// Erstellen Sie eine neue CaptureController-Instanz
const controller = new CaptureController();

// Fordern Sie den Benutzer auf, einen Tab, ein Fenster oder den Bildschirm zu teilen.
const stream = await navigator.mediaDevices.getDisplayMedia({ controller });

// Abfragen des displaySurface-Wertes des erfassten Videotracks
const [track] = stream.getVideoTracks();
const displaySurface = track.getSettings().displaySurface;

if (displaySurface == "browser") {
  // Den erfassten Tab fokussieren.
  controller.setFocusBehavior("focus-captured-surface");
} else if (displaySurface == "window") {
  // Den Fokus nicht auf das erfasste Fenster verschieben.
  // Die fokussierende Seite bleibt fokussiert.
  controller.setFocusBehavior("no-focus-change");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- {{domxref("MediaDevices.getDisplayMedia()")}}
- [Besseres Bildschirmteilen mit bedingtem Fokus](https://developer.chrome.com/docs/web-platform/conditional-focus/)
