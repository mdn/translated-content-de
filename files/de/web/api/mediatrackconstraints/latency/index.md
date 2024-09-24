---
title: "MediaTrackConstraints: Latenzeigenschaft"
short-title: Latenz
slug: Web/API/MediaTrackConstraints/latency
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Das **`latency`**-Eigenschaft des {{domxref("MediaTrackConstraints")}}-Wörterbuchs ist ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die angeforderten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der {{domxref("MediaTrackSettings.latency", "latency")}}-beschränkbaren Eigenschaft angewendet werden.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.latency")}} überprüfen, der von einem Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. Normalerweise ist dies jedoch nicht notwendig, da Browser Einschränkungen ignorieren, die ihnen unbekannt sind.

Da {{Glossary("RTP")}} diese Information nicht enthält, werden Tracks, die mit einer [WebRTC](/de/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}} verbunden sind, diese Eigenschaft niemals enthalten.

## Wert

Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die akzeptablen oder erforderlichen Werte für die Latenz eines Audio-Tracks beschreibt, wobei die Werte in Sekunden angegeben werden. In der Audiobearbeitung ist Latenz die Zeit zwischen dem Beginn der Verarbeitung (wenn ein Geräusch in der realen Welt auftritt oder von einem Hardwaregerät erzeugt wird) und den Daten, die für den nächsten Schritt im Audioeingangs- oder -ausgabeprozess verfügbar gemacht werden. In den meisten Fällen ist eine geringe Latenz wünschenswert für Leistung und Benutzererfahrung, aber wenn der Stromverbrauch eine Rolle spielt oder Verzögerungen anderweitig akzeptabel sind, könnte eine höhere Latenz akzeptabel sein.

Wenn der Wert dieser Eigenschaft eine Zahl ist, wird der Benutzeragent versuchen, Medien zu beziehen, deren Latenz so nah wie möglich an dieser Zahl liegt, unter Berücksichtigung der Fähigkeiten der Hardware und der anderen angegebenen Einschränkungen. Andernfalls wird der Wert dieses [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) den Benutzeragenten dabei leiten, eine genaue Übereinstimmung mit der erforderlichen Latenz (wenn `exact` angegeben ist oder sowohl `min` als auch `max` bereitgestellt werden und denselben Wert haben) oder den bestmöglichen Wert bereitzustellen.

> [!NOTE]
> Latenz unterliegt immer gewissen Schwankungen aufgrund von Anforderungen an die Hardware, Netzwerkbeschränkungen usw., sodass selbst bei einer "genauen" Übereinstimmung einige Variationen zu erwarten sind.

## Beispiele

Siehe das Beispiel [Constraints-Übung](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
