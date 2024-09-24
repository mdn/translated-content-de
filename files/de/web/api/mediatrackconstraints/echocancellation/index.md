---
title: "MediaTrackConstraints: echoCancellation-Eigenschaft"
short-title: echoCancellation
slug: Web/API/MediaTrackConstraints/echoCancellation
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`echoCancellation`**-Eigenschaft des {{domxref("MediaTrackConstraints")}}-Wörterbuchs ist ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), der die angeforderten oder zwingenden Einschränkungen beschreibt, die auf den Wert der einschränkbaren Eigenschaft {{domxref("MediaTrackSettings.echoCancellation", "echoCancellation")}} angewendet werden.

Wenn nötig, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.echoCancellation")}} überprüfen, der durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. In der Regel ist dies jedoch nicht erforderlich, da Browser alle Einschränkungen ignorieren, die ihnen unbekannt sind.

Da {{Glossary("RTP")}} diese Informationen nicht enthält, werden Spuren, die mit einer [WebRTC](/de/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}} verbunden sind, diese Eigenschaft niemals enthalten.

## Wert

Wenn dieser Wert ein einfaches `true` oder `false` ist, wird der Benutzeragent versuchen, Medien mit aktivierter oder deaktivierter Echounterdrückung wie angegeben zu erhalten, wenn möglich, aber nicht fehlschlagen, falls dies nicht möglich ist. Wenn der Wert stattdessen als Objekt mit einem `exact`-Feld angegeben wird, zeigt der boolesche Wert dieses Felds eine erforderliche Einstellung für die Echounterdrückungsfunktion an; wenn diese nicht erfüllt werden kann, führt die Anfrage zu einem Fehler.

## Beispiele

Siehe das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
