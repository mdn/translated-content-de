---
title: "MediaStreamTrack: applyConstraints()-Methode"
short-title: applyConstraints()
slug: Web/API/MediaStreamTrack/applyConstraints
l10n:
  sourceCommit: 1fc327ab47c4fc89eff6e1d05780babd720e4b13
---

{{APIRef("Media Capture and Streams")}}

Die **`applyConstraints()`**-Methode des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Interfaces wendet eine Reihe von Einschränkungen auf den Track an; diese Einschränkungen ermöglichen es der Website oder App, ideale Werte und akzeptable Wertebereiche für die einschränkbaren Eigenschaften des Tracks festzulegen, wie Bildrate, Abmessungen, Echo-Unterdrückung und so weiter.

Einschränkungen können verwendet werden, um sicherzustellen, dass die Medien bestimmte Richtlinien erfüllen, die Sie bevorzugen.
Beispielsweise können Sie hochauflösendes Video bevorzugen, aber verlangen, dass die Bildrate etwas niedrig ist, um die Datenrate niedrig genug zu halten und das Netzwerk nicht zu überlasten.
Einschränkungen können auch ideale und/oder akzeptable Größen oder Größenbereiche angeben.
Weitere Informationen darüber, wie Sie Ihre bevorzugten Einschränkungen anwenden können, finden Sie unter [Einschränkungen anwenden](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#applying_constraints) in [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

## Syntax

```js-nolint
applyConstraints()
applyConstraints(constraints)
```

### Parameter

- `constraints` {{optional_inline}}
  - : Ein [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt, das die auf die einschränkbaren Eigenschaften des Tracks anzuwendenden Einschränkungen auflistet; alle bestehenden Einschränkungen werden durch die angegebenen neuen Werte ersetzt, und alle nicht enthaltenen einschränkbaren Eigenschaften werden auf ihre Standardbeschränkungen zurückgesetzt.
    Wenn dieser Parameter weggelassen wird, werden alle derzeit gesetzten benutzerdefinierten Einschränkungen gelöscht.
    Dieses Objekt stellt die grundlegende Menge von Einschränkungen dar, die angewendet werden müssen, damit das {{jsxref("Promise")}} aufgelöst wird.
    Das Objekt kann eine erweiterte Eigenschaft enthalten, die ein Array zusätzlicher `MediaTrackConstraints`-Objekte enthält, die als genaue Anforderungen behandelt werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Einschränkungen erfolgreich angewendet wurden.
Wenn die Einschränkungen nicht angewendet werden können, wird das Promise mit einem [`OverconstrainedError`](/de/docs/Web/API/OverconstrainedError) zurückgewiesen, der ein [`DOMException`](/de/docs/Web/API/DOMException) ist, dessen Name `OverconstrainedError` ist, mit zusätzlichen Parametern, um anzugeben, dass die Einschränkungen nicht erfüllt werden konnten.
Dies kann passieren, wenn die angegebenen Einschränkungen zu strikt sind, um beim Versuch, den Track zu konfigurieren, eine Übereinstimmung zu finden.

## Beispiele

Das folgende Beispiel zeigt, wie eine grundlegende und eine erweiterte Menge von Einschränkungen festgelegt wird.
Es gibt an, dass die Seite oder Web-App eine Breite zwischen 640 und 1280 und eine Höhe zwischen 480 und 720 benötigt, wobei die später genannten Werte in jedem Paar bevorzugt werden.
Die erweiterte Eigenschaft gibt weiter an, dass eine Bildgröße von 1920 x 1280 bevorzugt wird oder ein [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) von 1.333, falls dies nicht verfügbar ist.
Beachten Sie, dass diese Einschränkungen auch das veranschaulichen, was die Spezifikation als _Rückzugsstrategie_ bezeichnet.

```js
const constraints = {
  width: { min: 640, ideal: 1280 },
  height: { min: 480, ideal: 720 },
  advanced: [{ width: 1920, height: 1280 }, { aspectRatio: 1.333 }],
};

navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
  const track = mediaStream.getVideoTracks()[0];
  track
    .applyConstraints(constraints)
    .then(() => {
      // Do something with the track such as using the Image Capture API.
    })
    .catch((e) => {
      // The constraints could not be satisfied by the available devices.
    });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [MediaStream Image Capture API](/de/docs/Web/API/MediaStream_Image_Capture_API)
