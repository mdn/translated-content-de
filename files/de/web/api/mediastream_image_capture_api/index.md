---
title: MediaStream Image Capture API
slug: Web/API/MediaStream_Image_Capture_API
l10n:
  sourceCommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{DefaultAPISidebar("Image Capture API")}}{{SeeCompatTable}}

Die **MediaStream Image Capture API** ist eine API zum Erfassen von Bildern oder Videos von einem fotografischen Gerät. Zusätzlich zur Erfassung von Daten ermöglicht sie auch das Abrufen von Informationen über die Geräteeigenschaften wie Bildgröße, Rote-Augen-Korrektur und ob es einen Blitz gibt und wie dieser derzeit eingestellt ist. Umgekehrt erlaubt die API, die Fähigkeiten innerhalb der vom Gerät erlaubten Grenzen zu konfigurieren.

## MediaStream-Bilderfassungskonzepte und -verwendung

Der Prozess des Abrufens eines Bild- oder Videostreams erfolgt wie unten beschrieben. Der Beispielcode ist angepasst von [Chrome's Image Capture examples](https://googlechrome.github.io/samples/image-capture/).

Zuerst erhalten Sie eine Referenz zu einem Gerät, indem Sie [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufrufen. Das folgende Beispiel sagt aus, dass jedes verfügbare Videogerät bereitgestellt werden soll, obwohl die Methode `getUserMedia()` erlaubt, spezifischere Fähigkeiten anzufordern. Diese Methode gibt ein {{jsxref("Promise")}} zurück, das mit einem [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt aufgelöst wird.

```js
navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
  // Do something with the stream.
});
```

Als Nächstes isolieren Sie den visuellen Teil des Mediastreams. Dies geschieht durch Aufruf von [`MediaStream.getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks). Dies gibt ein Array von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten zurück. Der untenstehende Code geht davon aus, dass das erste Element im `MediaStreamTrack`-Array das zu verwendende ist. Sie können die Eigenschaften der `MediaStreamTrack`-Objekte verwenden, um das benötigte auszuwählen.

```js
const track = mediaStream.getVideoTracks()[0];
```

An diesem Punkt möchten Sie möglicherweise die Geräteeigenschaften einstellen, bevor Sie ein Bild erfassen. Das können Sie tun, indem Sie [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) auf dem Track-Objekt vornehmen, bevor Sie etwas anderes unternehmen.

```js
let zoom = document.querySelector("#zoom");
const capabilities = track.getCapabilities();
// Check whether zoom is supported or not.
if (!capabilities.zoom) {
  return;
}
track.applyConstraints({ advanced: [{ zoom: zoom.value }] });
```

Schließlich übergeben Sie das `MediaStreamTrack`-Objekt an den [`ImageCapture()`](/de/docs/Web/API/ImageCapture/ImageCapture)-Konstruktor. Obwohl ein `MediaStream` mehrere Arten von Tracks hält und verschiedene Methoden zum Abrufen dieser bietet, wird der ImageCapture-Konstruktor eine [`DOMException`](/de/docs/Web/API/DOMException) des Typs `NotSupportedError` auslösen, wenn [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) nicht `"video"` ist.

```js
let imageCapture = new ImageCapture(track);
```

## Schnittstellen

- [`ImageCapture`](/de/docs/Web/API/ImageCapture) {{Experimental_Inline}}
  - : Eine Schnittstelle zum Erfassen von Bildern von einem fotografischen Gerät, das durch einen gültigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) referenziert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
