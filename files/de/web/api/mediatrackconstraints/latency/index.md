---
title: "MediaTrackConstraints: latency-Eigenschaft"
short-title: latency
slug: Web/API/MediaTrackConstraints/latency
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

Die **`latency`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Dictionarys ist ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), der die gewünschten oder zwingenden Vorgaben für den Wert der einschränkbaren Eigenschaft [`latency`](/de/docs/Web/API/MediaStreamTrack/getSettings#latency) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Vorgabe unterstützt wird, indem Sie den Wert von [`latency`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#latency) überprüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist dies jedoch nicht nötig, da Browser ihnen unbekannte Vorgaben ignorieren.

Da {{Glossary("RTP", "RTP")}} diese Information nicht enthält, weisen Tracks, die einer [WebRTC](/de/docs/Web/API/WebRTC_API)-[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zugeordnet sind, diese Eigenschaft nie auf.

## Wert

Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), der den zulässigen oder erforderlichen Wert beziehungsweise Werte für die Latenz eines Audio-Tracks beschreibt, angegeben in Sekunden. Bei der Audioverarbeitung ist die Latenz die Zeit zwischen dem Beginn der Verarbeitung (wenn ein Ton in der realen Welt entsteht oder von einem Hardwaregerät erzeugt wird) und dem Zeitpunkt, zu dem die Daten für den nächsten Schritt der Audioeingabe oder -ausgabe verfügbar sind. In den meisten Fällen ist eine niedrige Latenz für die Leistung und die Benutzererfahrung wünschenswert. Wenn jedoch der Stromverbrauch eine Rolle spielt oder Verzögerungen anderweitig akzeptabel sind, kann auch eine höhere Latenz akzeptabel sein.

Ist der Wert dieser Eigenschaft eine Zahl, versucht der User Agent, Medien zu erhalten, deren Latenz unter Berücksichtigung der Hardwarefähigkeiten und der anderen angegebenen Vorgaben möglichst nahe an dieser Zahl liegt. Andernfalls dient der Wert dieses [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) dem User Agent als Grundlage, um die erforderliche Latenz exakt zu erreichen (wenn `exact` angegeben ist oder wenn sowohl `min` als auch `max` angegeben sind und denselben Wert haben) oder den bestmöglichen Wert zu erzielen.

> [!NOTE]
> Die Latenz unterliegt aufgrund der Hardwareauslastung, Netzwerkbedingungen und anderer Faktoren immer gewissen Schwankungen. Daher sind auch bei einer „exakten“ Übereinstimmung Abweichungen zu erwarten.

## Beispiele

Sehen Sie sich das Beispiel zum [Testen von Vorgaben](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Vorgaben und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
