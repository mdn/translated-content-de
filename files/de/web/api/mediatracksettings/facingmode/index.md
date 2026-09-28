---
title: "MediaTrackSettings: facingMode-Eigenschaft"
short-title: facingMode
slug: Web/API/MediaTrackSettings/facingMode
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`facingMode`** des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Dictionarys ist ein String, der angibt, in welche Richtung die Kamera derzeit ausgerichtet ist, die den durch den [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) repräsentierten Videotrack erzeugt. So können Sie feststellen, welcher Wert ausgewählt wurde, um die von Ihnen festgelegten Vorgaben für diese Eigenschaft zu erfüllen. Diese Vorgaben werden durch die Eigenschaft [`MediaTrackConstraints.facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) beschrieben, die Sie beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) angegeben haben.

Bei Bedarf können Sie prüfen, ob diese Vorgabe unterstützt wird, indem Sie den Wert von [`facingMode`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#facingmode) überprüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. Normalerweise ist dies jedoch nicht erforderlich, da Browser ihnen unbekannte Vorgaben ignorieren.

Da {{Glossary("RTP", "RTP")}} diese Information nicht enthält, ist diese Eigenschaft bei Tracks, die einer [WebRTC](/de/docs/Web/API/WebRTC_API)-[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zugeordnet sind, niemals enthalten.

## Wert

Ein String, dessen Wert einer der unter [`VideoFacingModeEnum`](#videofacingmodeenum) aufgeführten Strings ist.

### VideoFacingModeEnum

Die folgenden Strings sind zulässige Werte für die Ausrichtung. Sie können unterschiedliche Kameras bezeichnen oder Richtungen, in die eine verstellbare Kamera ausgerichtet werden kann.

- `"user"`
  - : Die Videoquelle ist auf die nutzende Person gerichtet. Dazu gehört beispielsweise die Frontkamera eines Smartphones.
- `"environment"`
  - : Die Videoquelle ist von der nutzenden Person weg auf deren Umgebung gerichtet. Bei einem Smartphone ist dies die Rückkamera.
- `"left"`
  - : Die Videoquelle ist auf die nutzende Person gerichtet, befindet sich aber links von ihr, beispielsweise eine Kamera, die über ihre linke Schulter hinweg auf sie gerichtet ist.
- `"right"`
  - : Die Videoquelle ist auf die nutzende Person gerichtet, befindet sich aber rechts von ihr, beispielsweise eine Kamera, die über ihre rechte Schulter hinweg auf sie gerichtet ist.

## Beispiele

Siehe das Beispiel zum [Testen von Vorgaben](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Vorgaben und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
