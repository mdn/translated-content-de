---
title: "RTCRtpReceiver: Eigenschaft jitterBufferTarget"
short-title: jitterBufferTarget
slug: Web/API/RTCRtpReceiver/jitterBufferTarget
l10n:
  sourceCommit: a9ed68046545018031dcf77330d901e2cf7054e9
---

{{APIRef("WebRTC API")}}

Die **`jitterBufferTarget`**-Eigenschaft der {{domxref("RTCRtpReceiver")}}-Schnittstelle ist ein {{domxref("DOMHighResTimeStamp")}}, das die bevorzugte Dauer der Anwendung in Millisekunden angibt, für die der Jitter-Puffer Medien halten soll, bevor sie abgespielt werden.

Die Anwendung kann damit den Kompromiss zwischen Wiedergabeverzögerung und dem Risiko beeinflussen, dass aufgrund von Netzwerk-Jitter Audio- oder Videoframes ausgehen.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}, das die aktuelle Zielhaltezeit des Jitter-Puffers in Millisekunden angibt.

Der Wert kann auf einen positiven Wert von maximal 4000 Millisekunden gesetzt werden.

## Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ziel auf einen negativen Wert oder einen Wert, der größer als 4000 Millisekunden ist, gesetzt wird.

## Beschreibung

Der Wert des Attributs beeinflusst die Menge des Pufferings, das vom Benutzeragenten durchgeführt wird, was wiederum Auswirkungen auf Wiederübertragungen und die Wiederherstellung von Paketverlusten hat.

Beachten Sie, dass das Attribut den Jitter-Puffer des Benutzeragenten "beeinflusst", ihn jedoch nicht direkt setzt. Der tatsächliche Jitter-Puffer des Benutzeragenten variiert zwischen maximalen und minimalen erlaubten Werten, die einen Zielbereich widerspiegeln, den der Benutzeragent basierend auf den Netzwerkbedingungen und Speicherbeschränkungen bieten kann, und kann sich jederzeit ändern. Der Wert, der von `jitterBufferTarget` zurückgegeben wird, wird nicht vom tatsächlichen Ziel des Benutzeragenten beeinflusst.

Die durchschnittliche Jitter-Puffer-Verzögerung kann berechnet werden, indem man die [`RTCInboundRtpStreamStats.jitterBufferDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats) durch die [`RTCInboundRtpStreamStats.jitterBufferEmittedCount`](/de/docs/Web/API/RTCInboundRtpStreamStats) teilt. Um die Effekte der Änderung des Jitter-Puffer-Ziels zu beobachten, können Sie die Veränderung dieses Durchschnittswerts über die Zeit verfolgen.

Wenn `RTCRtpReceiver` Audio- und Videospuren synchronisiert sind, sollte für beide Empfänger der größere der beiden `jitterBufferTarget`-Werte verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
