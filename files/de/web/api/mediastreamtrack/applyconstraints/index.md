---
title: "MediaStreamTrack: applyConstraints()-Methode"
short-title: applyConstraints()
slug: Web/API/MediaStreamTrack/applyConstraints
l10n:
  sourceCommit: 1fc327ab47c4fc89eff6e1d05780babd720e4b13
---

{{APIRef("Media Capture and Streams")}}

Die **`applyConstraints()`**-Methode des {{domxref("MediaStreamTrack")}}-Interfaces wendet eine Reihe von Einschränkungen auf die Spur an. Diese Einschränkungen ermöglichen es der Website oder App, ideale Werte und akzeptable Wertebereiche für die einschränkbaren Eigenschaften der Spur, wie Bildrate, Abmessungen, Echokompensation usw., festzulegen.

Einschränkungen können verwendet werden, um sicherzustellen, dass die Medien bestimmte Richtlinien erfüllen, die Sie bevorzugen.
Zum Beispiel bevorzugen Sie möglicherweise hochauflösende Videos, erfordern jedoch, dass die Bildrate ein wenig niedrig ist, um die Datenrate niedrig genug zu halten, um das Netzwerk nicht zu überlasten.
Einschränkungen können auch ideale und/oder akzeptable Größen oder Größenbereiche angeben.
Weitere Informationen darüber, wie Sie Ihre bevorzugten Einschränkungen anwenden können, finden Sie unter [Einschränkungen anwenden](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#applying_constraints) in [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

## Syntax

```js-nolint
applyConstraints()
applyConstraints(constraints)
```

### Parameter

- `constraints` {{optional_inline}}
  - : Ein {{domxref("MediaTrackConstraints")}}-Objekt, welches die auf die einschränkbaren Eigenschaften der Spur anzuwendenden Einschränkungen auflistet; alle bestehenden Einschränkungen werden durch die angegebenen neuen Werte ersetzt und alle nicht eingeschlossenen einschränkbaren Eigenschaften werden auf ihre Standardeinschränkungen zurückgesetzt.
    Wenn dieser Parameter weggelassen wird, werden alle derzeit gesetzten benutzerdefinierten Einschränkungen gelöscht.
    Dieses Objekt repräsentiert den grundlegenden Satz von Einschränkungen, die gelten müssen, damit das {{jsxref("Promise")}} aufgelöst wird.
    Das Objekt kann eine fortgeschrittene Eigenschaft enthalten, die ein Array zusätzlicher `MediaTrackConstraints`-Objekte enthält, die als präzise Anforderungen behandelt werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Einschränkungen erfolgreich angewendet wurden.
Wenn die Einschränkungen nicht angewendet werden können, wird das Promise mit einem {{domxref("OverconstrainedError")}} abgelehnt, der ein {{domxref("DOMException")}} ist, dessen Name `OverconstrainedError` lautet und zusätzliche Parameter aufweist, um anzuzeigen, dass die Einschränkungen nicht erfüllt werden konnten.
Dies kann passieren, wenn die angegebenen Einschränkungen zu streng sind, um eine Übereinstimmung bei dem Versuch, die Spur zu konfigurieren, zu finden.

## Beispiele

Das folgende Beispiel zeigt, wie man einen grundlegenden und fortgeschrittenen Satz von Einschränkungen angibt.
Es legt fest, dass die Seite oder Web-App eine Breite zwischen 640 und 1280 und eine Höhe zwischen 480 und 720 benötigt, wobei die spätere Zahl in jedem Paar bevorzugt wird.
Die fortgeschrittene Eigenschaft gibt weiter an, dass eine Bildgröße von 1920 mal 1280 bevorzugt wird oder ein {{glossary("Seitenverhältnis")}} von 1.333, wenn dies nicht verfügbar ist.
Beachten Sie, dass diese Einschränkungen auch das veranschaulichen, was die Spezifikation als _Backoff-Strategie_ bezeichnet.

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
