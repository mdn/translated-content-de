---
title: "MediaTrackConstraints: facingMode-Eigenschaft"
short-title: facingMode
slug: Web/API/MediaTrackConstraints/facingMode
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`facingMode`** des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Dictionaries ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), der die gewünschten oder zwingenden Einschränkungen für den Wert der einschränkbaren Eigenschaft [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird. Überprüfen Sie dazu den Wert von [`facingMode`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#facingmode), den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist dies jedoch nicht erforderlich, da Browser ihnen unbekannte Einschränkungen ignorieren.

Da {{Glossary("RTP", "RTP")}} diese Information nicht enthält, weisen Tracks, die einer [WebRTC](/de/docs/Web/API/WebRTC_API)-[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zugeordnet sind, diese Eigenschaft niemals auf.

## Wert

Ein auf [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring) basierendes Objekt, das einen oder mehrere zulässige, bevorzugte und/oder exakte (zwingend erforderliche) Werte für `facingMode` eines Videotracks angibt.

Ein `exact`-Wert bedeutet in diesem Fall, dass der angegebene Wert für `facingMode` zwingend erforderlich ist. Zum Beispiel:

```js
const constraints = {
  facingMode: { exact: "user" },
};
```

Dies bedeutet, dass nur eine zum Benutzer gerichtete Kamera zulässig ist. Ist keine solche Kamera vorhanden oder verweigert der Benutzer die Berechtigung zu ihrer Verwendung, schlägt die Medienanfrage fehl.

Die folgenden Zeichenfolgen sind als Werte für `facingMode` zulässig. Sie können unterschiedliche Kameras oder Richtungen bezeichnen, in die eine verstellbare Kamera ausgerichtet werden kann.

- `"user"`
  - : Die Videoquelle ist zum Benutzer gerichtet. Dazu gehört beispielsweise die Frontkamera eines Smartphones.
- `"environment"`
  - : Die Videoquelle ist vom Benutzer weggerichtet und erfasst dessen Umgebung. Dies entspricht der Rückkamera eines Smartphones.
- `"left"`
  - : Die Videoquelle ist zum Benutzer gerichtet, befindet sich aber zu dessen Linken, beispielsweise eine Kamera, die über die linke Schulter des Benutzers hinweg auf ihn gerichtet ist.
- `"right"`
  - : Die Videoquelle ist zum Benutzer gerichtet, befindet sich aber zu dessen Rechten, beispielsweise eine Kamera, die über die rechte Schulter des Benutzers hinweg auf ihn gerichtet ist.

## Beispiele

Siehe das Beispiel zum [Testen von Einschränkungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
