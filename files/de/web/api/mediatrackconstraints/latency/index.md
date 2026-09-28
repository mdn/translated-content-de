---
title: "MediaTrackConstraints: Eigenschaft latency"
short-title: latency
slug: Web/API/MediaTrackConstraints/latency
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`latency`** des Dictionaries [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), der die gewünschten oder zwingenden Einschränkungen für den Wert der einschränkbaren Eigenschaft [`latency`](/de/docs/Web/API/MediaTrackSettings/latency) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird: Rufen Sie dazu [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) auf und prüfen Sie den zurückgegebenen Wert von [`latency`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#latency). In der Regel ist dies jedoch nicht nötig, da Browser ihnen unbekannte Einschränkungen ignorieren.

Da {{Glossary("RTP", "RTP")}} diese Information nicht enthält, weisen Tracks, die einer [WebRTC](/de/docs/Web/API/WebRTC_API)-[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zugeordnet sind, diese Eigenschaft niemals auf.

## Wert

Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), der die zulässigen oder erforderlichen Werte für die Latenz eines Audio-Tracks beschreibt. Die Werte werden in Sekunden angegeben. Bei der Audioverarbeitung bezeichnet Latenz die Zeit zwischen dem Beginn der Verarbeitung – wenn ein Geräusch in der realen Welt auftritt oder von einem Hardwaregerät erzeugt wird – und dem Zeitpunkt, zu dem die Daten für den nächsten Schritt der Audioeingabe oder -ausgabe verfügbar sind. In den meisten Fällen ist eine geringe Latenz für die Leistung und die Benutzererfahrung wünschenswert. Wenn jedoch der Stromverbrauch eine Rolle spielt oder Verzögerungen aus anderen Gründen akzeptabel sind, kann auch eine höhere Latenz vertretbar sein.

Wenn der Wert dieser Eigenschaft eine Zahl ist, versucht der User Agent, unter Berücksichtigung der Hardwarefähigkeiten und der anderen angegebenen Einschränkungen Medien mit einer Latenz bereitzustellen, die möglichst nahe an dieser Zahl liegt. Andernfalls bestimmt der Wert dieses [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), ob der User Agent eine exakte Übereinstimmung mit der geforderten Latenz anstrebt (wenn `exact` angegeben ist oder `min` und `max` angegeben sind und denselben Wert haben) oder einen möglichst gut passenden Wert.

> [!NOTE]
> Die Latenz unterliegt aufgrund der Hardwareauslastung, der Netzwerkbedingungen und anderer Faktoren stets gewissen Schwankungen. Selbst bei einer „exakten“ Übereinstimmung sollten Sie daher mit Abweichungen rechnen.

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
