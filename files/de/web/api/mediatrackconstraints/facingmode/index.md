---
title: "MediaTrackConstraints: facingMode-Eigenschaft"
short-title: facingMode
slug: Web/API/MediaTrackConstraints/facingMode
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`facingMode`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Dictionaries ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das die gewünschten oder zwingenden Einschränkungen für den Wert der [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode)-Eigenschaft beschreibt.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.facingMode`](/de/docs/Web/API/MediaTrackSupportedConstraints/facingMode) prüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Normalerweise ist dies jedoch nicht notwendig, da Browser alle Einschränkungen ignorieren, die ihnen unbekannt sind.

Da [RTP](/de/docs/Glossary/RTP) diese Information nicht enthält, beinhalten Tracks, die mit einer [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbunden sind, niemals diese Eigenschaft.

## Wert

Ein Objekt basierend auf [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das eine oder mehrere akzeptable, ideale und/oder exakte (verpflichtende) Ausrichtungen spezifiziert, die für eine Videospur akzeptabel sind.

Ein `exact`-Wert in diesem Fall gibt an, dass die angegebene Ausrichtung zwingend erforderlich ist; zum Beispiel:

```js
const constraints = {
  facingMode: { exact: "user" },
};
```

Dies gibt an, dass nur eine nach vorne gerichtete Kamera akzeptabel ist; wenn es keine nach vorne gerichtete Kamera gibt oder der Benutzer die Erlaubnis zur Nutzung dieser Kamera verweigert, wird die Medienanforderung fehlschlagen.

Die folgenden Zeichenfolgen sind als Werte für die facing mode erlaubt. Diese können separate Kameras darstellen oder Richtungen, in die eine verstellbare Kamera gerichtet werden kann.

- `"user"`
  - : Die Videoquelle ist dem Benutzer zugewandt; dies schließt zum Beispiel die Frontkamera eines Smartphones ein.
- `"environment"`
  - : Die Videoquelle ist vom Benutzer abgewandt und zeigt auf dessen Umgebung. Dies ist die Rückkamera eines Smartphones.
- `"left"`
  - : Die Videoquelle ist dem Benutzer zugewandt, aber auf seine linke Seite, wie eine Kamera, die auf den Benutzer, aber über seine linke Schulter gerichtet ist.
- `"right"`
  - : Die Videoquelle ist dem Benutzer zugewandt, aber auf seine rechte Seite, wie eine Kamera, die auf den Benutzer, aber über seine rechte Schulter gerichtet ist.

## Beispiele

Siehe das Beispiel des [Constraint Übungswerkzeugs](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
