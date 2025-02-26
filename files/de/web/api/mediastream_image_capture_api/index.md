---
title: MediaStream Image Capture API
slug: Web/API/MediaStream_Image_Capture_API
l10n:
  sourceCommit: 624bbdcb7d9beace299a4fa0d3ddcd8f6732cd90
---

{{DefaultAPISidebar("Image Capture API")}}

Die **MediaStream Image Capture API** ist eine API zum Erfassen von Bildern oder Videos von einem fotografischen Gerät. Zusätzlich zum Erfassen von Daten ermöglicht sie es Ihnen, Informationen über Geräteeigenschaften wie Bildgröße, Rote-Augen-Reduktion und ob ein Blitz vorhanden ist und was sie aktuell eingestellt sind, abzurufen. Umgekehrt erlaubt es die API, die Fähigkeiten im Rahmen dessen, was das Gerät erlaubt, zu konfigurieren.

## Konzepte und Verwendung der MediaStream Image Capture

Der Prozess des Abrufens eines Bild- oder Videostreams erfolgt wie unten beschrieben. Der Beispielcode ist aus [Chromes Image Capture-Beispielen](https://googlechrome.github.io/samples/image-capture/) angepasst.

Zuerst erhalten Sie eine Referenz zu einem Gerät, indem Sie [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufrufen. Das untenstehende Beispiel besagt, dass es mir jedes verfügbare Videogerät geben soll, obwohl die Methode `getUserMedia()` es ermöglicht, spezifischere Fähigkeiten anzufordern. Diese Methode gibt ein {{jsxref("Promise")}} zurück, das mit einem [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt aufgelöst wird.

```js
navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
  // Do something with the stream.
});
```

Als nächstes isolieren Sie den visuellen Teil des Medienstreams. Dies geschieht durch Aufrufen von [`MediaStream.getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks). Dies gibt ein Array von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten zurück. Der untenstehende Code geht davon aus, dass das erste Element im `MediaStreamTrack`-Array das zu verwendende ist. Sie können die Eigenschaften der `MediaStreamTrack`-Objekte verwenden, um das benötigte auszuwählen.

```js
const track = mediaStream.getVideoTracks()[0];
```

An diesem Punkt möchten Sie möglicherweise die Geräteeigenschaften konfigurieren, bevor Sie ein Bild erfassen. Sie können dies tun, indem Sie `applyConstraints()` auf dem Track-Objekt aufrufen, bevor Sie etwas anderes tun.

```js
let zoom = document.querySelector("#zoom");
const capabilities = track.getCapabilities();
// Check whether zoom is supported or not.
if (!capabilities.zoom) {
  return;
}
track.applyConstraints({ advanced: [{ zoom: zoom.value }] });
```

Zuletzt übergeben Sie das `MediaStreamTrack`-Objekt an den [`ImageCapture()`](/de/docs/Web/API/ImageCapture/ImageCapture)-Konstruktor. Obwohl ein `MediaStream` mehrere Arten von Tracks enthält und mehrere Methoden bereitstellt, um sie abzurufen, wird der ImageCapture-Konstruktor eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotSupportedError` auslösen, wenn [`MediaStreamTrack.kind`](/de/docs/Web/API/MediaStreamTrack/kind) nicht `"video"` ist.

```js
let imageCapture = new ImageCapture(track);
```

## Schnittstellen

- [`ImageCapture`](/de/docs/Web/API/ImageCapture)
  - : Eine Schnittstelle zum Erfassen von Bildern von einem fotografischen Gerät, das durch ein gültiges [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) referenziert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
