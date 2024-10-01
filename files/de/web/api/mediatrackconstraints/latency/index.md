---
title: "MediaTrackConstraints: Latenzeigenschaft"
short-title: latency
slug: Web/API/MediaTrackConstraints/latency
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Das **`latency`**-Attribut des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die angeforderten oder zwingenden Einschränkungen beschreibt, die auf den Wert der [`latency`](/de/docs/Web/API/MediaTrackSettings/latency)-einschränkbaren Eigenschaft angewendet werden.

Wenn nötig, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.latency`](/de/docs/Web/API/MediaTrackSupportedConstraints/latency) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Normalerweise ist dies jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

Da {{Glossary("RTP", "RTP")}} diese Information nicht enthält, werden Tracks, die mit einem [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) assoziiert sind, diese Eigenschaft nie enthalten.

## Wert

Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), der den akzeptablen oder erforderlichen Wert(e) für die Latenz eines Audio-Tracks beschreibt, wobei die Werte in Sekunden angegeben werden. In der Audiobearbeitung ist die Latenz die Zeit zwischen dem Beginn der Verarbeitung (wenn ein Geräusch in der realen Welt auftritt oder von einem Hardwaregerät erzeugt wird) und den Daten, die für den nächsten Schritt im Audioeingabe- oder -ausgabeprozess verfügbar gemacht werden. In den meisten Fällen ist eine niedrige Latenz aus Leistungs- und Benutzererfahrungsgründen wünschenswert, aber wenn der Energieverbrauch ein Anliegen ist oder Verzögerungen anderweitig akzeptabel sind, könnte eine höhere Latenz akzeptabel sein.

Wenn der Wert dieser Eigenschaft eine Zahl ist, wird der User-Agent versuchen, Medien zu beschaffen, deren Latenz möglichst nahe an dieser Zahl liegt, basierend auf den Fähigkeiten der Hardware und den anderen angegebenen Einschränkungen. Andernfalls wird der Wert dieses [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) den User-Agent bei seinen Bemühungen leiten, eine exakte Übereinstimmung mit der erforderlichen Latenz zu liefern (wenn `exact` angegeben ist oder sowohl `min` als auch `max` den gleichen Wert haben) oder zu einem bestmöglichen Wert.

> [!NOTE]
> Latenz ist immer anfällig für einige Variationen aufgrund von Hardware-Nutzungsanforderungen, Netzwerkeinschränkungen usw., daher sollte selbst bei einer "exakten" Übereinstimmung mit einigen Abweichungen gerechnet werden.

## Beispiele

Sehen Sie sich das Beispiel [Constraint-Übungsprogramm](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) an.

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
