---
title: "MediaTrackConstraints: facingMode-Eigenschaft"
short-title: facingMode
slug: Web/API/MediaTrackConstraints/facingMode
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`facingMode`**-Attribut des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das die angeforderten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode)-eigenschaft anwendbar sind.

Falls nötig, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.facingMode`](/de/docs/Web/API/MediaTrackSupportedConstraints/facingMode) überprüfen, der von einem Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht erforderlich, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

Da [RTP](/de/docs/Glossary/RTP) diese Information nicht enthält, werden Tracks, die mit einer [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbunden sind, diese Eigenschaft niemals enthalten.

## Wert

Ein Objekt basierend auf [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das angibt, welche akzeptablen, idealen und/oder exakten (obligatorischen) Ausrichtungen für eine Videospur akzeptabel sind.

Ein `exact`-Wert in diesem Fall gibt an, dass der spezifizierte Modus für die Ausrichtung speziell erforderlich ist; zum Beispiel:

```js
const constraints = {
  facingMode: { exact: "user" },
};
```

Dies zeigt an, dass nur eine benutzerorientierte Kamera akzeptabel ist; wenn keine benutzerorientierte Kamera vorhanden ist oder der Benutzer die Erlaubnis zur Nutzung dieser Kamera verweigert, wird die Medienanforderung fehlschlagen.

Die folgenden Zeichenfolgen sind als Werte für den Modus der Ausrichtung zulässig. Sie können separate Kameras darstellen, oder sie können Richtungen darstellen, in die eine verstellbare Kamera gerichtet werden kann.

- `"user"`
  - : Die Videoquelle ist auf den Benutzer gerichtet; dazu gehört beispielsweise die Frontkamera eines Smartphones.
- `"environment"`
  - : Die Videoquelle ist vom Benutzer weggerichtet und zeigt damit ihre Umgebung an. Dies ist die Rückkamera eines Smartphones.
- `"left"`
  - : Die Videoquelle ist auf den Benutzer gerichtet, aber zu dessen linker Seite, beispielsweise eine Kamera, die auf den Benutzer, aber über deren linke Schulter gerichtet ist.
- `"right"`
  - : Die Videoquelle ist auf den Benutzer gerichtet, aber zu deren rechter Seite, beispielsweise eine Kamera, die auf den Benutzer, aber über deren rechte Schulter gerichtet ist.

## Beispiele

Siehe das Beispiel [Einschränkungs-Rechner](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
