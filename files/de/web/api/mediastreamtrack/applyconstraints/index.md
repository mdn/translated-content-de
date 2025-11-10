---
title: "MediaStreamTrack: applyConstraints()-Methode"
short-title: applyConstraints()
slug: Web/API/MediaStreamTrack/applyConstraints
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Media Capture and Streams")}}

Die **`applyConstraints()`**-Methode der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Schnittstelle wendet eine Reihe von Einschränkungen auf den Track an; diese Einschränkungen ermöglichen es der Website oder App, ideale Werte und akzeptable Wertebereiche für die einschränkbaren Eigenschaften des Tracks festzulegen, wie z.B. Bildrate, Abmessungen, Echounterdrückung und dergleichen.

Einschränkungen können verwendet werden, um sicherzustellen, dass die Medien bestimmten Richtlinien entsprechen, die Sie bevorzugen.
Zum Beispiel könnten Sie hochauflösendes Video bevorzugen, aber verlangen, dass die Bildrate etwas niedrig ist, um die Datenrate niedrig genug zu halten, damit das Netzwerk nicht überlastet wird.
Einschränkungen können auch ideale und/oder akzeptable Größen oder Größenbereiche spezifizieren.
Siehe [Einschränkungen anwenden](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#applying_constraints) in [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für weitere Informationen darüber, wie Sie Ihre bevorzugten Einschränkungen anwenden können.

## Syntax

```js-nolint
applyConstraints()
applyConstraints(constraints)
```

### Parameter

- `constraints` {{optional_inline}}
  - : Ein [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt, das die zu den einschränkbaren Eigenschaften des Tracks anzuwendenden Einschränkungen auflistet; bestehende Einschränkungen werden durch die angegebenen neuen Werte ersetzt, und alle nicht enthaltenen einschränkbaren Eigenschaften werden auf ihre standardmäßigen Einschränkungen zurückgesetzt.
    Wenn dieser Parameter weggelassen wird, werden alle derzeit festgelegten benutzerdefinierten Einschränkungen gelöscht.
    Dieses Objekt stellt die grundlegende Menge an Einschränkungen dar, die gelten müssen, damit das {{jsxref("Promise")}} aufgelöst wird.
    Das Objekt kann eine erweiterte Eigenschaft enthalten, die ein Array weiterer `MediaTrackConstraints`-Objekte enthält, die als genaue Anforderungen behandelt werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Einschränkungen erfolgreich angewendet wurden.
Wenn die Einschränkungen nicht angewendet werden können, wird das Promise mit einem [`OverconstrainedError`](/de/docs/Web/API/OverconstrainedError) zurückgewiesen, der ein [`DOMException`](/de/docs/Web/API/DOMException) ist, dessen Name `OverconstrainedError` lautet, mit zusätzlichen Parametern, um anzuzeigen, dass die Einschränkungen nicht erfüllt werden konnten.
Dies kann passieren, wenn die angegebenen Einschränkungen zu strikt sind, um eine Übereinstimmung bei der Konfiguration des Tracks zu finden.

## Beispiele

Das folgende Beispiel zeigt, wie man eine grundlegende und erweiterte Menge von Einschränkungen angibt.
Es wird spezifiziert, dass die Webseite oder Web-App eine Breite zwischen 640 und 1280 und eine Höhe zwischen 480 und 720 benötigt, wobei die jeweils spätere Zahl in jedem Paar bevorzugt wird.
Die erweiterte Eigenschaft spezifiziert weiter, dass eine Bildgröße von 1920 x 1280 bevorzugt wird oder ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 1,333, falls dies nicht verfügbar ist.
Beachten Sie, dass diese Einschränkungen auch das darstellen, was die Spezifikation als _Backoff-Strategie_ bezeichnet.

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
