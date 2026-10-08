---
title: "MediaTrackConstraints: facingMode-Eigenschaft"
short-title: facingMode
slug: Web/API/MediaTrackConstraints/facingMode
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`facingMode`** des Dictionaries [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), der die gewünschten oder zwingenden Einschränkungen für den Wert der einschränkbaren Eigenschaft [`facingMode`](/de/docs/Web/API/MediaStreamTrack/getSettings#facingmode) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`facingMode`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#facingmode) untersuchen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. Normalerweise ist das jedoch nicht erforderlich, da Browser ihnen unbekannte Einschränkungen ignorieren.

Da {{Glossary("RTP", "RTP")}} diese Information nicht enthält, weisen Tracks, die einer [WebRTC](/de/docs/Web/API/WebRTC_API)-[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zugeordnet sind, diese Eigenschaft niemals auf.

## Wert

Ein auf [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring) basierendes Objekt, das einen oder mehrere zulässige, bevorzugte und/oder exakte (zwingend erforderliche) Werte für die Ausrichtung einer Videospur angibt.

Ein `exact`-Wert bedeutet hier, dass die angegebene Ausrichtung zwingend erforderlich ist. Zum Beispiel:

```js
const constraints = {
  facingMode: { exact: "user" },
};
```

Dies bedeutet, dass nur eine zum Benutzer gerichtete Kamera zulässig ist. Wenn eine solche Kamera nicht vorhanden ist oder der Benutzer die Berechtigung zu ihrer Verwendung verweigert, schlägt die Medienanfrage fehl.

Die folgenden Strings sind als Werte für die Ausrichtung zulässig. Sie können unterschiedliche Kameras oder Richtungen bezeichnen, in die eine verstellbare Kamera ausgerichtet werden kann.

- `"user"`
  - : Die Videoquelle ist auf den Benutzer gerichtet. Dazu gehört beispielsweise die Frontkamera eines Smartphones.
- `"environment"`
  - : Die Videoquelle ist vom Benutzer weg auf dessen Umgebung gerichtet. Dies ist die rückseitige Kamera eines Smartphones.
- `"left"`
  - : Die Videoquelle ist auf den Benutzer gerichtet, befindet sich aber links von ihm, beispielsweise eine Kamera, die über seine linke Schulter hinweg auf ihn ausgerichtet ist.
- `"right"`
  - : Die Videoquelle ist auf den Benutzer gerichtet, befindet sich aber rechts von ihm, beispielsweise eine Kamera, die über seine rechte Schulter hinweg auf ihn ausgerichtet ist.

## Beispiele

Sehen Sie sich das Beispiel zum [Ausprobieren von Einschränkungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) an.

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
