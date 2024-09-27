---
title: "MediaTrackConstraints: Latenz-Eigenschaft"
short-title: latency
slug: Web/API/MediaTrackConstraints/latency
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Das **`latency`**-Attribut des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), der die angeforderten oder zwingenden Einschränkungen beschreibt, die auf den Wert der [`latency`](/de/docs/Web/API/MediaTrackSettings/latency) -Eigenschaft anwendbar sind.

Bei Bedarf können Sie ermitteln, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.latency`](/de/docs/Web/API/MediaTrackSupportedConstraints/latency) überprüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Dies ist jedoch normalerweise nicht erforderlich, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

Da [RTP](/de/docs/Glossary/RTP) diese Information nicht einschließt, werden mit einer [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) assoziierte Spuren dieses Attribut niemals enthalten.

## Wert

Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), der die akzeptablen oder erforderlichen Werte für die Latenz einer Audiospur beschreibt, wobei die Werte in Sekunden angegeben sind. In der Audiobearbeitung ist Latenz die Zeit zwischen dem Beginn der Verarbeitung (wenn ein Geräusch in der realen Welt auftritt oder von einem Hardwaregerät erzeugt wird) und der Verfügbarkeit der Daten für den nächsten Schritt im Audioeingabe- oder -ausgabevorgang. In den meisten Fällen ist für Leistung und Benutzererfahrung eine geringe Latenz wünschenswert, aber wenn der Stromverbrauch ein Anliegen ist oder Verzögerungen akzeptabel sind, könnte eine höhere Latenz akzeptabel sein.

Wenn der Wert dieser Eigenschaft eine Zahl ist, wird der User-Agent versuchen, Medien zu beziehen, deren Latenz so nah wie möglich an dieser Zahl liegt, gegeben die Fähigkeiten der Hardware und die anderen angegebenen Einschränkungen. Andernfalls wird der Wert dieses [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) den User-Agent bei seinen Bemühungen leiten, eine genaue Übereinstimmung mit der erforderlichen Latenz (wenn `exact` angegeben ist oder wenn sowohl `min` als auch `max` bereitgestellt werden und denselben Wert haben) oder einen bestmöglichen Wert zu liefern.

> [!NOTE]
> Die Latenz unterliegt immer einer gewissen Variation aufgrund der Anforderungen der Hardware-Nutzung, Netzwerkeinschränkungen und so weiter, sodass selbst bei einer "genauen" Übereinstimmung eine gewisse Abweichung zu erwarten ist.

## Beispiele

Siehe das [Example constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser)-Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, constraints, and settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
