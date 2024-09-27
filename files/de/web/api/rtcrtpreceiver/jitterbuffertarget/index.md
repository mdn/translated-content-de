---
title: "RTCRtpReceiver: Eigenschaft jitterBufferTarget"
short-title: jitterBufferTarget
slug: Web/API/RTCRtpReceiver/jitterBufferTarget
l10n:
  sourceCommit: a9ed68046545018031dcf77330d901e2cf7054e9
---

{{APIRef("WebRTC API")}}

Die **`jitterBufferTarget`**-Eigenschaft der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Schnittstelle ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die von der Anwendung bevorzugte Dauer in Millisekunden angibt, für die der Jitter-Puffer Medien halten sollte, bevor sie abgespielt werden.

Die Anwendung kann damit den Kompromiss zwischen Wiedergabeverzögerung und dem Risiko des Ausfalls von Audio- oder Videoframes aufgrund von Netzwerk-Jitter beeinflussen.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die aktuelle Jitter-Puffer-Zielhaltezeit in Millisekunden angibt.

Der Wert kann auf einen positiven Wert von maximal 4000 Millisekunden gesetzt werden.

## Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn das Ziel auf einen negativen Wert oder einen Wert größer als 4000 Millisekunden gesetzt wird.

## Beschreibung

Der Wert des Attributs beeinflusst die Menge des Pufferings, das vom Benutzeragenten durchgeführt wird, was wiederum die erneute Übertragung und die Wiederherstellung von Paketverlusten beeinflusst.

Beachten Sie, dass das Attribut den Jitter-Puffer-Zielwert des Benutzeragenten "beeinflusst", ihn aber nicht direkt setzt.
Der tatsächliche Jitter-Puffer-Zielwert des Benutzeragenten variiert zwischen maximalen und minimalen erlaubten Werten, die einen Zielbereich darstellen, den der Benutzeragent basierend auf den Netzwerkbedingungen und Speicherbeschränkungen bereitstellen kann, und kann sich jederzeit ändern.
Der von `jitterBufferTarget` zurückgegebene Wert wird nicht vom tatsächlichen Ziel des Benutzeragenten beeinflusst.

Die durchschnittliche Jitter-Puffer-Verzögerung kann berechnet werden, indem der [`RTCInboundRtpStreamStats.jitterBufferDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats) durch den [`RTCInboundRtpStreamStats.jitterBufferEmittedCount`](/de/docs/Web/API/RTCInboundRtpStreamStats) geteilt wird.
Um die Auswirkungen der Änderung des Jitter-Puffer-Ziels zu beobachten, können Sie die Veränderung dieses Durchschnittswertes über die Zeit verfolgen.

Wenn `RTCRtpReceiver` Audio- und Videospuren synchronisiert sind, sollte der größere der beiden `jitterBufferTarget`-Werte für beide Empfänger verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
