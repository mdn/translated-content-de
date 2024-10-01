---
title: "MediaStreamTrack: applyConstraints() Methode"
short-title: applyConstraints()
slug: Web/API/MediaStreamTrack/applyConstraints
l10n:
  sourceCommit: 1fc327ab47c4fc89eff6e1d05780babd720e4b13
---

{{APIRef("Media Capture and Streams")}}

Die **`applyConstraints()`**-Methode des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Interfaces wendet eine Reihe von Einschränkungen auf den Track an; diese Einschränkungen ermöglichen es der Website oder App, ideale Werte und akzeptable Wertebereiche der einschränkbaren Eigenschaften des Tracks festzulegen, wie z.B. Bildrate, Abmessungen, Echounterdrückung und so weiter.

Einschränkungen können verwendet werden, um sicherzustellen, dass die Medien bestimmten von Ihnen bevorzugten Richtlinien entsprechen. Zum Beispiel bevorzugen Sie möglicherweise hochauflösendes Video, verlangen jedoch, dass die Bildrate etwas niedriger ist, um die Datenrate niedrig genug zu halten, damit das Netzwerk nicht überlastet wird. Einschränkungen können auch ideale und/oder akzeptable Größen oder Bereich von Größen angeben. Siehe [Einschränkungen anwenden](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#applying_constraints) im [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für weitere Informationen darüber, wie Sie Ihre bevorzugten Einschränkungen anwenden.

## Syntax

```js-nolint
applyConstraints()
applyConstraints(constraints)
```

### Parameter

- `constraints` {{optional_inline}}
  - : Ein [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt, das die auf die einschränkbaren Eigenschaften des Tracks anzuwendenden Einschränkungen auflistet; bestehende Einschränkungen werden durch die neu angegebenen Werte ersetzt, und alle nicht enthaltenen einschränkbaren Eigenschaften werden auf ihre standardmäßigen Einschränkungen zurückgesetzt. Wird dieser Parameter weggelassen, werden alle derzeit festgelegten benutzerdefinierten Einschränkungen gelöscht. Dieses Objekt stellt das grundlegende Set von Einschränkungen dar, die erfüllt sein müssen, damit der {{jsxref("Promise")}} erfolgreich aufgelöst wird. Das Objekt kann eine erweiterte Eigenschaft enthalten, die ein Array zusätzlicher `MediaTrackConstraints`-Objekte umfasst, die als exakt erforderlich behandelt werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Einschränkungen erfolgreich angewendet wurden. Wenn die Einschränkungen nicht angewendet werden können, wird das Promise mit einem [`OverconstrainedError`](/de/docs/Web/API/OverconstrainedError) abgelehnt, das ein [`DOMException`](/de/docs/Web/API/DOMException) ist, dessen Name `OverconstrainedError` ist, mit zusätzlichen Parametern, um anzuzeigen, dass die Einschränkungen nicht erfüllt werden konnten. Dies kann passieren, wenn die festgelegten Einschränkungen zu streng sind, um beim Versuch, den Track zu konfigurieren, eine Übereinstimmung zu finden.

## Beispiele

Das Folgende zeigt, wie man ein grundlegendes und erweitertes Set von Einschränkungen spezifiziert. Es spezifiziert, dass die Seite oder Web-App eine Breite zwischen 640 und 1280 und eine Höhe zwischen 480 und 720 benötigt, wobei die spätere Zahl in jedem Paar bevorzugt wird. Die erweiterte Eigenschaft legt ferner fest, dass eine Bildgröße von 1920 x 1280 bevorzugt wird oder ein {{Glossary("aspect_ratio", "Seitenverhältnis")}} von 1.333, falls dies nicht verfügbar ist. Beachten Sie, dass diese Einschränkungen auch veranschaulichen, was die Spezifikation als _Rückzugsstrategie_ bezeichnet.

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
