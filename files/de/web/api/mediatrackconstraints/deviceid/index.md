---
title: "MediaTrackConstraints: deviceId-Eigenschaft"
short-title: deviceId
slug: Web/API/MediaTrackConstraints/deviceId
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Das **`deviceId`**-Eigenschafts des {{domxref("MediaTrackConstraints")}}-Wörterbuchs ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), welches die gewünschten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der {{domxref("MediaTrackSettings.deviceId", "deviceId")}}-Einschränkungseigenschaft angewendet werden sollen.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.deviceId")}} überprüfen, wie er durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle unbekannten Einschränkungen ignorieren.

Da {{Glossary("RTP")}} diese Information nicht enthält, werden Tracks, die mit einem [WebRTC](/de/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}} verbunden sind, niemals diese Eigenschaft enthalten.

## Wert

Ein Objekt basierend auf [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das eine oder mehrere annehmbare, ideale und/oder exakte (obligatorische) Geräte-IDs angibt, die als Quelle von Medieninhalten akzeptabel sind.

Geräte-IDs sind für einen bestimmten Ursprung eindeutig und sind innerhalb von Browsing-Sitzungen auf demselben Ursprung gleichbleibend. Der Wert der `deviceId` wird jedoch durch die Quelle des Inhalts des Tracks bestimmt, und es gibt kein spezifisches Format, das durch die Spezifikation vorgeschrieben ist (obwohl eine Art GUID empfohlen wird). Das bedeutet, dass ein bestimmter Track nur einen Wert für die `deviceId` zurückgeben wird, wenn Sie {{domxref("MediaStreamTrack.getCapabilities", "getCapabilities()")}} aufrufen.

Aufgrund dessen gibt es keinen Nutzen für die Geräte-ID beim Aufruf von {{domxref("MediaStreamTrack.applyConstraints()")}}, da es nur einen möglichen Wert gibt; jedoch können Sie eine `deviceId` aufzeichnen und verwenden, um sicherzustellen, dass Sie dieselbe Quelle für mehrere Aufrufe von {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} erhalten.

> [!NOTE]
> Eine Ausnahme von der Regel, dass Geräte-IDs in Browsing-Sitzungen gleich sind: Der private Browsing-Modus verwendet eine andere ID und ändert sie jede Browsing-Sitzung.

## Beispiele

Siehe das Beispiel [Constraint-Übungsbeispiel](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
