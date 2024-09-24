---
title: "MediaTrackSettings: groupId-Eigenschaft"
short-title: groupId
slug: Web/API/MediaTrackSettings/groupId
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`groupId`**-Eigenschaft des {{domxref("MediaTrackSettings")}}-Wörterbuchs ist eine für die Browsing-Session eindeutige Zeichenkette, die die Gruppe von Geräten identifiziert, welche die Quelle für das {{domxref("MediaStreamTrack")}} enthält. Dies ermöglicht es Ihnen zu bestimmen, welcher Wert ausgewählt wurde, um Ihre angegebenen Einschränkungen für den Wert dieser Eigenschaft zu erfüllen, wie in der {{domxref("MediaTrackConstraints.groupId")}}-Eigenschaft beschrieben, die Sie beim Aufruf von {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} bereitgestellt haben.

Bei Bedarf können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.groupId")}} überprüfen, der durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. In der Regel ist dies jedoch nicht erforderlich, da Browser unbekannte Einschränkungen ignorieren.

Da {{Glossary("RTP")}} diese Information nicht enthält, werden Spuren, die mit einem [WebRTC](/de/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}} verbunden sind, diese Eigenschaft niemals enthalten.

## Wert

Eine Zeichenkette, deren Wert ein für die Browsing-Session eindeutiger Identifikator für eine Gruppe von Geräten ist, die die Quelle der Inhaltsspur umfasst. Zwei Geräte teilen dieselbe Gruppen-ID, wenn sie zum selben physischen Hardwaregerät gehören. Zum Beispiel hat ein Headset zwei Geräte: ein Mikrofon, das als Quelle für Audiotracks dienen kann, und einen Lautsprecher, der als Ausgabe für Audio fungieren kann.

Die Gruppen-ID ist über mehrere Browsing-Sessions hinweg nicht verwendbar. Sie kann jedoch verwendet werden, um sicherzustellen, dass die Audioeingabe und -ausgabe beide auf demselben Headset durchgeführt werden, oder um sicherzustellen, dass die eingebaute Kamera und das Mikrofon auf einem Telefon für Videokonferenzen genutzt werden.

Der tatsächliche Wert der Zeichenkette wird jedoch durch die Quelle der Spur bestimmt, und es gibt keine Garantie für dessen Form, obwohl die Spezifikation empfiehlt, dass es sich um eine GUID handelt.

Da diese Eigenschaft über Browsing-Sessions hinweg nicht stabil ist, ist ihre Nützlichkeit beim Aufrufen von {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} im Allgemeinen darauf beschränkt, sicherzustellen, dass Aufgaben, die während derselben Browsing-Session ausgeführt werden, Geräte aus derselben Gruppe nutzen (oder nicht aus derselben Gruppe nutzen). Es gibt keine Situation, in der der groupId beim Aufrufen von `applyConstraints()` nützlich wäre, da der Wert nicht geändert werden kann.

## Beispiele

Siehe das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, constraints, and settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackSettings.deviceId")}}
- {{domxref("MediaTrackConstraints.groupId")}}
- {{domxref("MediaTrackSettings")}}
