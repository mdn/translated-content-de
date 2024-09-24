---
title: MediaStream Image Capture API
slug: Web/API/MediaStream_Image_Capture_API
l10n:
  sourceCommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{DefaultAPISidebar("Image Capture API")}}{{SeeCompatTable}}

Die **MediaStream Image Capture API** ist eine API zum Erfassen von Bildern oder Videos von einem fotografischen Gerät. Neben der Erfassung von Daten können Sie auch Informationen über Gerätekapazitäten wie Bildgröße, Rote-Augen-Reduktion und darüber, ob ein Blitz vorhanden ist und wie sie aktuell eingestellt sind, abrufen. Umgekehrt ermöglicht die API die Konfiguration der Fähigkeiten innerhalb der vom Gerät erlaubten Einschränkungen.

## Konzepte und Verwendung der MediaStream Image Capture

Der Prozess des Abrufens eines Bild- oder Videostreams erfolgt wie unten beschrieben. Der Beispielcode ist an [Chromes Image Capture-Beispiele](https://googlechrome.github.io/samples/image-capture/) angepasst.

Zuerst erhalten Sie eine Referenz auf ein Gerät, indem Sie {{domxref("MediaDevices.getUserMedia()")}} aufrufen. Das untenstehende Beispiel gibt an, dass ein verfügbares Videogerät verwendet werden soll, obwohl die Methode `getUserMedia()` spezifischere Fähigkeiten anfordern kann. Diese Methode gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("MediaStream")}}-Objekt aufgelöst wird.

```js
navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
  // Tun Sie etwas mit dem Stream.
});
```

Als nächstes isolieren Sie den visuellen Teil des Medienstreams. Dies erfolgt durch Aufrufen von {{domxref("MediaStream.getVideoTracks()")}}. Dies gibt ein Array von {{domxref("MediaStreamTrack")}}-Objekten zurück. Der folgende Code geht davon aus, dass das erste Element im `MediaStreamTrack`-Array das zu verwendende ist. Sie können die Eigenschaften der `MediaStreamTrack`-Objekte verwenden, um das benötigte auszuwählen.

```js
const track = mediaStream.getVideoTracks()[0];
```

An diesem Punkt möchten Sie möglicherweise die Geräteeinstellungen konfigurieren, bevor Sie ein Bild aufnehmen. Sie können dies tun, indem Sie {{domxref("MediaStreamTrack.applyConstraints","applyConstraints()")}} auf dem Track-Objekt aufrufen, bevor Sie etwas anderes tun.

```js
let zoom = document.querySelector("#zoom");
const capabilities = track.getCapabilities();
// Überprüfen, ob Zoom unterstützt wird oder nicht.
if (!capabilities.zoom) {
  return;
}
track.applyConstraints({ advanced: [{ zoom: zoom.value }] });
```

Schließlich übergeben Sie das `MediaStreamTrack`-Objekt dem {{domxref("ImageCapture.ImageCapture()", "ImageCapture()")}}-Konstruktor. Obwohl ein `MediaStream` mehrere Arten von Tracks enthält und mehrere Methoden zu deren Abruf bereitstellt, wird der ImageCapture-Konstruktor eine {{domxref("DOMException")}} des Typs `NotSupportedError` auslösen, wenn {{domxref("MediaStreamTrack.kind")}} nicht `"video"` ist.

```js
let imageCapture = new ImageCapture(track);
```

## Schnittstellen

- {{domxref("ImageCapture")}} {{Experimental_Inline}}
  - : Eine Schnittstelle zum Erfassen von Bildern von einem über einen gültigen {{domxref("MediaStreamTrack")}} referenzierten fotografischen Gerät.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MediaStream")}}
- {{domxref("MediaStreamTrack")}}
